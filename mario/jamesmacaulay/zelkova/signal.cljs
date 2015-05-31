(ns jamesmacaulay.zelkova.signal
  "This is Zelkova's core namespace."
  (:refer-clojure :exclude [map merge count reductions])
       
                                   
                                                                    
                                                              
                                                         
        
  (:require [cljs.core :as core]
    [cljs.core.async :as async :refer [<! >!]]
    [cljs.core.async.impl.protocols :as async-impl]
    [jamesmacaulay.zelkova.impl.signal :as impl])
        
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(defn input
  "Returns an input signal with initial value `init`. The signal propagates values
from events which match some `topic`. An asynchronous `value-source` may be provided,
which will be used as the default value source for the given event `topic`. `value-source`
may take the following forms:

* a function taking a live graph and an options map, and returns a channel of values
* a channel of values
* a mult of some such value channel"
  ([init] (input init (keyword (gensym))))
  ([init topic]
   (impl/make-signal {:init-fn             (constantly init)
                      :relayed-event-topic topic}))
  ([init topic value-source]
   (impl/make-signal {:init-fn             (constantly init)
                      :relayed-event-topic topic
                      :event-sources       {topic (impl/value-source->events-fn value-source topic)}})))

(defn write-port
  "Takes an `init` value and an optional `topic`, and returns an input signal
  which satisfies core.async's `WritePort` protocol. This allows you to put
  values onto the signal as if it were a channel. If the `write-port` is being
  used in multiple live graphs, each value put onto the `write-port` is
  sent to all graphs."
  ([init] (write-port init (keyword (gensym))))
  ([init topic]
    (let [write-port-channel (async/chan)]
      (impl/make-signal {:init-fn             (constantly init)
                         :relayed-event-topic topic
                         :event-sources       {topic (impl/value-source->events-fn write-port-channel topic)}
                         :write-port-channel  write-port-channel}))))

(defn- take-nothing
  [rf]
  (fn
    ([] (rf))
    ([result] (rf result))
    ([result _input] (ensure-reduced result))))

(defn constant
  "Returns a constant signal of the given value."
  [x]
  (impl/make-signal {:init-fn   (constantly x)
                     :sources   [:events]
                     :msg-xform take-nothing}))

(defn pipeline
  "Takes a stateless transducer `xform`, a fallback value `base`, and a signal
`sig`. Returns a new signal which pipes values from `sig` through `xform`.
Because transducers may filter out values, you must provide a `base` which will
be used as the derived signal's initial value if the initial value of `sig` ends
up being filtered. If multiple values are emitted from the transduction of the
initial value of `sig`, then the initial value of the new signal will be the
_last_ of those emitted. Stateful transducers will give unexpected results and
are not supported."
  [xform base sig]
  (let [parent-init-fn (:init-fn sig)
        init-fn (fn [live-graph opts]
                  (let [vals (sequence xform [(parent-init-fn live-graph opts)])]
                    (if (seq vals)
                      (last vals)
                      base)))
        msg-xform (comp (core/map (fn [[_event _prev [msg]]] msg))
                        (filter impl/fresh?)
                        (core/map impl/value)
                        xform
                        (core/map impl/fresh))]
    (impl/make-signal {:init-fn init-fn
                       :sources [sig]
                       :msg-xform msg-xform})))

(defn mapseq
  "Takes a mapping function `f` and a sequence of signal `sources`, and returns a
signal of values obtained by applying `f` to the values from the source signals."
  [f sources]
  (if (empty? sources)
    (constant (f))
    (let [sources (vec sources)
          msg-xform (comp (core/map (fn [[_event _prev msgs]] msgs))
                          (filter (fn [msgs] (some impl/fresh? msgs)))
                          (core/map (fn [msgs]
                                      (->> msgs
                                           (core/map impl/value)
                                           (apply f)
                                           (impl/fresh)))))]
      (impl/make-signal {:init-fn (fn [live-graph opts]
                                    (->> sources
                                         (core/map (fn [sig] ((:init-fn sig) live-graph opts)))
                                         (apply f)))
                         :sources sources
                         :msg-xform msg-xform}))))

(defn map
  "Takes a mapping function `f` and any number of signal `sources`, and returns a
signal of values obtained by applying `f` to the values from the source signals."
  [f & sources]
  (mapseq f sources))

(defn template
  "Takes a map whose values are signals, to be used as a template. Returns a new
signal whose values are maps of the same form as `signal-map`, but with the current
value of each signal in place of the signal itself."
  [signal-map]
  (let [ks (keys signal-map)]
    (mapseq (fn [& values]
              (zipmap ks values))
            (vals signal-map))))

(defn indexed-updates
  "Takes a map whose values are signals, to be used as a template. Returns a new
signal whose values are maps that include an entry for every signal in
`signal-map` with a fresh value. For example, assuming that `signal-map` is:

    {:a sig-a
     :b sig-b
     :c sig-c}

Then when `sig-a` has a fresh value of \"foo\", `sig-b`'s value is cached, and
`sig-c` has a fresh value of \"bar\", then the `indexed-updates` signal would
emit `{:a \"foo\" :c \"bar\"}. When none of the signals have fresh values, no
value is emitted from the `indexed-updates` signal. This means that this signal
never emits an empty map."
  [signal-map]
  (let [ks (keys signal-map)
        vs (vals signal-map)
        init-fn (fn [live-graph opts]
                  (zipmap ks (core/map (fn [s] ((:init-fn s) live-graph opts)) vs)))
        kv-xform (comp (filter (fn [[k msg]] (impl/fresh? msg)))
                       (core/map (fn [[k msg]] [k (impl/value msg)])))
        msg-xform (comp (core/map (fn [[_event _prev msgs]]
                                    (into {} kv-xform (core/map vector ks msgs))))
                        (remove empty?)
                        (core/map impl/fresh))]
    (impl/make-signal {:init-fn   init-fn
                       :sources   vs
                       :msg-xform msg-xform})))

(defn foldp
  "Create a past-dependent signal (\"fold into the past\"). The values of a `foldp`
signal are obtained by calling `f` with two arguments: the current value of the
`source` signal, and the previous value of the new `foldp` signal (acting as the
\"accumulator\"). `init` provides the initial value of the new signal, and
therefore acts as the seed accumulator."
  [f base source]
  (impl/make-signal {:init-fn   (constantly base)
                     :sources   [source]
                     :msg-xform (comp (filter (fn [[_event _prev [msg]]]
                                                (impl/fresh? msg)))
                                      (core/map (fn [[_event prev [msg]]]
                                                  (impl/fresh (f (impl/value msg) prev)))))}))

(defn drop-repeats
  "Returns a signal which relays values of `sig`, but drops repeated equal values."
  [sig]
  (impl/make-signal {:init-fn   (:init-fn sig)
                     :sources   [sig]
                     :msg-xform (comp (filter (fn [[_event prev [msg]]]
                                                (and (impl/fresh? msg)
                                                     (not= prev (impl/value msg)))))
                                      (core/map (fn [[_event _prev [msg]]]
                                                  msg)))}))

(defn reductions
  "Create a past-dependent signal like `foldp`, with two differences:
* calls `f` with the arguments reversed to align with Clojure: the first
argument is the accumulator, the second is the current value of `source`.
* if `init` is omitted, the initial value of the new signal will be obtained by
calling `f` with no arguments."
  ([f source] (reductions f (f) source))
  ([f init source]
   (foldp (fn [val prev] (f prev val))
          init
          source)))

(defn select-step
  "Takes an initial value and a map whose keys are signals and whose values are
reducing functions. Returns a past-dependent signal like `reductions`, except
each signal has its own reducing function to use when that signal updates. If
more than one source signal updates from the same input event, then each
applicable reducing function is called to transform the state value in the
same order as they are defined in `signal-handlers-map`."
  [init & signals-and-handlers]
  (let [[signals handlers] (reduce (partial mapv conj)
                                   [[] []]
                                   (partition 2 signals-and-handlers))
        signal->handler (zipmap signals handlers)
        updates-signal (indexed-updates (zipmap signals signals))
        f (fn [prev updates-by-signal]
            (reduce (fn [acc [sig val]]
                      ((signal->handler sig) acc val))
                    prev
                    updates-by-signal))]
    (reductions f init updates-signal)))

(defn async
  "Returns an \"asynchronous\" version of `source`, splitting off a new subgraph which
does not maintain consistent event ordering relative to the main graph. In exchange,
signals which depend on an `async` signal don't have to wait for the `source` to finish
computing new values. This function is mainly useful in multithreaded environments when
you don't want a slow computation to block the whole graph."
  [source]
  (let [topic [::async source]
        msgs->events (comp cat
                           (filter impl/fresh?)
                           (core/map (fn [msg]
                                       (impl/make-event topic (impl/value msg)))))
        events-channel-fn (fn [live-graph _]
                            (async/tap (impl/signal-mult live-graph source)
                                       (async/chan 1 msgs->events)))]
    (impl/make-signal {:init-fn (:init-fn source)
                       :deps [source]
                       :relayed-event-topic topic
                       :event-sources {topic events-channel-fn}})))

(defn splice
  "Splice into the signal graph on the level of core.async channels. Takes a
`setup!` function which is called when the `source` signal gets wired up into
a live graph. The `setup!` function is passed two arguments: a `from` channel
and a `to` channel, in that order. The function is expected to be a consumer
of the `from` channel and a producer on the `to` channel, and should close the
`to` channel when the `from` channel is closed. There are no requirements for
how many values should be put on the `to` channel or when they should be sent.
`splice` returns a signal with an initial returned from `init-fn`. `init-fn`
takes two functions, a `live-graph` and an `opts` map. If no `init-fn` is
provided, then the initial value of `source` is used. The returned signal
asynchronously produces whichever values are put on the `to` channel in the
`setup!` function."
  ([setup! source]
    (splice setup! (:init-fn source) source))
  ([setup! init-fn source]
    (let [topic [::splice init-fn setup! source]
          events-channel-fn (fn [live-graph _]
                              (let [from (async/tap (impl/signal-mult live-graph source)
                                                    (async/chan 1 impl/fresh-values))
                                    to (async/chan 1 (core/map (partial impl/make-event topic)))]
                                (setup! from to)
                                to))]
      (impl/make-signal {:init-fn init-fn
                         :deps [source]
                         :relayed-event-topic topic
                         :event-sources {topic events-channel-fn}}))))

(defn mergeseq
  "Takes a sequence of signals `sigs`, and returns a new signal which relays fresh
values from all of the source signals. When more than one source has fresh values
at the same time, the first (leftmost) signal in `sigs` will take precedence and
the other values will be discarded. The initial value of the returned signal is
equal to the initial value of the first source signal."
  [sigs]
  (impl/make-signal {:init-fn   (:init-fn (first sigs))
                     :sources   sigs
                     :msg-xform (comp (core/map (fn [[_event _prev msgs]]
                                                  (first (filter impl/fresh? msgs))))
                                      (remove nil?))}))

(defn merge
  "Takes any number of source signals `sigs`, and returns a new signal which relays
fresh values from all of the source signals. When more than one source has fresh values
at the same time, the first (leftmost) signal will take precedence and the other values
will be discarded. The initial value of the returned signal is equal to the initial
value of the first source signal."
  [& sigs]
  (mergeseq sigs))

(defn combine
  "Combines a sequence of signals into a signal of vectors. Equivalent to
`(signal/map vector sig1, sig2, ...)`"
  [sigs]
  (mapseq vector sigs))

(defn sample-on
  "Sample the current value of `value-sig` every time `sampler-sig` updates with a
fresh value. For example, `(sample-on mouse/clicks mouse/position)` returns a signal
of click positions."
  [sampler-sig value-sig]
  (impl/make-signal {:init-fn   (:init-fn value-sig)
                     :sources   [sampler-sig value-sig]
                     :msg-xform (comp (core/map (fn [[_event _prev [sampler-msg value-msg]]]
                                                  (when (impl/fresh? sampler-msg)
                                                    (impl/fresh (impl/value value-msg)))))
                                      (remove nil?))}))

(defn count
  "Returns a signal whose values are the number of fresh values emitted so far from
`sig`. Repeated equal values will be counted so long as they are fresh, so if you
don't want to count repeats then you need to `(count (drop-repeats sig))` instead."
  [sig]
  (foldp #(inc %2) 0 sig))

(defn count-if
  "Like `count`, but only increments the counter if the fresh value emitted from `sig`
satisfies the predicate funtion `pred`. For example, `(count-if odd? numbers)` returns
a signal of how many times the `numbers` signal emitted an odd number."
  [pred sig]
  (foldp (fn [v c]
           (if (pred v) (inc c) c))
         0
         sig))

(defn- keep-if-msg-xform
  [pred]
  (comp (core/map (fn [[_event _prev [msg]]]
                    (when (and (impl/fresh? msg)
                               (pred (impl/value msg)))
                      (impl/fresh (impl/value msg)))))
        (remove nil?)))

(defn keep-if
  "Returns a signal which relays values from `sig`, but discards any which don't match
the given predicate function `pred`. If a `base` value is provided, it will be the
initial value of the returned signal if the initial value of `sig` does not match the
predicate. If no `base` is provided then the returned signal will always have the
same initial value as `sig`, even if it does not match the predicate."
  ([pred sig]
    (impl/make-signal {:init-fn   (:init-fn sig)
                       :sources   [sig]
                       :msg-xform (keep-if-msg-xform pred)}))
  ([pred base sig]
    (impl/make-signal {:init-fn   (let [init-fn (:init-fn sig)]
                                    (fn [live-graph opts]
                                      (let [init (init-fn live-graph opts)]
                                        (if (pred init) init base))))
                       :sources   [sig]
                       :msg-xform (keep-if-msg-xform pred)})))

(defn drop-if
  "Like `keep-if`, but drops values which match the predicate."
  ([pred sig]
    (keep-if (complement pred) sig))
  ([pred base sig]
    (keep-if (complement pred) base sig)))

(defn keep-when
  "Returns a new signal which relays values from `value-sig`, but only when the current
value of `switch-sig` is truthy."
  ([switch-sig value-sig]
    (->> value-sig
         (map vector (sample-on value-sig switch-sig))
         (keep-if first)
         (map second)))
  ([switch-sig base value-sig]
    (->> value-sig
         (map vector (sample-on value-sig switch-sig))
         (keep-if first [false base])
         (map second))))

(defn drop-when
  "Like `keep-when`, but only relays values when `switch-sig` is falsy."
  ([switch-sig value-sig]
    (keep-when (map not switch-sig) value-sig))
  ([switch-sig base value-sig]
    (keep-when (map not switch-sig) base value-sig)))

(defn activate-when
  "Returns a transformation of `value-sig` whose entire graph of signal
dependencies—aside from input nodes—is skipped unless `switch-sig`'s state
is truthy. This is accomplished by walking `value-sig`'s graph and wrapping
its input signals with `keep-when`. The intial value of a signal returned
from `activate-when` is always equal to the initial value of `value-sig`."
  [switch-sig value-sig]
  (let [sorted-signals (impl/topsort value-sig)
        reducer (fn [m sig]
                  (let [sig' (-> sig
                                 (update :sources (partial mapv m))
                                 (update :deps #(if (nil? %) % (mapv m %))))
                        sig'' (if (impl/input? sig')
                                (keep-when switch-sig sig')
                                sig')]
                    (assoc m sig sig'')))
        signal-mapping (reduce reducer
                               {:events :events}
                               sorted-signals)]
    (get signal-mapping value-sig)))

(defn log
  "A little convenience helper which logs signal values with `pr` before propagating them unchanged."
  [sig]
  (map (fn [x] (pr x) x) sig))

(defn spawn
  "Take an inert signal and produce a live, running graph."
  ([s] (impl/spawn* s nil))
  ([s opts] (impl/spawn* s opts)))

(defn pipe-to-atom
  "Pipes fresh values from a live graph into an atom. If `x` is a signal, it is `spawn`ed
as a live graph first. If no atom is provided, then a new atom is created which takes its
initial value from that of the given signal or graph. If an existing atom is provided along
with a sequence of keys `ks`, then fresh values will be inserted into the atom's value using
`swap!` with `assoc-in`. If `ks` is not present, then the whole atom value is replaced with
`reset!`."
  ([x]
   (let [live-graph (spawn x)]
     (pipe-to-atom live-graph
                   (atom (impl/init live-graph)
                         :meta {::source live-graph}))))
  ([x atm] (impl/pipe-to-atom* x atm nil))
  ([x atm ks] (impl/pipe-to-atom* x atm ks)))

(defn to-chan
  "Takes a signal `s` and returns a channel of fresh values, passing any extra `args` to
the `chan` constructor."
  [s & args]
  (-> (spawn s) (async/tap (apply async/chan args))))

;;;;;;;;;;;; This file autogenerated from src/cljx/jamesmacaulay/zelkova/signal.cljx

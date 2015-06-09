(ns dominator.core
  (:require [stch.html :as html]
            [dominator.attributes :refer [attrs->props]]
            [jamesmacaulay.zelkova.signal :as sig]
            [cljs.core.async :as async]))

(def VNode js/VDOM.VNode)
(def VText js/VDOM.VText)
(def create js/VDOM.create)
(def patch js/VDOM.patch)
(def diff js/VDOM.diff)

(defprotocol VDOMBuilder
  (-vtree [this]))

(extend-protocol VDOMBuilder
  string
  (-vtree [this] (new VText this))

  html/Element
  (-vtree [this] (new VNode (name (.-tag this))
                     (attrs->props (.-attrs this))
                     (clj->js (map -vtree (.-children this)))))

  default
  (-vtree [this] (new VText (.toString this))))

(defn ->vtree
  "Convert markup to a VTree."
  [x]
  (if (sequential? x)
    (new VNode "div" #js {} (clj->js (map -vtree x)))
    (-vtree x)))

(defrecord VDOM [tree root-node])

(defn patch-dom
  "Given a Javascript element elem returns a function that takes markup
  and renders to the DOM at elem."
  [elem]
  (let [vdom (atom nil)]
    (fn [markup]
      (let [new-tree (->vtree markup)]
        (if-some [curr-vdom @vdom]
          (let [patches (diff (.-tree curr-vdom) new-tree)
                new-root (patch (.-root-node curr-vdom) patches)]
            (reset! vdom (->VDOM new-tree new-root)))
          (let [root-node (create new-tree)]
            (.appendChild elem root-node)
            (reset! vdom (->VDOM new-tree root-node))))))))

(defn animate
  "Call f on the next animation frame."
  [f]
  (.requestAnimationFrame js/window f))

(defn now
  "Returns the current timestamp."
  []
  (if (= (goog/typeOf js/performance) "undefined")
    (.now js/Date)
    (.now js/performance)))

(defn animation-frames
  "Returns a signal of animation frames."
  []
  (let [signal (sig/write-port (now))]
    (animate (fn tick [t]
               (async/put! signal t)
               (animate tick)))
    signal))

(let [old-state (atom ::empty)]
  (defn lazy [f x]
    "Call f with x when x is different than it's previous state."
    (when (not= x @old-state)
      (f x)
      (reset! old-state x))))

(defn render
  "Takes a signal of markup and a Javascript element, and patches the
  DOM with each animation frame (as needed)."
  [sig elem]
  (let [a (sig/pipe-to-atom sig)
        patch-fn (patch-dom elem)]
    (animate (fn tick []
                (lazy patch-fn @a)
                (animate tick)))))

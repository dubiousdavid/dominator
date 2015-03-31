(ns html-vdom.async
  (:require [cljs.core.async :as async :refer [<! >!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:refer-clojure :exclude [distinct]))

(defn send [source v]
  (fn [] (async/put! source v)))

(defn scan
  ([f init source] (scan f init source (async/chan)))
  ([f init source out]
   (go-loop [last init]
     (if-some [v (<! source)]
       (let [last (f last v)]
         (>! out last)
         (recur last))
       (async/close! out)))
   out))

(defn distinct
  ([source] (distinct source (async/chan)))
  ([source out]
   (go-loop [last ::init]
     (if-some [v (<! source)]
       (do
         (when-not (= last v)
           (>! out v))
         (recur v))
       (async/close! out)))
   out))

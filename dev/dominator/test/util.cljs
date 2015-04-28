(ns dominator.test.util
  (:require [cljs.reader :as reader]
            [cljs.core.async :as async :refer [<! >!]])
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:import [goog.net Jsonp]
           [goog Uri]))

(defn get-storage [k]
  (when-let [s (.getItem js/localStorage (name k))]
    (reader/read-string s)))

(defn set-storage [k v]

  (.setItem js/localStorage (name k) (.toString v)))

(defn jsonp [uri]
  (let [out (async/chan)
        req (Jsonp. (Uri. uri))]
    (.send req nil (fn [res] (async/put! out res)))
    out))

(defn throttle
  ([source msecs]
   (throttle source msecs (async/chan)))
  ([source msecs out]
   (let [sliding-source (async/pipe source (async/chan (async/sliding-buffer 1)))]
     (go-loop []
       (if-some [val (<! sliding-source)]
         (do
           (>! out val)
           (<! (async/timeout msecs))
           (recur))
         (async/close! out))))
   out))

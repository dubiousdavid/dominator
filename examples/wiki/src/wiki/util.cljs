(ns wiki.util
  (:require [cljs.reader :as reader]
            [cljs.core.async :as async])
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

(defn target-value [e]
  (.. e -target -value))

(defn log [v]
  (.log js/console v))



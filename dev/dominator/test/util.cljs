(ns dominator.test.util
  (:require [cljs.reader :as reader]))

(defn get-storage [k]
  (when-let [s (.getItem js/localStorage (name k))]
    (reader/read-string s)))

(defn set-storage [k v]
  (.setItem js/localStorage (name k) (.toString v)))

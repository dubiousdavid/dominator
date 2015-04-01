(ns dominator.test.util
  (:require [cljs.reader :as reader]))

(defn get-storage [k]
  (reader/read-string (.getItem js/localStorage (name k))))

(defn set-storage [k v]
  (.setItem js/localStorage (name k) (.toString v)))

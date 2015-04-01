(ns html-vdom.test
  (:require [html-vdom.core :refer [patch-dom]]
            [stch.html :refer [div table tr td input]]
            [clojure.browser.repl :as repl]
            [cljs.core.async :as async :refer [<!]]
            [html-vdom.async :as as :refer-macros [forever]]
            [cljs.reader :as reader]))

;;(repl/connect "http://localhost:9000/repl")
(enable-console-print!)

(defn get-storage [k]
  (reader/read-string (.getItem js/localStorage (name k))))

(defn set-storage [k v]
  (.setItem js/localStorage (name k) (.toString v)))

(def people ["Billy" "Bobby" "Joey"])
(def updates (async/chan 10))

(defn render [model]
  (div
    (table
      (tr
        (for [person people]
          (td
            (input :type "button" :value person
                   :onclick (as/send updates [:clicked person])))))
      (tr
        (for [person people]
          (td
            (input :type "text" :readonly true :value (get model person))))))
    (div :id "button-row"
      (input :type "button" :value "Reset"
             :onclick (as/send updates :reset)))))

(def empty-model
  {"Billy" 0
   "Bobby" 0
   "Joey" 0})

(def initial-model
  (or (get-storage "clicks") empty-model))

(defn update-model [model action]
  (condp = action
    :no-op model
    :reset empty-model
    [:clicked "Billy"] (update-in model ["Billy"] inc)
    [:clicked "Bobby"] (update-in model ["Bobby"] inc)
    [:clicked "Joey"] (update-in model ["Joey"] inc)))

(async/put! updates :no-op)

(def model
  (as/distinct (as/scan update-model initial-model updates)))

(def patch (patch-dom js/document.body))

(forever
  (let [m (<! model)]
    (set-storage "clicks" m)
    (-> m render patch)))

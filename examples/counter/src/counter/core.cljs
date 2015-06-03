(ns counter.core
  (:require [dominator.core :refer [patch-dom render]]
            [stch.html :refer [div table tr td input]]
            [cljs.core.async :as async :refer [<!]]
            [dominator.async :as as :refer-macros [forever]]
            [jamesmacaulay.zelkova.signal :as sig]
            [cljs.core.match]
            [counter.util :as util])
  (:require-macros [cljs.core.match.macros :refer [match]]))

(enable-console-print!)

(def people ["Billy" "Bobby" "Joey"])
(def actions (sig/write-port :no-op))

(defn view [model]
  (div
    (table
      (tr
        (for [person people]
          (td
            (input :type "button" :value person
                   :onclick (as/send actions [:clicked person])))))
      (tr
        (for [person people]
          (td
            (input :type "text" :readonly true :value (get model person))))))
    (div :id "button-row"
      (input :type "button" :value "Reset"
             :onclick (as/send actions :reset)))))

(def empty-model
  {"Billy" 0
   "Bobby" 0
   "Joey" 0})

(def initial-model
  (or (util/get-storage "clicks") empty-model))

(defn update-model [model action]
  (match action
    :no-op model
    :reset empty-model
    [:clicked n] (update-in model [n] inc)))

(def model (sig/reductions update-model initial-model actions))
(def modelc (sig/to-chan model))

(render (sig/map view model) js/document.body)

(forever
  (let [m (<! modelc)]
    (util/set-storage "clicks" m)))


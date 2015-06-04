(ns wiki.core
  (:require [dominator.core :refer [render]]
            [stch.html :refer [div input ul li]]
            [cljs.core.async :as async :refer [<! >!]]
            [dominator.async :as as :refer-macros [forever]]
            [wiki.util :as util]
            [clojure.string :as string]
            [cljs.core.match]
            [jamesmacaulay.zelkova.signal :as sig]
            [jamesmacaulay.zelkova.time :as time])
  (:require-macros [cljs.core.match.macros :refer [match]]))

(enable-console-print!)

(def wikipedia-endpoint
  "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=")

(defn wikipedia [search]
  (str wikipedia-endpoint search))

(def query (sig/write-port ""))
(def actions (sig/write-port :no-op))

(defn view [results]
  (div
    (input :placeholder "Search Wikipedia!"
           :oninput #(async/put! query (-> % util/target-value string/trim)))
    (ul
      (for [result results]
        (li result)))))

(def empty-model [])

(defn update-model [model action]
  (match action
    :no-op model
    [:results results] results))

(def queries
  (->> query
       sig/drop-repeats
       (time/debounce 150)
       (sig/drop-if string/blank?)
       (sig/map wikipedia)
       sig/to-chan))

(forever
  (let [q (<! queries)]
    (let [result (<! (util/jsonp q))]
      (>! actions [:results (second result)]))))

(def model (sig/reductions update-model empty-model actions))

(render (sig/map view model) js/document.body)


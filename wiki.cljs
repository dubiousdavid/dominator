(ns dominator.wiki
  (:require [dominator.core :refer [patch-dom]]
            [stch.html :refer [div input ul li]]
            [cljs.core.async :as async :refer [<!]]
            [dominator.async :as as :refer-macros [forever]]
            [dominator.test.util :as util]
            [cljs.core.match])
  (:require-macros [cljs.core.match.macros :refer [match]]
                   [cljs.core.async.macros :refer [go]]))

(def query (async/chan 10))
(def updates (async/chan 10))

(defn view [results]
  (div
    (input :placeholder "Search Wikipedia"
           :oninput (fn [e] (async/put! query (.-value (.-target e)))))
    (ul
      (for [result results]
        (li result)))))

(def empty-model [])

(defn update-model [model action]
  (match action
    :no-op model
    [:results results] results))

(async/put! updates :no-op)

(def model
  (as/distinct (as/scan update-model empty-model updates)))

(def patch (patch-dom js/document.body))

(forever
  (let [q (<! query)
        uri (str "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" q)
        result (<! (util/jsonp uri))]
    (>! updates [:results (second result)])))

(forever
  (let [m (<! model)]
    (-> m view patch)))

(ns html-vdom.core
  (:require [clojure.browser.repl :as repl]
            [stch.html :as html]
            [html-vdom.attributes :refer [->vdom-props]]))

;; (repl/connect "http://localhost:9000/repl")
(enable-console-print!)

(def VNode js/VDOM.VNode)
(def VText js/VDOM.VText)
(def create js/VDOM.create)
(def patch js/VDOM.patch)
(def diff js/VDOM.diff)

(defprotocol VDOMBuilder
  (-vdom [this]))

(extend-protocol VDOMBuilder
  string
  (-vdom [this] (new VText this))

  html/Element
  (-vdom [this] (new VNode (name (.-tag this))
                     (->vdom-props (.-attrs this))
                     (clj->js (map -vdom (.-children this)))))

  default
  (-vdom [this] (new VText (.toString this))))

(defn ->vdom [x]
  (if (sequential? x)
    (new VNode "div" #js {} (clj->js (map -vdom x)))
    (-vdom x)))

(defrecord VDOM [tree root-node])

(defn diff-and-patch [vdom]
  (let [vdom (atom vdom)]
    (fn [new-tree]
      (let [patches (diff (.-tree @vdom) new-tree)]
        (swap! vdom assoc :root-node (patch (.-root-node @vdom) patches) :tree new-tree)))))

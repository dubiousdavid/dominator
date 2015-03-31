(ns html-vdom.core
  (:require [stch.html :as html]
            [html-vdom.attributes :refer [->vdom-props]]))

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

(defn patch-dom
  "Given an a Element elem returns a function that takes
  a VTree and renders to the DOM at elem."
  [elem]
  (let [vdom (atom nil)]
    (fn [new-tree]
      (if-some [curr-vdom @vdom]
        (let [patches (diff (.-tree curr-vdom) new-tree)
              new-root (patch (.-root-node curr-vdom) patches)]
          (swap! vdom assoc :tree new-tree :root-node new-root))
        (let [root-node (create new-tree)]
          (.appendChild elem root-node)
          (reset! vdom (->VDOM new-tree root-node)))))))

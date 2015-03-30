(ns html-vdom.test
  (:require [html-vdom.core :refer [->vdom ->VDOM diff-and-patch]]
            [stch.html :refer [input ->html]]))

(def people ["Billy" "Bobby" "Joey"])

(def VNode js/VDOM.VNode)
(def VText js/VDOM.VText)
(def create js/VDOM.create)
(def patch js/VDOM.patch)
(def diff js/VDOM.diff)

(defn render [name]
  (let [node  (input :type "text" :readonly true :value name)]
    (->vdom node))
  #_ (new VNode "div", #js {"className" "greeting"}, #js [(new VText (str "Hello, " name))]))

(def tree (render "Billy"))
(def root-node (create tree))

(.appendChild js/document.body root-node)

(def vdom (->VDOM tree root-node))
(def dandp (diff-and-patch vdom))

(defn rand-people []
  (let [rand (rand-int (count people))
        new-tree (render (get people rand))]
    (dandp new-tree)))

(js/setInterval rand-people 1000)

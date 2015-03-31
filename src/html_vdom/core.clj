(ns html-vdom.core)

(defmacro defvdom [n bindings tree]
  `(defn ~n ~bindings (->vdom ~tree)))

(ns dominator.util)

(defn animate [f]
  (.requestAnimationFrame js/window f))

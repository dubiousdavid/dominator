(ns dominator.async)

(defmacro forever [& body]
  `(cljs.core.async.macros/go
     (while true
       ~@body)))

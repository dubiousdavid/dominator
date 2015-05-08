(ns dominator.async)

(defmacro forever
  "Continuously loop over the body within a go block."
  [& body]
  `(cljs.core.async.macros/go
     (while true
       ~@body)))

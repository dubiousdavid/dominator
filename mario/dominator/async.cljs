(ns dominator.async
  (:require [cljs.core.async :as async]))

(defn send
  "Returns an anonymous fn that puts the value v onto source every time
  it's called."
  [source v]
  (fn [] (async/put! source v)))

# Dominator

[ClojureScript](https://github.com/clojure/clojurescript) + [core.async](https://github.com/clojure/core.async) + [Virtual Dom](https://github.com/Matt-Esch/virtual-dom) + ["The Elm Pattern"](http://elm-lang.org/) = Sane Javascript!

Uses [stch-html](https://github.com/stch-library/html) for representing HTML in ClojureScript.

## Features

* Single flow of events.
* Use [core.async](https://github.com/clojure/core.async).
* Use pure functions for updating state and rendering.
* Minimal learning curve.

## Example Usage

Clone this repo and run `lein cljsbuild once dev`. Open `test.html` in a browser to play with the example below.

### Overview

In the example below there is a single channel `updates` that all events are put onto. The `as/scan` function acts like an unending `reduce` over the `updates` channel. `scan` takes a pure function, an initial value, and a channel, and produces a channel. `update-model` takes the existing model, the "action" (value from the channel), and returns a new model. Each value from the `model` channel is passed to the `render` function. This function returns a representation of the markup.  Finally the markup is passed to `patch`, which patches the DOM.

```clojure
(ns dominator.test
  (:require [dominator.core :refer [patch-dom]]
            [stch.html :refer [div table tr td input]]
            [cljs.core.async :as async :refer [<!]]
            [dominator.async :as as :refer-macros [forever]]
            [dominator.test.util :as util]
            [cljs.core.match])
  (:require-macros [cljs.core.match.macros :refer [match]]))

(def people ["Billy" "Bobby" "Joey"])
(def updates (async/chan 10))

(defn render [model]
  (div
    (table
      (tr
        (for [person people]
          (td
            (input :type "button" :value person
                   :onclick (as/send updates [:clicked person])))))
      (tr
        (for [person people]
          (td
            (input :type "text" :readonly true :value (get model person))))))
    (div :id "button-row"
      (input :type "button" :value "Reset"
             :onclick (as/send updates :reset)))))

(def empty-model
  {"Billy" 0
   "Bobby" 0
   "Joey" 0})

(def initial-model
  (or (util/get-storage "clicks") empty-model))

(defn update-model [model action]
  (match action
    :no-op model
    :reset empty-model
    [:clicked n] (update-in model [n] inc)))

(async/put! updates :no-op)

(def model
  (as/distinct (as/scan update-model initial-model updates)))

(def patch (patch-dom js/document.body))

(forever
  (let [m (<! model)]
    (util/set-storage "clicks" m)
    (-> m render patch)))
```

# Dominator

[ClojureScript](https://github.com/clojure/clojurescript) + [zelkova](https://github.com/jamesmacaulay/zelkova) + [Virtual Dom](https://github.com/Matt-Esch/virtual-dom) + ["The Elm Pattern"](http://elm-lang.org/) = Sane Javascript!

Uses [stch-html](https://github.com/stch-library/html) for representing HTML in ClojureScript.

## Features

* Single flow of events.
* Use [core.async](https://github.com/clojure/core.async).
* Use pure functions for updating state and rendering.
* Minimal learning curve.

## Example Usage

Clone this repo and run `lein cljsbuild once dev`. Open `test.html` in a browser to play with the example below.

### Overview

In the example below there is a single signal `actions` that all events are put onto. The `sig/reductions` function acts like an unending `reduce` over the `actions` signal. `reductions` takes a pure function, an initial value, and a signal, and produces a signal. `update-model` takes the existing model, the "action" (value from the signal), and returns a new model. The `view` function is mapped over each value from the `model` signal. This function returns a representation of the markup.  Finally the markup signal and patch function are passed to render, which calls the render function on each value from the signal (uses `requestAnimationFrame` under the hood).

```clojure
(ns dominator.test
  (:require [dominator.core :refer [patch-dom render]]
            [stch.html :refer [div table tr td input]]
            [cljs.core.async :as async :refer [<!]]
            [dominator.async :as as :refer-macros [forever]]
            [dominator.test.util :as util]
            [jamesmacaulay.zelkova.signal :as sig]
            [cljs.core.match])
  (:require-macros [cljs.core.match.macros :refer [match]]))

(enable-console-print!)

(def people ["Billy" "Bobby" "Joey"])
(def actions (sig/write-port :no-op))

(defn view [model]
  (div
    (table
      (tr
        (for [person people]
          (td
            (input :type "button" :value person
                   :onclick (as/send actions [:clicked person])))))
      (tr
        (for [person people]
          (td
            (input :type "text" :readonly true :value (get model person))))))
    (div :id "button-row"
      (input :type "button" :value "Reset"
             :onclick (as/send actions :reset)))))

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

(def patch (patch-dom js/document.body))
(def model (sig/reductions update-model initial-model actions))
(def modelc (sig/to-chan model))

(render (sig/map view model) patch)

(forever
  (let [m (<! modelc)]
    (util/set-storage "clicks" m)))

```

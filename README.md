# Dominator

[ClojureScript](https://github.com/clojure/clojurescript) + [Zelkova](https://github.com/jamesmacaulay/zelkova) + [Virtual Dom](https://github.com/Matt-Esch/virtual-dom) + ["The Elm Pattern"](http://elm-lang.org/) = Sane Javascript!

Uses [stch-html](https://github.com/stch-library/html) for representing HTML in ClojureScript.

## Features

* Single flow of events.
* Use [core.async](https://github.com/clojure/core.async).
* Use pure functions for updating state and rendering.
* Minimal learning curve.

## Installation

```clojure
[dominator "0.2.0"]
```

Note: You will need to download the compiled `vdom.js` file to your project directory and reference it in your HTML file.

```bash
wget https://raw.githubusercontent.com/dubiousdavid/dominator/master/vdom.js
```

You will also need to add `:externs ["dominator.js"]` to the compiler options map if using advanced compilation.

## Sample programs

1. [Counter](http://dubiousdavid.github.io/dominator/examples/counter/)
2. [Wikipedia](http://dubiousdavid.github.io/dominator/examples/wiki/)
3. [Mario](http://dubiousdavid.github.io/dominator/examples/mario/)

## API Documentation

http://dubiousdavid.github.io/dominator/doc/

## Example Usage

Clone this repo and run `lein cljsbuild once counter`. Open `counter.html` in a browser to play with the example below.

### Overview

In the example below there is a single signal `actions` that all events are put onto. The `sig/reductions` function acts like an unending `reduce` over the `actions` signal. `reductions` takes a pure function, an initial value, and a signal, and produces a signal. `update-model` takes the existing model, the "action" (value from the signal), and returns a new model. The `view` function is mapped over each value from the `model` signal. This function returns a representation of the markup.  Finally the markup signal and patch function are passed to render, which calls the render function on each value from the signal (uses `requestAnimationFrame` under the hood).

```clojure
(ns dominator.counter
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

(def model (sig/reductions update-model initial-model actions))
(def modelc (sig/to-chan model))

(render (sig/map view model) js/document.body)

(forever
  (let [m (<! modelc)]
    (util/set-storage "clicks" m)))
```

## Wikipedia search example

Below is a slightly more complicated example where we have two signals, one for actions and one for queries. You can play with this example by running `lein cljsbuild once wiki` and opening `wiki.html` in a browser.

```clojure
(ns dominator.wiki
  (:require [dominator.core :refer [patch-dom render]]
            [stch.html :refer [div input ul li]]
            [cljs.core.async :as async :refer [<! >!]]
            [dominator.async :as as :refer-macros [forever]]
            [dominator.test.util :as util]
            [clojure.string :as string]
            [cljs.core.match]
            [jamesmacaulay.zelkova.signal :as sig]
            [jamesmacaulay.zelkova.time :as time])
  (:require-macros [cljs.core.match.macros :refer [match]]))

(enable-console-print!)

(def wikipedia-endpoint
  "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=")

(defn wikipedia [search]
  (str wikipedia-endpoint search))

(def query (sig/write-port ""))
(def actions (sig/write-port :no-op))

(defn view [results]
  (div
    (input :placeholder "Search Wikipedia!"
           :oninput #(async/put! query (-> % util/target-value string/trim)))
    (ul
      (for [result results]
        (li result)))))

(def empty-model [])

(defn update-model [model action]
  (match action
    :no-op model
    [:results results] results))

(def queries
  (->> query
       sig/drop-repeats
       (time/debounce 150)
       (sig/drop-if string/blank?)
       (sig/map wikipedia)
       sig/to-chan))

(forever
  (let [q (<! queries)]
    (let [result (<! (util/jsonp q))]
      (>! actions [:results (second result)]))))

(def model (sig/reductions update-model empty-model actions))

(render (sig/map view model) js/document.body)
```

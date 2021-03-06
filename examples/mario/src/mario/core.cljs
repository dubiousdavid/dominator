(ns mario.core
  (:require [dominator.core :refer [render animation-frames]]
            [stch.html :refer [div img]]
            [jamesmacaulay.zelkova.keyboard :as keyboard]
            [jamesmacaulay.zelkova.signal :as sig]))

(enable-console-print!)

(def firefox?
  (not= (js/navigator.userAgent.indexOf "Firefox") -1))

(def game-state {:x 100 :y 550 :dx 0 :dy 0 :dir "right"})

(def offset (if firefox? 510 508))
(def gravity 0.2) ; px / frame^2
(def terminal-velocity 5.0)
(def jump-coefficient 1.0)
(def min-jump-height 3) ; px / frame
(def max-move-speed 5.0) ; px / frame
(def ground-accel 0.03) ; px / frame^2
(def air-accel 0.02) ; px / frame^2
(def ground-friction 0.08) ; px / frame^2
(def air-friction 0.02) ; px / frame^2

(defn mario-sprite-url [activity dir]
  (str "images/mario/" activity "/" dir ".gif"))

(defn airborne? [s]
  (> (:y s) 0))

(defn current-activity [s]
  (cond (airborne? s) "jump"
        (= (:dx s) 0) "stand"
        :else "walk"))

(defn accel [s]
  (if (airborne? s) air-accel ground-accel))

(defn friction [s]
  (if (airborne? s) air-friction ground-friction))

(defn velocity [s]
  (assoc s :x (+ (:x s) (:dx s)) :y (+ (:y s) (:dy s))))

(defn apply-gravity [s]
  (if (<= (:y s) (- (:dy s)))
    (assoc s :y 0 :dy 0)
    (assoc s :y (+ (:y s) (:dy s)) :dy (if (<= (:dy s) (- terminal-velocity))
                                         (- terminal-velocity)
                                         (- (:dy s) gravity)))))

(defn apply-friction [s]
  (cond (= (:dx s) 0) s
        (<= (js/Math.abs (:dx s)) (friction s)) (assoc s :dx 0)
        (> (:dx s) 0) (assoc s :dx (- (:dx s) (friction s)))
        (< (:dx s) 0) (assoc s :dx (+ (:dx s) (friction s)))))

(defn jump-speed [dx]
  (+ min-jump-height (* jump-coefficient (js/Math.abs dx))))

(defn jump [{:keys [y]} s]
  (if (and (> y 0) (not (airborne? s)))
    (assoc s :dy (jump-speed (:dx s)))
    s))

(defn walk [{:keys [x]} s]
  (cond (< x 0) (let [s' (if (> (:dx s) 0) (apply-friction s) s)
                      dx (max (- max-move-speed) (- (:dx s') (accel s')))]
                  (assoc s' :dx dx :dir "left"))
        (> x 0) (let [s' (if (< (:dx s) 0) (apply-friction s) s)
                      dx (min max-move-speed (+ (:dx s') (accel s')))]
                  (assoc s' :dx dx :dir "right"))
        :else (apply-friction s)))

(defn step [s keys]
  (->> (jump keys s)
       (walk keys)
       apply-gravity
       velocity))

(defn view [s]
  (let [activity (current-activity s)
        dir (:dir s)
        src (mario-sprite-url activity dir)
        left (:x s)
        top (- offset (:y s))
        style (str "left: " left "px; top: " top "px;")]
    (div :id "world"
         (img :id "mario" :src src :style style)
         (div :id "ground"))))

(def input (sig/sample-on (animation-frames) keyboard/arrows))
(def model (sig/drop-repeats (sig/reductions step game-state input)))

(render (sig/map view model) js/document.body)


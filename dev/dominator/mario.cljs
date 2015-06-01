(ns dominator.mario
  (:require [dominator.core :refer [render animation-frames]]
            [stch.html :refer [div img]]
            [jamesmacaulay.zelkova.keyboard :as keyboard]
            [jamesmacaulay.zelkova.signal :as sig]))

(enable-console-print!)

(def mario {:x 100 :y 550 :vx 0 :vy 0 :dir :right})

(def jump-velocity 0.6)
(def walk-velocity 10)
(def gravity-constant 1000)

(defn jump [{:keys [y]} m]
  (if (and (> y 0) (= (:y m) 0))
    (assoc m :vy jump-velocity)
    m))

(defn gravity [t m]
  (if (> (:y m) 0)
    (assoc m :vy (- (:vy m) (/ t gravity-constant)))
    m))

(defn physics [t m]
  (let [new-x (+ (:x m) (* (/ t walk-velocity) (:vx m)))
        new-y (max 0 (+ (:y m) (* t (:vy m))))]
    (assoc m :x new-x :y new-y)))

(defn walk [{:keys [x]} m]
  (assoc m :vx x :dir (cond (< x 0) "left"
                            (> x 0) "right"
                            :else (:dir m))))

(defn step [m keys]
  (let [dt 16.7]
    (->> (physics dt m)
         (walk keys)
         (gravity dt)
         (jump keys))))

(defn view [m]
  (let [verb (cond (> (:y m) 0) "jump"
                   (not= (:vx m) 0) "walk"
                   :else "stand")
        direction (name (:dir m))
        src (str "images/mario/" verb "/" direction ".gif")
        left (:x m)
        top (- 508 (:y m))
        style (str "left: " left "px; top: " top "px;")]
    (div :id "world"
         (img :id "mario" :src src :style style)
         (div :id "ground"))))

(def input (sig/sample-on (animation-frames) keyboard/arrows))
(def model (sig/reductions step mario input))

(render (sig/map view model) js/document.body)

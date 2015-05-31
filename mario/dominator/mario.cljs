(ns dominator.mario
  (:require [dominator.core :refer [render]]
            [stch.html :refer [div img]]
            [jamesmacaulay.zelkova.keyboard :as keyboard]
            [jamesmacaulay.zelkova.window :as window]
            [jamesmacaulay.zelkova.signal :as sig]
            [jamesmacaulay.zelkova.time :as time]
            [jamesmacaulay.zelkova.impl.time :refer [now]]))

(def mario {:x 0 :y 0 :vx 0 :vy 0 :dir :right})

(defn jump [{:keys [y]} m]
  (if (and (> y 0) (= (:y m) 0))
    (assoc m :vy 5)
    m))

(defn gravity [t m]
  (if (> (:y m) 0)
    (assoc m :vy (- (:vy m) (/ t 4)))
    m))

(defn physics [t m]
  (let [new-x (+ (:x m) (* t (:vx m)))
        new-y (max 0 (+ (:y m) (* t (:vy m))))]
    (assoc m :x new-x :y new-y)))

(defn walk [{:keys [x]} m]
  (assoc m :vx x :dir (cond (< x 0) "left"
                            (> x 0) "right"
                            :else (:dir m))))

(defn step [m [dt keys]]
  (->> (physics dt m)
       (walk keys)
       (gravity dt)
       (jump keys)))

(defn view [[w h] m]
  (let [verb (cond (> (:y m) 0) "jump"
                   (not= (:vx m) 0) "walk"
                   :else "stand")
        src (str "images/mario/" verb "/" (name (:dir m)) ".gif")
        left (:x mario)
        top (- (- h 130) (:y mario))
        style (str "left: " left "px; top: " top "px;")]
    (div :id "world"
         (img :id "mario" :src src :style style)
         (div :id "ground"))))

(def input (sig/map vector (time/fps 60) keyboard/arrows))
(def model (sig/reductions step mario input))

(render (sig/map view window/dimensions model) js/document.body)

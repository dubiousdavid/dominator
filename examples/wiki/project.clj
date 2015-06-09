(defproject wiki "0.2.0"
  :description "Virtual-Dom in ClojureScript."
  :url "https://github.com/dubiousdavid/dominator"
  :dependencies [[org.clojure/clojure "1.7.0-beta2"]
                 [org.clojure/clojurescript "0.0-3178"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [com.2tothe8th/dominator "0.4.0"]
                 [org.clojure/core.match "0.2.2"]]
  :node-dependencies [[source-map-support "0.2.8"]]
  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-npm "0.4.0"]]
  :source-paths ["src" "target/classes"]
  :clean-targets ["target" "js"]
  :cljsbuild
  {:builds [{:id "wiki"
             :source-paths ["src"]
             :compiler {:output-to "js/main.js"
                        :externs ["externs/dominator.js"]
                        :optimizations :advanced}}]})

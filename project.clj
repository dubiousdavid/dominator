(defproject dominator "0.1.0"
  :description "Virtual DOM bindings for stch-html."
  :url "https://github.com/dubiousdavid/dominator"
  :dependencies [[org.clojure/clojure "1.7.0-beta2"]
                 [org.clojure/clojurescript "0.0-3178"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [stch-library/html "0.1.2" :exclusions [org.clojure/clojurescript]]
                 [jamesmacaulay/zelkova "0.4.0" :exclusions [org.clojure/clojure
                                                             org.clojure/clojurescript
                                                             org.clojure/core.async]]]
  :node-dependencies [[source-map-support "0.2.8"]]
  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-npm "0.4.0"]]
  :source-paths ["src" "target/classes"]
  :clean-targets ["out" "out-adv" "wiki-out"]
  :profiles {:dev {:dependencies [[org.clojure/core.match "0.2.2"]]}}
  :cljsbuild
  {:builds [{:id "wiki-dev"
             :source-paths ["src" "dev"]
             :compiler {:main dominator.wiki
                        :output-to "wiki-out/main.js"
                        :output-dir "wiki-out"
                        :optimizations :none
                        :source-map true}}
            {:id "dev"
             :source-paths ["src" "dev"]
             :compiler {:main dominator.test
                        :output-to "out/dominator_test.js"
                        :output-dir "out"
                        :optimizations :none
                        :source-map true}}
            {:id "release"
             :source-paths ["src" "dev"]
             :compiler {:main dominator.test
                        :output-to "out-adv/dominator_test.min.js"
                        :output-dir "out-adv"
                        :externs ["externs.js"]
                        :optimizations :advanced
                        :pretty-print false}}]})

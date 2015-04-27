(defproject dominator "0.1.0"
  :description "Virtual DOM bindings for stch-html."
  :url "https://github.com/dubiousdavid/dominator"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3178"]
                 [stch-library/html "0.1.2" :exclusions [org.clojure/clojurescript]]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]]
  :node-dependencies [[source-map-support "0.2.8"]]
  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-npm "0.4.0"]]
  :source-paths ["src" "target/classes"]
  :clean-targets ["out" "out-adv"]
  :profiles {:dev {:dependencies [[org.clojure/core.match "0.2.2"]]}}
  :cljsbuild
  {:builds [{:id "dev"
             :source-paths ["src" "dev"]
             :compiler {:main dominator.test
                        :output-to "out/dominator_test.js"
                        :output-dir "out"
                        :optimizations :none
                        :cache-analysis true
                        :source-map true}}
            {:id "release"
             :source-paths ["src" "dev"]
             :compiler {:main dominator.test
                        :output-to "out-adv/dominator_test.min.js"
                        :output-dir "out-adv"
                        :externs ["externs.js"]
                        :optimizations :advanced
                        :pretty-print false}}]})

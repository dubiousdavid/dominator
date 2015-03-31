(defproject html-vdom "0.1.0"
  :description "Virtual DOM bindings for stch-html."
  :url "https://github.com/stch-library/html-vdom"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3126"]
                 [stch-library/html "0.1.2"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/core.match "0.2.2"]]
  :node-dependencies [[source-map-support "0.2.8"]]
  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-npm "0.4.0"]]
  :source-paths ["src" "target/classes"]
  :clean-targets ["out" "out-adv"]
  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src" "dev"]
              :compiler {
                :main html-vdom.test
                :output-to "out/html_vdom.js"
                :output-dir "out"
                :optimizations :none
                :cache-analysis true
                :source-map true}}
             {:id "release"
              :source-paths ["src"]
              :compiler {
                :main html-vdom.core
                :output-to "out-adv/html_vdom.min.js"
                :output-dir "out-adv"
                :optimizations :advanced
                :pretty-print false}}]})

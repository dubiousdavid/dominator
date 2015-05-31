(ns stch.html
  "DSL for DOM node generation."
  (:require [goog.dom :as gdom]
            [clojure.set :as set]
            [clojure.string :as string]))

(defprotocol IDOMBuilder
  "Build DOM nodes."
  (-node [this]))

(extend-protocol IDOMBuilder
  default
  (-node [this]
    (gdom/createTextNode (str this)))

  string
  (-node [this]
    (gdom/createTextNode this))

  js/Node
  (-node [this] this))

(def first-keyword? (comp keyword? first))

(defn- split-args [args]
  (->> args
       (partition 2 2 [nil])
       (split-with first-keyword?)))

(defn- flatten-children [children]
  (->> (flatten children)
       (remove nil?)
       vec))

(defn- classes->set [classes]
  (cond (string? classes)
        (-> (string/split classes #"\s+")
            set)

        (set? classes) classes

        (sequential? classes)
        (set classes)

        :else #{}))

(defn- combine-attrs
  [old-attrs new-attrs]
  (if (or (:class old-attrs)
          (:class new-attrs))
    (let [old-classes
          (classes->set (:class old-attrs))

          new-classes
          (classes->set (:class new-attrs))

          combined-classes
          (set/union old-classes new-classes)

          classes
          (string/join " " combined-classes)]

      (-> (into old-attrs new-attrs)
          (assoc :class classes)))

    (into old-attrs new-attrs)))

(declare parse-args)

(defrecord Element [tag attrs children]
  IFn
  (-invoke [this & args]
    (let [[attrs children] (parse-args args)]
      (Element. (.-tag this)
                (combine-attrs (.-attrs this) attrs)
                (into (.-children this) children))))

  IDOMBuilder
  (-node [this]
    (if (seq children)
      (apply gdom/createDom
             tag
             (clj->js attrs)
             (map -node children))
      (gdom/createDom tag (clj->js attrs)))))

(defn- parse-args
  [[head & tail :as args]]

  ; Check first arg
  (cond (instance? Element head)
        [{} (flatten-children args)]

        ; Keyword/value pairs
        (keyword? head)
        (let [[attrs children] (split-args args)]
          [(->> (map vec attrs)
                (into {}))
           (flatten-children children)])

        ; Map of attributes
        (map? head) [head (flatten-children tail)]

        ; Default case
        :else [{} (flatten-children args)]))

(defn mk-elem-fn [tag]
  (fn [& args]
    (apply (Element. tag {} []) args)))

(defn ->html [nodes]
  (if (sequential? nodes)
    (let [docfrag (.createDocumentFragment js/document)]
      (doseq [node (map -node nodes)]
        (.appendChild docfrag node))
      docfrag)
    (-node nodes)))

(def a              (mk-elem-fn "a"))
(def abbr           (mk-elem-fn "abbr"))
(def acronym        (mk-elem-fn "acronym"))
(def address        (mk-elem-fn "address"))
(def applet         (mk-elem-fn "applet"))
(def area           (mk-elem-fn "area"))
(def article        (mk-elem-fn "article"))
(def aside          (mk-elem-fn "aside"))
(def audio          (mk-elem-fn "audio"))
(def b              (mk-elem-fn "b"))
(def base           (mk-elem-fn "base"))
(def basefont       (mk-elem-fn "basefont"))
(def bdi            (mk-elem-fn "bdi"))
(def bdo            (mk-elem-fn "bdo"))
(def big            (mk-elem-fn "big"))
(def blockquote     (mk-elem-fn "blockquote"))
(def body           (mk-elem-fn "body"))
(def br             (mk-elem-fn "br"))
(def button         (mk-elem-fn "button"))
(def canvas         (mk-elem-fn "canvas"))
(def caption        (mk-elem-fn "caption"))
(def center         (mk-elem-fn "center"))
(def cite           (mk-elem-fn "cite"))
(def code           (mk-elem-fn "code"))
(def col            (mk-elem-fn "col"))
(def colgroup       (mk-elem-fn "colgroup"))
(def command        (mk-elem-fn "command"))
(def data           (mk-elem-fn "data"))
(def datalist       (mk-elem-fn "datalist"))
(def dd             (mk-elem-fn "dd"))
(def del            (mk-elem-fn "del"))
(def details        (mk-elem-fn "details"))
(def dfn            (mk-elem-fn "dfn"))
(def html-dir       (mk-elem-fn "dir"))
(def div            (mk-elem-fn "div"))
(def dl             (mk-elem-fn "dl"))
(def dt             (mk-elem-fn "dt"))
(def em             (mk-elem-fn "em"))
(def embed          (mk-elem-fn "embed"))
(def eventsource    (mk-elem-fn "eventsource"))
(def fieldset       (mk-elem-fn "fieldset"))
(def figcaption     (mk-elem-fn "figcaption"))
(def figure         (mk-elem-fn "figure"))
(def font           (mk-elem-fn "font"))
(def footer         (mk-elem-fn "footer"))
(def form           (mk-elem-fn "form"))
(def frame          (mk-elem-fn "frame"))
(def frameset       (mk-elem-fn "frameset"))
(def h1             (mk-elem-fn "h1"))
(def h2             (mk-elem-fn "h2"))
(def h3             (mk-elem-fn "h3"))
(def h4             (mk-elem-fn "h4"))
(def h5             (mk-elem-fn "h5"))
(def h6             (mk-elem-fn "h6"))
(def head           (mk-elem-fn "head"))
(def header         (mk-elem-fn "header"))
(def hgroup         (mk-elem-fn "hgroup"))
(def hr             (mk-elem-fn "hr"))
(def html           (mk-elem-fn "html"))
(def i              (mk-elem-fn "i"))
(def iframe         (mk-elem-fn "iframe"))
(def img            (mk-elem-fn "img"))
(def input          (mk-elem-fn "input"))
(def ins            (mk-elem-fn "ins"))
(def isindex        (mk-elem-fn "isindex"))
(def kbd            (mk-elem-fn "kbd"))
(def keygen         (mk-elem-fn "keygen"))
(def label          (mk-elem-fn "label"))
(def legend         (mk-elem-fn "legend"))
(def li             (mk-elem-fn "li"))
(def link           (mk-elem-fn "link"))
(def html-map       (mk-elem-fn "map"))
(def mark           (mk-elem-fn "mark"))
(def menu           (mk-elem-fn "menu"))
(def html-meta      (mk-elem-fn "meta"))
(def meter          (mk-elem-fn "meter"))
(def nav            (mk-elem-fn "nav"))
(def noframes       (mk-elem-fn "noframes"))
(def noscript       (mk-elem-fn "noscript"))
(def object         (mk-elem-fn "object"))
(def ol             (mk-elem-fn "ol"))
(def optgroup       (mk-elem-fn "optgroup"))
(def option         (mk-elem-fn "option"))
(def output         (mk-elem-fn "output"))
(def p              (mk-elem-fn "p"))
(def param          (mk-elem-fn "param"))
(def pre            (mk-elem-fn "pre"))
(def progress       (mk-elem-fn "progress"))
(def q              (mk-elem-fn "q"))
(def rp             (mk-elem-fn "rp"))
(def rt             (mk-elem-fn "rt"))
(def ruby           (mk-elem-fn "ruby"))
(def s              (mk-elem-fn "s"))
(def samp           (mk-elem-fn "samp"))
(def script         (mk-elem-fn "script"))
(def section        (mk-elem-fn "section"))
(def select         (mk-elem-fn "select"))
(def small          (mk-elem-fn "small"))
(def html-source    (mk-elem-fn "source"))
(def span           (mk-elem-fn "span"))
(def strike         (mk-elem-fn "strike"))
(def strong         (mk-elem-fn "strong"))
(def style          (mk-elem-fn "style"))
(def sub            (mk-elem-fn "sub"))
(def summary        (mk-elem-fn "summary"))
(def sup            (mk-elem-fn "sup"))
(def table          (mk-elem-fn "table"))
(def tbody          (mk-elem-fn "tbody"))
(def td             (mk-elem-fn "td"))
(def textarea       (mk-elem-fn "textarea"))
(def tfoot          (mk-elem-fn "tfoot"))
(def th             (mk-elem-fn "th"))
(def thead          (mk-elem-fn "thead"))
(def html-time      (mk-elem-fn "time"))
(def title          (mk-elem-fn "title"))
(def tr             (mk-elem-fn "tr"))
(def track          (mk-elem-fn "track"))
(def tt             (mk-elem-fn "tt"))
(def u              (mk-elem-fn "u"))
(def ul             (mk-elem-fn "ul"))
(def html-var       (mk-elem-fn "var"))
(def video          (mk-elem-fn "video"))
(def wbr            (mk-elem-fn "wbr"))























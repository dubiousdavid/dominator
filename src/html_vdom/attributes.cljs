(ns html-vdom.attributes)

(def attr->prop
  {"class" "className"
   "colspan" "colSpan"
   "contenteditable" "contentEditable"
   "for" "htmlFor"
   "ismap" "isMap"
   "maxlength" "maxLength"
   "minlength" "minLength"
   "novalidate" "noValidate"
   "readonly" "readOnly"
   "rowspan" "rowSpan"
   "tabindex" "tabIndex"
   "usemap" "useMap"})

(defn ->vdom-props [attrs]
  (reduce (fn [acc [k v]]
            (let [key (name k)]
              (aset acc (attr->prop key key) v)
              acc))
          (js-obj)
          attrs))

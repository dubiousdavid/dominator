// Compiled by ClojureScript 0.0-3178 {}
goog.provide('dominator.attributes');
goog.require('cljs.core');
dominator.attributes.attr__GT_prop = cljs.core.PersistentHashMap.fromArrays(["readonly","ismap","class","minlength","for","colspan","usemap","rowspan","contenteditable","maxlength","novalidate","tabindex"],["readOnly","isMap","className","minLength","htmlFor","colSpan","useMap","rowSpan","contentEditable","maxLength","noValidate","tabIndex"]);
/**
 * Convert a Clojure map of attributes to Javascript properties.
 */
dominator.attributes.attrs__GT_props = (function dominator$attributes$attrs__GT_props(attrs){
return cljs.core.reduce.call(null,(function (acc,p__8680){
var vec__8681 = p__8680;
var k = cljs.core.nth.call(null,vec__8681,(0),null);
var v = cljs.core.nth.call(null,vec__8681,(1),null);
var key = cljs.core.name.call(null,k);
(acc[dominator.attributes.attr__GT_prop.call(null,key,key)] = v);

return acc;
}),(function (){var obj8683 = {};
return obj8683;
})(),attrs);
});

//# sourceMappingURL=attributes.js.map
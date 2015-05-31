// Compiled by ClojureScript 0.0-3178 {}
goog.provide('dominator.async');
goog.require('cljs.core');
goog.require('cljs.core.async');
/**
 * Returns an anonymous fn that puts the value v onto source every time
 * it's called.
 */
dominator.async.send = (function dominator$async$send(source,v){
return (function (){
return cljs.core.async.put_BANG_.call(null,source,v);
});
});

//# sourceMappingURL=async.js.map
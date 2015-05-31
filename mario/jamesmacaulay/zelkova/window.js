// Compiled by ClojureScript 0.0-3178 {}
goog.provide('jamesmacaulay.zelkova.window');
goog.require('cljs.core');
goog.require('jamesmacaulay.zelkova.impl.signal');
goog.require('jamesmacaulay.zelkova.signal');
goog.require('cljs.core.async');
goog.require('jamesmacaulay.async_tools.core');
goog.require('goog.events');
jamesmacaulay.zelkova.window.listen = (function jamesmacaulay$zelkova$window$listen(){
var argseq__5210__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return jamesmacaulay.zelkova.window.listen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5210__auto__);
});

jamesmacaulay.zelkova.window.listen.cljs$core$IFn$_invoke$arity$variadic = (function (el,type,args){
var out = cljs.core.apply.call(null,cljs.core.async.chan,(1),args);
goog.events.listen(el,type,((function (out){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);

return out;
});

jamesmacaulay.zelkova.window.listen.cljs$lang$maxFixedArity = (2);

jamesmacaulay.zelkova.window.listen.cljs$lang$applyTo = (function (seq17758){
var G__17759 = cljs.core.first.call(null,seq17758);
var seq17758__$1 = cljs.core.next.call(null,seq17758);
var G__17760 = cljs.core.first.call(null,seq17758__$1);
var seq17758__$2 = cljs.core.next.call(null,seq17758__$1);
return jamesmacaulay.zelkova.window.listen.cljs$core$IFn$_invoke$arity$variadic(G__17759,G__17760,seq17758__$2);
});
jamesmacaulay.zelkova.window.get_size = (function jamesmacaulay$zelkova$window$get_size(opts){
var node = (function (){var or__4170__auto__ = new cljs.core.Keyword(null,"dom-node","dom-node",452283727).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4170__auto__)){
return or__4170__auto__;
} else {
return document.body;
}
})();
var w = node.clientWidth;
var h = node.clientHeight;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null);
});
jamesmacaulay.zelkova.window.dimensions_channel = (function jamesmacaulay$zelkova$window$dimensions_channel(graph,opts){
return jamesmacaulay.zelkova.window.listen.call(null,window,"resize",cljs.core.map.call(null,(function (){
return jamesmacaulay.zelkova.window.get_size.call(null,opts);
})));
});
jamesmacaulay.zelkova.window.dimensions_events_fn = jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn.call(null,jamesmacaulay.zelkova.window.dimensions_channel,new cljs.core.Keyword("jamesmacaulay.zelkova.window","dimensions","jamesmacaulay.zelkova.window/dimensions",601310360));
/**
 * A signal of `[x y]` vectors representing the current dimensions of
 * the window.
 */
jamesmacaulay.zelkova.window.dimensions = jamesmacaulay.zelkova.impl.signal.make_signal.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-fn","init-fn",777257971),(function (_,opts){
return jamesmacaulay.zelkova.window.get_size.call(null,opts);
}),new cljs.core.Keyword(null,"relayed-event-topic","relayed-event-topic",323853461),new cljs.core.Keyword("jamesmacaulay.zelkova.window","dimensions","jamesmacaulay.zelkova.window/dimensions",601310360),new cljs.core.Keyword(null,"event-sources","event-sources",708931713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("jamesmacaulay.zelkova.window","dimensions","jamesmacaulay.zelkova.window/dimensions",601310360),jamesmacaulay.zelkova.window.dimensions_events_fn], null)], null));
/**
 * A signal of the current width of the window.
 */
jamesmacaulay.zelkova.window.width = jamesmacaulay.zelkova.signal.map.call(null,cljs.core.first,jamesmacaulay.zelkova.window.dimensions);
/**
 * A signal of the current height of the window.
 */
jamesmacaulay.zelkova.window.height = jamesmacaulay.zelkova.signal.map.call(null,cljs.core.second,jamesmacaulay.zelkova.window.dimensions);

//# sourceMappingURL=window.js.map
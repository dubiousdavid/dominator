// Compiled by ClojureScript 0.0-3178 {}
goog.provide('jamesmacaulay.zelkova.signal');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
goog.require('jamesmacaulay.zelkova.impl.signal');
/**
 * Returns an input signal with initial value `init`. The signal propagates values
 * from events which match some `topic`. An asynchronous `value-source` may be provided,
 * which will be used as the default value source for the given event `topic`. `value-source`
 * may take the following forms:
 * 
 * * a function taking a live graph and an options map, and returns a channel of values
 * * a channel of values
 * * a mult of some such value channel
 */
jamesmacaulay.zelkova.signal.input = (function jamesmacaulay$zelkova$signal$input(){
var G__13952 = arguments.length;
switch (G__13952) {
case 1:
return jamesmacaulay.zelkova.signal.input.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jamesmacaulay.zelkova.signal.input.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jamesmacaulay.zelkova.signal.input.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

jamesmacaulay.zelkova.signal.input.cljs$core$IFn$_invoke$arity$1 = (function (init){
return jamesmacaulay.zelkova.signal.input.call(null,init,cljs.core.keyword.call(null,cljs.core.gensym.call(null)));
});

jamesmacaulay.zelkova.signal.input.cljs$core$IFn$_invoke$arity$2 = (function (init,topic){
return jamesmacaulay.zelkova.impl.signal.make_signal.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-fn","init-fn",777257971),cljs.core.constantly.call(null,init),new cljs.core.Keyword(null,"relayed-event-topic","relayed-event-topic",323853461),topic], null));
});

jamesmacaulay.zelkova.signal.input.cljs$core$IFn$_invoke$arity$3 = (function (init,topic,value_source){
return jamesmacaulay.zelkova.impl.signal.make_signal.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-fn","init-fn",777257971),cljs.core.constantly.call(null,init),new cljs.core.Keyword(null,"relayed-event-topic","relayed-event-topic",323853461),topic,new cljs.core.Keyword(null,"event-sources","event-sources",708931713),new cljs.core.PersistentArrayMap.fromArray([topic,jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn.call(null,value_source,topic)], true, false)], null));
});

jamesmacaulay.zelkova.signal.input.cljs$lang$maxFixedArity = 3;
/**
 * Takes an `init` value and an optional `topic`, and returns an input signal
 * which satisfies core.async's `WritePort` protocol. This allows you to put
 * values onto the signal as if it were a channel. If the `write-port` is being
 * used in multiple live graphs, each value put onto the `write-port` is
 * sent to all graphs.
 */
jamesmacaulay.zelkova.signal.write_port = (function jamesmacaulay$zelkova$signal$write_port(){
var G__13955 = arguments.length;
switch (G__13955) {
case 1:
return jamesmacaulay.zelkova.signal.write_port.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jamesmacaulay.zelkova.signal.write_port.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

jamesmacaulay.zelkova.signal.write_port.cljs$core$IFn$_invoke$arity$1 = (function (init){
return jamesmacaulay.zelkova.signal.write_port.call(null,init,cljs.core.keyword.call(null,cljs.core.gensym.call(null)));
});

jamesmacaulay.zelkova.signal.write_port.cljs$core$IFn$_invoke$arity$2 = (function (init,topic){
var write_port_channel = cljs.core.async.chan.call(null);
return jamesmacaulay.zelkova.impl.signal.make_signal.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"init-fn","init-fn",777257971),cljs.core.constantly.call(null,init),new cljs.core.Keyword(null,"relayed-event-topic","relayed-event-topic",323853461),topic,new cljs.core.Keyword(null,"event-sources","event-sources",708931713),new cljs.core.PersistentArrayMap.fromArray([topic,jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn.call(null,write_port_channel,topic)], true, false),new cljs.core.Keyword(null,"write-port-channel","write-port-channel",-776952302),write_port_channel], null));
});

jamesmacaulay.zelkova.signal.write_port.cljs$lang$maxFixedArity = 2;
jamesmacaulay.zelkova.signal.take_nothing = (function jamesmacaulay$zelkova$signal$take_nothing(rf){
return (function() {
var G__13957 = null;
var G__13957__0 = (function (){
return rf.call(null);
});
var G__13957__1 = (function (result){
return rf.call(null,result);
});
var G__13957__2 = (function (result,_input){
return cljs.core.ensure_reduced.call(null,result);
});
G__13957 = function(result,_input){
switch(arguments.length){
case 0:
return G__13957__0.call(this);
case 1:
return G__13957__1.call(this,result);
case 2:
return G__13957__2.call(this,result,_input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13957.cljs$core$IFn$_invoke$arity$0 = G__13957__0;
G__13957.cljs$core$IFn$_invoke$arity$1 = G__13957__1;
G__13957.cljs$core$IFn$_invoke$arity$2 = G__13957__2;
return G__13957;
})()
});
/**
 * Returns a constant signal of the given value.
 */
jamesmacaulay.zelkova.signal.constant = (function jamesmacaulay$zelkova$signal$constant(x){
return jamesmacaulay.zelkova.impl.signal.make_signal.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-fn","init-fn",777257971),cljs.core.constantly.call(null,x),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201)], null),new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485),jamesmacaulay.zelkova.signal.take_nothing], null));
});
/**
 * Takes a stateless transducer `xform`, a fallback value `base`, and a signal
 * `sig`. Returns a new signal which pipes values from `sig` through `xform`.
 * Because transducers may filter out values, you must provide a `base` which will
 * be used as the derived signal's initial value if the initial value of `sig` ends
 * up being filtered. If multiple values are emitted from the transduction of the
 * initial value of `sig`, then the initial value of the new signal will be the
 * _last_ of those emitted. Stateful transducers will give unexpected results and
 * are not supported.
 */
jamesmacaulay.zelkova.signal.pipeline = (function jamesmacaulay$zelkova$signal$pipeline(xform,base,sig){
var parent_init_fn = new cljs.core.Keyword(null,"init-fn","init-fn",777257971).cljs$core$IFn$_invoke$arity$1(sig);
var init_fn = ((function (parent_init_fn){
return (function (live_graph,opts){
var vals = cljs.core.sequence.call(null,xform,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_init_fn.call(null,live_graph,opts)], null));
if(cljs.core.seq.call(null,vals)){
return cljs.core.last.call(null,vals);
} else {
return base;
}
});})(parent_init_fn))
;
var msg_xform = cljs.core.comp.call(null,cljs.core.map.call(null,((function (parent_init_fn,init_fn){
return (function (p__13961){
var vec__13962 = p__13961;
var _event = cljs.core.nth.call(null,vec__13962,(0),null);
var _prev = cljs.core.nth.call(null,vec__13962,(1),null);
var vec__13963 = cljs.core.nth.call(null,vec__13962,(2),null);
var msg = cljs.core.nth.call(null,vec__13963,(0),null);
return msg;
});})(parent_init_fn,init_fn))
),cljs.core.filter.call(null,jamesmacaulay.zelkova.impl.signal.fresh_QMARK_),cljs.core.map.call(null,jamesmacaulay.zelkova.impl.signal.value),xform,cljs.core.map.call(null,jamesmacaulay.zelkova.impl.signal.fresh));
return jamesmacaulay.zelkova.impl.signal.make_signal.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-fn","init-fn",777257971),init_fn,new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485),msg_xform], null));
});
/**
 * Takes a mapping function `f` and a sequence of signal `sources`, and returns a
 * signal of values obtained by applying `f` to the values from the source signals.
 */
jamesmacaulay.zelkova.signal.mapseq = (function jamesmacaulay$zelkova$signal$mapseq(f,sources){
if(cljs.core.empty_QMARK_.call(null,sources)){
return jamesmacaulay.zelkova.signal.constant.call(null,f.call(null));
} else {
var sources__$1 = cljs.core.vec.call(null,sources);
var msg_xform = cljs.core.comp.call(null,cljs.core.map.call(null,((function (sources__$1){
return (function (p__13966){
var vec__13967 = p__13966;
var _event = cljs.core.nth.call(null,vec__13967,(0),null);
var _prev = cljs.core.nth.call(null,vec__13967,(1),null);
var msgs = cljs.core.nth.call(null,vec__13967,(2),null);
return msgs;
});})(sources__$1))
),cljs.core.filter.call(null,((function (sources__$1){
return (function (msgs){
return cljs.core.some.call(null,jamesmacaulay.zelkova.impl.signal.fresh_QMARK_,msgs);
});})(sources__$1))
),cljs.core.map.call(null,((function (sources__$1){
return (function (msgs){
return jamesmacaulay.zelkova.impl.signal.fresh.call(null,cljs.core.apply.call(null,f,cljs.core.map.call(null,jamesmacaulay.zelkova.impl.signal.value,msgs)));
});})(sources__$1))
));
return jamesmacaulay.zelkova.impl.signal.make_signal.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-fn","init-fn",777257971),((function (sources__$1,msg_xform){
return (function (live_graph,opts){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,((function (sources__$1,msg_xform){
return (function (sig){
return new cljs.core.Keyword(null,"init-fn","init-fn",777257971).cljs$core$IFn$_invoke$arity$1(sig).call(null,live_graph,opts);
});})(sources__$1,msg_xform))
,sources__$1));
});})(sources__$1,msg_xform))
,new cljs.core.Keyword(null,"sources","sources",-321166424),sources__$1,new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485),msg_xform], null));
}
});
/**
 * Takes a mapping function `f` and any number of signal `sources`, and returns a
 * signal of values obtained by applying `f` to the values from the source signals.
 */
jamesmacaulay.zelkova.signal.map = (function jamesmacaulay$zelkova$signal$map(){
var argseq__5210__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return jamesmacaulay.zelkova.signal.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5210__auto__);
});

jamesmacaulay.zelkova.signal.map.cljs$core$IFn$_invoke$arity$variadic = (function (f,sources){
return jamesmacaulay.zelkova.signal.mapseq.call(null,f,sources);
});

jamesmacaulay.zelkova.signal.map.cljs$lang$maxFixedArity = (1);

jamesmacaulay.zelkova.signal.map.cljs$lang$applyTo = (function (seq13968){
var G__13969 = cljs.core.first.call(null,seq13968);
var seq13968__$1 = cljs.core.next.call(null,seq13968);
return jamesmacaulay.zelkova.signal.map.cljs$core$IFn$_invoke$arity$variadic(G__13969,seq13968__$1);
});
/**
 * Takes a map whose values are signals, to be used as a template. Returns a new
 * signal whose values are maps of the same form as `signal-map`, but with the current
 * value of each signal in place of the signal itself.
 */
jamesmacaulay.zelkova.signal.template = (function jamesmacaulay$zelkova$signal$template(signal_map){
var ks = cljs.core.keys.call(null,signal_map);
return jamesmacaulay.zelkova.signal.mapseq.call(null,((function (ks){
return (function() { 
var G__13970__delegate = function (values){
return cljs.core.zipmap.call(null,ks,values);
};
var G__13970 = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__13971__i = 0, G__13971__a = new Array(arguments.length -  0);
while (G__13971__i < G__13971__a.length) {G__13971__a[G__13971__i] = arguments[G__13971__i + 0]; ++G__13971__i;}
  values = new cljs.core.IndexedSeq(G__13971__a,0);
} 
return G__13970__delegate.call(this,values);};
G__13970.cljs$lang$maxFixedArity = 0;
G__13970.cljs$lang$applyTo = (function (arglist__13972){
var values = cljs.core.seq(arglist__13972);
return G__13970__delegate(values);
});
G__13970.cljs$core$IFn$_invoke$arity$variadic = G__13970__delegate;
return G__13970;
})()
;})(ks))
,cljs.core.vals.call(null,signal_map));
});
/**
 * Takes a map whose values are signals, to be used as a template. Returns a new
 * signal whose values are maps that include an entry for every signal in
 * `signal-map` with a fresh value. For example, assuming that `signal-map` is:
 * 
 * {:a sig-a
 * :b sig-b
 * :c sig-c}
 * 
 * Then when `sig-a` has a fresh value of "foo", `sig-b`'s value is cached, and
 * `sig-c` has a fresh value of "bar", then the `indexed-updates` signal would
 * emit `{:a "foo" :c "bar"}. When none of the signals have fresh values, no
 * value is emitted from the `indexed-updates` signal. This means that this signal
 * never emits an empty map.
 */
jamesmacaulay.zelkova.signal.indexed_updates = (function jamesmacaulay$zelkova$signal$indexed_updates(signal_map){
var ks = cljs.core.keys.call(null,signal_map);
var vs = cljs.core.vals.call(null,signal_map);
var init_fn = ((function (ks,vs){
return (function (live_graph,opts){
return cljs.core.zipmap.call(null,ks,cljs.core.map.call(null,((function (ks,vs){
return (function (s){
return new cljs.core.Keyword(null,"init-fn","init-fn",777257971).cljs$core$IFn$_invoke$arity$1(s).call(null,live_graph,opts);
});})(ks,vs))
,vs));
});})(ks,vs))
;
var kv_xform = cljs.core.comp.call(null,cljs.core.filter.call(null,((function (ks,vs,init_fn){
return (function (p__13979){
var vec__13980 = p__13979;
var k = cljs.core.nth.call(null,vec__13980,(0),null);
var msg = cljs.core.nth.call(null,vec__13980,(1),null);
return jamesmacaulay.zelkova.impl.signal.fresh_QMARK_.call(null,msg);
});})(ks,vs,init_fn))
),cljs.core.map.call(null,((function (ks,vs,init_fn){
return (function (p__13981){
var vec__13982 = p__13981;
var k = cljs.core.nth.call(null,vec__13982,(0),null);
var msg = cljs.core.nth.call(null,vec__13982,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,jamesmacaulay.zelkova.impl.signal.value.call(null,msg)], null);
});})(ks,vs,init_fn))
));
var msg_xform = cljs.core.comp.call(null,cljs.core.map.call(null,((function (ks,vs,init_fn,kv_xform){
return (function (p__13983){
var vec__13984 = p__13983;
var _event = cljs.core.nth.call(null,vec__13984,(0),null);
var _prev = cljs.core.nth.call(null,vec__13984,(1),null);
var msgs = cljs.core.nth.call(null,vec__13984,(2),null);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,kv_xform,cljs.core.map.call(null,cljs.core.vector,ks,msgs));
});})(ks,vs,init_fn,kv_xform))
),cljs.core.remove.call(null,cljs.core.empty_QMARK_),cljs.core.map.call(null,jamesmacaulay.zelkova.impl.signal.fresh));
return jamesmacaulay.zelkova.impl.signal.make_signal.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-fn","init-fn",777257971),init_fn,new cljs.core.Keyword(null,"sources","sources",-321166424),vs,new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485),msg_xform], null));
});
/**
 * Create a past-dependent signal ("fold into the past"). The values of a `foldp`
 * signal are obtained by calling `f` with two arguments: the current value of the
 * `source` signal, and the previous value of the new `foldp` signal (acting as the
 * "accumulator"). `init` provides the initial value of the new signal, and
 * therefore acts as the seed accumulator.
 */
jamesmacaulay.zelkova.signal.foldp = (function jamesmacaulay$zelkova$signal$foldp(f,base,source){
return jamesmacaulay.zelkova.impl.signal.make_signal.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-fn","init-fn",777257971),cljs.core.constantly.call(null,base),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485),cljs.core.comp.call(null,cljs.core.filter.call(null,(function (p__13991){
var vec__13992 = p__13991;
var _event = cljs.core.nth.call(null,vec__13992,(0),null);
var _prev = cljs.core.nth.call(null,vec__13992,(1),null);
var vec__13993 = cljs.core.nth.call(null,vec__13992,(2),null);
var msg = cljs.core.nth.call(null,vec__13993,(0),null);
return jamesmacaulay.zelkova.impl.signal.fresh_QMARK_.call(null,msg);
})),cljs.core.map.call(null,(function (p__13994){
var vec__13995 = p__13994;
var _event = cljs.core.nth.call(null,vec__13995,(0),null);
var prev = cljs.core.nth.call(null,vec__13995,(1),null);
var vec__13996 = cljs.core.nth.call(null,vec__13995,(2),null);
var msg = cljs.core.nth.call(null,vec__13996,(0),null);
return jamesmacaulay.zelkova.impl.signal.fresh.call(null,f.call(null,jamesmacaulay.zelkova.impl.signal.value.call(null,msg),prev));
})))], null));
});
/**
 * Returns a signal which relays values of `sig`, but drops repeated equal values.
 */
jamesmacaulay.zelkova.signal.drop_repeats = (function jamesmacaulay$zelkova$signal$drop_repeats(sig){
return jamesmacaulay.zelkova.impl.signal.make_signal.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-fn","init-fn",777257971),new cljs.core.Keyword(null,"init-fn","init-fn",777257971).cljs$core$IFn$_invoke$arity$1(sig),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485),cljs.core.comp.call(null,cljs.core.filter.call(null,(function (p__14003){
var vec__14004 = p__14003;
var _event = cljs.core.nth.call(null,vec__14004,(0),null);
var prev = cljs.core.nth.call(null,vec__14004,(1),null);
var vec__14005 = cljs.core.nth.call(null,vec__14004,(2),null);
var msg = cljs.core.nth.call(null,vec__14005,(0),null);
var and__4158__auto__ = jamesmacaulay.zelkova.impl.signal.fresh_QMARK_.call(null,msg);
if(cljs.core.truth_(and__4158__auto__)){
return cljs.core.not_EQ_.call(null,prev,jamesmacaulay.zelkova.impl.signal.value.call(null,msg));
} else {
return and__4158__auto__;
}
})),cljs.core.map.call(null,(function (p__14006){
var vec__14007 = p__14006;
var _event = cljs.core.nth.call(null,vec__14007,(0),null);
var _prev = cljs.core.nth.call(null,vec__14007,(1),null);
var vec__14008 = cljs.core.nth.call(null,vec__14007,(2),null);
var msg = cljs.core.nth.call(null,vec__14008,(0),null);
return msg;
})))], null));
});
/**
 * Create a past-dependent signal like `foldp`, with two differences:
 * * calls `f` with the arguments reversed to align with Clojure: the first
 * argument is the accumulator, the second is the current value of `source`.
 * * if `init` is omitted, the initial value of the new signal will be obtained by
 * calling `f` with no arguments.
 */
jamesmacaulay.zelkova.signal.reductions = (function jamesmacaulay$zelkova$signal$reductions(){
var G__14010 = arguments.length;
switch (G__14010) {
case 2:
return jamesmacaulay.zelkova.signal.reductions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jamesmacaulay.zelkova.signal.reductions.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

jamesmacaulay.zelkova.signal.reductions.cljs$core$IFn$_invoke$arity$2 = (function (f,source){
return jamesmacaulay.zelkova.signal.reductions.call(null,f,f.call(null),source);
});

jamesmacaulay.zelkova.signal.reductions.cljs$core$IFn$_invoke$arity$3 = (function (f,init,source){
return jamesmacaulay.zelkova.signal.foldp.call(null,(function (val,prev){
return f.call(null,prev,val);
}),init,source);
});

jamesmacaulay.zelkova.signal.reductions.cljs$lang$maxFixedArity = 3;
/**
 * Takes an initial value and a map whose keys are signals and whose values are
 * reducing functions. Returns a past-dependent signal like `reductions`, except
 * each signal has its own reducing function to use when that signal updates. If
 * more than one source signal updates from the same input event, then each
 * applicable reducing function is called to transform the state value in the
 * same order as they are defined in `signal-handlers-map`.
 */
jamesmacaulay.zelkova.signal.select_step = (function jamesmacaulay$zelkova$signal$select_step(){
var argseq__5210__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return jamesmacaulay.zelkova.signal.select_step.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5210__auto__);
});

jamesmacaulay.zelkova.signal.select_step.cljs$core$IFn$_invoke$arity$variadic = (function (init,signals_and_handlers){
var vec__14014 = cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.conj),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.call(null,(2),signals_and_handlers));
var signals = cljs.core.nth.call(null,vec__14014,(0),null);
var handlers = cljs.core.nth.call(null,vec__14014,(1),null);
var signal__GT_handler = cljs.core.zipmap.call(null,signals,handlers);
var updates_signal = jamesmacaulay.zelkova.signal.indexed_updates.call(null,cljs.core.zipmap.call(null,signals,signals));
var f = ((function (vec__14014,signals,handlers,signal__GT_handler,updates_signal){
return (function (prev,updates_by_signal){
return cljs.core.reduce.call(null,((function (vec__14014,signals,handlers,signal__GT_handler,updates_signal){
return (function (acc,p__14015){
var vec__14016 = p__14015;
var sig = cljs.core.nth.call(null,vec__14016,(0),null);
var val = cljs.core.nth.call(null,vec__14016,(1),null);
return signal__GT_handler.call(null,sig).call(null,acc,val);
});})(vec__14014,signals,handlers,signal__GT_handler,updates_signal))
,prev,updates_by_signal);
});})(vec__14014,signals,handlers,signal__GT_handler,updates_signal))
;
return jamesmacaulay.zelkova.signal.reductions.call(null,f,init,updates_signal);
});

jamesmacaulay.zelkova.signal.select_step.cljs$lang$maxFixedArity = (1);

jamesmacaulay.zelkova.signal.select_step.cljs$lang$applyTo = (function (seq14012){
var G__14013 = cljs.core.first.call(null,seq14012);
var seq14012__$1 = cljs.core.next.call(null,seq14012);
return jamesmacaulay.zelkova.signal.select_step.cljs$core$IFn$_invoke$arity$variadic(G__14013,seq14012__$1);
});
/**
 * Returns an "asynchronous" version of `source`, splitting off a new subgraph which
 * does not maintain consistent event ordering relative to the main graph. In exchange,
 * signals which depend on an `async` signal don't have to wait for the `source` to finish
 * computing new values. This function is mainly useful in multithreaded environments when
 * you don't want a slow computation to block the whole graph.
 */
jamesmacaulay.zelkova.signal.async = (function jamesmacaulay$zelkova$signal$async(source){
var topic = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jamesmacaulay.zelkova.signal","async","jamesmacaulay.zelkova.signal/async",-1802344142),source], null);
var msgs__GT_events = cljs.core.comp.call(null,cljs.core.cat,cljs.core.filter.call(null,jamesmacaulay.zelkova.impl.signal.fresh_QMARK_),cljs.core.map.call(null,((function (topic){
return (function (msg){
return jamesmacaulay.zelkova.impl.signal.make_event.call(null,topic,jamesmacaulay.zelkova.impl.signal.value.call(null,msg));
});})(topic))
));
var events_channel_fn = ((function (topic,msgs__GT_events){
return (function (live_graph,_){
return cljs.core.async.tap.call(null,jamesmacaulay.zelkova.impl.signal.signal_mult.call(null,live_graph,source),cljs.core.async.chan.call(null,(1),msgs__GT_events));
});})(topic,msgs__GT_events))
;
return jamesmacaulay.zelkova.impl.signal.make_signal.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"init-fn","init-fn",777257971),new cljs.core.Keyword(null,"init-fn","init-fn",777257971).cljs$core$IFn$_invoke$arity$1(source),new cljs.core.Keyword(null,"deps","deps",1883360319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),new cljs.core.Keyword(null,"relayed-event-topic","relayed-event-topic",323853461),topic,new cljs.core.Keyword(null,"event-sources","event-sources",708931713),new cljs.core.PersistentArrayMap.fromArray([topic,events_channel_fn], true, false)], null));
});
/**
 * Splice into the signal graph on the level of core.async channels. Takes a
 * `setup!` function which is called when the `source` signal gets wired up into
 * a live graph. The `setup!` function is passed two arguments: a `from` channel
 * and a `to` channel, in that order. The function is expected to be a consumer
 * of the `from` channel and a producer on the `to` channel, and should close the
 * `to` channel when the `from` channel is closed. There are no requirements for
 * how many values should be put on the `to` channel or when they should be sent.
 * `splice` returns a signal with an initial returned from `init-fn`. `init-fn`
 * takes two functions, a `live-graph` and an `opts` map. If no `init-fn` is
 * provided, then the initial value of `source` is used. The returned signal
 * asynchronously produces whichever values are put on the `to` channel in the
 * `setup!` function.
 */
jamesmacaulay.zelkova.signal.splice = (function jamesmacaulay$zelkova$signal$splice(){
var G__14018 = arguments.length;
switch (G__14018) {
case 2:
return jamesmacaulay.zelkova.signal.splice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jamesmacaulay.zelkova.signal.splice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

jamesmacaulay.zelkova.signal.splice.cljs$core$IFn$_invoke$arity$2 = (function (setup_BANG_,source){
return jamesmacaulay.zelkova.signal.splice.call(null,setup_BANG_,new cljs.core.Keyword(null,"init-fn","init-fn",777257971).cljs$core$IFn$_invoke$arity$1(source),source);
});

jamesmacaulay.zelkova.signal.splice.cljs$core$IFn$_invoke$arity$3 = (function (setup_BANG_,init_fn,source){
var topic = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jamesmacaulay.zelkova.signal","splice","jamesmacaulay.zelkova.signal/splice",-459359176),init_fn,setup_BANG_,source], null);
var events_channel_fn = ((function (topic){
return (function (live_graph,_){
var from = cljs.core.async.tap.call(null,jamesmacaulay.zelkova.impl.signal.signal_mult.call(null,live_graph,source),cljs.core.async.chan.call(null,(1),jamesmacaulay.zelkova.impl.signal.fresh_values));
var to = cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,cljs.core.partial.call(null,jamesmacaulay.zelkova.impl.signal.make_event,topic)));
setup_BANG_.call(null,from,to);

return to;
});})(topic))
;
return jamesmacaulay.zelkova.impl.signal.make_signal.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"init-fn","init-fn",777257971),init_fn,new cljs.core.Keyword(null,"deps","deps",1883360319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),new cljs.core.Keyword(null,"relayed-event-topic","relayed-event-topic",323853461),topic,new cljs.core.Keyword(null,"event-sources","event-sources",708931713),new cljs.core.PersistentArrayMap.fromArray([topic,events_channel_fn], true, false)], null));
});

jamesmacaulay.zelkova.signal.splice.cljs$lang$maxFixedArity = 3;
/**
 * Takes a sequence of signals `sigs`, and returns a new signal which relays fresh
 * values from all of the source signals. When more than one source has fresh values
 * at the same time, the first (leftmost) signal in `sigs` will take precedence and
 * the other values will be discarded. The initial value of the returned signal is
 * equal to the initial value of the first source signal.
 */
jamesmacaulay.zelkova.signal.mergeseq = (function jamesmacaulay$zelkova$signal$mergeseq(sigs){
return jamesmacaulay.zelkova.impl.signal.make_signal.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-fn","init-fn",777257971),new cljs.core.Keyword(null,"init-fn","init-fn",777257971).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,sigs)),new cljs.core.Keyword(null,"sources","sources",-321166424),sigs,new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485),cljs.core.comp.call(null,cljs.core.map.call(null,(function (p__14022){
var vec__14023 = p__14022;
var _event = cljs.core.nth.call(null,vec__14023,(0),null);
var _prev = cljs.core.nth.call(null,vec__14023,(1),null);
var msgs = cljs.core.nth.call(null,vec__14023,(2),null);
return cljs.core.first.call(null,cljs.core.filter.call(null,jamesmacaulay.zelkova.impl.signal.fresh_QMARK_,msgs));
})),cljs.core.remove.call(null,cljs.core.nil_QMARK_))], null));
});
/**
 * Takes any number of source signals `sigs`, and returns a new signal which relays
 * fresh values from all of the source signals. When more than one source has fresh values
 * at the same time, the first (leftmost) signal will take precedence and the other values
 * will be discarded. The initial value of the returned signal is equal to the initial
 * value of the first source signal.
 */
jamesmacaulay.zelkova.signal.merge = (function jamesmacaulay$zelkova$signal$merge(){
var argseq__5210__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return jamesmacaulay.zelkova.signal.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5210__auto__);
});

jamesmacaulay.zelkova.signal.merge.cljs$core$IFn$_invoke$arity$variadic = (function (sigs){
return jamesmacaulay.zelkova.signal.mergeseq.call(null,sigs);
});

jamesmacaulay.zelkova.signal.merge.cljs$lang$maxFixedArity = (0);

jamesmacaulay.zelkova.signal.merge.cljs$lang$applyTo = (function (seq14024){
return jamesmacaulay.zelkova.signal.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14024));
});
/**
 * Combines a sequence of signals into a signal of vectors. Equivalent to
 * `(signal/map vector sig1, sig2, ...)`
 */
jamesmacaulay.zelkova.signal.combine = (function jamesmacaulay$zelkova$signal$combine(sigs){
return jamesmacaulay.zelkova.signal.mapseq.call(null,cljs.core.vector,sigs);
});
/**
 * Sample the current value of `value-sig` every time `sampler-sig` updates with a
 * fresh value. For example, `(sample-on mouse/clicks mouse/position)` returns a signal
 * of click positions.
 */
jamesmacaulay.zelkova.signal.sample_on = (function jamesmacaulay$zelkova$signal$sample_on(sampler_sig,value_sig){
return jamesmacaulay.zelkova.impl.signal.make_signal.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-fn","init-fn",777257971),new cljs.core.Keyword(null,"init-fn","init-fn",777257971).cljs$core$IFn$_invoke$arity$1(value_sig),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sampler_sig,value_sig], null),new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485),cljs.core.comp.call(null,cljs.core.map.call(null,(function (p__14028){
var vec__14029 = p__14028;
var _event = cljs.core.nth.call(null,vec__14029,(0),null);
var _prev = cljs.core.nth.call(null,vec__14029,(1),null);
var vec__14030 = cljs.core.nth.call(null,vec__14029,(2),null);
var sampler_msg = cljs.core.nth.call(null,vec__14030,(0),null);
var value_msg = cljs.core.nth.call(null,vec__14030,(1),null);
if(cljs.core.truth_(jamesmacaulay.zelkova.impl.signal.fresh_QMARK_.call(null,sampler_msg))){
return jamesmacaulay.zelkova.impl.signal.fresh.call(null,jamesmacaulay.zelkova.impl.signal.value.call(null,value_msg));
} else {
return null;
}
})),cljs.core.remove.call(null,cljs.core.nil_QMARK_))], null));
});
/**
 * Returns a signal whose values are the number of fresh values emitted so far from
 * `sig`. Repeated equal values will be counted so long as they are fresh, so if you
 * don't want to count repeats then you need to `(count (drop-repeats sig))` instead.
 */
jamesmacaulay.zelkova.signal.count = (function jamesmacaulay$zelkova$signal$count(sig){
return jamesmacaulay.zelkova.signal.foldp.call(null,(function (p1__14032_SHARP_,p2__14031_SHARP_){
return (p2__14031_SHARP_ + (1));
}),(0),sig);
});
/**
 * Like `count`, but only increments the counter if the fresh value emitted from `sig`
 * satisfies the predicate funtion `pred`. For example, `(count-if odd? numbers)` returns
 * a signal of how many times the `numbers` signal emitted an odd number.
 */
jamesmacaulay.zelkova.signal.count_if = (function jamesmacaulay$zelkova$signal$count_if(pred,sig){
return jamesmacaulay.zelkova.signal.foldp.call(null,(function (v,c){
if(cljs.core.truth_(pred.call(null,v))){
return (c + (1));
} else {
return c;
}
}),(0),sig);
});
jamesmacaulay.zelkova.signal.keep_if_msg_xform = (function jamesmacaulay$zelkova$signal$keep_if_msg_xform(pred){
return cljs.core.comp.call(null,cljs.core.map.call(null,(function (p__14036){
var vec__14037 = p__14036;
var _event = cljs.core.nth.call(null,vec__14037,(0),null);
var _prev = cljs.core.nth.call(null,vec__14037,(1),null);
var vec__14038 = cljs.core.nth.call(null,vec__14037,(2),null);
var msg = cljs.core.nth.call(null,vec__14038,(0),null);
if(cljs.core.truth_((function (){var and__4158__auto__ = jamesmacaulay.zelkova.impl.signal.fresh_QMARK_.call(null,msg);
if(cljs.core.truth_(and__4158__auto__)){
return pred.call(null,jamesmacaulay.zelkova.impl.signal.value.call(null,msg));
} else {
return and__4158__auto__;
}
})())){
return jamesmacaulay.zelkova.impl.signal.fresh.call(null,jamesmacaulay.zelkova.impl.signal.value.call(null,msg));
} else {
return null;
}
})),cljs.core.remove.call(null,cljs.core.nil_QMARK_));
});
/**
 * Returns a signal which relays values from `sig`, but discards any which don't match
 * the given predicate function `pred`. If a `base` value is provided, it will be the
 * initial value of the returned signal if the initial value of `sig` does not match the
 * predicate. If no `base` is provided then the returned signal will always have the
 * same initial value as `sig`, even if it does not match the predicate.
 */
jamesmacaulay.zelkova.signal.keep_if = (function jamesmacaulay$zelkova$signal$keep_if(){
var G__14040 = arguments.length;
switch (G__14040) {
case 2:
return jamesmacaulay.zelkova.signal.keep_if.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jamesmacaulay.zelkova.signal.keep_if.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

jamesmacaulay.zelkova.signal.keep_if.cljs$core$IFn$_invoke$arity$2 = (function (pred,sig){
return jamesmacaulay.zelkova.impl.signal.make_signal.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-fn","init-fn",777257971),new cljs.core.Keyword(null,"init-fn","init-fn",777257971).cljs$core$IFn$_invoke$arity$1(sig),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485),jamesmacaulay.zelkova.signal.keep_if_msg_xform.call(null,pred)], null));
});

jamesmacaulay.zelkova.signal.keep_if.cljs$core$IFn$_invoke$arity$3 = (function (pred,base,sig){
return jamesmacaulay.zelkova.impl.signal.make_signal.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-fn","init-fn",777257971),(function (){var init_fn = new cljs.core.Keyword(null,"init-fn","init-fn",777257971).cljs$core$IFn$_invoke$arity$1(sig);
return ((function (init_fn){
return (function (live_graph,opts){
var init = init_fn.call(null,live_graph,opts);
if(cljs.core.truth_(pred.call(null,init))){
return init;
} else {
return base;
}
});
;})(init_fn))
})(),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485),jamesmacaulay.zelkova.signal.keep_if_msg_xform.call(null,pred)], null));
});

jamesmacaulay.zelkova.signal.keep_if.cljs$lang$maxFixedArity = 3;
/**
 * Like `keep-if`, but drops values which match the predicate.
 */
jamesmacaulay.zelkova.signal.drop_if = (function jamesmacaulay$zelkova$signal$drop_if(){
var G__14043 = arguments.length;
switch (G__14043) {
case 2:
return jamesmacaulay.zelkova.signal.drop_if.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jamesmacaulay.zelkova.signal.drop_if.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

jamesmacaulay.zelkova.signal.drop_if.cljs$core$IFn$_invoke$arity$2 = (function (pred,sig){
return jamesmacaulay.zelkova.signal.keep_if.call(null,cljs.core.complement.call(null,pred),sig);
});

jamesmacaulay.zelkova.signal.drop_if.cljs$core$IFn$_invoke$arity$3 = (function (pred,base,sig){
return jamesmacaulay.zelkova.signal.keep_if.call(null,cljs.core.complement.call(null,pred),base,sig);
});

jamesmacaulay.zelkova.signal.drop_if.cljs$lang$maxFixedArity = 3;
/**
 * Returns a new signal which relays values from `value-sig`, but only when the current
 * value of `switch-sig` is truthy.
 */
jamesmacaulay.zelkova.signal.keep_when = (function jamesmacaulay$zelkova$signal$keep_when(){
var G__14046 = arguments.length;
switch (G__14046) {
case 2:
return jamesmacaulay.zelkova.signal.keep_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jamesmacaulay.zelkova.signal.keep_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

jamesmacaulay.zelkova.signal.keep_when.cljs$core$IFn$_invoke$arity$2 = (function (switch_sig,value_sig){
return jamesmacaulay.zelkova.signal.map.call(null,cljs.core.second,jamesmacaulay.zelkova.signal.keep_if.call(null,cljs.core.first,jamesmacaulay.zelkova.signal.map.call(null,cljs.core.vector,jamesmacaulay.zelkova.signal.sample_on.call(null,value_sig,switch_sig),value_sig)));
});

jamesmacaulay.zelkova.signal.keep_when.cljs$core$IFn$_invoke$arity$3 = (function (switch_sig,base,value_sig){
return jamesmacaulay.zelkova.signal.map.call(null,cljs.core.second,jamesmacaulay.zelkova.signal.keep_if.call(null,cljs.core.first,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,base], null),jamesmacaulay.zelkova.signal.map.call(null,cljs.core.vector,jamesmacaulay.zelkova.signal.sample_on.call(null,value_sig,switch_sig),value_sig)));
});

jamesmacaulay.zelkova.signal.keep_when.cljs$lang$maxFixedArity = 3;
/**
 * Like `keep-when`, but only relays values when `switch-sig` is falsy.
 */
jamesmacaulay.zelkova.signal.drop_when = (function jamesmacaulay$zelkova$signal$drop_when(){
var G__14049 = arguments.length;
switch (G__14049) {
case 2:
return jamesmacaulay.zelkova.signal.drop_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jamesmacaulay.zelkova.signal.drop_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

jamesmacaulay.zelkova.signal.drop_when.cljs$core$IFn$_invoke$arity$2 = (function (switch_sig,value_sig){
return jamesmacaulay.zelkova.signal.keep_when.call(null,jamesmacaulay.zelkova.signal.map.call(null,cljs.core.not,switch_sig),value_sig);
});

jamesmacaulay.zelkova.signal.drop_when.cljs$core$IFn$_invoke$arity$3 = (function (switch_sig,base,value_sig){
return jamesmacaulay.zelkova.signal.keep_when.call(null,jamesmacaulay.zelkova.signal.map.call(null,cljs.core.not,switch_sig),base,value_sig);
});

jamesmacaulay.zelkova.signal.drop_when.cljs$lang$maxFixedArity = 3;
/**
 * Returns a transformation of `value-sig` whose entire graph of signal
 * dependencies—aside from input nodes—is skipped unless `switch-sig`'s state
 * is truthy. This is accomplished by walking `value-sig`'s graph and wrapping
 * its input signals with `keep-when`. The intial value of a signal returned
 * from `activate-when` is always equal to the initial value of `value-sig`.
 */
jamesmacaulay.zelkova.signal.activate_when = (function jamesmacaulay$zelkova$signal$activate_when(switch_sig,value_sig){
var sorted_signals = jamesmacaulay.zelkova.impl.signal.topsort.call(null,value_sig);
var reducer = ((function (sorted_signals){
return (function (m,sig){
var sig_SINGLEQUOTE_ = cljs.core.update.call(null,cljs.core.update.call(null,sig,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.partial.call(null,cljs.core.mapv,m)),new cljs.core.Keyword(null,"deps","deps",1883360319),((function (sorted_signals){
return (function (p1__14051_SHARP_){
if((p1__14051_SHARP_ == null)){
return p1__14051_SHARP_;
} else {
return cljs.core.mapv.call(null,m,p1__14051_SHARP_);
}
});})(sorted_signals))
);
var sig_SINGLEQUOTE__SINGLEQUOTE_ = (cljs.core.truth_(jamesmacaulay.zelkova.impl.signal.input_QMARK_.call(null,sig_SINGLEQUOTE_))?jamesmacaulay.zelkova.signal.keep_when.call(null,switch_sig,sig_SINGLEQUOTE_):sig_SINGLEQUOTE_);
return cljs.core.assoc.call(null,m,sig,sig_SINGLEQUOTE__SINGLEQUOTE_);
});})(sorted_signals))
;
var signal_mapping = cljs.core.reduce.call(null,reducer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"events","events",1792552201)], null),sorted_signals);
return cljs.core.get.call(null,signal_mapping,value_sig);
});
/**
 * A little convenience helper which logs signal values with `pr` before propagating them unchanged.
 */
jamesmacaulay.zelkova.signal.log = (function jamesmacaulay$zelkova$signal$log(sig){
return jamesmacaulay.zelkova.signal.map.call(null,(function (x){
cljs.core.pr.call(null,x);

return x;
}),sig);
});
/**
 * Take an inert signal and produce a live, running graph.
 */
jamesmacaulay.zelkova.signal.spawn = (function jamesmacaulay$zelkova$signal$spawn(){
var G__14053 = arguments.length;
switch (G__14053) {
case 1:
return jamesmacaulay.zelkova.signal.spawn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jamesmacaulay.zelkova.signal.spawn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

jamesmacaulay.zelkova.signal.spawn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return jamesmacaulay.zelkova.impl.signal.spawn_STAR_.call(null,s,null);
});

jamesmacaulay.zelkova.signal.spawn.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
return jamesmacaulay.zelkova.impl.signal.spawn_STAR_.call(null,s,opts);
});

jamesmacaulay.zelkova.signal.spawn.cljs$lang$maxFixedArity = 2;
/**
 * Pipes fresh values from a live graph into an atom. If `x` is a signal, it is `spawn`ed
 * as a live graph first. If no atom is provided, then a new atom is created which takes its
 * initial value from that of the given signal or graph. If an existing atom is provided along
 * with a sequence of keys `ks`, then fresh values will be inserted into the atom's value using
 * `swap!` with `assoc-in`. If `ks` is not present, then the whole atom value is replaced with
 * `reset!`.
 */
jamesmacaulay.zelkova.signal.pipe_to_atom = (function jamesmacaulay$zelkova$signal$pipe_to_atom(){
var G__14056 = arguments.length;
switch (G__14056) {
case 1:
return jamesmacaulay.zelkova.signal.pipe_to_atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jamesmacaulay.zelkova.signal.pipe_to_atom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jamesmacaulay.zelkova.signal.pipe_to_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

jamesmacaulay.zelkova.signal.pipe_to_atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
var live_graph = jamesmacaulay.zelkova.signal.spawn.call(null,x);
return jamesmacaulay.zelkova.signal.pipe_to_atom.call(null,live_graph,cljs.core.atom.call(null,jamesmacaulay.zelkova.impl.signal.init.call(null,live_graph),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("jamesmacaulay.zelkova.signal","source","jamesmacaulay.zelkova.signal/source",-943992700),live_graph], null)));
});

jamesmacaulay.zelkova.signal.pipe_to_atom.cljs$core$IFn$_invoke$arity$2 = (function (x,atm){
return jamesmacaulay.zelkova.impl.signal.pipe_to_atom_STAR_.call(null,x,atm,null);
});

jamesmacaulay.zelkova.signal.pipe_to_atom.cljs$core$IFn$_invoke$arity$3 = (function (x,atm,ks){
return jamesmacaulay.zelkova.impl.signal.pipe_to_atom_STAR_.call(null,x,atm,ks);
});

jamesmacaulay.zelkova.signal.pipe_to_atom.cljs$lang$maxFixedArity = 3;
/**
 * Takes a signal `s` and returns a channel of fresh values, passing any extra `args` to
 * the `chan` constructor.
 */
jamesmacaulay.zelkova.signal.to_chan = (function jamesmacaulay$zelkova$signal$to_chan(){
var argseq__5210__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return jamesmacaulay.zelkova.signal.to_chan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5210__auto__);
});

jamesmacaulay.zelkova.signal.to_chan.cljs$core$IFn$_invoke$arity$variadic = (function (s,args){
return cljs.core.async.tap.call(null,jamesmacaulay.zelkova.signal.spawn.call(null,s),cljs.core.apply.call(null,cljs.core.async.chan,args));
});

jamesmacaulay.zelkova.signal.to_chan.cljs$lang$maxFixedArity = (1);

jamesmacaulay.zelkova.signal.to_chan.cljs$lang$applyTo = (function (seq14058){
var G__14059 = cljs.core.first.call(null,seq14058);
var seq14058__$1 = cljs.core.next.call(null,seq14058);
return jamesmacaulay.zelkova.signal.to_chan.cljs$core$IFn$_invoke$arity$variadic(G__14059,seq14058__$1);
});

//# sourceMappingURL=signal.js.map
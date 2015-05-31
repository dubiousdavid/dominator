// Compiled by ClojureScript 0.0-3178 {}
goog.provide('jamesmacaulay.zelkova.impl.signal');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('alandipert.kahn');
goog.require('cljs.core.async');
goog.require('jamesmacaulay.async_tools.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('clojure.set');
goog.require('jamesmacaulay.zelkova.impl.time');

jamesmacaulay.zelkova.impl.signal.BoxedValueProtocol = (function (){var obj14063 = {};
return obj14063;
})();

jamesmacaulay.zelkova.impl.signal.value = (function jamesmacaulay$zelkova$impl$signal$value(boxed){
if((function (){var and__4158__auto__ = boxed;
if(and__4158__auto__){
return boxed.jamesmacaulay$zelkova$impl$signal$BoxedValueProtocol$value$arity$1;
} else {
return and__4158__auto__;
}
})()){
return boxed.jamesmacaulay$zelkova$impl$signal$BoxedValueProtocol$value$arity$1(boxed);
} else {
var x__4806__auto__ = (((boxed == null))?null:boxed);
return (function (){var or__4170__auto__ = (jamesmacaulay.zelkova.impl.signal.value[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (jamesmacaulay.zelkova.impl.signal.value["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"BoxedValueProtocol.value",boxed);
}
}
})().call(null,boxed);
}
});


/**
 * Events come in from "the outside world" and get transformed into Messages by input signal nodes
 */
jamesmacaulay.zelkova.impl.signal.EventProtocol = (function (){var obj14065 = {};
return obj14065;
})();

jamesmacaulay.zelkova.impl.signal.topic = (function jamesmacaulay$zelkova$impl$signal$topic(event){
if((function (){var and__4158__auto__ = event;
if(and__4158__auto__){
return event.jamesmacaulay$zelkova$impl$signal$EventProtocol$topic$arity$1;
} else {
return and__4158__auto__;
}
})()){
return event.jamesmacaulay$zelkova$impl$signal$EventProtocol$topic$arity$1(event);
} else {
var x__4806__auto__ = (((event == null))?null:event);
return (function (){var or__4170__auto__ = (jamesmacaulay.zelkova.impl.signal.topic[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (jamesmacaulay.zelkova.impl.signal.topic["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"EventProtocol.topic",event);
}
}
})().call(null,event);
}
});

jamesmacaulay.zelkova.impl.signal.timestamp = (function jamesmacaulay$zelkova$impl$signal$timestamp(event){
if((function (){var and__4158__auto__ = event;
if(and__4158__auto__){
return event.jamesmacaulay$zelkova$impl$signal$EventProtocol$timestamp$arity$1;
} else {
return and__4158__auto__;
}
})()){
return event.jamesmacaulay$zelkova$impl$signal$EventProtocol$timestamp$arity$1(event);
} else {
var x__4806__auto__ = (((event == null))?null:event);
return (function (){var or__4170__auto__ = (jamesmacaulay.zelkova.impl.signal.timestamp[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (jamesmacaulay.zelkova.impl.signal.timestamp["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"EventProtocol.timestamp",event);
}
}
})().call(null,event);
}
});

jamesmacaulay.zelkova.impl.signal.record_timestamp = (function jamesmacaulay$zelkova$impl$signal$record_timestamp(event,timestamp){
if((function (){var and__4158__auto__ = event;
if(and__4158__auto__){
return event.jamesmacaulay$zelkova$impl$signal$EventProtocol$record_timestamp$arity$2;
} else {
return and__4158__auto__;
}
})()){
return event.jamesmacaulay$zelkova$impl$signal$EventProtocol$record_timestamp$arity$2(event,timestamp);
} else {
var x__4806__auto__ = (((event == null))?null:event);
return (function (){var or__4170__auto__ = (jamesmacaulay.zelkova.impl.signal.record_timestamp[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (jamesmacaulay.zelkova.impl.signal.record_timestamp["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"EventProtocol.record-timestamp",event);
}
}
})().call(null,event,timestamp);
}
});


/**
 * Messages are propagated through the signal graph, and can either be "fresh" or "cached".
 */
jamesmacaulay.zelkova.impl.signal.MessageProtocol = (function (){var obj14067 = {};
return obj14067;
})();

/**
 * returns `true` if the message represents a fresh value, `false` otherwise
 */
jamesmacaulay.zelkova.impl.signal.fresh_QMARK_ = (function jamesmacaulay$zelkova$impl$signal$fresh_QMARK_(msg){
if((function (){var and__4158__auto__ = msg;
if(and__4158__auto__){
return msg.jamesmacaulay$zelkova$impl$signal$MessageProtocol$fresh_QMARK_$arity$1;
} else {
return and__4158__auto__;
}
})()){
return msg.jamesmacaulay$zelkova$impl$signal$MessageProtocol$fresh_QMARK_$arity$1(msg);
} else {
var x__4806__auto__ = (((msg == null))?null:msg);
return (function (){var or__4170__auto__ = (jamesmacaulay.zelkova.impl.signal.fresh_QMARK_[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (jamesmacaulay.zelkova.impl.signal.fresh_QMARK_["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"MessageProtocol.fresh?",msg);
}
}
})().call(null,msg);
}
});


/**
* @constructor
* @param {*} topic
* @param {*} value
* @param {*} timestamp
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
jamesmacaulay.zelkova.impl.signal.Event = (function (topic,value,timestamp,__meta,__extmap,__hash){
this.topic = topic;
this.value = value;
this.timestamp = timestamp;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jamesmacaulay.zelkova.impl.signal.Event.prototype.jamesmacaulay$zelkova$impl$signal$EventProtocol$ = true;

jamesmacaulay.zelkova.impl.signal.Event.prototype.jamesmacaulay$zelkova$impl$signal$EventProtocol$topic$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.topic;
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.jamesmacaulay$zelkova$impl$signal$EventProtocol$timestamp$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.timestamp;
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.jamesmacaulay$zelkova$impl$signal$EventProtocol$record_timestamp$arity$2 = (function (e,t){
var self__ = this;
var e__$1 = this;
return cljs.core.assoc.call(null,e__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),t);
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4765__auto__,k__4766__auto__){
var self__ = this;
var this__4765__auto____$1 = this;
return cljs.core._lookup.call(null,this__4765__auto____$1,k__4766__auto__,null);
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4767__auto__,k14069,else__4768__auto__){
var self__ = this;
var this__4767__auto____$1 = this;
var G__14071 = (((k14069 instanceof cljs.core.Keyword))?k14069.fqn:null);
switch (G__14071) {
case "topic":
return self__.topic;

break;
case "value":
return self__.value;

break;
case "timestamp":
return self__.timestamp;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14069,else__4768__auto__);

}
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4779__auto__,writer__4780__auto__,opts__4781__auto__){
var self__ = this;
var this__4779__auto____$1 = this;
var pr_pair__4782__auto__ = ((function (this__4779__auto____$1){
return (function (keyval__4783__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4780__auto__,cljs.core.pr_writer,""," ","",opts__4781__auto__,keyval__4783__auto__);
});})(this__4779__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4780__auto__,pr_pair__4782__auto__,"#jamesmacaulay.zelkova.impl.signal.Event{",", ","}",opts__4781__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"topic","topic",-1960480691),self__.topic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timestamp","timestamp",579478971),self__.timestamp],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4763__auto__){
var self__ = this;
var this__4763__auto____$1 = this;
return self__.__meta;
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4759__auto__){
var self__ = this;
var this__4759__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.Event(self__.topic,self__.value,self__.timestamp,self__.__meta,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4769__auto__){
var self__ = this;
var this__4769__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4760__auto__){
var self__ = this;
var this__4760__auto____$1 = this;
var h__4586__auto__ = self__.__hash;
if(!((h__4586__auto__ == null))){
return h__4586__auto__;
} else {
var h__4586__auto____$1 = cljs.core.hash_imap.call(null,this__4760__auto____$1);
self__.__hash = h__4586__auto____$1;

return h__4586__auto____$1;
}
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4761__auto__,other__4762__auto__){
var self__ = this;
var this__4761__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4158__auto__ = other__4762__auto__;
if(cljs.core.truth_(and__4158__auto__)){
var and__4158__auto____$1 = (this__4761__auto____$1.constructor === other__4762__auto__.constructor);
if(and__4158__auto____$1){
return cljs.core.equiv_map.call(null,this__4761__auto____$1,other__4762__auto__);
} else {
return and__4158__auto____$1;
}
} else {
return and__4158__auto__;
}
})())){
return true;
} else {
return false;
}
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.jamesmacaulay$zelkova$impl$signal$BoxedValueProtocol$ = true;

jamesmacaulay.zelkova.impl.signal.Event.prototype.jamesmacaulay$zelkova$impl$signal$BoxedValueProtocol$value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4774__auto__,k__4775__auto__){
var self__ = this;
var this__4774__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"topic","topic",-1960480691),null,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),null], null), null),k__4775__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4774__auto____$1),self__.__meta),k__4775__auto__);
} else {
return (new jamesmacaulay.zelkova.impl.signal.Event(self__.topic,self__.value,self__.timestamp,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4775__auto__)),null));
}
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4772__auto__,k__4773__auto__,G__14068){
var self__ = this;
var this__4772__auto____$1 = this;
var pred__14072 = cljs.core.keyword_identical_QMARK_;
var expr__14073 = k__4773__auto__;
if(cljs.core.truth_(pred__14072.call(null,new cljs.core.Keyword(null,"topic","topic",-1960480691),expr__14073))){
return (new jamesmacaulay.zelkova.impl.signal.Event(G__14068,self__.value,self__.timestamp,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14072.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__14073))){
return (new jamesmacaulay.zelkova.impl.signal.Event(self__.topic,G__14068,self__.timestamp,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14072.call(null,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),expr__14073))){
return (new jamesmacaulay.zelkova.impl.signal.Event(self__.topic,self__.value,G__14068,self__.__meta,self__.__extmap,null));
} else {
return (new jamesmacaulay.zelkova.impl.signal.Event(self__.topic,self__.value,self__.timestamp,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4773__auto__,G__14068),null));
}
}
}
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4777__auto__){
var self__ = this;
var this__4777__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"topic","topic",-1960480691),self__.topic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timestamp","timestamp",579478971),self__.timestamp],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4764__auto__,G__14068){
var self__ = this;
var this__4764__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.Event(self__.topic,self__.value,self__.timestamp,G__14068,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4770__auto__,entry__4771__auto__){
var self__ = this;
var this__4770__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4771__auto__)){
return cljs.core._assoc.call(null,this__4770__auto____$1,cljs.core._nth.call(null,entry__4771__auto__,(0)),cljs.core._nth.call(null,entry__4771__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4770__auto____$1,entry__4771__auto__);
}
});

jamesmacaulay.zelkova.impl.signal.Event.cljs$lang$type = true;

jamesmacaulay.zelkova.impl.signal.Event.cljs$lang$ctorPrSeq = (function (this__4799__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jamesmacaulay.zelkova.impl.signal/Event");
});

jamesmacaulay.zelkova.impl.signal.Event.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"jamesmacaulay.zelkova.impl.signal/Event");
});

jamesmacaulay.zelkova.impl.signal.__GT_Event = (function jamesmacaulay$zelkova$impl$signal$__GT_Event(topic,value,timestamp){
return (new jamesmacaulay.zelkova.impl.signal.Event(topic,value,timestamp,null,null,null));
});

jamesmacaulay.zelkova.impl.signal.map__GT_Event = (function jamesmacaulay$zelkova$impl$signal$map__GT_Event(G__14070){
return (new jamesmacaulay.zelkova.impl.signal.Event(new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(G__14070),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__14070),new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(G__14070),null,cljs.core.dissoc.call(null,G__14070,new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)),null));
});

jamesmacaulay.zelkova.impl.signal.make_event = (function jamesmacaulay$zelkova$impl$signal$make_event(topic,value){
return jamesmacaulay.zelkova.impl.signal.__GT_Event.call(null,topic,value,null);
});

/**
* @constructor
* @param {*} value
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
jamesmacaulay.zelkova.impl.signal.Fresh = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4765__auto__,k__4766__auto__){
var self__ = this;
var this__4765__auto____$1 = this;
return cljs.core._lookup.call(null,this__4765__auto____$1,k__4766__auto__,null);
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4767__auto__,k14077,else__4768__auto__){
var self__ = this;
var this__4767__auto____$1 = this;
var G__14079 = (((k14077 instanceof cljs.core.Keyword))?k14077.fqn:null);
switch (G__14079) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14077,else__4768__auto__);

}
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4779__auto__,writer__4780__auto__,opts__4781__auto__){
var self__ = this;
var this__4779__auto____$1 = this;
var pr_pair__4782__auto__ = ((function (this__4779__auto____$1){
return (function (keyval__4783__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4780__auto__,cljs.core.pr_writer,""," ","",opts__4781__auto__,keyval__4783__auto__);
});})(this__4779__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4780__auto__,pr_pair__4782__auto__,"#jamesmacaulay.zelkova.impl.signal.Fresh{",", ","}",opts__4781__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4763__auto__){
var self__ = this;
var this__4763__auto____$1 = this;
return self__.__meta;
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4759__auto__){
var self__ = this;
var this__4759__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.Fresh(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4769__auto__){
var self__ = this;
var this__4769__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4760__auto__){
var self__ = this;
var this__4760__auto____$1 = this;
var h__4586__auto__ = self__.__hash;
if(!((h__4586__auto__ == null))){
return h__4586__auto__;
} else {
var h__4586__auto____$1 = cljs.core.hash_imap.call(null,this__4760__auto____$1);
self__.__hash = h__4586__auto____$1;

return h__4586__auto____$1;
}
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4761__auto__,other__4762__auto__){
var self__ = this;
var this__4761__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4158__auto__ = other__4762__auto__;
if(cljs.core.truth_(and__4158__auto__)){
var and__4158__auto____$1 = (this__4761__auto____$1.constructor === other__4762__auto__.constructor);
if(and__4158__auto____$1){
return cljs.core.equiv_map.call(null,this__4761__auto____$1,other__4762__auto__);
} else {
return and__4158__auto____$1;
}
} else {
return and__4158__auto__;
}
})())){
return true;
} else {
return false;
}
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.jamesmacaulay$zelkova$impl$signal$BoxedValueProtocol$ = true;

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.jamesmacaulay$zelkova$impl$signal$BoxedValueProtocol$value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.jamesmacaulay$zelkova$impl$signal$MessageProtocol$ = true;

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.jamesmacaulay$zelkova$impl$signal$MessageProtocol$fresh_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4774__auto__,k__4775__auto__){
var self__ = this;
var this__4774__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4775__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4774__auto____$1),self__.__meta),k__4775__auto__);
} else {
return (new jamesmacaulay.zelkova.impl.signal.Fresh(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4775__auto__)),null));
}
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4772__auto__,k__4773__auto__,G__14076){
var self__ = this;
var this__4772__auto____$1 = this;
var pred__14080 = cljs.core.keyword_identical_QMARK_;
var expr__14081 = k__4773__auto__;
if(cljs.core.truth_(pred__14080.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__14081))){
return (new jamesmacaulay.zelkova.impl.signal.Fresh(G__14076,self__.__meta,self__.__extmap,null));
} else {
return (new jamesmacaulay.zelkova.impl.signal.Fresh(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4773__auto__,G__14076),null));
}
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4777__auto__){
var self__ = this;
var this__4777__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4764__auto__,G__14076){
var self__ = this;
var this__4764__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.Fresh(self__.value,G__14076,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4770__auto__,entry__4771__auto__){
var self__ = this;
var this__4770__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4771__auto__)){
return cljs.core._assoc.call(null,this__4770__auto____$1,cljs.core._nth.call(null,entry__4771__auto__,(0)),cljs.core._nth.call(null,entry__4771__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4770__auto____$1,entry__4771__auto__);
}
});

jamesmacaulay.zelkova.impl.signal.Fresh.cljs$lang$type = true;

jamesmacaulay.zelkova.impl.signal.Fresh.cljs$lang$ctorPrSeq = (function (this__4799__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jamesmacaulay.zelkova.impl.signal/Fresh");
});

jamesmacaulay.zelkova.impl.signal.Fresh.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"jamesmacaulay.zelkova.impl.signal/Fresh");
});

jamesmacaulay.zelkova.impl.signal.__GT_Fresh = (function jamesmacaulay$zelkova$impl$signal$__GT_Fresh(value){
return (new jamesmacaulay.zelkova.impl.signal.Fresh(value,null,null,null));
});

jamesmacaulay.zelkova.impl.signal.map__GT_Fresh = (function jamesmacaulay$zelkova$impl$signal$map__GT_Fresh(G__14078){
return (new jamesmacaulay.zelkova.impl.signal.Fresh(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__14078),null,cljs.core.dissoc.call(null,G__14078,new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
* @constructor
* @param {*} value
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
jamesmacaulay.zelkova.impl.signal.Cached = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4765__auto__,k__4766__auto__){
var self__ = this;
var this__4765__auto____$1 = this;
return cljs.core._lookup.call(null,this__4765__auto____$1,k__4766__auto__,null);
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4767__auto__,k14085,else__4768__auto__){
var self__ = this;
var this__4767__auto____$1 = this;
var G__14087 = (((k14085 instanceof cljs.core.Keyword))?k14085.fqn:null);
switch (G__14087) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14085,else__4768__auto__);

}
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4779__auto__,writer__4780__auto__,opts__4781__auto__){
var self__ = this;
var this__4779__auto____$1 = this;
var pr_pair__4782__auto__ = ((function (this__4779__auto____$1){
return (function (keyval__4783__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4780__auto__,cljs.core.pr_writer,""," ","",opts__4781__auto__,keyval__4783__auto__);
});})(this__4779__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4780__auto__,pr_pair__4782__auto__,"#jamesmacaulay.zelkova.impl.signal.Cached{",", ","}",opts__4781__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4763__auto__){
var self__ = this;
var this__4763__auto____$1 = this;
return self__.__meta;
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4759__auto__){
var self__ = this;
var this__4759__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.Cached(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4769__auto__){
var self__ = this;
var this__4769__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4760__auto__){
var self__ = this;
var this__4760__auto____$1 = this;
var h__4586__auto__ = self__.__hash;
if(!((h__4586__auto__ == null))){
return h__4586__auto__;
} else {
var h__4586__auto____$1 = cljs.core.hash_imap.call(null,this__4760__auto____$1);
self__.__hash = h__4586__auto____$1;

return h__4586__auto____$1;
}
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4761__auto__,other__4762__auto__){
var self__ = this;
var this__4761__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4158__auto__ = other__4762__auto__;
if(cljs.core.truth_(and__4158__auto__)){
var and__4158__auto____$1 = (this__4761__auto____$1.constructor === other__4762__auto__.constructor);
if(and__4158__auto____$1){
return cljs.core.equiv_map.call(null,this__4761__auto____$1,other__4762__auto__);
} else {
return and__4158__auto____$1;
}
} else {
return and__4158__auto__;
}
})())){
return true;
} else {
return false;
}
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.jamesmacaulay$zelkova$impl$signal$BoxedValueProtocol$ = true;

jamesmacaulay.zelkova.impl.signal.Cached.prototype.jamesmacaulay$zelkova$impl$signal$BoxedValueProtocol$value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.jamesmacaulay$zelkova$impl$signal$MessageProtocol$ = true;

jamesmacaulay.zelkova.impl.signal.Cached.prototype.jamesmacaulay$zelkova$impl$signal$MessageProtocol$fresh_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4774__auto__,k__4775__auto__){
var self__ = this;
var this__4774__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4775__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4774__auto____$1),self__.__meta),k__4775__auto__);
} else {
return (new jamesmacaulay.zelkova.impl.signal.Cached(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4775__auto__)),null));
}
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4772__auto__,k__4773__auto__,G__14084){
var self__ = this;
var this__4772__auto____$1 = this;
var pred__14088 = cljs.core.keyword_identical_QMARK_;
var expr__14089 = k__4773__auto__;
if(cljs.core.truth_(pred__14088.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__14089))){
return (new jamesmacaulay.zelkova.impl.signal.Cached(G__14084,self__.__meta,self__.__extmap,null));
} else {
return (new jamesmacaulay.zelkova.impl.signal.Cached(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4773__auto__,G__14084),null));
}
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4777__auto__){
var self__ = this;
var this__4777__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4764__auto__,G__14084){
var self__ = this;
var this__4764__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.Cached(self__.value,G__14084,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4770__auto__,entry__4771__auto__){
var self__ = this;
var this__4770__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4771__auto__)){
return cljs.core._assoc.call(null,this__4770__auto____$1,cljs.core._nth.call(null,entry__4771__auto__,(0)),cljs.core._nth.call(null,entry__4771__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4770__auto____$1,entry__4771__auto__);
}
});

jamesmacaulay.zelkova.impl.signal.Cached.cljs$lang$type = true;

jamesmacaulay.zelkova.impl.signal.Cached.cljs$lang$ctorPrSeq = (function (this__4799__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jamesmacaulay.zelkova.impl.signal/Cached");
});

jamesmacaulay.zelkova.impl.signal.Cached.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"jamesmacaulay.zelkova.impl.signal/Cached");
});

jamesmacaulay.zelkova.impl.signal.__GT_Cached = (function jamesmacaulay$zelkova$impl$signal$__GT_Cached(value){
return (new jamesmacaulay.zelkova.impl.signal.Cached(value,null,null,null));
});

jamesmacaulay.zelkova.impl.signal.map__GT_Cached = (function jamesmacaulay$zelkova$impl$signal$map__GT_Cached(G__14086){
return (new jamesmacaulay.zelkova.impl.signal.Cached(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__14086),null,cljs.core.dissoc.call(null,G__14086,new cljs.core.Keyword(null,"value","value",305978217)),null));
});

jamesmacaulay.zelkova.impl.signal.fresh = (function jamesmacaulay$zelkova$impl$signal$fresh(value){
return jamesmacaulay.zelkova.impl.signal.__GT_Fresh.call(null,value);
});
jamesmacaulay.zelkova.impl.signal.cached = (function jamesmacaulay$zelkova$impl$signal$cached(value){
return jamesmacaulay.zelkova.impl.signal.__GT_Cached.call(null,value);
});
/**
 * A transducer which takes in batches of signal graph messages and pipes out fresh values.
 */
jamesmacaulay.zelkova.impl.signal.fresh_values = cljs.core.comp.call(null,cljs.core.cat,cljs.core.filter.call(null,jamesmacaulay.zelkova.impl.signal.fresh_QMARK_),cljs.core.map.call(null,jamesmacaulay.zelkova.impl.signal.value));

jamesmacaulay.zelkova.impl.signal.SignalProtocol = (function (){var obj14093 = {};
return obj14093;
})();

jamesmacaulay.zelkova.impl.signal.input_QMARK_ = (function jamesmacaulay$zelkova$impl$signal$input_QMARK_(s){
if((function (){var and__4158__auto__ = s;
if(and__4158__auto__){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$input_QMARK_$arity$1;
} else {
return and__4158__auto__;
}
})()){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$input_QMARK_$arity$1(s);
} else {
var x__4806__auto__ = (((s == null))?null:s);
return (function (){var or__4170__auto__ = (jamesmacaulay.zelkova.impl.signal.input_QMARK_[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (jamesmacaulay.zelkova.impl.signal.input_QMARK_["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"SignalProtocol.input?",s);
}
}
})().call(null,s);
}
});

/**
 * returns the set of "parent" signals on which this signal depends
 */
jamesmacaulay.zelkova.impl.signal.signal_deps = (function jamesmacaulay$zelkova$impl$signal$signal_deps(s){
if((function (){var and__4158__auto__ = s;
if(and__4158__auto__){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$signal_deps$arity$1;
} else {
return and__4158__auto__;
}
})()){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$signal_deps$arity$1(s);
} else {
var x__4806__auto__ = (((s == null))?null:s);
return (function (){var or__4170__auto__ = (jamesmacaulay.zelkova.impl.signal.signal_deps[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (jamesmacaulay.zelkova.impl.signal.signal_deps["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"SignalProtocol.signal-deps",s);
}
}
})().call(null,s);
}
});

jamesmacaulay.zelkova.impl.signal.parents_map = (function jamesmacaulay$zelkova$impl$signal$parents_map(s){
if((function (){var and__4158__auto__ = s;
if(and__4158__auto__){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$parents_map$arity$1;
} else {
return and__4158__auto__;
}
})()){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$parents_map$arity$1(s);
} else {
var x__4806__auto__ = (((s == null))?null:s);
return (function (){var or__4170__auto__ = (jamesmacaulay.zelkova.impl.signal.parents_map[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (jamesmacaulay.zelkova.impl.signal.parents_map["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"SignalProtocol.parents-map",s);
}
}
})().call(null,s);
}
});

jamesmacaulay.zelkova.impl.signal.kids_map = (function jamesmacaulay$zelkova$impl$signal$kids_map(s){
if((function (){var and__4158__auto__ = s;
if(and__4158__auto__){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$kids_map$arity$1;
} else {
return and__4158__auto__;
}
})()){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$kids_map$arity$1(s);
} else {
var x__4806__auto__ = (((s == null))?null:s);
return (function (){var or__4170__auto__ = (jamesmacaulay.zelkova.impl.signal.kids_map[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (jamesmacaulay.zelkova.impl.signal.kids_map["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"SignalProtocol.kids-map",s);
}
}
})().call(null,s);
}
});

jamesmacaulay.zelkova.impl.signal.topsort = (function jamesmacaulay$zelkova$impl$signal$topsort(s){
if((function (){var and__4158__auto__ = s;
if(and__4158__auto__){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$topsort$arity$1;
} else {
return and__4158__auto__;
}
})()){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$topsort$arity$1(s);
} else {
var x__4806__auto__ = (((s == null))?null:s);
return (function (){var or__4170__auto__ = (jamesmacaulay.zelkova.impl.signal.topsort[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (jamesmacaulay.zelkova.impl.signal.topsort["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"SignalProtocol.topsort",s);
}
}
})().call(null,s);
}
});

jamesmacaulay.zelkova.impl.signal.inputs_by_topic = (function jamesmacaulay$zelkova$impl$signal$inputs_by_topic(s){
if((function (){var and__4158__auto__ = s;
if(and__4158__auto__){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$inputs_by_topic$arity$1;
} else {
return and__4158__auto__;
}
})()){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$inputs_by_topic$arity$1(s);
} else {
var x__4806__auto__ = (((s == null))?null:s);
return (function (){var or__4170__auto__ = (jamesmacaulay.zelkova.impl.signal.inputs_by_topic[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (jamesmacaulay.zelkova.impl.signal.inputs_by_topic["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"SignalProtocol.inputs-by-topic",s);
}
}
})().call(null,s);
}
});

jamesmacaulay.zelkova.impl.signal.kid_indexes_map = (function jamesmacaulay$zelkova$impl$signal$kid_indexes_map(s){
if((function (){var and__4158__auto__ = s;
if(and__4158__auto__){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$kid_indexes_map$arity$1;
} else {
return and__4158__auto__;
}
})()){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$kid_indexes_map$arity$1(s);
} else {
var x__4806__auto__ = (((s == null))?null:s);
return (function (){var or__4170__auto__ = (jamesmacaulay.zelkova.impl.signal.kid_indexes_map[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (jamesmacaulay.zelkova.impl.signal.kid_indexes_map["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"SignalProtocol.kid-indexes-map",s);
}
}
})().call(null,s);
}
});

/**
 * returns `true` if the argument satisfies `SignalProtocol`, `false` otherwise
 */
jamesmacaulay.zelkova.impl.signal.signal_QMARK_ = (function jamesmacaulay$zelkova$impl$signal$signal_QMARK_(x){
var G__14095 = x;
if(G__14095){
var bit__4844__auto__ = null;
if(cljs.core.truth_((function (){var or__4170__auto__ = bit__4844__auto__;
if(cljs.core.truth_(or__4170__auto__)){
return or__4170__auto__;
} else {
return G__14095.jamesmacaulay$zelkova$impl$signal$SignalProtocol$;
}
})())){
return true;
} else {
if((!G__14095.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,jamesmacaulay.zelkova.impl.signal.SignalProtocol,G__14095);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,jamesmacaulay.zelkova.impl.signal.SignalProtocol,G__14095);
}
});
/**
 * Takes a signal and returns a zipper which can be used to traverse the signal graph.
 */
jamesmacaulay.zelkova.impl.signal.node_graph_zipper = (function jamesmacaulay$zelkova$impl$signal$node_graph_zipper(output_node){
return clojure.zip.zipper.call(null,cljs.core.constantly.call(null,true),cljs.core.comp.call(null,cljs.core.seq,jamesmacaulay.zelkova.impl.signal.signal_deps),null,output_node);
});
/**
 * Returns a new zipper location that skips the whole subtree at `loc`.
 */
jamesmacaulay.zelkova.impl.signal.skip_subtree = (function jamesmacaulay$zelkova$impl$signal$skip_subtree(loc){
var or__4170__auto__ = clojure.zip.right.call(null,loc);
if(cljs.core.truth_(or__4170__auto__)){
return or__4170__auto__;
} else {
var p = loc;
while(true){
if(cljs.core.truth_(clojure.zip.up.call(null,p))){
var or__4170__auto____$1 = clojure.zip.right.call(null,clojure.zip.up.call(null,p));
if(cljs.core.truth_(or__4170__auto____$1)){
return or__4170__auto____$1;
} else {
var G__14096 = clojure.zip.up.call(null,p);
p = G__14096;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node.call(null,p),new cljs.core.Keyword(null,"end","end",-268185958)], null);
}
break;
}
}
});
/**
 * Takes a signal and returns a map of two maps:
 * :parents-map is a map of signals to their parents,
 * :kids-map is a map of signals to their children.
 */
jamesmacaulay.zelkova.impl.signal.calculate_dependency_maps = (function jamesmacaulay$zelkova$impl$signal$calculate_dependency_maps(signal){
var parents_map = cljs.core.PersistentArrayMap.EMPTY;
var kids_map = new cljs.core.PersistentArrayMap.fromArray([signal,cljs.core.PersistentHashSet.EMPTY], true, false);
var loc = jamesmacaulay.zelkova.impl.signal.node_graph_zipper.call(null,signal);
while(true){
if(cljs.core.truth_(clojure.zip.end_QMARK_.call(null,loc))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parents-map","parents-map",-1048684902),parents_map,new cljs.core.Keyword(null,"kids-map","kids-map",643095940),kids_map], null);
} else {
if(cljs.core.contains_QMARK_.call(null,parents_map,clojure.zip.node.call(null,loc))){
var G__14097 = parents_map;
var G__14098 = kids_map;
var G__14099 = jamesmacaulay.zelkova.impl.signal.skip_subtree.call(null,loc);
parents_map = G__14097;
kids_map = G__14098;
loc = G__14099;
continue;
} else {
var this_sig = clojure.zip.node.call(null,loc);
var parents = jamesmacaulay.zelkova.impl.signal.signal_deps.call(null,this_sig);
var next_sig = clojure.zip.next.call(null,loc);
var G__14100 = cljs.core.assoc.call(null,parents_map,this_sig,parents);
var G__14101 = cljs.core.merge_with.call(null,clojure.set.union,kids_map,cljs.core.zipmap.call(null,parents,cljs.core.repeat.call(null,cljs.core.PersistentHashSet.fromArray([this_sig], true))));
var G__14102 = next_sig;
parents_map = G__14100;
kids_map = G__14101;
loc = G__14102;
continue;

}
}
break;
}
});
jamesmacaulay.zelkova.impl.signal.parents_map__GT_topsort = (function jamesmacaulay$zelkova$impl$signal$parents_map__GT_topsort(pm){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reverse.call(null,alandipert.kahn.kahn_sort.call(null,pm)));
});
jamesmacaulay.zelkova.impl.signal.topsort__GT_topic_map = (function jamesmacaulay$zelkova$impl$signal$topsort__GT_topic_map(sorted_sigs){
return cljs.core.reduce.call(null,(function (m,sig){
var temp__4420__auto__ = new cljs.core.Keyword(null,"relayed-event-topic","relayed-event-topic",323853461).cljs$core$IFn$_invoke$arity$1(sig);
if(cljs.core.truth_(temp__4420__auto__)){
var topic = temp__4420__auto__;
return cljs.core.assoc.call(null,m,topic,cljs.core.conj.call(null,cljs.core.get.call(null,m,topic,cljs.core.PersistentVector.EMPTY),sig));
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,sorted_sigs);
});
jamesmacaulay.zelkova.impl.signal.build_kid_indexes_map = (function jamesmacaulay$zelkova$impl$signal$build_kid_indexes_map(kids_map,sorted_sigs){
var signal__GT_index = cljs.core.zipmap.call(null,sorted_sigs,cljs.core.range.call(null));
var signals__GT_sorted_index_set = ((function (signal__GT_index){
return (function (p1__14103_SHARP_){
return cljs.core.into.call(null,cljs.core.sorted_set.call(null),cljs.core.map.call(null,signal__GT_index),p1__14103_SHARP_);
});})(signal__GT_index))
;
return cljs.core.zipmap.call(null,cljs.core.keys.call(null,kids_map),cljs.core.map.call(null,signals__GT_sorted_index_set,cljs.core.vals.call(null,kids_map)));
});

/**
* @constructor
* @param {*} parents_map
* @param {*} kids_map
* @param {*} topsort
* @param {*} kid_indexes_map
* @param {*} inputs_by_topic
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata = (function (parents_map,kids_map,topsort,kid_indexes_map,inputs_by_topic,__meta,__extmap,__hash){
this.parents_map = parents_map;
this.kids_map = kids_map;
this.topsort = topsort;
this.kid_indexes_map = kid_indexes_map;
this.inputs_by_topic = inputs_by_topic;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4765__auto__,k__4766__auto__){
var self__ = this;
var this__4765__auto____$1 = this;
return cljs.core._lookup.call(null,this__4765__auto____$1,k__4766__auto__,null);
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4767__auto__,k14105,else__4768__auto__){
var self__ = this;
var this__4767__auto____$1 = this;
var G__14107 = (((k14105 instanceof cljs.core.Keyword))?k14105.fqn:null);
switch (G__14107) {
case "parents-map":
return self__.parents_map;

break;
case "kids-map":
return self__.kids_map;

break;
case "topsort":
return self__.topsort;

break;
case "kid-indexes-map":
return self__.kid_indexes_map;

break;
case "inputs-by-topic":
return self__.inputs_by_topic;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14105,else__4768__auto__);

}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4779__auto__,writer__4780__auto__,opts__4781__auto__){
var self__ = this;
var this__4779__auto____$1 = this;
var pr_pair__4782__auto__ = ((function (this__4779__auto____$1){
return (function (keyval__4783__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4780__auto__,cljs.core.pr_writer,""," ","",opts__4781__auto__,keyval__4783__auto__);
});})(this__4779__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4780__auto__,pr_pair__4782__auto__,"#jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata{",", ","}",opts__4781__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parents-map","parents-map",-1048684902),self__.parents_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kids-map","kids-map",643095940),self__.kids_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"topsort","topsort",-718814409),self__.topsort],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kid-indexes-map","kid-indexes-map",-1120910006),self__.kid_indexes_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"inputs-by-topic","inputs-by-topic",1973950168),self__.inputs_by_topic],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4763__auto__){
var self__ = this;
var this__4763__auto____$1 = this;
return self__.__meta;
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4759__auto__){
var self__ = this;
var this__4759__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(self__.parents_map,self__.kids_map,self__.topsort,self__.kid_indexes_map,self__.inputs_by_topic,self__.__meta,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4769__auto__){
var self__ = this;
var this__4769__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4760__auto__){
var self__ = this;
var this__4760__auto____$1 = this;
var h__4586__auto__ = self__.__hash;
if(!((h__4586__auto__ == null))){
return h__4586__auto__;
} else {
var h__4586__auto____$1 = cljs.core.hash_imap.call(null,this__4760__auto____$1);
self__.__hash = h__4586__auto____$1;

return h__4586__auto____$1;
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4761__auto__,other__4762__auto__){
var self__ = this;
var this__4761__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4158__auto__ = other__4762__auto__;
if(cljs.core.truth_(and__4158__auto__)){
var and__4158__auto____$1 = (this__4761__auto____$1.constructor === other__4762__auto__.constructor);
if(and__4158__auto____$1){
return cljs.core.equiv_map.call(null,this__4761__auto____$1,other__4762__auto__);
} else {
return and__4158__auto____$1;
}
} else {
return and__4158__auto__;
}
})())){
return true;
} else {
return false;
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4774__auto__,k__4775__auto__){
var self__ = this;
var this__4774__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kids-map","kids-map",643095940),null,new cljs.core.Keyword(null,"kid-indexes-map","kid-indexes-map",-1120910006),null,new cljs.core.Keyword(null,"topsort","topsort",-718814409),null,new cljs.core.Keyword(null,"inputs-by-topic","inputs-by-topic",1973950168),null,new cljs.core.Keyword(null,"parents-map","parents-map",-1048684902),null], null), null),k__4775__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4774__auto____$1),self__.__meta),k__4775__auto__);
} else {
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(self__.parents_map,self__.kids_map,self__.topsort,self__.kid_indexes_map,self__.inputs_by_topic,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4775__auto__)),null));
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4772__auto__,k__4773__auto__,G__14104){
var self__ = this;
var this__4772__auto____$1 = this;
var pred__14108 = cljs.core.keyword_identical_QMARK_;
var expr__14109 = k__4773__auto__;
if(cljs.core.truth_(pred__14108.call(null,new cljs.core.Keyword(null,"parents-map","parents-map",-1048684902),expr__14109))){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(G__14104,self__.kids_map,self__.topsort,self__.kid_indexes_map,self__.inputs_by_topic,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14108.call(null,new cljs.core.Keyword(null,"kids-map","kids-map",643095940),expr__14109))){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(self__.parents_map,G__14104,self__.topsort,self__.kid_indexes_map,self__.inputs_by_topic,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14108.call(null,new cljs.core.Keyword(null,"topsort","topsort",-718814409),expr__14109))){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(self__.parents_map,self__.kids_map,G__14104,self__.kid_indexes_map,self__.inputs_by_topic,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14108.call(null,new cljs.core.Keyword(null,"kid-indexes-map","kid-indexes-map",-1120910006),expr__14109))){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(self__.parents_map,self__.kids_map,self__.topsort,G__14104,self__.inputs_by_topic,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14108.call(null,new cljs.core.Keyword(null,"inputs-by-topic","inputs-by-topic",1973950168),expr__14109))){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(self__.parents_map,self__.kids_map,self__.topsort,self__.kid_indexes_map,G__14104,self__.__meta,self__.__extmap,null));
} else {
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(self__.parents_map,self__.kids_map,self__.topsort,self__.kid_indexes_map,self__.inputs_by_topic,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4773__auto__,G__14104),null));
}
}
}
}
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4777__auto__){
var self__ = this;
var this__4777__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parents-map","parents-map",-1048684902),self__.parents_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kids-map","kids-map",643095940),self__.kids_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"topsort","topsort",-718814409),self__.topsort],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kid-indexes-map","kid-indexes-map",-1120910006),self__.kid_indexes_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"inputs-by-topic","inputs-by-topic",1973950168),self__.inputs_by_topic],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4764__auto__,G__14104){
var self__ = this;
var this__4764__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(self__.parents_map,self__.kids_map,self__.topsort,self__.kid_indexes_map,self__.inputs_by_topic,G__14104,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4770__auto__,entry__4771__auto__){
var self__ = this;
var this__4770__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4771__auto__)){
return cljs.core._assoc.call(null,this__4770__auto____$1,cljs.core._nth.call(null,entry__4771__auto__,(0)),cljs.core._nth.call(null,entry__4771__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4770__auto____$1,entry__4771__auto__);
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.cljs$lang$type = true;

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.cljs$lang$ctorPrSeq = (function (this__4799__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jamesmacaulay.zelkova.impl.signal/SignalDefinitionMetadata");
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"jamesmacaulay.zelkova.impl.signal/SignalDefinitionMetadata");
});

jamesmacaulay.zelkova.impl.signal.__GT_SignalDefinitionMetadata = (function jamesmacaulay$zelkova$impl$signal$__GT_SignalDefinitionMetadata(parents_map,kids_map,topsort,kid_indexes_map,inputs_by_topic){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(parents_map,kids_map,topsort,kid_indexes_map,inputs_by_topic,null,null,null));
});

jamesmacaulay.zelkova.impl.signal.map__GT_SignalDefinitionMetadata = (function jamesmacaulay$zelkova$impl$signal$map__GT_SignalDefinitionMetadata(G__14106){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(new cljs.core.Keyword(null,"parents-map","parents-map",-1048684902).cljs$core$IFn$_invoke$arity$1(G__14106),new cljs.core.Keyword(null,"kids-map","kids-map",643095940).cljs$core$IFn$_invoke$arity$1(G__14106),new cljs.core.Keyword(null,"topsort","topsort",-718814409).cljs$core$IFn$_invoke$arity$1(G__14106),new cljs.core.Keyword(null,"kid-indexes-map","kid-indexes-map",-1120910006).cljs$core$IFn$_invoke$arity$1(G__14106),new cljs.core.Keyword(null,"inputs-by-topic","inputs-by-topic",1973950168).cljs$core$IFn$_invoke$arity$1(G__14106),null,cljs.core.dissoc.call(null,G__14106,new cljs.core.Keyword(null,"parents-map","parents-map",-1048684902),new cljs.core.Keyword(null,"kids-map","kids-map",643095940),new cljs.core.Keyword(null,"topsort","topsort",-718814409),new cljs.core.Keyword(null,"kid-indexes-map","kid-indexes-map",-1120910006),new cljs.core.Keyword(null,"inputs-by-topic","inputs-by-topic",1973950168)),null));
});

jamesmacaulay.zelkova.impl.signal.attach_delayed_metadata = (function jamesmacaulay$zelkova$impl$signal$attach_delayed_metadata(sig){
var delayed_dep_maps = (new cljs.core.Delay((function (){
return jamesmacaulay.zelkova.impl.signal.calculate_dependency_maps.call(null,sig);
}),null));
var delayed_parents_map = (new cljs.core.Delay(((function (delayed_dep_maps){
return (function (){
return new cljs.core.Keyword(null,"parents-map","parents-map",-1048684902).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,delayed_dep_maps));
});})(delayed_dep_maps))
,null));
var delayed_kids_map = (new cljs.core.Delay(((function (delayed_dep_maps,delayed_parents_map){
return (function (){
return new cljs.core.Keyword(null,"kids-map","kids-map",643095940).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,delayed_dep_maps));
});})(delayed_dep_maps,delayed_parents_map))
,null));
var delayed_topsort = (new cljs.core.Delay(((function (delayed_dep_maps,delayed_parents_map,delayed_kids_map){
return (function (){
return jamesmacaulay.zelkova.impl.signal.parents_map__GT_topsort.call(null,cljs.core.deref.call(null,delayed_parents_map));
});})(delayed_dep_maps,delayed_parents_map,delayed_kids_map))
,null));
var delayed_topic_map = (new cljs.core.Delay(((function (delayed_dep_maps,delayed_parents_map,delayed_kids_map,delayed_topsort){
return (function (){
return jamesmacaulay.zelkova.impl.signal.topsort__GT_topic_map.call(null,cljs.core.deref.call(null,delayed_topsort));
});})(delayed_dep_maps,delayed_parents_map,delayed_kids_map,delayed_topsort))
,null));
var delayed_kid_indexes_map = (new cljs.core.Delay(((function (delayed_dep_maps,delayed_parents_map,delayed_kids_map,delayed_topsort,delayed_topic_map){
return (function (){
return jamesmacaulay.zelkova.impl.signal.build_kid_indexes_map.call(null,cljs.core.deref.call(null,delayed_kids_map),cljs.core.deref.call(null,delayed_topsort));
});})(delayed_dep_maps,delayed_parents_map,delayed_kids_map,delayed_topsort,delayed_topic_map))
,null));
return cljs.core.with_meta.call(null,sig,jamesmacaulay.zelkova.impl.signal.__GT_SignalDefinitionMetadata.call(null,delayed_parents_map,delayed_kids_map,delayed_topsort,delayed_kid_indexes_map,delayed_topic_map));
});
jamesmacaulay.zelkova.impl.signal.delegate_to_channel = (function jamesmacaulay$zelkova$impl$signal$delegate_to_channel(){
var argseq__5210__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return jamesmacaulay.zelkova.impl.signal.delegate_to_channel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5210__auto__);
});

jamesmacaulay.zelkova.impl.signal.delegate_to_channel.cljs$core$IFn$_invoke$arity$variadic = (function (f,ch,args){
if(!((ch == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("This signal is not a valid write-port, use the `jamesmacaulay.zelkova.signal/write-port` constructor if you want to treat this signal like a channel."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)))))].join('')));
}

return cljs.core.apply.call(null,f,ch,args);
});

jamesmacaulay.zelkova.impl.signal.delegate_to_channel.cljs$lang$maxFixedArity = (2);

jamesmacaulay.zelkova.impl.signal.delegate_to_channel.cljs$lang$applyTo = (function (seq14112){
var G__14113 = cljs.core.first.call(null,seq14112);
var seq14112__$1 = cljs.core.next.call(null,seq14112);
var G__14114 = cljs.core.first.call(null,seq14112__$1);
var seq14112__$2 = cljs.core.next.call(null,seq14112__$1);
return jamesmacaulay.zelkova.impl.signal.delegate_to_channel.cljs$core$IFn$_invoke$arity$variadic(G__14113,G__14114,seq14112__$2);
});

/**
* @constructor
* @param {*} init_fn
* @param {*} sources
* @param {*} relayed_event_topic
* @param {*} msg_xform
* @param {*} deps
* @param {*} event_sources
* @param {*} write_port_channel
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
jamesmacaulay.zelkova.impl.signal.SignalDefinition = (function (init_fn,sources,relayed_event_topic,msg_xform,deps,event_sources,write_port_channel,__meta,__extmap,__hash){
this.init_fn = init_fn;
this.sources = sources;
this.relayed_event_topic = relayed_event_topic;
this.msg_xform = msg_xform;
this.deps = deps;
this.event_sources = event_sources;
this.write_port_channel = write_port_channel;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4765__auto__,k__4766__auto__){
var self__ = this;
var this__4765__auto____$1 = this;
return cljs.core._lookup.call(null,this__4765__auto____$1,k__4766__auto__,null);
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4767__auto__,k14116,else__4768__auto__){
var self__ = this;
var this__4767__auto____$1 = this;
var G__14118 = (((k14116 instanceof cljs.core.Keyword))?k14116.fqn:null);
switch (G__14118) {
case "init-fn":
return self__.init_fn;

break;
case "sources":
return self__.sources;

break;
case "relayed-event-topic":
return self__.relayed_event_topic;

break;
case "msg-xform":
return self__.msg_xform;

break;
case "deps":
return self__.deps;

break;
case "event-sources":
return self__.event_sources;

break;
case "write-port-channel":
return self__.write_port_channel;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14116,else__4768__auto__);

}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$async$impl$protocols$Channel$ = true;

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return jamesmacaulay.zelkova.impl.signal.delegate_to_channel.call(null,cljs.core.async.impl.protocols.close_BANG_,self__.write_port_channel);
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return jamesmacaulay.zelkova.impl.signal.delegate_to_channel.call(null,cljs.core.async.impl.protocols.closed_QMARK_,self__.write_port_channel);
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4779__auto__,writer__4780__auto__,opts__4781__auto__){
var self__ = this;
var this__4779__auto____$1 = this;
var pr_pair__4782__auto__ = ((function (this__4779__auto____$1){
return (function (keyval__4783__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4780__auto__,cljs.core.pr_writer,""," ","",opts__4781__auto__,keyval__4783__auto__);
});})(this__4779__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4780__auto__,pr_pair__4782__auto__,"#jamesmacaulay.zelkova.impl.signal.SignalDefinition{",", ","}",opts__4781__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-fn","init-fn",777257971),self__.init_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relayed-event-topic","relayed-event-topic",323853461),self__.relayed_event_topic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485),self__.msg_xform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"deps","deps",1883360319),self__.deps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-sources","event-sources",708931713),self__.event_sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"write-port-channel","write-port-channel",-776952302),self__.write_port_channel],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4763__auto__){
var self__ = this;
var this__4763__auto____$1 = this;
return self__.__meta;
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4759__auto__){
var self__ = this;
var this__4759__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,self__.relayed_event_topic,self__.msg_xform,self__.deps,self__.event_sources,self__.write_port_channel,self__.__meta,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4769__auto__){
var self__ = this;
var this__4769__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4760__auto__){
var self__ = this;
var this__4760__auto____$1 = this;
var h__4586__auto__ = self__.__hash;
if(!((h__4586__auto__ == null))){
return h__4586__auto__;
} else {
var h__4586__auto____$1 = cljs.core.hash_imap.call(null,this__4760__auto____$1);
self__.__hash = h__4586__auto____$1;

return h__4586__auto____$1;
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4761__auto__,other__4762__auto__){
var self__ = this;
var this__4761__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4158__auto__ = other__4762__auto__;
if(cljs.core.truth_(and__4158__auto__)){
var and__4158__auto____$1 = (this__4761__auto____$1.constructor === other__4762__auto__.constructor);
if(and__4158__auto____$1){
return cljs.core.equiv_map.call(null,this__4761__auto____$1,other__4762__auto__);
} else {
return and__4158__auto____$1;
}
} else {
return and__4158__auto__;
}
})())){
return true;
} else {
return false;
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalProtocol$ = true;

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalProtocol$input_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"events","events",1792552201),null], null), null),self__.sources);
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalProtocol$signal_deps$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,jamesmacaulay.zelkova.impl.signal.signal_QMARK_),(function (){var or__4170__auto__ = self__.deps;
if(cljs.core.truth_(or__4170__auto__)){
return or__4170__auto__;
} else {
return self__.sources;
}
})());
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalProtocol$parents_map$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"parents-map","parents-map",-1048684902).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,s__$1)));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalProtocol$kids_map$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"kids-map","kids-map",643095940).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,s__$1)));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalProtocol$topsort$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"topsort","topsort",-718814409).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,s__$1)));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalProtocol$inputs_by_topic$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"inputs-by-topic","inputs-by-topic",1973950168).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,s__$1)));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalProtocol$kid_indexes_map$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"kid-indexes-map","kid-indexes-map",-1120910006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,s__$1)));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1_handler){
var self__ = this;
var ___$1 = this;
return jamesmacaulay.zelkova.impl.signal.delegate_to_channel.call(null,cljs.core.async.impl.protocols.put_BANG_,self__.write_port_channel,val,fn1_handler);
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4774__auto__,k__4775__auto__){
var self__ = this;
var this__4774__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"event-sources","event-sources",708931713),null,new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"write-port-channel","write-port-channel",-776952302),null,new cljs.core.Keyword(null,"init-fn","init-fn",777257971),null,new cljs.core.Keyword(null,"relayed-event-topic","relayed-event-topic",323853461),null,new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485),null,new cljs.core.Keyword(null,"deps","deps",1883360319),null], null), null),k__4775__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4774__auto____$1),self__.__meta),k__4775__auto__);
} else {
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,self__.relayed_event_topic,self__.msg_xform,self__.deps,self__.event_sources,self__.write_port_channel,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4775__auto__)),null));
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4772__auto__,k__4773__auto__,G__14115){
var self__ = this;
var this__4772__auto____$1 = this;
var pred__14119 = cljs.core.keyword_identical_QMARK_;
var expr__14120 = k__4773__auto__;
if(cljs.core.truth_(pred__14119.call(null,new cljs.core.Keyword(null,"init-fn","init-fn",777257971),expr__14120))){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(G__14115,self__.sources,self__.relayed_event_topic,self__.msg_xform,self__.deps,self__.event_sources,self__.write_port_channel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14119.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424),expr__14120))){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,G__14115,self__.relayed_event_topic,self__.msg_xform,self__.deps,self__.event_sources,self__.write_port_channel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14119.call(null,new cljs.core.Keyword(null,"relayed-event-topic","relayed-event-topic",323853461),expr__14120))){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,G__14115,self__.msg_xform,self__.deps,self__.event_sources,self__.write_port_channel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14119.call(null,new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485),expr__14120))){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,self__.relayed_event_topic,G__14115,self__.deps,self__.event_sources,self__.write_port_channel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14119.call(null,new cljs.core.Keyword(null,"deps","deps",1883360319),expr__14120))){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,self__.relayed_event_topic,self__.msg_xform,G__14115,self__.event_sources,self__.write_port_channel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14119.call(null,new cljs.core.Keyword(null,"event-sources","event-sources",708931713),expr__14120))){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,self__.relayed_event_topic,self__.msg_xform,self__.deps,G__14115,self__.write_port_channel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14119.call(null,new cljs.core.Keyword(null,"write-port-channel","write-port-channel",-776952302),expr__14120))){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,self__.relayed_event_topic,self__.msg_xform,self__.deps,self__.event_sources,G__14115,self__.__meta,self__.__extmap,null));
} else {
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,self__.relayed_event_topic,self__.msg_xform,self__.deps,self__.event_sources,self__.write_port_channel,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4773__auto__,G__14115),null));
}
}
}
}
}
}
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4777__auto__){
var self__ = this;
var this__4777__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-fn","init-fn",777257971),self__.init_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relayed-event-topic","relayed-event-topic",323853461),self__.relayed_event_topic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485),self__.msg_xform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"deps","deps",1883360319),self__.deps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-sources","event-sources",708931713),self__.event_sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"write-port-channel","write-port-channel",-776952302),self__.write_port_channel],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4764__auto__,G__14115){
var self__ = this;
var this__4764__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,self__.relayed_event_topic,self__.msg_xform,self__.deps,self__.event_sources,self__.write_port_channel,G__14115,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4770__auto__,entry__4771__auto__){
var self__ = this;
var this__4770__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4771__auto__)){
return cljs.core._assoc.call(null,this__4770__auto____$1,cljs.core._nth.call(null,entry__4771__auto__,(0)),cljs.core._nth.call(null,entry__4771__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4770__auto____$1,entry__4771__auto__);
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.cljs$lang$type = true;

jamesmacaulay.zelkova.impl.signal.SignalDefinition.cljs$lang$ctorPrSeq = (function (this__4799__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jamesmacaulay.zelkova.impl.signal/SignalDefinition");
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"jamesmacaulay.zelkova.impl.signal/SignalDefinition");
});

jamesmacaulay.zelkova.impl.signal.__GT_SignalDefinition = (function jamesmacaulay$zelkova$impl$signal$__GT_SignalDefinition(init_fn,sources,relayed_event_topic,msg_xform,deps,event_sources,write_port_channel){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(init_fn,sources,relayed_event_topic,msg_xform,deps,event_sources,write_port_channel,null,null,null));
});

jamesmacaulay.zelkova.impl.signal.map__GT_SignalDefinition = (function jamesmacaulay$zelkova$impl$signal$map__GT_SignalDefinition(G__14117){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(new cljs.core.Keyword(null,"init-fn","init-fn",777257971).cljs$core$IFn$_invoke$arity$1(G__14117),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__14117),new cljs.core.Keyword(null,"relayed-event-topic","relayed-event-topic",323853461).cljs$core$IFn$_invoke$arity$1(G__14117),new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485).cljs$core$IFn$_invoke$arity$1(G__14117),new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(G__14117),new cljs.core.Keyword(null,"event-sources","event-sources",708931713).cljs$core$IFn$_invoke$arity$1(G__14117),new cljs.core.Keyword(null,"write-port-channel","write-port-channel",-776952302).cljs$core$IFn$_invoke$arity$1(G__14117),null,cljs.core.dissoc.call(null,G__14117,new cljs.core.Keyword(null,"init-fn","init-fn",777257971),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"relayed-event-topic","relayed-event-topic",323853461),new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485),new cljs.core.Keyword(null,"deps","deps",1883360319),new cljs.core.Keyword(null,"event-sources","event-sources",708931713),new cljs.core.Keyword(null,"write-port-channel","write-port-channel",-776952302)),null));
});

/**
 * Takes a topic, and returns an input signal which relays matching events as messages to its children
 */
jamesmacaulay.zelkova.impl.signal.setup_event_relay = (function jamesmacaulay$zelkova$impl$signal$setup_event_relay(opts){
var temp__4420__auto__ = new cljs.core.Keyword(null,"relayed-event-topic","relayed-event-topic",323853461).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4420__auto__)){
var relayed_topic = temp__4420__auto__;
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201)], null),new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485),cljs.core.comp.call(null,cljs.core.map.call(null,((function (relayed_topic,temp__4420__auto__){
return (function (p__14125){
var vec__14126 = p__14125;
var event = cljs.core.nth.call(null,vec__14126,(0),null);
var _prev = cljs.core.nth.call(null,vec__14126,(1),null);
var _msgs = cljs.core.nth.call(null,vec__14126,(2),null);
if(cljs.core._EQ_.call(null,relayed_topic,jamesmacaulay.zelkova.impl.signal.topic.call(null,event))){
return jamesmacaulay.zelkova.impl.signal.fresh.call(null,jamesmacaulay.zelkova.impl.signal.value.call(null,event));
} else {
return null;
}
});})(relayed_topic,temp__4420__auto__))
),cljs.core.remove.call(null,cljs.core.nil_QMARK_)));
} else {
return opts;
}
});
/**
 * Takes a map of opts and returns a signal.
 */
jamesmacaulay.zelkova.impl.signal.make_signal = (function jamesmacaulay$zelkova$impl$signal$make_signal(opts){
return jamesmacaulay.zelkova.impl.signal.attach_delayed_metadata.call(null,jamesmacaulay.zelkova.impl.signal.map__GT_SignalDefinition.call(null,jamesmacaulay.zelkova.impl.signal.setup_event_relay.call(null,opts)));
});
/**
 * Wraps `x` in a vector, if necessary, returning an empty vector if `x` is `nil`.
 */
jamesmacaulay.zelkova.impl.signal.ensure_sequential = (function jamesmacaulay$zelkova$impl$signal$ensure_sequential(x){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
if((x == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
/**
 * Takes a collection of message batches, presumably from some corresponding collection
 * of signals. Pads each batch, when necessary, with cached versions of the last message
 * in the batch, such that the returned batches are all the same size.
 */
jamesmacaulay.zelkova.impl.signal.pad = (function jamesmacaulay$zelkova$impl$signal$pad(msg_batches){
if(((1) >= cljs.core.count.call(null,msg_batches))){
return msg_batches;
} else {
var max_count = cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,msg_batches));
var pad__$1 = ((function (max_count){
return (function (msgs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.cat,cljs.core.take.call(null,max_count)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msgs,cljs.core.repeat.call(null,jamesmacaulay.zelkova.impl.signal.cached.call(null,jamesmacaulay.zelkova.impl.signal.value.call(null,cljs.core.last.call(null,msgs))))], null));
});})(max_count))
;
return cljs.core.map.call(null,pad__$1,msg_batches);
}
});
/**
 * Takes a collection of message batches and returns a sequence of vectors of corresponding
 * messages from each batch.
 */
jamesmacaulay.zelkova.impl.signal.transpose = (function jamesmacaulay$zelkova$impl$signal$transpose(msg_batches){
return cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,msg_batches);
});
/**
 * Takes a signal's `msg-fn` and wraps it to provide various behaviours:
 * * return values are turned into sequences with `ensure-sequential`
 * * message batches from each signal are padded and transposed, and `msg-fn` is called
 * once for each vector of messages in the resulting series, as if each were the result
 * of a separate event.
 * * when `msg-fn` returns `nil` or an empty sequence, the previous value is returned as a
 * cached value.
 */
jamesmacaulay.zelkova.impl.signal.wrap_msg_xform = (function jamesmacaulay$zelkova$impl$signal$wrap_msg_xform(msg_xform){
var msg_fn = (function (args){
return cljs.core.sequence.call(null,msg_xform,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null));
});
return ((function (msg_fn){
return (function (prev,event_and_msg_batches){
var input_series = jamesmacaulay.zelkova.impl.signal.transpose.call(null,jamesmacaulay.zelkova.impl.signal.pad.call(null,event_and_msg_batches));
var output_series = cljs.core.reduce.call(null,((function (input_series,msg_fn){
return (function (acc,p__14129){
var vec__14130 = p__14129;
var event = cljs.core.nth.call(null,vec__14130,(0),null);
var msgs = cljs.core.nthnext.call(null,vec__14130,(1));
var prev__$1 = jamesmacaulay.zelkova.impl.signal.value.call(null,cljs.core.peek.call(null,acc));
var msgs__$1 = cljs.core.vec.call(null,msgs);
var new_msgs = msg_fn.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,prev__$1,msgs__$1], null));
return cljs.core.into.call(null,acc,new_msgs);
});})(input_series,msg_fn))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jamesmacaulay.zelkova.impl.signal.cached.call(null,prev)], null),input_series);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,output_series))){
return output_series;
} else {
return cljs.core.subvec.call(null,output_series,(1));
}
});
;})(msg_fn))
});
jamesmacaulay.zelkova.impl.signal.tap_signal = (function jamesmacaulay$zelkova$impl$signal$tap_signal(mult_map,source){
var mult = cljs.core.get.call(null,mult_map,source);
return cljs.core.async.tap.call(null,mult,cljs.core.async.chan.call(null));
});
jamesmacaulay.zelkova.impl.signal.tap_signals = (function jamesmacaulay$zelkova$impl$signal$tap_signals(mult_map,sources){
return cljs.core.async.map.call(null,cljs.core.vector,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jamesmacaulay.zelkova.impl.signal.tap_signal.call(null,mult_map,new cljs.core.Keyword(null,"events","events",1792552201))], null),cljs.core.map.call(null,cljs.core.partial.call(null,jamesmacaulay.zelkova.impl.signal.tap_signal,mult_map)),sources));
});
jamesmacaulay.zelkova.impl.signal.spawn_message_loop_BANG_ = (function jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG_(init,msg_xform,c_in,c_out){
var wrapped_msg_fn = jamesmacaulay.zelkova.impl.signal.wrap_msg_xform.call(null,msg_xform);
var c__6533__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto__,wrapped_msg_fn){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto__,wrapped_msg_fn){
return (function (state_14188){
var state_val_14189 = (state_14188[(1)]);
if((state_val_14189 === (1))){
var inst_14169 = init;
var state_14188__$1 = (function (){var statearr_14190 = state_14188;
(statearr_14190[(7)] = inst_14169);

return statearr_14190;
})();
var statearr_14191_14207 = state_14188__$1;
(statearr_14191_14207[(2)] = null);

(statearr_14191_14207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (2))){
var state_14188__$1 = state_14188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14188__$1,(4),c_in);
} else {
if((state_val_14189 === (3))){
var inst_14186 = (state_14188[(2)]);
var state_14188__$1 = state_14188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14188__$1,inst_14186);
} else {
if((state_val_14189 === (4))){
var inst_14172 = (state_14188[(8)]);
var inst_14172__$1 = (state_14188[(2)]);
var inst_14173 = (inst_14172__$1 == null);
var state_14188__$1 = (function (){var statearr_14192 = state_14188;
(statearr_14192[(8)] = inst_14172__$1);

return statearr_14192;
})();
if(cljs.core.truth_(inst_14173)){
var statearr_14193_14208 = state_14188__$1;
(statearr_14193_14208[(1)] = (5));

} else {
var statearr_14194_14209 = state_14188__$1;
(statearr_14194_14209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (5))){
var inst_14175 = cljs.core.async.close_BANG_.call(null,c_out);
var state_14188__$1 = state_14188;
var statearr_14195_14210 = state_14188__$1;
(statearr_14195_14210[(2)] = inst_14175);

(statearr_14195_14210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (6))){
var inst_14172 = (state_14188[(8)]);
var inst_14169 = (state_14188[(7)]);
var inst_14177 = (state_14188[(9)]);
var inst_14177__$1 = wrapped_msg_fn.call(null,inst_14169,inst_14172);
var state_14188__$1 = (function (){var statearr_14196 = state_14188;
(statearr_14196[(9)] = inst_14177__$1);

return statearr_14196;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14188__$1,(8),c_out,inst_14177__$1);
} else {
if((state_val_14189 === (7))){
var inst_14184 = (state_14188[(2)]);
var state_14188__$1 = state_14188;
var statearr_14197_14211 = state_14188__$1;
(statearr_14197_14211[(2)] = inst_14184);

(statearr_14197_14211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (8))){
var inst_14177 = (state_14188[(9)]);
var inst_14179 = (state_14188[(2)]);
var inst_14180 = cljs.core.last.call(null,inst_14177);
var inst_14181 = jamesmacaulay.zelkova.impl.signal.value.call(null,inst_14180);
var inst_14169 = inst_14181;
var state_14188__$1 = (function (){var statearr_14198 = state_14188;
(statearr_14198[(7)] = inst_14169);

(statearr_14198[(10)] = inst_14179);

return statearr_14198;
})();
var statearr_14199_14212 = state_14188__$1;
(statearr_14199_14212[(2)] = null);

(statearr_14199_14212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__6533__auto__,wrapped_msg_fn))
;
return ((function (switch__6471__auto__,c__6533__auto__,wrapped_msg_fn){
return (function() {
var jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__6472__auto__ = null;
var jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__6472__auto____0 = (function (){
var statearr_14203 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14203[(0)] = jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__6472__auto__);

(statearr_14203[(1)] = (1));

return statearr_14203;
});
var jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__6472__auto____1 = (function (state_14188){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_14188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e14204){if((e14204 instanceof Object)){
var ex__6475__auto__ = e14204;
var statearr_14205_14213 = state_14188;
(statearr_14205_14213[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14214 = state_14188;
state_14188 = G__14214;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__6472__auto__ = function(state_14188){
switch(arguments.length){
case 0:
return jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__6472__auto____0.call(this);
case 1:
return jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__6472__auto____1.call(this,state_14188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__6472__auto____0;
jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__6472__auto____1;
return jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto__,wrapped_msg_fn))
})();
var state__6535__auto__ = (function (){var statearr_14206 = f__6534__auto__.call(null);
(statearr_14206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto__);

return statearr_14206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto__,wrapped_msg_fn))
);

return c__6533__auto__;
});
jamesmacaulay.zelkova.impl.signal.build_message_mult = (function jamesmacaulay$zelkova$impl$signal$build_message_mult(mult_map,p__14215,live_graph,opts){
var map__14217 = p__14215;
var map__14217__$1 = ((cljs.core.seq_QMARK_.call(null,map__14217))?cljs.core.apply.call(null,cljs.core.hash_map,map__14217):map__14217);
var init_fn = cljs.core.get.call(null,map__14217__$1,new cljs.core.Keyword(null,"init-fn","init-fn",777257971));
var sources = cljs.core.get.call(null,map__14217__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var msg_xform = cljs.core.get.call(null,map__14217__$1,new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485));
var c_in = jamesmacaulay.zelkova.impl.signal.tap_signals.call(null,mult_map,sources);
var c_out = cljs.core.async.chan.call(null);
jamesmacaulay.zelkova.impl.signal.spawn_message_loop_BANG_.call(null,init_fn.call(null,live_graph,opts),msg_xform,c_in,c_out);

return cljs.core.async.mult.call(null,c_out);
});
jamesmacaulay.zelkova.impl.signal.build_message_mult_map = (function jamesmacaulay$zelkova$impl$signal$build_message_mult_map(sorted_signals,events_mult,live_graph,opts){
return cljs.core.reduce.call(null,(function (mult_map,signal){
return cljs.core.assoc.call(null,mult_map,signal,jamesmacaulay.zelkova.impl.signal.build_message_mult.call(null,mult_map,signal,live_graph,opts));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"events","events",1792552201),events_mult], null),sorted_signals);
});
jamesmacaulay.zelkova.impl.signal.gather_event_sources = (function jamesmacaulay$zelkova$impl$signal$gather_event_sources(sorted_signals){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"event-sources","event-sources",708931713)),sorted_signals);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraphProtocol = (function (){var obj14219 = {};
return obj14219;
})();

jamesmacaulay.zelkova.impl.signal.signal_mult = (function jamesmacaulay$zelkova$impl$signal$signal_mult(g,sig){
if((function (){var and__4158__auto__ = g;
if(and__4158__auto__){
return g.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$signal_mult$arity$2;
} else {
return and__4158__auto__;
}
})()){
return g.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$signal_mult$arity$2(g,sig);
} else {
var x__4806__auto__ = (((g == null))?null:g);
return (function (){var or__4170__auto__ = (jamesmacaulay.zelkova.impl.signal.signal_mult[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (jamesmacaulay.zelkova.impl.signal.signal_mult["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"LiveChannelGraphProtocol.signal-mult",g);
}
}
})().call(null,g,sig);
}
});

jamesmacaulay.zelkova.impl.signal.connect_to_world = (function jamesmacaulay$zelkova$impl$signal$connect_to_world(g){
if((function (){var and__4158__auto__ = g;
if(and__4158__auto__){
return g.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$connect_to_world$arity$1;
} else {
return and__4158__auto__;
}
})()){
return g.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$connect_to_world$arity$1(g);
} else {
var x__4806__auto__ = (((g == null))?null:g);
return (function (){var or__4170__auto__ = (jamesmacaulay.zelkova.impl.signal.connect_to_world[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (jamesmacaulay.zelkova.impl.signal.connect_to_world["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"LiveChannelGraphProtocol.connect-to-world",g);
}
}
})().call(null,g);
}
});

jamesmacaulay.zelkova.impl.signal.init = (function jamesmacaulay$zelkova$impl$signal$init(g){
if((function (){var and__4158__auto__ = g;
if(and__4158__auto__){
return g.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$init$arity$1;
} else {
return and__4158__auto__;
}
})()){
return g.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$init$arity$1(g);
} else {
var x__4806__auto__ = (((g == null))?null:g);
return (function (){var or__4170__auto__ = (jamesmacaulay.zelkova.impl.signal.init[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (jamesmacaulay.zelkova.impl.signal.init["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"LiveChannelGraphProtocol.init",g);
}
}
})().call(null,g);
}
});


/**
* @constructor
* @param {*} definition
* @param {*} events_channel
* @param {*} mult_map
* @param {*} output_values_mult
* @param {*} opts
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
jamesmacaulay.zelkova.impl.signal.LiveChannelGraph = (function (definition,events_channel,mult_map,output_values_mult,opts,__meta,__extmap,__hash){
this.definition = definition;
this.events_channel = events_channel;
this.mult_map = mult_map;
this.output_values_mult = output_values_mult;
this.opts = opts;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4765__auto__,k__4766__auto__){
var self__ = this;
var this__4765__auto____$1 = this;
return cljs.core._lookup.call(null,this__4765__auto____$1,k__4766__auto__,null);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4767__auto__,k14221,else__4768__auto__){
var self__ = this;
var this__4767__auto____$1 = this;
var G__14223 = (((k14221 instanceof cljs.core.Keyword))?k14221.fqn:null);
switch (G__14223) {
case "definition":
return self__.definition;

break;
case "events-channel":
return self__.events_channel;

break;
case "mult-map":
return self__.mult_map;

break;
case "output-values-mult":
return self__.output_values_mult;

break;
case "opts":
return self__.opts;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14221,else__4768__auto__);

}
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$impl$protocols$Channel$ = true;

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.events_channel);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.events_channel);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4779__auto__,writer__4780__auto__,opts__4781__auto__){
var self__ = this;
var this__4779__auto____$1 = this;
var pr_pair__4782__auto__ = ((function (this__4779__auto____$1){
return (function (keyval__4783__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4780__auto__,cljs.core.pr_writer,""," ","",opts__4781__auto__,keyval__4783__auto__);
});})(this__4779__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4780__auto__,pr_pair__4782__auto__,"#jamesmacaulay.zelkova.impl.signal.LiveChannelGraph{",", ","}",opts__4781__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"definition","definition",-1198729982),self__.definition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"events-channel","events-channel",1892177121),self__.events_channel],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mult-map","mult-map",460417931),self__.mult_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-values-mult","output-values-mult",1026794288),self__.output_values_mult],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4763__auto__){
var self__ = this;
var this__4763__auto____$1 = this;
return self__.__meta;
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4759__auto__){
var self__ = this;
var this__4759__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(self__.definition,self__.events_channel,self__.mult_map,self__.output_values_mult,self__.opts,self__.__meta,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4769__auto__){
var self__ = this;
var this__4769__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4760__auto__){
var self__ = this;
var this__4760__auto____$1 = this;
var h__4586__auto__ = self__.__hash;
if(!((h__4586__auto__ == null))){
return h__4586__auto__;
} else {
var h__4586__auto____$1 = cljs.core.hash_imap.call(null,this__4760__auto____$1);
self__.__hash = h__4586__auto____$1;

return h__4586__auto____$1;
}
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4761__auto__,other__4762__auto__){
var self__ = this;
var this__4761__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4158__auto__ = other__4762__auto__;
if(cljs.core.truth_(and__4158__auto__)){
var and__4158__auto____$1 = (this__4761__auto____$1.constructor === other__4762__auto__.constructor);
if(and__4158__auto____$1){
return cljs.core.equiv_map.call(null,this__4761__auto____$1,other__4762__auto__);
} else {
return and__4158__auto____$1;
}
} else {
return and__4158__auto__;
}
})())){
return true;
} else {
return false;
}
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$ = true;

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$signal_mult$arity$2 = (function (_,sig){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.mult_map,sig);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$connect_to_world$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
var world_14232 = jamesmacaulay.zelkova.impl.signal.gather_event_sources.call(null,jamesmacaulay.zelkova.impl.signal.topsort.call(null,self__.definition));
var seq__14224_14233 = cljs.core.seq.call(null,cljs.core.vals.call(null,world_14232));
var chunk__14225_14234 = null;
var count__14226_14235 = (0);
var i__14227_14236 = (0);
while(true){
if((i__14227_14236 < count__14226_14235)){
var channel_fn_14237 = cljs.core._nth.call(null,chunk__14225_14234,i__14227_14236);
cljs.core.async.pipe.call(null,channel_fn_14237.call(null,g__$1,self__.opts),self__.events_channel);

var G__14238 = seq__14224_14233;
var G__14239 = chunk__14225_14234;
var G__14240 = count__14226_14235;
var G__14241 = (i__14227_14236 + (1));
seq__14224_14233 = G__14238;
chunk__14225_14234 = G__14239;
count__14226_14235 = G__14240;
i__14227_14236 = G__14241;
continue;
} else {
var temp__4422__auto___14242 = cljs.core.seq.call(null,seq__14224_14233);
if(temp__4422__auto___14242){
var seq__14224_14243__$1 = temp__4422__auto___14242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14224_14243__$1)){
var c__4955__auto___14244 = cljs.core.chunk_first.call(null,seq__14224_14243__$1);
var G__14245 = cljs.core.chunk_rest.call(null,seq__14224_14243__$1);
var G__14246 = c__4955__auto___14244;
var G__14247 = cljs.core.count.call(null,c__4955__auto___14244);
var G__14248 = (0);
seq__14224_14233 = G__14245;
chunk__14225_14234 = G__14246;
count__14226_14235 = G__14247;
i__14227_14236 = G__14248;
continue;
} else {
var channel_fn_14249 = cljs.core.first.call(null,seq__14224_14243__$1);
cljs.core.async.pipe.call(null,channel_fn_14249.call(null,g__$1,self__.opts),self__.events_channel);

var G__14250 = cljs.core.next.call(null,seq__14224_14243__$1);
var G__14251 = null;
var G__14252 = (0);
var G__14253 = (0);
seq__14224_14233 = G__14250;
chunk__14225_14234 = G__14251;
count__14226_14235 = G__14252;
i__14227_14236 = G__14253;
continue;
}
} else {
}
}
break;
}

return g__$1;
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$init$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return new cljs.core.Keyword(null,"init-fn","init-fn",777257971).cljs$core$IFn$_invoke$arity$1(self__.definition).call(null,g__$1,self__.opts);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.events_channel,val,fn1);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4774__auto__,k__4775__auto__){
var self__ = this;
var this__4774__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"events-channel","events-channel",1892177121),null,new cljs.core.Keyword(null,"definition","definition",-1198729982),null,new cljs.core.Keyword(null,"mult-map","mult-map",460417931),null,new cljs.core.Keyword(null,"output-values-mult","output-values-mult",1026794288),null,new cljs.core.Keyword(null,"opts","opts",155075701),null], null), null),k__4775__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4774__auto____$1),self__.__meta),k__4775__auto__);
} else {
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(self__.definition,self__.events_channel,self__.mult_map,self__.output_values_mult,self__.opts,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4775__auto__)),null));
}
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4772__auto__,k__4773__auto__,G__14220){
var self__ = this;
var this__4772__auto____$1 = this;
var pred__14228 = cljs.core.keyword_identical_QMARK_;
var expr__14229 = k__4773__auto__;
if(cljs.core.truth_(pred__14228.call(null,new cljs.core.Keyword(null,"definition","definition",-1198729982),expr__14229))){
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(G__14220,self__.events_channel,self__.mult_map,self__.output_values_mult,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14228.call(null,new cljs.core.Keyword(null,"events-channel","events-channel",1892177121),expr__14229))){
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(self__.definition,G__14220,self__.mult_map,self__.output_values_mult,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14228.call(null,new cljs.core.Keyword(null,"mult-map","mult-map",460417931),expr__14229))){
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(self__.definition,self__.events_channel,G__14220,self__.output_values_mult,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14228.call(null,new cljs.core.Keyword(null,"output-values-mult","output-values-mult",1026794288),expr__14229))){
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(self__.definition,self__.events_channel,self__.mult_map,G__14220,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14228.call(null,new cljs.core.Keyword(null,"opts","opts",155075701),expr__14229))){
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(self__.definition,self__.events_channel,self__.mult_map,self__.output_values_mult,G__14220,self__.__meta,self__.__extmap,null));
} else {
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(self__.definition,self__.events_channel,self__.mult_map,self__.output_values_mult,self__.opts,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4773__auto__,G__14220),null));
}
}
}
}
}
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4777__auto__){
var self__ = this;
var this__4777__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"definition","definition",-1198729982),self__.definition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"events-channel","events-channel",1892177121),self__.events_channel],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mult-map","mult-map",460417931),self__.mult_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-values-mult","output-values-mult",1026794288),self__.output_values_mult],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4764__auto__,G__14220){
var self__ = this;
var this__4764__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(self__.definition,self__.events_channel,self__.mult_map,self__.output_values_mult,self__.opts,G__14220,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$Mult$ = true;

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (g,ch,close_QMARK_){
var self__ = this;
var g__$1 = this;
return cljs.core.async.tap_STAR_.call(null,self__.output_values_mult,ch,close_QMARK_);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (g,ch){
var self__ = this;
var g__$1 = this;
return cljs.core.async.untap_STAR_.call(null,self__.output_values_mult,ch);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.async.untap_all_STAR_.call(null,self__.output_values_mult);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4770__auto__,entry__4771__auto__){
var self__ = this;
var this__4770__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4771__auto__)){
return cljs.core._assoc.call(null,this__4770__auto____$1,cljs.core._nth.call(null,entry__4771__auto__,(0)),cljs.core._nth.call(null,entry__4771__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4770__auto____$1,entry__4771__auto__);
}
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.cljs$lang$type = true;

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.cljs$lang$ctorPrSeq = (function (this__4799__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jamesmacaulay.zelkova.impl.signal/LiveChannelGraph");
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"jamesmacaulay.zelkova.impl.signal/LiveChannelGraph");
});

jamesmacaulay.zelkova.impl.signal.__GT_LiveChannelGraph = (function jamesmacaulay$zelkova$impl$signal$__GT_LiveChannelGraph(definition,events_channel,mult_map,output_values_mult,opts){
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(definition,events_channel,mult_map,output_values_mult,opts,null,null,null));
});

jamesmacaulay.zelkova.impl.signal.map__GT_LiveChannelGraph = (function jamesmacaulay$zelkova$impl$signal$map__GT_LiveChannelGraph(G__14222){
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(new cljs.core.Keyword(null,"definition","definition",-1198729982).cljs$core$IFn$_invoke$arity$1(G__14222),new cljs.core.Keyword(null,"events-channel","events-channel",1892177121).cljs$core$IFn$_invoke$arity$1(G__14222),new cljs.core.Keyword(null,"mult-map","mult-map",460417931).cljs$core$IFn$_invoke$arity$1(G__14222),new cljs.core.Keyword(null,"output-values-mult","output-values-mult",1026794288).cljs$core$IFn$_invoke$arity$1(G__14222),new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(G__14222),null,cljs.core.dissoc.call(null,G__14222,new cljs.core.Keyword(null,"definition","definition",-1198729982),new cljs.core.Keyword(null,"events-channel","events-channel",1892177121),new cljs.core.Keyword(null,"mult-map","mult-map",460417931),new cljs.core.Keyword(null,"output-values-mult","output-values-mult",1026794288),new cljs.core.Keyword(null,"opts","opts",155075701)),null));
});


jamesmacaulay.zelkova.impl.signal.SignalLike = (function (){var obj14255 = {};
return obj14255;
})();

jamesmacaulay.zelkova.impl.signal.spawn_STAR_ = (function jamesmacaulay$zelkova$impl$signal$spawn_STAR_(x,opts){
if((function (){var and__4158__auto__ = x;
if(and__4158__auto__){
return x.jamesmacaulay$zelkova$impl$signal$SignalLike$spawn_STAR_$arity$2;
} else {
return and__4158__auto__;
}
})()){
return x.jamesmacaulay$zelkova$impl$signal$SignalLike$spawn_STAR_$arity$2(x,opts);
} else {
var x__4806__auto__ = (((x == null))?null:x);
return (function (){var or__4170__auto__ = (jamesmacaulay.zelkova.impl.signal.spawn_STAR_[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (jamesmacaulay.zelkova.impl.signal.spawn_STAR_["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"SignalLike.spawn*",x);
}
}
})().call(null,x,opts);
}
});

jamesmacaulay.zelkova.impl.signal.pipe_to_atom_STAR_ = (function jamesmacaulay$zelkova$impl$signal$pipe_to_atom_STAR_(x,a,ks){
if((function (){var and__4158__auto__ = x;
if(and__4158__auto__){
return x.jamesmacaulay$zelkova$impl$signal$SignalLike$pipe_to_atom_STAR_$arity$3;
} else {
return and__4158__auto__;
}
})()){
return x.jamesmacaulay$zelkova$impl$signal$SignalLike$pipe_to_atom_STAR_$arity$3(x,a,ks);
} else {
var x__4806__auto__ = (((x == null))?null:x);
return (function (){var or__4170__auto__ = (jamesmacaulay.zelkova.impl.signal.pipe_to_atom_STAR_[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (jamesmacaulay.zelkova.impl.signal.pipe_to_atom_STAR_["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"SignalLike.pipe-to-atom*",x);
}
}
})().call(null,x,a,ks);
}
});

jamesmacaulay.zelkova.impl.signal.events_xform = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,(function (event){
if((jamesmacaulay.zelkova.impl.signal.timestamp.call(null,event) == null)){
return jamesmacaulay.zelkova.impl.signal.record_timestamp.call(null,event,jamesmacaulay.zelkova.impl.time.now.call(null));
} else {
return event;
}
})),jamesmacaulay.zelkova.impl.signal.ensure_sequential));
jamesmacaulay.zelkova.impl.signal.build_output_values_mult = (function jamesmacaulay$zelkova$impl$signal$build_output_values_mult(mult_map,output_sig){
return cljs.core.async.mult.call(null,cljs.core.async.tap.call(null,cljs.core.get.call(null,mult_map,output_sig),cljs.core.async.chan.call(null,(1),jamesmacaulay.zelkova.impl.signal.fresh_values)));
});
jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$impl$signal$SignalLike$ = true;

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$impl$signal$SignalLike$spawn_STAR_$arity$2 = (function (g,opts){
var g__$1 = this;
return jamesmacaulay.zelkova.impl.signal.spawn_STAR_.call(null,new cljs.core.Keyword(null,"signal","signal",-1984951589).cljs$core$IFn$_invoke$arity$1(g__$1),opts);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$impl$signal$SignalLike$pipe_to_atom_STAR_$arity$3 = (function (g,atm,ks){
var g__$1 = this;
jamesmacaulay.async_tools.core.do_effects.call(null,((cljs.core.seq.call(null,ks))?cljs.core.partial.call(null,cljs.core.swap_BANG_,atm,cljs.core.assoc_in,ks):cljs.core.partial.call(null,cljs.core.reset_BANG_,atm)),cljs.core.async.tap.call(null,g__$1,cljs.core.async.chan.call(null)));

return atm;
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalLike$ = true;

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalLike$spawn_STAR_$arity$2 = (function (s,opts){
var s__$1 = this;
var events_channel = cljs.core.async.chan.call(null,(1),jamesmacaulay.zelkova.impl.signal.events_xform);
var events_mult = cljs.core.async.mult.call(null,events_channel);
var mult_map = jamesmacaulay.zelkova.impl.signal.build_message_mult_map.call(null,jamesmacaulay.zelkova.impl.signal.topsort.call(null,s__$1),events_mult,s__$1,opts);
var output_values_mult = jamesmacaulay.zelkova.impl.signal.build_output_values_mult.call(null,mult_map,s__$1);
return jamesmacaulay.zelkova.impl.signal.connect_to_world.call(null,jamesmacaulay.zelkova.impl.signal.__GT_LiveChannelGraph.call(null,s__$1,events_channel,mult_map,output_values_mult,opts));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalLike$pipe_to_atom_STAR_$arity$3 = (function (s,atm,ks){
var s__$1 = this;
return jamesmacaulay.zelkova.impl.signal.pipe_to_atom_STAR_.call(null,jamesmacaulay.zelkova.impl.signal.spawn_STAR_.call(null,s__$1,null),atm,ks);
});
if(typeof jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn !== 'undefined'){
} else {
/**
 * Takes some asynchronous `source` of values, plus an event `topic`, and returns
 * an event-source function. `source` may be one of the following:
 * 
 * * a function taking a live graph and an options map, and returns a channel of values
 * * a channel of values
 * * a mult of some such value channel
 * 
 * The returned event-source function has the same signature as the functions that can
 * be supplied for the `source` argument, but the values are wrapped as Events.
 */
jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn = (function (){var method_table__5065__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5066__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5067__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5068__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5069__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"jamesmacaulay.zelkova.impl.signal","value-source->events-fn"),((function (method_table__5065__auto__,prefer_table__5066__auto__,method_cache__5067__auto__,cached_hierarchy__5068__auto__,hierarchy__5069__auto__){
return (function (source,topic){
if((function (){var G__14256 = source;
if(G__14256){
var bit__4844__auto__ = null;
if(cljs.core.truth_((function (){var or__4170__auto__ = bit__4844__auto__;
if(cljs.core.truth_(or__4170__auto__)){
return or__4170__auto__;
} else {
return G__14256.cljs$core$async$Mult$;
}
})())){
return true;
} else {
if((!G__14256.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.Mult,G__14256);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.Mult,G__14256);
}
})()){
return new cljs.core.Keyword(null,"mult","mult",1466794774);
} else {
if((function (){var G__14257 = source;
if(G__14257){
var bit__4844__auto__ = null;
if(cljs.core.truth_((function (){var or__4170__auto__ = bit__4844__auto__;
if(cljs.core.truth_(or__4170__auto__)){
return or__4170__auto__;
} else {
return G__14257.cljs$core$async$impl$protocols$ReadPort$;
}
})())){
return true;
} else {
if((!G__14257.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,G__14257);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,G__14257);
}
})()){
return new cljs.core.Keyword(null,"readport","readport",-1909228810);
} else {
if(cljs.core.ifn_QMARK_.call(null,source)){
return new cljs.core.Keyword(null,"ifn","ifn",230683491);
} else {
return null;
}
}
}
});})(method_table__5065__auto__,prefer_table__5066__auto__,method_cache__5067__auto__,cached_hierarchy__5068__auto__,hierarchy__5069__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5069__auto__,method_table__5065__auto__,prefer_table__5066__auto__,method_cache__5067__auto__,cached_hierarchy__5068__auto__));
})();
}
cljs.core._add_method.call(null,jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn,new cljs.core.Keyword(null,"ifn","ifn",230683491),(function (src_fn,topic){
return (function (graph,opts){
var ch = src_fn.call(null,graph,opts);
return cljs.core.async.pipe.call(null,ch,cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,cljs.core.partial.call(null,jamesmacaulay.zelkova.impl.signal.make_event,topic))));
});
}));
cljs.core._add_method.call(null,jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn,new cljs.core.Keyword(null,"mult","mult",1466794774),(function (src_mult,topic){
return jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn.call(null,(function (_,___$1){
return cljs.core.async.tap.call(null,src_mult,cljs.core.async.chan.call(null));
}),topic);
}));
cljs.core._add_method.call(null,jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn,new cljs.core.Keyword(null,"readport","readport",-1909228810),(function (src_chan,topic){
return jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn.call(null,cljs.core.async.mult.call(null,src_chan),topic);
}));

//# sourceMappingURL=signal.js.map
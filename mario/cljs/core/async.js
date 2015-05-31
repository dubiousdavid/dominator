// Compiled by ClojureScript 0.0-3178 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t15001 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15001 = (function (fn_handler,f,meta15002){
this.fn_handler = fn_handler;
this.f = f;
this.meta15002 = meta15002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15003,meta15002__$1){
var self__ = this;
var _15003__$1 = this;
return (new cljs.core.async.t15001(self__.fn_handler,self__.f,meta15002__$1));
});

cljs.core.async.t15001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15003){
var self__ = this;
var _15003__$1 = this;
return self__.meta15002;
});

cljs.core.async.t15001.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15001.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t15001.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t15001.cljs$lang$type = true;

cljs.core.async.t15001.cljs$lang$ctorStr = "cljs.core.async/t15001";

cljs.core.async.t15001.cljs$lang$ctorPrWriter = (function (this__4749__auto__,writer__4750__auto__,opt__4751__auto__){
return cljs.core._write.call(null,writer__4750__auto__,"cljs.core.async/t15001");
});

cljs.core.async.__GT_t15001 = (function cljs$core$async$fn_handler_$___GT_t15001(fn_handler__$1,f__$1,meta15002){
return (new cljs.core.async.t15001(fn_handler__$1,f__$1,meta15002));
});

}

return (new cljs.core.async.t15001(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__15005 = buff;
if(G__15005){
var bit__4844__auto__ = null;
if(cljs.core.truth_((function (){var or__4170__auto__ = bit__4844__auto__;
if(cljs.core.truth_(or__4170__auto__)){
return or__4170__auto__;
} else {
return G__15005.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__15005.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15005);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15005);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__15007 = arguments.length;
switch (G__15007) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__15010 = arguments.length;
switch (G__15010) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_15012 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15012);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_15012,ret){
return (function (){
return fn1.call(null,val_15012);
});})(val_15012,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__15014 = arguments.length;
switch (G__15014) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4420__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4420__auto__)){
var ret = temp__4420__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4420__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4420__auto__)){
var retb = temp__4420__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4420__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4420__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5055__auto___15016 = n;
var x_15017 = (0);
while(true){
if((x_15017 < n__5055__auto___15016)){
(a[x_15017] = (0));

var G__15018 = (x_15017 + (1));
x_15017 = G__15018;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__15019 = (i + (1));
i = G__15019;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t15023 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15023 = (function (alt_flag,flag,meta15024){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta15024 = meta15024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15025,meta15024__$1){
var self__ = this;
var _15025__$1 = this;
return (new cljs.core.async.t15023(self__.alt_flag,self__.flag,meta15024__$1));
});})(flag))
;

cljs.core.async.t15023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15025){
var self__ = this;
var _15025__$1 = this;
return self__.meta15024;
});})(flag))
;

cljs.core.async.t15023.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t15023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t15023.cljs$lang$type = true;

cljs.core.async.t15023.cljs$lang$ctorStr = "cljs.core.async/t15023";

cljs.core.async.t15023.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4749__auto__,writer__4750__auto__,opt__4751__auto__){
return cljs.core._write.call(null,writer__4750__auto__,"cljs.core.async/t15023");
});})(flag))
;

cljs.core.async.__GT_t15023 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t15023(alt_flag__$1,flag__$1,meta15024){
return (new cljs.core.async.t15023(alt_flag__$1,flag__$1,meta15024));
});})(flag))
;

}

return (new cljs.core.async.t15023(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t15029 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15029 = (function (alt_handler,flag,cb,meta15030){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta15030 = meta15030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15031,meta15030__$1){
var self__ = this;
var _15031__$1 = this;
return (new cljs.core.async.t15029(self__.alt_handler,self__.flag,self__.cb,meta15030__$1));
});

cljs.core.async.t15029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15031){
var self__ = this;
var _15031__$1 = this;
return self__.meta15030;
});

cljs.core.async.t15029.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15029.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t15029.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t15029.cljs$lang$type = true;

cljs.core.async.t15029.cljs$lang$ctorStr = "cljs.core.async/t15029";

cljs.core.async.t15029.cljs$lang$ctorPrWriter = (function (this__4749__auto__,writer__4750__auto__,opt__4751__auto__){
return cljs.core._write.call(null,writer__4750__auto__,"cljs.core.async/t15029");
});

cljs.core.async.__GT_t15029 = (function cljs$core$async$alt_handler_$___GT_t15029(alt_handler__$1,flag__$1,cb__$1,meta15030){
return (new cljs.core.async.t15029(alt_handler__$1,flag__$1,cb__$1,meta15030));
});

}

return (new cljs.core.async.t15029(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15032_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15032_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15033_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15033_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4170__auto__ = wport;
if(cljs.core.truth_(or__4170__auto__)){
return or__4170__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15034 = (i + (1));
i = G__15034;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4170__auto__ = ret;
if(cljs.core.truth_(or__4170__auto__)){
return or__4170__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4422__auto__ = (function (){var and__4158__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4158__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4158__auto__;
}
})();
if(cljs.core.truth_(temp__4422__auto__)){
var got = temp__4422__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5210__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5210__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15037){
var map__15038 = p__15037;
var map__15038__$1 = ((cljs.core.seq_QMARK_.call(null,map__15038))?cljs.core.apply.call(null,cljs.core.hash_map,map__15038):map__15038);
var opts = map__15038__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15035){
var G__15036 = cljs.core.first.call(null,seq15035);
var seq15035__$1 = cljs.core.next.call(null,seq15035);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15036,seq15035__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__15040 = arguments.length;
switch (G__15040) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__6533__auto___15089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto___15089){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto___15089){
return (function (state_15064){
var state_val_15065 = (state_15064[(1)]);
if((state_val_15065 === (7))){
var inst_15060 = (state_15064[(2)]);
var state_15064__$1 = state_15064;
var statearr_15066_15090 = state_15064__$1;
(statearr_15066_15090[(2)] = inst_15060);

(statearr_15066_15090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (1))){
var state_15064__$1 = state_15064;
var statearr_15067_15091 = state_15064__$1;
(statearr_15067_15091[(2)] = null);

(statearr_15067_15091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (4))){
var inst_15043 = (state_15064[(7)]);
var inst_15043__$1 = (state_15064[(2)]);
var inst_15044 = (inst_15043__$1 == null);
var state_15064__$1 = (function (){var statearr_15068 = state_15064;
(statearr_15068[(7)] = inst_15043__$1);

return statearr_15068;
})();
if(cljs.core.truth_(inst_15044)){
var statearr_15069_15092 = state_15064__$1;
(statearr_15069_15092[(1)] = (5));

} else {
var statearr_15070_15093 = state_15064__$1;
(statearr_15070_15093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (13))){
var state_15064__$1 = state_15064;
var statearr_15071_15094 = state_15064__$1;
(statearr_15071_15094[(2)] = null);

(statearr_15071_15094[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (6))){
var inst_15043 = (state_15064[(7)]);
var state_15064__$1 = state_15064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15064__$1,(11),to,inst_15043);
} else {
if((state_val_15065 === (3))){
var inst_15062 = (state_15064[(2)]);
var state_15064__$1 = state_15064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15064__$1,inst_15062);
} else {
if((state_val_15065 === (12))){
var state_15064__$1 = state_15064;
var statearr_15072_15095 = state_15064__$1;
(statearr_15072_15095[(2)] = null);

(statearr_15072_15095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (2))){
var state_15064__$1 = state_15064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15064__$1,(4),from);
} else {
if((state_val_15065 === (11))){
var inst_15053 = (state_15064[(2)]);
var state_15064__$1 = state_15064;
if(cljs.core.truth_(inst_15053)){
var statearr_15073_15096 = state_15064__$1;
(statearr_15073_15096[(1)] = (12));

} else {
var statearr_15074_15097 = state_15064__$1;
(statearr_15074_15097[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (9))){
var state_15064__$1 = state_15064;
var statearr_15075_15098 = state_15064__$1;
(statearr_15075_15098[(2)] = null);

(statearr_15075_15098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (5))){
var state_15064__$1 = state_15064;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15076_15099 = state_15064__$1;
(statearr_15076_15099[(1)] = (8));

} else {
var statearr_15077_15100 = state_15064__$1;
(statearr_15077_15100[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (14))){
var inst_15058 = (state_15064[(2)]);
var state_15064__$1 = state_15064;
var statearr_15078_15101 = state_15064__$1;
(statearr_15078_15101[(2)] = inst_15058);

(statearr_15078_15101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (10))){
var inst_15050 = (state_15064[(2)]);
var state_15064__$1 = state_15064;
var statearr_15079_15102 = state_15064__$1;
(statearr_15079_15102[(2)] = inst_15050);

(statearr_15079_15102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (8))){
var inst_15047 = cljs.core.async.close_BANG_.call(null,to);
var state_15064__$1 = state_15064;
var statearr_15080_15103 = state_15064__$1;
(statearr_15080_15103[(2)] = inst_15047);

(statearr_15080_15103[(1)] = (10));


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
}
}
}
}
}
}
});})(c__6533__auto___15089))
;
return ((function (switch__6471__auto__,c__6533__auto___15089){
return (function() {
var cljs$core$async$state_machine__6472__auto__ = null;
var cljs$core$async$state_machine__6472__auto____0 = (function (){
var statearr_15084 = [null,null,null,null,null,null,null,null];
(statearr_15084[(0)] = cljs$core$async$state_machine__6472__auto__);

(statearr_15084[(1)] = (1));

return statearr_15084;
});
var cljs$core$async$state_machine__6472__auto____1 = (function (state_15064){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_15064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e15085){if((e15085 instanceof Object)){
var ex__6475__auto__ = e15085;
var statearr_15086_15104 = state_15064;
(statearr_15086_15104[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15105 = state_15064;
state_15064 = G__15105;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
cljs$core$async$state_machine__6472__auto__ = function(state_15064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6472__auto____1.call(this,state_15064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6472__auto____0;
cljs$core$async$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6472__auto____1;
return cljs$core$async$state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto___15089))
})();
var state__6535__auto__ = (function (){var statearr_15087 = f__6534__auto__.call(null);
(statearr_15087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto___15089);

return statearr_15087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto___15089))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__15289){
var vec__15290 = p__15289;
var v = cljs.core.nth.call(null,vec__15290,(0),null);
var p = cljs.core.nth.call(null,vec__15290,(1),null);
var job = vec__15290;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6533__auto___15472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto___15472,res,vec__15290,v,p,job,jobs,results){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto___15472,res,vec__15290,v,p,job,jobs,results){
return (function (state_15295){
var state_val_15296 = (state_15295[(1)]);
if((state_val_15296 === (1))){
var state_15295__$1 = state_15295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15295__$1,(2),res,v);
} else {
if((state_val_15296 === (2))){
var inst_15292 = (state_15295[(2)]);
var inst_15293 = cljs.core.async.close_BANG_.call(null,res);
var state_15295__$1 = (function (){var statearr_15297 = state_15295;
(statearr_15297[(7)] = inst_15292);

return statearr_15297;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15295__$1,inst_15293);
} else {
return null;
}
}
});})(c__6533__auto___15472,res,vec__15290,v,p,job,jobs,results))
;
return ((function (switch__6471__auto__,c__6533__auto___15472,res,vec__15290,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____0 = (function (){
var statearr_15301 = [null,null,null,null,null,null,null,null];
(statearr_15301[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__);

(statearr_15301[(1)] = (1));

return statearr_15301;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____1 = (function (state_15295){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_15295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e15302){if((e15302 instanceof Object)){
var ex__6475__auto__ = e15302;
var statearr_15303_15473 = state_15295;
(statearr_15303_15473[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15474 = state_15295;
state_15295 = G__15474;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__ = function(state_15295){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____1.call(this,state_15295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto___15472,res,vec__15290,v,p,job,jobs,results))
})();
var state__6535__auto__ = (function (){var statearr_15304 = f__6534__auto__.call(null);
(statearr_15304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto___15472);

return statearr_15304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto___15472,res,vec__15290,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15305){
var vec__15306 = p__15305;
var v = cljs.core.nth.call(null,vec__15306,(0),null);
var p = cljs.core.nth.call(null,vec__15306,(1),null);
var job = vec__15306;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5055__auto___15475 = n;
var __15476 = (0);
while(true){
if((__15476 < n__5055__auto___15475)){
var G__15307_15477 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15307_15477) {
case "compute":
var c__6533__auto___15479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15476,c__6533__auto___15479,G__15307_15477,n__5055__auto___15475,jobs,results,process,async){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (__15476,c__6533__auto___15479,G__15307_15477,n__5055__auto___15475,jobs,results,process,async){
return (function (state_15320){
var state_val_15321 = (state_15320[(1)]);
if((state_val_15321 === (1))){
var state_15320__$1 = state_15320;
var statearr_15322_15480 = state_15320__$1;
(statearr_15322_15480[(2)] = null);

(statearr_15322_15480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (2))){
var state_15320__$1 = state_15320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15320__$1,(4),jobs);
} else {
if((state_val_15321 === (3))){
var inst_15318 = (state_15320[(2)]);
var state_15320__$1 = state_15320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15320__$1,inst_15318);
} else {
if((state_val_15321 === (4))){
var inst_15310 = (state_15320[(2)]);
var inst_15311 = process.call(null,inst_15310);
var state_15320__$1 = state_15320;
if(cljs.core.truth_(inst_15311)){
var statearr_15323_15481 = state_15320__$1;
(statearr_15323_15481[(1)] = (5));

} else {
var statearr_15324_15482 = state_15320__$1;
(statearr_15324_15482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (5))){
var state_15320__$1 = state_15320;
var statearr_15325_15483 = state_15320__$1;
(statearr_15325_15483[(2)] = null);

(statearr_15325_15483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (6))){
var state_15320__$1 = state_15320;
var statearr_15326_15484 = state_15320__$1;
(statearr_15326_15484[(2)] = null);

(statearr_15326_15484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15321 === (7))){
var inst_15316 = (state_15320[(2)]);
var state_15320__$1 = state_15320;
var statearr_15327_15485 = state_15320__$1;
(statearr_15327_15485[(2)] = inst_15316);

(statearr_15327_15485[(1)] = (3));


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
});})(__15476,c__6533__auto___15479,G__15307_15477,n__5055__auto___15475,jobs,results,process,async))
;
return ((function (__15476,switch__6471__auto__,c__6533__auto___15479,G__15307_15477,n__5055__auto___15475,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____0 = (function (){
var statearr_15331 = [null,null,null,null,null,null,null];
(statearr_15331[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__);

(statearr_15331[(1)] = (1));

return statearr_15331;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____1 = (function (state_15320){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_15320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e15332){if((e15332 instanceof Object)){
var ex__6475__auto__ = e15332;
var statearr_15333_15486 = state_15320;
(statearr_15333_15486[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15487 = state_15320;
state_15320 = G__15487;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__ = function(state_15320){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____1.call(this,state_15320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__;
})()
;})(__15476,switch__6471__auto__,c__6533__auto___15479,G__15307_15477,n__5055__auto___15475,jobs,results,process,async))
})();
var state__6535__auto__ = (function (){var statearr_15334 = f__6534__auto__.call(null);
(statearr_15334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto___15479);

return statearr_15334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(__15476,c__6533__auto___15479,G__15307_15477,n__5055__auto___15475,jobs,results,process,async))
);


break;
case "async":
var c__6533__auto___15488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15476,c__6533__auto___15488,G__15307_15477,n__5055__auto___15475,jobs,results,process,async){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (__15476,c__6533__auto___15488,G__15307_15477,n__5055__auto___15475,jobs,results,process,async){
return (function (state_15347){
var state_val_15348 = (state_15347[(1)]);
if((state_val_15348 === (1))){
var state_15347__$1 = state_15347;
var statearr_15349_15489 = state_15347__$1;
(statearr_15349_15489[(2)] = null);

(statearr_15349_15489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15348 === (2))){
var state_15347__$1 = state_15347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15347__$1,(4),jobs);
} else {
if((state_val_15348 === (3))){
var inst_15345 = (state_15347[(2)]);
var state_15347__$1 = state_15347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15347__$1,inst_15345);
} else {
if((state_val_15348 === (4))){
var inst_15337 = (state_15347[(2)]);
var inst_15338 = async.call(null,inst_15337);
var state_15347__$1 = state_15347;
if(cljs.core.truth_(inst_15338)){
var statearr_15350_15490 = state_15347__$1;
(statearr_15350_15490[(1)] = (5));

} else {
var statearr_15351_15491 = state_15347__$1;
(statearr_15351_15491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15348 === (5))){
var state_15347__$1 = state_15347;
var statearr_15352_15492 = state_15347__$1;
(statearr_15352_15492[(2)] = null);

(statearr_15352_15492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15348 === (6))){
var state_15347__$1 = state_15347;
var statearr_15353_15493 = state_15347__$1;
(statearr_15353_15493[(2)] = null);

(statearr_15353_15493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15348 === (7))){
var inst_15343 = (state_15347[(2)]);
var state_15347__$1 = state_15347;
var statearr_15354_15494 = state_15347__$1;
(statearr_15354_15494[(2)] = inst_15343);

(statearr_15354_15494[(1)] = (3));


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
});})(__15476,c__6533__auto___15488,G__15307_15477,n__5055__auto___15475,jobs,results,process,async))
;
return ((function (__15476,switch__6471__auto__,c__6533__auto___15488,G__15307_15477,n__5055__auto___15475,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____0 = (function (){
var statearr_15358 = [null,null,null,null,null,null,null];
(statearr_15358[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__);

(statearr_15358[(1)] = (1));

return statearr_15358;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____1 = (function (state_15347){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_15347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e15359){if((e15359 instanceof Object)){
var ex__6475__auto__ = e15359;
var statearr_15360_15495 = state_15347;
(statearr_15360_15495[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15496 = state_15347;
state_15347 = G__15496;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__ = function(state_15347){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____1.call(this,state_15347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__;
})()
;})(__15476,switch__6471__auto__,c__6533__auto___15488,G__15307_15477,n__5055__auto___15475,jobs,results,process,async))
})();
var state__6535__auto__ = (function (){var statearr_15361 = f__6534__auto__.call(null);
(statearr_15361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto___15488);

return statearr_15361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(__15476,c__6533__auto___15488,G__15307_15477,n__5055__auto___15475,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15497 = (__15476 + (1));
__15476 = G__15497;
continue;
} else {
}
break;
}

var c__6533__auto___15498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto___15498,jobs,results,process,async){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto___15498,jobs,results,process,async){
return (function (state_15383){
var state_val_15384 = (state_15383[(1)]);
if((state_val_15384 === (1))){
var state_15383__$1 = state_15383;
var statearr_15385_15499 = state_15383__$1;
(statearr_15385_15499[(2)] = null);

(statearr_15385_15499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (2))){
var state_15383__$1 = state_15383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15383__$1,(4),from);
} else {
if((state_val_15384 === (3))){
var inst_15381 = (state_15383[(2)]);
var state_15383__$1 = state_15383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15383__$1,inst_15381);
} else {
if((state_val_15384 === (4))){
var inst_15364 = (state_15383[(7)]);
var inst_15364__$1 = (state_15383[(2)]);
var inst_15365 = (inst_15364__$1 == null);
var state_15383__$1 = (function (){var statearr_15386 = state_15383;
(statearr_15386[(7)] = inst_15364__$1);

return statearr_15386;
})();
if(cljs.core.truth_(inst_15365)){
var statearr_15387_15500 = state_15383__$1;
(statearr_15387_15500[(1)] = (5));

} else {
var statearr_15388_15501 = state_15383__$1;
(statearr_15388_15501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (5))){
var inst_15367 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15383__$1 = state_15383;
var statearr_15389_15502 = state_15383__$1;
(statearr_15389_15502[(2)] = inst_15367);

(statearr_15389_15502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (6))){
var inst_15369 = (state_15383[(8)]);
var inst_15364 = (state_15383[(7)]);
var inst_15369__$1 = cljs.core.async.chan.call(null,(1));
var inst_15370 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15371 = [inst_15364,inst_15369__$1];
var inst_15372 = (new cljs.core.PersistentVector(null,2,(5),inst_15370,inst_15371,null));
var state_15383__$1 = (function (){var statearr_15390 = state_15383;
(statearr_15390[(8)] = inst_15369__$1);

return statearr_15390;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15383__$1,(8),jobs,inst_15372);
} else {
if((state_val_15384 === (7))){
var inst_15379 = (state_15383[(2)]);
var state_15383__$1 = state_15383;
var statearr_15391_15503 = state_15383__$1;
(statearr_15391_15503[(2)] = inst_15379);

(statearr_15391_15503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15384 === (8))){
var inst_15369 = (state_15383[(8)]);
var inst_15374 = (state_15383[(2)]);
var state_15383__$1 = (function (){var statearr_15392 = state_15383;
(statearr_15392[(9)] = inst_15374);

return statearr_15392;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15383__$1,(9),results,inst_15369);
} else {
if((state_val_15384 === (9))){
var inst_15376 = (state_15383[(2)]);
var state_15383__$1 = (function (){var statearr_15393 = state_15383;
(statearr_15393[(10)] = inst_15376);

return statearr_15393;
})();
var statearr_15394_15504 = state_15383__$1;
(statearr_15394_15504[(2)] = null);

(statearr_15394_15504[(1)] = (2));


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
}
});})(c__6533__auto___15498,jobs,results,process,async))
;
return ((function (switch__6471__auto__,c__6533__auto___15498,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____0 = (function (){
var statearr_15398 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15398[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__);

(statearr_15398[(1)] = (1));

return statearr_15398;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____1 = (function (state_15383){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_15383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e15399){if((e15399 instanceof Object)){
var ex__6475__auto__ = e15399;
var statearr_15400_15505 = state_15383;
(statearr_15400_15505[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15506 = state_15383;
state_15383 = G__15506;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__ = function(state_15383){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____1.call(this,state_15383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto___15498,jobs,results,process,async))
})();
var state__6535__auto__ = (function (){var statearr_15401 = f__6534__auto__.call(null);
(statearr_15401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto___15498);

return statearr_15401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto___15498,jobs,results,process,async))
);


var c__6533__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto__,jobs,results,process,async){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto__,jobs,results,process,async){
return (function (state_15439){
var state_val_15440 = (state_15439[(1)]);
if((state_val_15440 === (7))){
var inst_15435 = (state_15439[(2)]);
var state_15439__$1 = state_15439;
var statearr_15441_15507 = state_15439__$1;
(statearr_15441_15507[(2)] = inst_15435);

(statearr_15441_15507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15440 === (20))){
var state_15439__$1 = state_15439;
var statearr_15442_15508 = state_15439__$1;
(statearr_15442_15508[(2)] = null);

(statearr_15442_15508[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15440 === (1))){
var state_15439__$1 = state_15439;
var statearr_15443_15509 = state_15439__$1;
(statearr_15443_15509[(2)] = null);

(statearr_15443_15509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15440 === (4))){
var inst_15404 = (state_15439[(7)]);
var inst_15404__$1 = (state_15439[(2)]);
var inst_15405 = (inst_15404__$1 == null);
var state_15439__$1 = (function (){var statearr_15444 = state_15439;
(statearr_15444[(7)] = inst_15404__$1);

return statearr_15444;
})();
if(cljs.core.truth_(inst_15405)){
var statearr_15445_15510 = state_15439__$1;
(statearr_15445_15510[(1)] = (5));

} else {
var statearr_15446_15511 = state_15439__$1;
(statearr_15446_15511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15440 === (15))){
var inst_15417 = (state_15439[(8)]);
var state_15439__$1 = state_15439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15439__$1,(18),to,inst_15417);
} else {
if((state_val_15440 === (21))){
var inst_15430 = (state_15439[(2)]);
var state_15439__$1 = state_15439;
var statearr_15447_15512 = state_15439__$1;
(statearr_15447_15512[(2)] = inst_15430);

(statearr_15447_15512[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15440 === (13))){
var inst_15432 = (state_15439[(2)]);
var state_15439__$1 = (function (){var statearr_15448 = state_15439;
(statearr_15448[(9)] = inst_15432);

return statearr_15448;
})();
var statearr_15449_15513 = state_15439__$1;
(statearr_15449_15513[(2)] = null);

(statearr_15449_15513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15440 === (6))){
var inst_15404 = (state_15439[(7)]);
var state_15439__$1 = state_15439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15439__$1,(11),inst_15404);
} else {
if((state_val_15440 === (17))){
var inst_15425 = (state_15439[(2)]);
var state_15439__$1 = state_15439;
if(cljs.core.truth_(inst_15425)){
var statearr_15450_15514 = state_15439__$1;
(statearr_15450_15514[(1)] = (19));

} else {
var statearr_15451_15515 = state_15439__$1;
(statearr_15451_15515[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15440 === (3))){
var inst_15437 = (state_15439[(2)]);
var state_15439__$1 = state_15439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15439__$1,inst_15437);
} else {
if((state_val_15440 === (12))){
var inst_15414 = (state_15439[(10)]);
var state_15439__$1 = state_15439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15439__$1,(14),inst_15414);
} else {
if((state_val_15440 === (2))){
var state_15439__$1 = state_15439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15439__$1,(4),results);
} else {
if((state_val_15440 === (19))){
var state_15439__$1 = state_15439;
var statearr_15452_15516 = state_15439__$1;
(statearr_15452_15516[(2)] = null);

(statearr_15452_15516[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15440 === (11))){
var inst_15414 = (state_15439[(2)]);
var state_15439__$1 = (function (){var statearr_15453 = state_15439;
(statearr_15453[(10)] = inst_15414);

return statearr_15453;
})();
var statearr_15454_15517 = state_15439__$1;
(statearr_15454_15517[(2)] = null);

(statearr_15454_15517[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15440 === (9))){
var state_15439__$1 = state_15439;
var statearr_15455_15518 = state_15439__$1;
(statearr_15455_15518[(2)] = null);

(statearr_15455_15518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15440 === (5))){
var state_15439__$1 = state_15439;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15456_15519 = state_15439__$1;
(statearr_15456_15519[(1)] = (8));

} else {
var statearr_15457_15520 = state_15439__$1;
(statearr_15457_15520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15440 === (14))){
var inst_15417 = (state_15439[(8)]);
var inst_15419 = (state_15439[(11)]);
var inst_15417__$1 = (state_15439[(2)]);
var inst_15418 = (inst_15417__$1 == null);
var inst_15419__$1 = cljs.core.not.call(null,inst_15418);
var state_15439__$1 = (function (){var statearr_15458 = state_15439;
(statearr_15458[(8)] = inst_15417__$1);

(statearr_15458[(11)] = inst_15419__$1);

return statearr_15458;
})();
if(inst_15419__$1){
var statearr_15459_15521 = state_15439__$1;
(statearr_15459_15521[(1)] = (15));

} else {
var statearr_15460_15522 = state_15439__$1;
(statearr_15460_15522[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15440 === (16))){
var inst_15419 = (state_15439[(11)]);
var state_15439__$1 = state_15439;
var statearr_15461_15523 = state_15439__$1;
(statearr_15461_15523[(2)] = inst_15419);

(statearr_15461_15523[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15440 === (10))){
var inst_15411 = (state_15439[(2)]);
var state_15439__$1 = state_15439;
var statearr_15462_15524 = state_15439__$1;
(statearr_15462_15524[(2)] = inst_15411);

(statearr_15462_15524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15440 === (18))){
var inst_15422 = (state_15439[(2)]);
var state_15439__$1 = state_15439;
var statearr_15463_15525 = state_15439__$1;
(statearr_15463_15525[(2)] = inst_15422);

(statearr_15463_15525[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15440 === (8))){
var inst_15408 = cljs.core.async.close_BANG_.call(null,to);
var state_15439__$1 = state_15439;
var statearr_15464_15526 = state_15439__$1;
(statearr_15464_15526[(2)] = inst_15408);

(statearr_15464_15526[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6533__auto__,jobs,results,process,async))
;
return ((function (switch__6471__auto__,c__6533__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____0 = (function (){
var statearr_15468 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15468[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__);

(statearr_15468[(1)] = (1));

return statearr_15468;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____1 = (function (state_15439){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_15439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e15469){if((e15469 instanceof Object)){
var ex__6475__auto__ = e15469;
var statearr_15470_15527 = state_15439;
(statearr_15470_15527[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15528 = state_15439;
state_15439 = G__15528;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__ = function(state_15439){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____1.call(this,state_15439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto__,jobs,results,process,async))
})();
var state__6535__auto__ = (function (){var statearr_15471 = f__6534__auto__.call(null);
(statearr_15471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto__);

return statearr_15471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto__,jobs,results,process,async))
);

return c__6533__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__15530 = arguments.length;
switch (G__15530) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__15533 = arguments.length;
switch (G__15533) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__15536 = arguments.length;
switch (G__15536) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6533__auto___15588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto___15588,tc,fc){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto___15588,tc,fc){
return (function (state_15562){
var state_val_15563 = (state_15562[(1)]);
if((state_val_15563 === (7))){
var inst_15558 = (state_15562[(2)]);
var state_15562__$1 = state_15562;
var statearr_15564_15589 = state_15562__$1;
(statearr_15564_15589[(2)] = inst_15558);

(statearr_15564_15589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15563 === (1))){
var state_15562__$1 = state_15562;
var statearr_15565_15590 = state_15562__$1;
(statearr_15565_15590[(2)] = null);

(statearr_15565_15590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15563 === (4))){
var inst_15539 = (state_15562[(7)]);
var inst_15539__$1 = (state_15562[(2)]);
var inst_15540 = (inst_15539__$1 == null);
var state_15562__$1 = (function (){var statearr_15566 = state_15562;
(statearr_15566[(7)] = inst_15539__$1);

return statearr_15566;
})();
if(cljs.core.truth_(inst_15540)){
var statearr_15567_15591 = state_15562__$1;
(statearr_15567_15591[(1)] = (5));

} else {
var statearr_15568_15592 = state_15562__$1;
(statearr_15568_15592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15563 === (13))){
var state_15562__$1 = state_15562;
var statearr_15569_15593 = state_15562__$1;
(statearr_15569_15593[(2)] = null);

(statearr_15569_15593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15563 === (6))){
var inst_15539 = (state_15562[(7)]);
var inst_15545 = p.call(null,inst_15539);
var state_15562__$1 = state_15562;
if(cljs.core.truth_(inst_15545)){
var statearr_15570_15594 = state_15562__$1;
(statearr_15570_15594[(1)] = (9));

} else {
var statearr_15571_15595 = state_15562__$1;
(statearr_15571_15595[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15563 === (3))){
var inst_15560 = (state_15562[(2)]);
var state_15562__$1 = state_15562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15562__$1,inst_15560);
} else {
if((state_val_15563 === (12))){
var state_15562__$1 = state_15562;
var statearr_15572_15596 = state_15562__$1;
(statearr_15572_15596[(2)] = null);

(statearr_15572_15596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15563 === (2))){
var state_15562__$1 = state_15562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15562__$1,(4),ch);
} else {
if((state_val_15563 === (11))){
var inst_15539 = (state_15562[(7)]);
var inst_15549 = (state_15562[(2)]);
var state_15562__$1 = state_15562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15562__$1,(8),inst_15549,inst_15539);
} else {
if((state_val_15563 === (9))){
var state_15562__$1 = state_15562;
var statearr_15573_15597 = state_15562__$1;
(statearr_15573_15597[(2)] = tc);

(statearr_15573_15597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15563 === (5))){
var inst_15542 = cljs.core.async.close_BANG_.call(null,tc);
var inst_15543 = cljs.core.async.close_BANG_.call(null,fc);
var state_15562__$1 = (function (){var statearr_15574 = state_15562;
(statearr_15574[(8)] = inst_15542);

return statearr_15574;
})();
var statearr_15575_15598 = state_15562__$1;
(statearr_15575_15598[(2)] = inst_15543);

(statearr_15575_15598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15563 === (14))){
var inst_15556 = (state_15562[(2)]);
var state_15562__$1 = state_15562;
var statearr_15576_15599 = state_15562__$1;
(statearr_15576_15599[(2)] = inst_15556);

(statearr_15576_15599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15563 === (10))){
var state_15562__$1 = state_15562;
var statearr_15577_15600 = state_15562__$1;
(statearr_15577_15600[(2)] = fc);

(statearr_15577_15600[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15563 === (8))){
var inst_15551 = (state_15562[(2)]);
var state_15562__$1 = state_15562;
if(cljs.core.truth_(inst_15551)){
var statearr_15578_15601 = state_15562__$1;
(statearr_15578_15601[(1)] = (12));

} else {
var statearr_15579_15602 = state_15562__$1;
(statearr_15579_15602[(1)] = (13));

}

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
}
}
}
}
}
}
});})(c__6533__auto___15588,tc,fc))
;
return ((function (switch__6471__auto__,c__6533__auto___15588,tc,fc){
return (function() {
var cljs$core$async$state_machine__6472__auto__ = null;
var cljs$core$async$state_machine__6472__auto____0 = (function (){
var statearr_15583 = [null,null,null,null,null,null,null,null,null];
(statearr_15583[(0)] = cljs$core$async$state_machine__6472__auto__);

(statearr_15583[(1)] = (1));

return statearr_15583;
});
var cljs$core$async$state_machine__6472__auto____1 = (function (state_15562){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_15562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e15584){if((e15584 instanceof Object)){
var ex__6475__auto__ = e15584;
var statearr_15585_15603 = state_15562;
(statearr_15585_15603[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15604 = state_15562;
state_15562 = G__15604;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
cljs$core$async$state_machine__6472__auto__ = function(state_15562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6472__auto____1.call(this,state_15562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6472__auto____0;
cljs$core$async$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6472__auto____1;
return cljs$core$async$state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto___15588,tc,fc))
})();
var state__6535__auto__ = (function (){var statearr_15586 = f__6534__auto__.call(null);
(statearr_15586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto___15588);

return statearr_15586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto___15588,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__6533__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto__){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto__){
return (function (state_15651){
var state_val_15652 = (state_15651[(1)]);
if((state_val_15652 === (1))){
var inst_15637 = init;
var state_15651__$1 = (function (){var statearr_15653 = state_15651;
(statearr_15653[(7)] = inst_15637);

return statearr_15653;
})();
var statearr_15654_15669 = state_15651__$1;
(statearr_15654_15669[(2)] = null);

(statearr_15654_15669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15652 === (2))){
var state_15651__$1 = state_15651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15651__$1,(4),ch);
} else {
if((state_val_15652 === (3))){
var inst_15649 = (state_15651[(2)]);
var state_15651__$1 = state_15651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15651__$1,inst_15649);
} else {
if((state_val_15652 === (4))){
var inst_15640 = (state_15651[(8)]);
var inst_15640__$1 = (state_15651[(2)]);
var inst_15641 = (inst_15640__$1 == null);
var state_15651__$1 = (function (){var statearr_15655 = state_15651;
(statearr_15655[(8)] = inst_15640__$1);

return statearr_15655;
})();
if(cljs.core.truth_(inst_15641)){
var statearr_15656_15670 = state_15651__$1;
(statearr_15656_15670[(1)] = (5));

} else {
var statearr_15657_15671 = state_15651__$1;
(statearr_15657_15671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15652 === (5))){
var inst_15637 = (state_15651[(7)]);
var state_15651__$1 = state_15651;
var statearr_15658_15672 = state_15651__$1;
(statearr_15658_15672[(2)] = inst_15637);

(statearr_15658_15672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15652 === (6))){
var inst_15637 = (state_15651[(7)]);
var inst_15640 = (state_15651[(8)]);
var inst_15644 = f.call(null,inst_15637,inst_15640);
var inst_15637__$1 = inst_15644;
var state_15651__$1 = (function (){var statearr_15659 = state_15651;
(statearr_15659[(7)] = inst_15637__$1);

return statearr_15659;
})();
var statearr_15660_15673 = state_15651__$1;
(statearr_15660_15673[(2)] = null);

(statearr_15660_15673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15652 === (7))){
var inst_15647 = (state_15651[(2)]);
var state_15651__$1 = state_15651;
var statearr_15661_15674 = state_15651__$1;
(statearr_15661_15674[(2)] = inst_15647);

(statearr_15661_15674[(1)] = (3));


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
});})(c__6533__auto__))
;
return ((function (switch__6471__auto__,c__6533__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6472__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6472__auto____0 = (function (){
var statearr_15665 = [null,null,null,null,null,null,null,null,null];
(statearr_15665[(0)] = cljs$core$async$reduce_$_state_machine__6472__auto__);

(statearr_15665[(1)] = (1));

return statearr_15665;
});
var cljs$core$async$reduce_$_state_machine__6472__auto____1 = (function (state_15651){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_15651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e15666){if((e15666 instanceof Object)){
var ex__6475__auto__ = e15666;
var statearr_15667_15675 = state_15651;
(statearr_15667_15675[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15676 = state_15651;
state_15651 = G__15676;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6472__auto__ = function(state_15651){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6472__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6472__auto____1.call(this,state_15651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6472__auto____0;
cljs$core$async$reduce_$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6472__auto____1;
return cljs$core$async$reduce_$_state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto__))
})();
var state__6535__auto__ = (function (){var statearr_15668 = f__6534__auto__.call(null);
(statearr_15668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto__);

return statearr_15668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto__))
);

return c__6533__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__15678 = arguments.length;
switch (G__15678) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__6533__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto__){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto__){
return (function (state_15703){
var state_val_15704 = (state_15703[(1)]);
if((state_val_15704 === (7))){
var inst_15685 = (state_15703[(2)]);
var state_15703__$1 = state_15703;
var statearr_15705_15729 = state_15703__$1;
(statearr_15705_15729[(2)] = inst_15685);

(statearr_15705_15729[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15704 === (1))){
var inst_15679 = cljs.core.seq.call(null,coll);
var inst_15680 = inst_15679;
var state_15703__$1 = (function (){var statearr_15706 = state_15703;
(statearr_15706[(7)] = inst_15680);

return statearr_15706;
})();
var statearr_15707_15730 = state_15703__$1;
(statearr_15707_15730[(2)] = null);

(statearr_15707_15730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15704 === (4))){
var inst_15680 = (state_15703[(7)]);
var inst_15683 = cljs.core.first.call(null,inst_15680);
var state_15703__$1 = state_15703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15703__$1,(7),ch,inst_15683);
} else {
if((state_val_15704 === (13))){
var inst_15697 = (state_15703[(2)]);
var state_15703__$1 = state_15703;
var statearr_15708_15731 = state_15703__$1;
(statearr_15708_15731[(2)] = inst_15697);

(statearr_15708_15731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15704 === (6))){
var inst_15688 = (state_15703[(2)]);
var state_15703__$1 = state_15703;
if(cljs.core.truth_(inst_15688)){
var statearr_15709_15732 = state_15703__$1;
(statearr_15709_15732[(1)] = (8));

} else {
var statearr_15710_15733 = state_15703__$1;
(statearr_15710_15733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15704 === (3))){
var inst_15701 = (state_15703[(2)]);
var state_15703__$1 = state_15703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15703__$1,inst_15701);
} else {
if((state_val_15704 === (12))){
var state_15703__$1 = state_15703;
var statearr_15711_15734 = state_15703__$1;
(statearr_15711_15734[(2)] = null);

(statearr_15711_15734[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15704 === (2))){
var inst_15680 = (state_15703[(7)]);
var state_15703__$1 = state_15703;
if(cljs.core.truth_(inst_15680)){
var statearr_15712_15735 = state_15703__$1;
(statearr_15712_15735[(1)] = (4));

} else {
var statearr_15713_15736 = state_15703__$1;
(statearr_15713_15736[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15704 === (11))){
var inst_15694 = cljs.core.async.close_BANG_.call(null,ch);
var state_15703__$1 = state_15703;
var statearr_15714_15737 = state_15703__$1;
(statearr_15714_15737[(2)] = inst_15694);

(statearr_15714_15737[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15704 === (9))){
var state_15703__$1 = state_15703;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15715_15738 = state_15703__$1;
(statearr_15715_15738[(1)] = (11));

} else {
var statearr_15716_15739 = state_15703__$1;
(statearr_15716_15739[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15704 === (5))){
var inst_15680 = (state_15703[(7)]);
var state_15703__$1 = state_15703;
var statearr_15717_15740 = state_15703__$1;
(statearr_15717_15740[(2)] = inst_15680);

(statearr_15717_15740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15704 === (10))){
var inst_15699 = (state_15703[(2)]);
var state_15703__$1 = state_15703;
var statearr_15718_15741 = state_15703__$1;
(statearr_15718_15741[(2)] = inst_15699);

(statearr_15718_15741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15704 === (8))){
var inst_15680 = (state_15703[(7)]);
var inst_15690 = cljs.core.next.call(null,inst_15680);
var inst_15680__$1 = inst_15690;
var state_15703__$1 = (function (){var statearr_15719 = state_15703;
(statearr_15719[(7)] = inst_15680__$1);

return statearr_15719;
})();
var statearr_15720_15742 = state_15703__$1;
(statearr_15720_15742[(2)] = null);

(statearr_15720_15742[(1)] = (2));


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
}
}
}
}
}
});})(c__6533__auto__))
;
return ((function (switch__6471__auto__,c__6533__auto__){
return (function() {
var cljs$core$async$state_machine__6472__auto__ = null;
var cljs$core$async$state_machine__6472__auto____0 = (function (){
var statearr_15724 = [null,null,null,null,null,null,null,null];
(statearr_15724[(0)] = cljs$core$async$state_machine__6472__auto__);

(statearr_15724[(1)] = (1));

return statearr_15724;
});
var cljs$core$async$state_machine__6472__auto____1 = (function (state_15703){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_15703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e15725){if((e15725 instanceof Object)){
var ex__6475__auto__ = e15725;
var statearr_15726_15743 = state_15703;
(statearr_15726_15743[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15744 = state_15703;
state_15703 = G__15744;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
cljs$core$async$state_machine__6472__auto__ = function(state_15703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6472__auto____1.call(this,state_15703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6472__auto____0;
cljs$core$async$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6472__auto____1;
return cljs$core$async$state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto__))
})();
var state__6535__auto__ = (function (){var statearr_15727 = f__6534__auto__.call(null);
(statearr_15727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto__);

return statearr_15727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto__))
);

return c__6533__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj15746 = {};
return obj15746;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4158__auto__ = _;
if(and__4158__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4158__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4806__auto__ = (((_ == null))?null:_);
return (function (){var or__4170__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj15748 = {};
return obj15748;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4158__auto__ = m;
if(and__4158__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4158__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4806__auto__ = (((m == null))?null:m);
return (function (){var or__4170__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4158__auto__ = m;
if(and__4158__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4158__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4806__auto__ = (((m == null))?null:m);
return (function (){var or__4170__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4158__auto__ = m;
if(and__4158__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4158__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4806__auto__ = (((m == null))?null:m);
return (function (){var or__4170__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t15970 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15970 = (function (mult,ch,cs,meta15971){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta15971 = meta15971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15972,meta15971__$1){
var self__ = this;
var _15972__$1 = this;
return (new cljs.core.async.t15970(self__.mult,self__.ch,self__.cs,meta15971__$1));
});})(cs))
;

cljs.core.async.t15970.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15972){
var self__ = this;
var _15972__$1 = this;
return self__.meta15971;
});})(cs))
;

cljs.core.async.t15970.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t15970.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t15970.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t15970.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t15970.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t15970.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t15970.cljs$lang$type = true;

cljs.core.async.t15970.cljs$lang$ctorStr = "cljs.core.async/t15970";

cljs.core.async.t15970.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4749__auto__,writer__4750__auto__,opt__4751__auto__){
return cljs.core._write.call(null,writer__4750__auto__,"cljs.core.async/t15970");
});})(cs))
;

cljs.core.async.__GT_t15970 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t15970(mult__$1,ch__$1,cs__$1,meta15971){
return (new cljs.core.async.t15970(mult__$1,ch__$1,cs__$1,meta15971));
});})(cs))
;

}

return (new cljs.core.async.t15970(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6533__auto___16191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto___16191,cs,m,dchan,dctr,done){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto___16191,cs,m,dchan,dctr,done){
return (function (state_16103){
var state_val_16104 = (state_16103[(1)]);
if((state_val_16104 === (7))){
var inst_16099 = (state_16103[(2)]);
var state_16103__$1 = state_16103;
var statearr_16105_16192 = state_16103__$1;
(statearr_16105_16192[(2)] = inst_16099);

(statearr_16105_16192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (20))){
var inst_16004 = (state_16103[(7)]);
var inst_16014 = cljs.core.first.call(null,inst_16004);
var inst_16015 = cljs.core.nth.call(null,inst_16014,(0),null);
var inst_16016 = cljs.core.nth.call(null,inst_16014,(1),null);
var state_16103__$1 = (function (){var statearr_16106 = state_16103;
(statearr_16106[(8)] = inst_16015);

return statearr_16106;
})();
if(cljs.core.truth_(inst_16016)){
var statearr_16107_16193 = state_16103__$1;
(statearr_16107_16193[(1)] = (22));

} else {
var statearr_16108_16194 = state_16103__$1;
(statearr_16108_16194[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (27))){
var inst_15975 = (state_16103[(9)]);
var inst_16051 = (state_16103[(10)]);
var inst_16044 = (state_16103[(11)]);
var inst_16046 = (state_16103[(12)]);
var inst_16051__$1 = cljs.core._nth.call(null,inst_16044,inst_16046);
var inst_16052 = cljs.core.async.put_BANG_.call(null,inst_16051__$1,inst_15975,done);
var state_16103__$1 = (function (){var statearr_16109 = state_16103;
(statearr_16109[(10)] = inst_16051__$1);

return statearr_16109;
})();
if(cljs.core.truth_(inst_16052)){
var statearr_16110_16195 = state_16103__$1;
(statearr_16110_16195[(1)] = (30));

} else {
var statearr_16111_16196 = state_16103__$1;
(statearr_16111_16196[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (1))){
var state_16103__$1 = state_16103;
var statearr_16112_16197 = state_16103__$1;
(statearr_16112_16197[(2)] = null);

(statearr_16112_16197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (24))){
var inst_16004 = (state_16103[(7)]);
var inst_16021 = (state_16103[(2)]);
var inst_16022 = cljs.core.next.call(null,inst_16004);
var inst_15984 = inst_16022;
var inst_15985 = null;
var inst_15986 = (0);
var inst_15987 = (0);
var state_16103__$1 = (function (){var statearr_16113 = state_16103;
(statearr_16113[(13)] = inst_15984);

(statearr_16113[(14)] = inst_15985);

(statearr_16113[(15)] = inst_15987);

(statearr_16113[(16)] = inst_15986);

(statearr_16113[(17)] = inst_16021);

return statearr_16113;
})();
var statearr_16114_16198 = state_16103__$1;
(statearr_16114_16198[(2)] = null);

(statearr_16114_16198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (39))){
var state_16103__$1 = state_16103;
var statearr_16118_16199 = state_16103__$1;
(statearr_16118_16199[(2)] = null);

(statearr_16118_16199[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (4))){
var inst_15975 = (state_16103[(9)]);
var inst_15975__$1 = (state_16103[(2)]);
var inst_15976 = (inst_15975__$1 == null);
var state_16103__$1 = (function (){var statearr_16119 = state_16103;
(statearr_16119[(9)] = inst_15975__$1);

return statearr_16119;
})();
if(cljs.core.truth_(inst_15976)){
var statearr_16120_16200 = state_16103__$1;
(statearr_16120_16200[(1)] = (5));

} else {
var statearr_16121_16201 = state_16103__$1;
(statearr_16121_16201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (15))){
var inst_15984 = (state_16103[(13)]);
var inst_15985 = (state_16103[(14)]);
var inst_15987 = (state_16103[(15)]);
var inst_15986 = (state_16103[(16)]);
var inst_16000 = (state_16103[(2)]);
var inst_16001 = (inst_15987 + (1));
var tmp16115 = inst_15984;
var tmp16116 = inst_15985;
var tmp16117 = inst_15986;
var inst_15984__$1 = tmp16115;
var inst_15985__$1 = tmp16116;
var inst_15986__$1 = tmp16117;
var inst_15987__$1 = inst_16001;
var state_16103__$1 = (function (){var statearr_16122 = state_16103;
(statearr_16122[(13)] = inst_15984__$1);

(statearr_16122[(14)] = inst_15985__$1);

(statearr_16122[(15)] = inst_15987__$1);

(statearr_16122[(18)] = inst_16000);

(statearr_16122[(16)] = inst_15986__$1);

return statearr_16122;
})();
var statearr_16123_16202 = state_16103__$1;
(statearr_16123_16202[(2)] = null);

(statearr_16123_16202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (21))){
var inst_16025 = (state_16103[(2)]);
var state_16103__$1 = state_16103;
var statearr_16127_16203 = state_16103__$1;
(statearr_16127_16203[(2)] = inst_16025);

(statearr_16127_16203[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (31))){
var inst_16051 = (state_16103[(10)]);
var inst_16055 = done.call(null,null);
var inst_16056 = cljs.core.async.untap_STAR_.call(null,m,inst_16051);
var state_16103__$1 = (function (){var statearr_16128 = state_16103;
(statearr_16128[(19)] = inst_16055);

return statearr_16128;
})();
var statearr_16129_16204 = state_16103__$1;
(statearr_16129_16204[(2)] = inst_16056);

(statearr_16129_16204[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (32))){
var inst_16043 = (state_16103[(20)]);
var inst_16045 = (state_16103[(21)]);
var inst_16044 = (state_16103[(11)]);
var inst_16046 = (state_16103[(12)]);
var inst_16058 = (state_16103[(2)]);
var inst_16059 = (inst_16046 + (1));
var tmp16124 = inst_16043;
var tmp16125 = inst_16045;
var tmp16126 = inst_16044;
var inst_16043__$1 = tmp16124;
var inst_16044__$1 = tmp16126;
var inst_16045__$1 = tmp16125;
var inst_16046__$1 = inst_16059;
var state_16103__$1 = (function (){var statearr_16130 = state_16103;
(statearr_16130[(22)] = inst_16058);

(statearr_16130[(20)] = inst_16043__$1);

(statearr_16130[(21)] = inst_16045__$1);

(statearr_16130[(11)] = inst_16044__$1);

(statearr_16130[(12)] = inst_16046__$1);

return statearr_16130;
})();
var statearr_16131_16205 = state_16103__$1;
(statearr_16131_16205[(2)] = null);

(statearr_16131_16205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (40))){
var inst_16071 = (state_16103[(23)]);
var inst_16075 = done.call(null,null);
var inst_16076 = cljs.core.async.untap_STAR_.call(null,m,inst_16071);
var state_16103__$1 = (function (){var statearr_16132 = state_16103;
(statearr_16132[(24)] = inst_16075);

return statearr_16132;
})();
var statearr_16133_16206 = state_16103__$1;
(statearr_16133_16206[(2)] = inst_16076);

(statearr_16133_16206[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (33))){
var inst_16062 = (state_16103[(25)]);
var inst_16064 = cljs.core.chunked_seq_QMARK_.call(null,inst_16062);
var state_16103__$1 = state_16103;
if(inst_16064){
var statearr_16134_16207 = state_16103__$1;
(statearr_16134_16207[(1)] = (36));

} else {
var statearr_16135_16208 = state_16103__$1;
(statearr_16135_16208[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (13))){
var inst_15994 = (state_16103[(26)]);
var inst_15997 = cljs.core.async.close_BANG_.call(null,inst_15994);
var state_16103__$1 = state_16103;
var statearr_16136_16209 = state_16103__$1;
(statearr_16136_16209[(2)] = inst_15997);

(statearr_16136_16209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (22))){
var inst_16015 = (state_16103[(8)]);
var inst_16018 = cljs.core.async.close_BANG_.call(null,inst_16015);
var state_16103__$1 = state_16103;
var statearr_16137_16210 = state_16103__$1;
(statearr_16137_16210[(2)] = inst_16018);

(statearr_16137_16210[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (36))){
var inst_16062 = (state_16103[(25)]);
var inst_16066 = cljs.core.chunk_first.call(null,inst_16062);
var inst_16067 = cljs.core.chunk_rest.call(null,inst_16062);
var inst_16068 = cljs.core.count.call(null,inst_16066);
var inst_16043 = inst_16067;
var inst_16044 = inst_16066;
var inst_16045 = inst_16068;
var inst_16046 = (0);
var state_16103__$1 = (function (){var statearr_16138 = state_16103;
(statearr_16138[(20)] = inst_16043);

(statearr_16138[(21)] = inst_16045);

(statearr_16138[(11)] = inst_16044);

(statearr_16138[(12)] = inst_16046);

return statearr_16138;
})();
var statearr_16139_16211 = state_16103__$1;
(statearr_16139_16211[(2)] = null);

(statearr_16139_16211[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (41))){
var inst_16062 = (state_16103[(25)]);
var inst_16078 = (state_16103[(2)]);
var inst_16079 = cljs.core.next.call(null,inst_16062);
var inst_16043 = inst_16079;
var inst_16044 = null;
var inst_16045 = (0);
var inst_16046 = (0);
var state_16103__$1 = (function (){var statearr_16140 = state_16103;
(statearr_16140[(20)] = inst_16043);

(statearr_16140[(27)] = inst_16078);

(statearr_16140[(21)] = inst_16045);

(statearr_16140[(11)] = inst_16044);

(statearr_16140[(12)] = inst_16046);

return statearr_16140;
})();
var statearr_16141_16212 = state_16103__$1;
(statearr_16141_16212[(2)] = null);

(statearr_16141_16212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (43))){
var state_16103__$1 = state_16103;
var statearr_16142_16213 = state_16103__$1;
(statearr_16142_16213[(2)] = null);

(statearr_16142_16213[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (29))){
var inst_16087 = (state_16103[(2)]);
var state_16103__$1 = state_16103;
var statearr_16143_16214 = state_16103__$1;
(statearr_16143_16214[(2)] = inst_16087);

(statearr_16143_16214[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (44))){
var inst_16096 = (state_16103[(2)]);
var state_16103__$1 = (function (){var statearr_16144 = state_16103;
(statearr_16144[(28)] = inst_16096);

return statearr_16144;
})();
var statearr_16145_16215 = state_16103__$1;
(statearr_16145_16215[(2)] = null);

(statearr_16145_16215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (6))){
var inst_16035 = (state_16103[(29)]);
var inst_16034 = cljs.core.deref.call(null,cs);
var inst_16035__$1 = cljs.core.keys.call(null,inst_16034);
var inst_16036 = cljs.core.count.call(null,inst_16035__$1);
var inst_16037 = cljs.core.reset_BANG_.call(null,dctr,inst_16036);
var inst_16042 = cljs.core.seq.call(null,inst_16035__$1);
var inst_16043 = inst_16042;
var inst_16044 = null;
var inst_16045 = (0);
var inst_16046 = (0);
var state_16103__$1 = (function (){var statearr_16146 = state_16103;
(statearr_16146[(20)] = inst_16043);

(statearr_16146[(29)] = inst_16035__$1);

(statearr_16146[(21)] = inst_16045);

(statearr_16146[(11)] = inst_16044);

(statearr_16146[(12)] = inst_16046);

(statearr_16146[(30)] = inst_16037);

return statearr_16146;
})();
var statearr_16147_16216 = state_16103__$1;
(statearr_16147_16216[(2)] = null);

(statearr_16147_16216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (28))){
var inst_16062 = (state_16103[(25)]);
var inst_16043 = (state_16103[(20)]);
var inst_16062__$1 = cljs.core.seq.call(null,inst_16043);
var state_16103__$1 = (function (){var statearr_16148 = state_16103;
(statearr_16148[(25)] = inst_16062__$1);

return statearr_16148;
})();
if(inst_16062__$1){
var statearr_16149_16217 = state_16103__$1;
(statearr_16149_16217[(1)] = (33));

} else {
var statearr_16150_16218 = state_16103__$1;
(statearr_16150_16218[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (25))){
var inst_16045 = (state_16103[(21)]);
var inst_16046 = (state_16103[(12)]);
var inst_16048 = (inst_16046 < inst_16045);
var inst_16049 = inst_16048;
var state_16103__$1 = state_16103;
if(cljs.core.truth_(inst_16049)){
var statearr_16151_16219 = state_16103__$1;
(statearr_16151_16219[(1)] = (27));

} else {
var statearr_16152_16220 = state_16103__$1;
(statearr_16152_16220[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (34))){
var state_16103__$1 = state_16103;
var statearr_16153_16221 = state_16103__$1;
(statearr_16153_16221[(2)] = null);

(statearr_16153_16221[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (17))){
var state_16103__$1 = state_16103;
var statearr_16154_16222 = state_16103__$1;
(statearr_16154_16222[(2)] = null);

(statearr_16154_16222[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (3))){
var inst_16101 = (state_16103[(2)]);
var state_16103__$1 = state_16103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16103__$1,inst_16101);
} else {
if((state_val_16104 === (12))){
var inst_16030 = (state_16103[(2)]);
var state_16103__$1 = state_16103;
var statearr_16155_16223 = state_16103__$1;
(statearr_16155_16223[(2)] = inst_16030);

(statearr_16155_16223[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (2))){
var state_16103__$1 = state_16103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16103__$1,(4),ch);
} else {
if((state_val_16104 === (23))){
var state_16103__$1 = state_16103;
var statearr_16156_16224 = state_16103__$1;
(statearr_16156_16224[(2)] = null);

(statearr_16156_16224[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (35))){
var inst_16085 = (state_16103[(2)]);
var state_16103__$1 = state_16103;
var statearr_16157_16225 = state_16103__$1;
(statearr_16157_16225[(2)] = inst_16085);

(statearr_16157_16225[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (19))){
var inst_16004 = (state_16103[(7)]);
var inst_16008 = cljs.core.chunk_first.call(null,inst_16004);
var inst_16009 = cljs.core.chunk_rest.call(null,inst_16004);
var inst_16010 = cljs.core.count.call(null,inst_16008);
var inst_15984 = inst_16009;
var inst_15985 = inst_16008;
var inst_15986 = inst_16010;
var inst_15987 = (0);
var state_16103__$1 = (function (){var statearr_16158 = state_16103;
(statearr_16158[(13)] = inst_15984);

(statearr_16158[(14)] = inst_15985);

(statearr_16158[(15)] = inst_15987);

(statearr_16158[(16)] = inst_15986);

return statearr_16158;
})();
var statearr_16159_16226 = state_16103__$1;
(statearr_16159_16226[(2)] = null);

(statearr_16159_16226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (11))){
var inst_15984 = (state_16103[(13)]);
var inst_16004 = (state_16103[(7)]);
var inst_16004__$1 = cljs.core.seq.call(null,inst_15984);
var state_16103__$1 = (function (){var statearr_16160 = state_16103;
(statearr_16160[(7)] = inst_16004__$1);

return statearr_16160;
})();
if(inst_16004__$1){
var statearr_16161_16227 = state_16103__$1;
(statearr_16161_16227[(1)] = (16));

} else {
var statearr_16162_16228 = state_16103__$1;
(statearr_16162_16228[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (9))){
var inst_16032 = (state_16103[(2)]);
var state_16103__$1 = state_16103;
var statearr_16163_16229 = state_16103__$1;
(statearr_16163_16229[(2)] = inst_16032);

(statearr_16163_16229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (5))){
var inst_15982 = cljs.core.deref.call(null,cs);
var inst_15983 = cljs.core.seq.call(null,inst_15982);
var inst_15984 = inst_15983;
var inst_15985 = null;
var inst_15986 = (0);
var inst_15987 = (0);
var state_16103__$1 = (function (){var statearr_16164 = state_16103;
(statearr_16164[(13)] = inst_15984);

(statearr_16164[(14)] = inst_15985);

(statearr_16164[(15)] = inst_15987);

(statearr_16164[(16)] = inst_15986);

return statearr_16164;
})();
var statearr_16165_16230 = state_16103__$1;
(statearr_16165_16230[(2)] = null);

(statearr_16165_16230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (14))){
var state_16103__$1 = state_16103;
var statearr_16166_16231 = state_16103__$1;
(statearr_16166_16231[(2)] = null);

(statearr_16166_16231[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (45))){
var inst_16093 = (state_16103[(2)]);
var state_16103__$1 = state_16103;
var statearr_16167_16232 = state_16103__$1;
(statearr_16167_16232[(2)] = inst_16093);

(statearr_16167_16232[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (26))){
var inst_16035 = (state_16103[(29)]);
var inst_16089 = (state_16103[(2)]);
var inst_16090 = cljs.core.seq.call(null,inst_16035);
var state_16103__$1 = (function (){var statearr_16168 = state_16103;
(statearr_16168[(31)] = inst_16089);

return statearr_16168;
})();
if(inst_16090){
var statearr_16169_16233 = state_16103__$1;
(statearr_16169_16233[(1)] = (42));

} else {
var statearr_16170_16234 = state_16103__$1;
(statearr_16170_16234[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (16))){
var inst_16004 = (state_16103[(7)]);
var inst_16006 = cljs.core.chunked_seq_QMARK_.call(null,inst_16004);
var state_16103__$1 = state_16103;
if(inst_16006){
var statearr_16171_16235 = state_16103__$1;
(statearr_16171_16235[(1)] = (19));

} else {
var statearr_16172_16236 = state_16103__$1;
(statearr_16172_16236[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (38))){
var inst_16082 = (state_16103[(2)]);
var state_16103__$1 = state_16103;
var statearr_16173_16237 = state_16103__$1;
(statearr_16173_16237[(2)] = inst_16082);

(statearr_16173_16237[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (30))){
var state_16103__$1 = state_16103;
var statearr_16174_16238 = state_16103__$1;
(statearr_16174_16238[(2)] = null);

(statearr_16174_16238[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (10))){
var inst_15985 = (state_16103[(14)]);
var inst_15987 = (state_16103[(15)]);
var inst_15993 = cljs.core._nth.call(null,inst_15985,inst_15987);
var inst_15994 = cljs.core.nth.call(null,inst_15993,(0),null);
var inst_15995 = cljs.core.nth.call(null,inst_15993,(1),null);
var state_16103__$1 = (function (){var statearr_16175 = state_16103;
(statearr_16175[(26)] = inst_15994);

return statearr_16175;
})();
if(cljs.core.truth_(inst_15995)){
var statearr_16176_16239 = state_16103__$1;
(statearr_16176_16239[(1)] = (13));

} else {
var statearr_16177_16240 = state_16103__$1;
(statearr_16177_16240[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (18))){
var inst_16028 = (state_16103[(2)]);
var state_16103__$1 = state_16103;
var statearr_16178_16241 = state_16103__$1;
(statearr_16178_16241[(2)] = inst_16028);

(statearr_16178_16241[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (42))){
var state_16103__$1 = state_16103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16103__$1,(45),dchan);
} else {
if((state_val_16104 === (37))){
var inst_16062 = (state_16103[(25)]);
var inst_16071 = (state_16103[(23)]);
var inst_15975 = (state_16103[(9)]);
var inst_16071__$1 = cljs.core.first.call(null,inst_16062);
var inst_16072 = cljs.core.async.put_BANG_.call(null,inst_16071__$1,inst_15975,done);
var state_16103__$1 = (function (){var statearr_16179 = state_16103;
(statearr_16179[(23)] = inst_16071__$1);

return statearr_16179;
})();
if(cljs.core.truth_(inst_16072)){
var statearr_16180_16242 = state_16103__$1;
(statearr_16180_16242[(1)] = (39));

} else {
var statearr_16181_16243 = state_16103__$1;
(statearr_16181_16243[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16104 === (8))){
var inst_15987 = (state_16103[(15)]);
var inst_15986 = (state_16103[(16)]);
var inst_15989 = (inst_15987 < inst_15986);
var inst_15990 = inst_15989;
var state_16103__$1 = state_16103;
if(cljs.core.truth_(inst_15990)){
var statearr_16182_16244 = state_16103__$1;
(statearr_16182_16244[(1)] = (10));

} else {
var statearr_16183_16245 = state_16103__$1;
(statearr_16183_16245[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6533__auto___16191,cs,m,dchan,dctr,done))
;
return ((function (switch__6471__auto__,c__6533__auto___16191,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6472__auto__ = null;
var cljs$core$async$mult_$_state_machine__6472__auto____0 = (function (){
var statearr_16187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16187[(0)] = cljs$core$async$mult_$_state_machine__6472__auto__);

(statearr_16187[(1)] = (1));

return statearr_16187;
});
var cljs$core$async$mult_$_state_machine__6472__auto____1 = (function (state_16103){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_16103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e16188){if((e16188 instanceof Object)){
var ex__6475__auto__ = e16188;
var statearr_16189_16246 = state_16103;
(statearr_16189_16246[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16247 = state_16103;
state_16103 = G__16247;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6472__auto__ = function(state_16103){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6472__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6472__auto____1.call(this,state_16103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6472__auto____0;
cljs$core$async$mult_$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6472__auto____1;
return cljs$core$async$mult_$_state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto___16191,cs,m,dchan,dctr,done))
})();
var state__6535__auto__ = (function (){var statearr_16190 = f__6534__auto__.call(null);
(statearr_16190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto___16191);

return statearr_16190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto___16191,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__16249 = arguments.length;
switch (G__16249) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj16252 = {};
return obj16252;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4158__auto__ = m;
if(and__4158__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4158__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4806__auto__ = (((m == null))?null:m);
return (function (){var or__4170__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4158__auto__ = m;
if(and__4158__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4158__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4806__auto__ = (((m == null))?null:m);
return (function (){var or__4170__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4158__auto__ = m;
if(and__4158__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4158__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4806__auto__ = (((m == null))?null:m);
return (function (){var or__4170__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4158__auto__ = m;
if(and__4158__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4158__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4806__auto__ = (((m == null))?null:m);
return (function (){var or__4170__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4158__auto__ = m;
if(and__4158__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4158__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4806__auto__ = (((m == null))?null:m);
return (function (){var or__4170__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5210__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5210__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16257){
var map__16258 = p__16257;
var map__16258__$1 = ((cljs.core.seq_QMARK_.call(null,map__16258))?cljs.core.apply.call(null,cljs.core.hash_map,map__16258):map__16258);
var opts = map__16258__$1;
var statearr_16259_16262 = state;
(statearr_16259_16262[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4422__auto__ = cljs.core.async.do_alts.call(null,((function (map__16258,map__16258__$1,opts){
return (function (val){
var statearr_16260_16263 = state;
(statearr_16260_16263[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__16258,map__16258__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4422__auto__)){
var cb = temp__4422__auto__;
var statearr_16261_16264 = state;
(statearr_16261_16264[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16253){
var G__16254 = cljs.core.first.call(null,seq16253);
var seq16253__$1 = cljs.core.next.call(null,seq16253);
var G__16255 = cljs.core.first.call(null,seq16253__$1);
var seq16253__$2 = cljs.core.next.call(null,seq16253__$1);
var G__16256 = cljs.core.first.call(null,seq16253__$2);
var seq16253__$3 = cljs.core.next.call(null,seq16253__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16254,G__16255,G__16256,seq16253__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t16384 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16384 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16385){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16385 = meta16385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16386,meta16385__$1){
var self__ = this;
var _16386__$1 = this;
return (new cljs.core.async.t16384(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16385__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16384.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16386){
var self__ = this;
var _16386__$1 = this;
return self__.meta16385;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16384.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16384.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16384.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t16384.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16384.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16384.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16384.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16384.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16384.cljs$lang$type = true;

cljs.core.async.t16384.cljs$lang$ctorStr = "cljs.core.async/t16384";

cljs.core.async.t16384.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4749__auto__,writer__4750__auto__,opt__4751__auto__){
return cljs.core._write.call(null,writer__4750__auto__,"cljs.core.async/t16384");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t16384 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t16384(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16385){
return (new cljs.core.async.t16384(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16385));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t16384(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6533__auto___16503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto___16503,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto___16503,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16456){
var state_val_16457 = (state_16456[(1)]);
if((state_val_16457 === (7))){
var inst_16400 = (state_16456[(7)]);
var inst_16405 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16400);
var state_16456__$1 = state_16456;
var statearr_16458_16504 = state_16456__$1;
(statearr_16458_16504[(2)] = inst_16405);

(statearr_16458_16504[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (20))){
var inst_16415 = (state_16456[(8)]);
var state_16456__$1 = state_16456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16456__$1,(23),out,inst_16415);
} else {
if((state_val_16457 === (1))){
var inst_16390 = (state_16456[(9)]);
var inst_16390__$1 = calc_state.call(null);
var inst_16391 = cljs.core.seq_QMARK_.call(null,inst_16390__$1);
var state_16456__$1 = (function (){var statearr_16459 = state_16456;
(statearr_16459[(9)] = inst_16390__$1);

return statearr_16459;
})();
if(inst_16391){
var statearr_16460_16505 = state_16456__$1;
(statearr_16460_16505[(1)] = (2));

} else {
var statearr_16461_16506 = state_16456__$1;
(statearr_16461_16506[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (24))){
var inst_16408 = (state_16456[(10)]);
var inst_16400 = inst_16408;
var state_16456__$1 = (function (){var statearr_16462 = state_16456;
(statearr_16462[(7)] = inst_16400);

return statearr_16462;
})();
var statearr_16463_16507 = state_16456__$1;
(statearr_16463_16507[(2)] = null);

(statearr_16463_16507[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (4))){
var inst_16390 = (state_16456[(9)]);
var inst_16396 = (state_16456[(2)]);
var inst_16397 = cljs.core.get.call(null,inst_16396,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16398 = cljs.core.get.call(null,inst_16396,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16399 = cljs.core.get.call(null,inst_16396,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16400 = inst_16390;
var state_16456__$1 = (function (){var statearr_16464 = state_16456;
(statearr_16464[(11)] = inst_16399);

(statearr_16464[(12)] = inst_16397);

(statearr_16464[(7)] = inst_16400);

(statearr_16464[(13)] = inst_16398);

return statearr_16464;
})();
var statearr_16465_16508 = state_16456__$1;
(statearr_16465_16508[(2)] = null);

(statearr_16465_16508[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (15))){
var state_16456__$1 = state_16456;
var statearr_16466_16509 = state_16456__$1;
(statearr_16466_16509[(2)] = null);

(statearr_16466_16509[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (21))){
var inst_16408 = (state_16456[(10)]);
var inst_16400 = inst_16408;
var state_16456__$1 = (function (){var statearr_16467 = state_16456;
(statearr_16467[(7)] = inst_16400);

return statearr_16467;
})();
var statearr_16468_16510 = state_16456__$1;
(statearr_16468_16510[(2)] = null);

(statearr_16468_16510[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (13))){
var inst_16452 = (state_16456[(2)]);
var state_16456__$1 = state_16456;
var statearr_16469_16511 = state_16456__$1;
(statearr_16469_16511[(2)] = inst_16452);

(statearr_16469_16511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (22))){
var inst_16450 = (state_16456[(2)]);
var state_16456__$1 = state_16456;
var statearr_16470_16512 = state_16456__$1;
(statearr_16470_16512[(2)] = inst_16450);

(statearr_16470_16512[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (6))){
var inst_16454 = (state_16456[(2)]);
var state_16456__$1 = state_16456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16456__$1,inst_16454);
} else {
if((state_val_16457 === (25))){
var state_16456__$1 = state_16456;
var statearr_16471_16513 = state_16456__$1;
(statearr_16471_16513[(2)] = null);

(statearr_16471_16513[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (17))){
var inst_16430 = (state_16456[(14)]);
var state_16456__$1 = state_16456;
var statearr_16472_16514 = state_16456__$1;
(statearr_16472_16514[(2)] = inst_16430);

(statearr_16472_16514[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (3))){
var inst_16390 = (state_16456[(9)]);
var state_16456__$1 = state_16456;
var statearr_16473_16515 = state_16456__$1;
(statearr_16473_16515[(2)] = inst_16390);

(statearr_16473_16515[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (12))){
var inst_16409 = (state_16456[(15)]);
var inst_16430 = (state_16456[(14)]);
var inst_16416 = (state_16456[(16)]);
var inst_16430__$1 = inst_16409.call(null,inst_16416);
var state_16456__$1 = (function (){var statearr_16474 = state_16456;
(statearr_16474[(14)] = inst_16430__$1);

return statearr_16474;
})();
if(cljs.core.truth_(inst_16430__$1)){
var statearr_16475_16516 = state_16456__$1;
(statearr_16475_16516[(1)] = (17));

} else {
var statearr_16476_16517 = state_16456__$1;
(statearr_16476_16517[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (2))){
var inst_16390 = (state_16456[(9)]);
var inst_16393 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16390);
var state_16456__$1 = state_16456;
var statearr_16477_16518 = state_16456__$1;
(statearr_16477_16518[(2)] = inst_16393);

(statearr_16477_16518[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (23))){
var inst_16441 = (state_16456[(2)]);
var state_16456__$1 = state_16456;
if(cljs.core.truth_(inst_16441)){
var statearr_16478_16519 = state_16456__$1;
(statearr_16478_16519[(1)] = (24));

} else {
var statearr_16479_16520 = state_16456__$1;
(statearr_16479_16520[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (19))){
var inst_16438 = (state_16456[(2)]);
var state_16456__$1 = state_16456;
if(cljs.core.truth_(inst_16438)){
var statearr_16480_16521 = state_16456__$1;
(statearr_16480_16521[(1)] = (20));

} else {
var statearr_16481_16522 = state_16456__$1;
(statearr_16481_16522[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (11))){
var inst_16415 = (state_16456[(8)]);
var inst_16421 = (inst_16415 == null);
var state_16456__$1 = state_16456;
if(cljs.core.truth_(inst_16421)){
var statearr_16482_16523 = state_16456__$1;
(statearr_16482_16523[(1)] = (14));

} else {
var statearr_16483_16524 = state_16456__$1;
(statearr_16483_16524[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (9))){
var inst_16408 = (state_16456[(10)]);
var inst_16408__$1 = (state_16456[(2)]);
var inst_16409 = cljs.core.get.call(null,inst_16408__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16410 = cljs.core.get.call(null,inst_16408__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16411 = cljs.core.get.call(null,inst_16408__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16456__$1 = (function (){var statearr_16484 = state_16456;
(statearr_16484[(15)] = inst_16409);

(statearr_16484[(10)] = inst_16408__$1);

(statearr_16484[(17)] = inst_16410);

return statearr_16484;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16456__$1,(10),inst_16411);
} else {
if((state_val_16457 === (5))){
var inst_16400 = (state_16456[(7)]);
var inst_16403 = cljs.core.seq_QMARK_.call(null,inst_16400);
var state_16456__$1 = state_16456;
if(inst_16403){
var statearr_16485_16525 = state_16456__$1;
(statearr_16485_16525[(1)] = (7));

} else {
var statearr_16486_16526 = state_16456__$1;
(statearr_16486_16526[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (14))){
var inst_16416 = (state_16456[(16)]);
var inst_16423 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16416);
var state_16456__$1 = state_16456;
var statearr_16487_16527 = state_16456__$1;
(statearr_16487_16527[(2)] = inst_16423);

(statearr_16487_16527[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (26))){
var inst_16446 = (state_16456[(2)]);
var state_16456__$1 = state_16456;
var statearr_16488_16528 = state_16456__$1;
(statearr_16488_16528[(2)] = inst_16446);

(statearr_16488_16528[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (16))){
var inst_16426 = (state_16456[(2)]);
var inst_16427 = calc_state.call(null);
var inst_16400 = inst_16427;
var state_16456__$1 = (function (){var statearr_16489 = state_16456;
(statearr_16489[(7)] = inst_16400);

(statearr_16489[(18)] = inst_16426);

return statearr_16489;
})();
var statearr_16490_16529 = state_16456__$1;
(statearr_16490_16529[(2)] = null);

(statearr_16490_16529[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (10))){
var inst_16415 = (state_16456[(8)]);
var inst_16416 = (state_16456[(16)]);
var inst_16414 = (state_16456[(2)]);
var inst_16415__$1 = cljs.core.nth.call(null,inst_16414,(0),null);
var inst_16416__$1 = cljs.core.nth.call(null,inst_16414,(1),null);
var inst_16417 = (inst_16415__$1 == null);
var inst_16418 = cljs.core._EQ_.call(null,inst_16416__$1,change);
var inst_16419 = (inst_16417) || (inst_16418);
var state_16456__$1 = (function (){var statearr_16491 = state_16456;
(statearr_16491[(8)] = inst_16415__$1);

(statearr_16491[(16)] = inst_16416__$1);

return statearr_16491;
})();
if(cljs.core.truth_(inst_16419)){
var statearr_16492_16530 = state_16456__$1;
(statearr_16492_16530[(1)] = (11));

} else {
var statearr_16493_16531 = state_16456__$1;
(statearr_16493_16531[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (18))){
var inst_16409 = (state_16456[(15)]);
var inst_16410 = (state_16456[(17)]);
var inst_16416 = (state_16456[(16)]);
var inst_16433 = cljs.core.empty_QMARK_.call(null,inst_16409);
var inst_16434 = inst_16410.call(null,inst_16416);
var inst_16435 = cljs.core.not.call(null,inst_16434);
var inst_16436 = (inst_16433) && (inst_16435);
var state_16456__$1 = state_16456;
var statearr_16494_16532 = state_16456__$1;
(statearr_16494_16532[(2)] = inst_16436);

(statearr_16494_16532[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16457 === (8))){
var inst_16400 = (state_16456[(7)]);
var state_16456__$1 = state_16456;
var statearr_16495_16533 = state_16456__$1;
(statearr_16495_16533[(2)] = inst_16400);

(statearr_16495_16533[(1)] = (9));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6533__auto___16503,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6471__auto__,c__6533__auto___16503,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6472__auto__ = null;
var cljs$core$async$mix_$_state_machine__6472__auto____0 = (function (){
var statearr_16499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16499[(0)] = cljs$core$async$mix_$_state_machine__6472__auto__);

(statearr_16499[(1)] = (1));

return statearr_16499;
});
var cljs$core$async$mix_$_state_machine__6472__auto____1 = (function (state_16456){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_16456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e16500){if((e16500 instanceof Object)){
var ex__6475__auto__ = e16500;
var statearr_16501_16534 = state_16456;
(statearr_16501_16534[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16535 = state_16456;
state_16456 = G__16535;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6472__auto__ = function(state_16456){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6472__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6472__auto____1.call(this,state_16456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6472__auto____0;
cljs$core$async$mix_$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6472__auto____1;
return cljs$core$async$mix_$_state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto___16503,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6535__auto__ = (function (){var statearr_16502 = f__6534__auto__.call(null);
(statearr_16502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto___16503);

return statearr_16502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto___16503,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj16537 = {};
return obj16537;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4158__auto__ = p;
if(and__4158__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4158__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4806__auto__ = (((p == null))?null:p);
return (function (){var or__4170__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4158__auto__ = p;
if(and__4158__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4158__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4806__auto__ = (((p == null))?null:p);
return (function (){var or__4170__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__16539 = arguments.length;
switch (G__16539) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4158__auto__ = p;
if(and__4158__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4158__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4806__auto__ = (((p == null))?null:p);
return (function (){var or__4170__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4158__auto__ = p;
if(and__4158__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4158__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4806__auto__ = (((p == null))?null:p);
return (function (){var or__4170__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__16543 = arguments.length;
switch (G__16543) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4170__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4170__auto__)){
return or__4170__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4170__auto__,mults){
return (function (p1__16541_SHARP_){
if(cljs.core.truth_(p1__16541_SHARP_.call(null,topic))){
return p1__16541_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16541_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4170__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t16544 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16544 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16545){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16545 = meta16545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16546,meta16545__$1){
var self__ = this;
var _16546__$1 = this;
return (new cljs.core.async.t16544(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16545__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t16544.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16546){
var self__ = this;
var _16546__$1 = this;
return self__.meta16545;
});})(mults,ensure_mult))
;

cljs.core.async.t16544.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16544.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t16544.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t16544.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t16544.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4422__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4422__auto__)){
var m = temp__4422__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t16544.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t16544.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t16544.cljs$lang$type = true;

cljs.core.async.t16544.cljs$lang$ctorStr = "cljs.core.async/t16544";

cljs.core.async.t16544.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4749__auto__,writer__4750__auto__,opt__4751__auto__){
return cljs.core._write.call(null,writer__4750__auto__,"cljs.core.async/t16544");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t16544 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t16544(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16545){
return (new cljs.core.async.t16544(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16545));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t16544(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6533__auto___16667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto___16667,mults,ensure_mult,p){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto___16667,mults,ensure_mult,p){
return (function (state_16618){
var state_val_16619 = (state_16618[(1)]);
if((state_val_16619 === (7))){
var inst_16614 = (state_16618[(2)]);
var state_16618__$1 = state_16618;
var statearr_16620_16668 = state_16618__$1;
(statearr_16620_16668[(2)] = inst_16614);

(statearr_16620_16668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16619 === (20))){
var state_16618__$1 = state_16618;
var statearr_16621_16669 = state_16618__$1;
(statearr_16621_16669[(2)] = null);

(statearr_16621_16669[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16619 === (1))){
var state_16618__$1 = state_16618;
var statearr_16622_16670 = state_16618__$1;
(statearr_16622_16670[(2)] = null);

(statearr_16622_16670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16619 === (24))){
var inst_16597 = (state_16618[(7)]);
var inst_16606 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16597);
var state_16618__$1 = state_16618;
var statearr_16623_16671 = state_16618__$1;
(statearr_16623_16671[(2)] = inst_16606);

(statearr_16623_16671[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16619 === (4))){
var inst_16549 = (state_16618[(8)]);
var inst_16549__$1 = (state_16618[(2)]);
var inst_16550 = (inst_16549__$1 == null);
var state_16618__$1 = (function (){var statearr_16624 = state_16618;
(statearr_16624[(8)] = inst_16549__$1);

return statearr_16624;
})();
if(cljs.core.truth_(inst_16550)){
var statearr_16625_16672 = state_16618__$1;
(statearr_16625_16672[(1)] = (5));

} else {
var statearr_16626_16673 = state_16618__$1;
(statearr_16626_16673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16619 === (15))){
var inst_16591 = (state_16618[(2)]);
var state_16618__$1 = state_16618;
var statearr_16627_16674 = state_16618__$1;
(statearr_16627_16674[(2)] = inst_16591);

(statearr_16627_16674[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16619 === (21))){
var inst_16611 = (state_16618[(2)]);
var state_16618__$1 = (function (){var statearr_16628 = state_16618;
(statearr_16628[(9)] = inst_16611);

return statearr_16628;
})();
var statearr_16629_16675 = state_16618__$1;
(statearr_16629_16675[(2)] = null);

(statearr_16629_16675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16619 === (13))){
var inst_16573 = (state_16618[(10)]);
var inst_16575 = cljs.core.chunked_seq_QMARK_.call(null,inst_16573);
var state_16618__$1 = state_16618;
if(inst_16575){
var statearr_16630_16676 = state_16618__$1;
(statearr_16630_16676[(1)] = (16));

} else {
var statearr_16631_16677 = state_16618__$1;
(statearr_16631_16677[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16619 === (22))){
var inst_16603 = (state_16618[(2)]);
var state_16618__$1 = state_16618;
if(cljs.core.truth_(inst_16603)){
var statearr_16632_16678 = state_16618__$1;
(statearr_16632_16678[(1)] = (23));

} else {
var statearr_16633_16679 = state_16618__$1;
(statearr_16633_16679[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16619 === (6))){
var inst_16599 = (state_16618[(11)]);
var inst_16549 = (state_16618[(8)]);
var inst_16597 = (state_16618[(7)]);
var inst_16597__$1 = topic_fn.call(null,inst_16549);
var inst_16598 = cljs.core.deref.call(null,mults);
var inst_16599__$1 = cljs.core.get.call(null,inst_16598,inst_16597__$1);
var state_16618__$1 = (function (){var statearr_16634 = state_16618;
(statearr_16634[(11)] = inst_16599__$1);

(statearr_16634[(7)] = inst_16597__$1);

return statearr_16634;
})();
if(cljs.core.truth_(inst_16599__$1)){
var statearr_16635_16680 = state_16618__$1;
(statearr_16635_16680[(1)] = (19));

} else {
var statearr_16636_16681 = state_16618__$1;
(statearr_16636_16681[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16619 === (25))){
var inst_16608 = (state_16618[(2)]);
var state_16618__$1 = state_16618;
var statearr_16637_16682 = state_16618__$1;
(statearr_16637_16682[(2)] = inst_16608);

(statearr_16637_16682[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16619 === (17))){
var inst_16573 = (state_16618[(10)]);
var inst_16582 = cljs.core.first.call(null,inst_16573);
var inst_16583 = cljs.core.async.muxch_STAR_.call(null,inst_16582);
var inst_16584 = cljs.core.async.close_BANG_.call(null,inst_16583);
var inst_16585 = cljs.core.next.call(null,inst_16573);
var inst_16559 = inst_16585;
var inst_16560 = null;
var inst_16561 = (0);
var inst_16562 = (0);
var state_16618__$1 = (function (){var statearr_16638 = state_16618;
(statearr_16638[(12)] = inst_16562);

(statearr_16638[(13)] = inst_16560);

(statearr_16638[(14)] = inst_16561);

(statearr_16638[(15)] = inst_16584);

(statearr_16638[(16)] = inst_16559);

return statearr_16638;
})();
var statearr_16639_16683 = state_16618__$1;
(statearr_16639_16683[(2)] = null);

(statearr_16639_16683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16619 === (3))){
var inst_16616 = (state_16618[(2)]);
var state_16618__$1 = state_16618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16618__$1,inst_16616);
} else {
if((state_val_16619 === (12))){
var inst_16593 = (state_16618[(2)]);
var state_16618__$1 = state_16618;
var statearr_16640_16684 = state_16618__$1;
(statearr_16640_16684[(2)] = inst_16593);

(statearr_16640_16684[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16619 === (2))){
var state_16618__$1 = state_16618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16618__$1,(4),ch);
} else {
if((state_val_16619 === (23))){
var state_16618__$1 = state_16618;
var statearr_16641_16685 = state_16618__$1;
(statearr_16641_16685[(2)] = null);

(statearr_16641_16685[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16619 === (19))){
var inst_16599 = (state_16618[(11)]);
var inst_16549 = (state_16618[(8)]);
var inst_16601 = cljs.core.async.muxch_STAR_.call(null,inst_16599);
var state_16618__$1 = state_16618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16618__$1,(22),inst_16601,inst_16549);
} else {
if((state_val_16619 === (11))){
var inst_16573 = (state_16618[(10)]);
var inst_16559 = (state_16618[(16)]);
var inst_16573__$1 = cljs.core.seq.call(null,inst_16559);
var state_16618__$1 = (function (){var statearr_16642 = state_16618;
(statearr_16642[(10)] = inst_16573__$1);

return statearr_16642;
})();
if(inst_16573__$1){
var statearr_16643_16686 = state_16618__$1;
(statearr_16643_16686[(1)] = (13));

} else {
var statearr_16644_16687 = state_16618__$1;
(statearr_16644_16687[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16619 === (9))){
var inst_16595 = (state_16618[(2)]);
var state_16618__$1 = state_16618;
var statearr_16645_16688 = state_16618__$1;
(statearr_16645_16688[(2)] = inst_16595);

(statearr_16645_16688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16619 === (5))){
var inst_16556 = cljs.core.deref.call(null,mults);
var inst_16557 = cljs.core.vals.call(null,inst_16556);
var inst_16558 = cljs.core.seq.call(null,inst_16557);
var inst_16559 = inst_16558;
var inst_16560 = null;
var inst_16561 = (0);
var inst_16562 = (0);
var state_16618__$1 = (function (){var statearr_16646 = state_16618;
(statearr_16646[(12)] = inst_16562);

(statearr_16646[(13)] = inst_16560);

(statearr_16646[(14)] = inst_16561);

(statearr_16646[(16)] = inst_16559);

return statearr_16646;
})();
var statearr_16647_16689 = state_16618__$1;
(statearr_16647_16689[(2)] = null);

(statearr_16647_16689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16619 === (14))){
var state_16618__$1 = state_16618;
var statearr_16651_16690 = state_16618__$1;
(statearr_16651_16690[(2)] = null);

(statearr_16651_16690[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16619 === (16))){
var inst_16573 = (state_16618[(10)]);
var inst_16577 = cljs.core.chunk_first.call(null,inst_16573);
var inst_16578 = cljs.core.chunk_rest.call(null,inst_16573);
var inst_16579 = cljs.core.count.call(null,inst_16577);
var inst_16559 = inst_16578;
var inst_16560 = inst_16577;
var inst_16561 = inst_16579;
var inst_16562 = (0);
var state_16618__$1 = (function (){var statearr_16652 = state_16618;
(statearr_16652[(12)] = inst_16562);

(statearr_16652[(13)] = inst_16560);

(statearr_16652[(14)] = inst_16561);

(statearr_16652[(16)] = inst_16559);

return statearr_16652;
})();
var statearr_16653_16691 = state_16618__$1;
(statearr_16653_16691[(2)] = null);

(statearr_16653_16691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16619 === (10))){
var inst_16562 = (state_16618[(12)]);
var inst_16560 = (state_16618[(13)]);
var inst_16561 = (state_16618[(14)]);
var inst_16559 = (state_16618[(16)]);
var inst_16567 = cljs.core._nth.call(null,inst_16560,inst_16562);
var inst_16568 = cljs.core.async.muxch_STAR_.call(null,inst_16567);
var inst_16569 = cljs.core.async.close_BANG_.call(null,inst_16568);
var inst_16570 = (inst_16562 + (1));
var tmp16648 = inst_16560;
var tmp16649 = inst_16561;
var tmp16650 = inst_16559;
var inst_16559__$1 = tmp16650;
var inst_16560__$1 = tmp16648;
var inst_16561__$1 = tmp16649;
var inst_16562__$1 = inst_16570;
var state_16618__$1 = (function (){var statearr_16654 = state_16618;
(statearr_16654[(12)] = inst_16562__$1);

(statearr_16654[(17)] = inst_16569);

(statearr_16654[(13)] = inst_16560__$1);

(statearr_16654[(14)] = inst_16561__$1);

(statearr_16654[(16)] = inst_16559__$1);

return statearr_16654;
})();
var statearr_16655_16692 = state_16618__$1;
(statearr_16655_16692[(2)] = null);

(statearr_16655_16692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16619 === (18))){
var inst_16588 = (state_16618[(2)]);
var state_16618__$1 = state_16618;
var statearr_16656_16693 = state_16618__$1;
(statearr_16656_16693[(2)] = inst_16588);

(statearr_16656_16693[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16619 === (8))){
var inst_16562 = (state_16618[(12)]);
var inst_16561 = (state_16618[(14)]);
var inst_16564 = (inst_16562 < inst_16561);
var inst_16565 = inst_16564;
var state_16618__$1 = state_16618;
if(cljs.core.truth_(inst_16565)){
var statearr_16657_16694 = state_16618__$1;
(statearr_16657_16694[(1)] = (10));

} else {
var statearr_16658_16695 = state_16618__$1;
(statearr_16658_16695[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6533__auto___16667,mults,ensure_mult,p))
;
return ((function (switch__6471__auto__,c__6533__auto___16667,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6472__auto__ = null;
var cljs$core$async$state_machine__6472__auto____0 = (function (){
var statearr_16662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16662[(0)] = cljs$core$async$state_machine__6472__auto__);

(statearr_16662[(1)] = (1));

return statearr_16662;
});
var cljs$core$async$state_machine__6472__auto____1 = (function (state_16618){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_16618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e16663){if((e16663 instanceof Object)){
var ex__6475__auto__ = e16663;
var statearr_16664_16696 = state_16618;
(statearr_16664_16696[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16697 = state_16618;
state_16618 = G__16697;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
cljs$core$async$state_machine__6472__auto__ = function(state_16618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6472__auto____1.call(this,state_16618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6472__auto____0;
cljs$core$async$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6472__auto____1;
return cljs$core$async$state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto___16667,mults,ensure_mult,p))
})();
var state__6535__auto__ = (function (){var statearr_16665 = f__6534__auto__.call(null);
(statearr_16665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto___16667);

return statearr_16665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto___16667,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__16699 = arguments.length;
switch (G__16699) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__16702 = arguments.length;
switch (G__16702) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__16705 = arguments.length;
switch (G__16705) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6533__auto___16775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto___16775,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto___16775,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16744){
var state_val_16745 = (state_16744[(1)]);
if((state_val_16745 === (7))){
var state_16744__$1 = state_16744;
var statearr_16746_16776 = state_16744__$1;
(statearr_16746_16776[(2)] = null);

(statearr_16746_16776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16745 === (1))){
var state_16744__$1 = state_16744;
var statearr_16747_16777 = state_16744__$1;
(statearr_16747_16777[(2)] = null);

(statearr_16747_16777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16745 === (4))){
var inst_16708 = (state_16744[(7)]);
var inst_16710 = (inst_16708 < cnt);
var state_16744__$1 = state_16744;
if(cljs.core.truth_(inst_16710)){
var statearr_16748_16778 = state_16744__$1;
(statearr_16748_16778[(1)] = (6));

} else {
var statearr_16749_16779 = state_16744__$1;
(statearr_16749_16779[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16745 === (15))){
var inst_16740 = (state_16744[(2)]);
var state_16744__$1 = state_16744;
var statearr_16750_16780 = state_16744__$1;
(statearr_16750_16780[(2)] = inst_16740);

(statearr_16750_16780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16745 === (13))){
var inst_16733 = cljs.core.async.close_BANG_.call(null,out);
var state_16744__$1 = state_16744;
var statearr_16751_16781 = state_16744__$1;
(statearr_16751_16781[(2)] = inst_16733);

(statearr_16751_16781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16745 === (6))){
var state_16744__$1 = state_16744;
var statearr_16752_16782 = state_16744__$1;
(statearr_16752_16782[(2)] = null);

(statearr_16752_16782[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16745 === (3))){
var inst_16742 = (state_16744[(2)]);
var state_16744__$1 = state_16744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16744__$1,inst_16742);
} else {
if((state_val_16745 === (12))){
var inst_16730 = (state_16744[(8)]);
var inst_16730__$1 = (state_16744[(2)]);
var inst_16731 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16730__$1);
var state_16744__$1 = (function (){var statearr_16753 = state_16744;
(statearr_16753[(8)] = inst_16730__$1);

return statearr_16753;
})();
if(cljs.core.truth_(inst_16731)){
var statearr_16754_16783 = state_16744__$1;
(statearr_16754_16783[(1)] = (13));

} else {
var statearr_16755_16784 = state_16744__$1;
(statearr_16755_16784[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16745 === (2))){
var inst_16707 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16708 = (0);
var state_16744__$1 = (function (){var statearr_16756 = state_16744;
(statearr_16756[(9)] = inst_16707);

(statearr_16756[(7)] = inst_16708);

return statearr_16756;
})();
var statearr_16757_16785 = state_16744__$1;
(statearr_16757_16785[(2)] = null);

(statearr_16757_16785[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16745 === (11))){
var inst_16708 = (state_16744[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16744,(10),Object,null,(9));
var inst_16717 = chs__$1.call(null,inst_16708);
var inst_16718 = done.call(null,inst_16708);
var inst_16719 = cljs.core.async.take_BANG_.call(null,inst_16717,inst_16718);
var state_16744__$1 = state_16744;
var statearr_16758_16786 = state_16744__$1;
(statearr_16758_16786[(2)] = inst_16719);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16744__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16745 === (9))){
var inst_16708 = (state_16744[(7)]);
var inst_16721 = (state_16744[(2)]);
var inst_16722 = (inst_16708 + (1));
var inst_16708__$1 = inst_16722;
var state_16744__$1 = (function (){var statearr_16759 = state_16744;
(statearr_16759[(10)] = inst_16721);

(statearr_16759[(7)] = inst_16708__$1);

return statearr_16759;
})();
var statearr_16760_16787 = state_16744__$1;
(statearr_16760_16787[(2)] = null);

(statearr_16760_16787[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16745 === (5))){
var inst_16728 = (state_16744[(2)]);
var state_16744__$1 = (function (){var statearr_16761 = state_16744;
(statearr_16761[(11)] = inst_16728);

return statearr_16761;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16744__$1,(12),dchan);
} else {
if((state_val_16745 === (14))){
var inst_16730 = (state_16744[(8)]);
var inst_16735 = cljs.core.apply.call(null,f,inst_16730);
var state_16744__$1 = state_16744;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16744__$1,(16),out,inst_16735);
} else {
if((state_val_16745 === (16))){
var inst_16737 = (state_16744[(2)]);
var state_16744__$1 = (function (){var statearr_16762 = state_16744;
(statearr_16762[(12)] = inst_16737);

return statearr_16762;
})();
var statearr_16763_16788 = state_16744__$1;
(statearr_16763_16788[(2)] = null);

(statearr_16763_16788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16745 === (10))){
var inst_16712 = (state_16744[(2)]);
var inst_16713 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16744__$1 = (function (){var statearr_16764 = state_16744;
(statearr_16764[(13)] = inst_16712);

return statearr_16764;
})();
var statearr_16765_16789 = state_16744__$1;
(statearr_16765_16789[(2)] = inst_16713);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16744__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16745 === (8))){
var inst_16726 = (state_16744[(2)]);
var state_16744__$1 = state_16744;
var statearr_16766_16790 = state_16744__$1;
(statearr_16766_16790[(2)] = inst_16726);

(statearr_16766_16790[(1)] = (5));


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
}
}
}
}
}
}
}
}
});})(c__6533__auto___16775,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6471__auto__,c__6533__auto___16775,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6472__auto__ = null;
var cljs$core$async$state_machine__6472__auto____0 = (function (){
var statearr_16770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16770[(0)] = cljs$core$async$state_machine__6472__auto__);

(statearr_16770[(1)] = (1));

return statearr_16770;
});
var cljs$core$async$state_machine__6472__auto____1 = (function (state_16744){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_16744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e16771){if((e16771 instanceof Object)){
var ex__6475__auto__ = e16771;
var statearr_16772_16791 = state_16744;
(statearr_16772_16791[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16792 = state_16744;
state_16744 = G__16792;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
cljs$core$async$state_machine__6472__auto__ = function(state_16744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6472__auto____1.call(this,state_16744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6472__auto____0;
cljs$core$async$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6472__auto____1;
return cljs$core$async$state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto___16775,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6535__auto__ = (function (){var statearr_16773 = f__6534__auto__.call(null);
(statearr_16773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto___16775);

return statearr_16773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto___16775,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__16795 = arguments.length;
switch (G__16795) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6533__auto___16850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto___16850,out){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto___16850,out){
return (function (state_16825){
var state_val_16826 = (state_16825[(1)]);
if((state_val_16826 === (7))){
var inst_16805 = (state_16825[(7)]);
var inst_16804 = (state_16825[(8)]);
var inst_16804__$1 = (state_16825[(2)]);
var inst_16805__$1 = cljs.core.nth.call(null,inst_16804__$1,(0),null);
var inst_16806 = cljs.core.nth.call(null,inst_16804__$1,(1),null);
var inst_16807 = (inst_16805__$1 == null);
var state_16825__$1 = (function (){var statearr_16827 = state_16825;
(statearr_16827[(9)] = inst_16806);

(statearr_16827[(7)] = inst_16805__$1);

(statearr_16827[(8)] = inst_16804__$1);

return statearr_16827;
})();
if(cljs.core.truth_(inst_16807)){
var statearr_16828_16851 = state_16825__$1;
(statearr_16828_16851[(1)] = (8));

} else {
var statearr_16829_16852 = state_16825__$1;
(statearr_16829_16852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16826 === (1))){
var inst_16796 = cljs.core.vec.call(null,chs);
var inst_16797 = inst_16796;
var state_16825__$1 = (function (){var statearr_16830 = state_16825;
(statearr_16830[(10)] = inst_16797);

return statearr_16830;
})();
var statearr_16831_16853 = state_16825__$1;
(statearr_16831_16853[(2)] = null);

(statearr_16831_16853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16826 === (4))){
var inst_16797 = (state_16825[(10)]);
var state_16825__$1 = state_16825;
return cljs.core.async.ioc_alts_BANG_.call(null,state_16825__$1,(7),inst_16797);
} else {
if((state_val_16826 === (6))){
var inst_16821 = (state_16825[(2)]);
var state_16825__$1 = state_16825;
var statearr_16832_16854 = state_16825__$1;
(statearr_16832_16854[(2)] = inst_16821);

(statearr_16832_16854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16826 === (3))){
var inst_16823 = (state_16825[(2)]);
var state_16825__$1 = state_16825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16825__$1,inst_16823);
} else {
if((state_val_16826 === (2))){
var inst_16797 = (state_16825[(10)]);
var inst_16799 = cljs.core.count.call(null,inst_16797);
var inst_16800 = (inst_16799 > (0));
var state_16825__$1 = state_16825;
if(cljs.core.truth_(inst_16800)){
var statearr_16834_16855 = state_16825__$1;
(statearr_16834_16855[(1)] = (4));

} else {
var statearr_16835_16856 = state_16825__$1;
(statearr_16835_16856[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16826 === (11))){
var inst_16797 = (state_16825[(10)]);
var inst_16814 = (state_16825[(2)]);
var tmp16833 = inst_16797;
var inst_16797__$1 = tmp16833;
var state_16825__$1 = (function (){var statearr_16836 = state_16825;
(statearr_16836[(11)] = inst_16814);

(statearr_16836[(10)] = inst_16797__$1);

return statearr_16836;
})();
var statearr_16837_16857 = state_16825__$1;
(statearr_16837_16857[(2)] = null);

(statearr_16837_16857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16826 === (9))){
var inst_16805 = (state_16825[(7)]);
var state_16825__$1 = state_16825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16825__$1,(11),out,inst_16805);
} else {
if((state_val_16826 === (5))){
var inst_16819 = cljs.core.async.close_BANG_.call(null,out);
var state_16825__$1 = state_16825;
var statearr_16838_16858 = state_16825__$1;
(statearr_16838_16858[(2)] = inst_16819);

(statearr_16838_16858[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16826 === (10))){
var inst_16817 = (state_16825[(2)]);
var state_16825__$1 = state_16825;
var statearr_16839_16859 = state_16825__$1;
(statearr_16839_16859[(2)] = inst_16817);

(statearr_16839_16859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16826 === (8))){
var inst_16806 = (state_16825[(9)]);
var inst_16805 = (state_16825[(7)]);
var inst_16804 = (state_16825[(8)]);
var inst_16797 = (state_16825[(10)]);
var inst_16809 = (function (){var cs = inst_16797;
var vec__16802 = inst_16804;
var v = inst_16805;
var c = inst_16806;
return ((function (cs,vec__16802,v,c,inst_16806,inst_16805,inst_16804,inst_16797,state_val_16826,c__6533__auto___16850,out){
return (function (p1__16793_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__16793_SHARP_);
});
;})(cs,vec__16802,v,c,inst_16806,inst_16805,inst_16804,inst_16797,state_val_16826,c__6533__auto___16850,out))
})();
var inst_16810 = cljs.core.filterv.call(null,inst_16809,inst_16797);
var inst_16797__$1 = inst_16810;
var state_16825__$1 = (function (){var statearr_16840 = state_16825;
(statearr_16840[(10)] = inst_16797__$1);

return statearr_16840;
})();
var statearr_16841_16860 = state_16825__$1;
(statearr_16841_16860[(2)] = null);

(statearr_16841_16860[(1)] = (2));


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
}
}
}
});})(c__6533__auto___16850,out))
;
return ((function (switch__6471__auto__,c__6533__auto___16850,out){
return (function() {
var cljs$core$async$state_machine__6472__auto__ = null;
var cljs$core$async$state_machine__6472__auto____0 = (function (){
var statearr_16845 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16845[(0)] = cljs$core$async$state_machine__6472__auto__);

(statearr_16845[(1)] = (1));

return statearr_16845;
});
var cljs$core$async$state_machine__6472__auto____1 = (function (state_16825){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_16825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e16846){if((e16846 instanceof Object)){
var ex__6475__auto__ = e16846;
var statearr_16847_16861 = state_16825;
(statearr_16847_16861[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16862 = state_16825;
state_16825 = G__16862;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
cljs$core$async$state_machine__6472__auto__ = function(state_16825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6472__auto____1.call(this,state_16825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6472__auto____0;
cljs$core$async$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6472__auto____1;
return cljs$core$async$state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto___16850,out))
})();
var state__6535__auto__ = (function (){var statearr_16848 = f__6534__auto__.call(null);
(statearr_16848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto___16850);

return statearr_16848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto___16850,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__16864 = arguments.length;
switch (G__16864) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6533__auto___16912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto___16912,out){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto___16912,out){
return (function (state_16888){
var state_val_16889 = (state_16888[(1)]);
if((state_val_16889 === (7))){
var inst_16870 = (state_16888[(7)]);
var inst_16870__$1 = (state_16888[(2)]);
var inst_16871 = (inst_16870__$1 == null);
var inst_16872 = cljs.core.not.call(null,inst_16871);
var state_16888__$1 = (function (){var statearr_16890 = state_16888;
(statearr_16890[(7)] = inst_16870__$1);

return statearr_16890;
})();
if(inst_16872){
var statearr_16891_16913 = state_16888__$1;
(statearr_16891_16913[(1)] = (8));

} else {
var statearr_16892_16914 = state_16888__$1;
(statearr_16892_16914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16889 === (1))){
var inst_16865 = (0);
var state_16888__$1 = (function (){var statearr_16893 = state_16888;
(statearr_16893[(8)] = inst_16865);

return statearr_16893;
})();
var statearr_16894_16915 = state_16888__$1;
(statearr_16894_16915[(2)] = null);

(statearr_16894_16915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16889 === (4))){
var state_16888__$1 = state_16888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16888__$1,(7),ch);
} else {
if((state_val_16889 === (6))){
var inst_16883 = (state_16888[(2)]);
var state_16888__$1 = state_16888;
var statearr_16895_16916 = state_16888__$1;
(statearr_16895_16916[(2)] = inst_16883);

(statearr_16895_16916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16889 === (3))){
var inst_16885 = (state_16888[(2)]);
var inst_16886 = cljs.core.async.close_BANG_.call(null,out);
var state_16888__$1 = (function (){var statearr_16896 = state_16888;
(statearr_16896[(9)] = inst_16885);

return statearr_16896;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16888__$1,inst_16886);
} else {
if((state_val_16889 === (2))){
var inst_16865 = (state_16888[(8)]);
var inst_16867 = (inst_16865 < n);
var state_16888__$1 = state_16888;
if(cljs.core.truth_(inst_16867)){
var statearr_16897_16917 = state_16888__$1;
(statearr_16897_16917[(1)] = (4));

} else {
var statearr_16898_16918 = state_16888__$1;
(statearr_16898_16918[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16889 === (11))){
var inst_16865 = (state_16888[(8)]);
var inst_16875 = (state_16888[(2)]);
var inst_16876 = (inst_16865 + (1));
var inst_16865__$1 = inst_16876;
var state_16888__$1 = (function (){var statearr_16899 = state_16888;
(statearr_16899[(8)] = inst_16865__$1);

(statearr_16899[(10)] = inst_16875);

return statearr_16899;
})();
var statearr_16900_16919 = state_16888__$1;
(statearr_16900_16919[(2)] = null);

(statearr_16900_16919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16889 === (9))){
var state_16888__$1 = state_16888;
var statearr_16901_16920 = state_16888__$1;
(statearr_16901_16920[(2)] = null);

(statearr_16901_16920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16889 === (5))){
var state_16888__$1 = state_16888;
var statearr_16902_16921 = state_16888__$1;
(statearr_16902_16921[(2)] = null);

(statearr_16902_16921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16889 === (10))){
var inst_16880 = (state_16888[(2)]);
var state_16888__$1 = state_16888;
var statearr_16903_16922 = state_16888__$1;
(statearr_16903_16922[(2)] = inst_16880);

(statearr_16903_16922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16889 === (8))){
var inst_16870 = (state_16888[(7)]);
var state_16888__$1 = state_16888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16888__$1,(11),out,inst_16870);
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
}
}
}
});})(c__6533__auto___16912,out))
;
return ((function (switch__6471__auto__,c__6533__auto___16912,out){
return (function() {
var cljs$core$async$state_machine__6472__auto__ = null;
var cljs$core$async$state_machine__6472__auto____0 = (function (){
var statearr_16907 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16907[(0)] = cljs$core$async$state_machine__6472__auto__);

(statearr_16907[(1)] = (1));

return statearr_16907;
});
var cljs$core$async$state_machine__6472__auto____1 = (function (state_16888){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_16888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e16908){if((e16908 instanceof Object)){
var ex__6475__auto__ = e16908;
var statearr_16909_16923 = state_16888;
(statearr_16909_16923[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16924 = state_16888;
state_16888 = G__16924;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
cljs$core$async$state_machine__6472__auto__ = function(state_16888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6472__auto____1.call(this,state_16888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6472__auto____0;
cljs$core$async$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6472__auto____1;
return cljs$core$async$state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto___16912,out))
})();
var state__6535__auto__ = (function (){var statearr_16910 = f__6534__auto__.call(null);
(statearr_16910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto___16912);

return statearr_16910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto___16912,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t16932 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16932 = (function (map_LT_,f,ch,meta16933){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16933 = meta16933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16934,meta16933__$1){
var self__ = this;
var _16934__$1 = this;
return (new cljs.core.async.t16932(self__.map_LT_,self__.f,self__.ch,meta16933__$1));
});

cljs.core.async.t16932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16934){
var self__ = this;
var _16934__$1 = this;
return self__.meta16933;
});

cljs.core.async.t16932.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16932.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16932.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t16932.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16932.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t16935 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16935 = (function (map_LT_,f,ch,meta16933,_,fn1,meta16936){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16933 = meta16933;
this._ = _;
this.fn1 = fn1;
this.meta16936 = meta16936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16937,meta16936__$1){
var self__ = this;
var _16937__$1 = this;
return (new cljs.core.async.t16935(self__.map_LT_,self__.f,self__.ch,self__.meta16933,self__._,self__.fn1,meta16936__$1));
});})(___$1))
;

cljs.core.async.t16935.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16937){
var self__ = this;
var _16937__$1 = this;
return self__.meta16936;
});})(___$1))
;

cljs.core.async.t16935.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16935.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t16935.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16925_SHARP_){
return f1.call(null,(((p1__16925_SHARP_ == null))?null:self__.f.call(null,p1__16925_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t16935.cljs$lang$type = true;

cljs.core.async.t16935.cljs$lang$ctorStr = "cljs.core.async/t16935";

cljs.core.async.t16935.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4749__auto__,writer__4750__auto__,opt__4751__auto__){
return cljs.core._write.call(null,writer__4750__auto__,"cljs.core.async/t16935");
});})(___$1))
;

cljs.core.async.__GT_t16935 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t16935(map_LT___$1,f__$1,ch__$1,meta16933__$1,___$2,fn1__$1,meta16936){
return (new cljs.core.async.t16935(map_LT___$1,f__$1,ch__$1,meta16933__$1,___$2,fn1__$1,meta16936));
});})(___$1))
;

}

return (new cljs.core.async.t16935(self__.map_LT_,self__.f,self__.ch,self__.meta16933,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4158__auto__ = ret;
if(cljs.core.truth_(and__4158__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4158__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t16932.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16932.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t16932.cljs$lang$type = true;

cljs.core.async.t16932.cljs$lang$ctorStr = "cljs.core.async/t16932";

cljs.core.async.t16932.cljs$lang$ctorPrWriter = (function (this__4749__auto__,writer__4750__auto__,opt__4751__auto__){
return cljs.core._write.call(null,writer__4750__auto__,"cljs.core.async/t16932");
});

cljs.core.async.__GT_t16932 = (function cljs$core$async$map_LT__$___GT_t16932(map_LT___$1,f__$1,ch__$1,meta16933){
return (new cljs.core.async.t16932(map_LT___$1,f__$1,ch__$1,meta16933));
});

}

return (new cljs.core.async.t16932(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t16941 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16941 = (function (map_GT_,f,ch,meta16942){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta16942 = meta16942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16943,meta16942__$1){
var self__ = this;
var _16943__$1 = this;
return (new cljs.core.async.t16941(self__.map_GT_,self__.f,self__.ch,meta16942__$1));
});

cljs.core.async.t16941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16943){
var self__ = this;
var _16943__$1 = this;
return self__.meta16942;
});

cljs.core.async.t16941.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16941.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16941.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16941.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t16941.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16941.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t16941.cljs$lang$type = true;

cljs.core.async.t16941.cljs$lang$ctorStr = "cljs.core.async/t16941";

cljs.core.async.t16941.cljs$lang$ctorPrWriter = (function (this__4749__auto__,writer__4750__auto__,opt__4751__auto__){
return cljs.core._write.call(null,writer__4750__auto__,"cljs.core.async/t16941");
});

cljs.core.async.__GT_t16941 = (function cljs$core$async$map_GT__$___GT_t16941(map_GT___$1,f__$1,ch__$1,meta16942){
return (new cljs.core.async.t16941(map_GT___$1,f__$1,ch__$1,meta16942));
});

}

return (new cljs.core.async.t16941(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t16947 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16947 = (function (filter_GT_,p,ch,meta16948){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta16948 = meta16948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16949,meta16948__$1){
var self__ = this;
var _16949__$1 = this;
return (new cljs.core.async.t16947(self__.filter_GT_,self__.p,self__.ch,meta16948__$1));
});

cljs.core.async.t16947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16949){
var self__ = this;
var _16949__$1 = this;
return self__.meta16948;
});

cljs.core.async.t16947.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16947.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16947.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t16947.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16947.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t16947.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16947.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t16947.cljs$lang$type = true;

cljs.core.async.t16947.cljs$lang$ctorStr = "cljs.core.async/t16947";

cljs.core.async.t16947.cljs$lang$ctorPrWriter = (function (this__4749__auto__,writer__4750__auto__,opt__4751__auto__){
return cljs.core._write.call(null,writer__4750__auto__,"cljs.core.async/t16947");
});

cljs.core.async.__GT_t16947 = (function cljs$core$async$filter_GT__$___GT_t16947(filter_GT___$1,p__$1,ch__$1,meta16948){
return (new cljs.core.async.t16947(filter_GT___$1,p__$1,ch__$1,meta16948));
});

}

return (new cljs.core.async.t16947(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__16951 = arguments.length;
switch (G__16951) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6533__auto___16994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto___16994,out){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto___16994,out){
return (function (state_16972){
var state_val_16973 = (state_16972[(1)]);
if((state_val_16973 === (7))){
var inst_16968 = (state_16972[(2)]);
var state_16972__$1 = state_16972;
var statearr_16974_16995 = state_16972__$1;
(statearr_16974_16995[(2)] = inst_16968);

(statearr_16974_16995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16973 === (1))){
var state_16972__$1 = state_16972;
var statearr_16975_16996 = state_16972__$1;
(statearr_16975_16996[(2)] = null);

(statearr_16975_16996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16973 === (4))){
var inst_16954 = (state_16972[(7)]);
var inst_16954__$1 = (state_16972[(2)]);
var inst_16955 = (inst_16954__$1 == null);
var state_16972__$1 = (function (){var statearr_16976 = state_16972;
(statearr_16976[(7)] = inst_16954__$1);

return statearr_16976;
})();
if(cljs.core.truth_(inst_16955)){
var statearr_16977_16997 = state_16972__$1;
(statearr_16977_16997[(1)] = (5));

} else {
var statearr_16978_16998 = state_16972__$1;
(statearr_16978_16998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16973 === (6))){
var inst_16954 = (state_16972[(7)]);
var inst_16959 = p.call(null,inst_16954);
var state_16972__$1 = state_16972;
if(cljs.core.truth_(inst_16959)){
var statearr_16979_16999 = state_16972__$1;
(statearr_16979_16999[(1)] = (8));

} else {
var statearr_16980_17000 = state_16972__$1;
(statearr_16980_17000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16973 === (3))){
var inst_16970 = (state_16972[(2)]);
var state_16972__$1 = state_16972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16972__$1,inst_16970);
} else {
if((state_val_16973 === (2))){
var state_16972__$1 = state_16972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16972__$1,(4),ch);
} else {
if((state_val_16973 === (11))){
var inst_16962 = (state_16972[(2)]);
var state_16972__$1 = state_16972;
var statearr_16981_17001 = state_16972__$1;
(statearr_16981_17001[(2)] = inst_16962);

(statearr_16981_17001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16973 === (9))){
var state_16972__$1 = state_16972;
var statearr_16982_17002 = state_16972__$1;
(statearr_16982_17002[(2)] = null);

(statearr_16982_17002[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16973 === (5))){
var inst_16957 = cljs.core.async.close_BANG_.call(null,out);
var state_16972__$1 = state_16972;
var statearr_16983_17003 = state_16972__$1;
(statearr_16983_17003[(2)] = inst_16957);

(statearr_16983_17003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16973 === (10))){
var inst_16965 = (state_16972[(2)]);
var state_16972__$1 = (function (){var statearr_16984 = state_16972;
(statearr_16984[(8)] = inst_16965);

return statearr_16984;
})();
var statearr_16985_17004 = state_16972__$1;
(statearr_16985_17004[(2)] = null);

(statearr_16985_17004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16973 === (8))){
var inst_16954 = (state_16972[(7)]);
var state_16972__$1 = state_16972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16972__$1,(11),out,inst_16954);
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
}
}
}
});})(c__6533__auto___16994,out))
;
return ((function (switch__6471__auto__,c__6533__auto___16994,out){
return (function() {
var cljs$core$async$state_machine__6472__auto__ = null;
var cljs$core$async$state_machine__6472__auto____0 = (function (){
var statearr_16989 = [null,null,null,null,null,null,null,null,null];
(statearr_16989[(0)] = cljs$core$async$state_machine__6472__auto__);

(statearr_16989[(1)] = (1));

return statearr_16989;
});
var cljs$core$async$state_machine__6472__auto____1 = (function (state_16972){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_16972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e16990){if((e16990 instanceof Object)){
var ex__6475__auto__ = e16990;
var statearr_16991_17005 = state_16972;
(statearr_16991_17005[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17006 = state_16972;
state_16972 = G__17006;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
cljs$core$async$state_machine__6472__auto__ = function(state_16972){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6472__auto____1.call(this,state_16972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6472__auto____0;
cljs$core$async$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6472__auto____1;
return cljs$core$async$state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto___16994,out))
})();
var state__6535__auto__ = (function (){var statearr_16992 = f__6534__auto__.call(null);
(statearr_16992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto___16994);

return statearr_16992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto___16994,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__17008 = arguments.length;
switch (G__17008) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__6533__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto__){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto__){
return (function (state_17175){
var state_val_17176 = (state_17175[(1)]);
if((state_val_17176 === (7))){
var inst_17171 = (state_17175[(2)]);
var state_17175__$1 = state_17175;
var statearr_17177_17218 = state_17175__$1;
(statearr_17177_17218[(2)] = inst_17171);

(statearr_17177_17218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (20))){
var inst_17141 = (state_17175[(7)]);
var inst_17152 = (state_17175[(2)]);
var inst_17153 = cljs.core.next.call(null,inst_17141);
var inst_17127 = inst_17153;
var inst_17128 = null;
var inst_17129 = (0);
var inst_17130 = (0);
var state_17175__$1 = (function (){var statearr_17178 = state_17175;
(statearr_17178[(8)] = inst_17130);

(statearr_17178[(9)] = inst_17129);

(statearr_17178[(10)] = inst_17128);

(statearr_17178[(11)] = inst_17127);

(statearr_17178[(12)] = inst_17152);

return statearr_17178;
})();
var statearr_17179_17219 = state_17175__$1;
(statearr_17179_17219[(2)] = null);

(statearr_17179_17219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (1))){
var state_17175__$1 = state_17175;
var statearr_17180_17220 = state_17175__$1;
(statearr_17180_17220[(2)] = null);

(statearr_17180_17220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (4))){
var inst_17116 = (state_17175[(13)]);
var inst_17116__$1 = (state_17175[(2)]);
var inst_17117 = (inst_17116__$1 == null);
var state_17175__$1 = (function (){var statearr_17181 = state_17175;
(statearr_17181[(13)] = inst_17116__$1);

return statearr_17181;
})();
if(cljs.core.truth_(inst_17117)){
var statearr_17182_17221 = state_17175__$1;
(statearr_17182_17221[(1)] = (5));

} else {
var statearr_17183_17222 = state_17175__$1;
(statearr_17183_17222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (15))){
var state_17175__$1 = state_17175;
var statearr_17187_17223 = state_17175__$1;
(statearr_17187_17223[(2)] = null);

(statearr_17187_17223[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (21))){
var state_17175__$1 = state_17175;
var statearr_17188_17224 = state_17175__$1;
(statearr_17188_17224[(2)] = null);

(statearr_17188_17224[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (13))){
var inst_17130 = (state_17175[(8)]);
var inst_17129 = (state_17175[(9)]);
var inst_17128 = (state_17175[(10)]);
var inst_17127 = (state_17175[(11)]);
var inst_17137 = (state_17175[(2)]);
var inst_17138 = (inst_17130 + (1));
var tmp17184 = inst_17129;
var tmp17185 = inst_17128;
var tmp17186 = inst_17127;
var inst_17127__$1 = tmp17186;
var inst_17128__$1 = tmp17185;
var inst_17129__$1 = tmp17184;
var inst_17130__$1 = inst_17138;
var state_17175__$1 = (function (){var statearr_17189 = state_17175;
(statearr_17189[(8)] = inst_17130__$1);

(statearr_17189[(9)] = inst_17129__$1);

(statearr_17189[(10)] = inst_17128__$1);

(statearr_17189[(11)] = inst_17127__$1);

(statearr_17189[(14)] = inst_17137);

return statearr_17189;
})();
var statearr_17190_17225 = state_17175__$1;
(statearr_17190_17225[(2)] = null);

(statearr_17190_17225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (22))){
var state_17175__$1 = state_17175;
var statearr_17191_17226 = state_17175__$1;
(statearr_17191_17226[(2)] = null);

(statearr_17191_17226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (6))){
var inst_17116 = (state_17175[(13)]);
var inst_17125 = f.call(null,inst_17116);
var inst_17126 = cljs.core.seq.call(null,inst_17125);
var inst_17127 = inst_17126;
var inst_17128 = null;
var inst_17129 = (0);
var inst_17130 = (0);
var state_17175__$1 = (function (){var statearr_17192 = state_17175;
(statearr_17192[(8)] = inst_17130);

(statearr_17192[(9)] = inst_17129);

(statearr_17192[(10)] = inst_17128);

(statearr_17192[(11)] = inst_17127);

return statearr_17192;
})();
var statearr_17193_17227 = state_17175__$1;
(statearr_17193_17227[(2)] = null);

(statearr_17193_17227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (17))){
var inst_17141 = (state_17175[(7)]);
var inst_17145 = cljs.core.chunk_first.call(null,inst_17141);
var inst_17146 = cljs.core.chunk_rest.call(null,inst_17141);
var inst_17147 = cljs.core.count.call(null,inst_17145);
var inst_17127 = inst_17146;
var inst_17128 = inst_17145;
var inst_17129 = inst_17147;
var inst_17130 = (0);
var state_17175__$1 = (function (){var statearr_17194 = state_17175;
(statearr_17194[(8)] = inst_17130);

(statearr_17194[(9)] = inst_17129);

(statearr_17194[(10)] = inst_17128);

(statearr_17194[(11)] = inst_17127);

return statearr_17194;
})();
var statearr_17195_17228 = state_17175__$1;
(statearr_17195_17228[(2)] = null);

(statearr_17195_17228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (3))){
var inst_17173 = (state_17175[(2)]);
var state_17175__$1 = state_17175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17175__$1,inst_17173);
} else {
if((state_val_17176 === (12))){
var inst_17161 = (state_17175[(2)]);
var state_17175__$1 = state_17175;
var statearr_17196_17229 = state_17175__$1;
(statearr_17196_17229[(2)] = inst_17161);

(statearr_17196_17229[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (2))){
var state_17175__$1 = state_17175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17175__$1,(4),in$);
} else {
if((state_val_17176 === (23))){
var inst_17169 = (state_17175[(2)]);
var state_17175__$1 = state_17175;
var statearr_17197_17230 = state_17175__$1;
(statearr_17197_17230[(2)] = inst_17169);

(statearr_17197_17230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (19))){
var inst_17156 = (state_17175[(2)]);
var state_17175__$1 = state_17175;
var statearr_17198_17231 = state_17175__$1;
(statearr_17198_17231[(2)] = inst_17156);

(statearr_17198_17231[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (11))){
var inst_17127 = (state_17175[(11)]);
var inst_17141 = (state_17175[(7)]);
var inst_17141__$1 = cljs.core.seq.call(null,inst_17127);
var state_17175__$1 = (function (){var statearr_17199 = state_17175;
(statearr_17199[(7)] = inst_17141__$1);

return statearr_17199;
})();
if(inst_17141__$1){
var statearr_17200_17232 = state_17175__$1;
(statearr_17200_17232[(1)] = (14));

} else {
var statearr_17201_17233 = state_17175__$1;
(statearr_17201_17233[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (9))){
var inst_17163 = (state_17175[(2)]);
var inst_17164 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17175__$1 = (function (){var statearr_17202 = state_17175;
(statearr_17202[(15)] = inst_17163);

return statearr_17202;
})();
if(cljs.core.truth_(inst_17164)){
var statearr_17203_17234 = state_17175__$1;
(statearr_17203_17234[(1)] = (21));

} else {
var statearr_17204_17235 = state_17175__$1;
(statearr_17204_17235[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (5))){
var inst_17119 = cljs.core.async.close_BANG_.call(null,out);
var state_17175__$1 = state_17175;
var statearr_17205_17236 = state_17175__$1;
(statearr_17205_17236[(2)] = inst_17119);

(statearr_17205_17236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (14))){
var inst_17141 = (state_17175[(7)]);
var inst_17143 = cljs.core.chunked_seq_QMARK_.call(null,inst_17141);
var state_17175__$1 = state_17175;
if(inst_17143){
var statearr_17206_17237 = state_17175__$1;
(statearr_17206_17237[(1)] = (17));

} else {
var statearr_17207_17238 = state_17175__$1;
(statearr_17207_17238[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (16))){
var inst_17159 = (state_17175[(2)]);
var state_17175__$1 = state_17175;
var statearr_17208_17239 = state_17175__$1;
(statearr_17208_17239[(2)] = inst_17159);

(statearr_17208_17239[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (10))){
var inst_17130 = (state_17175[(8)]);
var inst_17128 = (state_17175[(10)]);
var inst_17135 = cljs.core._nth.call(null,inst_17128,inst_17130);
var state_17175__$1 = state_17175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17175__$1,(13),out,inst_17135);
} else {
if((state_val_17176 === (18))){
var inst_17141 = (state_17175[(7)]);
var inst_17150 = cljs.core.first.call(null,inst_17141);
var state_17175__$1 = state_17175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17175__$1,(20),out,inst_17150);
} else {
if((state_val_17176 === (8))){
var inst_17130 = (state_17175[(8)]);
var inst_17129 = (state_17175[(9)]);
var inst_17132 = (inst_17130 < inst_17129);
var inst_17133 = inst_17132;
var state_17175__$1 = state_17175;
if(cljs.core.truth_(inst_17133)){
var statearr_17209_17240 = state_17175__$1;
(statearr_17209_17240[(1)] = (10));

} else {
var statearr_17210_17241 = state_17175__$1;
(statearr_17210_17241[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6533__auto__))
;
return ((function (switch__6471__auto__,c__6533__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6472__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6472__auto____0 = (function (){
var statearr_17214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17214[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6472__auto__);

(statearr_17214[(1)] = (1));

return statearr_17214;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6472__auto____1 = (function (state_17175){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_17175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e17215){if((e17215 instanceof Object)){
var ex__6475__auto__ = e17215;
var statearr_17216_17242 = state_17175;
(statearr_17216_17242[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17243 = state_17175;
state_17175 = G__17243;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6472__auto__ = function(state_17175){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6472__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6472__auto____1.call(this,state_17175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6472__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6472__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto__))
})();
var state__6535__auto__ = (function (){var statearr_17217 = f__6534__auto__.call(null);
(statearr_17217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto__);

return statearr_17217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto__))
);

return c__6533__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__17245 = arguments.length;
switch (G__17245) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__17248 = arguments.length;
switch (G__17248) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__17251 = arguments.length;
switch (G__17251) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6533__auto___17301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto___17301,out){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto___17301,out){
return (function (state_17275){
var state_val_17276 = (state_17275[(1)]);
if((state_val_17276 === (7))){
var inst_17270 = (state_17275[(2)]);
var state_17275__$1 = state_17275;
var statearr_17277_17302 = state_17275__$1;
(statearr_17277_17302[(2)] = inst_17270);

(statearr_17277_17302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17276 === (1))){
var inst_17252 = null;
var state_17275__$1 = (function (){var statearr_17278 = state_17275;
(statearr_17278[(7)] = inst_17252);

return statearr_17278;
})();
var statearr_17279_17303 = state_17275__$1;
(statearr_17279_17303[(2)] = null);

(statearr_17279_17303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17276 === (4))){
var inst_17255 = (state_17275[(8)]);
var inst_17255__$1 = (state_17275[(2)]);
var inst_17256 = (inst_17255__$1 == null);
var inst_17257 = cljs.core.not.call(null,inst_17256);
var state_17275__$1 = (function (){var statearr_17280 = state_17275;
(statearr_17280[(8)] = inst_17255__$1);

return statearr_17280;
})();
if(inst_17257){
var statearr_17281_17304 = state_17275__$1;
(statearr_17281_17304[(1)] = (5));

} else {
var statearr_17282_17305 = state_17275__$1;
(statearr_17282_17305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17276 === (6))){
var state_17275__$1 = state_17275;
var statearr_17283_17306 = state_17275__$1;
(statearr_17283_17306[(2)] = null);

(statearr_17283_17306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17276 === (3))){
var inst_17272 = (state_17275[(2)]);
var inst_17273 = cljs.core.async.close_BANG_.call(null,out);
var state_17275__$1 = (function (){var statearr_17284 = state_17275;
(statearr_17284[(9)] = inst_17272);

return statearr_17284;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17275__$1,inst_17273);
} else {
if((state_val_17276 === (2))){
var state_17275__$1 = state_17275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17275__$1,(4),ch);
} else {
if((state_val_17276 === (11))){
var inst_17255 = (state_17275[(8)]);
var inst_17264 = (state_17275[(2)]);
var inst_17252 = inst_17255;
var state_17275__$1 = (function (){var statearr_17285 = state_17275;
(statearr_17285[(10)] = inst_17264);

(statearr_17285[(7)] = inst_17252);

return statearr_17285;
})();
var statearr_17286_17307 = state_17275__$1;
(statearr_17286_17307[(2)] = null);

(statearr_17286_17307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17276 === (9))){
var inst_17255 = (state_17275[(8)]);
var state_17275__$1 = state_17275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17275__$1,(11),out,inst_17255);
} else {
if((state_val_17276 === (5))){
var inst_17255 = (state_17275[(8)]);
var inst_17252 = (state_17275[(7)]);
var inst_17259 = cljs.core._EQ_.call(null,inst_17255,inst_17252);
var state_17275__$1 = state_17275;
if(inst_17259){
var statearr_17288_17308 = state_17275__$1;
(statearr_17288_17308[(1)] = (8));

} else {
var statearr_17289_17309 = state_17275__$1;
(statearr_17289_17309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17276 === (10))){
var inst_17267 = (state_17275[(2)]);
var state_17275__$1 = state_17275;
var statearr_17290_17310 = state_17275__$1;
(statearr_17290_17310[(2)] = inst_17267);

(statearr_17290_17310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17276 === (8))){
var inst_17252 = (state_17275[(7)]);
var tmp17287 = inst_17252;
var inst_17252__$1 = tmp17287;
var state_17275__$1 = (function (){var statearr_17291 = state_17275;
(statearr_17291[(7)] = inst_17252__$1);

return statearr_17291;
})();
var statearr_17292_17311 = state_17275__$1;
(statearr_17292_17311[(2)] = null);

(statearr_17292_17311[(1)] = (2));


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
}
}
}
});})(c__6533__auto___17301,out))
;
return ((function (switch__6471__auto__,c__6533__auto___17301,out){
return (function() {
var cljs$core$async$state_machine__6472__auto__ = null;
var cljs$core$async$state_machine__6472__auto____0 = (function (){
var statearr_17296 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17296[(0)] = cljs$core$async$state_machine__6472__auto__);

(statearr_17296[(1)] = (1));

return statearr_17296;
});
var cljs$core$async$state_machine__6472__auto____1 = (function (state_17275){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_17275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e17297){if((e17297 instanceof Object)){
var ex__6475__auto__ = e17297;
var statearr_17298_17312 = state_17275;
(statearr_17298_17312[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17313 = state_17275;
state_17275 = G__17313;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
cljs$core$async$state_machine__6472__auto__ = function(state_17275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6472__auto____1.call(this,state_17275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6472__auto____0;
cljs$core$async$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6472__auto____1;
return cljs$core$async$state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto___17301,out))
})();
var state__6535__auto__ = (function (){var statearr_17299 = f__6534__auto__.call(null);
(statearr_17299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto___17301);

return statearr_17299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto___17301,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__17315 = arguments.length;
switch (G__17315) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6533__auto___17384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto___17384,out){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto___17384,out){
return (function (state_17353){
var state_val_17354 = (state_17353[(1)]);
if((state_val_17354 === (7))){
var inst_17349 = (state_17353[(2)]);
var state_17353__$1 = state_17353;
var statearr_17355_17385 = state_17353__$1;
(statearr_17355_17385[(2)] = inst_17349);

(statearr_17355_17385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17354 === (1))){
var inst_17316 = (new Array(n));
var inst_17317 = inst_17316;
var inst_17318 = (0);
var state_17353__$1 = (function (){var statearr_17356 = state_17353;
(statearr_17356[(7)] = inst_17318);

(statearr_17356[(8)] = inst_17317);

return statearr_17356;
})();
var statearr_17357_17386 = state_17353__$1;
(statearr_17357_17386[(2)] = null);

(statearr_17357_17386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17354 === (4))){
var inst_17321 = (state_17353[(9)]);
var inst_17321__$1 = (state_17353[(2)]);
var inst_17322 = (inst_17321__$1 == null);
var inst_17323 = cljs.core.not.call(null,inst_17322);
var state_17353__$1 = (function (){var statearr_17358 = state_17353;
(statearr_17358[(9)] = inst_17321__$1);

return statearr_17358;
})();
if(inst_17323){
var statearr_17359_17387 = state_17353__$1;
(statearr_17359_17387[(1)] = (5));

} else {
var statearr_17360_17388 = state_17353__$1;
(statearr_17360_17388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17354 === (15))){
var inst_17343 = (state_17353[(2)]);
var state_17353__$1 = state_17353;
var statearr_17361_17389 = state_17353__$1;
(statearr_17361_17389[(2)] = inst_17343);

(statearr_17361_17389[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17354 === (13))){
var state_17353__$1 = state_17353;
var statearr_17362_17390 = state_17353__$1;
(statearr_17362_17390[(2)] = null);

(statearr_17362_17390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17354 === (6))){
var inst_17318 = (state_17353[(7)]);
var inst_17339 = (inst_17318 > (0));
var state_17353__$1 = state_17353;
if(cljs.core.truth_(inst_17339)){
var statearr_17363_17391 = state_17353__$1;
(statearr_17363_17391[(1)] = (12));

} else {
var statearr_17364_17392 = state_17353__$1;
(statearr_17364_17392[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17354 === (3))){
var inst_17351 = (state_17353[(2)]);
var state_17353__$1 = state_17353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17353__$1,inst_17351);
} else {
if((state_val_17354 === (12))){
var inst_17317 = (state_17353[(8)]);
var inst_17341 = cljs.core.vec.call(null,inst_17317);
var state_17353__$1 = state_17353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17353__$1,(15),out,inst_17341);
} else {
if((state_val_17354 === (2))){
var state_17353__$1 = state_17353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17353__$1,(4),ch);
} else {
if((state_val_17354 === (11))){
var inst_17333 = (state_17353[(2)]);
var inst_17334 = (new Array(n));
var inst_17317 = inst_17334;
var inst_17318 = (0);
var state_17353__$1 = (function (){var statearr_17365 = state_17353;
(statearr_17365[(10)] = inst_17333);

(statearr_17365[(7)] = inst_17318);

(statearr_17365[(8)] = inst_17317);

return statearr_17365;
})();
var statearr_17366_17393 = state_17353__$1;
(statearr_17366_17393[(2)] = null);

(statearr_17366_17393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17354 === (9))){
var inst_17317 = (state_17353[(8)]);
var inst_17331 = cljs.core.vec.call(null,inst_17317);
var state_17353__$1 = state_17353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17353__$1,(11),out,inst_17331);
} else {
if((state_val_17354 === (5))){
var inst_17321 = (state_17353[(9)]);
var inst_17326 = (state_17353[(11)]);
var inst_17318 = (state_17353[(7)]);
var inst_17317 = (state_17353[(8)]);
var inst_17325 = (inst_17317[inst_17318] = inst_17321);
var inst_17326__$1 = (inst_17318 + (1));
var inst_17327 = (inst_17326__$1 < n);
var state_17353__$1 = (function (){var statearr_17367 = state_17353;
(statearr_17367[(11)] = inst_17326__$1);

(statearr_17367[(12)] = inst_17325);

return statearr_17367;
})();
if(cljs.core.truth_(inst_17327)){
var statearr_17368_17394 = state_17353__$1;
(statearr_17368_17394[(1)] = (8));

} else {
var statearr_17369_17395 = state_17353__$1;
(statearr_17369_17395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17354 === (14))){
var inst_17346 = (state_17353[(2)]);
var inst_17347 = cljs.core.async.close_BANG_.call(null,out);
var state_17353__$1 = (function (){var statearr_17371 = state_17353;
(statearr_17371[(13)] = inst_17346);

return statearr_17371;
})();
var statearr_17372_17396 = state_17353__$1;
(statearr_17372_17396[(2)] = inst_17347);

(statearr_17372_17396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17354 === (10))){
var inst_17337 = (state_17353[(2)]);
var state_17353__$1 = state_17353;
var statearr_17373_17397 = state_17353__$1;
(statearr_17373_17397[(2)] = inst_17337);

(statearr_17373_17397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17354 === (8))){
var inst_17326 = (state_17353[(11)]);
var inst_17317 = (state_17353[(8)]);
var tmp17370 = inst_17317;
var inst_17317__$1 = tmp17370;
var inst_17318 = inst_17326;
var state_17353__$1 = (function (){var statearr_17374 = state_17353;
(statearr_17374[(7)] = inst_17318);

(statearr_17374[(8)] = inst_17317__$1);

return statearr_17374;
})();
var statearr_17375_17398 = state_17353__$1;
(statearr_17375_17398[(2)] = null);

(statearr_17375_17398[(1)] = (2));


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
}
}
}
}
}
}
}
});})(c__6533__auto___17384,out))
;
return ((function (switch__6471__auto__,c__6533__auto___17384,out){
return (function() {
var cljs$core$async$state_machine__6472__auto__ = null;
var cljs$core$async$state_machine__6472__auto____0 = (function (){
var statearr_17379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17379[(0)] = cljs$core$async$state_machine__6472__auto__);

(statearr_17379[(1)] = (1));

return statearr_17379;
});
var cljs$core$async$state_machine__6472__auto____1 = (function (state_17353){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_17353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e17380){if((e17380 instanceof Object)){
var ex__6475__auto__ = e17380;
var statearr_17381_17399 = state_17353;
(statearr_17381_17399[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17400 = state_17353;
state_17353 = G__17400;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
cljs$core$async$state_machine__6472__auto__ = function(state_17353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6472__auto____1.call(this,state_17353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6472__auto____0;
cljs$core$async$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6472__auto____1;
return cljs$core$async$state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto___17384,out))
})();
var state__6535__auto__ = (function (){var statearr_17382 = f__6534__auto__.call(null);
(statearr_17382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto___17384);

return statearr_17382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto___17384,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__17402 = arguments.length;
switch (G__17402) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6533__auto___17475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto___17475,out){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto___17475,out){
return (function (state_17444){
var state_val_17445 = (state_17444[(1)]);
if((state_val_17445 === (7))){
var inst_17440 = (state_17444[(2)]);
var state_17444__$1 = state_17444;
var statearr_17446_17476 = state_17444__$1;
(statearr_17446_17476[(2)] = inst_17440);

(statearr_17446_17476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (1))){
var inst_17403 = [];
var inst_17404 = inst_17403;
var inst_17405 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17444__$1 = (function (){var statearr_17447 = state_17444;
(statearr_17447[(7)] = inst_17404);

(statearr_17447[(8)] = inst_17405);

return statearr_17447;
})();
var statearr_17448_17477 = state_17444__$1;
(statearr_17448_17477[(2)] = null);

(statearr_17448_17477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (4))){
var inst_17408 = (state_17444[(9)]);
var inst_17408__$1 = (state_17444[(2)]);
var inst_17409 = (inst_17408__$1 == null);
var inst_17410 = cljs.core.not.call(null,inst_17409);
var state_17444__$1 = (function (){var statearr_17449 = state_17444;
(statearr_17449[(9)] = inst_17408__$1);

return statearr_17449;
})();
if(inst_17410){
var statearr_17450_17478 = state_17444__$1;
(statearr_17450_17478[(1)] = (5));

} else {
var statearr_17451_17479 = state_17444__$1;
(statearr_17451_17479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (15))){
var inst_17434 = (state_17444[(2)]);
var state_17444__$1 = state_17444;
var statearr_17452_17480 = state_17444__$1;
(statearr_17452_17480[(2)] = inst_17434);

(statearr_17452_17480[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (13))){
var state_17444__$1 = state_17444;
var statearr_17453_17481 = state_17444__$1;
(statearr_17453_17481[(2)] = null);

(statearr_17453_17481[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (6))){
var inst_17404 = (state_17444[(7)]);
var inst_17429 = inst_17404.length;
var inst_17430 = (inst_17429 > (0));
var state_17444__$1 = state_17444;
if(cljs.core.truth_(inst_17430)){
var statearr_17454_17482 = state_17444__$1;
(statearr_17454_17482[(1)] = (12));

} else {
var statearr_17455_17483 = state_17444__$1;
(statearr_17455_17483[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (3))){
var inst_17442 = (state_17444[(2)]);
var state_17444__$1 = state_17444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17444__$1,inst_17442);
} else {
if((state_val_17445 === (12))){
var inst_17404 = (state_17444[(7)]);
var inst_17432 = cljs.core.vec.call(null,inst_17404);
var state_17444__$1 = state_17444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17444__$1,(15),out,inst_17432);
} else {
if((state_val_17445 === (2))){
var state_17444__$1 = state_17444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17444__$1,(4),ch);
} else {
if((state_val_17445 === (11))){
var inst_17412 = (state_17444[(10)]);
var inst_17408 = (state_17444[(9)]);
var inst_17422 = (state_17444[(2)]);
var inst_17423 = [];
var inst_17424 = inst_17423.push(inst_17408);
var inst_17404 = inst_17423;
var inst_17405 = inst_17412;
var state_17444__$1 = (function (){var statearr_17456 = state_17444;
(statearr_17456[(11)] = inst_17424);

(statearr_17456[(7)] = inst_17404);

(statearr_17456[(8)] = inst_17405);

(statearr_17456[(12)] = inst_17422);

return statearr_17456;
})();
var statearr_17457_17484 = state_17444__$1;
(statearr_17457_17484[(2)] = null);

(statearr_17457_17484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (9))){
var inst_17404 = (state_17444[(7)]);
var inst_17420 = cljs.core.vec.call(null,inst_17404);
var state_17444__$1 = state_17444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17444__$1,(11),out,inst_17420);
} else {
if((state_val_17445 === (5))){
var inst_17412 = (state_17444[(10)]);
var inst_17408 = (state_17444[(9)]);
var inst_17405 = (state_17444[(8)]);
var inst_17412__$1 = f.call(null,inst_17408);
var inst_17413 = cljs.core._EQ_.call(null,inst_17412__$1,inst_17405);
var inst_17414 = cljs.core.keyword_identical_QMARK_.call(null,inst_17405,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_17415 = (inst_17413) || (inst_17414);
var state_17444__$1 = (function (){var statearr_17458 = state_17444;
(statearr_17458[(10)] = inst_17412__$1);

return statearr_17458;
})();
if(cljs.core.truth_(inst_17415)){
var statearr_17459_17485 = state_17444__$1;
(statearr_17459_17485[(1)] = (8));

} else {
var statearr_17460_17486 = state_17444__$1;
(statearr_17460_17486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (14))){
var inst_17437 = (state_17444[(2)]);
var inst_17438 = cljs.core.async.close_BANG_.call(null,out);
var state_17444__$1 = (function (){var statearr_17462 = state_17444;
(statearr_17462[(13)] = inst_17437);

return statearr_17462;
})();
var statearr_17463_17487 = state_17444__$1;
(statearr_17463_17487[(2)] = inst_17438);

(statearr_17463_17487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (10))){
var inst_17427 = (state_17444[(2)]);
var state_17444__$1 = state_17444;
var statearr_17464_17488 = state_17444__$1;
(statearr_17464_17488[(2)] = inst_17427);

(statearr_17464_17488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17445 === (8))){
var inst_17404 = (state_17444[(7)]);
var inst_17412 = (state_17444[(10)]);
var inst_17408 = (state_17444[(9)]);
var inst_17417 = inst_17404.push(inst_17408);
var tmp17461 = inst_17404;
var inst_17404__$1 = tmp17461;
var inst_17405 = inst_17412;
var state_17444__$1 = (function (){var statearr_17465 = state_17444;
(statearr_17465[(7)] = inst_17404__$1);

(statearr_17465[(14)] = inst_17417);

(statearr_17465[(8)] = inst_17405);

return statearr_17465;
})();
var statearr_17466_17489 = state_17444__$1;
(statearr_17466_17489[(2)] = null);

(statearr_17466_17489[(1)] = (2));


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
}
}
}
}
}
}
}
});})(c__6533__auto___17475,out))
;
return ((function (switch__6471__auto__,c__6533__auto___17475,out){
return (function() {
var cljs$core$async$state_machine__6472__auto__ = null;
var cljs$core$async$state_machine__6472__auto____0 = (function (){
var statearr_17470 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17470[(0)] = cljs$core$async$state_machine__6472__auto__);

(statearr_17470[(1)] = (1));

return statearr_17470;
});
var cljs$core$async$state_machine__6472__auto____1 = (function (state_17444){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_17444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e17471){if((e17471 instanceof Object)){
var ex__6475__auto__ = e17471;
var statearr_17472_17490 = state_17444;
(statearr_17472_17490[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17491 = state_17444;
state_17444 = G__17491;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
cljs$core$async$state_machine__6472__auto__ = function(state_17444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6472__auto____1.call(this,state_17444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6472__auto____0;
cljs$core$async$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6472__auto____1;
return cljs$core$async$state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto___17475,out))
})();
var state__6535__auto__ = (function (){var statearr_17473 = f__6534__auto__.call(null);
(statearr_17473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto___17475);

return statearr_17473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto___17475,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map
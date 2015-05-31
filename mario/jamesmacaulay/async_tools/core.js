// Compiled by ClojureScript 0.0-3178 {}
goog.provide('jamesmacaulay.async_tools.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
jamesmacaulay.async_tools.core.concat = (function jamesmacaulay$async_tools$core$concat(){
var argseq__5210__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return jamesmacaulay.async_tools.core.concat.cljs$core$IFn$_invoke$arity$variadic(argseq__5210__auto__);
});

jamesmacaulay.async_tools.core.concat.cljs$core$IFn$_invoke$arity$variadic = (function (chs){
var out = cljs.core.async.chan.call(null);
var c__6533__auto___14355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto___14355,out){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto___14355,out){
return (function (state_14330){
var state_val_14331 = (state_14330[(1)]);
if((state_val_14331 === (7))){
var inst_14314 = (state_14330[(7)]);
var inst_14314__$1 = (state_14330[(2)]);
var inst_14315 = (inst_14314__$1 == null);
var state_14330__$1 = (function (){var statearr_14332 = state_14330;
(statearr_14332[(7)] = inst_14314__$1);

return statearr_14332;
})();
if(cljs.core.truth_(inst_14315)){
var statearr_14333_14356 = state_14330__$1;
(statearr_14333_14356[(1)] = (8));

} else {
var statearr_14334_14357 = state_14330__$1;
(statearr_14334_14357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14331 === (1))){
var inst_14306 = chs;
var state_14330__$1 = (function (){var statearr_14335 = state_14330;
(statearr_14335[(8)] = inst_14306);

return statearr_14335;
})();
var statearr_14336_14358 = state_14330__$1;
(statearr_14336_14358[(2)] = null);

(statearr_14336_14358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14331 === (4))){
var inst_14311 = cljs.core.async.close_BANG_.call(null,out);
var state_14330__$1 = state_14330;
var statearr_14337_14359 = state_14330__$1;
(statearr_14337_14359[(2)] = inst_14311);

(statearr_14337_14359[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14331 === (6))){
var inst_14326 = (state_14330[(2)]);
var state_14330__$1 = state_14330;
var statearr_14338_14360 = state_14330__$1;
(statearr_14338_14360[(2)] = inst_14326);

(statearr_14338_14360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14331 === (3))){
var inst_14328 = (state_14330[(2)]);
var state_14330__$1 = state_14330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14330__$1,inst_14328);
} else {
if((state_val_14331 === (2))){
var inst_14306 = (state_14330[(8)]);
var inst_14308 = (state_14330[(9)]);
var inst_14308__$1 = cljs.core.first.call(null,inst_14306);
var inst_14309 = (inst_14308__$1 == null);
var state_14330__$1 = (function (){var statearr_14340 = state_14330;
(statearr_14340[(9)] = inst_14308__$1);

return statearr_14340;
})();
if(cljs.core.truth_(inst_14309)){
var statearr_14341_14361 = state_14330__$1;
(statearr_14341_14361[(1)] = (4));

} else {
var statearr_14342_14362 = state_14330__$1;
(statearr_14342_14362[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14331 === (11))){
var inst_14306 = (state_14330[(8)]);
var inst_14321 = (state_14330[(2)]);
var tmp14339 = inst_14306;
var inst_14306__$1 = tmp14339;
var state_14330__$1 = (function (){var statearr_14343 = state_14330;
(statearr_14343[(10)] = inst_14321);

(statearr_14343[(8)] = inst_14306__$1);

return statearr_14343;
})();
var statearr_14344_14363 = state_14330__$1;
(statearr_14344_14363[(2)] = null);

(statearr_14344_14363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14331 === (9))){
var inst_14314 = (state_14330[(7)]);
var state_14330__$1 = state_14330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14330__$1,(11),out,inst_14314);
} else {
if((state_val_14331 === (5))){
var inst_14308 = (state_14330[(9)]);
var state_14330__$1 = state_14330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14330__$1,(7),inst_14308);
} else {
if((state_val_14331 === (10))){
var inst_14324 = (state_14330[(2)]);
var state_14330__$1 = state_14330;
var statearr_14345_14364 = state_14330__$1;
(statearr_14345_14364[(2)] = inst_14324);

(statearr_14345_14364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14331 === (8))){
var inst_14306 = (state_14330[(8)]);
var inst_14317 = cljs.core.next.call(null,inst_14306);
var inst_14306__$1 = inst_14317;
var state_14330__$1 = (function (){var statearr_14346 = state_14330;
(statearr_14346[(8)] = inst_14306__$1);

return statearr_14346;
})();
var statearr_14347_14365 = state_14330__$1;
(statearr_14347_14365[(2)] = null);

(statearr_14347_14365[(1)] = (2));


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
});})(c__6533__auto___14355,out))
;
return ((function (switch__6471__auto__,c__6533__auto___14355,out){
return (function() {
var jamesmacaulay$async_tools$core$state_machine__6472__auto__ = null;
var jamesmacaulay$async_tools$core$state_machine__6472__auto____0 = (function (){
var statearr_14351 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14351[(0)] = jamesmacaulay$async_tools$core$state_machine__6472__auto__);

(statearr_14351[(1)] = (1));

return statearr_14351;
});
var jamesmacaulay$async_tools$core$state_machine__6472__auto____1 = (function (state_14330){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_14330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e14352){if((e14352 instanceof Object)){
var ex__6475__auto__ = e14352;
var statearr_14353_14366 = state_14330;
(statearr_14353_14366[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14367 = state_14330;
state_14330 = G__14367;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
jamesmacaulay$async_tools$core$state_machine__6472__auto__ = function(state_14330){
switch(arguments.length){
case 0:
return jamesmacaulay$async_tools$core$state_machine__6472__auto____0.call(this);
case 1:
return jamesmacaulay$async_tools$core$state_machine__6472__auto____1.call(this,state_14330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jamesmacaulay$async_tools$core$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = jamesmacaulay$async_tools$core$state_machine__6472__auto____0;
jamesmacaulay$async_tools$core$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = jamesmacaulay$async_tools$core$state_machine__6472__auto____1;
return jamesmacaulay$async_tools$core$state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto___14355,out))
})();
var state__6535__auto__ = (function (){var statearr_14354 = f__6534__auto__.call(null);
(statearr_14354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto___14355);

return statearr_14354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto___14355,out))
);


return out;
});

jamesmacaulay.async_tools.core.concat.cljs$lang$maxFixedArity = (0);

jamesmacaulay.async_tools.core.concat.cljs$lang$applyTo = (function (seq14305){
return jamesmacaulay.async_tools.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14305));
});
jamesmacaulay.async_tools.core.do_effects = (function jamesmacaulay$async_tools$core$do_effects(f_BANG_,ch){
var c__6533__auto___14428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto___14428){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto___14428){
return (function (state_14411){
var state_val_14412 = (state_14411[(1)]);
if((state_val_14412 === (1))){
var state_14411__$1 = state_14411;
var statearr_14413_14429 = state_14411__$1;
(statearr_14413_14429[(2)] = null);

(statearr_14413_14429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14412 === (2))){
var state_14411__$1 = state_14411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14411__$1,(4),ch);
} else {
if((state_val_14412 === (3))){
var inst_14409 = (state_14411[(2)]);
var state_14411__$1 = state_14411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14411__$1,inst_14409);
} else {
if((state_val_14412 === (4))){
var inst_14400 = (state_14411[(7)]);
var inst_14400__$1 = (state_14411[(2)]);
var inst_14401 = (inst_14400__$1 == null);
var state_14411__$1 = (function (){var statearr_14414 = state_14411;
(statearr_14414[(7)] = inst_14400__$1);

return statearr_14414;
})();
if(cljs.core.truth_(inst_14401)){
var statearr_14415_14430 = state_14411__$1;
(statearr_14415_14430[(1)] = (5));

} else {
var statearr_14416_14431 = state_14411__$1;
(statearr_14416_14431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14412 === (5))){
var state_14411__$1 = state_14411;
var statearr_14417_14432 = state_14411__$1;
(statearr_14417_14432[(2)] = null);

(statearr_14417_14432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14412 === (6))){
var inst_14400 = (state_14411[(7)]);
var inst_14404 = f_BANG_.call(null,inst_14400);
var state_14411__$1 = (function (){var statearr_14418 = state_14411;
(statearr_14418[(8)] = inst_14404);

return statearr_14418;
})();
var statearr_14419_14433 = state_14411__$1;
(statearr_14419_14433[(2)] = null);

(statearr_14419_14433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14412 === (7))){
var inst_14407 = (state_14411[(2)]);
var state_14411__$1 = state_14411;
var statearr_14420_14434 = state_14411__$1;
(statearr_14420_14434[(2)] = inst_14407);

(statearr_14420_14434[(1)] = (3));


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
});})(c__6533__auto___14428))
;
return ((function (switch__6471__auto__,c__6533__auto___14428){
return (function() {
var jamesmacaulay$async_tools$core$do_effects_$_state_machine__6472__auto__ = null;
var jamesmacaulay$async_tools$core$do_effects_$_state_machine__6472__auto____0 = (function (){
var statearr_14424 = [null,null,null,null,null,null,null,null,null];
(statearr_14424[(0)] = jamesmacaulay$async_tools$core$do_effects_$_state_machine__6472__auto__);

(statearr_14424[(1)] = (1));

return statearr_14424;
});
var jamesmacaulay$async_tools$core$do_effects_$_state_machine__6472__auto____1 = (function (state_14411){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_14411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e14425){if((e14425 instanceof Object)){
var ex__6475__auto__ = e14425;
var statearr_14426_14435 = state_14411;
(statearr_14426_14435[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14436 = state_14411;
state_14411 = G__14436;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
jamesmacaulay$async_tools$core$do_effects_$_state_machine__6472__auto__ = function(state_14411){
switch(arguments.length){
case 0:
return jamesmacaulay$async_tools$core$do_effects_$_state_machine__6472__auto____0.call(this);
case 1:
return jamesmacaulay$async_tools$core$do_effects_$_state_machine__6472__auto____1.call(this,state_14411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jamesmacaulay$async_tools$core$do_effects_$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = jamesmacaulay$async_tools$core$do_effects_$_state_machine__6472__auto____0;
jamesmacaulay$async_tools$core$do_effects_$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = jamesmacaulay$async_tools$core$do_effects_$_state_machine__6472__auto____1;
return jamesmacaulay$async_tools$core$do_effects_$_state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto___14428))
})();
var state__6535__auto__ = (function (){var statearr_14427 = f__6534__auto__.call(null);
(statearr_14427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto___14428);

return statearr_14427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto___14428))
);


return ch;
});
jamesmacaulay.async_tools.core.log_mult = (function jamesmacaulay$async_tools$core$log_mult(mult){
return jamesmacaulay.async_tools.core.do_effects.call(null,cljs.core.println,cljs.core.async.tap.call(null,mult,cljs.core.async.chan.call(null)));
});
jamesmacaulay.async_tools.core.log_channel = (function jamesmacaulay$async_tools$core$log_channel(ch){
return cljs.core.async.map.call(null,(function (x){
cljs.core.println.call(null,x);

return x;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch], null));
});

/**
* @constructor
*/
jamesmacaulay.async_tools.core.ConstantReadPort = (function (boxed_value){
this.boxed_value = boxed_value;
})
jamesmacaulay.async_tools.core.ConstantReadPort.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

jamesmacaulay.async_tools.core.ConstantReadPort.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return self__.boxed_value;
});

jamesmacaulay.async_tools.core.ConstantReadPort.cljs$lang$type = true;

jamesmacaulay.async_tools.core.ConstantReadPort.cljs$lang$ctorStr = "jamesmacaulay.async-tools.core/ConstantReadPort";

jamesmacaulay.async_tools.core.ConstantReadPort.cljs$lang$ctorPrWriter = (function (this__4749__auto__,writer__4750__auto__,opt__4751__auto__){
return cljs.core._write.call(null,writer__4750__auto__,"jamesmacaulay.async-tools.core/ConstantReadPort");
});

jamesmacaulay.async_tools.core.__GT_ConstantReadPort = (function jamesmacaulay$async_tools$core$__GT_ConstantReadPort(boxed_value){
return (new jamesmacaulay.async_tools.core.ConstantReadPort(boxed_value));
});

jamesmacaulay.async_tools.core.constant = (function jamesmacaulay$async_tools$core$constant(x){
return (new jamesmacaulay.async_tools.core.ConstantReadPort(cljs.core.async.impl.channels.box.call(null,x)));
});
jamesmacaulay.async_tools.core.readport_QMARK_ = (function jamesmacaulay$async_tools$core$readport_QMARK_(x){
var G__14438 = x;
if(G__14438){
var bit__4844__auto__ = null;
if(cljs.core.truth_((function (){var or__4170__auto__ = bit__4844__auto__;
if(cljs.core.truth_(or__4170__auto__)){
return or__4170__auto__;
} else {
return G__14438.cljs$core$async$impl$protocols$ReadPort$;
}
})())){
return true;
} else {
if((!G__14438.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,G__14438);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,G__14438);
}
});
jamesmacaulay.async_tools.core.cast_as_readport = (function jamesmacaulay$async_tools$core$cast_as_readport(x){
if(cljs.core.truth_(jamesmacaulay.async_tools.core.readport_QMARK_.call(null,x))){
return x;
} else {
return jamesmacaulay.async_tools.core.constant.call(null,x);
}
});

//# sourceMappingURL=core.js.map
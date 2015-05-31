// Compiled by ClojureScript 0.0-3178 {}
goog.provide('jamesmacaulay.zelkova.time');
goog.require('cljs.core');
goog.require('jamesmacaulay.zelkova.impl.time');
goog.require('jamesmacaulay.zelkova.signal');
goog.require('jamesmacaulay.zelkova.impl.signal');
goog.require('cljs.core.async');
jamesmacaulay.zelkova.time.millisecond = (1);
jamesmacaulay.zelkova.time.second = (1000);
jamesmacaulay.zelkova.time.minute = ((60) * jamesmacaulay.zelkova.time.second);
jamesmacaulay.zelkova.time.hour = ((60) * jamesmacaulay.zelkova.time.minute);
jamesmacaulay.zelkova.time.in_milliseconds = (function jamesmacaulay$zelkova$time$in_milliseconds(ms){
return ms;
});
jamesmacaulay.zelkova.time.in_seconds = (function jamesmacaulay$zelkova$time$in_seconds(ms){
return (ms / jamesmacaulay.zelkova.time.second);
});
jamesmacaulay.zelkova.time.in_minutes = (function jamesmacaulay$zelkova$time$in_minutes(ms){
return (ms / jamesmacaulay.zelkova.time.minute);
});
jamesmacaulay.zelkova.time.in_hours = (function jamesmacaulay$zelkova$time$in_hours(ms){
return (ms / jamesmacaulay.zelkova.time.hour);
});
jamesmacaulay.zelkova.time.fps_channel_fn = (function jamesmacaulay$zelkova$time$fps_channel_fn(n){
return (function (graph,opts){
var ms_per_frame = ((1000) / n);
var out = cljs.core.async.chan.call(null);
var c__6533__auto___14626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto___14626,ms_per_frame,out){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto___14626,ms_per_frame,out){
return (function (state_14612){
var state_val_14613 = (state_14612[(1)]);
if((state_val_14613 === (1))){
var inst_14593 = jamesmacaulay.zelkova.impl.time.now.call(null);
var inst_14594 = inst_14593;
var inst_14595 = (0);
var state_14612__$1 = (function (){var statearr_14614 = state_14612;
(statearr_14614[(7)] = inst_14595);

(statearr_14614[(8)] = inst_14594);

return statearr_14614;
})();
var statearr_14615_14627 = state_14612__$1;
(statearr_14615_14627[(2)] = null);

(statearr_14615_14627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14613 === (2))){
var inst_14595 = (state_14612[(7)]);
var inst_14597 = (ms_per_frame - inst_14595);
var inst_14598 = cljs.core.async.timeout.call(null,inst_14597);
var state_14612__$1 = state_14612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14612__$1,(4),inst_14598);
} else {
if((state_val_14613 === (3))){
var inst_14610 = (state_14612[(2)]);
var state_14612__$1 = state_14612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14612__$1,inst_14610);
} else {
if((state_val_14613 === (4))){
var inst_14601 = (state_14612[(9)]);
var inst_14594 = (state_14612[(8)]);
var inst_14600 = (state_14612[(2)]);
var inst_14601__$1 = jamesmacaulay.zelkova.impl.time.now.call(null);
var inst_14602 = (inst_14601__$1 - inst_14594);
var state_14612__$1 = (function (){var statearr_14616 = state_14612;
(statearr_14616[(9)] = inst_14601__$1);

(statearr_14616[(10)] = inst_14600);

return statearr_14616;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14612__$1,(5),out,inst_14602);
} else {
if((state_val_14613 === (5))){
var inst_14601 = (state_14612[(9)]);
var inst_14595 = (state_14612[(7)]);
var inst_14594 = (state_14612[(8)]);
var inst_14604 = (state_14612[(2)]);
var inst_14605 = (inst_14601 - inst_14594);
var inst_14606 = (inst_14605 - ms_per_frame);
var inst_14607 = (inst_14595 + inst_14606);
var inst_14594__$1 = inst_14601;
var inst_14595__$1 = inst_14607;
var state_14612__$1 = (function (){var statearr_14617 = state_14612;
(statearr_14617[(11)] = inst_14604);

(statearr_14617[(7)] = inst_14595__$1);

(statearr_14617[(8)] = inst_14594__$1);

return statearr_14617;
})();
var statearr_14618_14628 = state_14612__$1;
(statearr_14618_14628[(2)] = null);

(statearr_14618_14628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__6533__auto___14626,ms_per_frame,out))
;
return ((function (switch__6471__auto__,c__6533__auto___14626,ms_per_frame,out){
return (function() {
var jamesmacaulay$zelkova$time$fps_channel_fn_$_state_machine__6472__auto__ = null;
var jamesmacaulay$zelkova$time$fps_channel_fn_$_state_machine__6472__auto____0 = (function (){
var statearr_14622 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14622[(0)] = jamesmacaulay$zelkova$time$fps_channel_fn_$_state_machine__6472__auto__);

(statearr_14622[(1)] = (1));

return statearr_14622;
});
var jamesmacaulay$zelkova$time$fps_channel_fn_$_state_machine__6472__auto____1 = (function (state_14612){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_14612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e14623){if((e14623 instanceof Object)){
var ex__6475__auto__ = e14623;
var statearr_14624_14629 = state_14612;
(statearr_14624_14629[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14630 = state_14612;
state_14612 = G__14630;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
jamesmacaulay$zelkova$time$fps_channel_fn_$_state_machine__6472__auto__ = function(state_14612){
switch(arguments.length){
case 0:
return jamesmacaulay$zelkova$time$fps_channel_fn_$_state_machine__6472__auto____0.call(this);
case 1:
return jamesmacaulay$zelkova$time$fps_channel_fn_$_state_machine__6472__auto____1.call(this,state_14612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jamesmacaulay$zelkova$time$fps_channel_fn_$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = jamesmacaulay$zelkova$time$fps_channel_fn_$_state_machine__6472__auto____0;
jamesmacaulay$zelkova$time$fps_channel_fn_$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = jamesmacaulay$zelkova$time$fps_channel_fn_$_state_machine__6472__auto____1;
return jamesmacaulay$zelkova$time$fps_channel_fn_$_state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto___14626,ms_per_frame,out))
})();
var state__6535__auto__ = (function (){var statearr_14625 = f__6534__auto__.call(null);
(statearr_14625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto___14626);

return statearr_14625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto___14626,ms_per_frame,out))
);


return out;
});
});
/**
 * Takes desired number of frames per second (fps). The resulting signal gives
 * a sequence of time deltas as quickly as possible until it reaches the desired
 * FPS. A time delta is the time between the last frame and the current frame.
 */
jamesmacaulay.zelkova.time.fps = (function jamesmacaulay$zelkova$time$fps(n){
return jamesmacaulay.zelkova.signal.input.call(null,(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jamesmacaulay.zelkova.time","fps","jamesmacaulay.zelkova.time/fps",2069466524),n], null),jamesmacaulay.zelkova.time.fps_channel_fn.call(null,n));
});
jamesmacaulay.zelkova.time.every_channel_fn = (function jamesmacaulay$zelkova$time$every_channel_fn(ms){
return (function (graph,opts){
var out = cljs.core.async.chan.call(null);
var c__6533__auto___14695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto___14695,out){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto___14695,out){
return (function (state_14681){
var state_val_14682 = (state_14681[(1)]);
if((state_val_14682 === (1))){
var inst_14663 = jamesmacaulay.zelkova.impl.time.now.call(null);
var inst_14664 = inst_14663;
var inst_14665 = (0);
var state_14681__$1 = (function (){var statearr_14683 = state_14681;
(statearr_14683[(7)] = inst_14664);

(statearr_14683[(8)] = inst_14665);

return statearr_14683;
})();
var statearr_14684_14696 = state_14681__$1;
(statearr_14684_14696[(2)] = null);

(statearr_14684_14696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14682 === (2))){
var inst_14665 = (state_14681[(8)]);
var inst_14667 = (ms - inst_14665);
var inst_14668 = cljs.core.async.timeout.call(null,inst_14667);
var state_14681__$1 = state_14681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14681__$1,(4),inst_14668);
} else {
if((state_val_14682 === (3))){
var inst_14679 = (state_14681[(2)]);
var state_14681__$1 = state_14681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14681__$1,inst_14679);
} else {
if((state_val_14682 === (4))){
var inst_14671 = (state_14681[(9)]);
var inst_14670 = (state_14681[(2)]);
var inst_14671__$1 = jamesmacaulay.zelkova.impl.time.now.call(null);
var state_14681__$1 = (function (){var statearr_14685 = state_14681;
(statearr_14685[(10)] = inst_14670);

(statearr_14685[(9)] = inst_14671__$1);

return statearr_14685;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14681__$1,(5),out,inst_14671__$1);
} else {
if((state_val_14682 === (5))){
var inst_14664 = (state_14681[(7)]);
var inst_14671 = (state_14681[(9)]);
var inst_14665 = (state_14681[(8)]);
var inst_14673 = (state_14681[(2)]);
var inst_14674 = (inst_14671 - inst_14664);
var inst_14675 = (inst_14674 - ms);
var inst_14676 = (inst_14665 + inst_14675);
var inst_14664__$1 = inst_14671;
var inst_14665__$1 = inst_14676;
var state_14681__$1 = (function (){var statearr_14686 = state_14681;
(statearr_14686[(7)] = inst_14664__$1);

(statearr_14686[(11)] = inst_14673);

(statearr_14686[(8)] = inst_14665__$1);

return statearr_14686;
})();
var statearr_14687_14697 = state_14681__$1;
(statearr_14687_14697[(2)] = null);

(statearr_14687_14697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__6533__auto___14695,out))
;
return ((function (switch__6471__auto__,c__6533__auto___14695,out){
return (function() {
var jamesmacaulay$zelkova$time$every_channel_fn_$_state_machine__6472__auto__ = null;
var jamesmacaulay$zelkova$time$every_channel_fn_$_state_machine__6472__auto____0 = (function (){
var statearr_14691 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14691[(0)] = jamesmacaulay$zelkova$time$every_channel_fn_$_state_machine__6472__auto__);

(statearr_14691[(1)] = (1));

return statearr_14691;
});
var jamesmacaulay$zelkova$time$every_channel_fn_$_state_machine__6472__auto____1 = (function (state_14681){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_14681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e14692){if((e14692 instanceof Object)){
var ex__6475__auto__ = e14692;
var statearr_14693_14698 = state_14681;
(statearr_14693_14698[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14699 = state_14681;
state_14681 = G__14699;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
jamesmacaulay$zelkova$time$every_channel_fn_$_state_machine__6472__auto__ = function(state_14681){
switch(arguments.length){
case 0:
return jamesmacaulay$zelkova$time$every_channel_fn_$_state_machine__6472__auto____0.call(this);
case 1:
return jamesmacaulay$zelkova$time$every_channel_fn_$_state_machine__6472__auto____1.call(this,state_14681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jamesmacaulay$zelkova$time$every_channel_fn_$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = jamesmacaulay$zelkova$time$every_channel_fn_$_state_machine__6472__auto____0;
jamesmacaulay$zelkova$time$every_channel_fn_$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = jamesmacaulay$zelkova$time$every_channel_fn_$_state_machine__6472__auto____1;
return jamesmacaulay$zelkova$time$every_channel_fn_$_state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto___14695,out))
})();
var state__6535__auto__ = (function (){var statearr_14694 = f__6534__auto__.call(null);
(statearr_14694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto___14695);

return statearr_14694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto___14695,out))
);


return out;
});
});
/**
 * Takes a time interval `ms`. The resulting signal is the current time, updated
 * every `ms` milliseconds.
 */
jamesmacaulay.zelkova.time.every = (function jamesmacaulay$zelkova$time$every(ms){
return jamesmacaulay.zelkova.signal.input.call(null,jamesmacaulay.zelkova.impl.time.now.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jamesmacaulay.zelkova.time","every","jamesmacaulay.zelkova.time/every",-895641586),ms], null),jamesmacaulay.zelkova.time.every_channel_fn.call(null,ms));
});
/**
 * Add a timestamp to any signal. Returns a signal of `[timestamp value]`
 * vectors. Timestamps are tied to the origin events of a signal value, so
 * `(timestamp mouse/x)` and `(timestamp mouse/y)` will always have the same
 * timestamp because they rely on the same underlying event (`mouse/position`).
 */
jamesmacaulay.zelkova.time.timestamp = (function jamesmacaulay$zelkova$time$timestamp(sig){
var sig_init = new cljs.core.Keyword(null,"init-fn","init-fn",777257971).cljs$core$IFn$_invoke$arity$1(sig);
return jamesmacaulay.zelkova.impl.signal.make_signal.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-fn","init-fn",777257971),((function (sig_init){
return (function (live_graph,opts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jamesmacaulay.zelkova.impl.time.now.call(null),sig_init.call(null,live_graph,opts)], null);
});})(sig_init))
,new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"msg-xform","msg-xform",-1431252485),cljs.core.comp.call(null,cljs.core.map.call(null,((function (sig_init){
return (function (p__14703){
var vec__14704 = p__14703;
var event = cljs.core.nth.call(null,vec__14704,(0),null);
var _prev = cljs.core.nth.call(null,vec__14704,(1),null);
var vec__14705 = cljs.core.nth.call(null,vec__14704,(2),null);
var msg = cljs.core.nth.call(null,vec__14705,(0),null);
if(cljs.core.truth_(jamesmacaulay.zelkova.impl.signal.fresh_QMARK_.call(null,msg))){
return jamesmacaulay.zelkova.impl.signal.fresh.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jamesmacaulay.zelkova.impl.signal.timestamp.call(null,event),jamesmacaulay.zelkova.impl.signal.value.call(null,msg)], null));
} else {
return null;
}
});})(sig_init))
),cljs.core.remove.call(null,cljs.core.nil_QMARK_))], null));
});
/**
 * Delay a signal by `ms` milliseconds.
 */
jamesmacaulay.zelkova.time.delay = (function jamesmacaulay$zelkova$time$delay(ms,sig){
return jamesmacaulay.zelkova.signal.splice.call(null,(function (from,to){
var waiting = cljs.core.async.chan.call(null,((1000) + ms));
var fire_BANG_ = ((function (waiting){
return (function (){
return cljs.core.async.take_BANG_.call(null,waiting,cljs.core.partial.call(null,cljs.core.async.put_BANG_,to));
});})(waiting))
;
var c__6533__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto__,waiting,fire_BANG_){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto__,waiting,fire_BANG_){
return (function (state_14755){
var state_val_14756 = (state_14755[(1)]);
if((state_val_14756 === (1))){
var state_14755__$1 = state_14755;
var statearr_14757_14772 = state_14755__$1;
(statearr_14757_14772[(2)] = null);

(statearr_14757_14772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14756 === (2))){
var state_14755__$1 = state_14755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14755__$1,(4),from);
} else {
if((state_val_14756 === (3))){
var inst_14753 = (state_14755[(2)]);
var state_14755__$1 = state_14755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14755__$1,inst_14753);
} else {
if((state_val_14756 === (4))){
var inst_14741 = (state_14755[(7)]);
var inst_14741__$1 = (state_14755[(2)]);
var inst_14742 = (inst_14741__$1 == null);
var state_14755__$1 = (function (){var statearr_14758 = state_14755;
(statearr_14758[(7)] = inst_14741__$1);

return statearr_14758;
})();
if(cljs.core.truth_(inst_14742)){
var statearr_14759_14773 = state_14755__$1;
(statearr_14759_14773[(1)] = (5));

} else {
var statearr_14760_14774 = state_14755__$1;
(statearr_14760_14774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14756 === (5))){
var inst_14744 = cljs.core.async.close_BANG_.call(null,to);
var state_14755__$1 = state_14755;
var statearr_14761_14775 = state_14755__$1;
(statearr_14761_14775[(2)] = inst_14744);

(statearr_14761_14775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14756 === (6))){
var inst_14741 = (state_14755[(7)]);
var state_14755__$1 = state_14755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14755__$1,(8),waiting,inst_14741);
} else {
if((state_val_14756 === (7))){
var inst_14751 = (state_14755[(2)]);
var state_14755__$1 = state_14755;
var statearr_14762_14776 = state_14755__$1;
(statearr_14762_14776[(2)] = inst_14751);

(statearr_14762_14776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14756 === (8))){
var inst_14747 = (state_14755[(2)]);
var inst_14748 = setTimeout(fire_BANG_,ms);
var state_14755__$1 = (function (){var statearr_14763 = state_14755;
(statearr_14763[(8)] = inst_14747);

(statearr_14763[(9)] = inst_14748);

return statearr_14763;
})();
var statearr_14764_14777 = state_14755__$1;
(statearr_14764_14777[(2)] = null);

(statearr_14764_14777[(1)] = (2));


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
});})(c__6533__auto__,waiting,fire_BANG_))
;
return ((function (switch__6471__auto__,c__6533__auto__,waiting,fire_BANG_){
return (function() {
var jamesmacaulay$zelkova$time$delay_$_state_machine__6472__auto__ = null;
var jamesmacaulay$zelkova$time$delay_$_state_machine__6472__auto____0 = (function (){
var statearr_14768 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14768[(0)] = jamesmacaulay$zelkova$time$delay_$_state_machine__6472__auto__);

(statearr_14768[(1)] = (1));

return statearr_14768;
});
var jamesmacaulay$zelkova$time$delay_$_state_machine__6472__auto____1 = (function (state_14755){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_14755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e14769){if((e14769 instanceof Object)){
var ex__6475__auto__ = e14769;
var statearr_14770_14778 = state_14755;
(statearr_14770_14778[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14779 = state_14755;
state_14755 = G__14779;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
jamesmacaulay$zelkova$time$delay_$_state_machine__6472__auto__ = function(state_14755){
switch(arguments.length){
case 0:
return jamesmacaulay$zelkova$time$delay_$_state_machine__6472__auto____0.call(this);
case 1:
return jamesmacaulay$zelkova$time$delay_$_state_machine__6472__auto____1.call(this,state_14755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jamesmacaulay$zelkova$time$delay_$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = jamesmacaulay$zelkova$time$delay_$_state_machine__6472__auto____0;
jamesmacaulay$zelkova$time$delay_$_state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = jamesmacaulay$zelkova$time$delay_$_state_machine__6472__auto____1;
return jamesmacaulay$zelkova$time$delay_$_state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto__,waiting,fire_BANG_))
})();
var state__6535__auto__ = (function (){var statearr_14771 = f__6534__auto__.call(null);
(statearr_14771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto__);

return statearr_14771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto__,waiting,fire_BANG_))
);

return c__6533__auto__;
}),new cljs.core.Keyword(null,"init-fn","init-fn",777257971).cljs$core$IFn$_invoke$arity$1(sig),sig);
});
/**
 * Returns a signal of boolean values: true when `sig` has updated in the past
 * `ms` milliseconds, false otherwise.
 */
jamesmacaulay.zelkova.time.since = (function jamesmacaulay$zelkova$time$since(ms,sig){
var start = jamesmacaulay.zelkova.signal.map.call(null,cljs.core.constantly.call(null,(1)),sig);
var stop = jamesmacaulay.zelkova.signal.map.call(null,cljs.core.constantly.call(null,(-1)),jamesmacaulay.zelkova.time.delay.call(null,ms,sig));
var delaydiff = jamesmacaulay.zelkova.signal.foldp.call(null,cljs.core._PLUS_,(0),jamesmacaulay.zelkova.signal.merge.call(null,start,stop));
return jamesmacaulay.zelkova.signal.map.call(null,cljs.core.complement.call(null,cljs.core.zero_QMARK_),delaydiff);
});
/**
 * Returns a signal which relays the latest value from `sig` only after `ms`
 * milliseconds have passed since `sig` last updated. Useful when you want to
 * wait until a user stops typing before doing something with the text, for
 * example.
 */
jamesmacaulay.zelkova.time.debounce = (function jamesmacaulay$zelkova$time$debounce(ms,sig){
var timeouts = jamesmacaulay.zelkova.signal.keep_if.call(null,cljs.core.not,false,jamesmacaulay.zelkova.time.since.call(null,ms,sig));
return jamesmacaulay.zelkova.signal.sample_on.call(null,timeouts,sig);
});

//# sourceMappingURL=time.js.map
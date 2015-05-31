// Compiled by ClojureScript 0.0-3178 {}
goog.provide('dominator.counter');
goog.require('cljs.core');
goog.require('jamesmacaulay.zelkova.signal');
goog.require('cljs.core.async');
goog.require('dominator.core');
goog.require('dominator.test.util');
goog.require('dominator.async');
goog.require('stch.html');
goog.require('cljs.core.match');
cljs.core.enable_console_print_BANG_.call(null);
dominator.counter.people = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Billy","Bobby","Joey"], null);
dominator.counter.actions = jamesmacaulay.zelkova.signal.write_port.call(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065));
dominator.counter.view = (function dominator$counter$view(model){
return stch.html.div.call(null,stch.html.table.call(null,stch.html.tr.call(null,(function (){var iter__4924__auto__ = (function dominator$counter$view_$_iter__13596(s__13597){
return (new cljs.core.LazySeq(null,(function (){
var s__13597__$1 = s__13597;
while(true){
var temp__4422__auto__ = cljs.core.seq.call(null,s__13597__$1);
if(temp__4422__auto__){
var s__13597__$2 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13597__$2)){
var c__4922__auto__ = cljs.core.chunk_first.call(null,s__13597__$2);
var size__4923__auto__ = cljs.core.count.call(null,c__4922__auto__);
var b__13599 = cljs.core.chunk_buffer.call(null,size__4923__auto__);
if((function (){var i__13598 = (0);
while(true){
if((i__13598 < size__4923__auto__)){
var person = cljs.core._nth.call(null,c__4922__auto__,i__13598);
cljs.core.chunk_append.call(null,b__13599,stch.html.td.call(null,stch.html.input.call(null,new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),person,new cljs.core.Keyword(null,"onclick","onclick",1297553739),dominator.async.send.call(null,dominator.counter.actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicked","clicked",114423720),person], null)))));

var G__13604 = (i__13598 + (1));
i__13598 = G__13604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13599),dominator$counter$view_$_iter__13596.call(null,cljs.core.chunk_rest.call(null,s__13597__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13599),null);
}
} else {
var person = cljs.core.first.call(null,s__13597__$2);
return cljs.core.cons.call(null,stch.html.td.call(null,stch.html.input.call(null,new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),person,new cljs.core.Keyword(null,"onclick","onclick",1297553739),dominator.async.send.call(null,dominator.counter.actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicked","clicked",114423720),person], null)))),dominator$counter$view_$_iter__13596.call(null,cljs.core.rest.call(null,s__13597__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4924__auto__.call(null,dominator.counter.people);
})()),stch.html.tr.call(null,(function (){var iter__4924__auto__ = (function dominator$counter$view_$_iter__13600(s__13601){
return (new cljs.core.LazySeq(null,(function (){
var s__13601__$1 = s__13601;
while(true){
var temp__4422__auto__ = cljs.core.seq.call(null,s__13601__$1);
if(temp__4422__auto__){
var s__13601__$2 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13601__$2)){
var c__4922__auto__ = cljs.core.chunk_first.call(null,s__13601__$2);
var size__4923__auto__ = cljs.core.count.call(null,c__4922__auto__);
var b__13603 = cljs.core.chunk_buffer.call(null,size__4923__auto__);
if((function (){var i__13602 = (0);
while(true){
if((i__13602 < size__4923__auto__)){
var person = cljs.core._nth.call(null,c__4922__auto__,i__13602);
cljs.core.chunk_append.call(null,b__13603,stch.html.td.call(null,stch.html.input.call(null,new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"readonly","readonly",-1101398934),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,model,person))));

var G__13605 = (i__13602 + (1));
i__13602 = G__13605;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13603),dominator$counter$view_$_iter__13600.call(null,cljs.core.chunk_rest.call(null,s__13601__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13603),null);
}
} else {
var person = cljs.core.first.call(null,s__13601__$2);
return cljs.core.cons.call(null,stch.html.td.call(null,stch.html.input.call(null,new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"readonly","readonly",-1101398934),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,model,person))),dominator$counter$view_$_iter__13600.call(null,cljs.core.rest.call(null,s__13601__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4924__auto__.call(null,dominator.counter.people);
})())),stch.html.div.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),"button-row",stch.html.input.call(null,new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Reset",new cljs.core.Keyword(null,"onclick","onclick",1297553739),dominator.async.send.call(null,dominator.counter.actions,new cljs.core.Keyword(null,"reset","reset",-800929946)))));
});
dominator.counter.empty_model = new cljs.core.PersistentArrayMap(null, 3, ["Billy",(0),"Bobby",(0),"Joey",(0)], null);
dominator.counter.initial_model = (function (){var or__4170__auto__ = dominator.test.util.get_storage.call(null,"clicks");
if(cljs.core.truth_(or__4170__auto__)){
return or__4170__auto__;
} else {
return dominator.counter.empty_model;
}
})();
dominator.counter.update_model = (function dominator$counter$update_model(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"no-op","no-op",-93046065))){
return model;
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"reset","reset",-800929946))){
return dominator.counter.empty_model;
} else {
throw cljs.core.match.backtrack;

}
}
}catch (e13615){if((e13615 instanceof Error)){
var e__12873__auto__ = e13615;
if((e__12873__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__13613 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__13613,new cljs.core.Keyword(null,"clicked","clicked",114423720))){
var n = cljs.core.nth.call(null,action,(1));
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e13617){if((e13617 instanceof Error)){
var e__12873__auto____$1 = e13617;
if((e__12873__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__12873__auto____$1;
}
} else {
throw e13617;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e13616){if((e13616 instanceof Error)){
var e__12873__auto____$1 = e13616;
if((e__12873__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__12873__auto____$1;
}
} else {
throw e13616;

}
}} else {
throw e__12873__auto__;
}
} else {
throw e13615;

}
}});
dominator.counter.model = jamesmacaulay.zelkova.signal.reductions.call(null,dominator.counter.update_model,dominator.counter.initial_model,dominator.counter.actions);
dominator.counter.modelc = jamesmacaulay.zelkova.signal.to_chan.call(null,dominator.counter.model);
dominator.core.render.call(null,jamesmacaulay.zelkova.signal.map.call(null,dominator.counter.view,dominator.counter.model),document.body);
var c__6533__auto___13646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto___13646){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto___13646){
return (function (state_13630){
var state_val_13631 = (state_13630[(1)]);
if((state_val_13631 === (1))){
var state_13630__$1 = state_13630;
var statearr_13632_13647 = state_13630__$1;
(statearr_13632_13647[(2)] = null);

(statearr_13632_13647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13631 === (2))){
var state_13630__$1 = state_13630;
var statearr_13633_13648 = state_13630__$1;
(statearr_13633_13648[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13631 === (3))){
var inst_13628 = (state_13630[(2)]);
var state_13630__$1 = state_13630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13630__$1,inst_13628);
} else {
if((state_val_13631 === (4))){
var state_13630__$1 = state_13630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13630__$1,(7),dominator.counter.modelc);
} else {
if((state_val_13631 === (5))){
var state_13630__$1 = state_13630;
var statearr_13635_13649 = state_13630__$1;
(statearr_13635_13649[(2)] = null);

(statearr_13635_13649[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13631 === (6))){
var inst_13626 = (state_13630[(2)]);
var state_13630__$1 = state_13630;
var statearr_13636_13650 = state_13630__$1;
(statearr_13636_13650[(2)] = inst_13626);

(statearr_13636_13650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13631 === (7))){
var inst_13621 = (state_13630[(2)]);
var inst_13622 = dominator.test.util.set_storage.call(null,"clicks",inst_13621);
var state_13630__$1 = (function (){var statearr_13637 = state_13630;
(statearr_13637[(7)] = inst_13622);

return statearr_13637;
})();
var statearr_13638_13651 = state_13630__$1;
(statearr_13638_13651[(2)] = null);

(statearr_13638_13651[(1)] = (2));


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
});})(c__6533__auto___13646))
;
return ((function (switch__6471__auto__,c__6533__auto___13646){
return (function() {
var dominator$counter$state_machine__6472__auto__ = null;
var dominator$counter$state_machine__6472__auto____0 = (function (){
var statearr_13642 = [null,null,null,null,null,null,null,null];
(statearr_13642[(0)] = dominator$counter$state_machine__6472__auto__);

(statearr_13642[(1)] = (1));

return statearr_13642;
});
var dominator$counter$state_machine__6472__auto____1 = (function (state_13630){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_13630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e13643){if((e13643 instanceof Object)){
var ex__6475__auto__ = e13643;
var statearr_13644_13652 = state_13630;
(statearr_13644_13652[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13653 = state_13630;
state_13630 = G__13653;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
dominator$counter$state_machine__6472__auto__ = function(state_13630){
switch(arguments.length){
case 0:
return dominator$counter$state_machine__6472__auto____0.call(this);
case 1:
return dominator$counter$state_machine__6472__auto____1.call(this,state_13630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dominator$counter$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = dominator$counter$state_machine__6472__auto____0;
dominator$counter$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = dominator$counter$state_machine__6472__auto____1;
return dominator$counter$state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto___13646))
})();
var state__6535__auto__ = (function (){var statearr_13645 = f__6534__auto__.call(null);
(statearr_13645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto___13646);

return statearr_13645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto___13646))
);


//# sourceMappingURL=counter.js.map
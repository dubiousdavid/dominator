// Compiled by ClojureScript 0.0-3178 {}
goog.provide('dominator.wiki');
goog.require('cljs.core');
goog.require('jamesmacaulay.zelkova.signal');
goog.require('jamesmacaulay.zelkova.time');
goog.require('cljs.core.async');
goog.require('dominator.core');
goog.require('dominator.test.util');
goog.require('dominator.async');
goog.require('clojure.string');
goog.require('stch.html');
goog.require('cljs.core.match');
cljs.core.enable_console_print_BANG_.call(null);
dominator.wiki.wikipedia_endpoint = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
dominator.wiki.wikipedia = (function dominator$wiki$wikipedia(search){
return [cljs.core.str(dominator.wiki.wikipedia_endpoint),cljs.core.str(search)].join('');
});
dominator.wiki.query = jamesmacaulay.zelkova.signal.write_port.call(null,"");
dominator.wiki.actions = jamesmacaulay.zelkova.signal.write_port.call(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065));
dominator.wiki.view = (function dominator$wiki$view(results){
return stch.html.div.call(null,stch.html.input.call(null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search Wikipedia!",new cljs.core.Keyword(null,"oninput","oninput",-709673265),(function (p1__13883_SHARP_){
return cljs.core.async.put_BANG_.call(null,dominator.wiki.query,clojure.string.trim.call(null,dominator.test.util.target_value.call(null,p1__13883_SHARP_)));
})),stch.html.ul.call(null,(function (){var iter__4924__auto__ = (function dominator$wiki$view_$_iter__13888(s__13889){
return (new cljs.core.LazySeq(null,(function (){
var s__13889__$1 = s__13889;
while(true){
var temp__4422__auto__ = cljs.core.seq.call(null,s__13889__$1);
if(temp__4422__auto__){
var s__13889__$2 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13889__$2)){
var c__4922__auto__ = cljs.core.chunk_first.call(null,s__13889__$2);
var size__4923__auto__ = cljs.core.count.call(null,c__4922__auto__);
var b__13891 = cljs.core.chunk_buffer.call(null,size__4923__auto__);
if((function (){var i__13890 = (0);
while(true){
if((i__13890 < size__4923__auto__)){
var result = cljs.core._nth.call(null,c__4922__auto__,i__13890);
cljs.core.chunk_append.call(null,b__13891,stch.html.li.call(null,result));

var G__13892 = (i__13890 + (1));
i__13890 = G__13892;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13891),dominator$wiki$view_$_iter__13888.call(null,cljs.core.chunk_rest.call(null,s__13889__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13891),null);
}
} else {
var result = cljs.core.first.call(null,s__13889__$2);
return cljs.core.cons.call(null,stch.html.li.call(null,result),dominator$wiki$view_$_iter__13888.call(null,cljs.core.rest.call(null,s__13889__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4924__auto__.call(null,results);
})()));
});
dominator.wiki.empty_model = cljs.core.PersistentVector.EMPTY;
dominator.wiki.update_model = (function dominator$wiki$update_model(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"no-op","no-op",-93046065))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e13902){if((e13902 instanceof Error)){
var e__12873__auto__ = e13902;
if((e__12873__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__13900 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__13900,new cljs.core.Keyword(null,"results","results",-1134170113))){
var results = cljs.core.nth.call(null,action,(1));
return results;
} else {
throw cljs.core.match.backtrack;

}
}catch (e13904){if((e13904 instanceof Error)){
var e__12873__auto____$1 = e13904;
if((e__12873__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__12873__auto____$1;
}
} else {
throw e13904;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e13903){if((e13903 instanceof Error)){
var e__12873__auto____$1 = e13903;
if((e__12873__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__12873__auto____$1;
}
} else {
throw e13903;

}
}} else {
throw e__12873__auto__;
}
} else {
throw e13902;

}
}});
dominator.wiki.queries = jamesmacaulay.zelkova.signal.to_chan.call(null,jamesmacaulay.zelkova.signal.map.call(null,dominator.wiki.wikipedia,jamesmacaulay.zelkova.signal.drop_if.call(null,clojure.string.blank_QMARK_,jamesmacaulay.zelkova.time.debounce.call(null,(150),jamesmacaulay.zelkova.signal.drop_repeats.call(null,dominator.wiki.query)))));
var c__6533__auto___13941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6533__auto___13941){
return (function (){
var f__6534__auto__ = (function (){var switch__6471__auto__ = ((function (c__6533__auto___13941){
return (function (state_13925){
var state_val_13926 = (state_13925[(1)]);
if((state_val_13926 === (1))){
var state_13925__$1 = state_13925;
var statearr_13927_13942 = state_13925__$1;
(statearr_13927_13942[(2)] = null);

(statearr_13927_13942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13926 === (2))){
var state_13925__$1 = state_13925;
var statearr_13928_13943 = state_13925__$1;
(statearr_13928_13943[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13926 === (3))){
var inst_13923 = (state_13925[(2)]);
var state_13925__$1 = state_13925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13925__$1,inst_13923);
} else {
if((state_val_13926 === (4))){
var state_13925__$1 = state_13925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13925__$1,(7),dominator.wiki.queries);
} else {
if((state_val_13926 === (5))){
var state_13925__$1 = state_13925;
var statearr_13930_13944 = state_13925__$1;
(statearr_13930_13944[(2)] = null);

(statearr_13930_13944[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13926 === (6))){
var inst_13921 = (state_13925[(2)]);
var state_13925__$1 = state_13925;
var statearr_13931_13945 = state_13925__$1;
(statearr_13931_13945[(2)] = inst_13921);

(statearr_13931_13945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13926 === (7))){
var inst_13908 = (state_13925[(2)]);
var inst_13909 = dominator.test.util.jsonp.call(null,inst_13908);
var state_13925__$1 = state_13925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13925__$1,(8),inst_13909);
} else {
if((state_val_13926 === (8))){
var inst_13911 = (state_13925[(2)]);
var inst_13912 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13913 = cljs.core.second.call(null,inst_13911);
var inst_13914 = [new cljs.core.Keyword(null,"results","results",-1134170113),inst_13913];
var inst_13915 = (new cljs.core.PersistentVector(null,2,(5),inst_13912,inst_13914,null));
var state_13925__$1 = state_13925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13925__$1,(9),dominator.wiki.actions,inst_13915);
} else {
if((state_val_13926 === (9))){
var inst_13917 = (state_13925[(2)]);
var state_13925__$1 = (function (){var statearr_13932 = state_13925;
(statearr_13932[(7)] = inst_13917);

return statearr_13932;
})();
var statearr_13933_13946 = state_13925__$1;
(statearr_13933_13946[(2)] = null);

(statearr_13933_13946[(1)] = (2));


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
});})(c__6533__auto___13941))
;
return ((function (switch__6471__auto__,c__6533__auto___13941){
return (function() {
var dominator$wiki$state_machine__6472__auto__ = null;
var dominator$wiki$state_machine__6472__auto____0 = (function (){
var statearr_13937 = [null,null,null,null,null,null,null,null];
(statearr_13937[(0)] = dominator$wiki$state_machine__6472__auto__);

(statearr_13937[(1)] = (1));

return statearr_13937;
});
var dominator$wiki$state_machine__6472__auto____1 = (function (state_13925){
while(true){
var ret_value__6473__auto__ = (function (){try{while(true){
var result__6474__auto__ = switch__6471__auto__.call(null,state_13925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6474__auto__;
}
break;
}
}catch (e13938){if((e13938 instanceof Object)){
var ex__6475__auto__ = e13938;
var statearr_13939_13947 = state_13925;
(statearr_13939_13947[(5)] = ex__6475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13948 = state_13925;
state_13925 = G__13948;
continue;
} else {
return ret_value__6473__auto__;
}
break;
}
});
dominator$wiki$state_machine__6472__auto__ = function(state_13925){
switch(arguments.length){
case 0:
return dominator$wiki$state_machine__6472__auto____0.call(this);
case 1:
return dominator$wiki$state_machine__6472__auto____1.call(this,state_13925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dominator$wiki$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$0 = dominator$wiki$state_machine__6472__auto____0;
dominator$wiki$state_machine__6472__auto__.cljs$core$IFn$_invoke$arity$1 = dominator$wiki$state_machine__6472__auto____1;
return dominator$wiki$state_machine__6472__auto__;
})()
;})(switch__6471__auto__,c__6533__auto___13941))
})();
var state__6535__auto__ = (function (){var statearr_13940 = f__6534__auto__.call(null);
(statearr_13940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6533__auto___13941);

return statearr_13940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6535__auto__);
});})(c__6533__auto___13941))
);

dominator.wiki.model = jamesmacaulay.zelkova.signal.reductions.call(null,dominator.wiki.update_model,dominator.wiki.empty_model,dominator.wiki.actions);
dominator.core.render.call(null,jamesmacaulay.zelkova.signal.map.call(null,dominator.wiki.view,dominator.wiki.model),document.body);

//# sourceMappingURL=wiki.js.map
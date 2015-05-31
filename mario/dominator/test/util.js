// Compiled by ClojureScript 0.0-3178 {}
goog.provide('dominator.test.util');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('goog.net.Jsonp');
goog.require('goog.Uri');
dominator.test.util.get_storage = (function dominator$test$util$get_storage(k){
var temp__4422__auto__ = localStorage.getItem(cljs.core.name.call(null,k));
if(cljs.core.truth_(temp__4422__auto__)){
var s = temp__4422__auto__;
return cljs.reader.read_string.call(null,s);
} else {
return null;
}
});
dominator.test.util.set_storage = (function dominator$test$util$set_storage(k,v){
return localStorage.setItem(cljs.core.name.call(null,k),v.toString());
});
dominator.test.util.jsonp = (function dominator$test$util$jsonp(uri){
var out = cljs.core.async.chan.call(null);
var req = (new goog.net.Jsonp((new goog.Uri(uri))));
req.send(null,((function (out,req){
return (function (res){
return cljs.core.async.put_BANG_.call(null,out,res);
});})(out,req))
);

return out;
});
dominator.test.util.target_value = (function dominator$test$util$target_value(e){
return e.target.value;
});
dominator.test.util.log = (function dominator$test$util$log(v){
return console.log(v);
});

//# sourceMappingURL=util.js.map
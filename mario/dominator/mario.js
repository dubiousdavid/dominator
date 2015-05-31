// Compiled by ClojureScript 0.0-3178 {}
goog.provide('dominator.mario');
goog.require('cljs.core');
goog.require('jamesmacaulay.zelkova.signal');
goog.require('jamesmacaulay.zelkova.time');
goog.require('jamesmacaulay.zelkova.keyboard');
goog.require('dominator.core');
goog.require('jamesmacaulay.zelkova.window');
goog.require('stch.html');
goog.require('jamesmacaulay.zelkova.impl.time');
dominator.mario.mario = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"vx","vx",-1685168462),(0),new cljs.core.Keyword(null,"vy","vy",-2018509997),(0),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"right","right",-452581833)], null);
dominator.mario.jump = (function dominator$mario$jump(p__17917,m){
var map__17919 = p__17917;
var map__17919__$1 = ((cljs.core.seq_QMARK_.call(null,map__17919))?cljs.core.apply.call(null,cljs.core.hash_map,map__17919):map__17919);
var y = cljs.core.get.call(null,map__17919__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
if(((y > (0))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m),(0)))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"vy","vy",-2018509997),(5));
} else {
return m;
}
});
dominator.mario.gravity = (function dominator$mario$gravity(t,m){
if((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m) > (0))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"vy","vy",-2018509997),(new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(m) - (t / (4))));
} else {
return m;
}
});
dominator.mario.physics = (function dominator$mario$physics(t,m){
var new_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m) + (t * new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(m)));
var new_y = (function (){var x__4482__auto__ = (0);
var y__4483__auto__ = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m) + (t * new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(m)));
return ((x__4482__auto__ > y__4483__auto__) ? x__4482__auto__ : y__4483__auto__);
})();
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"x","x",2099068185),new_x,new cljs.core.Keyword(null,"y","y",-1757859776),new_y);
});
dominator.mario.walk = (function dominator$mario$walk(p__17920,m){
var map__17922 = p__17920;
var map__17922__$1 = ((cljs.core.seq_QMARK_.call(null,map__17922))?cljs.core.apply.call(null,cljs.core.hash_map,map__17922):map__17922);
var x = cljs.core.get.call(null,map__17922__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"vx","vx",-1685168462),x,new cljs.core.Keyword(null,"dir","dir",1734754661),(((x < (0)))?"left":(((x > (0)))?"right":new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(m)
)));
});
dominator.mario.step = (function dominator$mario$step(m,p__17923){
var vec__17925 = p__17923;
var dt = cljs.core.nth.call(null,vec__17925,(0),null);
var keys = cljs.core.nth.call(null,vec__17925,(1),null);
return dominator.mario.jump.call(null,keys,dominator.mario.gravity.call(null,dt,dominator.mario.walk.call(null,keys,dominator.mario.physics.call(null,dt,m))));
});
dominator.mario.view = (function dominator$mario$view(p__17926,m){
var vec__17928 = p__17926;
var w = cljs.core.nth.call(null,vec__17928,(0),null);
var h = cljs.core.nth.call(null,vec__17928,(1),null);
var verb = (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m) > (0)))?"jump":((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(m),(0)))?"walk":"stand"
));
var src = [cljs.core.str("images/mario/"),cljs.core.str(verb),cljs.core.str("/"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(m))),cljs.core.str(".gif")].join('');
var left = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(dominator.mario.mario);
var top = ((h - (130)) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(dominator.mario.mario));
var style = [cljs.core.str("left: "),cljs.core.str(left),cljs.core.str("px; top: "),cljs.core.str(top),cljs.core.str("px;")].join('');
return stch.html.div.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),"world",stch.html.img.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),"mario",new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"style","style",-496642736),style),stch.html.div.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),"ground"));
});
dominator.mario.input = jamesmacaulay.zelkova.signal.map.call(null,cljs.core.vector,jamesmacaulay.zelkova.time.fps.call(null,(60)),jamesmacaulay.zelkova.keyboard.arrows);
dominator.mario.model = jamesmacaulay.zelkova.signal.reductions.call(null,dominator.mario.step,dominator.mario.mario,dominator.mario.input);
dominator.core.render.call(null,jamesmacaulay.zelkova.signal.map.call(null,dominator.mario.view,jamesmacaulay.zelkova.window.dimensions,dominator.mario.model),document.body);

//# sourceMappingURL=mario.js.map
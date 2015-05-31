// Compiled by ClojureScript 0.0-3178 {}
goog.provide('dominator.core');
goog.require('cljs.core');
goog.require('stch.html');
goog.require('dominator.attributes');
goog.require('jamesmacaulay.zelkova.signal');
dominator.core.VNode = VDOM.VNode;
dominator.core.VText = VDOM.VText;
dominator.core.create = VDOM.create;
dominator.core.patch = VDOM.patch;
dominator.core.diff = VDOM.diff;

dominator.core.VDOMBuilder = (function (){var obj9169 = {};
return obj9169;
})();

dominator.core._vtree = (function dominator$core$_vtree(this$){
if((function (){var and__4158__auto__ = this$;
if(and__4158__auto__){
return this$.dominator$core$VDOMBuilder$_vtree$arity$1;
} else {
return and__4158__auto__;
}
})()){
return this$.dominator$core$VDOMBuilder$_vtree$arity$1(this$);
} else {
var x__4806__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4170__auto__ = (dominator.core._vtree[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (dominator.core._vtree["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"VDOMBuilder.-vtree",this$);
}
}
})().call(null,this$);
}
});

(dominator.core.VDOMBuilder["string"] = true);

(dominator.core._vtree["string"] = (function (this$){
return (new dominator.core.VText(this$));
}));

stch.html.Element.prototype.dominator$core$VDOMBuilder$ = true;

stch.html.Element.prototype.dominator$core$VDOMBuilder$_vtree$arity$1 = (function (this$){
var this$__$1 = this;
return (new dominator.core.VNode(cljs.core.name.call(null,this$__$1.tag),dominator.attributes.attrs__GT_props.call(null,this$__$1.attrs),cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,dominator.core._vtree,this$__$1.children))));
});

(dominator.core.VDOMBuilder["_"] = true);

(dominator.core._vtree["_"] = (function (this$){
return (new dominator.core.VText(this$.toString()));
}));
/**
 * Convert markup to a VTree.
 */
dominator.core.__GT_vtree = (function dominator$core$__GT_vtree(x){
if(cljs.core.sequential_QMARK_.call(null,x)){
return (new dominator.core.VNode("div",{},cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,dominator.core._vtree,x))));
} else {
return dominator.core._vtree.call(null,x);
}
});

/**
* @constructor
* @param {*} tree
* @param {*} root_node
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
dominator.core.VDOM = (function (tree,root_node,__meta,__extmap,__hash){
this.tree = tree;
this.root_node = root_node;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dominator.core.VDOM.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4765__auto__,k__4766__auto__){
var self__ = this;
var this__4765__auto____$1 = this;
return cljs.core._lookup.call(null,this__4765__auto____$1,k__4766__auto__,null);
});

dominator.core.VDOM.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4767__auto__,k9171,else__4768__auto__){
var self__ = this;
var this__4767__auto____$1 = this;
var G__9173 = (((k9171 instanceof cljs.core.Keyword))?k9171.fqn:null);
switch (G__9173) {
case "tree":
return self__.tree;

break;
case "root-node":
return self__.root_node;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9171,else__4768__auto__);

}
});

dominator.core.VDOM.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4779__auto__,writer__4780__auto__,opts__4781__auto__){
var self__ = this;
var this__4779__auto____$1 = this;
var pr_pair__4782__auto__ = ((function (this__4779__auto____$1){
return (function (keyval__4783__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4780__auto__,cljs.core.pr_writer,""," ","",opts__4781__auto__,keyval__4783__auto__);
});})(this__4779__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4780__auto__,pr_pair__4782__auto__,"#dominator.core.VDOM{",", ","}",opts__4781__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tree","tree",-196312028),self__.tree],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root-node","root-node",296879230),self__.root_node],null))], null),self__.__extmap));
});

dominator.core.VDOM.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4763__auto__){
var self__ = this;
var this__4763__auto____$1 = this;
return self__.__meta;
});

dominator.core.VDOM.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4759__auto__){
var self__ = this;
var this__4759__auto____$1 = this;
return (new dominator.core.VDOM(self__.tree,self__.root_node,self__.__meta,self__.__extmap,self__.__hash));
});

dominator.core.VDOM.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4769__auto__){
var self__ = this;
var this__4769__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

dominator.core.VDOM.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4760__auto__){
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

dominator.core.VDOM.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4761__auto__,other__4762__auto__){
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

dominator.core.VDOM.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4774__auto__,k__4775__auto__){
var self__ = this;
var this__4774__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tree","tree",-196312028),null,new cljs.core.Keyword(null,"root-node","root-node",296879230),null], null), null),k__4775__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4774__auto____$1),self__.__meta),k__4775__auto__);
} else {
return (new dominator.core.VDOM(self__.tree,self__.root_node,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4775__auto__)),null));
}
});

dominator.core.VDOM.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4772__auto__,k__4773__auto__,G__9170){
var self__ = this;
var this__4772__auto____$1 = this;
var pred__9174 = cljs.core.keyword_identical_QMARK_;
var expr__9175 = k__4773__auto__;
if(cljs.core.truth_(pred__9174.call(null,new cljs.core.Keyword(null,"tree","tree",-196312028),expr__9175))){
return (new dominator.core.VDOM(G__9170,self__.root_node,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9174.call(null,new cljs.core.Keyword(null,"root-node","root-node",296879230),expr__9175))){
return (new dominator.core.VDOM(self__.tree,G__9170,self__.__meta,self__.__extmap,null));
} else {
return (new dominator.core.VDOM(self__.tree,self__.root_node,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4773__auto__,G__9170),null));
}
}
});

dominator.core.VDOM.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4777__auto__){
var self__ = this;
var this__4777__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tree","tree",-196312028),self__.tree],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root-node","root-node",296879230),self__.root_node],null))], null),self__.__extmap));
});

dominator.core.VDOM.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4764__auto__,G__9170){
var self__ = this;
var this__4764__auto____$1 = this;
return (new dominator.core.VDOM(self__.tree,self__.root_node,G__9170,self__.__extmap,self__.__hash));
});

dominator.core.VDOM.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4770__auto__,entry__4771__auto__){
var self__ = this;
var this__4770__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4771__auto__)){
return cljs.core._assoc.call(null,this__4770__auto____$1,cljs.core._nth.call(null,entry__4771__auto__,(0)),cljs.core._nth.call(null,entry__4771__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4770__auto____$1,entry__4771__auto__);
}
});

dominator.core.VDOM.cljs$lang$type = true;

dominator.core.VDOM.cljs$lang$ctorPrSeq = (function (this__4799__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dominator.core/VDOM");
});

dominator.core.VDOM.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"dominator.core/VDOM");
});

dominator.core.__GT_VDOM = (function dominator$core$__GT_VDOM(tree,root_node){
return (new dominator.core.VDOM(tree,root_node,null,null,null));
});

dominator.core.map__GT_VDOM = (function dominator$core$map__GT_VDOM(G__9172){
return (new dominator.core.VDOM(new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(G__9172),new cljs.core.Keyword(null,"root-node","root-node",296879230).cljs$core$IFn$_invoke$arity$1(G__9172),null,cljs.core.dissoc.call(null,G__9172,new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.Keyword(null,"root-node","root-node",296879230)),null));
});

/**
 * Given a Javascript element elem returns a function that takes markup
 * and renders to the DOM at elem.
 */
dominator.core.patch_dom = (function dominator$core$patch_dom(elem){
var vdom = cljs.core.atom.call(null,null);
return ((function (vdom){
return (function (markup){
var new_tree = dominator.core.__GT_vtree.call(null,markup);
var temp__4424__auto__ = cljs.core.deref.call(null,vdom);
if((temp__4424__auto__ == null)){
var root_node = dominator.core.create.call(null,new_tree);
elem.appendChild(root_node);

return cljs.core.reset_BANG_.call(null,vdom,dominator.core.__GT_VDOM.call(null,new_tree,root_node));
} else {
var curr_vdom = temp__4424__auto__;
var patches = dominator.core.diff.call(null,curr_vdom.tree,new_tree);
var new_root = dominator.core.patch.call(null,curr_vdom.root_node,patches);
return cljs.core.reset_BANG_.call(null,vdom,dominator.core.__GT_VDOM.call(null,new_tree,new_root));
}
});
;})(vdom))
});
/**
 * Call f on the next animation frame.
 */
dominator.core.animate = (function dominator$core$animate(f){
return window.requestAnimationFrame(f);
});
/**
 * Takes a signal of markup and a Javascript element, and patches the
 * DOM with each animation frame.
 */
dominator.core.render = (function dominator$core$render(sig,elem){
var a = jamesmacaulay.zelkova.signal.pipe_to_atom.call(null,sig);
var patch_fn = dominator.core.patch_dom.call(null,elem);
var main = ((function (a,patch_fn){
return (function dominator$core$render_$_main(){
patch_fn.call(null,cljs.core.deref.call(null,a));

return dominator.core.animate.call(null,dominator$core$render_$_main);
});})(a,patch_fn))
;
return dominator.core.animate.call(null,main);
});

//# sourceMappingURL=core.js.map
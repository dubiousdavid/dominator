// Compiled by ClojureScript 0.0-3178 {}
goog.provide('stch.html');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.set');
goog.require('clojure.string');

/**
 * Build DOM nodes.
 */
stch.html.IDOMBuilder = (function (){var obj14785 = {};
return obj14785;
})();

stch.html._node = (function stch$html$_node(this$){
if((function (){var and__4158__auto__ = this$;
if(and__4158__auto__){
return this$.stch$html$IDOMBuilder$_node$arity$1;
} else {
return and__4158__auto__;
}
})()){
return this$.stch$html$IDOMBuilder$_node$arity$1(this$);
} else {
var x__4806__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4170__auto__ = (stch.html._node[goog.typeOf(x__4806__auto__)]);
if(or__4170__auto__){
return or__4170__auto__;
} else {
var or__4170__auto____$1 = (stch.html._node["_"]);
if(or__4170__auto____$1){
return or__4170__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDOMBuilder.-node",this$);
}
}
})().call(null,this$);
}
});

(stch.html.IDOMBuilder["_"] = true);

(stch.html._node["_"] = (function (this$){
return goog.dom.createTextNode([cljs.core.str(this$)].join(''));
}));

(stch.html.IDOMBuilder["string"] = true);

(stch.html._node["string"] = (function (this$){
return goog.dom.createTextNode(this$);
}));

Node.prototype.stch$html$IDOMBuilder$ = true;

Node.prototype.stch$html$IDOMBuilder$_node$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
stch.html.first_keyword_QMARK_ = cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first);
stch.html.split_args = (function stch$html$split_args(args){
return cljs.core.split_with.call(null,stch.html.first_keyword_QMARK_,cljs.core.partition.call(null,(2),(2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),args));
});
stch.html.flatten_children = (function stch$html$flatten_children(children){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,children)));
});
stch.html.classes__GT_set = (function stch$html$classes__GT_set(classes){
if(typeof classes === 'string'){
return cljs.core.set.call(null,clojure.string.split.call(null,classes,/\s+/));
} else {
if(cljs.core.set_QMARK_.call(null,classes)){
return classes;
} else {
if(cljs.core.sequential_QMARK_.call(null,classes)){
return cljs.core.set.call(null,classes);
} else {
return cljs.core.PersistentHashSet.EMPTY;

}
}
}
});
stch.html.combine_attrs = (function stch$html$combine_attrs(old_attrs,new_attrs){
if(cljs.core.truth_((function (){var or__4170__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(old_attrs);
if(cljs.core.truth_(or__4170__auto__)){
return or__4170__auto__;
} else {
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(new_attrs);
}
})())){
var old_classes = stch.html.classes__GT_set.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(old_attrs));
var new_classes = stch.html.classes__GT_set.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(new_attrs));
var combined_classes = clojure.set.union.call(null,old_classes,new_classes);
var classes = clojure.string.join.call(null," ",combined_classes);
return cljs.core.assoc.call(null,cljs.core.into.call(null,old_attrs,new_attrs),new cljs.core.Keyword(null,"class","class",-2030961996),classes);
} else {
return cljs.core.into.call(null,old_attrs,new_attrs);
}
});

/**
* @constructor
* @param {*} tag
* @param {*} attrs
* @param {*} children
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
stch.html.Element = (function (tag,attrs,children,__meta,__extmap,__hash){
this.tag = tag;
this.attrs = attrs;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
stch.html.Element.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4765__auto__,k__4766__auto__){
var self__ = this;
var this__4765__auto____$1 = this;
return cljs.core._lookup.call(null,this__4765__auto____$1,k__4766__auto__,null);
});

stch.html.Element.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4767__auto__,k14787,else__4768__auto__){
var self__ = this;
var this__4767__auto____$1 = this;
var G__14790 = (((k14787 instanceof cljs.core.Keyword))?k14787.fqn:null);
switch (G__14790) {
case "tag":
return self__.tag;

break;
case "attrs":
return self__.attrs;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14787,else__4768__auto__);

}
});

stch.html.Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4779__auto__,writer__4780__auto__,opts__4781__auto__){
var self__ = this;
var this__4779__auto____$1 = this;
var pr_pair__4782__auto__ = ((function (this__4779__auto____$1){
return (function (keyval__4783__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4780__auto__,cljs.core.pr_writer,""," ","",opts__4781__auto__,keyval__4783__auto__);
});})(this__4779__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4780__auto__,pr_pair__4782__auto__,"#stch.html.Element{",", ","}",opts__4781__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});

stch.html.Element.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4763__auto__){
var self__ = this;
var this__4763__auto____$1 = this;
return self__.__meta;
});

stch.html.Element.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4759__auto__){
var self__ = this;
var this__4759__auto____$1 = this;
return (new stch.html.Element(self__.tag,self__.attrs,self__.children,self__.__meta,self__.__extmap,self__.__hash));
});

stch.html.Element.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4769__auto__){
var self__ = this;
var this__4769__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

stch.html.Element.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4760__auto__){
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

stch.html.Element.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4761__auto__,other__4762__auto__){
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

stch.html.Element.prototype.stch$html$IDOMBuilder$ = true;

stch.html.Element.prototype.stch$html$IDOMBuilder$_node$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.seq.call(null,self__.children)){
return cljs.core.apply.call(null,goog.dom.createDom,self__.tag,cljs.core.clj__GT_js.call(null,self__.attrs),cljs.core.map.call(null,stch.html._node,self__.children));
} else {
return goog.dom.createDom(self__.tag,cljs.core.clj__GT_js.call(null,self__.attrs));
}
});

stch.html.Element.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4774__auto__,k__4775__auto__){
var self__ = this;
var this__4774__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__4775__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4774__auto____$1),self__.__meta),k__4775__auto__);
} else {
return (new stch.html.Element(self__.tag,self__.attrs,self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4775__auto__)),null));
}
});

stch.html.Element.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4772__auto__,k__4773__auto__,G__14786){
var self__ = this;
var this__4772__auto____$1 = this;
var pred__14791 = cljs.core.keyword_identical_QMARK_;
var expr__14792 = k__4773__auto__;
if(cljs.core.truth_(pred__14791.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__14792))){
return (new stch.html.Element(G__14786,self__.attrs,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14791.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__14792))){
return (new stch.html.Element(self__.tag,G__14786,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14791.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__14792))){
return (new stch.html.Element(self__.tag,self__.attrs,G__14786,self__.__meta,self__.__extmap,null));
} else {
return (new stch.html.Element(self__.tag,self__.attrs,self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4773__auto__,G__14786),null));
}
}
}
});

stch.html.Element.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4777__auto__){
var self__ = this;
var this__4777__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});

stch.html.Element.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4764__auto__,G__14786){
var self__ = this;
var this__4764__auto____$1 = this;
return (new stch.html.Element(self__.tag,self__.attrs,self__.children,G__14786,self__.__extmap,self__.__hash));
});

stch.html.Element.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4770__auto__,entry__4771__auto__){
var self__ = this;
var this__4770__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4771__auto__)){
return cljs.core._assoc.call(null,this__4770__auto____$1,cljs.core._nth.call(null,entry__4771__auto__,(0)),cljs.core._nth.call(null,entry__4771__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4770__auto____$1,entry__4771__auto__);
}
});

stch.html.Element.prototype.call = (function() { 
var G__14797__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__14794 = stch.html.parse_args.call(null,args);
var attrs__$1 = cljs.core.nth.call(null,vec__14794,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__14794,(1),null);
return (new stch.html.Element(this$.tag,stch.html.combine_attrs.call(null,this$.attrs,attrs__$1),cljs.core.into.call(null,this$.children,children__$1),null,null,null));
};
var G__14797 = function (self__,var_args){
var self__ = this;
var args = null;
if (arguments.length > 1) {
var G__14798__i = 0, G__14798__a = new Array(arguments.length -  1);
while (G__14798__i < G__14798__a.length) {G__14798__a[G__14798__i] = arguments[G__14798__i + 1]; ++G__14798__i;}
  args = new cljs.core.IndexedSeq(G__14798__a,0);
} 
return G__14797__delegate.call(this,self__,args);};
G__14797.cljs$lang$maxFixedArity = 1;
G__14797.cljs$lang$applyTo = (function (arglist__14799){
var self__ = cljs.core.first(arglist__14799);
var args = cljs.core.rest(arglist__14799);
return G__14797__delegate(self__,args);
});
G__14797.cljs$core$IFn$_invoke$arity$variadic = G__14797__delegate;
return G__14797;
})()
;

stch.html.Element.prototype.apply = (function (self__,args14789){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args14789)));
});

stch.html.Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__14800__delegate = function (args){
var this$ = this;
var vec__14795 = stch.html.parse_args.call(null,args);
var attrs__$1 = cljs.core.nth.call(null,vec__14795,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__14795,(1),null);
return (new stch.html.Element(this$.tag,stch.html.combine_attrs.call(null,this$.attrs,attrs__$1),cljs.core.into.call(null,this$.children,children__$1),null,null,null));
};
var G__14800 = function (var_args){
var self__ = this;
var args = null;
if (arguments.length > 0) {
var G__14801__i = 0, G__14801__a = new Array(arguments.length -  0);
while (G__14801__i < G__14801__a.length) {G__14801__a[G__14801__i] = arguments[G__14801__i + 0]; ++G__14801__i;}
  args = new cljs.core.IndexedSeq(G__14801__a,0);
} 
return G__14800__delegate.call(this,args);};
G__14800.cljs$lang$maxFixedArity = 0;
G__14800.cljs$lang$applyTo = (function (arglist__14802){
var args = cljs.core.seq(arglist__14802);
return G__14800__delegate(args);
});
G__14800.cljs$core$IFn$_invoke$arity$variadic = G__14800__delegate;
return G__14800;
})()
;

stch.html.Element.cljs$lang$type = true;

stch.html.Element.cljs$lang$ctorPrSeq = (function (this__4799__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"stch.html/Element");
});

stch.html.Element.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"stch.html/Element");
});

stch.html.__GT_Element = (function stch$html$__GT_Element(tag,attrs,children){
return (new stch.html.Element(tag,attrs,children,null,null,null));
});

stch.html.map__GT_Element = (function stch$html$map__GT_Element(G__14788){
return (new stch.html.Element(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__14788),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__14788),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__14788),null,cljs.core.dissoc.call(null,G__14788,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"children","children",-940561982)),null));
});

stch.html.parse_args = (function stch$html$parse_args(p__14803){
var vec__14806 = p__14803;
var head = cljs.core.nth.call(null,vec__14806,(0),null);
var tail = cljs.core.nthnext.call(null,vec__14806,(1));
var args = vec__14806;
if((head instanceof stch.html.Element)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,stch.html.flatten_children.call(null,args)], null);
} else {
if((head instanceof cljs.core.Keyword)){
var vec__14807 = stch.html.split_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__14807,(0),null);
var children = cljs.core.nth.call(null,vec__14807,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,attrs)),stch.html.flatten_children.call(null,children)], null);
} else {
if(cljs.core.map_QMARK_.call(null,head)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,stch.html.flatten_children.call(null,tail)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,stch.html.flatten_children.call(null,args)], null);

}
}
}
});
stch.html.mk_elem_fn = (function stch$html$mk_elem_fn(tag){
return (function() { 
var G__14808__delegate = function (args){
return cljs.core.apply.call(null,(new stch.html.Element(tag,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,null,null,null)),args);
};
var G__14808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14809__i = 0, G__14809__a = new Array(arguments.length -  0);
while (G__14809__i < G__14809__a.length) {G__14809__a[G__14809__i] = arguments[G__14809__i + 0]; ++G__14809__i;}
  args = new cljs.core.IndexedSeq(G__14809__a,0);
} 
return G__14808__delegate.call(this,args);};
G__14808.cljs$lang$maxFixedArity = 0;
G__14808.cljs$lang$applyTo = (function (arglist__14810){
var args = cljs.core.seq(arglist__14810);
return G__14808__delegate(args);
});
G__14808.cljs$core$IFn$_invoke$arity$variadic = G__14808__delegate;
return G__14808;
})()
;
});
stch.html.__GT_html = (function stch$html$__GT_html(nodes){
if(cljs.core.sequential_QMARK_.call(null,nodes)){
var docfrag = document.createDocumentFragment();
var seq__14815_14819 = cljs.core.seq.call(null,cljs.core.map.call(null,stch.html._node,nodes));
var chunk__14816_14820 = null;
var count__14817_14821 = (0);
var i__14818_14822 = (0);
while(true){
if((i__14818_14822 < count__14817_14821)){
var node_14823 = cljs.core._nth.call(null,chunk__14816_14820,i__14818_14822);
docfrag.appendChild(node_14823);

var G__14824 = seq__14815_14819;
var G__14825 = chunk__14816_14820;
var G__14826 = count__14817_14821;
var G__14827 = (i__14818_14822 + (1));
seq__14815_14819 = G__14824;
chunk__14816_14820 = G__14825;
count__14817_14821 = G__14826;
i__14818_14822 = G__14827;
continue;
} else {
var temp__4422__auto___14828 = cljs.core.seq.call(null,seq__14815_14819);
if(temp__4422__auto___14828){
var seq__14815_14829__$1 = temp__4422__auto___14828;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14815_14829__$1)){
var c__4955__auto___14830 = cljs.core.chunk_first.call(null,seq__14815_14829__$1);
var G__14831 = cljs.core.chunk_rest.call(null,seq__14815_14829__$1);
var G__14832 = c__4955__auto___14830;
var G__14833 = cljs.core.count.call(null,c__4955__auto___14830);
var G__14834 = (0);
seq__14815_14819 = G__14831;
chunk__14816_14820 = G__14832;
count__14817_14821 = G__14833;
i__14818_14822 = G__14834;
continue;
} else {
var node_14835 = cljs.core.first.call(null,seq__14815_14829__$1);
docfrag.appendChild(node_14835);

var G__14836 = cljs.core.next.call(null,seq__14815_14829__$1);
var G__14837 = null;
var G__14838 = (0);
var G__14839 = (0);
seq__14815_14819 = G__14836;
chunk__14816_14820 = G__14837;
count__14817_14821 = G__14838;
i__14818_14822 = G__14839;
continue;
}
} else {
}
}
break;
}

return docfrag;
} else {
return stch.html._node.call(null,nodes);
}
});
stch.html.a = stch.html.mk_elem_fn.call(null,"a");
stch.html.abbr = stch.html.mk_elem_fn.call(null,"abbr");
stch.html.acronym = stch.html.mk_elem_fn.call(null,"acronym");
stch.html.address = stch.html.mk_elem_fn.call(null,"address");
stch.html.applet = stch.html.mk_elem_fn.call(null,"applet");
stch.html.area = stch.html.mk_elem_fn.call(null,"area");
stch.html.article = stch.html.mk_elem_fn.call(null,"article");
stch.html.aside = stch.html.mk_elem_fn.call(null,"aside");
stch.html.audio = stch.html.mk_elem_fn.call(null,"audio");
stch.html.b = stch.html.mk_elem_fn.call(null,"b");
stch.html.base = stch.html.mk_elem_fn.call(null,"base");
stch.html.basefont = stch.html.mk_elem_fn.call(null,"basefont");
stch.html.bdi = stch.html.mk_elem_fn.call(null,"bdi");
stch.html.bdo = stch.html.mk_elem_fn.call(null,"bdo");
stch.html.big = stch.html.mk_elem_fn.call(null,"big");
stch.html.blockquote = stch.html.mk_elem_fn.call(null,"blockquote");
stch.html.body = stch.html.mk_elem_fn.call(null,"body");
stch.html.br = stch.html.mk_elem_fn.call(null,"br");
stch.html.button = stch.html.mk_elem_fn.call(null,"button");
stch.html.canvas = stch.html.mk_elem_fn.call(null,"canvas");
stch.html.caption = stch.html.mk_elem_fn.call(null,"caption");
stch.html.center = stch.html.mk_elem_fn.call(null,"center");
stch.html.cite = stch.html.mk_elem_fn.call(null,"cite");
stch.html.code = stch.html.mk_elem_fn.call(null,"code");
stch.html.col = stch.html.mk_elem_fn.call(null,"col");
stch.html.colgroup = stch.html.mk_elem_fn.call(null,"colgroup");
stch.html.command = stch.html.mk_elem_fn.call(null,"command");
stch.html.data = stch.html.mk_elem_fn.call(null,"data");
stch.html.datalist = stch.html.mk_elem_fn.call(null,"datalist");
stch.html.dd = stch.html.mk_elem_fn.call(null,"dd");
stch.html.del = stch.html.mk_elem_fn.call(null,"del");
stch.html.details = stch.html.mk_elem_fn.call(null,"details");
stch.html.dfn = stch.html.mk_elem_fn.call(null,"dfn");
stch.html.html_dir = stch.html.mk_elem_fn.call(null,"dir");
stch.html.div = stch.html.mk_elem_fn.call(null,"div");
stch.html.dl = stch.html.mk_elem_fn.call(null,"dl");
stch.html.dt = stch.html.mk_elem_fn.call(null,"dt");
stch.html.em = stch.html.mk_elem_fn.call(null,"em");
stch.html.embed = stch.html.mk_elem_fn.call(null,"embed");
stch.html.eventsource = stch.html.mk_elem_fn.call(null,"eventsource");
stch.html.fieldset = stch.html.mk_elem_fn.call(null,"fieldset");
stch.html.figcaption = stch.html.mk_elem_fn.call(null,"figcaption");
stch.html.figure = stch.html.mk_elem_fn.call(null,"figure");
stch.html.font = stch.html.mk_elem_fn.call(null,"font");
stch.html.footer = stch.html.mk_elem_fn.call(null,"footer");
stch.html.form = stch.html.mk_elem_fn.call(null,"form");
stch.html.frame = stch.html.mk_elem_fn.call(null,"frame");
stch.html.frameset = stch.html.mk_elem_fn.call(null,"frameset");
stch.html.h1 = stch.html.mk_elem_fn.call(null,"h1");
stch.html.h2 = stch.html.mk_elem_fn.call(null,"h2");
stch.html.h3 = stch.html.mk_elem_fn.call(null,"h3");
stch.html.h4 = stch.html.mk_elem_fn.call(null,"h4");
stch.html.h5 = stch.html.mk_elem_fn.call(null,"h5");
stch.html.h6 = stch.html.mk_elem_fn.call(null,"h6");
stch.html.head = stch.html.mk_elem_fn.call(null,"head");
stch.html.header = stch.html.mk_elem_fn.call(null,"header");
stch.html.hgroup = stch.html.mk_elem_fn.call(null,"hgroup");
stch.html.hr = stch.html.mk_elem_fn.call(null,"hr");
stch.html.html = stch.html.mk_elem_fn.call(null,"html");
stch.html.i = stch.html.mk_elem_fn.call(null,"i");
stch.html.iframe = stch.html.mk_elem_fn.call(null,"iframe");
stch.html.img = stch.html.mk_elem_fn.call(null,"img");
stch.html.input = stch.html.mk_elem_fn.call(null,"input");
stch.html.ins = stch.html.mk_elem_fn.call(null,"ins");
stch.html.isindex = stch.html.mk_elem_fn.call(null,"isindex");
stch.html.kbd = stch.html.mk_elem_fn.call(null,"kbd");
stch.html.keygen = stch.html.mk_elem_fn.call(null,"keygen");
stch.html.label = stch.html.mk_elem_fn.call(null,"label");
stch.html.legend = stch.html.mk_elem_fn.call(null,"legend");
stch.html.li = stch.html.mk_elem_fn.call(null,"li");
stch.html.link = stch.html.mk_elem_fn.call(null,"link");
stch.html.html_map = stch.html.mk_elem_fn.call(null,"map");
stch.html.mark = stch.html.mk_elem_fn.call(null,"mark");
stch.html.menu = stch.html.mk_elem_fn.call(null,"menu");
stch.html.html_meta = stch.html.mk_elem_fn.call(null,"meta");
stch.html.meter = stch.html.mk_elem_fn.call(null,"meter");
stch.html.nav = stch.html.mk_elem_fn.call(null,"nav");
stch.html.noframes = stch.html.mk_elem_fn.call(null,"noframes");
stch.html.noscript = stch.html.mk_elem_fn.call(null,"noscript");
stch.html.object = stch.html.mk_elem_fn.call(null,"object");
stch.html.ol = stch.html.mk_elem_fn.call(null,"ol");
stch.html.optgroup = stch.html.mk_elem_fn.call(null,"optgroup");
stch.html.option = stch.html.mk_elem_fn.call(null,"option");
stch.html.output = stch.html.mk_elem_fn.call(null,"output");
stch.html.p = stch.html.mk_elem_fn.call(null,"p");
stch.html.param = stch.html.mk_elem_fn.call(null,"param");
stch.html.pre = stch.html.mk_elem_fn.call(null,"pre");
stch.html.progress = stch.html.mk_elem_fn.call(null,"progress");
stch.html.q = stch.html.mk_elem_fn.call(null,"q");
stch.html.rp = stch.html.mk_elem_fn.call(null,"rp");
stch.html.rt = stch.html.mk_elem_fn.call(null,"rt");
stch.html.ruby = stch.html.mk_elem_fn.call(null,"ruby");
stch.html.s = stch.html.mk_elem_fn.call(null,"s");
stch.html.samp = stch.html.mk_elem_fn.call(null,"samp");
stch.html.script = stch.html.mk_elem_fn.call(null,"script");
stch.html.section = stch.html.mk_elem_fn.call(null,"section");
stch.html.select = stch.html.mk_elem_fn.call(null,"select");
stch.html.small = stch.html.mk_elem_fn.call(null,"small");
stch.html.html_source = stch.html.mk_elem_fn.call(null,"source");
stch.html.span = stch.html.mk_elem_fn.call(null,"span");
stch.html.strike = stch.html.mk_elem_fn.call(null,"strike");
stch.html.strong = stch.html.mk_elem_fn.call(null,"strong");
stch.html.style = stch.html.mk_elem_fn.call(null,"style");
stch.html.sub = stch.html.mk_elem_fn.call(null,"sub");
stch.html.summary = stch.html.mk_elem_fn.call(null,"summary");
stch.html.sup = stch.html.mk_elem_fn.call(null,"sup");
stch.html.table = stch.html.mk_elem_fn.call(null,"table");
stch.html.tbody = stch.html.mk_elem_fn.call(null,"tbody");
stch.html.td = stch.html.mk_elem_fn.call(null,"td");
stch.html.textarea = stch.html.mk_elem_fn.call(null,"textarea");
stch.html.tfoot = stch.html.mk_elem_fn.call(null,"tfoot");
stch.html.th = stch.html.mk_elem_fn.call(null,"th");
stch.html.thead = stch.html.mk_elem_fn.call(null,"thead");
stch.html.html_time = stch.html.mk_elem_fn.call(null,"time");
stch.html.title = stch.html.mk_elem_fn.call(null,"title");
stch.html.tr = stch.html.mk_elem_fn.call(null,"tr");
stch.html.track = stch.html.mk_elem_fn.call(null,"track");
stch.html.tt = stch.html.mk_elem_fn.call(null,"tt");
stch.html.u = stch.html.mk_elem_fn.call(null,"u");
stch.html.ul = stch.html.mk_elem_fn.call(null,"ul");
stch.html.html_var = stch.html.mk_elem_fn.call(null,"var");
stch.html.video = stch.html.mk_elem_fn.call(null,"video");
stch.html.wbr = stch.html.mk_elem_fn.call(null,"wbr");

//# sourceMappingURL=html.js.map
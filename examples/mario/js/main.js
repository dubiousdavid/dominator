if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}


;(function(){
var g, aa = this;
function n(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function da(a) {
  var b = n(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function ea(a) {
  return "string" == typeof a;
}
function ga(a) {
  return "function" == n(a);
}
function ha(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
var ja = "closure_uid_" + (1E9 * Math.random() >>> 0), ka = 0;
function la(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ma(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function qa(a, b, c) {
  qa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
  return qa.apply(null, arguments);
}
;function ra(a) {
  if (!sa.test(a)) {
    return a;
  }
  -1 != a.indexOf("\x26") && (a = a.replace(ta, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(ua, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(xa, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(ya, "\x26quot;"));
  -1 != a.indexOf("'") && (a = a.replace(Aa, "\x26#39;"));
  -1 != a.indexOf("\x00") && (a = a.replace(Ca, "\x26#0;"));
  return a;
}
var ta = /&/g, ua = /</g, xa = />/g, ya = /"/g, Aa = /'/g, Ca = /\x00/g, sa = /[\x00&<>"']/;
function Ea(a) {
  return Array.prototype.join.call(arguments, "");
}
function Fa(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
;function Ha(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
var Ia = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ja(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < Ia.length;f++) {
      c = Ia[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
;function La(a, b) {
  null != a && this.append.apply(this, arguments);
}
g = La.prototype;
g.rb = "";
g.set = function(a) {
  this.rb = "" + a;
};
g.append = function(a, b, c) {
  this.rb += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.rb += arguments[d];
    }
  }
  return this;
};
g.clear = function() {
  this.rb = "";
};
g.toString = function() {
  return this.rb;
};
var Ma = Array.prototype, Pa = Ma.indexOf ? function(a, b, c) {
  return Ma.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (ea(a)) {
    return ea(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
}, Qa = Ma.forEach ? function(a, b, c) {
  Ma.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = ea(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
};
function Ra(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}
function Sa(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;var Ta;
if ("undefined" === typeof Va) {
  var Va = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
var Wa = !0, Za = null;
if ("undefined" === typeof $a) {
  var $a = null
}
function ab() {
  return new bb(null, 5, [cb, !0, db, !0, eb, !1, gb, !1, hb, null], null);
}
function w(a) {
  return null != a && !1 !== a;
}
function ib(a) {
  return null == a;
}
function jb(a) {
  return a instanceof Array;
}
function kb(a) {
  return w(a) ? !1 : !0;
}
function x(a, b) {
  return a[n(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function lb(a) {
  return null == a ? null : a.constructor;
}
function z(a, b) {
  var c = lb(b), c = w(w(c) ? c.Ib : c) ? c.Gb : n(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function mb(a) {
  var b = a.Gb;
  return w(b) ? b : "" + A(a);
}
var nb = "undefined" !== typeof Symbol && "function" === n(Symbol) ? Symbol.iterator : "@@iterator";
function ob(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
function pb() {
  switch(arguments.length) {
    case 1:
      return qb(arguments[0]);
    case 2:
      return qb(arguments[1]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function rb(a) {
  return qb(a);
}
function qb(a) {
  function b(a, b) {
    a.push(b);
    return a;
  }
  var c = [];
  return sb ? sb(b, c, a) : tb.call(null, b, c, a);
}
var ub = {}, vb = {}, wb = {}, xb = function xb(b) {
  if (b ? b.I : b) {
    return b.I(b);
  }
  var c;
  c = xb[n(null == b ? null : b)];
  if (!c && (c = xb._, !c)) {
    throw z("ICounted.-count", b);
  }
  return c.call(null, b);
}, yb = function yb(b) {
  if (b ? b.Q : b) {
    return b.Q(b);
  }
  var c;
  c = yb[n(null == b ? null : b)];
  if (!c && (c = yb._, !c)) {
    throw z("IEmptyableCollection.-empty", b);
  }
  return c.call(null, b);
}, zb = {}, Ab = function Ab(b, c) {
  if (b ? b.G : b) {
    return b.G(b, c);
  }
  var d;
  d = Ab[n(null == b ? null : b)];
  if (!d && (d = Ab._, !d)) {
    throw z("ICollection.-conj", b);
  }
  return d.call(null, b, c);
}, Bb = {}, B = function B() {
  switch(arguments.length) {
    case 2:
      return B.a(arguments[0], arguments[1]);
    case 3:
      return B.d(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
B.a = function(a, b) {
  if (a ? a.O : a) {
    return a.O(a, b);
  }
  var c;
  c = B[n(null == a ? null : a)];
  if (!c && (c = B._, !c)) {
    throw z("IIndexed.-nth", a);
  }
  return c.call(null, a, b);
};
B.d = function(a, b, c) {
  if (a ? a.sa : a) {
    return a.sa(a, b, c);
  }
  var d;
  d = B[n(null == a ? null : a)];
  if (!d && (d = B._, !d)) {
    throw z("IIndexed.-nth", a);
  }
  return d.call(null, a, b, c);
};
B.v = 3;
var Cb = {}, Db = function Db(b) {
  if (b ? b.U : b) {
    return b.U(b);
  }
  var c;
  c = Db[n(null == b ? null : b)];
  if (!c && (c = Db._, !c)) {
    throw z("ISeq.-first", b);
  }
  return c.call(null, b);
}, Eb = function Eb(b) {
  if (b ? b.ma : b) {
    return b.ma(b);
  }
  var c;
  c = Eb[n(null == b ? null : b)];
  if (!c && (c = Eb._, !c)) {
    throw z("ISeq.-rest", b);
  }
  return c.call(null, b);
}, Fb = {}, Gb = {}, Hb = function Hb() {
  switch(arguments.length) {
    case 2:
      return Hb.a(arguments[0], arguments[1]);
    case 3:
      return Hb.d(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
Hb.a = function(a, b) {
  if (a ? a.w : a) {
    return a.w(a, b);
  }
  var c;
  c = Hb[n(null == a ? null : a)];
  if (!c && (c = Hb._, !c)) {
    throw z("ILookup.-lookup", a);
  }
  return c.call(null, a, b);
};
Hb.d = function(a, b, c) {
  if (a ? a.u : a) {
    return a.u(a, b, c);
  }
  var d;
  d = Hb[n(null == a ? null : a)];
  if (!d && (d = Hb._, !d)) {
    throw z("ILookup.-lookup", a);
  }
  return d.call(null, a, b, c);
};
Hb.v = 3;
var Ib = function Ib(b, c) {
  if (b ? b.kc : b) {
    return b.kc(b, c);
  }
  var d;
  d = Ib[n(null == b ? null : b)];
  if (!d && (d = Ib._, !d)) {
    throw z("IAssociative.-contains-key?", b);
  }
  return d.call(null, b, c);
}, Jb = function Jb(b, c, d) {
  if (b ? b.pa : b) {
    return b.pa(b, c, d);
  }
  var e;
  e = Jb[n(null == b ? null : b)];
  if (!e && (e = Jb._, !e)) {
    throw z("IAssociative.-assoc", b);
  }
  return e.call(null, b, c, d);
}, Kb = {}, Lb = function Lb(b, c) {
  if (b ? b.ya : b) {
    return b.ya(b, c);
  }
  var d;
  d = Lb[n(null == b ? null : b)];
  if (!d && (d = Lb._, !d)) {
    throw z("IMap.-dissoc", b);
  }
  return d.call(null, b, c);
}, Mb = {}, Nb = function Nb(b) {
  if (b ? b.Tb : b) {
    return b.Tb(b);
  }
  var c;
  c = Nb[n(null == b ? null : b)];
  if (!c && (c = Nb._, !c)) {
    throw z("IMapEntry.-key", b);
  }
  return c.call(null, b);
}, Ob = function Ob(b) {
  if (b ? b.Ub : b) {
    return b.Ub(b);
  }
  var c;
  c = Ob[n(null == b ? null : b)];
  if (!c && (c = Ob._, !c)) {
    throw z("IMapEntry.-val", b);
  }
  return c.call(null, b);
}, Pb = {}, Qb = function Qb(b, c) {
  if (b ? b.zc : b) {
    return b.zc(b, c);
  }
  var d;
  d = Qb[n(null == b ? null : b)];
  if (!d && (d = Qb._, !d)) {
    throw z("ISet.-disjoin", b);
  }
  return d.call(null, b, c);
}, Rb = function Rb(b) {
  if (b ? b.sb : b) {
    return b.sb(b);
  }
  var c;
  c = Rb[n(null == b ? null : b)];
  if (!c && (c = Rb._, !c)) {
    throw z("IStack.-peek", b);
  }
  return c.call(null, b);
}, Sb = function Sb(b) {
  if (b ? b.tb : b) {
    return b.tb(b);
  }
  var c;
  c = Sb[n(null == b ? null : b)];
  if (!c && (c = Sb._, !c)) {
    throw z("IStack.-pop", b);
  }
  return c.call(null, b);
}, Tb = {}, Ub = function Ub(b, c, d) {
  if (b ? b.wb : b) {
    return b.wb(b, c, d);
  }
  var e;
  e = Ub[n(null == b ? null : b)];
  if (!e && (e = Ub._, !e)) {
    throw z("IVector.-assoc-n", b);
  }
  return e.call(null, b, c, d);
}, Vb = function Vb(b) {
  if (b ? b.Bb : b) {
    return b.Bb(b);
  }
  var c;
  c = Vb[n(null == b ? null : b)];
  if (!c && (c = Vb._, !c)) {
    throw z("IDeref.-deref", b);
  }
  return c.call(null, b);
}, Wb = {}, Xb = function Xb(b) {
  if (b ? b.A : b) {
    return b.A(b);
  }
  var c;
  c = Xb[n(null == b ? null : b)];
  if (!c && (c = Xb._, !c)) {
    throw z("IMeta.-meta", b);
  }
  return c.call(null, b);
}, Yb = {}, Zb = function Zb(b, c) {
  if (b ? b.C : b) {
    return b.C(b, c);
  }
  var d;
  d = Zb[n(null == b ? null : b)];
  if (!d && (d = Zb._, !d)) {
    throw z("IWithMeta.-with-meta", b);
  }
  return d.call(null, b, c);
}, $b = {}, ac = function ac() {
  switch(arguments.length) {
    case 2:
      return ac.a(arguments[0], arguments[1]);
    case 3:
      return ac.d(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
ac.a = function(a, b) {
  if (a ? a.S : a) {
    return a.S(a, b);
  }
  var c;
  c = ac[n(null == a ? null : a)];
  if (!c && (c = ac._, !c)) {
    throw z("IReduce.-reduce", a);
  }
  return c.call(null, a, b);
};
ac.d = function(a, b, c) {
  if (a ? a.T : a) {
    return a.T(a, b, c);
  }
  var d;
  d = ac[n(null == a ? null : a)];
  if (!d && (d = ac._, !d)) {
    throw z("IReduce.-reduce", a);
  }
  return d.call(null, a, b, c);
};
ac.v = 3;
var bc = function bc(b, c) {
  if (b ? b.q : b) {
    return b.q(b, c);
  }
  var d;
  d = bc[n(null == b ? null : b)];
  if (!d && (d = bc._, !d)) {
    throw z("IEquiv.-equiv", b);
  }
  return d.call(null, b, c);
}, cc = function cc(b) {
  if (b ? b.F : b) {
    return b.F(b);
  }
  var c;
  c = cc[n(null == b ? null : b)];
  if (!c && (c = cc._, !c)) {
    throw z("IHash.-hash", b);
  }
  return c.call(null, b);
}, dc = {}, ec = function ec(b) {
  if (b ? b.H : b) {
    return b.H(b);
  }
  var c;
  c = ec[n(null == b ? null : b)];
  if (!c && (c = ec._, !c)) {
    throw z("ISeqable.-seq", b);
  }
  return c.call(null, b);
}, fc = {}, gc = {}, hc = function hc(b) {
  if (b ? b.Db : b) {
    return b.Db(b);
  }
  var c;
  c = hc[n(null == b ? null : b)];
  if (!c && (c = hc._, !c)) {
    throw z("IReversible.-rseq", b);
  }
  return c.call(null, b);
}, ic = function ic(b, c) {
  if (b ? b.Uc : b) {
    return b.Uc(0, c);
  }
  var d;
  d = ic[n(null == b ? null : b)];
  if (!d && (d = ic._, !d)) {
    throw z("IWriter.-write", b);
  }
  return d.call(null, b, c);
}, jc = {}, kc = function kc(b, c, d) {
  if (b ? b.B : b) {
    return b.B(b, c, d);
  }
  var e;
  e = kc[n(null == b ? null : b)];
  if (!e && (e = kc._, !e)) {
    throw z("IPrintWithWriter.-pr-writer", b);
  }
  return e.call(null, b, c, d);
}, lc = function lc(b, c, d) {
  if (b ? b.Tc : b) {
    return b.Tc(0, c, d);
  }
  var e;
  e = lc[n(null == b ? null : b)];
  if (!e && (e = lc._, !e)) {
    throw z("IWatchable.-notify-watches", b);
  }
  return e.call(null, b, c, d);
}, mc = function mc(b) {
  if (b ? b.Cb : b) {
    return b.Cb(b);
  }
  var c;
  c = mc[n(null == b ? null : b)];
  if (!c && (c = mc._, !c)) {
    throw z("IEditableCollection.-as-transient", b);
  }
  return c.call(null, b);
}, nc = function nc(b, c) {
  if (b ? b.ub : b) {
    return b.ub(b, c);
  }
  var d;
  d = nc[n(null == b ? null : b)];
  if (!d && (d = nc._, !d)) {
    throw z("ITransientCollection.-conj!", b);
  }
  return d.call(null, b, c);
}, oc = function oc(b) {
  if (b ? b.vb : b) {
    return b.vb(b);
  }
  var c;
  c = oc[n(null == b ? null : b)];
  if (!c && (c = oc._, !c)) {
    throw z("ITransientCollection.-persistent!", b);
  }
  return c.call(null, b);
}, pc = function pc(b, c, d) {
  if (b ? b.Yb : b) {
    return b.Yb(b, c, d);
  }
  var e;
  e = pc[n(null == b ? null : b)];
  if (!e && (e = pc._, !e)) {
    throw z("ITransientAssociative.-assoc!", b);
  }
  return e.call(null, b, c, d);
}, qc = function qc(b, c, d) {
  if (b ? b.Rc : b) {
    return b.Rc(0, c, d);
  }
  var e;
  e = qc[n(null == b ? null : b)];
  if (!e && (e = qc._, !e)) {
    throw z("ITransientVector.-assoc-n!", b);
  }
  return e.call(null, b, c, d);
}, rc = function rc(b) {
  if (b ? b.Pc : b) {
    return b.Pc();
  }
  var c;
  c = rc[n(null == b ? null : b)];
  if (!c && (c = rc._, !c)) {
    throw z("IChunk.-drop-first", b);
  }
  return c.call(null, b);
}, sc = function sc(b) {
  if (b ? b.wc : b) {
    return b.wc(b);
  }
  var c;
  c = sc[n(null == b ? null : b)];
  if (!c && (c = sc._, !c)) {
    throw z("IChunkedSeq.-chunked-first", b);
  }
  return c.call(null, b);
}, tc = function tc(b) {
  if (b ? b.xc : b) {
    return b.xc(b);
  }
  var c;
  c = tc[n(null == b ? null : b)];
  if (!c && (c = tc._, !c)) {
    throw z("IChunkedSeq.-chunked-rest", b);
  }
  return c.call(null, b);
}, vc = function vc(b) {
  if (b ? b.vc : b) {
    return b.vc(b);
  }
  var c;
  c = vc[n(null == b ? null : b)];
  if (!c && (c = vc._, !c)) {
    throw z("IChunkedNext.-chunked-next", b);
  }
  return c.call(null, b);
}, wc = function wc(b) {
  if (b ? b.Vb : b) {
    return b.Vb(b);
  }
  var c;
  c = wc[n(null == b ? null : b)];
  if (!c && (c = wc._, !c)) {
    throw z("INamed.-name", b);
  }
  return c.call(null, b);
}, xc = function xc(b) {
  if (b ? b.Wb : b) {
    return b.Wb(b);
  }
  var c;
  c = xc[n(null == b ? null : b)];
  if (!c && (c = xc._, !c)) {
    throw z("INamed.-namespace", b);
  }
  return c.call(null, b);
}, yc = function yc(b, c) {
  if (b ? b.vd : b) {
    return b.vd(b, c);
  }
  var d;
  d = yc[n(null == b ? null : b)];
  if (!d && (d = yc._, !d)) {
    throw z("IReset.-reset!", b);
  }
  return d.call(null, b, c);
}, zc = function zc() {
  switch(arguments.length) {
    case 2:
      return zc.a(arguments[0], arguments[1]);
    case 3:
      return zc.d(arguments[0], arguments[1], arguments[2]);
    case 4:
      return zc.s(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return zc.J(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
zc.a = function(a, b) {
  if (a ? a.xd : a) {
    return a.xd(a, b);
  }
  var c;
  c = zc[n(null == a ? null : a)];
  if (!c && (c = zc._, !c)) {
    throw z("ISwap.-swap!", a);
  }
  return c.call(null, a, b);
};
zc.d = function(a, b, c) {
  if (a ? a.yd : a) {
    return a.yd(a, b, c);
  }
  var d;
  d = zc[n(null == a ? null : a)];
  if (!d && (d = zc._, !d)) {
    throw z("ISwap.-swap!", a);
  }
  return d.call(null, a, b, c);
};
zc.s = function(a, b, c, d) {
  if (a ? a.zd : a) {
    return a.zd(a, b, c, d);
  }
  var e;
  e = zc[n(null == a ? null : a)];
  if (!e && (e = zc._, !e)) {
    throw z("ISwap.-swap!", a);
  }
  return e.call(null, a, b, c, d);
};
zc.J = function(a, b, c, d, e) {
  if (a ? a.Ad : a) {
    return a.Ad(a, b, c, d, e);
  }
  var f;
  f = zc[n(null == a ? null : a)];
  if (!f && (f = zc._, !f)) {
    throw z("ISwap.-swap!", a);
  }
  return f.call(null, a, b, c, d, e);
};
zc.v = 5;
var Ac = function Ac(b, c) {
  if (b ? b.Sc : b) {
    return b.Sc(0, c);
  }
  var d;
  d = Ac[n(null == b ? null : b)];
  if (!d && (d = Ac._, !d)) {
    throw z("IVolatile.-vreset!", b);
  }
  return d.call(null, b, c);
}, Bc = {}, Cc = function Cc(b) {
  if (b ? b.Sb : b) {
    return b.Sb(b);
  }
  var c;
  c = Cc[n(null == b ? null : b)];
  if (!c && (c = Cc._, !c)) {
    throw z("IIterable.-iterator", b);
  }
  return c.call(null, b);
};
function Dc(a) {
  this.Pd = a;
  this.g = 1073741824;
  this.r = 0;
}
Dc.prototype.Uc = function(a, b) {
  return this.Pd.append(b);
};
function Ec(a) {
  var b = new La;
  a.B(null, new Dc(b), ab());
  return "" + A(b);
}
var Fc = "undefined" !== typeof Math.imul && 0 !== (Math.imul.a ? Math.imul.a(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.a ? Math.imul.a(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Gc(a) {
  a = Fc(a | 0, -862048943);
  return Fc(a << 15 | a >>> -15, 461845907);
}
function Hc(a, b) {
  var c = (a | 0) ^ (b | 0);
  return Fc(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function Ic(a, b) {
  var c = (a | 0) ^ b, c = Fc(c ^ c >>> 16, -2048144789), c = Fc(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function Jc(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Hc(c, Gc(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ Gc(a.charCodeAt(a.length - 1)) : b;
  return Ic(b, Fc(2, a.length));
}
var Kc = {}, Lc = 0;
function Mc(a) {
  255 < Lc && (Kc = {}, Lc = 0);
  var b = Kc[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Fc(31, d) + a.charCodeAt(c), c = e
            } else {
              b = d;
              break a;
            }
          }
        } else {
          b = 0;
        }
      } else {
        b = 0;
      }
    }
    Kc[a] = b;
    Lc += 1;
  }
  return a = b;
}
function Nc(a) {
  a && (a.g & 4194304 || a.Ud) ? a = a.F(null) : "number" === typeof a ? a = (Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Mc(a), 0 !== a && (a = Gc(a), a = Hc(0, a), a = Ic(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : cc(a);
  return a;
}
function Oc(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Pc(a, b) {
  if (a.cb === b.cb) {
    return 0;
  }
  var c = kb(a.oa);
  if (w(c ? b.oa : c)) {
    return-1;
  }
  if (w(a.oa)) {
    if (kb(b.oa)) {
      return 1;
    }
    c = Sa(a.oa, b.oa);
    return 0 === c ? Sa(a.name, b.name) : c;
  }
  return Sa(a.name, b.name);
}
function Qc(a, b, c, d, e) {
  this.oa = a;
  this.name = b;
  this.cb = c;
  this.Ab = d;
  this.ra = e;
  this.g = 2154168321;
  this.r = 4096;
}
g = Qc.prototype;
g.toString = function() {
  return this.cb;
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.q = function(a, b) {
  return b instanceof Qc ? this.cb === b.cb : !1;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Hb.d(c, this, null);
      case 3:
        return Hb.d(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return Hb.d(c, this, null);
  };
  a.d = function(a, c, d) {
    return Hb.d(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ob(b)));
};
g.b = function(a) {
  return Hb.d(a, this, null);
};
g.a = function(a, b) {
  return Hb.d(a, this, b);
};
g.A = function() {
  return this.ra;
};
g.C = function(a, b) {
  return new Qc(this.oa, this.name, this.cb, this.Ab, b);
};
g.F = function() {
  var a = this.Ab;
  return null != a ? a : this.Ab = a = Oc(Jc(this.name), Mc(this.oa));
};
g.Vb = function() {
  return this.name;
};
g.Wb = function() {
  return this.oa;
};
g.B = function(a, b) {
  return ic(b, this.cb);
};
function Uc(a, b) {
  var c = null != a ? [A(a), A("/"), A(b)].join("") : b;
  return new Qc(a, b, c, null, null);
}
function D(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 8388608 || a.wd)) {
    return a.H(null);
  }
  if (jb(a) || "string" === typeof a) {
    return 0 === a.length ? null : new E(a, 0);
  }
  if (x(dc, a)) {
    return ec(a);
  }
  throw Error([A(a), A(" is not ISeqable")].join(""));
}
function G(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 64 || a.Xb)) {
    return a.U(null);
  }
  a = D(a);
  return null == a ? null : Db(a);
}
function Vc(a) {
  return null != a ? a && (a.g & 64 || a.Xb) ? a.ma(null) : (a = D(a)) ? Eb(a) : Wc : Wc;
}
function H(a) {
  return null == a ? null : a && (a.g & 128 || a.mc) ? a.ja(null) : D(Vc(a));
}
var Xc = function Xc() {
  switch(arguments.length) {
    case 1:
      return Xc.b(arguments[0]);
    case 2:
      return Xc.a(arguments[0], arguments[1]);
    default:
      return Xc.i(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Xc.b = function() {
  return!0;
};
Xc.a = function(a, b) {
  return null == a ? null == b : a === b || bc(a, b);
};
Xc.i = function(a, b, c) {
  for (;;) {
    if (Xc.a(a, b)) {
      if (H(c)) {
        a = b, b = G(c), c = H(c);
      } else {
        return Xc.a(b, G(c));
      }
    } else {
      return!1;
    }
  }
};
Xc.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return Xc.i(b, a, c);
};
Xc.v = 2;
function Yc(a) {
  this.D = a;
}
Yc.prototype.next = function() {
  if (null != this.D) {
    var a = G(this.D);
    this.D = H(this.D);
    return{value:a, done:!1};
  }
  return{value:null, done:!0};
};
function Zc(a) {
  return new Yc(D(a));
}
function ad(a, b) {
  var c = Gc(a), c = Hc(0, c);
  return Ic(c, b);
}
function bd(a) {
  var b = 0, c = 1;
  for (a = D(a);;) {
    if (null != a) {
      b += 1, c = Fc(31, c) + Nc(G(a)) | 0, a = H(a);
    } else {
      return ad(c, b);
    }
  }
}
var cd = ad(1, 0);
function dd(a) {
  var b = 0, c = 0;
  for (a = D(a);;) {
    if (null != a) {
      b += 1, c = c + Nc(G(a)) | 0, a = H(a);
    } else {
      return ad(c, b);
    }
  }
}
var ed = ad(0, 0);
wb["null"] = !0;
xb["null"] = function() {
  return 0;
};
Date.prototype.q = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
Date.prototype.Pb = !0;
Date.prototype.Qb = function(a, b) {
  return Sa(this.valueOf(), b.valueOf());
};
bc.number = function(a, b) {
  return a === b;
};
ub["function"] = !0;
Wb["function"] = !0;
Xb["function"] = function() {
  return null;
};
cc._ = function(a) {
  return a[ja] || (a[ja] = ++ka);
};
function fd(a) {
  return a + 1;
}
function gd(a) {
  this.n = a;
  this.g = 32768;
  this.r = 0;
}
gd.prototype.Bb = function() {
  return this.n;
};
function hd(a) {
  return a instanceof gd;
}
function I(a) {
  return Vb(a);
}
function id(a, b) {
  var c = xb(a);
  if (0 === c) {
    return b.m ? b.m() : b.call(null);
  }
  for (var d = B.a(a, 0), e = 1;;) {
    if (e < c) {
      var f = B.a(a, e), d = b.a ? b.a(d, f) : b.call(null, d, f);
      if (hd(d)) {
        return Vb(d);
      }
      e += 1;
    } else {
      return d;
    }
  }
}
function jd(a, b, c) {
  var d = xb(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = B.a(a, c), e = b.a ? b.a(e, f) : b.call(null, e, f);
      if (hd(e)) {
        return Vb(e);
      }
      c += 1;
    } else {
      return e;
    }
  }
}
function kd(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.m ? b.m() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var f = a[e], d = b.a ? b.a(d, f) : b.call(null, d, f);
      if (hd(d)) {
        return Vb(d);
      }
      e += 1;
    } else {
      return d;
    }
  }
}
function ld(a, b, c) {
  var d = a.length, e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = a[c], e = b.a ? b.a(e, f) : b.call(null, e, f);
      if (hd(e)) {
        return Vb(e);
      }
      c += 1;
    } else {
      return e;
    }
  }
}
function md(a, b, c, d) {
  for (var e = a.length;;) {
    if (d < e) {
      var f = a[d];
      c = b.a ? b.a(c, f) : b.call(null, c, f);
      if (hd(c)) {
        return Vb(c);
      }
      d += 1;
    } else {
      return c;
    }
  }
}
function nd(a) {
  return a ? a.g & 2 || a.ld ? !0 : a.g ? !1 : x(wb, a) : x(wb, a);
}
function od(a) {
  return a ? a.g & 16 || a.Qc ? !0 : a.g ? !1 : x(Bb, a) : x(Bb, a);
}
function pd(a, b) {
  this.c = a;
  this.o = b;
}
pd.prototype.Ua = function() {
  return this.o < this.c.length;
};
pd.prototype.next = function() {
  var a = this.c[this.o];
  this.o += 1;
  return a;
};
function E(a, b) {
  this.c = a;
  this.o = b;
  this.g = 166199550;
  this.r = 8192;
}
g = E.prototype;
g.toString = function() {
  return Ec(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.O = function(a, b) {
  var c = b + this.o;
  return c < this.c.length ? this.c[c] : null;
};
g.sa = function(a, b, c) {
  a = b + this.o;
  return a < this.c.length ? this.c[a] : c;
};
g.lc = !0;
g.Sb = function() {
  return new pd(this.c, this.o);
};
g.ja = function() {
  return this.o + 1 < this.c.length ? new E(this.c, this.o + 1) : null;
};
g.I = function() {
  return this.c.length - this.o;
};
g.Db = function() {
  var a = xb(this);
  return 0 < a ? new qd(this, a - 1, null) : null;
};
g.F = function() {
  return bd(this);
};
g.q = function(a, b) {
  return rd.a ? rd.a(this, b) : rd.call(null, this, b);
};
g.Q = function() {
  return Wc;
};
g.S = function(a, b) {
  return md(this.c, b, this.c[this.o], this.o + 1);
};
g.T = function(a, b, c) {
  return md(this.c, b, c, this.o);
};
g.U = function() {
  return this.c[this.o];
};
g.ma = function() {
  return this.o + 1 < this.c.length ? new E(this.c, this.o + 1) : Wc;
};
g.H = function() {
  return this;
};
g.G = function(a, b) {
  return J.a ? J.a(b, this) : J.call(null, b, this);
};
E.prototype[nb] = function() {
  return Zc(this);
};
function sd(a, b) {
  return b < a.length ? new E(a, b) : null;
}
function L() {
  switch(arguments.length) {
    case 1:
      return sd(arguments[0], 0);
    case 2:
      return sd(arguments[0], arguments[1]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function qd(a, b, c) {
  this.jc = a;
  this.o = b;
  this.l = c;
  this.g = 32374990;
  this.r = 8192;
}
g = qd.prototype;
g.toString = function() {
  return Ec(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.A = function() {
  return this.l;
};
g.ja = function() {
  return 0 < this.o ? new qd(this.jc, this.o - 1, null) : null;
};
g.I = function() {
  return this.o + 1;
};
g.F = function() {
  return bd(this);
};
g.q = function(a, b) {
  return rd.a ? rd.a(this, b) : rd.call(null, this, b);
};
g.Q = function() {
  var a = this.l;
  return td.a ? td.a(Wc, a) : td.call(null, Wc, a);
};
g.S = function(a, b) {
  return ud ? ud(b, this) : vd.call(null, b, this);
};
g.T = function(a, b, c) {
  return wd ? wd(b, c, this) : vd.call(null, b, c, this);
};
g.U = function() {
  return B.a(this.jc, this.o);
};
g.ma = function() {
  return 0 < this.o ? new qd(this.jc, this.o - 1, null) : Wc;
};
g.H = function() {
  return this;
};
g.C = function(a, b) {
  return new qd(this.jc, this.o, b);
};
g.G = function(a, b) {
  return J.a ? J.a(b, this) : J.call(null, b, this);
};
qd.prototype[nb] = function() {
  return Zc(this);
};
function xd(a) {
  for (;;) {
    var b = H(a);
    if (null != b) {
      a = b;
    } else {
      return G(a);
    }
  }
}
bc._ = function(a, b) {
  return a === b;
};
var yd = function yd() {
  switch(arguments.length) {
    case 0:
      return yd.m();
    case 1:
      return yd.b(arguments[0]);
    case 2:
      return yd.a(arguments[0], arguments[1]);
    default:
      return yd.i(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
yd.m = function() {
  return zd;
};
yd.b = function(a) {
  return a;
};
yd.a = function(a, b) {
  return null != a ? Ab(a, b) : Ab(Wc, b);
};
yd.i = function(a, b, c) {
  for (;;) {
    if (w(c)) {
      a = yd.a(a, b), b = G(c), c = H(c);
    } else {
      return yd.a(a, b);
    }
  }
};
yd.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return yd.i(b, a, c);
};
yd.v = 2;
function M(a) {
  if (null != a) {
    if (a && (a.g & 2 || a.ld)) {
      a = a.I(null);
    } else {
      if (jb(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (x(wb, a)) {
            a = xb(a);
          } else {
            a: {
              a = D(a);
              for (var b = 0;;) {
                if (nd(a)) {
                  a = b + xb(a);
                  break a;
                }
                a = H(a);
                b += 1;
              }
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
function Ad(a, b) {
  for (var c = null;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return D(a) ? G(a) : c;
    }
    if (od(a)) {
      return B.d(a, b, c);
    }
    if (D(a)) {
      var d = H(a), e = b - 1;
      a = d;
      b = e;
    } else {
      return c;
    }
  }
}
function Bd(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number");
  }
  if (null == a) {
    return a;
  }
  if (a && (a.g & 16 || a.Qc)) {
    return a.O(null, b);
  }
  if (jb(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (x(Bb, a)) {
    return B.a(a, b);
  }
  if (a ? a.g & 64 || a.Xb || (a.g ? 0 : x(Cb, a)) : x(Cb, a)) {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        if (null == c) {
          throw Error("Index out of bounds");
        }
        if (0 === d) {
          if (D(c)) {
            c = G(c);
            break a;
          }
          throw Error("Index out of bounds");
        }
        if (od(c)) {
          c = B.a(c, d);
          break a;
        }
        if (D(c)) {
          c = H(c), --d;
        } else {
          throw Error("Index out of bounds");
        }
      }
    }
    return c;
  }
  throw Error([A("nth not supported on this type "), A(mb(lb(a)))].join(""));
}
function N(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number.");
  }
  if (null == a) {
    return null;
  }
  if (a && (a.g & 16 || a.Qc)) {
    return a.sa(null, b, null);
  }
  if (jb(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (x(Bb, a)) {
    return B.a(a, b);
  }
  if (a ? a.g & 64 || a.Xb || (a.g ? 0 : x(Cb, a)) : x(Cb, a)) {
    return Ad(a, b);
  }
  throw Error([A("nth not supported on this type "), A(mb(lb(a)))].join(""));
}
function Cd(a, b) {
  return null == a ? null : a && (a.g & 256 || a.pd) ? a.w(null, b) : jb(a) ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : x(Gb, a) ? Hb.a(a, b) : null;
}
function Dd(a, b, c) {
  return null != a ? a && (a.g & 256 || a.pd) ? a.u(null, b, c) : jb(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : x(Gb, a) ? Hb.d(a, b, c) : c : c;
}
var O = function O() {
  switch(arguments.length) {
    case 3:
      return O.d(arguments[0], arguments[1], arguments[2]);
    default:
      return O.i(arguments[0], arguments[1], arguments[2], new E(Array.prototype.slice.call(arguments, 3), 0));
  }
};
O.d = function(a, b, c) {
  return null != a ? Jb(a, b, c) : Ed([b], [c]);
};
O.i = function(a, b, c, d) {
  for (;;) {
    if (a = O.d(a, b, c), w(d)) {
      b = G(d), c = G(H(d)), d = H(H(d));
    } else {
      return a;
    }
  }
};
O.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), d = H(d);
  return O.i(b, a, c, d);
};
O.v = 3;
var Fd = function Fd() {
  switch(arguments.length) {
    case 1:
      return Fd.b(arguments[0]);
    case 2:
      return Fd.a(arguments[0], arguments[1]);
    default:
      return Fd.i(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Fd.b = function(a) {
  return a;
};
Fd.a = function(a, b) {
  return null == a ? null : Lb(a, b);
};
Fd.i = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = Fd.a(a, b);
    if (w(c)) {
      b = G(c), c = H(c);
    } else {
      return a;
    }
  }
};
Fd.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return Fd.i(b, a, c);
};
Fd.v = 2;
function Gd(a) {
  var b = ga(a);
  return w(b) ? b : a ? w(w(null) ? null : a.kd) ? !0 : a.Hb ? !1 : x(ub, a) : x(ub, a);
}
function Hd(a, b) {
  this.e = a;
  this.l = b;
  this.g = 393217;
  this.r = 0;
}
g = Hd.prototype;
g.A = function() {
  return this.l;
};
g.C = function(a, b) {
  return new Hd(this.e, b);
};
g.kd = !0;
g.call = function() {
  function a(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, y, C, F, K, R, ca) {
    a = this.e;
    return Id.Rb ? Id.Rb(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, y, C, F, K, R, ca) : Id.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, y, C, F, K, R, ca);
  }
  function b(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, y, C, F, K, R) {
    a = this;
    return a.e.fa ? a.e.fa(b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, y, C, F, K, R) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, y, C, F, K, R);
  }
  function c(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, y, C, F, K) {
    a = this;
    return a.e.ea ? a.e.ea(b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, y, C, F, K) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, y, C, F, K);
  }
  function d(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, y, C, F) {
    a = this;
    return a.e.da ? a.e.da(b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, y, C, F) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, y, C, F);
  }
  function e(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, y, C) {
    a = this;
    return a.e.ca ? a.e.ca(b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, y, C) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, y, C);
  }
  function f(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, y) {
    a = this;
    return a.e.ba ? a.e.ba(b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, y) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, y);
  }
  function h(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v) {
    a = this;
    return a.e.aa ? a.e.aa(b, c, d, e, f, h, k, l, m, p, q, r, u, t, v) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v);
  }
  function k(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t) {
    a = this;
    return a.e.$ ? a.e.$(b, c, d, e, f, h, k, l, m, p, q, r, u, t) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t);
  }
  function l(a, b, c, d, e, f, h, k, l, m, p, q, r, u) {
    a = this;
    return a.e.Z ? a.e.Z(b, c, d, e, f, h, k, l, m, p, q, r, u) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u);
  }
  function m(a, b, c, d, e, f, h, k, l, m, p, q, r) {
    a = this;
    return a.e.Y ? a.e.Y(b, c, d, e, f, h, k, l, m, p, q, r) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r);
  }
  function p(a, b, c, d, e, f, h, k, l, m, p, q) {
    a = this;
    return a.e.X ? a.e.X(b, c, d, e, f, h, k, l, m, p, q) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q);
  }
  function q(a, b, c, d, e, f, h, k, l, m, p) {
    a = this;
    return a.e.W ? a.e.W(b, c, d, e, f, h, k, l, m, p) : a.e.call(null, b, c, d, e, f, h, k, l, m, p);
  }
  function r(a, b, c, d, e, f, h, k, l, m) {
    a = this;
    return a.e.ia ? a.e.ia(b, c, d, e, f, h, k, l, m) : a.e.call(null, b, c, d, e, f, h, k, l, m);
  }
  function t(a, b, c, d, e, f, h, k, l) {
    a = this;
    return a.e.ha ? a.e.ha(b, c, d, e, f, h, k, l) : a.e.call(null, b, c, d, e, f, h, k, l);
  }
  function v(a, b, c, d, e, f, h, k) {
    a = this;
    return a.e.ga ? a.e.ga(b, c, d, e, f, h, k) : a.e.call(null, b, c, d, e, f, h, k);
  }
  function y(a, b, c, d, e, f, h) {
    a = this;
    return a.e.R ? a.e.R(b, c, d, e, f, h) : a.e.call(null, b, c, d, e, f, h);
  }
  function C(a, b, c, d, e, f) {
    a = this;
    return a.e.J ? a.e.J(b, c, d, e, f) : a.e.call(null, b, c, d, e, f);
  }
  function F(a, b, c, d, e) {
    a = this;
    return a.e.s ? a.e.s(b, c, d, e) : a.e.call(null, b, c, d, e);
  }
  function K(a, b, c, d) {
    a = this;
    return a.e.d ? a.e.d(b, c, d) : a.e.call(null, b, c, d);
  }
  function R(a, b, c) {
    a = this;
    return a.e.a ? a.e.a(b, c) : a.e.call(null, b, c);
  }
  function ca(a, b) {
    a = this;
    return a.e.b ? a.e.b(b) : a.e.call(null, b);
  }
  function Ba(a) {
    a = this;
    return a.e.m ? a.e.m() : a.e.call(null);
  }
  var u = null, u = function(u, ba, fa, ia, na, va, wa, za, Da, oa, pa, Ga, Na, Ua, fb, Ka, Oa, Xa, Ya, uc, $c, ce) {
    switch(arguments.length) {
      case 1:
        return Ba.call(this, u);
      case 2:
        return ca.call(this, u, ba);
      case 3:
        return R.call(this, u, ba, fa);
      case 4:
        return K.call(this, u, ba, fa, ia);
      case 5:
        return F.call(this, u, ba, fa, ia, na);
      case 6:
        return C.call(this, u, ba, fa, ia, na, va);
      case 7:
        return y.call(this, u, ba, fa, ia, na, va, wa);
      case 8:
        return v.call(this, u, ba, fa, ia, na, va, wa, za);
      case 9:
        return t.call(this, u, ba, fa, ia, na, va, wa, za, Da);
      case 10:
        return r.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa);
      case 11:
        return q.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa, pa);
      case 12:
        return p.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa, pa, Ga);
      case 13:
        return m.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa, pa, Ga, Na);
      case 14:
        return l.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa, pa, Ga, Na, Ua);
      case 15:
        return k.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa, pa, Ga, Na, Ua, fb);
      case 16:
        return h.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa, pa, Ga, Na, Ua, fb, Ka);
      case 17:
        return f.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa, pa, Ga, Na, Ua, fb, Ka, Oa);
      case 18:
        return e.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa, pa, Ga, Na, Ua, fb, Ka, Oa, Xa);
      case 19:
        return d.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa, pa, Ga, Na, Ua, fb, Ka, Oa, Xa, Ya);
      case 20:
        return c.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa, pa, Ga, Na, Ua, fb, Ka, Oa, Xa, Ya, uc);
      case 21:
        return b.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa, pa, Ga, Na, Ua, fb, Ka, Oa, Xa, Ya, uc, $c);
      case 22:
        return a.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa, pa, Ga, Na, Ua, fb, Ka, Oa, Xa, Ya, uc, $c, ce);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  u.b = Ba;
  u.a = ca;
  u.d = R;
  u.s = K;
  u.J = F;
  u.R = C;
  u.ga = y;
  u.ha = v;
  u.ia = t;
  u.W = r;
  u.X = q;
  u.Y = p;
  u.Z = m;
  u.$ = l;
  u.aa = k;
  u.ba = h;
  u.ca = f;
  u.da = e;
  u.ea = d;
  u.fa = c;
  u.yc = b;
  u.Rb = a;
  return u;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ob(b)));
};
g.m = function() {
  return this.e.m ? this.e.m() : this.e.call(null);
};
g.b = function(a) {
  return this.e.b ? this.e.b(a) : this.e.call(null, a);
};
g.a = function(a, b) {
  return this.e.a ? this.e.a(a, b) : this.e.call(null, a, b);
};
g.d = function(a, b, c) {
  return this.e.d ? this.e.d(a, b, c) : this.e.call(null, a, b, c);
};
g.s = function(a, b, c, d) {
  return this.e.s ? this.e.s(a, b, c, d) : this.e.call(null, a, b, c, d);
};
g.J = function(a, b, c, d, e) {
  return this.e.J ? this.e.J(a, b, c, d, e) : this.e.call(null, a, b, c, d, e);
};
g.R = function(a, b, c, d, e, f) {
  return this.e.R ? this.e.R(a, b, c, d, e, f) : this.e.call(null, a, b, c, d, e, f);
};
g.ga = function(a, b, c, d, e, f, h) {
  return this.e.ga ? this.e.ga(a, b, c, d, e, f, h) : this.e.call(null, a, b, c, d, e, f, h);
};
g.ha = function(a, b, c, d, e, f, h, k) {
  return this.e.ha ? this.e.ha(a, b, c, d, e, f, h, k) : this.e.call(null, a, b, c, d, e, f, h, k);
};
g.ia = function(a, b, c, d, e, f, h, k, l) {
  return this.e.ia ? this.e.ia(a, b, c, d, e, f, h, k, l) : this.e.call(null, a, b, c, d, e, f, h, k, l);
};
g.W = function(a, b, c, d, e, f, h, k, l, m) {
  return this.e.W ? this.e.W(a, b, c, d, e, f, h, k, l, m) : this.e.call(null, a, b, c, d, e, f, h, k, l, m);
};
g.X = function(a, b, c, d, e, f, h, k, l, m, p) {
  return this.e.X ? this.e.X(a, b, c, d, e, f, h, k, l, m, p) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p);
};
g.Y = function(a, b, c, d, e, f, h, k, l, m, p, q) {
  return this.e.Y ? this.e.Y(a, b, c, d, e, f, h, k, l, m, p, q) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q);
};
g.Z = function(a, b, c, d, e, f, h, k, l, m, p, q, r) {
  return this.e.Z ? this.e.Z(a, b, c, d, e, f, h, k, l, m, p, q, r) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r);
};
g.$ = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t) {
  return this.e.$ ? this.e.$(a, b, c, d, e, f, h, k, l, m, p, q, r, t) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t);
};
g.aa = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v) {
  return this.e.aa ? this.e.aa(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v);
};
g.ba = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y) {
  return this.e.ba ? this.e.ba(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y);
};
g.ca = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C) {
  return this.e.ca ? this.e.ca(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C);
};
g.da = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F) {
  return this.e.da ? this.e.da(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F);
};
g.ea = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K) {
  return this.e.ea ? this.e.ea(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K);
};
g.fa = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K, R) {
  return this.e.fa ? this.e.fa(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K, R) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K, R);
};
g.yc = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K, R, ca) {
  var Ba = this.e;
  return Id.Rb ? Id.Rb(Ba, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K, R, ca) : Id.call(null, Ba, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K, R, ca);
};
function td(a, b) {
  return Gd(a) && !(a ? a.g & 262144 || a.Zd || (a.g ? 0 : x(Yb, a)) : x(Yb, a)) ? new Hd(a, b) : null == a ? null : Zb(a, b);
}
function Jd(a) {
  var b = null != a;
  return(b ? a ? a.g & 131072 || a.sd || (a.g ? 0 : x(Wb, a)) : x(Wb, a) : b) ? Xb(a) : null;
}
function Kd(a) {
  return null == a ? null : Rb(a);
}
var Ld = function Ld() {
  switch(arguments.length) {
    case 1:
      return Ld.b(arguments[0]);
    case 2:
      return Ld.a(arguments[0], arguments[1]);
    default:
      return Ld.i(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Ld.b = function(a) {
  return a;
};
Ld.a = function(a, b) {
  return null == a ? null : Qb(a, b);
};
Ld.i = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = Ld.a(a, b);
    if (w(c)) {
      b = G(c), c = H(c);
    } else {
      return a;
    }
  }
};
Ld.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return Ld.i(b, a, c);
};
Ld.v = 2;
function Md(a) {
  return null == a || kb(D(a));
}
function Nd(a) {
  return null == a ? !1 : a ? a.g & 4096 || a.Xd ? !0 : a.g ? !1 : x(Pb, a) : x(Pb, a);
}
function Od(a) {
  return a ? a.g & 16777216 || a.Wd ? !0 : a.g ? !1 : x(fc, a) : x(fc, a);
}
function Pd(a) {
  return null == a ? !1 : a ? a.g & 1024 || a.qd ? !0 : a.g ? !1 : x(Kb, a) : x(Kb, a);
}
function Qd(a) {
  return a ? a.g & 16384 || a.Yd ? !0 : a.g ? !1 : x(Tb, a) : x(Tb, a);
}
function Rd(a) {
  return a ? a.r & 512 || a.Rd ? !0 : !1 : !1;
}
function Sd(a) {
  var b = [];
  Ha(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function Td(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, --e, b += 1;
  }
}
var Ud = {};
function Vd(a) {
  return null == a ? !1 : a ? a.g & 64 || a.Xb ? !0 : a.g ? !1 : x(Cb, a) : x(Cb, a);
}
function Wd(a) {
  return w(a) ? !0 : !1;
}
function Xd(a, b) {
  return Dd(a, b, Ud) === Ud ? !1 : !0;
}
function Yd(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (lb(a) === lb(b)) {
    return a && (a.r & 2048 || a.Pb) ? a.Qb(null, b) : Sa(a, b);
  }
  throw Error("compare on non-nil objects of different types");
}
function Zd(a, b) {
  var c = M(a), d = M(b);
  if (c < d) {
    c = -1;
  } else {
    if (c > d) {
      c = 1;
    } else {
      a: {
        for (d = 0;;) {
          var e = Yd(Bd(a, d), Bd(b, d));
          if (0 === e && d + 1 < c) {
            d += 1;
          } else {
            c = e;
            break a;
          }
        }
      }
    }
  }
  return c;
}
function vd() {
  switch(arguments.length) {
    case 2:
      return ud(arguments[0], arguments[1]);
    case 3:
      return wd(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function ud(a, b) {
  var c = D(b);
  if (c) {
    var d = G(c), c = H(c);
    return sb ? sb(a, d, c) : tb.call(null, a, d, c);
  }
  return a.m ? a.m() : a.call(null);
}
function wd(a, b, c) {
  for (c = D(c);;) {
    if (c) {
      var d = G(c);
      b = a.a ? a.a(b, d) : a.call(null, b, d);
      if (hd(b)) {
        return Vb(b);
      }
      c = H(c);
    } else {
      return b;
    }
  }
}
function tb() {
  switch(arguments.length) {
    case 2:
      return $d(arguments[0], arguments[1]);
    case 3:
      return sb(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function $d(a, b) {
  return b && (b.g & 524288 || b.ud) ? b.S(null, a) : jb(b) ? kd(b, a) : "string" === typeof b ? kd(b, a) : x($b, b) ? ac.a(b, a) : ud(a, b);
}
function sb(a, b, c) {
  return c && (c.g & 524288 || c.ud) ? c.T(null, a, b) : jb(c) ? ld(c, a, b) : "string" === typeof c ? ld(c, a, b) : x($b, c) ? ac.d(c, a, b) : wd(a, b, c);
}
function ae(a) {
  return a;
}
function be(a, b, c, d) {
  a = a.b ? a.b(b) : a.call(null, b);
  c = sb(a, c, d);
  return a.b ? a.b(c) : a.call(null, c);
}
function de(a) {
  return a - 1;
}
var ee = function ee() {
  switch(arguments.length) {
    case 1:
      return ee.b(arguments[0]);
    case 2:
      return ee.a(arguments[0], arguments[1]);
    default:
      return ee.i(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
ee.b = function(a) {
  return a;
};
ee.a = function(a, b) {
  return a > b ? a : b;
};
ee.i = function(a, b, c) {
  return sb(ee, a > b ? a : b, c);
};
ee.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return ee.i(b, a, c);
};
ee.v = 2;
function fe(a) {
  a = (a - a % 2) / 2;
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
}
function ge(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function he(a) {
  var b = 1;
  for (a = D(a);;) {
    if (a && 0 < b) {
      --b, a = H(a);
    } else {
      return a;
    }
  }
}
var A = function A() {
  switch(arguments.length) {
    case 0:
      return A.m();
    case 1:
      return A.b(arguments[0]);
    default:
      return A.i(arguments[0], new E(Array.prototype.slice.call(arguments, 1), 0));
  }
};
A.m = function() {
  return "";
};
A.b = function(a) {
  return null == a ? "" : Ea(a);
};
A.i = function(a, b) {
  for (var c = new La("" + A(a)), d = b;;) {
    if (w(d)) {
      c = c.append("" + A(G(d))), d = H(d);
    } else {
      return c.toString();
    }
  }
};
A.t = function(a) {
  var b = G(a);
  a = H(a);
  return A.i(b, a);
};
A.v = 1;
function rd(a, b) {
  var c;
  if (Od(b)) {
    if (nd(a) && nd(b) && M(a) !== M(b)) {
      c = !1;
    } else {
      a: {
        c = D(a);
        for (var d = D(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && Xc.a(G(c), G(d))) {
            c = H(c), d = H(d);
          } else {
            c = !1;
            break a;
          }
        }
      }
    }
  } else {
    c = null;
  }
  return Wd(c);
}
function ie(a) {
  var b = 0;
  for (a = D(a);;) {
    if (a) {
      var c = G(a), b = (b + (Nc(function() {
        var a = c;
        return je.b ? je.b(a) : je.call(null, a);
      }()) ^ Nc(function() {
        var a = c;
        return ke.b ? ke.b(a) : ke.call(null, a);
      }()))) % 4503599627370496;
      a = H(a);
    } else {
      return b;
    }
  }
}
function le(a, b, c, d, e) {
  this.l = a;
  this.first = b;
  this.V = c;
  this.count = d;
  this.j = e;
  this.g = 65937646;
  this.r = 8192;
}
g = le.prototype;
g.toString = function() {
  return Ec(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.A = function() {
  return this.l;
};
g.ja = function() {
  return 1 === this.count ? null : this.V;
};
g.I = function() {
  return this.count;
};
g.sb = function() {
  return this.first;
};
g.tb = function() {
  return Eb(this);
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = bd(this);
};
g.q = function(a, b) {
  return rd(this, b);
};
g.Q = function() {
  return Zb(Wc, this.l);
};
g.S = function(a, b) {
  return ud(b, this);
};
g.T = function(a, b, c) {
  return wd(b, c, this);
};
g.U = function() {
  return this.first;
};
g.ma = function() {
  return 1 === this.count ? Wc : this.V;
};
g.H = function() {
  return this;
};
g.C = function(a, b) {
  return new le(b, this.first, this.V, this.count, this.j);
};
g.G = function(a, b) {
  return new le(this.l, b, this, this.count + 1, null);
};
le.prototype[nb] = function() {
  return Zc(this);
};
function me(a) {
  this.l = a;
  this.g = 65937614;
  this.r = 8192;
}
g = me.prototype;
g.toString = function() {
  return Ec(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.A = function() {
  return this.l;
};
g.ja = function() {
  return null;
};
g.I = function() {
  return 0;
};
g.sb = function() {
  return null;
};
g.tb = function() {
  throw Error("Can't pop empty list");
};
g.F = function() {
  return cd;
};
g.q = function(a, b) {
  return rd(this, b);
};
g.Q = function() {
  return this;
};
g.S = function(a, b) {
  return ud(b, this);
};
g.T = function(a, b, c) {
  return wd(b, c, this);
};
g.U = function() {
  return null;
};
g.ma = function() {
  return Wc;
};
g.H = function() {
  return null;
};
g.C = function(a, b) {
  return new me(b);
};
g.G = function(a, b) {
  return new le(this.l, b, null, 1, null);
};
var Wc = new me(null);
me.prototype[nb] = function() {
  return Zc(this);
};
function ne(a) {
  return(a ? a.g & 134217728 || a.Vd || (a.g ? 0 : x(gc, a)) : x(gc, a)) ? hc(a) : sb(yd, Wc, a);
}
function oe() {
  a: {
    var a = 0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null, b;
    if (a instanceof E && 0 === a.o) {
      b = a.c;
    } else {
      b: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.U(null)), a = a.ja(null);
          } else {
            break b;
          }
        }
      }
    }
    for (var a = b.length, c = Wc;;) {
      if (0 < a) {
        var d = a - 1, c = c.G(null, b[a - 1]), a = d
      } else {
        break a;
      }
    }
  }
  return c;
}
function pe(a, b, c, d) {
  this.l = a;
  this.first = b;
  this.V = c;
  this.j = d;
  this.g = 65929452;
  this.r = 8192;
}
g = pe.prototype;
g.toString = function() {
  return Ec(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.A = function() {
  return this.l;
};
g.ja = function() {
  return null == this.V ? null : D(this.V);
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = bd(this);
};
g.q = function(a, b) {
  return rd(this, b);
};
g.Q = function() {
  return td(Wc, this.l);
};
g.S = function(a, b) {
  return ud(b, this);
};
g.T = function(a, b, c) {
  return wd(b, c, this);
};
g.U = function() {
  return this.first;
};
g.ma = function() {
  return null == this.V ? Wc : this.V;
};
g.H = function() {
  return this;
};
g.C = function(a, b) {
  return new pe(b, this.first, this.V, this.j);
};
g.G = function(a, b) {
  return new pe(null, b, this, this.j);
};
pe.prototype[nb] = function() {
  return Zc(this);
};
function J(a, b) {
  var c = null == b;
  return(c ? c : b && (b.g & 64 || b.Xb)) ? new pe(null, a, b, null) : new pe(null, a, D(b), null);
}
function qe(a, b) {
  if (a.ka === b.ka) {
    return 0;
  }
  var c = kb(a.oa);
  if (w(c ? b.oa : c)) {
    return-1;
  }
  if (w(a.oa)) {
    if (kb(b.oa)) {
      return 1;
    }
    c = Sa(a.oa, b.oa);
    return 0 === c ? Sa(a.name, b.name) : c;
  }
  return Sa(a.name, b.name);
}
function P(a, b, c, d) {
  this.oa = a;
  this.name = b;
  this.ka = c;
  this.Ab = d;
  this.g = 2153775105;
  this.r = 4096;
}
g = P.prototype;
g.toString = function() {
  return[A(":"), A(this.ka)].join("");
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.q = function(a, b) {
  return b instanceof P ? this.ka === b.ka : !1;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Cd(c, this);
      case 3:
        return Dd(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return Cd(c, this);
  };
  a.d = function(a, c, d) {
    return Dd(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ob(b)));
};
g.b = function(a) {
  return Cd(a, this);
};
g.a = function(a, b) {
  return Dd(a, this, b);
};
g.F = function() {
  var a = this.Ab;
  return null != a ? a : this.Ab = a = Oc(Jc(this.name), Mc(this.oa)) + 2654435769 | 0;
};
g.Vb = function() {
  return this.name;
};
g.Wb = function() {
  return this.oa;
};
g.B = function(a, b) {
  return ic(b, [A(":"), A(this.ka)].join(""));
};
function Q(a, b) {
  return a === b ? !0 : a instanceof P && b instanceof P ? a.ka === b.ka : !1;
}
var re = function re() {
  switch(arguments.length) {
    case 1:
      return re.b(arguments[0]);
    case 2:
      return re.a(arguments[0], arguments[1]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
re.b = function(a) {
  if (a instanceof P) {
    return a;
  }
  if (a instanceof Qc) {
    var b;
    if (a && (a.r & 4096 || a.td)) {
      b = a.Wb(null);
    } else {
      throw Error([A("Doesn't support namespace: "), A(a)].join(""));
    }
    return new P(b, se.b ? se.b(a) : se.call(null, a), a.cb, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new P(b[0], b[1], a, null) : new P(null, b[0], a, null)) : null;
};
re.a = function(a, b) {
  return new P(a, b, [A(w(a) ? [A(a), A("/")].join("") : null), A(b)].join(""), null);
};
re.v = 2;
function te(a, b, c, d) {
  this.l = a;
  this.Kb = b;
  this.D = c;
  this.j = d;
  this.g = 32374988;
  this.r = 0;
}
g = te.prototype;
g.toString = function() {
  return Ec(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
function ue(a) {
  null != a.Kb && (a.D = a.Kb.m ? a.Kb.m() : a.Kb.call(null), a.Kb = null);
  return a.D;
}
g.A = function() {
  return this.l;
};
g.ja = function() {
  ec(this);
  return null == this.D ? null : H(this.D);
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = bd(this);
};
g.q = function(a, b) {
  return rd(this, b);
};
g.Q = function() {
  return td(Wc, this.l);
};
g.S = function(a, b) {
  return ud(b, this);
};
g.T = function(a, b, c) {
  return wd(b, c, this);
};
g.U = function() {
  ec(this);
  return null == this.D ? null : G(this.D);
};
g.ma = function() {
  ec(this);
  return null != this.D ? Vc(this.D) : Wc;
};
g.H = function() {
  ue(this);
  if (null == this.D) {
    return null;
  }
  for (var a = this.D;;) {
    if (a instanceof te) {
      a = ue(a);
    } else {
      return this.D = a, D(this.D);
    }
  }
};
g.C = function(a, b) {
  return new te(b, this.Kb, this.D, this.j);
};
g.G = function(a, b) {
  return J(b, this);
};
te.prototype[nb] = function() {
  return Zc(this);
};
function ve(a, b) {
  this.K = a;
  this.end = b;
  this.g = 2;
  this.r = 0;
}
ve.prototype.add = function(a) {
  this.K[this.end] = a;
  return this.end += 1;
};
ve.prototype.Ra = function() {
  var a = new we(this.K, 0, this.end);
  this.K = null;
  return a;
};
ve.prototype.I = function() {
  return this.end;
};
function we(a, b, c) {
  this.c = a;
  this.la = b;
  this.end = c;
  this.g = 524306;
  this.r = 0;
}
g = we.prototype;
g.I = function() {
  return this.end - this.la;
};
g.O = function(a, b) {
  return this.c[this.la + b];
};
g.sa = function(a, b, c) {
  return 0 <= b && b < this.end - this.la ? this.c[this.la + b] : c;
};
g.Pc = function() {
  if (this.la === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new we(this.c, this.la + 1, this.end);
};
g.S = function(a, b) {
  return md(this.c, b, this.c[this.la], this.la + 1);
};
g.T = function(a, b, c) {
  return md(this.c, b, c, this.la);
};
function xe(a, b, c, d) {
  this.Ra = a;
  this.Za = b;
  this.l = c;
  this.j = d;
  this.g = 31850732;
  this.r = 1536;
}
g = xe.prototype;
g.toString = function() {
  return Ec(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.A = function() {
  return this.l;
};
g.ja = function() {
  if (1 < xb(this.Ra)) {
    return new xe(rc(this.Ra), this.Za, this.l, null);
  }
  var a = ec(this.Za);
  return null == a ? null : a;
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = bd(this);
};
g.q = function(a, b) {
  return rd(this, b);
};
g.Q = function() {
  return td(Wc, this.l);
};
g.U = function() {
  return B.a(this.Ra, 0);
};
g.ma = function() {
  return 1 < xb(this.Ra) ? new xe(rc(this.Ra), this.Za, this.l, null) : null == this.Za ? Wc : this.Za;
};
g.H = function() {
  return this;
};
g.wc = function() {
  return this.Ra;
};
g.xc = function() {
  return null == this.Za ? Wc : this.Za;
};
g.C = function(a, b) {
  return new xe(this.Ra, this.Za, b, this.j);
};
g.G = function(a, b) {
  return J(b, this);
};
g.vc = function() {
  return null == this.Za ? null : this.Za;
};
xe.prototype[nb] = function() {
  return Zc(this);
};
function ye(a, b) {
  return 0 === xb(a) ? b : new xe(a, b, null, null);
}
function ze(a, b) {
  a.add(b);
}
function Ae(a) {
  for (var b = [];;) {
    if (D(a)) {
      b.push(G(a)), a = H(a);
    } else {
      return b;
    }
  }
}
function Be(a) {
  if ("number" === typeof a) {
    a: {
      var b = Array(a);
      if (Vd(null)) {
        for (var c = 0, d = D(null);;) {
          if (d && c < a) {
            b[c] = G(d), c += 1, d = H(d);
          } else {
            a = b;
            break a;
          }
        }
      } else {
        for (c = 0;;) {
          if (c < a) {
            b[c] = null, c += 1;
          } else {
            break;
          }
        }
        a = b;
      }
    }
  } else {
    a = qb(a);
  }
  return a;
}
function Ce(a, b) {
  if (nd(a)) {
    return M(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && D(c)) {
      c = H(c), --d, e += 1;
    } else {
      return e;
    }
  }
}
var De = function De(b) {
  return null == b ? null : null == H(b) ? D(G(b)) : J(G(b), De(H(b)));
}, Ee = function Ee() {
  switch(arguments.length) {
    case 0:
      return Ee.m();
    case 1:
      return Ee.b(arguments[0]);
    case 2:
      return Ee.a(arguments[0], arguments[1]);
    default:
      return Ee.i(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Ee.m = function() {
  return new te(null, function() {
    return null;
  }, null, null);
};
Ee.b = function(a) {
  return new te(null, function() {
    return a;
  }, null, null);
};
Ee.a = function(a, b) {
  return new te(null, function() {
    var c = D(a);
    return c ? Rd(c) ? ye(sc(c), Ee.a(tc(c), b)) : J(G(c), Ee.a(Vc(c), b)) : b;
  }, null, null);
};
Ee.i = function(a, b, c) {
  return function e(a, b) {
    return new te(null, function() {
      var c = D(a);
      return c ? Rd(c) ? ye(sc(c), e(tc(c), b)) : J(G(c), e(Vc(c), b)) : w(b) ? e(G(b), H(b)) : null;
    }, null, null);
  }(Ee.a(a, b), c);
};
Ee.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return Ee.i(b, a, c);
};
Ee.v = 2;
function Fe(a) {
  return oc(a);
}
var Ge = function Ge() {
  switch(arguments.length) {
    case 0:
      return Ge.m();
    case 1:
      return Ge.b(arguments[0]);
    case 2:
      return Ge.a(arguments[0], arguments[1]);
    default:
      return Ge.i(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Ge.m = function() {
  return mc(zd);
};
Ge.b = function(a) {
  return a;
};
Ge.a = function(a, b) {
  return nc(a, b);
};
Ge.i = function(a, b, c) {
  for (;;) {
    if (a = nc(a, b), w(c)) {
      b = G(c), c = H(c);
    } else {
      return a;
    }
  }
};
Ge.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return Ge.i(b, a, c);
};
Ge.v = 2;
function He(a, b, c) {
  var d = D(c);
  if (0 === b) {
    return a.m ? a.m() : a.call(null);
  }
  c = Db(d);
  var e = Eb(d);
  if (1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c);
  }
  var d = Db(e), f = Eb(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = Db(f), h = Eb(f);
  if (3 === b) {
    return a.d ? a.d(c, d, e) : a.d ? a.d(c, d, e) : a.call(null, c, d, e);
  }
  var f = Db(h), k = Eb(h);
  if (4 === b) {
    return a.s ? a.s(c, d, e, f) : a.s ? a.s(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var h = Db(k), l = Eb(k);
  if (5 === b) {
    return a.J ? a.J(c, d, e, f, h) : a.J ? a.J(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  var k = Db(l), m = Eb(l);
  if (6 === b) {
    return a.R ? a.R(c, d, e, f, h, k) : a.R ? a.R(c, d, e, f, h, k) : a.call(null, c, d, e, f, h, k);
  }
  var l = Db(m), p = Eb(m);
  if (7 === b) {
    return a.ga ? a.ga(c, d, e, f, h, k, l) : a.ga ? a.ga(c, d, e, f, h, k, l) : a.call(null, c, d, e, f, h, k, l);
  }
  var m = Db(p), q = Eb(p);
  if (8 === b) {
    return a.ha ? a.ha(c, d, e, f, h, k, l, m) : a.ha ? a.ha(c, d, e, f, h, k, l, m) : a.call(null, c, d, e, f, h, k, l, m);
  }
  var p = Db(q), r = Eb(q);
  if (9 === b) {
    return a.ia ? a.ia(c, d, e, f, h, k, l, m, p) : a.ia ? a.ia(c, d, e, f, h, k, l, m, p) : a.call(null, c, d, e, f, h, k, l, m, p);
  }
  var q = Db(r), t = Eb(r);
  if (10 === b) {
    return a.W ? a.W(c, d, e, f, h, k, l, m, p, q) : a.W ? a.W(c, d, e, f, h, k, l, m, p, q) : a.call(null, c, d, e, f, h, k, l, m, p, q);
  }
  var r = Db(t), v = Eb(t);
  if (11 === b) {
    return a.X ? a.X(c, d, e, f, h, k, l, m, p, q, r) : a.X ? a.X(c, d, e, f, h, k, l, m, p, q, r) : a.call(null, c, d, e, f, h, k, l, m, p, q, r);
  }
  var t = Db(v), y = Eb(v);
  if (12 === b) {
    return a.Y ? a.Y(c, d, e, f, h, k, l, m, p, q, r, t) : a.Y ? a.Y(c, d, e, f, h, k, l, m, p, q, r, t) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t);
  }
  var v = Db(y), C = Eb(y);
  if (13 === b) {
    return a.Z ? a.Z(c, d, e, f, h, k, l, m, p, q, r, t, v) : a.Z ? a.Z(c, d, e, f, h, k, l, m, p, q, r, t, v) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, v);
  }
  var y = Db(C), F = Eb(C);
  if (14 === b) {
    return a.$ ? a.$(c, d, e, f, h, k, l, m, p, q, r, t, v, y) : a.$ ? a.$(c, d, e, f, h, k, l, m, p, q, r, t, v, y) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, v, y);
  }
  var C = Db(F), K = Eb(F);
  if (15 === b) {
    return a.aa ? a.aa(c, d, e, f, h, k, l, m, p, q, r, t, v, y, C) : a.aa ? a.aa(c, d, e, f, h, k, l, m, p, q, r, t, v, y, C) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C);
  }
  var F = Db(K), R = Eb(K);
  if (16 === b) {
    return a.ba ? a.ba(c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F) : a.ba ? a.ba(c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F);
  }
  var K = Db(R), ca = Eb(R);
  if (17 === b) {
    return a.ca ? a.ca(c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K) : a.ca ? a.ca(c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K);
  }
  var R = Db(ca), Ba = Eb(ca);
  if (18 === b) {
    return a.da ? a.da(c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K, R) : a.da ? a.da(c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K, R) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K, R);
  }
  ca = Db(Ba);
  Ba = Eb(Ba);
  if (19 === b) {
    return a.ea ? a.ea(c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K, R, ca) : a.ea ? a.ea(c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K, R, ca) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K, R, ca);
  }
  var u = Db(Ba);
  Eb(Ba);
  if (20 === b) {
    return a.fa ? a.fa(c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K, R, ca, u) : a.fa ? a.fa(c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K, R, ca, u) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K, R, ca, u);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function Id() {
  switch(arguments.length) {
    case 2:
      return Ie(arguments[0], arguments[1]);
    case 3:
      return Je(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Ke(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Le(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return Me(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new E(Array.prototype.slice.call(arguments, 5), 0));
  }
}
function Ie(a, b) {
  var c = a.v;
  if (a.t) {
    var d = Ce(b, c + 1);
    return d <= c ? He(a, d, b) : a.t(b);
  }
  return a.apply(a, Ae(b));
}
function Je(a, b, c) {
  b = J(b, c);
  c = a.v;
  if (a.t) {
    var d = Ce(b, c + 1);
    return d <= c ? He(a, d, b) : a.t(b);
  }
  return a.apply(a, Ae(b));
}
function Ke(a, b, c, d) {
  b = J(b, J(c, d));
  c = a.v;
  return a.t ? (d = Ce(b, c + 1), d <= c ? He(a, d, b) : a.t(b)) : a.apply(a, Ae(b));
}
function Le(a, b, c, d, e) {
  b = J(b, J(c, J(d, e)));
  c = a.v;
  return a.t ? (d = Ce(b, c + 1), d <= c ? He(a, d, b) : a.t(b)) : a.apply(a, Ae(b));
}
function Me(a, b, c, d, e, f) {
  b = J(b, J(c, J(d, J(e, De(f)))));
  c = a.v;
  return a.t ? (d = Ce(b, c + 1), d <= c ? He(a, d, b) : a.t(b)) : a.apply(a, Ae(b));
}
function Ne(a) {
  return D(a) ? a : null;
}
var Oe = function Oe() {
  "undefined" === typeof Ta && (Ta = function(b, c) {
    this.Nd = b;
    this.Kd = c;
    this.g = 393216;
    this.r = 0;
  }, Ta.prototype.C = function(b, c) {
    return new Ta(this.Nd, c);
  }, Ta.prototype.A = function() {
    return this.Kd;
  }, Ta.prototype.Ua = function() {
    return!1;
  }, Ta.prototype.next = function() {
    return Error("No such element");
  }, Ta.prototype.remove = function() {
    return Error("Unsupported operation");
  }, Ta.Ib = !0, Ta.Gb = "cljs.core/t20095", Ta.$b = function(b, c) {
    return ic(c, "cljs.core/t20095");
  });
  return new Ta(Oe, S);
};
function Pe(a, b) {
  this.D = a;
  this.o = b;
}
Pe.prototype.Ua = function() {
  return this.o < this.D.length;
};
Pe.prototype.next = function() {
  var a = this.D.charAt(this.o);
  this.o += 1;
  return a;
};
Pe.prototype.remove = function() {
  return Error("Unsupported operation");
};
function Qe(a, b) {
  this.c = a;
  this.o = b;
}
Qe.prototype.Ua = function() {
  return this.o < this.c.length;
};
Qe.prototype.next = function() {
  var a = this.c[this.o];
  this.o += 1;
  return a;
};
Qe.prototype.remove = function() {
  return Error("Unsupported operation");
};
var Re = {}, Se = {};
function Te(a, b) {
  this.Ob = a;
  this.qb = b;
}
Te.prototype.Ua = function() {
  this.Ob === Re ? (this.Ob = Se, this.qb = D(this.qb)) : this.Ob === this.qb && (this.qb = H(this.Ob));
  return null != this.qb;
};
Te.prototype.next = function() {
  if (kb(this.Ua())) {
    throw Error("No such element");
  }
  this.Ob = this.qb;
  return G(this.qb);
};
Te.prototype.remove = function() {
  return Error("Unsupported operation");
};
function Ue(a) {
  if (null == a) {
    return Oe();
  }
  if ("string" === typeof a) {
    return new Pe(a, 0);
  }
  if (jb(a)) {
    return new Qe(a, 0);
  }
  var b;
  b = a ? w(w(null) ? null : a.lc) ? !0 : a.Hb ? !1 : x(Bc, a) : x(Bc, a);
  if (w(b)) {
    return Cc(a);
  }
  if (a ? a.g & 8388608 || a.wd || (a.g ? 0 : x(dc, a)) : x(dc, a)) {
    return new Te(Re, a);
  }
  throw Error([A("Cannot create iterator from "), A(a)].join(""));
}
function Ve(a, b) {
  this.Nb = a;
  this.ad = b;
}
Ve.prototype.step = function(a) {
  for (var b = this;;) {
    if (w(function() {
      var c = null != a.La;
      return c ? b.ad.Ua() : c;
    }())) {
      if (hd(function() {
        var c = b.ad.next();
        return b.Nb.a ? b.Nb.a(a, c) : b.Nb.call(null, a, c);
      }())) {
        null != a.V && (a.V.La = null);
      } else {
        continue;
      }
    }
    break;
  }
  return null == a.La ? null : b.Nb.b ? b.Nb.b(a) : b.Nb.call(null, a);
};
function We(a, b) {
  var c = function() {
    function a(b, c) {
      b.first = c;
      b.V = new Xe(b.La, null, null, null);
      b.La = null;
      return b.V;
    }
    function b(a) {
      (hd(a) ? Vb(a) : a).La = null;
      return a;
    }
    var c = null, c = function(c, f) {
      switch(arguments.length) {
        case 1:
          return b.call(this, c);
        case 2:
          return a.call(this, c, f);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    c.b = b;
    c.a = a;
    return c;
  }();
  return new Ve(a.b ? a.b(c) : a.call(null, c), b);
}
function Xe(a, b, c, d) {
  this.La = a;
  this.first = b;
  this.V = c;
  this.l = d;
  this.g = 31719628;
  this.r = 0;
}
g = Xe.prototype;
g.C = function(a, b) {
  return new Xe(this.La, this.first, this.V, b);
};
g.G = function(a, b) {
  return J(b, ec(this));
};
g.Q = function() {
  return Wc;
};
g.q = function(a, b) {
  return null != ec(this) ? rd(this, b) : Od(b) && null == D(b);
};
g.F = function() {
  return bd(this);
};
g.H = function() {
  null != this.La && this.La.step(this);
  return null == this.V ? null : this;
};
g.U = function() {
  null != this.La && ec(this);
  return null == this.V ? null : this.first;
};
g.ma = function() {
  null != this.La && ec(this);
  return null == this.V ? Wc : this.V;
};
g.ja = function() {
  null != this.La && ec(this);
  return null == this.V ? null : ec(this.V);
};
Xe.prototype[nb] = function() {
  return Zc(this);
};
function Ye(a, b) {
  for (;;) {
    if (null == D(b)) {
      return!0;
    }
    var c;
    c = G(b);
    c = a.b ? a.b(c) : a.call(null, c);
    if (w(c)) {
      c = a;
      var d = H(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
function Ze(a, b) {
  for (;;) {
    if (D(b)) {
      var c;
      c = G(b);
      c = a.b ? a.b(c) : a.call(null, c);
      if (w(c)) {
        return c;
      }
      c = a;
      var d = H(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
}
function $e(a) {
  return function() {
    function b(b, c) {
      return kb(a.a ? a.a(b, c) : a.call(null, b, c));
    }
    function c(b) {
      return kb(a.b ? a.b(b) : a.call(null, b));
    }
    function d() {
      return kb(a.m ? a.m() : a.call(null));
    }
    var e = null, f = function() {
      function b(a, d, e) {
        var f = null;
        if (2 < arguments.length) {
          for (var f = 0, h = Array(arguments.length - 2);f < h.length;) {
            h[f] = arguments[f + 2], ++f;
          }
          f = new E(h, 0);
        }
        return c.call(this, a, d, f);
      }
      function c(b, d, e) {
        return kb(Ke(a, b, d, e));
      }
      b.v = 2;
      b.t = function(a) {
        var b = G(a);
        a = H(a);
        var d = G(a);
        a = Vc(a);
        return c(b, d, a);
      };
      b.i = c;
      return b;
    }(), e = function(a, e, l) {
      switch(arguments.length) {
        case 0:
          return d.call(this);
        case 1:
          return c.call(this, a);
        case 2:
          return b.call(this, a, e);
        default:
          var m = null;
          if (2 < arguments.length) {
            for (var m = 0, p = Array(arguments.length - 2);m < p.length;) {
              p[m] = arguments[m + 2], ++m;
            }
            m = new E(p, 0);
          }
          return f.i(a, e, m);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    e.v = 2;
    e.t = f.t;
    e.m = d;
    e.b = c;
    e.a = b;
    e.i = f.i;
    return e;
  }();
}
function af(a) {
  return function() {
    function b(b) {
      if (0 < arguments.length) {
        for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
          e[d] = arguments[d + 0], ++d;
        }
      }
      return a;
    }
    b.v = 0;
    b.t = function(b) {
      D(b);
      return a;
    };
    b.i = function() {
      return a;
    };
    return b;
  }();
}
function bf(a, b) {
  return function() {
    function c(c, d, e) {
      c = b.d ? b.d(c, d, e) : b.call(null, c, d, e);
      return a.b ? a.b(c) : a.call(null, c);
    }
    function d(c, d) {
      var e = b.a ? b.a(c, d) : b.call(null, c, d);
      return a.b ? a.b(e) : a.call(null, e);
    }
    function e(c) {
      c = b.b ? b.b(c) : b.call(null, c);
      return a.b ? a.b(c) : a.call(null, c);
    }
    function f() {
      var c = b.m ? b.m() : b.call(null);
      return a.b ? a.b(c) : a.call(null, c);
    }
    var h = null, k = function() {
      function c(a, b, e, f) {
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new E(k, 0);
        }
        return d.call(this, a, b, e, h);
      }
      function d(c, e, f, h) {
        c = Le(b, c, e, f, h);
        return a.b ? a.b(c) : a.call(null, c);
      }
      c.v = 3;
      c.t = function(a) {
        var b = G(a);
        a = H(a);
        var c = G(a);
        a = H(a);
        var e = G(a);
        a = Vc(a);
        return d(b, c, e, a);
      };
      c.i = d;
      return c;
    }(), h = function(a, b, h, q) {
      switch(arguments.length) {
        case 0:
          return f.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return d.call(this, a, b);
        case 3:
          return c.call(this, a, b, h);
        default:
          var r = null;
          if (3 < arguments.length) {
            for (var r = 0, t = Array(arguments.length - 3);r < t.length;) {
              t[r] = arguments[r + 3], ++r;
            }
            r = new E(t, 0);
          }
          return k.i(a, b, h, r);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    h.v = 3;
    h.t = k.t;
    h.m = f;
    h.b = e;
    h.a = d;
    h.d = c;
    h.i = k.i;
    return h;
  }();
}
function cf(a, b, c) {
  return function() {
    function d(d, e, f) {
      d = c.d ? c.d(d, e, f) : c.call(null, d, e, f);
      d = b.b ? b.b(d) : b.call(null, d);
      return a.b ? a.b(d) : a.call(null, d);
    }
    function e(d, e) {
      var f;
      f = c.a ? c.a(d, e) : c.call(null, d, e);
      f = b.b ? b.b(f) : b.call(null, f);
      return a.b ? a.b(f) : a.call(null, f);
    }
    function f(d) {
      d = c.b ? c.b(d) : c.call(null, d);
      d = b.b ? b.b(d) : b.call(null, d);
      return a.b ? a.b(d) : a.call(null, d);
    }
    function h() {
      var d;
      d = c.m ? c.m() : c.call(null);
      d = b.b ? b.b(d) : b.call(null, d);
      return a.b ? a.b(d) : a.call(null, d);
    }
    var k = null, l = function() {
      function d(a, b, c, f) {
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new E(k, 0);
        }
        return e.call(this, a, b, c, h);
      }
      function e(d, f, h, k) {
        d = Le(c, d, f, h, k);
        d = b.b ? b.b(d) : b.call(null, d);
        return a.b ? a.b(d) : a.call(null, d);
      }
      d.v = 3;
      d.t = function(a) {
        var b = G(a);
        a = H(a);
        var c = G(a);
        a = H(a);
        var d = G(a);
        a = Vc(a);
        return e(b, c, d, a);
      };
      d.i = e;
      return d;
    }(), k = function(a, b, c, k) {
      switch(arguments.length) {
        case 0:
          return h.call(this);
        case 1:
          return f.call(this, a);
        case 2:
          return e.call(this, a, b);
        case 3:
          return d.call(this, a, b, c);
        default:
          var t = null;
          if (3 < arguments.length) {
            for (var t = 0, v = Array(arguments.length - 3);t < v.length;) {
              v[t] = arguments[t + 3], ++t;
            }
            t = new E(v, 0);
          }
          return l.i(a, b, c, t);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    k.v = 3;
    k.t = l.t;
    k.m = h;
    k.b = f;
    k.a = e;
    k.d = d;
    k.i = l.i;
    return k;
  }();
}
function df(a, b) {
  return function() {
    function c(c, d, e) {
      return a.s ? a.s(b, c, d, e) : a.call(null, b, c, d, e);
    }
    function d(c, d) {
      return a.d ? a.d(b, c, d) : a.call(null, b, c, d);
    }
    function e(c) {
      return a.a ? a.a(b, c) : a.call(null, b, c);
    }
    function f() {
      return a.b ? a.b(b) : a.call(null, b);
    }
    var h = null, k = function() {
      function c(a, b, e, f) {
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new E(k, 0);
        }
        return d.call(this, a, b, e, h);
      }
      function d(c, e, f, h) {
        return Me(a, b, c, e, f, L([h], 0));
      }
      c.v = 3;
      c.t = function(a) {
        var b = G(a);
        a = H(a);
        var c = G(a);
        a = H(a);
        var e = G(a);
        a = Vc(a);
        return d(b, c, e, a);
      };
      c.i = d;
      return c;
    }(), h = function(a, b, h, q) {
      switch(arguments.length) {
        case 0:
          return f.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return d.call(this, a, b);
        case 3:
          return c.call(this, a, b, h);
        default:
          var r = null;
          if (3 < arguments.length) {
            for (var r = 0, t = Array(arguments.length - 3);r < t.length;) {
              t[r] = arguments[r + 3], ++r;
            }
            r = new E(t, 0);
          }
          return k.i(a, b, h, r);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    h.v = 3;
    h.t = k.t;
    h.m = f;
    h.b = e;
    h.a = d;
    h.d = c;
    h.i = k.i;
    return h;
  }();
}
function ef(a, b) {
  var c = ff, d = gf;
  return function() {
    function e(e, f, h) {
      return c.R ? c.R(a, d, b, e, f, h) : c.call(null, a, d, b, e, f, h);
    }
    function f(e, f) {
      return c.J ? c.J(a, d, b, e, f) : c.call(null, a, d, b, e, f);
    }
    function h(e) {
      return c.s ? c.s(a, d, b, e) : c.call(null, a, d, b, e);
    }
    function k() {
      return c.d ? c.d(a, d, b) : c.call(null, a, d, b);
    }
    var l = null, m = function() {
      function e(a, b, c, d) {
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new E(k, 0);
        }
        return f.call(this, a, b, c, h);
      }
      function f(e, h, k, l) {
        return Me(c, a, d, b, e, L([h, k, l], 0));
      }
      e.v = 3;
      e.t = function(a) {
        var b = G(a);
        a = H(a);
        var c = G(a);
        a = H(a);
        var d = G(a);
        a = Vc(a);
        return f(b, c, d, a);
      };
      e.i = f;
      return e;
    }(), l = function(a, b, c, d) {
      switch(arguments.length) {
        case 0:
          return k.call(this);
        case 1:
          return h.call(this, a);
        case 2:
          return f.call(this, a, b);
        case 3:
          return e.call(this, a, b, c);
        default:
          var l = null;
          if (3 < arguments.length) {
            for (var l = 0, y = Array(arguments.length - 3);l < y.length;) {
              y[l] = arguments[l + 3], ++l;
            }
            l = new E(y, 0);
          }
          return m.i(a, b, c, l);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    l.v = 3;
    l.t = m.t;
    l.m = k;
    l.b = h;
    l.a = f;
    l.d = e;
    l.i = m.i;
    return l;
  }();
}
function hf(a, b, c, d) {
  this.state = a;
  this.l = b;
  this.Qd = c;
  this.hd = d;
  this.r = 16386;
  this.g = 6455296;
}
g = hf.prototype;
g.equiv = function(a) {
  return this.q(null, a);
};
g.q = function(a, b) {
  return this === b;
};
g.Bb = function() {
  return this.state;
};
g.A = function() {
  return this.l;
};
g.Tc = function(a, b, c) {
  for (var d = D(this.hd), e = null, f = 0, h = 0;;) {
    if (h < f) {
      a = e.O(null, h);
      var k = N(a, 0);
      a = N(a, 1);
      var l = b, m = c;
      a.s ? a.s(k, this, l, m) : a.call(null, k, this, l, m);
      h += 1;
    } else {
      if (a = D(d)) {
        d = a, Rd(d) ? (e = sc(d), d = tc(d), a = e, f = M(e), e = a) : (a = G(d), k = N(a, 0), a = N(a, 1), e = k, f = b, h = c, a.s ? a.s(e, this, f, h) : a.call(null, e, this, f, h), d = H(d), e = null, f = 0), h = 0;
      } else {
        return null;
      }
    }
  }
};
g.F = function() {
  return this[ja] || (this[ja] = ++ka);
};
function jf() {
  switch(arguments.length) {
    case 1:
      return kf(arguments[0]);
    default:
      var a = arguments[0], b = new E(Array.prototype.slice.call(arguments, 1), 0), c = Vd(b) ? Ie(lf, b) : b, b = Cd(c, eb), c = Cd(c, mf);
      return new hf(a, b, c, null);
  }
}
function kf(a) {
  return new hf(a, null, null, null);
}
function nf(a, b) {
  if (a instanceof hf) {
    var c = a.Qd;
    if (null != c && !w(c.b ? c.b(b) : c.call(null, b))) {
      throw Error([A("Assert failed: "), A("Validator rejected reference state"), A("\n"), A(function() {
        var a = oe(new Qc(null, "validate", "validate", 1439230700, null), new Qc(null, "new-value", "new-value", -1567397401, null));
        return of.b ? of.b(a) : of.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.hd && lc(a, c, b);
    return b;
  }
  return yc(a, b);
}
var ff = function ff() {
  switch(arguments.length) {
    case 2:
      return ff.a(arguments[0], arguments[1]);
    case 3:
      return ff.d(arguments[0], arguments[1], arguments[2]);
    case 4:
      return ff.s(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return ff.i(arguments[0], arguments[1], arguments[2], arguments[3], new E(Array.prototype.slice.call(arguments, 4), 0));
  }
};
ff.a = function(a, b) {
  var c;
  a instanceof hf ? (c = a.state, c = b.b ? b.b(c) : b.call(null, c), c = nf(a, c)) : c = zc.a(a, b);
  return c;
};
ff.d = function(a, b, c) {
  if (a instanceof hf) {
    var d = a.state;
    b = b.a ? b.a(d, c) : b.call(null, d, c);
    a = nf(a, b);
  } else {
    a = zc.d(a, b, c);
  }
  return a;
};
ff.s = function(a, b, c, d) {
  if (a instanceof hf) {
    var e = a.state;
    b = b.d ? b.d(e, c, d) : b.call(null, e, c, d);
    a = nf(a, b);
  } else {
    a = zc.s(a, b, c, d);
  }
  return a;
};
ff.i = function(a, b, c, d, e) {
  return a instanceof hf ? nf(a, Le(b, a.state, c, d, e)) : zc.J(a, b, c, d, e);
};
ff.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), e = H(d), d = G(e), e = H(e);
  return ff.i(b, a, c, d, e);
};
ff.v = 4;
function pf(a) {
  this.state = a;
  this.g = 32768;
  this.r = 0;
}
pf.prototype.Sc = function(a, b) {
  return this.state = b;
};
pf.prototype.Bb = function() {
  return this.state;
};
var T = function T() {
  switch(arguments.length) {
    case 1:
      return T.b(arguments[0]);
    case 2:
      return T.a(arguments[0], arguments[1]);
    case 3:
      return T.d(arguments[0], arguments[1], arguments[2]);
    case 4:
      return T.s(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return T.i(arguments[0], arguments[1], arguments[2], arguments[3], new E(Array.prototype.slice.call(arguments, 4), 0));
  }
};
T.b = function(a) {
  return function(b) {
    return function() {
      function c(c, d) {
        var e = a.b ? a.b(d) : a.call(null, d);
        return b.a ? b.a(c, e) : b.call(null, c, e);
      }
      function d(a) {
        return b.b ? b.b(a) : b.call(null, a);
      }
      function e() {
        return b.m ? b.m() : b.call(null);
      }
      var f = null, h = function() {
        function c(a, b, e) {
          var f = null;
          if (2 < arguments.length) {
            for (var f = 0, h = Array(arguments.length - 2);f < h.length;) {
              h[f] = arguments[f + 2], ++f;
            }
            f = new E(h, 0);
          }
          return d.call(this, a, b, f);
        }
        function d(c, e, f) {
          e = Je(a, e, f);
          return b.a ? b.a(c, e) : b.call(null, c, e);
        }
        c.v = 2;
        c.t = function(a) {
          var b = G(a);
          a = H(a);
          var c = G(a);
          a = Vc(a);
          return d(b, c, a);
        };
        c.i = d;
        return c;
      }(), f = function(a, b, f) {
        switch(arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, b);
          default:
            var p = null;
            if (2 < arguments.length) {
              for (var p = 0, q = Array(arguments.length - 2);p < q.length;) {
                q[p] = arguments[p + 2], ++p;
              }
              p = new E(q, 0);
            }
            return h.i(a, b, p);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.v = 2;
      f.t = h.t;
      f.m = e;
      f.b = d;
      f.a = c;
      f.i = h.i;
      return f;
    }();
  };
};
T.a = function(a, b) {
  return new te(null, function() {
    var c = D(b);
    if (c) {
      if (Rd(c)) {
        for (var d = sc(c), e = M(d), f = new ve(Array(e), 0), h = 0;;) {
          if (h < e) {
            ze(f, function() {
              var b = B.a(d, h);
              return a.b ? a.b(b) : a.call(null, b);
            }()), h += 1;
          } else {
            break;
          }
        }
        return ye(f.Ra(), T.a(a, tc(c)));
      }
      return J(function() {
        var b = G(c);
        return a.b ? a.b(b) : a.call(null, b);
      }(), T.a(a, Vc(c)));
    }
    return null;
  }, null, null);
};
T.d = function(a, b, c) {
  return new te(null, function() {
    var d = D(b), e = D(c);
    if (d && e) {
      var f = J, h;
      h = G(d);
      var k = G(e);
      h = a.a ? a.a(h, k) : a.call(null, h, k);
      d = f(h, T.d(a, Vc(d), Vc(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
T.s = function(a, b, c, d) {
  return new te(null, function() {
    var e = D(b), f = D(c), h = D(d);
    if (e && f && h) {
      var k = J, l;
      l = G(e);
      var m = G(f), p = G(h);
      l = a.d ? a.d(l, m, p) : a.call(null, l, m, p);
      e = k(l, T.s(a, Vc(e), Vc(f), Vc(h)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
T.i = function(a, b, c, d, e) {
  var f = function k(a) {
    return new te(null, function() {
      var b = T.a(D, a);
      return Ye(ae, b) ? J(T.a(G, b), k(T.a(Vc, b))) : null;
    }, null, null);
  };
  return T.a(function() {
    return function(b) {
      return Ie(a, b);
    };
  }(f), f(yd.i(e, d, L([c, b], 0))));
};
T.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), e = H(d), d = G(e), e = H(e);
  return T.i(b, a, c, d, e);
};
T.v = 4;
function qf(a) {
  return function(b) {
    return function(a) {
      return function() {
        function d(d, e) {
          var f = Vb(a), h = Ac(a, Vb(a) - 1), f = 0 < f ? b.a ? b.a(d, e) : b.call(null, d, e) : d;
          return 0 < h ? f : hd(f) ? f : new gd(f);
        }
        function e(a) {
          return b.b ? b.b(a) : b.call(null, a);
        }
        function f() {
          return b.m ? b.m() : b.call(null);
        }
        var h = null, h = function(a, b) {
          switch(arguments.length) {
            case 0:
              return f.call(this);
            case 1:
              return e.call(this, a);
            case 2:
              return d.call(this, a, b);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        h.m = f;
        h.b = e;
        h.a = d;
        return h;
      }();
    }(new pf(a));
  };
}
function rf(a, b) {
  return new te(null, function() {
    if (0 < a) {
      var c = D(b);
      return c ? J(G(c), rf(a - 1, Vc(c))) : null;
    }
    return null;
  }, null, null);
}
function sf(a, b) {
  return new te(null, function(c) {
    return function() {
      return c(a, b);
    };
  }(function(a, b) {
    for (;;) {
      var e = D(b);
      if (0 < a && e) {
        var f = a - 1, e = Vc(e);
        a = f;
        b = e;
      } else {
        return e;
      }
    }
  }), null, null);
}
function tf(a) {
  var b = uf;
  return new te(null, function(c) {
    return function() {
      return c(b, a);
    };
  }(function(a, b) {
    for (;;) {
      var e = D(b), f;
      if (f = e) {
        f = G(e), f = a.b ? a.b(f) : a.call(null, f);
      }
      if (w(f)) {
        f = a, e = Vc(e), a = f, b = e;
      } else {
        return e;
      }
    }
  }), null, null);
}
function vf(a) {
  return new te(null, function() {
    return J(a, vf(a));
  }, null, null);
}
function wf(a) {
  return function(b) {
    return function() {
      function c(c, d) {
        return w(a.b ? a.b(d) : a.call(null, d)) ? b.a ? b.a(c, d) : b.call(null, c, d) : c;
      }
      function d(a) {
        return b.b ? b.b(a) : b.call(null, a);
      }
      function e() {
        return b.m ? b.m() : b.call(null);
      }
      var f = null, f = function(a, b) {
        switch(arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, b);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.m = e;
      f.b = d;
      f.a = c;
      return f;
    }();
  };
}
function xf(a, b) {
  return new te(null, function() {
    var c = D(b);
    if (c) {
      if (Rd(c)) {
        for (var d = sc(c), e = M(d), f = new ve(Array(e), 0), h = 0;;) {
          if (h < e) {
            var k;
            k = B.a(d, h);
            k = a.b ? a.b(k) : a.call(null, k);
            w(k) && (k = B.a(d, h), f.add(k));
            h += 1;
          } else {
            break;
          }
        }
        return ye(f.Ra(), xf(a, tc(c)));
      }
      d = G(c);
      c = Vc(c);
      return w(a.b ? a.b(d) : a.call(null, d)) ? J(d, xf(a, c)) : xf(a, c);
    }
    return null;
  }, null, null);
}
function yf(a, b) {
  return xf($e(a), b);
}
function zf(a) {
  return function c(a) {
    return new te(null, function() {
      var e;
      w(Od.b ? Od.b(a) : Od.call(null, a)) ? (e = L([D.b ? D.b(a) : D.call(null, a)], 0), e = Ie(Ee, Je(T, c, e))) : e = null;
      return J(a, e);
    }, null, null);
  }(a);
}
function Af(a) {
  return xf(function(a) {
    return!Od(a);
  }, Vc(zf(a)));
}
var Bf = function Bf() {
  switch(arguments.length) {
    case 2:
      return Bf.a(arguments[0], arguments[1]);
    case 3:
      return Bf.d(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
Bf.a = function(a, b) {
  return null != a ? a && (a.r & 4 || a.md) ? td(Fe(sb(nc, mc(a), b)), Jd(a)) : sb(Ab, a, b) : sb(yd, Wc, b);
};
Bf.d = function(a, b, c) {
  return a && (a.r & 4 || a.md) ? td(Fe(be(b, Ge, mc(a), c)), Jd(a)) : be(b, yd, a, c);
};
Bf.v = 3;
var Cf = function Cf() {
  switch(arguments.length) {
    case 2:
      return Cf.a(arguments[0], arguments[1]);
    case 3:
      return Cf.d(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Cf.s(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return Cf.i(arguments[0], arguments[1], arguments[2], arguments[3], new E(Array.prototype.slice.call(arguments, 4), 0));
  }
};
Cf.a = function(a, b) {
  return Fe(sb(function(b, d) {
    return Ge.a(b, a.b ? a.b(d) : a.call(null, d));
  }, mc(zd), b));
};
Cf.d = function(a, b, c) {
  return Bf.a(zd, T.d(a, b, c));
};
Cf.s = function(a, b, c, d) {
  return Bf.a(zd, T.s(a, b, c, d));
};
Cf.i = function(a, b, c, d, e) {
  return Bf.a(zd, Me(T, a, b, c, d, L([e], 0)));
};
Cf.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), e = H(d), d = G(e), e = H(e);
  return Cf.i(b, a, c, d, e);
};
Cf.v = 4;
function Df(a, b, c, d) {
  return new te(null, function() {
    var e = D(d);
    if (e) {
      var f = rf(a, e);
      return a === M(f) ? J(f, Df(a, b, c, sf(b, e))) : Ab(Wc, rf(a, Ee.a(f, c)));
    }
    return null;
  }, null, null);
}
var gf = function gf(b, c, d) {
  var e = N(c, 0);
  c = he(c);
  return w(c) ? O.d(b, e, gf(Cd(b, e), c, d)) : O.d(b, e, d);
}, Ef = function Ef() {
  switch(arguments.length) {
    case 3:
      return Ef.d(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Ef.s(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Ef.J(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return Ef.R(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      return Ef.i(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new E(Array.prototype.slice.call(arguments, 6), 0));
  }
};
Ef.d = function(a, b, c) {
  var d = N(b, 0);
  b = he(b);
  return w(b) ? O.d(a, d, Ef.d(Cd(a, d), b, c)) : O.d(a, d, function() {
    var b = Cd(a, d);
    return c.b ? c.b(b) : c.call(null, b);
  }());
};
Ef.s = function(a, b, c, d) {
  var e = N(b, 0);
  b = he(b);
  return w(b) ? O.d(a, e, Ef.s(Cd(a, e), b, c, d)) : O.d(a, e, function() {
    var b = Cd(a, e);
    return c.a ? c.a(b, d) : c.call(null, b, d);
  }());
};
Ef.J = function(a, b, c, d, e) {
  var f = N(b, 0);
  b = he(b);
  return w(b) ? O.d(a, f, Ef.J(Cd(a, f), b, c, d, e)) : O.d(a, f, function() {
    var b = Cd(a, f);
    return c.d ? c.d(b, d, e) : c.call(null, b, d, e);
  }());
};
Ef.R = function(a, b, c, d, e, f) {
  var h = N(b, 0);
  b = he(b);
  return w(b) ? O.d(a, h, Ef.R(Cd(a, h), b, c, d, e, f)) : O.d(a, h, function() {
    var b = Cd(a, h);
    return c.s ? c.s(b, d, e, f) : c.call(null, b, d, e, f);
  }());
};
Ef.i = function(a, b, c, d, e, f, h) {
  var k = N(b, 0);
  b = he(b);
  return w(b) ? O.d(a, k, Me(Ef, Cd(a, k), b, c, d, L([e, f, h], 0))) : O.d(a, k, Me(c, Cd(a, k), d, e, f, L([h], 0)));
};
Ef.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), e = H(d), d = G(e), f = H(e), e = G(f), h = H(f), f = G(h), h = H(h);
  return Ef.i(b, a, c, d, e, f, h);
};
Ef.v = 6;
function Ff(a, b) {
  this.M = a;
  this.c = b;
}
function Gf(a) {
  return new Ff(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Hf(a) {
  return new Ff(a.M, ob(a.c));
}
function If(a) {
  a = a.h;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Jf(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Gf(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var Kf = function Kf(b, c, d, e) {
  var f = Hf(d), h = b.h - 1 >>> c & 31;
  5 === c ? f.c[h] = e : (d = d.c[h], b = null != d ? Kf(b, c - 5, d, e) : Jf(null, c - 5, e), f.c[h] = b);
  return f;
};
function Lf(a, b) {
  throw Error([A("No item "), A(a), A(" in vector of length "), A(b)].join(""));
}
function Mf(a, b) {
  if (b >= If(a)) {
    return a.L;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.c[b >>> d & 31], d = e
    } else {
      return c.c;
    }
  }
}
function Nf(a, b) {
  return 0 <= b && b < a.h ? Mf(a, b) : Lf(b, a.h);
}
var Of = function Of(b, c, d, e, f) {
  var h = Hf(d);
  if (0 === c) {
    h.c[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Of(b, c - 5, d.c[k], e, f);
    h.c[k] = b;
  }
  return h;
}, Pf = function Pf(b, c, d) {
  var e = b.h - 2 >>> c & 31;
  if (5 < c) {
    b = Pf(b, c - 5, d.c[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = Hf(d);
    d.c[e] = b;
    return d;
  }
  if (0 === e) {
    return null;
  }
  d = Hf(d);
  d.c[e] = null;
  return d;
};
function Qf(a, b, c, d, e, f) {
  this.o = a;
  this.hc = b;
  this.c = c;
  this.Oa = d;
  this.start = e;
  this.end = f;
}
Qf.prototype.Ua = function() {
  return this.o < this.end;
};
Qf.prototype.next = function() {
  32 === this.o - this.hc && (this.c = Mf(this.Oa, this.o), this.hc += 32);
  var a = this.c[this.o & 31];
  this.o += 1;
  return a;
};
function U(a, b, c, d, e, f) {
  this.l = a;
  this.h = b;
  this.shift = c;
  this.root = d;
  this.L = e;
  this.j = f;
  this.g = 167668511;
  this.r = 8196;
}
g = U.prototype;
g.toString = function() {
  return Ec(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.w = function(a, b) {
  return Hb.d(this, b, null);
};
g.u = function(a, b, c) {
  return "number" === typeof b ? B.d(this, b, c) : c;
};
g.O = function(a, b) {
  return Nf(this, b)[b & 31];
};
g.sa = function(a, b, c) {
  return 0 <= b && b < this.h ? Mf(this, b)[b & 31] : c;
};
g.wb = function(a, b, c) {
  if (0 <= b && b < this.h) {
    return If(this) <= b ? (a = ob(this.L), a[b & 31] = c, new U(this.l, this.h, this.shift, this.root, a, null)) : new U(this.l, this.h, this.shift, Of(this, this.shift, this.root, b, c), this.L, null);
  }
  if (b === this.h) {
    return Ab(this, c);
  }
  throw Error([A("Index "), A(b), A(" out of bounds  [0,"), A(this.h), A("]")].join(""));
};
g.lc = !0;
g.Sb = function() {
  var a = this.h;
  return new Qf(0, 0, 0 < M(this) ? Mf(this, 0) : null, this, 0, a);
};
g.A = function() {
  return this.l;
};
g.I = function() {
  return this.h;
};
g.Tb = function() {
  return B.a(this, 0);
};
g.Ub = function() {
  return B.a(this, 1);
};
g.sb = function() {
  return 0 < this.h ? B.a(this, this.h - 1) : null;
};
g.tb = function() {
  if (0 === this.h) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.h) {
    return Zb(zd, this.l);
  }
  if (1 < this.h - If(this)) {
    return new U(this.l, this.h - 1, this.shift, this.root, this.L.slice(0, -1), null);
  }
  var a = Mf(this, this.h - 2), b = Pf(this, this.shift, this.root), b = null == b ? V : b, c = this.h - 1;
  return 5 < this.shift && null == b.c[1] ? new U(this.l, c, this.shift - 5, b.c[0], a, null) : new U(this.l, c, this.shift, b, a, null);
};
g.Db = function() {
  return 0 < this.h ? new qd(this, this.h - 1, null) : null;
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = bd(this);
};
g.q = function(a, b) {
  if (b instanceof U) {
    if (this.h === M(b)) {
      for (var c = Cc(this), d = Cc(b);;) {
        if (w(c.Ua())) {
          var e = c.next(), f = d.next();
          if (!Xc.a(e, f)) {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return!1;
    }
  } else {
    return rd(this, b);
  }
};
g.Cb = function() {
  var a = this;
  return new Rf(a.h, a.shift, function() {
    var b = a.root;
    return Sf.b ? Sf.b(b) : Sf.call(null, b);
  }(), function() {
    var b = a.L;
    return Tf.b ? Tf.b(b) : Tf.call(null, b);
  }());
};
g.Q = function() {
  return td(zd, this.l);
};
g.S = function(a, b) {
  return id(this, b);
};
g.T = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.h) {
      var e = Mf(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var h = e[f], d = b.a ? b.a(d, h) : b.call(null, d, h);
            if (hd(d)) {
              e = d;
              break a;
            }
            f += 1;
          } else {
            e = d;
            break a;
          }
        }
      }
      if (hd(e)) {
        return b = e, I.b ? I.b(b) : I.call(null, b);
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
g.pa = function(a, b, c) {
  if ("number" === typeof b) {
    return Ub(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
g.H = function() {
  if (0 === this.h) {
    return null;
  }
  if (32 >= this.h) {
    return new E(this.L, 0);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.c[0];
      } else {
        a = a.c;
        break a;
      }
    }
  }
  return Uf ? Uf(this, a, 0, 0) : Vf.call(null, this, a, 0, 0);
};
g.C = function(a, b) {
  return new U(b, this.h, this.shift, this.root, this.L, this.j);
};
g.G = function(a, b) {
  if (32 > this.h - If(this)) {
    for (var c = this.L.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.L[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new U(this.l, this.h + 1, this.shift, this.root, d, null);
  }
  c = (d = this.h >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Gf(null), d.c[0] = this.root, e = Jf(null, this.shift, new Ff(null, this.L)), d.c[1] = e) : d = Kf(this, this.shift, this.root, new Ff(null, this.L));
  return new U(this.l, this.h + 1, c, d, [b], null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.O(null, c);
      case 3:
        return this.sa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.O(null, c);
  };
  a.d = function(a, c, d) {
    return this.sa(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ob(b)));
};
g.b = function(a) {
  return this.O(null, a);
};
g.a = function(a, b) {
  return this.sa(null, a, b);
};
var V = new Ff(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), zd = new U(null, 0, 5, V, [], cd);
function Wf(a) {
  var b = a.length;
  if (32 > b) {
    return new U(null, b, 5, V, a, null);
  }
  for (var c = 32, d = (new U(null, 32, 5, V, a.slice(0, 32), null)).Cb(null);;) {
    if (c < b) {
      var e = c + 1, d = Ge.a(d, a[c]), c = e
    } else {
      return oc(d);
    }
  }
}
U.prototype[nb] = function() {
  return Zc(this);
};
function Xf(a) {
  return jb(a) ? Wf(a) : oc(sb(nc, mc(zd), a));
}
var Yf = function Yf() {
  return Yf.i(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Yf.i = function(a) {
  return a instanceof E && 0 === a.o ? Wf(a.c) : Xf(a);
};
Yf.v = 0;
Yf.t = function(a) {
  return Yf.i(D(a));
};
function Zf(a, b, c, d, e, f) {
  this.Da = a;
  this.jb = b;
  this.o = c;
  this.la = d;
  this.l = e;
  this.j = f;
  this.g = 32375020;
  this.r = 1536;
}
g = Zf.prototype;
g.toString = function() {
  return Ec(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.A = function() {
  return this.l;
};
g.ja = function() {
  if (this.la + 1 < this.jb.length) {
    var a;
    a = this.Da;
    var b = this.jb, c = this.o, d = this.la + 1;
    a = Uf ? Uf(a, b, c, d) : Vf.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return vc(this);
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = bd(this);
};
g.q = function(a, b) {
  return rd(this, b);
};
g.Q = function() {
  return td(zd, this.l);
};
g.S = function(a, b) {
  var c;
  c = this.Da;
  var d = this.o + this.la, e = M(this.Da);
  c = $f ? $f(c, d, e) : ag.call(null, c, d, e);
  return id(c, b);
};
g.T = function(a, b, c) {
  a = this.Da;
  var d = this.o + this.la, e = M(this.Da);
  a = $f ? $f(a, d, e) : ag.call(null, a, d, e);
  return jd(a, b, c);
};
g.U = function() {
  return this.jb[this.la];
};
g.ma = function() {
  if (this.la + 1 < this.jb.length) {
    var a;
    a = this.Da;
    var b = this.jb, c = this.o, d = this.la + 1;
    a = Uf ? Uf(a, b, c, d) : Vf.call(null, a, b, c, d);
    return null == a ? Wc : a;
  }
  return tc(this);
};
g.H = function() {
  return this;
};
g.wc = function() {
  var a = this.jb;
  return new we(a, this.la, a.length);
};
g.xc = function() {
  var a = this.o + this.jb.length;
  if (a < xb(this.Da)) {
    var b = this.Da, c = Mf(this.Da, a);
    return Uf ? Uf(b, c, a, 0) : Vf.call(null, b, c, a, 0);
  }
  return Wc;
};
g.C = function(a, b) {
  var c = this.Da, d = this.jb, e = this.o, f = this.la;
  return bg ? bg(c, d, e, f, b) : Vf.call(null, c, d, e, f, b);
};
g.G = function(a, b) {
  return J(b, this);
};
g.vc = function() {
  var a = this.o + this.jb.length;
  if (a < xb(this.Da)) {
    var b = this.Da, c = Mf(this.Da, a);
    return Uf ? Uf(b, c, a, 0) : Vf.call(null, b, c, a, 0);
  }
  return null;
};
Zf.prototype[nb] = function() {
  return Zc(this);
};
function Vf() {
  switch(arguments.length) {
    case 3:
      var a = arguments[0], b = arguments[1], c = arguments[2];
      return new Zf(a, Nf(a, b), b, c, null, null);
    case 4:
      return Uf(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return bg(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function Uf(a, b, c, d) {
  return new Zf(a, b, c, d, null, null);
}
function bg(a, b, c, d, e) {
  return new Zf(a, b, c, d, e, null);
}
function cg(a, b, c, d, e) {
  this.l = a;
  this.Oa = b;
  this.start = c;
  this.end = d;
  this.j = e;
  this.g = 167666463;
  this.r = 8192;
}
g = cg.prototype;
g.toString = function() {
  return Ec(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.w = function(a, b) {
  return Hb.d(this, b, null);
};
g.u = function(a, b, c) {
  return "number" === typeof b ? B.d(this, b, c) : c;
};
g.O = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Lf(b, this.end - this.start) : B.a(this.Oa, this.start + b);
};
g.sa = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : B.d(this.Oa, this.start + b, c);
};
g.wb = function(a, b, c) {
  var d = this.start + b;
  a = this.l;
  c = O.d(this.Oa, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return dg.J ? dg.J(a, c, b, d, null) : dg.call(null, a, c, b, d, null);
};
g.A = function() {
  return this.l;
};
g.I = function() {
  return this.end - this.start;
};
g.sb = function() {
  return B.a(this.Oa, this.end - 1);
};
g.tb = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  var a = this.l, b = this.Oa, c = this.start, d = this.end - 1;
  return dg.J ? dg.J(a, b, c, d, null) : dg.call(null, a, b, c, d, null);
};
g.Db = function() {
  return this.start !== this.end ? new qd(this, this.end - this.start - 1, null) : null;
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = bd(this);
};
g.q = function(a, b) {
  return rd(this, b);
};
g.Q = function() {
  return td(zd, this.l);
};
g.S = function(a, b) {
  return id(this, b);
};
g.T = function(a, b, c) {
  return jd(this, b, c);
};
g.pa = function(a, b, c) {
  if ("number" === typeof b) {
    return Ub(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.H = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : J(B.a(a.Oa, e), new te(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
g.C = function(a, b) {
  var c = this.Oa, d = this.start, e = this.end, f = this.j;
  return dg.J ? dg.J(b, c, d, e, f) : dg.call(null, b, c, d, e, f);
};
g.G = function(a, b) {
  var c = this.l, d = Ub(this.Oa, this.end, b), e = this.start, f = this.end + 1;
  return dg.J ? dg.J(c, d, e, f, null) : dg.call(null, c, d, e, f, null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.O(null, c);
      case 3:
        return this.sa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.O(null, c);
  };
  a.d = function(a, c, d) {
    return this.sa(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ob(b)));
};
g.b = function(a) {
  return this.O(null, a);
};
g.a = function(a, b) {
  return this.sa(null, a, b);
};
cg.prototype[nb] = function() {
  return Zc(this);
};
function dg(a, b, c, d, e) {
  for (;;) {
    if (b instanceof cg) {
      c = b.start + c, d = b.start + d, b = b.Oa;
    } else {
      var f = M(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new cg(a, b, c, d, e);
    }
  }
}
function ag() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0];
      return $f(a, arguments[1], M(a));
    case 3:
      return $f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function $f(a, b, c) {
  return dg(null, a, b, c, null);
}
function eg(a, b) {
  return a === b.M ? b : new Ff(a, ob(b.c));
}
function Sf(a) {
  return new Ff({}, ob(a.c));
}
function Tf(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Td(a, 0, b, 0, a.length);
  return b;
}
var fg = function fg(b, c, d, e) {
  d = eg(b.root.M, d);
  var f = b.h - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.c[f];
    b = null != h ? fg(b, c - 5, h, e) : Jf(b.root.M, c - 5, e);
  }
  d.c[f] = b;
  return d;
};
function Rf(a, b, c, d) {
  this.h = a;
  this.shift = b;
  this.root = c;
  this.L = d;
  this.r = 88;
  this.g = 275;
}
g = Rf.prototype;
g.ub = function(a, b) {
  if (this.root.M) {
    if (32 > this.h - If(this)) {
      this.L[this.h & 31] = b;
    } else {
      var c = new Ff(this.root.M, this.L), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.L = d;
      if (this.h >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Jf(this.root.M, this.shift, c);
        this.root = new Ff(this.root.M, d);
        this.shift = e;
      } else {
        this.root = fg(this, this.shift, this.root, c);
      }
    }
    this.h += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
g.vb = function() {
  if (this.root.M) {
    this.root.M = null;
    var a = this.h - If(this), b = Array(a);
    Td(this.L, 0, b, 0, a);
    return new U(null, this.h, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
g.Yb = function(a, b, c) {
  if ("number" === typeof b) {
    return qc(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
g.Rc = function(a, b, c) {
  var d = this;
  if (d.root.M) {
    if (0 <= b && b < d.h) {
      return If(this) <= b ? d.L[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = eg(d.root.M, k);
          if (0 === a) {
            l.c[b & 31] = c;
          } else {
            var m = b >>> a & 31, p = f(a - 5, l.c[m]);
            l.c[m] = p;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.h) {
      return nc(this, c);
    }
    throw Error([A("Index "), A(b), A(" out of bounds for TransientVector of length"), A(d.h)].join(""));
  }
  throw Error("assoc! after persistent!");
};
g.I = function() {
  if (this.root.M) {
    return this.h;
  }
  throw Error("count after persistent!");
};
g.O = function(a, b) {
  if (this.root.M) {
    return Nf(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.sa = function(a, b, c) {
  return 0 <= b && b < this.h ? B.a(this, b) : c;
};
g.w = function(a, b) {
  return Hb.d(this, b, null);
};
g.u = function(a, b, c) {
  return "number" === typeof b ? B.d(this, b, c) : c;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.w(null, c);
      case 3:
        return this.u(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.w(null, c);
  };
  a.d = function(a, c, d) {
    return this.u(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ob(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
function gg() {
  this.g = 2097152;
  this.r = 0;
}
gg.prototype.equiv = function(a) {
  return this.q(null, a);
};
gg.prototype.q = function() {
  return!1;
};
var hg = new gg;
function ig(a, b) {
  return Wd(Pd(b) ? M(a) === M(b) ? Ye(ae, T.a(function(a) {
    return Xc.a(Dd(b, G(a), hg), G(H(a)));
  }, a)) : null : null);
}
function jg(a) {
  this.D = a;
}
jg.prototype.next = function() {
  if (null != this.D) {
    var a = G(this.D), b = N(a, 0), a = N(a, 1);
    this.D = H(this.D);
    return{value:[b, a], done:!1};
  }
  return{value:null, done:!0};
};
function kg(a) {
  return new jg(D(a));
}
function lg(a) {
  this.D = a;
}
lg.prototype.next = function() {
  if (null != this.D) {
    var a = G(this.D);
    this.D = H(this.D);
    return{value:[a, a], done:!1};
  }
  return{value:null, done:!0};
};
function mg(a) {
  return new lg(D(a));
}
function ng(a, b) {
  var c;
  if (b instanceof P) {
    a: {
      c = a.length;
      for (var d = b.ka, e = 0;;) {
        if (c <= e) {
          c = -1;
          break a;
        }
        var f = a[e];
        if (f instanceof P && d === f.ka) {
          c = e;
          break a;
        }
        e += 2;
      }
    }
  } else {
    if (c = ea(b), w(w(c) ? c : "number" === typeof b)) {
      a: {
        for (c = a.length, d = 0;;) {
          if (c <= d) {
            c = -1;
            break a;
          }
          if (b === a[d]) {
            c = d;
            break a;
          }
          d += 2;
        }
      }
    } else {
      if (b instanceof Qc) {
        a: {
          for (c = a.length, d = b.cb, e = 0;;) {
            if (c <= e) {
              c = -1;
              break a;
            }
            f = a[e];
            if (f instanceof Qc && d === f.cb) {
              c = e;
              break a;
            }
            e += 2;
          }
        }
      } else {
        if (null == b) {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (null == a[d]) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        } else {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (Xc.a(b, a[d])) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        }
      }
    }
  }
  return c;
}
function og(a, b, c) {
  this.c = a;
  this.o = b;
  this.ra = c;
  this.g = 32374990;
  this.r = 0;
}
g = og.prototype;
g.toString = function() {
  return Ec(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.A = function() {
  return this.ra;
};
g.ja = function() {
  return this.o < this.c.length - 2 ? new og(this.c, this.o + 2, this.ra) : null;
};
g.I = function() {
  return(this.c.length - this.o) / 2;
};
g.F = function() {
  return bd(this);
};
g.q = function(a, b) {
  return rd(this, b);
};
g.Q = function() {
  return td(Wc, this.ra);
};
g.S = function(a, b) {
  return ud(b, this);
};
g.T = function(a, b, c) {
  return wd(b, c, this);
};
g.U = function() {
  return new U(null, 2, 5, V, [this.c[this.o], this.c[this.o + 1]], null);
};
g.ma = function() {
  return this.o < this.c.length - 2 ? new og(this.c, this.o + 2, this.ra) : Wc;
};
g.H = function() {
  return this;
};
g.C = function(a, b) {
  return new og(this.c, this.o, b);
};
g.G = function(a, b) {
  return J(b, this);
};
og.prototype[nb] = function() {
  return Zc(this);
};
function pg(a, b, c) {
  this.c = a;
  this.o = b;
  this.h = c;
}
pg.prototype.Ua = function() {
  return this.o < this.h;
};
pg.prototype.next = function() {
  var a = new U(null, 2, 5, V, [this.c[this.o], this.c[this.o + 1]], null);
  this.o += 2;
  return a;
};
function bb(a, b, c, d) {
  this.l = a;
  this.h = b;
  this.c = c;
  this.j = d;
  this.g = 16647951;
  this.r = 8196;
}
g = bb.prototype;
g.toString = function() {
  return Ec(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.keys = function() {
  return Zc(qg.b ? qg.b(this) : qg.call(null, this));
};
g.entries = function() {
  return kg(D(this));
};
g.values = function() {
  return Zc(rg.b ? rg.b(this) : rg.call(null, this));
};
g.has = function(a) {
  return Xd(this, a);
};
g.get = function(a, b) {
  return this.u(null, a, b);
};
g.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.O(null, e), h = N(f, 0), f = N(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = D(b)) {
        Rd(b) ? (c = sc(b), b = tc(b), h = c, d = M(c), c = h) : (c = G(b), h = N(c, 0), c = f = N(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.w = function(a, b) {
  return Hb.d(this, b, null);
};
g.u = function(a, b, c) {
  a = ng(this.c, b);
  return-1 === a ? c : this.c[a + 1];
};
g.lc = !0;
g.Sb = function() {
  return new pg(this.c, 0, 2 * this.h);
};
g.A = function() {
  return this.l;
};
g.I = function() {
  return this.h;
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = dd(this);
};
g.q = function(a, b) {
  if (b && (b.g & 1024 || b.qd)) {
    var c = this.c.length;
    if (this.h === b.I(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.u(null, this.c[d], Ud);
          if (e !== Ud) {
            if (Xc.a(this.c[d + 1], e)) {
              d += 2;
            } else {
              return!1;
            }
          } else {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return!1;
    }
  } else {
    return ig(this, b);
  }
};
g.Cb = function() {
  return new sg({}, this.c.length, ob(this.c));
};
g.Q = function() {
  return Zb(S, this.l);
};
g.S = function(a, b) {
  return ud(b, this);
};
g.T = function(a, b, c) {
  return wd(b, c, this);
};
g.ya = function(a, b) {
  if (0 <= ng(this.c, b)) {
    var c = this.c.length, d = c - 2;
    if (0 === d) {
      return yb(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new bb(this.l, this.h - 1, d, null);
      }
      Xc.a(b, this.c[e]) || (d[f] = this.c[e], d[f + 1] = this.c[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
g.pa = function(a, b, c) {
  a = ng(this.c, b);
  if (-1 === a) {
    if (this.h < tg) {
      a = this.c;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new bb(this.l, this.h + 1, e, null);
    }
    return Zb(Jb(Bf.a(ug, this), b, c), this.l);
  }
  if (c === this.c[a + 1]) {
    return this;
  }
  b = ob(this.c);
  b[a + 1] = c;
  return new bb(this.l, this.h, b, null);
};
g.kc = function(a, b) {
  return-1 !== ng(this.c, b);
};
g.H = function() {
  var a = this.c;
  return 0 <= a.length - 2 ? new og(a, 0, null) : null;
};
g.C = function(a, b) {
  return new bb(b, this.h, this.c, this.j);
};
g.G = function(a, b) {
  if (Qd(b)) {
    return Jb(this, B.a(b, 0), B.a(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = G(d);
    if (Qd(e)) {
      c = Jb(c, B.a(e, 0), B.a(e, 1)), d = H(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.w(null, c);
      case 3:
        return this.u(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.w(null, c);
  };
  a.d = function(a, c, d) {
    return this.u(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ob(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
var S = new bb(null, 0, [], ed), tg = 8;
function vg(a) {
  for (var b = [], c = 0;;) {
    if (c < a.length) {
      var d = a[c], e = a[c + 1];
      -1 === ng(b, d) && (b.push(d), b.push(e));
      c += 2;
    } else {
      break;
    }
  }
  return new bb(null, b.length / 2, b, null);
}
bb.prototype[nb] = function() {
  return Zc(this);
};
function sg(a, b, c) {
  this.Jb = a;
  this.Lb = b;
  this.c = c;
  this.g = 258;
  this.r = 56;
}
g = sg.prototype;
g.I = function() {
  if (w(this.Jb)) {
    return fe(this.Lb);
  }
  throw Error("count after persistent!");
};
g.w = function(a, b) {
  return Hb.d(this, b, null);
};
g.u = function(a, b, c) {
  if (w(this.Jb)) {
    return a = ng(this.c, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.ub = function(a, b) {
  if (w(this.Jb)) {
    if (b ? b.g & 2048 || b.rd || (b.g ? 0 : x(Mb, b)) : x(Mb, b)) {
      return pc(this, je.b ? je.b(b) : je.call(null, b), ke.b ? ke.b(b) : ke.call(null, b));
    }
    for (var c = D(b), d = this;;) {
      var e = G(c);
      if (w(e)) {
        var f = e, c = H(c), d = pc(d, function() {
          var a = f;
          return je.b ? je.b(a) : je.call(null, a);
        }(), function() {
          var a = f;
          return ke.b ? ke.b(a) : ke.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
g.vb = function() {
  if (w(this.Jb)) {
    return this.Jb = !1, new bb(null, fe(this.Lb), this.c, null);
  }
  throw Error("persistent! called twice");
};
g.Yb = function(a, b, c) {
  if (w(this.Jb)) {
    a = ng(this.c, b);
    if (-1 === a) {
      if (this.Lb + 2 <= 2 * tg) {
        return this.Lb += 2, this.c.push(b), this.c.push(c), this;
      }
      a = this.Lb;
      var d = this.c;
      a = wg.a ? wg.a(a, d) : wg.call(null, a, d);
      return pc(a, b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function wg(a, b) {
  for (var c = mc(ug), d = 0;;) {
    if (d < a) {
      c = pc(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function xg() {
  this.n = !1;
}
function zg(a, b) {
  return a === b ? !0 : Q(a, b) ? !0 : Xc.a(a, b);
}
function Ag(a, b, c) {
  a = ob(a);
  a[b] = c;
  return a;
}
function Bg(a, b) {
  var c = Array(a.length - 2);
  Td(a, 0, c, 0, 2 * b);
  Td(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
function Cg(a, b, c, d) {
  a = a.xb(b);
  a.c[c] = d;
  return a;
}
function Dg(a, b, c) {
  this.M = a;
  this.P = b;
  this.c = c;
}
g = Dg.prototype;
g.xb = function(a) {
  if (a === this.M) {
    return this;
  }
  var b = ge(this.P), c = Array(0 > b ? 4 : 2 * (b + 1));
  Td(this.c, 0, c, 0, 2 * b);
  return new Dg(a, this.P, c);
};
g.bc = function() {
  var a = this.c;
  return Eg ? Eg(a) : Fg.call(null, a);
};
g.mb = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.P & e)) {
    return d;
  }
  var f = ge(this.P & e - 1), e = this.c[2 * f], f = this.c[2 * f + 1];
  return null == e ? f.mb(a + 5, b, c, d) : zg(c, e) ? f : d;
};
g.Na = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = ge(this.P & h - 1);
  if (0 === (this.P & h)) {
    var l = ge(this.P);
    if (2 * l < this.c.length) {
      a = this.xb(a);
      b = a.c;
      f.n = !0;
      a: {
        for (c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          --l;
          --c;
          --f;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.P |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = Gg.Na(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.P >>> d & 1) && (k[d] = null != this.c[e] ? Gg.Na(a, b + 5, Nc(this.c[e]), this.c[e], this.c[e + 1], f) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Hg(a, l + 1, k);
    }
    b = Array(2 * (l + 4));
    Td(this.c, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    Td(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k));
    f.n = !0;
    a = this.xb(a);
    a.c = b;
    a.P |= h;
    return a;
  }
  l = this.c[2 * k];
  h = this.c[2 * k + 1];
  if (null == l) {
    return l = h.Na(a, b + 5, c, d, e, f), l === h ? this : Cg(this, a, 2 * k + 1, l);
  }
  if (zg(d, l)) {
    return e === h ? this : Cg(this, a, 2 * k + 1, e);
  }
  f.n = !0;
  f = b + 5;
  d = Ig ? Ig(a, f, l, h, c, d, e) : Jg.call(null, a, f, l, h, c, d, e);
  e = 2 * k;
  k = 2 * k + 1;
  a = this.xb(a);
  a.c[e] = null;
  a.c[k] = d;
  return a;
};
g.Ma = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = ge(this.P & f - 1);
  if (0 === (this.P & f)) {
    var k = ge(this.P);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = Gg.Ma(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.P >>> c & 1) && (h[c] = null != this.c[d] ? Gg.Ma(a + 5, Nc(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Hg(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    Td(this.c, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    Td(this.c, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.n = !0;
    return new Dg(null, this.P | f, a);
  }
  var l = this.c[2 * h], f = this.c[2 * h + 1];
  if (null == l) {
    return k = f.Ma(a + 5, b, c, d, e), k === f ? this : new Dg(null, this.P, Ag(this.c, 2 * h + 1, k));
  }
  if (zg(c, l)) {
    return d === f ? this : new Dg(null, this.P, Ag(this.c, 2 * h + 1, d));
  }
  e.n = !0;
  e = this.P;
  k = this.c;
  a += 5;
  a = Kg ? Kg(a, l, f, b, c, d) : Jg.call(null, a, l, f, b, c, d);
  c = 2 * h;
  h = 2 * h + 1;
  d = ob(k);
  d[c] = null;
  d[h] = a;
  return new Dg(null, e, d);
};
g.cc = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.P & d)) {
    return this;
  }
  var e = ge(this.P & d - 1), f = this.c[2 * e], h = this.c[2 * e + 1];
  return null == f ? (a = h.cc(a + 5, b, c), a === h ? this : null != a ? new Dg(null, this.P, Ag(this.c, 2 * e + 1, a)) : this.P === d ? null : new Dg(null, this.P ^ d, Bg(this.c, e))) : zg(c, f) ? new Dg(null, this.P ^ d, Bg(this.c, e)) : this;
};
var Gg = new Dg(null, 0, []);
function Hg(a, b, c) {
  this.M = a;
  this.h = b;
  this.c = c;
}
g = Hg.prototype;
g.xb = function(a) {
  return a === this.M ? this : new Hg(a, this.h, ob(this.c));
};
g.bc = function() {
  var a = this.c;
  return Lg ? Lg(a) : Mg.call(null, a);
};
g.mb = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.mb(a + 5, b, c, d) : d;
};
g.Na = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.c[h];
  if (null == k) {
    return a = Cg(this, a, h, Gg.Na(a, b + 5, c, d, e, f)), a.h += 1, a;
  }
  b = k.Na(a, b + 5, c, d, e, f);
  return b === k ? this : Cg(this, a, h, b);
};
g.Ma = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.c[f];
  if (null == h) {
    return new Hg(null, this.h + 1, Ag(this.c, f, Gg.Ma(a + 5, b, c, d, e)));
  }
  a = h.Ma(a + 5, b, c, d, e);
  return a === h ? this : new Hg(null, this.h, Ag(this.c, f, a));
};
g.cc = function(a, b, c) {
  var d = b >>> a & 31, e = this.c[d];
  if (null != e) {
    a = e.cc(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.h) {
          a: {
            e = this.c;
            a = e.length;
            b = Array(2 * (this.h - 1));
            c = 0;
            for (var f = 1, h = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, h |= 1 << c), c += 1;
              } else {
                d = new Dg(null, h, b);
                break a;
              }
            }
          }
        } else {
          d = new Hg(null, this.h - 1, Ag(this.c, d, a));
        }
      } else {
        d = new Hg(null, this.h, Ag(this.c, d, a));
      }
    }
    return d;
  }
  return this;
};
function Ng(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (zg(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Og(a, b, c, d) {
  this.M = a;
  this.hb = b;
  this.h = c;
  this.c = d;
}
g = Og.prototype;
g.xb = function(a) {
  if (a === this.M) {
    return this;
  }
  var b = Array(2 * (this.h + 1));
  Td(this.c, 0, b, 0, 2 * this.h);
  return new Og(a, this.hb, this.h, b);
};
g.bc = function() {
  var a = this.c;
  return Eg ? Eg(a) : Fg.call(null, a);
};
g.mb = function(a, b, c, d) {
  a = Ng(this.c, this.h, c);
  return 0 > a ? d : zg(c, this.c[a]) ? this.c[a + 1] : d;
};
g.Na = function(a, b, c, d, e, f) {
  if (c === this.hb) {
    b = Ng(this.c, this.h, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.h) {
        return b = 2 * this.h, c = 2 * this.h + 1, a = this.xb(a), a.c[b] = d, a.c[c] = e, f.n = !0, a.h += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      Td(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.n = !0;
      d = this.h + 1;
      a === this.M ? (this.c = b, this.h = d, a = this) : a = new Og(this.M, this.hb, d, b);
      return a;
    }
    return this.c[b + 1] === e ? this : Cg(this, a, b + 1, e);
  }
  return(new Dg(a, 1 << (this.hb >>> b & 31), [null, this, null, null])).Na(a, b, c, d, e, f);
};
g.Ma = function(a, b, c, d, e) {
  return b === this.hb ? (a = Ng(this.c, this.h, c), -1 === a ? (a = 2 * this.h, b = Array(a + 2), Td(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.n = !0, new Og(null, this.hb, this.h + 1, b)) : Xc.a(this.c[a], d) ? this : new Og(null, this.hb, this.h, Ag(this.c, a + 1, d))) : (new Dg(null, 1 << (this.hb >>> a & 31), [null, this])).Ma(a, b, c, d, e);
};
g.cc = function(a, b, c) {
  a = Ng(this.c, this.h, c);
  return-1 === a ? this : 1 === this.h ? null : new Og(null, this.hb, this.h - 1, Bg(this.c, fe(a)));
};
function Jg() {
  switch(arguments.length) {
    case 6:
      return Kg(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return Ig(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function Kg(a, b, c, d, e, f) {
  var h = Nc(b);
  if (h === d) {
    return new Og(null, h, 2, [b, c, e, f]);
  }
  var k = new xg;
  return Gg.Ma(a, h, b, c, k).Ma(a, d, e, f, k);
}
function Ig(a, b, c, d, e, f, h) {
  var k = Nc(c);
  if (k === e) {
    return new Og(null, k, 2, [c, d, f, h]);
  }
  var l = new xg;
  return Gg.Na(a, b, k, c, d, l).Na(a, b, e, f, h, l);
}
function Pg(a, b, c, d, e) {
  this.l = a;
  this.nb = b;
  this.o = c;
  this.D = d;
  this.j = e;
  this.g = 32374860;
  this.r = 0;
}
g = Pg.prototype;
g.toString = function() {
  return Ec(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.A = function() {
  return this.l;
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = bd(this);
};
g.q = function(a, b) {
  return rd(this, b);
};
g.Q = function() {
  return td(Wc, this.l);
};
g.S = function(a, b) {
  return ud(b, this);
};
g.T = function(a, b, c) {
  return wd(b, c, this);
};
g.U = function() {
  return null == this.D ? new U(null, 2, 5, V, [this.nb[this.o], this.nb[this.o + 1]], null) : G(this.D);
};
g.ma = function() {
  if (null == this.D) {
    var a = this.nb, b = this.o + 2;
    return Qg ? Qg(a, b, null) : Fg.call(null, a, b, null);
  }
  var a = this.nb, b = this.o, c = H(this.D);
  return Qg ? Qg(a, b, c) : Fg.call(null, a, b, c);
};
g.H = function() {
  return this;
};
g.C = function(a, b) {
  return new Pg(b, this.nb, this.o, this.D, this.j);
};
g.G = function(a, b) {
  return J(b, this);
};
Pg.prototype[nb] = function() {
  return Zc(this);
};
function Fg() {
  switch(arguments.length) {
    case 1:
      return Eg(arguments[0]);
    case 3:
      return Qg(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function Eg(a) {
  return Qg(a, 0, null);
}
function Qg(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new Pg(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (w(d) && (d = d.bc(), w(d))) {
          return new Pg(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new Pg(null, a, b, c, null);
  }
}
function Rg(a, b, c, d, e) {
  this.l = a;
  this.nb = b;
  this.o = c;
  this.D = d;
  this.j = e;
  this.g = 32374860;
  this.r = 0;
}
g = Rg.prototype;
g.toString = function() {
  return Ec(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.A = function() {
  return this.l;
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = bd(this);
};
g.q = function(a, b) {
  return rd(this, b);
};
g.Q = function() {
  return td(Wc, this.l);
};
g.S = function(a, b) {
  return ud(b, this);
};
g.T = function(a, b, c) {
  return wd(b, c, this);
};
g.U = function() {
  return G(this.D);
};
g.ma = function() {
  var a = this.nb, b = this.o, c = H(this.D);
  return Sg ? Sg(null, a, b, c) : Mg.call(null, null, a, b, c);
};
g.H = function() {
  return this;
};
g.C = function(a, b) {
  return new Rg(b, this.nb, this.o, this.D, this.j);
};
g.G = function(a, b) {
  return J(b, this);
};
Rg.prototype[nb] = function() {
  return Zc(this);
};
function Mg() {
  switch(arguments.length) {
    case 1:
      return Lg(arguments[0]);
    case 4:
      return Sg(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function Lg(a) {
  return Sg(null, a, 0, null);
}
function Sg(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (w(e) && (e = e.bc(), w(e))) {
          return new Rg(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new Rg(a, b, c, d, null);
  }
}
function Tg(a, b, c, d, e, f) {
  this.l = a;
  this.h = b;
  this.root = c;
  this.ta = d;
  this.Aa = e;
  this.j = f;
  this.g = 16123663;
  this.r = 8196;
}
g = Tg.prototype;
g.toString = function() {
  return Ec(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.keys = function() {
  return Zc(qg.b ? qg.b(this) : qg.call(null, this));
};
g.entries = function() {
  return kg(D(this));
};
g.values = function() {
  return Zc(rg.b ? rg.b(this) : rg.call(null, this));
};
g.has = function(a) {
  return Xd(this, a);
};
g.get = function(a, b) {
  return this.u(null, a, b);
};
g.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.O(null, e), h = N(f, 0), f = N(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = D(b)) {
        Rd(b) ? (c = sc(b), b = tc(b), h = c, d = M(c), c = h) : (c = G(b), h = N(c, 0), c = f = N(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.w = function(a, b) {
  return Hb.d(this, b, null);
};
g.u = function(a, b, c) {
  return null == b ? this.ta ? this.Aa : c : null == this.root ? c : this.root.mb(0, Nc(b), b, c);
};
g.A = function() {
  return this.l;
};
g.I = function() {
  return this.h;
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = dd(this);
};
g.q = function(a, b) {
  return ig(this, b);
};
g.Cb = function() {
  return new Ug({}, this.root, this.h, this.ta, this.Aa);
};
g.Q = function() {
  return Zb(ug, this.l);
};
g.ya = function(a, b) {
  if (null == b) {
    return this.ta ? new Tg(this.l, this.h - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.cc(0, Nc(b), b);
  return c === this.root ? this : new Tg(this.l, this.h - 1, c, this.ta, this.Aa, null);
};
g.pa = function(a, b, c) {
  if (null == b) {
    return this.ta && c === this.Aa ? this : new Tg(this.l, this.ta ? this.h : this.h + 1, this.root, !0, c, null);
  }
  a = new xg;
  b = (null == this.root ? Gg : this.root).Ma(0, Nc(b), b, c, a);
  return b === this.root ? this : new Tg(this.l, a.n ? this.h + 1 : this.h, b, this.ta, this.Aa, null);
};
g.kc = function(a, b) {
  return null == b ? this.ta : null == this.root ? !1 : this.root.mb(0, Nc(b), b, Ud) !== Ud;
};
g.H = function() {
  if (0 < this.h) {
    var a = null != this.root ? this.root.bc() : null;
    return this.ta ? J(new U(null, 2, 5, V, [null, this.Aa], null), a) : a;
  }
  return null;
};
g.C = function(a, b) {
  return new Tg(b, this.h, this.root, this.ta, this.Aa, this.j);
};
g.G = function(a, b) {
  if (Qd(b)) {
    return Jb(this, B.a(b, 0), B.a(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = G(d);
    if (Qd(e)) {
      c = Jb(c, B.a(e, 0), B.a(e, 1)), d = H(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.w(null, c);
      case 3:
        return this.u(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.w(null, c);
  };
  a.d = function(a, c, d) {
    return this.u(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ob(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
var ug = new Tg(null, 0, null, !1, null, ed);
function Ed(a, b) {
  for (var c = a.length, d = 0, e = mc(ug);;) {
    if (d < c) {
      var f = d + 1, e = e.Yb(null, a[d], b[d]), d = f
    } else {
      return oc(e);
    }
  }
}
Tg.prototype[nb] = function() {
  return Zc(this);
};
function Ug(a, b, c, d, e) {
  this.M = a;
  this.root = b;
  this.count = c;
  this.ta = d;
  this.Aa = e;
  this.g = 258;
  this.r = 56;
}
function Vg(a, b) {
  if (a.M) {
    if (b ? b.g & 2048 || b.rd || (b.g ? 0 : x(Mb, b)) : x(Mb, b)) {
      return Wg(a, je.b ? je.b(b) : je.call(null, b), ke.b ? ke.b(b) : ke.call(null, b));
    }
    for (var c = D(b), d = a;;) {
      var e = G(c);
      if (w(e)) {
        var f = e, c = H(c), d = Wg(d, function() {
          var a = f;
          return je.b ? je.b(a) : je.call(null, a);
        }(), function() {
          var a = f;
          return ke.b ? ke.b(a) : ke.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function Wg(a, b, c) {
  if (a.M) {
    if (null == b) {
      a.Aa !== c && (a.Aa = c), a.ta || (a.count += 1, a.ta = !0);
    } else {
      var d = new xg;
      b = (null == a.root ? Gg : a.root).Na(a.M, 0, Nc(b), b, c, d);
      b !== a.root && (a.root = b);
      d.n && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
g = Ug.prototype;
g.I = function() {
  if (this.M) {
    return this.count;
  }
  throw Error("count after persistent!");
};
g.w = function(a, b) {
  return null == b ? this.ta ? this.Aa : null : null == this.root ? null : this.root.mb(0, Nc(b), b);
};
g.u = function(a, b, c) {
  return null == b ? this.ta ? this.Aa : c : null == this.root ? c : this.root.mb(0, Nc(b), b, c);
};
g.ub = function(a, b) {
  return Vg(this, b);
};
g.vb = function() {
  var a;
  if (this.M) {
    this.M = null, a = new Tg(null, this.count, this.root, this.ta, this.Aa, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.Yb = function(a, b, c) {
  return Wg(this, b, c);
};
function Xg(a, b, c) {
  for (var d = b;;) {
    if (null != a) {
      b = c ? a.left : a.right, d = yd.a(d, a), a = b;
    } else {
      return d;
    }
  }
}
function Yg(a, b, c, d, e) {
  this.l = a;
  this.stack = b;
  this.gc = c;
  this.h = d;
  this.j = e;
  this.g = 32374862;
  this.r = 0;
}
g = Yg.prototype;
g.toString = function() {
  return Ec(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.A = function() {
  return this.l;
};
g.I = function() {
  return 0 > this.h ? M(H(this)) + 1 : this.h;
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = bd(this);
};
g.q = function(a, b) {
  return rd(this, b);
};
g.Q = function() {
  return td(Wc, this.l);
};
g.S = function(a, b) {
  return ud(b, this);
};
g.T = function(a, b, c) {
  return wd(b, c, this);
};
g.U = function() {
  return Kd(this.stack);
};
g.ma = function() {
  var a = G(this.stack), a = Xg(this.gc ? a.right : a.left, H(this.stack), this.gc);
  return null != a ? new Yg(null, a, this.gc, this.h - 1, null) : Wc;
};
g.H = function() {
  return this;
};
g.C = function(a, b) {
  return new Yg(b, this.stack, this.gc, this.h, this.j);
};
g.G = function(a, b) {
  return J(b, this);
};
Yg.prototype[nb] = function() {
  return Zc(this);
};
function Zg(a, b, c) {
  return new Yg(null, Xg(a, null, b), b, c, null);
}
function $g(a, b, c, d) {
  return c instanceof W ? c.left instanceof W ? new W(c.key, c.n, c.left.gb(), new ah(a, b, c.right, d, null), null) : c.right instanceof W ? new W(c.right.key, c.right.n, new ah(c.key, c.n, c.left, c.right.left, null), new ah(a, b, c.right.right, d, null), null) : new ah(a, b, c, d, null) : new ah(a, b, c, d, null);
}
function bh(a, b, c, d) {
  return d instanceof W ? d.right instanceof W ? new W(d.key, d.n, new ah(a, b, c, d.left, null), d.right.gb(), null) : d.left instanceof W ? new W(d.left.key, d.left.n, new ah(a, b, c, d.left.left, null), new ah(d.key, d.n, d.left.right, d.right, null), null) : new ah(a, b, c, d, null) : new ah(a, b, c, d, null);
}
function ch(a, b, c, d) {
  if (c instanceof W) {
    return new W(a, b, c.gb(), d, null);
  }
  if (d instanceof ah) {
    return bh(a, b, c, d.ec());
  }
  if (d instanceof W && d.left instanceof ah) {
    return new W(d.left.key, d.left.n, new ah(a, b, c, d.left.left, null), bh(d.key, d.n, d.left.right, d.right.ec()), null);
  }
  throw Error("red-black tree invariant violation");
}
function ah(a, b, c, d, e) {
  this.key = a;
  this.n = b;
  this.left = c;
  this.right = d;
  this.j = e;
  this.g = 32402207;
  this.r = 0;
}
g = ah.prototype;
g.Lc = function(a) {
  return a.Nc(this);
};
g.ec = function() {
  return new W(this.key, this.n, this.left, this.right, null);
};
g.gb = function() {
  return this;
};
g.Kc = function(a) {
  return a.Mc(this);
};
g.replace = function(a, b, c, d) {
  return new ah(a, b, c, d, null);
};
g.Mc = function(a) {
  return new ah(a.key, a.n, this, a.right, null);
};
g.Nc = function(a) {
  return new ah(a.key, a.n, a.left, this, null);
};
g.w = function(a, b) {
  return B.d(this, b, null);
};
g.u = function(a, b, c) {
  return B.d(this, b, c);
};
g.O = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.n : null;
};
g.sa = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.n : c;
};
g.wb = function(a, b, c) {
  return(new U(null, 2, 5, V, [this.key, this.n], null)).wb(null, b, c);
};
g.A = function() {
  return null;
};
g.I = function() {
  return 2;
};
g.Tb = function() {
  return this.key;
};
g.Ub = function() {
  return this.n;
};
g.sb = function() {
  return this.n;
};
g.tb = function() {
  return new U(null, 1, 5, V, [this.key], null);
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = bd(this);
};
g.q = function(a, b) {
  return rd(this, b);
};
g.Q = function() {
  return zd;
};
g.S = function(a, b) {
  return id(this, b);
};
g.T = function(a, b, c) {
  return jd(this, b, c);
};
g.pa = function(a, b, c) {
  return O.d(new U(null, 2, 5, V, [this.key, this.n], null), b, c);
};
g.H = function() {
  return Ab(Ab(Wc, this.n), this.key);
};
g.C = function(a, b) {
  return td(new U(null, 2, 5, V, [this.key, this.n], null), b);
};
g.G = function(a, b) {
  return new U(null, 3, 5, V, [this.key, this.n, b], null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.w(null, c);
      case 3:
        return this.u(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.w(null, c);
  };
  a.d = function(a, c, d) {
    return this.u(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ob(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
ah.prototype[nb] = function() {
  return Zc(this);
};
function W(a, b, c, d, e) {
  this.key = a;
  this.n = b;
  this.left = c;
  this.right = d;
  this.j = e;
  this.g = 32402207;
  this.r = 0;
}
g = W.prototype;
g.Lc = function(a) {
  return new W(this.key, this.n, this.left, a, null);
};
g.ec = function() {
  throw Error("red-black tree invariant violation");
};
g.gb = function() {
  return new ah(this.key, this.n, this.left, this.right, null);
};
g.Kc = function(a) {
  return new W(this.key, this.n, a, this.right, null);
};
g.replace = function(a, b, c, d) {
  return new W(a, b, c, d, null);
};
g.Mc = function(a) {
  return this.left instanceof W ? new W(this.key, this.n, this.left.gb(), new ah(a.key, a.n, this.right, a.right, null), null) : this.right instanceof W ? new W(this.right.key, this.right.n, new ah(this.key, this.n, this.left, this.right.left, null), new ah(a.key, a.n, this.right.right, a.right, null), null) : new ah(a.key, a.n, this, a.right, null);
};
g.Nc = function(a) {
  return this.right instanceof W ? new W(this.key, this.n, new ah(a.key, a.n, a.left, this.left, null), this.right.gb(), null) : this.left instanceof W ? new W(this.left.key, this.left.n, new ah(a.key, a.n, a.left, this.left.left, null), new ah(this.key, this.n, this.left.right, this.right, null), null) : new ah(a.key, a.n, a.left, this, null);
};
g.w = function(a, b) {
  return B.d(this, b, null);
};
g.u = function(a, b, c) {
  return B.d(this, b, c);
};
g.O = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.n : null;
};
g.sa = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.n : c;
};
g.wb = function(a, b, c) {
  return(new U(null, 2, 5, V, [this.key, this.n], null)).wb(null, b, c);
};
g.A = function() {
  return null;
};
g.I = function() {
  return 2;
};
g.Tb = function() {
  return this.key;
};
g.Ub = function() {
  return this.n;
};
g.sb = function() {
  return this.n;
};
g.tb = function() {
  return new U(null, 1, 5, V, [this.key], null);
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = bd(this);
};
g.q = function(a, b) {
  return rd(this, b);
};
g.Q = function() {
  return zd;
};
g.S = function(a, b) {
  return id(this, b);
};
g.T = function(a, b, c) {
  return jd(this, b, c);
};
g.pa = function(a, b, c) {
  return O.d(new U(null, 2, 5, V, [this.key, this.n], null), b, c);
};
g.H = function() {
  return Ab(Ab(Wc, this.n), this.key);
};
g.C = function(a, b) {
  return td(new U(null, 2, 5, V, [this.key, this.n], null), b);
};
g.G = function(a, b) {
  return new U(null, 3, 5, V, [this.key, this.n, b], null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.w(null, c);
      case 3:
        return this.u(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.w(null, c);
  };
  a.d = function(a, c, d) {
    return this.u(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ob(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
W.prototype[nb] = function() {
  return Zc(this);
};
var dh = function dh(b, c, d, e, f) {
  if (null == c) {
    return new W(d, e, null, null, null);
  }
  var h;
  h = c.key;
  h = b.a ? b.a(d, h) : b.call(null, d, h);
  if (0 === h) {
    return f[0] = c, null;
  }
  if (0 > h) {
    return b = dh(b, c.left, d, e, f), null != b ? c.Kc(b) : null;
  }
  b = dh(b, c.right, d, e, f);
  return null != b ? c.Lc(b) : null;
}, eh = function eh(b, c) {
  if (null == b) {
    return c;
  }
  if (null == c) {
    return b;
  }
  if (b instanceof W) {
    if (c instanceof W) {
      var d = eh(b.right, c.left);
      return d instanceof W ? new W(d.key, d.n, new W(b.key, b.n, b.left, d.left, null), new W(c.key, c.n, d.right, c.right, null), null) : new W(b.key, b.n, b.left, new W(c.key, c.n, d, c.right, null), null);
    }
    return new W(b.key, b.n, b.left, eh(b.right, c), null);
  }
  if (c instanceof W) {
    return new W(c.key, c.n, eh(b, c.left), c.right, null);
  }
  d = eh(b.right, c.left);
  return d instanceof W ? new W(d.key, d.n, new ah(b.key, b.n, b.left, d.left, null), new ah(c.key, c.n, d.right, c.right, null), null) : ch(b.key, b.n, b.left, new ah(c.key, c.n, d, c.right, null));
}, fh = function fh(b, c, d, e) {
  if (null != c) {
    var f;
    f = c.key;
    f = b.a ? b.a(d, f) : b.call(null, d, f);
    if (0 === f) {
      return e[0] = c, eh(c.left, c.right);
    }
    if (0 > f) {
      return b = fh(b, c.left, d, e), null != b || null != e[0] ? c.left instanceof ah ? ch(c.key, c.n, b, c.right) : new W(c.key, c.n, b, c.right, null) : null;
    }
    b = fh(b, c.right, d, e);
    if (null != b || null != e[0]) {
      if (c.right instanceof ah) {
        if (e = c.key, d = c.n, c = c.left, b instanceof W) {
          c = new W(e, d, c, b.gb(), null);
        } else {
          if (c instanceof ah) {
            c = $g(e, d, c.ec(), b);
          } else {
            if (c instanceof W && c.right instanceof ah) {
              c = new W(c.right.key, c.right.n, $g(c.key, c.n, c.left.ec(), c.right.left), new ah(e, d, c.right.right, b, null), null);
            } else {
              throw Error("red-black tree invariant violation");
            }
          }
        }
      } else {
        c = new W(c.key, c.n, c.left, b, null);
      }
    } else {
      c = null;
    }
    return c;
  }
  return null;
}, gh = function gh(b, c, d, e) {
  var f = c.key, h = b.a ? b.a(d, f) : b.call(null, d, f);
  return 0 === h ? c.replace(f, e, c.left, c.right) : 0 > h ? c.replace(f, c.n, gh(b, c.left, d, e), c.right) : c.replace(f, c.n, c.left, gh(b, c.right, d, e));
};
function hh(a, b, c, d, e) {
  this.Fa = a;
  this.ua = b;
  this.h = c;
  this.l = d;
  this.j = e;
  this.g = 418776847;
  this.r = 8192;
}
g = hh.prototype;
g.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.O(null, e), h = N(f, 0), f = N(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = D(b)) {
        Rd(b) ? (c = sc(b), b = tc(b), h = c, d = M(c), c = h) : (c = G(b), h = N(c, 0), c = f = N(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.get = function(a, b) {
  return this.u(null, a, b);
};
g.entries = function() {
  return kg(D(this));
};
g.toString = function() {
  return Ec(this);
};
g.keys = function() {
  return Zc(qg.b ? qg.b(this) : qg.call(null, this));
};
g.values = function() {
  return Zc(rg.b ? rg.b(this) : rg.call(null, this));
};
g.equiv = function(a) {
  return this.q(null, a);
};
function ih(a, b) {
  for (var c = a.ua;;) {
    if (null != c) {
      var d;
      d = c.key;
      d = a.Fa.a ? a.Fa.a(b, d) : a.Fa.call(null, b, d);
      if (0 === d) {
        return c;
      }
      c = 0 > d ? c.left : c.right;
    } else {
      return null;
    }
  }
}
g.has = function(a) {
  return Xd(this, a);
};
g.w = function(a, b) {
  return Hb.d(this, b, null);
};
g.u = function(a, b, c) {
  a = ih(this, b);
  return null != a ? a.n : c;
};
g.A = function() {
  return this.l;
};
g.I = function() {
  return this.h;
};
g.Db = function() {
  return 0 < this.h ? Zg(this.ua, !1, this.h) : null;
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = dd(this);
};
g.q = function(a, b) {
  return ig(this, b);
};
g.Q = function() {
  return new hh(this.Fa, null, 0, this.l, 0);
};
g.ya = function(a, b) {
  var c = [null], d = fh(this.Fa, this.ua, b, c);
  return null == d ? null == Bd(c, 0) ? this : new hh(this.Fa, null, 0, this.l, null) : new hh(this.Fa, d.gb(), this.h - 1, this.l, null);
};
g.pa = function(a, b, c) {
  a = [null];
  var d = dh(this.Fa, this.ua, b, c, a);
  return null == d ? (a = Bd(a, 0), Xc.a(c, a.n) ? this : new hh(this.Fa, gh(this.Fa, this.ua, b, c), this.h, this.l, null)) : new hh(this.Fa, d.gb(), this.h + 1, this.l, null);
};
g.kc = function(a, b) {
  return null != ih(this, b);
};
g.H = function() {
  return 0 < this.h ? Zg(this.ua, !0, this.h) : null;
};
g.C = function(a, b) {
  return new hh(this.Fa, this.ua, this.h, b, this.j);
};
g.G = function(a, b) {
  if (Qd(b)) {
    return Jb(this, B.a(b, 0), B.a(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = G(d);
    if (Qd(e)) {
      c = Jb(c, B.a(e, 0), B.a(e, 1)), d = H(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.w(null, c);
      case 3:
        return this.u(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.w(null, c);
  };
  a.d = function(a, c, d) {
    return this.u(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ob(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
var jh = new hh(Yd, null, 0, null, ed);
hh.prototype[nb] = function() {
  return Zc(this);
};
var lf = function lf() {
  return lf.i(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
};
lf.i = function(a) {
  for (var b = D(a), c = mc(ug);;) {
    if (b) {
      a = H(H(b));
      var d = G(b), b = G(H(b)), c = pc(c, d, b), b = a;
    } else {
      return oc(c);
    }
  }
};
lf.v = 0;
lf.t = function(a) {
  return lf.i(D(a));
};
function kh(a, b) {
  this.qa = a;
  this.ra = b;
  this.g = 32374988;
  this.r = 0;
}
g = kh.prototype;
g.toString = function() {
  return Ec(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.A = function() {
  return this.ra;
};
g.ja = function() {
  var a = this.qa, a = (a ? a.g & 128 || a.mc || (a.g ? 0 : x(Fb, a)) : x(Fb, a)) ? this.qa.ja(null) : H(this.qa);
  return null == a ? null : new kh(a, this.ra);
};
g.F = function() {
  return bd(this);
};
g.q = function(a, b) {
  return rd(this, b);
};
g.Q = function() {
  return td(Wc, this.ra);
};
g.S = function(a, b) {
  return ud(b, this);
};
g.T = function(a, b, c) {
  return wd(b, c, this);
};
g.U = function() {
  return this.qa.U(null).Tb(null);
};
g.ma = function() {
  var a = this.qa, a = (a ? a.g & 128 || a.mc || (a.g ? 0 : x(Fb, a)) : x(Fb, a)) ? this.qa.ja(null) : H(this.qa);
  return null != a ? new kh(a, this.ra) : Wc;
};
g.H = function() {
  return this;
};
g.C = function(a, b) {
  return new kh(this.qa, b);
};
g.G = function(a, b) {
  return J(b, this);
};
kh.prototype[nb] = function() {
  return Zc(this);
};
function qg(a) {
  return(a = D(a)) ? new kh(a, null) : null;
}
function je(a) {
  return Nb(a);
}
function lh(a, b) {
  this.qa = a;
  this.ra = b;
  this.g = 32374988;
  this.r = 0;
}
g = lh.prototype;
g.toString = function() {
  return Ec(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.A = function() {
  return this.ra;
};
g.ja = function() {
  var a = this.qa, a = (a ? a.g & 128 || a.mc || (a.g ? 0 : x(Fb, a)) : x(Fb, a)) ? this.qa.ja(null) : H(this.qa);
  return null == a ? null : new lh(a, this.ra);
};
g.F = function() {
  return bd(this);
};
g.q = function(a, b) {
  return rd(this, b);
};
g.Q = function() {
  return td(Wc, this.ra);
};
g.S = function(a, b) {
  return ud(b, this);
};
g.T = function(a, b, c) {
  return wd(b, c, this);
};
g.U = function() {
  return this.qa.U(null).Ub(null);
};
g.ma = function() {
  var a = this.qa, a = (a ? a.g & 128 || a.mc || (a.g ? 0 : x(Fb, a)) : x(Fb, a)) ? this.qa.ja(null) : H(this.qa);
  return null != a ? new lh(a, this.ra) : Wc;
};
g.H = function() {
  return this;
};
g.C = function(a, b) {
  return new lh(this.qa, b);
};
g.G = function(a, b) {
  return J(b, this);
};
lh.prototype[nb] = function() {
  return Zc(this);
};
function rg(a) {
  return(a = D(a)) ? new lh(a, null) : null;
}
function ke(a) {
  return Ob(a);
}
var mh = function mh() {
  return mh.i(arguments[0], 1 < arguments.length ? new E(Array.prototype.slice.call(arguments, 1), 0) : null);
};
mh.i = function(a, b) {
  return w(Ze(ae, b)) ? $d(function(a) {
    return function(b, e) {
      return sb(a, w(b) ? b : S, D(e));
    };
  }(function(b, d) {
    var e = G(d), f = G(H(d));
    return Xd(b, e) ? O.d(b, e, function() {
      var d = Cd(b, e);
      return a.a ? a.a(d, f) : a.call(null, d, f);
    }()) : O.d(b, e, f);
  }), b) : null;
};
mh.v = 1;
mh.t = function(a) {
  var b = G(a);
  a = H(a);
  return mh.i(b, a);
};
function nh(a, b, c) {
  this.l = a;
  this.yb = b;
  this.j = c;
  this.g = 15077647;
  this.r = 8196;
}
g = nh.prototype;
g.toString = function() {
  return Ec(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.keys = function() {
  return Zc(D(this));
};
g.entries = function() {
  return mg(D(this));
};
g.values = function() {
  return Zc(D(this));
};
g.has = function(a) {
  return Xd(this, a);
};
g.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.O(null, e), h = N(f, 0), f = N(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = D(b)) {
        Rd(b) ? (c = sc(b), b = tc(b), h = c, d = M(c), c = h) : (c = G(b), h = N(c, 0), c = f = N(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.w = function(a, b) {
  return Hb.d(this, b, null);
};
g.u = function(a, b, c) {
  return Ib(this.yb, b) ? b : c;
};
g.A = function() {
  return this.l;
};
g.I = function() {
  return xb(this.yb);
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = dd(this);
};
g.q = function(a, b) {
  return Nd(b) && M(this) === M(b) && Ye(function(a) {
    return function(b) {
      return Xd(a, b);
    };
  }(this), b);
};
g.Cb = function() {
  return new oh(mc(this.yb));
};
g.Q = function() {
  return td(ph, this.l);
};
g.zc = function(a, b) {
  return new nh(this.l, Lb(this.yb, b), null);
};
g.H = function() {
  return qg(this.yb);
};
g.C = function(a, b) {
  return new nh(b, this.yb, this.j);
};
g.G = function(a, b) {
  return new nh(this.l, O.d(this.yb, b, null), null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.w(null, c);
      case 3:
        return this.u(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.w(null, c);
  };
  a.d = function(a, c, d) {
    return this.u(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ob(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
var ph = new nh(null, S, ed);
function qh(a) {
  var b = a.length;
  if (b <= tg) {
    for (var c = 0, d = mc(S);;) {
      if (c < b) {
        var e = c + 1, d = pc(d, a[c], null), c = e
      } else {
        return new nh(null, oc(d), null);
      }
    }
  } else {
    for (c = 0, d = mc(ph);;) {
      if (c < b) {
        e = c + 1, d = nc(d, a[c]), c = e;
      } else {
        return oc(d);
      }
    }
  }
}
nh.prototype[nb] = function() {
  return Zc(this);
};
function oh(a) {
  this.kb = a;
  this.r = 136;
  this.g = 259;
}
g = oh.prototype;
g.ub = function(a, b) {
  this.kb = pc(this.kb, b, null);
  return this;
};
g.vb = function() {
  return new nh(null, oc(this.kb), null);
};
g.I = function() {
  return M(this.kb);
};
g.w = function(a, b) {
  return Hb.d(this, b, null);
};
g.u = function(a, b, c) {
  return Hb.d(this.kb, b, Ud) === Ud ? c : b;
};
g.call = function() {
  function a(a, b, c) {
    return Hb.d(this.kb, b, Ud) === Ud ? c : b;
  }
  function b(a, b) {
    return Hb.d(this.kb, b, Ud) === Ud ? null : b;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ob(b)));
};
g.b = function(a) {
  return Hb.d(this.kb, a, Ud) === Ud ? null : a;
};
g.a = function(a, b) {
  return Hb.d(this.kb, a, Ud) === Ud ? b : a;
};
function rh(a, b, c) {
  this.l = a;
  this.lb = b;
  this.j = c;
  this.g = 417730831;
  this.r = 8192;
}
g = rh.prototype;
g.toString = function() {
  return Ec(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.keys = function() {
  return Zc(D(this));
};
g.entries = function() {
  return mg(D(this));
};
g.values = function() {
  return Zc(D(this));
};
g.has = function(a) {
  return Xd(this, a);
};
g.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.O(null, e), h = N(f, 0), f = N(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = D(b)) {
        Rd(b) ? (c = sc(b), b = tc(b), h = c, d = M(c), c = h) : (c = G(b), h = N(c, 0), c = f = N(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.w = function(a, b) {
  return Hb.d(this, b, null);
};
g.u = function(a, b, c) {
  a = ih(this.lb, b);
  return null != a ? a.key : c;
};
g.A = function() {
  return this.l;
};
g.I = function() {
  return M(this.lb);
};
g.Db = function() {
  return 0 < M(this.lb) ? T.a(je, hc(this.lb)) : null;
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = dd(this);
};
g.q = function(a, b) {
  return Nd(b) && M(this) === M(b) && Ye(function(a) {
    return function(b) {
      return Xd(a, b);
    };
  }(this), b);
};
g.Q = function() {
  return new rh(this.l, yb(this.lb), 0);
};
g.zc = function(a, b) {
  return new rh(this.l, Fd.a(this.lb, b), null);
};
g.H = function() {
  return qg(this.lb);
};
g.C = function(a, b) {
  return new rh(b, this.lb, this.j);
};
g.G = function(a, b) {
  return new rh(this.l, O.d(this.lb, b, null), null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.w(null, c);
      case 3:
        return this.u(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.w(null, c);
  };
  a.d = function(a, c, d) {
    return this.u(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ob(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
var sh = new rh(null, jh, ed);
rh.prototype[nb] = function() {
  return Zc(this);
};
function th(a) {
  a = D(a);
  if (null == a) {
    return ph;
  }
  if (a instanceof E && 0 === a.o) {
    a = a.c;
    a: {
      for (var b = 0, c = mc(ph);;) {
        if (b < a.length) {
          var d = b + 1, c = c.ub(null, a[b]), b = d
        } else {
          break a;
        }
      }
    }
    return c.vb(null);
  }
  for (d = mc(ph);;) {
    if (null != a) {
      b = a.ja(null), d = d.ub(null, a.U(null)), a = b;
    } else {
      return d.vb(null);
    }
  }
}
function uh() {
  return sb(Ab, sh, 0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
}
function se(a) {
  if (a && (a.r & 4096 || a.td)) {
    return a.Vb(null);
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([A("Doesn't support name: "), A(a)].join(""));
}
function vh(a, b) {
  for (var c = mc(S), d = D(a), e = D(b);;) {
    if (d && e) {
      var f = G(d), h = G(e), c = pc(c, f, h), d = H(d), e = H(e)
    } else {
      return oc(c);
    }
  }
}
var wh = function wh() {
  switch(arguments.length) {
    case 2:
      return wh.a(arguments[0], arguments[1]);
    case 3:
      return wh.d(arguments[0], arguments[1], arguments[2]);
    default:
      return wh.i(arguments[0], arguments[1], arguments[2], new E(Array.prototype.slice.call(arguments, 3), 0));
  }
};
wh.a = function(a, b) {
  return b;
};
wh.d = function(a, b, c) {
  return(a.b ? a.b(b) : a.call(null, b)) > (a.b ? a.b(c) : a.call(null, c)) ? b : c;
};
wh.i = function(a, b, c, d) {
  return sb(function(b, c) {
    return wh.d(a, b, c);
  }, wh.d(a, b, c), d);
};
wh.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), d = H(d);
  return wh.i(b, a, c, d);
};
wh.v = 3;
function xh(a, b) {
  return new te(null, function() {
    var c = D(b);
    if (c) {
      var d;
      d = G(c);
      d = a.b ? a.b(d) : a.call(null, d);
      c = w(d) ? J(G(c), xh(a, Vc(c))) : null;
    } else {
      c = null;
    }
    return c;
  }, null, null);
}
function yh(a, b, c) {
  this.o = a;
  this.end = b;
  this.step = c;
}
yh.prototype.Ua = function() {
  return 0 < this.step ? this.o < this.end : this.o > this.end;
};
yh.prototype.next = function() {
  var a = this.o;
  this.o += this.step;
  return a;
};
function zh(a, b, c, d, e) {
  this.l = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.j = e;
  this.g = 32375006;
  this.r = 8192;
}
g = zh.prototype;
g.toString = function() {
  return Ec(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.O = function(a, b) {
  if (b < xb(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
g.sa = function(a, b, c) {
  return b < xb(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
g.lc = !0;
g.Sb = function() {
  return new yh(this.start, this.end, this.step);
};
g.A = function() {
  return this.l;
};
g.ja = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new zh(this.l, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new zh(this.l, this.start + this.step, this.end, this.step, null) : null;
};
g.I = function() {
  if (kb(ec(this))) {
    return 0;
  }
  var a = (this.end - this.start) / this.step;
  return Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = bd(this);
};
g.q = function(a, b) {
  return rd(this, b);
};
g.Q = function() {
  return td(Wc, this.l);
};
g.S = function(a, b) {
  return id(this, b);
};
g.T = function(a, b, c) {
  for (a = this.start;;) {
    if (0 < this.step ? a < this.end : a > this.end) {
      var d = a;
      c = b.a ? b.a(c, d) : b.call(null, c, d);
      if (hd(c)) {
        return b = c, I.b ? I.b(b) : I.call(null, b);
      }
      a += this.step;
    } else {
      return c;
    }
  }
};
g.U = function() {
  return null == ec(this) ? null : this.start;
};
g.ma = function() {
  return null != ec(this) ? new zh(this.l, this.start + this.step, this.end, this.step, null) : Wc;
};
g.H = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
g.C = function(a, b) {
  return new zh(b, this.start, this.end, this.step, this.j);
};
g.G = function(a, b) {
  return J(b, this);
};
zh.prototype[nb] = function() {
  return Zc(this);
};
function Ah(a, b, c, d, e, f, h) {
  var k = Za;
  Za = null == Za ? null : Za - 1;
  try {
    if (null != Za && 0 > Za) {
      return ic(a, "#");
    }
    ic(a, c);
    if (0 === hb.b(f)) {
      D(h) && ic(a, function() {
        var a = Bh.b(f);
        return w(a) ? a : "...";
      }());
    } else {
      if (D(h)) {
        var l = G(h);
        b.d ? b.d(l, a, f) : b.call(null, l, a, f);
      }
      for (var m = H(h), p = hb.b(f) - 1;;) {
        if (!m || null != p && 0 === p) {
          D(m) && 0 === p && (ic(a, d), ic(a, function() {
            var a = Bh.b(f);
            return w(a) ? a : "...";
          }()));
          break;
        } else {
          ic(a, d);
          var q = G(m);
          c = a;
          h = f;
          b.d ? b.d(q, c, h) : b.call(null, q, c, h);
          var r = H(m);
          c = p - 1;
          m = r;
          p = c;
        }
      }
    }
    return ic(a, e);
  } finally {
    Za = k;
  }
}
function Ch(a, b) {
  for (var c = D(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.O(null, f);
      ic(a, h);
      f += 1;
    } else {
      if (c = D(c)) {
        d = c, Rd(d) ? (c = sc(d), e = tc(d), d = c, h = M(c), c = e, e = h) : (h = G(d), ic(a, h), c = H(d), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
var Dh = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Eh(a) {
  return[A('"'), A(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Dh[a];
  })), A('"')].join("");
}
function Fh(a, b, c) {
  if (null == a) {
    return ic(b, "nil");
  }
  if (void 0 === a) {
    return ic(b, "#\x3cundefined\x3e");
  }
  if (w(function() {
    var b = Cd(c, eb);
    return w(b) ? (b = a ? a.g & 131072 || a.sd ? !0 : a.g ? !1 : x(Wb, a) : x(Wb, a)) ? Jd(a) : b : b;
  }())) {
    ic(b, "^");
    var d = Jd(a);
    X.d ? X.d(d, b, c) : X.call(null, d, b, c);
    ic(b, " ");
  }
  return null == a ? ic(b, "nil") : a.Ib ? a.$b(a, b, c) : a && (a.g & 2147483648 || a.N) ? a.B(null, b, c) : lb(a) === Boolean || "number" === typeof a ? ic(b, "" + A(a)) : null != a && a.constructor === Object ? (ic(b, "#js "), d = T.a(function(b) {
    return new U(null, 2, 5, V, [re.b(b), a[b]], null);
  }, Sd(a)), Gh.s ? Gh.s(d, X, b, c) : Gh.call(null, d, X, b, c)) : jb(a) ? Ah(b, X, "#js [", " ", "]", c, a) : w(ea(a)) ? w(db.b(c)) ? ic(b, Eh(a)) : ic(b, a) : Gd(a) ? Ch(b, L(["#\x3c", "" + A(a), "\x3e"], 0)) : a instanceof Date ? (d = function(a, b) {
    for (var c = "" + A(a);;) {
      if (M(c) < b) {
        c = [A("0"), A(c)].join("");
      } else {
        return c;
      }
    }
  }, Ch(b, L(['#inst "', "" + A(a.getUTCFullYear()), "-", d(a.getUTCMonth() + 1, 2), "-", d(a.getUTCDate(), 2), "T", d(a.getUTCHours(), 2), ":", d(a.getUTCMinutes(), 2), ":", d(a.getUTCSeconds(), 2), ".", d(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : w(a instanceof RegExp) ? Ch(b, L(['#"', a.source, '"'], 0)) : (a ? a.g & 2147483648 || a.N || (a.g ? 0 : x(jc, a)) : x(jc, a)) ? kc(a, b, c) : Ch(b, L(["#\x3c", "" + A(a), "\x3e"], 0));
}
function X(a, b, c) {
  var d = Hh.b(c);
  return w(d) ? (c = O.d(c, Ih, Fh), d.d ? d.d(a, b, c) : d.call(null, a, b, c)) : Fh(a, b, c);
}
function Jh(a, b) {
  var c;
  if (Md(a)) {
    c = "";
  } else {
    c = A;
    var d = new La;
    a: {
      var e = new Dc(d);
      X(G(a), e, b);
      for (var f = D(H(a)), h = null, k = 0, l = 0;;) {
        if (l < k) {
          var m = h.O(null, l);
          ic(e, " ");
          X(m, e, b);
          l += 1;
        } else {
          if (f = D(f)) {
            h = f, Rd(h) ? (f = sc(h), k = tc(h), h = f, m = M(f), f = k, k = m) : (m = G(h), ic(e, " "), X(m, e, b), f = H(h), h = null, k = 0), l = 0;
          } else {
            break a;
          }
        }
      }
    }
    c = "" + c(d);
  }
  return c;
}
function of() {
  return Kh(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
}
function Kh(a) {
  return Jh(a, ab());
}
var Lh = function Lh() {
  return Lh.i(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Lh.i = function(a) {
  var b = O.d(ab(), db, !1);
  a = Jh(a, b);
  Va.b ? Va.b(a) : Va.call(null, a);
  w(Wa) ? (a = ab(), Va.b ? Va.b("\n") : Va.call(null, "\n"), a = (Cd(a, cb), null)) : a = null;
  return a;
};
Lh.v = 0;
Lh.t = function(a) {
  return Lh.i(D(a));
};
function Gh(a, b, c, d) {
  return Ah(c, function(a, c, d) {
    var k = Nb(a);
    b.d ? b.d(k, c, d) : b.call(null, k, c, d);
    ic(c, " ");
    a = Ob(a);
    return b.d ? b.d(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, D(a));
}
pf.prototype.N = !0;
pf.prototype.B = function(a, b, c) {
  ic(b, "#\x3cVolatile: ");
  X(this.state, b, c);
  return ic(b, "\x3e");
};
E.prototype.N = !0;
E.prototype.B = function(a, b, c) {
  return Ah(b, X, "(", " ", ")", c, this);
};
te.prototype.N = !0;
te.prototype.B = function(a, b, c) {
  return Ah(b, X, "(", " ", ")", c, this);
};
Yg.prototype.N = !0;
Yg.prototype.B = function(a, b, c) {
  return Ah(b, X, "(", " ", ")", c, this);
};
Pg.prototype.N = !0;
Pg.prototype.B = function(a, b, c) {
  return Ah(b, X, "(", " ", ")", c, this);
};
ah.prototype.N = !0;
ah.prototype.B = function(a, b, c) {
  return Ah(b, X, "[", " ", "]", c, this);
};
og.prototype.N = !0;
og.prototype.B = function(a, b, c) {
  return Ah(b, X, "(", " ", ")", c, this);
};
rh.prototype.N = !0;
rh.prototype.B = function(a, b, c) {
  return Ah(b, X, "#{", " ", "}", c, this);
};
Zf.prototype.N = !0;
Zf.prototype.B = function(a, b, c) {
  return Ah(b, X, "(", " ", ")", c, this);
};
pe.prototype.N = !0;
pe.prototype.B = function(a, b, c) {
  return Ah(b, X, "(", " ", ")", c, this);
};
qd.prototype.N = !0;
qd.prototype.B = function(a, b, c) {
  return Ah(b, X, "(", " ", ")", c, this);
};
Tg.prototype.N = !0;
Tg.prototype.B = function(a, b, c) {
  return Gh(this, X, b, c);
};
Rg.prototype.N = !0;
Rg.prototype.B = function(a, b, c) {
  return Ah(b, X, "(", " ", ")", c, this);
};
cg.prototype.N = !0;
cg.prototype.B = function(a, b, c) {
  return Ah(b, X, "[", " ", "]", c, this);
};
hh.prototype.N = !0;
hh.prototype.B = function(a, b, c) {
  return Gh(this, X, b, c);
};
nh.prototype.N = !0;
nh.prototype.B = function(a, b, c) {
  return Ah(b, X, "#{", " ", "}", c, this);
};
xe.prototype.N = !0;
xe.prototype.B = function(a, b, c) {
  return Ah(b, X, "(", " ", ")", c, this);
};
hf.prototype.N = !0;
hf.prototype.B = function(a, b, c) {
  ic(b, "#\x3cAtom: ");
  X(this.state, b, c);
  return ic(b, "\x3e");
};
lh.prototype.N = !0;
lh.prototype.B = function(a, b, c) {
  return Ah(b, X, "(", " ", ")", c, this);
};
W.prototype.N = !0;
W.prototype.B = function(a, b, c) {
  return Ah(b, X, "[", " ", "]", c, this);
};
U.prototype.N = !0;
U.prototype.B = function(a, b, c) {
  return Ah(b, X, "[", " ", "]", c, this);
};
me.prototype.N = !0;
me.prototype.B = function(a, b) {
  return ic(b, "()");
};
Xe.prototype.N = !0;
Xe.prototype.B = function(a, b, c) {
  return Ah(b, X, "(", " ", ")", c, this);
};
bb.prototype.N = !0;
bb.prototype.B = function(a, b, c) {
  return Gh(this, X, b, c);
};
zh.prototype.N = !0;
zh.prototype.B = function(a, b, c) {
  return Ah(b, X, "(", " ", ")", c, this);
};
kh.prototype.N = !0;
kh.prototype.B = function(a, b, c) {
  return Ah(b, X, "(", " ", ")", c, this);
};
le.prototype.N = !0;
le.prototype.B = function(a, b, c) {
  return Ah(b, X, "(", " ", ")", c, this);
};
Qc.prototype.Pb = !0;
Qc.prototype.Qb = function(a, b) {
  return Pc(this, b);
};
P.prototype.Pb = !0;
P.prototype.Qb = function(a, b) {
  return qe(this, b);
};
cg.prototype.Pb = !0;
cg.prototype.Qb = function(a, b) {
  return Zd(this, b);
};
U.prototype.Pb = !0;
U.prototype.Qb = function(a, b) {
  return Zd(this, b);
};
var Mh = null;
function Nh() {
  null == Mh && (Mh = kf ? kf(0) : jf.call(null, 0));
  var a = [A("G__"), A(ff.a(Mh, fd))].join("");
  return a instanceof Qc ? a : Uc(null, a);
}
function Oh(a, b) {
  this.na = a;
  this.value = b;
  this.g = 32768;
  this.r = 1;
}
Oh.prototype.Bb = function() {
  w(this.na) && (this.value = this.na.m ? this.na.m() : this.na.call(null), this.na = null);
  return this.value;
};
function Ph(a) {
  return function(b, c) {
    var d = a.a ? a.a(b, c) : a.call(null, b, c);
    return hd(d) ? new gd(d) : d;
  };
}
function Qh(a) {
  return function(b) {
    return function() {
      function c(a, c) {
        return sb(b, a, c);
      }
      function d(b) {
        return a.b ? a.b(b) : a.call(null, b);
      }
      function e() {
        return a.m ? a.m() : a.call(null);
      }
      var f = null, f = function(a, b) {
        switch(arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, b);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.m = e;
      f.b = d;
      f.a = c;
      return f;
    }();
  }(Ph(a));
}
var Rh = {}, Sh = function Sh(b) {
  if (b ? b.od : b) {
    return b.od(b);
  }
  var c;
  c = Sh[n(null == b ? null : b)];
  if (!c && (c = Sh._, !c)) {
    throw z("IEncodeJS.-clj-\x3ejs", b);
  }
  return c.call(null, b);
};
function Th(a) {
  return(a ? w(w(null) ? null : a.nd) || (a.Hb ? 0 : x(Rh, a)) : x(Rh, a)) ? Sh(a) : "string" === typeof a || "number" === typeof a || a instanceof P || a instanceof Qc ? Uh.b ? Uh.b(a) : Uh.call(null, a) : Kh(L([a], 0));
}
var Uh = function Uh(b) {
  if (null == b) {
    return null;
  }
  if (b ? w(w(null) ? null : b.nd) || (b.Hb ? 0 : x(Rh, b)) : x(Rh, b)) {
    return Sh(b);
  }
  if (b instanceof P) {
    return se(b);
  }
  if (b instanceof Qc) {
    return "" + A(b);
  }
  if (Pd(b)) {
    var c = {};
    b = D(b);
    for (var d = null, e = 0, f = 0;;) {
      if (f < e) {
        var h = d.O(null, f), k = N(h, 0), h = N(h, 1);
        c[Th(k)] = Uh(h);
        f += 1;
      } else {
        if (b = D(b)) {
          Rd(b) ? (e = sc(b), b = tc(b), d = e, e = M(e)) : (e = G(b), d = N(e, 0), e = N(e, 1), c[Th(d)] = Uh(e), b = H(b), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (null == b ? 0 : b ? b.g & 8 || b.Sd || (b.g ? 0 : x(zb, b)) : x(zb, b)) {
    c = [];
    b = D(T.a(Uh, b));
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        k = d.O(null, f), c.push(k), f += 1;
      } else {
        if (b = D(b)) {
          d = b, Rd(d) ? (b = sc(d), f = tc(d), d = b, e = M(b), b = f) : (b = G(d), c.push(b), b = H(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return b;
}, Vh = null;
function Wh() {
  if (null == Vh) {
    var a = new bb(null, 3, [Xh, S, Yh, S, Zh, S], null);
    Vh = kf ? kf(a) : jf.call(null, a);
  }
  return Vh;
}
function $h(a, b, c) {
  var d = Xc.a(b, c);
  if (!d && !(d = Xd(Zh.b(a).call(null, b), c)) && (d = Qd(c)) && (d = Qd(b))) {
    if (d = M(c) === M(b)) {
      for (var e = !0, f = 0;;) {
        if (e && f !== M(c)) {
          e = $h(a, function() {
            var a = f;
            return b.b ? b.b(a) : b.call(null, a);
          }(), function() {
            var a = f;
            return c.b ? c.b(a) : c.call(null, a);
          }()), f = d = f + 1;
        } else {
          return e;
        }
      }
    } else {
      return d;
    }
  } else {
    return d;
  }
}
function ai(a) {
  var b;
  b = Wh();
  b = I.b ? I.b(b) : I.call(null, b);
  return Ne(Cd(Xh.b(b), a));
}
function bi(a, b, c, d) {
  ff.a(a, function() {
    return I.b ? I.b(b) : I.call(null, b);
  });
  ff.a(c, function() {
    return I.b ? I.b(d) : I.call(null, d);
  });
}
var ci = function ci(b, c, d) {
  var e = (I.b ? I.b(d) : I.call(null, d)).call(null, b), e = w(w(e) ? e.b ? e.b(c) : e.call(null, c) : e) ? !0 : null;
  if (w(e)) {
    return e;
  }
  e = function() {
    for (var e = ai(c);;) {
      if (0 < M(e)) {
        ci(b, G(e), d), e = Vc(e);
      } else {
        return null;
      }
    }
  }();
  if (w(e)) {
    return e;
  }
  e = function() {
    for (var e = ai(b);;) {
      if (0 < M(e)) {
        ci(G(e), c, d), e = Vc(e);
      } else {
        return null;
      }
    }
  }();
  return w(e) ? e : !1;
};
function di(a, b, c) {
  c = ci(a, b, c);
  if (w(c)) {
    a = c;
  } else {
    c = $h;
    var d;
    d = Wh();
    d = I.b ? I.b(d) : I.call(null, d);
    a = c(d, a, b);
  }
  return a;
}
var ei = function ei(b, c, d, e, f, h, k) {
  var l = sb(function(e, h) {
    var k = N(h, 0);
    N(h, 1);
    if ($h(I.b ? I.b(d) : I.call(null, d), c, k)) {
      var l;
      l = (l = null == e) ? l : di(k, G(e), f);
      l = w(l) ? h : e;
      if (!w(di(G(l), k, f))) {
        throw Error([A("Multiple methods in multimethod '"), A(b), A("' match dispatch value: "), A(c), A(" -\x3e "), A(k), A(" and "), A(G(l)), A(", and neither is preferred")].join(""));
      }
      return l;
    }
    return e;
  }, null, I.b ? I.b(e) : I.call(null, e));
  if (w(l)) {
    if (Xc.a(I.b ? I.b(k) : I.call(null, k), I.b ? I.b(d) : I.call(null, d))) {
      return ff.s(h, O, c, G(H(l))), G(H(l));
    }
    bi(h, e, k, d);
    return ei(b, c, d, e, f, h, k);
  }
  return null;
};
function Y(a, b) {
  throw Error([A("No method in multimethod '"), A(a), A("' for dispatch value: "), A(b)].join(""));
}
function fi(a, b, c, d, e, f, h, k) {
  this.name = a;
  this.f = b;
  this.Cd = c;
  this.pc = d;
  this.dc = e;
  this.Od = f;
  this.qc = h;
  this.ic = k;
  this.g = 4194305;
  this.r = 4352;
}
g = fi.prototype;
g.call = function() {
  function a(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y, C, F, K, R, ca) {
    a = this;
    var Ba = Me(a.f, b, c, d, e, L([f, h, k, l, m, u, p, q, r, t, v, y, C, F, K, R, ca], 0)), yg = gi(this, Ba);
    w(yg) || Y(a.name, Ba);
    return Me(yg, b, c, d, e, L([f, h, k, l, m, u, p, q, r, t, v, y, C, F, K, R, ca], 0));
  }
  function b(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y, C, F, K, R) {
    a = this;
    var ca = a.f.fa ? a.f.fa(b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y, C, F, K, R) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y, C, F, K, R), Ba = gi(this, ca);
    w(Ba) || Y(a.name, ca);
    return Ba.fa ? Ba.fa(b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y, C, F, K, R) : Ba.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y, C, F, K, R);
  }
  function c(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y, C, F, K) {
    a = this;
    var R = a.f.ea ? a.f.ea(b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y, C, F, K) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y, C, F, K), ca = gi(this, R);
    w(ca) || Y(a.name, R);
    return ca.ea ? ca.ea(b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y, C, F, K) : ca.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y, C, F, K);
  }
  function d(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y, C, F) {
    a = this;
    var K = a.f.da ? a.f.da(b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y, C, F) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y, C, F), R = gi(this, K);
    w(R) || Y(a.name, K);
    return R.da ? R.da(b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y, C, F) : R.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y, C, F);
  }
  function e(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y, C) {
    a = this;
    var F = a.f.ca ? a.f.ca(b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y, C) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y, C), K = gi(this, F);
    w(K) || Y(a.name, F);
    return K.ca ? K.ca(b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y, C) : K.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y, C);
  }
  function f(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y) {
    a = this;
    var C = a.f.ba ? a.f.ba(b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y), F = gi(this, C);
    w(F) || Y(a.name, C);
    return F.ba ? F.ba(b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y) : F.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, y);
  }
  function h(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v) {
    a = this;
    var y = a.f.aa ? a.f.aa(b, c, d, e, f, h, k, l, m, u, p, q, r, t, v) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v), C = gi(this, y);
    w(C) || Y(a.name, y);
    return C.aa ? C.aa(b, c, d, e, f, h, k, l, m, u, p, q, r, t, v) : C.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v);
  }
  function k(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t) {
    a = this;
    var v = a.f.$ ? a.f.$(b, c, d, e, f, h, k, l, m, u, p, q, r, t) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t), y = gi(this, v);
    w(y) || Y(a.name, v);
    return y.$ ? y.$(b, c, d, e, f, h, k, l, m, u, p, q, r, t) : y.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t);
  }
  function l(a, b, c, d, e, f, h, k, l, m, u, p, q, r) {
    a = this;
    var t = a.f.Z ? a.f.Z(b, c, d, e, f, h, k, l, m, u, p, q, r) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r), v = gi(this, t);
    w(v) || Y(a.name, t);
    return v.Z ? v.Z(b, c, d, e, f, h, k, l, m, u, p, q, r) : v.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r);
  }
  function m(a, b, c, d, e, f, h, k, l, m, u, p, q) {
    a = this;
    var r = a.f.Y ? a.f.Y(b, c, d, e, f, h, k, l, m, u, p, q) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q), t = gi(this, r);
    w(t) || Y(a.name, r);
    return t.Y ? t.Y(b, c, d, e, f, h, k, l, m, u, p, q) : t.call(null, b, c, d, e, f, h, k, l, m, u, p, q);
  }
  function p(a, b, c, d, e, f, h, k, l, m, u, p) {
    a = this;
    var q = a.f.X ? a.f.X(b, c, d, e, f, h, k, l, m, u, p) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p), r = gi(this, q);
    w(r) || Y(a.name, q);
    return r.X ? r.X(b, c, d, e, f, h, k, l, m, u, p) : r.call(null, b, c, d, e, f, h, k, l, m, u, p);
  }
  function q(a, b, c, d, e, f, h, k, l, m, u) {
    a = this;
    var p = a.f.W ? a.f.W(b, c, d, e, f, h, k, l, m, u) : a.f.call(null, b, c, d, e, f, h, k, l, m, u), q = gi(this, p);
    w(q) || Y(a.name, p);
    return q.W ? q.W(b, c, d, e, f, h, k, l, m, u) : q.call(null, b, c, d, e, f, h, k, l, m, u);
  }
  function r(a, b, c, d, e, f, h, k, l, m) {
    a = this;
    var u = a.f.ia ? a.f.ia(b, c, d, e, f, h, k, l, m) : a.f.call(null, b, c, d, e, f, h, k, l, m), p = gi(this, u);
    w(p) || Y(a.name, u);
    return p.ia ? p.ia(b, c, d, e, f, h, k, l, m) : p.call(null, b, c, d, e, f, h, k, l, m);
  }
  function t(a, b, c, d, e, f, h, k, l) {
    a = this;
    var m = a.f.ha ? a.f.ha(b, c, d, e, f, h, k, l) : a.f.call(null, b, c, d, e, f, h, k, l), u = gi(this, m);
    w(u) || Y(a.name, m);
    return u.ha ? u.ha(b, c, d, e, f, h, k, l) : u.call(null, b, c, d, e, f, h, k, l);
  }
  function v(a, b, c, d, e, f, h, k) {
    a = this;
    var l = a.f.ga ? a.f.ga(b, c, d, e, f, h, k) : a.f.call(null, b, c, d, e, f, h, k), m = gi(this, l);
    w(m) || Y(a.name, l);
    return m.ga ? m.ga(b, c, d, e, f, h, k) : m.call(null, b, c, d, e, f, h, k);
  }
  function y(a, b, c, d, e, f, h) {
    a = this;
    var k = a.f.R ? a.f.R(b, c, d, e, f, h) : a.f.call(null, b, c, d, e, f, h), l = gi(this, k);
    w(l) || Y(a.name, k);
    return l.R ? l.R(b, c, d, e, f, h) : l.call(null, b, c, d, e, f, h);
  }
  function C(a, b, c, d, e, f) {
    a = this;
    var h = a.f.J ? a.f.J(b, c, d, e, f) : a.f.call(null, b, c, d, e, f), k = gi(this, h);
    w(k) || Y(a.name, h);
    return k.J ? k.J(b, c, d, e, f) : k.call(null, b, c, d, e, f);
  }
  function F(a, b, c, d, e) {
    a = this;
    var f = a.f.s ? a.f.s(b, c, d, e) : a.f.call(null, b, c, d, e), h = gi(this, f);
    w(h) || Y(a.name, f);
    return h.s ? h.s(b, c, d, e) : h.call(null, b, c, d, e);
  }
  function K(a, b, c, d) {
    a = this;
    var e = a.f.d ? a.f.d(b, c, d) : a.f.call(null, b, c, d), f = gi(this, e);
    w(f) || Y(a.name, e);
    return f.d ? f.d(b, c, d) : f.call(null, b, c, d);
  }
  function R(a, b, c) {
    a = this;
    var d = a.f.a ? a.f.a(b, c) : a.f.call(null, b, c), e = gi(this, d);
    w(e) || Y(a.name, d);
    return e.a ? e.a(b, c) : e.call(null, b, c);
  }
  function ca(a, b) {
    a = this;
    var c = a.f.b ? a.f.b(b) : a.f.call(null, b), d = gi(this, c);
    w(d) || Y(a.name, c);
    return d.b ? d.b(b) : d.call(null, b);
  }
  function Ba(a) {
    a = this;
    var b = a.f.m ? a.f.m() : a.f.call(null), c = gi(this, b);
    w(c) || Y(a.name, b);
    return c.m ? c.m() : c.call(null);
  }
  var u = null, u = function(u, ba, fa, ia, na, va, wa, za, Da, oa, pa, Ga, Na, Ua, fb, Ka, Oa, Xa, Ya, uc, $c, ce) {
    switch(arguments.length) {
      case 1:
        return Ba.call(this, u);
      case 2:
        return ca.call(this, u, ba);
      case 3:
        return R.call(this, u, ba, fa);
      case 4:
        return K.call(this, u, ba, fa, ia);
      case 5:
        return F.call(this, u, ba, fa, ia, na);
      case 6:
        return C.call(this, u, ba, fa, ia, na, va);
      case 7:
        return y.call(this, u, ba, fa, ia, na, va, wa);
      case 8:
        return v.call(this, u, ba, fa, ia, na, va, wa, za);
      case 9:
        return t.call(this, u, ba, fa, ia, na, va, wa, za, Da);
      case 10:
        return r.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa);
      case 11:
        return q.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa, pa);
      case 12:
        return p.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa, pa, Ga);
      case 13:
        return m.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa, pa, Ga, Na);
      case 14:
        return l.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa, pa, Ga, Na, Ua);
      case 15:
        return k.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa, pa, Ga, Na, Ua, fb);
      case 16:
        return h.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa, pa, Ga, Na, Ua, fb, Ka);
      case 17:
        return f.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa, pa, Ga, Na, Ua, fb, Ka, Oa);
      case 18:
        return e.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa, pa, Ga, Na, Ua, fb, Ka, Oa, Xa);
      case 19:
        return d.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa, pa, Ga, Na, Ua, fb, Ka, Oa, Xa, Ya);
      case 20:
        return c.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa, pa, Ga, Na, Ua, fb, Ka, Oa, Xa, Ya, uc);
      case 21:
        return b.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa, pa, Ga, Na, Ua, fb, Ka, Oa, Xa, Ya, uc, $c);
      case 22:
        return a.call(this, u, ba, fa, ia, na, va, wa, za, Da, oa, pa, Ga, Na, Ua, fb, Ka, Oa, Xa, Ya, uc, $c, ce);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  u.b = Ba;
  u.a = ca;
  u.d = R;
  u.s = K;
  u.J = F;
  u.R = C;
  u.ga = y;
  u.ha = v;
  u.ia = t;
  u.W = r;
  u.X = q;
  u.Y = p;
  u.Z = m;
  u.$ = l;
  u.aa = k;
  u.ba = h;
  u.ca = f;
  u.da = e;
  u.ea = d;
  u.fa = c;
  u.yc = b;
  u.Rb = a;
  return u;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ob(b)));
};
g.m = function() {
  var a = this.f.m ? this.f.m() : this.f.call(null), b = gi(this, a);
  w(b) || Y(this.name, a);
  return b.m ? b.m() : b.call(null);
};
g.b = function(a) {
  var b = this.f.b ? this.f.b(a) : this.f.call(null, a), c = gi(this, b);
  w(c) || Y(this.name, b);
  return c.b ? c.b(a) : c.call(null, a);
};
g.a = function(a, b) {
  var c = this.f.a ? this.f.a(a, b) : this.f.call(null, a, b), d = gi(this, c);
  w(d) || Y(this.name, c);
  return d.a ? d.a(a, b) : d.call(null, a, b);
};
g.d = function(a, b, c) {
  var d = this.f.d ? this.f.d(a, b, c) : this.f.call(null, a, b, c), e = gi(this, d);
  w(e) || Y(this.name, d);
  return e.d ? e.d(a, b, c) : e.call(null, a, b, c);
};
g.s = function(a, b, c, d) {
  var e = this.f.s ? this.f.s(a, b, c, d) : this.f.call(null, a, b, c, d), f = gi(this, e);
  w(f) || Y(this.name, e);
  return f.s ? f.s(a, b, c, d) : f.call(null, a, b, c, d);
};
g.J = function(a, b, c, d, e) {
  var f = this.f.J ? this.f.J(a, b, c, d, e) : this.f.call(null, a, b, c, d, e), h = gi(this, f);
  w(h) || Y(this.name, f);
  return h.J ? h.J(a, b, c, d, e) : h.call(null, a, b, c, d, e);
};
g.R = function(a, b, c, d, e, f) {
  var h = this.f.R ? this.f.R(a, b, c, d, e, f) : this.f.call(null, a, b, c, d, e, f), k = gi(this, h);
  w(k) || Y(this.name, h);
  return k.R ? k.R(a, b, c, d, e, f) : k.call(null, a, b, c, d, e, f);
};
g.ga = function(a, b, c, d, e, f, h) {
  var k = this.f.ga ? this.f.ga(a, b, c, d, e, f, h) : this.f.call(null, a, b, c, d, e, f, h), l = gi(this, k);
  w(l) || Y(this.name, k);
  return l.ga ? l.ga(a, b, c, d, e, f, h) : l.call(null, a, b, c, d, e, f, h);
};
g.ha = function(a, b, c, d, e, f, h, k) {
  var l = this.f.ha ? this.f.ha(a, b, c, d, e, f, h, k) : this.f.call(null, a, b, c, d, e, f, h, k), m = gi(this, l);
  w(m) || Y(this.name, l);
  return m.ha ? m.ha(a, b, c, d, e, f, h, k) : m.call(null, a, b, c, d, e, f, h, k);
};
g.ia = function(a, b, c, d, e, f, h, k, l) {
  var m = this.f.ia ? this.f.ia(a, b, c, d, e, f, h, k, l) : this.f.call(null, a, b, c, d, e, f, h, k, l), p = gi(this, m);
  w(p) || Y(this.name, m);
  return p.ia ? p.ia(a, b, c, d, e, f, h, k, l) : p.call(null, a, b, c, d, e, f, h, k, l);
};
g.W = function(a, b, c, d, e, f, h, k, l, m) {
  var p = this.f.W ? this.f.W(a, b, c, d, e, f, h, k, l, m) : this.f.call(null, a, b, c, d, e, f, h, k, l, m), q = gi(this, p);
  w(q) || Y(this.name, p);
  return q.W ? q.W(a, b, c, d, e, f, h, k, l, m) : q.call(null, a, b, c, d, e, f, h, k, l, m);
};
g.X = function(a, b, c, d, e, f, h, k, l, m, p) {
  var q = this.f.X ? this.f.X(a, b, c, d, e, f, h, k, l, m, p) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p), r = gi(this, q);
  w(r) || Y(this.name, q);
  return r.X ? r.X(a, b, c, d, e, f, h, k, l, m, p) : r.call(null, a, b, c, d, e, f, h, k, l, m, p);
};
g.Y = function(a, b, c, d, e, f, h, k, l, m, p, q) {
  var r = this.f.Y ? this.f.Y(a, b, c, d, e, f, h, k, l, m, p, q) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q), t = gi(this, r);
  w(t) || Y(this.name, r);
  return t.Y ? t.Y(a, b, c, d, e, f, h, k, l, m, p, q) : t.call(null, a, b, c, d, e, f, h, k, l, m, p, q);
};
g.Z = function(a, b, c, d, e, f, h, k, l, m, p, q, r) {
  var t = this.f.Z ? this.f.Z(a, b, c, d, e, f, h, k, l, m, p, q, r) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r), v = gi(this, t);
  w(v) || Y(this.name, t);
  return v.Z ? v.Z(a, b, c, d, e, f, h, k, l, m, p, q, r) : v.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r);
};
g.$ = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t) {
  var v = this.f.$ ? this.f.$(a, b, c, d, e, f, h, k, l, m, p, q, r, t) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t), y = gi(this, v);
  w(y) || Y(this.name, v);
  return y.$ ? y.$(a, b, c, d, e, f, h, k, l, m, p, q, r, t) : y.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t);
};
g.aa = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v) {
  var y = this.f.aa ? this.f.aa(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v), C = gi(this, y);
  w(C) || Y(this.name, y);
  return C.aa ? C.aa(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v) : C.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v);
};
g.ba = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y) {
  var C = this.f.ba ? this.f.ba(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y), F = gi(this, C);
  w(F) || Y(this.name, C);
  return F.ba ? F.ba(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y) : F.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y);
};
g.ca = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C) {
  var F = this.f.ca ? this.f.ca(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C), K = gi(this, F);
  w(K) || Y(this.name, F);
  return K.ca ? K.ca(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C) : K.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C);
};
g.da = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F) {
  var K = this.f.da ? this.f.da(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F), R = gi(this, K);
  w(R) || Y(this.name, K);
  return R.da ? R.da(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F) : R.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F);
};
g.ea = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K) {
  var R = this.f.ea ? this.f.ea(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K), ca = gi(this, R);
  w(ca) || Y(this.name, R);
  return ca.ea ? ca.ea(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K) : ca.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K);
};
g.fa = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K, R) {
  var ca = this.f.fa ? this.f.fa(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K, R) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K, R), Ba = gi(this, ca);
  w(Ba) || Y(this.name, ca);
  return Ba.fa ? Ba.fa(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K, R) : Ba.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K, R);
};
g.yc = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, y, C, F, K, R, ca) {
  var Ba = Me(this.f, a, b, c, d, L([e, f, h, k, l, m, p, q, r, t, v, y, C, F, K, R, ca], 0)), u = gi(this, Ba);
  w(u) || Y(this.name, Ba);
  return Me(u, a, b, c, d, L([e, f, h, k, l, m, p, q, r, t, v, y, C, F, K, R, ca], 0));
};
function hi(a, b, c) {
  ff.s(a.dc, O, b, c);
  bi(a.qc, a.dc, a.ic, a.pc);
}
function gi(a, b) {
  Xc.a(function() {
    var b = a.ic;
    return I.b ? I.b(b) : I.call(null, b);
  }(), function() {
    var b = a.pc;
    return I.b ? I.b(b) : I.call(null, b);
  }()) || bi(a.qc, a.dc, a.ic, a.pc);
  var c = function() {
    var b = a.qc;
    return I.b ? I.b(b) : I.call(null, b);
  }().call(null, b);
  if (w(c)) {
    return c;
  }
  c = ei(a.name, b, a.pc, a.dc, a.Od, a.qc, a.ic);
  return w(c) ? c : function() {
    var b = a.dc;
    return I.b ? I.b(b) : I.call(null, b);
  }().call(null, a.Cd);
}
g.Vb = function() {
  return wc(this.name);
};
g.Wb = function() {
  return xc(this.name);
};
g.F = function() {
  return this[ja] || (this[ja] = ++ka);
};
var ii = new P(null, "y", "y", -1757859776), ji = new P(null, "ppath", "ppath", -1758182784), ki = new P(null, "event-sources", "event-sources", 708931713), li = new P(null, "events-channel", "events-channel", 1892177121), mi = new P(null, "key-codes", "key-codes", 284454881), ni = new P(null, "definition", "definition", -1198729982), oi = new P("zip", "branch?", "zip/branch?", -998880862), pi = new P(null, "children", "children", -940561982), qi = new P(null, "meta-key", "meta-key", 280559106), 
ri = new P(null, "r", "r", -471384190), ui = new P("zip", "children", "zip/children", -940194589), vi = new P(null, "ifn", "ifn", 230683491), wi = new P(null, "tree", "tree", -196312028), xi = new P("jamesmacaulay.zelkova.signal", "source", "jamesmacaulay.zelkova.signal/source", -943992700), yi = new P(null, "kids-map", "kids-map", 643095940), eb = new P(null, "meta", "meta", 1499536964), zi = new P(null, "dx", "dx", -381796732), gb = new P(null, "dup", "dup", 556298533), Ai = new P(null, "dir", 
"dir", 1734754661), Bi = new P(null, "alt", "alt", -3214426), mf = new P(null, "validator", "validator", -1966190681), Ci = new P(null, "default", "default", -1987822328), Di = new P(null, "finally-block", "finally-block", 832982472), Ei = new P(null, "sources", "sources", -321166424), Fi = new P(null, "events", "events", 1792552201), Gi = new P(null, "value", "value", 305978217), Hi = new P(null, "kid-indexes-map", "kid-indexes-map", -1120910006), Ii = new P("jamesmacaulay.zelkova.keyboard", "up-events", 
"jamesmacaulay.zelkova.keyboard/up-events", -1589836342), Ji = new P(null, "dy", "dy", 1719547243), Ki = new P(null, "mult-map", "mult-map", 460417931), Z = new P(null, "recur", "recur", -437573268), Li = new P("jamesmacaulay.zelkova.keyboard", "blur-events", "jamesmacaulay.zelkova.keyboard/blur-events", -453638708), Mi = new P(null, "catch-block", "catch-block", 1175212748), Ni = new P(null, "src", "src", -1651076051), Oi = new P(null, "topic", "topic", -1960480691), Ih = new P(null, "fallback-impl", 
"fallback-impl", -1501286995), cb = new P(null, "flush-on-newline", "flush-on-newline", -151457939), Pi = new P(null, "l", "l", 1395893423), Yh = new P(null, "descendants", "descendants", 1824886031), Qi = new P("zip", "make-node", "zip/make-node", 1103800591), Zh = new P(null, "ancestors", "ancestors", -776045424), Ri = new P(null, "style", "style", -496642736), db = new P(null, "readably", "readably", 1129599760), Si = new P(null, "output-values-mult", "output-values-mult", 1026794288), Bh = new P(null, 
"more-marker", "more-marker", -14717935), Ti = new P(null, "write-port-channel", "write-port-channel", -776952302), Ui = new P("jamesmacaulay.zelkova.keyboard", "down-events", "jamesmacaulay.zelkova.keyboard/down-events", -435596590), Vi = new P(null, "init-fn", "init-fn", 777257971), hb = new P(null, "print-length", "print-length", 1931866356), Wi = new P(null, "id", "id", -1388402092), Xi = new P(null, "class", "class", -2030961996), Yi = new P(null, "catch-exception", "catch-exception", -1997306795), 
Zi = new P(null, "opts", "opts", 155075701), $i = new P(null, "relayed-event-topic", "relayed-event-topic", 323853461), Xh = new P(null, "parents", "parents", -2027538891), aj = new P(null, "pnodes", "pnodes", 1739080565), bj = new P(null, "prev", "prev", -1597069226), cj = new P(null, "changed?", "changed?", -437828330), dj = new P(null, "continue-block", "continue-block", -1852047850), ej = new P(null, "readport", "readport", -1909228810), fj = new P(null, "mult", "mult", 1466794774), gj = new P(null, 
"attrs", "attrs", -2090668713), hj = new P(null, "topsort", "topsort", -718814409), ij = new P(null, "inputs-by-topic", "inputs-by-topic", 1973950168), jj = new P(null, "x", "x", 2099068185), kj = new P(null, "tag", "tag", -1290361223), lj = new P(null, "end", "end", -268185958), mj = new P(null, "parents-map", "parents-map", -1048684902), nj = new P(null, "hierarchy", "hierarchy", -1053470341), oj = new P(null, "timestamp", "timestamp", 579478971), pj = new P(null, "msg-xform", "msg-xform", -1431252485), 
qj = new P(null, "signal", "signal", -1984951589), Hh = new P(null, "alt-impl", "alt-impl", 670969595), rj = new P(null, "root-node", "root-node", 296879230), sj = new P(null, "deps", "deps", 1883360319), tj = new P(null, "alt-key", "alt-key", -965170049);
var uj, vj, wj = {}, xj = function xj(b, c) {
  if (b ? b.Bc : b) {
    return b.Bc(0, c);
  }
  var d;
  d = xj[n(null == b ? null : b)];
  if (!d && (d = xj._, !d)) {
    throw z("ReadPort.take!", b);
  }
  return d.call(null, b, c);
}, yj = function yj(b, c, d) {
  if (b ? b.Fb : b) {
    return b.Fb(b, c, d);
  }
  var e;
  e = yj[n(null == b ? null : b)];
  if (!e && (e = yj._, !e)) {
    throw z("WritePort.put!", b);
  }
  return e.call(null, b, c, d);
}, zj = function zj(b) {
  if (b ? b.Eb : b) {
    return b.Eb(b);
  }
  var c;
  c = zj[n(null == b ? null : b)];
  if (!c && (c = zj._, !c)) {
    throw z("Channel.close!", b);
  }
  return c.call(null, b);
}, Aj = function Aj(b) {
  if (b ? b.Yc : b) {
    return!0;
  }
  var c;
  c = Aj[n(null == b ? null : b)];
  if (!c && (c = Aj._, !c)) {
    throw z("Handler.active?", b);
  }
  return c.call(null, b);
}, Bj = function Bj(b) {
  if (b ? b.Zc : b) {
    return b.na;
  }
  var c;
  c = Bj[n(null == b ? null : b)];
  if (!c && (c = Bj._, !c)) {
    throw z("Handler.commit", b);
  }
  return c.call(null, b);
}, Cj = function Cj(b, c) {
  if (b ? b.Xc : b) {
    return b.Xc(0, c);
  }
  var d;
  d = Cj[n(null == b ? null : b)];
  if (!d && (d = Cj._, !d)) {
    throw z("Buffer.add!*", b);
  }
  return d.call(null, b, c);
}, Dj = function Dj() {
  switch(arguments.length) {
    case 1:
      return Dj.b(arguments[0]);
    case 2:
      return Dj.a(arguments[0], arguments[1]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
Dj.b = function(a) {
  return a;
};
Dj.a = function(a, b) {
  if (null == b) {
    throw Error([A("Assert failed: "), A(Kh(L([oe(new Qc(null, "not", "not", 1044554643, null), oe(new Qc(null, "nil?", "nil?", 1612038930, null), new Qc(null, "itm", "itm", -713282527, null)))], 0)))].join(""));
  }
  return Cj(a, b);
};
Dj.v = 2;
function Ej(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function Fj(a, b, c, d) {
  this.head = a;
  this.L = b;
  this.length = c;
  this.c = d;
}
Fj.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.c[this.L];
  this.c[this.L] = null;
  this.L = (this.L + 1) % this.c.length;
  --this.length;
  return a;
};
Fj.prototype.unshift = function(a) {
  this.c[this.head] = a;
  this.head = (this.head + 1) % this.c.length;
  this.length += 1;
  return null;
};
function Gj(a, b) {
  a.length + 1 === a.c.length && a.resize();
  a.unshift(b);
}
Fj.prototype.resize = function() {
  var a = Array(2 * this.c.length);
  return this.L < this.head ? (Ej(this.c, this.L, a, 0, this.length), this.L = 0, this.head = this.length, this.c = a) : this.L > this.head ? (Ej(this.c, this.L, a, 0, this.c.length - this.L), Ej(this.c, 0, a, this.c.length - this.L, this.head), this.L = 0, this.head = this.length, this.c = a) : this.L === this.head ? (this.head = this.L = 0, this.c = a) : null;
};
function Hj(a, b) {
  for (var c = a.length, d = 0;;) {
    if (d < c) {
      var e = a.pop(), f;
      f = e;
      f = b.b ? b.b(f) : b.call(null, f);
      w(f) && a.unshift(e);
      d += 1;
    } else {
      break;
    }
  }
}
function Ij(a) {
  if (!(0 < a)) {
    throw Error([A("Assert failed: "), A("Can't create a ring buffer of size 0"), A("\n"), A(Kh(L([oe(new Qc(null, "\x3e", "\x3e", 1085014381, null), new Qc(null, "n", "n", -2092305744, null), 0)], 0)))].join(""));
  }
  return new Fj(0, 0, 0, Array(a));
}
function Jj(a, b) {
  this.K = a;
  this.Md = b;
  this.g = 2;
  this.r = 0;
}
function Kj(a) {
  return a.K.length === a.Md;
}
Jj.prototype.Xc = function(a, b) {
  Gj(this.K, b);
  return this;
};
Jj.prototype.I = function() {
  return this.K.length;
};
var Lj;
function Mj() {
  var a = aa.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
    var a = document.createElement("iframe");
    a.style.display = "none";
    a.src = "";
    document.documentElement.appendChild(a);
    var b = a.contentWindow, a = b.document;
    a.open();
    a.write("");
    a.close();
    var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host, a = qa(function(a) {
      if (a.origin == d || a.data == c) {
        this.port1.onmessage();
      }
    }, this);
    b.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      b.postMessage(c, d);
    }};
  });
  if ("undefined" !== typeof a) {
    var b = new a, c = {}, d = c;
    b.port1.onmessage = function() {
      c = c.next;
      var a = c.Oc;
      c.Oc = null;
      a();
    };
    return function(a) {
      d.next = {Oc:a};
      d = d.next;
      b.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(a) {
    var b = document.createElement("script");
    b.onreadystatechange = function() {
      b.onreadystatechange = null;
      b.parentNode.removeChild(b);
      b = null;
      a();
      a = null;
    };
    document.documentElement.appendChild(b);
  } : function(a) {
    aa.setTimeout(a, 0);
  };
}
;var Nj = Ij(32), Oj = !1, Pj = !1;
function Qj() {
  Oj = !0;
  Pj = !1;
  for (var a = 0;;) {
    var b = Nj.pop();
    if (null != b && (b.m ? b.m() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  Oj = !1;
  return 0 < Nj.length ? Rj.m ? Rj.m() : Rj.call(null) : null;
}
function Rj() {
  var a = Pj;
  if (w(w(a) ? Oj : a)) {
    return null;
  }
  Pj = !0;
  ga(aa.setImmediate) ? aa.setImmediate(Qj) : (Lj || (Lj = Mj()), Lj(Qj));
}
function Sj(a) {
  Gj(Nj, a);
  Rj();
}
;var Tj, Uj = function Uj(b) {
  "undefined" === typeof Tj && (Tj = function(b, d, e) {
    this.jd = b;
    this.n = d;
    this.Gd = e;
    this.g = 425984;
    this.r = 0;
  }, Tj.prototype.C = function(b, d) {
    return new Tj(this.jd, this.n, d);
  }, Tj.prototype.A = function() {
    return this.Gd;
  }, Tj.prototype.Bb = function() {
    return this.n;
  }, Tj.Ib = !0, Tj.Gb = "cljs.core.async.impl.channels/t14851", Tj.$b = function(b, d) {
    return ic(d, "cljs.core.async.impl.channels/t14851");
  });
  return new Tj(Uj, b, S);
};
function Vj(a, b) {
  this.ib = a;
  this.n = b;
}
function Wj(a) {
  return Aj(a.ib);
}
var Xj = function Xj(b) {
  if (b ? b.Wc : b) {
    return b.Wc();
  }
  var c;
  c = Xj[n(null == b ? null : b)];
  if (!c && (c = Xj._, !c)) {
    throw z("MMC.abort", b);
  }
  return c.call(null, b);
};
function Yj(a, b, c, d, e, f, h) {
  this.zb = a;
  this.oc = b;
  this.ob = c;
  this.nc = d;
  this.K = e;
  this.closed = f;
  this.Ea = h;
}
g = Yj.prototype;
g.Wc = function() {
  for (;;) {
    var a = this.ob.pop();
    if (null != a) {
      var b = a.ib;
      Sj(function(a) {
        return function() {
          return a.b ? a.b(!0) : a.call(null, !0);
        };
      }(b.na, b, a.n, a, this));
    }
    break;
  }
  Hj(this.ob, af(!1));
  return zj(this);
};
g.Fb = function(a, b, c) {
  var d = this;
  if (null == b) {
    throw Error([A("Assert failed: "), A("Can't put nil in on a channel"), A("\n"), A(Kh(L([oe(new Qc(null, "not", "not", 1044554643, null), oe(new Qc(null, "nil?", "nil?", 1612038930, null), new Qc(null, "val", "val", 1769233139, null)))], 0)))].join(""));
  }
  if (a = d.closed) {
    return Uj(!a);
  }
  if (w(function() {
    var a = d.K;
    return w(a) ? kb(Kj(d.K)) : a;
  }())) {
    for (c = hd(function() {
      var a = d.K;
      return d.Ea.a ? d.Ea.a(a, b) : d.Ea.call(null, a, b);
    }());;) {
      if (0 < d.zb.length && 0 < M(d.K)) {
        var e = d.zb.pop(), f = e.na, h = d.K.K.pop();
        Sj(function(a, b) {
          return function() {
            return a.b ? a.b(b) : a.call(null, b);
          };
        }(f, h, e, c, a, this));
      }
      break;
    }
    c && Xj(this);
    return Uj(!0);
  }
  e = function() {
    for (;;) {
      var a = d.zb.pop();
      if (w(a)) {
        if (w(!0)) {
          return a;
        }
      } else {
        return null;
      }
    }
  }();
  if (w(e)) {
    return c = Bj(e), Sj(function(a) {
      return function() {
        return a.b ? a.b(b) : a.call(null, b);
      };
    }(c, e, a, this)), Uj(!0);
  }
  64 < d.nc ? (d.nc = 0, Hj(d.ob, Wj)) : d.nc += 1;
  if (!(1024 > d.ob.length)) {
    throw Error([A("Assert failed: "), A([A("No more than "), A(1024), A(" pending puts are allowed on a single channel."), A(" Consider using a windowed buffer.")].join("")), A("\n"), A(Kh(L([oe(new Qc(null, "\x3c", "\x3c", 993667236, null), oe(new Qc(null, ".-length", ".-length", -280799999, null), new Qc(null, "puts", "puts", -1883877054, null)), new Qc("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0)))].join(""));
  }
  Gj(d.ob, new Vj(c, b));
  return null;
};
g.Bd = !0;
g.Bc = function(a, b) {
  var c = this;
  if (null != c.K && 0 < M(c.K)) {
    for (var d = b.na, e = Uj(c.K.K.pop());;) {
      if (!w(Kj(c.K))) {
        var f = c.ob.pop();
        if (null != f) {
          var h = f.ib, k = f.n;
          Sj(function(a) {
            return function() {
              return a.b ? a.b(!0) : a.call(null, !0);
            };
          }(h.na, h, k, f, d, e, this));
          hd(function() {
            var a = c.K, b = k;
            return c.Ea.a ? c.Ea.a(a, b) : c.Ea.call(null, a, b);
          }()) && Xj(this);
          continue;
        }
      }
      break;
    }
    return e;
  }
  d = function() {
    for (;;) {
      var a = c.ob.pop();
      if (w(a)) {
        if (Aj(a.ib)) {
          return a;
        }
      } else {
        return null;
      }
    }
  }();
  if (w(d)) {
    return e = Bj(d.ib), Sj(function(a) {
      return function() {
        return a.b ? a.b(!0) : a.call(null, !0);
      };
    }(e, d, this)), Uj(d.n);
  }
  if (w(c.closed)) {
    return w(c.K) && (d = c.K, c.Ea.b ? c.Ea.b(d) : c.Ea.call(null, d)), w(w(!0) ? b.na : !0) ? (d = function() {
      var a = c.K;
      return w(a) ? 0 < M(c.K) : a;
    }(), d = w(d) ? c.K.K.pop() : null, Uj(d)) : null;
  }
  64 < c.oc ? (c.oc = 0, Hj(c.zb, Aj)) : c.oc += 1;
  if (!(1024 > c.zb.length)) {
    throw Error([A("Assert failed: "), A([A("No more than "), A(1024), A(" pending takes are allowed on a single channel.")].join("")), A("\n"), A(Kh(L([oe(new Qc(null, "\x3c", "\x3c", 993667236, null), oe(new Qc(null, ".-length", ".-length", -280799999, null), new Qc(null, "takes", "takes", 298247964, null)), new Qc("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0)))].join(""));
  }
  Gj(c.zb, b);
  return null;
};
g.Eb = function() {
  var a = this;
  if (!a.closed) {
    a.closed = !0;
    if (w(function() {
      var b = a.K;
      return w(b) ? 0 === a.ob.length : b;
    }())) {
      var b = a.K;
      a.Ea.b ? a.Ea.b(b) : a.Ea.call(null, b);
    }
    for (;b = a.zb.pop(), null != b;) {
      var c = b.na, d = w(function() {
        var b = a.K;
        return w(b) ? 0 < M(a.K) : b;
      }()) ? a.K.K.pop() : null;
      Sj(function(a, b) {
        return function() {
          return a.b ? a.b(b) : a.call(null, b);
        };
      }(c, d, b, this));
    }
  }
  return null;
};
function Zj(a) {
  console.log(a);
  return null;
}
function ak(a, b, c) {
  b = (w(b) ? b : Zj).call(null, c);
  return null == b ? a : Dj.a(a, b);
}
function bk(a, b, c) {
  return new Yj(Ij(32), 0, Ij(32), 0, a, !1, function() {
    return function(a) {
      return function() {
        function b(e, f) {
          try {
            return a.a ? a.a(e, f) : a.call(null, e, f);
          } catch (h) {
            return ak(e, c, h);
          }
        }
        function f(b) {
          try {
            return a.b ? a.b(b) : a.call(null, b);
          } catch (e) {
            return ak(b, c, e);
          }
        }
        var h = null, h = function(a, c) {
          switch(arguments.length) {
            case 1:
              return f.call(this, a);
            case 2:
              return b.call(this, a, c);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        h.b = f;
        h.a = b;
        return h;
      }();
    }(w(b) ? b.b ? b.b(Dj) : b.call(null, Dj) : Dj);
  }());
}
;var ck, dk = function dk(b) {
  "undefined" === typeof ck && (ck = function(b, d, e) {
    this.Dc = b;
    this.na = d;
    this.Jd = e;
    this.g = 393216;
    this.r = 0;
  }, ck.prototype.C = function(b, d) {
    return new ck(this.Dc, this.na, d);
  }, ck.prototype.A = function() {
    return this.Jd;
  }, ck.prototype.Yc = function() {
    return!0;
  }, ck.prototype.Zc = function() {
    return this.na;
  }, ck.Ib = !0, ck.Gb = "cljs.core.async.impl.ioc-helpers/t17757", ck.$b = function(b, d) {
    return ic(d, "cljs.core.async.impl.ioc-helpers/t17757");
  });
  return new ck(dk, b, S);
};
function ek(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    throw b instanceof Object && a[6].Eb(null), b;
  }
}
function fk(a, b, c) {
  c = c.Bc(0, dk(function(c) {
    a[2] = c;
    a[1] = b;
    return ek(a);
  }));
  return w(c) ? (a[2] = I.b ? I.b(c) : I.call(null, c), a[1] = b, Z) : null;
}
function gk(a, b, c, d) {
  c = c.Fb(null, d, dk(function(c) {
    a[2] = c;
    a[1] = b;
    return ek(a);
  }));
  return w(c) ? (a[2] = I.b ? I.b(c) : I.call(null, c), a[1] = b, Z) : null;
}
function hk(a, b) {
  var c = a[6];
  null != b && c.Fb(null, b, dk(function() {
    return function() {
      return null;
    };
  }(c)));
  c.Eb(null);
  return c;
}
function ik(a, b, c, d, e, f, h, k) {
  this.Pa = a;
  this.Qa = b;
  this.Ta = c;
  this.Sa = d;
  this.bb = e;
  this.p = f;
  this.k = h;
  this.j = k;
  this.g = 2229667594;
  this.r = 8192;
}
g = ik.prototype;
g.w = function(a, b) {
  return Hb.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.ka : null) {
    case "catch-block":
      return this.Pa;
    case "catch-exception":
      return this.Qa;
    case "finally-block":
      return this.Ta;
    case "continue-block":
      return this.Sa;
    case "prev":
      return this.bb;
    default:
      return Dd(this.k, b, c);
  }
};
g.B = function(a, b, c) {
  return Ah(b, function() {
    return function(a) {
      return Ah(b, X, "", " ", "", c, a);
    };
  }(this), "#cljs.core.async.impl.ioc-helpers.ExceptionFrame{", ", ", "}", c, Ee.a(new U(null, 5, 5, V, [new U(null, 2, 5, V, [Mi, this.Pa], null), new U(null, 2, 5, V, [Yi, this.Qa], null), new U(null, 2, 5, V, [Di, this.Ta], null), new U(null, 2, 5, V, [dj, this.Sa], null), new U(null, 2, 5, V, [bj, this.bb], null)], null), this.k));
};
g.A = function() {
  return this.p;
};
g.I = function() {
  return 5 + M(this.k);
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ie(this);
};
g.q = function(a, b) {
  var c;
  c = w(b) ? (c = this.constructor === b.constructor) ? ig(this, b) : c : b;
  return w(c) ? !0 : !1;
};
g.ya = function(a, b) {
  return Xd(new nh(null, new bb(null, 5, [Di, null, Mi, null, Yi, null, bj, null, dj, null], null), null), b) ? Fd.a(td(Bf.a(S, this), this.p), b) : new ik(this.Pa, this.Qa, this.Ta, this.Sa, this.bb, this.p, Ne(Fd.a(this.k, b)), null);
};
g.pa = function(a, b, c) {
  return w(Q.a ? Q.a(Mi, b) : Q.call(null, Mi, b)) ? new ik(c, this.Qa, this.Ta, this.Sa, this.bb, this.p, this.k, null) : w(Q.a ? Q.a(Yi, b) : Q.call(null, Yi, b)) ? new ik(this.Pa, c, this.Ta, this.Sa, this.bb, this.p, this.k, null) : w(Q.a ? Q.a(Di, b) : Q.call(null, Di, b)) ? new ik(this.Pa, this.Qa, c, this.Sa, this.bb, this.p, this.k, null) : w(Q.a ? Q.a(dj, b) : Q.call(null, dj, b)) ? new ik(this.Pa, this.Qa, this.Ta, c, this.bb, this.p, this.k, null) : w(Q.a ? Q.a(bj, b) : Q.call(null, bj, 
  b)) ? new ik(this.Pa, this.Qa, this.Ta, this.Sa, c, this.p, this.k, null) : new ik(this.Pa, this.Qa, this.Ta, this.Sa, this.bb, this.p, O.d(this.k, b, c), null);
};
g.H = function() {
  return D(Ee.a(new U(null, 5, 5, V, [new U(null, 2, 5, V, [Mi, this.Pa], null), new U(null, 2, 5, V, [Yi, this.Qa], null), new U(null, 2, 5, V, [Di, this.Ta], null), new U(null, 2, 5, V, [dj, this.Sa], null), new U(null, 2, 5, V, [bj, this.bb], null)], null), this.k));
};
g.C = function(a, b) {
  return new ik(this.Pa, this.Qa, this.Ta, this.Sa, this.bb, b, this.k, this.j);
};
g.G = function(a, b) {
  return Qd(b) ? Jb(this, B.a(b, 0), B.a(b, 1)) : sb(Ab, this, b);
};
function jk(a) {
  for (;;) {
    var b = a[4], c = Mi.b(b), d = Yi.b(b), e = a[5];
    if (w(function() {
      var a = e;
      return w(a) ? kb(b) : a;
    }())) {
      throw e;
    }
    if (w(function() {
      var a = e;
      return w(a) ? (a = c, w(a) ? e instanceof d : a) : a;
    }())) {
      a[1] = c;
      a[2] = e;
      a[5] = null;
      a[4] = O.i(b, Mi, null, L([Yi, null], 0));
      break;
    }
    if (w(function() {
      var a = e;
      return w(a) ? kb(c) && kb(Di.b(b)) : a;
    }())) {
      a[4] = bj.b(b);
    } else {
      if (w(function() {
        var a = e;
        return w(a) ? (a = kb(c)) ? Di.b(b) : a : a;
      }())) {
        a[1] = Di.b(b);
        a[4] = O.d(b, Di, null);
        break;
      }
      if (w(function() {
        var a = kb(e);
        return a ? Di.b(b) : a;
      }())) {
        a[1] = Di.b(b);
        a[4] = O.d(b, Di, null);
        break;
      }
      if (kb(e) && kb(Di.b(b))) {
        a[1] = dj.b(b);
        a[4] = bj.b(b);
        break;
      }
      throw Error("No matching clause");
    }
  }
}
;for (var kk = Array(1), lk = 0;;) {
  if (lk < kk.length) {
    kk[lk] = null, lk += 1;
  } else {
    break;
  }
}
;var mk = function mk(b) {
  "undefined" === typeof uj && (uj = function(b, d, e) {
    this.Dc = b;
    this.na = d;
    this.Hd = e;
    this.g = 393216;
    this.r = 0;
  }, uj.prototype.C = function(b, d) {
    return new uj(this.Dc, this.na, d);
  }, uj.prototype.A = function() {
    return this.Hd;
  }, uj.prototype.Yc = function() {
    return!0;
  }, uj.prototype.Zc = function() {
    return this.na;
  }, uj.Ib = !0, uj.Gb = "cljs.core.async/t15050", uj.$b = function(b, d) {
    return ic(d, "cljs.core.async/t15050");
  });
  return new uj(mk, b, S);
}, nk = function nk() {
  switch(arguments.length) {
    case 0:
      return nk.m();
    case 1:
      return nk.b(arguments[0]);
    case 2:
      return nk.a(arguments[0], arguments[1]);
    case 3:
      return nk.d(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
nk.m = function() {
  return nk.b(null);
};
nk.b = function(a) {
  return nk.d(a, null, null);
};
nk.a = function(a, b) {
  return nk.d(a, b, null);
};
nk.d = function(a, b, c) {
  a = Xc.a(a, 0) ? null : a;
  if (w(b) && !w(a)) {
    throw Error([A("Assert failed: "), A("buffer must be supplied when transducer is"), A("\n"), A(Kh(L([new Qc(null, "buf-or-n", "buf-or-n", -1646815050, null)], 0)))].join(""));
  }
  a = "number" === typeof a ? new Jj(Ij(a), a) : a;
  return bk(a, b, c);
};
nk.v = 3;
function ok(a, b) {
  var c = xj(a, mk(b));
  if (w(c)) {
    var d = I.b ? I.b(c) : I.call(null, c);
    w(!0) ? b.b ? b.b(d) : b.call(null, d) : Sj(function(a) {
      return function() {
        return b.b ? b.b(a) : b.call(null, a);
      };
    }(d, c));
  }
  return null;
}
var pk = mk(function() {
  return null;
});
function qk(a, b) {
  var c = yj(a, b, pk);
  return w(c) ? I.b ? I.b(c) : I.call(null, c) : !0;
}
function rk(a, b, c) {
  a = yj(a, b, mk(c));
  return w(a) ? (b = I.b ? I.b(a) : I.call(null, a), w(!0) ? c.b ? c.b(b) : c.call(null, b) : Sj(function(a) {
    return function() {
      return c.b ? c.b(a) : c.call(null, a);
    };
  }(b, a, a)), b) : !0;
}
function sk(a, b) {
  return tk(a, b);
}
function tk(a, b) {
  var c = nk.b(1);
  Sj(function(c) {
    return function() {
      var e = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d;
                a: {
                  try {
                    for (;;) {
                      var e = a(c);
                      if (!Q(e, Z)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f, jk(c), d = Z;
                    } else {
                      throw f;
                    }
                  }
                }
                if (!Q(d, Z)) {
                  return d;
                }
              }
            }
            function c() {
              var a = [null, null, null, null, null, null, null, null];
              a[0] = d;
              a[1] = 1;
              return a;
            }
            var d = null, d = function(a) {
              switch(arguments.length) {
                case 0:
                  return c.call(this);
                case 1:
                  return b.call(this, a);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            d.m = c;
            d.b = b;
            return d;
          }();
        }(function() {
          return function(c) {
            var d = c[1];
            return 7 === d ? (d = c, d[2] = c[2], d[1] = 3, Z) : 1 === d ? (c[2] = null, c[1] = 2, Z) : 4 === d ? (d = c[7], d = c[2], c[7] = d, c[1] = w(null == d) ? 5 : 6, Z) : 13 === d ? (c[2] = null, c[1] = 14, Z) : 6 === d ? (d = c[7], gk(c, 11, b, d)) : 3 === d ? (d = c[2], hk(c, d)) : 12 === d ? (c[2] = null, c[1] = 2, Z) : 2 === d ? fk(c, 4, a) : 11 === d ? (d = c[2], c[1] = w(d) ? 12 : 13, Z) : 9 === d ? (c[2] = null, c[1] = 10, Z) : 5 === d ? (c[1] = w(!0) ? 8 : 9, Z) : 14 === d || 10 === 
            d ? (d = c[2], c[2] = d, c[1] = 7, Z) : 8 === d ? (d = zj(b), c[2] = d, c[1] = 10, Z) : null;
          };
        }(c), c);
      }(), f = function() {
        var a = e.m ? e.m() : e.call(null);
        a[6] = c;
        return a;
      }();
      return ek(f);
    };
  }(c));
  return b;
}
var uk = {}, vk = function vk(b, c, d) {
  if (b ? b.Ac : b) {
    return b.Ac(b, c, d);
  }
  var e;
  e = vk[n(null == b ? null : b)];
  if (!e && (e = vk._, !e)) {
    throw z("Mult.tap*", b);
  }
  return e.call(null, b, c, d);
}, wk = function wk(b, c) {
  if (b ? b.Zb : b) {
    return b.Zb(b, c);
  }
  var d;
  d = wk[n(null == b ? null : b)];
  if (!d && (d = wk._, !d)) {
    throw z("Mult.untap*", b);
  }
  return d.call(null, b, c);
}, fl = function fl(b) {
  var c = kf ? kf(S) : jf.call(null, S), d = function() {
    "undefined" === typeof vj && (vj = function(b, c, d, e) {
      this.Ld = b;
      this.ch = c;
      this.Cc = d;
      this.Id = e;
      this.g = 393216;
      this.r = 0;
    }, vj.prototype.C = function() {
      return function(b, c) {
        return new vj(this.Ld, this.ch, this.Cc, c);
      };
    }(c), vj.prototype.A = function() {
      return function() {
        return this.Id;
      };
    }(c), vj.prototype.Vc = !0, vj.prototype.Ac = function() {
      return function(b, c, d) {
        ff.s(this.Cc, O, c, d);
        return null;
      };
    }(c), vj.prototype.Zb = function() {
      return function(b, c) {
        ff.d(this.Cc, Fd, c);
        return null;
      };
    }(c), vj.Ib = !0, vj.Gb = "cljs.core.async/t16084", vj.$b = function() {
      return function(b, c) {
        return ic(c, "cljs.core.async/t16084");
      };
    }(c));
    return new vj(fl, b, c, S);
  }(), e = nk.b(1), f = kf ? kf(null) : jf.call(null, null), h = function(b, c, d, e) {
    return function() {
      return 0 === ff.a(e, de) ? qk(d, !0) : null;
    };
  }(c, d, e, f), k = nk.b(1);
  Sj(function(c, d, e, f, h, k) {
    return function() {
      var v = function() {
        return function(b) {
          return function() {
            function c(d) {
              for (;;) {
                var e;
                a: {
                  try {
                    for (;;) {
                      var f = b(d);
                      if (!Q(f, Z)) {
                        e = f;
                        break a;
                      }
                    }
                  } catch (h) {
                    if (h instanceof Object) {
                      d[5] = h, jk(d), e = Z;
                    } else {
                      throw h;
                    }
                  }
                }
                if (!Q(e, Z)) {
                  return e;
                }
              }
            }
            function d() {
              var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
              b[0] = e;
              b[1] = 1;
              return b;
            }
            var e = null, e = function(b) {
              switch(arguments.length) {
                case 0:
                  return d.call(this);
                case 1:
                  return c.call(this, b);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            e.m = d;
            e.b = c;
            return e;
          }();
        }(function(c, d, e, f, h, k) {
          return function(c) {
            var l = c[1];
            if (7 === l) {
              var m = c, p = m;
              p[2] = c[2];
              p[1] = 3;
              return Z;
            }
            if (20 === l) {
              var q = c[7], r = G(q), t = N(r, 0), v = N(r, 1);
              c[8] = t;
              m = c;
              m[1] = w(v) ? 22 : 23;
              return Z;
            }
            if (27 === l) {
              var y = c[9], C = c[10], oa = c[11], pa = c[12], Ga = B.a(oa, pa), Na = rk(Ga, C, k);
              c[9] = Ga;
              m = c;
              m[1] = w(Na) ? 30 : 31;
              return Z;
            }
            if (1 === l) {
              var Ua = m = c;
              Ua[2] = null;
              Ua[1] = 2;
              return Z;
            }
            if (24 === l) {
              var q = c[7], fb = c[2], Ka = H(q), Oa = null, Xa = 0, Ya = 0;
              c[13] = Ya;
              c[14] = Xa;
              c[15] = Oa;
              c[16] = fb;
              c[17] = Ka;
              var uc = m = c;
              uc[2] = null;
              uc[1] = 8;
              return Z;
            }
            if (39 === l) {
              var $c = m = c;
              $c[2] = null;
              $c[1] = 41;
              return Z;
            }
            if (4 === l) {
              var C = c[10], ce = c[2], Km = null == ce;
              c[10] = ce;
              m = c;
              m[1] = w(Km) ? 5 : 6;
              return Z;
            }
            if (15 === l) {
              var Ya = c[13], Xa = c[14], Oa = c[15], Ka = c[17], yg = c[2], $m = Ka, an = Oa, bn = Xa;
              c[13] = Ya + 1;
              c[18] = yg;
              c[14] = bn;
              c[15] = an;
              c[17] = $m;
              var xk = m = c;
              xk[2] = null;
              xk[1] = 8;
              return Z;
            }
            if (21 === l) {
              var cn = c[2], yk = m = c;
              yk[2] = cn;
              yk[1] = 18;
              return Z;
            }
            if (31 === l) {
              var y = c[9], dn = k(null), en = e.Zb(null, y);
              c[19] = dn;
              var zk = m = c;
              zk[2] = en;
              zk[1] = 32;
              return Z;
            }
            if (32 === l) {
              var Rc = c[20], oa = c[11], pa = c[12], Sc = c[21], fn = c[2], gn = Sc, hn = oa, jn = pa + 1;
              c[20] = Rc;
              c[11] = hn;
              c[12] = jn;
              c[22] = fn;
              c[21] = gn;
              var Ak = m = c;
              Ak[2] = null;
              Ak[1] = 25;
              return Z;
            }
            if (40 === l) {
              var Bk = c[23], kn = k(null), ln = e.Zb(null, Bk);
              c[24] = kn;
              var Ck = m = c;
              Ck[2] = ln;
              Ck[1] = 41;
              return Z;
            }
            if (33 === l) {
              var Tc = c[25], mn = Rd(Tc), m = c;
              m[1] = mn ? 36 : 37;
              return Z;
            }
            if (13 === l) {
              var si = c[26], nn = zj(si), Dk = m = c;
              Dk[2] = nn;
              Dk[1] = 15;
              return Z;
            }
            if (22 === l) {
              var t = c[8], on = zj(t), Ek = m = c;
              Ek[2] = on;
              Ek[1] = 24;
              return Z;
            }
            if (36 === l) {
              var Tc = c[25], Fk = sc(Tc), pn = tc(Tc), qn = M(Fk), Sc = pn, oa = Fk, Rc = qn, pa = 0;
              c[20] = Rc;
              c[11] = oa;
              c[12] = pa;
              c[21] = Sc;
              var Gk = m = c;
              Gk[2] = null;
              Gk[1] = 25;
              return Z;
            }
            if (41 === l) {
              var Tc = c[25], rn = c[2], Sc = H(Tc), oa = null, pa = Rc = 0;
              c[20] = Rc;
              c[27] = rn;
              c[11] = oa;
              c[12] = pa;
              c[21] = Sc;
              var Hk = m = c;
              Hk[2] = null;
              Hk[1] = 25;
              return Z;
            }
            if (43 === l) {
              var Ik = m = c;
              Ik[2] = null;
              Ik[1] = 44;
              return Z;
            }
            if (29 === l) {
              var sn = c[2], Jk = m = c;
              Jk[2] = sn;
              Jk[1] = 26;
              return Z;
            }
            if (44 === l) {
              c[28] = c[2];
              var Kk = m = c;
              Kk[2] = null;
              Kk[1] = 2;
              return Z;
            }
            if (6 === l) {
              var Lk = c[29], tn = I.b ? I.b(d) : I.call(null, d), ti = qg(tn), Mk = M(ti), un = nf.a ? nf.a(h, Mk) : nf.call(null, h, Mk), Sc = D(ti), oa = null, pa = Rc = 0;
              c[29] = ti;
              c[20] = Rc;
              c[11] = oa;
              c[12] = pa;
              c[30] = un;
              c[21] = Sc;
              var Nk = m = c;
              Nk[2] = null;
              Nk[1] = 25;
              return Z;
            }
            if (28 === l) {
              var Tc = c[25], Sc = c[21], Ok = D(Sc);
              c[25] = Ok;
              m = c;
              m[1] = Ok ? 33 : 34;
              return Z;
            }
            if (25 === l) {
              var Rc = c[20], pa = c[12], vn = pa < Rc, m = c;
              m[1] = w(vn) ? 27 : 28;
              return Z;
            }
            if (34 === l) {
              var Pk = m = c;
              Pk[2] = null;
              Pk[1] = 35;
              return Z;
            }
            if (17 === l) {
              var Qk = m = c;
              Qk[2] = null;
              Qk[1] = 18;
              return Z;
            }
            if (3 === l) {
              var wn = c[2], m = c;
              return hk(m, wn);
            }
            if (12 === l) {
              var xn = c[2], Rk = m = c;
              Rk[2] = xn;
              Rk[1] = 9;
              return Z;
            }
            if (2 === l) {
              return m = c, fk(m, 4, b);
            }
            if (23 === l) {
              var Sk = m = c;
              Sk[2] = null;
              Sk[1] = 24;
              return Z;
            }
            if (35 === l) {
              var yn = c[2], Tk = m = c;
              Tk[2] = yn;
              Tk[1] = 29;
              return Z;
            }
            if (19 === l) {
              var q = c[7], Uk = sc(q), zn = tc(q), An = M(Uk), Ka = zn, Oa = Uk, Xa = An, Ya = 0;
              c[13] = Ya;
              c[14] = Xa;
              c[15] = Oa;
              c[17] = Ka;
              var Vk = m = c;
              Vk[2] = null;
              Vk[1] = 8;
              return Z;
            }
            if (11 === l) {
              var q = c[7], Ka = c[17], Wk = D(Ka);
              c[7] = Wk;
              m = c;
              m[1] = Wk ? 16 : 17;
              return Z;
            }
            if (9 === l) {
              var Bn = c[2], Xk = m = c;
              Xk[2] = Bn;
              Xk[1] = 7;
              return Z;
            }
            if (5 === l) {
              var Cn = I.b ? I.b(d) : I.call(null, d), Ka = D(Cn), Oa = null, Ya = Xa = 0;
              c[13] = Ya;
              c[14] = Xa;
              c[15] = Oa;
              c[17] = Ka;
              var Yk = m = c;
              Yk[2] = null;
              Yk[1] = 8;
              return Z;
            }
            if (14 === l) {
              var Zk = m = c;
              Zk[2] = null;
              Zk[1] = 15;
              return Z;
            }
            if (45 === l) {
              var Dn = c[2], $k = m = c;
              $k[2] = Dn;
              $k[1] = 44;
              return Z;
            }
            if (26 === l) {
              var Lk = c[29], En = c[2], Fn = D(Lk);
              c[31] = En;
              m = c;
              m[1] = Fn ? 42 : 43;
              return Z;
            }
            if (16 === l) {
              var q = c[7], Gn = Rd(q), m = c;
              m[1] = Gn ? 19 : 20;
              return Z;
            }
            if (38 === l) {
              var Hn = c[2], al = m = c;
              al[2] = Hn;
              al[1] = 35;
              return Z;
            }
            if (30 === l) {
              var bl = m = c;
              bl[2] = null;
              bl[1] = 32;
              return Z;
            }
            if (10 === l) {
              var Ya = c[13], Oa = c[15], cl = B.a(Oa, Ya), si = N(cl, 0), In = N(cl, 1);
              c[26] = si;
              m = c;
              m[1] = w(In) ? 13 : 14;
              return Z;
            }
            if (18 === l) {
              var Jn = c[2], dl = m = c;
              dl[2] = Jn;
              dl[1] = 12;
              return Z;
            }
            if (42 === l) {
              return m = c, fk(m, 45, f);
            }
            if (37 === l) {
              var C = c[10], Bk = c[23], Tc = c[25], el = G(Tc), Kn = rk(el, C, k);
              c[23] = el;
              m = c;
              m[1] = w(Kn) ? 39 : 40;
              return Z;
            }
            if (8 === l) {
              var Ya = c[13], Xa = c[14], Ln = Ya < Xa, m = c;
              m[1] = w(Ln) ? 10 : 11;
              return Z;
            }
            return null;
          };
        }(c, d, e, f, h, k), c, d, e, f, h, k);
      }(), y = function() {
        var b = v.m ? v.m() : v.call(null);
        b[6] = c;
        return b;
      }();
      return ek(y);
    };
  }(k, c, d, e, f, h));
  return d;
};
function gl(a, b) {
  vk(a, b, !0);
  return b;
}
function hl(a) {
  a = Xf(a);
  var b = nk.b(null), c = M(a), d = Be(c), e = nk.b(1), f = kf ? kf(null) : jf.call(null, null), h = Cf.a(function(a, b, c, d, e, f) {
    return function(h) {
      return function(a, b, c, d, e, f) {
        return function(a) {
          d[h] = a;
          return 0 === ff.a(f, de) ? qk(e, d.slice(0)) : null;
        };
      }(a, b, c, d, e, f);
    };
  }(a, b, c, d, e, f), new zh(null, 0, c, 1, null)), k = nk.b(1);
  Sj(function(a, b, c, d, e, f, h, k) {
    return function() {
      var C = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d;
                a: {
                  try {
                    for (;;) {
                      var e = a(c);
                      if (!Q(e, Z)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f, jk(c), d = Z;
                    } else {
                      throw f;
                    }
                  }
                }
                if (!Q(d, Z)) {
                  return d;
                }
              }
            }
            function c() {
              var a = [null, null, null, null, null, null, null, null, null, null, null, null, null, null];
              a[0] = d;
              a[1] = 1;
              return a;
            }
            var d = null, d = function(a) {
              switch(arguments.length) {
                case 0:
                  return c.call(this);
                case 1:
                  return b.call(this, a);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            d.m = c;
            d.b = b;
            return d;
          }();
        }(function(a, b, c, d, e, f, h, k) {
          return function(a) {
            var e = a[1];
            if (7 === e) {
              return a[2] = null, a[1] = 8, Z;
            }
            if (1 === e) {
              return a[2] = null, a[1] = 2, Z;
            }
            if (4 === e) {
              var l = a[7], e = l < d;
              a[1] = w(e) ? 6 : 7;
              return Z;
            }
            if (15 === e) {
              return e = a[2], a[2] = e, a[1] = 3, Z;
            }
            if (13 === e) {
              return e = zj(c), a[2] = e, a[1] = 15, Z;
            }
            if (6 === e) {
              return a[2] = null, a[1] = 11, Z;
            }
            if (3 === e) {
              return e = a[2], hk(a, e);
            }
            if (12 === e) {
              var e = a[8], e = a[2], m = Ze(ib, e);
              a[8] = e;
              a[1] = w(m) ? 13 : 14;
              return Z;
            }
            return 2 === e ? (e = nf.a ? nf.a(h, d) : nf.call(null, h, d), l = 0, a[7] = l, a[9] = e, a[2] = null, a[1] = 4, Z) : 11 === e ? (l = a[7], a[4] = new ik(10, Object, null, 9, a[4], null, null, null), e = function() {
              var a = l;
              return b.b ? b.b(a) : b.call(null, a);
            }(), m = function() {
              var a = l;
              return k.b ? k.b(a) : k.call(null, a);
            }(), e = ok(e, m), a[2] = e, jk(a), Z) : 9 === e ? (l = a[7], e = a[2], a[7] = l + 1, a[10] = e, a[2] = null, a[1] = 4, Z) : 5 === e ? (a[11] = a[2], fk(a, 12, f)) : 14 === e ? (e = a[8], e = Ie(Yf, e), gk(a, 16, c, e)) : 16 === e ? (a[12] = a[2], a[2] = null, a[1] = 2, Z) : 10 === e ? (m = a[2], e = ff.a(h, de), a[13] = m, a[2] = e, jk(a), Z) : 8 === e ? (e = a[2], a[2] = e, a[1] = 5, Z) : null;
          };
        }(a, b, c, d, e, f, h, k), a, b, c, d, e, f, h, k);
      }(), F = function() {
        var b = C.m ? C.m() : C.call(null);
        b[6] = a;
        return b;
      }();
      return ek(F);
    };
  }(k, a, b, c, d, e, f, h));
  return b;
}
;function il(a) {
  return a.b ? a.b(0) : a.call(null, 0);
}
function jl(a) {
  return oi.b(Jd(a)).call(null, il(a));
}
function kl(a) {
  var b = N(a, 0), c = N(a, 1), d = Vd(c) ? Ie(lf, c) : c, e = Cd(d, Pi), c = Cd(d, ji), f = Cd(d, aj), h = Cd(d, ri), d = Cd(d, cj);
  return w(f) ? (f = Kd(f), w(d) ? (d = V, b = Ee.a(e, J(b, h)), b = Qi.b(Jd(a)).call(null, f, b), c = new U(null, 2, 5, d, [b, w(c) ? O.d(c, cj, !0) : c], null)) : c = new U(null, 2, 5, V, [f, c], null), td(c, Jd(a))) : null;
}
function ll(a) {
  var b = N(a, 0), c = N(a, 1), c = Vd(c) ? Ie(lf, c) : c, d = Cd(c, Pi), e = Cd(c, ri), f = N(e, 0), h = he(e);
  return w(w(c) ? e : c) ? td(new U(null, 2, 5, V, [f, O.i(c, Pi, yd.a(d, b), L([ri, h], 0))], null), Jd(a)) : null;
}
function ml(a) {
  if (Xc.a(lj, a.b ? a.b(1) : a.call(null, 1))) {
    return a;
  }
  var b;
  b = jl(a);
  if (w(b)) {
    if (w(jl(a))) {
      b = N(a, 0);
      var c = N(a, 1), d;
      if (w(jl(a))) {
        d = ui.b(Jd(a)).call(null, il(a));
      } else {
        throw "called children on a leaf node";
      }
      var e = N(d, 0), f = he(d);
      b = w(d) ? td(new U(null, 2, 5, V, [e, new bb(null, 4, [Pi, zd, aj, w(c) ? yd.a(aj.b(c), b) : new U(null, 1, 5, V, [b], null), ji, c, ri, f], null)], null), Jd(a)) : null;
    } else {
      b = null;
    }
  }
  if (w(b)) {
    return b;
  }
  b = ll(a);
  if (w(b)) {
    return b;
  }
  for (;;) {
    if (w(kl(a))) {
      b = ll(kl(a));
      if (w(b)) {
        return b;
      }
      a = kl(a);
    } else {
      return new U(null, 2, 5, V, [il(a), lj], null);
    }
  }
}
;function nl(a, b) {
  var c = Je(wh, a, b);
  return J(c, yf(function(a) {
    return function(b) {
      return a === b;
    };
  }(c), b));
}
var ol = function ol() {
  switch(arguments.length) {
    case 0:
      return ol.m();
    case 1:
      return ol.b(arguments[0]);
    case 2:
      return ol.a(arguments[0], arguments[1]);
    default:
      return ol.i(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
ol.m = function() {
  return ph;
};
ol.b = function(a) {
  return a;
};
ol.a = function(a, b) {
  return M(a) < M(b) ? sb(yd, b, a) : sb(yd, a, b);
};
ol.i = function(a, b, c) {
  a = nl(M, yd.i(c, b, L([a], 0)));
  return sb(Bf, G(a), Vc(a));
};
ol.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return ol.i(b, a, c);
};
ol.v = 2;
var pl = function pl() {
  switch(arguments.length) {
    case 1:
      return pl.b(arguments[0]);
    case 2:
      return pl.a(arguments[0], arguments[1]);
    default:
      return pl.i(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
pl.b = function(a) {
  return a;
};
pl.a = function(a, b) {
  for (;;) {
    if (M(b) < M(a)) {
      var c = a;
      a = b;
      b = c;
    } else {
      return sb(function(a, b) {
        return function(a, c) {
          return Xd(b, c) ? a : Ld.a(a, c);
        };
      }(a, b), a, a);
    }
  }
};
pl.i = function(a, b, c) {
  a = nl(function(a) {
    return-M(a);
  }, yd.i(c, b, L([a], 0)));
  return sb(pl, G(a), Vc(a));
};
pl.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return pl.i(b, a, c);
};
pl.v = 2;
var ql = function ql() {
  switch(arguments.length) {
    case 1:
      return ql.b(arguments[0]);
    case 2:
      return ql.a(arguments[0], arguments[1]);
    default:
      return ql.i(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
ql.b = function(a) {
  return a;
};
ql.a = function(a, b) {
  return M(a) < M(b) ? sb(function(a, d) {
    return Xd(b, d) ? Ld.a(a, d) : a;
  }, a, a) : sb(Ld, a, b);
};
ql.i = function(a, b, c) {
  return sb(ql, a, yd.a(c, b));
};
ql.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return ql.i(b, a, c);
};
ql.v = 2;
function rl(a, b) {
  return ql.a(a, qh([b]));
}
function sl(a) {
  if (Md(a)) {
    throw Error([A("Assert failed: "), A(Kh(L([oe(new Qc(null, "not", "not", 1044554643, null), oe(new Qc(null, "empty?", "empty?", 76408555, null), new Qc(null, "s", "s", -948495851, null)))], 0)))].join(""));
  }
  var b = G(a);
  return new U(null, 2, 5, V, [b, rl(a, b)], null);
}
function tl(a) {
  var b = th(qg(a));
  a = Ie(ol, rg(a));
  return ql.a(b, a);
}
function ul(a) {
  var b = Ie(ol, rg(a));
  return sb(function() {
    return function(a, b) {
      return w(Cd(a, b)) ? a : O.d(a, b, ph);
    };
  }(b), a, b);
}
function vl(a) {
  return wl(ul(a), zd, tl(a));
}
function wl(a, b, c) {
  for (;;) {
    if (Md(c)) {
      return Ye(Md, rg(a)) ? b : null;
    }
    var d = sl(c), e = N(d, 0), f = N(d, 1), h = function() {
      var b = e;
      return a.b ? a.b(b) : a.call(null, b);
    }();
    c = d = sb(function(a, b, c, d, e) {
      return function(a, b) {
        return Ef.s(a, new U(null, 1, 5, V, [e], null), rl, b);
      };
    }(a, b, c, d, e, f, h), a, h);
    b = yd.a(b, e);
    f = ol.a(f, pl.a(tl(d), h));
    a = c;
    c = f;
  }
}
;function xl(a, b) {
  var c = nk.b(1);
  Sj(function(c) {
    return function() {
      var e = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d;
                a: {
                  try {
                    for (;;) {
                      var e = a(c);
                      if (!Q(e, Z)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f, jk(c), d = Z;
                    } else {
                      throw f;
                    }
                  }
                }
                if (!Q(d, Z)) {
                  return d;
                }
              }
            }
            function c() {
              var a = [null, null, null, null, null, null, null, null, null];
              a[0] = d;
              a[1] = 1;
              return a;
            }
            var d = null, d = function(a) {
              switch(arguments.length) {
                case 0:
                  return c.call(this);
                case 1:
                  return b.call(this, a);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            d.m = c;
            d.b = b;
            return d;
          }();
        }(function() {
          return function(c) {
            var d = c[1];
            return 1 === d ? (c[2] = null, c[1] = 2, Z) : 2 === d ? fk(c, 4, b) : 3 === d ? (d = c[2], hk(c, d)) : 4 === d ? (d = c[7], d = c[2], c[7] = d, c[1] = w(null == d) ? 5 : 6, Z) : 5 === d ? (c[2] = null, c[1] = 7, Z) : 6 === d ? (d = c[7], d = a.b ? a.b(d) : a.call(null, d), c[8] = d, c[2] = null, c[1] = 2, Z) : 7 === d ? (d = c[2], c[2] = d, c[1] = 3, Z) : null;
          };
        }(c), c);
      }(), f = function() {
        var a = e.m ? e.m() : e.call(null);
        a[6] = c;
        return a;
      }();
      return ek(f);
    };
  }(c));
}
;var yl = function yl(b) {
  if (b ? b.Ec : b) {
    return b.value;
  }
  var c;
  c = yl[n(null == b ? null : b)];
  if (!c && (c = yl._, !c)) {
    throw z("BoxedValueProtocol.value", b);
  }
  return c.call(null, b);
}, zl = function zl(b) {
  if (b ? b.Ed : b) {
    return b.eb;
  }
  var c;
  c = zl[n(null == b ? null : b)];
  if (!c && (c = zl._, !c)) {
    throw z("EventProtocol.topic", b);
  }
  return c.call(null, b);
}, Al = function Al(b) {
  if (b ? b.Dd : b) {
    return b.timestamp;
  }
  var c;
  c = Al[n(null == b ? null : b)];
  if (!c && (c = Al._, !c)) {
    throw z("EventProtocol.timestamp", b);
  }
  return c.call(null, b);
}, Bl = function Bl(b, c) {
  if (b ? b.bd : b) {
    return b.bd(0, c);
  }
  var d;
  d = Bl[n(null == b ? null : b)];
  if (!d && (d = Bl._, !d)) {
    throw z("EventProtocol.record-timestamp", b);
  }
  return d.call(null, b, c);
}, Cl = function Cl(b) {
  if (b ? b.Fc : b) {
    return b.Fc(b);
  }
  var c;
  c = Cl[n(null == b ? null : b)];
  if (!c && (c = Cl._, !c)) {
    throw z("MessageProtocol.fresh?", b);
  }
  return c.call(null, b);
};
function Dl(a, b, c, d, e, f) {
  this.eb = a;
  this.value = b;
  this.timestamp = c;
  this.p = d;
  this.k = e;
  this.j = f;
  this.g = 2229667594;
  this.r = 8192;
}
g = Dl.prototype;
g.Ed = function() {
  return this.eb;
};
g.Dd = function() {
  return this.timestamp;
};
g.bd = function(a, b) {
  return O.d(this, oj, b);
};
g.w = function(a, b) {
  return Hb.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.ka : null) {
    case "topic":
      return this.eb;
    case "value":
      return this.value;
    case "timestamp":
      return this.timestamp;
    default:
      return Dd(this.k, b, c);
  }
};
g.B = function(a, b, c) {
  return Ah(b, function() {
    return function(a) {
      return Ah(b, X, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.Event{", ", ", "}", c, Ee.a(new U(null, 3, 5, V, [new U(null, 2, 5, V, [Oi, this.eb], null), new U(null, 2, 5, V, [Gi, this.value], null), new U(null, 2, 5, V, [oj, this.timestamp], null)], null), this.k));
};
g.A = function() {
  return this.p;
};
g.I = function() {
  return 3 + M(this.k);
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ie(this);
};
g.q = function(a, b) {
  var c;
  c = w(b) ? (c = this.constructor === b.constructor) ? ig(this, b) : c : b;
  return w(c) ? !0 : !1;
};
g.Ec = function() {
  return this.value;
};
g.ya = function(a, b) {
  return Xd(new nh(null, new bb(null, 3, [Gi, null, Oi, null, oj, null], null), null), b) ? Fd.a(td(Bf.a(S, this), this.p), b) : new Dl(this.eb, this.value, this.timestamp, this.p, Ne(Fd.a(this.k, b)), null);
};
g.pa = function(a, b, c) {
  return w(Q.a ? Q.a(Oi, b) : Q.call(null, Oi, b)) ? new Dl(c, this.value, this.timestamp, this.p, this.k, null) : w(Q.a ? Q.a(Gi, b) : Q.call(null, Gi, b)) ? new Dl(this.eb, c, this.timestamp, this.p, this.k, null) : w(Q.a ? Q.a(oj, b) : Q.call(null, oj, b)) ? new Dl(this.eb, this.value, c, this.p, this.k, null) : new Dl(this.eb, this.value, this.timestamp, this.p, O.d(this.k, b, c), null);
};
g.H = function() {
  return D(Ee.a(new U(null, 3, 5, V, [new U(null, 2, 5, V, [Oi, this.eb], null), new U(null, 2, 5, V, [Gi, this.value], null), new U(null, 2, 5, V, [oj, this.timestamp], null)], null), this.k));
};
g.C = function(a, b) {
  return new Dl(this.eb, this.value, this.timestamp, b, this.k, this.j);
};
g.G = function(a, b) {
  return Qd(b) ? Jb(this, B.a(b, 0), B.a(b, 1)) : sb(Ab, this, b);
};
function El(a, b) {
  return new Dl(a, b, null, null, null, null);
}
function Fl(a, b, c, d) {
  this.value = a;
  this.p = b;
  this.k = c;
  this.j = d;
  this.g = 2229667594;
  this.r = 8192;
}
g = Fl.prototype;
g.w = function(a, b) {
  return Hb.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.ka : null) {
    case "value":
      return this.value;
    default:
      return Dd(this.k, b, c);
  }
};
g.B = function(a, b, c) {
  return Ah(b, function() {
    return function(a) {
      return Ah(b, X, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.Fresh{", ", ", "}", c, Ee.a(new U(null, 1, 5, V, [new U(null, 2, 5, V, [Gi, this.value], null)], null), this.k));
};
g.A = function() {
  return this.p;
};
g.I = function() {
  return 1 + M(this.k);
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ie(this);
};
g.q = function(a, b) {
  var c;
  c = w(b) ? (c = this.constructor === b.constructor) ? ig(this, b) : c : b;
  return w(c) ? !0 : !1;
};
g.Ec = function() {
  return this.value;
};
g.Fc = function() {
  return!0;
};
g.ya = function(a, b) {
  return Xd(new nh(null, new bb(null, 1, [Gi, null], null), null), b) ? Fd.a(td(Bf.a(S, this), this.p), b) : new Fl(this.value, this.p, Ne(Fd.a(this.k, b)), null);
};
g.pa = function(a, b, c) {
  return w(Q.a ? Q.a(Gi, b) : Q.call(null, Gi, b)) ? new Fl(c, this.p, this.k, null) : new Fl(this.value, this.p, O.d(this.k, b, c), null);
};
g.H = function() {
  return D(Ee.a(new U(null, 1, 5, V, [new U(null, 2, 5, V, [Gi, this.value], null)], null), this.k));
};
g.C = function(a, b) {
  return new Fl(this.value, b, this.k, this.j);
};
g.G = function(a, b) {
  return Qd(b) ? Jb(this, B.a(b, 0), B.a(b, 1)) : sb(Ab, this, b);
};
function Gl(a, b, c, d) {
  this.value = a;
  this.p = b;
  this.k = c;
  this.j = d;
  this.g = 2229667594;
  this.r = 8192;
}
g = Gl.prototype;
g.w = function(a, b) {
  return Hb.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.ka : null) {
    case "value":
      return this.value;
    default:
      return Dd(this.k, b, c);
  }
};
g.B = function(a, b, c) {
  return Ah(b, function() {
    return function(a) {
      return Ah(b, X, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.Cached{", ", ", "}", c, Ee.a(new U(null, 1, 5, V, [new U(null, 2, 5, V, [Gi, this.value], null)], null), this.k));
};
g.A = function() {
  return this.p;
};
g.I = function() {
  return 1 + M(this.k);
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ie(this);
};
g.q = function(a, b) {
  var c;
  c = w(b) ? (c = this.constructor === b.constructor) ? ig(this, b) : c : b;
  return w(c) ? !0 : !1;
};
g.Ec = function() {
  return this.value;
};
g.Fc = function() {
  return!1;
};
g.ya = function(a, b) {
  return Xd(new nh(null, new bb(null, 1, [Gi, null], null), null), b) ? Fd.a(td(Bf.a(S, this), this.p), b) : new Gl(this.value, this.p, Ne(Fd.a(this.k, b)), null);
};
g.pa = function(a, b, c) {
  return w(Q.a ? Q.a(Gi, b) : Q.call(null, Gi, b)) ? new Gl(c, this.p, this.k, null) : new Gl(this.value, this.p, O.d(this.k, b, c), null);
};
g.H = function() {
  return D(Ee.a(new U(null, 1, 5, V, [new U(null, 2, 5, V, [Gi, this.value], null)], null), this.k));
};
g.C = function(a, b) {
  return new Gl(this.value, b, this.k, this.j);
};
g.G = function(a, b) {
  return Qd(b) ? Jb(this, B.a(b, 0), B.a(b, 1)) : sb(Ab, this, b);
};
function Hl(a) {
  return new Fl(a, null, null, null);
}
function Il(a) {
  return new Gl(a, null, null, null);
}
var Jl = cf(Qh, wf(Cl), T.b(yl)), Kl = {}, Ll = function Ll(b) {
  if (b ? b.ed : b) {
    return b.ed();
  }
  var c;
  c = Ll[n(null == b ? null : b)];
  if (!c && (c = Ll._, !c)) {
    throw z("SignalProtocol.signal-deps", b);
  }
  return c.call(null, b);
}, Ml = function Ml(b) {
  if (b ? b.fd : b) {
    return b.fd();
  }
  var c;
  c = Ml[n(null == b ? null : b)];
  if (!c && (c = Ml._, !c)) {
    throw z("SignalProtocol.topsort", b);
  }
  return c.call(null, b);
};
function Nl(a) {
  return a ? w(w(null) ? null : a.Fd) ? !0 : a.Hb ? !1 : x(Kl, a) : x(Kl, a);
}
function Ol(a) {
  return sb(function(a, c) {
    var d = $i.b(c);
    return w(d) ? O.d(a, d, yd.a(Dd(a, d, zd), c)) : a;
  }, S, a);
}
function Pl(a, b) {
  var c = function(a) {
    return function(b) {
      return Bf.d(uh(), T.b(a), b);
    };
  }(vh(b, new zh(null, 0, Number.MAX_VALUE, 1, null)));
  return vh(qg(a), T.a(c, rg(a)));
}
function Ql(a, b, c, d, e, f, h, k) {
  this.ab = a;
  this.Xa = b;
  this.fb = c;
  this.Wa = d;
  this.Va = e;
  this.p = f;
  this.k = h;
  this.j = k;
  this.g = 2229667594;
  this.r = 8192;
}
g = Ql.prototype;
g.w = function(a, b) {
  return Hb.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.ka : null) {
    case "parents-map":
      return this.ab;
    case "kids-map":
      return this.Xa;
    case "topsort":
      return this.fb;
    case "kid-indexes-map":
      return this.Wa;
    case "inputs-by-topic":
      return this.Va;
    default:
      return Dd(this.k, b, c);
  }
};
g.B = function(a, b, c) {
  return Ah(b, function() {
    return function(a) {
      return Ah(b, X, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata{", ", ", "}", c, Ee.a(new U(null, 5, 5, V, [new U(null, 2, 5, V, [mj, this.ab], null), new U(null, 2, 5, V, [yi, this.Xa], null), new U(null, 2, 5, V, [hj, this.fb], null), new U(null, 2, 5, V, [Hi, this.Wa], null), new U(null, 2, 5, V, [ij, this.Va], null)], null), this.k));
};
g.A = function() {
  return this.p;
};
g.I = function() {
  return 5 + M(this.k);
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ie(this);
};
g.q = function(a, b) {
  var c;
  c = w(b) ? (c = this.constructor === b.constructor) ? ig(this, b) : c : b;
  return w(c) ? !0 : !1;
};
g.ya = function(a, b) {
  return Xd(new nh(null, new bb(null, 5, [yi, null, Hi, null, hj, null, ij, null, mj, null], null), null), b) ? Fd.a(td(Bf.a(S, this), this.p), b) : new Ql(this.ab, this.Xa, this.fb, this.Wa, this.Va, this.p, Ne(Fd.a(this.k, b)), null);
};
g.pa = function(a, b, c) {
  return w(Q.a ? Q.a(mj, b) : Q.call(null, mj, b)) ? new Ql(c, this.Xa, this.fb, this.Wa, this.Va, this.p, this.k, null) : w(Q.a ? Q.a(yi, b) : Q.call(null, yi, b)) ? new Ql(this.ab, c, this.fb, this.Wa, this.Va, this.p, this.k, null) : w(Q.a ? Q.a(hj, b) : Q.call(null, hj, b)) ? new Ql(this.ab, this.Xa, c, this.Wa, this.Va, this.p, this.k, null) : w(Q.a ? Q.a(Hi, b) : Q.call(null, Hi, b)) ? new Ql(this.ab, this.Xa, this.fb, c, this.Va, this.p, this.k, null) : w(Q.a ? Q.a(ij, b) : Q.call(null, ij, 
  b)) ? new Ql(this.ab, this.Xa, this.fb, this.Wa, c, this.p, this.k, null) : new Ql(this.ab, this.Xa, this.fb, this.Wa, this.Va, this.p, O.d(this.k, b, c), null);
};
g.H = function() {
  return D(Ee.a(new U(null, 5, 5, V, [new U(null, 2, 5, V, [mj, this.ab], null), new U(null, 2, 5, V, [yi, this.Xa], null), new U(null, 2, 5, V, [hj, this.fb], null), new U(null, 2, 5, V, [Hi, this.Wa], null), new U(null, 2, 5, V, [ij, this.Va], null)], null), this.k));
};
g.C = function(a, b) {
  return new Ql(this.ab, this.Xa, this.fb, this.Wa, this.Va, b, this.k, this.j);
};
g.G = function(a, b) {
  return Qd(b) ? Jb(this, B.a(b, 0), B.a(b, 1)) : sb(Ab, this, b);
};
function Rl(a, b, c, d, e) {
  return new Ql(a, b, c, d, e, null, null, null);
}
function Sl(a) {
  var b = new Oh(function() {
    var b;
    a: {
      b = S;
      for (var c = new vg([a, ph]), d = td(new U(null, 2, 5, V, [a, null], null), new bb(null, 3, [oi, af(!0), ui, bf(D, Ll), Qi, null], null));;) {
        var e;
        e = d;
        e = Xc.a(lj, e.b ? e.b(1) : e.call(null, 1));
        if (w(e)) {
          b = new bb(null, 2, [mj, b, yi, c], null);
          break a;
        }
        if (Xd(b, il(d))) {
          b: {
            if (e = ll(d), w(e)) {
              d = e;
            } else {
              for (;;) {
                if (w(kl(d))) {
                  e = ll(kl(d));
                  if (w(e)) {
                    d = e;
                    break b;
                  }
                  d = kl(d);
                } else {
                  d = new U(null, 2, 5, V, [il(d), lj], null);
                  break b;
                }
              }
            }
          }
        } else {
          e = il(d);
          var f = Ll(e), d = ml(d);
          b = O.d(b, e, f);
          c = mh.i(ol, L([c, vh(f, vf(qh([e])))], 0));
        }
      }
    }
    return b;
  }, null), c = new Oh(function(a) {
    return function() {
      return mj.b(I.b ? I.b(a) : I.call(null, a));
    };
  }(b), null), d = new Oh(function(a) {
    return function() {
      return yi.b(I.b ? I.b(a) : I.call(null, a));
    };
  }(b, c), null), e = new Oh(function(a, b) {
    return function() {
      var a = I.b ? I.b(b) : I.call(null, b);
      return Bf.a(zd, ne(vl(a)));
    };
  }(b, c, d), null), f = new Oh(function(a, b, c, d) {
    return function() {
      return Ol(I.b ? I.b(d) : I.call(null, d));
    };
  }(b, c, d, e), null);
  return td(a, Rl(c, d, e, new Oh(function(a, b, c, d) {
    return function() {
      return Pl(I.b ? I.b(c) : I.call(null, c), I.b ? I.b(d) : I.call(null, d));
    };
  }(b, c, d, e, f), null), f));
}
function Tl() {
  return Ul(arguments[0], arguments[1], 2 < arguments.length ? new E(Array.prototype.slice.call(arguments, 2), 0) : null);
}
function Ul(a, b, c) {
  if (null == b) {
    throw Error([A("Assert failed: "), A("This signal is not a valid write-port, use the `jamesmacaulay.zelkova.signal/write-port` constructor if you want to treat this signal like a channel."), A("\n"), A(Kh(L([oe(new Qc(null, "not", "not", 1044554643, null), oe(new Qc(null, "nil?", "nil?", 1612038930, null), new Qc(null, "ch", "ch", 1085813622, null)))], 0)))].join(""));
  }
  return Je(a, b, c);
}
function Vl(a, b, c, d, e, f, h, k, l, m) {
  this.Ha = a;
  this.Ca = b;
  this.Ka = c;
  this.Ia = d;
  this.za = e;
  this.Ga = f;
  this.wa = h;
  this.p = k;
  this.k = l;
  this.j = m;
  this.g = 2229667594;
  this.r = 8192;
}
g = Vl.prototype;
g.w = function(a, b) {
  return Hb.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.ka : null) {
    case "init-fn":
      return this.Ha;
    case "sources":
      return this.Ca;
    case "relayed-event-topic":
      return this.Ka;
    case "msg-xform":
      return this.Ia;
    case "deps":
      return this.za;
    case "event-sources":
      return this.Ga;
    case "write-port-channel":
      return this.wa;
    default:
      return Dd(this.k, b, c);
  }
};
g.Eb = function() {
  return Tl(zj, this.wa);
};
g.B = function(a, b, c) {
  return Ah(b, function() {
    return function(a) {
      return Ah(b, X, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.SignalDefinition{", ", ", "}", c, Ee.a(new U(null, 7, 5, V, [new U(null, 2, 5, V, [Vi, this.Ha], null), new U(null, 2, 5, V, [Ei, this.Ca], null), new U(null, 2, 5, V, [$i, this.Ka], null), new U(null, 2, 5, V, [pj, this.Ia], null), new U(null, 2, 5, V, [sj, this.za], null), new U(null, 2, 5, V, [ki, this.Ga], null), new U(null, 2, 5, V, [Ti, this.wa], null)], null), this.k));
};
g.A = function() {
  return this.p;
};
g.I = function() {
  return 7 + M(this.k);
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ie(this);
};
g.q = function(a, b) {
  var c;
  c = w(b) ? (c = this.constructor === b.constructor) ? ig(this, b) : c : b;
  return w(c) ? !0 : !1;
};
g.Fd = !0;
g.ed = function() {
  var a = this.za;
  return Bf.d(ph, wf(Nl), w(a) ? a : this.Ca);
};
g.fd = function() {
  var a = hj.b(Jd(this));
  return I.b ? I.b(a) : I.call(null, a);
};
g.Fb = function(a, b, c) {
  return Ul(yj, this.wa, L([b, c], 0));
};
g.ya = function(a, b) {
  return Xd(new nh(null, new bb(null, 7, [ki, null, Ei, null, Ti, null, Vi, null, $i, null, pj, null, sj, null], null), null), b) ? Fd.a(td(Bf.a(S, this), this.p), b) : new Vl(this.Ha, this.Ca, this.Ka, this.Ia, this.za, this.Ga, this.wa, this.p, Ne(Fd.a(this.k, b)), null);
};
g.pa = function(a, b, c) {
  return w(Q.a ? Q.a(Vi, b) : Q.call(null, Vi, b)) ? new Vl(c, this.Ca, this.Ka, this.Ia, this.za, this.Ga, this.wa, this.p, this.k, null) : w(Q.a ? Q.a(Ei, b) : Q.call(null, Ei, b)) ? new Vl(this.Ha, c, this.Ka, this.Ia, this.za, this.Ga, this.wa, this.p, this.k, null) : w(Q.a ? Q.a($i, b) : Q.call(null, $i, b)) ? new Vl(this.Ha, this.Ca, c, this.Ia, this.za, this.Ga, this.wa, this.p, this.k, null) : w(Q.a ? Q.a(pj, b) : Q.call(null, pj, b)) ? new Vl(this.Ha, this.Ca, this.Ka, c, this.za, this.Ga, 
  this.wa, this.p, this.k, null) : w(Q.a ? Q.a(sj, b) : Q.call(null, sj, b)) ? new Vl(this.Ha, this.Ca, this.Ka, this.Ia, c, this.Ga, this.wa, this.p, this.k, null) : w(Q.a ? Q.a(ki, b) : Q.call(null, ki, b)) ? new Vl(this.Ha, this.Ca, this.Ka, this.Ia, this.za, c, this.wa, this.p, this.k, null) : w(Q.a ? Q.a(Ti, b) : Q.call(null, Ti, b)) ? new Vl(this.Ha, this.Ca, this.Ka, this.Ia, this.za, this.Ga, c, this.p, this.k, null) : new Vl(this.Ha, this.Ca, this.Ka, this.Ia, this.za, this.Ga, this.wa, 
  this.p, O.d(this.k, b, c), null);
};
g.H = function() {
  return D(Ee.a(new U(null, 7, 5, V, [new U(null, 2, 5, V, [Vi, this.Ha], null), new U(null, 2, 5, V, [Ei, this.Ca], null), new U(null, 2, 5, V, [$i, this.Ka], null), new U(null, 2, 5, V, [pj, this.Ia], null), new U(null, 2, 5, V, [sj, this.za], null), new U(null, 2, 5, V, [ki, this.Ga], null), new U(null, 2, 5, V, [Ti, this.wa], null)], null), this.k));
};
g.C = function(a, b) {
  return new Vl(this.Ha, this.Ca, this.Ka, this.Ia, this.za, this.Ga, this.wa, b, this.k, this.j);
};
g.G = function(a, b) {
  return Qd(b) ? Jb(this, B.a(b, 0), B.a(b, 1)) : sb(Ab, this, b);
};
function Wl(a) {
  var b = $i.b(a);
  return w(b) ? O.i(a, Ei, new U(null, 1, 5, V, [Fi], null), L([pj, bf(T.b(function(a) {
    return function(b) {
      var e = N(b, 0);
      N(b, 1);
      N(b, 2);
      return Xc.a(a, zl(e)) ? Hl(yl(e)) : null;
    };
  }(b, b)), wf($e(ib)))], 0)) : a;
}
function Xl(a) {
  a = Wl(a);
  a = new Vl(Vi.b(a), Ei.b(a), $i.b(a), pj.b(a), sj.b(a), ki.b(a), Ti.b(a), null, Fd.i(a, Vi, L([Ei, $i, pj, sj, ki, Ti], 0)), null);
  return Sl(a);
}
function Yl(a) {
  if (1 >= M(a)) {
    return a;
  }
  var b = function(a) {
    return function(b) {
      return Bf.d(zd, bf(Qh, qf(a)), new U(null, 2, 5, V, [b, vf(Il(yl(xd(b))))], null));
    };
  }($d(ee, T.a(M, a)));
  return T.a(b, a);
}
function Zl(a) {
  return Je(T, Yf, a);
}
function $l(a) {
  return function(a) {
    return function(c, d) {
      var e = Zl(Yl(d)), e = sb(function(a, b) {
        return function(a, c) {
          var d = N(c, 0), e = he(c), f = yl(Kd(a)), e = Xf(e), d = b(new U(null, 3, 5, V, [d, f, e], null));
          return Bf.a(a, d);
        };
      }(e, a), new U(null, 1, 5, V, [new Gl(c, null, null, null)], null), e);
      return Xc.a(1, M(e)) ? e : $f(e, 1, M(e));
    };
  }(function(b) {
    return new Xe(We(a, Ue(new U(null, 1, 5, V, [b], null))), null, null, null);
  });
}
function am(a, b) {
  var c = Cd(a, b);
  return gl(c, nk.m());
}
function bm(a, b, c, d) {
  b = $l(b);
  var e = nk.b(1);
  Sj(function(b, e) {
    return function() {
      var k = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d;
                a: {
                  try {
                    for (;;) {
                      var e = a(c);
                      if (!Q(e, Z)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f, jk(c), d = Z;
                    } else {
                      throw f;
                    }
                  }
                }
                if (!Q(d, Z)) {
                  return d;
                }
              }
            }
            function c() {
              var a = [null, null, null, null, null, null, null, null, null, null, null];
              a[0] = d;
              a[1] = 1;
              return a;
            }
            var d = null, d = function(a) {
              switch(arguments.length) {
                case 0:
                  return c.call(this);
                case 1:
                  return b.call(this, a);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            d.m = c;
            d.b = b;
            return d;
          }();
        }(function(b, e) {
          return function(b) {
            var f = b[1];
            if (1 === f) {
              return f = a, b[7] = f, b[2] = null, b[1] = 2, Z;
            }
            if (2 === f) {
              return fk(b, 4, c);
            }
            if (3 === f) {
              return f = b[2], hk(b, f);
            }
            if (4 === f) {
              var h = b[8], f = b[2];
              b[8] = f;
              b[1] = w(null == f) ? 5 : 6;
              return Z;
            }
            if (5 === f) {
              return f = zj(d), b[2] = f, b[1] = 7, Z;
            }
            if (6 === f) {
              var f = b[7], k = b[9], h = b[8], f = e.a ? e.a(f, h) : e.call(null, f, h);
              b[9] = f;
              return gk(b, 8, d, f);
            }
            return 7 === f ? (f = b[2], b[2] = f, b[1] = 3, Z) : 8 === f ? (k = b[9], h = b[2], f = xd(k), f = yl(f), b[7] = f, b[10] = h, b[2] = null, b[1] = 2, Z) : null;
          };
        }(b, e), b, e);
      }(), l = function() {
        var a = k.m ? k.m() : k.call(null);
        a[6] = b;
        return a;
      }();
      return ek(l);
    };
  }(e, b));
}
function cm(a, b, c, d) {
  var e = Vd(b) ? Ie(lf, b) : b;
  b = Cd(e, Vi);
  var f = Cd(e, Ei), e = Cd(e, pj);
  a = Bf.d(new U(null, 1, 5, V, [am(a, Fi)], null), T.b(df(am, a)), f);
  a = hl(a);
  f = nk.m();
  bm(b.a ? b.a(c, d) : b.call(null, c, d), e, a, f);
  return fl(f);
}
function dm(a, b, c, d) {
  return sb(function(a, b) {
    return O.d(a, b, cm(a, b, c, d));
  }, new bb(null, 1, [Fi, b], null), a);
}
function em(a) {
  return Bf.d(S, T.b(ki), a);
}
var fm = function fm(b) {
  if (b ? b.cd : b) {
    return b.cd();
  }
  var c;
  c = fm[n(null == b ? null : b)];
  if (!c && (c = fm._, !c)) {
    throw z("LiveChannelGraphProtocol.connect-to-world", b);
  }
  return c.call(null, b);
}, gm = function gm(b) {
  if (b ? b.dd : b) {
    return b.dd();
  }
  var c;
  c = gm[n(null == b ? null : b)];
  if (!c && (c = gm._, !c)) {
    throw z("LiveChannelGraphProtocol.init", b);
  }
  return c.call(null, b);
};
function hm(a, b, c, d, e, f, h, k) {
  this.definition = a;
  this.va = b;
  this.$a = c;
  this.Ja = d;
  this.Ba = e;
  this.p = f;
  this.k = h;
  this.j = k;
  this.g = 2229667594;
  this.r = 8192;
}
g = hm.prototype;
g.w = function(a, b) {
  return Hb.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.ka : null) {
    case "definition":
      return this.definition;
    case "events-channel":
      return this.va;
    case "mult-map":
      return this.$a;
    case "output-values-mult":
      return this.Ja;
    case "opts":
      return this.Ba;
    default:
      return Dd(this.k, b, c);
  }
};
g.Eb = function() {
  return zj(this.va);
};
g.B = function(a, b, c) {
  return Ah(b, function() {
    return function(a) {
      return Ah(b, X, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.LiveChannelGraph{", ", ", "}", c, Ee.a(new U(null, 5, 5, V, [new U(null, 2, 5, V, [ni, this.definition], null), new U(null, 2, 5, V, [li, this.va], null), new U(null, 2, 5, V, [Ki, this.$a], null), new U(null, 2, 5, V, [Si, this.Ja], null), new U(null, 2, 5, V, [Zi, this.Ba], null)], null), this.k));
};
g.A = function() {
  return this.p;
};
g.I = function() {
  return 5 + M(this.k);
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ie(this);
};
g.q = function(a, b) {
  var c;
  c = w(b) ? (c = this.constructor === b.constructor) ? ig(this, b) : c : b;
  return w(c) ? !0 : !1;
};
g.cd = function() {
  for (var a = this, b = this, c = em(Ml(a.definition)), c = D(rg(c)), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.O(null, f);
      sk(function() {
        var c = a.Ba;
        return h.a ? h.a(b, c) : h.call(null, b, c);
      }(), a.va);
      f += 1;
    } else {
      if (c = D(c)) {
        d = c;
        if (Rd(d)) {
          c = sc(d), f = tc(d), d = c, e = M(c), c = f;
        } else {
          var k = G(d);
          sk(function() {
            var c = a.Ba;
            return k.a ? k.a(b, c) : k.call(null, b, c);
          }(), a.va);
          c = H(d);
          d = null;
          e = 0;
        }
        f = 0;
      } else {
        break;
      }
    }
  }
  return b;
};
g.dd = function() {
  return Vi.b(this.definition).call(null, this, this.Ba);
};
g.Fb = function(a, b, c) {
  return yj(this.va, b, c);
};
g.ya = function(a, b) {
  return Xd(new nh(null, new bb(null, 5, [li, null, ni, null, Ki, null, Si, null, Zi, null], null), null), b) ? Fd.a(td(Bf.a(S, this), this.p), b) : new hm(this.definition, this.va, this.$a, this.Ja, this.Ba, this.p, Ne(Fd.a(this.k, b)), null);
};
g.pa = function(a, b, c) {
  return w(Q.a ? Q.a(ni, b) : Q.call(null, ni, b)) ? new hm(c, this.va, this.$a, this.Ja, this.Ba, this.p, this.k, null) : w(Q.a ? Q.a(li, b) : Q.call(null, li, b)) ? new hm(this.definition, c, this.$a, this.Ja, this.Ba, this.p, this.k, null) : w(Q.a ? Q.a(Ki, b) : Q.call(null, Ki, b)) ? new hm(this.definition, this.va, c, this.Ja, this.Ba, this.p, this.k, null) : w(Q.a ? Q.a(Si, b) : Q.call(null, Si, b)) ? new hm(this.definition, this.va, this.$a, c, this.Ba, this.p, this.k, null) : w(Q.a ? Q.a(Zi, 
  b) : Q.call(null, Zi, b)) ? new hm(this.definition, this.va, this.$a, this.Ja, c, this.p, this.k, null) : new hm(this.definition, this.va, this.$a, this.Ja, this.Ba, this.p, O.d(this.k, b, c), null);
};
g.H = function() {
  return D(Ee.a(new U(null, 5, 5, V, [new U(null, 2, 5, V, [ni, this.definition], null), new U(null, 2, 5, V, [li, this.va], null), new U(null, 2, 5, V, [Ki, this.$a], null), new U(null, 2, 5, V, [Si, this.Ja], null), new U(null, 2, 5, V, [Zi, this.Ba], null)], null), this.k));
};
g.C = function(a, b) {
  return new hm(this.definition, this.va, this.$a, this.Ja, this.Ba, b, this.k, this.j);
};
g.Vc = !0;
g.Ac = function(a, b, c) {
  return vk(this.Ja, b, c);
};
g.Zb = function(a, b) {
  return wk(this.Ja, b);
};
g.G = function(a, b) {
  return Qd(b) ? Jb(this, B.a(b, 0), B.a(b, 1)) : sb(Ab, this, b);
};
var im = function im(b, c) {
  if (b ? b.Hc : b) {
    return b.Hc(b, c);
  }
  var d;
  d = im[n(null == b ? null : b)];
  if (!d && (d = im._, !d)) {
    throw z("SignalLike.spawn*", b);
  }
  return d.call(null, b, c);
}, jm = function jm(b, c, d) {
  if (b ? b.Gc : b) {
    return b.Gc(b, c, d);
  }
  var e;
  e = jm[n(null == b ? null : b)];
  if (!e && (e = jm._, !e)) {
    throw z("SignalLike.pipe-to-atom*", b);
  }
  return e.call(null, b, c, d);
}, km = T.b(bf(df(T, function(a) {
  return null == Al(a) ? Bl(a, (new Date).valueOf()) : a;
}), function(a) {
  return Od(a) ? a : null == a ? zd : new U(null, 1, 5, V, [a], null);
}));
hm.prototype.Hc = function(a, b) {
  return im(qj.b(this), b);
};
hm.prototype.Gc = function(a, b, c) {
  xl(D(c) ? ef(b, c) : df(nf, b), gl(this, nk.m()));
  return b;
};
Vl.prototype.Hc = function(a, b) {
  var c = nk.a(1, km), d = fl(c), d = dm(Ml(this), d, this, b), e = fl(gl(Cd(d, this), nk.a(1, Jl)));
  return fm(new hm(this, c, d, e, b, null, null, null));
};
Vl.prototype.Gc = function(a, b, c) {
  return jm(im(this, null), b, c);
};
if ("undefined" === typeof lm) {
  var lm = function() {
    var a = kf ? kf(S) : jf.call(null, S), b = kf ? kf(S) : jf.call(null, S), c = kf ? kf(S) : jf.call(null, S), d = kf ? kf(S) : jf.call(null, S), e = Dd(S, nj, Wh());
    return new fi(Uc("jamesmacaulay.zelkova.impl.signal", "value-source-\x3eevents-fn"), function() {
      return function(a) {
        if (a ? w(w(null) ? null : a.Vc) || (a.Hb ? 0 : x(uk, a)) : x(uk, a)) {
          a = fj;
        } else {
          if (a ? w(w(null) ? null : a.Bd) || (a.Hb ? 0 : x(wj, a)) : x(wj, a)) {
            a = ej;
          } else {
            var b = Gd(a);
            a = (b ? b : a ? a.g & 1 || a.Td || (a.g ? 0 : x(vb, a)) : x(vb, a)) ? vi : null;
          }
        }
        return a;
      };
    }(a, b, c, d, e), Ci, e, a, b, c, d);
  }()
}
hi(lm, vi, function(a, b) {
  return function(c, d) {
    var e = a.a ? a.a(c, d) : a.call(null, c, d);
    return sk(e, nk.a(1, T.b(df(El, b))));
  };
});
hi(lm, fj, function(a, b) {
  function c() {
    return gl(a, nk.m());
  }
  return lm.a ? lm.a(c, b) : lm.call(null, c, b);
});
hi(lm, ej, function(a, b) {
  var c = fl(a);
  return lm.a ? lm.a(c, b) : lm.call(null, c, b);
});
function mm(a, b) {
  return Xl(new bb(null, 3, [Vi, af(0), $i, a, ki, new vg([a, lm.a ? lm.a(b, a) : lm.call(null, b, a)])], null));
}
function nm() {
  var a = Xc.a(n(performance), "undefined") ? Date.now() : performance.now(), b = re.b(Nh()), c = nk.m();
  return Xl(new bb(null, 4, [Vi, af(a), $i, b, ki, new vg([b, lm.a ? lm.a(c, b) : lm.call(null, c, b)]), Ti, c], null));
}
function om(a) {
  return function() {
    function b(b) {
      return a.b ? a.b(b) : a.call(null, b);
    }
    function c() {
      return a.m ? a.m() : a.call(null);
    }
    var d = null, d = function(a, d) {
      switch(arguments.length) {
        case 0:
          return c.call(this);
        case 1:
          return b.call(this, a);
        case 2:
          return hd(a) ? a : new gd(a);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    d.m = c;
    d.b = b;
    d.a = function(a) {
      return hd(a) ? a : new gd(a);
    };
    return d;
  }();
}
function pm(a) {
  return Xl(new bb(null, 3, [Vi, af(a), Ei, new U(null, 1, 5, V, [Fi], null), pj, om], null));
}
function qm(a, b) {
  if (Md(b)) {
    return pm(a.m ? a.m() : a.call(null));
  }
  var c = Xf(b), d = cf(T.b(function() {
    return function(a) {
      N(a, 0);
      N(a, 1);
      return N(a, 2);
    };
  }(c)), wf(function() {
    return function(a) {
      return Ze(Cl, a);
    };
  }(c)), T.b(function() {
    return function(b) {
      return Hl(Ie(a, T.a(yl, b)));
    };
  }(c)));
  return Xl(new bb(null, 3, [Vi, function(b, c) {
    return function(d, k) {
      return Ie(a, T.a(function() {
        return function(a) {
          return Vi.b(a).call(null, d, k);
        };
      }(b, c), b));
    };
  }(c, d), Ei, c, pj, d], null));
}
function rm(a, b) {
  return qm(a, b);
}
function sm(a, b, c) {
  return Xl(new bb(null, 3, [Vi, af(b), Ei, new U(null, 1, 5, V, [c], null), pj, bf(wf(function(a) {
    N(a, 0);
    N(a, 1);
    a = N(a, 2);
    a = N(a, 0);
    return Cl(a);
  }), T.b(function(b) {
    N(b, 0);
    var c = N(b, 1);
    b = N(b, 2);
    b = N(b, 0);
    b = yl(b);
    c = a.a ? a.a(b, c) : a.call(null, b, c);
    return Hl(c);
  }))], null));
}
function tm(a) {
  return Xl(new bb(null, 3, [Vi, Vi.b(a), Ei, new U(null, 1, 5, V, [a], null), pj, bf(wf(function(a) {
    N(a, 0);
    var c = N(a, 1);
    a = N(a, 2);
    a = N(a, 0);
    var d = Cl(a);
    w(d) ? (a = yl(a), c = !Xc.a(c, a)) : c = d;
    return c;
  }), T.b(function(a) {
    N(a, 0);
    N(a, 1);
    a = N(a, 2);
    return N(a, 0);
  }))], null));
}
function um(a, b, c) {
  return sm(function(b, c) {
    return a.a ? a.a(c, b) : a.call(null, c, b);
  }, b, c);
}
function vm(a) {
  a = im(a, null);
  var b;
  b = gm(a);
  var c = new bb(null, 1, [xi, a], null);
  b = jf.d ? jf.d(b, eb, c) : jf.call(null, b, eb, c);
  return jm(a, b, null);
}
;var wm = Ed("readonly ismap class minlength for colspan usemap rowspan contenteditable maxlength novalidate tabindex".split(" "), "readOnly isMap className minLength htmlFor colSpan useMap rowSpan contentEditable maxLength noValidate tabIndex".split(" "));
function xm(a) {
  return sb(function(a, c) {
    var d = N(c, 0), e = N(c, 1), d = se(d);
    Xc.a(d, "style") ? a.attributes = {style:e} : a[wm.a ? wm.a(d, d) : wm.call(null, d, d)] = e;
    return a;
  }, {}, a);
}
;var ym;
a: {
  var zm = aa.navigator;
  if (zm) {
    var Am = zm.userAgent;
    if (Am) {
      ym = Am;
      break a;
    }
  }
  ym = "";
}
;var Bm = -1 != ym.indexOf("Opera") || -1 != ym.indexOf("OPR"), Cm = -1 != ym.indexOf("Trident") || -1 != ym.indexOf("MSIE"), Dm = -1 != ym.indexOf("Gecko") && -1 == ym.toLowerCase().indexOf("webkit") && !(-1 != ym.indexOf("Trident") || -1 != ym.indexOf("MSIE")), Em = -1 != ym.toLowerCase().indexOf("webkit");
function Fm() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var Gm = function() {
  var a = "", b;
  if (Bm && aa.opera) {
    return a = aa.opera.version, ga(a) ? a() : a;
  }
  Dm ? b = /rv\:([^\);]+)(\)|;)/ : Cm ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Em && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(ym)) ? a[1] : "");
  return Cm && (b = Fm(), b > parseFloat(a)) ? String(b) : a;
}(), Hm = {};
function Im(a) {
  var b;
  if (!(b = Hm[a])) {
    b = 0;
    for (var c = String(Gm).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var p = l.exec(h) || ["", "", ""], q = m.exec(k) || ["", "", ""];
        if (0 == p[0].length && 0 == q[0].length) {
          break;
        }
        b = Fa(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == q[1].length ? 0 : parseInt(q[1], 10)) || Fa(0 == p[2].length, 0 == q[2].length) || Fa(p[2], q[2]);
      } while (0 == b);
    }
    b = Hm[a] = 0 <= b;
  }
  return b;
}
var Jm = aa.document, Lm = Jm && Cm ? Fm() || ("CSS1Compat" == Jm.compatMode ? parseInt(Gm, 10) : 5) : void 0;
var Mm = !Cm || Cm && 9 <= Lm;
!Dm && !Cm || Cm && Cm && 9 <= Lm || Dm && Im("1.9.1");
Cm && Im("9");
function Nm(a, b) {
  Ha(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Om ? a.setAttribute(Om[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
  });
}
var Om = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Pm(a, b, c) {
  var d = arguments, e = document, f = d[0], h = d[1];
  if (!Mm && h && (h.name || h.type)) {
    f = ["\x3c", f];
    h.name && f.push(' name\x3d"', ra(h.name), '"');
    if (h.type) {
      f.push(' type\x3d"', ra(h.type), '"');
      var k = {};
      Ja(k, h);
      delete k.type;
      h = k;
    }
    f.push("\x3e");
    f = f.join("");
  }
  f = e.createElement(f);
  h && (ea(h) ? f.className = h : "array" == n(h) ? f.className = h.join(" ") : Nm(f, h));
  2 < d.length && Qm(e, f, d);
  return f;
}
function Qm(a, b, c) {
  function d(c) {
    c && b.appendChild(ea(c) ? a.createTextNode(c) : c);
  }
  for (var e = 2;e < c.length;e++) {
    var f = c[e];
    !da(f) || ha(f) && 0 < f.nodeType ? d(f) : Qa(Rm(f) ? Ra(f) : f, d);
  }
}
function Rm(a) {
  if (a && "number" == typeof a.length) {
    if (ha(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if (ga(a)) {
      return "function" == typeof a.item;
    }
  }
  return!1;
}
;var Sm = function Sm(b) {
  if (b ? b.Jc : b) {
    return b.Jc(b);
  }
  var c;
  c = Sm[n(null == b ? null : b)];
  if (!c && (c = Sm._, !c)) {
    throw z("IDOMBuilder.-node", b);
  }
  return c.call(null, b);
};
Sm._ = function(a) {
  a = "" + A(a);
  return document.createTextNode(String(a));
};
Sm.string = function(a) {
  return document.createTextNode(String(a));
};
Node.prototype.Jc = function() {
  return this;
};
var uf = bf(function(a) {
  return a instanceof P;
}, G);
function Tm(a) {
  return Xf(yf(ib, Af(a)));
}
function Um(a) {
  if ("string" === typeof a) {
    var b = /\s+/;
    a = Xc.a("" + A(b), "/(?:)/") ? yd.a(Xf(J("", T.a(A, D(a)))), "") : Xf(("" + A(a)).split(b));
    if (Xc.a(0, 0)) {
      a: {
        for (;;) {
          if (Xc.a("", Kd(a))) {
            a = null == a ? null : Sb(a);
          } else {
            break a;
          }
        }
      }
    }
    a = th(a);
  } else {
    a = Nd(a) ? a : Od(a) ? th(a) : ph;
  }
  return a;
}
function Vm(a, b) {
  var c;
  c = Xi.b(a);
  c = w(c) ? c : Xi.b(b);
  if (w(c)) {
    c = Um(Xi.b(a));
    var d = Um(Xi.b(b));
    a: {
      for (d = ol.a(c, d), c = new La, d = D(d);;) {
        if (d) {
          c.append("" + A(G(d))), d = H(d), null != d && c.append(" ");
        } else {
          c = c.toString();
          break a;
        }
      }
    }
    return O.d(Bf.a(a, b), Xi, c);
  }
  return Bf.a(a, b);
}
function Wm(a, b, c, d, e, f) {
  this.tag = a;
  this.xa = b;
  this.children = c;
  this.p = d;
  this.k = e;
  this.j = f;
  this.g = 2229667595;
  this.r = 8192;
}
g = Wm.prototype;
g.w = function(a, b) {
  return Hb.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.ka : null) {
    case "tag":
      return this.tag;
    case "attrs":
      return this.xa;
    case "children":
      return this.children;
    default:
      return Dd(this.k, b, c);
  }
};
g.B = function(a, b, c) {
  return Ah(b, function() {
    return function(a) {
      return Ah(b, X, "", " ", "", c, a);
    };
  }(this), "#stch.html.Element{", ", ", "}", c, Ee.a(new U(null, 3, 5, V, [new U(null, 2, 5, V, [kj, this.tag], null), new U(null, 2, 5, V, [gj, this.xa], null), new U(null, 2, 5, V, [pi, this.children], null)], null), this.k));
};
g.A = function() {
  return this.p;
};
g.I = function() {
  return 3 + M(this.k);
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ie(this);
};
g.q = function(a, b) {
  var c;
  c = w(b) ? (c = this.constructor === b.constructor) ? ig(this, b) : c : b;
  return w(c) ? !0 : !1;
};
g.Jc = function() {
  if (D(this.children)) {
    return Ke(Pm, this.tag, Uh(this.xa), T.a(Sm, this.children));
  }
  var a = this.tag, b = Uh(this.xa);
  return Pm(a, b);
};
g.ya = function(a, b) {
  return Xd(new nh(null, new bb(null, 3, [pi, null, gj, null, kj, null], null), null), b) ? Fd.a(td(Bf.a(S, this), this.p), b) : new Wm(this.tag, this.xa, this.children, this.p, Ne(Fd.a(this.k, b)), null);
};
g.pa = function(a, b, c) {
  return w(Q.a ? Q.a(kj, b) : Q.call(null, kj, b)) ? new Wm(c, this.xa, this.children, this.p, this.k, null) : w(Q.a ? Q.a(gj, b) : Q.call(null, gj, b)) ? new Wm(this.tag, c, this.children, this.p, this.k, null) : w(Q.a ? Q.a(pi, b) : Q.call(null, pi, b)) ? new Wm(this.tag, this.xa, c, this.p, this.k, null) : new Wm(this.tag, this.xa, this.children, this.p, O.d(this.k, b, c), null);
};
g.H = function() {
  return D(Ee.a(new U(null, 3, 5, V, [new U(null, 2, 5, V, [kj, this.tag], null), new U(null, 2, 5, V, [gj, this.xa], null), new U(null, 2, 5, V, [pi, this.children], null)], null), this.k));
};
g.C = function(a, b) {
  return new Wm(this.tag, this.xa, this.children, b, this.k, this.j);
};
g.G = function(a, b) {
  return Qd(b) ? Jb(this, B.a(b, 0), B.a(b, 1)) : sb(Ab, this, b);
};
g.call = function() {
  function a(a, d) {
    a = this;
    var e = null;
    if (1 < arguments.length) {
      for (var e = 0, f = Array(arguments.length - 1);e < f.length;) {
        f[e] = arguments[e + 1], ++e;
      }
      e = new E(f, 0);
    }
    return b.call(this, 0, e);
  }
  function b(a, b) {
    var e = Xm.b ? Xm.b(b) : Xm.call(null, b), f = N(e, 0), e = N(e, 1);
    return new Wm(this.tag, Vm(this.xa, f), Bf.a(this.children, e), null, null, null);
  }
  a.v = 1;
  a.t = function(a) {
    G(a);
    a = Vc(a);
    return b(0, a);
  };
  a.i = b;
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ob(b)));
};
g.a = function() {
  function a(a) {
    var d = null;
    if (0 < arguments.length) {
      for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
        e[d] = arguments[d + 0], ++d;
      }
      d = new E(e, 0);
    }
    return b.call(this, d);
  }
  function b(a) {
    var b = Xm.b ? Xm.b(a) : Xm.call(null, a);
    a = N(b, 0);
    b = N(b, 1);
    return new Wm(this.tag, Vm(this.xa, a), Bf.a(this.children, b), null, null, null);
  }
  a.v = 0;
  a.t = function(a) {
    a = D(a);
    return b(a);
  };
  a.i = b;
  return a;
}();
function Xm(a) {
  var b = N(a, 0), c = he(a);
  return b instanceof Wm ? new U(null, 2, 5, V, [S, Tm(a)], null) : b instanceof P ? (a = Df(2, 2, new U(null, 1, 5, V, [null], null), a), b = new U(null, 2, 5, V, [xh(uf, a), tf(a)], null), a = N(b, 0), b = N(b, 1), new U(null, 2, 5, V, [Bf.a(S, T.a(Xf, a)), Tm(b)], null)) : Pd(b) ? new U(null, 2, 5, V, [b, Tm(c)], null) : new U(null, 2, 5, V, [S, Tm(a)], null);
}
function Ym(a) {
  return function() {
    function b(a) {
      var b = null;
      if (0 < arguments.length) {
        for (var b = 0, f = Array(arguments.length - 0);b < f.length;) {
          f[b] = arguments[b + 0], ++b;
        }
        b = new E(f, 0);
      }
      return c.call(this, b);
    }
    function c(b) {
      return Ie(new Wm(a, S, zd, null, null, null), b);
    }
    b.v = 0;
    b.t = function(a) {
      a = D(a);
      return c(a);
    };
    b.i = c;
    return b;
  }();
}
var Zm = Ym("div"), Mn = Ym("img");
var Nn = VDOM.VNode, On = VDOM.VText, Pn = VDOM.create, Qn = VDOM.patch, Rn = VDOM.diff, Sn = function Sn(b) {
  if (b ? b.$c : b) {
    return b.$c();
  }
  var c;
  c = Sn[n(null == b ? null : b)];
  if (!c && (c = Sn._, !c)) {
    throw z("VDOMBuilder.-vtree", b);
  }
  return c.call(null, b);
};
Sn.string = function(a) {
  return new On(a);
};
Wm.prototype.$c = function() {
  return new Nn(se(this.tag), xm(this.xa), Uh(T.a(Sn, this.children)));
};
Sn._ = function(a) {
  return new On(a.toString());
};
function Tn(a) {
  return Od(a) ? new Nn("div", {}, Uh(T.a(Sn, a))) : Sn(a);
}
function Un(a, b, c, d, e) {
  this.ua = a;
  this.pb = b;
  this.p = c;
  this.k = d;
  this.j = e;
  this.g = 2229667594;
  this.r = 8192;
}
g = Un.prototype;
g.w = function(a, b) {
  return Hb.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.ka : null) {
    case "tree":
      return this.ua;
    case "root-node":
      return this.pb;
    default:
      return Dd(this.k, b, c);
  }
};
g.B = function(a, b, c) {
  return Ah(b, function() {
    return function(a) {
      return Ah(b, X, "", " ", "", c, a);
    };
  }(this), "#dominator.core.VDOM{", ", ", "}", c, Ee.a(new U(null, 2, 5, V, [new U(null, 2, 5, V, [wi, this.ua], null), new U(null, 2, 5, V, [rj, this.pb], null)], null), this.k));
};
g.A = function() {
  return this.p;
};
g.I = function() {
  return 2 + M(this.k);
};
g.F = function() {
  var a = this.j;
  return null != a ? a : this.j = a = ie(this);
};
g.q = function(a, b) {
  var c;
  c = w(b) ? (c = this.constructor === b.constructor) ? ig(this, b) : c : b;
  return w(c) ? !0 : !1;
};
g.ya = function(a, b) {
  return Xd(new nh(null, new bb(null, 2, [wi, null, rj, null], null), null), b) ? Fd.a(td(Bf.a(S, this), this.p), b) : new Un(this.ua, this.pb, this.p, Ne(Fd.a(this.k, b)), null);
};
g.pa = function(a, b, c) {
  return w(Q.a ? Q.a(wi, b) : Q.call(null, wi, b)) ? new Un(c, this.pb, this.p, this.k, null) : w(Q.a ? Q.a(rj, b) : Q.call(null, rj, b)) ? new Un(this.ua, c, this.p, this.k, null) : new Un(this.ua, this.pb, this.p, O.d(this.k, b, c), null);
};
g.H = function() {
  return D(Ee.a(new U(null, 2, 5, V, [new U(null, 2, 5, V, [wi, this.ua], null), new U(null, 2, 5, V, [rj, this.pb], null)], null), this.k));
};
g.C = function(a, b) {
  return new Un(this.ua, this.pb, b, this.k, this.j);
};
g.G = function(a, b) {
  return Qd(b) ? Jb(this, B.a(b, 0), B.a(b, 1)) : sb(Ab, this, b);
};
function Vn(a) {
  return function(b) {
    return function(c) {
      var d = Tn(c), e = I.b ? I.b(b) : I.call(null, b);
      if (null == e) {
        return c = Pn.b ? Pn.b(d) : Pn.call(null, d), a.appendChild(c), c = new Un(d, c, null, null, null), nf.a ? nf.a(b, c) : nf.call(null, b, c);
      }
      var f = function() {
        var a = e.ua;
        return Rn.a ? Rn.a(a, d) : Rn.call(null, a, d);
      }();
      c = function() {
        var a = e.pb;
        return Qn.a ? Qn.a(a, f) : Qn.call(null, a, f);
      }();
      c = new Un(d, c, null, null, null);
      return nf.a ? nf.a(b, c) : nf.call(null, b, c);
    };
  }(kf ? kf(null) : jf.call(null, null));
}
function Wn(a) {
  return window.requestAnimationFrame(a);
}
;var Xn = !Cm || Cm && 9 <= Lm, Yn = Cm && !Im("9");
!Em || Im("528");
Dm && Im("1.9b") || Cm && Im("8") || Bm && Im("9.5") || Em && Im("528");
Dm && !Im("8") || Cm && Im("9");
function Zn(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.Ic = !1;
}
Zn.prototype.stopPropagation = function() {
  this.Ic = !0;
};
Zn.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
};
function $n(a) {
  $n[" "](a);
  return a;
}
$n[" "] = function() {
};
function ao(a, b) {
  Zn.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.ac = this.state = null;
  if (a) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
      if (Dm) {
        var e;
        a: {
          try {
            $n(d.nodeName);
            e = !0;
            break a;
          } catch (f) {
          }
          e = !1;
        }
        e || (d = null);
      }
    } else {
      "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    }
    this.relatedTarget = d;
    this.offsetX = Em || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = Em || void 0 !== a.offsetY ? a.offsetY : a.layerY;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.state = a.state;
    this.ac = a;
    a.defaultPrevented && this.preventDefault();
  }
}
(function() {
  function a() {
  }
  a.prototype = Zn.prototype;
  ao.gd = Zn.prototype;
  ao.prototype = new a;
  ao.prototype.constructor = ao;
  ao.hc = function(a, c, d) {
    return Zn.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
})();
ao.prototype.stopPropagation = function() {
  ao.gd.stopPropagation.call(this);
  this.ac.stopPropagation ? this.ac.stopPropagation() : this.ac.cancelBubble = !0;
};
ao.prototype.preventDefault = function() {
  ao.gd.preventDefault.call(this);
  var a = this.ac;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Yn) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var bo = "closure_listenable_" + (1E6 * Math.random() | 0), co = 0;
function eo(a, b, c, d, e) {
  this.Mb = a;
  this.rc = null;
  this.src = b;
  this.type = c;
  this.uc = !!d;
  this.ib = e;
  this.key = ++co;
  this.fc = this.tc = !1;
}
function fo(a) {
  a.fc = !0;
  a.Mb = null;
  a.rc = null;
  a.src = null;
  a.ib = null;
}
;function go(a) {
  this.src = a;
  this.Ya = {};
  this.sc = 0;
}
go.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.Ya[f];
  a || (a = this.Ya[f] = [], this.sc++);
  var h = ho(a, b, d, e);
  -1 < h ? (b = a[h], c || (b.tc = !1)) : (b = new eo(b, this.src, f, !!d, e), b.tc = c, a.push(b));
  return b;
};
go.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.Ya)) {
    return!1;
  }
  var e = this.Ya[a];
  b = ho(e, b, c, d);
  return-1 < b ? (fo(e[b]), Ma.splice.call(e, b, 1), 0 == e.length && (delete this.Ya[a], this.sc--), !0) : !1;
};
function ho(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.fc && f.Mb == b && f.uc == !!c && f.ib == d) {
      return e;
    }
  }
  return-1;
}
;var io = "closure_lm_" + (1E6 * Math.random() | 0), jo = {}, ko = 0;
function lo(a, b, c, d, e) {
  if ("array" == n(b)) {
    for (var f = 0;f < b.length;f++) {
      lo(a, b[f], c, d, e);
    }
  } else {
    if (c = mo(c), a && a[bo]) {
      a.$d(b, c, d, e);
    } else {
      if (!b) {
        throw Error("Invalid event type");
      }
      var f = !!d, h = no(a);
      h || (a[io] = h = new go(a));
      c = h.add(b, c, !1, d, e);
      c.rc || (d = oo(), c.rc = d, d.src = a, d.Mb = c, a.addEventListener ? a.addEventListener(b.toString(), d, f) : a.attachEvent(po(b.toString()), d), ko++);
    }
  }
}
function oo() {
  var a = qo, b = Xn ? function(c) {
    return a.call(b.src, b.Mb, c);
  } : function(c) {
    c = a.call(b.src, b.Mb, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function po(a) {
  return a in jo ? jo[a] : jo[a] = "on" + a;
}
function ro(a, b, c, d) {
  var e = 1;
  if (a = no(a)) {
    if (b = a.Ya[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.uc == c && !f.fc && (e &= !1 !== so(f, d));
      }
    }
  }
  return Boolean(e);
}
function so(a, b) {
  var c = a.Mb, d = a.ib || a.src;
  if (a.tc && "number" != typeof a && a && !a.fc) {
    var e = a.src;
    if (e && e[bo]) {
      e.ae(a);
    } else {
      var f = a.type, h = a.rc;
      e.removeEventListener ? e.removeEventListener(f, h, a.uc) : e.detachEvent && e.detachEvent(po(f), h);
      ko--;
      if (f = no(e)) {
        var h = a.type, k;
        if (k = h in f.Ya) {
          k = f.Ya[h];
          var l = Pa(k, a), m;
          (m = 0 <= l) && Ma.splice.call(k, l, 1);
          k = m;
        }
        k && (fo(a), 0 == f.Ya[h].length && (delete f.Ya[h], f.sc--));
        0 == f.sc && (f.src = null, e[io] = null);
      } else {
        fo(a);
      }
    }
  }
  return c.call(d, b);
}
function qo(a, b) {
  if (a.fc) {
    return!0;
  }
  if (!Xn) {
    var c;
    if (!(c = b)) {
      a: {
        c = ["window", "event"];
        for (var d = aa, e;e = c.shift();) {
          if (null != d[e]) {
            d = d[e];
          } else {
            c = null;
            break a;
          }
        }
        c = d;
      }
    }
    e = c;
    c = new ao(e, this);
    d = !0;
    if (!(0 > e.keyCode || void 0 != e.returnValue)) {
      a: {
        var f = !1;
        if (0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a;
          } catch (h) {
            f = !0;
          }
        }
        if (f || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
      e = [];
      for (f = c.currentTarget;f;f = f.parentNode) {
        e.push(f);
      }
      for (var f = a.type, k = e.length - 1;!c.Ic && 0 <= k;k--) {
        c.currentTarget = e[k], d &= ro(e[k], f, !0, c);
      }
      for (k = 0;!c.Ic && k < e.length;k++) {
        c.currentTarget = e[k], d &= ro(e[k], f, !1, c);
      }
    }
    return d;
  }
  return so(a, new ao(b, this));
}
function no(a) {
  a = a[io];
  return a instanceof go ? a : null;
}
var to = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function mo(a) {
  if (ga(a)) {
    return a;
  }
  a[to] || (a[to] = function(b) {
    return a.handleEvent(b);
  });
  return a[to];
}
;function uo() {
  return vo(arguments[0], arguments[1], 2 < arguments.length ? new E(Array.prototype.slice.call(arguments, 2), 0) : null);
}
function vo(a, b, c) {
  c = Je(nk, 1, c);
  lo(a, b, function(a, b, c) {
    return function(a) {
      return qk(c, a);
    };
  }(a, b, c));
  return c;
}
var wo = mm(Ui, function() {
  return uo(document, "keydown");
}), xo = mm(Ii, function() {
  return uo(document, "keyup");
}), yo = mm(Li, function() {
  return uo(window, "blur");
}), zo = new bb(null, 3, [tj, !1, qi, !1, mi, ph], null);
if ("undefined" === typeof Ao) {
  var Ao = function() {
    var a = kf ? kf(S) : jf.call(null, S), b = kf ? kf(S) : jf.call(null, S), c = kf ? kf(S) : jf.call(null, S), d = kf ? kf(S) : jf.call(null, S), e = Dd(S, nj, Wh());
    return new fi(Uc("jamesmacaulay.zelkova.keyboard", "event-action"), function() {
      return function(a, b) {
        return b.type;
      };
    }(a, b, c, d, e), Ci, e, a, b, c, d);
  }()
}
hi(Ao, "keydown", function(a, b) {
  return O.i(Ef.s(a, new U(null, 1, 5, V, [mi], null), yd, b.keyCode), Bi, b.altKey, L([eb, b.metaKey], 0));
});
hi(Ao, "keyup", function(a, b) {
  return O.i(Ef.s(a, new U(null, 1, 5, V, [mi], null), Ld, b.keyCode), Bi, b.altKey, L([eb, b.metaKey], 0));
});
hi(Ao, "blur", function() {
  return zo;
});
var Bo = Ao, Co;
Co = function(a) {
  return Xl(new bb(null, 3, [Vi, Vi.b(G(a)), Ei, a, pj, bf(T.b(function(a) {
    N(a, 0);
    N(a, 1);
    a = N(a, 2);
    return G(xf(Cl, a));
  }), wf($e(ib)))], null));
}(L([wo, xo, yo], 0));
var Do = um(Bo, zo, Co);
function Eo(a) {
  return tm(rm(a, L([Do], 0)));
}
Eo(mi);
function Fo(a, b, c, d) {
  return Eo(function(e) {
    e = Vd(e) ? Ie(lf, e) : e;
    e = Cd(e, mi);
    return new bb(null, 2, [jj, (w(e.b ? e.b(d) : e.call(null, d)) ? 1 : 0) + (w(e.b ? e.b(c) : e.call(null, c)) ? -1 : 0), ii, (w(e.b ? e.b(a) : e.call(null, a)) ? 1 : 0) + (w(e.b ? e.b(b) : e.call(null, b)) ? -1 : 0)], null);
  });
}
var Go = Fo(38, 40, 37, 39);
Fo(87, 83, 65, 68);
function Ho(a) {
  Eo(function(b) {
    b = Vd(b) ? Ie(lf, b) : b;
    b = Cd(b, mi);
    return Wd(b.b ? b.b(a) : b.call(null, a));
  });
}
Eo(Bi);
Eo(eb);
Ho(17);
Ho(16);
Ho(32);
Ho(13);
rm(function(a) {
  return a.keyCode;
}, L([wo], 0));
var Wa = !1, Va = function() {
  function a(a) {
    var d = null;
    if (0 < arguments.length) {
      for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
        e[d] = arguments[d + 0], ++d;
      }
      d = new E(e, 0);
    }
    return b.call(this, d);
  }
  function b(a) {
    return console.log.apply(console, rb ? qb(a) : pb.call(null, a));
  }
  a.v = 0;
  a.t = function(a) {
    a = D(a);
    return b(a);
  };
  a.i = b;
  return a;
}(), Io;
Io = !Xc.a(navigator.userAgent.indexOf("Firefox"), -1);
var Jo = new bb(null, 5, [jj, 100, ii, 550, zi, 0, Ji, 0, Ai, "right"], null), Ko = w(Io) ? 510 : 508;
function Lo(a) {
  if (!Xc.a(zi.b(a), 0)) {
    var b = zi.b(a);
    a = Math.abs(b) <= (w(0 < ii.b(a)) ? .02 : .08) ? O.d(a, zi, 0) : 0 < zi.b(a) ? O.d(a, zi, zi.b(a) - (w(0 < ii.b(a)) ? .02 : .08)) : 0 > zi.b(a) ? O.d(a, zi, zi.b(a) + (w(0 < ii.b(a)) ? .02 : .08)) : null;
  }
  return a;
}
function Mo(a) {
  return 3 + 1 * Math.abs(a);
}
function No(a, b) {
  var c = Vd(a) ? Ie(lf, a) : a, c = Cd(c, jj);
  if (0 > c) {
    var d = 0 < zi.b(b) ? Lo(b) : b, c = function() {
      var a = zi.b(d) - (w(0 < ii.b(d)) ? .02 : .03);
      return-5 > a ? -5 : a;
    }();
    return O.i(d, zi, c, L([Ai, "left"], 0));
  }
  return 0 < c ? (d = 0 > zi.b(b) ? Lo(b) : b, c = function() {
    var a = zi.b(d) + (w(0 < ii.b(d)) ? .02 : .03);
    return 5 < a ? 5 : a;
  }(), O.i(d, zi, c, L([Ai, "right"], 0))) : Lo(b);
}
var Oo = function(a, b) {
  return Xl(new bb(null, 3, [Vi, Vi.b(b), Ei, new U(null, 2, 5, V, [a, b], null), pj, bf(T.b(function(a) {
    N(a, 0);
    N(a, 1);
    var b = N(a, 2);
    a = N(b, 0);
    b = N(b, 1);
    return w(Cl(a)) ? Hl(yl(b)) : null;
  }), wf($e(ib)))], null));
}(function() {
  var a = nm();
  Wn(function(a) {
    return function d(e) {
      qk(a, e);
      return Wn(d);
    };
  }(a));
  return a;
}(), Go), Po = tm(um(function(a, b) {
  var c;
  c = Vd(b) ? Ie(lf, b) : b;
  c = 0 < Cd(c, ii) && kb(0 < ii.b(a)) ? O.d(a, Ji, Mo(zi.b(a))) : a;
  c = No(b, c);
  c = ii.b(c) <= -Ji.b(c) ? O.i(c, ii, 0, L([Ji, 0], 0)) : O.i(c, ii, ii.b(c) + Ji.b(c), L([Ji, -5 >= Ji.b(c) ? -5 : Ji.b(c) - .2], 0));
  return O.i(c, jj, jj.b(c) + zi.b(c), L([ii, ii.b(c) + Ji.b(c)], 0));
}, Jo, Oo));
(function(a, b) {
  var c = vm(a), d = Vn(b);
  return Wn(function(a, b) {
    return function k() {
      var c = I.b ? I.b(a) : I.call(null, a);
      b.b ? b.b(c) : b.call(null, c);
      return Wn(k);
    };
  }(c, d));
})(rm(function(a) {
  Lh.i(L([a], 0));
  var b;
  b = w(0 < ii.b(a)) ? "jump" : Xc.a(zi.b(a), 0) ? "stand" : "walk";
  var c = Ai.b(a);
  b = [A("images/mario/"), A(b), A("/"), A(c), A(".gif")].join("");
  c = jj.b(a);
  a = Ko - ii.b(a);
  a = [A("left: "), A(c), A("px; top: "), A(a), A("px;")].join("");
  a = Mn.R ? Mn.R(Wi, "mario", Ni, b, Ri, a) : Mn.call(null, Wi, "mario", Ni, b, Ri, a);
  b = Zm.a ? Zm.a(Wi, "ground") : Zm.call(null, Wi, "ground");
  return Zm.s ? Zm.s(Wi, "world", a, b) : Zm.call(null, Wi, "world", a, b);
}, L([Po], 0)), document.body);

})();

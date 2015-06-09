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
var ia = "closure_uid_" + (1E9 * Math.random() >>> 0), ka = 0;
function la(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function na(a, b, c) {
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
function oa(a, b, c) {
  oa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : na;
  return oa.apply(null, arguments);
}
;function pa(a) {
  if (!qa.test(a)) {
    return a;
  }
  -1 != a.indexOf("\x26") && (a = a.replace(ra, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(sa, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(wa, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(xa, "\x26quot;"));
  -1 != a.indexOf("'") && (a = a.replace(za, "\x26#39;"));
  -1 != a.indexOf("\x00") && (a = a.replace(Aa, "\x26#0;"));
  return a;
}
var ra = /&/g, sa = /</g, wa = />/g, xa = /"/g, za = /'/g, Aa = /\x00/g, qa = /[\x00&<>"']/;
function Da(a) {
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
var Wa = null;
if ("undefined" === typeof Za) {
  var Za = null
}
function $a() {
  return new ab(null, 5, [bb, !0, cb, !0, db, !1, eb, !1, fb, null], null);
}
function w(a) {
  return null != a && !1 !== a;
}
function hb(a) {
  return null == a;
}
function ib(a) {
  return a instanceof Array;
}
function jb(a) {
  return w(a) ? !1 : !0;
}
function y(a, b) {
  return a[n(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function kb(a) {
  return null == a ? null : a.constructor;
}
function z(a, b) {
  var c = kb(b), c = w(w(c) ? c.Ib : c) ? c.Gb : n(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function lb(a) {
  var b = a.Gb;
  return w(b) ? b : "" + A(a);
}
var mb = "undefined" !== typeof Symbol && "function" === n(Symbol) ? Symbol.iterator : "@@iterator";
function nb(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
function ob() {
  switch(arguments.length) {
    case 1:
      return pb(arguments[0]);
    case 2:
      return pb(arguments[1]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function qb(a) {
  return pb(a);
}
function pb(a) {
  function b(a, b) {
    a.push(b);
    return a;
  }
  var c = [];
  return rb ? rb(b, c, a) : sb.call(null, b, c, a);
}
var tb = {}, ub = {}, vb = {}, wb = function wb(b) {
  if (b ? b.I : b) {
    return b.I(b);
  }
  var c;
  c = wb[n(null == b ? null : b)];
  if (!c && (c = wb._, !c)) {
    throw z("ICounted.-count", b);
  }
  return c.call(null, b);
}, xb = function xb(b) {
  if (b ? b.Q : b) {
    return b.Q(b);
  }
  var c;
  c = xb[n(null == b ? null : b)];
  if (!c && (c = xb._, !c)) {
    throw z("IEmptyableCollection.-empty", b);
  }
  return c.call(null, b);
}, yb = {}, zb = function zb(b, c) {
  if (b ? b.G : b) {
    return b.G(b, c);
  }
  var d;
  d = zb[n(null == b ? null : b)];
  if (!d && (d = zb._, !d)) {
    throw z("ICollection.-conj", b);
  }
  return d.call(null, b, c);
}, Ab = {}, B = function B() {
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
var Bb = {}, Cb = function Cb(b) {
  if (b ? b.U : b) {
    return b.U(b);
  }
  var c;
  c = Cb[n(null == b ? null : b)];
  if (!c && (c = Cb._, !c)) {
    throw z("ISeq.-first", b);
  }
  return c.call(null, b);
}, Db = function Db(b) {
  if (b ? b.ma : b) {
    return b.ma(b);
  }
  var c;
  c = Db[n(null == b ? null : b)];
  if (!c && (c = Db._, !c)) {
    throw z("ISeq.-rest", b);
  }
  return c.call(null, b);
}, Eb = {}, Fb = {}, Gb = function Gb() {
  switch(arguments.length) {
    case 2:
      return Gb.a(arguments[0], arguments[1]);
    case 3:
      return Gb.d(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
Gb.a = function(a, b) {
  if (a ? a.w : a) {
    return a.w(a, b);
  }
  var c;
  c = Gb[n(null == a ? null : a)];
  if (!c && (c = Gb._, !c)) {
    throw z("ILookup.-lookup", a);
  }
  return c.call(null, a, b);
};
Gb.d = function(a, b, c) {
  if (a ? a.t : a) {
    return a.t(a, b, c);
  }
  var d;
  d = Gb[n(null == a ? null : a)];
  if (!d && (d = Gb._, !d)) {
    throw z("ILookup.-lookup", a);
  }
  return d.call(null, a, b, c);
};
Gb.v = 3;
var Hb = function Hb(b, c) {
  if (b ? b.kc : b) {
    return b.kc(b, c);
  }
  var d;
  d = Hb[n(null == b ? null : b)];
  if (!d && (d = Hb._, !d)) {
    throw z("IAssociative.-contains-key?", b);
  }
  return d.call(null, b, c);
}, Ib = function Ib(b, c, d) {
  if (b ? b.pa : b) {
    return b.pa(b, c, d);
  }
  var e;
  e = Ib[n(null == b ? null : b)];
  if (!e && (e = Ib._, !e)) {
    throw z("IAssociative.-assoc", b);
  }
  return e.call(null, b, c, d);
}, Jb = {}, Kb = function Kb(b, c) {
  if (b ? b.ya : b) {
    return b.ya(b, c);
  }
  var d;
  d = Kb[n(null == b ? null : b)];
  if (!d && (d = Kb._, !d)) {
    throw z("IMap.-dissoc", b);
  }
  return d.call(null, b, c);
}, Lb = {}, Mb = function Mb(b) {
  if (b ? b.Tb : b) {
    return b.Tb(b);
  }
  var c;
  c = Mb[n(null == b ? null : b)];
  if (!c && (c = Mb._, !c)) {
    throw z("IMapEntry.-key", b);
  }
  return c.call(null, b);
}, Nb = function Nb(b) {
  if (b ? b.Ub : b) {
    return b.Ub(b);
  }
  var c;
  c = Nb[n(null == b ? null : b)];
  if (!c && (c = Nb._, !c)) {
    throw z("IMapEntry.-val", b);
  }
  return c.call(null, b);
}, Ob = {}, Pb = function Pb(b, c) {
  if (b ? b.zc : b) {
    return b.zc(b, c);
  }
  var d;
  d = Pb[n(null == b ? null : b)];
  if (!d && (d = Pb._, !d)) {
    throw z("ISet.-disjoin", b);
  }
  return d.call(null, b, c);
}, Qb = function Qb(b) {
  if (b ? b.sb : b) {
    return b.sb(b);
  }
  var c;
  c = Qb[n(null == b ? null : b)];
  if (!c && (c = Qb._, !c)) {
    throw z("IStack.-peek", b);
  }
  return c.call(null, b);
}, Rb = function Rb(b) {
  if (b ? b.tb : b) {
    return b.tb(b);
  }
  var c;
  c = Rb[n(null == b ? null : b)];
  if (!c && (c = Rb._, !c)) {
    throw z("IStack.-pop", b);
  }
  return c.call(null, b);
}, Sb = {}, Tb = function Tb(b, c, d) {
  if (b ? b.wb : b) {
    return b.wb(b, c, d);
  }
  var e;
  e = Tb[n(null == b ? null : b)];
  if (!e && (e = Tb._, !e)) {
    throw z("IVector.-assoc-n", b);
  }
  return e.call(null, b, c, d);
}, Ub = function Ub(b) {
  if (b ? b.Bb : b) {
    return b.Bb(b);
  }
  var c;
  c = Ub[n(null == b ? null : b)];
  if (!c && (c = Ub._, !c)) {
    throw z("IDeref.-deref", b);
  }
  return c.call(null, b);
}, Vb = {}, Wb = function Wb(b) {
  if (b ? b.A : b) {
    return b.A(b);
  }
  var c;
  c = Wb[n(null == b ? null : b)];
  if (!c && (c = Wb._, !c)) {
    throw z("IMeta.-meta", b);
  }
  return c.call(null, b);
}, Xb = {}, Yb = function Yb(b, c) {
  if (b ? b.C : b) {
    return b.C(b, c);
  }
  var d;
  d = Yb[n(null == b ? null : b)];
  if (!d && (d = Yb._, !d)) {
    throw z("IWithMeta.-with-meta", b);
  }
  return d.call(null, b, c);
}, Zb = {}, $b = function $b() {
  switch(arguments.length) {
    case 2:
      return $b.a(arguments[0], arguments[1]);
    case 3:
      return $b.d(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
$b.a = function(a, b) {
  if (a ? a.S : a) {
    return a.S(a, b);
  }
  var c;
  c = $b[n(null == a ? null : a)];
  if (!c && (c = $b._, !c)) {
    throw z("IReduce.-reduce", a);
  }
  return c.call(null, a, b);
};
$b.d = function(a, b, c) {
  if (a ? a.T : a) {
    return a.T(a, b, c);
  }
  var d;
  d = $b[n(null == a ? null : a)];
  if (!d && (d = $b._, !d)) {
    throw z("IReduce.-reduce", a);
  }
  return d.call(null, a, b, c);
};
$b.v = 3;
var ac = function ac(b, c) {
  if (b ? b.q : b) {
    return b.q(b, c);
  }
  var d;
  d = ac[n(null == b ? null : b)];
  if (!d && (d = ac._, !d)) {
    throw z("IEquiv.-equiv", b);
  }
  return d.call(null, b, c);
}, bc = function bc(b) {
  if (b ? b.F : b) {
    return b.F(b);
  }
  var c;
  c = bc[n(null == b ? null : b)];
  if (!c && (c = bc._, !c)) {
    throw z("IHash.-hash", b);
  }
  return c.call(null, b);
}, cc = {}, dc = function dc(b) {
  if (b ? b.H : b) {
    return b.H(b);
  }
  var c;
  c = dc[n(null == b ? null : b)];
  if (!c && (c = dc._, !c)) {
    throw z("ISeqable.-seq", b);
  }
  return c.call(null, b);
}, ec = {}, fc = {}, gc = function gc(b) {
  if (b ? b.Db : b) {
    return b.Db(b);
  }
  var c;
  c = gc[n(null == b ? null : b)];
  if (!c && (c = gc._, !c)) {
    throw z("IReversible.-rseq", b);
  }
  return c.call(null, b);
}, hc = function hc(b, c) {
  if (b ? b.Uc : b) {
    return b.Uc(0, c);
  }
  var d;
  d = hc[n(null == b ? null : b)];
  if (!d && (d = hc._, !d)) {
    throw z("IWriter.-write", b);
  }
  return d.call(null, b, c);
}, ic = {}, jc = function jc(b, c, d) {
  if (b ? b.B : b) {
    return b.B(b, c, d);
  }
  var e;
  e = jc[n(null == b ? null : b)];
  if (!e && (e = jc._, !e)) {
    throw z("IPrintWithWriter.-pr-writer", b);
  }
  return e.call(null, b, c, d);
}, kc = function kc(b, c, d) {
  if (b ? b.Tc : b) {
    return b.Tc(0, c, d);
  }
  var e;
  e = kc[n(null == b ? null : b)];
  if (!e && (e = kc._, !e)) {
    throw z("IWatchable.-notify-watches", b);
  }
  return e.call(null, b, c, d);
}, lc = function lc(b) {
  if (b ? b.Cb : b) {
    return b.Cb(b);
  }
  var c;
  c = lc[n(null == b ? null : b)];
  if (!c && (c = lc._, !c)) {
    throw z("IEditableCollection.-as-transient", b);
  }
  return c.call(null, b);
}, mc = function mc(b, c) {
  if (b ? b.ub : b) {
    return b.ub(b, c);
  }
  var d;
  d = mc[n(null == b ? null : b)];
  if (!d && (d = mc._, !d)) {
    throw z("ITransientCollection.-conj!", b);
  }
  return d.call(null, b, c);
}, nc = function nc(b) {
  if (b ? b.vb : b) {
    return b.vb(b);
  }
  var c;
  c = nc[n(null == b ? null : b)];
  if (!c && (c = nc._, !c)) {
    throw z("ITransientCollection.-persistent!", b);
  }
  return c.call(null, b);
}, oc = function oc(b, c, d) {
  if (b ? b.Yb : b) {
    return b.Yb(b, c, d);
  }
  var e;
  e = oc[n(null == b ? null : b)];
  if (!e && (e = oc._, !e)) {
    throw z("ITransientAssociative.-assoc!", b);
  }
  return e.call(null, b, c, d);
}, pc = function pc(b, c, d) {
  if (b ? b.Rc : b) {
    return b.Rc(0, c, d);
  }
  var e;
  e = pc[n(null == b ? null : b)];
  if (!e && (e = pc._, !e)) {
    throw z("ITransientVector.-assoc-n!", b);
  }
  return e.call(null, b, c, d);
}, qc = function qc(b) {
  if (b ? b.Pc : b) {
    return b.Pc();
  }
  var c;
  c = qc[n(null == b ? null : b)];
  if (!c && (c = qc._, !c)) {
    throw z("IChunk.-drop-first", b);
  }
  return c.call(null, b);
}, rc = function rc(b) {
  if (b ? b.wc : b) {
    return b.wc(b);
  }
  var c;
  c = rc[n(null == b ? null : b)];
  if (!c && (c = rc._, !c)) {
    throw z("IChunkedSeq.-chunked-first", b);
  }
  return c.call(null, b);
}, sc = function sc(b) {
  if (b ? b.xc : b) {
    return b.xc(b);
  }
  var c;
  c = sc[n(null == b ? null : b)];
  if (!c && (c = sc._, !c)) {
    throw z("IChunkedSeq.-chunked-rest", b);
  }
  return c.call(null, b);
}, tc = function tc(b) {
  if (b ? b.vc : b) {
    return b.vc(b);
  }
  var c;
  c = tc[n(null == b ? null : b)];
  if (!c && (c = tc._, !c)) {
    throw z("IChunkedNext.-chunked-next", b);
  }
  return c.call(null, b);
}, vc = function vc(b) {
  if (b ? b.Vb : b) {
    return b.Vb(b);
  }
  var c;
  c = vc[n(null == b ? null : b)];
  if (!c && (c = vc._, !c)) {
    throw z("INamed.-name", b);
  }
  return c.call(null, b);
}, wc = function wc(b) {
  if (b ? b.Wb : b) {
    return b.Wb(b);
  }
  var c;
  c = wc[n(null == b ? null : b)];
  if (!c && (c = wc._, !c)) {
    throw z("INamed.-namespace", b);
  }
  return c.call(null, b);
}, xc = function xc(b, c) {
  if (b ? b.vd : b) {
    return b.vd(b, c);
  }
  var d;
  d = xc[n(null == b ? null : b)];
  if (!d && (d = xc._, !d)) {
    throw z("IReset.-reset!", b);
  }
  return d.call(null, b, c);
}, yc = function yc() {
  switch(arguments.length) {
    case 2:
      return yc.a(arguments[0], arguments[1]);
    case 3:
      return yc.d(arguments[0], arguments[1], arguments[2]);
    case 4:
      return yc.s(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return yc.J(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
yc.a = function(a, b) {
  if (a ? a.xd : a) {
    return a.xd(a, b);
  }
  var c;
  c = yc[n(null == a ? null : a)];
  if (!c && (c = yc._, !c)) {
    throw z("ISwap.-swap!", a);
  }
  return c.call(null, a, b);
};
yc.d = function(a, b, c) {
  if (a ? a.yd : a) {
    return a.yd(a, b, c);
  }
  var d;
  d = yc[n(null == a ? null : a)];
  if (!d && (d = yc._, !d)) {
    throw z("ISwap.-swap!", a);
  }
  return d.call(null, a, b, c);
};
yc.s = function(a, b, c, d) {
  if (a ? a.zd : a) {
    return a.zd(a, b, c, d);
  }
  var e;
  e = yc[n(null == a ? null : a)];
  if (!e && (e = yc._, !e)) {
    throw z("ISwap.-swap!", a);
  }
  return e.call(null, a, b, c, d);
};
yc.J = function(a, b, c, d, e) {
  if (a ? a.Ad : a) {
    return a.Ad(a, b, c, d, e);
  }
  var f;
  f = yc[n(null == a ? null : a)];
  if (!f && (f = yc._, !f)) {
    throw z("ISwap.-swap!", a);
  }
  return f.call(null, a, b, c, d, e);
};
yc.v = 5;
var zc = function zc(b, c) {
  if (b ? b.Sc : b) {
    return b.Sc(0, c);
  }
  var d;
  d = zc[n(null == b ? null : b)];
  if (!d && (d = zc._, !d)) {
    throw z("IVolatile.-vreset!", b);
  }
  return d.call(null, b, c);
}, Ac = {}, Bc = function Bc(b) {
  if (b ? b.Sb : b) {
    return b.Sb(b);
  }
  var c;
  c = Bc[n(null == b ? null : b)];
  if (!c && (c = Bc._, !c)) {
    throw z("IIterable.-iterator", b);
  }
  return c.call(null, b);
};
function Cc(a) {
  this.Pd = a;
  this.g = 1073741824;
  this.r = 0;
}
Cc.prototype.Uc = function(a, b) {
  return this.Pd.append(b);
};
function Dc(a) {
  var b = new La;
  a.B(null, new Cc(b), $a());
  return "" + A(b);
}
var Ec = "undefined" !== typeof Math.imul && 0 !== (Math.imul.a ? Math.imul.a(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.a ? Math.imul.a(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Fc(a) {
  a = Ec(a | 0, -862048943);
  return Ec(a << 15 | a >>> -15, 461845907);
}
function Gc(a, b) {
  var c = (a | 0) ^ (b | 0);
  return Ec(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function Hc(a, b) {
  var c = (a | 0) ^ b, c = Ec(c ^ c >>> 16, -2048144789), c = Ec(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function Ic(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Gc(c, Fc(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ Fc(a.charCodeAt(a.length - 1)) : b;
  return Hc(b, Ec(2, a.length));
}
var Jc = {}, Kc = 0;
function Lc(a) {
  255 < Kc && (Jc = {}, Kc = 0);
  var b = Jc[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Ec(31, d) + a.charCodeAt(c), c = e
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
    Jc[a] = b;
    Kc += 1;
  }
  return a = b;
}
function Mc(a) {
  a && (a.g & 4194304 || a.Ud) ? a = a.F(null) : "number" === typeof a ? a = (Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Lc(a), 0 !== a && (a = Fc(a), a = Gc(0, a), a = Hc(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : bc(a);
  return a;
}
function Nc(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Oc(a, b) {
  if (a.cb === b.cb) {
    return 0;
  }
  var c = jb(a.oa);
  if (w(c ? b.oa : c)) {
    return-1;
  }
  if (w(a.oa)) {
    if (jb(b.oa)) {
      return 1;
    }
    c = Sa(a.oa, b.oa);
    return 0 === c ? Sa(a.name, b.name) : c;
  }
  return Sa(a.name, b.name);
}
function Pc(a, b, c, d, e) {
  this.oa = a;
  this.name = b;
  this.cb = c;
  this.Ab = d;
  this.ra = e;
  this.g = 2154168321;
  this.r = 4096;
}
g = Pc.prototype;
g.toString = function() {
  return this.cb;
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.q = function(a, b) {
  return b instanceof Pc ? this.cb === b.cb : !1;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Gb.d(c, this, null);
      case 3:
        return Gb.d(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return Gb.d(c, this, null);
  };
  a.d = function(a, c, d) {
    return Gb.d(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(nb(b)));
};
g.b = function(a) {
  return Gb.d(a, this, null);
};
g.a = function(a, b) {
  return Gb.d(a, this, b);
};
g.A = function() {
  return this.ra;
};
g.C = function(a, b) {
  return new Pc(this.oa, this.name, this.cb, this.Ab, b);
};
g.F = function() {
  var a = this.Ab;
  return null != a ? a : this.Ab = a = Nc(Ic(this.name), Lc(this.oa));
};
g.Vb = function() {
  return this.name;
};
g.Wb = function() {
  return this.oa;
};
g.B = function(a, b) {
  return hc(b, this.cb);
};
function Qc(a, b) {
  var c = null != a ? [A(a), A("/"), A(b)].join("") : b;
  return new Pc(a, b, c, null, null);
}
function D(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 8388608 || a.wd)) {
    return a.H(null);
  }
  if (ib(a) || "string" === typeof a) {
    return 0 === a.length ? null : new E(a, 0);
  }
  if (y(cc, a)) {
    return dc(a);
  }
  throw Error([A(a), A(" is not ISeqable")].join(""));
}
function F(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 64 || a.Xb)) {
    return a.U(null);
  }
  a = D(a);
  return null == a ? null : Cb(a);
}
function Uc(a) {
  return null != a ? a && (a.g & 64 || a.Xb) ? a.ma(null) : (a = D(a)) ? Db(a) : Vc : Vc;
}
function H(a) {
  return null == a ? null : a && (a.g & 128 || a.mc) ? a.ja(null) : D(Uc(a));
}
var Wc = function Wc() {
  switch(arguments.length) {
    case 1:
      return Wc.b(arguments[0]);
    case 2:
      return Wc.a(arguments[0], arguments[1]);
    default:
      return Wc.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Wc.b = function() {
  return!0;
};
Wc.a = function(a, b) {
  return null == a ? null == b : a === b || ac(a, b);
};
Wc.k = function(a, b, c) {
  for (;;) {
    if (Wc.a(a, b)) {
      if (H(c)) {
        a = b, b = F(c), c = H(c);
      } else {
        return Wc.a(b, F(c));
      }
    } else {
      return!1;
    }
  }
};
Wc.u = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return Wc.k(b, a, c);
};
Wc.v = 2;
function Xc(a) {
  this.D = a;
}
Xc.prototype.next = function() {
  if (null != this.D) {
    var a = F(this.D);
    this.D = H(this.D);
    return{value:a, done:!1};
  }
  return{value:null, done:!0};
};
function Yc(a) {
  return new Xc(D(a));
}
function $c(a, b) {
  var c = Fc(a), c = Gc(0, c);
  return Hc(c, b);
}
function ad(a) {
  var b = 0, c = 1;
  for (a = D(a);;) {
    if (null != a) {
      b += 1, c = Ec(31, c) + Mc(F(a)) | 0, a = H(a);
    } else {
      return $c(c, b);
    }
  }
}
var bd = $c(1, 0);
function cd(a) {
  var b = 0, c = 0;
  for (a = D(a);;) {
    if (null != a) {
      b += 1, c = c + Mc(F(a)) | 0, a = H(a);
    } else {
      return $c(c, b);
    }
  }
}
var dd = $c(0, 0);
vb["null"] = !0;
wb["null"] = function() {
  return 0;
};
Date.prototype.q = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
Date.prototype.Pb = !0;
Date.prototype.Qb = function(a, b) {
  return Sa(this.valueOf(), b.valueOf());
};
ac.number = function(a, b) {
  return a === b;
};
tb["function"] = !0;
Vb["function"] = !0;
Wb["function"] = function() {
  return null;
};
bc._ = function(a) {
  return a[ia] || (a[ia] = ++ka);
};
function ed(a) {
  return a + 1;
}
function fd(a) {
  this.n = a;
  this.g = 32768;
  this.r = 0;
}
fd.prototype.Bb = function() {
  return this.n;
};
function gd(a) {
  return a instanceof fd;
}
function I(a) {
  return Ub(a);
}
function hd(a, b) {
  var c = wb(a);
  if (0 === c) {
    return b.m ? b.m() : b.call(null);
  }
  for (var d = B.a(a, 0), e = 1;;) {
    if (e < c) {
      var f = B.a(a, e), d = b.a ? b.a(d, f) : b.call(null, d, f);
      if (gd(d)) {
        return Ub(d);
      }
      e += 1;
    } else {
      return d;
    }
  }
}
function id(a, b, c) {
  var d = wb(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = B.a(a, c), e = b.a ? b.a(e, f) : b.call(null, e, f);
      if (gd(e)) {
        return Ub(e);
      }
      c += 1;
    } else {
      return e;
    }
  }
}
function jd(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.m ? b.m() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var f = a[e], d = b.a ? b.a(d, f) : b.call(null, d, f);
      if (gd(d)) {
        return Ub(d);
      }
      e += 1;
    } else {
      return d;
    }
  }
}
function kd(a, b, c) {
  var d = a.length, e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = a[c], e = b.a ? b.a(e, f) : b.call(null, e, f);
      if (gd(e)) {
        return Ub(e);
      }
      c += 1;
    } else {
      return e;
    }
  }
}
function ld(a, b, c, d) {
  for (var e = a.length;;) {
    if (d < e) {
      var f = a[d];
      c = b.a ? b.a(c, f) : b.call(null, c, f);
      if (gd(c)) {
        return Ub(c);
      }
      d += 1;
    } else {
      return c;
    }
  }
}
function md(a) {
  return a ? a.g & 2 || a.ld ? !0 : a.g ? !1 : y(vb, a) : y(vb, a);
}
function nd(a) {
  return a ? a.g & 16 || a.Qc ? !0 : a.g ? !1 : y(Ab, a) : y(Ab, a);
}
function od(a, b) {
  this.c = a;
  this.o = b;
}
od.prototype.Ua = function() {
  return this.o < this.c.length;
};
od.prototype.next = function() {
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
  return Dc(this);
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
  return new od(this.c, this.o);
};
g.ja = function() {
  return this.o + 1 < this.c.length ? new E(this.c, this.o + 1) : null;
};
g.I = function() {
  return this.c.length - this.o;
};
g.Db = function() {
  var a = wb(this);
  return 0 < a ? new pd(this, a - 1, null) : null;
};
g.F = function() {
  return ad(this);
};
g.q = function(a, b) {
  return qd.a ? qd.a(this, b) : qd.call(null, this, b);
};
g.Q = function() {
  return Vc;
};
g.S = function(a, b) {
  return ld(this.c, b, this.c[this.o], this.o + 1);
};
g.T = function(a, b, c) {
  return ld(this.c, b, c, this.o);
};
g.U = function() {
  return this.c[this.o];
};
g.ma = function() {
  return this.o + 1 < this.c.length ? new E(this.c, this.o + 1) : Vc;
};
g.H = function() {
  return this;
};
g.G = function(a, b) {
  return J.a ? J.a(b, this) : J.call(null, b, this);
};
E.prototype[mb] = function() {
  return Yc(this);
};
function rd(a, b) {
  return b < a.length ? new E(a, b) : null;
}
function sd() {
  switch(arguments.length) {
    case 1:
      return rd(arguments[0], 0);
    case 2:
      return rd(arguments[0], arguments[1]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function pd(a, b, c) {
  this.jc = a;
  this.o = b;
  this.l = c;
  this.g = 32374990;
  this.r = 8192;
}
g = pd.prototype;
g.toString = function() {
  return Dc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.A = function() {
  return this.l;
};
g.ja = function() {
  return 0 < this.o ? new pd(this.jc, this.o - 1, null) : null;
};
g.I = function() {
  return this.o + 1;
};
g.F = function() {
  return ad(this);
};
g.q = function(a, b) {
  return qd.a ? qd.a(this, b) : qd.call(null, this, b);
};
g.Q = function() {
  var a = this.l;
  return td.a ? td.a(Vc, a) : td.call(null, Vc, a);
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
  return 0 < this.o ? new pd(this.jc, this.o - 1, null) : Vc;
};
g.H = function() {
  return this;
};
g.C = function(a, b) {
  return new pd(this.jc, this.o, b);
};
g.G = function(a, b) {
  return J.a ? J.a(b, this) : J.call(null, b, this);
};
pd.prototype[mb] = function() {
  return Yc(this);
};
function xd(a) {
  for (;;) {
    var b = H(a);
    if (null != b) {
      a = b;
    } else {
      return F(a);
    }
  }
}
ac._ = function(a, b) {
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
      return yd.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
yd.m = function() {
  return zd;
};
yd.b = function(a) {
  return a;
};
yd.a = function(a, b) {
  return null != a ? zb(a, b) : zb(Vc, b);
};
yd.k = function(a, b, c) {
  for (;;) {
    if (w(c)) {
      a = yd.a(a, b), b = F(c), c = H(c);
    } else {
      return yd.a(a, b);
    }
  }
};
yd.u = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return yd.k(b, a, c);
};
yd.v = 2;
function L(a) {
  if (null != a) {
    if (a && (a.g & 2 || a.ld)) {
      a = a.I(null);
    } else {
      if (ib(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (y(vb, a)) {
            a = wb(a);
          } else {
            a: {
              a = D(a);
              for (var b = 0;;) {
                if (md(a)) {
                  a = b + wb(a);
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
      return D(a) ? F(a) : c;
    }
    if (nd(a)) {
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
  if (ib(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (y(Ab, a)) {
    return B.a(a, b);
  }
  if (a ? a.g & 64 || a.Xb || (a.g ? 0 : y(Bb, a)) : y(Bb, a)) {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        if (null == c) {
          throw Error("Index out of bounds");
        }
        if (0 === d) {
          if (D(c)) {
            c = F(c);
            break a;
          }
          throw Error("Index out of bounds");
        }
        if (nd(c)) {
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
  throw Error([A("nth not supported on this type "), A(lb(kb(a)))].join(""));
}
function M(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number.");
  }
  if (null == a) {
    return null;
  }
  if (a && (a.g & 16 || a.Qc)) {
    return a.sa(null, b, null);
  }
  if (ib(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (y(Ab, a)) {
    return B.a(a, b);
  }
  if (a ? a.g & 64 || a.Xb || (a.g ? 0 : y(Bb, a)) : y(Bb, a)) {
    return Ad(a, b);
  }
  throw Error([A("nth not supported on this type "), A(lb(kb(a)))].join(""));
}
function Cd(a, b) {
  return null == a ? null : a && (a.g & 256 || a.pd) ? a.w(null, b) : ib(a) ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : y(Fb, a) ? Gb.a(a, b) : null;
}
function Dd(a, b, c) {
  return null != a ? a && (a.g & 256 || a.pd) ? a.t(null, b, c) : ib(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : y(Fb, a) ? Gb.d(a, b, c) : c : c;
}
var N = function N() {
  switch(arguments.length) {
    case 3:
      return N.d(arguments[0], arguments[1], arguments[2]);
    default:
      return N.k(arguments[0], arguments[1], arguments[2], new E(Array.prototype.slice.call(arguments, 3), 0));
  }
};
N.d = function(a, b, c) {
  return null != a ? Ib(a, b, c) : Ed([b], [c]);
};
N.k = function(a, b, c, d) {
  for (;;) {
    if (a = N.d(a, b, c), w(d)) {
      b = F(d), c = F(H(d)), d = H(H(d));
    } else {
      return a;
    }
  }
};
N.u = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  var d = H(c), c = F(d), d = H(d);
  return N.k(b, a, c, d);
};
N.v = 3;
var Fd = function Fd() {
  switch(arguments.length) {
    case 1:
      return Fd.b(arguments[0]);
    case 2:
      return Fd.a(arguments[0], arguments[1]);
    default:
      return Fd.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Fd.b = function(a) {
  return a;
};
Fd.a = function(a, b) {
  return null == a ? null : Kb(a, b);
};
Fd.k = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = Fd.a(a, b);
    if (w(c)) {
      b = F(c), c = H(c);
    } else {
      return a;
    }
  }
};
Fd.u = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return Fd.k(b, a, c);
};
Fd.v = 2;
function Gd(a) {
  var b = ga(a);
  return w(b) ? b : a ? w(w(null) ? null : a.kd) ? !0 : a.Hb ? !1 : y(tb, a) : y(tb, a);
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
  function a(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, x, C, G, K, R, ca) {
    a = this.e;
    return Id.Rb ? Id.Rb(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, x, C, G, K, R, ca) : Id.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, x, C, G, K, R, ca);
  }
  function b(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, x, C, G, K, R) {
    a = this;
    return a.e.fa ? a.e.fa(b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, x, C, G, K, R) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, x, C, G, K, R);
  }
  function c(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, x, C, G, K) {
    a = this;
    return a.e.ea ? a.e.ea(b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, x, C, G, K) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, x, C, G, K);
  }
  function d(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, x, C, G) {
    a = this;
    return a.e.da ? a.e.da(b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, x, C, G) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, x, C, G);
  }
  function e(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, x, C) {
    a = this;
    return a.e.ca ? a.e.ca(b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, x, C) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, x, C);
  }
  function f(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, x) {
    a = this;
    return a.e.ba ? a.e.ba(b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, x) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, v, x);
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
  function x(a, b, c, d, e, f, h) {
    a = this;
    return a.e.R ? a.e.R(b, c, d, e, f, h) : a.e.call(null, b, c, d, e, f, h);
  }
  function C(a, b, c, d, e, f) {
    a = this;
    return a.e.J ? a.e.J(b, c, d, e, f) : a.e.call(null, b, c, d, e, f);
  }
  function G(a, b, c, d, e) {
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
  function Ca(a) {
    a = this;
    return a.e.m ? a.e.m() : a.e.call(null);
  }
  var u = null, u = function(u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua, Ga, Na, Ua, gb, Ka, Oa, Xa, Ya, uc, Zc, ae) {
    switch(arguments.length) {
      case 1:
        return Ca.call(this, u);
      case 2:
        return ca.call(this, u, ba);
      case 3:
        return R.call(this, u, ba, fa);
      case 4:
        return K.call(this, u, ba, fa, ja);
      case 5:
        return G.call(this, u, ba, fa, ja, ma);
      case 6:
        return C.call(this, u, ba, fa, ja, ma, ta);
      case 7:
        return x.call(this, u, ba, fa, ja, ma, ta, va);
      case 8:
        return v.call(this, u, ba, fa, ja, ma, ta, va, ya);
      case 9:
        return t.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea);
      case 10:
        return r.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba);
      case 11:
        return q.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua);
      case 12:
        return p.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua, Ga);
      case 13:
        return m.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua, Ga, Na);
      case 14:
        return l.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua, Ga, Na, Ua);
      case 15:
        return k.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua, Ga, Na, Ua, gb);
      case 16:
        return h.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua, Ga, Na, Ua, gb, Ka);
      case 17:
        return f.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua, Ga, Na, Ua, gb, Ka, Oa);
      case 18:
        return e.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua, Ga, Na, Ua, gb, Ka, Oa, Xa);
      case 19:
        return d.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua, Ga, Na, Ua, gb, Ka, Oa, Xa, Ya);
      case 20:
        return c.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua, Ga, Na, Ua, gb, Ka, Oa, Xa, Ya, uc);
      case 21:
        return b.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua, Ga, Na, Ua, gb, Ka, Oa, Xa, Ya, uc, Zc);
      case 22:
        return a.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua, Ga, Na, Ua, gb, Ka, Oa, Xa, Ya, uc, Zc, ae);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  u.b = Ca;
  u.a = ca;
  u.d = R;
  u.s = K;
  u.J = G;
  u.R = C;
  u.ga = x;
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
  return this.call.apply(this, [this].concat(nb(b)));
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
g.ba = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x) {
  return this.e.ba ? this.e.ba(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x);
};
g.ca = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C) {
  return this.e.ca ? this.e.ca(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C);
};
g.da = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G) {
  return this.e.da ? this.e.da(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G);
};
g.ea = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K) {
  return this.e.ea ? this.e.ea(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K);
};
g.fa = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K, R) {
  return this.e.fa ? this.e.fa(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K, R) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K, R);
};
g.yc = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K, R, ca) {
  var Ca = this.e;
  return Id.Rb ? Id.Rb(Ca, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K, R, ca) : Id.call(null, Ca, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K, R, ca);
};
function td(a, b) {
  return Gd(a) && !(a ? a.g & 262144 || a.Zd || (a.g ? 0 : y(Xb, a)) : y(Xb, a)) ? new Hd(a, b) : null == a ? null : Yb(a, b);
}
function Jd(a) {
  var b = null != a;
  return(b ? a ? a.g & 131072 || a.sd || (a.g ? 0 : y(Vb, a)) : y(Vb, a) : b) ? Wb(a) : null;
}
function Kd(a) {
  return null == a ? null : Qb(a);
}
var Ld = function Ld() {
  switch(arguments.length) {
    case 1:
      return Ld.b(arguments[0]);
    case 2:
      return Ld.a(arguments[0], arguments[1]);
    default:
      return Ld.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Ld.b = function(a) {
  return a;
};
Ld.a = function(a, b) {
  return null == a ? null : Pb(a, b);
};
Ld.k = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = Ld.a(a, b);
    if (w(c)) {
      b = F(c), c = H(c);
    } else {
      return a;
    }
  }
};
Ld.u = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return Ld.k(b, a, c);
};
Ld.v = 2;
function Md(a) {
  return null == a || jb(D(a));
}
function Nd(a) {
  return null == a ? !1 : a ? a.g & 4096 || a.Xd ? !0 : a.g ? !1 : y(Ob, a) : y(Ob, a);
}
function Od(a) {
  return a ? a.g & 16777216 || a.Wd ? !0 : a.g ? !1 : y(ec, a) : y(ec, a);
}
function Pd(a) {
  return null == a ? !1 : a ? a.g & 1024 || a.qd ? !0 : a.g ? !1 : y(Jb, a) : y(Jb, a);
}
function Qd(a) {
  return a ? a.g & 16384 || a.Yd ? !0 : a.g ? !1 : y(Sb, a) : y(Sb, a);
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
  return null == a ? !1 : a ? a.g & 64 || a.Xb ? !0 : a.g ? !1 : y(Bb, a) : y(Bb, a);
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
  if (kb(a) === kb(b)) {
    return a && (a.r & 2048 || a.Pb) ? a.Qb(null, b) : Sa(a, b);
  }
  throw Error("compare on non-nil objects of different types");
}
function Zd(a, b) {
  var c = L(a), d = L(b);
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
    var d = F(c), c = H(c);
    return rb ? rb(a, d, c) : sb.call(null, a, d, c);
  }
  return a.m ? a.m() : a.call(null);
}
function wd(a, b, c) {
  for (c = D(c);;) {
    if (c) {
      var d = F(c);
      b = a.a ? a.a(b, d) : a.call(null, b, d);
      if (gd(b)) {
        return Ub(b);
      }
      c = H(c);
    } else {
      return b;
    }
  }
}
function sb() {
  switch(arguments.length) {
    case 2:
      return $d(arguments[0], arguments[1]);
    case 3:
      return rb(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function $d(a, b) {
  return b && (b.g & 524288 || b.ud) ? b.S(null, a) : ib(b) ? jd(b, a) : "string" === typeof b ? jd(b, a) : y(Zb, b) ? $b.a(b, a) : ud(a, b);
}
function rb(a, b, c) {
  return c && (c.g & 524288 || c.ud) ? c.T(null, a, b) : ib(c) ? kd(c, a, b) : "string" === typeof c ? kd(c, a, b) : y(Zb, c) ? $b.d(c, a, b) : wd(a, b, c);
}
function be(a) {
  return a;
}
function ce(a, b, c, d) {
  a = a.b ? a.b(b) : a.call(null, b);
  c = rb(a, c, d);
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
      return ee.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
ee.b = function(a) {
  return a;
};
ee.a = function(a, b) {
  return a > b ? a : b;
};
ee.k = function(a, b, c) {
  return rb(ee, a > b ? a : b, c);
};
ee.u = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return ee.k(b, a, c);
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
      return A.k(arguments[0], new E(Array.prototype.slice.call(arguments, 1), 0));
  }
};
A.m = function() {
  return "";
};
A.b = function(a) {
  return null == a ? "" : Da(a);
};
A.k = function(a, b) {
  for (var c = new La("" + A(a)), d = b;;) {
    if (w(d)) {
      c = c.append("" + A(F(d))), d = H(d);
    } else {
      return c.toString();
    }
  }
};
A.u = function(a) {
  var b = F(a);
  a = H(a);
  return A.k(b, a);
};
A.v = 1;
function qd(a, b) {
  var c;
  if (Od(b)) {
    if (md(a) && md(b) && L(a) !== L(b)) {
      c = !1;
    } else {
      a: {
        c = D(a);
        for (var d = D(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && Wc.a(F(c), F(d))) {
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
      var c = F(a), b = (b + (Mc(function() {
        var a = c;
        return je.b ? je.b(a) : je.call(null, a);
      }()) ^ Mc(function() {
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
  this.i = e;
  this.g = 65937646;
  this.r = 8192;
}
g = le.prototype;
g.toString = function() {
  return Dc(this);
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
  return Db(this);
};
g.F = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ad(this);
};
g.q = function(a, b) {
  return qd(this, b);
};
g.Q = function() {
  return Yb(Vc, this.l);
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
  return 1 === this.count ? Vc : this.V;
};
g.H = function() {
  return this;
};
g.C = function(a, b) {
  return new le(b, this.first, this.V, this.count, this.i);
};
g.G = function(a, b) {
  return new le(this.l, b, this, this.count + 1, null);
};
le.prototype[mb] = function() {
  return Yc(this);
};
function me(a) {
  this.l = a;
  this.g = 65937614;
  this.r = 8192;
}
g = me.prototype;
g.toString = function() {
  return Dc(this);
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
  return bd;
};
g.q = function(a, b) {
  return qd(this, b);
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
  return Vc;
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
var Vc = new me(null);
me.prototype[mb] = function() {
  return Yc(this);
};
function ne(a) {
  return(a ? a.g & 134217728 || a.Vd || (a.g ? 0 : y(fc, a)) : y(fc, a)) ? gc(a) : rb(yd, Vc, a);
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
    for (var a = b.length, c = Vc;;) {
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
  this.i = d;
  this.g = 65929452;
  this.r = 8192;
}
g = pe.prototype;
g.toString = function() {
  return Dc(this);
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
  var a = this.i;
  return null != a ? a : this.i = a = ad(this);
};
g.q = function(a, b) {
  return qd(this, b);
};
g.Q = function() {
  return td(Vc, this.l);
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
  return null == this.V ? Vc : this.V;
};
g.H = function() {
  return this;
};
g.C = function(a, b) {
  return new pe(b, this.first, this.V, this.i);
};
g.G = function(a, b) {
  return new pe(null, b, this, this.i);
};
pe.prototype[mb] = function() {
  return Yc(this);
};
function J(a, b) {
  var c = null == b;
  return(c ? c : b && (b.g & 64 || b.Xb)) ? new pe(null, a, b, null) : new pe(null, a, D(b), null);
}
function qe(a, b) {
  if (a.ka === b.ka) {
    return 0;
  }
  var c = jb(a.oa);
  if (w(c ? b.oa : c)) {
    return-1;
  }
  if (w(a.oa)) {
    if (jb(b.oa)) {
      return 1;
    }
    c = Sa(a.oa, b.oa);
    return 0 === c ? Sa(a.name, b.name) : c;
  }
  return Sa(a.name, b.name);
}
function O(a, b, c, d) {
  this.oa = a;
  this.name = b;
  this.ka = c;
  this.Ab = d;
  this.g = 2153775105;
  this.r = 4096;
}
g = O.prototype;
g.toString = function() {
  return[A(":"), A(this.ka)].join("");
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.q = function(a, b) {
  return b instanceof O ? this.ka === b.ka : !1;
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
  return this.call.apply(this, [this].concat(nb(b)));
};
g.b = function(a) {
  return Cd(a, this);
};
g.a = function(a, b) {
  return Dd(a, this, b);
};
g.F = function() {
  var a = this.Ab;
  return null != a ? a : this.Ab = a = Nc(Ic(this.name), Lc(this.oa)) + 2654435769 | 0;
};
g.Vb = function() {
  return this.name;
};
g.Wb = function() {
  return this.oa;
};
g.B = function(a, b) {
  return hc(b, [A(":"), A(this.ka)].join(""));
};
function P(a, b) {
  return a === b ? !0 : a instanceof O && b instanceof O ? a.ka === b.ka : !1;
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
  if (a instanceof O) {
    return a;
  }
  if (a instanceof Pc) {
    var b;
    if (a && (a.r & 4096 || a.td)) {
      b = a.Wb(null);
    } else {
      throw Error([A("Doesn't support namespace: "), A(a)].join(""));
    }
    return new O(b, se.b ? se.b(a) : se.call(null, a), a.cb, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new O(b[0], b[1], a, null) : new O(null, b[0], a, null)) : null;
};
re.a = function(a, b) {
  return new O(a, b, [A(w(a) ? [A(a), A("/")].join("") : null), A(b)].join(""), null);
};
re.v = 2;
function te(a, b, c, d) {
  this.l = a;
  this.Kb = b;
  this.D = c;
  this.i = d;
  this.g = 32374988;
  this.r = 0;
}
g = te.prototype;
g.toString = function() {
  return Dc(this);
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
  dc(this);
  return null == this.D ? null : H(this.D);
};
g.F = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ad(this);
};
g.q = function(a, b) {
  return qd(this, b);
};
g.Q = function() {
  return td(Vc, this.l);
};
g.S = function(a, b) {
  return ud(b, this);
};
g.T = function(a, b, c) {
  return wd(b, c, this);
};
g.U = function() {
  dc(this);
  return null == this.D ? null : F(this.D);
};
g.ma = function() {
  dc(this);
  return null != this.D ? Uc(this.D) : Vc;
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
  return new te(b, this.Kb, this.D, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
te.prototype[mb] = function() {
  return Yc(this);
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
  return ld(this.c, b, this.c[this.la], this.la + 1);
};
g.T = function(a, b, c) {
  return ld(this.c, b, c, this.la);
};
function xe(a, b, c, d) {
  this.Ra = a;
  this.Za = b;
  this.l = c;
  this.i = d;
  this.g = 31850732;
  this.r = 1536;
}
g = xe.prototype;
g.toString = function() {
  return Dc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.A = function() {
  return this.l;
};
g.ja = function() {
  if (1 < wb(this.Ra)) {
    return new xe(qc(this.Ra), this.Za, this.l, null);
  }
  var a = dc(this.Za);
  return null == a ? null : a;
};
g.F = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ad(this);
};
g.q = function(a, b) {
  return qd(this, b);
};
g.Q = function() {
  return td(Vc, this.l);
};
g.U = function() {
  return B.a(this.Ra, 0);
};
g.ma = function() {
  return 1 < wb(this.Ra) ? new xe(qc(this.Ra), this.Za, this.l, null) : null == this.Za ? Vc : this.Za;
};
g.H = function() {
  return this;
};
g.wc = function() {
  return this.Ra;
};
g.xc = function() {
  return null == this.Za ? Vc : this.Za;
};
g.C = function(a, b) {
  return new xe(this.Ra, this.Za, b, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
g.vc = function() {
  return null == this.Za ? null : this.Za;
};
xe.prototype[mb] = function() {
  return Yc(this);
};
function ye(a, b) {
  return 0 === wb(a) ? b : new xe(a, b, null, null);
}
function ze(a, b) {
  a.add(b);
}
function Ae(a) {
  for (var b = [];;) {
    if (D(a)) {
      b.push(F(a)), a = H(a);
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
            b[c] = F(d), c += 1, d = H(d);
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
    a = pb(a);
  }
  return a;
}
function Ce(a, b) {
  if (md(a)) {
    return L(a);
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
  return null == b ? null : null == H(b) ? D(F(b)) : J(F(b), De(H(b)));
}, Ee = function Ee() {
  switch(arguments.length) {
    case 0:
      return Ee.m();
    case 1:
      return Ee.b(arguments[0]);
    case 2:
      return Ee.a(arguments[0], arguments[1]);
    default:
      return Ee.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
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
    return c ? Rd(c) ? ye(rc(c), Ee.a(sc(c), b)) : J(F(c), Ee.a(Uc(c), b)) : b;
  }, null, null);
};
Ee.k = function(a, b, c) {
  return function e(a, b) {
    return new te(null, function() {
      var c = D(a);
      return c ? Rd(c) ? ye(rc(c), e(sc(c), b)) : J(F(c), e(Uc(c), b)) : w(b) ? e(F(b), H(b)) : null;
    }, null, null);
  }(Ee.a(a, b), c);
};
Ee.u = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return Ee.k(b, a, c);
};
Ee.v = 2;
function Fe(a) {
  return nc(a);
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
      return Ge.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Ge.m = function() {
  return lc(zd);
};
Ge.b = function(a) {
  return a;
};
Ge.a = function(a, b) {
  return mc(a, b);
};
Ge.k = function(a, b, c) {
  for (;;) {
    if (a = mc(a, b), w(c)) {
      b = F(c), c = H(c);
    } else {
      return a;
    }
  }
};
Ge.u = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return Ge.k(b, a, c);
};
Ge.v = 2;
function He(a, b, c) {
  var d = D(c);
  if (0 === b) {
    return a.m ? a.m() : a.call(null);
  }
  c = Cb(d);
  var e = Db(d);
  if (1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c);
  }
  var d = Cb(e), f = Db(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = Cb(f), h = Db(f);
  if (3 === b) {
    return a.d ? a.d(c, d, e) : a.d ? a.d(c, d, e) : a.call(null, c, d, e);
  }
  var f = Cb(h), k = Db(h);
  if (4 === b) {
    return a.s ? a.s(c, d, e, f) : a.s ? a.s(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var h = Cb(k), l = Db(k);
  if (5 === b) {
    return a.J ? a.J(c, d, e, f, h) : a.J ? a.J(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  var k = Cb(l), m = Db(l);
  if (6 === b) {
    return a.R ? a.R(c, d, e, f, h, k) : a.R ? a.R(c, d, e, f, h, k) : a.call(null, c, d, e, f, h, k);
  }
  var l = Cb(m), p = Db(m);
  if (7 === b) {
    return a.ga ? a.ga(c, d, e, f, h, k, l) : a.ga ? a.ga(c, d, e, f, h, k, l) : a.call(null, c, d, e, f, h, k, l);
  }
  var m = Cb(p), q = Db(p);
  if (8 === b) {
    return a.ha ? a.ha(c, d, e, f, h, k, l, m) : a.ha ? a.ha(c, d, e, f, h, k, l, m) : a.call(null, c, d, e, f, h, k, l, m);
  }
  var p = Cb(q), r = Db(q);
  if (9 === b) {
    return a.ia ? a.ia(c, d, e, f, h, k, l, m, p) : a.ia ? a.ia(c, d, e, f, h, k, l, m, p) : a.call(null, c, d, e, f, h, k, l, m, p);
  }
  var q = Cb(r), t = Db(r);
  if (10 === b) {
    return a.W ? a.W(c, d, e, f, h, k, l, m, p, q) : a.W ? a.W(c, d, e, f, h, k, l, m, p, q) : a.call(null, c, d, e, f, h, k, l, m, p, q);
  }
  var r = Cb(t), v = Db(t);
  if (11 === b) {
    return a.X ? a.X(c, d, e, f, h, k, l, m, p, q, r) : a.X ? a.X(c, d, e, f, h, k, l, m, p, q, r) : a.call(null, c, d, e, f, h, k, l, m, p, q, r);
  }
  var t = Cb(v), x = Db(v);
  if (12 === b) {
    return a.Y ? a.Y(c, d, e, f, h, k, l, m, p, q, r, t) : a.Y ? a.Y(c, d, e, f, h, k, l, m, p, q, r, t) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t);
  }
  var v = Cb(x), C = Db(x);
  if (13 === b) {
    return a.Z ? a.Z(c, d, e, f, h, k, l, m, p, q, r, t, v) : a.Z ? a.Z(c, d, e, f, h, k, l, m, p, q, r, t, v) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, v);
  }
  var x = Cb(C), G = Db(C);
  if (14 === b) {
    return a.$ ? a.$(c, d, e, f, h, k, l, m, p, q, r, t, v, x) : a.$ ? a.$(c, d, e, f, h, k, l, m, p, q, r, t, v, x) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, v, x);
  }
  var C = Cb(G), K = Db(G);
  if (15 === b) {
    return a.aa ? a.aa(c, d, e, f, h, k, l, m, p, q, r, t, v, x, C) : a.aa ? a.aa(c, d, e, f, h, k, l, m, p, q, r, t, v, x, C) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C);
  }
  var G = Cb(K), R = Db(K);
  if (16 === b) {
    return a.ba ? a.ba(c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G) : a.ba ? a.ba(c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G);
  }
  var K = Cb(R), ca = Db(R);
  if (17 === b) {
    return a.ca ? a.ca(c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K) : a.ca ? a.ca(c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K);
  }
  var R = Cb(ca), Ca = Db(ca);
  if (18 === b) {
    return a.da ? a.da(c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K, R) : a.da ? a.da(c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K, R) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K, R);
  }
  ca = Cb(Ca);
  Ca = Db(Ca);
  if (19 === b) {
    return a.ea ? a.ea(c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K, R, ca) : a.ea ? a.ea(c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K, R, ca) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K, R, ca);
  }
  var u = Cb(Ca);
  Db(Ca);
  if (20 === b) {
    return a.fa ? a.fa(c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K, R, ca, u) : a.fa ? a.fa(c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K, R, ca, u) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K, R, ca, u);
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
  if (a.u) {
    var d = Ce(b, c + 1);
    return d <= c ? He(a, d, b) : a.u(b);
  }
  return a.apply(a, Ae(b));
}
function Je(a, b, c) {
  b = J(b, c);
  c = a.v;
  if (a.u) {
    var d = Ce(b, c + 1);
    return d <= c ? He(a, d, b) : a.u(b);
  }
  return a.apply(a, Ae(b));
}
function Ke(a, b, c, d) {
  b = J(b, J(c, d));
  c = a.v;
  return a.u ? (d = Ce(b, c + 1), d <= c ? He(a, d, b) : a.u(b)) : a.apply(a, Ae(b));
}
function Le(a, b, c, d, e) {
  b = J(b, J(c, J(d, e)));
  c = a.v;
  return a.u ? (d = Ce(b, c + 1), d <= c ? He(a, d, b) : a.u(b)) : a.apply(a, Ae(b));
}
function Me(a, b, c, d, e, f) {
  b = J(b, J(c, J(d, J(e, De(f)))));
  c = a.v;
  return a.u ? (d = Ce(b, c + 1), d <= c ? He(a, d, b) : a.u(b)) : a.apply(a, Ae(b));
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
  }, Ta.Ib = !0, Ta.Gb = "cljs.core/t20101", Ta.$b = function(b, c) {
    return hc(c, "cljs.core/t20101");
  });
  return new Ta(Oe, Q);
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
  if (jb(this.Ua())) {
    throw Error("No such element");
  }
  this.Ob = this.qb;
  return F(this.qb);
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
  if (ib(a)) {
    return new Qe(a, 0);
  }
  var b;
  b = a ? w(w(null) ? null : a.lc) ? !0 : a.Hb ? !1 : y(Ac, a) : y(Ac, a);
  if (w(b)) {
    return Bc(a);
  }
  if (a ? a.g & 8388608 || a.wd || (a.g ? 0 : y(cc, a)) : y(cc, a)) {
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
      if (gd(function() {
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
      (gd(a) ? Ub(a) : a).La = null;
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
  return J(b, dc(this));
};
g.Q = function() {
  return Vc;
};
g.q = function(a, b) {
  return null != dc(this) ? qd(this, b) : Od(b) && null == D(b);
};
g.F = function() {
  return ad(this);
};
g.H = function() {
  null != this.La && this.La.step(this);
  return null == this.V ? null : this;
};
g.U = function() {
  null != this.La && dc(this);
  return null == this.V ? null : this.first;
};
g.ma = function() {
  null != this.La && dc(this);
  return null == this.V ? Vc : this.V;
};
g.ja = function() {
  null != this.La && dc(this);
  return null == this.V ? null : dc(this.V);
};
Xe.prototype[mb] = function() {
  return Yc(this);
};
function Ye(a, b) {
  for (;;) {
    if (null == D(b)) {
      return!0;
    }
    var c;
    c = F(b);
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
      c = F(b);
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
      return jb(a.a ? a.a(b, c) : a.call(null, b, c));
    }
    function c(b) {
      return jb(a.b ? a.b(b) : a.call(null, b));
    }
    function d() {
      return jb(a.m ? a.m() : a.call(null));
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
        return jb(Ke(a, b, d, e));
      }
      b.v = 2;
      b.u = function(a) {
        var b = F(a);
        a = H(a);
        var d = F(a);
        a = Uc(a);
        return c(b, d, a);
      };
      b.k = c;
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
          return f.k(a, e, m);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    e.v = 2;
    e.u = f.u;
    e.m = d;
    e.b = c;
    e.a = b;
    e.k = f.k;
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
    b.u = function(b) {
      D(b);
      return a;
    };
    b.k = function() {
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
      c.u = function(a) {
        var b = F(a);
        a = H(a);
        var c = F(a);
        a = H(a);
        var e = F(a);
        a = Uc(a);
        return d(b, c, e, a);
      };
      c.k = d;
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
          return k.k(a, b, h, r);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    h.v = 3;
    h.u = k.u;
    h.m = f;
    h.b = e;
    h.a = d;
    h.d = c;
    h.k = k.k;
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
      d.u = function(a) {
        var b = F(a);
        a = H(a);
        var c = F(a);
        a = H(a);
        var d = F(a);
        a = Uc(a);
        return e(b, c, d, a);
      };
      d.k = e;
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
          return l.k(a, b, c, t);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    k.v = 3;
    k.u = l.u;
    k.m = h;
    k.b = f;
    k.a = e;
    k.d = d;
    k.k = l.k;
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
        return Me(a, b, c, e, f, sd([h], 0));
      }
      c.v = 3;
      c.u = function(a) {
        var b = F(a);
        a = H(a);
        var c = F(a);
        a = H(a);
        var e = F(a);
        a = Uc(a);
        return d(b, c, e, a);
      };
      c.k = d;
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
          return k.k(a, b, h, r);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    h.v = 3;
    h.u = k.u;
    h.m = f;
    h.b = e;
    h.a = d;
    h.d = c;
    h.k = k.k;
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
        return Me(c, a, d, b, e, sd([h, k, l], 0));
      }
      e.v = 3;
      e.u = function(a) {
        var b = F(a);
        a = H(a);
        var c = F(a);
        a = H(a);
        var d = F(a);
        a = Uc(a);
        return f(b, c, d, a);
      };
      e.k = f;
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
            for (var l = 0, x = Array(arguments.length - 3);l < x.length;) {
              x[l] = arguments[l + 3], ++l;
            }
            l = new E(x, 0);
          }
          return m.k(a, b, c, l);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    l.v = 3;
    l.u = m.u;
    l.m = k;
    l.b = h;
    l.a = f;
    l.d = e;
    l.k = m.k;
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
      var k = M(a, 0);
      a = M(a, 1);
      var l = b, m = c;
      a.s ? a.s(k, this, l, m) : a.call(null, k, this, l, m);
      h += 1;
    } else {
      if (a = D(d)) {
        d = a, Rd(d) ? (e = rc(d), d = sc(d), a = e, f = L(e), e = a) : (a = F(d), k = M(a, 0), a = M(a, 1), e = k, f = b, h = c, a.s ? a.s(e, this, f, h) : a.call(null, e, this, f, h), d = H(d), e = null, f = 0), h = 0;
      } else {
        return null;
      }
    }
  }
};
g.F = function() {
  return this[ia] || (this[ia] = ++ka);
};
function jf() {
  switch(arguments.length) {
    case 1:
      return kf(arguments[0]);
    default:
      var a = arguments[0], b = new E(Array.prototype.slice.call(arguments, 1), 0), c = Vd(b) ? Ie(lf, b) : b, b = Cd(c, db), c = Cd(c, mf);
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
        var a = oe(new Pc(null, "validate", "validate", 1439230700, null), new Pc(null, "new-value", "new-value", -1567397401, null));
        return of.b ? of.b(a) : of.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.hd && kc(a, c, b);
    return b;
  }
  return xc(a, b);
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
      return ff.k(arguments[0], arguments[1], arguments[2], arguments[3], new E(Array.prototype.slice.call(arguments, 4), 0));
  }
};
ff.a = function(a, b) {
  var c;
  a instanceof hf ? (c = a.state, c = b.b ? b.b(c) : b.call(null, c), c = nf(a, c)) : c = yc.a(a, b);
  return c;
};
ff.d = function(a, b, c) {
  if (a instanceof hf) {
    var d = a.state;
    b = b.a ? b.a(d, c) : b.call(null, d, c);
    a = nf(a, b);
  } else {
    a = yc.d(a, b, c);
  }
  return a;
};
ff.s = function(a, b, c, d) {
  if (a instanceof hf) {
    var e = a.state;
    b = b.d ? b.d(e, c, d) : b.call(null, e, c, d);
    a = nf(a, b);
  } else {
    a = yc.s(a, b, c, d);
  }
  return a;
};
ff.k = function(a, b, c, d, e) {
  return a instanceof hf ? nf(a, Le(b, a.state, c, d, e)) : yc.J(a, b, c, d, e);
};
ff.u = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  var d = H(c), c = F(d), e = H(d), d = F(e), e = H(e);
  return ff.k(b, a, c, d, e);
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
var S = function S() {
  switch(arguments.length) {
    case 1:
      return S.b(arguments[0]);
    case 2:
      return S.a(arguments[0], arguments[1]);
    case 3:
      return S.d(arguments[0], arguments[1], arguments[2]);
    case 4:
      return S.s(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return S.k(arguments[0], arguments[1], arguments[2], arguments[3], new E(Array.prototype.slice.call(arguments, 4), 0));
  }
};
S.b = function(a) {
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
        c.u = function(a) {
          var b = F(a);
          a = H(a);
          var c = F(a);
          a = Uc(a);
          return d(b, c, a);
        };
        c.k = d;
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
            return h.k(a, b, p);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.v = 2;
      f.u = h.u;
      f.m = e;
      f.b = d;
      f.a = c;
      f.k = h.k;
      return f;
    }();
  };
};
S.a = function(a, b) {
  return new te(null, function() {
    var c = D(b);
    if (c) {
      if (Rd(c)) {
        for (var d = rc(c), e = L(d), f = new ve(Array(e), 0), h = 0;;) {
          if (h < e) {
            ze(f, function() {
              var b = B.a(d, h);
              return a.b ? a.b(b) : a.call(null, b);
            }()), h += 1;
          } else {
            break;
          }
        }
        return ye(f.Ra(), S.a(a, sc(c)));
      }
      return J(function() {
        var b = F(c);
        return a.b ? a.b(b) : a.call(null, b);
      }(), S.a(a, Uc(c)));
    }
    return null;
  }, null, null);
};
S.d = function(a, b, c) {
  return new te(null, function() {
    var d = D(b), e = D(c);
    if (d && e) {
      var f = J, h;
      h = F(d);
      var k = F(e);
      h = a.a ? a.a(h, k) : a.call(null, h, k);
      d = f(h, S.d(a, Uc(d), Uc(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
S.s = function(a, b, c, d) {
  return new te(null, function() {
    var e = D(b), f = D(c), h = D(d);
    if (e && f && h) {
      var k = J, l;
      l = F(e);
      var m = F(f), p = F(h);
      l = a.d ? a.d(l, m, p) : a.call(null, l, m, p);
      e = k(l, S.s(a, Uc(e), Uc(f), Uc(h)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
S.k = function(a, b, c, d, e) {
  var f = function k(a) {
    return new te(null, function() {
      var b = S.a(D, a);
      return Ye(be, b) ? J(S.a(F, b), k(S.a(Uc, b))) : null;
    }, null, null);
  };
  return S.a(function() {
    return function(b) {
      return Ie(a, b);
    };
  }(f), f(yd.k(e, d, sd([c, b], 0))));
};
S.u = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  var d = H(c), c = F(d), e = H(d), d = F(e), e = H(e);
  return S.k(b, a, c, d, e);
};
S.v = 4;
function qf(a) {
  return function(b) {
    return function(a) {
      return function() {
        function d(d, e) {
          var f = Ub(a), h = zc(a, Ub(a) - 1), f = 0 < f ? b.a ? b.a(d, e) : b.call(null, d, e) : d;
          return 0 < h ? f : gd(f) ? f : new fd(f);
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
      return c ? J(F(c), rf(a - 1, Uc(c))) : null;
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
        var f = a - 1, e = Uc(e);
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
        f = F(e), f = a.b ? a.b(f) : a.call(null, f);
      }
      if (w(f)) {
        f = a, e = Uc(e), a = f, b = e;
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
        for (var d = rc(c), e = L(d), f = new ve(Array(e), 0), h = 0;;) {
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
        return ye(f.Ra(), xf(a, sc(c)));
      }
      d = F(c);
      c = Uc(c);
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
      w(Od.b ? Od.b(a) : Od.call(null, a)) ? (e = sd([D.b ? D.b(a) : D.call(null, a)], 0), e = Ie(Ee, Je(S, c, e))) : e = null;
      return J(a, e);
    }, null, null);
  }(a);
}
function Af(a) {
  return xf(function(a) {
    return!Od(a);
  }, Uc(zf(a)));
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
  return null != a ? a && (a.r & 4 || a.md) ? td(Fe(rb(mc, lc(a), b)), Jd(a)) : rb(zb, a, b) : rb(yd, Vc, b);
};
Bf.d = function(a, b, c) {
  return a && (a.r & 4 || a.md) ? td(Fe(ce(b, Ge, lc(a), c)), Jd(a)) : ce(b, yd, a, c);
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
      return Cf.k(arguments[0], arguments[1], arguments[2], arguments[3], new E(Array.prototype.slice.call(arguments, 4), 0));
  }
};
Cf.a = function(a, b) {
  return Fe(rb(function(b, d) {
    return Ge.a(b, a.b ? a.b(d) : a.call(null, d));
  }, lc(zd), b));
};
Cf.d = function(a, b, c) {
  return Bf.a(zd, S.d(a, b, c));
};
Cf.s = function(a, b, c, d) {
  return Bf.a(zd, S.s(a, b, c, d));
};
Cf.k = function(a, b, c, d, e) {
  return Bf.a(zd, Me(S, a, b, c, d, sd([e], 0)));
};
Cf.u = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  var d = H(c), c = F(d), e = H(d), d = F(e), e = H(e);
  return Cf.k(b, a, c, d, e);
};
Cf.v = 4;
function Df(a, b, c, d) {
  return new te(null, function() {
    var e = D(d);
    if (e) {
      var f = rf(a, e);
      return a === L(f) ? J(f, Df(a, b, c, sf(b, e))) : zb(Vc, rf(a, Ee.a(f, c)));
    }
    return null;
  }, null, null);
}
var gf = function gf(b, c, d) {
  var e = M(c, 0);
  c = he(c);
  return w(c) ? N.d(b, e, gf(Cd(b, e), c, d)) : N.d(b, e, d);
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
      return Ef.k(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new E(Array.prototype.slice.call(arguments, 6), 0));
  }
};
Ef.d = function(a, b, c) {
  var d = M(b, 0);
  b = he(b);
  return w(b) ? N.d(a, d, Ef.d(Cd(a, d), b, c)) : N.d(a, d, function() {
    var b = Cd(a, d);
    return c.b ? c.b(b) : c.call(null, b);
  }());
};
Ef.s = function(a, b, c, d) {
  var e = M(b, 0);
  b = he(b);
  return w(b) ? N.d(a, e, Ef.s(Cd(a, e), b, c, d)) : N.d(a, e, function() {
    var b = Cd(a, e);
    return c.a ? c.a(b, d) : c.call(null, b, d);
  }());
};
Ef.J = function(a, b, c, d, e) {
  var f = M(b, 0);
  b = he(b);
  return w(b) ? N.d(a, f, Ef.J(Cd(a, f), b, c, d, e)) : N.d(a, f, function() {
    var b = Cd(a, f);
    return c.d ? c.d(b, d, e) : c.call(null, b, d, e);
  }());
};
Ef.R = function(a, b, c, d, e, f) {
  var h = M(b, 0);
  b = he(b);
  return w(b) ? N.d(a, h, Ef.R(Cd(a, h), b, c, d, e, f)) : N.d(a, h, function() {
    var b = Cd(a, h);
    return c.s ? c.s(b, d, e, f) : c.call(null, b, d, e, f);
  }());
};
Ef.k = function(a, b, c, d, e, f, h) {
  var k = M(b, 0);
  b = he(b);
  return w(b) ? N.d(a, k, Me(Ef, Cd(a, k), b, c, d, sd([e, f, h], 0))) : N.d(a, k, Me(c, Cd(a, k), d, e, f, sd([h], 0)));
};
Ef.u = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  var d = H(c), c = F(d), e = H(d), d = F(e), f = H(e), e = F(f), h = H(f), f = F(h), h = H(h);
  return Ef.k(b, a, c, d, e, f, h);
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
  return new Ff(a.M, nb(a.c));
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
function T(a, b, c, d, e, f) {
  this.l = a;
  this.h = b;
  this.shift = c;
  this.root = d;
  this.L = e;
  this.i = f;
  this.g = 167668511;
  this.r = 8196;
}
g = T.prototype;
g.toString = function() {
  return Dc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.w = function(a, b) {
  return Gb.d(this, b, null);
};
g.t = function(a, b, c) {
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
    return If(this) <= b ? (a = nb(this.L), a[b & 31] = c, new T(this.l, this.h, this.shift, this.root, a, null)) : new T(this.l, this.h, this.shift, Of(this, this.shift, this.root, b, c), this.L, null);
  }
  if (b === this.h) {
    return zb(this, c);
  }
  throw Error([A("Index "), A(b), A(" out of bounds  [0,"), A(this.h), A("]")].join(""));
};
g.lc = !0;
g.Sb = function() {
  var a = this.h;
  return new Qf(0, 0, 0 < L(this) ? Mf(this, 0) : null, this, 0, a);
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
    return Yb(zd, this.l);
  }
  if (1 < this.h - If(this)) {
    return new T(this.l, this.h - 1, this.shift, this.root, this.L.slice(0, -1), null);
  }
  var a = Mf(this, this.h - 2), b = Pf(this, this.shift, this.root), b = null == b ? U : b, c = this.h - 1;
  return 5 < this.shift && null == b.c[1] ? new T(this.l, c, this.shift - 5, b.c[0], a, null) : new T(this.l, c, this.shift, b, a, null);
};
g.Db = function() {
  return 0 < this.h ? new pd(this, this.h - 1, null) : null;
};
g.F = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ad(this);
};
g.q = function(a, b) {
  if (b instanceof T) {
    if (this.h === L(b)) {
      for (var c = Bc(this), d = Bc(b);;) {
        if (w(c.Ua())) {
          var e = c.next(), f = d.next();
          if (!Wc.a(e, f)) {
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
    return qd(this, b);
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
  return hd(this, b);
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
            if (gd(d)) {
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
      if (gd(e)) {
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
    return Tb(this, b, c);
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
  return new T(b, this.h, this.shift, this.root, this.L, this.i);
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
    return new T(this.l, this.h + 1, this.shift, this.root, d, null);
  }
  c = (d = this.h >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Gf(null), d.c[0] = this.root, e = Jf(null, this.shift, new Ff(null, this.L)), d.c[1] = e) : d = Kf(this, this.shift, this.root, new Ff(null, this.L));
  return new T(this.l, this.h + 1, c, d, [b], null);
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
  return this.call.apply(this, [this].concat(nb(b)));
};
g.b = function(a) {
  return this.O(null, a);
};
g.a = function(a, b) {
  return this.sa(null, a, b);
};
var U = new Ff(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), zd = new T(null, 0, 5, U, [], bd);
function Wf(a) {
  var b = a.length;
  if (32 > b) {
    return new T(null, b, 5, U, a, null);
  }
  for (var c = 32, d = (new T(null, 32, 5, U, a.slice(0, 32), null)).Cb(null);;) {
    if (c < b) {
      var e = c + 1, d = Ge.a(d, a[c]), c = e
    } else {
      return nc(d);
    }
  }
}
T.prototype[mb] = function() {
  return Yc(this);
};
function Xf(a) {
  return ib(a) ? Wf(a) : nc(rb(mc, lc(zd), a));
}
var Yf = function Yf() {
  return Yf.k(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Yf.k = function(a) {
  return a instanceof E && 0 === a.o ? Wf(a.c) : Xf(a);
};
Yf.v = 0;
Yf.u = function(a) {
  return Yf.k(D(a));
};
function Zf(a, b, c, d, e, f) {
  this.Da = a;
  this.jb = b;
  this.o = c;
  this.la = d;
  this.l = e;
  this.i = f;
  this.g = 32375020;
  this.r = 1536;
}
g = Zf.prototype;
g.toString = function() {
  return Dc(this);
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
  return tc(this);
};
g.F = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ad(this);
};
g.q = function(a, b) {
  return qd(this, b);
};
g.Q = function() {
  return td(zd, this.l);
};
g.S = function(a, b) {
  var c;
  c = this.Da;
  var d = this.o + this.la, e = L(this.Da);
  c = $f ? $f(c, d, e) : ag.call(null, c, d, e);
  return hd(c, b);
};
g.T = function(a, b, c) {
  a = this.Da;
  var d = this.o + this.la, e = L(this.Da);
  a = $f ? $f(a, d, e) : ag.call(null, a, d, e);
  return id(a, b, c);
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
    return null == a ? Vc : a;
  }
  return sc(this);
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
  if (a < wb(this.Da)) {
    var b = this.Da, c = Mf(this.Da, a);
    return Uf ? Uf(b, c, a, 0) : Vf.call(null, b, c, a, 0);
  }
  return Vc;
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
  if (a < wb(this.Da)) {
    var b = this.Da, c = Mf(this.Da, a);
    return Uf ? Uf(b, c, a, 0) : Vf.call(null, b, c, a, 0);
  }
  return null;
};
Zf.prototype[mb] = function() {
  return Yc(this);
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
  this.i = e;
  this.g = 167666463;
  this.r = 8192;
}
g = cg.prototype;
g.toString = function() {
  return Dc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.w = function(a, b) {
  return Gb.d(this, b, null);
};
g.t = function(a, b, c) {
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
  c = N.d(this.Oa, d, c);
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
  return this.start !== this.end ? new pd(this, this.end - this.start - 1, null) : null;
};
g.F = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ad(this);
};
g.q = function(a, b) {
  return qd(this, b);
};
g.Q = function() {
  return td(zd, this.l);
};
g.S = function(a, b) {
  return hd(this, b);
};
g.T = function(a, b, c) {
  return id(this, b, c);
};
g.pa = function(a, b, c) {
  if ("number" === typeof b) {
    return Tb(this, b, c);
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
  var c = this.Oa, d = this.start, e = this.end, f = this.i;
  return dg.J ? dg.J(b, c, d, e, f) : dg.call(null, b, c, d, e, f);
};
g.G = function(a, b) {
  var c = this.l, d = Tb(this.Oa, this.end, b), e = this.start, f = this.end + 1;
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
  return this.call.apply(this, [this].concat(nb(b)));
};
g.b = function(a) {
  return this.O(null, a);
};
g.a = function(a, b) {
  return this.sa(null, a, b);
};
cg.prototype[mb] = function() {
  return Yc(this);
};
function dg(a, b, c, d, e) {
  for (;;) {
    if (b instanceof cg) {
      c = b.start + c, d = b.start + d, b = b.Oa;
    } else {
      var f = L(b);
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
      return $f(a, arguments[1], L(a));
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
  return a === b.M ? b : new Ff(a, nb(b.c));
}
function Sf(a) {
  return new Ff({}, nb(a.c));
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
    return new T(null, this.h, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
g.Yb = function(a, b, c) {
  if ("number" === typeof b) {
    return pc(this, b, c);
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
      return mc(this, c);
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
  return Gb.d(this, b, null);
};
g.t = function(a, b, c) {
  return "number" === typeof b ? B.d(this, b, c) : c;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.w(null, c);
      case 3:
        return this.t(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.w(null, c);
  };
  a.d = function(a, c, d) {
    return this.t(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(nb(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.t(null, a, b);
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
  return Wd(Pd(b) ? L(a) === L(b) ? Ye(be, S.a(function(a) {
    return Wc.a(Dd(b, F(a), hg), F(H(a)));
  }, a)) : null : null);
}
function jg(a) {
  this.D = a;
}
jg.prototype.next = function() {
  if (null != this.D) {
    var a = F(this.D), b = M(a, 0), a = M(a, 1);
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
    var a = F(this.D);
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
  if (b instanceof O) {
    a: {
      c = a.length;
      for (var d = b.ka, e = 0;;) {
        if (c <= e) {
          c = -1;
          break a;
        }
        var f = a[e];
        if (f instanceof O && d === f.ka) {
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
      if (b instanceof Pc) {
        a: {
          for (c = a.length, d = b.cb, e = 0;;) {
            if (c <= e) {
              c = -1;
              break a;
            }
            f = a[e];
            if (f instanceof Pc && d === f.cb) {
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
              if (Wc.a(b, a[d])) {
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
  return Dc(this);
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
  return ad(this);
};
g.q = function(a, b) {
  return qd(this, b);
};
g.Q = function() {
  return td(Vc, this.ra);
};
g.S = function(a, b) {
  return ud(b, this);
};
g.T = function(a, b, c) {
  return wd(b, c, this);
};
g.U = function() {
  return new T(null, 2, 5, U, [this.c[this.o], this.c[this.o + 1]], null);
};
g.ma = function() {
  return this.o < this.c.length - 2 ? new og(this.c, this.o + 2, this.ra) : Vc;
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
og.prototype[mb] = function() {
  return Yc(this);
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
  var a = new T(null, 2, 5, U, [this.c[this.o], this.c[this.o + 1]], null);
  this.o += 2;
  return a;
};
function ab(a, b, c, d) {
  this.l = a;
  this.h = b;
  this.c = c;
  this.i = d;
  this.g = 16647951;
  this.r = 8196;
}
g = ab.prototype;
g.toString = function() {
  return Dc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.keys = function() {
  return Yc(qg.b ? qg.b(this) : qg.call(null, this));
};
g.entries = function() {
  return kg(D(this));
};
g.values = function() {
  return Yc(rg.b ? rg.b(this) : rg.call(null, this));
};
g.has = function(a) {
  return Xd(this, a);
};
g.get = function(a, b) {
  return this.t(null, a, b);
};
g.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.O(null, e), h = M(f, 0), f = M(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = D(b)) {
        Rd(b) ? (c = rc(b), b = sc(b), h = c, d = L(c), c = h) : (c = F(b), h = M(c, 0), c = f = M(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.w = function(a, b) {
  return Gb.d(this, b, null);
};
g.t = function(a, b, c) {
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
  var a = this.i;
  return null != a ? a : this.i = a = cd(this);
};
g.q = function(a, b) {
  if (b && (b.g & 1024 || b.qd)) {
    var c = this.c.length;
    if (this.h === b.I(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.t(null, this.c[d], Ud);
          if (e !== Ud) {
            if (Wc.a(this.c[d + 1], e)) {
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
  return new sg({}, this.c.length, nb(this.c));
};
g.Q = function() {
  return Yb(Q, this.l);
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
      return xb(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new ab(this.l, this.h - 1, d, null);
      }
      Wc.a(b, this.c[e]) || (d[f] = this.c[e], d[f + 1] = this.c[e + 1], f += 2);
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
      return new ab(this.l, this.h + 1, e, null);
    }
    return Yb(Ib(Bf.a(ug, this), b, c), this.l);
  }
  if (c === this.c[a + 1]) {
    return this;
  }
  b = nb(this.c);
  b[a + 1] = c;
  return new ab(this.l, this.h, b, null);
};
g.kc = function(a, b) {
  return-1 !== ng(this.c, b);
};
g.H = function() {
  var a = this.c;
  return 0 <= a.length - 2 ? new og(a, 0, null) : null;
};
g.C = function(a, b) {
  return new ab(b, this.h, this.c, this.i);
};
g.G = function(a, b) {
  if (Qd(b)) {
    return Ib(this, B.a(b, 0), B.a(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (Qd(e)) {
      c = Ib(c, B.a(e, 0), B.a(e, 1)), d = H(d);
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
        return this.t(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.w(null, c);
  };
  a.d = function(a, c, d) {
    return this.t(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(nb(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.t(null, a, b);
};
var Q = new ab(null, 0, [], dd), tg = 8;
function wg(a) {
  for (var b = [], c = 0;;) {
    if (c < a.length) {
      var d = a[c], e = a[c + 1];
      -1 === ng(b, d) && (b.push(d), b.push(e));
      c += 2;
    } else {
      break;
    }
  }
  return new ab(null, b.length / 2, b, null);
}
ab.prototype[mb] = function() {
  return Yc(this);
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
  return Gb.d(this, b, null);
};
g.t = function(a, b, c) {
  if (w(this.Jb)) {
    return a = ng(this.c, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.ub = function(a, b) {
  if (w(this.Jb)) {
    if (b ? b.g & 2048 || b.rd || (b.g ? 0 : y(Lb, b)) : y(Lb, b)) {
      return oc(this, je.b ? je.b(b) : je.call(null, b), ke.b ? ke.b(b) : ke.call(null, b));
    }
    for (var c = D(b), d = this;;) {
      var e = F(c);
      if (w(e)) {
        var f = e, c = H(c), d = oc(d, function() {
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
    return this.Jb = !1, new ab(null, fe(this.Lb), this.c, null);
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
      a = xg.a ? xg.a(a, d) : xg.call(null, a, d);
      return oc(a, b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function xg(a, b) {
  for (var c = lc(ug), d = 0;;) {
    if (d < a) {
      c = oc(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function yg() {
  this.n = !1;
}
function zg(a, b) {
  return a === b ? !0 : P(a, b) ? !0 : Wc.a(a, b);
}
function Ag(a, b, c) {
  a = nb(a);
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
          0 !== (this.P >>> d & 1) && (k[d] = null != this.c[e] ? Gg.Na(a, b + 5, Mc(this.c[e]), this.c[e], this.c[e + 1], f) : this.c[e + 1], e += 2), d += 1;
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
          0 !== (this.P >>> c & 1) && (h[c] = null != this.c[d] ? Gg.Ma(a + 5, Mc(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
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
  d = nb(k);
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
  return a === this.M ? this : new Hg(a, this.h, nb(this.c));
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
  return b === this.hb ? (a = Ng(this.c, this.h, c), -1 === a ? (a = 2 * this.h, b = Array(a + 2), Td(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.n = !0, new Og(null, this.hb, this.h + 1, b)) : Wc.a(this.c[a], d) ? this : new Og(null, this.hb, this.h, Ag(this.c, a + 1, d))) : (new Dg(null, 1 << (this.hb >>> a & 31), [null, this])).Ma(a, b, c, d, e);
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
  var h = Mc(b);
  if (h === d) {
    return new Og(null, h, 2, [b, c, e, f]);
  }
  var k = new yg;
  return Gg.Ma(a, h, b, c, k).Ma(a, d, e, f, k);
}
function Ig(a, b, c, d, e, f, h) {
  var k = Mc(c);
  if (k === e) {
    return new Og(null, k, 2, [c, d, f, h]);
  }
  var l = new yg;
  return Gg.Na(a, b, k, c, d, l).Na(a, b, e, f, h, l);
}
function Pg(a, b, c, d, e) {
  this.l = a;
  this.nb = b;
  this.o = c;
  this.D = d;
  this.i = e;
  this.g = 32374860;
  this.r = 0;
}
g = Pg.prototype;
g.toString = function() {
  return Dc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.A = function() {
  return this.l;
};
g.F = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ad(this);
};
g.q = function(a, b) {
  return qd(this, b);
};
g.Q = function() {
  return td(Vc, this.l);
};
g.S = function(a, b) {
  return ud(b, this);
};
g.T = function(a, b, c) {
  return wd(b, c, this);
};
g.U = function() {
  return null == this.D ? new T(null, 2, 5, U, [this.nb[this.o], this.nb[this.o + 1]], null) : F(this.D);
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
  return new Pg(b, this.nb, this.o, this.D, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
Pg.prototype[mb] = function() {
  return Yc(this);
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
  this.i = e;
  this.g = 32374860;
  this.r = 0;
}
g = Rg.prototype;
g.toString = function() {
  return Dc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.A = function() {
  return this.l;
};
g.F = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ad(this);
};
g.q = function(a, b) {
  return qd(this, b);
};
g.Q = function() {
  return td(Vc, this.l);
};
g.S = function(a, b) {
  return ud(b, this);
};
g.T = function(a, b, c) {
  return wd(b, c, this);
};
g.U = function() {
  return F(this.D);
};
g.ma = function() {
  var a = this.nb, b = this.o, c = H(this.D);
  return Sg ? Sg(null, a, b, c) : Mg.call(null, null, a, b, c);
};
g.H = function() {
  return this;
};
g.C = function(a, b) {
  return new Rg(b, this.nb, this.o, this.D, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
Rg.prototype[mb] = function() {
  return Yc(this);
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
  this.i = f;
  this.g = 16123663;
  this.r = 8196;
}
g = Tg.prototype;
g.toString = function() {
  return Dc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.keys = function() {
  return Yc(qg.b ? qg.b(this) : qg.call(null, this));
};
g.entries = function() {
  return kg(D(this));
};
g.values = function() {
  return Yc(rg.b ? rg.b(this) : rg.call(null, this));
};
g.has = function(a) {
  return Xd(this, a);
};
g.get = function(a, b) {
  return this.t(null, a, b);
};
g.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.O(null, e), h = M(f, 0), f = M(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = D(b)) {
        Rd(b) ? (c = rc(b), b = sc(b), h = c, d = L(c), c = h) : (c = F(b), h = M(c, 0), c = f = M(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.w = function(a, b) {
  return Gb.d(this, b, null);
};
g.t = function(a, b, c) {
  return null == b ? this.ta ? this.Aa : c : null == this.root ? c : this.root.mb(0, Mc(b), b, c);
};
g.A = function() {
  return this.l;
};
g.I = function() {
  return this.h;
};
g.F = function() {
  var a = this.i;
  return null != a ? a : this.i = a = cd(this);
};
g.q = function(a, b) {
  return ig(this, b);
};
g.Cb = function() {
  return new Ug({}, this.root, this.h, this.ta, this.Aa);
};
g.Q = function() {
  return Yb(ug, this.l);
};
g.ya = function(a, b) {
  if (null == b) {
    return this.ta ? new Tg(this.l, this.h - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.cc(0, Mc(b), b);
  return c === this.root ? this : new Tg(this.l, this.h - 1, c, this.ta, this.Aa, null);
};
g.pa = function(a, b, c) {
  if (null == b) {
    return this.ta && c === this.Aa ? this : new Tg(this.l, this.ta ? this.h : this.h + 1, this.root, !0, c, null);
  }
  a = new yg;
  b = (null == this.root ? Gg : this.root).Ma(0, Mc(b), b, c, a);
  return b === this.root ? this : new Tg(this.l, a.n ? this.h + 1 : this.h, b, this.ta, this.Aa, null);
};
g.kc = function(a, b) {
  return null == b ? this.ta : null == this.root ? !1 : this.root.mb(0, Mc(b), b, Ud) !== Ud;
};
g.H = function() {
  if (0 < this.h) {
    var a = null != this.root ? this.root.bc() : null;
    return this.ta ? J(new T(null, 2, 5, U, [null, this.Aa], null), a) : a;
  }
  return null;
};
g.C = function(a, b) {
  return new Tg(b, this.h, this.root, this.ta, this.Aa, this.i);
};
g.G = function(a, b) {
  if (Qd(b)) {
    return Ib(this, B.a(b, 0), B.a(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (Qd(e)) {
      c = Ib(c, B.a(e, 0), B.a(e, 1)), d = H(d);
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
        return this.t(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.w(null, c);
  };
  a.d = function(a, c, d) {
    return this.t(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(nb(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.t(null, a, b);
};
var ug = new Tg(null, 0, null, !1, null, dd);
function Ed(a, b) {
  for (var c = a.length, d = 0, e = lc(ug);;) {
    if (d < c) {
      var f = d + 1, e = e.Yb(null, a[d], b[d]), d = f
    } else {
      return nc(e);
    }
  }
}
Tg.prototype[mb] = function() {
  return Yc(this);
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
    if (b ? b.g & 2048 || b.rd || (b.g ? 0 : y(Lb, b)) : y(Lb, b)) {
      return Wg(a, je.b ? je.b(b) : je.call(null, b), ke.b ? ke.b(b) : ke.call(null, b));
    }
    for (var c = D(b), d = a;;) {
      var e = F(c);
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
      var d = new yg;
      b = (null == a.root ? Gg : a.root).Na(a.M, 0, Mc(b), b, c, d);
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
  return null == b ? this.ta ? this.Aa : null : null == this.root ? null : this.root.mb(0, Mc(b), b);
};
g.t = function(a, b, c) {
  return null == b ? this.ta ? this.Aa : c : null == this.root ? c : this.root.mb(0, Mc(b), b, c);
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
  this.i = e;
  this.g = 32374862;
  this.r = 0;
}
g = Yg.prototype;
g.toString = function() {
  return Dc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.A = function() {
  return this.l;
};
g.I = function() {
  return 0 > this.h ? L(H(this)) + 1 : this.h;
};
g.F = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ad(this);
};
g.q = function(a, b) {
  return qd(this, b);
};
g.Q = function() {
  return td(Vc, this.l);
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
  var a = F(this.stack), a = Xg(this.gc ? a.right : a.left, H(this.stack), this.gc);
  return null != a ? new Yg(null, a, this.gc, this.h - 1, null) : Vc;
};
g.H = function() {
  return this;
};
g.C = function(a, b) {
  return new Yg(b, this.stack, this.gc, this.h, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
Yg.prototype[mb] = function() {
  return Yc(this);
};
function Zg(a, b, c) {
  return new Yg(null, Xg(a, null, b), b, c, null);
}
function $g(a, b, c, d) {
  return c instanceof V ? c.left instanceof V ? new V(c.key, c.n, c.left.gb(), new ah(a, b, c.right, d, null), null) : c.right instanceof V ? new V(c.right.key, c.right.n, new ah(c.key, c.n, c.left, c.right.left, null), new ah(a, b, c.right.right, d, null), null) : new ah(a, b, c, d, null) : new ah(a, b, c, d, null);
}
function bh(a, b, c, d) {
  return d instanceof V ? d.right instanceof V ? new V(d.key, d.n, new ah(a, b, c, d.left, null), d.right.gb(), null) : d.left instanceof V ? new V(d.left.key, d.left.n, new ah(a, b, c, d.left.left, null), new ah(d.key, d.n, d.left.right, d.right, null), null) : new ah(a, b, c, d, null) : new ah(a, b, c, d, null);
}
function ch(a, b, c, d) {
  if (c instanceof V) {
    return new V(a, b, c.gb(), d, null);
  }
  if (d instanceof ah) {
    return bh(a, b, c, d.ec());
  }
  if (d instanceof V && d.left instanceof ah) {
    return new V(d.left.key, d.left.n, new ah(a, b, c, d.left.left, null), bh(d.key, d.n, d.left.right, d.right.ec()), null);
  }
  throw Error("red-black tree invariant violation");
}
function ah(a, b, c, d, e) {
  this.key = a;
  this.n = b;
  this.left = c;
  this.right = d;
  this.i = e;
  this.g = 32402207;
  this.r = 0;
}
g = ah.prototype;
g.Lc = function(a) {
  return a.Nc(this);
};
g.ec = function() {
  return new V(this.key, this.n, this.left, this.right, null);
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
g.t = function(a, b, c) {
  return B.d(this, b, c);
};
g.O = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.n : null;
};
g.sa = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.n : c;
};
g.wb = function(a, b, c) {
  return(new T(null, 2, 5, U, [this.key, this.n], null)).wb(null, b, c);
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
  return new T(null, 1, 5, U, [this.key], null);
};
g.F = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ad(this);
};
g.q = function(a, b) {
  return qd(this, b);
};
g.Q = function() {
  return zd;
};
g.S = function(a, b) {
  return hd(this, b);
};
g.T = function(a, b, c) {
  return id(this, b, c);
};
g.pa = function(a, b, c) {
  return N.d(new T(null, 2, 5, U, [this.key, this.n], null), b, c);
};
g.H = function() {
  return zb(zb(Vc, this.n), this.key);
};
g.C = function(a, b) {
  return td(new T(null, 2, 5, U, [this.key, this.n], null), b);
};
g.G = function(a, b) {
  return new T(null, 3, 5, U, [this.key, this.n, b], null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.w(null, c);
      case 3:
        return this.t(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.w(null, c);
  };
  a.d = function(a, c, d) {
    return this.t(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(nb(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.t(null, a, b);
};
ah.prototype[mb] = function() {
  return Yc(this);
};
function V(a, b, c, d, e) {
  this.key = a;
  this.n = b;
  this.left = c;
  this.right = d;
  this.i = e;
  this.g = 32402207;
  this.r = 0;
}
g = V.prototype;
g.Lc = function(a) {
  return new V(this.key, this.n, this.left, a, null);
};
g.ec = function() {
  throw Error("red-black tree invariant violation");
};
g.gb = function() {
  return new ah(this.key, this.n, this.left, this.right, null);
};
g.Kc = function(a) {
  return new V(this.key, this.n, a, this.right, null);
};
g.replace = function(a, b, c, d) {
  return new V(a, b, c, d, null);
};
g.Mc = function(a) {
  return this.left instanceof V ? new V(this.key, this.n, this.left.gb(), new ah(a.key, a.n, this.right, a.right, null), null) : this.right instanceof V ? new V(this.right.key, this.right.n, new ah(this.key, this.n, this.left, this.right.left, null), new ah(a.key, a.n, this.right.right, a.right, null), null) : new ah(a.key, a.n, this, a.right, null);
};
g.Nc = function(a) {
  return this.right instanceof V ? new V(this.key, this.n, new ah(a.key, a.n, a.left, this.left, null), this.right.gb(), null) : this.left instanceof V ? new V(this.left.key, this.left.n, new ah(a.key, a.n, a.left, this.left.left, null), new ah(this.key, this.n, this.left.right, this.right, null), null) : new ah(a.key, a.n, a.left, this, null);
};
g.w = function(a, b) {
  return B.d(this, b, null);
};
g.t = function(a, b, c) {
  return B.d(this, b, c);
};
g.O = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.n : null;
};
g.sa = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.n : c;
};
g.wb = function(a, b, c) {
  return(new T(null, 2, 5, U, [this.key, this.n], null)).wb(null, b, c);
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
  return new T(null, 1, 5, U, [this.key], null);
};
g.F = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ad(this);
};
g.q = function(a, b) {
  return qd(this, b);
};
g.Q = function() {
  return zd;
};
g.S = function(a, b) {
  return hd(this, b);
};
g.T = function(a, b, c) {
  return id(this, b, c);
};
g.pa = function(a, b, c) {
  return N.d(new T(null, 2, 5, U, [this.key, this.n], null), b, c);
};
g.H = function() {
  return zb(zb(Vc, this.n), this.key);
};
g.C = function(a, b) {
  return td(new T(null, 2, 5, U, [this.key, this.n], null), b);
};
g.G = function(a, b) {
  return new T(null, 3, 5, U, [this.key, this.n, b], null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.w(null, c);
      case 3:
        return this.t(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.w(null, c);
  };
  a.d = function(a, c, d) {
    return this.t(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(nb(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.t(null, a, b);
};
V.prototype[mb] = function() {
  return Yc(this);
};
var dh = function dh(b, c, d, e, f) {
  if (null == c) {
    return new V(d, e, null, null, null);
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
  if (b instanceof V) {
    if (c instanceof V) {
      var d = eh(b.right, c.left);
      return d instanceof V ? new V(d.key, d.n, new V(b.key, b.n, b.left, d.left, null), new V(c.key, c.n, d.right, c.right, null), null) : new V(b.key, b.n, b.left, new V(c.key, c.n, d, c.right, null), null);
    }
    return new V(b.key, b.n, b.left, eh(b.right, c), null);
  }
  if (c instanceof V) {
    return new V(c.key, c.n, eh(b, c.left), c.right, null);
  }
  d = eh(b.right, c.left);
  return d instanceof V ? new V(d.key, d.n, new ah(b.key, b.n, b.left, d.left, null), new ah(c.key, c.n, d.right, c.right, null), null) : ch(b.key, b.n, b.left, new ah(c.key, c.n, d, c.right, null));
}, fh = function fh(b, c, d, e) {
  if (null != c) {
    var f;
    f = c.key;
    f = b.a ? b.a(d, f) : b.call(null, d, f);
    if (0 === f) {
      return e[0] = c, eh(c.left, c.right);
    }
    if (0 > f) {
      return b = fh(b, c.left, d, e), null != b || null != e[0] ? c.left instanceof ah ? ch(c.key, c.n, b, c.right) : new V(c.key, c.n, b, c.right, null) : null;
    }
    b = fh(b, c.right, d, e);
    if (null != b || null != e[0]) {
      if (c.right instanceof ah) {
        if (e = c.key, d = c.n, c = c.left, b instanceof V) {
          c = new V(e, d, c, b.gb(), null);
        } else {
          if (c instanceof ah) {
            c = $g(e, d, c.ec(), b);
          } else {
            if (c instanceof V && c.right instanceof ah) {
              c = new V(c.right.key, c.right.n, $g(c.key, c.n, c.left.ec(), c.right.left), new ah(e, d, c.right.right, b, null), null);
            } else {
              throw Error("red-black tree invariant violation");
            }
          }
        }
      } else {
        c = new V(c.key, c.n, c.left, b, null);
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
  this.i = e;
  this.g = 418776847;
  this.r = 8192;
}
g = hh.prototype;
g.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.O(null, e), h = M(f, 0), f = M(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = D(b)) {
        Rd(b) ? (c = rc(b), b = sc(b), h = c, d = L(c), c = h) : (c = F(b), h = M(c, 0), c = f = M(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.get = function(a, b) {
  return this.t(null, a, b);
};
g.entries = function() {
  return kg(D(this));
};
g.toString = function() {
  return Dc(this);
};
g.keys = function() {
  return Yc(qg.b ? qg.b(this) : qg.call(null, this));
};
g.values = function() {
  return Yc(rg.b ? rg.b(this) : rg.call(null, this));
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
  return Gb.d(this, b, null);
};
g.t = function(a, b, c) {
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
  var a = this.i;
  return null != a ? a : this.i = a = cd(this);
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
  return null == d ? (a = Bd(a, 0), Wc.a(c, a.n) ? this : new hh(this.Fa, gh(this.Fa, this.ua, b, c), this.h, this.l, null)) : new hh(this.Fa, d.gb(), this.h + 1, this.l, null);
};
g.kc = function(a, b) {
  return null != ih(this, b);
};
g.H = function() {
  return 0 < this.h ? Zg(this.ua, !0, this.h) : null;
};
g.C = function(a, b) {
  return new hh(this.Fa, this.ua, this.h, b, this.i);
};
g.G = function(a, b) {
  if (Qd(b)) {
    return Ib(this, B.a(b, 0), B.a(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (Qd(e)) {
      c = Ib(c, B.a(e, 0), B.a(e, 1)), d = H(d);
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
        return this.t(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.w(null, c);
  };
  a.d = function(a, c, d) {
    return this.t(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(nb(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.t(null, a, b);
};
var jh = new hh(Yd, null, 0, null, dd);
hh.prototype[mb] = function() {
  return Yc(this);
};
var lf = function lf() {
  return lf.k(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
};
lf.k = function(a) {
  for (var b = D(a), c = lc(ug);;) {
    if (b) {
      a = H(H(b));
      var d = F(b), b = F(H(b)), c = oc(c, d, b), b = a;
    } else {
      return nc(c);
    }
  }
};
lf.v = 0;
lf.u = function(a) {
  return lf.k(D(a));
};
function kh(a, b) {
  this.qa = a;
  this.ra = b;
  this.g = 32374988;
  this.r = 0;
}
g = kh.prototype;
g.toString = function() {
  return Dc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.A = function() {
  return this.ra;
};
g.ja = function() {
  var a = this.qa, a = (a ? a.g & 128 || a.mc || (a.g ? 0 : y(Eb, a)) : y(Eb, a)) ? this.qa.ja(null) : H(this.qa);
  return null == a ? null : new kh(a, this.ra);
};
g.F = function() {
  return ad(this);
};
g.q = function(a, b) {
  return qd(this, b);
};
g.Q = function() {
  return td(Vc, this.ra);
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
  var a = this.qa, a = (a ? a.g & 128 || a.mc || (a.g ? 0 : y(Eb, a)) : y(Eb, a)) ? this.qa.ja(null) : H(this.qa);
  return null != a ? new kh(a, this.ra) : Vc;
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
kh.prototype[mb] = function() {
  return Yc(this);
};
function qg(a) {
  return(a = D(a)) ? new kh(a, null) : null;
}
function je(a) {
  return Mb(a);
}
function lh(a, b) {
  this.qa = a;
  this.ra = b;
  this.g = 32374988;
  this.r = 0;
}
g = lh.prototype;
g.toString = function() {
  return Dc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.A = function() {
  return this.ra;
};
g.ja = function() {
  var a = this.qa, a = (a ? a.g & 128 || a.mc || (a.g ? 0 : y(Eb, a)) : y(Eb, a)) ? this.qa.ja(null) : H(this.qa);
  return null == a ? null : new lh(a, this.ra);
};
g.F = function() {
  return ad(this);
};
g.q = function(a, b) {
  return qd(this, b);
};
g.Q = function() {
  return td(Vc, this.ra);
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
  var a = this.qa, a = (a ? a.g & 128 || a.mc || (a.g ? 0 : y(Eb, a)) : y(Eb, a)) ? this.qa.ja(null) : H(this.qa);
  return null != a ? new lh(a, this.ra) : Vc;
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
lh.prototype[mb] = function() {
  return Yc(this);
};
function rg(a) {
  return(a = D(a)) ? new lh(a, null) : null;
}
function ke(a) {
  return Nb(a);
}
var mh = function mh() {
  return mh.k(arguments[0], 1 < arguments.length ? new E(Array.prototype.slice.call(arguments, 1), 0) : null);
};
mh.k = function(a, b) {
  return w(Ze(be, b)) ? $d(function(a) {
    return function(b, e) {
      return rb(a, w(b) ? b : Q, D(e));
    };
  }(function(b, d) {
    var e = F(d), f = F(H(d));
    return Xd(b, e) ? N.d(b, e, function() {
      var d = Cd(b, e);
      return a.a ? a.a(d, f) : a.call(null, d, f);
    }()) : N.d(b, e, f);
  }), b) : null;
};
mh.v = 1;
mh.u = function(a) {
  var b = F(a);
  a = H(a);
  return mh.k(b, a);
};
function nh(a, b, c) {
  this.l = a;
  this.yb = b;
  this.i = c;
  this.g = 15077647;
  this.r = 8196;
}
g = nh.prototype;
g.toString = function() {
  return Dc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.keys = function() {
  return Yc(D(this));
};
g.entries = function() {
  return mg(D(this));
};
g.values = function() {
  return Yc(D(this));
};
g.has = function(a) {
  return Xd(this, a);
};
g.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.O(null, e), h = M(f, 0), f = M(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = D(b)) {
        Rd(b) ? (c = rc(b), b = sc(b), h = c, d = L(c), c = h) : (c = F(b), h = M(c, 0), c = f = M(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.w = function(a, b) {
  return Gb.d(this, b, null);
};
g.t = function(a, b, c) {
  return Hb(this.yb, b) ? b : c;
};
g.A = function() {
  return this.l;
};
g.I = function() {
  return wb(this.yb);
};
g.F = function() {
  var a = this.i;
  return null != a ? a : this.i = a = cd(this);
};
g.q = function(a, b) {
  return Nd(b) && L(this) === L(b) && Ye(function(a) {
    return function(b) {
      return Xd(a, b);
    };
  }(this), b);
};
g.Cb = function() {
  return new oh(lc(this.yb));
};
g.Q = function() {
  return td(ph, this.l);
};
g.zc = function(a, b) {
  return new nh(this.l, Kb(this.yb, b), null);
};
g.H = function() {
  return qg(this.yb);
};
g.C = function(a, b) {
  return new nh(b, this.yb, this.i);
};
g.G = function(a, b) {
  return new nh(this.l, N.d(this.yb, b, null), null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.w(null, c);
      case 3:
        return this.t(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.w(null, c);
  };
  a.d = function(a, c, d) {
    return this.t(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(nb(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.t(null, a, b);
};
var ph = new nh(null, Q, dd);
function qh(a) {
  var b = a.length;
  if (b <= tg) {
    for (var c = 0, d = lc(Q);;) {
      if (c < b) {
        var e = c + 1, d = oc(d, a[c], null), c = e
      } else {
        return new nh(null, nc(d), null);
      }
    }
  } else {
    for (c = 0, d = lc(ph);;) {
      if (c < b) {
        e = c + 1, d = mc(d, a[c]), c = e;
      } else {
        return nc(d);
      }
    }
  }
}
nh.prototype[mb] = function() {
  return Yc(this);
};
function oh(a) {
  this.kb = a;
  this.r = 136;
  this.g = 259;
}
g = oh.prototype;
g.ub = function(a, b) {
  this.kb = oc(this.kb, b, null);
  return this;
};
g.vb = function() {
  return new nh(null, nc(this.kb), null);
};
g.I = function() {
  return L(this.kb);
};
g.w = function(a, b) {
  return Gb.d(this, b, null);
};
g.t = function(a, b, c) {
  return Gb.d(this.kb, b, Ud) === Ud ? c : b;
};
g.call = function() {
  function a(a, b, c) {
    return Gb.d(this.kb, b, Ud) === Ud ? c : b;
  }
  function b(a, b) {
    return Gb.d(this.kb, b, Ud) === Ud ? null : b;
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
  return this.call.apply(this, [this].concat(nb(b)));
};
g.b = function(a) {
  return Gb.d(this.kb, a, Ud) === Ud ? null : a;
};
g.a = function(a, b) {
  return Gb.d(this.kb, a, Ud) === Ud ? b : a;
};
function rh(a, b, c) {
  this.l = a;
  this.lb = b;
  this.i = c;
  this.g = 417730831;
  this.r = 8192;
}
g = rh.prototype;
g.toString = function() {
  return Dc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.keys = function() {
  return Yc(D(this));
};
g.entries = function() {
  return mg(D(this));
};
g.values = function() {
  return Yc(D(this));
};
g.has = function(a) {
  return Xd(this, a);
};
g.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.O(null, e), h = M(f, 0), f = M(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = D(b)) {
        Rd(b) ? (c = rc(b), b = sc(b), h = c, d = L(c), c = h) : (c = F(b), h = M(c, 0), c = f = M(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.w = function(a, b) {
  return Gb.d(this, b, null);
};
g.t = function(a, b, c) {
  a = ih(this.lb, b);
  return null != a ? a.key : c;
};
g.A = function() {
  return this.l;
};
g.I = function() {
  return L(this.lb);
};
g.Db = function() {
  return 0 < L(this.lb) ? S.a(je, gc(this.lb)) : null;
};
g.F = function() {
  var a = this.i;
  return null != a ? a : this.i = a = cd(this);
};
g.q = function(a, b) {
  return Nd(b) && L(this) === L(b) && Ye(function(a) {
    return function(b) {
      return Xd(a, b);
    };
  }(this), b);
};
g.Q = function() {
  return new rh(this.l, xb(this.lb), 0);
};
g.zc = function(a, b) {
  return new rh(this.l, Fd.a(this.lb, b), null);
};
g.H = function() {
  return qg(this.lb);
};
g.C = function(a, b) {
  return new rh(b, this.lb, this.i);
};
g.G = function(a, b) {
  return new rh(this.l, N.d(this.lb, b, null), null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.w(null, c);
      case 3:
        return this.t(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.w(null, c);
  };
  a.d = function(a, c, d) {
    return this.t(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(nb(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.t(null, a, b);
};
var sh = new rh(null, jh, dd);
rh.prototype[mb] = function() {
  return Yc(this);
};
function th(a) {
  a = D(a);
  if (null == a) {
    return ph;
  }
  if (a instanceof E && 0 === a.o) {
    a = a.c;
    a: {
      for (var b = 0, c = lc(ph);;) {
        if (b < a.length) {
          var d = b + 1, c = c.ub(null, a[b]), b = d
        } else {
          break a;
        }
      }
    }
    return c.vb(null);
  }
  for (d = lc(ph);;) {
    if (null != a) {
      b = a.ja(null), d = d.ub(null, a.U(null)), a = b;
    } else {
      return d.vb(null);
    }
  }
}
function uh() {
  return rb(zb, sh, 0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
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
  for (var c = lc(Q), d = D(a), e = D(b);;) {
    if (d && e) {
      var f = F(d), h = F(e), c = oc(c, f, h), d = H(d), e = H(e)
    } else {
      return nc(c);
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
      return wh.k(arguments[0], arguments[1], arguments[2], new E(Array.prototype.slice.call(arguments, 3), 0));
  }
};
wh.a = function(a, b) {
  return b;
};
wh.d = function(a, b, c) {
  return(a.b ? a.b(b) : a.call(null, b)) > (a.b ? a.b(c) : a.call(null, c)) ? b : c;
};
wh.k = function(a, b, c, d) {
  return rb(function(b, c) {
    return wh.d(a, b, c);
  }, wh.d(a, b, c), d);
};
wh.u = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  var d = H(c), c = F(d), d = H(d);
  return wh.k(b, a, c, d);
};
wh.v = 3;
function xh(a, b) {
  return new te(null, function() {
    var c = D(b);
    if (c) {
      var d;
      d = F(c);
      d = a.b ? a.b(d) : a.call(null, d);
      c = w(d) ? J(F(c), xh(a, Uc(c))) : null;
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
  this.i = e;
  this.g = 32375006;
  this.r = 8192;
}
g = zh.prototype;
g.toString = function() {
  return Dc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.O = function(a, b) {
  if (b < wb(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
g.sa = function(a, b, c) {
  return b < wb(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
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
  if (jb(dc(this))) {
    return 0;
  }
  var a = (this.end - this.start) / this.step;
  return Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
};
g.F = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ad(this);
};
g.q = function(a, b) {
  return qd(this, b);
};
g.Q = function() {
  return td(Vc, this.l);
};
g.S = function(a, b) {
  return hd(this, b);
};
g.T = function(a, b, c) {
  for (a = this.start;;) {
    if (0 < this.step ? a < this.end : a > this.end) {
      var d = a;
      c = b.a ? b.a(c, d) : b.call(null, c, d);
      if (gd(c)) {
        return b = c, I.b ? I.b(b) : I.call(null, b);
      }
      a += this.step;
    } else {
      return c;
    }
  }
};
g.U = function() {
  return null == dc(this) ? null : this.start;
};
g.ma = function() {
  return null != dc(this) ? new zh(this.l, this.start + this.step, this.end, this.step, null) : Vc;
};
g.H = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
g.C = function(a, b) {
  return new zh(b, this.start, this.end, this.step, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
zh.prototype[mb] = function() {
  return Yc(this);
};
function Ah(a, b, c, d, e, f, h) {
  var k = Wa;
  Wa = null == Wa ? null : Wa - 1;
  try {
    if (null != Wa && 0 > Wa) {
      return hc(a, "#");
    }
    hc(a, c);
    if (0 === fb.b(f)) {
      D(h) && hc(a, function() {
        var a = Bh.b(f);
        return w(a) ? a : "...";
      }());
    } else {
      if (D(h)) {
        var l = F(h);
        b.d ? b.d(l, a, f) : b.call(null, l, a, f);
      }
      for (var m = H(h), p = fb.b(f) - 1;;) {
        if (!m || null != p && 0 === p) {
          D(m) && 0 === p && (hc(a, d), hc(a, function() {
            var a = Bh.b(f);
            return w(a) ? a : "...";
          }()));
          break;
        } else {
          hc(a, d);
          var q = F(m);
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
    return hc(a, e);
  } finally {
    Wa = k;
  }
}
function Ch(a, b) {
  for (var c = D(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.O(null, f);
      hc(a, h);
      f += 1;
    } else {
      if (c = D(c)) {
        d = c, Rd(d) ? (c = rc(d), e = sc(d), d = c, h = L(c), c = e, e = h) : (h = F(d), hc(a, h), c = H(d), d = null, e = 0), f = 0;
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
    return hc(b, "nil");
  }
  if (void 0 === a) {
    return hc(b, "#\x3cundefined\x3e");
  }
  if (w(function() {
    var b = Cd(c, db);
    return w(b) ? (b = a ? a.g & 131072 || a.sd ? !0 : a.g ? !1 : y(Vb, a) : y(Vb, a)) ? Jd(a) : b : b;
  }())) {
    hc(b, "^");
    var d = Jd(a);
    W.d ? W.d(d, b, c) : W.call(null, d, b, c);
    hc(b, " ");
  }
  return null == a ? hc(b, "nil") : a.Ib ? a.$b(a, b, c) : a && (a.g & 2147483648 || a.N) ? a.B(null, b, c) : kb(a) === Boolean || "number" === typeof a ? hc(b, "" + A(a)) : null != a && a.constructor === Object ? (hc(b, "#js "), d = S.a(function(b) {
    return new T(null, 2, 5, U, [re.b(b), a[b]], null);
  }, Sd(a)), Gh.s ? Gh.s(d, W, b, c) : Gh.call(null, d, W, b, c)) : ib(a) ? Ah(b, W, "#js [", " ", "]", c, a) : w(ea(a)) ? w(cb.b(c)) ? hc(b, Eh(a)) : hc(b, a) : Gd(a) ? Ch(b, sd(["#\x3c", "" + A(a), "\x3e"], 0)) : a instanceof Date ? (d = function(a, b) {
    for (var c = "" + A(a);;) {
      if (L(c) < b) {
        c = [A("0"), A(c)].join("");
      } else {
        return c;
      }
    }
  }, Ch(b, sd(['#inst "', "" + A(a.getUTCFullYear()), "-", d(a.getUTCMonth() + 1, 2), "-", d(a.getUTCDate(), 2), "T", d(a.getUTCHours(), 2), ":", d(a.getUTCMinutes(), 2), ":", d(a.getUTCSeconds(), 2), ".", d(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : w(a instanceof RegExp) ? Ch(b, sd(['#"', a.source, '"'], 0)) : (a ? a.g & 2147483648 || a.N || (a.g ? 0 : y(ic, a)) : y(ic, a)) ? jc(a, b, c) : Ch(b, sd(["#\x3c", "" + A(a), "\x3e"], 0));
}
function W(a, b, c) {
  var d = Hh.b(c);
  return w(d) ? (c = N.d(c, Ih, Fh), d.d ? d.d(a, b, c) : d.call(null, a, b, c)) : Fh(a, b, c);
}
function of() {
  return Jh(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
}
function Jh(a) {
  var b = $a();
  if (Md(a)) {
    b = "";
  } else {
    var c = A, d = new La;
    a: {
      var e = new Cc(d);
      W(F(a), e, b);
      a = D(H(a));
      for (var f = null, h = 0, k = 0;;) {
        if (k < h) {
          var l = f.O(null, k);
          hc(e, " ");
          W(l, e, b);
          k += 1;
        } else {
          if (a = D(a)) {
            f = a, Rd(f) ? (a = rc(f), h = sc(f), f = a, l = L(a), a = h, h = l) : (l = F(f), hc(e, " "), W(l, e, b), a = H(f), f = null, h = 0), k = 0;
          } else {
            break a;
          }
        }
      }
    }
    b = "" + c(d);
  }
  return b;
}
function Gh(a, b, c, d) {
  return Ah(c, function(a, c, d) {
    var k = Mb(a);
    b.d ? b.d(k, c, d) : b.call(null, k, c, d);
    hc(c, " ");
    a = Nb(a);
    return b.d ? b.d(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, D(a));
}
pf.prototype.N = !0;
pf.prototype.B = function(a, b, c) {
  hc(b, "#\x3cVolatile: ");
  W(this.state, b, c);
  return hc(b, "\x3e");
};
E.prototype.N = !0;
E.prototype.B = function(a, b, c) {
  return Ah(b, W, "(", " ", ")", c, this);
};
te.prototype.N = !0;
te.prototype.B = function(a, b, c) {
  return Ah(b, W, "(", " ", ")", c, this);
};
Yg.prototype.N = !0;
Yg.prototype.B = function(a, b, c) {
  return Ah(b, W, "(", " ", ")", c, this);
};
Pg.prototype.N = !0;
Pg.prototype.B = function(a, b, c) {
  return Ah(b, W, "(", " ", ")", c, this);
};
ah.prototype.N = !0;
ah.prototype.B = function(a, b, c) {
  return Ah(b, W, "[", " ", "]", c, this);
};
og.prototype.N = !0;
og.prototype.B = function(a, b, c) {
  return Ah(b, W, "(", " ", ")", c, this);
};
rh.prototype.N = !0;
rh.prototype.B = function(a, b, c) {
  return Ah(b, W, "#{", " ", "}", c, this);
};
Zf.prototype.N = !0;
Zf.prototype.B = function(a, b, c) {
  return Ah(b, W, "(", " ", ")", c, this);
};
pe.prototype.N = !0;
pe.prototype.B = function(a, b, c) {
  return Ah(b, W, "(", " ", ")", c, this);
};
pd.prototype.N = !0;
pd.prototype.B = function(a, b, c) {
  return Ah(b, W, "(", " ", ")", c, this);
};
Tg.prototype.N = !0;
Tg.prototype.B = function(a, b, c) {
  return Gh(this, W, b, c);
};
Rg.prototype.N = !0;
Rg.prototype.B = function(a, b, c) {
  return Ah(b, W, "(", " ", ")", c, this);
};
cg.prototype.N = !0;
cg.prototype.B = function(a, b, c) {
  return Ah(b, W, "[", " ", "]", c, this);
};
hh.prototype.N = !0;
hh.prototype.B = function(a, b, c) {
  return Gh(this, W, b, c);
};
nh.prototype.N = !0;
nh.prototype.B = function(a, b, c) {
  return Ah(b, W, "#{", " ", "}", c, this);
};
xe.prototype.N = !0;
xe.prototype.B = function(a, b, c) {
  return Ah(b, W, "(", " ", ")", c, this);
};
hf.prototype.N = !0;
hf.prototype.B = function(a, b, c) {
  hc(b, "#\x3cAtom: ");
  W(this.state, b, c);
  return hc(b, "\x3e");
};
lh.prototype.N = !0;
lh.prototype.B = function(a, b, c) {
  return Ah(b, W, "(", " ", ")", c, this);
};
V.prototype.N = !0;
V.prototype.B = function(a, b, c) {
  return Ah(b, W, "[", " ", "]", c, this);
};
T.prototype.N = !0;
T.prototype.B = function(a, b, c) {
  return Ah(b, W, "[", " ", "]", c, this);
};
me.prototype.N = !0;
me.prototype.B = function(a, b) {
  return hc(b, "()");
};
Xe.prototype.N = !0;
Xe.prototype.B = function(a, b, c) {
  return Ah(b, W, "(", " ", ")", c, this);
};
ab.prototype.N = !0;
ab.prototype.B = function(a, b, c) {
  return Gh(this, W, b, c);
};
zh.prototype.N = !0;
zh.prototype.B = function(a, b, c) {
  return Ah(b, W, "(", " ", ")", c, this);
};
kh.prototype.N = !0;
kh.prototype.B = function(a, b, c) {
  return Ah(b, W, "(", " ", ")", c, this);
};
le.prototype.N = !0;
le.prototype.B = function(a, b, c) {
  return Ah(b, W, "(", " ", ")", c, this);
};
Pc.prototype.Pb = !0;
Pc.prototype.Qb = function(a, b) {
  return Oc(this, b);
};
O.prototype.Pb = !0;
O.prototype.Qb = function(a, b) {
  return qe(this, b);
};
cg.prototype.Pb = !0;
cg.prototype.Qb = function(a, b) {
  return Zd(this, b);
};
T.prototype.Pb = !0;
T.prototype.Qb = function(a, b) {
  return Zd(this, b);
};
var Kh = null;
function Lh() {
  null == Kh && (Kh = kf ? kf(0) : jf.call(null, 0));
  var a = [A("G__"), A(ff.a(Kh, ed))].join("");
  return a instanceof Pc ? a : Qc(null, a);
}
function Mh(a, b) {
  this.na = a;
  this.value = b;
  this.g = 32768;
  this.r = 1;
}
Mh.prototype.Bb = function() {
  w(this.na) && (this.value = this.na.m ? this.na.m() : this.na.call(null), this.na = null);
  return this.value;
};
function Nh(a) {
  return function(b, c) {
    var d = a.a ? a.a(b, c) : a.call(null, b, c);
    return gd(d) ? new fd(d) : d;
  };
}
function Oh(a) {
  return function(b) {
    return function() {
      function c(a, c) {
        return rb(b, a, c);
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
  }(Nh(a));
}
var Ph = {}, Qh = function Qh(b) {
  if (b ? b.od : b) {
    return b.od(b);
  }
  var c;
  c = Qh[n(null == b ? null : b)];
  if (!c && (c = Qh._, !c)) {
    throw z("IEncodeJS.-clj-\x3ejs", b);
  }
  return c.call(null, b);
};
function Rh(a) {
  return(a ? w(w(null) ? null : a.nd) || (a.Hb ? 0 : y(Ph, a)) : y(Ph, a)) ? Qh(a) : "string" === typeof a || "number" === typeof a || a instanceof O || a instanceof Pc ? Sh.b ? Sh.b(a) : Sh.call(null, a) : Jh(sd([a], 0));
}
var Sh = function Sh(b) {
  if (null == b) {
    return null;
  }
  if (b ? w(w(null) ? null : b.nd) || (b.Hb ? 0 : y(Ph, b)) : y(Ph, b)) {
    return Qh(b);
  }
  if (b instanceof O) {
    return se(b);
  }
  if (b instanceof Pc) {
    return "" + A(b);
  }
  if (Pd(b)) {
    var c = {};
    b = D(b);
    for (var d = null, e = 0, f = 0;;) {
      if (f < e) {
        var h = d.O(null, f), k = M(h, 0), h = M(h, 1);
        c[Rh(k)] = Sh(h);
        f += 1;
      } else {
        if (b = D(b)) {
          Rd(b) ? (e = rc(b), b = sc(b), d = e, e = L(e)) : (e = F(b), d = M(e, 0), e = M(e, 1), c[Rh(d)] = Sh(e), b = H(b), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (null == b ? 0 : b ? b.g & 8 || b.Sd || (b.g ? 0 : y(yb, b)) : y(yb, b)) {
    c = [];
    b = D(S.a(Sh, b));
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        k = d.O(null, f), c.push(k), f += 1;
      } else {
        if (b = D(b)) {
          d = b, Rd(d) ? (b = rc(d), f = sc(d), d = b, e = L(b), b = f) : (b = F(d), c.push(b), b = H(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return b;
}, Th = null;
function Uh() {
  if (null == Th) {
    var a = new ab(null, 3, [Vh, Q, Wh, Q, Xh, Q], null);
    Th = kf ? kf(a) : jf.call(null, a);
  }
  return Th;
}
function Yh(a, b, c) {
  var d = Wc.a(b, c);
  if (!d && !(d = Xd(Xh.b(a).call(null, b), c)) && (d = Qd(c)) && (d = Qd(b))) {
    if (d = L(c) === L(b)) {
      for (var e = !0, f = 0;;) {
        if (e && f !== L(c)) {
          e = Yh(a, function() {
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
function Zh(a) {
  var b;
  b = Uh();
  b = I.b ? I.b(b) : I.call(null, b);
  return Ne(Cd(Vh.b(b), a));
}
function $h(a, b, c, d) {
  ff.a(a, function() {
    return I.b ? I.b(b) : I.call(null, b);
  });
  ff.a(c, function() {
    return I.b ? I.b(d) : I.call(null, d);
  });
}
var ai = function ai(b, c, d) {
  var e = (I.b ? I.b(d) : I.call(null, d)).call(null, b), e = w(w(e) ? e.b ? e.b(c) : e.call(null, c) : e) ? !0 : null;
  if (w(e)) {
    return e;
  }
  e = function() {
    for (var e = Zh(c);;) {
      if (0 < L(e)) {
        ai(b, F(e), d), e = Uc(e);
      } else {
        return null;
      }
    }
  }();
  if (w(e)) {
    return e;
  }
  e = function() {
    for (var e = Zh(b);;) {
      if (0 < L(e)) {
        ai(F(e), c, d), e = Uc(e);
      } else {
        return null;
      }
    }
  }();
  return w(e) ? e : !1;
};
function bi(a, b, c) {
  c = ai(a, b, c);
  if (w(c)) {
    a = c;
  } else {
    c = Yh;
    var d;
    d = Uh();
    d = I.b ? I.b(d) : I.call(null, d);
    a = c(d, a, b);
  }
  return a;
}
var ci = function ci(b, c, d, e, f, h, k) {
  var l = rb(function(e, h) {
    var k = M(h, 0);
    M(h, 1);
    if (Yh(I.b ? I.b(d) : I.call(null, d), c, k)) {
      var l;
      l = (l = null == e) ? l : bi(k, F(e), f);
      l = w(l) ? h : e;
      if (!w(bi(F(l), k, f))) {
        throw Error([A("Multiple methods in multimethod '"), A(b), A("' match dispatch value: "), A(c), A(" -\x3e "), A(k), A(" and "), A(F(l)), A(", and neither is preferred")].join(""));
      }
      return l;
    }
    return e;
  }, null, I.b ? I.b(e) : I.call(null, e));
  if (w(l)) {
    if (Wc.a(I.b ? I.b(k) : I.call(null, k), I.b ? I.b(d) : I.call(null, d))) {
      return ff.s(h, N, c, F(H(l))), F(H(l));
    }
    $h(h, e, k, d);
    return ci(b, c, d, e, f, h, k);
  }
  return null;
};
function X(a, b) {
  throw Error([A("No method in multimethod '"), A(a), A("' for dispatch value: "), A(b)].join(""));
}
function di(a, b, c, d, e, f, h, k) {
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
g = di.prototype;
g.call = function() {
  function a(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x, C, G, K, R, ca) {
    a = this;
    var Ca = Me(a.f, b, c, d, e, sd([f, h, k, l, m, u, p, q, r, t, v, x, C, G, K, R, ca], 0)), vg = Y(this, Ca);
    w(vg) || X(a.name, Ca);
    return Me(vg, b, c, d, e, sd([f, h, k, l, m, u, p, q, r, t, v, x, C, G, K, R, ca], 0));
  }
  function b(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x, C, G, K, R) {
    a = this;
    var ca = a.f.fa ? a.f.fa(b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x, C, G, K, R) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x, C, G, K, R), Ca = Y(this, ca);
    w(Ca) || X(a.name, ca);
    return Ca.fa ? Ca.fa(b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x, C, G, K, R) : Ca.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x, C, G, K, R);
  }
  function c(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x, C, G, K) {
    a = this;
    var R = a.f.ea ? a.f.ea(b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x, C, G, K) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x, C, G, K), ca = Y(this, R);
    w(ca) || X(a.name, R);
    return ca.ea ? ca.ea(b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x, C, G, K) : ca.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x, C, G, K);
  }
  function d(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x, C, G) {
    a = this;
    var K = a.f.da ? a.f.da(b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x, C, G) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x, C, G), R = Y(this, K);
    w(R) || X(a.name, K);
    return R.da ? R.da(b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x, C, G) : R.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x, C, G);
  }
  function e(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x, C) {
    a = this;
    var G = a.f.ca ? a.f.ca(b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x, C) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x, C), K = Y(this, G);
    w(K) || X(a.name, G);
    return K.ca ? K.ca(b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x, C) : K.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x, C);
  }
  function f(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x) {
    a = this;
    var C = a.f.ba ? a.f.ba(b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x), G = Y(this, C);
    w(G) || X(a.name, C);
    return G.ba ? G.ba(b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x) : G.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v, x);
  }
  function h(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v) {
    a = this;
    var x = a.f.aa ? a.f.aa(b, c, d, e, f, h, k, l, m, u, p, q, r, t, v) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v), C = Y(this, x);
    w(C) || X(a.name, x);
    return C.aa ? C.aa(b, c, d, e, f, h, k, l, m, u, p, q, r, t, v) : C.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, v);
  }
  function k(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t) {
    a = this;
    var v = a.f.$ ? a.f.$(b, c, d, e, f, h, k, l, m, u, p, q, r, t) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t), x = Y(this, v);
    w(x) || X(a.name, v);
    return x.$ ? x.$(b, c, d, e, f, h, k, l, m, u, p, q, r, t) : x.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t);
  }
  function l(a, b, c, d, e, f, h, k, l, m, u, p, q, r) {
    a = this;
    var t = a.f.Z ? a.f.Z(b, c, d, e, f, h, k, l, m, u, p, q, r) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r), v = Y(this, t);
    w(v) || X(a.name, t);
    return v.Z ? v.Z(b, c, d, e, f, h, k, l, m, u, p, q, r) : v.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r);
  }
  function m(a, b, c, d, e, f, h, k, l, m, u, p, q) {
    a = this;
    var r = a.f.Y ? a.f.Y(b, c, d, e, f, h, k, l, m, u, p, q) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q), t = Y(this, r);
    w(t) || X(a.name, r);
    return t.Y ? t.Y(b, c, d, e, f, h, k, l, m, u, p, q) : t.call(null, b, c, d, e, f, h, k, l, m, u, p, q);
  }
  function p(a, b, c, d, e, f, h, k, l, m, u, p) {
    a = this;
    var q = a.f.X ? a.f.X(b, c, d, e, f, h, k, l, m, u, p) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p), r = Y(this, q);
    w(r) || X(a.name, q);
    return r.X ? r.X(b, c, d, e, f, h, k, l, m, u, p) : r.call(null, b, c, d, e, f, h, k, l, m, u, p);
  }
  function q(a, b, c, d, e, f, h, k, l, m, u) {
    a = this;
    var p = a.f.W ? a.f.W(b, c, d, e, f, h, k, l, m, u) : a.f.call(null, b, c, d, e, f, h, k, l, m, u), q = Y(this, p);
    w(q) || X(a.name, p);
    return q.W ? q.W(b, c, d, e, f, h, k, l, m, u) : q.call(null, b, c, d, e, f, h, k, l, m, u);
  }
  function r(a, b, c, d, e, f, h, k, l, m) {
    a = this;
    var u = a.f.ia ? a.f.ia(b, c, d, e, f, h, k, l, m) : a.f.call(null, b, c, d, e, f, h, k, l, m), p = Y(this, u);
    w(p) || X(a.name, u);
    return p.ia ? p.ia(b, c, d, e, f, h, k, l, m) : p.call(null, b, c, d, e, f, h, k, l, m);
  }
  function t(a, b, c, d, e, f, h, k, l) {
    a = this;
    var m = a.f.ha ? a.f.ha(b, c, d, e, f, h, k, l) : a.f.call(null, b, c, d, e, f, h, k, l), u = Y(this, m);
    w(u) || X(a.name, m);
    return u.ha ? u.ha(b, c, d, e, f, h, k, l) : u.call(null, b, c, d, e, f, h, k, l);
  }
  function v(a, b, c, d, e, f, h, k) {
    a = this;
    var l = a.f.ga ? a.f.ga(b, c, d, e, f, h, k) : a.f.call(null, b, c, d, e, f, h, k), m = Y(this, l);
    w(m) || X(a.name, l);
    return m.ga ? m.ga(b, c, d, e, f, h, k) : m.call(null, b, c, d, e, f, h, k);
  }
  function x(a, b, c, d, e, f, h) {
    a = this;
    var k = a.f.R ? a.f.R(b, c, d, e, f, h) : a.f.call(null, b, c, d, e, f, h), l = Y(this, k);
    w(l) || X(a.name, k);
    return l.R ? l.R(b, c, d, e, f, h) : l.call(null, b, c, d, e, f, h);
  }
  function C(a, b, c, d, e, f) {
    a = this;
    var h = a.f.J ? a.f.J(b, c, d, e, f) : a.f.call(null, b, c, d, e, f), k = Y(this, h);
    w(k) || X(a.name, h);
    return k.J ? k.J(b, c, d, e, f) : k.call(null, b, c, d, e, f);
  }
  function G(a, b, c, d, e) {
    a = this;
    var f = a.f.s ? a.f.s(b, c, d, e) : a.f.call(null, b, c, d, e), h = Y(this, f);
    w(h) || X(a.name, f);
    return h.s ? h.s(b, c, d, e) : h.call(null, b, c, d, e);
  }
  function K(a, b, c, d) {
    a = this;
    var e = a.f.d ? a.f.d(b, c, d) : a.f.call(null, b, c, d), f = Y(this, e);
    w(f) || X(a.name, e);
    return f.d ? f.d(b, c, d) : f.call(null, b, c, d);
  }
  function R(a, b, c) {
    a = this;
    var d = a.f.a ? a.f.a(b, c) : a.f.call(null, b, c), e = Y(this, d);
    w(e) || X(a.name, d);
    return e.a ? e.a(b, c) : e.call(null, b, c);
  }
  function ca(a, b) {
    a = this;
    var c = a.f.b ? a.f.b(b) : a.f.call(null, b), d = Y(this, c);
    w(d) || X(a.name, c);
    return d.b ? d.b(b) : d.call(null, b);
  }
  function Ca(a) {
    a = this;
    var b = a.f.m ? a.f.m() : a.f.call(null), c = Y(this, b);
    w(c) || X(a.name, b);
    return c.m ? c.m() : c.call(null);
  }
  var u = null, u = function(u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua, Ga, Na, Ua, gb, Ka, Oa, Xa, Ya, uc, Zc, ae) {
    switch(arguments.length) {
      case 1:
        return Ca.call(this, u);
      case 2:
        return ca.call(this, u, ba);
      case 3:
        return R.call(this, u, ba, fa);
      case 4:
        return K.call(this, u, ba, fa, ja);
      case 5:
        return G.call(this, u, ba, fa, ja, ma);
      case 6:
        return C.call(this, u, ba, fa, ja, ma, ta);
      case 7:
        return x.call(this, u, ba, fa, ja, ma, ta, va);
      case 8:
        return v.call(this, u, ba, fa, ja, ma, ta, va, ya);
      case 9:
        return t.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea);
      case 10:
        return r.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba);
      case 11:
        return q.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua);
      case 12:
        return p.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua, Ga);
      case 13:
        return m.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua, Ga, Na);
      case 14:
        return l.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua, Ga, Na, Ua);
      case 15:
        return k.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua, Ga, Na, Ua, gb);
      case 16:
        return h.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua, Ga, Na, Ua, gb, Ka);
      case 17:
        return f.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua, Ga, Na, Ua, gb, Ka, Oa);
      case 18:
        return e.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua, Ga, Na, Ua, gb, Ka, Oa, Xa);
      case 19:
        return d.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua, Ga, Na, Ua, gb, Ka, Oa, Xa, Ya);
      case 20:
        return c.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua, Ga, Na, Ua, gb, Ka, Oa, Xa, Ya, uc);
      case 21:
        return b.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua, Ga, Na, Ua, gb, Ka, Oa, Xa, Ya, uc, Zc);
      case 22:
        return a.call(this, u, ba, fa, ja, ma, ta, va, ya, Ea, Ba, ua, Ga, Na, Ua, gb, Ka, Oa, Xa, Ya, uc, Zc, ae);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  u.b = Ca;
  u.a = ca;
  u.d = R;
  u.s = K;
  u.J = G;
  u.R = C;
  u.ga = x;
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
  return this.call.apply(this, [this].concat(nb(b)));
};
g.m = function() {
  var a = this.f.m ? this.f.m() : this.f.call(null), b = Y(this, a);
  w(b) || X(this.name, a);
  return b.m ? b.m() : b.call(null);
};
g.b = function(a) {
  var b = this.f.b ? this.f.b(a) : this.f.call(null, a), c = Y(this, b);
  w(c) || X(this.name, b);
  return c.b ? c.b(a) : c.call(null, a);
};
g.a = function(a, b) {
  var c = this.f.a ? this.f.a(a, b) : this.f.call(null, a, b), d = Y(this, c);
  w(d) || X(this.name, c);
  return d.a ? d.a(a, b) : d.call(null, a, b);
};
g.d = function(a, b, c) {
  var d = this.f.d ? this.f.d(a, b, c) : this.f.call(null, a, b, c), e = Y(this, d);
  w(e) || X(this.name, d);
  return e.d ? e.d(a, b, c) : e.call(null, a, b, c);
};
g.s = function(a, b, c, d) {
  var e = this.f.s ? this.f.s(a, b, c, d) : this.f.call(null, a, b, c, d), f = Y(this, e);
  w(f) || X(this.name, e);
  return f.s ? f.s(a, b, c, d) : f.call(null, a, b, c, d);
};
g.J = function(a, b, c, d, e) {
  var f = this.f.J ? this.f.J(a, b, c, d, e) : this.f.call(null, a, b, c, d, e), h = Y(this, f);
  w(h) || X(this.name, f);
  return h.J ? h.J(a, b, c, d, e) : h.call(null, a, b, c, d, e);
};
g.R = function(a, b, c, d, e, f) {
  var h = this.f.R ? this.f.R(a, b, c, d, e, f) : this.f.call(null, a, b, c, d, e, f), k = Y(this, h);
  w(k) || X(this.name, h);
  return k.R ? k.R(a, b, c, d, e, f) : k.call(null, a, b, c, d, e, f);
};
g.ga = function(a, b, c, d, e, f, h) {
  var k = this.f.ga ? this.f.ga(a, b, c, d, e, f, h) : this.f.call(null, a, b, c, d, e, f, h), l = Y(this, k);
  w(l) || X(this.name, k);
  return l.ga ? l.ga(a, b, c, d, e, f, h) : l.call(null, a, b, c, d, e, f, h);
};
g.ha = function(a, b, c, d, e, f, h, k) {
  var l = this.f.ha ? this.f.ha(a, b, c, d, e, f, h, k) : this.f.call(null, a, b, c, d, e, f, h, k), m = Y(this, l);
  w(m) || X(this.name, l);
  return m.ha ? m.ha(a, b, c, d, e, f, h, k) : m.call(null, a, b, c, d, e, f, h, k);
};
g.ia = function(a, b, c, d, e, f, h, k, l) {
  var m = this.f.ia ? this.f.ia(a, b, c, d, e, f, h, k, l) : this.f.call(null, a, b, c, d, e, f, h, k, l), p = Y(this, m);
  w(p) || X(this.name, m);
  return p.ia ? p.ia(a, b, c, d, e, f, h, k, l) : p.call(null, a, b, c, d, e, f, h, k, l);
};
g.W = function(a, b, c, d, e, f, h, k, l, m) {
  var p = this.f.W ? this.f.W(a, b, c, d, e, f, h, k, l, m) : this.f.call(null, a, b, c, d, e, f, h, k, l, m), q = Y(this, p);
  w(q) || X(this.name, p);
  return q.W ? q.W(a, b, c, d, e, f, h, k, l, m) : q.call(null, a, b, c, d, e, f, h, k, l, m);
};
g.X = function(a, b, c, d, e, f, h, k, l, m, p) {
  var q = this.f.X ? this.f.X(a, b, c, d, e, f, h, k, l, m, p) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p), r = Y(this, q);
  w(r) || X(this.name, q);
  return r.X ? r.X(a, b, c, d, e, f, h, k, l, m, p) : r.call(null, a, b, c, d, e, f, h, k, l, m, p);
};
g.Y = function(a, b, c, d, e, f, h, k, l, m, p, q) {
  var r = this.f.Y ? this.f.Y(a, b, c, d, e, f, h, k, l, m, p, q) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q), t = Y(this, r);
  w(t) || X(this.name, r);
  return t.Y ? t.Y(a, b, c, d, e, f, h, k, l, m, p, q) : t.call(null, a, b, c, d, e, f, h, k, l, m, p, q);
};
g.Z = function(a, b, c, d, e, f, h, k, l, m, p, q, r) {
  var t = this.f.Z ? this.f.Z(a, b, c, d, e, f, h, k, l, m, p, q, r) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r), v = Y(this, t);
  w(v) || X(this.name, t);
  return v.Z ? v.Z(a, b, c, d, e, f, h, k, l, m, p, q, r) : v.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r);
};
g.$ = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t) {
  var v = this.f.$ ? this.f.$(a, b, c, d, e, f, h, k, l, m, p, q, r, t) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t), x = Y(this, v);
  w(x) || X(this.name, v);
  return x.$ ? x.$(a, b, c, d, e, f, h, k, l, m, p, q, r, t) : x.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t);
};
g.aa = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v) {
  var x = this.f.aa ? this.f.aa(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v), C = Y(this, x);
  w(C) || X(this.name, x);
  return C.aa ? C.aa(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v) : C.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v);
};
g.ba = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x) {
  var C = this.f.ba ? this.f.ba(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x), G = Y(this, C);
  w(G) || X(this.name, C);
  return G.ba ? G.ba(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x) : G.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x);
};
g.ca = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C) {
  var G = this.f.ca ? this.f.ca(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C), K = Y(this, G);
  w(K) || X(this.name, G);
  return K.ca ? K.ca(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C) : K.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C);
};
g.da = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G) {
  var K = this.f.da ? this.f.da(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G), R = Y(this, K);
  w(R) || X(this.name, K);
  return R.da ? R.da(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G) : R.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G);
};
g.ea = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K) {
  var R = this.f.ea ? this.f.ea(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K), ca = Y(this, R);
  w(ca) || X(this.name, R);
  return ca.ea ? ca.ea(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K) : ca.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K);
};
g.fa = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K, R) {
  var ca = this.f.fa ? this.f.fa(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K, R) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K, R), Ca = Y(this, ca);
  w(Ca) || X(this.name, ca);
  return Ca.fa ? Ca.fa(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K, R) : Ca.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K, R);
};
g.yc = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, v, x, C, G, K, R, ca) {
  var Ca = Me(this.f, a, b, c, d, sd([e, f, h, k, l, m, p, q, r, t, v, x, C, G, K, R, ca], 0)), u = Y(this, Ca);
  w(u) || X(this.name, Ca);
  return Me(u, a, b, c, d, sd([e, f, h, k, l, m, p, q, r, t, v, x, C, G, K, R, ca], 0));
};
function ei(a, b, c) {
  ff.s(a.dc, N, b, c);
  $h(a.qc, a.dc, a.ic, a.pc);
}
function Y(a, b) {
  Wc.a(function() {
    var b = a.ic;
    return I.b ? I.b(b) : I.call(null, b);
  }(), function() {
    var b = a.pc;
    return I.b ? I.b(b) : I.call(null, b);
  }()) || $h(a.qc, a.dc, a.ic, a.pc);
  var c = function() {
    var b = a.qc;
    return I.b ? I.b(b) : I.call(null, b);
  }().call(null, b);
  if (w(c)) {
    return c;
  }
  c = ci(a.name, b, a.pc, a.dc, a.Od, a.qc, a.ic);
  return w(c) ? c : function() {
    var b = a.dc;
    return I.b ? I.b(b) : I.call(null, b);
  }().call(null, a.Cd);
}
g.Vb = function() {
  return vc(this.name);
};
g.Wb = function() {
  return wc(this.name);
};
g.F = function() {
  return this[ia] || (this[ia] = ++ka);
};
var fi = new O(null, "y", "y", -1757859776), gi = new O(null, "ppath", "ppath", -1758182784), hi = new O(null, "event-sources", "event-sources", 708931713), ii = new O(null, "events-channel", "events-channel", 1892177121), ji = new O(null, "key-codes", "key-codes", 284454881), ki = new O(null, "definition", "definition", -1198729982), li = new O("zip", "branch?", "zip/branch?", -998880862), mi = new O(null, "children", "children", -940561982), ni = new O(null, "meta-key", "meta-key", 280559106), 
qi = new O(null, "r", "r", -471384190), ri = new O("zip", "children", "zip/children", -940194589), si = new O(null, "ifn", "ifn", 230683491), ti = new O(null, "tree", "tree", -196312028), ui = new O("jamesmacaulay.zelkova.signal", "source", "jamesmacaulay.zelkova.signal/source", -943992700), vi = new O(null, "kids-map", "kids-map", 643095940), db = new O(null, "meta", "meta", 1499536964), wi = new O(null, "dx", "dx", -381796732), eb = new O(null, "dup", "dup", 556298533), xi = new O(null, "dir", 
"dir", 1734754661), yi = new O(null, "alt", "alt", -3214426), mf = new O(null, "validator", "validator", -1966190681), zi = new O(null, "default", "default", -1987822328), Ai = new O(null, "finally-block", "finally-block", 832982472), Bi = new O(null, "sources", "sources", -321166424), Ci = new O(null, "events", "events", 1792552201), Di = new O(null, "value", "value", 305978217), Ei = new O(null, "kid-indexes-map", "kid-indexes-map", -1120910006), Fi = new O("jamesmacaulay.zelkova.keyboard", "up-events", 
"jamesmacaulay.zelkova.keyboard/up-events", -1589836342), Gi = new O(null, "dy", "dy", 1719547243), Hi = new O(null, "mult-map", "mult-map", 460417931), Z = new O(null, "recur", "recur", -437573268), Ii = new O("jamesmacaulay.zelkova.keyboard", "blur-events", "jamesmacaulay.zelkova.keyboard/blur-events", -453638708), Ji = new O(null, "catch-block", "catch-block", 1175212748), Ki = new O(null, "src", "src", -1651076051), Li = new O(null, "topic", "topic", -1960480691), Ih = new O(null, "fallback-impl", 
"fallback-impl", -1501286995), bb = new O(null, "flush-on-newline", "flush-on-newline", -151457939), Mi = new O(null, "l", "l", 1395893423), Wh = new O(null, "descendants", "descendants", 1824886031), Ni = new O("zip", "make-node", "zip/make-node", 1103800591), Xh = new O(null, "ancestors", "ancestors", -776045424), Oi = new O(null, "style", "style", -496642736), cb = new O(null, "readably", "readably", 1129599760), Pi = new O(null, "output-values-mult", "output-values-mult", 1026794288), Bh = new O(null, 
"more-marker", "more-marker", -14717935), Qi = new O(null, "write-port-channel", "write-port-channel", -776952302), Ri = new O("jamesmacaulay.zelkova.keyboard", "down-events", "jamesmacaulay.zelkova.keyboard/down-events", -435596590), Si = new O(null, "init-fn", "init-fn", 777257971), fb = new O(null, "print-length", "print-length", 1931866356), Ti = new O(null, "id", "id", -1388402092), Ui = new O(null, "class", "class", -2030961996), Vi = new O(null, "catch-exception", "catch-exception", -1997306795), 
Wi = new O(null, "opts", "opts", 155075701), Xi = new O(null, "relayed-event-topic", "relayed-event-topic", 323853461), Vh = new O(null, "parents", "parents", -2027538891), Yi = new O(null, "pnodes", "pnodes", 1739080565), Zi = new O(null, "prev", "prev", -1597069226), $i = new O(null, "changed?", "changed?", -437828330), aj = new O(null, "continue-block", "continue-block", -1852047850), bj = new O(null, "readport", "readport", -1909228810), cj = new O(null, "mult", "mult", 1466794774), dj = new O(null, 
"attrs", "attrs", -2090668713), ej = new O(null, "topsort", "topsort", -718814409), fj = new O(null, "inputs-by-topic", "inputs-by-topic", 1973950168), gj = new O(null, "x", "x", 2099068185), hj = new O(null, "tag", "tag", -1290361223), ij = new O(null, "end", "end", -268185958), jj = new O(null, "parents-map", "parents-map", -1048684902), kj = new O(null, "hierarchy", "hierarchy", -1053470341), lj = new O(null, "timestamp", "timestamp", 579478971), mj = new O(null, "msg-xform", "msg-xform", -1431252485), 
nj = new O(null, "signal", "signal", -1984951589), Hh = new O(null, "alt-impl", "alt-impl", 670969595), oj = new O(null, "root-node", "root-node", 296879230), pj = new O("dominator.core", "empty", "dominator.core/empty", 1128163454), qj = new O(null, "deps", "deps", 1883360319), rj = new O(null, "alt-key", "alt-key", -965170049);
var sj, tj, uj = {}, vj = function vj(b, c) {
  if (b ? b.Bc : b) {
    return b.Bc(0, c);
  }
  var d;
  d = vj[n(null == b ? null : b)];
  if (!d && (d = vj._, !d)) {
    throw z("ReadPort.take!", b);
  }
  return d.call(null, b, c);
}, wj = function wj(b, c, d) {
  if (b ? b.Fb : b) {
    return b.Fb(b, c, d);
  }
  var e;
  e = wj[n(null == b ? null : b)];
  if (!e && (e = wj._, !e)) {
    throw z("WritePort.put!", b);
  }
  return e.call(null, b, c, d);
}, xj = function xj(b) {
  if (b ? b.Eb : b) {
    return b.Eb(b);
  }
  var c;
  c = xj[n(null == b ? null : b)];
  if (!c && (c = xj._, !c)) {
    throw z("Channel.close!", b);
  }
  return c.call(null, b);
}, yj = function yj(b) {
  if (b ? b.Yc : b) {
    return!0;
  }
  var c;
  c = yj[n(null == b ? null : b)];
  if (!c && (c = yj._, !c)) {
    throw z("Handler.active?", b);
  }
  return c.call(null, b);
}, zj = function zj(b) {
  if (b ? b.Zc : b) {
    return b.na;
  }
  var c;
  c = zj[n(null == b ? null : b)];
  if (!c && (c = zj._, !c)) {
    throw z("Handler.commit", b);
  }
  return c.call(null, b);
}, Aj = function Aj(b, c) {
  if (b ? b.Xc : b) {
    return b.Xc(0, c);
  }
  var d;
  d = Aj[n(null == b ? null : b)];
  if (!d && (d = Aj._, !d)) {
    throw z("Buffer.add!*", b);
  }
  return d.call(null, b, c);
}, Bj = function Bj() {
  switch(arguments.length) {
    case 1:
      return Bj.b(arguments[0]);
    case 2:
      return Bj.a(arguments[0], arguments[1]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
Bj.b = function(a) {
  return a;
};
Bj.a = function(a, b) {
  if (null == b) {
    throw Error([A("Assert failed: "), A(Jh(sd([oe(new Pc(null, "not", "not", 1044554643, null), oe(new Pc(null, "nil?", "nil?", 1612038930, null), new Pc(null, "itm", "itm", -713282527, null)))], 0)))].join(""));
  }
  return Aj(a, b);
};
Bj.v = 2;
function Cj(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function Dj(a, b, c, d) {
  this.head = a;
  this.L = b;
  this.length = c;
  this.c = d;
}
Dj.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.c[this.L];
  this.c[this.L] = null;
  this.L = (this.L + 1) % this.c.length;
  --this.length;
  return a;
};
Dj.prototype.unshift = function(a) {
  this.c[this.head] = a;
  this.head = (this.head + 1) % this.c.length;
  this.length += 1;
  return null;
};
function Ej(a, b) {
  a.length + 1 === a.c.length && a.resize();
  a.unshift(b);
}
Dj.prototype.resize = function() {
  var a = Array(2 * this.c.length);
  return this.L < this.head ? (Cj(this.c, this.L, a, 0, this.length), this.L = 0, this.head = this.length, this.c = a) : this.L > this.head ? (Cj(this.c, this.L, a, 0, this.c.length - this.L), Cj(this.c, 0, a, this.c.length - this.L, this.head), this.L = 0, this.head = this.length, this.c = a) : this.L === this.head ? (this.head = this.L = 0, this.c = a) : null;
};
function Fj(a, b) {
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
function Gj(a) {
  if (!(0 < a)) {
    throw Error([A("Assert failed: "), A("Can't create a ring buffer of size 0"), A("\n"), A(Jh(sd([oe(new Pc(null, "\x3e", "\x3e", 1085014381, null), new Pc(null, "n", "n", -2092305744, null), 0)], 0)))].join(""));
  }
  return new Dj(0, 0, 0, Array(a));
}
function Hj(a, b) {
  this.K = a;
  this.Md = b;
  this.g = 2;
  this.r = 0;
}
function Ij(a) {
  return a.K.length === a.Md;
}
Hj.prototype.Xc = function(a, b) {
  Ej(this.K, b);
  return this;
};
Hj.prototype.I = function() {
  return this.K.length;
};
var Jj;
function Kj() {
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
    var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host, a = oa(function(a) {
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
;var Lj = Gj(32), Mj = !1, Nj = !1;
function Oj() {
  Mj = !0;
  Nj = !1;
  for (var a = 0;;) {
    var b = Lj.pop();
    if (null != b && (b.m ? b.m() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  Mj = !1;
  return 0 < Lj.length ? Pj.m ? Pj.m() : Pj.call(null) : null;
}
function Pj() {
  var a = Nj;
  if (w(w(a) ? Mj : a)) {
    return null;
  }
  Nj = !0;
  ga(aa.setImmediate) ? aa.setImmediate(Oj) : (Jj || (Jj = Kj()), Jj(Oj));
}
function Qj(a) {
  Ej(Lj, a);
  Pj();
}
;var Rj, Sj = function Sj(b) {
  "undefined" === typeof Rj && (Rj = function(b, d, e) {
    this.jd = b;
    this.n = d;
    this.Gd = e;
    this.g = 425984;
    this.r = 0;
  }, Rj.prototype.C = function(b, d) {
    return new Rj(this.jd, this.n, d);
  }, Rj.prototype.A = function() {
    return this.Gd;
  }, Rj.prototype.Bb = function() {
    return this.n;
  }, Rj.Ib = !0, Rj.Gb = "cljs.core.async.impl.channels/t14857", Rj.$b = function(b, d) {
    return hc(d, "cljs.core.async.impl.channels/t14857");
  });
  return new Rj(Sj, b, Q);
};
function Tj(a, b) {
  this.ib = a;
  this.n = b;
}
function Uj(a) {
  return yj(a.ib);
}
var Vj = function Vj(b) {
  if (b ? b.Wc : b) {
    return b.Wc();
  }
  var c;
  c = Vj[n(null == b ? null : b)];
  if (!c && (c = Vj._, !c)) {
    throw z("MMC.abort", b);
  }
  return c.call(null, b);
};
function Wj(a, b, c, d, e, f, h) {
  this.zb = a;
  this.oc = b;
  this.ob = c;
  this.nc = d;
  this.K = e;
  this.closed = f;
  this.Ea = h;
}
g = Wj.prototype;
g.Wc = function() {
  for (;;) {
    var a = this.ob.pop();
    if (null != a) {
      var b = a.ib;
      Qj(function(a) {
        return function() {
          return a.b ? a.b(!0) : a.call(null, !0);
        };
      }(b.na, b, a.n, a, this));
    }
    break;
  }
  Fj(this.ob, af(!1));
  return xj(this);
};
g.Fb = function(a, b, c) {
  var d = this;
  if (null == b) {
    throw Error([A("Assert failed: "), A("Can't put nil in on a channel"), A("\n"), A(Jh(sd([oe(new Pc(null, "not", "not", 1044554643, null), oe(new Pc(null, "nil?", "nil?", 1612038930, null), new Pc(null, "val", "val", 1769233139, null)))], 0)))].join(""));
  }
  if (a = d.closed) {
    return Sj(!a);
  }
  if (w(function() {
    var a = d.K;
    return w(a) ? jb(Ij(d.K)) : a;
  }())) {
    for (c = gd(function() {
      var a = d.K;
      return d.Ea.a ? d.Ea.a(a, b) : d.Ea.call(null, a, b);
    }());;) {
      if (0 < d.zb.length && 0 < L(d.K)) {
        var e = d.zb.pop(), f = e.na, h = d.K.K.pop();
        Qj(function(a, b) {
          return function() {
            return a.b ? a.b(b) : a.call(null, b);
          };
        }(f, h, e, c, a, this));
      }
      break;
    }
    c && Vj(this);
    return Sj(!0);
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
    return c = zj(e), Qj(function(a) {
      return function() {
        return a.b ? a.b(b) : a.call(null, b);
      };
    }(c, e, a, this)), Sj(!0);
  }
  64 < d.nc ? (d.nc = 0, Fj(d.ob, Uj)) : d.nc += 1;
  if (!(1024 > d.ob.length)) {
    throw Error([A("Assert failed: "), A([A("No more than "), A(1024), A(" pending puts are allowed on a single channel."), A(" Consider using a windowed buffer.")].join("")), A("\n"), A(Jh(sd([oe(new Pc(null, "\x3c", "\x3c", 993667236, null), oe(new Pc(null, ".-length", ".-length", -280799999, null), new Pc(null, "puts", "puts", -1883877054, null)), new Pc("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0)))].join(""));
  }
  Ej(d.ob, new Tj(c, b));
  return null;
};
g.Bd = !0;
g.Bc = function(a, b) {
  var c = this;
  if (null != c.K && 0 < L(c.K)) {
    for (var d = b.na, e = Sj(c.K.K.pop());;) {
      if (!w(Ij(c.K))) {
        var f = c.ob.pop();
        if (null != f) {
          var h = f.ib, k = f.n;
          Qj(function(a) {
            return function() {
              return a.b ? a.b(!0) : a.call(null, !0);
            };
          }(h.na, h, k, f, d, e, this));
          gd(function() {
            var a = c.K, b = k;
            return c.Ea.a ? c.Ea.a(a, b) : c.Ea.call(null, a, b);
          }()) && Vj(this);
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
        if (yj(a.ib)) {
          return a;
        }
      } else {
        return null;
      }
    }
  }();
  if (w(d)) {
    return e = zj(d.ib), Qj(function(a) {
      return function() {
        return a.b ? a.b(!0) : a.call(null, !0);
      };
    }(e, d, this)), Sj(d.n);
  }
  if (w(c.closed)) {
    return w(c.K) && (d = c.K, c.Ea.b ? c.Ea.b(d) : c.Ea.call(null, d)), w(w(!0) ? b.na : !0) ? (d = function() {
      var a = c.K;
      return w(a) ? 0 < L(c.K) : a;
    }(), d = w(d) ? c.K.K.pop() : null, Sj(d)) : null;
  }
  64 < c.oc ? (c.oc = 0, Fj(c.zb, yj)) : c.oc += 1;
  if (!(1024 > c.zb.length)) {
    throw Error([A("Assert failed: "), A([A("No more than "), A(1024), A(" pending takes are allowed on a single channel.")].join("")), A("\n"), A(Jh(sd([oe(new Pc(null, "\x3c", "\x3c", 993667236, null), oe(new Pc(null, ".-length", ".-length", -280799999, null), new Pc(null, "takes", "takes", 298247964, null)), new Pc("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0)))].join(""));
  }
  Ej(c.zb, b);
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
        return w(b) ? 0 < L(a.K) : b;
      }()) ? a.K.K.pop() : null;
      Qj(function(a, b) {
        return function() {
          return a.b ? a.b(b) : a.call(null, b);
        };
      }(c, d, b, this));
    }
  }
  return null;
};
function Xj(a) {
  console.log(a);
  return null;
}
function Yj(a, b, c) {
  b = (w(b) ? b : Xj).call(null, c);
  return null == b ? a : Bj.a(a, b);
}
function Zj(a, b, c) {
  return new Wj(Gj(32), 0, Gj(32), 0, a, !1, function() {
    return function(a) {
      return function() {
        function b(e, f) {
          try {
            return a.a ? a.a(e, f) : a.call(null, e, f);
          } catch (h) {
            return Yj(e, c, h);
          }
        }
        function f(b) {
          try {
            return a.b ? a.b(b) : a.call(null, b);
          } catch (e) {
            return Yj(b, c, e);
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
    }(w(b) ? b.b ? b.b(Bj) : b.call(null, Bj) : Bj);
  }());
}
;var ak, bk = function bk(b) {
  "undefined" === typeof ak && (ak = function(b, d, e) {
    this.Dc = b;
    this.na = d;
    this.Jd = e;
    this.g = 393216;
    this.r = 0;
  }, ak.prototype.C = function(b, d) {
    return new ak(this.Dc, this.na, d);
  }, ak.prototype.A = function() {
    return this.Jd;
  }, ak.prototype.Yc = function() {
    return!0;
  }, ak.prototype.Zc = function() {
    return this.na;
  }, ak.Ib = !0, ak.Gb = "cljs.core.async.impl.ioc-helpers/t17763", ak.$b = function(b, d) {
    return hc(d, "cljs.core.async.impl.ioc-helpers/t17763");
  });
  return new ak(bk, b, Q);
};
function ck(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    throw b instanceof Object && a[6].Eb(null), b;
  }
}
function dk(a, b, c) {
  c = c.Bc(0, bk(function(c) {
    a[2] = c;
    a[1] = b;
    return ck(a);
  }));
  return w(c) ? (a[2] = I.b ? I.b(c) : I.call(null, c), a[1] = b, Z) : null;
}
function ek(a, b, c, d) {
  c = c.Fb(null, d, bk(function(c) {
    a[2] = c;
    a[1] = b;
    return ck(a);
  }));
  return w(c) ? (a[2] = I.b ? I.b(c) : I.call(null, c), a[1] = b, Z) : null;
}
function fk(a, b) {
  var c = a[6];
  null != b && c.Fb(null, b, bk(function() {
    return function() {
      return null;
    };
  }(c)));
  c.Eb(null);
  return c;
}
function gk(a, b, c, d, e, f, h, k) {
  this.Pa = a;
  this.Qa = b;
  this.Ta = c;
  this.Sa = d;
  this.bb = e;
  this.p = f;
  this.j = h;
  this.i = k;
  this.g = 2229667594;
  this.r = 8192;
}
g = gk.prototype;
g.w = function(a, b) {
  return Gb.d(this, b, null);
};
g.t = function(a, b, c) {
  switch(b instanceof O ? b.ka : null) {
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
      return Dd(this.j, b, c);
  }
};
g.B = function(a, b, c) {
  return Ah(b, function() {
    return function(a) {
      return Ah(b, W, "", " ", "", c, a);
    };
  }(this), "#cljs.core.async.impl.ioc-helpers.ExceptionFrame{", ", ", "}", c, Ee.a(new T(null, 5, 5, U, [new T(null, 2, 5, U, [Ji, this.Pa], null), new T(null, 2, 5, U, [Vi, this.Qa], null), new T(null, 2, 5, U, [Ai, this.Ta], null), new T(null, 2, 5, U, [aj, this.Sa], null), new T(null, 2, 5, U, [Zi, this.bb], null)], null), this.j));
};
g.A = function() {
  return this.p;
};
g.I = function() {
  return 5 + L(this.j);
};
g.F = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ie(this);
};
g.q = function(a, b) {
  var c;
  c = w(b) ? (c = this.constructor === b.constructor) ? ig(this, b) : c : b;
  return w(c) ? !0 : !1;
};
g.ya = function(a, b) {
  return Xd(new nh(null, new ab(null, 5, [Ai, null, Ji, null, Vi, null, Zi, null, aj, null], null), null), b) ? Fd.a(td(Bf.a(Q, this), this.p), b) : new gk(this.Pa, this.Qa, this.Ta, this.Sa, this.bb, this.p, Ne(Fd.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return w(P.a ? P.a(Ji, b) : P.call(null, Ji, b)) ? new gk(c, this.Qa, this.Ta, this.Sa, this.bb, this.p, this.j, null) : w(P.a ? P.a(Vi, b) : P.call(null, Vi, b)) ? new gk(this.Pa, c, this.Ta, this.Sa, this.bb, this.p, this.j, null) : w(P.a ? P.a(Ai, b) : P.call(null, Ai, b)) ? new gk(this.Pa, this.Qa, c, this.Sa, this.bb, this.p, this.j, null) : w(P.a ? P.a(aj, b) : P.call(null, aj, b)) ? new gk(this.Pa, this.Qa, this.Ta, c, this.bb, this.p, this.j, null) : w(P.a ? P.a(Zi, b) : P.call(null, Zi, 
  b)) ? new gk(this.Pa, this.Qa, this.Ta, this.Sa, c, this.p, this.j, null) : new gk(this.Pa, this.Qa, this.Ta, this.Sa, this.bb, this.p, N.d(this.j, b, c), null);
};
g.H = function() {
  return D(Ee.a(new T(null, 5, 5, U, [new T(null, 2, 5, U, [Ji, this.Pa], null), new T(null, 2, 5, U, [Vi, this.Qa], null), new T(null, 2, 5, U, [Ai, this.Ta], null), new T(null, 2, 5, U, [aj, this.Sa], null), new T(null, 2, 5, U, [Zi, this.bb], null)], null), this.j));
};
g.C = function(a, b) {
  return new gk(this.Pa, this.Qa, this.Ta, this.Sa, this.bb, b, this.j, this.i);
};
g.G = function(a, b) {
  return Qd(b) ? Ib(this, B.a(b, 0), B.a(b, 1)) : rb(zb, this, b);
};
function hk(a) {
  for (;;) {
    var b = a[4], c = Ji.b(b), d = Vi.b(b), e = a[5];
    if (w(function() {
      var a = e;
      return w(a) ? jb(b) : a;
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
      a[4] = N.k(b, Ji, null, sd([Vi, null], 0));
      break;
    }
    if (w(function() {
      var a = e;
      return w(a) ? jb(c) && jb(Ai.b(b)) : a;
    }())) {
      a[4] = Zi.b(b);
    } else {
      if (w(function() {
        var a = e;
        return w(a) ? (a = jb(c)) ? Ai.b(b) : a : a;
      }())) {
        a[1] = Ai.b(b);
        a[4] = N.d(b, Ai, null);
        break;
      }
      if (w(function() {
        var a = jb(e);
        return a ? Ai.b(b) : a;
      }())) {
        a[1] = Ai.b(b);
        a[4] = N.d(b, Ai, null);
        break;
      }
      if (jb(e) && jb(Ai.b(b))) {
        a[1] = aj.b(b);
        a[4] = Zi.b(b);
        break;
      }
      throw Error("No matching clause");
    }
  }
}
;for (var ik = Array(1), jk = 0;;) {
  if (jk < ik.length) {
    ik[jk] = null, jk += 1;
  } else {
    break;
  }
}
;var kk = function kk(b) {
  "undefined" === typeof sj && (sj = function(b, d, e) {
    this.Dc = b;
    this.na = d;
    this.Hd = e;
    this.g = 393216;
    this.r = 0;
  }, sj.prototype.C = function(b, d) {
    return new sj(this.Dc, this.na, d);
  }, sj.prototype.A = function() {
    return this.Hd;
  }, sj.prototype.Yc = function() {
    return!0;
  }, sj.prototype.Zc = function() {
    return this.na;
  }, sj.Ib = !0, sj.Gb = "cljs.core.async/t15056", sj.$b = function(b, d) {
    return hc(d, "cljs.core.async/t15056");
  });
  return new sj(kk, b, Q);
}, lk = function lk() {
  switch(arguments.length) {
    case 0:
      return lk.m();
    case 1:
      return lk.b(arguments[0]);
    case 2:
      return lk.a(arguments[0], arguments[1]);
    case 3:
      return lk.d(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
lk.m = function() {
  return lk.b(null);
};
lk.b = function(a) {
  return lk.d(a, null, null);
};
lk.a = function(a, b) {
  return lk.d(a, b, null);
};
lk.d = function(a, b, c) {
  a = Wc.a(a, 0) ? null : a;
  if (w(b) && !w(a)) {
    throw Error([A("Assert failed: "), A("buffer must be supplied when transducer is"), A("\n"), A(Jh(sd([new Pc(null, "buf-or-n", "buf-or-n", -1646815050, null)], 0)))].join(""));
  }
  a = "number" === typeof a ? new Hj(Gj(a), a) : a;
  return Zj(a, b, c);
};
lk.v = 3;
function mk(a, b) {
  var c = vj(a, kk(b));
  if (w(c)) {
    var d = I.b ? I.b(c) : I.call(null, c);
    w(!0) ? b.b ? b.b(d) : b.call(null, d) : Qj(function(a) {
      return function() {
        return b.b ? b.b(a) : b.call(null, a);
      };
    }(d, c));
  }
  return null;
}
var nk = kk(function() {
  return null;
});
function ok(a, b) {
  var c = wj(a, b, nk);
  return w(c) ? I.b ? I.b(c) : I.call(null, c) : !0;
}
function pk(a, b, c) {
  a = wj(a, b, kk(c));
  return w(a) ? (b = I.b ? I.b(a) : I.call(null, a), w(!0) ? c.b ? c.b(b) : c.call(null, b) : Qj(function(a) {
    return function() {
      return c.b ? c.b(a) : c.call(null, a);
    };
  }(b, a, a)), b) : !0;
}
function qk(a, b) {
  return rk(a, b);
}
function rk(a, b) {
  var c = lk.b(1);
  Qj(function(c) {
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
                      if (!P(e, Z)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f, hk(c), d = Z;
                    } else {
                      throw f;
                    }
                  }
                }
                if (!P(d, Z)) {
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
            return 7 === d ? (d = c, d[2] = c[2], d[1] = 3, Z) : 1 === d ? (c[2] = null, c[1] = 2, Z) : 4 === d ? (d = c[7], d = c[2], c[7] = d, c[1] = w(null == d) ? 5 : 6, Z) : 13 === d ? (c[2] = null, c[1] = 14, Z) : 6 === d ? (d = c[7], ek(c, 11, b, d)) : 3 === d ? (d = c[2], fk(c, d)) : 12 === d ? (c[2] = null, c[1] = 2, Z) : 2 === d ? dk(c, 4, a) : 11 === d ? (d = c[2], c[1] = w(d) ? 12 : 13, Z) : 9 === d ? (c[2] = null, c[1] = 10, Z) : 5 === d ? (c[1] = w(!0) ? 8 : 9, Z) : 14 === d || 10 === 
            d ? (d = c[2], c[2] = d, c[1] = 7, Z) : 8 === d ? (d = xj(b), c[2] = d, c[1] = 10, Z) : null;
          };
        }(c), c);
      }(), f = function() {
        var a = e.m ? e.m() : e.call(null);
        a[6] = c;
        return a;
      }();
      return ck(f);
    };
  }(c));
  return b;
}
var sk = {}, tk = function tk(b, c, d) {
  if (b ? b.Ac : b) {
    return b.Ac(b, c, d);
  }
  var e;
  e = tk[n(null == b ? null : b)];
  if (!e && (e = tk._, !e)) {
    throw z("Mult.tap*", b);
  }
  return e.call(null, b, c, d);
}, cl = function cl(b, c) {
  if (b ? b.Zb : b) {
    return b.Zb(b, c);
  }
  var d;
  d = cl[n(null == b ? null : b)];
  if (!d && (d = cl._, !d)) {
    throw z("Mult.untap*", b);
  }
  return d.call(null, b, c);
}, dl = function dl(b) {
  var c = kf ? kf(Q) : jf.call(null, Q), d = function() {
    "undefined" === typeof tj && (tj = function(b, c, d, e) {
      this.Ld = b;
      this.ch = c;
      this.Cc = d;
      this.Id = e;
      this.g = 393216;
      this.r = 0;
    }, tj.prototype.C = function() {
      return function(b, c) {
        return new tj(this.Ld, this.ch, this.Cc, c);
      };
    }(c), tj.prototype.A = function() {
      return function() {
        return this.Id;
      };
    }(c), tj.prototype.Vc = !0, tj.prototype.Ac = function() {
      return function(b, c, d) {
        ff.s(this.Cc, N, c, d);
        return null;
      };
    }(c), tj.prototype.Zb = function() {
      return function(b, c) {
        ff.d(this.Cc, Fd, c);
        return null;
      };
    }(c), tj.Ib = !0, tj.Gb = "cljs.core.async/t16090", tj.$b = function() {
      return function(b, c) {
        return hc(c, "cljs.core.async/t16090");
      };
    }(c));
    return new tj(dl, b, c, Q);
  }(), e = lk.b(1), f = kf ? kf(null) : jf.call(null, null), h = function(b, c, d, e) {
    return function() {
      return 0 === ff.a(e, de) ? ok(d, !0) : null;
    };
  }(c, d, e, f), k = lk.b(1);
  Qj(function(c, d, e, f, h, k) {
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
                      if (!P(f, Z)) {
                        e = f;
                        break a;
                      }
                    }
                  } catch (h) {
                    if (h instanceof Object) {
                      d[5] = h, hk(d), e = Z;
                    } else {
                      throw h;
                    }
                  }
                }
                if (!P(e, Z)) {
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
              var q = c[7], r = F(q), t = M(r, 0), v = M(r, 1);
              c[8] = t;
              m = c;
              m[1] = w(v) ? 22 : 23;
              return Z;
            }
            if (27 === l) {
              var x = c[9], C = c[10], Ba = c[11], ua = c[12], Ga = B.a(ua, x), Na = pk(Ga, C, k);
              c[11] = Ga;
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
              var q = c[7], gb = c[2], Ka = H(q), Oa = null, Xa = 0, Ya = 0;
              c[13] = Ya;
              c[14] = gb;
              c[15] = Xa;
              c[16] = Ka;
              c[17] = Oa;
              var uc = m = c;
              uc[2] = null;
              uc[1] = 8;
              return Z;
            }
            if (39 === l) {
              var Zc = m = c;
              Zc[2] = null;
              Zc[1] = 41;
              return Z;
            }
            if (4 === l) {
              var C = c[10], ae = c[2], Hm = null == ae;
              c[10] = ae;
              m = c;
              m[1] = w(Hm) ? 5 : 6;
              return Z;
            }
            if (15 === l) {
              var Ya = c[13], Xa = c[15], Ka = c[16], Oa = c[17], vg = c[2], Xm = Ka, Ym = Oa, Zm = Xa;
              c[13] = Ya + 1;
              c[18] = vg;
              c[15] = Zm;
              c[16] = Xm;
              c[17] = Ym;
              var uk = m = c;
              uk[2] = null;
              uk[1] = 8;
              return Z;
            }
            if (21 === l) {
              var $m = c[2], vk = m = c;
              vk[2] = $m;
              vk[1] = 18;
              return Z;
            }
            if (31 === l) {
              var Ba = c[11], an = k(null), bn = e.Zb(null, Ba);
              c[19] = an;
              var wk = m = c;
              wk[2] = bn;
              wk[1] = 32;
              return Z;
            }
            if (32 === l) {
              var Rc = c[20], Sc = c[21], x = c[9], ua = c[12], cn = c[2], dn = Sc, en = ua, fn = x + 1;
              c[20] = Rc;
              c[21] = dn;
              c[9] = fn;
              c[22] = cn;
              c[12] = en;
              var xk = m = c;
              xk[2] = null;
              xk[1] = 25;
              return Z;
            }
            if (40 === l) {
              var yk = c[23], gn = k(null), hn = e.Zb(null, yk);
              c[24] = gn;
              var zk = m = c;
              zk[2] = hn;
              zk[1] = 41;
              return Z;
            }
            if (33 === l) {
              var Tc = c[25], jn = Rd(Tc), m = c;
              m[1] = jn ? 36 : 37;
              return Z;
            }
            if (13 === l) {
              var oi = c[26], kn = xj(oi), Ak = m = c;
              Ak[2] = kn;
              Ak[1] = 15;
              return Z;
            }
            if (22 === l) {
              var t = c[8], ln = xj(t), Bk = m = c;
              Bk[2] = ln;
              Bk[1] = 24;
              return Z;
            }
            if (36 === l) {
              var Tc = c[25], Ck = rc(Tc), mn = sc(Tc), nn = L(Ck), Sc = mn, ua = Ck, Rc = nn, x = 0;
              c[20] = Rc;
              c[21] = Sc;
              c[9] = x;
              c[12] = ua;
              var Dk = m = c;
              Dk[2] = null;
              Dk[1] = 25;
              return Z;
            }
            if (41 === l) {
              var Tc = c[25], on = c[2], Sc = H(Tc), ua = null, x = Rc = 0;
              c[20] = Rc;
              c[21] = Sc;
              c[27] = on;
              c[9] = x;
              c[12] = ua;
              var Ek = m = c;
              Ek[2] = null;
              Ek[1] = 25;
              return Z;
            }
            if (43 === l) {
              var Fk = m = c;
              Fk[2] = null;
              Fk[1] = 44;
              return Z;
            }
            if (29 === l) {
              var pn = c[2], Gk = m = c;
              Gk[2] = pn;
              Gk[1] = 26;
              return Z;
            }
            if (44 === l) {
              c[28] = c[2];
              var Hk = m = c;
              Hk[2] = null;
              Hk[1] = 2;
              return Z;
            }
            if (6 === l) {
              var Ik = c[29], qn = I.b ? I.b(d) : I.call(null, d), pi = qg(qn), Jk = L(pi), rn = nf.a ? nf.a(h, Jk) : nf.call(null, h, Jk), Sc = D(pi), ua = null, x = Rc = 0;
              c[20] = Rc;
              c[21] = Sc;
              c[29] = pi;
              c[9] = x;
              c[30] = rn;
              c[12] = ua;
              var Kk = m = c;
              Kk[2] = null;
              Kk[1] = 25;
              return Z;
            }
            if (28 === l) {
              var Sc = c[21], Tc = c[25], Lk = D(Sc);
              c[25] = Lk;
              m = c;
              m[1] = Lk ? 33 : 34;
              return Z;
            }
            if (25 === l) {
              var Rc = c[20], x = c[9], sn = x < Rc, m = c;
              m[1] = w(sn) ? 27 : 28;
              return Z;
            }
            if (34 === l) {
              var Mk = m = c;
              Mk[2] = null;
              Mk[1] = 35;
              return Z;
            }
            if (17 === l) {
              var Nk = m = c;
              Nk[2] = null;
              Nk[1] = 18;
              return Z;
            }
            if (3 === l) {
              var tn = c[2], m = c;
              return fk(m, tn);
            }
            if (12 === l) {
              var un = c[2], Ok = m = c;
              Ok[2] = un;
              Ok[1] = 9;
              return Z;
            }
            if (2 === l) {
              return m = c, dk(m, 4, b);
            }
            if (23 === l) {
              var Pk = m = c;
              Pk[2] = null;
              Pk[1] = 24;
              return Z;
            }
            if (35 === l) {
              var vn = c[2], Qk = m = c;
              Qk[2] = vn;
              Qk[1] = 29;
              return Z;
            }
            if (19 === l) {
              var q = c[7], Rk = rc(q), wn = sc(q), xn = L(Rk), Ka = wn, Oa = Rk, Xa = xn, Ya = 0;
              c[13] = Ya;
              c[15] = Xa;
              c[16] = Ka;
              c[17] = Oa;
              var Sk = m = c;
              Sk[2] = null;
              Sk[1] = 8;
              return Z;
            }
            if (11 === l) {
              var q = c[7], Ka = c[16], Tk = D(Ka);
              c[7] = Tk;
              m = c;
              m[1] = Tk ? 16 : 17;
              return Z;
            }
            if (9 === l) {
              var yn = c[2], Uk = m = c;
              Uk[2] = yn;
              Uk[1] = 7;
              return Z;
            }
            if (5 === l) {
              var zn = I.b ? I.b(d) : I.call(null, d), Ka = D(zn), Oa = null, Ya = Xa = 0;
              c[13] = Ya;
              c[15] = Xa;
              c[16] = Ka;
              c[17] = Oa;
              var Vk = m = c;
              Vk[2] = null;
              Vk[1] = 8;
              return Z;
            }
            if (14 === l) {
              var Wk = m = c;
              Wk[2] = null;
              Wk[1] = 15;
              return Z;
            }
            if (45 === l) {
              var An = c[2], Xk = m = c;
              Xk[2] = An;
              Xk[1] = 44;
              return Z;
            }
            if (26 === l) {
              var Ik = c[29], Bn = c[2], Cn = D(Ik);
              c[31] = Bn;
              m = c;
              m[1] = Cn ? 42 : 43;
              return Z;
            }
            if (16 === l) {
              var q = c[7], Dn = Rd(q), m = c;
              m[1] = Dn ? 19 : 20;
              return Z;
            }
            if (38 === l) {
              var En = c[2], Yk = m = c;
              Yk[2] = En;
              Yk[1] = 35;
              return Z;
            }
            if (30 === l) {
              var Zk = m = c;
              Zk[2] = null;
              Zk[1] = 32;
              return Z;
            }
            if (10 === l) {
              var Ya = c[13], Oa = c[17], $k = B.a(Oa, Ya), oi = M($k, 0), Fn = M($k, 1);
              c[26] = oi;
              m = c;
              m[1] = w(Fn) ? 13 : 14;
              return Z;
            }
            if (18 === l) {
              var Gn = c[2], al = m = c;
              al[2] = Gn;
              al[1] = 12;
              return Z;
            }
            if (42 === l) {
              return m = c, dk(m, 45, f);
            }
            if (37 === l) {
              var yk = c[23], C = c[10], Tc = c[25], bl = F(Tc), Hn = pk(bl, C, k);
              c[23] = bl;
              m = c;
              m[1] = w(Hn) ? 39 : 40;
              return Z;
            }
            if (8 === l) {
              var Ya = c[13], Xa = c[15], In = Ya < Xa, m = c;
              m[1] = w(In) ? 10 : 11;
              return Z;
            }
            return null;
          };
        }(c, d, e, f, h, k), c, d, e, f, h, k);
      }(), x = function() {
        var b = v.m ? v.m() : v.call(null);
        b[6] = c;
        return b;
      }();
      return ck(x);
    };
  }(k, c, d, e, f, h));
  return d;
};
function el(a, b) {
  tk(a, b, !0);
  return b;
}
function fl(a) {
  a = Xf(a);
  var b = lk.b(null), c = L(a), d = Be(c), e = lk.b(1), f = kf ? kf(null) : jf.call(null, null), h = Cf.a(function(a, b, c, d, e, f) {
    return function(h) {
      return function(a, b, c, d, e, f) {
        return function(a) {
          d[h] = a;
          return 0 === ff.a(f, de) ? ok(e, d.slice(0)) : null;
        };
      }(a, b, c, d, e, f);
    };
  }(a, b, c, d, e, f), new zh(null, 0, c, 1, null)), k = lk.b(1);
  Qj(function(a, b, c, d, e, f, h, k) {
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
                      if (!P(e, Z)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f, hk(c), d = Z;
                    } else {
                      throw f;
                    }
                  }
                }
                if (!P(d, Z)) {
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
              return e = xj(c), a[2] = e, a[1] = 15, Z;
            }
            if (6 === e) {
              return a[2] = null, a[1] = 11, Z;
            }
            if (3 === e) {
              return e = a[2], fk(a, e);
            }
            if (12 === e) {
              var e = a[8], e = a[2], m = Ze(hb, e);
              a[8] = e;
              a[1] = w(m) ? 13 : 14;
              return Z;
            }
            return 2 === e ? (e = nf.a ? nf.a(h, d) : nf.call(null, h, d), l = 0, a[7] = l, a[9] = e, a[2] = null, a[1] = 4, Z) : 11 === e ? (l = a[7], a[4] = new gk(10, Object, null, 9, a[4], null, null, null), e = function() {
              var a = l;
              return b.b ? b.b(a) : b.call(null, a);
            }(), m = function() {
              var a = l;
              return k.b ? k.b(a) : k.call(null, a);
            }(), e = mk(e, m), a[2] = e, hk(a), Z) : 9 === e ? (l = a[7], a[10] = a[2], a[7] = l + 1, a[2] = null, a[1] = 4, Z) : 5 === e ? (a[11] = a[2], dk(a, 12, f)) : 14 === e ? (e = a[8], e = Ie(Yf, e), ek(a, 16, c, e)) : 16 === e ? (a[12] = a[2], a[2] = null, a[1] = 2, Z) : 10 === e ? (m = a[2], e = ff.a(h, de), a[13] = m, a[2] = e, hk(a), Z) : 8 === e ? (e = a[2], a[2] = e, a[1] = 5, Z) : null;
          };
        }(a, b, c, d, e, f, h, k), a, b, c, d, e, f, h, k);
      }(), G = function() {
        var b = C.m ? C.m() : C.call(null);
        b[6] = a;
        return b;
      }();
      return ck(G);
    };
  }(k, a, b, c, d, e, f, h));
  return b;
}
;function gl(a) {
  return a.b ? a.b(0) : a.call(null, 0);
}
function hl(a) {
  return li.b(Jd(a)).call(null, gl(a));
}
function il(a) {
  var b = M(a, 0), c = M(a, 1), d = Vd(c) ? Ie(lf, c) : c, e = Cd(d, Mi), c = Cd(d, gi), f = Cd(d, Yi), h = Cd(d, qi), d = Cd(d, $i);
  return w(f) ? (f = Kd(f), w(d) ? (d = U, b = Ee.a(e, J(b, h)), b = Ni.b(Jd(a)).call(null, f, b), c = new T(null, 2, 5, d, [b, w(c) ? N.d(c, $i, !0) : c], null)) : c = new T(null, 2, 5, U, [f, c], null), td(c, Jd(a))) : null;
}
function jl(a) {
  var b = M(a, 0), c = M(a, 1), c = Vd(c) ? Ie(lf, c) : c, d = Cd(c, Mi), e = Cd(c, qi), f = M(e, 0), h = he(e);
  return w(w(c) ? e : c) ? td(new T(null, 2, 5, U, [f, N.k(c, Mi, yd.a(d, b), sd([qi, h], 0))], null), Jd(a)) : null;
}
function kl(a) {
  if (Wc.a(ij, a.b ? a.b(1) : a.call(null, 1))) {
    return a;
  }
  var b;
  b = hl(a);
  if (w(b)) {
    if (w(hl(a))) {
      b = M(a, 0);
      var c = M(a, 1), d;
      if (w(hl(a))) {
        d = ri.b(Jd(a)).call(null, gl(a));
      } else {
        throw "called children on a leaf node";
      }
      var e = M(d, 0), f = he(d);
      b = w(d) ? td(new T(null, 2, 5, U, [e, new ab(null, 4, [Mi, zd, Yi, w(c) ? yd.a(Yi.b(c), b) : new T(null, 1, 5, U, [b], null), gi, c, qi, f], null)], null), Jd(a)) : null;
    } else {
      b = null;
    }
  }
  if (w(b)) {
    return b;
  }
  b = jl(a);
  if (w(b)) {
    return b;
  }
  for (;;) {
    if (w(il(a))) {
      b = jl(il(a));
      if (w(b)) {
        return b;
      }
      a = il(a);
    } else {
      return new T(null, 2, 5, U, [gl(a), ij], null);
    }
  }
}
;function ll(a, b) {
  var c = Je(wh, a, b);
  return J(c, yf(function(a) {
    return function(b) {
      return a === b;
    };
  }(c), b));
}
var ml = function ml() {
  switch(arguments.length) {
    case 0:
      return ml.m();
    case 1:
      return ml.b(arguments[0]);
    case 2:
      return ml.a(arguments[0], arguments[1]);
    default:
      return ml.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
ml.m = function() {
  return ph;
};
ml.b = function(a) {
  return a;
};
ml.a = function(a, b) {
  return L(a) < L(b) ? rb(yd, b, a) : rb(yd, a, b);
};
ml.k = function(a, b, c) {
  a = ll(L, yd.k(c, b, sd([a], 0)));
  return rb(Bf, F(a), Uc(a));
};
ml.u = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return ml.k(b, a, c);
};
ml.v = 2;
var nl = function nl() {
  switch(arguments.length) {
    case 1:
      return nl.b(arguments[0]);
    case 2:
      return nl.a(arguments[0], arguments[1]);
    default:
      return nl.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
nl.b = function(a) {
  return a;
};
nl.a = function(a, b) {
  for (;;) {
    if (L(b) < L(a)) {
      var c = a;
      a = b;
      b = c;
    } else {
      return rb(function(a, b) {
        return function(a, c) {
          return Xd(b, c) ? a : Ld.a(a, c);
        };
      }(a, b), a, a);
    }
  }
};
nl.k = function(a, b, c) {
  a = ll(function(a) {
    return-L(a);
  }, yd.k(c, b, sd([a], 0)));
  return rb(nl, F(a), Uc(a));
};
nl.u = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return nl.k(b, a, c);
};
nl.v = 2;
var ol = function ol() {
  switch(arguments.length) {
    case 1:
      return ol.b(arguments[0]);
    case 2:
      return ol.a(arguments[0], arguments[1]);
    default:
      return ol.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
ol.b = function(a) {
  return a;
};
ol.a = function(a, b) {
  return L(a) < L(b) ? rb(function(a, d) {
    return Xd(b, d) ? Ld.a(a, d) : a;
  }, a, a) : rb(Ld, a, b);
};
ol.k = function(a, b, c) {
  return rb(ol, a, yd.a(c, b));
};
ol.u = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return ol.k(b, a, c);
};
ol.v = 2;
function pl(a, b) {
  return ol.a(a, qh([b]));
}
function ql(a) {
  if (Md(a)) {
    throw Error([A("Assert failed: "), A(Jh(sd([oe(new Pc(null, "not", "not", 1044554643, null), oe(new Pc(null, "empty?", "empty?", 76408555, null), new Pc(null, "s", "s", -948495851, null)))], 0)))].join(""));
  }
  var b = F(a);
  return new T(null, 2, 5, U, [b, pl(a, b)], null);
}
function rl(a) {
  var b = th(qg(a));
  a = Ie(ml, rg(a));
  return ol.a(b, a);
}
function sl(a) {
  var b = Ie(ml, rg(a));
  return rb(function() {
    return function(a, b) {
      return w(Cd(a, b)) ? a : N.d(a, b, ph);
    };
  }(b), a, b);
}
function tl(a) {
  return ul(sl(a), zd, rl(a));
}
function ul(a, b, c) {
  for (;;) {
    if (Md(c)) {
      return Ye(Md, rg(a)) ? b : null;
    }
    var d = ql(c), e = M(d, 0), f = M(d, 1), h = function() {
      var b = e;
      return a.b ? a.b(b) : a.call(null, b);
    }();
    c = d = rb(function(a, b, c, d, e) {
      return function(a, b) {
        return Ef.s(a, new T(null, 1, 5, U, [e], null), pl, b);
      };
    }(a, b, c, d, e, f, h), a, h);
    b = yd.a(b, e);
    f = ml.a(f, nl.a(rl(d), h));
    a = c;
    c = f;
  }
}
;function vl(a, b) {
  var c = lk.b(1);
  Qj(function(c) {
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
                      if (!P(e, Z)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f, hk(c), d = Z;
                    } else {
                      throw f;
                    }
                  }
                }
                if (!P(d, Z)) {
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
            return 1 === d ? (c[2] = null, c[1] = 2, Z) : 2 === d ? dk(c, 4, b) : 3 === d ? (d = c[2], fk(c, d)) : 4 === d ? (d = c[7], d = c[2], c[7] = d, c[1] = w(null == d) ? 5 : 6, Z) : 5 === d ? (c[2] = null, c[1] = 7, Z) : 6 === d ? (d = c[7], d = a.b ? a.b(d) : a.call(null, d), c[8] = d, c[2] = null, c[1] = 2, Z) : 7 === d ? (d = c[2], c[2] = d, c[1] = 3, Z) : null;
          };
        }(c), c);
      }(), f = function() {
        var a = e.m ? e.m() : e.call(null);
        a[6] = c;
        return a;
      }();
      return ck(f);
    };
  }(c));
}
;var wl = function wl(b) {
  if (b ? b.Ec : b) {
    return b.value;
  }
  var c;
  c = wl[n(null == b ? null : b)];
  if (!c && (c = wl._, !c)) {
    throw z("BoxedValueProtocol.value", b);
  }
  return c.call(null, b);
}, xl = function xl(b) {
  if (b ? b.Ed : b) {
    return b.eb;
  }
  var c;
  c = xl[n(null == b ? null : b)];
  if (!c && (c = xl._, !c)) {
    throw z("EventProtocol.topic", b);
  }
  return c.call(null, b);
}, yl = function yl(b) {
  if (b ? b.Dd : b) {
    return b.timestamp;
  }
  var c;
  c = yl[n(null == b ? null : b)];
  if (!c && (c = yl._, !c)) {
    throw z("EventProtocol.timestamp", b);
  }
  return c.call(null, b);
}, zl = function zl(b, c) {
  if (b ? b.bd : b) {
    return b.bd(0, c);
  }
  var d;
  d = zl[n(null == b ? null : b)];
  if (!d && (d = zl._, !d)) {
    throw z("EventProtocol.record-timestamp", b);
  }
  return d.call(null, b, c);
}, Al = function Al(b) {
  if (b ? b.Fc : b) {
    return b.Fc(b);
  }
  var c;
  c = Al[n(null == b ? null : b)];
  if (!c && (c = Al._, !c)) {
    throw z("MessageProtocol.fresh?", b);
  }
  return c.call(null, b);
};
function Bl(a, b, c, d, e, f) {
  this.eb = a;
  this.value = b;
  this.timestamp = c;
  this.p = d;
  this.j = e;
  this.i = f;
  this.g = 2229667594;
  this.r = 8192;
}
g = Bl.prototype;
g.Ed = function() {
  return this.eb;
};
g.Dd = function() {
  return this.timestamp;
};
g.bd = function(a, b) {
  return N.d(this, lj, b);
};
g.w = function(a, b) {
  return Gb.d(this, b, null);
};
g.t = function(a, b, c) {
  switch(b instanceof O ? b.ka : null) {
    case "topic":
      return this.eb;
    case "value":
      return this.value;
    case "timestamp":
      return this.timestamp;
    default:
      return Dd(this.j, b, c);
  }
};
g.B = function(a, b, c) {
  return Ah(b, function() {
    return function(a) {
      return Ah(b, W, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.Event{", ", ", "}", c, Ee.a(new T(null, 3, 5, U, [new T(null, 2, 5, U, [Li, this.eb], null), new T(null, 2, 5, U, [Di, this.value], null), new T(null, 2, 5, U, [lj, this.timestamp], null)], null), this.j));
};
g.A = function() {
  return this.p;
};
g.I = function() {
  return 3 + L(this.j);
};
g.F = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ie(this);
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
  return Xd(new nh(null, new ab(null, 3, [Di, null, Li, null, lj, null], null), null), b) ? Fd.a(td(Bf.a(Q, this), this.p), b) : new Bl(this.eb, this.value, this.timestamp, this.p, Ne(Fd.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return w(P.a ? P.a(Li, b) : P.call(null, Li, b)) ? new Bl(c, this.value, this.timestamp, this.p, this.j, null) : w(P.a ? P.a(Di, b) : P.call(null, Di, b)) ? new Bl(this.eb, c, this.timestamp, this.p, this.j, null) : w(P.a ? P.a(lj, b) : P.call(null, lj, b)) ? new Bl(this.eb, this.value, c, this.p, this.j, null) : new Bl(this.eb, this.value, this.timestamp, this.p, N.d(this.j, b, c), null);
};
g.H = function() {
  return D(Ee.a(new T(null, 3, 5, U, [new T(null, 2, 5, U, [Li, this.eb], null), new T(null, 2, 5, U, [Di, this.value], null), new T(null, 2, 5, U, [lj, this.timestamp], null)], null), this.j));
};
g.C = function(a, b) {
  return new Bl(this.eb, this.value, this.timestamp, b, this.j, this.i);
};
g.G = function(a, b) {
  return Qd(b) ? Ib(this, B.a(b, 0), B.a(b, 1)) : rb(zb, this, b);
};
function Cl(a, b) {
  return new Bl(a, b, null, null, null, null);
}
function Dl(a, b, c, d) {
  this.value = a;
  this.p = b;
  this.j = c;
  this.i = d;
  this.g = 2229667594;
  this.r = 8192;
}
g = Dl.prototype;
g.w = function(a, b) {
  return Gb.d(this, b, null);
};
g.t = function(a, b, c) {
  switch(b instanceof O ? b.ka : null) {
    case "value":
      return this.value;
    default:
      return Dd(this.j, b, c);
  }
};
g.B = function(a, b, c) {
  return Ah(b, function() {
    return function(a) {
      return Ah(b, W, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.Fresh{", ", ", "}", c, Ee.a(new T(null, 1, 5, U, [new T(null, 2, 5, U, [Di, this.value], null)], null), this.j));
};
g.A = function() {
  return this.p;
};
g.I = function() {
  return 1 + L(this.j);
};
g.F = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ie(this);
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
  return Xd(new nh(null, new ab(null, 1, [Di, null], null), null), b) ? Fd.a(td(Bf.a(Q, this), this.p), b) : new Dl(this.value, this.p, Ne(Fd.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return w(P.a ? P.a(Di, b) : P.call(null, Di, b)) ? new Dl(c, this.p, this.j, null) : new Dl(this.value, this.p, N.d(this.j, b, c), null);
};
g.H = function() {
  return D(Ee.a(new T(null, 1, 5, U, [new T(null, 2, 5, U, [Di, this.value], null)], null), this.j));
};
g.C = function(a, b) {
  return new Dl(this.value, b, this.j, this.i);
};
g.G = function(a, b) {
  return Qd(b) ? Ib(this, B.a(b, 0), B.a(b, 1)) : rb(zb, this, b);
};
function El(a, b, c, d) {
  this.value = a;
  this.p = b;
  this.j = c;
  this.i = d;
  this.g = 2229667594;
  this.r = 8192;
}
g = El.prototype;
g.w = function(a, b) {
  return Gb.d(this, b, null);
};
g.t = function(a, b, c) {
  switch(b instanceof O ? b.ka : null) {
    case "value":
      return this.value;
    default:
      return Dd(this.j, b, c);
  }
};
g.B = function(a, b, c) {
  return Ah(b, function() {
    return function(a) {
      return Ah(b, W, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.Cached{", ", ", "}", c, Ee.a(new T(null, 1, 5, U, [new T(null, 2, 5, U, [Di, this.value], null)], null), this.j));
};
g.A = function() {
  return this.p;
};
g.I = function() {
  return 1 + L(this.j);
};
g.F = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ie(this);
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
  return Xd(new nh(null, new ab(null, 1, [Di, null], null), null), b) ? Fd.a(td(Bf.a(Q, this), this.p), b) : new El(this.value, this.p, Ne(Fd.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return w(P.a ? P.a(Di, b) : P.call(null, Di, b)) ? new El(c, this.p, this.j, null) : new El(this.value, this.p, N.d(this.j, b, c), null);
};
g.H = function() {
  return D(Ee.a(new T(null, 1, 5, U, [new T(null, 2, 5, U, [Di, this.value], null)], null), this.j));
};
g.C = function(a, b) {
  return new El(this.value, b, this.j, this.i);
};
g.G = function(a, b) {
  return Qd(b) ? Ib(this, B.a(b, 0), B.a(b, 1)) : rb(zb, this, b);
};
function Fl(a) {
  return new Dl(a, null, null, null);
}
function Gl(a) {
  return new El(a, null, null, null);
}
var Hl = cf(Oh, wf(Al), S.b(wl)), Il = {}, Jl = function Jl(b) {
  if (b ? b.ed : b) {
    return b.ed();
  }
  var c;
  c = Jl[n(null == b ? null : b)];
  if (!c && (c = Jl._, !c)) {
    throw z("SignalProtocol.signal-deps", b);
  }
  return c.call(null, b);
}, Kl = function Kl(b) {
  if (b ? b.fd : b) {
    return b.fd();
  }
  var c;
  c = Kl[n(null == b ? null : b)];
  if (!c && (c = Kl._, !c)) {
    throw z("SignalProtocol.topsort", b);
  }
  return c.call(null, b);
};
function Ll(a) {
  return a ? w(w(null) ? null : a.Fd) ? !0 : a.Hb ? !1 : y(Il, a) : y(Il, a);
}
function Ml(a) {
  return rb(function(a, c) {
    var d = Xi.b(c);
    return w(d) ? N.d(a, d, yd.a(Dd(a, d, zd), c)) : a;
  }, Q, a);
}
function Nl(a, b) {
  var c = function(a) {
    return function(b) {
      return Bf.d(uh(), S.b(a), b);
    };
  }(vh(b, new zh(null, 0, Number.MAX_VALUE, 1, null)));
  return vh(qg(a), S.a(c, rg(a)));
}
function Ol(a, b, c, d, e, f, h, k) {
  this.ab = a;
  this.Xa = b;
  this.fb = c;
  this.Wa = d;
  this.Va = e;
  this.p = f;
  this.j = h;
  this.i = k;
  this.g = 2229667594;
  this.r = 8192;
}
g = Ol.prototype;
g.w = function(a, b) {
  return Gb.d(this, b, null);
};
g.t = function(a, b, c) {
  switch(b instanceof O ? b.ka : null) {
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
      return Dd(this.j, b, c);
  }
};
g.B = function(a, b, c) {
  return Ah(b, function() {
    return function(a) {
      return Ah(b, W, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata{", ", ", "}", c, Ee.a(new T(null, 5, 5, U, [new T(null, 2, 5, U, [jj, this.ab], null), new T(null, 2, 5, U, [vi, this.Xa], null), new T(null, 2, 5, U, [ej, this.fb], null), new T(null, 2, 5, U, [Ei, this.Wa], null), new T(null, 2, 5, U, [fj, this.Va], null)], null), this.j));
};
g.A = function() {
  return this.p;
};
g.I = function() {
  return 5 + L(this.j);
};
g.F = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ie(this);
};
g.q = function(a, b) {
  var c;
  c = w(b) ? (c = this.constructor === b.constructor) ? ig(this, b) : c : b;
  return w(c) ? !0 : !1;
};
g.ya = function(a, b) {
  return Xd(new nh(null, new ab(null, 5, [vi, null, Ei, null, ej, null, fj, null, jj, null], null), null), b) ? Fd.a(td(Bf.a(Q, this), this.p), b) : new Ol(this.ab, this.Xa, this.fb, this.Wa, this.Va, this.p, Ne(Fd.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return w(P.a ? P.a(jj, b) : P.call(null, jj, b)) ? new Ol(c, this.Xa, this.fb, this.Wa, this.Va, this.p, this.j, null) : w(P.a ? P.a(vi, b) : P.call(null, vi, b)) ? new Ol(this.ab, c, this.fb, this.Wa, this.Va, this.p, this.j, null) : w(P.a ? P.a(ej, b) : P.call(null, ej, b)) ? new Ol(this.ab, this.Xa, c, this.Wa, this.Va, this.p, this.j, null) : w(P.a ? P.a(Ei, b) : P.call(null, Ei, b)) ? new Ol(this.ab, this.Xa, this.fb, c, this.Va, this.p, this.j, null) : w(P.a ? P.a(fj, b) : P.call(null, fj, 
  b)) ? new Ol(this.ab, this.Xa, this.fb, this.Wa, c, this.p, this.j, null) : new Ol(this.ab, this.Xa, this.fb, this.Wa, this.Va, this.p, N.d(this.j, b, c), null);
};
g.H = function() {
  return D(Ee.a(new T(null, 5, 5, U, [new T(null, 2, 5, U, [jj, this.ab], null), new T(null, 2, 5, U, [vi, this.Xa], null), new T(null, 2, 5, U, [ej, this.fb], null), new T(null, 2, 5, U, [Ei, this.Wa], null), new T(null, 2, 5, U, [fj, this.Va], null)], null), this.j));
};
g.C = function(a, b) {
  return new Ol(this.ab, this.Xa, this.fb, this.Wa, this.Va, b, this.j, this.i);
};
g.G = function(a, b) {
  return Qd(b) ? Ib(this, B.a(b, 0), B.a(b, 1)) : rb(zb, this, b);
};
function Pl(a, b, c, d, e) {
  return new Ol(a, b, c, d, e, null, null, null);
}
function Ql(a) {
  var b = new Mh(function() {
    var b;
    a: {
      b = Q;
      for (var c = new wg([a, ph]), d = td(new T(null, 2, 5, U, [a, null], null), new ab(null, 3, [li, af(!0), ri, bf(D, Jl), Ni, null], null));;) {
        var e;
        e = d;
        e = Wc.a(ij, e.b ? e.b(1) : e.call(null, 1));
        if (w(e)) {
          b = new ab(null, 2, [jj, b, vi, c], null);
          break a;
        }
        if (Xd(b, gl(d))) {
          b: {
            if (e = jl(d), w(e)) {
              d = e;
            } else {
              for (;;) {
                if (w(il(d))) {
                  e = jl(il(d));
                  if (w(e)) {
                    d = e;
                    break b;
                  }
                  d = il(d);
                } else {
                  d = new T(null, 2, 5, U, [gl(d), ij], null);
                  break b;
                }
              }
            }
          }
        } else {
          e = gl(d);
          var f = Jl(e), d = kl(d);
          b = N.d(b, e, f);
          c = mh.k(ml, sd([c, vh(f, vf(qh([e])))], 0));
        }
      }
    }
    return b;
  }, null), c = new Mh(function(a) {
    return function() {
      return jj.b(I.b ? I.b(a) : I.call(null, a));
    };
  }(b), null), d = new Mh(function(a) {
    return function() {
      return vi.b(I.b ? I.b(a) : I.call(null, a));
    };
  }(b, c), null), e = new Mh(function(a, b) {
    return function() {
      var a = I.b ? I.b(b) : I.call(null, b);
      return Bf.a(zd, ne(tl(a)));
    };
  }(b, c, d), null), f = new Mh(function(a, b, c, d) {
    return function() {
      return Ml(I.b ? I.b(d) : I.call(null, d));
    };
  }(b, c, d, e), null);
  return td(a, Pl(c, d, e, new Mh(function(a, b, c, d) {
    return function() {
      return Nl(I.b ? I.b(c) : I.call(null, c), I.b ? I.b(d) : I.call(null, d));
    };
  }(b, c, d, e, f), null), f));
}
function Rl() {
  return Sl(arguments[0], arguments[1], 2 < arguments.length ? new E(Array.prototype.slice.call(arguments, 2), 0) : null);
}
function Sl(a, b, c) {
  if (null == b) {
    throw Error([A("Assert failed: "), A("This signal is not a valid write-port, use the `jamesmacaulay.zelkova.signal/write-port` constructor if you want to treat this signal like a channel."), A("\n"), A(Jh(sd([oe(new Pc(null, "not", "not", 1044554643, null), oe(new Pc(null, "nil?", "nil?", 1612038930, null), new Pc(null, "ch", "ch", 1085813622, null)))], 0)))].join(""));
  }
  return Je(a, b, c);
}
function Tl(a, b, c, d, e, f, h, k, l, m) {
  this.Ha = a;
  this.Ca = b;
  this.Ka = c;
  this.Ia = d;
  this.za = e;
  this.Ga = f;
  this.wa = h;
  this.p = k;
  this.j = l;
  this.i = m;
  this.g = 2229667594;
  this.r = 8192;
}
g = Tl.prototype;
g.w = function(a, b) {
  return Gb.d(this, b, null);
};
g.t = function(a, b, c) {
  switch(b instanceof O ? b.ka : null) {
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
      return Dd(this.j, b, c);
  }
};
g.Eb = function() {
  return Rl(xj, this.wa);
};
g.B = function(a, b, c) {
  return Ah(b, function() {
    return function(a) {
      return Ah(b, W, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.SignalDefinition{", ", ", "}", c, Ee.a(new T(null, 7, 5, U, [new T(null, 2, 5, U, [Si, this.Ha], null), new T(null, 2, 5, U, [Bi, this.Ca], null), new T(null, 2, 5, U, [Xi, this.Ka], null), new T(null, 2, 5, U, [mj, this.Ia], null), new T(null, 2, 5, U, [qj, this.za], null), new T(null, 2, 5, U, [hi, this.Ga], null), new T(null, 2, 5, U, [Qi, this.wa], null)], null), this.j));
};
g.A = function() {
  return this.p;
};
g.I = function() {
  return 7 + L(this.j);
};
g.F = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ie(this);
};
g.q = function(a, b) {
  var c;
  c = w(b) ? (c = this.constructor === b.constructor) ? ig(this, b) : c : b;
  return w(c) ? !0 : !1;
};
g.Fd = !0;
g.ed = function() {
  var a = this.za;
  return Bf.d(ph, wf(Ll), w(a) ? a : this.Ca);
};
g.fd = function() {
  var a = ej.b(Jd(this));
  return I.b ? I.b(a) : I.call(null, a);
};
g.Fb = function(a, b, c) {
  return Sl(wj, this.wa, sd([b, c], 0));
};
g.ya = function(a, b) {
  return Xd(new nh(null, new ab(null, 7, [hi, null, Bi, null, Qi, null, Si, null, Xi, null, mj, null, qj, null], null), null), b) ? Fd.a(td(Bf.a(Q, this), this.p), b) : new Tl(this.Ha, this.Ca, this.Ka, this.Ia, this.za, this.Ga, this.wa, this.p, Ne(Fd.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return w(P.a ? P.a(Si, b) : P.call(null, Si, b)) ? new Tl(c, this.Ca, this.Ka, this.Ia, this.za, this.Ga, this.wa, this.p, this.j, null) : w(P.a ? P.a(Bi, b) : P.call(null, Bi, b)) ? new Tl(this.Ha, c, this.Ka, this.Ia, this.za, this.Ga, this.wa, this.p, this.j, null) : w(P.a ? P.a(Xi, b) : P.call(null, Xi, b)) ? new Tl(this.Ha, this.Ca, c, this.Ia, this.za, this.Ga, this.wa, this.p, this.j, null) : w(P.a ? P.a(mj, b) : P.call(null, mj, b)) ? new Tl(this.Ha, this.Ca, this.Ka, c, this.za, this.Ga, 
  this.wa, this.p, this.j, null) : w(P.a ? P.a(qj, b) : P.call(null, qj, b)) ? new Tl(this.Ha, this.Ca, this.Ka, this.Ia, c, this.Ga, this.wa, this.p, this.j, null) : w(P.a ? P.a(hi, b) : P.call(null, hi, b)) ? new Tl(this.Ha, this.Ca, this.Ka, this.Ia, this.za, c, this.wa, this.p, this.j, null) : w(P.a ? P.a(Qi, b) : P.call(null, Qi, b)) ? new Tl(this.Ha, this.Ca, this.Ka, this.Ia, this.za, this.Ga, c, this.p, this.j, null) : new Tl(this.Ha, this.Ca, this.Ka, this.Ia, this.za, this.Ga, this.wa, 
  this.p, N.d(this.j, b, c), null);
};
g.H = function() {
  return D(Ee.a(new T(null, 7, 5, U, [new T(null, 2, 5, U, [Si, this.Ha], null), new T(null, 2, 5, U, [Bi, this.Ca], null), new T(null, 2, 5, U, [Xi, this.Ka], null), new T(null, 2, 5, U, [mj, this.Ia], null), new T(null, 2, 5, U, [qj, this.za], null), new T(null, 2, 5, U, [hi, this.Ga], null), new T(null, 2, 5, U, [Qi, this.wa], null)], null), this.j));
};
g.C = function(a, b) {
  return new Tl(this.Ha, this.Ca, this.Ka, this.Ia, this.za, this.Ga, this.wa, b, this.j, this.i);
};
g.G = function(a, b) {
  return Qd(b) ? Ib(this, B.a(b, 0), B.a(b, 1)) : rb(zb, this, b);
};
function Ul(a) {
  var b = Xi.b(a);
  return w(b) ? N.k(a, Bi, new T(null, 1, 5, U, [Ci], null), sd([mj, bf(S.b(function(a) {
    return function(b) {
      var e = M(b, 0);
      M(b, 1);
      M(b, 2);
      return Wc.a(a, xl(e)) ? Fl(wl(e)) : null;
    };
  }(b, b)), wf($e(hb)))], 0)) : a;
}
function Vl(a) {
  a = Ul(a);
  a = new Tl(Si.b(a), Bi.b(a), Xi.b(a), mj.b(a), qj.b(a), hi.b(a), Qi.b(a), null, Fd.k(a, Si, sd([Bi, Xi, mj, qj, hi, Qi], 0)), null);
  return Ql(a);
}
function Wl(a) {
  if (1 >= L(a)) {
    return a;
  }
  var b = function(a) {
    return function(b) {
      return Bf.d(zd, bf(Oh, qf(a)), new T(null, 2, 5, U, [b, vf(Gl(wl(xd(b))))], null));
    };
  }($d(ee, S.a(L, a)));
  return S.a(b, a);
}
function Xl(a) {
  return Je(S, Yf, a);
}
function Yl(a) {
  return function(a) {
    return function(c, d) {
      var e = Xl(Wl(d)), e = rb(function(a, b) {
        return function(a, c) {
          var d = M(c, 0), e = he(c), f = wl(Kd(a)), e = Xf(e), d = b(new T(null, 3, 5, U, [d, f, e], null));
          return Bf.a(a, d);
        };
      }(e, a), new T(null, 1, 5, U, [new El(c, null, null, null)], null), e);
      return Wc.a(1, L(e)) ? e : $f(e, 1, L(e));
    };
  }(function(b) {
    return new Xe(We(a, Ue(new T(null, 1, 5, U, [b], null))), null, null, null);
  });
}
function Zl(a, b) {
  var c = Cd(a, b);
  return el(c, lk.m());
}
function $l(a, b, c, d) {
  b = Yl(b);
  var e = lk.b(1);
  Qj(function(b, e) {
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
                      if (!P(e, Z)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f, hk(c), d = Z;
                    } else {
                      throw f;
                    }
                  }
                }
                if (!P(d, Z)) {
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
              var h = a;
              b[7] = h;
              b[2] = null;
              b[1] = 2;
              return Z;
            }
            return 2 === f ? dk(b, 4, c) : 3 === f ? (f = b[2], fk(b, f)) : 4 === f ? (f = b[8], f = b[2], b[8] = f, b[1] = w(null == f) ? 5 : 6, Z) : 5 === f ? (f = xj(d), b[2] = f, b[1] = 7, Z) : 6 === f ? (h = b[9], h = b[7], f = b[8], f = e.a ? e.a(h, f) : e.call(null, h, f), b[9] = f, ek(b, 8, d, f)) : 7 === f ? (f = b[2], b[2] = f, b[1] = 3, Z) : 8 === f ? (h = b[9], f = b[2], h = xd(h), h = wl(h), b[7] = h, b[10] = f, b[2] = null, b[1] = 2, Z) : null;
          };
        }(b, e), b, e);
      }(), l = function() {
        var a = k.m ? k.m() : k.call(null);
        a[6] = b;
        return a;
      }();
      return ck(l);
    };
  }(e, b));
}
function am(a, b, c, d) {
  var e = Vd(b) ? Ie(lf, b) : b;
  b = Cd(e, Si);
  var f = Cd(e, Bi), e = Cd(e, mj);
  a = Bf.d(new T(null, 1, 5, U, [Zl(a, Ci)], null), S.b(df(Zl, a)), f);
  a = fl(a);
  f = lk.m();
  $l(b.a ? b.a(c, d) : b.call(null, c, d), e, a, f);
  return dl(f);
}
function bm(a, b, c, d) {
  return rb(function(a, b) {
    return N.d(a, b, am(a, b, c, d));
  }, new ab(null, 1, [Ci, b], null), a);
}
function cm(a) {
  return Bf.d(Q, S.b(hi), a);
}
var dm = function dm(b) {
  if (b ? b.cd : b) {
    return b.cd();
  }
  var c;
  c = dm[n(null == b ? null : b)];
  if (!c && (c = dm._, !c)) {
    throw z("LiveChannelGraphProtocol.connect-to-world", b);
  }
  return c.call(null, b);
}, em = function em(b) {
  if (b ? b.dd : b) {
    return b.dd();
  }
  var c;
  c = em[n(null == b ? null : b)];
  if (!c && (c = em._, !c)) {
    throw z("LiveChannelGraphProtocol.init", b);
  }
  return c.call(null, b);
};
function fm(a, b, c, d, e, f, h, k) {
  this.definition = a;
  this.va = b;
  this.$a = c;
  this.Ja = d;
  this.Ba = e;
  this.p = f;
  this.j = h;
  this.i = k;
  this.g = 2229667594;
  this.r = 8192;
}
g = fm.prototype;
g.w = function(a, b) {
  return Gb.d(this, b, null);
};
g.t = function(a, b, c) {
  switch(b instanceof O ? b.ka : null) {
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
      return Dd(this.j, b, c);
  }
};
g.Eb = function() {
  return xj(this.va);
};
g.B = function(a, b, c) {
  return Ah(b, function() {
    return function(a) {
      return Ah(b, W, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.LiveChannelGraph{", ", ", "}", c, Ee.a(new T(null, 5, 5, U, [new T(null, 2, 5, U, [ki, this.definition], null), new T(null, 2, 5, U, [ii, this.va], null), new T(null, 2, 5, U, [Hi, this.$a], null), new T(null, 2, 5, U, [Pi, this.Ja], null), new T(null, 2, 5, U, [Wi, this.Ba], null)], null), this.j));
};
g.A = function() {
  return this.p;
};
g.I = function() {
  return 5 + L(this.j);
};
g.F = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ie(this);
};
g.q = function(a, b) {
  var c;
  c = w(b) ? (c = this.constructor === b.constructor) ? ig(this, b) : c : b;
  return w(c) ? !0 : !1;
};
g.cd = function() {
  for (var a = this, b = this, c = cm(Kl(a.definition)), c = D(rg(c)), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.O(null, f);
      qk(function() {
        var c = a.Ba;
        return h.a ? h.a(b, c) : h.call(null, b, c);
      }(), a.va);
      f += 1;
    } else {
      if (c = D(c)) {
        d = c;
        if (Rd(d)) {
          c = rc(d), f = sc(d), d = c, e = L(c), c = f;
        } else {
          var k = F(d);
          qk(function() {
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
  return Si.b(this.definition).call(null, this, this.Ba);
};
g.Fb = function(a, b, c) {
  return wj(this.va, b, c);
};
g.ya = function(a, b) {
  return Xd(new nh(null, new ab(null, 5, [ii, null, ki, null, Hi, null, Pi, null, Wi, null], null), null), b) ? Fd.a(td(Bf.a(Q, this), this.p), b) : new fm(this.definition, this.va, this.$a, this.Ja, this.Ba, this.p, Ne(Fd.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return w(P.a ? P.a(ki, b) : P.call(null, ki, b)) ? new fm(c, this.va, this.$a, this.Ja, this.Ba, this.p, this.j, null) : w(P.a ? P.a(ii, b) : P.call(null, ii, b)) ? new fm(this.definition, c, this.$a, this.Ja, this.Ba, this.p, this.j, null) : w(P.a ? P.a(Hi, b) : P.call(null, Hi, b)) ? new fm(this.definition, this.va, c, this.Ja, this.Ba, this.p, this.j, null) : w(P.a ? P.a(Pi, b) : P.call(null, Pi, b)) ? new fm(this.definition, this.va, this.$a, c, this.Ba, this.p, this.j, null) : w(P.a ? P.a(Wi, 
  b) : P.call(null, Wi, b)) ? new fm(this.definition, this.va, this.$a, this.Ja, c, this.p, this.j, null) : new fm(this.definition, this.va, this.$a, this.Ja, this.Ba, this.p, N.d(this.j, b, c), null);
};
g.H = function() {
  return D(Ee.a(new T(null, 5, 5, U, [new T(null, 2, 5, U, [ki, this.definition], null), new T(null, 2, 5, U, [ii, this.va], null), new T(null, 2, 5, U, [Hi, this.$a], null), new T(null, 2, 5, U, [Pi, this.Ja], null), new T(null, 2, 5, U, [Wi, this.Ba], null)], null), this.j));
};
g.C = function(a, b) {
  return new fm(this.definition, this.va, this.$a, this.Ja, this.Ba, b, this.j, this.i);
};
g.Vc = !0;
g.Ac = function(a, b, c) {
  return tk(this.Ja, b, c);
};
g.Zb = function(a, b) {
  return cl(this.Ja, b);
};
g.G = function(a, b) {
  return Qd(b) ? Ib(this, B.a(b, 0), B.a(b, 1)) : rb(zb, this, b);
};
var gm = function gm(b, c) {
  if (b ? b.Hc : b) {
    return b.Hc(b, c);
  }
  var d;
  d = gm[n(null == b ? null : b)];
  if (!d && (d = gm._, !d)) {
    throw z("SignalLike.spawn*", b);
  }
  return d.call(null, b, c);
}, hm = function hm(b, c, d) {
  if (b ? b.Gc : b) {
    return b.Gc(b, c, d);
  }
  var e;
  e = hm[n(null == b ? null : b)];
  if (!e && (e = hm._, !e)) {
    throw z("SignalLike.pipe-to-atom*", b);
  }
  return e.call(null, b, c, d);
}, im = S.b(bf(df(S, function(a) {
  return null == yl(a) ? zl(a, (new Date).valueOf()) : a;
}), function(a) {
  return Od(a) ? a : null == a ? zd : new T(null, 1, 5, U, [a], null);
}));
fm.prototype.Hc = function(a, b) {
  return gm(nj.b(this), b);
};
fm.prototype.Gc = function(a, b, c) {
  vl(D(c) ? ef(b, c) : df(nf, b), el(this, lk.m()));
  return b;
};
Tl.prototype.Hc = function(a, b) {
  var c = lk.a(1, im), d = dl(c), d = bm(Kl(this), d, this, b), e = dl(el(Cd(d, this), lk.a(1, Hl)));
  return dm(new fm(this, c, d, e, b, null, null, null));
};
Tl.prototype.Gc = function(a, b, c) {
  return hm(gm(this, null), b, c);
};
if ("undefined" === typeof jm) {
  var jm = function() {
    var a = kf ? kf(Q) : jf.call(null, Q), b = kf ? kf(Q) : jf.call(null, Q), c = kf ? kf(Q) : jf.call(null, Q), d = kf ? kf(Q) : jf.call(null, Q), e = Dd(Q, kj, Uh());
    return new di(Qc("jamesmacaulay.zelkova.impl.signal", "value-source-\x3eevents-fn"), function() {
      return function(a) {
        if (a ? w(w(null) ? null : a.Vc) || (a.Hb ? 0 : y(sk, a)) : y(sk, a)) {
          a = cj;
        } else {
          if (a ? w(w(null) ? null : a.Bd) || (a.Hb ? 0 : y(uj, a)) : y(uj, a)) {
            a = bj;
          } else {
            var b = Gd(a);
            a = (b ? b : a ? a.g & 1 || a.Td || (a.g ? 0 : y(ub, a)) : y(ub, a)) ? si : null;
          }
        }
        return a;
      };
    }(a, b, c, d, e), zi, e, a, b, c, d);
  }()
}
ei(jm, si, function(a, b) {
  return function(c, d) {
    var e = a.a ? a.a(c, d) : a.call(null, c, d);
    return qk(e, lk.a(1, S.b(df(Cl, b))));
  };
});
ei(jm, cj, function(a, b) {
  function c() {
    return el(a, lk.m());
  }
  return jm.a ? jm.a(c, b) : jm.call(null, c, b);
});
ei(jm, bj, function(a, b) {
  var c = dl(a);
  return jm.a ? jm.a(c, b) : jm.call(null, c, b);
});
function km(a, b) {
  return Vl(new ab(null, 3, [Si, af(0), Xi, a, hi, new wg([a, jm.a ? jm.a(b, a) : jm.call(null, b, a)])], null));
}
function lm() {
  var a = Wc.a(n(performance), "undefined") ? Date.now() : performance.now(), b = re.b(Lh()), c = lk.m();
  return Vl(new ab(null, 4, [Si, af(a), Xi, b, hi, new wg([b, jm.a ? jm.a(c, b) : jm.call(null, c, b)]), Qi, c], null));
}
function mm(a) {
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
          return gd(a) ? a : new fd(a);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    d.m = c;
    d.b = b;
    d.a = function(a) {
      return gd(a) ? a : new fd(a);
    };
    return d;
  }();
}
function nm(a) {
  return Vl(new ab(null, 3, [Si, af(a), Bi, new T(null, 1, 5, U, [Ci], null), mj, mm], null));
}
function om(a, b) {
  if (Md(b)) {
    return nm(a.m ? a.m() : a.call(null));
  }
  var c = Xf(b), d = cf(S.b(function() {
    return function(a) {
      M(a, 0);
      M(a, 1);
      return M(a, 2);
    };
  }(c)), wf(function() {
    return function(a) {
      return Ze(Al, a);
    };
  }(c)), S.b(function() {
    return function(b) {
      return Fl(Ie(a, S.a(wl, b)));
    };
  }(c)));
  return Vl(new ab(null, 3, [Si, function(b, c) {
    return function(d, k) {
      return Ie(a, S.a(function() {
        return function(a) {
          return Si.b(a).call(null, d, k);
        };
      }(b, c), b));
    };
  }(c, d), Bi, c, mj, d], null));
}
function pm(a, b) {
  return om(a, b);
}
function qm(a, b, c) {
  return Vl(new ab(null, 3, [Si, af(b), Bi, new T(null, 1, 5, U, [c], null), mj, bf(wf(function(a) {
    M(a, 0);
    M(a, 1);
    a = M(a, 2);
    a = M(a, 0);
    return Al(a);
  }), S.b(function(b) {
    M(b, 0);
    var c = M(b, 1);
    b = M(b, 2);
    b = M(b, 0);
    b = wl(b);
    c = a.a ? a.a(b, c) : a.call(null, b, c);
    return Fl(c);
  }))], null));
}
function rm(a) {
  return Vl(new ab(null, 3, [Si, Si.b(a), Bi, new T(null, 1, 5, U, [a], null), mj, bf(wf(function(a) {
    M(a, 0);
    var c = M(a, 1);
    a = M(a, 2);
    a = M(a, 0);
    var d = Al(a);
    w(d) ? (a = wl(a), c = !Wc.a(c, a)) : c = d;
    return c;
  }), S.b(function(a) {
    M(a, 0);
    M(a, 1);
    a = M(a, 2);
    return M(a, 0);
  }))], null));
}
function sm(a, b, c) {
  return qm(function(b, c) {
    return a.a ? a.a(c, b) : a.call(null, c, b);
  }, b, c);
}
function tm(a) {
  a = gm(a, null);
  var b;
  b = em(a);
  var c = new ab(null, 1, [ui, a], null);
  b = jf.d ? jf.d(b, db, c) : jf.call(null, b, db, c);
  return hm(a, b, null);
}
;var um = Ed("readonly ismap class minlength for colspan usemap rowspan contenteditable maxlength novalidate tabindex".split(" "), "readOnly isMap className minLength htmlFor colSpan useMap rowSpan contentEditable maxLength noValidate tabIndex".split(" "));
function vm(a) {
  return rb(function(a, c) {
    var d = M(c, 0), e = M(c, 1), d = se(d);
    Wc.a(d, "style") ? a.attributes = {style:e} : a[um.a ? um.a(d, d) : um.call(null, d, d)] = e;
    return a;
  }, {}, a);
}
;var wm;
a: {
  var xm = aa.navigator;
  if (xm) {
    var ym = xm.userAgent;
    if (ym) {
      wm = ym;
      break a;
    }
  }
  wm = "";
}
;var zm = -1 != wm.indexOf("Opera") || -1 != wm.indexOf("OPR"), Am = -1 != wm.indexOf("Trident") || -1 != wm.indexOf("MSIE"), Bm = -1 != wm.indexOf("Gecko") && -1 == wm.toLowerCase().indexOf("webkit") && !(-1 != wm.indexOf("Trident") || -1 != wm.indexOf("MSIE")), Cm = -1 != wm.toLowerCase().indexOf("webkit");
function Dm() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var Em = function() {
  var a = "", b;
  if (zm && aa.opera) {
    return a = aa.opera.version, ga(a) ? a() : a;
  }
  Bm ? b = /rv\:([^\);]+)(\)|;)/ : Am ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Cm && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(wm)) ? a[1] : "");
  return Am && (b = Dm(), b > parseFloat(a)) ? String(b) : a;
}(), Fm = {};
function Gm(a) {
  var b;
  if (!(b = Fm[a])) {
    b = 0;
    for (var c = String(Em).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var p = l.exec(h) || ["", "", ""], q = m.exec(k) || ["", "", ""];
        if (0 == p[0].length && 0 == q[0].length) {
          break;
        }
        b = Fa(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == q[1].length ? 0 : parseInt(q[1], 10)) || Fa(0 == p[2].length, 0 == q[2].length) || Fa(p[2], q[2]);
      } while (0 == b);
    }
    b = Fm[a] = 0 <= b;
  }
  return b;
}
var Im = aa.document, Jm = Im && Am ? Dm() || ("CSS1Compat" == Im.compatMode ? parseInt(Em, 10) : 5) : void 0;
var Km = !Am || Am && 9 <= Jm;
!Bm && !Am || Am && Am && 9 <= Jm || Bm && Gm("1.9.1");
Am && Gm("9");
function Lm(a, b) {
  Ha(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Mm ? a.setAttribute(Mm[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
  });
}
var Mm = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Nm(a, b, c) {
  var d = arguments, e = document, f = d[0], h = d[1];
  if (!Km && h && (h.name || h.type)) {
    f = ["\x3c", f];
    h.name && f.push(' name\x3d"', pa(h.name), '"');
    if (h.type) {
      f.push(' type\x3d"', pa(h.type), '"');
      var k = {};
      Ja(k, h);
      delete k.type;
      h = k;
    }
    f.push("\x3e");
    f = f.join("");
  }
  f = e.createElement(f);
  h && (ea(h) ? f.className = h : "array" == n(h) ? f.className = h.join(" ") : Lm(f, h));
  2 < d.length && Om(e, f, d);
  return f;
}
function Om(a, b, c) {
  function d(c) {
    c && b.appendChild(ea(c) ? a.createTextNode(c) : c);
  }
  for (var e = 2;e < c.length;e++) {
    var f = c[e];
    !da(f) || ha(f) && 0 < f.nodeType ? d(f) : Qa(Pm(f) ? Ra(f) : f, d);
  }
}
function Pm(a) {
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
;var Qm = function Qm(b) {
  if (b ? b.Jc : b) {
    return b.Jc(b);
  }
  var c;
  c = Qm[n(null == b ? null : b)];
  if (!c && (c = Qm._, !c)) {
    throw z("IDOMBuilder.-node", b);
  }
  return c.call(null, b);
};
Qm._ = function(a) {
  a = "" + A(a);
  return document.createTextNode(String(a));
};
Qm.string = function(a) {
  return document.createTextNode(String(a));
};
Node.prototype.Jc = function() {
  return this;
};
var uf = bf(function(a) {
  return a instanceof O;
}, F);
function Rm(a) {
  return Xf(yf(hb, Af(a)));
}
function Sm(a) {
  if ("string" === typeof a) {
    var b = /\s+/;
    a = Wc.a("" + A(b), "/(?:)/") ? yd.a(Xf(J("", S.a(A, D(a)))), "") : Xf(("" + A(a)).split(b));
    if (Wc.a(0, 0)) {
      a: {
        for (;;) {
          if (Wc.a("", Kd(a))) {
            a = null == a ? null : Rb(a);
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
function Tm(a, b) {
  var c;
  c = Ui.b(a);
  c = w(c) ? c : Ui.b(b);
  if (w(c)) {
    c = Sm(Ui.b(a));
    var d = Sm(Ui.b(b));
    a: {
      for (d = ml.a(c, d), c = new La, d = D(d);;) {
        if (d) {
          c.append("" + A(F(d))), d = H(d), null != d && c.append(" ");
        } else {
          c = c.toString();
          break a;
        }
      }
    }
    return N.d(Bf.a(a, b), Ui, c);
  }
  return Bf.a(a, b);
}
function Um(a, b, c, d, e, f) {
  this.tag = a;
  this.xa = b;
  this.children = c;
  this.p = d;
  this.j = e;
  this.i = f;
  this.g = 2229667595;
  this.r = 8192;
}
g = Um.prototype;
g.w = function(a, b) {
  return Gb.d(this, b, null);
};
g.t = function(a, b, c) {
  switch(b instanceof O ? b.ka : null) {
    case "tag":
      return this.tag;
    case "attrs":
      return this.xa;
    case "children":
      return this.children;
    default:
      return Dd(this.j, b, c);
  }
};
g.B = function(a, b, c) {
  return Ah(b, function() {
    return function(a) {
      return Ah(b, W, "", " ", "", c, a);
    };
  }(this), "#stch.html.Element{", ", ", "}", c, Ee.a(new T(null, 3, 5, U, [new T(null, 2, 5, U, [hj, this.tag], null), new T(null, 2, 5, U, [dj, this.xa], null), new T(null, 2, 5, U, [mi, this.children], null)], null), this.j));
};
g.A = function() {
  return this.p;
};
g.I = function() {
  return 3 + L(this.j);
};
g.F = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ie(this);
};
g.q = function(a, b) {
  var c;
  c = w(b) ? (c = this.constructor === b.constructor) ? ig(this, b) : c : b;
  return w(c) ? !0 : !1;
};
g.Jc = function() {
  if (D(this.children)) {
    return Ke(Nm, this.tag, Sh(this.xa), S.a(Qm, this.children));
  }
  var a = this.tag, b = Sh(this.xa);
  return Nm(a, b);
};
g.ya = function(a, b) {
  return Xd(new nh(null, new ab(null, 3, [mi, null, dj, null, hj, null], null), null), b) ? Fd.a(td(Bf.a(Q, this), this.p), b) : new Um(this.tag, this.xa, this.children, this.p, Ne(Fd.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return w(P.a ? P.a(hj, b) : P.call(null, hj, b)) ? new Um(c, this.xa, this.children, this.p, this.j, null) : w(P.a ? P.a(dj, b) : P.call(null, dj, b)) ? new Um(this.tag, c, this.children, this.p, this.j, null) : w(P.a ? P.a(mi, b) : P.call(null, mi, b)) ? new Um(this.tag, this.xa, c, this.p, this.j, null) : new Um(this.tag, this.xa, this.children, this.p, N.d(this.j, b, c), null);
};
g.H = function() {
  return D(Ee.a(new T(null, 3, 5, U, [new T(null, 2, 5, U, [hj, this.tag], null), new T(null, 2, 5, U, [dj, this.xa], null), new T(null, 2, 5, U, [mi, this.children], null)], null), this.j));
};
g.C = function(a, b) {
  return new Um(this.tag, this.xa, this.children, b, this.j, this.i);
};
g.G = function(a, b) {
  return Qd(b) ? Ib(this, B.a(b, 0), B.a(b, 1)) : rb(zb, this, b);
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
    var e = Vm.b ? Vm.b(b) : Vm.call(null, b), f = M(e, 0), e = M(e, 1);
    return new Um(this.tag, Tm(this.xa, f), Bf.a(this.children, e), null, null, null);
  }
  a.v = 1;
  a.u = function(a) {
    F(a);
    a = Uc(a);
    return b(0, a);
  };
  a.k = b;
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(nb(b)));
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
    var b = Vm.b ? Vm.b(a) : Vm.call(null, a);
    a = M(b, 0);
    b = M(b, 1);
    return new Um(this.tag, Tm(this.xa, a), Bf.a(this.children, b), null, null, null);
  }
  a.v = 0;
  a.u = function(a) {
    a = D(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function Vm(a) {
  var b = M(a, 0), c = he(a);
  return b instanceof Um ? new T(null, 2, 5, U, [Q, Rm(a)], null) : b instanceof O ? (a = Df(2, 2, new T(null, 1, 5, U, [null], null), a), b = new T(null, 2, 5, U, [xh(uf, a), tf(a)], null), a = M(b, 0), b = M(b, 1), new T(null, 2, 5, U, [Bf.a(Q, S.a(Xf, a)), Rm(b)], null)) : Pd(b) ? new T(null, 2, 5, U, [b, Rm(c)], null) : new T(null, 2, 5, U, [Q, Rm(a)], null);
}
function Wm(a) {
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
      return Ie(new Um(a, Q, zd, null, null, null), b);
    }
    b.v = 0;
    b.u = function(a) {
      a = D(a);
      return c(a);
    };
    b.k = c;
    return b;
  }();
}
var Jn = Wm("div"), Kn = Wm("img");
var Ln = VDOM.VNode, Mn = VDOM.VText, Nn = VDOM.create, On = VDOM.patch, Pn = VDOM.diff, Qn = function Qn(b) {
  if (b ? b.$c : b) {
    return b.$c();
  }
  var c;
  c = Qn[n(null == b ? null : b)];
  if (!c && (c = Qn._, !c)) {
    throw z("VDOMBuilder.-vtree", b);
  }
  return c.call(null, b);
};
Qn.string = function(a) {
  return new Mn(a);
};
Um.prototype.$c = function() {
  return new Ln(se(this.tag), vm(this.xa), Sh(S.a(Qn, this.children)));
};
Qn._ = function(a) {
  return new Mn(a.toString());
};
function Rn(a) {
  return Od(a) ? new Ln("div", {}, Sh(S.a(Qn, a))) : Qn(a);
}
function Sn(a, b, c, d, e) {
  this.ua = a;
  this.pb = b;
  this.p = c;
  this.j = d;
  this.i = e;
  this.g = 2229667594;
  this.r = 8192;
}
g = Sn.prototype;
g.w = function(a, b) {
  return Gb.d(this, b, null);
};
g.t = function(a, b, c) {
  switch(b instanceof O ? b.ka : null) {
    case "tree":
      return this.ua;
    case "root-node":
      return this.pb;
    default:
      return Dd(this.j, b, c);
  }
};
g.B = function(a, b, c) {
  return Ah(b, function() {
    return function(a) {
      return Ah(b, W, "", " ", "", c, a);
    };
  }(this), "#dominator.core.VDOM{", ", ", "}", c, Ee.a(new T(null, 2, 5, U, [new T(null, 2, 5, U, [ti, this.ua], null), new T(null, 2, 5, U, [oj, this.pb], null)], null), this.j));
};
g.A = function() {
  return this.p;
};
g.I = function() {
  return 2 + L(this.j);
};
g.F = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ie(this);
};
g.q = function(a, b) {
  var c;
  c = w(b) ? (c = this.constructor === b.constructor) ? ig(this, b) : c : b;
  return w(c) ? !0 : !1;
};
g.ya = function(a, b) {
  return Xd(new nh(null, new ab(null, 2, [ti, null, oj, null], null), null), b) ? Fd.a(td(Bf.a(Q, this), this.p), b) : new Sn(this.ua, this.pb, this.p, Ne(Fd.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return w(P.a ? P.a(ti, b) : P.call(null, ti, b)) ? new Sn(c, this.pb, this.p, this.j, null) : w(P.a ? P.a(oj, b) : P.call(null, oj, b)) ? new Sn(this.ua, c, this.p, this.j, null) : new Sn(this.ua, this.pb, this.p, N.d(this.j, b, c), null);
};
g.H = function() {
  return D(Ee.a(new T(null, 2, 5, U, [new T(null, 2, 5, U, [ti, this.ua], null), new T(null, 2, 5, U, [oj, this.pb], null)], null), this.j));
};
g.C = function(a, b) {
  return new Sn(this.ua, this.pb, b, this.j, this.i);
};
g.G = function(a, b) {
  return Qd(b) ? Ib(this, B.a(b, 0), B.a(b, 1)) : rb(zb, this, b);
};
function Tn(a) {
  return function(b) {
    return function(c) {
      var d = Rn(c), e = I.b ? I.b(b) : I.call(null, b);
      if (null == e) {
        return c = Nn.b ? Nn.b(d) : Nn.call(null, d), a.appendChild(c), c = new Sn(d, c, null, null, null), nf.a ? nf.a(b, c) : nf.call(null, b, c);
      }
      var f = function() {
        var a = e.ua;
        return Pn.a ? Pn.a(a, d) : Pn.call(null, a, d);
      }();
      c = function() {
        var a = e.pb;
        return On.a ? On.a(a, f) : On.call(null, a, f);
      }();
      c = new Sn(d, c, null, null, null);
      return nf.a ? nf.a(b, c) : nf.call(null, b, c);
    };
  }(kf ? kf(null) : jf.call(null, null));
}
function Un(a) {
  return window.requestAnimationFrame(a);
}
var Vn = function(a) {
  return function(b, c) {
    var d = I.b ? I.b(a) : I.call(null, a);
    return Wc.a(c, d) ? null : (b.b ? b.b(c) : b.call(null, c), nf.a ? nf.a(a, c) : nf.call(null, a, c));
  };
}(kf ? kf(pj) : jf.call(null, pj));
var Wn = !Am || Am && 9 <= Jm, Xn = Am && !Gm("9");
!Cm || Gm("528");
Bm && Gm("1.9b") || Am && Gm("8") || zm && Gm("9.5") || Cm && Gm("528");
Bm && !Gm("8") || Am && Gm("9");
function Yn(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.Ic = !1;
}
Yn.prototype.stopPropagation = function() {
  this.Ic = !0;
};
Yn.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
};
function Zn(a) {
  Zn[" "](a);
  return a;
}
Zn[" "] = function() {
};
function $n(a, b) {
  Yn.call(this, a ? a.type : "");
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
      if (Bm) {
        var e;
        a: {
          try {
            Zn(d.nodeName);
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
    this.offsetX = Cm || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = Cm || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
  a.prototype = Yn.prototype;
  $n.gd = Yn.prototype;
  $n.prototype = new a;
  $n.prototype.constructor = $n;
  $n.hc = function(a, c, d) {
    return Yn.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
})();
$n.prototype.stopPropagation = function() {
  $n.gd.stopPropagation.call(this);
  this.ac.stopPropagation ? this.ac.stopPropagation() : this.ac.cancelBubble = !0;
};
$n.prototype.preventDefault = function() {
  $n.gd.preventDefault.call(this);
  var a = this.ac;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Xn) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var ao = "closure_listenable_" + (1E6 * Math.random() | 0), bo = 0;
function co(a, b, c, d, e) {
  this.Mb = a;
  this.rc = null;
  this.src = b;
  this.type = c;
  this.uc = !!d;
  this.ib = e;
  this.key = ++bo;
  this.fc = this.tc = !1;
}
function eo(a) {
  a.fc = !0;
  a.Mb = null;
  a.rc = null;
  a.src = null;
  a.ib = null;
}
;function fo(a) {
  this.src = a;
  this.Ya = {};
  this.sc = 0;
}
fo.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.Ya[f];
  a || (a = this.Ya[f] = [], this.sc++);
  var h = go(a, b, d, e);
  -1 < h ? (b = a[h], c || (b.tc = !1)) : (b = new co(b, this.src, f, !!d, e), b.tc = c, a.push(b));
  return b;
};
fo.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.Ya)) {
    return!1;
  }
  var e = this.Ya[a];
  b = go(e, b, c, d);
  return-1 < b ? (eo(e[b]), Ma.splice.call(e, b, 1), 0 == e.length && (delete this.Ya[a], this.sc--), !0) : !1;
};
function go(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.fc && f.Mb == b && f.uc == !!c && f.ib == d) {
      return e;
    }
  }
  return-1;
}
;var ho = "closure_lm_" + (1E6 * Math.random() | 0), io = {}, jo = 0;
function ko(a, b, c, d, e) {
  if ("array" == n(b)) {
    for (var f = 0;f < b.length;f++) {
      ko(a, b[f], c, d, e);
    }
  } else {
    if (c = lo(c), a && a[ao]) {
      a.$d(b, c, d, e);
    } else {
      if (!b) {
        throw Error("Invalid event type");
      }
      var f = !!d, h = mo(a);
      h || (a[ho] = h = new fo(a));
      c = h.add(b, c, !1, d, e);
      c.rc || (d = no(), c.rc = d, d.src = a, d.Mb = c, a.addEventListener ? a.addEventListener(b.toString(), d, f) : a.attachEvent(oo(b.toString()), d), jo++);
    }
  }
}
function no() {
  var a = po, b = Wn ? function(c) {
    return a.call(b.src, b.Mb, c);
  } : function(c) {
    c = a.call(b.src, b.Mb, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function oo(a) {
  return a in io ? io[a] : io[a] = "on" + a;
}
function qo(a, b, c, d) {
  var e = 1;
  if (a = mo(a)) {
    if (b = a.Ya[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.uc == c && !f.fc && (e &= !1 !== ro(f, d));
      }
    }
  }
  return Boolean(e);
}
function ro(a, b) {
  var c = a.Mb, d = a.ib || a.src;
  if (a.tc && "number" != typeof a && a && !a.fc) {
    var e = a.src;
    if (e && e[ao]) {
      e.ae(a);
    } else {
      var f = a.type, h = a.rc;
      e.removeEventListener ? e.removeEventListener(f, h, a.uc) : e.detachEvent && e.detachEvent(oo(f), h);
      jo--;
      if (f = mo(e)) {
        var h = a.type, k;
        if (k = h in f.Ya) {
          k = f.Ya[h];
          var l = Pa(k, a), m;
          (m = 0 <= l) && Ma.splice.call(k, l, 1);
          k = m;
        }
        k && (eo(a), 0 == f.Ya[h].length && (delete f.Ya[h], f.sc--));
        0 == f.sc && (f.src = null, e[ho] = null);
      } else {
        eo(a);
      }
    }
  }
  return c.call(d, b);
}
function po(a, b) {
  if (a.fc) {
    return!0;
  }
  if (!Wn) {
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
    c = new $n(e, this);
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
        c.currentTarget = e[k], d &= qo(e[k], f, !0, c);
      }
      for (k = 0;!c.Ic && k < e.length;k++) {
        c.currentTarget = e[k], d &= qo(e[k], f, !1, c);
      }
    }
    return d;
  }
  return ro(a, new $n(b, this));
}
function mo(a) {
  a = a[ho];
  return a instanceof fo ? a : null;
}
var so = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function lo(a) {
  if (ga(a)) {
    return a;
  }
  a[so] || (a[so] = function(b) {
    return a.handleEvent(b);
  });
  return a[so];
}
;function to() {
  return uo(arguments[0], arguments[1], 2 < arguments.length ? new E(Array.prototype.slice.call(arguments, 2), 0) : null);
}
function uo(a, b, c) {
  c = Je(lk, 1, c);
  ko(a, b, function(a, b, c) {
    return function(a) {
      return ok(c, a);
    };
  }(a, b, c));
  return c;
}
var vo = km(Ri, function() {
  return to(document, "keydown");
}), wo = km(Fi, function() {
  return to(document, "keyup");
}), xo = km(Ii, function() {
  return to(window, "blur");
}), yo = new ab(null, 3, [rj, !1, ni, !1, ji, ph], null);
if ("undefined" === typeof zo) {
  var zo = function() {
    var a = kf ? kf(Q) : jf.call(null, Q), b = kf ? kf(Q) : jf.call(null, Q), c = kf ? kf(Q) : jf.call(null, Q), d = kf ? kf(Q) : jf.call(null, Q), e = Dd(Q, kj, Uh());
    return new di(Qc("jamesmacaulay.zelkova.keyboard", "event-action"), function() {
      return function(a, b) {
        return b.type;
      };
    }(a, b, c, d, e), zi, e, a, b, c, d);
  }()
}
ei(zo, "keydown", function(a, b) {
  return N.k(Ef.s(a, new T(null, 1, 5, U, [ji], null), yd, b.keyCode), yi, b.altKey, sd([db, b.metaKey], 0));
});
ei(zo, "keyup", function(a, b) {
  return N.k(Ef.s(a, new T(null, 1, 5, U, [ji], null), Ld, b.keyCode), yi, b.altKey, sd([db, b.metaKey], 0));
});
ei(zo, "blur", function() {
  return yo;
});
var Ao = zo, Bo;
Bo = function(a) {
  return Vl(new ab(null, 3, [Si, Si.b(F(a)), Bi, a, mj, bf(S.b(function(a) {
    M(a, 0);
    M(a, 1);
    a = M(a, 2);
    return F(xf(Al, a));
  }), wf($e(hb)))], null));
}(sd([vo, wo, xo], 0));
var Co = sm(Ao, yo, Bo);
function Do(a) {
  return rm(pm(a, sd([Co], 0)));
}
Do(ji);
function Eo(a, b, c, d) {
  return Do(function(e) {
    e = Vd(e) ? Ie(lf, e) : e;
    e = Cd(e, ji);
    return new ab(null, 2, [gj, (w(e.b ? e.b(d) : e.call(null, d)) ? 1 : 0) + (w(e.b ? e.b(c) : e.call(null, c)) ? -1 : 0), fi, (w(e.b ? e.b(a) : e.call(null, a)) ? 1 : 0) + (w(e.b ? e.b(b) : e.call(null, b)) ? -1 : 0)], null);
  });
}
var Fo = Eo(38, 40, 37, 39);
Eo(87, 83, 65, 68);
function Go(a) {
  Do(function(b) {
    b = Vd(b) ? Ie(lf, b) : b;
    b = Cd(b, ji);
    return Wd(b.b ? b.b(a) : b.call(null, a));
  });
}
Do(yi);
Do(db);
Go(17);
Go(16);
Go(32);
Go(13);
pm(function(a) {
  return a.keyCode;
}, sd([vo], 0));
var Va = function() {
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
    return console.log.apply(console, qb ? pb(a) : ob.call(null, a));
  }
  a.v = 0;
  a.u = function(a) {
    a = D(a);
    return b(a);
  };
  a.k = b;
  return a;
}(), Ho = !Wc.a(navigator.userAgent.indexOf("Firefox"), -1), Io = new ab(null, 5, [gj, 100, fi, 550, wi, 0, Gi, 0, xi, "right"], null), Jo = w(Ho) ? 510 : 508;
function Ko(a) {
  if (!Wc.a(wi.b(a), 0)) {
    var b = wi.b(a);
    a = Math.abs(b) <= (w(0 < fi.b(a)) ? .02 : .08) ? N.d(a, wi, 0) : 0 < wi.b(a) ? N.d(a, wi, wi.b(a) - (w(0 < fi.b(a)) ? .02 : .08)) : 0 > wi.b(a) ? N.d(a, wi, wi.b(a) + (w(0 < fi.b(a)) ? .02 : .08)) : null;
  }
  return a;
}
function Lo(a) {
  return 3 + 1 * Math.abs(a);
}
function Mo(a, b) {
  var c = Vd(a) ? Ie(lf, a) : a, c = Cd(c, gj);
  if (0 > c) {
    var d = 0 < wi.b(b) ? Ko(b) : b, c = function() {
      var a = wi.b(d) - (w(0 < fi.b(d)) ? .02 : .03);
      return-5 > a ? -5 : a;
    }();
    return N.k(d, wi, c, sd([xi, "left"], 0));
  }
  return 0 < c ? (d = 0 > wi.b(b) ? Ko(b) : b, c = function() {
    var a = wi.b(d) + (w(0 < fi.b(d)) ? .02 : .03);
    return 5 < a ? 5 : a;
  }(), N.k(d, wi, c, sd([xi, "right"], 0))) : Ko(b);
}
var No = function(a, b) {
  return Vl(new ab(null, 3, [Si, Si.b(b), Bi, new T(null, 2, 5, U, [a, b], null), mj, bf(S.b(function(a) {
    M(a, 0);
    M(a, 1);
    var b = M(a, 2);
    a = M(b, 0);
    b = M(b, 1);
    return w(Al(a)) ? Fl(wl(b)) : null;
  }), wf($e(hb)))], null));
}(function() {
  var a = lm();
  Un(function(a) {
    return function d(e) {
      ok(a, e);
      return Un(d);
    };
  }(a));
  return a;
}(), Fo), Oo = rm(sm(function(a, b) {
  var c;
  c = Vd(b) ? Ie(lf, b) : b;
  c = 0 < Cd(c, fi) && jb(0 < fi.b(a)) ? N.d(a, Gi, Lo(wi.b(a))) : a;
  c = Mo(b, c);
  c = fi.b(c) <= -Gi.b(c) ? N.k(c, fi, 0, sd([Gi, 0], 0)) : N.k(c, fi, fi.b(c) + Gi.b(c), sd([Gi, -5 >= Gi.b(c) ? -5 : Gi.b(c) - .2], 0));
  return N.k(c, gj, gj.b(c) + wi.b(c), sd([fi, fi.b(c) + Gi.b(c)], 0));
}, Io, No));
(function(a, b) {
  var c = tm(a), d = Tn(b);
  return Un(function(a, b) {
    return function k() {
      Vn(b, I.b ? I.b(a) : I.call(null, a));
      return Un(k);
    };
  }(c, d));
})(pm(function(a) {
  var b;
  b = w(0 < fi.b(a)) ? "jump" : Wc.a(wi.b(a), 0) ? "stand" : "walk";
  var c = xi.b(a);
  b = [A("images/mario/"), A(b), A("/"), A(c), A(".gif")].join("");
  c = gj.b(a);
  a = Jo - fi.b(a);
  a = [A("left: "), A(c), A("px; top: "), A(a), A("px;")].join("");
  a = Kn.R ? Kn.R(Ti, "mario", Ki, b, Oi, a) : Kn.call(null, Ti, "mario", Ki, b, Oi, a);
  b = Jn.a ? Jn.a(Ti, "ground") : Jn.call(null, Ti, "ground");
  return Jn.s ? Jn.s(Ti, "world", a, b) : Jn.call(null, Ti, "world", a, b);
}, sd([Oo], 0)), document.body);

})();

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
var g, ca = this;
function da() {
}
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
function ea(a) {
  var b = n(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function fa(a) {
  return "string" == typeof a;
}
function ha(a) {
  return "function" == n(a);
}
function ia(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
var ka = "closure_uid_" + (1E9 * Math.random() >>> 0), la = 0;
function ma(a, b, c) {
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
  oa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ma : na;
  return oa.apply(null, arguments);
}
var qa = Date.now || function() {
  return+new Date;
};
function ra(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.Re = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.Dc = function(a, c, f) {
    return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
}
;function sa(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
}
function va(a) {
  if (!xa.test(a)) {
    return a;
  }
  -1 != a.indexOf("\x26") && (a = a.replace(ya, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(Aa, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(Ca, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Fa, "\x26quot;"));
  -1 != a.indexOf("'") && (a = a.replace(Ga, "\x26#39;"));
  -1 != a.indexOf("\x00") && (a = a.replace(Ia, "\x26#0;"));
  return a;
}
var ya = /&/g, Aa = /</g, Ca = />/g, Fa = /"/g, Ga = /'/g, Ia = /\x00/g, xa = /[\x00&<>"']/;
function Ja(a) {
  return Array.prototype.join.call(arguments, "");
}
function Ka(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
;function La(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
function Na(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
}
function Oa(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
}
var Pa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Qa(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < Pa.length;f++) {
      c = Pa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
;function Ra(a, b) {
  null != a && this.append.apply(this, arguments);
}
g = Ra.prototype;
g.Ab = "";
g.set = function(a) {
  this.Ab = "" + a;
};
g.append = function(a, b, c) {
  this.Ab += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Ab += arguments[d];
    }
  }
  return this;
};
g.clear = function() {
  this.Ab = "";
};
g.toString = function() {
  return this.Ab;
};
function Sa(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Sa);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
}
ra(Sa, Error);
Sa.prototype.name = "CustomError";
var Ta = Array.prototype, Ua = Ta.forEach ? function(a, b, c) {
  Ta.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = fa(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
}, Xa = Ta.some ? function(a, b, c) {
  return Ta.some.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = fa(a) ? a.split("") : a, f = 0;f < d;f++) {
    if (f in e && b.call(c, e[f], f, a)) {
      return!0;
    }
  }
  return!1;
};
function Ya(a) {
  return Ta.concat.apply(Ta, arguments);
}
function Za(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}
function ab(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;var db;
if ("undefined" === typeof eb) {
  var eb = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
var fb = null;
if ("undefined" === typeof gb) {
  var gb = null
}
function hb() {
  return new ib(null, 5, [jb, !0, lb, !0, mb, !1, nb, !1, ob, null], null);
}
function v(a) {
  return null != a && !1 !== a;
}
function pb(a) {
  return null == a;
}
function qb(a) {
  return a instanceof Array;
}
function rb(a) {
  return v(a) ? !1 : !0;
}
function x(a, b) {
  return a[n(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function sb(a) {
  return null == a ? null : a.constructor;
}
function y(a, b) {
  var c = sb(b), c = v(v(c) ? c.cc : c) ? c.ac : n(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function tb(a) {
  var b = a.ac;
  return v(b) ? b : "" + B(a);
}
var ub = "undefined" !== typeof Symbol && "function" === n(Symbol) ? Symbol.iterator : "@@iterator";
function vb(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
function wb() {
  switch(arguments.length) {
    case 1:
      return xb(arguments[0]);
    case 2:
      return xb(arguments[1]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function yb(a) {
  return xb(a);
}
function xb(a) {
  function b(a, b) {
    a.push(b);
    return a;
  }
  var c = [];
  return zb ? zb(b, c, a) : Ab.call(null, b, c, a);
}
var Bb = {}, Cb = {}, Db = {}, Eb = function Eb(b) {
  if (b ? b.I : b) {
    return b.I(b);
  }
  var c;
  c = Eb[n(null == b ? null : b)];
  if (!c && (c = Eb._, !c)) {
    throw y("ICounted.-count", b);
  }
  return c.call(null, b);
}, Fb = function Fb(b) {
  if (b ? b.P : b) {
    return b.P(b);
  }
  var c;
  c = Fb[n(null == b ? null : b)];
  if (!c && (c = Fb._, !c)) {
    throw y("IEmptyableCollection.-empty", b);
  }
  return c.call(null, b);
}, Gb = {}, Hb = function Hb(b, c) {
  if (b ? b.G : b) {
    return b.G(b, c);
  }
  var d;
  d = Hb[n(null == b ? null : b)];
  if (!d && (d = Hb._, !d)) {
    throw y("ICollection.-conj", b);
  }
  return d.call(null, b, c);
}, Ib = {}, C = function C() {
  switch(arguments.length) {
    case 2:
      return C.a(arguments[0], arguments[1]);
    case 3:
      return C.d(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
C.a = function(a, b) {
  if (a ? a.N : a) {
    return a.N(a, b);
  }
  var c;
  c = C[n(null == a ? null : a)];
  if (!c && (c = C._, !c)) {
    throw y("IIndexed.-nth", a);
  }
  return c.call(null, a, b);
};
C.d = function(a, b, c) {
  if (a ? a.ua : a) {
    return a.ua(a, b, c);
  }
  var d;
  d = C[n(null == a ? null : a)];
  if (!d && (d = C._, !d)) {
    throw y("IIndexed.-nth", a);
  }
  return d.call(null, a, b, c);
};
C.v = 3;
var Jb = {}, Kb = function Kb(b) {
  if (b ? b.S : b) {
    return b.S(b);
  }
  var c;
  c = Kb[n(null == b ? null : b)];
  if (!c && (c = Kb._, !c)) {
    throw y("ISeq.-first", b);
  }
  return c.call(null, b);
}, Lb = function Lb(b) {
  if (b ? b.X : b) {
    return b.X(b);
  }
  var c;
  c = Lb[n(null == b ? null : b)];
  if (!c && (c = Lb._, !c)) {
    throw y("ISeq.-rest", b);
  }
  return c.call(null, b);
}, Mb = {}, Nb = {}, Ob = function Ob() {
  switch(arguments.length) {
    case 2:
      return Ob.a(arguments[0], arguments[1]);
    case 3:
      return Ob.d(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
Ob.a = function(a, b) {
  if (a ? a.w : a) {
    return a.w(a, b);
  }
  var c;
  c = Ob[n(null == a ? null : a)];
  if (!c && (c = Ob._, !c)) {
    throw y("ILookup.-lookup", a);
  }
  return c.call(null, a, b);
};
Ob.d = function(a, b, c) {
  if (a ? a.u : a) {
    return a.u(a, b, c);
  }
  var d;
  d = Ob[n(null == a ? null : a)];
  if (!d && (d = Ob._, !d)) {
    throw y("ILookup.-lookup", a);
  }
  return d.call(null, a, b, c);
};
Ob.v = 3;
var Pb = function Pb(b, c) {
  if (b ? b.Hc : b) {
    return b.Hc(b, c);
  }
  var d;
  d = Pb[n(null == b ? null : b)];
  if (!d && (d = Pb._, !d)) {
    throw y("IAssociative.-contains-key?", b);
  }
  return d.call(null, b, c);
}, Qb = function Qb(b, c, d) {
  if (b ? b.ra : b) {
    return b.ra(b, c, d);
  }
  var e;
  e = Qb[n(null == b ? null : b)];
  if (!e && (e = Qb._, !e)) {
    throw y("IAssociative.-assoc", b);
  }
  return e.call(null, b, c, d);
}, Rb = {}, Sb = function Sb(b, c) {
  if (b ? b.Ca : b) {
    return b.Ca(b, c);
  }
  var d;
  d = Sb[n(null == b ? null : b)];
  if (!d && (d = Sb._, !d)) {
    throw y("IMap.-dissoc", b);
  }
  return d.call(null, b, c);
}, Tb = {}, Ub = function Ub(b) {
  if (b ? b.nc : b) {
    return b.nc(b);
  }
  var c;
  c = Ub[n(null == b ? null : b)];
  if (!c && (c = Ub._, !c)) {
    throw y("IMapEntry.-key", b);
  }
  return c.call(null, b);
}, Vb = function Vb(b) {
  if (b ? b.oc : b) {
    return b.oc(b);
  }
  var c;
  c = Vb[n(null == b ? null : b)];
  if (!c && (c = Vb._, !c)) {
    throw y("IMapEntry.-val", b);
  }
  return c.call(null, b);
}, Wb = {}, Xb = function Xb(b, c) {
  if (b ? b.Yc : b) {
    return b.Yc(b, c);
  }
  var d;
  d = Xb[n(null == b ? null : b)];
  if (!d && (d = Xb._, !d)) {
    throw y("ISet.-disjoin", b);
  }
  return d.call(null, b, c);
}, Yb = function Yb(b) {
  if (b ? b.Bb : b) {
    return b.Bb(b);
  }
  var c;
  c = Yb[n(null == b ? null : b)];
  if (!c && (c = Yb._, !c)) {
    throw y("IStack.-peek", b);
  }
  return c.call(null, b);
}, Zb = function Zb(b) {
  if (b ? b.Cb : b) {
    return b.Cb(b);
  }
  var c;
  c = Zb[n(null == b ? null : b)];
  if (!c && (c = Zb._, !c)) {
    throw y("IStack.-pop", b);
  }
  return c.call(null, b);
}, $b = {}, ac = function ac(b, c, d) {
  if (b ? b.Mb : b) {
    return b.Mb(b, c, d);
  }
  var e;
  e = ac[n(null == b ? null : b)];
  if (!e && (e = ac._, !e)) {
    throw y("IVector.-assoc-n", b);
  }
  return e.call(null, b, c, d);
}, bc = function bc(b) {
  if (b ? b.Wb : b) {
    return b.Wb(b);
  }
  var c;
  c = bc[n(null == b ? null : b)];
  if (!c && (c = bc._, !c)) {
    throw y("IDeref.-deref", b);
  }
  return c.call(null, b);
}, cc = {}, dc = function dc(b) {
  if (b ? b.C : b) {
    return b.C(b);
  }
  var c;
  c = dc[n(null == b ? null : b)];
  if (!c && (c = dc._, !c)) {
    throw y("IMeta.-meta", b);
  }
  return c.call(null, b);
}, ec = {}, fc = function fc(b, c) {
  if (b ? b.D : b) {
    return b.D(b, c);
  }
  var d;
  d = fc[n(null == b ? null : b)];
  if (!d && (d = fc._, !d)) {
    throw y("IWithMeta.-with-meta", b);
  }
  return d.call(null, b, c);
}, gc = {}, hc = function hc() {
  switch(arguments.length) {
    case 2:
      return hc.a(arguments[0], arguments[1]);
    case 3:
      return hc.d(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
hc.a = function(a, b) {
  if (a ? a.T : a) {
    return a.T(a, b);
  }
  var c;
  c = hc[n(null == a ? null : a)];
  if (!c && (c = hc._, !c)) {
    throw y("IReduce.-reduce", a);
  }
  return c.call(null, a, b);
};
hc.d = function(a, b, c) {
  if (a ? a.U : a) {
    return a.U(a, b, c);
  }
  var d;
  d = hc[n(null == a ? null : a)];
  if (!d && (d = hc._, !d)) {
    throw y("IReduce.-reduce", a);
  }
  return d.call(null, a, b, c);
};
hc.v = 3;
var ic = function ic(b, c) {
  if (b ? b.q : b) {
    return b.q(b, c);
  }
  var d;
  d = ic[n(null == b ? null : b)];
  if (!d && (d = ic._, !d)) {
    throw y("IEquiv.-equiv", b);
  }
  return d.call(null, b, c);
}, jc = function jc(b) {
  if (b ? b.B : b) {
    return b.B(b);
  }
  var c;
  c = jc[n(null == b ? null : b)];
  if (!c && (c = jc._, !c)) {
    throw y("IHash.-hash", b);
  }
  return c.call(null, b);
}, kc = {}, lc = function lc(b) {
  if (b ? b.H : b) {
    return b.H(b);
  }
  var c;
  c = lc[n(null == b ? null : b)];
  if (!c && (c = lc._, !c)) {
    throw y("ISeqable.-seq", b);
  }
  return c.call(null, b);
}, mc = {}, nc = {}, oc = function oc(b) {
  if (b ? b.Yb : b) {
    return b.Yb(b);
  }
  var c;
  c = oc[n(null == b ? null : b)];
  if (!c && (c = oc._, !c)) {
    throw y("IReversible.-rseq", b);
  }
  return c.call(null, b);
}, pc = function pc(b, c) {
  if (b ? b.vd : b) {
    return b.vd(0, c);
  }
  var d;
  d = pc[n(null == b ? null : b)];
  if (!d && (d = pc._, !d)) {
    throw y("IWriter.-write", b);
  }
  return d.call(null, b, c);
}, qc = {}, rc = function rc(b, c, d) {
  if (b ? b.A : b) {
    return b.A(b, c, d);
  }
  var e;
  e = rc[n(null == b ? null : b)];
  if (!e && (e = rc._, !e)) {
    throw y("IPrintWithWriter.-pr-writer", b);
  }
  return e.call(null, b, c, d);
}, sc = function sc(b, c, d) {
  if (b ? b.ud : b) {
    return b.ud(0, c, d);
  }
  var e;
  e = sc[n(null == b ? null : b)];
  if (!e && (e = sc._, !e)) {
    throw y("IWatchable.-notify-watches", b);
  }
  return e.call(null, b, c, d);
}, tc = function tc(b) {
  if (b ? b.Xb : b) {
    return b.Xb(b);
  }
  var c;
  c = tc[n(null == b ? null : b)];
  if (!c && (c = tc._, !c)) {
    throw y("IEditableCollection.-as-transient", b);
  }
  return c.call(null, b);
}, vc = function vc(b, c) {
  if (b ? b.Kb : b) {
    return b.Kb(b, c);
  }
  var d;
  d = vc[n(null == b ? null : b)];
  if (!d && (d = vc._, !d)) {
    throw y("ITransientCollection.-conj!", b);
  }
  return d.call(null, b, c);
}, wc = function wc(b) {
  if (b ? b.Lb : b) {
    return b.Lb(b);
  }
  var c;
  c = wc[n(null == b ? null : b)];
  if (!c && (c = wc._, !c)) {
    throw y("ITransientCollection.-persistent!", b);
  }
  return c.call(null, b);
}, xc = function xc(b, c, d) {
  if (b ? b.sc : b) {
    return b.sc(b, c, d);
  }
  var e;
  e = xc[n(null == b ? null : b)];
  if (!e && (e = xc._, !e)) {
    throw y("ITransientAssociative.-assoc!", b);
  }
  return e.call(null, b, c, d);
}, yc = function yc(b, c, d) {
  if (b ? b.sd : b) {
    return b.sd(0, c, d);
  }
  var e;
  e = yc[n(null == b ? null : b)];
  if (!e && (e = yc._, !e)) {
    throw y("ITransientVector.-assoc-n!", b);
  }
  return e.call(null, b, c, d);
}, zc = function zc(b) {
  if (b ? b.qd : b) {
    return b.qd();
  }
  var c;
  c = zc[n(null == b ? null : b)];
  if (!c && (c = zc._, !c)) {
    throw y("IChunk.-drop-first", b);
  }
  return c.call(null, b);
}, Ac = function Ac(b) {
  if (b ? b.Vc : b) {
    return b.Vc(b);
  }
  var c;
  c = Ac[n(null == b ? null : b)];
  if (!c && (c = Ac._, !c)) {
    throw y("IChunkedSeq.-chunked-first", b);
  }
  return c.call(null, b);
}, Bc = function Bc(b) {
  if (b ? b.Wc : b) {
    return b.Wc(b);
  }
  var c;
  c = Bc[n(null == b ? null : b)];
  if (!c && (c = Bc._, !c)) {
    throw y("IChunkedSeq.-chunked-rest", b);
  }
  return c.call(null, b);
}, Cc = function Cc(b) {
  if (b ? b.Uc : b) {
    return b.Uc(b);
  }
  var c;
  c = Cc[n(null == b ? null : b)];
  if (!c && (c = Cc._, !c)) {
    throw y("IChunkedNext.-chunked-next", b);
  }
  return c.call(null, b);
}, Dc = function Dc(b) {
  if (b ? b.pc : b) {
    return b.pc(b);
  }
  var c;
  c = Dc[n(null == b ? null : b)];
  if (!c && (c = Dc._, !c)) {
    throw y("INamed.-name", b);
  }
  return c.call(null, b);
}, Ec = function Ec(b) {
  if (b ? b.qc : b) {
    return b.qc(b);
  }
  var c;
  c = Ec[n(null == b ? null : b)];
  if (!c && (c = Ec._, !c)) {
    throw y("INamed.-namespace", b);
  }
  return c.call(null, b);
}, Fc = function Fc(b, c) {
  if (b ? b.he : b) {
    return b.he(b, c);
  }
  var d;
  d = Fc[n(null == b ? null : b)];
  if (!d && (d = Fc._, !d)) {
    throw y("IReset.-reset!", b);
  }
  return d.call(null, b, c);
}, Gc = function Gc() {
  switch(arguments.length) {
    case 2:
      return Gc.a(arguments[0], arguments[1]);
    case 3:
      return Gc.d(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Gc.s(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Gc.J(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
Gc.a = function(a, b) {
  if (a ? a.je : a) {
    return a.je(a, b);
  }
  var c;
  c = Gc[n(null == a ? null : a)];
  if (!c && (c = Gc._, !c)) {
    throw y("ISwap.-swap!", a);
  }
  return c.call(null, a, b);
};
Gc.d = function(a, b, c) {
  if (a ? a.ke : a) {
    return a.ke(a, b, c);
  }
  var d;
  d = Gc[n(null == a ? null : a)];
  if (!d && (d = Gc._, !d)) {
    throw y("ISwap.-swap!", a);
  }
  return d.call(null, a, b, c);
};
Gc.s = function(a, b, c, d) {
  if (a ? a.le : a) {
    return a.le(a, b, c, d);
  }
  var e;
  e = Gc[n(null == a ? null : a)];
  if (!e && (e = Gc._, !e)) {
    throw y("ISwap.-swap!", a);
  }
  return e.call(null, a, b, c, d);
};
Gc.J = function(a, b, c, d, e) {
  if (a ? a.me : a) {
    return a.me(a, b, c, d, e);
  }
  var f;
  f = Gc[n(null == a ? null : a)];
  if (!f && (f = Gc._, !f)) {
    throw y("ISwap.-swap!", a);
  }
  return f.call(null, a, b, c, d, e);
};
Gc.v = 5;
var Hc = function Hc(b, c) {
  if (b ? b.td : b) {
    return b.td(0, c);
  }
  var d;
  d = Hc[n(null == b ? null : b)];
  if (!d && (d = Hc._, !d)) {
    throw y("IVolatile.-vreset!", b);
  }
  return d.call(null, b, c);
}, Ic = {}, Jc = function Jc(b) {
  if (b ? b.mc : b) {
    return b.mc(b);
  }
  var c;
  c = Jc[n(null == b ? null : b)];
  if (!c && (c = Jc._, !c)) {
    throw y("IIterable.-iterator", b);
  }
  return c.call(null, b);
};
function Kc(a) {
  this.Ee = a;
  this.g = 1073741824;
  this.r = 0;
}
Kc.prototype.vd = function(a, b) {
  return this.Ee.append(b);
};
function Lc(a) {
  var b = new Ra;
  a.A(null, new Kc(b), hb());
  return "" + B(b);
}
var Mc = "undefined" !== typeof Math.imul && 0 !== (Math.imul.a ? Math.imul.a(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.a ? Math.imul.a(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Nc(a) {
  a = Mc(a | 0, -862048943);
  return Mc(a << 15 | a >>> -15, 461845907);
}
function Oc(a, b) {
  var c = (a | 0) ^ (b | 0);
  return Mc(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function Pc(a, b) {
  var c = (a | 0) ^ b, c = Mc(c ^ c >>> 16, -2048144789), c = Mc(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function Qc(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Oc(c, Nc(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ Nc(a.charCodeAt(a.length - 1)) : b;
  return Pc(b, Mc(2, a.length));
}
var Rc = {}, Sc = 0;
function Tc(a) {
  255 < Sc && (Rc = {}, Sc = 0);
  var b = Rc[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Mc(31, d) + a.charCodeAt(c), c = e
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
    Rc[a] = b;
    Sc += 1;
  }
  return a = b;
}
function Uc(a) {
  a && (a.g & 4194304 || a.Le) ? a = a.B(null) : "number" === typeof a ? a = (Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Tc(a), 0 !== a && (a = Nc(a), a = Oc(0, a), a = Pc(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : jc(a);
  return a;
}
function Vc(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Wc(a, b) {
  if (a.pb === b.pb) {
    return 0;
  }
  var c = rb(a.qa);
  if (v(c ? b.qa : c)) {
    return-1;
  }
  if (v(a.qa)) {
    if (rb(b.qa)) {
      return 1;
    }
    c = ab(a.qa, b.qa);
    return 0 === c ? ab(a.name, b.name) : c;
  }
  return ab(a.name, b.name);
}
function Xc(a, b, c, d, e) {
  this.qa = a;
  this.name = b;
  this.pb = c;
  this.Ub = d;
  this.ta = e;
  this.g = 2154168321;
  this.r = 4096;
}
g = Xc.prototype;
g.toString = function() {
  return this.pb;
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.q = function(a, b) {
  return b instanceof Xc ? this.pb === b.pb : !1;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ob.d(c, this, null);
      case 3:
        return Ob.d(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return Ob.d(c, this, null);
  };
  a.d = function(a, c, d) {
    return Ob.d(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(vb(b)));
};
g.b = function(a) {
  return Ob.d(a, this, null);
};
g.a = function(a, b) {
  return Ob.d(a, this, b);
};
g.C = function() {
  return this.ta;
};
g.D = function(a, b) {
  return new Xc(this.qa, this.name, this.pb, this.Ub, b);
};
g.B = function() {
  var a = this.Ub;
  return null != a ? a : this.Ub = a = Vc(Qc(this.name), Tc(this.qa));
};
g.pc = function() {
  return this.name;
};
g.qc = function() {
  return this.qa;
};
g.A = function(a, b) {
  return pc(b, this.pb);
};
function ad(a, b) {
  var c = null != a ? [B(a), B("/"), B(b)].join("") : b;
  return new Xc(a, b, c, null, null);
}
function D(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 8388608 || a.ie)) {
    return a.H(null);
  }
  if (qb(a) || "string" === typeof a) {
    return 0 === a.length ? null : new E(a, 0);
  }
  if (x(kc, a)) {
    return lc(a);
  }
  throw Error([B(a), B(" is not ISeqable")].join(""));
}
function F(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 64 || a.rc)) {
    return a.S(null);
  }
  a = D(a);
  return null == a ? null : Kb(a);
}
function bd(a) {
  return null != a ? a && (a.g & 64 || a.rc) ? a.X(null) : (a = D(a)) ? Lb(a) : cd : cd;
}
function G(a) {
  return null == a ? null : a && (a.g & 128 || a.Jc) ? a.la(null) : D(bd(a));
}
var dd = function dd() {
  switch(arguments.length) {
    case 1:
      return dd.b(arguments[0]);
    case 2:
      return dd.a(arguments[0], arguments[1]);
    default:
      return dd.l(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
dd.b = function() {
  return!0;
};
dd.a = function(a, b) {
  return null == a ? null == b : a === b || ic(a, b);
};
dd.l = function(a, b, c) {
  for (;;) {
    if (dd.a(a, b)) {
      if (G(c)) {
        a = b, b = F(c), c = G(c);
      } else {
        return dd.a(b, F(c));
      }
    } else {
      return!1;
    }
  }
};
dd.t = function(a) {
  var b = F(a), c = G(a);
  a = F(c);
  c = G(c);
  return dd.l(b, a, c);
};
dd.v = 2;
function ed(a) {
  this.F = a;
}
ed.prototype.next = function() {
  if (null != this.F) {
    var a = F(this.F);
    this.F = G(this.F);
    return{value:a, done:!1};
  }
  return{value:null, done:!0};
};
function fd(a) {
  return new ed(D(a));
}
function hd(a, b) {
  var c = Nc(a), c = Oc(0, c);
  return Pc(c, b);
}
function id(a) {
  var b = 0, c = 1;
  for (a = D(a);;) {
    if (null != a) {
      b += 1, c = Mc(31, c) + Uc(F(a)) | 0, a = G(a);
    } else {
      return hd(c, b);
    }
  }
}
var jd = hd(1, 0);
function kd(a) {
  var b = 0, c = 0;
  for (a = D(a);;) {
    if (null != a) {
      b += 1, c = c + Uc(F(a)) | 0, a = G(a);
    } else {
      return hd(c, b);
    }
  }
}
var ld = hd(0, 0);
Db["null"] = !0;
Eb["null"] = function() {
  return 0;
};
Date.prototype.q = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
Date.prototype.kc = !0;
Date.prototype.Vb = function(a, b) {
  return ab(this.valueOf(), b.valueOf());
};
ic.number = function(a, b) {
  return a === b;
};
Bb["function"] = !0;
cc["function"] = !0;
dc["function"] = function() {
  return null;
};
jc._ = function(a) {
  return a[ka] || (a[ka] = ++la);
};
function md(a) {
  return a + 1;
}
function nd(a) {
  this.n = a;
  this.g = 32768;
  this.r = 0;
}
nd.prototype.Wb = function() {
  return this.n;
};
function od(a) {
  return a instanceof nd;
}
function I(a) {
  return bc(a);
}
function pd(a, b) {
  var c = Eb(a);
  if (0 === c) {
    return b.m ? b.m() : b.call(null);
  }
  for (var d = C.a(a, 0), e = 1;;) {
    if (e < c) {
      var f = C.a(a, e), d = b.a ? b.a(d, f) : b.call(null, d, f);
      if (od(d)) {
        return bc(d);
      }
      e += 1;
    } else {
      return d;
    }
  }
}
function qd(a, b, c) {
  var d = Eb(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = C.a(a, c), e = b.a ? b.a(e, f) : b.call(null, e, f);
      if (od(e)) {
        return bc(e);
      }
      c += 1;
    } else {
      return e;
    }
  }
}
function rd(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.m ? b.m() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var f = a[e], d = b.a ? b.a(d, f) : b.call(null, d, f);
      if (od(d)) {
        return bc(d);
      }
      e += 1;
    } else {
      return d;
    }
  }
}
function sd(a, b, c) {
  var d = a.length, e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = a[c], e = b.a ? b.a(e, f) : b.call(null, e, f);
      if (od(e)) {
        return bc(e);
      }
      c += 1;
    } else {
      return e;
    }
  }
}
function td(a, b, c, d) {
  for (var e = a.length;;) {
    if (d < e) {
      var f = a[d];
      c = b.a ? b.a(c, f) : b.call(null, c, f);
      if (od(c)) {
        return bc(c);
      }
      d += 1;
    } else {
      return c;
    }
  }
}
function ud(a) {
  return a ? a.g & 2 || a.Yd ? !0 : a.g ? !1 : x(Db, a) : x(Db, a);
}
function vd(a) {
  return a ? a.g & 16 || a.rd ? !0 : a.g ? !1 : x(Ib, a) : x(Ib, a);
}
function wd(a, b) {
  this.c = a;
  this.o = b;
}
wd.prototype.eb = function() {
  return this.o < this.c.length;
};
wd.prototype.next = function() {
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
  return Lc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.N = function(a, b) {
  var c = b + this.o;
  return c < this.c.length ? this.c[c] : null;
};
g.ua = function(a, b, c) {
  a = b + this.o;
  return a < this.c.length ? this.c[a] : c;
};
g.Ic = !0;
g.mc = function() {
  return new wd(this.c, this.o);
};
g.la = function() {
  return this.o + 1 < this.c.length ? new E(this.c, this.o + 1) : null;
};
g.I = function() {
  return this.c.length - this.o;
};
g.Yb = function() {
  var a = Eb(this);
  return 0 < a ? new xd(this, a - 1, null) : null;
};
g.B = function() {
  return id(this);
};
g.q = function(a, b) {
  return yd.a ? yd.a(this, b) : yd.call(null, this, b);
};
g.P = function() {
  return cd;
};
g.T = function(a, b) {
  return td(this.c, b, this.c[this.o], this.o + 1);
};
g.U = function(a, b, c) {
  return td(this.c, b, c, this.o);
};
g.S = function() {
  return this.c[this.o];
};
g.X = function() {
  return this.o + 1 < this.c.length ? new E(this.c, this.o + 1) : cd;
};
g.H = function() {
  return this;
};
g.G = function(a, b) {
  return J.a ? J.a(b, this) : J.call(null, b, this);
};
E.prototype[ub] = function() {
  return fd(this);
};
function zd(a, b) {
  return b < a.length ? new E(a, b) : null;
}
function L() {
  switch(arguments.length) {
    case 1:
      return zd(arguments[0], 0);
    case 2:
      return zd(arguments[0], arguments[1]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function xd(a, b, c) {
  this.Gc = a;
  this.o = b;
  this.k = c;
  this.g = 32374990;
  this.r = 8192;
}
g = xd.prototype;
g.toString = function() {
  return Lc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.k;
};
g.la = function() {
  return 0 < this.o ? new xd(this.Gc, this.o - 1, null) : null;
};
g.I = function() {
  return this.o + 1;
};
g.B = function() {
  return id(this);
};
g.q = function(a, b) {
  return yd.a ? yd.a(this, b) : yd.call(null, this, b);
};
g.P = function() {
  var a = this.k;
  return Ad.a ? Ad.a(cd, a) : Ad.call(null, cd, a);
};
g.T = function(a, b) {
  return Bd ? Bd(b, this) : Cd.call(null, b, this);
};
g.U = function(a, b, c) {
  return Dd ? Dd(b, c, this) : Cd.call(null, b, c, this);
};
g.S = function() {
  return C.a(this.Gc, this.o);
};
g.X = function() {
  return 0 < this.o ? new xd(this.Gc, this.o - 1, null) : cd;
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new xd(this.Gc, this.o, b);
};
g.G = function(a, b) {
  return J.a ? J.a(b, this) : J.call(null, b, this);
};
xd.prototype[ub] = function() {
  return fd(this);
};
function Ed(a) {
  for (;;) {
    var b = G(a);
    if (null != b) {
      a = b;
    } else {
      return F(a);
    }
  }
}
ic._ = function(a, b) {
  return a === b;
};
var Fd = function Fd() {
  switch(arguments.length) {
    case 0:
      return Fd.m();
    case 1:
      return Fd.b(arguments[0]);
    case 2:
      return Fd.a(arguments[0], arguments[1]);
    default:
      return Fd.l(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Fd.m = function() {
  return Gd;
};
Fd.b = function(a) {
  return a;
};
Fd.a = function(a, b) {
  return null != a ? Hb(a, b) : Hb(cd, b);
};
Fd.l = function(a, b, c) {
  for (;;) {
    if (v(c)) {
      a = Fd.a(a, b), b = F(c), c = G(c);
    } else {
      return Fd.a(a, b);
    }
  }
};
Fd.t = function(a) {
  var b = F(a), c = G(a);
  a = F(c);
  c = G(c);
  return Fd.l(b, a, c);
};
Fd.v = 2;
function M(a) {
  if (null != a) {
    if (a && (a.g & 2 || a.Yd)) {
      a = a.I(null);
    } else {
      if (qb(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (x(Db, a)) {
            a = Eb(a);
          } else {
            a: {
              a = D(a);
              for (var b = 0;;) {
                if (ud(a)) {
                  a = b + Eb(a);
                  break a;
                }
                a = G(a);
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
function Hd(a, b) {
  for (var c = null;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return D(a) ? F(a) : c;
    }
    if (vd(a)) {
      return C.d(a, b, c);
    }
    if (D(a)) {
      var d = G(a), e = b - 1;
      a = d;
      b = e;
    } else {
      return c;
    }
  }
}
function Id(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number");
  }
  if (null == a) {
    return a;
  }
  if (a && (a.g & 16 || a.rd)) {
    return a.N(null, b);
  }
  if (qb(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (x(Ib, a)) {
    return C.a(a, b);
  }
  if (a ? a.g & 64 || a.rc || (a.g ? 0 : x(Jb, a)) : x(Jb, a)) {
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
        if (vd(c)) {
          c = C.a(c, d);
          break a;
        }
        if (D(c)) {
          c = G(c), --d;
        } else {
          throw Error("Index out of bounds");
        }
      }
    }
    return c;
  }
  throw Error([B("nth not supported on this type "), B(tb(sb(a)))].join(""));
}
function N(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number.");
  }
  if (null == a) {
    return null;
  }
  if (a && (a.g & 16 || a.rd)) {
    return a.ua(null, b, null);
  }
  if (qb(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (x(Ib, a)) {
    return C.a(a, b);
  }
  if (a ? a.g & 64 || a.rc || (a.g ? 0 : x(Jb, a)) : x(Jb, a)) {
    return Hd(a, b);
  }
  throw Error([B("nth not supported on this type "), B(tb(sb(a)))].join(""));
}
function Jd(a, b) {
  return null == a ? null : a && (a.g & 256 || a.be) ? a.w(null, b) : qb(a) ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : x(Nb, a) ? Ob.a(a, b) : null;
}
function Kd(a, b, c) {
  return null != a ? a && (a.g & 256 || a.be) ? a.u(null, b, c) : qb(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : x(Nb, a) ? Ob.d(a, b, c) : c : c;
}
var O = function O() {
  switch(arguments.length) {
    case 3:
      return O.d(arguments[0], arguments[1], arguments[2]);
    default:
      return O.l(arguments[0], arguments[1], arguments[2], new E(Array.prototype.slice.call(arguments, 3), 0));
  }
};
O.d = function(a, b, c) {
  return null != a ? Qb(a, b, c) : Ld([b], [c]);
};
O.l = function(a, b, c, d) {
  for (;;) {
    if (a = O.d(a, b, c), v(d)) {
      b = F(d), c = F(G(d)), d = G(G(d));
    } else {
      return a;
    }
  }
};
O.t = function(a) {
  var b = F(a), c = G(a);
  a = F(c);
  var d = G(c), c = F(d), d = G(d);
  return O.l(b, a, c, d);
};
O.v = 3;
var Md = function Md() {
  switch(arguments.length) {
    case 1:
      return Md.b(arguments[0]);
    case 2:
      return Md.a(arguments[0], arguments[1]);
    default:
      return Md.l(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Md.b = function(a) {
  return a;
};
Md.a = function(a, b) {
  return null == a ? null : Sb(a, b);
};
Md.l = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = Md.a(a, b);
    if (v(c)) {
      b = F(c), c = G(c);
    } else {
      return a;
    }
  }
};
Md.t = function(a) {
  var b = F(a), c = G(a);
  a = F(c);
  c = G(c);
  return Md.l(b, a, c);
};
Md.v = 2;
function Nd(a) {
  var b = ha(a);
  return v(b) ? b : a ? v(v(null) ? null : a.Xd) ? !0 : a.bc ? !1 : x(Bb, a) : x(Bb, a);
}
function Od(a, b) {
  this.e = a;
  this.k = b;
  this.g = 393217;
  this.r = 0;
}
g = Od.prototype;
g.C = function() {
  return this.k;
};
g.D = function(a, b) {
  return new Od(this.e, b);
};
g.Xd = !0;
g.call = function() {
  function a(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, A, w, z, H, K, Q, ba) {
    a = this.e;
    return Pd.lc ? Pd.lc(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, A, w, z, H, K, Q, ba) : Pd.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, A, w, z, H, K, Q, ba);
  }
  function b(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, A, w, z, H, K, Q) {
    a = this;
    return a.e.ha ? a.e.ha(b, c, d, e, f, h, k, l, m, p, q, r, u, t, A, w, z, H, K, Q) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, A, w, z, H, K, Q);
  }
  function c(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, A, w, z, H, K) {
    a = this;
    return a.e.ga ? a.e.ga(b, c, d, e, f, h, k, l, m, p, q, r, u, t, A, w, z, H, K) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, A, w, z, H, K);
  }
  function d(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, A, w, z, H) {
    a = this;
    return a.e.fa ? a.e.fa(b, c, d, e, f, h, k, l, m, p, q, r, u, t, A, w, z, H) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, A, w, z, H);
  }
  function e(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, A, w, z) {
    a = this;
    return a.e.ea ? a.e.ea(b, c, d, e, f, h, k, l, m, p, q, r, u, t, A, w, z) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, A, w, z);
  }
  function f(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, A, w) {
    a = this;
    return a.e.da ? a.e.da(b, c, d, e, f, h, k, l, m, p, q, r, u, t, A, w) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, A, w);
  }
  function h(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, A) {
    a = this;
    return a.e.ca ? a.e.ca(b, c, d, e, f, h, k, l, m, p, q, r, u, t, A) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, A);
  }
  function k(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t) {
    a = this;
    return a.e.ba ? a.e.ba(b, c, d, e, f, h, k, l, m, p, q, r, u, t) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t);
  }
  function l(a, b, c, d, e, f, h, k, l, m, p, q, r, u) {
    a = this;
    return a.e.aa ? a.e.aa(b, c, d, e, f, h, k, l, m, p, q, r, u) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u);
  }
  function m(a, b, c, d, e, f, h, k, l, m, p, q, r) {
    a = this;
    return a.e.$ ? a.e.$(b, c, d, e, f, h, k, l, m, p, q, r) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r);
  }
  function p(a, b, c, d, e, f, h, k, l, m, p, q) {
    a = this;
    return a.e.Z ? a.e.Z(b, c, d, e, f, h, k, l, m, p, q) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q);
  }
  function q(a, b, c, d, e, f, h, k, l, m, p) {
    a = this;
    return a.e.Y ? a.e.Y(b, c, d, e, f, h, k, l, m, p) : a.e.call(null, b, c, d, e, f, h, k, l, m, p);
  }
  function r(a, b, c, d, e, f, h, k, l, m) {
    a = this;
    return a.e.ka ? a.e.ka(b, c, d, e, f, h, k, l, m) : a.e.call(null, b, c, d, e, f, h, k, l, m);
  }
  function t(a, b, c, d, e, f, h, k, l) {
    a = this;
    return a.e.ja ? a.e.ja(b, c, d, e, f, h, k, l) : a.e.call(null, b, c, d, e, f, h, k, l);
  }
  function w(a, b, c, d, e, f, h, k) {
    a = this;
    return a.e.ia ? a.e.ia(b, c, d, e, f, h, k) : a.e.call(null, b, c, d, e, f, h, k);
  }
  function z(a, b, c, d, e, f, h) {
    a = this;
    return a.e.R ? a.e.R(b, c, d, e, f, h) : a.e.call(null, b, c, d, e, f, h);
  }
  function A(a, b, c, d, e, f) {
    a = this;
    return a.e.J ? a.e.J(b, c, d, e, f) : a.e.call(null, b, c, d, e, f);
  }
  function H(a, b, c, d, e) {
    a = this;
    return a.e.s ? a.e.s(b, c, d, e) : a.e.call(null, b, c, d, e);
  }
  function K(a, b, c, d) {
    a = this;
    return a.e.d ? a.e.d(b, c, d) : a.e.call(null, b, c, d);
  }
  function Q(a, b, c) {
    a = this;
    return a.e.a ? a.e.a(b, c) : a.e.call(null, b, c);
  }
  function ba(a, b) {
    a = this;
    return a.e.b ? a.e.b(b) : a.e.call(null, b);
  }
  function Da(a) {
    a = this;
    return a.e.m ? a.e.m() : a.e.call(null);
  }
  var u = null, u = function(u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua, Ha, Va, $a, kb, Ma, Wa, bb, cb, uc, gd, te) {
    switch(arguments.length) {
      case 1:
        return Da.call(this, u);
      case 2:
        return ba.call(this, u, aa);
      case 3:
        return Q.call(this, u, aa, ga);
      case 4:
        return K.call(this, u, aa, ga, ja);
      case 5:
        return H.call(this, u, aa, ga, ja, pa);
      case 6:
        return A.call(this, u, aa, ga, ja, pa, ta);
      case 7:
        return z.call(this, u, aa, ga, ja, pa, ta, wa);
      case 8:
        return w.call(this, u, aa, ga, ja, pa, ta, wa, Ba);
      case 9:
        return t.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea);
      case 10:
        return r.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za);
      case 11:
        return q.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua);
      case 12:
        return p.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua, Ha);
      case 13:
        return m.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua, Ha, Va);
      case 14:
        return l.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua, Ha, Va, $a);
      case 15:
        return k.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua, Ha, Va, $a, kb);
      case 16:
        return h.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua, Ha, Va, $a, kb, Ma);
      case 17:
        return f.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua, Ha, Va, $a, kb, Ma, Wa);
      case 18:
        return e.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua, Ha, Va, $a, kb, Ma, Wa, bb);
      case 19:
        return d.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua, Ha, Va, $a, kb, Ma, Wa, bb, cb);
      case 20:
        return c.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua, Ha, Va, $a, kb, Ma, Wa, bb, cb, uc);
      case 21:
        return b.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua, Ha, Va, $a, kb, Ma, Wa, bb, cb, uc, gd);
      case 22:
        return a.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua, Ha, Va, $a, kb, Ma, Wa, bb, cb, uc, gd, te);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  u.b = Da;
  u.a = ba;
  u.d = Q;
  u.s = K;
  u.J = H;
  u.R = A;
  u.ia = z;
  u.ja = w;
  u.ka = t;
  u.Y = r;
  u.Z = q;
  u.$ = p;
  u.aa = m;
  u.ba = l;
  u.ca = k;
  u.da = h;
  u.ea = f;
  u.fa = e;
  u.ga = d;
  u.ha = c;
  u.Xc = b;
  u.lc = a;
  return u;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(vb(b)));
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
g.ia = function(a, b, c, d, e, f, h) {
  return this.e.ia ? this.e.ia(a, b, c, d, e, f, h) : this.e.call(null, a, b, c, d, e, f, h);
};
g.ja = function(a, b, c, d, e, f, h, k) {
  return this.e.ja ? this.e.ja(a, b, c, d, e, f, h, k) : this.e.call(null, a, b, c, d, e, f, h, k);
};
g.ka = function(a, b, c, d, e, f, h, k, l) {
  return this.e.ka ? this.e.ka(a, b, c, d, e, f, h, k, l) : this.e.call(null, a, b, c, d, e, f, h, k, l);
};
g.Y = function(a, b, c, d, e, f, h, k, l, m) {
  return this.e.Y ? this.e.Y(a, b, c, d, e, f, h, k, l, m) : this.e.call(null, a, b, c, d, e, f, h, k, l, m);
};
g.Z = function(a, b, c, d, e, f, h, k, l, m, p) {
  return this.e.Z ? this.e.Z(a, b, c, d, e, f, h, k, l, m, p) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p);
};
g.$ = function(a, b, c, d, e, f, h, k, l, m, p, q) {
  return this.e.$ ? this.e.$(a, b, c, d, e, f, h, k, l, m, p, q) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q);
};
g.aa = function(a, b, c, d, e, f, h, k, l, m, p, q, r) {
  return this.e.aa ? this.e.aa(a, b, c, d, e, f, h, k, l, m, p, q, r) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r);
};
g.ba = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t) {
  return this.e.ba ? this.e.ba(a, b, c, d, e, f, h, k, l, m, p, q, r, t) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t);
};
g.ca = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w) {
  return this.e.ca ? this.e.ca(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w);
};
g.da = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z) {
  return this.e.da ? this.e.da(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z);
};
g.ea = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A) {
  return this.e.ea ? this.e.ea(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A);
};
g.fa = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H) {
  return this.e.fa ? this.e.fa(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H);
};
g.ga = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K) {
  return this.e.ga ? this.e.ga(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K);
};
g.ha = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K, Q) {
  return this.e.ha ? this.e.ha(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K, Q) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K, Q);
};
g.Xc = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K, Q, ba) {
  var Da = this.e;
  return Pd.lc ? Pd.lc(Da, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K, Q, ba) : Pd.call(null, Da, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K, Q, ba);
};
function Ad(a, b) {
  return Nd(a) && !(a ? a.g & 262144 || a.Qe || (a.g ? 0 : x(ec, a)) : x(ec, a)) ? new Od(a, b) : null == a ? null : fc(a, b);
}
function Qd(a) {
  var b = null != a;
  return(b ? a ? a.g & 131072 || a.ee || (a.g ? 0 : x(cc, a)) : x(cc, a) : b) ? dc(a) : null;
}
function Rd(a) {
  return null == a ? null : Yb(a);
}
var Sd = function Sd() {
  switch(arguments.length) {
    case 1:
      return Sd.b(arguments[0]);
    case 2:
      return Sd.a(arguments[0], arguments[1]);
    default:
      return Sd.l(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Sd.b = function(a) {
  return a;
};
Sd.a = function(a, b) {
  return null == a ? null : Xb(a, b);
};
Sd.l = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = Sd.a(a, b);
    if (v(c)) {
      b = F(c), c = G(c);
    } else {
      return a;
    }
  }
};
Sd.t = function(a) {
  var b = F(a), c = G(a);
  a = F(c);
  c = G(c);
  return Sd.l(b, a, c);
};
Sd.v = 2;
function Td(a) {
  return null == a || rb(D(a));
}
function Ud(a) {
  return null == a ? !1 : a ? a.g & 4096 || a.Oe ? !0 : a.g ? !1 : x(Wb, a) : x(Wb, a);
}
function Vd(a) {
  return a ? a.g & 16777216 || a.Ne ? !0 : a.g ? !1 : x(mc, a) : x(mc, a);
}
function Wd(a) {
  return null == a ? !1 : a ? a.g & 1024 || a.ce ? !0 : a.g ? !1 : x(Rb, a) : x(Rb, a);
}
function Xd(a) {
  return a ? a.g & 16384 || a.Pe ? !0 : a.g ? !1 : x($b, a) : x($b, a);
}
function Yd(a) {
  return a ? a.r & 512 || a.Ie ? !0 : !1 : !1;
}
function Zd(a) {
  var b = [];
  La(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function $d(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, --e, b += 1;
  }
}
var ae = {};
function be(a) {
  return null == a ? !1 : a ? a.g & 64 || a.rc ? !0 : a.g ? !1 : x(Jb, a) : x(Jb, a);
}
function ce(a) {
  return v(a) ? !0 : !1;
}
function de(a, b) {
  return Kd(a, b, ae) === ae ? !1 : !0;
}
function ee(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (sb(a) === sb(b)) {
    return a && (a.r & 2048 || a.kc) ? a.Vb(null, b) : ab(a, b);
  }
  throw Error("compare on non-nil objects of different types");
}
function fe(a, b) {
  var c = M(a), d = M(b);
  if (c < d) {
    c = -1;
  } else {
    if (c > d) {
      c = 1;
    } else {
      a: {
        for (d = 0;;) {
          var e = ee(Id(a, d), Id(b, d));
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
function Cd() {
  switch(arguments.length) {
    case 2:
      return Bd(arguments[0], arguments[1]);
    case 3:
      return Dd(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function Bd(a, b) {
  var c = D(b);
  if (c) {
    var d = F(c), c = G(c);
    return zb ? zb(a, d, c) : Ab.call(null, a, d, c);
  }
  return a.m ? a.m() : a.call(null);
}
function Dd(a, b, c) {
  for (c = D(c);;) {
    if (c) {
      var d = F(c);
      b = a.a ? a.a(b, d) : a.call(null, b, d);
      if (od(b)) {
        return bc(b);
      }
      c = G(c);
    } else {
      return b;
    }
  }
}
function Ab() {
  switch(arguments.length) {
    case 2:
      return ge(arguments[0], arguments[1]);
    case 3:
      return zb(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function ge(a, b) {
  return b && (b.g & 524288 || b.ge) ? b.T(null, a) : qb(b) ? rd(b, a) : "string" === typeof b ? rd(b, a) : x(gc, b) ? hc.a(b, a) : Bd(a, b);
}
function zb(a, b, c) {
  return c && (c.g & 524288 || c.ge) ? c.U(null, a, b) : qb(c) ? sd(c, a, b) : "string" === typeof c ? sd(c, a, b) : x(gc, c) ? hc.d(c, a, b) : Dd(a, b, c);
}
function he(a) {
  return a;
}
function ie(a, b, c, d) {
  a = a.b ? a.b(b) : a.call(null, b);
  c = zb(a, c, d);
  return a.b ? a.b(c) : a.call(null, c);
}
var je = function je() {
  switch(arguments.length) {
    case 0:
      return je.m();
    case 1:
      return je.b(arguments[0]);
    case 2:
      return je.a(arguments[0], arguments[1]);
    default:
      return je.l(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
je.m = function() {
  return 0;
};
je.b = function(a) {
  return a;
};
je.a = function(a, b) {
  return a + b;
};
je.l = function(a, b, c) {
  return zb(je, a + b, c);
};
je.t = function(a) {
  var b = F(a), c = G(a);
  a = F(c);
  c = G(c);
  return je.l(b, a, c);
};
je.v = 2;
function ke(a) {
  return a - 1;
}
var le = function le() {
  switch(arguments.length) {
    case 1:
      return le.b(arguments[0]);
    case 2:
      return le.a(arguments[0], arguments[1]);
    default:
      return le.l(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
le.b = function(a) {
  return a;
};
le.a = function(a, b) {
  return a > b ? a : b;
};
le.l = function(a, b, c) {
  return zb(le, a > b ? a : b, c);
};
le.t = function(a) {
  var b = F(a), c = G(a);
  a = F(c);
  c = G(c);
  return le.l(b, a, c);
};
le.v = 2;
function me(a) {
  a = (a - a % 2) / 2;
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
}
function ne(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function oe(a) {
  var b = 1;
  for (a = D(a);;) {
    if (a && 0 < b) {
      --b, a = G(a);
    } else {
      return a;
    }
  }
}
var B = function B() {
  switch(arguments.length) {
    case 0:
      return B.m();
    case 1:
      return B.b(arguments[0]);
    default:
      return B.l(arguments[0], new E(Array.prototype.slice.call(arguments, 1), 0));
  }
};
B.m = function() {
  return "";
};
B.b = function(a) {
  return null == a ? "" : Ja(a);
};
B.l = function(a, b) {
  for (var c = new Ra("" + B(a)), d = b;;) {
    if (v(d)) {
      c = c.append("" + B(F(d))), d = G(d);
    } else {
      return c.toString();
    }
  }
};
B.t = function(a) {
  var b = F(a);
  a = G(a);
  return B.l(b, a);
};
B.v = 1;
function yd(a, b) {
  var c;
  if (Vd(b)) {
    if (ud(a) && ud(b) && M(a) !== M(b)) {
      c = !1;
    } else {
      a: {
        c = D(a);
        for (var d = D(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && dd.a(F(c), F(d))) {
            c = G(c), d = G(d);
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
  return ce(c);
}
function pe(a) {
  var b = 0;
  for (a = D(a);;) {
    if (a) {
      var c = F(a), b = (b + (Uc(function() {
        var a = c;
        return qe.b ? qe.b(a) : qe.call(null, a);
      }()) ^ Uc(function() {
        var a = c;
        return re.b ? re.b(a) : re.call(null, a);
      }()))) % 4503599627370496;
      a = G(a);
    } else {
      return b;
    }
  }
}
function se(a, b, c, d, e) {
  this.k = a;
  this.first = b;
  this.W = c;
  this.count = d;
  this.i = e;
  this.g = 65937646;
  this.r = 8192;
}
g = se.prototype;
g.toString = function() {
  return Lc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.k;
};
g.la = function() {
  return 1 === this.count ? null : this.W;
};
g.I = function() {
  return this.count;
};
g.Bb = function() {
  return this.first;
};
g.Cb = function() {
  return Lb(this);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = id(this);
};
g.q = function(a, b) {
  return yd(this, b);
};
g.P = function() {
  return fc(cd, this.k);
};
g.T = function(a, b) {
  return Bd(b, this);
};
g.U = function(a, b, c) {
  return Dd(b, c, this);
};
g.S = function() {
  return this.first;
};
g.X = function() {
  return 1 === this.count ? cd : this.W;
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new se(b, this.first, this.W, this.count, this.i);
};
g.G = function(a, b) {
  return new se(this.k, b, this, this.count + 1, null);
};
se.prototype[ub] = function() {
  return fd(this);
};
function ue(a) {
  this.k = a;
  this.g = 65937614;
  this.r = 8192;
}
g = ue.prototype;
g.toString = function() {
  return Lc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.k;
};
g.la = function() {
  return null;
};
g.I = function() {
  return 0;
};
g.Bb = function() {
  return null;
};
g.Cb = function() {
  throw Error("Can't pop empty list");
};
g.B = function() {
  return jd;
};
g.q = function(a, b) {
  return yd(this, b);
};
g.P = function() {
  return this;
};
g.T = function(a, b) {
  return Bd(b, this);
};
g.U = function(a, b, c) {
  return Dd(b, c, this);
};
g.S = function() {
  return null;
};
g.X = function() {
  return cd;
};
g.H = function() {
  return null;
};
g.D = function(a, b) {
  return new ue(b);
};
g.G = function(a, b) {
  return new se(this.k, b, null, 1, null);
};
var cd = new ue(null);
ue.prototype[ub] = function() {
  return fd(this);
};
function ve(a) {
  return(a ? a.g & 134217728 || a.Me || (a.g ? 0 : x(nc, a)) : x(nc, a)) ? oc(a) : zb(Fd, cd, a);
}
var we = function we() {
  return we.l(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
};
we.l = function(a) {
  var b;
  if (a instanceof E && 0 === a.o) {
    b = a.c;
  } else {
    a: {
      for (b = [];;) {
        if (null != a) {
          b.push(a.S(null)), a = a.la(null);
        } else {
          break a;
        }
      }
    }
  }
  a = b.length;
  for (var c = cd;;) {
    if (0 < a) {
      var d = a - 1, c = c.G(null, b[a - 1]);
      a = d;
    } else {
      return c;
    }
  }
};
we.v = 0;
we.t = function(a) {
  return we.l(D(a));
};
function xe(a, b, c, d) {
  this.k = a;
  this.first = b;
  this.W = c;
  this.i = d;
  this.g = 65929452;
  this.r = 8192;
}
g = xe.prototype;
g.toString = function() {
  return Lc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.k;
};
g.la = function() {
  return null == this.W ? null : D(this.W);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = id(this);
};
g.q = function(a, b) {
  return yd(this, b);
};
g.P = function() {
  return Ad(cd, this.k);
};
g.T = function(a, b) {
  return Bd(b, this);
};
g.U = function(a, b, c) {
  return Dd(b, c, this);
};
g.S = function() {
  return this.first;
};
g.X = function() {
  return null == this.W ? cd : this.W;
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new xe(b, this.first, this.W, this.i);
};
g.G = function(a, b) {
  return new xe(null, b, this, this.i);
};
xe.prototype[ub] = function() {
  return fd(this);
};
function J(a, b) {
  var c = null == b;
  return(c ? c : b && (b.g & 64 || b.rc)) ? new xe(null, a, b, null) : new xe(null, a, D(b), null);
}
function ye(a, b) {
  if (a.na === b.na) {
    return 0;
  }
  var c = rb(a.qa);
  if (v(c ? b.qa : c)) {
    return-1;
  }
  if (v(a.qa)) {
    if (rb(b.qa)) {
      return 1;
    }
    c = ab(a.qa, b.qa);
    return 0 === c ? ab(a.name, b.name) : c;
  }
  return ab(a.name, b.name);
}
function P(a, b, c, d) {
  this.qa = a;
  this.name = b;
  this.na = c;
  this.Ub = d;
  this.g = 2153775105;
  this.r = 4096;
}
g = P.prototype;
g.toString = function() {
  return[B(":"), B(this.na)].join("");
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.q = function(a, b) {
  return b instanceof P ? this.na === b.na : !1;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Jd(c, this);
      case 3:
        return Kd(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return Jd(c, this);
  };
  a.d = function(a, c, d) {
    return Kd(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(vb(b)));
};
g.b = function(a) {
  return Jd(a, this);
};
g.a = function(a, b) {
  return Kd(a, this, b);
};
g.B = function() {
  var a = this.Ub;
  return null != a ? a : this.Ub = a = Vc(Qc(this.name), Tc(this.qa)) + 2654435769 | 0;
};
g.pc = function() {
  return this.name;
};
g.qc = function() {
  return this.qa;
};
g.A = function(a, b) {
  return pc(b, [B(":"), B(this.na)].join(""));
};
function R(a, b) {
  return a === b ? !0 : a instanceof P && b instanceof P ? a.na === b.na : !1;
}
var ze = function ze() {
  switch(arguments.length) {
    case 1:
      return ze.b(arguments[0]);
    case 2:
      return ze.a(arguments[0], arguments[1]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
ze.b = function(a) {
  if (a instanceof P) {
    return a;
  }
  if (a instanceof Xc) {
    var b;
    if (a && (a.r & 4096 || a.fe)) {
      b = a.qc(null);
    } else {
      throw Error([B("Doesn't support namespace: "), B(a)].join(""));
    }
    return new P(b, Ae.b ? Ae.b(a) : Ae.call(null, a), a.pb, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new P(b[0], b[1], a, null) : new P(null, b[0], a, null)) : null;
};
ze.a = function(a, b) {
  return new P(a, b, [B(v(a) ? [B(a), B("/")].join("") : null), B(b)].join(""), null);
};
ze.v = 2;
function Be(a, b, c, d) {
  this.k = a;
  this.Db = b;
  this.F = c;
  this.i = d;
  this.g = 32374988;
  this.r = 0;
}
g = Be.prototype;
g.toString = function() {
  return Lc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
function Ce(a) {
  null != a.Db && (a.F = a.Db.m ? a.Db.m() : a.Db.call(null), a.Db = null);
  return a.F;
}
g.C = function() {
  return this.k;
};
g.la = function() {
  lc(this);
  return null == this.F ? null : G(this.F);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = id(this);
};
g.q = function(a, b) {
  return yd(this, b);
};
g.P = function() {
  return Ad(cd, this.k);
};
g.T = function(a, b) {
  return Bd(b, this);
};
g.U = function(a, b, c) {
  return Dd(b, c, this);
};
g.S = function() {
  lc(this);
  return null == this.F ? null : F(this.F);
};
g.X = function() {
  lc(this);
  return null != this.F ? bd(this.F) : cd;
};
g.H = function() {
  Ce(this);
  if (null == this.F) {
    return null;
  }
  for (var a = this.F;;) {
    if (a instanceof Be) {
      a = Ce(a);
    } else {
      return this.F = a, D(this.F);
    }
  }
};
g.D = function(a, b) {
  return new Be(b, this.Db, this.F, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
Be.prototype[ub] = function() {
  return fd(this);
};
function De(a, b) {
  this.K = a;
  this.end = b;
  this.g = 2;
  this.r = 0;
}
De.prototype.add = function(a) {
  this.K[this.end] = a;
  return this.end += 1;
};
De.prototype.La = function() {
  var a = new Ee(this.K, 0, this.end);
  this.K = null;
  return a;
};
De.prototype.I = function() {
  return this.end;
};
function Ee(a, b, c) {
  this.c = a;
  this.oa = b;
  this.end = c;
  this.g = 524306;
  this.r = 0;
}
g = Ee.prototype;
g.I = function() {
  return this.end - this.oa;
};
g.N = function(a, b) {
  return this.c[this.oa + b];
};
g.ua = function(a, b, c) {
  return 0 <= b && b < this.end - this.oa ? this.c[this.oa + b] : c;
};
g.qd = function() {
  if (this.oa === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Ee(this.c, this.oa + 1, this.end);
};
g.T = function(a, b) {
  return td(this.c, b, this.c[this.oa], this.oa + 1);
};
g.U = function(a, b, c) {
  return td(this.c, b, c, this.oa);
};
function Fe(a, b, c, d) {
  this.La = a;
  this.jb = b;
  this.k = c;
  this.i = d;
  this.g = 31850732;
  this.r = 1536;
}
g = Fe.prototype;
g.toString = function() {
  return Lc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.k;
};
g.la = function() {
  if (1 < Eb(this.La)) {
    return new Fe(zc(this.La), this.jb, this.k, null);
  }
  var a = lc(this.jb);
  return null == a ? null : a;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = id(this);
};
g.q = function(a, b) {
  return yd(this, b);
};
g.P = function() {
  return Ad(cd, this.k);
};
g.S = function() {
  return C.a(this.La, 0);
};
g.X = function() {
  return 1 < Eb(this.La) ? new Fe(zc(this.La), this.jb, this.k, null) : null == this.jb ? cd : this.jb;
};
g.H = function() {
  return this;
};
g.Vc = function() {
  return this.La;
};
g.Wc = function() {
  return null == this.jb ? cd : this.jb;
};
g.D = function(a, b) {
  return new Fe(this.La, this.jb, b, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
g.Uc = function() {
  return null == this.jb ? null : this.jb;
};
Fe.prototype[ub] = function() {
  return fd(this);
};
function Ge(a, b) {
  return 0 === Eb(a) ? b : new Fe(a, b, null, null);
}
function He(a, b) {
  a.add(b);
}
function Ie(a) {
  for (var b = [];;) {
    if (D(a)) {
      b.push(F(a)), a = G(a);
    } else {
      return b;
    }
  }
}
function Je(a) {
  if ("number" === typeof a) {
    a: {
      var b = Array(a);
      if (be(null)) {
        for (var c = 0, d = D(null);;) {
          if (d && c < a) {
            b[c] = F(d), c += 1, d = G(d);
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
    a = xb(a);
  }
  return a;
}
function Ke(a, b) {
  if (ud(a)) {
    return M(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && D(c)) {
      c = G(c), --d, e += 1;
    } else {
      return e;
    }
  }
}
var Le = function Le(b) {
  return null == b ? null : null == G(b) ? D(F(b)) : J(F(b), Le(G(b)));
}, Me = function Me() {
  switch(arguments.length) {
    case 0:
      return Me.m();
    case 1:
      return Me.b(arguments[0]);
    case 2:
      return Me.a(arguments[0], arguments[1]);
    default:
      return Me.l(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Me.m = function() {
  return new Be(null, function() {
    return null;
  }, null, null);
};
Me.b = function(a) {
  return new Be(null, function() {
    return a;
  }, null, null);
};
Me.a = function(a, b) {
  return new Be(null, function() {
    var c = D(a);
    return c ? Yd(c) ? Ge(Ac(c), Me.a(Bc(c), b)) : J(F(c), Me.a(bd(c), b)) : b;
  }, null, null);
};
Me.l = function(a, b, c) {
  return function e(a, b) {
    return new Be(null, function() {
      var c = D(a);
      return c ? Yd(c) ? Ge(Ac(c), e(Bc(c), b)) : J(F(c), e(bd(c), b)) : v(b) ? e(F(b), G(b)) : null;
    }, null, null);
  }(Me.a(a, b), c);
};
Me.t = function(a) {
  var b = F(a), c = G(a);
  a = F(c);
  c = G(c);
  return Me.l(b, a, c);
};
Me.v = 2;
function Ne(a) {
  return wc(a);
}
var Oe = function Oe() {
  switch(arguments.length) {
    case 0:
      return Oe.m();
    case 1:
      return Oe.b(arguments[0]);
    case 2:
      return Oe.a(arguments[0], arguments[1]);
    default:
      return Oe.l(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Oe.m = function() {
  return tc(Gd);
};
Oe.b = function(a) {
  return a;
};
Oe.a = function(a, b) {
  return vc(a, b);
};
Oe.l = function(a, b, c) {
  for (;;) {
    if (a = vc(a, b), v(c)) {
      b = F(c), c = G(c);
    } else {
      return a;
    }
  }
};
Oe.t = function(a) {
  var b = F(a), c = G(a);
  a = F(c);
  c = G(c);
  return Oe.l(b, a, c);
};
Oe.v = 2;
function Pe(a, b, c) {
  var d = D(c);
  if (0 === b) {
    return a.m ? a.m() : a.call(null);
  }
  c = Kb(d);
  var e = Lb(d);
  if (1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c);
  }
  var d = Kb(e), f = Lb(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = Kb(f), h = Lb(f);
  if (3 === b) {
    return a.d ? a.d(c, d, e) : a.d ? a.d(c, d, e) : a.call(null, c, d, e);
  }
  var f = Kb(h), k = Lb(h);
  if (4 === b) {
    return a.s ? a.s(c, d, e, f) : a.s ? a.s(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var h = Kb(k), l = Lb(k);
  if (5 === b) {
    return a.J ? a.J(c, d, e, f, h) : a.J ? a.J(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  var k = Kb(l), m = Lb(l);
  if (6 === b) {
    return a.R ? a.R(c, d, e, f, h, k) : a.R ? a.R(c, d, e, f, h, k) : a.call(null, c, d, e, f, h, k);
  }
  var l = Kb(m), p = Lb(m);
  if (7 === b) {
    return a.ia ? a.ia(c, d, e, f, h, k, l) : a.ia ? a.ia(c, d, e, f, h, k, l) : a.call(null, c, d, e, f, h, k, l);
  }
  var m = Kb(p), q = Lb(p);
  if (8 === b) {
    return a.ja ? a.ja(c, d, e, f, h, k, l, m) : a.ja ? a.ja(c, d, e, f, h, k, l, m) : a.call(null, c, d, e, f, h, k, l, m);
  }
  var p = Kb(q), r = Lb(q);
  if (9 === b) {
    return a.ka ? a.ka(c, d, e, f, h, k, l, m, p) : a.ka ? a.ka(c, d, e, f, h, k, l, m, p) : a.call(null, c, d, e, f, h, k, l, m, p);
  }
  var q = Kb(r), t = Lb(r);
  if (10 === b) {
    return a.Y ? a.Y(c, d, e, f, h, k, l, m, p, q) : a.Y ? a.Y(c, d, e, f, h, k, l, m, p, q) : a.call(null, c, d, e, f, h, k, l, m, p, q);
  }
  var r = Kb(t), w = Lb(t);
  if (11 === b) {
    return a.Z ? a.Z(c, d, e, f, h, k, l, m, p, q, r) : a.Z ? a.Z(c, d, e, f, h, k, l, m, p, q, r) : a.call(null, c, d, e, f, h, k, l, m, p, q, r);
  }
  var t = Kb(w), z = Lb(w);
  if (12 === b) {
    return a.$ ? a.$(c, d, e, f, h, k, l, m, p, q, r, t) : a.$ ? a.$(c, d, e, f, h, k, l, m, p, q, r, t) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t);
  }
  var w = Kb(z), A = Lb(z);
  if (13 === b) {
    return a.aa ? a.aa(c, d, e, f, h, k, l, m, p, q, r, t, w) : a.aa ? a.aa(c, d, e, f, h, k, l, m, p, q, r, t, w) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, w);
  }
  var z = Kb(A), H = Lb(A);
  if (14 === b) {
    return a.ba ? a.ba(c, d, e, f, h, k, l, m, p, q, r, t, w, z) : a.ba ? a.ba(c, d, e, f, h, k, l, m, p, q, r, t, w, z) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, w, z);
  }
  var A = Kb(H), K = Lb(H);
  if (15 === b) {
    return a.ca ? a.ca(c, d, e, f, h, k, l, m, p, q, r, t, w, z, A) : a.ca ? a.ca(c, d, e, f, h, k, l, m, p, q, r, t, w, z, A) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A);
  }
  var H = Kb(K), Q = Lb(K);
  if (16 === b) {
    return a.da ? a.da(c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H) : a.da ? a.da(c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H);
  }
  var K = Kb(Q), ba = Lb(Q);
  if (17 === b) {
    return a.ea ? a.ea(c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K) : a.ea ? a.ea(c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K);
  }
  var Q = Kb(ba), Da = Lb(ba);
  if (18 === b) {
    return a.fa ? a.fa(c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K, Q) : a.fa ? a.fa(c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K, Q) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K, Q);
  }
  ba = Kb(Da);
  Da = Lb(Da);
  if (19 === b) {
    return a.ga ? a.ga(c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K, Q, ba) : a.ga ? a.ga(c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K, Q, ba) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K, Q, ba);
  }
  var u = Kb(Da);
  Lb(Da);
  if (20 === b) {
    return a.ha ? a.ha(c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K, Q, ba, u) : a.ha ? a.ha(c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K, Q, ba, u) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K, Q, ba, u);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function Pd() {
  switch(arguments.length) {
    case 2:
      return Qe(arguments[0], arguments[1]);
    case 3:
      return Re(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Se(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Te(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return Ue(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new E(Array.prototype.slice.call(arguments, 5), 0));
  }
}
function Qe(a, b) {
  var c = a.v;
  if (a.t) {
    var d = Ke(b, c + 1);
    return d <= c ? Pe(a, d, b) : a.t(b);
  }
  return a.apply(a, Ie(b));
}
function Re(a, b, c) {
  b = J(b, c);
  c = a.v;
  if (a.t) {
    var d = Ke(b, c + 1);
    return d <= c ? Pe(a, d, b) : a.t(b);
  }
  return a.apply(a, Ie(b));
}
function Se(a, b, c, d) {
  b = J(b, J(c, d));
  c = a.v;
  return a.t ? (d = Ke(b, c + 1), d <= c ? Pe(a, d, b) : a.t(b)) : a.apply(a, Ie(b));
}
function Te(a, b, c, d, e) {
  b = J(b, J(c, J(d, e)));
  c = a.v;
  return a.t ? (d = Ke(b, c + 1), d <= c ? Pe(a, d, b) : a.t(b)) : a.apply(a, Ie(b));
}
function Ue(a, b, c, d, e, f) {
  b = J(b, J(c, J(d, J(e, Le(f)))));
  c = a.v;
  return a.t ? (d = Ke(b, c + 1), d <= c ? Pe(a, d, b) : a.t(b)) : a.apply(a, Ie(b));
}
function Ve(a) {
  return D(a) ? a : null;
}
var We = function We() {
  "undefined" === typeof db && (db = function(b, c) {
    this.Ce = b;
    this.ze = c;
    this.g = 393216;
    this.r = 0;
  }, db.prototype.D = function(b, c) {
    return new db(this.Ce, c);
  }, db.prototype.C = function() {
    return this.ze;
  }, db.prototype.eb = function() {
    return!1;
  }, db.prototype.next = function() {
    return Error("No such element");
  }, db.prototype.remove = function() {
    return Error("Unsupported operation");
  }, db.cc = !0, db.ac = "cljs.core/t25392", db.uc = function(b, c) {
    return pc(c, "cljs.core/t25392");
  });
  return new db(We, Xe);
};
function Ye(a, b) {
  this.F = a;
  this.o = b;
}
Ye.prototype.eb = function() {
  return this.o < this.F.length;
};
Ye.prototype.next = function() {
  var a = this.F.charAt(this.o);
  this.o += 1;
  return a;
};
Ye.prototype.remove = function() {
  return Error("Unsupported operation");
};
function Ze(a, b) {
  this.c = a;
  this.o = b;
}
Ze.prototype.eb = function() {
  return this.o < this.c.length;
};
Ze.prototype.next = function() {
  var a = this.c[this.o];
  this.o += 1;
  return a;
};
Ze.prototype.remove = function() {
  return Error("Unsupported operation");
};
var $e = {}, af = {};
function bf(a, b) {
  this.jc = a;
  this.Jb = b;
}
bf.prototype.eb = function() {
  this.jc === $e ? (this.jc = af, this.Jb = D(this.Jb)) : this.jc === this.Jb && (this.Jb = G(this.jc));
  return null != this.Jb;
};
bf.prototype.next = function() {
  if (rb(this.eb())) {
    throw Error("No such element");
  }
  this.jc = this.Jb;
  return F(this.Jb);
};
bf.prototype.remove = function() {
  return Error("Unsupported operation");
};
function cf(a) {
  if (null == a) {
    return We();
  }
  if ("string" === typeof a) {
    return new Ye(a, 0);
  }
  if (qb(a)) {
    return new Ze(a, 0);
  }
  var b;
  b = a ? v(v(null) ? null : a.Ic) ? !0 : a.bc ? !1 : x(Ic, a) : x(Ic, a);
  if (v(b)) {
    return Jc(a);
  }
  if (a ? a.g & 8388608 || a.ie || (a.g ? 0 : x(kc, a)) : x(kc, a)) {
    return new bf($e, a);
  }
  throw Error([B("Cannot create iterator from "), B(a)].join(""));
}
function df(a, b) {
  this.ic = a;
  this.Fd = b;
}
df.prototype.step = function(a) {
  for (var b = this;;) {
    if (v(function() {
      var c = null != a.Ua;
      return c ? b.Fd.eb() : c;
    }())) {
      if (od(function() {
        var c = b.Fd.next();
        return b.ic.a ? b.ic.a(a, c) : b.ic.call(null, a, c);
      }())) {
        null != a.W && (a.W.Ua = null);
      } else {
        continue;
      }
    }
    break;
  }
  return null == a.Ua ? null : b.ic.b ? b.ic.b(a) : b.ic.call(null, a);
};
function ef(a, b) {
  var c = function() {
    function a(b, c) {
      b.first = c;
      b.W = new ff(b.Ua, null, null, null);
      b.Ua = null;
      return b.W;
    }
    function b(a) {
      (od(a) ? bc(a) : a).Ua = null;
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
  return new df(a.b ? a.b(c) : a.call(null, c), b);
}
function ff(a, b, c, d) {
  this.Ua = a;
  this.first = b;
  this.W = c;
  this.k = d;
  this.g = 31719628;
  this.r = 0;
}
g = ff.prototype;
g.D = function(a, b) {
  return new ff(this.Ua, this.first, this.W, b);
};
g.G = function(a, b) {
  return J(b, lc(this));
};
g.P = function() {
  return cd;
};
g.q = function(a, b) {
  return null != lc(this) ? yd(this, b) : Vd(b) && null == D(b);
};
g.B = function() {
  return id(this);
};
g.H = function() {
  null != this.Ua && this.Ua.step(this);
  return null == this.W ? null : this;
};
g.S = function() {
  null != this.Ua && lc(this);
  return null == this.W ? null : this.first;
};
g.X = function() {
  null != this.Ua && lc(this);
  return null == this.W ? cd : this.W;
};
g.la = function() {
  null != this.Ua && lc(this);
  return null == this.W ? null : lc(this.W);
};
ff.prototype[ub] = function() {
  return fd(this);
};
function gf(a, b) {
  for (;;) {
    if (null == D(b)) {
      return!0;
    }
    var c;
    c = F(b);
    c = a.b ? a.b(c) : a.call(null, c);
    if (v(c)) {
      c = a;
      var d = G(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
function hf(a, b) {
  for (;;) {
    if (D(b)) {
      var c;
      c = F(b);
      c = a.b ? a.b(c) : a.call(null, c);
      if (v(c)) {
        return c;
      }
      c = a;
      var d = G(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
}
function jf(a) {
  return function() {
    function b(b, c) {
      return rb(a.a ? a.a(b, c) : a.call(null, b, c));
    }
    function c(b) {
      return rb(a.b ? a.b(b) : a.call(null, b));
    }
    function d() {
      return rb(a.m ? a.m() : a.call(null));
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
        return rb(Se(a, b, d, e));
      }
      b.v = 2;
      b.t = function(a) {
        var b = F(a);
        a = G(a);
        var d = F(a);
        a = bd(a);
        return c(b, d, a);
      };
      b.l = c;
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
          return f.l(a, e, m);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    e.v = 2;
    e.t = f.t;
    e.m = d;
    e.b = c;
    e.a = b;
    e.l = f.l;
    return e;
  }();
}
function kf(a) {
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
    b.l = function() {
      return a;
    };
    return b;
  }();
}
function lf(a, b) {
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
        c = Te(b, c, e, f, h);
        return a.b ? a.b(c) : a.call(null, c);
      }
      c.v = 3;
      c.t = function(a) {
        var b = F(a);
        a = G(a);
        var c = F(a);
        a = G(a);
        var e = F(a);
        a = bd(a);
        return d(b, c, e, a);
      };
      c.l = d;
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
          return k.l(a, b, h, r);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    h.v = 3;
    h.t = k.t;
    h.m = f;
    h.b = e;
    h.a = d;
    h.d = c;
    h.l = k.l;
    return h;
  }();
}
function mf(a, b, c) {
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
        d = Te(c, d, f, h, k);
        d = b.b ? b.b(d) : b.call(null, d);
        return a.b ? a.b(d) : a.call(null, d);
      }
      d.v = 3;
      d.t = function(a) {
        var b = F(a);
        a = G(a);
        var c = F(a);
        a = G(a);
        var d = F(a);
        a = bd(a);
        return e(b, c, d, a);
      };
      d.l = e;
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
            for (var t = 0, w = Array(arguments.length - 3);t < w.length;) {
              w[t] = arguments[t + 3], ++t;
            }
            t = new E(w, 0);
          }
          return l.l(a, b, c, t);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    k.v = 3;
    k.t = l.t;
    k.m = h;
    k.b = f;
    k.a = e;
    k.d = d;
    k.l = l.l;
    return k;
  }();
}
function nf(a, b) {
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
        return Ue(a, b, c, e, f, L([h], 0));
      }
      c.v = 3;
      c.t = function(a) {
        var b = F(a);
        a = G(a);
        var c = F(a);
        a = G(a);
        var e = F(a);
        a = bd(a);
        return d(b, c, e, a);
      };
      c.l = d;
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
          return k.l(a, b, h, r);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    h.v = 3;
    h.t = k.t;
    h.m = f;
    h.b = e;
    h.a = d;
    h.d = c;
    h.l = k.l;
    return h;
  }();
}
function of(a, b) {
  var c = pf, d = qf;
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
        return Ue(c, a, d, b, e, L([h, k, l], 0));
      }
      e.v = 3;
      e.t = function(a) {
        var b = F(a);
        a = G(a);
        var c = F(a);
        a = G(a);
        var d = F(a);
        a = bd(a);
        return f(b, c, d, a);
      };
      e.l = f;
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
            for (var l = 0, z = Array(arguments.length - 3);l < z.length;) {
              z[l] = arguments[l + 3], ++l;
            }
            l = new E(z, 0);
          }
          return m.l(a, b, c, l);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    l.v = 3;
    l.t = m.t;
    l.m = k;
    l.b = h;
    l.a = f;
    l.d = e;
    l.l = m.l;
    return l;
  }();
}
function rf(a, b, c, d) {
  this.state = a;
  this.k = b;
  this.He = c;
  this.Sd = d;
  this.r = 16386;
  this.g = 6455296;
}
g = rf.prototype;
g.equiv = function(a) {
  return this.q(null, a);
};
g.q = function(a, b) {
  return this === b;
};
g.Wb = function() {
  return this.state;
};
g.C = function() {
  return this.k;
};
g.ud = function(a, b, c) {
  for (var d = D(this.Sd), e = null, f = 0, h = 0;;) {
    if (h < f) {
      a = e.N(null, h);
      var k = N(a, 0);
      a = N(a, 1);
      var l = b, m = c;
      a.s ? a.s(k, this, l, m) : a.call(null, k, this, l, m);
      h += 1;
    } else {
      if (a = D(d)) {
        d = a, Yd(d) ? (e = Ac(d), d = Bc(d), a = e, f = M(e), e = a) : (a = F(d), k = N(a, 0), a = N(a, 1), e = k, f = b, h = c, a.s ? a.s(e, this, f, h) : a.call(null, e, this, f, h), d = G(d), e = null, f = 0), h = 0;
      } else {
        return null;
      }
    }
  }
};
g.B = function() {
  return this[ka] || (this[ka] = ++la);
};
function sf() {
  switch(arguments.length) {
    case 1:
      return tf(arguments[0]);
    default:
      var a = arguments[0], b = new E(Array.prototype.slice.call(arguments, 1), 0), c = be(b) ? Qe(uf, b) : b, b = Jd(c, mb), c = Jd(c, vf);
      return new rf(a, b, c, null);
  }
}
function tf(a) {
  return new rf(a, null, null, null);
}
function wf(a, b) {
  if (a instanceof rf) {
    var c = a.He;
    if (null != c && !v(c.b ? c.b(b) : c.call(null, b))) {
      throw Error([B("Assert failed: "), B("Validator rejected reference state"), B("\n"), B(function() {
        var a = we(new Xc(null, "validate", "validate", 1439230700, null), new Xc(null, "new-value", "new-value", -1567397401, null));
        return xf.b ? xf.b(a) : xf.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.Sd && sc(a, c, b);
    return b;
  }
  return Fc(a, b);
}
var pf = function pf() {
  switch(arguments.length) {
    case 2:
      return pf.a(arguments[0], arguments[1]);
    case 3:
      return pf.d(arguments[0], arguments[1], arguments[2]);
    case 4:
      return pf.s(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return pf.l(arguments[0], arguments[1], arguments[2], arguments[3], new E(Array.prototype.slice.call(arguments, 4), 0));
  }
};
pf.a = function(a, b) {
  var c;
  a instanceof rf ? (c = a.state, c = b.b ? b.b(c) : b.call(null, c), c = wf(a, c)) : c = Gc.a(a, b);
  return c;
};
pf.d = function(a, b, c) {
  if (a instanceof rf) {
    var d = a.state;
    b = b.a ? b.a(d, c) : b.call(null, d, c);
    a = wf(a, b);
  } else {
    a = Gc.d(a, b, c);
  }
  return a;
};
pf.s = function(a, b, c, d) {
  if (a instanceof rf) {
    var e = a.state;
    b = b.d ? b.d(e, c, d) : b.call(null, e, c, d);
    a = wf(a, b);
  } else {
    a = Gc.s(a, b, c, d);
  }
  return a;
};
pf.l = function(a, b, c, d, e) {
  return a instanceof rf ? wf(a, Te(b, a.state, c, d, e)) : Gc.J(a, b, c, d, e);
};
pf.t = function(a) {
  var b = F(a), c = G(a);
  a = F(c);
  var d = G(c), c = F(d), e = G(d), d = F(e), e = G(e);
  return pf.l(b, a, c, d, e);
};
pf.v = 4;
function yf(a) {
  this.state = a;
  this.g = 32768;
  this.r = 0;
}
yf.prototype.td = function(a, b) {
  return this.state = b;
};
yf.prototype.Wb = function() {
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
      return S.l(arguments[0], arguments[1], arguments[2], arguments[3], new E(Array.prototype.slice.call(arguments, 4), 0));
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
          e = Re(a, e, f);
          return b.a ? b.a(c, e) : b.call(null, c, e);
        }
        c.v = 2;
        c.t = function(a) {
          var b = F(a);
          a = G(a);
          var c = F(a);
          a = bd(a);
          return d(b, c, a);
        };
        c.l = d;
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
            return h.l(a, b, p);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.v = 2;
      f.t = h.t;
      f.m = e;
      f.b = d;
      f.a = c;
      f.l = h.l;
      return f;
    }();
  };
};
S.a = function(a, b) {
  return new Be(null, function() {
    var c = D(b);
    if (c) {
      if (Yd(c)) {
        for (var d = Ac(c), e = M(d), f = new De(Array(e), 0), h = 0;;) {
          if (h < e) {
            He(f, function() {
              var b = C.a(d, h);
              return a.b ? a.b(b) : a.call(null, b);
            }()), h += 1;
          } else {
            break;
          }
        }
        return Ge(f.La(), S.a(a, Bc(c)));
      }
      return J(function() {
        var b = F(c);
        return a.b ? a.b(b) : a.call(null, b);
      }(), S.a(a, bd(c)));
    }
    return null;
  }, null, null);
};
S.d = function(a, b, c) {
  return new Be(null, function() {
    var d = D(b), e = D(c);
    if (d && e) {
      var f = J, h;
      h = F(d);
      var k = F(e);
      h = a.a ? a.a(h, k) : a.call(null, h, k);
      d = f(h, S.d(a, bd(d), bd(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
S.s = function(a, b, c, d) {
  return new Be(null, function() {
    var e = D(b), f = D(c), h = D(d);
    if (e && f && h) {
      var k = J, l;
      l = F(e);
      var m = F(f), p = F(h);
      l = a.d ? a.d(l, m, p) : a.call(null, l, m, p);
      e = k(l, S.s(a, bd(e), bd(f), bd(h)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
S.l = function(a, b, c, d, e) {
  var f = function k(a) {
    return new Be(null, function() {
      var b = S.a(D, a);
      return gf(he, b) ? J(S.a(F, b), k(S.a(bd, b))) : null;
    }, null, null);
  };
  return S.a(function() {
    return function(b) {
      return Qe(a, b);
    };
  }(f), f(Fd.l(e, d, L([c, b], 0))));
};
S.t = function(a) {
  var b = F(a), c = G(a);
  a = F(c);
  var d = G(c), c = F(d), e = G(d), d = F(e), e = G(e);
  return S.l(b, a, c, d, e);
};
S.v = 4;
function zf(a) {
  return function(b) {
    return function(a) {
      return function() {
        function d(d, e) {
          var f = bc(a), h = Hc(a, bc(a) - 1), f = 0 < f ? b.a ? b.a(d, e) : b.call(null, d, e) : d;
          return 0 < h ? f : od(f) ? f : new nd(f);
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
    }(new yf(a));
  };
}
function Af(a, b) {
  return new Be(null, function() {
    if (0 < a) {
      var c = D(b);
      return c ? J(F(c), Af(a - 1, bd(c))) : null;
    }
    return null;
  }, null, null);
}
function Bf(a, b) {
  return new Be(null, function(c) {
    return function() {
      return c(a, b);
    };
  }(function(a, b) {
    for (;;) {
      var e = D(b);
      if (0 < a && e) {
        var f = a - 1, e = bd(e);
        a = f;
        b = e;
      } else {
        return e;
      }
    }
  }), null, null);
}
function Cf(a) {
  var b = Df;
  return new Be(null, function(c) {
    return function() {
      return c(b, a);
    };
  }(function(a, b) {
    for (;;) {
      var e = D(b), f;
      if (f = e) {
        f = F(e), f = a.b ? a.b(f) : a.call(null, f);
      }
      if (v(f)) {
        f = a, e = bd(e), a = f, b = e;
      } else {
        return e;
      }
    }
  }), null, null);
}
function Ef(a) {
  return new Be(null, function() {
    return J(a, Ef(a));
  }, null, null);
}
function Ff(a) {
  return function(b) {
    return function() {
      function c(c, d) {
        return v(a.b ? a.b(d) : a.call(null, d)) ? b.a ? b.a(c, d) : b.call(null, c, d) : c;
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
function Gf(a, b) {
  return new Be(null, function() {
    var c = D(b);
    if (c) {
      if (Yd(c)) {
        for (var d = Ac(c), e = M(d), f = new De(Array(e), 0), h = 0;;) {
          if (h < e) {
            var k;
            k = C.a(d, h);
            k = a.b ? a.b(k) : a.call(null, k);
            v(k) && (k = C.a(d, h), f.add(k));
            h += 1;
          } else {
            break;
          }
        }
        return Ge(f.La(), Gf(a, Bc(c)));
      }
      d = F(c);
      c = bd(c);
      return v(a.b ? a.b(d) : a.call(null, d)) ? J(d, Gf(a, c)) : Gf(a, c);
    }
    return null;
  }, null, null);
}
function Hf(a, b) {
  return Gf(jf(a), b);
}
function If(a) {
  return function c(a) {
    return new Be(null, function() {
      var e;
      v(Vd.b ? Vd.b(a) : Vd.call(null, a)) ? (e = L([D.b ? D.b(a) : D.call(null, a)], 0), e = Qe(Me, Re(S, c, e))) : e = null;
      return J(a, e);
    }, null, null);
  }(a);
}
function Jf(a) {
  return Gf(function(a) {
    return!Vd(a);
  }, bd(If(a)));
}
var Kf = function Kf() {
  switch(arguments.length) {
    case 2:
      return Kf.a(arguments[0], arguments[1]);
    case 3:
      return Kf.d(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
Kf.a = function(a, b) {
  return null != a ? a && (a.r & 4 || a.Zd) ? Ad(Ne(zb(vc, tc(a), b)), Qd(a)) : zb(Hb, a, b) : zb(Fd, cd, b);
};
Kf.d = function(a, b, c) {
  return a && (a.r & 4 || a.Zd) ? Ad(Ne(ie(b, Oe, tc(a), c)), Qd(a)) : ie(b, Fd, a, c);
};
Kf.v = 3;
var Lf = function Lf() {
  switch(arguments.length) {
    case 2:
      return Lf.a(arguments[0], arguments[1]);
    case 3:
      return Lf.d(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Lf.s(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return Lf.l(arguments[0], arguments[1], arguments[2], arguments[3], new E(Array.prototype.slice.call(arguments, 4), 0));
  }
};
Lf.a = function(a, b) {
  return Ne(zb(function(b, d) {
    return Oe.a(b, a.b ? a.b(d) : a.call(null, d));
  }, tc(Gd), b));
};
Lf.d = function(a, b, c) {
  return Kf.a(Gd, S.d(a, b, c));
};
Lf.s = function(a, b, c, d) {
  return Kf.a(Gd, S.s(a, b, c, d));
};
Lf.l = function(a, b, c, d, e) {
  return Kf.a(Gd, Ue(S, a, b, c, d, L([e], 0)));
};
Lf.t = function(a) {
  var b = F(a), c = G(a);
  a = F(c);
  var d = G(c), c = F(d), e = G(d), d = F(e), e = G(e);
  return Lf.l(b, a, c, d, e);
};
Lf.v = 4;
function Mf(a, b, c, d) {
  return new Be(null, function() {
    var e = D(d);
    if (e) {
      var f = Af(a, e);
      return a === M(f) ? J(f, Mf(a, b, c, Bf(b, e))) : Hb(cd, Af(a, Me.a(f, c)));
    }
    return null;
  }, null, null);
}
var qf = function qf(b, c, d) {
  var e = N(c, 0);
  c = oe(c);
  return v(c) ? O.d(b, e, qf(Jd(b, e), c, d)) : O.d(b, e, d);
}, Nf = function Nf() {
  switch(arguments.length) {
    case 3:
      return Nf.d(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Nf.s(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Nf.J(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return Nf.R(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      return Nf.l(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new E(Array.prototype.slice.call(arguments, 6), 0));
  }
};
Nf.d = function(a, b, c) {
  var d = N(b, 0);
  b = oe(b);
  return v(b) ? O.d(a, d, Nf.d(Jd(a, d), b, c)) : O.d(a, d, function() {
    var b = Jd(a, d);
    return c.b ? c.b(b) : c.call(null, b);
  }());
};
Nf.s = function(a, b, c, d) {
  var e = N(b, 0);
  b = oe(b);
  return v(b) ? O.d(a, e, Nf.s(Jd(a, e), b, c, d)) : O.d(a, e, function() {
    var b = Jd(a, e);
    return c.a ? c.a(b, d) : c.call(null, b, d);
  }());
};
Nf.J = function(a, b, c, d, e) {
  var f = N(b, 0);
  b = oe(b);
  return v(b) ? O.d(a, f, Nf.J(Jd(a, f), b, c, d, e)) : O.d(a, f, function() {
    var b = Jd(a, f);
    return c.d ? c.d(b, d, e) : c.call(null, b, d, e);
  }());
};
Nf.R = function(a, b, c, d, e, f) {
  var h = N(b, 0);
  b = oe(b);
  return v(b) ? O.d(a, h, Nf.R(Jd(a, h), b, c, d, e, f)) : O.d(a, h, function() {
    var b = Jd(a, h);
    return c.s ? c.s(b, d, e, f) : c.call(null, b, d, e, f);
  }());
};
Nf.l = function(a, b, c, d, e, f, h) {
  var k = N(b, 0);
  b = oe(b);
  return v(b) ? O.d(a, k, Ue(Nf, Jd(a, k), b, c, d, L([e, f, h], 0))) : O.d(a, k, Ue(c, Jd(a, k), d, e, f, L([h], 0)));
};
Nf.t = function(a) {
  var b = F(a), c = G(a);
  a = F(c);
  var d = G(c), c = F(d), e = G(d), d = F(e), f = G(e), e = F(f), h = G(f), f = F(h), h = G(h);
  return Nf.l(b, a, c, d, e, f, h);
};
Nf.v = 6;
function Of(a, b) {
  this.O = a;
  this.c = b;
}
function Pf(a) {
  return new Of(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Qf(a) {
  return new Of(a.O, vb(a.c));
}
function Rf(a) {
  a = a.h;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Sf(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Pf(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var Tf = function Tf(b, c, d, e) {
  var f = Qf(d), h = b.h - 1 >>> c & 31;
  5 === c ? f.c[h] = e : (d = d.c[h], b = null != d ? Tf(b, c - 5, d, e) : Sf(null, c - 5, e), f.c[h] = b);
  return f;
};
function Uf(a, b) {
  throw Error([B("No item "), B(a), B(" in vector of length "), B(b)].join(""));
}
function Vf(a, b) {
  if (b >= Rf(a)) {
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
function Wf(a, b) {
  return 0 <= b && b < a.h ? Vf(a, b) : Uf(b, a.h);
}
var Xf = function Xf(b, c, d, e, f) {
  var h = Qf(d);
  if (0 === c) {
    h.c[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Xf(b, c - 5, d.c[k], e, f);
    h.c[k] = b;
  }
  return h;
}, Yf = function Yf(b, c, d) {
  var e = b.h - 2 >>> c & 31;
  if (5 < c) {
    b = Yf(b, c - 5, d.c[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = Qf(d);
    d.c[e] = b;
    return d;
  }
  if (0 === e) {
    return null;
  }
  d = Qf(d);
  d.c[e] = null;
  return d;
};
function Zf(a, b, c, d, e, f) {
  this.o = a;
  this.Dc = b;
  this.c = c;
  this.Za = d;
  this.start = e;
  this.end = f;
}
Zf.prototype.eb = function() {
  return this.o < this.end;
};
Zf.prototype.next = function() {
  32 === this.o - this.Dc && (this.c = Vf(this.Za, this.o), this.Dc += 32);
  var a = this.c[this.o & 31];
  this.o += 1;
  return a;
};
function T(a, b, c, d, e, f) {
  this.k = a;
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
  return Lc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.w = function(a, b) {
  return Ob.d(this, b, null);
};
g.u = function(a, b, c) {
  return "number" === typeof b ? C.d(this, b, c) : c;
};
g.N = function(a, b) {
  return Wf(this, b)[b & 31];
};
g.ua = function(a, b, c) {
  return 0 <= b && b < this.h ? Vf(this, b)[b & 31] : c;
};
g.Mb = function(a, b, c) {
  if (0 <= b && b < this.h) {
    return Rf(this) <= b ? (a = vb(this.L), a[b & 31] = c, new T(this.k, this.h, this.shift, this.root, a, null)) : new T(this.k, this.h, this.shift, Xf(this, this.shift, this.root, b, c), this.L, null);
  }
  if (b === this.h) {
    return Hb(this, c);
  }
  throw Error([B("Index "), B(b), B(" out of bounds  [0,"), B(this.h), B("]")].join(""));
};
g.Ic = !0;
g.mc = function() {
  var a = this.h;
  return new Zf(0, 0, 0 < M(this) ? Vf(this, 0) : null, this, 0, a);
};
g.C = function() {
  return this.k;
};
g.I = function() {
  return this.h;
};
g.nc = function() {
  return C.a(this, 0);
};
g.oc = function() {
  return C.a(this, 1);
};
g.Bb = function() {
  return 0 < this.h ? C.a(this, this.h - 1) : null;
};
g.Cb = function() {
  if (0 === this.h) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.h) {
    return fc(Gd, this.k);
  }
  if (1 < this.h - Rf(this)) {
    return new T(this.k, this.h - 1, this.shift, this.root, this.L.slice(0, -1), null);
  }
  var a = Vf(this, this.h - 2), b = Yf(this, this.shift, this.root), b = null == b ? U : b, c = this.h - 1;
  return 5 < this.shift && null == b.c[1] ? new T(this.k, c, this.shift - 5, b.c[0], a, null) : new T(this.k, c, this.shift, b, a, null);
};
g.Yb = function() {
  return 0 < this.h ? new xd(this, this.h - 1, null) : null;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = id(this);
};
g.q = function(a, b) {
  if (b instanceof T) {
    if (this.h === M(b)) {
      for (var c = Jc(this), d = Jc(b);;) {
        if (v(c.eb())) {
          var e = c.next(), f = d.next();
          if (!dd.a(e, f)) {
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
    return yd(this, b);
  }
};
g.Xb = function() {
  var a = this;
  return new $f(a.h, a.shift, function() {
    var b = a.root;
    return ag.b ? ag.b(b) : ag.call(null, b);
  }(), function() {
    var b = a.L;
    return bg.b ? bg.b(b) : bg.call(null, b);
  }());
};
g.P = function() {
  return Ad(Gd, this.k);
};
g.T = function(a, b) {
  return pd(this, b);
};
g.U = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.h) {
      var e = Vf(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var h = e[f], d = b.a ? b.a(d, h) : b.call(null, d, h);
            if (od(d)) {
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
      if (od(e)) {
        return b = e, I.b ? I.b(b) : I.call(null, b);
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
g.ra = function(a, b, c) {
  if ("number" === typeof b) {
    return ac(this, b, c);
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
  return cg ? cg(this, a, 0, 0) : dg.call(null, this, a, 0, 0);
};
g.D = function(a, b) {
  return new T(b, this.h, this.shift, this.root, this.L, this.i);
};
g.G = function(a, b) {
  if (32 > this.h - Rf(this)) {
    for (var c = this.L.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.L[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new T(this.k, this.h + 1, this.shift, this.root, d, null);
  }
  c = (d = this.h >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Pf(null), d.c[0] = this.root, e = Sf(null, this.shift, new Of(null, this.L)), d.c[1] = e) : d = Tf(this, this.shift, this.root, new Of(null, this.L));
  return new T(this.k, this.h + 1, c, d, [b], null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.ua(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.N(null, c);
  };
  a.d = function(a, c, d) {
    return this.ua(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(vb(b)));
};
g.b = function(a) {
  return this.N(null, a);
};
g.a = function(a, b) {
  return this.ua(null, a, b);
};
var U = new Of(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Gd = new T(null, 0, 5, U, [], jd);
function eg(a) {
  var b = a.length;
  if (32 > b) {
    return new T(null, b, 5, U, a, null);
  }
  for (var c = 32, d = (new T(null, 32, 5, U, a.slice(0, 32), null)).Xb(null);;) {
    if (c < b) {
      var e = c + 1, d = Oe.a(d, a[c]), c = e
    } else {
      return wc(d);
    }
  }
}
T.prototype[ub] = function() {
  return fd(this);
};
function fg(a) {
  return qb(a) ? eg(a) : wc(zb(vc, tc(Gd), a));
}
var gg = function gg() {
  return gg.l(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
};
gg.l = function(a) {
  return a instanceof E && 0 === a.o ? eg(a.c) : fg(a);
};
gg.v = 0;
gg.t = function(a) {
  return gg.l(D(a));
};
function hg(a, b, c, d, e, f) {
  this.Ia = a;
  this.wb = b;
  this.o = c;
  this.oa = d;
  this.k = e;
  this.i = f;
  this.g = 32375020;
  this.r = 1536;
}
g = hg.prototype;
g.toString = function() {
  return Lc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.k;
};
g.la = function() {
  if (this.oa + 1 < this.wb.length) {
    var a;
    a = this.Ia;
    var b = this.wb, c = this.o, d = this.oa + 1;
    a = cg ? cg(a, b, c, d) : dg.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Cc(this);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = id(this);
};
g.q = function(a, b) {
  return yd(this, b);
};
g.P = function() {
  return Ad(Gd, this.k);
};
g.T = function(a, b) {
  var c;
  c = this.Ia;
  var d = this.o + this.oa, e = M(this.Ia);
  c = ig ? ig(c, d, e) : jg.call(null, c, d, e);
  return pd(c, b);
};
g.U = function(a, b, c) {
  a = this.Ia;
  var d = this.o + this.oa, e = M(this.Ia);
  a = ig ? ig(a, d, e) : jg.call(null, a, d, e);
  return qd(a, b, c);
};
g.S = function() {
  return this.wb[this.oa];
};
g.X = function() {
  if (this.oa + 1 < this.wb.length) {
    var a;
    a = this.Ia;
    var b = this.wb, c = this.o, d = this.oa + 1;
    a = cg ? cg(a, b, c, d) : dg.call(null, a, b, c, d);
    return null == a ? cd : a;
  }
  return Bc(this);
};
g.H = function() {
  return this;
};
g.Vc = function() {
  var a = this.wb;
  return new Ee(a, this.oa, a.length);
};
g.Wc = function() {
  var a = this.o + this.wb.length;
  if (a < Eb(this.Ia)) {
    var b = this.Ia, c = Vf(this.Ia, a);
    return cg ? cg(b, c, a, 0) : dg.call(null, b, c, a, 0);
  }
  return cd;
};
g.D = function(a, b) {
  var c = this.Ia, d = this.wb, e = this.o, f = this.oa;
  return kg ? kg(c, d, e, f, b) : dg.call(null, c, d, e, f, b);
};
g.G = function(a, b) {
  return J(b, this);
};
g.Uc = function() {
  var a = this.o + this.wb.length;
  if (a < Eb(this.Ia)) {
    var b = this.Ia, c = Vf(this.Ia, a);
    return cg ? cg(b, c, a, 0) : dg.call(null, b, c, a, 0);
  }
  return null;
};
hg.prototype[ub] = function() {
  return fd(this);
};
function dg() {
  switch(arguments.length) {
    case 3:
      var a = arguments[0], b = arguments[1], c = arguments[2];
      return new hg(a, Wf(a, b), b, c, null, null);
    case 4:
      return cg(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return kg(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function cg(a, b, c, d) {
  return new hg(a, b, c, d, null, null);
}
function kg(a, b, c, d, e) {
  return new hg(a, b, c, d, e, null);
}
function lg(a, b, c, d, e) {
  this.k = a;
  this.Za = b;
  this.start = c;
  this.end = d;
  this.i = e;
  this.g = 167666463;
  this.r = 8192;
}
g = lg.prototype;
g.toString = function() {
  return Lc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.w = function(a, b) {
  return Ob.d(this, b, null);
};
g.u = function(a, b, c) {
  return "number" === typeof b ? C.d(this, b, c) : c;
};
g.N = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Uf(b, this.end - this.start) : C.a(this.Za, this.start + b);
};
g.ua = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : C.d(this.Za, this.start + b, c);
};
g.Mb = function(a, b, c) {
  var d = this.start + b;
  a = this.k;
  c = O.d(this.Za, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return mg.J ? mg.J(a, c, b, d, null) : mg.call(null, a, c, b, d, null);
};
g.C = function() {
  return this.k;
};
g.I = function() {
  return this.end - this.start;
};
g.Bb = function() {
  return C.a(this.Za, this.end - 1);
};
g.Cb = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  var a = this.k, b = this.Za, c = this.start, d = this.end - 1;
  return mg.J ? mg.J(a, b, c, d, null) : mg.call(null, a, b, c, d, null);
};
g.Yb = function() {
  return this.start !== this.end ? new xd(this, this.end - this.start - 1, null) : null;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = id(this);
};
g.q = function(a, b) {
  return yd(this, b);
};
g.P = function() {
  return Ad(Gd, this.k);
};
g.T = function(a, b) {
  return pd(this, b);
};
g.U = function(a, b, c) {
  return qd(this, b, c);
};
g.ra = function(a, b, c) {
  if ("number" === typeof b) {
    return ac(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.H = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : J(C.a(a.Za, e), new Be(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
g.D = function(a, b) {
  var c = this.Za, d = this.start, e = this.end, f = this.i;
  return mg.J ? mg.J(b, c, d, e, f) : mg.call(null, b, c, d, e, f);
};
g.G = function(a, b) {
  var c = this.k, d = ac(this.Za, this.end, b), e = this.start, f = this.end + 1;
  return mg.J ? mg.J(c, d, e, f, null) : mg.call(null, c, d, e, f, null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.ua(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.N(null, c);
  };
  a.d = function(a, c, d) {
    return this.ua(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(vb(b)));
};
g.b = function(a) {
  return this.N(null, a);
};
g.a = function(a, b) {
  return this.ua(null, a, b);
};
lg.prototype[ub] = function() {
  return fd(this);
};
function mg(a, b, c, d, e) {
  for (;;) {
    if (b instanceof lg) {
      c = b.start + c, d = b.start + d, b = b.Za;
    } else {
      var f = M(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new lg(a, b, c, d, e);
    }
  }
}
function jg() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0];
      return ig(a, arguments[1], M(a));
    case 3:
      return ig(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function ig(a, b, c) {
  return mg(null, a, b, c, null);
}
function ng(a, b) {
  return a === b.O ? b : new Of(a, vb(b.c));
}
function ag(a) {
  return new Of({}, vb(a.c));
}
function bg(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  $d(a, 0, b, 0, a.length);
  return b;
}
var og = function og(b, c, d, e) {
  d = ng(b.root.O, d);
  var f = b.h - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.c[f];
    b = null != h ? og(b, c - 5, h, e) : Sf(b.root.O, c - 5, e);
  }
  d.c[f] = b;
  return d;
};
function $f(a, b, c, d) {
  this.h = a;
  this.shift = b;
  this.root = c;
  this.L = d;
  this.r = 88;
  this.g = 275;
}
g = $f.prototype;
g.Kb = function(a, b) {
  if (this.root.O) {
    if (32 > this.h - Rf(this)) {
      this.L[this.h & 31] = b;
    } else {
      var c = new Of(this.root.O, this.L), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.L = d;
      if (this.h >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Sf(this.root.O, this.shift, c);
        this.root = new Of(this.root.O, d);
        this.shift = e;
      } else {
        this.root = og(this, this.shift, this.root, c);
      }
    }
    this.h += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
g.Lb = function() {
  if (this.root.O) {
    this.root.O = null;
    var a = this.h - Rf(this), b = Array(a);
    $d(this.L, 0, b, 0, a);
    return new T(null, this.h, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
g.sc = function(a, b, c) {
  if ("number" === typeof b) {
    return yc(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
g.sd = function(a, b, c) {
  var d = this;
  if (d.root.O) {
    if (0 <= b && b < d.h) {
      return Rf(this) <= b ? d.L[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = ng(d.root.O, k);
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
      return vc(this, c);
    }
    throw Error([B("Index "), B(b), B(" out of bounds for TransientVector of length"), B(d.h)].join(""));
  }
  throw Error("assoc! after persistent!");
};
g.I = function() {
  if (this.root.O) {
    return this.h;
  }
  throw Error("count after persistent!");
};
g.N = function(a, b) {
  if (this.root.O) {
    return Wf(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.ua = function(a, b, c) {
  return 0 <= b && b < this.h ? C.a(this, b) : c;
};
g.w = function(a, b) {
  return Ob.d(this, b, null);
};
g.u = function(a, b, c) {
  return "number" === typeof b ? C.d(this, b, c) : c;
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
  return this.call.apply(this, [this].concat(vb(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
function pg(a, b, c, d) {
  this.k = a;
  this.za = b;
  this.ob = c;
  this.i = d;
  this.g = 31850572;
  this.r = 0;
}
g = pg.prototype;
g.toString = function() {
  return Lc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.k;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = id(this);
};
g.q = function(a, b) {
  return yd(this, b);
};
g.P = function() {
  return Ad(cd, this.k);
};
g.S = function() {
  return F(this.za);
};
g.X = function() {
  var a = G(this.za);
  return a ? new pg(this.k, a, this.ob, null) : null == this.ob ? Fb(this) : new pg(this.k, this.ob, null, null);
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new pg(b, this.za, this.ob, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
pg.prototype[ub] = function() {
  return fd(this);
};
function qg(a, b, c, d, e) {
  this.k = a;
  this.count = b;
  this.za = c;
  this.ob = d;
  this.i = e;
  this.g = 31858766;
  this.r = 8192;
}
g = qg.prototype;
g.toString = function() {
  return Lc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.k;
};
g.I = function() {
  return this.count;
};
g.Bb = function() {
  return F(this.za);
};
g.Cb = function() {
  if (v(this.za)) {
    var a = G(this.za);
    return a ? new qg(this.k, this.count - 1, a, this.ob, null) : new qg(this.k, this.count - 1, D(this.ob), Gd, null);
  }
  return this;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = id(this);
};
g.q = function(a, b) {
  return yd(this, b);
};
g.P = function() {
  return Ad(rg, this.k);
};
g.S = function() {
  return F(this.za);
};
g.X = function() {
  return bd(D(this));
};
g.H = function() {
  var a = D(this.ob), b = this.za;
  return v(v(b) ? b : a) ? new pg(null, this.za, D(a), null) : null;
};
g.D = function(a, b) {
  return new qg(b, this.count, this.za, this.ob, this.i);
};
g.G = function(a, b) {
  var c;
  v(this.za) ? (c = this.ob, c = new qg(this.k, this.count + 1, this.za, Fd.a(v(c) ? c : Gd, b), null)) : c = new qg(this.k, this.count + 1, Fd.a(this.za, b), Gd, null);
  return c;
};
var rg = new qg(null, 0, null, Gd, jd);
qg.prototype[ub] = function() {
  return fd(this);
};
function sg() {
  this.g = 2097152;
  this.r = 0;
}
sg.prototype.equiv = function(a) {
  return this.q(null, a);
};
sg.prototype.q = function() {
  return!1;
};
var tg = new sg;
function ug(a, b) {
  return ce(Wd(b) ? M(a) === M(b) ? gf(he, S.a(function(a) {
    return dd.a(Kd(b, F(a), tg), F(G(a)));
  }, a)) : null : null);
}
function vg(a) {
  this.F = a;
}
vg.prototype.next = function() {
  if (null != this.F) {
    var a = F(this.F), b = N(a, 0), a = N(a, 1);
    this.F = G(this.F);
    return{value:[b, a], done:!1};
  }
  return{value:null, done:!0};
};
function wg(a) {
  return new vg(D(a));
}
function xg(a) {
  this.F = a;
}
xg.prototype.next = function() {
  if (null != this.F) {
    var a = F(this.F);
    this.F = G(this.F);
    return{value:[a, a], done:!1};
  }
  return{value:null, done:!0};
};
function yg(a) {
  return new xg(D(a));
}
function zg(a, b) {
  var c;
  if (b instanceof P) {
    a: {
      c = a.length;
      for (var d = b.na, e = 0;;) {
        if (c <= e) {
          c = -1;
          break a;
        }
        var f = a[e];
        if (f instanceof P && d === f.na) {
          c = e;
          break a;
        }
        e += 2;
      }
    }
  } else {
    if (c = fa(b), v(v(c) ? c : "number" === typeof b)) {
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
      if (b instanceof Xc) {
        a: {
          for (c = a.length, d = b.pb, e = 0;;) {
            if (c <= e) {
              c = -1;
              break a;
            }
            f = a[e];
            if (f instanceof Xc && d === f.pb) {
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
              if (dd.a(b, a[d])) {
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
function Ag(a, b, c) {
  this.c = a;
  this.o = b;
  this.ta = c;
  this.g = 32374990;
  this.r = 0;
}
g = Ag.prototype;
g.toString = function() {
  return Lc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.ta;
};
g.la = function() {
  return this.o < this.c.length - 2 ? new Ag(this.c, this.o + 2, this.ta) : null;
};
g.I = function() {
  return(this.c.length - this.o) / 2;
};
g.B = function() {
  return id(this);
};
g.q = function(a, b) {
  return yd(this, b);
};
g.P = function() {
  return Ad(cd, this.ta);
};
g.T = function(a, b) {
  return Bd(b, this);
};
g.U = function(a, b, c) {
  return Dd(b, c, this);
};
g.S = function() {
  return new T(null, 2, 5, U, [this.c[this.o], this.c[this.o + 1]], null);
};
g.X = function() {
  return this.o < this.c.length - 2 ? new Ag(this.c, this.o + 2, this.ta) : cd;
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new Ag(this.c, this.o, b);
};
g.G = function(a, b) {
  return J(b, this);
};
Ag.prototype[ub] = function() {
  return fd(this);
};
function Bg(a, b, c) {
  this.c = a;
  this.o = b;
  this.h = c;
}
Bg.prototype.eb = function() {
  return this.o < this.h;
};
Bg.prototype.next = function() {
  var a = new T(null, 2, 5, U, [this.c[this.o], this.c[this.o + 1]], null);
  this.o += 2;
  return a;
};
function ib(a, b, c, d) {
  this.k = a;
  this.h = b;
  this.c = c;
  this.i = d;
  this.g = 16647951;
  this.r = 8196;
}
g = ib.prototype;
g.toString = function() {
  return Lc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.keys = function() {
  return fd(Cg.b ? Cg.b(this) : Cg.call(null, this));
};
g.entries = function() {
  return wg(D(this));
};
g.values = function() {
  return fd(Dg.b ? Dg.b(this) : Dg.call(null, this));
};
g.has = function(a) {
  return de(this, a);
};
g.get = function(a, b) {
  return this.u(null, a, b);
};
g.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.N(null, e), h = N(f, 0), f = N(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = D(b)) {
        Yd(b) ? (c = Ac(b), b = Bc(b), h = c, d = M(c), c = h) : (c = F(b), h = N(c, 0), c = f = N(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = G(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.w = function(a, b) {
  return Ob.d(this, b, null);
};
g.u = function(a, b, c) {
  a = zg(this.c, b);
  return-1 === a ? c : this.c[a + 1];
};
g.Ic = !0;
g.mc = function() {
  return new Bg(this.c, 0, 2 * this.h);
};
g.C = function() {
  return this.k;
};
g.I = function() {
  return this.h;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = kd(this);
};
g.q = function(a, b) {
  if (b && (b.g & 1024 || b.ce)) {
    var c = this.c.length;
    if (this.h === b.I(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.u(null, this.c[d], ae);
          if (e !== ae) {
            if (dd.a(this.c[d + 1], e)) {
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
    return ug(this, b);
  }
};
g.Xb = function() {
  return new Eg({}, this.c.length, vb(this.c));
};
g.P = function() {
  return fc(Xe, this.k);
};
g.T = function(a, b) {
  return Bd(b, this);
};
g.U = function(a, b, c) {
  return Dd(b, c, this);
};
g.Ca = function(a, b) {
  if (0 <= zg(this.c, b)) {
    var c = this.c.length, d = c - 2;
    if (0 === d) {
      return Fb(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new ib(this.k, this.h - 1, d, null);
      }
      dd.a(b, this.c[e]) || (d[f] = this.c[e], d[f + 1] = this.c[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
g.ra = function(a, b, c) {
  a = zg(this.c, b);
  if (-1 === a) {
    if (this.h < Fg) {
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
      return new ib(this.k, this.h + 1, e, null);
    }
    return fc(Qb(Kf.a(Gg, this), b, c), this.k);
  }
  if (c === this.c[a + 1]) {
    return this;
  }
  b = vb(this.c);
  b[a + 1] = c;
  return new ib(this.k, this.h, b, null);
};
g.Hc = function(a, b) {
  return-1 !== zg(this.c, b);
};
g.H = function() {
  var a = this.c;
  return 0 <= a.length - 2 ? new Ag(a, 0, null) : null;
};
g.D = function(a, b) {
  return new ib(b, this.h, this.c, this.i);
};
g.G = function(a, b) {
  if (Xd(b)) {
    return Qb(this, C.a(b, 0), C.a(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (Xd(e)) {
      c = Qb(c, C.a(e, 0), C.a(e, 1)), d = G(d);
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
  return this.call.apply(this, [this].concat(vb(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
var Xe = new ib(null, 0, [], ld), Fg = 8;
function Hg(a) {
  for (var b = [], c = 0;;) {
    if (c < a.length) {
      var d = a[c], e = a[c + 1];
      -1 === zg(b, d) && (b.push(d), b.push(e));
      c += 2;
    } else {
      break;
    }
  }
  return new ib(null, b.length / 2, b, null);
}
ib.prototype[ub] = function() {
  return fd(this);
};
function Eg(a, b, c) {
  this.dc = a;
  this.fc = b;
  this.c = c;
  this.g = 258;
  this.r = 56;
}
g = Eg.prototype;
g.I = function() {
  if (v(this.dc)) {
    return me(this.fc);
  }
  throw Error("count after persistent!");
};
g.w = function(a, b) {
  return Ob.d(this, b, null);
};
g.u = function(a, b, c) {
  if (v(this.dc)) {
    return a = zg(this.c, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.Kb = function(a, b) {
  if (v(this.dc)) {
    if (b ? b.g & 2048 || b.de || (b.g ? 0 : x(Tb, b)) : x(Tb, b)) {
      return xc(this, qe.b ? qe.b(b) : qe.call(null, b), re.b ? re.b(b) : re.call(null, b));
    }
    for (var c = D(b), d = this;;) {
      var e = F(c);
      if (v(e)) {
        var f = e, c = G(c), d = xc(d, function() {
          var a = f;
          return qe.b ? qe.b(a) : qe.call(null, a);
        }(), function() {
          var a = f;
          return re.b ? re.b(a) : re.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
g.Lb = function() {
  if (v(this.dc)) {
    return this.dc = !1, new ib(null, me(this.fc), this.c, null);
  }
  throw Error("persistent! called twice");
};
g.sc = function(a, b, c) {
  if (v(this.dc)) {
    a = zg(this.c, b);
    if (-1 === a) {
      if (this.fc + 2 <= 2 * Fg) {
        return this.fc += 2, this.c.push(b), this.c.push(c), this;
      }
      a = this.fc;
      var d = this.c;
      a = Ig.a ? Ig.a(a, d) : Ig.call(null, a, d);
      return xc(a, b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function Ig(a, b) {
  for (var c = tc(Gg), d = 0;;) {
    if (d < a) {
      c = xc(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Jg() {
  this.n = !1;
}
function Kg(a, b) {
  return a === b ? !0 : R(a, b) ? !0 : dd.a(a, b);
}
function Lg(a, b, c) {
  a = vb(a);
  a[b] = c;
  return a;
}
function Mg(a, b) {
  var c = Array(a.length - 2);
  $d(a, 0, c, 0, 2 * b);
  $d(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
function Ng(a, b, c, d) {
  a = a.Nb(b);
  a.c[c] = d;
  return a;
}
function Og(a, b, c) {
  this.O = a;
  this.Q = b;
  this.c = c;
}
g = Og.prototype;
g.Nb = function(a) {
  if (a === this.O) {
    return this;
  }
  var b = ne(this.Q), c = Array(0 > b ? 4 : 2 * (b + 1));
  $d(this.c, 0, c, 0, 2 * b);
  return new Og(a, this.Q, c);
};
g.yc = function() {
  var a = this.c;
  return Qg ? Qg(a) : Rg.call(null, a);
};
g.Eb = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.Q & e)) {
    return d;
  }
  var f = ne(this.Q & e - 1), e = this.c[2 * f], f = this.c[2 * f + 1];
  return null == e ? f.Eb(a + 5, b, c, d) : Kg(c, e) ? f : d;
};
g.Wa = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = ne(this.Q & h - 1);
  if (0 === (this.Q & h)) {
    var l = ne(this.Q);
    if (2 * l < this.c.length) {
      a = this.Nb(a);
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
      a.Q |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = Sg.Wa(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.Q >>> d & 1) && (k[d] = null != this.c[e] ? Sg.Wa(a, b + 5, Uc(this.c[e]), this.c[e], this.c[e + 1], f) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Tg(a, l + 1, k);
    }
    b = Array(2 * (l + 4));
    $d(this.c, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    $d(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k));
    f.n = !0;
    a = this.Nb(a);
    a.c = b;
    a.Q |= h;
    return a;
  }
  l = this.c[2 * k];
  h = this.c[2 * k + 1];
  if (null == l) {
    return l = h.Wa(a, b + 5, c, d, e, f), l === h ? this : Ng(this, a, 2 * k + 1, l);
  }
  if (Kg(d, l)) {
    return e === h ? this : Ng(this, a, 2 * k + 1, e);
  }
  f.n = !0;
  f = b + 5;
  d = Ug ? Ug(a, f, l, h, c, d, e) : Vg.call(null, a, f, l, h, c, d, e);
  e = 2 * k;
  k = 2 * k + 1;
  a = this.Nb(a);
  a.c[e] = null;
  a.c[k] = d;
  return a;
};
g.Va = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = ne(this.Q & f - 1);
  if (0 === (this.Q & f)) {
    var k = ne(this.Q);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = Sg.Va(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.Q >>> c & 1) && (h[c] = null != this.c[d] ? Sg.Va(a + 5, Uc(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Tg(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    $d(this.c, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    $d(this.c, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.n = !0;
    return new Og(null, this.Q | f, a);
  }
  var l = this.c[2 * h], f = this.c[2 * h + 1];
  if (null == l) {
    return k = f.Va(a + 5, b, c, d, e), k === f ? this : new Og(null, this.Q, Lg(this.c, 2 * h + 1, k));
  }
  if (Kg(c, l)) {
    return d === f ? this : new Og(null, this.Q, Lg(this.c, 2 * h + 1, d));
  }
  e.n = !0;
  e = this.Q;
  k = this.c;
  a += 5;
  a = Wg ? Wg(a, l, f, b, c, d) : Vg.call(null, a, l, f, b, c, d);
  c = 2 * h;
  h = 2 * h + 1;
  d = vb(k);
  d[c] = null;
  d[h] = a;
  return new Og(null, e, d);
};
g.zc = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.Q & d)) {
    return this;
  }
  var e = ne(this.Q & d - 1), f = this.c[2 * e], h = this.c[2 * e + 1];
  return null == f ? (a = h.zc(a + 5, b, c), a === h ? this : null != a ? new Og(null, this.Q, Lg(this.c, 2 * e + 1, a)) : this.Q === d ? null : new Og(null, this.Q ^ d, Mg(this.c, e))) : Kg(c, f) ? new Og(null, this.Q ^ d, Mg(this.c, e)) : this;
};
var Sg = new Og(null, 0, []);
function Tg(a, b, c) {
  this.O = a;
  this.h = b;
  this.c = c;
}
g = Tg.prototype;
g.Nb = function(a) {
  return a === this.O ? this : new Tg(a, this.h, vb(this.c));
};
g.yc = function() {
  var a = this.c;
  return Xg ? Xg(a) : Yg.call(null, a);
};
g.Eb = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.Eb(a + 5, b, c, d) : d;
};
g.Wa = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.c[h];
  if (null == k) {
    return a = Ng(this, a, h, Sg.Wa(a, b + 5, c, d, e, f)), a.h += 1, a;
  }
  b = k.Wa(a, b + 5, c, d, e, f);
  return b === k ? this : Ng(this, a, h, b);
};
g.Va = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.c[f];
  if (null == h) {
    return new Tg(null, this.h + 1, Lg(this.c, f, Sg.Va(a + 5, b, c, d, e)));
  }
  a = h.Va(a + 5, b, c, d, e);
  return a === h ? this : new Tg(null, this.h, Lg(this.c, f, a));
};
g.zc = function(a, b, c) {
  var d = b >>> a & 31, e = this.c[d];
  if (null != e) {
    a = e.zc(a + 5, b, c);
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
                d = new Og(null, h, b);
                break a;
              }
            }
          }
        } else {
          d = new Tg(null, this.h - 1, Lg(this.c, d, a));
        }
      } else {
        d = new Tg(null, this.h, Lg(this.c, d, a));
      }
    }
    return d;
  }
  return this;
};
function Zg(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Kg(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function $g(a, b, c, d) {
  this.O = a;
  this.tb = b;
  this.h = c;
  this.c = d;
}
g = $g.prototype;
g.Nb = function(a) {
  if (a === this.O) {
    return this;
  }
  var b = Array(2 * (this.h + 1));
  $d(this.c, 0, b, 0, 2 * this.h);
  return new $g(a, this.tb, this.h, b);
};
g.yc = function() {
  var a = this.c;
  return Qg ? Qg(a) : Rg.call(null, a);
};
g.Eb = function(a, b, c, d) {
  a = Zg(this.c, this.h, c);
  return 0 > a ? d : Kg(c, this.c[a]) ? this.c[a + 1] : d;
};
g.Wa = function(a, b, c, d, e, f) {
  if (c === this.tb) {
    b = Zg(this.c, this.h, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.h) {
        return b = 2 * this.h, c = 2 * this.h + 1, a = this.Nb(a), a.c[b] = d, a.c[c] = e, f.n = !0, a.h += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      $d(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.n = !0;
      d = this.h + 1;
      a === this.O ? (this.c = b, this.h = d, a = this) : a = new $g(this.O, this.tb, d, b);
      return a;
    }
    return this.c[b + 1] === e ? this : Ng(this, a, b + 1, e);
  }
  return(new Og(a, 1 << (this.tb >>> b & 31), [null, this, null, null])).Wa(a, b, c, d, e, f);
};
g.Va = function(a, b, c, d, e) {
  return b === this.tb ? (a = Zg(this.c, this.h, c), -1 === a ? (a = 2 * this.h, b = Array(a + 2), $d(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.n = !0, new $g(null, this.tb, this.h + 1, b)) : dd.a(this.c[a], d) ? this : new $g(null, this.tb, this.h, Lg(this.c, a + 1, d))) : (new Og(null, 1 << (this.tb >>> a & 31), [null, this])).Va(a, b, c, d, e);
};
g.zc = function(a, b, c) {
  a = Zg(this.c, this.h, c);
  return-1 === a ? this : 1 === this.h ? null : new $g(null, this.tb, this.h - 1, Mg(this.c, me(a)));
};
function Vg() {
  switch(arguments.length) {
    case 6:
      return Wg(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return Ug(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function Wg(a, b, c, d, e, f) {
  var h = Uc(b);
  if (h === d) {
    return new $g(null, h, 2, [b, c, e, f]);
  }
  var k = new Jg;
  return Sg.Va(a, h, b, c, k).Va(a, d, e, f, k);
}
function Ug(a, b, c, d, e, f, h) {
  var k = Uc(c);
  if (k === e) {
    return new $g(null, k, 2, [c, d, f, h]);
  }
  var l = new Jg;
  return Sg.Wa(a, b, k, c, d, l).Wa(a, b, e, f, h, l);
}
function ah(a, b, c, d, e) {
  this.k = a;
  this.Fb = b;
  this.o = c;
  this.F = d;
  this.i = e;
  this.g = 32374860;
  this.r = 0;
}
g = ah.prototype;
g.toString = function() {
  return Lc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.k;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = id(this);
};
g.q = function(a, b) {
  return yd(this, b);
};
g.P = function() {
  return Ad(cd, this.k);
};
g.T = function(a, b) {
  return Bd(b, this);
};
g.U = function(a, b, c) {
  return Dd(b, c, this);
};
g.S = function() {
  return null == this.F ? new T(null, 2, 5, U, [this.Fb[this.o], this.Fb[this.o + 1]], null) : F(this.F);
};
g.X = function() {
  if (null == this.F) {
    var a = this.Fb, b = this.o + 2;
    return bh ? bh(a, b, null) : Rg.call(null, a, b, null);
  }
  var a = this.Fb, b = this.o, c = G(this.F);
  return bh ? bh(a, b, c) : Rg.call(null, a, b, c);
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new ah(b, this.Fb, this.o, this.F, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
ah.prototype[ub] = function() {
  return fd(this);
};
function Rg() {
  switch(arguments.length) {
    case 1:
      return Qg(arguments[0]);
    case 3:
      return bh(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function Qg(a) {
  return bh(a, 0, null);
}
function bh(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new ah(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (v(d) && (d = d.yc(), v(d))) {
          return new ah(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new ah(null, a, b, c, null);
  }
}
function ch(a, b, c, d, e) {
  this.k = a;
  this.Fb = b;
  this.o = c;
  this.F = d;
  this.i = e;
  this.g = 32374860;
  this.r = 0;
}
g = ch.prototype;
g.toString = function() {
  return Lc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.k;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = id(this);
};
g.q = function(a, b) {
  return yd(this, b);
};
g.P = function() {
  return Ad(cd, this.k);
};
g.T = function(a, b) {
  return Bd(b, this);
};
g.U = function(a, b, c) {
  return Dd(b, c, this);
};
g.S = function() {
  return F(this.F);
};
g.X = function() {
  var a = this.Fb, b = this.o, c = G(this.F);
  return dh ? dh(null, a, b, c) : Yg.call(null, null, a, b, c);
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new ch(b, this.Fb, this.o, this.F, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
ch.prototype[ub] = function() {
  return fd(this);
};
function Yg() {
  switch(arguments.length) {
    case 1:
      return Xg(arguments[0]);
    case 4:
      return dh(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function Xg(a) {
  return dh(null, a, 0, null);
}
function dh(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (v(e) && (e = e.yc(), v(e))) {
          return new ch(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new ch(a, b, c, d, null);
  }
}
function eh(a, b, c, d, e, f) {
  this.k = a;
  this.h = b;
  this.root = c;
  this.va = d;
  this.Fa = e;
  this.i = f;
  this.g = 16123663;
  this.r = 8196;
}
g = eh.prototype;
g.toString = function() {
  return Lc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.keys = function() {
  return fd(Cg.b ? Cg.b(this) : Cg.call(null, this));
};
g.entries = function() {
  return wg(D(this));
};
g.values = function() {
  return fd(Dg.b ? Dg.b(this) : Dg.call(null, this));
};
g.has = function(a) {
  return de(this, a);
};
g.get = function(a, b) {
  return this.u(null, a, b);
};
g.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.N(null, e), h = N(f, 0), f = N(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = D(b)) {
        Yd(b) ? (c = Ac(b), b = Bc(b), h = c, d = M(c), c = h) : (c = F(b), h = N(c, 0), c = f = N(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = G(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.w = function(a, b) {
  return Ob.d(this, b, null);
};
g.u = function(a, b, c) {
  return null == b ? this.va ? this.Fa : c : null == this.root ? c : this.root.Eb(0, Uc(b), b, c);
};
g.C = function() {
  return this.k;
};
g.I = function() {
  return this.h;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = kd(this);
};
g.q = function(a, b) {
  return ug(this, b);
};
g.Xb = function() {
  return new fh({}, this.root, this.h, this.va, this.Fa);
};
g.P = function() {
  return fc(Gg, this.k);
};
g.Ca = function(a, b) {
  if (null == b) {
    return this.va ? new eh(this.k, this.h - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.zc(0, Uc(b), b);
  return c === this.root ? this : new eh(this.k, this.h - 1, c, this.va, this.Fa, null);
};
g.ra = function(a, b, c) {
  if (null == b) {
    return this.va && c === this.Fa ? this : new eh(this.k, this.va ? this.h : this.h + 1, this.root, !0, c, null);
  }
  a = new Jg;
  b = (null == this.root ? Sg : this.root).Va(0, Uc(b), b, c, a);
  return b === this.root ? this : new eh(this.k, a.n ? this.h + 1 : this.h, b, this.va, this.Fa, null);
};
g.Hc = function(a, b) {
  return null == b ? this.va : null == this.root ? !1 : this.root.Eb(0, Uc(b), b, ae) !== ae;
};
g.H = function() {
  if (0 < this.h) {
    var a = null != this.root ? this.root.yc() : null;
    return this.va ? J(new T(null, 2, 5, U, [null, this.Fa], null), a) : a;
  }
  return null;
};
g.D = function(a, b) {
  return new eh(b, this.h, this.root, this.va, this.Fa, this.i);
};
g.G = function(a, b) {
  if (Xd(b)) {
    return Qb(this, C.a(b, 0), C.a(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (Xd(e)) {
      c = Qb(c, C.a(e, 0), C.a(e, 1)), d = G(d);
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
  return this.call.apply(this, [this].concat(vb(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
var Gg = new eh(null, 0, null, !1, null, ld);
function Ld(a, b) {
  for (var c = a.length, d = 0, e = tc(Gg);;) {
    if (d < c) {
      var f = d + 1, e = e.sc(null, a[d], b[d]), d = f
    } else {
      return wc(e);
    }
  }
}
eh.prototype[ub] = function() {
  return fd(this);
};
function fh(a, b, c, d, e) {
  this.O = a;
  this.root = b;
  this.count = c;
  this.va = d;
  this.Fa = e;
  this.g = 258;
  this.r = 56;
}
function gh(a, b) {
  if (a.O) {
    if (b ? b.g & 2048 || b.de || (b.g ? 0 : x(Tb, b)) : x(Tb, b)) {
      return hh(a, qe.b ? qe.b(b) : qe.call(null, b), re.b ? re.b(b) : re.call(null, b));
    }
    for (var c = D(b), d = a;;) {
      var e = F(c);
      if (v(e)) {
        var f = e, c = G(c), d = hh(d, function() {
          var a = f;
          return qe.b ? qe.b(a) : qe.call(null, a);
        }(), function() {
          var a = f;
          return re.b ? re.b(a) : re.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function hh(a, b, c) {
  if (a.O) {
    if (null == b) {
      a.Fa !== c && (a.Fa = c), a.va || (a.count += 1, a.va = !0);
    } else {
      var d = new Jg;
      b = (null == a.root ? Sg : a.root).Wa(a.O, 0, Uc(b), b, c, d);
      b !== a.root && (a.root = b);
      d.n && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
g = fh.prototype;
g.I = function() {
  if (this.O) {
    return this.count;
  }
  throw Error("count after persistent!");
};
g.w = function(a, b) {
  return null == b ? this.va ? this.Fa : null : null == this.root ? null : this.root.Eb(0, Uc(b), b);
};
g.u = function(a, b, c) {
  return null == b ? this.va ? this.Fa : c : null == this.root ? c : this.root.Eb(0, Uc(b), b, c);
};
g.Kb = function(a, b) {
  return gh(this, b);
};
g.Lb = function() {
  var a;
  if (this.O) {
    this.O = null, a = new eh(null, this.count, this.root, this.va, this.Fa, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.sc = function(a, b, c) {
  return hh(this, b, c);
};
function ih(a, b, c) {
  for (var d = b;;) {
    if (null != a) {
      b = c ? a.left : a.right, d = Fd.a(d, a), a = b;
    } else {
      return d;
    }
  }
}
function jh(a, b, c, d, e) {
  this.k = a;
  this.stack = b;
  this.Cc = c;
  this.h = d;
  this.i = e;
  this.g = 32374862;
  this.r = 0;
}
g = jh.prototype;
g.toString = function() {
  return Lc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.k;
};
g.I = function() {
  return 0 > this.h ? M(G(this)) + 1 : this.h;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = id(this);
};
g.q = function(a, b) {
  return yd(this, b);
};
g.P = function() {
  return Ad(cd, this.k);
};
g.T = function(a, b) {
  return Bd(b, this);
};
g.U = function(a, b, c) {
  return Dd(b, c, this);
};
g.S = function() {
  return Rd(this.stack);
};
g.X = function() {
  var a = F(this.stack), a = ih(this.Cc ? a.right : a.left, G(this.stack), this.Cc);
  return null != a ? new jh(null, a, this.Cc, this.h - 1, null) : cd;
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new jh(b, this.stack, this.Cc, this.h, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
jh.prototype[ub] = function() {
  return fd(this);
};
function kh(a, b, c) {
  return new jh(null, ih(a, null, b), b, c, null);
}
function lh(a, b, c, d) {
  return c instanceof V ? c.left instanceof V ? new V(c.key, c.n, c.left.sb(), new mh(a, b, c.right, d, null), null) : c.right instanceof V ? new V(c.right.key, c.right.n, new mh(c.key, c.n, c.left, c.right.left, null), new mh(a, b, c.right.right, d, null), null) : new mh(a, b, c, d, null) : new mh(a, b, c, d, null);
}
function nh(a, b, c, d) {
  return d instanceof V ? d.right instanceof V ? new V(d.key, d.n, new mh(a, b, c, d.left, null), d.right.sb(), null) : d.left instanceof V ? new V(d.left.key, d.left.n, new mh(a, b, c, d.left.left, null), new mh(d.key, d.n, d.left.right, d.right, null), null) : new mh(a, b, c, d, null) : new mh(a, b, c, d, null);
}
function oh(a, b, c, d) {
  if (c instanceof V) {
    return new V(a, b, c.sb(), d, null);
  }
  if (d instanceof mh) {
    return nh(a, b, c, d.Bc());
  }
  if (d instanceof V && d.left instanceof mh) {
    return new V(d.left.key, d.left.n, new mh(a, b, c, d.left.left, null), nh(d.key, d.n, d.left.right, d.right.Bc()), null);
  }
  throw Error("red-black tree invariant violation");
}
function mh(a, b, c, d, e) {
  this.key = a;
  this.n = b;
  this.left = c;
  this.right = d;
  this.i = e;
  this.g = 32402207;
  this.r = 0;
}
g = mh.prototype;
g.md = function(a) {
  return a.od(this);
};
g.Bc = function() {
  return new V(this.key, this.n, this.left, this.right, null);
};
g.sb = function() {
  return this;
};
g.ld = function(a) {
  return a.nd(this);
};
g.replace = function(a, b, c, d) {
  return new mh(a, b, c, d, null);
};
g.nd = function(a) {
  return new mh(a.key, a.n, this, a.right, null);
};
g.od = function(a) {
  return new mh(a.key, a.n, a.left, this, null);
};
g.w = function(a, b) {
  return C.d(this, b, null);
};
g.u = function(a, b, c) {
  return C.d(this, b, c);
};
g.N = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.n : null;
};
g.ua = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.n : c;
};
g.Mb = function(a, b, c) {
  return(new T(null, 2, 5, U, [this.key, this.n], null)).Mb(null, b, c);
};
g.C = function() {
  return null;
};
g.I = function() {
  return 2;
};
g.nc = function() {
  return this.key;
};
g.oc = function() {
  return this.n;
};
g.Bb = function() {
  return this.n;
};
g.Cb = function() {
  return new T(null, 1, 5, U, [this.key], null);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = id(this);
};
g.q = function(a, b) {
  return yd(this, b);
};
g.P = function() {
  return Gd;
};
g.T = function(a, b) {
  return pd(this, b);
};
g.U = function(a, b, c) {
  return qd(this, b, c);
};
g.ra = function(a, b, c) {
  return O.d(new T(null, 2, 5, U, [this.key, this.n], null), b, c);
};
g.H = function() {
  return Hb(Hb(cd, this.n), this.key);
};
g.D = function(a, b) {
  return Ad(new T(null, 2, 5, U, [this.key, this.n], null), b);
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
  return this.call.apply(this, [this].concat(vb(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
mh.prototype[ub] = function() {
  return fd(this);
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
g.md = function(a) {
  return new V(this.key, this.n, this.left, a, null);
};
g.Bc = function() {
  throw Error("red-black tree invariant violation");
};
g.sb = function() {
  return new mh(this.key, this.n, this.left, this.right, null);
};
g.ld = function(a) {
  return new V(this.key, this.n, a, this.right, null);
};
g.replace = function(a, b, c, d) {
  return new V(a, b, c, d, null);
};
g.nd = function(a) {
  return this.left instanceof V ? new V(this.key, this.n, this.left.sb(), new mh(a.key, a.n, this.right, a.right, null), null) : this.right instanceof V ? new V(this.right.key, this.right.n, new mh(this.key, this.n, this.left, this.right.left, null), new mh(a.key, a.n, this.right.right, a.right, null), null) : new mh(a.key, a.n, this, a.right, null);
};
g.od = function(a) {
  return this.right instanceof V ? new V(this.key, this.n, new mh(a.key, a.n, a.left, this.left, null), this.right.sb(), null) : this.left instanceof V ? new V(this.left.key, this.left.n, new mh(a.key, a.n, a.left, this.left.left, null), new mh(this.key, this.n, this.left.right, this.right, null), null) : new mh(a.key, a.n, a.left, this, null);
};
g.w = function(a, b) {
  return C.d(this, b, null);
};
g.u = function(a, b, c) {
  return C.d(this, b, c);
};
g.N = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.n : null;
};
g.ua = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.n : c;
};
g.Mb = function(a, b, c) {
  return(new T(null, 2, 5, U, [this.key, this.n], null)).Mb(null, b, c);
};
g.C = function() {
  return null;
};
g.I = function() {
  return 2;
};
g.nc = function() {
  return this.key;
};
g.oc = function() {
  return this.n;
};
g.Bb = function() {
  return this.n;
};
g.Cb = function() {
  return new T(null, 1, 5, U, [this.key], null);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = id(this);
};
g.q = function(a, b) {
  return yd(this, b);
};
g.P = function() {
  return Gd;
};
g.T = function(a, b) {
  return pd(this, b);
};
g.U = function(a, b, c) {
  return qd(this, b, c);
};
g.ra = function(a, b, c) {
  return O.d(new T(null, 2, 5, U, [this.key, this.n], null), b, c);
};
g.H = function() {
  return Hb(Hb(cd, this.n), this.key);
};
g.D = function(a, b) {
  return Ad(new T(null, 2, 5, U, [this.key, this.n], null), b);
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
  return this.call.apply(this, [this].concat(vb(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
V.prototype[ub] = function() {
  return fd(this);
};
var ph = function ph(b, c, d, e, f) {
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
    return b = ph(b, c.left, d, e, f), null != b ? c.ld(b) : null;
  }
  b = ph(b, c.right, d, e, f);
  return null != b ? c.md(b) : null;
}, qh = function qh(b, c) {
  if (null == b) {
    return c;
  }
  if (null == c) {
    return b;
  }
  if (b instanceof V) {
    if (c instanceof V) {
      var d = qh(b.right, c.left);
      return d instanceof V ? new V(d.key, d.n, new V(b.key, b.n, b.left, d.left, null), new V(c.key, c.n, d.right, c.right, null), null) : new V(b.key, b.n, b.left, new V(c.key, c.n, d, c.right, null), null);
    }
    return new V(b.key, b.n, b.left, qh(b.right, c), null);
  }
  if (c instanceof V) {
    return new V(c.key, c.n, qh(b, c.left), c.right, null);
  }
  d = qh(b.right, c.left);
  return d instanceof V ? new V(d.key, d.n, new mh(b.key, b.n, b.left, d.left, null), new mh(c.key, c.n, d.right, c.right, null), null) : oh(b.key, b.n, b.left, new mh(c.key, c.n, d, c.right, null));
}, rh = function rh(b, c, d, e) {
  if (null != c) {
    var f;
    f = c.key;
    f = b.a ? b.a(d, f) : b.call(null, d, f);
    if (0 === f) {
      return e[0] = c, qh(c.left, c.right);
    }
    if (0 > f) {
      return b = rh(b, c.left, d, e), null != b || null != e[0] ? c.left instanceof mh ? oh(c.key, c.n, b, c.right) : new V(c.key, c.n, b, c.right, null) : null;
    }
    b = rh(b, c.right, d, e);
    if (null != b || null != e[0]) {
      if (c.right instanceof mh) {
        if (e = c.key, d = c.n, c = c.left, b instanceof V) {
          c = new V(e, d, c, b.sb(), null);
        } else {
          if (c instanceof mh) {
            c = lh(e, d, c.Bc(), b);
          } else {
            if (c instanceof V && c.right instanceof mh) {
              c = new V(c.right.key, c.right.n, lh(c.key, c.n, c.left.Bc(), c.right.left), new mh(e, d, c.right.right, b, null), null);
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
}, sh = function sh(b, c, d, e) {
  var f = c.key, h = b.a ? b.a(d, f) : b.call(null, d, f);
  return 0 === h ? c.replace(f, e, c.left, c.right) : 0 > h ? c.replace(f, c.n, sh(b, c.left, d, e), c.right) : c.replace(f, c.n, c.left, sh(b, c.right, d, e));
};
function th(a, b, c, d, e) {
  this.Ma = a;
  this.xa = b;
  this.h = c;
  this.k = d;
  this.i = e;
  this.g = 418776847;
  this.r = 8192;
}
g = th.prototype;
g.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.N(null, e), h = N(f, 0), f = N(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = D(b)) {
        Yd(b) ? (c = Ac(b), b = Bc(b), h = c, d = M(c), c = h) : (c = F(b), h = N(c, 0), c = f = N(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = G(b), c = null, d = 0), e = 0;
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
  return wg(D(this));
};
g.toString = function() {
  return Lc(this);
};
g.keys = function() {
  return fd(Cg.b ? Cg.b(this) : Cg.call(null, this));
};
g.values = function() {
  return fd(Dg.b ? Dg.b(this) : Dg.call(null, this));
};
g.equiv = function(a) {
  return this.q(null, a);
};
function uh(a, b) {
  for (var c = a.xa;;) {
    if (null != c) {
      var d;
      d = c.key;
      d = a.Ma.a ? a.Ma.a(b, d) : a.Ma.call(null, b, d);
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
  return de(this, a);
};
g.w = function(a, b) {
  return Ob.d(this, b, null);
};
g.u = function(a, b, c) {
  a = uh(this, b);
  return null != a ? a.n : c;
};
g.C = function() {
  return this.k;
};
g.I = function() {
  return this.h;
};
g.Yb = function() {
  return 0 < this.h ? kh(this.xa, !1, this.h) : null;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = kd(this);
};
g.q = function(a, b) {
  return ug(this, b);
};
g.P = function() {
  return new th(this.Ma, null, 0, this.k, 0);
};
g.Ca = function(a, b) {
  var c = [null], d = rh(this.Ma, this.xa, b, c);
  return null == d ? null == Id(c, 0) ? this : new th(this.Ma, null, 0, this.k, null) : new th(this.Ma, d.sb(), this.h - 1, this.k, null);
};
g.ra = function(a, b, c) {
  a = [null];
  var d = ph(this.Ma, this.xa, b, c, a);
  return null == d ? (a = Id(a, 0), dd.a(c, a.n) ? this : new th(this.Ma, sh(this.Ma, this.xa, b, c), this.h, this.k, null)) : new th(this.Ma, d.sb(), this.h + 1, this.k, null);
};
g.Hc = function(a, b) {
  return null != uh(this, b);
};
g.H = function() {
  return 0 < this.h ? kh(this.xa, !0, this.h) : null;
};
g.D = function(a, b) {
  return new th(this.Ma, this.xa, this.h, b, this.i);
};
g.G = function(a, b) {
  if (Xd(b)) {
    return Qb(this, C.a(b, 0), C.a(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (Xd(e)) {
      c = Qb(c, C.a(e, 0), C.a(e, 1)), d = G(d);
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
  return this.call.apply(this, [this].concat(vb(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
var vh = new th(ee, null, 0, null, ld);
th.prototype[ub] = function() {
  return fd(this);
};
var uf = function uf() {
  return uf.l(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
};
uf.l = function(a) {
  for (var b = D(a), c = tc(Gg);;) {
    if (b) {
      a = G(G(b));
      var d = F(b), b = F(G(b)), c = xc(c, d, b), b = a;
    } else {
      return wc(c);
    }
  }
};
uf.v = 0;
uf.t = function(a) {
  return uf.l(D(a));
};
function wh(a, b) {
  this.sa = a;
  this.ta = b;
  this.g = 32374988;
  this.r = 0;
}
g = wh.prototype;
g.toString = function() {
  return Lc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.ta;
};
g.la = function() {
  var a = this.sa, a = (a ? a.g & 128 || a.Jc || (a.g ? 0 : x(Mb, a)) : x(Mb, a)) ? this.sa.la(null) : G(this.sa);
  return null == a ? null : new wh(a, this.ta);
};
g.B = function() {
  return id(this);
};
g.q = function(a, b) {
  return yd(this, b);
};
g.P = function() {
  return Ad(cd, this.ta);
};
g.T = function(a, b) {
  return Bd(b, this);
};
g.U = function(a, b, c) {
  return Dd(b, c, this);
};
g.S = function() {
  return this.sa.S(null).nc(null);
};
g.X = function() {
  var a = this.sa, a = (a ? a.g & 128 || a.Jc || (a.g ? 0 : x(Mb, a)) : x(Mb, a)) ? this.sa.la(null) : G(this.sa);
  return null != a ? new wh(a, this.ta) : cd;
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new wh(this.sa, b);
};
g.G = function(a, b) {
  return J(b, this);
};
wh.prototype[ub] = function() {
  return fd(this);
};
function Cg(a) {
  return(a = D(a)) ? new wh(a, null) : null;
}
function qe(a) {
  return Ub(a);
}
function xh(a, b) {
  this.sa = a;
  this.ta = b;
  this.g = 32374988;
  this.r = 0;
}
g = xh.prototype;
g.toString = function() {
  return Lc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.ta;
};
g.la = function() {
  var a = this.sa, a = (a ? a.g & 128 || a.Jc || (a.g ? 0 : x(Mb, a)) : x(Mb, a)) ? this.sa.la(null) : G(this.sa);
  return null == a ? null : new xh(a, this.ta);
};
g.B = function() {
  return id(this);
};
g.q = function(a, b) {
  return yd(this, b);
};
g.P = function() {
  return Ad(cd, this.ta);
};
g.T = function(a, b) {
  return Bd(b, this);
};
g.U = function(a, b, c) {
  return Dd(b, c, this);
};
g.S = function() {
  return this.sa.S(null).oc(null);
};
g.X = function() {
  var a = this.sa, a = (a ? a.g & 128 || a.Jc || (a.g ? 0 : x(Mb, a)) : x(Mb, a)) ? this.sa.la(null) : G(this.sa);
  return null != a ? new xh(a, this.ta) : cd;
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new xh(this.sa, b);
};
g.G = function(a, b) {
  return J(b, this);
};
xh.prototype[ub] = function() {
  return fd(this);
};
function Dg(a) {
  return(a = D(a)) ? new xh(a, null) : null;
}
function re(a) {
  return Vb(a);
}
var yh = function yh() {
  return yh.l(arguments[0], 1 < arguments.length ? new E(Array.prototype.slice.call(arguments, 1), 0) : null);
};
yh.l = function(a, b) {
  return v(hf(he, b)) ? ge(function(a) {
    return function(b, e) {
      return zb(a, v(b) ? b : Xe, D(e));
    };
  }(function(b, d) {
    var e = F(d), f = F(G(d));
    return de(b, e) ? O.d(b, e, function() {
      var d = Jd(b, e);
      return a.a ? a.a(d, f) : a.call(null, d, f);
    }()) : O.d(b, e, f);
  }), b) : null;
};
yh.v = 1;
yh.t = function(a) {
  var b = F(a);
  a = G(a);
  return yh.l(b, a);
};
function zh(a, b, c) {
  this.k = a;
  this.Qb = b;
  this.i = c;
  this.g = 15077647;
  this.r = 8196;
}
g = zh.prototype;
g.toString = function() {
  return Lc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.keys = function() {
  return fd(D(this));
};
g.entries = function() {
  return yg(D(this));
};
g.values = function() {
  return fd(D(this));
};
g.has = function(a) {
  return de(this, a);
};
g.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.N(null, e), h = N(f, 0), f = N(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = D(b)) {
        Yd(b) ? (c = Ac(b), b = Bc(b), h = c, d = M(c), c = h) : (c = F(b), h = N(c, 0), c = f = N(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = G(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.w = function(a, b) {
  return Ob.d(this, b, null);
};
g.u = function(a, b, c) {
  return Pb(this.Qb, b) ? b : c;
};
g.C = function() {
  return this.k;
};
g.I = function() {
  return Eb(this.Qb);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = kd(this);
};
g.q = function(a, b) {
  return Ud(b) && M(this) === M(b) && gf(function(a) {
    return function(b) {
      return de(a, b);
    };
  }(this), b);
};
g.Xb = function() {
  return new Ah(tc(this.Qb));
};
g.P = function() {
  return Ad(Bh, this.k);
};
g.Yc = function(a, b) {
  return new zh(this.k, Sb(this.Qb, b), null);
};
g.H = function() {
  return Cg(this.Qb);
};
g.D = function(a, b) {
  return new zh(b, this.Qb, this.i);
};
g.G = function(a, b) {
  return new zh(this.k, O.d(this.Qb, b, null), null);
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
  return this.call.apply(this, [this].concat(vb(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
var Bh = new zh(null, Xe, ld);
function Ch(a) {
  var b = a.length;
  if (b <= Fg) {
    for (var c = 0, d = tc(Xe);;) {
      if (c < b) {
        var e = c + 1, d = xc(d, a[c], null), c = e
      } else {
        return new zh(null, wc(d), null);
      }
    }
  } else {
    for (c = 0, d = tc(Bh);;) {
      if (c < b) {
        e = c + 1, d = vc(d, a[c]), c = e;
      } else {
        return wc(d);
      }
    }
  }
}
zh.prototype[ub] = function() {
  return fd(this);
};
function Ah(a) {
  this.yb = a;
  this.r = 136;
  this.g = 259;
}
g = Ah.prototype;
g.Kb = function(a, b) {
  this.yb = xc(this.yb, b, null);
  return this;
};
g.Lb = function() {
  return new zh(null, wc(this.yb), null);
};
g.I = function() {
  return M(this.yb);
};
g.w = function(a, b) {
  return Ob.d(this, b, null);
};
g.u = function(a, b, c) {
  return Ob.d(this.yb, b, ae) === ae ? c : b;
};
g.call = function() {
  function a(a, b, c) {
    return Ob.d(this.yb, b, ae) === ae ? c : b;
  }
  function b(a, b) {
    return Ob.d(this.yb, b, ae) === ae ? null : b;
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
  return this.call.apply(this, [this].concat(vb(b)));
};
g.b = function(a) {
  return Ob.d(this.yb, a, ae) === ae ? null : a;
};
g.a = function(a, b) {
  return Ob.d(this.yb, a, ae) === ae ? b : a;
};
function Dh(a, b, c) {
  this.k = a;
  this.zb = b;
  this.i = c;
  this.g = 417730831;
  this.r = 8192;
}
g = Dh.prototype;
g.toString = function() {
  return Lc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.keys = function() {
  return fd(D(this));
};
g.entries = function() {
  return yg(D(this));
};
g.values = function() {
  return fd(D(this));
};
g.has = function(a) {
  return de(this, a);
};
g.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.N(null, e), h = N(f, 0), f = N(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = D(b)) {
        Yd(b) ? (c = Ac(b), b = Bc(b), h = c, d = M(c), c = h) : (c = F(b), h = N(c, 0), c = f = N(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = G(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.w = function(a, b) {
  return Ob.d(this, b, null);
};
g.u = function(a, b, c) {
  a = uh(this.zb, b);
  return null != a ? a.key : c;
};
g.C = function() {
  return this.k;
};
g.I = function() {
  return M(this.zb);
};
g.Yb = function() {
  return 0 < M(this.zb) ? S.a(qe, oc(this.zb)) : null;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = kd(this);
};
g.q = function(a, b) {
  return Ud(b) && M(this) === M(b) && gf(function(a) {
    return function(b) {
      return de(a, b);
    };
  }(this), b);
};
g.P = function() {
  return new Dh(this.k, Fb(this.zb), 0);
};
g.Yc = function(a, b) {
  return new Dh(this.k, Md.a(this.zb, b), null);
};
g.H = function() {
  return Cg(this.zb);
};
g.D = function(a, b) {
  return new Dh(b, this.zb, this.i);
};
g.G = function(a, b) {
  return new Dh(this.k, O.d(this.zb, b, null), null);
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
  return this.call.apply(this, [this].concat(vb(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
var Eh = new Dh(null, vh, ld);
Dh.prototype[ub] = function() {
  return fd(this);
};
function Fh(a) {
  a = D(a);
  if (null == a) {
    return Bh;
  }
  if (a instanceof E && 0 === a.o) {
    a = a.c;
    a: {
      for (var b = 0, c = tc(Bh);;) {
        if (b < a.length) {
          var d = b + 1, c = c.Kb(null, a[b]), b = d
        } else {
          break a;
        }
      }
    }
    return c.Lb(null);
  }
  for (d = tc(Bh);;) {
    if (null != a) {
      b = a.la(null), d = d.Kb(null, a.S(null)), a = b;
    } else {
      return d.Lb(null);
    }
  }
}
function Gh() {
  return zb(Hb, Eh, 0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
}
function Ae(a) {
  if (a && (a.r & 4096 || a.fe)) {
    return a.pc(null);
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([B("Doesn't support name: "), B(a)].join(""));
}
function Hh(a, b) {
  for (var c = tc(Xe), d = D(a), e = D(b);;) {
    if (d && e) {
      var f = F(d), h = F(e), c = xc(c, f, h), d = G(d), e = G(e)
    } else {
      return wc(c);
    }
  }
}
var Ih = function Ih() {
  switch(arguments.length) {
    case 2:
      return Ih.a(arguments[0], arguments[1]);
    case 3:
      return Ih.d(arguments[0], arguments[1], arguments[2]);
    default:
      return Ih.l(arguments[0], arguments[1], arguments[2], new E(Array.prototype.slice.call(arguments, 3), 0));
  }
};
Ih.a = function(a, b) {
  return b;
};
Ih.d = function(a, b, c) {
  return(a.b ? a.b(b) : a.call(null, b)) > (a.b ? a.b(c) : a.call(null, c)) ? b : c;
};
Ih.l = function(a, b, c, d) {
  return zb(function(b, c) {
    return Ih.d(a, b, c);
  }, Ih.d(a, b, c), d);
};
Ih.t = function(a) {
  var b = F(a), c = G(a);
  a = F(c);
  var d = G(c), c = F(d), d = G(d);
  return Ih.l(b, a, c, d);
};
Ih.v = 3;
function Jh(a, b) {
  return new Be(null, function() {
    var c = D(b);
    if (c) {
      var d;
      d = F(c);
      d = a.b ? a.b(d) : a.call(null, d);
      c = v(d) ? J(F(c), Jh(a, bd(c))) : null;
    } else {
      c = null;
    }
    return c;
  }, null, null);
}
function Kh(a, b, c) {
  this.o = a;
  this.end = b;
  this.step = c;
}
Kh.prototype.eb = function() {
  return 0 < this.step ? this.o < this.end : this.o > this.end;
};
Kh.prototype.next = function() {
  var a = this.o;
  this.o += this.step;
  return a;
};
function Lh(a, b, c, d, e) {
  this.k = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.i = e;
  this.g = 32375006;
  this.r = 8192;
}
g = Lh.prototype;
g.toString = function() {
  return Lc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.N = function(a, b) {
  if (b < Eb(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
g.ua = function(a, b, c) {
  return b < Eb(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
g.Ic = !0;
g.mc = function() {
  return new Kh(this.start, this.end, this.step);
};
g.C = function() {
  return this.k;
};
g.la = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Lh(this.k, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new Lh(this.k, this.start + this.step, this.end, this.step, null) : null;
};
g.I = function() {
  if (rb(lc(this))) {
    return 0;
  }
  var a = (this.end - this.start) / this.step;
  return Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = id(this);
};
g.q = function(a, b) {
  return yd(this, b);
};
g.P = function() {
  return Ad(cd, this.k);
};
g.T = function(a, b) {
  return pd(this, b);
};
g.U = function(a, b, c) {
  for (a = this.start;;) {
    if (0 < this.step ? a < this.end : a > this.end) {
      var d = a;
      c = b.a ? b.a(c, d) : b.call(null, c, d);
      if (od(c)) {
        return b = c, I.b ? I.b(b) : I.call(null, b);
      }
      a += this.step;
    } else {
      return c;
    }
  }
};
g.S = function() {
  return null == lc(this) ? null : this.start;
};
g.X = function() {
  return null != lc(this) ? new Lh(this.k, this.start + this.step, this.end, this.step, null) : cd;
};
g.H = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
g.D = function(a, b) {
  return new Lh(b, this.start, this.end, this.step, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
Lh.prototype[ub] = function() {
  return fd(this);
};
function Mh(a) {
  var b = Nh;
  if ("string" === typeof a) {
    return b = b.exec(a), dd.a(F(b), a) ? 1 === M(b) ? F(b) : fg(b) : null;
  }
  throw new TypeError("re-matches must match against a string.");
}
function Oh(a) {
  if (!(a instanceof RegExp)) {
    var b = /^\(\?([idmsux]*)\)/;
    if ("string" === typeof a) {
      a = b.exec(a), a = null == a ? null : 1 === M(a) ? F(a) : fg(a);
    } else {
      throw new TypeError("re-find must match against a string.");
    }
    b = N(a, 0);
    N(a, 1);
    M(b);
  }
}
function Ph(a, b, c, d, e, f, h) {
  var k = fb;
  fb = null == fb ? null : fb - 1;
  try {
    if (null != fb && 0 > fb) {
      return pc(a, "#");
    }
    pc(a, c);
    if (0 === ob.b(f)) {
      D(h) && pc(a, function() {
        var a = Qh.b(f);
        return v(a) ? a : "...";
      }());
    } else {
      if (D(h)) {
        var l = F(h);
        b.d ? b.d(l, a, f) : b.call(null, l, a, f);
      }
      for (var m = G(h), p = ob.b(f) - 1;;) {
        if (!m || null != p && 0 === p) {
          D(m) && 0 === p && (pc(a, d), pc(a, function() {
            var a = Qh.b(f);
            return v(a) ? a : "...";
          }()));
          break;
        } else {
          pc(a, d);
          var q = F(m);
          c = a;
          h = f;
          b.d ? b.d(q, c, h) : b.call(null, q, c, h);
          var r = G(m);
          c = p - 1;
          m = r;
          p = c;
        }
      }
    }
    return pc(a, e);
  } finally {
    fb = k;
  }
}
function Rh(a, b) {
  for (var c = D(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.N(null, f);
      pc(a, h);
      f += 1;
    } else {
      if (c = D(c)) {
        d = c, Yd(d) ? (c = Ac(d), e = Bc(d), d = c, h = M(c), c = e, e = h) : (h = F(d), pc(a, h), c = G(d), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
var Sh = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Th(a) {
  return[B('"'), B(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Sh[a];
  })), B('"')].join("");
}
function Uh(a, b, c) {
  if (null == a) {
    return pc(b, "nil");
  }
  if (void 0 === a) {
    return pc(b, "#\x3cundefined\x3e");
  }
  if (v(function() {
    var b = Jd(c, mb);
    return v(b) ? (b = a ? a.g & 131072 || a.ee ? !0 : a.g ? !1 : x(cc, a) : x(cc, a)) ? Qd(a) : b : b;
  }())) {
    pc(b, "^");
    var d = Qd(a);
    W.d ? W.d(d, b, c) : W.call(null, d, b, c);
    pc(b, " ");
  }
  return null == a ? pc(b, "nil") : a.cc ? a.uc(a, b, c) : a && (a.g & 2147483648 || a.M) ? a.A(null, b, c) : sb(a) === Boolean || "number" === typeof a ? pc(b, "" + B(a)) : null != a && a.constructor === Object ? (pc(b, "#js "), d = S.a(function(b) {
    return new T(null, 2, 5, U, [ze.b(b), a[b]], null);
  }, Zd(a)), Vh.s ? Vh.s(d, W, b, c) : Vh.call(null, d, W, b, c)) : qb(a) ? Ph(b, W, "#js [", " ", "]", c, a) : v(fa(a)) ? v(lb.b(c)) ? pc(b, Th(a)) : pc(b, a) : Nd(a) ? Rh(b, L(["#\x3c", "" + B(a), "\x3e"], 0)) : a instanceof Date ? (d = function(a, b) {
    for (var c = "" + B(a);;) {
      if (M(c) < b) {
        c = [B("0"), B(c)].join("");
      } else {
        return c;
      }
    }
  }, Rh(b, L(['#inst "', "" + B(a.getUTCFullYear()), "-", d(a.getUTCMonth() + 1, 2), "-", d(a.getUTCDate(), 2), "T", d(a.getUTCHours(), 2), ":", d(a.getUTCMinutes(), 2), ":", d(a.getUTCSeconds(), 2), ".", d(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : v(a instanceof RegExp) ? Rh(b, L(['#"', a.source, '"'], 0)) : (a ? a.g & 2147483648 || a.M || (a.g ? 0 : x(qc, a)) : x(qc, a)) ? rc(a, b, c) : Rh(b, L(["#\x3c", "" + B(a), "\x3e"], 0));
}
function W(a, b, c) {
  var d = Wh.b(c);
  return v(d) ? (c = O.d(c, Xh, Uh), d.d ? d.d(a, b, c) : d.call(null, a, b, c)) : Uh(a, b, c);
}
function xf() {
  return Yh(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
}
function Yh(a) {
  var b = hb();
  if (Td(a)) {
    b = "";
  } else {
    var c = B, d = new Ra;
    a: {
      var e = new Kc(d);
      W(F(a), e, b);
      a = D(G(a));
      for (var f = null, h = 0, k = 0;;) {
        if (k < h) {
          var l = f.N(null, k);
          pc(e, " ");
          W(l, e, b);
          k += 1;
        } else {
          if (a = D(a)) {
            f = a, Yd(f) ? (a = Ac(f), h = Bc(f), f = a, l = M(a), a = h, h = l) : (l = F(f), pc(e, " "), W(l, e, b), a = G(f), f = null, h = 0), k = 0;
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
function Vh(a, b, c, d) {
  return Ph(c, function(a, c, d) {
    var k = Ub(a);
    b.d ? b.d(k, c, d) : b.call(null, k, c, d);
    pc(c, " ");
    a = Vb(a);
    return b.d ? b.d(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, D(a));
}
yf.prototype.M = !0;
yf.prototype.A = function(a, b, c) {
  pc(b, "#\x3cVolatile: ");
  W(this.state, b, c);
  return pc(b, "\x3e");
};
E.prototype.M = !0;
E.prototype.A = function(a, b, c) {
  return Ph(b, W, "(", " ", ")", c, this);
};
Be.prototype.M = !0;
Be.prototype.A = function(a, b, c) {
  return Ph(b, W, "(", " ", ")", c, this);
};
jh.prototype.M = !0;
jh.prototype.A = function(a, b, c) {
  return Ph(b, W, "(", " ", ")", c, this);
};
ah.prototype.M = !0;
ah.prototype.A = function(a, b, c) {
  return Ph(b, W, "(", " ", ")", c, this);
};
mh.prototype.M = !0;
mh.prototype.A = function(a, b, c) {
  return Ph(b, W, "[", " ", "]", c, this);
};
Ag.prototype.M = !0;
Ag.prototype.A = function(a, b, c) {
  return Ph(b, W, "(", " ", ")", c, this);
};
Dh.prototype.M = !0;
Dh.prototype.A = function(a, b, c) {
  return Ph(b, W, "#{", " ", "}", c, this);
};
hg.prototype.M = !0;
hg.prototype.A = function(a, b, c) {
  return Ph(b, W, "(", " ", ")", c, this);
};
xe.prototype.M = !0;
xe.prototype.A = function(a, b, c) {
  return Ph(b, W, "(", " ", ")", c, this);
};
xd.prototype.M = !0;
xd.prototype.A = function(a, b, c) {
  return Ph(b, W, "(", " ", ")", c, this);
};
eh.prototype.M = !0;
eh.prototype.A = function(a, b, c) {
  return Vh(this, W, b, c);
};
ch.prototype.M = !0;
ch.prototype.A = function(a, b, c) {
  return Ph(b, W, "(", " ", ")", c, this);
};
lg.prototype.M = !0;
lg.prototype.A = function(a, b, c) {
  return Ph(b, W, "[", " ", "]", c, this);
};
th.prototype.M = !0;
th.prototype.A = function(a, b, c) {
  return Vh(this, W, b, c);
};
zh.prototype.M = !0;
zh.prototype.A = function(a, b, c) {
  return Ph(b, W, "#{", " ", "}", c, this);
};
Fe.prototype.M = !0;
Fe.prototype.A = function(a, b, c) {
  return Ph(b, W, "(", " ", ")", c, this);
};
rf.prototype.M = !0;
rf.prototype.A = function(a, b, c) {
  pc(b, "#\x3cAtom: ");
  W(this.state, b, c);
  return pc(b, "\x3e");
};
xh.prototype.M = !0;
xh.prototype.A = function(a, b, c) {
  return Ph(b, W, "(", " ", ")", c, this);
};
V.prototype.M = !0;
V.prototype.A = function(a, b, c) {
  return Ph(b, W, "[", " ", "]", c, this);
};
T.prototype.M = !0;
T.prototype.A = function(a, b, c) {
  return Ph(b, W, "[", " ", "]", c, this);
};
pg.prototype.M = !0;
pg.prototype.A = function(a, b, c) {
  return Ph(b, W, "(", " ", ")", c, this);
};
ue.prototype.M = !0;
ue.prototype.A = function(a, b) {
  return pc(b, "()");
};
ff.prototype.M = !0;
ff.prototype.A = function(a, b, c) {
  return Ph(b, W, "(", " ", ")", c, this);
};
qg.prototype.M = !0;
qg.prototype.A = function(a, b, c) {
  return Ph(b, W, "#queue [", " ", "]", c, D(this));
};
ib.prototype.M = !0;
ib.prototype.A = function(a, b, c) {
  return Vh(this, W, b, c);
};
Lh.prototype.M = !0;
Lh.prototype.A = function(a, b, c) {
  return Ph(b, W, "(", " ", ")", c, this);
};
wh.prototype.M = !0;
wh.prototype.A = function(a, b, c) {
  return Ph(b, W, "(", " ", ")", c, this);
};
se.prototype.M = !0;
se.prototype.A = function(a, b, c) {
  return Ph(b, W, "(", " ", ")", c, this);
};
Xc.prototype.kc = !0;
Xc.prototype.Vb = function(a, b) {
  return Wc(this, b);
};
P.prototype.kc = !0;
P.prototype.Vb = function(a, b) {
  return ye(this, b);
};
lg.prototype.kc = !0;
lg.prototype.Vb = function(a, b) {
  return fe(this, b);
};
T.prototype.kc = !0;
T.prototype.Vb = function(a, b) {
  return fe(this, b);
};
var Zh = null;
function $h() {
  null == Zh && (Zh = tf ? tf(0) : sf.call(null, 0));
  var a = [B("G__"), B(pf.a(Zh, md))].join("");
  return a instanceof Xc ? a : ad(null, a);
}
function ai(a, b) {
  this.pa = a;
  this.value = b;
  this.g = 32768;
  this.r = 1;
}
ai.prototype.Wb = function() {
  v(this.pa) && (this.value = this.pa.m ? this.pa.m() : this.pa.call(null), this.pa = null);
  return this.value;
};
function bi(a) {
  return function(b, c) {
    var d = a.a ? a.a(b, c) : a.call(null, b, c);
    return od(d) ? new nd(d) : d;
  };
}
function ci(a) {
  return function(b) {
    return function() {
      function c(a, c) {
        return zb(b, a, c);
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
  }(bi(a));
}
var di = {}, ei = function ei(b) {
  if (b ? b.ae : b) {
    return b.ae(b);
  }
  var c;
  c = ei[n(null == b ? null : b)];
  if (!c && (c = ei._, !c)) {
    throw y("IEncodeJS.-clj-\x3ejs", b);
  }
  return c.call(null, b);
};
function fi(a) {
  return(a ? v(v(null) ? null : a.$d) || (a.bc ? 0 : x(di, a)) : x(di, a)) ? ei(a) : "string" === typeof a || "number" === typeof a || a instanceof P || a instanceof Xc ? gi.b ? gi.b(a) : gi.call(null, a) : Yh(L([a], 0));
}
var gi = function gi(b) {
  if (null == b) {
    return null;
  }
  if (b ? v(v(null) ? null : b.$d) || (b.bc ? 0 : x(di, b)) : x(di, b)) {
    return ei(b);
  }
  if (b instanceof P) {
    return Ae(b);
  }
  if (b instanceof Xc) {
    return "" + B(b);
  }
  if (Wd(b)) {
    var c = {};
    b = D(b);
    for (var d = null, e = 0, f = 0;;) {
      if (f < e) {
        var h = d.N(null, f), k = N(h, 0), h = N(h, 1);
        c[fi(k)] = gi(h);
        f += 1;
      } else {
        if (b = D(b)) {
          Yd(b) ? (e = Ac(b), b = Bc(b), d = e, e = M(e)) : (e = F(b), d = N(e, 0), e = N(e, 1), c[fi(d)] = gi(e), b = G(b), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (null == b ? 0 : b ? b.g & 8 || b.Je || (b.g ? 0 : x(Gb, b)) : x(Gb, b)) {
    c = [];
    b = D(S.a(gi, b));
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        k = d.N(null, f), c.push(k), f += 1;
      } else {
        if (b = D(b)) {
          d = b, Yd(d) ? (b = Ac(d), f = Bc(d), d = b, e = M(b), b = f) : (b = F(d), c.push(b), b = G(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return b;
}, hi = null;
function ii() {
  if (null == hi) {
    var a = new ib(null, 3, [ji, Xe, ki, Xe, li, Xe], null);
    hi = tf ? tf(a) : sf.call(null, a);
  }
  return hi;
}
function mi(a, b, c) {
  var d = dd.a(b, c);
  if (!d && !(d = de(li.b(a).call(null, b), c)) && (d = Xd(c)) && (d = Xd(b))) {
    if (d = M(c) === M(b)) {
      for (var e = !0, f = 0;;) {
        if (e && f !== M(c)) {
          e = mi(a, function() {
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
function ni(a) {
  var b;
  b = ii();
  b = I.b ? I.b(b) : I.call(null, b);
  return Ve(Jd(ji.b(b), a));
}
function oi(a, b, c, d) {
  pf.a(a, function() {
    return I.b ? I.b(b) : I.call(null, b);
  });
  pf.a(c, function() {
    return I.b ? I.b(d) : I.call(null, d);
  });
}
var pi = function pi(b, c, d) {
  var e = (I.b ? I.b(d) : I.call(null, d)).call(null, b), e = v(v(e) ? e.b ? e.b(c) : e.call(null, c) : e) ? !0 : null;
  if (v(e)) {
    return e;
  }
  e = function() {
    for (var e = ni(c);;) {
      if (0 < M(e)) {
        pi(b, F(e), d), e = bd(e);
      } else {
        return null;
      }
    }
  }();
  if (v(e)) {
    return e;
  }
  e = function() {
    for (var e = ni(b);;) {
      if (0 < M(e)) {
        pi(F(e), c, d), e = bd(e);
      } else {
        return null;
      }
    }
  }();
  return v(e) ? e : !1;
};
function qi(a, b, c) {
  c = pi(a, b, c);
  if (v(c)) {
    a = c;
  } else {
    c = mi;
    var d;
    d = ii();
    d = I.b ? I.b(d) : I.call(null, d);
    a = c(d, a, b);
  }
  return a;
}
var ri = function ri(b, c, d, e, f, h, k) {
  var l = zb(function(e, h) {
    var k = N(h, 0);
    N(h, 1);
    if (mi(I.b ? I.b(d) : I.call(null, d), c, k)) {
      var l;
      l = (l = null == e) ? l : qi(k, F(e), f);
      l = v(l) ? h : e;
      if (!v(qi(F(l), k, f))) {
        throw Error([B("Multiple methods in multimethod '"), B(b), B("' match dispatch value: "), B(c), B(" -\x3e "), B(k), B(" and "), B(F(l)), B(", and neither is preferred")].join(""));
      }
      return l;
    }
    return e;
  }, null, I.b ? I.b(e) : I.call(null, e));
  if (v(l)) {
    if (dd.a(I.b ? I.b(k) : I.call(null, k), I.b ? I.b(d) : I.call(null, d))) {
      return pf.s(h, O, c, F(G(l))), F(G(l));
    }
    oi(h, e, k, d);
    return ri(b, c, d, e, f, h, k);
  }
  return null;
};
function X(a, b) {
  throw Error([B("No method in multimethod '"), B(a), B("' for dispatch value: "), B(b)].join(""));
}
function si(a, b, c, d, e, f, h, k) {
  this.name = a;
  this.f = b;
  this.oe = c;
  this.Nc = d;
  this.Ac = e;
  this.De = f;
  this.Oc = h;
  this.Ec = k;
  this.g = 4194305;
  this.r = 4352;
}
g = si.prototype;
g.call = function() {
  function a(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, H, K, Q, ba) {
    a = this;
    var Da = Ue(a.f, b, c, d, e, L([f, h, k, l, m, u, p, q, r, t, A, w, z, H, K, Q, ba], 0)), Pg = Y(this, Da);
    v(Pg) || X(a.name, Da);
    return Ue(Pg, b, c, d, e, L([f, h, k, l, m, u, p, q, r, t, A, w, z, H, K, Q, ba], 0));
  }
  function b(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, H, K, Q) {
    a = this;
    var ba = a.f.ha ? a.f.ha(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, H, K, Q) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, H, K, Q), Da = Y(this, ba);
    v(Da) || X(a.name, ba);
    return Da.ha ? Da.ha(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, H, K, Q) : Da.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, H, K, Q);
  }
  function c(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, H, K) {
    a = this;
    var Q = a.f.ga ? a.f.ga(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, H, K) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, H, K), ba = Y(this, Q);
    v(ba) || X(a.name, Q);
    return ba.ga ? ba.ga(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, H, K) : ba.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, H, K);
  }
  function d(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, H) {
    a = this;
    var K = a.f.fa ? a.f.fa(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, H) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, H), Q = Y(this, K);
    v(Q) || X(a.name, K);
    return Q.fa ? Q.fa(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, H) : Q.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, H);
  }
  function e(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z) {
    a = this;
    var H = a.f.ea ? a.f.ea(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z), K = Y(this, H);
    v(K) || X(a.name, H);
    return K.ea ? K.ea(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z) : K.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z);
  }
  function f(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w) {
    a = this;
    var z = a.f.da ? a.f.da(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w), H = Y(this, z);
    v(H) || X(a.name, z);
    return H.da ? H.da(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w) : H.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w);
  }
  function h(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A) {
    a = this;
    var w = a.f.ca ? a.f.ca(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A), z = Y(this, w);
    v(z) || X(a.name, w);
    return z.ca ? z.ca(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A) : z.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A);
  }
  function k(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t) {
    a = this;
    var A = a.f.ba ? a.f.ba(b, c, d, e, f, h, k, l, m, u, p, q, r, t) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t), w = Y(this, A);
    v(w) || X(a.name, A);
    return w.ba ? w.ba(b, c, d, e, f, h, k, l, m, u, p, q, r, t) : w.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t);
  }
  function l(a, b, c, d, e, f, h, k, l, m, u, p, q, r) {
    a = this;
    var t = a.f.aa ? a.f.aa(b, c, d, e, f, h, k, l, m, u, p, q, r) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r), A = Y(this, t);
    v(A) || X(a.name, t);
    return A.aa ? A.aa(b, c, d, e, f, h, k, l, m, u, p, q, r) : A.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r);
  }
  function m(a, b, c, d, e, f, h, k, l, m, u, p, q) {
    a = this;
    var r = a.f.$ ? a.f.$(b, c, d, e, f, h, k, l, m, u, p, q) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q), t = Y(this, r);
    v(t) || X(a.name, r);
    return t.$ ? t.$(b, c, d, e, f, h, k, l, m, u, p, q) : t.call(null, b, c, d, e, f, h, k, l, m, u, p, q);
  }
  function p(a, b, c, d, e, f, h, k, l, m, u, p) {
    a = this;
    var q = a.f.Z ? a.f.Z(b, c, d, e, f, h, k, l, m, u, p) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p), r = Y(this, q);
    v(r) || X(a.name, q);
    return r.Z ? r.Z(b, c, d, e, f, h, k, l, m, u, p) : r.call(null, b, c, d, e, f, h, k, l, m, u, p);
  }
  function q(a, b, c, d, e, f, h, k, l, m, u) {
    a = this;
    var p = a.f.Y ? a.f.Y(b, c, d, e, f, h, k, l, m, u) : a.f.call(null, b, c, d, e, f, h, k, l, m, u), q = Y(this, p);
    v(q) || X(a.name, p);
    return q.Y ? q.Y(b, c, d, e, f, h, k, l, m, u) : q.call(null, b, c, d, e, f, h, k, l, m, u);
  }
  function r(a, b, c, d, e, f, h, k, l, m) {
    a = this;
    var u = a.f.ka ? a.f.ka(b, c, d, e, f, h, k, l, m) : a.f.call(null, b, c, d, e, f, h, k, l, m), p = Y(this, u);
    v(p) || X(a.name, u);
    return p.ka ? p.ka(b, c, d, e, f, h, k, l, m) : p.call(null, b, c, d, e, f, h, k, l, m);
  }
  function t(a, b, c, d, e, f, h, k, l) {
    a = this;
    var m = a.f.ja ? a.f.ja(b, c, d, e, f, h, k, l) : a.f.call(null, b, c, d, e, f, h, k, l), u = Y(this, m);
    v(u) || X(a.name, m);
    return u.ja ? u.ja(b, c, d, e, f, h, k, l) : u.call(null, b, c, d, e, f, h, k, l);
  }
  function w(a, b, c, d, e, f, h, k) {
    a = this;
    var l = a.f.ia ? a.f.ia(b, c, d, e, f, h, k) : a.f.call(null, b, c, d, e, f, h, k), m = Y(this, l);
    v(m) || X(a.name, l);
    return m.ia ? m.ia(b, c, d, e, f, h, k) : m.call(null, b, c, d, e, f, h, k);
  }
  function z(a, b, c, d, e, f, h) {
    a = this;
    var k = a.f.R ? a.f.R(b, c, d, e, f, h) : a.f.call(null, b, c, d, e, f, h), l = Y(this, k);
    v(l) || X(a.name, k);
    return l.R ? l.R(b, c, d, e, f, h) : l.call(null, b, c, d, e, f, h);
  }
  function A(a, b, c, d, e, f) {
    a = this;
    var h = a.f.J ? a.f.J(b, c, d, e, f) : a.f.call(null, b, c, d, e, f), k = Y(this, h);
    v(k) || X(a.name, h);
    return k.J ? k.J(b, c, d, e, f) : k.call(null, b, c, d, e, f);
  }
  function H(a, b, c, d, e) {
    a = this;
    var f = a.f.s ? a.f.s(b, c, d, e) : a.f.call(null, b, c, d, e), h = Y(this, f);
    v(h) || X(a.name, f);
    return h.s ? h.s(b, c, d, e) : h.call(null, b, c, d, e);
  }
  function K(a, b, c, d) {
    a = this;
    var e = a.f.d ? a.f.d(b, c, d) : a.f.call(null, b, c, d), f = Y(this, e);
    v(f) || X(a.name, e);
    return f.d ? f.d(b, c, d) : f.call(null, b, c, d);
  }
  function Q(a, b, c) {
    a = this;
    var d = a.f.a ? a.f.a(b, c) : a.f.call(null, b, c), e = Y(this, d);
    v(e) || X(a.name, d);
    return e.a ? e.a(b, c) : e.call(null, b, c);
  }
  function ba(a, b) {
    a = this;
    var c = a.f.b ? a.f.b(b) : a.f.call(null, b), d = Y(this, c);
    v(d) || X(a.name, c);
    return d.b ? d.b(b) : d.call(null, b);
  }
  function Da(a) {
    a = this;
    var b = a.f.m ? a.f.m() : a.f.call(null), c = Y(this, b);
    v(c) || X(a.name, b);
    return c.m ? c.m() : c.call(null);
  }
  var u = null, u = function(u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua, Ha, Va, $a, kb, Ma, Wa, bb, cb, uc, gd, te) {
    switch(arguments.length) {
      case 1:
        return Da.call(this, u);
      case 2:
        return ba.call(this, u, aa);
      case 3:
        return Q.call(this, u, aa, ga);
      case 4:
        return K.call(this, u, aa, ga, ja);
      case 5:
        return H.call(this, u, aa, ga, ja, pa);
      case 6:
        return A.call(this, u, aa, ga, ja, pa, ta);
      case 7:
        return z.call(this, u, aa, ga, ja, pa, ta, wa);
      case 8:
        return w.call(this, u, aa, ga, ja, pa, ta, wa, Ba);
      case 9:
        return t.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea);
      case 10:
        return r.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za);
      case 11:
        return q.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua);
      case 12:
        return p.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua, Ha);
      case 13:
        return m.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua, Ha, Va);
      case 14:
        return l.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua, Ha, Va, $a);
      case 15:
        return k.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua, Ha, Va, $a, kb);
      case 16:
        return h.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua, Ha, Va, $a, kb, Ma);
      case 17:
        return f.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua, Ha, Va, $a, kb, Ma, Wa);
      case 18:
        return e.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua, Ha, Va, $a, kb, Ma, Wa, bb);
      case 19:
        return d.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua, Ha, Va, $a, kb, Ma, Wa, bb, cb);
      case 20:
        return c.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua, Ha, Va, $a, kb, Ma, Wa, bb, cb, uc);
      case 21:
        return b.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua, Ha, Va, $a, kb, Ma, Wa, bb, cb, uc, gd);
      case 22:
        return a.call(this, u, aa, ga, ja, pa, ta, wa, Ba, Ea, za, ua, Ha, Va, $a, kb, Ma, Wa, bb, cb, uc, gd, te);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  u.b = Da;
  u.a = ba;
  u.d = Q;
  u.s = K;
  u.J = H;
  u.R = A;
  u.ia = z;
  u.ja = w;
  u.ka = t;
  u.Y = r;
  u.Z = q;
  u.$ = p;
  u.aa = m;
  u.ba = l;
  u.ca = k;
  u.da = h;
  u.ea = f;
  u.fa = e;
  u.ga = d;
  u.ha = c;
  u.Xc = b;
  u.lc = a;
  return u;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(vb(b)));
};
g.m = function() {
  var a = this.f.m ? this.f.m() : this.f.call(null), b = Y(this, a);
  v(b) || X(this.name, a);
  return b.m ? b.m() : b.call(null);
};
g.b = function(a) {
  var b = this.f.b ? this.f.b(a) : this.f.call(null, a), c = Y(this, b);
  v(c) || X(this.name, b);
  return c.b ? c.b(a) : c.call(null, a);
};
g.a = function(a, b) {
  var c = this.f.a ? this.f.a(a, b) : this.f.call(null, a, b), d = Y(this, c);
  v(d) || X(this.name, c);
  return d.a ? d.a(a, b) : d.call(null, a, b);
};
g.d = function(a, b, c) {
  var d = this.f.d ? this.f.d(a, b, c) : this.f.call(null, a, b, c), e = Y(this, d);
  v(e) || X(this.name, d);
  return e.d ? e.d(a, b, c) : e.call(null, a, b, c);
};
g.s = function(a, b, c, d) {
  var e = this.f.s ? this.f.s(a, b, c, d) : this.f.call(null, a, b, c, d), f = Y(this, e);
  v(f) || X(this.name, e);
  return f.s ? f.s(a, b, c, d) : f.call(null, a, b, c, d);
};
g.J = function(a, b, c, d, e) {
  var f = this.f.J ? this.f.J(a, b, c, d, e) : this.f.call(null, a, b, c, d, e), h = Y(this, f);
  v(h) || X(this.name, f);
  return h.J ? h.J(a, b, c, d, e) : h.call(null, a, b, c, d, e);
};
g.R = function(a, b, c, d, e, f) {
  var h = this.f.R ? this.f.R(a, b, c, d, e, f) : this.f.call(null, a, b, c, d, e, f), k = Y(this, h);
  v(k) || X(this.name, h);
  return k.R ? k.R(a, b, c, d, e, f) : k.call(null, a, b, c, d, e, f);
};
g.ia = function(a, b, c, d, e, f, h) {
  var k = this.f.ia ? this.f.ia(a, b, c, d, e, f, h) : this.f.call(null, a, b, c, d, e, f, h), l = Y(this, k);
  v(l) || X(this.name, k);
  return l.ia ? l.ia(a, b, c, d, e, f, h) : l.call(null, a, b, c, d, e, f, h);
};
g.ja = function(a, b, c, d, e, f, h, k) {
  var l = this.f.ja ? this.f.ja(a, b, c, d, e, f, h, k) : this.f.call(null, a, b, c, d, e, f, h, k), m = Y(this, l);
  v(m) || X(this.name, l);
  return m.ja ? m.ja(a, b, c, d, e, f, h, k) : m.call(null, a, b, c, d, e, f, h, k);
};
g.ka = function(a, b, c, d, e, f, h, k, l) {
  var m = this.f.ka ? this.f.ka(a, b, c, d, e, f, h, k, l) : this.f.call(null, a, b, c, d, e, f, h, k, l), p = Y(this, m);
  v(p) || X(this.name, m);
  return p.ka ? p.ka(a, b, c, d, e, f, h, k, l) : p.call(null, a, b, c, d, e, f, h, k, l);
};
g.Y = function(a, b, c, d, e, f, h, k, l, m) {
  var p = this.f.Y ? this.f.Y(a, b, c, d, e, f, h, k, l, m) : this.f.call(null, a, b, c, d, e, f, h, k, l, m), q = Y(this, p);
  v(q) || X(this.name, p);
  return q.Y ? q.Y(a, b, c, d, e, f, h, k, l, m) : q.call(null, a, b, c, d, e, f, h, k, l, m);
};
g.Z = function(a, b, c, d, e, f, h, k, l, m, p) {
  var q = this.f.Z ? this.f.Z(a, b, c, d, e, f, h, k, l, m, p) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p), r = Y(this, q);
  v(r) || X(this.name, q);
  return r.Z ? r.Z(a, b, c, d, e, f, h, k, l, m, p) : r.call(null, a, b, c, d, e, f, h, k, l, m, p);
};
g.$ = function(a, b, c, d, e, f, h, k, l, m, p, q) {
  var r = this.f.$ ? this.f.$(a, b, c, d, e, f, h, k, l, m, p, q) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q), t = Y(this, r);
  v(t) || X(this.name, r);
  return t.$ ? t.$(a, b, c, d, e, f, h, k, l, m, p, q) : t.call(null, a, b, c, d, e, f, h, k, l, m, p, q);
};
g.aa = function(a, b, c, d, e, f, h, k, l, m, p, q, r) {
  var t = this.f.aa ? this.f.aa(a, b, c, d, e, f, h, k, l, m, p, q, r) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r), w = Y(this, t);
  v(w) || X(this.name, t);
  return w.aa ? w.aa(a, b, c, d, e, f, h, k, l, m, p, q, r) : w.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r);
};
g.ba = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t) {
  var w = this.f.ba ? this.f.ba(a, b, c, d, e, f, h, k, l, m, p, q, r, t) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t), z = Y(this, w);
  v(z) || X(this.name, w);
  return z.ba ? z.ba(a, b, c, d, e, f, h, k, l, m, p, q, r, t) : z.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t);
};
g.ca = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w) {
  var z = this.f.ca ? this.f.ca(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w), A = Y(this, z);
  v(A) || X(this.name, z);
  return A.ca ? A.ca(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w) : A.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w);
};
g.da = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z) {
  var A = this.f.da ? this.f.da(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z), H = Y(this, A);
  v(H) || X(this.name, A);
  return H.da ? H.da(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z) : H.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z);
};
g.ea = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A) {
  var H = this.f.ea ? this.f.ea(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A), K = Y(this, H);
  v(K) || X(this.name, H);
  return K.ea ? K.ea(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A) : K.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A);
};
g.fa = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H) {
  var K = this.f.fa ? this.f.fa(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H), Q = Y(this, K);
  v(Q) || X(this.name, K);
  return Q.fa ? Q.fa(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H) : Q.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H);
};
g.ga = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K) {
  var Q = this.f.ga ? this.f.ga(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K), ba = Y(this, Q);
  v(ba) || X(this.name, Q);
  return ba.ga ? ba.ga(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K) : ba.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K);
};
g.ha = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K, Q) {
  var ba = this.f.ha ? this.f.ha(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K, Q) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K, Q), Da = Y(this, ba);
  v(Da) || X(this.name, ba);
  return Da.ha ? Da.ha(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K, Q) : Da.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K, Q);
};
g.Xc = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, H, K, Q, ba) {
  var Da = Ue(this.f, a, b, c, d, L([e, f, h, k, l, m, p, q, r, t, w, z, A, H, K, Q, ba], 0)), u = Y(this, Da);
  v(u) || X(this.name, Da);
  return Ue(u, a, b, c, d, L([e, f, h, k, l, m, p, q, r, t, w, z, A, H, K, Q, ba], 0));
};
function ti(a, b) {
  var c = ui;
  pf.s(c.Ac, O, a, b);
  oi(c.Oc, c.Ac, c.Ec, c.Nc);
}
function Y(a, b) {
  dd.a(function() {
    var b = a.Ec;
    return I.b ? I.b(b) : I.call(null, b);
  }(), function() {
    var b = a.Nc;
    return I.b ? I.b(b) : I.call(null, b);
  }()) || oi(a.Oc, a.Ac, a.Ec, a.Nc);
  var c = function() {
    var b = a.Oc;
    return I.b ? I.b(b) : I.call(null, b);
  }().call(null, b);
  if (v(c)) {
    return c;
  }
  c = ri(a.name, b, a.Nc, a.Ac, a.De, a.Oc, a.Ec);
  return v(c) ? c : function() {
    var b = a.Ac;
    return I.b ? I.b(b) : I.call(null, b);
  }().call(null, a.oe);
}
g.pc = function() {
  return Dc(this.name);
};
g.qc = function() {
  return Ec(this.name);
};
g.B = function() {
  return this[ka] || (this[ka] = ++la);
};
function vi(a) {
  this.hc = a;
  this.g = 2153775104;
  this.r = 2048;
}
g = vi.prototype;
g.toString = function() {
  return this.hc;
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.q = function(a, b) {
  return b instanceof vi && this.hc === b.hc;
};
g.A = function(a, b) {
  return pc(b, [B('#uuid "'), B(this.hc), B('"')].join(""));
};
g.B = function() {
  for (var a = Yh(L([this], 0)), b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  return b;
};
g.Vb = function(a, b) {
  return ab(this.hc, b.hc);
};
var wi = new P(null, "ppath", "ppath", -1758182784), xi = new P(null, "event-sources", "event-sources", 708931713), yi = new P(null, "events-channel", "events-channel", 1892177121), zi = new P(null, "definition", "definition", -1198729982), Ai = new P("zip", "branch?", "zip/branch?", -998880862), Bi = new P(null, "children", "children", -940561982), Ci = new P(null, "r", "r", -471384190), Di = new P("zip", "children", "zip/children", -940194589), Ei = new P(null, "ifn", "ifn", 230683491), Fi = new P(null, 
"tree", "tree", -196312028), Gi = new P("jamesmacaulay.zelkova.signal", "source", "jamesmacaulay.zelkova.signal/source", -943992700), Hi = new P(null, "kids-map", "kids-map", 643095940), mb = new P(null, "meta", "meta", 1499536964), nb = new P(null, "dup", "dup", 556298533), Ii = new P(null, "placeholder", "placeholder", -104873083), vf = new P(null, "validator", "validator", -1966190681), Ji = new P(null, "default", "default", -1987822328), Ki = new P(null, "finally-block", "finally-block", 832982472), 
Li = new P(null, "sources", "sources", -321166424), Oi = new P(null, "events", "events", 1792552201), Pi = new P(null, "value", "value", 305978217), Qi = new P(null, "kid-indexes-map", "kid-indexes-map", -1120910006), Ri = new P(null, "mult-map", "mult-map", 460417931), Z = new P(null, "recur", "recur", -437573268), Si = new P(null, "catch-block", "catch-block", 1175212748), Ti = new P(null, "topic", "topic", -1960480691), Xh = new P(null, "fallback-impl", "fallback-impl", -1501286995), jb = new P(null, 
"flush-on-newline", "flush-on-newline", -151457939), Ui = new P(null, "l", "l", 1395893423), ki = new P(null, "descendants", "descendants", 1824886031), Vi = new P("zip", "make-node", "zip/make-node", 1103800591), Wi = new P(null, "no-op", "no-op", -93046065), Xi = new P(null, "oninput", "oninput", -709673265), li = new P(null, "ancestors", "ancestors", -776045424), lb = new P(null, "readably", "readably", 1129599760), Yi = new P(null, "output-values-mult", "output-values-mult", 1026794288), Qh = 
new P(null, "more-marker", "more-marker", -14717935), Zi = new P(null, "write-port-channel", "write-port-channel", -776952302), $i = new P(null, "init-fn", "init-fn", 777257971), ob = new P(null, "print-length", "print-length", 1931866356), aj = new P(null, "class", "class", -2030961996), bj = new P(null, "catch-exception", "catch-exception", -1997306795), cj = new P(null, "opts", "opts", 155075701), dj = new P(null, "relayed-event-topic", "relayed-event-topic", 323853461), ji = new P(null, "parents", 
"parents", -2027538891), ej = new P(null, "pnodes", "pnodes", 1739080565), fj = new P(null, "prev", "prev", -1597069226), gj = new P(null, "changed?", "changed?", -437828330), hj = new P(null, "continue-block", "continue-block", -1852047850), ij = new P(null, "readport", "readport", -1909228810), jj = new P(null, "mult", "mult", 1466794774), kj = new P(null, "attrs", "attrs", -2090668713), lj = new P(null, "topsort", "topsort", -718814409), mj = new P("jamesmacaulay.zelkova.signal", "splice", "jamesmacaulay.zelkova.signal/splice", 
-459359176), nj = new P(null, "inputs-by-topic", "inputs-by-topic", 1973950168), oj = new P(null, "tag", "tag", -1290361223), pj = new P(null, "end", "end", -268185958), qj = new P(null, "parents-map", "parents-map", -1048684902), rj = new P(null, "hierarchy", "hierarchy", -1053470341), sj = new P(null, "timestamp", "timestamp", 579478971), tj = new P(null, "msg-xform", "msg-xform", -1431252485), uj = new P(null, "signal", "signal", -1984951589), Wh = new P(null, "alt-impl", "alt-impl", 670969595), 
vj = new P(null, "root-node", "root-node", 296879230), wj = new P("dominator.core", "empty", "dominator.core/empty", 1128163454), xj = new P(null, "deps", "deps", 1883360319), yj = new P(null, "results", "results", -1134170113);
var zj, Aj, Bj = {}, Cj = function Cj(b, c) {
  if (b ? b.$c : b) {
    return b.$c(0, c);
  }
  var d;
  d = Cj[n(null == b ? null : b)];
  if (!d && (d = Cj._, !d)) {
    throw y("ReadPort.take!", b);
  }
  return d.call(null, b, c);
}, Dj = function Dj(b, c, d) {
  if (b ? b.$b : b) {
    return b.$b(b, c, d);
  }
  var e;
  e = Dj[n(null == b ? null : b)];
  if (!e && (e = Dj._, !e)) {
    throw y("WritePort.put!", b);
  }
  return e.call(null, b, c, d);
}, Ej = function Ej(b) {
  if (b ? b.Zb : b) {
    return b.Zb(b);
  }
  var c;
  c = Ej[n(null == b ? null : b)];
  if (!c && (c = Ej._, !c)) {
    throw y("Channel.close!", b);
  }
  return c.call(null, b);
}, Fj = function Fj(b) {
  if (b ? b.zd : b) {
    return!0;
  }
  var c;
  c = Fj[n(null == b ? null : b)];
  if (!c && (c = Fj._, !c)) {
    throw y("Handler.active?", b);
  }
  return c.call(null, b);
}, Gj = function Gj(b) {
  if (b ? b.Ad : b) {
    return b.pa;
  }
  var c;
  c = Gj[n(null == b ? null : b)];
  if (!c && (c = Gj._, !c)) {
    throw y("Handler.commit", b);
  }
  return c.call(null, b);
}, Hj = function Hj(b, c) {
  if (b ? b.yd : b) {
    return b.yd(0, c);
  }
  var d;
  d = Hj[n(null == b ? null : b)];
  if (!d && (d = Hj._, !d)) {
    throw y("Buffer.add!*", b);
  }
  return d.call(null, b, c);
}, Ij = function Ij() {
  switch(arguments.length) {
    case 1:
      return Ij.b(arguments[0]);
    case 2:
      return Ij.a(arguments[0], arguments[1]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
Ij.b = function(a) {
  return a;
};
Ij.a = function(a, b) {
  if (null == b) {
    throw Error([B("Assert failed: "), B(Yh(L([we(new Xc(null, "not", "not", 1044554643, null), we(new Xc(null, "nil?", "nil?", 1612038930, null), new Xc(null, "itm", "itm", -713282527, null)))], 0)))].join(""));
  }
  return Hj(a, b);
};
Ij.v = 2;
function Jj(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function Kj(a, b, c, d) {
  this.head = a;
  this.L = b;
  this.length = c;
  this.c = d;
}
Kj.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.c[this.L];
  this.c[this.L] = null;
  this.L = (this.L + 1) % this.c.length;
  --this.length;
  return a;
};
Kj.prototype.unshift = function(a) {
  this.c[this.head] = a;
  this.head = (this.head + 1) % this.c.length;
  this.length += 1;
  return null;
};
function Lj(a, b) {
  a.length + 1 === a.c.length && a.resize();
  a.unshift(b);
}
Kj.prototype.resize = function() {
  var a = Array(2 * this.c.length);
  return this.L < this.head ? (Jj(this.c, this.L, a, 0, this.length), this.L = 0, this.head = this.length, this.c = a) : this.L > this.head ? (Jj(this.c, this.L, a, 0, this.c.length - this.L), Jj(this.c, 0, a, this.c.length - this.L, this.head), this.L = 0, this.head = this.length, this.c = a) : this.L === this.head ? (this.head = this.L = 0, this.c = a) : null;
};
function Mj(a, b) {
  for (var c = a.length, d = 0;;) {
    if (d < c) {
      var e = a.pop(), f;
      f = e;
      f = b.b ? b.b(f) : b.call(null, f);
      v(f) && a.unshift(e);
      d += 1;
    } else {
      break;
    }
  }
}
function Nj(a) {
  if (!(0 < a)) {
    throw Error([B("Assert failed: "), B("Can't create a ring buffer of size 0"), B("\n"), B(Yh(L([we(new Xc(null, "\x3e", "\x3e", 1085014381, null), new Xc(null, "n", "n", -2092305744, null), 0)], 0)))].join(""));
  }
  return new Kj(0, 0, 0, Array(a));
}
function Oj(a, b) {
  this.K = a;
  this.Be = b;
  this.g = 2;
  this.r = 0;
}
function Pj(a) {
  return a.K.length === a.Be;
}
Oj.prototype.yd = function(a, b) {
  Lj(this.K, b);
  return this;
};
Oj.prototype.I = function() {
  return this.K.length;
};
function Qj(a) {
  ca.setTimeout(function() {
    throw a;
  }, 0);
}
function Rj(a) {
  ha(ca.setImmediate) ? ca.setImmediate(a) : (Sj || (Sj = Tj()), Sj(a));
}
var Sj;
function Tj() {
  var a = ca.MessageChannel;
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
      var a = c.pd;
      c.pd = null;
      a();
    };
    return function(a) {
      d.next = {pd:a};
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
    ca.setTimeout(a, 0);
  };
}
;var Uj = Nj(32), Vj = !1, Wj = !1;
function Xj() {
  Vj = !0;
  Wj = !1;
  for (var a = 0;;) {
    var b = Uj.pop();
    if (null != b && (b.m ? b.m() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  Vj = !1;
  return 0 < Uj.length ? Yj.m ? Yj.m() : Yj.call(null) : null;
}
function Yj() {
  var a = Wj;
  if (v(v(a) ? Vj : a)) {
    return null;
  }
  Wj = !0;
  return Rj(Xj);
}
function Zj(a) {
  Lj(Uj, a);
  Yj();
}
;var ak, bk = function bk(b) {
  "undefined" === typeof ak && (ak = function(b, d, e) {
    this.Ud = b;
    this.n = d;
    this.ve = e;
    this.g = 425984;
    this.r = 0;
  }, ak.prototype.D = function(b, d) {
    return new ak(this.Ud, this.n, d);
  }, ak.prototype.C = function() {
    return this.ve;
  }, ak.prototype.Wb = function() {
    return this.n;
  }, ak.cc = !0, ak.ac = "cljs.core.async.impl.channels/t19676", ak.uc = function(b, d) {
    return pc(d, "cljs.core.async.impl.channels/t19676");
  });
  return new ak(bk, b, Xe);
};
function ck(a, b) {
  this.xc = a;
  this.n = b;
}
function dk(a) {
  return Fj(a.xc);
}
var ek = function ek(b) {
  if (b ? b.xd : b) {
    return b.xd();
  }
  var c;
  c = ek[n(null == b ? null : b)];
  if (!c && (c = ek._, !c)) {
    throw y("MMC.abort", b);
  }
  return c.call(null, b);
};
function fk(a, b, c, d, e, f, h) {
  this.Sb = a;
  this.Lc = b;
  this.Gb = c;
  this.Kc = d;
  this.K = e;
  this.closed = f;
  this.Ja = h;
}
g = fk.prototype;
g.xd = function() {
  for (;;) {
    var a = this.Gb.pop();
    if (null != a) {
      var b = a.xc;
      Zj(function(a) {
        return function() {
          return a.b ? a.b(!0) : a.call(null, !0);
        };
      }(b.pa, b, a.n, a, this));
    }
    break;
  }
  Mj(this.Gb, kf(!1));
  return Ej(this);
};
g.$b = function(a, b, c) {
  var d = this;
  if (null == b) {
    throw Error([B("Assert failed: "), B("Can't put nil in on a channel"), B("\n"), B(Yh(L([we(new Xc(null, "not", "not", 1044554643, null), we(new Xc(null, "nil?", "nil?", 1612038930, null), new Xc(null, "val", "val", 1769233139, null)))], 0)))].join(""));
  }
  if (a = d.closed) {
    return bk(!a);
  }
  if (v(function() {
    var a = d.K;
    return v(a) ? rb(Pj(d.K)) : a;
  }())) {
    for (c = od(function() {
      var a = d.K;
      return d.Ja.a ? d.Ja.a(a, b) : d.Ja.call(null, a, b);
    }());;) {
      if (0 < d.Sb.length && 0 < M(d.K)) {
        var e = d.Sb.pop(), f = e.pa, h = d.K.K.pop();
        Zj(function(a, b) {
          return function() {
            return a.b ? a.b(b) : a.call(null, b);
          };
        }(f, h, e, c, a, this));
      }
      break;
    }
    c && ek(this);
    return bk(!0);
  }
  e = function() {
    for (;;) {
      var a = d.Sb.pop();
      if (v(a)) {
        if (v(!0)) {
          return a;
        }
      } else {
        return null;
      }
    }
  }();
  if (v(e)) {
    return c = Gj(e), Zj(function(a) {
      return function() {
        return a.b ? a.b(b) : a.call(null, b);
      };
    }(c, e, a, this)), bk(!0);
  }
  64 < d.Kc ? (d.Kc = 0, Mj(d.Gb, dk)) : d.Kc += 1;
  if (!(1024 > d.Gb.length)) {
    throw Error([B("Assert failed: "), B([B("No more than "), B(1024), B(" pending puts are allowed on a single channel."), B(" Consider using a windowed buffer.")].join("")), B("\n"), B(Yh(L([we(new Xc(null, "\x3c", "\x3c", 993667236, null), we(new Xc(null, ".-length", ".-length", -280799999, null), new Xc(null, "puts", "puts", -1883877054, null)), new Xc("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0)))].join(""));
  }
  Lj(d.Gb, new ck(c, b));
  return null;
};
g.ne = !0;
g.$c = function(a, b) {
  var c = this;
  if (null != c.K && 0 < M(c.K)) {
    for (var d = b.pa, e = bk(c.K.K.pop());;) {
      if (!v(Pj(c.K))) {
        var f = c.Gb.pop();
        if (null != f) {
          var h = f.xc, k = f.n;
          Zj(function(a) {
            return function() {
              return a.b ? a.b(!0) : a.call(null, !0);
            };
          }(h.pa, h, k, f, d, e, this));
          od(function() {
            var a = c.K, b = k;
            return c.Ja.a ? c.Ja.a(a, b) : c.Ja.call(null, a, b);
          }()) && ek(this);
          continue;
        }
      }
      break;
    }
    return e;
  }
  d = function() {
    for (;;) {
      var a = c.Gb.pop();
      if (v(a)) {
        if (Fj(a.xc)) {
          return a;
        }
      } else {
        return null;
      }
    }
  }();
  if (v(d)) {
    return e = Gj(d.xc), Zj(function(a) {
      return function() {
        return a.b ? a.b(!0) : a.call(null, !0);
      };
    }(e, d, this)), bk(d.n);
  }
  if (v(c.closed)) {
    return v(c.K) && (d = c.K, c.Ja.b ? c.Ja.b(d) : c.Ja.call(null, d)), v(v(!0) ? b.pa : !0) ? (d = function() {
      var a = c.K;
      return v(a) ? 0 < M(c.K) : a;
    }(), d = v(d) ? c.K.K.pop() : null, bk(d)) : null;
  }
  64 < c.Lc ? (c.Lc = 0, Mj(c.Sb, Fj)) : c.Lc += 1;
  if (!(1024 > c.Sb.length)) {
    throw Error([B("Assert failed: "), B([B("No more than "), B(1024), B(" pending takes are allowed on a single channel.")].join("")), B("\n"), B(Yh(L([we(new Xc(null, "\x3c", "\x3c", 993667236, null), we(new Xc(null, ".-length", ".-length", -280799999, null), new Xc(null, "takes", "takes", 298247964, null)), new Xc("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0)))].join(""));
  }
  Lj(c.Sb, b);
  return null;
};
g.Zb = function() {
  var a = this;
  if (!a.closed) {
    a.closed = !0;
    if (v(function() {
      var b = a.K;
      return v(b) ? 0 === a.Gb.length : b;
    }())) {
      var b = a.K;
      a.Ja.b ? a.Ja.b(b) : a.Ja.call(null, b);
    }
    for (;b = a.Sb.pop(), null != b;) {
      var c = b.pa, d = v(function() {
        var b = a.K;
        return v(b) ? 0 < M(a.K) : b;
      }()) ? a.K.K.pop() : null;
      Zj(function(a, b) {
        return function() {
          return a.b ? a.b(b) : a.call(null, b);
        };
      }(c, d, b, this));
    }
  }
  return null;
};
function gk(a) {
  console.log(a);
  return null;
}
function hk(a, b, c) {
  b = (v(b) ? b : gk).call(null, c);
  return null == b ? a : Ij.a(a, b);
}
function ik(a, b, c) {
  return new fk(Nj(32), 0, Nj(32), 0, a, !1, function() {
    return function(a) {
      return function() {
        function b(e, f) {
          try {
            return a.a ? a.a(e, f) : a.call(null, e, f);
          } catch (h) {
            return hk(e, c, h);
          }
        }
        function f(b) {
          try {
            return a.b ? a.b(b) : a.call(null, b);
          } catch (e) {
            return hk(b, c, e);
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
    }(v(b) ? b.b ? b.b(Ij) : b.call(null, Ij) : Ij);
  }());
}
;var jk, kk = function kk(b) {
  "undefined" === typeof jk && (jk = function(b, d, e) {
    this.cd = b;
    this.pa = d;
    this.ye = e;
    this.g = 393216;
    this.r = 0;
  }, jk.prototype.D = function(b, d) {
    return new jk(this.cd, this.pa, d);
  }, jk.prototype.C = function() {
    return this.ye;
  }, jk.prototype.zd = function() {
    return!0;
  }, jk.prototype.Ad = function() {
    return this.pa;
  }, jk.cc = !0, jk.ac = "cljs.core.async.impl.ioc-helpers/t23206", jk.uc = function(b, d) {
    return pc(d, "cljs.core.async.impl.ioc-helpers/t23206");
  });
  return new jk(kk, b, Xe);
};
function lk(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    throw b instanceof Object && a[6].Zb(null), b;
  }
}
function mk(a, b, c) {
  c = c.$c(0, kk(function(c) {
    a[2] = c;
    a[1] = b;
    return lk(a);
  }));
  return v(c) ? (a[2] = I.b ? I.b(c) : I.call(null, c), a[1] = b, Z) : null;
}
function nk(a, b, c, d) {
  c = c.$b(null, d, kk(function(c) {
    a[2] = c;
    a[1] = b;
    return lk(a);
  }));
  return v(c) ? (a[2] = I.b ? I.b(c) : I.call(null, c), a[1] = b, Z) : null;
}
function ok(a, b) {
  var c = a[6];
  null != b && c.$b(null, b, kk(function() {
    return function() {
      return null;
    };
  }(c)));
  c.Zb(null);
  return c;
}
function pk(a, b, c, d, e, f, h, k) {
  this.$a = a;
  this.ab = b;
  this.cb = c;
  this.bb = d;
  this.mb = e;
  this.p = f;
  this.j = h;
  this.i = k;
  this.g = 2229667594;
  this.r = 8192;
}
g = pk.prototype;
g.w = function(a, b) {
  return Ob.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.na : null) {
    case "catch-block":
      return this.$a;
    case "catch-exception":
      return this.ab;
    case "finally-block":
      return this.cb;
    case "continue-block":
      return this.bb;
    case "prev":
      return this.mb;
    default:
      return Kd(this.j, b, c);
  }
};
g.A = function(a, b, c) {
  return Ph(b, function() {
    return function(a) {
      return Ph(b, W, "", " ", "", c, a);
    };
  }(this), "#cljs.core.async.impl.ioc-helpers.ExceptionFrame{", ", ", "}", c, Me.a(new T(null, 5, 5, U, [new T(null, 2, 5, U, [Si, this.$a], null), new T(null, 2, 5, U, [bj, this.ab], null), new T(null, 2, 5, U, [Ki, this.cb], null), new T(null, 2, 5, U, [hj, this.bb], null), new T(null, 2, 5, U, [fj, this.mb], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 5 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = pe(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? ug(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.Ca = function(a, b) {
  return de(new zh(null, new ib(null, 5, [Ki, null, Si, null, bj, null, fj, null, hj, null], null), null), b) ? Md.a(Ad(Kf.a(Xe, this), this.p), b) : new pk(this.$a, this.ab, this.cb, this.bb, this.mb, this.p, Ve(Md.a(this.j, b)), null);
};
g.ra = function(a, b, c) {
  return v(R.a ? R.a(Si, b) : R.call(null, Si, b)) ? new pk(c, this.ab, this.cb, this.bb, this.mb, this.p, this.j, null) : v(R.a ? R.a(bj, b) : R.call(null, bj, b)) ? new pk(this.$a, c, this.cb, this.bb, this.mb, this.p, this.j, null) : v(R.a ? R.a(Ki, b) : R.call(null, Ki, b)) ? new pk(this.$a, this.ab, c, this.bb, this.mb, this.p, this.j, null) : v(R.a ? R.a(hj, b) : R.call(null, hj, b)) ? new pk(this.$a, this.ab, this.cb, c, this.mb, this.p, this.j, null) : v(R.a ? R.a(fj, b) : R.call(null, fj, 
  b)) ? new pk(this.$a, this.ab, this.cb, this.bb, c, this.p, this.j, null) : new pk(this.$a, this.ab, this.cb, this.bb, this.mb, this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(Me.a(new T(null, 5, 5, U, [new T(null, 2, 5, U, [Si, this.$a], null), new T(null, 2, 5, U, [bj, this.ab], null), new T(null, 2, 5, U, [Ki, this.cb], null), new T(null, 2, 5, U, [hj, this.bb], null), new T(null, 2, 5, U, [fj, this.mb], null)], null), this.j));
};
g.D = function(a, b) {
  return new pk(this.$a, this.ab, this.cb, this.bb, this.mb, b, this.j, this.i);
};
g.G = function(a, b) {
  return Xd(b) ? Qb(this, C.a(b, 0), C.a(b, 1)) : zb(Hb, this, b);
};
function qk(a) {
  for (;;) {
    var b = a[4], c = Si.b(b), d = bj.b(b), e = a[5];
    if (v(function() {
      var a = e;
      return v(a) ? rb(b) : a;
    }())) {
      throw e;
    }
    if (v(function() {
      var a = e;
      return v(a) ? (a = c, v(a) ? e instanceof d : a) : a;
    }())) {
      a[1] = c;
      a[2] = e;
      a[5] = null;
      a[4] = O.l(b, Si, null, L([bj, null], 0));
      break;
    }
    if (v(function() {
      var a = e;
      return v(a) ? rb(c) && rb(Ki.b(b)) : a;
    }())) {
      a[4] = fj.b(b);
    } else {
      if (v(function() {
        var a = e;
        return v(a) ? (a = rb(c)) ? Ki.b(b) : a : a;
      }())) {
        a[1] = Ki.b(b);
        a[4] = O.d(b, Ki, null);
        break;
      }
      if (v(function() {
        var a = rb(e);
        return a ? Ki.b(b) : a;
      }())) {
        a[1] = Ki.b(b);
        a[4] = O.d(b, Ki, null);
        break;
      }
      if (rb(e) && rb(Ki.b(b))) {
        a[1] = hj.b(b);
        a[4] = fj.b(b);
        break;
      }
      throw Error("No matching clause");
    }
  }
}
;for (var rk = Array(1), sk = 0;;) {
  if (sk < rk.length) {
    rk[sk] = null, sk += 1;
  } else {
    break;
  }
}
;var tk = function tk(b) {
  "undefined" === typeof zj && (zj = function(b, d, e) {
    this.cd = b;
    this.pa = d;
    this.we = e;
    this.g = 393216;
    this.r = 0;
  }, zj.prototype.D = function(b, d) {
    return new zj(this.cd, this.pa, d);
  }, zj.prototype.C = function() {
    return this.we;
  }, zj.prototype.zd = function() {
    return!0;
  }, zj.prototype.Ad = function() {
    return this.pa;
  }, zj.cc = !0, zj.ac = "cljs.core.async/t20499", zj.uc = function(b, d) {
    return pc(d, "cljs.core.async/t20499");
  });
  return new zj(tk, b, Xe);
}, uk = function uk() {
  switch(arguments.length) {
    case 0:
      return uk.m();
    case 1:
      return uk.b(arguments[0]);
    case 2:
      return uk.a(arguments[0], arguments[1]);
    case 3:
      return uk.d(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
uk.m = function() {
  return uk.b(null);
};
uk.b = function(a) {
  return uk.d(a, null, null);
};
uk.a = function(a, b) {
  return uk.d(a, b, null);
};
uk.d = function(a, b, c) {
  a = dd.a(a, 0) ? null : a;
  if (v(b) && !v(a)) {
    throw Error([B("Assert failed: "), B("buffer must be supplied when transducer is"), B("\n"), B(Yh(L([new Xc(null, "buf-or-n", "buf-or-n", -1646815050, null)], 0)))].join(""));
  }
  a = "number" === typeof a ? new Oj(Nj(a), a) : a;
  return ik(a, b, c);
};
uk.v = 3;
function vk(a, b) {
  var c = Cj(a, tk(b));
  if (v(c)) {
    var d = I.b ? I.b(c) : I.call(null, c);
    v(!0) ? b.b ? b.b(d) : b.call(null, d) : Zj(function(a) {
      return function() {
        return b.b ? b.b(a) : b.call(null, a);
      };
    }(d, c));
  }
  return null;
}
var wk = tk(function() {
  return null;
}), xk = function xk() {
  switch(arguments.length) {
    case 2:
      return xk.a(arguments[0], arguments[1]);
    case 3:
      return xk.d(arguments[0], arguments[1], arguments[2]);
    case 4:
      return xk.s(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
xk.a = function(a, b) {
  var c = Dj(a, b, wk);
  return v(c) ? I.b ? I.b(c) : I.call(null, c) : !0;
};
xk.d = function(a, b, c) {
  return xk.s(a, b, c, !0);
};
xk.s = function(a, b, c, d) {
  a = Dj(a, b, tk(c));
  return v(a) ? (b = I.b ? I.b(a) : I.call(null, a), v(d) ? c.b ? c.b(b) : c.call(null, b) : Zj(function(a) {
    return function() {
      return c.b ? c.b(a) : c.call(null, a);
    };
  }(b, a, a)), b) : !0;
};
xk.v = 4;
function yk(a, b) {
  return zk(a, b);
}
function zk(a, b) {
  var c = uk.b(1);
  Zj(function(c) {
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
                      if (!R(e, Z)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f, qk(c), d = Z;
                    } else {
                      throw f;
                    }
                  }
                }
                if (!R(d, Z)) {
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
            return 7 === d ? (d = c, d[2] = c[2], d[1] = 3, Z) : 1 === d ? (c[2] = null, c[1] = 2, Z) : 4 === d ? (d = c[7], d = c[2], c[7] = d, c[1] = v(null == d) ? 5 : 6, Z) : 13 === d ? (c[2] = null, c[1] = 14, Z) : 6 === d ? (d = c[7], nk(c, 11, b, d)) : 3 === d ? (d = c[2], ok(c, d)) : 12 === d ? (c[2] = null, c[1] = 2, Z) : 2 === d ? mk(c, 4, a) : 11 === d ? (d = c[2], c[1] = v(d) ? 12 : 13, Z) : 9 === d ? (c[2] = null, c[1] = 10, Z) : 5 === d ? (c[1] = v(!0) ? 8 : 9, Z) : 14 === d || 10 === 
            d ? (d = c[2], c[2] = d, c[1] = 7, Z) : 8 === d ? (d = Ej(b), c[2] = d, c[1] = 10, Z) : null;
          };
        }(c), c);
      }(), f = function() {
        var a = e.m ? e.m() : e.call(null);
        a[6] = c;
        return a;
      }();
      return lk(f);
    };
  }(c));
  return b;
}
var Ak = {}, Bk = function Bk(b, c, d) {
  if (b ? b.Zc : b) {
    return b.Zc(b, c, d);
  }
  var e;
  e = Bk[n(null == b ? null : b)];
  if (!e && (e = Bk._, !e)) {
    throw y("Mult.tap*", b);
  }
  return e.call(null, b, c, d);
}, Ck = function Ck(b, c) {
  if (b ? b.tc : b) {
    return b.tc(b, c);
  }
  var d;
  d = Ck[n(null == b ? null : b)];
  if (!d && (d = Ck._, !d)) {
    throw y("Mult.untap*", b);
  }
  return d.call(null, b, c);
}, Dk = function Dk(b) {
  var c = tf ? tf(Xe) : sf.call(null, Xe), d = function() {
    "undefined" === typeof Aj && (Aj = function(b, c, d, e) {
      this.Ae = b;
      this.ch = c;
      this.ad = d;
      this.xe = e;
      this.g = 393216;
      this.r = 0;
    }, Aj.prototype.D = function() {
      return function(b, c) {
        return new Aj(this.Ae, this.ch, this.ad, c);
      };
    }(c), Aj.prototype.C = function() {
      return function() {
        return this.xe;
      };
    }(c), Aj.prototype.wd = !0, Aj.prototype.Zc = function() {
      return function(b, c, d) {
        pf.s(this.ad, O, c, d);
        return null;
      };
    }(c), Aj.prototype.tc = function() {
      return function(b, c) {
        pf.d(this.ad, Md, c);
        return null;
      };
    }(c), Aj.cc = !0, Aj.ac = "cljs.core.async/t21533", Aj.uc = function() {
      return function(b, c) {
        return pc(c, "cljs.core.async/t21533");
      };
    }(c));
    return new Aj(Dk, b, c, Xe);
  }(), e = uk.b(1), f = tf ? tf(null) : sf.call(null, null), h = function(b, c, d, e) {
    return function() {
      return 0 === pf.a(e, ke) ? xk.a(d, !0) : null;
    };
  }(c, d, e, f), k = uk.b(1);
  Zj(function(c, d, e, f, h, k) {
    return function() {
      var w = function() {
        return function(b) {
          return function() {
            function c(d) {
              for (;;) {
                var e;
                a: {
                  try {
                    for (;;) {
                      var f = b(d);
                      if (!R(f, Z)) {
                        e = f;
                        break a;
                      }
                    }
                  } catch (h) {
                    if (h instanceof Object) {
                      d[5] = h, qk(d), e = Z;
                    } else {
                      throw h;
                    }
                  }
                }
                if (!R(e, Z)) {
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
              var q = c[7], r = F(q), t = N(r, 0), A = N(r, 1);
              c[8] = t;
              m = c;
              m[1] = v(A) ? 22 : 23;
              return Z;
            }
            if (27 === l) {
              var w = c[9], z = c[10], za = c[11], ua = c[12], Ha = C.a(ua, w), Va = xk.d(Ha, za, k);
              c[10] = Ha;
              m = c;
              m[1] = v(Va) ? 30 : 31;
              return Z;
            }
            if (1 === l) {
              var $a = m = c;
              $a[2] = null;
              $a[1] = 2;
              return Z;
            }
            if (24 === l) {
              var q = c[7], kb = c[2], Ma = G(q), Wa = null, bb = 0, cb = 0;
              c[13] = kb;
              c[14] = Ma;
              c[15] = bb;
              c[16] = cb;
              c[17] = Wa;
              var uc = m = c;
              uc[2] = null;
              uc[1] = 8;
              return Z;
            }
            if (39 === l) {
              var gd = m = c;
              gd[2] = null;
              gd[1] = 41;
              return Z;
            }
            if (4 === l) {
              var za = c[11], te = c[2], Dn = null == te;
              c[11] = te;
              m = c;
              m[1] = v(Dn) ? 5 : 6;
              return Z;
            }
            if (15 === l) {
              var Ma = c[14], bb = c[15], cb = c[16], Wa = c[17], Pg = c[2], Rn = Wa, Sn = bb, Tn = cb + 1;
              c[14] = Ma;
              c[15] = Sn;
              c[16] = Tn;
              c[17] = Rn;
              c[18] = Pg;
              var dl = m = c;
              dl[2] = null;
              dl[1] = 8;
              return Z;
            }
            if (21 === l) {
              var Un = c[2], el = m = c;
              el[2] = Un;
              el[1] = 18;
              return Z;
            }
            if (31 === l) {
              var z = c[10], Vn = k(null), Wn = e.tc(null, z);
              c[19] = Vn;
              var fl = m = c;
              fl[2] = Wn;
              fl[1] = 32;
              return Z;
            }
            if (32 === l) {
              var w = c[9], Yc = c[20], Zc = c[21], ua = c[12], Xn = c[2], Yn = Yc, Zn = ua, $n = Zc;
              c[9] = w + 1;
              c[20] = Yn;
              c[21] = $n;
              c[12] = Zn;
              c[22] = Xn;
              var gl = m = c;
              gl[2] = null;
              gl[1] = 25;
              return Z;
            }
            if (40 === l) {
              var hl = c[23], ao = k(null), bo = e.tc(null, hl);
              c[24] = ao;
              var il = m = c;
              il[2] = bo;
              il[1] = 41;
              return Z;
            }
            if (33 === l) {
              var $c = c[25], co = Yd($c), m = c;
              m[1] = co ? 36 : 37;
              return Z;
            }
            if (13 === l) {
              var Mi = c[26], eo = Ej(Mi), jl = m = c;
              jl[2] = eo;
              jl[1] = 15;
              return Z;
            }
            if (22 === l) {
              var t = c[8], fo = Ej(t), kl = m = c;
              kl[2] = fo;
              kl[1] = 24;
              return Z;
            }
            if (36 === l) {
              var $c = c[25], ll = Ac($c), go = Bc($c), ho = M(ll), Yc = go, ua = ll, Zc = ho, w = 0;
              c[9] = w;
              c[20] = Yc;
              c[21] = Zc;
              c[12] = ua;
              var ml = m = c;
              ml[2] = null;
              ml[1] = 25;
              return Z;
            }
            if (41 === l) {
              var $c = c[25], io = c[2], Yc = G($c), ua = null, w = Zc = 0;
              c[9] = w;
              c[27] = io;
              c[20] = Yc;
              c[21] = Zc;
              c[12] = ua;
              var nl = m = c;
              nl[2] = null;
              nl[1] = 25;
              return Z;
            }
            if (43 === l) {
              var ol = m = c;
              ol[2] = null;
              ol[1] = 44;
              return Z;
            }
            if (29 === l) {
              var jo = c[2], pl = m = c;
              pl[2] = jo;
              pl[1] = 26;
              return Z;
            }
            if (44 === l) {
              c[28] = c[2];
              var ql = m = c;
              ql[2] = null;
              ql[1] = 2;
              return Z;
            }
            if (6 === l) {
              var rl = c[29], ko = I.b ? I.b(d) : I.call(null, d), Ni = Cg(ko), sl = M(Ni), lo = wf.a ? wf.a(h, sl) : wf.call(null, h, sl), Yc = D(Ni), ua = null, w = Zc = 0;
              c[9] = w;
              c[30] = lo;
              c[20] = Yc;
              c[21] = Zc;
              c[12] = ua;
              c[29] = Ni;
              var tl = m = c;
              tl[2] = null;
              tl[1] = 25;
              return Z;
            }
            if (28 === l) {
              var Yc = c[20], $c = c[25], ul = D(Yc);
              c[25] = ul;
              m = c;
              m[1] = ul ? 33 : 34;
              return Z;
            }
            if (25 === l) {
              var w = c[9], Zc = c[21], mo = w < Zc, m = c;
              m[1] = v(mo) ? 27 : 28;
              return Z;
            }
            if (34 === l) {
              var vl = m = c;
              vl[2] = null;
              vl[1] = 35;
              return Z;
            }
            if (17 === l) {
              var wl = m = c;
              wl[2] = null;
              wl[1] = 18;
              return Z;
            }
            if (3 === l) {
              var no = c[2], m = c;
              return ok(m, no);
            }
            if (12 === l) {
              var oo = c[2], xl = m = c;
              xl[2] = oo;
              xl[1] = 9;
              return Z;
            }
            if (2 === l) {
              return m = c, mk(m, 4, b);
            }
            if (23 === l) {
              var yl = m = c;
              yl[2] = null;
              yl[1] = 24;
              return Z;
            }
            if (35 === l) {
              var po = c[2], zl = m = c;
              zl[2] = po;
              zl[1] = 29;
              return Z;
            }
            if (19 === l) {
              var q = c[7], Al = Ac(q), qo = Bc(q), ro = M(Al), Ma = qo, Wa = Al, bb = ro, cb = 0;
              c[14] = Ma;
              c[15] = bb;
              c[16] = cb;
              c[17] = Wa;
              var Bl = m = c;
              Bl[2] = null;
              Bl[1] = 8;
              return Z;
            }
            if (11 === l) {
              var Ma = c[14], q = c[7], Cl = D(Ma);
              c[7] = Cl;
              m = c;
              m[1] = Cl ? 16 : 17;
              return Z;
            }
            if (9 === l) {
              var so = c[2], Dl = m = c;
              Dl[2] = so;
              Dl[1] = 7;
              return Z;
            }
            if (5 === l) {
              var to = I.b ? I.b(d) : I.call(null, d), Ma = D(to), Wa = null, cb = bb = 0;
              c[14] = Ma;
              c[15] = bb;
              c[16] = cb;
              c[17] = Wa;
              var El = m = c;
              El[2] = null;
              El[1] = 8;
              return Z;
            }
            if (14 === l) {
              var Fl = m = c;
              Fl[2] = null;
              Fl[1] = 15;
              return Z;
            }
            if (45 === l) {
              var uo = c[2], Gl = m = c;
              Gl[2] = uo;
              Gl[1] = 44;
              return Z;
            }
            if (26 === l) {
              var rl = c[29], vo = c[2], wo = D(rl);
              c[31] = vo;
              m = c;
              m[1] = wo ? 42 : 43;
              return Z;
            }
            if (16 === l) {
              var q = c[7], xo = Yd(q), m = c;
              m[1] = xo ? 19 : 20;
              return Z;
            }
            if (38 === l) {
              var yo = c[2], Hl = m = c;
              Hl[2] = yo;
              Hl[1] = 35;
              return Z;
            }
            if (30 === l) {
              var Il = m = c;
              Il[2] = null;
              Il[1] = 32;
              return Z;
            }
            if (10 === l) {
              var cb = c[16], Wa = c[17], Jl = C.a(Wa, cb), Mi = N(Jl, 0), zo = N(Jl, 1);
              c[26] = Mi;
              m = c;
              m[1] = v(zo) ? 13 : 14;
              return Z;
            }
            if (18 === l) {
              var Ao = c[2], Kl = m = c;
              Kl[2] = Ao;
              Kl[1] = 12;
              return Z;
            }
            if (42 === l) {
              return m = c, mk(m, 45, f);
            }
            if (37 === l) {
              var za = c[11], $c = c[25], hl = c[23], Ll = F($c), Bo = xk.d(Ll, za, k);
              c[23] = Ll;
              m = c;
              m[1] = v(Bo) ? 39 : 40;
              return Z;
            }
            if (8 === l) {
              var bb = c[15], cb = c[16], Co = cb < bb, m = c;
              m[1] = v(Co) ? 10 : 11;
              return Z;
            }
            return null;
          };
        }(c, d, e, f, h, k), c, d, e, f, h, k);
      }(), z = function() {
        var b = w.m ? w.m() : w.call(null);
        b[6] = c;
        return b;
      }();
      return lk(z);
    };
  }(k, c, d, e, f, h));
  return d;
};
function Ek(a, b) {
  Bk(a, b, !0);
  return b;
}
function Fk(a) {
  a = fg(a);
  var b = uk.b(null), c = M(a), d = Je(c), e = uk.b(1), f = tf ? tf(null) : sf.call(null, null), h = Lf.a(function(a, b, c, d, e, f) {
    return function(h) {
      return function(a, b, c, d, e, f) {
        return function(a) {
          d[h] = a;
          return 0 === pf.a(f, ke) ? xk.a(e, d.slice(0)) : null;
        };
      }(a, b, c, d, e, f);
    };
  }(a, b, c, d, e, f), new Lh(null, 0, c, 1, null)), k = uk.b(1);
  Zj(function(a, b, c, d, e, f, h, k) {
    return function() {
      var A = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d;
                a: {
                  try {
                    for (;;) {
                      var e = a(c);
                      if (!R(e, Z)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f, qk(c), d = Z;
                    } else {
                      throw f;
                    }
                  }
                }
                if (!R(d, Z)) {
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
              a[1] = v(e) ? 6 : 7;
              return Z;
            }
            if (15 === e) {
              return e = a[2], a[2] = e, a[1] = 3, Z;
            }
            if (13 === e) {
              return e = Ej(c), a[2] = e, a[1] = 15, Z;
            }
            if (6 === e) {
              return a[2] = null, a[1] = 11, Z;
            }
            if (3 === e) {
              return e = a[2], ok(a, e);
            }
            if (12 === e) {
              var e = a[8], e = a[2], m = hf(pb, e);
              a[8] = e;
              a[1] = v(m) ? 13 : 14;
              return Z;
            }
            return 2 === e ? (e = wf.a ? wf.a(h, d) : wf.call(null, h, d), l = 0, a[9] = e, a[7] = l, a[2] = null, a[1] = 4, Z) : 11 === e ? (l = a[7], a[4] = new pk(10, Object, null, 9, a[4], null, null, null), e = function() {
              var a = l;
              return b.b ? b.b(a) : b.call(null, a);
            }(), m = function() {
              var a = l;
              return k.b ? k.b(a) : k.call(null, a);
            }(), e = vk(e, m), a[2] = e, qk(a), Z) : 9 === e ? (l = a[7], a[10] = a[2], a[7] = l + 1, a[2] = null, a[1] = 4, Z) : 5 === e ? (a[11] = a[2], mk(a, 12, f)) : 14 === e ? (e = a[8], e = Qe(gg, e), nk(a, 16, c, e)) : 16 === e ? (a[12] = a[2], a[2] = null, a[1] = 2, Z) : 10 === e ? (m = a[2], e = pf.a(h, ke), a[13] = m, a[2] = e, qk(a), Z) : 8 === e ? (e = a[2], a[2] = e, a[1] = 5, Z) : null;
          };
        }(a, b, c, d, e, f, h, k), a, b, c, d, e, f, h, k);
      }(), H = function() {
        var b = A.m ? A.m() : A.call(null);
        b[6] = a;
        return b;
      }();
      return lk(H);
    };
  }(k, a, b, c, d, e, f, h));
  return b;
}
;function Gk(a) {
  return a.b ? a.b(0) : a.call(null, 0);
}
function Hk(a) {
  return Ai.b(Qd(a)).call(null, Gk(a));
}
function Ik(a) {
  var b = N(a, 0), c = N(a, 1), d = be(c) ? Qe(uf, c) : c, e = Jd(d, Ui), c = Jd(d, wi), f = Jd(d, ej), h = Jd(d, Ci), d = Jd(d, gj);
  return v(f) ? (f = Rd(f), v(d) ? (d = U, b = Me.a(e, J(b, h)), b = Vi.b(Qd(a)).call(null, f, b), c = new T(null, 2, 5, d, [b, v(c) ? O.d(c, gj, !0) : c], null)) : c = new T(null, 2, 5, U, [f, c], null), Ad(c, Qd(a))) : null;
}
function Jk(a) {
  var b = N(a, 0), c = N(a, 1), c = be(c) ? Qe(uf, c) : c, d = Jd(c, Ui), e = Jd(c, Ci), f = N(e, 0), h = oe(e);
  return v(v(c) ? e : c) ? Ad(new T(null, 2, 5, U, [f, O.l(c, Ui, Fd.a(d, b), L([Ci, h], 0))], null), Qd(a)) : null;
}
function Kk(a) {
  if (dd.a(pj, a.b ? a.b(1) : a.call(null, 1))) {
    return a;
  }
  var b;
  b = Hk(a);
  if (v(b)) {
    if (v(Hk(a))) {
      b = N(a, 0);
      var c = N(a, 1), d;
      if (v(Hk(a))) {
        d = Di.b(Qd(a)).call(null, Gk(a));
      } else {
        throw "called children on a leaf node";
      }
      var e = N(d, 0), f = oe(d);
      b = v(d) ? Ad(new T(null, 2, 5, U, [e, new ib(null, 4, [Ui, Gd, ej, v(c) ? Fd.a(ej.b(c), b) : new T(null, 1, 5, U, [b], null), wi, c, Ci, f], null)], null), Qd(a)) : null;
    } else {
      b = null;
    }
  }
  if (v(b)) {
    return b;
  }
  b = Jk(a);
  if (v(b)) {
    return b;
  }
  for (;;) {
    if (v(Ik(a))) {
      b = Jk(Ik(a));
      if (v(b)) {
        return b;
      }
      a = Ik(a);
    } else {
      return new T(null, 2, 5, U, [Gk(a), pj], null);
    }
  }
}
;function Lk(a, b) {
  var c = Re(Ih, a, b);
  return J(c, Hf(function(a) {
    return function(b) {
      return a === b;
    };
  }(c), b));
}
var Mk = function Mk() {
  switch(arguments.length) {
    case 0:
      return Mk.m();
    case 1:
      return Mk.b(arguments[0]);
    case 2:
      return Mk.a(arguments[0], arguments[1]);
    default:
      return Mk.l(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Mk.m = function() {
  return Bh;
};
Mk.b = function(a) {
  return a;
};
Mk.a = function(a, b) {
  return M(a) < M(b) ? zb(Fd, b, a) : zb(Fd, a, b);
};
Mk.l = function(a, b, c) {
  a = Lk(M, Fd.l(c, b, L([a], 0)));
  return zb(Kf, F(a), bd(a));
};
Mk.t = function(a) {
  var b = F(a), c = G(a);
  a = F(c);
  c = G(c);
  return Mk.l(b, a, c);
};
Mk.v = 2;
var Nk = function Nk() {
  switch(arguments.length) {
    case 1:
      return Nk.b(arguments[0]);
    case 2:
      return Nk.a(arguments[0], arguments[1]);
    default:
      return Nk.l(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Nk.b = function(a) {
  return a;
};
Nk.a = function(a, b) {
  for (;;) {
    if (M(b) < M(a)) {
      var c = a;
      a = b;
      b = c;
    } else {
      return zb(function(a, b) {
        return function(a, c) {
          return de(b, c) ? a : Sd.a(a, c);
        };
      }(a, b), a, a);
    }
  }
};
Nk.l = function(a, b, c) {
  a = Lk(function(a) {
    return-M(a);
  }, Fd.l(c, b, L([a], 0)));
  return zb(Nk, F(a), bd(a));
};
Nk.t = function(a) {
  var b = F(a), c = G(a);
  a = F(c);
  c = G(c);
  return Nk.l(b, a, c);
};
Nk.v = 2;
var Ok = function Ok() {
  switch(arguments.length) {
    case 1:
      return Ok.b(arguments[0]);
    case 2:
      return Ok.a(arguments[0], arguments[1]);
    default:
      return Ok.l(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Ok.b = function(a) {
  return a;
};
Ok.a = function(a, b) {
  return M(a) < M(b) ? zb(function(a, d) {
    return de(b, d) ? Sd.a(a, d) : a;
  }, a, a) : zb(Sd, a, b);
};
Ok.l = function(a, b, c) {
  return zb(Ok, a, Fd.a(c, b));
};
Ok.t = function(a) {
  var b = F(a), c = G(a);
  a = F(c);
  c = G(c);
  return Ok.l(b, a, c);
};
Ok.v = 2;
function Pk(a, b) {
  return Ok.a(a, Ch([b]));
}
function Qk(a) {
  if (Td(a)) {
    throw Error([B("Assert failed: "), B(Yh(L([we(new Xc(null, "not", "not", 1044554643, null), we(new Xc(null, "empty?", "empty?", 76408555, null), new Xc(null, "s", "s", -948495851, null)))], 0)))].join(""));
  }
  var b = F(a);
  return new T(null, 2, 5, U, [b, Pk(a, b)], null);
}
function Rk(a) {
  var b = Fh(Cg(a));
  a = Qe(Mk, Dg(a));
  return Ok.a(b, a);
}
function Sk(a) {
  var b = Qe(Mk, Dg(a));
  return zb(function() {
    return function(a, b) {
      return v(Jd(a, b)) ? a : O.d(a, b, Bh);
    };
  }(b), a, b);
}
function Tk(a) {
  return Uk(Sk(a), Gd, Rk(a));
}
function Uk(a, b, c) {
  for (;;) {
    if (Td(c)) {
      return gf(Td, Dg(a)) ? b : null;
    }
    var d = Qk(c), e = N(d, 0), f = N(d, 1), h = function() {
      var b = e;
      return a.b ? a.b(b) : a.call(null, b);
    }();
    c = d = zb(function(a, b, c, d, e) {
      return function(a, b) {
        return Nf.s(a, new T(null, 1, 5, U, [e], null), Pk, b);
      };
    }(a, b, c, d, e, f, h), a, h);
    b = Fd.a(b, e);
    f = Mk.a(f, Nk.a(Rk(d), h));
    a = c;
    c = f;
  }
}
;function Vk(a, b) {
  var c = uk.b(1);
  Zj(function(c) {
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
                      if (!R(e, Z)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f, qk(c), d = Z;
                    } else {
                      throw f;
                    }
                  }
                }
                if (!R(d, Z)) {
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
            return 1 === d ? (c[2] = null, c[1] = 2, Z) : 2 === d ? mk(c, 4, b) : 3 === d ? (d = c[2], ok(c, d)) : 4 === d ? (d = c[7], d = c[2], c[7] = d, c[1] = v(null == d) ? 5 : 6, Z) : 5 === d ? (c[2] = null, c[1] = 7, Z) : 6 === d ? (d = c[7], d = a.b ? a.b(d) : a.call(null, d), c[8] = d, c[2] = null, c[1] = 2, Z) : 7 === d ? (d = c[2], c[2] = d, c[1] = 3, Z) : null;
          };
        }(c), c);
      }(), f = function() {
        var a = e.m ? e.m() : e.call(null);
        a[6] = c;
        return a;
      }();
      return lk(f);
    };
  }(c));
}
;var Wk = function Wk(b) {
  if (b ? b.dd : b) {
    return b.value;
  }
  var c;
  c = Wk[n(null == b ? null : b)];
  if (!c && (c = Wk._, !c)) {
    throw y("BoxedValueProtocol.value", b);
  }
  return c.call(null, b);
}, Xk = function Xk(b) {
  if (b ? b.te : b) {
    return b.qb;
  }
  var c;
  c = Xk[n(null == b ? null : b)];
  if (!c && (c = Xk._, !c)) {
    throw y("EventProtocol.topic", b);
  }
  return c.call(null, b);
}, Yk = function Yk(b) {
  if (b ? b.se : b) {
    return b.timestamp;
  }
  var c;
  c = Yk[n(null == b ? null : b)];
  if (!c && (c = Yk._, !c)) {
    throw y("EventProtocol.timestamp", b);
  }
  return c.call(null, b);
}, Zk = function Zk(b, c) {
  if (b ? b.Gd : b) {
    return b.Gd(0, c);
  }
  var d;
  d = Zk[n(null == b ? null : b)];
  if (!d && (d = Zk._, !d)) {
    throw y("EventProtocol.record-timestamp", b);
  }
  return d.call(null, b, c);
}, $k = function $k(b) {
  if (b ? b.ed : b) {
    return b.ed(b);
  }
  var c;
  c = $k[n(null == b ? null : b)];
  if (!c && (c = $k._, !c)) {
    throw y("MessageProtocol.fresh?", b);
  }
  return c.call(null, b);
};
function al(a, b, c, d, e, f) {
  this.qb = a;
  this.value = b;
  this.timestamp = c;
  this.p = d;
  this.j = e;
  this.i = f;
  this.g = 2229667594;
  this.r = 8192;
}
g = al.prototype;
g.te = function() {
  return this.qb;
};
g.se = function() {
  return this.timestamp;
};
g.Gd = function(a, b) {
  return O.d(this, sj, b);
};
g.w = function(a, b) {
  return Ob.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.na : null) {
    case "topic":
      return this.qb;
    case "value":
      return this.value;
    case "timestamp":
      return this.timestamp;
    default:
      return Kd(this.j, b, c);
  }
};
g.A = function(a, b, c) {
  return Ph(b, function() {
    return function(a) {
      return Ph(b, W, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.Event{", ", ", "}", c, Me.a(new T(null, 3, 5, U, [new T(null, 2, 5, U, [Ti, this.qb], null), new T(null, 2, 5, U, [Pi, this.value], null), new T(null, 2, 5, U, [sj, this.timestamp], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 3 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = pe(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? ug(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.dd = function() {
  return this.value;
};
g.Ca = function(a, b) {
  return de(new zh(null, new ib(null, 3, [Pi, null, Ti, null, sj, null], null), null), b) ? Md.a(Ad(Kf.a(Xe, this), this.p), b) : new al(this.qb, this.value, this.timestamp, this.p, Ve(Md.a(this.j, b)), null);
};
g.ra = function(a, b, c) {
  return v(R.a ? R.a(Ti, b) : R.call(null, Ti, b)) ? new al(c, this.value, this.timestamp, this.p, this.j, null) : v(R.a ? R.a(Pi, b) : R.call(null, Pi, b)) ? new al(this.qb, c, this.timestamp, this.p, this.j, null) : v(R.a ? R.a(sj, b) : R.call(null, sj, b)) ? new al(this.qb, this.value, c, this.p, this.j, null) : new al(this.qb, this.value, this.timestamp, this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(Me.a(new T(null, 3, 5, U, [new T(null, 2, 5, U, [Ti, this.qb], null), new T(null, 2, 5, U, [Pi, this.value], null), new T(null, 2, 5, U, [sj, this.timestamp], null)], null), this.j));
};
g.D = function(a, b) {
  return new al(this.qb, this.value, this.timestamp, b, this.j, this.i);
};
g.G = function(a, b) {
  return Xd(b) ? Qb(this, C.a(b, 0), C.a(b, 1)) : zb(Hb, this, b);
};
function bl(a, b) {
  return new al(a, b, null, null, null, null);
}
function cl(a, b, c, d) {
  this.value = a;
  this.p = b;
  this.j = c;
  this.i = d;
  this.g = 2229667594;
  this.r = 8192;
}
g = cl.prototype;
g.w = function(a, b) {
  return Ob.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.na : null) {
    case "value":
      return this.value;
    default:
      return Kd(this.j, b, c);
  }
};
g.A = function(a, b, c) {
  return Ph(b, function() {
    return function(a) {
      return Ph(b, W, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.Fresh{", ", ", "}", c, Me.a(new T(null, 1, 5, U, [new T(null, 2, 5, U, [Pi, this.value], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 1 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = pe(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? ug(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.dd = function() {
  return this.value;
};
g.ed = function() {
  return!0;
};
g.Ca = function(a, b) {
  return de(new zh(null, new ib(null, 1, [Pi, null], null), null), b) ? Md.a(Ad(Kf.a(Xe, this), this.p), b) : new cl(this.value, this.p, Ve(Md.a(this.j, b)), null);
};
g.ra = function(a, b, c) {
  return v(R.a ? R.a(Pi, b) : R.call(null, Pi, b)) ? new cl(c, this.p, this.j, null) : new cl(this.value, this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(Me.a(new T(null, 1, 5, U, [new T(null, 2, 5, U, [Pi, this.value], null)], null), this.j));
};
g.D = function(a, b) {
  return new cl(this.value, b, this.j, this.i);
};
g.G = function(a, b) {
  return Xd(b) ? Qb(this, C.a(b, 0), C.a(b, 1)) : zb(Hb, this, b);
};
function Ml(a, b, c, d) {
  this.value = a;
  this.p = b;
  this.j = c;
  this.i = d;
  this.g = 2229667594;
  this.r = 8192;
}
g = Ml.prototype;
g.w = function(a, b) {
  return Ob.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.na : null) {
    case "value":
      return this.value;
    default:
      return Kd(this.j, b, c);
  }
};
g.A = function(a, b, c) {
  return Ph(b, function() {
    return function(a) {
      return Ph(b, W, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.Cached{", ", ", "}", c, Me.a(new T(null, 1, 5, U, [new T(null, 2, 5, U, [Pi, this.value], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 1 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = pe(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? ug(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.dd = function() {
  return this.value;
};
g.ed = function() {
  return!1;
};
g.Ca = function(a, b) {
  return de(new zh(null, new ib(null, 1, [Pi, null], null), null), b) ? Md.a(Ad(Kf.a(Xe, this), this.p), b) : new Ml(this.value, this.p, Ve(Md.a(this.j, b)), null);
};
g.ra = function(a, b, c) {
  return v(R.a ? R.a(Pi, b) : R.call(null, Pi, b)) ? new Ml(c, this.p, this.j, null) : new Ml(this.value, this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(Me.a(new T(null, 1, 5, U, [new T(null, 2, 5, U, [Pi, this.value], null)], null), this.j));
};
g.D = function(a, b) {
  return new Ml(this.value, b, this.j, this.i);
};
g.G = function(a, b) {
  return Xd(b) ? Qb(this, C.a(b, 0), C.a(b, 1)) : zb(Hb, this, b);
};
function Nl(a) {
  return new cl(a, null, null, null);
}
function Ol(a) {
  return new Ml(a, null, null, null);
}
var Pl = mf(ci, Ff($k), S.b(Wk)), Ql = {}, Rl = function Rl(b) {
  if (b ? b.Kd : b) {
    return b.Kd();
  }
  var c;
  c = Rl[n(null == b ? null : b)];
  if (!c && (c = Rl._, !c)) {
    throw y("SignalProtocol.signal-deps", b);
  }
  return c.call(null, b);
}, Sl = function Sl(b) {
  if (b ? b.Ld : b) {
    return b.Ld();
  }
  var c;
  c = Sl[n(null == b ? null : b)];
  if (!c && (c = Sl._, !c)) {
    throw y("SignalProtocol.topsort", b);
  }
  return c.call(null, b);
};
function Tl(a) {
  return a ? v(v(null) ? null : a.ue) ? !0 : a.bc ? !1 : x(Ql, a) : x(Ql, a);
}
function Ul(a) {
  return zb(function(a, c) {
    var d = dj.b(c);
    return v(d) ? O.d(a, d, Fd.a(Kd(a, d, Gd), c)) : a;
  }, Xe, a);
}
function Vl(a, b) {
  var c = function(a) {
    return function(b) {
      return Kf.d(Gh(), S.b(a), b);
    };
  }(Hh(b, new Lh(null, 0, Number.MAX_VALUE, 1, null)));
  return Hh(Cg(a), S.a(c, Dg(a)));
}
function Wl(a, b, c, d, e, f, h, k) {
  this.kb = a;
  this.hb = b;
  this.rb = c;
  this.gb = d;
  this.fb = e;
  this.p = f;
  this.j = h;
  this.i = k;
  this.g = 2229667594;
  this.r = 8192;
}
g = Wl.prototype;
g.w = function(a, b) {
  return Ob.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.na : null) {
    case "parents-map":
      return this.kb;
    case "kids-map":
      return this.hb;
    case "topsort":
      return this.rb;
    case "kid-indexes-map":
      return this.gb;
    case "inputs-by-topic":
      return this.fb;
    default:
      return Kd(this.j, b, c);
  }
};
g.A = function(a, b, c) {
  return Ph(b, function() {
    return function(a) {
      return Ph(b, W, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata{", ", ", "}", c, Me.a(new T(null, 5, 5, U, [new T(null, 2, 5, U, [qj, this.kb], null), new T(null, 2, 5, U, [Hi, this.hb], null), new T(null, 2, 5, U, [lj, this.rb], null), new T(null, 2, 5, U, [Qi, this.gb], null), new T(null, 2, 5, U, [nj, this.fb], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 5 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = pe(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? ug(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.Ca = function(a, b) {
  return de(new zh(null, new ib(null, 5, [Hi, null, Qi, null, lj, null, nj, null, qj, null], null), null), b) ? Md.a(Ad(Kf.a(Xe, this), this.p), b) : new Wl(this.kb, this.hb, this.rb, this.gb, this.fb, this.p, Ve(Md.a(this.j, b)), null);
};
g.ra = function(a, b, c) {
  return v(R.a ? R.a(qj, b) : R.call(null, qj, b)) ? new Wl(c, this.hb, this.rb, this.gb, this.fb, this.p, this.j, null) : v(R.a ? R.a(Hi, b) : R.call(null, Hi, b)) ? new Wl(this.kb, c, this.rb, this.gb, this.fb, this.p, this.j, null) : v(R.a ? R.a(lj, b) : R.call(null, lj, b)) ? new Wl(this.kb, this.hb, c, this.gb, this.fb, this.p, this.j, null) : v(R.a ? R.a(Qi, b) : R.call(null, Qi, b)) ? new Wl(this.kb, this.hb, this.rb, c, this.fb, this.p, this.j, null) : v(R.a ? R.a(nj, b) : R.call(null, nj, 
  b)) ? new Wl(this.kb, this.hb, this.rb, this.gb, c, this.p, this.j, null) : new Wl(this.kb, this.hb, this.rb, this.gb, this.fb, this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(Me.a(new T(null, 5, 5, U, [new T(null, 2, 5, U, [qj, this.kb], null), new T(null, 2, 5, U, [Hi, this.hb], null), new T(null, 2, 5, U, [lj, this.rb], null), new T(null, 2, 5, U, [Qi, this.gb], null), new T(null, 2, 5, U, [nj, this.fb], null)], null), this.j));
};
g.D = function(a, b) {
  return new Wl(this.kb, this.hb, this.rb, this.gb, this.fb, b, this.j, this.i);
};
g.G = function(a, b) {
  return Xd(b) ? Qb(this, C.a(b, 0), C.a(b, 1)) : zb(Hb, this, b);
};
function Xl(a, b, c, d, e) {
  return new Wl(a, b, c, d, e, null, null, null);
}
function Yl(a) {
  var b = new ai(function() {
    var b;
    a: {
      b = Xe;
      for (var c = new Hg([a, Bh]), d = Ad(new T(null, 2, 5, U, [a, null], null), new ib(null, 3, [Ai, kf(!0), Di, lf(D, Rl), Vi, null], null));;) {
        var e;
        e = d;
        e = dd.a(pj, e.b ? e.b(1) : e.call(null, 1));
        if (v(e)) {
          b = new ib(null, 2, [qj, b, Hi, c], null);
          break a;
        }
        if (de(b, Gk(d))) {
          b: {
            if (e = Jk(d), v(e)) {
              d = e;
            } else {
              for (;;) {
                if (v(Ik(d))) {
                  e = Jk(Ik(d));
                  if (v(e)) {
                    d = e;
                    break b;
                  }
                  d = Ik(d);
                } else {
                  d = new T(null, 2, 5, U, [Gk(d), pj], null);
                  break b;
                }
              }
            }
          }
        } else {
          e = Gk(d);
          var f = Rl(e), d = Kk(d);
          b = O.d(b, e, f);
          c = yh.l(Mk, L([c, Hh(f, Ef(Ch([e])))], 0));
        }
      }
    }
    return b;
  }, null), c = new ai(function(a) {
    return function() {
      return qj.b(I.b ? I.b(a) : I.call(null, a));
    };
  }(b), null), d = new ai(function(a) {
    return function() {
      return Hi.b(I.b ? I.b(a) : I.call(null, a));
    };
  }(b, c), null), e = new ai(function(a, b) {
    return function() {
      var a = I.b ? I.b(b) : I.call(null, b);
      return Kf.a(Gd, ve(Tk(a)));
    };
  }(b, c, d), null), f = new ai(function(a, b, c, d) {
    return function() {
      return Ul(I.b ? I.b(d) : I.call(null, d));
    };
  }(b, c, d, e), null);
  return Ad(a, Xl(c, d, e, new ai(function(a, b, c, d) {
    return function() {
      return Vl(I.b ? I.b(c) : I.call(null, c), I.b ? I.b(d) : I.call(null, d));
    };
  }(b, c, d, e, f), null), f));
}
function Zl() {
  return $l(arguments[0], arguments[1], 2 < arguments.length ? new E(Array.prototype.slice.call(arguments, 2), 0) : null);
}
function $l(a, b, c) {
  if (null == b) {
    throw Error([B("Assert failed: "), B("This signal is not a valid write-port, use the `jamesmacaulay.zelkova.signal/write-port` constructor if you want to treat this signal like a channel."), B("\n"), B(Yh(L([we(new Xc(null, "not", "not", 1044554643, null), we(new Xc(null, "nil?", "nil?", 1612038930, null), new Xc(null, "ch", "ch", 1085813622, null)))], 0)))].join(""));
  }
  return Re(a, b, c);
}
function am(a, b, c, d, e, f, h, k, l, m) {
  this.Pa = a;
  this.Ha = b;
  this.Sa = c;
  this.Qa = d;
  this.Da = e;
  this.Na = f;
  this.Aa = h;
  this.p = k;
  this.j = l;
  this.i = m;
  this.g = 2229667594;
  this.r = 8192;
}
g = am.prototype;
g.w = function(a, b) {
  return Ob.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.na : null) {
    case "init-fn":
      return this.Pa;
    case "sources":
      return this.Ha;
    case "relayed-event-topic":
      return this.Sa;
    case "msg-xform":
      return this.Qa;
    case "deps":
      return this.Da;
    case "event-sources":
      return this.Na;
    case "write-port-channel":
      return this.Aa;
    default:
      return Kd(this.j, b, c);
  }
};
g.Zb = function() {
  return Zl(Ej, this.Aa);
};
g.A = function(a, b, c) {
  return Ph(b, function() {
    return function(a) {
      return Ph(b, W, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.SignalDefinition{", ", ", "}", c, Me.a(new T(null, 7, 5, U, [new T(null, 2, 5, U, [$i, this.Pa], null), new T(null, 2, 5, U, [Li, this.Ha], null), new T(null, 2, 5, U, [dj, this.Sa], null), new T(null, 2, 5, U, [tj, this.Qa], null), new T(null, 2, 5, U, [xj, this.Da], null), new T(null, 2, 5, U, [xi, this.Na], null), new T(null, 2, 5, U, [Zi, this.Aa], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 7 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = pe(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? ug(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.ue = !0;
g.Kd = function() {
  var a = this.Da;
  return Kf.d(Bh, Ff(Tl), v(a) ? a : this.Ha);
};
g.Ld = function() {
  var a = lj.b(Qd(this));
  return I.b ? I.b(a) : I.call(null, a);
};
g.$b = function(a, b, c) {
  return $l(Dj, this.Aa, L([b, c], 0));
};
g.Ca = function(a, b) {
  return de(new zh(null, new ib(null, 7, [xi, null, Li, null, Zi, null, $i, null, dj, null, tj, null, xj, null], null), null), b) ? Md.a(Ad(Kf.a(Xe, this), this.p), b) : new am(this.Pa, this.Ha, this.Sa, this.Qa, this.Da, this.Na, this.Aa, this.p, Ve(Md.a(this.j, b)), null);
};
g.ra = function(a, b, c) {
  return v(R.a ? R.a($i, b) : R.call(null, $i, b)) ? new am(c, this.Ha, this.Sa, this.Qa, this.Da, this.Na, this.Aa, this.p, this.j, null) : v(R.a ? R.a(Li, b) : R.call(null, Li, b)) ? new am(this.Pa, c, this.Sa, this.Qa, this.Da, this.Na, this.Aa, this.p, this.j, null) : v(R.a ? R.a(dj, b) : R.call(null, dj, b)) ? new am(this.Pa, this.Ha, c, this.Qa, this.Da, this.Na, this.Aa, this.p, this.j, null) : v(R.a ? R.a(tj, b) : R.call(null, tj, b)) ? new am(this.Pa, this.Ha, this.Sa, c, this.Da, this.Na, 
  this.Aa, this.p, this.j, null) : v(R.a ? R.a(xj, b) : R.call(null, xj, b)) ? new am(this.Pa, this.Ha, this.Sa, this.Qa, c, this.Na, this.Aa, this.p, this.j, null) : v(R.a ? R.a(xi, b) : R.call(null, xi, b)) ? new am(this.Pa, this.Ha, this.Sa, this.Qa, this.Da, c, this.Aa, this.p, this.j, null) : v(R.a ? R.a(Zi, b) : R.call(null, Zi, b)) ? new am(this.Pa, this.Ha, this.Sa, this.Qa, this.Da, this.Na, c, this.p, this.j, null) : new am(this.Pa, this.Ha, this.Sa, this.Qa, this.Da, this.Na, this.Aa, 
  this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(Me.a(new T(null, 7, 5, U, [new T(null, 2, 5, U, [$i, this.Pa], null), new T(null, 2, 5, U, [Li, this.Ha], null), new T(null, 2, 5, U, [dj, this.Sa], null), new T(null, 2, 5, U, [tj, this.Qa], null), new T(null, 2, 5, U, [xj, this.Da], null), new T(null, 2, 5, U, [xi, this.Na], null), new T(null, 2, 5, U, [Zi, this.Aa], null)], null), this.j));
};
g.D = function(a, b) {
  return new am(this.Pa, this.Ha, this.Sa, this.Qa, this.Da, this.Na, this.Aa, b, this.j, this.i);
};
g.G = function(a, b) {
  return Xd(b) ? Qb(this, C.a(b, 0), C.a(b, 1)) : zb(Hb, this, b);
};
function bm(a) {
  var b = dj.b(a);
  return v(b) ? O.l(a, Li, new T(null, 1, 5, U, [Oi], null), L([tj, lf(S.b(function(a) {
    return function(b) {
      var e = N(b, 0);
      N(b, 1);
      N(b, 2);
      return dd.a(a, Xk(e)) ? Nl(Wk(e)) : null;
    };
  }(b, b)), Ff(jf(pb)))], 0)) : a;
}
function cm(a) {
  a = bm(a);
  a = new am($i.b(a), Li.b(a), dj.b(a), tj.b(a), xj.b(a), xi.b(a), Zi.b(a), null, Md.l(a, $i, L([Li, dj, tj, xj, xi, Zi], 0)), null);
  return Yl(a);
}
function dm(a) {
  if (1 >= M(a)) {
    return a;
  }
  var b = function(a) {
    return function(b) {
      return Kf.d(Gd, lf(ci, zf(a)), new T(null, 2, 5, U, [b, Ef(Ol(Wk(Ed(b))))], null));
    };
  }(ge(le, S.a(M, a)));
  return S.a(b, a);
}
function em(a) {
  return Re(S, gg, a);
}
function fm(a) {
  return function(a) {
    return function(c, d) {
      var e = em(dm(d)), e = zb(function(a, b) {
        return function(a, c) {
          var d = N(c, 0), e = oe(c), f = Wk(Rd(a)), e = fg(e), d = b(new T(null, 3, 5, U, [d, f, e], null));
          return Kf.a(a, d);
        };
      }(e, a), new T(null, 1, 5, U, [new Ml(c, null, null, null)], null), e);
      return dd.a(1, M(e)) ? e : ig(e, 1, M(e));
    };
  }(function(b) {
    return new ff(ef(a, cf(new T(null, 1, 5, U, [b], null))), null, null, null);
  });
}
function gm(a, b) {
  var c = Jd(a, b);
  return Ek(c, uk.m());
}
function hm(a, b, c, d) {
  b = fm(b);
  var e = uk.b(1);
  Zj(function(b, e) {
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
                      if (!R(e, Z)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f, qk(c), d = Z;
                    } else {
                      throw f;
                    }
                  }
                }
                if (!R(d, Z)) {
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
              return mk(b, 4, c);
            }
            if (3 === f) {
              return f = b[2], ok(b, f);
            }
            if (4 === f) {
              var h = b[8], f = b[2];
              b[8] = f;
              b[1] = v(null == f) ? 5 : 6;
              return Z;
            }
            if (5 === f) {
              return f = Ej(d), b[2] = f, b[1] = 7, Z;
            }
            if (6 === f) {
              var h = b[8], f = b[7], k = b[9], f = e.a ? e.a(f, h) : e.call(null, f, h);
              b[9] = f;
              return nk(b, 8, d, f);
            }
            return 7 === f ? (f = b[2], b[2] = f, b[1] = 3, Z) : 8 === f ? (k = b[9], h = b[2], f = Ed(k), f = Wk(f), b[10] = h, b[7] = f, b[2] = null, b[1] = 2, Z) : null;
          };
        }(b, e), b, e);
      }(), l = function() {
        var a = k.m ? k.m() : k.call(null);
        a[6] = b;
        return a;
      }();
      return lk(l);
    };
  }(e, b));
}
function im(a, b, c, d) {
  var e = be(b) ? Qe(uf, b) : b;
  b = Jd(e, $i);
  var f = Jd(e, Li), e = Jd(e, tj);
  a = Kf.d(new T(null, 1, 5, U, [gm(a, Oi)], null), S.b(nf(gm, a)), f);
  a = Fk(a);
  f = uk.m();
  hm(b.a ? b.a(c, d) : b.call(null, c, d), e, a, f);
  return Dk(f);
}
function jm(a, b, c, d) {
  return zb(function(a, b) {
    return O.d(a, b, im(a, b, c, d));
  }, new ib(null, 1, [Oi, b], null), a);
}
function km(a) {
  return Kf.d(Xe, S.b(xi), a);
}
var lm = function lm(b, c) {
  if (b ? b.Jd : b) {
    return b.Jd(0, c);
  }
  var d;
  d = lm[n(null == b ? null : b)];
  if (!d && (d = lm._, !d)) {
    throw y("LiveChannelGraphProtocol.signal-mult", b);
  }
  return d.call(null, b, c);
}, mm = function mm(b) {
  if (b ? b.Hd : b) {
    return b.Hd();
  }
  var c;
  c = mm[n(null == b ? null : b)];
  if (!c && (c = mm._, !c)) {
    throw y("LiveChannelGraphProtocol.connect-to-world", b);
  }
  return c.call(null, b);
}, nm = function nm(b) {
  if (b ? b.Id : b) {
    return b.Id();
  }
  var c;
  c = nm[n(null == b ? null : b)];
  if (!c && (c = nm._, !c)) {
    throw y("LiveChannelGraphProtocol.init", b);
  }
  return c.call(null, b);
};
function om(a, b, c, d, e, f, h, k) {
  this.definition = a;
  this.ya = b;
  this.Xa = c;
  this.Ra = d;
  this.Ga = e;
  this.p = f;
  this.j = h;
  this.i = k;
  this.g = 2229667594;
  this.r = 8192;
}
g = om.prototype;
g.w = function(a, b) {
  return Ob.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.na : null) {
    case "definition":
      return this.definition;
    case "events-channel":
      return this.ya;
    case "mult-map":
      return this.Xa;
    case "output-values-mult":
      return this.Ra;
    case "opts":
      return this.Ga;
    default:
      return Kd(this.j, b, c);
  }
};
g.Zb = function() {
  return Ej(this.ya);
};
g.A = function(a, b, c) {
  return Ph(b, function() {
    return function(a) {
      return Ph(b, W, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.LiveChannelGraph{", ", ", "}", c, Me.a(new T(null, 5, 5, U, [new T(null, 2, 5, U, [zi, this.definition], null), new T(null, 2, 5, U, [yi, this.ya], null), new T(null, 2, 5, U, [Ri, this.Xa], null), new T(null, 2, 5, U, [Yi, this.Ra], null), new T(null, 2, 5, U, [cj, this.Ga], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 5 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = pe(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? ug(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.Jd = function(a, b) {
  return Jd(this.Xa, b);
};
g.Hd = function() {
  for (var a = this, b = this, c = km(Sl(a.definition)), c = D(Dg(c)), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.N(null, f);
      yk(function() {
        var c = a.Ga;
        return h.a ? h.a(b, c) : h.call(null, b, c);
      }(), a.ya);
      f += 1;
    } else {
      if (c = D(c)) {
        d = c;
        if (Yd(d)) {
          c = Ac(d), f = Bc(d), d = c, e = M(c), c = f;
        } else {
          var k = F(d);
          yk(function() {
            var c = a.Ga;
            return k.a ? k.a(b, c) : k.call(null, b, c);
          }(), a.ya);
          c = G(d);
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
g.Id = function() {
  return $i.b(this.definition).call(null, this, this.Ga);
};
g.$b = function(a, b, c) {
  return Dj(this.ya, b, c);
};
g.Ca = function(a, b) {
  return de(new zh(null, new ib(null, 5, [yi, null, zi, null, Ri, null, Yi, null, cj, null], null), null), b) ? Md.a(Ad(Kf.a(Xe, this), this.p), b) : new om(this.definition, this.ya, this.Xa, this.Ra, this.Ga, this.p, Ve(Md.a(this.j, b)), null);
};
g.ra = function(a, b, c) {
  return v(R.a ? R.a(zi, b) : R.call(null, zi, b)) ? new om(c, this.ya, this.Xa, this.Ra, this.Ga, this.p, this.j, null) : v(R.a ? R.a(yi, b) : R.call(null, yi, b)) ? new om(this.definition, c, this.Xa, this.Ra, this.Ga, this.p, this.j, null) : v(R.a ? R.a(Ri, b) : R.call(null, Ri, b)) ? new om(this.definition, this.ya, c, this.Ra, this.Ga, this.p, this.j, null) : v(R.a ? R.a(Yi, b) : R.call(null, Yi, b)) ? new om(this.definition, this.ya, this.Xa, c, this.Ga, this.p, this.j, null) : v(R.a ? R.a(cj, 
  b) : R.call(null, cj, b)) ? new om(this.definition, this.ya, this.Xa, this.Ra, c, this.p, this.j, null) : new om(this.definition, this.ya, this.Xa, this.Ra, this.Ga, this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(Me.a(new T(null, 5, 5, U, [new T(null, 2, 5, U, [zi, this.definition], null), new T(null, 2, 5, U, [yi, this.ya], null), new T(null, 2, 5, U, [Ri, this.Xa], null), new T(null, 2, 5, U, [Yi, this.Ra], null), new T(null, 2, 5, U, [cj, this.Ga], null)], null), this.j));
};
g.D = function(a, b) {
  return new om(this.definition, this.ya, this.Xa, this.Ra, this.Ga, b, this.j, this.i);
};
g.wd = !0;
g.Zc = function(a, b, c) {
  return Bk(this.Ra, b, c);
};
g.tc = function(a, b) {
  return Ck(this.Ra, b);
};
g.G = function(a, b) {
  return Xd(b) ? Qb(this, C.a(b, 0), C.a(b, 1)) : zb(Hb, this, b);
};
var pm = function pm(b, c) {
  if (b ? b.gd : b) {
    return b.gd(b, c);
  }
  var d;
  d = pm[n(null == b ? null : b)];
  if (!d && (d = pm._, !d)) {
    throw y("SignalLike.spawn*", b);
  }
  return d.call(null, b, c);
}, qm = function qm(b, c, d) {
  if (b ? b.fd : b) {
    return b.fd(b, c, d);
  }
  var e;
  e = qm[n(null == b ? null : b)];
  if (!e && (e = qm._, !e)) {
    throw y("SignalLike.pipe-to-atom*", b);
  }
  return e.call(null, b, c, d);
}, rm = S.b(lf(nf(S, function(a) {
  return null == Yk(a) ? Zk(a, (new Date).valueOf()) : a;
}), function(a) {
  return Vd(a) ? a : null == a ? Gd : new T(null, 1, 5, U, [a], null);
}));
om.prototype.gd = function(a, b) {
  return pm(uj.b(this), b);
};
om.prototype.fd = function(a, b, c) {
  Vk(D(c) ? of(b, c) : nf(wf, b), Ek(this, uk.m()));
  return b;
};
am.prototype.gd = function(a, b) {
  var c = uk.a(1, rm), d = Dk(c), d = jm(Sl(this), d, this, b), e = Dk(Ek(Jd(d, this), uk.a(1, Pl)));
  return mm(new om(this, c, d, e, b, null, null, null));
};
am.prototype.fd = function(a, b, c) {
  return qm(pm(this, null), b, c);
};
if ("undefined" === typeof ui) {
  var ui = function() {
    var a = tf ? tf(Xe) : sf.call(null, Xe), b = tf ? tf(Xe) : sf.call(null, Xe), c = tf ? tf(Xe) : sf.call(null, Xe), d = tf ? tf(Xe) : sf.call(null, Xe), e = Kd(Xe, rj, ii());
    return new si(ad("jamesmacaulay.zelkova.impl.signal", "value-source-\x3eevents-fn"), function() {
      return function(a) {
        if (a ? v(v(null) ? null : a.wd) || (a.bc ? 0 : x(Ak, a)) : x(Ak, a)) {
          a = jj;
        } else {
          if (a ? v(v(null) ? null : a.ne) || (a.bc ? 0 : x(Bj, a)) : x(Bj, a)) {
            a = ij;
          } else {
            var b = Nd(a);
            a = (b ? b : a ? a.g & 1 || a.Ke || (a.g ? 0 : x(Cb, a)) : x(Cb, a)) ? Ei : null;
          }
        }
        return a;
      };
    }(a, b, c, d, e), Ji, e, a, b, c, d);
  }()
}
ti(Ei, function(a, b) {
  return function(c, d) {
    var e = a.a ? a.a(c, d) : a.call(null, c, d);
    return yk(e, uk.a(1, S.b(nf(bl, b))));
  };
});
ti(jj, function(a, b) {
  function c() {
    return Ek(a, uk.m());
  }
  return ui.a ? ui.a(c, b) : ui.call(null, c, b);
});
ti(ij, function(a, b) {
  var c = Dk(a);
  return ui.a ? ui.a(c, b) : ui.call(null, c, b);
});
function sm(a) {
  var b = ze.b($h()), c = uk.m();
  return cm(new ib(null, 4, [$i, kf(a), dj, b, xi, new Hg([b, ui.a ? ui.a(c, b) : ui.call(null, c, b)]), Zi, c], null));
}
function tm(a) {
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
          return od(a) ? a : new nd(a);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    d.m = c;
    d.b = b;
    d.a = function(a) {
      return od(a) ? a : new nd(a);
    };
    return d;
  }();
}
function um(a) {
  return cm(new ib(null, 3, [$i, kf(a), Li, new T(null, 1, 5, U, [Oi], null), tj, tm], null));
}
function vm(a, b) {
  if (Td(b)) {
    return um(a.m ? a.m() : a.call(null));
  }
  var c = fg(b), d = mf(S.b(function() {
    return function(a) {
      N(a, 0);
      N(a, 1);
      return N(a, 2);
    };
  }(c)), Ff(function() {
    return function(a) {
      return hf($k, a);
    };
  }(c)), S.b(function() {
    return function(b) {
      return Nl(Qe(a, S.a(Wk, b)));
    };
  }(c)));
  return cm(new ib(null, 3, [$i, function(b, c) {
    return function(d, k) {
      return Qe(a, S.a(function() {
        return function(a) {
          return $i.b(a).call(null, d, k);
        };
      }(b, c), b));
    };
  }(c, d), Li, c, tj, d], null));
}
function wm(a, b) {
  return vm(a, b);
}
function xm(a, b, c) {
  return cm(new ib(null, 3, [$i, kf(b), Li, new T(null, 1, 5, U, [c], null), tj, lf(Ff(function(a) {
    N(a, 0);
    N(a, 1);
    a = N(a, 2);
    a = N(a, 0);
    return $k(a);
  }), S.b(function(b) {
    N(b, 0);
    var c = N(b, 1);
    b = N(b, 2);
    b = N(b, 0);
    b = Wk(b);
    c = a.a ? a.a(b, c) : a.call(null, b, c);
    return Nl(c);
  }))], null));
}
function ym(a, b, c) {
  var d = new T(null, 4, 5, U, [mj, b, a, c], null);
  return cm(new ib(null, 4, [$i, b, xj, new T(null, 1, 5, U, [c], null), dj, d, xi, new Hg([d, function(b) {
    return function(d) {
      d = Ek(lm(d, c), uk.a(1, Pl));
      var h = uk.a(1, S.b(nf(bl, b)));
      a.a ? a.a(d, h) : a.call(null, d, h);
      return h;
    };
  }(d)])], null));
}
function zm(a) {
  return lf(S.b(function(b) {
    N(b, 0);
    N(b, 1);
    b = N(b, 2);
    b = N(b, 0);
    var c;
    c = $k(b);
    v(c) && (c = Wk(b), c = a.b ? a.b(c) : a.call(null, c));
    return v(c) ? Nl(Wk(b)) : null;
  }), Ff(jf(pb)));
}
function Am(a) {
  a = pm(a, null);
  var b;
  b = nm(a);
  var c = new ib(null, 1, [Gi, a], null);
  b = sf.d ? sf.d(b, mb, c) : sf.call(null, b, mb, c);
  return qm(a, b, null);
}
;var Bm = Ld("readonly ismap class minlength for colspan usemap rowspan contenteditable maxlength novalidate tabindex".split(" "), "readOnly isMap className minLength htmlFor colSpan useMap rowSpan contentEditable maxLength noValidate tabIndex".split(" "));
function Cm(a) {
  return zb(function(a, c) {
    var d = N(c, 0), e = N(c, 1), d = Ae(d);
    dd.a(d, "style") ? a.attributes = {style:e} : a[Bm.a ? Bm.a(d, d) : Bm.call(null, d, d)] = e;
    return a;
  }, {}, a);
}
;var Dm;
a: {
  var Em = ca.navigator;
  if (Em) {
    var Fm = Em.userAgent;
    if (Fm) {
      Dm = Fm;
      break a;
    }
  }
  Dm = "";
}
;var Gm = -1 != Dm.indexOf("Opera") || -1 != Dm.indexOf("OPR"), Hm = -1 != Dm.indexOf("Trident") || -1 != Dm.indexOf("MSIE"), Im = -1 != Dm.indexOf("Gecko") && -1 == Dm.toLowerCase().indexOf("webkit") && !(-1 != Dm.indexOf("Trident") || -1 != Dm.indexOf("MSIE")), Jm = -1 != Dm.toLowerCase().indexOf("webkit");
function Km() {
  var a = ca.document;
  return a ? a.documentMode : void 0;
}
var Lm = function() {
  var a = "", b;
  if (Gm && ca.opera) {
    return a = ca.opera.version, ha(a) ? a() : a;
  }
  Im ? b = /rv\:([^\);]+)(\)|;)/ : Hm ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Jm && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(Dm)) ? a[1] : "");
  return Hm && (b = Km(), b > parseFloat(a)) ? String(b) : a;
}(), Mm = {};
function Nm(a) {
  if (!Mm[a]) {
    for (var b = 0, c = sa(String(Lm)).split("."), d = sa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var p = l.exec(h) || ["", "", ""], q = m.exec(k) || ["", "", ""];
        if (0 == p[0].length && 0 == q[0].length) {
          break;
        }
        b = Ka(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == q[1].length ? 0 : parseInt(q[1], 10)) || Ka(0 == p[2].length, 0 == q[2].length) || Ka(p[2], q[2]);
      } while (0 == b);
    }
    Mm[a] = 0 <= b;
  }
}
var Om = ca.document, Pm = Om && Hm ? Km() || ("CSS1Compat" == Om.compatMode ? parseInt(Lm, 10) : 5) : void 0;
var Qm = !Hm || Hm && 9 <= Pm;
!Im && !Hm || Hm && Hm && 9 <= Pm || Im && Nm("1.9.1");
Hm && Nm("9");
function Rm(a, b) {
  La(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Sm ? a.setAttribute(Sm[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
  });
}
var Sm = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Tm(a, b, c) {
  var d = arguments, e = document, f = d[0], h = d[1];
  if (!Qm && h && (h.name || h.type)) {
    f = ["\x3c", f];
    h.name && f.push(' name\x3d"', va(h.name), '"');
    if (h.type) {
      f.push(' type\x3d"', va(h.type), '"');
      var k = {};
      Qa(k, h);
      delete k.type;
      h = k;
    }
    f.push("\x3e");
    f = f.join("");
  }
  f = e.createElement(f);
  h && (fa(h) ? f.className = h : "array" == n(h) ? f.className = h.join(" ") : Rm(f, h));
  2 < d.length && Um(e, f, d);
  return f;
}
function Um(a, b, c) {
  function d(c) {
    c && b.appendChild(fa(c) ? a.createTextNode(c) : c);
  }
  for (var e = 2;e < c.length;e++) {
    var f = c[e];
    !ea(f) || ia(f) && 0 < f.nodeType ? d(f) : Ua(Vm(f) ? Za(f) : f, d);
  }
}
function Vm(a) {
  if (a && "number" == typeof a.length) {
    if (ia(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if (ha(a)) {
      return "function" == typeof a.item;
    }
  }
  return!1;
}
;var Wm = function Wm(b) {
  if (b ? b.kd : b) {
    return b.kd(b);
  }
  var c;
  c = Wm[n(null == b ? null : b)];
  if (!c && (c = Wm._, !c)) {
    throw y("IDOMBuilder.-node", b);
  }
  return c.call(null, b);
};
Wm._ = function(a) {
  a = "" + B(a);
  return document.createTextNode(String(a));
};
Wm.string = function(a) {
  return document.createTextNode(String(a));
};
Node.prototype.kd = function() {
  return this;
};
var Df = lf(function(a) {
  return a instanceof P;
}, F);
function Xm(a) {
  return fg(Hf(pb, Jf(a)));
}
function Ym(a) {
  if ("string" === typeof a) {
    var b = /\s+/;
    a = dd.a("" + B(b), "/(?:)/") ? Fd.a(fg(J("", S.a(B, D(a)))), "") : fg(("" + B(a)).split(b));
    if (dd.a(0, 0)) {
      a: {
        for (;;) {
          if (dd.a("", Rd(a))) {
            a = null == a ? null : Zb(a);
          } else {
            break a;
          }
        }
      }
    }
    a = Fh(a);
  } else {
    a = Ud(a) ? a : Vd(a) ? Fh(a) : Bh;
  }
  return a;
}
function Zm(a, b) {
  var c;
  c = aj.b(a);
  c = v(c) ? c : aj.b(b);
  if (v(c)) {
    c = Ym(aj.b(a));
    var d = Ym(aj.b(b));
    a: {
      for (d = Mk.a(c, d), c = new Ra, d = D(d);;) {
        if (d) {
          c.append("" + B(F(d))), d = G(d), null != d && c.append(" ");
        } else {
          c = c.toString();
          break a;
        }
      }
    }
    return O.d(Kf.a(a, b), aj, c);
  }
  return Kf.a(a, b);
}
function $m(a, b, c, d, e, f) {
  this.tag = a;
  this.Ba = b;
  this.children = c;
  this.p = d;
  this.j = e;
  this.i = f;
  this.g = 2229667595;
  this.r = 8192;
}
g = $m.prototype;
g.w = function(a, b) {
  return Ob.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.na : null) {
    case "tag":
      return this.tag;
    case "attrs":
      return this.Ba;
    case "children":
      return this.children;
    default:
      return Kd(this.j, b, c);
  }
};
g.A = function(a, b, c) {
  return Ph(b, function() {
    return function(a) {
      return Ph(b, W, "", " ", "", c, a);
    };
  }(this), "#stch.html.Element{", ", ", "}", c, Me.a(new T(null, 3, 5, U, [new T(null, 2, 5, U, [oj, this.tag], null), new T(null, 2, 5, U, [kj, this.Ba], null), new T(null, 2, 5, U, [Bi, this.children], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 3 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = pe(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? ug(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.kd = function() {
  if (D(this.children)) {
    return Se(Tm, this.tag, gi(this.Ba), S.a(Wm, this.children));
  }
  var a = this.tag, b = gi(this.Ba);
  return Tm(a, b);
};
g.Ca = function(a, b) {
  return de(new zh(null, new ib(null, 3, [Bi, null, kj, null, oj, null], null), null), b) ? Md.a(Ad(Kf.a(Xe, this), this.p), b) : new $m(this.tag, this.Ba, this.children, this.p, Ve(Md.a(this.j, b)), null);
};
g.ra = function(a, b, c) {
  return v(R.a ? R.a(oj, b) : R.call(null, oj, b)) ? new $m(c, this.Ba, this.children, this.p, this.j, null) : v(R.a ? R.a(kj, b) : R.call(null, kj, b)) ? new $m(this.tag, c, this.children, this.p, this.j, null) : v(R.a ? R.a(Bi, b) : R.call(null, Bi, b)) ? new $m(this.tag, this.Ba, c, this.p, this.j, null) : new $m(this.tag, this.Ba, this.children, this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(Me.a(new T(null, 3, 5, U, [new T(null, 2, 5, U, [oj, this.tag], null), new T(null, 2, 5, U, [kj, this.Ba], null), new T(null, 2, 5, U, [Bi, this.children], null)], null), this.j));
};
g.D = function(a, b) {
  return new $m(this.tag, this.Ba, this.children, b, this.j, this.i);
};
g.G = function(a, b) {
  return Xd(b) ? Qb(this, C.a(b, 0), C.a(b, 1)) : zb(Hb, this, b);
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
    var e = an.b ? an.b(b) : an.call(null, b), f = N(e, 0), e = N(e, 1);
    return new $m(this.tag, Zm(this.Ba, f), Kf.a(this.children, e), null, null, null);
  }
  a.v = 1;
  a.t = function(a) {
    F(a);
    a = bd(a);
    return b(0, a);
  };
  a.l = b;
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(vb(b)));
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
    var b = an.b ? an.b(a) : an.call(null, a);
    a = N(b, 0);
    b = N(b, 1);
    return new $m(this.tag, Zm(this.Ba, a), Kf.a(this.children, b), null, null, null);
  }
  a.v = 0;
  a.t = function(a) {
    a = D(a);
    return b(a);
  };
  a.l = b;
  return a;
}();
function an(a) {
  var b = N(a, 0), c = oe(a);
  return b instanceof $m ? new T(null, 2, 5, U, [Xe, Xm(a)], null) : b instanceof P ? (a = Mf(2, 2, new T(null, 1, 5, U, [null], null), a), b = new T(null, 2, 5, U, [Jh(Df, a), Cf(a)], null), a = N(b, 0), b = N(b, 1), new T(null, 2, 5, U, [Kf.a(Xe, S.a(fg, a)), Xm(b)], null)) : Wd(b) ? new T(null, 2, 5, U, [b, Xm(c)], null) : new T(null, 2, 5, U, [Xe, Xm(a)], null);
}
function bn(a) {
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
      return Qe(new $m(a, Xe, Gd, null, null, null), b);
    }
    b.v = 0;
    b.t = function(a) {
      a = D(a);
      return c(a);
    };
    b.l = c;
    return b;
  }();
}
var cn = bn("div"), dn = bn("input"), en = bn("li"), fn = bn("ul");
var gn = VDOM.VNode, hn = VDOM.VText, jn = VDOM.create, kn = VDOM.patch, ln = VDOM.diff, mn = function mn(b) {
  if (b ? b.Ed : b) {
    return b.Ed();
  }
  var c;
  c = mn[n(null == b ? null : b)];
  if (!c && (c = mn._, !c)) {
    throw y("VDOMBuilder.-vtree", b);
  }
  return c.call(null, b);
};
mn.string = function(a) {
  return new hn(a);
};
$m.prototype.Ed = function() {
  return new gn(Ae(this.tag), Cm(this.Ba), gi(S.a(mn, this.children)));
};
mn._ = function(a) {
  return new hn(a.toString());
};
function nn(a) {
  return Vd(a) ? new gn("div", {}, gi(S.a(mn, a))) : mn(a);
}
function on(a, b, c, d, e) {
  this.xa = a;
  this.Hb = b;
  this.p = c;
  this.j = d;
  this.i = e;
  this.g = 2229667594;
  this.r = 8192;
}
g = on.prototype;
g.w = function(a, b) {
  return Ob.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.na : null) {
    case "tree":
      return this.xa;
    case "root-node":
      return this.Hb;
    default:
      return Kd(this.j, b, c);
  }
};
g.A = function(a, b, c) {
  return Ph(b, function() {
    return function(a) {
      return Ph(b, W, "", " ", "", c, a);
    };
  }(this), "#dominator.core.VDOM{", ", ", "}", c, Me.a(new T(null, 2, 5, U, [new T(null, 2, 5, U, [Fi, this.xa], null), new T(null, 2, 5, U, [vj, this.Hb], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 2 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = pe(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? ug(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.Ca = function(a, b) {
  return de(new zh(null, new ib(null, 2, [Fi, null, vj, null], null), null), b) ? Md.a(Ad(Kf.a(Xe, this), this.p), b) : new on(this.xa, this.Hb, this.p, Ve(Md.a(this.j, b)), null);
};
g.ra = function(a, b, c) {
  return v(R.a ? R.a(Fi, b) : R.call(null, Fi, b)) ? new on(c, this.Hb, this.p, this.j, null) : v(R.a ? R.a(vj, b) : R.call(null, vj, b)) ? new on(this.xa, c, this.p, this.j, null) : new on(this.xa, this.Hb, this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(Me.a(new T(null, 2, 5, U, [new T(null, 2, 5, U, [Fi, this.xa], null), new T(null, 2, 5, U, [vj, this.Hb], null)], null), this.j));
};
g.D = function(a, b) {
  return new on(this.xa, this.Hb, b, this.j, this.i);
};
g.G = function(a, b) {
  return Xd(b) ? Qb(this, C.a(b, 0), C.a(b, 1)) : zb(Hb, this, b);
};
function pn(a) {
  return function(b) {
    return function(c) {
      var d = nn(c), e = I.b ? I.b(b) : I.call(null, b);
      if (null == e) {
        return c = jn.b ? jn.b(d) : jn.call(null, d), a.appendChild(c), c = new on(d, c, null, null, null), wf.a ? wf.a(b, c) : wf.call(null, b, c);
      }
      var f = function() {
        var a = e.xa;
        return ln.a ? ln.a(a, d) : ln.call(null, a, d);
      }();
      c = function() {
        var a = e.Hb;
        return kn.a ? kn.a(a, f) : kn.call(null, a, f);
      }();
      c = new on(d, c, null, null, null);
      return wf.a ? wf.a(b, c) : wf.call(null, b, c);
    };
  }(tf ? tf(null) : sf.call(null, null));
}
function qn(a) {
  return window.requestAnimationFrame(a);
}
var rn = function(a) {
  return function(b, c) {
    var d = I.b ? I.b(a) : I.call(null, a);
    return dd.a(c, d) ? null : (b.b ? b.b(c) : b.call(null, c), wf.a ? wf.a(a, c) : wf.call(null, a, c));
  };
}(tf ? tf(wj) : sf.call(null, wj));
function sn(a) {
  if ("function" == typeof a.vb) {
    return a.vb();
  }
  if (fa(a)) {
    return a.split("");
  }
  if (ea(a)) {
    for (var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d]);
    }
    return b;
  }
  return Na(a);
}
function tn(a, b, c) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, c);
  } else {
    if (ea(a) || fa(a)) {
      Ua(a, b, c);
    } else {
      var d;
      if ("function" == typeof a.Pb) {
        d = a.Pb();
      } else {
        if ("function" != typeof a.vb) {
          if (ea(a) || fa(a)) {
            d = [];
            for (var e = a.length, f = 0;f < e;f++) {
              d.push(f);
            }
          } else {
            d = Oa(a);
          }
        } else {
          d = void 0;
        }
      }
      for (var e = sn(a), f = e.length, h = 0;h < f;h++) {
        b.call(c, e[h], d && d[h], a);
      }
    }
  }
}
;function un(a, b) {
  this.ib = {};
  this.wa = [];
  this.ma = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1]);
    }
  } else {
    if (a) {
      a instanceof un ? (c = a.Pb(), d = a.vb()) : (c = Oa(a), d = Na(a));
      for (var e = 0;e < c.length;e++) {
        this.set(c[e], d[e]);
      }
    }
  }
}
g = un.prototype;
g.vb = function() {
  vn(this);
  for (var a = [], b = 0;b < this.wa.length;b++) {
    a.push(this.ib[this.wa[b]]);
  }
  return a;
};
g.Pb = function() {
  vn(this);
  return this.wa.concat();
};
g.vc = function(a) {
  return wn(this.ib, a);
};
g.clear = function() {
  this.ib = {};
  this.ma = this.wa.length = 0;
};
g.remove = function(a) {
  return wn(this.ib, a) ? (delete this.ib[a], this.ma--, this.wa.length > 2 * this.ma && vn(this), !0) : !1;
};
function vn(a) {
  if (a.ma != a.wa.length) {
    for (var b = 0, c = 0;b < a.wa.length;) {
      var d = a.wa[b];
      wn(a.ib, d) && (a.wa[c++] = d);
      b++;
    }
    a.wa.length = c;
  }
  if (a.ma != a.wa.length) {
    for (var e = {}, c = b = 0;b < a.wa.length;) {
      d = a.wa[b], wn(e, d) || (a.wa[c++] = d, e[d] = 1), b++;
    }
    a.wa.length = c;
  }
}
g.get = function(a, b) {
  return wn(this.ib, a) ? this.ib[a] : b;
};
g.set = function(a, b) {
  wn(this.ib, a) || (this.ma++, this.wa.push(a));
  this.ib[a] = b;
};
g.forEach = function(a, b) {
  for (var c = this.Pb(), d = 0;d < c.length;d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
  }
};
g.clone = function() {
  return new un(this);
};
function wn(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
;var xn = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
function yn(a) {
  if (zn) {
    zn = !1;
    var b = ca.location;
    if (b) {
      var c = b.href;
      if (c && (c = (c = yn(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname) {
        throw zn = !0, Error();
      }
    }
  }
  return a.match(xn);
}
var zn = Jm;
function An(a, b) {
  var c;
  if (a instanceof An) {
    this.Oa = void 0 !== b ? b : a.Oa, Bn(this, a.Ib), c = a.Tb, Cn(this), this.Tb = c, c = a.ub, Cn(this), this.ub = c, En(this, a.gc), c = a.lb, Cn(this), this.lb = c, Fn(this, a.nb.clone()), c = a.Ob, Cn(this), this.Ob = c;
  } else {
    if (a && (c = yn(String(a)))) {
      this.Oa = !!b;
      Bn(this, c[1] || "", !0);
      var d = c[2] || "";
      Cn(this);
      this.Tb = Gn(d);
      d = c[3] || "";
      Cn(this);
      this.ub = Gn(d);
      En(this, c[4]);
      d = c[5] || "";
      Cn(this);
      this.lb = Gn(d);
      Fn(this, c[6] || "", !0);
      c = c[7] || "";
      Cn(this);
      this.Ob = Gn(c);
    } else {
      this.Oa = !!b, this.nb = new Hn(null, 0, this.Oa);
    }
  }
}
g = An.prototype;
g.Ib = "";
g.Tb = "";
g.ub = "";
g.gc = null;
g.lb = "";
g.Ob = "";
g.re = !1;
g.Oa = !1;
g.toString = function() {
  var a = [], b = this.Ib;
  b && a.push(In(b, Jn), ":");
  if (b = this.ub) {
    a.push("//");
    var c = this.Tb;
    c && a.push(In(c, Jn), "@");
    a.push(encodeURIComponent(String(b)));
    b = this.gc;
    null != b && a.push(":", String(b));
  }
  if (b = this.lb) {
    this.ub && "/" != b.charAt(0) && a.push("/"), a.push(In(b, "/" == b.charAt(0) ? Kn : Ln));
  }
  (b = this.nb.toString()) && a.push("?", b);
  (b = this.Ob) && a.push("#", In(b, Mn));
  return a.join("");
};
g.resolve = function(a) {
  var b = this.clone(), c = !!a.Ib;
  c ? Bn(b, a.Ib) : c = !!a.Tb;
  if (c) {
    var d = a.Tb;
    Cn(b);
    b.Tb = d;
  } else {
    c = !!a.ub;
  }
  c ? (d = a.ub, Cn(b), b.ub = d) : c = null != a.gc;
  d = a.lb;
  if (c) {
    En(b, a.gc);
  } else {
    if (c = !!a.lb) {
      if ("/" != d.charAt(0)) {
        if (this.ub && !this.lb) {
          d = "/" + d;
        } else {
          var e = b.lb.lastIndexOf("/");
          -1 != e && (d = b.lb.substr(0, e + 1) + d);
        }
      }
      e = d;
      if (".." == e || "." == e) {
        d = "";
      } else {
        if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
          for (var d = 0 == e.lastIndexOf("/", 0), e = e.split("/"), f = [], h = 0;h < e.length;) {
            var k = e[h++];
            "." == k ? d && h == e.length && f.push("") : ".." == k ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && h == e.length && f.push("")) : (f.push(k), d = !0);
          }
          d = f.join("/");
        } else {
          d = e;
        }
      }
    }
  }
  c ? (Cn(b), b.lb = d) : c = "" !== a.nb.toString();
  c ? Fn(b, Gn(a.nb.toString())) : c = !!a.Ob;
  c && (a = a.Ob, Cn(b), b.Ob = a);
  return b;
};
g.clone = function() {
  return new An(this);
};
function Bn(a, b, c) {
  Cn(a);
  a.Ib = c ? Gn(b) : b;
  a.Ib && (a.Ib = a.Ib.replace(/:$/, ""));
}
function En(a, b) {
  Cn(a);
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b) {
      throw Error("Bad port number " + b);
    }
    a.gc = b;
  } else {
    a.gc = null;
  }
}
function Fn(a, b, c) {
  Cn(a);
  b instanceof Hn ? (a.nb = b, a.nb.hd(a.Oa)) : (c || (b = In(b, Nn)), a.nb = new Hn(b, 0, a.Oa));
}
function On(a, b, c) {
  Cn(a);
  "array" == n(c) || (c = [String(c)]);
  Pn(a.nb, b, c);
}
function Cn(a) {
  if (a.re) {
    throw Error("Tried to modify a read-only Uri");
  }
}
g.hd = function(a) {
  this.Oa = a;
  this.nb && this.nb.hd(a);
  return this;
};
function Gn(a) {
  return a ? decodeURIComponent(a) : "";
}
function In(a, b) {
  return fa(a) ? encodeURI(a).replace(b, Qn) : null;
}
function Qn(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var Jn = /[#\/\?@]/g, Ln = /[\#\?:]/g, Kn = /[\#\?]/g, Nn = /[\#\?@]/g, Mn = /#/g;
function Hn(a, b, c) {
  this.Ea = a || null;
  this.Oa = !!c;
}
function Do(a) {
  if (!a.V && (a.V = new un, a.ma = 0, a.Ea)) {
    for (var b = a.Ea.split("\x26"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("\x3d"), e = null, f = null;
      0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = Eo(a, e);
      a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "");
    }
  }
}
g = Hn.prototype;
g.V = null;
g.ma = null;
g.add = function(a, b) {
  Do(this);
  this.Ea = null;
  a = Eo(this, a);
  var c = this.V.get(a);
  c || this.V.set(a, c = []);
  c.push(b);
  this.ma++;
  return this;
};
g.remove = function(a) {
  Do(this);
  a = Eo(this, a);
  return this.V.vc(a) ? (this.Ea = null, this.ma -= this.V.get(a).length, this.V.remove(a)) : !1;
};
g.clear = function() {
  this.V = this.Ea = null;
  this.ma = 0;
};
g.vc = function(a) {
  Do(this);
  a = Eo(this, a);
  return this.V.vc(a);
};
g.Pb = function() {
  Do(this);
  for (var a = this.V.vb(), b = this.V.Pb(), c = [], d = 0;d < b.length;d++) {
    for (var e = a[d], f = 0;f < e.length;f++) {
      c.push(b[d]);
    }
  }
  return c;
};
g.vb = function(a) {
  Do(this);
  var b = [];
  if (fa(a)) {
    this.vc(a) && (b = Ya(b, this.V.get(Eo(this, a))));
  } else {
    a = this.V.vb();
    for (var c = 0;c < a.length;c++) {
      b = Ya(b, a[c]);
    }
  }
  return b;
};
g.set = function(a, b) {
  Do(this);
  this.Ea = null;
  a = Eo(this, a);
  this.vc(a) && (this.ma -= this.V.get(a).length);
  this.V.set(a, [b]);
  this.ma++;
  return this;
};
g.get = function(a, b) {
  var c = a ? this.vb(a) : [];
  return 0 < c.length ? String(c[0]) : b;
};
function Pn(a, b, c) {
  a.remove(b);
  0 < c.length && (a.Ea = null, a.V.set(Eo(a, b), Za(c)), a.ma += c.length);
}
g.toString = function() {
  if (this.Ea) {
    return this.Ea;
  }
  if (!this.V) {
    return "";
  }
  for (var a = [], b = this.V.Pb(), c = 0;c < b.length;c++) {
    for (var d = b[c], e = encodeURIComponent(String(d)), d = this.vb(d), f = 0;f < d.length;f++) {
      var h = e;
      "" !== d[f] && (h += "\x3d" + encodeURIComponent(String(d[f])));
      a.push(h);
    }
  }
  return this.Ea = a.join("\x26");
};
g.clone = function() {
  var a = new Hn;
  a.Ea = this.Ea;
  this.V && (a.V = this.V.clone(), a.ma = this.ma);
  return a;
};
function Eo(a, b) {
  var c = String(b);
  a.Oa && (c = c.toLowerCase());
  return c;
}
g.hd = function(a) {
  a && !this.Oa && (Do(this), this.Ea = null, this.V.forEach(function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), Pn(this, d, a));
  }, this));
  this.Oa = a;
};
g.extend = function(a) {
  for (var b = 0;b < arguments.length;b++) {
    tn(arguments[b], function(a, b) {
      this.add(b, a);
    }, this);
  }
};
function Fo(a) {
  a.prototype.then = a.prototype.then;
  a.prototype.$goog_Thenable = !0;
}
function Go(a) {
  if (!a) {
    return!1;
  }
  try {
    return!!a.$goog_Thenable;
  } catch (b) {
    return!1;
  }
}
;function Ho(a, b) {
  Io || Jo();
  Ko || (Io(), Ko = !0);
  Lo.push(new Mo(a, b));
}
var Io;
function Jo() {
  if (ca.Promise && ca.Promise.resolve) {
    var a = ca.Promise.resolve();
    Io = function() {
      a.then(No);
    };
  } else {
    Io = function() {
      Rj(No);
    };
  }
}
var Ko = !1, Lo = [];
function No() {
  for (;Lo.length;) {
    var a = Lo;
    Lo = [];
    for (var b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        c.Db.call(c.scope);
      } catch (d) {
        Qj(d);
      }
    }
  }
  Ko = !1;
}
function Mo(a, b) {
  this.Db = a;
  this.scope = b;
}
;function Oo(a, b) {
  this.Ta = Po;
  this.xb = void 0;
  this.Ka = this.Ya = null;
  this.Mc = this.bd = !1;
  try {
    var c = this;
    a.call(b, function(a) {
      Qo(c, Ro, a);
    }, function(a) {
      Qo(c, So, a);
    });
  } catch (d) {
    Qo(this, So, d);
  }
}
var Po = 0, Ro = 2, So = 3;
Oo.prototype.then = function(a, b, c) {
  return To(this, ha(a) ? a : null, ha(b) ? b : null, c);
};
Fo(Oo);
Oo.prototype.cancel = function(a) {
  this.Ta == Po && Ho(function() {
    var b = new Uo(a);
    Vo(this, b);
  }, this);
};
function Vo(a, b) {
  if (a.Ta == Po) {
    if (a.Ya) {
      var c = a.Ya;
      if (c.Ka) {
        for (var d = 0, e = -1, f = 0, h;h = c.Ka[f];f++) {
          if (h = h.Fc) {
            if (d++, h == a && (e = f), 0 <= e && 1 < d) {
              break;
            }
          }
        }
        0 <= e && (c.Ta == Po && 1 == d ? Vo(c, b) : (d = c.Ka.splice(e, 1)[0], Wo(c, d, So, b)));
      }
    } else {
      Qo(a, So, b);
    }
  }
}
function Xo(a, b) {
  a.Ka && a.Ka.length || a.Ta != Ro && a.Ta != So || Yo(a);
  a.Ka || (a.Ka = []);
  a.Ka.push(b);
}
function To(a, b, c, d) {
  var e = {Fc:null, Nd:null, Od:null};
  e.Fc = new Oo(function(a, h) {
    e.Nd = b ? function(c) {
      try {
        var e = b.call(d, c);
        a(e);
      } catch (m) {
        h(m);
      }
    } : a;
    e.Od = c ? function(b) {
      try {
        var e = c.call(d, b);
        void 0 === e && b instanceof Uo ? h(b) : a(e);
      } catch (m) {
        h(m);
      }
    } : h;
  });
  e.Fc.Ya = a;
  Xo(a, e);
  return e.Fc;
}
Oo.prototype.Qd = function(a) {
  this.Ta = Po;
  Qo(this, Ro, a);
};
Oo.prototype.Rd = function(a) {
  this.Ta = Po;
  Qo(this, So, a);
};
function Qo(a, b, c) {
  if (a.Ta == Po) {
    if (a == c) {
      b = So, c = new TypeError("Promise cannot resolve to itself");
    } else {
      if (Go(c)) {
        a.Ta = 1;
        c.then(a.Qd, a.Rd, a);
        return;
      }
      if (ia(c)) {
        try {
          var d = c.then;
          if (ha(d)) {
            Zo(a, c, d);
            return;
          }
        } catch (e) {
          b = So, c = e;
        }
      }
    }
    a.xb = c;
    a.Ta = b;
    Yo(a);
    b != So || c instanceof Uo || $o(a, c);
  }
}
function Zo(a, b, c) {
  function d(b) {
    f || (f = !0, a.Rd(b));
  }
  function e(b) {
    f || (f = !0, a.Qd(b));
  }
  a.Ta = 1;
  var f = !1;
  try {
    c.call(b, e, d);
  } catch (h) {
    d(h);
  }
}
function Yo(a) {
  a.bd || (a.bd = !0, Ho(a.qe, a));
}
Oo.prototype.qe = function() {
  for (;this.Ka && this.Ka.length;) {
    var a = this.Ka;
    this.Ka = [];
    for (var b = 0;b < a.length;b++) {
      Wo(this, a[b], this.Ta, this.xb);
    }
  }
  this.bd = !1;
};
function Wo(a, b, c, d) {
  if (c == Ro) {
    b.Nd(d);
  } else {
    for (;a && a.Mc;a = a.Ya) {
      a.Mc = !1;
    }
    b.Od(d);
  }
}
function $o(a, b) {
  a.Mc = !0;
  Ho(function() {
    a.Mc && ap.call(null, b);
  });
}
var ap = Qj;
function Uo(a) {
  Sa.call(this, a);
}
ra(Uo, Sa);
Uo.prototype.name = "cancel";
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function bp(a, b) {
  this.Pc = [];
  this.Md = a;
  this.Cd = b || null;
  this.wc = this.ec = !1;
  this.xb = void 0;
  this.jd = this.Td = this.Sc = !1;
  this.Rc = 0;
  this.Ya = null;
  this.Tc = 0;
}
bp.prototype.cancel = function(a) {
  if (this.ec) {
    this.xb instanceof bp && this.xb.cancel();
  } else {
    if (this.Ya) {
      var b = this.Ya;
      delete this.Ya;
      a ? b.cancel(a) : (b.Tc--, 0 >= b.Tc && b.cancel());
    }
    this.Md ? this.Md.call(this.Cd, this) : this.jd = !0;
    this.ec || (a = new cp, dp(this), ep(this, !1, a));
  }
};
bp.prototype.Bd = function(a, b) {
  this.Sc = !1;
  ep(this, a, b);
};
function ep(a, b, c) {
  a.ec = !0;
  a.xb = c;
  a.wc = !b;
  fp(a);
}
function dp(a) {
  if (a.ec) {
    if (!a.jd) {
      throw new gp;
    }
    a.jd = !1;
  }
}
function hp(a, b, c, d) {
  a.Pc.push([b, c, d]);
  a.ec && fp(a);
}
bp.prototype.then = function(a, b, c) {
  var d, e, f = new Oo(function(a, b) {
    d = a;
    e = b;
  });
  hp(this, d, function(a) {
    a instanceof cp ? f.cancel() : e(a);
  });
  return f.then(a, b, c);
};
Fo(bp);
function ip(a) {
  return Xa(a.Pc, function(a) {
    return ha(a[1]);
  });
}
function fp(a) {
  if (a.Rc && a.ec && ip(a)) {
    var b = a.Rc, c = jp[b];
    c && (ca.clearTimeout(c.Rb), delete jp[b]);
    a.Rc = 0;
  }
  a.Ya && (a.Ya.Tc--, delete a.Ya);
  for (var b = a.xb, d = c = !1;a.Pc.length && !a.Sc;) {
    var e = a.Pc.shift(), f = e[0], h = e[1], e = e[2];
    if (f = a.wc ? h : f) {
      try {
        var k = f.call(e || a.Cd, b);
        void 0 !== k && (a.wc = a.wc && (k == b || k instanceof Error), a.xb = b = k);
        Go(b) && (d = !0, a.Sc = !0);
      } catch (l) {
        b = l, a.wc = !0, ip(a) || (c = !0);
      }
    }
  }
  a.xb = b;
  d && (k = oa(a.Bd, a, !0), d = oa(a.Bd, a, !1), b instanceof bp ? (hp(b, k, d), b.Td = !0) : b.then(k, d));
  c && (b = new kp(b), jp[b.Rb] = b, a.Rc = b.Rb);
}
function gp() {
  Sa.call(this);
}
ra(gp, Sa);
gp.prototype.message = "Deferred has already fired";
gp.prototype.name = "AlreadyCalledError";
function cp() {
  Sa.call(this);
}
ra(cp, Sa);
cp.prototype.message = "Deferred was canceled";
cp.prototype.name = "CanceledError";
function kp(a) {
  this.Rb = ca.setTimeout(oa(this.Fe, this), 0);
  this.pe = a;
}
kp.prototype.Fe = function() {
  delete jp[this.Rb];
  throw this.pe;
};
var jp = {};
function lp(a, b) {
  var c = b || {}, d = c.document || document, e = document.createElement("SCRIPT"), f = {Pd:e, Qc:void 0}, h = new bp(mp, f), k = null, l = null != c.timeout ? c.timeout : 5E3;
  0 < l && (k = window.setTimeout(function() {
    np(e, !0);
    var b = new op(pp, "Timeout reached for loading script " + a);
    dp(h);
    ep(h, !1, b);
  }, l), f.Qc = k);
  e.onload = e.onreadystatechange = function() {
    e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (np(e, c.Wd || !1, k), dp(h), ep(h, !0, null));
  };
  e.onerror = function() {
    np(e, !0, k);
    var b = new op(qp, "Error while loading script " + a);
    dp(h);
    ep(h, !1, b);
  };
  Rm(e, {type:"text/javascript", charset:"UTF-8", src:a});
  rp(d).appendChild(e);
  return h;
}
function rp(a) {
  var b = a.getElementsByTagName("HEAD");
  return b && 0 != b.length ? b[0] : a.documentElement;
}
function mp() {
  if (this && this.Pd) {
    var a = this.Pd;
    a && "SCRIPT" == a.tagName && np(a, !0, this.Qc);
  }
}
function np(a, b, c) {
  null != c && ca.clearTimeout(c);
  a.onload = da;
  a.onerror = da;
  a.onreadystatechange = da;
  b && window.setTimeout(function() {
    a && a.parentNode && a.parentNode.removeChild(a);
  }, 0);
}
var qp = 0, pp = 1;
function op(a, b) {
  var c = "Jsloader error (code #" + a + ")";
  b && (c += ": " + b);
  Sa.call(this, c);
  this.code = a;
}
ra(op, Sa);
function sp(a, b) {
  this.Ge = new An(a);
  this.Vd = b ? b : "callback";
  this.Qc = 5E3;
}
var tp = 0;
sp.prototype.send = function(a, b, c, d) {
  a = a || null;
  d = d || "_" + (tp++).toString(36) + qa().toString(36);
  ca._callbacks_ || (ca._callbacks_ = {});
  var e = this.Ge.clone();
  if (a) {
    for (var f in a) {
      a.hasOwnProperty && !a.hasOwnProperty(f) || On(e, f, a[f]);
    }
  }
  b && (ca._callbacks_[d] = up(d, b), On(e, this.Vd, "_callbacks_." + d));
  b = lp(e.toString(), {timeout:this.Qc, Wd:!0});
  hp(b, null, vp(d, a, c), void 0);
  return{Rb:d, Dd:b};
};
sp.prototype.cancel = function(a) {
  a && (a.Dd && a.Dd.cancel(), a.Rb && wp(a.Rb, !1));
};
function vp(a, b, c) {
  return function() {
    wp(a, !1);
    c && c(b);
  };
}
function up(a, b) {
  return function(c) {
    wp(a, !0);
    b.apply(void 0, arguments);
  };
}
function wp(a, b) {
  ca._callbacks_[a] && (b ? delete ca._callbacks_[a] : ca._callbacks_[a] = da);
}
;function xp(a) {
  throw Error(Qe(B, a));
}
Oh("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$");
Oh("^([-+]?[0-9]+)/([0-9]+)$");
Oh("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$");
Oh("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
Oh("^[0-9A-Fa-f]{2}$");
Oh("^[0-9A-Fa-f]{4}$");
var yp = function(a, b) {
  return function(c, d) {
    return Jd(v(d) ? b : a, c);
  };
}(new T(null, 13, 5, U, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), new T(null, 13, 5, U, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null)), Nh = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function zp(a) {
  a = parseInt(a, 10);
  return rb(isNaN(a)) ? a : null;
}
function Ap(a, b, c, d) {
  a <= b && b <= c || xp(L([[B(d), B(" Failed:  "), B(a), B("\x3c\x3d"), B(b), B("\x3c\x3d"), B(c)].join("")], 0));
  return b;
}
function Bp(a) {
  var b = Mh(a);
  N(b, 0);
  var c = N(b, 1), d = N(b, 2), e = N(b, 3), f = N(b, 4), h = N(b, 5), k = N(b, 6), l = N(b, 7), m = N(b, 8), p = N(b, 9), q = N(b, 10);
  if (rb(b)) {
    return xp(L([[B("Unrecognized date/time syntax: "), B(a)].join("")], 0));
  }
  var r = zp(c), t = function() {
    var a = zp(d);
    return v(a) ? a : 1;
  }();
  a = function() {
    var a = zp(e);
    return v(a) ? a : 1;
  }();
  var b = function() {
    var a = zp(f);
    return v(a) ? a : 0;
  }(), c = function() {
    var a = zp(h);
    return v(a) ? a : 0;
  }(), w = function() {
    var a = zp(k);
    return v(a) ? a : 0;
  }(), z = function() {
    var a;
    a: {
      if (dd.a(3, M(l))) {
        a = l;
      } else {
        if (3 < M(l)) {
          a = l.substring(0, 3);
        } else {
          for (a = new Ra(l);;) {
            if (3 > a.Ab.length) {
              a = a.append("0");
            } else {
              a = a.toString();
              break a;
            }
          }
        }
      }
    }
    a = zp(a);
    return v(a) ? a : 0;
  }(), m = (dd.a(m, "-") ? -1 : 1) * (60 * function() {
    var a = zp(p);
    return v(a) ? a : 0;
  }() + function() {
    var a = zp(q);
    return v(a) ? a : 0;
  }());
  return new T(null, 8, 5, U, [r, Ap(1, t, 12, "timestamp month field must be in range 1..12"), Ap(1, a, function() {
    var a;
    a = 0 === (r % 4 + 4) % 4;
    v(a) && (a = rb(0 === (r % 100 + 100) % 100), a = v(a) ? a : 0 === (r % 400 + 400) % 400);
    return yp.a ? yp.a(t, a) : yp.call(null, t, a);
  }(), "timestamp day field must be in range 1..last day in month"), Ap(0, b, 23, "timestamp hour field must be in range 0..23"), Ap(0, c, 59, "timestamp minute field must be in range 0..59"), Ap(0, w, dd.a(c, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), Ap(0, z, 999, "timestamp millisecond field must be in range 0..999"), m], null);
}
var Cp = new ib(null, 4, ["inst", function(a) {
  var b;
  if ("string" === typeof a) {
    if (b = Bp(a), v(b)) {
      a = N(b, 0);
      var c = N(b, 1), d = N(b, 2), e = N(b, 3), f = N(b, 4), h = N(b, 5), k = N(b, 6);
      b = N(b, 7);
      b = new Date(Date.UTC(a, c - 1, d, e, f, h, k) - 6E4 * b);
    } else {
      b = xp(L([[B("Unrecognized date/time syntax: "), B(a)].join("")], 0));
    }
  } else {
    b = xp(L(["Instance literal expects a string for its timestamp."], 0));
  }
  return b;
}, "uuid", function(a) {
  return "string" === typeof a ? new vi(a) : xp(L(["UUID literal expects a string as its representation."], 0));
}, "queue", function(a) {
  return Xd(a) ? Kf.a(rg, a) : xp(L(["Queue literal expects a vector for its elements."], 0));
}, "js", function(a) {
  if (Xd(a)) {
    var b = [];
    a = D(a);
    for (var c = null, d = 0, e = 0;;) {
      if (e < d) {
        var f = c.N(null, e);
        b.push(f);
        e += 1;
      } else {
        if (a = D(a)) {
          c = a, Yd(c) ? (a = Ac(c), e = Bc(c), c = a, d = M(a), a = e) : (a = F(c), b.push(a), a = G(c), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  if (Wd(a)) {
    b = {};
    a = D(a);
    c = null;
    for (e = d = 0;;) {
      if (e < d) {
        var h = c.N(null, e), f = N(h, 0), h = N(h, 1);
        b[Ae(f)] = h;
        e += 1;
      } else {
        if (a = D(a)) {
          Yd(a) ? (d = Ac(a), a = Bc(a), c = d, d = M(d)) : (d = F(a), c = N(d, 0), d = N(d, 1), b[Ae(c)] = d, a = G(a), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  return xp(L([[B("JS literal expects a vector or map containing "), B("only string or unqualified keyword keys")].join("")], 0));
}], null);
tf || sf.call(null, Cp);
tf || sf.call(null, null);
function Dp(a) {
  var b = uk.m();
  a = new sp(new An(a));
  a.send(null, function(a) {
    return function(b) {
      return xk.a(a, b);
    };
  }(b, a));
  return b;
}
;var Ep = Error();
var eb = function() {
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
    return console.log.apply(console, yb ? xb(a) : wb.call(null, a));
  }
  a.v = 0;
  a.t = function(a) {
    a = D(a);
    return b(a);
  };
  a.l = b;
  return a;
}(), Fp = sm(""), Gp = sm(Wi), Hp, Ip = function(a) {
  return cm(new ib(null, 3, [$i, $i.b(a), Li, new T(null, 1, 5, U, [a], null), tj, lf(Ff(function(a) {
    N(a, 0);
    var c = N(a, 1);
    a = N(a, 2);
    a = N(a, 0);
    var d = $k(a);
    v(d) ? (a = Wk(a), c = !dd.a(c, a)) : c = d;
    return c;
  }), S.b(function(a) {
    N(a, 0);
    N(a, 1);
    a = N(a, 2);
    return N(a, 0);
  }))], null));
}(Fp), Jp, Kp = wm(kf(1), L([Ip], 0)), Lp = wm(kf(-1), L([function(a, b) {
  return ym(function(b, d) {
    var e = uk.b(1E3 + a), f = function(a) {
      return function() {
        return vk(a, nf(xk, d));
      };
    }(e), h = uk.b(1);
    Zj(function(e, f, h) {
      return function() {
        var p = function() {
          return function(a) {
            return function() {
              function b(c) {
                for (;;) {
                  var d;
                  a: {
                    try {
                      for (;;) {
                        var e = a(c);
                        if (!R(e, Z)) {
                          d = e;
                          break a;
                        }
                      }
                    } catch (f) {
                      if (f instanceof Object) {
                        c[5] = f, qk(c), d = Z;
                      } else {
                        throw f;
                      }
                    }
                  }
                  if (!R(d, Z)) {
                    return d;
                  }
                }
              }
              function c() {
                var a = [null, null, null, null, null, null, null, null, null, null];
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
          }(function(e, f, h) {
            return function(e) {
              var k = e[1];
              if (1 === k) {
                return e[2] = null, e[1] = 2, Z;
              }
              if (2 === k) {
                return mk(e, 4, b);
              }
              if (3 === k) {
                return k = e[2], ok(e, k);
              }
              if (4 === k) {
                return k = e[7], k = e[2], e[7] = k, e[1] = v(null == k) ? 5 : 6, Z;
              }
              if (5 === k) {
                return k = Ej(d), e[2] = k, e[1] = 7, Z;
              }
              if (6 === k) {
                return k = e[7], nk(e, 8, f, k);
              }
              if (7 === k) {
                return k = e[2], e[2] = k, e[1] = 3, Z;
              }
              if (8 === k) {
                var k = e[2], l = setTimeout(h, a);
                e[8] = l;
                e[9] = k;
                e[2] = null;
                e[1] = 2;
                return Z;
              }
              return null;
            };
          }(e, f, h), e, f, h);
        }(), q = function() {
          var a = p.m ? p.m() : p.call(null);
          a[6] = e;
          return a;
        }();
        return lk(q);
      };
    }(h, e, f));
    return h;
  }, $i.b(b), b);
}(150, Ip)], 0)), Mp;
Mp = function(a) {
  return cm(new ib(null, 3, [$i, $i.b(F(a)), Li, a, tj, lf(S.b(function(a) {
    N(a, 0);
    N(a, 1);
    a = N(a, 2);
    return F(Gf($k, a));
  }), Ff(jf(pb)))], null));
}(L([Kp, Lp], 0));
var Np = xm(je, 0, Mp);
Jp = wm(jf(function(a) {
  return 0 === a;
}), L([Np], 0));
Hp = function(a, b) {
  return cm(new ib(null, 3, [$i, $i.b(b), Li, new T(null, 2, 5, U, [a, b], null), tj, lf(S.b(function(a) {
    N(a, 0);
    N(a, 1);
    var b = N(a, 2);
    a = N(b, 0);
    b = N(b, 1);
    return v($k(a)) ? Nl(Wk(b)) : null;
  }), Ff(jf(pb)))], null));
}(function(a, b) {
  return cm(new ib(null, 3, [$i, function() {
    return function(b) {
      return function(d, e) {
        var f = b.a ? b.a(d, e) : b.call(null, d, e);
        return v(a.b ? a.b(f) : a.call(null, f)) ? f : !1;
      };
    }($i.b(b));
  }(), Li, new T(null, 1, 5, U, [b], null), tj, zm(a)], null));
}(rb, Jp), Ip);
var Op, Pp = jf(function(a) {
  return/^[\s\xa0]*$/.test(null == a ? "" : String(a));
});
Op = cm(new ib(null, 3, [$i, $i.b(Hp), Li, new T(null, 1, 5, U, [Hp], null), tj, zm(Pp)], null));
var Qp = function() {
  var a = 1 < arguments.length ? new E(Array.prototype.slice.call(arguments, 1), 0) : null;
  return Ek(pm(arguments[0], null), Qe(uk, a));
}(wm(function(a) {
  return[B("http://en.wikipedia.org/w/api.php?action\x3dopensearch\x26format\x3djson\x26search\x3d"), B(a)].join("");
}, L([Op], 0))), Rp = uk.b(1);
Zj(function(a) {
  return function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var e;
              a: {
                try {
                  for (;;) {
                    var f = a(c);
                    if (!R(f, Z)) {
                      e = f;
                      break a;
                    }
                  }
                } catch (h) {
                  if (h instanceof Object) {
                    c[5] = h, qk(c), e = Z;
                  } else {
                    throw h;
                  }
                }
              }
              if (!R(e, Z)) {
                return e;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null, null, null];
            a[0] = h;
            a[1] = 1;
            return a;
          }
          var h = null, h = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          h.m = c;
          h.b = b;
          return h;
        }();
      }(function() {
        return function(a) {
          var b = a[1];
          return 1 === b ? (a[2] = null, a[1] = 2, Z) : 2 === b ? (a[1] = 4, Z) : 3 === b ? (b = a[2], ok(a, b)) : 4 === b ? mk(a, 7, Qp) : 5 === b ? (a[2] = null, a[1] = 6, Z) : 6 === b ? (b = a[2], a[2] = b, a[1] = 3, Z) : 7 === b ? (b = Dp(a[2]), mk(a, 8, b)) : 8 === b ? (b = F(G(a[2])), b = new T(null, 2, 5, U, [yj, b], null), nk(a, 9, Gp, b)) : 9 === b ? (a[7] = a[2], a[2] = null, a[1] = 2, Z) : null;
        };
      }(a), a);
    }(), c = function() {
      var c = b.m ? b.m() : b.call(null);
      c[6] = a;
      return c;
    }();
    return lk(c);
  };
}(Rp));
var Sp = function(a, b, c) {
  return xm(function(b, c) {
    return a.a ? a.a(c, b) : a.call(null, c, b);
  }, b, c);
}(function(a, b) {
  try {
    if (R(b, Wi)) {
      return a;
    }
    throw Ep;
  } catch (c) {
    if (c instanceof Error) {
      if (c === Ep) {
        try {
          if (Xd(b) && 2 === M(b)) {
            try {
              var d = Id(b, 0);
              if (R(d, yj)) {
                return Id(b, 1);
              }
              throw Ep;
            } catch (e) {
              if (e instanceof Error) {
                d = e;
                if (d === Ep) {
                  throw Ep;
                }
                throw d;
              }
              throw e;
            }
          } else {
            throw Ep;
          }
        } catch (f) {
          if (f instanceof Error) {
            d = f;
            if (d === Ep) {
              throw Error([B("No matching clause: "), B(b)].join(""));
            }
            throw d;
          }
          throw f;
        }
      } else {
        throw c;
      }
    } else {
      throw c;
    }
  }
}, Gd, Gp);
(function(a, b) {
  var c = Am(a), d = pn(b);
  return qn(function(a, b) {
    return function k() {
      rn(b, I.b ? I.b(a) : I.call(null, a));
      return qn(k);
    };
  }(c, d));
})(wm(function(a) {
  var b = function() {
    var a = function() {
      return function(a) {
        return xk.a(Fp, sa(a.target.value));
      };
    }(Ii, "Search Wikipedia!", Xi);
    return dn.s ? dn.s(Ii, "Search Wikipedia!", Xi, a) : dn.call(null, Ii, "Search Wikipedia!", Xi, a);
  }(), c = function() {
    var c = function() {
      return function(a) {
        return function h(b) {
          return new Be(null, function() {
            return function() {
              for (;;) {
                var a = D(b);
                if (a) {
                  if (Yd(a)) {
                    var c = Ac(a), d = M(c), e = new De(Array(d), 0);
                    return function() {
                      for (var a = 0;;) {
                        if (a < d) {
                          var b = C.a(c, a), h = e, b = en.b ? en.b(b) : en.call(null, b);
                          h.add(b);
                          a += 1;
                        } else {
                          return!0;
                        }
                      }
                    }() ? Ge(e.La(), h(Bc(a))) : Ge(e.La(), null);
                  }
                  var r = F(a);
                  return J(function() {
                    var a = r;
                    return en.b ? en.b(a) : en.call(null, a);
                  }(), h(bd(a)));
                }
                return null;
              }
            };
          }(a), null, null);
        };
      }(b)(a);
    }();
    return fn.b ? fn.b(c) : fn.call(null, c);
  }();
  return cn.a ? cn.a(b, c) : cn.call(null, b, c);
}, L([Sp], 0)), document.body);

})();

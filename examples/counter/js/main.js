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
function fa(a) {
  return "function" == n(a);
}
function ga(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
var ia = "closure_uid_" + (1E9 * Math.random() >>> 0), ka = 0;
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
function na(a, b, c) {
  na = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
  return na.apply(null, arguments);
}
function pa(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.ve = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.mc = function(a, c, f) {
    return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
}
;function qa(a) {
  if (!ra.test(a)) {
    return a;
  }
  -1 != a.indexOf("\x26") && (a = a.replace(sa, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(va, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(wa, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(xa, "\x26quot;"));
  -1 != a.indexOf("'") && (a = a.replace(za, "\x26#39;"));
  -1 != a.indexOf("\x00") && (a = a.replace(Ba, "\x26#0;"));
  return a;
}
var sa = /&/g, va = /</g, wa = />/g, xa = /"/g, za = /'/g, Ba = /\x00/g, ra = /[\x00&<>"']/;
function Fa(a) {
  return Array.prototype.join.call(arguments, "");
}
function Ga(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
;function Ha(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
var Ja = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ka(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < Ja.length;f++) {
      c = Ja[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
;function La(a, b) {
  null != a && this.append.apply(this, arguments);
}
g = La.prototype;
g.qb = "";
g.set = function(a) {
  this.qb = "" + a;
};
g.append = function(a, b, c) {
  this.qb += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.qb += arguments[d];
    }
  }
  return this;
};
g.clear = function() {
  this.qb = "";
};
g.toString = function() {
  return this.qb;
};
function Ma(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Ma);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
}
pa(Ma, Error);
Ma.prototype.name = "CustomError";
var Oa = Array.prototype, Pa = Oa.forEach ? function(a, b, c) {
  Oa.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = ea(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
}, Qa = Oa.some ? function(a, b, c) {
  return Oa.some.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = ea(a) ? a.split("") : a, f = 0;f < d;f++) {
    if (f in e && b.call(c, e[f], f, a)) {
      return!0;
    }
  }
  return!1;
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
if ("undefined" === typeof Ua) {
  var Ua = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
var Va = null;
if ("undefined" === typeof Wa) {
  var Wa = null
}
function Za() {
  return new $a(null, 5, [bb, !0, eb, !0, fb, !1, gb, !1, hb, null], null);
}
function v(a) {
  return null != a && !1 !== a;
}
function ib(a) {
  return null == a;
}
function jb(a) {
  return a instanceof Array;
}
function lb(a) {
  return v(a) ? !1 : !0;
}
function x(a, b) {
  return a[n(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function mb(a) {
  return null == a ? null : a.constructor;
}
function z(a, b) {
  var c = mb(b), c = v(v(c) ? c.Pb : c) ? c.Nb : n(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function nb(a) {
  var b = a.Nb;
  return v(b) ? b : "" + B(a);
}
var ob = "undefined" !== typeof Symbol && "function" === n(Symbol) ? Symbol.iterator : "@@iterator";
function pb(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
function qb() {
  switch(arguments.length) {
    case 1:
      return rb(arguments[0]);
    case 2:
      return rb(arguments[1]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function sb(a) {
  return rb(a);
}
function rb(a) {
  function b(a, b) {
    a.push(b);
    return a;
  }
  var c = [];
  return tb ? tb(b, c, a) : ub.call(null, b, c, a);
}
var vb = {}, wb = {}, xb = {}, yb = function yb(b) {
  if (b ? b.I : b) {
    return b.I(b);
  }
  var c;
  c = yb[n(null == b ? null : b)];
  if (!c && (c = yb._, !c)) {
    throw z("ICounted.-count", b);
  }
  return c.call(null, b);
}, zb = function zb(b) {
  if (b ? b.Q : b) {
    return b.Q(b);
  }
  var c;
  c = zb[n(null == b ? null : b)];
  if (!c && (c = zb._, !c)) {
    throw z("IEmptyableCollection.-empty", b);
  }
  return c.call(null, b);
}, Ab = {}, Bb = function Bb(b, c) {
  if (b ? b.G : b) {
    return b.G(b, c);
  }
  var d;
  d = Bb[n(null == b ? null : b)];
  if (!d && (d = Bb._, !d)) {
    throw z("ICollection.-conj", b);
  }
  return d.call(null, b, c);
}, Cb = {}, C = function C() {
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
  if (a ? a.O : a) {
    return a.O(a, b);
  }
  var c;
  c = C[n(null == a ? null : a)];
  if (!c && (c = C._, !c)) {
    throw z("IIndexed.-nth", a);
  }
  return c.call(null, a, b);
};
C.d = function(a, b, c) {
  if (a ? a.sa : a) {
    return a.sa(a, b, c);
  }
  var d;
  d = C[n(null == a ? null : a)];
  if (!d && (d = C._, !d)) {
    throw z("IIndexed.-nth", a);
  }
  return d.call(null, a, b, c);
};
C.v = 3;
var Db = {}, Eb = function Eb(b) {
  if (b ? b.S : b) {
    return b.S(b);
  }
  var c;
  c = Eb[n(null == b ? null : b)];
  if (!c && (c = Eb._, !c)) {
    throw z("ISeq.-first", b);
  }
  return c.call(null, b);
}, Fb = function Fb(b) {
  if (b ? b.W : b) {
    return b.W(b);
  }
  var c;
  c = Fb[n(null == b ? null : b)];
  if (!c && (c = Fb._, !c)) {
    throw z("ISeq.-rest", b);
  }
  return c.call(null, b);
}, Gb = {}, Hb = {}, Ib = function Ib() {
  switch(arguments.length) {
    case 2:
      return Ib.a(arguments[0], arguments[1]);
    case 3:
      return Ib.d(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
Ib.a = function(a, b) {
  if (a ? a.w : a) {
    return a.w(a, b);
  }
  var c;
  c = Ib[n(null == a ? null : a)];
  if (!c && (c = Ib._, !c)) {
    throw z("ILookup.-lookup", a);
  }
  return c.call(null, a, b);
};
Ib.d = function(a, b, c) {
  if (a ? a.u : a) {
    return a.u(a, b, c);
  }
  var d;
  d = Ib[n(null == a ? null : a)];
  if (!d && (d = Ib._, !d)) {
    throw z("ILookup.-lookup", a);
  }
  return d.call(null, a, b, c);
};
Ib.v = 3;
var Jb = function Jb(b, c) {
  if (b ? b.qc : b) {
    return b.qc(b, c);
  }
  var d;
  d = Jb[n(null == b ? null : b)];
  if (!d && (d = Jb._, !d)) {
    throw z("IAssociative.-contains-key?", b);
  }
  return d.call(null, b, c);
}, Kb = function Kb(b, c, d) {
  if (b ? b.pa : b) {
    return b.pa(b, c, d);
  }
  var e;
  e = Kb[n(null == b ? null : b)];
  if (!e && (e = Kb._, !e)) {
    throw z("IAssociative.-assoc", b);
  }
  return e.call(null, b, c, d);
}, Lb = {}, Mb = function Mb(b, c) {
  if (b ? b.Aa : b) {
    return b.Aa(b, c);
  }
  var d;
  d = Mb[n(null == b ? null : b)];
  if (!d && (d = Mb._, !d)) {
    throw z("IMap.-dissoc", b);
  }
  return d.call(null, b, c);
}, Nb = {}, Ob = function Ob(b) {
  if (b ? b.Zb : b) {
    return b.Zb(b);
  }
  var c;
  c = Ob[n(null == b ? null : b)];
  if (!c && (c = Ob._, !c)) {
    throw z("IMapEntry.-key", b);
  }
  return c.call(null, b);
}, Pb = function Pb(b) {
  if (b ? b.$b : b) {
    return b.$b(b);
  }
  var c;
  c = Pb[n(null == b ? null : b)];
  if (!c && (c = Pb._, !c)) {
    throw z("IMapEntry.-val", b);
  }
  return c.call(null, b);
}, Qb = {}, Rb = function Rb(b, c) {
  if (b ? b.Hc : b) {
    return b.Hc(b, c);
  }
  var d;
  d = Rb[n(null == b ? null : b)];
  if (!d && (d = Rb._, !d)) {
    throw z("ISet.-disjoin", b);
  }
  return d.call(null, b, c);
}, Sb = function Sb(b) {
  if (b ? b.rb : b) {
    return b.rb(b);
  }
  var c;
  c = Sb[n(null == b ? null : b)];
  if (!c && (c = Sb._, !c)) {
    throw z("IStack.-peek", b);
  }
  return c.call(null, b);
}, Tb = function Tb(b) {
  if (b ? b.sb : b) {
    return b.sb(b);
  }
  var c;
  c = Tb[n(null == b ? null : b)];
  if (!c && (c = Tb._, !c)) {
    throw z("IStack.-pop", b);
  }
  return c.call(null, b);
}, Ub = {}, Vb = function Vb(b, c, d) {
  if (b ? b.Bb : b) {
    return b.Bb(b, c, d);
  }
  var e;
  e = Vb[n(null == b ? null : b)];
  if (!e && (e = Vb._, !e)) {
    throw z("IVector.-assoc-n", b);
  }
  return e.call(null, b, c, d);
}, Wb = function Wb(b) {
  if (b ? b.Ib : b) {
    return b.Ib(b);
  }
  var c;
  c = Wb[n(null == b ? null : b)];
  if (!c && (c = Wb._, !c)) {
    throw z("IDeref.-deref", b);
  }
  return c.call(null, b);
}, Xb = {}, Yb = function Yb(b) {
  if (b ? b.C : b) {
    return b.C(b);
  }
  var c;
  c = Yb[n(null == b ? null : b)];
  if (!c && (c = Yb._, !c)) {
    throw z("IMeta.-meta", b);
  }
  return c.call(null, b);
}, Zb = {}, $b = function $b(b, c) {
  if (b ? b.D : b) {
    return b.D(b, c);
  }
  var d;
  d = $b[n(null == b ? null : b)];
  if (!d && (d = $b._, !d)) {
    throw z("IWithMeta.-with-meta", b);
  }
  return d.call(null, b, c);
}, ac = {}, bc = function bc() {
  switch(arguments.length) {
    case 2:
      return bc.a(arguments[0], arguments[1]);
    case 3:
      return bc.d(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
bc.a = function(a, b) {
  if (a ? a.T : a) {
    return a.T(a, b);
  }
  var c;
  c = bc[n(null == a ? null : a)];
  if (!c && (c = bc._, !c)) {
    throw z("IReduce.-reduce", a);
  }
  return c.call(null, a, b);
};
bc.d = function(a, b, c) {
  if (a ? a.U : a) {
    return a.U(a, b, c);
  }
  var d;
  d = bc[n(null == a ? null : a)];
  if (!d && (d = bc._, !d)) {
    throw z("IReduce.-reduce", a);
  }
  return d.call(null, a, b, c);
};
bc.v = 3;
var cc = function cc(b, c) {
  if (b ? b.q : b) {
    return b.q(b, c);
  }
  var d;
  d = cc[n(null == b ? null : b)];
  if (!d && (d = cc._, !d)) {
    throw z("IEquiv.-equiv", b);
  }
  return d.call(null, b, c);
}, dc = function dc(b) {
  if (b ? b.B : b) {
    return b.B(b);
  }
  var c;
  c = dc[n(null == b ? null : b)];
  if (!c && (c = dc._, !c)) {
    throw z("IHash.-hash", b);
  }
  return c.call(null, b);
}, ec = {}, fc = function fc(b) {
  if (b ? b.H : b) {
    return b.H(b);
  }
  var c;
  c = fc[n(null == b ? null : b)];
  if (!c && (c = fc._, !c)) {
    throw z("ISeqable.-seq", b);
  }
  return c.call(null, b);
}, gc = {}, hc = {}, ic = function ic(b) {
  if (b ? b.Kb : b) {
    return b.Kb(b);
  }
  var c;
  c = ic[n(null == b ? null : b)];
  if (!c && (c = ic._, !c)) {
    throw z("IReversible.-rseq", b);
  }
  return c.call(null, b);
}, jc = function jc(b, c) {
  if (b ? b.dd : b) {
    return b.dd(0, c);
  }
  var d;
  d = jc[n(null == b ? null : b)];
  if (!d && (d = jc._, !d)) {
    throw z("IWriter.-write", b);
  }
  return d.call(null, b, c);
}, kc = {}, lc = function lc(b, c, d) {
  if (b ? b.A : b) {
    return b.A(b, c, d);
  }
  var e;
  e = lc[n(null == b ? null : b)];
  if (!e && (e = lc._, !e)) {
    throw z("IPrintWithWriter.-pr-writer", b);
  }
  return e.call(null, b, c, d);
}, mc = function mc(b, c, d) {
  if (b ? b.cd : b) {
    return b.cd(0, c, d);
  }
  var e;
  e = mc[n(null == b ? null : b)];
  if (!e && (e = mc._, !e)) {
    throw z("IWatchable.-notify-watches", b);
  }
  return e.call(null, b, c, d);
}, nc = function nc(b) {
  if (b ? b.Jb : b) {
    return b.Jb(b);
  }
  var c;
  c = nc[n(null == b ? null : b)];
  if (!c && (c = nc._, !c)) {
    throw z("IEditableCollection.-as-transient", b);
  }
  return c.call(null, b);
}, oc = function oc(b, c) {
  if (b ? b.zb : b) {
    return b.zb(b, c);
  }
  var d;
  d = oc[n(null == b ? null : b)];
  if (!d && (d = oc._, !d)) {
    throw z("ITransientCollection.-conj!", b);
  }
  return d.call(null, b, c);
}, pc = function pc(b) {
  if (b ? b.Ab : b) {
    return b.Ab(b);
  }
  var c;
  c = pc[n(null == b ? null : b)];
  if (!c && (c = pc._, !c)) {
    throw z("ITransientCollection.-persistent!", b);
  }
  return c.call(null, b);
}, qc = function qc(b, c, d) {
  if (b ? b.dc : b) {
    return b.dc(b, c, d);
  }
  var e;
  e = qc[n(null == b ? null : b)];
  if (!e && (e = qc._, !e)) {
    throw z("ITransientAssociative.-assoc!", b);
  }
  return e.call(null, b, c, d);
}, rc = function rc(b, c, d) {
  if (b ? b.ad : b) {
    return b.ad(0, c, d);
  }
  var e;
  e = rc[n(null == b ? null : b)];
  if (!e && (e = rc._, !e)) {
    throw z("ITransientVector.-assoc-n!", b);
  }
  return e.call(null, b, c, d);
}, sc = function sc(b) {
  if (b ? b.Zc : b) {
    return b.Zc();
  }
  var c;
  c = sc[n(null == b ? null : b)];
  if (!c && (c = sc._, !c)) {
    throw z("IChunk.-drop-first", b);
  }
  return c.call(null, b);
}, tc = function tc(b) {
  if (b ? b.Ec : b) {
    return b.Ec(b);
  }
  var c;
  c = tc[n(null == b ? null : b)];
  if (!c && (c = tc._, !c)) {
    throw z("IChunkedSeq.-chunked-first", b);
  }
  return c.call(null, b);
}, vc = function vc(b) {
  if (b ? b.Fc : b) {
    return b.Fc(b);
  }
  var c;
  c = vc[n(null == b ? null : b)];
  if (!c && (c = vc._, !c)) {
    throw z("IChunkedSeq.-chunked-rest", b);
  }
  return c.call(null, b);
}, wc = function wc(b) {
  if (b ? b.Dc : b) {
    return b.Dc(b);
  }
  var c;
  c = wc[n(null == b ? null : b)];
  if (!c && (c = wc._, !c)) {
    throw z("IChunkedNext.-chunked-next", b);
  }
  return c.call(null, b);
}, xc = function xc(b) {
  if (b ? b.ac : b) {
    return b.ac(b);
  }
  var c;
  c = xc[n(null == b ? null : b)];
  if (!c && (c = xc._, !c)) {
    throw z("INamed.-name", b);
  }
  return c.call(null, b);
}, yc = function yc(b) {
  if (b ? b.bc : b) {
    return b.bc(b);
  }
  var c;
  c = yc[n(null == b ? null : b)];
  if (!c && (c = yc._, !c)) {
    throw z("INamed.-namespace", b);
  }
  return c.call(null, b);
}, zc = function zc(b, c) {
  if (b ? b.Od : b) {
    return b.Od(b, c);
  }
  var d;
  d = zc[n(null == b ? null : b)];
  if (!d && (d = zc._, !d)) {
    throw z("IReset.-reset!", b);
  }
  return d.call(null, b, c);
}, Ac = function Ac() {
  switch(arguments.length) {
    case 2:
      return Ac.a(arguments[0], arguments[1]);
    case 3:
      return Ac.d(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Ac.s(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Ac.J(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
Ac.a = function(a, b) {
  if (a ? a.Qd : a) {
    return a.Qd(a, b);
  }
  var c;
  c = Ac[n(null == a ? null : a)];
  if (!c && (c = Ac._, !c)) {
    throw z("ISwap.-swap!", a);
  }
  return c.call(null, a, b);
};
Ac.d = function(a, b, c) {
  if (a ? a.Rd : a) {
    return a.Rd(a, b, c);
  }
  var d;
  d = Ac[n(null == a ? null : a)];
  if (!d && (d = Ac._, !d)) {
    throw z("ISwap.-swap!", a);
  }
  return d.call(null, a, b, c);
};
Ac.s = function(a, b, c, d) {
  if (a ? a.Sd : a) {
    return a.Sd(a, b, c, d);
  }
  var e;
  e = Ac[n(null == a ? null : a)];
  if (!e && (e = Ac._, !e)) {
    throw z("ISwap.-swap!", a);
  }
  return e.call(null, a, b, c, d);
};
Ac.J = function(a, b, c, d, e) {
  if (a ? a.Td : a) {
    return a.Td(a, b, c, d, e);
  }
  var f;
  f = Ac[n(null == a ? null : a)];
  if (!f && (f = Ac._, !f)) {
    throw z("ISwap.-swap!", a);
  }
  return f.call(null, a, b, c, d, e);
};
Ac.v = 5;
var Bc = function Bc(b, c) {
  if (b ? b.bd : b) {
    return b.bd(0, c);
  }
  var d;
  d = Bc[n(null == b ? null : b)];
  if (!d && (d = Bc._, !d)) {
    throw z("IVolatile.-vreset!", b);
  }
  return d.call(null, b, c);
}, Cc = {}, Dc = function Dc(b) {
  if (b ? b.Yb : b) {
    return b.Yb(b);
  }
  var c;
  c = Dc[n(null == b ? null : b)];
  if (!c && (c = Dc._, !c)) {
    throw z("IIterable.-iterator", b);
  }
  return c.call(null, b);
};
function Ec(a) {
  this.ke = a;
  this.g = 1073741824;
  this.r = 0;
}
Ec.prototype.dd = function(a, b) {
  return this.ke.append(b);
};
function Fc(a) {
  var b = new La;
  a.A(null, new Ec(b), Za());
  return "" + B(b);
}
var Gc = "undefined" !== typeof Math.imul && 0 !== (Math.imul.a ? Math.imul.a(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.a ? Math.imul.a(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Hc(a) {
  a = Gc(a | 0, -862048943);
  return Gc(a << 15 | a >>> -15, 461845907);
}
function Ic(a, b) {
  var c = (a | 0) ^ (b | 0);
  return Gc(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function Jc(a, b) {
  var c = (a | 0) ^ b, c = Gc(c ^ c >>> 16, -2048144789), c = Gc(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function Kc(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Ic(c, Hc(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ Hc(a.charCodeAt(a.length - 1)) : b;
  return Jc(b, Gc(2, a.length));
}
var Lc = {}, Mc = 0;
function Nc(a) {
  255 < Mc && (Lc = {}, Mc = 0);
  var b = Lc[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Gc(31, d) + a.charCodeAt(c), c = e
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
    Lc[a] = b;
    Mc += 1;
  }
  return a = b;
}
function Oc(a) {
  a && (a.g & 4194304 || a.qe) ? a = a.B(null) : "number" === typeof a ? a = (Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Nc(a), 0 !== a && (a = Hc(a), a = Ic(0, a), a = Jc(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : dc(a);
  return a;
}
function Pc(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Qc(a, b) {
  if (a.ib === b.ib) {
    return 0;
  }
  var c = lb(a.oa);
  if (v(c ? b.oa : c)) {
    return-1;
  }
  if (v(a.oa)) {
    if (lb(b.oa)) {
      return 1;
    }
    c = Sa(a.oa, b.oa);
    return 0 === c ? Sa(a.name, b.name) : c;
  }
  return Sa(a.name, b.name);
}
function Rc(a, b, c, d, e) {
  this.oa = a;
  this.name = b;
  this.ib = c;
  this.Gb = d;
  this.ra = e;
  this.g = 2154168321;
  this.r = 4096;
}
g = Rc.prototype;
g.toString = function() {
  return this.ib;
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.q = function(a, b) {
  return b instanceof Rc ? this.ib === b.ib : !1;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ib.d(c, this, null);
      case 3:
        return Ib.d(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return Ib.d(c, this, null);
  };
  a.d = function(a, c, d) {
    return Ib.d(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(pb(b)));
};
g.b = function(a) {
  return Ib.d(a, this, null);
};
g.a = function(a, b) {
  return Ib.d(a, this, b);
};
g.C = function() {
  return this.ra;
};
g.D = function(a, b) {
  return new Rc(this.oa, this.name, this.ib, this.Gb, b);
};
g.B = function() {
  var a = this.Gb;
  return null != a ? a : this.Gb = a = Pc(Kc(this.name), Nc(this.oa));
};
g.ac = function() {
  return this.name;
};
g.bc = function() {
  return this.oa;
};
g.A = function(a, b) {
  return jc(b, this.ib);
};
function Sc(a) {
  return a instanceof Rc ? a : Tc(null, a);
}
function Tc(a, b) {
  var c = null != a ? [B(a), B("/"), B(b)].join("") : b;
  return new Rc(a, b, c, null, null);
}
function D(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 8388608 || a.Pd)) {
    return a.H(null);
  }
  if (jb(a) || "string" === typeof a) {
    return 0 === a.length ? null : new E(a, 0);
  }
  if (x(ec, a)) {
    return fc(a);
  }
  throw Error([B(a), B(" is not ISeqable")].join(""));
}
function F(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 64 || a.cc)) {
    return a.S(null);
  }
  a = D(a);
  return null == a ? null : Eb(a);
}
function Uc(a) {
  return null != a ? a && (a.g & 64 || a.cc) ? a.W(null) : (a = D(a)) ? Fb(a) : Vc : Vc;
}
function H(a) {
  return null == a ? null : a && (a.g & 128 || a.sc) ? a.ka(null) : D(Uc(a));
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
  return null == a ? null == b : a === b || cc(a, b);
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
Wc.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return Wc.k(b, a, c);
};
Wc.v = 2;
function $c(a) {
  this.F = a;
}
$c.prototype.next = function() {
  if (null != this.F) {
    var a = F(this.F);
    this.F = H(this.F);
    return{value:a, done:!1};
  }
  return{value:null, done:!0};
};
function ad(a) {
  return new $c(D(a));
}
function bd(a, b) {
  var c = Hc(a), c = Ic(0, c);
  return Jc(c, b);
}
function cd(a) {
  var b = 0, c = 1;
  for (a = D(a);;) {
    if (null != a) {
      b += 1, c = Gc(31, c) + Oc(F(a)) | 0, a = H(a);
    } else {
      return bd(c, b);
    }
  }
}
var dd = bd(1, 0);
function ed(a) {
  var b = 0, c = 0;
  for (a = D(a);;) {
    if (null != a) {
      b += 1, c = c + Oc(F(a)) | 0, a = H(a);
    } else {
      return bd(c, b);
    }
  }
}
var gd = bd(0, 0);
xb["null"] = !0;
yb["null"] = function() {
  return 0;
};
Date.prototype.q = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
Date.prototype.Wb = !0;
Date.prototype.Hb = function(a, b) {
  return Sa(this.valueOf(), b.valueOf());
};
cc.number = function(a, b) {
  return a === b;
};
vb["function"] = !0;
Xb["function"] = !0;
Yb["function"] = function() {
  return null;
};
dc._ = function(a) {
  return a[ia] || (a[ia] = ++ka);
};
function hd(a) {
  return a + 1;
}
function id(a) {
  this.n = a;
  this.g = 32768;
  this.r = 0;
}
id.prototype.Ib = function() {
  return this.n;
};
function jd(a) {
  return a instanceof id;
}
function I(a) {
  return Wb(a);
}
function kd(a, b) {
  var c = yb(a);
  if (0 === c) {
    return b.m ? b.m() : b.call(null);
  }
  for (var d = C.a(a, 0), e = 1;;) {
    if (e < c) {
      var f = C.a(a, e), d = b.a ? b.a(d, f) : b.call(null, d, f);
      if (jd(d)) {
        return Wb(d);
      }
      e += 1;
    } else {
      return d;
    }
  }
}
function ld(a, b, c) {
  var d = yb(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = C.a(a, c), e = b.a ? b.a(e, f) : b.call(null, e, f);
      if (jd(e)) {
        return Wb(e);
      }
      c += 1;
    } else {
      return e;
    }
  }
}
function md(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.m ? b.m() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var f = a[e], d = b.a ? b.a(d, f) : b.call(null, d, f);
      if (jd(d)) {
        return Wb(d);
      }
      e += 1;
    } else {
      return d;
    }
  }
}
function nd(a, b, c) {
  var d = a.length, e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = a[c], e = b.a ? b.a(e, f) : b.call(null, e, f);
      if (jd(e)) {
        return Wb(e);
      }
      c += 1;
    } else {
      return e;
    }
  }
}
function od(a, b, c, d) {
  for (var e = a.length;;) {
    if (d < e) {
      var f = a[d];
      c = b.a ? b.a(c, f) : b.call(null, c, f);
      if (jd(c)) {
        return Wb(c);
      }
      d += 1;
    } else {
      return c;
    }
  }
}
function pd(a) {
  return a ? a.g & 2 || a.Ed ? !0 : a.g ? !1 : x(xb, a) : x(xb, a);
}
function qd(a) {
  return a ? a.g & 16 || a.$c ? !0 : a.g ? !1 : x(Cb, a) : x(Cb, a);
}
function rd(a, b) {
  this.c = a;
  this.o = b;
}
rd.prototype.Ya = function() {
  return this.o < this.c.length;
};
rd.prototype.next = function() {
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
  return Fc(this);
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
g.rc = !0;
g.Yb = function() {
  return new rd(this.c, this.o);
};
g.ka = function() {
  return this.o + 1 < this.c.length ? new E(this.c, this.o + 1) : null;
};
g.I = function() {
  return this.c.length - this.o;
};
g.Kb = function() {
  var a = yb(this);
  return 0 < a ? new sd(this, a - 1, null) : null;
};
g.B = function() {
  return cd(this);
};
g.q = function(a, b) {
  return td.a ? td.a(this, b) : td.call(null, this, b);
};
g.Q = function() {
  return Vc;
};
g.T = function(a, b) {
  return od(this.c, b, this.c[this.o], this.o + 1);
};
g.U = function(a, b, c) {
  return od(this.c, b, c, this.o);
};
g.S = function() {
  return this.c[this.o];
};
g.W = function() {
  return this.o + 1 < this.c.length ? new E(this.c, this.o + 1) : Vc;
};
g.H = function() {
  return this;
};
g.G = function(a, b) {
  return J.a ? J.a(b, this) : J.call(null, b, this);
};
E.prototype[ob] = function() {
  return ad(this);
};
function ud(a, b) {
  return b < a.length ? new E(a, b) : null;
}
function K() {
  switch(arguments.length) {
    case 1:
      return ud(arguments[0], 0);
    case 2:
      return ud(arguments[0], arguments[1]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function sd(a, b, c) {
  this.pc = a;
  this.o = b;
  this.l = c;
  this.g = 32374990;
  this.r = 8192;
}
g = sd.prototype;
g.toString = function() {
  return Fc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.l;
};
g.ka = function() {
  return 0 < this.o ? new sd(this.pc, this.o - 1, null) : null;
};
g.I = function() {
  return this.o + 1;
};
g.B = function() {
  return cd(this);
};
g.q = function(a, b) {
  return td.a ? td.a(this, b) : td.call(null, this, b);
};
g.Q = function() {
  var a = this.l;
  return vd.a ? vd.a(Vc, a) : vd.call(null, Vc, a);
};
g.T = function(a, b) {
  return wd ? wd(b, this) : xd.call(null, b, this);
};
g.U = function(a, b, c) {
  return yd ? yd(b, c, this) : xd.call(null, b, c, this);
};
g.S = function() {
  return C.a(this.pc, this.o);
};
g.W = function() {
  return 0 < this.o ? new sd(this.pc, this.o - 1, null) : Vc;
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new sd(this.pc, this.o, b);
};
g.G = function(a, b) {
  return J.a ? J.a(b, this) : J.call(null, b, this);
};
sd.prototype[ob] = function() {
  return ad(this);
};
function zd(a) {
  for (;;) {
    var b = H(a);
    if (null != b) {
      a = b;
    } else {
      return F(a);
    }
  }
}
cc._ = function(a, b) {
  return a === b;
};
var Ad = function Ad() {
  switch(arguments.length) {
    case 0:
      return Ad.m();
    case 1:
      return Ad.b(arguments[0]);
    case 2:
      return Ad.a(arguments[0], arguments[1]);
    default:
      return Ad.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Ad.m = function() {
  return Bd;
};
Ad.b = function(a) {
  return a;
};
Ad.a = function(a, b) {
  return null != a ? Bb(a, b) : Bb(Vc, b);
};
Ad.k = function(a, b, c) {
  for (;;) {
    if (v(c)) {
      a = Ad.a(a, b), b = F(c), c = H(c);
    } else {
      return Ad.a(a, b);
    }
  }
};
Ad.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return Ad.k(b, a, c);
};
Ad.v = 2;
function M(a) {
  if (null != a) {
    if (a && (a.g & 2 || a.Ed)) {
      a = a.I(null);
    } else {
      if (jb(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (x(xb, a)) {
            a = yb(a);
          } else {
            a: {
              a = D(a);
              for (var b = 0;;) {
                if (pd(a)) {
                  a = b + yb(a);
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
function Cd(a, b) {
  for (var c = null;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return D(a) ? F(a) : c;
    }
    if (qd(a)) {
      return C.d(a, b, c);
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
function Dd(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number");
  }
  if (null == a) {
    return a;
  }
  if (a && (a.g & 16 || a.$c)) {
    return a.O(null, b);
  }
  if (jb(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (x(Cb, a)) {
    return C.a(a, b);
  }
  if (a ? a.g & 64 || a.cc || (a.g ? 0 : x(Db, a)) : x(Db, a)) {
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
        if (qd(c)) {
          c = C.a(c, d);
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
  throw Error([B("nth not supported on this type "), B(nb(mb(a)))].join(""));
}
function N(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number.");
  }
  if (null == a) {
    return null;
  }
  if (a && (a.g & 16 || a.$c)) {
    return a.sa(null, b, null);
  }
  if (jb(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (x(Cb, a)) {
    return C.a(a, b);
  }
  if (a ? a.g & 64 || a.cc || (a.g ? 0 : x(Db, a)) : x(Db, a)) {
    return Cd(a, b);
  }
  throw Error([B("nth not supported on this type "), B(nb(mb(a)))].join(""));
}
function Ed(a, b) {
  return null == a ? null : a && (a.g & 256 || a.Id) ? a.w(null, b) : jb(a) ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : x(Hb, a) ? Ib.a(a, b) : null;
}
function Fd(a, b, c) {
  return null != a ? a && (a.g & 256 || a.Id) ? a.u(null, b, c) : jb(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : x(Hb, a) ? Ib.d(a, b, c) : c : c;
}
var O = function O() {
  switch(arguments.length) {
    case 3:
      return O.d(arguments[0], arguments[1], arguments[2]);
    default:
      return O.k(arguments[0], arguments[1], arguments[2], new E(Array.prototype.slice.call(arguments, 3), 0));
  }
};
O.d = function(a, b, c) {
  return null != a ? Kb(a, b, c) : Gd([b], [c]);
};
O.k = function(a, b, c, d) {
  for (;;) {
    if (a = O.d(a, b, c), v(d)) {
      b = F(d), c = F(H(d)), d = H(H(d));
    } else {
      return a;
    }
  }
};
O.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  var d = H(c), c = F(d), d = H(d);
  return O.k(b, a, c, d);
};
O.v = 3;
var Hd = function Hd() {
  switch(arguments.length) {
    case 1:
      return Hd.b(arguments[0]);
    case 2:
      return Hd.a(arguments[0], arguments[1]);
    default:
      return Hd.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Hd.b = function(a) {
  return a;
};
Hd.a = function(a, b) {
  return null == a ? null : Mb(a, b);
};
Hd.k = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = Hd.a(a, b);
    if (v(c)) {
      b = F(c), c = H(c);
    } else {
      return a;
    }
  }
};
Hd.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return Hd.k(b, a, c);
};
Hd.v = 2;
function Id(a) {
  var b = fa(a);
  return v(b) ? b : a ? v(v(null) ? null : a.Dd) ? !0 : a.Ob ? !1 : x(vb, a) : x(vb, a);
}
function Jd(a, b) {
  this.e = a;
  this.l = b;
  this.g = 393217;
  this.r = 0;
}
g = Jd.prototype;
g.C = function() {
  return this.l;
};
g.D = function(a, b) {
  return new Jd(this.e, b);
};
g.Dd = !0;
g.call = function() {
  function a(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, y, G, L, Q, ba) {
    a = this.e;
    return Kd.Xb ? Kd.Xb(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, y, G, L, Q, ba) : Kd.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, y, G, L, Q, ba);
  }
  function b(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, y, G, L, Q) {
    a = this;
    return a.e.ga ? a.e.ga(b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, y, G, L, Q) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, y, G, L, Q);
  }
  function c(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, y, G, L) {
    a = this;
    return a.e.fa ? a.e.fa(b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, y, G, L) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, y, G, L);
  }
  function d(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, y, G) {
    a = this;
    return a.e.ea ? a.e.ea(b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, y, G) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, y, G);
  }
  function e(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, y) {
    a = this;
    return a.e.da ? a.e.da(b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, y) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, y);
  }
  function f(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A) {
    a = this;
    return a.e.ca ? a.e.ca(b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A);
  }
  function h(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w) {
    a = this;
    return a.e.ba ? a.e.ba(b, c, d, e, f, h, k, l, m, p, q, r, u, t, w) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w);
  }
  function k(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t) {
    a = this;
    return a.e.aa ? a.e.aa(b, c, d, e, f, h, k, l, m, p, q, r, u, t) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t);
  }
  function l(a, b, c, d, e, f, h, k, l, m, p, q, r, u) {
    a = this;
    return a.e.$ ? a.e.$(b, c, d, e, f, h, k, l, m, p, q, r, u) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u);
  }
  function m(a, b, c, d, e, f, h, k, l, m, p, q, r) {
    a = this;
    return a.e.Z ? a.e.Z(b, c, d, e, f, h, k, l, m, p, q, r) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r);
  }
  function p(a, b, c, d, e, f, h, k, l, m, p, q) {
    a = this;
    return a.e.Y ? a.e.Y(b, c, d, e, f, h, k, l, m, p, q) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q);
  }
  function q(a, b, c, d, e, f, h, k, l, m, p) {
    a = this;
    return a.e.X ? a.e.X(b, c, d, e, f, h, k, l, m, p) : a.e.call(null, b, c, d, e, f, h, k, l, m, p);
  }
  function r(a, b, c, d, e, f, h, k, l, m) {
    a = this;
    return a.e.ja ? a.e.ja(b, c, d, e, f, h, k, l, m) : a.e.call(null, b, c, d, e, f, h, k, l, m);
  }
  function t(a, b, c, d, e, f, h, k, l) {
    a = this;
    return a.e.ia ? a.e.ia(b, c, d, e, f, h, k, l) : a.e.call(null, b, c, d, e, f, h, k, l);
  }
  function w(a, b, c, d, e, f, h, k) {
    a = this;
    return a.e.ha ? a.e.ha(b, c, d, e, f, h, k) : a.e.call(null, b, c, d, e, f, h, k);
  }
  function y(a, b, c, d, e, f, h) {
    a = this;
    return a.e.K ? a.e.K(b, c, d, e, f, h) : a.e.call(null, b, c, d, e, f, h);
  }
  function A(a, b, c, d, e, f) {
    a = this;
    return a.e.J ? a.e.J(b, c, d, e, f) : a.e.call(null, b, c, d, e, f);
  }
  function G(a, b, c, d, e) {
    a = this;
    return a.e.s ? a.e.s(b, c, d, e) : a.e.call(null, b, c, d, e);
  }
  function L(a, b, c, d) {
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
  function Ca(a) {
    a = this;
    return a.e.m ? a.e.m() : a.e.call(null);
  }
  var u = null, u = function(u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea, Ia, Xa, ab, kb, Na, Ya, cb, db, uc, fd, qe) {
    switch(arguments.length) {
      case 1:
        return Ca.call(this, u);
      case 2:
        return ba.call(this, u, aa);
      case 3:
        return Q.call(this, u, aa, ha);
      case 4:
        return L.call(this, u, aa, ha, ja);
      case 5:
        return G.call(this, u, aa, ha, ja, oa);
      case 6:
        return A.call(this, u, aa, ha, ja, oa, ta);
      case 7:
        return y.call(this, u, aa, ha, ja, oa, ta, ua);
      case 8:
        return w.call(this, u, aa, ha, ja, oa, ta, ua, Aa);
      case 9:
        return t.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da);
      case 10:
        return r.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya);
      case 11:
        return q.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea);
      case 12:
        return p.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea, Ia);
      case 13:
        return m.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea, Ia, Xa);
      case 14:
        return l.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea, Ia, Xa, ab);
      case 15:
        return k.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea, Ia, Xa, ab, kb);
      case 16:
        return h.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea, Ia, Xa, ab, kb, Na);
      case 17:
        return f.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea, Ia, Xa, ab, kb, Na, Ya);
      case 18:
        return e.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea, Ia, Xa, ab, kb, Na, Ya, cb);
      case 19:
        return d.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea, Ia, Xa, ab, kb, Na, Ya, cb, db);
      case 20:
        return c.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea, Ia, Xa, ab, kb, Na, Ya, cb, db, uc);
      case 21:
        return b.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea, Ia, Xa, ab, kb, Na, Ya, cb, db, uc, fd);
      case 22:
        return a.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea, Ia, Xa, ab, kb, Na, Ya, cb, db, uc, fd, qe);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  u.b = Ca;
  u.a = ba;
  u.d = Q;
  u.s = L;
  u.J = G;
  u.K = A;
  u.ha = y;
  u.ia = w;
  u.ja = t;
  u.X = r;
  u.Y = q;
  u.Z = p;
  u.$ = m;
  u.aa = l;
  u.ba = k;
  u.ca = h;
  u.da = f;
  u.ea = e;
  u.fa = d;
  u.ga = c;
  u.Gc = b;
  u.Xb = a;
  return u;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(pb(b)));
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
g.K = function(a, b, c, d, e, f) {
  return this.e.K ? this.e.K(a, b, c, d, e, f) : this.e.call(null, a, b, c, d, e, f);
};
g.ha = function(a, b, c, d, e, f, h) {
  return this.e.ha ? this.e.ha(a, b, c, d, e, f, h) : this.e.call(null, a, b, c, d, e, f, h);
};
g.ia = function(a, b, c, d, e, f, h, k) {
  return this.e.ia ? this.e.ia(a, b, c, d, e, f, h, k) : this.e.call(null, a, b, c, d, e, f, h, k);
};
g.ja = function(a, b, c, d, e, f, h, k, l) {
  return this.e.ja ? this.e.ja(a, b, c, d, e, f, h, k, l) : this.e.call(null, a, b, c, d, e, f, h, k, l);
};
g.X = function(a, b, c, d, e, f, h, k, l, m) {
  return this.e.X ? this.e.X(a, b, c, d, e, f, h, k, l, m) : this.e.call(null, a, b, c, d, e, f, h, k, l, m);
};
g.Y = function(a, b, c, d, e, f, h, k, l, m, p) {
  return this.e.Y ? this.e.Y(a, b, c, d, e, f, h, k, l, m, p) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p);
};
g.Z = function(a, b, c, d, e, f, h, k, l, m, p, q) {
  return this.e.Z ? this.e.Z(a, b, c, d, e, f, h, k, l, m, p, q) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q);
};
g.$ = function(a, b, c, d, e, f, h, k, l, m, p, q, r) {
  return this.e.$ ? this.e.$(a, b, c, d, e, f, h, k, l, m, p, q, r) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r);
};
g.aa = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t) {
  return this.e.aa ? this.e.aa(a, b, c, d, e, f, h, k, l, m, p, q, r, t) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t);
};
g.ba = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w) {
  return this.e.ba ? this.e.ba(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w);
};
g.ca = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y) {
  return this.e.ca ? this.e.ca(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y);
};
g.da = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A) {
  return this.e.da ? this.e.da(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A);
};
g.ea = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G) {
  return this.e.ea ? this.e.ea(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G);
};
g.fa = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L) {
  return this.e.fa ? this.e.fa(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L);
};
g.ga = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L, Q) {
  return this.e.ga ? this.e.ga(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L, Q) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L, Q);
};
g.Gc = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L, Q, ba) {
  var Ca = this.e;
  return Kd.Xb ? Kd.Xb(Ca, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L, Q, ba) : Kd.call(null, Ca, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L, Q, ba);
};
function vd(a, b) {
  return Id(a) && !(a ? a.g & 262144 || a.Ud || (a.g ? 0 : x(Zb, a)) : x(Zb, a)) ? new Jd(a, b) : null == a ? null : $b(a, b);
}
function Ld(a) {
  var b = null != a;
  return(b ? a ? a.g & 131072 || a.Ld || (a.g ? 0 : x(Xb, a)) : x(Xb, a) : b) ? Yb(a) : null;
}
function Md(a) {
  return null == a ? null : Sb(a);
}
var Nd = function Nd() {
  switch(arguments.length) {
    case 1:
      return Nd.b(arguments[0]);
    case 2:
      return Nd.a(arguments[0], arguments[1]);
    default:
      return Nd.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Nd.b = function(a) {
  return a;
};
Nd.a = function(a, b) {
  return null == a ? null : Rb(a, b);
};
Nd.k = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = Nd.a(a, b);
    if (v(c)) {
      b = F(c), c = H(c);
    } else {
      return a;
    }
  }
};
Nd.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return Nd.k(b, a, c);
};
Nd.v = 2;
function Od(a) {
  return null == a || lb(D(a));
}
function Pd(a) {
  return null == a ? !1 : a ? a.g & 4096 || a.te ? !0 : a.g ? !1 : x(Qb, a) : x(Qb, a);
}
function Qd(a) {
  return a ? a.g & 16777216 || a.se ? !0 : a.g ? !1 : x(gc, a) : x(gc, a);
}
function Rd(a) {
  return null == a ? !1 : a ? a.g & 1024 || a.Jd ? !0 : a.g ? !1 : x(Lb, a) : x(Lb, a);
}
function Sd(a) {
  return a ? a.g & 16384 || a.ue ? !0 : a.g ? !1 : x(Ub, a) : x(Ub, a);
}
function Td(a) {
  return a ? a.r & 512 || a.ne ? !0 : !1 : !1;
}
function Ud(a) {
  var b = [];
  Ha(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function Vd(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, --e, b += 1;
  }
}
var Wd = {};
function Xd(a) {
  return null == a ? !1 : a ? a.g & 64 || a.cc ? !0 : a.g ? !1 : x(Db, a) : x(Db, a);
}
function Yd(a) {
  return v(a) ? !0 : !1;
}
function Zd(a, b) {
  return Fd(a, b, Wd) === Wd ? !1 : !0;
}
function $d(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (mb(a) === mb(b)) {
    return a && (a.r & 2048 || a.Wb) ? a.Hb(null, b) : Sa(a, b);
  }
  throw Error("compare on non-nil objects of different types");
}
function ae(a, b) {
  var c = M(a), d = M(b);
  if (c < d) {
    c = -1;
  } else {
    if (c > d) {
      c = 1;
    } else {
      a: {
        for (d = 0;;) {
          var e = $d(Dd(a, d), Dd(b, d));
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
function xd() {
  switch(arguments.length) {
    case 2:
      return wd(arguments[0], arguments[1]);
    case 3:
      return yd(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function wd(a, b) {
  var c = D(b);
  if (c) {
    var d = F(c), c = H(c);
    return tb ? tb(a, d, c) : ub.call(null, a, d, c);
  }
  return a.m ? a.m() : a.call(null);
}
function yd(a, b, c) {
  for (c = D(c);;) {
    if (c) {
      var d = F(c);
      b = a.a ? a.a(b, d) : a.call(null, b, d);
      if (jd(b)) {
        return Wb(b);
      }
      c = H(c);
    } else {
      return b;
    }
  }
}
function ub() {
  switch(arguments.length) {
    case 2:
      return be(arguments[0], arguments[1]);
    case 3:
      return tb(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function be(a, b) {
  return b && (b.g & 524288 || b.Nd) ? b.T(null, a) : jb(b) ? md(b, a) : "string" === typeof b ? md(b, a) : x(ac, b) ? bc.a(b, a) : wd(a, b);
}
function tb(a, b, c) {
  return c && (c.g & 524288 || c.Nd) ? c.U(null, a, b) : jb(c) ? nd(c, a, b) : "string" === typeof c ? nd(c, a, b) : x(ac, c) ? bc.d(c, a, b) : yd(a, b, c);
}
function ce(a) {
  return a;
}
function de(a, b, c, d) {
  a = a.b ? a.b(b) : a.call(null, b);
  c = tb(a, c, d);
  return a.b ? a.b(c) : a.call(null, c);
}
function ee(a) {
  return a - 1;
}
var fe = function fe() {
  switch(arguments.length) {
    case 1:
      return fe.b(arguments[0]);
    case 2:
      return fe.a(arguments[0], arguments[1]);
    default:
      return fe.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
fe.b = function(a) {
  return a;
};
fe.a = function(a, b) {
  return a > b ? a : b;
};
fe.k = function(a, b, c) {
  return tb(fe, a > b ? a : b, c);
};
fe.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return fe.k(b, a, c);
};
fe.v = 2;
function ge(a) {
  a = (a - a % 2) / 2;
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
}
function he(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function ie(a) {
  var b = 1;
  for (a = D(a);;) {
    if (a && 0 < b) {
      --b, a = H(a);
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
      return B.k(arguments[0], new E(Array.prototype.slice.call(arguments, 1), 0));
  }
};
B.m = function() {
  return "";
};
B.b = function(a) {
  return null == a ? "" : Fa(a);
};
B.k = function(a, b) {
  for (var c = new La("" + B(a)), d = b;;) {
    if (v(d)) {
      c = c.append("" + B(F(d))), d = H(d);
    } else {
      return c.toString();
    }
  }
};
B.t = function(a) {
  var b = F(a);
  a = H(a);
  return B.k(b, a);
};
B.v = 1;
function td(a, b) {
  var c;
  if (Qd(b)) {
    if (pd(a) && pd(b) && M(a) !== M(b)) {
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
  return Yd(c);
}
function je(a) {
  var b = 0;
  for (a = D(a);;) {
    if (a) {
      var c = F(a), b = (b + (Oc(function() {
        var a = c;
        return ke.b ? ke.b(a) : ke.call(null, a);
      }()) ^ Oc(function() {
        var a = c;
        return le.b ? le.b(a) : le.call(null, a);
      }()))) % 4503599627370496;
      a = H(a);
    } else {
      return b;
    }
  }
}
function me(a, b, c, d, e) {
  this.l = a;
  this.first = b;
  this.V = c;
  this.count = d;
  this.i = e;
  this.g = 65937646;
  this.r = 8192;
}
g = me.prototype;
g.toString = function() {
  return Fc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.l;
};
g.ka = function() {
  return 1 === this.count ? null : this.V;
};
g.I = function() {
  return this.count;
};
g.rb = function() {
  return this.first;
};
g.sb = function() {
  return Fb(this);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = cd(this);
};
g.q = function(a, b) {
  return td(this, b);
};
g.Q = function() {
  return $b(Vc, this.l);
};
g.T = function(a, b) {
  return wd(b, this);
};
g.U = function(a, b, c) {
  return yd(b, c, this);
};
g.S = function() {
  return this.first;
};
g.W = function() {
  return 1 === this.count ? Vc : this.V;
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new me(b, this.first, this.V, this.count, this.i);
};
g.G = function(a, b) {
  return new me(this.l, b, this, this.count + 1, null);
};
me.prototype[ob] = function() {
  return ad(this);
};
function ne(a) {
  this.l = a;
  this.g = 65937614;
  this.r = 8192;
}
g = ne.prototype;
g.toString = function() {
  return Fc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.l;
};
g.ka = function() {
  return null;
};
g.I = function() {
  return 0;
};
g.rb = function() {
  return null;
};
g.sb = function() {
  throw Error("Can't pop empty list");
};
g.B = function() {
  return dd;
};
g.q = function(a, b) {
  return td(this, b);
};
g.Q = function() {
  return this;
};
g.T = function(a, b) {
  return wd(b, this);
};
g.U = function(a, b, c) {
  return yd(b, c, this);
};
g.S = function() {
  return null;
};
g.W = function() {
  return Vc;
};
g.H = function() {
  return null;
};
g.D = function(a, b) {
  return new ne(b);
};
g.G = function(a, b) {
  return new me(this.l, b, null, 1, null);
};
var Vc = new ne(null);
ne.prototype[ob] = function() {
  return ad(this);
};
function oe(a) {
  return(a ? a.g & 134217728 || a.re || (a.g ? 0 : x(hc, a)) : x(hc, a)) ? ic(a) : tb(Ad, Vc, a);
}
var pe = function pe() {
  return pe.k(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
};
pe.k = function(a) {
  var b;
  if (a instanceof E && 0 === a.o) {
    b = a.c;
  } else {
    a: {
      for (b = [];;) {
        if (null != a) {
          b.push(a.S(null)), a = a.ka(null);
        } else {
          break a;
        }
      }
    }
  }
  a = b.length;
  for (var c = Vc;;) {
    if (0 < a) {
      var d = a - 1, c = c.G(null, b[a - 1]);
      a = d;
    } else {
      return c;
    }
  }
};
pe.v = 0;
pe.t = function(a) {
  return pe.k(D(a));
};
function re(a, b, c, d) {
  this.l = a;
  this.first = b;
  this.V = c;
  this.i = d;
  this.g = 65929452;
  this.r = 8192;
}
g = re.prototype;
g.toString = function() {
  return Fc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.l;
};
g.ka = function() {
  return null == this.V ? null : D(this.V);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = cd(this);
};
g.q = function(a, b) {
  return td(this, b);
};
g.Q = function() {
  return vd(Vc, this.l);
};
g.T = function(a, b) {
  return wd(b, this);
};
g.U = function(a, b, c) {
  return yd(b, c, this);
};
g.S = function() {
  return this.first;
};
g.W = function() {
  return null == this.V ? Vc : this.V;
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new re(b, this.first, this.V, this.i);
};
g.G = function(a, b) {
  return new re(null, b, this, this.i);
};
re.prototype[ob] = function() {
  return ad(this);
};
function J(a, b) {
  var c = null == b;
  return(c ? c : b && (b.g & 64 || b.cc)) ? new re(null, a, b, null) : new re(null, a, D(b), null);
}
function se(a, b) {
  if (a.la === b.la) {
    return 0;
  }
  var c = lb(a.oa);
  if (v(c ? b.oa : c)) {
    return-1;
  }
  if (v(a.oa)) {
    if (lb(b.oa)) {
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
  this.la = c;
  this.Gb = d;
  this.g = 2153775105;
  this.r = 4096;
}
g = P.prototype;
g.toString = function() {
  return[B(":"), B(this.la)].join("");
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.q = function(a, b) {
  return b instanceof P ? this.la === b.la : !1;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ed(c, this);
      case 3:
        return Fd(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return Ed(c, this);
  };
  a.d = function(a, c, d) {
    return Fd(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(pb(b)));
};
g.b = function(a) {
  return Ed(a, this);
};
g.a = function(a, b) {
  return Fd(a, this, b);
};
g.B = function() {
  var a = this.Gb;
  return null != a ? a : this.Gb = a = Pc(Kc(this.name), Nc(this.oa)) + 2654435769 | 0;
};
g.ac = function() {
  return this.name;
};
g.bc = function() {
  return this.oa;
};
g.A = function(a, b) {
  return jc(b, [B(":"), B(this.la)].join(""));
};
function R(a, b) {
  return a === b ? !0 : a instanceof P && b instanceof P ? a.la === b.la : !1;
}
var te = function te() {
  switch(arguments.length) {
    case 1:
      return te.b(arguments[0]);
    case 2:
      return te.a(arguments[0], arguments[1]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
te.b = function(a) {
  if (a instanceof P) {
    return a;
  }
  if (a instanceof Rc) {
    var b;
    if (a && (a.r & 4096 || a.Md)) {
      b = a.bc(null);
    } else {
      throw Error([B("Doesn't support namespace: "), B(a)].join(""));
    }
    return new P(b, ue.b ? ue.b(a) : ue.call(null, a), a.ib, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new P(b[0], b[1], a, null) : new P(null, b[0], a, null)) : null;
};
te.a = function(a, b) {
  return new P(a, b, [B(v(a) ? [B(a), B("/")].join("") : null), B(b)].join(""), null);
};
te.v = 2;
function ve(a, b, c, d) {
  this.l = a;
  this.tb = b;
  this.F = c;
  this.i = d;
  this.g = 32374988;
  this.r = 0;
}
g = ve.prototype;
g.toString = function() {
  return Fc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
function we(a) {
  null != a.tb && (a.F = a.tb.m ? a.tb.m() : a.tb.call(null), a.tb = null);
  return a.F;
}
g.C = function() {
  return this.l;
};
g.ka = function() {
  fc(this);
  return null == this.F ? null : H(this.F);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = cd(this);
};
g.q = function(a, b) {
  return td(this, b);
};
g.Q = function() {
  return vd(Vc, this.l);
};
g.T = function(a, b) {
  return wd(b, this);
};
g.U = function(a, b, c) {
  return yd(b, c, this);
};
g.S = function() {
  fc(this);
  return null == this.F ? null : F(this.F);
};
g.W = function() {
  fc(this);
  return null != this.F ? Uc(this.F) : Vc;
};
g.H = function() {
  we(this);
  if (null == this.F) {
    return null;
  }
  for (var a = this.F;;) {
    if (a instanceof ve) {
      a = we(a);
    } else {
      return this.F = a, D(this.F);
    }
  }
};
g.D = function(a, b) {
  return new ve(b, this.tb, this.F, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
ve.prototype[ob] = function() {
  return ad(this);
};
function xe(a, b) {
  this.L = a;
  this.end = b;
  this.g = 2;
  this.r = 0;
}
xe.prototype.add = function(a) {
  this.L[this.end] = a;
  return this.end += 1;
};
xe.prototype.va = function() {
  var a = new ye(this.L, 0, this.end);
  this.L = null;
  return a;
};
xe.prototype.I = function() {
  return this.end;
};
function ye(a, b, c) {
  this.c = a;
  this.ma = b;
  this.end = c;
  this.g = 524306;
  this.r = 0;
}
g = ye.prototype;
g.I = function() {
  return this.end - this.ma;
};
g.O = function(a, b) {
  return this.c[this.ma + b];
};
g.sa = function(a, b, c) {
  return 0 <= b && b < this.end - this.ma ? this.c[this.ma + b] : c;
};
g.Zc = function() {
  if (this.ma === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new ye(this.c, this.ma + 1, this.end);
};
g.T = function(a, b) {
  return od(this.c, b, this.c[this.ma], this.ma + 1);
};
g.U = function(a, b, c) {
  return od(this.c, b, c, this.ma);
};
function ze(a, b, c, d) {
  this.va = a;
  this.bb = b;
  this.l = c;
  this.i = d;
  this.g = 31850732;
  this.r = 1536;
}
g = ze.prototype;
g.toString = function() {
  return Fc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.l;
};
g.ka = function() {
  if (1 < yb(this.va)) {
    return new ze(sc(this.va), this.bb, this.l, null);
  }
  var a = fc(this.bb);
  return null == a ? null : a;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = cd(this);
};
g.q = function(a, b) {
  return td(this, b);
};
g.Q = function() {
  return vd(Vc, this.l);
};
g.S = function() {
  return C.a(this.va, 0);
};
g.W = function() {
  return 1 < yb(this.va) ? new ze(sc(this.va), this.bb, this.l, null) : null == this.bb ? Vc : this.bb;
};
g.H = function() {
  return this;
};
g.Ec = function() {
  return this.va;
};
g.Fc = function() {
  return null == this.bb ? Vc : this.bb;
};
g.D = function(a, b) {
  return new ze(this.va, this.bb, b, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
g.Dc = function() {
  return null == this.bb ? null : this.bb;
};
ze.prototype[ob] = function() {
  return ad(this);
};
function Ae(a, b) {
  return 0 === yb(a) ? b : new ze(a, b, null, null);
}
function Be(a, b) {
  a.add(b);
}
function Ce(a) {
  for (var b = [];;) {
    if (D(a)) {
      b.push(F(a)), a = H(a);
    } else {
      return b;
    }
  }
}
function De(a) {
  if ("number" === typeof a) {
    a: {
      var b = Array(a);
      if (Xd(null)) {
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
    a = rb(a);
  }
  return a;
}
function Ee(a, b) {
  if (pd(a)) {
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
var Fe = function Fe(b) {
  return null == b ? null : null == H(b) ? D(F(b)) : J(F(b), Fe(H(b)));
}, Ge = function Ge() {
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
  return new ve(null, function() {
    return null;
  }, null, null);
};
Ge.b = function(a) {
  return new ve(null, function() {
    return a;
  }, null, null);
};
Ge.a = function(a, b) {
  return new ve(null, function() {
    var c = D(a);
    return c ? Td(c) ? Ae(tc(c), Ge.a(vc(c), b)) : J(F(c), Ge.a(Uc(c), b)) : b;
  }, null, null);
};
Ge.k = function(a, b, c) {
  return function e(a, b) {
    return new ve(null, function() {
      var c = D(a);
      return c ? Td(c) ? Ae(tc(c), e(vc(c), b)) : J(F(c), e(Uc(c), b)) : v(b) ? e(F(b), H(b)) : null;
    }, null, null);
  }(Ge.a(a, b), c);
};
Ge.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return Ge.k(b, a, c);
};
Ge.v = 2;
function He(a) {
  return pc(a);
}
var Ie = function Ie() {
  switch(arguments.length) {
    case 0:
      return Ie.m();
    case 1:
      return Ie.b(arguments[0]);
    case 2:
      return Ie.a(arguments[0], arguments[1]);
    default:
      return Ie.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Ie.m = function() {
  return nc(Bd);
};
Ie.b = function(a) {
  return a;
};
Ie.a = function(a, b) {
  return oc(a, b);
};
Ie.k = function(a, b, c) {
  for (;;) {
    if (a = oc(a, b), v(c)) {
      b = F(c), c = H(c);
    } else {
      return a;
    }
  }
};
Ie.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return Ie.k(b, a, c);
};
Ie.v = 2;
function Je(a, b, c) {
  var d = D(c);
  if (0 === b) {
    return a.m ? a.m() : a.call(null);
  }
  c = Eb(d);
  var e = Fb(d);
  if (1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c);
  }
  var d = Eb(e), f = Fb(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = Eb(f), h = Fb(f);
  if (3 === b) {
    return a.d ? a.d(c, d, e) : a.d ? a.d(c, d, e) : a.call(null, c, d, e);
  }
  var f = Eb(h), k = Fb(h);
  if (4 === b) {
    return a.s ? a.s(c, d, e, f) : a.s ? a.s(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var h = Eb(k), l = Fb(k);
  if (5 === b) {
    return a.J ? a.J(c, d, e, f, h) : a.J ? a.J(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  var k = Eb(l), m = Fb(l);
  if (6 === b) {
    return a.K ? a.K(c, d, e, f, h, k) : a.K ? a.K(c, d, e, f, h, k) : a.call(null, c, d, e, f, h, k);
  }
  var l = Eb(m), p = Fb(m);
  if (7 === b) {
    return a.ha ? a.ha(c, d, e, f, h, k, l) : a.ha ? a.ha(c, d, e, f, h, k, l) : a.call(null, c, d, e, f, h, k, l);
  }
  var m = Eb(p), q = Fb(p);
  if (8 === b) {
    return a.ia ? a.ia(c, d, e, f, h, k, l, m) : a.ia ? a.ia(c, d, e, f, h, k, l, m) : a.call(null, c, d, e, f, h, k, l, m);
  }
  var p = Eb(q), r = Fb(q);
  if (9 === b) {
    return a.ja ? a.ja(c, d, e, f, h, k, l, m, p) : a.ja ? a.ja(c, d, e, f, h, k, l, m, p) : a.call(null, c, d, e, f, h, k, l, m, p);
  }
  var q = Eb(r), t = Fb(r);
  if (10 === b) {
    return a.X ? a.X(c, d, e, f, h, k, l, m, p, q) : a.X ? a.X(c, d, e, f, h, k, l, m, p, q) : a.call(null, c, d, e, f, h, k, l, m, p, q);
  }
  var r = Eb(t), w = Fb(t);
  if (11 === b) {
    return a.Y ? a.Y(c, d, e, f, h, k, l, m, p, q, r) : a.Y ? a.Y(c, d, e, f, h, k, l, m, p, q, r) : a.call(null, c, d, e, f, h, k, l, m, p, q, r);
  }
  var t = Eb(w), y = Fb(w);
  if (12 === b) {
    return a.Z ? a.Z(c, d, e, f, h, k, l, m, p, q, r, t) : a.Z ? a.Z(c, d, e, f, h, k, l, m, p, q, r, t) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t);
  }
  var w = Eb(y), A = Fb(y);
  if (13 === b) {
    return a.$ ? a.$(c, d, e, f, h, k, l, m, p, q, r, t, w) : a.$ ? a.$(c, d, e, f, h, k, l, m, p, q, r, t, w) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, w);
  }
  var y = Eb(A), G = Fb(A);
  if (14 === b) {
    return a.aa ? a.aa(c, d, e, f, h, k, l, m, p, q, r, t, w, y) : a.aa ? a.aa(c, d, e, f, h, k, l, m, p, q, r, t, w, y) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, w, y);
  }
  var A = Eb(G), L = Fb(G);
  if (15 === b) {
    return a.ba ? a.ba(c, d, e, f, h, k, l, m, p, q, r, t, w, y, A) : a.ba ? a.ba(c, d, e, f, h, k, l, m, p, q, r, t, w, y, A) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A);
  }
  var G = Eb(L), Q = Fb(L);
  if (16 === b) {
    return a.ca ? a.ca(c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G) : a.ca ? a.ca(c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G);
  }
  var L = Eb(Q), ba = Fb(Q);
  if (17 === b) {
    return a.da ? a.da(c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L) : a.da ? a.da(c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L);
  }
  var Q = Eb(ba), Ca = Fb(ba);
  if (18 === b) {
    return a.ea ? a.ea(c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L, Q) : a.ea ? a.ea(c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L, Q) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L, Q);
  }
  ba = Eb(Ca);
  Ca = Fb(Ca);
  if (19 === b) {
    return a.fa ? a.fa(c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L, Q, ba) : a.fa ? a.fa(c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L, Q, ba) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L, Q, ba);
  }
  var u = Eb(Ca);
  Fb(Ca);
  if (20 === b) {
    return a.ga ? a.ga(c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L, Q, ba, u) : a.ga ? a.ga(c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L, Q, ba, u) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L, Q, ba, u);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function Kd() {
  switch(arguments.length) {
    case 2:
      return Ke(arguments[0], arguments[1]);
    case 3:
      return Le(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Me(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Ne(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return Oe(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new E(Array.prototype.slice.call(arguments, 5), 0));
  }
}
function Ke(a, b) {
  var c = a.v;
  if (a.t) {
    var d = Ee(b, c + 1);
    return d <= c ? Je(a, d, b) : a.t(b);
  }
  return a.apply(a, Ce(b));
}
function Le(a, b, c) {
  b = J(b, c);
  c = a.v;
  if (a.t) {
    var d = Ee(b, c + 1);
    return d <= c ? Je(a, d, b) : a.t(b);
  }
  return a.apply(a, Ce(b));
}
function Me(a, b, c, d) {
  b = J(b, J(c, d));
  c = a.v;
  return a.t ? (d = Ee(b, c + 1), d <= c ? Je(a, d, b) : a.t(b)) : a.apply(a, Ce(b));
}
function Ne(a, b, c, d, e) {
  b = J(b, J(c, J(d, e)));
  c = a.v;
  return a.t ? (d = Ee(b, c + 1), d <= c ? Je(a, d, b) : a.t(b)) : a.apply(a, Ce(b));
}
function Oe(a, b, c, d, e, f) {
  b = J(b, J(c, J(d, J(e, Fe(f)))));
  c = a.v;
  return a.t ? (d = Ee(b, c + 1), d <= c ? Je(a, d, b) : a.t(b)) : a.apply(a, Ce(b));
}
function Pe(a) {
  return D(a) ? a : null;
}
var Qe = function Qe() {
  "undefined" === typeof Ta && (Ta = function(b, c) {
    this.ie = b;
    this.fe = c;
    this.g = 393216;
    this.r = 0;
  }, Ta.prototype.D = function(b, c) {
    return new Ta(this.ie, c);
  }, Ta.prototype.C = function() {
    return this.fe;
  }, Ta.prototype.Ya = function() {
    return!1;
  }, Ta.prototype.next = function() {
    return Error("No such element");
  }, Ta.prototype.remove = function() {
    return Error("Unsupported operation");
  }, Ta.Pb = !0, Ta.Nb = "cljs.core/t25071", Ta.fc = function(b, c) {
    return jc(c, "cljs.core/t25071");
  });
  return new Ta(Qe, Re);
};
function Se(a, b) {
  this.F = a;
  this.o = b;
}
Se.prototype.Ya = function() {
  return this.o < this.F.length;
};
Se.prototype.next = function() {
  var a = this.F.charAt(this.o);
  this.o += 1;
  return a;
};
Se.prototype.remove = function() {
  return Error("Unsupported operation");
};
function Te(a, b) {
  this.c = a;
  this.o = b;
}
Te.prototype.Ya = function() {
  return this.o < this.c.length;
};
Te.prototype.next = function() {
  var a = this.c[this.o];
  this.o += 1;
  return a;
};
Te.prototype.remove = function() {
  return Error("Unsupported operation");
};
var Ue = {}, Ve = {};
function We(a, b) {
  this.Vb = a;
  this.yb = b;
}
We.prototype.Ya = function() {
  this.Vb === Ue ? (this.Vb = Ve, this.yb = D(this.yb)) : this.Vb === this.yb && (this.yb = H(this.Vb));
  return null != this.yb;
};
We.prototype.next = function() {
  if (lb(this.Ya())) {
    throw Error("No such element");
  }
  this.Vb = this.yb;
  return F(this.yb);
};
We.prototype.remove = function() {
  return Error("Unsupported operation");
};
function Xe(a) {
  if (null == a) {
    return Qe();
  }
  if ("string" === typeof a) {
    return new Se(a, 0);
  }
  if (jb(a)) {
    return new Te(a, 0);
  }
  var b;
  b = a ? v(v(null) ? null : a.rc) ? !0 : a.Ob ? !1 : x(Cc, a) : x(Cc, a);
  if (v(b)) {
    return Dc(a);
  }
  if (a ? a.g & 8388608 || a.Pd || (a.g ? 0 : x(ec, a)) : x(ec, a)) {
    return new We(Ue, a);
  }
  throw Error([B("Cannot create iterator from "), B(a)].join(""));
}
function Ye(a, b) {
  this.Ub = a;
  this.pd = b;
}
Ye.prototype.step = function(a) {
  for (var b = this;;) {
    if (v(function() {
      var c = null != a.Pa;
      return c ? b.pd.Ya() : c;
    }())) {
      if (jd(function() {
        var c = b.pd.next();
        return b.Ub.a ? b.Ub.a(a, c) : b.Ub.call(null, a, c);
      }())) {
        null != a.V && (a.V.Pa = null);
      } else {
        continue;
      }
    }
    break;
  }
  return null == a.Pa ? null : b.Ub.b ? b.Ub.b(a) : b.Ub.call(null, a);
};
function Ze(a, b) {
  var c = function() {
    function a(b, c) {
      b.first = c;
      b.V = new $e(b.Pa, null, null, null);
      b.Pa = null;
      return b.V;
    }
    function b(a) {
      (jd(a) ? Wb(a) : a).Pa = null;
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
  return new Ye(a.b ? a.b(c) : a.call(null, c), b);
}
function $e(a, b, c, d) {
  this.Pa = a;
  this.first = b;
  this.V = c;
  this.l = d;
  this.g = 31719628;
  this.r = 0;
}
g = $e.prototype;
g.D = function(a, b) {
  return new $e(this.Pa, this.first, this.V, b);
};
g.G = function(a, b) {
  return J(b, fc(this));
};
g.Q = function() {
  return Vc;
};
g.q = function(a, b) {
  return null != fc(this) ? td(this, b) : Qd(b) && null == D(b);
};
g.B = function() {
  return cd(this);
};
g.H = function() {
  null != this.Pa && this.Pa.step(this);
  return null == this.V ? null : this;
};
g.S = function() {
  null != this.Pa && fc(this);
  return null == this.V ? null : this.first;
};
g.W = function() {
  null != this.Pa && fc(this);
  return null == this.V ? Vc : this.V;
};
g.ka = function() {
  null != this.Pa && fc(this);
  return null == this.V ? null : fc(this.V);
};
$e.prototype[ob] = function() {
  return ad(this);
};
function af(a, b) {
  for (;;) {
    if (null == D(b)) {
      return!0;
    }
    var c;
    c = F(b);
    c = a.b ? a.b(c) : a.call(null, c);
    if (v(c)) {
      c = a;
      var d = H(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
function bf(a, b) {
  for (;;) {
    if (D(b)) {
      var c;
      c = F(b);
      c = a.b ? a.b(c) : a.call(null, c);
      if (v(c)) {
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
function cf(a) {
  return function() {
    function b(b, c) {
      return lb(a.a ? a.a(b, c) : a.call(null, b, c));
    }
    function c(b) {
      return lb(a.b ? a.b(b) : a.call(null, b));
    }
    function d() {
      return lb(a.m ? a.m() : a.call(null));
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
        return lb(Me(a, b, d, e));
      }
      b.v = 2;
      b.t = function(a) {
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
    e.t = f.t;
    e.m = d;
    e.b = c;
    e.a = b;
    e.k = f.k;
    return e;
  }();
}
function df(a) {
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
    b.k = function() {
      return a;
    };
    return b;
  }();
}
function ef(a, b) {
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
        c = Ne(b, c, e, f, h);
        return a.b ? a.b(c) : a.call(null, c);
      }
      c.v = 3;
      c.t = function(a) {
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
    h.t = k.t;
    h.m = f;
    h.b = e;
    h.a = d;
    h.d = c;
    h.k = k.k;
    return h;
  }();
}
function ff(a, b, c) {
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
        d = Ne(c, d, f, h, k);
        d = b.b ? b.b(d) : b.call(null, d);
        return a.b ? a.b(d) : a.call(null, d);
      }
      d.v = 3;
      d.t = function(a) {
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
            for (var t = 0, w = Array(arguments.length - 3);t < w.length;) {
              w[t] = arguments[t + 3], ++t;
            }
            t = new E(w, 0);
          }
          return l.k(a, b, c, t);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    k.v = 3;
    k.t = l.t;
    k.m = h;
    k.b = f;
    k.a = e;
    k.d = d;
    k.k = l.k;
    return k;
  }();
}
function gf(a, b) {
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
        return Oe(a, b, c, e, f, K([h], 0));
      }
      c.v = 3;
      c.t = function(a) {
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
    h.t = k.t;
    h.m = f;
    h.b = e;
    h.a = d;
    h.d = c;
    h.k = k.k;
    return h;
  }();
}
function hf(a, b) {
  var c = jf, d = kf;
  return function() {
    function e(e, f, h) {
      return c.K ? c.K(a, d, b, e, f, h) : c.call(null, a, d, b, e, f, h);
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
        return Oe(c, a, d, b, e, K([h, k, l], 0));
      }
      e.v = 3;
      e.t = function(a) {
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
            for (var l = 0, y = Array(arguments.length - 3);l < y.length;) {
              y[l] = arguments[l + 3], ++l;
            }
            l = new E(y, 0);
          }
          return m.k(a, b, c, l);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    l.v = 3;
    l.t = m.t;
    l.m = k;
    l.b = h;
    l.a = f;
    l.d = e;
    l.k = m.k;
    return l;
  }();
}
function lf(a, b, c, d) {
  this.state = a;
  this.l = b;
  this.me = c;
  this.Ad = d;
  this.r = 16386;
  this.g = 6455296;
}
g = lf.prototype;
g.equiv = function(a) {
  return this.q(null, a);
};
g.q = function(a, b) {
  return this === b;
};
g.Ib = function() {
  return this.state;
};
g.C = function() {
  return this.l;
};
g.cd = function(a, b, c) {
  for (var d = D(this.Ad), e = null, f = 0, h = 0;;) {
    if (h < f) {
      a = e.O(null, h);
      var k = N(a, 0);
      a = N(a, 1);
      var l = b, m = c;
      a.s ? a.s(k, this, l, m) : a.call(null, k, this, l, m);
      h += 1;
    } else {
      if (a = D(d)) {
        d = a, Td(d) ? (e = tc(d), d = vc(d), a = e, f = M(e), e = a) : (a = F(d), k = N(a, 0), a = N(a, 1), e = k, f = b, h = c, a.s ? a.s(e, this, f, h) : a.call(null, e, this, f, h), d = H(d), e = null, f = 0), h = 0;
      } else {
        return null;
      }
    }
  }
};
g.B = function() {
  return this[ia] || (this[ia] = ++ka);
};
function mf() {
  switch(arguments.length) {
    case 1:
      return nf(arguments[0]);
    default:
      var a = arguments[0], b = new E(Array.prototype.slice.call(arguments, 1), 0), c = Xd(b) ? Ke(of, b) : b, b = Ed(c, fb), c = Ed(c, pf);
      return new lf(a, b, c, null);
  }
}
function nf(a) {
  return new lf(a, null, null, null);
}
function qf(a, b) {
  if (a instanceof lf) {
    var c = a.me;
    if (null != c && !v(c.b ? c.b(b) : c.call(null, b))) {
      throw Error([B("Assert failed: "), B("Validator rejected reference state"), B("\n"), B(function() {
        var a = pe(new Rc(null, "validate", "validate", 1439230700, null), new Rc(null, "new-value", "new-value", -1567397401, null));
        return rf.b ? rf.b(a) : rf.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.Ad && mc(a, c, b);
    return b;
  }
  return zc(a, b);
}
var jf = function jf() {
  switch(arguments.length) {
    case 2:
      return jf.a(arguments[0], arguments[1]);
    case 3:
      return jf.d(arguments[0], arguments[1], arguments[2]);
    case 4:
      return jf.s(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return jf.k(arguments[0], arguments[1], arguments[2], arguments[3], new E(Array.prototype.slice.call(arguments, 4), 0));
  }
};
jf.a = function(a, b) {
  var c;
  a instanceof lf ? (c = a.state, c = b.b ? b.b(c) : b.call(null, c), c = qf(a, c)) : c = Ac.a(a, b);
  return c;
};
jf.d = function(a, b, c) {
  if (a instanceof lf) {
    var d = a.state;
    b = b.a ? b.a(d, c) : b.call(null, d, c);
    a = qf(a, b);
  } else {
    a = Ac.d(a, b, c);
  }
  return a;
};
jf.s = function(a, b, c, d) {
  if (a instanceof lf) {
    var e = a.state;
    b = b.d ? b.d(e, c, d) : b.call(null, e, c, d);
    a = qf(a, b);
  } else {
    a = Ac.s(a, b, c, d);
  }
  return a;
};
jf.k = function(a, b, c, d, e) {
  return a instanceof lf ? qf(a, Ne(b, a.state, c, d, e)) : Ac.J(a, b, c, d, e);
};
jf.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  var d = H(c), c = F(d), e = H(d), d = F(e), e = H(e);
  return jf.k(b, a, c, d, e);
};
jf.v = 4;
function sf(a) {
  this.state = a;
  this.g = 32768;
  this.r = 0;
}
sf.prototype.bd = function(a, b) {
  return this.state = b;
};
sf.prototype.Ib = function() {
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
          e = Le(a, e, f);
          return b.a ? b.a(c, e) : b.call(null, c, e);
        }
        c.v = 2;
        c.t = function(a) {
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
      f.t = h.t;
      f.m = e;
      f.b = d;
      f.a = c;
      f.k = h.k;
      return f;
    }();
  };
};
S.a = function(a, b) {
  return new ve(null, function() {
    var c = D(b);
    if (c) {
      if (Td(c)) {
        for (var d = tc(c), e = M(d), f = new xe(Array(e), 0), h = 0;;) {
          if (h < e) {
            Be(f, function() {
              var b = C.a(d, h);
              return a.b ? a.b(b) : a.call(null, b);
            }()), h += 1;
          } else {
            break;
          }
        }
        return Ae(f.va(), S.a(a, vc(c)));
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
  return new ve(null, function() {
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
  return new ve(null, function() {
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
    return new ve(null, function() {
      var b = S.a(D, a);
      return af(ce, b) ? J(S.a(F, b), k(S.a(Uc, b))) : null;
    }, null, null);
  };
  return S.a(function() {
    return function(b) {
      return Ke(a, b);
    };
  }(f), f(Ad.k(e, d, K([c, b], 0))));
};
S.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  var d = H(c), c = F(d), e = H(d), d = F(e), e = H(e);
  return S.k(b, a, c, d, e);
};
S.v = 4;
function tf(a) {
  return function(b) {
    return function(a) {
      return function() {
        function d(d, e) {
          var f = Wb(a), h = Bc(a, Wb(a) - 1), f = 0 < f ? b.a ? b.a(d, e) : b.call(null, d, e) : d;
          return 0 < h ? f : jd(f) ? f : new id(f);
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
    }(new sf(a));
  };
}
function uf(a, b) {
  return new ve(null, function() {
    if (0 < a) {
      var c = D(b);
      return c ? J(F(c), uf(a - 1, Uc(c))) : null;
    }
    return null;
  }, null, null);
}
function vf(a, b) {
  return new ve(null, function(c) {
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
function wf(a) {
  var b = xf;
  return new ve(null, function(c) {
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
        f = a, e = Uc(e), a = f, b = e;
      } else {
        return e;
      }
    }
  }), null, null);
}
function yf(a) {
  return new ve(null, function() {
    return J(a, yf(a));
  }, null, null);
}
function zf(a) {
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
function Af(a, b) {
  return new ve(null, function() {
    var c = D(b);
    if (c) {
      if (Td(c)) {
        for (var d = tc(c), e = M(d), f = new xe(Array(e), 0), h = 0;;) {
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
        return Ae(f.va(), Af(a, vc(c)));
      }
      d = F(c);
      c = Uc(c);
      return v(a.b ? a.b(d) : a.call(null, d)) ? J(d, Af(a, c)) : Af(a, c);
    }
    return null;
  }, null, null);
}
function Bf(a, b) {
  return Af(cf(a), b);
}
function Cf(a) {
  return function c(a) {
    return new ve(null, function() {
      var e;
      v(Qd.b ? Qd.b(a) : Qd.call(null, a)) ? (e = K([D.b ? D.b(a) : D.call(null, a)], 0), e = Ke(Ge, Le(S, c, e))) : e = null;
      return J(a, e);
    }, null, null);
  }(a);
}
function Df(a) {
  return Af(function(a) {
    return!Qd(a);
  }, Uc(Cf(a)));
}
var Ef = function Ef() {
  switch(arguments.length) {
    case 2:
      return Ef.a(arguments[0], arguments[1]);
    case 3:
      return Ef.d(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
Ef.a = function(a, b) {
  return null != a ? a && (a.r & 4 || a.Fd) ? vd(He(tb(oc, nc(a), b)), Ld(a)) : tb(Bb, a, b) : tb(Ad, Vc, b);
};
Ef.d = function(a, b, c) {
  return a && (a.r & 4 || a.Fd) ? vd(He(de(b, Ie, nc(a), c)), Ld(a)) : de(b, Ad, a, c);
};
Ef.v = 3;
var Ff = function Ff() {
  switch(arguments.length) {
    case 2:
      return Ff.a(arguments[0], arguments[1]);
    case 3:
      return Ff.d(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Ff.s(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return Ff.k(arguments[0], arguments[1], arguments[2], arguments[3], new E(Array.prototype.slice.call(arguments, 4), 0));
  }
};
Ff.a = function(a, b) {
  return He(tb(function(b, d) {
    return Ie.a(b, a.b ? a.b(d) : a.call(null, d));
  }, nc(Bd), b));
};
Ff.d = function(a, b, c) {
  return Ef.a(Bd, S.d(a, b, c));
};
Ff.s = function(a, b, c, d) {
  return Ef.a(Bd, S.s(a, b, c, d));
};
Ff.k = function(a, b, c, d, e) {
  return Ef.a(Bd, Oe(S, a, b, c, d, K([e], 0)));
};
Ff.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  var d = H(c), c = F(d), e = H(d), d = F(e), e = H(e);
  return Ff.k(b, a, c, d, e);
};
Ff.v = 4;
function Gf(a, b, c, d) {
  return new ve(null, function() {
    var e = D(d);
    if (e) {
      var f = uf(a, e);
      return a === M(f) ? J(f, Gf(a, b, c, vf(b, e))) : Bb(Vc, uf(a, Ge.a(f, c)));
    }
    return null;
  }, null, null);
}
var kf = function kf(b, c, d) {
  var e = N(c, 0);
  c = ie(c);
  return v(c) ? O.d(b, e, kf(Ed(b, e), c, d)) : O.d(b, e, d);
}, Hf = function Hf() {
  switch(arguments.length) {
    case 3:
      return Hf.d(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Hf.s(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Hf.J(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return Hf.K(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      return Hf.k(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new E(Array.prototype.slice.call(arguments, 6), 0));
  }
};
Hf.d = function(a, b, c) {
  var d = N(b, 0);
  b = ie(b);
  return v(b) ? O.d(a, d, Hf.d(Ed(a, d), b, c)) : O.d(a, d, function() {
    var b = Ed(a, d);
    return c.b ? c.b(b) : c.call(null, b);
  }());
};
Hf.s = function(a, b, c, d) {
  var e = N(b, 0);
  b = ie(b);
  return v(b) ? O.d(a, e, Hf.s(Ed(a, e), b, c, d)) : O.d(a, e, function() {
    var b = Ed(a, e);
    return c.a ? c.a(b, d) : c.call(null, b, d);
  }());
};
Hf.J = function(a, b, c, d, e) {
  var f = N(b, 0);
  b = ie(b);
  return v(b) ? O.d(a, f, Hf.J(Ed(a, f), b, c, d, e)) : O.d(a, f, function() {
    var b = Ed(a, f);
    return c.d ? c.d(b, d, e) : c.call(null, b, d, e);
  }());
};
Hf.K = function(a, b, c, d, e, f) {
  var h = N(b, 0);
  b = ie(b);
  return v(b) ? O.d(a, h, Hf.K(Ed(a, h), b, c, d, e, f)) : O.d(a, h, function() {
    var b = Ed(a, h);
    return c.s ? c.s(b, d, e, f) : c.call(null, b, d, e, f);
  }());
};
Hf.k = function(a, b, c, d, e, f, h) {
  var k = N(b, 0);
  b = ie(b);
  return v(b) ? O.d(a, k, Oe(Hf, Ed(a, k), b, c, d, K([e, f, h], 0))) : O.d(a, k, Oe(c, Ed(a, k), d, e, f, K([h], 0)));
};
Hf.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  var d = H(c), c = F(d), e = H(d), d = F(e), f = H(e), e = F(f), h = H(f), f = F(h), h = H(h);
  return Hf.k(b, a, c, d, e, f, h);
};
Hf.v = 6;
function If(a, b) {
  this.P = a;
  this.c = b;
}
function Jf(a) {
  return new If(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Kf(a) {
  return new If(a.P, pb(a.c));
}
function Lf(a) {
  a = a.h;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Mf(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Jf(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var Nf = function Nf(b, c, d, e) {
  var f = Kf(d), h = b.h - 1 >>> c & 31;
  5 === c ? f.c[h] = e : (d = d.c[h], b = null != d ? Nf(b, c - 5, d, e) : Mf(null, c - 5, e), f.c[h] = b);
  return f;
};
function Of(a, b) {
  throw Error([B("No item "), B(a), B(" in vector of length "), B(b)].join(""));
}
function Pf(a, b) {
  if (b >= Lf(a)) {
    return a.M;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.c[b >>> d & 31], d = e
    } else {
      return c.c;
    }
  }
}
function Qf(a, b) {
  return 0 <= b && b < a.h ? Pf(a, b) : Of(b, a.h);
}
var Rf = function Rf(b, c, d, e, f) {
  var h = Kf(d);
  if (0 === c) {
    h.c[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Rf(b, c - 5, d.c[k], e, f);
    h.c[k] = b;
  }
  return h;
}, Sf = function Sf(b, c, d) {
  var e = b.h - 2 >>> c & 31;
  if (5 < c) {
    b = Sf(b, c - 5, d.c[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = Kf(d);
    d.c[e] = b;
    return d;
  }
  if (0 === e) {
    return null;
  }
  d = Kf(d);
  d.c[e] = null;
  return d;
};
function Tf(a, b, c, d, e, f) {
  this.o = a;
  this.mc = b;
  this.c = c;
  this.Ta = d;
  this.start = e;
  this.end = f;
}
Tf.prototype.Ya = function() {
  return this.o < this.end;
};
Tf.prototype.next = function() {
  32 === this.o - this.mc && (this.c = Pf(this.Ta, this.o), this.mc += 32);
  var a = this.c[this.o & 31];
  this.o += 1;
  return a;
};
function T(a, b, c, d, e, f) {
  this.l = a;
  this.h = b;
  this.shift = c;
  this.root = d;
  this.M = e;
  this.i = f;
  this.g = 167668511;
  this.r = 8196;
}
g = T.prototype;
g.toString = function() {
  return Fc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.w = function(a, b) {
  return Ib.d(this, b, null);
};
g.u = function(a, b, c) {
  return "number" === typeof b ? C.d(this, b, c) : c;
};
g.O = function(a, b) {
  return Qf(this, b)[b & 31];
};
g.sa = function(a, b, c) {
  return 0 <= b && b < this.h ? Pf(this, b)[b & 31] : c;
};
g.Bb = function(a, b, c) {
  if (0 <= b && b < this.h) {
    return Lf(this) <= b ? (a = pb(this.M), a[b & 31] = c, new T(this.l, this.h, this.shift, this.root, a, null)) : new T(this.l, this.h, this.shift, Rf(this, this.shift, this.root, b, c), this.M, null);
  }
  if (b === this.h) {
    return Bb(this, c);
  }
  throw Error([B("Index "), B(b), B(" out of bounds  [0,"), B(this.h), B("]")].join(""));
};
g.rc = !0;
g.Yb = function() {
  var a = this.h;
  return new Tf(0, 0, 0 < M(this) ? Pf(this, 0) : null, this, 0, a);
};
g.C = function() {
  return this.l;
};
g.I = function() {
  return this.h;
};
g.Zb = function() {
  return C.a(this, 0);
};
g.$b = function() {
  return C.a(this, 1);
};
g.rb = function() {
  return 0 < this.h ? C.a(this, this.h - 1) : null;
};
g.sb = function() {
  if (0 === this.h) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.h) {
    return $b(Bd, this.l);
  }
  if (1 < this.h - Lf(this)) {
    return new T(this.l, this.h - 1, this.shift, this.root, this.M.slice(0, -1), null);
  }
  var a = Pf(this, this.h - 2), b = Sf(this, this.shift, this.root), b = null == b ? U : b, c = this.h - 1;
  return 5 < this.shift && null == b.c[1] ? new T(this.l, c, this.shift - 5, b.c[0], a, null) : new T(this.l, c, this.shift, b, a, null);
};
g.Kb = function() {
  return 0 < this.h ? new sd(this, this.h - 1, null) : null;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = cd(this);
};
g.q = function(a, b) {
  if (b instanceof T) {
    if (this.h === M(b)) {
      for (var c = Dc(this), d = Dc(b);;) {
        if (v(c.Ya())) {
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
    return td(this, b);
  }
};
g.Jb = function() {
  var a = this;
  return new Uf(a.h, a.shift, function() {
    var b = a.root;
    return Vf.b ? Vf.b(b) : Vf.call(null, b);
  }(), function() {
    var b = a.M;
    return Wf.b ? Wf.b(b) : Wf.call(null, b);
  }());
};
g.Q = function() {
  return vd(Bd, this.l);
};
g.T = function(a, b) {
  return kd(this, b);
};
g.U = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.h) {
      var e = Pf(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var h = e[f], d = b.a ? b.a(d, h) : b.call(null, d, h);
            if (jd(d)) {
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
      if (jd(e)) {
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
    return Vb(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
g.H = function() {
  if (0 === this.h) {
    return null;
  }
  if (32 >= this.h) {
    return new E(this.M, 0);
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
  return Xf ? Xf(this, a, 0, 0) : Yf.call(null, this, a, 0, 0);
};
g.D = function(a, b) {
  return new T(b, this.h, this.shift, this.root, this.M, this.i);
};
g.G = function(a, b) {
  if (32 > this.h - Lf(this)) {
    for (var c = this.M.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.M[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new T(this.l, this.h + 1, this.shift, this.root, d, null);
  }
  c = (d = this.h >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Jf(null), d.c[0] = this.root, e = Mf(null, this.shift, new If(null, this.M)), d.c[1] = e) : d = Nf(this, this.shift, this.root, new If(null, this.M));
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
  return this.call.apply(this, [this].concat(pb(b)));
};
g.b = function(a) {
  return this.O(null, a);
};
g.a = function(a, b) {
  return this.sa(null, a, b);
};
var U = new If(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Bd = new T(null, 0, 5, U, [], dd);
function Zf(a) {
  var b = a.length;
  if (32 > b) {
    return new T(null, b, 5, U, a, null);
  }
  for (var c = 32, d = (new T(null, 32, 5, U, a.slice(0, 32), null)).Jb(null);;) {
    if (c < b) {
      var e = c + 1, d = Ie.a(d, a[c]), c = e
    } else {
      return pc(d);
    }
  }
}
T.prototype[ob] = function() {
  return ad(this);
};
function $f(a) {
  return jb(a) ? Zf(a) : pc(tb(oc, nc(Bd), a));
}
var ag = function ag() {
  return ag.k(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
};
ag.k = function(a) {
  return a instanceof E && 0 === a.o ? Zf(a.c) : $f(a);
};
ag.v = 0;
ag.t = function(a) {
  return ag.k(D(a));
};
function bg(a, b, c, d, e, f) {
  this.Fa = a;
  this.nb = b;
  this.o = c;
  this.ma = d;
  this.l = e;
  this.i = f;
  this.g = 32375020;
  this.r = 1536;
}
g = bg.prototype;
g.toString = function() {
  return Fc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.l;
};
g.ka = function() {
  if (this.ma + 1 < this.nb.length) {
    var a;
    a = this.Fa;
    var b = this.nb, c = this.o, d = this.ma + 1;
    a = Xf ? Xf(a, b, c, d) : Yf.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return wc(this);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = cd(this);
};
g.q = function(a, b) {
  return td(this, b);
};
g.Q = function() {
  return vd(Bd, this.l);
};
g.T = function(a, b) {
  var c;
  c = this.Fa;
  var d = this.o + this.ma, e = M(this.Fa);
  c = cg ? cg(c, d, e) : dg.call(null, c, d, e);
  return kd(c, b);
};
g.U = function(a, b, c) {
  a = this.Fa;
  var d = this.o + this.ma, e = M(this.Fa);
  a = cg ? cg(a, d, e) : dg.call(null, a, d, e);
  return ld(a, b, c);
};
g.S = function() {
  return this.nb[this.ma];
};
g.W = function() {
  if (this.ma + 1 < this.nb.length) {
    var a;
    a = this.Fa;
    var b = this.nb, c = this.o, d = this.ma + 1;
    a = Xf ? Xf(a, b, c, d) : Yf.call(null, a, b, c, d);
    return null == a ? Vc : a;
  }
  return vc(this);
};
g.H = function() {
  return this;
};
g.Ec = function() {
  var a = this.nb;
  return new ye(a, this.ma, a.length);
};
g.Fc = function() {
  var a = this.o + this.nb.length;
  if (a < yb(this.Fa)) {
    var b = this.Fa, c = Pf(this.Fa, a);
    return Xf ? Xf(b, c, a, 0) : Yf.call(null, b, c, a, 0);
  }
  return Vc;
};
g.D = function(a, b) {
  var c = this.Fa, d = this.nb, e = this.o, f = this.ma;
  return eg ? eg(c, d, e, f, b) : Yf.call(null, c, d, e, f, b);
};
g.G = function(a, b) {
  return J(b, this);
};
g.Dc = function() {
  var a = this.o + this.nb.length;
  if (a < yb(this.Fa)) {
    var b = this.Fa, c = Pf(this.Fa, a);
    return Xf ? Xf(b, c, a, 0) : Yf.call(null, b, c, a, 0);
  }
  return null;
};
bg.prototype[ob] = function() {
  return ad(this);
};
function Yf() {
  switch(arguments.length) {
    case 3:
      var a = arguments[0], b = arguments[1], c = arguments[2];
      return new bg(a, Qf(a, b), b, c, null, null);
    case 4:
      return Xf(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return eg(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function Xf(a, b, c, d) {
  return new bg(a, b, c, d, null, null);
}
function eg(a, b, c, d, e) {
  return new bg(a, b, c, d, e, null);
}
function fg(a, b, c, d, e) {
  this.l = a;
  this.Ta = b;
  this.start = c;
  this.end = d;
  this.i = e;
  this.g = 167666463;
  this.r = 8192;
}
g = fg.prototype;
g.toString = function() {
  return Fc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.w = function(a, b) {
  return Ib.d(this, b, null);
};
g.u = function(a, b, c) {
  return "number" === typeof b ? C.d(this, b, c) : c;
};
g.O = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Of(b, this.end - this.start) : C.a(this.Ta, this.start + b);
};
g.sa = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : C.d(this.Ta, this.start + b, c);
};
g.Bb = function(a, b, c) {
  var d = this.start + b;
  a = this.l;
  c = O.d(this.Ta, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return gg.J ? gg.J(a, c, b, d, null) : gg.call(null, a, c, b, d, null);
};
g.C = function() {
  return this.l;
};
g.I = function() {
  return this.end - this.start;
};
g.rb = function() {
  return C.a(this.Ta, this.end - 1);
};
g.sb = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  var a = this.l, b = this.Ta, c = this.start, d = this.end - 1;
  return gg.J ? gg.J(a, b, c, d, null) : gg.call(null, a, b, c, d, null);
};
g.Kb = function() {
  return this.start !== this.end ? new sd(this, this.end - this.start - 1, null) : null;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = cd(this);
};
g.q = function(a, b) {
  return td(this, b);
};
g.Q = function() {
  return vd(Bd, this.l);
};
g.T = function(a, b) {
  return kd(this, b);
};
g.U = function(a, b, c) {
  return ld(this, b, c);
};
g.pa = function(a, b, c) {
  if ("number" === typeof b) {
    return Vb(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.H = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : J(C.a(a.Ta, e), new ve(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
g.D = function(a, b) {
  var c = this.Ta, d = this.start, e = this.end, f = this.i;
  return gg.J ? gg.J(b, c, d, e, f) : gg.call(null, b, c, d, e, f);
};
g.G = function(a, b) {
  var c = this.l, d = Vb(this.Ta, this.end, b), e = this.start, f = this.end + 1;
  return gg.J ? gg.J(c, d, e, f, null) : gg.call(null, c, d, e, f, null);
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
  return this.call.apply(this, [this].concat(pb(b)));
};
g.b = function(a) {
  return this.O(null, a);
};
g.a = function(a, b) {
  return this.sa(null, a, b);
};
fg.prototype[ob] = function() {
  return ad(this);
};
function gg(a, b, c, d, e) {
  for (;;) {
    if (b instanceof fg) {
      c = b.start + c, d = b.start + d, b = b.Ta;
    } else {
      var f = M(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new fg(a, b, c, d, e);
    }
  }
}
function dg() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0];
      return cg(a, arguments[1], M(a));
    case 3:
      return cg(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function cg(a, b, c) {
  return gg(null, a, b, c, null);
}
function hg(a, b) {
  return a === b.P ? b : new If(a, pb(b.c));
}
function Vf(a) {
  return new If({}, pb(a.c));
}
function Wf(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Vd(a, 0, b, 0, a.length);
  return b;
}
var ig = function ig(b, c, d, e) {
  d = hg(b.root.P, d);
  var f = b.h - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.c[f];
    b = null != h ? ig(b, c - 5, h, e) : Mf(b.root.P, c - 5, e);
  }
  d.c[f] = b;
  return d;
};
function Uf(a, b, c, d) {
  this.h = a;
  this.shift = b;
  this.root = c;
  this.M = d;
  this.r = 88;
  this.g = 275;
}
g = Uf.prototype;
g.zb = function(a, b) {
  if (this.root.P) {
    if (32 > this.h - Lf(this)) {
      this.M[this.h & 31] = b;
    } else {
      var c = new If(this.root.P, this.M), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.M = d;
      if (this.h >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Mf(this.root.P, this.shift, c);
        this.root = new If(this.root.P, d);
        this.shift = e;
      } else {
        this.root = ig(this, this.shift, this.root, c);
      }
    }
    this.h += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
g.Ab = function() {
  if (this.root.P) {
    this.root.P = null;
    var a = this.h - Lf(this), b = Array(a);
    Vd(this.M, 0, b, 0, a);
    return new T(null, this.h, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
g.dc = function(a, b, c) {
  if ("number" === typeof b) {
    return rc(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
g.ad = function(a, b, c) {
  var d = this;
  if (d.root.P) {
    if (0 <= b && b < d.h) {
      return Lf(this) <= b ? d.M[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = hg(d.root.P, k);
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
      return oc(this, c);
    }
    throw Error([B("Index "), B(b), B(" out of bounds for TransientVector of length"), B(d.h)].join(""));
  }
  throw Error("assoc! after persistent!");
};
g.I = function() {
  if (this.root.P) {
    return this.h;
  }
  throw Error("count after persistent!");
};
g.O = function(a, b) {
  if (this.root.P) {
    return Qf(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.sa = function(a, b, c) {
  return 0 <= b && b < this.h ? C.a(this, b) : c;
};
g.w = function(a, b) {
  return Ib.d(this, b, null);
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
  return this.call.apply(this, [this].concat(pb(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
function jg(a, b, c, d) {
  this.l = a;
  this.xa = b;
  this.gb = c;
  this.i = d;
  this.g = 31850572;
  this.r = 0;
}
g = jg.prototype;
g.toString = function() {
  return Fc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.l;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = cd(this);
};
g.q = function(a, b) {
  return td(this, b);
};
g.Q = function() {
  return vd(Vc, this.l);
};
g.S = function() {
  return F(this.xa);
};
g.W = function() {
  var a = H(this.xa);
  return a ? new jg(this.l, a, this.gb, null) : null == this.gb ? zb(this) : new jg(this.l, this.gb, null, null);
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new jg(b, this.xa, this.gb, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
jg.prototype[ob] = function() {
  return ad(this);
};
function kg(a, b, c, d, e) {
  this.l = a;
  this.count = b;
  this.xa = c;
  this.gb = d;
  this.i = e;
  this.g = 31858766;
  this.r = 8192;
}
g = kg.prototype;
g.toString = function() {
  return Fc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.l;
};
g.I = function() {
  return this.count;
};
g.rb = function() {
  return F(this.xa);
};
g.sb = function() {
  if (v(this.xa)) {
    var a = H(this.xa);
    return a ? new kg(this.l, this.count - 1, a, this.gb, null) : new kg(this.l, this.count - 1, D(this.gb), Bd, null);
  }
  return this;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = cd(this);
};
g.q = function(a, b) {
  return td(this, b);
};
g.Q = function() {
  return vd(lg, this.l);
};
g.S = function() {
  return F(this.xa);
};
g.W = function() {
  return Uc(D(this));
};
g.H = function() {
  var a = D(this.gb), b = this.xa;
  return v(v(b) ? b : a) ? new jg(null, this.xa, D(a), null) : null;
};
g.D = function(a, b) {
  return new kg(b, this.count, this.xa, this.gb, this.i);
};
g.G = function(a, b) {
  var c;
  v(this.xa) ? (c = this.gb, c = new kg(this.l, this.count + 1, this.xa, Ad.a(v(c) ? c : Bd, b), null)) : c = new kg(this.l, this.count + 1, Ad.a(this.xa, b), Bd, null);
  return c;
};
var lg = new kg(null, 0, null, Bd, dd);
kg.prototype[ob] = function() {
  return ad(this);
};
function mg() {
  this.g = 2097152;
  this.r = 0;
}
mg.prototype.equiv = function(a) {
  return this.q(null, a);
};
mg.prototype.q = function() {
  return!1;
};
var ng = new mg;
function og(a, b) {
  return Yd(Rd(b) ? M(a) === M(b) ? af(ce, S.a(function(a) {
    return Wc.a(Fd(b, F(a), ng), F(H(a)));
  }, a)) : null : null);
}
function pg(a) {
  this.F = a;
}
pg.prototype.next = function() {
  if (null != this.F) {
    var a = F(this.F), b = N(a, 0), a = N(a, 1);
    this.F = H(this.F);
    return{value:[b, a], done:!1};
  }
  return{value:null, done:!0};
};
function qg(a) {
  return new pg(D(a));
}
function rg(a) {
  this.F = a;
}
rg.prototype.next = function() {
  if (null != this.F) {
    var a = F(this.F);
    this.F = H(this.F);
    return{value:[a, a], done:!1};
  }
  return{value:null, done:!0};
};
function sg(a) {
  return new rg(D(a));
}
function tg(a, b) {
  var c;
  if (b instanceof P) {
    a: {
      c = a.length;
      for (var d = b.la, e = 0;;) {
        if (c <= e) {
          c = -1;
          break a;
        }
        var f = a[e];
        if (f instanceof P && d === f.la) {
          c = e;
          break a;
        }
        e += 2;
      }
    }
  } else {
    if (c = ea(b), v(v(c) ? c : "number" === typeof b)) {
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
      if (b instanceof Rc) {
        a: {
          for (c = a.length, d = b.ib, e = 0;;) {
            if (c <= e) {
              c = -1;
              break a;
            }
            f = a[e];
            if (f instanceof Rc && d === f.ib) {
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
function ug(a, b, c) {
  this.c = a;
  this.o = b;
  this.ra = c;
  this.g = 32374990;
  this.r = 0;
}
g = ug.prototype;
g.toString = function() {
  return Fc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.ra;
};
g.ka = function() {
  return this.o < this.c.length - 2 ? new ug(this.c, this.o + 2, this.ra) : null;
};
g.I = function() {
  return(this.c.length - this.o) / 2;
};
g.B = function() {
  return cd(this);
};
g.q = function(a, b) {
  return td(this, b);
};
g.Q = function() {
  return vd(Vc, this.ra);
};
g.T = function(a, b) {
  return wd(b, this);
};
g.U = function(a, b, c) {
  return yd(b, c, this);
};
g.S = function() {
  return new T(null, 2, 5, U, [this.c[this.o], this.c[this.o + 1]], null);
};
g.W = function() {
  return this.o < this.c.length - 2 ? new ug(this.c, this.o + 2, this.ra) : Vc;
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new ug(this.c, this.o, b);
};
g.G = function(a, b) {
  return J(b, this);
};
ug.prototype[ob] = function() {
  return ad(this);
};
function vg(a, b, c) {
  this.c = a;
  this.o = b;
  this.h = c;
}
vg.prototype.Ya = function() {
  return this.o < this.h;
};
vg.prototype.next = function() {
  var a = new T(null, 2, 5, U, [this.c[this.o], this.c[this.o + 1]], null);
  this.o += 2;
  return a;
};
function $a(a, b, c, d) {
  this.l = a;
  this.h = b;
  this.c = c;
  this.i = d;
  this.g = 16647951;
  this.r = 8196;
}
g = $a.prototype;
g.toString = function() {
  return Fc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.keys = function() {
  return ad(wg.b ? wg.b(this) : wg.call(null, this));
};
g.entries = function() {
  return qg(D(this));
};
g.values = function() {
  return ad(xg.b ? xg.b(this) : xg.call(null, this));
};
g.has = function(a) {
  return Zd(this, a);
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
        Td(b) ? (c = tc(b), b = vc(b), h = c, d = M(c), c = h) : (c = F(b), h = N(c, 0), c = f = N(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.w = function(a, b) {
  return Ib.d(this, b, null);
};
g.u = function(a, b, c) {
  a = tg(this.c, b);
  return-1 === a ? c : this.c[a + 1];
};
g.rc = !0;
g.Yb = function() {
  return new vg(this.c, 0, 2 * this.h);
};
g.C = function() {
  return this.l;
};
g.I = function() {
  return this.h;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ed(this);
};
g.q = function(a, b) {
  if (b && (b.g & 1024 || b.Jd)) {
    var c = this.c.length;
    if (this.h === b.I(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.u(null, this.c[d], Wd);
          if (e !== Wd) {
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
    return og(this, b);
  }
};
g.Jb = function() {
  return new yg({}, this.c.length, pb(this.c));
};
g.Q = function() {
  return $b(Re, this.l);
};
g.T = function(a, b) {
  return wd(b, this);
};
g.U = function(a, b, c) {
  return yd(b, c, this);
};
g.Aa = function(a, b) {
  if (0 <= tg(this.c, b)) {
    var c = this.c.length, d = c - 2;
    if (0 === d) {
      return zb(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new $a(this.l, this.h - 1, d, null);
      }
      Wc.a(b, this.c[e]) || (d[f] = this.c[e], d[f + 1] = this.c[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
g.pa = function(a, b, c) {
  a = tg(this.c, b);
  if (-1 === a) {
    if (this.h < zg) {
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
      return new $a(this.l, this.h + 1, e, null);
    }
    return $b(Kb(Ef.a(Ag, this), b, c), this.l);
  }
  if (c === this.c[a + 1]) {
    return this;
  }
  b = pb(this.c);
  b[a + 1] = c;
  return new $a(this.l, this.h, b, null);
};
g.qc = function(a, b) {
  return-1 !== tg(this.c, b);
};
g.H = function() {
  var a = this.c;
  return 0 <= a.length - 2 ? new ug(a, 0, null) : null;
};
g.D = function(a, b) {
  return new $a(b, this.h, this.c, this.i);
};
g.G = function(a, b) {
  if (Sd(b)) {
    return Kb(this, C.a(b, 0), C.a(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (Sd(e)) {
      c = Kb(c, C.a(e, 0), C.a(e, 1)), d = H(d);
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
  return this.call.apply(this, [this].concat(pb(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
var Re = new $a(null, 0, [], gd), zg = 8;
function Bg(a) {
  for (var b = [], c = 0;;) {
    if (c < a.length) {
      var d = a[c], e = a[c + 1];
      -1 === tg(b, d) && (b.push(d), b.push(e));
      c += 2;
    } else {
      break;
    }
  }
  return new $a(null, b.length / 2, b, null);
}
$a.prototype[ob] = function() {
  return ad(this);
};
function yg(a, b, c) {
  this.Qb = a;
  this.Sb = b;
  this.c = c;
  this.g = 258;
  this.r = 56;
}
g = yg.prototype;
g.I = function() {
  if (v(this.Qb)) {
    return ge(this.Sb);
  }
  throw Error("count after persistent!");
};
g.w = function(a, b) {
  return Ib.d(this, b, null);
};
g.u = function(a, b, c) {
  if (v(this.Qb)) {
    return a = tg(this.c, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.zb = function(a, b) {
  if (v(this.Qb)) {
    if (b ? b.g & 2048 || b.Kd || (b.g ? 0 : x(Nb, b)) : x(Nb, b)) {
      return qc(this, ke.b ? ke.b(b) : ke.call(null, b), le.b ? le.b(b) : le.call(null, b));
    }
    for (var c = D(b), d = this;;) {
      var e = F(c);
      if (v(e)) {
        var f = e, c = H(c), d = qc(d, function() {
          var a = f;
          return ke.b ? ke.b(a) : ke.call(null, a);
        }(), function() {
          var a = f;
          return le.b ? le.b(a) : le.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
g.Ab = function() {
  if (v(this.Qb)) {
    return this.Qb = !1, new $a(null, ge(this.Sb), this.c, null);
  }
  throw Error("persistent! called twice");
};
g.dc = function(a, b, c) {
  if (v(this.Qb)) {
    a = tg(this.c, b);
    if (-1 === a) {
      if (this.Sb + 2 <= 2 * zg) {
        return this.Sb += 2, this.c.push(b), this.c.push(c), this;
      }
      a = this.Sb;
      var d = this.c;
      a = Cg.a ? Cg.a(a, d) : Cg.call(null, a, d);
      return qc(a, b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function Cg(a, b) {
  for (var c = nc(Ag), d = 0;;) {
    if (d < a) {
      c = qc(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Dg() {
  this.n = !1;
}
function Eg(a, b) {
  return a === b ? !0 : R(a, b) ? !0 : Wc.a(a, b);
}
function Fg(a, b, c) {
  a = pb(a);
  a[b] = c;
  return a;
}
function Gg(a, b) {
  var c = Array(a.length - 2);
  Vd(a, 0, c, 0, 2 * b);
  Vd(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
function Hg(a, b, c, d) {
  a = a.Cb(b);
  a.c[c] = d;
  return a;
}
function Ig(a, b, c) {
  this.P = a;
  this.R = b;
  this.c = c;
}
g = Ig.prototype;
g.Cb = function(a) {
  if (a === this.P) {
    return this;
  }
  var b = he(this.R), c = Array(0 > b ? 4 : 2 * (b + 1));
  Vd(this.c, 0, c, 0, 2 * b);
  return new Ig(a, this.R, c);
};
g.hc = function() {
  var a = this.c;
  return Jg ? Jg(a) : Kg.call(null, a);
};
g.ub = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.R & e)) {
    return d;
  }
  var f = he(this.R & e - 1), e = this.c[2 * f], f = this.c[2 * f + 1];
  return null == e ? f.ub(a + 5, b, c, d) : Eg(c, e) ? f : d;
};
g.Ra = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = he(this.R & h - 1);
  if (0 === (this.R & h)) {
    var l = he(this.R);
    if (2 * l < this.c.length) {
      a = this.Cb(a);
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
      a.R |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = Lg.Ra(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.R >>> d & 1) && (k[d] = null != this.c[e] ? Lg.Ra(a, b + 5, Oc(this.c[e]), this.c[e], this.c[e + 1], f) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Mg(a, l + 1, k);
    }
    b = Array(2 * (l + 4));
    Vd(this.c, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    Vd(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k));
    f.n = !0;
    a = this.Cb(a);
    a.c = b;
    a.R |= h;
    return a;
  }
  l = this.c[2 * k];
  h = this.c[2 * k + 1];
  if (null == l) {
    return l = h.Ra(a, b + 5, c, d, e, f), l === h ? this : Hg(this, a, 2 * k + 1, l);
  }
  if (Eg(d, l)) {
    return e === h ? this : Hg(this, a, 2 * k + 1, e);
  }
  f.n = !0;
  f = b + 5;
  d = Ng ? Ng(a, f, l, h, c, d, e) : Og.call(null, a, f, l, h, c, d, e);
  e = 2 * k;
  k = 2 * k + 1;
  a = this.Cb(a);
  a.c[e] = null;
  a.c[k] = d;
  return a;
};
g.Qa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = he(this.R & f - 1);
  if (0 === (this.R & f)) {
    var k = he(this.R);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = Lg.Qa(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.R >>> c & 1) && (h[c] = null != this.c[d] ? Lg.Qa(a + 5, Oc(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Mg(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    Vd(this.c, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    Vd(this.c, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.n = !0;
    return new Ig(null, this.R | f, a);
  }
  var l = this.c[2 * h], f = this.c[2 * h + 1];
  if (null == l) {
    return k = f.Qa(a + 5, b, c, d, e), k === f ? this : new Ig(null, this.R, Fg(this.c, 2 * h + 1, k));
  }
  if (Eg(c, l)) {
    return d === f ? this : new Ig(null, this.R, Fg(this.c, 2 * h + 1, d));
  }
  e.n = !0;
  e = this.R;
  k = this.c;
  a += 5;
  a = Pg ? Pg(a, l, f, b, c, d) : Og.call(null, a, l, f, b, c, d);
  c = 2 * h;
  h = 2 * h + 1;
  d = pb(k);
  d[c] = null;
  d[h] = a;
  return new Ig(null, e, d);
};
g.ic = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.R & d)) {
    return this;
  }
  var e = he(this.R & d - 1), f = this.c[2 * e], h = this.c[2 * e + 1];
  return null == f ? (a = h.ic(a + 5, b, c), a === h ? this : null != a ? new Ig(null, this.R, Fg(this.c, 2 * e + 1, a)) : this.R === d ? null : new Ig(null, this.R ^ d, Gg(this.c, e))) : Eg(c, f) ? new Ig(null, this.R ^ d, Gg(this.c, e)) : this;
};
var Lg = new Ig(null, 0, []);
function Mg(a, b, c) {
  this.P = a;
  this.h = b;
  this.c = c;
}
g = Mg.prototype;
g.Cb = function(a) {
  return a === this.P ? this : new Mg(a, this.h, pb(this.c));
};
g.hc = function() {
  var a = this.c;
  return Rg ? Rg(a) : Sg.call(null, a);
};
g.ub = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.ub(a + 5, b, c, d) : d;
};
g.Ra = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.c[h];
  if (null == k) {
    return a = Hg(this, a, h, Lg.Ra(a, b + 5, c, d, e, f)), a.h += 1, a;
  }
  b = k.Ra(a, b + 5, c, d, e, f);
  return b === k ? this : Hg(this, a, h, b);
};
g.Qa = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.c[f];
  if (null == h) {
    return new Mg(null, this.h + 1, Fg(this.c, f, Lg.Qa(a + 5, b, c, d, e)));
  }
  a = h.Qa(a + 5, b, c, d, e);
  return a === h ? this : new Mg(null, this.h, Fg(this.c, f, a));
};
g.ic = function(a, b, c) {
  var d = b >>> a & 31, e = this.c[d];
  if (null != e) {
    a = e.ic(a + 5, b, c);
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
                d = new Ig(null, h, b);
                break a;
              }
            }
          }
        } else {
          d = new Mg(null, this.h - 1, Fg(this.c, d, a));
        }
      } else {
        d = new Mg(null, this.h, Fg(this.c, d, a));
      }
    }
    return d;
  }
  return this;
};
function Tg(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Eg(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Ug(a, b, c, d) {
  this.P = a;
  this.mb = b;
  this.h = c;
  this.c = d;
}
g = Ug.prototype;
g.Cb = function(a) {
  if (a === this.P) {
    return this;
  }
  var b = Array(2 * (this.h + 1));
  Vd(this.c, 0, b, 0, 2 * this.h);
  return new Ug(a, this.mb, this.h, b);
};
g.hc = function() {
  var a = this.c;
  return Jg ? Jg(a) : Kg.call(null, a);
};
g.ub = function(a, b, c, d) {
  a = Tg(this.c, this.h, c);
  return 0 > a ? d : Eg(c, this.c[a]) ? this.c[a + 1] : d;
};
g.Ra = function(a, b, c, d, e, f) {
  if (c === this.mb) {
    b = Tg(this.c, this.h, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.h) {
        return b = 2 * this.h, c = 2 * this.h + 1, a = this.Cb(a), a.c[b] = d, a.c[c] = e, f.n = !0, a.h += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      Vd(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.n = !0;
      d = this.h + 1;
      a === this.P ? (this.c = b, this.h = d, a = this) : a = new Ug(this.P, this.mb, d, b);
      return a;
    }
    return this.c[b + 1] === e ? this : Hg(this, a, b + 1, e);
  }
  return(new Ig(a, 1 << (this.mb >>> b & 31), [null, this, null, null])).Ra(a, b, c, d, e, f);
};
g.Qa = function(a, b, c, d, e) {
  return b === this.mb ? (a = Tg(this.c, this.h, c), -1 === a ? (a = 2 * this.h, b = Array(a + 2), Vd(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.n = !0, new Ug(null, this.mb, this.h + 1, b)) : Wc.a(this.c[a], d) ? this : new Ug(null, this.mb, this.h, Fg(this.c, a + 1, d))) : (new Ig(null, 1 << (this.mb >>> a & 31), [null, this])).Qa(a, b, c, d, e);
};
g.ic = function(a, b, c) {
  a = Tg(this.c, this.h, c);
  return-1 === a ? this : 1 === this.h ? null : new Ug(null, this.mb, this.h - 1, Gg(this.c, ge(a)));
};
function Og() {
  switch(arguments.length) {
    case 6:
      return Pg(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return Ng(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function Pg(a, b, c, d, e, f) {
  var h = Oc(b);
  if (h === d) {
    return new Ug(null, h, 2, [b, c, e, f]);
  }
  var k = new Dg;
  return Lg.Qa(a, h, b, c, k).Qa(a, d, e, f, k);
}
function Ng(a, b, c, d, e, f, h) {
  var k = Oc(c);
  if (k === e) {
    return new Ug(null, k, 2, [c, d, f, h]);
  }
  var l = new Dg;
  return Lg.Ra(a, b, k, c, d, l).Ra(a, b, e, f, h, l);
}
function Vg(a, b, c, d, e) {
  this.l = a;
  this.vb = b;
  this.o = c;
  this.F = d;
  this.i = e;
  this.g = 32374860;
  this.r = 0;
}
g = Vg.prototype;
g.toString = function() {
  return Fc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.l;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = cd(this);
};
g.q = function(a, b) {
  return td(this, b);
};
g.Q = function() {
  return vd(Vc, this.l);
};
g.T = function(a, b) {
  return wd(b, this);
};
g.U = function(a, b, c) {
  return yd(b, c, this);
};
g.S = function() {
  return null == this.F ? new T(null, 2, 5, U, [this.vb[this.o], this.vb[this.o + 1]], null) : F(this.F);
};
g.W = function() {
  if (null == this.F) {
    var a = this.vb, b = this.o + 2;
    return Wg ? Wg(a, b, null) : Kg.call(null, a, b, null);
  }
  var a = this.vb, b = this.o, c = H(this.F);
  return Wg ? Wg(a, b, c) : Kg.call(null, a, b, c);
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new Vg(b, this.vb, this.o, this.F, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
Vg.prototype[ob] = function() {
  return ad(this);
};
function Kg() {
  switch(arguments.length) {
    case 1:
      return Jg(arguments[0]);
    case 3:
      return Wg(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function Jg(a) {
  return Wg(a, 0, null);
}
function Wg(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new Vg(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (v(d) && (d = d.hc(), v(d))) {
          return new Vg(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new Vg(null, a, b, c, null);
  }
}
function Xg(a, b, c, d, e) {
  this.l = a;
  this.vb = b;
  this.o = c;
  this.F = d;
  this.i = e;
  this.g = 32374860;
  this.r = 0;
}
g = Xg.prototype;
g.toString = function() {
  return Fc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.l;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = cd(this);
};
g.q = function(a, b) {
  return td(this, b);
};
g.Q = function() {
  return vd(Vc, this.l);
};
g.T = function(a, b) {
  return wd(b, this);
};
g.U = function(a, b, c) {
  return yd(b, c, this);
};
g.S = function() {
  return F(this.F);
};
g.W = function() {
  var a = this.vb, b = this.o, c = H(this.F);
  return Yg ? Yg(null, a, b, c) : Sg.call(null, null, a, b, c);
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new Xg(b, this.vb, this.o, this.F, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
Xg.prototype[ob] = function() {
  return ad(this);
};
function Sg() {
  switch(arguments.length) {
    case 1:
      return Rg(arguments[0]);
    case 4:
      return Yg(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function Rg(a) {
  return Yg(null, a, 0, null);
}
function Yg(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (v(e) && (e = e.hc(), v(e))) {
          return new Xg(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new Xg(a, b, c, d, null);
  }
}
function Zg(a, b, c, d, e, f) {
  this.l = a;
  this.h = b;
  this.root = c;
  this.ta = d;
  this.Ca = e;
  this.i = f;
  this.g = 16123663;
  this.r = 8196;
}
g = Zg.prototype;
g.toString = function() {
  return Fc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.keys = function() {
  return ad(wg.b ? wg.b(this) : wg.call(null, this));
};
g.entries = function() {
  return qg(D(this));
};
g.values = function() {
  return ad(xg.b ? xg.b(this) : xg.call(null, this));
};
g.has = function(a) {
  return Zd(this, a);
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
        Td(b) ? (c = tc(b), b = vc(b), h = c, d = M(c), c = h) : (c = F(b), h = N(c, 0), c = f = N(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.w = function(a, b) {
  return Ib.d(this, b, null);
};
g.u = function(a, b, c) {
  return null == b ? this.ta ? this.Ca : c : null == this.root ? c : this.root.ub(0, Oc(b), b, c);
};
g.C = function() {
  return this.l;
};
g.I = function() {
  return this.h;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ed(this);
};
g.q = function(a, b) {
  return og(this, b);
};
g.Jb = function() {
  return new $g({}, this.root, this.h, this.ta, this.Ca);
};
g.Q = function() {
  return $b(Ag, this.l);
};
g.Aa = function(a, b) {
  if (null == b) {
    return this.ta ? new Zg(this.l, this.h - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.ic(0, Oc(b), b);
  return c === this.root ? this : new Zg(this.l, this.h - 1, c, this.ta, this.Ca, null);
};
g.pa = function(a, b, c) {
  if (null == b) {
    return this.ta && c === this.Ca ? this : new Zg(this.l, this.ta ? this.h : this.h + 1, this.root, !0, c, null);
  }
  a = new Dg;
  b = (null == this.root ? Lg : this.root).Qa(0, Oc(b), b, c, a);
  return b === this.root ? this : new Zg(this.l, a.n ? this.h + 1 : this.h, b, this.ta, this.Ca, null);
};
g.qc = function(a, b) {
  return null == b ? this.ta : null == this.root ? !1 : this.root.ub(0, Oc(b), b, Wd) !== Wd;
};
g.H = function() {
  if (0 < this.h) {
    var a = null != this.root ? this.root.hc() : null;
    return this.ta ? J(new T(null, 2, 5, U, [null, this.Ca], null), a) : a;
  }
  return null;
};
g.D = function(a, b) {
  return new Zg(b, this.h, this.root, this.ta, this.Ca, this.i);
};
g.G = function(a, b) {
  if (Sd(b)) {
    return Kb(this, C.a(b, 0), C.a(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (Sd(e)) {
      c = Kb(c, C.a(e, 0), C.a(e, 1)), d = H(d);
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
  return this.call.apply(this, [this].concat(pb(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
var Ag = new Zg(null, 0, null, !1, null, gd);
function Gd(a, b) {
  for (var c = a.length, d = 0, e = nc(Ag);;) {
    if (d < c) {
      var f = d + 1, e = e.dc(null, a[d], b[d]), d = f
    } else {
      return pc(e);
    }
  }
}
Zg.prototype[ob] = function() {
  return ad(this);
};
function $g(a, b, c, d, e) {
  this.P = a;
  this.root = b;
  this.count = c;
  this.ta = d;
  this.Ca = e;
  this.g = 258;
  this.r = 56;
}
function ah(a, b) {
  if (a.P) {
    if (b ? b.g & 2048 || b.Kd || (b.g ? 0 : x(Nb, b)) : x(Nb, b)) {
      return bh(a, ke.b ? ke.b(b) : ke.call(null, b), le.b ? le.b(b) : le.call(null, b));
    }
    for (var c = D(b), d = a;;) {
      var e = F(c);
      if (v(e)) {
        var f = e, c = H(c), d = bh(d, function() {
          var a = f;
          return ke.b ? ke.b(a) : ke.call(null, a);
        }(), function() {
          var a = f;
          return le.b ? le.b(a) : le.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function bh(a, b, c) {
  if (a.P) {
    if (null == b) {
      a.Ca !== c && (a.Ca = c), a.ta || (a.count += 1, a.ta = !0);
    } else {
      var d = new Dg;
      b = (null == a.root ? Lg : a.root).Ra(a.P, 0, Oc(b), b, c, d);
      b !== a.root && (a.root = b);
      d.n && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
g = $g.prototype;
g.I = function() {
  if (this.P) {
    return this.count;
  }
  throw Error("count after persistent!");
};
g.w = function(a, b) {
  return null == b ? this.ta ? this.Ca : null : null == this.root ? null : this.root.ub(0, Oc(b), b);
};
g.u = function(a, b, c) {
  return null == b ? this.ta ? this.Ca : c : null == this.root ? c : this.root.ub(0, Oc(b), b, c);
};
g.zb = function(a, b) {
  return ah(this, b);
};
g.Ab = function() {
  var a;
  if (this.P) {
    this.P = null, a = new Zg(null, this.count, this.root, this.ta, this.Ca, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.dc = function(a, b, c) {
  return bh(this, b, c);
};
function ch(a, b, c) {
  for (var d = b;;) {
    if (null != a) {
      b = c ? a.left : a.right, d = Ad.a(d, a), a = b;
    } else {
      return d;
    }
  }
}
function dh(a, b, c, d, e) {
  this.l = a;
  this.stack = b;
  this.lc = c;
  this.h = d;
  this.i = e;
  this.g = 32374862;
  this.r = 0;
}
g = dh.prototype;
g.toString = function() {
  return Fc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.l;
};
g.I = function() {
  return 0 > this.h ? M(H(this)) + 1 : this.h;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = cd(this);
};
g.q = function(a, b) {
  return td(this, b);
};
g.Q = function() {
  return vd(Vc, this.l);
};
g.T = function(a, b) {
  return wd(b, this);
};
g.U = function(a, b, c) {
  return yd(b, c, this);
};
g.S = function() {
  return Md(this.stack);
};
g.W = function() {
  var a = F(this.stack), a = ch(this.lc ? a.right : a.left, H(this.stack), this.lc);
  return null != a ? new dh(null, a, this.lc, this.h - 1, null) : Vc;
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new dh(b, this.stack, this.lc, this.h, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
dh.prototype[ob] = function() {
  return ad(this);
};
function eh(a, b, c) {
  return new dh(null, ch(a, null, b), b, c, null);
}
function fh(a, b, c, d) {
  return c instanceof V ? c.left instanceof V ? new V(c.key, c.n, c.left.lb(), new gh(a, b, c.right, d, null), null) : c.right instanceof V ? new V(c.right.key, c.right.n, new gh(c.key, c.n, c.left, c.right.left, null), new gh(a, b, c.right.right, d, null), null) : new gh(a, b, c, d, null) : new gh(a, b, c, d, null);
}
function hh(a, b, c, d) {
  return d instanceof V ? d.right instanceof V ? new V(d.key, d.n, new gh(a, b, c, d.left, null), d.right.lb(), null) : d.left instanceof V ? new V(d.left.key, d.left.n, new gh(a, b, c, d.left.left, null), new gh(d.key, d.n, d.left.right, d.right, null), null) : new gh(a, b, c, d, null) : new gh(a, b, c, d, null);
}
function ih(a, b, c, d) {
  if (c instanceof V) {
    return new V(a, b, c.lb(), d, null);
  }
  if (d instanceof gh) {
    return hh(a, b, c, d.kc());
  }
  if (d instanceof V && d.left instanceof gh) {
    return new V(d.left.key, d.left.n, new gh(a, b, c, d.left.left, null), hh(d.key, d.n, d.left.right, d.right.kc()), null);
  }
  throw Error("red-black tree invariant violation");
}
function gh(a, b, c, d, e) {
  this.key = a;
  this.n = b;
  this.left = c;
  this.right = d;
  this.i = e;
  this.g = 32402207;
  this.r = 0;
}
g = gh.prototype;
g.Vc = function(a) {
  return a.Xc(this);
};
g.kc = function() {
  return new V(this.key, this.n, this.left, this.right, null);
};
g.lb = function() {
  return this;
};
g.Uc = function(a) {
  return a.Wc(this);
};
g.replace = function(a, b, c, d) {
  return new gh(a, b, c, d, null);
};
g.Wc = function(a) {
  return new gh(a.key, a.n, this, a.right, null);
};
g.Xc = function(a) {
  return new gh(a.key, a.n, a.left, this, null);
};
g.w = function(a, b) {
  return C.d(this, b, null);
};
g.u = function(a, b, c) {
  return C.d(this, b, c);
};
g.O = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.n : null;
};
g.sa = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.n : c;
};
g.Bb = function(a, b, c) {
  return(new T(null, 2, 5, U, [this.key, this.n], null)).Bb(null, b, c);
};
g.C = function() {
  return null;
};
g.I = function() {
  return 2;
};
g.Zb = function() {
  return this.key;
};
g.$b = function() {
  return this.n;
};
g.rb = function() {
  return this.n;
};
g.sb = function() {
  return new T(null, 1, 5, U, [this.key], null);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = cd(this);
};
g.q = function(a, b) {
  return td(this, b);
};
g.Q = function() {
  return Bd;
};
g.T = function(a, b) {
  return kd(this, b);
};
g.U = function(a, b, c) {
  return ld(this, b, c);
};
g.pa = function(a, b, c) {
  return O.d(new T(null, 2, 5, U, [this.key, this.n], null), b, c);
};
g.H = function() {
  return Bb(Bb(Vc, this.n), this.key);
};
g.D = function(a, b) {
  return vd(new T(null, 2, 5, U, [this.key, this.n], null), b);
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
  return this.call.apply(this, [this].concat(pb(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
gh.prototype[ob] = function() {
  return ad(this);
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
g.Vc = function(a) {
  return new V(this.key, this.n, this.left, a, null);
};
g.kc = function() {
  throw Error("red-black tree invariant violation");
};
g.lb = function() {
  return new gh(this.key, this.n, this.left, this.right, null);
};
g.Uc = function(a) {
  return new V(this.key, this.n, a, this.right, null);
};
g.replace = function(a, b, c, d) {
  return new V(a, b, c, d, null);
};
g.Wc = function(a) {
  return this.left instanceof V ? new V(this.key, this.n, this.left.lb(), new gh(a.key, a.n, this.right, a.right, null), null) : this.right instanceof V ? new V(this.right.key, this.right.n, new gh(this.key, this.n, this.left, this.right.left, null), new gh(a.key, a.n, this.right.right, a.right, null), null) : new gh(a.key, a.n, this, a.right, null);
};
g.Xc = function(a) {
  return this.right instanceof V ? new V(this.key, this.n, new gh(a.key, a.n, a.left, this.left, null), this.right.lb(), null) : this.left instanceof V ? new V(this.left.key, this.left.n, new gh(a.key, a.n, a.left, this.left.left, null), new gh(this.key, this.n, this.left.right, this.right, null), null) : new gh(a.key, a.n, a.left, this, null);
};
g.w = function(a, b) {
  return C.d(this, b, null);
};
g.u = function(a, b, c) {
  return C.d(this, b, c);
};
g.O = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.n : null;
};
g.sa = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.n : c;
};
g.Bb = function(a, b, c) {
  return(new T(null, 2, 5, U, [this.key, this.n], null)).Bb(null, b, c);
};
g.C = function() {
  return null;
};
g.I = function() {
  return 2;
};
g.Zb = function() {
  return this.key;
};
g.$b = function() {
  return this.n;
};
g.rb = function() {
  return this.n;
};
g.sb = function() {
  return new T(null, 1, 5, U, [this.key], null);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = cd(this);
};
g.q = function(a, b) {
  return td(this, b);
};
g.Q = function() {
  return Bd;
};
g.T = function(a, b) {
  return kd(this, b);
};
g.U = function(a, b, c) {
  return ld(this, b, c);
};
g.pa = function(a, b, c) {
  return O.d(new T(null, 2, 5, U, [this.key, this.n], null), b, c);
};
g.H = function() {
  return Bb(Bb(Vc, this.n), this.key);
};
g.D = function(a, b) {
  return vd(new T(null, 2, 5, U, [this.key, this.n], null), b);
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
  return this.call.apply(this, [this].concat(pb(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
V.prototype[ob] = function() {
  return ad(this);
};
var jh = function jh(b, c, d, e, f) {
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
    return b = jh(b, c.left, d, e, f), null != b ? c.Uc(b) : null;
  }
  b = jh(b, c.right, d, e, f);
  return null != b ? c.Vc(b) : null;
}, kh = function kh(b, c) {
  if (null == b) {
    return c;
  }
  if (null == c) {
    return b;
  }
  if (b instanceof V) {
    if (c instanceof V) {
      var d = kh(b.right, c.left);
      return d instanceof V ? new V(d.key, d.n, new V(b.key, b.n, b.left, d.left, null), new V(c.key, c.n, d.right, c.right, null), null) : new V(b.key, b.n, b.left, new V(c.key, c.n, d, c.right, null), null);
    }
    return new V(b.key, b.n, b.left, kh(b.right, c), null);
  }
  if (c instanceof V) {
    return new V(c.key, c.n, kh(b, c.left), c.right, null);
  }
  d = kh(b.right, c.left);
  return d instanceof V ? new V(d.key, d.n, new gh(b.key, b.n, b.left, d.left, null), new gh(c.key, c.n, d.right, c.right, null), null) : ih(b.key, b.n, b.left, new gh(c.key, c.n, d, c.right, null));
}, lh = function lh(b, c, d, e) {
  if (null != c) {
    var f;
    f = c.key;
    f = b.a ? b.a(d, f) : b.call(null, d, f);
    if (0 === f) {
      return e[0] = c, kh(c.left, c.right);
    }
    if (0 > f) {
      return b = lh(b, c.left, d, e), null != b || null != e[0] ? c.left instanceof gh ? ih(c.key, c.n, b, c.right) : new V(c.key, c.n, b, c.right, null) : null;
    }
    b = lh(b, c.right, d, e);
    if (null != b || null != e[0]) {
      if (c.right instanceof gh) {
        if (e = c.key, d = c.n, c = c.left, b instanceof V) {
          c = new V(e, d, c, b.lb(), null);
        } else {
          if (c instanceof gh) {
            c = fh(e, d, c.kc(), b);
          } else {
            if (c instanceof V && c.right instanceof gh) {
              c = new V(c.right.key, c.right.n, fh(c.key, c.n, c.left.kc(), c.right.left), new gh(e, d, c.right.right, b, null), null);
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
}, mh = function mh(b, c, d, e) {
  var f = c.key, h = b.a ? b.a(d, f) : b.call(null, d, f);
  return 0 === h ? c.replace(f, e, c.left, c.right) : 0 > h ? c.replace(f, c.n, mh(b, c.left, d, e), c.right) : c.replace(f, c.n, c.left, mh(b, c.right, d, e));
};
function nh(a, b, c, d, e) {
  this.Ia = a;
  this.ua = b;
  this.h = c;
  this.l = d;
  this.i = e;
  this.g = 418776847;
  this.r = 8192;
}
g = nh.prototype;
g.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.O(null, e), h = N(f, 0), f = N(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = D(b)) {
        Td(b) ? (c = tc(b), b = vc(b), h = c, d = M(c), c = h) : (c = F(b), h = N(c, 0), c = f = N(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = H(b), c = null, d = 0), e = 0;
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
  return qg(D(this));
};
g.toString = function() {
  return Fc(this);
};
g.keys = function() {
  return ad(wg.b ? wg.b(this) : wg.call(null, this));
};
g.values = function() {
  return ad(xg.b ? xg.b(this) : xg.call(null, this));
};
g.equiv = function(a) {
  return this.q(null, a);
};
function oh(a, b) {
  for (var c = a.ua;;) {
    if (null != c) {
      var d;
      d = c.key;
      d = a.Ia.a ? a.Ia.a(b, d) : a.Ia.call(null, b, d);
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
  return Zd(this, a);
};
g.w = function(a, b) {
  return Ib.d(this, b, null);
};
g.u = function(a, b, c) {
  a = oh(this, b);
  return null != a ? a.n : c;
};
g.C = function() {
  return this.l;
};
g.I = function() {
  return this.h;
};
g.Kb = function() {
  return 0 < this.h ? eh(this.ua, !1, this.h) : null;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ed(this);
};
g.q = function(a, b) {
  return og(this, b);
};
g.Q = function() {
  return new nh(this.Ia, null, 0, this.l, 0);
};
g.Aa = function(a, b) {
  var c = [null], d = lh(this.Ia, this.ua, b, c);
  return null == d ? null == Dd(c, 0) ? this : new nh(this.Ia, null, 0, this.l, null) : new nh(this.Ia, d.lb(), this.h - 1, this.l, null);
};
g.pa = function(a, b, c) {
  a = [null];
  var d = jh(this.Ia, this.ua, b, c, a);
  return null == d ? (a = Dd(a, 0), Wc.a(c, a.n) ? this : new nh(this.Ia, mh(this.Ia, this.ua, b, c), this.h, this.l, null)) : new nh(this.Ia, d.lb(), this.h + 1, this.l, null);
};
g.qc = function(a, b) {
  return null != oh(this, b);
};
g.H = function() {
  return 0 < this.h ? eh(this.ua, !0, this.h) : null;
};
g.D = function(a, b) {
  return new nh(this.Ia, this.ua, this.h, b, this.i);
};
g.G = function(a, b) {
  if (Sd(b)) {
    return Kb(this, C.a(b, 0), C.a(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (Sd(e)) {
      c = Kb(c, C.a(e, 0), C.a(e, 1)), d = H(d);
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
  return this.call.apply(this, [this].concat(pb(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
var ph = new nh($d, null, 0, null, gd);
nh.prototype[ob] = function() {
  return ad(this);
};
var of = function of() {
  return of.k(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
};
of.k = function(a) {
  for (var b = D(a), c = nc(Ag);;) {
    if (b) {
      a = H(H(b));
      var d = F(b), b = F(H(b)), c = qc(c, d, b), b = a;
    } else {
      return pc(c);
    }
  }
};
of.v = 0;
of.t = function(a) {
  return of.k(D(a));
};
function qh(a, b) {
  this.qa = a;
  this.ra = b;
  this.g = 32374988;
  this.r = 0;
}
g = qh.prototype;
g.toString = function() {
  return Fc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.ra;
};
g.ka = function() {
  var a = this.qa, a = (a ? a.g & 128 || a.sc || (a.g ? 0 : x(Gb, a)) : x(Gb, a)) ? this.qa.ka(null) : H(this.qa);
  return null == a ? null : new qh(a, this.ra);
};
g.B = function() {
  return cd(this);
};
g.q = function(a, b) {
  return td(this, b);
};
g.Q = function() {
  return vd(Vc, this.ra);
};
g.T = function(a, b) {
  return wd(b, this);
};
g.U = function(a, b, c) {
  return yd(b, c, this);
};
g.S = function() {
  return this.qa.S(null).Zb(null);
};
g.W = function() {
  var a = this.qa, a = (a ? a.g & 128 || a.sc || (a.g ? 0 : x(Gb, a)) : x(Gb, a)) ? this.qa.ka(null) : H(this.qa);
  return null != a ? new qh(a, this.ra) : Vc;
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new qh(this.qa, b);
};
g.G = function(a, b) {
  return J(b, this);
};
qh.prototype[ob] = function() {
  return ad(this);
};
function wg(a) {
  return(a = D(a)) ? new qh(a, null) : null;
}
function ke(a) {
  return Ob(a);
}
function rh(a, b) {
  this.qa = a;
  this.ra = b;
  this.g = 32374988;
  this.r = 0;
}
g = rh.prototype;
g.toString = function() {
  return Fc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.ra;
};
g.ka = function() {
  var a = this.qa, a = (a ? a.g & 128 || a.sc || (a.g ? 0 : x(Gb, a)) : x(Gb, a)) ? this.qa.ka(null) : H(this.qa);
  return null == a ? null : new rh(a, this.ra);
};
g.B = function() {
  return cd(this);
};
g.q = function(a, b) {
  return td(this, b);
};
g.Q = function() {
  return vd(Vc, this.ra);
};
g.T = function(a, b) {
  return wd(b, this);
};
g.U = function(a, b, c) {
  return yd(b, c, this);
};
g.S = function() {
  return this.qa.S(null).$b(null);
};
g.W = function() {
  var a = this.qa, a = (a ? a.g & 128 || a.sc || (a.g ? 0 : x(Gb, a)) : x(Gb, a)) ? this.qa.ka(null) : H(this.qa);
  return null != a ? new rh(a, this.ra) : Vc;
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new rh(this.qa, b);
};
g.G = function(a, b) {
  return J(b, this);
};
rh.prototype[ob] = function() {
  return ad(this);
};
function xg(a) {
  return(a = D(a)) ? new rh(a, null) : null;
}
function le(a) {
  return Pb(a);
}
var sh = function sh() {
  return sh.k(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
};
sh.k = function(a) {
  return v(bf(ce, a)) ? be(function(a, c) {
    return Ad.a(v(a) ? a : Re, c);
  }, a) : null;
};
sh.v = 0;
sh.t = function(a) {
  return sh.k(D(a));
};
var th = function th() {
  return th.k(arguments[0], 1 < arguments.length ? new E(Array.prototype.slice.call(arguments, 1), 0) : null);
};
th.k = function(a, b) {
  return v(bf(ce, b)) ? be(function(a) {
    return function(b, e) {
      return tb(a, v(b) ? b : Re, D(e));
    };
  }(function(b, d) {
    var e = F(d), f = F(H(d));
    return Zd(b, e) ? O.d(b, e, function() {
      var d = Ed(b, e);
      return a.a ? a.a(d, f) : a.call(null, d, f);
    }()) : O.d(b, e, f);
  }), b) : null;
};
th.v = 1;
th.t = function(a) {
  var b = F(a);
  a = H(a);
  return th.k(b, a);
};
function uh(a, b, c) {
  this.l = a;
  this.Eb = b;
  this.i = c;
  this.g = 15077647;
  this.r = 8196;
}
g = uh.prototype;
g.toString = function() {
  return Fc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.keys = function() {
  return ad(D(this));
};
g.entries = function() {
  return sg(D(this));
};
g.values = function() {
  return ad(D(this));
};
g.has = function(a) {
  return Zd(this, a);
};
g.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.O(null, e), h = N(f, 0), f = N(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = D(b)) {
        Td(b) ? (c = tc(b), b = vc(b), h = c, d = M(c), c = h) : (c = F(b), h = N(c, 0), c = f = N(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.w = function(a, b) {
  return Ib.d(this, b, null);
};
g.u = function(a, b, c) {
  return Jb(this.Eb, b) ? b : c;
};
g.C = function() {
  return this.l;
};
g.I = function() {
  return yb(this.Eb);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ed(this);
};
g.q = function(a, b) {
  return Pd(b) && M(this) === M(b) && af(function(a) {
    return function(b) {
      return Zd(a, b);
    };
  }(this), b);
};
g.Jb = function() {
  return new vh(nc(this.Eb));
};
g.Q = function() {
  return vd(wh, this.l);
};
g.Hc = function(a, b) {
  return new uh(this.l, Mb(this.Eb, b), null);
};
g.H = function() {
  return wg(this.Eb);
};
g.D = function(a, b) {
  return new uh(b, this.Eb, this.i);
};
g.G = function(a, b) {
  return new uh(this.l, O.d(this.Eb, b, null), null);
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
  return this.call.apply(this, [this].concat(pb(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
var wh = new uh(null, Re, gd);
function xh(a) {
  var b = a.length;
  if (b <= zg) {
    for (var c = 0, d = nc(Re);;) {
      if (c < b) {
        var e = c + 1, d = qc(d, a[c], null), c = e
      } else {
        return new uh(null, pc(d), null);
      }
    }
  } else {
    for (c = 0, d = nc(wh);;) {
      if (c < b) {
        e = c + 1, d = oc(d, a[c]), c = e;
      } else {
        return pc(d);
      }
    }
  }
}
uh.prototype[ob] = function() {
  return ad(this);
};
function vh(a) {
  this.ob = a;
  this.r = 136;
  this.g = 259;
}
g = vh.prototype;
g.zb = function(a, b) {
  this.ob = qc(this.ob, b, null);
  return this;
};
g.Ab = function() {
  return new uh(null, pc(this.ob), null);
};
g.I = function() {
  return M(this.ob);
};
g.w = function(a, b) {
  return Ib.d(this, b, null);
};
g.u = function(a, b, c) {
  return Ib.d(this.ob, b, Wd) === Wd ? c : b;
};
g.call = function() {
  function a(a, b, c) {
    return Ib.d(this.ob, b, Wd) === Wd ? c : b;
  }
  function b(a, b) {
    return Ib.d(this.ob, b, Wd) === Wd ? null : b;
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
  return this.call.apply(this, [this].concat(pb(b)));
};
g.b = function(a) {
  return Ib.d(this.ob, a, Wd) === Wd ? null : a;
};
g.a = function(a, b) {
  return Ib.d(this.ob, a, Wd) === Wd ? b : a;
};
function yh(a, b, c) {
  this.l = a;
  this.pb = b;
  this.i = c;
  this.g = 417730831;
  this.r = 8192;
}
g = yh.prototype;
g.toString = function() {
  return Fc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.keys = function() {
  return ad(D(this));
};
g.entries = function() {
  return sg(D(this));
};
g.values = function() {
  return ad(D(this));
};
g.has = function(a) {
  return Zd(this, a);
};
g.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.O(null, e), h = N(f, 0), f = N(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = D(b)) {
        Td(b) ? (c = tc(b), b = vc(b), h = c, d = M(c), c = h) : (c = F(b), h = N(c, 0), c = f = N(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.w = function(a, b) {
  return Ib.d(this, b, null);
};
g.u = function(a, b, c) {
  a = oh(this.pb, b);
  return null != a ? a.key : c;
};
g.C = function() {
  return this.l;
};
g.I = function() {
  return M(this.pb);
};
g.Kb = function() {
  return 0 < M(this.pb) ? S.a(ke, ic(this.pb)) : null;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ed(this);
};
g.q = function(a, b) {
  return Pd(b) && M(this) === M(b) && af(function(a) {
    return function(b) {
      return Zd(a, b);
    };
  }(this), b);
};
g.Q = function() {
  return new yh(this.l, zb(this.pb), 0);
};
g.Hc = function(a, b) {
  return new yh(this.l, Hd.a(this.pb, b), null);
};
g.H = function() {
  return wg(this.pb);
};
g.D = function(a, b) {
  return new yh(b, this.pb, this.i);
};
g.G = function(a, b) {
  return new yh(this.l, O.d(this.pb, b, null), null);
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
  return this.call.apply(this, [this].concat(pb(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
var zh = new yh(null, ph, gd);
yh.prototype[ob] = function() {
  return ad(this);
};
function Ah(a) {
  a = D(a);
  if (null == a) {
    return wh;
  }
  if (a instanceof E && 0 === a.o) {
    a = a.c;
    a: {
      for (var b = 0, c = nc(wh);;) {
        if (b < a.length) {
          var d = b + 1, c = c.zb(null, a[b]), b = d
        } else {
          break a;
        }
      }
    }
    return c.Ab(null);
  }
  for (d = nc(wh);;) {
    if (null != a) {
      b = a.ka(null), d = d.zb(null, a.S(null)), a = b;
    } else {
      return d.Ab(null);
    }
  }
}
function Bh() {
  return tb(Bb, zh, 0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
}
function ue(a) {
  if (a && (a.r & 4096 || a.Md)) {
    return a.ac(null);
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([B("Doesn't support name: "), B(a)].join(""));
}
function Ch(a, b) {
  for (var c = nc(Re), d = D(a), e = D(b);;) {
    if (d && e) {
      var f = F(d), h = F(e), c = qc(c, f, h), d = H(d), e = H(e)
    } else {
      return pc(c);
    }
  }
}
var Dh = function Dh() {
  switch(arguments.length) {
    case 2:
      return Dh.a(arguments[0], arguments[1]);
    case 3:
      return Dh.d(arguments[0], arguments[1], arguments[2]);
    default:
      return Dh.k(arguments[0], arguments[1], arguments[2], new E(Array.prototype.slice.call(arguments, 3), 0));
  }
};
Dh.a = function(a, b) {
  return b;
};
Dh.d = function(a, b, c) {
  return(a.b ? a.b(b) : a.call(null, b)) > (a.b ? a.b(c) : a.call(null, c)) ? b : c;
};
Dh.k = function(a, b, c, d) {
  return tb(function(b, c) {
    return Dh.d(a, b, c);
  }, Dh.d(a, b, c), d);
};
Dh.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  var d = H(c), c = F(d), d = H(d);
  return Dh.k(b, a, c, d);
};
Dh.v = 3;
function Eh(a, b) {
  return new ve(null, function() {
    var c = D(b);
    if (c) {
      var d;
      d = F(c);
      d = a.b ? a.b(d) : a.call(null, d);
      c = v(d) ? J(F(c), Eh(a, Uc(c))) : null;
    } else {
      c = null;
    }
    return c;
  }, null, null);
}
function Fh(a, b, c) {
  this.o = a;
  this.end = b;
  this.step = c;
}
Fh.prototype.Ya = function() {
  return 0 < this.step ? this.o < this.end : this.o > this.end;
};
Fh.prototype.next = function() {
  var a = this.o;
  this.o += this.step;
  return a;
};
function Gh(a, b, c, d, e) {
  this.l = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.i = e;
  this.g = 32375006;
  this.r = 8192;
}
g = Gh.prototype;
g.toString = function() {
  return Fc(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.O = function(a, b) {
  if (b < yb(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
g.sa = function(a, b, c) {
  return b < yb(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
g.rc = !0;
g.Yb = function() {
  return new Fh(this.start, this.end, this.step);
};
g.C = function() {
  return this.l;
};
g.ka = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Gh(this.l, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new Gh(this.l, this.start + this.step, this.end, this.step, null) : null;
};
g.I = function() {
  if (lb(fc(this))) {
    return 0;
  }
  var a = (this.end - this.start) / this.step;
  return Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = cd(this);
};
g.q = function(a, b) {
  return td(this, b);
};
g.Q = function() {
  return vd(Vc, this.l);
};
g.T = function(a, b) {
  return kd(this, b);
};
g.U = function(a, b, c) {
  for (a = this.start;;) {
    if (0 < this.step ? a < this.end : a > this.end) {
      var d = a;
      c = b.a ? b.a(c, d) : b.call(null, c, d);
      if (jd(c)) {
        return b = c, I.b ? I.b(b) : I.call(null, b);
      }
      a += this.step;
    } else {
      return c;
    }
  }
};
g.S = function() {
  return null == fc(this) ? null : this.start;
};
g.W = function() {
  return null != fc(this) ? new Gh(this.l, this.start + this.step, this.end, this.step, null) : Vc;
};
g.H = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
g.D = function(a, b) {
  return new Gh(b, this.start, this.end, this.step, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
Gh.prototype[ob] = function() {
  return ad(this);
};
function Hh(a, b) {
  if ("string" === typeof b) {
    var c = a.exec(b);
    return Wc.a(F(c), b) ? 1 === M(c) ? F(c) : $f(c) : null;
  }
  throw new TypeError("re-matches must match against a string.");
}
function Ih(a) {
  if (a instanceof RegExp) {
    return a;
  }
  var b;
  var c = /^\(\?([idmsux]*)\)/;
  if ("string" === typeof a) {
    c = c.exec(a), b = null == c ? null : 1 === M(c) ? F(c) : $f(c);
  } else {
    throw new TypeError("re-find must match against a string.");
  }
  c = N(b, 0);
  b = N(b, 1);
  c = M(c);
  return new RegExp(a.substring(c), v(b) ? b : "");
}
function Jh(a, b, c, d, e, f, h) {
  var k = Va;
  Va = null == Va ? null : Va - 1;
  try {
    if (null != Va && 0 > Va) {
      return jc(a, "#");
    }
    jc(a, c);
    if (0 === hb.b(f)) {
      D(h) && jc(a, function() {
        var a = Kh.b(f);
        return v(a) ? a : "...";
      }());
    } else {
      if (D(h)) {
        var l = F(h);
        b.d ? b.d(l, a, f) : b.call(null, l, a, f);
      }
      for (var m = H(h), p = hb.b(f) - 1;;) {
        if (!m || null != p && 0 === p) {
          D(m) && 0 === p && (jc(a, d), jc(a, function() {
            var a = Kh.b(f);
            return v(a) ? a : "...";
          }()));
          break;
        } else {
          jc(a, d);
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
    return jc(a, e);
  } finally {
    Va = k;
  }
}
function Lh(a, b) {
  for (var c = D(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.O(null, f);
      jc(a, h);
      f += 1;
    } else {
      if (c = D(c)) {
        d = c, Td(d) ? (c = tc(d), e = vc(d), d = c, h = M(c), c = e, e = h) : (h = F(d), jc(a, h), c = H(d), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
var Mh = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Nh(a) {
  return[B('"'), B(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Mh[a];
  })), B('"')].join("");
}
function Oh(a, b, c) {
  if (null == a) {
    return jc(b, "nil");
  }
  if (void 0 === a) {
    return jc(b, "#\x3cundefined\x3e");
  }
  if (v(function() {
    var b = Ed(c, fb);
    return v(b) ? (b = a ? a.g & 131072 || a.Ld ? !0 : a.g ? !1 : x(Xb, a) : x(Xb, a)) ? Ld(a) : b : b;
  }())) {
    jc(b, "^");
    var d = Ld(a);
    W.d ? W.d(d, b, c) : W.call(null, d, b, c);
    jc(b, " ");
  }
  return null == a ? jc(b, "nil") : a.Pb ? a.fc(a, b, c) : a && (a.g & 2147483648 || a.N) ? a.A(null, b, c) : mb(a) === Boolean || "number" === typeof a ? jc(b, "" + B(a)) : null != a && a.constructor === Object ? (jc(b, "#js "), d = S.a(function(b) {
    return new T(null, 2, 5, U, [te.b(b), a[b]], null);
  }, Ud(a)), Ph.s ? Ph.s(d, W, b, c) : Ph.call(null, d, W, b, c)) : jb(a) ? Jh(b, W, "#js [", " ", "]", c, a) : v(ea(a)) ? v(eb.b(c)) ? jc(b, Nh(a)) : jc(b, a) : Id(a) ? Lh(b, K(["#\x3c", "" + B(a), "\x3e"], 0)) : a instanceof Date ? (d = function(a, b) {
    for (var c = "" + B(a);;) {
      if (M(c) < b) {
        c = [B("0"), B(c)].join("");
      } else {
        return c;
      }
    }
  }, Lh(b, K(['#inst "', "" + B(a.getUTCFullYear()), "-", d(a.getUTCMonth() + 1, 2), "-", d(a.getUTCDate(), 2), "T", d(a.getUTCHours(), 2), ":", d(a.getUTCMinutes(), 2), ":", d(a.getUTCSeconds(), 2), ".", d(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : v(a instanceof RegExp) ? Lh(b, K(['#"', a.source, '"'], 0)) : (a ? a.g & 2147483648 || a.N || (a.g ? 0 : x(kc, a)) : x(kc, a)) ? lc(a, b, c) : Lh(b, K(["#\x3c", "" + B(a), "\x3e"], 0));
}
function W(a, b, c) {
  var d = Qh.b(c);
  return v(d) ? (c = O.d(c, Rh, Oh), d.d ? d.d(a, b, c) : d.call(null, a, b, c)) : Oh(a, b, c);
}
function rf() {
  return Sh(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
}
function Sh(a) {
  var b = Za();
  if (Od(a)) {
    b = "";
  } else {
    var c = B, d = new La;
    a: {
      var e = new Ec(d);
      W(F(a), e, b);
      a = D(H(a));
      for (var f = null, h = 0, k = 0;;) {
        if (k < h) {
          var l = f.O(null, k);
          jc(e, " ");
          W(l, e, b);
          k += 1;
        } else {
          if (a = D(a)) {
            f = a, Td(f) ? (a = tc(f), h = vc(f), f = a, l = M(a), a = h, h = l) : (l = F(f), jc(e, " "), W(l, e, b), a = H(f), f = null, h = 0), k = 0;
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
function Ph(a, b, c, d) {
  return Jh(c, function(a, c, d) {
    var k = Ob(a);
    b.d ? b.d(k, c, d) : b.call(null, k, c, d);
    jc(c, " ");
    a = Pb(a);
    return b.d ? b.d(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, D(a));
}
sf.prototype.N = !0;
sf.prototype.A = function(a, b, c) {
  jc(b, "#\x3cVolatile: ");
  W(this.state, b, c);
  return jc(b, "\x3e");
};
E.prototype.N = !0;
E.prototype.A = function(a, b, c) {
  return Jh(b, W, "(", " ", ")", c, this);
};
ve.prototype.N = !0;
ve.prototype.A = function(a, b, c) {
  return Jh(b, W, "(", " ", ")", c, this);
};
dh.prototype.N = !0;
dh.prototype.A = function(a, b, c) {
  return Jh(b, W, "(", " ", ")", c, this);
};
Vg.prototype.N = !0;
Vg.prototype.A = function(a, b, c) {
  return Jh(b, W, "(", " ", ")", c, this);
};
gh.prototype.N = !0;
gh.prototype.A = function(a, b, c) {
  return Jh(b, W, "[", " ", "]", c, this);
};
ug.prototype.N = !0;
ug.prototype.A = function(a, b, c) {
  return Jh(b, W, "(", " ", ")", c, this);
};
yh.prototype.N = !0;
yh.prototype.A = function(a, b, c) {
  return Jh(b, W, "#{", " ", "}", c, this);
};
bg.prototype.N = !0;
bg.prototype.A = function(a, b, c) {
  return Jh(b, W, "(", " ", ")", c, this);
};
re.prototype.N = !0;
re.prototype.A = function(a, b, c) {
  return Jh(b, W, "(", " ", ")", c, this);
};
sd.prototype.N = !0;
sd.prototype.A = function(a, b, c) {
  return Jh(b, W, "(", " ", ")", c, this);
};
Zg.prototype.N = !0;
Zg.prototype.A = function(a, b, c) {
  return Ph(this, W, b, c);
};
Xg.prototype.N = !0;
Xg.prototype.A = function(a, b, c) {
  return Jh(b, W, "(", " ", ")", c, this);
};
fg.prototype.N = !0;
fg.prototype.A = function(a, b, c) {
  return Jh(b, W, "[", " ", "]", c, this);
};
nh.prototype.N = !0;
nh.prototype.A = function(a, b, c) {
  return Ph(this, W, b, c);
};
uh.prototype.N = !0;
uh.prototype.A = function(a, b, c) {
  return Jh(b, W, "#{", " ", "}", c, this);
};
ze.prototype.N = !0;
ze.prototype.A = function(a, b, c) {
  return Jh(b, W, "(", " ", ")", c, this);
};
lf.prototype.N = !0;
lf.prototype.A = function(a, b, c) {
  jc(b, "#\x3cAtom: ");
  W(this.state, b, c);
  return jc(b, "\x3e");
};
rh.prototype.N = !0;
rh.prototype.A = function(a, b, c) {
  return Jh(b, W, "(", " ", ")", c, this);
};
V.prototype.N = !0;
V.prototype.A = function(a, b, c) {
  return Jh(b, W, "[", " ", "]", c, this);
};
T.prototype.N = !0;
T.prototype.A = function(a, b, c) {
  return Jh(b, W, "[", " ", "]", c, this);
};
jg.prototype.N = !0;
jg.prototype.A = function(a, b, c) {
  return Jh(b, W, "(", " ", ")", c, this);
};
ne.prototype.N = !0;
ne.prototype.A = function(a, b) {
  return jc(b, "()");
};
$e.prototype.N = !0;
$e.prototype.A = function(a, b, c) {
  return Jh(b, W, "(", " ", ")", c, this);
};
kg.prototype.N = !0;
kg.prototype.A = function(a, b, c) {
  return Jh(b, W, "#queue [", " ", "]", c, D(this));
};
$a.prototype.N = !0;
$a.prototype.A = function(a, b, c) {
  return Ph(this, W, b, c);
};
Gh.prototype.N = !0;
Gh.prototype.A = function(a, b, c) {
  return Jh(b, W, "(", " ", ")", c, this);
};
qh.prototype.N = !0;
qh.prototype.A = function(a, b, c) {
  return Jh(b, W, "(", " ", ")", c, this);
};
me.prototype.N = !0;
me.prototype.A = function(a, b, c) {
  return Jh(b, W, "(", " ", ")", c, this);
};
Rc.prototype.Wb = !0;
Rc.prototype.Hb = function(a, b) {
  return Qc(this, b);
};
P.prototype.Wb = !0;
P.prototype.Hb = function(a, b) {
  return se(this, b);
};
fg.prototype.Wb = !0;
fg.prototype.Hb = function(a, b) {
  return ae(this, b);
};
T.prototype.Wb = !0;
T.prototype.Hb = function(a, b) {
  return ae(this, b);
};
var Th = null;
function Uh(a, b) {
  this.na = a;
  this.value = b;
  this.g = 32768;
  this.r = 1;
}
Uh.prototype.Ib = function() {
  v(this.na) && (this.value = this.na.m ? this.na.m() : this.na.call(null), this.na = null);
  return this.value;
};
function Vh(a) {
  return function(b, c) {
    var d = a.a ? a.a(b, c) : a.call(null, b, c);
    return jd(d) ? new id(d) : d;
  };
}
function Wh(a) {
  return function(b) {
    return function() {
      function c(a, c) {
        return tb(b, a, c);
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
  }(Vh(a));
}
var Xh = {}, Yh = function Yh(b) {
  if (b ? b.Hd : b) {
    return b.Hd(b);
  }
  var c;
  c = Yh[n(null == b ? null : b)];
  if (!c && (c = Yh._, !c)) {
    throw z("IEncodeJS.-clj-\x3ejs", b);
  }
  return c.call(null, b);
};
function Zh(a) {
  return(a ? v(v(null) ? null : a.Gd) || (a.Ob ? 0 : x(Xh, a)) : x(Xh, a)) ? Yh(a) : "string" === typeof a || "number" === typeof a || a instanceof P || a instanceof Rc ? $h.b ? $h.b(a) : $h.call(null, a) : Sh(K([a], 0));
}
var $h = function $h(b) {
  if (null == b) {
    return null;
  }
  if (b ? v(v(null) ? null : b.Gd) || (b.Ob ? 0 : x(Xh, b)) : x(Xh, b)) {
    return Yh(b);
  }
  if (b instanceof P) {
    return ue(b);
  }
  if (b instanceof Rc) {
    return "" + B(b);
  }
  if (Rd(b)) {
    var c = {};
    b = D(b);
    for (var d = null, e = 0, f = 0;;) {
      if (f < e) {
        var h = d.O(null, f), k = N(h, 0), h = N(h, 1);
        c[Zh(k)] = $h(h);
        f += 1;
      } else {
        if (b = D(b)) {
          Td(b) ? (e = tc(b), b = vc(b), d = e, e = M(e)) : (e = F(b), d = N(e, 0), e = N(e, 1), c[Zh(d)] = $h(e), b = H(b), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (null == b ? 0 : b ? b.g & 8 || b.oe || (b.g ? 0 : x(Ab, b)) : x(Ab, b)) {
    c = [];
    b = D(S.a($h, b));
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        k = d.O(null, f), c.push(k), f += 1;
      } else {
        if (b = D(b)) {
          d = b, Td(d) ? (b = tc(d), f = vc(d), d = b, e = M(b), b = f) : (b = F(d), c.push(b), b = H(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return b;
}, ai = null;
function bi() {
  if (null == ai) {
    var a = new $a(null, 3, [ci, Re, di, Re, ei, Re], null);
    ai = nf ? nf(a) : mf.call(null, a);
  }
  return ai;
}
function fi(a, b, c) {
  var d = Wc.a(b, c);
  if (!d && !(d = Zd(ei.b(a).call(null, b), c)) && (d = Sd(c)) && (d = Sd(b))) {
    if (d = M(c) === M(b)) {
      for (var e = !0, f = 0;;) {
        if (e && f !== M(c)) {
          e = fi(a, function() {
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
function gi(a) {
  var b;
  b = bi();
  b = I.b ? I.b(b) : I.call(null, b);
  return Pe(Ed(ci.b(b), a));
}
function hi(a, b, c, d) {
  jf.a(a, function() {
    return I.b ? I.b(b) : I.call(null, b);
  });
  jf.a(c, function() {
    return I.b ? I.b(d) : I.call(null, d);
  });
}
var ii = function ii(b, c, d) {
  var e = (I.b ? I.b(d) : I.call(null, d)).call(null, b), e = v(v(e) ? e.b ? e.b(c) : e.call(null, c) : e) ? !0 : null;
  if (v(e)) {
    return e;
  }
  e = function() {
    for (var e = gi(c);;) {
      if (0 < M(e)) {
        ii(b, F(e), d), e = Uc(e);
      } else {
        return null;
      }
    }
  }();
  if (v(e)) {
    return e;
  }
  e = function() {
    for (var e = gi(b);;) {
      if (0 < M(e)) {
        ii(F(e), c, d), e = Uc(e);
      } else {
        return null;
      }
    }
  }();
  return v(e) ? e : !1;
};
function ji(a, b, c) {
  c = ii(a, b, c);
  if (v(c)) {
    a = c;
  } else {
    c = fi;
    var d;
    d = bi();
    d = I.b ? I.b(d) : I.call(null, d);
    a = c(d, a, b);
  }
  return a;
}
var ki = function ki(b, c, d, e, f, h, k) {
  var l = tb(function(e, h) {
    var k = N(h, 0);
    N(h, 1);
    if (fi(I.b ? I.b(d) : I.call(null, d), c, k)) {
      var l;
      l = (l = null == e) ? l : ji(k, F(e), f);
      l = v(l) ? h : e;
      if (!v(ji(F(l), k, f))) {
        throw Error([B("Multiple methods in multimethod '"), B(b), B("' match dispatch value: "), B(c), B(" -\x3e "), B(k), B(" and "), B(F(l)), B(", and neither is preferred")].join(""));
      }
      return l;
    }
    return e;
  }, null, I.b ? I.b(e) : I.call(null, e));
  if (v(l)) {
    if (Wc.a(I.b ? I.b(k) : I.call(null, k), I.b ? I.b(d) : I.call(null, d))) {
      return jf.s(h, O, c, F(H(l))), F(H(l));
    }
    hi(h, e, k, d);
    return ki(b, c, d, e, f, h, k);
  }
  return null;
};
function X(a, b) {
  throw Error([B("No method in multimethod '"), B(a), B("' for dispatch value: "), B(b)].join(""));
}
function li(a, b, c, d, e, f, h, k) {
  this.name = a;
  this.f = b;
  this.Wd = c;
  this.wc = d;
  this.jc = e;
  this.je = f;
  this.yc = h;
  this.nc = k;
  this.g = 4194305;
  this.r = 4352;
}
g = li.prototype;
g.call = function() {
  function a(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, y, G, L, Q, ba) {
    a = this;
    var Ca = Oe(a.f, b, c, d, e, K([f, h, k, l, m, u, p, q, r, t, A, w, y, G, L, Q, ba], 0)), Qg = Y(this, Ca);
    v(Qg) || X(a.name, Ca);
    return Oe(Qg, b, c, d, e, K([f, h, k, l, m, u, p, q, r, t, A, w, y, G, L, Q, ba], 0));
  }
  function b(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, y, G, L, Q) {
    a = this;
    var ba = a.f.ga ? a.f.ga(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, y, G, L, Q) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, y, G, L, Q), Ca = Y(this, ba);
    v(Ca) || X(a.name, ba);
    return Ca.ga ? Ca.ga(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, y, G, L, Q) : Ca.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, y, G, L, Q);
  }
  function c(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, y, G, L) {
    a = this;
    var Q = a.f.fa ? a.f.fa(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, y, G, L) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, y, G, L), ba = Y(this, Q);
    v(ba) || X(a.name, Q);
    return ba.fa ? ba.fa(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, y, G, L) : ba.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, y, G, L);
  }
  function d(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, y, G) {
    a = this;
    var L = a.f.ea ? a.f.ea(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, y, G) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, y, G), Q = Y(this, L);
    v(Q) || X(a.name, L);
    return Q.ea ? Q.ea(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, y, G) : Q.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, y, G);
  }
  function e(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, y) {
    a = this;
    var G = a.f.da ? a.f.da(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, y) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, y), L = Y(this, G);
    v(L) || X(a.name, G);
    return L.da ? L.da(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, y) : L.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, y);
  }
  function f(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w) {
    a = this;
    var y = a.f.ca ? a.f.ca(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w), G = Y(this, y);
    v(G) || X(a.name, y);
    return G.ca ? G.ca(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w) : G.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w);
  }
  function h(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A) {
    a = this;
    var w = a.f.ba ? a.f.ba(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A), y = Y(this, w);
    v(y) || X(a.name, w);
    return y.ba ? y.ba(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A) : y.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A);
  }
  function k(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t) {
    a = this;
    var A = a.f.aa ? a.f.aa(b, c, d, e, f, h, k, l, m, u, p, q, r, t) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t), w = Y(this, A);
    v(w) || X(a.name, A);
    return w.aa ? w.aa(b, c, d, e, f, h, k, l, m, u, p, q, r, t) : w.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t);
  }
  function l(a, b, c, d, e, f, h, k, l, m, u, p, q, r) {
    a = this;
    var t = a.f.$ ? a.f.$(b, c, d, e, f, h, k, l, m, u, p, q, r) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r), A = Y(this, t);
    v(A) || X(a.name, t);
    return A.$ ? A.$(b, c, d, e, f, h, k, l, m, u, p, q, r) : A.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r);
  }
  function m(a, b, c, d, e, f, h, k, l, m, u, p, q) {
    a = this;
    var r = a.f.Z ? a.f.Z(b, c, d, e, f, h, k, l, m, u, p, q) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q), t = Y(this, r);
    v(t) || X(a.name, r);
    return t.Z ? t.Z(b, c, d, e, f, h, k, l, m, u, p, q) : t.call(null, b, c, d, e, f, h, k, l, m, u, p, q);
  }
  function p(a, b, c, d, e, f, h, k, l, m, u, p) {
    a = this;
    var q = a.f.Y ? a.f.Y(b, c, d, e, f, h, k, l, m, u, p) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p), r = Y(this, q);
    v(r) || X(a.name, q);
    return r.Y ? r.Y(b, c, d, e, f, h, k, l, m, u, p) : r.call(null, b, c, d, e, f, h, k, l, m, u, p);
  }
  function q(a, b, c, d, e, f, h, k, l, m, u) {
    a = this;
    var p = a.f.X ? a.f.X(b, c, d, e, f, h, k, l, m, u) : a.f.call(null, b, c, d, e, f, h, k, l, m, u), q = Y(this, p);
    v(q) || X(a.name, p);
    return q.X ? q.X(b, c, d, e, f, h, k, l, m, u) : q.call(null, b, c, d, e, f, h, k, l, m, u);
  }
  function r(a, b, c, d, e, f, h, k, l, m) {
    a = this;
    var u = a.f.ja ? a.f.ja(b, c, d, e, f, h, k, l, m) : a.f.call(null, b, c, d, e, f, h, k, l, m), p = Y(this, u);
    v(p) || X(a.name, u);
    return p.ja ? p.ja(b, c, d, e, f, h, k, l, m) : p.call(null, b, c, d, e, f, h, k, l, m);
  }
  function t(a, b, c, d, e, f, h, k, l) {
    a = this;
    var m = a.f.ia ? a.f.ia(b, c, d, e, f, h, k, l) : a.f.call(null, b, c, d, e, f, h, k, l), u = Y(this, m);
    v(u) || X(a.name, m);
    return u.ia ? u.ia(b, c, d, e, f, h, k, l) : u.call(null, b, c, d, e, f, h, k, l);
  }
  function w(a, b, c, d, e, f, h, k) {
    a = this;
    var l = a.f.ha ? a.f.ha(b, c, d, e, f, h, k) : a.f.call(null, b, c, d, e, f, h, k), m = Y(this, l);
    v(m) || X(a.name, l);
    return m.ha ? m.ha(b, c, d, e, f, h, k) : m.call(null, b, c, d, e, f, h, k);
  }
  function y(a, b, c, d, e, f, h) {
    a = this;
    var k = a.f.K ? a.f.K(b, c, d, e, f, h) : a.f.call(null, b, c, d, e, f, h), l = Y(this, k);
    v(l) || X(a.name, k);
    return l.K ? l.K(b, c, d, e, f, h) : l.call(null, b, c, d, e, f, h);
  }
  function A(a, b, c, d, e, f) {
    a = this;
    var h = a.f.J ? a.f.J(b, c, d, e, f) : a.f.call(null, b, c, d, e, f), k = Y(this, h);
    v(k) || X(a.name, h);
    return k.J ? k.J(b, c, d, e, f) : k.call(null, b, c, d, e, f);
  }
  function G(a, b, c, d, e) {
    a = this;
    var f = a.f.s ? a.f.s(b, c, d, e) : a.f.call(null, b, c, d, e), h = Y(this, f);
    v(h) || X(a.name, f);
    return h.s ? h.s(b, c, d, e) : h.call(null, b, c, d, e);
  }
  function L(a, b, c, d) {
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
  function Ca(a) {
    a = this;
    var b = a.f.m ? a.f.m() : a.f.call(null), c = Y(this, b);
    v(c) || X(a.name, b);
    return c.m ? c.m() : c.call(null);
  }
  var u = null, u = function(u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea, Ia, Xa, ab, kb, Na, Ya, cb, db, uc, fd, qe) {
    switch(arguments.length) {
      case 1:
        return Ca.call(this, u);
      case 2:
        return ba.call(this, u, aa);
      case 3:
        return Q.call(this, u, aa, ha);
      case 4:
        return L.call(this, u, aa, ha, ja);
      case 5:
        return G.call(this, u, aa, ha, ja, oa);
      case 6:
        return A.call(this, u, aa, ha, ja, oa, ta);
      case 7:
        return y.call(this, u, aa, ha, ja, oa, ta, ua);
      case 8:
        return w.call(this, u, aa, ha, ja, oa, ta, ua, Aa);
      case 9:
        return t.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da);
      case 10:
        return r.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya);
      case 11:
        return q.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea);
      case 12:
        return p.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea, Ia);
      case 13:
        return m.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea, Ia, Xa);
      case 14:
        return l.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea, Ia, Xa, ab);
      case 15:
        return k.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea, Ia, Xa, ab, kb);
      case 16:
        return h.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea, Ia, Xa, ab, kb, Na);
      case 17:
        return f.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea, Ia, Xa, ab, kb, Na, Ya);
      case 18:
        return e.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea, Ia, Xa, ab, kb, Na, Ya, cb);
      case 19:
        return d.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea, Ia, Xa, ab, kb, Na, Ya, cb, db);
      case 20:
        return c.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea, Ia, Xa, ab, kb, Na, Ya, cb, db, uc);
      case 21:
        return b.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea, Ia, Xa, ab, kb, Na, Ya, cb, db, uc, fd);
      case 22:
        return a.call(this, u, aa, ha, ja, oa, ta, ua, Aa, Da, ya, Ea, Ia, Xa, ab, kb, Na, Ya, cb, db, uc, fd, qe);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  u.b = Ca;
  u.a = ba;
  u.d = Q;
  u.s = L;
  u.J = G;
  u.K = A;
  u.ha = y;
  u.ia = w;
  u.ja = t;
  u.X = r;
  u.Y = q;
  u.Z = p;
  u.$ = m;
  u.aa = l;
  u.ba = k;
  u.ca = h;
  u.da = f;
  u.ea = e;
  u.fa = d;
  u.ga = c;
  u.Gc = b;
  u.Xb = a;
  return u;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(pb(b)));
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
g.K = function(a, b, c, d, e, f) {
  var h = this.f.K ? this.f.K(a, b, c, d, e, f) : this.f.call(null, a, b, c, d, e, f), k = Y(this, h);
  v(k) || X(this.name, h);
  return k.K ? k.K(a, b, c, d, e, f) : k.call(null, a, b, c, d, e, f);
};
g.ha = function(a, b, c, d, e, f, h) {
  var k = this.f.ha ? this.f.ha(a, b, c, d, e, f, h) : this.f.call(null, a, b, c, d, e, f, h), l = Y(this, k);
  v(l) || X(this.name, k);
  return l.ha ? l.ha(a, b, c, d, e, f, h) : l.call(null, a, b, c, d, e, f, h);
};
g.ia = function(a, b, c, d, e, f, h, k) {
  var l = this.f.ia ? this.f.ia(a, b, c, d, e, f, h, k) : this.f.call(null, a, b, c, d, e, f, h, k), m = Y(this, l);
  v(m) || X(this.name, l);
  return m.ia ? m.ia(a, b, c, d, e, f, h, k) : m.call(null, a, b, c, d, e, f, h, k);
};
g.ja = function(a, b, c, d, e, f, h, k, l) {
  var m = this.f.ja ? this.f.ja(a, b, c, d, e, f, h, k, l) : this.f.call(null, a, b, c, d, e, f, h, k, l), p = Y(this, m);
  v(p) || X(this.name, m);
  return p.ja ? p.ja(a, b, c, d, e, f, h, k, l) : p.call(null, a, b, c, d, e, f, h, k, l);
};
g.X = function(a, b, c, d, e, f, h, k, l, m) {
  var p = this.f.X ? this.f.X(a, b, c, d, e, f, h, k, l, m) : this.f.call(null, a, b, c, d, e, f, h, k, l, m), q = Y(this, p);
  v(q) || X(this.name, p);
  return q.X ? q.X(a, b, c, d, e, f, h, k, l, m) : q.call(null, a, b, c, d, e, f, h, k, l, m);
};
g.Y = function(a, b, c, d, e, f, h, k, l, m, p) {
  var q = this.f.Y ? this.f.Y(a, b, c, d, e, f, h, k, l, m, p) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p), r = Y(this, q);
  v(r) || X(this.name, q);
  return r.Y ? r.Y(a, b, c, d, e, f, h, k, l, m, p) : r.call(null, a, b, c, d, e, f, h, k, l, m, p);
};
g.Z = function(a, b, c, d, e, f, h, k, l, m, p, q) {
  var r = this.f.Z ? this.f.Z(a, b, c, d, e, f, h, k, l, m, p, q) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q), t = Y(this, r);
  v(t) || X(this.name, r);
  return t.Z ? t.Z(a, b, c, d, e, f, h, k, l, m, p, q) : t.call(null, a, b, c, d, e, f, h, k, l, m, p, q);
};
g.$ = function(a, b, c, d, e, f, h, k, l, m, p, q, r) {
  var t = this.f.$ ? this.f.$(a, b, c, d, e, f, h, k, l, m, p, q, r) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r), w = Y(this, t);
  v(w) || X(this.name, t);
  return w.$ ? w.$(a, b, c, d, e, f, h, k, l, m, p, q, r) : w.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r);
};
g.aa = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t) {
  var w = this.f.aa ? this.f.aa(a, b, c, d, e, f, h, k, l, m, p, q, r, t) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t), y = Y(this, w);
  v(y) || X(this.name, w);
  return y.aa ? y.aa(a, b, c, d, e, f, h, k, l, m, p, q, r, t) : y.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t);
};
g.ba = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w) {
  var y = this.f.ba ? this.f.ba(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w), A = Y(this, y);
  v(A) || X(this.name, y);
  return A.ba ? A.ba(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w) : A.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w);
};
g.ca = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y) {
  var A = this.f.ca ? this.f.ca(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y), G = Y(this, A);
  v(G) || X(this.name, A);
  return G.ca ? G.ca(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y) : G.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y);
};
g.da = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A) {
  var G = this.f.da ? this.f.da(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A), L = Y(this, G);
  v(L) || X(this.name, G);
  return L.da ? L.da(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A) : L.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A);
};
g.ea = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G) {
  var L = this.f.ea ? this.f.ea(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G), Q = Y(this, L);
  v(Q) || X(this.name, L);
  return Q.ea ? Q.ea(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G) : Q.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G);
};
g.fa = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L) {
  var Q = this.f.fa ? this.f.fa(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L), ba = Y(this, Q);
  v(ba) || X(this.name, Q);
  return ba.fa ? ba.fa(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L) : ba.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L);
};
g.ga = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L, Q) {
  var ba = this.f.ga ? this.f.ga(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L, Q) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L, Q), Ca = Y(this, ba);
  v(Ca) || X(this.name, ba);
  return Ca.ga ? Ca.ga(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L, Q) : Ca.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L, Q);
};
g.Gc = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, y, A, G, L, Q, ba) {
  var Ca = Oe(this.f, a, b, c, d, K([e, f, h, k, l, m, p, q, r, t, w, y, A, G, L, Q, ba], 0)), u = Y(this, Ca);
  v(u) || X(this.name, Ca);
  return Oe(u, a, b, c, d, K([e, f, h, k, l, m, p, q, r, t, w, y, A, G, L, Q, ba], 0));
};
function mi(a, b) {
  var c = ni;
  jf.s(c.jc, O, a, b);
  hi(c.yc, c.jc, c.nc, c.wc);
}
function Y(a, b) {
  Wc.a(function() {
    var b = a.nc;
    return I.b ? I.b(b) : I.call(null, b);
  }(), function() {
    var b = a.wc;
    return I.b ? I.b(b) : I.call(null, b);
  }()) || hi(a.yc, a.jc, a.nc, a.wc);
  var c = function() {
    var b = a.yc;
    return I.b ? I.b(b) : I.call(null, b);
  }().call(null, b);
  if (v(c)) {
    return c;
  }
  c = ki(a.name, b, a.wc, a.jc, a.je, a.yc, a.nc);
  return v(c) ? c : function() {
    var b = a.jc;
    return I.b ? I.b(b) : I.call(null, b);
  }().call(null, a.Wd);
}
g.ac = function() {
  return xc(this.name);
};
g.bc = function() {
  return yc(this.name);
};
g.B = function() {
  return this[ia] || (this[ia] = ++ka);
};
function oi(a) {
  this.Tb = a;
  this.g = 2153775104;
  this.r = 2048;
}
g = oi.prototype;
g.toString = function() {
  return this.Tb;
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.q = function(a, b) {
  return b instanceof oi && this.Tb === b.Tb;
};
g.A = function(a, b) {
  return jc(b, [B('#uuid "'), B(this.Tb), B('"')].join(""));
};
g.B = function() {
  for (var a = Sh(K([this], 0)), b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  return b;
};
g.Hb = function(a, b) {
  return Sa(this.Tb, b.Tb);
};
var pi = new P(null, "ppath", "ppath", -1758182784), qi = new P(null, "event-sources", "event-sources", 708931713), ri = new P(null, "events-channel", "events-channel", 1892177121), si = new P(null, "definition", "definition", -1198729982), ti = new P("zip", "branch?", "zip/branch?", -998880862), ui = new P(null, "children", "children", -940561982), vi = new P(null, "r", "r", -471384190), wi = new P("zip", "children", "zip/children", -940194589), xi = new P(null, "ifn", "ifn", 230683491), yi = new P(null, 
"tree", "tree", -196312028), zi = new P("jamesmacaulay.zelkova.signal", "source", "jamesmacaulay.zelkova.signal/source", -943992700), Ai = new P(null, "kids-map", "kids-map", 643095940), fb = new P(null, "meta", "meta", 1499536964), gb = new P(null, "dup", "dup", 556298533), Bi = new P(null, "reset", "reset", -800929946), pf = new P(null, "validator", "validator", -1966190681), Ci = new P(null, "default", "default", -1987822328), Di = new P(null, "finally-block", "finally-block", 832982472), Ei = 
new P(null, "sources", "sources", -321166424), Fi = new P(null, "clicked", "clicked", 114423720), Gi = new P(null, "events", "events", 1792552201), Hi = new P(null, "value", "value", 305978217), Ii = new P(null, "readonly", "readonly", -1101398934), Ji = new P(null, "kid-indexes-map", "kid-indexes-map", -1120910006), Mi = new P(null, "onclick", "onclick", 1297553739), Ni = new P(null, "mult-map", "mult-map", 460417931), Z = new P(null, "recur", "recur", -437573268), Oi = new P(null, "type", "type", 
1174270348), Pi = new P(null, "catch-block", "catch-block", 1175212748), Qi = new P(null, "topic", "topic", -1960480691), Rh = new P(null, "fallback-impl", "fallback-impl", -1501286995), bb = new P(null, "flush-on-newline", "flush-on-newline", -151457939), Ri = new P(null, "l", "l", 1395893423), di = new P(null, "descendants", "descendants", 1824886031), Si = new P("zip", "make-node", "zip/make-node", 1103800591), Ti = new P(null, "no-op", "no-op", -93046065), ei = new P(null, "ancestors", "ancestors", 
-776045424), eb = new P(null, "readably", "readably", 1129599760), Ui = new P(null, "output-values-mult", "output-values-mult", 1026794288), Kh = new P(null, "more-marker", "more-marker", -14717935), Vi = new P(null, "write-port-channel", "write-port-channel", -776952302), Wi = new P(null, "init-fn", "init-fn", 777257971), hb = new P(null, "print-length", "print-length", 1931866356), Xi = new P(null, "id", "id", -1388402092), Yi = new P(null, "class", "class", -2030961996), Zi = new P(null, "catch-exception", 
"catch-exception", -1997306795), $i = new P(null, "opts", "opts", 155075701), aj = new P(null, "relayed-event-topic", "relayed-event-topic", 323853461), ci = new P(null, "parents", "parents", -2027538891), bj = new P(null, "pnodes", "pnodes", 1739080565), cj = new P(null, "prev", "prev", -1597069226), dj = new P(null, "changed?", "changed?", -437828330), ej = new P(null, "continue-block", "continue-block", -1852047850), fj = new P(null, "readport", "readport", -1909228810), gj = new P(null, "mult", 
"mult", 1466794774), hj = new P(null, "attrs", "attrs", -2090668713), ij = new P(null, "topsort", "topsort", -718814409), jj = new P(null, "inputs-by-topic", "inputs-by-topic", 1973950168), kj = new P(null, "tag", "tag", -1290361223), lj = new P(null, "end", "end", -268185958), mj = new P(null, "parents-map", "parents-map", -1048684902), nj = new P(null, "hierarchy", "hierarchy", -1053470341), oj = new P(null, "timestamp", "timestamp", 579478971), pj = new P(null, "msg-xform", "msg-xform", -1431252485), 
qj = new P(null, "signal", "signal", -1984951589), Qh = new P(null, "alt-impl", "alt-impl", 670969595), rj = new P(null, "root-node", "root-node", 296879230), sj = new P(null, "deps", "deps", 1883360319);
var tj, uj, vj = {}, wj = function wj(b, c) {
  if (b ? b.Jc : b) {
    return b.Jc(0, c);
  }
  var d;
  d = wj[n(null == b ? null : b)];
  if (!d && (d = wj._, !d)) {
    throw z("ReadPort.take!", b);
  }
  return d.call(null, b, c);
}, xj = function xj(b, c, d) {
  if (b ? b.Mb : b) {
    return b.Mb(b, c, d);
  }
  var e;
  e = xj[n(null == b ? null : b)];
  if (!e && (e = xj._, !e)) {
    throw z("WritePort.put!", b);
  }
  return e.call(null, b, c, d);
}, yj = function yj(b) {
  if (b ? b.Lb : b) {
    return b.Lb(b);
  }
  var c;
  c = yj[n(null == b ? null : b)];
  if (!c && (c = yj._, !c)) {
    throw z("Channel.close!", b);
  }
  return c.call(null, b);
}, zj = function zj(b) {
  if (b ? b.hd : b) {
    return!0;
  }
  var c;
  c = zj[n(null == b ? null : b)];
  if (!c && (c = zj._, !c)) {
    throw z("Handler.active?", b);
  }
  return c.call(null, b);
}, Aj = function Aj(b) {
  if (b ? b.jd : b) {
    return b.na;
  }
  var c;
  c = Aj[n(null == b ? null : b)];
  if (!c && (c = Aj._, !c)) {
    throw z("Handler.commit", b);
  }
  return c.call(null, b);
}, Bj = function Bj(b, c) {
  if (b ? b.gd : b) {
    return b.gd(0, c);
  }
  var d;
  d = Bj[n(null == b ? null : b)];
  if (!d && (d = Bj._, !d)) {
    throw z("Buffer.add!*", b);
  }
  return d.call(null, b, c);
}, Cj = function Cj() {
  switch(arguments.length) {
    case 1:
      return Cj.b(arguments[0]);
    case 2:
      return Cj.a(arguments[0], arguments[1]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
Cj.b = function(a) {
  return a;
};
Cj.a = function(a, b) {
  if (null == b) {
    throw Error([B("Assert failed: "), B(Sh(K([pe(new Rc(null, "not", "not", 1044554643, null), pe(new Rc(null, "nil?", "nil?", 1612038930, null), new Rc(null, "itm", "itm", -713282527, null)))], 0)))].join(""));
  }
  return Bj(a, b);
};
Cj.v = 2;
function Dj(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function Ej(a, b, c, d) {
  this.head = a;
  this.M = b;
  this.length = c;
  this.c = d;
}
Ej.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.c[this.M];
  this.c[this.M] = null;
  this.M = (this.M + 1) % this.c.length;
  --this.length;
  return a;
};
Ej.prototype.unshift = function(a) {
  this.c[this.head] = a;
  this.head = (this.head + 1) % this.c.length;
  this.length += 1;
  return null;
};
function Fj(a, b) {
  a.length + 1 === a.c.length && a.resize();
  a.unshift(b);
}
Ej.prototype.resize = function() {
  var a = Array(2 * this.c.length);
  return this.M < this.head ? (Dj(this.c, this.M, a, 0, this.length), this.M = 0, this.head = this.length, this.c = a) : this.M > this.head ? (Dj(this.c, this.M, a, 0, this.c.length - this.M), Dj(this.c, 0, a, this.c.length - this.M, this.head), this.M = 0, this.head = this.length, this.c = a) : this.M === this.head ? (this.head = this.M = 0, this.c = a) : null;
};
function Gj(a, b) {
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
function Hj(a) {
  if (!(0 < a)) {
    throw Error([B("Assert failed: "), B("Can't create a ring buffer of size 0"), B("\n"), B(Sh(K([pe(new Rc(null, "\x3e", "\x3e", 1085014381, null), new Rc(null, "n", "n", -2092305744, null), 0)], 0)))].join(""));
  }
  return new Ej(0, 0, 0, Array(a));
}
function Ij(a, b) {
  this.L = a;
  this.he = b;
  this.g = 2;
  this.r = 0;
}
function Jj(a) {
  return a.L.length === a.he;
}
Ij.prototype.gd = function(a, b) {
  Fj(this.L, b);
  return this;
};
Ij.prototype.I = function() {
  return this.L.length;
};
function Kj(a) {
  ca.setTimeout(function() {
    throw a;
  }, 0);
}
function Lj(a) {
  fa(ca.setImmediate) ? ca.setImmediate(a) : (Mj || (Mj = Nj()), Mj(a));
}
var Mj;
function Nj() {
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
    var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host, a = na(function(a) {
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
      var a = c.Yc;
      c.Yc = null;
      a();
    };
    return function(a) {
      d.next = {Yc:a};
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
;var Oj = Hj(32), Pj = !1, Qj = !1;
function Rj() {
  Pj = !0;
  Qj = !1;
  for (var a = 0;;) {
    var b = Oj.pop();
    if (null != b && (b.m ? b.m() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  Pj = !1;
  return 0 < Oj.length ? Sj.m ? Sj.m() : Sj.call(null) : null;
}
function Sj() {
  var a = Qj;
  if (v(v(a) ? Pj : a)) {
    return null;
  }
  Qj = !0;
  return Lj(Rj);
}
function Tj(a) {
  Fj(Oj, a);
  Sj();
}
;var Uj, Vj = function Vj(b) {
  "undefined" === typeof Uj && (Uj = function(b, d, e) {
    this.Cd = b;
    this.n = d;
    this.be = e;
    this.g = 425984;
    this.r = 0;
  }, Uj.prototype.D = function(b, d) {
    return new Uj(this.Cd, this.n, d);
  }, Uj.prototype.C = function() {
    return this.be;
  }, Uj.prototype.Ib = function() {
    return this.n;
  }, Uj.Pb = !0, Uj.Nb = "cljs.core.async.impl.channels/t19585", Uj.fc = function(b, d) {
    return jc(d, "cljs.core.async.impl.channels/t19585");
  });
  return new Uj(Vj, b, Re);
};
function Wj(a, b) {
  this.gc = a;
  this.n = b;
}
function Xj(a) {
  return zj(a.gc);
}
var Yj = function Yj(b) {
  if (b ? b.fd : b) {
    return b.fd();
  }
  var c;
  c = Yj[n(null == b ? null : b)];
  if (!c && (c = Yj._, !c)) {
    throw z("MMC.abort", b);
  }
  return c.call(null, b);
};
function Zj(a, b, c, d, e, f, h) {
  this.Fb = a;
  this.uc = b;
  this.wb = c;
  this.tc = d;
  this.L = e;
  this.closed = f;
  this.Ga = h;
}
g = Zj.prototype;
g.fd = function() {
  for (;;) {
    var a = this.wb.pop();
    if (null != a) {
      var b = a.gc;
      Tj(function(a) {
        return function() {
          return a.b ? a.b(!0) : a.call(null, !0);
        };
      }(b.na, b, a.n, a, this));
    }
    break;
  }
  Gj(this.wb, df(!1));
  return yj(this);
};
g.Mb = function(a, b, c) {
  var d = this;
  if (null == b) {
    throw Error([B("Assert failed: "), B("Can't put nil in on a channel"), B("\n"), B(Sh(K([pe(new Rc(null, "not", "not", 1044554643, null), pe(new Rc(null, "nil?", "nil?", 1612038930, null), new Rc(null, "val", "val", 1769233139, null)))], 0)))].join(""));
  }
  if (a = d.closed) {
    return Vj(!a);
  }
  if (v(function() {
    var a = d.L;
    return v(a) ? lb(Jj(d.L)) : a;
  }())) {
    for (c = jd(function() {
      var a = d.L;
      return d.Ga.a ? d.Ga.a(a, b) : d.Ga.call(null, a, b);
    }());;) {
      if (0 < d.Fb.length && 0 < M(d.L)) {
        var e = d.Fb.pop(), f = e.na, h = d.L.L.pop();
        Tj(function(a, b) {
          return function() {
            return a.b ? a.b(b) : a.call(null, b);
          };
        }(f, h, e, c, a, this));
      }
      break;
    }
    c && Yj(this);
    return Vj(!0);
  }
  e = function() {
    for (;;) {
      var a = d.Fb.pop();
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
    return c = Aj(e), Tj(function(a) {
      return function() {
        return a.b ? a.b(b) : a.call(null, b);
      };
    }(c, e, a, this)), Vj(!0);
  }
  64 < d.tc ? (d.tc = 0, Gj(d.wb, Xj)) : d.tc += 1;
  if (!(1024 > d.wb.length)) {
    throw Error([B("Assert failed: "), B([B("No more than "), B(1024), B(" pending puts are allowed on a single channel."), B(" Consider using a windowed buffer.")].join("")), B("\n"), B(Sh(K([pe(new Rc(null, "\x3c", "\x3c", 993667236, null), pe(new Rc(null, ".-length", ".-length", -280799999, null), new Rc(null, "puts", "puts", -1883877054, null)), new Rc("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0)))].join(""));
  }
  Fj(d.wb, new Wj(c, b));
  return null;
};
g.Vd = !0;
g.Jc = function(a, b) {
  var c = this;
  if (null != c.L && 0 < M(c.L)) {
    for (var d = b.na, e = Vj(c.L.L.pop());;) {
      if (!v(Jj(c.L))) {
        var f = c.wb.pop();
        if (null != f) {
          var h = f.gc, k = f.n;
          Tj(function(a) {
            return function() {
              return a.b ? a.b(!0) : a.call(null, !0);
            };
          }(h.na, h, k, f, d, e, this));
          jd(function() {
            var a = c.L, b = k;
            return c.Ga.a ? c.Ga.a(a, b) : c.Ga.call(null, a, b);
          }()) && Yj(this);
          continue;
        }
      }
      break;
    }
    return e;
  }
  d = function() {
    for (;;) {
      var a = c.wb.pop();
      if (v(a)) {
        if (zj(a.gc)) {
          return a;
        }
      } else {
        return null;
      }
    }
  }();
  if (v(d)) {
    return e = Aj(d.gc), Tj(function(a) {
      return function() {
        return a.b ? a.b(!0) : a.call(null, !0);
      };
    }(e, d, this)), Vj(d.n);
  }
  if (v(c.closed)) {
    return v(c.L) && (d = c.L, c.Ga.b ? c.Ga.b(d) : c.Ga.call(null, d)), v(v(!0) ? b.na : !0) ? (d = function() {
      var a = c.L;
      return v(a) ? 0 < M(c.L) : a;
    }(), d = v(d) ? c.L.L.pop() : null, Vj(d)) : null;
  }
  64 < c.uc ? (c.uc = 0, Gj(c.Fb, zj)) : c.uc += 1;
  if (!(1024 > c.Fb.length)) {
    throw Error([B("Assert failed: "), B([B("No more than "), B(1024), B(" pending takes are allowed on a single channel.")].join("")), B("\n"), B(Sh(K([pe(new Rc(null, "\x3c", "\x3c", 993667236, null), pe(new Rc(null, ".-length", ".-length", -280799999, null), new Rc(null, "takes", "takes", 298247964, null)), new Rc("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0)))].join(""));
  }
  Fj(c.Fb, b);
  return null;
};
g.Lb = function() {
  var a = this;
  if (!a.closed) {
    a.closed = !0;
    if (v(function() {
      var b = a.L;
      return v(b) ? 0 === a.wb.length : b;
    }())) {
      var b = a.L;
      a.Ga.b ? a.Ga.b(b) : a.Ga.call(null, b);
    }
    for (;b = a.Fb.pop(), null != b;) {
      var c = b.na, d = v(function() {
        var b = a.L;
        return v(b) ? 0 < M(a.L) : b;
      }()) ? a.L.L.pop() : null;
      Tj(function(a, b) {
        return function() {
          return a.b ? a.b(b) : a.call(null, b);
        };
      }(c, d, b, this));
    }
  }
  return null;
};
function ak(a) {
  console.log(a);
  return null;
}
function bk(a, b, c) {
  b = (v(b) ? b : ak).call(null, c);
  return null == b ? a : Cj.a(a, b);
}
function ck(a, b, c) {
  return new Zj(Hj(32), 0, Hj(32), 0, a, !1, function() {
    return function(a) {
      return function() {
        function b(e, f) {
          try {
            return a.a ? a.a(e, f) : a.call(null, e, f);
          } catch (h) {
            return bk(e, c, h);
          }
        }
        function f(b) {
          try {
            return a.b ? a.b(b) : a.call(null, b);
          } catch (e) {
            return bk(b, c, e);
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
    }(v(b) ? b.b ? b.b(Cj) : b.call(null, Cj) : Cj);
  }());
}
;var dk, ek = function ek(b) {
  "undefined" === typeof dk && (dk = function(b, d, e) {
    this.Mc = b;
    this.na = d;
    this.ee = e;
    this.g = 393216;
    this.r = 0;
  }, dk.prototype.D = function(b, d) {
    return new dk(this.Mc, this.na, d);
  }, dk.prototype.C = function() {
    return this.ee;
  }, dk.prototype.hd = function() {
    return!0;
  }, dk.prototype.jd = function() {
    return this.na;
  }, dk.Pb = !0, dk.Nb = "cljs.core.async.impl.ioc-helpers/t22885", dk.fc = function(b, d) {
    return jc(d, "cljs.core.async.impl.ioc-helpers/t22885");
  });
  return new dk(ek, b, Re);
};
function fk(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    throw b instanceof Object && a[6].Lb(null), b;
  }
}
function gk(a, b, c) {
  c = c.Jc(0, ek(function(c) {
    a[2] = c;
    a[1] = b;
    return fk(a);
  }));
  return v(c) ? (a[2] = I.b ? I.b(c) : I.call(null, c), a[1] = b, Z) : null;
}
function hk(a, b, c, d) {
  c = c.Mb(null, d, ek(function(c) {
    a[2] = c;
    a[1] = b;
    return fk(a);
  }));
  return v(c) ? (a[2] = I.b ? I.b(c) : I.call(null, c), a[1] = b, Z) : null;
}
function ik(a, b) {
  var c = a[6];
  null != b && c.Mb(null, b, ek(function() {
    return function() {
      return null;
    };
  }(c)));
  c.Lb(null);
  return c;
}
function jk(a, b, c, d, e, f, h, k) {
  this.Ua = a;
  this.Va = b;
  this.Xa = c;
  this.Wa = d;
  this.fb = e;
  this.p = f;
  this.j = h;
  this.i = k;
  this.g = 2229667594;
  this.r = 8192;
}
g = jk.prototype;
g.w = function(a, b) {
  return Ib.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.la : null) {
    case "catch-block":
      return this.Ua;
    case "catch-exception":
      return this.Va;
    case "finally-block":
      return this.Xa;
    case "continue-block":
      return this.Wa;
    case "prev":
      return this.fb;
    default:
      return Fd(this.j, b, c);
  }
};
g.A = function(a, b, c) {
  return Jh(b, function() {
    return function(a) {
      return Jh(b, W, "", " ", "", c, a);
    };
  }(this), "#cljs.core.async.impl.ioc-helpers.ExceptionFrame{", ", ", "}", c, Ge.a(new T(null, 5, 5, U, [new T(null, 2, 5, U, [Pi, this.Ua], null), new T(null, 2, 5, U, [Zi, this.Va], null), new T(null, 2, 5, U, [Di, this.Xa], null), new T(null, 2, 5, U, [ej, this.Wa], null), new T(null, 2, 5, U, [cj, this.fb], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 5 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = je(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? og(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.Aa = function(a, b) {
  return Zd(new uh(null, new $a(null, 5, [Di, null, Pi, null, Zi, null, cj, null, ej, null], null), null), b) ? Hd.a(vd(Ef.a(Re, this), this.p), b) : new jk(this.Ua, this.Va, this.Xa, this.Wa, this.fb, this.p, Pe(Hd.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return v(R.a ? R.a(Pi, b) : R.call(null, Pi, b)) ? new jk(c, this.Va, this.Xa, this.Wa, this.fb, this.p, this.j, null) : v(R.a ? R.a(Zi, b) : R.call(null, Zi, b)) ? new jk(this.Ua, c, this.Xa, this.Wa, this.fb, this.p, this.j, null) : v(R.a ? R.a(Di, b) : R.call(null, Di, b)) ? new jk(this.Ua, this.Va, c, this.Wa, this.fb, this.p, this.j, null) : v(R.a ? R.a(ej, b) : R.call(null, ej, b)) ? new jk(this.Ua, this.Va, this.Xa, c, this.fb, this.p, this.j, null) : v(R.a ? R.a(cj, b) : R.call(null, cj, 
  b)) ? new jk(this.Ua, this.Va, this.Xa, this.Wa, c, this.p, this.j, null) : new jk(this.Ua, this.Va, this.Xa, this.Wa, this.fb, this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(Ge.a(new T(null, 5, 5, U, [new T(null, 2, 5, U, [Pi, this.Ua], null), new T(null, 2, 5, U, [Zi, this.Va], null), new T(null, 2, 5, U, [Di, this.Xa], null), new T(null, 2, 5, U, [ej, this.Wa], null), new T(null, 2, 5, U, [cj, this.fb], null)], null), this.j));
};
g.D = function(a, b) {
  return new jk(this.Ua, this.Va, this.Xa, this.Wa, this.fb, b, this.j, this.i);
};
g.G = function(a, b) {
  return Sd(b) ? Kb(this, C.a(b, 0), C.a(b, 1)) : tb(Bb, this, b);
};
function kk(a) {
  for (;;) {
    var b = a[4], c = Pi.b(b), d = Zi.b(b), e = a[5];
    if (v(function() {
      var a = e;
      return v(a) ? lb(b) : a;
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
      a[4] = O.k(b, Pi, null, K([Zi, null], 0));
      break;
    }
    if (v(function() {
      var a = e;
      return v(a) ? lb(c) && lb(Di.b(b)) : a;
    }())) {
      a[4] = cj.b(b);
    } else {
      if (v(function() {
        var a = e;
        return v(a) ? (a = lb(c)) ? Di.b(b) : a : a;
      }())) {
        a[1] = Di.b(b);
        a[4] = O.d(b, Di, null);
        break;
      }
      if (v(function() {
        var a = lb(e);
        return a ? Di.b(b) : a;
      }())) {
        a[1] = Di.b(b);
        a[4] = O.d(b, Di, null);
        break;
      }
      if (lb(e) && lb(Di.b(b))) {
        a[1] = ej.b(b);
        a[4] = cj.b(b);
        break;
      }
      throw Error("No matching clause");
    }
  }
}
;for (var lk = Array(1), mk = 0;;) {
  if (mk < lk.length) {
    lk[mk] = null, mk += 1;
  } else {
    break;
  }
}
;var nk = function nk(b) {
  "undefined" === typeof tj && (tj = function(b, d, e) {
    this.Mc = b;
    this.na = d;
    this.ce = e;
    this.g = 393216;
    this.r = 0;
  }, tj.prototype.D = function(b, d) {
    return new tj(this.Mc, this.na, d);
  }, tj.prototype.C = function() {
    return this.ce;
  }, tj.prototype.hd = function() {
    return!0;
  }, tj.prototype.jd = function() {
    return this.na;
  }, tj.Pb = !0, tj.Nb = "cljs.core.async/t20178", tj.fc = function(b, d) {
    return jc(d, "cljs.core.async/t20178");
  });
  return new tj(nk, b, Re);
}, ok = function ok() {
  switch(arguments.length) {
    case 0:
      return ok.m();
    case 1:
      return ok.b(arguments[0]);
    case 2:
      return ok.a(arguments[0], arguments[1]);
    case 3:
      return ok.d(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
ok.m = function() {
  return ok.b(null);
};
ok.b = function(a) {
  return ok.d(a, null, null);
};
ok.a = function(a, b) {
  return ok.d(a, b, null);
};
ok.d = function(a, b, c) {
  a = Wc.a(a, 0) ? null : a;
  if (v(b) && !v(a)) {
    throw Error([B("Assert failed: "), B("buffer must be supplied when transducer is"), B("\n"), B(Sh(K([new Rc(null, "buf-or-n", "buf-or-n", -1646815050, null)], 0)))].join(""));
  }
  a = "number" === typeof a ? new Ij(Hj(a), a) : a;
  return ck(a, b, c);
};
ok.v = 3;
function pk(a, b) {
  var c = wj(a, nk(b));
  if (v(c)) {
    var d = I.b ? I.b(c) : I.call(null, c);
    v(!0) ? b.b ? b.b(d) : b.call(null, d) : Tj(function(a) {
      return function() {
        return b.b ? b.b(a) : b.call(null, a);
      };
    }(d, c));
  }
  return null;
}
var qk = nk(function() {
  return null;
});
function rk(a, b) {
  var c = xj(a, b, qk);
  return v(c) ? I.b ? I.b(c) : I.call(null, c) : !0;
}
function sk(a, b, c) {
  a = xj(a, b, nk(c));
  return v(a) ? (b = I.b ? I.b(a) : I.call(null, a), v(!0) ? c.b ? c.b(b) : c.call(null, b) : Tj(function(a) {
    return function() {
      return c.b ? c.b(a) : c.call(null, a);
    };
  }(b, a, a)), b) : !0;
}
function tk(a, b) {
  return uk(a, b);
}
function uk(a, b) {
  var c = ok.b(1);
  Tj(function(c) {
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
                      c[5] = f, kk(c), d = Z;
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
            return 7 === d ? (d = c, d[2] = c[2], d[1] = 3, Z) : 1 === d ? (c[2] = null, c[1] = 2, Z) : 4 === d ? (d = c[7], d = c[2], c[7] = d, c[1] = v(null == d) ? 5 : 6, Z) : 13 === d ? (c[2] = null, c[1] = 14, Z) : 6 === d ? (d = c[7], hk(c, 11, b, d)) : 3 === d ? (d = c[2], ik(c, d)) : 12 === d ? (c[2] = null, c[1] = 2, Z) : 2 === d ? gk(c, 4, a) : 11 === d ? (d = c[2], c[1] = v(d) ? 12 : 13, Z) : 9 === d ? (c[2] = null, c[1] = 10, Z) : 5 === d ? (c[1] = v(!0) ? 8 : 9, Z) : 14 === d || 10 === 
            d ? (d = c[2], c[2] = d, c[1] = 7, Z) : 8 === d ? (d = yj(b), c[2] = d, c[1] = 10, Z) : null;
          };
        }(c), c);
      }(), f = function() {
        var a = e.m ? e.m() : e.call(null);
        a[6] = c;
        return a;
      }();
      return fk(f);
    };
  }(c));
  return b;
}
var vk = {}, wk = function wk(b, c, d) {
  if (b ? b.Ic : b) {
    return b.Ic(b, c, d);
  }
  var e;
  e = wk[n(null == b ? null : b)];
  if (!e && (e = wk._, !e)) {
    throw z("Mult.tap*", b);
  }
  return e.call(null, b, c, d);
}, xk = function xk(b, c) {
  if (b ? b.ec : b) {
    return b.ec(b, c);
  }
  var d;
  d = xk[n(null == b ? null : b)];
  if (!d && (d = xk._, !d)) {
    throw z("Mult.untap*", b);
  }
  return d.call(null, b, c);
}, yk = function yk(b) {
  var c = nf ? nf(Re) : mf.call(null, Re), d = function() {
    "undefined" === typeof uj && (uj = function(b, c, d, e) {
      this.ge = b;
      this.ch = c;
      this.Kc = d;
      this.de = e;
      this.g = 393216;
      this.r = 0;
    }, uj.prototype.D = function() {
      return function(b, c) {
        return new uj(this.ge, this.ch, this.Kc, c);
      };
    }(c), uj.prototype.C = function() {
      return function() {
        return this.de;
      };
    }(c), uj.prototype.ed = !0, uj.prototype.Ic = function() {
      return function(b, c, d) {
        jf.s(this.Kc, O, c, d);
        return null;
      };
    }(c), uj.prototype.ec = function() {
      return function(b, c) {
        jf.d(this.Kc, Hd, c);
        return null;
      };
    }(c), uj.Pb = !0, uj.Nb = "cljs.core.async/t21212", uj.fc = function() {
      return function(b, c) {
        return jc(c, "cljs.core.async/t21212");
      };
    }(c));
    return new uj(yk, b, c, Re);
  }(), e = ok.b(1), f = nf ? nf(null) : mf.call(null, null), h = function(b, c, d, e) {
    return function() {
      return 0 === jf.a(e, ee) ? rk(d, !0) : null;
    };
  }(c, d, e, f), k = ok.b(1);
  Tj(function(c, d, e, f, h, k) {
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
                      d[5] = h, kk(d), e = Z;
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
              var w = c[9], y = c[10], ya = c[11], Ea = c[12], Ia = C.a(w, y), Xa = sk(Ia, ya, k);
              c[12] = Ia;
              m = c;
              m[1] = v(Xa) ? 30 : 31;
              return Z;
            }
            if (1 === l) {
              var ab = m = c;
              ab[2] = null;
              ab[1] = 2;
              return Z;
            }
            if (24 === l) {
              var q = c[7], kb = c[2], Na = H(q), Ya = null, cb = 0, db = 0;
              c[13] = Na;
              c[14] = kb;
              c[15] = db;
              c[16] = cb;
              c[17] = Ya;
              var uc = m = c;
              uc[2] = null;
              uc[1] = 8;
              return Z;
            }
            if (39 === l) {
              var fd = m = c;
              fd[2] = null;
              fd[1] = 41;
              return Z;
            }
            if (4 === l) {
              var ya = c[11], qe = c[2], rn = null == qe;
              c[11] = qe;
              m = c;
              m[1] = v(rn) ? 5 : 6;
              return Z;
            }
            if (15 === l) {
              var Na = c[13], db = c[15], cb = c[16], Ya = c[17], Qg = c[2], Fn = Ya, Gn = cb, Hn = db + 1;
              c[13] = Na;
              c[18] = Qg;
              c[15] = Hn;
              c[16] = Gn;
              c[17] = Fn;
              var Wk = m = c;
              Wk[2] = null;
              Wk[1] = 8;
              return Z;
            }
            if (21 === l) {
              var In = c[2], Xk = m = c;
              Xk[2] = In;
              Xk[1] = 18;
              return Z;
            }
            if (31 === l) {
              var Ea = c[12], Jn = k(null), Kn = e.ec(null, Ea);
              c[19] = Jn;
              var Yk = m = c;
              Yk[2] = Kn;
              Yk[1] = 32;
              return Z;
            }
            if (32 === l) {
              var w = c[9], Xc = c[20], Yc = c[21], y = c[10], Ln = c[2], Mn = Xc, Nn = Yc, On = y + 1;
              c[9] = w;
              c[20] = Mn;
              c[22] = Ln;
              c[21] = Nn;
              c[10] = On;
              var Zk = m = c;
              Zk[2] = null;
              Zk[1] = 25;
              return Z;
            }
            if (40 === l) {
              var $k = c[23], Pn = k(null), Qn = e.ec(null, $k);
              c[24] = Pn;
              var al = m = c;
              al[2] = Qn;
              al[1] = 41;
              return Z;
            }
            if (33 === l) {
              var Zc = c[25], Rn = Td(Zc), m = c;
              m[1] = Rn ? 36 : 37;
              return Z;
            }
            if (13 === l) {
              var Ki = c[26], Sn = yj(Ki), bl = m = c;
              bl[2] = Sn;
              bl[1] = 15;
              return Z;
            }
            if (22 === l) {
              var t = c[8], Tn = yj(t), cl = m = c;
              cl[2] = Tn;
              cl[1] = 24;
              return Z;
            }
            if (36 === l) {
              var Zc = c[25], dl = tc(Zc), Un = vc(Zc), Vn = M(dl), Xc = Un, w = dl, Yc = Vn, y = 0;
              c[9] = w;
              c[20] = Xc;
              c[21] = Yc;
              c[10] = y;
              var el = m = c;
              el[2] = null;
              el[1] = 25;
              return Z;
            }
            if (41 === l) {
              var Zc = c[25], Wn = c[2], Xc = H(Zc), w = null, y = Yc = 0;
              c[9] = w;
              c[20] = Xc;
              c[27] = Wn;
              c[21] = Yc;
              c[10] = y;
              var fl = m = c;
              fl[2] = null;
              fl[1] = 25;
              return Z;
            }
            if (43 === l) {
              var gl = m = c;
              gl[2] = null;
              gl[1] = 44;
              return Z;
            }
            if (29 === l) {
              var Xn = c[2], hl = m = c;
              hl[2] = Xn;
              hl[1] = 26;
              return Z;
            }
            if (44 === l) {
              c[28] = c[2];
              var il = m = c;
              il[2] = null;
              il[1] = 2;
              return Z;
            }
            if (6 === l) {
              var jl = c[29], Yn = I.b ? I.b(d) : I.call(null, d), Li = wg(Yn), kl = M(Li), Zn = qf.a ? qf.a(h, kl) : qf.call(null, h, kl), Xc = D(Li), w = null, y = Yc = 0;
              c[9] = w;
              c[20] = Xc;
              c[21] = Yc;
              c[10] = y;
              c[30] = Zn;
              c[29] = Li;
              var ll = m = c;
              ll[2] = null;
              ll[1] = 25;
              return Z;
            }
            if (28 === l) {
              var Xc = c[20], Zc = c[25], ml = D(Xc);
              c[25] = ml;
              m = c;
              m[1] = ml ? 33 : 34;
              return Z;
            }
            if (25 === l) {
              var Yc = c[21], y = c[10], $n = y < Yc, m = c;
              m[1] = v($n) ? 27 : 28;
              return Z;
            }
            if (34 === l) {
              var nl = m = c;
              nl[2] = null;
              nl[1] = 35;
              return Z;
            }
            if (17 === l) {
              var ol = m = c;
              ol[2] = null;
              ol[1] = 18;
              return Z;
            }
            if (3 === l) {
              var ao = c[2], m = c;
              return ik(m, ao);
            }
            if (12 === l) {
              var bo = c[2], pl = m = c;
              pl[2] = bo;
              pl[1] = 9;
              return Z;
            }
            if (2 === l) {
              return m = c, gk(m, 4, b);
            }
            if (23 === l) {
              var ql = m = c;
              ql[2] = null;
              ql[1] = 24;
              return Z;
            }
            if (35 === l) {
              var co = c[2], rl = m = c;
              rl[2] = co;
              rl[1] = 29;
              return Z;
            }
            if (19 === l) {
              var q = c[7], sl = tc(q), eo = vc(q), fo = M(sl), Na = eo, Ya = sl, cb = fo, db = 0;
              c[13] = Na;
              c[15] = db;
              c[16] = cb;
              c[17] = Ya;
              var tl = m = c;
              tl[2] = null;
              tl[1] = 8;
              return Z;
            }
            if (11 === l) {
              var Na = c[13], q = c[7], ul = D(Na);
              c[7] = ul;
              m = c;
              m[1] = ul ? 16 : 17;
              return Z;
            }
            if (9 === l) {
              var go = c[2], vl = m = c;
              vl[2] = go;
              vl[1] = 7;
              return Z;
            }
            if (5 === l) {
              var ho = I.b ? I.b(d) : I.call(null, d), Na = D(ho), Ya = null, db = cb = 0;
              c[13] = Na;
              c[15] = db;
              c[16] = cb;
              c[17] = Ya;
              var wl = m = c;
              wl[2] = null;
              wl[1] = 8;
              return Z;
            }
            if (14 === l) {
              var xl = m = c;
              xl[2] = null;
              xl[1] = 15;
              return Z;
            }
            if (45 === l) {
              var io = c[2], yl = m = c;
              yl[2] = io;
              yl[1] = 44;
              return Z;
            }
            if (26 === l) {
              var jl = c[29], jo = c[2], ko = D(jl);
              c[31] = jo;
              m = c;
              m[1] = ko ? 42 : 43;
              return Z;
            }
            if (16 === l) {
              var q = c[7], lo = Td(q), m = c;
              m[1] = lo ? 19 : 20;
              return Z;
            }
            if (38 === l) {
              var mo = c[2], zl = m = c;
              zl[2] = mo;
              zl[1] = 35;
              return Z;
            }
            if (30 === l) {
              var Al = m = c;
              Al[2] = null;
              Al[1] = 32;
              return Z;
            }
            if (10 === l) {
              var db = c[15], Ya = c[17], Bl = C.a(Ya, db), Ki = N(Bl, 0), no = N(Bl, 1);
              c[26] = Ki;
              m = c;
              m[1] = v(no) ? 13 : 14;
              return Z;
            }
            if (18 === l) {
              var oo = c[2], Cl = m = c;
              Cl[2] = oo;
              Cl[1] = 12;
              return Z;
            }
            if (42 === l) {
              return m = c, gk(m, 45, f);
            }
            if (37 === l) {
              var Zc = c[25], $k = c[23], ya = c[11], Dl = F(Zc), po = sk(Dl, ya, k);
              c[23] = Dl;
              m = c;
              m[1] = v(po) ? 39 : 40;
              return Z;
            }
            if (8 === l) {
              var db = c[15], cb = c[16], qo = db < cb, m = c;
              m[1] = v(qo) ? 10 : 11;
              return Z;
            }
            return null;
          };
        }(c, d, e, f, h, k), c, d, e, f, h, k);
      }(), y = function() {
        var b = w.m ? w.m() : w.call(null);
        b[6] = c;
        return b;
      }();
      return fk(y);
    };
  }(k, c, d, e, f, h));
  return d;
};
function zk(a, b) {
  wk(a, b, !0);
  return b;
}
function Ak(a) {
  a = $f(a);
  var b = ok.b(null), c = M(a), d = De(c), e = ok.b(1), f = nf ? nf(null) : mf.call(null, null), h = Ff.a(function(a, b, c, d, e, f) {
    return function(h) {
      return function(a, b, c, d, e, f) {
        return function(a) {
          d[h] = a;
          return 0 === jf.a(f, ee) ? rk(e, d.slice(0)) : null;
        };
      }(a, b, c, d, e, f);
    };
  }(a, b, c, d, e, f), new Gh(null, 0, c, 1, null)), k = ok.b(1);
  Tj(function(a, b, c, d, e, f, h, k) {
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
                      c[5] = f, kk(c), d = Z;
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
              return e = yj(c), a[2] = e, a[1] = 15, Z;
            }
            if (6 === e) {
              return a[2] = null, a[1] = 11, Z;
            }
            if (3 === e) {
              return e = a[2], ik(a, e);
            }
            if (12 === e) {
              var e = a[8], e = a[2], m = bf(ib, e);
              a[8] = e;
              a[1] = v(m) ? 13 : 14;
              return Z;
            }
            return 2 === e ? (e = qf.a ? qf.a(h, d) : qf.call(null, h, d), l = 0, a[7] = l, a[9] = e, a[2] = null, a[1] = 4, Z) : 11 === e ? (l = a[7], a[4] = new jk(10, Object, null, 9, a[4], null, null, null), e = function() {
              var a = l;
              return b.b ? b.b(a) : b.call(null, a);
            }(), m = function() {
              var a = l;
              return k.b ? k.b(a) : k.call(null, a);
            }(), e = pk(e, m), a[2] = e, kk(a), Z) : 9 === e ? (l = a[7], e = a[2], a[7] = l + 1, a[10] = e, a[2] = null, a[1] = 4, Z) : 5 === e ? (a[11] = a[2], gk(a, 12, f)) : 14 === e ? (e = a[8], e = Ke(ag, e), hk(a, 16, c, e)) : 16 === e ? (a[12] = a[2], a[2] = null, a[1] = 2, Z) : 10 === e ? (m = a[2], e = jf.a(h, ee), a[13] = m, a[2] = e, kk(a), Z) : 8 === e ? (e = a[2], a[2] = e, a[1] = 5, Z) : null;
          };
        }(a, b, c, d, e, f, h, k), a, b, c, d, e, f, h, k);
      }(), G = function() {
        var b = A.m ? A.m() : A.call(null);
        b[6] = a;
        return b;
      }();
      return fk(G);
    };
  }(k, a, b, c, d, e, f, h));
  return b;
}
;function Bk(a) {
  return a.b ? a.b(0) : a.call(null, 0);
}
function Ck(a) {
  return ti.b(Ld(a)).call(null, Bk(a));
}
function Dk(a) {
  var b = N(a, 0), c = N(a, 1), d = Xd(c) ? Ke(of, c) : c, e = Ed(d, Ri), c = Ed(d, pi), f = Ed(d, bj), h = Ed(d, vi), d = Ed(d, dj);
  return v(f) ? (f = Md(f), v(d) ? (d = U, b = Ge.a(e, J(b, h)), b = Si.b(Ld(a)).call(null, f, b), c = new T(null, 2, 5, d, [b, v(c) ? O.d(c, dj, !0) : c], null)) : c = new T(null, 2, 5, U, [f, c], null), vd(c, Ld(a))) : null;
}
function Ek(a) {
  var b = N(a, 0), c = N(a, 1), c = Xd(c) ? Ke(of, c) : c, d = Ed(c, Ri), e = Ed(c, vi), f = N(e, 0), h = ie(e);
  return v(v(c) ? e : c) ? vd(new T(null, 2, 5, U, [f, O.k(c, Ri, Ad.a(d, b), K([vi, h], 0))], null), Ld(a)) : null;
}
function Fk(a) {
  if (Wc.a(lj, a.b ? a.b(1) : a.call(null, 1))) {
    return a;
  }
  var b;
  b = Ck(a);
  if (v(b)) {
    if (v(Ck(a))) {
      b = N(a, 0);
      var c = N(a, 1), d;
      if (v(Ck(a))) {
        d = wi.b(Ld(a)).call(null, Bk(a));
      } else {
        throw "called children on a leaf node";
      }
      var e = N(d, 0), f = ie(d);
      b = v(d) ? vd(new T(null, 2, 5, U, [e, new $a(null, 4, [Ri, Bd, bj, v(c) ? Ad.a(bj.b(c), b) : new T(null, 1, 5, U, [b], null), pi, c, vi, f], null)], null), Ld(a)) : null;
    } else {
      b = null;
    }
  }
  if (v(b)) {
    return b;
  }
  b = Ek(a);
  if (v(b)) {
    return b;
  }
  for (;;) {
    if (v(Dk(a))) {
      b = Ek(Dk(a));
      if (v(b)) {
        return b;
      }
      a = Dk(a);
    } else {
      return new T(null, 2, 5, U, [Bk(a), lj], null);
    }
  }
}
;function Gk(a, b) {
  var c = Le(Dh, a, b);
  return J(c, Bf(function(a) {
    return function(b) {
      return a === b;
    };
  }(c), b));
}
var Hk = function Hk() {
  switch(arguments.length) {
    case 0:
      return Hk.m();
    case 1:
      return Hk.b(arguments[0]);
    case 2:
      return Hk.a(arguments[0], arguments[1]);
    default:
      return Hk.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Hk.m = function() {
  return wh;
};
Hk.b = function(a) {
  return a;
};
Hk.a = function(a, b) {
  return M(a) < M(b) ? tb(Ad, b, a) : tb(Ad, a, b);
};
Hk.k = function(a, b, c) {
  a = Gk(M, Ad.k(c, b, K([a], 0)));
  return tb(Ef, F(a), Uc(a));
};
Hk.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return Hk.k(b, a, c);
};
Hk.v = 2;
var Ik = function Ik() {
  switch(arguments.length) {
    case 1:
      return Ik.b(arguments[0]);
    case 2:
      return Ik.a(arguments[0], arguments[1]);
    default:
      return Ik.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Ik.b = function(a) {
  return a;
};
Ik.a = function(a, b) {
  for (;;) {
    if (M(b) < M(a)) {
      var c = a;
      a = b;
      b = c;
    } else {
      return tb(function(a, b) {
        return function(a, c) {
          return Zd(b, c) ? a : Nd.a(a, c);
        };
      }(a, b), a, a);
    }
  }
};
Ik.k = function(a, b, c) {
  a = Gk(function(a) {
    return-M(a);
  }, Ad.k(c, b, K([a], 0)));
  return tb(Ik, F(a), Uc(a));
};
Ik.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return Ik.k(b, a, c);
};
Ik.v = 2;
var Jk = function Jk() {
  switch(arguments.length) {
    case 1:
      return Jk.b(arguments[0]);
    case 2:
      return Jk.a(arguments[0], arguments[1]);
    default:
      return Jk.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Jk.b = function(a) {
  return a;
};
Jk.a = function(a, b) {
  return M(a) < M(b) ? tb(function(a, d) {
    return Zd(b, d) ? Nd.a(a, d) : a;
  }, a, a) : tb(Nd, a, b);
};
Jk.k = function(a, b, c) {
  return tb(Jk, a, Ad.a(c, b));
};
Jk.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return Jk.k(b, a, c);
};
Jk.v = 2;
function Kk(a, b) {
  return Jk.a(a, xh([b]));
}
function Lk(a) {
  if (Od(a)) {
    throw Error([B("Assert failed: "), B(Sh(K([pe(new Rc(null, "not", "not", 1044554643, null), pe(new Rc(null, "empty?", "empty?", 76408555, null), new Rc(null, "s", "s", -948495851, null)))], 0)))].join(""));
  }
  var b = F(a);
  return new T(null, 2, 5, U, [b, Kk(a, b)], null);
}
function Mk(a) {
  var b = Ah(wg(a));
  a = Ke(Hk, xg(a));
  return Jk.a(b, a);
}
function Nk(a) {
  var b = Ke(Hk, xg(a));
  return tb(function() {
    return function(a, b) {
      return v(Ed(a, b)) ? a : O.d(a, b, wh);
    };
  }(b), a, b);
}
function Ok(a) {
  return Pk(Nk(a), Bd, Mk(a));
}
function Pk(a, b, c) {
  for (;;) {
    if (Od(c)) {
      return af(Od, xg(a)) ? b : null;
    }
    var d = Lk(c), e = N(d, 0), f = N(d, 1), h = function() {
      var b = e;
      return a.b ? a.b(b) : a.call(null, b);
    }();
    c = d = tb(function(a, b, c, d, e) {
      return function(a, b) {
        return Hf.s(a, new T(null, 1, 5, U, [e], null), Kk, b);
      };
    }(a, b, c, d, e, f, h), a, h);
    b = Ad.a(b, e);
    f = Hk.a(f, Ik.a(Mk(d), h));
    a = c;
    c = f;
  }
}
;function Qk(a, b) {
  var c = ok.b(1);
  Tj(function(c) {
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
                      c[5] = f, kk(c), d = Z;
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
            return 1 === d ? (c[2] = null, c[1] = 2, Z) : 2 === d ? gk(c, 4, b) : 3 === d ? (d = c[2], ik(c, d)) : 4 === d ? (d = c[7], d = c[2], c[7] = d, c[1] = v(null == d) ? 5 : 6, Z) : 5 === d ? (c[2] = null, c[1] = 7, Z) : 6 === d ? (d = c[7], d = a.b ? a.b(d) : a.call(null, d), c[8] = d, c[2] = null, c[1] = 2, Z) : 7 === d ? (d = c[2], c[2] = d, c[1] = 3, Z) : null;
          };
        }(c), c);
      }(), f = function() {
        var a = e.m ? e.m() : e.call(null);
        a[6] = c;
        return a;
      }();
      return fk(f);
    };
  }(c));
}
;var Rk = function Rk(b) {
  if (b ? b.Oc : b) {
    return b.value;
  }
  var c;
  c = Rk[n(null == b ? null : b)];
  if (!c && (c = Rk._, !c)) {
    throw z("BoxedValueProtocol.value", b);
  }
  return c.call(null, b);
}, Sk = function Sk(b) {
  if (b ? b.$d : b) {
    return b.jb;
  }
  var c;
  c = Sk[n(null == b ? null : b)];
  if (!c && (c = Sk._, !c)) {
    throw z("EventProtocol.topic", b);
  }
  return c.call(null, b);
}, Tk = function Tk(b) {
  if (b ? b.Zd : b) {
    return b.timestamp;
  }
  var c;
  c = Tk[n(null == b ? null : b)];
  if (!c && (c = Tk._, !c)) {
    throw z("EventProtocol.timestamp", b);
  }
  return c.call(null, b);
}, Uk = function Uk(b, c) {
  if (b ? b.qd : b) {
    return b.qd(0, c);
  }
  var d;
  d = Uk[n(null == b ? null : b)];
  if (!d && (d = Uk._, !d)) {
    throw z("EventProtocol.record-timestamp", b);
  }
  return d.call(null, b, c);
}, Vk = function Vk(b) {
  if (b ? b.Pc : b) {
    return b.Pc(b);
  }
  var c;
  c = Vk[n(null == b ? null : b)];
  if (!c && (c = Vk._, !c)) {
    throw z("MessageProtocol.fresh?", b);
  }
  return c.call(null, b);
};
function El(a, b, c, d, e, f) {
  this.jb = a;
  this.value = b;
  this.timestamp = c;
  this.p = d;
  this.j = e;
  this.i = f;
  this.g = 2229667594;
  this.r = 8192;
}
g = El.prototype;
g.$d = function() {
  return this.jb;
};
g.Zd = function() {
  return this.timestamp;
};
g.qd = function(a, b) {
  return O.d(this, oj, b);
};
g.w = function(a, b) {
  return Ib.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.la : null) {
    case "topic":
      return this.jb;
    case "value":
      return this.value;
    case "timestamp":
      return this.timestamp;
    default:
      return Fd(this.j, b, c);
  }
};
g.A = function(a, b, c) {
  return Jh(b, function() {
    return function(a) {
      return Jh(b, W, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.Event{", ", ", "}", c, Ge.a(new T(null, 3, 5, U, [new T(null, 2, 5, U, [Qi, this.jb], null), new T(null, 2, 5, U, [Hi, this.value], null), new T(null, 2, 5, U, [oj, this.timestamp], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 3 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = je(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? og(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.Oc = function() {
  return this.value;
};
g.Aa = function(a, b) {
  return Zd(new uh(null, new $a(null, 3, [Hi, null, Qi, null, oj, null], null), null), b) ? Hd.a(vd(Ef.a(Re, this), this.p), b) : new El(this.jb, this.value, this.timestamp, this.p, Pe(Hd.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return v(R.a ? R.a(Qi, b) : R.call(null, Qi, b)) ? new El(c, this.value, this.timestamp, this.p, this.j, null) : v(R.a ? R.a(Hi, b) : R.call(null, Hi, b)) ? new El(this.jb, c, this.timestamp, this.p, this.j, null) : v(R.a ? R.a(oj, b) : R.call(null, oj, b)) ? new El(this.jb, this.value, c, this.p, this.j, null) : new El(this.jb, this.value, this.timestamp, this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(Ge.a(new T(null, 3, 5, U, [new T(null, 2, 5, U, [Qi, this.jb], null), new T(null, 2, 5, U, [Hi, this.value], null), new T(null, 2, 5, U, [oj, this.timestamp], null)], null), this.j));
};
g.D = function(a, b) {
  return new El(this.jb, this.value, this.timestamp, b, this.j, this.i);
};
g.G = function(a, b) {
  return Sd(b) ? Kb(this, C.a(b, 0), C.a(b, 1)) : tb(Bb, this, b);
};
function Fl(a, b) {
  return new El(a, b, null, null, null, null);
}
function Gl(a, b, c, d) {
  this.value = a;
  this.p = b;
  this.j = c;
  this.i = d;
  this.g = 2229667594;
  this.r = 8192;
}
g = Gl.prototype;
g.w = function(a, b) {
  return Ib.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.la : null) {
    case "value":
      return this.value;
    default:
      return Fd(this.j, b, c);
  }
};
g.A = function(a, b, c) {
  return Jh(b, function() {
    return function(a) {
      return Jh(b, W, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.Fresh{", ", ", "}", c, Ge.a(new T(null, 1, 5, U, [new T(null, 2, 5, U, [Hi, this.value], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 1 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = je(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? og(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.Oc = function() {
  return this.value;
};
g.Pc = function() {
  return!0;
};
g.Aa = function(a, b) {
  return Zd(new uh(null, new $a(null, 1, [Hi, null], null), null), b) ? Hd.a(vd(Ef.a(Re, this), this.p), b) : new Gl(this.value, this.p, Pe(Hd.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return v(R.a ? R.a(Hi, b) : R.call(null, Hi, b)) ? new Gl(c, this.p, this.j, null) : new Gl(this.value, this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(Ge.a(new T(null, 1, 5, U, [new T(null, 2, 5, U, [Hi, this.value], null)], null), this.j));
};
g.D = function(a, b) {
  return new Gl(this.value, b, this.j, this.i);
};
g.G = function(a, b) {
  return Sd(b) ? Kb(this, C.a(b, 0), C.a(b, 1)) : tb(Bb, this, b);
};
function Hl(a, b, c, d) {
  this.value = a;
  this.p = b;
  this.j = c;
  this.i = d;
  this.g = 2229667594;
  this.r = 8192;
}
g = Hl.prototype;
g.w = function(a, b) {
  return Ib.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.la : null) {
    case "value":
      return this.value;
    default:
      return Fd(this.j, b, c);
  }
};
g.A = function(a, b, c) {
  return Jh(b, function() {
    return function(a) {
      return Jh(b, W, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.Cached{", ", ", "}", c, Ge.a(new T(null, 1, 5, U, [new T(null, 2, 5, U, [Hi, this.value], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 1 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = je(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? og(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.Oc = function() {
  return this.value;
};
g.Pc = function() {
  return!1;
};
g.Aa = function(a, b) {
  return Zd(new uh(null, new $a(null, 1, [Hi, null], null), null), b) ? Hd.a(vd(Ef.a(Re, this), this.p), b) : new Hl(this.value, this.p, Pe(Hd.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return v(R.a ? R.a(Hi, b) : R.call(null, Hi, b)) ? new Hl(c, this.p, this.j, null) : new Hl(this.value, this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(Ge.a(new T(null, 1, 5, U, [new T(null, 2, 5, U, [Hi, this.value], null)], null), this.j));
};
g.D = function(a, b) {
  return new Hl(this.value, b, this.j, this.i);
};
g.G = function(a, b) {
  return Sd(b) ? Kb(this, C.a(b, 0), C.a(b, 1)) : tb(Bb, this, b);
};
function Il(a) {
  return new Gl(a, null, null, null);
}
function Jl(a) {
  return new Hl(a, null, null, null);
}
var Kl = ff(Wh, zf(Vk), S.b(Rk)), Ll = {}, Ml = function Ml(b) {
  if (b ? b.td : b) {
    return b.td();
  }
  var c;
  c = Ml[n(null == b ? null : b)];
  if (!c && (c = Ml._, !c)) {
    throw z("SignalProtocol.signal-deps", b);
  }
  return c.call(null, b);
}, Nl = function Nl(b) {
  if (b ? b.ud : b) {
    return b.ud();
  }
  var c;
  c = Nl[n(null == b ? null : b)];
  if (!c && (c = Nl._, !c)) {
    throw z("SignalProtocol.topsort", b);
  }
  return c.call(null, b);
};
function Ol(a) {
  return a ? v(v(null) ? null : a.ae) ? !0 : a.Ob ? !1 : x(Ll, a) : x(Ll, a);
}
function Pl(a) {
  return tb(function(a, c) {
    var d = aj.b(c);
    return v(d) ? O.d(a, d, Ad.a(Fd(a, d, Bd), c)) : a;
  }, Re, a);
}
function Ql(a, b) {
  var c = function(a) {
    return function(b) {
      return Ef.d(Bh(), S.b(a), b);
    };
  }(Ch(b, new Gh(null, 0, Number.MAX_VALUE, 1, null)));
  return Ch(wg(a), S.a(c, xg(a)));
}
function Rl(a, b, c, d, e, f, h, k) {
  this.eb = a;
  this.ab = b;
  this.kb = c;
  this.$a = d;
  this.Za = e;
  this.p = f;
  this.j = h;
  this.i = k;
  this.g = 2229667594;
  this.r = 8192;
}
g = Rl.prototype;
g.w = function(a, b) {
  return Ib.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.la : null) {
    case "parents-map":
      return this.eb;
    case "kids-map":
      return this.ab;
    case "topsort":
      return this.kb;
    case "kid-indexes-map":
      return this.$a;
    case "inputs-by-topic":
      return this.Za;
    default:
      return Fd(this.j, b, c);
  }
};
g.A = function(a, b, c) {
  return Jh(b, function() {
    return function(a) {
      return Jh(b, W, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata{", ", ", "}", c, Ge.a(new T(null, 5, 5, U, [new T(null, 2, 5, U, [mj, this.eb], null), new T(null, 2, 5, U, [Ai, this.ab], null), new T(null, 2, 5, U, [ij, this.kb], null), new T(null, 2, 5, U, [Ji, this.$a], null), new T(null, 2, 5, U, [jj, this.Za], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 5 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = je(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? og(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.Aa = function(a, b) {
  return Zd(new uh(null, new $a(null, 5, [Ai, null, Ji, null, ij, null, jj, null, mj, null], null), null), b) ? Hd.a(vd(Ef.a(Re, this), this.p), b) : new Rl(this.eb, this.ab, this.kb, this.$a, this.Za, this.p, Pe(Hd.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return v(R.a ? R.a(mj, b) : R.call(null, mj, b)) ? new Rl(c, this.ab, this.kb, this.$a, this.Za, this.p, this.j, null) : v(R.a ? R.a(Ai, b) : R.call(null, Ai, b)) ? new Rl(this.eb, c, this.kb, this.$a, this.Za, this.p, this.j, null) : v(R.a ? R.a(ij, b) : R.call(null, ij, b)) ? new Rl(this.eb, this.ab, c, this.$a, this.Za, this.p, this.j, null) : v(R.a ? R.a(Ji, b) : R.call(null, Ji, b)) ? new Rl(this.eb, this.ab, this.kb, c, this.Za, this.p, this.j, null) : v(R.a ? R.a(jj, b) : R.call(null, jj, 
  b)) ? new Rl(this.eb, this.ab, this.kb, this.$a, c, this.p, this.j, null) : new Rl(this.eb, this.ab, this.kb, this.$a, this.Za, this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(Ge.a(new T(null, 5, 5, U, [new T(null, 2, 5, U, [mj, this.eb], null), new T(null, 2, 5, U, [Ai, this.ab], null), new T(null, 2, 5, U, [ij, this.kb], null), new T(null, 2, 5, U, [Ji, this.$a], null), new T(null, 2, 5, U, [jj, this.Za], null)], null), this.j));
};
g.D = function(a, b) {
  return new Rl(this.eb, this.ab, this.kb, this.$a, this.Za, b, this.j, this.i);
};
g.G = function(a, b) {
  return Sd(b) ? Kb(this, C.a(b, 0), C.a(b, 1)) : tb(Bb, this, b);
};
function Sl(a, b, c, d, e) {
  return new Rl(a, b, c, d, e, null, null, null);
}
function Tl(a) {
  var b = new Uh(function() {
    var b;
    a: {
      b = Re;
      for (var c = new Bg([a, wh]), d = vd(new T(null, 2, 5, U, [a, null], null), new $a(null, 3, [ti, df(!0), wi, ef(D, Ml), Si, null], null));;) {
        var e;
        e = d;
        e = Wc.a(lj, e.b ? e.b(1) : e.call(null, 1));
        if (v(e)) {
          b = new $a(null, 2, [mj, b, Ai, c], null);
          break a;
        }
        if (Zd(b, Bk(d))) {
          b: {
            if (e = Ek(d), v(e)) {
              d = e;
            } else {
              for (;;) {
                if (v(Dk(d))) {
                  e = Ek(Dk(d));
                  if (v(e)) {
                    d = e;
                    break b;
                  }
                  d = Dk(d);
                } else {
                  d = new T(null, 2, 5, U, [Bk(d), lj], null);
                  break b;
                }
              }
            }
          }
        } else {
          e = Bk(d);
          var f = Ml(e), d = Fk(d);
          b = O.d(b, e, f);
          c = th.k(Hk, K([c, Ch(f, yf(xh([e])))], 0));
        }
      }
    }
    return b;
  }, null), c = new Uh(function(a) {
    return function() {
      return mj.b(I.b ? I.b(a) : I.call(null, a));
    };
  }(b), null), d = new Uh(function(a) {
    return function() {
      return Ai.b(I.b ? I.b(a) : I.call(null, a));
    };
  }(b, c), null), e = new Uh(function(a, b) {
    return function() {
      var a = I.b ? I.b(b) : I.call(null, b);
      return Ef.a(Bd, oe(Ok(a)));
    };
  }(b, c, d), null), f = new Uh(function(a, b, c, d) {
    return function() {
      return Pl(I.b ? I.b(d) : I.call(null, d));
    };
  }(b, c, d, e), null);
  return vd(a, Sl(c, d, e, new Uh(function(a, b, c, d) {
    return function() {
      return Ql(I.b ? I.b(c) : I.call(null, c), I.b ? I.b(d) : I.call(null, d));
    };
  }(b, c, d, e, f), null), f));
}
function Ul() {
  return Vl(arguments[0], arguments[1], 2 < arguments.length ? new E(Array.prototype.slice.call(arguments, 2), 0) : null);
}
function Vl(a, b, c) {
  if (null == b) {
    throw Error([B("Assert failed: "), B("This signal is not a valid write-port, use the `jamesmacaulay.zelkova.signal/write-port` constructor if you want to treat this signal like a channel."), B("\n"), B(Sh(K([pe(new Rc(null, "not", "not", 1044554643, null), pe(new Rc(null, "nil?", "nil?", 1612038930, null), new Rc(null, "ch", "ch", 1085813622, null)))], 0)))].join(""));
  }
  return Le(a, b, c);
}
function Wl(a, b, c, d, e, f, h, k, l, m) {
  this.Ka = a;
  this.Ea = b;
  this.Na = c;
  this.La = d;
  this.Ba = e;
  this.Ja = f;
  this.ya = h;
  this.p = k;
  this.j = l;
  this.i = m;
  this.g = 2229667594;
  this.r = 8192;
}
g = Wl.prototype;
g.w = function(a, b) {
  return Ib.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.la : null) {
    case "init-fn":
      return this.Ka;
    case "sources":
      return this.Ea;
    case "relayed-event-topic":
      return this.Na;
    case "msg-xform":
      return this.La;
    case "deps":
      return this.Ba;
    case "event-sources":
      return this.Ja;
    case "write-port-channel":
      return this.ya;
    default:
      return Fd(this.j, b, c);
  }
};
g.Lb = function() {
  return Ul(yj, this.ya);
};
g.A = function(a, b, c) {
  return Jh(b, function() {
    return function(a) {
      return Jh(b, W, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.SignalDefinition{", ", ", "}", c, Ge.a(new T(null, 7, 5, U, [new T(null, 2, 5, U, [Wi, this.Ka], null), new T(null, 2, 5, U, [Ei, this.Ea], null), new T(null, 2, 5, U, [aj, this.Na], null), new T(null, 2, 5, U, [pj, this.La], null), new T(null, 2, 5, U, [sj, this.Ba], null), new T(null, 2, 5, U, [qi, this.Ja], null), new T(null, 2, 5, U, [Vi, this.ya], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 7 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = je(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? og(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.ae = !0;
g.td = function() {
  var a = this.Ba;
  return Ef.d(wh, zf(Ol), v(a) ? a : this.Ea);
};
g.ud = function() {
  var a = ij.b(Ld(this));
  return I.b ? I.b(a) : I.call(null, a);
};
g.Mb = function(a, b, c) {
  return Vl(xj, this.ya, K([b, c], 0));
};
g.Aa = function(a, b) {
  return Zd(new uh(null, new $a(null, 7, [qi, null, Ei, null, Vi, null, Wi, null, aj, null, pj, null, sj, null], null), null), b) ? Hd.a(vd(Ef.a(Re, this), this.p), b) : new Wl(this.Ka, this.Ea, this.Na, this.La, this.Ba, this.Ja, this.ya, this.p, Pe(Hd.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return v(R.a ? R.a(Wi, b) : R.call(null, Wi, b)) ? new Wl(c, this.Ea, this.Na, this.La, this.Ba, this.Ja, this.ya, this.p, this.j, null) : v(R.a ? R.a(Ei, b) : R.call(null, Ei, b)) ? new Wl(this.Ka, c, this.Na, this.La, this.Ba, this.Ja, this.ya, this.p, this.j, null) : v(R.a ? R.a(aj, b) : R.call(null, aj, b)) ? new Wl(this.Ka, this.Ea, c, this.La, this.Ba, this.Ja, this.ya, this.p, this.j, null) : v(R.a ? R.a(pj, b) : R.call(null, pj, b)) ? new Wl(this.Ka, this.Ea, this.Na, c, this.Ba, this.Ja, 
  this.ya, this.p, this.j, null) : v(R.a ? R.a(sj, b) : R.call(null, sj, b)) ? new Wl(this.Ka, this.Ea, this.Na, this.La, c, this.Ja, this.ya, this.p, this.j, null) : v(R.a ? R.a(qi, b) : R.call(null, qi, b)) ? new Wl(this.Ka, this.Ea, this.Na, this.La, this.Ba, c, this.ya, this.p, this.j, null) : v(R.a ? R.a(Vi, b) : R.call(null, Vi, b)) ? new Wl(this.Ka, this.Ea, this.Na, this.La, this.Ba, this.Ja, c, this.p, this.j, null) : new Wl(this.Ka, this.Ea, this.Na, this.La, this.Ba, this.Ja, this.ya, 
  this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(Ge.a(new T(null, 7, 5, U, [new T(null, 2, 5, U, [Wi, this.Ka], null), new T(null, 2, 5, U, [Ei, this.Ea], null), new T(null, 2, 5, U, [aj, this.Na], null), new T(null, 2, 5, U, [pj, this.La], null), new T(null, 2, 5, U, [sj, this.Ba], null), new T(null, 2, 5, U, [qi, this.Ja], null), new T(null, 2, 5, U, [Vi, this.ya], null)], null), this.j));
};
g.D = function(a, b) {
  return new Wl(this.Ka, this.Ea, this.Na, this.La, this.Ba, this.Ja, this.ya, b, this.j, this.i);
};
g.G = function(a, b) {
  return Sd(b) ? Kb(this, C.a(b, 0), C.a(b, 1)) : tb(Bb, this, b);
};
function Xl(a) {
  var b = aj.b(a);
  return v(b) ? O.k(a, Ei, new T(null, 1, 5, U, [Gi], null), K([pj, ef(S.b(function(a) {
    return function(b) {
      var e = N(b, 0);
      N(b, 1);
      N(b, 2);
      return Wc.a(a, Sk(e)) ? Il(Rk(e)) : null;
    };
  }(b, b)), zf(cf(ib)))], 0)) : a;
}
function Yl(a) {
  a = Xl(a);
  a = new Wl(Wi.b(a), Ei.b(a), aj.b(a), pj.b(a), sj.b(a), qi.b(a), Vi.b(a), null, Hd.k(a, Wi, K([Ei, aj, pj, sj, qi, Vi], 0)), null);
  return Tl(a);
}
function Zl(a) {
  if (1 >= M(a)) {
    return a;
  }
  var b = function(a) {
    return function(b) {
      return Ef.d(Bd, ef(Wh, tf(a)), new T(null, 2, 5, U, [b, yf(Jl(Rk(zd(b))))], null));
    };
  }(be(fe, S.a(M, a)));
  return S.a(b, a);
}
function $l(a) {
  return Le(S, ag, a);
}
function am(a) {
  return function(a) {
    return function(c, d) {
      var e = $l(Zl(d)), e = tb(function(a, b) {
        return function(a, c) {
          var d = N(c, 0), e = ie(c), f = Rk(Md(a)), e = $f(e), d = b(new T(null, 3, 5, U, [d, f, e], null));
          return Ef.a(a, d);
        };
      }(e, a), new T(null, 1, 5, U, [new Hl(c, null, null, null)], null), e);
      return Wc.a(1, M(e)) ? e : cg(e, 1, M(e));
    };
  }(function(b) {
    return new $e(Ze(a, Xe(new T(null, 1, 5, U, [b], null))), null, null, null);
  });
}
function bm(a, b) {
  var c = Ed(a, b);
  return zk(c, ok.m());
}
function cm(a, b, c, d) {
  b = am(b);
  var e = ok.b(1);
  Tj(function(b, e) {
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
                      c[5] = f, kk(c), d = Z;
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
              var h = a;
              b[7] = h;
              b[2] = null;
              b[1] = 2;
              return Z;
            }
            return 2 === f ? gk(b, 4, c) : 3 === f ? (f = b[2], ik(b, f)) : 4 === f ? (f = b[8], f = b[2], b[8] = f, b[1] = v(null == f) ? 5 : 6, Z) : 5 === f ? (f = yj(d), b[2] = f, b[1] = 7, Z) : 6 === f ? (f = b[8], h = b[9], h = b[7], f = e.a ? e.a(h, f) : e.call(null, h, f), b[9] = f, hk(b, 8, d, f)) : 7 === f ? (f = b[2], b[2] = f, b[1] = 3, Z) : 8 === f ? (h = b[9], f = b[2], h = zd(h), h = Rk(h), b[10] = f, b[7] = h, b[2] = null, b[1] = 2, Z) : null;
          };
        }(b, e), b, e);
      }(), l = function() {
        var a = k.m ? k.m() : k.call(null);
        a[6] = b;
        return a;
      }();
      return fk(l);
    };
  }(e, b));
}
function dm(a, b, c, d) {
  var e = Xd(b) ? Ke(of, b) : b;
  b = Ed(e, Wi);
  var f = Ed(e, Ei), e = Ed(e, pj);
  a = Ef.d(new T(null, 1, 5, U, [bm(a, Gi)], null), S.b(gf(bm, a)), f);
  a = Ak(a);
  f = ok.m();
  cm(b.a ? b.a(c, d) : b.call(null, c, d), e, a, f);
  return yk(f);
}
function em(a, b, c, d) {
  return tb(function(a, b) {
    return O.d(a, b, dm(a, b, c, d));
  }, new $a(null, 1, [Gi, b], null), a);
}
function fm(a) {
  return Ef.d(Re, S.b(qi), a);
}
var gm = function gm(b) {
  if (b ? b.rd : b) {
    return b.rd();
  }
  var c;
  c = gm[n(null == b ? null : b)];
  if (!c && (c = gm._, !c)) {
    throw z("LiveChannelGraphProtocol.connect-to-world", b);
  }
  return c.call(null, b);
}, hm = function hm(b) {
  if (b ? b.sd : b) {
    return b.sd();
  }
  var c;
  c = hm[n(null == b ? null : b)];
  if (!c && (c = hm._, !c)) {
    throw z("LiveChannelGraphProtocol.init", b);
  }
  return c.call(null, b);
};
function im(a, b, c, d, e, f, h, k) {
  this.definition = a;
  this.wa = b;
  this.cb = c;
  this.Ma = d;
  this.Da = e;
  this.p = f;
  this.j = h;
  this.i = k;
  this.g = 2229667594;
  this.r = 8192;
}
g = im.prototype;
g.w = function(a, b) {
  return Ib.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.la : null) {
    case "definition":
      return this.definition;
    case "events-channel":
      return this.wa;
    case "mult-map":
      return this.cb;
    case "output-values-mult":
      return this.Ma;
    case "opts":
      return this.Da;
    default:
      return Fd(this.j, b, c);
  }
};
g.Lb = function() {
  return yj(this.wa);
};
g.A = function(a, b, c) {
  return Jh(b, function() {
    return function(a) {
      return Jh(b, W, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.LiveChannelGraph{", ", ", "}", c, Ge.a(new T(null, 5, 5, U, [new T(null, 2, 5, U, [si, this.definition], null), new T(null, 2, 5, U, [ri, this.wa], null), new T(null, 2, 5, U, [Ni, this.cb], null), new T(null, 2, 5, U, [Ui, this.Ma], null), new T(null, 2, 5, U, [$i, this.Da], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 5 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = je(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? og(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.rd = function() {
  for (var a = this, b = this, c = fm(Nl(a.definition)), c = D(xg(c)), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.O(null, f);
      tk(function() {
        var c = a.Da;
        return h.a ? h.a(b, c) : h.call(null, b, c);
      }(), a.wa);
      f += 1;
    } else {
      if (c = D(c)) {
        d = c;
        if (Td(d)) {
          c = tc(d), f = vc(d), d = c, e = M(c), c = f;
        } else {
          var k = F(d);
          tk(function() {
            var c = a.Da;
            return k.a ? k.a(b, c) : k.call(null, b, c);
          }(), a.wa);
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
g.sd = function() {
  return Wi.b(this.definition).call(null, this, this.Da);
};
g.Mb = function(a, b, c) {
  return xj(this.wa, b, c);
};
g.Aa = function(a, b) {
  return Zd(new uh(null, new $a(null, 5, [ri, null, si, null, Ni, null, Ui, null, $i, null], null), null), b) ? Hd.a(vd(Ef.a(Re, this), this.p), b) : new im(this.definition, this.wa, this.cb, this.Ma, this.Da, this.p, Pe(Hd.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return v(R.a ? R.a(si, b) : R.call(null, si, b)) ? new im(c, this.wa, this.cb, this.Ma, this.Da, this.p, this.j, null) : v(R.a ? R.a(ri, b) : R.call(null, ri, b)) ? new im(this.definition, c, this.cb, this.Ma, this.Da, this.p, this.j, null) : v(R.a ? R.a(Ni, b) : R.call(null, Ni, b)) ? new im(this.definition, this.wa, c, this.Ma, this.Da, this.p, this.j, null) : v(R.a ? R.a(Ui, b) : R.call(null, Ui, b)) ? new im(this.definition, this.wa, this.cb, c, this.Da, this.p, this.j, null) : v(R.a ? R.a($i, 
  b) : R.call(null, $i, b)) ? new im(this.definition, this.wa, this.cb, this.Ma, c, this.p, this.j, null) : new im(this.definition, this.wa, this.cb, this.Ma, this.Da, this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(Ge.a(new T(null, 5, 5, U, [new T(null, 2, 5, U, [si, this.definition], null), new T(null, 2, 5, U, [ri, this.wa], null), new T(null, 2, 5, U, [Ni, this.cb], null), new T(null, 2, 5, U, [Ui, this.Ma], null), new T(null, 2, 5, U, [$i, this.Da], null)], null), this.j));
};
g.D = function(a, b) {
  return new im(this.definition, this.wa, this.cb, this.Ma, this.Da, b, this.j, this.i);
};
g.ed = !0;
g.Ic = function(a, b, c) {
  return wk(this.Ma, b, c);
};
g.ec = function(a, b) {
  return xk(this.Ma, b);
};
g.G = function(a, b) {
  return Sd(b) ? Kb(this, C.a(b, 0), C.a(b, 1)) : tb(Bb, this, b);
};
var jm = function jm(b, c) {
  if (b ? b.Rc : b) {
    return b.Rc(b, c);
  }
  var d;
  d = jm[n(null == b ? null : b)];
  if (!d && (d = jm._, !d)) {
    throw z("SignalLike.spawn*", b);
  }
  return d.call(null, b, c);
}, km = function km(b, c, d) {
  if (b ? b.Qc : b) {
    return b.Qc(b, c, d);
  }
  var e;
  e = km[n(null == b ? null : b)];
  if (!e && (e = km._, !e)) {
    throw z("SignalLike.pipe-to-atom*", b);
  }
  return e.call(null, b, c, d);
}, lm = S.b(ef(gf(S, function(a) {
  return null == Tk(a) ? Uk(a, (new Date).valueOf()) : a;
}), function(a) {
  return Qd(a) ? a : null == a ? Bd : new T(null, 1, 5, U, [a], null);
}));
im.prototype.Rc = function(a, b) {
  return jm(qj.b(this), b);
};
im.prototype.Qc = function(a, b, c) {
  Qk(D(c) ? hf(b, c) : gf(qf, b), zk(this, ok.m()));
  return b;
};
Wl.prototype.Rc = function(a, b) {
  var c = ok.a(1, lm), d = yk(c), d = em(Nl(this), d, this, b), e = yk(zk(Ed(d, this), ok.a(1, Kl)));
  return gm(new im(this, c, d, e, b, null, null, null));
};
Wl.prototype.Qc = function(a, b, c) {
  return km(jm(this, null), b, c);
};
if ("undefined" === typeof ni) {
  var ni = function() {
    var a = nf ? nf(Re) : mf.call(null, Re), b = nf ? nf(Re) : mf.call(null, Re), c = nf ? nf(Re) : mf.call(null, Re), d = nf ? nf(Re) : mf.call(null, Re), e = Fd(Re, nj, bi());
    return new li(Tc("jamesmacaulay.zelkova.impl.signal", "value-source-\x3eevents-fn"), function() {
      return function(a) {
        if (a ? v(v(null) ? null : a.ed) || (a.Ob ? 0 : x(vk, a)) : x(vk, a)) {
          a = gj;
        } else {
          if (a ? v(v(null) ? null : a.Vd) || (a.Ob ? 0 : x(vj, a)) : x(vj, a)) {
            a = fj;
          } else {
            var b = Id(a);
            a = (b ? b : a ? a.g & 1 || a.pe || (a.g ? 0 : x(wb, a)) : x(wb, a)) ? xi : null;
          }
        }
        return a;
      };
    }(a, b, c, d, e), Ci, e, a, b, c, d);
  }()
}
mi(xi, function(a, b) {
  return function(c, d) {
    var e = a.a ? a.a(c, d) : a.call(null, c, d);
    return tk(e, ok.a(1, S.b(gf(Fl, b))));
  };
});
mi(gj, function(a, b) {
  function c() {
    return zk(a, ok.m());
  }
  return ni.a ? ni.a(c, b) : ni.call(null, c, b);
});
mi(fj, function(a, b) {
  var c = yk(a);
  return ni.a ? ni.a(c, b) : ni.call(null, c, b);
});
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
          return jd(a) ? a : new id(a);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    d.m = c;
    d.b = b;
    d.a = function(a) {
      return jd(a) ? a : new id(a);
    };
    return d;
  }();
}
function nm(a) {
  return Yl(new $a(null, 3, [Wi, df(a), Ei, new T(null, 1, 5, U, [Gi], null), pj, mm], null));
}
function om(a, b, c) {
  return Yl(new $a(null, 3, [Wi, df(b), Ei, new T(null, 1, 5, U, [c], null), pj, ef(zf(function(a) {
    N(a, 0);
    N(a, 1);
    a = N(a, 2);
    a = N(a, 0);
    return Vk(a);
  }), S.b(function(b) {
    N(b, 0);
    var c = N(b, 1);
    b = N(b, 2);
    b = N(b, 0);
    b = Rk(b);
    c = a.a ? a.a(b, c) : a.call(null, b, c);
    return Il(c);
  }))], null));
}
function pm(a) {
  a = jm(a, null);
  var b;
  b = hm(a);
  var c = new $a(null, 1, [zi, a], null);
  b = mf.d ? mf.d(b, fb, c) : mf.call(null, b, fb, c);
  return km(a, b, null);
}
;var qm = Gd("readonly ismap class minlength for colspan usemap rowspan contenteditable maxlength novalidate tabindex".split(" "), "readOnly isMap className minLength htmlFor colSpan useMap rowSpan contentEditable maxLength noValidate tabIndex".split(" "));
function rm(a) {
  return tb(function(a, c) {
    var d = N(c, 0), e = N(c, 1), d = ue(d);
    Wc.a(d, "style") ? a.attributes = {style:e} : a[qm.a ? qm.a(d, d) : qm.call(null, d, d)] = e;
    return a;
  }, {}, a);
}
;var sm;
a: {
  var tm = ca.navigator;
  if (tm) {
    var um = tm.userAgent;
    if (um) {
      sm = um;
      break a;
    }
  }
  sm = "";
}
;var vm = -1 != sm.indexOf("Opera") || -1 != sm.indexOf("OPR"), wm = -1 != sm.indexOf("Trident") || -1 != sm.indexOf("MSIE"), xm = -1 != sm.indexOf("Gecko") && -1 == sm.toLowerCase().indexOf("webkit") && !(-1 != sm.indexOf("Trident") || -1 != sm.indexOf("MSIE")), ym = -1 != sm.toLowerCase().indexOf("webkit");
function zm() {
  var a = ca.document;
  return a ? a.documentMode : void 0;
}
var Am = function() {
  var a = "", b;
  if (vm && ca.opera) {
    return a = ca.opera.version, fa(a) ? a() : a;
  }
  xm ? b = /rv\:([^\);]+)(\)|;)/ : wm ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : ym && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(sm)) ? a[1] : "");
  return wm && (b = zm(), b > parseFloat(a)) ? String(b) : a;
}(), Bm = {};
function Cm(a) {
  if (!Bm[a]) {
    for (var b = 0, c = String(Am).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var p = l.exec(h) || ["", "", ""], q = m.exec(k) || ["", "", ""];
        if (0 == p[0].length && 0 == q[0].length) {
          break;
        }
        b = Ga(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == q[1].length ? 0 : parseInt(q[1], 10)) || Ga(0 == p[2].length, 0 == q[2].length) || Ga(p[2], q[2]);
      } while (0 == b);
    }
    Bm[a] = 0 <= b;
  }
}
var Dm = ca.document, Em = Dm && wm ? zm() || ("CSS1Compat" == Dm.compatMode ? parseInt(Am, 10) : 5) : void 0;
var Fm = !wm || wm && 9 <= Em;
!xm && !wm || wm && wm && 9 <= Em || xm && Cm("1.9.1");
wm && Cm("9");
function Gm(a, b) {
  Ha(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Hm ? a.setAttribute(Hm[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
  });
}
var Hm = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Im(a, b, c) {
  var d = arguments, e = document, f = d[0], h = d[1];
  if (!Fm && h && (h.name || h.type)) {
    f = ["\x3c", f];
    h.name && f.push(' name\x3d"', qa(h.name), '"');
    if (h.type) {
      f.push(' type\x3d"', qa(h.type), '"');
      var k = {};
      Ka(k, h);
      delete k.type;
      h = k;
    }
    f.push("\x3e");
    f = f.join("");
  }
  f = e.createElement(f);
  h && (ea(h) ? f.className = h : "array" == n(h) ? f.className = h.join(" ") : Gm(f, h));
  2 < d.length && Jm(e, f, d);
  return f;
}
function Jm(a, b, c) {
  function d(c) {
    c && b.appendChild(ea(c) ? a.createTextNode(c) : c);
  }
  for (var e = 2;e < c.length;e++) {
    var f = c[e];
    !da(f) || ga(f) && 0 < f.nodeType ? d(f) : Pa(Km(f) ? Ra(f) : f, d);
  }
}
function Km(a) {
  if (a && "number" == typeof a.length) {
    if (ga(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if (fa(a)) {
      return "function" == typeof a.item;
    }
  }
  return!1;
}
;var Lm = function Lm(b) {
  if (b ? b.Tc : b) {
    return b.Tc(b);
  }
  var c;
  c = Lm[n(null == b ? null : b)];
  if (!c && (c = Lm._, !c)) {
    throw z("IDOMBuilder.-node", b);
  }
  return c.call(null, b);
};
Lm._ = function(a) {
  a = "" + B(a);
  return document.createTextNode(String(a));
};
Lm.string = function(a) {
  return document.createTextNode(String(a));
};
Node.prototype.Tc = function() {
  return this;
};
var xf = ef(function(a) {
  return a instanceof P;
}, F);
function Mm(a) {
  return $f(Bf(ib, Df(a)));
}
function Nm(a) {
  if ("string" === typeof a) {
    var b = /\s+/;
    a = Wc.a("" + B(b), "/(?:)/") ? Ad.a($f(J("", S.a(B, D(a)))), "") : $f(("" + B(a)).split(b));
    if (Wc.a(0, 0)) {
      a: {
        for (;;) {
          if (Wc.a("", Md(a))) {
            a = null == a ? null : Tb(a);
          } else {
            break a;
          }
        }
      }
    }
    a = Ah(a);
  } else {
    a = Pd(a) ? a : Qd(a) ? Ah(a) : wh;
  }
  return a;
}
function Om(a, b) {
  var c;
  c = Yi.b(a);
  c = v(c) ? c : Yi.b(b);
  if (v(c)) {
    c = Nm(Yi.b(a));
    var d = Nm(Yi.b(b));
    a: {
      for (d = Hk.a(c, d), c = new La, d = D(d);;) {
        if (d) {
          c.append("" + B(F(d))), d = H(d), null != d && c.append(" ");
        } else {
          c = c.toString();
          break a;
        }
      }
    }
    return O.d(Ef.a(a, b), Yi, c);
  }
  return Ef.a(a, b);
}
function Pm(a, b, c, d, e, f) {
  this.tag = a;
  this.za = b;
  this.children = c;
  this.p = d;
  this.j = e;
  this.i = f;
  this.g = 2229667595;
  this.r = 8192;
}
g = Pm.prototype;
g.w = function(a, b) {
  return Ib.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.la : null) {
    case "tag":
      return this.tag;
    case "attrs":
      return this.za;
    case "children":
      return this.children;
    default:
      return Fd(this.j, b, c);
  }
};
g.A = function(a, b, c) {
  return Jh(b, function() {
    return function(a) {
      return Jh(b, W, "", " ", "", c, a);
    };
  }(this), "#stch.html.Element{", ", ", "}", c, Ge.a(new T(null, 3, 5, U, [new T(null, 2, 5, U, [kj, this.tag], null), new T(null, 2, 5, U, [hj, this.za], null), new T(null, 2, 5, U, [ui, this.children], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 3 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = je(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? og(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.Tc = function() {
  if (D(this.children)) {
    return Me(Im, this.tag, $h(this.za), S.a(Lm, this.children));
  }
  var a = this.tag, b = $h(this.za);
  return Im(a, b);
};
g.Aa = function(a, b) {
  return Zd(new uh(null, new $a(null, 3, [ui, null, hj, null, kj, null], null), null), b) ? Hd.a(vd(Ef.a(Re, this), this.p), b) : new Pm(this.tag, this.za, this.children, this.p, Pe(Hd.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return v(R.a ? R.a(kj, b) : R.call(null, kj, b)) ? new Pm(c, this.za, this.children, this.p, this.j, null) : v(R.a ? R.a(hj, b) : R.call(null, hj, b)) ? new Pm(this.tag, c, this.children, this.p, this.j, null) : v(R.a ? R.a(ui, b) : R.call(null, ui, b)) ? new Pm(this.tag, this.za, c, this.p, this.j, null) : new Pm(this.tag, this.za, this.children, this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(Ge.a(new T(null, 3, 5, U, [new T(null, 2, 5, U, [kj, this.tag], null), new T(null, 2, 5, U, [hj, this.za], null), new T(null, 2, 5, U, [ui, this.children], null)], null), this.j));
};
g.D = function(a, b) {
  return new Pm(this.tag, this.za, this.children, b, this.j, this.i);
};
g.G = function(a, b) {
  return Sd(b) ? Kb(this, C.a(b, 0), C.a(b, 1)) : tb(Bb, this, b);
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
    var e = Qm.b ? Qm.b(b) : Qm.call(null, b), f = N(e, 0), e = N(e, 1);
    return new Pm(this.tag, Om(this.za, f), Ef.a(this.children, e), null, null, null);
  }
  a.v = 1;
  a.t = function(a) {
    F(a);
    a = Uc(a);
    return b(0, a);
  };
  a.k = b;
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(pb(b)));
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
    var b = Qm.b ? Qm.b(a) : Qm.call(null, a);
    a = N(b, 0);
    b = N(b, 1);
    return new Pm(this.tag, Om(this.za, a), Ef.a(this.children, b), null, null, null);
  }
  a.v = 0;
  a.t = function(a) {
    a = D(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function Qm(a) {
  var b = N(a, 0), c = ie(a);
  return b instanceof Pm ? new T(null, 2, 5, U, [Re, Mm(a)], null) : b instanceof P ? (a = Gf(2, 2, new T(null, 1, 5, U, [null], null), a), b = new T(null, 2, 5, U, [Eh(xf, a), wf(a)], null), a = N(b, 0), b = N(b, 1), new T(null, 2, 5, U, [Ef.a(Re, S.a($f, a)), Mm(b)], null)) : Rd(b) ? new T(null, 2, 5, U, [b, Mm(c)], null) : new T(null, 2, 5, U, [Re, Mm(a)], null);
}
function Rm(a) {
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
      return Ke(new Pm(a, Re, Bd, null, null, null), b);
    }
    b.v = 0;
    b.t = function(a) {
      a = D(a);
      return c(a);
    };
    b.k = c;
    return b;
  }();
}
var Sm = Rm("div"), Tm = Rm("input"), Um = Rm("table"), Vm = Rm("td"), Wm = Rm("tr");
var Xm = VDOM.VNode, Ym = VDOM.VText, Zm = VDOM.create, $m = VDOM.patch, an = VDOM.diff, bn = function bn(b) {
  if (b ? b.od : b) {
    return b.od();
  }
  var c;
  c = bn[n(null == b ? null : b)];
  if (!c && (c = bn._, !c)) {
    throw z("VDOMBuilder.-vtree", b);
  }
  return c.call(null, b);
};
bn.string = function(a) {
  return new Ym(a);
};
Pm.prototype.od = function() {
  return new Xm(ue(this.tag), rm(this.za), $h(S.a(bn, this.children)));
};
bn._ = function(a) {
  return new Ym(a.toString());
};
function cn(a) {
  return Qd(a) ? new Xm("div", {}, $h(S.a(bn, a))) : bn(a);
}
function dn(a, b, c, d, e) {
  this.ua = a;
  this.xb = b;
  this.p = c;
  this.j = d;
  this.i = e;
  this.g = 2229667594;
  this.r = 8192;
}
g = dn.prototype;
g.w = function(a, b) {
  return Ib.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.la : null) {
    case "tree":
      return this.ua;
    case "root-node":
      return this.xb;
    default:
      return Fd(this.j, b, c);
  }
};
g.A = function(a, b, c) {
  return Jh(b, function() {
    return function(a) {
      return Jh(b, W, "", " ", "", c, a);
    };
  }(this), "#dominator.core.VDOM{", ", ", "}", c, Ge.a(new T(null, 2, 5, U, [new T(null, 2, 5, U, [yi, this.ua], null), new T(null, 2, 5, U, [rj, this.xb], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 2 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = je(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? og(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.Aa = function(a, b) {
  return Zd(new uh(null, new $a(null, 2, [yi, null, rj, null], null), null), b) ? Hd.a(vd(Ef.a(Re, this), this.p), b) : new dn(this.ua, this.xb, this.p, Pe(Hd.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return v(R.a ? R.a(yi, b) : R.call(null, yi, b)) ? new dn(c, this.xb, this.p, this.j, null) : v(R.a ? R.a(rj, b) : R.call(null, rj, b)) ? new dn(this.ua, c, this.p, this.j, null) : new dn(this.ua, this.xb, this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(Ge.a(new T(null, 2, 5, U, [new T(null, 2, 5, U, [yi, this.ua], null), new T(null, 2, 5, U, [rj, this.xb], null)], null), this.j));
};
g.D = function(a, b) {
  return new dn(this.ua, this.xb, b, this.j, this.i);
};
g.G = function(a, b) {
  return Sd(b) ? Kb(this, C.a(b, 0), C.a(b, 1)) : tb(Bb, this, b);
};
function en(a) {
  return function(b) {
    return function(c) {
      var d = cn(c), e = I.b ? I.b(b) : I.call(null, b);
      if (null == e) {
        return c = Zm.b ? Zm.b(d) : Zm.call(null, d), a.appendChild(c), c = new dn(d, c, null, null, null), qf.a ? qf.a(b, c) : qf.call(null, b, c);
      }
      var f = function() {
        var a = e.ua;
        return an.a ? an.a(a, d) : an.call(null, a, d);
      }();
      c = function() {
        var a = e.xb;
        return $m.a ? $m.a(a, f) : $m.call(null, a, f);
      }();
      c = new dn(d, c, null, null, null);
      return qf.a ? qf.a(b, c) : qf.call(null, b, c);
    };
  }(nf ? nf(null) : mf.call(null, null));
}
function fn(a) {
  return window.requestAnimationFrame(a);
}
;function gn(a) {
  var b = hn;
  return function() {
    return rk(b, a);
  };
}
;var jn = Error();
function kn(a) {
  a.prototype.then = a.prototype.then;
  a.prototype.$goog_Thenable = !0;
}
function ln(a) {
  if (!a) {
    return!1;
  }
  try {
    return!!a.$goog_Thenable;
  } catch (b) {
    return!1;
  }
}
;function mn(a, b) {
  nn || on();
  pn || (nn(), pn = !0);
  qn.push(new sn(a, b));
}
var nn;
function on() {
  if (ca.Promise && ca.Promise.resolve) {
    var a = ca.Promise.resolve();
    nn = function() {
      a.then(tn);
    };
  } else {
    nn = function() {
      Lj(tn);
    };
  }
}
var pn = !1, qn = [];
function tn() {
  for (;qn.length;) {
    var a = qn;
    qn = [];
    for (var b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        c.tb.call(c.scope);
      } catch (d) {
        Kj(d);
      }
    }
  }
  pn = !1;
}
function sn(a, b) {
  this.tb = a;
  this.scope = b;
}
;function un(a, b) {
  this.Oa = vn;
  this.hb = void 0;
  this.Ha = this.Sa = null;
  this.vc = this.Lc = !1;
  try {
    var c = this;
    a.call(b, function(a) {
      wn(c, xn, a);
    }, function(a) {
      wn(c, yn, a);
    });
  } catch (d) {
    wn(this, yn, d);
  }
}
var vn = 0, xn = 2, yn = 3;
un.prototype.then = function(a, b, c) {
  return zn(this, fa(a) ? a : null, fa(b) ? b : null, c);
};
kn(un);
un.prototype.cancel = function(a) {
  this.Oa == vn && mn(function() {
    var b = new An(a);
    Bn(this, b);
  }, this);
};
function Bn(a, b) {
  if (a.Oa == vn) {
    if (a.Sa) {
      var c = a.Sa;
      if (c.Ha) {
        for (var d = 0, e = -1, f = 0, h;h = c.Ha[f];f++) {
          if (h = h.oc) {
            if (d++, h == a && (e = f), 0 <= e && 1 < d) {
              break;
            }
          }
        }
        0 <= e && (c.Oa == vn && 1 == d ? Bn(c, b) : (d = c.Ha.splice(e, 1)[0], Cn(c, d, yn, b)));
      }
    } else {
      wn(a, yn, b);
    }
  }
}
function Dn(a, b) {
  a.Ha && a.Ha.length || a.Oa != xn && a.Oa != yn || En(a);
  a.Ha || (a.Ha = []);
  a.Ha.push(b);
}
function zn(a, b, c, d) {
  var e = {oc:null, wd:null, xd:null};
  e.oc = new un(function(a, h) {
    e.wd = b ? function(c) {
      try {
        var e = b.call(d, c);
        a(e);
      } catch (m) {
        h(m);
      }
    } : a;
    e.xd = c ? function(b) {
      try {
        var e = c.call(d, b);
        void 0 === e && b instanceof An ? h(b) : a(e);
      } catch (m) {
        h(m);
      }
    } : h;
  });
  e.oc.Sa = a;
  Dn(a, e);
  return e.oc;
}
un.prototype.yd = function(a) {
  this.Oa = vn;
  wn(this, xn, a);
};
un.prototype.zd = function(a) {
  this.Oa = vn;
  wn(this, yn, a);
};
function wn(a, b, c) {
  if (a.Oa == vn) {
    if (a == c) {
      b = yn, c = new TypeError("Promise cannot resolve to itself");
    } else {
      if (ln(c)) {
        a.Oa = 1;
        c.then(a.yd, a.zd, a);
        return;
      }
      if (ga(c)) {
        try {
          var d = c.then;
          if (fa(d)) {
            ro(a, c, d);
            return;
          }
        } catch (e) {
          b = yn, c = e;
        }
      }
    }
    a.hb = c;
    a.Oa = b;
    En(a);
    b != yn || c instanceof An || so(a, c);
  }
}
function ro(a, b, c) {
  function d(b) {
    f || (f = !0, a.zd(b));
  }
  function e(b) {
    f || (f = !0, a.yd(b));
  }
  a.Oa = 1;
  var f = !1;
  try {
    c.call(b, e, d);
  } catch (h) {
    d(h);
  }
}
function En(a) {
  a.Lc || (a.Lc = !0, mn(a.Yd, a));
}
un.prototype.Yd = function() {
  for (;this.Ha && this.Ha.length;) {
    var a = this.Ha;
    this.Ha = [];
    for (var b = 0;b < a.length;b++) {
      Cn(this, a[b], this.Oa, this.hb);
    }
  }
  this.Lc = !1;
};
function Cn(a, b, c, d) {
  if (c == xn) {
    b.wd(d);
  } else {
    for (;a && a.vc;a = a.Sa) {
      a.vc = !1;
    }
    b.xd(d);
  }
}
function so(a, b) {
  a.vc = !0;
  mn(function() {
    a.vc && to.call(null, b);
  });
}
var to = Kj;
function An(a) {
  Ma.call(this, a);
}
pa(An, Ma);
An.prototype.name = "cancel";
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function uo(a, b) {
  this.zc = [];
  this.vd = a;
  this.nd = b || null;
  this.Rb = this.Db = !1;
  this.hb = void 0;
  this.Sc = this.Bd = this.Bc = !1;
  this.Ac = 0;
  this.Sa = null;
  this.Cc = 0;
}
uo.prototype.cancel = function(a) {
  if (this.Db) {
    this.hb instanceof uo && this.hb.cancel();
  } else {
    if (this.Sa) {
      var b = this.Sa;
      delete this.Sa;
      a ? b.cancel(a) : (b.Cc--, 0 >= b.Cc && b.cancel());
    }
    this.vd ? this.vd.call(this.nd, this) : this.Sc = !0;
    if (!this.Db) {
      a = new vo;
      if (this.Db) {
        if (!this.Sc) {
          throw new wo;
        }
        this.Sc = !1;
      }
      this.Db = !0;
      this.hb = a;
      this.Rb = !0;
      xo(this);
    }
  }
};
uo.prototype.md = function(a, b) {
  this.Bc = !1;
  this.Db = !0;
  this.hb = b;
  this.Rb = !a;
  xo(this);
};
function yo(a, b, c) {
  a.zc.push([b, c, void 0]);
  a.Db && xo(a);
}
uo.prototype.then = function(a, b, c) {
  var d, e, f = new un(function(a, b) {
    d = a;
    e = b;
  });
  yo(this, d, function(a) {
    a instanceof vo ? f.cancel() : e(a);
  });
  return f.then(a, b, c);
};
kn(uo);
function zo(a) {
  return Qa(a.zc, function(a) {
    return fa(a[1]);
  });
}
function xo(a) {
  if (a.Ac && a.Db && zo(a)) {
    var b = a.Ac, c = Ao[b];
    c && (ca.clearTimeout(c.xc), delete Ao[b]);
    a.Ac = 0;
  }
  a.Sa && (a.Sa.Cc--, delete a.Sa);
  for (var b = a.hb, d = c = !1;a.zc.length && !a.Bc;) {
    var e = a.zc.shift(), f = e[0], h = e[1], e = e[2];
    if (f = a.Rb ? h : f) {
      try {
        var k = f.call(e || a.nd, b);
        void 0 !== k && (a.Rb = a.Rb && (k == b || k instanceof Error), a.hb = b = k);
        ln(b) && (d = !0, a.Bc = !0);
      } catch (l) {
        b = l, a.Rb = !0, zo(a) || (c = !0);
      }
    }
  }
  a.hb = b;
  d && (k = na(a.md, a, !0), d = na(a.md, a, !1), b instanceof uo ? (yo(b, k, d), b.Bd = !0) : b.then(k, d));
  c && (b = new Bo(b), Ao[b.xc] = b, a.Ac = b.xc);
}
function wo() {
  Ma.call(this);
}
pa(wo, Ma);
wo.prototype.message = "Deferred has already fired";
wo.prototype.name = "AlreadyCalledError";
function vo() {
  Ma.call(this);
}
pa(vo, Ma);
vo.prototype.message = "Deferred was canceled";
vo.prototype.name = "CanceledError";
function Bo(a) {
  this.xc = ca.setTimeout(na(this.le, this), 0);
  this.Xd = a;
}
Bo.prototype.le = function() {
  delete Ao[this.xc];
  throw this.Xd;
};
var Ao = {};
var Co = function Co(b) {
  if (b ? b.kd : b) {
    return b.kd();
  }
  var c;
  c = Co[n(null == b ? null : b)];
  if (!c && (c = Co._, !c)) {
    throw z("PushbackReader.read-char", b);
  }
  return c.call(null, b);
}, Do = function Do(b, c) {
  if (b ? b.ld : b) {
    return b.ld(0, c);
  }
  var d;
  d = Do[n(null == b ? null : b)];
  if (!d && (d = Do._, !d)) {
    throw z("PushbackReader.unread", b);
  }
  return d.call(null, b, c);
};
function Eo(a, b, c) {
  this.F = a;
  this.buffer = b;
  this.Nc = c;
}
Eo.prototype.kd = function() {
  return 0 === this.buffer.length ? (this.Nc += 1, this.F[this.Nc]) : this.buffer.pop();
};
Eo.prototype.ld = function(a, b) {
  return this.buffer.push(b);
};
function Fo(a) {
  var b = !/[^\t\n\r ]/.test(a);
  return v(b) ? b : "," === a;
}
function Go(a, b) {
  var c;
  !(c = !/[^0-9]/.test(b)) && (c = "+" === b || "-" === b) && (c = Co(a), Do(a, c), c = !/[^0-9]/.test(c));
  return c;
}
function Ho(a) {
  throw Error(Ke(B, a));
}
function Io(a, b) {
  for (var c = new La(b), d = Co(a);;) {
    var e;
    if (!(e = null == d || Fo(d))) {
      e = d;
      var f = "#" !== e;
      e = f ? (f = "'" !== e) ? (f = ":" !== e) ? Jo.b ? Jo.b(e) : Jo.call(null, e) : f : f : f;
    }
    if (e) {
      return Do(a, d), c.toString();
    }
    c.append(d);
    d = Co(a);
  }
}
function Ko(a) {
  for (;;) {
    var b = Co(a);
    if ("\n" === b || "\r" === b || null == b) {
      return a;
    }
  }
}
var Lo = Ih("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$"), Mo = Ih("^([-+]?[0-9]+)/([0-9]+)$"), No = Ih("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$"), Oo = Ih("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
function Po(a, b) {
  var c = a.exec(b);
  return null != c && c[0] === b ? 1 === c.length ? c[0] : c : null;
}
function Qo(a) {
  if (v(Po(Lo, a))) {
    a = Po(Lo, a);
    var b = a[2];
    if (null != (Wc.a(b, "") ? null : b)) {
      a = 0;
    } else {
      var b = v(a[3]) ? [a[3], 10] : v(a[4]) ? [a[4], 16] : v(a[5]) ? [a[5], 8] : v(a[6]) ? [a[7], parseInt(a[6], 10)] : [null, null], c = b[0];
      null == c ? a = null : (b = parseInt(c, b[1]), a = "-" === a[1] ? -b : b);
    }
  } else {
    v(Po(Mo, a)) ? (a = Po(Mo, a), a = parseInt(a[1], 10) / parseInt(a[2], 10)) : a = v(Po(No, a)) ? parseFloat(a) : null;
  }
  return a;
}
var Ro = Ih("^[0-9A-Fa-f]{2}$"), So = Ih("^[0-9A-Fa-f]{4}$");
function To(a, b, c) {
  return v(Hh(a, c)) ? c : Ho(K(["Unexpected unicode escape \\", b, c], 0));
}
function Uo(a) {
  return String.fromCharCode(parseInt(a, 16));
}
function Vo(a) {
  var b = Co(a), c = "t" === b ? "\t" : "r" === b ? "\r" : "n" === b ? "\n" : "\\" === b ? "\\" : '"' === b ? '"' : "b" === b ? "\b" : "f" === b ? "\f" : null;
  v(c) ? b = c : "x" === b ? (a = (new La(Co(a), Co(a))).toString(), b = Uo(To(Ro, b, a))) : "u" === b ? (a = (new La(Co(a), Co(a), Co(a), Co(a))).toString(), b = Uo(To(So, b, a))) : b = /[^0-9]/.test(b) ? Ho(K(["Unexpected unicode escape \\", b], 0)) : String.fromCharCode(b);
  return b;
}
function Wo(a) {
  for (var b = Co(a);;) {
    var c;
    c = b;
    c = Fo.b ? Fo.b(c) : Fo.call(null, c);
    if (v(c)) {
      b = Co(a);
    } else {
      return b;
    }
  }
}
function Xo(a, b) {
  for (var c = nc(Bd);;) {
    var d = Wo(b);
    v(d) || Ho(K(["EOF while reading"], 0));
    if (a === d) {
      return pc(c);
    }
    var e = function() {
      var a = d;
      return Jo.b ? Jo.b(a) : Jo.call(null, a);
    }();
    if (v(e)) {
      var f = e, e = function() {
        var a = d;
        return f.a ? f.a(b, a) : f.call(null, b, a);
      }()
    } else {
      Do(b, d), e = Yo.s ? Yo.s(b, !0, null, !0) : Yo.call(null, b, !0, null);
    }
    c = e === b ? c : Ie.a(c, e);
  }
}
function Zo(a, b) {
  return Ho(K(["Reader for ", b, " not implemented yet"], 0));
}
function $o(a, b) {
  var c = Co(a), d = ap.b ? ap.b(c) : ap.call(null, c);
  if (v(d)) {
    return d.a ? d.a(a, b) : d.call(null, a, b);
  }
  d = bp.a ? bp.a(a, c) : bp.call(null, a, c);
  return v(d) ? d : Ho(K(["No dispatch macro for ", c], 0));
}
function cp(a, b) {
  return Ho(K(["Unmatched delimiter ", b], 0));
}
function dp(a) {
  return Ke(pe, Xo(")", a));
}
function ep(a) {
  return Xo("]", a);
}
function fp(a) {
  a = Xo("}", a);
  var b = M(a);
  if ("number" !== typeof b || !lb(isNaN(b)) || Infinity === b || parseFloat(b) !== parseInt(b, 10)) {
    throw Error([B("Argument must be an integer: "), B(b)].join(""));
  }
  0 !== (b & 1) && Ho(K(["Map literal must contain an even number of forms"], 0));
  return Ke(of, a);
}
function gp(a, b) {
  for (var c = new La(b), d = Co(a);;) {
    if (v(function() {
      var a = null == d;
      if (a || (a = Fo(d))) {
        return a;
      }
      a = d;
      return Jo.b ? Jo.b(a) : Jo.call(null, a);
    }())) {
      Do(a, d);
      var e = c.toString(), c = Qo(e);
      return v(c) ? c : Ho(K(["Invalid number format [", e, "]"], 0));
    }
    c.append(d);
    d = e = Co(a);
  }
}
function hp(a) {
  for (var b = new La, c = Co(a);;) {
    if (null == c) {
      return Ho(K(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(Vo(a));
    } else {
      if ('"' === c) {
        return b.toString();
      }
      b.append(c);
    }
    c = Co(a);
  }
}
function ip(a) {
  for (var b = new La, c = Co(a);;) {
    if (null == c) {
      return Ho(K(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(c);
      var d = Co(a);
      if (null == d) {
        return Ho(K(["EOF while reading"], 0));
      }
      var e = function() {
        var a = b;
        a.append(d);
        return a;
      }(), f = Co(a);
    } else {
      if ('"' === c) {
        return b.toString();
      }
      e = function() {
        var a = b;
        a.append(c);
        return a;
      }();
      f = Co(a);
    }
    b = e;
    c = f;
  }
}
function jp(a, b) {
  var c = Io(a, b), d = -1 != c.indexOf("/");
  v(v(d) ? 1 !== c.length : d) ? c = Tc(c.substring(0, c.indexOf("/")), c.substring(c.indexOf("/") + 1, c.length)) : (d = Sc(c), c = "nil" === c ? null : "true" === c ? !0 : "false" === c ? !1 : "/" === c ? new Rc(null, "/", "/", -1371932971, null) : d);
  return c;
}
function kp(a) {
  a = Io(a, Co(a));
  var b = Po(Oo, a);
  a = b[0];
  var c = b[1], b = b[2];
  return void 0 !== c && ":/" === c.substring(c.length - 2, c.length) || ":" === b[b.length - 1] || -1 !== a.indexOf("::", 1) ? Ho(K(["Invalid token: ", a], 0)) : null != c && 0 < c.length ? te.a(c.substring(0, c.indexOf("/")), b) : te.b(a);
}
function lp(a) {
  return function(b) {
    return Bb(Bb(Vc, Yo.s ? Yo.s(b, !0, null, !0) : Yo.call(null, b, !0, null)), a);
  };
}
function mp() {
  return function() {
    return Ho(K(["Unreadable form"], 0));
  };
}
function np(a) {
  var b;
  b = Yo.s ? Yo.s(a, !0, null, !0) : Yo.call(null, a, !0, null);
  b = b instanceof Rc ? new $a(null, 1, [kj, b], null) : "string" === typeof b ? new $a(null, 1, [kj, b], null) : b instanceof P ? new Bg([b, !0]) : b;
  Rd(b) || Ho(K(["Metadata must be Symbol,Keyword,String or Map"], 0));
  return((a = Yo.s ? Yo.s(a, !0, null, !0) : Yo.call(null, a, !0, null)) ? a.g & 262144 || a.Ud || (a.g ? 0 : x(Zb, a)) : x(Zb, a)) ? vd(a, sh.k(K([Ld(a), b], 0))) : Ho(K(["Metadata can only be applied to IWithMetas"], 0));
}
function op(a) {
  return Ah(Xo("}", a));
}
function pp(a) {
  return Ih(ip(a));
}
function qp(a) {
  Yo.s ? Yo.s(a, !0, null, !0) : Yo.call(null, a, !0, null);
  return a;
}
function Jo(a) {
  return'"' === a ? hp : ":" === a ? kp : ";" === a ? Ko : "'" === a ? lp(new Rc(null, "quote", "quote", 1377916282, null)) : "@" === a ? lp(new Rc(null, "deref", "deref", 1494944732, null)) : "^" === a ? np : "`" === a ? Zo : "~" === a ? Zo : "(" === a ? dp : ")" === a ? cp : "[" === a ? ep : "]" === a ? cp : "{" === a ? fp : "}" === a ? cp : "\\" === a ? Co : "#" === a ? $o : null;
}
function ap(a) {
  return "{" === a ? op : "\x3c" === a ? mp() : '"' === a ? pp : "!" === a ? Ko : "_" === a ? qp : null;
}
function Yo(a, b, c) {
  for (;;) {
    var d = Co(a);
    if (null == d) {
      return v(b) ? Ho(K(["EOF while reading"], 0)) : c;
    }
    if (!Fo(d)) {
      if (";" === d) {
        var e = function() {
          var b = a, c = d;
          return Ko.a ? Ko.a(b, c) : Ko.call(null, b);
        }();
        a = e;
      } else {
        var f = Jo(d), e = v(f) ? function() {
          var b = a, c = d;
          return f.a ? f.a(b, c) : f.call(null, b, c);
        }() : Go(a, d) ? gp(a, d) : jp(a, d);
        if (e !== a) {
          return e;
        }
      }
    }
  }
}
var rp = function(a, b) {
  return function(c, d) {
    return Ed(v(d) ? b : a, c);
  };
}(new T(null, 13, 5, U, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), new T(null, 13, 5, U, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null)), sp = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function tp(a) {
  a = parseInt(a, 10);
  return lb(isNaN(a)) ? a : null;
}
function up(a, b, c, d) {
  a <= b && b <= c || Ho(K([[B(d), B(" Failed:  "), B(a), B("\x3c\x3d"), B(b), B("\x3c\x3d"), B(c)].join("")], 0));
  return b;
}
function vp(a) {
  var b = Hh(sp, a);
  N(b, 0);
  var c = N(b, 1), d = N(b, 2), e = N(b, 3), f = N(b, 4), h = N(b, 5), k = N(b, 6), l = N(b, 7), m = N(b, 8), p = N(b, 9), q = N(b, 10);
  if (lb(b)) {
    return Ho(K([[B("Unrecognized date/time syntax: "), B(a)].join("")], 0));
  }
  var r = tp(c), t = function() {
    var a = tp(d);
    return v(a) ? a : 1;
  }();
  a = function() {
    var a = tp(e);
    return v(a) ? a : 1;
  }();
  var b = function() {
    var a = tp(f);
    return v(a) ? a : 0;
  }(), c = function() {
    var a = tp(h);
    return v(a) ? a : 0;
  }(), w = function() {
    var a = tp(k);
    return v(a) ? a : 0;
  }(), y = function() {
    var a;
    a: {
      if (Wc.a(3, M(l))) {
        a = l;
      } else {
        if (3 < M(l)) {
          a = l.substring(0, 3);
        } else {
          for (a = new La(l);;) {
            if (3 > a.qb.length) {
              a = a.append("0");
            } else {
              a = a.toString();
              break a;
            }
          }
        }
      }
    }
    a = tp(a);
    return v(a) ? a : 0;
  }(), m = (Wc.a(m, "-") ? -1 : 1) * (60 * function() {
    var a = tp(p);
    return v(a) ? a : 0;
  }() + function() {
    var a = tp(q);
    return v(a) ? a : 0;
  }());
  return new T(null, 8, 5, U, [r, up(1, t, 12, "timestamp month field must be in range 1..12"), up(1, a, function() {
    var a;
    a = 0 === (r % 4 + 4) % 4;
    v(a) && (a = lb(0 === (r % 100 + 100) % 100), a = v(a) ? a : 0 === (r % 400 + 400) % 400);
    return rp.a ? rp.a(t, a) : rp.call(null, t, a);
  }(), "timestamp day field must be in range 1..last day in month"), up(0, b, 23, "timestamp hour field must be in range 0..23"), up(0, c, 59, "timestamp minute field must be in range 0..59"), up(0, w, Wc.a(c, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), up(0, y, 999, "timestamp millisecond field must be in range 0..999"), m], null);
}
var wp, xp = new $a(null, 4, ["inst", function(a) {
  var b;
  if ("string" === typeof a) {
    if (b = vp(a), v(b)) {
      a = N(b, 0);
      var c = N(b, 1), d = N(b, 2), e = N(b, 3), f = N(b, 4), h = N(b, 5), k = N(b, 6);
      b = N(b, 7);
      b = new Date(Date.UTC(a, c - 1, d, e, f, h, k) - 6E4 * b);
    } else {
      b = Ho(K([[B("Unrecognized date/time syntax: "), B(a)].join("")], 0));
    }
  } else {
    b = Ho(K(["Instance literal expects a string for its timestamp."], 0));
  }
  return b;
}, "uuid", function(a) {
  return "string" === typeof a ? new oi(a) : Ho(K(["UUID literal expects a string as its representation."], 0));
}, "queue", function(a) {
  return Sd(a) ? Ef.a(lg, a) : Ho(K(["Queue literal expects a vector for its elements."], 0));
}, "js", function(a) {
  if (Sd(a)) {
    var b = [];
    a = D(a);
    for (var c = null, d = 0, e = 0;;) {
      if (e < d) {
        var f = c.O(null, e);
        b.push(f);
        e += 1;
      } else {
        if (a = D(a)) {
          c = a, Td(c) ? (a = tc(c), e = vc(c), c = a, d = M(a), a = e) : (a = F(c), b.push(a), a = H(c), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  if (Rd(a)) {
    b = {};
    a = D(a);
    c = null;
    for (e = d = 0;;) {
      if (e < d) {
        var h = c.O(null, e), f = N(h, 0), h = N(h, 1);
        b[ue(f)] = h;
        e += 1;
      } else {
        if (a = D(a)) {
          Td(a) ? (d = tc(a), a = vc(a), c = d, d = M(d)) : (d = F(a), c = N(d, 0), d = N(d, 1), b[ue(c)] = d, a = H(a), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  return Ho(K([[B("JS literal expects a vector or map containing "), B("only string or unqualified keyword keys")].join("")], 0));
}], null);
wp = nf ? nf(xp) : mf.call(null, xp);
var yp = nf ? nf(null) : mf.call(null, null);
function bp(a, b) {
  var c = jp(a, b), d = Ed(I.b ? I.b(wp) : I.call(null, wp), "" + B(c)), e = I.b ? I.b(yp) : I.call(null, yp);
  return v(d) ? (c = Yo(a, !0, null), d.b ? d.b(c) : d.call(null, c)) : v(e) ? (d = Yo(a, !0, null), e.a ? e.a(c, d) : e.call(null, c, d)) : Ho(K(["Could not find tag parser for ", "" + B(c), " in ", Sh(K([wg(I.b ? I.b(wp) : I.call(null, wp))], 0))], 0));
}
;var Ua = function() {
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
    return console.log.apply(console, sb ? rb(a) : qb.call(null, a));
  }
  a.v = 0;
  a.t = function(a) {
    a = D(a);
    return b(a);
  };
  a.k = b;
  return a;
}(), zp = new T(null, 3, 5, U, ["Billy", "Bobby", "Joey"], null), hn, Ap = te.b(function() {
  null == Th && (Th = nf ? nf(0) : mf.call(null, 0));
  return Sc([B("G__"), B(jf.a(Th, hd))].join(""));
}()), Bp = ok.m();
hn = Yl(new $a(null, 4, [Wi, df(Ti), aj, Ap, qi, new Bg([Ap, ni.a ? ni.a(Bp, Ap) : ni.call(null, Bp, Ap)]), Vi, Bp], null));
var Cp = new $a(null, 3, ["Billy", 0, "Bobby", 0, "Joey", 0], null), Dp, Ep = localStorage.getItem(ue("clicks"));
Dp = v(Ep) ? Yo(new Eo(Ep, [], -1), !1, null) : null;
var Fp = function(a, b, c) {
  return om(function(b, c) {
    return a.a ? a.a(c, b) : a.call(null, c, b);
  }, b, c);
}(function(a, b) {
  try {
    if (R(b, Ti)) {
      return a;
    }
    if (R(b, Bi)) {
      return Cp;
    }
    throw jn;
  } catch (c) {
    if (c instanceof Error) {
      if (c === jn) {
        try {
          if (Sd(b) && 2 === M(b)) {
            try {
              var d = Dd(b, 0);
              if (R(d, Fi)) {
                var e = Dd(b, 1);
                return Hf.d(a, new T(null, 1, 5, U, [e], null), hd);
              }
              throw jn;
            } catch (f) {
              if (f instanceof Error) {
                d = f;
                if (d === jn) {
                  throw jn;
                }
                throw d;
              }
              throw f;
            }
          } else {
            throw jn;
          }
        } catch (h) {
          if (h instanceof Error) {
            d = h;
            if (d === jn) {
              throw Error([B("No matching clause: "), B(b)].join(""));
            }
            throw d;
          }
          throw h;
        }
      } else {
        throw c;
      }
    } else {
      throw c;
    }
  }
}, v(Dp) ? Dp : Cp, hn), Gp = function() {
  var a = 1 < arguments.length ? new E(Array.prototype.slice.call(arguments, 1), 0) : null;
  return zk(jm(arguments[0], null), Ke(ok, a));
}(Fp);
(function(a, b) {
  var c = pm(a), d = en(b);
  return fn(function(a, b) {
    return function k() {
      var c = I.b ? I.b(a) : I.call(null, a);
      b.b ? b.b(c) : b.call(null, c);
      return fn(k);
    };
  }(c, d));
})(function(a, b) {
  if (Od(b)) {
    return nm(a.m ? a.m() : a.call(null));
  }
  var c = $f(b), d = ff(S.b(function() {
    return function(a) {
      N(a, 0);
      N(a, 1);
      return N(a, 2);
    };
  }(c)), zf(function() {
    return function(a) {
      return bf(Vk, a);
    };
  }(c)), S.b(function() {
    return function(b) {
      return Il(Ke(a, S.a(Rk, b)));
    };
  }(c)));
  return Yl(new $a(null, 3, [Wi, function(b, c) {
    return function(d, k) {
      return Ke(a, S.a(function() {
        return function(a) {
          return Wi.b(a).call(null, d, k);
        };
      }(b, c), b));
    };
  }(c, d), Ei, c, pj, d], null));
}(function(a) {
  var b = function() {
    var b = function() {
      var a = function() {
        return function k(a) {
          return new ve(null, function() {
            for (;;) {
              var b = D(a);
              if (b) {
                if (Td(b)) {
                  var c = tc(b), d = M(c), e = new xe(Array(d), 0);
                  return function() {
                    for (var a = 0;;) {
                      if (a < d) {
                        var b = C.a(c, a), f = e, k = void 0, k = b, b = gn(new T(null, 2, 5, U, [Fi, b], null)), k = Tm.K ? Tm.K(Oi, "button", Hi, k, Mi, b) : Tm.call(null, Oi, "button", Hi, k, Mi, b), b = Vm.b ? Vm.b(k) : Vm.call(null, k);
                        f.add(b);
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Ae(e.va(), k(vc(b))) : Ae(e.va(), null);
                }
                var f = F(b);
                return J(function() {
                  var a;
                  a = f;
                  var b = gn(new T(null, 2, 5, U, [Fi, f], null));
                  a = Tm.K ? Tm.K(Oi, "button", Hi, a, Mi, b) : Tm.call(null, Oi, "button", Hi, a, Mi, b);
                  return Vm.b ? Vm.b(a) : Vm.call(null, a);
                }(), k(Uc(b)));
              }
              return null;
            }
          }, null, null);
        }(zp);
      }();
      return Wm.b ? Wm.b(a) : Wm.call(null, a);
    }(), c = function() {
      var c = function() {
        return function(b) {
          return function l(c) {
            return new ve(null, function() {
              return function() {
                for (;;) {
                  var b = D(c);
                  if (b) {
                    if (Td(b)) {
                      var d = tc(b), e = M(d), f = new xe(Array(e), 0);
                      return function() {
                        for (var b = 0;;) {
                          if (b < e) {
                            var c = C.a(d, b), h = f, l = void 0, c = Ed(a, c), l = Tm.K ? Tm.K(Oi, "text", Ii, !0, Hi, c) : Tm.call(null, Oi, "text", Ii, !0, Hi, c), c = Vm.b ? Vm.b(l) : Vm.call(null, l);
                            h.add(c);
                            b += 1;
                          } else {
                            return!0;
                          }
                        }
                      }() ? Ae(f.va(), l(vc(b))) : Ae(f.va(), null);
                    }
                    var h = F(b);
                    return J(function() {
                      var b;
                      b = Ed(a, h);
                      b = Tm.K ? Tm.K(Oi, "text", Ii, !0, Hi, b) : Tm.call(null, Oi, "text", Ii, !0, Hi, b);
                      return Vm.b ? Vm.b(b) : Vm.call(null, b);
                    }(), l(Uc(b)));
                  }
                  return null;
                }
              };
            }(b), null, null);
          };
        }(b)(zp);
      }();
      return Wm.b ? Wm.b(c) : Wm.call(null, c);
    }();
    return Um.a ? Um.a(b, c) : Um.call(null, b, c);
  }(), c = function() {
    var a;
    a = gn(Bi);
    a = Tm.K ? Tm.K(Oi, "button", Hi, "Reset", Mi, a) : Tm.call(null, Oi, "button", Hi, "Reset", Mi, a);
    return Sm.d ? Sm.d(Xi, "button-row", a) : Sm.call(null, Xi, "button-row", a);
  }();
  return Sm.a ? Sm.a(b, c) : Sm.call(null, b, c);
}, K([Fp], 0)), document.body);
var Hp = ok.b(1);
Tj(function(a) {
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
                    c[5] = h, kk(c), e = Z;
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
          return 1 === b ? (a[2] = null, a[1] = 2, Z) : 2 === b ? (a[1] = 4, Z) : 3 === b ? (b = a[2], ik(a, b)) : 4 === b ? gk(a, 7, Gp) : 5 === b ? (a[2] = null, a[1] = 6, Z) : 6 === b ? (b = a[2], a[2] = b, a[1] = 3, Z) : 7 === b ? (b = a[2], b = localStorage.setItem(ue("clicks"), b.toString()), a[7] = b, a[2] = null, a[1] = 2, Z) : null;
        };
      }(a), a);
    }(), c = function() {
      var c = b.m ? b.m() : b.call(null);
      c[6] = a;
      return c;
    }();
    return fk(c);
  };
}(Hp));

})();

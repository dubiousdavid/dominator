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
var ia = "closure_uid_" + (1E9 * Math.random() >>> 0), ja = 0;
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
function qa(a, b) {
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
;function ra(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, ra);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
}
qa(ra, Error);
ra.prototype.name = "CustomError";
function sa(a) {
  if (!ta.test(a)) {
    return a;
  }
  -1 != a.indexOf("\x26") && (a = a.replace(xa, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(ya, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(za, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Aa, "\x26quot;"));
  -1 != a.indexOf("'") && (a = a.replace(Ca, "\x26#39;"));
  -1 != a.indexOf("\x00") && (a = a.replace(Fa, "\x26#0;"));
  return a;
}
var xa = /&/g, ya = /</g, za = />/g, Aa = /"/g, Ca = /'/g, Fa = /\x00/g, ta = /[\x00&<>"']/;
function Ga(a) {
  return Array.prototype.join.call(arguments, "");
}
function Ha(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
;var Ia = Array.prototype, Ka = Ia.forEach ? function(a, b, c) {
  Ia.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = ea(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
}, La = Ia.some ? function(a, b, c) {
  return Ia.some.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = ea(a) ? a.split("") : a, f = 0;f < d;f++) {
    if (f in e && b.call(c, e[f], f, a)) {
      return!0;
    }
  }
  return!1;
};
function Ma(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}
function Na(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;function Pa(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
var Qa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ra(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < Qa.length;f++) {
      c = Qa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
;var Sa;
a: {
  var Ta = ca.navigator;
  if (Ta) {
    var Ua = Ta.userAgent;
    if (Ua) {
      Sa = Ua;
      break a;
    }
  }
  Sa = "";
}
;var Va = -1 != Sa.indexOf("Opera") || -1 != Sa.indexOf("OPR"), Wa = -1 != Sa.indexOf("Trident") || -1 != Sa.indexOf("MSIE"), Za = -1 != Sa.indexOf("Gecko") && -1 == Sa.toLowerCase().indexOf("webkit") && !(-1 != Sa.indexOf("Trident") || -1 != Sa.indexOf("MSIE")), $a = -1 != Sa.toLowerCase().indexOf("webkit");
function bb() {
  var a = ca.document;
  return a ? a.documentMode : void 0;
}
var eb = function() {
  var a = "", b;
  if (Va && ca.opera) {
    return a = ca.opera.version, fa(a) ? a() : a;
  }
  Za ? b = /rv\:([^\);]+)(\)|;)/ : Wa ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : $a && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(Sa)) ? a[1] : "");
  return Wa && (b = bb(), b > parseFloat(a)) ? String(b) : a;
}(), fb = {};
function gb(a) {
  if (!fb[a]) {
    for (var b = 0, c = String(eb).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var p = l.exec(h) || ["", "", ""], q = m.exec(k) || ["", "", ""];
        if (0 == p[0].length && 0 == q[0].length) {
          break;
        }
        b = Ha(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == q[1].length ? 0 : parseInt(q[1], 10)) || Ha(0 == p[2].length, 0 == q[2].length) || Ha(p[2], q[2]);
      } while (0 == b);
    }
    fb[a] = 0 <= b;
  }
}
var hb = ca.document, ib = hb && Wa ? bb() || ("CSS1Compat" == hb.compatMode ? parseInt(eb, 10) : 5) : void 0;
function jb(a) {
  a.prototype.then = a.prototype.then;
  a.prototype.$goog_Thenable = !0;
}
function kb(a) {
  if (!a) {
    return!1;
  }
  try {
    return!!a.$goog_Thenable;
  } catch (b) {
    return!1;
  }
}
;function mb(a) {
  ca.setTimeout(function() {
    throw a;
  }, 0);
}
function nb(a) {
  fa(ca.setImmediate) ? ca.setImmediate(a) : (ob || (ob = pb()), ob(a));
}
var ob;
function pb() {
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
;function qb(a, b) {
  rb || sb();
  tb || (rb(), tb = !0);
  ub.push(new vb(a, b));
}
var rb;
function sb() {
  if (ca.Promise && ca.Promise.resolve) {
    var a = ca.Promise.resolve();
    rb = function() {
      a.then(wb);
    };
  } else {
    rb = function() {
      nb(wb);
    };
  }
}
var tb = !1, ub = [];
function wb() {
  for (;ub.length;) {
    var a = ub;
    ub = [];
    for (var b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        c.tb.call(c.scope);
      } catch (d) {
        mb(d);
      }
    }
  }
  tb = !1;
}
function vb(a, b) {
  this.tb = a;
  this.scope = b;
}
;function xb(a, b) {
  this.Oa = yb;
  this.hb = void 0;
  this.Ha = this.Sa = null;
  this.vc = this.Lc = !1;
  try {
    var c = this;
    a.call(b, function(a) {
      zb(c, Ab, a);
    }, function(a) {
      zb(c, Bb, a);
    });
  } catch (d) {
    zb(this, Bb, d);
  }
}
var yb = 0, Ab = 2, Bb = 3;
xb.prototype.then = function(a, b, c) {
  return Cb(this, fa(a) ? a : null, fa(b) ? b : null, c);
};
jb(xb);
xb.prototype.cancel = function(a) {
  this.Oa == yb && qb(function() {
    var b = new Db(a);
    Eb(this, b);
  }, this);
};
function Eb(a, b) {
  if (a.Oa == yb) {
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
        0 <= e && (c.Oa == yb && 1 == d ? Eb(c, b) : (d = c.Ha.splice(e, 1)[0], Fb(c, d, Bb, b)));
      }
    } else {
      zb(a, Bb, b);
    }
  }
}
function Gb(a, b) {
  a.Ha && a.Ha.length || a.Oa != Ab && a.Oa != Bb || Hb(a);
  a.Ha || (a.Ha = []);
  a.Ha.push(b);
}
function Cb(a, b, c, d) {
  var e = {oc:null, wd:null, xd:null};
  e.oc = new xb(function(a, h) {
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
        void 0 === e && b instanceof Db ? h(b) : a(e);
      } catch (m) {
        h(m);
      }
    } : h;
  });
  e.oc.Sa = a;
  Gb(a, e);
  return e.oc;
}
xb.prototype.yd = function(a) {
  this.Oa = yb;
  zb(this, Ab, a);
};
xb.prototype.zd = function(a) {
  this.Oa = yb;
  zb(this, Bb, a);
};
function zb(a, b, c) {
  if (a.Oa == yb) {
    if (a == c) {
      b = Bb, c = new TypeError("Promise cannot resolve to itself");
    } else {
      if (kb(c)) {
        a.Oa = 1;
        c.then(a.yd, a.zd, a);
        return;
      }
      if (ga(c)) {
        try {
          var d = c.then;
          if (fa(d)) {
            Ib(a, c, d);
            return;
          }
        } catch (e) {
          b = Bb, c = e;
        }
      }
    }
    a.hb = c;
    a.Oa = b;
    Hb(a);
    b != Bb || c instanceof Db || Jb(a, c);
  }
}
function Ib(a, b, c) {
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
function Hb(a) {
  a.Lc || (a.Lc = !0, qb(a.Yd, a));
}
xb.prototype.Yd = function() {
  for (;this.Ha && this.Ha.length;) {
    var a = this.Ha;
    this.Ha = [];
    for (var b = 0;b < a.length;b++) {
      Fb(this, a[b], this.Oa, this.hb);
    }
  }
  this.Lc = !1;
};
function Fb(a, b, c, d) {
  if (c == Ab) {
    b.wd(d);
  } else {
    for (;a && a.vc;a = a.Sa) {
      a.vc = !1;
    }
    b.xd(d);
  }
}
function Jb(a, b) {
  a.vc = !0;
  qb(function() {
    a.vc && Kb.call(null, b);
  });
}
var Kb = mb;
function Db(a) {
  ra.call(this, a);
}
qa(Db, ra);
Db.prototype.name = "cancel";
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Lb(a, b) {
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
Lb.prototype.cancel = function(a) {
  if (this.Db) {
    this.hb instanceof Lb && this.hb.cancel();
  } else {
    if (this.Sa) {
      var b = this.Sa;
      delete this.Sa;
      a ? b.cancel(a) : (b.Cc--, 0 >= b.Cc && b.cancel());
    }
    this.vd ? this.vd.call(this.nd, this) : this.Sc = !0;
    if (!this.Db) {
      a = new Mb;
      if (this.Db) {
        if (!this.Sc) {
          throw new Nb;
        }
        this.Sc = !1;
      }
      this.Db = !0;
      this.hb = a;
      this.Rb = !0;
      Ob(this);
    }
  }
};
Lb.prototype.md = function(a, b) {
  this.Bc = !1;
  this.Db = !0;
  this.hb = b;
  this.Rb = !a;
  Ob(this);
};
function Pb(a, b, c) {
  a.zc.push([b, c, void 0]);
  a.Db && Ob(a);
}
Lb.prototype.then = function(a, b, c) {
  var d, e, f = new xb(function(a, b) {
    d = a;
    e = b;
  });
  Pb(this, d, function(a) {
    a instanceof Mb ? f.cancel() : e(a);
  });
  return f.then(a, b, c);
};
jb(Lb);
function Qb(a) {
  return La(a.zc, function(a) {
    return fa(a[1]);
  });
}
function Ob(a) {
  if (a.Ac && a.Db && Qb(a)) {
    var b = a.Ac, c = Rb[b];
    c && (ca.clearTimeout(c.xc), delete Rb[b]);
    a.Ac = 0;
  }
  a.Sa && (a.Sa.Cc--, delete a.Sa);
  for (var b = a.hb, d = c = !1;a.zc.length && !a.Bc;) {
    var e = a.zc.shift(), f = e[0], h = e[1], e = e[2];
    if (f = a.Rb ? h : f) {
      try {
        var k = f.call(e || a.nd, b);
        void 0 !== k && (a.Rb = a.Rb && (k == b || k instanceof Error), a.hb = b = k);
        kb(b) && (d = !0, a.Bc = !0);
      } catch (l) {
        b = l, a.Rb = !0, Qb(a) || (c = !0);
      }
    }
  }
  a.hb = b;
  d && (k = oa(a.md, a, !0), d = oa(a.md, a, !1), b instanceof Lb ? (Pb(b, k, d), b.Bd = !0) : b.then(k, d));
  c && (b = new Sb(b), Rb[b.xc] = b, a.Ac = b.xc);
}
function Nb() {
  ra.call(this);
}
qa(Nb, ra);
Nb.prototype.message = "Deferred has already fired";
Nb.prototype.name = "AlreadyCalledError";
function Mb() {
  ra.call(this);
}
qa(Mb, ra);
Mb.prototype.message = "Deferred was canceled";
Mb.prototype.name = "CanceledError";
function Sb(a) {
  this.xc = ca.setTimeout(oa(this.le, this), 0);
  this.Xd = a;
}
Sb.prototype.le = function() {
  delete Rb[this.xc];
  throw this.Xd;
};
var Rb = {};
var Tb = !Wa || Wa && 9 <= ib;
!Za && !Wa || Wa && Wa && 9 <= ib || Za && gb("1.9.1");
Wa && gb("9");
function Ub(a, b) {
  Pa(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Vb ? a.setAttribute(Vb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
  });
}
var Vb = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Wb(a, b, c) {
  var d = arguments, e = document, f = d[0], h = d[1];
  if (!Tb && h && (h.name || h.type)) {
    f = ["\x3c", f];
    h.name && f.push(' name\x3d"', sa(h.name), '"');
    if (h.type) {
      f.push(' type\x3d"', sa(h.type), '"');
      var k = {};
      Ra(k, h);
      delete k.type;
      h = k;
    }
    f.push("\x3e");
    f = f.join("");
  }
  f = e.createElement(f);
  h && (ea(h) ? f.className = h : "array" == n(h) ? f.className = h.join(" ") : Ub(f, h));
  2 < d.length && Xb(e, f, d);
  return f;
}
function Xb(a, b, c) {
  function d(c) {
    c && b.appendChild(ea(c) ? a.createTextNode(c) : c);
  }
  for (var e = 2;e < c.length;e++) {
    var f = c[e];
    !da(f) || ga(f) && 0 < f.nodeType ? d(f) : Ka(Yb(f) ? Ma(f) : f, d);
  }
}
function Yb(a) {
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
;function Zb(a, b) {
  null != a && this.append.apply(this, arguments);
}
g = Zb.prototype;
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
var $b;
if ("undefined" === typeof ac) {
  var ac = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
var bc = null;
if ("undefined" === typeof cc) {
  var cc = null
}
function dc() {
  return new ec(null, 5, [fc, !0, gc, !0, hc, !1, ic, !1, jc, null], null);
}
function v(a) {
  return null != a && !1 !== a;
}
function kc(a) {
  return null == a;
}
function lc(a) {
  return a instanceof Array;
}
function mc(a) {
  return v(a) ? !1 : !0;
}
function x(a, b) {
  return a[n(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function nc(a) {
  return null == a ? null : a.constructor;
}
function y(a, b) {
  var c = nc(b), c = v(v(c) ? c.Pb : c) ? c.Nb : n(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function oc(a) {
  var b = a.Nb;
  return v(b) ? b : "" + B(a);
}
var pc = "undefined" !== typeof Symbol && "function" === n(Symbol) ? Symbol.iterator : "@@iterator";
function qc(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
function rc() {
  switch(arguments.length) {
    case 1:
      return sc(arguments[0]);
    case 2:
      return sc(arguments[1]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function tc(a) {
  return sc(a);
}
function sc(a) {
  function b(a, b) {
    a.push(b);
    return a;
  }
  var c = [];
  return vc ? vc(b, c, a) : wc.call(null, b, c, a);
}
var xc = {}, yc = {}, zc = {}, Ac = function Ac(b) {
  if (b ? b.I : b) {
    return b.I(b);
  }
  var c;
  c = Ac[n(null == b ? null : b)];
  if (!c && (c = Ac._, !c)) {
    throw y("ICounted.-count", b);
  }
  return c.call(null, b);
}, Bc = function Bc(b) {
  if (b ? b.Q : b) {
    return b.Q(b);
  }
  var c;
  c = Bc[n(null == b ? null : b)];
  if (!c && (c = Bc._, !c)) {
    throw y("IEmptyableCollection.-empty", b);
  }
  return c.call(null, b);
}, Cc = {}, Dc = function Dc(b, c) {
  if (b ? b.G : b) {
    return b.G(b, c);
  }
  var d;
  d = Dc[n(null == b ? null : b)];
  if (!d && (d = Dc._, !d)) {
    throw y("ICollection.-conj", b);
  }
  return d.call(null, b, c);
}, Ec = {}, C = function C() {
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
    throw y("IIndexed.-nth", a);
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
    throw y("IIndexed.-nth", a);
  }
  return d.call(null, a, b, c);
};
C.v = 3;
var Fc = {}, Gc = function Gc(b) {
  if (b ? b.S : b) {
    return b.S(b);
  }
  var c;
  c = Gc[n(null == b ? null : b)];
  if (!c && (c = Gc._, !c)) {
    throw y("ISeq.-first", b);
  }
  return c.call(null, b);
}, Hc = function Hc(b) {
  if (b ? b.W : b) {
    return b.W(b);
  }
  var c;
  c = Hc[n(null == b ? null : b)];
  if (!c && (c = Hc._, !c)) {
    throw y("ISeq.-rest", b);
  }
  return c.call(null, b);
}, Ic = {}, Jc = {}, Kc = function Kc() {
  switch(arguments.length) {
    case 2:
      return Kc.a(arguments[0], arguments[1]);
    case 3:
      return Kc.d(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
Kc.a = function(a, b) {
  if (a ? a.w : a) {
    return a.w(a, b);
  }
  var c;
  c = Kc[n(null == a ? null : a)];
  if (!c && (c = Kc._, !c)) {
    throw y("ILookup.-lookup", a);
  }
  return c.call(null, a, b);
};
Kc.d = function(a, b, c) {
  if (a ? a.u : a) {
    return a.u(a, b, c);
  }
  var d;
  d = Kc[n(null == a ? null : a)];
  if (!d && (d = Kc._, !d)) {
    throw y("ILookup.-lookup", a);
  }
  return d.call(null, a, b, c);
};
Kc.v = 3;
var Lc = function Lc(b, c) {
  if (b ? b.qc : b) {
    return b.qc(b, c);
  }
  var d;
  d = Lc[n(null == b ? null : b)];
  if (!d && (d = Lc._, !d)) {
    throw y("IAssociative.-contains-key?", b);
  }
  return d.call(null, b, c);
}, Mc = function Mc(b, c, d) {
  if (b ? b.pa : b) {
    return b.pa(b, c, d);
  }
  var e;
  e = Mc[n(null == b ? null : b)];
  if (!e && (e = Mc._, !e)) {
    throw y("IAssociative.-assoc", b);
  }
  return e.call(null, b, c, d);
}, Nc = {}, Oc = function Oc(b, c) {
  if (b ? b.Aa : b) {
    return b.Aa(b, c);
  }
  var d;
  d = Oc[n(null == b ? null : b)];
  if (!d && (d = Oc._, !d)) {
    throw y("IMap.-dissoc", b);
  }
  return d.call(null, b, c);
}, Pc = {}, Qc = function Qc(b) {
  if (b ? b.Zb : b) {
    return b.Zb(b);
  }
  var c;
  c = Qc[n(null == b ? null : b)];
  if (!c && (c = Qc._, !c)) {
    throw y("IMapEntry.-key", b);
  }
  return c.call(null, b);
}, Rc = function Rc(b) {
  if (b ? b.$b : b) {
    return b.$b(b);
  }
  var c;
  c = Rc[n(null == b ? null : b)];
  if (!c && (c = Rc._, !c)) {
    throw y("IMapEntry.-val", b);
  }
  return c.call(null, b);
}, Sc = {}, Tc = function Tc(b, c) {
  if (b ? b.Hc : b) {
    return b.Hc(b, c);
  }
  var d;
  d = Tc[n(null == b ? null : b)];
  if (!d && (d = Tc._, !d)) {
    throw y("ISet.-disjoin", b);
  }
  return d.call(null, b, c);
}, Uc = function Uc(b) {
  if (b ? b.rb : b) {
    return b.rb(b);
  }
  var c;
  c = Uc[n(null == b ? null : b)];
  if (!c && (c = Uc._, !c)) {
    throw y("IStack.-peek", b);
  }
  return c.call(null, b);
}, Vc = function Vc(b) {
  if (b ? b.sb : b) {
    return b.sb(b);
  }
  var c;
  c = Vc[n(null == b ? null : b)];
  if (!c && (c = Vc._, !c)) {
    throw y("IStack.-pop", b);
  }
  return c.call(null, b);
}, Wc = {}, Xc = function Xc(b, c, d) {
  if (b ? b.Bb : b) {
    return b.Bb(b, c, d);
  }
  var e;
  e = Xc[n(null == b ? null : b)];
  if (!e && (e = Xc._, !e)) {
    throw y("IVector.-assoc-n", b);
  }
  return e.call(null, b, c, d);
}, Yc = function Yc(b) {
  if (b ? b.Ib : b) {
    return b.Ib(b);
  }
  var c;
  c = Yc[n(null == b ? null : b)];
  if (!c && (c = Yc._, !c)) {
    throw y("IDeref.-deref", b);
  }
  return c.call(null, b);
}, bd = {}, cd = function cd(b) {
  if (b ? b.C : b) {
    return b.C(b);
  }
  var c;
  c = cd[n(null == b ? null : b)];
  if (!c && (c = cd._, !c)) {
    throw y("IMeta.-meta", b);
  }
  return c.call(null, b);
}, dd = {}, ed = function ed(b, c) {
  if (b ? b.D : b) {
    return b.D(b, c);
  }
  var d;
  d = ed[n(null == b ? null : b)];
  if (!d && (d = ed._, !d)) {
    throw y("IWithMeta.-with-meta", b);
  }
  return d.call(null, b, c);
}, fd = {}, hd = function hd() {
  switch(arguments.length) {
    case 2:
      return hd.a(arguments[0], arguments[1]);
    case 3:
      return hd.d(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
hd.a = function(a, b) {
  if (a ? a.T : a) {
    return a.T(a, b);
  }
  var c;
  c = hd[n(null == a ? null : a)];
  if (!c && (c = hd._, !c)) {
    throw y("IReduce.-reduce", a);
  }
  return c.call(null, a, b);
};
hd.d = function(a, b, c) {
  if (a ? a.U : a) {
    return a.U(a, b, c);
  }
  var d;
  d = hd[n(null == a ? null : a)];
  if (!d && (d = hd._, !d)) {
    throw y("IReduce.-reduce", a);
  }
  return d.call(null, a, b, c);
};
hd.v = 3;
var id = function id(b, c) {
  if (b ? b.q : b) {
    return b.q(b, c);
  }
  var d;
  d = id[n(null == b ? null : b)];
  if (!d && (d = id._, !d)) {
    throw y("IEquiv.-equiv", b);
  }
  return d.call(null, b, c);
}, jd = function jd(b) {
  if (b ? b.B : b) {
    return b.B(b);
  }
  var c;
  c = jd[n(null == b ? null : b)];
  if (!c && (c = jd._, !c)) {
    throw y("IHash.-hash", b);
  }
  return c.call(null, b);
}, kd = {}, ld = function ld(b) {
  if (b ? b.H : b) {
    return b.H(b);
  }
  var c;
  c = ld[n(null == b ? null : b)];
  if (!c && (c = ld._, !c)) {
    throw y("ISeqable.-seq", b);
  }
  return c.call(null, b);
}, md = {}, nd = {}, od = function od(b) {
  if (b ? b.Kb : b) {
    return b.Kb(b);
  }
  var c;
  c = od[n(null == b ? null : b)];
  if (!c && (c = od._, !c)) {
    throw y("IReversible.-rseq", b);
  }
  return c.call(null, b);
}, pd = function pd(b, c) {
  if (b ? b.dd : b) {
    return b.dd(0, c);
  }
  var d;
  d = pd[n(null == b ? null : b)];
  if (!d && (d = pd._, !d)) {
    throw y("IWriter.-write", b);
  }
  return d.call(null, b, c);
}, qd = {}, rd = function rd(b, c, d) {
  if (b ? b.A : b) {
    return b.A(b, c, d);
  }
  var e;
  e = rd[n(null == b ? null : b)];
  if (!e && (e = rd._, !e)) {
    throw y("IPrintWithWriter.-pr-writer", b);
  }
  return e.call(null, b, c, d);
}, sd = function sd(b, c, d) {
  if (b ? b.cd : b) {
    return b.cd(0, c, d);
  }
  var e;
  e = sd[n(null == b ? null : b)];
  if (!e && (e = sd._, !e)) {
    throw y("IWatchable.-notify-watches", b);
  }
  return e.call(null, b, c, d);
}, td = function td(b) {
  if (b ? b.Jb : b) {
    return b.Jb(b);
  }
  var c;
  c = td[n(null == b ? null : b)];
  if (!c && (c = td._, !c)) {
    throw y("IEditableCollection.-as-transient", b);
  }
  return c.call(null, b);
}, ud = function ud(b, c) {
  if (b ? b.zb : b) {
    return b.zb(b, c);
  }
  var d;
  d = ud[n(null == b ? null : b)];
  if (!d && (d = ud._, !d)) {
    throw y("ITransientCollection.-conj!", b);
  }
  return d.call(null, b, c);
}, vd = function vd(b) {
  if (b ? b.Ab : b) {
    return b.Ab(b);
  }
  var c;
  c = vd[n(null == b ? null : b)];
  if (!c && (c = vd._, !c)) {
    throw y("ITransientCollection.-persistent!", b);
  }
  return c.call(null, b);
}, wd = function wd(b, c, d) {
  if (b ? b.dc : b) {
    return b.dc(b, c, d);
  }
  var e;
  e = wd[n(null == b ? null : b)];
  if (!e && (e = wd._, !e)) {
    throw y("ITransientAssociative.-assoc!", b);
  }
  return e.call(null, b, c, d);
}, xd = function xd(b, c, d) {
  if (b ? b.ad : b) {
    return b.ad(0, c, d);
  }
  var e;
  e = xd[n(null == b ? null : b)];
  if (!e && (e = xd._, !e)) {
    throw y("ITransientVector.-assoc-n!", b);
  }
  return e.call(null, b, c, d);
}, yd = function yd(b) {
  if (b ? b.Zc : b) {
    return b.Zc();
  }
  var c;
  c = yd[n(null == b ? null : b)];
  if (!c && (c = yd._, !c)) {
    throw y("IChunk.-drop-first", b);
  }
  return c.call(null, b);
}, zd = function zd(b) {
  if (b ? b.Ec : b) {
    return b.Ec(b);
  }
  var c;
  c = zd[n(null == b ? null : b)];
  if (!c && (c = zd._, !c)) {
    throw y("IChunkedSeq.-chunked-first", b);
  }
  return c.call(null, b);
}, Ad = function Ad(b) {
  if (b ? b.Fc : b) {
    return b.Fc(b);
  }
  var c;
  c = Ad[n(null == b ? null : b)];
  if (!c && (c = Ad._, !c)) {
    throw y("IChunkedSeq.-chunked-rest", b);
  }
  return c.call(null, b);
}, Bd = function Bd(b) {
  if (b ? b.Dc : b) {
    return b.Dc(b);
  }
  var c;
  c = Bd[n(null == b ? null : b)];
  if (!c && (c = Bd._, !c)) {
    throw y("IChunkedNext.-chunked-next", b);
  }
  return c.call(null, b);
}, Cd = function Cd(b) {
  if (b ? b.ac : b) {
    return b.ac(b);
  }
  var c;
  c = Cd[n(null == b ? null : b)];
  if (!c && (c = Cd._, !c)) {
    throw y("INamed.-name", b);
  }
  return c.call(null, b);
}, Dd = function Dd(b) {
  if (b ? b.bc : b) {
    return b.bc(b);
  }
  var c;
  c = Dd[n(null == b ? null : b)];
  if (!c && (c = Dd._, !c)) {
    throw y("INamed.-namespace", b);
  }
  return c.call(null, b);
}, Ed = function Ed(b, c) {
  if (b ? b.Od : b) {
    return b.Od(b, c);
  }
  var d;
  d = Ed[n(null == b ? null : b)];
  if (!d && (d = Ed._, !d)) {
    throw y("IReset.-reset!", b);
  }
  return d.call(null, b, c);
}, Fd = function Fd() {
  switch(arguments.length) {
    case 2:
      return Fd.a(arguments[0], arguments[1]);
    case 3:
      return Fd.d(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Fd.s(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Fd.J(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
Fd.a = function(a, b) {
  if (a ? a.Qd : a) {
    return a.Qd(a, b);
  }
  var c;
  c = Fd[n(null == a ? null : a)];
  if (!c && (c = Fd._, !c)) {
    throw y("ISwap.-swap!", a);
  }
  return c.call(null, a, b);
};
Fd.d = function(a, b, c) {
  if (a ? a.Rd : a) {
    return a.Rd(a, b, c);
  }
  var d;
  d = Fd[n(null == a ? null : a)];
  if (!d && (d = Fd._, !d)) {
    throw y("ISwap.-swap!", a);
  }
  return d.call(null, a, b, c);
};
Fd.s = function(a, b, c, d) {
  if (a ? a.Sd : a) {
    return a.Sd(a, b, c, d);
  }
  var e;
  e = Fd[n(null == a ? null : a)];
  if (!e && (e = Fd._, !e)) {
    throw y("ISwap.-swap!", a);
  }
  return e.call(null, a, b, c, d);
};
Fd.J = function(a, b, c, d, e) {
  if (a ? a.Td : a) {
    return a.Td(a, b, c, d, e);
  }
  var f;
  f = Fd[n(null == a ? null : a)];
  if (!f && (f = Fd._, !f)) {
    throw y("ISwap.-swap!", a);
  }
  return f.call(null, a, b, c, d, e);
};
Fd.v = 5;
var Gd = function Gd(b, c) {
  if (b ? b.bd : b) {
    return b.bd(0, c);
  }
  var d;
  d = Gd[n(null == b ? null : b)];
  if (!d && (d = Gd._, !d)) {
    throw y("IVolatile.-vreset!", b);
  }
  return d.call(null, b, c);
}, Hd = {}, Id = function Id(b) {
  if (b ? b.Yb : b) {
    return b.Yb(b);
  }
  var c;
  c = Id[n(null == b ? null : b)];
  if (!c && (c = Id._, !c)) {
    throw y("IIterable.-iterator", b);
  }
  return c.call(null, b);
};
function Jd(a) {
  this.ke = a;
  this.g = 1073741824;
  this.r = 0;
}
Jd.prototype.dd = function(a, b) {
  return this.ke.append(b);
};
function Kd(a) {
  var b = new Zb;
  a.A(null, new Jd(b), dc());
  return "" + B(b);
}
var Ld = "undefined" !== typeof Math.imul && 0 !== (Math.imul.a ? Math.imul.a(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.a ? Math.imul.a(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Md(a) {
  a = Ld(a | 0, -862048943);
  return Ld(a << 15 | a >>> -15, 461845907);
}
function Nd(a, b) {
  var c = (a | 0) ^ (b | 0);
  return Ld(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function Od(a, b) {
  var c = (a | 0) ^ b, c = Ld(c ^ c >>> 16, -2048144789), c = Ld(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function Pd(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Nd(c, Md(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ Md(a.charCodeAt(a.length - 1)) : b;
  return Od(b, Ld(2, a.length));
}
var Qd = {}, Rd = 0;
function Sd(a) {
  255 < Rd && (Qd = {}, Rd = 0);
  var b = Qd[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Ld(31, d) + a.charCodeAt(c), c = e
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
    Qd[a] = b;
    Rd += 1;
  }
  return a = b;
}
function Td(a) {
  a && (a.g & 4194304 || a.qe) ? a = a.B(null) : "number" === typeof a ? a = (Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Sd(a), 0 !== a && (a = Md(a), a = Nd(0, a), a = Od(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : jd(a);
  return a;
}
function Ud(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Vd(a, b) {
  if (a.ib === b.ib) {
    return 0;
  }
  var c = mc(a.oa);
  if (v(c ? b.oa : c)) {
    return-1;
  }
  if (v(a.oa)) {
    if (mc(b.oa)) {
      return 1;
    }
    c = Na(a.oa, b.oa);
    return 0 === c ? Na(a.name, b.name) : c;
  }
  return Na(a.name, b.name);
}
function Wd(a, b, c, d, e) {
  this.oa = a;
  this.name = b;
  this.ib = c;
  this.Gb = d;
  this.ra = e;
  this.g = 2154168321;
  this.r = 4096;
}
g = Wd.prototype;
g.toString = function() {
  return this.ib;
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.q = function(a, b) {
  return b instanceof Wd ? this.ib === b.ib : !1;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Kc.d(c, this, null);
      case 3:
        return Kc.d(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return Kc.d(c, this, null);
  };
  a.d = function(a, c, d) {
    return Kc.d(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(qc(b)));
};
g.b = function(a) {
  return Kc.d(a, this, null);
};
g.a = function(a, b) {
  return Kc.d(a, this, b);
};
g.C = function() {
  return this.ra;
};
g.D = function(a, b) {
  return new Wd(this.oa, this.name, this.ib, this.Gb, b);
};
g.B = function() {
  var a = this.Gb;
  return null != a ? a : this.Gb = a = Ud(Pd(this.name), Sd(this.oa));
};
g.ac = function() {
  return this.name;
};
g.bc = function() {
  return this.oa;
};
g.A = function(a, b) {
  return pd(b, this.ib);
};
function Xd(a) {
  return a instanceof Wd ? a : Yd(null, a);
}
function Yd(a, b) {
  var c = null != a ? [B(a), B("/"), B(b)].join("") : b;
  return new Wd(a, b, c, null, null);
}
function D(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 8388608 || a.Pd)) {
    return a.H(null);
  }
  if (lc(a) || "string" === typeof a) {
    return 0 === a.length ? null : new E(a, 0);
  }
  if (x(kd, a)) {
    return ld(a);
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
  return null == a ? null : Gc(a);
}
function Zd(a) {
  return null != a ? a && (a.g & 64 || a.cc) ? a.W(null) : (a = D(a)) ? Hc(a) : $d : $d;
}
function H(a) {
  return null == a ? null : a && (a.g & 128 || a.sc) ? a.ka(null) : D(Zd(a));
}
var ae = function ae() {
  switch(arguments.length) {
    case 1:
      return ae.b(arguments[0]);
    case 2:
      return ae.a(arguments[0], arguments[1]);
    default:
      return ae.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
ae.b = function() {
  return!0;
};
ae.a = function(a, b) {
  return null == a ? null == b : a === b || id(a, b);
};
ae.k = function(a, b, c) {
  for (;;) {
    if (ae.a(a, b)) {
      if (H(c)) {
        a = b, b = F(c), c = H(c);
      } else {
        return ae.a(b, F(c));
      }
    } else {
      return!1;
    }
  }
};
ae.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return ae.k(b, a, c);
};
ae.v = 2;
function be(a) {
  this.F = a;
}
be.prototype.next = function() {
  if (null != this.F) {
    var a = F(this.F);
    this.F = H(this.F);
    return{value:a, done:!1};
  }
  return{value:null, done:!0};
};
function ce(a) {
  return new be(D(a));
}
function de(a, b) {
  var c = Md(a), c = Nd(0, c);
  return Od(c, b);
}
function ee(a) {
  var b = 0, c = 1;
  for (a = D(a);;) {
    if (null != a) {
      b += 1, c = Ld(31, c) + Td(F(a)) | 0, a = H(a);
    } else {
      return de(c, b);
    }
  }
}
var fe = de(1, 0);
function ge(a) {
  var b = 0, c = 0;
  for (a = D(a);;) {
    if (null != a) {
      b += 1, c = c + Td(F(a)) | 0, a = H(a);
    } else {
      return de(c, b);
    }
  }
}
var he = de(0, 0);
zc["null"] = !0;
Ac["null"] = function() {
  return 0;
};
Date.prototype.q = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
Date.prototype.Wb = !0;
Date.prototype.Hb = function(a, b) {
  return Na(this.valueOf(), b.valueOf());
};
id.number = function(a, b) {
  return a === b;
};
xc["function"] = !0;
bd["function"] = !0;
cd["function"] = function() {
  return null;
};
jd._ = function(a) {
  return a[ia] || (a[ia] = ++ja);
};
function ie(a) {
  return a + 1;
}
function je(a) {
  this.n = a;
  this.g = 32768;
  this.r = 0;
}
je.prototype.Ib = function() {
  return this.n;
};
function ke(a) {
  return a instanceof je;
}
function I(a) {
  return Yc(a);
}
function le(a, b) {
  var c = Ac(a);
  if (0 === c) {
    return b.m ? b.m() : b.call(null);
  }
  for (var d = C.a(a, 0), e = 1;;) {
    if (e < c) {
      var f = C.a(a, e), d = b.a ? b.a(d, f) : b.call(null, d, f);
      if (ke(d)) {
        return Yc(d);
      }
      e += 1;
    } else {
      return d;
    }
  }
}
function me(a, b, c) {
  var d = Ac(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = C.a(a, c), e = b.a ? b.a(e, f) : b.call(null, e, f);
      if (ke(e)) {
        return Yc(e);
      }
      c += 1;
    } else {
      return e;
    }
  }
}
function ne(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.m ? b.m() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var f = a[e], d = b.a ? b.a(d, f) : b.call(null, d, f);
      if (ke(d)) {
        return Yc(d);
      }
      e += 1;
    } else {
      return d;
    }
  }
}
function oe(a, b, c) {
  var d = a.length, e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = a[c], e = b.a ? b.a(e, f) : b.call(null, e, f);
      if (ke(e)) {
        return Yc(e);
      }
      c += 1;
    } else {
      return e;
    }
  }
}
function pe(a, b, c, d) {
  for (var e = a.length;;) {
    if (d < e) {
      var f = a[d];
      c = b.a ? b.a(c, f) : b.call(null, c, f);
      if (ke(c)) {
        return Yc(c);
      }
      d += 1;
    } else {
      return c;
    }
  }
}
function qe(a) {
  return a ? a.g & 2 || a.Ed ? !0 : a.g ? !1 : x(zc, a) : x(zc, a);
}
function re(a) {
  return a ? a.g & 16 || a.$c ? !0 : a.g ? !1 : x(Ec, a) : x(Ec, a);
}
function te(a, b) {
  this.c = a;
  this.o = b;
}
te.prototype.Ya = function() {
  return this.o < this.c.length;
};
te.prototype.next = function() {
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
  return Kd(this);
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
  return new te(this.c, this.o);
};
g.ka = function() {
  return this.o + 1 < this.c.length ? new E(this.c, this.o + 1) : null;
};
g.I = function() {
  return this.c.length - this.o;
};
g.Kb = function() {
  var a = Ac(this);
  return 0 < a ? new ue(this, a - 1, null) : null;
};
g.B = function() {
  return ee(this);
};
g.q = function(a, b) {
  return ve.a ? ve.a(this, b) : ve.call(null, this, b);
};
g.Q = function() {
  return $d;
};
g.T = function(a, b) {
  return pe(this.c, b, this.c[this.o], this.o + 1);
};
g.U = function(a, b, c) {
  return pe(this.c, b, c, this.o);
};
g.S = function() {
  return this.c[this.o];
};
g.W = function() {
  return this.o + 1 < this.c.length ? new E(this.c, this.o + 1) : $d;
};
g.H = function() {
  return this;
};
g.G = function(a, b) {
  return J.a ? J.a(b, this) : J.call(null, b, this);
};
E.prototype[pc] = function() {
  return ce(this);
};
function we(a, b) {
  return b < a.length ? new E(a, b) : null;
}
function K() {
  switch(arguments.length) {
    case 1:
      return we(arguments[0], 0);
    case 2:
      return we(arguments[0], arguments[1]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function ue(a, b, c) {
  this.pc = a;
  this.o = b;
  this.l = c;
  this.g = 32374990;
  this.r = 8192;
}
g = ue.prototype;
g.toString = function() {
  return Kd(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.l;
};
g.ka = function() {
  return 0 < this.o ? new ue(this.pc, this.o - 1, null) : null;
};
g.I = function() {
  return this.o + 1;
};
g.B = function() {
  return ee(this);
};
g.q = function(a, b) {
  return ve.a ? ve.a(this, b) : ve.call(null, this, b);
};
g.Q = function() {
  var a = this.l;
  return xe.a ? xe.a($d, a) : xe.call(null, $d, a);
};
g.T = function(a, b) {
  return ye ? ye(b, this) : ze.call(null, b, this);
};
g.U = function(a, b, c) {
  return Ae ? Ae(b, c, this) : ze.call(null, b, c, this);
};
g.S = function() {
  return C.a(this.pc, this.o);
};
g.W = function() {
  return 0 < this.o ? new ue(this.pc, this.o - 1, null) : $d;
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new ue(this.pc, this.o, b);
};
g.G = function(a, b) {
  return J.a ? J.a(b, this) : J.call(null, b, this);
};
ue.prototype[pc] = function() {
  return ce(this);
};
function Be(a) {
  for (;;) {
    var b = H(a);
    if (null != b) {
      a = b;
    } else {
      return F(a);
    }
  }
}
id._ = function(a, b) {
  return a === b;
};
var Ce = function Ce() {
  switch(arguments.length) {
    case 0:
      return Ce.m();
    case 1:
      return Ce.b(arguments[0]);
    case 2:
      return Ce.a(arguments[0], arguments[1]);
    default:
      return Ce.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Ce.m = function() {
  return De;
};
Ce.b = function(a) {
  return a;
};
Ce.a = function(a, b) {
  return null != a ? Dc(a, b) : Dc($d, b);
};
Ce.k = function(a, b, c) {
  for (;;) {
    if (v(c)) {
      a = Ce.a(a, b), b = F(c), c = H(c);
    } else {
      return Ce.a(a, b);
    }
  }
};
Ce.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return Ce.k(b, a, c);
};
Ce.v = 2;
function M(a) {
  if (null != a) {
    if (a && (a.g & 2 || a.Ed)) {
      a = a.I(null);
    } else {
      if (lc(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (x(zc, a)) {
            a = Ac(a);
          } else {
            a: {
              a = D(a);
              for (var b = 0;;) {
                if (qe(a)) {
                  a = b + Ac(a);
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
function Ee(a, b) {
  for (var c = null;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return D(a) ? F(a) : c;
    }
    if (re(a)) {
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
function Fe(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number");
  }
  if (null == a) {
    return a;
  }
  if (a && (a.g & 16 || a.$c)) {
    return a.O(null, b);
  }
  if (lc(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (x(Ec, a)) {
    return C.a(a, b);
  }
  if (a ? a.g & 64 || a.cc || (a.g ? 0 : x(Fc, a)) : x(Fc, a)) {
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
        if (re(c)) {
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
  throw Error([B("nth not supported on this type "), B(oc(nc(a)))].join(""));
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
  if (lc(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (x(Ec, a)) {
    return C.a(a, b);
  }
  if (a ? a.g & 64 || a.cc || (a.g ? 0 : x(Fc, a)) : x(Fc, a)) {
    return Ee(a, b);
  }
  throw Error([B("nth not supported on this type "), B(oc(nc(a)))].join(""));
}
function Ge(a, b) {
  return null == a ? null : a && (a.g & 256 || a.Id) ? a.w(null, b) : lc(a) ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : x(Jc, a) ? Kc.a(a, b) : null;
}
function He(a, b, c) {
  return null != a ? a && (a.g & 256 || a.Id) ? a.u(null, b, c) : lc(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : x(Jc, a) ? Kc.d(a, b, c) : c : c;
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
  return null != a ? Mc(a, b, c) : Ie([b], [c]);
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
var Je = function Je() {
  switch(arguments.length) {
    case 1:
      return Je.b(arguments[0]);
    case 2:
      return Je.a(arguments[0], arguments[1]);
    default:
      return Je.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Je.b = function(a) {
  return a;
};
Je.a = function(a, b) {
  return null == a ? null : Oc(a, b);
};
Je.k = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = Je.a(a, b);
    if (v(c)) {
      b = F(c), c = H(c);
    } else {
      return a;
    }
  }
};
Je.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return Je.k(b, a, c);
};
Je.v = 2;
function Ke(a) {
  var b = fa(a);
  return v(b) ? b : a ? v(v(null) ? null : a.Dd) ? !0 : a.Ob ? !1 : x(xc, a) : x(xc, a);
}
function Le(a, b) {
  this.e = a;
  this.l = b;
  this.g = 393217;
  this.r = 0;
}
g = Le.prototype;
g.C = function() {
  return this.l;
};
g.D = function(a, b) {
  return new Le(this.e, b);
};
g.Dd = !0;
g.call = function() {
  function a(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, z, G, L, Q, ba) {
    a = this.e;
    return Me.Xb ? Me.Xb(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, z, G, L, Q, ba) : Me.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, z, G, L, Q, ba);
  }
  function b(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, z, G, L, Q) {
    a = this;
    return a.e.ga ? a.e.ga(b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, z, G, L, Q) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, z, G, L, Q);
  }
  function c(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, z, G, L) {
    a = this;
    return a.e.fa ? a.e.fa(b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, z, G, L) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, z, G, L);
  }
  function d(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, z, G) {
    a = this;
    return a.e.ea ? a.e.ea(b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, z, G) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, z, G);
  }
  function e(a, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, z) {
    a = this;
    return a.e.da ? a.e.da(b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, z) : a.e.call(null, b, c, d, e, f, h, k, l, m, p, q, r, u, t, w, A, z);
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
  function z(a, b, c, d, e, f, h) {
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
  function Da(a) {
    a = this;
    return a.e.m ? a.e.m() : a.e.call(null);
  }
  var u = null, u = function(u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va, Ja, Xa, ab, lb, Oa, Ya, cb, db, uc, gd, se) {
    switch(arguments.length) {
      case 1:
        return Da.call(this, u);
      case 2:
        return ba.call(this, u, aa);
      case 3:
        return Q.call(this, u, aa, ha);
      case 4:
        return L.call(this, u, aa, ha, ka);
      case 5:
        return G.call(this, u, aa, ha, ka, pa);
      case 6:
        return A.call(this, u, aa, ha, ka, pa, ua);
      case 7:
        return z.call(this, u, aa, ha, ka, pa, ua, wa);
      case 8:
        return w.call(this, u, aa, ha, ka, pa, ua, wa, Ba);
      case 9:
        return t.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea);
      case 10:
        return r.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la);
      case 11:
        return q.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va);
      case 12:
        return p.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va, Ja);
      case 13:
        return m.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va, Ja, Xa);
      case 14:
        return l.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va, Ja, Xa, ab);
      case 15:
        return k.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va, Ja, Xa, ab, lb);
      case 16:
        return h.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va, Ja, Xa, ab, lb, Oa);
      case 17:
        return f.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va, Ja, Xa, ab, lb, Oa, Ya);
      case 18:
        return e.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va, Ja, Xa, ab, lb, Oa, Ya, cb);
      case 19:
        return d.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va, Ja, Xa, ab, lb, Oa, Ya, cb, db);
      case 20:
        return c.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va, Ja, Xa, ab, lb, Oa, Ya, cb, db, uc);
      case 21:
        return b.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va, Ja, Xa, ab, lb, Oa, Ya, cb, db, uc, gd);
      case 22:
        return a.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va, Ja, Xa, ab, lb, Oa, Ya, cb, db, uc, gd, se);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  u.b = Da;
  u.a = ba;
  u.d = Q;
  u.s = L;
  u.J = G;
  u.K = A;
  u.ha = z;
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
  return this.call.apply(this, [this].concat(qc(b)));
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
g.ca = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z) {
  return this.e.ca ? this.e.ca(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z);
};
g.da = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A) {
  return this.e.da ? this.e.da(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A);
};
g.ea = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G) {
  return this.e.ea ? this.e.ea(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G);
};
g.fa = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L) {
  return this.e.fa ? this.e.fa(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L);
};
g.ga = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L, Q) {
  return this.e.ga ? this.e.ga(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L, Q) : this.e.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L, Q);
};
g.Gc = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L, Q, ba) {
  var Da = this.e;
  return Me.Xb ? Me.Xb(Da, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L, Q, ba) : Me.call(null, Da, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L, Q, ba);
};
function xe(a, b) {
  return Ke(a) && !(a ? a.g & 262144 || a.Ud || (a.g ? 0 : x(dd, a)) : x(dd, a)) ? new Le(a, b) : null == a ? null : ed(a, b);
}
function Ne(a) {
  var b = null != a;
  return(b ? a ? a.g & 131072 || a.Ld || (a.g ? 0 : x(bd, a)) : x(bd, a) : b) ? cd(a) : null;
}
function Oe(a) {
  return null == a ? null : Uc(a);
}
var Pe = function Pe() {
  switch(arguments.length) {
    case 1:
      return Pe.b(arguments[0]);
    case 2:
      return Pe.a(arguments[0], arguments[1]);
    default:
      return Pe.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Pe.b = function(a) {
  return a;
};
Pe.a = function(a, b) {
  return null == a ? null : Tc(a, b);
};
Pe.k = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = Pe.a(a, b);
    if (v(c)) {
      b = F(c), c = H(c);
    } else {
      return a;
    }
  }
};
Pe.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return Pe.k(b, a, c);
};
Pe.v = 2;
function Qe(a) {
  return null == a || mc(D(a));
}
function Re(a) {
  return null == a ? !1 : a ? a.g & 4096 || a.te ? !0 : a.g ? !1 : x(Sc, a) : x(Sc, a);
}
function Se(a) {
  return a ? a.g & 16777216 || a.se ? !0 : a.g ? !1 : x(md, a) : x(md, a);
}
function Te(a) {
  return null == a ? !1 : a ? a.g & 1024 || a.Jd ? !0 : a.g ? !1 : x(Nc, a) : x(Nc, a);
}
function Ue(a) {
  return a ? a.g & 16384 || a.ue ? !0 : a.g ? !1 : x(Wc, a) : x(Wc, a);
}
function Ve(a) {
  return a ? a.r & 512 || a.ne ? !0 : !1 : !1;
}
function We(a) {
  var b = [];
  Pa(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function Xe(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, --e, b += 1;
  }
}
var Ye = {};
function Ze(a) {
  return null == a ? !1 : a ? a.g & 64 || a.cc ? !0 : a.g ? !1 : x(Fc, a) : x(Fc, a);
}
function $e(a) {
  return v(a) ? !0 : !1;
}
function af(a, b) {
  return He(a, b, Ye) === Ye ? !1 : !0;
}
function bf(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (nc(a) === nc(b)) {
    return a && (a.r & 2048 || a.Wb) ? a.Hb(null, b) : Na(a, b);
  }
  throw Error("compare on non-nil objects of different types");
}
function cf(a, b) {
  var c = M(a), d = M(b);
  if (c < d) {
    c = -1;
  } else {
    if (c > d) {
      c = 1;
    } else {
      a: {
        for (d = 0;;) {
          var e = bf(Fe(a, d), Fe(b, d));
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
function ze() {
  switch(arguments.length) {
    case 2:
      return ye(arguments[0], arguments[1]);
    case 3:
      return Ae(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function ye(a, b) {
  var c = D(b);
  if (c) {
    var d = F(c), c = H(c);
    return vc ? vc(a, d, c) : wc.call(null, a, d, c);
  }
  return a.m ? a.m() : a.call(null);
}
function Ae(a, b, c) {
  for (c = D(c);;) {
    if (c) {
      var d = F(c);
      b = a.a ? a.a(b, d) : a.call(null, b, d);
      if (ke(b)) {
        return Yc(b);
      }
      c = H(c);
    } else {
      return b;
    }
  }
}
function wc() {
  switch(arguments.length) {
    case 2:
      return df(arguments[0], arguments[1]);
    case 3:
      return vc(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function df(a, b) {
  return b && (b.g & 524288 || b.Nd) ? b.T(null, a) : lc(b) ? ne(b, a) : "string" === typeof b ? ne(b, a) : x(fd, b) ? hd.a(b, a) : ye(a, b);
}
function vc(a, b, c) {
  return c && (c.g & 524288 || c.Nd) ? c.U(null, a, b) : lc(c) ? oe(c, a, b) : "string" === typeof c ? oe(c, a, b) : x(fd, c) ? hd.d(c, a, b) : Ae(a, b, c);
}
function ef(a) {
  return a;
}
function ff(a, b, c, d) {
  a = a.b ? a.b(b) : a.call(null, b);
  c = vc(a, c, d);
  return a.b ? a.b(c) : a.call(null, c);
}
function gf(a) {
  return a - 1;
}
var hf = function hf() {
  switch(arguments.length) {
    case 1:
      return hf.b(arguments[0]);
    case 2:
      return hf.a(arguments[0], arguments[1]);
    default:
      return hf.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
hf.b = function(a) {
  return a;
};
hf.a = function(a, b) {
  return a > b ? a : b;
};
hf.k = function(a, b, c) {
  return vc(hf, a > b ? a : b, c);
};
hf.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return hf.k(b, a, c);
};
hf.v = 2;
function jf(a) {
  a = (a - a % 2) / 2;
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
}
function kf(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function lf(a) {
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
  return null == a ? "" : Ga(a);
};
B.k = function(a, b) {
  for (var c = new Zb("" + B(a)), d = b;;) {
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
function ve(a, b) {
  var c;
  if (Se(b)) {
    if (qe(a) && qe(b) && M(a) !== M(b)) {
      c = !1;
    } else {
      a: {
        c = D(a);
        for (var d = D(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && ae.a(F(c), F(d))) {
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
  return $e(c);
}
function mf(a) {
  var b = 0;
  for (a = D(a);;) {
    if (a) {
      var c = F(a), b = (b + (Td(function() {
        var a = c;
        return nf.b ? nf.b(a) : nf.call(null, a);
      }()) ^ Td(function() {
        var a = c;
        return of.b ? of.b(a) : of.call(null, a);
      }()))) % 4503599627370496;
      a = H(a);
    } else {
      return b;
    }
  }
}
function pf(a, b, c, d, e) {
  this.l = a;
  this.first = b;
  this.V = c;
  this.count = d;
  this.i = e;
  this.g = 65937646;
  this.r = 8192;
}
g = pf.prototype;
g.toString = function() {
  return Kd(this);
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
  return Hc(this);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ee(this);
};
g.q = function(a, b) {
  return ve(this, b);
};
g.Q = function() {
  return ed($d, this.l);
};
g.T = function(a, b) {
  return ye(b, this);
};
g.U = function(a, b, c) {
  return Ae(b, c, this);
};
g.S = function() {
  return this.first;
};
g.W = function() {
  return 1 === this.count ? $d : this.V;
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new pf(b, this.first, this.V, this.count, this.i);
};
g.G = function(a, b) {
  return new pf(this.l, b, this, this.count + 1, null);
};
pf.prototype[pc] = function() {
  return ce(this);
};
function qf(a) {
  this.l = a;
  this.g = 65937614;
  this.r = 8192;
}
g = qf.prototype;
g.toString = function() {
  return Kd(this);
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
  return fe;
};
g.q = function(a, b) {
  return ve(this, b);
};
g.Q = function() {
  return this;
};
g.T = function(a, b) {
  return ye(b, this);
};
g.U = function(a, b, c) {
  return Ae(b, c, this);
};
g.S = function() {
  return null;
};
g.W = function() {
  return $d;
};
g.H = function() {
  return null;
};
g.D = function(a, b) {
  return new qf(b);
};
g.G = function(a, b) {
  return new pf(this.l, b, null, 1, null);
};
var $d = new qf(null);
qf.prototype[pc] = function() {
  return ce(this);
};
function rf(a) {
  return(a ? a.g & 134217728 || a.re || (a.g ? 0 : x(nd, a)) : x(nd, a)) ? od(a) : vc(Ce, $d, a);
}
var sf = function sf() {
  return sf.k(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
};
sf.k = function(a) {
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
  for (var c = $d;;) {
    if (0 < a) {
      var d = a - 1, c = c.G(null, b[a - 1]);
      a = d;
    } else {
      return c;
    }
  }
};
sf.v = 0;
sf.t = function(a) {
  return sf.k(D(a));
};
function tf(a, b, c, d) {
  this.l = a;
  this.first = b;
  this.V = c;
  this.i = d;
  this.g = 65929452;
  this.r = 8192;
}
g = tf.prototype;
g.toString = function() {
  return Kd(this);
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
  return null != a ? a : this.i = a = ee(this);
};
g.q = function(a, b) {
  return ve(this, b);
};
g.Q = function() {
  return xe($d, this.l);
};
g.T = function(a, b) {
  return ye(b, this);
};
g.U = function(a, b, c) {
  return Ae(b, c, this);
};
g.S = function() {
  return this.first;
};
g.W = function() {
  return null == this.V ? $d : this.V;
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new tf(b, this.first, this.V, this.i);
};
g.G = function(a, b) {
  return new tf(null, b, this, this.i);
};
tf.prototype[pc] = function() {
  return ce(this);
};
function J(a, b) {
  var c = null == b;
  return(c ? c : b && (b.g & 64 || b.cc)) ? new tf(null, a, b, null) : new tf(null, a, D(b), null);
}
function uf(a, b) {
  if (a.la === b.la) {
    return 0;
  }
  var c = mc(a.oa);
  if (v(c ? b.oa : c)) {
    return-1;
  }
  if (v(a.oa)) {
    if (mc(b.oa)) {
      return 1;
    }
    c = Na(a.oa, b.oa);
    return 0 === c ? Na(a.name, b.name) : c;
  }
  return Na(a.name, b.name);
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
        return Ge(c, this);
      case 3:
        return He(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return Ge(c, this);
  };
  a.d = function(a, c, d) {
    return He(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(qc(b)));
};
g.b = function(a) {
  return Ge(a, this);
};
g.a = function(a, b) {
  return He(a, this, b);
};
g.B = function() {
  var a = this.Gb;
  return null != a ? a : this.Gb = a = Ud(Pd(this.name), Sd(this.oa)) + 2654435769 | 0;
};
g.ac = function() {
  return this.name;
};
g.bc = function() {
  return this.oa;
};
g.A = function(a, b) {
  return pd(b, [B(":"), B(this.la)].join(""));
};
function R(a, b) {
  return a === b ? !0 : a instanceof P && b instanceof P ? a.la === b.la : !1;
}
var vf = function vf() {
  switch(arguments.length) {
    case 1:
      return vf.b(arguments[0]);
    case 2:
      return vf.a(arguments[0], arguments[1]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
vf.b = function(a) {
  if (a instanceof P) {
    return a;
  }
  if (a instanceof Wd) {
    var b;
    if (a && (a.r & 4096 || a.Md)) {
      b = a.bc(null);
    } else {
      throw Error([B("Doesn't support namespace: "), B(a)].join(""));
    }
    return new P(b, wf.b ? wf.b(a) : wf.call(null, a), a.ib, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new P(b[0], b[1], a, null) : new P(null, b[0], a, null)) : null;
};
vf.a = function(a, b) {
  return new P(a, b, [B(v(a) ? [B(a), B("/")].join("") : null), B(b)].join(""), null);
};
vf.v = 2;
function xf(a, b, c, d) {
  this.l = a;
  this.tb = b;
  this.F = c;
  this.i = d;
  this.g = 32374988;
  this.r = 0;
}
g = xf.prototype;
g.toString = function() {
  return Kd(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
function yf(a) {
  null != a.tb && (a.F = a.tb.m ? a.tb.m() : a.tb.call(null), a.tb = null);
  return a.F;
}
g.C = function() {
  return this.l;
};
g.ka = function() {
  ld(this);
  return null == this.F ? null : H(this.F);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ee(this);
};
g.q = function(a, b) {
  return ve(this, b);
};
g.Q = function() {
  return xe($d, this.l);
};
g.T = function(a, b) {
  return ye(b, this);
};
g.U = function(a, b, c) {
  return Ae(b, c, this);
};
g.S = function() {
  ld(this);
  return null == this.F ? null : F(this.F);
};
g.W = function() {
  ld(this);
  return null != this.F ? Zd(this.F) : $d;
};
g.H = function() {
  yf(this);
  if (null == this.F) {
    return null;
  }
  for (var a = this.F;;) {
    if (a instanceof xf) {
      a = yf(a);
    } else {
      return this.F = a, D(this.F);
    }
  }
};
g.D = function(a, b) {
  return new xf(b, this.tb, this.F, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
xf.prototype[pc] = function() {
  return ce(this);
};
function zf(a, b) {
  this.L = a;
  this.end = b;
  this.g = 2;
  this.r = 0;
}
zf.prototype.add = function(a) {
  this.L[this.end] = a;
  return this.end += 1;
};
zf.prototype.va = function() {
  var a = new Af(this.L, 0, this.end);
  this.L = null;
  return a;
};
zf.prototype.I = function() {
  return this.end;
};
function Af(a, b, c) {
  this.c = a;
  this.ma = b;
  this.end = c;
  this.g = 524306;
  this.r = 0;
}
g = Af.prototype;
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
  return new Af(this.c, this.ma + 1, this.end);
};
g.T = function(a, b) {
  return pe(this.c, b, this.c[this.ma], this.ma + 1);
};
g.U = function(a, b, c) {
  return pe(this.c, b, c, this.ma);
};
function Bf(a, b, c, d) {
  this.va = a;
  this.bb = b;
  this.l = c;
  this.i = d;
  this.g = 31850732;
  this.r = 1536;
}
g = Bf.prototype;
g.toString = function() {
  return Kd(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.l;
};
g.ka = function() {
  if (1 < Ac(this.va)) {
    return new Bf(yd(this.va), this.bb, this.l, null);
  }
  var a = ld(this.bb);
  return null == a ? null : a;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ee(this);
};
g.q = function(a, b) {
  return ve(this, b);
};
g.Q = function() {
  return xe($d, this.l);
};
g.S = function() {
  return C.a(this.va, 0);
};
g.W = function() {
  return 1 < Ac(this.va) ? new Bf(yd(this.va), this.bb, this.l, null) : null == this.bb ? $d : this.bb;
};
g.H = function() {
  return this;
};
g.Ec = function() {
  return this.va;
};
g.Fc = function() {
  return null == this.bb ? $d : this.bb;
};
g.D = function(a, b) {
  return new Bf(this.va, this.bb, b, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
g.Dc = function() {
  return null == this.bb ? null : this.bb;
};
Bf.prototype[pc] = function() {
  return ce(this);
};
function Cf(a, b) {
  return 0 === Ac(a) ? b : new Bf(a, b, null, null);
}
function Df(a, b) {
  a.add(b);
}
function Ef(a) {
  for (var b = [];;) {
    if (D(a)) {
      b.push(F(a)), a = H(a);
    } else {
      return b;
    }
  }
}
function Ff(a) {
  if ("number" === typeof a) {
    a: {
      var b = Array(a);
      if (Ze(null)) {
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
    a = sc(a);
  }
  return a;
}
function Gf(a, b) {
  if (qe(a)) {
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
var Hf = function Hf(b) {
  return null == b ? null : null == H(b) ? D(F(b)) : J(F(b), Hf(H(b)));
}, If = function If() {
  switch(arguments.length) {
    case 0:
      return If.m();
    case 1:
      return If.b(arguments[0]);
    case 2:
      return If.a(arguments[0], arguments[1]);
    default:
      return If.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
If.m = function() {
  return new xf(null, function() {
    return null;
  }, null, null);
};
If.b = function(a) {
  return new xf(null, function() {
    return a;
  }, null, null);
};
If.a = function(a, b) {
  return new xf(null, function() {
    var c = D(a);
    return c ? Ve(c) ? Cf(zd(c), If.a(Ad(c), b)) : J(F(c), If.a(Zd(c), b)) : b;
  }, null, null);
};
If.k = function(a, b, c) {
  return function e(a, b) {
    return new xf(null, function() {
      var c = D(a);
      return c ? Ve(c) ? Cf(zd(c), e(Ad(c), b)) : J(F(c), e(Zd(c), b)) : v(b) ? e(F(b), H(b)) : null;
    }, null, null);
  }(If.a(a, b), c);
};
If.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return If.k(b, a, c);
};
If.v = 2;
function Jf(a) {
  return vd(a);
}
var Kf = function Kf() {
  switch(arguments.length) {
    case 0:
      return Kf.m();
    case 1:
      return Kf.b(arguments[0]);
    case 2:
      return Kf.a(arguments[0], arguments[1]);
    default:
      return Kf.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Kf.m = function() {
  return td(De);
};
Kf.b = function(a) {
  return a;
};
Kf.a = function(a, b) {
  return ud(a, b);
};
Kf.k = function(a, b, c) {
  for (;;) {
    if (a = ud(a, b), v(c)) {
      b = F(c), c = H(c);
    } else {
      return a;
    }
  }
};
Kf.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return Kf.k(b, a, c);
};
Kf.v = 2;
function Lf(a, b, c) {
  var d = D(c);
  if (0 === b) {
    return a.m ? a.m() : a.call(null);
  }
  c = Gc(d);
  var e = Hc(d);
  if (1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c);
  }
  var d = Gc(e), f = Hc(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = Gc(f), h = Hc(f);
  if (3 === b) {
    return a.d ? a.d(c, d, e) : a.d ? a.d(c, d, e) : a.call(null, c, d, e);
  }
  var f = Gc(h), k = Hc(h);
  if (4 === b) {
    return a.s ? a.s(c, d, e, f) : a.s ? a.s(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var h = Gc(k), l = Hc(k);
  if (5 === b) {
    return a.J ? a.J(c, d, e, f, h) : a.J ? a.J(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  var k = Gc(l), m = Hc(l);
  if (6 === b) {
    return a.K ? a.K(c, d, e, f, h, k) : a.K ? a.K(c, d, e, f, h, k) : a.call(null, c, d, e, f, h, k);
  }
  var l = Gc(m), p = Hc(m);
  if (7 === b) {
    return a.ha ? a.ha(c, d, e, f, h, k, l) : a.ha ? a.ha(c, d, e, f, h, k, l) : a.call(null, c, d, e, f, h, k, l);
  }
  var m = Gc(p), q = Hc(p);
  if (8 === b) {
    return a.ia ? a.ia(c, d, e, f, h, k, l, m) : a.ia ? a.ia(c, d, e, f, h, k, l, m) : a.call(null, c, d, e, f, h, k, l, m);
  }
  var p = Gc(q), r = Hc(q);
  if (9 === b) {
    return a.ja ? a.ja(c, d, e, f, h, k, l, m, p) : a.ja ? a.ja(c, d, e, f, h, k, l, m, p) : a.call(null, c, d, e, f, h, k, l, m, p);
  }
  var q = Gc(r), t = Hc(r);
  if (10 === b) {
    return a.X ? a.X(c, d, e, f, h, k, l, m, p, q) : a.X ? a.X(c, d, e, f, h, k, l, m, p, q) : a.call(null, c, d, e, f, h, k, l, m, p, q);
  }
  var r = Gc(t), w = Hc(t);
  if (11 === b) {
    return a.Y ? a.Y(c, d, e, f, h, k, l, m, p, q, r) : a.Y ? a.Y(c, d, e, f, h, k, l, m, p, q, r) : a.call(null, c, d, e, f, h, k, l, m, p, q, r);
  }
  var t = Gc(w), z = Hc(w);
  if (12 === b) {
    return a.Z ? a.Z(c, d, e, f, h, k, l, m, p, q, r, t) : a.Z ? a.Z(c, d, e, f, h, k, l, m, p, q, r, t) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t);
  }
  var w = Gc(z), A = Hc(z);
  if (13 === b) {
    return a.$ ? a.$(c, d, e, f, h, k, l, m, p, q, r, t, w) : a.$ ? a.$(c, d, e, f, h, k, l, m, p, q, r, t, w) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, w);
  }
  var z = Gc(A), G = Hc(A);
  if (14 === b) {
    return a.aa ? a.aa(c, d, e, f, h, k, l, m, p, q, r, t, w, z) : a.aa ? a.aa(c, d, e, f, h, k, l, m, p, q, r, t, w, z) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, w, z);
  }
  var A = Gc(G), L = Hc(G);
  if (15 === b) {
    return a.ba ? a.ba(c, d, e, f, h, k, l, m, p, q, r, t, w, z, A) : a.ba ? a.ba(c, d, e, f, h, k, l, m, p, q, r, t, w, z, A) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A);
  }
  var G = Gc(L), Q = Hc(L);
  if (16 === b) {
    return a.ca ? a.ca(c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G) : a.ca ? a.ca(c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G);
  }
  var L = Gc(Q), ba = Hc(Q);
  if (17 === b) {
    return a.da ? a.da(c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L) : a.da ? a.da(c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L);
  }
  var Q = Gc(ba), Da = Hc(ba);
  if (18 === b) {
    return a.ea ? a.ea(c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L, Q) : a.ea ? a.ea(c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L, Q) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L, Q);
  }
  ba = Gc(Da);
  Da = Hc(Da);
  if (19 === b) {
    return a.fa ? a.fa(c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L, Q, ba) : a.fa ? a.fa(c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L, Q, ba) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L, Q, ba);
  }
  var u = Gc(Da);
  Hc(Da);
  if (20 === b) {
    return a.ga ? a.ga(c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L, Q, ba, u) : a.ga ? a.ga(c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L, Q, ba, u) : a.call(null, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L, Q, ba, u);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function Me() {
  switch(arguments.length) {
    case 2:
      return Mf(arguments[0], arguments[1]);
    case 3:
      return Nf(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Of(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Pf(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return Qf(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new E(Array.prototype.slice.call(arguments, 5), 0));
  }
}
function Mf(a, b) {
  var c = a.v;
  if (a.t) {
    var d = Gf(b, c + 1);
    return d <= c ? Lf(a, d, b) : a.t(b);
  }
  return a.apply(a, Ef(b));
}
function Nf(a, b, c) {
  b = J(b, c);
  c = a.v;
  if (a.t) {
    var d = Gf(b, c + 1);
    return d <= c ? Lf(a, d, b) : a.t(b);
  }
  return a.apply(a, Ef(b));
}
function Of(a, b, c, d) {
  b = J(b, J(c, d));
  c = a.v;
  return a.t ? (d = Gf(b, c + 1), d <= c ? Lf(a, d, b) : a.t(b)) : a.apply(a, Ef(b));
}
function Pf(a, b, c, d, e) {
  b = J(b, J(c, J(d, e)));
  c = a.v;
  return a.t ? (d = Gf(b, c + 1), d <= c ? Lf(a, d, b) : a.t(b)) : a.apply(a, Ef(b));
}
function Qf(a, b, c, d, e, f) {
  b = J(b, J(c, J(d, J(e, Hf(f)))));
  c = a.v;
  return a.t ? (d = Gf(b, c + 1), d <= c ? Lf(a, d, b) : a.t(b)) : a.apply(a, Ef(b));
}
function Rf(a) {
  return D(a) ? a : null;
}
var Sf = function Sf() {
  "undefined" === typeof $b && ($b = function(b, c) {
    this.ie = b;
    this.fe = c;
    this.g = 393216;
    this.r = 0;
  }, $b.prototype.D = function(b, c) {
    return new $b(this.ie, c);
  }, $b.prototype.C = function() {
    return this.fe;
  }, $b.prototype.Ya = function() {
    return!1;
  }, $b.prototype.next = function() {
    return Error("No such element");
  }, $b.prototype.remove = function() {
    return Error("Unsupported operation");
  }, $b.Pb = !0, $b.Nb = "cljs.core/t25076", $b.fc = function(b, c) {
    return pd(c, "cljs.core/t25076");
  });
  return new $b(Sf, Tf);
};
function Uf(a, b) {
  this.F = a;
  this.o = b;
}
Uf.prototype.Ya = function() {
  return this.o < this.F.length;
};
Uf.prototype.next = function() {
  var a = this.F.charAt(this.o);
  this.o += 1;
  return a;
};
Uf.prototype.remove = function() {
  return Error("Unsupported operation");
};
function Vf(a, b) {
  this.c = a;
  this.o = b;
}
Vf.prototype.Ya = function() {
  return this.o < this.c.length;
};
Vf.prototype.next = function() {
  var a = this.c[this.o];
  this.o += 1;
  return a;
};
Vf.prototype.remove = function() {
  return Error("Unsupported operation");
};
var Wf = {}, Xf = {};
function Yf(a, b) {
  this.Vb = a;
  this.yb = b;
}
Yf.prototype.Ya = function() {
  this.Vb === Wf ? (this.Vb = Xf, this.yb = D(this.yb)) : this.Vb === this.yb && (this.yb = H(this.Vb));
  return null != this.yb;
};
Yf.prototype.next = function() {
  if (mc(this.Ya())) {
    throw Error("No such element");
  }
  this.Vb = this.yb;
  return F(this.yb);
};
Yf.prototype.remove = function() {
  return Error("Unsupported operation");
};
function Zf(a) {
  if (null == a) {
    return Sf();
  }
  if ("string" === typeof a) {
    return new Uf(a, 0);
  }
  if (lc(a)) {
    return new Vf(a, 0);
  }
  var b;
  b = a ? v(v(null) ? null : a.rc) ? !0 : a.Ob ? !1 : x(Hd, a) : x(Hd, a);
  if (v(b)) {
    return Id(a);
  }
  if (a ? a.g & 8388608 || a.Pd || (a.g ? 0 : x(kd, a)) : x(kd, a)) {
    return new Yf(Wf, a);
  }
  throw Error([B("Cannot create iterator from "), B(a)].join(""));
}
function $f(a, b) {
  this.Ub = a;
  this.pd = b;
}
$f.prototype.step = function(a) {
  for (var b = this;;) {
    if (v(function() {
      var c = null != a.Pa;
      return c ? b.pd.Ya() : c;
    }())) {
      if (ke(function() {
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
function ag(a, b) {
  var c = function() {
    function a(b, c) {
      b.first = c;
      b.V = new bg(b.Pa, null, null, null);
      b.Pa = null;
      return b.V;
    }
    function b(a) {
      (ke(a) ? Yc(a) : a).Pa = null;
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
  return new $f(a.b ? a.b(c) : a.call(null, c), b);
}
function bg(a, b, c, d) {
  this.Pa = a;
  this.first = b;
  this.V = c;
  this.l = d;
  this.g = 31719628;
  this.r = 0;
}
g = bg.prototype;
g.D = function(a, b) {
  return new bg(this.Pa, this.first, this.V, b);
};
g.G = function(a, b) {
  return J(b, ld(this));
};
g.Q = function() {
  return $d;
};
g.q = function(a, b) {
  return null != ld(this) ? ve(this, b) : Se(b) && null == D(b);
};
g.B = function() {
  return ee(this);
};
g.H = function() {
  null != this.Pa && this.Pa.step(this);
  return null == this.V ? null : this;
};
g.S = function() {
  null != this.Pa && ld(this);
  return null == this.V ? null : this.first;
};
g.W = function() {
  null != this.Pa && ld(this);
  return null == this.V ? $d : this.V;
};
g.ka = function() {
  null != this.Pa && ld(this);
  return null == this.V ? null : ld(this.V);
};
bg.prototype[pc] = function() {
  return ce(this);
};
function cg(a, b) {
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
function dg(a, b) {
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
function eg(a) {
  return function() {
    function b(b, c) {
      return mc(a.a ? a.a(b, c) : a.call(null, b, c));
    }
    function c(b) {
      return mc(a.b ? a.b(b) : a.call(null, b));
    }
    function d() {
      return mc(a.m ? a.m() : a.call(null));
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
        return mc(Of(a, b, d, e));
      }
      b.v = 2;
      b.t = function(a) {
        var b = F(a);
        a = H(a);
        var d = F(a);
        a = Zd(a);
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
function fg(a) {
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
function gg(a, b) {
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
        c = Pf(b, c, e, f, h);
        return a.b ? a.b(c) : a.call(null, c);
      }
      c.v = 3;
      c.t = function(a) {
        var b = F(a);
        a = H(a);
        var c = F(a);
        a = H(a);
        var e = F(a);
        a = Zd(a);
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
function hg(a, b, c) {
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
        d = Pf(c, d, f, h, k);
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
        a = Zd(a);
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
function ig(a, b) {
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
        return Qf(a, b, c, e, f, K([h], 0));
      }
      c.v = 3;
      c.t = function(a) {
        var b = F(a);
        a = H(a);
        var c = F(a);
        a = H(a);
        var e = F(a);
        a = Zd(a);
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
function jg(a, b) {
  var c = kg, d = lg;
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
        return Qf(c, a, d, b, e, K([h, k, l], 0));
      }
      e.v = 3;
      e.t = function(a) {
        var b = F(a);
        a = H(a);
        var c = F(a);
        a = H(a);
        var d = F(a);
        a = Zd(a);
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
            for (var l = 0, z = Array(arguments.length - 3);l < z.length;) {
              z[l] = arguments[l + 3], ++l;
            }
            l = new E(z, 0);
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
function mg(a, b, c, d) {
  this.state = a;
  this.l = b;
  this.me = c;
  this.Ad = d;
  this.r = 16386;
  this.g = 6455296;
}
g = mg.prototype;
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
        d = a, Ve(d) ? (e = zd(d), d = Ad(d), a = e, f = M(e), e = a) : (a = F(d), k = N(a, 0), a = N(a, 1), e = k, f = b, h = c, a.s ? a.s(e, this, f, h) : a.call(null, e, this, f, h), d = H(d), e = null, f = 0), h = 0;
      } else {
        return null;
      }
    }
  }
};
g.B = function() {
  return this[ia] || (this[ia] = ++ja);
};
function ng() {
  switch(arguments.length) {
    case 1:
      return og(arguments[0]);
    default:
      var a = arguments[0], b = new E(Array.prototype.slice.call(arguments, 1), 0), c = Ze(b) ? Mf(pg, b) : b, b = Ge(c, hc), c = Ge(c, qg);
      return new mg(a, b, c, null);
  }
}
function og(a) {
  return new mg(a, null, null, null);
}
function rg(a, b) {
  if (a instanceof mg) {
    var c = a.me;
    if (null != c && !v(c.b ? c.b(b) : c.call(null, b))) {
      throw Error([B("Assert failed: "), B("Validator rejected reference state"), B("\n"), B(function() {
        var a = sf(new Wd(null, "validate", "validate", 1439230700, null), new Wd(null, "new-value", "new-value", -1567397401, null));
        return sg.b ? sg.b(a) : sg.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.Ad && sd(a, c, b);
    return b;
  }
  return Ed(a, b);
}
var kg = function kg() {
  switch(arguments.length) {
    case 2:
      return kg.a(arguments[0], arguments[1]);
    case 3:
      return kg.d(arguments[0], arguments[1], arguments[2]);
    case 4:
      return kg.s(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return kg.k(arguments[0], arguments[1], arguments[2], arguments[3], new E(Array.prototype.slice.call(arguments, 4), 0));
  }
};
kg.a = function(a, b) {
  var c;
  a instanceof mg ? (c = a.state, c = b.b ? b.b(c) : b.call(null, c), c = rg(a, c)) : c = Fd.a(a, b);
  return c;
};
kg.d = function(a, b, c) {
  if (a instanceof mg) {
    var d = a.state;
    b = b.a ? b.a(d, c) : b.call(null, d, c);
    a = rg(a, b);
  } else {
    a = Fd.d(a, b, c);
  }
  return a;
};
kg.s = function(a, b, c, d) {
  if (a instanceof mg) {
    var e = a.state;
    b = b.d ? b.d(e, c, d) : b.call(null, e, c, d);
    a = rg(a, b);
  } else {
    a = Fd.s(a, b, c, d);
  }
  return a;
};
kg.k = function(a, b, c, d, e) {
  return a instanceof mg ? rg(a, Pf(b, a.state, c, d, e)) : Fd.J(a, b, c, d, e);
};
kg.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  var d = H(c), c = F(d), e = H(d), d = F(e), e = H(e);
  return kg.k(b, a, c, d, e);
};
kg.v = 4;
function tg(a) {
  this.state = a;
  this.g = 32768;
  this.r = 0;
}
tg.prototype.bd = function(a, b) {
  return this.state = b;
};
tg.prototype.Ib = function() {
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
          e = Nf(a, e, f);
          return b.a ? b.a(c, e) : b.call(null, c, e);
        }
        c.v = 2;
        c.t = function(a) {
          var b = F(a);
          a = H(a);
          var c = F(a);
          a = Zd(a);
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
  return new xf(null, function() {
    var c = D(b);
    if (c) {
      if (Ve(c)) {
        for (var d = zd(c), e = M(d), f = new zf(Array(e), 0), h = 0;;) {
          if (h < e) {
            Df(f, function() {
              var b = C.a(d, h);
              return a.b ? a.b(b) : a.call(null, b);
            }()), h += 1;
          } else {
            break;
          }
        }
        return Cf(f.va(), S.a(a, Ad(c)));
      }
      return J(function() {
        var b = F(c);
        return a.b ? a.b(b) : a.call(null, b);
      }(), S.a(a, Zd(c)));
    }
    return null;
  }, null, null);
};
S.d = function(a, b, c) {
  return new xf(null, function() {
    var d = D(b), e = D(c);
    if (d && e) {
      var f = J, h;
      h = F(d);
      var k = F(e);
      h = a.a ? a.a(h, k) : a.call(null, h, k);
      d = f(h, S.d(a, Zd(d), Zd(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
S.s = function(a, b, c, d) {
  return new xf(null, function() {
    var e = D(b), f = D(c), h = D(d);
    if (e && f && h) {
      var k = J, l;
      l = F(e);
      var m = F(f), p = F(h);
      l = a.d ? a.d(l, m, p) : a.call(null, l, m, p);
      e = k(l, S.s(a, Zd(e), Zd(f), Zd(h)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
S.k = function(a, b, c, d, e) {
  var f = function k(a) {
    return new xf(null, function() {
      var b = S.a(D, a);
      return cg(ef, b) ? J(S.a(F, b), k(S.a(Zd, b))) : null;
    }, null, null);
  };
  return S.a(function() {
    return function(b) {
      return Mf(a, b);
    };
  }(f), f(Ce.k(e, d, K([c, b], 0))));
};
S.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  var d = H(c), c = F(d), e = H(d), d = F(e), e = H(e);
  return S.k(b, a, c, d, e);
};
S.v = 4;
function ug(a) {
  return function(b) {
    return function(a) {
      return function() {
        function d(d, e) {
          var f = Yc(a), h = Gd(a, Yc(a) - 1), f = 0 < f ? b.a ? b.a(d, e) : b.call(null, d, e) : d;
          return 0 < h ? f : ke(f) ? f : new je(f);
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
    }(new tg(a));
  };
}
function vg(a, b) {
  return new xf(null, function() {
    if (0 < a) {
      var c = D(b);
      return c ? J(F(c), vg(a - 1, Zd(c))) : null;
    }
    return null;
  }, null, null);
}
function wg(a, b) {
  return new xf(null, function(c) {
    return function() {
      return c(a, b);
    };
  }(function(a, b) {
    for (;;) {
      var e = D(b);
      if (0 < a && e) {
        var f = a - 1, e = Zd(e);
        a = f;
        b = e;
      } else {
        return e;
      }
    }
  }), null, null);
}
function xg(a) {
  var b = yg;
  return new xf(null, function(c) {
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
        f = a, e = Zd(e), a = f, b = e;
      } else {
        return e;
      }
    }
  }), null, null);
}
function zg(a) {
  return new xf(null, function() {
    return J(a, zg(a));
  }, null, null);
}
function Ag(a) {
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
function Bg(a, b) {
  return new xf(null, function() {
    var c = D(b);
    if (c) {
      if (Ve(c)) {
        for (var d = zd(c), e = M(d), f = new zf(Array(e), 0), h = 0;;) {
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
        return Cf(f.va(), Bg(a, Ad(c)));
      }
      d = F(c);
      c = Zd(c);
      return v(a.b ? a.b(d) : a.call(null, d)) ? J(d, Bg(a, c)) : Bg(a, c);
    }
    return null;
  }, null, null);
}
function Cg(a, b) {
  return Bg(eg(a), b);
}
function Dg(a) {
  return function c(a) {
    return new xf(null, function() {
      var e;
      v(Se.b ? Se.b(a) : Se.call(null, a)) ? (e = K([D.b ? D.b(a) : D.call(null, a)], 0), e = Mf(If, Nf(S, c, e))) : e = null;
      return J(a, e);
    }, null, null);
  }(a);
}
function Eg(a) {
  return Bg(function(a) {
    return!Se(a);
  }, Zd(Dg(a)));
}
var Fg = function Fg() {
  switch(arguments.length) {
    case 2:
      return Fg.a(arguments[0], arguments[1]);
    case 3:
      return Fg.d(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
Fg.a = function(a, b) {
  return null != a ? a && (a.r & 4 || a.Fd) ? xe(Jf(vc(ud, td(a), b)), Ne(a)) : vc(Dc, a, b) : vc(Ce, $d, b);
};
Fg.d = function(a, b, c) {
  return a && (a.r & 4 || a.Fd) ? xe(Jf(ff(b, Kf, td(a), c)), Ne(a)) : ff(b, Ce, a, c);
};
Fg.v = 3;
var Gg = function Gg() {
  switch(arguments.length) {
    case 2:
      return Gg.a(arguments[0], arguments[1]);
    case 3:
      return Gg.d(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Gg.s(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return Gg.k(arguments[0], arguments[1], arguments[2], arguments[3], new E(Array.prototype.slice.call(arguments, 4), 0));
  }
};
Gg.a = function(a, b) {
  return Jf(vc(function(b, d) {
    return Kf.a(b, a.b ? a.b(d) : a.call(null, d));
  }, td(De), b));
};
Gg.d = function(a, b, c) {
  return Fg.a(De, S.d(a, b, c));
};
Gg.s = function(a, b, c, d) {
  return Fg.a(De, S.s(a, b, c, d));
};
Gg.k = function(a, b, c, d, e) {
  return Fg.a(De, Qf(S, a, b, c, d, K([e], 0)));
};
Gg.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  var d = H(c), c = F(d), e = H(d), d = F(e), e = H(e);
  return Gg.k(b, a, c, d, e);
};
Gg.v = 4;
function Hg(a, b, c, d) {
  return new xf(null, function() {
    var e = D(d);
    if (e) {
      var f = vg(a, e);
      return a === M(f) ? J(f, Hg(a, b, c, wg(b, e))) : Dc($d, vg(a, If.a(f, c)));
    }
    return null;
  }, null, null);
}
var lg = function lg(b, c, d) {
  var e = N(c, 0);
  c = lf(c);
  return v(c) ? O.d(b, e, lg(Ge(b, e), c, d)) : O.d(b, e, d);
}, Ig = function Ig() {
  switch(arguments.length) {
    case 3:
      return Ig.d(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Ig.s(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Ig.J(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return Ig.K(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      return Ig.k(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new E(Array.prototype.slice.call(arguments, 6), 0));
  }
};
Ig.d = function(a, b, c) {
  var d = N(b, 0);
  b = lf(b);
  return v(b) ? O.d(a, d, Ig.d(Ge(a, d), b, c)) : O.d(a, d, function() {
    var b = Ge(a, d);
    return c.b ? c.b(b) : c.call(null, b);
  }());
};
Ig.s = function(a, b, c, d) {
  var e = N(b, 0);
  b = lf(b);
  return v(b) ? O.d(a, e, Ig.s(Ge(a, e), b, c, d)) : O.d(a, e, function() {
    var b = Ge(a, e);
    return c.a ? c.a(b, d) : c.call(null, b, d);
  }());
};
Ig.J = function(a, b, c, d, e) {
  var f = N(b, 0);
  b = lf(b);
  return v(b) ? O.d(a, f, Ig.J(Ge(a, f), b, c, d, e)) : O.d(a, f, function() {
    var b = Ge(a, f);
    return c.d ? c.d(b, d, e) : c.call(null, b, d, e);
  }());
};
Ig.K = function(a, b, c, d, e, f) {
  var h = N(b, 0);
  b = lf(b);
  return v(b) ? O.d(a, h, Ig.K(Ge(a, h), b, c, d, e, f)) : O.d(a, h, function() {
    var b = Ge(a, h);
    return c.s ? c.s(b, d, e, f) : c.call(null, b, d, e, f);
  }());
};
Ig.k = function(a, b, c, d, e, f, h) {
  var k = N(b, 0);
  b = lf(b);
  return v(b) ? O.d(a, k, Qf(Ig, Ge(a, k), b, c, d, K([e, f, h], 0))) : O.d(a, k, Qf(c, Ge(a, k), d, e, f, K([h], 0)));
};
Ig.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  var d = H(c), c = F(d), e = H(d), d = F(e), f = H(e), e = F(f), h = H(f), f = F(h), h = H(h);
  return Ig.k(b, a, c, d, e, f, h);
};
Ig.v = 6;
function Jg(a, b) {
  this.P = a;
  this.c = b;
}
function Kg(a) {
  return new Jg(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Lg(a) {
  return new Jg(a.P, qc(a.c));
}
function Mg(a) {
  a = a.h;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Ng(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Kg(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var Og = function Og(b, c, d, e) {
  var f = Lg(d), h = b.h - 1 >>> c & 31;
  5 === c ? f.c[h] = e : (d = d.c[h], b = null != d ? Og(b, c - 5, d, e) : Ng(null, c - 5, e), f.c[h] = b);
  return f;
};
function Pg(a, b) {
  throw Error([B("No item "), B(a), B(" in vector of length "), B(b)].join(""));
}
function Qg(a, b) {
  if (b >= Mg(a)) {
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
function Rg(a, b) {
  return 0 <= b && b < a.h ? Qg(a, b) : Pg(b, a.h);
}
var Sg = function Sg(b, c, d, e, f) {
  var h = Lg(d);
  if (0 === c) {
    h.c[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Sg(b, c - 5, d.c[k], e, f);
    h.c[k] = b;
  }
  return h;
}, Tg = function Tg(b, c, d) {
  var e = b.h - 2 >>> c & 31;
  if (5 < c) {
    b = Tg(b, c - 5, d.c[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = Lg(d);
    d.c[e] = b;
    return d;
  }
  if (0 === e) {
    return null;
  }
  d = Lg(d);
  d.c[e] = null;
  return d;
};
function Ug(a, b, c, d, e, f) {
  this.o = a;
  this.mc = b;
  this.c = c;
  this.Ta = d;
  this.start = e;
  this.end = f;
}
Ug.prototype.Ya = function() {
  return this.o < this.end;
};
Ug.prototype.next = function() {
  32 === this.o - this.mc && (this.c = Qg(this.Ta, this.o), this.mc += 32);
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
  return Kd(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.w = function(a, b) {
  return Kc.d(this, b, null);
};
g.u = function(a, b, c) {
  return "number" === typeof b ? C.d(this, b, c) : c;
};
g.O = function(a, b) {
  return Rg(this, b)[b & 31];
};
g.sa = function(a, b, c) {
  return 0 <= b && b < this.h ? Qg(this, b)[b & 31] : c;
};
g.Bb = function(a, b, c) {
  if (0 <= b && b < this.h) {
    return Mg(this) <= b ? (a = qc(this.M), a[b & 31] = c, new T(this.l, this.h, this.shift, this.root, a, null)) : new T(this.l, this.h, this.shift, Sg(this, this.shift, this.root, b, c), this.M, null);
  }
  if (b === this.h) {
    return Dc(this, c);
  }
  throw Error([B("Index "), B(b), B(" out of bounds  [0,"), B(this.h), B("]")].join(""));
};
g.rc = !0;
g.Yb = function() {
  var a = this.h;
  return new Ug(0, 0, 0 < M(this) ? Qg(this, 0) : null, this, 0, a);
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
    return ed(De, this.l);
  }
  if (1 < this.h - Mg(this)) {
    return new T(this.l, this.h - 1, this.shift, this.root, this.M.slice(0, -1), null);
  }
  var a = Qg(this, this.h - 2), b = Tg(this, this.shift, this.root), b = null == b ? U : b, c = this.h - 1;
  return 5 < this.shift && null == b.c[1] ? new T(this.l, c, this.shift - 5, b.c[0], a, null) : new T(this.l, c, this.shift, b, a, null);
};
g.Kb = function() {
  return 0 < this.h ? new ue(this, this.h - 1, null) : null;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ee(this);
};
g.q = function(a, b) {
  if (b instanceof T) {
    if (this.h === M(b)) {
      for (var c = Id(this), d = Id(b);;) {
        if (v(c.Ya())) {
          var e = c.next(), f = d.next();
          if (!ae.a(e, f)) {
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
    return ve(this, b);
  }
};
g.Jb = function() {
  var a = this;
  return new Wg(a.h, a.shift, function() {
    var b = a.root;
    return Xg.b ? Xg.b(b) : Xg.call(null, b);
  }(), function() {
    var b = a.M;
    return Yg.b ? Yg.b(b) : Yg.call(null, b);
  }());
};
g.Q = function() {
  return xe(De, this.l);
};
g.T = function(a, b) {
  return le(this, b);
};
g.U = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.h) {
      var e = Qg(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var h = e[f], d = b.a ? b.a(d, h) : b.call(null, d, h);
            if (ke(d)) {
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
      if (ke(e)) {
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
    return Xc(this, b, c);
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
  return Zg ? Zg(this, a, 0, 0) : $g.call(null, this, a, 0, 0);
};
g.D = function(a, b) {
  return new T(b, this.h, this.shift, this.root, this.M, this.i);
};
g.G = function(a, b) {
  if (32 > this.h - Mg(this)) {
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
  d ? (d = Kg(null), d.c[0] = this.root, e = Ng(null, this.shift, new Jg(null, this.M)), d.c[1] = e) : d = Og(this, this.shift, this.root, new Jg(null, this.M));
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
  return this.call.apply(this, [this].concat(qc(b)));
};
g.b = function(a) {
  return this.O(null, a);
};
g.a = function(a, b) {
  return this.sa(null, a, b);
};
var U = new Jg(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), De = new T(null, 0, 5, U, [], fe);
function ah(a) {
  var b = a.length;
  if (32 > b) {
    return new T(null, b, 5, U, a, null);
  }
  for (var c = 32, d = (new T(null, 32, 5, U, a.slice(0, 32), null)).Jb(null);;) {
    if (c < b) {
      var e = c + 1, d = Kf.a(d, a[c]), c = e
    } else {
      return vd(d);
    }
  }
}
T.prototype[pc] = function() {
  return ce(this);
};
function bh(a) {
  return lc(a) ? ah(a) : vd(vc(ud, td(De), a));
}
var ch = function ch() {
  return ch.k(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
};
ch.k = function(a) {
  return a instanceof E && 0 === a.o ? ah(a.c) : bh(a);
};
ch.v = 0;
ch.t = function(a) {
  return ch.k(D(a));
};
function dh(a, b, c, d, e, f) {
  this.Fa = a;
  this.nb = b;
  this.o = c;
  this.ma = d;
  this.l = e;
  this.i = f;
  this.g = 32375020;
  this.r = 1536;
}
g = dh.prototype;
g.toString = function() {
  return Kd(this);
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
    a = Zg ? Zg(a, b, c, d) : $g.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Bd(this);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ee(this);
};
g.q = function(a, b) {
  return ve(this, b);
};
g.Q = function() {
  return xe(De, this.l);
};
g.T = function(a, b) {
  var c;
  c = this.Fa;
  var d = this.o + this.ma, e = M(this.Fa);
  c = eh ? eh(c, d, e) : fh.call(null, c, d, e);
  return le(c, b);
};
g.U = function(a, b, c) {
  a = this.Fa;
  var d = this.o + this.ma, e = M(this.Fa);
  a = eh ? eh(a, d, e) : fh.call(null, a, d, e);
  return me(a, b, c);
};
g.S = function() {
  return this.nb[this.ma];
};
g.W = function() {
  if (this.ma + 1 < this.nb.length) {
    var a;
    a = this.Fa;
    var b = this.nb, c = this.o, d = this.ma + 1;
    a = Zg ? Zg(a, b, c, d) : $g.call(null, a, b, c, d);
    return null == a ? $d : a;
  }
  return Ad(this);
};
g.H = function() {
  return this;
};
g.Ec = function() {
  var a = this.nb;
  return new Af(a, this.ma, a.length);
};
g.Fc = function() {
  var a = this.o + this.nb.length;
  if (a < Ac(this.Fa)) {
    var b = this.Fa, c = Qg(this.Fa, a);
    return Zg ? Zg(b, c, a, 0) : $g.call(null, b, c, a, 0);
  }
  return $d;
};
g.D = function(a, b) {
  var c = this.Fa, d = this.nb, e = this.o, f = this.ma;
  return gh ? gh(c, d, e, f, b) : $g.call(null, c, d, e, f, b);
};
g.G = function(a, b) {
  return J(b, this);
};
g.Dc = function() {
  var a = this.o + this.nb.length;
  if (a < Ac(this.Fa)) {
    var b = this.Fa, c = Qg(this.Fa, a);
    return Zg ? Zg(b, c, a, 0) : $g.call(null, b, c, a, 0);
  }
  return null;
};
dh.prototype[pc] = function() {
  return ce(this);
};
function $g() {
  switch(arguments.length) {
    case 3:
      var a = arguments[0], b = arguments[1], c = arguments[2];
      return new dh(a, Rg(a, b), b, c, null, null);
    case 4:
      return Zg(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return gh(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function Zg(a, b, c, d) {
  return new dh(a, b, c, d, null, null);
}
function gh(a, b, c, d, e) {
  return new dh(a, b, c, d, e, null);
}
function hh(a, b, c, d, e) {
  this.l = a;
  this.Ta = b;
  this.start = c;
  this.end = d;
  this.i = e;
  this.g = 167666463;
  this.r = 8192;
}
g = hh.prototype;
g.toString = function() {
  return Kd(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.w = function(a, b) {
  return Kc.d(this, b, null);
};
g.u = function(a, b, c) {
  return "number" === typeof b ? C.d(this, b, c) : c;
};
g.O = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Pg(b, this.end - this.start) : C.a(this.Ta, this.start + b);
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
  return ih.J ? ih.J(a, c, b, d, null) : ih.call(null, a, c, b, d, null);
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
  return ih.J ? ih.J(a, b, c, d, null) : ih.call(null, a, b, c, d, null);
};
g.Kb = function() {
  return this.start !== this.end ? new ue(this, this.end - this.start - 1, null) : null;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ee(this);
};
g.q = function(a, b) {
  return ve(this, b);
};
g.Q = function() {
  return xe(De, this.l);
};
g.T = function(a, b) {
  return le(this, b);
};
g.U = function(a, b, c) {
  return me(this, b, c);
};
g.pa = function(a, b, c) {
  if ("number" === typeof b) {
    return Xc(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.H = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : J(C.a(a.Ta, e), new xf(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
g.D = function(a, b) {
  var c = this.Ta, d = this.start, e = this.end, f = this.i;
  return ih.J ? ih.J(b, c, d, e, f) : ih.call(null, b, c, d, e, f);
};
g.G = function(a, b) {
  var c = this.l, d = Xc(this.Ta, this.end, b), e = this.start, f = this.end + 1;
  return ih.J ? ih.J(c, d, e, f, null) : ih.call(null, c, d, e, f, null);
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
  return this.call.apply(this, [this].concat(qc(b)));
};
g.b = function(a) {
  return this.O(null, a);
};
g.a = function(a, b) {
  return this.sa(null, a, b);
};
hh.prototype[pc] = function() {
  return ce(this);
};
function ih(a, b, c, d, e) {
  for (;;) {
    if (b instanceof hh) {
      c = b.start + c, d = b.start + d, b = b.Ta;
    } else {
      var f = M(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new hh(a, b, c, d, e);
    }
  }
}
function fh() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0];
      return eh(a, arguments[1], M(a));
    case 3:
      return eh(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function eh(a, b, c) {
  return ih(null, a, b, c, null);
}
function jh(a, b) {
  return a === b.P ? b : new Jg(a, qc(b.c));
}
function Xg(a) {
  return new Jg({}, qc(a.c));
}
function Yg(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Xe(a, 0, b, 0, a.length);
  return b;
}
var kh = function kh(b, c, d, e) {
  d = jh(b.root.P, d);
  var f = b.h - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.c[f];
    b = null != h ? kh(b, c - 5, h, e) : Ng(b.root.P, c - 5, e);
  }
  d.c[f] = b;
  return d;
};
function Wg(a, b, c, d) {
  this.h = a;
  this.shift = b;
  this.root = c;
  this.M = d;
  this.r = 88;
  this.g = 275;
}
g = Wg.prototype;
g.zb = function(a, b) {
  if (this.root.P) {
    if (32 > this.h - Mg(this)) {
      this.M[this.h & 31] = b;
    } else {
      var c = new Jg(this.root.P, this.M), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.M = d;
      if (this.h >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Ng(this.root.P, this.shift, c);
        this.root = new Jg(this.root.P, d);
        this.shift = e;
      } else {
        this.root = kh(this, this.shift, this.root, c);
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
    var a = this.h - Mg(this), b = Array(a);
    Xe(this.M, 0, b, 0, a);
    return new T(null, this.h, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
g.dc = function(a, b, c) {
  if ("number" === typeof b) {
    return xd(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
g.ad = function(a, b, c) {
  var d = this;
  if (d.root.P) {
    if (0 <= b && b < d.h) {
      return Mg(this) <= b ? d.M[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = jh(d.root.P, k);
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
      return ud(this, c);
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
    return Rg(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.sa = function(a, b, c) {
  return 0 <= b && b < this.h ? C.a(this, b) : c;
};
g.w = function(a, b) {
  return Kc.d(this, b, null);
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
  return this.call.apply(this, [this].concat(qc(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
function lh(a, b, c, d) {
  this.l = a;
  this.xa = b;
  this.gb = c;
  this.i = d;
  this.g = 31850572;
  this.r = 0;
}
g = lh.prototype;
g.toString = function() {
  return Kd(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.l;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ee(this);
};
g.q = function(a, b) {
  return ve(this, b);
};
g.Q = function() {
  return xe($d, this.l);
};
g.S = function() {
  return F(this.xa);
};
g.W = function() {
  var a = H(this.xa);
  return a ? new lh(this.l, a, this.gb, null) : null == this.gb ? Bc(this) : new lh(this.l, this.gb, null, null);
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new lh(b, this.xa, this.gb, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
lh.prototype[pc] = function() {
  return ce(this);
};
function mh(a, b, c, d, e) {
  this.l = a;
  this.count = b;
  this.xa = c;
  this.gb = d;
  this.i = e;
  this.g = 31858766;
  this.r = 8192;
}
g = mh.prototype;
g.toString = function() {
  return Kd(this);
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
    return a ? new mh(this.l, this.count - 1, a, this.gb, null) : new mh(this.l, this.count - 1, D(this.gb), De, null);
  }
  return this;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ee(this);
};
g.q = function(a, b) {
  return ve(this, b);
};
g.Q = function() {
  return xe(nh, this.l);
};
g.S = function() {
  return F(this.xa);
};
g.W = function() {
  return Zd(D(this));
};
g.H = function() {
  var a = D(this.gb), b = this.xa;
  return v(v(b) ? b : a) ? new lh(null, this.xa, D(a), null) : null;
};
g.D = function(a, b) {
  return new mh(b, this.count, this.xa, this.gb, this.i);
};
g.G = function(a, b) {
  var c;
  v(this.xa) ? (c = this.gb, c = new mh(this.l, this.count + 1, this.xa, Ce.a(v(c) ? c : De, b), null)) : c = new mh(this.l, this.count + 1, Ce.a(this.xa, b), De, null);
  return c;
};
var nh = new mh(null, 0, null, De, fe);
mh.prototype[pc] = function() {
  return ce(this);
};
function oh() {
  this.g = 2097152;
  this.r = 0;
}
oh.prototype.equiv = function(a) {
  return this.q(null, a);
};
oh.prototype.q = function() {
  return!1;
};
var ph = new oh;
function qh(a, b) {
  return $e(Te(b) ? M(a) === M(b) ? cg(ef, S.a(function(a) {
    return ae.a(He(b, F(a), ph), F(H(a)));
  }, a)) : null : null);
}
function rh(a) {
  this.F = a;
}
rh.prototype.next = function() {
  if (null != this.F) {
    var a = F(this.F), b = N(a, 0), a = N(a, 1);
    this.F = H(this.F);
    return{value:[b, a], done:!1};
  }
  return{value:null, done:!0};
};
function sh(a) {
  return new rh(D(a));
}
function th(a) {
  this.F = a;
}
th.prototype.next = function() {
  if (null != this.F) {
    var a = F(this.F);
    this.F = H(this.F);
    return{value:[a, a], done:!1};
  }
  return{value:null, done:!0};
};
function uh(a) {
  return new th(D(a));
}
function vh(a, b) {
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
      if (b instanceof Wd) {
        a: {
          for (c = a.length, d = b.ib, e = 0;;) {
            if (c <= e) {
              c = -1;
              break a;
            }
            f = a[e];
            if (f instanceof Wd && d === f.ib) {
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
              if (ae.a(b, a[d])) {
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
function wh(a, b, c) {
  this.c = a;
  this.o = b;
  this.ra = c;
  this.g = 32374990;
  this.r = 0;
}
g = wh.prototype;
g.toString = function() {
  return Kd(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.ra;
};
g.ka = function() {
  return this.o < this.c.length - 2 ? new wh(this.c, this.o + 2, this.ra) : null;
};
g.I = function() {
  return(this.c.length - this.o) / 2;
};
g.B = function() {
  return ee(this);
};
g.q = function(a, b) {
  return ve(this, b);
};
g.Q = function() {
  return xe($d, this.ra);
};
g.T = function(a, b) {
  return ye(b, this);
};
g.U = function(a, b, c) {
  return Ae(b, c, this);
};
g.S = function() {
  return new T(null, 2, 5, U, [this.c[this.o], this.c[this.o + 1]], null);
};
g.W = function() {
  return this.o < this.c.length - 2 ? new wh(this.c, this.o + 2, this.ra) : $d;
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new wh(this.c, this.o, b);
};
g.G = function(a, b) {
  return J(b, this);
};
wh.prototype[pc] = function() {
  return ce(this);
};
function xh(a, b, c) {
  this.c = a;
  this.o = b;
  this.h = c;
}
xh.prototype.Ya = function() {
  return this.o < this.h;
};
xh.prototype.next = function() {
  var a = new T(null, 2, 5, U, [this.c[this.o], this.c[this.o + 1]], null);
  this.o += 2;
  return a;
};
function ec(a, b, c, d) {
  this.l = a;
  this.h = b;
  this.c = c;
  this.i = d;
  this.g = 16647951;
  this.r = 8196;
}
g = ec.prototype;
g.toString = function() {
  return Kd(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.keys = function() {
  return ce(yh.b ? yh.b(this) : yh.call(null, this));
};
g.entries = function() {
  return sh(D(this));
};
g.values = function() {
  return ce(zh.b ? zh.b(this) : zh.call(null, this));
};
g.has = function(a) {
  return af(this, a);
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
        Ve(b) ? (c = zd(b), b = Ad(b), h = c, d = M(c), c = h) : (c = F(b), h = N(c, 0), c = f = N(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.w = function(a, b) {
  return Kc.d(this, b, null);
};
g.u = function(a, b, c) {
  a = vh(this.c, b);
  return-1 === a ? c : this.c[a + 1];
};
g.rc = !0;
g.Yb = function() {
  return new xh(this.c, 0, 2 * this.h);
};
g.C = function() {
  return this.l;
};
g.I = function() {
  return this.h;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ge(this);
};
g.q = function(a, b) {
  if (b && (b.g & 1024 || b.Jd)) {
    var c = this.c.length;
    if (this.h === b.I(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.u(null, this.c[d], Ye);
          if (e !== Ye) {
            if (ae.a(this.c[d + 1], e)) {
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
    return qh(this, b);
  }
};
g.Jb = function() {
  return new Ah({}, this.c.length, qc(this.c));
};
g.Q = function() {
  return ed(Tf, this.l);
};
g.T = function(a, b) {
  return ye(b, this);
};
g.U = function(a, b, c) {
  return Ae(b, c, this);
};
g.Aa = function(a, b) {
  if (0 <= vh(this.c, b)) {
    var c = this.c.length, d = c - 2;
    if (0 === d) {
      return Bc(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new ec(this.l, this.h - 1, d, null);
      }
      ae.a(b, this.c[e]) || (d[f] = this.c[e], d[f + 1] = this.c[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
g.pa = function(a, b, c) {
  a = vh(this.c, b);
  if (-1 === a) {
    if (this.h < Bh) {
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
      return new ec(this.l, this.h + 1, e, null);
    }
    return ed(Mc(Fg.a(Ch, this), b, c), this.l);
  }
  if (c === this.c[a + 1]) {
    return this;
  }
  b = qc(this.c);
  b[a + 1] = c;
  return new ec(this.l, this.h, b, null);
};
g.qc = function(a, b) {
  return-1 !== vh(this.c, b);
};
g.H = function() {
  var a = this.c;
  return 0 <= a.length - 2 ? new wh(a, 0, null) : null;
};
g.D = function(a, b) {
  return new ec(b, this.h, this.c, this.i);
};
g.G = function(a, b) {
  if (Ue(b)) {
    return Mc(this, C.a(b, 0), C.a(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (Ue(e)) {
      c = Mc(c, C.a(e, 0), C.a(e, 1)), d = H(d);
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
  return this.call.apply(this, [this].concat(qc(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
var Tf = new ec(null, 0, [], he), Bh = 8;
function Dh(a) {
  for (var b = [], c = 0;;) {
    if (c < a.length) {
      var d = a[c], e = a[c + 1];
      -1 === vh(b, d) && (b.push(d), b.push(e));
      c += 2;
    } else {
      break;
    }
  }
  return new ec(null, b.length / 2, b, null);
}
ec.prototype[pc] = function() {
  return ce(this);
};
function Ah(a, b, c) {
  this.Qb = a;
  this.Sb = b;
  this.c = c;
  this.g = 258;
  this.r = 56;
}
g = Ah.prototype;
g.I = function() {
  if (v(this.Qb)) {
    return jf(this.Sb);
  }
  throw Error("count after persistent!");
};
g.w = function(a, b) {
  return Kc.d(this, b, null);
};
g.u = function(a, b, c) {
  if (v(this.Qb)) {
    return a = vh(this.c, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.zb = function(a, b) {
  if (v(this.Qb)) {
    if (b ? b.g & 2048 || b.Kd || (b.g ? 0 : x(Pc, b)) : x(Pc, b)) {
      return wd(this, nf.b ? nf.b(b) : nf.call(null, b), of.b ? of.b(b) : of.call(null, b));
    }
    for (var c = D(b), d = this;;) {
      var e = F(c);
      if (v(e)) {
        var f = e, c = H(c), d = wd(d, function() {
          var a = f;
          return nf.b ? nf.b(a) : nf.call(null, a);
        }(), function() {
          var a = f;
          return of.b ? of.b(a) : of.call(null, a);
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
    return this.Qb = !1, new ec(null, jf(this.Sb), this.c, null);
  }
  throw Error("persistent! called twice");
};
g.dc = function(a, b, c) {
  if (v(this.Qb)) {
    a = vh(this.c, b);
    if (-1 === a) {
      if (this.Sb + 2 <= 2 * Bh) {
        return this.Sb += 2, this.c.push(b), this.c.push(c), this;
      }
      a = this.Sb;
      var d = this.c;
      a = Eh.a ? Eh.a(a, d) : Eh.call(null, a, d);
      return wd(a, b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function Eh(a, b) {
  for (var c = td(Ch), d = 0;;) {
    if (d < a) {
      c = wd(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Fh() {
  this.n = !1;
}
function Gh(a, b) {
  return a === b ? !0 : R(a, b) ? !0 : ae.a(a, b);
}
function Hh(a, b, c) {
  a = qc(a);
  a[b] = c;
  return a;
}
function Ih(a, b) {
  var c = Array(a.length - 2);
  Xe(a, 0, c, 0, 2 * b);
  Xe(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
function Jh(a, b, c, d) {
  a = a.Cb(b);
  a.c[c] = d;
  return a;
}
function Kh(a, b, c) {
  this.P = a;
  this.R = b;
  this.c = c;
}
g = Kh.prototype;
g.Cb = function(a) {
  if (a === this.P) {
    return this;
  }
  var b = kf(this.R), c = Array(0 > b ? 4 : 2 * (b + 1));
  Xe(this.c, 0, c, 0, 2 * b);
  return new Kh(a, this.R, c);
};
g.hc = function() {
  var a = this.c;
  return Lh ? Lh(a) : Mh.call(null, a);
};
g.ub = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.R & e)) {
    return d;
  }
  var f = kf(this.R & e - 1), e = this.c[2 * f], f = this.c[2 * f + 1];
  return null == e ? f.ub(a + 5, b, c, d) : Gh(c, e) ? f : d;
};
g.Ra = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = kf(this.R & h - 1);
  if (0 === (this.R & h)) {
    var l = kf(this.R);
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
      k[c >>> b & 31] = Nh.Ra(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.R >>> d & 1) && (k[d] = null != this.c[e] ? Nh.Ra(a, b + 5, Td(this.c[e]), this.c[e], this.c[e + 1], f) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Oh(a, l + 1, k);
    }
    b = Array(2 * (l + 4));
    Xe(this.c, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    Xe(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k));
    f.n = !0;
    a = this.Cb(a);
    a.c = b;
    a.R |= h;
    return a;
  }
  l = this.c[2 * k];
  h = this.c[2 * k + 1];
  if (null == l) {
    return l = h.Ra(a, b + 5, c, d, e, f), l === h ? this : Jh(this, a, 2 * k + 1, l);
  }
  if (Gh(d, l)) {
    return e === h ? this : Jh(this, a, 2 * k + 1, e);
  }
  f.n = !0;
  f = b + 5;
  d = Ph ? Ph(a, f, l, h, c, d, e) : Qh.call(null, a, f, l, h, c, d, e);
  e = 2 * k;
  k = 2 * k + 1;
  a = this.Cb(a);
  a.c[e] = null;
  a.c[k] = d;
  return a;
};
g.Qa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = kf(this.R & f - 1);
  if (0 === (this.R & f)) {
    var k = kf(this.R);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = Nh.Qa(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.R >>> c & 1) && (h[c] = null != this.c[d] ? Nh.Qa(a + 5, Td(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Oh(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    Xe(this.c, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    Xe(this.c, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.n = !0;
    return new Kh(null, this.R | f, a);
  }
  var l = this.c[2 * h], f = this.c[2 * h + 1];
  if (null == l) {
    return k = f.Qa(a + 5, b, c, d, e), k === f ? this : new Kh(null, this.R, Hh(this.c, 2 * h + 1, k));
  }
  if (Gh(c, l)) {
    return d === f ? this : new Kh(null, this.R, Hh(this.c, 2 * h + 1, d));
  }
  e.n = !0;
  e = this.R;
  k = this.c;
  a += 5;
  a = Rh ? Rh(a, l, f, b, c, d) : Qh.call(null, a, l, f, b, c, d);
  c = 2 * h;
  h = 2 * h + 1;
  d = qc(k);
  d[c] = null;
  d[h] = a;
  return new Kh(null, e, d);
};
g.ic = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.R & d)) {
    return this;
  }
  var e = kf(this.R & d - 1), f = this.c[2 * e], h = this.c[2 * e + 1];
  return null == f ? (a = h.ic(a + 5, b, c), a === h ? this : null != a ? new Kh(null, this.R, Hh(this.c, 2 * e + 1, a)) : this.R === d ? null : new Kh(null, this.R ^ d, Ih(this.c, e))) : Gh(c, f) ? new Kh(null, this.R ^ d, Ih(this.c, e)) : this;
};
var Nh = new Kh(null, 0, []);
function Oh(a, b, c) {
  this.P = a;
  this.h = b;
  this.c = c;
}
g = Oh.prototype;
g.Cb = function(a) {
  return a === this.P ? this : new Oh(a, this.h, qc(this.c));
};
g.hc = function() {
  var a = this.c;
  return Sh ? Sh(a) : Th.call(null, a);
};
g.ub = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.ub(a + 5, b, c, d) : d;
};
g.Ra = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.c[h];
  if (null == k) {
    return a = Jh(this, a, h, Nh.Ra(a, b + 5, c, d, e, f)), a.h += 1, a;
  }
  b = k.Ra(a, b + 5, c, d, e, f);
  return b === k ? this : Jh(this, a, h, b);
};
g.Qa = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.c[f];
  if (null == h) {
    return new Oh(null, this.h + 1, Hh(this.c, f, Nh.Qa(a + 5, b, c, d, e)));
  }
  a = h.Qa(a + 5, b, c, d, e);
  return a === h ? this : new Oh(null, this.h, Hh(this.c, f, a));
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
                d = new Kh(null, h, b);
                break a;
              }
            }
          }
        } else {
          d = new Oh(null, this.h - 1, Hh(this.c, d, a));
        }
      } else {
        d = new Oh(null, this.h, Hh(this.c, d, a));
      }
    }
    return d;
  }
  return this;
};
function Uh(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Gh(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Vh(a, b, c, d) {
  this.P = a;
  this.mb = b;
  this.h = c;
  this.c = d;
}
g = Vh.prototype;
g.Cb = function(a) {
  if (a === this.P) {
    return this;
  }
  var b = Array(2 * (this.h + 1));
  Xe(this.c, 0, b, 0, 2 * this.h);
  return new Vh(a, this.mb, this.h, b);
};
g.hc = function() {
  var a = this.c;
  return Lh ? Lh(a) : Mh.call(null, a);
};
g.ub = function(a, b, c, d) {
  a = Uh(this.c, this.h, c);
  return 0 > a ? d : Gh(c, this.c[a]) ? this.c[a + 1] : d;
};
g.Ra = function(a, b, c, d, e, f) {
  if (c === this.mb) {
    b = Uh(this.c, this.h, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.h) {
        return b = 2 * this.h, c = 2 * this.h + 1, a = this.Cb(a), a.c[b] = d, a.c[c] = e, f.n = !0, a.h += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      Xe(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.n = !0;
      d = this.h + 1;
      a === this.P ? (this.c = b, this.h = d, a = this) : a = new Vh(this.P, this.mb, d, b);
      return a;
    }
    return this.c[b + 1] === e ? this : Jh(this, a, b + 1, e);
  }
  return(new Kh(a, 1 << (this.mb >>> b & 31), [null, this, null, null])).Ra(a, b, c, d, e, f);
};
g.Qa = function(a, b, c, d, e) {
  return b === this.mb ? (a = Uh(this.c, this.h, c), -1 === a ? (a = 2 * this.h, b = Array(a + 2), Xe(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.n = !0, new Vh(null, this.mb, this.h + 1, b)) : ae.a(this.c[a], d) ? this : new Vh(null, this.mb, this.h, Hh(this.c, a + 1, d))) : (new Kh(null, 1 << (this.mb >>> a & 31), [null, this])).Qa(a, b, c, d, e);
};
g.ic = function(a, b, c) {
  a = Uh(this.c, this.h, c);
  return-1 === a ? this : 1 === this.h ? null : new Vh(null, this.mb, this.h - 1, Ih(this.c, jf(a)));
};
function Qh() {
  switch(arguments.length) {
    case 6:
      return Rh(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return Ph(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function Rh(a, b, c, d, e, f) {
  var h = Td(b);
  if (h === d) {
    return new Vh(null, h, 2, [b, c, e, f]);
  }
  var k = new Fh;
  return Nh.Qa(a, h, b, c, k).Qa(a, d, e, f, k);
}
function Ph(a, b, c, d, e, f, h) {
  var k = Td(c);
  if (k === e) {
    return new Vh(null, k, 2, [c, d, f, h]);
  }
  var l = new Fh;
  return Nh.Ra(a, b, k, c, d, l).Ra(a, b, e, f, h, l);
}
function Wh(a, b, c, d, e) {
  this.l = a;
  this.vb = b;
  this.o = c;
  this.F = d;
  this.i = e;
  this.g = 32374860;
  this.r = 0;
}
g = Wh.prototype;
g.toString = function() {
  return Kd(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.l;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ee(this);
};
g.q = function(a, b) {
  return ve(this, b);
};
g.Q = function() {
  return xe($d, this.l);
};
g.T = function(a, b) {
  return ye(b, this);
};
g.U = function(a, b, c) {
  return Ae(b, c, this);
};
g.S = function() {
  return null == this.F ? new T(null, 2, 5, U, [this.vb[this.o], this.vb[this.o + 1]], null) : F(this.F);
};
g.W = function() {
  if (null == this.F) {
    var a = this.vb, b = this.o + 2;
    return Xh ? Xh(a, b, null) : Mh.call(null, a, b, null);
  }
  var a = this.vb, b = this.o, c = H(this.F);
  return Xh ? Xh(a, b, c) : Mh.call(null, a, b, c);
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new Wh(b, this.vb, this.o, this.F, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
Wh.prototype[pc] = function() {
  return ce(this);
};
function Mh() {
  switch(arguments.length) {
    case 1:
      return Lh(arguments[0]);
    case 3:
      return Xh(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function Lh(a) {
  return Xh(a, 0, null);
}
function Xh(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new Wh(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (v(d) && (d = d.hc(), v(d))) {
          return new Wh(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new Wh(null, a, b, c, null);
  }
}
function Yh(a, b, c, d, e) {
  this.l = a;
  this.vb = b;
  this.o = c;
  this.F = d;
  this.i = e;
  this.g = 32374860;
  this.r = 0;
}
g = Yh.prototype;
g.toString = function() {
  return Kd(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.l;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ee(this);
};
g.q = function(a, b) {
  return ve(this, b);
};
g.Q = function() {
  return xe($d, this.l);
};
g.T = function(a, b) {
  return ye(b, this);
};
g.U = function(a, b, c) {
  return Ae(b, c, this);
};
g.S = function() {
  return F(this.F);
};
g.W = function() {
  var a = this.vb, b = this.o, c = H(this.F);
  return Zh ? Zh(null, a, b, c) : Th.call(null, null, a, b, c);
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new Yh(b, this.vb, this.o, this.F, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
Yh.prototype[pc] = function() {
  return ce(this);
};
function Th() {
  switch(arguments.length) {
    case 1:
      return Sh(arguments[0]);
    case 4:
      return Zh(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
}
function Sh(a) {
  return Zh(null, a, 0, null);
}
function Zh(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (v(e) && (e = e.hc(), v(e))) {
          return new Yh(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new Yh(a, b, c, d, null);
  }
}
function $h(a, b, c, d, e, f) {
  this.l = a;
  this.h = b;
  this.root = c;
  this.ta = d;
  this.Ca = e;
  this.i = f;
  this.g = 16123663;
  this.r = 8196;
}
g = $h.prototype;
g.toString = function() {
  return Kd(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.keys = function() {
  return ce(yh.b ? yh.b(this) : yh.call(null, this));
};
g.entries = function() {
  return sh(D(this));
};
g.values = function() {
  return ce(zh.b ? zh.b(this) : zh.call(null, this));
};
g.has = function(a) {
  return af(this, a);
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
        Ve(b) ? (c = zd(b), b = Ad(b), h = c, d = M(c), c = h) : (c = F(b), h = N(c, 0), c = f = N(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.w = function(a, b) {
  return Kc.d(this, b, null);
};
g.u = function(a, b, c) {
  return null == b ? this.ta ? this.Ca : c : null == this.root ? c : this.root.ub(0, Td(b), b, c);
};
g.C = function() {
  return this.l;
};
g.I = function() {
  return this.h;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ge(this);
};
g.q = function(a, b) {
  return qh(this, b);
};
g.Jb = function() {
  return new ai({}, this.root, this.h, this.ta, this.Ca);
};
g.Q = function() {
  return ed(Ch, this.l);
};
g.Aa = function(a, b) {
  if (null == b) {
    return this.ta ? new $h(this.l, this.h - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.ic(0, Td(b), b);
  return c === this.root ? this : new $h(this.l, this.h - 1, c, this.ta, this.Ca, null);
};
g.pa = function(a, b, c) {
  if (null == b) {
    return this.ta && c === this.Ca ? this : new $h(this.l, this.ta ? this.h : this.h + 1, this.root, !0, c, null);
  }
  a = new Fh;
  b = (null == this.root ? Nh : this.root).Qa(0, Td(b), b, c, a);
  return b === this.root ? this : new $h(this.l, a.n ? this.h + 1 : this.h, b, this.ta, this.Ca, null);
};
g.qc = function(a, b) {
  return null == b ? this.ta : null == this.root ? !1 : this.root.ub(0, Td(b), b, Ye) !== Ye;
};
g.H = function() {
  if (0 < this.h) {
    var a = null != this.root ? this.root.hc() : null;
    return this.ta ? J(new T(null, 2, 5, U, [null, this.Ca], null), a) : a;
  }
  return null;
};
g.D = function(a, b) {
  return new $h(b, this.h, this.root, this.ta, this.Ca, this.i);
};
g.G = function(a, b) {
  if (Ue(b)) {
    return Mc(this, C.a(b, 0), C.a(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (Ue(e)) {
      c = Mc(c, C.a(e, 0), C.a(e, 1)), d = H(d);
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
  return this.call.apply(this, [this].concat(qc(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
var Ch = new $h(null, 0, null, !1, null, he);
function Ie(a, b) {
  for (var c = a.length, d = 0, e = td(Ch);;) {
    if (d < c) {
      var f = d + 1, e = e.dc(null, a[d], b[d]), d = f
    } else {
      return vd(e);
    }
  }
}
$h.prototype[pc] = function() {
  return ce(this);
};
function ai(a, b, c, d, e) {
  this.P = a;
  this.root = b;
  this.count = c;
  this.ta = d;
  this.Ca = e;
  this.g = 258;
  this.r = 56;
}
function bi(a, b) {
  if (a.P) {
    if (b ? b.g & 2048 || b.Kd || (b.g ? 0 : x(Pc, b)) : x(Pc, b)) {
      return ci(a, nf.b ? nf.b(b) : nf.call(null, b), of.b ? of.b(b) : of.call(null, b));
    }
    for (var c = D(b), d = a;;) {
      var e = F(c);
      if (v(e)) {
        var f = e, c = H(c), d = ci(d, function() {
          var a = f;
          return nf.b ? nf.b(a) : nf.call(null, a);
        }(), function() {
          var a = f;
          return of.b ? of.b(a) : of.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function ci(a, b, c) {
  if (a.P) {
    if (null == b) {
      a.Ca !== c && (a.Ca = c), a.ta || (a.count += 1, a.ta = !0);
    } else {
      var d = new Fh;
      b = (null == a.root ? Nh : a.root).Ra(a.P, 0, Td(b), b, c, d);
      b !== a.root && (a.root = b);
      d.n && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
g = ai.prototype;
g.I = function() {
  if (this.P) {
    return this.count;
  }
  throw Error("count after persistent!");
};
g.w = function(a, b) {
  return null == b ? this.ta ? this.Ca : null : null == this.root ? null : this.root.ub(0, Td(b), b);
};
g.u = function(a, b, c) {
  return null == b ? this.ta ? this.Ca : c : null == this.root ? c : this.root.ub(0, Td(b), b, c);
};
g.zb = function(a, b) {
  return bi(this, b);
};
g.Ab = function() {
  var a;
  if (this.P) {
    this.P = null, a = new $h(null, this.count, this.root, this.ta, this.Ca, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.dc = function(a, b, c) {
  return ci(this, b, c);
};
function di(a, b, c) {
  for (var d = b;;) {
    if (null != a) {
      b = c ? a.left : a.right, d = Ce.a(d, a), a = b;
    } else {
      return d;
    }
  }
}
function ei(a, b, c, d, e) {
  this.l = a;
  this.stack = b;
  this.lc = c;
  this.h = d;
  this.i = e;
  this.g = 32374862;
  this.r = 0;
}
g = ei.prototype;
g.toString = function() {
  return Kd(this);
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
  return null != a ? a : this.i = a = ee(this);
};
g.q = function(a, b) {
  return ve(this, b);
};
g.Q = function() {
  return xe($d, this.l);
};
g.T = function(a, b) {
  return ye(b, this);
};
g.U = function(a, b, c) {
  return Ae(b, c, this);
};
g.S = function() {
  return Oe(this.stack);
};
g.W = function() {
  var a = F(this.stack), a = di(this.lc ? a.right : a.left, H(this.stack), this.lc);
  return null != a ? new ei(null, a, this.lc, this.h - 1, null) : $d;
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new ei(b, this.stack, this.lc, this.h, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
ei.prototype[pc] = function() {
  return ce(this);
};
function fi(a, b, c) {
  return new ei(null, di(a, null, b), b, c, null);
}
function gi(a, b, c, d) {
  return c instanceof V ? c.left instanceof V ? new V(c.key, c.n, c.left.lb(), new hi(a, b, c.right, d, null), null) : c.right instanceof V ? new V(c.right.key, c.right.n, new hi(c.key, c.n, c.left, c.right.left, null), new hi(a, b, c.right.right, d, null), null) : new hi(a, b, c, d, null) : new hi(a, b, c, d, null);
}
function ii(a, b, c, d) {
  return d instanceof V ? d.right instanceof V ? new V(d.key, d.n, new hi(a, b, c, d.left, null), d.right.lb(), null) : d.left instanceof V ? new V(d.left.key, d.left.n, new hi(a, b, c, d.left.left, null), new hi(d.key, d.n, d.left.right, d.right, null), null) : new hi(a, b, c, d, null) : new hi(a, b, c, d, null);
}
function ji(a, b, c, d) {
  if (c instanceof V) {
    return new V(a, b, c.lb(), d, null);
  }
  if (d instanceof hi) {
    return ii(a, b, c, d.kc());
  }
  if (d instanceof V && d.left instanceof hi) {
    return new V(d.left.key, d.left.n, new hi(a, b, c, d.left.left, null), ii(d.key, d.n, d.left.right, d.right.kc()), null);
  }
  throw Error("red-black tree invariant violation");
}
function hi(a, b, c, d, e) {
  this.key = a;
  this.n = b;
  this.left = c;
  this.right = d;
  this.i = e;
  this.g = 32402207;
  this.r = 0;
}
g = hi.prototype;
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
  return new hi(a, b, c, d, null);
};
g.Wc = function(a) {
  return new hi(a.key, a.n, this, a.right, null);
};
g.Xc = function(a) {
  return new hi(a.key, a.n, a.left, this, null);
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
  return null != a ? a : this.i = a = ee(this);
};
g.q = function(a, b) {
  return ve(this, b);
};
g.Q = function() {
  return De;
};
g.T = function(a, b) {
  return le(this, b);
};
g.U = function(a, b, c) {
  return me(this, b, c);
};
g.pa = function(a, b, c) {
  return O.d(new T(null, 2, 5, U, [this.key, this.n], null), b, c);
};
g.H = function() {
  return Dc(Dc($d, this.n), this.key);
};
g.D = function(a, b) {
  return xe(new T(null, 2, 5, U, [this.key, this.n], null), b);
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
  return this.call.apply(this, [this].concat(qc(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
hi.prototype[pc] = function() {
  return ce(this);
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
  return new hi(this.key, this.n, this.left, this.right, null);
};
g.Uc = function(a) {
  return new V(this.key, this.n, a, this.right, null);
};
g.replace = function(a, b, c, d) {
  return new V(a, b, c, d, null);
};
g.Wc = function(a) {
  return this.left instanceof V ? new V(this.key, this.n, this.left.lb(), new hi(a.key, a.n, this.right, a.right, null), null) : this.right instanceof V ? new V(this.right.key, this.right.n, new hi(this.key, this.n, this.left, this.right.left, null), new hi(a.key, a.n, this.right.right, a.right, null), null) : new hi(a.key, a.n, this, a.right, null);
};
g.Xc = function(a) {
  return this.right instanceof V ? new V(this.key, this.n, new hi(a.key, a.n, a.left, this.left, null), this.right.lb(), null) : this.left instanceof V ? new V(this.left.key, this.left.n, new hi(a.key, a.n, a.left, this.left.left, null), new hi(this.key, this.n, this.left.right, this.right, null), null) : new hi(a.key, a.n, a.left, this, null);
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
  return null != a ? a : this.i = a = ee(this);
};
g.q = function(a, b) {
  return ve(this, b);
};
g.Q = function() {
  return De;
};
g.T = function(a, b) {
  return le(this, b);
};
g.U = function(a, b, c) {
  return me(this, b, c);
};
g.pa = function(a, b, c) {
  return O.d(new T(null, 2, 5, U, [this.key, this.n], null), b, c);
};
g.H = function() {
  return Dc(Dc($d, this.n), this.key);
};
g.D = function(a, b) {
  return xe(new T(null, 2, 5, U, [this.key, this.n], null), b);
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
  return this.call.apply(this, [this].concat(qc(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
V.prototype[pc] = function() {
  return ce(this);
};
var ki = function ki(b, c, d, e, f) {
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
    return b = ki(b, c.left, d, e, f), null != b ? c.Uc(b) : null;
  }
  b = ki(b, c.right, d, e, f);
  return null != b ? c.Vc(b) : null;
}, li = function li(b, c) {
  if (null == b) {
    return c;
  }
  if (null == c) {
    return b;
  }
  if (b instanceof V) {
    if (c instanceof V) {
      var d = li(b.right, c.left);
      return d instanceof V ? new V(d.key, d.n, new V(b.key, b.n, b.left, d.left, null), new V(c.key, c.n, d.right, c.right, null), null) : new V(b.key, b.n, b.left, new V(c.key, c.n, d, c.right, null), null);
    }
    return new V(b.key, b.n, b.left, li(b.right, c), null);
  }
  if (c instanceof V) {
    return new V(c.key, c.n, li(b, c.left), c.right, null);
  }
  d = li(b.right, c.left);
  return d instanceof V ? new V(d.key, d.n, new hi(b.key, b.n, b.left, d.left, null), new hi(c.key, c.n, d.right, c.right, null), null) : ji(b.key, b.n, b.left, new hi(c.key, c.n, d, c.right, null));
}, mi = function mi(b, c, d, e) {
  if (null != c) {
    var f;
    f = c.key;
    f = b.a ? b.a(d, f) : b.call(null, d, f);
    if (0 === f) {
      return e[0] = c, li(c.left, c.right);
    }
    if (0 > f) {
      return b = mi(b, c.left, d, e), null != b || null != e[0] ? c.left instanceof hi ? ji(c.key, c.n, b, c.right) : new V(c.key, c.n, b, c.right, null) : null;
    }
    b = mi(b, c.right, d, e);
    if (null != b || null != e[0]) {
      if (c.right instanceof hi) {
        if (e = c.key, d = c.n, c = c.left, b instanceof V) {
          c = new V(e, d, c, b.lb(), null);
        } else {
          if (c instanceof hi) {
            c = gi(e, d, c.kc(), b);
          } else {
            if (c instanceof V && c.right instanceof hi) {
              c = new V(c.right.key, c.right.n, gi(c.key, c.n, c.left.kc(), c.right.left), new hi(e, d, c.right.right, b, null), null);
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
}, ni = function ni(b, c, d, e) {
  var f = c.key, h = b.a ? b.a(d, f) : b.call(null, d, f);
  return 0 === h ? c.replace(f, e, c.left, c.right) : 0 > h ? c.replace(f, c.n, ni(b, c.left, d, e), c.right) : c.replace(f, c.n, c.left, ni(b, c.right, d, e));
};
function oi(a, b, c, d, e) {
  this.Ia = a;
  this.ua = b;
  this.h = c;
  this.l = d;
  this.i = e;
  this.g = 418776847;
  this.r = 8192;
}
g = oi.prototype;
g.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.O(null, e), h = N(f, 0), f = N(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = D(b)) {
        Ve(b) ? (c = zd(b), b = Ad(b), h = c, d = M(c), c = h) : (c = F(b), h = N(c, 0), c = f = N(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = H(b), c = null, d = 0), e = 0;
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
  return sh(D(this));
};
g.toString = function() {
  return Kd(this);
};
g.keys = function() {
  return ce(yh.b ? yh.b(this) : yh.call(null, this));
};
g.values = function() {
  return ce(zh.b ? zh.b(this) : zh.call(null, this));
};
g.equiv = function(a) {
  return this.q(null, a);
};
function pi(a, b) {
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
  return af(this, a);
};
g.w = function(a, b) {
  return Kc.d(this, b, null);
};
g.u = function(a, b, c) {
  a = pi(this, b);
  return null != a ? a.n : c;
};
g.C = function() {
  return this.l;
};
g.I = function() {
  return this.h;
};
g.Kb = function() {
  return 0 < this.h ? fi(this.ua, !1, this.h) : null;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ge(this);
};
g.q = function(a, b) {
  return qh(this, b);
};
g.Q = function() {
  return new oi(this.Ia, null, 0, this.l, 0);
};
g.Aa = function(a, b) {
  var c = [null], d = mi(this.Ia, this.ua, b, c);
  return null == d ? null == Fe(c, 0) ? this : new oi(this.Ia, null, 0, this.l, null) : new oi(this.Ia, d.lb(), this.h - 1, this.l, null);
};
g.pa = function(a, b, c) {
  a = [null];
  var d = ki(this.Ia, this.ua, b, c, a);
  return null == d ? (a = Fe(a, 0), ae.a(c, a.n) ? this : new oi(this.Ia, ni(this.Ia, this.ua, b, c), this.h, this.l, null)) : new oi(this.Ia, d.lb(), this.h + 1, this.l, null);
};
g.qc = function(a, b) {
  return null != pi(this, b);
};
g.H = function() {
  return 0 < this.h ? fi(this.ua, !0, this.h) : null;
};
g.D = function(a, b) {
  return new oi(this.Ia, this.ua, this.h, b, this.i);
};
g.G = function(a, b) {
  if (Ue(b)) {
    return Mc(this, C.a(b, 0), C.a(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (Ue(e)) {
      c = Mc(c, C.a(e, 0), C.a(e, 1)), d = H(d);
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
  return this.call.apply(this, [this].concat(qc(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
var qi = new oi(bf, null, 0, null, he);
oi.prototype[pc] = function() {
  return ce(this);
};
var pg = function pg() {
  return pg.k(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
};
pg.k = function(a) {
  for (var b = D(a), c = td(Ch);;) {
    if (b) {
      a = H(H(b));
      var d = F(b), b = F(H(b)), c = wd(c, d, b), b = a;
    } else {
      return vd(c);
    }
  }
};
pg.v = 0;
pg.t = function(a) {
  return pg.k(D(a));
};
function ri(a, b) {
  this.qa = a;
  this.ra = b;
  this.g = 32374988;
  this.r = 0;
}
g = ri.prototype;
g.toString = function() {
  return Kd(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.ra;
};
g.ka = function() {
  var a = this.qa, a = (a ? a.g & 128 || a.sc || (a.g ? 0 : x(Ic, a)) : x(Ic, a)) ? this.qa.ka(null) : H(this.qa);
  return null == a ? null : new ri(a, this.ra);
};
g.B = function() {
  return ee(this);
};
g.q = function(a, b) {
  return ve(this, b);
};
g.Q = function() {
  return xe($d, this.ra);
};
g.T = function(a, b) {
  return ye(b, this);
};
g.U = function(a, b, c) {
  return Ae(b, c, this);
};
g.S = function() {
  return this.qa.S(null).Zb(null);
};
g.W = function() {
  var a = this.qa, a = (a ? a.g & 128 || a.sc || (a.g ? 0 : x(Ic, a)) : x(Ic, a)) ? this.qa.ka(null) : H(this.qa);
  return null != a ? new ri(a, this.ra) : $d;
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new ri(this.qa, b);
};
g.G = function(a, b) {
  return J(b, this);
};
ri.prototype[pc] = function() {
  return ce(this);
};
function yh(a) {
  return(a = D(a)) ? new ri(a, null) : null;
}
function nf(a) {
  return Qc(a);
}
function si(a, b) {
  this.qa = a;
  this.ra = b;
  this.g = 32374988;
  this.r = 0;
}
g = si.prototype;
g.toString = function() {
  return Kd(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.C = function() {
  return this.ra;
};
g.ka = function() {
  var a = this.qa, a = (a ? a.g & 128 || a.sc || (a.g ? 0 : x(Ic, a)) : x(Ic, a)) ? this.qa.ka(null) : H(this.qa);
  return null == a ? null : new si(a, this.ra);
};
g.B = function() {
  return ee(this);
};
g.q = function(a, b) {
  return ve(this, b);
};
g.Q = function() {
  return xe($d, this.ra);
};
g.T = function(a, b) {
  return ye(b, this);
};
g.U = function(a, b, c) {
  return Ae(b, c, this);
};
g.S = function() {
  return this.qa.S(null).$b(null);
};
g.W = function() {
  var a = this.qa, a = (a ? a.g & 128 || a.sc || (a.g ? 0 : x(Ic, a)) : x(Ic, a)) ? this.qa.ka(null) : H(this.qa);
  return null != a ? new si(a, this.ra) : $d;
};
g.H = function() {
  return this;
};
g.D = function(a, b) {
  return new si(this.qa, b);
};
g.G = function(a, b) {
  return J(b, this);
};
si.prototype[pc] = function() {
  return ce(this);
};
function zh(a) {
  return(a = D(a)) ? new si(a, null) : null;
}
function of(a) {
  return Rc(a);
}
var ti = function ti() {
  return ti.k(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
};
ti.k = function(a) {
  return v(dg(ef, a)) ? df(function(a, c) {
    return Ce.a(v(a) ? a : Tf, c);
  }, a) : null;
};
ti.v = 0;
ti.t = function(a) {
  return ti.k(D(a));
};
var ui = function ui() {
  return ui.k(arguments[0], 1 < arguments.length ? new E(Array.prototype.slice.call(arguments, 1), 0) : null);
};
ui.k = function(a, b) {
  return v(dg(ef, b)) ? df(function(a) {
    return function(b, e) {
      return vc(a, v(b) ? b : Tf, D(e));
    };
  }(function(b, d) {
    var e = F(d), f = F(H(d));
    return af(b, e) ? O.d(b, e, function() {
      var d = Ge(b, e);
      return a.a ? a.a(d, f) : a.call(null, d, f);
    }()) : O.d(b, e, f);
  }), b) : null;
};
ui.v = 1;
ui.t = function(a) {
  var b = F(a);
  a = H(a);
  return ui.k(b, a);
};
function vi(a, b, c) {
  this.l = a;
  this.Eb = b;
  this.i = c;
  this.g = 15077647;
  this.r = 8196;
}
g = vi.prototype;
g.toString = function() {
  return Kd(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.keys = function() {
  return ce(D(this));
};
g.entries = function() {
  return uh(D(this));
};
g.values = function() {
  return ce(D(this));
};
g.has = function(a) {
  return af(this, a);
};
g.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.O(null, e), h = N(f, 0), f = N(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = D(b)) {
        Ve(b) ? (c = zd(b), b = Ad(b), h = c, d = M(c), c = h) : (c = F(b), h = N(c, 0), c = f = N(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.w = function(a, b) {
  return Kc.d(this, b, null);
};
g.u = function(a, b, c) {
  return Lc(this.Eb, b) ? b : c;
};
g.C = function() {
  return this.l;
};
g.I = function() {
  return Ac(this.Eb);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ge(this);
};
g.q = function(a, b) {
  return Re(b) && M(this) === M(b) && cg(function(a) {
    return function(b) {
      return af(a, b);
    };
  }(this), b);
};
g.Jb = function() {
  return new wi(td(this.Eb));
};
g.Q = function() {
  return xe(xi, this.l);
};
g.Hc = function(a, b) {
  return new vi(this.l, Oc(this.Eb, b), null);
};
g.H = function() {
  return yh(this.Eb);
};
g.D = function(a, b) {
  return new vi(b, this.Eb, this.i);
};
g.G = function(a, b) {
  return new vi(this.l, O.d(this.Eb, b, null), null);
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
  return this.call.apply(this, [this].concat(qc(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
var xi = new vi(null, Tf, he);
function yi(a) {
  var b = a.length;
  if (b <= Bh) {
    for (var c = 0, d = td(Tf);;) {
      if (c < b) {
        var e = c + 1, d = wd(d, a[c], null), c = e
      } else {
        return new vi(null, vd(d), null);
      }
    }
  } else {
    for (c = 0, d = td(xi);;) {
      if (c < b) {
        e = c + 1, d = ud(d, a[c]), c = e;
      } else {
        return vd(d);
      }
    }
  }
}
vi.prototype[pc] = function() {
  return ce(this);
};
function wi(a) {
  this.ob = a;
  this.r = 136;
  this.g = 259;
}
g = wi.prototype;
g.zb = function(a, b) {
  this.ob = wd(this.ob, b, null);
  return this;
};
g.Ab = function() {
  return new vi(null, vd(this.ob), null);
};
g.I = function() {
  return M(this.ob);
};
g.w = function(a, b) {
  return Kc.d(this, b, null);
};
g.u = function(a, b, c) {
  return Kc.d(this.ob, b, Ye) === Ye ? c : b;
};
g.call = function() {
  function a(a, b, c) {
    return Kc.d(this.ob, b, Ye) === Ye ? c : b;
  }
  function b(a, b) {
    return Kc.d(this.ob, b, Ye) === Ye ? null : b;
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
  return this.call.apply(this, [this].concat(qc(b)));
};
g.b = function(a) {
  return Kc.d(this.ob, a, Ye) === Ye ? null : a;
};
g.a = function(a, b) {
  return Kc.d(this.ob, a, Ye) === Ye ? b : a;
};
function zi(a, b, c) {
  this.l = a;
  this.pb = b;
  this.i = c;
  this.g = 417730831;
  this.r = 8192;
}
g = zi.prototype;
g.toString = function() {
  return Kd(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.keys = function() {
  return ce(D(this));
};
g.entries = function() {
  return uh(D(this));
};
g.values = function() {
  return ce(D(this));
};
g.has = function(a) {
  return af(this, a);
};
g.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.O(null, e), h = N(f, 0), f = N(f, 1);
      a.a ? a.a(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = D(b)) {
        Ve(b) ? (c = zd(b), b = Ad(b), h = c, d = M(c), c = h) : (c = F(b), h = N(c, 0), c = f = N(c, 1), a.a ? a.a(c, h) : a.call(null, c, h), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.w = function(a, b) {
  return Kc.d(this, b, null);
};
g.u = function(a, b, c) {
  a = pi(this.pb, b);
  return null != a ? a.key : c;
};
g.C = function() {
  return this.l;
};
g.I = function() {
  return M(this.pb);
};
g.Kb = function() {
  return 0 < M(this.pb) ? S.a(nf, od(this.pb)) : null;
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ge(this);
};
g.q = function(a, b) {
  return Re(b) && M(this) === M(b) && cg(function(a) {
    return function(b) {
      return af(a, b);
    };
  }(this), b);
};
g.Q = function() {
  return new zi(this.l, Bc(this.pb), 0);
};
g.Hc = function(a, b) {
  return new zi(this.l, Je.a(this.pb, b), null);
};
g.H = function() {
  return yh(this.pb);
};
g.D = function(a, b) {
  return new zi(b, this.pb, this.i);
};
g.G = function(a, b) {
  return new zi(this.l, O.d(this.pb, b, null), null);
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
  return this.call.apply(this, [this].concat(qc(b)));
};
g.b = function(a) {
  return this.w(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
var Ai = new zi(null, qi, he);
zi.prototype[pc] = function() {
  return ce(this);
};
function Bi(a) {
  a = D(a);
  if (null == a) {
    return xi;
  }
  if (a instanceof E && 0 === a.o) {
    a = a.c;
    a: {
      for (var b = 0, c = td(xi);;) {
        if (b < a.length) {
          var d = b + 1, c = c.zb(null, a[b]), b = d
        } else {
          break a;
        }
      }
    }
    return c.Ab(null);
  }
  for (d = td(xi);;) {
    if (null != a) {
      b = a.ka(null), d = d.zb(null, a.S(null)), a = b;
    } else {
      return d.Ab(null);
    }
  }
}
function Ci() {
  return vc(Dc, Ai, 0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
}
function wf(a) {
  if (a && (a.r & 4096 || a.Md)) {
    return a.ac(null);
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([B("Doesn't support name: "), B(a)].join(""));
}
function Di(a, b) {
  for (var c = td(Tf), d = D(a), e = D(b);;) {
    if (d && e) {
      var f = F(d), h = F(e), c = wd(c, f, h), d = H(d), e = H(e)
    } else {
      return vd(c);
    }
  }
}
var Ei = function Ei() {
  switch(arguments.length) {
    case 2:
      return Ei.a(arguments[0], arguments[1]);
    case 3:
      return Ei.d(arguments[0], arguments[1], arguments[2]);
    default:
      return Ei.k(arguments[0], arguments[1], arguments[2], new E(Array.prototype.slice.call(arguments, 3), 0));
  }
};
Ei.a = function(a, b) {
  return b;
};
Ei.d = function(a, b, c) {
  return(a.b ? a.b(b) : a.call(null, b)) > (a.b ? a.b(c) : a.call(null, c)) ? b : c;
};
Ei.k = function(a, b, c, d) {
  return vc(function(b, c) {
    return Ei.d(a, b, c);
  }, Ei.d(a, b, c), d);
};
Ei.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  var d = H(c), c = F(d), d = H(d);
  return Ei.k(b, a, c, d);
};
Ei.v = 3;
function Fi(a, b) {
  return new xf(null, function() {
    var c = D(b);
    if (c) {
      var d;
      d = F(c);
      d = a.b ? a.b(d) : a.call(null, d);
      c = v(d) ? J(F(c), Fi(a, Zd(c))) : null;
    } else {
      c = null;
    }
    return c;
  }, null, null);
}
function Gi(a, b, c) {
  this.o = a;
  this.end = b;
  this.step = c;
}
Gi.prototype.Ya = function() {
  return 0 < this.step ? this.o < this.end : this.o > this.end;
};
Gi.prototype.next = function() {
  var a = this.o;
  this.o += this.step;
  return a;
};
function Hi(a, b, c, d, e) {
  this.l = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.i = e;
  this.g = 32375006;
  this.r = 8192;
}
g = Hi.prototype;
g.toString = function() {
  return Kd(this);
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.O = function(a, b) {
  if (b < Ac(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
g.sa = function(a, b, c) {
  return b < Ac(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
g.rc = !0;
g.Yb = function() {
  return new Gi(this.start, this.end, this.step);
};
g.C = function() {
  return this.l;
};
g.ka = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Hi(this.l, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new Hi(this.l, this.start + this.step, this.end, this.step, null) : null;
};
g.I = function() {
  if (mc(ld(this))) {
    return 0;
  }
  var a = (this.end - this.start) / this.step;
  return Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = ee(this);
};
g.q = function(a, b) {
  return ve(this, b);
};
g.Q = function() {
  return xe($d, this.l);
};
g.T = function(a, b) {
  return le(this, b);
};
g.U = function(a, b, c) {
  for (a = this.start;;) {
    if (0 < this.step ? a < this.end : a > this.end) {
      var d = a;
      c = b.a ? b.a(c, d) : b.call(null, c, d);
      if (ke(c)) {
        return b = c, I.b ? I.b(b) : I.call(null, b);
      }
      a += this.step;
    } else {
      return c;
    }
  }
};
g.S = function() {
  return null == ld(this) ? null : this.start;
};
g.W = function() {
  return null != ld(this) ? new Hi(this.l, this.start + this.step, this.end, this.step, null) : $d;
};
g.H = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
g.D = function(a, b) {
  return new Hi(b, this.start, this.end, this.step, this.i);
};
g.G = function(a, b) {
  return J(b, this);
};
Hi.prototype[pc] = function() {
  return ce(this);
};
function Ii(a, b) {
  if ("string" === typeof b) {
    var c = a.exec(b);
    return ae.a(F(c), b) ? 1 === M(c) ? F(c) : bh(c) : null;
  }
  throw new TypeError("re-matches must match against a string.");
}
function Ji(a) {
  if (a instanceof RegExp) {
    return a;
  }
  var b;
  var c = /^\(\?([idmsux]*)\)/;
  if ("string" === typeof a) {
    c = c.exec(a), b = null == c ? null : 1 === M(c) ? F(c) : bh(c);
  } else {
    throw new TypeError("re-find must match against a string.");
  }
  c = N(b, 0);
  b = N(b, 1);
  c = M(c);
  return new RegExp(a.substring(c), v(b) ? b : "");
}
function Ki(a, b, c, d, e, f, h) {
  var k = bc;
  bc = null == bc ? null : bc - 1;
  try {
    if (null != bc && 0 > bc) {
      return pd(a, "#");
    }
    pd(a, c);
    if (0 === jc.b(f)) {
      D(h) && pd(a, function() {
        var a = Li.b(f);
        return v(a) ? a : "...";
      }());
    } else {
      if (D(h)) {
        var l = F(h);
        b.d ? b.d(l, a, f) : b.call(null, l, a, f);
      }
      for (var m = H(h), p = jc.b(f) - 1;;) {
        if (!m || null != p && 0 === p) {
          D(m) && 0 === p && (pd(a, d), pd(a, function() {
            var a = Li.b(f);
            return v(a) ? a : "...";
          }()));
          break;
        } else {
          pd(a, d);
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
    return pd(a, e);
  } finally {
    bc = k;
  }
}
function Mi(a, b) {
  for (var c = D(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.O(null, f);
      pd(a, h);
      f += 1;
    } else {
      if (c = D(c)) {
        d = c, Ve(d) ? (c = zd(d), e = Ad(d), d = c, h = M(c), c = e, e = h) : (h = F(d), pd(a, h), c = H(d), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
var Ni = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Qi(a) {
  return[B('"'), B(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Ni[a];
  })), B('"')].join("");
}
function Ri(a, b, c) {
  if (null == a) {
    return pd(b, "nil");
  }
  if (void 0 === a) {
    return pd(b, "#\x3cundefined\x3e");
  }
  if (v(function() {
    var b = Ge(c, hc);
    return v(b) ? (b = a ? a.g & 131072 || a.Ld ? !0 : a.g ? !1 : x(bd, a) : x(bd, a)) ? Ne(a) : b : b;
  }())) {
    pd(b, "^");
    var d = Ne(a);
    W.d ? W.d(d, b, c) : W.call(null, d, b, c);
    pd(b, " ");
  }
  return null == a ? pd(b, "nil") : a.Pb ? a.fc(a, b, c) : a && (a.g & 2147483648 || a.N) ? a.A(null, b, c) : nc(a) === Boolean || "number" === typeof a ? pd(b, "" + B(a)) : null != a && a.constructor === Object ? (pd(b, "#js "), d = S.a(function(b) {
    return new T(null, 2, 5, U, [vf.b(b), a[b]], null);
  }, We(a)), Si.s ? Si.s(d, W, b, c) : Si.call(null, d, W, b, c)) : lc(a) ? Ki(b, W, "#js [", " ", "]", c, a) : v(ea(a)) ? v(gc.b(c)) ? pd(b, Qi(a)) : pd(b, a) : Ke(a) ? Mi(b, K(["#\x3c", "" + B(a), "\x3e"], 0)) : a instanceof Date ? (d = function(a, b) {
    for (var c = "" + B(a);;) {
      if (M(c) < b) {
        c = [B("0"), B(c)].join("");
      } else {
        return c;
      }
    }
  }, Mi(b, K(['#inst "', "" + B(a.getUTCFullYear()), "-", d(a.getUTCMonth() + 1, 2), "-", d(a.getUTCDate(), 2), "T", d(a.getUTCHours(), 2), ":", d(a.getUTCMinutes(), 2), ":", d(a.getUTCSeconds(), 2), ".", d(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : v(a instanceof RegExp) ? Mi(b, K(['#"', a.source, '"'], 0)) : (a ? a.g & 2147483648 || a.N || (a.g ? 0 : x(qd, a)) : x(qd, a)) ? rd(a, b, c) : Mi(b, K(["#\x3c", "" + B(a), "\x3e"], 0));
}
function W(a, b, c) {
  var d = Ti.b(c);
  return v(d) ? (c = O.d(c, Ui, Ri), d.d ? d.d(a, b, c) : d.call(null, a, b, c)) : Ri(a, b, c);
}
function sg() {
  return Vi(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
}
function Vi(a) {
  var b = dc();
  if (Qe(a)) {
    b = "";
  } else {
    var c = B, d = new Zb;
    a: {
      var e = new Jd(d);
      W(F(a), e, b);
      a = D(H(a));
      for (var f = null, h = 0, k = 0;;) {
        if (k < h) {
          var l = f.O(null, k);
          pd(e, " ");
          W(l, e, b);
          k += 1;
        } else {
          if (a = D(a)) {
            f = a, Ve(f) ? (a = zd(f), h = Ad(f), f = a, l = M(a), a = h, h = l) : (l = F(f), pd(e, " "), W(l, e, b), a = H(f), f = null, h = 0), k = 0;
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
function Si(a, b, c, d) {
  return Ki(c, function(a, c, d) {
    var k = Qc(a);
    b.d ? b.d(k, c, d) : b.call(null, k, c, d);
    pd(c, " ");
    a = Rc(a);
    return b.d ? b.d(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, D(a));
}
tg.prototype.N = !0;
tg.prototype.A = function(a, b, c) {
  pd(b, "#\x3cVolatile: ");
  W(this.state, b, c);
  return pd(b, "\x3e");
};
E.prototype.N = !0;
E.prototype.A = function(a, b, c) {
  return Ki(b, W, "(", " ", ")", c, this);
};
xf.prototype.N = !0;
xf.prototype.A = function(a, b, c) {
  return Ki(b, W, "(", " ", ")", c, this);
};
ei.prototype.N = !0;
ei.prototype.A = function(a, b, c) {
  return Ki(b, W, "(", " ", ")", c, this);
};
Wh.prototype.N = !0;
Wh.prototype.A = function(a, b, c) {
  return Ki(b, W, "(", " ", ")", c, this);
};
hi.prototype.N = !0;
hi.prototype.A = function(a, b, c) {
  return Ki(b, W, "[", " ", "]", c, this);
};
wh.prototype.N = !0;
wh.prototype.A = function(a, b, c) {
  return Ki(b, W, "(", " ", ")", c, this);
};
zi.prototype.N = !0;
zi.prototype.A = function(a, b, c) {
  return Ki(b, W, "#{", " ", "}", c, this);
};
dh.prototype.N = !0;
dh.prototype.A = function(a, b, c) {
  return Ki(b, W, "(", " ", ")", c, this);
};
tf.prototype.N = !0;
tf.prototype.A = function(a, b, c) {
  return Ki(b, W, "(", " ", ")", c, this);
};
ue.prototype.N = !0;
ue.prototype.A = function(a, b, c) {
  return Ki(b, W, "(", " ", ")", c, this);
};
$h.prototype.N = !0;
$h.prototype.A = function(a, b, c) {
  return Si(this, W, b, c);
};
Yh.prototype.N = !0;
Yh.prototype.A = function(a, b, c) {
  return Ki(b, W, "(", " ", ")", c, this);
};
hh.prototype.N = !0;
hh.prototype.A = function(a, b, c) {
  return Ki(b, W, "[", " ", "]", c, this);
};
oi.prototype.N = !0;
oi.prototype.A = function(a, b, c) {
  return Si(this, W, b, c);
};
vi.prototype.N = !0;
vi.prototype.A = function(a, b, c) {
  return Ki(b, W, "#{", " ", "}", c, this);
};
Bf.prototype.N = !0;
Bf.prototype.A = function(a, b, c) {
  return Ki(b, W, "(", " ", ")", c, this);
};
mg.prototype.N = !0;
mg.prototype.A = function(a, b, c) {
  pd(b, "#\x3cAtom: ");
  W(this.state, b, c);
  return pd(b, "\x3e");
};
si.prototype.N = !0;
si.prototype.A = function(a, b, c) {
  return Ki(b, W, "(", " ", ")", c, this);
};
V.prototype.N = !0;
V.prototype.A = function(a, b, c) {
  return Ki(b, W, "[", " ", "]", c, this);
};
T.prototype.N = !0;
T.prototype.A = function(a, b, c) {
  return Ki(b, W, "[", " ", "]", c, this);
};
lh.prototype.N = !0;
lh.prototype.A = function(a, b, c) {
  return Ki(b, W, "(", " ", ")", c, this);
};
qf.prototype.N = !0;
qf.prototype.A = function(a, b) {
  return pd(b, "()");
};
bg.prototype.N = !0;
bg.prototype.A = function(a, b, c) {
  return Ki(b, W, "(", " ", ")", c, this);
};
mh.prototype.N = !0;
mh.prototype.A = function(a, b, c) {
  return Ki(b, W, "#queue [", " ", "]", c, D(this));
};
ec.prototype.N = !0;
ec.prototype.A = function(a, b, c) {
  return Si(this, W, b, c);
};
Hi.prototype.N = !0;
Hi.prototype.A = function(a, b, c) {
  return Ki(b, W, "(", " ", ")", c, this);
};
ri.prototype.N = !0;
ri.prototype.A = function(a, b, c) {
  return Ki(b, W, "(", " ", ")", c, this);
};
pf.prototype.N = !0;
pf.prototype.A = function(a, b, c) {
  return Ki(b, W, "(", " ", ")", c, this);
};
Wd.prototype.Wb = !0;
Wd.prototype.Hb = function(a, b) {
  return Vd(this, b);
};
P.prototype.Wb = !0;
P.prototype.Hb = function(a, b) {
  return uf(this, b);
};
hh.prototype.Wb = !0;
hh.prototype.Hb = function(a, b) {
  return cf(this, b);
};
T.prototype.Wb = !0;
T.prototype.Hb = function(a, b) {
  return cf(this, b);
};
var Wi = null;
function Xi(a, b) {
  this.na = a;
  this.value = b;
  this.g = 32768;
  this.r = 1;
}
Xi.prototype.Ib = function() {
  v(this.na) && (this.value = this.na.m ? this.na.m() : this.na.call(null), this.na = null);
  return this.value;
};
function Yi(a) {
  return function(b, c) {
    var d = a.a ? a.a(b, c) : a.call(null, b, c);
    return ke(d) ? new je(d) : d;
  };
}
function Zi(a) {
  return function(b) {
    return function() {
      function c(a, c) {
        return vc(b, a, c);
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
  }(Yi(a));
}
var $i = {}, aj = function aj(b) {
  if (b ? b.Hd : b) {
    return b.Hd(b);
  }
  var c;
  c = aj[n(null == b ? null : b)];
  if (!c && (c = aj._, !c)) {
    throw y("IEncodeJS.-clj-\x3ejs", b);
  }
  return c.call(null, b);
};
function bj(a) {
  return(a ? v(v(null) ? null : a.Gd) || (a.Ob ? 0 : x($i, a)) : x($i, a)) ? aj(a) : "string" === typeof a || "number" === typeof a || a instanceof P || a instanceof Wd ? cj.b ? cj.b(a) : cj.call(null, a) : Vi(K([a], 0));
}
var cj = function cj(b) {
  if (null == b) {
    return null;
  }
  if (b ? v(v(null) ? null : b.Gd) || (b.Ob ? 0 : x($i, b)) : x($i, b)) {
    return aj(b);
  }
  if (b instanceof P) {
    return wf(b);
  }
  if (b instanceof Wd) {
    return "" + B(b);
  }
  if (Te(b)) {
    var c = {};
    b = D(b);
    for (var d = null, e = 0, f = 0;;) {
      if (f < e) {
        var h = d.O(null, f), k = N(h, 0), h = N(h, 1);
        c[bj(k)] = cj(h);
        f += 1;
      } else {
        if (b = D(b)) {
          Ve(b) ? (e = zd(b), b = Ad(b), d = e, e = M(e)) : (e = F(b), d = N(e, 0), e = N(e, 1), c[bj(d)] = cj(e), b = H(b), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (null == b ? 0 : b ? b.g & 8 || b.oe || (b.g ? 0 : x(Cc, b)) : x(Cc, b)) {
    c = [];
    b = D(S.a(cj, b));
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        k = d.O(null, f), c.push(k), f += 1;
      } else {
        if (b = D(b)) {
          d = b, Ve(d) ? (b = zd(d), f = Ad(d), d = b, e = M(b), b = f) : (b = F(d), c.push(b), b = H(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return b;
}, dj = null;
function ej() {
  if (null == dj) {
    var a = new ec(null, 3, [fj, Tf, gj, Tf, hj, Tf], null);
    dj = og ? og(a) : ng.call(null, a);
  }
  return dj;
}
function ij(a, b, c) {
  var d = ae.a(b, c);
  if (!d && !(d = af(hj.b(a).call(null, b), c)) && (d = Ue(c)) && (d = Ue(b))) {
    if (d = M(c) === M(b)) {
      for (var e = !0, f = 0;;) {
        if (e && f !== M(c)) {
          e = ij(a, function() {
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
function jj(a) {
  var b;
  b = ej();
  b = I.b ? I.b(b) : I.call(null, b);
  return Rf(Ge(fj.b(b), a));
}
function kj(a, b, c, d) {
  kg.a(a, function() {
    return I.b ? I.b(b) : I.call(null, b);
  });
  kg.a(c, function() {
    return I.b ? I.b(d) : I.call(null, d);
  });
}
var lj = function lj(b, c, d) {
  var e = (I.b ? I.b(d) : I.call(null, d)).call(null, b), e = v(v(e) ? e.b ? e.b(c) : e.call(null, c) : e) ? !0 : null;
  if (v(e)) {
    return e;
  }
  e = function() {
    for (var e = jj(c);;) {
      if (0 < M(e)) {
        lj(b, F(e), d), e = Zd(e);
      } else {
        return null;
      }
    }
  }();
  if (v(e)) {
    return e;
  }
  e = function() {
    for (var e = jj(b);;) {
      if (0 < M(e)) {
        lj(F(e), c, d), e = Zd(e);
      } else {
        return null;
      }
    }
  }();
  return v(e) ? e : !1;
};
function mj(a, b, c) {
  c = lj(a, b, c);
  if (v(c)) {
    a = c;
  } else {
    c = ij;
    var d;
    d = ej();
    d = I.b ? I.b(d) : I.call(null, d);
    a = c(d, a, b);
  }
  return a;
}
var nj = function nj(b, c, d, e, f, h, k) {
  var l = vc(function(e, h) {
    var k = N(h, 0);
    N(h, 1);
    if (ij(I.b ? I.b(d) : I.call(null, d), c, k)) {
      var l;
      l = (l = null == e) ? l : mj(k, F(e), f);
      l = v(l) ? h : e;
      if (!v(mj(F(l), k, f))) {
        throw Error([B("Multiple methods in multimethod '"), B(b), B("' match dispatch value: "), B(c), B(" -\x3e "), B(k), B(" and "), B(F(l)), B(", and neither is preferred")].join(""));
      }
      return l;
    }
    return e;
  }, null, I.b ? I.b(e) : I.call(null, e));
  if (v(l)) {
    if (ae.a(I.b ? I.b(k) : I.call(null, k), I.b ? I.b(d) : I.call(null, d))) {
      return kg.s(h, O, c, F(H(l))), F(H(l));
    }
    kj(h, e, k, d);
    return nj(b, c, d, e, f, h, k);
  }
  return null;
};
function X(a, b) {
  throw Error([B("No method in multimethod '"), B(a), B("' for dispatch value: "), B(b)].join(""));
}
function oj(a, b, c, d, e, f, h, k) {
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
g = oj.prototype;
g.call = function() {
  function a(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, G, L, Q, ba) {
    a = this;
    var Da = Qf(a.f, b, c, d, e, K([f, h, k, l, m, u, p, q, r, t, A, w, z, G, L, Q, ba], 0)), Vg = Y(this, Da);
    v(Vg) || X(a.name, Da);
    return Qf(Vg, b, c, d, e, K([f, h, k, l, m, u, p, q, r, t, A, w, z, G, L, Q, ba], 0));
  }
  function b(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, G, L, Q) {
    a = this;
    var ba = a.f.ga ? a.f.ga(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, G, L, Q) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, G, L, Q), Da = Y(this, ba);
    v(Da) || X(a.name, ba);
    return Da.ga ? Da.ga(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, G, L, Q) : Da.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, G, L, Q);
  }
  function c(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, G, L) {
    a = this;
    var Q = a.f.fa ? a.f.fa(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, G, L) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, G, L), ba = Y(this, Q);
    v(ba) || X(a.name, Q);
    return ba.fa ? ba.fa(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, G, L) : ba.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, G, L);
  }
  function d(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, G) {
    a = this;
    var L = a.f.ea ? a.f.ea(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, G) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, G), Q = Y(this, L);
    v(Q) || X(a.name, L);
    return Q.ea ? Q.ea(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, G) : Q.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z, G);
  }
  function e(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z) {
    a = this;
    var G = a.f.da ? a.f.da(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z), L = Y(this, G);
    v(L) || X(a.name, G);
    return L.da ? L.da(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z) : L.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w, z);
  }
  function f(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w) {
    a = this;
    var z = a.f.ca ? a.f.ca(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w), G = Y(this, z);
    v(G) || X(a.name, z);
    return G.ca ? G.ca(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w) : G.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A, w);
  }
  function h(a, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A) {
    a = this;
    var w = a.f.ba ? a.f.ba(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A) : a.f.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A), z = Y(this, w);
    v(z) || X(a.name, w);
    return z.ba ? z.ba(b, c, d, e, f, h, k, l, m, u, p, q, r, t, A) : z.call(null, b, c, d, e, f, h, k, l, m, u, p, q, r, t, A);
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
  function z(a, b, c, d, e, f, h) {
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
  function Da(a) {
    a = this;
    var b = a.f.m ? a.f.m() : a.f.call(null), c = Y(this, b);
    v(c) || X(a.name, b);
    return c.m ? c.m() : c.call(null);
  }
  var u = null, u = function(u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va, Ja, Xa, ab, lb, Oa, Ya, cb, db, uc, gd, se) {
    switch(arguments.length) {
      case 1:
        return Da.call(this, u);
      case 2:
        return ba.call(this, u, aa);
      case 3:
        return Q.call(this, u, aa, ha);
      case 4:
        return L.call(this, u, aa, ha, ka);
      case 5:
        return G.call(this, u, aa, ha, ka, pa);
      case 6:
        return A.call(this, u, aa, ha, ka, pa, ua);
      case 7:
        return z.call(this, u, aa, ha, ka, pa, ua, wa);
      case 8:
        return w.call(this, u, aa, ha, ka, pa, ua, wa, Ba);
      case 9:
        return t.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea);
      case 10:
        return r.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la);
      case 11:
        return q.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va);
      case 12:
        return p.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va, Ja);
      case 13:
        return m.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va, Ja, Xa);
      case 14:
        return l.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va, Ja, Xa, ab);
      case 15:
        return k.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va, Ja, Xa, ab, lb);
      case 16:
        return h.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va, Ja, Xa, ab, lb, Oa);
      case 17:
        return f.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va, Ja, Xa, ab, lb, Oa, Ya);
      case 18:
        return e.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va, Ja, Xa, ab, lb, Oa, Ya, cb);
      case 19:
        return d.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va, Ja, Xa, ab, lb, Oa, Ya, cb, db);
      case 20:
        return c.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va, Ja, Xa, ab, lb, Oa, Ya, cb, db, uc);
      case 21:
        return b.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va, Ja, Xa, ab, lb, Oa, Ya, cb, db, uc, gd);
      case 22:
        return a.call(this, u, aa, ha, ka, pa, ua, wa, Ba, Ea, la, va, Ja, Xa, ab, lb, Oa, Ya, cb, db, uc, gd, se);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  u.b = Da;
  u.a = ba;
  u.d = Q;
  u.s = L;
  u.J = G;
  u.K = A;
  u.ha = z;
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
  return this.call.apply(this, [this].concat(qc(b)));
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
  var w = this.f.aa ? this.f.aa(a, b, c, d, e, f, h, k, l, m, p, q, r, t) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t), z = Y(this, w);
  v(z) || X(this.name, w);
  return z.aa ? z.aa(a, b, c, d, e, f, h, k, l, m, p, q, r, t) : z.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t);
};
g.ba = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w) {
  var z = this.f.ba ? this.f.ba(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w), A = Y(this, z);
  v(A) || X(this.name, z);
  return A.ba ? A.ba(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w) : A.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w);
};
g.ca = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z) {
  var A = this.f.ca ? this.f.ca(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z), G = Y(this, A);
  v(G) || X(this.name, A);
  return G.ca ? G.ca(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z) : G.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z);
};
g.da = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A) {
  var G = this.f.da ? this.f.da(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A), L = Y(this, G);
  v(L) || X(this.name, G);
  return L.da ? L.da(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A) : L.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A);
};
g.ea = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G) {
  var L = this.f.ea ? this.f.ea(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G), Q = Y(this, L);
  v(Q) || X(this.name, L);
  return Q.ea ? Q.ea(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G) : Q.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G);
};
g.fa = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L) {
  var Q = this.f.fa ? this.f.fa(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L), ba = Y(this, Q);
  v(ba) || X(this.name, Q);
  return ba.fa ? ba.fa(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L) : ba.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L);
};
g.ga = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L, Q) {
  var ba = this.f.ga ? this.f.ga(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L, Q) : this.f.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L, Q), Da = Y(this, ba);
  v(Da) || X(this.name, ba);
  return Da.ga ? Da.ga(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L, Q) : Da.call(null, a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L, Q);
};
g.Gc = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t, w, z, A, G, L, Q, ba) {
  var Da = Qf(this.f, a, b, c, d, K([e, f, h, k, l, m, p, q, r, t, w, z, A, G, L, Q, ba], 0)), u = Y(this, Da);
  v(u) || X(this.name, Da);
  return Qf(u, a, b, c, d, K([e, f, h, k, l, m, p, q, r, t, w, z, A, G, L, Q, ba], 0));
};
function pj(a, b) {
  var c = qj;
  kg.s(c.jc, O, a, b);
  kj(c.yc, c.jc, c.nc, c.wc);
}
function Y(a, b) {
  ae.a(function() {
    var b = a.nc;
    return I.b ? I.b(b) : I.call(null, b);
  }(), function() {
    var b = a.wc;
    return I.b ? I.b(b) : I.call(null, b);
  }()) || kj(a.yc, a.jc, a.nc, a.wc);
  var c = function() {
    var b = a.yc;
    return I.b ? I.b(b) : I.call(null, b);
  }().call(null, b);
  if (v(c)) {
    return c;
  }
  c = nj(a.name, b, a.wc, a.jc, a.je, a.yc, a.nc);
  return v(c) ? c : function() {
    var b = a.jc;
    return I.b ? I.b(b) : I.call(null, b);
  }().call(null, a.Wd);
}
g.ac = function() {
  return Cd(this.name);
};
g.bc = function() {
  return Dd(this.name);
};
g.B = function() {
  return this[ia] || (this[ia] = ++ja);
};
function rj(a) {
  this.Tb = a;
  this.g = 2153775104;
  this.r = 2048;
}
g = rj.prototype;
g.toString = function() {
  return this.Tb;
};
g.equiv = function(a) {
  return this.q(null, a);
};
g.q = function(a, b) {
  return b instanceof rj && this.Tb === b.Tb;
};
g.A = function(a, b) {
  return pd(b, [B('#uuid "'), B(this.Tb), B('"')].join(""));
};
g.B = function() {
  for (var a = Vi(K([this], 0)), b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  return b;
};
g.Hb = function(a, b) {
  return Na(this.Tb, b.Tb);
};
var sj = new P(null, "ppath", "ppath", -1758182784), tj = new P(null, "event-sources", "event-sources", 708931713), uj = new P(null, "events-channel", "events-channel", 1892177121), vj = new P(null, "definition", "definition", -1198729982), wj = new P("zip", "branch?", "zip/branch?", -998880862), xj = new P(null, "children", "children", -940561982), yj = new P(null, "r", "r", -471384190), zj = new P("zip", "children", "zip/children", -940194589), Aj = new P(null, "ifn", "ifn", 230683491), Bj = new P(null, 
"tree", "tree", -196312028), Cj = new P("jamesmacaulay.zelkova.signal", "source", "jamesmacaulay.zelkova.signal/source", -943992700), Dj = new P(null, "kids-map", "kids-map", 643095940), hc = new P(null, "meta", "meta", 1499536964), ic = new P(null, "dup", "dup", 556298533), Ej = new P(null, "reset", "reset", -800929946), qg = new P(null, "validator", "validator", -1966190681), Fj = new P(null, "default", "default", -1987822328), Gj = new P(null, "finally-block", "finally-block", 832982472), Hj = 
new P(null, "sources", "sources", -321166424), Ij = new P(null, "clicked", "clicked", 114423720), Jj = new P(null, "events", "events", 1792552201), Kj = new P(null, "value", "value", 305978217), Lj = new P(null, "readonly", "readonly", -1101398934), Mj = new P(null, "kid-indexes-map", "kid-indexes-map", -1120910006), Nj = new P(null, "onclick", "onclick", 1297553739), Oj = new P(null, "mult-map", "mult-map", 460417931), Z = new P(null, "recur", "recur", -437573268), Pj = new P(null, "type", "type", 
1174270348), Qj = new P(null, "catch-block", "catch-block", 1175212748), Rj = new P(null, "topic", "topic", -1960480691), Ui = new P(null, "fallback-impl", "fallback-impl", -1501286995), fc = new P(null, "flush-on-newline", "flush-on-newline", -151457939), Sj = new P(null, "l", "l", 1395893423), gj = new P(null, "descendants", "descendants", 1824886031), Tj = new P("zip", "make-node", "zip/make-node", 1103800591), Uj = new P(null, "no-op", "no-op", -93046065), hj = new P(null, "ancestors", "ancestors", 
-776045424), gc = new P(null, "readably", "readably", 1129599760), Vj = new P(null, "output-values-mult", "output-values-mult", 1026794288), Li = new P(null, "more-marker", "more-marker", -14717935), Wj = new P(null, "write-port-channel", "write-port-channel", -776952302), Xj = new P(null, "init-fn", "init-fn", 777257971), jc = new P(null, "print-length", "print-length", 1931866356), Yj = new P(null, "id", "id", -1388402092), Zj = new P(null, "class", "class", -2030961996), ak = new P(null, "catch-exception", 
"catch-exception", -1997306795), bk = new P(null, "opts", "opts", 155075701), ck = new P(null, "relayed-event-topic", "relayed-event-topic", 323853461), fj = new P(null, "parents", "parents", -2027538891), dk = new P(null, "pnodes", "pnodes", 1739080565), ek = new P(null, "prev", "prev", -1597069226), fk = new P(null, "changed?", "changed?", -437828330), gk = new P(null, "continue-block", "continue-block", -1852047850), hk = new P(null, "readport", "readport", -1909228810), ik = new P(null, "mult", 
"mult", 1466794774), jk = new P(null, "attrs", "attrs", -2090668713), kk = new P(null, "topsort", "topsort", -718814409), lk = new P(null, "inputs-by-topic", "inputs-by-topic", 1973950168), mk = new P(null, "tag", "tag", -1290361223), nk = new P(null, "end", "end", -268185958), ok = new P(null, "parents-map", "parents-map", -1048684902), pk = new P(null, "hierarchy", "hierarchy", -1053470341), qk = new P(null, "timestamp", "timestamp", 579478971), rk = new P(null, "msg-xform", "msg-xform", -1431252485), 
sk = new P(null, "signal", "signal", -1984951589), Ti = new P(null, "alt-impl", "alt-impl", 670969595), tk = new P(null, "root-node", "root-node", 296879230), uk = new P("dominator.core", "empty", "dominator.core/empty", 1128163454), vk = new P(null, "deps", "deps", 1883360319);
var wk, xk, yk = {}, zk = function zk(b, c) {
  if (b ? b.Jc : b) {
    return b.Jc(0, c);
  }
  var d;
  d = zk[n(null == b ? null : b)];
  if (!d && (d = zk._, !d)) {
    throw y("ReadPort.take!", b);
  }
  return d.call(null, b, c);
}, Ak = function Ak(b, c, d) {
  if (b ? b.Mb : b) {
    return b.Mb(b, c, d);
  }
  var e;
  e = Ak[n(null == b ? null : b)];
  if (!e && (e = Ak._, !e)) {
    throw y("WritePort.put!", b);
  }
  return e.call(null, b, c, d);
}, Bk = function Bk(b) {
  if (b ? b.Lb : b) {
    return b.Lb(b);
  }
  var c;
  c = Bk[n(null == b ? null : b)];
  if (!c && (c = Bk._, !c)) {
    throw y("Channel.close!", b);
  }
  return c.call(null, b);
}, Ck = function Ck(b) {
  if (b ? b.hd : b) {
    return!0;
  }
  var c;
  c = Ck[n(null == b ? null : b)];
  if (!c && (c = Ck._, !c)) {
    throw y("Handler.active?", b);
  }
  return c.call(null, b);
}, Dk = function Dk(b) {
  if (b ? b.jd : b) {
    return b.na;
  }
  var c;
  c = Dk[n(null == b ? null : b)];
  if (!c && (c = Dk._, !c)) {
    throw y("Handler.commit", b);
  }
  return c.call(null, b);
}, Ek = function Ek(b, c) {
  if (b ? b.gd : b) {
    return b.gd(0, c);
  }
  var d;
  d = Ek[n(null == b ? null : b)];
  if (!d && (d = Ek._, !d)) {
    throw y("Buffer.add!*", b);
  }
  return d.call(null, b, c);
}, Fk = function Fk() {
  switch(arguments.length) {
    case 1:
      return Fk.b(arguments[0]);
    case 2:
      return Fk.a(arguments[0], arguments[1]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
Fk.b = function(a) {
  return a;
};
Fk.a = function(a, b) {
  if (null == b) {
    throw Error([B("Assert failed: "), B(Vi(K([sf(new Wd(null, "not", "not", 1044554643, null), sf(new Wd(null, "nil?", "nil?", 1612038930, null), new Wd(null, "itm", "itm", -713282527, null)))], 0)))].join(""));
  }
  return Ek(a, b);
};
Fk.v = 2;
function Gk(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function Hk(a, b, c, d) {
  this.head = a;
  this.M = b;
  this.length = c;
  this.c = d;
}
Hk.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.c[this.M];
  this.c[this.M] = null;
  this.M = (this.M + 1) % this.c.length;
  --this.length;
  return a;
};
Hk.prototype.unshift = function(a) {
  this.c[this.head] = a;
  this.head = (this.head + 1) % this.c.length;
  this.length += 1;
  return null;
};
function Ik(a, b) {
  a.length + 1 === a.c.length && a.resize();
  a.unshift(b);
}
Hk.prototype.resize = function() {
  var a = Array(2 * this.c.length);
  return this.M < this.head ? (Gk(this.c, this.M, a, 0, this.length), this.M = 0, this.head = this.length, this.c = a) : this.M > this.head ? (Gk(this.c, this.M, a, 0, this.c.length - this.M), Gk(this.c, 0, a, this.c.length - this.M, this.head), this.M = 0, this.head = this.length, this.c = a) : this.M === this.head ? (this.head = this.M = 0, this.c = a) : null;
};
function Jk(a, b) {
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
function Kk(a) {
  if (!(0 < a)) {
    throw Error([B("Assert failed: "), B("Can't create a ring buffer of size 0"), B("\n"), B(Vi(K([sf(new Wd(null, "\x3e", "\x3e", 1085014381, null), new Wd(null, "n", "n", -2092305744, null), 0)], 0)))].join(""));
  }
  return new Hk(0, 0, 0, Array(a));
}
function Lk(a, b) {
  this.L = a;
  this.he = b;
  this.g = 2;
  this.r = 0;
}
function Mk(a) {
  return a.L.length === a.he;
}
Lk.prototype.gd = function(a, b) {
  Ik(this.L, b);
  return this;
};
Lk.prototype.I = function() {
  return this.L.length;
};
var Nk = Kk(32), Ok = !1, Pk = !1;
function Qk() {
  Ok = !0;
  Pk = !1;
  for (var a = 0;;) {
    var b = Nk.pop();
    if (null != b && (b.m ? b.m() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  Ok = !1;
  return 0 < Nk.length ? Rk.m ? Rk.m() : Rk.call(null) : null;
}
function Rk() {
  var a = Pk;
  if (v(v(a) ? Ok : a)) {
    return null;
  }
  Pk = !0;
  return nb(Qk);
}
function Sk(a) {
  Ik(Nk, a);
  Rk();
}
;var Tk, Uk = function Uk(b) {
  "undefined" === typeof Tk && (Tk = function(b, d, e) {
    this.Cd = b;
    this.n = d;
    this.be = e;
    this.g = 425984;
    this.r = 0;
  }, Tk.prototype.D = function(b, d) {
    return new Tk(this.Cd, this.n, d);
  }, Tk.prototype.C = function() {
    return this.be;
  }, Tk.prototype.Ib = function() {
    return this.n;
  }, Tk.Pb = !0, Tk.Nb = "cljs.core.async.impl.channels/t19590", Tk.fc = function(b, d) {
    return pd(d, "cljs.core.async.impl.channels/t19590");
  });
  return new Tk(Uk, b, Tf);
};
function Vk(a, b) {
  this.gc = a;
  this.n = b;
}
function Wk(a) {
  return Ck(a.gc);
}
var Xk = function Xk(b) {
  if (b ? b.fd : b) {
    return b.fd();
  }
  var c;
  c = Xk[n(null == b ? null : b)];
  if (!c && (c = Xk._, !c)) {
    throw y("MMC.abort", b);
  }
  return c.call(null, b);
};
function Yk(a, b, c, d, e, f, h) {
  this.Fb = a;
  this.uc = b;
  this.wb = c;
  this.tc = d;
  this.L = e;
  this.closed = f;
  this.Ga = h;
}
g = Yk.prototype;
g.fd = function() {
  for (;;) {
    var a = this.wb.pop();
    if (null != a) {
      var b = a.gc;
      Sk(function(a) {
        return function() {
          return a.b ? a.b(!0) : a.call(null, !0);
        };
      }(b.na, b, a.n, a, this));
    }
    break;
  }
  Jk(this.wb, fg(!1));
  return Bk(this);
};
g.Mb = function(a, b, c) {
  var d = this;
  if (null == b) {
    throw Error([B("Assert failed: "), B("Can't put nil in on a channel"), B("\n"), B(Vi(K([sf(new Wd(null, "not", "not", 1044554643, null), sf(new Wd(null, "nil?", "nil?", 1612038930, null), new Wd(null, "val", "val", 1769233139, null)))], 0)))].join(""));
  }
  if (a = d.closed) {
    return Uk(!a);
  }
  if (v(function() {
    var a = d.L;
    return v(a) ? mc(Mk(d.L)) : a;
  }())) {
    for (c = ke(function() {
      var a = d.L;
      return d.Ga.a ? d.Ga.a(a, b) : d.Ga.call(null, a, b);
    }());;) {
      if (0 < d.Fb.length && 0 < M(d.L)) {
        var e = d.Fb.pop(), f = e.na, h = d.L.L.pop();
        Sk(function(a, b) {
          return function() {
            return a.b ? a.b(b) : a.call(null, b);
          };
        }(f, h, e, c, a, this));
      }
      break;
    }
    c && Xk(this);
    return Uk(!0);
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
    return c = Dk(e), Sk(function(a) {
      return function() {
        return a.b ? a.b(b) : a.call(null, b);
      };
    }(c, e, a, this)), Uk(!0);
  }
  64 < d.tc ? (d.tc = 0, Jk(d.wb, Wk)) : d.tc += 1;
  if (!(1024 > d.wb.length)) {
    throw Error([B("Assert failed: "), B([B("No more than "), B(1024), B(" pending puts are allowed on a single channel."), B(" Consider using a windowed buffer.")].join("")), B("\n"), B(Vi(K([sf(new Wd(null, "\x3c", "\x3c", 993667236, null), sf(new Wd(null, ".-length", ".-length", -280799999, null), new Wd(null, "puts", "puts", -1883877054, null)), new Wd("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0)))].join(""));
  }
  Ik(d.wb, new Vk(c, b));
  return null;
};
g.Vd = !0;
g.Jc = function(a, b) {
  var c = this;
  if (null != c.L && 0 < M(c.L)) {
    for (var d = b.na, e = Uk(c.L.L.pop());;) {
      if (!v(Mk(c.L))) {
        var f = c.wb.pop();
        if (null != f) {
          var h = f.gc, k = f.n;
          Sk(function(a) {
            return function() {
              return a.b ? a.b(!0) : a.call(null, !0);
            };
          }(h.na, h, k, f, d, e, this));
          ke(function() {
            var a = c.L, b = k;
            return c.Ga.a ? c.Ga.a(a, b) : c.Ga.call(null, a, b);
          }()) && Xk(this);
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
        if (Ck(a.gc)) {
          return a;
        }
      } else {
        return null;
      }
    }
  }();
  if (v(d)) {
    return e = Dk(d.gc), Sk(function(a) {
      return function() {
        return a.b ? a.b(!0) : a.call(null, !0);
      };
    }(e, d, this)), Uk(d.n);
  }
  if (v(c.closed)) {
    return v(c.L) && (d = c.L, c.Ga.b ? c.Ga.b(d) : c.Ga.call(null, d)), v(v(!0) ? b.na : !0) ? (d = function() {
      var a = c.L;
      return v(a) ? 0 < M(c.L) : a;
    }(), d = v(d) ? c.L.L.pop() : null, Uk(d)) : null;
  }
  64 < c.uc ? (c.uc = 0, Jk(c.Fb, Ck)) : c.uc += 1;
  if (!(1024 > c.Fb.length)) {
    throw Error([B("Assert failed: "), B([B("No more than "), B(1024), B(" pending takes are allowed on a single channel.")].join("")), B("\n"), B(Vi(K([sf(new Wd(null, "\x3c", "\x3c", 993667236, null), sf(new Wd(null, ".-length", ".-length", -280799999, null), new Wd(null, "takes", "takes", 298247964, null)), new Wd("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0)))].join(""));
  }
  Ik(c.Fb, b);
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
      Sk(function(a, b) {
        return function() {
          return a.b ? a.b(b) : a.call(null, b);
        };
      }(c, d, b, this));
    }
  }
  return null;
};
function Zk(a) {
  console.log(a);
  return null;
}
function $k(a, b, c) {
  b = (v(b) ? b : Zk).call(null, c);
  return null == b ? a : Fk.a(a, b);
}
function al(a, b, c) {
  return new Yk(Kk(32), 0, Kk(32), 0, a, !1, function() {
    return function(a) {
      return function() {
        function b(e, f) {
          try {
            return a.a ? a.a(e, f) : a.call(null, e, f);
          } catch (h) {
            return $k(e, c, h);
          }
        }
        function f(b) {
          try {
            return a.b ? a.b(b) : a.call(null, b);
          } catch (e) {
            return $k(b, c, e);
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
    }(v(b) ? b.b ? b.b(Fk) : b.call(null, Fk) : Fk);
  }());
}
;var bl, cl = function cl(b) {
  "undefined" === typeof bl && (bl = function(b, d, e) {
    this.Mc = b;
    this.na = d;
    this.ee = e;
    this.g = 393216;
    this.r = 0;
  }, bl.prototype.D = function(b, d) {
    return new bl(this.Mc, this.na, d);
  }, bl.prototype.C = function() {
    return this.ee;
  }, bl.prototype.hd = function() {
    return!0;
  }, bl.prototype.jd = function() {
    return this.na;
  }, bl.Pb = !0, bl.Nb = "cljs.core.async.impl.ioc-helpers/t22890", bl.fc = function(b, d) {
    return pd(d, "cljs.core.async.impl.ioc-helpers/t22890");
  });
  return new bl(cl, b, Tf);
};
function dl(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    throw b instanceof Object && a[6].Lb(null), b;
  }
}
function el(a, b, c) {
  c = c.Jc(0, cl(function(c) {
    a[2] = c;
    a[1] = b;
    return dl(a);
  }));
  return v(c) ? (a[2] = I.b ? I.b(c) : I.call(null, c), a[1] = b, Z) : null;
}
function fl(a, b, c, d) {
  c = c.Mb(null, d, cl(function(c) {
    a[2] = c;
    a[1] = b;
    return dl(a);
  }));
  return v(c) ? (a[2] = I.b ? I.b(c) : I.call(null, c), a[1] = b, Z) : null;
}
function gl(a, b) {
  var c = a[6];
  null != b && c.Mb(null, b, cl(function() {
    return function() {
      return null;
    };
  }(c)));
  c.Lb(null);
  return c;
}
function hl(a, b, c, d, e, f, h, k) {
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
g = hl.prototype;
g.w = function(a, b) {
  return Kc.d(this, b, null);
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
      return He(this.j, b, c);
  }
};
g.A = function(a, b, c) {
  return Ki(b, function() {
    return function(a) {
      return Ki(b, W, "", " ", "", c, a);
    };
  }(this), "#cljs.core.async.impl.ioc-helpers.ExceptionFrame{", ", ", "}", c, If.a(new T(null, 5, 5, U, [new T(null, 2, 5, U, [Qj, this.Ua], null), new T(null, 2, 5, U, [ak, this.Va], null), new T(null, 2, 5, U, [Gj, this.Xa], null), new T(null, 2, 5, U, [gk, this.Wa], null), new T(null, 2, 5, U, [ek, this.fb], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 5 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = mf(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? qh(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.Aa = function(a, b) {
  return af(new vi(null, new ec(null, 5, [Gj, null, Qj, null, ak, null, ek, null, gk, null], null), null), b) ? Je.a(xe(Fg.a(Tf, this), this.p), b) : new hl(this.Ua, this.Va, this.Xa, this.Wa, this.fb, this.p, Rf(Je.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return v(R.a ? R.a(Qj, b) : R.call(null, Qj, b)) ? new hl(c, this.Va, this.Xa, this.Wa, this.fb, this.p, this.j, null) : v(R.a ? R.a(ak, b) : R.call(null, ak, b)) ? new hl(this.Ua, c, this.Xa, this.Wa, this.fb, this.p, this.j, null) : v(R.a ? R.a(Gj, b) : R.call(null, Gj, b)) ? new hl(this.Ua, this.Va, c, this.Wa, this.fb, this.p, this.j, null) : v(R.a ? R.a(gk, b) : R.call(null, gk, b)) ? new hl(this.Ua, this.Va, this.Xa, c, this.fb, this.p, this.j, null) : v(R.a ? R.a(ek, b) : R.call(null, ek, 
  b)) ? new hl(this.Ua, this.Va, this.Xa, this.Wa, c, this.p, this.j, null) : new hl(this.Ua, this.Va, this.Xa, this.Wa, this.fb, this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(If.a(new T(null, 5, 5, U, [new T(null, 2, 5, U, [Qj, this.Ua], null), new T(null, 2, 5, U, [ak, this.Va], null), new T(null, 2, 5, U, [Gj, this.Xa], null), new T(null, 2, 5, U, [gk, this.Wa], null), new T(null, 2, 5, U, [ek, this.fb], null)], null), this.j));
};
g.D = function(a, b) {
  return new hl(this.Ua, this.Va, this.Xa, this.Wa, this.fb, b, this.j, this.i);
};
g.G = function(a, b) {
  return Ue(b) ? Mc(this, C.a(b, 0), C.a(b, 1)) : vc(Dc, this, b);
};
function il(a) {
  for (;;) {
    var b = a[4], c = Qj.b(b), d = ak.b(b), e = a[5];
    if (v(function() {
      var a = e;
      return v(a) ? mc(b) : a;
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
      a[4] = O.k(b, Qj, null, K([ak, null], 0));
      break;
    }
    if (v(function() {
      var a = e;
      return v(a) ? mc(c) && mc(Gj.b(b)) : a;
    }())) {
      a[4] = ek.b(b);
    } else {
      if (v(function() {
        var a = e;
        return v(a) ? (a = mc(c)) ? Gj.b(b) : a : a;
      }())) {
        a[1] = Gj.b(b);
        a[4] = O.d(b, Gj, null);
        break;
      }
      if (v(function() {
        var a = mc(e);
        return a ? Gj.b(b) : a;
      }())) {
        a[1] = Gj.b(b);
        a[4] = O.d(b, Gj, null);
        break;
      }
      if (mc(e) && mc(Gj.b(b))) {
        a[1] = gk.b(b);
        a[4] = ek.b(b);
        break;
      }
      throw Error("No matching clause");
    }
  }
}
;for (var jl = Array(1), kl = 0;;) {
  if (kl < jl.length) {
    jl[kl] = null, kl += 1;
  } else {
    break;
  }
}
;var ll = function ll(b) {
  "undefined" === typeof wk && (wk = function(b, d, e) {
    this.Mc = b;
    this.na = d;
    this.ce = e;
    this.g = 393216;
    this.r = 0;
  }, wk.prototype.D = function(b, d) {
    return new wk(this.Mc, this.na, d);
  }, wk.prototype.C = function() {
    return this.ce;
  }, wk.prototype.hd = function() {
    return!0;
  }, wk.prototype.jd = function() {
    return this.na;
  }, wk.Pb = !0, wk.Nb = "cljs.core.async/t20183", wk.fc = function(b, d) {
    return pd(d, "cljs.core.async/t20183");
  });
  return new wk(ll, b, Tf);
}, ml = function ml() {
  switch(arguments.length) {
    case 0:
      return ml.m();
    case 1:
      return ml.b(arguments[0]);
    case 2:
      return ml.a(arguments[0], arguments[1]);
    case 3:
      return ml.d(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(arguments.length)].join(""));;
  }
};
ml.m = function() {
  return ml.b(null);
};
ml.b = function(a) {
  return ml.d(a, null, null);
};
ml.a = function(a, b) {
  return ml.d(a, b, null);
};
ml.d = function(a, b, c) {
  a = ae.a(a, 0) ? null : a;
  if (v(b) && !v(a)) {
    throw Error([B("Assert failed: "), B("buffer must be supplied when transducer is"), B("\n"), B(Vi(K([new Wd(null, "buf-or-n", "buf-or-n", -1646815050, null)], 0)))].join(""));
  }
  a = "number" === typeof a ? new Lk(Kk(a), a) : a;
  return al(a, b, c);
};
ml.v = 3;
function nl(a, b) {
  var c = zk(a, ll(b));
  if (v(c)) {
    var d = I.b ? I.b(c) : I.call(null, c);
    v(!0) ? b.b ? b.b(d) : b.call(null, d) : Sk(function(a) {
      return function() {
        return b.b ? b.b(a) : b.call(null, a);
      };
    }(d, c));
  }
  return null;
}
var ol = ll(function() {
  return null;
});
function Yl(a, b) {
  var c = Ak(a, b, ol);
  return v(c) ? I.b ? I.b(c) : I.call(null, c) : !0;
}
function Zl(a, b, c) {
  a = Ak(a, b, ll(c));
  return v(a) ? (b = I.b ? I.b(a) : I.call(null, a), v(!0) ? c.b ? c.b(b) : c.call(null, b) : Sk(function(a) {
    return function() {
      return c.b ? c.b(a) : c.call(null, a);
    };
  }(b, a, a)), b) : !0;
}
function $l(a, b) {
  return am(a, b);
}
function am(a, b) {
  var c = ml.b(1);
  Sk(function(c) {
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
                      c[5] = f, il(c), d = Z;
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
            return 7 === d ? (d = c, d[2] = c[2], d[1] = 3, Z) : 1 === d ? (c[2] = null, c[1] = 2, Z) : 4 === d ? (d = c[7], d = c[2], c[7] = d, c[1] = v(null == d) ? 5 : 6, Z) : 13 === d ? (c[2] = null, c[1] = 14, Z) : 6 === d ? (d = c[7], fl(c, 11, b, d)) : 3 === d ? (d = c[2], gl(c, d)) : 12 === d ? (c[2] = null, c[1] = 2, Z) : 2 === d ? el(c, 4, a) : 11 === d ? (d = c[2], c[1] = v(d) ? 12 : 13, Z) : 9 === d ? (c[2] = null, c[1] = 10, Z) : 5 === d ? (c[1] = v(!0) ? 8 : 9, Z) : 14 === d || 10 === 
            d ? (d = c[2], c[2] = d, c[1] = 7, Z) : 8 === d ? (d = Bk(b), c[2] = d, c[1] = 10, Z) : null;
          };
        }(c), c);
      }(), f = function() {
        var a = e.m ? e.m() : e.call(null);
        a[6] = c;
        return a;
      }();
      return dl(f);
    };
  }(c));
  return b;
}
var bm = {}, cm = function cm(b, c, d) {
  if (b ? b.Ic : b) {
    return b.Ic(b, c, d);
  }
  var e;
  e = cm[n(null == b ? null : b)];
  if (!e && (e = cm._, !e)) {
    throw y("Mult.tap*", b);
  }
  return e.call(null, b, c, d);
}, dm = function dm(b, c) {
  if (b ? b.ec : b) {
    return b.ec(b, c);
  }
  var d;
  d = dm[n(null == b ? null : b)];
  if (!d && (d = dm._, !d)) {
    throw y("Mult.untap*", b);
  }
  return d.call(null, b, c);
}, em = function em(b) {
  var c = og ? og(Tf) : ng.call(null, Tf), d = function() {
    "undefined" === typeof xk && (xk = function(b, c, d, e) {
      this.ge = b;
      this.ch = c;
      this.Kc = d;
      this.de = e;
      this.g = 393216;
      this.r = 0;
    }, xk.prototype.D = function() {
      return function(b, c) {
        return new xk(this.ge, this.ch, this.Kc, c);
      };
    }(c), xk.prototype.C = function() {
      return function() {
        return this.de;
      };
    }(c), xk.prototype.ed = !0, xk.prototype.Ic = function() {
      return function(b, c, d) {
        kg.s(this.Kc, O, c, d);
        return null;
      };
    }(c), xk.prototype.ec = function() {
      return function(b, c) {
        kg.d(this.Kc, Je, c);
        return null;
      };
    }(c), xk.Pb = !0, xk.Nb = "cljs.core.async/t21217", xk.fc = function() {
      return function(b, c) {
        return pd(c, "cljs.core.async/t21217");
      };
    }(c));
    return new xk(em, b, c, Tf);
  }(), e = ml.b(1), f = og ? og(null) : ng.call(null, null), h = function(b, c, d, e) {
    return function() {
      return 0 === kg.a(e, gf) ? Yl(d, !0) : null;
    };
  }(c, d, e, f), k = ml.b(1);
  Sk(function(c, d, e, f, h, k) {
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
                      d[5] = h, il(d), e = Z;
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
              var w = c[9], z = c[10], la = c[11], va = c[12], Ja = C.a(va, la), Xa = Zl(Ja, w, k);
              c[10] = Ja;
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
              var q = c[7], lb = c[2], Oa = H(q), Ya = null, cb = 0, db = 0;
              c[13] = db;
              c[14] = cb;
              c[15] = Ya;
              c[16] = Oa;
              c[17] = lb;
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
              var w = c[9], se = c[2], Gn = null == se;
              c[9] = se;
              m = c;
              m[1] = v(Gn) ? 5 : 6;
              return Z;
            }
            if (15 === l) {
              var db = c[13], cb = c[14], Ya = c[15], Oa = c[16], Vg = c[2], Tn = Oa, Un = Ya, Vn = cb;
              c[13] = db + 1;
              c[18] = Vg;
              c[14] = Vn;
              c[15] = Un;
              c[16] = Tn;
              var pl = m = c;
              pl[2] = null;
              pl[1] = 8;
              return Z;
            }
            if (21 === l) {
              var Wn = c[2], ql = m = c;
              ql[2] = Wn;
              ql[1] = 18;
              return Z;
            }
            if (31 === l) {
              var z = c[10], Xn = k(null), Yn = e.ec(null, z);
              c[19] = Xn;
              var rl = m = c;
              rl[2] = Yn;
              rl[1] = 32;
              return Z;
            }
            if (32 === l) {
              var Zc = c[20], la = c[11], $c = c[21], va = c[12], Zn = c[2], $n = $c, ao = va, bo = la + 1;
              c[20] = Zc;
              c[11] = bo;
              c[22] = Zn;
              c[21] = $n;
              c[12] = ao;
              var sl = m = c;
              sl[2] = null;
              sl[1] = 25;
              return Z;
            }
            if (40 === l) {
              var tl = c[23], co = k(null), eo = e.ec(null, tl);
              c[24] = co;
              var ul = m = c;
              ul[2] = eo;
              ul[1] = 41;
              return Z;
            }
            if (33 === l) {
              var ad = c[25], fo = Ve(ad), m = c;
              m[1] = fo ? 36 : 37;
              return Z;
            }
            if (13 === l) {
              var Oi = c[26], go = Bk(Oi), vl = m = c;
              vl[2] = go;
              vl[1] = 15;
              return Z;
            }
            if (22 === l) {
              var t = c[8], ho = Bk(t), wl = m = c;
              wl[2] = ho;
              wl[1] = 24;
              return Z;
            }
            if (36 === l) {
              var ad = c[25], xl = zd(ad), io = Ad(ad), jo = M(xl), $c = io, va = xl, Zc = jo, la = 0;
              c[20] = Zc;
              c[11] = la;
              c[21] = $c;
              c[12] = va;
              var yl = m = c;
              yl[2] = null;
              yl[1] = 25;
              return Z;
            }
            if (41 === l) {
              var ad = c[25], ko = c[2], $c = H(ad), va = null, la = Zc = 0;
              c[27] = ko;
              c[20] = Zc;
              c[11] = la;
              c[21] = $c;
              c[12] = va;
              var zl = m = c;
              zl[2] = null;
              zl[1] = 25;
              return Z;
            }
            if (43 === l) {
              var Al = m = c;
              Al[2] = null;
              Al[1] = 44;
              return Z;
            }
            if (29 === l) {
              var lo = c[2], Bl = m = c;
              Bl[2] = lo;
              Bl[1] = 26;
              return Z;
            }
            if (44 === l) {
              c[28] = c[2];
              var Cl = m = c;
              Cl[2] = null;
              Cl[1] = 2;
              return Z;
            }
            if (6 === l) {
              var Dl = c[29], mo = I.b ? I.b(d) : I.call(null, d), Pi = yh(mo), El = M(Pi), no = rg.a ? rg.a(h, El) : rg.call(null, h, El), $c = D(Pi), va = null, la = Zc = 0;
              c[30] = no;
              c[20] = Zc;
              c[29] = Pi;
              c[11] = la;
              c[21] = $c;
              c[12] = va;
              var Fl = m = c;
              Fl[2] = null;
              Fl[1] = 25;
              return Z;
            }
            if (28 === l) {
              var ad = c[25], $c = c[21], Gl = D($c);
              c[25] = Gl;
              m = c;
              m[1] = Gl ? 33 : 34;
              return Z;
            }
            if (25 === l) {
              var Zc = c[20], la = c[11], oo = la < Zc, m = c;
              m[1] = v(oo) ? 27 : 28;
              return Z;
            }
            if (34 === l) {
              var Hl = m = c;
              Hl[2] = null;
              Hl[1] = 35;
              return Z;
            }
            if (17 === l) {
              var Il = m = c;
              Il[2] = null;
              Il[1] = 18;
              return Z;
            }
            if (3 === l) {
              var po = c[2], m = c;
              return gl(m, po);
            }
            if (12 === l) {
              var qo = c[2], Jl = m = c;
              Jl[2] = qo;
              Jl[1] = 9;
              return Z;
            }
            if (2 === l) {
              return m = c, el(m, 4, b);
            }
            if (23 === l) {
              var Kl = m = c;
              Kl[2] = null;
              Kl[1] = 24;
              return Z;
            }
            if (35 === l) {
              var ro = c[2], Ll = m = c;
              Ll[2] = ro;
              Ll[1] = 29;
              return Z;
            }
            if (19 === l) {
              var q = c[7], Ml = zd(q), so = Ad(q), to = M(Ml), Oa = so, Ya = Ml, cb = to, db = 0;
              c[13] = db;
              c[14] = cb;
              c[15] = Ya;
              c[16] = Oa;
              var Nl = m = c;
              Nl[2] = null;
              Nl[1] = 8;
              return Z;
            }
            if (11 === l) {
              var Oa = c[16], q = c[7], Ol = D(Oa);
              c[7] = Ol;
              m = c;
              m[1] = Ol ? 16 : 17;
              return Z;
            }
            if (9 === l) {
              var uo = c[2], Pl = m = c;
              Pl[2] = uo;
              Pl[1] = 7;
              return Z;
            }
            if (5 === l) {
              var vo = I.b ? I.b(d) : I.call(null, d), Oa = D(vo), Ya = null, db = cb = 0;
              c[13] = db;
              c[14] = cb;
              c[15] = Ya;
              c[16] = Oa;
              var Ql = m = c;
              Ql[2] = null;
              Ql[1] = 8;
              return Z;
            }
            if (14 === l) {
              var Rl = m = c;
              Rl[2] = null;
              Rl[1] = 15;
              return Z;
            }
            if (45 === l) {
              var wo = c[2], Sl = m = c;
              Sl[2] = wo;
              Sl[1] = 44;
              return Z;
            }
            if (26 === l) {
              var Dl = c[29], xo = c[2], yo = D(Dl);
              c[31] = xo;
              m = c;
              m[1] = yo ? 42 : 43;
              return Z;
            }
            if (16 === l) {
              var q = c[7], zo = Ve(q), m = c;
              m[1] = zo ? 19 : 20;
              return Z;
            }
            if (38 === l) {
              var Ao = c[2], Tl = m = c;
              Tl[2] = Ao;
              Tl[1] = 35;
              return Z;
            }
            if (30 === l) {
              var Ul = m = c;
              Ul[2] = null;
              Ul[1] = 32;
              return Z;
            }
            if (10 === l) {
              var db = c[13], Ya = c[15], Vl = C.a(Ya, db), Oi = N(Vl, 0), Bo = N(Vl, 1);
              c[26] = Oi;
              m = c;
              m[1] = v(Bo) ? 13 : 14;
              return Z;
            }
            if (18 === l) {
              var Co = c[2], Wl = m = c;
              Wl[2] = Co;
              Wl[1] = 12;
              return Z;
            }
            if (42 === l) {
              return m = c, el(m, 45, f);
            }
            if (37 === l) {
              var tl = c[23], w = c[9], ad = c[25], Xl = F(ad), Do = Zl(Xl, w, k);
              c[23] = Xl;
              m = c;
              m[1] = v(Do) ? 39 : 40;
              return Z;
            }
            if (8 === l) {
              var db = c[13], cb = c[14], Eo = db < cb, m = c;
              m[1] = v(Eo) ? 10 : 11;
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
      return dl(z);
    };
  }(k, c, d, e, f, h));
  return d;
};
function fm(a, b) {
  cm(a, b, !0);
  return b;
}
function gm(a) {
  a = bh(a);
  var b = ml.b(null), c = M(a), d = Ff(c), e = ml.b(1), f = og ? og(null) : ng.call(null, null), h = Gg.a(function(a, b, c, d, e, f) {
    return function(h) {
      return function(a, b, c, d, e, f) {
        return function(a) {
          d[h] = a;
          return 0 === kg.a(f, gf) ? Yl(e, d.slice(0)) : null;
        };
      }(a, b, c, d, e, f);
    };
  }(a, b, c, d, e, f), new Hi(null, 0, c, 1, null)), k = ml.b(1);
  Sk(function(a, b, c, d, e, f, h, k) {
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
                      c[5] = f, il(c), d = Z;
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
              return e = Bk(c), a[2] = e, a[1] = 15, Z;
            }
            if (6 === e) {
              return a[2] = null, a[1] = 11, Z;
            }
            if (3 === e) {
              return e = a[2], gl(a, e);
            }
            if (12 === e) {
              var e = a[8], e = a[2], m = dg(kc, e);
              a[8] = e;
              a[1] = v(m) ? 13 : 14;
              return Z;
            }
            return 2 === e ? (e = rg.a ? rg.a(h, d) : rg.call(null, h, d), l = 0, a[9] = e, a[7] = l, a[2] = null, a[1] = 4, Z) : 11 === e ? (l = a[7], a[4] = new hl(10, Object, null, 9, a[4], null, null, null), e = function() {
              var a = l;
              return b.b ? b.b(a) : b.call(null, a);
            }(), m = function() {
              var a = l;
              return k.b ? k.b(a) : k.call(null, a);
            }(), e = nl(e, m), a[2] = e, il(a), Z) : 9 === e ? (l = a[7], a[10] = a[2], a[7] = l + 1, a[2] = null, a[1] = 4, Z) : 5 === e ? (a[11] = a[2], el(a, 12, f)) : 14 === e ? (e = a[8], e = Mf(ch, e), fl(a, 16, c, e)) : 16 === e ? (a[12] = a[2], a[2] = null, a[1] = 2, Z) : 10 === e ? (m = a[2], e = kg.a(h, gf), a[13] = m, a[2] = e, il(a), Z) : 8 === e ? (e = a[2], a[2] = e, a[1] = 5, Z) : null;
          };
        }(a, b, c, d, e, f, h, k), a, b, c, d, e, f, h, k);
      }(), G = function() {
        var b = A.m ? A.m() : A.call(null);
        b[6] = a;
        return b;
      }();
      return dl(G);
    };
  }(k, a, b, c, d, e, f, h));
  return b;
}
;var hm = function hm(b) {
  if (b ? b.kd : b) {
    return b.kd();
  }
  var c;
  c = hm[n(null == b ? null : b)];
  if (!c && (c = hm._, !c)) {
    throw y("PushbackReader.read-char", b);
  }
  return c.call(null, b);
}, im = function im(b, c) {
  if (b ? b.ld : b) {
    return b.ld(0, c);
  }
  var d;
  d = im[n(null == b ? null : b)];
  if (!d && (d = im._, !d)) {
    throw y("PushbackReader.unread", b);
  }
  return d.call(null, b, c);
};
function jm(a, b, c) {
  this.F = a;
  this.buffer = b;
  this.Nc = c;
}
jm.prototype.kd = function() {
  return 0 === this.buffer.length ? (this.Nc += 1, this.F[this.Nc]) : this.buffer.pop();
};
jm.prototype.ld = function(a, b) {
  return this.buffer.push(b);
};
function km(a) {
  var b = !/[^\t\n\r ]/.test(a);
  return v(b) ? b : "," === a;
}
function lm(a, b) {
  var c;
  !(c = !/[^0-9]/.test(b)) && (c = "+" === b || "-" === b) && (c = hm(a), im(a, c), c = !/[^0-9]/.test(c));
  return c;
}
function mm(a) {
  throw Error(Mf(B, a));
}
function nm(a, b) {
  for (var c = new Zb(b), d = hm(a);;) {
    var e;
    if (!(e = null == d || km(d))) {
      e = d;
      var f = "#" !== e;
      e = f ? (f = "'" !== e) ? (f = ":" !== e) ? om.b ? om.b(e) : om.call(null, e) : f : f : f;
    }
    if (e) {
      return im(a, d), c.toString();
    }
    c.append(d);
    d = hm(a);
  }
}
function pm(a) {
  for (;;) {
    var b = hm(a);
    if ("\n" === b || "\r" === b || null == b) {
      return a;
    }
  }
}
var qm = Ji("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$"), rm = Ji("^([-+]?[0-9]+)/([0-9]+)$"), sm = Ji("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$"), tm = Ji("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
function um(a, b) {
  var c = a.exec(b);
  return null != c && c[0] === b ? 1 === c.length ? c[0] : c : null;
}
function vm(a) {
  if (v(um(qm, a))) {
    a = um(qm, a);
    var b = a[2];
    if (null != (ae.a(b, "") ? null : b)) {
      a = 0;
    } else {
      var b = v(a[3]) ? [a[3], 10] : v(a[4]) ? [a[4], 16] : v(a[5]) ? [a[5], 8] : v(a[6]) ? [a[7], parseInt(a[6], 10)] : [null, null], c = b[0];
      null == c ? a = null : (b = parseInt(c, b[1]), a = "-" === a[1] ? -b : b);
    }
  } else {
    v(um(rm, a)) ? (a = um(rm, a), a = parseInt(a[1], 10) / parseInt(a[2], 10)) : a = v(um(sm, a)) ? parseFloat(a) : null;
  }
  return a;
}
var wm = Ji("^[0-9A-Fa-f]{2}$"), xm = Ji("^[0-9A-Fa-f]{4}$");
function ym(a, b, c) {
  return v(Ii(a, c)) ? c : mm(K(["Unexpected unicode escape \\", b, c], 0));
}
function zm(a) {
  return String.fromCharCode(parseInt(a, 16));
}
function Am(a) {
  var b = hm(a), c = "t" === b ? "\t" : "r" === b ? "\r" : "n" === b ? "\n" : "\\" === b ? "\\" : '"' === b ? '"' : "b" === b ? "\b" : "f" === b ? "\f" : null;
  v(c) ? b = c : "x" === b ? (a = (new Zb(hm(a), hm(a))).toString(), b = zm(ym(wm, b, a))) : "u" === b ? (a = (new Zb(hm(a), hm(a), hm(a), hm(a))).toString(), b = zm(ym(xm, b, a))) : b = /[^0-9]/.test(b) ? mm(K(["Unexpected unicode escape \\", b], 0)) : String.fromCharCode(b);
  return b;
}
function Bm(a) {
  for (var b = hm(a);;) {
    var c;
    c = b;
    c = km.b ? km.b(c) : km.call(null, c);
    if (v(c)) {
      b = hm(a);
    } else {
      return b;
    }
  }
}
function Cm(a, b) {
  for (var c = td(De);;) {
    var d = Bm(b);
    v(d) || mm(K(["EOF while reading"], 0));
    if (a === d) {
      return vd(c);
    }
    var e = function() {
      var a = d;
      return om.b ? om.b(a) : om.call(null, a);
    }();
    if (v(e)) {
      var f = e, e = function() {
        var a = d;
        return f.a ? f.a(b, a) : f.call(null, b, a);
      }()
    } else {
      im(b, d), e = Dm.s ? Dm.s(b, !0, null, !0) : Dm.call(null, b, !0, null);
    }
    c = e === b ? c : Kf.a(c, e);
  }
}
function Em(a, b) {
  return mm(K(["Reader for ", b, " not implemented yet"], 0));
}
function Fm(a, b) {
  var c = hm(a), d = Gm.b ? Gm.b(c) : Gm.call(null, c);
  if (v(d)) {
    return d.a ? d.a(a, b) : d.call(null, a, b);
  }
  d = Hm.a ? Hm.a(a, c) : Hm.call(null, a, c);
  return v(d) ? d : mm(K(["No dispatch macro for ", c], 0));
}
function Im(a, b) {
  return mm(K(["Unmatched delimiter ", b], 0));
}
function Jm(a) {
  return Mf(sf, Cm(")", a));
}
function Km(a) {
  return Cm("]", a);
}
function Lm(a) {
  a = Cm("}", a);
  var b = M(a);
  if ("number" !== typeof b || !mc(isNaN(b)) || Infinity === b || parseFloat(b) !== parseInt(b, 10)) {
    throw Error([B("Argument must be an integer: "), B(b)].join(""));
  }
  0 !== (b & 1) && mm(K(["Map literal must contain an even number of forms"], 0));
  return Mf(pg, a);
}
function Mm(a, b) {
  for (var c = new Zb(b), d = hm(a);;) {
    if (v(function() {
      var a = null == d;
      if (a || (a = km(d))) {
        return a;
      }
      a = d;
      return om.b ? om.b(a) : om.call(null, a);
    }())) {
      im(a, d);
      var e = c.toString(), c = vm(e);
      return v(c) ? c : mm(K(["Invalid number format [", e, "]"], 0));
    }
    c.append(d);
    d = e = hm(a);
  }
}
function Nm(a) {
  for (var b = new Zb, c = hm(a);;) {
    if (null == c) {
      return mm(K(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(Am(a));
    } else {
      if ('"' === c) {
        return b.toString();
      }
      b.append(c);
    }
    c = hm(a);
  }
}
function Om(a) {
  for (var b = new Zb, c = hm(a);;) {
    if (null == c) {
      return mm(K(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(c);
      var d = hm(a);
      if (null == d) {
        return mm(K(["EOF while reading"], 0));
      }
      var e = function() {
        var a = b;
        a.append(d);
        return a;
      }(), f = hm(a);
    } else {
      if ('"' === c) {
        return b.toString();
      }
      e = function() {
        var a = b;
        a.append(c);
        return a;
      }();
      f = hm(a);
    }
    b = e;
    c = f;
  }
}
function Pm(a, b) {
  var c = nm(a, b), d = -1 != c.indexOf("/");
  v(v(d) ? 1 !== c.length : d) ? c = Yd(c.substring(0, c.indexOf("/")), c.substring(c.indexOf("/") + 1, c.length)) : (d = Xd(c), c = "nil" === c ? null : "true" === c ? !0 : "false" === c ? !1 : "/" === c ? new Wd(null, "/", "/", -1371932971, null) : d);
  return c;
}
function Qm(a) {
  a = nm(a, hm(a));
  var b = um(tm, a);
  a = b[0];
  var c = b[1], b = b[2];
  return void 0 !== c && ":/" === c.substring(c.length - 2, c.length) || ":" === b[b.length - 1] || -1 !== a.indexOf("::", 1) ? mm(K(["Invalid token: ", a], 0)) : null != c && 0 < c.length ? vf.a(c.substring(0, c.indexOf("/")), b) : vf.b(a);
}
function Rm(a) {
  return function(b) {
    return Dc(Dc($d, Dm.s ? Dm.s(b, !0, null, !0) : Dm.call(null, b, !0, null)), a);
  };
}
function Sm() {
  return function() {
    return mm(K(["Unreadable form"], 0));
  };
}
function Tm(a) {
  var b;
  b = Dm.s ? Dm.s(a, !0, null, !0) : Dm.call(null, a, !0, null);
  b = b instanceof Wd ? new ec(null, 1, [mk, b], null) : "string" === typeof b ? new ec(null, 1, [mk, b], null) : b instanceof P ? new Dh([b, !0]) : b;
  Te(b) || mm(K(["Metadata must be Symbol,Keyword,String or Map"], 0));
  return((a = Dm.s ? Dm.s(a, !0, null, !0) : Dm.call(null, a, !0, null)) ? a.g & 262144 || a.Ud || (a.g ? 0 : x(dd, a)) : x(dd, a)) ? xe(a, ti.k(K([Ne(a), b], 0))) : mm(K(["Metadata can only be applied to IWithMetas"], 0));
}
function Um(a) {
  return Bi(Cm("}", a));
}
function Vm(a) {
  return Ji(Om(a));
}
function Wm(a) {
  Dm.s ? Dm.s(a, !0, null, !0) : Dm.call(null, a, !0, null);
  return a;
}
function om(a) {
  return'"' === a ? Nm : ":" === a ? Qm : ";" === a ? pm : "'" === a ? Rm(new Wd(null, "quote", "quote", 1377916282, null)) : "@" === a ? Rm(new Wd(null, "deref", "deref", 1494944732, null)) : "^" === a ? Tm : "`" === a ? Em : "~" === a ? Em : "(" === a ? Jm : ")" === a ? Im : "[" === a ? Km : "]" === a ? Im : "{" === a ? Lm : "}" === a ? Im : "\\" === a ? hm : "#" === a ? Fm : null;
}
function Gm(a) {
  return "{" === a ? Um : "\x3c" === a ? Sm() : '"' === a ? Vm : "!" === a ? pm : "_" === a ? Wm : null;
}
function Dm(a, b, c) {
  for (;;) {
    var d = hm(a);
    if (null == d) {
      return v(b) ? mm(K(["EOF while reading"], 0)) : c;
    }
    if (!km(d)) {
      if (";" === d) {
        var e = function() {
          var b = a, c = d;
          return pm.a ? pm.a(b, c) : pm.call(null, b);
        }();
        a = e;
      } else {
        var f = om(d), e = v(f) ? function() {
          var b = a, c = d;
          return f.a ? f.a(b, c) : f.call(null, b, c);
        }() : lm(a, d) ? Mm(a, d) : Pm(a, d);
        if (e !== a) {
          return e;
        }
      }
    }
  }
}
var Xm = function(a, b) {
  return function(c, d) {
    return Ge(v(d) ? b : a, c);
  };
}(new T(null, 13, 5, U, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), new T(null, 13, 5, U, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null)), Ym = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function Zm(a) {
  a = parseInt(a, 10);
  return mc(isNaN(a)) ? a : null;
}
function $m(a, b, c, d) {
  a <= b && b <= c || mm(K([[B(d), B(" Failed:  "), B(a), B("\x3c\x3d"), B(b), B("\x3c\x3d"), B(c)].join("")], 0));
  return b;
}
function an(a) {
  var b = Ii(Ym, a);
  N(b, 0);
  var c = N(b, 1), d = N(b, 2), e = N(b, 3), f = N(b, 4), h = N(b, 5), k = N(b, 6), l = N(b, 7), m = N(b, 8), p = N(b, 9), q = N(b, 10);
  if (mc(b)) {
    return mm(K([[B("Unrecognized date/time syntax: "), B(a)].join("")], 0));
  }
  var r = Zm(c), t = function() {
    var a = Zm(d);
    return v(a) ? a : 1;
  }();
  a = function() {
    var a = Zm(e);
    return v(a) ? a : 1;
  }();
  var b = function() {
    var a = Zm(f);
    return v(a) ? a : 0;
  }(), c = function() {
    var a = Zm(h);
    return v(a) ? a : 0;
  }(), w = function() {
    var a = Zm(k);
    return v(a) ? a : 0;
  }(), z = function() {
    var a;
    a: {
      if (ae.a(3, M(l))) {
        a = l;
      } else {
        if (3 < M(l)) {
          a = l.substring(0, 3);
        } else {
          for (a = new Zb(l);;) {
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
    a = Zm(a);
    return v(a) ? a : 0;
  }(), m = (ae.a(m, "-") ? -1 : 1) * (60 * function() {
    var a = Zm(p);
    return v(a) ? a : 0;
  }() + function() {
    var a = Zm(q);
    return v(a) ? a : 0;
  }());
  return new T(null, 8, 5, U, [r, $m(1, t, 12, "timestamp month field must be in range 1..12"), $m(1, a, function() {
    var a;
    a = 0 === (r % 4 + 4) % 4;
    v(a) && (a = mc(0 === (r % 100 + 100) % 100), a = v(a) ? a : 0 === (r % 400 + 400) % 400);
    return Xm.a ? Xm.a(t, a) : Xm.call(null, t, a);
  }(), "timestamp day field must be in range 1..last day in month"), $m(0, b, 23, "timestamp hour field must be in range 0..23"), $m(0, c, 59, "timestamp minute field must be in range 0..59"), $m(0, w, ae.a(c, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), $m(0, z, 999, "timestamp millisecond field must be in range 0..999"), m], null);
}
var bn, cn = new ec(null, 4, ["inst", function(a) {
  var b;
  if ("string" === typeof a) {
    if (b = an(a), v(b)) {
      a = N(b, 0);
      var c = N(b, 1), d = N(b, 2), e = N(b, 3), f = N(b, 4), h = N(b, 5), k = N(b, 6);
      b = N(b, 7);
      b = new Date(Date.UTC(a, c - 1, d, e, f, h, k) - 6E4 * b);
    } else {
      b = mm(K([[B("Unrecognized date/time syntax: "), B(a)].join("")], 0));
    }
  } else {
    b = mm(K(["Instance literal expects a string for its timestamp."], 0));
  }
  return b;
}, "uuid", function(a) {
  return "string" === typeof a ? new rj(a) : mm(K(["UUID literal expects a string as its representation."], 0));
}, "queue", function(a) {
  return Ue(a) ? Fg.a(nh, a) : mm(K(["Queue literal expects a vector for its elements."], 0));
}, "js", function(a) {
  if (Ue(a)) {
    var b = [];
    a = D(a);
    for (var c = null, d = 0, e = 0;;) {
      if (e < d) {
        var f = c.O(null, e);
        b.push(f);
        e += 1;
      } else {
        if (a = D(a)) {
          c = a, Ve(c) ? (a = zd(c), e = Ad(c), c = a, d = M(a), a = e) : (a = F(c), b.push(a), a = H(c), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  if (Te(a)) {
    b = {};
    a = D(a);
    c = null;
    for (e = d = 0;;) {
      if (e < d) {
        var h = c.O(null, e), f = N(h, 0), h = N(h, 1);
        b[wf(f)] = h;
        e += 1;
      } else {
        if (a = D(a)) {
          Ve(a) ? (d = zd(a), a = Ad(a), c = d, d = M(d)) : (d = F(a), c = N(d, 0), d = N(d, 1), b[wf(c)] = d, a = H(a), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  return mm(K([[B("JS literal expects a vector or map containing "), B("only string or unqualified keyword keys")].join("")], 0));
}], null);
bn = og ? og(cn) : ng.call(null, cn);
var dn = og ? og(null) : ng.call(null, null);
function Hm(a, b) {
  var c = Pm(a, b), d = Ge(I.b ? I.b(bn) : I.call(null, bn), "" + B(c)), e = I.b ? I.b(dn) : I.call(null, dn);
  return v(d) ? (c = Dm(a, !0, null), d.b ? d.b(c) : d.call(null, c)) : v(e) ? (d = Dm(a, !0, null), e.a ? e.a(c, d) : e.call(null, c, d)) : mm(K(["Could not find tag parser for ", "" + B(c), " in ", Vi(K([yh(I.b ? I.b(bn) : I.call(null, bn))], 0))], 0));
}
;function en(a) {
  return a.b ? a.b(0) : a.call(null, 0);
}
function fn(a) {
  return wj.b(Ne(a)).call(null, en(a));
}
function gn(a) {
  var b = N(a, 0), c = N(a, 1), d = Ze(c) ? Mf(pg, c) : c, e = Ge(d, Sj), c = Ge(d, sj), f = Ge(d, dk), h = Ge(d, yj), d = Ge(d, fk);
  return v(f) ? (f = Oe(f), v(d) ? (d = U, b = If.a(e, J(b, h)), b = Tj.b(Ne(a)).call(null, f, b), c = new T(null, 2, 5, d, [b, v(c) ? O.d(c, fk, !0) : c], null)) : c = new T(null, 2, 5, U, [f, c], null), xe(c, Ne(a))) : null;
}
function hn(a) {
  var b = N(a, 0), c = N(a, 1), c = Ze(c) ? Mf(pg, c) : c, d = Ge(c, Sj), e = Ge(c, yj), f = N(e, 0), h = lf(e);
  return v(v(c) ? e : c) ? xe(new T(null, 2, 5, U, [f, O.k(c, Sj, Ce.a(d, b), K([yj, h], 0))], null), Ne(a)) : null;
}
function jn(a) {
  if (ae.a(nk, a.b ? a.b(1) : a.call(null, 1))) {
    return a;
  }
  var b;
  b = fn(a);
  if (v(b)) {
    if (v(fn(a))) {
      b = N(a, 0);
      var c = N(a, 1), d;
      if (v(fn(a))) {
        d = zj.b(Ne(a)).call(null, en(a));
      } else {
        throw "called children on a leaf node";
      }
      var e = N(d, 0), f = lf(d);
      b = v(d) ? xe(new T(null, 2, 5, U, [e, new ec(null, 4, [Sj, De, dk, v(c) ? Ce.a(dk.b(c), b) : new T(null, 1, 5, U, [b], null), sj, c, yj, f], null)], null), Ne(a)) : null;
    } else {
      b = null;
    }
  }
  if (v(b)) {
    return b;
  }
  b = hn(a);
  if (v(b)) {
    return b;
  }
  for (;;) {
    if (v(gn(a))) {
      b = hn(gn(a));
      if (v(b)) {
        return b;
      }
      a = gn(a);
    } else {
      return new T(null, 2, 5, U, [en(a), nk], null);
    }
  }
}
;function kn(a, b) {
  var c = ml.b(1);
  Sk(function(c) {
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
                      c[5] = f, il(c), d = Z;
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
            return 1 === d ? (c[2] = null, c[1] = 2, Z) : 2 === d ? el(c, 4, b) : 3 === d ? (d = c[2], gl(c, d)) : 4 === d ? (d = c[7], d = c[2], c[7] = d, c[1] = v(null == d) ? 5 : 6, Z) : 5 === d ? (c[2] = null, c[1] = 7, Z) : 6 === d ? (d = c[7], d = a.b ? a.b(d) : a.call(null, d), c[8] = d, c[2] = null, c[1] = 2, Z) : 7 === d ? (d = c[2], c[2] = d, c[1] = 3, Z) : null;
          };
        }(c), c);
      }(), f = function() {
        var a = e.m ? e.m() : e.call(null);
        a[6] = c;
        return a;
      }();
      return dl(f);
    };
  }(c));
}
;function ln(a, b) {
  var c = Nf(Ei, a, b);
  return J(c, Cg(function(a) {
    return function(b) {
      return a === b;
    };
  }(c), b));
}
var mn = function mn() {
  switch(arguments.length) {
    case 0:
      return mn.m();
    case 1:
      return mn.b(arguments[0]);
    case 2:
      return mn.a(arguments[0], arguments[1]);
    default:
      return mn.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
mn.m = function() {
  return xi;
};
mn.b = function(a) {
  return a;
};
mn.a = function(a, b) {
  return M(a) < M(b) ? vc(Ce, b, a) : vc(Ce, a, b);
};
mn.k = function(a, b, c) {
  a = ln(M, Ce.k(c, b, K([a], 0)));
  return vc(Fg, F(a), Zd(a));
};
mn.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return mn.k(b, a, c);
};
mn.v = 2;
var nn = function nn() {
  switch(arguments.length) {
    case 1:
      return nn.b(arguments[0]);
    case 2:
      return nn.a(arguments[0], arguments[1]);
    default:
      return nn.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
nn.b = function(a) {
  return a;
};
nn.a = function(a, b) {
  for (;;) {
    if (M(b) < M(a)) {
      var c = a;
      a = b;
      b = c;
    } else {
      return vc(function(a, b) {
        return function(a, c) {
          return af(b, c) ? a : Pe.a(a, c);
        };
      }(a, b), a, a);
    }
  }
};
nn.k = function(a, b, c) {
  a = ln(function(a) {
    return-M(a);
  }, Ce.k(c, b, K([a], 0)));
  return vc(nn, F(a), Zd(a));
};
nn.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return nn.k(b, a, c);
};
nn.v = 2;
var on = function on() {
  switch(arguments.length) {
    case 1:
      return on.b(arguments[0]);
    case 2:
      return on.a(arguments[0], arguments[1]);
    default:
      return on.k(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
on.b = function(a) {
  return a;
};
on.a = function(a, b) {
  return M(a) < M(b) ? vc(function(a, d) {
    return af(b, d) ? Pe.a(a, d) : a;
  }, a, a) : vc(Pe, a, b);
};
on.k = function(a, b, c) {
  return vc(on, a, Ce.a(c, b));
};
on.t = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return on.k(b, a, c);
};
on.v = 2;
function pn(a, b) {
  return on.a(a, yi([b]));
}
function qn(a) {
  if (Qe(a)) {
    throw Error([B("Assert failed: "), B(Vi(K([sf(new Wd(null, "not", "not", 1044554643, null), sf(new Wd(null, "empty?", "empty?", 76408555, null), new Wd(null, "s", "s", -948495851, null)))], 0)))].join(""));
  }
  var b = F(a);
  return new T(null, 2, 5, U, [b, pn(a, b)], null);
}
function rn(a) {
  var b = Bi(yh(a));
  a = Mf(mn, zh(a));
  return on.a(b, a);
}
function sn(a) {
  var b = Mf(mn, zh(a));
  return vc(function() {
    return function(a, b) {
      return v(Ge(a, b)) ? a : O.d(a, b, xi);
    };
  }(b), a, b);
}
function tn(a) {
  return un(sn(a), De, rn(a));
}
function un(a, b, c) {
  for (;;) {
    if (Qe(c)) {
      return cg(Qe, zh(a)) ? b : null;
    }
    var d = qn(c), e = N(d, 0), f = N(d, 1), h = function() {
      var b = e;
      return a.b ? a.b(b) : a.call(null, b);
    }();
    c = d = vc(function(a, b, c, d, e) {
      return function(a, b) {
        return Ig.s(a, new T(null, 1, 5, U, [e], null), pn, b);
      };
    }(a, b, c, d, e, f, h), a, h);
    b = Ce.a(b, e);
    f = mn.a(f, nn.a(rn(d), h));
    a = c;
    c = f;
  }
}
;var vn = function vn(b) {
  if (b ? b.Oc : b) {
    return b.value;
  }
  var c;
  c = vn[n(null == b ? null : b)];
  if (!c && (c = vn._, !c)) {
    throw y("BoxedValueProtocol.value", b);
  }
  return c.call(null, b);
}, wn = function wn(b) {
  if (b ? b.$d : b) {
    return b.jb;
  }
  var c;
  c = wn[n(null == b ? null : b)];
  if (!c && (c = wn._, !c)) {
    throw y("EventProtocol.topic", b);
  }
  return c.call(null, b);
}, xn = function xn(b) {
  if (b ? b.Zd : b) {
    return b.timestamp;
  }
  var c;
  c = xn[n(null == b ? null : b)];
  if (!c && (c = xn._, !c)) {
    throw y("EventProtocol.timestamp", b);
  }
  return c.call(null, b);
}, yn = function yn(b, c) {
  if (b ? b.qd : b) {
    return b.qd(0, c);
  }
  var d;
  d = yn[n(null == b ? null : b)];
  if (!d && (d = yn._, !d)) {
    throw y("EventProtocol.record-timestamp", b);
  }
  return d.call(null, b, c);
}, zn = function zn(b) {
  if (b ? b.Pc : b) {
    return b.Pc(b);
  }
  var c;
  c = zn[n(null == b ? null : b)];
  if (!c && (c = zn._, !c)) {
    throw y("MessageProtocol.fresh?", b);
  }
  return c.call(null, b);
};
function An(a, b, c, d, e, f) {
  this.jb = a;
  this.value = b;
  this.timestamp = c;
  this.p = d;
  this.j = e;
  this.i = f;
  this.g = 2229667594;
  this.r = 8192;
}
g = An.prototype;
g.$d = function() {
  return this.jb;
};
g.Zd = function() {
  return this.timestamp;
};
g.qd = function(a, b) {
  return O.d(this, qk, b);
};
g.w = function(a, b) {
  return Kc.d(this, b, null);
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
      return He(this.j, b, c);
  }
};
g.A = function(a, b, c) {
  return Ki(b, function() {
    return function(a) {
      return Ki(b, W, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.Event{", ", ", "}", c, If.a(new T(null, 3, 5, U, [new T(null, 2, 5, U, [Rj, this.jb], null), new T(null, 2, 5, U, [Kj, this.value], null), new T(null, 2, 5, U, [qk, this.timestamp], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 3 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = mf(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? qh(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.Oc = function() {
  return this.value;
};
g.Aa = function(a, b) {
  return af(new vi(null, new ec(null, 3, [Kj, null, Rj, null, qk, null], null), null), b) ? Je.a(xe(Fg.a(Tf, this), this.p), b) : new An(this.jb, this.value, this.timestamp, this.p, Rf(Je.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return v(R.a ? R.a(Rj, b) : R.call(null, Rj, b)) ? new An(c, this.value, this.timestamp, this.p, this.j, null) : v(R.a ? R.a(Kj, b) : R.call(null, Kj, b)) ? new An(this.jb, c, this.timestamp, this.p, this.j, null) : v(R.a ? R.a(qk, b) : R.call(null, qk, b)) ? new An(this.jb, this.value, c, this.p, this.j, null) : new An(this.jb, this.value, this.timestamp, this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(If.a(new T(null, 3, 5, U, [new T(null, 2, 5, U, [Rj, this.jb], null), new T(null, 2, 5, U, [Kj, this.value], null), new T(null, 2, 5, U, [qk, this.timestamp], null)], null), this.j));
};
g.D = function(a, b) {
  return new An(this.jb, this.value, this.timestamp, b, this.j, this.i);
};
g.G = function(a, b) {
  return Ue(b) ? Mc(this, C.a(b, 0), C.a(b, 1)) : vc(Dc, this, b);
};
function Bn(a, b) {
  return new An(a, b, null, null, null, null);
}
function Cn(a, b, c, d) {
  this.value = a;
  this.p = b;
  this.j = c;
  this.i = d;
  this.g = 2229667594;
  this.r = 8192;
}
g = Cn.prototype;
g.w = function(a, b) {
  return Kc.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.la : null) {
    case "value":
      return this.value;
    default:
      return He(this.j, b, c);
  }
};
g.A = function(a, b, c) {
  return Ki(b, function() {
    return function(a) {
      return Ki(b, W, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.Fresh{", ", ", "}", c, If.a(new T(null, 1, 5, U, [new T(null, 2, 5, U, [Kj, this.value], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 1 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = mf(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? qh(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.Oc = function() {
  return this.value;
};
g.Pc = function() {
  return!0;
};
g.Aa = function(a, b) {
  return af(new vi(null, new ec(null, 1, [Kj, null], null), null), b) ? Je.a(xe(Fg.a(Tf, this), this.p), b) : new Cn(this.value, this.p, Rf(Je.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return v(R.a ? R.a(Kj, b) : R.call(null, Kj, b)) ? new Cn(c, this.p, this.j, null) : new Cn(this.value, this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(If.a(new T(null, 1, 5, U, [new T(null, 2, 5, U, [Kj, this.value], null)], null), this.j));
};
g.D = function(a, b) {
  return new Cn(this.value, b, this.j, this.i);
};
g.G = function(a, b) {
  return Ue(b) ? Mc(this, C.a(b, 0), C.a(b, 1)) : vc(Dc, this, b);
};
function Dn(a, b, c, d) {
  this.value = a;
  this.p = b;
  this.j = c;
  this.i = d;
  this.g = 2229667594;
  this.r = 8192;
}
g = Dn.prototype;
g.w = function(a, b) {
  return Kc.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.la : null) {
    case "value":
      return this.value;
    default:
      return He(this.j, b, c);
  }
};
g.A = function(a, b, c) {
  return Ki(b, function() {
    return function(a) {
      return Ki(b, W, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.Cached{", ", ", "}", c, If.a(new T(null, 1, 5, U, [new T(null, 2, 5, U, [Kj, this.value], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 1 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = mf(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? qh(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.Oc = function() {
  return this.value;
};
g.Pc = function() {
  return!1;
};
g.Aa = function(a, b) {
  return af(new vi(null, new ec(null, 1, [Kj, null], null), null), b) ? Je.a(xe(Fg.a(Tf, this), this.p), b) : new Dn(this.value, this.p, Rf(Je.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return v(R.a ? R.a(Kj, b) : R.call(null, Kj, b)) ? new Dn(c, this.p, this.j, null) : new Dn(this.value, this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(If.a(new T(null, 1, 5, U, [new T(null, 2, 5, U, [Kj, this.value], null)], null), this.j));
};
g.D = function(a, b) {
  return new Dn(this.value, b, this.j, this.i);
};
g.G = function(a, b) {
  return Ue(b) ? Mc(this, C.a(b, 0), C.a(b, 1)) : vc(Dc, this, b);
};
function En(a) {
  return new Cn(a, null, null, null);
}
function Fn(a) {
  return new Dn(a, null, null, null);
}
var Hn = hg(Zi, Ag(zn), S.b(vn)), In = {}, Jn = function Jn(b) {
  if (b ? b.td : b) {
    return b.td();
  }
  var c;
  c = Jn[n(null == b ? null : b)];
  if (!c && (c = Jn._, !c)) {
    throw y("SignalProtocol.signal-deps", b);
  }
  return c.call(null, b);
}, Kn = function Kn(b) {
  if (b ? b.ud : b) {
    return b.ud();
  }
  var c;
  c = Kn[n(null == b ? null : b)];
  if (!c && (c = Kn._, !c)) {
    throw y("SignalProtocol.topsort", b);
  }
  return c.call(null, b);
};
function Ln(a) {
  return a ? v(v(null) ? null : a.ae) ? !0 : a.Ob ? !1 : x(In, a) : x(In, a);
}
function Mn(a) {
  return vc(function(a, c) {
    var d = ck.b(c);
    return v(d) ? O.d(a, d, Ce.a(He(a, d, De), c)) : a;
  }, Tf, a);
}
function Nn(a, b) {
  var c = function(a) {
    return function(b) {
      return Fg.d(Ci(), S.b(a), b);
    };
  }(Di(b, new Hi(null, 0, Number.MAX_VALUE, 1, null)));
  return Di(yh(a), S.a(c, zh(a)));
}
function On(a, b, c, d, e, f, h, k) {
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
g = On.prototype;
g.w = function(a, b) {
  return Kc.d(this, b, null);
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
      return He(this.j, b, c);
  }
};
g.A = function(a, b, c) {
  return Ki(b, function() {
    return function(a) {
      return Ki(b, W, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata{", ", ", "}", c, If.a(new T(null, 5, 5, U, [new T(null, 2, 5, U, [ok, this.eb], null), new T(null, 2, 5, U, [Dj, this.ab], null), new T(null, 2, 5, U, [kk, this.kb], null), new T(null, 2, 5, U, [Mj, this.$a], null), new T(null, 2, 5, U, [lk, this.Za], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 5 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = mf(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? qh(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.Aa = function(a, b) {
  return af(new vi(null, new ec(null, 5, [Dj, null, Mj, null, kk, null, lk, null, ok, null], null), null), b) ? Je.a(xe(Fg.a(Tf, this), this.p), b) : new On(this.eb, this.ab, this.kb, this.$a, this.Za, this.p, Rf(Je.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return v(R.a ? R.a(ok, b) : R.call(null, ok, b)) ? new On(c, this.ab, this.kb, this.$a, this.Za, this.p, this.j, null) : v(R.a ? R.a(Dj, b) : R.call(null, Dj, b)) ? new On(this.eb, c, this.kb, this.$a, this.Za, this.p, this.j, null) : v(R.a ? R.a(kk, b) : R.call(null, kk, b)) ? new On(this.eb, this.ab, c, this.$a, this.Za, this.p, this.j, null) : v(R.a ? R.a(Mj, b) : R.call(null, Mj, b)) ? new On(this.eb, this.ab, this.kb, c, this.Za, this.p, this.j, null) : v(R.a ? R.a(lk, b) : R.call(null, lk, 
  b)) ? new On(this.eb, this.ab, this.kb, this.$a, c, this.p, this.j, null) : new On(this.eb, this.ab, this.kb, this.$a, this.Za, this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(If.a(new T(null, 5, 5, U, [new T(null, 2, 5, U, [ok, this.eb], null), new T(null, 2, 5, U, [Dj, this.ab], null), new T(null, 2, 5, U, [kk, this.kb], null), new T(null, 2, 5, U, [Mj, this.$a], null), new T(null, 2, 5, U, [lk, this.Za], null)], null), this.j));
};
g.D = function(a, b) {
  return new On(this.eb, this.ab, this.kb, this.$a, this.Za, b, this.j, this.i);
};
g.G = function(a, b) {
  return Ue(b) ? Mc(this, C.a(b, 0), C.a(b, 1)) : vc(Dc, this, b);
};
function Pn(a, b, c, d, e) {
  return new On(a, b, c, d, e, null, null, null);
}
function Qn(a) {
  var b = new Xi(function() {
    var b;
    a: {
      b = Tf;
      for (var c = new Dh([a, xi]), d = xe(new T(null, 2, 5, U, [a, null], null), new ec(null, 3, [wj, fg(!0), zj, gg(D, Jn), Tj, null], null));;) {
        var e;
        e = d;
        e = ae.a(nk, e.b ? e.b(1) : e.call(null, 1));
        if (v(e)) {
          b = new ec(null, 2, [ok, b, Dj, c], null);
          break a;
        }
        if (af(b, en(d))) {
          b: {
            if (e = hn(d), v(e)) {
              d = e;
            } else {
              for (;;) {
                if (v(gn(d))) {
                  e = hn(gn(d));
                  if (v(e)) {
                    d = e;
                    break b;
                  }
                  d = gn(d);
                } else {
                  d = new T(null, 2, 5, U, [en(d), nk], null);
                  break b;
                }
              }
            }
          }
        } else {
          e = en(d);
          var f = Jn(e), d = jn(d);
          b = O.d(b, e, f);
          c = ui.k(mn, K([c, Di(f, zg(yi([e])))], 0));
        }
      }
    }
    return b;
  }, null), c = new Xi(function(a) {
    return function() {
      return ok.b(I.b ? I.b(a) : I.call(null, a));
    };
  }(b), null), d = new Xi(function(a) {
    return function() {
      return Dj.b(I.b ? I.b(a) : I.call(null, a));
    };
  }(b, c), null), e = new Xi(function(a, b) {
    return function() {
      var a = I.b ? I.b(b) : I.call(null, b);
      return Fg.a(De, rf(tn(a)));
    };
  }(b, c, d), null), f = new Xi(function(a, b, c, d) {
    return function() {
      return Mn(I.b ? I.b(d) : I.call(null, d));
    };
  }(b, c, d, e), null);
  return xe(a, Pn(c, d, e, new Xi(function(a, b, c, d) {
    return function() {
      return Nn(I.b ? I.b(c) : I.call(null, c), I.b ? I.b(d) : I.call(null, d));
    };
  }(b, c, d, e, f), null), f));
}
function Rn() {
  return Sn(arguments[0], arguments[1], 2 < arguments.length ? new E(Array.prototype.slice.call(arguments, 2), 0) : null);
}
function Sn(a, b, c) {
  if (null == b) {
    throw Error([B("Assert failed: "), B("This signal is not a valid write-port, use the `jamesmacaulay.zelkova.signal/write-port` constructor if you want to treat this signal like a channel."), B("\n"), B(Vi(K([sf(new Wd(null, "not", "not", 1044554643, null), sf(new Wd(null, "nil?", "nil?", 1612038930, null), new Wd(null, "ch", "ch", 1085813622, null)))], 0)))].join(""));
  }
  return Nf(a, b, c);
}
function Fo(a, b, c, d, e, f, h, k, l, m) {
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
g = Fo.prototype;
g.w = function(a, b) {
  return Kc.d(this, b, null);
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
      return He(this.j, b, c);
  }
};
g.Lb = function() {
  return Rn(Bk, this.ya);
};
g.A = function(a, b, c) {
  return Ki(b, function() {
    return function(a) {
      return Ki(b, W, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.SignalDefinition{", ", ", "}", c, If.a(new T(null, 7, 5, U, [new T(null, 2, 5, U, [Xj, this.Ka], null), new T(null, 2, 5, U, [Hj, this.Ea], null), new T(null, 2, 5, U, [ck, this.Na], null), new T(null, 2, 5, U, [rk, this.La], null), new T(null, 2, 5, U, [vk, this.Ba], null), new T(null, 2, 5, U, [tj, this.Ja], null), new T(null, 2, 5, U, [Wj, this.ya], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 7 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = mf(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? qh(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.ae = !0;
g.td = function() {
  var a = this.Ba;
  return Fg.d(xi, Ag(Ln), v(a) ? a : this.Ea);
};
g.ud = function() {
  var a = kk.b(Ne(this));
  return I.b ? I.b(a) : I.call(null, a);
};
g.Mb = function(a, b, c) {
  return Sn(Ak, this.ya, K([b, c], 0));
};
g.Aa = function(a, b) {
  return af(new vi(null, new ec(null, 7, [tj, null, Hj, null, Wj, null, Xj, null, ck, null, rk, null, vk, null], null), null), b) ? Je.a(xe(Fg.a(Tf, this), this.p), b) : new Fo(this.Ka, this.Ea, this.Na, this.La, this.Ba, this.Ja, this.ya, this.p, Rf(Je.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return v(R.a ? R.a(Xj, b) : R.call(null, Xj, b)) ? new Fo(c, this.Ea, this.Na, this.La, this.Ba, this.Ja, this.ya, this.p, this.j, null) : v(R.a ? R.a(Hj, b) : R.call(null, Hj, b)) ? new Fo(this.Ka, c, this.Na, this.La, this.Ba, this.Ja, this.ya, this.p, this.j, null) : v(R.a ? R.a(ck, b) : R.call(null, ck, b)) ? new Fo(this.Ka, this.Ea, c, this.La, this.Ba, this.Ja, this.ya, this.p, this.j, null) : v(R.a ? R.a(rk, b) : R.call(null, rk, b)) ? new Fo(this.Ka, this.Ea, this.Na, c, this.Ba, this.Ja, 
  this.ya, this.p, this.j, null) : v(R.a ? R.a(vk, b) : R.call(null, vk, b)) ? new Fo(this.Ka, this.Ea, this.Na, this.La, c, this.Ja, this.ya, this.p, this.j, null) : v(R.a ? R.a(tj, b) : R.call(null, tj, b)) ? new Fo(this.Ka, this.Ea, this.Na, this.La, this.Ba, c, this.ya, this.p, this.j, null) : v(R.a ? R.a(Wj, b) : R.call(null, Wj, b)) ? new Fo(this.Ka, this.Ea, this.Na, this.La, this.Ba, this.Ja, c, this.p, this.j, null) : new Fo(this.Ka, this.Ea, this.Na, this.La, this.Ba, this.Ja, this.ya, 
  this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(If.a(new T(null, 7, 5, U, [new T(null, 2, 5, U, [Xj, this.Ka], null), new T(null, 2, 5, U, [Hj, this.Ea], null), new T(null, 2, 5, U, [ck, this.Na], null), new T(null, 2, 5, U, [rk, this.La], null), new T(null, 2, 5, U, [vk, this.Ba], null), new T(null, 2, 5, U, [tj, this.Ja], null), new T(null, 2, 5, U, [Wj, this.ya], null)], null), this.j));
};
g.D = function(a, b) {
  return new Fo(this.Ka, this.Ea, this.Na, this.La, this.Ba, this.Ja, this.ya, b, this.j, this.i);
};
g.G = function(a, b) {
  return Ue(b) ? Mc(this, C.a(b, 0), C.a(b, 1)) : vc(Dc, this, b);
};
function Go(a) {
  var b = ck.b(a);
  return v(b) ? O.k(a, Hj, new T(null, 1, 5, U, [Jj], null), K([rk, gg(S.b(function(a) {
    return function(b) {
      var e = N(b, 0);
      N(b, 1);
      N(b, 2);
      return ae.a(a, wn(e)) ? En(vn(e)) : null;
    };
  }(b, b)), Ag(eg(kc)))], 0)) : a;
}
function Ho(a) {
  a = Go(a);
  a = new Fo(Xj.b(a), Hj.b(a), ck.b(a), rk.b(a), vk.b(a), tj.b(a), Wj.b(a), null, Je.k(a, Xj, K([Hj, ck, rk, vk, tj, Wj], 0)), null);
  return Qn(a);
}
function Io(a) {
  if (1 >= M(a)) {
    return a;
  }
  var b = function(a) {
    return function(b) {
      return Fg.d(De, gg(Zi, ug(a)), new T(null, 2, 5, U, [b, zg(Fn(vn(Be(b))))], null));
    };
  }(df(hf, S.a(M, a)));
  return S.a(b, a);
}
function Jo(a) {
  return Nf(S, ch, a);
}
function Ko(a) {
  return function(a) {
    return function(c, d) {
      var e = Jo(Io(d)), e = vc(function(a, b) {
        return function(a, c) {
          var d = N(c, 0), e = lf(c), f = vn(Oe(a)), e = bh(e), d = b(new T(null, 3, 5, U, [d, f, e], null));
          return Fg.a(a, d);
        };
      }(e, a), new T(null, 1, 5, U, [new Dn(c, null, null, null)], null), e);
      return ae.a(1, M(e)) ? e : eh(e, 1, M(e));
    };
  }(function(b) {
    return new bg(ag(a, Zf(new T(null, 1, 5, U, [b], null))), null, null, null);
  });
}
function Lo(a, b) {
  var c = Ge(a, b);
  return fm(c, ml.m());
}
function Mo(a, b, c, d) {
  b = Ko(b);
  var e = ml.b(1);
  Sk(function(b, e) {
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
                      c[5] = f, il(c), d = Z;
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
              return el(b, 4, c);
            }
            if (3 === f) {
              return f = b[2], gl(b, f);
            }
            if (4 === f) {
              var h = b[8], f = b[2];
              b[8] = f;
              b[1] = v(null == f) ? 5 : 6;
              return Z;
            }
            if (5 === f) {
              return f = Bk(d), b[2] = f, b[1] = 7, Z;
            }
            if (6 === f) {
              var f = b[7], h = b[8], k = b[9], f = e.a ? e.a(f, h) : e.call(null, f, h);
              b[9] = f;
              return fl(b, 8, d, f);
            }
            return 7 === f ? (f = b[2], b[2] = f, b[1] = 3, Z) : 8 === f ? (k = b[9], h = b[2], f = Be(k), f = vn(f), b[7] = f, b[10] = h, b[2] = null, b[1] = 2, Z) : null;
          };
        }(b, e), b, e);
      }(), l = function() {
        var a = k.m ? k.m() : k.call(null);
        a[6] = b;
        return a;
      }();
      return dl(l);
    };
  }(e, b));
}
function No(a, b, c, d) {
  var e = Ze(b) ? Mf(pg, b) : b;
  b = Ge(e, Xj);
  var f = Ge(e, Hj), e = Ge(e, rk);
  a = Fg.d(new T(null, 1, 5, U, [Lo(a, Jj)], null), S.b(ig(Lo, a)), f);
  a = gm(a);
  f = ml.m();
  Mo(b.a ? b.a(c, d) : b.call(null, c, d), e, a, f);
  return em(f);
}
function Oo(a, b, c, d) {
  return vc(function(a, b) {
    return O.d(a, b, No(a, b, c, d));
  }, new ec(null, 1, [Jj, b], null), a);
}
function Po(a) {
  return Fg.d(Tf, S.b(tj), a);
}
var Qo = function Qo(b) {
  if (b ? b.rd : b) {
    return b.rd();
  }
  var c;
  c = Qo[n(null == b ? null : b)];
  if (!c && (c = Qo._, !c)) {
    throw y("LiveChannelGraphProtocol.connect-to-world", b);
  }
  return c.call(null, b);
}, Ro = function Ro(b) {
  if (b ? b.sd : b) {
    return b.sd();
  }
  var c;
  c = Ro[n(null == b ? null : b)];
  if (!c && (c = Ro._, !c)) {
    throw y("LiveChannelGraphProtocol.init", b);
  }
  return c.call(null, b);
};
function So(a, b, c, d, e, f, h, k) {
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
g = So.prototype;
g.w = function(a, b) {
  return Kc.d(this, b, null);
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
      return He(this.j, b, c);
  }
};
g.Lb = function() {
  return Bk(this.wa);
};
g.A = function(a, b, c) {
  return Ki(b, function() {
    return function(a) {
      return Ki(b, W, "", " ", "", c, a);
    };
  }(this), "#jamesmacaulay.zelkova.impl.signal.LiveChannelGraph{", ", ", "}", c, If.a(new T(null, 5, 5, U, [new T(null, 2, 5, U, [vj, this.definition], null), new T(null, 2, 5, U, [uj, this.wa], null), new T(null, 2, 5, U, [Oj, this.cb], null), new T(null, 2, 5, U, [Vj, this.Ma], null), new T(null, 2, 5, U, [bk, this.Da], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 5 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = mf(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? qh(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.rd = function() {
  for (var a = this, b = this, c = Po(Kn(a.definition)), c = D(zh(c)), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.O(null, f);
      $l(function() {
        var c = a.Da;
        return h.a ? h.a(b, c) : h.call(null, b, c);
      }(), a.wa);
      f += 1;
    } else {
      if (c = D(c)) {
        d = c;
        if (Ve(d)) {
          c = zd(d), f = Ad(d), d = c, e = M(c), c = f;
        } else {
          var k = F(d);
          $l(function() {
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
  return Xj.b(this.definition).call(null, this, this.Da);
};
g.Mb = function(a, b, c) {
  return Ak(this.wa, b, c);
};
g.Aa = function(a, b) {
  return af(new vi(null, new ec(null, 5, [uj, null, vj, null, Oj, null, Vj, null, bk, null], null), null), b) ? Je.a(xe(Fg.a(Tf, this), this.p), b) : new So(this.definition, this.wa, this.cb, this.Ma, this.Da, this.p, Rf(Je.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return v(R.a ? R.a(vj, b) : R.call(null, vj, b)) ? new So(c, this.wa, this.cb, this.Ma, this.Da, this.p, this.j, null) : v(R.a ? R.a(uj, b) : R.call(null, uj, b)) ? new So(this.definition, c, this.cb, this.Ma, this.Da, this.p, this.j, null) : v(R.a ? R.a(Oj, b) : R.call(null, Oj, b)) ? new So(this.definition, this.wa, c, this.Ma, this.Da, this.p, this.j, null) : v(R.a ? R.a(Vj, b) : R.call(null, Vj, b)) ? new So(this.definition, this.wa, this.cb, c, this.Da, this.p, this.j, null) : v(R.a ? R.a(bk, 
  b) : R.call(null, bk, b)) ? new So(this.definition, this.wa, this.cb, this.Ma, c, this.p, this.j, null) : new So(this.definition, this.wa, this.cb, this.Ma, this.Da, this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(If.a(new T(null, 5, 5, U, [new T(null, 2, 5, U, [vj, this.definition], null), new T(null, 2, 5, U, [uj, this.wa], null), new T(null, 2, 5, U, [Oj, this.cb], null), new T(null, 2, 5, U, [Vj, this.Ma], null), new T(null, 2, 5, U, [bk, this.Da], null)], null), this.j));
};
g.D = function(a, b) {
  return new So(this.definition, this.wa, this.cb, this.Ma, this.Da, b, this.j, this.i);
};
g.ed = !0;
g.Ic = function(a, b, c) {
  return cm(this.Ma, b, c);
};
g.ec = function(a, b) {
  return dm(this.Ma, b);
};
g.G = function(a, b) {
  return Ue(b) ? Mc(this, C.a(b, 0), C.a(b, 1)) : vc(Dc, this, b);
};
var To = function To(b, c) {
  if (b ? b.Rc : b) {
    return b.Rc(b, c);
  }
  var d;
  d = To[n(null == b ? null : b)];
  if (!d && (d = To._, !d)) {
    throw y("SignalLike.spawn*", b);
  }
  return d.call(null, b, c);
}, Uo = function Uo(b, c, d) {
  if (b ? b.Qc : b) {
    return b.Qc(b, c, d);
  }
  var e;
  e = Uo[n(null == b ? null : b)];
  if (!e && (e = Uo._, !e)) {
    throw y("SignalLike.pipe-to-atom*", b);
  }
  return e.call(null, b, c, d);
}, Vo = S.b(gg(ig(S, function(a) {
  return null == xn(a) ? yn(a, (new Date).valueOf()) : a;
}), function(a) {
  return Se(a) ? a : null == a ? De : new T(null, 1, 5, U, [a], null);
}));
So.prototype.Rc = function(a, b) {
  return To(sk.b(this), b);
};
So.prototype.Qc = function(a, b, c) {
  kn(D(c) ? jg(b, c) : ig(rg, b), fm(this, ml.m()));
  return b;
};
Fo.prototype.Rc = function(a, b) {
  var c = ml.a(1, Vo), d = em(c), d = Oo(Kn(this), d, this, b), e = em(fm(Ge(d, this), ml.a(1, Hn)));
  return Qo(new So(this, c, d, e, b, null, null, null));
};
Fo.prototype.Qc = function(a, b, c) {
  return Uo(To(this, null), b, c);
};
if ("undefined" === typeof qj) {
  var qj = function() {
    var a = og ? og(Tf) : ng.call(null, Tf), b = og ? og(Tf) : ng.call(null, Tf), c = og ? og(Tf) : ng.call(null, Tf), d = og ? og(Tf) : ng.call(null, Tf), e = He(Tf, pk, ej());
    return new oj(Yd("jamesmacaulay.zelkova.impl.signal", "value-source-\x3eevents-fn"), function() {
      return function(a) {
        if (a ? v(v(null) ? null : a.ed) || (a.Ob ? 0 : x(bm, a)) : x(bm, a)) {
          a = ik;
        } else {
          if (a ? v(v(null) ? null : a.Vd) || (a.Ob ? 0 : x(yk, a)) : x(yk, a)) {
            a = hk;
          } else {
            var b = Ke(a);
            a = (b ? b : a ? a.g & 1 || a.pe || (a.g ? 0 : x(yc, a)) : x(yc, a)) ? Aj : null;
          }
        }
        return a;
      };
    }(a, b, c, d, e), Fj, e, a, b, c, d);
  }()
}
pj(Aj, function(a, b) {
  return function(c, d) {
    var e = a.a ? a.a(c, d) : a.call(null, c, d);
    return $l(e, ml.a(1, S.b(ig(Bn, b))));
  };
});
pj(ik, function(a, b) {
  function c() {
    return fm(a, ml.m());
  }
  return qj.a ? qj.a(c, b) : qj.call(null, c, b);
});
pj(hk, function(a, b) {
  var c = em(a);
  return qj.a ? qj.a(c, b) : qj.call(null, c, b);
});
function Wo(a) {
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
          return ke(a) ? a : new je(a);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    d.m = c;
    d.b = b;
    d.a = function(a) {
      return ke(a) ? a : new je(a);
    };
    return d;
  }();
}
function Xo(a) {
  return Ho(new ec(null, 3, [Xj, fg(a), Hj, new T(null, 1, 5, U, [Jj], null), rk, Wo], null));
}
function Yo(a, b, c) {
  return Ho(new ec(null, 3, [Xj, fg(b), Hj, new T(null, 1, 5, U, [c], null), rk, gg(Ag(function(a) {
    N(a, 0);
    N(a, 1);
    a = N(a, 2);
    a = N(a, 0);
    return zn(a);
  }), S.b(function(b) {
    N(b, 0);
    var c = N(b, 1);
    b = N(b, 2);
    b = N(b, 0);
    b = vn(b);
    c = a.a ? a.a(b, c) : a.call(null, b, c);
    return En(c);
  }))], null));
}
function Zo(a) {
  a = To(a, null);
  var b;
  b = Ro(a);
  var c = new ec(null, 1, [Cj, a], null);
  b = ng.d ? ng.d(b, hc, c) : ng.call(null, b, hc, c);
  return Uo(a, b, null);
}
;var $o = Ie("readonly ismap class minlength for colspan usemap rowspan contenteditable maxlength novalidate tabindex".split(" "), "readOnly isMap className minLength htmlFor colSpan useMap rowSpan contentEditable maxLength noValidate tabIndex".split(" "));
function ap(a) {
  return vc(function(a, c) {
    var d = N(c, 0), e = N(c, 1), d = wf(d);
    ae.a(d, "style") ? a.attributes = {style:e} : a[$o.a ? $o.a(d, d) : $o.call(null, d, d)] = e;
    return a;
  }, {}, a);
}
;var bp = function bp(b) {
  if (b ? b.Tc : b) {
    return b.Tc(b);
  }
  var c;
  c = bp[n(null == b ? null : b)];
  if (!c && (c = bp._, !c)) {
    throw y("IDOMBuilder.-node", b);
  }
  return c.call(null, b);
};
bp._ = function(a) {
  a = "" + B(a);
  return document.createTextNode(String(a));
};
bp.string = function(a) {
  return document.createTextNode(String(a));
};
Node.prototype.Tc = function() {
  return this;
};
var yg = gg(function(a) {
  return a instanceof P;
}, F);
function cp(a) {
  return bh(Cg(kc, Eg(a)));
}
function dp(a) {
  if ("string" === typeof a) {
    var b = /\s+/;
    a = ae.a("" + B(b), "/(?:)/") ? Ce.a(bh(J("", S.a(B, D(a)))), "") : bh(("" + B(a)).split(b));
    if (ae.a(0, 0)) {
      a: {
        for (;;) {
          if (ae.a("", Oe(a))) {
            a = null == a ? null : Vc(a);
          } else {
            break a;
          }
        }
      }
    }
    a = Bi(a);
  } else {
    a = Re(a) ? a : Se(a) ? Bi(a) : xi;
  }
  return a;
}
function ep(a, b) {
  var c;
  c = Zj.b(a);
  c = v(c) ? c : Zj.b(b);
  if (v(c)) {
    c = dp(Zj.b(a));
    var d = dp(Zj.b(b));
    a: {
      for (d = mn.a(c, d), c = new Zb, d = D(d);;) {
        if (d) {
          c.append("" + B(F(d))), d = H(d), null != d && c.append(" ");
        } else {
          c = c.toString();
          break a;
        }
      }
    }
    return O.d(Fg.a(a, b), Zj, c);
  }
  return Fg.a(a, b);
}
function fp(a, b, c, d, e, f) {
  this.tag = a;
  this.za = b;
  this.children = c;
  this.p = d;
  this.j = e;
  this.i = f;
  this.g = 2229667595;
  this.r = 8192;
}
g = fp.prototype;
g.w = function(a, b) {
  return Kc.d(this, b, null);
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
      return He(this.j, b, c);
  }
};
g.A = function(a, b, c) {
  return Ki(b, function() {
    return function(a) {
      return Ki(b, W, "", " ", "", c, a);
    };
  }(this), "#stch.html.Element{", ", ", "}", c, If.a(new T(null, 3, 5, U, [new T(null, 2, 5, U, [mk, this.tag], null), new T(null, 2, 5, U, [jk, this.za], null), new T(null, 2, 5, U, [xj, this.children], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 3 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = mf(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? qh(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.Tc = function() {
  if (D(this.children)) {
    return Of(Wb, this.tag, cj(this.za), S.a(bp, this.children));
  }
  var a = this.tag, b = cj(this.za);
  return Wb(a, b);
};
g.Aa = function(a, b) {
  return af(new vi(null, new ec(null, 3, [xj, null, jk, null, mk, null], null), null), b) ? Je.a(xe(Fg.a(Tf, this), this.p), b) : new fp(this.tag, this.za, this.children, this.p, Rf(Je.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return v(R.a ? R.a(mk, b) : R.call(null, mk, b)) ? new fp(c, this.za, this.children, this.p, this.j, null) : v(R.a ? R.a(jk, b) : R.call(null, jk, b)) ? new fp(this.tag, c, this.children, this.p, this.j, null) : v(R.a ? R.a(xj, b) : R.call(null, xj, b)) ? new fp(this.tag, this.za, c, this.p, this.j, null) : new fp(this.tag, this.za, this.children, this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(If.a(new T(null, 3, 5, U, [new T(null, 2, 5, U, [mk, this.tag], null), new T(null, 2, 5, U, [jk, this.za], null), new T(null, 2, 5, U, [xj, this.children], null)], null), this.j));
};
g.D = function(a, b) {
  return new fp(this.tag, this.za, this.children, b, this.j, this.i);
};
g.G = function(a, b) {
  return Ue(b) ? Mc(this, C.a(b, 0), C.a(b, 1)) : vc(Dc, this, b);
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
    var e = gp.b ? gp.b(b) : gp.call(null, b), f = N(e, 0), e = N(e, 1);
    return new fp(this.tag, ep(this.za, f), Fg.a(this.children, e), null, null, null);
  }
  a.v = 1;
  a.t = function(a) {
    F(a);
    a = Zd(a);
    return b(0, a);
  };
  a.k = b;
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(qc(b)));
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
    var b = gp.b ? gp.b(a) : gp.call(null, a);
    a = N(b, 0);
    b = N(b, 1);
    return new fp(this.tag, ep(this.za, a), Fg.a(this.children, b), null, null, null);
  }
  a.v = 0;
  a.t = function(a) {
    a = D(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function gp(a) {
  var b = N(a, 0), c = lf(a);
  return b instanceof fp ? new T(null, 2, 5, U, [Tf, cp(a)], null) : b instanceof P ? (a = Hg(2, 2, new T(null, 1, 5, U, [null], null), a), b = new T(null, 2, 5, U, [Fi(yg, a), xg(a)], null), a = N(b, 0), b = N(b, 1), new T(null, 2, 5, U, [Fg.a(Tf, S.a(bh, a)), cp(b)], null)) : Te(b) ? new T(null, 2, 5, U, [b, cp(c)], null) : new T(null, 2, 5, U, [Tf, cp(a)], null);
}
function hp(a) {
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
      return Mf(new fp(a, Tf, De, null, null, null), b);
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
var ip = hp("div"), jp = hp("input"), kp = hp("table"), lp = hp("td"), mp = hp("tr");
var np = VDOM.VNode, op = VDOM.VText, pp = VDOM.create, qp = VDOM.patch, rp = VDOM.diff, sp = function sp(b) {
  if (b ? b.od : b) {
    return b.od();
  }
  var c;
  c = sp[n(null == b ? null : b)];
  if (!c && (c = sp._, !c)) {
    throw y("VDOMBuilder.-vtree", b);
  }
  return c.call(null, b);
};
sp.string = function(a) {
  return new op(a);
};
fp.prototype.od = function() {
  return new np(wf(this.tag), ap(this.za), cj(S.a(sp, this.children)));
};
sp._ = function(a) {
  return new op(a.toString());
};
function tp(a) {
  return Se(a) ? new np("div", {}, cj(S.a(sp, a))) : sp(a);
}
function up(a, b, c, d, e) {
  this.ua = a;
  this.xb = b;
  this.p = c;
  this.j = d;
  this.i = e;
  this.g = 2229667594;
  this.r = 8192;
}
g = up.prototype;
g.w = function(a, b) {
  return Kc.d(this, b, null);
};
g.u = function(a, b, c) {
  switch(b instanceof P ? b.la : null) {
    case "tree":
      return this.ua;
    case "root-node":
      return this.xb;
    default:
      return He(this.j, b, c);
  }
};
g.A = function(a, b, c) {
  return Ki(b, function() {
    return function(a) {
      return Ki(b, W, "", " ", "", c, a);
    };
  }(this), "#dominator.core.VDOM{", ", ", "}", c, If.a(new T(null, 2, 5, U, [new T(null, 2, 5, U, [Bj, this.ua], null), new T(null, 2, 5, U, [tk, this.xb], null)], null), this.j));
};
g.C = function() {
  return this.p;
};
g.I = function() {
  return 2 + M(this.j);
};
g.B = function() {
  var a = this.i;
  return null != a ? a : this.i = a = mf(this);
};
g.q = function(a, b) {
  var c;
  c = v(b) ? (c = this.constructor === b.constructor) ? qh(this, b) : c : b;
  return v(c) ? !0 : !1;
};
g.Aa = function(a, b) {
  return af(new vi(null, new ec(null, 2, [Bj, null, tk, null], null), null), b) ? Je.a(xe(Fg.a(Tf, this), this.p), b) : new up(this.ua, this.xb, this.p, Rf(Je.a(this.j, b)), null);
};
g.pa = function(a, b, c) {
  return v(R.a ? R.a(Bj, b) : R.call(null, Bj, b)) ? new up(c, this.xb, this.p, this.j, null) : v(R.a ? R.a(tk, b) : R.call(null, tk, b)) ? new up(this.ua, c, this.p, this.j, null) : new up(this.ua, this.xb, this.p, O.d(this.j, b, c), null);
};
g.H = function() {
  return D(If.a(new T(null, 2, 5, U, [new T(null, 2, 5, U, [Bj, this.ua], null), new T(null, 2, 5, U, [tk, this.xb], null)], null), this.j));
};
g.D = function(a, b) {
  return new up(this.ua, this.xb, b, this.j, this.i);
};
g.G = function(a, b) {
  return Ue(b) ? Mc(this, C.a(b, 0), C.a(b, 1)) : vc(Dc, this, b);
};
function vp(a) {
  return function(b) {
    return function(c) {
      var d = tp(c), e = I.b ? I.b(b) : I.call(null, b);
      if (null == e) {
        return c = pp.b ? pp.b(d) : pp.call(null, d), a.appendChild(c), c = new up(d, c, null, null, null), rg.a ? rg.a(b, c) : rg.call(null, b, c);
      }
      var f = function() {
        var a = e.ua;
        return rp.a ? rp.a(a, d) : rp.call(null, a, d);
      }();
      c = function() {
        var a = e.xb;
        return qp.a ? qp.a(a, f) : qp.call(null, a, f);
      }();
      c = new up(d, c, null, null, null);
      return rg.a ? rg.a(b, c) : rg.call(null, b, c);
    };
  }(og ? og(null) : ng.call(null, null));
}
function wp(a) {
  return window.requestAnimationFrame(a);
}
var xp = function(a) {
  return function(b, c) {
    var d = I.b ? I.b(a) : I.call(null, a);
    return ae.a(c, d) ? null : (b.b ? b.b(c) : b.call(null, c), rg.a ? rg.a(a, c) : rg.call(null, a, c));
  };
}(og ? og(uk) : ng.call(null, uk));
function yp(a) {
  var b = zp;
  return function() {
    return Yl(b, a);
  };
}
;var Ap = Error();
var ac = function() {
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
    return console.log.apply(console, tc ? sc(a) : rc.call(null, a));
  }
  a.v = 0;
  a.t = function(a) {
    a = D(a);
    return b(a);
  };
  a.k = b;
  return a;
}(), Bp = new T(null, 3, 5, U, ["Billy", "Bobby", "Joey"], null), zp, Cp = vf.b(function() {
  null == Wi && (Wi = og ? og(0) : ng.call(null, 0));
  return Xd([B("G__"), B(kg.a(Wi, ie))].join(""));
}()), Dp = ml.m();
zp = Ho(new ec(null, 4, [Xj, fg(Uj), ck, Cp, tj, new Dh([Cp, qj.a ? qj.a(Dp, Cp) : qj.call(null, Dp, Cp)]), Wj, Dp], null));
var Ep = new ec(null, 3, ["Billy", 0, "Bobby", 0, "Joey", 0], null), Fp, Gp = localStorage.getItem(wf("clicks"));
Fp = v(Gp) ? Dm(new jm(Gp, [], -1), !1, null) : null;
var Hp = function(a, b, c) {
  return Yo(function(b, c) {
    return a.a ? a.a(c, b) : a.call(null, c, b);
  }, b, c);
}(function(a, b) {
  try {
    if (R(b, Uj)) {
      return a;
    }
    if (R(b, Ej)) {
      return Ep;
    }
    throw Ap;
  } catch (c) {
    if (c instanceof Error) {
      if (c === Ap) {
        try {
          if (Ue(b) && 2 === M(b)) {
            try {
              var d = Fe(b, 0);
              if (R(d, Ij)) {
                var e = Fe(b, 1);
                return Ig.d(a, new T(null, 1, 5, U, [e], null), ie);
              }
              throw Ap;
            } catch (f) {
              if (f instanceof Error) {
                d = f;
                if (d === Ap) {
                  throw Ap;
                }
                throw d;
              }
              throw f;
            }
          } else {
            throw Ap;
          }
        } catch (h) {
          if (h instanceof Error) {
            d = h;
            if (d === Ap) {
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
}, v(Fp) ? Fp : Ep, zp), Ip = function() {
  var a = 1 < arguments.length ? new E(Array.prototype.slice.call(arguments, 1), 0) : null;
  return fm(To(arguments[0], null), Mf(ml, a));
}(Hp);
(function(a, b) {
  var c = Zo(a), d = vp(b);
  return wp(function(a, b) {
    return function k() {
      xp(b, I.b ? I.b(a) : I.call(null, a));
      return wp(k);
    };
  }(c, d));
})(function(a, b) {
  if (Qe(b)) {
    return Xo(a.m ? a.m() : a.call(null));
  }
  var c = bh(b), d = hg(S.b(function() {
    return function(a) {
      N(a, 0);
      N(a, 1);
      return N(a, 2);
    };
  }(c)), Ag(function() {
    return function(a) {
      return dg(zn, a);
    };
  }(c)), S.b(function() {
    return function(b) {
      return En(Mf(a, S.a(vn, b)));
    };
  }(c)));
  return Ho(new ec(null, 3, [Xj, function(b, c) {
    return function(d, k) {
      return Mf(a, S.a(function() {
        return function(a) {
          return Xj.b(a).call(null, d, k);
        };
      }(b, c), b));
    };
  }(c, d), Hj, c, rk, d], null));
}(function(a) {
  var b = function() {
    var b = function() {
      var a = function() {
        return function k(a) {
          return new xf(null, function() {
            for (;;) {
              var b = D(a);
              if (b) {
                if (Ve(b)) {
                  var c = zd(b), d = M(c), e = new zf(Array(d), 0);
                  return function() {
                    for (var a = 0;;) {
                      if (a < d) {
                        var b = C.a(c, a), f = e, k = void 0, k = b, b = yp(new T(null, 2, 5, U, [Ij, b], null)), k = jp.K ? jp.K(Pj, "button", Kj, k, Nj, b) : jp.call(null, Pj, "button", Kj, k, Nj, b), b = lp.b ? lp.b(k) : lp.call(null, k);
                        f.add(b);
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Cf(e.va(), k(Ad(b))) : Cf(e.va(), null);
                }
                var f = F(b);
                return J(function() {
                  var a;
                  a = f;
                  var b = yp(new T(null, 2, 5, U, [Ij, f], null));
                  a = jp.K ? jp.K(Pj, "button", Kj, a, Nj, b) : jp.call(null, Pj, "button", Kj, a, Nj, b);
                  return lp.b ? lp.b(a) : lp.call(null, a);
                }(), k(Zd(b)));
              }
              return null;
            }
          }, null, null);
        }(Bp);
      }();
      return mp.b ? mp.b(a) : mp.call(null, a);
    }(), c = function() {
      var c = function() {
        return function(b) {
          return function l(c) {
            return new xf(null, function() {
              return function() {
                for (;;) {
                  var b = D(c);
                  if (b) {
                    if (Ve(b)) {
                      var d = zd(b), e = M(d), f = new zf(Array(e), 0);
                      return function() {
                        for (var b = 0;;) {
                          if (b < e) {
                            var c = C.a(d, b), h = f, l = void 0, c = Ge(a, c), l = jp.K ? jp.K(Pj, "text", Lj, !0, Kj, c) : jp.call(null, Pj, "text", Lj, !0, Kj, c), c = lp.b ? lp.b(l) : lp.call(null, l);
                            h.add(c);
                            b += 1;
                          } else {
                            return!0;
                          }
                        }
                      }() ? Cf(f.va(), l(Ad(b))) : Cf(f.va(), null);
                    }
                    var h = F(b);
                    return J(function() {
                      var b;
                      b = Ge(a, h);
                      b = jp.K ? jp.K(Pj, "text", Lj, !0, Kj, b) : jp.call(null, Pj, "text", Lj, !0, Kj, b);
                      return lp.b ? lp.b(b) : lp.call(null, b);
                    }(), l(Zd(b)));
                  }
                  return null;
                }
              };
            }(b), null, null);
          };
        }(b)(Bp);
      }();
      return mp.b ? mp.b(c) : mp.call(null, c);
    }();
    return kp.a ? kp.a(b, c) : kp.call(null, b, c);
  }(), c = function() {
    var a;
    a = yp(Ej);
    a = jp.K ? jp.K(Pj, "button", Kj, "Reset", Nj, a) : jp.call(null, Pj, "button", Kj, "Reset", Nj, a);
    return ip.d ? ip.d(Yj, "button-row", a) : ip.call(null, Yj, "button-row", a);
  }();
  return ip.a ? ip.a(b, c) : ip.call(null, b, c);
}, K([Hp], 0)), document.body);
var Jp = ml.b(1);
Sk(function(a) {
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
                    c[5] = h, il(c), e = Z;
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
          return 1 === b ? (a[2] = null, a[1] = 2, Z) : 2 === b ? (a[1] = 4, Z) : 3 === b ? (b = a[2], gl(a, b)) : 4 === b ? el(a, 7, Ip) : 5 === b ? (a[2] = null, a[1] = 6, Z) : 6 === b ? (b = a[2], a[2] = b, a[1] = 3, Z) : 7 === b ? (b = a[2], b = localStorage.setItem(wf("clicks"), b.toString()), a[7] = b, a[2] = null, a[1] = 2, Z) : null;
        };
      }(a), a);
    }(), c = function() {
      var c = b.m ? b.m() : b.call(null);
      c[6] = a;
      return c;
    }();
    return dl(c);
  };
}(Jp));

})();

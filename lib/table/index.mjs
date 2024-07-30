import { defineComponent as St, ref as z, watch as ne, onMounted as Ct, computed as V, resolveComponent as C, resolveDirective as Ot, openBlock as y, createElementBlock as T, Fragment as M, withDirectives as It, createBlock as K, mergeProps as xt, unref as p, withCtx as oe, renderList as Pt, createVNode as k, createElementVNode as Et, renderSlot as R, withModifiers as ie, toDisplayString as Lt, resolveDynamicComponent as Dt, createCommentVNode as se, normalizeStyle as Mt } from "vue";
const kt = (e) => e.replace(/([A-Z])/g, "$1").toLowerCase();
var H = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ft() {
  this.__data__ = [], this.size = 0;
}
var Gt = Ft;
function Ut(e, t) {
  return e === t || e !== e && t !== t;
}
var Xe = Ut, Nt = Xe;
function zt(e, t) {
  for (var r = e.length; r--; )
    if (Nt(e[r][0], t))
      return r;
  return -1;
}
var X = zt, Vt = X, Kt = Array.prototype, Rt = Kt.splice;
function Ht(e) {
  var t = this.__data__, r = Vt(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : Rt.call(t, r, 1), --this.size, !0;
}
var qt = Ht, Wt = X;
function Jt(e) {
  var t = this.__data__, r = Wt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var Yt = Jt, Xt = X;
function Zt(e) {
  return Xt(this.__data__, e) > -1;
}
var Qt = Zt, er = X;
function tr(e, t) {
  var r = this.__data__, a = er(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
var rr = tr, ar = Gt, nr = qt, or = Yt, ir = Qt, sr = rr;
function O(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
O.prototype.clear = ar;
O.prototype.delete = nr;
O.prototype.get = or;
O.prototype.has = ir;
O.prototype.set = sr;
var Z = O, cr = Z;
function lr() {
  this.__data__ = new cr(), this.size = 0;
}
var ur = lr;
function fr(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var vr = fr;
function gr(e) {
  return this.__data__.get(e);
}
var pr = gr;
function dr(e) {
  return this.__data__.has(e);
}
var yr = dr, br = typeof H == "object" && H && H.Object === Object && H, Ze = br, $r = Ze, hr = typeof self == "object" && self && self.Object === Object && self, _r = $r || hr || Function("return this")(), _ = _r, mr = _, Tr = mr.Symbol, pe = Tr, Se = pe, Qe = Object.prototype, jr = Qe.hasOwnProperty, Ar = Qe.toString, B = Se ? Se.toStringTag : void 0;
function wr(e) {
  var t = jr.call(e, B), r = e[B];
  try {
    e[B] = void 0;
    var a = !0;
  } catch {
  }
  var i = Ar.call(e);
  return a && (t ? e[B] = r : delete e[B]), i;
}
var Sr = wr, Cr = Object.prototype, Or = Cr.toString;
function Ir(e) {
  return Or.call(e);
}
var xr = Ir, Ce = pe, Pr = Sr, Er = xr, Lr = "[object Null]", Dr = "[object Undefined]", Oe = Ce ? Ce.toStringTag : void 0;
function Mr(e) {
  return e == null ? e === void 0 ? Dr : Lr : Oe && Oe in Object(e) ? Pr(e) : Er(e);
}
var Q = Mr;
function kr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var F = kr, Br = Q, Fr = F, Gr = "[object AsyncFunction]", Ur = "[object Function]", Nr = "[object GeneratorFunction]", zr = "[object Proxy]";
function Vr(e) {
  if (!Fr(e))
    return !1;
  var t = Br(e);
  return t == Ur || t == Nr || t == Gr || t == zr;
}
var et = Vr, Kr = _, Rr = Kr["__core-js_shared__"], Hr = Rr, ce = Hr, Ie = function() {
  var e = /[^.]+$/.exec(ce && ce.keys && ce.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function qr(e) {
  return !!Ie && Ie in e;
}
var Wr = qr, Jr = Function.prototype, Yr = Jr.toString;
function Xr(e) {
  if (e != null) {
    try {
      return Yr.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var tt = Xr, Zr = et, Qr = Wr, ea = F, ta = tt, ra = /[\\^$.*+?()[\]{}|]/g, aa = /^\[object .+?Constructor\]$/, na = Function.prototype, oa = Object.prototype, ia = na.toString, sa = oa.hasOwnProperty, ca = RegExp(
  "^" + ia.call(sa).replace(ra, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function la(e) {
  if (!ea(e) || Qr(e))
    return !1;
  var t = Zr(e) ? ca : aa;
  return t.test(ta(e));
}
var ua = la;
function fa(e, t) {
  return e == null ? void 0 : e[t];
}
var va = fa, ga = ua, pa = va;
function da(e, t) {
  var r = pa(e, t);
  return ga(r) ? r : void 0;
}
var A = da, ya = A, ba = _, $a = ya(ba, "Map"), de = $a, ha = A, _a = ha(Object, "create"), ee = _a, xe = ee;
function ma() {
  this.__data__ = xe ? xe(null) : {}, this.size = 0;
}
var Ta = ma;
function ja(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Aa = ja, wa = ee, Sa = "__lodash_hash_undefined__", Ca = Object.prototype, Oa = Ca.hasOwnProperty;
function Ia(e) {
  var t = this.__data__;
  if (wa) {
    var r = t[e];
    return r === Sa ? void 0 : r;
  }
  return Oa.call(t, e) ? t[e] : void 0;
}
var xa = Ia, Pa = ee, Ea = Object.prototype, La = Ea.hasOwnProperty;
function Da(e) {
  var t = this.__data__;
  return Pa ? t[e] !== void 0 : La.call(t, e);
}
var Ma = Da, ka = ee, Ba = "__lodash_hash_undefined__";
function Fa(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ka && t === void 0 ? Ba : t, this;
}
var Ga = Fa, Ua = Ta, Na = Aa, za = xa, Va = Ma, Ka = Ga;
function I(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
I.prototype.clear = Ua;
I.prototype.delete = Na;
I.prototype.get = za;
I.prototype.has = Va;
I.prototype.set = Ka;
var Ra = I, Pe = Ra, Ha = Z, qa = de;
function Wa() {
  this.size = 0, this.__data__ = {
    hash: new Pe(),
    map: new (qa || Ha)(),
    string: new Pe()
  };
}
var Ja = Wa;
function Ya(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Xa = Ya, Za = Xa;
function Qa(e, t) {
  var r = e.__data__;
  return Za(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var te = Qa, en = te;
function tn(e) {
  var t = en(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var rn = tn, an = te;
function nn(e) {
  return an(this, e).get(e);
}
var on = nn, sn = te;
function cn(e) {
  return sn(this, e).has(e);
}
var ln = cn, un = te;
function fn(e, t) {
  var r = un(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
var vn = fn, gn = Ja, pn = rn, dn = on, yn = ln, bn = vn;
function x(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
x.prototype.clear = gn;
x.prototype.delete = pn;
x.prototype.get = dn;
x.prototype.has = yn;
x.prototype.set = bn;
var $n = x, hn = Z, _n = de, mn = $n, Tn = 200;
function jn(e, t) {
  var r = this.__data__;
  if (r instanceof hn) {
    var a = r.__data__;
    if (!_n || a.length < Tn - 1)
      return a.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new mn(a);
  }
  return r.set(e, t), this.size = r.size, this;
}
var An = jn, wn = Z, Sn = ur, Cn = vr, On = pr, In = yr, xn = An;
function P(e) {
  var t = this.__data__ = new wn(e);
  this.size = t.size;
}
P.prototype.clear = Sn;
P.prototype.delete = Cn;
P.prototype.get = On;
P.prototype.has = In;
P.prototype.set = xn;
var Pn = P;
function En(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Ln = En, Dn = A, Mn = function() {
  try {
    var e = Dn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), kn = Mn, Ee = kn;
function Bn(e, t, r) {
  t == "__proto__" && Ee ? Ee(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var rt = Bn, Fn = rt, Gn = Xe, Un = Object.prototype, Nn = Un.hasOwnProperty;
function zn(e, t, r) {
  var a = e[t];
  (!(Nn.call(e, t) && Gn(a, r)) || r === void 0 && !(t in e)) && Fn(e, t, r);
}
var at = zn, Vn = at, Kn = rt;
function Rn(e, t, r, a) {
  var i = !r;
  r || (r = {});
  for (var c = -1, n = t.length; ++c < n; ) {
    var s = t[c], v = a ? a(r[s], e[s], s, r, e) : void 0;
    v === void 0 && (v = e[s]), i ? Kn(r, s, v) : Vn(r, s, v);
  }
  return r;
}
var re = Rn;
function Hn(e, t) {
  for (var r = -1, a = Array(e); ++r < e; )
    a[r] = t(r);
  return a;
}
var qn = Hn;
function Wn(e) {
  return e != null && typeof e == "object";
}
var G = Wn, Jn = Q, Yn = G, Xn = "[object Arguments]";
function Zn(e) {
  return Yn(e) && Jn(e) == Xn;
}
var Qn = Zn, Le = Qn, eo = G, nt = Object.prototype, to = nt.hasOwnProperty, ro = nt.propertyIsEnumerable, ao = Le(function() {
  return arguments;
}()) ? Le : function(e) {
  return eo(e) && to.call(e, "callee") && !ro.call(e, "callee");
}, no = ao, oo = Array.isArray, ye = oo, W = { exports: {} };
function io() {
  return !1;
}
var so = io;
W.exports;
(function(e, t) {
  var r = _, a = so, i = t && !t.nodeType && t, c = i && !0 && e && !e.nodeType && e, n = c && c.exports === i, s = n ? r.Buffer : void 0, v = s ? s.isBuffer : void 0, f = v || a;
  e.exports = f;
})(W, W.exports);
var ot = W.exports, co = 9007199254740991, lo = /^(?:0|[1-9]\d*)$/;
function uo(e, t) {
  var r = typeof e;
  return t = t ?? co, !!t && (r == "number" || r != "symbol" && lo.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var fo = uo, vo = 9007199254740991;
function go(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= vo;
}
var it = go, po = Q, yo = it, bo = G, $o = "[object Arguments]", ho = "[object Array]", _o = "[object Boolean]", mo = "[object Date]", To = "[object Error]", jo = "[object Function]", Ao = "[object Map]", wo = "[object Number]", So = "[object Object]", Co = "[object RegExp]", Oo = "[object Set]", Io = "[object String]", xo = "[object WeakMap]", Po = "[object ArrayBuffer]", Eo = "[object DataView]", Lo = "[object Float32Array]", Do = "[object Float64Array]", Mo = "[object Int8Array]", ko = "[object Int16Array]", Bo = "[object Int32Array]", Fo = "[object Uint8Array]", Go = "[object Uint8ClampedArray]", Uo = "[object Uint16Array]", No = "[object Uint32Array]", u = {};
u[Lo] = u[Do] = u[Mo] = u[ko] = u[Bo] = u[Fo] = u[Go] = u[Uo] = u[No] = !0;
u[$o] = u[ho] = u[Po] = u[_o] = u[Eo] = u[mo] = u[To] = u[jo] = u[Ao] = u[wo] = u[So] = u[Co] = u[Oo] = u[Io] = u[xo] = !1;
function zo(e) {
  return bo(e) && yo(e.length) && !!u[po(e)];
}
var Vo = zo;
function Ko(e) {
  return function(t) {
    return e(t);
  };
}
var be = Ko, J = { exports: {} };
J.exports;
(function(e, t) {
  var r = Ze, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, c = i && i.exports === a, n = c && r.process, s = function() {
    try {
      var v = i && i.require && i.require("util").types;
      return v || n && n.binding && n.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(J, J.exports);
var $e = J.exports, Ro = Vo, Ho = be, De = $e, Me = De && De.isTypedArray, qo = Me ? Ho(Me) : Ro, Wo = qo, Jo = qn, Yo = no, Xo = ye, Zo = ot, Qo = fo, ei = Wo, ti = Object.prototype, ri = ti.hasOwnProperty;
function ai(e, t) {
  var r = Xo(e), a = !r && Yo(e), i = !r && !a && Zo(e), c = !r && !a && !i && ei(e), n = r || a || i || c, s = n ? Jo(e.length, String) : [], v = s.length;
  for (var f in e)
    (t || ri.call(e, f)) && !(n && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    c && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    Qo(f, v))) && s.push(f);
  return s;
}
var st = ai, ni = Object.prototype;
function oi(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || ni;
  return e === r;
}
var he = oi;
function ii(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var ct = ii, si = ct, ci = si(Object.keys, Object), li = ci, ui = he, fi = li, vi = Object.prototype, gi = vi.hasOwnProperty;
function pi(e) {
  if (!ui(e))
    return fi(e);
  var t = [];
  for (var r in Object(e))
    gi.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var di = pi, yi = et, bi = it;
function $i(e) {
  return e != null && bi(e.length) && !yi(e);
}
var lt = $i, hi = st, _i = di, mi = lt;
function Ti(e) {
  return mi(e) ? hi(e) : _i(e);
}
var _e = Ti, ji = re, Ai = _e;
function wi(e, t) {
  return e && ji(t, Ai(t), e);
}
var Si = wi;
function Ci(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Oi = Ci, Ii = F, xi = he, Pi = Oi, Ei = Object.prototype, Li = Ei.hasOwnProperty;
function Di(e) {
  if (!Ii(e))
    return Pi(e);
  var t = xi(e), r = [];
  for (var a in e)
    a == "constructor" && (t || !Li.call(e, a)) || r.push(a);
  return r;
}
var Mi = Di, ki = st, Bi = Mi, Fi = lt;
function Gi(e) {
  return Fi(e) ? ki(e, !0) : Bi(e);
}
var me = Gi, Ui = re, Ni = me;
function zi(e, t) {
  return e && Ui(t, Ni(t), e);
}
var Vi = zi, Y = { exports: {} };
Y.exports;
(function(e, t) {
  var r = _, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, c = i && i.exports === a, n = c ? r.Buffer : void 0, s = n ? n.allocUnsafe : void 0;
  function v(f, w) {
    if (w)
      return f.slice();
    var b = f.length, $ = s ? s(b) : new f.constructor(b);
    return f.copy($), $;
  }
  e.exports = v;
})(Y, Y.exports);
var Ki = Y.exports;
function Ri(e, t) {
  var r = -1, a = e.length;
  for (t || (t = Array(a)); ++r < a; )
    t[r] = e[r];
  return t;
}
var Hi = Ri;
function qi(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, i = 0, c = []; ++r < a; ) {
    var n = e[r];
    t(n, r, e) && (c[i++] = n);
  }
  return c;
}
var Wi = qi;
function Ji() {
  return [];
}
var ut = Ji, Yi = Wi, Xi = ut, Zi = Object.prototype, Qi = Zi.propertyIsEnumerable, ke = Object.getOwnPropertySymbols, es = ke ? function(e) {
  return e == null ? [] : (e = Object(e), Yi(ke(e), function(t) {
    return Qi.call(e, t);
  }));
} : Xi, Te = es, ts = re, rs = Te;
function as(e, t) {
  return ts(e, rs(e), t);
}
var ns = as;
function os(e, t) {
  for (var r = -1, a = t.length, i = e.length; ++r < a; )
    e[i + r] = t[r];
  return e;
}
var ft = os, is = ct, ss = is(Object.getPrototypeOf, Object), vt = ss, cs = ft, ls = vt, us = Te, fs = ut, vs = Object.getOwnPropertySymbols, gs = vs ? function(e) {
  for (var t = []; e; )
    cs(t, us(e)), e = ls(e);
  return t;
} : fs, gt = gs, ps = re, ds = gt;
function ys(e, t) {
  return ps(e, ds(e), t);
}
var bs = ys, $s = ft, hs = ye;
function _s(e, t, r) {
  var a = t(e);
  return hs(e) ? a : $s(a, r(e));
}
var pt = _s, ms = pt, Ts = Te, js = _e;
function As(e) {
  return ms(e, js, Ts);
}
var ws = As, Ss = pt, Cs = gt, Os = me;
function Is(e) {
  return Ss(e, Os, Cs);
}
var xs = Is, Ps = A, Es = _, Ls = Ps(Es, "DataView"), Ds = Ls, Ms = A, ks = _, Bs = Ms(ks, "Promise"), Fs = Bs, Gs = A, Us = _, Ns = Gs(Us, "Set"), zs = Ns, Vs = A, Ks = _, Rs = Vs(Ks, "WeakMap"), Hs = Rs, le = Ds, ue = de, fe = Fs, ve = zs, ge = Hs, dt = Q, E = tt, Be = "[object Map]", qs = "[object Object]", Fe = "[object Promise]", Ge = "[object Set]", Ue = "[object WeakMap]", Ne = "[object DataView]", Ws = E(le), Js = E(ue), Ys = E(fe), Xs = E(ve), Zs = E(ge), j = dt;
(le && j(new le(new ArrayBuffer(1))) != Ne || ue && j(new ue()) != Be || fe && j(fe.resolve()) != Fe || ve && j(new ve()) != Ge || ge && j(new ge()) != Ue) && (j = function(e) {
  var t = dt(e), r = t == qs ? e.constructor : void 0, a = r ? E(r) : "";
  if (a)
    switch (a) {
      case Ws:
        return Ne;
      case Js:
        return Be;
      case Ys:
        return Fe;
      case Xs:
        return Ge;
      case Zs:
        return Ue;
    }
  return t;
});
var je = j, Qs = Object.prototype, ec = Qs.hasOwnProperty;
function tc(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && ec.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var rc = tc, ac = _, nc = ac.Uint8Array, oc = nc, ze = oc;
function ic(e) {
  var t = new e.constructor(e.byteLength);
  return new ze(t).set(new ze(e)), t;
}
var Ae = ic, sc = Ae;
function cc(e, t) {
  var r = t ? sc(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var lc = cc, uc = /\w*$/;
function fc(e) {
  var t = new e.constructor(e.source, uc.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var vc = fc, Ve = pe, Ke = Ve ? Ve.prototype : void 0, Re = Ke ? Ke.valueOf : void 0;
function gc(e) {
  return Re ? Object(Re.call(e)) : {};
}
var pc = gc, dc = Ae;
function yc(e, t) {
  var r = t ? dc(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var bc = yc, $c = Ae, hc = lc, _c = vc, mc = pc, Tc = bc, jc = "[object Boolean]", Ac = "[object Date]", wc = "[object Map]", Sc = "[object Number]", Cc = "[object RegExp]", Oc = "[object Set]", Ic = "[object String]", xc = "[object Symbol]", Pc = "[object ArrayBuffer]", Ec = "[object DataView]", Lc = "[object Float32Array]", Dc = "[object Float64Array]", Mc = "[object Int8Array]", kc = "[object Int16Array]", Bc = "[object Int32Array]", Fc = "[object Uint8Array]", Gc = "[object Uint8ClampedArray]", Uc = "[object Uint16Array]", Nc = "[object Uint32Array]";
function zc(e, t, r) {
  var a = e.constructor;
  switch (t) {
    case Pc:
      return $c(e);
    case jc:
    case Ac:
      return new a(+e);
    case Ec:
      return hc(e, r);
    case Lc:
    case Dc:
    case Mc:
    case kc:
    case Bc:
    case Fc:
    case Gc:
    case Uc:
    case Nc:
      return Tc(e, r);
    case wc:
      return new a();
    case Sc:
    case Ic:
      return new a(e);
    case Cc:
      return _c(e);
    case Oc:
      return new a();
    case xc:
      return mc(e);
  }
}
var Vc = zc, Kc = F, He = Object.create, Rc = function() {
  function e() {
  }
  return function(t) {
    if (!Kc(t))
      return {};
    if (He)
      return He(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), Hc = Rc, qc = Hc, Wc = vt, Jc = he;
function Yc(e) {
  return typeof e.constructor == "function" && !Jc(e) ? qc(Wc(e)) : {};
}
var Xc = Yc, Zc = je, Qc = G, el = "[object Map]";
function tl(e) {
  return Qc(e) && Zc(e) == el;
}
var rl = tl, al = rl, nl = be, qe = $e, We = qe && qe.isMap, ol = We ? nl(We) : al, il = ol, sl = je, cl = G, ll = "[object Set]";
function ul(e) {
  return cl(e) && sl(e) == ll;
}
var fl = ul, vl = fl, gl = be, Je = $e, Ye = Je && Je.isSet, pl = Ye ? gl(Ye) : vl, dl = pl, yl = Pn, bl = Ln, $l = at, hl = Si, _l = Vi, ml = Ki, Tl = Hi, jl = ns, Al = bs, wl = ws, Sl = xs, Cl = je, Ol = rc, Il = Vc, xl = Xc, Pl = ye, El = ot, Ll = il, Dl = F, Ml = dl, kl = _e, Bl = me, Fl = 1, Gl = 2, Ul = 4, yt = "[object Arguments]", Nl = "[object Array]", zl = "[object Boolean]", Vl = "[object Date]", Kl = "[object Error]", bt = "[object Function]", Rl = "[object GeneratorFunction]", Hl = "[object Map]", ql = "[object Number]", $t = "[object Object]", Wl = "[object RegExp]", Jl = "[object Set]", Yl = "[object String]", Xl = "[object Symbol]", Zl = "[object WeakMap]", Ql = "[object ArrayBuffer]", eu = "[object DataView]", tu = "[object Float32Array]", ru = "[object Float64Array]", au = "[object Int8Array]", nu = "[object Int16Array]", ou = "[object Int32Array]", iu = "[object Uint8Array]", su = "[object Uint8ClampedArray]", cu = "[object Uint16Array]", lu = "[object Uint32Array]", l = {};
l[yt] = l[Nl] = l[Ql] = l[eu] = l[zl] = l[Vl] = l[tu] = l[ru] = l[au] = l[nu] = l[ou] = l[Hl] = l[ql] = l[$t] = l[Wl] = l[Jl] = l[Yl] = l[Xl] = l[iu] = l[su] = l[cu] = l[lu] = !0;
l[Kl] = l[bt] = l[Zl] = !1;
function q(e, t, r, a, i, c) {
  var n, s = t & Fl, v = t & Gl, f = t & Ul;
  if (r && (n = i ? r(e, a, i, c) : r(e)), n !== void 0)
    return n;
  if (!Dl(e))
    return e;
  var w = Pl(e);
  if (w) {
    if (n = Ol(e), !s)
      return Tl(e, n);
  } else {
    var b = Cl(e), $ = b == bt || b == Rl;
    if (El(e))
      return ml(e, s);
    if (b == $t || b == yt || $ && !i) {
      if (n = v || $ ? {} : xl(e), !s)
        return v ? Al(e, _l(n, e)) : jl(e, hl(n, e));
    } else {
      if (!l[b])
        return i ? e : {};
      n = Il(e, b, s);
    }
  }
  c || (c = new yl());
  var L = c.get(e);
  if (L)
    return L;
  c.set(e, n), Ml(e) ? e.forEach(function(h) {
    n.add(q(h, t, r, h, e, c));
  }) : Ll(e) && e.forEach(function(h, m) {
    n.set(m, q(h, t, r, m, e, c));
  });
  var ae = f ? v ? Sl : wl : v ? Bl : kl, U = w ? void 0 : ae(e);
  return bl(U || e, function(h, m) {
    U && (m = h, h = e[m]), $l(n, m, q(h, t, r, m, e, c));
  }), n;
}
var uu = q, fu = uu, vu = 1, gu = 4;
function pu(e) {
  return fu(e, vu | gu);
}
var du = pu;
const yu = /* @__PURE__ */ Bt(du), bu = {
  key: 0,
  style: { display: "flex" }
}, $u = {
  key: 1,
  class: "action-icon"
}, hu = { key: 1 }, _u = /* @__PURE__ */ St({
  __name: "index",
  props: {
    // 表格配置选项
    options: {
      type: Array,
      required: !0
    },
    // 表格数据
    data: {
      type: Array,
      required: !0
    },
    // 加载文案
    elementLoadingText: {
      type: String
    },
    // 加载图标名
    elementLoadingSpinner: {
      type: String
    },
    // 加载背景颜色
    elementLoadingBackground: {
      type: String
    },
    // 加载图标是svg
    elementLoadingSvg: {
      type: String
    },
    // 加载团是svg的配置
    elementLoadingSvgViewBox: {
      type: String
    },
    // 编辑显示的图标
    editIcon: {
      type: String,
      default: "Edit"
    },
    // 是否可以编辑行
    isEditRow: {
      type: Boolean,
      default: !1
    },
    // 编辑行按钮的标识
    editRowIndex: {
      type: String,
      default: ""
    },
    // 是否显示分页
    pagination: {
      type: Boolean,
      default: !1
    },
    // 显示分页的对齐方式
    paginationAlign: {
      type: String,
      default: "left"
    },
    // 当前是第几页
    currentPage: {
      type: Number,
      default: 1
    },
    // 当前一页多少条数据
    pageSize: {
      type: Number,
      default: 10
    },
    // 显示分页数据多少条的选项
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40]
    },
    // 数据总条数
    total: {
      type: Number,
      default: 0
    }
  },
  emits: ["confirm", "cancel", "update:editRowIndex", "size-change", "current-change", "current-page"],
  setup(e, { emit: t }) {
    let r = e, a = t, i = (o) => {
      a("size-change", o);
    }, c = (o) => {
      a("current-change", o);
    }, n = z(""), s = z(yu(r.data)), v = z(r.editRowIndex), f = z(!1), w = ne(
      () => r.data,
      (o) => {
        f.value = !0, s.value = o, s.value.map((N) => {
          N.rowEdit = !1;
        }), f.value && w();
      },
      { deep: !0 }
    );
    ne(
      () => r.editRowIndex,
      (o) => {
        o && (v.value = o);
      }
    ), ne(
      () => r.currentPage,
      (o) => {
        console.log(o), a("current-page", o);
      }
    ), Ct(() => {
      s.value.map((o) => {
        o.rowEdit = !1;
      });
    });
    let b = V(() => r.options.filter((o) => !o.action)), $ = V(() => r.options.find((o) => o.action)), L = V(() => !r.data || !r.data.length), ae = V(() => r.paginationAlign === "left" ? "flex-start" : r.paginationAlign === "right" ? "flex-end" : "center"), U = (o) => {
      n.value = o.$index + o.column.id;
    }, h = (o) => {
      a("confirm", o), n.value = "";
    }, m = (o) => {
      a("cancel", o), n.value = "";
    }, ht = (o, N) => {
      N.label === $.value.label && r.isEditRow && v.value === r.editRowIndex && (o.rowEdit = !o.rowEdit, s.value.map((D) => {
        D !== o && (D.rowEdit = !1);
      }), o.rowEdit || a("update:editRowIndex", ""));
    };
    return (o, N) => {
      const D = C("el-input"), _t = C("el-icon-check"), mt = C("el-icon-close"), we = C("el-table-column"), Tt = C("el-table"), jt = C("el-pagination"), At = Ot("loading");
      return y(), T(
        M,
        null,
        [
          It((y(), K(Tt, xt({
            data: p(s),
            "element-loading-text": e.elementLoadingText,
            "element-loading-spinner": e.elementLoadingSpinner,
            "element-loading-background": e.elementLoadingBackground,
            "element-loading-svg": e.elementLoadingSvg,
            "element-loading-svg-view-box": e.elementLoadingSvgViewBox,
            onRowClick: p(ht)
          }, o.$attrs), {
            default: oe(() => [
              (y(!0), T(
                M,
                null,
                Pt(p(b), (g, wt) => (y(), T(
                  M,
                  { key: wt },
                  [
                    g.prop && !g.action ? (y(), K(we, {
                      key: 0,
                      label: g.label,
                      prop: g.prop,
                      width: g.width,
                      align: g.align
                    }, {
                      default: oe((d) => [
                        d.row.rowEdit ? (y(), K(D, {
                          key: 0,
                          size: "small",
                          modelValue: d.row[g.prop],
                          "onUpdate:modelValue": (S) => d.row[g.prop] = S
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (y(), T(
                          M,
                          { key: 1 },
                          [
                            d.$index + d.column.id === p(n) ? (y(), T("div", bu, [
                              k(D, {
                                size: "small",
                                modelValue: d.row[g.prop],
                                "onUpdate:modelValue": (S) => d.row[g.prop] = S
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              Et("div", null, [
                                o.$slots.cellEdit ? R(o.$slots, "cellEdit", {
                                  key: 0,
                                  scope: d
                                }, void 0, !0) : (y(), T("div", $u, [
                                  k(_t, {
                                    class: "check",
                                    onClick: ie((S) => p(h)(d), ["stop"])
                                  }, null, 8, ["onClick"]),
                                  k(mt, {
                                    class: "close",
                                    onClick: ie((S) => p(m)(d), ["stop"])
                                  }, null, 8, ["onClick"])
                                ]))
                              ])
                            ])) : (y(), T(
                              M,
                              { key: 1 },
                              [
                                g.slot ? R(o.$slots, g.slot, {
                                  key: 0,
                                  scope: d
                                }, void 0, !0) : (y(), T(
                                  "span",
                                  hu,
                                  Lt(d.row[g.prop]),
                                  1
                                  /* TEXT */
                                )),
                                g.editable ? (y(), K(Dt(`el-icon-${p(kt)(e.editIcon)}`), {
                                  key: 2,
                                  class: "edit",
                                  onClick: ie((S) => p(U)(d), ["stop"])
                                }, null, 8, ["onClick"])) : se("v-if", !0)
                              ],
                              64
                              /* STABLE_FRAGMENT */
                            ))
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        ))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["label", "prop", "width", "align"])) : se("v-if", !0)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))),
                128
                /* KEYED_FRAGMENT */
              )),
              k(we, {
                label: p($).label,
                width: p($).width,
                align: p($).align
              }, {
                default: oe((g) => [
                  g.row.rowEdit ? R(o.$slots, "editRow", {
                    key: 0,
                    scope: g
                  }, void 0, !0) : R(o.$slots, "action", {
                    key: 1,
                    scope: g
                  }, void 0, !0)
                ]),
                _: 3
                /* FORWARDED */
              }, 8, ["label", "width", "align"])
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["data", "element-loading-text", "element-loading-spinner", "element-loading-background", "element-loading-svg", "element-loading-svg-view-box", "onRowClick"])), [
            [At, p(L)]
          ]),
          e.pagination && !p(L) ? (y(), T(
            "div",
            {
              key: 0,
              class: "pagination",
              style: Mt({ justifyContent: p(ae) })
            },
            [
              k(jt, {
                currentPage: e.currentPage,
                "page-sizes": e.pageSizes,
                "page-size": e.pageSize,
                layout: "total, sizes, prev, pager, next, jumper",
                total: e.total,
                onSizeChange: p(i),
                onCurrentChange: p(c)
              }, null, 8, ["currentPage", "page-sizes", "page-size", "total", "onSizeChange", "onCurrentChange"])
            ],
            4
            /* STYLE */
          )) : se("v-if", !0)
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
const mu = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [a, i] of t)
    r[a] = i;
  return r;
}, Tu = /* @__PURE__ */ mu(_u, [["__scopeId", "data-v-05ce193a"]]), Au = {
  install(e) {
    e.component("m-table", Tu);
  }
};
export {
  Au as default
};

import { defineComponent as ra, ref as na, watch as ia, onMounted as aa, openBlock as oa, createElementBlock as sa } from "vue";
var At = function(t, e) {
  return At = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, At(t, e);
};
function R(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  At(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var h = function() {
  return h = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, h.apply(this, arguments);
};
function A(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, a; n < i; n++)
      (a || !(n in e)) && (a || (a = Array.prototype.slice.call(e, 0, n)), a[n] = e[n]);
  return t.concat(a || Array.prototype.slice.call(e));
}
var ut, T, Cn, ye, ie, br, Rn, wn, $e = {}, Tn = [], la = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function K(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}
function _n(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ee(t, e, r) {
  var n, i, a, o = {};
  for (a in e)
    a == "key" ? n = e[a] : a == "ref" ? i = e[a] : o[a] = e[a];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? ut.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null)
    for (a in t.defaultProps)
      o[a] === void 0 && (o[a] = t.defaultProps[a]);
  return Ye(t, o, n, i, null);
}
function Ye(t, e, r, n, i) {
  var a = { type: t, props: e, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Cn };
  return i == null && T.vnode != null && T.vnode(a), a;
}
function ua() {
  return { current: null };
}
function le(t) {
  return t.children;
}
function ca(t, e, r, n, i) {
  var a;
  for (a in r)
    a === "children" || a === "key" || a in e || Ke(t, a, null, r[a], n);
  for (a in e)
    i && typeof e[a] != "function" || a === "children" || a === "key" || a === "value" || a === "checked" || r[a] === e[a] || Ke(t, a, e[a], r[a], n);
}
function Dr(t, e, r) {
  e[0] === "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || la.test(e) ? r : r + "px";
}
function Ke(t, e, r, n, i) {
  var a;
  e:
    if (e === "style")
      if (typeof r == "string")
        t.style.cssText = r;
      else {
        if (typeof n == "string" && (t.style.cssText = n = ""), n)
          for (e in n)
            r && e in r || Dr(t.style, e, "");
        if (r)
          for (e in r)
            n && r[e] === n[e] || Dr(t.style, e, r[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      a = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + a] = r, r ? n || t.addEventListener(e, a ? Rr : Cr, a) : t.removeEventListener(e, a ? Rr : Cr, a);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = r ?? "";
          break e;
        } catch {
        }
      typeof r == "function" || (r == null || r === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, r));
    }
}
function Cr(t) {
  ye = !0;
  try {
    return this.l[t.type + !1](T.event ? T.event(t) : t);
  } finally {
    ye = !1;
  }
}
function Rr(t) {
  ye = !0;
  try {
    return this.l[t.type + !0](T.event ? T.event(t) : t);
  } finally {
    ye = !1;
  }
}
function q(t, e) {
  this.props = t, this.context = e;
}
function He(t, e) {
  if (e == null)
    return t.__ ? He(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var r; e < t.__k.length; e++)
    if ((r = t.__k[e]) != null && r.__e != null)
      return r.__e;
  return typeof t.type == "function" ? He(t) : null;
}
function Mn(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((r = t.__k[e]) != null && r.__e != null) {
        t.__e = t.__c.base = r.__e;
        break;
      }
    return Mn(t);
  }
}
function fa(t) {
  ye ? setTimeout(t) : Rn(t);
}
function Ot(t) {
  (!t.__d && (t.__d = !0) && ie.push(t) && !Je.__r++ || br !== T.debounceRendering) && ((br = T.debounceRendering) || fa)(Je);
}
function Je() {
  var t, e, r, n, i, a, o, s;
  for (ie.sort(function(l, c) {
    return l.__v.__b - c.__v.__b;
  }); t = ie.shift(); )
    t.__d && (e = ie.length, n = void 0, i = void 0, o = (a = (r = t).__v).__e, (s = r.__P) && (n = [], (i = K({}, a)).__v = a.__v + 1, Zt(s, a, i, r.__n, s.ownerSVGElement !== void 0, a.__h != null ? [o] : null, n, o ?? He(a), a.__h), xn(n, a), a.__e != o && Mn(a)), ie.length > e && ie.sort(function(l, c) {
      return l.__v.__b - c.__v.__b;
    }));
  Je.__r = 0;
}
function kn(t, e, r, n, i, a, o, s, l, c) {
  var u, f, v, d, p, E, S, g = n && n.__k || Tn, b = g.length;
  for (r.__k = [], u = 0; u < e.length; u++)
    if ((d = r.__k[u] = (d = e[u]) == null || typeof d == "boolean" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? Ye(null, d, null, null, d) : Array.isArray(d) ? Ye(le, { children: d }, null, null, null) : d.__b > 0 ? Ye(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null) {
      if (d.__ = r, d.__b = r.__b + 1, (v = g[u]) === null || v && d.key == v.key && d.type === v.type)
        g[u] = void 0;
      else
        for (f = 0; f < b; f++) {
          if ((v = g[f]) && d.key == v.key && d.type === v.type) {
            g[f] = void 0;
            break;
          }
          v = null;
        }
      Zt(t, d, v = v || $e, i, a, o, s, l, c), p = d.__e, (f = d.ref) && v.ref != f && (S || (S = []), v.ref && S.push(v.ref, null, d), S.push(f, d.__c || p, d)), p != null ? (E == null && (E = p), typeof d.type == "function" && d.__k === v.__k ? d.__d = l = In(d, l, t) : l = Pn(t, d, v, g, p, l), typeof r.type == "function" && (r.__d = l)) : l && v.__e == l && l.parentNode != t && (l = He(v));
    }
  for (r.__e = E, u = b; u--; )
    g[u] != null && (typeof r.type == "function" && g[u].__e != null && g[u].__e == r.__d && (r.__d = Hn(n).nextSibling), An(g[u], g[u]));
  if (S)
    for (u = 0; u < S.length; u++)
      Nn(S[u], S[++u], S[++u]);
}
function In(t, e, r) {
  for (var n, i = t.__k, a = 0; i && a < i.length; a++)
    (n = i[a]) && (n.__ = t, e = typeof n.type == "function" ? In(n, e, r) : Pn(r, n, n, i, n.__e, e));
  return e;
}
function Qe(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(r) {
    Qe(r, e);
  }) : e.push(t)), e;
}
function Pn(t, e, r, n, i, a) {
  var o, s, l;
  if (e.__d !== void 0)
    o = e.__d, e.__d = void 0;
  else if (r == null || i != a || i.parentNode == null)
    e:
      if (a == null || a.parentNode !== t)
        t.appendChild(i), o = null;
      else {
        for (s = a, l = 0; (s = s.nextSibling) && l < n.length; l += 1)
          if (s == i)
            break e;
        t.insertBefore(i, a), o = a;
      }
  return o !== void 0 ? o : i.nextSibling;
}
function Hn(t) {
  var e, r, n;
  if (t.type == null || typeof t.type == "string")
    return t.__e;
  if (t.__k) {
    for (e = t.__k.length - 1; e >= 0; e--)
      if ((r = t.__k[e]) && (n = Hn(r)))
        return n;
  }
  return null;
}
function Zt(t, e, r, n, i, a, o, s, l) {
  var c, u, f, v, d, p, E, S, g, b, C, D, I, _, P, w = e.type;
  if (e.constructor !== void 0)
    return null;
  r.__h != null && (l = r.__h, s = e.__e = r.__e, e.__h = null, a = [s]), (c = T.__b) && c(e);
  try {
    e:
      if (typeof w == "function") {
        if (S = e.props, g = (c = w.contextType) && n[c.__c], b = c ? g ? g.props.value : c.__ : n, r.__c ? E = (u = e.__c = r.__c).__ = u.__E : ("prototype" in w && w.prototype.render ? e.__c = u = new w(S, b) : (e.__c = u = new q(S, b), u.constructor = w, u.render = va), g && g.sub(u), u.props = S, u.state || (u.state = {}), u.context = b, u.__n = n, f = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), w.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = K({}, u.__s)), K(u.__s, w.getDerivedStateFromProps(S, u.__s))), v = u.props, d = u.state, u.__v = e, f)
          w.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (w.getDerivedStateFromProps == null && S !== v && u.componentWillReceiveProps != null && u.componentWillReceiveProps(S, b), !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(S, u.__s, b) === !1 || e.__v === r.__v) {
            for (e.__v !== r.__v && (u.props = S, u.state = u.__s, u.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.forEach(function(N) {
              N && (N.__ = e);
            }), C = 0; C < u._sb.length; C++)
              u.__h.push(u._sb[C]);
            u._sb = [], u.__h.length && o.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(S, u.__s, b), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(v, d, p);
          });
        }
        if (u.context = b, u.props = S, u.__P = t, D = T.__r, I = 0, "prototype" in w && w.prototype.render) {
          for (u.state = u.__s, u.__d = !1, D && D(e), c = u.render(u.props, u.state, u.context), _ = 0; _ < u._sb.length; _++)
            u.__h.push(u._sb[_]);
          u._sb = [];
        } else
          do
            u.__d = !1, D && D(e), c = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++I < 25);
        u.state = u.__s, u.getChildContext != null && (n = K(K({}, n), u.getChildContext())), f || u.getSnapshotBeforeUpdate == null || (p = u.getSnapshotBeforeUpdate(v, d)), P = c != null && c.type === le && c.key == null ? c.props.children : c, kn(t, Array.isArray(P) ? P : [P], e, r, n, i, a, o, s, l), u.base = e.__e, e.__h = null, u.__h.length && o.push(u), E && (u.__E = u.__ = null), u.__e = !1;
      } else
        a == null && e.__v === r.__v ? (e.__k = r.__k, e.__e = r.__e) : e.__e = da(r.__e, e, r, n, i, a, o, l);
    (c = T.diffed) && c(e);
  } catch (N) {
    e.__v = null, (l || a != null) && (e.__e = s, e.__h = !!l, a[a.indexOf(s)] = null), T.__e(N, e, r);
  }
}
function xn(t, e) {
  T.__c && T.__c(e, t), t.some(function(r) {
    try {
      t = r.__h, r.__h = [], t.some(function(n) {
        n.call(r);
      });
    } catch (n) {
      T.__e(n, r.__v);
    }
  });
}
function da(t, e, r, n, i, a, o, s) {
  var l, c, u, f = r.props, v = e.props, d = e.type, p = 0;
  if (d === "svg" && (i = !0), a != null) {
    for (; p < a.length; p++)
      if ((l = a[p]) && "setAttribute" in l == !!d && (d ? l.localName === d : l.nodeType === 3)) {
        t = l, a[p] = null;
        break;
      }
  }
  if (t == null) {
    if (d === null)
      return document.createTextNode(v);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, v.is && v), a = null, s = !1;
  }
  if (d === null)
    f === v || s && t.data === v || (t.data = v);
  else {
    if (a = a && ut.call(t.childNodes), c = (f = r.props || $e).dangerouslySetInnerHTML, u = v.dangerouslySetInnerHTML, !s) {
      if (a != null)
        for (f = {}, p = 0; p < t.attributes.length; p++)
          f[t.attributes[p].name] = t.attributes[p].value;
      (u || c) && (u && (c && u.__html == c.__html || u.__html === t.innerHTML) || (t.innerHTML = u && u.__html || ""));
    }
    if (ca(t, v, f, i, s), u)
      e.__k = [];
    else if (p = e.props.children, kn(t, Array.isArray(p) ? p : [p], e, r, n, i && d !== "foreignObject", a, o, a ? a[0] : r.__k && He(r, 0), s), a != null)
      for (p = a.length; p--; )
        a[p] != null && _n(a[p]);
    s || ("value" in v && (p = v.value) !== void 0 && (p !== t.value || d === "progress" && !p || d === "option" && p !== f.value) && Ke(t, "value", p, f.value, !1), "checked" in v && (p = v.checked) !== void 0 && p !== t.checked && Ke(t, "checked", p, f.checked, !1));
  }
  return t;
}
function Nn(t, e, r) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (n) {
    T.__e(n, r);
  }
}
function An(t, e, r) {
  var n, i;
  if (T.unmount && T.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || Nn(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (a) {
        T.__e(a, e);
      }
    n.base = n.__P = null, t.__c = void 0;
  }
  if (n = t.__k)
    for (i = 0; i < n.length; i++)
      n[i] && An(n[i], e, r || typeof t.type != "function");
  r || t.__e == null || _n(t.__e), t.__ = t.__e = t.__d = void 0;
}
function va(t, e, r) {
  return this.constructor(t, r);
}
function xe(t, e, r) {
  var n, i, a;
  T.__ && T.__(t, e), i = (n = typeof r == "function") ? null : r && r.__k || e.__k, a = [], Zt(e, t = (!n && r || e).__k = ee(le, null, [t]), i || $e, $e, e.ownerSVGElement !== void 0, !n && r ? [r] : i ? null : e.firstChild ? ut.call(e.childNodes) : null, a, !n && r ? r : i ? i.__e : e.firstChild, n), xn(a, t);
}
function pa(t, e) {
  var r = { __c: e = "__cC" + wn++, __: t, Consumer: function(n, i) {
    return n.children(i);
  }, Provider: function(n) {
    var i, a;
    return this.getChildContext || (i = [], (a = {})[e] = this, this.getChildContext = function() {
      return a;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value !== o.value && i.some(function(s) {
        s.__e = !0, Ot(s);
      });
    }, this.sub = function(o) {
      i.push(o);
      var s = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        i.splice(i.indexOf(o), 1), s && s.call(o);
      };
    }), n.children;
  } };
  return r.Provider.__ = r.Consumer.contextType = r;
}
ut = Tn.slice, T = { __e: function(t, e, r, n) {
  for (var i, a, o; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(t)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, n || {}), o = i.__d), o)
          return i.__E = i;
      } catch (s) {
        t = s;
      }
  throw t;
} }, Cn = 0, ye = !1, q.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = K({}, this.state), typeof t == "function" && (t = t(K({}, r), this.props)), t && K(r, t), t != null && this.__v && (e && this._sb.push(e), Ot(this));
}, q.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ot(this));
}, q.prototype.render = le, ie = [], Rn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Je.__r = 0, wn = 0;
var j, Et, wr, On = [], St = [], Tr = T.__b, _r = T.__r, Mr = T.diffed, kr = T.__c, Ir = T.unmount;
function ha() {
  for (var t; t = On.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(je), t.__H.__h.forEach(Lt), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], T.__e(e, t.__v);
      }
}
T.__b = function(t) {
  j = null, Tr && Tr(t);
}, T.__r = function(t) {
  _r && _r(t);
  var e = (j = t.__c).__H;
  e && (Et === j ? (e.__h = [], j.__h = [], e.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = St, r.__N = r.i = void 0;
  })) : (e.__h.forEach(je), e.__h.forEach(Lt), e.__h = [])), Et = j;
}, T.diffed = function(t) {
  Mr && Mr(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (On.push(e) !== 1 && wr === T.requestAnimationFrame || ((wr = T.requestAnimationFrame) || ga)(ha)), e.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== St && (r.__ = r.__V), r.i = void 0, r.__V = St;
  })), Et = j = null;
}, T.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.forEach(je), r.__h = r.__h.filter(function(n) {
        return !n.__ || Lt(n);
      });
    } catch (n) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], T.__e(n, r.__v);
    }
  }), kr && kr(t, e);
}, T.unmount = function(t) {
  Ir && Ir(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      je(n);
    } catch (i) {
      e = i;
    }
  }), r.__H = void 0, e && T.__e(e, r.__v));
};
var Pr = typeof requestAnimationFrame == "function";
function ga(t) {
  var e, r = function() {
    clearTimeout(n), Pr && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(r, 100);
  Pr && (e = requestAnimationFrame(r));
}
function je(t) {
  var e = j, r = t.__c;
  typeof r == "function" && (t.__c = void 0, r()), j = e;
}
function Lt(t) {
  var e = j;
  t.__c = t.__(), j = e;
}
function ma(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}
function Hr(t, e) {
  for (var r in t)
    if (r !== "__source" && !(r in e))
      return !0;
  for (var n in e)
    if (n !== "__source" && t[n] !== e[n])
      return !0;
  return !1;
}
function xr(t) {
  this.props = t;
}
(xr.prototype = new q()).isPureReactComponent = !0, xr.prototype.shouldComponentUpdate = function(t, e) {
  return Hr(this.props, t) || Hr(this.state, e);
};
var Nr = T.__b;
T.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Nr && Nr(t);
};
var ya = T.__e;
T.__e = function(t, e, r, n) {
  if (t.then) {
    for (var i, a = e; a = a.__; )
      if ((i = a.__c) && i.__c)
        return e.__e == null && (e.__e = r.__e, e.__k = r.__k), i.__c(t, e);
  }
  ya(t, e, r, n);
};
var Ar = T.unmount;
function Ln(t, e, r) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), t.__c.__H = null), (t = ma({}, t)).__c != null && (t.__c.__P === r && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(n) {
    return Ln(n, e, r);
  })), t;
}
function Un(t, e, r) {
  return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(n) {
    return Un(n, e, r);
  }), t.__c && t.__c.__P === e && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t;
}
function bt() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Vn(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function Be() {
  this.u = null, this.o = null;
}
T.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), Ar && Ar(t);
}, (bt.prototype = new q()).__c = function(t, e) {
  var r = e.__c, n = this;
  n.t == null && (n.t = []), n.t.push(r);
  var i = Vn(n.__v), a = !1, o = function() {
    a || (a = !0, r.__R = null, i ? i(s) : s());
  };
  r.__R = o;
  var s = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var c = n.state.__a;
        n.__v.__k[0] = Un(c, c.__c.__P, c.__c.__O);
      }
      var u;
      for (n.setState({ __a: n.__b = null }); u = n.t.pop(); )
        u.forceUpdate();
    }
  }, l = e.__h === !0;
  n.__u++ || l || n.setState({ __a: n.__b = n.__v.__k[0] }), t.then(o, o);
}, bt.prototype.componentWillUnmount = function() {
  this.t = [];
}, bt.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = Ln(this.__b, r, n.__O = n.__P);
    }
    this.__b = null;
  }
  var i = e.__a && ee(le, null, t.fallback);
  return i && (i.__h = null), [ee(le, null, e.__a ? null : t.children), i];
};
var Or = function(t, e, r) {
  if (++r[1] === r[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
    for (r = t.u; r; ) {
      for (; r.length > 3; )
        r.pop()();
      if (r[1] < r[0])
        break;
      t.u = r = r[2];
    }
};
function Ea(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function Sa(t) {
  var e = this, r = t.i;
  e.componentWillUnmount = function() {
    xe(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== r && e.componentWillUnmount(), t.__v ? (e.l || (e.i = r, e.l = { nodeType: 1, parentNode: r, childNodes: [], appendChild: function(n) {
    this.childNodes.push(n), e.i.appendChild(n);
  }, insertBefore: function(n, i) {
    this.childNodes.push(n), e.i.appendChild(n);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.i.removeChild(n);
  } }), xe(ee(Ea, { context: e.context }, t.__v), e.l)) : e.l && e.componentWillUnmount();
}
function ba(t, e) {
  var r = ee(Sa, { __v: t, i: e });
  return r.containerInfo = e, r;
}
(Be.prototype = new q()).__a = function(t) {
  var e = this, r = Vn(e.__v), n = e.o.get(t);
  return n[0]++, function(i) {
    var a = function() {
      e.props.revealOrder ? (n.push(i), Or(e, t, n)) : i();
    };
    r ? r(a) : a();
  };
}, Be.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = Qe(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var r = e.length; r--; )
    this.o.set(e[r], this.u = [1, 0, this.u]);
  return t.children;
}, Be.prototype.componentDidUpdate = Be.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, r) {
    Or(t, r, e);
  });
};
var Da = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Ca = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Ra = typeof document < "u", wa = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t);
};
q.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(q.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var Lr = T.event;
function Ta() {
}
function _a() {
  return this.cancelBubble;
}
function Ma() {
  return this.defaultPrevented;
}
T.event = function(t) {
  return Lr && (t = Lr(t)), t.persist = Ta, t.isPropagationStopped = _a, t.isDefaultPrevented = Ma, t.nativeEvent = t;
};
var Ur = { configurable: !0, get: function() {
  return this.class;
} }, Vr = T.vnode;
T.vnode = function(t) {
  var e = t.type, r = t.props, n = r;
  if (typeof e == "string") {
    var i = e.indexOf("-") === -1;
    for (var a in n = {}, r) {
      var o = r[a];
      Ra && a === "children" && e === "noscript" || a === "value" && "defaultValue" in r && o == null || (a === "defaultValue" && "value" in r && r.value == null ? a = "value" : a === "download" && o === !0 ? o = "" : /ondoubleclick/i.test(a) ? a = "ondblclick" : /^onchange(textarea|input)/i.test(a + e) && !wa(r.type) ? a = "oninput" : /^onfocus$/i.test(a) ? a = "onfocusin" : /^onblur$/i.test(a) ? a = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(a) ? a = a.toLowerCase() : i && Ca.test(a) ? a = a.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : o === null && (o = void 0), /^oninput$/i.test(a) && (a = a.toLowerCase(), n[a] && (a = "oninputCapture")), n[a] = o);
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = Qe(r.children).forEach(function(s) {
      s.props.selected = n.value.indexOf(s.props.value) != -1;
    })), e == "select" && n.defaultValue != null && (n.value = Qe(r.children).forEach(function(s) {
      s.props.selected = n.multiple ? n.defaultValue.indexOf(s.props.value) != -1 : n.defaultValue == s.props.value;
    })), t.props = n, r.class != r.className && (Ur.enumerable = "className" in r, r.className != null && (n.class = r.className), Object.defineProperty(n, "className", Ur));
  }
  t.$$typeof = Da, Vr && Vr(t);
};
var Wr = T.__r;
T.__r = function(t) {
  Wr && Wr(t), t.__c;
};
var Br = typeof globalThis < "u" ? globalThis : window;
Br.FullCalendarVDom ? console.warn("FullCalendar VDOM already loaded") : Br.FullCalendarVDom = {
  Component: q,
  createElement: ee,
  render: xe,
  createRef: ua,
  Fragment: le,
  createContext: Pa,
  createPortal: ba,
  flushSync: ka,
  unmountComponentAtNode: Ha
};
function ka(t) {
  t();
  var e = T.debounceRendering, r = [];
  function n(i) {
    r.push(i);
  }
  for (T.debounceRendering = n, xe(ee(Ia, {}), document.createElement("div")); r.length; )
    r.shift()();
  T.debounceRendering = e;
}
var Ia = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.render = function() {
      return ee("div", {});
    }, e.prototype.componentDidMount = function() {
      this.setState({});
    }, e;
  }(q)
);
function Pa(t) {
  var e = pa(t), r = e.Provider;
  return e.Provider = function() {
    var n = this, i = !this.getChildContext, a = r.apply(this, arguments);
    if (i) {
      var o = [];
      this.shouldComponentUpdate = function(s) {
        n.props.value !== s.value && o.forEach(function(l) {
          l.context = s.value, l.forceUpdate();
        });
      }, this.sub = function(s) {
        o.push(s);
        var l = s.componentWillUnmount;
        s.componentWillUnmount = function() {
          o.splice(o.indexOf(s), 1), l && l.call(s);
        };
      };
    }
    return a;
  }, e;
}
function Ha(t) {
  xe(null, t);
}
if (typeof FullCalendarVDom > "u")
  throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");
var Xt = FullCalendarVDom.Component, m = FullCalendarVDom.createElement, xa = FullCalendarVDom.render, G = FullCalendarVDom.createRef, B = FullCalendarVDom.Fragment, Wn = FullCalendarVDom.createContext, Na = FullCalendarVDom.createPortal, Fr = FullCalendarVDom.flushSync, Aa = FullCalendarVDom.unmountComponentAtNode;
/*!
FullCalendar v5.11.5
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var pe = (
  /** @class */
  function() {
    function t(e, r) {
      this.context = e, this.internalEventSource = r;
    }
    return t.prototype.remove = function() {
      this.context.dispatch({
        type: "REMOVE_EVENT_SOURCE",
        sourceId: this.internalEventSource.sourceId
      });
    }, t.prototype.refetch = function() {
      this.context.dispatch({
        type: "FETCH_EVENT_SOURCES",
        sourceIds: [this.internalEventSource.sourceId],
        isRefetch: !0
      });
    }, Object.defineProperty(t.prototype, "id", {
      get: function() {
        return this.internalEventSource.publicId;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "url", {
      get: function() {
        return this.internalEventSource.meta.url;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "format", {
      get: function() {
        return this.internalEventSource.meta.format;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }()
);
function $t(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function V(t, e) {
  if (t.closest)
    return t.closest(e);
  if (!document.documentElement.contains(t))
    return null;
  do {
    if (Oa(t, e))
      return t;
    t = t.parentElement || t.parentNode;
  } while (t !== null && t.nodeType === 1);
  return null;
}
function Oa(t, e) {
  var r = t.matches || t.matchesSelector || t.msMatchesSelector;
  return r.call(t, e);
}
function La(t, e) {
  for (var r = t instanceof HTMLElement ? [t] : t, n = [], i = 0; i < r.length; i += 1)
    for (var a = r[i].querySelectorAll(e), o = 0; o < a.length; o += 1)
      n.push(a[o]);
  return n;
}
var Ua = /(top|left|right|bottom|width|height)$/i;
function _e(t, e) {
  for (var r in e)
    Bn(t, r, e[r]);
}
function Bn(t, e, r) {
  r == null ? t.style[e] = "" : typeof r == "number" && Ua.test(e) ? t.style[e] = r + "px" : t.style[e] = r;
}
function Fn(t) {
  var e, r;
  return (r = (e = t.composedPath) === null || e === void 0 ? void 0 : e.call(t)[0]) !== null && r !== void 0 ? r : t.target;
}
function zn(t) {
  return t.getRootNode ? t.getRootNode() : document;
}
var zr = 0;
function ct() {
  return zr += 1, "fc-dom-" + zr;
}
function ft(t) {
  t.preventDefault();
}
function Va(t, e) {
  return function(r) {
    var n = V(r.target, t);
    n && e.call(n, r, n);
  };
}
function Gn(t, e, r, n) {
  var i = Va(r, n);
  return t.addEventListener(e, i), function() {
    t.removeEventListener(e, i);
  };
}
function Wa(t, e, r, n) {
  var i;
  return Gn(t, "mouseover", e, function(a, o) {
    if (o !== i) {
      i = o, r(a, o);
      var s = function(l) {
        i = null, n(l, o), o.removeEventListener("mouseleave", s);
      };
      o.addEventListener("mouseleave", s);
    }
  });
}
var Gr = [
  "webkitTransitionEnd",
  "otransitionend",
  "oTransitionEnd",
  "msTransitionEnd",
  "transitionend"
];
function Ba(t, e) {
  var r = function(n) {
    e(n), Gr.forEach(function(i) {
      t.removeEventListener(i, r);
    });
  };
  Gr.forEach(function(n) {
    t.addEventListener(n, r);
  });
}
function qn(t) {
  return h({ onClick: t }, Yn(t));
}
function Yn(t) {
  return {
    tabIndex: 0,
    onKeyDown: function(e) {
      (e.key === "Enter" || e.key === " ") && (t(e), e.preventDefault());
    }
  };
}
var qr = 0;
function De() {
  return qr += 1, String(qr);
}
function Kt() {
  document.body.classList.add("fc-not-allowed");
}
function Jt() {
  document.body.classList.remove("fc-not-allowed");
}
function Fa(t) {
  t.classList.add("fc-unselectable"), t.addEventListener("selectstart", ft);
}
function za(t) {
  t.classList.remove("fc-unselectable"), t.removeEventListener("selectstart", ft);
}
function Ga(t) {
  t.addEventListener("contextmenu", ft);
}
function qa(t) {
  t.removeEventListener("contextmenu", ft);
}
function Ya(t) {
  var e = [], r = [], n, i;
  for (typeof t == "string" ? r = t.split(/\s*,\s*/) : typeof t == "function" ? r = [t] : Array.isArray(t) && (r = t), n = 0; n < r.length; n += 1)
    i = r[n], typeof i == "string" ? e.push(i.charAt(0) === "-" ? { field: i.substring(1), order: -1 } : { field: i, order: 1 }) : typeof i == "function" && e.push({ func: i });
  return e;
}
function ja(t, e, r) {
  var n, i;
  for (n = 0; n < r.length; n += 1)
    if (i = Za(t, e, r[n]), i)
      return i;
  return 0;
}
function Za(t, e, r) {
  return r.func ? r.func(t, e) : Xa(t[r.field], e[r.field]) * (r.order || 1);
}
function Xa(t, e) {
  return !t && !e ? 0 : e == null ? -1 : t == null ? 1 : typeof t == "string" || typeof e == "string" ? String(t).localeCompare(String(e)) : t - e;
}
function Dt(t, e) {
  var r = String(t);
  return "000".substr(0, e - r.length) + r;
}
function Me(t, e, r) {
  return typeof t == "function" ? t.apply(void 0, e) : typeof t == "string" ? e.reduce(function(n, i, a) {
    return n.replace("$" + a, i || "");
  }, t) : r;
}
function $a(t, e) {
  return t - e;
}
function Ct(t) {
  return t % 1 === 0;
}
function Ka(t) {
  var e = t.querySelector(".fc-scrollgrid-shrink-frame"), r = t.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!e)
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  if (!r)
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  return t.getBoundingClientRect().width - e.getBoundingClientRect().width + // the cell padding+border
  r.getBoundingClientRect().width;
}
var Ja = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function Yr(t, e) {
  var r = J(t);
  return r[2] += e * 7, F(r);
}
function W(t, e) {
  var r = J(t);
  return r[2] += e, F(r);
}
function ue(t, e) {
  var r = J(t);
  return r[6] += e, F(r);
}
function Qa(t, e) {
  return Ce(t, e) / 7;
}
function Ce(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60 * 24);
}
function eo(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60);
}
function to(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60);
}
function ro(t, e) {
  return (e.valueOf() - t.valueOf()) / 1e3;
}
function no(t, e) {
  var r = H(t), n = H(e);
  return {
    years: 0,
    months: 0,
    days: Math.round(Ce(r, n)),
    milliseconds: e.valueOf() - n.valueOf() - (t.valueOf() - r.valueOf())
  };
}
function io(t, e) {
  var r = et(t, e);
  return r !== null && r % 7 === 0 ? r / 7 : null;
}
function et(t, e) {
  return Q(t) === Q(e) ? Math.round(Ce(t, e)) : null;
}
function H(t) {
  return F([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ]);
}
function ao(t) {
  return F([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours()
  ]);
}
function oo(t) {
  return F([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes()
  ]);
}
function so(t) {
  return F([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds()
  ]);
}
function lo(t, e, r) {
  var n = t.getUTCFullYear(), i = Rt(t, n, e, r);
  if (i < 1)
    return Rt(t, n - 1, e, r);
  var a = Rt(t, n + 1, e, r);
  return a >= 1 ? Math.min(i, a) : i;
}
function Rt(t, e, r, n) {
  var i = F([e, 0, 1 + uo(e, r, n)]), a = H(t), o = Math.round(Ce(i, a));
  return Math.floor(o / 7) + 1;
}
function uo(t, e, r) {
  var n = 7 + e - r, i = (7 + F([t, 0, n]).getUTCDay() - e) % 7;
  return -i + n - 1;
}
function jr(t) {
  return [
    t.getFullYear(),
    t.getMonth(),
    t.getDate(),
    t.getHours(),
    t.getMinutes(),
    t.getSeconds(),
    t.getMilliseconds()
  ];
}
function Zr(t) {
  return new Date(
    t[0],
    t[1] || 0,
    t[2] == null ? 1 : t[2],
    // day of month
    t[3] || 0,
    t[4] || 0,
    t[5] || 0
  );
}
function J(t) {
  return [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds(),
    t.getUTCMilliseconds()
  ];
}
function F(t) {
  return t.length === 1 && (t = t.concat([0])), new Date(Date.UTC.apply(Date, t));
}
function jn(t) {
  return !isNaN(t.valueOf());
}
function Q(t) {
  return t.getUTCHours() * 1e3 * 60 * 60 + t.getUTCMinutes() * 1e3 * 60 + t.getUTCSeconds() * 1e3 + t.getUTCMilliseconds();
}
function Qt(t, e, r, n) {
  return {
    instanceId: De(),
    defId: t,
    range: e,
    forcedStartTzo: r ?? null,
    forcedEndTzo: n ?? null
  };
}
var tt = Object.prototype.hasOwnProperty;
function er(t, e) {
  var r = {};
  if (e)
    for (var n in e) {
      for (var i = [], a = t.length - 1; a >= 0; a -= 1) {
        var o = t[a][n];
        if (typeof o == "object" && o)
          i.unshift(o);
        else if (o !== void 0) {
          r[n] = o;
          break;
        }
      }
      i.length && (r[n] = er(i));
    }
  for (var a = t.length - 1; a >= 0; a -= 1) {
    var s = t[a];
    for (var l in s)
      l in r || (r[l] = s[l]);
  }
  return r;
}
function ce(t, e) {
  var r = {};
  for (var n in t)
    e(t[n], n) && (r[n] = t[n]);
  return r;
}
function fe(t, e) {
  var r = {};
  for (var n in t)
    r[n] = e(t[n], n);
  return r;
}
function Zn(t) {
  for (var e = {}, r = 0, n = t; r < n.length; r++) {
    var i = n[r];
    e[i] = !0;
  }
  return e;
}
function tr(t) {
  var e = [];
  for (var r in t)
    e.push(t[r]);
  return e;
}
function X(t, e) {
  if (t === e)
    return !0;
  for (var r in t)
    if (tt.call(t, r) && !(r in e))
      return !1;
  for (var r in e)
    if (tt.call(e, r) && t[r] !== e[r])
      return !1;
  return !0;
}
function Xr(t, e) {
  var r = [];
  for (var n in t)
    tt.call(t, n) && (n in e || r.push(n));
  for (var n in e)
    tt.call(e, n) && t[n] !== e[n] && r.push(n);
  return r;
}
function wt(t, e, r) {
  if (r === void 0 && (r = {}), t === e)
    return !0;
  for (var n in e)
    if (!(n in t && co(t[n], e[n], r[n])))
      return !1;
  for (var n in t)
    if (!(n in e))
      return !1;
  return !0;
}
function co(t, e, r) {
  return t === e || r === !0 ? !0 : r ? r(t, e) : !1;
}
function fo(t, e, r, n) {
  e === void 0 && (e = 0), n === void 0 && (n = 1);
  var i = [];
  r == null && (r = Object.keys(t).length);
  for (var a = e; a < r; a += n) {
    var o = t[a];
    o !== void 0 && i.push(o);
  }
  return i;
}
function vo(t, e, r, n) {
  for (var i = 0; i < n.length; i += 1) {
    var a = n[i].parse(t, r);
    if (a) {
      var o = t.allDay;
      return o == null && (o = e, o == null && (o = a.allDayGuess, o == null && (o = !1))), {
        allDay: o,
        duration: a.duration,
        typeData: a.typeData,
        typeId: i
      };
    }
  }
  return null;
}
function Ee(t, e, r) {
  var n = r.dateEnv, i = r.pluginHooks, a = r.options, o = t.defs, s = t.instances;
  s = ce(s, function(S) {
    return !o[S.defId].recurringDef;
  });
  for (var l in o) {
    var c = o[l];
    if (c.recurringDef) {
      var u = c.recurringDef.duration;
      u || (u = c.allDay ? a.defaultAllDayEventDuration : a.defaultTimedEventDuration);
      for (var f = po(c, u, e, n, i.recurringTypes), v = 0, d = f; v < d.length; v++) {
        var p = d[v], E = Qt(l, {
          start: p,
          end: n.add(p, u)
        });
        s[E.instanceId] = E;
      }
    }
  }
  return { defs: o, instances: s };
}
function po(t, e, r, n, i) {
  var a = i[t.recurringDef.typeId], o = a.expand(t.recurringDef.typeData, {
    start: n.subtract(r.start, e),
    end: r.end
  }, n);
  return t.allDay && (o = o.map(H)), o;
}
var ho = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function k(t, e) {
  var r;
  return typeof t == "string" ? go(t) : typeof t == "object" && t ? $r(t) : typeof t == "number" ? $r((r = {}, r[e || "milliseconds"] = t, r)) : null;
}
function go(t) {
  var e = ho.exec(t);
  if (e) {
    var r = e[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: r * (e[2] ? parseInt(e[2], 10) : 0),
      milliseconds: r * ((e[3] ? parseInt(e[3], 10) : 0) * 60 * 60 * 1e3 + // hours
      (e[4] ? parseInt(e[4], 10) : 0) * 60 * 1e3 + // minutes
      (e[5] ? parseInt(e[5], 10) : 0) * 1e3 + // seconds
      (e[6] ? parseInt(e[6], 10) : 0))
    };
  }
  return null;
}
function $r(t) {
  var e = {
    years: t.years || t.year || 0,
    months: t.months || t.month || 0,
    days: t.days || t.day || 0,
    milliseconds: (t.hours || t.hour || 0) * 60 * 60 * 1e3 + // hours
    (t.minutes || t.minute || 0) * 60 * 1e3 + // minutes
    (t.seconds || t.second || 0) * 1e3 + // seconds
    (t.milliseconds || t.millisecond || t.ms || 0)
    // ms
  }, r = t.weeks || t.week;
  return r && (e.days += r * 7, e.specifiedWeeks = !0), e;
}
function mo(t, e) {
  return t.years === e.years && t.months === e.months && t.days === e.days && t.milliseconds === e.milliseconds;
}
function yo(t, e) {
  return {
    years: t.years - e.years,
    months: t.months - e.months,
    days: t.days - e.days,
    milliseconds: t.milliseconds - e.milliseconds
  };
}
function Eo(t) {
  return ge(t) / 365;
}
function So(t) {
  return ge(t) / 30;
}
function ge(t) {
  return Ne(t) / 864e5;
}
function Ne(t) {
  return t.years * (365 * 864e5) + t.months * (30 * 864e5) + t.days * 864e5 + t.milliseconds;
}
function Ut(t) {
  var e = t.milliseconds;
  if (e) {
    if (e % 1e3 !== 0)
      return { unit: "millisecond", value: e };
    if (e % (1e3 * 60) !== 0)
      return { unit: "second", value: e / 1e3 };
    if (e % (1e3 * 60 * 60) !== 0)
      return { unit: "minute", value: e / (1e3 * 60) };
    if (e)
      return { unit: "hour", value: e / (1e3 * 60 * 60) };
  }
  return t.days ? t.specifiedWeeks && t.days % 7 === 0 ? { unit: "week", value: t.days / 7 } : { unit: "day", value: t.days } : t.months ? { unit: "month", value: t.months } : t.years ? { unit: "year", value: t.years } : { unit: "millisecond", value: 0 };
}
function bo(t, e, r) {
  r === void 0 && (r = !1);
  var n = t.toISOString();
  return n = n.replace(".000", ""), r && (n = n.replace("T00:00:00Z", "")), n.length > 10 && (e == null ? n = n.replace("Z", "") : e !== 0 && (n = n.replace("Z", rr(e, !0)))), n;
}
function Xn(t) {
  return t.toISOString().replace(/T.*$/, "");
}
function rr(t, e) {
  e === void 0 && (e = !1);
  var r = t < 0 ? "-" : "+", n = Math.abs(t), i = Math.floor(n / 60), a = Math.round(n % 60);
  return e ? r + Dt(i, 2) + ":" + Dt(a, 2) : "GMT" + r + i + (a ? ":" + Dt(a, 2) : "");
}
function Se(t, e, r) {
  if (t === e)
    return !0;
  var n = t.length, i;
  if (n !== e.length)
    return !1;
  for (i = 0; i < n; i += 1)
    if (!(r ? r(t[i], e[i]) : t[i] === e[i]))
      return !1;
  return !0;
}
function M(t, e, r) {
  var n, i;
  return function() {
    for (var a = [], o = 0; o < arguments.length; o++)
      a[o] = arguments[o];
    if (!n)
      i = t.apply(this, a);
    else if (!Se(n, a)) {
      r && r(i);
      var s = t.apply(this, a);
      (!e || !e(s, i)) && (i = s);
    }
    return n = a, i;
  };
}
function Ze(t, e, r) {
  var n = this, i, a;
  return function(o) {
    if (!i)
      a = t.call(n, o);
    else if (!X(i, o)) {
      r && r(a);
      var s = t.call(n, o);
      (!e || !e(s, a)) && (a = s);
    }
    return i = o, a;
  };
}
var Kr = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
}, rt = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
}, Fe = /\s*([ap])\.?m\.?/i, Do = /,/g, Co = /\s+/g, Ro = /\u200e/g, wo = /UTC|GMT/, To = (
  /** @class */
  function() {
    function t(e) {
      var r = {}, n = {}, i = 0;
      for (var a in e)
        a in Kr ? (n[a] = e[a], i = Math.max(Kr[a], i)) : (r[a] = e[a], a in rt && (i = Math.max(rt[a], i)));
      this.standardDateProps = r, this.extendedSettings = n, this.severity = i, this.buildFormattingFunc = M(Jr);
    }
    return t.prototype.format = function(e, r) {
      return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, r)(e);
    }, t.prototype.formatRange = function(e, r, n, i) {
      var a = this, o = a.standardDateProps, s = a.extendedSettings, l = Ho(e.marker, r.marker, n.calendarSystem);
      if (!l)
        return this.format(e, n);
      var c = l;
      c > 1 && // the two dates are different in a way that's larger scale than time
      (o.year === "numeric" || o.year === "2-digit") && (o.month === "numeric" || o.month === "2-digit") && (o.day === "numeric" || o.day === "2-digit") && (c = 1);
      var u = this.format(e, n), f = this.format(r, n);
      if (u === f)
        return u;
      var v = xo(o, c), d = Jr(v, s, n), p = d(e), E = d(r), S = No(u, p, f, E), g = s.separator || i || n.defaultSeparator || "";
      return S ? S.before + p + g + E + S.after : u + g + f;
    }, t.prototype.getLargestUnit = function() {
      switch (this.severity) {
        case 7:
        case 6:
        case 5:
          return "year";
        case 4:
          return "month";
        case 3:
          return "week";
        case 2:
          return "day";
        default:
          return "time";
      }
    }, t;
  }()
);
function Jr(t, e, r) {
  var n = Object.keys(t).length;
  return n === 1 && t.timeZoneName === "short" ? function(i) {
    return rr(i.timeZoneOffset);
  } : n === 0 && e.week ? function(i) {
    return Po(r.computeWeekNumber(i.marker), r.weekText, r.weekTextLong, r.locale, e.week);
  } : _o(t, e, r);
}
function _o(t, e, r) {
  t = h({}, t), e = h({}, e), Mo(t, e), t.timeZone = "UTC";
  var n = new Intl.DateTimeFormat(r.locale.codes, t), i;
  if (e.omitZeroMinute) {
    var a = h({}, t);
    delete a.minute, i = new Intl.DateTimeFormat(r.locale.codes, a);
  }
  return function(o) {
    var s = o.marker, l;
    i && !s.getUTCMinutes() ? l = i : l = n;
    var c = l.format(s);
    return ko(c, o, t, e, r);
  };
}
function Mo(t, e) {
  t.timeZoneName && (t.hour || (t.hour = "2-digit"), t.minute || (t.minute = "2-digit")), t.timeZoneName === "long" && (t.timeZoneName = "short"), e.omitZeroMinute && (t.second || t.millisecond) && delete e.omitZeroMinute;
}
function ko(t, e, r, n, i) {
  return t = t.replace(Ro, ""), r.timeZoneName === "short" && (t = Io(t, i.timeZone === "UTC" || e.timeZoneOffset == null ? "UTC" : (
    // important to normalize for IE, which does "GMT"
    rr(e.timeZoneOffset)
  ))), n.omitCommas && (t = t.replace(Do, "").trim()), n.omitZeroMinute && (t = t.replace(":00", "")), n.meridiem === !1 ? t = t.replace(Fe, "").trim() : n.meridiem === "narrow" ? t = t.replace(Fe, function(a, o) {
    return o.toLocaleLowerCase();
  }) : n.meridiem === "short" ? t = t.replace(Fe, function(a, o) {
    return o.toLocaleLowerCase() + "m";
  }) : n.meridiem === "lowercase" && (t = t.replace(Fe, function(a) {
    return a.toLocaleLowerCase();
  })), t = t.replace(Co, " "), t = t.trim(), t;
}
function Io(t, e) {
  var r = !1;
  return t = t.replace(wo, function() {
    return r = !0, e;
  }), r || (t += " " + e), t;
}
function Po(t, e, r, n, i) {
  var a = [];
  return i === "long" ? a.push(r) : (i === "short" || i === "narrow") && a.push(e), (i === "long" || i === "short") && a.push(" "), a.push(n.simpleNumberFormat.format(t)), n.options.direction === "rtl" && a.reverse(), a.join("");
}
function Ho(t, e, r) {
  return r.getMarkerYear(t) !== r.getMarkerYear(e) ? 5 : r.getMarkerMonth(t) !== r.getMarkerMonth(e) ? 4 : r.getMarkerDay(t) !== r.getMarkerDay(e) ? 2 : Q(t) !== Q(e) ? 1 : 0;
}
function xo(t, e) {
  var r = {};
  for (var n in t)
    (!(n in rt) || // not a date part prop (like timeZone)
    rt[n] <= e) && (r[n] = t[n]);
  return r;
}
function No(t, e, r, n) {
  for (var i = 0; i < t.length; ) {
    var a = t.indexOf(e, i);
    if (a === -1)
      break;
    var o = t.substr(0, a);
    i = a + e.length;
    for (var s = t.substr(i), l = 0; l < r.length; ) {
      var c = r.indexOf(n, l);
      if (c === -1)
        break;
      var u = r.substr(0, c);
      l = c + n.length;
      var f = r.substr(l);
      if (o === u && s === f)
        return {
          before: o,
          after: s
        };
    }
  }
  return null;
}
function Qr(t, e) {
  var r = e.markerToArray(t.marker);
  return {
    marker: t.marker,
    timeZoneOffset: t.timeZoneOffset,
    array: r,
    year: r[0],
    month: r[1],
    day: r[2],
    hour: r[3],
    minute: r[4],
    second: r[5],
    millisecond: r[6]
  };
}
function nt(t, e, r, n) {
  var i = Qr(t, r.calendarSystem), a = e ? Qr(e, r.calendarSystem) : null;
  return {
    date: i,
    start: i,
    end: a,
    timeZone: r.timeZone,
    localeCodes: r.locale.codes,
    defaultSeparator: n || r.defaultSeparator
  };
}
var Ao = (
  /** @class */
  function() {
    function t(e) {
      this.cmdStr = e;
    }
    return t.prototype.format = function(e, r, n) {
      return r.cmdFormatter(this.cmdStr, nt(e, null, r, n));
    }, t.prototype.formatRange = function(e, r, n, i) {
      return n.cmdFormatter(this.cmdStr, nt(e, r, n, i));
    }, t;
  }()
), Oo = (
  /** @class */
  function() {
    function t(e) {
      this.func = e;
    }
    return t.prototype.format = function(e, r, n) {
      return this.func(nt(e, null, r, n));
    }, t.prototype.formatRange = function(e, r, n, i) {
      return this.func(nt(e, r, n, i));
    }, t;
  }()
);
function U(t) {
  return typeof t == "object" && t ? new To(t) : typeof t == "string" ? new Ao(t) : typeof t == "function" ? new Oo(t) : null;
}
var en = {
  navLinkDayClick: y,
  navLinkWeekClick: y,
  duration: k,
  bootstrapFontAwesome: y,
  buttonIcons: y,
  customButtons: y,
  defaultAllDayEventDuration: k,
  defaultTimedEventDuration: k,
  nextDayThreshold: k,
  scrollTime: k,
  scrollTimeReset: Boolean,
  slotMinTime: k,
  slotMaxTime: k,
  dayPopoverFormat: U,
  slotDuration: k,
  snapDuration: k,
  headerToolbar: y,
  footerToolbar: y,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: U,
  dayHeaderClassNames: y,
  dayHeaderContent: y,
  dayHeaderDidMount: y,
  dayHeaderWillUnmount: y,
  dayCellClassNames: y,
  dayCellContent: y,
  dayCellDidMount: y,
  dayCellWillUnmount: y,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: y,
  weekNumbers: Boolean,
  weekNumberClassNames: y,
  weekNumberContent: y,
  weekNumberDidMount: y,
  weekNumberWillUnmount: y,
  editable: Boolean,
  viewClassNames: y,
  viewDidMount: y,
  viewWillUnmount: y,
  nowIndicator: Boolean,
  nowIndicatorClassNames: y,
  nowIndicatorContent: y,
  nowIndicatorDidMount: y,
  nowIndicatorWillUnmount: y,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: y,
  locale: y,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: y,
  eventOrder: Ya,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: y,
  contentHeight: y,
  direction: String,
  weekNumberFormat: U,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: y,
  initialDate: y,
  now: y,
  eventDataTransform: y,
  stickyHeaderDates: y,
  stickyFooterScrollbar: y,
  viewHeight: y,
  defaultAllDay: Boolean,
  eventSourceFailure: y,
  eventSourceSuccess: y,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: y,
  eventConstraint: y,
  eventAllow: y,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: y,
  eventContent: y,
  eventDidMount: y,
  eventWillUnmount: y,
  selectConstraint: y,
  selectOverlap: y,
  selectAllow: y,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: y,
  slotLaneClassNames: y,
  slotLaneContent: y,
  slotLaneDidMount: y,
  slotLaneWillUnmount: y,
  slotLabelClassNames: y,
  slotLabelContent: y,
  slotLabelDidMount: y,
  slotLabelWillUnmount: y,
  dayMaxEvents: y,
  dayMaxEventRows: y,
  dayMinWidth: Number,
  slotLabelInterval: k,
  allDayText: String,
  allDayClassNames: y,
  allDayContent: y,
  allDayDidMount: y,
  allDayWillUnmount: y,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: U,
  rerenderDelay: Number,
  moreLinkText: y,
  moreLinkHint: y,
  selectMinDistance: Number,
  selectable: Boolean,
  selectLongPressDelay: Number,
  eventLongPressDelay: Number,
  selectMirror: Boolean,
  eventMaxStack: Number,
  eventMinHeight: Number,
  eventMinWidth: Number,
  eventShortHeight: Number,
  slotEventOverlap: Boolean,
  plugins: y,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: k,
  hiddenDays: y,
  monthMode: Boolean,
  fixedWeekCount: Boolean,
  validRange: y,
  visibleRange: y,
  titleFormat: y,
  eventInteractive: Boolean,
  // only used by list-view, but languages define the value, so we need it in base options
  noEventsText: String,
  viewHint: y,
  navLinkHint: y,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: y,
  moreLinkClassNames: y,
  moreLinkContent: y,
  moreLinkDidMount: y,
  moreLinkWillUnmount: y
}, ke = {
  eventDisplay: "auto",
  defaultRangeSeparator: " - ",
  titleRangeSeparator: " – ",
  defaultTimedEventDuration: "01:00:00",
  defaultAllDayEventDuration: { day: 1 },
  forceEventDuration: !1,
  nextDayThreshold: "00:00:00",
  dayHeaders: !0,
  initialView: "",
  aspectRatio: 1.35,
  headerToolbar: {
    start: "title",
    center: "",
    end: "today prev,next"
  },
  weekends: !0,
  weekNumbers: !1,
  weekNumberCalculation: "local",
  editable: !1,
  nowIndicator: !1,
  scrollTime: "06:00:00",
  scrollTimeReset: !0,
  slotMinTime: "00:00:00",
  slotMaxTime: "24:00:00",
  showNonCurrentDates: !0,
  lazyFetching: !0,
  startParam: "start",
  endParam: "end",
  timeZoneParam: "timeZone",
  timeZone: "local",
  locales: [],
  locale: "",
  themeSystem: "standard",
  dragRevertDuration: 500,
  dragScroll: !0,
  allDayMaintainDuration: !1,
  unselectAuto: !0,
  dropAccept: "*",
  eventOrder: "start,-duration,allDay,title",
  dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" },
  handleWindowResize: !0,
  windowResizeDelay: 100,
  longPressDelay: 1e3,
  eventDragMinDistance: 5,
  expandRows: !1,
  navLinks: !1,
  selectable: !1,
  eventMinHeight: 15,
  eventMinWidth: 30,
  eventShortHeight: 30
}, tn = {
  datesSet: y,
  eventsSet: y,
  eventAdd: y,
  eventChange: y,
  eventRemove: y,
  windowResize: y,
  eventClick: y,
  eventMouseEnter: y,
  eventMouseLeave: y,
  select: y,
  unselect: y,
  loading: y,
  // internal
  _unmount: y,
  _beforeprint: y,
  _afterprint: y,
  _noEventDrop: y,
  _noEventResize: y,
  _resize: y,
  _scrollRequest: y
}, rn = {
  buttonText: y,
  buttonHints: y,
  views: y,
  plugins: y,
  initialEvents: y,
  events: y,
  eventSources: y
}, ne = {
  headerToolbar: ve,
  footerToolbar: ve,
  buttonText: ve,
  buttonHints: ve,
  buttonIcons: ve,
  dateIncrement: ve
};
function ve(t, e) {
  return typeof t == "object" && typeof e == "object" && t && e ? X(t, e) : t === e;
}
var Lo = {
  type: String,
  component: y,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: y,
  usesMinMaxTime: Boolean,
  classNames: y,
  content: y,
  didMount: y,
  willUnmount: y
};
function Tt(t) {
  return er(t, ne);
}
function nr(t, e) {
  var r = {}, n = {};
  for (var i in e)
    i in t && (r[i] = e[i](t[i]));
  for (var i in t)
    i in e || (n[i] = t[i]);
  return { refined: r, extra: n };
}
function y(t) {
  return t;
}
function it(t, e, r, n) {
  for (var i = Y(), a = or(r), o = 0, s = t; o < s.length; o++) {
    var l = s[o], c = Kn(l, e, r, n, a);
    c && Vt(c, i);
  }
  return i;
}
function Vt(t, e) {
  return e === void 0 && (e = Y()), e.defs[t.def.defId] = t.def, t.instance && (e.instances[t.instance.instanceId] = t.instance), e;
}
function ir(t, e) {
  var r = t.instances[e];
  if (r) {
    var n = t.defs[r.defId], i = dt(t, function(a) {
      return Uo(n, a);
    });
    return i.defs[n.defId] = n, i.instances[r.instanceId] = r, i;
  }
  return Y();
}
function Uo(t, e) {
  return !!(t.groupId && t.groupId === e.groupId);
}
function Y() {
  return { defs: {}, instances: {} };
}
function ar(t, e) {
  return {
    defs: h(h({}, t.defs), e.defs),
    instances: h(h({}, t.instances), e.instances)
  };
}
function dt(t, e) {
  var r = ce(t.defs, e), n = ce(t.instances, function(i) {
    return r[i.defId];
  });
  return { defs: r, instances: n };
}
function Vo(t, e) {
  var r = t.defs, n = t.instances, i = {}, a = {};
  for (var o in r)
    e.defs[o] || (i[o] = r[o]);
  for (var s in n)
    !e.instances[s] && // not explicitly excluded
    i[n[s].defId] && (a[s] = n[s]);
  return {
    defs: i,
    instances: a
  };
}
function Wo(t, e) {
  return Array.isArray(t) ? it(t, null, e, !0) : typeof t == "object" && t ? it([t], null, e, !0) : t != null ? String(t) : null;
}
function Wt(t) {
  return Array.isArray(t) ? t : typeof t == "string" ? t.split(/\s+/) : [];
}
var at = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: y,
  overlap: y,
  allow: y,
  className: Wt,
  classNames: Wt,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
}, Bo = {
  display: null,
  startEditable: null,
  durationEditable: null,
  constraints: [],
  overlap: null,
  allows: [],
  backgroundColor: "",
  borderColor: "",
  textColor: "",
  classNames: []
};
function ot(t, e) {
  var r = Wo(t.constraint, e);
  return {
    display: t.display || null,
    startEditable: t.startEditable != null ? t.startEditable : t.editable,
    durationEditable: t.durationEditable != null ? t.durationEditable : t.editable,
    constraints: r != null ? [r] : [],
    overlap: t.overlap != null ? t.overlap : null,
    allows: t.allow != null ? [t.allow] : [],
    backgroundColor: t.backgroundColor || t.color || "",
    borderColor: t.borderColor || t.color || "",
    textColor: t.textColor || "",
    classNames: (t.className || []).concat(t.classNames || [])
    // join singular and plural
  };
}
function Fo(t) {
  return t.reduce(zo, Bo);
}
function zo(t, e) {
  return {
    display: e.display != null ? e.display : t.display,
    startEditable: e.startEditable != null ? e.startEditable : t.startEditable,
    durationEditable: e.durationEditable != null ? e.durationEditable : t.durationEditable,
    constraints: t.constraints.concat(e.constraints),
    overlap: typeof e.overlap == "boolean" ? e.overlap : t.overlap,
    allows: t.allows.concat(e.allows),
    backgroundColor: e.backgroundColor || t.backgroundColor,
    borderColor: e.borderColor || t.borderColor,
    textColor: e.textColor || t.textColor,
    classNames: t.classNames.concat(e.classNames)
  };
}
var Xe = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
}, $n = {
  start: y,
  end: y,
  date: y,
  allDay: Boolean
}, Go = h(h(h({}, Xe), $n), { extendedProps: y });
function Kn(t, e, r, n, i) {
  i === void 0 && (i = or(r));
  var a = Jn(t, r, i), o = a.refined, s = a.extra, l = Yo(e, r), c = vo(o, l, r.dateEnv, r.pluginHooks.recurringTypes);
  if (c) {
    var u = Bt(o, s, e ? e.sourceId : "", c.allDay, !!c.duration, r);
    return u.recurringDef = {
      typeId: c.typeId,
      typeData: c.typeData,
      duration: c.duration
    }, { def: u, instance: null };
  }
  var f = qo(o, l, r, n);
  if (f) {
    var u = Bt(o, s, e ? e.sourceId : "", f.allDay, f.hasEnd, r), v = Qt(u.defId, f.range, f.forcedStartTzo, f.forcedEndTzo);
    return { def: u, instance: v };
  }
  return null;
}
function Jn(t, e, r) {
  return r === void 0 && (r = or(e)), nr(t, r);
}
function or(t) {
  return h(h(h({}, at), Go), t.pluginHooks.eventRefiners);
}
function Bt(t, e, r, n, i, a) {
  for (var o = {
    title: t.title || "",
    groupId: t.groupId || "",
    publicId: t.id || "",
    url: t.url || "",
    recurringDef: null,
    defId: De(),
    sourceId: r,
    allDay: n,
    hasEnd: i,
    interactive: t.interactive,
    ui: ot(t, a),
    extendedProps: h(h({}, t.extendedProps || {}), e)
  }, s = 0, l = a.pluginHooks.eventDefMemberAdders; s < l.length; s++) {
    var c = l[s];
    h(o, c(t));
  }
  return Object.freeze(o.ui.classNames), Object.freeze(o.extendedProps), o;
}
function qo(t, e, r, n) {
  var i = t.allDay, a, o = null, s = !1, l, c = null, u = t.start != null ? t.start : t.date;
  if (a = r.dateEnv.createMarkerMeta(u), a)
    o = a.marker;
  else if (!n)
    return null;
  return t.end != null && (l = r.dateEnv.createMarkerMeta(t.end)), i == null && (e != null ? i = e : i = (!a || a.isTimeUnspecified) && (!l || l.isTimeUnspecified)), i && o && (o = H(o)), l && (c = l.marker, i && (c = H(c)), o && c <= o && (c = null)), c ? s = !0 : n || (s = r.options.forceEventDuration || !1, c = r.dateEnv.add(o, i ? r.options.defaultAllDayEventDuration : r.options.defaultTimedEventDuration)), {
    allDay: i,
    hasEnd: s,
    range: { start: o, end: c },
    forcedStartTzo: a ? a.forcedTzo : null,
    forcedEndTzo: l ? l.forcedTzo : null
  };
}
function Yo(t, e) {
  var r = null;
  return t && (r = t.defaultAllDay), r == null && (r = e.options.defaultAllDay), r;
}
function Qn(t) {
  var e = Math.floor(Ce(t.start, t.end)) || 1, r = H(t.start), n = W(r, e);
  return { start: r, end: n };
}
function ei(t, e) {
  e === void 0 && (e = k(0));
  var r = null, n = null;
  if (t.end) {
    n = H(t.end);
    var i = t.end.valueOf() - n.valueOf();
    i && i >= Ne(e) && (n = W(n, 1));
  }
  return t.start && (r = H(t.start), n && n <= r && (n = W(r, 1))), { start: r, end: n };
}
function he(t, e, r, n) {
  return n === "year" ? k(r.diffWholeYears(t, e), "year") : n === "month" ? k(r.diffWholeMonths(t, e), "month") : no(t, e);
}
function jo(t, e) {
  var r = null, n = null;
  return t.start && (r = e.createMarker(t.start)), t.end && (n = e.createMarker(t.end)), !r && !n || r && n && n < r ? null : { start: r, end: n };
}
function nn(t, e) {
  var r = [], n = e.start, i, a;
  for (t.sort(Zo), i = 0; i < t.length; i += 1)
    a = t[i], a.start > n && r.push({ start: n, end: a.start }), a.end > n && (n = a.end);
  return n < e.end && r.push({ start: n, end: e.end }), r;
}
function Zo(t, e) {
  return t.start.valueOf() - e.start.valueOf();
}
function Ae(t, e) {
  var r = t.start, n = t.end, i = null;
  return e.start !== null && (r === null ? r = e.start : r = new Date(Math.max(r.valueOf(), e.start.valueOf()))), e.end != null && (n === null ? n = e.end : n = new Date(Math.min(n.valueOf(), e.end.valueOf()))), (r === null || n === null || r < n) && (i = { start: r, end: n }), i;
}
function Xo(t, e) {
  return (t.start === null ? null : t.start.valueOf()) === (e.start === null ? null : e.start.valueOf()) && (t.end === null ? null : t.end.valueOf()) === (e.end === null ? null : e.end.valueOf());
}
function sr(t, e) {
  return (t.end === null || e.start === null || t.end > e.start) && (t.start === null || e.end === null || t.start < e.end);
}
function vt(t, e) {
  return (t.start === null || e.start !== null && e.start >= t.start) && (t.end === null || e.end !== null && e.end <= t.end);
}
function oe(t, e) {
  return (t.start === null || e >= t.start) && (t.end === null || e < t.end);
}
function $o(t, e) {
  return e.start != null && t < e.start ? e.start : e.end != null && t >= e.end ? new Date(e.end.valueOf() - 1) : t;
}
function an(t, e, r, n) {
  var i = {}, a = {}, o = {}, s = [], l = [], c = st(t.defs, e);
  for (var u in t.defs) {
    var f = t.defs[u], v = c[f.defId];
    v.display === "inverse-background" && (f.groupId ? (i[f.groupId] = [], o[f.groupId] || (o[f.groupId] = f)) : a[u] = []);
  }
  for (var d in t.instances) {
    var p = t.instances[d], f = t.defs[p.defId], v = c[f.defId], E = p.range, S = !f.allDay && n ? ei(E, n) : E, g = Ae(S, r);
    g && (v.display === "inverse-background" ? f.groupId ? i[f.groupId].push(g) : a[p.defId].push(g) : v.display !== "none" && (v.display === "background" ? s : l).push({
      def: f,
      ui: v,
      instance: p,
      range: g,
      isStart: S.start && S.start.valueOf() === g.start.valueOf(),
      isEnd: S.end && S.end.valueOf() === g.end.valueOf()
    }));
  }
  for (var b in i)
    for (var C = i[b], D = nn(C, r), I = 0, _ = D; I < _.length; I++) {
      var P = _[I], f = o[b], v = c[f.defId];
      s.push({
        def: f,
        ui: v,
        instance: null,
        range: P,
        isStart: !1,
        isEnd: !1
      });
    }
  for (var u in a)
    for (var C = a[u], D = nn(C, r), w = 0, N = D; w < N.length; w++) {
      var P = N[w];
      s.push({
        def: t.defs[u],
        ui: c[u],
        instance: null,
        range: P,
        isStart: !1,
        isEnd: !1
      });
    }
  return { bg: s, fg: l };
}
function on(t, e) {
  t.fcSeg = e;
}
function be(t) {
  return t.fcSeg || t.parentNode.fcSeg || // for the harness
  null;
}
function st(t, e) {
  return fe(t, function(r) {
    return ti(r, e);
  });
}
function ti(t, e) {
  var r = [];
  return e[""] && r.push(e[""]), e[t.defId] && r.push(e[t.defId]), r.push(t.ui), Fo(r);
}
function Ko(t, e) {
  var r = t.map(Jo);
  return r.sort(function(n, i) {
    return ja(n, i, e);
  }), r.map(function(n) {
    return n._seg;
  });
}
function Jo(t) {
  var e = t.eventRange, r = e.def, n = e.instance ? e.instance.range : e.range, i = n.start ? n.start.valueOf() : 0, a = n.end ? n.end.valueOf() : 0;
  return h(h(h({}, r.extendedProps), r), {
    id: r.publicId,
    start: i,
    end: a,
    duration: a - i,
    allDay: Number(r.allDay),
    _seg: t
  });
}
function Qo(t, e) {
  for (var r = e.pluginHooks, n = r.isDraggableTransformers, i = t.eventRange, a = i.def, o = i.ui, s = o.startEditable, l = 0, c = n; l < c.length; l++) {
    var u = c[l];
    s = u(s, a, o, e);
  }
  return s;
}
function es(t, e) {
  return t.isStart && t.eventRange.ui.durationEditable && e.options.eventResizableFromStart;
}
function ts(t, e) {
  return t.isEnd && t.eventRange.ui.durationEditable;
}
function ri(t, e, r, n, i, a, o) {
  var s = r.dateEnv, l = r.options, c = l.displayEventTime, u = l.displayEventEnd, f = t.eventRange.def, v = t.eventRange.instance;
  c == null && (c = n !== !1), u == null && (u = i !== !1);
  var d = v.range.start, p = v.range.end, E = a || t.start || t.eventRange.range.start, S = o || t.end || t.eventRange.range.end, g = H(d).valueOf() === H(E).valueOf(), b = H(ue(p, -1)).valueOf() === H(ue(S, -1)).valueOf();
  return c && !f.allDay && (g || b) ? (E = g ? d : E, S = b ? p : S, u && f.hasEnd ? s.formatRange(E, S, e, {
    forcedStartTzo: a ? null : v.forcedStartTzo,
    forcedEndTzo: o ? null : v.forcedEndTzo
  }) : s.format(E, e, {
    forcedTzo: a ? null : v.forcedStartTzo
    // nooooo, same
  })) : "";
}
function Ie(t, e, r) {
  var n = t.eventRange.range;
  return {
    isPast: n.end < (r || e.start),
    isFuture: n.start >= (r || e.end),
    isToday: e && oe(e, n.start)
  };
}
function rs(t) {
  var e = ["fc-event"];
  return t.isMirror && e.push("fc-event-mirror"), t.isDraggable && e.push("fc-event-draggable"), (t.isStartResizable || t.isEndResizable) && e.push("fc-event-resizable"), t.isDragging && e.push("fc-event-dragging"), t.isResizing && e.push("fc-event-resizing"), t.isSelected && e.push("fc-event-selected"), t.isStart && e.push("fc-event-start"), t.isEnd && e.push("fc-event-end"), t.isPast && e.push("fc-event-past"), t.isToday && e.push("fc-event-today"), t.isFuture && e.push("fc-event-future"), e;
}
function ns(t) {
  return t.instance ? t.instance.instanceId : t.def.defId + ":" + t.range.start.toISOString();
}
function ni(t, e) {
  var r = t.eventRange, n = r.def, i = r.instance, a = n.url;
  if (a)
    return { href: a };
  var o = e.emitter, s = e.options, l = s.eventInteractive;
  return l == null && (l = n.interactive, l == null && (l = !!o.hasHandlers("eventClick"))), l ? Yn(function(c) {
    o.trigger("eventClick", {
      el: c.target,
      event: new O(e, n, i),
      jsEvent: c,
      view: e.viewApi
    });
  }) : {};
}
var is = {
  start: y,
  end: y,
  allDay: Boolean
};
function as(t, e, r) {
  var n = os(t, e), i = n.range;
  if (!i.start)
    return null;
  if (!i.end) {
    if (r == null)
      return null;
    i.end = e.add(i.start, r);
  }
  return n;
}
function os(t, e) {
  var r = nr(t, is), n = r.refined, i = r.extra, a = n.start ? e.createMarkerMeta(n.start) : null, o = n.end ? e.createMarkerMeta(n.end) : null, s = n.allDay;
  return s == null && (s = a && a.isTimeUnspecified && (!o || o.isTimeUnspecified)), h({ range: {
    start: a ? a.marker : null,
    end: o ? o.marker : null
  }, allDay: s }, i);
}
function ss(t, e) {
  return Xo(t.range, e.range) && t.allDay === e.allDay && ls(t, e);
}
function ls(t, e) {
  for (var r in e)
    if (r !== "range" && r !== "allDay" && t[r] !== e[r])
      return !1;
  for (var r in t)
    if (!(r in e))
      return !1;
  return !0;
}
function us(t, e) {
  return h(h({}, ai(t.range, e, t.allDay)), { allDay: t.allDay });
}
function ii(t, e, r) {
  return h(h({}, ai(t, e, r)), { timeZone: e.timeZone });
}
function ai(t, e, r) {
  return {
    start: e.toDate(t.start),
    end: e.toDate(t.end),
    startStr: e.formatIso(t.start, { omitTime: r }),
    endStr: e.formatIso(t.end, { omitTime: r })
  };
}
function cs(t, e, r) {
  var n = Jn({ editable: !1 }, r), i = Bt(
    n.refined,
    n.extra,
    "",
    // sourceId
    t.allDay,
    !0,
    // hasEnd
    r
  );
  return {
    def: i,
    ui: ti(i, e),
    instance: Qt(i.defId, t.range),
    range: t.range,
    isStart: !0,
    isEnd: !0
  };
}
function oi(t, e, r) {
  r.emitter.trigger("select", h(h({}, lr(t, r)), { jsEvent: e ? e.origEvent : null, view: r.viewApi || r.calendarApi.view }));
}
function fs(t, e) {
  e.emitter.trigger("unselect", {
    jsEvent: t ? t.origEvent : null,
    view: e.viewApi || e.calendarApi.view
  });
}
function lr(t, e) {
  for (var r = {}, n = 0, i = e.pluginHooks.dateSpanTransforms; n < i.length; n++) {
    var a = i[n];
    h(r, a(t, e));
  }
  return h(r, us(t, e.dateEnv)), r;
}
function sn(t, e, r) {
  var n = r.dateEnv, i = r.options, a = e;
  return t ? (a = H(a), a = n.add(a, i.defaultAllDayEventDuration)) : a = n.add(a, i.defaultTimedEventDuration), a;
}
function ur(t, e, r, n) {
  var i = st(t.defs, e), a = Y();
  for (var o in t.defs) {
    var s = t.defs[o];
    a.defs[o] = ds(s, i[o], r, n);
  }
  for (var l in t.instances) {
    var c = t.instances[l], s = a.defs[c.defId];
    a.instances[l] = vs(c, s, i[c.defId], r, n);
  }
  return a;
}
function ds(t, e, r, n) {
  var i = r.standardProps || {};
  i.hasEnd == null && e.durationEditable && (r.startDelta || r.endDelta) && (i.hasEnd = !0);
  var a = h(h(h({}, t), i), { ui: h(h({}, t.ui), i.ui) });
  r.extendedProps && (a.extendedProps = h(h({}, a.extendedProps), r.extendedProps));
  for (var o = 0, s = n.pluginHooks.eventDefMutationAppliers; o < s.length; o++) {
    var l = s[o];
    l(a, r, n);
  }
  return !a.hasEnd && n.options.forceEventDuration && (a.hasEnd = !0), a;
}
function vs(t, e, r, n, i) {
  var a = i.dateEnv, o = n.standardProps && n.standardProps.allDay === !0, s = n.standardProps && n.standardProps.hasEnd === !1, l = h({}, t);
  return o && (l.range = Qn(l.range)), n.datesDelta && r.startEditable && (l.range = {
    start: a.add(l.range.start, n.datesDelta),
    end: a.add(l.range.end, n.datesDelta)
  }), n.startDelta && r.durationEditable && (l.range = {
    start: a.add(l.range.start, n.startDelta),
    end: l.range.end
  }), n.endDelta && r.durationEditable && (l.range = {
    start: l.range.start,
    end: a.add(l.range.end, n.endDelta)
  }), s && (l.range = {
    start: l.range.start,
    end: sn(e.allDay, l.range.start, i)
  }), e.allDay && (l.range = {
    start: H(l.range.start),
    end: H(l.range.end)
  }), l.range.end < l.range.start && (l.range.end = sn(e.allDay, l.range.start, i)), l;
}
var ps = (
  /** @class */
  function() {
    function t(e, r, n) {
      this.type = e, this.getCurrentData = r, this.dateEnv = n;
    }
    return Object.defineProperty(t.prototype, "calendar", {
      get: function() {
        return this.getCurrentData().calendarApi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "title", {
      get: function() {
        return this.getCurrentData().viewTitle;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "activeStart", {
      get: function() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "activeEnd", {
      get: function() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "currentStart", {
      get: function() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "currentEnd", {
      get: function() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.getOption = function(e) {
      return this.getCurrentData().options[e];
    }, t;
  }()
), hs = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: y,
  eventDataTransform: y,
  // for any network-related sources
  success: y,
  failure: y
};
function si(t, e, r) {
  r === void 0 && (r = li(e));
  var n;
  if (typeof t == "string" ? n = { url: t } : typeof t == "function" || Array.isArray(t) ? n = { events: t } : typeof t == "object" && t && (n = t), n) {
    var i = nr(n, r), a = i.refined, o = i.extra, s = gs(a, e);
    if (s)
      return {
        _raw: t,
        isFetching: !1,
        latestFetchId: "",
        fetchRange: null,
        defaultAllDay: a.defaultAllDay,
        eventDataTransform: a.eventDataTransform,
        success: a.success,
        failure: a.failure,
        publicId: a.id || "",
        sourceId: De(),
        sourceDefId: s.sourceDefId,
        meta: s.meta,
        ui: ot(a, e),
        extendedProps: o
      };
  }
  return null;
}
function li(t) {
  return h(h(h({}, at), hs), t.pluginHooks.eventSourceRefiners);
}
function gs(t, e) {
  for (var r = e.pluginHooks.eventSourceDefs, n = r.length - 1; n >= 0; n -= 1) {
    var i = r[n], a = i.parseMeta(t);
    if (a)
      return { sourceDefId: n, meta: a };
  }
  return null;
}
function ms(t, e) {
  switch (e.type) {
    case "CHANGE_DATE":
      return e.dateMarker;
    default:
      return t;
  }
}
function ys(t, e) {
  var r = t.initialDate;
  return r != null ? e.createMarker(r) : Oe(t.now, e);
}
function Oe(t, e) {
  return typeof t == "function" && (t = t()), t == null ? e.createNowMarker() : e.createMarker(t);
}
var Es = (
  /** @class */
  function() {
    function t() {
    }
    return t.prototype.getCurrentData = function() {
      return this.currentDataManager.getCurrentData();
    }, t.prototype.dispatch = function(e) {
      return this.currentDataManager.dispatch(e);
    }, Object.defineProperty(t.prototype, "view", {
      get: function() {
        return this.getCurrentData().viewApi;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.batchRendering = function(e) {
      e();
    }, t.prototype.updateSize = function() {
      this.trigger("_resize", !0);
    }, t.prototype.setOption = function(e, r) {
      this.dispatch({
        type: "SET_OPTION",
        optionName: e,
        rawOptionValue: r
      });
    }, t.prototype.getOption = function(e) {
      return this.currentDataManager.currentCalendarOptionsInput[e];
    }, t.prototype.getAvailableLocaleCodes = function() {
      return Object.keys(this.getCurrentData().availableRawLocales);
    }, t.prototype.on = function(e, r) {
      var n = this.currentDataManager;
      n.currentCalendarOptionsRefiners[e] ? n.emitter.on(e, r) : console.warn("Unknown listener name '" + e + "'");
    }, t.prototype.off = function(e, r) {
      this.currentDataManager.emitter.off(e, r);
    }, t.prototype.trigger = function(e) {
      for (var r, n = [], i = 1; i < arguments.length; i++)
        n[i - 1] = arguments[i];
      (r = this.currentDataManager.emitter).trigger.apply(r, A([e], n));
    }, t.prototype.changeView = function(e, r) {
      var n = this;
      this.batchRendering(function() {
        if (n.unselect(), r)
          if (r.start && r.end)
            n.dispatch({
              type: "CHANGE_VIEW_TYPE",
              viewType: e
            }), n.dispatch({
              type: "SET_OPTION",
              optionName: "visibleRange",
              rawOptionValue: r
            });
          else {
            var i = n.getCurrentData().dateEnv;
            n.dispatch({
              type: "CHANGE_VIEW_TYPE",
              viewType: e,
              dateMarker: i.createMarker(r)
            });
          }
        else
          n.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e
          });
      });
    }, t.prototype.zoomTo = function(e, r) {
      var n = this.getCurrentData(), i;
      r = r || "day", i = n.viewSpecs[r] || this.getUnitViewSpec(r), this.unselect(), i ? this.dispatch({
        type: "CHANGE_VIEW_TYPE",
        viewType: i.type,
        dateMarker: e
      }) : this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: e
      });
    }, t.prototype.getUnitViewSpec = function(e) {
      var r = this.getCurrentData(), n = r.viewSpecs, i = r.toolbarConfig, a = [].concat(i.header ? i.header.viewsWithButtons : [], i.footer ? i.footer.viewsWithButtons : []), o, s;
      for (var l in n)
        a.push(l);
      for (o = 0; o < a.length; o += 1)
        if (s = n[a[o]], s && s.singleUnit === e)
          return s;
      return null;
    }, t.prototype.prev = function() {
      this.unselect(), this.dispatch({ type: "PREV" });
    }, t.prototype.next = function() {
      this.unselect(), this.dispatch({ type: "NEXT" });
    }, t.prototype.prevYear = function() {
      var e = this.getCurrentData();
      this.unselect(), this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: e.dateEnv.addYears(e.currentDate, -1)
      });
    }, t.prototype.nextYear = function() {
      var e = this.getCurrentData();
      this.unselect(), this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: e.dateEnv.addYears(e.currentDate, 1)
      });
    }, t.prototype.today = function() {
      var e = this.getCurrentData();
      this.unselect(), this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: Oe(e.calendarOptions.now, e.dateEnv)
      });
    }, t.prototype.gotoDate = function(e) {
      var r = this.getCurrentData();
      this.unselect(), this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: r.dateEnv.createMarker(e)
      });
    }, t.prototype.incrementDate = function(e) {
      var r = this.getCurrentData(), n = k(e);
      n && (this.unselect(), this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: r.dateEnv.add(r.currentDate, n)
      }));
    }, t.prototype.getDate = function() {
      var e = this.getCurrentData();
      return e.dateEnv.toDate(e.currentDate);
    }, t.prototype.formatDate = function(e, r) {
      var n = this.getCurrentData().dateEnv;
      return n.format(n.createMarker(e), U(r));
    }, t.prototype.formatRange = function(e, r, n) {
      var i = this.getCurrentData().dateEnv;
      return i.formatRange(i.createMarker(e), i.createMarker(r), U(n), n);
    }, t.prototype.formatIso = function(e, r) {
      var n = this.getCurrentData().dateEnv;
      return n.formatIso(n.createMarker(e), { omitTime: r });
    }, t.prototype.select = function(e, r) {
      var n;
      r == null ? e.start != null ? n = e : n = {
        start: e,
        end: null
      } : n = {
        start: e,
        end: r
      };
      var i = this.getCurrentData(), a = as(n, i.dateEnv, k({ days: 1 }));
      a && (this.dispatch({ type: "SELECT_DATES", selection: a }), oi(a, null, i));
    }, t.prototype.unselect = function(e) {
      var r = this.getCurrentData();
      r.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), fs(e, r));
    }, t.prototype.addEvent = function(e, r) {
      if (e instanceof O) {
        var n = e._def, i = e._instance, a = this.getCurrentData();
        return a.eventStore.defs[n.defId] || (this.dispatch({
          type: "ADD_EVENTS",
          eventStore: Vt({ def: n, instance: i })
          // TODO: better util for two args?
        }), this.triggerEventAdd(e)), e;
      }
      var o = this.getCurrentData(), s;
      if (r instanceof pe)
        s = r.internalEventSource;
      else if (typeof r == "boolean")
        r && (s = tr(o.eventSources)[0]);
      else if (r != null) {
        var l = this.getEventSourceById(r);
        if (!l)
          return console.warn('Could not find an event source with ID "' + r + '"'), null;
        s = l.internalEventSource;
      }
      var c = Kn(e, s, o, !1);
      if (c) {
        var u = new O(o, c.def, c.def.recurringDef ? null : c.instance);
        return this.dispatch({
          type: "ADD_EVENTS",
          eventStore: Vt(c)
        }), this.triggerEventAdd(u), u;
      }
      return null;
    }, t.prototype.triggerEventAdd = function(e) {
      var r = this, n = this.getCurrentData().emitter;
      n.trigger("eventAdd", {
        event: e,
        relatedEvents: [],
        revert: function() {
          r.dispatch({
            type: "REMOVE_EVENTS",
            eventStore: ui(e)
          });
        }
      });
    }, t.prototype.getEventById = function(e) {
      var r = this.getCurrentData(), n = r.eventStore, i = n.defs, a = n.instances;
      e = String(e);
      for (var o in i) {
        var s = i[o];
        if (s.publicId === e) {
          if (s.recurringDef)
            return new O(r, s, null);
          for (var l in a) {
            var c = a[l];
            if (c.defId === s.defId)
              return new O(r, s, c);
          }
        }
      }
      return null;
    }, t.prototype.getEvents = function() {
      var e = this.getCurrentData();
      return se(e.eventStore, e);
    }, t.prototype.removeAllEvents = function() {
      this.dispatch({ type: "REMOVE_ALL_EVENTS" });
    }, t.prototype.getEventSources = function() {
      var e = this.getCurrentData(), r = e.eventSources, n = [];
      for (var i in r)
        n.push(new pe(e, r[i]));
      return n;
    }, t.prototype.getEventSourceById = function(e) {
      var r = this.getCurrentData(), n = r.eventSources;
      e = String(e);
      for (var i in n)
        if (n[i].publicId === e)
          return new pe(r, n[i]);
      return null;
    }, t.prototype.addEventSource = function(e) {
      var r = this.getCurrentData();
      if (e instanceof pe)
        return r.eventSources[e.internalEventSource.sourceId] || this.dispatch({
          type: "ADD_EVENT_SOURCES",
          sources: [e.internalEventSource]
        }), e;
      var n = si(e, r);
      return n ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [n] }), new pe(r, n)) : null;
    }, t.prototype.removeAllEventSources = function() {
      this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
    }, t.prototype.refetchEvents = function() {
      this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: !0 });
    }, t.prototype.scrollToTime = function(e) {
      var r = k(e);
      r && this.trigger("_scrollRequest", { time: r });
    }, t;
  }()
), O = (
  /** @class */
  function() {
    function t(e, r, n) {
      this._context = e, this._def = r, this._instance = n || null;
    }
    return t.prototype.setProp = function(e, r) {
      var n, i;
      if (e in $n)
        console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
      else if (e === "id")
        r = Xe[e](r), this.mutate({
          standardProps: { publicId: r }
          // hardcoded internal name
        });
      else if (e in Xe)
        r = Xe[e](r), this.mutate({
          standardProps: (n = {}, n[e] = r, n)
        });
      else if (e in at) {
        var a = at[e](r);
        e === "color" ? a = { backgroundColor: r, borderColor: r } : e === "editable" ? a = { startEditable: r, durationEditable: r } : a = (i = {}, i[e] = r, i), this.mutate({
          standardProps: { ui: a }
        });
      } else
        console.warn("Could not set prop '" + e + "'. Use setExtendedProp instead.");
    }, t.prototype.setExtendedProp = function(e, r) {
      var n;
      this.mutate({
        extendedProps: (n = {}, n[e] = r, n)
      });
    }, t.prototype.setStart = function(e, r) {
      r === void 0 && (r = {});
      var n = this._context.dateEnv, i = n.createMarker(e);
      if (i && this._instance) {
        var a = this._instance.range, o = he(a.start, i, n, r.granularity);
        r.maintainDuration ? this.mutate({ datesDelta: o }) : this.mutate({ startDelta: o });
      }
    }, t.prototype.setEnd = function(e, r) {
      r === void 0 && (r = {});
      var n = this._context.dateEnv, i;
      if (!(e != null && (i = n.createMarker(e), !i)) && this._instance)
        if (i) {
          var a = he(this._instance.range.end, i, n, r.granularity);
          this.mutate({ endDelta: a });
        } else
          this.mutate({ standardProps: { hasEnd: !1 } });
    }, t.prototype.setDates = function(e, r, n) {
      n === void 0 && (n = {});
      var i = this._context.dateEnv, a = { allDay: n.allDay }, o = i.createMarker(e), s;
      if (o && !(r != null && (s = i.createMarker(r), !s)) && this._instance) {
        var l = this._instance.range;
        n.allDay === !0 && (l = Qn(l));
        var c = he(l.start, o, i, n.granularity);
        if (s) {
          var u = he(l.end, s, i, n.granularity);
          mo(c, u) ? this.mutate({ datesDelta: c, standardProps: a }) : this.mutate({ startDelta: c, endDelta: u, standardProps: a });
        } else
          a.hasEnd = !1, this.mutate({ datesDelta: c, standardProps: a });
      }
    }, t.prototype.moveStart = function(e) {
      var r = k(e);
      r && this.mutate({ startDelta: r });
    }, t.prototype.moveEnd = function(e) {
      var r = k(e);
      r && this.mutate({ endDelta: r });
    }, t.prototype.moveDates = function(e) {
      var r = k(e);
      r && this.mutate({ datesDelta: r });
    }, t.prototype.setAllDay = function(e, r) {
      r === void 0 && (r = {});
      var n = { allDay: e }, i = r.maintainDuration;
      i == null && (i = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (n.hasEnd = i), this.mutate({ standardProps: n });
    }, t.prototype.formatRange = function(e) {
      var r = this._context.dateEnv, n = this._instance, i = U(e);
      return this._def.hasEnd ? r.formatRange(n.range.start, n.range.end, i, {
        forcedStartTzo: n.forcedStartTzo,
        forcedEndTzo: n.forcedEndTzo
      }) : r.format(n.range.start, i, {
        forcedTzo: n.forcedStartTzo
      });
    }, t.prototype.mutate = function(e) {
      var r = this._instance;
      if (r) {
        var n = this._def, i = this._context, a = i.getCurrentData().eventStore, o = ir(a, r.instanceId), s = {
          "": {
            display: "",
            startEditable: !0,
            durationEditable: !0,
            constraints: [],
            overlap: null,
            allows: [],
            backgroundColor: "",
            borderColor: "",
            textColor: "",
            classNames: []
          }
        };
        o = ur(o, s, e, i);
        var l = new t(i, n, r);
        this._def = o.defs[n.defId], this._instance = o.instances[r.instanceId], i.dispatch({
          type: "MERGE_EVENTS",
          eventStore: o
        }), i.emitter.trigger("eventChange", {
          oldEvent: l,
          event: this,
          relatedEvents: se(o, i, r),
          revert: function() {
            i.dispatch({
              type: "RESET_EVENTS",
              eventStore: a
            });
          }
        });
      }
    }, t.prototype.remove = function() {
      var e = this._context, r = ui(this);
      e.dispatch({
        type: "REMOVE_EVENTS",
        eventStore: r
      }), e.emitter.trigger("eventRemove", {
        event: this,
        relatedEvents: [],
        revert: function() {
          e.dispatch({
            type: "MERGE_EVENTS",
            eventStore: r
          });
        }
      });
    }, Object.defineProperty(t.prototype, "source", {
      get: function() {
        var e = this._def.sourceId;
        return e ? new pe(this._context, this._context.getCurrentData().eventSources[e]) : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "start", {
      get: function() {
        return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "end", {
      get: function() {
        return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "startStr", {
      get: function() {
        var e = this._instance;
        return e ? this._context.dateEnv.formatIso(e.range.start, {
          omitTime: this._def.allDay,
          forcedTzo: e.forcedStartTzo
        }) : "";
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "endStr", {
      get: function() {
        var e = this._instance;
        return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
          omitTime: this._def.allDay,
          forcedTzo: e.forcedEndTzo
        }) : "";
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "id", {
      // computable props that all access the def
      // TODO: find a TypeScript-compatible way to do this at scale
      get: function() {
        return this._def.publicId;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "groupId", {
      get: function() {
        return this._def.groupId;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "allDay", {
      get: function() {
        return this._def.allDay;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "title", {
      get: function() {
        return this._def.title;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "url", {
      get: function() {
        return this._def.url;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "display", {
      get: function() {
        return this._def.ui.display || "auto";
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "startEditable", {
      get: function() {
        return this._def.ui.startEditable;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "durationEditable", {
      get: function() {
        return this._def.ui.durationEditable;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "constraint", {
      get: function() {
        return this._def.ui.constraints[0] || null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "overlap", {
      get: function() {
        return this._def.ui.overlap;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "allow", {
      get: function() {
        return this._def.ui.allows[0] || null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "backgroundColor", {
      get: function() {
        return this._def.ui.backgroundColor;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "borderColor", {
      get: function() {
        return this._def.ui.borderColor;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "textColor", {
      get: function() {
        return this._def.ui.textColor;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "classNames", {
      // NOTE: user can't modify these because Object.freeze was called in event-def parsing
      get: function() {
        return this._def.ui.classNames;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "extendedProps", {
      get: function() {
        return this._def.extendedProps;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.toPlainObject = function(e) {
      e === void 0 && (e = {});
      var r = this._def, n = r.ui, i = this, a = i.startStr, o = i.endStr, s = {};
      return r.title && (s.title = r.title), a && (s.start = a), o && (s.end = o), r.publicId && (s.id = r.publicId), r.groupId && (s.groupId = r.groupId), r.url && (s.url = r.url), n.display && n.display !== "auto" && (s.display = n.display), e.collapseColor && n.backgroundColor && n.backgroundColor === n.borderColor ? s.color = n.backgroundColor : (n.backgroundColor && (s.backgroundColor = n.backgroundColor), n.borderColor && (s.borderColor = n.borderColor)), n.textColor && (s.textColor = n.textColor), n.classNames.length && (s.classNames = n.classNames), Object.keys(r.extendedProps).length && (e.collapseExtendedProps ? h(s, r.extendedProps) : s.extendedProps = r.extendedProps), s;
    }, t.prototype.toJSON = function() {
      return this.toPlainObject();
    }, t;
  }()
);
function ui(t) {
  var e, r, n = t._def, i = t._instance;
  return {
    defs: (e = {}, e[n.defId] = n, e),
    instances: i ? (r = {}, r[i.instanceId] = i, r) : {}
  };
}
function se(t, e, r) {
  var n = t.defs, i = t.instances, a = [], o = r ? r.instanceId : "";
  for (var s in i) {
    var l = i[s], c = n[l.defId];
    l.instanceId !== o && a.push(new O(e, c, l));
  }
  return a;
}
var ci = {};
function Ss(t, e) {
  ci[t] = e;
}
function bs(t) {
  return new ci[t]();
}
var Ds = (
  /** @class */
  function() {
    function t() {
    }
    return t.prototype.getMarkerYear = function(e) {
      return e.getUTCFullYear();
    }, t.prototype.getMarkerMonth = function(e) {
      return e.getUTCMonth();
    }, t.prototype.getMarkerDay = function(e) {
      return e.getUTCDate();
    }, t.prototype.arrayToMarker = function(e) {
      return F(e);
    }, t.prototype.markerToArray = function(e) {
      return J(e);
    }, t;
  }()
);
Ss("gregory", Ds);
var Cs = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function Rs(t) {
  var e = Cs.exec(t);
  if (e) {
    var r = new Date(Date.UTC(Number(e[1]), e[3] ? Number(e[3]) - 1 : 0, Number(e[5] || 1), Number(e[7] || 0), Number(e[8] || 0), Number(e[10] || 0), e[12] ? +("0." + e[12]) * 1e3 : 0));
    if (jn(r)) {
      var n = null;
      return e[13] && (n = (e[15] === "-" ? -1 : 1) * (Number(e[16] || 0) * 60 + Number(e[18] || 0))), {
        marker: r,
        isTimeUnspecified: !e[6],
        timeZoneOffset: n
      };
    }
  }
  return null;
}
var ws = (
  /** @class */
  function() {
    function t(e) {
      var r = this.timeZone = e.timeZone, n = r !== "local" && r !== "UTC";
      e.namedTimeZoneImpl && n && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(r)), this.canComputeOffset = !!(!n || this.namedTimeZoneImpl), this.calendarSystem = bs(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, e.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof e.firstDay == "number" && (this.weekDow = e.firstDay), typeof e.weekNumberCalculation == "function" && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = e.weekText != null ? e.weekText : e.locale.options.weekText, this.weekTextLong = (e.weekTextLong != null ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator;
    }
    return t.prototype.createMarker = function(e) {
      var r = this.createMarkerMeta(e);
      return r === null ? null : r.marker;
    }, t.prototype.createNowMarker = function() {
      return this.canComputeOffset ? this.timestampToMarker((/* @__PURE__ */ new Date()).valueOf()) : F(jr(/* @__PURE__ */ new Date()));
    }, t.prototype.createMarkerMeta = function(e) {
      if (typeof e == "string")
        return this.parse(e);
      var r = null;
      return typeof e == "number" ? r = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (r = this.timestampToMarker(e))) : Array.isArray(e) && (r = F(e)), r === null || !jn(r) ? null : { marker: r, isTimeUnspecified: !1, forcedTzo: null };
    }, t.prototype.parse = function(e) {
      var r = Rs(e);
      if (r === null)
        return null;
      var n = r.marker, i = null;
      return r.timeZoneOffset !== null && (this.canComputeOffset ? n = this.timestampToMarker(n.valueOf() - r.timeZoneOffset * 60 * 1e3) : i = r.timeZoneOffset), { marker: n, isTimeUnspecified: r.isTimeUnspecified, forcedTzo: i };
    }, t.prototype.getYear = function(e) {
      return this.calendarSystem.getMarkerYear(e);
    }, t.prototype.getMonth = function(e) {
      return this.calendarSystem.getMarkerMonth(e);
    }, t.prototype.add = function(e, r) {
      var n = this.calendarSystem.markerToArray(e);
      return n[0] += r.years, n[1] += r.months, n[2] += r.days, n[6] += r.milliseconds, this.calendarSystem.arrayToMarker(n);
    }, t.prototype.subtract = function(e, r) {
      var n = this.calendarSystem.markerToArray(e);
      return n[0] -= r.years, n[1] -= r.months, n[2] -= r.days, n[6] -= r.milliseconds, this.calendarSystem.arrayToMarker(n);
    }, t.prototype.addYears = function(e, r) {
      var n = this.calendarSystem.markerToArray(e);
      return n[0] += r, this.calendarSystem.arrayToMarker(n);
    }, t.prototype.addMonths = function(e, r) {
      var n = this.calendarSystem.markerToArray(e);
      return n[1] += r, this.calendarSystem.arrayToMarker(n);
    }, t.prototype.diffWholeYears = function(e, r) {
      var n = this.calendarSystem;
      return Q(e) === Q(r) && n.getMarkerDay(e) === n.getMarkerDay(r) && n.getMarkerMonth(e) === n.getMarkerMonth(r) ? n.getMarkerYear(r) - n.getMarkerYear(e) : null;
    }, t.prototype.diffWholeMonths = function(e, r) {
      var n = this.calendarSystem;
      return Q(e) === Q(r) && n.getMarkerDay(e) === n.getMarkerDay(r) ? n.getMarkerMonth(r) - n.getMarkerMonth(e) + (n.getMarkerYear(r) - n.getMarkerYear(e)) * 12 : null;
    }, t.prototype.greatestWholeUnit = function(e, r) {
      var n = this.diffWholeYears(e, r);
      return n !== null ? { unit: "year", value: n } : (n = this.diffWholeMonths(e, r), n !== null ? { unit: "month", value: n } : (n = io(e, r), n !== null ? { unit: "week", value: n } : (n = et(e, r), n !== null ? { unit: "day", value: n } : (n = eo(e, r), Ct(n) ? { unit: "hour", value: n } : (n = to(e, r), Ct(n) ? { unit: "minute", value: n } : (n = ro(e, r), Ct(n) ? { unit: "second", value: n } : { unit: "millisecond", value: r.valueOf() - e.valueOf() }))))));
    }, t.prototype.countDurationsBetween = function(e, r, n) {
      var i;
      return n.years && (i = this.diffWholeYears(e, r), i !== null) ? i / Eo(n) : n.months && (i = this.diffWholeMonths(e, r), i !== null) ? i / So(n) : n.days && (i = et(e, r), i !== null) ? i / ge(n) : (r.valueOf() - e.valueOf()) / Ne(n);
    }, t.prototype.startOf = function(e, r) {
      return r === "year" ? this.startOfYear(e) : r === "month" ? this.startOfMonth(e) : r === "week" ? this.startOfWeek(e) : r === "day" ? H(e) : r === "hour" ? ao(e) : r === "minute" ? oo(e) : r === "second" ? so(e) : null;
    }, t.prototype.startOfYear = function(e) {
      return this.calendarSystem.arrayToMarker([
        this.calendarSystem.getMarkerYear(e)
      ]);
    }, t.prototype.startOfMonth = function(e) {
      return this.calendarSystem.arrayToMarker([
        this.calendarSystem.getMarkerYear(e),
        this.calendarSystem.getMarkerMonth(e)
      ]);
    }, t.prototype.startOfWeek = function(e) {
      return this.calendarSystem.arrayToMarker([
        this.calendarSystem.getMarkerYear(e),
        this.calendarSystem.getMarkerMonth(e),
        e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7
      ]);
    }, t.prototype.computeWeekNumber = function(e) {
      return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : lo(e, this.weekDow, this.weekDoy);
    }, t.prototype.format = function(e, r, n) {
      return n === void 0 && (n = {}), r.format({
        marker: e,
        timeZoneOffset: n.forcedTzo != null ? n.forcedTzo : this.offsetForMarker(e)
      }, this);
    }, t.prototype.formatRange = function(e, r, n, i) {
      return i === void 0 && (i = {}), i.isEndExclusive && (r = ue(r, -1)), n.formatRange({
        marker: e,
        timeZoneOffset: i.forcedStartTzo != null ? i.forcedStartTzo : this.offsetForMarker(e)
      }, {
        marker: r,
        timeZoneOffset: i.forcedEndTzo != null ? i.forcedEndTzo : this.offsetForMarker(r)
      }, this, i.defaultSeparator);
    }, t.prototype.formatIso = function(e, r) {
      r === void 0 && (r = {});
      var n = null;
      return r.omitTimeZoneOffset || (r.forcedTzo != null ? n = r.forcedTzo : n = this.offsetForMarker(e)), bo(e, n, r.omitTime);
    }, t.prototype.timestampToMarker = function(e) {
      return this.timeZone === "local" ? F(jr(new Date(e))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(e) : F(this.namedTimeZoneImpl.timestampToArray(e));
    }, t.prototype.offsetForMarker = function(e) {
      return this.timeZone === "local" ? -Zr(J(e)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(J(e)) : null;
    }, t.prototype.toDate = function(e, r) {
      return this.timeZone === "local" ? Zr(J(e)) : this.timeZone === "UTC" ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - this.namedTimeZoneImpl.offsetForArray(J(e)) * 1e3 * 60) : new Date(e.valueOf() - (r || 0));
    }, t;
  }()
), Ts = [], fi = {
  code: "en",
  week: {
    dow: 0,
    doy: 4
    // 4 days need to be within the year to be considered the first week
  },
  direction: "ltr",
  buttonText: {
    prev: "prev",
    next: "next",
    prevYear: "prev year",
    nextYear: "next year",
    year: "year",
    today: "today",
    month: "month",
    week: "week",
    day: "day",
    list: "list"
  },
  weekText: "W",
  weekTextLong: "Week",
  closeHint: "Close",
  timeHint: "Time",
  eventHint: "Event",
  allDayText: "all-day",
  moreLinkText: "more",
  noEventsText: "No events to display"
}, di = h(h({}, fi), {
  // Includes things we don't want other locales to inherit,
  // things that derive from other translatable strings.
  buttonHints: {
    prev: "Previous $0",
    next: "Next $0",
    today: function(t, e) {
      return e === "day" ? "Today" : "This " + t;
    }
  },
  viewHint: "$0 view",
  navLinkHint: "Go to $0",
  moreLinkHint: function(t) {
    return "Show " + t + " more event" + (t === 1 ? "" : "s");
  }
});
function _s(t) {
  for (var e = t.length > 0 ? t[0].code : "en", r = Ts.concat(t), n = {
    en: di
  }, i = 0, a = r; i < a.length; i++) {
    var o = a[i];
    n[o.code] = o;
  }
  return {
    map: n,
    defaultCode: e
  };
}
function vi(t, e) {
  return typeof t == "object" && !Array.isArray(t) ? pi(t.code, [t.code], t) : Ms(t, e);
}
function Ms(t, e) {
  var r = [].concat(t || []), n = ks(r, e) || di;
  return pi(t, r, n);
}
function ks(t, e) {
  for (var r = 0; r < t.length; r += 1)
    for (var n = t[r].toLocaleLowerCase().split("-"), i = n.length; i > 0; i -= 1) {
      var a = n.slice(0, i).join("-");
      if (e[a])
        return e[a];
    }
  return null;
}
function pi(t, e, r) {
  var n = er([fi, r], ["buttonText"]);
  delete n.code;
  var i = n.week;
  return delete n.week, {
    codeArg: t,
    codes: e,
    week: i,
    simpleNumberFormat: new Intl.NumberFormat(t),
    options: n
  };
}
var Is = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
  // so multiple defs get grouped
};
function Ps(t, e) {
  return it(Hs(t), null, e);
}
function Hs(t) {
  var e;
  return t === !0 ? e = [{}] : Array.isArray(t) ? e = t.filter(function(r) {
    return r.daysOfWeek;
  }) : typeof t == "object" && t ? e = [t] : e = [], e = e.map(function(r) {
    return h(h({}, Is), r);
  }), e;
}
function xs(t, e) {
  return t.left >= e.left && t.left < e.right && t.top >= e.top && t.top < e.bottom;
}
function hi(t, e) {
  var r = {
    left: Math.max(t.left, e.left),
    right: Math.min(t.right, e.right),
    top: Math.max(t.top, e.top),
    bottom: Math.min(t.bottom, e.bottom)
  };
  return r.left < r.right && r.top < r.bottom ? r : !1;
}
function Ns(t, e) {
  return {
    left: Math.min(Math.max(t.left, e.left), e.right),
    top: Math.min(Math.max(t.top, e.top), e.bottom)
  };
}
function As(t) {
  return {
    left: (t.left + t.right) / 2,
    top: (t.top + t.bottom) / 2
  };
}
function Os(t, e) {
  return {
    left: t.left - e.left,
    top: t.top - e.top
  };
}
var _t;
function gi() {
  return _t == null && (_t = Ls()), _t;
}
function Ls() {
  if (typeof document > "u")
    return !0;
  var t = document.createElement("div");
  t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.innerHTML = "<table><tr><td><div></div></td></tr></table>", t.querySelector("table").style.height = "100px", t.querySelector("div").style.height = "100%", document.body.appendChild(t);
  var e = t.querySelector("div"), r = e.offsetHeight > 0;
  return document.body.removeChild(t), r;
}
function mi(t, e, r, n) {
  return {
    dow: t.getUTCDay(),
    isDisabled: !!(n && !oe(n.activeRange, t)),
    isOther: !!(n && !oe(n.currentRange, t)),
    isToday: !!(e && oe(e, t)),
    isPast: !!(r ? t < r : e && t < e.start),
    isFuture: !!(r ? t > r : e && t >= e.end)
  };
}
function cr(t, e) {
  var r = [
    "fc-day",
    "fc-day-" + Ja[t.dow]
  ];
  return t.isDisabled ? r.push("fc-day-disabled") : (t.isToday && (r.push("fc-day-today"), r.push(e.getClass("today"))), t.isPast && r.push("fc-day-past"), t.isFuture && r.push("fc-day-future"), t.isOther && r.push("fc-day-other")), r;
}
var Us = U({ year: "numeric", month: "long", day: "numeric" }), Vs = U({ week: "long" });
function fr(t, e, r, n) {
  r === void 0 && (r = "day"), n === void 0 && (n = !0);
  var i = t.dateEnv, a = t.options, o = t.calendarApi, s = i.format(e, r === "week" ? Vs : Us);
  if (a.navLinks) {
    var l = i.toDate(e), c = function(u) {
      var f = r === "day" ? a.navLinkDayClick : r === "week" ? a.navLinkWeekClick : null;
      typeof f == "function" ? f.call(o, i.toDate(e), u) : (typeof f == "string" && (r = f), o.zoomTo(e, r));
    };
    return h({ title: Me(a.navLinkHint, [s, l], s), "data-navlink": "" }, n ? qn(c) : { onClick: c });
  }
  return { "aria-label": s };
}
var Mt = null;
function Ws() {
  return Mt === null && (Mt = Bs()), Mt;
}
function Bs() {
  var t = document.createElement("div");
  _e(t, {
    position: "absolute",
    top: -1e3,
    left: 0,
    border: 0,
    padding: 0,
    overflow: "scroll",
    direction: "rtl"
  }), t.innerHTML = "<div></div>", document.body.appendChild(t);
  var e = t.firstChild, r = e.getBoundingClientRect().left > t.getBoundingClientRect().left;
  return $t(t), r;
}
var kt;
function Fs() {
  return kt || (kt = zs()), kt;
}
function zs() {
  var t = document.createElement("div");
  t.style.overflow = "scroll", t.style.position = "absolute", t.style.top = "-9999px", t.style.left = "-9999px", document.body.appendChild(t);
  var e = yi(t);
  return document.body.removeChild(t), e;
}
function yi(t) {
  return {
    x: t.offsetHeight - t.clientHeight,
    y: t.offsetWidth - t.clientWidth
  };
}
function Gs(t, e) {
  e === void 0 && (e = !1);
  var r = window.getComputedStyle(t), n = parseInt(r.borderLeftWidth, 10) || 0, i = parseInt(r.borderRightWidth, 10) || 0, a = parseInt(r.borderTopWidth, 10) || 0, o = parseInt(r.borderBottomWidth, 10) || 0, s = yi(t), l = s.y - n - i, c = s.x - a - o, u = {
    borderLeft: n,
    borderRight: i,
    borderTop: a,
    borderBottom: o,
    scrollbarBottom: c,
    scrollbarLeft: 0,
    scrollbarRight: 0
  };
  return Ws() && r.direction === "rtl" ? u.scrollbarLeft = l : u.scrollbarRight = l, e && (u.paddingLeft = parseInt(r.paddingLeft, 10) || 0, u.paddingRight = parseInt(r.paddingRight, 10) || 0, u.paddingTop = parseInt(r.paddingTop, 10) || 0, u.paddingBottom = parseInt(r.paddingBottom, 10) || 0), u;
}
function qs(t, e, r) {
  e === void 0 && (e = !1);
  var n = r ? t.getBoundingClientRect() : dr(t), i = Gs(t, e), a = {
    left: n.left + i.borderLeft + i.scrollbarLeft,
    right: n.right - i.borderRight - i.scrollbarRight,
    top: n.top + i.borderTop,
    bottom: n.bottom - i.borderBottom - i.scrollbarBottom
  };
  return e && (a.left += i.paddingLeft, a.right -= i.paddingRight, a.top += i.paddingTop, a.bottom -= i.paddingBottom), a;
}
function dr(t) {
  var e = t.getBoundingClientRect();
  return {
    left: e.left + window.pageXOffset,
    top: e.top + window.pageYOffset,
    right: e.right + window.pageXOffset,
    bottom: e.bottom + window.pageYOffset
  };
}
function Ys(t) {
  for (var e = Ei(t), r = t.getBoundingClientRect(), n = 0, i = e; n < i.length; n++) {
    var a = i[n], o = hi(r, a.getBoundingClientRect());
    if (o)
      r = o;
    else
      return null;
  }
  return r;
}
function Ei(t) {
  for (var e = []; t instanceof HTMLElement; ) {
    var r = window.getComputedStyle(t);
    if (r.position === "fixed")
      break;
    /(auto|scroll)/.test(r.overflow + r.overflowY + r.overflowX) && e.push(t), t = t.parentNode;
  }
  return e;
}
function js(t, e, r) {
  var n = !1, i = function() {
    n || (n = !0, e.apply(this, arguments));
  }, a = function() {
    n || (n = !0, r && r.apply(this, arguments));
  }, o = t(i, a);
  o && typeof o.then == "function" && o.then(i, a);
}
var pt = (
  /** @class */
  function() {
    function t() {
      this.handlers = {}, this.thisContext = null;
    }
    return t.prototype.setThisContext = function(e) {
      this.thisContext = e;
    }, t.prototype.setOptions = function(e) {
      this.options = e;
    }, t.prototype.on = function(e, r) {
      Zs(this.handlers, e, r);
    }, t.prototype.off = function(e, r) {
      Xs(this.handlers, e, r);
    }, t.prototype.trigger = function(e) {
      for (var r = [], n = 1; n < arguments.length; n++)
        r[n - 1] = arguments[n];
      for (var i = this.handlers[e] || [], a = this.options && this.options[e], o = [].concat(a || [], i), s = 0, l = o; s < l.length; s++) {
        var c = l[s];
        c.apply(this.thisContext, r);
      }
    }, t.prototype.hasHandlers = function(e) {
      return !!(this.handlers[e] && this.handlers[e].length || this.options && this.options[e]);
    }, t;
  }()
);
function Zs(t, e, r) {
  (t[e] || (t[e] = [])).push(r);
}
function Xs(t, e, r) {
  r ? t[e] && (t[e] = t[e].filter(function(n) {
    return n !== r;
  })) : delete t[e];
}
var Ft = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      this.els = r;
      var a = this.originClientRect = e.getBoundingClientRect();
      n && this.buildElHorizontals(a.left), i && this.buildElVerticals(a.top);
    }
    return t.prototype.buildElHorizontals = function(e) {
      for (var r = [], n = [], i = 0, a = this.els; i < a.length; i++) {
        var o = a[i], s = o.getBoundingClientRect();
        r.push(s.left - e), n.push(s.right - e);
      }
      this.lefts = r, this.rights = n;
    }, t.prototype.buildElVerticals = function(e) {
      for (var r = [], n = [], i = 0, a = this.els; i < a.length; i++) {
        var o = a[i], s = o.getBoundingClientRect();
        r.push(s.top - e), n.push(s.bottom - e);
      }
      this.tops = r, this.bottoms = n;
    }, t.prototype.leftToIndex = function(e) {
      var r = this, n = r.lefts, i = r.rights, a = n.length, o;
      for (o = 0; o < a; o += 1)
        if (e >= n[o] && e < i[o])
          return o;
    }, t.prototype.topToIndex = function(e) {
      var r = this, n = r.tops, i = r.bottoms, a = n.length, o;
      for (o = 0; o < a; o += 1)
        if (e >= n[o] && e < i[o])
          return o;
    }, t.prototype.getWidth = function(e) {
      return this.rights[e] - this.lefts[e];
    }, t.prototype.getHeight = function(e) {
      return this.bottoms[e] - this.tops[e];
    }, t;
  }()
), vr = (
  /** @class */
  function() {
    function t() {
    }
    return t.prototype.getMaxScrollTop = function() {
      return this.getScrollHeight() - this.getClientHeight();
    }, t.prototype.getMaxScrollLeft = function() {
      return this.getScrollWidth() - this.getClientWidth();
    }, t.prototype.canScrollVertically = function() {
      return this.getMaxScrollTop() > 0;
    }, t.prototype.canScrollHorizontally = function() {
      return this.getMaxScrollLeft() > 0;
    }, t.prototype.canScrollUp = function() {
      return this.getScrollTop() > 0;
    }, t.prototype.canScrollDown = function() {
      return this.getScrollTop() < this.getMaxScrollTop();
    }, t.prototype.canScrollLeft = function() {
      return this.getScrollLeft() > 0;
    }, t.prototype.canScrollRight = function() {
      return this.getScrollLeft() < this.getMaxScrollLeft();
    }, t;
  }()
), $s = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r) {
      var n = t.call(this) || this;
      return n.el = r, n;
    }
    return e.prototype.getScrollTop = function() {
      return this.el.scrollTop;
    }, e.prototype.getScrollLeft = function() {
      return this.el.scrollLeft;
    }, e.prototype.setScrollTop = function(r) {
      this.el.scrollTop = r;
    }, e.prototype.setScrollLeft = function(r) {
      this.el.scrollLeft = r;
    }, e.prototype.getScrollWidth = function() {
      return this.el.scrollWidth;
    }, e.prototype.getScrollHeight = function() {
      return this.el.scrollHeight;
    }, e.prototype.getClientHeight = function() {
      return this.el.clientHeight;
    }, e.prototype.getClientWidth = function() {
      return this.el.clientWidth;
    }, e;
  }(vr)
), Ks = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.getScrollTop = function() {
      return window.pageYOffset;
    }, e.prototype.getScrollLeft = function() {
      return window.pageXOffset;
    }, e.prototype.setScrollTop = function(r) {
      window.scroll(window.pageXOffset, r);
    }, e.prototype.setScrollLeft = function(r) {
      window.scroll(r, window.pageYOffset);
    }, e.prototype.getScrollWidth = function() {
      return document.documentElement.scrollWidth;
    }, e.prototype.getScrollHeight = function() {
      return document.documentElement.scrollHeight;
    }, e.prototype.getClientHeight = function() {
      return document.documentElement.clientHeight;
    }, e.prototype.getClientWidth = function() {
      return document.documentElement.clientWidth;
    }, e;
  }(vr)
), Le = (
  /** @class */
  function() {
    function t(e) {
      this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption]);
    }
    return t.prototype.setIconOverride = function(e) {
      var r, n;
      if (typeof e == "object" && e) {
        r = h({}, this.iconClasses);
        for (n in e)
          r[n] = this.applyIconOverridePrefix(e[n]);
        this.iconClasses = r;
      } else
        e === !1 && (this.iconClasses = {});
    }, t.prototype.applyIconOverridePrefix = function(e) {
      var r = this.iconOverridePrefix;
      return r && e.indexOf(r) !== 0 && (e = r + e), e;
    }, t.prototype.getClass = function(e) {
      return this.classes[e] || "";
    }, t.prototype.getIconClass = function(e, r) {
      var n;
      return r && this.rtlIconClasses ? n = this.rtlIconClasses[e] || this.iconClasses[e] : n = this.iconClasses[e], n ? this.baseIconClass + " " + n : "";
    }, t.prototype.getCustomButtonIconClass = function(e) {
      var r;
      return this.iconOverrideCustomButtonOption && (r = e[this.iconOverrideCustomButtonOption], r) ? this.baseIconClass + " " + this.applyIconOverridePrefix(r) : "";
    }, t;
  }()
);
Le.prototype.classes = {};
Le.prototype.iconClasses = {};
Le.prototype.baseIconClass = "";
Le.prototype.iconOverridePrefix = "";
var Js = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      var a = this;
      this.execFunc = e, this.emitter = r, this.scrollTime = n, this.scrollTimeReset = i, this.handleScrollRequest = function(o) {
        a.queuedRequest = h({}, a.queuedRequest || {}, o), a.drain();
      }, r.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll();
    }
    return t.prototype.detach = function() {
      this.emitter.off("_scrollRequest", this.handleScrollRequest);
    }, t.prototype.update = function(e) {
      e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
    }, t.prototype.fireInitialScroll = function() {
      this.handleScrollRequest({
        time: this.scrollTime
      });
    }, t.prototype.drain = function() {
      this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null);
    }, t;
  }()
), de = Wn({});
function Qs(t, e, r, n, i, a, o, s, l, c, u, f, v) {
  return {
    dateEnv: i,
    options: r,
    pluginHooks: o,
    emitter: c,
    dispatch: s,
    getCurrentData: l,
    calendarApi: u,
    viewSpec: t,
    viewApi: e,
    dateProfileGenerator: n,
    theme: a,
    isRtl: r.direction === "rtl",
    addResizeHandler: function(d) {
      c.on("_resize", d);
    },
    removeResizeHandler: function(d) {
      c.off("_resize", d);
    },
    createScrollResponder: function(d) {
      return new Js(d, c, k(r.scrollTime), r.scrollTimeReset);
    },
    registerInteractiveComponent: f,
    unregisterInteractiveComponent: v
  };
}
var ht = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.shouldComponentUpdate = function(r, n) {
      return this.debug && console.log(Xr(r, this.props), Xr(n, this.state)), !wt(this.props, r, this.propEquality) || !wt(this.state, n, this.stateEquality);
    }, e.prototype.safeSetState = function(r) {
      wt(this.state, h(h({}, this.state), r), this.stateEquality) || this.setState(r);
    }, e.addPropsEquality = el, e.addStateEquality = tl, e.contextType = de, e;
  }(Xt)
);
ht.prototype.propEquality = {};
ht.prototype.stateEquality = {};
var x = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.contextType = de, e;
  }(ht)
);
function el(t) {
  var e = Object.create(this.prototype.propEquality);
  h(e, t), this.prototype.propEquality = e;
}
function tl(t) {
  var e = Object.create(this.prototype.stateEquality);
  h(e, t), this.prototype.stateEquality = e;
}
function $(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
var Re = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.uid = De(), r;
    }
    return e.prototype.prepareHits = function() {
    }, e.prototype.queryHit = function(r, n, i, a) {
      return null;
    }, e.prototype.isValidSegDownEl = function(r) {
      return !this.props.eventDrag && // HACK
      !this.props.eventResize && // HACK
      !V(r, ".fc-event-mirror");
    }, e.prototype.isValidDateDownEl = function(r) {
      return !V(r, ".fc-event:not(.fc-bg-event)") && !V(r, ".fc-more-link") && // a "more.." link
      !V(r, "a[data-navlink]") && // a clickable nav link
      !V(r, ".fc-popover");
    }, e;
  }(x)
);
function te(t) {
  return {
    id: De(),
    deps: t.deps || [],
    reducers: t.reducers || [],
    isLoadingFuncs: t.isLoadingFuncs || [],
    contextInit: [].concat(t.contextInit || []),
    eventRefiners: t.eventRefiners || {},
    eventDefMemberAdders: t.eventDefMemberAdders || [],
    eventSourceRefiners: t.eventSourceRefiners || {},
    isDraggableTransformers: t.isDraggableTransformers || [],
    eventDragMutationMassagers: t.eventDragMutationMassagers || [],
    eventDefMutationAppliers: t.eventDefMutationAppliers || [],
    dateSelectionTransformers: t.dateSelectionTransformers || [],
    datePointTransforms: t.datePointTransforms || [],
    dateSpanTransforms: t.dateSpanTransforms || [],
    views: t.views || {},
    viewPropsTransformers: t.viewPropsTransformers || [],
    isPropsValid: t.isPropsValid || null,
    externalDefTransforms: t.externalDefTransforms || [],
    viewContainerAppends: t.viewContainerAppends || [],
    eventDropTransformers: t.eventDropTransformers || [],
    componentInteractions: t.componentInteractions || [],
    calendarInteractions: t.calendarInteractions || [],
    themeClasses: t.themeClasses || {},
    eventSourceDefs: t.eventSourceDefs || [],
    cmdFormatter: t.cmdFormatter,
    recurringTypes: t.recurringTypes || [],
    namedTimeZonedImpl: t.namedTimeZonedImpl,
    initialView: t.initialView || "",
    elementDraggingImpl: t.elementDraggingImpl,
    optionChangeHandlers: t.optionChangeHandlers || {},
    scrollGridImpl: t.scrollGridImpl || null,
    contentTypeHandlers: t.contentTypeHandlers || {},
    listenerRefiners: t.listenerRefiners || {},
    optionRefiners: t.optionRefiners || {},
    propSetHandlers: t.propSetHandlers || {}
  };
}
function rl(t, e) {
  var r = {}, n = {
    reducers: [],
    isLoadingFuncs: [],
    contextInit: [],
    eventRefiners: {},
    eventDefMemberAdders: [],
    eventSourceRefiners: {},
    isDraggableTransformers: [],
    eventDragMutationMassagers: [],
    eventDefMutationAppliers: [],
    dateSelectionTransformers: [],
    datePointTransforms: [],
    dateSpanTransforms: [],
    views: {},
    viewPropsTransformers: [],
    isPropsValid: null,
    externalDefTransforms: [],
    viewContainerAppends: [],
    eventDropTransformers: [],
    componentInteractions: [],
    calendarInteractions: [],
    themeClasses: {},
    eventSourceDefs: [],
    cmdFormatter: null,
    recurringTypes: [],
    namedTimeZonedImpl: null,
    initialView: "",
    elementDraggingImpl: null,
    optionChangeHandlers: {},
    scrollGridImpl: null,
    contentTypeHandlers: {},
    listenerRefiners: {},
    optionRefiners: {},
    propSetHandlers: {}
  };
  function i(a) {
    for (var o = 0, s = a; o < s.length; o++) {
      var l = s[o];
      r[l.id] || (r[l.id] = !0, i(l.deps), n = il(n, l));
    }
  }
  return t && i(t), i(e), n;
}
function nl() {
  var t = [], e = [], r;
  return function(n, i) {
    return (!r || !Se(n, t) || !Se(i, e)) && (r = rl(n, i)), t = n, e = i, r;
  };
}
function il(t, e) {
  return {
    reducers: t.reducers.concat(e.reducers),
    isLoadingFuncs: t.isLoadingFuncs.concat(e.isLoadingFuncs),
    contextInit: t.contextInit.concat(e.contextInit),
    eventRefiners: h(h({}, t.eventRefiners), e.eventRefiners),
    eventDefMemberAdders: t.eventDefMemberAdders.concat(e.eventDefMemberAdders),
    eventSourceRefiners: h(h({}, t.eventSourceRefiners), e.eventSourceRefiners),
    isDraggableTransformers: t.isDraggableTransformers.concat(e.isDraggableTransformers),
    eventDragMutationMassagers: t.eventDragMutationMassagers.concat(e.eventDragMutationMassagers),
    eventDefMutationAppliers: t.eventDefMutationAppliers.concat(e.eventDefMutationAppliers),
    dateSelectionTransformers: t.dateSelectionTransformers.concat(e.dateSelectionTransformers),
    datePointTransforms: t.datePointTransforms.concat(e.datePointTransforms),
    dateSpanTransforms: t.dateSpanTransforms.concat(e.dateSpanTransforms),
    views: h(h({}, t.views), e.views),
    viewPropsTransformers: t.viewPropsTransformers.concat(e.viewPropsTransformers),
    isPropsValid: e.isPropsValid || t.isPropsValid,
    externalDefTransforms: t.externalDefTransforms.concat(e.externalDefTransforms),
    viewContainerAppends: t.viewContainerAppends.concat(e.viewContainerAppends),
    eventDropTransformers: t.eventDropTransformers.concat(e.eventDropTransformers),
    calendarInteractions: t.calendarInteractions.concat(e.calendarInteractions),
    componentInteractions: t.componentInteractions.concat(e.componentInteractions),
    themeClasses: h(h({}, t.themeClasses), e.themeClasses),
    eventSourceDefs: t.eventSourceDefs.concat(e.eventSourceDefs),
    cmdFormatter: e.cmdFormatter || t.cmdFormatter,
    recurringTypes: t.recurringTypes.concat(e.recurringTypes),
    namedTimeZonedImpl: e.namedTimeZonedImpl || t.namedTimeZonedImpl,
    initialView: t.initialView || e.initialView,
    elementDraggingImpl: t.elementDraggingImpl || e.elementDraggingImpl,
    optionChangeHandlers: h(h({}, t.optionChangeHandlers), e.optionChangeHandlers),
    scrollGridImpl: e.scrollGridImpl || t.scrollGridImpl,
    contentTypeHandlers: h(h({}, t.contentTypeHandlers), e.contentTypeHandlers),
    listenerRefiners: h(h({}, t.listenerRefiners), e.listenerRefiners),
    optionRefiners: h(h({}, t.optionRefiners), e.optionRefiners),
    propSetHandlers: h(h({}, t.propSetHandlers), e.propSetHandlers)
  };
}
var re = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e;
  }(Le)
);
re.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active"
};
re.prototype.baseIconClass = "fc-icon";
re.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right"
};
re.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left"
};
re.prototype.iconOverrideOption = "buttonIcons";
re.prototype.iconOverrideCustomButtonOption = "icon";
re.prototype.iconOverridePrefix = "fc-icon-";
function al(t, e) {
  var r = {}, n;
  for (n in t)
    zt(n, r, t, e);
  for (n in e)
    zt(n, r, t, e);
  return r;
}
function zt(t, e, r, n) {
  if (e[t])
    return e[t];
  var i = ol(t, e, r, n);
  return i && (e[t] = i), i;
}
function ol(t, e, r, n) {
  var i = r[t], a = n[t], o = function(u) {
    return i && i[u] !== null ? i[u] : a && a[u] !== null ? a[u] : null;
  }, s = o("component"), l = o("superType"), c = null;
  if (l) {
    if (l === t)
      throw new Error("Can't have a custom view type that references itself");
    c = zt(l, e, r, n);
  }
  return !s && c && (s = c.component), s ? {
    type: t,
    component: s,
    defaults: h(h({}, c ? c.defaults : {}), i ? i.rawOptions : {}),
    overrides: h(h({}, c ? c.overrides : {}), a ? a.rawOptions : {})
  } : null;
}
var we = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.rootElRef = G(), r.handleRootEl = function(n) {
        $(r.rootElRef, n), r.props.elRef && $(r.props.elRef, n);
      }, r;
    }
    return e.prototype.render = function() {
      var r = this, n = this.props, i = n.hookProps;
      return m(pr, { hookProps: i, didMount: n.didMount, willUnmount: n.willUnmount, elRef: this.handleRootEl }, function(a) {
        return m(bi, { hookProps: i, content: n.content, defaultContent: n.defaultContent, backupElRef: r.rootElRef }, function(o, s) {
          return n.children(a, Ci(n.classNames, i), o, s);
        });
      });
    }, e;
  }(x)
), Si = Wn(0);
function bi(t) {
  return m(Si.Consumer, null, function(e) {
    return m(sl, h({ renderId: e }, t));
  });
}
var sl = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.innerElRef = G(), r;
    }
    return e.prototype.render = function() {
      return this.props.children(this.innerElRef, this.renderInnerContent());
    }, e.prototype.componentDidMount = function() {
      this.updateCustomContent();
    }, e.prototype.componentDidUpdate = function() {
      this.updateCustomContent();
    }, e.prototype.componentWillUnmount = function() {
      this.customContentInfo && this.customContentInfo.destroy && this.customContentInfo.destroy();
    }, e.prototype.renderInnerContent = function() {
      var r = this.customContentInfo, n = this.getInnerContent(), i = this.getContentMeta(n);
      return !r || r.contentKey !== i.contentKey ? (r && (r.destroy && r.destroy(), r = this.customContentInfo = null), i.contentKey && (r = this.customContentInfo = h({ contentKey: i.contentKey, contentVal: n[i.contentKey] }, i.buildLifecycleFuncs()))) : r && (r.contentVal = n[i.contentKey]), r ? [] : n;
    }, e.prototype.getInnerContent = function() {
      var r = this.props, n = ln(r.content, r.hookProps);
      return n === void 0 && (n = ln(r.defaultContent, r.hookProps)), n ?? null;
    }, e.prototype.getContentMeta = function(r) {
      var n = this.context.pluginHooks.contentTypeHandlers, i = "", a = null;
      if (r) {
        for (var o in n)
          if (r[o] !== void 0) {
            i = o, a = n[o];
            break;
          }
      }
      return { contentKey: i, buildLifecycleFuncs: a };
    }, e.prototype.updateCustomContent = function() {
      this.customContentInfo && this.customContentInfo.render(
        this.innerElRef.current || this.props.backupElRef.current,
        // the element to render into
        this.customContentInfo.contentVal
      );
    }, e;
  }(x)
), pr = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.handleRootEl = function(n) {
        r.rootEl = n, r.props.elRef && $(r.props.elRef, n);
      }, r;
    }
    return e.prototype.render = function() {
      return this.props.children(this.handleRootEl);
    }, e.prototype.componentDidMount = function() {
      var r = this.props.didMount;
      r && r(h(h({}, this.props.hookProps), { el: this.rootEl }));
    }, e.prototype.componentWillUnmount = function() {
      var r = this.props.willUnmount;
      r && r(h(h({}, this.props.hookProps), { el: this.rootEl }));
    }, e;
  }(x)
);
function Di() {
  var t, e, r = [];
  return function(n, i) {
    return (!e || !X(e, i) || n !== t) && (t = n, e = i, r = Ci(n, i)), r;
  };
}
function Ci(t, e) {
  return typeof t == "function" && (t = t(e)), Wt(t);
}
function ln(t, e) {
  return typeof t == "function" ? t(e, m) : t;
}
var Gt = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.normalizeClassNames = Di(), r;
    }
    return e.prototype.render = function() {
      var r = this, n = r.props, i = r.context, a = i.options, o = { view: i.viewApi }, s = this.normalizeClassNames(a.viewClassNames, o);
      return m(pr, { hookProps: o, didMount: a.viewDidMount, willUnmount: a.viewWillUnmount, elRef: n.elRef }, function(l) {
        return n.children(l, ["fc-" + n.viewSpec.type + "-view", "fc-view"].concat(s));
      });
    }, e;
  }(x)
);
function un(t) {
  return fe(t, ll);
}
function ll(t) {
  var e = typeof t == "function" ? { component: t } : t, r = e.component;
  return e.content && (r = ul(e)), {
    superType: e.type,
    component: r,
    rawOptions: e
  };
}
function ul(t) {
  return function(e) {
    return m(de.Consumer, null, function(r) {
      return m(Gt, { viewSpec: r.viewSpec }, function(n, i) {
        var a = h(h({}, e), { nextDayThreshold: r.options.nextDayThreshold });
        return m(we, { hookProps: a, classNames: t.classNames, content: t.content, didMount: t.didMount, willUnmount: t.willUnmount, elRef: n }, function(o, s, l, c) {
          return m("div", { className: i.concat(s).join(" "), ref: o }, c);
        });
      });
    });
  };
}
function cl(t, e, r, n) {
  var i = un(t), a = un(e.views), o = al(i, a);
  return fe(o, function(s) {
    return fl(s, a, e, r, n);
  });
}
function fl(t, e, r, n, i) {
  var a = t.overrides.duration || t.defaults.duration || n.duration || r.duration, o = null, s = "", l = "", c = {};
  if (a && (o = dl(a), o)) {
    var u = Ut(o);
    s = u.unit, u.value === 1 && (l = s, c = e[s] ? e[s].rawOptions : {});
  }
  var f = function(d) {
    var p = d.buttonText || {}, E = t.defaults.buttonTextKey;
    return E != null && p[E] != null ? p[E] : p[t.type] != null ? p[t.type] : p[l] != null ? p[l] : null;
  }, v = function(d) {
    var p = d.buttonHints || {}, E = t.defaults.buttonTextKey;
    return E != null && p[E] != null ? p[E] : p[t.type] != null ? p[t.type] : p[l] != null ? p[l] : null;
  };
  return {
    type: t.type,
    component: t.component,
    duration: o,
    durationUnit: s,
    singleUnit: l,
    optionDefaults: t.defaults,
    optionOverrides: h(h({}, c), t.overrides),
    buttonTextOverride: f(n) || f(r) || // constructor-specified buttonText lookup hash takes precedence
    t.overrides.buttonText,
    buttonTextDefault: f(i) || t.defaults.buttonText || f(ke) || t.type,
    // not DRY
    buttonTitleOverride: v(n) || v(r) || t.overrides.buttonHint,
    buttonTitleDefault: v(i) || t.defaults.buttonHint || v(ke)
    // will eventually fall back to buttonText
  };
}
var cn = {};
function dl(t) {
  var e = JSON.stringify(t), r = cn[e];
  return r === void 0 && (r = k(t), cn[e] = r), r;
}
var Ri = (
  /** @class */
  function() {
    function t(e) {
      this.props = e, this.nowDate = Oe(e.nowInput, e.dateEnv), this.initHiddenDays();
    }
    return t.prototype.buildPrev = function(e, r, n) {
      var i = this.props.dateEnv, a = i.subtract(
        i.startOf(r, e.currentRangeUnit),
        // important for start-of-month
        e.dateIncrement
      );
      return this.build(a, -1, n);
    }, t.prototype.buildNext = function(e, r, n) {
      var i = this.props.dateEnv, a = i.add(
        i.startOf(r, e.currentRangeUnit),
        // important for start-of-month
        e.dateIncrement
      );
      return this.build(a, 1, n);
    }, t.prototype.build = function(e, r, n) {
      n === void 0 && (n = !0);
      var i = this.props, a, o, s, l, c, u;
      return a = this.buildValidRange(), a = this.trimHiddenDays(a), n && (e = $o(e, a)), o = this.buildCurrentRangeInfo(e, r), s = /^(year|month|week|day)$/.test(o.unit), l = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, s), l = this.trimHiddenDays(l), c = l, i.showNonCurrentDates || (c = Ae(c, o.range)), c = this.adjustActiveRange(c), c = Ae(c, a), u = sr(o.range, a), {
        // constraint for where prev/next operations can go and where events can be dragged/resized to.
        // an object with optional start and end properties.
        validRange: a,
        // range the view is formally responsible for.
        // for example, a month view might have 1st-31st, excluding padded dates
        currentRange: o.range,
        // name of largest unit being displayed, like "month" or "week"
        currentRangeUnit: o.unit,
        isRangeAllDay: s,
        // dates that display events and accept drag-n-drop
        // will be `null` if no dates accept events
        activeRange: c,
        // date range with a rendered skeleton
        // includes not-active days that need some sort of DOM
        renderRange: l,
        // Duration object that denotes the first visible time of any given day
        slotMinTime: i.slotMinTime,
        // Duration object that denotes the exclusive visible end time of any given day
        slotMaxTime: i.slotMaxTime,
        isValid: u,
        // how far the current date will move for a prev/next operation
        dateIncrement: this.buildDateIncrement(o.duration)
        // pass a fallback (might be null) ^
      };
    }, t.prototype.buildValidRange = function() {
      var e = this.props.validRangeInput, r = typeof e == "function" ? e.call(this.props.calendarApi, this.nowDate) : e;
      return this.refineRange(r) || { start: null, end: null };
    }, t.prototype.buildCurrentRangeInfo = function(e, r) {
      var n = this.props, i = null, a = null, o = null, s;
      return n.duration ? (i = n.duration, a = n.durationUnit, o = this.buildRangeFromDuration(e, r, i, a)) : (s = this.props.dayCount) ? (a = "day", o = this.buildRangeFromDayCount(e, r, s)) : (o = this.buildCustomVisibleRange(e)) ? a = n.dateEnv.greatestWholeUnit(o.start, o.end).unit : (i = this.getFallbackDuration(), a = Ut(i).unit, o = this.buildRangeFromDuration(e, r, i, a)), { duration: i, unit: a, range: o };
    }, t.prototype.getFallbackDuration = function() {
      return k({ day: 1 });
    }, t.prototype.adjustActiveRange = function(e) {
      var r = this.props, n = r.dateEnv, i = r.usesMinMaxTime, a = r.slotMinTime, o = r.slotMaxTime, s = e.start, l = e.end;
      return i && (ge(a) < 0 && (s = H(s), s = n.add(s, a)), ge(o) > 1 && (l = H(l), l = W(l, -1), l = n.add(l, o))), { start: s, end: l };
    }, t.prototype.buildRangeFromDuration = function(e, r, n, i) {
      var a = this.props, o = a.dateEnv, s = a.dateAlignment, l, c, u;
      if (!s) {
        var f = this.props.dateIncrement;
        f && Ne(f) < Ne(n) ? s = Ut(f).unit : s = i;
      }
      ge(n) <= 1 && this.isHiddenDay(l) && (l = this.skipHiddenDays(l, r), l = H(l));
      function v() {
        l = o.startOf(e, s), c = o.add(l, n), u = { start: l, end: c };
      }
      return v(), this.trimHiddenDays(u) || (e = this.skipHiddenDays(e, r), v()), u;
    }, t.prototype.buildRangeFromDayCount = function(e, r, n) {
      var i = this.props, a = i.dateEnv, o = i.dateAlignment, s = 0, l = e, c;
      o && (l = a.startOf(l, o)), l = H(l), l = this.skipHiddenDays(l, r), c = l;
      do
        c = W(c, 1), this.isHiddenDay(c) || (s += 1);
      while (s < n);
      return { start: l, end: c };
    }, t.prototype.buildCustomVisibleRange = function(e) {
      var r = this.props, n = r.visibleRangeInput, i = typeof n == "function" ? n.call(r.calendarApi, r.dateEnv.toDate(e)) : n, a = this.refineRange(i);
      return a && (a.start == null || a.end == null) ? null : a;
    }, t.prototype.buildRenderRange = function(e, r, n) {
      return e;
    }, t.prototype.buildDateIncrement = function(e) {
      var r = this.props.dateIncrement, n;
      return r || ((n = this.props.dateAlignment) ? k(1, n) : e || k({ days: 1 }));
    }, t.prototype.refineRange = function(e) {
      if (e) {
        var r = jo(e, this.props.dateEnv);
        return r && (r = ei(r)), r;
      }
      return null;
    }, t.prototype.initHiddenDays = function() {
      var e = this.props.hiddenDays || [], r = [], n = 0, i;
      for (this.props.weekends === !1 && e.push(0, 6), i = 0; i < 7; i += 1)
        (r[i] = e.indexOf(i) !== -1) || (n += 1);
      if (!n)
        throw new Error("invalid hiddenDays");
      this.isHiddenDayHash = r;
    }, t.prototype.trimHiddenDays = function(e) {
      var r = e.start, n = e.end;
      return r && (r = this.skipHiddenDays(r)), n && (n = this.skipHiddenDays(n, -1, !0)), r == null || n == null || r < n ? { start: r, end: n } : null;
    }, t.prototype.isHiddenDay = function(e) {
      return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e];
    }, t.prototype.skipHiddenDays = function(e, r, n) {
      for (r === void 0 && (r = 1), n === void 0 && (n = !1); this.isHiddenDayHash[(e.getUTCDay() + (n ? r : 0) + 7) % 7]; )
        e = W(e, r);
      return e;
    }, t;
  }()
);
function vl(t, e) {
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      t = e.viewType;
  }
  return t;
}
function pl(t, e) {
  var r;
  switch (e.type) {
    case "SET_OPTION":
      return h(h({}, t), (r = {}, r[e.optionName] = e.rawOptionValue, r));
    default:
      return t;
  }
}
function hl(t, e, r, n) {
  var i;
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      return n.build(e.dateMarker || r);
    case "CHANGE_DATE":
      return n.build(e.dateMarker);
    case "PREV":
      if (i = n.buildPrev(t, r), i.isValid)
        return i;
      break;
    case "NEXT":
      if (i = n.buildNext(t, r), i.isValid)
        return i;
      break;
  }
  return t;
}
function gl(t, e, r) {
  var n = e ? e.activeRange : null;
  return Ti({}, Cl(t, r), n, r);
}
function ml(t, e, r, n) {
  var i = r ? r.activeRange : null;
  switch (e.type) {
    case "ADD_EVENT_SOURCES":
      return Ti(t, e.sources, i, n);
    case "REMOVE_EVENT_SOURCE":
      return El(t, e.sourceId);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return r ? _i(t, i, n) : t;
    case "FETCH_EVENT_SOURCES":
      return hr(t, e.sourceIds ? (
        // why no type?
        Zn(e.sourceIds)
      ) : Mi(t, n), i, e.isRefetch || !1, n);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return Dl(t, e.sourceId, e.fetchId, e.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return t;
  }
}
function yl(t, e, r) {
  var n = e ? e.activeRange : null;
  return hr(t, Mi(t, r), n, !0, r);
}
function wi(t) {
  for (var e in t)
    if (t[e].isFetching)
      return !0;
  return !1;
}
function Ti(t, e, r, n) {
  for (var i = {}, a = 0, o = e; a < o.length; a++) {
    var s = o[a];
    i[s.sourceId] = s;
  }
  return r && (i = _i(i, r, n)), h(h({}, t), i);
}
function El(t, e) {
  return ce(t, function(r) {
    return r.sourceId !== e;
  });
}
function _i(t, e, r) {
  return hr(t, ce(t, function(n) {
    return Sl(n, e, r);
  }), e, !1, r);
}
function Sl(t, e, r) {
  return ki(t, r) ? !r.options.lazyFetching || !t.fetchRange || t.isFetching || // always cancel outdated in-progress fetches
  e.start < t.fetchRange.start || e.end > t.fetchRange.end : !t.latestFetchId;
}
function hr(t, e, r, n, i) {
  var a = {};
  for (var o in t) {
    var s = t[o];
    e[o] ? a[o] = bl(s, r, n, i) : a[o] = s;
  }
  return a;
}
function bl(t, e, r, n) {
  var i = n.options, a = n.calendarApi, o = n.pluginHooks.eventSourceDefs[t.sourceDefId], s = De();
  return o.fetch({
    eventSource: t,
    range: e,
    isRefetch: r,
    context: n
  }, function(l) {
    var c = l.rawEvents;
    i.eventSourceSuccess && (c = i.eventSourceSuccess.call(a, c, l.xhr) || c), t.success && (c = t.success.call(a, c, l.xhr) || c), n.dispatch({
      type: "RECEIVE_EVENTS",
      sourceId: t.sourceId,
      fetchId: s,
      fetchRange: e,
      rawEvents: c
    });
  }, function(l) {
    console.warn(l.message, l), i.eventSourceFailure && i.eventSourceFailure.call(a, l), t.failure && t.failure(l), n.dispatch({
      type: "RECEIVE_EVENT_ERROR",
      sourceId: t.sourceId,
      fetchId: s,
      fetchRange: e,
      error: l
    });
  }), h(h({}, t), { isFetching: !0, latestFetchId: s });
}
function Dl(t, e, r, n) {
  var i, a = t[e];
  return a && // not already removed
  r === a.latestFetchId ? h(h({}, t), (i = {}, i[e] = h(h({}, a), { isFetching: !1, fetchRange: n }), i)) : t;
}
function Mi(t, e) {
  return ce(t, function(r) {
    return ki(r, e);
  });
}
function Cl(t, e) {
  var r = li(e), n = [].concat(t.eventSources || []), i = [];
  t.initialEvents && n.unshift(t.initialEvents), t.events && n.unshift(t.events);
  for (var a = 0, o = n; a < o.length; a++) {
    var s = o[a], l = si(s, e, r);
    l && i.push(l);
  }
  return i;
}
function ki(t, e) {
  var r = e.pluginHooks.eventSourceDefs;
  return !r[t.sourceDefId].ignoreRange;
}
function Rl(t, e, r, n, i) {
  switch (e.type) {
    case "RECEIVE_EVENTS":
      return wl(t, r[e.sourceId], e.fetchId, e.fetchRange, e.rawEvents, i);
    case "ADD_EVENTS":
      return _l(
        t,
        e.eventStore,
        // new ones
        n ? n.activeRange : null,
        i
      );
    case "RESET_EVENTS":
      return e.eventStore;
    case "MERGE_EVENTS":
      return ar(t, e.eventStore);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return n ? Ee(t, n.activeRange, i) : t;
    case "REMOVE_EVENTS":
      return Vo(t, e.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return Ii(t, e.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return dt(t, function(a) {
        return !a.sourceId;
      });
    case "REMOVE_ALL_EVENTS":
      return Y();
    default:
      return t;
  }
}
function wl(t, e, r, n, i, a) {
  if (e && // not already removed
  r === e.latestFetchId) {
    var o = it(Tl(i, e, a), e, a);
    return n && (o = Ee(o, n, a)), ar(Ii(t, e.sourceId), o);
  }
  return t;
}
function Tl(t, e, r) {
  var n = r.options.eventDataTransform, i = e ? e.eventDataTransform : null;
  return i && (t = fn(t, i)), n && (t = fn(t, n)), t;
}
function fn(t, e) {
  var r;
  if (!e)
    r = t;
  else {
    r = [];
    for (var n = 0, i = t; n < i.length; n++) {
      var a = i[n], o = e(a);
      o ? r.push(o) : o == null && r.push(a);
    }
  }
  return r;
}
function _l(t, e, r, n) {
  return r && (e = Ee(e, r, n)), ar(t, e);
}
function Ml(t, e, r) {
  var n = t.defs, i = fe(t.instances, function(a) {
    var o = n[a.defId];
    return o.allDay || o.recurringDef ? a : h(h({}, a), { range: {
      start: r.createMarker(e.toDate(a.range.start, a.forcedStartTzo)),
      end: r.createMarker(e.toDate(a.range.end, a.forcedEndTzo))
    }, forcedStartTzo: r.canComputeOffset ? null : a.forcedStartTzo, forcedEndTzo: r.canComputeOffset ? null : a.forcedEndTzo });
  });
  return { defs: n, instances: i };
}
function Ii(t, e) {
  return dt(t, function(r) {
    return r.sourceId !== e;
  });
}
function kl(t, e) {
  return {
    defs: t.defs,
    instances: ce(t.instances, function(r) {
      return !e[r.instanceId];
    })
  };
}
function Il(t, e) {
  switch (e.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return e.selection;
    default:
      return t;
  }
}
function Pl(t, e) {
  switch (e.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return e.eventInstanceId;
    default:
      return t;
  }
}
function Hl(t, e) {
  var r;
  switch (e.type) {
    case "UNSET_EVENT_DRAG":
      return null;
    case "SET_EVENT_DRAG":
      return r = e.state, {
        affectedEvents: r.affectedEvents,
        mutatedEvents: r.mutatedEvents,
        isEvent: r.isEvent
      };
    default:
      return t;
  }
}
function xl(t, e) {
  var r;
  switch (e.type) {
    case "UNSET_EVENT_RESIZE":
      return null;
    case "SET_EVENT_RESIZE":
      return r = e.state, {
        affectedEvents: r.affectedEvents,
        mutatedEvents: r.mutatedEvents,
        isEvent: r.isEvent
      };
    default:
      return t;
  }
}
function Nl(t, e, r, n, i) {
  var a = t.headerToolbar ? dn(t.headerToolbar, t, e, r, n, i) : null, o = t.footerToolbar ? dn(t.footerToolbar, t, e, r, n, i) : null;
  return { header: a, footer: o };
}
function dn(t, e, r, n, i, a) {
  var o = {}, s = [], l = !1;
  for (var c in t) {
    var u = t[c], f = Al(u, e, r, n, i, a);
    o[c] = f.widgets, s.push.apply(s, f.viewsWithButtons), l = l || f.hasTitle;
  }
  return { sectionWidgets: o, viewsWithButtons: s, hasTitle: l };
}
function Al(t, e, r, n, i, a) {
  var o = e.direction === "rtl", s = e.customButtons || {}, l = r.buttonText || {}, c = e.buttonText || {}, u = r.buttonHints || {}, f = e.buttonHints || {}, v = t ? t.split(" ") : [], d = [], p = !1, E = v.map(function(S) {
    return S.split(",").map(function(g) {
      if (g === "title")
        return p = !0, { buttonName: g };
      var b, C, D, I, _, P;
      if (b = s[g])
        D = function(L) {
          b.click && b.click.call(L.target, L, L.target);
        }, (I = n.getCustomButtonIconClass(b)) || (I = n.getIconClass(g, o)) || (_ = b.text), P = b.hint || b.text;
      else if (C = i[g]) {
        d.push(g), D = function() {
          a.changeView(g);
        }, (_ = C.buttonTextOverride) || (I = n.getIconClass(g, o)) || (_ = C.buttonTextDefault);
        var w = C.buttonTextOverride || C.buttonTextDefault;
        P = Me(
          C.buttonTitleOverride || C.buttonTitleDefault || e.viewHint,
          [w, g],
          // view-name = buttonName
          w
        );
      } else if (a[g])
        if (D = function() {
          a[g]();
        }, (_ = l[g]) || (I = n.getIconClass(g, o)) || (_ = c[g]), g === "prevYear" || g === "nextYear") {
          var N = g === "prevYear" ? "prev" : "next";
          P = Me(u[N] || f[N], [
            c.year || "year",
            "year"
          ], c[g]);
        } else
          P = function(L) {
            return Me(u[g] || f[g], [
              c[L] || L,
              L
            ], c[g]);
          };
      return { buttonName: g, buttonClick: D, buttonIcon: I, buttonText: _, buttonHint: P };
    });
  });
  return { widgets: E, viewsWithButtons: d, hasTitle: p };
}
var Ol = {
  ignoreRange: !0,
  parseMeta: function(t) {
    return Array.isArray(t.events) ? t.events : null;
  },
  fetch: function(t, e) {
    e({
      rawEvents: t.eventSource.meta
    });
  }
}, Ll = te({
  eventSourceDefs: [Ol]
}), Ul = {
  parseMeta: function(t) {
    return typeof t.events == "function" ? t.events : null;
  },
  fetch: function(t, e, r) {
    var n = t.context.dateEnv, i = t.eventSource.meta;
    js(i.bind(null, ii(t.range, n)), function(a) {
      e({ rawEvents: a });
    }, r);
  }
}, Vl = te({
  eventSourceDefs: [Ul]
});
function Wl(t, e, r, n, i) {
  t = t.toUpperCase();
  var a = null;
  t === "GET" ? e = Bl(e, r) : a = Pi(r);
  var o = new XMLHttpRequest();
  o.open(t, e, !0), t !== "GET" && o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.onload = function() {
    if (o.status >= 200 && o.status < 400) {
      var s = !1, l = void 0;
      try {
        l = JSON.parse(o.responseText), s = !0;
      } catch {
      }
      s ? n(l, o) : i("Failure parsing JSON", o);
    } else
      i("Request failed", o);
  }, o.onerror = function() {
    i("Request failed", o);
  }, o.send(a);
}
function Bl(t, e) {
  return t + (t.indexOf("?") === -1 ? "?" : "&") + Pi(e);
}
function Pi(t) {
  var e = [];
  for (var r in t)
    e.push(encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
  return e.join("&");
}
var Fl = {
  method: String,
  extraParams: y,
  startParam: String,
  endParam: String,
  timeZoneParam: String
}, zl = {
  parseMeta: function(t) {
    return t.url && (t.format === "json" || !t.format) ? {
      url: t.url,
      format: "json",
      method: (t.method || "GET").toUpperCase(),
      extraParams: t.extraParams,
      startParam: t.startParam,
      endParam: t.endParam,
      timeZoneParam: t.timeZoneParam
    } : null;
  },
  fetch: function(t, e, r) {
    var n = t.eventSource.meta, i = ql(n, t.range, t.context);
    Wl(n.method, n.url, i, function(a, o) {
      e({ rawEvents: a, xhr: o });
    }, function(a, o) {
      r({ message: a, xhr: o });
    });
  }
}, Gl = te({
  eventSourceRefiners: Fl,
  eventSourceDefs: [zl]
});
function ql(t, e, r) {
  var n = r.dateEnv, i = r.options, a, o, s, l, c = {};
  return a = t.startParam, a == null && (a = i.startParam), o = t.endParam, o == null && (o = i.endParam), s = t.timeZoneParam, s == null && (s = i.timeZoneParam), typeof t.extraParams == "function" ? l = t.extraParams() : l = t.extraParams || {}, h(c, l), c[a] = n.formatIso(e.start), c[o] = n.formatIso(e.end), n.timeZone !== "local" && (c[s] = n.timeZone), c;
}
var Yl = {
  daysOfWeek: y,
  startTime: k,
  endTime: k,
  duration: k,
  startRecur: y,
  endRecur: y
}, jl = {
  parse: function(t, e) {
    if (t.daysOfWeek || t.startTime || t.endTime || t.startRecur || t.endRecur) {
      var r = {
        daysOfWeek: t.daysOfWeek || null,
        startTime: t.startTime || null,
        endTime: t.endTime || null,
        startRecur: t.startRecur ? e.createMarker(t.startRecur) : null,
        endRecur: t.endRecur ? e.createMarker(t.endRecur) : null
      }, n = void 0;
      return t.duration && (n = t.duration), !n && t.startTime && t.endTime && (n = yo(t.endTime, t.startTime)), {
        allDayGuess: !t.startTime && !t.endTime,
        duration: n,
        typeData: r
        // doesn't need endTime anymore but oh well
      };
    }
    return null;
  },
  expand: function(t, e, r) {
    var n = Ae(e, { start: t.startRecur, end: t.endRecur });
    return n ? Xl(t.daysOfWeek, t.startTime, n, r) : [];
  }
}, Zl = te({
  recurringTypes: [jl],
  eventRefiners: Yl
});
function Xl(t, e, r, n) {
  for (var i = t ? Zn(t) : null, a = H(r.start), o = r.end, s = []; a < o; ) {
    var l = void 0;
    (!i || i[a.getUTCDay()]) && (e ? l = n.add(a, e) : l = a, s.push(l)), a = W(a, 1);
  }
  return s;
}
var $l = te({
  optionChangeHandlers: {
    events: function(t, e) {
      vn([t], e);
    },
    eventSources: vn
  }
});
function vn(t, e) {
  for (var r = tr(e.getCurrentData().eventSources), n = [], i = 0, a = t; i < a.length; i++) {
    for (var o = a[i], s = !1, l = 0; l < r.length; l += 1)
      if (r[l]._raw === o) {
        r.splice(l, 1), s = !0;
        break;
      }
    s || n.push(o);
  }
  for (var c = 0, u = r; c < u.length; c++) {
    var f = u[c];
    e.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: f.sourceId
    });
  }
  for (var v = 0, d = n; v < d.length; v++) {
    var p = d[v];
    e.calendarApi.addEventSource(p);
  }
}
function Kl(t, e) {
  e.emitter.trigger("datesSet", h(h({}, ii(t.activeRange, e.dateEnv)), { view: e.viewApi }));
}
function Jl(t, e) {
  var r = e.emitter;
  r.hasHandlers("eventsSet") && r.trigger("eventsSet", se(t, e));
}
var Ql = [
  Ll,
  Vl,
  Gl,
  Zl,
  $l,
  te({
    isLoadingFuncs: [
      function(t) {
        return wi(t.eventSources);
      }
    ],
    contentTypeHandlers: {
      html: eu,
      domNodes: tu
    },
    propSetHandlers: {
      dateProfile: Kl,
      eventStore: Jl
    }
  })
];
function eu() {
  var t = null, e = "";
  function r(i, a) {
    (i !== t || a !== e) && (i.innerHTML = a), t = i, e = a;
  }
  function n() {
    t.innerHTML = "", t = null, e = "";
  }
  return { render: r, destroy: n };
}
function tu() {
  var t = null, e = [];
  function r(i, a) {
    var o = Array.prototype.slice.call(a);
    if (i !== t || !Se(e, o)) {
      for (var s = 0, l = o; s < l.length; s++) {
        var c = l[s];
        i.appendChild(c);
      }
      n();
    }
    t = i, e = o;
  }
  function n() {
    e.forEach($t), e = [], t = null;
  }
  return { render: r, destroy: n };
}
var gr = (
  /** @class */
  function() {
    function t(e) {
      this.drainedOption = e, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0;
    }
    return t.prototype.request = function(e) {
      this.isDirty = !0, this.isPaused() || (this.clearTimeout(), e == null ? this.tryDrain() : this.timeoutId = setTimeout(
        // NOT OPTIMAL! TODO: look at debounce
        this.tryDrain.bind(this),
        e
      ));
    }, t.prototype.pause = function(e) {
      e === void 0 && (e = "");
      var r = this.pauseDepths;
      r[e] = (r[e] || 0) + 1, this.clearTimeout();
    }, t.prototype.resume = function(e, r) {
      e === void 0 && (e = "");
      var n = this.pauseDepths;
      if (e in n) {
        if (r)
          delete n[e];
        else {
          n[e] -= 1;
          var i = n[e];
          i <= 0 && delete n[e];
        }
        this.tryDrain();
      }
    }, t.prototype.isPaused = function() {
      return Object.keys(this.pauseDepths).length;
    }, t.prototype.tryDrain = function() {
      if (!this.isRunning && !this.isPaused()) {
        for (this.isRunning = !0; this.isDirty; )
          this.isDirty = !1, this.drained();
        this.isRunning = !1;
      }
    }, t.prototype.clear = function() {
      this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {};
    }, t.prototype.clearTimeout = function() {
      this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0);
    }, t.prototype.drained = function() {
      this.drainedOption && this.drainedOption();
    }, t;
  }()
), ru = (
  /** @class */
  function() {
    function t(e, r) {
      this.runTaskOption = e, this.drainedOption = r, this.queue = [], this.delayedRunner = new gr(this.drain.bind(this));
    }
    return t.prototype.request = function(e, r) {
      this.queue.push(e), this.delayedRunner.request(r);
    }, t.prototype.pause = function(e) {
      this.delayedRunner.pause(e);
    }, t.prototype.resume = function(e, r) {
      this.delayedRunner.resume(e, r);
    }, t.prototype.drain = function() {
      for (var e = this.queue; e.length; ) {
        for (var r = [], n = void 0; n = e.shift(); )
          this.runTask(n), r.push(n);
        this.drained(r);
      }
    }, t.prototype.runTask = function(e) {
      this.runTaskOption && this.runTaskOption(e);
    }, t.prototype.drained = function(e) {
      this.drainedOption && this.drainedOption(e);
    }, t;
  }()
);
function nu(t, e, r) {
  var n;
  return /^(year|month)$/.test(t.currentRangeUnit) ? n = t.currentRange : n = t.activeRange, r.formatRange(n.start, n.end, U(e.titleFormat || iu(t)), {
    isEndExclusive: t.isRangeAllDay,
    defaultSeparator: e.titleRangeSeparator
  });
}
function iu(t) {
  var e = t.currentRangeUnit;
  if (e === "year")
    return { year: "numeric" };
  if (e === "month")
    return { year: "numeric", month: "long" };
  var r = et(t.currentRange.start, t.currentRange.end);
  return r !== null && r > 1 ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "long", day: "numeric" };
}
var Hi = (
  /** @class */
  function() {
    function t(e) {
      var r = this;
      this.computeOptionsData = M(this._computeOptionsData), this.computeCurrentViewData = M(this._computeCurrentViewData), this.organizeRawLocales = M(_s), this.buildLocale = M(vi), this.buildPluginHooks = nl(), this.buildDateEnv = M(au), this.buildTheme = M(ou), this.parseToolbars = M(Nl), this.buildViewSpecs = M(cl), this.buildDateProfileGenerator = Ze(su), this.buildViewApi = M(lu), this.buildViewUiProps = Ze(fu), this.buildEventUiBySource = M(uu, X), this.buildEventUiBases = M(cu), this.parseContextBusinessHours = Ze(du), this.buildTitle = M(nu), this.emitter = new pt(), this.actionRunner = new ru(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.getCurrentData = function() {
        return r.data;
      }, this.dispatch = function(C) {
        r.actionRunner.request(C);
      }, this.props = e, this.actionRunner.pause();
      var n = {}, i = this.computeOptionsData(e.optionOverrides, n, e.calendarApi), a = i.calendarOptions.initialView || i.pluginHooks.initialView, o = this.computeCurrentViewData(a, i, e.optionOverrides, n);
      e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(o.options);
      var s = ys(i.calendarOptions, i.dateEnv), l = o.dateProfileGenerator.build(s);
      oe(l.activeRange, s) || (s = l.currentRange.start);
      for (var c = {
        dateEnv: i.dateEnv,
        options: i.calendarOptions,
        pluginHooks: i.pluginHooks,
        calendarApi: e.calendarApi,
        dispatch: this.dispatch,
        emitter: this.emitter,
        getCurrentData: this.getCurrentData
      }, u = 0, f = i.pluginHooks.contextInit; u < f.length; u++) {
        var v = f[u];
        v(c);
      }
      for (var d = gl(i.calendarOptions, l, c), p = {
        dynamicOptionOverrides: n,
        currentViewType: a,
        currentDate: s,
        dateProfile: l,
        businessHours: this.parseContextBusinessHours(c),
        eventSources: d,
        eventUiBases: {},
        eventStore: Y(),
        renderableEventStore: Y(),
        dateSelection: null,
        eventSelection: "",
        eventDrag: null,
        eventResize: null,
        selectionConfig: this.buildViewUiProps(c).selectionConfig
      }, E = h(h({}, c), p), S = 0, g = i.pluginHooks.reducers; S < g.length; S++) {
        var b = g[S];
        h(p, b(null, null, E));
      }
      It(p, c) && this.emitter.trigger("loading", !0), this.state = p, this.updateData(), this.actionRunner.resume();
    }
    return t.prototype.resetOptions = function(e, r) {
      var n = this.props;
      n.optionOverrides = r ? h(h({}, n.optionOverrides), e) : e, this.actionRunner.request({
        type: "NOTHING"
      });
    }, t.prototype._handleAction = function(e) {
      var r = this, n = r.props, i = r.state, a = r.emitter, o = pl(i.dynamicOptionOverrides, e), s = this.computeOptionsData(n.optionOverrides, o, n.calendarApi), l = vl(i.currentViewType, e), c = this.computeCurrentViewData(l, s, n.optionOverrides, o);
      n.calendarApi.currentDataManager = this, a.setThisContext(n.calendarApi), a.setOptions(c.options);
      var u = {
        dateEnv: s.dateEnv,
        options: s.calendarOptions,
        pluginHooks: s.pluginHooks,
        calendarApi: n.calendarApi,
        dispatch: this.dispatch,
        emitter: a,
        getCurrentData: this.getCurrentData
      }, f = i.currentDate, v = i.dateProfile;
      this.data && this.data.dateProfileGenerator !== c.dateProfileGenerator && (v = c.dateProfileGenerator.build(f)), f = ms(f, e), v = hl(v, e, f, c.dateProfileGenerator), (e.type === "PREV" || // TODO: move this logic into DateProfileGenerator
      e.type === "NEXT" || // "
      !oe(v.currentRange, f)) && (f = v.currentRange.start);
      for (var d = ml(i.eventSources, e, v, u), p = Rl(i.eventStore, e, d, v, u), E = wi(d), S = E && !c.options.progressiveEventRendering && i.renderableEventStore || p, g = this.buildViewUiProps(u), b = g.eventUiSingleBase, C = g.selectionConfig, D = this.buildEventUiBySource(d), I = this.buildEventUiBases(S.defs, b, D), _ = {
        dynamicOptionOverrides: o,
        currentViewType: l,
        currentDate: f,
        dateProfile: v,
        eventSources: d,
        eventStore: p,
        renderableEventStore: S,
        selectionConfig: C,
        eventUiBases: I,
        businessHours: this.parseContextBusinessHours(u),
        dateSelection: Il(i.dateSelection, e),
        eventSelection: Pl(i.eventSelection, e),
        eventDrag: Hl(i.eventDrag, e),
        eventResize: xl(i.eventResize, e)
      }, P = h(h({}, u), _), w = 0, N = s.pluginHooks.reducers; w < N.length; w++) {
        var L = N[w];
        h(_, L(i, e, P));
      }
      var Z = It(i, u), z = It(_, u);
      !Z && z ? a.trigger("loading", !0) : Z && !z && a.trigger("loading", !1), this.state = _, n.onAction && n.onAction(e);
    }, t.prototype.updateData = function() {
      var e = this, r = e.props, n = e.state, i = this.data, a = this.computeOptionsData(r.optionOverrides, n.dynamicOptionOverrides, r.calendarApi), o = this.computeCurrentViewData(n.currentViewType, a, r.optionOverrides, n.dynamicOptionOverrides), s = this.data = h(h(h({ viewTitle: this.buildTitle(n.dateProfile, o.options, a.dateEnv), calendarApi: r.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, a), o), n), l = a.pluginHooks.optionChangeHandlers, c = i && i.calendarOptions, u = a.calendarOptions;
      if (c && c !== u) {
        c.timeZone !== u.timeZone && (n.eventSources = s.eventSources = yl(s.eventSources, n.dateProfile, s), n.eventStore = s.eventStore = Ml(s.eventStore, i.dateEnv, s.dateEnv));
        for (var f in l)
          c[f] !== u[f] && l[f](u[f], s);
      }
      r.onData && r.onData(s);
    }, t.prototype._computeOptionsData = function(e, r, n) {
      var i = this.processRawCalendarOptions(e, r), a = i.refinedOptions, o = i.pluginHooks, s = i.localeDefaults, l = i.availableLocaleData, c = i.extra;
      pn(c);
      var u = this.buildDateEnv(a.timeZone, a.locale, a.weekNumberCalculation, a.firstDay, a.weekText, o, l, a.defaultRangeSeparator), f = this.buildViewSpecs(o.views, e, r, s), v = this.buildTheme(a, o), d = this.parseToolbars(a, e, v, f, n);
      return {
        calendarOptions: a,
        pluginHooks: o,
        dateEnv: u,
        viewSpecs: f,
        theme: v,
        toolbarConfig: d,
        localeDefaults: s,
        availableRawLocales: l.map
      };
    }, t.prototype.processRawCalendarOptions = function(e, r) {
      var n = Tt([
        ke,
        e,
        r
      ]), i = n.locales, a = n.locale, o = this.organizeRawLocales(i), s = o.map, l = this.buildLocale(a || o.defaultCode, s).options, c = this.buildPluginHooks(e.plugins || [], Ql), u = this.currentCalendarOptionsRefiners = h(h(h(h(h({}, en), tn), rn), c.listenerRefiners), c.optionRefiners), f = {}, v = Tt([
        ke,
        l,
        e,
        r
      ]), d = {}, p = this.currentCalendarOptionsInput, E = this.currentCalendarOptionsRefined, S = !1;
      for (var g in v)
        g !== "plugins" && (v[g] === p[g] || ne[g] && g in p && ne[g](p[g], v[g]) ? d[g] = E[g] : u[g] ? (d[g] = u[g](v[g]), S = !0) : f[g] = p[g]);
      return S && (this.currentCalendarOptionsInput = v, this.currentCalendarOptionsRefined = d), {
        rawOptions: this.currentCalendarOptionsInput,
        refinedOptions: this.currentCalendarOptionsRefined,
        pluginHooks: c,
        availableLocaleData: o,
        localeDefaults: l,
        extra: f
      };
    }, t.prototype._computeCurrentViewData = function(e, r, n, i) {
      var a = r.viewSpecs[e];
      if (!a)
        throw new Error('viewType "' + e + `" is not available. Please make sure you've loaded all neccessary plugins`);
      var o = this.processRawViewOptions(a, r.pluginHooks, r.localeDefaults, n, i), s = o.refinedOptions, l = o.extra;
      pn(l);
      var c = this.buildDateProfileGenerator({
        dateProfileGeneratorClass: a.optionDefaults.dateProfileGeneratorClass,
        duration: a.duration,
        durationUnit: a.durationUnit,
        usesMinMaxTime: a.optionDefaults.usesMinMaxTime,
        dateEnv: r.dateEnv,
        calendarApi: this.props.calendarApi,
        slotMinTime: s.slotMinTime,
        slotMaxTime: s.slotMaxTime,
        showNonCurrentDates: s.showNonCurrentDates,
        dayCount: s.dayCount,
        dateAlignment: s.dateAlignment,
        dateIncrement: s.dateIncrement,
        hiddenDays: s.hiddenDays,
        weekends: s.weekends,
        nowInput: s.now,
        validRangeInput: s.validRange,
        visibleRangeInput: s.visibleRange,
        monthMode: s.monthMode,
        fixedWeekCount: s.fixedWeekCount
      }), u = this.buildViewApi(e, this.getCurrentData, r.dateEnv);
      return { viewSpec: a, options: s, dateProfileGenerator: c, viewApi: u };
    }, t.prototype.processRawViewOptions = function(e, r, n, i, a) {
      var o = Tt([
        ke,
        e.optionDefaults,
        n,
        i,
        e.optionOverrides,
        a
      ]), s = h(h(h(h(h(h({}, en), tn), rn), Lo), r.listenerRefiners), r.optionRefiners), l = {}, c = this.currentViewOptionsInput, u = this.currentViewOptionsRefined, f = !1, v = {};
      for (var d in o)
        o[d] === c[d] || ne[d] && ne[d](o[d], c[d]) ? l[d] = u[d] : (o[d] === this.currentCalendarOptionsInput[d] || ne[d] && ne[d](o[d], this.currentCalendarOptionsInput[d]) ? d in this.currentCalendarOptionsRefined && (l[d] = this.currentCalendarOptionsRefined[d]) : s[d] ? l[d] = s[d](o[d]) : v[d] = o[d], f = !0);
      return f && (this.currentViewOptionsInput = o, this.currentViewOptionsRefined = l), {
        rawOptions: this.currentViewOptionsInput,
        refinedOptions: this.currentViewOptionsRefined,
        extra: v
      };
    }, t;
  }()
);
function au(t, e, r, n, i, a, o, s) {
  var l = vi(e || o.defaultCode, o.map);
  return new ws({
    calendarSystem: "gregory",
    timeZone: t,
    namedTimeZoneImpl: a.namedTimeZonedImpl,
    locale: l,
    weekNumberCalculation: r,
    firstDay: n,
    weekText: i,
    cmdFormatter: a.cmdFormatter,
    defaultSeparator: s
  });
}
function ou(t, e) {
  var r = e.themeClasses[t.themeSystem] || re;
  return new r(t);
}
function su(t) {
  var e = t.dateProfileGeneratorClass || Ri;
  return new e(t);
}
function lu(t, e, r) {
  return new ps(t, e, r);
}
function uu(t) {
  return fe(t, function(e) {
    return e.ui;
  });
}
function cu(t, e, r) {
  var n = { "": e };
  for (var i in t) {
    var a = t[i];
    a.sourceId && r[a.sourceId] && (n[i] = r[a.sourceId]);
  }
  return n;
}
function fu(t) {
  var e = t.options;
  return {
    eventUiSingleBase: ot({
      display: e.eventDisplay,
      editable: e.editable,
      startEditable: e.eventStartEditable,
      durationEditable: e.eventDurationEditable,
      constraint: e.eventConstraint,
      overlap: typeof e.eventOverlap == "boolean" ? e.eventOverlap : void 0,
      allow: e.eventAllow,
      backgroundColor: e.eventBackgroundColor,
      borderColor: e.eventBorderColor,
      textColor: e.eventTextColor,
      color: e.eventColor
      // classNames: options.eventClassNames // render hook will handle this
    }, t),
    selectionConfig: ot({
      constraint: e.selectConstraint,
      overlap: typeof e.selectOverlap == "boolean" ? e.selectOverlap : void 0,
      allow: e.selectAllow
    }, t)
  };
}
function It(t, e) {
  for (var r = 0, n = e.pluginHooks.isLoadingFuncs; r < n.length; r++) {
    var i = n[r];
    if (i(t))
      return !0;
  }
  return !1;
}
function du(t) {
  return Ps(t.options.businessHours, t);
}
function pn(t, e) {
  for (var r in t)
    console.warn("Unknown option '" + r + "'" + (e ? " for view '" + e + "'" : ""));
}
(function(t) {
  R(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    return n.handleData = function(i) {
      n.dataManager ? n.setState(i) : n.state = i;
    }, n.dataManager = new Hi({
      optionOverrides: r.optionOverrides,
      calendarApi: r.calendarApi,
      onData: n.handleData
    }), n;
  }
  return e.prototype.render = function() {
    return this.props.children(this.state);
  }, e.prototype.componentDidUpdate = function(r) {
    var n = this.props.optionOverrides;
    n !== r.optionOverrides && this.dataManager.resetOptions(n);
  }, e;
})(Xt);
var vu = (
  /** @class */
  function() {
    function t() {
      this.strictOrder = !1, this.allowReslicing = !1, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {};
    }
    return t.prototype.addSegs = function(e) {
      for (var r = [], n = 0, i = e; n < i.length; n++) {
        var a = i[n];
        this.insertEntry(a, r);
      }
      return r;
    }, t.prototype.insertEntry = function(e, r) {
      var n = this.findInsertion(e);
      return this.isInsertionValid(n, e) ? (this.insertEntryAt(e, n), 1) : this.handleInvalidInsertion(n, e, r);
    }, t.prototype.isInsertionValid = function(e, r) {
      return (this.maxCoord === -1 || e.levelCoord + r.thickness <= this.maxCoord) && (this.maxStackCnt === -1 || e.stackCnt < this.maxStackCnt);
    }, t.prototype.handleInvalidInsertion = function(e, r, n) {
      return this.allowReslicing && e.touchingEntry ? this.splitEntry(r, e.touchingEntry, n) : (n.push(r), 0);
    }, t.prototype.splitEntry = function(e, r, n) {
      var i = 0, a = [], o = e.span, s = r.span;
      return o.start < s.start && (i += this.insertEntry({
        index: e.index,
        thickness: e.thickness,
        span: { start: o.start, end: s.start }
      }, a)), o.end > s.end && (i += this.insertEntry({
        index: e.index,
        thickness: e.thickness,
        span: { start: s.end, end: o.end }
      }, a)), i ? (n.push.apply(n, A([{
        index: e.index,
        thickness: e.thickness,
        span: xi(s, o)
        // guaranteed to intersect
      }], a)), i) : (n.push(e), 0);
    }, t.prototype.insertEntryAt = function(e, r) {
      var n = this, i = n.entriesByLevel, a = n.levelCoords;
      r.lateral === -1 ? (Pt(a, r.level, r.levelCoord), Pt(i, r.level, [e])) : Pt(i[r.level], r.lateral, e), this.stackCnts[Pe(e)] = r.stackCnt;
    }, t.prototype.findInsertion = function(e) {
      for (var r = this, n = r.levelCoords, i = r.entriesByLevel, a = r.strictOrder, o = r.stackCnts, s = n.length, l = 0, c = -1, u = -1, f = null, v = 0, d = 0; d < s; d += 1) {
        var p = n[d];
        if (!a && p >= l + e.thickness)
          break;
        for (
          var E = i[d], S = void 0, g = gn(E, e.span.start, hn), b = g[0] + g[1];
          // loop through entries that horizontally intersect
          (S = E[b]) && // but not past the whole entry list
          S.span.start < e.span.end;
        ) {
          var C = p + S.thickness;
          C > l && (l = C, f = S, c = d, u = b), C === l && (v = Math.max(v, o[Pe(S)] + 1)), b += 1;
        }
      }
      var D = 0;
      if (f)
        for (D = c + 1; D < s && n[D] < l; )
          D += 1;
      var I = -1;
      return D < s && n[D] === l && (I = gn(i[D], e.span.end, hn)[0]), {
        touchingLevel: c,
        touchingLateral: u,
        touchingEntry: f,
        stackCnt: v,
        levelCoord: l,
        level: D,
        lateral: I
      };
    }, t.prototype.toRects = function() {
      for (var e = this, r = e.entriesByLevel, n = e.levelCoords, i = r.length, a = [], o = 0; o < i; o += 1)
        for (var s = r[o], l = n[o], c = 0, u = s; c < u.length; c++) {
          var f = u[c];
          a.push(h(h({}, f), { levelCoord: l }));
        }
      return a;
    }, t;
  }()
);
function hn(t) {
  return t.span.end;
}
function Pe(t) {
  return t.index + ":" + t.span.start;
}
function xi(t, e) {
  var r = Math.max(t.start, e.start), n = Math.min(t.end, e.end);
  return r < n ? { start: r, end: n } : null;
}
function Pt(t, e, r) {
  t.splice(e, 0, r);
}
function gn(t, e, r) {
  var n = 0, i = t.length;
  if (!i || e < r(t[n]))
    return [0, 0];
  if (e > r(t[i - 1]))
    return [i, 0];
  for (; n < i; ) {
    var a = Math.floor(n + (i - n) / 2), o = r(t[a]);
    if (e < o)
      i = a;
    else if (e > o)
      n = a + 1;
    else
      return [a, 1];
  }
  return [n, 0];
}
var Te = (
  /** @class */
  function() {
    function t(e) {
      this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null;
    }
    return t.prototype.destroy = function() {
    }, t;
  }()
);
function pu(t, e) {
  return {
    component: t,
    el: e.el,
    useEventCenter: e.useEventCenter != null ? e.useEventCenter : !0,
    isHitComboAllowed: e.isHitComboAllowed || null
  };
}
function mr(t) {
  var e;
  return e = {}, e[t.component.uid] = t, e;
}
var qt = {}, Ni = (
  /** @class */
  function() {
    function t(e, r) {
      this.emitter = new pt();
    }
    return t.prototype.destroy = function() {
    }, t.prototype.setMirrorIsVisible = function(e) {
    }, t.prototype.setMirrorNeedsRevert = function(e) {
    }, t.prototype.setAutoScrollEnabled = function(e) {
    }, t;
  }()
), yr = {}, hu = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.render = function() {
      var r = this, n = this.props.widgetGroups.map(function(i) {
        return r.renderWidgetGroup(i);
      });
      return m.apply(void 0, A(["div", { className: "fc-toolbar-chunk" }], n));
    }, e.prototype.renderWidgetGroup = function(r) {
      for (var n = this.props, i = this.context.theme, a = [], o = !0, s = 0, l = r; s < l.length; s++) {
        var c = l[s], u = c.buttonName, f = c.buttonClick, v = c.buttonText, d = c.buttonIcon, p = c.buttonHint;
        if (u === "title")
          o = !1, a.push(m("h2", { className: "fc-toolbar-title", id: n.titleId }, n.title));
        else {
          var E = u === n.activeButton, S = !n.isTodayEnabled && u === "today" || !n.isPrevEnabled && u === "prev" || !n.isNextEnabled && u === "next", g = ["fc-" + u + "-button", i.getClass("button")];
          E && g.push(i.getClass("buttonActive")), a.push(m("button", { type: "button", title: typeof p == "function" ? p(n.navUnit) : p, disabled: S, "aria-pressed": E, className: g.join(" "), onClick: f }, v || (d ? m("span", { className: d }) : "")));
        }
      }
      if (a.length > 1) {
        var b = o && i.getClass("buttonGroup") || "";
        return m.apply(void 0, A(["div", { className: b }], a));
      }
      return a[0];
    }, e;
  }(x)
), mn = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.render = function() {
      var r = this.props, n = r.model, i = r.extraClassName, a = !1, o, s, l = n.sectionWidgets, c = l.center;
      l.left ? (a = !0, o = l.left) : o = l.start, l.right ? (a = !0, s = l.right) : s = l.end;
      var u = [
        i || "",
        "fc-toolbar",
        a ? "fc-toolbar-ltr" : ""
      ];
      return m(
        "div",
        { className: u.join(" ") },
        this.renderSection("start", o || []),
        this.renderSection("center", c || []),
        this.renderSection("end", s || [])
      );
    }, e.prototype.renderSection = function(r, n) {
      var i = this.props;
      return m(hu, { key: r, widgetGroups: n, title: i.title, navUnit: i.navUnit, activeButton: i.activeButton, isTodayEnabled: i.isTodayEnabled, isPrevEnabled: i.isPrevEnabled, isNextEnabled: i.isNextEnabled, titleId: i.titleId });
    }, e;
  }(x)
), gu = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.state = {
        availableWidth: null
      }, r.handleEl = function(n) {
        r.el = n, $(r.props.elRef, n), r.updateAvailableWidth();
      }, r.handleResize = function() {
        r.updateAvailableWidth();
      }, r;
    }
    return e.prototype.render = function() {
      var r = this, n = r.props, i = r.state, a = n.aspectRatio, o = [
        "fc-view-harness",
        a || n.liquid || n.height ? "fc-view-harness-active" : "fc-view-harness-passive"
        // let the view do the height
      ], s = "", l = "";
      return a ? i.availableWidth !== null ? s = i.availableWidth / a : l = 1 / a * 100 + "%" : s = n.height || "", m("div", { "aria-labelledby": n.labeledById, ref: this.handleEl, className: o.join(" "), style: { height: s, paddingBottom: l } }, n.children);
    }, e.prototype.componentDidMount = function() {
      this.context.addResizeHandler(this.handleResize);
    }, e.prototype.componentWillUnmount = function() {
      this.context.removeResizeHandler(this.handleResize);
    }, e.prototype.updateAvailableWidth = function() {
      this.el && // needed. but why?
      this.props.aspectRatio && this.setState({ availableWidth: this.el.offsetWidth });
    }, e;
  }(x)
), mu = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      return n.handleSegClick = function(i, a) {
        var o = n.component, s = o.context, l = be(a);
        if (l && // might be the <div> surrounding the more link
        o.isValidSegDownEl(i.target)) {
          var c = V(i.target, ".fc-event-forced-url"), u = c ? c.querySelector("a[href]").href : "";
          s.emitter.trigger("eventClick", {
            el: a,
            event: new O(o.context, l.eventRange.def, l.eventRange.instance),
            jsEvent: i,
            view: s.viewApi
          }), u && !i.defaultPrevented && (window.location.href = u);
        }
      }, n.destroy = Gn(
        r.el,
        "click",
        ".fc-event",
        // on both fg and bg events
        n.handleSegClick
      ), n;
    }
    return e;
  }(Te)
), yu = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      return n.handleEventElRemove = function(i) {
        i === n.currentSegEl && n.handleSegLeave(null, n.currentSegEl);
      }, n.handleSegEnter = function(i, a) {
        be(a) && (n.currentSegEl = a, n.triggerEvent("eventMouseEnter", i, a));
      }, n.handleSegLeave = function(i, a) {
        n.currentSegEl && (n.currentSegEl = null, n.triggerEvent("eventMouseLeave", i, a));
      }, n.removeHoverListeners = Wa(
        r.el,
        ".fc-event",
        // on both fg and bg events
        n.handleSegEnter,
        n.handleSegLeave
      ), n;
    }
    return e.prototype.destroy = function() {
      this.removeHoverListeners();
    }, e.prototype.triggerEvent = function(r, n, i) {
      var a = this.component, o = a.context, s = be(i);
      (!n || a.isValidSegDownEl(n.target)) && o.emitter.trigger(r, {
        el: i,
        event: new O(o, s.eventRange.def, s.eventRange.instance),
        jsEvent: n,
        view: o.viewApi
      });
    }, e;
  }(Te)
), Eu = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.buildViewContext = M(Qs), r.buildViewPropTransformers = M(bu), r.buildToolbarProps = M(Su), r.headerRef = G(), r.footerRef = G(), r.interactionsStore = {}, r.state = {
        viewLabelId: ct()
      }, r.registerInteractiveComponent = function(n, i) {
        var a = pu(n, i), o = [
          mu,
          yu
        ], s = o.concat(r.props.pluginHooks.componentInteractions), l = s.map(function(c) {
          return new c(a);
        });
        r.interactionsStore[n.uid] = l, qt[n.uid] = a;
      }, r.unregisterInteractiveComponent = function(n) {
        var i = r.interactionsStore[n.uid];
        if (i) {
          for (var a = 0, o = i; a < o.length; a++) {
            var s = o[a];
            s.destroy();
          }
          delete r.interactionsStore[n.uid];
        }
        delete qt[n.uid];
      }, r.resizeRunner = new gr(function() {
        r.props.emitter.trigger("_resize", !0), r.props.emitter.trigger("windowResize", { view: r.props.viewApi });
      }), r.handleWindowResize = function(n) {
        var i = r.props.options;
        i.handleWindowResize && n.target === window && r.resizeRunner.request(i.windowResizeDelay);
      }, r;
    }
    return e.prototype.render = function() {
      var r = this.props, n = r.toolbarConfig, i = r.options, a = this.buildToolbarProps(
        r.viewSpec,
        r.dateProfile,
        r.dateProfileGenerator,
        r.currentDate,
        Oe(r.options.now, r.dateEnv),
        // TODO: use NowTimer????
        r.viewTitle
      ), o = !1, s = "", l;
      r.isHeightAuto || r.forPrint ? s = "" : i.height != null ? o = !0 : i.contentHeight != null ? s = i.contentHeight : l = Math.max(i.aspectRatio, 0.5);
      var c = this.buildViewContext(r.viewSpec, r.viewApi, r.options, r.dateProfileGenerator, r.dateEnv, r.theme, r.pluginHooks, r.dispatch, r.getCurrentData, r.emitter, r.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent), u = n.header && n.header.hasTitle ? this.state.viewLabelId : "";
      return m(
        de.Provider,
        { value: c },
        n.header && m(mn, h({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: n.header, titleId: u }, a)),
        m(
          gu,
          { liquid: o, height: s, aspectRatio: l, labeledById: u },
          this.renderView(r),
          this.buildAppendContent()
        ),
        n.footer && m(mn, h({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: n.footer, titleId: "" }, a))
      );
    }, e.prototype.componentDidMount = function() {
      var r = this.props;
      this.calendarInteractions = r.pluginHooks.calendarInteractions.map(function(a) {
        return new a(r);
      }), window.addEventListener("resize", this.handleWindowResize);
      var n = r.pluginHooks.propSetHandlers;
      for (var i in n)
        n[i](r[i], r);
    }, e.prototype.componentDidUpdate = function(r) {
      var n = this.props, i = n.pluginHooks.propSetHandlers;
      for (var a in i)
        n[a] !== r[a] && i[a](n[a], n);
    }, e.prototype.componentWillUnmount = function() {
      window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
      for (var r = 0, n = this.calendarInteractions; r < n.length; r++) {
        var i = n[r];
        i.destroy();
      }
      this.props.emitter.trigger("_unmount");
    }, e.prototype.buildAppendContent = function() {
      var r = this.props, n = r.pluginHooks.viewContainerAppends.map(function(i) {
        return i(r);
      });
      return m.apply(void 0, A([B, {}], n));
    }, e.prototype.renderView = function(r) {
      for (var n = r.pluginHooks, i = r.viewSpec, a = {
        dateProfile: r.dateProfile,
        businessHours: r.businessHours,
        eventStore: r.renderableEventStore,
        eventUiBases: r.eventUiBases,
        dateSelection: r.dateSelection,
        eventSelection: r.eventSelection,
        eventDrag: r.eventDrag,
        eventResize: r.eventResize,
        isHeightAuto: r.isHeightAuto,
        forPrint: r.forPrint
      }, o = this.buildViewPropTransformers(n.viewPropsTransformers), s = 0, l = o; s < l.length; s++) {
        var c = l[s];
        h(a, c.transform(a, r));
      }
      var u = i.component;
      return m(u, h({}, a));
    }, e;
  }(ht)
);
function Su(t, e, r, n, i, a) {
  var o = r.build(i, void 0, !1), s = r.buildPrev(e, n, !1), l = r.buildNext(e, n, !1);
  return {
    title: a,
    activeButton: t.type,
    navUnit: t.singleUnit,
    isTodayEnabled: o.isValid && !oe(e.currentRange, i),
    isPrevEnabled: s.isValid,
    isNextEnabled: l.isValid
  };
}
function bu(t) {
  return t.map(function(e) {
    return new e();
  });
}
var Du = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.state = {
        forPrint: !1
      }, r.handleBeforePrint = function() {
        r.setState({ forPrint: !0 });
      }, r.handleAfterPrint = function() {
        r.setState({ forPrint: !1 });
      }, r;
    }
    return e.prototype.render = function() {
      var r = this.props, n = r.options, i = this.state.forPrint, a = i || n.height === "auto" || n.contentHeight === "auto", o = !a && n.height != null ? n.height : "", s = [
        "fc",
        i ? "fc-media-print" : "fc-media-screen",
        "fc-direction-" + n.direction,
        r.theme.getClass("root")
      ];
      return gi() || s.push("fc-liquid-hack"), r.children(s, o, a, i);
    }, e.prototype.componentDidMount = function() {
      var r = this.props.emitter;
      r.on("_beforeprint", this.handleBeforePrint), r.on("_afterprint", this.handleAfterPrint);
    }, e.prototype.componentWillUnmount = function() {
      var r = this.props.emitter;
      r.off("_beforeprint", this.handleBeforePrint), r.off("_afterprint", this.handleAfterPrint);
    }, e;
  }(x)
);
function Cu(t, e) {
  return !t || e > 10 ? U({ weekday: "short" }) : e > 1 ? U({ weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }) : U({ weekday: "long" });
}
var Ai = "fc-col-header-cell";
function Oi(t) {
  return t.text;
}
var Ru = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.render = function() {
      var r = this.context, n = r.dateEnv, i = r.options, a = r.theme, o = r.viewApi, s = this.props, l = s.date, c = s.dateProfile, u = mi(l, s.todayRange, null, c), f = [Ai].concat(cr(u, a)), v = n.format(l, s.dayHeaderFormat), d = !u.isDisabled && s.colCnt > 1 ? fr(this.context, l) : {}, p = h(h(h({ date: n.toDate(l), view: o }, s.extraHookProps), { text: v }), u);
      return m(we, { hookProps: p, classNames: i.dayHeaderClassNames, content: i.dayHeaderContent, defaultContent: Oi, didMount: i.dayHeaderDidMount, willUnmount: i.dayHeaderWillUnmount }, function(E, S, g, b) {
        return m(
          "th",
          h({ ref: E, role: "columnheader", className: f.concat(S).join(" "), "data-date": u.isDisabled ? void 0 : Xn(l), colSpan: s.colSpan }, s.extraDataAttrs),
          m("div", { className: "fc-scrollgrid-sync-inner" }, !u.isDisabled && m("a", h({ ref: g, className: [
            "fc-col-header-cell-cushion",
            s.isSticky ? "fc-sticky" : ""
          ].join(" ") }, d), b))
        );
      });
    }, e;
  }(x)
), wu = U({ weekday: "long" }), Tu = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.render = function() {
      var r = this.props, n = this.context, i = n.dateEnv, a = n.theme, o = n.viewApi, s = n.options, l = W(/* @__PURE__ */ new Date(2592e5), r.dow), c = {
        dow: r.dow,
        isDisabled: !1,
        isFuture: !1,
        isPast: !1,
        isToday: !1,
        isOther: !1
      }, u = [Ai].concat(cr(c, a), r.extraClassNames || []), f = i.format(l, r.dayHeaderFormat), v = h(h(h(h({
        // TODO: make this public?
        date: l
      }, c), { view: o }), r.extraHookProps), { text: f });
      return m(we, { hookProps: v, classNames: s.dayHeaderClassNames, content: s.dayHeaderContent, defaultContent: Oi, didMount: s.dayHeaderDidMount, willUnmount: s.dayHeaderWillUnmount }, function(d, p, E, S) {
        return m(
          "th",
          h({ ref: d, role: "columnheader", className: u.concat(p).join(" "), colSpan: r.colSpan }, r.extraDataAttrs),
          m(
            "div",
            { className: "fc-scrollgrid-sync-inner" },
            m("a", { "aria-label": i.format(l, wu), className: [
              "fc-col-header-cell-cushion",
              r.isSticky ? "fc-sticky" : ""
            ].join(" "), ref: E }, S)
          )
        );
      });
    }, e;
  }(x)
), Li = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r, n) {
      var i = t.call(this, r, n) || this;
      return i.initialNowDate = Oe(n.options.now, n.dateEnv), i.initialNowQueriedMs = (/* @__PURE__ */ new Date()).valueOf(), i.state = i.computeTiming().currentState, i;
    }
    return e.prototype.render = function() {
      var r = this, n = r.props, i = r.state;
      return n.children(i.nowDate, i.todayRange);
    }, e.prototype.componentDidMount = function() {
      this.setTimeout();
    }, e.prototype.componentDidUpdate = function(r) {
      r.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
    }, e.prototype.componentWillUnmount = function() {
      this.clearTimeout();
    }, e.prototype.computeTiming = function() {
      var r = this, n = r.props, i = r.context, a = ue(this.initialNowDate, (/* @__PURE__ */ new Date()).valueOf() - this.initialNowQueriedMs), o = i.dateEnv.startOf(a, n.unit), s = i.dateEnv.add(o, k(1, n.unit)), l = s.valueOf() - a.valueOf();
      return l = Math.min(1e3 * 60 * 60 * 24, l), {
        currentState: { nowDate: o, todayRange: yn(o) },
        nextState: { nowDate: s, todayRange: yn(s) },
        waitMs: l
      };
    }, e.prototype.setTimeout = function() {
      var r = this, n = this.computeTiming(), i = n.nextState, a = n.waitMs;
      this.timeoutId = setTimeout(function() {
        r.setState(i, function() {
          r.setTimeout();
        });
      }, a);
    }, e.prototype.clearTimeout = function() {
      this.timeoutId && clearTimeout(this.timeoutId);
    }, e.contextType = de, e;
  }(Xt)
);
function yn(t) {
  var e = H(t), r = W(e, 1);
  return { start: e, end: r };
}
var _u = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.createDayHeaderFormatter = M(Mu), r;
    }
    return e.prototype.render = function() {
      var r = this.context, n = this.props, i = n.dates, a = n.dateProfile, o = n.datesRepDistinctDays, s = n.renderIntro, l = this.createDayHeaderFormatter(r.options.dayHeaderFormat, o, i.length);
      return m(Li, { unit: "day" }, function(c, u) {
        return m(
          "tr",
          { role: "row" },
          s && s("day"),
          i.map(function(f) {
            return o ? m(Ru, { key: f.toISOString(), date: f, dateProfile: a, todayRange: u, colCnt: i.length, dayHeaderFormat: l }) : m(Tu, { key: f.getUTCDay(), dow: f.getUTCDay(), dayHeaderFormat: l });
          })
        );
      });
    }, e;
  }(x)
);
function Mu(t, e, r) {
  return t || Cu(e, r);
}
var ku = (
  /** @class */
  function() {
    function t(e, r) {
      for (var n = e.start, i = e.end, a = [], o = [], s = -1; n < i; )
        r.isHiddenDay(n) ? a.push(s + 0.5) : (s += 1, a.push(s), o.push(n)), n = W(n, 1);
      this.dates = o, this.indices = a, this.cnt = o.length;
    }
    return t.prototype.sliceRange = function(e) {
      var r = this.getDateDayIndex(e.start), n = this.getDateDayIndex(W(e.end, -1)), i = Math.max(0, r), a = Math.min(this.cnt - 1, n);
      return i = Math.ceil(i), a = Math.floor(a), i <= a ? {
        firstIndex: i,
        lastIndex: a,
        isStart: r === i,
        isEnd: n === a
      } : null;
    }, t.prototype.getDateDayIndex = function(e) {
      var r = this.indices, n = Math.floor(Ce(this.dates[0], e));
      return n < 0 ? r[0] - 1 : n >= r.length ? r[r.length - 1] + 1 : r[n];
    }, t;
  }()
), Iu = (
  /** @class */
  function() {
    function t(e, r) {
      var n = e.dates, i, a, o;
      if (r) {
        for (a = n[0].getUTCDay(), i = 1; i < n.length && n[i].getUTCDay() !== a; i += 1)
          ;
        o = Math.ceil(n.length / i);
      } else
        o = 1, i = n.length;
      this.rowCnt = o, this.colCnt = i, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates();
    }
    return t.prototype.buildCells = function() {
      for (var e = [], r = 0; r < this.rowCnt; r += 1) {
        for (var n = [], i = 0; i < this.colCnt; i += 1)
          n.push(this.buildCell(r, i));
        e.push(n);
      }
      return e;
    }, t.prototype.buildCell = function(e, r) {
      var n = this.daySeries.dates[e * this.colCnt + r];
      return {
        key: n.toISOString(),
        date: n
      };
    }, t.prototype.buildHeaderDates = function() {
      for (var e = [], r = 0; r < this.colCnt; r += 1)
        e.push(this.cells[0][r].date);
      return e;
    }, t.prototype.sliceRange = function(e) {
      var r = this.colCnt, n = this.daySeries.sliceRange(e), i = [];
      if (n)
        for (var a = n.firstIndex, o = n.lastIndex, s = a; s <= o; ) {
          var l = Math.floor(s / r), c = Math.min((l + 1) * r, o + 1);
          i.push({
            row: l,
            firstCol: s % r,
            lastCol: (c - 1) % r,
            isStart: n.isStart && s === a,
            isEnd: n.isEnd && c - 1 === o
          }), s = c;
        }
      return i;
    }, t;
  }()
), Pu = (
  /** @class */
  function() {
    function t() {
      this.sliceBusinessHours = M(this._sliceBusinessHours), this.sliceDateSelection = M(this._sliceDateSpan), this.sliceEventStore = M(this._sliceEventStore), this.sliceEventDrag = M(this._sliceInteraction), this.sliceEventResize = M(this._sliceInteraction), this.forceDayIfListItem = !1;
    }
    return t.prototype.sliceProps = function(e, r, n, i) {
      for (var a = [], o = 4; o < arguments.length; o++)
        a[o - 4] = arguments[o];
      var s = e.eventUiBases, l = this.sliceEventStore.apply(this, A([e.eventStore, s, r, n], a));
      return {
        dateSelectionSegs: this.sliceDateSelection.apply(this, A([e.dateSelection, s, i], a)),
        businessHourSegs: this.sliceBusinessHours.apply(this, A([e.businessHours, r, n, i], a)),
        fgEventSegs: l.fg,
        bgEventSegs: l.bg,
        eventDrag: this.sliceEventDrag.apply(this, A([e.eventDrag, s, r, n], a)),
        eventResize: this.sliceEventResize.apply(this, A([e.eventResize, s, r, n], a)),
        eventSelection: e.eventSelection
      };
    }, t.prototype.sliceNowDate = function(e, r) {
      for (var n = [], i = 2; i < arguments.length; i++)
        n[i - 2] = arguments[i];
      return this._sliceDateSpan.apply(this, A([
        { range: { start: e, end: ue(e, 1) }, allDay: !1 },
        {},
        r
      ], n));
    }, t.prototype._sliceBusinessHours = function(e, r, n, i) {
      for (var a = [], o = 4; o < arguments.length; o++)
        a[o - 4] = arguments[o];
      return e ? this._sliceEventStore.apply(this, A([
        Ee(e, Ht(r, !!n), i),
        {},
        r,
        n
      ], a)).bg : [];
    }, t.prototype._sliceEventStore = function(e, r, n, i) {
      for (var a = [], o = 4; o < arguments.length; o++)
        a[o - 4] = arguments[o];
      if (e) {
        var s = an(e, r, Ht(n, !!i), i);
        return {
          bg: this.sliceEventRanges(s.bg, a),
          fg: this.sliceEventRanges(s.fg, a)
        };
      }
      return { bg: [], fg: [] };
    }, t.prototype._sliceInteraction = function(e, r, n, i) {
      for (var a = [], o = 4; o < arguments.length; o++)
        a[o - 4] = arguments[o];
      if (!e)
        return null;
      var s = an(e.mutatedEvents, r, Ht(n, !!i), i);
      return {
        segs: this.sliceEventRanges(s.fg, a),
        affectedInstances: e.affectedEvents.instances,
        isEvent: e.isEvent
      };
    }, t.prototype._sliceDateSpan = function(e, r, n) {
      for (var i = [], a = 3; a < arguments.length; a++)
        i[a - 3] = arguments[a];
      if (!e)
        return [];
      for (var o = cs(e, r, n), s = this.sliceRange.apply(this, A([e.range], i)), l = 0, c = s; l < c.length; l++) {
        var u = c[l];
        u.eventRange = o;
      }
      return s;
    }, t.prototype.sliceEventRanges = function(e, r) {
      for (var n = [], i = 0, a = e; i < a.length; i++) {
        var o = a[i];
        n.push.apply(n, this.sliceEventRange(o, r));
      }
      return n;
    }, t.prototype.sliceEventRange = function(e, r) {
      var n = e.range;
      this.forceDayIfListItem && e.ui.display === "list-item" && (n = {
        start: n.start,
        end: W(n.start, 1)
      });
      for (var i = this.sliceRange.apply(this, A([n], r)), a = 0, o = i; a < o.length; a++) {
        var s = o[a];
        s.eventRange = e, s.isStart = e.isStart && s.isStart, s.isEnd = e.isEnd && s.isEnd;
      }
      return i;
    }, t;
  }()
);
function Ht(t, e) {
  var r = t.activeRange;
  return e ? r : {
    start: ue(r.start, t.slotMinTime.milliseconds),
    end: ue(r.end, t.slotMaxTime.milliseconds - 864e5)
    // 864e5 = ms in a day
  };
}
function Ui(t, e, r) {
  var n = t.mutatedEvents.instances;
  for (var i in n)
    if (!vt(e.validRange, n[i].range))
      return !1;
  return Vi({ eventDrag: t }, r);
}
function Hu(t, e, r) {
  return vt(e.validRange, t.range) ? Vi({ dateSelection: t }, r) : !1;
}
function Vi(t, e) {
  var r = e.getCurrentData(), n = h({ businessHours: r.businessHours, dateSelection: "", eventStore: r.eventStore, eventUiBases: r.eventUiBases, eventSelection: "", eventDrag: null, eventResize: null }, t);
  return (e.pluginHooks.isPropsValid || xu)(n, e);
}
function xu(t, e, r, n) {
  return r === void 0 && (r = {}), !(t.eventDrag && !Nu(t, e, r, n) || t.dateSelection && !Au(t, e, r, n));
}
function Nu(t, e, r, n) {
  var i = e.getCurrentData(), a = t.eventDrag, o = a.mutatedEvents, s = o.defs, l = o.instances, c = st(s, a.isEvent ? t.eventUiBases : { "": i.selectionConfig });
  n && (c = fe(c, n));
  var u = kl(t.eventStore, a.affectedEvents.instances), f = u.defs, v = u.instances, d = st(f, t.eventUiBases);
  for (var p in l) {
    var E = l[p], S = E.range, g = c[E.defId], b = s[E.defId];
    if (!Wi(g.constraints, S, u, t.businessHours, e))
      return !1;
    var C = e.options.eventOverlap, D = typeof C == "function" ? C : null;
    for (var I in v) {
      var _ = v[I];
      if (sr(S, _.range)) {
        var P = d[_.defId].overlap;
        if (P === !1 && a.isEvent || g.overlap === !1 || D && !D(
          new O(e, f[_.defId], _),
          // still event
          new O(e, b, E)
        ))
          return !1;
      }
    }
    for (var w = i.eventStore, N = 0, L = g.allows; N < L.length; N++) {
      var Z = L[N], z = h(h({}, r), { range: E.range, allDay: b.allDay }), Ve = w.defs[b.defId], We = w.instances[p], yt = void 0;
      if (Ve ? yt = new O(e, Ve, We) : yt = new O(e, b), !Z(lr(z, e), yt))
        return !1;
    }
  }
  return !0;
}
function Au(t, e, r, n) {
  var i = t.eventStore, a = i.defs, o = i.instances, s = t.dateSelection, l = s.range, c = e.getCurrentData().selectionConfig;
  if (n && (c = n(c)), !Wi(c.constraints, l, i, t.businessHours, e))
    return !1;
  var u = e.options.selectOverlap, f = typeof u == "function" ? u : null;
  for (var v in o) {
    var d = o[v];
    if (sr(l, d.range) && (c.overlap === !1 || f && !f(new O(e, a[d.defId], d), null)))
      return !1;
  }
  for (var p = 0, E = c.allows; p < E.length; p++) {
    var S = E[p], g = h(h({}, r), s);
    if (!S(lr(g, e), null))
      return !1;
  }
  return !0;
}
function Wi(t, e, r, n, i) {
  for (var a = 0, o = t; a < o.length; a++) {
    var s = o[a];
    if (!Lu(Ou(s, e, r, n, i), e))
      return !1;
  }
  return !0;
}
function Ou(t, e, r, n, i) {
  return t === "businessHours" ? xt(Ee(n, e, i)) : typeof t == "string" ? xt(dt(r, function(a) {
    return a.groupId === t;
  })) : typeof t == "object" && t ? xt(Ee(t, e, i)) : [];
}
function xt(t) {
  var e = t.instances, r = [];
  for (var n in e)
    r.push(e[n].range);
  return r;
}
function Lu(t, e) {
  for (var r = 0, n = t; r < n.length; r++) {
    var i = n[r];
    if (vt(i, e))
      return !0;
  }
  return !1;
}
var ze = /^(visible|hidden)$/, Uu = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.handleEl = function(n) {
        r.el = n, $(r.props.elRef, n);
      }, r;
    }
    return e.prototype.render = function() {
      var r = this.props, n = r.liquid, i = r.liquidIsAbsolute, a = n && i, o = ["fc-scroller"];
      return n && (i ? o.push("fc-scroller-liquid-absolute") : o.push("fc-scroller-liquid")), m("div", { ref: this.handleEl, className: o.join(" "), style: {
        overflowX: r.overflowX,
        overflowY: r.overflowY,
        left: a && -(r.overcomeLeft || 0) || "",
        right: a && -(r.overcomeRight || 0) || "",
        bottom: a && -(r.overcomeBottom || 0) || "",
        marginLeft: !a && -(r.overcomeLeft || 0) || "",
        marginRight: !a && -(r.overcomeRight || 0) || "",
        marginBottom: !a && -(r.overcomeBottom || 0) || "",
        maxHeight: r.maxHeight || ""
      } }, r.children);
    }, e.prototype.needsXScrolling = function() {
      if (ze.test(this.props.overflowX))
        return !1;
      for (var r = this.el, n = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), i = r.children, a = 0; a < i.length; a += 1) {
        var o = i[a];
        if (o.getBoundingClientRect().width > n)
          return !0;
      }
      return !1;
    }, e.prototype.needsYScrolling = function() {
      if (ze.test(this.props.overflowY))
        return !1;
      for (var r = this.el, n = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), i = r.children, a = 0; a < i.length; a += 1) {
        var o = i[a];
        if (o.getBoundingClientRect().height > n)
          return !0;
      }
      return !1;
    }, e.prototype.getXScrollbarWidth = function() {
      return ze.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
    }, e.prototype.getYScrollbarWidth = function() {
      return ze.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
    }, e;
  }(x)
), ae = (
  /** @class */
  function() {
    function t(e) {
      var r = this;
      this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = function(n, i) {
        var a = r, o = a.depths, s = a.currentMap, l = !1, c = !1;
        n !== null ? (l = i in s, s[i] = n, o[i] = (o[i] || 0) + 1, c = !0) : (o[i] -= 1, o[i] || (delete s[i], delete r.callbackMap[i], l = !0)), r.masterCallback && (l && r.masterCallback(null, String(i)), c && r.masterCallback(n, String(i)));
      };
    }
    return t.prototype.createRef = function(e) {
      var r = this, n = this.callbackMap[e];
      return n || (n = this.callbackMap[e] = function(i) {
        r.handleValue(i, String(e));
      }), n;
    }, t.prototype.collect = function(e, r, n) {
      return fo(this.currentMap, e, r, n);
    }, t.prototype.getAll = function() {
      return tr(this.currentMap);
    }, t;
  }()
);
function Vu(t) {
  for (var e = La(t, ".fc-scrollgrid-shrink"), r = 0, n = 0, i = e; n < i.length; n++) {
    var a = i[n];
    r = Math.max(r, Ka(a));
  }
  return Math.ceil(r);
}
function Bi(t, e) {
  return t.liquid && e.liquid;
}
function Wu(t, e) {
  return e.maxHeight != null || // if its possible for the height to max out, we might need scrollbars
  Bi(t, e);
}
function Bu(t, e, r, n) {
  var i = r.expandRows, a = typeof e.content == "function" ? e.content(r) : m("table", {
    role: "presentation",
    className: [
      e.tableClassName,
      t.syncRowHeights ? "fc-scrollgrid-sync-table" : ""
    ].join(" "),
    style: {
      minWidth: r.tableMinWidth,
      width: r.clientWidth,
      height: i ? r.clientHeight : ""
      // css `height` on a <table> serves as a min-height
    }
  }, r.tableColGroupNode, m(n ? "thead" : "tbody", {
    role: "presentation"
  }, typeof e.rowContent == "function" ? e.rowContent(r) : e.rowContent));
  return a;
}
function Fu(t, e) {
  return Se(t, e, X);
}
function zu(t, e) {
  for (var r = [], n = 0, i = t; n < i.length; n++)
    for (var a = i[n], o = a.span || 1, s = 0; s < o; s += 1)
      r.push(m("col", { style: {
        width: a.width === "shrink" ? Gu(e) : a.width || "",
        minWidth: a.minWidth || ""
      } }));
  return m.apply(void 0, A(["colgroup", {}], r));
}
function Gu(t) {
  return t ?? 4;
}
function qu(t) {
  for (var e = 0, r = t; e < r.length; e++) {
    var n = r[e];
    if (n.width === "shrink")
      return !0;
  }
  return !1;
}
function Yu(t, e) {
  var r = [
    "fc-scrollgrid",
    e.theme.getClass("table")
  ];
  return t && r.push("fc-scrollgrid-liquid"), r;
}
function ju(t, e) {
  var r = [
    "fc-scrollgrid-section",
    "fc-scrollgrid-section-" + t.type,
    t.className
    // used?
  ];
  return e && t.liquid && t.maxHeight == null && r.push("fc-scrollgrid-section-liquid"), t.isSticky && r.push("fc-scrollgrid-section-sticky"), r;
}
function Zu(t) {
  return m("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: t.clientWidth,
    minWidth: t.tableMinWidth
  } });
}
function En(t) {
  var e = t.stickyHeaderDates;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
function Xu(t) {
  var e = t.stickyFooterScrollbar;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
var Fi = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.processCols = M(function(n) {
        return n;
      }, Fu), r.renderMicroColGroup = M(zu), r.scrollerRefs = new ae(), r.scrollerElRefs = new ae(r._handleScrollerEl.bind(r)), r.state = {
        shrinkWidth: null,
        forceYScrollbars: !1,
        scrollerClientWidths: {},
        scrollerClientHeights: {}
      }, r.handleSizing = function() {
        r.safeSetState(h({ shrinkWidth: r.computeShrinkWidth() }, r.computeScrollerDims()));
      }, r;
    }
    return e.prototype.render = function() {
      var r = this, n = r.props, i = r.state, a = r.context, o = n.sections || [], s = this.processCols(n.cols), l = this.renderMicroColGroup(s, i.shrinkWidth), c = Yu(n.liquid, a);
      n.collapsibleWidth && c.push("fc-scrollgrid-collapsible");
      for (var u = o.length, f = 0, v, d = [], p = [], E = []; f < u && (v = o[f]).type === "header"; )
        d.push(this.renderSection(v, l, !0)), f += 1;
      for (; f < u && (v = o[f]).type === "body"; )
        p.push(this.renderSection(v, l, !1)), f += 1;
      for (; f < u && (v = o[f]).type === "footer"; )
        E.push(this.renderSection(v, l, !0)), f += 1;
      var S = !gi(), g = { role: "rowgroup" };
      return m("table", {
        role: "grid",
        className: c.join(" "),
        style: { height: n.height }
      }, !!(!S && d.length) && m.apply(void 0, A(["thead", g], d)), !!(!S && p.length) && m.apply(void 0, A(["tbody", g], p)), !!(!S && E.length) && m.apply(void 0, A(["tfoot", g], E)), S && m.apply(void 0, A(A(A(["tbody", g], d), p), E)));
    }, e.prototype.renderSection = function(r, n, i) {
      return "outerContent" in r ? m(B, { key: r.key }, r.outerContent) : m("tr", { key: r.key, role: "presentation", className: ju(r, this.props.liquid).join(" ") }, this.renderChunkTd(r, n, r.chunk, i));
    }, e.prototype.renderChunkTd = function(r, n, i, a) {
      if ("outerContent" in i)
        return i.outerContent;
      var o = this.props, s = this.state, l = s.forceYScrollbars, c = s.scrollerClientWidths, u = s.scrollerClientHeights, f = Wu(o, r), v = Bi(o, r), d = o.liquid ? l ? "scroll" : f ? "auto" : "hidden" : "visible", p = r.key, E = Bu(r, i, {
        tableColGroupNode: n,
        tableMinWidth: "",
        clientWidth: !o.collapsibleWidth && c[p] !== void 0 ? c[p] : null,
        clientHeight: u[p] !== void 0 ? u[p] : null,
        expandRows: r.expandRows,
        syncRowHeights: !1,
        rowSyncHeights: [],
        reportRowHeightChange: function() {
        }
      }, a);
      return m(a ? "th" : "td", {
        ref: i.elRef,
        role: "presentation"
      }, m(
        "div",
        { className: "fc-scroller-harness" + (v ? " fc-scroller-harness-liquid" : "") },
        m(Uu, { ref: this.scrollerRefs.createRef(p), elRef: this.scrollerElRefs.createRef(p), overflowY: d, overflowX: o.liquid ? "hidden" : "visible", maxHeight: r.maxHeight, liquid: v, liquidIsAbsolute: !0 }, E)
      ));
    }, e.prototype._handleScrollerEl = function(r, n) {
      var i = $u(this.props.sections, n);
      i && $(i.chunk.scrollerElRef, r);
    }, e.prototype.componentDidMount = function() {
      this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
    }, e.prototype.componentDidUpdate = function() {
      this.handleSizing();
    }, e.prototype.componentWillUnmount = function() {
      this.context.removeResizeHandler(this.handleSizing);
    }, e.prototype.computeShrinkWidth = function() {
      return qu(this.props.cols) ? Vu(this.scrollerElRefs.getAll()) : 0;
    }, e.prototype.computeScrollerDims = function() {
      var r = Fs(), n = this, i = n.scrollerRefs, a = n.scrollerElRefs, o = !1, s = {}, l = {};
      for (var c in i.currentMap) {
        var u = i.currentMap[c];
        if (u && u.needsYScrolling()) {
          o = !0;
          break;
        }
      }
      for (var f = 0, v = this.props.sections; f < v.length; f++) {
        var d = v[f], c = d.key, p = a.currentMap[c];
        if (p) {
          var E = p.parentNode;
          s[c] = Math.floor(E.getBoundingClientRect().width - (o ? r.y : 0)), l[c] = Math.floor(E.getBoundingClientRect().height);
        }
      }
      return { forceYScrollbars: o, scrollerClientWidths: s, scrollerClientHeights: l };
    }, e;
  }(x)
);
Fi.addStateEquality({
  scrollerClientWidths: X,
  scrollerClientHeights: X
});
function $u(t, e) {
  for (var r = 0, n = t; r < n.length; r++) {
    var i = n[r];
    if (i.key === e)
      return i;
  }
  return null;
}
var Er = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.elRef = G(), r;
    }
    return e.prototype.render = function() {
      var r = this, n = r.props, i = r.context, a = i.options, o = n.seg, s = o.eventRange, l = s.ui, c = {
        event: new O(i, s.def, s.instance),
        view: i.viewApi,
        timeText: n.timeText,
        textColor: l.textColor,
        backgroundColor: l.backgroundColor,
        borderColor: l.borderColor,
        isDraggable: !n.disableDragging && Qo(o, i),
        isStartResizable: !n.disableResizing && es(o, i),
        isEndResizable: !n.disableResizing && ts(o),
        isMirror: !!(n.isDragging || n.isResizing || n.isDateSelecting),
        isStart: !!o.isStart,
        isEnd: !!o.isEnd,
        isPast: !!n.isPast,
        isFuture: !!n.isFuture,
        isToday: !!n.isToday,
        isSelected: !!n.isSelected,
        isDragging: !!n.isDragging,
        isResizing: !!n.isResizing
      }, u = rs(c).concat(l.classNames);
      return m(we, { hookProps: c, classNames: a.eventClassNames, content: a.eventContent, defaultContent: n.defaultContent, didMount: a.eventDidMount, willUnmount: a.eventWillUnmount, elRef: this.elRef }, function(f, v, d, p) {
        return n.children(f, u.concat(v), d, p, c);
      });
    }, e.prototype.componentDidMount = function() {
      on(this.elRef.current, this.props.seg);
    }, e.prototype.componentDidUpdate = function(r) {
      var n = this.props.seg;
      n !== r.seg && on(this.elRef.current, n);
    }, e;
  }(x)
), Ku = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.render = function() {
      var r = this, n = r.props, i = r.context, a = n.seg, o = i.options.eventTimeFormat || n.defaultTimeFormat, s = ri(a, o, i, n.defaultDisplayEventTime, n.defaultDisplayEventEnd);
      return m(Er, { seg: a, timeText: s, disableDragging: n.disableDragging, disableResizing: n.disableResizing, defaultContent: n.defaultContent || Ju, isDragging: n.isDragging, isResizing: n.isResizing, isDateSelecting: n.isDateSelecting, isSelected: n.isSelected, isPast: n.isPast, isFuture: n.isFuture, isToday: n.isToday }, function(l, c, u, f, v) {
        return m(
          "a",
          h({ className: n.extraClassNames.concat(c).join(" "), style: {
            borderColor: v.borderColor,
            backgroundColor: v.backgroundColor
          }, ref: l }, ni(a, i)),
          m("div", { className: "fc-event-main", ref: u, style: { color: v.textColor } }, f),
          v.isStartResizable && m("div", { className: "fc-event-resizer fc-event-resizer-start" }),
          v.isEndResizable && m("div", { className: "fc-event-resizer fc-event-resizer-end" })
        );
      });
    }, e;
  }(x)
);
function Ju(t) {
  return m(
    "div",
    { className: "fc-event-main-frame" },
    t.timeText && m("div", { className: "fc-event-time" }, t.timeText),
    m(
      "div",
      { className: "fc-event-title-container" },
      m("div", { className: "fc-event-title fc-sticky" }, t.event.title || m(B, null, " "))
    )
  );
}
var Qu = U({ day: "numeric" }), zi = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.render = function() {
      var r = this, n = r.props, i = r.context, a = i.options, o = Gi({
        date: n.date,
        dateProfile: n.dateProfile,
        todayRange: n.todayRange,
        showDayNumber: n.showDayNumber,
        extraProps: n.extraHookProps,
        viewApi: i.viewApi,
        dateEnv: i.dateEnv
      });
      return m(bi, { hookProps: o, content: a.dayCellContent, defaultContent: n.defaultContent }, n.children);
    }, e;
  }(x)
);
function Gi(t) {
  var e = t.date, r = t.dateEnv, n = mi(e, t.todayRange, null, t.dateProfile);
  return h(h(h({ date: r.toDate(e), view: t.viewApi }, n), { dayNumberText: t.showDayNumber ? r.format(e, Qu) : "" }), t.extraProps);
}
var qi = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.refineHookProps = Ze(Gi), r.normalizeClassNames = Di(), r;
    }
    return e.prototype.render = function() {
      var r = this, n = r.props, i = r.context, a = i.options, o = this.refineHookProps({
        date: n.date,
        dateProfile: n.dateProfile,
        todayRange: n.todayRange,
        showDayNumber: n.showDayNumber,
        extraProps: n.extraHookProps,
        viewApi: i.viewApi,
        dateEnv: i.dateEnv
      }), s = cr(o, i.theme).concat(o.isDisabled ? [] : this.normalizeClassNames(a.dayCellClassNames, o)), l = o.isDisabled ? {} : {
        "data-date": Xn(n.date)
      };
      return m(pr, { hookProps: o, didMount: a.dayCellDidMount, willUnmount: a.dayCellWillUnmount, elRef: n.elRef }, function(c) {
        return n.children(c, s, l, o.isDisabled);
      });
    }, e;
  }(x)
);
function ec(t) {
  return m("div", { className: "fc-" + t });
}
var tc = function(t) {
  return m(Er, { defaultContent: rc, seg: t.seg, timeText: "", disableDragging: !0, disableResizing: !0, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, isPast: t.isPast, isFuture: t.isFuture, isToday: t.isToday }, function(e, r, n, i, a) {
    return m("div", { ref: e, className: ["fc-bg-event"].concat(r).join(" "), style: {
      backgroundColor: a.backgroundColor
    } }, i);
  });
};
function rc(t) {
  var e = t.event.title;
  return e && m("div", { className: "fc-event-title" }, t.event.title);
}
var nc = function(t) {
  return m(de.Consumer, null, function(e) {
    var r = e.dateEnv, n = e.options, i = t.date, a = n.weekNumberFormat || t.defaultFormat, o = r.computeWeekNumber(i), s = r.format(i, a), l = { num: o, text: s, date: i };
    return m(we, { hookProps: l, classNames: n.weekNumberClassNames, content: n.weekNumberContent, defaultContent: ic, didMount: n.weekNumberDidMount, willUnmount: n.weekNumberWillUnmount }, t.children);
  });
};
function ic(t) {
  return t.text;
}
var Nt = 10, ac = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.state = {
        titleId: ct()
      }, r.handleRootEl = function(n) {
        r.rootEl = n, r.props.elRef && $(r.props.elRef, n);
      }, r.handleDocumentMouseDown = function(n) {
        var i = Fn(n);
        r.rootEl.contains(i) || r.handleCloseClick();
      }, r.handleDocumentKeyDown = function(n) {
        n.key === "Escape" && r.handleCloseClick();
      }, r.handleCloseClick = function() {
        var n = r.props.onClose;
        n && n();
      }, r;
    }
    return e.prototype.render = function() {
      var r = this.context, n = r.theme, i = r.options, a = this, o = a.props, s = a.state, l = [
        "fc-popover",
        n.getClass("popover")
      ].concat(o.extraClassNames || []);
      return Na(m(
        "div",
        h({ id: o.id, className: l.join(" "), "aria-labelledby": s.titleId }, o.extraAttrs, { ref: this.handleRootEl }),
        m(
          "div",
          { className: "fc-popover-header " + n.getClass("popoverHeader") },
          m("span", { className: "fc-popover-title", id: s.titleId }, o.title),
          m("span", { className: "fc-popover-close " + n.getIconClass("close"), title: i.closeHint, onClick: this.handleCloseClick })
        ),
        m("div", { className: "fc-popover-body " + n.getClass("popoverContent") }, o.children)
      ), o.parentEl);
    }, e.prototype.componentDidMount = function() {
      document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
    }, e.prototype.componentWillUnmount = function() {
      document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
    }, e.prototype.updateSize = function() {
      var r = this.context.isRtl, n = this.props, i = n.alignmentEl, a = n.alignGridTop, o = this.rootEl, s = Ys(i);
      if (s) {
        var l = o.getBoundingClientRect(), c = a ? V(i, ".fc-scrollgrid").getBoundingClientRect().top : s.top, u = r ? s.right - l.width : s.left;
        c = Math.max(c, Nt), u = Math.min(u, document.documentElement.clientWidth - Nt - l.width), u = Math.max(u, Nt);
        var f = o.offsetParent.getBoundingClientRect();
        _e(o, {
          top: c - f.top,
          left: u - f.left
        });
      }
    }, e;
  }(x)
), oc = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.handleRootEl = function(n) {
        r.rootEl = n, n ? r.context.registerInteractiveComponent(r, {
          el: n,
          useEventCenter: !1
        }) : r.context.unregisterInteractiveComponent(r);
      }, r;
    }
    return e.prototype.render = function() {
      var r = this.context, n = r.options, i = r.dateEnv, a = this.props, o = a.startDate, s = a.todayRange, l = a.dateProfile, c = i.format(o, n.dayPopoverFormat);
      return m(qi, { date: o, dateProfile: l, todayRange: s, elRef: this.handleRootEl }, function(u, f, v) {
        return m(
          ac,
          { elRef: u, id: a.id, title: c, extraClassNames: ["fc-more-popover"].concat(f), extraAttrs: v, parentEl: a.parentEl, alignmentEl: a.alignmentEl, alignGridTop: a.alignGridTop, onClose: a.onClose },
          m(zi, { date: o, dateProfile: l, todayRange: s }, function(d, p) {
            return p && m("div", { className: "fc-more-popover-misc", ref: d }, p);
          }),
          a.children
        );
      });
    }, e.prototype.queryHit = function(r, n, i, a) {
      var o = this, s = o.rootEl, l = o.props;
      return r >= 0 && r < i && n >= 0 && n < a ? {
        dateProfile: l.dateProfile,
        dateSpan: h({ allDay: !0, range: {
          start: l.startDate,
          end: l.endDate
        } }, l.extraDateSpan),
        dayEl: s,
        rect: {
          left: 0,
          top: 0,
          right: i,
          bottom: a
        },
        layer: 1
        // important when comparing with hits from other components
      } : null;
    }, e;
  }(Re)
), sc = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.linkElRef = G(), r.state = {
        isPopoverOpen: !1,
        popoverId: ct()
      }, r.handleClick = function(n) {
        var i = r, a = i.props, o = i.context, s = o.options.moreLinkClick, l = Sn(a).start;
        function c(u) {
          var f = u.eventRange, v = f.def, d = f.instance, p = f.range;
          return {
            event: new O(o, v, d),
            start: o.dateEnv.toDate(p.start),
            end: o.dateEnv.toDate(p.end),
            isStart: u.isStart,
            isEnd: u.isEnd
          };
        }
        typeof s == "function" && (s = s({
          date: l,
          allDay: !!a.allDayDate,
          allSegs: a.allSegs.map(c),
          hiddenSegs: a.hiddenSegs.map(c),
          jsEvent: n,
          view: o.viewApi
        })), !s || s === "popover" ? r.setState({ isPopoverOpen: !0 }) : typeof s == "string" && o.calendarApi.zoomTo(l, s);
      }, r.handlePopoverClose = function() {
        r.setState({ isPopoverOpen: !1 });
      }, r;
    }
    return e.prototype.render = function() {
      var r = this, n = this, i = n.props, a = n.state;
      return m(de.Consumer, null, function(o) {
        var s = o.viewApi, l = o.options, c = o.calendarApi, u = l.moreLinkText, f = i.moreCnt, v = Sn(i), d = typeof u == "function" ? u.call(c, f) : "+" + f + " " + u, p = Me(l.moreLinkHint, [f], d), E = {
          num: f,
          shortText: "+" + f,
          text: d,
          view: s
        };
        return m(
          B,
          null,
          !!i.moreCnt && m(we, { elRef: r.linkElRef, hookProps: E, classNames: l.moreLinkClassNames, content: l.moreLinkContent, defaultContent: i.defaultContent || lc, didMount: l.moreLinkDidMount, willUnmount: l.moreLinkWillUnmount }, function(S, g, b, C) {
            return i.children(S, ["fc-more-link"].concat(g), b, C, r.handleClick, p, a.isPopoverOpen, a.isPopoverOpen ? a.popoverId : "");
          }),
          a.isPopoverOpen && m(oc, { id: a.popoverId, startDate: v.start, endDate: v.end, dateProfile: i.dateProfile, todayRange: i.todayRange, extraDateSpan: i.extraDateSpan, parentEl: r.parentEl, alignmentEl: i.alignmentElRef.current, alignGridTop: i.alignGridTop, onClose: r.handlePopoverClose }, i.popoverContent())
        );
      });
    }, e.prototype.componentDidMount = function() {
      this.updateParentEl();
    }, e.prototype.componentDidUpdate = function() {
      this.updateParentEl();
    }, e.prototype.updateParentEl = function() {
      this.linkElRef.current && (this.parentEl = V(this.linkElRef.current, ".fc-view-harness"));
    }, e;
  }(x)
);
function lc(t) {
  return t.text;
}
function Sn(t) {
  if (t.allDayDate)
    return {
      start: t.allDayDate,
      end: W(t.allDayDate, 1)
    };
  var e = t.hiddenSegs;
  return {
    start: uc(e),
    end: fc(e)
  };
}
function uc(t) {
  return t.reduce(cc).eventRange.range.start;
}
function cc(t, e) {
  return t.eventRange.range.start < e.eventRange.range.start ? t : e;
}
function fc(t) {
  return t.reduce(dc).eventRange.range.end;
}
function dc(t, e) {
  return t.eventRange.range.end > e.eventRange.range.end ? t : e;
}
/*!
FullCalendar v5.11.5
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var vc = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r, n) {
      n === void 0 && (n = {});
      var i = t.call(this) || this;
      return i.isRendering = !1, i.isRendered = !1, i.currentClassNames = [], i.customContentRenderId = 0, i.handleAction = function(a) {
        switch (a.type) {
          case "SET_EVENT_DRAG":
          case "SET_EVENT_RESIZE":
            i.renderRunner.tryDrain();
        }
      }, i.handleData = function(a) {
        i.currentData = a, i.renderRunner.request(a.calendarOptions.rerenderDelay);
      }, i.handleRenderRequest = function() {
        if (i.isRendering) {
          i.isRendered = !0;
          var a = i.currentData;
          Fr(function() {
            xa(m(Du, { options: a.calendarOptions, theme: a.theme, emitter: a.emitter }, function(o, s, l, c) {
              return i.setClassNames(o), i.setHeight(s), m(
                Si.Provider,
                { value: i.customContentRenderId },
                m(Eu, h({ isHeightAuto: l, forPrint: c }, a))
              );
            }), i.el);
          });
        } else
          i.isRendered && (i.isRendered = !1, Aa(i.el), i.setClassNames([]), i.setHeight(""));
      }, i.el = r, i.renderRunner = new gr(i.handleRenderRequest), new Hi({
        optionOverrides: n,
        calendarApi: i,
        onAction: i.handleAction,
        onData: i.handleData
      }), i;
    }
    return Object.defineProperty(e.prototype, "view", {
      get: function() {
        return this.currentData.viewApi;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.render = function() {
      var r = this.isRendering;
      r ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request(), r && this.updateSize();
    }, e.prototype.destroy = function() {
      this.isRendering && (this.isRendering = !1, this.renderRunner.request());
    }, e.prototype.updateSize = function() {
      var r = this;
      Fr(function() {
        t.prototype.updateSize.call(r);
      });
    }, e.prototype.batchRendering = function(r) {
      this.renderRunner.pause("batchRendering"), r(), this.renderRunner.resume("batchRendering");
    }, e.prototype.pauseRendering = function() {
      this.renderRunner.pause("pauseRendering");
    }, e.prototype.resumeRendering = function() {
      this.renderRunner.resume("pauseRendering", !0);
    }, e.prototype.resetOptions = function(r, n) {
      this.currentDataManager.resetOptions(r, n);
    }, e.prototype.setClassNames = function(r) {
      if (!Se(r, this.currentClassNames)) {
        for (var n = this.el.classList, i = 0, a = this.currentClassNames; i < a.length; i++) {
          var o = a[i];
          n.remove(o);
        }
        for (var s = 0, l = r; s < l.length; s++) {
          var o = l[s];
          n.add(o);
        }
        this.currentClassNames = r;
      }
    }, e.prototype.setHeight = function(r) {
      Bn(this.el, "height", r);
    }, e;
  }(Es)
);
/*!
FullCalendar v5.11.5
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var pc = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.headerElRef = G(), r;
    }
    return e.prototype.renderSimpleLayout = function(r, n) {
      var i = this, a = i.props, o = i.context, s = [], l = En(o.options);
      return r && s.push({
        type: "header",
        key: "header",
        isSticky: l,
        chunk: {
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: r
        }
      }), s.push({
        type: "body",
        key: "body",
        liquid: !0,
        chunk: { content: n }
      }), m(Gt, { viewSpec: o.viewSpec }, function(c, u) {
        return m(
          "div",
          { ref: c, className: ["fc-daygrid"].concat(u).join(" ") },
          m(Fi, { liquid: !a.isHeightAuto && !a.forPrint, collapsibleWidth: a.forPrint, cols: [], sections: s })
        );
      });
    }, e.prototype.renderHScrollLayout = function(r, n, i, a) {
      var o = this.context.pluginHooks.scrollGridImpl;
      if (!o)
        throw new Error("No ScrollGrid implementation");
      var s = this, l = s.props, c = s.context, u = !l.forPrint && En(c.options), f = !l.forPrint && Xu(c.options), v = [];
      return r && v.push({
        type: "header",
        key: "header",
        isSticky: u,
        chunks: [{
          key: "main",
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: r
        }]
      }), v.push({
        type: "body",
        key: "body",
        liquid: !0,
        chunks: [{
          key: "main",
          content: n
        }]
      }), f && v.push({
        type: "footer",
        key: "footer",
        isSticky: !0,
        chunks: [{
          key: "main",
          content: Zu
        }]
      }), m(Gt, { viewSpec: c.viewSpec }, function(d, p) {
        return m(
          "div",
          { ref: d, className: ["fc-daygrid"].concat(p).join(" ") },
          m(o, { liquid: !l.isHeightAuto && !l.forPrint, collapsibleWidth: l.forPrint, colGroups: [{ cols: [{ span: i, minWidth: a }] }], sections: v })
        );
      });
    }, e;
  }(Re)
);
function Ge(t, e) {
  for (var r = [], n = 0; n < e; n += 1)
    r[n] = [];
  for (var i = 0, a = t; i < a.length; i++) {
    var o = a[i];
    r[o.row].push(o);
  }
  return r;
}
function qe(t, e) {
  for (var r = [], n = 0; n < e; n += 1)
    r[n] = [];
  for (var i = 0, a = t; i < a.length; i++) {
    var o = a[i];
    r[o.firstCol].push(o);
  }
  return r;
}
function bn(t, e) {
  var r = [];
  if (t) {
    for (var n = 0; n < e; n += 1)
      r[n] = {
        affectedInstances: t.affectedInstances,
        isEvent: t.isEvent,
        segs: []
      };
    for (var i = 0, a = t.segs; i < a.length; i++) {
      var o = a[i];
      r[o.row].segs.push(o);
    }
  } else
    for (var n = 0; n < e; n += 1)
      r[n] = null;
  return r;
}
var hc = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.render = function() {
      var r = this.props, n = fr(this.context, r.date);
      return m(zi, { date: r.date, dateProfile: r.dateProfile, todayRange: r.todayRange, showDayNumber: r.showDayNumber, extraHookProps: r.extraHookProps, defaultContent: gc }, function(i, a) {
        return (a || r.forceDayTop) && m(
          "div",
          { className: "fc-daygrid-day-top", ref: i },
          m("a", h({ id: r.dayNumberId, className: "fc-daygrid-day-number" }, n), a || m(B, null, " "))
        );
      });
    }, e;
  }(x)
);
function gc(t) {
  return t.dayNumberText;
}
var Yi = U({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "narrow"
});
function ji(t) {
  var e = t.eventRange.ui.display;
  return e === "list-item" || e === "auto" && !t.eventRange.def.allDay && t.firstCol === t.lastCol && // can't be multi-day
  t.isStart && // "
  t.isEnd;
}
var Zi = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.render = function() {
      var r = this.props;
      return m(Ku, h({}, r, { extraClassNames: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: Yi, defaultDisplayEventEnd: r.defaultDisplayEventEnd, disableResizing: !r.seg.eventRange.def.allDay }));
    }, e;
  }(x)
), Xi = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.render = function() {
      var r = this, n = r.props, i = r.context, a = i.options.eventTimeFormat || Yi, o = ri(n.seg, a, i, !0, n.defaultDisplayEventEnd);
      return m(Er, { seg: n.seg, timeText: o, defaultContent: mc, isDragging: n.isDragging, isResizing: !1, isDateSelecting: !1, isSelected: n.isSelected, isPast: n.isPast, isFuture: n.isFuture, isToday: n.isToday }, function(s, l, c, u) {
        return (
          // we don't use styles!
          m("a", h({ className: ["fc-daygrid-event", "fc-daygrid-dot-event"].concat(l).join(" "), ref: s }, ni(n.seg, i)), u)
        );
      });
    }, e;
  }(x)
);
function mc(t) {
  return m(
    B,
    null,
    m("div", { className: "fc-daygrid-event-dot", style: { borderColor: t.borderColor || t.backgroundColor } }),
    t.timeText && m("div", { className: "fc-event-time" }, t.timeText),
    m("div", { className: "fc-event-title" }, t.event.title || m(B, null, " "))
  );
}
var yc = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.compileSegs = M(Ec), r;
    }
    return e.prototype.render = function() {
      var r = this.props, n = this.compileSegs(r.singlePlacements), i = n.allSegs, a = n.invisibleSegs;
      return m(sc, { dateProfile: r.dateProfile, todayRange: r.todayRange, allDayDate: r.allDayDate, moreCnt: r.moreCnt, allSegs: i, hiddenSegs: a, alignmentElRef: r.alignmentElRef, alignGridTop: r.alignGridTop, extraDateSpan: r.extraDateSpan, popoverContent: function() {
        var o = (r.eventDrag ? r.eventDrag.affectedInstances : null) || (r.eventResize ? r.eventResize.affectedInstances : null) || {};
        return m(B, null, i.map(function(s) {
          var l = s.eventRange.instance.instanceId;
          return m("div", { className: "fc-daygrid-event-harness", key: l, style: {
            visibility: o[l] ? "hidden" : ""
          } }, ji(s) ? m(Xi, h({ seg: s, isDragging: !1, isSelected: l === r.eventSelection, defaultDisplayEventEnd: !1 }, Ie(s, r.todayRange))) : m(Zi, h({ seg: s, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: l === r.eventSelection, defaultDisplayEventEnd: !1 }, Ie(s, r.todayRange))));
        }));
      } }, function(o, s, l, c, u, f, v, d) {
        return m("a", h({ ref: o, className: ["fc-daygrid-more-link"].concat(s).join(" "), title: f, "aria-expanded": v, "aria-controls": d }, qn(u)), c);
      });
    }, e;
  }(x)
);
function Ec(t) {
  for (var e = [], r = [], n = 0, i = t; n < i.length; n++) {
    var a = i[n];
    e.push(a.seg), a.isVisible || r.push(a.seg);
  }
  return { allSegs: e, invisibleSegs: r };
}
var Sc = U({ week: "narrow" }), bc = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.rootElRef = G(), r.state = {
        dayNumberId: ct()
      }, r.handleRootEl = function(n) {
        $(r.rootElRef, n), $(r.props.elRef, n);
      }, r;
    }
    return e.prototype.render = function() {
      var r = this, n = r.context, i = r.props, a = r.state, o = r.rootElRef, s = i.date, l = i.dateProfile, c = fr(n, s, "week");
      return m(qi, { date: s, dateProfile: l, todayRange: i.todayRange, showDayNumber: i.showDayNumber, extraHookProps: i.extraHookProps, elRef: this.handleRootEl }, function(u, f, v, d) {
        return m(
          "td",
          h({ ref: u, role: "gridcell", className: ["fc-daygrid-day"].concat(f, i.extraClassNames || []).join(" ") }, v, i.extraDataAttrs, i.showDayNumber ? { "aria-labelledby": a.dayNumberId } : {}),
          m(
            "div",
            {
              className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
              ref: i.innerElRef
              /* different from hook system! RENAME */
            },
            i.showWeekNumber && m(nc, { date: s, defaultFormat: Sc }, function(p, E, S, g) {
              return m("a", h({ ref: p, className: ["fc-daygrid-week-number"].concat(E).join(" ") }, c), g);
            }),
            !d && m(hc, { date: s, dateProfile: l, showDayNumber: i.showDayNumber, dayNumberId: a.dayNumberId, forceDayTop: i.forceDayTop, todayRange: i.todayRange, extraHookProps: i.extraHookProps }),
            m(
              "div",
              { className: "fc-daygrid-day-events", ref: i.fgContentElRef },
              i.fgContent,
              m(
                "div",
                { className: "fc-daygrid-day-bottom", style: { marginTop: i.moreMarginTop } },
                m(yc, { allDayDate: s, singlePlacements: i.singlePlacements, moreCnt: i.moreCnt, alignmentElRef: o, alignGridTop: !i.showDayNumber, extraDateSpan: i.extraDateSpan, dateProfile: i.dateProfile, eventSelection: i.eventSelection, eventDrag: i.eventDrag, eventResize: i.eventResize, todayRange: i.todayRange })
              )
            ),
            m("div", { className: "fc-daygrid-day-bg" }, i.bgContent)
          )
        );
      });
    }, e;
  }(Re)
);
function Dc(t, e, r, n, i, a, o) {
  var s = new wc();
  s.allowReslicing = !0, s.strictOrder = n, e === !0 || r === !0 ? (s.maxCoord = a, s.hiddenConsumes = !0) : typeof e == "number" ? s.maxStackCnt = e : typeof r == "number" && (s.maxStackCnt = r, s.hiddenConsumes = !0);
  for (var l = [], c = [], u = 0; u < t.length; u += 1) {
    var f = t[u], v = f.eventRange.instance.instanceId, d = i[v];
    d != null ? l.push({
      index: u,
      thickness: d,
      span: {
        start: f.firstCol,
        end: f.lastCol + 1
      }
    }) : c.push(f);
  }
  for (var p = s.addSegs(l), E = s.toRects(), S = Cc(E, t, o), g = S.singleColPlacements, b = S.multiColPlacements, C = S.leftoverMargins, D = [], I = [], _ = 0, P = c; _ < P.length; _++) {
    var f = P[_];
    b[f.firstCol].push({
      seg: f,
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (var w = f.firstCol; w <= f.lastCol; w += 1)
      g[w].push({
        seg: me(f, w, w + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (var w = 0; w < o.length; w += 1)
    D.push(0);
  for (var N = 0, L = p; N < L.length; N++) {
    var Z = L[N], f = t[Z.index], z = Z.span;
    b[z.start].push({
      seg: me(f, z.start, z.end, o),
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (var w = z.start; w < z.end; w += 1)
      D[w] += 1, g[w].push({
        seg: me(f, w, w + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (var w = 0; w < o.length; w += 1)
    I.push(C[w]);
  return { singleColPlacements: g, multiColPlacements: b, moreCnts: D, moreMarginTops: I };
}
function Cc(t, e, r) {
  for (var n = Rc(t, r.length), i = [], a = [], o = [], s = 0; s < r.length; s += 1) {
    for (var l = n[s], c = [], u = 0, f = 0, v = 0, d = l; v < d.length; v++) {
      var p = d[v], E = e[p.index];
      c.push({
        seg: me(E, s, s + 1, r),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: p.levelCoord,
        marginTop: p.levelCoord - u
      }), u = p.levelCoord + p.thickness;
    }
    var S = [];
    u = 0, f = 0;
    for (var g = 0, b = l; g < b.length; g++) {
      var p = b[g], E = e[p.index], C = p.span.end - p.span.start > 1, D = p.span.start === s;
      f += p.levelCoord - u, u = p.levelCoord + p.thickness, C ? (f += p.thickness, D && S.push({
        seg: me(E, p.span.start, p.span.end, r),
        isVisible: !0,
        isAbsolute: !0,
        absoluteTop: p.levelCoord,
        marginTop: 0
      })) : D && (S.push({
        seg: me(E, p.span.start, p.span.end, r),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: p.levelCoord,
        marginTop: f
        // claim the margin
      }), f = 0);
    }
    i.push(c), a.push(S), o.push(f);
  }
  return { singleColPlacements: i, multiColPlacements: a, leftoverMargins: o };
}
function Rc(t, e) {
  for (var r = [], n = 0; n < e; n += 1)
    r.push([]);
  for (var i = 0, a = t; i < a.length; i++)
    for (var o = a[i], n = o.span.start; n < o.span.end; n += 1)
      r[n].push(o);
  return r;
}
function me(t, e, r, n) {
  if (t.firstCol === e && t.lastCol === r - 1)
    return t;
  var i = t.eventRange, a = i.range, o = Ae(a, {
    start: n[e].date,
    end: W(n[r - 1].date, 1)
  });
  return h(h({}, t), { firstCol: e, lastCol: r - 1, eventRange: {
    def: i.def,
    ui: h(h({}, i.ui), { durationEditable: !1 }),
    instance: i.instance,
    range: o
  }, isStart: t.isStart && o.start.valueOf() === a.start.valueOf(), isEnd: t.isEnd && o.end.valueOf() === a.end.valueOf() });
}
var wc = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.hiddenConsumes = !1, r.forceHidden = {}, r;
    }
    return e.prototype.addSegs = function(r) {
      for (var n = this, i = t.prototype.addSegs.call(this, r), a = this.entriesByLevel, o = function(l) {
        return !n.forceHidden[Pe(l)];
      }, s = 0; s < a.length; s += 1)
        a[s] = a[s].filter(o);
      return i;
    }, e.prototype.handleInvalidInsertion = function(r, n, i) {
      var a = this, o = a.entriesByLevel, s = a.forceHidden, l = r.touchingEntry, c = r.touchingLevel, u = r.touchingLateral;
      if (this.hiddenConsumes && l) {
        var f = Pe(l);
        if (!s[f])
          if (this.allowReslicing) {
            var v = h(h({}, l), { span: xi(l.span, n.span) }), d = Pe(v);
            s[d] = !0, o[c][u] = v, this.splitEntry(l, n, i);
          } else
            s[f] = !0, i.push(l);
      }
      return t.prototype.handleInvalidInsertion.call(this, r, n, i);
    }, e;
  }(vu)
), $i = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.cellElRefs = new ae(), r.frameElRefs = new ae(), r.fgElRefs = new ae(), r.segHarnessRefs = new ae(), r.rootElRef = G(), r.state = {
        framePositions: null,
        maxContentHeight: null,
        eventInstanceHeights: {}
      }, r;
    }
    return e.prototype.render = function() {
      var r = this, n = this, i = n.props, a = n.state, o = n.context, s = o.options, l = i.cells.length, c = qe(i.businessHourSegs, l), u = qe(i.bgEventSegs, l), f = qe(this.getHighlightSegs(), l), v = qe(this.getMirrorSegs(), l), d = Dc(Ko(i.fgEventSegs, s.eventOrder), i.dayMaxEvents, i.dayMaxEventRows, s.eventOrderStrict, a.eventInstanceHeights, a.maxContentHeight, i.cells), p = d.singleColPlacements, E = d.multiColPlacements, S = d.moreCnts, g = d.moreMarginTops, b = (
        // TODO: messy way to compute this
        i.eventDrag && i.eventDrag.affectedInstances || i.eventResize && i.eventResize.affectedInstances || {}
      );
      return m(
        "tr",
        { ref: this.rootElRef, role: "row" },
        i.renderIntro && i.renderIntro(),
        i.cells.map(function(C, D) {
          var I = r.renderFgSegs(D, i.forPrint ? p[D] : E[D], i.todayRange, b), _ = r.renderFgSegs(D, Tc(v[D], E), i.todayRange, {}, !!i.eventDrag, !!i.eventResize, !1);
          return m(bc, { key: C.key, elRef: r.cellElRefs.createRef(C.key), innerElRef: r.frameElRefs.createRef(C.key), dateProfile: i.dateProfile, date: C.date, showDayNumber: i.showDayNumbers, showWeekNumber: i.showWeekNumbers && D === 0, forceDayTop: i.showWeekNumbers, todayRange: i.todayRange, eventSelection: i.eventSelection, eventDrag: i.eventDrag, eventResize: i.eventResize, extraHookProps: C.extraHookProps, extraDataAttrs: C.extraDataAttrs, extraClassNames: C.extraClassNames, extraDateSpan: C.extraDateSpan, moreCnt: S[D], moreMarginTop: g[D], singlePlacements: p[D], fgContentElRef: r.fgElRefs.createRef(C.key), fgContent: (
            // Fragment scopes the keys
            m(
              B,
              null,
              m(B, null, I),
              m(B, null, _)
            )
          ), bgContent: (
            // Fragment scopes the keys
            m(
              B,
              null,
              r.renderFillSegs(f[D], "highlight"),
              r.renderFillSegs(c[D], "non-business"),
              r.renderFillSegs(u[D], "bg-event")
            )
          ) });
        })
      );
    }, e.prototype.componentDidMount = function() {
      this.updateSizing(!0);
    }, e.prototype.componentDidUpdate = function(r, n) {
      var i = this.props;
      this.updateSizing(!X(r, i));
    }, e.prototype.getHighlightSegs = function() {
      var r = this.props;
      return r.eventDrag && r.eventDrag.segs.length ? r.eventDrag.segs : r.eventResize && r.eventResize.segs.length ? r.eventResize.segs : r.dateSelectionSegs;
    }, e.prototype.getMirrorSegs = function() {
      var r = this.props;
      return r.eventResize && r.eventResize.segs.length ? r.eventResize.segs : [];
    }, e.prototype.renderFgSegs = function(r, n, i, a, o, s, l) {
      var c = this.context, u = this.props.eventSelection, f = this.state.framePositions, v = this.props.cells.length === 1, d = o || s || l, p = [];
      if (f)
        for (var E = 0, S = n; E < S.length; E++) {
          var g = S[E], b = g.seg, C = b.eventRange.instance.instanceId, D = C + ":" + r, I = g.isVisible && !a[C], _ = g.isAbsolute, P = "", w = "";
          _ && (c.isRtl ? (w = 0, P = f.lefts[b.lastCol] - f.lefts[b.firstCol]) : (P = 0, w = f.rights[b.firstCol] - f.rights[b.lastCol])), p.push(m("div", { className: "fc-daygrid-event-harness" + (_ ? " fc-daygrid-event-harness-abs" : ""), key: D, ref: d ? null : this.segHarnessRefs.createRef(D), style: {
            visibility: I ? "" : "hidden",
            marginTop: _ ? "" : g.marginTop,
            top: _ ? g.absoluteTop : "",
            left: P,
            right: w
          } }, ji(b) ? m(Xi, h({ seg: b, isDragging: o, isSelected: C === u, defaultDisplayEventEnd: v }, Ie(b, i))) : m(Zi, h({ seg: b, isDragging: o, isResizing: s, isDateSelecting: l, isSelected: C === u, defaultDisplayEventEnd: v }, Ie(b, i)))));
        }
      return p;
    }, e.prototype.renderFillSegs = function(r, n) {
      var i = this.context.isRtl, a = this.props.todayRange, o = this.state.framePositions, s = [];
      if (o)
        for (var l = 0, c = r; l < c.length; l++) {
          var u = c[l], f = i ? {
            right: 0,
            left: o.lefts[u.lastCol] - o.lefts[u.firstCol]
          } : {
            left: 0,
            right: o.rights[u.firstCol] - o.rights[u.lastCol]
          };
          s.push(m("div", { key: ns(u.eventRange), className: "fc-daygrid-bg-harness", style: f }, n === "bg-event" ? m(tc, h({ seg: u }, Ie(u, a))) : ec(n)));
        }
      return m.apply(void 0, A([B, {}], s));
    }, e.prototype.updateSizing = function(r) {
      var n = this, i = n.props, a = n.frameElRefs;
      if (!i.forPrint && i.clientWidth !== null) {
        if (r) {
          var o = i.cells.map(function(f) {
            return a.currentMap[f.key];
          });
          if (o.length) {
            var s = this.rootElRef.current;
            this.setState({
              framePositions: new Ft(
                s,
                o,
                !0,
                // isHorizontal
                !1
              )
            });
          }
        }
        var l = this.state.eventInstanceHeights, c = this.queryEventInstanceHeights(), u = i.dayMaxEvents === !0 || i.dayMaxEventRows === !0;
        this.safeSetState({
          // HACK to prevent oscillations of events being shown/hidden from max-event-rows
          // Essentially, once you compute an element's height, never null-out.
          // TODO: always display all events, as visibility:hidden?
          eventInstanceHeights: h(h({}, l), c),
          maxContentHeight: u ? this.computeMaxContentHeight() : null
        });
      }
    }, e.prototype.queryEventInstanceHeights = function() {
      var r = this.segHarnessRefs.currentMap, n = {};
      for (var i in r) {
        var a = Math.round(r[i].getBoundingClientRect().height), o = i.split(":")[0];
        n[o] = Math.max(n[o] || 0, a);
      }
      return n;
    }, e.prototype.computeMaxContentHeight = function() {
      var r = this.props.cells[0].key, n = this.cellElRefs.currentMap[r], i = this.fgElRefs.currentMap[r];
      return n.getBoundingClientRect().bottom - i.getBoundingClientRect().top;
    }, e.prototype.getCellEls = function() {
      var r = this.cellElRefs.currentMap;
      return this.props.cells.map(function(n) {
        return r[n.key];
      });
    }, e;
  }(Re)
);
$i.addStateEquality({
  eventInstanceHeights: X
});
function Tc(t, e) {
  if (!t.length)
    return [];
  var r = _c(e);
  return t.map(function(n) {
    return {
      seg: n,
      isVisible: !0,
      isAbsolute: !0,
      absoluteTop: r[n.eventRange.instance.instanceId],
      marginTop: 0
    };
  });
}
function _c(t) {
  for (var e = {}, r = 0, n = t; r < n.length; r++)
    for (var i = n[r], a = 0, o = i; a < o.length; a++) {
      var s = o[a];
      e[s.seg.eventRange.instance.instanceId] = s.absoluteTop;
    }
  return e;
}
var Mc = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.splitBusinessHourSegs = M(Ge), r.splitBgEventSegs = M(Ge), r.splitFgEventSegs = M(Ge), r.splitDateSelectionSegs = M(Ge), r.splitEventDrag = M(bn), r.splitEventResize = M(bn), r.rowRefs = new ae(), r.handleRootEl = function(n) {
        r.rootEl = n, n ? r.context.registerInteractiveComponent(r, {
          el: n,
          isHitComboAllowed: r.props.isHitComboAllowed
        }) : r.context.unregisterInteractiveComponent(r);
      }, r;
    }
    return e.prototype.render = function() {
      var r = this, n = this.props, i = n.dateProfile, a = n.dayMaxEventRows, o = n.dayMaxEvents, s = n.expandRows, l = n.cells.length, c = this.splitBusinessHourSegs(n.businessHourSegs, l), u = this.splitBgEventSegs(n.bgEventSegs, l), f = this.splitFgEventSegs(n.fgEventSegs, l), v = this.splitDateSelectionSegs(n.dateSelectionSegs, l), d = this.splitEventDrag(n.eventDrag, l), p = this.splitEventResize(n.eventResize, l), E = o === !0 || a === !0;
      E && !s && (E = !1, a = null, o = null);
      var S = [
        "fc-daygrid-body",
        E ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
        s ? "" : "fc-daygrid-body-natural"
        // will height of one row depend on the others?
      ];
      return m(
        "div",
        { className: S.join(" "), ref: this.handleRootEl, style: {
          // these props are important to give this wrapper correct dimensions for interactions
          // TODO: if we set it here, can we avoid giving to inner tables?
          width: n.clientWidth,
          minWidth: n.tableMinWidth
        } },
        m(Li, { unit: "day" }, function(g, b) {
          return m(
            B,
            null,
            m(
              "table",
              { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
                width: n.clientWidth,
                minWidth: n.tableMinWidth,
                height: s ? n.clientHeight : ""
              } },
              n.colGroupNode,
              m("tbody", { role: "presentation" }, n.cells.map(function(C, D) {
                return m($i, {
                  ref: r.rowRefs.createRef(D),
                  key: C.length ? C[0].date.toISOString() : D,
                  showDayNumbers: l > 1,
                  showWeekNumbers: n.showWeekNumbers,
                  todayRange: b,
                  dateProfile: i,
                  cells: C,
                  renderIntro: n.renderRowIntro,
                  businessHourSegs: c[D],
                  eventSelection: n.eventSelection,
                  bgEventSegs: u[D].filter(kc),
                  fgEventSegs: f[D],
                  dateSelectionSegs: v[D],
                  eventDrag: d[D],
                  eventResize: p[D],
                  dayMaxEvents: o,
                  dayMaxEventRows: a,
                  clientWidth: n.clientWidth,
                  clientHeight: n.clientHeight,
                  forPrint: n.forPrint
                });
              }))
            )
          );
        })
      );
    }, e.prototype.prepareHits = function() {
      this.rowPositions = new Ft(
        this.rootEl,
        this.rowRefs.collect().map(function(r) {
          return r.getCellEls()[0];
        }),
        // first cell el in each row. TODO: not optimal
        !1,
        !0
      ), this.colPositions = new Ft(
        this.rootEl,
        this.rowRefs.currentMap[0].getCellEls(),
        // cell els in first row
        !0,
        // horizontal
        !1
      );
    }, e.prototype.queryHit = function(r, n) {
      var i = this, a = i.colPositions, o = i.rowPositions, s = a.leftToIndex(r), l = o.topToIndex(n);
      if (l != null && s != null) {
        var c = this.props.cells[l][s];
        return {
          dateProfile: this.props.dateProfile,
          dateSpan: h({ range: this.getCellRange(l, s), allDay: !0 }, c.extraDateSpan),
          dayEl: this.getCellEl(l, s),
          rect: {
            left: a.lefts[s],
            right: a.rights[s],
            top: o.tops[l],
            bottom: o.bottoms[l]
          },
          layer: 0
        };
      }
      return null;
    }, e.prototype.getCellEl = function(r, n) {
      return this.rowRefs.currentMap[r].getCellEls()[n];
    }, e.prototype.getCellRange = function(r, n) {
      var i = this.props.cells[r][n].date, a = W(i, 1);
      return { start: i, end: a };
    }, e;
  }(Re)
);
function kc(t) {
  return t.eventRange.def.allDay;
}
var Ic = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.forceDayIfListItem = !0, r;
    }
    return e.prototype.sliceRange = function(r, n) {
      return n.sliceRange(r);
    }, e;
  }(Pu)
), Pc = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.slicer = new Ic(), r.tableRef = G(), r;
    }
    return e.prototype.render = function() {
      var r = this, n = r.props, i = r.context;
      return m(Mc, h({ ref: this.tableRef }, this.slicer.sliceProps(n, n.dateProfile, n.nextDayThreshold, i, n.dayTableModel), { dateProfile: n.dateProfile, cells: n.dayTableModel.cells, colGroupNode: n.colGroupNode, tableMinWidth: n.tableMinWidth, renderRowIntro: n.renderRowIntro, dayMaxEvents: n.dayMaxEvents, dayMaxEventRows: n.dayMaxEventRows, showWeekNumbers: n.showWeekNumbers, expandRows: n.expandRows, headerAlignElRef: n.headerAlignElRef, clientWidth: n.clientWidth, clientHeight: n.clientHeight, forPrint: n.forPrint }));
    }, e;
  }(Re)
), Hc = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.buildDayTableModel = M(xc), r.headerRef = G(), r.tableRef = G(), r;
    }
    return e.prototype.render = function() {
      var r = this, n = this.context, i = n.options, a = n.dateProfileGenerator, o = this.props, s = this.buildDayTableModel(o.dateProfile, a), l = i.dayHeaders && m(_u, { ref: this.headerRef, dateProfile: o.dateProfile, dates: s.headerDates, datesRepDistinctDays: s.rowCnt === 1 }), c = function(u) {
        return m(Pc, { ref: r.tableRef, dateProfile: o.dateProfile, dayTableModel: s, businessHours: o.businessHours, dateSelection: o.dateSelection, eventStore: o.eventStore, eventUiBases: o.eventUiBases, eventSelection: o.eventSelection, eventDrag: o.eventDrag, eventResize: o.eventResize, nextDayThreshold: i.nextDayThreshold, colGroupNode: u.tableColGroupNode, tableMinWidth: u.tableMinWidth, dayMaxEvents: i.dayMaxEvents, dayMaxEventRows: i.dayMaxEventRows, showWeekNumbers: i.weekNumbers, expandRows: !o.isHeightAuto, headerAlignElRef: r.headerElRef, clientWidth: u.clientWidth, clientHeight: u.clientHeight, forPrint: o.forPrint });
      };
      return i.dayMinWidth ? this.renderHScrollLayout(l, c, s.colCnt, i.dayMinWidth) : this.renderSimpleLayout(l, c);
    }, e;
  }(pc)
);
function xc(t, e) {
  var r = new ku(t.renderRange, e);
  return new Iu(r, /year|month|week/.test(t.currentRangeUnit));
}
var Nc = (
  /** @class */
  function(t) {
    R(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.buildRenderRange = function(r, n, i) {
      var a = this.props.dateEnv, o = t.prototype.buildRenderRange.call(this, r, n, i), s = o.start, l = o.end, c;
      if (/^(year|month)$/.test(n) && (s = a.startOfWeek(s), c = a.startOfWeek(l), c.valueOf() !== l.valueOf() && (l = Yr(c, 1))), this.props.monthMode && this.props.fixedWeekCount) {
        var u = Math.ceil(
          // could be partial weeks due to hiddenDays
          Qa(s, l)
        );
        l = Yr(l, 6 - u);
      }
      return { start: s, end: l };
    }, e;
  }(Ri)
), Ac = te({
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: Hc,
      dateProfileGeneratorClass: Nc
    },
    dayGridDay: {
      type: "dayGrid",
      duration: { days: 1 }
    },
    dayGridWeek: {
      type: "dayGrid",
      duration: { weeks: 1 }
    },
    dayGridMonth: {
      type: "dayGrid",
      duration: { months: 1 },
      monthMode: !0,
      fixedWeekCount: !0
    }
  }
});
/*!
FullCalendar v5.11.5
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
yr.touchMouseIgnoreWait = 500;
var Yt = 0, lt = 0, jt = !1, Sr = (
  /** @class */
  function() {
    function t(e) {
      var r = this;
      this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = function(n) {
        if (!r.shouldIgnoreMouse() && Oc(n) && r.tryStart(n)) {
          var i = r.createEventFromMouse(n, !0);
          r.emitter.trigger("pointerdown", i), r.initScrollWatch(i), r.shouldIgnoreMove || document.addEventListener("mousemove", r.handleMouseMove), document.addEventListener("mouseup", r.handleMouseUp);
        }
      }, this.handleMouseMove = function(n) {
        var i = r.createEventFromMouse(n);
        r.recordCoords(i), r.emitter.trigger("pointermove", i);
      }, this.handleMouseUp = function(n) {
        document.removeEventListener("mousemove", r.handleMouseMove), document.removeEventListener("mouseup", r.handleMouseUp), r.emitter.trigger("pointerup", r.createEventFromMouse(n)), r.cleanup();
      }, this.handleTouchStart = function(n) {
        if (r.tryStart(n)) {
          r.isTouchDragging = !0;
          var i = r.createEventFromTouch(n, !0);
          r.emitter.trigger("pointerdown", i), r.initScrollWatch(i);
          var a = n.target;
          r.shouldIgnoreMove || a.addEventListener("touchmove", r.handleTouchMove), a.addEventListener("touchend", r.handleTouchEnd), a.addEventListener("touchcancel", r.handleTouchEnd), window.addEventListener("scroll", r.handleTouchScroll, !0);
        }
      }, this.handleTouchMove = function(n) {
        var i = r.createEventFromTouch(n);
        r.recordCoords(i), r.emitter.trigger("pointermove", i);
      }, this.handleTouchEnd = function(n) {
        if (r.isDragging) {
          var i = n.target;
          i.removeEventListener("touchmove", r.handleTouchMove), i.removeEventListener("touchend", r.handleTouchEnd), i.removeEventListener("touchcancel", r.handleTouchEnd), window.removeEventListener("scroll", r.handleTouchScroll, !0), r.emitter.trigger("pointerup", r.createEventFromTouch(n)), r.cleanup(), r.isTouchDragging = !1, Lc();
        }
      }, this.handleTouchScroll = function() {
        r.wasTouchScroll = !0;
      }, this.handleScroll = function(n) {
        if (!r.shouldIgnoreMove) {
          var i = window.pageXOffset - r.prevScrollX + r.prevPageX, a = window.pageYOffset - r.prevScrollY + r.prevPageY;
          r.emitter.trigger("pointermove", {
            origEvent: n,
            isTouch: r.isTouchDragging,
            subjectEl: r.subjectEl,
            pageX: i,
            pageY: a,
            deltaX: i - r.origPageX,
            deltaY: a - r.origPageY
          });
        }
      }, this.containerEl = e, this.emitter = new pt(), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), Uc();
    }
    return t.prototype.destroy = function() {
      this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: !0 }), Vc();
    }, t.prototype.tryStart = function(e) {
      var r = this.querySubjectEl(e), n = e.target;
      return r && (!this.handleSelector || V(n, this.handleSelector)) ? (this.subjectEl = r, this.isDragging = !0, this.wasTouchScroll = !1, !0) : !1;
    }, t.prototype.cleanup = function() {
      jt = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch();
    }, t.prototype.querySubjectEl = function(e) {
      return this.selector ? V(e.target, this.selector) : this.containerEl;
    }, t.prototype.shouldIgnoreMouse = function() {
      return Yt || this.isTouchDragging;
    }, t.prototype.cancelTouchScroll = function() {
      this.isDragging && (jt = !0);
    }, t.prototype.initScrollWatch = function(e) {
      this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener("scroll", this.handleScroll, !0));
    }, t.prototype.recordCoords = function(e) {
      this.shouldWatchScroll && (this.prevPageX = e.pageX, this.prevPageY = e.pageY, this.prevScrollX = window.pageXOffset, this.prevScrollY = window.pageYOffset);
    }, t.prototype.destroyScrollWatch = function() {
      this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0);
    }, t.prototype.createEventFromMouse = function(e, r) {
      var n = 0, i = 0;
      return r ? (this.origPageX = e.pageX, this.origPageY = e.pageY) : (n = e.pageX - this.origPageX, i = e.pageY - this.origPageY), {
        origEvent: e,
        isTouch: !1,
        subjectEl: this.subjectEl,
        pageX: e.pageX,
        pageY: e.pageY,
        deltaX: n,
        deltaY: i
      };
    }, t.prototype.createEventFromTouch = function(e, r) {
      var n = e.touches, i, a, o = 0, s = 0;
      return n && n.length ? (i = n[0].pageX, a = n[0].pageY) : (i = e.pageX, a = e.pageY), r ? (this.origPageX = i, this.origPageY = a) : (o = i - this.origPageX, s = a - this.origPageY), {
        origEvent: e,
        isTouch: !0,
        subjectEl: this.subjectEl,
        pageX: i,
        pageY: a,
        deltaX: o,
        deltaY: s
      };
    }, t;
  }()
);
function Oc(t) {
  return t.button === 0 && !t.ctrlKey;
}
function Lc() {
  Yt += 1, setTimeout(function() {
    Yt -= 1;
  }, yr.touchMouseIgnoreWait);
}
function Uc() {
  lt += 1, lt === 1 && window.addEventListener("touchmove", Ki, { passive: !1 });
}
function Vc() {
  lt -= 1, lt || window.removeEventListener("touchmove", Ki, { passive: !1 });
}
function Ki(t) {
  jt && t.preventDefault();
}
var Wc = (
  /** @class */
  function() {
    function t() {
      this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0;
    }
    return t.prototype.start = function(e, r, n) {
      this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = r - window.pageXOffset, this.origScreenY = n - window.pageYOffset, this.deltaX = 0, this.deltaY = 0, this.updateElPosition();
    }, t.prototype.handleMove = function(e, r) {
      this.deltaX = e - window.pageXOffset - this.origScreenX, this.deltaY = r - window.pageYOffset - this.origScreenY, this.updateElPosition();
    }, t.prototype.setIsVisible = function(e) {
      e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = e, this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), this.isVisible = e);
    }, t.prototype.stop = function(e, r) {
      var n = this, i = function() {
        n.cleanup(), r();
      };
      e && this.mirrorEl && this.isVisible && this.revertDuration && // if 0, transition won't work
      (this.deltaX || this.deltaY) ? this.doRevertAnimation(i, this.revertDuration) : setTimeout(i, 0);
    }, t.prototype.doRevertAnimation = function(e, r) {
      var n = this.mirrorEl, i = this.sourceEl.getBoundingClientRect();
      n.style.transition = "top " + r + "ms,left " + r + "ms", _e(n, {
        left: i.left,
        top: i.top
      }), Ba(n, function() {
        n.style.transition = "", e();
      });
    }, t.prototype.cleanup = function() {
      this.mirrorEl && ($t(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null;
    }, t.prototype.updateElPosition = function() {
      this.sourceEl && this.isVisible && _e(this.getMirrorEl(), {
        left: this.sourceElRect.left + this.deltaX,
        top: this.sourceElRect.top + this.deltaY
      });
    }, t.prototype.getMirrorEl = function() {
      var e = this.sourceElRect, r = this.mirrorEl;
      return r || (r = this.mirrorEl = this.sourceEl.cloneNode(!0), r.classList.add("fc-unselectable"), r.classList.add("fc-event-dragging"), _e(r, {
        position: "fixed",
        zIndex: this.zIndex,
        visibility: "",
        boxSizing: "border-box",
        width: e.right - e.left,
        height: e.bottom - e.top,
        right: "auto",
        bottom: "auto",
        margin: 0
      }), this.parentNode.appendChild(r)), r;
    }, t;
  }()
), Ji = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r, n) {
      var i = t.call(this) || this;
      return i.handleScroll = function() {
        i.scrollTop = i.scrollController.getScrollTop(), i.scrollLeft = i.scrollController.getScrollLeft(), i.handleScrollChange();
      }, i.scrollController = r, i.doesListening = n, i.scrollTop = i.origScrollTop = r.getScrollTop(), i.scrollLeft = i.origScrollLeft = r.getScrollLeft(), i.scrollWidth = r.getScrollWidth(), i.scrollHeight = r.getScrollHeight(), i.clientWidth = r.getClientWidth(), i.clientHeight = r.getClientHeight(), i.clientRect = i.computeClientRect(), i.doesListening && i.getEventTarget().addEventListener("scroll", i.handleScroll), i;
    }
    return e.prototype.destroy = function() {
      this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll);
    }, e.prototype.getScrollTop = function() {
      return this.scrollTop;
    }, e.prototype.getScrollLeft = function() {
      return this.scrollLeft;
    }, e.prototype.setScrollTop = function(r) {
      this.scrollController.setScrollTop(r), this.doesListening || (this.scrollTop = Math.max(Math.min(r, this.getMaxScrollTop()), 0), this.handleScrollChange());
    }, e.prototype.setScrollLeft = function(r) {
      this.scrollController.setScrollLeft(r), this.doesListening || (this.scrollLeft = Math.max(Math.min(r, this.getMaxScrollLeft()), 0), this.handleScrollChange());
    }, e.prototype.getClientWidth = function() {
      return this.clientWidth;
    }, e.prototype.getClientHeight = function() {
      return this.clientHeight;
    }, e.prototype.getScrollWidth = function() {
      return this.scrollWidth;
    }, e.prototype.getScrollHeight = function() {
      return this.scrollHeight;
    }, e.prototype.handleScrollChange = function() {
    }, e;
  }(vr)
), Qi = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r, n) {
      return t.call(this, new $s(r), n) || this;
    }
    return e.prototype.getEventTarget = function() {
      return this.scrollController.el;
    }, e.prototype.computeClientRect = function() {
      return qs(this.scrollController.el);
    }, e;
  }(Ji)
), Bc = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r) {
      return t.call(this, new Ks(), r) || this;
    }
    return e.prototype.getEventTarget = function() {
      return window;
    }, e.prototype.computeClientRect = function() {
      return {
        left: this.scrollLeft,
        right: this.scrollLeft + this.clientWidth,
        top: this.scrollTop,
        bottom: this.scrollTop + this.clientHeight
      };
    }, e.prototype.handleScrollChange = function() {
      this.clientRect = this.computeClientRect();
    }, e;
  }(Ji)
), Dn = typeof performance == "function" ? performance.now : Date.now, Fc = (
  /** @class */
  function() {
    function t() {
      var e = this;
      this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = function() {
        if (e.isAnimating) {
          var r = e.computeBestEdge(e.pointerScreenX + window.pageXOffset, e.pointerScreenY + window.pageYOffset);
          if (r) {
            var n = Dn();
            e.handleSide(r, (n - e.msSinceRequest) / 1e3), e.requestAnimation(n);
          } else
            e.isAnimating = !1;
        }
      };
    }
    return t.prototype.start = function(e, r, n) {
      this.isEnabled && (this.scrollCaches = this.buildCaches(n), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.handleMove(e, r));
    }, t.prototype.handleMove = function(e, r) {
      if (this.isEnabled) {
        var n = e - window.pageXOffset, i = r - window.pageYOffset, a = this.pointerScreenY === null ? 0 : i - this.pointerScreenY, o = this.pointerScreenX === null ? 0 : n - this.pointerScreenX;
        a < 0 ? this.everMovedUp = !0 : a > 0 && (this.everMovedDown = !0), o < 0 ? this.everMovedLeft = !0 : o > 0 && (this.everMovedRight = !0), this.pointerScreenX = n, this.pointerScreenY = i, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(Dn()));
      }
    }, t.prototype.stop = function() {
      if (this.isEnabled) {
        this.isAnimating = !1;
        for (var e = 0, r = this.scrollCaches; e < r.length; e++) {
          var n = r[e];
          n.destroy();
        }
        this.scrollCaches = null;
      }
    }, t.prototype.requestAnimation = function(e) {
      this.msSinceRequest = e, requestAnimationFrame(this.animate);
    }, t.prototype.handleSide = function(e, r) {
      var n = e.scrollCache, i = this.edgeThreshold, a = i - e.distance, o = (
        // the closer to the edge, the faster we scroll
        a * a / (i * i) * // quadratic
        this.maxVelocity * r
      ), s = 1;
      switch (e.name) {
        case "left":
          s = -1;
        case "right":
          n.setScrollLeft(n.getScrollLeft() + o * s);
          break;
        case "top":
          s = -1;
        case "bottom":
          n.setScrollTop(n.getScrollTop() + o * s);
          break;
      }
    }, t.prototype.computeBestEdge = function(e, r) {
      for (var n = this.edgeThreshold, i = null, a = this.scrollCaches || [], o = 0, s = a; o < s.length; o++) {
        var l = s[o], c = l.clientRect, u = e - c.left, f = c.right - e, v = r - c.top, d = c.bottom - r;
        u >= 0 && f >= 0 && v >= 0 && d >= 0 && (v <= n && this.everMovedUp && l.canScrollUp() && (!i || i.distance > v) && (i = { scrollCache: l, name: "top", distance: v }), d <= n && this.everMovedDown && l.canScrollDown() && (!i || i.distance > d) && (i = { scrollCache: l, name: "bottom", distance: d }), u <= n && this.everMovedLeft && l.canScrollLeft() && (!i || i.distance > u) && (i = { scrollCache: l, name: "left", distance: u }), f <= n && this.everMovedRight && l.canScrollRight() && (!i || i.distance > f) && (i = { scrollCache: l, name: "right", distance: f }));
      }
      return i;
    }, t.prototype.buildCaches = function(e) {
      return this.queryScrollEls(e).map(function(r) {
        return r === window ? new Bc(!1) : new Qi(r, !1);
      });
    }, t.prototype.queryScrollEls = function(e) {
      for (var r = [], n = 0, i = this.scrollQuery; n < i.length; n++) {
        var a = i[n];
        typeof a == "object" ? r.push(a) : r.push.apply(r, Array.prototype.slice.call(zn(e).querySelectorAll(a)));
      }
      return r;
    }, t;
  }()
), Ue = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r, n) {
      var i = t.call(this, r) || this;
      i.containerEl = r, i.delay = null, i.minDistance = 0, i.touchScrollAllowed = !0, i.mirrorNeedsRevert = !1, i.isInteracting = !1, i.isDragging = !1, i.isDelayEnded = !1, i.isDistanceSurpassed = !1, i.delayTimeoutId = null, i.onPointerDown = function(o) {
        i.isDragging || (i.isInteracting = !0, i.isDelayEnded = !1, i.isDistanceSurpassed = !1, Fa(document.body), Ga(document.body), o.isTouch || o.origEvent.preventDefault(), i.emitter.trigger("pointerdown", o), i.isInteracting && // not destroyed via pointerdown handler
        !i.pointer.shouldIgnoreMove && (i.mirror.setIsVisible(!1), i.mirror.start(o.subjectEl, o.pageX, o.pageY), i.startDelay(o), i.minDistance || i.handleDistanceSurpassed(o)));
      }, i.onPointerMove = function(o) {
        if (i.isInteracting) {
          if (i.emitter.trigger("pointermove", o), !i.isDistanceSurpassed) {
            var s = i.minDistance, l = void 0, c = o.deltaX, u = o.deltaY;
            l = c * c + u * u, l >= s * s && i.handleDistanceSurpassed(o);
          }
          i.isDragging && (o.origEvent.type !== "scroll" && (i.mirror.handleMove(o.pageX, o.pageY), i.autoScroller.handleMove(o.pageX, o.pageY)), i.emitter.trigger("dragmove", o));
        }
      }, i.onPointerUp = function(o) {
        i.isInteracting && (i.isInteracting = !1, za(document.body), qa(document.body), i.emitter.trigger("pointerup", o), i.isDragging && (i.autoScroller.stop(), i.tryStopDrag(o)), i.delayTimeoutId && (clearTimeout(i.delayTimeoutId), i.delayTimeoutId = null));
      };
      var a = i.pointer = new Sr(r);
      return a.emitter.on("pointerdown", i.onPointerDown), a.emitter.on("pointermove", i.onPointerMove), a.emitter.on("pointerup", i.onPointerUp), n && (a.selector = n), i.mirror = new Wc(), i.autoScroller = new Fc(), i;
    }
    return e.prototype.destroy = function() {
      this.pointer.destroy(), this.onPointerUp({});
    }, e.prototype.startDelay = function(r) {
      var n = this;
      typeof this.delay == "number" ? this.delayTimeoutId = setTimeout(function() {
        n.delayTimeoutId = null, n.handleDelayEnd(r);
      }, this.delay) : this.handleDelayEnd(r);
    }, e.prototype.handleDelayEnd = function(r) {
      this.isDelayEnded = !0, this.tryStartDrag(r);
    }, e.prototype.handleDistanceSurpassed = function(r) {
      this.isDistanceSurpassed = !0, this.tryStartDrag(r);
    }, e.prototype.tryStartDrag = function(r) {
      this.isDelayEnded && this.isDistanceSurpassed && (!this.pointer.wasTouchScroll || this.touchScrollAllowed) && (this.isDragging = !0, this.mirrorNeedsRevert = !1, this.autoScroller.start(r.pageX, r.pageY, this.containerEl), this.emitter.trigger("dragstart", r), this.touchScrollAllowed === !1 && this.pointer.cancelTouchScroll());
    }, e.prototype.tryStopDrag = function(r) {
      this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, r));
    }, e.prototype.stopDrag = function(r) {
      this.isDragging = !1, this.emitter.trigger("dragend", r);
    }, e.prototype.setIgnoreMove = function(r) {
      this.pointer.shouldIgnoreMove = r;
    }, e.prototype.setMirrorIsVisible = function(r) {
      this.mirror.setIsVisible(r);
    }, e.prototype.setMirrorNeedsRevert = function(r) {
      this.mirrorNeedsRevert = r;
    }, e.prototype.setAutoScrollEnabled = function(r) {
      this.autoScroller.isEnabled = r;
    }, e;
  }(Ni)
), zc = (
  /** @class */
  function() {
    function t(e) {
      this.origRect = dr(e), this.scrollCaches = Ei(e).map(function(r) {
        return new Qi(r, !0);
      });
    }
    return t.prototype.destroy = function() {
      for (var e = 0, r = this.scrollCaches; e < r.length; e++) {
        var n = r[e];
        n.destroy();
      }
    }, t.prototype.computeLeft = function() {
      for (var e = this.origRect.left, r = 0, n = this.scrollCaches; r < n.length; r++) {
        var i = n[r];
        e += i.origScrollLeft - i.getScrollLeft();
      }
      return e;
    }, t.prototype.computeTop = function() {
      for (var e = this.origRect.top, r = 0, n = this.scrollCaches; r < n.length; r++) {
        var i = n[r];
        e += i.origScrollTop - i.getScrollTop();
      }
      return e;
    }, t.prototype.isWithinClipping = function(e, r) {
      for (var n = { left: e, top: r }, i = 0, a = this.scrollCaches; i < a.length; i++) {
        var o = a[i];
        if (!Gc(o.getEventTarget()) && !xs(n, o.clientRect))
          return !1;
      }
      return !0;
    }, t;
  }()
);
function Gc(t) {
  var e = t.tagName;
  return e === "HTML" || e === "BODY";
}
var gt = (
  /** @class */
  function() {
    function t(e, r) {
      var n = this;
      this.useSubjectCenter = !1, this.requireInitial = !0, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = function(i) {
        var a = n.dragging;
        n.initialHit = null, n.movingHit = null, n.finalHit = null, n.prepareHits(), n.processFirstCoord(i), n.initialHit || !n.requireInitial ? (a.setIgnoreMove(!1), n.emitter.trigger("pointerdown", i)) : a.setIgnoreMove(!0);
      }, this.handleDragStart = function(i) {
        n.emitter.trigger("dragstart", i), n.handleMove(i, !0);
      }, this.handleDragMove = function(i) {
        n.emitter.trigger("dragmove", i), n.handleMove(i);
      }, this.handlePointerUp = function(i) {
        n.releaseHits(), n.emitter.trigger("pointerup", i);
      }, this.handleDragEnd = function(i) {
        n.movingHit && n.emitter.trigger("hitupdate", null, !0, i), n.finalHit = n.movingHit, n.movingHit = null, n.emitter.trigger("dragend", i);
      }, this.droppableStore = r, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new pt();
    }
    return t.prototype.processFirstCoord = function(e) {
      var r = { left: e.pageX, top: e.pageY }, n = r, i = e.subjectEl, a;
      i instanceof HTMLElement && (a = dr(i), n = Ns(n, a));
      var o = this.initialHit = this.queryHitForOffset(n.left, n.top);
      if (o) {
        if (this.useSubjectCenter && a) {
          var s = hi(a, o.rect);
          s && (n = As(s));
        }
        this.coordAdjust = Os(n, r);
      } else
        this.coordAdjust = { left: 0, top: 0 };
    }, t.prototype.handleMove = function(e, r) {
      var n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
      (r || !mt(this.movingHit, n)) && (this.movingHit = n, this.emitter.trigger("hitupdate", n, !1, e));
    }, t.prototype.prepareHits = function() {
      this.offsetTrackers = fe(this.droppableStore, function(e) {
        return e.component.prepareHits(), new zc(e.el);
      });
    }, t.prototype.releaseHits = function() {
      var e = this.offsetTrackers;
      for (var r in e)
        e[r].destroy();
      this.offsetTrackers = {};
    }, t.prototype.queryHitForOffset = function(e, r) {
      var n = this, i = n.droppableStore, a = n.offsetTrackers, o = null;
      for (var s in i) {
        var l = i[s].component, c = a[s];
        if (c && // wasn't destroyed mid-drag
        c.isWithinClipping(e, r)) {
          var u = c.computeLeft(), f = c.computeTop(), v = e - u, d = r - f, p = c.origRect, E = p.right - p.left, S = p.bottom - p.top;
          if (
            // must be within the element's bounds
            v >= 0 && v < E && d >= 0 && d < S
          ) {
            var g = l.queryHit(v, d, E, S);
            g && // make sure the hit is within activeRange, meaning it's not a dead cell
            vt(g.dateProfile.activeRange, g.dateSpan.range) && (!o || g.layer > o.layer) && (g.componentId = s, g.context = l.context, g.rect.left += u, g.rect.right += u, g.rect.top += f, g.rect.bottom += f, o = g);
          }
        }
      }
      return o;
    }, t;
  }()
);
function mt(t, e) {
  return !t && !e ? !0 : !!t != !!e ? !1 : ss(t.dateSpan, e.dateSpan);
}
function ea(t, e) {
  for (var r = {}, n = 0, i = e.pluginHooks.datePointTransforms; n < i.length; n++) {
    var a = i[n];
    h(r, a(t, e));
  }
  return h(r, qc(t, e.dateEnv)), r;
}
function qc(t, e) {
  return {
    date: e.toDate(t.range.start),
    dateStr: e.formatIso(t.range.start, { omitTime: t.allDay }),
    allDay: t.allDay
  };
}
var Yc = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      n.handlePointerDown = function(a) {
        var o = n.dragging, s = a.origEvent.target;
        o.setIgnoreMove(!n.component.isValidDateDownEl(s));
      }, n.handleDragEnd = function(a) {
        var o = n.component, s = n.dragging.pointer;
        if (!s.wasTouchScroll) {
          var l = n.hitDragging, c = l.initialHit, u = l.finalHit;
          if (c && u && mt(c, u)) {
            var f = o.context, v = h(h({}, ea(c.dateSpan, f)), { dayEl: c.dayEl, jsEvent: a.origEvent, view: f.viewApi || f.calendarApi.view });
            f.emitter.trigger("dateClick", v);
          }
        }
      }, n.dragging = new Ue(r.el), n.dragging.autoScroller.isEnabled = !1;
      var i = n.hitDragging = new gt(n.dragging, mr(r));
      return i.emitter.on("pointerdown", n.handlePointerDown), i.emitter.on("dragend", n.handleDragEnd), n;
    }
    return e.prototype.destroy = function() {
      this.dragging.destroy();
    }, e;
  }(Te)
), jc = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      n.dragSelection = null, n.handlePointerDown = function(l) {
        var c = n, u = c.component, f = c.dragging, v = u.context.options, d = v.selectable && u.isValidDateDownEl(l.origEvent.target);
        f.setIgnoreMove(!d), f.delay = l.isTouch ? Zc(u) : null;
      }, n.handleDragStart = function(l) {
        n.component.context.calendarApi.unselect(l);
      }, n.handleHitUpdate = function(l, c) {
        var u = n.component.context, f = null, v = !1;
        if (l) {
          var d = n.hitDragging.initialHit, p = l.componentId === d.componentId && n.isHitComboAllowed && !n.isHitComboAllowed(d, l);
          p || (f = Xc(d, l, u.pluginHooks.dateSelectionTransformers)), (!f || !Hu(f, l.dateProfile, u)) && (v = !0, f = null);
        }
        f ? u.dispatch({ type: "SELECT_DATES", selection: f }) : c || u.dispatch({ type: "UNSELECT_DATES" }), v ? Kt() : Jt(), c || (n.dragSelection = f);
      }, n.handlePointerUp = function(l) {
        n.dragSelection && (oi(n.dragSelection, l, n.component.context), n.dragSelection = null);
      };
      var i = r.component, a = i.context.options, o = n.dragging = new Ue(r.el);
      o.touchScrollAllowed = !1, o.minDistance = a.selectMinDistance || 0, o.autoScroller.isEnabled = a.dragScroll;
      var s = n.hitDragging = new gt(n.dragging, mr(r));
      return s.emitter.on("pointerdown", n.handlePointerDown), s.emitter.on("dragstart", n.handleDragStart), s.emitter.on("hitupdate", n.handleHitUpdate), s.emitter.on("pointerup", n.handlePointerUp), n;
    }
    return e.prototype.destroy = function() {
      this.dragging.destroy();
    }, e;
  }(Te)
);
function Zc(t) {
  var e = t.context.options, r = e.selectLongPressDelay;
  return r == null && (r = e.longPressDelay), r;
}
function Xc(t, e, r) {
  var n = t.dateSpan, i = e.dateSpan, a = [
    n.range.start,
    n.range.end,
    i.range.start,
    i.range.end
  ];
  a.sort($a);
  for (var o = {}, s = 0, l = r; s < l.length; s++) {
    var c = l[s], u = c(t, e);
    if (u === !1)
      return null;
    u && h(o, u);
  }
  return o.range = { start: a[0], end: a[3] }, o.allDay = n.allDay, o;
}
var ta = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      n.subjectEl = null, n.subjectSeg = null, n.isDragging = !1, n.eventRange = null, n.relevantEvents = null, n.receivingContext = null, n.validMutation = null, n.mutatedRelevantEvents = null, n.handlePointerDown = function(l) {
        var c = l.origEvent.target, u = n, f = u.component, v = u.dragging, d = v.mirror, p = f.context.options, E = f.context;
        n.subjectEl = l.subjectEl;
        var S = n.subjectSeg = be(l.subjectEl), g = n.eventRange = S.eventRange, b = g.instance.instanceId;
        n.relevantEvents = ir(E.getCurrentData().eventStore, b), v.minDistance = l.isTouch ? 0 : p.eventDragMinDistance, v.delay = // only do a touch delay if touch and this event hasn't been selected yet
        l.isTouch && b !== f.props.eventSelection ? Kc(f) : null, p.fixedMirrorParent ? d.parentNode = p.fixedMirrorParent : d.parentNode = V(c, ".fc"), d.revertDuration = p.dragRevertDuration;
        var C = f.isValidSegDownEl(c) && !V(c, ".fc-event-resizer");
        v.setIgnoreMove(!C), n.isDragging = C && l.subjectEl.classList.contains("fc-event-draggable");
      }, n.handleDragStart = function(l) {
        var c = n.component.context, u = n.eventRange, f = u.instance.instanceId;
        l.isTouch ? f !== n.component.props.eventSelection && c.dispatch({ type: "SELECT_EVENT", eventInstanceId: f }) : c.dispatch({ type: "UNSELECT_EVENT" }), n.isDragging && (c.calendarApi.unselect(l), c.emitter.trigger("eventDragStart", {
          el: n.subjectEl,
          event: new O(c, u.def, u.instance),
          jsEvent: l.origEvent,
          view: c.viewApi
        }));
      }, n.handleHitUpdate = function(l, c) {
        if (n.isDragging) {
          var u = n.relevantEvents, f = n.hitDragging.initialHit, v = n.component.context, d = null, p = null, E = null, S = !1, g = {
            affectedEvents: u,
            mutatedEvents: Y(),
            isEvent: !0
          };
          if (l) {
            d = l.context;
            var b = d.options;
            v === d || b.editable && b.droppable ? (p = $c(f, l, d.getCurrentData().pluginHooks.eventDragMutationMassagers), p && (E = ur(u, d.getCurrentData().eventUiBases, p, d), g.mutatedEvents = E, Ui(g, l.dateProfile, d) || (S = !0, p = null, E = null, g.mutatedEvents = Y()))) : d = null;
          }
          n.displayDrag(d, g), S ? Kt() : Jt(), c || (v === d && // TODO: write test for this
          mt(f, l) && (p = null), n.dragging.setMirrorNeedsRevert(!p), n.dragging.setMirrorIsVisible(!l || !zn(n.subjectEl).querySelector(".fc-event-mirror")), n.receivingContext = d, n.validMutation = p, n.mutatedRelevantEvents = E);
        }
      }, n.handlePointerUp = function() {
        n.isDragging || n.cleanup();
      }, n.handleDragEnd = function(l) {
        if (n.isDragging) {
          var c = n.component.context, u = c.viewApi, f = n, v = f.receivingContext, d = f.validMutation, p = n.eventRange.def, E = n.eventRange.instance, S = new O(c, p, E), g = n.relevantEvents, b = n.mutatedRelevantEvents, C = n.hitDragging.finalHit;
          if (n.clearDrag(), c.emitter.trigger("eventDragStop", {
            el: n.subjectEl,
            event: S,
            jsEvent: l.origEvent,
            view: u
          }), d) {
            if (v === c) {
              var D = new O(c, b.defs[p.defId], E ? b.instances[E.instanceId] : null);
              c.dispatch({
                type: "MERGE_EVENTS",
                eventStore: b
              });
              for (var I = {
                oldEvent: S,
                event: D,
                relatedEvents: se(b, c, E),
                revert: function() {
                  c.dispatch({
                    type: "MERGE_EVENTS",
                    eventStore: g
                    // the pre-change data
                  });
                }
              }, _ = {}, P = 0, w = c.getCurrentData().pluginHooks.eventDropTransformers; P < w.length; P++) {
                var N = w[P];
                h(_, N(d, c));
              }
              c.emitter.trigger("eventDrop", h(h(h({}, I), _), { el: l.subjectEl, delta: d.datesDelta, jsEvent: l.origEvent, view: u })), c.emitter.trigger("eventChange", I);
            } else if (v) {
              var L = {
                event: S,
                relatedEvents: se(g, c, E),
                revert: function() {
                  c.dispatch({
                    type: "MERGE_EVENTS",
                    eventStore: g
                  });
                }
              };
              c.emitter.trigger("eventLeave", h(h({}, L), { draggedEl: l.subjectEl, view: u })), c.dispatch({
                type: "REMOVE_EVENTS",
                eventStore: g
              }), c.emitter.trigger("eventRemove", L);
              var Z = b.defs[p.defId], z = b.instances[E.instanceId], Ve = new O(v, Z, z);
              v.dispatch({
                type: "MERGE_EVENTS",
                eventStore: b
              });
              var We = {
                event: Ve,
                relatedEvents: se(b, v, z),
                revert: function() {
                  v.dispatch({
                    type: "REMOVE_EVENTS",
                    eventStore: b
                  });
                }
              };
              v.emitter.trigger("eventAdd", We), l.isTouch && v.dispatch({
                type: "SELECT_EVENT",
                eventInstanceId: E.instanceId
              }), v.emitter.trigger("drop", h(h({}, ea(C.dateSpan, v)), { draggedEl: l.subjectEl, jsEvent: l.origEvent, view: C.context.viewApi })), v.emitter.trigger("eventReceive", h(h({}, We), { draggedEl: l.subjectEl, view: C.context.viewApi }));
            }
          } else
            c.emitter.trigger("_noEventDrop");
        }
        n.cleanup();
      };
      var i = n.component, a = i.context.options, o = n.dragging = new Ue(r.el);
      o.pointer.selector = e.SELECTOR, o.touchScrollAllowed = !1, o.autoScroller.isEnabled = a.dragScroll;
      var s = n.hitDragging = new gt(n.dragging, qt);
      return s.useSubjectCenter = r.useEventCenter, s.emitter.on("pointerdown", n.handlePointerDown), s.emitter.on("dragstart", n.handleDragStart), s.emitter.on("hitupdate", n.handleHitUpdate), s.emitter.on("pointerup", n.handlePointerUp), s.emitter.on("dragend", n.handleDragEnd), n;
    }
    return e.prototype.destroy = function() {
      this.dragging.destroy();
    }, e.prototype.displayDrag = function(r, n) {
      var i = this.component.context, a = this.receivingContext;
      a && a !== r && (a === i ? a.dispatch({
        type: "SET_EVENT_DRAG",
        state: {
          affectedEvents: n.affectedEvents,
          mutatedEvents: Y(),
          isEvent: !0
        }
      }) : a.dispatch({ type: "UNSET_EVENT_DRAG" })), r && r.dispatch({ type: "SET_EVENT_DRAG", state: n });
    }, e.prototype.clearDrag = function() {
      var r = this.component.context, n = this.receivingContext;
      n && n.dispatch({ type: "UNSET_EVENT_DRAG" }), r !== n && r.dispatch({ type: "UNSET_EVENT_DRAG" });
    }, e.prototype.cleanup = function() {
      this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null;
    }, e.SELECTOR = ".fc-event-draggable, .fc-event-resizable", e;
  }(Te)
);
function $c(t, e, r) {
  var n = t.dateSpan, i = e.dateSpan, a = n.range.start, o = i.range.start, s = {};
  n.allDay !== i.allDay && (s.allDay = i.allDay, s.hasEnd = e.context.options.allDayMaintainDuration, i.allDay && (a = H(a)));
  var l = he(a, o, t.context.dateEnv, t.componentId === e.componentId ? t.largeUnit : null);
  l.milliseconds && (s.allDay = !1);
  for (var c = {
    datesDelta: l,
    standardProps: s
  }, u = 0, f = r; u < f.length; u++) {
    var v = f[u];
    v(c, t, e);
  }
  return c;
}
function Kc(t) {
  var e = t.context.options, r = e.eventLongPressDelay;
  return r == null && (r = e.longPressDelay), r;
}
var Jc = (
  /** @class */
  function(t) {
    R(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      n.draggingSegEl = null, n.draggingSeg = null, n.eventRange = null, n.relevantEvents = null, n.validMutation = null, n.mutatedRelevantEvents = null, n.handlePointerDown = function(s) {
        var l = n.component, c = n.querySegEl(s), u = be(c), f = n.eventRange = u.eventRange;
        n.dragging.minDistance = l.context.options.eventDragMinDistance, n.dragging.setIgnoreMove(!n.component.isValidSegDownEl(s.origEvent.target) || s.isTouch && n.component.props.eventSelection !== f.instance.instanceId);
      }, n.handleDragStart = function(s) {
        var l = n.component.context, c = n.eventRange;
        n.relevantEvents = ir(l.getCurrentData().eventStore, n.eventRange.instance.instanceId);
        var u = n.querySegEl(s);
        n.draggingSegEl = u, n.draggingSeg = be(u), l.calendarApi.unselect(), l.emitter.trigger("eventResizeStart", {
          el: u,
          event: new O(l, c.def, c.instance),
          jsEvent: s.origEvent,
          view: l.viewApi
        });
      }, n.handleHitUpdate = function(s, l, c) {
        var u = n.component.context, f = n.relevantEvents, v = n.hitDragging.initialHit, d = n.eventRange.instance, p = null, E = null, S = !1, g = {
          affectedEvents: f,
          mutatedEvents: Y(),
          isEvent: !0
        };
        if (s) {
          var b = s.componentId === v.componentId && n.isHitComboAllowed && !n.isHitComboAllowed(v, s);
          b || (p = Qc(v, s, c.subjectEl.classList.contains("fc-event-resizer-start"), d.range));
        }
        p && (E = ur(f, u.getCurrentData().eventUiBases, p, u), g.mutatedEvents = E, Ui(g, s.dateProfile, u) || (S = !0, p = null, E = null, g.mutatedEvents = null)), E ? u.dispatch({
          type: "SET_EVENT_RESIZE",
          state: g
        }) : u.dispatch({ type: "UNSET_EVENT_RESIZE" }), S ? Kt() : Jt(), l || (p && mt(v, s) && (p = null), n.validMutation = p, n.mutatedRelevantEvents = E);
      }, n.handleDragEnd = function(s) {
        var l = n.component.context, c = n.eventRange.def, u = n.eventRange.instance, f = new O(l, c, u), v = n.relevantEvents, d = n.mutatedRelevantEvents;
        if (l.emitter.trigger("eventResizeStop", {
          el: n.draggingSegEl,
          event: f,
          jsEvent: s.origEvent,
          view: l.viewApi
        }), n.validMutation) {
          var p = new O(l, d.defs[c.defId], u ? d.instances[u.instanceId] : null);
          l.dispatch({
            type: "MERGE_EVENTS",
            eventStore: d
          });
          var E = {
            oldEvent: f,
            event: p,
            relatedEvents: se(d, l, u),
            revert: function() {
              l.dispatch({
                type: "MERGE_EVENTS",
                eventStore: v
                // the pre-change events
              });
            }
          };
          l.emitter.trigger("eventResize", h(h({}, E), { el: n.draggingSegEl, startDelta: n.validMutation.startDelta || k(0), endDelta: n.validMutation.endDelta || k(0), jsEvent: s.origEvent, view: l.viewApi })), l.emitter.trigger("eventChange", E);
        } else
          l.emitter.trigger("_noEventResize");
        n.draggingSeg = null, n.relevantEvents = null, n.validMutation = null;
      };
      var i = r.component, a = n.dragging = new Ue(r.el);
      a.pointer.selector = ".fc-event-resizer", a.touchScrollAllowed = !1, a.autoScroller.isEnabled = i.context.options.dragScroll;
      var o = n.hitDragging = new gt(n.dragging, mr(r));
      return o.emitter.on("pointerdown", n.handlePointerDown), o.emitter.on("dragstart", n.handleDragStart), o.emitter.on("hitupdate", n.handleHitUpdate), o.emitter.on("dragend", n.handleDragEnd), n;
    }
    return e.prototype.destroy = function() {
      this.dragging.destroy();
    }, e.prototype.querySegEl = function(r) {
      return V(r.subjectEl, ".fc-event");
    }, e;
  }(Te)
);
function Qc(t, e, r, n) {
  var i = t.context.dateEnv, a = t.dateSpan.range.start, o = e.dateSpan.range.start, s = he(a, o, i, t.largeUnit);
  if (r) {
    if (i.add(n.start, s) < n.end)
      return { startDelta: s };
  } else if (i.add(n.end, s) > n.start)
    return { endDelta: s };
  return null;
}
var ef = (
  /** @class */
  function() {
    function t(e) {
      var r = this;
      this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = function(i) {
        i.jsEvent && (r.isRecentPointerDateSelect = !0);
      }, this.onDocumentPointerDown = function(i) {
        var a = r.context.options.unselectCancel, o = Fn(i.origEvent);
        r.matchesCancel = !!V(o, a), r.matchesEvent = !!V(o, ta.SELECTOR);
      }, this.onDocumentPointerUp = function(i) {
        var a = r.context, o = r.documentPointer, s = a.getCurrentData();
        if (!o.wasTouchScroll) {
          if (s.dateSelection && // an existing date selection?
          !r.isRecentPointerDateSelect) {
            var l = a.options.unselectAuto;
            l && (!l || !r.matchesCancel) && a.calendarApi.unselect(i);
          }
          s.eventSelection && // an existing event selected?
          !r.matchesEvent && a.dispatch({ type: "UNSELECT_EVENT" });
        }
        r.isRecentPointerDateSelect = !1;
      };
      var n = this.documentPointer = new Sr(document);
      n.shouldIgnoreMove = !0, n.shouldWatchScroll = !1, n.emitter.on("pointerdown", this.onDocumentPointerDown), n.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
    }
    return t.prototype.destroy = function() {
      this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
    }, t;
  }()
), tf = {
  fixedMirrorParent: y
}, rf = {
  dateClick: y,
  eventDragStart: y,
  eventDragStop: y,
  eventDrop: y,
  eventResizeStart: y,
  eventResizeStop: y,
  eventResize: y,
  drop: y,
  eventReceive: y,
  eventLeave: y
};
yr.dataAttrPrefix = "";
(function(t) {
  R(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    n.shouldIgnoreMove = !1, n.mirrorSelector = "", n.currentMirrorEl = null, n.handlePointerDown = function(a) {
      n.emitter.trigger("pointerdown", a), n.shouldIgnoreMove || n.emitter.trigger("dragstart", a);
    }, n.handlePointerMove = function(a) {
      n.shouldIgnoreMove || n.emitter.trigger("dragmove", a);
    }, n.handlePointerUp = function(a) {
      n.emitter.trigger("pointerup", a), n.shouldIgnoreMove || n.emitter.trigger("dragend", a);
    };
    var i = n.pointer = new Sr(r);
    return i.emitter.on("pointerdown", n.handlePointerDown), i.emitter.on("pointermove", n.handlePointerMove), i.emitter.on("pointerup", n.handlePointerUp), n;
  }
  return e.prototype.destroy = function() {
    this.pointer.destroy();
  }, e.prototype.setIgnoreMove = function(r) {
    this.shouldIgnoreMove = r;
  }, e.prototype.setMirrorIsVisible = function(r) {
    if (r)
      this.currentMirrorEl && (this.currentMirrorEl.style.visibility = "", this.currentMirrorEl = null);
    else {
      var n = this.mirrorSelector ? document.querySelector(this.mirrorSelector) : null;
      n && (this.currentMirrorEl = n, n.style.visibility = "hidden");
    }
  }, e;
})(Ni);
var nf = te({
  componentInteractions: [Yc, jc, ta, Jc],
  calendarInteractions: [ef],
  elementDraggingImpl: Ue,
  optionRefiners: tf,
  listenerRefiners: rf
});
const af = { id: "calendar" }, of = /* @__PURE__ */ ra({
  __name: "index",
  props: {
    // 日历显示的语言
    local: {
      type: String,
      default: "zh-cn"
    },
    // 视图模式
    initialView: {
      type: String,
      default: "dayGridMonth"
    },
    // 按钮文字
    buttonText: {
      type: Object,
      default: () => ({
        today: "今天",
        month: "月",
        week: "周",
        day: "日",
        prevYear: "上一年",
        nextYear: "下一年",
        prev: "上一月",
        next: "下一月"
      })
    },
    // 头部工具栏
    headerToolbar: {
      type: Object,
      default: () => ({
        start: "title",
        center: "",
        end: "prev today next"
      })
    },
    // 底部工具栏
    footerToolbar: {
      type: Object
    },
    // 日历事件
    events: {
      type: Array,
      default: () => []
    },
    // 自定义渲染内容方法
    eventContent: {
      type: Function
    }
  },
  emits: ["date-click", "event-click"],
  setup(t, { emit: e }) {
    let r = t, n = e, i = na(), a = () => {
      let o = document.getElementById("calendar");
      o && (i.value = new vc(o, {
        // 使用到的插件
        plugins: [Ac, nf],
        // 视图模式
        initialView: r.initialView,
        // 语言
        locale: r.local,
        // 按钮文字
        buttonText: r.buttonText,
        // 头部工具栏
        headerToolbar: r.headerToolbar,
        // 底部工具栏
        footerToolbar: r.footerToolbar,
        // 事件源
        eventSources: [
          {
            // 生成事件
            events(s, l) {
              r.events.length ? l(r.events) : l([]);
            }
          }
        ],
        // 点击日历的某一天
        dateClick(s) {
          n("date-click", s);
        },
        // 点击日历上的时间
        eventClick(s) {
          n("event-click", s);
        },
        // 显示事件的结束时间
        displayEventEnd: !0,
        // 自定义渲染内容
        eventContent: r.eventContent
      }), i.value.render());
    };
    return ia(
      () => r.events,
      () => {
        a();
      },
      { deep: !0 }
    ), aa(() => {
      a();
    }), (o, s) => (oa(), sa("div", af));
  }
});
const sf = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, lf = /* @__PURE__ */ sf(of, [["__scopeId", "data-v-1dfb546b"]]), cf = {
  install(t) {
    t.component("m-calendar", lf);
  }
};
export {
  cf as default
};

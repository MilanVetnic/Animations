/*!
 * GSAP 3.6.1
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {}) }(this, function(e) {
    "use strict";

    function _inheritsLoose(t, e) { t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e }

    function _assertThisInitialized(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

    function o(t) { return "string" == typeof t }

    function p(t) { return "function" == typeof t }

    function q(t) { return "number" == typeof t }

    function r(t) { return void 0 === t }

    function s(t) { return "object" == typeof t }

    function t(t) { return !1 !== t }

    function u() { return "undefined" != typeof window }

    function v(t) { return p(t) || o(t) }

    function M(t) { return (h = mt(t, ot)) && ae }

    function N(t, e) { return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()") }

    function O(t, e) { return !e && console.warn(t) }

    function P(t, e) { return t && (ot[t] = e) && h && (h[t] = e) || ot }

    function Q() { return 0 }

    function $(t) {
        var e, r, i = t[0];
        if (s(i) || p(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
            for (r = pt.length; r-- && !pt[r].targetTest(i););
            e = pt[r]
        }
        for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Rt(t[r], e))) || t.splice(r, 1);
        return t
    }

    function _(t) { return t._gsap || $(Tt(t))[0]._gsap }

    function aa(t, e, i) { return (i = t[e]) && p(i) ? t[e]() : r(i) && t.getAttribute && t.getAttribute(e) || i }

    function ba(t, e) { return (t = t.split(",")).forEach(e) || t }

    function ca(t) { return Math.round(1e5 * t) / 1e5 || 0 }

    function da(t, e) { for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;); return i < r }

    function ea(e, r, i) {
        var n, a = q(e[1]),
            s = (a ? 2 : 1) + (r < 2 ? 0 : 1),
            o = e[s];
        if (a && (o.duration = e[1]), o.parent = i, r) {
            for (n = o; i && !("immediateRender" in n);) n = i.vars.defaults || {}, i = t(i.vars.inherit) && i.parent;
            o.immediateRender = t(n.immediateRender), r < 2 ? o.runBackwards = 1 : o.startAt = e[s - 1]
        }
        return o
    }

    function fa() {
        var t, e, r = ht.length,
            i = ht.slice(0);
        for (lt = {}, t = ht.length = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }

    function ga(t, e, r, i) { ht.length && fa(), t.render(e, r, i), ht.length && fa() }

    function ha(t) { var e = parseFloat(t); return (e || 0 === e) && (t + "").match(at).length < 2 ? e : o(t) ? t.trim() : t }

    function ia(t) { return t }

    function ja(t, e) { for (var r in e) r in t || (t[r] = e[r]); return t }

    function ka(t, e) { for (var r in e) r in t || "duration" === r || "ease" === r || (t[r] = e[r]) }

    function ma(t, e) { for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = s(e[r]) ? ma(t[r] || (t[r] = {}), e[r]) : e[r]); return t }

    function na(t, e) { var r, i = {}; for (r in t) r in e || (i[r] = t[r]); return i }

    function oa(e) {
        var r = e.parent || F,
            i = e.keyframes ? ka : ja;
        if (t(e.inherit))
            for (; r;) i(e, r.vars.defaults), r = r.parent || r._dp;
        return e
    }

    function ra(t, e, r, i) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var n = e._prev,
            a = e._next;
        n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
    }

    function sa(t, e) {!t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0 }

    function ta(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r;) r._dirty = 1, r = r.parent;
        return t
    }

    function wa(t) { return t._repeat ? gt(t._tTime, t = t.duration() + t._rDelay) * t : 0 }

    function ya(t, e) { return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur) }

    function za(t) { return t._end = ca(t._start + (t._tDur / Math.abs(t._ts || t._rts || j) || 0)) }

    function Aa(t, e) { var r = t._dp; return r && r.smoothChildTiming && t._ts && (t._start = ca(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), za(t), r._dirty || ta(r, t)), t }

    function Ba(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = ya(t.rawTime(), e), (!e._dur || yt(0, e.totalDuration(), r) - e._tTime > j) && e.render(r, !0)), ta(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -j
        }
    }

    function Ca(t, e, r, i) {
        return e.parent && sa(e), e._start = ca(r + e._delay), e._end = ca(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
            function _addLinkedListItem(t, e, r, i, n) {
                void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
                var a, s = t[i];
                if (n)
                    for (a = e[n]; s && s[n] > a;) s = s._prev;
                s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t
            }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, i || Ba(t, e), t
    }

    function Da(t, e) { return (ot.ScrollTrigger || N("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t) }

    function Ea(t, e, r, i) { return Nt(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== Pt.frame ? (ht.push(t), t._lazy = [e, i], 1) : void 0 : 1 }

    function Ia(t, e, r, i) {
        var n = t._repeat,
            a = ca(e) || 0,
            s = t._tTime / t._tDur;
        return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : ca(a * (n + 1) + t._rDelay * n) : a, s && !i ? Aa(t, t._tTime = t._tDur * s) : t.parent && za(t), r || ta(t.parent, t), t
    }

    function Ja(t) { return t instanceof Bt ? ta(t) : Ia(t, t._dur) }

    function La(t, e) {
        var r, i, n = t.labels,
            a = t._recent || vt,
            s = t.duration() >= U ? a.endTime(!1) : t._dur;
        return o(e) && (isNaN(e) || e in n) ? "<" === (r = e.charAt(0)) || ">" === r ? ("<" === r ? a._start : a.endTime(0 <= a._repeat)) + (parseFloat(e.substr(1)) || 0) : (r = e.indexOf("=")) < 0 ? (e in n || (n[e] = s), n[e]) : (i = +(e.charAt(r - 1) + e.substr(r + 1)), 1 < r ? La(t, e.substr(0, r - 1)) + i : s + i) : null == e ? s : +e
    }

    function Ma(t, e) { return t || 0 === t ? e(t) : e }

    function Oa(t) { if ("string" != typeof t) return ""; var e = st.exec(t); return e ? t.substr(e.index + e[0].length) : "" }

    function Ra(t, e) { return t && s(t) && "length" in t && (!e && !t.length || t.length - 1 in t && s(t[0])) && !t.nodeType && t !== i }

    function Ua(t) { return t.sort(function() { return .5 - Math.random() }) }

    function Va(t) {
        if (p(t)) return t;
        var _ = s(t) ? t : { each: t },
            m = Et(_.ease),
            g = _.from || 0,
            v = parseFloat(_.base) || 0,
            y = {},
            e = 0 < g && g < 1,
            b = isNaN(g) || e,
            T = _.axis,
            w = g,
            x = g;
        return o(g) ? w = x = { center: .5, edges: .5, end: 1 }[g] || 0 : !e && b && (w = g[0], x = g[1]),
            function(t, e, r) {
                var i, n, a, s, o, u, h, l, f, d = (r || _).length,
                    c = y[d];
                if (!c) {
                    if (!(f = "auto" === _.grid ? 0 : (_.grid || [1, U])[1])) {
                        for (h = -U; h < (h = r[f++].getBoundingClientRect().left) && f < d;);
                        f--
                    }
                    for (c = y[d] = [], i = b ? Math.min(f, d) * w - .5 : g % f, n = b ? d * x / f - .5 : g / f | 0, l = U, u = h = 0; u < d; u++) a = u % f - i, s = n - (u / f | 0), c[u] = o = T ? Math.abs("y" === T ? s : a) : J(a * a + s * s), h < o && (h = o), o < l && (l = o);
                    "random" === g && Ua(c), c.max = h - l, c.min = l, c.v = d = (parseFloat(_.amount) || parseFloat(_.each) * (d < f ? d - 1 : T ? "y" === T ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === g ? -1 : 1), c.b = d < 0 ? v - d : v, c.u = Oa(_.amount || _.each) || 0, m = m && d < 0 ? It(m) : m
                }
                return d = (c[t] - c.min) / c.max || 0, ca(c.b + (m ? m(d) : d) * c.v) + c.u
            }
    }

    function Wa(r) { var i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1; return function(t) { var e = Math.round(parseFloat(t) / r) * r * i; return (e - e % 1) / i + (q(t) ? 0 : Oa(t)) } }

    function Xa(u, t) { var h, l, e = K(u); return !e && s(u) && (h = e = u.radius || U, u.values ? (u = Tt(u.values), (l = !q(u[0])) && (h *= h)) : u = Wa(u.increment)), Ma(t, e ? p(u) ? function(t) { return l = u(t), Math.abs(l - t) <= h ? l : t } : function(t) { for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = U, s = 0, o = u.length; o--;)(e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e, s = o); return s = !h || a <= h ? u[s] : t, l || s === t || q(t) ? s : s + Oa(t) } : Wa(u)) }

    function Ya(t, e, r, i) { return Ma(K(t) ? !e : !0 === r ? !!(r = 0) : !i, function() { return K(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i }) }

    function ab(e, r, t) { return Ma(t, function(t) { return e[~~r(t)] }) }

    function db(t) { for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + Ya(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1; return s + t.substr(a, t.length - a) }

    function gb(t, e, r) {
        var i, n, a, s = t.labels,
            o = U;
        for (i in s)(n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
        return a
    }

    function ib(t) { return sa(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && xt(t, "onInterrupt"), t }

    function nb(t, e, r) { return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * Ot + .5 | 0 }

    function ob(t, e, r) {
        var i, n, a, s, o, u, h, l, f, d, c = t ? q(t) ? [t >> 16, t >> 8 & Ot, t & Ot] : 0 : Mt.black;
        if (!c) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Mt[t]) c = Mt[t];
            else if ("#" === t.charAt(0)) {
                if (t.length < 6 && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(c = parseInt(t.substr(1, 6), 16)) >> 16, c >> 8 & Ot, c & Ot, parseInt(t.substr(7), 16) / 255];
                c = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & Ot, t & Ot]
            } else if ("hsl" === t.substr(0, 3))
                if (c = d = t.match(tt), e) { if (~t.indexOf("=")) return c = t.match(et), r && c.length < 4 && (c[3] = 1), c } else s = +c[0] % 360 / 360, o = c[1] / 100, i = 2 * (u = c[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), 3 < c.length && (c[3] *= 1), c[0] = nb(s + 1 / 3, i, n), c[1] = nb(s, i, n), c[2] = nb(s - 1 / 3, i, n);
            else c = t.match(tt) || Mt.transparent;
            c = c.map(Number)
        }
        return e && !d && (i = c[0] / Ot, n = c[1] / Ot, a = c[2] / Ot, u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2, h === l ? s = o = 0 : (f = h - l, o = .5 < u ? f / (2 - h - l) : f / (h + l), s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4, s *= 60), c[0] = ~~(s + .5), c[1] = ~~(100 * o + .5), c[2] = ~~(100 * u + .5)), r && c.length < 4 && (c[3] = 1), c
    }

    function pb(t) {
        var r = [],
            i = [],
            n = -1;
        return t.split(kt).forEach(function(t) {
            var e = t.match(rt) || [];
            r.push.apply(r, e), i.push(n += e.length + 1)
        }), r.c = i, r
    }

    function qb(t, e, r) {
        var i, n, a, s, o = "",
            u = (t + o).match(kt),
            h = e ? "hsla(" : "rgba(",
            l = 0;
        if (!u) return t;
        if (u = u.map(function(t) { return (t = ob(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")" }), r && (a = pb(t), (i = r.c).join(o) !== a.c.join(o)))
            for (s = (n = t.replace(kt, "1").split(rt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
        if (!n)
            for (s = (n = t.split(kt)).length - 1; l < s; l++) o += n[l] + u[l];
        return o + n[s]
    }

    function tb(t) { var e, r = t.join(" "); if (kt.lastIndex = 0, kt.test(r)) return e = Ct.test(r), t[1] = qb(t[1], e), t[0] = qb(t[0], e, pb(t[1])), !0 }

    function Cb(t) {
        var e = (t + "").split("("),
            r = Dt[e[0]];
        return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) { for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(zt, "").trim() : +i, s = r.substr(e + 1).trim(); return n }(e[1])] : function _valueInParentheses(t) {
            var e = t.indexOf("(") + 1,
                r = t.indexOf(")"),
                i = t.indexOf("(", e);
            return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
        }(t).split(",").map(ha)) : Dt._CE && St.test(t) ? Dt._CE("", t) : r
    }

    function Eb(t, e) { for (var r, i = t._first; i;) i instanceof Bt ? Eb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Eb(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next }

    function Gb(t, e, r, i) { void 0 === r && (r = function easeOut(t) { return 1 - e(1 - t) }), void 0 === i && (i = function easeInOut(t) { return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2 }); var n, a = { easeIn: e, easeOut: r, easeInOut: i }; return ba(t, function(t) { for (var e in Dt[t] = ot[t] = a, Dt[n = t.toLowerCase()] = r, a) Dt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Dt[t + "." + e] = a[e] }), a }

    function Hb(e) { return function(t) { return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2 } }

    function Ib(r, t, e) {
        function Dl(t) { return 1 === t ? 1 : i * Math.pow(2, -10 * t) * H((t - a) * n) + 1 }
        var i = 1 <= t ? t : 1,
            n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
            a = n / X * (Math.asin(1 / i) || 0),
            s = "out" === r ? Dl : "in" === r ? function(t) { return 1 - Dl(1 - t) } : Hb(Dl);
        return n = X / n, s.config = function(t, e) { return Ib(r, t, e) }, s
    }

    function Jb(e, r) {
        function Ll(t) { return t ? --t * t * ((r + 1) * t + r) + 1 : 0 }
        void 0 === r && (r = 1.70158);
        var t = "out" === e ? Ll : "in" === e ? function(t) { return 1 - Ll(1 - t) } : Hb(Ll);
        return t.config = function(t) { return Jb(e, t) }, t
    }
    var R, F, i, n, a, h, l, f, d, c, m, g, y, b, T, w, x, k, C, A, D, S, z, I, E, L, Y = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
        B = { duration: .5, overwrite: !1, delay: 0 },
        U = 1e8,
        j = 1 / U,
        X = 2 * Math.PI,
        V = X / 4,
        G = 0,
        J = Math.sqrt,
        W = Math.cos,
        H = Math.sin,
        Z = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        K = Array.isArray,
        tt = /(?:-?\.?\d|\.)+/gi,
        et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        nt = /[+-]=-?[.\d]+/,
        at = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        st = /[\d.+\-=]+(?:e[-+]\d*)*/i,
        ot = {},
        ut = {},
        ht = [],
        lt = {},
        ft = {},
        dt = {},
        ct = 30,
        pt = [],
        _t = "",
        mt = function _merge(t, e) { for (var r in e) t[r] = e[r]; return t },
        gt = function _animationCycle(t, e) { var r = Math.floor(t /= e); return t && r === t ? r - 1 : r },
        vt = { _start: 0, endTime: Q },
        yt = function _clamp(t, e, r) { return r < t ? t : e < r ? e : r },
        bt = [].slice,
        Tt = function toArray(t, e) { return !o(t) || e || !n && At() ? K(t) ? function _flatten(t, e, r) { return void 0 === r && (r = []), t.forEach(function(t) { return o(t) && !e || Ra(t, 1) ? r.push.apply(r, Tt(t)) : r.push(t) }) || r }(t, e) : Ra(t) ? bt.call(t, 0) : t ? [t] : [] : bt.call(a.querySelectorAll(t), 0) },
        wt = function mapRange(e, t, r, i, n) {
            var a = t - e,
                s = i - r;
            return Ma(n, function(t) { return r + ((t - e) / a * s || 0) })
        },
        xt = function _callback(t, e, r) {
            var i, n, a = t.vars,
                s = a[e];
            if (s) return i = a[e + "Params"], n = a.callbackScope || t, r && ht.length && fa(), i ? s.apply(n, i) : s.call(n)
        },
        Ot = 255,
        Mt = { aqua: [0, Ot, Ot], lime: [0, Ot, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, Ot], navy: [0, 0, 128], white: [Ot, Ot, Ot], olive: [128, 128, 0], yellow: [Ot, Ot, 0], orange: [Ot, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [Ot, 0, 0], pink: [Ot, 192, 203], cyan: [0, Ot, Ot], transparent: [Ot, Ot, Ot, 0] },
        kt = function() { var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b"; for (t in Mt) e += "|" + t + "\\b"; return new RegExp(e + ")", "gi") }(),
        Ct = /hsl[a]?\(/,
        Pt = (x = Date.now, k = 500, C = 33, A = x(), D = A, z = S = 1e3 / 240, b = {
            time: 0,
            frame: 0,
            tick: function tick() { zk(!0) },
            deltaRatio: function deltaRatio(t) { return T / (1e3 / (t || 60)) },
            wake: function wake() { l && (!n && u() && (i = n = window, a = i.document || {}, ot.gsap = ae, (i.gsapVersions || (i.gsapVersions = [])).push(ae.version), M(h || i.GreenSockGlobals || !i.gsap && i || {}), y = i.requestAnimationFrame), m && b.sleep(), g = y || function(t) { return setTimeout(t, z - 1e3 * b.time + 1 | 0) }, c = 1, zk(2)) },
            sleep: function sleep() {
                (y ? i.cancelAnimationFrame : clearTimeout)(m), c = 0, g = Q
            },
            lagSmoothing: function lagSmoothing(t, e) { k = t || 1e8, C = Math.min(e, k, 0) },
            fps: function fps(t) { S = 1e3 / (t || 240), z = 1e3 * b.time + S },
            add: function add(t) { I.indexOf(t) < 0 && I.push(t), At() },
            remove: function remove(t) { var e;~(e = I.indexOf(t)) && I.splice(e, 1) && e <= w && w-- },
            _listeners: I = []
        }),
        At = function _wake() { return !c && Pt.wake() },
        Dt = {},
        St = /^[\d.\-M][\d.\-,\s]/,
        zt = /["']/g,
        It = function _invertEase(e) { return function(t) { return 1 - e(1 - t) } },
        Et = function _parseEase(t, e) { return t && (p(t) ? t : Dt[t] || Cb(t)) || e };

    function zk(t) {
        var e, r, i, n, a = x() - D,
            s = !0 === t;
        if (k < a && (A += a - C), (0 < (e = (i = (D += a) - A) - z) || s) && (n = ++b.frame, T = i - 1e3 * b.time, b.time = i /= 1e3, z += e + (S <= e ? 4 : S - e), r = 1), s || (m = g(zk)), r)
            for (w = 0; w < I.length; w++) I[w](i, T, n, t)
    }

    function am(t) { return t < L ? E * t * t : t < .7272727272727273 ? E * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? E * (t -= 2.25 / 2.75) * t + .9375 : E * Math.pow(t - 2.625 / 2.75, 2) + .984375 }
    ba("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Gb(t + ",Power" + (r - 1), e ? function(t) { return Math.pow(t, r) } : function(t) { return t }, function(t) { return 1 - Math.pow(1 - t, r) }, function(t) { return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2 })
    }), Dt.Linear.easeNone = Dt.none = Dt.Linear.easeIn, Gb("Elastic", Ib("in"), Ib("out"), Ib()), E = 7.5625, L = 1 / 2.75, Gb("Bounce", function(t) { return 1 - am(1 - t) }, am), Gb("Expo", function(t) { return t ? Math.pow(2, 10 * (t - 1)) : 0 }), Gb("Circ", function(t) { return -(J(1 - t * t) - 1) }), Gb("Sine", function(t) { return 1 === t ? 1 : 1 - W(t * V) }), Gb("Back", Jb("in"), Jb("out"), Jb()), Dt.SteppedEase = Dt.steps = ot.SteppedEase = {
        config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
                i = t + (e ? 0 : 1),
                n = e ? 1 : 0;
            return function(t) { return ((i * yt(0, .99999999, t) | 0) + n) * r }
        }
    }, B.ease = Dt["quad.out"], ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) { return _t += t + "," + t + "Params," });
    var Lt, Rt = function GSCache(t, e) { this.id = G++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : aa, this.set = e ? e.getSetter : Wt },
        Ft = ((Lt = Animation.prototype).delay = function delay(t) { return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay }, Lt.duration = function duration(t) { return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur }, Lt.totalDuration = function totalDuration(t) { return arguments.length ? (this._dirty = 0, Ia(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur }, Lt.totalTime = function totalTime(t, e) { if (At(), !arguments.length) return this._tTime; var r = this._dp; if (r && r.smoothChildTiming && this._ts) { for (Aa(this, t), !r._dp || r.parent || Ba(r, this); r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;!this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Ca(this._dp, this, this._start - this._delay) } return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === j || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ga(this, t, e)), this }, Lt.time = function time(t, e) { return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + wa(this)) % this._dur || (t ? this._dur : 0), e) : this._time }, Lt.totalProgress = function totalProgress(t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio }, Lt.progress = function progress(t, e) { return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + wa(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio }, Lt.iteration = function iteration(t, e) { var r = this.duration() + this._rDelay; return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? gt(this._tTime, r) + 1 : 1 }, Lt.timeScale = function timeScale(t) {
            if (!arguments.length) return this._rts === -j ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? ya(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || t === -j ? 0 : this._rts,
                function _recacheAncestors(t) { for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent; return t }(this.totalTime(yt(-this._delay, this._tDur, e), !0))
        }, Lt.paused = function paused(t) { return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (At(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= j) && Math.abs(this._zTime) !== j))), this) : this._ps }, Lt.startTime = function startTime(t) { if (arguments.length) { this._start = t; var e = this.parent || this._dp; return !e || !e._sort && this.parent || Ca(e, this, t - this._delay), this } return this._start }, Lt.endTime = function endTime(e) { return this._start + (t(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts) }, Lt.rawTime = function rawTime(t) { var e = this.parent || this._dp; return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ya(e.rawTime(t), this) : this._tTime : this._tTime }, Lt.globalTime = function globalTime(t) { for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp; return r }, Lt.repeat = function repeat(t) { return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Ja(this)) : -2 === this._repeat ? 1 / 0 : this._repeat }, Lt.repeatDelay = function repeatDelay(t) { return arguments.length ? (this._rDelay = t, Ja(this)) : this._rDelay }, Lt.yoyo = function yoyo(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, Lt.seek = function seek(e, r) { return this.totalTime(La(this, e), t(r)) }, Lt.restart = function restart(e, r) { return this.play().totalTime(e ? -this._delay : 0, t(r)) }, Lt.play = function play(t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, Lt.reverse = function reverse(t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, Lt.pause = function pause(t, e) { return null != t && this.seek(t, e), this.paused(!0) }, Lt.resume = function resume() { return this.paused(!1) }, Lt.reversed = function reversed(t) { return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -j : 0)), this) : this._rts < 0 }, Lt.invalidate = function invalidate() { return this._initted = this._act = 0, this._zTime = -j, this }, Lt.isActive = function isActive() {
            var t, e = this.parent || this._dp,
                r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - j))
        }, Lt.eventCallback = function eventCallback(t, e, r) { var i = this.vars; return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t] }, Lt.then = function then(t) {
            var i = this;
            return new Promise(function(e) {
                function sn() {
                    var t = i.then;
                    i.then = null, p(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t
                }
                var r = p(t) ? t : ia;
                i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? sn() : i._prom = sn
            })
        }, Lt.kill = function kill() { ib(this) }, Animation);

    function Animation(t, e) {
        var r = t.parent || F;
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ia(this, +t.duration, 1, 1), this.data = t.data, c || Pt.wake(), r && Ca(r, this, e || 0 === e ? e : r._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0)
    }
    ja(Ft.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -j, _prom: 0, _ps: !1, _rts: 1 });
    var Bt = function(n) {
        function Timeline(e, r) { var i; return void 0 === e && (e = {}), (i = n.call(this, e, r) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = t(e.sortChildren), i.parent && Ba(i.parent, _assertThisInitialized(i)), e.scrollTrigger && Da(_assertThisInitialized(i), e.scrollTrigger), i }
        _inheritsLoose(Timeline, n);
        var e = Timeline.prototype;
        return e.to = function to(t, e, r, i) { return new Vt(t, ea(arguments, 0, this), La(this, q(e) ? i : r)), this }, e.from = function from(t, e, r, i) { return new Vt(t, ea(arguments, 1, this), La(this, q(e) ? i : r)), this }, e.fromTo = function fromTo(t, e, r, i, n) { return new Vt(t, ea(arguments, 2, this), La(this, q(e) ? n : i)), this }, e.set = function set(t, e, r) { return e.duration = 0, e.parent = this, oa(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Vt(t, e, La(this, r), 1), this }, e.call = function call(t, e, r) { return Ca(this, Vt.delayedCall(0, t, e), La(this, r)) }, e.staggerTo = function staggerTo(t, e, r, i, n, a, s) { return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Vt(t, r, La(this, n)), this }, e.staggerFrom = function staggerFrom(e, r, i, n, a, s, o) { return i.runBackwards = 1, oa(i).immediateRender = t(i.immediateRender), this.staggerTo(e, r, i, n, a, s, o) }, e.staggerFromTo = function staggerFromTo(e, r, i, n, a, s, o, u) { return n.startAt = i, oa(n).immediateRender = t(n.immediateRender), this.staggerTo(e, r, n, a, s, o, u) }, e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d, c, p, _ = this._time,
                m = this._dirty ? this.totalDuration() : this._tDur,
                g = this._dur,
                v = this !== F && m - j < t && 0 <= t ? m : t < j ? 0 : t,
                y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (v !== this._tTime || r || y) {
                if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
                    if (c = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);
                    if (i = ca(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), d = gt(this._tTime, o), !_ && this._tTime && d !== s && (d = s), c && 1 & s && (i = g - i, p = 1), s !== d && !this._lock) {
                        var b = c && 1 & d,
                            T = b === (c && 1 & s);
                        if (s < d && (b = !b), _ = b ? 0 : g, this._lock = 1, this.render(_ || (p ? 0 : ca(s * o)), e, !g)._lock = 0, !e && this.parent && xt(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (g = this._dur, m = this._tDur, T && (this._lock = 2, _ = b ? g : -1e-4, this.render(_, !0)), this._lock = 0, !this._ts && !u) return this;
                        Eb(this, p)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
                        var i;
                        if (e < r)
                            for (i = t._first; i && i._start <= r;) {
                                if (!i._dur && "isPause" === i.data && i._start > e) return i;
                                i = i._next
                            } else
                                for (i = t._last; i && i._start >= r;) {
                                    if (!i._dur && "isPause" === i.data && i._start < e) return i;
                                    i = i._prev
                                }
                    }(this, ca(_), ca(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), _ || !i || e || xt(this, "onStart"), _ <= i && 0 <= t)
                    for (n = this._first; n;) {
                        if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) { if (n.parent !== this) return this.render(t, e, r); if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) { h = 0, a && (v += this._zTime = -j); break } }
                        n = a
                    } else {
                        n = this._last;
                        for (var w = t < 0 ? t : i; n;) {
                            if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) { if (n.parent !== this) return this.render(t, e, r); if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) { h = 0, a && (v += this._zTime = w ? -j : j); break } }
                            n = a
                        }
                    }
                if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -j)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, za(this), this.render(t, e, r);
                this._onUpdate && !e && xt(this, "onUpdate", !0), (v === m && m >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || sa(this, 1), e || t < 0 && !_ || !v && !_ || (xt(this, v === m ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())))
            }
            return this
        }, e.add = function add(t, e) {
            var r = this;
            if (q(e) || (e = La(this, e)), !(t instanceof Ft)) {
                if (K(t)) return t.forEach(function(t) { return r.add(t, e) }), this;
                if (o(t)) return this.addLabel(t, e);
                if (!p(t)) return this;
                t = Vt.delayedCall(0, t)
            }
            return this !== t ? Ca(this, t, e) : this
        }, e.getChildren = function getChildren(t, e, r, i) { void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -U); for (var n = [], a = this._first; a;) a._start >= i && (a instanceof Vt ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next; return n }, e.getById = function getById(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                if (e[r].vars.id === t) return e[r]
        }, e.remove = function remove(t) { return o(t) ? this.removeLabel(t) : p(t) ? this.killTweensOf(t) : (ra(this, t), t === this._recent && (this._recent = this._last), ta(this)) }, e.totalTime = function totalTime(t, e) { return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ca(Pt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), n.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime }, e.addLabel = function addLabel(t, e) { return this.labels[t] = La(this, e), this }, e.removeLabel = function removeLabel(t) { return delete this.labels[t], this }, e.addPause = function addPause(t, e, r) { var i = Vt.delayedCall(0, e || Q, r); return i.data = "isPause", this._hasPause = 1, Ca(this, i, La(this, t)) }, e.removePause = function removePause(t) { var e = this._first; for (t = La(this, t); e;) e._start === t && "isPause" === e.data && sa(e), e = e._next }, e.killTweensOf = function killTweensOf(t, e, r) { for (var i = this.getTweensOf(t, r), n = i.length; n--;) qt !== i[n] && i[n].kill(t, e); return this }, e.getTweensOf = function getTweensOf(t, e) { for (var r, i = [], n = Tt(t), a = this._first, s = q(e); a;) a instanceof Vt ? da(a._targets, n) && (s ? (!qt || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r), a = a._next; return i }, e.tweenTo = function tweenTo(t, e) {
            e = e || {};
            var r = this,
                i = La(r, t),
                n = e.startAt,
                a = e.onStart,
                s = e.onStartParams,
                o = e.immediateRender,
                u = Vt.to(r, ja({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((i - (n && "time" in n ? n.time : r._time)) / r.timeScale()) || j,
                    onStart: function onStart() {
                        r.pause();
                        var t = e.duration || Math.abs((i - r._time) / r.timeScale());
                        u._dur !== t && Ia(u, t, 0, 1).render(u._time, !0, !0), a && a.apply(u, s || [])
                    }
                }, e));
            return o ? u.render(0) : u
        }, e.tweenFromTo = function tweenFromTo(t, e, r) { return this.tweenTo(e, ja({ startAt: { time: La(this, t) } }, r)) }, e.recent = function recent() { return this._recent }, e.nextLabel = function nextLabel(t) { return void 0 === t && (t = this._time), gb(this, La(this, t)) }, e.previousLabel = function previousLabel(t) { return void 0 === t && (t = this._time), gb(this, La(this, t), 1) }, e.currentLabel = function currentLabel(t) { return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + j) }, e.shiftChildren = function shiftChildren(t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, a = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
            if (e)
                for (i in a) a[i] >= r && (a[i] += t);
            return ta(this)
        }, e.invalidate = function invalidate() { var t = this._first; for (this._lock = 0; t;) t.invalidate(), t = t._next; return n.prototype.invalidate.call(this) }, e.clear = function clear(t) { void 0 === t && (t = !0); for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e; return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), ta(this) }, e.totalDuration = function totalDuration(t) {
            var e, r, i, n = 0,
                a = this,
                s = a._last,
                o = U;
            if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
            if (a._dirty) {
                for (i = a.parent; s;) e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Ca(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
                Ia(a, a === F && a._time > n ? a._time : n, 1, 1), a._dirty = 0
            }
            return a._tDur
        }, Timeline.updateRoot = function updateRoot(t) {
            if (F._ts && (ga(F, ya(t, F)), f = Pt.frame), Pt.frame >= ct) {
                ct += Y.autoSleep || 120;
                var e = F._first;
                if ((!e || !e._ts) && Y.autoSleep && Pt._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Pt.sleep()
                }
            }
        }, Timeline
    }(Ft);
    ja(Bt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });

    function Qb(t, e, r, i, n, a) {
        var u, h, l, f;
        if (ft[t] && !1 !== (u = new ft[t]).init(n, u.rawVars ? e[t] : function _processVars(t, e, r, i, n) { if (p(t) && (t = Ut(t, n, e, r, i)), !s(t) || t.style && t.nodeType || K(t) || Z(t)) return o(t) ? Ut(t, n, e, r, i) : t; var a, u = {}; for (a in t) u[a] = Ut(t[a], n, e, r, i); return u }(e[t], i, n, a, r), r, i, a) && (r._pt = h = new ie(r._pt, n, t, 0, 1, u.render, u, 0, u.priority), r !== d))
            for (l = r._ptLookup[r._targets.indexOf(n)], f = u._props.length; f--;) l[u._props[f]] = h;
        return u
    }
    var qt, Yt = function _addPropTween(t, e, r, i, n, a, s, u, h) {
            p(i) && (i = i(n || 0, t, a));
            var l, f = t[e],
                d = "get" !== r ? r : p(f) ? h ? t[e.indexOf("set") || !p(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : f,
                c = p(f) ? h ? Jt : Qt : Gt;
            if (o(i) && (~i.indexOf("random(") && (i = db(i)), "=" === i.charAt(1) && (i = parseFloat(d) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Oa(d) || 0))), d !== i) return isNaN(d * i) ? (f || e in t || N(e, i), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
                var o, u, h, l, f, d, c, p, _ = new ie(this._pt, t, e, 0, 1, Zt, null, n),
                    m = 0,
                    g = 0;
                for (_.b = r, _.e = i, r += "", (c = ~(i += "").indexOf("random(")) && (i = db(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(it) || []; o = it.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (d = parseFloat(u[g - 1]) || 0, _._pt = { _next: _._pt, p: f || 1 === g ? f : ",", s: d, c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - d, m: h && h < 4 ? Math.round : 0 }, m = it.lastIndex);
                return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (nt.test(i) || c) && (_.e = 0), this._pt = _
            }.call(this, t, e, d, i, c, u || Y.stringFilter, h)) : (l = new ie(this._pt, t, e, +d || 0, i - (d || 0), "boolean" == typeof f ? $t : Ht, 0, c), h && (l.fp = h), s && l.modifier(s, this, t), this._pt = l)
        },
        Nt = function _initTween(e, r) {
            var i, n, a, s, o, u, h, l, f, d, c, p, m, g = e.vars,
                v = g.ease,
                y = g.startAt,
                b = g.immediateRender,
                T = g.lazy,
                w = g.onUpdate,
                x = g.onUpdateParams,
                O = g.callbackScope,
                M = g.runBackwards,
                k = g.yoyoEase,
                C = g.keyframes,
                P = g.autoRevert,
                A = e._dur,
                D = e._startAt,
                S = e._targets,
                z = e.parent,
                I = z && "nested" === z.data ? z.parent._targets : S,
                E = "auto" === e._overwrite && !R,
                L = e.timeline;
            if (!L || C && v || (v = "none"), e._ease = Et(v, B.ease), e._yEase = k ? It(Et(!0 === k ? v : k, B.ease)) : 0, k && e._yoyo && !e._repeat && (k = e._yEase, e._yEase = e._ease, e._ease = k), !L) {
                if (p = (l = S[0] ? _(S[0]).harness : 0) && g[l.prop], i = na(g, ut), D && D.render(-1, !0).kill(), y)
                    if (sa(e._startAt = Vt.set(S, ja({ data: "isStart", overwrite: !1, parent: z, immediateRender: !0, lazy: t(T), startAt: null, delay: 0, onUpdate: w, onUpdateParams: x, callbackScope: O, stagger: 0 }, y))), b) {
                        if (0 < r) P || (e._startAt = 0);
                        else if (A && !(r < 0 && D)) return void(r && (e._zTime = r))
                    } else !1 === P && (e._startAt = 0);
                else if (M && A)
                    if (D) P || (e._startAt = 0);
                    else if (r && (b = !1), a = ja({ overwrite: !1, data: "isFromStart", lazy: b && t(T), immediateRender: b, stagger: 0, parent: z }, i), p && (a[l.prop] = p), sa(e._startAt = Vt.set(S, a)), b) { if (!r) return } else _initTween(e._startAt, j);
                for (e._pt = 0, T = A && t(T) || T && !A, n = 0; n < S.length; n++) {
                    if (h = (o = S[n])._gsap || $(S)[n]._gsap, e._ptLookup[n] = d = {}, lt[h.id] && ht.length && fa(), c = I === S ? n : I.indexOf(o), l && !1 !== (f = new l).init(o, p || i, e, c, I) && (e._pt = s = new ie(e._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(t) { d[t] = s }), f.priority && (u = 1)), !l || p)
                        for (a in i) ft[a] && (f = Qb(a, i, e, c, o, I)) ? f.priority && (u = 1) : d[a] = s = Yt.call(e, o, a, "get", i[a], c, I, 0, g.stringFilter);
                    e._op && e._op[n] && e.kill(o, e._op[n]), E && e._pt && (qt = e, F.killTweensOf(o, d, e.globalTime(0)), m = !e.parent, qt = 0), e._pt && T && (lt[h.id] = 1)
                }
                u && re(e), e._onInit && e._onInit(e)
            }
            e._from = !L && !!g.runBackwards, e._onUpdate = w, e._initted = (!e._op || e._pt) && !m
        },
        Ut = function _parseFuncOrString(t, e, r, i, n) { return p(t) ? t.call(e, r, i, n) : o(t) && ~t.indexOf("random(") ? db(t) : t },
        jt = _t + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Xt = (jt + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
        Vt = function(A) {
            function Tween(e, r, i, n) {
                var a;
                "number" == typeof r && (i.duration = r, r = i, i = null);
                var o, u, h, l, f, d, c, p, _ = (a = A.call(this, n ? r : oa(r), i) || this).vars,
                    m = _.duration,
                    g = _.delay,
                    y = _.immediateRender,
                    b = _.stagger,
                    T = _.overwrite,
                    w = _.keyframes,
                    x = _.defaults,
                    M = _.scrollTrigger,
                    k = _.yoyoEase,
                    C = a.parent,
                    P = (K(e) || Z(e) ? q(e[0]) : "length" in r) ? [e] : Tt(e);
                if (a._targets = P.length ? $(P) : O("GSAP target " + e + " not found. https://greensock.com", !Y.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = T, w || b || v(m) || v(g)) {
                    if (r = a.vars, (o = a.timeline = new Bt({ data: "nested", defaults: x || {} })).kill(), o.parent = o._dp = _assertThisInitialized(a), o._start = 0, w) ja(o.vars.defaults, { ease: "none" }), w.forEach(function(t) { return o.to(P, t, ">") });
                    else {
                        if (l = P.length, c = b ? Va(b) : Q, s(b))
                            for (f in b) ~jt.indexOf(f) && ((p = p || {})[f] = b[f]);
                        for (u = 0; u < l; u++) {
                            for (f in h = {}, r) Xt.indexOf(f) < 0 && (h[f] = r[f]);
                            h.stagger = 0, k && (h.yoyoEase = k), p && mt(h, p), d = P[u], h.duration = +Ut(m, _assertThisInitialized(a), u, d, P), h.delay = (+Ut(g, _assertThisInitialized(a), u, d, P) || 0) - a._delay, !b && 1 === l && h.delay && (a._delay = g = h.delay, a._start += g, h.delay = 0), o.to(d, h, c(u, d, P))
                        }
                        o.duration() ? m = g = 0 : a.timeline = 0
                    }
                    m || a.duration(m = o.duration())
                } else a.timeline = 0;
                return !0 !== T || R || (qt = _assertThisInitialized(a), F.killTweensOf(P), qt = 0), C && Ba(C, _assertThisInitialized(a)), (y || !m && !w && a._start === ca(C._time) && t(y) && function _hasNoPausedAncestors(t) { return !t || t._ts && _hasNoPausedAncestors(t.parent) }(_assertThisInitialized(a)) && "nested" !== C.data) && (a._tTime = -j, a.render(Math.max(0, -g))), M && Da(_assertThisInitialized(a), M), a
            }
            _inheritsLoose(Tween, A);
            var e = Tween.prototype;
            return e.render = function render(t, e, r) {
                var i, n, a, s, o, u, h, l, f, d = this._time,
                    c = this._tDur,
                    p = this._dur,
                    _ = c - j < t && 0 <= t ? c : t < j ? 0 : t;
                if (p) {
                    if (_ !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                        if (i = _, l = this.timeline, this._repeat) {
                            if (s = p + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * s + t, e, r);
                            if (i = ca(_ % s), _ === c ? (a = this._repeat, i = p) : ((a = ~~(_ / s)) && a === _ / s && (i = p, a--), p < i && (i = p)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = gt(this._tTime, s), i === d && !r && this._initted) return this;
                            a !== o && (l && this._yEase && Eb(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(ca(s * a), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) { if (Ea(this, t < 0 ? t : i, r, e)) return this._tTime = 0, this; if (p !== this._dur) return this.render(t, e, r) }
                        for (this._tTime = _, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), !i || d || e || xt(this, "onStart"), n = this._pt; n;) n.r(h, n.d), n = n._next;
                        l && l.render(t < 0 ? t : !i && u ? -j : l._dur * h, e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), xt(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && xt(this, "onRepeat"), _ !== this._tDur && _ || this._tTime !== _ || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), !t && p || !(_ === this._tDur && 0 < this._ts || !_ && this._ts < 0) || sa(this, 1), e || t < 0 && !d || !_ && !d || (xt(this, _ === c ? "onComplete" : "onReverseComplete", !0), !this._prom || _ < c && 0 < this.timeScale() || this._prom()))
                    }
                } else ! function _renderZeroDurationTween(t, e, r, i) {
                    var n, a, s, o = t.ratio,
                        u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) { var e = t.parent; return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e)) }(t) || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data) ? 0 : 1,
                        h = t._rDelay,
                        l = 0;
                    if (h && t._repeat && (l = yt(0, t._tDur, e), a = gt(l, h), s = gt(t._tTime, h), t._yoyo && 1 & a && (u = 1 - u), a !== s && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || i || t._zTime === j || !e && t._zTime) {
                        if (!t._initted && Ea(t, e, i, r)) return;
                        for (s = t._zTime, t._zTime = e || (r ? j : 0), r = r || e && !s, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(u, n.d), n = n._next;
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && xt(t, "onUpdate"), l && t._repeat && !r && t.parent && xt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && sa(t, 1), r || (xt(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                    } else t._zTime || (t._zTime = e)
                }(this, t, e, r);
                return this
            }, e.targets = function targets() { return this._targets }, e.invalidate = function invalidate() { return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), A.prototype.invalidate.call(this) }, e.kill = function kill(t, e) {
                if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? ib(this) : this;
                if (this.timeline) { var r = this.timeline.totalDuration(); return this.timeline.killTweensOf(t, e, qt && !0 !== qt.vars.overwrite)._first || ib(this), this.parent && r !== this.timeline.totalDuration() && Ia(this, this._dur * this.timeline._tDur / r, 0, 1), this }
                var i, n, a, s, u, h, l, f = this._targets,
                    d = t ? Tt(t) : f,
                    c = this._ptLookup,
                    p = this._pt;
                if ((!e || "all" === e) && function _arraysMatch(t, e) { for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];); return r < 0 }(f, d)) return "all" === e && (this._pt = 0), ib(this);
                for (i = this._op = this._op || [], "all" !== e && (o(e) && (u = {}, ba(e, function(t) { return u[t] = 1 }), e = u), e = function _addAliasesToVars(t, e) {
                        var r, i, n, a, s = t[0] ? _(t[0]).harness : 0,
                            o = s && s.aliases;
                        if (!o) return e;
                        for (i in r = mt({}, e), o)
                            if (i in r)
                                for (n = (a = o[i].split(",")).length; n--;) r[a[n]] = r[i];
                        return r
                    }(f, e)), l = f.length; l--;)
                    if (~d.indexOf(f[l]))
                        for (u in n = c[l], "all" === e ? (i[l] = e, s = n, a = {}) : (a = i[l] = i[l] || {}, s = e), s)(h = n && n[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || ra(this, h, "_pt"), delete n[u]), "all" !== a && (a[u] = 1);
                return this._initted && !this._pt && p && ib(this), this
            }, Tween.to = function to(t, e, r) { return new Tween(t, e, r) }, Tween.from = function from(t, e) { return new Tween(t, ea(arguments, 1)) }, Tween.delayedCall = function delayedCall(t, e, r, i) { return new Tween(e, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: e, onReverseComplete: e, onCompleteParams: r, onReverseCompleteParams: r, callbackScope: i }) }, Tween.fromTo = function fromTo(t, e, r) { return new Tween(t, ea(arguments, 2)) }, Tween.set = function set(t, e) { return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e) }, Tween.killTweensOf = function killTweensOf(t, e, r) { return F.killTweensOf(t, e, r) }, Tween
        }(Ft);
    ja(Vt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }), ba("staggerTo,staggerFrom,staggerFromTo", function(r) {
        Vt[r] = function() {
            var t = new Bt,
                e = bt.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e)
        }
    });

    function _b(t, e, r) { return t.setAttribute(e, r) }

    function hc(t, e, r, i) { i.mSet(t, e, i.m.call(i.tween, r, i.mt), i) }
    var Gt = function _setterPlain(t, e, r) { return t[e] = r },
        Qt = function _setterFunc(t, e, r) { return t[e](r) },
        Jt = function _setterFuncWithParam(t, e, r, i) { return t[e](i.fp, r) },
        Wt = function _getSetter(t, e) { return p(t[e]) ? Qt : r(t[e]) && t.setAttribute ? _b : Gt },
        Ht = function _renderPlain(t, e) { return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e) },
        $t = function _renderBoolean(t, e) { return e.set(e.t, e.p, !!(e.s + e.c * t), e) },
        Zt = function _renderComplexString(t, e) {
            var r = e._pt,
                i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
                for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
                i += e.c
            }
            e.set(e.t, e.p, i, e)
        },
        Kt = function _renderPropTweens(t, e) { for (var r = e._pt; r;) r.r(t, r.d), r = r._next },
        te = function _addPluginModifier(t, e, r, i) { for (var n, a = this._pt; a;) n = a._next, a.p === i && a.modifier(t, e, r), a = n },
        ee = function _killPropTweensOf(t) { for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? ra(this, i, "_pt") : i.dep || (e = 1), i = r; return !e },
        re = function _sortPropTweensByPriority(t) {
            for (var e, r, i, n, a = t._pt; a;) {
                for (e = a._next, r = i; r && r.pr > a.pr;) r = r._next;
                (a._prev = r ? r._prev : n) ? a._prev._next = a: i = a, (a._next = r) ? r._prev = a : n = a, a = e
            }
            t._pt = i
        },
        ie = (PropTween.prototype.modifier = function modifier(t, e, r) { this.mSet = this.mSet || this.set, this.set = hc, this.m = t, this.mt = r, this.tween = e }, PropTween);

    function PropTween(t, e, r, i, n, a, s, o, u) { this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || Ht, this.d = s || this, this.set = o || Gt, this.pr = u || 0, (this._next = t) && (t._prev = this) }
    ba(_t + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) { return ut[t] = 1 }), ot.TweenMax = ot.TweenLite = Vt, ot.TimelineLite = ot.TimelineMax = Bt, F = new Bt({ sortChildren: !1, defaults: B, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 }), Y.stringFilter = tb;
    var ne = {
        registerPlugin: function registerPlugin() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach(function(t) {
                return function _createPlugin(t) {
                    var e = (t = !t.name && t.default || t).name,
                        r = p(t),
                        i = e && !r && t.init ? function() { this._props = [] } : t,
                        n = { init: Q, render: Kt, add: Yt, kill: ee, modifier: te, rawVars: 0 },
                        a = { targetTest: 0, get: 0, getSetter: Wt, aliases: {}, register: 0 };
                    if (At(), t !== i) {
                        if (ft[e]) return;
                        ja(i, ja(na(t, n), a)), mt(i.prototype, mt(n, na(t, a))), ft[i.prop = e] = i, t.targetTest && (pt.push(i), ut[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    P(e, i), t.register && t.register(ae, i, ie)
                }(t)
            })
        },
        timeline: function timeline(t) { return new Bt(t) },
        getTweensOf: function getTweensOf(t, e) { return F.getTweensOf(t, e) },
        getProperty: function getProperty(i, t, e, r) {
            o(i) && (i = Tt(i)[0]);
            var n = _(i || {}).get,
                a = e ? ia : ha;
            return "native" === e && (e = ""), i ? t ? a((ft[t] && ft[t].get || n)(i, t, e, r)) : function(t, e, r) { return a((ft[t] && ft[t].get || n)(i, t, e, r)) } : i
        },
        quickSetter: function quickSetter(r, e, i) {
            if (1 < (r = Tt(r)).length) {
                var n = r.map(function(t) { return ae.quickSetter(t, e, i) }),
                    a = n.length;
                return function(t) { for (var e = a; e--;) n[e](t) }
            }
            r = r[0] || {};
            var s = ft[e],
                o = _(r),
                u = o.harness && (o.harness.aliases || {})[e] || e,
                h = s ? function(t) {
                    var e = new s;
                    d._pt = 0, e.init(r, i ? t + i : t, d, 0, [r]), e.render(1, e), d._pt && Kt(1, d)
                } : o.set(r, u);
            return s ? h : function(t) { return h(r, u, i ? t + i : t, o, 1) }
        },
        isTweening: function isTweening(t) { return 0 < F.getTweensOf(t, !0).length },
        defaults: function defaults(t) { return t && t.ease && (t.ease = Et(t.ease, B.ease)), ma(B, t || {}) },
        config: function config(t) { return ma(Y, t || {}) },
        registerEffect: function registerEffect(t) {
            var i = t.name,
                n = t.effect,
                e = t.plugins,
                a = t.defaults,
                r = t.extendTimeline;
            (e || "").split(",").forEach(function(t) { return t && !ft[t] && !ot[t] && O(i + " effect requires " + t + " plugin.") }), dt[i] = function(t, e, r) { return n(Tt(t), ja(e || {}, a), r) }, r && (Bt.prototype[i] = function(t, e, r) { return this.add(dt[i](t, s(e) ? e : (r = e) && {}, this), r) })
        },
        registerEase: function registerEase(t, e) { Dt[t] = Et(e) },
        parseEase: function parseEase(t, e) { return arguments.length ? Et(t, e) : Dt },
        getById: function getById(t) { return F.getById(t) },
        exportRoot: function exportRoot(e, r) { void 0 === e && (e = {}); var i, n, a = new Bt(e); for (a.smoothChildTiming = t(e.smoothChildTiming), F.remove(a), a._dp = 0, a._time = a._tTime = F._time, i = F._first; i;) n = i._next, !r && !i._dur && i instanceof Vt && i.vars.onComplete === i._targets[0] || Ca(a, i, i._start - i._delay), i = n; return Ca(F, a, 0), a },
        utils: {
            wrap: function wrap(e, t, r) { var i = t - e; return K(e) ? ab(e, wrap(0, e.length), t) : Ma(r, function(t) { return (i + (t - e) % i) % i + e }) },
            wrapYoyo: function wrapYoyo(e, t, r) {
                var i = t - e,
                    n = 2 * i;
                return K(e) ? ab(e, wrapYoyo(0, e.length - 1), t) : Ma(r, function(t) { return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t) })
            },
            distribute: Va,
            random: Ya,
            snap: Xa,
            normalize: function normalize(t, e, r) { return wt(t, e, 0, 1, r) },
            getUnit: Oa,
            clamp: function clamp(e, r, t) { return Ma(t, function(t) { return yt(e, r, t) }) },
            splitColor: ob,
            toArray: Tt,
            mapRange: wt,
            pipe: function pipe() { for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r]; return function(t) { return e.reduce(function(t, e) { return e(t) }, t) } },
            unitize: function unitize(e, r) { return function(t) { return e(parseFloat(t)) + (r || Oa(t)) } },
            interpolate: function interpolate(e, r, t, i) {
                var n = isNaN(e + r) ? 0 : function(t) { return (1 - t) * e + t * r };
                if (!n) {
                    var a, s, u, h, l, f = o(e),
                        d = {};
                    if (!0 === t && (i = 1) && (t = null), f) e = { p: e }, r = { p: r };
                    else if (K(e) && !K(r)) {
                        for (u = [], h = e.length, l = h - 2, s = 1; s < h; s++) u.push(interpolate(e[s - 1], e[s]));
                        h--, n = function func(t) { t *= h; var e = Math.min(l, ~~t); return u[e](t - e) }, t = r
                    } else i || (e = mt(K(e) ? [] : {}, e));
                    if (!u) {
                        for (a in r) Yt.call(d, e, a, "get", r[a]);
                        n = function func(t) { return Kt(t, d) || (f ? e.p : e) }
                    }
                }
                return Ma(t, n)
            },
            shuffle: Ua
        },
        install: M,
        effects: dt,
        ticker: Pt,
        updateRoot: Bt.updateRoot,
        plugins: ft,
        globalTimeline: F,
        core: { PropTween: ie, globals: P, Tween: Vt, Timeline: Bt, Animation: Ft, getCache: _, _removeLinkedListItem: ra, suppressOverwrites: function suppressOverwrites(t) { return R = t } }
    };
    ba("to,from,fromTo,delayedCall,set,killTweensOf", function(t) { return ne[t] = Vt[t] }), Pt.add(Bt.updateRoot), d = ne.to({}, { duration: 0 });

    function lc(t, e) { for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next; return r }

    function nc(t, n) {
        return {
            name: t,
            rawVars: 1,
            init: function init(t, i, e) {
                e._onInit = function(t) {
                    var e, r;
                    if (o(i) && (e = {}, ba(i, function(t) { return e[t] = 1 }), i = e), n) {
                        for (r in e = {}, i) e[r] = n(i[r]);
                        i = e
                    }! function _addModifiers(t, e) {
                        var r, i, n, a = t._targets;
                        for (r in e)
                            for (i = a.length; i--;)(n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = lc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r))
                    }(t, i)
                }
            }
        }
    }
    var ae = ne.registerPlugin({ name: "attr", init: function init(t, e, r, i, n) { var a, s; for (a in e)(s = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a)) && (s.op = a), this._props.push(a) } }, { name: "endArray", init: function init(t, e) { for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r]) } }, nc("roundProps", Wa), nc("modifiers"), nc("snap", Xa)) || ne;
    Vt.version = Bt.version = ae.version = "3.6.1", l = 1, u() && At();

    function Yc(t, e) { return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e) }

    function Zc(t, e) { return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e) }

    function $c(t, e) { return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e) }

    function _c(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }

    function ad(t, e) { return e.set(e.t, e.p, t ? e.e : e.b, e) }

    function bd(t, e) { return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e) }

    function cd(t, e, r) { return t.style[e] = r }

    function dd(t, e, r) { return t.style.setProperty(e, r) }

    function ed(t, e, r) { return t._gsap[e] = r }

    function fd(t, e, r) { return t._gsap.scaleX = t._gsap.scaleY = r }

    function gd(t, e, r, i, n) {
        var a = t._gsap;
        a.scaleX = a.scaleY = r, a.renderTransform(n, a)
    }

    function hd(t, e, r, i, n) {
        var a = t._gsap;
        a[e] = r, a.renderTransform(n, a)
    }

    function ld(t, e) { var r = oe.createElementNS ? oe.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : oe.createElement(t); return r.style ? r : oe.createElement(t) }

    function md(t, e, r) { var i = getComputedStyle(t); return i[e] || i.getPropertyValue(e.replace(Le, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && md(t, Ue(e) || e, 1) || "" }

    function pd() {
        (function _windowExists() { return "undefined" != typeof window })() && window.document && (se = window, oe = se.document, ue = oe.documentElement, le = ld("div") || { style: {} }, ld("div"), qe = Ue(qe), Ye = qe + "Origin", le.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", de = !!Ue("perspective"), he = 1)
    }

    function qd(t) {
        var e, r = ld("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            n = this.nextSibling,
            a = this.style.cssText;
        if (ue.appendChild(r), r.appendChild(this), this.style.display = "block", t) try { e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = qd } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
        return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), ue.removeChild(r), this.style.cssText = a, e
    }

    function rd(t, e) {
        for (var r = e.length; r--;)
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
    }

    function sd(e) { var r; try { r = e.getBBox() } catch (t) { r = qd.call(e, !0) } return r && (r.width || r.height) || e.getBBox === qd || (r = qd.call(e, !0)), !r || r.width || r.x || r.y ? r : { x: +rd(e, ["x", "cx", "x1"]) || 0, y: +rd(e, ["y", "cy", "y1"]) || 0, width: 0, height: 0 } }

    function td(t) { return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !sd(t)) }

    function ud(t, e) {
        if (e) {
            var r = t.style;
            e in Se && e !== Ye && (e = qe), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(Le, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    }

    function vd(t, e, r, i, n, a) { var s = new ie(t._pt, e, r, 0, 1, a ? bd : ad); return (t._pt = s).b = i, s.e = n, t._props.push(r), s }

    function xd(t, e, r, i) {
        var n, a, s, o, u = parseFloat(r) || 0,
            h = (r + "").trim().substr((u + "").length) || "px",
            l = le.style,
            f = Re.test(e),
            d = "svg" === t.tagName.toLowerCase(),
            c = (d ? "client" : "offset") + (f ? "Width" : "Height"),
            p = "px" === i,
            m = "%" === i;
        return i === h || !u || je[i] || je[h] ? u : ("px" === h || p || (u = xd(t, e, r, "px")), o = t.getCTM && td(t), !m && "%" !== h || !Se[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (p ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== oe && a.appendChild || (a = oe.body), (s = a._gsap) && m && s.width && f && s.time === Pt.time ? ca(u / s.width * 100) : (!m && "%" !== h || (l.position = md(t, "position")), a === t && (l.position = "static"), a.appendChild(le), n = le[c], a.removeChild(le), l.position = "absolute", f && m && ((s = _(a)).time = Pt.time, s.width = a[c]), ca(p ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[c], ca(m ? u / n * 100 : u / 100 * n)))
    }

    function yd(t, e, r, i) { var n; return he || pd(), e in Be && "transform" !== e && ~(e = Be[e]).indexOf(",") && (e = e.split(",")[0]), Se[e] && "transform" !== e ? (n = Je(t, i), n = "transformOrigin" !== e ? n[e] : We(md(t, Ye)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Ve[e] && Ve[e](t, e, r) || md(t, e) || aa(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? xd(t, e, n, r) + r : n }

    function zd(t, e, r, i) {
        if (!r || "none" === r) {
            var n = Ue(e, t, 1),
                a = n && md(t, n, 1);
            a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = md(t, "borderTopColor"))
        }
        var s, o, u, h, l, f, d, c, p, _, m, g, v = new ie(this._pt, t.style, e, 0, 1, Zt),
            y = 0,
            b = 0;
        if (v.b = r, v.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = md(t, e) || i, t.style[e] = r), tb(s = [r, i]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) {
            for (; o = rt.exec(i);) d = o[0], p = i.substring(y, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), d !== (f = u[b++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), c = parseFloat(d), _ = d.substr((c + "").length), y = rt.lastIndex - _.length, _ || (_ = _ || Y.units[e] || m, y === i.length && (i += _, v.e += _)), m !== _ && (h = xd(t, e, f, _) || 0), v._pt = { _next: v._pt, p: p || 1 === b ? p : ",", s: h, c: g ? g * c : c - h, m: l && l < 4 || "zIndex" === e ? Math.round : 0 });
            v.c = y < i.length ? i.substring(y, i.length) : ""
        } else v.r = "display" === e && "none" === i ? bd : ad;
        return nt.test(i) && (v.e = 0), this._pt = v
    }

    function Bd(t) {
        var e = t.split(" "),
            r = e[0],
            i = e[1] || "50%";
        return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = Xe[r] || r, e[1] = Xe[i] || i, e.join(" ")
    }

    function Cd(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, a = e.t,
                s = a.style,
                o = e.u,
                u = a._gsap;
            if ("all" === o || !0 === o) s.cssText = "", i = 1;
            else
                for (n = (o = o.split(",")).length; - 1 < --n;) r = o[n], Se[r] && (i = 1, r = "transformOrigin" === r ? Ye : qe), ud(a, r);
            i && (ud(a, qe), u && (u.svg && a.removeAttribute("transform"), Je(a, 1), u.uncache = 1))
        }
    }

    function Gd(t) { return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t }

    function Hd(t) { var e = md(t, qe); return Gd(e) ? Ge : e.substr(7).match(et).map(ca) }

    function Id(t, e) {
        var r, i, n, a, s = t._gsap || _(t),
            o = t.style,
            u = Hd(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Ge : u : (u !== Ge || t.offsetParent || t === ue || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextSibling, ue.appendChild(t)), u = Hd(t), n ? o.display = n : ud(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : ue.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }

    function Jd(t, e, r, i, n, a) {
        var s, o, u, h = t._gsap,
            l = n || Id(t, !0),
            f = h.xOrigin || 0,
            d = h.yOrigin || 0,
            c = h.xOffset || 0,
            p = h.yOffset || 0,
            _ = l[0],
            m = l[1],
            g = l[2],
            v = l[3],
            y = l[4],
            b = l[5],
            T = e.split(" "),
            w = parseFloat(T[0]) || 0,
            x = parseFloat(T[1]) || 0;
        r ? l !== Ge && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * b - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * b - v * y) / o, x = u) : (w = (s = sd(t)).x + (~T[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(T[1] || T[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, b = x - d, h.xOffset = c + (y * _ + b * g) - y, h.yOffset = p + (y * m + b * v) - b) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[Ye] = "0px 0px", a && (vd(a, h, "xOrigin", f, w), vd(a, h, "yOrigin", d, x), vd(a, h, "xOffset", c, h.xOffset), vd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x)
    }

    function Md(t, e, r) { var i = Oa(e); return ca(parseFloat(e) + parseFloat(xd(t, "x", r + "px", i))) + i }

    function Td(t, e, r, i, n, a) {
        var s, u, h = 360,
            l = o(n),
            f = parseFloat(n) * (l && ~n.indexOf("rad") ? ze : 1),
            d = a ? f * a : f - i,
            c = i + d + "deg";
        return l && ("short" === (s = n.split("_")[1]) && (d %= h) !== d % 180 && (d += d < 0 ? h : -h), "cw" === s && d < 0 ? d = (d + 36e9) % h - ~~(d / h) * h : "ccw" === s && 0 < d && (d = (d - 36e9) % h - ~~(d / h) * h)), t._pt = u = new ie(t._pt, e, r, i, d, Zc), u.e = c, u.u = "deg", t._props.push(r), u
    }

    function Ud(t, e) { for (var r in e) t[r] = e[r]; return t }

    function Vd(t, e, r) {
        var i, n, a, s, o, u, h, l = Ud({}, r._gsap),
            f = r.style;
        for (n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[qe] = e, i = Je(r, 1), ud(r, qe), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[qe], f[qe] = e, i = Je(r, 1), f[qe] = a), Se)(a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Oa(a) !== (h = Oa(s)) ? xd(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new ie(t._pt, i, n, o, u - o, Yc), t._pt.u = h || 0, t._props.push(n));
        Ud(i, l)
    }
    var se, oe, ue, he, le, fe, de, ce = Dt.Power0,
        pe = Dt.Power1,
        _e = Dt.Power2,
        me = Dt.Power3,
        ge = Dt.Power4,
        ve = Dt.Linear,
        ye = Dt.Quad,
        be = Dt.Cubic,
        Te = Dt.Quart,
        we = Dt.Quint,
        xe = Dt.Strong,
        Oe = Dt.Elastic,
        Me = Dt.Back,
        ke = Dt.SteppedEase,
        Ce = Dt.Bounce,
        Pe = Dt.Sine,
        Ae = Dt.Expo,
        De = Dt.Circ,
        Se = {},
        ze = 180 / Math.PI,
        Ie = Math.PI / 180,
        Ee = Math.atan2,
        Le = /([A-Z])/g,
        Re = /(?:left|right|width|margin|padding|x)/i,
        Fe = /[\s,\(]\S/,
        Be = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
        qe = "transform",
        Ye = qe + "Origin",
        Ne = "O,Moz,ms,Ms,Webkit".split(","),
        Ue = function _checkPropPrefix(t, e, r) {
            var i = (e || le).style,
                n = 5;
            if (t in i && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Ne[n] + t in i););
            return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Ne[n] : "") + t
        },
        je = { deg: 1, rad: 1, turn: 1 },
        Xe = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
        Ve = { clearProps: function clearProps(t, e, r, i, n) { if ("isFromStart" !== n.data) { var a = t._pt = new ie(t._pt, e, r, 0, 0, Cd); return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1 } } },
        Ge = [1, 0, 0, 1, 0, 0],
        Qe = {},
        Je = function _parseTransform(t, e) {
            var r = t._gsap || new Rt(t);
            if ("x" in r && !e && !r.uncache) return r;
            var i, n, a, s, o, u, h, l, f, d, c, p, _, m, g, v, y, b, T, w, x, O, M, k, C, P, A, D, S, z, I, E, L = t.style,
                R = r.scaleX < 0,
                F = "deg",
                B = md(t, Ye) || "0";
            return i = n = a = u = h = l = f = d = c = 0, s = o = 1, r.svg = !(!t.getCTM || !td(t)), m = Id(t, r.svg), r.svg && (k = !r.uncache && !e && t.getAttribute("data-svg-origin"), Jd(t, k || B, !!k || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, _ = r.yOrigin || 0, m !== Ge && (b = m[0], T = m[1], w = m[2], x = m[3], i = O = m[4], n = M = m[5], 6 === m.length ? (s = Math.sqrt(b * b + T * T), o = Math.sqrt(x * x + w * w), u = b || T ? Ee(T, b) * ze : 0, (f = w || x ? Ee(w, x) * ze + u : 0) && (o *= Math.abs(Math.cos(f * Ie))), r.svg && (i -= p - (p * b + _ * w), n -= _ - (p * T + _ * x))) : (E = m[6], z = m[7], A = m[8], D = m[9], S = m[10], I = m[11], i = m[12], n = m[13], a = m[14], h = (g = Ee(E, S)) * ze, g && (k = O * (v = Math.cos(-g)) + A * (y = Math.sin(-g)), C = M * v + D * y, P = E * v + S * y, A = O * -y + A * v, D = M * -y + D * v, S = E * -y + S * v, I = z * -y + I * v, O = k, M = C, E = P), l = (g = Ee(-w, S)) * ze, g && (v = Math.cos(-g), I = x * (y = Math.sin(-g)) + I * v, b = k = b * v - A * y, T = C = T * v - D * y, w = P = w * v - S * y), u = (g = Ee(T, b)) * ze, g && (k = b * (v = Math.cos(g)) + T * (y = Math.sin(g)), C = O * v + M * y, T = T * v - b * y, M = M * v - O * y, b = k, O = C), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ca(Math.sqrt(b * b + T * T + w * w)), o = ca(Math.sqrt(M * M + E * E)), g = Ee(O, M), f = 2e-4 < Math.abs(g) ? g * ze : 0, c = I ? 1 / (I < 0 ? -I : I) : 0), r.svg && (k = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Gd(md(t, qe)), k && t.setAttribute("transform", k))), 90 < Math.abs(f) && Math.abs(f) < 270 && (R ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), r.x = i - ((r.xPercent = i && (r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ca(s), r.scaleY = ca(o), r.rotation = ca(u) + F, r.rotationX = ca(h) + F, r.rotationY = ca(l) + F, r.skewX = f + F, r.skewY = d + F, r.transformPerspective = c + "px", (r.zOrigin = parseFloat(B.split(" ")[2]) || 0) && (L[Ye] = We(B)), r.xOffset = r.yOffset = 0, r.force3D = Y.force3D, r.renderTransform = r.svg ? er : de ? tr : He, r.uncache = 0, r
        },
        We = function _firstTwoOnly(t) { return (t = t.split(" "))[0] + " " + t[1] },
        He = function _renderNon3DTransforms(t, e) { e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, tr(t, e) },
        $e = "0deg",
        Ze = "0px",
        Ke = ") ",
        tr = function _renderCSSTransforms(t, e) {
            var r = e || this,
                i = r.xPercent,
                n = r.yPercent,
                a = r.x,
                s = r.y,
                o = r.z,
                u = r.rotation,
                h = r.rotationY,
                l = r.rotationX,
                f = r.skewX,
                d = r.skewY,
                c = r.scaleX,
                p = r.scaleY,
                _ = r.transformPerspective,
                m = r.force3D,
                g = r.target,
                v = r.zOrigin,
                y = "",
                b = "auto" === m && t && 1 !== t || !0 === m;
            if (v && (l !== $e || h !== $e)) {
                var T, w = parseFloat(h) * Ie,
                    x = Math.sin(w),
                    O = Math.cos(w);
                w = parseFloat(l) * Ie, T = Math.cos(w), a = Md(g, a, x * T * -v), s = Md(g, s, -Math.sin(w) * -v), o = Md(g, o, O * T * -v + v)
            }
            _ !== Ze && (y += "perspective(" + _ + Ke), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !b && a === Ze && s === Ze && o === Ze || (y += o !== Ze || b ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Ke), u !== $e && (y += "rotate(" + u + Ke), h !== $e && (y += "rotateY(" + h + Ke), l !== $e && (y += "rotateX(" + l + Ke), f === $e && d === $e || (y += "skew(" + f + ", " + d + Ke), 1 === c && 1 === p || (y += "scale(" + c + ", " + p + Ke), g.style[qe] = y || "translate(0, 0)"
        },
        er = function _renderSVGTransforms(t, e) {
            var r, i, n, a, s, o = e || this,
                u = o.xPercent,
                h = o.yPercent,
                l = o.x,
                f = o.y,
                d = o.rotation,
                c = o.skewX,
                p = o.skewY,
                _ = o.scaleX,
                m = o.scaleY,
                g = o.target,
                v = o.xOrigin,
                y = o.yOrigin,
                b = o.xOffset,
                T = o.yOffset,
                w = o.forceCSS,
                x = parseFloat(l),
                O = parseFloat(f);
            d = parseFloat(d), c = parseFloat(c), (p = parseFloat(p)) && (c += p = parseFloat(p), d += p), d || c ? (d *= Ie, c *= Ie, r = Math.cos(d) * _, i = Math.sin(d) * _, n = Math.sin(d - c) * -m, a = Math.cos(d - c) * m, c && (p *= Ie, s = Math.tan(c - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ca(r), i = ca(i), n = ca(n), a = ca(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || O && !~(f + "").indexOf("px")) && (x = xd(g, "x", l, "px"), O = xd(g, "y", f, "px")), (v || y || b || T) && (x = ca(x + v - (v * r + y * n) + b), O = ca(O + y - (v * i + y * a) + T)), (u || h) && (s = g.getBBox(), x = ca(x + u / 100 * s.width), O = ca(O + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + O + ")", g.setAttribute("transform", s), w && (g.style[qe] = s)
        };
    ba("padding,margin,Width,Radius", function(e, r) {
        var t = "Right",
            i = "Bottom",
            n = "Left",
            o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) { return r < 2 ? e + t : "border" + t + e });
        Ve[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
            var a, s;
            if (arguments.length < 4) return a = o.map(function(t) { return yd(e, t, r) }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (i + "").split(" "), s = {}, o.forEach(function(t, e) { return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0] }), e.init(t, s, n)
        }
    });
    var rr, ir, nr, ar = {
        name: "css",
        register: pd,
        targetTest: function targetTest(t) { return t.style && t.nodeType },
        init: function init(t, e, r, i, n) {
            var a, s, o, u, h, l, f, d, c, p, _, m, g, v, y, b = this._props,
                T = t.style,
                w = r.vars.startAt;
            for (f in he || pd(), e)
                if ("autoRound" !== f && (s = e[f], !ft[f] || !Qb(f, e, r, i, t, n)))
                    if (h = typeof s, l = Ve[f], "function" === h && (h = typeof(s = s.call(r, i, t, n))), "string" === h && ~s.indexOf("random(") && (s = db(s)), l) l(this, t, f, s, r) && (y = 1);
                    else if ("--" === f.substr(0, 2)) a = (getComputedStyle(t).getPropertyValue(f) + "").trim(), s += "", kt.lastIndex = 0, kt.test(a) || (d = Oa(a), c = Oa(s)), c ? d !== c && (a = xd(t, f, a, c) + c) : d && (s += d), this.add(T, "setProperty", a, s, i, n, 0, 0, f);
            else if ("undefined" !== h) {
                if (w && f in w ? (a = "function" == typeof w[f] ? w[f].call(r, i, t, n) : w[f], f in Y.units && !Oa(a) && (a += Y.units[f]), "=" === (a + "").charAt(1) && (a = yd(t, f))) : a = yd(t, f), u = parseFloat(a), (p = "string" === h && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), o = parseFloat(s), f in Be && ("autoAlpha" === f && (1 === u && "hidden" === yd(t, "visibility") && o && (u = 0), vd(this, T, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && "transform" !== f && ~(f = Be[f]).indexOf(",") && (f = f.split(",")[0])), _ = f in Se)
                    if (m || ((g = t._gsap).renderTransform && !e.parseTransform || Je(t, e.parseTransform), v = !1 !== e.smoothOrigin && g.smooth, (m = this._pt = new ie(this._pt, T, qe, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === f) this._pt = new ie(this._pt, g, "scaleY", g.scaleY, p ? p * o : o - g.scaleY), b.push("scaleY", f), f += "X";
                    else { if ("transformOrigin" === f) { s = Bd(s), g.svg ? Jd(t, s, 0, v, 0, this) : ((c = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && vd(this, g, "zOrigin", g.zOrigin, c), vd(this, T, f, We(a), We(s))); continue } if ("svgOrigin" === f) { Jd(t, s, 1, v, 0, this); continue } if (f in Qe) { Td(this, g, f, u, s, p); continue } if ("smoothOrigin" === f) { vd(this, g, "smooth", g.smooth, s); continue } if ("force3D" === f) { g[f] = s; continue } if ("transform" === f) { Vd(this, s, t); continue } }
                else f in T || (f = Ue(f) || f);
                if (_ || (o || 0 === o) && (u || 0 === u) && !Fe.test(s) && f in T) o = o || 0, (d = (a + "").substr((u + "").length)) !== (c = Oa(s) || (f in Y.units ? Y.units[f] : d)) && (u = xd(t, f, a, c)), this._pt = new ie(this._pt, _ ? g : T, f, u, p ? p * o : o - u, _ || "px" !== c && "zIndex" !== f || !1 === e.autoRound ? Yc : _c), this._pt.u = c || 0, d !== c && (this._pt.b = a, this._pt.r = $c);
                else if (f in T) zd.call(this, t, f, a, s);
                else {
                    if (!(f in t)) { N(f, s); continue }
                    this.add(t, f, t[f], s, i, n)
                }
                b.push(f)
            }
            y && re(this)
        },
        get: yd,
        aliases: Be,
        getSetter: function getSetter(t, e, i) { var n = Be[e]; return n && n.indexOf(",") < 0 && (e = n), e in Se && e !== Ye && (t._gsap.x || yd(t, "x")) ? i && fe === i ? "scale" === e ? fd : ed : (fe = i || {}) && ("scale" === e ? gd : hd) : t.style && !r(t.style[e]) ? cd : ~e.indexOf("-") ? dd : Wt(t, e) },
        core: { _removeProperty: ud, _getMatrix: Id }
    };
    ae.utils.checkPrefix = Ue, nr = ba((rr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (ir = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) { Se[t] = 1 }), ba(ir, function(t) { Y.units[t] = "deg", Qe[t] = 1 }), Be[nr[13]] = rr + "," + ir, ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        Be[e[1]] = nr[e[0]]
    }), ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) { Y.units[t] = "px" }), ae.registerPlugin(ar);
    var sr = ae.registerPlugin(ar) || ae,
        or = sr.core.Tween;
    e.Back = Me, e.Bounce = Ce, e.CSSPlugin = ar, e.Circ = De, e.Cubic = be, e.Elastic = Oe, e.Expo = Ae, e.Linear = ve, e.Power0 = ce, e.Power1 = pe, e.Power2 = _e, e.Power3 = me, e.Power4 = ge, e.Quad = ye, e.Quart = Te, e.Quint = we, e.Sine = Pe, e.SteppedEase = ke, e.Strong = xe, e.TimelineLite = Bt, e.TimelineMax = Bt, e.TweenLite = Vt, e.TweenMax = or, e.default = sr, e.gsap = sr;
    if (typeof(window) === "undefined" || window !== e) { Object.defineProperty(e, "__esModule", { value: !0 }) } else { delete e.default }
});


/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
                var d = function(a) {
                        var b, c = [],
                            d = a.length;
                        for (b = 0; b !== d; c.push(a[b++]));
                        return c
                    },
                    e = function(a, b, c) {
                        var d, e, f = a.cycle;
                        for (d in f) e = f[d], a[d] = "function" == typeof e ? e(c, b[c], b) : e[c % e.length];
                        delete a.cycle
                    },
                    f = function(a) {
                        if ("function" == typeof a) return a;
                        var b = "object" == typeof a ? a : { each: a },
                            c = b.ease,
                            d = b.from || 0,
                            e = b.base || 0,
                            f = {},
                            g = isNaN(d),
                            h = b.axis,
                            i = { center: .5, end: 1 }[d] || 0;
                        return function(a, j, k) {
                            var l, m, n, o, p, q, r, s, t, u = (k || b).length,
                                v = f[u];
                            if (!v) {
                                if (t = "auto" === b.grid ? 0 : (b.grid || [1 / 0])[0], !t) {
                                    for (r = -(1 / 0); r < (r = k[t++].getBoundingClientRect().left) && u > t;);
                                    t--
                                }
                                for (v = f[u] = [], l = g ? Math.min(t, u) * i - .5 : d % t, m = g ? u * i / t - .5 : d / t | 0, r = 0, s = 1 / 0, q = 0; u > q; q++) n = q % t - l, o = m - (q / t | 0), v[q] = p = h ? Math.abs("y" === h ? o : n) : Math.sqrt(n * n + o * o), p > r && (r = p), s > p && (s = p);
                                v.max = r - s, v.min = s, v.v = u = b.amount || b.each * (t > u ? u - 1 : h ? "y" === h ? u / t : t : Math.max(t, u / t)) || 0, v.b = 0 > u ? e - u : e
                            }
                            return u = (v[a] - v.min) / v.max, v.b + (c ? c.getRatio(u) : u) * v.v
                        }
                    },
                    g = function(a, b, d) { c.call(this, a, b, d), this._cycle = 0, this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = g.prototype.render },
                    h = 1e-8,
                    i = c._internals,
                    j = i.isSelector,
                    k = i.isArray,
                    l = g.prototype = c.to({}, .1, {}),
                    m = [];
                g.version = "2.1.3", l.constructor = g, l.kill()._gc = !1, g.killTweensOf = g.killDelayedCallsTo = c.killTweensOf, g.getTweensOf = c.getTweensOf, g.lagSmoothing = c.lagSmoothing, g.ticker = c.ticker, g.render = c.render, g.distribute = f, l.invalidate = function() { return this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), c.prototype.invalidate.call(this) }, l.updateTo = function(a, b) {
                    var d, e = this,
                        f = e.ratio,
                        g = e.vars.immediateRender || a.immediateRender;
                    b && e._startTime < e._timeline._time && (e._startTime = e._timeline._time, e._uncache(!1), e._gc ? e._enabled(!0, !1) : e._timeline.insert(e, e._startTime - e._delay));
                    for (d in a) e.vars[d] = a[d];
                    if (e._initted || g)
                        if (b) e._initted = !1, g && e.render(0, !0, !0);
                        else if (e._gc && e._enabled(!0, !1), e._notifyPluginsOfEnabled && e._firstPT && c._onPluginEvent("_onDisable", e), e._time / e._duration > .998) {
                        var h = e._totalTime;
                        e.render(0, !0, !1), e._initted = !1, e.render(h, !0, !1)
                    } else if (e._initted = !1, e._init(), e._time > 0 || g)
                        for (var i, j = 1 / (1 - f), k = e._firstPT; k;) i = k.s + k.c, k.c *= j, k.s = i - k.c, k = k._next;
                    return e
                }, l.render = function(a, b, d) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var e, f, g, j, k, l, m, n, o, p = this,
                        q = p._dirty ? p.totalDuration() : p._totalDuration,
                        r = p._time,
                        s = p._totalTime,
                        t = p._cycle,
                        u = p._duration,
                        v = p._rawPrevTime;
                    if (a >= q - h && a >= 0 ? (p._totalTime = q, p._cycle = p._repeat, p._yoyo && 0 !== (1 & p._cycle) ? (p._time = 0, p.ratio = p._ease._calcEnd ? p._ease.getRatio(0) : 0) : (p._time = u, p.ratio = p._ease._calcEnd ? p._ease.getRatio(1) : 1), p._reversed || (e = !0, f = "onComplete", d = d || p._timeline.autoRemoveChildren), 0 === u && (p._initted || !p.vars.lazy || d) && (p._startTime === p._timeline._duration && (a = 0), (0 > v || 0 >= a && a >= -h || v === h && "isPause" !== p.data) && v !== a && (d = !0, v > h && (f = "onReverseComplete")), p._rawPrevTime = n = !b || a || v === a ? a : h)) : h > a ? (p._totalTime = p._time = p._cycle = 0, p.ratio = p._ease._calcEnd ? p._ease.getRatio(0) : 0, (0 !== s || 0 === u && v > 0) && (f = "onReverseComplete", e = p._reversed), a > -h ? a = 0 : 0 > a && (p._active = !1, 0 === u && (p._initted || !p.vars.lazy || d) && (v >= 0 && (d = !0), p._rawPrevTime = n = !b || a || v === a ? a : h)), p._initted || (d = !0)) : (p._totalTime = p._time = a, 0 !== p._repeat && (j = u + p._repeatDelay, p._cycle = p._totalTime / j >> 0, 0 !== p._cycle && p._cycle === p._totalTime / j && a >= s && p._cycle--, p._time = p._totalTime - p._cycle * j, p._yoyo && 0 !== (1 & p._cycle) && (p._time = u - p._time, o = p._yoyoEase || p.vars.yoyoEase, o && (p._yoyoEase || (o !== !0 || p._initted ? p._yoyoEase = o = o === !0 ? p._ease : o instanceof Ease ? o : Ease.map[o] : (o = p.vars.ease, p._yoyoEase = o = o ? o instanceof Ease ? o : "function" == typeof o ? new Ease(o, p.vars.easeParams) : Ease.map[o] || c.defaultEase : c.defaultEase)), p.ratio = o ? 1 - o.getRatio((u - p._time) / u) : 0)), p._time > u ? p._time = u : p._time < 0 && (p._time = 0)), p._easeType && !o ? (k = p._time / u, l = p._easeType, m = p._easePower, (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === m ? k *= k : 2 === m ? k *= k * k : 3 === m ? k *= k * k * k : 4 === m && (k *= k * k * k * k), p.ratio = 1 === l ? 1 - k : 2 === l ? k : p._time / u < .5 ? k / 2 : 1 - k / 2) : o || (p.ratio = p._ease.getRatio(p._time / u))), r === p._time && !d && t === p._cycle) return void(s !== p._totalTime && p._onUpdate && (b || p._callback("onUpdate")));
                    if (!p._initted) { if (p._init(), !p._initted || p._gc) return; if (!d && p._firstPT && (p.vars.lazy !== !1 && p._duration || p.vars.lazy && !p._duration)) return p._time = r, p._totalTime = s, p._rawPrevTime = v, p._cycle = t, i.lazyTweens.push(p), void(p._lazy = [a, b]);!p._time || e || o ? e && this._ease._calcEnd && !o && (p.ratio = p._ease.getRatio(0 === p._time ? 0 : 1)) : p.ratio = p._ease.getRatio(p._time / u) }
                    for (p._lazy !== !1 && (p._lazy = !1), p._active || !p._paused && p._time !== r && a >= 0 && (p._active = !0), 0 === s && (2 === p._initted && a > 0 && p._init(), p._startAt && (a >= 0 ? p._startAt.render(a, !0, d) : f || (f = "_dummyGS")), p.vars.onStart && (0 !== p._totalTime || 0 === u) && (b || p._callback("onStart"))), g = p._firstPT; g;) g.f ? g.t[g.p](g.c * p.ratio + g.s) : g.t[g.p] = g.c * p.ratio + g.s, g = g._next;
                    p._onUpdate && (0 > a && p._startAt && p._startTime && p._startAt.render(a, !0, d), b || (p._totalTime !== s || f) && p._callback("onUpdate")), p._cycle !== t && (b || p._gc || p.vars.onRepeat && p._callback("onRepeat")), f && (!p._gc || d) && (0 > a && p._startAt && !p._onUpdate && p._startTime && p._startAt.render(a, !0, d), e && (p._timeline.autoRemoveChildren && p._enabled(!1, !1), p._active = !1), !b && p.vars[f] && p._callback(f), 0 === u && p._rawPrevTime === h && n !== h && (p._rawPrevTime = 0))
                }, g.to = function(a, b, c) { return new g(a, b, c) }, g.from = function(a, b, c) { return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new g(a, b, c) }, g.fromTo = function(a, b, c, d) { return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new g(a, b, d) }, g.staggerTo = g.allTo = function(a, b, h, i, l, n, o) {
                    var p, q, r, s, t = [],
                        u = f(h.stagger || i),
                        v = h.cycle,
                        w = (h.startAt || m).cycle;
                    for (k(a) || ("string" == typeof a && (a = c.selector(a) || a), j(a) && (a = d(a))), a = a || [], p = a.length - 1, r = 0; p >= r; r++) {
                        q = {};
                        for (s in h) q[s] = h[s];
                        if (v && (e(q, a, r), null != q.duration && (b = q.duration, delete q.duration)), w) {
                            w = q.startAt = {};
                            for (s in h.startAt) w[s] = h.startAt[s];
                            e(q.startAt, a, r)
                        }
                        q.delay = u(r, a[r], a) + (q.delay || 0), r === p && l && (q.onComplete = function() { h.onComplete && h.onComplete.apply(h.onCompleteScope || this, arguments), l.apply(o || h.callbackScope || this, n || m) }), t[r] = new g(a[r], b, q)
                    }
                    return t
                }, g.staggerFrom = g.allFrom = function(a, b, c, d, e, f, h) { return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, g.staggerTo(a, b, c, d, e, f, h) }, g.staggerFromTo = g.allFromTo = function(a, b, c, d, e, f, h, i) { return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, g.staggerTo(a, b, d, e, f, h, i) }, g.delayedCall = function(a, b, c, d, e) { return new g(b, 0, { delay: a, onComplete: b, onCompleteParams: c, callbackScope: d, onReverseComplete: b, onReverseCompleteParams: c, immediateRender: !1, useFrames: e, overwrite: 0 }) }, g.set = function(a, b) { return new g(a, 0, b) }, g.isTweening = function(a) { return c.getTweensOf(a, !0).length > 0 };
                var n = function(a, b) { for (var d = [], e = 0, f = a._first; f;) f instanceof c ? d[e++] = f : (b && (d[e++] = f), d = d.concat(n(f, b)), e = d.length), f = f._next; return d },
                    o = g.getAllTweens = function(b) { return n(a._rootTimeline, b).concat(n(a._rootFramesTimeline, b)) };
                g.killAll = function(a, c, d, e) {
                    null == c && (c = !0), null == d && (d = !0);
                    var f, g, h, i = o(0 != e),
                        j = i.length,
                        k = c && d && e;
                    for (h = 0; j > h; h++) g = i[h], (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1))
                }, g.killChildTweensOf = function(a, b) {
                    if (null != a) {
                        var e, f, h, l, m, n = i.tweenLookup;
                        if ("string" == typeof a && (a = c.selector(a) || a), j(a) && (a = d(a)), k(a))
                            for (l = a.length; --l > -1;) g.killChildTweensOf(a[l], b);
                        else {
                            e = [];
                            for (h in n)
                                for (f = n[h].target.parentNode; f;) f === a && (e = e.concat(n[h].tweens)), f = f.parentNode;
                            for (m = e.length, l = 0; m > l; l++) b && e[l].totalTime(e[l].totalDuration()), e[l]._enabled(!1, !1)
                        }
                    }
                };
                var p = function(a, c, d, e) { c = c !== !1, d = d !== !1, e = e !== !1; for (var f, g, h = o(e), i = c && d && e, j = h.length; --j > -1;) g = h[j], (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a) };
                return g.pauseAll = function(a, b, c) { p(!0, a, b, c) }, g.resumeAll = function(a, b, c) { p(!1, a, b, c) }, g.globalTimeScale = function(b) {
                    var d = a._rootTimeline,
                        e = c.ticker.time;
                    return arguments.length ? (b = b || h, d._startTime = e - (e - d._startTime) * d._timeScale / b, d = a._rootFramesTimeline, e = c.ticker.frame, d._startTime = e - (e - d._startTime) * d._timeScale / b, d._timeScale = a._rootTimeline._timeScale = b, b) : d._timeScale
                }, l.progress = function(a, b) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this.duration() ? this._time / this._duration : this.ratio }, l.totalProgress = function(a, b) { return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration() }, l.time = function(a, b) {
                    if (!arguments.length) return this._time;
                    this._dirty && this.totalDuration();
                    var c = this._duration,
                        d = this._cycle,
                        e = d * (c + this._repeatDelay);
                    return a > c && (a = c), this.totalTime(this._yoyo && 1 & d ? c - a + e : this._repeat ? a + e : a, b)
                }, l.duration = function(b) { return arguments.length ? a.prototype.duration.call(this, b) : this._duration }, l.totalDuration = function(a) { return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration) }, l.repeat = function(a) { return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat }, l.repeatDelay = function(a) { return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay }, l.yoyo = function(a) { return arguments.length ? (this._yoyo = a, this) : this._yoyo }, g
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
                var d = function(a) {
                        b.call(this, a);
                        var c, d, e = this,
                            f = e.vars;
                        e._labels = {}, e.autoRemoveChildren = !!f.autoRemoveChildren, e.smoothChildTiming = !!f.smoothChildTiming, e._sortChildren = !0, e._onUpdate = f.onUpdate;
                        for (d in f) c = f[d], i(c) && -1 !== c.join("").indexOf("{self}") && (f[d] = e._swapSelfInParams(c));
                        i(f.tweens) && e.add(f.tweens, 0, f.align, f.stagger)
                    },
                    e = 1e-8,
                    f = c._internals,
                    g = d._internals = {},
                    h = f.isSelector,
                    i = f.isArray,
                    j = f.lazyTweens,
                    k = f.lazyRender,
                    l = _gsScope._gsDefine.globals,
                    m = function(a) { var b, c = {}; for (b in a) c[b] = a[b]; return c },
                    n = function(a, b, c) {
                        var d, e, f = a.cycle;
                        for (d in f) e = f[d], a[d] = "function" == typeof e ? e(c, b[c], b) : e[c % e.length];
                        delete a.cycle
                    },
                    o = g.pauseCallback = function() {},
                    p = function(a) {
                        var b, c = [],
                            d = a.length;
                        for (b = 0; b !== d; c.push(a[b++]));
                        return c
                    },
                    q = function(a, b, c, d) { var e = "immediateRender"; return e in b || (b[e] = !(c && c[e] === !1 || d)), b },
                    r = function(a) {
                        if ("function" == typeof a) return a;
                        var b = "object" == typeof a ? a : { each: a },
                            c = b.ease,
                            d = b.from || 0,
                            e = b.base || 0,
                            f = {},
                            g = isNaN(d),
                            h = b.axis,
                            i = { center: .5, end: 1 }[d] || 0;
                        return function(a, j, k) {
                            var l, m, n, o, p, q, r, s, t, u = (k || b).length,
                                v = f[u];
                            if (!v) {
                                if (t = "auto" === b.grid ? 0 : (b.grid || [1 / 0])[0], !t) {
                                    for (r = -(1 / 0); r < (r = k[t++].getBoundingClientRect().left) && u > t;);
                                    t--
                                }
                                for (v = f[u] = [], l = g ? Math.min(t, u) * i - .5 : d % t, m = g ? u * i / t - .5 : d / t | 0, r = 0, s = 1 / 0, q = 0; u > q; q++) n = q % t - l, o = m - (q / t | 0), v[q] = p = h ? Math.abs("y" === h ? o : n) : Math.sqrt(n * n + o * o), p > r && (r = p), s > p && (s = p);
                                v.max = r - s, v.min = s, v.v = u = b.amount || b.each * (t > u ? u - 1 : h ? "y" === h ? u / t : t : Math.max(t, u / t)) || 0, v.b = 0 > u ? e - u : e
                            }
                            return u = (v[a] - v.min) / v.max, v.b + (c ? c.getRatio(u) : u) * v.v
                        }
                    },
                    s = d.prototype = new b;
                return d.version = "2.1.3", d.distribute = r, s.constructor = d, s.kill()._gc = s._forcingPlayhead = s._hasPause = !1, s.to = function(a, b, d, e) { var f = d.repeat && l.TweenMax || c; return b ? this.add(new f(a, b, d), e) : this.set(a, d, e) }, s.from = function(a, b, d, e) { return this.add((d.repeat && l.TweenMax || c).from(a, b, q(this, d)), e) }, s.fromTo = function(a, b, d, e, f) { var g = e.repeat && l.TweenMax || c; return e = q(this, e, d), b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f) }, s.staggerTo = function(a, b, e, f, g, i, j, k) {
                    var l, o, q = new d({ onComplete: i, onCompleteParams: j, callbackScope: k, smoothChildTiming: this.smoothChildTiming }),
                        s = r(e.stagger || f),
                        t = e.startAt,
                        u = e.cycle;
                    for ("string" == typeof a && (a = c.selector(a) || a), a = a || [], h(a) && (a = p(a)), o = 0; o < a.length; o++) l = m(e), t && (l.startAt = m(t), t.cycle && n(l.startAt, a, o)), u && (n(l, a, o), null != l.duration && (b = l.duration, delete l.duration)), q.to(a[o], b, l, s(o, a[o], a));
                    return this.add(q, g)
                }, s.staggerFrom = function(a, b, c, d, e, f, g, h) { return c.runBackwards = !0, this.staggerTo(a, b, q(this, c), d, e, f, g, h) }, s.staggerFromTo = function(a, b, c, d, e, f, g, h, i) { return d.startAt = c, this.staggerTo(a, b, q(this, d, c), e, f, g, h, i) }, s.call = function(a, b, d, e) { return this.add(c.delayedCall(0, a, b, d), e) }, s.set = function(a, b, d) { return this.add(new c(a, 0, q(this, b, null, !0)), d) }, d.exportRoot = function(a, b) {
                    a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
                    var e, f, g, h, i = new d(a),
                        j = i._timeline;
                    for (null == b && (b = !0), j._remove(i, !0), i._startTime = 0, i._rawPrevTime = i._time = i._totalTime = j._time, g = j._first; g;) h = g._next, b && g instanceof c && g.target === g.vars.onComplete || (f = g._startTime - g._delay, 0 > f && (e = 1), i.add(g, f)), g = h;
                    return j.add(i, 0), e && i.totalDuration(), i
                }, s.add = function(e, f, g, h) {
                    var j, k, l, m, n, o, p = this;
                    if ("number" != typeof f && (f = p._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
                        if (e instanceof Array || e && e.push && i(e)) { for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++) i(m = e[l]) && (m = new d({ tweens: m })), p.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), j += h; return p._uncache(!0) }
                        if ("string" == typeof e) return p.addLabel(e, f);
                        if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                        e = c.delayedCall(0, e)
                    }
                    if (b.prototype.add.call(p, e, f), (e._time || !e._duration && e._initted) && (j = (p.rawTime() - e._startTime) * e._timeScale, (!e._duration || Math.abs(Math.max(0, Math.min(e.totalDuration(), j))) - e._totalTime > 1e-5) && e.render(j, !1, !1)), (p._gc || p._time === p._duration) && !p._paused && p._duration < p.duration())
                        for (n = p, o = n.rawTime() > e._startTime; n._timeline;) o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), n = n._timeline;
                    return p
                }, s.remove = function(b) { if (b instanceof a) { this._remove(b, !1); var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline; return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale, this } if (b instanceof Array || b && b.push && i(b)) { for (var d = b.length; --d > -1;) this.remove(b[d]); return this } return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b) }, s._remove = function(a, c) { b.prototype._remove.call(this, a, c); var d = this._last; return d ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this }, s.append = function(a, b) { return this.add(a, this._parseTimeOrLabel(null, b, !0, a)) }, s.insert = s.insertMultiple = function(a, b, c, d) { return this.add(a, b || 0, c, d) }, s.appendMultiple = function(a, b, c, d) { return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d) }, s.addLabel = function(a, b) { return this._labels[a] = this._parseTimeOrLabel(b), this }, s.addPause = function(a, b, d, e) { var f = c.delayedCall(0, o, d, e || this); return f.vars.onComplete = f.vars.onReverseComplete = b, f.data = "isPause", this._hasPause = !0, this.add(f, a) }, s.removeLabel = function(a) { return delete this._labels[a], this }, s.getLabelTime = function(a) { return null != this._labels[a] ? this._labels[a] : -1 }, s._parseTimeOrLabel = function(b, c, d, e) {
                    var f, g;
                    if (e instanceof a && e.timeline === this) this.remove(e);
                    else if (e && (e instanceof Array || e.push && i(e)))
                        for (g = e.length; --g > -1;) e[g] instanceof a && e[g].timeline === this && this.remove(e[g]);
                    if (f = "number" != typeof b || c ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - f : 0, d);
                    if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = f);
                    else {
                        if (g = b.indexOf("="), -1 === g) return null == this._labels[b] ? d ? this._labels[b] = f + c : c : this._labels[b] + c;
                        c = parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1)), b = g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f
                    }
                    return Number(b) + c
                }, s.seek = function(a, b) { return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1) }, s.stop = function() { return this.paused(!0) }, s.gotoAndPlay = function(a, b) { return this.play(a, b) }, s.gotoAndStop = function(a, b) { return this.pause(a, b) }, s.render = function(a, b, c) {
                    this._gc && this._enabled(!0, !1);
                    var d, f, g, h, i, l, m, n, o = this,
                        p = o._time,
                        q = o._dirty ? o.totalDuration() : o._totalDuration,
                        r = o._startTime,
                        s = o._timeScale,
                        t = o._paused;
                    if (p !== o._time && (a += o._time - p), o._hasPause && !o._forcingPlayhead && !b) {
                        if (a > p)
                            for (d = o._first; d && d._startTime <= a && !l;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === o._rawPrevTime || (l = d), d = d._next;
                        else
                            for (d = o._last; d && d._startTime >= a && !l;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d), d = d._prev;
                        l && (o._time = o._totalTime = a = l._startTime, n = o._startTime + (o._reversed ? o._duration - a : a) / o._timeScale)
                    }
                    if (a >= q - e && a >= 0) o._totalTime = o._time = q, o._reversed || o._hasPausedChild() || (f = !0, h = "onComplete", i = !!o._timeline.autoRemoveChildren, 0 === o._duration && (0 >= a && a >= -e || o._rawPrevTime < 0 || o._rawPrevTime === e) && o._rawPrevTime !== a && o._first && (i = !0, o._rawPrevTime > e && (h = "onReverseComplete"))), o._rawPrevTime = o._duration || !b || a || o._rawPrevTime === a ? a : e, a = q + 1e-4;
                    else if (e > a)
                        if (o._totalTime = o._time = 0, a > -e && (a = 0), (0 !== p || 0 === o._duration && o._rawPrevTime !== e && (o._rawPrevTime > 0 || 0 > a && o._rawPrevTime >= 0)) && (h = "onReverseComplete", f = o._reversed), 0 > a) o._active = !1, o._timeline.autoRemoveChildren && o._reversed ? (i = f = !0, h = "onReverseComplete") : o._rawPrevTime >= 0 && o._first && (i = !0), o._rawPrevTime = a;
                        else {
                            if (o._rawPrevTime = o._duration || !b || a || o._rawPrevTime === a ? a : e, 0 === a && f)
                                for (d = o._first; d && 0 === d._startTime;) d._duration || (f = !1), d = d._next;
                            a = 0, o._initted || (i = !0)
                        }
                    else o._totalTime = o._time = o._rawPrevTime = a;
                    if (o._time !== p && o._first || c || i || l) {
                        if (o._initted || (o._initted = !0), o._active || !o._paused && o._time !== p && a > 0 && (o._active = !0), 0 === p && o.vars.onStart && (0 === o._time && o._duration || b || o._callback("onStart")), m = o._time, m >= p)
                            for (d = o._first; d && (g = d._next, m === o._time && (!o._paused || t));)(d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && (o.pause(), o._pauseTime = n), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                        else
                            for (d = o._last; d && (g = d._prev, m === o._time && (!o._paused || t));) {
                                if (d._active || d._startTime <= p && !d._paused && !d._gc) {
                                    if (l === d) {
                                        for (l = d._prev; l && l.endTime() > o._time;) l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), l = l._prev;
                                        l = null, o.pause(), o._pauseTime = n
                                    }
                                    d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                                }
                                d = g
                            }
                        o._onUpdate && (b || (j.length && k(), o._callback("onUpdate"))), h && (o._gc || (r === o._startTime || s !== o._timeScale) && (0 === o._time || q >= o.totalDuration()) && (f && (j.length && k(), o._timeline.autoRemoveChildren && o._enabled(!1, !1), o._active = !1), !b && o.vars[h] && o._callback(h)))
                    }
                }, s._hasPausedChild = function() {
                    for (var a = this._first; a;) {
                        if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                        a = a._next
                    }
                    return !1
                }, s.getChildren = function(a, b, d, e) { e = e || -9999999999; for (var f = [], g = this._first, h = 0; g;) g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next; return f }, s.getTweensOf = function(a, b) {
                    var d, e, f = this._gc,
                        g = [],
                        h = 0;
                    for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1;)(d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
                    return f && this._enabled(!1, !0), g
                }, s.recent = function() { return this._recent }, s._contains = function(a) {
                    for (var b = a.timeline; b;) {
                        if (b === this) return !0;
                        b = b.timeline
                    }
                    return !1
                }, s.shiftChildren = function(a, b, c) {
                    c = c || 0;
                    for (var d, e = this._first, f = this._labels; e;) e._startTime >= c && (e._startTime += a), e = e._next;
                    if (b)
                        for (d in f) f[d] >= c && (f[d] += a);
                    return this._uncache(!0)
                }, s._kill = function(a, b) { if (!a && !b) return this._enabled(!1, !1); for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) c[d]._kill(a, b) && (e = !0); return e }, s.clear = function(a) {
                    var b = this.getChildren(!1, !0, !0),
                        c = b.length;
                    for (this._time = this._totalTime = 0; --c > -1;) b[c]._enabled(!1, !1);
                    return a !== !1 && (this._labels = {}), this._uncache(!0)
                }, s.invalidate = function() { for (var b = this._first; b;) b.invalidate(), b = b._next; return a.prototype.invalidate.call(this) }, s._enabled = function(a, c) {
                    if (a === this._gc)
                        for (var d = this._first; d;) d._enabled(a, !0), d = d._next;
                    return b.prototype._enabled.call(this, a, c)
                }, s.totalTime = function(b, c, d) { this._forcingPlayhead = !0; var e = a.prototype.totalTime.apply(this, arguments); return this._forcingPlayhead = !1, e }, s.duration = function(a) { return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration) }, s.totalDuration = function(a) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var b, c, d = 0, e = this, f = e._last, g = 999999999999; f;) b = f._prev, f._dirty && f.totalDuration(), f._startTime > g && e._sortChildren && !f._paused && !e._calculatingDuration ? (e._calculatingDuration = 1, e.add(f, f._startTime - f._delay), e._calculatingDuration = 0) : g = f._startTime, f._startTime < 0 && !f._paused && (d -= f._startTime, e._timeline.smoothChildTiming && (e._startTime += f._startTime / e._timeScale, e._time -= f._startTime, e._totalTime -= f._startTime, e._rawPrevTime -= f._startTime), e.shiftChildren(-f._startTime, !1, -9999999999), g = 0), c = f._startTime + f._totalDuration / f._timeScale, c > d && (d = c), f = b;
                            e._duration = e._totalDuration = d, e._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this
                }, s.paused = function(b) {
                    if (b === !1 && this._paused)
                        for (var c = this._first; c;) c._startTime === this._time && "isPause" === c.data && (c._rawPrevTime = 0), c = c._next;
                    return a.prototype.paused.apply(this, arguments)
                }, s.usesFrames = function() { for (var b = this._timeline; b._timeline;) b = b._timeline; return b === a._rootFramesTimeline }, s.rawTime = function(a) { return a && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(a) - this._startTime) * this._timeScale }, d
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(a, b, c) {
                var d = function(b) { a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = !0 },
                    e = 1e-8,
                    f = b._internals,
                    g = f.lazyTweens,
                    h = f.lazyRender,
                    i = _gsScope._gsDefine.globals,
                    j = new c(null, null, 1, 0),
                    k = d.prototype = new a;
                return k.constructor = d, k.kill()._gc = !1, d.version = "2.1.3", k.invalidate = function() { return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this) }, k.addCallback = function(a, c, d, e) { return this.add(b.delayedCall(0, a, d, e), c) }, k.removeCallback = function(a, b) {
                    if (a)
                        if (null == b) this._kill(null, a);
                        else
                            for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;) c[d]._startTime === e && c[d]._enabled(!1, !1);
                    return this
                }, k.removePause = function(b) { return this.removeCallback(a._internals.pauseCallback, b) }, k.tweenTo = function(a, c) {
                    c = c || {};
                    var d, e, f, g = { ease: j, useFrames: this.usesFrames(), immediateRender: !1, lazy: !1 },
                        h = c.repeat && i.TweenMax || b;
                    for (e in c) g[e] = c[e];
                    return g.time = this._parseTimeOrLabel(a), d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001, f = new h(this, d, g), g.onStart = function() { f.target.paused(!0), f.vars.time === f.target.time() || d !== f.duration() || f.isFromTo || f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale).render(f.time(), !0, !0), c.onStart && c.onStart.apply(c.onStartScope || c.callbackScope || f, c.onStartParams || []) }, f
                }, k.tweenFromTo = function(a, b, c) { c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = { onComplete: this.seek, onCompleteParams: [a], callbackScope: this }, c.immediateRender = c.immediateRender !== !1; var d = this.tweenTo(b, c); return d.isFromTo = 1, d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001) }, k.render = function(a, b, c) {
                    this._gc && this._enabled(!0, !1);
                    var d, f, i, j, k, l, m, n, o, p = this,
                        q = p._time,
                        r = p._dirty ? p.totalDuration() : p._totalDuration,
                        s = p._duration,
                        t = p._totalTime,
                        u = p._startTime,
                        v = p._timeScale,
                        w = p._rawPrevTime,
                        x = p._paused,
                        y = p._cycle;
                    if (q !== p._time && (a += p._time - q), a >= r - e && a >= 0) p._locked || (p._totalTime = r, p._cycle = p._repeat), p._reversed || p._hasPausedChild() || (f = !0, j = "onComplete", k = !!p._timeline.autoRemoveChildren, 0 === p._duration && (0 >= a && a >= -e || 0 > w || w === e) && w !== a && p._first && (k = !0, w > e && (j = "onReverseComplete"))), p._rawPrevTime = p._duration || !b || a || p._rawPrevTime === a ? a : e, p._yoyo && 1 & p._cycle ? p._time = a = 0 : (p._time = s, a = s + 1e-4);
                    else if (e > a)
                        if (p._locked || (p._totalTime = p._cycle = 0), p._time = 0, a > -e && (a = 0), (0 !== q || 0 === s && w !== e && (w > 0 || 0 > a && w >= 0) && !p._locked) && (j = "onReverseComplete", f = p._reversed), 0 > a) p._active = !1, p._timeline.autoRemoveChildren && p._reversed ? (k = f = !0, j = "onReverseComplete") : w >= 0 && p._first && (k = !0), p._rawPrevTime = a;
                        else {
                            if (p._rawPrevTime = s || !b || a || p._rawPrevTime === a ? a : e, 0 === a && f)
                                for (d = p._first; d && 0 === d._startTime;) d._duration || (f = !1), d = d._next;
                            a = 0, p._initted || (k = !0)
                        }
                    else 0 === s && 0 > w && (k = !0), p._time = p._rawPrevTime = a, p._locked || (p._totalTime = a, 0 !== p._repeat && (l = s + p._repeatDelay, p._cycle = p._totalTime / l >> 0, p._cycle && p._cycle === p._totalTime / l && a >= t && p._cycle--, p._time = p._totalTime - p._cycle * l, p._yoyo && 1 & p._cycle && (p._time = s - p._time), p._time > s ? (p._time = s, a = s + 1e-4) : p._time < 0 ? p._time = a = 0 : a = p._time));
                    if (p._hasPause && !p._forcingPlayhead && !b) {
                        if (a = p._time, a > q || p._repeat && y !== p._cycle)
                            for (d = p._first; d && d._startTime <= a && !m;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === p._rawPrevTime || (m = d), d = d._next;
                        else
                            for (d = p._last; d && d._startTime >= a && !m;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (m = d), d = d._prev;
                        m && (o = p._startTime + (p._reversed ? p._duration - m._startTime : m._startTime) / p._timeScale, m._startTime < s && (p._time = p._rawPrevTime = a = m._startTime, p._totalTime = a + p._cycle * (p._totalDuration + p._repeatDelay)))
                    }
                    if (p._cycle !== y && !p._locked) {
                        var z = p._yoyo && 0 !== (1 & y),
                            A = z === (p._yoyo && 0 !== (1 & p._cycle)),
                            B = p._totalTime,
                            C = p._cycle,
                            D = p._rawPrevTime,
                            E = p._time;
                        if (p._totalTime = y * s, p._cycle < y ? z = !z : p._totalTime += s, p._time = q, p._rawPrevTime = 0 === s ? w - 1e-4 : w, p._cycle = y, p._locked = !0, q = z ? 0 : s, p.render(q, b, 0 === s), b || p._gc || p.vars.onRepeat && (p._cycle = C, p._locked = !1, p._callback("onRepeat")), q !== p._time) return;
                        if (A && (p._cycle = y, p._locked = !0, q = z ? s + 1e-4 : -1e-4, p.render(q, !0, !1)), p._locked = !1, p._paused && !x) return;
                        p._time = E, p._totalTime = B, p._cycle = C, p._rawPrevTime = D
                    }
                    if (!(p._time !== q && p._first || c || k || m)) return void(t !== p._totalTime && p._onUpdate && (b || p._callback("onUpdate")));
                    if (p._initted || (p._initted = !0), p._active || !p._paused && p._totalTime !== t && a > 0 && (p._active = !0), 0 === t && p.vars.onStart && (0 === p._totalTime && p._totalDuration || b || p._callback("onStart")), n = p._time, n >= q)
                        for (d = p._first; d && (i = d._next, n === p._time && (!p._paused || x));)(d._active || d._startTime <= p._time && !d._paused && !d._gc) && (m === d && (p.pause(), p._pauseTime = o), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = i;
                    else
                        for (d = p._last; d && (i = d._prev, n === p._time && (!p._paused || x));) {
                            if (d._active || d._startTime <= q && !d._paused && !d._gc) {
                                if (m === d) {
                                    for (m = d._prev; m && m.endTime() > p._time;) m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c), m = m._prev;
                                    m = null, p.pause(), p._pauseTime = o
                                }
                                d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                            }
                            d = i
                        }
                    p._onUpdate && (b || (g.length && h(), p._callback("onUpdate"))), j && (p._locked || p._gc || (u === p._startTime || v !== p._timeScale) && (0 === p._time || r >= p.totalDuration()) && (f && (g.length && h(), p._timeline.autoRemoveChildren && p._enabled(!1, !1), p._active = !1), !b && p.vars[j] && p._callback(j)))
                }, k.getActive = function(a, b, c) {
                    var d, e, f = [],
                        g = this.getChildren(a || null == a, b || null == a, !!c),
                        h = 0,
                        i = g.length;
                    for (d = 0; i > d; d++) e = g[d], e.isActive() && (f[h++] = e);
                    return f
                }, k.getLabelAfter = function(a) {
                    a || 0 !== a && (a = this._time);
                    var b, c = this.getLabelsArray(),
                        d = c.length;
                    for (b = 0; d > b; b++)
                        if (c[b].time > a) return c[b].name;
                    return null
                }, k.getLabelBefore = function(a) {
                    null == a && (a = this._time);
                    for (var b = this.getLabelsArray(), c = b.length; --c > -1;)
                        if (b[c].time < a) return b[c].name;
                    return null
                }, k.getLabelsArray = function() {
                    var a, b = [],
                        c = 0;
                    for (a in this._labels) b[c++] = { time: this._labels[a], name: a };
                    return b.sort(function(a, b) { return a.time - b.time }), b
                }, k.invalidate = function() { return this._locked = !1, a.prototype.invalidate.call(this) }, k.progress = function(a, b) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() || 0 }, k.totalProgress = function(a, b) { return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration() || 0 }, k.totalDuration = function(b) { return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration) }, k.time = function(a, b) {
                    if (!arguments.length) return this._time;
                    this._dirty && this.totalDuration();
                    var c = this._duration,
                        d = this._cycle,
                        e = d * (c + this._repeatDelay);
                    return a > c && (a = c), this.totalTime(this._yoyo && 1 & d ? c - a + e : this._repeat ? a + e : a, b)
                }, k.repeat = function(a) { return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat }, k.repeatDelay = function(a) { return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay }, k.yoyo = function(a) { return arguments.length ? (this._yoyo = a, this) : this._yoyo }, k.currentLabel = function(a) { return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + e) }, d
            }, !0),
            function() {
                var a = 180 / Math.PI,
                    b = [],
                    c = [],
                    d = [],
                    e = {},
                    f = _gsScope._gsDefine.globals,
                    g = function(a, b, c, d) { c === d && (c = d - (d - b) / 1e6), a === b && (b = a + (c - a) / 1e6), this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a },
                    h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    i = function(a, b, c, d) {
                        var e = { a: a },
                            f = {},
                            g = {},
                            h = { c: d },
                            i = (a + b) / 2,
                            j = (b + c) / 2,
                            k = (c + d) / 2,
                            l = (i + j) / 2,
                            m = (j + k) / 2,
                            n = (m - l) / 8;
                        return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [e, f, g, h]
                    },
                    j = function(a, e, f, g, h) {
                        var j, k, l, m, n, o, p, q, r, s, t, u, v, w = a.length - 1,
                            x = 0,
                            y = a[0].a;
                        for (j = 0; w > j; j++) n = a[x], k = n.a, l = n.d, m = a[x + 1].d, h ? (t = b[j], u = c[j], v = (u + t) * e * .25 / (g ? .5 : d[j] || .5), o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0), p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0), q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - (l - k) * e * .5, p = l + (m - l) * e * .5, q = l - (o + p) / 2), o += q, p += q, n.c = r = o, 0 !== j ? n.b = y : n.b = y = n.a + .6 * (n.c - n.a), n.da = l - k, n.ca = r - k, n.ba = y - k, f ? (s = i(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), x += 4) : x++, y = p;
                        n = a[x], n.b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, n.ba = y - n.a, f && (s = i(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3]))
                    },
                    k = function(a, d, e, f) {
                        var h, i, j, k, l, m, n = [];
                        if (f)
                            for (a = [f].concat(a), i = a.length; --i > -1;) "string" == typeof(m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
                        if (h = a.length - 2, 0 > h) return n[0] = new g(a[0][d], 0, 0, a[0][d]), n;
                        for (i = 0; h > i; i++) j = a[i][d], k = a[i + 1][d], n[i] = new g(j, 0, 0, k), e && (l = a[i + 2][d], b[i] = (b[i] || 0) + (k - j) * (k - j), c[i] = (c[i] || 0) + (l - k) * (l - k));
                        return n[i] = new g(a[i][d], 0, 0, a[i + 1][d]), n
                    },
                    l = function(a, f, g, i, l, m) {
                        var n, o, p, q, r, s, t, u, v = {},
                            w = [],
                            x = m || a[0];
                        l = "string" == typeof l ? "," + l + "," : h, null == f && (f = 1);
                        for (o in a[0]) w.push(o);
                        if (a.length > 1) {
                            for (u = a[a.length - 1], t = !0, n = w.length; --n > -1;)
                                if (o = w[n], Math.abs(x[o] - u[o]) > .05) { t = !1; break }
                            t && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3])
                        }
                        for (b.length = c.length = d.length = 0, n = w.length; --n > -1;) o = w[n], e[o] = -1 !== l.indexOf("," + o + ","), v[o] = k(a, o, e[o], m);
                        for (n = b.length; --n > -1;) b[n] = Math.sqrt(b[n]), c[n] = Math.sqrt(c[n]);
                        if (!i) {
                            for (n = w.length; --n > -1;)
                                if (e[o])
                                    for (p = v[w[n]],
                                        s = p.length - 1, q = 0; s > q; q++) r = p[q + 1].da / c[q] + p[q].da / b[q] || 0, d[q] = (d[q] || 0) + r * r;
                            for (n = d.length; --n > -1;) d[n] = Math.sqrt(d[n])
                        }
                        for (n = w.length, q = g ? 4 : 1; --n > -1;) o = w[n], p = v[o], j(p, f, g, i, e[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
                        return v
                    },
                    m = function(a, b, c) {
                        b = b || "soft";
                        var d, e, f, h, i, j, k, l, m, n, o, p = {},
                            q = "cubic" === b ? 3 : 2,
                            r = "soft" === b,
                            s = [];
                        if (r && c && (a = [c].concat(a)), null == a || a.length < q + 1) throw "invalid Bezier data";
                        for (m in a[0]) s.push(m);
                        for (j = s.length; --j > -1;) {
                            for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++) d = null == c ? a[k][m] : "string" == typeof(o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), i[n++] = d;
                            for (l = n - q + 1, n = 0, k = 0; l > k; k += q) d = i[k], e = i[k + 1], f = i[k + 2], h = 2 === q ? 0 : i[k + 3], i[n++] = o = 3 === q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f);
                            i.length = n
                        }
                        return p
                    },
                    n = function(a, b, c) {
                        for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1;)
                            for (m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++) j = o * k, l = 1 - j, d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j), n = p * c + k - 1, b[n] = (b[n] || 0) + d * d
                    },
                    o = function(a, b) {
                        b = b >> 0 || 6;
                        var c, d, e, f, g = [],
                            h = [],
                            i = 0,
                            j = 0,
                            k = b - 1,
                            l = [],
                            m = [];
                        for (c in a) n(a[c], g, b);
                        for (e = g.length, d = 0; e > d; d++) i += Math.sqrt(g[d]), f = d % b, m[f] = i, f === k && (j += i, f = d / b >> 0, l[f] = m, h[f] = j, i = 0, m = []);
                        return { length: j, lengths: h, segments: l }
                    },
                    p = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.9",
                        API: 2,
                        global: !0,
                        init: function(a, b, c) {
                            this._target = a, b instanceof Array && (b = { values: b }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
                            var d, e, f, g, h, i = b.values || [],
                                j = {},
                                k = i[0],
                                n = b.autoRotate || c.vars.orientToBezier;
                            this._autoRotate = n ? n instanceof Array ? n : [
                                ["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]
                            ] : null;
                            for (d in k) this._props.push(d);
                            for (f = this._props.length; --f > -1;) d = this._props[f], this._overwriteProps.push(d), e = this._func[d] = "function" == typeof a[d], j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), h || j[d] !== i[0][d] && (h = j);
                            if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j), this._segCount = this._beziers[d].length, this._timeRes) {
                                var p = o(this._beziers, this._timeRes);
                                this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (n = this._autoRotate)
                                for (this._initialRotations = [], n[0] instanceof Array || (this._autoRotate = n = [n]), f = n.length; --f > -1;) {
                                    for (g = 0; 3 > g; g++) d = n[f][g], this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1;
                                    d = n[f][2], this._initialRotations[f] = (this._func[d] ? this._func[d].call(this._target) : this._target[d]) || 0, this._overwriteProps.push(d)
                                }
                            return this._startRatio = c.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(b) {
                            var c, d, e, f, g, h, i, j, k, l, m, n = this._segCount,
                                o = this._func,
                                p = this._target,
                                q = b !== this._startRatio;
                            if (this._timeRes) {
                                if (k = this._lengths, l = this._curSeg, m = b * this._length, e = this._li, m > this._l2 && n - 1 > e) {
                                    for (j = n - 1; j > e && (this._l2 = k[++e]) <= m;);
                                    this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e], this._s2 = l[this._s1 = this._si = 0]
                                } else if (m < this._l1 && e > 0) {
                                    for (; e > 0 && (this._l1 = k[--e]) >= m;);
                                    0 === e && m < this._l1 ? this._l1 = 0 : e++, this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si]
                                }
                                if (c = e, m -= this._l1, e = this._si, m > this._s2 && e < l.length - 1) {
                                    for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= m;);
                                    this._s1 = l[e - 1], this._si = e
                                } else if (m < this._s1 && e > 0) {
                                    for (; e > 0 && (this._s1 = l[--e]) >= m;);
                                    0 === e && m < this._s1 ? this._s1 = 0 : e++, this._s2 = l[e], this._si = e
                                }
                                h = 1 === b ? 1 : (e + (m - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                            } else c = 0 > b ? 0 : b >= 1 ? n - 1 : n * b >> 0, h = (b - c * (1 / n)) * n;
                            for (d = 1 - h, e = this._props.length; --e > -1;) f = this._props[e], g = this._beziers[f][c], i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, this._mod[f] && (i = this._mod[f](i, p)), o[f] ? p[f](i) : p[f] = i;
                            if (this._autoRotate) { var r, s, t, u, v, w, x, y = this._autoRotate; for (e = y.length; --e > -1;) f = y[e][2], w = y[e][3] || 0, x = y[e][4] === !0 ? 1 : a, g = this._beziers[y[e][0]], r = this._beziers[y[e][1]], g && r && (g = g[c], r = r[c], s = g.a + (g.b - g.a) * h, u = g.b + (g.c - g.b) * h, s += (u - s) * h, u += (g.c + (g.d - g.c) * h - u) * h, t = r.a + (r.b - r.a) * h, v = r.b + (r.c - r.b) * h, t += (v - t) * h, v += (r.c + (r.d - r.c) * h - v) * h, i = q ? Math.atan2(v - t, u - s) * x + w : this._initialRotations[e], this._mod[f] && (i = this._mod[f](i, p)), o[f] ? p[f](i) : p[f] = i) }
                        }
                    }),
                    q = p.prototype;
                p.bezierThrough = l, p.cubicToQuadratic = i, p._autoCSS = !0, p.quadraticToCubic = function(a, b, c) { return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c) }, p._cssRegister = function() {
                    var a = f.CSSPlugin;
                    if (a) {
                        var b = a._internals,
                            c = b._parseToProxy,
                            d = b._setPluginRatio,
                            e = b.CSSPropTween;
                        b._registerComplexSpecialProp("bezier", {
                            parser: function(a, b, f, g, h, i) {
                                b instanceof Array && (b = { values: b }), i = new p;
                                var j, k, l, m = b.values,
                                    n = m.length - 1,
                                    o = [],
                                    q = {};
                                if (0 > n) return h;
                                for (j = 0; n >= j; j++) l = c(a, m[j], g, h, i, n !== j), o[j] = l.end;
                                for (k in b) q[k] = b[k];
                                return q.values = o, h = new e(a, "bezier", 0, 0, l.pt, 2), h.data = l, h.plugin = i, h.setRatio = d, 0 === q.autoRotate && (q.autoRotate = !0), !q.autoRotate || q.autoRotate instanceof Array || (j = q.autoRotate === !0 ? 0 : Number(q.autoRotate), q.autoRotate = null != l.end.left ? [
                                    ["left", "top", "rotation", j, !1]
                                ] : null != l.end.x ? [
                                    ["x", "y", "rotation", j, !1]
                                ] : !1), q.autoRotate && (g._transform || g._enableTransforms(!1), l.autoRotate = g._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, g._overwriteProps.push("rotation")), i._onInitTween(l.proxy, q, g._tween), h
                            }
                        })
                    }
                }, q._mod = function(a) { for (var b, c = this._overwriteProps, d = c.length; --d > -1;) b = a[c[d]], b && "function" == typeof b && (this._mod[c[d]] = b) }, q._kill = function(a) {
                    var b, c, d = this._props;
                    for (b in this._beziers)
                        if (b in a)
                            for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1;) d[c] === b && d.splice(c, 1);
                    if (d = this._autoRotate)
                        for (c = d.length; --c > -1;) a[d[c][2]] && d.splice(c, 1);
                    return this._super._kill.call(this, a)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, b) {
                var c, d, e, f, g = function() { a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio },
                    h = _gsScope._gsDefine.globals,
                    i = {},
                    j = g.prototype = new a("css");
                j.constructor = g, g.version = "2.1.3", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = { top: j, right: j, bottom: j, left: j, width: j, height: j, fontSize: j, padding: j, margin: j, perspective: j, lineHeight: "" };
                var k, l, m, n, o, p, q, r, s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,
                    w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    x = /(?:\d|\-|\+|=|#|\.)*/g,
                    y = /opacity *= *([^)]*)/i,
                    z = /opacity:([^;]*)/i,
                    A = /alpha\(opacity *=.+?\)/i,
                    B = /^(rgb|hsl)/,
                    C = /([A-Z])/g,
                    D = /-([a-z])/gi,
                    E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    F = function(a, b) { return b.toUpperCase() },
                    G = /(?:Left|Right|Width)/i,
                    H = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    I = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    J = /,(?=[^\)]*(?:\(|$))/gi,
                    K = /[\s,\(]/i,
                    L = Math.PI / 180,
                    M = 180 / Math.PI,
                    N = {},
                    O = { style: {} },
                    P = _gsScope.document || { createElement: function() { return O } },
                    Q = function(a, b) { var c = P.createElementNS ? P.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : P.createElement(a); return c.style ? c : P.createElement(a) },
                    R = Q("div"),
                    S = Q("img"),
                    T = g._internals = { _specialProps: i },
                    U = (_gsScope.navigator || {}).userAgent || "",
                    V = function() {
                        var a = U.indexOf("Android"),
                            b = Q("a");
                        return m = -1 !== U.indexOf("Safari") && -1 === U.indexOf("Chrome") && (-1 === a || parseFloat(U.substr(a + 8, 2)) > 3), o = m && parseFloat(U.substr(U.indexOf("Version/") + 8, 2)) < 6, n = -1 !== U.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(U) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(U)) && (p = parseFloat(RegExp.$1)), b ? (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity)) : !1
                    }(),
                    W = function(a) { return y.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1 },
                    X = function(a) { _gsScope.console && console.log(a) },
                    Y = "",
                    Z = "",
                    $ = function(a, b) { b = b || R; var c, d, e = b.style; if (void 0 !== e[a]) return a; for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];); return d >= 0 ? (Z = 3 === d ? "ms" : c[d], Y = "-" + Z.toLowerCase() + "-", Z + a) : null },
                    _ = "undefined" != typeof window ? window : P.defaultView || { getComputedStyle: function() {} },
                    aa = function(a) { return _.getComputedStyle(a) },
                    ba = g.getStyle = function(a, b, c, d, e) { var f; return V || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || aa(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(C, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : W(a) },
                    ca = T.convertToPixels = function(a, c, d, e, f) {
                        if ("px" === e || !e && "lineHeight" !== c) return d;
                        if ("auto" === e || !d) return 0;
                        var h, i, j, k = G.test(c),
                            l = a,
                            m = R.style,
                            n = 0 > d,
                            o = 1 === d;
                        if (n && (d = -d), o && (d *= 100), "lineHeight" !== c || e)
                            if ("%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);
                            else {
                                if (m.cssText = "border:0 solid red;position:" + ba(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                                else {
                                    if (l = a.parentNode || P.body, -1 !== ba(l, "display").indexOf("flex") && (m.position = "absolute"), i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
                                    m[k ? "width" : "height"] = d + e
                                }
                                l.appendChild(R), h = parseFloat(R[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(R), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = h / d * 100), 0 !== h || f || (h = ca(a, c, d, e, !0))
                            }
                        else i = aa(a).lineHeight, a.style.lineHeight = d, h = parseFloat(aa(a).lineHeight), a.style.lineHeight = i;
                        return o && (h /= 100), n ? -h : h
                    },
                    da = T.calculateOffset = function(a, b, c) {
                        if ("absolute" !== ba(a, "position", c)) return 0;
                        var d = "left" === b ? "Left" : "Top",
                            e = ba(a, "margin" + d, c);
                        return a["offset" + d] - (ca(a, b, parseFloat(e), e.replace(x, "")) || 0)
                    },
                    ea = function(a, b) {
                        var c, d, e, f = {};
                        if (b = b || aa(a, null))
                            if (c = b.length)
                                for (; --c > -1;) e = b[c], (-1 === e.indexOf("-transform") || Fa === e) && (f[e.replace(D, F)] = b.getPropertyValue(e));
                            else
                                for (c in b)(-1 === c.indexOf("Transform") || Ea === c) && (f[c] = b[c]);
                        else if (b = a.currentStyle || a.style)
                            for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(D, F)] = b[c]);
                        return V || (f.opacity = W(a)), d = Ta(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Ha && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f
                    },
                    fa = function(a, b, c, d, e) {
                        var f, g, h, i = {},
                            j = a.style;
                        for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(w, "") ? f : 0 : da(a, g), void 0 !== j[g] && (h = new ua(j, g, j[g], h)));
                        if (d)
                            for (g in d) "className" !== g && (i[g] = d[g]);
                        return { difs: i, firstMPT: h }
                    },
                    ga = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                    ha = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ia = function(a, b, c) {
                        if ("svg" === (a.nodeName + "").toLowerCase()) return (c || aa(a))[b] || 0;
                        if (a.getCTM && Qa(a)) return a.getBBox()[b] || 0;
                        var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
                            e = ga[b],
                            f = e.length;
                        for (c = c || aa(a, null); --f > -1;) d -= parseFloat(ba(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(ba(a, "border" + e[f] + "Width", c, !0)) || 0;
                        return d
                    },
                    ja = function(a, b) {
                        if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
                        (null == a || "" === a) && (a = "0 0");
                        var c, d = a.split(" "),
                            e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0],
                            f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];
                        if (d.length > 3 && !b) { for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) a.push(ja(d[c])); return a.join(",") }
                        return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"), ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"), a = e + " " + f + (d.length > 2 ? " " + d[2] : ""), b && (b.oxp = -1 !== e.indexOf("%"), b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === e.charAt(1), b.oyr = "=" === f.charAt(1), b.ox = parseFloat(e.replace(w, "")), b.oy = parseFloat(f.replace(w, "")), b.v = a), b || a
                    },
                    ka = function(a, b) { return "function" == typeof a && (a = a(r, q)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0 },
                    la = function(a, b) { "function" == typeof a && (a = a(r, q)); var c = "string" == typeof a && "=" === a.charAt(1); return "string" == typeof a && "v" === a.charAt(a.length - 2) && (a = (c ? a.substr(0, 2) : 0) + window["inner" + ("vh" === a.substr(-2) ? "Height" : "Width")] * (parseFloat(c ? a.substr(2) : a) / 100)), null == a ? b : c ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0 },
                    ma = function(a, b, c, d) { var e, f, g, h, i, j = 1e-6; return "function" == typeof a && (a = a(r, q)), null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : M) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), j > h && h > -j && (h = 0), h },
                    na = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
                    oa = function(a, b, c) { return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0 },
                    pa = g.parseColor = function(a, b) {
                        var c, d, e, f, g, h, i, j, k, l, m;
                        if (a)
                            if ("number" == typeof a) c = [a >> 16, a >> 8 & 255, 255 & a];
                            else {
                                if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), na[a]) c = na[a];
                                else if ("#" === a.charAt(0)) 4 === a.length && (d = a.charAt(1), e = a.charAt(2), f = a.charAt(3), a = "#" + d + d + e + e + f + f), a = parseInt(a.substr(1), 16), c = [a >> 16, a >> 8 & 255, 255 & a];
                                else if ("hsl" === a.substr(0, 3))
                                    if (c = m = a.match(s), b) { if (-1 !== a.indexOf("=")) return a.match(t) } else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, i = Number(c[2]) / 100, e = .5 >= i ? i * (h + 1) : i + h - i * h, d = 2 * i - e, c.length > 3 && (c[3] = Number(c[3])), c[0] = oa(g + 1 / 3, d, e), c[1] = oa(g, d, e), c[2] = oa(g - 1 / 3, d, e);
                                else c = a.match(s) || na.transparent;
                                c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3]))
                            }
                        else c = na.black;
                        return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, j = Math.max(d, e, f), k = Math.min(d, e, f), i = (j + k) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c
                    },
                    qa = function(a, b) {
                        var c, d, e, f = a.match(ra) || [],
                            g = 0,
                            h = "";
                        if (!f.length) return a;
                        for (c = 0; c < f.length; c++) d = f[c], e = a.substr(g, a.indexOf(d, g) - g), g += e.length + d.length, d = pa(d, b), 3 === d.length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
                        return h + a.substr(g)
                    },
                    ra = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (j in na) ra += "|" + j + "\\b";
                ra = new RegExp(ra + ")", "gi"), g.colorStringFilter = function(a) {
                    var b, c = a[0] + " " + a[1];
                    ra.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = qa(a[0], b), a[1] = qa(a[1], b)), ra.lastIndex = 0
                }, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
                var sa = function(a, b, c, d) {
                        if (null == a) return function(a) { return a };
                        var e, f = b ? (a.match(ra) || [""])[0] : "",
                            g = a.split(f).join("").match(u) || [],
                            h = a.substr(0, a.indexOf(g[0])),
                            i = ")" === a.charAt(a.length - 1) ? ")" : "",
                            j = -1 !== a.indexOf(" ") ? " " : ",",
                            k = g.length,
                            l = k > 0 ? g[0].replace(s, "") : "";
                        return k ? e = b ? function(a) {
                            var b, m, n, o;
                            if ("number" == typeof a) a += l;
                            else if (d && J.test(a)) { for (o = a.replace(J, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]); return o.join(",") }
                            if (b = (a.match(ra) || [f])[0], m = a.split(b).join("").match(u) || [], n = m.length, k > n--)
                                for (; ++n < k;) m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
                            return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
                        } : function(a) {
                            var b, f, m;
                            if ("number" == typeof a) a += l;
                            else if (d && J.test(a)) { for (f = a.replace(J, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]); return f.join(",") }
                            if (b = a.match("," === j ? u : v) || [], m = b.length, k > m--)
                                for (; ++m < k;) b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
                            return (h && "none" !== a ? a.substr(0, a.indexOf(b[0])) || h : h) + b.join(j) + i
                        } : function(a) { return a }
                    },
                    ta = function(a) {
                        return a = a.split(","),
                            function(b, c, d, e, f, g, h) { var i, j = (c + "").split(" "); for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0]; return e.parse(b, h, f, g) }
                    },
                    ua = (T._setPluginRatio = function(a) {
                        this.plugin.setRatio(a);
                        for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;) b = h[i.v], i.r ? b = i.r(b) : j > b && b > -j && (b = 0), i.t[i.p] = b, i = i._next;
                        if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod.call(this._tween, h.rotation, this.t, this._tween) : h.rotation), 1 === a || 0 === a)
                            for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) {
                                if (c = i.t, c.type) {
                                    if (1 === c.type) {
                                        for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                                        c[f] = e
                                    }
                                } else c[f] = c.s + c.xs0;
                                i = i._next
                            }
                    }, function(a, b, c, d, e) { this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d) }),
                    va = (T._parseToProxy = function(a, b, c, d, e, f) {
                        var g, h, i, j, k, l = d,
                            m = {},
                            n = {},
                            o = c._transform,
                            p = N;
                        for (c._transform = null, N = b, d = k = c.parse(a, b, d, e), N = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
                            if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new ua(d, "s", h, j, d.r), d.c = 0), 1 === d.type))
                                for (g = d.l; --g > 0;) i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new ua(d, i, h, j, d.rxp[i]));
                            d = d._next
                        }
                        return { proxy: m, end: n, firstMPT: j, pt: k }
                    }, T.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) { this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof va || f.push(this.n), this.r = j ? "function" == typeof j ? j : Math.round : j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this) }),
                    wa = function(a, b, c, d, e, f) { var g = new va(a, b, c, d - c, e, -1, f); return g.b = c, g.e = g.xs0 = d, g },
                    xa = g.parseComplex = function(a, b, c, d, e, f, h, i, j, l) {
                        c = c || f || "", "function" == typeof d && (d = d(r, q)), h = new va(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d), d += "", e && ra.test(d + c) && (d = [c, d], g.colorStringFilter(d), c = d[0], d = d[1]);
                        var m, n, o, p, u, v, w, x, y, z, A, B, C, D = c.split(", ").join(",").split(" "),
                            E = d.split(", ").join(",").split(" "),
                            F = D.length,
                            G = k !== !1;
                        for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl") ? (D = D.join(" ").replace(J, ", ").split(" "), E = E.join(" ").replace(J, ", ").split(" ")) : (D = D.join(" ").split(",").join(", ").split(" "), E = E.join(" ").split(",").join(", ").split(" ")), F = D.length), F !== E.length && (D = (f || "").split(" "), F = D.length), h.plugin = j, h.setRatio = l, ra.lastIndex = 0, m = 0; F > m; m++)
                            if (p = D[m], u = E[m] + "", x = parseFloat(p), x || 0 === x) h.appendXtra("", x, ka(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px") ? Math.round : !1, !0);
                            else if (e && ra.test(p)) B = u.indexOf(")") + 1, B = ")" + (B ? u.substr(B) : ""), C = -1 !== u.indexOf("hsl") && V, z = u, p = pa(p, C), u = pa(u, C), y = p.length + u.length > 6, y && !V && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", h.e = h.e.split(E[m]).join("transparent")) : (V || (y = !1), C ? h.appendXtra(z.substr(0, z.indexOf("hsl")) + (y ? "hsla(" : "hsl("), p[0], ka(u[0], p[0]), ",", !1, !0).appendXtra("", p[1], ka(u[1], p[1]), "%,", !1).appendXtra("", p[2], ka(u[2], p[2]), y ? "%," : "%" + B, !1) : h.appendXtra(z.substr(0, z.indexOf("rgb")) + (y ? "rgba(" : "rgb("), p[0], u[0] - p[0], ",", Math.round, !0).appendXtra("", p[1], u[1] - p[1], ",", Math.round).appendXtra("", p[2], u[2] - p[2], y ? "," : B, Math.round), y && (p = p.length < 4 ? 1 : p[3], h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))), ra.lastIndex = 0;
                        else if (v = p.match(s)) {
                            if (w = u.match(t), !w || w.length !== v.length) return h;
                            for (o = 0, n = 0; n < v.length; n++) A = v[n], z = p.indexOf(A, o), h.appendXtra(p.substr(o, z - o), Number(A), ka(w[n], A), "", G && "px" === p.substr(z + A.length, 2) ? Math.round : !1, 0 === n), o = z + A.length;
                            h["xs" + h.l] += p.substr(o)
                        } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
                        if (-1 !== d.indexOf("=") && h.data) {
                            for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++) B += h["xs" + m] + h.data["xn" + m];
                            h.e = B + h["xs" + m]
                        }
                        return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h
                    },
                    ya = 9;
                for (j = va.prototype, j.l = j.pr = 0; --ya > 0;) j["xn" + ya] = 0, j["xs" + ya] = "";
                j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function(a, b, c, d, e, f) {
                    var g = this,
                        h = g.l;
                    return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new va(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = { s: b + c }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
                };
                var za = function(a, b) { b = b || {}, this.p = b.prefix ? $(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || sa(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.allowFunc = b.allowFunc, this.pr = b.priority || 0 },
                    Aa = T._registerComplexSpecialProp = function(a, b, c) {
                        "object" != typeof b && (b = { parser: c });
                        var d, e, f = a.split(","),
                            g = b.defaultValue;
                        for (c = c || [g], d = 0; d < f.length; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new za(f[d], b)
                    },
                    Ba = T._registerPluginProp = function(a) {
                        if (!i[a]) {
                            var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                            Aa(a, { parser: function(a, c, d, e, f, g, j) { var k = h.com.greensock.plugins[b]; return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (X("Error: " + b + " js file not loaded."), f) } })
                        }
                    };
                j = za.prototype, j.parseComplex = function(a, b, c, d, e, f) {
                    var g, h, i, j, k, l, m = this.keyword;
                    if (this.multi && (J.test(c) || J.test(b) ? (h = b.replace(J, "|").split("|"), i = c.replace(J, "|").split("|")) : m && (h = [b], i = [c])), i) {
                        for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
                        b = h.join(", "), c = i.join(", ")
                    }
                    return xa(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
                }, j.parse = function(a, b, c, d, f, g, h) { return this.parseComplex(a.style, this.format(ba(a, this.p, e, !1, this.dflt)), this.format(b), f, g) }, g.registerSpecialProp = function(a, b, c) { Aa(a, { parser: function(a, d, e, f, g, h, i) { var j = new va(a, e, 0, 0, g, 2, e, !1, c); return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j }, priority: c }) }, g.useSVGTransformAttr = !0;
                var Ca, Da = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Ea = $("transform"),
                    Fa = Y + "transform",
                    Ga = $("transformOrigin"),
                    Ha = null !== $("perspective"),
                    Ia = T.Transform = function() { this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = g.defaultForce3D !== !1 && Ha ? g.defaultForce3D || "auto" : !1 },
                    Ja = _gsScope.SVGElement,
                    Ka = function(a, b, c) {
                        var d, e = P.createElementNS("http://www.w3.org/2000/svg", a),
                            f = /([a-z])([A-Z])/g;
                        for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
                        return b.appendChild(e), e
                    },
                    La = P.documentElement || {},
                    Ma = function() { var a, b, c, d = p || /Android/i.test(U) && !_gsScope.chrome; return P.createElementNS && La.appendChild && !d && (a = Ka("svg", La), b = Ka("rect", a, { width: 100, height: 50, x: 100 }), c = b.getBoundingClientRect().width, b.style[Ga] = "50% 50%", b.style[Ea] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n && Ha), La.removeChild(a)), d }(),
                    Na = function(a, b, c, d, e, f) {
                        var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a._gsTransform,
                            w = Sa(a, !0);
                        v && (t = v.xOrigin, u = v.yOrigin), (!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(), 0 === n.x && 0 === n.y && n.width + n.height === 0 && (n = { x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0, y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0, width: 0, height: 0 }), b = ja(b).split(" "), h = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]), c.xOrigin = k = parseFloat(h[0]), c.yOrigin = l = parseFloat(h[1]), d && w !== Ra && (m = w[0], n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], s = m * p - n * o, s && (i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = h[0] = i, l = c.yOrigin = h[1] = j)), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, v = c), e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (i = k - t, j = l - u, v.xOffset += i * w[0] + j * w[2] - i, v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", h.join(" "))
                    },
                    Oa = function(a) {
                        var b, c = Q("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            d = this.parentNode,
                            e = this.nextSibling,
                            f = this.style.cssText;
                        if (La.appendChild(c), c.appendChild(this), this.style.display = "block", a) try { b = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Oa } catch (g) {} else this._originalGetBBox && (b = this._originalGetBBox());
                        return e ? d.insertBefore(this, e) : d.appendChild(this), La.removeChild(c), this.style.cssText = f, b
                    },
                    Pa = function(a) { try { return a.getBBox() } catch (b) { return Oa.call(a, !0) } },
                    Qa = function(a) { return !(!Ja || !a.getCTM || a.parentNode && !a.ownerSVGElement || !Pa(a)) },
                    Ra = [1, 0, 0, 1, 0, 0],
                    Sa = function(a, b) {
                        var c, d, e, f, g, h, i, j = a._gsTransform || new Ia,
                            k = 1e5,
                            l = a.style;
                        if (Ea ? d = ba(a, Fa, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(H), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), j.x || 0, j.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, Ea && c && !a.offsetParent && a !== La && (f = l.display, l.display = "block", i = a.parentNode, i && a.offsetParent || (g = 1, h = a.nextSibling, La.appendChild(a)), d = ba(a, Fa, null, !0), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, f ? l.display = f : Xa(l, "display"), g && (h ? i.insertBefore(a, h) : i ? i.appendChild(a) : La.removeChild(a))), (j.svg || a.getCTM && Qa(a)) && (c && -1 !== (l[Ea] + "").indexOf("matrix") && (d = l[Ea], c = 0), e = a.getAttribute("transform"), c && e && (e = a.transform.baseVal.consolidate().matrix, d = "matrix(" + e.a + "," + e.b + "," + e.c + "," + e.d + "," + e.e + "," + e.f + ")", c = 0)), c) return Ra;
                        for (e = (d || "").match(s) || [], ya = e.length; --ya > -1;) f = Number(e[ya]), e[ya] = (g = f - (f |= 0)) ? (g * k + (0 > g ? -.5 : .5) | 0) / k + f : f;
                        return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
                    },
                    Ta = T.getTransform = function(a, c, d, e) {
                        if (a._gsTransform && d && !e) return a._gsTransform;
                        var f, h, i, j, k, l, m = d ? a._gsTransform || new Ia : new Ia,
                            n = m.scaleX < 0,
                            o = 2e-5,
                            p = 1e5,
                            q = Ha ? parseFloat(ba(a, Ga, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
                            r = parseFloat(g.defaultTransformPerspective) || 0;
                        if (m.svg = !(!a.getCTM || !Qa(a)), m.svg && (Na(a, ba(a, Ga, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), Ca = g.useSVGTransformAttr || Ma), f = Sa(a), f !== Ra) {
                            if (16 === f.length) {
                                var s, t, u, v, w, x = f[0],
                                    y = f[1],
                                    z = f[2],
                                    A = f[3],
                                    B = f[4],
                                    C = f[5],
                                    D = f[6],
                                    E = f[7],
                                    F = f[8],
                                    G = f[9],
                                    H = f[10],
                                    I = f[12],
                                    J = f[13],
                                    K = f[14],
                                    L = f[11],
                                    N = Math.atan2(D, H);
                                m.zOrigin && (K = -m.zOrigin, I = F * K - f[12], J = G * K - f[13], K = H * K + m.zOrigin - f[14]), m.rotationX = N * M, N && (v = Math.cos(-N), w = Math.sin(-N), s = B * v + F * w, t = C * v + G * w, u = D * v + H * w, F = B * -w + F * v, G = C * -w + G * v, H = D * -w + H * v, L = E * -w + L * v, B = s, C = t, D = u), N = Math.atan2(-z, H), m.rotationY = N * M, N && (v = Math.cos(-N), w = Math.sin(-N), s = x * v - F * w, t = y * v - G * w, u = z * v - H * w, G = y * w + G * v, H = z * w + H * v, L = A * w + L * v, x = s, y = t, z = u), N = Math.atan2(y, x), m.rotation = N * M, N && (v = Math.cos(N), w = Math.sin(N), s = x * v + y * w, t = B * v + C * w, u = F * v + G * w, y = y * v - x * w, C = C * v - B * w, G = G * v - F * w, x = s, B = t, F = u), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY = 180 - m.rotationY), N = Math.atan2(B, C), m.scaleX = (Math.sqrt(x * x + y * y + z * z) * p + .5 | 0) / p, m.scaleY = (Math.sqrt(C * C + D * D) * p + .5 | 0) / p, m.scaleZ = (Math.sqrt(F * F + G * G + H * H) * p + .5 | 0) / p, x /= m.scaleX, B /= m.scaleY, y /= m.scaleX, C /= m.scaleY, Math.abs(N) > o ? (m.skewX = N * M, B = 0, "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N))) : m.skewX = 0, m.perspective = L ? 1 / (0 > L ? -L : L) : 0, m.x = I, m.y = J, m.z = K, m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B), m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C))
                            } else if (!Ha || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) {
                                var O = f.length >= 6,
                                    P = O ? f[0] : 1,
                                    Q = f[1] || 0,
                                    R = f[2] || 0,
                                    S = O ? f[3] : 1;
                                m.x = f[4] || 0, m.y = f[5] || 0, i = Math.sqrt(P * P + Q * Q), j = Math.sqrt(S * S + R * R), k = P || Q ? Math.atan2(Q, P) * M : m.rotation || 0, l = R || S ? Math.atan2(R, S) * M + k : m.skewX || 0, m.scaleX = i, m.scaleY = j, m.rotation = k, m.skewX = l, Ha && (m.rotationX = m.rotationY = m.z = 0, m.perspective = r, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R), m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S))
                            }
                            Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1, m.skewX += m.rotation <= 0 ? 180 : -180, m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1, m.skewX += m.skewX <= 0 ? 180 : -180)), m.zOrigin = q;
                            for (h in m) m[h] < o && m[h] > -o && (m[h] = 0)
                        }
                        return d && (a._gsTransform = m, m.svg && (Ca && a.style[Ea] ? b.delayedCall(.001, function() { Xa(a.style, Ea) }) : !Ca && a.getAttribute("transform") && b.delayedCall(.001, function() { a.removeAttribute("transform") }))), m
                    },
                    Ua = function(a) {
                        var b, c, d = this.data,
                            e = -d.rotation * L,
                            f = e + d.skewX * L,
                            g = 1e5,
                            h = (Math.cos(e) * d.scaleX * g | 0) / g,
                            i = (Math.sin(e) * d.scaleX * g | 0) / g,
                            j = (Math.sin(f) * -d.scaleY * g | 0) / g,
                            k = (Math.cos(f) * d.scaleY * g | 0) / g,
                            l = this.t.style,
                            m = this.t.currentStyle;
                        if (m) {
                            c = i, i = -j, j = -c, b = m.filter, l.filter = "";
                            var n, o, q = this.t.offsetWidth,
                                r = this.t.offsetHeight,
                                s = "absolute" !== m.position,
                                t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
                                u = d.x + q * d.xPercent / 100,
                                v = d.y + r * d.yPercent / 100;
                            if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, u += n - (n * h + o * i), v += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")") : t += ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(I, t) : l.filter = t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || y.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) { var w, z, A, B = 8 > p ? 1 : -1; for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v), ya = 0; 4 > ya; ya++) z = ha[ya], w = m[z], c = -1 !== w.indexOf("px") ? parseFloat(w) : ca(this.t, z, parseFloat(w), w.replace(x, "")) || 0, A = c !== d[z] ? 2 > ya ? -d.ieOffsetX : -d.ieOffsetY : 2 > ya ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === ya || 2 === ya ? 1 : B))) + "px" }
                        }
                    },
                    Va = T.set3DTransformRatio = T.setTransformRatio = function(a) {
                        var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data,
                            A = this.t.style,
                            B = z.rotation,
                            C = z.rotationX,
                            D = z.rotationY,
                            E = z.scaleX,
                            F = z.scaleY,
                            G = z.scaleZ,
                            H = z.x,
                            I = z.y,
                            J = z.z,
                            K = z.svg,
                            M = z.perspective,
                            N = z.force3D,
                            O = z.skewY,
                            P = z.skewX;
                        if (O && (P += O, B += O), ((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !J && !M && !D && !C && 1 === G || Ca && K || !Ha) return void(B || P || K ? (B *= L, x = P * L, y = 1e5, c = Math.cos(B) * E, f = Math.sin(B) * E, d = Math.sin(B - x) * -F, g = Math.cos(B - x) * F, x && "simple" === z.skewType && (b = Math.tan(x - O * L), b = Math.sqrt(1 + b * b), d *= b, g *= b, O && (b = Math.tan(O * L), b = Math.sqrt(1 + b * b), c *= b, f *= b)), K && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset, Ca && (z.xPercent || z.yPercent) && (q = this.t.getBBox(), H += .01 * z.xPercent * q.width, I += .01 * z.yPercent * q.height), q = 1e-6, q > H && H > -q && (H = 0), q > I && I > -q && (I = 0)), u = (c * y | 0) / y + "," + (f * y | 0) / y + "," + (d * y | 0) / y + "," + (g * y | 0) / y + "," + H + "," + I + ")", K && Ca ? this.t.setAttribute("transform", "matrix(" + u) : A[Ea] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[Ea] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")");
                        if (n && (q = 1e-4, q > E && E > -q && (E = G = 2e-5), q > F && F > -q && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || P) B *= L, r = c = Math.cos(B), s = f = Math.sin(B), P && (B -= P * L, r = Math.cos(B), s = Math.sin(B), "simple" === z.skewType && (b = Math.tan((P - O) * L), b = Math.sqrt(1 + b * b), r *= b, s *= b, z.skewY && (b = Math.tan(O * L), b = Math.sqrt(1 + b * b), c *= b, f *= b))), d = -s, g = r;
                        else {
                            if (!(D || C || 1 !== G || M || K)) return void(A[Ea] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                            c = g = 1, d = f = 0
                        }
                        k = 1, e = h = i = j = l = m = 0, o = M ? -1 / M : 0, p = z.zOrigin, q = 1e-6, v = ",", w = "0", B = D * L, B && (r = Math.cos(B), s = Math.sin(B), i = -s, l = o * -s, e = c * s, h = f * s, k = r, o *= r, c *= r, f *= r), B = C * L, B && (r = Math.cos(B), s = Math.sin(B), b = d * r + e * s, t = g * r + h * s, j = k * s, m = o * s, e = d * -s + e * r, h = g * -s + h * r, k *= r, o *= r, d = b, g = t), 1 !== G && (e *= G, h *= G, k *= G, o *= G), 1 !== F && (d *= F, g *= F, j *= F, m *= F), 1 !== E && (c *= E, f *= E, i *= E, l *= E), (p || K) && (p && (H += e * -p, I += h * -p, J += k * -p + p), K && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset), q > H && H > -q && (H = w), q > I && I > -q && (I = w), q > J && J > -q && (J = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", u += (q > c && c > -q ? w : c) + v + (q > f && f > -q ? w : f) + v + (q > i && i > -q ? w : i), u += v + (q > l && l > -q ? w : l) + v + (q > d && d > -q ? w : d) + v + (q > g && g > -q ? w : g),
                            C || D || 1 !== G ? (u += v + (q > j && j > -q ? w : j) + v + (q > m && m > -q ? w : m) + v + (q > e && e > -q ? w : e), u += v + (q > h && h > -q ? w : h) + v + (q > k && k > -q ? w : k) + v + (q > o && o > -q ? w : o) + v) : u += ",0,0,0,0,1,0,", u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")", A[Ea] = u
                    };
                j = Ia.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, j.scaleX = j.scaleY = j.scaleZ = 1, Aa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(a, b, c, d, f, h, i) {
                        if (d._lastParsedTransform === i) return f;
                        d._lastParsedTransform = i;
                        var j = i.scale && "function" == typeof i.scale ? i.scale : 0;
                        j && (i.scale = j(r, a));
                        var k, l, m, n, o, p, s, t, u, v = a._gsTransform,
                            w = a.style,
                            x = 1e-6,
                            y = Da.length,
                            z = i,
                            A = {},
                            B = "transformOrigin",
                            C = Ta(a, e, !0, z.parseTransform),
                            D = z.transform && ("function" == typeof z.transform ? z.transform(r, q) : z.transform);
                        if (C.skewType = z.skewType || C.skewType || g.defaultSkewType, d._transform = C, "rotationZ" in z && (z.rotation = z.rotationZ), D && "string" == typeof D && Ea) l = R.style, l[Ea] = D, l.display = "block", l.position = "absolute", -1 !== D.indexOf("%") && (l.width = ba(a, "width"), l.height = ba(a, "height")), P.body.appendChild(R), k = Ta(R, null, !1), "simple" === C.skewType && (k.scaleY *= Math.cos(k.skewX * L)), C.svg && (p = C.xOrigin, s = C.yOrigin, k.x -= C.xOffset, k.y -= C.yOffset, (z.transformOrigin || z.svgOrigin) && (D = {}, Na(a, ja(z.transformOrigin), D, z.svgOrigin, z.smoothOrigin, !0), p = D.xOrigin, s = D.yOrigin, k.x -= D.xOffset - C.xOffset, k.y -= D.yOffset - C.yOffset), (p || s) && (t = Sa(R, !0), k.x -= p - (p * t[0] + s * t[2]), k.y -= s - (p * t[1] + s * t[3]))), P.body.removeChild(R), k.perspective || (k.perspective = C.perspective), null != z.xPercent && (k.xPercent = la(z.xPercent, C.xPercent)), null != z.yPercent && (k.yPercent = la(z.yPercent, C.yPercent));
                        else if ("object" == typeof z) {
                            if (k = { scaleX: la(null != z.scaleX ? z.scaleX : z.scale, C.scaleX), scaleY: la(null != z.scaleY ? z.scaleY : z.scale, C.scaleY), scaleZ: la(z.scaleZ, C.scaleZ), x: la(z.x, C.x), y: la(z.y, C.y), z: la(z.z, C.z), xPercent: la(z.xPercent, C.xPercent), yPercent: la(z.yPercent, C.yPercent), perspective: la(z.transformPerspective, C.perspective) }, o = z.directionalRotation, null != o)
                                if ("object" == typeof o)
                                    for (l in o) z[l] = o[l];
                                else z.rotation = o;
                                "string" == typeof z.x && -1 !== z.x.indexOf("%") && (k.x = 0, k.xPercent = la(z.x, C.xPercent)), "string" == typeof z.y && -1 !== z.y.indexOf("%") && (k.y = 0, k.yPercent = la(z.y, C.yPercent)), k.rotation = ma("rotation" in z ? z.rotation : "shortRotation" in z ? z.shortRotation + "_short" : C.rotation, C.rotation, "rotation", A), Ha && (k.rotationX = ma("rotationX" in z ? z.rotationX : "shortRotationX" in z ? z.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", A), k.rotationY = ma("rotationY" in z ? z.rotationY : "shortRotationY" in z ? z.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", A)), k.skewX = ma(z.skewX, C.skewX), k.skewY = ma(z.skewY, C.skewY)
                        }
                        for (Ha && null != z.force3D && (C.force3D = z.force3D, n = !0), m = C.force3D || C.z || C.rotationX || C.rotationY || k.z || k.rotationX || k.rotationY || k.perspective, m || null == z.scale || (k.scaleZ = 1); --y > -1;) u = Da[y], D = k[u] - C[u], (D > x || -x > D || null != z[u] || null != N[u]) && (n = !0, f = new va(C, u, C[u], D, f), u in A && (f.e = A[u]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
                        return D = "function" == typeof z.transformOrigin ? z.transformOrigin(r, q) : z.transformOrigin, C.svg && (D || z.svgOrigin) && (p = C.xOffset, s = C.yOffset, Na(a, ja(D), k, z.svgOrigin, z.smoothOrigin), f = wa(C, "xOrigin", (v ? C : k).xOrigin, k.xOrigin, f, B), f = wa(C, "yOrigin", (v ? C : k).yOrigin, k.yOrigin, f, B), (p !== C.xOffset || s !== C.yOffset) && (f = wa(C, "xOffset", v ? p : C.xOffset, C.xOffset, f, B), f = wa(C, "yOffset", v ? s : C.yOffset, C.yOffset, f, B)), D = "0px 0px"), (D || Ha && m && C.zOrigin) && (Ea ? (n = !0, u = Ga, D || (D = (ba(a, u, e, !1, "50% 50%") + "").split(" "), D = D[0] + " " + D[1] + " " + C.zOrigin + "px"), D += "", f = new va(w, u, 0, 0, f, -1, B), f.b = w[u], f.plugin = h, Ha ? (l = C.zOrigin, D = D.split(" "), C.zOrigin = (D.length > 2 ? parseFloat(D[2]) : l) || 0, f.xs0 = f.e = D[0] + " " + (D[1] || "50%") + " 0px", f = new va(C, "zOrigin", 0, 0, f, -1, f.n), f.b = l, f.xs0 = f.e = C.zOrigin) : f.xs0 = f.e = D) : ja(D + "", C)), n && (d._transformType = C.svg && Ca || !m && 3 !== this._transformType ? 2 : 3), j && (i.scale = j), f
                    },
                    allowFunc: !0,
                    prefix: !0
                }), Aa("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), Aa("clipPath", { defaultValue: "inset(0%)", prefix: !0, multi: !0, formatter: sa("inset(0% 0% 0% 0%)", !1, !0) }), Aa("borderRadius", {
                    defaultValue: "0px",
                    parser: function(a, b, c, f, g, h) {
                        b = this.format(b);
                        var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            z = a.style;
                        for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++) this.p.indexOf("border") && (y[j] = $(y[j])), m = l = ba(a, y[j], e, !1, "0px"), -1 !== m.indexOf(" ") && (l = m.split(" "), m = l[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), u = "=" === n.charAt(1), u ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "").length)), "" === s && (s = d[c] || t), s !== t && (v = ca(a, "borderLeft", o, t), w = ca(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (x = ca(a, "borderLeft", 1, "em"), m = v / x + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), g = xa(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
                        return g
                    },
                    prefix: !0,
                    formatter: sa("0px 0px 0px 0px", !1, !0)
                }), Aa("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", { defaultValue: "0px", parser: function(a, b, c, d, f, g) { return xa(a.style, c, this.format(ba(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f) }, prefix: !0, formatter: sa("0px 0px", !1, !0) }), Aa("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(a, b, c, d, f, g) {
                        var h, i, j, k, l, m, n = "background-position",
                            o = e || aa(a, null),
                            q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                            r = this.format(b);
                        if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = ba(a, "backgroundImage").replace(E, ""), m && "none" !== m)) {
                            for (h = q.split(" "), i = r.split(" "), S.setAttribute("src", m), j = 2; --j > -1;) q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - S.width : a.offsetHeight - S.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
                            q = h.join(" ")
                        }
                        return this.parseComplex(a.style, q, r, f, g)
                    },
                    formatter: ja
                }), Aa("backgroundSize", { defaultValue: "0 0", formatter: function(a) { return a += "", "co" === a.substr(0, 2) ? a : ja(-1 === a.indexOf(" ") ? a + " " + a : a) } }), Aa("perspective", { defaultValue: "0px", prefix: !0 }), Aa("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), Aa("transformStyle", { prefix: !0 }), Aa("backfaceVisibility", { prefix: !0 }), Aa("userSelect", { prefix: !0 }), Aa("margin", { parser: ta("marginTop,marginRight,marginBottom,marginLeft") }), Aa("padding", { parser: ta("paddingTop,paddingRight,paddingBottom,paddingLeft") }), Aa("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function(a, b, c, d, f, g) { var h, i, j; return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(ba(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g) } }), Aa("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), Aa("autoRound,strictUnits", { parser: function(a, b, c, d, e) { return e } }), Aa("border", {
                    defaultValue: "0px solid #000",
                    parser: function(a, b, c, d, f, g) {
                        var h = ba(a, "borderTopWidth", e, !1, "0px"),
                            i = this.format(b).split(" "),
                            j = i[0].replace(x, "");
                        return "px" !== j && (h = parseFloat(h) / ca(a, "borderTopWidth", 1, j) + j), this.parseComplex(a.style, this.format(h + " " + ba(a, "borderTopStyle", e, !1, "solid") + " " + ba(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g)
                    },
                    color: !0,
                    formatter: function(a) { var b = a.split(" "); return b[0] + " " + (b[1] || "solid") + " " + (a.match(ra) || ["#000"])[0] }
                }), Aa("borderWidth", { parser: ta("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), Aa("float,cssFloat,styleFloat", {
                    parser: function(a, b, c, d, e, f) {
                        var g = a.style,
                            h = "cssFloat" in g ? "cssFloat" : "styleFloat";
                        return new va(g, h, 0, 0, e, -1, c, !1, 0, g[h], b)
                    }
                });
                var Wa = function(a) {
                    var b, c = this.t,
                        d = c.filter || ba(this.data, "filter") || "",
                        e = this.s + this.c * a | 0;
                    100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !ba(this.data, "filter")) : (c.filter = d.replace(A, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(y, "opacity=" + e))
                };
                Aa("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(a, b, c, d, f, g) {
                        var h = parseFloat(ba(a, "opacity", e, !1, "1")),
                            i = a.style,
                            j = "autoAlpha" === c;
                        return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === ba(a, "visibility", e) && 0 !== b && (h = 0), V ? f = new va(i, "opacity", h, b - h, f) : (f = new va(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Wa), j && (f = new va(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f
                    }
                });
                var Xa = function(a, b) { b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(C, "-$1").toLowerCase())) : a.removeAttribute(b)) },
                    Ya = function(a) {
                        if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                            this.t.setAttribute("class", 0 === a ? this.b : this.e);
                            for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Xa(c, b.p), b = b._next;
                            1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                Aa("className", {
                    parser: function(a, b, d, f, g, h, i) {
                        var j, k, l, m, n, o = a.getAttribute("class") || "",
                            p = a.style.cssText;
                        if (g = f._classNamePT = new va(a, d, 0, 0, g, 2), g.setRatio = Ya, g.pr = -11, c = !0, g.b = o, k = ea(a, e), l = a._gsClassPT) {
                            for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
                            l.setRatio(1)
                        }
                        return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = fa(a, k, ea(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText !== p && (a.style.cssText = p), g = g.xfirst = f.parse(a, j.difs, g, h)
                    }
                });
                var Za = function(a) {
                    if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var b, c, d, e, f, g = this.t.style,
                            h = i.transform.parse;
                        if ("all" === this.e) g.cssText = "", e = !0;
                        else
                            for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) c = b[d], i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ga : i[c].p), Xa(g, c);
                        e && (Xa(g, Ea), f = this.t._gsTransform, f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (Aa("clearProps", { parser: function(a, b, d, e, f) { return f = new va(a, d, 0, 0, f, 2), f.setRatio = Za, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f } }), j = "bezier,throwProps,physicsProps,physics2D".split(","), ya = j.length; ya--;) Ba(j[ya]);
                j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function(a, b, h, j) {
                    if (!a.nodeType) return !1;
                    this._target = q = a, this._tween = h, this._vars = b, r = j, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = aa(a, ""), f = this._overwriteProps;
                    var n, p, s, t, u, v, w, x, y, A = a.style;
                    if (l && "" === A.zIndex && (n = ba(a, "zIndex", e), ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)), "string" == typeof b && (t = A.cssText, n = ea(a, e), A.cssText = t + ";" + b, n = fa(a, n, ea(a)).difs, !V && z.test(b) && (n.opacity = parseFloat(RegExp.$1)), b = n, A.cssText = t), b.className ? this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = p = this.parse(a, b, null), this._transformType) {
                        for (y = 3 === this._transformType, Ea ? m && (l = !0, "" === A.zIndex && (w = ba(a, "zIndex", e), ("auto" === w || "" === w) && this._addLazySet(A, "zIndex", 0)), o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (y ? "visible" : "hidden"))) : A.zoom = 1, s = p; s && s._next;) s = s._next;
                        x = new va(a, "transform", 0, 0, null, 2), this._linkCSSP(x, null, s), x.setRatio = Ea ? Va : Ua, x.data = this._transform || Ta(a, e, !0), x.tween = h, x.pr = -1, f.pop()
                    }
                    if (c) {
                        for (; p;) {
                            for (v = p._next, s = t; s && s.pr > p.pr;) s = s._next;
                            (p._prev = s ? s._prev : u) ? p._prev._next = p: t = p, (p._next = s) ? s._prev = p : u = p, p = v
                        }
                        this._firstPT = t
                    }
                    return !0
                }, j.parse = function(a, b, c, f) {
                    var g, h, j, l, m, n, o, p, s, t, u = a.style;
                    for (g in b) {
                        if (n = b[g], h = i[g], "function" != typeof n || h && h.allowFunc || (n = n(r, q)), h) c = h.parse(a, n, g, this, c, f, b);
                        else {
                            if ("--" === g.substr(0, 2)) { this._tween._propLookup[g] = this._addTween.call(this._tween, a.style, "setProperty", aa(a).getPropertyValue(g) + "", n + "", g, !1, g); continue }
                            m = ba(a, g, e) + "", s = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && B.test(n) ? (s || (n = pa(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = xa(u, g, m, n, !0, "transparent", c, 0, f)) : s && K.test(n) ? c = xa(u, g, m, n, !0, null, c, 0, f) : (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ia(a, g, e), o = "px") : "left" === g || "top" === g ? (j = da(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), t = s && "=" === n.charAt(1), t ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(x, "")) : (l = parseFloat(n), p = s ? n.replace(x, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (t ? l + j : l) + p : b[g], o !== p && ("" !== p || "lineHeight" === g) && (l || 0 === l) && j && (j = ca(a, g, j, o), "%" === p ? (j /= ca(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= ca(a, g, 1, p) : "px" !== p && (l = ca(a, g, l, p), p = "px"), t && (l || 0 === l) && (n = l + j + p)), t && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== u[g] && (n || n + "" != "NaN" && null != n) ? (c = new va(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : X("invalid " + g + " tween value: " + b[g]) : (c = new va(u, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p))
                        }
                        f && c && !c.plugin && (c.plugin = f)
                    }
                    return c
                }, j.setRatio = function(a) {
                    var b, c, d, e = this._firstPT,
                        f = 1e-6;
                    if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; e;) {
                                if (b = e.c * a + e.s, e.r ? b = e.r(b) : f > b && b > -f && (b = 0), e.type)
                                    if (1 === e.type)
                                        if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                        else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                                else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                                else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                                else {
                                    for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                    e.t[e.p] = c
                                } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                                else e.t[e.p] = b + e.xs0;
                                e = e._next
                            } else
                                for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
                        else
                            for (; e;) {
                                if (2 !== e.type)
                                    if (e.r && -1 !== e.type)
                                        if (b = e.r(e.s + e.c), e.type) {
                                            if (1 === e.type) {
                                                for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                                e.t[e.p] = c
                                            }
                                        } else e.t[e.p] = b + e.xs0;
                                else e.t[e.p] = e.e;
                                else e.setRatio(a);
                                e = e._next
                            }
                }, j._enableTransforms = function(a) { this._transform = this._transform || Ta(this._target, e, !0), this._transformType = this._transform.svg && Ca || !a && 3 !== this._transformType ? 2 : 3 };
                var $a = function(a) { this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0) };
                j._addLazySet = function(a, b, c) {
                    var d = this._firstPT = new va(a, b, 0, 0, this._firstPT, 2);
                    d.e = c, d.setRatio = $a, d.data = this
                }, j._linkCSSP = function(a, b, c, d) { return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a }, j._mod = function(a) { for (var b = this._firstPT; b;) "function" == typeof a[b.p] && (b.r = a[b.p]), b = b._next }, j._kill = function(b) {
                    var c, d, e, f = b;
                    if (b.autoAlpha || b.alpha) {
                        f = {};
                        for (d in b) f[d] = b[d];
                        f.opacity = 1, f.autoAlpha && (f.visibility = 1)
                    }
                    for (b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), c = this._firstPT; c;) c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), d = c.plugin), c = c._next;
                    return a.prototype._kill.call(this, f)
                };
                var _a = function(a, b, c) {
                    var d, e, f, g;
                    if (a.slice)
                        for (e = a.length; --e > -1;) _a(a[e], b, c);
                    else
                        for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push(ea(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || _a(f, b, c)
                };
                return g.cascadeTo = function(a, c, d) {
                    var e, f, g, h, i = b.to(a, c, d),
                        j = [i],
                        k = [],
                        l = [],
                        m = [],
                        n = b._internals.reservedProps;
                    for (a = i._targets || i.target, _a(a, k, m), i.render(c, !0, !0), _a(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;)
                        if (f = fa(m[e], k[e], l[e]), f.firstMPT) {
                            f = f.difs;
                            for (g in d) n[g] && (f[g] = d[g]);
                            h = {};
                            for (g in f) h[g] = k[e][g];
                            j.push(b.fromTo(m[e], c, h, f))
                        }
                    return j
                }, a.activate([g]), g
            }, !0),
            function() {
                var a = _gsScope._gsDefine.plugin({ propName: "roundProps", version: "1.7.0", priority: -1, API: 2, init: function(a, b, c) { return this._tween = c, !0 } }),
                    b = function(a) { var b = 1 > a ? Math.pow(10, (a + "").length - 2) : 1; return function(c) { return (Math.round(c / a) * a * b | 0) / b } },
                    c = function(a, b) { for (; a;) a.f || a.blob || (a.m = b || Math.round), a = a._next },
                    d = a.prototype;
                d._onInitAllProps = function() {
                    var a, d, e, f, g = this._tween,
                        h = g.vars.roundProps,
                        i = {},
                        j = g._propLookup.roundProps;
                    if ("object" != typeof h || h.push)
                        for ("string" == typeof h && (h = h.split(",")), e = h.length; --e > -1;) i[h[e]] = Math.round;
                    else
                        for (f in h) i[f] = b(h[f]);
                    for (f in i)
                        for (a = g._firstPT; a;) d = a._next, a.pg ? a.t._mod(i) : a.n === f && (2 === a.f && a.t ? c(a.t._firstPT, i[f]) : (this._add(a.t, f, a.s, a.c, i[f]), d && (d._prev = a._prev), a._prev ? a._prev._next = d : g._firstPT === a && (g._firstPT = d), a._next = a._prev = null, g._propLookup[f] = j)), a = d;
                    return !1
                }, d._add = function(a, b, c, d, e) { this._addTween(a, b, c, c + d, b, e || Math.round), this._overwriteProps.push(b) }
            }(),
            function() { _gsScope._gsDefine.plugin({ propName: "attr", API: 2, version: "0.6.1", init: function(a, b, c, d) { var e, f; if ("function" != typeof a.setAttribute) return !1; for (e in b) f = b[e], "function" == typeof f && (f = f(d, a)), this._addTween(a, "setAttribute", a.getAttribute(e) + "", f + "", e, !1, e), this._overwriteProps.push(e); return !0 } }) }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.1",
                API: 2,
                init: function(a, b, c, d) {
                    "object" != typeof b && (b = { rotation: b }), this.finals = {};
                    var e, f, g, h, i, j, k = b.useRadians === !0 ? 2 * Math.PI : 360,
                        l = 1e-6;
                    for (e in b) "useRadians" !== e && (h = b[e], "function" == typeof h && (h = h(d, a)), j = (h + "").split("_"), f = j[0], g = parseFloat("function" != typeof a[e] ? a[e] : a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]()), h = this.finals[e] = "string" == typeof f && "=" === f.charAt(1) ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) || 0, i = h - g, j.length && (f = j.join("_"), -1 !== f.indexOf("short") && (i %= k, i !== i % (k / 2) && (i = 0 > i ? i + k : i - k)), -1 !== f.indexOf("_cw") && 0 > i ? i = (i + 9999999999 * k) % k - (i / k | 0) * k : -1 !== f.indexOf("ccw") && i > 0 && (i = (i - 9999999999 * k) % k - (i / k | 0) * k)), (i > l || -l > i) && (this._addTween(a, e, g, g + i, e), this._overwriteProps.push(e)));
                    return !0
                },
                set: function(a) {
                    var b;
                    if (1 !== a) this._super.setRatio.call(this, a);
                    else
                        for (b = this._firstPT; b;) b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(a) {
                var b, c, d, e, f = _gsScope.GreenSockGlobals || _gsScope,
                    g = f.com.greensock,
                    h = 2 * Math.PI,
                    i = Math.PI / 2,
                    j = g._class,
                    k = function(b, c) {
                        var d = j("easing." + b, function() {}, !0),
                            e = d.prototype = new a;
                        return e.constructor = d, e.getRatio = c, d
                    },
                    l = a.register || function() {},
                    m = function(a, b, c, d, e) { var f = j("easing." + a, { easeOut: new b, easeIn: new c, easeInOut: new d }, !0); return l(f, a), f },
                    n = function(a, b, c) { this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a) },
                    o = function(b, c) {
                        var d = j("easing." + b, function(a) { this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1 }, !0),
                            e = d.prototype = new a;
                        return e.constructor = d, e.getRatio = c, e.config = function(a) { return new d(a) }, d
                    },
                    p = m("Back", o("BackOut", function(a) { return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1 }), o("BackIn", function(a) { return a * a * ((this._p1 + 1) * a - this._p1) }), o("BackInOut", function(a) { return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2) })),
                    q = j("easing.SlowMo", function(a, b, c) { b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0 }, !0),
                    r = q.prototype = new a;
                return r.constructor = q, r.getRatio = function(a) { var b = a + (.5 - a) * this._p; return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 === a ? 0 : 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b }, q.ease = new q(.7, .7), r.config = q.config = function(a, b, c) { return new q(a, b, c) }, b = j("easing.SteppedEase", function(a, b) { a = a || 1, this._p1 = 1 / a, this._p2 = a + (b ? 0 : 1), this._p3 = b ? 1 : 0 }, !0), r = b.prototype = new a, r.constructor = b, r.getRatio = function(a) { return 0 > a ? a = 0 : a >= 1 && (a = .999999999), ((this._p2 * a | 0) + this._p3) * this._p1 }, r.config = b.config = function(a, c) { return new b(a, c) }, c = j("easing.ExpoScaleEase", function(a, b, c) { this._p1 = Math.log(b / a), this._p2 = b - a, this._p3 = a, this._ease = c }, !0), r = c.prototype = new a, r.constructor = c, r.getRatio = function(a) { return this._ease && (a = this._ease.getRatio(a)), (this._p3 * Math.exp(this._p1 * a) - this._p3) / this._p2 }, r.config = c.config = function(a, b, d) { return new c(a, b, d) }, d = j("easing.RoughEase", function(b) {
                    b = b || {};
                    for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), m = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --m > -1;) c = o ? Math.random() : 1 / l * m, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = f * f * .5 * r) : (f = 2 * (1 - c), e = f * f * .5 * r), o ? d += Math.random() * e - .5 * e : m % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = { x: c, y: d };
                    for (j.sort(function(a, b) { return a.x - b.x }), h = new n(1, 1, null), m = l; --m > -1;) g = j[m], h = new n(g.x, g.y, h);
                    this._prev = new n(0, 0, 0 !== h.t ? h : h.next)
                }, !0), r = d.prototype = new a, r.constructor = d, r.getRatio = function(a) {
                    var b = this._prev;
                    if (a > b.t) {
                        for (; b.next && a >= b.t;) b = b.next;
                        b = b.prev
                    } else
                        for (; b.prev && a <= b.t;) b = b.prev;
                    return this._prev = b, b.v + (a - b.t) / b.gap * b.c
                }, r.config = function(a) { return new d(a) }, d.ease = new d, m("Bounce", k("BounceOut", function(a) { return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375 }), k("BounceIn", function(a) { return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375) }), k("BounceInOut", function(a) { var b = .5 > a; return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5 })), m("Circ", k("CircOut", function(a) { return Math.sqrt(1 - (a -= 1) * a) }), k("CircIn", function(a) { return -(Math.sqrt(1 - a * a) - 1) }), k("CircInOut", function(a) { return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1) })), e = function(b, c, d) {
                    var e = j("easing." + b, function(a, b) { this._p1 = a >= 1 ? a : 1, this._p2 = (b || d) / (1 > a ? a : 1), this._p3 = this._p2 / h * (Math.asin(1 / this._p1) || 0), this._p2 = h / this._p2 }, !0),
                        f = e.prototype = new a;
                    return f.constructor = e, f.getRatio = c, f.config = function(a, b) { return new e(a, b) }, e
                }, m("Elastic", e("ElasticOut", function(a) { return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1 }, .3), e("ElasticIn", function(a) { return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) }, .3), e("ElasticInOut", function(a) { return (a *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1 }, .45)), m("Expo", k("ExpoOut", function(a) { return 1 - Math.pow(2, -10 * a) }), k("ExpoIn", function(a) { return Math.pow(2, 10 * (a - 1)) - .001 }), k("ExpoInOut", function(a) { return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1))) })), m("Sine", k("SineOut", function(a) { return Math.sin(a * i) }), k("SineIn", function(a) { return -Math.cos(a * i) + 1 }), k("SineInOut", function(a) { return -.5 * (Math.cos(Math.PI * a) - 1) })), j("easing.EaseLookup", { find: function(b) { return a.map[b] } }, !0), l(f.SlowMo, "SlowMo", "ease,"), l(d, "RoughEase", "ease,"), l(b, "SteppedEase", "ease,"), p
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(a, b) {
        "use strict";
        var c = {},
            d = a.document,
            e = a.GreenSockGlobals = a.GreenSockGlobals || a,
            f = e[b];
        if (f) return "undefined" != typeof module && module.exports && (module.exports = f), f;
        var g, h, i, j, k, l = function(a) {
                var b, c = a.split("."),
                    d = e;
                for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
                return d
            },
            m = l("com.greensock"),
            n = 1e-8,
            o = function(a) {
                var b, c = [],
                    d = a.length;
                for (b = 0; b !== d; c.push(a[b++]));
                return c
            },
            p = function() {},
            q = function() {
                var a = Object.prototype.toString,
                    b = a.call([]);
                return function(c) { return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b) }
            }(),
            r = {},
            s = function(d, f, g, h) {
                this.sc = r[d] ? r[d].sc : [], r[d] = this, this.gsClass = null, this.func = g;
                var i = [];
                this.check = function(j) {
                    for (var k, m, n, o, p = f.length, q = p; --p > -1;)(k = r[f[p]] || new s(f[p], [])).gsClass ? (i[p] = k.gsClass, q--) : j && k.sc.push(this);
                    if (0 === q && g) {
                        if (m = ("com.greensock." + d).split("."), n = m.pop(), o = l(m.join("."))[n] = this.gsClass = g.apply(g, i), h)
                            if (e[n] = c[n] = o, "undefined" != typeof module && module.exports)
                                if (d === b) { module.exports = c[b] = o; for (p in c) o[p] = c[p] } else c[b] && (c[b][n] = o);
                        else "function" == typeof define && define.amd && define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function() { return o });
                        for (p = 0; p < this.sc.length; p++) this.sc[p].check()
                    }
                }, this.check(!0)
            },
            t = a._gsDefine = function(a, b, c, d) { return new s(a, b, c, d) },
            u = m._class = function(a, b, c) { return b = b || function() {}, t(a, [], function() { return b }, c), b };
        t.globals = e;
        var v = [0, 0, 1, 1],
            w = u("easing.Ease", function(a, b, c, d) { this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? v.concat(b) : v }, !0),
            x = w.map = {},
            y = w.register = function(a, b, c, d) {
                for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;)
                    for (f = i[j], e = d ? u("easing." + f, null, !0) : m.easing[f] || {}, g = k.length; --g > -1;) h = k[g], x[f + "." + h] = x[h + f] = e[h] = a.getRatio ? a : a[h] || new a
            };
        for (i = w.prototype, i._calcEnd = !1, i.getRatio = function(a) {
                if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
                var b = this._type,
                    c = this._power,
                    d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
                return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
            }, g = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], h = g.length; --h > -1;) i = g[h] + ",Power" + h, y(new w(null, null, 1, h), i, "easeOut", !0), y(new w(null, null, 2, h), i, "easeIn" + (0 === h ? ",easeNone" : "")), y(new w(null, null, 3, h), i, "easeInOut");
        x.linear = m.easing.Linear.easeIn, x.swing = m.easing.Quad.easeInOut;
        var z = u("events.EventDispatcher", function(a) { this._listeners = {}, this._eventTarget = a || this });
        i = z.prototype, i.addEventListener = function(a, b, c, d, e) {
            e = e || 0;
            var f, g, h = this._listeners[a],
                i = 0;
            for (this !== j || k || j.wake(), null == h && (this._listeners[a] = h = []), g = h.length; --g > -1;) f = h[g], f.c === b && f.s === c ? h.splice(g, 1) : 0 === i && f.pr < e && (i = g + 1);
            h.splice(i, 0, { c: b, s: c, up: d, pr: e })
        }, i.removeEventListener = function(a, b) {
            var c, d = this._listeners[a];
            if (d)
                for (c = d.length; --c > -1;)
                    if (d[c].c === b) return void d.splice(c, 1)
        }, i.dispatchEvent = function(a) {
            var b, c, d, e = this._listeners[a];
            if (e)
                for (b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;) d = e[b], d && (d.up ? d.c.call(d.s || c, { type: a, target: c }) : d.c.call(d.s || c))
        };
        var A = a.requestAnimationFrame,
            B = a.cancelAnimationFrame,
            C = Date.now || function() { return (new Date).getTime() },
            D = C();
        for (g = ["ms", "moz", "webkit", "o"], h = g.length; --h > -1 && !A;) A = a[g[h] + "RequestAnimationFrame"], B = a[g[h] + "CancelAnimationFrame"] || a[g[h] + "CancelRequestAnimationFrame"];
        u("Ticker", function(a, b) {
            var c, e, f, g, h, i = this,
                l = C(),
                m = b !== !1 && A ? "auto" : !1,
                o = 500,
                q = 33,
                r = "tick",
                s = function(a) {
                    var b, d, j = C() - D;
                    j > o && (l += j - q), D += j, i.time = (D - l) / 1e3, b = i.time - h, (!c || b > 0 || a === !0) && (i.frame++, h += b + (b >= g ? .004 : g - b), d = !0), a !== !0 && (f = e(s)), d && i.dispatchEvent(r)
                };
            z.call(i), i.time = i.frame = 0, i.tick = function() { s(!0) }, i.lagSmoothing = function(a, b) { return arguments.length ? (o = a || 1 / n, void(q = Math.min(b, o, 0))) : 1 / n > o }, i.sleep = function() { null != f && (m && B ? B(f) : clearTimeout(f), e = p, f = null, i === j && (k = !1)) }, i.wake = function(a) { null !== f ? i.sleep() : a ? l += -D + (D = C()) : i.frame > 10 && (D = C() - o + 5), e = 0 === c ? p : m && A ? A : function(a) { return setTimeout(a, 1e3 * (h - i.time) + 1 | 0) }, i === j && (k = !0), s(2) }, i.fps = function(a) { return arguments.length ? (c = a, g = 1 / (c || 60), h = this.time + g, void i.wake()) : c }, i.useRAF = function(a) { return arguments.length ? (i.sleep(), m = a, void i.fps(c)) : m }, i.fps(a), setTimeout(function() { "auto" === m && i.frame < 5 && "hidden" !== (d || {}).visibilityState && i.useRAF(!1) }, 1500)
        }), i = m.Ticker.prototype = new m.events.EventDispatcher, i.constructor = m.Ticker;
        var E = u("core.Animation", function(a, b) {
            if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = !!b.immediateRender, this.data = b.data, this._reversed = !!b.reversed, Z) {
                k || j.wake();
                var c = this.vars.useFrames ? Y : Z;
                c.add(this, c._time), this.vars.paused && this.paused(!0)
            }
        });
        j = E.ticker = new m.Ticker, i = E.prototype, i._dirty = i._gc = i._initted = i._paused = !1, i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, i._paused = !1;
        var F = function() {
            k && C() - D > 2e3 && ("hidden" !== (d || {}).visibilityState || !j.lagSmoothing()) && j.wake();
            var a = setTimeout(F, 2e3);
            a.unref && a.unref()
        };
        F(), i.play = function(a, b) { return null != a && this.seek(a, b), this.reversed(!1).paused(!1) }, i.pause = function(a, b) { return null != a && this.seek(a, b), this.paused(!0) }, i.resume = function(a, b) { return null != a && this.seek(a, b), this.paused(!1) }, i.seek = function(a, b) { return this.totalTime(Number(a), b !== !1) }, i.restart = function(a, b) { return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0) }, i.reverse = function(a, b) { return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1) }, i.render = function(a, b, c) {}, i.invalidate = function() { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this }, i.isActive = function() {
            var a, b = this._timeline,
                c = this._startTime;
            return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - n
        }, i._enabled = function(a, b) { return k || j.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1 }, i._kill = function(a, b) { return this._enabled(!1, !1) }, i.kill = function(a, b) { return this._kill(a, b), this }, i._uncache = function(a) { for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline; return this }, i._swapSelfInParams = function(a) { for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this); return c }, i._callback = function(a) {
            var b = this.vars,
                c = b[a],
                d = b[a + "Params"],
                e = b[a + "Scope"] || b.callbackScope || this,
                f = d ? d.length : 0;
            switch (f) {
                case 0:
                    c.call(e);
                    break;
                case 1:
                    c.call(e, d[0]);
                    break;
                case 2:
                    c.call(e, d[0], d[1]);
                    break;
                default:
                    c.apply(e, d)
            }
        }, i.eventCallback = function(a, b, c, d) {
            if ("on" === (a || "").substr(0, 2)) {
                var e = this.vars;
                if (1 === arguments.length) return e[a];
                null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = q(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
            }
            return this
        }, i.delay = function(a) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay }, i.duration = function(a) { return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration) }, i.totalDuration = function(a) { return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration }, i.time = function(a, b) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time }, i.totalTime = function(a, b, c) {
            if (k || j.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var d = this._totalDuration,
                        e = this._timeline;
                    if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
                        for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0),
                            e = e._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (K.length && _(), this.render(a, b, !1), K.length && _())
            }
            return this
        }, i.progress = i.totalProgress = function(a, b) { var c = this.duration(); return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio }, i.startTime = function(a) { return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime }, i.endTime = function(a) { return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale }, i.timeScale = function(a) { if (!arguments.length) return this._timeScale; var b, c; for (a = a || n, this._timeline && this._timeline.smoothChildTiming && (b = this._pauseTime, c = b || 0 === b ? b : this._timeline.totalTime(), this._startTime = c - (c - this._startTime) * this._timeScale / a), this._timeScale = a, c = this.timeline; c && c.timeline;) c._dirty = !0, c.totalDuration(), c = c.timeline; return this }, i.reversed = function(a) { return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }, i.paused = function(a) { if (!arguments.length) return this._paused; var b, c, d = this._timeline; return a != this._paused && d && (k || a || j.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this };
        var G = u("core.SimpleTimeline", function(a) { E.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0 });
        i = G.prototype = new E, i.constructor = G, i.kill()._gc = !1, i._first = i._last = i._recent = null, i._sortChildren = !1, i.add = i.insert = function(a, b, c, d) {
            var e, f;
            if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = this.rawTime() - (a._timeline.rawTime() - a._pauseTime)), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren)
                for (f = a._startTime; e && e._startTime > f;) e = e._prev;
            return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this
        }, i._remove = function(a, b) { return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this }, i.render = function(a, b, c) { var d, e = this._first; for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused && !e._gc) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d }, i.rawTime = function() { return k || j.wake(), this._totalTime };
        var H = u("TweenLite", function(b, c, d) {
                if (E.call(this, c, d), this.render = H.prototype.render, null == b) throw "Cannot tween a null target.";
                this.target = b = "string" != typeof b ? b : H.selector(b) || b;
                var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
                    i = this.vars.overwrite;
                if (this._overwrite = i = null == i ? X[H.defaultOverwrite] : "number" == typeof i ? i >> 0 : X[i], (h || b instanceof Array || b.push && q(b)) && "number" != typeof b[0])
                    for (this._targets = g = o(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(o(f))) : (this._siblings[e] = aa(f, this, !1), 1 === i && this._siblings[e].length > 1 && ca(f, this, null, 1, this._siblings[e])) : (f = g[e--] = H.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
                else this._propLookup = {}, this._siblings = aa(b, this, !1), 1 === i && this._siblings.length > 1 && ca(b, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -n, this.render(Math.min(0, -this._delay)))
            }, !0),
            I = function(b) { return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType) },
            J = function(a, b) {
                var c, d = {};
                for (c in a) W[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!T[c] || T[c] && T[c]._autoCSS) || (d[c] = a[c], delete a[c]);
                a.css = d
            };
        i = H.prototype = new E, i.constructor = H, i.kill()._gc = !1, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, i._notifyPluginsOfEnabled = i._lazy = !1, H.version = "2.1.3", H.defaultEase = i._ease = new w(null, null, 1, 1), H.defaultOverwrite = "auto", H.ticker = j, H.autoSleep = 120, H.lagSmoothing = function(a, b) { j.lagSmoothing(a, b) }, H.selector = a.$ || a.jQuery || function(b) { var c = a.$ || a.jQuery; return c ? (H.selector = c, c(b)) : (d || (d = a.document), d ? d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b) };
        var K = [],
            L = {},
            M = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            N = /[\+-]=-?[\.\d]/,
            O = function(a) { for (var b, c = this._firstPT, d = 1e-6; c;) b = c.blob ? 1 === a && null != this.end ? this.end : a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m.call(this._tween, b, this._target || c.t, this._tween) : d > b && b > -d && !c.blob && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next },
            P = function(a) { return (1e3 * a | 0) / 1e3 + "" },
            Q = function(a, b, c, d) {
                var e, f, g, h, i, j, k, l = [],
                    m = 0,
                    n = "",
                    o = 0;
                for (l.start = a, l.end = b, a = l[0] = a + "", b = l[1] = b + "", c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(M) || [], f = b.match(M) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; i > h; h++) k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = { _next: l._firstPT, t: l, p: l.length - 1, s: g, c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0, f: 0, m: o && 4 > o ? Math.round : P }), m += k.length;
                return n += b.substr(m), n && l.push(n), l.setRatio = O, N.test(b) && (l.end = null), l
            },
            R = function(a, b, c, d, e, f, g, h, i) {
                "function" == typeof d && (d = d(i || 0, a));
                var j, k = typeof a[b],
                    l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3),
                    m = "get" !== c ? c : l ? g ? a[l](g) : a[l]() : a[b],
                    n = "string" == typeof d && "=" === d.charAt(1),
                    o = { t: a, p: b, s: m, f: "function" === k, pg: 0, n: e || b, m: f ? "function" == typeof f ? f : Math.round : 0, pr: 0, c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0 };
                return ("number" != typeof m || "number" != typeof d && !n) && (g || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = g, j = Q(m, n ? parseFloat(o.s) + o.c + (o.s + "").replace(/[0-9\-\.]/g, "") : d, h || H.defaultStringFilter, o), o = { t: j, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: e || b, pr: 0, m: 0 }) : (o.s = parseFloat(m), n || (o.c = parseFloat(d) - o.s || 0))), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o) : void 0
            },
            S = H._internals = { isArray: q, isSelector: I, lazyTweens: K, blobDif: Q },
            T = H._plugins = {},
            U = S.tweenLookup = {},
            V = 0,
            W = S.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1, yoyoEase: 1, stagger: 1 },
            X = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0 },
            Y = E._rootFramesTimeline = new G,
            Z = E._rootTimeline = new G,
            $ = 30,
            _ = S.lazyRender = function() {
                var a, b, c = K.length;
                for (L = {}, a = 0; c > a; a++) b = K[a], b && b._lazy !== !1 && (b.render(b._lazy[0], b._lazy[1], !0), b._lazy = !1);
                K.length = 0
            };
        Z._startTime = j.time, Y._startTime = j.frame, Z._active = Y._active = !0, setTimeout(_, 1), E._updateRoot = H.render = function() {
            var a, b, c;
            if (K.length && _(), Z.render((j.time - Z._startTime) * Z._timeScale, !1, !1), Y.render((j.frame - Y._startTime) * Y._timeScale, !1, !1), K.length && _(), j.frame >= $) {
                $ = j.frame + (parseInt(H.autoSleep, 10) || 120);
                for (c in U) {
                    for (b = U[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
                    0 === b.length && delete U[c]
                }
                if (c = Z._first, (!c || c._paused) && H.autoSleep && !Y._first && 1 === j._listeners.tick.length) {
                    for (; c && c._paused;) c = c._next;
                    c || j.sleep()
                }
            }
        }, j.addEventListener("tick", E._updateRoot);
        var aa = function(a, b, c) {
                var d, e, f = a._gsTweenID;
                if (U[f || (a._gsTweenID = f = "t" + V++)] || (U[f] = { target: a, tweens: [] }), b && (d = U[f].tweens, d[e = d.length] = b, c))
                    for (; --e > -1;) d[e] === b && d.splice(e, 1);
                return U[f].tweens
            },
            ba = function(a, b, c, d) { var e, f, g = a.vars.onOverwrite; return g && (e = g(a, b, c, d)), g = H.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1 },
            ca = function(a, b, c, d, e) {
                var f, g, h, i;
                if (1 === d || d >= 4) {
                    for (i = e.length, f = 0; i > f; f++)
                        if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);
                        else if (5 === d) break;
                    return g
                }
                var j, k = b._startTime + n,
                    l = [],
                    m = 0,
                    o = 0 === b._duration;
                for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || da(b, 0, o), 0 === da(h, j, o) && (l[m++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2 * n || (l[m++] = h)));
                for (f = m; --f > -1;)
                    if (h = l[f], i = h._firstPT, 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted && i) {
                        if (2 !== d && !ba(h, b)) continue;
                        h._enabled(!1, !1) && (g = !0)
                    }
                return g
            },
            da = function(a, b, c) {
                for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                    if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                    d = d._timeline
                }
                return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * n > f - b ? n : (f += a.totalDuration() / a._timeScale / e) > b + n ? 0 : f - b - n
            };
        i._init = function() {
            var a, b, c, d, e, f, g = this.vars,
                h = this._overwrittenProps,
                i = this._duration,
                j = !!g.immediateRender,
                k = g.ease,
                l = this._startAt;
            if (g.startAt) {
                l && (l.render(-1, !0), l.kill()), e = {};
                for (d in g.startAt) e[d] = g.startAt[d];
                if (e.data = "isStart", e.overwrite = !1, e.immediateRender = !0, e.lazy = j && g.lazy !== !1, e.startAt = e.delay = null, e.onUpdate = g.onUpdate, e.onUpdateParams = g.onUpdateParams, e.onUpdateScope = g.onUpdateScope || g.callbackScope || this, this._startAt = H.to(this.target || {}, 0, e), j)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== i) return
            } else if (g.runBackwards && 0 !== i)
                if (l) l.render(-1, !0), l.kill(), this._startAt = null;
                else { 0 !== this._time && (j = !1), c = {}; for (d in g) W[d] && "autoCSS" !== d || (c[d] = g[d]); if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && g.lazy !== !1, c.immediateRender = j, this._startAt = H.to(this.target, 0, c), j) { if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null) }
            if (this._ease = k = k ? k instanceof w ? k : "function" == typeof k ? new w(k, g.easeParams) : x[k] || H.defaultEase : H.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (f = this._targets.length, a = 0; f > a; a++) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);
            else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
            if (b && H._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards)
                for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
            this._onUpdate = g.onUpdate, this._initted = !0
        }, i._initProps = function(b, c, d, e, f) {
            var g, h, i, j, k, l;
            if (null == b) return !1;
            L[b._gsTweenID] && _(), this.vars.css || b.style && b !== a && b.nodeType && T.css && this.vars.autoCSS !== !1 && J(this.vars, b);
            for (g in this.vars)
                if (l = this.vars[g], W[g]) l && (l instanceof Array || l.push && q(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));
                else if (T[g] && (j = new T[g])._onInitTween(b, this.vars[g], this, f)) {
                for (this._firstPT = k = { _next: this._firstPT, t: j, p: "setRatio", s: 0, c: 1, f: 1, n: g, pg: 1, pr: j._priority, m: 0 }, h = j._overwriteProps.length; --h > -1;) c[j._overwriteProps[h]] = this._firstPT;
                (j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k)
            } else c[g] = R.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
            return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && ca(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e, f)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[b._gsTweenID] = !0), i)
        }, i.render = function(a, b, c) {
            var d, e, f, g, h = this,
                i = h._time,
                j = h._duration,
                k = h._rawPrevTime;
            if (a >= j - n && a >= 0) h._totalTime = h._time = j, h.ratio = h._ease._calcEnd ? h._ease.getRatio(1) : 1, h._reversed || (d = !0, e = "onComplete", c = c || h._timeline.autoRemoveChildren), 0 === j && (h._initted || !h.vars.lazy || c) && (h._startTime === h._timeline._duration && (a = 0), (0 > k || 0 >= a && a >= -n || k === n && "isPause" !== h.data) && k !== a && (c = !0, k > n && (e = "onReverseComplete")), h._rawPrevTime = g = !b || a || k === a ? a : n);
            else if (n > a) h._totalTime = h._time = 0, h.ratio = h._ease._calcEnd ? h._ease.getRatio(0) : 0, (0 !== i || 0 === j && k > 0) && (e = "onReverseComplete", d = h._reversed), a > -n ? a = 0 : 0 > a && (h._active = !1, 0 === j && (h._initted || !h.vars.lazy || c) && (k >= 0 && (k !== n || "isPause" !== h.data) && (c = !0), h._rawPrevTime = g = !b || a || k === a ? a : n)), (!h._initted || h._startAt && h._startAt.progress()) && (c = !0);
            else if (h._totalTime = h._time = a, h._easeType) {
                var l = a / j,
                    m = h._easeType,
                    o = h._easePower;
                (1 === m || 3 === m && l >= .5) && (l = 1 - l), 3 === m && (l *= 2), 1 === o ? l *= l : 2 === o ? l *= l * l : 3 === o ? l *= l * l * l : 4 === o && (l *= l * l * l * l), h.ratio = 1 === m ? 1 - l : 2 === m ? l : .5 > a / j ? l / 2 : 1 - l / 2
            } else h.ratio = h._ease.getRatio(a / j);
            if (h._time !== i || c) {
                if (!h._initted) {
                    if (h._init(), !h._initted || h._gc) return;
                    if (!c && h._firstPT && (h.vars.lazy !== !1 && h._duration || h.vars.lazy && !h._duration)) return h._time = h._totalTime = i, h._rawPrevTime = k, K.push(h), void(h._lazy = [a, b]);
                    h._time && !d ? h.ratio = h._ease.getRatio(h._time / j) : d && h._ease._calcEnd && (h.ratio = h._ease.getRatio(0 === h._time ? 0 : 1))
                }
                for (h._lazy !== !1 && (h._lazy = !1), h._active || !h._paused && h._time !== i && a >= 0 && (h._active = !0), 0 === i && (h._startAt && (a >= 0 ? h._startAt.render(a, !0, c) : e || (e = "_dummyGS")), h.vars.onStart && (0 !== h._time || 0 === j) && (b || h._callback("onStart"))), f = h._firstPT; f;) f.f ? f.t[f.p](f.c * h.ratio + f.s) : f.t[f.p] = f.c * h.ratio + f.s, f = f._next;
                h._onUpdate && (0 > a && h._startAt && a !== -1e-4 && h._startAt.render(a, !0, c), b || (h._time !== i || d || c) && h._callback("onUpdate")), e && (!h._gc || c) && (0 > a && h._startAt && !h._onUpdate && a !== -1e-4 && h._startAt.render(a, !0, c), d && (h._timeline.autoRemoveChildren && h._enabled(!1, !1), h._active = !1), !b && h.vars[e] && h._callback(e), 0 === j && h._rawPrevTime === n && g !== n && (h._rawPrevTime = 0))
            }
        }, i._kill = function(a, b, c) {
            if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            b = "string" != typeof b ? b || this._targets || this.target : H.selector(b) || b;
            var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline,
                n = this._firstPT;
            if ((q(b) || I(b)) && "number" != typeof b[0])
                for (d = b.length; --d > -1;) this._kill(a, b[d], c) && (i = !0);
            else {
                if (this._targets) {
                    for (d = this._targets.length; --d > -1;)
                        if (b === this._targets[d]) { h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all"; break }
                } else {
                    if (b !== this.target) return !1;
                    h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                }
                if (h) { if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (H.onOverwrite || this.vars.onOverwrite)) { for (f in j) h[f] && (l || (l = []), l.push(f)); if ((l || !a) && !ba(this, c, b, l)) return !1 } for (f in j)(g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);!this._firstPT && this._initted && n && this._enabled(!1, !1) }
            }
            return i
        }, i.invalidate = function() { this._notifyPluginsOfEnabled && H._onPluginEvent("_onDisable", this); var a = this._time; return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -n, this.render(a, !1, this.vars.lazy !== !1)), this }, i._enabled = function(a, b) {
            if (k || j.wake(), a && this._gc) {
                var c, d = this._targets;
                if (d)
                    for (c = d.length; --c > -1;) this._siblings[c] = aa(d[c], this, !0);
                else this._siblings = aa(this.target, this, !0)
            }
            return E.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? H._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
        }, H.to = function(a, b, c) { return new H(a, b, c) }, H.from = function(a, b, c) { return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new H(a, b, c) }, H.fromTo = function(a, b, c, d) { return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new H(a, b, d) }, H.delayedCall = function(a, b, c, d, e) { return new H(b, 0, { delay: a, onComplete: b, onCompleteParams: c, callbackScope: d, onReverseComplete: b, onReverseCompleteParams: c, immediateRender: !1, lazy: !1, useFrames: e, overwrite: 0 }) }, H.set = function(a, b) { return new H(a, 0, b) }, H.getTweensOf = function(a, b) {
            if (null == a) return [];
            a = "string" != typeof a ? a : H.selector(a) || a;
            var c, d, e, f;
            if ((q(a) || I(a)) && "number" != typeof a[0]) {
                for (c = a.length, d = []; --c > -1;) d = d.concat(H.getTweensOf(a[c], b));
                for (c = d.length; --c > -1;)
                    for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
            } else if (a._gsTweenID)
                for (d = aa(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
            return d || []
        }, H.killTweensOf = H.killDelayedCallsTo = function(a, b, c) { "object" == typeof b && (c = b, b = !1); for (var d = H.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a) };
        var ea = u("plugins.TweenPlugin", function(a, b) { this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = ea.prototype }, !0);
        if (i = ea.prototype, ea.version = "1.19.0", ea.API = 2, i._firstPT = null, i._addTween = R, i.setRatio = O, i._kill = function(a) {
                var b, c = this._overwriteProps,
                    d = this._firstPT;
                if (null != a[this._propName]) this._overwriteProps = [];
                else
                    for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
                for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
                return !1
            }, i._mod = i._roundProps = function(a) { for (var b, c = this._firstPT; c;) b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")], b && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next }, H._onPluginEvent = function(a, b) {
                var c, d, e, f, g, h = b._firstPT;
                if ("_onInitAllProps" === a) {
                    for (; h;) {
                        for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                        (h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
                    }
                    h = b._firstPT = e
                }
                for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
                return c
            }, ea.activate = function(a) { for (var b = a.length; --b > -1;) a[b].API === ea.API && (T[(new a[b])._propName] = a[b]); return !0 }, t.plugin = function(a) {
                if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
                var b, c = a.propName,
                    d = a.priority || 0,
                    e = a.overwriteProps,
                    f = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                    g = u("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() { ea.call(this, c, d), this._overwriteProps = e || [] }, a.global === !0),
                    h = g.prototype = new ea(c);
                h.constructor = g, g.API = a.API;
                for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
                return g.version = a.version, ea.activate([g]), g
            }, g = a._gsQueue) { for (h = 0; h < g.length; h++) g[h](); for (i in r) r[i].func || a.console.log("GSAP encountered missing dependency: " + i) }
        k = !1
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");


const tl = gsap.timeline();
tl.from('.line p', 2.8, {
    delay: 1,
    ease: 'power4.out',
    y: 250,
    skewY: 15,
    stagger: {
        amount: .8
    }
});
tl.to('.body', 1.8, {
    backgroundColor: '#c9c9c9'
})
tl.to('.line p a', 1.5, {
    color: 'black'
}, "-=1.8")
tl.from('.logo, .ul li', 1.2, {
    opacity: 0,
    y: "-100%",
    stagger: {
        amount: .4
    }
});

follower = document.querySelectorAll('.cursor');

posX = 0;
posY = 0;
mouseX = 0;
mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -2,
    onRepeat: function() {
        posX += (mouseX - posX) / 10;
        posY += (mouseY - posY) / 10;

        TweenMax.set(follower, {
            css: {
                left: posX - 80,
                top: posY - 80
            }
        });
    }
});

document.addEventListener("mousemove",
    function(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

const tlp = gsap.timeline();
tlp.to('.body2', .5, {
    backgroundColor: '#161616',
    color: '#c9c9c9'
})
tlp.from('.big-txt', 1.8, {
    delay: 1,
    y: "-100%",
    opacity: 0
});
tlp.from(".big-img, .big-desc", 1.5, {
    opacity: 0,
    stagger: {
        amount: .5
    }
}, "-=.6")
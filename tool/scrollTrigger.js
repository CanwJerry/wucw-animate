/*!
 * ScrollTrigger 3.6.0
 * https://greensock.com
 *
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function J(e) {
    return e;
  }
  function K() {
    return "undefined" != typeof window;
  }
  function L() {
    return Ce || (K() && (Ce = window.gsap) && Ce.registerPlugin && Ce);
  }
  function M(e) {
    return !!~o.indexOf(e);
  }
  function N(e, t) {
    return ~Ve.indexOf(e) && Ve[Ve.indexOf(e) + 1][t];
  }
  function O(t, e) {
    var r = e.s,
      n = e.sc,
      o = g.indexOf(t),
      i = n === nt.sc ? 1 : 2;
    return (
      ~o || (o = g.push(t) - 1),
      g[o + i] ||
        (g[o + i] =
          N(t, r) ||
          (M(t)
            ? n
            : function (e) {
                return arguments.length ? (t[r] = e) : t[r];
              }))
    );
  }
  function P(e) {
    return (
      N(e, "getBoundingClientRect") ||
      (M(e)
        ? function () {
            return (ft.width = Oe.innerWidth), (ft.height = Oe.innerHeight), ft;
          }
        : function () {
            return ot(e);
          })
    );
  }
  function S(e, t) {
    var r = t.s,
      n = t.d2,
      o = t.d,
      i = t.a;
    return (r = "scroll" + n) && (i = N(e, r))
      ? i() - P(e)()[o]
      : M(e)
      ? Math.max(_e[r], Pe[r]) -
        (Oe["inner" + n] || _e["client" + n] || Pe["client" + n])
      : e[r] - e["offset" + n];
  }
  function T(e, t) {
    for (var r = 0; r < d.length; r += 3)
      (t && !~t.indexOf(d[r + 1])) || e(d[r], d[r + 1], d[r + 2]);
  }
  function U(e) {
    return "string" == typeof e;
  }
  function V(e) {
    return "function" == typeof e;
  }
  function W(e) {
    return "number" == typeof e;
  }
  function X(e) {
    return "object" == typeof e;
  }
  function Y(e) {
    return V(e) && e();
  }
  function Z(r, n) {
    return function () {
      var e = Y(r),
        t = Y(n);
      return function () {
        Y(e), Y(t);
      };
    };
  }
  function sa(e) {
    return Oe.getComputedStyle(e);
  }
  function ua(e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  }
  function wa(e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0;
  }
  function xa(e) {
    var t,
      r = [],
      n = e.labels,
      o = e.duration();
    for (t in n) r.push(n[t] / o);
    return r;
  }
  function Aa(t, r, e, n) {
    return e.split(",").forEach(function (e) {
      return t(r, e, n);
    });
  }
  function Ba(e, t, r) {
    return e.addEventListener(t, r, { passive: !0 });
  }
  function Ca(e, t, r) {
    return e.removeEventListener(t, r);
  }
  function Ga(e, t) {
    if (U(e)) {
      var r = e.indexOf("="),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (n *= t / 100), (e = e.substr(0, r - 1))),
        (e =
          n +
          (e in w
            ? w[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  }
  function Ha(e, t, r, n, o, i, a) {
    var s = o.startColor,
      l = o.endColor,
      c = o.fontSize,
      u = o.indent,
      f = o.fontWeight,
      p = ke.createElement("div"),
      d = M(r) || "fixed" === N(r, "pinType"),
      h = -1 !== e.indexOf("scroller"),
      g = d ? Pe : r,
      v = -1 !== e.indexOf("start"),
      m = v ? s : l,
      b =
        "border-color:" +
        m +
        ";font-size:" +
        c +
        ";color:" +
        m +
        ";font-weight:" +
        f +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (b += "position:" + (h && d ? "fixed;" : "absolute;")),
      (!h && d) ||
        (b += (n === nt ? x : y) + ":" + (i + parseFloat(u)) + "px;"),
      a &&
        (b +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (p._isStart = v),
      p.setAttribute("class", "gsap-marker-" + e),
      (p.style.cssText = b),
      (p.innerText = t || 0 === t ? e + "-" + t : e),
      g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p),
      (p._offset = p["offset" + n.op.d2]),
      C(p, 0, n, v),
      p
    );
  }
  function La() {
    return (l = l || s(H));
  }
  function Ma() {
    l || ((l = s(H)), Ye || E("scrollStart"), (Ye = He()));
  }
  function Na() {
    return !Le && !r && !ke.fullscreenElement && a.restart(!0);
  }
  function Ta(e) {
    var t,
      r = Ce.ticker.frame,
      n = [],
      o = 0;
    if (h !== r || We) {
      for (R(); o < B.length; o += 4)
        (t = Oe.matchMedia(B[o]).matches) !== B[o + 3] &&
          ((B[o + 3] = t)
            ? n.push(o)
            : R(1, B[o]) || (V(B[o + 2]) && B[o + 2]()));
      for (z(), o = 0; o < n.length; o++)
        (t = n[o]), (Ie = B[t]), (B[t + 2] = B[t + 1](e));
      (Ie = 0), i && F(0, 1), (h = r), E("matchMedia");
    }
  }
  function Ua() {
    return Ca($, "scrollEnd", Ua) || F(!0);
  }
  function eb(e, t, r, n) {
    if (e.parentNode !== t) {
      for (var o, i = D.length, a = t.style, s = e.style; i--; )
        a[(o = D[i])] = r[o];
      (a.position = "absolute" === r.position ? "absolute" : "relative"),
        "inline" === r.display && (a.display = "inline-block"),
        (s[y] = s[x] = "auto"),
        (a.overflow = "visible"),
        (a.boxSizing = "border-box"),
        (a[Ge] = wa(e, rt) + tt),
        (a[Je] = wa(e, nt) + tt),
        (a[$e] = s[Qe] = s.top = s[m] = "0"),
        ut(n),
        (s[Ge] = s.maxWidth = r[Ge]),
        (s[Je] = s.maxHeight = r[Je]),
        (s[$e] = r[$e]),
        e.parentNode.insertBefore(t, e),
        t.appendChild(e);
    }
  }
  function hb(e) {
    for (var t = G.length, r = e.style, n = [], o = 0; o < t; o++)
      n.push(G[o], r[G[o]]);
    return (n.t = e), n;
  }
  function kb(e, t, r, n, o, i, a, s, l, c, u, f) {
    if (
      (V(e) && (e = e(s)),
      U(e) &&
        "max" === e.substr(0, 3) &&
        (e = f + ("=" === e.charAt(4) ? Ga("0" + e.substr(3), r) : 0)),
      W(e))
    )
      a && C(a, r, n, !0);
    else {
      V(t) && (t = t(s));
      var p,
        d,
        h,
        g = Be(t)[0] || Pe,
        v = ot(g) || {},
        m = e.split(" ");
      (v && (v.left || v.top)) ||
        "none" !== sa(g).display ||
        ((h = g.style.display),
        (g.style.display = "block"),
        (v = ot(g)),
        h ? (g.style.display = h) : g.style.removeProperty("display")),
        (p = Ga(m[0], v[n.d])),
        (d = Ga(m[1] || "0", r)),
        (e = v[n.p] - l[n.p] - c + p + o - d),
        a && C(a, d, n, r - d < 20 || (a._isStart && 20 < d)),
        (r -= r - d);
    }
    if (i) {
      var b = e + r,
        x = i._isStart;
      (f = "scroll" + n.d2),
        C(
          i,
          b,
          n,
          (x && 20 < b) ||
            (!x && (u ? Math.max(Pe[f], _e[f]) : i.parentNode[f]) <= b + 1)
        ),
        u &&
          ((l = ot(a)),
          u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + tt));
    }
    return Math.round(e);
  }
  function mb(e, t, r, n) {
    if (e.parentNode !== t) {
      var o,
        i,
        a = e.style;
      if (t === Pe) {
        for (o in ((e._stOrig = a.cssText), (i = sa(e))))
          +o ||
            j.test(o) ||
            !i[o] ||
            "string" != typeof a[o] ||
            "0" === o ||
            (a[o] = i[o]);
        (a.top = r), (a.left = n);
      } else a.cssText = e._stOrig;
      (Ce.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  }
  function nb(l, e) {
    function Se(e, t, r, n, o) {
      var i = Se.tween,
        a = t.onComplete,
        s = {};
      return (
        i && i.kill(),
        (c = Math.round(r)),
        (t[p] = e),
        ((t.modifiers = s)[p] = function (e) {
          return (
            (e = Math.round(f())) !== c && e !== u && 2 < Math.abs(e - c)
              ? (i.kill(), (Se.tween = 0))
              : (e = r + n * i.ratio + o * i.ratio * i.ratio),
            (u = c),
            (c = Math.round(e))
          );
        }),
        (t.onComplete = function () {
          (Se.tween = 0), a && a.call(i);
        }),
        (i = Se.tween = Ce.to(l, t))
      );
    }
    var c,
      u,
      f = O(l, e),
      p = "_scroll" + e.p2;
    return (
      (l[p] = f),
      l.addEventListener("mousewheel", function () {
        return Se.tween && Se.tween.kill() && (Se.tween = 0);
      }),
      Se
    );
  }
  var Ce,
    i,
    Oe,
    ke,
    _e,
    Pe,
    o,
    a,
    s,
    l,
    Be,
    Ee,
    Ne,
    c,
    Le,
    Ae,
    u,
    ze,
    f,
    p,
    d,
    Re,
    Ue,
    r,
    Fe,
    Ie,
    h,
    We = 1,
    Ve = [],
    g = [],
    He = Date.now,
    v = He(),
    Ye = 0,
    De = 1,
    Xe = Math.abs,
    t = "scrollLeft",
    n = "scrollTop",
    m = "left",
    x = "right",
    y = "bottom",
    Ge = "width",
    Je = "height",
    qe = "Right",
    Ze = "Left",
    je = "Top",
    Ke = "Bottom",
    $e = "padding",
    Qe = "margin",
    et = "Width",
    b = "Height",
    tt = "px",
    rt = {
      s: t,
      p: m,
      p2: Ze,
      os: x,
      os2: qe,
      d: Ge,
      d2: et,
      a: "x",
      sc: function sc(e) {
        return arguments.length
          ? Oe.scrollTo(e, nt.sc())
          : Oe.pageXOffset || ke[t] || _e[t] || Pe[t] || 0;
      },
    },
    nt = {
      s: n,
      p: "top",
      p2: je,
      os: y,
      os2: Ke,
      d: Je,
      d2: b,
      a: "y",
      op: rt,
      sc: function sc(e) {
        return arguments.length
          ? Oe.scrollTo(rt.sc(), e)
          : Oe.pageYOffset || ke[n] || _e[n] || Pe[n] || 0;
      },
    },
    ot = function _getBounds(e, t) {
      var r =
          t &&
          "matrix(1, 0, 0, 1, 0, 0)" !== sa(e)[u] &&
          Ce.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        n = e.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    },
    it = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    at = { toggleActions: "play", anticipatePin: 0 },
    w = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    C = function _positionMarker(e, t, r, n) {
      var o = { display: "block" },
        i = r[n ? "os2" : "p2"],
        a = r[n ? "p2" : "os2"];
      (e._isFlipped = n),
        (o[r.a + "Percent"] = n ? -100 : 0),
        (o[r.a] = n ? "1px" : 0),
        (o["border" + i + et] = 1),
        (o["border" + a + et] = 0),
        (o[r.p] = t + "px"),
        Ce.set(e, o);
    },
    st = [],
    lt = {},
    k = {},
    _ = [],
    B = [],
    E = function _dispatch(e) {
      return (
        (k[e] &&
          k[e].map(function (e) {
            return e();
          })) ||
        _
      );
    },
    A = [],
    z = function _revertRecorded(e) {
      for (var t = 0; t < A.length; t += 4)
        (e && A[t + 3] !== e) ||
          ((A[t].style.cssText = A[t + 1]), (A[t + 2].uncache = 1));
    },
    R = function _revertAll(e, t) {
      var r;
      for (ze = 0; ze < st.length; ze++)
        (r = st[ze]),
          (t && r.media !== t) ||
            (e
              ? r.kill(1)
              : (r.scroll.rec || (r.scroll.rec = r.scroll()), r.revert()));
      z(t), t || E("revert");
    },
    F = function _refreshAll(e, t) {
      if (!Ye || e) {
        var r = E("refreshInit");
        for (Re && $.sort(), t || R(), ze = 0; ze < st.length; ze++)
          st[ze].refresh();
        for (
          r.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
            ze = st.length;
          ze--;

        )
          st[ze].scroll.rec = 0;
        a.pause(), E("refresh");
      } else Ba($, "scrollEnd", Ua);
    },
    I = 0,
    ct = 1,
    H = function _updateAll() {
      var e = st.length,
        t = He(),
        r = 50 <= t - v,
        n = e && st[0].scroll();
      if (
        ((ct = n < I ? -1 : 1),
        (I = n),
        r &&
          (Ye && !Ae && 200 < t - Ye && ((Ye = 0), E("scrollEnd")),
          (Ne = v),
          (v = t)),
        ct < 0)
      ) {
        for (ze = e; ze--; ) st[ze] && st[ze].update(0, r);
        ct = 1;
      } else for (ze = 0; ze < e; ze++) st[ze] && st[ze].update(0, r);
      l = 0;
    },
    D = [
      m,
      "top",
      y,
      x,
      Qe + Ke,
      Qe + qe,
      Qe + je,
      Qe + Ze,
      "display",
      "flexShrink",
      "float",
      "zIndex",
    ],
    G = D.concat([
      Ge,
      Je,
      "boxSizing",
      "max" + et,
      "max" + b,
      "position",
      Qe,
      $e,
      $e + je,
      $e + qe,
      $e + Ke,
      $e + Ze,
    ]),
    q = /([A-Z])/g,
    ut = function _setState(e) {
      if (e) {
        var t,
          r,
          n = e.t.style,
          o = e.length,
          i = 0;
        for ((e.t._gsap || Ce.core.getCache(e.t)).uncache = 1; i < o; i += 2)
          (r = e[i + 1]),
            (t = e[i]),
            r
              ? (n[t] = r)
              : n[t] && n.removeProperty(t.replace(q, "-$1").toLowerCase());
      }
    },
    ft = { left: 0, top: 0 },
    j = /(?:webkit|moz|length|cssText|inset)/i;
  rt.op = nt;
  var $ =
    ((ScrollTrigger.prototype.init = function init(y, w) {
      if (((this.progress = this.start = 0), this.vars && this.kill(1), De)) {
        var d,
          n,
          l,
          T,
          C,
          k,
          _,
          B,
          E,
          L,
          A,
          z,
          e,
          R,
          F,
          I,
          H,
          Y,
          t,
          D,
          h,
          G,
          q,
          g,
          Z,
          v,
          m,
          r,
          b,
          x,
          j,
          o,
          c,
          K,
          $,
          Q,
          ee,
          te = (y = ua(U(y) || W(y) || y.nodeType ? { trigger: y } : y, at))
            .horizontal
            ? rt
            : nt,
          re = y.onUpdate,
          ne = y.toggleClass,
          i = y.id,
          oe = y.onToggle,
          ie = y.onRefresh,
          a = y.scrub,
          ae = y.trigger,
          se = y.pin,
          le = y.pinSpacing,
          ce = y.invalidateOnRefresh,
          ue = y.anticipatePin,
          s = y.onScrubComplete,
          u = y.onSnapComplete,
          fe = y.once,
          pe = y.snap,
          de = y.pinReparent,
          he = !a && 0 !== a,
          ge = Be(y.scroller || Oe)[0],
          f = Ce.core.getCache(ge),
          ve = M(ge),
          me =
            "pinType" in y
              ? "fixed" === y.pinType
              : ve || "fixed" === N(ge, "pinType"),
          be = [y.onEnter, y.onLeave, y.onEnterBack, y.onLeaveBack],
          xe = he && y.toggleActions.split(" "),
          p = "markers" in y ? y.markers : at.markers,
          ye = ve ? 0 : parseFloat(sa(ge)["border" + te.p2 + et]) || 0,
          Se = this,
          we =
            y.onRefreshInit &&
            function () {
              return y.onRefreshInit(Se);
            },
          Te = (function _getSizeFunc(e, t, r) {
            var n = r.d,
              o = r.d2,
              i = r.a;
            return (i = N(e, "getBoundingClientRect"))
              ? function () {
                  return i()[n];
                }
              : function () {
                  return (t ? Oe["inner" + o] : e["client" + o]) || 0;
                };
          })(ge, ve, te),
          Me = (function _getOffsetsFunc(e, t) {
            return !t || ~Ve.indexOf(e)
              ? P(e)
              : function () {
                  return ft;
                };
          })(ge, ve);
        (Se.media = Ie),
          (ue *= 45),
          st.push(Se),
          (Se.scroller = ge),
          (Se.scroll = O(ge, te)),
          (C = Se.scroll()),
          (Se.vars = y),
          (w = w || y.animation),
          "refreshPriority" in y && (Re = 1),
          (f.tweenScroll = f.tweenScroll || {
            top: nb(ge, nt),
            left: nb(ge, rt),
          }),
          (Se.tweenTo = d = f.tweenScroll[te.p]),
          w &&
            ((w.vars.lazy = !1),
            w._initted ||
              (!1 !== w.vars.immediateRender &&
                !1 !== y.immediateRender &&
                w.render(0, !0, !0)),
            (Se.animation = w.pause()),
            (w.scrollTrigger = Se),
            (o = W(a) && a) &&
              (j = Ce.to(w, {
                ease: "power3",
                duration: o,
                onComplete: function onComplete() {
                  return s && s(Se);
                },
              })),
            (b = 0),
            (i = i || w.vars.id)),
          pe &&
            (X(pe) || (pe = { snapTo: pe }),
            "scrollBehavior" in Pe.style &&
              Ce.set(ve ? [Pe, _e] : ge, { scrollBehavior: "auto" }),
            (l = V(pe.snapTo)
              ? pe.snapTo
              : "labels" === pe.snapTo
              ? (function _getClosestLabel(t) {
                  return function (e) {
                    return Ce.utils.snap(xa(t), e);
                  };
                })(w)
              : "labelsDirectional" === pe.snapTo
              ? (function _getLabelAtDirection(o) {
                  return function (e, t) {
                    var r,
                      n = xa(o);
                    if (
                      (n.sort(function (e, t) {
                        return e - t;
                      }),
                      0 < t.direction)
                    ) {
                      for (r = 0; r < n.length; r++) if (n[r] >= e) return n[r];
                      return n.pop();
                    }
                    for (r = n.length; r--; ) if (n[r] <= e) return n[r];
                    return n[0];
                  };
                })(w)
              : Ce.utils.snap(pe.snapTo)),
            (c = pe.duration || { min: 0.1, max: 2 }),
            (c = X(c) ? Ee(c.min, c.max) : Ee(c, c)),
            (K = Ce.delayedCall(pe.delay || o / 2 || 0.1, function () {
              if (Math.abs(Se.getVelocity()) < 10 && !Ae) {
                var e = w && !he ? w.totalProgress() : Se.progress,
                  t = ((e - x) / (He() - Ne)) * 1e3 || 0,
                  r = (Xe(t / 2) * t) / 0.185,
                  n = e + r,
                  o = Ee(0, 1, l(n, Se)),
                  i = Se.scroll(),
                  a = Math.round(_ + o * R),
                  s = d.tween;
                if (i <= B && _ <= i && a !== i) {
                  if (s && !s._initted && s.data <= Math.abs(a - i)) return;
                  d(
                    a,
                    {
                      duration: c(
                        Xe(
                          (0.185 * Math.max(Xe(n - e), Xe(o - e))) / t / 0.05 ||
                            0
                        )
                      ),
                      ease: pe.ease || "power3",
                      data: Math.abs(a - i),
                      onComplete: function onComplete() {
                        (b = x = w && !he ? w.totalProgress() : Se.progress),
                          u && u(Se);
                      },
                    },
                    i,
                    r * R,
                    a - i - r * R
                  );
                }
              } else Se.isActive && K.restart(!0);
            }).pause())),
          i && (lt[i] = Se),
          (ae = Se.trigger = Be(ae || se)[0]),
          (se = !0 === se ? ae : Be(se)[0]),
          U(ne) && (ne = { targets: ae, className: ne }),
          se &&
            (!1 === le ||
              le === Qe ||
              (le = !(!le && "flex" === sa(se.parentNode).display) && $e),
            (Se.pin = se),
            !1 !== y.force3D && Ce.set(se, { force3D: !0 }),
            (n = Ce.core.getCache(se)).spacer
              ? (F = n.pinState)
              : ((n.spacer = Y = ke.createElement("div")),
                Y.setAttribute(
                  "class",
                  "pin-spacer" + (i ? " pin-spacer-" + i : "")
                ),
                (n.pinState = F = hb(se))),
            (Se.spacer = Y = n.spacer),
            (r = sa(se)),
            (g = r[le + te.os2]),
            (D = Ce.getProperty(se)),
            (h = Ce.quickSetter(se, te.a, tt)),
            eb(se, Y, r),
            (H = hb(se))),
          p &&
            ((e = X(p) ? ua(p, it) : it),
            (A = Ha("scroller-start", i, ge, te, e, 0)),
            (z = Ha("scroller-end", i, ge, te, e, 0, A)),
            (t = A["offset" + te.op.d2]),
            (E = Ha("start", i, ge, te, e, t)),
            (L = Ha("end", i, ge, te, e, t)),
            me ||
              ((function _makePositionable(e) {
                e.style.position =
                  "absolute" === sa(e).position ? "absolute" : "relative";
              })(ve ? Pe : ge),
              Ce.set([A, z], { force3D: !0 }),
              (v = Ce.quickSetter(A, te.a, tt)),
              (m = Ce.quickSetter(z, te.a, tt)))),
          (Se.revert = function (e) {
            var t = !1 !== e || !Se.enabled,
              r = Le;
            t !== T &&
              (t &&
                ((Q = Math.max(Se.scroll(), Se.scroll.rec || 0)),
                ($ = Se.progress),
                (ee = w && w.progress())),
              E &&
                [E, L, A, z].forEach(function (e) {
                  return (e.style.display = t ? "none" : "block");
                }),
              t && (Le = 1),
              Se.update(t),
              (Le = r),
              se &&
                (t
                  ? (function _swapPinOut(e, t, r) {
                      if ((ut(r), e.parentNode === t)) {
                        var n = t.parentNode;
                        n && (n.insertBefore(e, t), n.removeChild(t));
                      }
                    })(se, Y, F)
                  : (de && Se.isActive) || eb(se, Y, sa(se), Z)),
              (T = t));
          }),
          (Se.refresh = function (e) {
            if (!Le && Se.enabled)
              if (se && e && Ye) Ba(ScrollTrigger, "scrollEnd", Ua);
              else {
                (Le = 1),
                  j && j.pause(),
                  ce && w && w.progress(0).invalidate(),
                  T || Se.revert();
                for (
                  var t,
                    r,
                    n,
                    o,
                    i,
                    a,
                    s,
                    l,
                    c,
                    u = Te(),
                    f = Me(),
                    p = S(ge, te),
                    d = 0,
                    h = 0,
                    g = y.end,
                    v = y.endTrigger || ae,
                    m =
                      y.start ||
                      (0 !== y.start && ae ? (se ? "0 0" : "0 100%") : 0),
                    b = (ae && Math.max(0, st.indexOf(Se))) || 0,
                    x = b;
                  x--;

                )
                  !(s = st[x].pin) || (s !== ae && s !== se) || st[x].revert();
                for (
                  _ =
                    kb(m, ae, u, te, Se.scroll(), E, A, Se, f, ye, me, p) ||
                    (se ? -0.001 : 0),
                    V(g) && (g = g(Se)),
                    U(g) &&
                      !g.indexOf("+=") &&
                      (~g.indexOf(" ")
                        ? (g = (U(m) ? m.split(" ")[0] : "") + g)
                        : ((d = Ga(g.substr(2), u)),
                          (g = U(m) ? m : _ + d),
                          (v = ae))),
                    B =
                      Math.max(
                        _,
                        kb(
                          g || (v ? "100% 0" : p),
                          v,
                          u,
                          te,
                          Se.scroll() + d,
                          L,
                          z,
                          Se,
                          f,
                          ye,
                          me,
                          p
                        )
                      ) || -0.001,
                    R = B - _ || ((_ -= 0.01) && 0.001),
                    d = 0,
                    x = b;
                  x--;

                )
                  (s = (a = st[x]).pin) &&
                    a.start - a._pinPush < _ &&
                    ((t = a.end - a.start),
                    s === ae && (d += t),
                    s === se && (h += t));
                if (
                  ((_ += d),
                  (B += d),
                  (Se._pinPush = h),
                  E && d && (((t = {})[te.a] = "+=" + d), Ce.set([E, L], t)),
                  se)
                )
                  (t = sa(se)),
                    (o = te === nt),
                    (n = Se.scroll()),
                    (G = parseFloat(D(te.a)) + h),
                    !p &&
                      1 < B &&
                      ((ve ? Pe : ge).style["overflow-" + te.a] = "scroll"),
                    eb(se, Y, t),
                    (H = hb(se)),
                    (r = ot(se, !0)),
                    (l = me && O(ge, o ? rt : nt)()),
                    le &&
                      (((Z = [le + te.os2, R + h + tt]).t = Y),
                      (x = le === $e ? wa(se, te) + R + h : 0) &&
                        Z.push(te.d, x + tt),
                      ut(Z),
                      me && Se.scroll(Q)),
                    me &&
                      (((i = {
                        top: r.top + (o ? n - _ : l) + tt,
                        left: r.left + (o ? l : n - _) + tt,
                        boxSizing: "border-box",
                        position: "fixed",
                      })[Ge] = i.maxWidth =
                        Math.ceil(r.width) + tt),
                      (i[Je] = i.maxHeight = Math.ceil(r.height) + tt),
                      (i[Qe] =
                        i[Qe + je] =
                        i[Qe + qe] =
                        i[Qe + Ke] =
                        i[Qe + Ze] =
                          "0"),
                      (i[$e] = t[$e]),
                      (i[$e + je] = t[$e + je]),
                      (i[$e + qe] = t[$e + qe]),
                      (i[$e + Ke] = t[$e + Ke]),
                      (i[$e + Ze] = t[$e + Ze]),
                      (I = (function _copyState(e, t, r) {
                        for (
                          var n, o = [], i = e.length, a = r ? 8 : 0;
                          a < i;
                          a += 2
                        )
                          (n = e[a]), o.push(n, n in t ? t[n] : e[a + 1]);
                        return (o.t = e.t), o;
                      })(F, i, de))),
                    w
                      ? ((c = w._initted),
                        Ue(1),
                        w.progress(1, !0),
                        (q = D(te.a) - G + R + h),
                        R !== q && I.splice(I.length - 2, 2),
                        w.progress(0, !0),
                        c || w.invalidate(),
                        Ue(0))
                      : (q = R);
                else if (ae && Se.scroll())
                  for (r = ae.parentNode; r && r !== Pe; )
                    r._pinOffset && ((_ -= r._pinOffset), (B -= r._pinOffset)),
                      (r = r.parentNode);
                for (x = 0; x < b; x++)
                  !(a = st[x].pin) ||
                    (a !== ae && a !== se) ||
                    st[x].revert(!1);
                (Se.start = _),
                  (Se.end = B),
                  (C = k = Se.scroll()) < Q && Se.scroll(Q),
                  Se.revert(!1),
                  (Le = 0),
                  w &&
                    he &&
                    w._initted &&
                    w.progress(ee, !0).render(w.time(), !0, !0),
                  $ !== Se.progress &&
                    (j && w.totalProgress($, !0),
                    (Se.progress = $),
                    Se.update()),
                  se && le && (Y._pinOffset = Math.round(Se.progress * q)),
                  ie && ie(Se);
              }
          }),
          (Se.getVelocity = function () {
            return ((Se.scroll() - k) / (He() - Ne)) * 1e3 || 0;
          }),
          (Se.update = function (e, t) {
            var r,
              n,
              o,
              i,
              a,
              s = Se.scroll(),
              l = e ? 0 : (s - _) / R,
              c = l < 0 ? 0 : 1 < l ? 1 : l || 0,
              u = Se.progress;
            if (
              (t &&
                ((k = C),
                (C = s),
                pe && ((x = b), (b = w && !he ? w.totalProgress() : c))),
              ue &&
                !c &&
                se &&
                !Le &&
                !We &&
                Ye &&
                _ < s + ((s - k) / (He() - Ne)) * ue &&
                (c = 1e-4),
              c !== u && Se.enabled)
            ) {
              if (
                ((i =
                  (a = (r = Se.isActive = !!c && c < 1) != (!!u && u < 1)) ||
                  !!c != !!u),
                (Se.direction = u < c ? 1 : -1),
                (Se.progress = c),
                he ||
                  (!j || Le || We
                    ? w && w.totalProgress(c, !!Le)
                    : ((j.vars.totalProgress = c), j.invalidate().restart())),
                se)
              )
                if ((e && le && (Y.style[le + te.os2] = g), me)) {
                  if (i) {
                    if (
                      ((o = !e && u < c && s < B + 1 && s + 1 >= S(ge, te)), de)
                    )
                      if (e || (!r && !o)) mb(se, Y);
                      else {
                        var f = ot(se, !0),
                          p = s - _;
                        mb(
                          se,
                          Pe,
                          f.top + (te === nt ? p : 0) + tt,
                          f.left + (te === nt ? 0 : p) + tt
                        );
                      }
                    ut(r || o ? I : H),
                      (q !== R && c < 1 && r) || h(G + (1 !== c || o ? 0 : q));
                  }
                } else h(G + q * c);
              !pe || d.tween || Le || We || K.restart(!0),
                ne &&
                  (a || (fe && c && (c < 1 || !Fe))) &&
                  Be(ne.targets).forEach(function (e) {
                    return e.classList[r || fe ? "add" : "remove"](
                      ne.className
                    );
                  }),
                !re || he || e || re(Se),
                i && !Le
                  ? ((n = c && !u ? 0 : 1 === c ? 1 : 1 === u ? 2 : 3),
                    he &&
                      ((o = (!a && "none" !== xe[n + 1] && xe[n + 1]) || xe[n]),
                      w &&
                        ("complete" === o || "reset" === o || o in w) &&
                        ("complete" === o
                          ? w.pause().totalProgress(1)
                          : "reset" === o
                          ? w.restart(!0).pause()
                          : w[o]()),
                      re && re(Se)),
                    (!a && Fe) ||
                      (oe && a && oe(Se),
                      be[n] && be[n](Se),
                      fe && (1 === c ? Se.kill(!1, 1) : (be[n] = 0)),
                      a || (be[(n = 1 === c ? 1 : 3)] && be[n](Se))))
                  : he && re && !Le && re(Se);
            }
            m && (v(s + (A._isFlipped ? 1 : 0)), m(s));
          }),
          (Se.enable = function () {
            Se.enabled ||
              ((Se.enabled = !0),
              Ba(ge, "resize", Na),
              Ba(ge, "scroll", Ma),
              we && Ba(ScrollTrigger, "refreshInit", we),
              w && w.add
                ? Ce.delayedCall(0.01, function () {
                    return _ || B || Se.refresh();
                  }) &&
                  (R = 0.01) &&
                  (_ = B = 0)
                : Se.refresh());
          }),
          (Se.disable = function (e, t) {
            if (
              Se.enabled &&
              (!1 !== e && Se.revert(),
              (Se.enabled = Se.isActive = !1),
              t || (j && j.pause()),
              (Q = 0),
              n && (n.uncache = 1),
              we && Ca(ScrollTrigger, "refreshInit", we),
              K && (K.pause(), d.tween && d.tween.kill() && (d.tween = 0)),
              !ve)
            ) {
              for (var r = st.length; r--; )
                if (st[r].scroller === ge && st[r] !== Se) return;
              Ca(ge, "resize", Na), Ca(ge, "scroll", Ma);
            }
          }),
          (Se.kill = function (e, t) {
            Se.disable(e, t), i && delete lt[i];
            var r = st.indexOf(Se);
            st.splice(r, 1),
              r === ze && 0 < ct && ze--,
              w && ((w.scrollTrigger = null), e && w.render(-1), t || w.kill()),
              E &&
                [E, L, A, z].forEach(function (e) {
                  return e.parentNode.removeChild(e);
                }),
              se &&
                (n && (n.uncache = 1),
                (r = 0),
                st.forEach(function (e) {
                  return e.pin === se && r++;
                }),
                r || (n.spacer = 0));
          }),
          Se.enable();
      } else this.update = this.refresh = this.kill = J;
    }),
    (ScrollTrigger.register = function register(e) {
      if (
        !i &&
        ((Ce = e || L()),
        K() &&
          window.document &&
          ((Oe = window),
          (ke = document),
          (_e = ke.documentElement),
          (Pe = ke.body)),
        Ce &&
          ((Be = Ce.utils.toArray),
          (Ee = Ce.utils.clamp),
          (Ue = Ce.core.suppressOverwrites || J),
          Ce.core.globals("ScrollTrigger", ScrollTrigger),
          Pe))
      ) {
        (s =
          Oe.requestAnimationFrame ||
          function (e) {
            return setTimeout(e, 16);
          }),
          Ba(Oe, "mousewheel", Ma),
          (o = [Oe, ke, _e, Pe]),
          Ba(ke, "scroll", Ma);
        var t,
          r = Pe.style,
          n = r.borderTop;
        (r.borderTop = "1px solid #000"),
          (t = ot(Pe)),
          (nt.m = Math.round(t.top + nt.sc()) || 0),
          (rt.m = Math.round(t.left + rt.sc()) || 0),
          n ? (r.borderTop = n) : r.removeProperty("border-top"),
          (c = setInterval(La, 200)),
          Ce.delayedCall(0.5, function () {
            return (We = 0);
          }),
          Ba(ke, "touchcancel", J),
          Ba(Pe, "touchstart", J),
          Aa(Ba, ke, "pointerdown,touchstart,mousedown", function () {
            return (Ae = 1);
          }),
          Aa(Ba, ke, "pointerup,touchend,mouseup", function () {
            return (Ae = 0);
          }),
          (u = Ce.utils.checkPrefix("transform")),
          G.push(u),
          (i = He()),
          (a = Ce.delayedCall(0.2, F).pause()),
          (d = [
            ke,
            "visibilitychange",
            function () {
              var e = Oe.innerWidth,
                t = Oe.innerHeight;
              ke.hidden ? ((f = e), (p = t)) : (f === e && p === t) || Na();
            },
            ke,
            "DOMContentLoaded",
            F,
            Oe,
            "load",
            function () {
              return Ye || F();
            },
            Oe,
            "resize",
            Na,
          ]),
          T(Ba);
      }
      return i;
    }),
    (ScrollTrigger.defaults = function defaults(e) {
      for (var t in e) at[t] = e[t];
    }),
    (ScrollTrigger.kill = function kill() {
      (De = 0),
        st.slice(0).forEach(function (e) {
          return e.kill(1);
        });
    }),
    (ScrollTrigger.config = function config(e) {
      "limitCallbacks" in e && (Fe = !!e.limitCallbacks);
      var t = e.syncInterval;
      (t && clearInterval(c)) || ((c = t) && setInterval(La, t)),
        "autoRefreshEvents" in e &&
          (T(Ca) || T(Ba, e.autoRefreshEvents || "none"),
          (r = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
    }),
    (ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
      var r = Be(e)[0],
        n = g.indexOf(r),
        o = M(r);
      ~n && g.splice(n, o ? 6 : 2),
        o ? Ve.unshift(Oe, t, Pe, t, _e, t) : Ve.unshift(r, t);
    }),
    (ScrollTrigger.matchMedia = function matchMedia(e) {
      var t, r, n, o, i;
      for (r in e)
        (n = B.indexOf(r)),
          (o = e[r]),
          "all" === (Ie = r)
            ? o()
            : (t = Oe.matchMedia(r)) &&
              (t.matches && (i = o()),
              ~n
                ? ((B[n + 1] = Z(B[n + 1], o)), (B[n + 2] = Z(B[n + 2], i)))
                : ((n = B.length),
                  B.push(r, o, i),
                  t.addListener
                    ? t.addListener(Ta)
                    : t.addEventListener("change", Ta)),
              (B[n + 3] = t.matches)),
          (Ie = 0);
      return B;
    }),
    (ScrollTrigger.clearMatchMedia = function clearMatchMedia(e) {
      e || (B.length = 0), 0 <= (e = B.indexOf(e)) && B.splice(e, 4);
    }),
    ScrollTrigger);
  function ScrollTrigger(e, t) {
    i ||
      ScrollTrigger.register(Ce) ||
      console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
      this.init(e, t);
  }
  ($.version = "3.6.0"),
    ($.saveStyles = function (e) {
      return e
        ? Be(e).forEach(function (e) {
            if (e && e.style) {
              var t = A.indexOf(e);
              0 <= t && A.splice(t, 4),
                A.push(e, e.style.cssText, Ce.core.getCache(e), Ie);
            }
          })
        : A;
    }),
    ($.revert = function (e, t) {
      return R(!e, t);
    }),
    ($.create = function (e, t) {
      return new $(e, t);
    }),
    ($.refresh = function (e) {
      return e ? Na() : F(!0);
    }),
    ($.update = H),
    ($.maxScroll = function (e, t) {
      return S(e, t ? rt : nt);
    }),
    ($.getScrollFunc = function (e, t) {
      return O(Be(e)[0], t ? rt : nt);
    }),
    ($.getById = function (e) {
      return lt[e];
    }),
    ($.getAll = function () {
      return st.slice(0);
    }),
    ($.isScrolling = function () {
      return !!Ye;
    }),
    ($.addEventListener = function (e, t) {
      var r = k[e] || (k[e] = []);
      ~r.indexOf(t) || r.push(t);
    }),
    ($.removeEventListener = function (e, t) {
      var r = k[e],
        n = r && r.indexOf(t);
      0 <= n && r.splice(n, 1);
    }),
    ($.batch = function (e, t) {
      function ri(e, t) {
        var r = [],
          n = [],
          o = Ce.delayedCall(i, function () {
            t(r, n), (r = []), (n = []);
          }).pause();
        return function (e) {
          r.length || o.restart(!0),
            r.push(e.trigger),
            n.push(e),
            a <= r.length && o.progress(1);
        };
      }
      var r,
        n = [],
        o = {},
        i = t.interval || 0.016,
        a = t.batchMax || 1e9;
      for (r in t)
        o[r] =
          "on" === r.substr(0, 2) && V(t[r]) && "onRefreshInit" !== r
            ? ri(0, t[r])
            : t[r];
      return (
        V(a) &&
          ((a = a()),
          Ba($, "refresh", function () {
            return (a = t.batchMax());
          })),
        Be(e).forEach(function (e) {
          var t = {};
          for (r in o) t[r] = o[r];
          (t.trigger = e), n.push($.create(t));
        }),
        n
      );
    }),
    ($.sort = function (e) {
      return st.sort(
        e ||
          function (e, t) {
            return (
              -1e6 * (e.vars.refreshPriority || 0) +
              e.start -
              (t.start + -1e6 * (t.vars.refreshPriority || 0))
            );
          }
      );
    }),
    L() && Ce.registerPlugin($),
    (e.ScrollTrigger = $),
    (e.default = $);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});

;(function () {
   'use strict'

   /*! Licensed under MIT License - http://github.com/impress/impress.js */
   !(function (e, t) {
      var n,
         r,
         i,
         o,
         a =
            ((r = e.createElement('dummy').style),
            (i = 'Webkit Moz O ms Khtml'.split(' ')),
            (o = {}),
            function (e) {
               if (void 0 === o[e]) {
                  var t = e.charAt(0).toUpperCase() + e.substr(1),
                     n = (e + ' ' + i.join(t + ' ') + t).split(' ')
                  for (var a in ((o[e] = null), n))
                     if (void 0 !== r[n[a]]) {
                        o[e] = n[a]
                        break
                     }
               }
               return o[e]
            }),
         s = function (e, t) {
            var n = 'xyz',
               r = ''
            if ('string' == typeof e)
               for (var i in e.split(''))
                  n.indexOf(e[i]) >= 0 &&
                     ((r += e[i]), (n = n.split(e[i]).join('')))
            return r || (void 0 !== t ? t : 'xyz')
         },
         l = function (e, t) {
            var n, r
            for (n in t)
               t.hasOwnProperty(n) && null !== (r = a(n)) && (e.style[r] = t[n])
            return e
         },
         d = function (e) {
            return ' translate3d(' + e.x + 'px,' + e.y + 'px,' + e.z + 'px) '
         },
         u = function (e, t) {
            var n = '',
               r = (e.order ? e.order : 'xyz').split('')
            t && (r = r.reverse())
            for (var i = 0; i < r.length; i++)
               n += ' rotate' + r[i].toUpperCase() + '(' + e[r[i]] + 'deg)'
            return n
         },
         c = function (e) {
            return ' scale(' + e + ') '
         },
         p = function (e) {
            var n = t.innerHeight / e.height,
               r = t.innerWidth / e.width,
               i = n > r ? r : n
            return (
               e.maxScale && i > e.maxScale && (i = e.maxScale),
               e.minScale && i < e.minScale && (i = e.minScale),
               i
            )
         },
         v = e.body,
         m = null !== a('perspective') && v.classList && v.dataset
      m || (v.className += ' impress-not-supported ')
      var f = {},
         g = [],
         y = [],
         h = 1920,
         b = 1080,
         x = 3,
         E = 0,
         L = 1e3,
         w = 1e3,
         z = null,
         k = function () {
            return !1
         },
         A = (t.impress = function (r) {
            if (!m)
               return {
                  init: k,
                  goto: k,
                  prev: k,
                  next: k,
                  swipe: k,
                  tear: k,
                  lib: {},
               }
            if (f['impress-root-' + (r = r || 'impress')])
               return f['impress-root-' + r]
            ;(n = N(r)),
               v.classList.remove('impress-not-supported'),
               v.classList.add('impress-supported')
            var i = {},
               o = null,
               a = null,
               g = null,
               y = null,
               A = n.util.byId(r),
               C = e.createElement('div'),
               M = !1,
               I = null,
               T = function (e, t) {
                  var r = e.dataset,
                     o = {
                        translate: {
                           x: n.util.toNumberAdvanced(r.x),
                           y: n.util.toNumberAdvanced(r.y),
                           z: n.util.toNumberAdvanced(r.z),
                        },
                        rotate: {
                           x: n.util.toNumber(r.rotateX),
                           y: n.util.toNumber(r.rotateY),
                           z: n.util.toNumber(r.rotateZ || r.rotate),
                           order: s(r.rotateOrder),
                        },
                        scale: n.util.toNumber(r.scale, 1),
                        transitionDuration: n.util.toNumber(
                           r.transitionDuration,
                           z.transitionDuration,
                        ),
                        el: e,
                     }
                  e.id || (e.id = 'step-' + (t + 1)),
                     (i['impress-' + e.id] = o),
                     l(e, {
                        position: 'absolute',
                        transform:
                           'translate(-50%,-50%)' +
                           d(o.translate) +
                           u(o.rotate) +
                           c(o.scale),
                        transformStyle: 'preserve-3d',
                     })
               },
               P = function () {
                  ;(g = n.util.$$('.step', A)).forEach(T)
               },
               B = null,
               q = function (e, r, s, m) {
                  if (((s = s || 'goto'), (m = m || null), !M)) return !1
                  if (
                     (P(),
                     !(e = (function (e) {
                        return (
                           'number' == typeof e
                              ? (e = e < 0 ? g[g.length + e] : g[e])
                              : 'string' == typeof e && (e = n.util.byId(e)),
                           e && e.id && i['impress-' + e.id] ? e : null
                        )
                     })(e)))
                  )
                     return !1
                  t.scrollTo(0, 0)
                  var f = i['impress-' + e.id]
                  if (
                     ((r = void 0 !== r ? r : f.transitionDuration),
                     o && o !== e)
                  ) {
                     var h = { target: o, detail: {} }
                     if (
                        ((h.detail.next = e),
                        (h.detail.transitionDuration = r),
                        (h.detail.reason = s),
                        m && (h.origEvent = m),
                        !1 === D(h))
                     )
                        return !1
                     ;(e = h.detail.next),
                        (f = i['impress-' + e.id]),
                        (r = h.detail.transitionDuration)
                  }
                  o &&
                     (o.classList.remove('active'),
                     v.classList.remove('impress-on-' + o.id)),
                     e.classList.add('active'),
                     v.classList.add('impress-on-' + e.id)
                  var b = {
                        rotate: {
                           x: -f.rotate.x,
                           y: -f.rotate.y,
                           z: -f.rotate.z,
                           order: f.rotate.order,
                        },
                        translate: {
                           x: -f.translate.x,
                           y: -f.translate.y,
                           z: -f.translate.z,
                        },
                        scale: 1 / f.scale,
                     },
                     x = b.scale >= a.scale,
                     E = (r = n.util.toNumber(r, z.transitionDuration)) / 2
                  e === o && (y = p(z))
                  var L,
                     w,
                     k = b.scale * y
                  return (
                     o &&
                        o !== e &&
                        ((w = e),
                        I === (L = o) &&
                           (n.util.triggerEvent(L, 'impress:stepleave', {
                              next: w,
                           }),
                           (I = null))),
                     l(A, {
                        perspective: z.perspective / k + 'px',
                        transform: c(k),
                        transitionDuration: r + 'ms',
                        transitionDelay: (x ? E : 0) + 'ms',
                     }),
                     l(C, {
                        transform: u(b.rotate, !0) + d(b.translate),
                        transitionDuration: r + 'ms',
                        transitionDelay: (x ? 0 : E) + 'ms',
                     }),
                     (a.scale === b.scale ||
                        (a.rotate.x === b.rotate.x &&
                           a.rotate.y === b.rotate.y &&
                           a.rotate.z === b.rotate.z &&
                           a.translate.x === b.translate.x &&
                           a.translate.y === b.translate.y &&
                           a.translate.z === b.translate.z)) &&
                        (E = 0),
                     (a = b),
                     (o = e),
                     t.clearTimeout(B),
                     (B = t.setTimeout(function () {
                        !(function (e) {
                           I !== e &&
                              (n.util.triggerEvent(e, 'impress:stepenter'),
                              (I = e)),
                              n.util.triggerEvent(e, 'impress:steprefresh')
                        })(o)
                     }, r + E)),
                     e
                  )
               },
               O = function (e, t, n) {
                  return e + (t - e) * n
               }
            return (
               n.gc.addEventListener(
                  A,
                  'impress:init',
                  function () {
                     g.forEach(function (e) {
                        e.classList.add('future')
                     }),
                        n.gc.addEventListener(
                           A,
                           'impress:stepenter',
                           function (e) {
                              e.target.classList.remove('past'),
                                 e.target.classList.remove('future'),
                                 e.target.classList.add('present')
                           },
                           !1,
                        ),
                        n.gc.addEventListener(
                           A,
                           'impress:stepleave',
                           function (e) {
                              e.target.classList.remove('present'),
                                 e.target.classList.add('past')
                           },
                           !1,
                        )
                  },
                  !1,
               ),
               n.gc.addEventListener(
                  A,
                  'impress:init',
                  function () {
                     var e = ''
                     n.gc.addEventListener(
                        A,
                        'impress:stepenter',
                        function (n) {
                           t.location.hash = e = '#/' + n.target.id
                        },
                        !1,
                     ),
                        n.gc.addEventListener(
                           t,
                           'hashchange',
                           function () {
                              t.location.hash !== e &&
                                 q(n.util.getElementFromHash())
                           },
                           !1,
                        ),
                        q(n.util.getElementFromHash() || g[0], 0)
                  },
                  !1,
               ),
               v.classList.add('impress-disabled'),
               (f['impress-root-' + r] = {
                  init: function () {
                     if (!M) {
                        var t
                        ;(t = A.dataset),
                           (z = {
                              width: n.util.toNumber(t.width, h),
                              height: n.util.toNumber(t.height, b),
                              maxScale: n.util.toNumber(t.maxScale, x),
                              minScale: n.util.toNumber(t.minScale, E),
                              perspective: n.util.toNumber(t.perspective, L),
                              transitionDuration: n.util.toNumber(
                                 t.transitionDuration,
                                 w,
                              ),
                           }),
                           S(A)
                        var i =
                           n.util.$("meta[name='viewport']") ||
                           e.createElement('meta')
                        ;(i.content =
                           'width=device-width, minimum-scale=1, maximum-scale=1, user-scalable=no'),
                           i.parentNode !== e.head &&
                              ((i.name = 'viewport'), e.head.appendChild(i)),
                           (y = p(z)),
                           n.util.arrayify(A.childNodes).forEach(function (e) {
                              C.appendChild(e)
                           }),
                           A.appendChild(C),
                           (e.documentElement.style.height = '100%'),
                           l(v, { height: '100%', overflow: 'hidden' })
                        var o = {
                           position: 'absolute',
                           transformOrigin: 'top left',
                           transition: 'all 0s ease-in-out',
                           transformStyle: 'preserve-3d',
                        }
                        l(A, o),
                           l(A, {
                              top: '50%',
                              left: '50%',
                              perspective: z.perspective / y + 'px',
                              transform: c(y),
                           }),
                           l(C, o),
                           v.classList.remove('impress-disabled'),
                           v.classList.add('impress-enabled'),
                           P(),
                           (a = {
                              translate: { x: 0, y: 0, z: 0 },
                              rotate: { x: 0, y: 0, z: 0, order: 'xyz' },
                              scale: 1,
                           }),
                           (M = !0),
                           n.util.triggerEvent(A, 'impress:init', {
                              api: f['impress-root-' + r],
                           })
                     }
                  },
                  goto: q,
                  next: function (e) {
                     var t = g.indexOf(o) + 1
                     return (
                        (t = t < g.length ? g[t] : g[0]),
                        q(t, void 0, 'next', e)
                     )
                  },
                  prev: function (e) {
                     var t = g.indexOf(o) - 1
                     return (
                        (t = t >= 0 ? g[t] : g[g.length - 1]),
                        q(t, void 0, 'prev', e)
                     )
                  },
                  swipe: function (e) {
                     if (!(Math.abs(e) > 1)) {
                        var t,
                           n = { target: o, detail: {} }
                        if (
                           ((n.detail.swipe = e),
                           (n.detail.transitionDuration = z.transitionDuration),
                           e < 0)
                        )
                           (t = g.indexOf(o) + 1),
                              (n.detail.next = t < g.length ? g[t] : g[0]),
                              (n.detail.reason = 'next')
                        else {
                           if (!(e > 0)) return
                           ;(t = g.indexOf(o) - 1),
                              (n.detail.next = t >= 0 ? g[t] : g[g.length - 1]),
                              (n.detail.reason = 'prev')
                        }
                        if (!1 === D(n)) return !1
                        var r = n.detail.next,
                           s = i['impress-' + r.id],
                           p = s.scale * y,
                           v = Math.abs(e),
                           m = {
                              translate: {
                                 x: O(a.translate.x, -s.translate.x, v),
                                 y: O(a.translate.y, -s.translate.y, v),
                                 z: O(a.translate.z, -s.translate.z, v),
                              },
                              rotate: {
                                 x: O(a.rotate.x, -s.rotate.x, v),
                                 y: O(a.rotate.y, -s.rotate.y, v),
                                 z: O(a.rotate.z, -s.rotate.z, v),
                                 order:
                                    v < 0.7 ? a.rotate.order : s.rotate.order,
                              },
                              scale: O(a.scale * y, p, v),
                           }
                        l(A, {
                           perspective: z.perspective / m.scale + 'px',
                           transform: c(m.scale),
                           transitionDuration: '0ms',
                           transitionDelay: '0ms',
                        }),
                           l(C, {
                              transform: u(m.rotate, !0) + d(m.translate),
                              transitionDuration: '0ms',
                              transitionDelay: '0ms',
                           })
                     }
                  },
                  tear: function () {
                     n.gc.teardown(), delete f['impress-root-' + r]
                  },
                  lib: n,
               })
            )
         })
      A.supported = m
      var C = {}
      A.addLibraryFactory = function (e) {
         for (var t in e) e.hasOwnProperty(t) && (C[t] = e[t])
      }
      var N = function (e) {
         var t = {}
         for (var n in C)
            if (C.hasOwnProperty(n)) {
               if (void 0 !== t[n])
                  throw (
                     'impress.js ERROR: Two libraries both tried to use libname: ' +
                     n
                  )
               t[n] = C[n](e)
            }
         return t
      }
      A.addPreInitPlugin = function (e, t) {
         if ((t = parseInt(t) || 10) <= 0)
            throw 'addPreInitPlugin: weight must be a positive integer'
         void 0 === g[t] && (g[t] = []), g[t].push(e)
      }
      var S = function (e) {
         for (var t = 0; t < g.length; t++) {
            var n = g[t]
            if (void 0 !== n)
               for (var r = 0; r < n.length; r++)
                  n[r](e, f['impress-root-' + e.id])
         }
      }
      ;(A.addPreStepLeavePlugin = function (e, t) {
         if ((t = parseInt(t) || 10) <= 0)
            throw 'addPreStepLeavePlugin: weight must be a positive integer'
         void 0 === y[t] && (y[t] = []), y[t].push(e)
      }),
         (A.getConfig = function () {
            return z
         })
      var D = function (e) {
         for (var t = 0; t < y.length; t++) {
            var n = y[t]
            if (void 0 !== n)
               for (var r = 0; r < n.length; r++) if (!1 === n[r](e)) return !1
         }
      }
   })(document, window),
      (function (e, t) {
         var n = [],
            r = 0,
            i = { roots: [] }
         t.impress.addLibraryFactory({
            gc: function (e) {
               if (n[e]) return n[e]
               var t = [],
                  i = [],
                  s = []
               o(e)
               var l = function (e) {
                     t.push(e)
                  },
                  d = function (e, t, n) {
                     i.push({ target: e, type: t, listener: n })
                  },
                  u = function (e) {
                     s.push(e)
                  }
               u(function (e) {
                  a(e)
               })
               var c = {
                  pushElement: l,
                  appendChild: function (e, t) {
                     e.appendChild(t), l(t)
                  },
                  pushEventListener: d,
                  addEventListener: function (e, t, n) {
                     e.addEventListener(t, n), d(e, t, n)
                  },
                  pushCallback: u,
                  teardown: function () {
                     var n
                     for (n = s.length - 1; n >= 0; n--) s[n](e)
                     for (s = [], n = 0; n < t.length; n++)
                        t[n].parentElement.removeChild(t[n])
                     for (t = [], n = 0; n < i.length; n++) {
                        var r = i[n].target,
                           o = i[n].type,
                           a = i[n].listener
                        r.removeEventListener(o, a)
                     }
                  },
               }
               return (n[e] = c), r++, c
            },
         })
         var o = function (t) {
               ;(i.roots[t] = {}), (i.roots[t].steps = [])
               for (
                  var n = e.getElementById(t).querySelectorAll('.step'), o = 0;
                  o < n.length;
                  o++
               ) {
                  var a = n[o]
                  i.roots[t].steps.push({ el: a, id: a.getAttribute('id') })
               }
               if (0 === r) {
                  ;(i.body = {}),
                     e.body.classList.contains('impress-not-supported')
                        ? (i.body.impressNotSupported = !0)
                        : (i.body.impressNotSupported = !1)
                  var s = e.head.querySelectorAll('meta')
                  for (o = 0; o < s.length; o++) {
                     var l = s[o]
                     'viewport' === l.name && (i.meta = l.content)
                  }
               }
            },
            a = function (t) {
               e.body.classList.remove('impress-enabled'),
                  e.body.classList.remove('impress-disabled')
               var o = e.getElementById(t),
                  a = o.querySelector('.active').id
               e.body.classList.remove('impress-on-' + a),
                  (e.documentElement.style.height = ''),
                  (e.body.style.height = ''),
                  (e.body.style.overflow = '')
               for (
                  var s, l = o.querySelectorAll('.step'), d = 0;
                  d < l.length;
                  d++
               )
                  l[d].classList.remove('future'),
                     l[d].classList.remove('past'),
                     l[d].classList.remove('present'),
                     l[d].classList.remove('active'),
                     (l[d].style.position = ''),
                     (l[d].style.transform = ''),
                     (l[d].style['transform-style'] = '')
               for (
                  o.style.position = '',
                     o.style['transform-origin'] = '',
                     o.style.transition = '',
                     o.style['transform-style'] = '',
                     o.style.top = '',
                     o.style.left = '',
                     o.style.transform = '',
                     l = i.roots[t].steps;
                  (s = l.pop());

               )
                  null === s.id
                     ? s.el.removeAttribute('id')
                     : s.el.setAttribute('id', s.id)
               delete i.roots[t]
               var u = o.firstChild.innerHTML
               if (
                  ((o.innerHTML = u),
                  void 0 !== n[t] && (delete n[t], r--),
                  0 === r)
               ) {
                  e.body.classList.remove('impress-supported'),
                     i.body.impressNotSupported &&
                        e.body.classList.add('impress-not-supported')
                  var c = e.head.querySelectorAll('meta')
                  for (d = 0; d < c.length; d++) {
                     var p = c[d]
                     'viewport' === p.name &&
                        (void 0 !== i.meta
                           ? (p.content = i.meta)
                           : p.parentElement.removeChild(p))
                  }
               }
            }
      })(document, window),
      (function (e, t) {
         var n = []
         t.impress.addLibraryFactory({
            util: function (r) {
               if (n[r]) return n[r]
               var i = function (e) {
                     return [].slice.call(e)
                  },
                  o = function (t) {
                     return e.getElementById(t)
                  },
                  a = function (e, t) {
                     return isNaN(e) ? t || 0 : Number(e)
                  },
                  s = {
                     $: function (t, n) {
                        return (n = n || e).querySelector(t)
                     },
                     $$: function (t, n) {
                        return i((n = n || e).querySelectorAll(t))
                     },
                     arrayify: i,
                     byId: o,
                     getElementFromHash: function () {
                        var e = t.location.hash.replace(/^#\/?/, '')
                        return o(decodeURIComponent(e))
                     },
                     throttle: function (e, n) {
                        var r = null
                        return function () {
                           var i = this,
                              o = arguments
                           t.clearTimeout(r),
                              (r = t.setTimeout(function () {
                                 e.apply(i, o)
                              }, n))
                        }
                     },
                     toNumber: a,
                     toNumberAdvanced: function (e, n) {
                        if ('string' != typeof e) return a(e, n)
                        var r = e.match(/^([+-]*[\d\.]+)([wh])$/)
                        if (null == r) return a(e, n)
                        var i = parseFloat(r[1]),
                           o = t.impress.getConfig()
                        return i * ('w' === r[2] ? o.width : o.height)
                     },
                     triggerEvent: function (t, n, r) {
                        var i = e.createEvent('CustomEvent')
                        i.initCustomEvent(n, !0, !0, r), t.dispatchEvent(i)
                     },
                     getUrlParamValue: function (e) {
                        var n = t.location.search.split(e + '=')[1],
                           r = n && n.split('&')[0]
                        if ('' !== r) return r
                     },
                  }
               return (n[r] = s), s
            },
         })
      })(document, window),
      (function (e, t) {
         var n = []
         t.impress.addLibraryFactory({
            rotation: function (e) {
               if (n['impress-root-' + e]) return n['impress-root-' + e]
               var t = function (e) {
                     return Math.round(100 * (e + Number.EPSILON)) / 100
                  },
                  r = function (e) {
                     return Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z)
                  },
                  i = function (e, t) {
                     return e.x * t.x + e.y * t.y + e.z * t.z
                  },
                  o = function (e, t) {
                     return {
                        x: e.y * t.z - e.z * t.y,
                        y: e.z * t.x - e.x * t.z,
                        z: e.x * t.y - e.y * t.x,
                     }
                  },
                  a = {
                     x: { x: 1, y: 0, z: 0 },
                     y: { x: 0, y: 1, z: 0 },
                     z: { x: 0, y: 0, z: 1 },
                  },
                  s = function (e, t = 0) {
                     var n = 0,
                        i = 1
                     if (t) {
                        var o = (t * Math.PI) / 180
                        ;(n = Math.cos(o / 2)), (i = Math.sin(o / 2) / r(e))
                     }
                     return [n, e.x * i, e.y * i, e.z * i]
                  },
                  l = function (e, t) {
                     return [
                        e[0] * t[0] - e[1] * t[1] - e[2] * t[2] - e[3] * t[3],
                        e[1] * t[0] + e[0] * t[1] - e[3] * t[2] + e[2] * t[3],
                        e[2] * t[0] + e[3] * t[1] + e[0] * t[2] - e[1] * t[3],
                        e[3] * t[0] - e[2] * t[1] + e[1] * t[2] + e[0] * t[3],
                     ]
                  },
                  d = function (e, t) {
                     for (
                        var n = (t.order ? t.order : 'xyz').split(''),
                           r = [1, 0, 0, 0],
                           i = 0;
                        i < n.length;
                        i++
                     ) {
                        var o = t[n[i]]
                        if (o && !(Math.abs(o) < 1e-4)) {
                           var a = e
                           i > 0 &&
                              (a = {
                                 x: u(e.x, r),
                                 y: u(e.y, r),
                                 z: u(e.z, r),
                              }),
                              (r = l(s(a[n[i]], o), r))
                        }
                     }
                     return r
                  },
                  u = function (e, n) {
                     var r = s(e)
                     return (function (e) {
                        return { x: t(e[1]), y: t(e[2]), z: t(e[3]) }
                     })(
                        (r = l(
                           l(n, r),
                           (function (e) {
                              return [e[0], -e[1], -e[2], -e[3]]
                           })(n),
                        )),
                     )
                  },
                  c = function (e, t) {
                     var n = d(e, t)
                     return { x: u(e.x, n), y: u(e.y, n), z: u(e.z, n) }
                  },
                  p = function (e, t, n) {
                     var a = r(t),
                        s = r(n)
                     if (!a || !s) return 0
                     var l = i(t, n) / a / s,
                        d = (180 * Math.acos(l)) / Math.PI
                     return (function (e, t, n) {
                        return i(o(e, t), n)
                     })(t, n, e) > 0
                        ? d
                        : -d
                  },
                  v = function (e, n, r) {
                     var i,
                        a = o(e, n)
                     return t((i = a).x) || t(i.y) || t(i.z)
                        ? 90 - p(e, r, a)
                        : 0
                  },
                  m = function (e, n) {
                     var r = n[0],
                        i = n[1],
                        o = n[2],
                        s = n.split('').reverse().join(''),
                        l = v(e[o], a[r], e[r]),
                        d = { order: s }
                     d[o] = -l
                     var u = c(e, d),
                        m = p(u[i], a[r], u[r]),
                        f = p(a[r], a[i], u[i]),
                        g = {}
                     return (
                        (g.order = n),
                        (g[r] = t(f)),
                        (g[i] = t(m)),
                        (g[o] = t(l)),
                        g
                     )
                  },
                  f = function (e, t) {
                     for (; t > e + 180; ) t -= 360
                     for (; t < e - 180; ) t += 360
                     return t
                  },
                  g = function (e, t) {
                     return (function (e, t) {
                        for (var n, r, i = 0; i < t.length; ++i) {
                           var o = {
                                 order: t[i].order,
                                 x: f(e.x, t[i].x),
                                 y: f(e.y, t[i].y),
                                 z: f(e.z, t[i].z),
                              },
                              a =
                                 Math.abs(o.x - e.x) +
                                 Math.abs(o.y - e.y) +
                                 Math.abs(o.z - e.z)
                           ;(!i || a < n) && ((n = a), (r = o))
                        }
                        return r
                     })(
                        e,
                        (function (e) {
                           for (
                              var t = [
                                    'xyz',
                                    'xzy',
                                    'yxz',
                                    'yzx',
                                    'zxy',
                                    'zyx',
                                 ],
                                 n = [],
                                 r = 0;
                              r < t.length;
                              ++r
                           )
                              n.push(m(e, t[r]))
                           return n
                        })(t),
                     )
                  },
                  y = {
                     translateRelative: function (e, t) {
                        var n,
                           r,
                           i = ((n = e), (r = d(a, t)), u(n, r))
                        return (
                           (i.rotate = (function (e) {
                              if (e.length <= 0)
                                 return { x: 0, y: 0, z: 0, order: 'xyz' }
                              for (var t = a, n = 0; n < e.length; n++)
                                 t = c(t, e[n])
                              return g(e[0], t)
                           })([t, e.rotate])),
                           i
                        )
                     },
                  }
               return (n['impress-root-' + e] = y), y
            },
         })
      })(document, window),
      (function (e) {
         var t,
            n = 0,
            r = 0,
            i = null,
            o = null
         e.addEventListener(
            'impress:init',
            function (r) {
               ;(t = r.detail.api.lib.util), (i = r.detail.api)
               var a = r.target.dataset,
                  s = t.getUrlParamValue('impress-autoplay') || a.autoplay
               s && (n = t.toNumber(s, 0))
               var l = e.querySelector('#impress-toolbar')
               l && p(l),
                  i.lib.gc.pushCallback(function () {
                     clearTimeout(o)
                  })
            },
            !1,
         ),
            e.addEventListener(
               'impress:autoplay:pause',
               function (e) {
                  ;(l = 'paused'), a(e)
               },
               !1,
            ),
            e.addEventListener(
               'impress:autoplay:play',
               function (e) {
                  ;(l = 'playing'), a(e)
               },
               !1,
            )
         var a = function (e) {
            var i = e.target
            ;(r = t.toNumber(i.dataset.autoplay, n)), s('paused' === l ? 0 : r)
         }
         e.addEventListener(
            'impress:stepenter',
            function (e) {
               a(e)
            },
            !1,
         ),
            e.addEventListener(
               'impress:substep:enter',
               function (e) {
                  a(e)
               },
               !1,
            )
         var s = function (e) {
               o && clearTimeout(o),
                  e > 0 &&
                     (o = setTimeout(function () {
                        i.next()
                     }, 1e3 * e)),
                  c()
            },
            l = 'not clicked',
            d = null,
            u = function () {
               return r > 0 && 'paused' !== l ? '||' : '&#9654;'
            },
            c = function () {
               if (d) {
                  var e = d.offsetWidth,
                     t = d.offsetHeight
                  ;(d.innerHTML = u()),
                     d.style.width || (d.style.width = e + 'px'),
                     d.style.height || (d.style.height = t + 'px')
               }
            },
            p = function (i) {
               var o =
                  '<button id="impress-autoplay-playpause" title="Autoplay" class="impress-autoplay">' +
                  u() +
                  '</button>'
               ;(d = (function (t) {
                  var n = e.createElement('div')
                  return (n.innerHTML = t), n.firstChild
               })(o)).addEventListener('click', function () {
                  'playing' ===
                  (l = r > 0 && 'paused' !== l ? 'paused' : 'playing')
                     ? (0 === n && (n = 7), 0 === r && (r = n), s(r))
                     : 'paused' === l && s(0)
               }),
                  t.triggerEvent(i, 'impress:toolbar:appendChild', {
                     group: 10,
                     element: d,
                  })
            }
      })(document),
      (function (e) {
         var t,
            n,
            r,
            i = null,
            o = !1,
            a = null,
            s = null,
            l = null,
            d = function (e, t) {
               var n, r
               for (n in t)
                  t.hasOwnProperty(n) &&
                     null !== (r = u(n)) &&
                     (e.style[r] = t[n])
               return e
            },
            u =
               ((t = e.createElement('dummy').style),
               (n = 'Webkit Moz O ms Khtml'.split(' ')),
               (r = {}),
               function (e) {
                  if (void 0 === r[e]) {
                     var i = e.charAt(0).toUpperCase() + e.substr(1),
                        o = (e + ' ' + n.join(i + ' ') + i).split(' ')
                     for (var a in ((r[e] = null), o))
                        if (void 0 !== t[o[a]]) {
                           r[e] = o[a]
                           break
                        }
                  }
                  return r[e]
               }),
            c = function () {
               o &&
                  (d(i, { display: 'block' }),
                  (o = !1),
                  a.triggerEvent(s, 'impress:autoplay:play', {}))
            }
         e.addEventListener(
            'impress:init',
            function (t) {
               ;(l = t.detail.api),
                  (a = l.lib.util),
                  (s = t.target),
                  (i = s.firstElementChild)
               var n = l.lib.gc
               n.addEventListener(
                  e,
                  'keydown',
                  function (e) {
                     ;(66 !== e.keyCode && 190 !== e.keyCode) ||
                        (e.preventDefault(),
                        o || o
                           ? c()
                           : (d(i, { display: (o = !o) ? 'none' : 'block' }),
                             (o = !0),
                             a.triggerEvent(s, 'impress:autoplay:pause', {})))
                  },
                  !1,
               ),
                  n.addEventListener(
                     e,
                     'keyup',
                     function (e) {
                        ;(66 !== e.keyCode && 190 !== e.keyCode) ||
                           e.preventDefault()
                     },
                     !1,
                  )
            },
            !1,
         ),
            e.addEventListener(
               'impress:stepleave',
               function () {
                  c()
               },
               !1,
            )
      })(document),
      (function (e, t) {
         const n = /^-----$/m,
            r = function (e) {
               var t = e.textContent,
                  r = t.match(/^([ \t]*)\S/m)
               return (
                  null !== r &&
                     (t = t.replace(new RegExp('^' + r[1], 'mg'), '')),
                  t.split(n)
               )
            },
            i = function (n) {
               var i = t.hasOwnProperty('marked')
                  ? function (e, t) {
                       return marked.parse(t)
                    }
                  : t.hasOwnProperty('markdown')
                  ? function (e, t) {
                       var n = e.dataset.markdownDialect
                       return markdown.toHTML(t, n)
                    }
                  : null
               if (i)
                  for (var o of e.querySelectorAll(n)) {
                     var a = null
                     o.id && ((a = o.id), (o.id = ''))
                     var s = null
                     o.title && ((s = o.title), (o.title = ''))
                     for (var l = r(o), d = [o], u = 1; u < l.length; ++u) {
                        var c = o.cloneNode(!1)
                        ;(c.id = ''),
                           o.parentNode.insertBefore(c, d[0]),
                           d.splice(0, 0, c)
                     }
                     a && (d[0].id = a)
                     for (var p = 0; p < l.length; ++p)
                        (d[p].innerHTML = i(d[p], l[p])),
                           s && 0 === p && (d[p].title = s)
                  }
            }
         impress.addPreInitPlugin(function () {
            i('.markdown'),
               t.hljs && hljs.initHighlightingOnLoad(),
               t.mermaid && mermaid.initialize({ startOnLoad: !0 })
         }, 1)
      })(document, window),
      (function (e) {
         e.addEventListener(
            'impress:init',
            function (t) {
               t.target
               var n = t.detail.api.lib.gc
               for (var r of [
                  'input',
                  'textarea',
                  'select',
                  '[contenteditable=true]',
               ]) {
                  var i = e.querySelectorAll(r)
                  if (i)
                     for (var o = 0; o < i.length; o++) {
                        var a = i[o]
                        n.addEventListener(a, 'keydown', function (e) {
                           e.stopPropagation()
                        }),
                           n.addEventListener(a, 'keyup', function (e) {
                              e.stopPropagation()
                           })
                     }
               }
            },
            !1,
         ),
            e.addEventListener(
               'impress:stepleave',
               function () {
                  e.activeElement.blur()
               },
               !1,
            )
      })(document),
      (function (e) {
         e.addEventListener(
            'impress:init',
            function (t) {
               var n = t.detail.api,
                  r = t.target,
                  i = n.lib.gc,
                  o = n.lib.util
               i.addEventListener(
                  e,
                  'keydown',
                  function (t) {
                     var n
                     'F5' === t.code &&
                        (t.preventDefault(),
                        (n = e.documentElement),
                        e.fullscreenElement || n.requestFullscreen(),
                        o.triggerEvent(
                           r.querySelector('.active'),
                           'impress:steprefresh',
                        )),
                        ('Escape' !== t.key && 'F5' !== t.key) ||
                           (t.preventDefault(),
                           e.fullscreenElement && e.exitFullscreen(),
                           o.triggerEvent(
                              r.querySelector('.active'),
                              'impress:steprefresh',
                           ))
                  },
                  !1,
               ),
                  o.triggerEvent(e, 'impress:help:add', {
                     command: 'F5 / ESC',
                     text: 'Fullscreen: Enter / Exit',
                     row: 200,
                  })
            },
            !1,
         )
      })(document),
      (function (e, t) {
         var n
         e.addEventListener(
            'impress:init',
            function (e) {
               n = e.detail.api.lib
            },
            !1,
         )
         var r = function (e) {
            return !isNaN(e)
         }
         impress.addPreStepLeavePlugin(function (i) {
            if (i && i.target) {
               var o = i.target.dataset,
                  a = e.querySelectorAll('.step')
               if (
                  void 0 !== o.gotoKeyList &&
                  void 0 !== o.gotoNextList &&
                  void 0 !== i.origEvent &&
                  void 0 !== i.origEvent.key
               ) {
                  var s = o.gotoKeyList.split(' '),
                     l = o.gotoNextList.split(' ')
                  if (s.length !== l.length)
                     t.console.log(
                        "impress goto plugin: data-goto-key-list and data-goto-next-list don't match:",
                     ),
                        t.console.log(s),
                        t.console.log(l)
                  else {
                     var d = s.indexOf(i.origEvent.key)
                     if (d >= 0) {
                        var u = l[d]
                        if (r(u))
                           return (
                              (i.detail.next = a[u]),
                              void (i.detail.transitionDuration =
                                 n.util.toNumber(
                                    i.detail.next.dataset.transitionDuration,
                                    i.detail.transitionDuration,
                                 ))
                           )
                        if (
                           (c = e.getElementById(u)) &&
                           c.classList.contains('step')
                        )
                           return (
                              (i.detail.next = c),
                              void (i.detail.transitionDuration =
                                 n.util.toNumber(
                                    i.detail.next.dataset.transitionDuration,
                                    i.detail.transitionDuration,
                                 ))
                           )
                        t.console.log(
                           'impress goto plugin: ' +
                              u +
                              ' is not a step in this impress presentation.',
                        )
                     }
                  }
               }
               if (r(o.gotoNext) && 'next' === i.detail.reason)
                  return (
                     (i.detail.next = a[o.gotoNext]),
                     void (i.detail.transitionDuration = n.util.toNumber(
                        i.detail.next.dataset.transitionDuration,
                        i.detail.transitionDuration,
                     ))
                  )
               if (o.gotoNext && 'next' === i.detail.reason) {
                  if (
                     (c = e.getElementById(o.gotoNext)) &&
                     c.classList.contains('step')
                  )
                     return (
                        (i.detail.next = c),
                        void (i.detail.transitionDuration = n.util.toNumber(
                           i.detail.next.dataset.transitionDuration,
                           i.detail.transitionDuration,
                        ))
                     )
                  t.console.log(
                     'impress goto plugin: ' +
                        o.gotoNext +
                        ' is not a step in this impress presentation.',
                  )
               }
               if (r(o.gotoPrev) && 'prev' === i.detail.reason)
                  return (
                     (i.detail.next = a[o.gotoPrev]),
                     void (i.detail.transitionDuration = n.util.toNumber(
                        i.detail.next.dataset.transitionDuration,
                        i.detail.transitionDuration,
                     ))
                  )
               if (o.gotoPrev && 'prev' === i.detail.reason) {
                  if (
                     (c = e.getElementById(o.gotoPrev)) &&
                     c.classList.contains('step')
                  )
                     return (
                        (i.detail.next = c),
                        void (i.detail.transitionDuration = n.util.toNumber(
                           i.detail.next.dataset.transitionDuration,
                           i.detail.transitionDuration,
                        ))
                     )
                  t.console.log(
                     'impress goto plugin: ' +
                        o.gotoPrev +
                        ' is not a step in this impress presentation.',
                  )
               }
               if (r(o.goto))
                  return (
                     (i.detail.next = a[o.goto]),
                     void (i.detail.transitionDuration = n.util.toNumber(
                        i.detail.next.dataset.transitionDuration,
                        i.detail.transitionDuration,
                     ))
                  )
               if (o.goto) {
                  var c
                  if (
                     (c = e.getElementById(o.goto)) &&
                     c.classList.contains('step')
                  )
                     return (
                        (i.detail.next = c),
                        void (i.detail.transitionDuration = n.util.toNumber(
                           i.detail.next.dataset.transitionDuration,
                           i.detail.transitionDuration,
                        ))
                     )
                  t.console.log(
                     'impress goto plugin: ' +
                        o.goto +
                        ' is not a step in this impress presentation.',
                  )
               }
            }
         })
      })(document, window),
      (function (e, t) {
         var n,
            r = [],
            i = function () {
               var t = e.getElementById('impress-help')
               if (t) {
                  var n = []
                  for (var i in r) for (var o in i) n.push(r[i][o])
                  n && (t.innerHTML = '<table>\n' + n.join('\n') + '</table>\n')
               }
            }
         e.addEventListener(
            'keyup',
            function (r) {
               var i
               ;(72 !== r.keyCode && 191 !== r.keyCode) ||
                  (r.preventDefault(),
                  (i = e.getElementById('impress-help')) &&
                     ('block' === i.style.display
                        ? (i.style.display = 'none')
                        : ((i.style.display = 'block'), t.clearTimeout(n))))
            },
            !1,
         ),
            e.addEventListener('impress:help:add', function (e) {
               var t = e.detail.row
               ;('object' == typeof r[t] && r[t].isArray) || (r[t] = []),
                  r[e.detail.row].push(
                     '<tr><td><strong>' +
                        e.detail.command +
                        '</strong></td><td>' +
                        e.detail.text +
                        '</td></tr>',
                  ),
                  i()
            }),
            e.addEventListener('impress:init', function (o) {
               i()
               var a,
                  s,
                  l,
                  d,
                  u = e.getElementById('impress-help')
               u &&
                  ((u.style.display = 'block'),
                  (n = t.setTimeout(function () {
                     e.getElementById('impress-help').style.display = 'none'
                  }, 7e3)),
                  o.detail.api.lib.gc.pushCallback(function () {
                     t.clearTimeout(n),
                        (u.style.display = ''),
                        (u.innerHTML = ''),
                        (r = [])
                  }))
               ;(a = e),
                  (s = 'impress:help:add'),
                  (l = { command: 'H', text: 'Show this help', row: 0 }),
                  (d = e.createEvent('CustomEvent')).initCustomEvent(
                     s,
                     !0,
                     !0,
                     l,
                  ),
                  a.dispatchEvent(d)
            })
      })(document, window),
      (function (e, t) {
         var n
         switch (navigator.language) {
            case 'de':
               n = {
                  noNotes: '<div class="noNotes">Keine Notizen hierzu</div>',
                  restart: 'Neustart',
                  clickToOpen: 'Klicken um Sprecherkonsole zu öffnen',
                  prev: 'zurück',
                  next: 'weiter',
                  loading: 'initalisiere',
                  ready: 'Bereit',
                  moving: 'in Bewegung',
                  useAMPM: !1,
               }
               break
            case 'zh-CN':
            case 'zh-cn':
               n = {
                  noNotes: '<div class="noNotes">当前帧没有备注</div>',
                  restart: '重新开始',
                  clickToOpen: '点击以打开演讲者控制界面',
                  prev: '上一帧',
                  next: '下一帧',
                  loading: '加载中',
                  ready: '就绪',
                  moving: '移动中',
                  useAMPM: !1,
               }
               break
            case 'en':
            default:
               n = {
                  noNotes: '<div class="noNotes">No notes for this step</div>',
                  restart: 'Restart',
                  clickToOpen: 'Click to open speaker console',
                  prev: 'Prev',
                  next: 'Next',
                  loading: 'Loading',
                  ready: 'Ready',
                  moving: 'Moving',
                  useAMPM: !1,
               }
         }
         const r =
            '<!DOCTYPE html><html id="impressconsole"><head>{{cssStyle}}{{cssLink}}</head><body><div id="console"><div id="views"><iframe id="slideView" scrolling="no"></iframe><iframe id="preView" scrolling="no"></iframe><div id="blocker"></div></div><div id="notes"></div></div><div id="controls"> <div id="prev"><a  href="#" onclick="impress().prev(); return false;" />{{prev}}</a></div><div id="next"><a  href="#" onclick="impress().next(); return false;" />{{next}}</a></div><div id="clock">--:--</div><div id="timer" onclick="timerReset()">00m 00s</div><div id="status">{{loading}}</div></div></body></html>'
         var i = void 0,
            o = void 0,
            a = {},
            s = function (e) {
               return (e < 10 ? '0' : '') + e
            },
            l = (t.impressConsole = function (l) {
               if (a[(l = l || 'impress')]) return a[l]
               var u = e.getElementById(l),
                  c = null,
                  p = function () {
                     for (
                        var t = '', r = e.querySelector('.active');
                        !r.nextElementSibling && r.parentNode;

                     )
                        r = r.parentNode
                     for (r = r.nextElementSibling; r; ) {
                        if (
                           (t = r.attributes.class) &&
                           -1 !== t.value.indexOf('step')
                        )
                           return (
                              (c.document.getElementById('blocker').innerHTML =
                                 n.next),
                              r
                           )
                        if (r.firstElementChild) r = r.firstElementChild
                        else {
                           for (; !r.nextElementSibling && r.parentNode; )
                              r = r.parentNode
                           r = r.nextElementSibling
                        }
                     }
                     return (
                        (c.document.getElementById('blocker').innerHTML =
                           n.restart),
                        e.querySelector('.step')
                     )
                  },
                  v = function () {
                     if (c) {
                        var t = e
                           .querySelector('.active')
                           .querySelector('.notes')
                        ;(t = t ? t.innerHTML : n.noNotes),
                           (c.document.getElementById('notes').innerHTML = t)
                        var r = e.URL.substring(0, e.URL.search('#/')),
                           i = r + '#' + e.querySelector('.active').id,
                           o = r + '#' + p().id,
                           a = c.document.getElementById('slideView')
                        a.src !== i && (a.src = i)
                        var s = c.document.getElementById('preView')
                        s.src !== o && (s.src = o),
                           (c.document.getElementById('status').innerHTML =
                              '<span class="moving">' + n.moving + '</span>')
                     }
                  },
                  m = function () {
                     if (c) {
                        var t = e
                           .querySelector('.active')
                           .querySelector('.notes')
                        t = t ? t.innerHTML : n.noNotes
                        var r = c.document.getElementById('notes')
                        ;(r.innerHTML = t), (r.scrollTop = 0)
                        var i = e.URL.substring(0, e.URL.search('#/')),
                           o = i + '#' + e.querySelector('.active').id,
                           a = i + '#' + p().id,
                           s = c.document.getElementById('slideView')
                        s.src !== o && (s.src = o)
                        var l = c.document.getElementById('preView')
                        l.src !== a && (l.src = a),
                           (c.document.getElementById('status').innerHTML =
                              '<span  class="ready">' + n.ready + '</span>')
                     }
                  },
                  f = function (e) {
                     c &&
                        ('next' === e.detail.reason && g(),
                        'prev' === e.detail.reason && y())
                  },
                  g = function () {
                     var e = c.document.getElementById('slideView')
                     h(e, 'impress:substep:show')
                  },
                  y = function () {
                     var e = c.document.getElementById('slideView')
                     h(e, 'impress:substep:hide')
                  },
                  h = function (e, t, n) {
                     var r = e.contentDocument.createEvent('CustomEvent')
                     r.initCustomEvent(t, !0, !0, n),
                        e.contentDocument.dispatchEvent(r)
                  },
                  b = function () {
                     var e = c.document.getElementById('notes')
                     e.scrollTopMax - e.scrollTop > 20
                        ? (e.scrollTop = e.scrollTop + 0.8 * e.clientHeight)
                        : t.impress().next()
                  },
                  x = function () {
                     c.timerStart = new Date()
                  },
                  E = function (e, t, n) {
                     void 0 === n && (n = c),
                        n.document.addEventListener(
                           'keydown',
                           function (t) {
                              t.ctrlKey ||
                                 t.altKey ||
                                 t.shiftKey ||
                                 t.metaKey ||
                                 -1 === e.indexOf(t.keyCode) ||
                                 t.preventDefault()
                           },
                           !1,
                        ),
                        n.document.addEventListener(
                           'keyup',
                           function (n) {
                              n.ctrlKey ||
                                 n.altKey ||
                                 n.shiftKey ||
                                 n.metaKey ||
                                 -1 === e.indexOf(n.keyCode) ||
                                 (t(), n.preventDefault())
                           },
                           !1,
                        )
                  },
                  L = function () {
                     var e = c.document.getElementById('slideView'),
                        t = c.document.getElementById('preView')
                     e.contentDocument.body.classList.add('impress-console'),
                        t.contentDocument.body.classList.add('impress-console'),
                        void 0 !== o &&
                           (e.contentDocument.head.insertAdjacentHTML(
                              'beforeend',
                              '<link rel="stylesheet" type="text/css" href="' +
                                 o +
                                 '">',
                           ),
                           t.contentDocument.head.insertAdjacentHTML(
                              'beforeend',
                              '<link rel="stylesheet" type="text/css" href="' +
                                 o +
                                 '">',
                           )),
                        e.addEventListener('load', function () {
                           e.contentDocument.body.classList.add(
                              'impress-console',
                           ),
                              void 0 !== o &&
                                 e.contentDocument.head.insertAdjacentHTML(
                                    'beforeend',
                                    '<link rel="stylesheet" type="text/css" href="' +
                                       o +
                                       '">',
                                 )
                        }),
                        t.addEventListener('load', function () {
                           t.contentDocument.body.classList.add(
                              'impress-console',
                           ),
                              void 0 !== o &&
                                 t.contentDocument.head.insertAdjacentHTML(
                                    'beforeend',
                                    '<link rel="stylesheet" type="text/css" href="' +
                                       o +
                                       '">',
                                 )
                        })
                  },
                  w = function () {
                     if (!top.isconsoleWindow) {
                        if (!c || c.closed) {
                           if (null == (c = t.open('', 'impressConsole'))) {
                              var o = e.createElement('div')
                              ;(o.id = 'impress-console-button'),
                                 (o.style.position = 'fixed'),
                                 (o.style.left = 0),
                                 (o.style.top = 0),
                                 (o.style.right = 0),
                                 (o.style.bottom = 0),
                                 (o.style.backgroundColor =
                                    'rgba(255, 255, 255, 0.9)')
                              var s =
                                 "var x = document.getElementById('impress-console-button');x.parentNode.removeChild(x);var r = document.getElementById('" +
                                 l +
                                 "');impress('" +
                                 l +
                                 "').lib.util.triggerEvent(r, 'impress:console:open', {})"
                              return (
                                 (o.innerHTML =
                                    '<button style="margin: 25vh 25vw;width:50vw;height:50vh;" onclick="' +
                                    s +
                                    '">' +
                                    n.clickToOpen +
                                    '</button>'),
                                 void e.body.appendChild(o)
                              )
                           }
                           var u = ''
                           return (
                              void 0 !== i &&
                                 (u =
                                    '<link rel="stylesheet" type="text/css" media="screen" href="' +
                                    i +
                                    '">'),
                              c.document.open(),
                              c.document.write(
                                 r
                                    .replace('{{cssStyle}}', d())
                                    .replace('{{cssLink}}', u)
                                    .replace(/{{.*?}}/gi, function (e) {
                                       return n[e.substring(2, e.length - 2)]
                                    }),
                              ),
                              (c.document.title =
                                 'Speaker Console (' + e.title + ')'),
                              (c.impress = t.impress),
                              (c.isconsoleWindow = !0),
                              (c.onload = L),
                              (c.timerStart = new Date()),
                              (c.timerReset = x),
                              (c.clockInterval = setInterval(
                                 a[l].clockTick,
                                 1e3,
                              )),
                              E([33, 37, 38], t.impress().prev),
                              E([34, 39, 40], t.impress().next),
                              E([32], b),
                              E([82], x),
                              (c.onbeforeunload = function () {
                                 clearInterval(c.clockInterval)
                              }),
                              m(),
                              (c.initialized = !1),
                              c.document.close(),
                              (t.onresize = z),
                              (c.onresize = z),
                              c
                           )
                        }
                        c.focus()
                     }
                  },
                  z = function () {
                     var e = c.document.getElementById('slideView'),
                        n = c.document.getElementById('preView'),
                        r = t.innerHeight / t.innerWidth,
                        i = c.document.getElementById('views'),
                        o = e.offsetWidth - e.clientWidth,
                        a = i.clientWidth - o,
                        s = Math.floor(a * r),
                        l = s + 4,
                        d = Math.floor(0.7 * a),
                        u = Math.floor(0.7 * s)
                     i.clientHeight - o < l + u &&
                        ((u = i.clientHeight - o - l), (d = Math.floor(u / r))),
                        d <= Math.floor(0.5 * a) &&
                           ((a = i.clientWidth - o),
                           (l =
                              (s = Math.floor((i.clientHeight - o - 4) / 1.5)) +
                              4),
                           (d = Math.floor(0.5 * a)),
                           (u = i.clientHeight - o - l)),
                        (e.style.width = a + 'px'),
                        (e.style.height = s + 'px'),
                        (n.style.top = l + 'px'),
                        (n.style.width = d + 'px'),
                        (n.style.height = u + 'px')
                  },
                  k = function (e, n) {
                     void 0 !== e
                        ? (i = e)
                        : void 0 !== u.dataset.consoleCss &&
                          (i = u.dataset.consoleCss),
                        void 0 !== n
                           ? (o = n)
                           : void 0 !== u.dataset.consoleCssIframe &&
                             (o = u.dataset.consoleCssIframe),
                        u.addEventListener('impress:stepleave', v),
                        u.addEventListener('impress:stepenter', m),
                        u.addEventListener(
                           'impress:substep:stepleaveaborted',
                           f,
                        ),
                        u.addEventListener('impress:substep:show', g),
                        u.addEventListener('impress:substep:hide', y),
                        (t.onunload = function () {
                           c && !c.closed && c.close()
                        }),
                        E([80], w, t),
                        'true' === u.dataset.consoleAutolaunch && w()
                  }
               return (
                  u.addEventListener('impress:console:open', function () {
                     w()
                  }),
                  u.addEventListener(
                     'impress:console:registerKeyEvent',
                     function (e) {
                        E(e.detail.keyCodes, e.detail.handler, e.detail.window)
                     },
                  ),
                  (a[l] = {
                     init: function (e, n) {
                        ;(void 0 !== e && 'css/impressConsole.css' !== e) ||
                           (void 0 !== n && 'css/iframe.css' !== n) ||
                           t.console.log(
                              'impressConsole().init() is deprecated. impressConsole is now initialized automatically when you call impress().init().',
                           ),
                           k(e, n)
                     },
                     open: w,
                     clockTick: function () {
                        var e = new Date(),
                           t = e.getHours(),
                           r = e.getMinutes(),
                           i = e.getSeconds(),
                           o = ''
                        n.useAMPM &&
                           ((o = t < 12 ? 'AM' : 'PM'),
                           (t = 0 === (t = t > 12 ? t - 12 : t) ? 12 : t))
                        var a = s(t) + ':' + s(r) + ':' + s(i) + ' ' + o
                        ;(c.document.getElementById(
                           'clock',
                        ).firstChild.nodeValue = a),
                           (i = Math.floor((e - c.timerStart) / 1e3)),
                           (r = Math.floor(i / 60)),
                           (i = Math.floor(i % 60)),
                           (c.document.getElementById(
                              'timer',
                           ).firstChild.nodeValue = s(r) + 'm ' + s(i) + 's'),
                           c.initialized ||
                              (c.document
                                 .getElementById('slideView')
                                 .contentWindow.scrollTo(0, 0),
                              c.document
                                 .getElementById('preView')
                                 .contentWindow.scrollTo(0, 0),
                              (c.initialized = !0))
                     },
                     registerKeyEvent: E,
                     _init: k,
                  }),
                  a[l]
               )
            })
         e.addEventListener('impress:init', function (t) {
            l(t.target.id)._init(),
               (function (t, n, r) {
                  var i = e.createEvent('CustomEvent')
                  i.initCustomEvent(n, !0, !0, r), t.dispatchEvent(i)
               })(e, 'impress:help:add', {
                  command: 'P',
                  text: 'Presenter console',
                  row: 10,
               })
         })
         var d = function () {
            return '<style>\n            #impressconsole body {\n                background-color: rgb(255, 255, 255);\n                padding: 0;\n                margin: 0;\n                font-family: verdana, arial, sans-serif;\n                font-size: 2vw;\n            }\n\n            #impressconsole div#console {\n                position: absolute;\n                top: 0.5vw;\n                left: 0.5vw;\n                right: 0.5vw;\n                bottom: 3vw;\n                margin: 0;\n            }\n\n            #impressconsole div#views, #impressconsole div#notes {\n                position: absolute;\n                top: 0;\n                bottom: 0;\n            }\n\n            #impressconsole div#views {\n                left: 0;\n                right: 50vw;\n                overflow: hidden;\n            }\n\n            #impressconsole div#blocker {\n                position: absolute;\n                right: 0;\n                bottom: 0;\n            }\n\n            #impressconsole div#notes {\n                left: 50vw;\n                right: 0;\n                overflow-x: hidden;\n                overflow-y: auto;\n                padding: 0.3ex;\n                background-color: rgb(255, 255, 255);\n                border: solid 1px rgb(120, 120, 120);\n            }\n\n            #impressconsole div#notes .noNotes {\n                color: rgb(200, 200, 200);\n            }\n\n            #impressconsole div#notes p {\n                margin-top: 0;\n            }\n\n            #impressconsole iframe {\n                position: absolute;\n                margin: 0;\n                padding: 0;\n                left: 0;\n                border: solid 1px rgb(120, 120, 120);\n            }\n\n            #impressconsole iframe#slideView {\n                top: 0;\n                width: 49vw;\n                height: 49vh;\n            }\n\n            #impressconsole iframe#preView {\n                opacity: 0.7;\n                top: 50vh;\n                width: 30vw;\n                height: 30vh;\n            }\n\n            #impressconsole div#controls {\n                margin: 0;\n                position: absolute;\n                bottom: 0.25vw;\n                left: 0.5vw;\n                right: 0.5vw;\n                height: 2.5vw;\n                background-color: rgb(255, 255, 255);\n                background-color: rgba(255, 255, 255, 0.6);\n            }\n\n            #impressconsole div#prev, div#next {\n            }\n\n            #impressconsole div#prev a, #impressconsole div#next a {\n                display: block;\n                border: solid 1px rgb(70, 70, 70);\n                border-radius: 0.5vw;\n                font-size: 1.5vw;\n                padding: 0.25vw;\n                text-decoration: none;\n                background-color: rgb(220, 220, 220);\n                color: rgb(0, 0, 0);\n            }\n\n            #impressconsole div#prev a:hover, #impressconsole div#next a:hover {\n                background-color: rgb(245, 245, 245);\n            }\n\n            #impressconsole div#prev {\n                float: left;\n            }\n\n            #impressconsole div#next {\n                float: right;\n            }\n\n            #impressconsole div#status {\n                margin-left: 2em;\n                margin-right: 2em;\n                text-align: center;\n                float: right;\n            }\n\n            #impressconsole div#clock {\n                margin-left: 2em;\n                margin-right: 2em;\n                text-align: center;\n                float: left;\n            }\n\n            #impressconsole div#timer {\n                margin-left: 2em;\n                margin-right: 2em;\n                text-align: center;\n                float: left;\n            }\n\n            #impressconsole span.moving {\n                color: rgb(255, 0, 0);\n            }\n\n            #impressconsole span.ready {\n                color: rgb(0, 128, 0);\n            }\n        </style>'
         }
      })(document, window),
      (function (e, t) {
         var n, r, i, o, a, s, l, d, u, c, p, v, m, f, g
         ;(o = []),
            e.addEventListener(
               'impress:init',
               function (e) {
                  ;(n = e.target),
                     (r = e.detail.api),
                     (i = r.lib.gc),
                     s(),
                     i.pushCallback(g)
               },
               !1,
            ),
            (g = function () {
               var e, t
               for (l(), t = 0; t < o.length; t += 1)
                  (e = o[t]).node.removeAttribute(e.attr)
               o = []
            }),
            (f = function (e, t) {
               var n, r, i, o
               for (n = 'data-media-' + e, i = 0; i < t.length; i += 1)
                  if ((o = t[i]).hasAttribute(n))
                     return '' === (r = o.getAttribute(n)) || 'true' === r
            }),
            (p = function (t) {
               var n = t.target.nodeName.toLowerCase()
               e.body.classList.add('impress-media-' + n + '-playing'),
                  e.body.classList.remove('impress-media-' + n + '-paused')
            }),
            (v = function (t) {
               var n = t.target.nodeName.toLowerCase()
               e.body.classList.add('impress-media-' + n + '-paused'),
                  e.body.classList.remove('impress-media-' + n + '-playing')
            }),
            (m = function (t) {
               var n = t.target.nodeName.toLowerCase()
               e.body.classList.remove('impress-media-' + n + '-playing'),
                  e.body.classList.remove('impress-media-' + n + '-paused')
            }),
            (l = function () {
               var t, n
               for (t in (n = ['video', 'audio']))
                  e.body.classList.remove('impress-media-' + n[t] + '-playing'),
                     e.body.classList.remove(
                        'impress-media-' + n[t] + '-paused',
                     )
            }),
            (a = function () {
               var e, t, r, a
               for (
                  t = n.querySelectorAll('audio, video'), e = 0;
                  e < t.length;
                  e += 1
               )
                  (a = t[e].nodeName.toLowerCase()),
                     null == (r = t[e]).getAttribute('id') &&
                        (r.setAttribute('id', 'media-' + a + '-' + e),
                        o.push({ node: r, attr: 'id' })),
                     i.addEventListener(r, 'play', p),
                     i.addEventListener(r, 'playing', p),
                     i.addEventListener(r, 'pause', v),
                     i.addEventListener(r, 'ended', m)
            }),
            (s = function () {
               var t, n, r
               for (
                  a(), t = e.getElementsByClassName('step'), r = 0;
                  r < t.length;
                  r += 1
               )
                  (n = t[r]),
                     i.addEventListener(n, 'impress:stepenter', u),
                     i.addEventListener(n, 'impress:stepleave', c)
            }),
            (d = function () {
               return {
                  preview:
                     null !== t.frameElement && 'preView' === t.frameElement.id,
                  slideView:
                     null !== t.frameElement &&
                     'slideView' === t.frameElement.id,
               }
            }),
            (u = function (e) {
               var t, r, i, o, a
               if (e && e.target)
                  for (
                     t = e.target,
                        l(),
                        r = t.querySelectorAll('audio, video'),
                        o = 0;
                     o < r.length;
                     o += 1
                  )
                     (i = r[o]),
                        (a = d()),
                        f('autoplay', [i, t, n]) &&
                           !a.preview &&
                           (a.slideView && (i.muted = !0), i.play())
            }),
            (c = function (e) {
               var t, r, i, o, a, s, d
               if (e && e.target) {
                  for (
                     t = e.target,
                        r = e.target.querySelectorAll('audio, video'),
                        i = 0;
                     i < r.length;
                     i += 1
                  )
                     (o = r[i]),
                        (a = f('autoplay', [o, t, n])),
                        (s = f('autopause', [o, t, n])),
                        void 0 === (d = f('autostop', [o, t, n])) &&
                           void 0 === s &&
                           (d = a),
                        (s || d) && (o.pause(), d && (o.currentTime = 0))
                  l()
               }
            })
      })(document, window),
      (function (e) {
         e.addEventListener('impress:init', function (t) {
            var n = e.body
            ;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
               navigator.userAgent,
            ) && n.classList.add('impress-mobile'),
               t.detail.api.lib.gc.pushCallback(function () {
                  e.body.classList.remove('impress-mobile')
                  var t = e.getElementsByClassName('prev')[0],
                     n = e.getElementsByClassName('next')[0]
                  void 0 !== t && t.classList.remove('prev'),
                     void 0 !== n && n.classList.remove('next')
               })
         }),
            e.addEventListener('impress:stepenter', function (t) {
               var n = e.getElementsByClassName('prev')[0],
                  r = e.getElementsByClassName('next')[0]
               ;(function (t) {
                  for (
                     var n = e.querySelectorAll('.step'), r = n.length - 1;
                     r >= 0;
                     r--
                  )
                     if (n[r] === t)
                        return r - 1 >= 0 ? n[r - 1] : n[n.length - 1]
               })(t.target).classList.add('prev'),
                  (function (t) {
                     for (
                        var n = e.querySelectorAll('.step'), r = 0;
                        r < n.length;
                        r++
                     )
                        if (n[r] === t)
                           return r + 1 < n.length ? n[r + 1] : n[0]
                  })(t.target).classList.add('next'),
                  void 0 !== n && n.classList.remove('prev'),
                  void 0 !== r && r.classList.remove('next')
            })
      })(document),
      (function (e, t) {
         var n,
            r = function () {
               e.body.classList.add('impress-mouse-timeout')
            },
            i = function () {
               n && t.clearTimeout(n),
                  e.body.classList.remove('impress-mouse-timeout'),
                  (n = t.setTimeout(r, 3e3))
            }
         e.addEventListener(
            'impress:init',
            function (r) {
               var o = r.detail.api.lib.gc
               o.addEventListener(e, 'mousemove', i),
                  o.addEventListener(e, 'click', i),
                  o.addEventListener(e, 'touch', i),
                  i(),
                  o.pushCallback(function () {
                     t.clearTimeout(n),
                        e.body.classList.remove('impress-mouse-timeout')
                  })
            },
            !1,
         )
      })(document, window),
      (function (e) {
         e.addEventListener(
            'impress:init',
            function (t) {
               var n = t.detail.api,
                  r = n.lib.gc,
                  i = n.lib.util,
                  o = function (e) {
                     return (
                        !(e.altKey || e.ctrlKey || e.metaKey) &&
                        (9 === e.keyCode ||
                           (!e.shiftKey &&
                              ((e.keyCode >= 32 && e.keyCode <= 34) ||
                                 (e.keyCode >= 37 && e.keyCode <= 40) ||
                                 void 0)))
                     )
                  }
               r.addEventListener(
                  e,
                  'keydown',
                  function (e) {
                     o(e) && e.preventDefault()
                  },
                  !1,
               ),
                  r.addEventListener(
                     e,
                     'keyup',
                     function (e) {
                        if (o(e)) {
                           if (e.shiftKey)
                              switch (e.keyCode) {
                                 case 9:
                                    n.prev()
                              }
                           else
                              switch (e.keyCode) {
                                 case 33:
                                 case 37:
                                 case 38:
                                    n.prev(e)
                                    break
                                 case 9:
                                 case 32:
                                 case 34:
                                 case 39:
                                 case 40:
                                    n.next(e)
                              }
                           e.preventDefault()
                        }
                     },
                     !1,
                  ),
                  r.addEventListener(
                     e,
                     'click',
                     function (t) {
                        var r = t.target
                        try {
                           for (
                              ;
                              'A' !== r.tagName && r !== e.documentElement;

                           )
                              r = r.parentNode
                           if ('A' === r.tagName) {
                              var i = r.getAttribute('href')
                              i &&
                                 '#' === i[0] &&
                                 (r = e.getElementById(i.slice(1)))
                           }
                           n.goto(r) &&
                              (t.stopImmediatePropagation(), t.preventDefault())
                        } catch (e) {
                           if (
                              e instanceof TypeError &&
                              'target is null' === e.message
                           )
                              return
                           throw e
                        }
                     },
                     !1,
                  ),
                  r.addEventListener(
                     e,
                     'click',
                     function (t) {
                        var r = t.target
                        try {
                           for (
                              ;
                              (!r.classList.contains('step') ||
                                 r.classList.contains('active')) &&
                              r !== e.documentElement;

                           )
                              r = r.parentNode
                           n.goto(r) && t.preventDefault()
                        } catch (e) {
                           if (
                              e instanceof TypeError &&
                              'target is null' === e.message
                           )
                              return
                           throw e
                        }
                     },
                     !1,
                  ),
                  i.triggerEvent(e, 'impress:help:add', {
                     command: 'Left &amp; Right',
                     text: 'Previous &amp; Next step',
                     row: 1,
                  })
            },
            !1,
         )
      })(document),
      (function (e) {
         var t,
            n,
            r,
            i,
            o,
            a,
            s,
            l = [],
            d = function (t, n, r) {
               var i = e.createEvent('CustomEvent')
               i.initCustomEvent(n, !0, !0, r), t.dispatchEvent(i)
            },
            u = function (t) {
               var n = e.createElement('div')
               return (n.innerHTML = t), n.firstChild
            },
            c = function (e) {
               if (e.title) return e.title
               if (e.id.startsWith('step-'))
                  for (var t of e.innerText.split('\n'))
                     if ((t = t.trim()).length > 0)
                        return t.length <= 40 ? t : t.slice(0, 37) + '...'
               return e.id
            },
            p = function () {
               for (var e = '', t = 0; t < i.length; t++)
                  l.indexOf(i[t]) < 0 &&
                     (e =
                        e +
                        '<option value="' +
                        i[t].id +
                        '">' +
                        c(i[t]) +
                        '</option>\n')
               return e
            }
         e.addEventListener(
            'impress:navigation-ui:hideStep',
            function (e) {
               l.push(e.target), a && (a.innerHTML = p())
            },
            !1,
         ),
            e.addEventListener(
               'impress:init',
               function (l) {
                  ;(t = e.querySelector('#impress-toolbar')) &&
                     (function (e) {
                        var l = (n = e.detail.api).lib.gc
                        ;(r = e.target), (i = r.querySelectorAll('.step'))
                        var c =
                           '<select id="impress-navigation-ui-select" title="Go to" class="impress-navigation-ui">\n' +
                           p() +
                           '</select>'
                        ;(o = u(
                           '<button id="impress-navigation-ui-prev" title="Previous" class="impress-navigation-ui">&lt;</button>',
                        )).addEventListener('click', function () {
                           n.prev()
                        }),
                           (a = u(c)).addEventListener('change', function (e) {
                              n.goto(e.target.value)
                           }),
                           l.addEventListener(
                              r,
                              'impress:steprefresh',
                              function (e) {
                                 ;(i = r.querySelectorAll('.step')),
                                    (a.innerHTML = '\n' + p()),
                                    (a.value = e.target.id)
                              },
                           ),
                           (s = u(
                              '<button id="impress-navigation-ui-next" title="Next" class="impress-navigation-ui">&gt;</button>',
                           )).addEventListener('click', function () {
                              n.next()
                           }),
                           d(t, 'impress:toolbar:appendChild', {
                              group: 0,
                              element: o,
                           }),
                           d(t, 'impress:toolbar:appendChild', {
                              group: 0,
                              element: a,
                           }),
                           d(t, 'impress:toolbar:appendChild', {
                              group: 0,
                              element: s,
                           })
                     })(l)
               },
               !1,
            )
      })(document),
      (function (e) {
         var t,
            n = [],
            r = function () {
               n = []
               for (
                  var e = t.querySelectorAll('.step'), r = 0;
                  r < e.length;
                  r++
               )
                  n[r + 1] = e[r].id
            }
         e.addEventListener('impress:init', function (e) {
            ;(t = e.target),
               r(),
               e.detail.api.lib.gc.pushCallback(function () {
                  ;(n = []), i && (i.style.width = ''), o && (o.innerHTML = '')
               })
         })
         var i = e.querySelector('div.impress-progressbar div'),
            o = e.querySelector('div.impress-progress')
         function a(e) {
            var t = n.indexOf(e)
            if (null !== i) {
               var r = (100 / (n.length - 1)) * t
               i.style.width = r.toFixed(2) + '%'
            }
            null !== o && (o.innerHTML = t + '/' + (n.length - 1))
         }
         ;(null === i && null === o) ||
            (e.addEventListener('impress:stepleave', function (e) {
               a(e.detail.next.id)
            }),
            e.addEventListener('impress:steprefresh', function (e) {
               r(), a(e.target.id)
            }))
      })(document),
      (function (e, t) {
         var n,
            r,
            i,
            o = {},
            a = function (o, a) {
               var s = o.dataset
               a ||
                  (a = {
                     x: 0,
                     y: 0,
                     z: 0,
                     rotate: { x: 0, y: 0, z: 0, order: 'xyz' },
                     relative: {
                        position: 'absolute',
                        x: 0,
                        y: 0,
                        z: 0,
                        rotate: { x: 0, y: 0, z: 0, order: 'xyz' },
                     },
                  })
               var l = a
               if (s.relTo)
                  if ((l = e.getElementById(s.relTo)))
                     if (
                        o.compareDocumentPosition(l) &
                        Node.DOCUMENT_POSITION_PRECEDING
                     ) {
                        ;(a.x = i(l.getAttribute('data-x'))),
                           (a.y = i(l.getAttribute('data-y'))),
                           (a.z = i(l.getAttribute('data-z')))
                        var d =
                           l.getAttribute('data-rel-position') || 'absolute'
                        'relative' !== d
                           ? ((a.rotate = { x: 0, y: 0, z: 0, order: 'xyz' }),
                             (a.relative = {
                                position: 'absolute',
                                x: 0,
                                y: 0,
                                z: 0,
                                rotate: { x: 0, y: 0, z: 0, order: 'xyz' },
                             }))
                           : ((a.rotate.y = r(l.getAttribute('data-rotate-y'))),
                             (a.rotate.x = r(l.getAttribute('data-rotate-x'))),
                             (a.rotate.z = r(
                                l.getAttribute('data-rotate-z') ||
                                   l.getAttribute('data-rotate'),
                             )),
                             (a.relative = {
                                position: d,
                                x: i(l.getAttribute('data-rel-x'), 0),
                                y: i(l.getAttribute('data-rel-y'), 0),
                                z: i(l.getAttribute('data-rel-z'), 0),
                                rotate: {
                                   x: i(l.getAttribute('data-rel-rotate-x'), 0),
                                   y: i(l.getAttribute('data-rel-rotate-y'), 0),
                                   z: i(l.getAttribute('data-rel-rotate-z'), 0),
                                   order:
                                      l.getAttribute('data-rel-rotate-order') ||
                                      'xyz',
                                },
                             }))
                     } else
                        t.console.error(
                           'impress.js rel plugin: Step "' +
                              s.relTo +
                              '" is not defined *before* the current step. Referencing is limited to previously defined steps. Please check your markup. Ignoring data-rel-to attribute of this step. Have a look at the documentation for how to create relative positioning to later shown steps with the help of the goto plugin.',
                        )
                  else
                     t.console.warn(
                        'impress.js rel plugin: "' +
                           s.relTo +
                           '" is not a valid step in this impress.js presentation. Please check your markup. Ignoring data-rel-to attribute of this step.',
                     )
               var u = !0
               o.hasAttribute('data-rel-reset') &&
                  ((a.relative = {
                     position: a.relative.position,
                     x: 0,
                     y: 0,
                     z: 0,
                     rotate: { x: 0, y: 0, z: 0, order: 'xyz' },
                  }),
                  'all' === s.relReset && (u = !1))
               var c = {
                     x: i(s.x, a.x),
                     y: i(s.y, a.y),
                     z: i(s.z, a.z),
                     rotate: {
                        x: r(s.rotateX, 0),
                        y: r(s.rotateY, 0),
                        z: r(s.rotateZ || s.rotate, 0),
                        order: s.rotateOrder || 'xyz',
                     },
                     relative: {
                        position: s.relPosition || a.relative.position,
                        x: i(s.relX, a.relative.x),
                        y: i(s.relY, a.relative.y),
                        z: i(s.relZ, a.relative.z),
                        rotate: {
                           x: r(s.relRotateX, a.relative.rotate.x),
                           y: r(s.relRotateY, a.relative.rotate.y),
                           z: r(s.relRotateZ, a.relative.rotate.z),
                           order: s.rotateOrder || 'xyz',
                        },
                     },
                  },
                  p = c.relative
               return (
                  'relative' === c.relative.position &&
                     u &&
                     (((p = n.lib.rotation.translateRelative(
                        c.relative,
                        a.rotate,
                     )).rotate.x -= c.rotate.x),
                     (p.rotate.y -= c.rotate.y),
                     (p.rotate.z -= c.rotate.z)),
                  void 0 !== s.x && (p.x = c.relative.x = 0),
                  void 0 !== s.y && (p.y = c.relative.y = 0),
                  void 0 !== s.z && (p.z = c.relative.z = 0),
                  (void 0 === s.rotateX && u) ||
                     (p.rotate.x = c.relative.rotate.x = 0),
                  (void 0 === s.rotateY && u) ||
                     (p.rotate.y = c.relative.rotate.y = 0),
                  (void 0 === s.rotateZ && void 0 === s.rotate && u) ||
                     (p.rotate.z = c.relative.rotate.z = 0),
                  (c.x = c.x + p.x),
                  (c.y = c.y + p.y),
                  (c.z = c.z + p.z),
                  (c.rotate.x = c.rotate.x + p.rotate.x),
                  (c.rotate.y = c.rotate.y + p.rotate.y),
                  (c.rotate.z = c.rotate.z + p.rotate.z),
                  c
               )
            }
         t.impress.addPreInitPlugin(function (e, t) {
            ;(r = (n = t).lib.util.toNumber), (i = n.lib.util.toNumberAdvanced)
            var s,
               l = e.querySelectorAll('.step')
            o[e.id] = []
            for (var d = 0; d < l.length; d++) {
               var u = l[d]
               o[e.id].push({
                  el: u,
                  x: u.getAttribute('data-x'),
                  y: u.getAttribute('data-y'),
                  z: u.getAttribute('data-z'),
                  relX: u.getAttribute('data-rel-x'),
                  relY: u.getAttribute('data-rel-y'),
                  relZ: u.getAttribute('data-rel-z'),
                  rotateX: u.getAttribute('data-rotate-x'),
                  rotateY: u.getAttribute('data-rotate-y'),
                  rotateZ: u.getAttribute('data-rotate-z'),
                  rotate: u.getAttribute('data-rotate'),
                  relRotateX: u.getAttribute('data-rel-rotate-x'),
                  relRotateY: u.getAttribute('data-rel-rotate-y'),
                  relRotateZ: u.getAttribute('data-rel-rotate-z'),
                  relPosition: u.getAttribute('data-rel-position'),
                  rotateOrder: u.getAttribute('data-rotate-order'),
               })
               var c = a(u, s)
               u.setAttribute('data-x', c.x),
                  u.setAttribute('data-y', c.y),
                  u.setAttribute('data-z', c.z),
                  u.setAttribute('data-rotate-x', c.rotate.x),
                  u.setAttribute('data-rotate-y', c.rotate.y),
                  u.setAttribute('data-rotate-z', c.rotate.z),
                  u.setAttribute('data-rotate-order', c.rotate.order),
                  u.setAttribute('data-rel-position', c.relative.position),
                  u.setAttribute('data-rel-x', c.relative.x),
                  u.setAttribute('data-rel-y', c.relative.y),
                  u.setAttribute('data-rel-z', c.relative.z),
                  u.setAttribute('data-rel-rotate-x', c.relative.rotate.x),
                  u.setAttribute('data-rel-rotate-y', c.relative.rotate.y),
                  u.setAttribute('data-rel-rotate-z', c.relative.rotate.z),
                  (s = c)
            }
         }),
            e.addEventListener(
               'impress:init',
               function (e) {
                  var t = e.target
                  e.detail.api.lib.gc.pushCallback(function () {
                     for (
                        var e,
                           n = o[t.id],
                           r = [
                              ['x', 'relX'],
                              ['y', 'relY'],
                              ['z', 'relZ'],
                              ['rotate-x', 'relRotateX'],
                              ['rotate-y', 'relRotateY'],
                              ['rotate-z', 'relRotateZ'],
                              ['rotate-order', 'relRotateOrder'],
                           ];
                        (e = n.pop());

                     )
                        for (var i = 0; i < r.length; i++)
                           null !== e[r[i][1]] &&
                              (null === e[r[i][0]]
                                 ? e.el.removeAttribute('data-' + r[i][0])
                                 : e.el.setAttribute(
                                      'data-' + r[i][0],
                                      e[r[i][0]],
                                   ))
                     delete o[t.id]
                  })
               },
               !1,
            )
      })(document, window),
      (function (e, t) {
         e.addEventListener(
            'impress:init',
            function (n) {
               var r = n.detail.api
               r.lib.gc.addEventListener(
                  t,
                  'resize',
                  r.lib.util.throttle(function () {
                     r.goto(e.querySelector('.step.active'), 500)
                  }, 250),
                  !1,
               )
            },
            !1,
         )
      })(document, window),
      (function (e, t) {
         var n
         e.addEventListener(
            'impress:init',
            function (e) {
               n = e.detail.api.lib.util
            },
            !1,
         )
         var r = function (t) {
            t &&
               t.target &&
               t.detail.next.classList.contains('skip') &&
               ('next' === t.detail.reason
                  ? ((t.detail.next = (function (t) {
                       for (
                          var n = e.querySelectorAll('.step'), r = 0;
                          r < n.length;
                          r++
                       )
                          if (n[r] === t)
                             return r + 1 < n.length ? n[r + 1] : n[0]
                    })(t.detail.next)),
                    r(t))
                  : 'prev' === t.detail.reason &&
                    ((t.detail.next = (function (t) {
                       for (
                          var n = e.querySelectorAll('.step'), r = n.length - 1;
                          r >= 0;
                          r--
                       )
                          if (n[r] === t)
                             return r - 1 >= 0 ? n[r - 1] : n[n.length - 1]
                    })(t.detail.next)),
                    r(t)),
               (t.detail.transitionDuration = n.toNumber(
                  t.detail.next.dataset.transitionDuration,
                  t.detail.transitionDuration,
               )))
         }
         t.impress.addPreStepLeavePlugin(r, 1)
      })(document, window),
      (function (e, t) {
         t.impress.addPreStepLeavePlugin(function (e) {
            if (e && e.target)
               return (
                  (!e.target.classList.contains('stop') ||
                     'next' !== e.detail.reason) &&
                  void 0
               )
         }, 2)
      })(document, window),
      (function (e, t) {
         var n = function (t, n, r) {
               var i = e.createEvent('CustomEvent')
               i.initCustomEvent(n, !0, !0, r), t.dispatchEvent(i)
            },
            r = null
         e.addEventListener(
            'impress:stepenter',
            function (e) {
               r = e.target
            },
            !1,
         )
         var i = function (e) {
               var t = e.querySelectorAll('.substep')
               if (t.length > 0) {
                  var n = o(t),
                     r = e.querySelectorAll('.substep-visible')
                  return a(n, r)
               }
            },
            o = function (e) {
               var t = Array.from(e)
               return t
                  .filter((e) => e.dataset.substepOrder)
                  .sort((e, t) => {
                     var n = e.dataset.substepOrder,
                        r = t.dataset.substepOrder
                     return parseInt(n) - parseInt(r)
                  })
                  .concat(t.filter((e) => void 0 === e.dataset.substepOrder))
            },
            a = function (e, t) {
               if (t.length < e.length) {
                  for (var n = 0; n < e.length; n++)
                     e[n].classList.remove('substep-active')
                  var r = e[t.length]
                  return (
                     r.classList.add('substep-visible'),
                     r.classList.add('substep-active'),
                     r
                  )
               }
            },
            s = function (e) {
               var t = e.querySelectorAll('.substep'),
                  n = e.querySelectorAll('.substep-visible'),
                  r = o(n)
               if (t.length > 0) return l(r)
            },
            l = function (e) {
               if (e.length > 0) {
                  for (var t = -1, n = 0; n < e.length; n++)
                     e[n].classList.contains('substep-active') && (t = n),
                        e[n].classList.remove('substep-active')
                  t > 0 && e[t - 1].classList.add('substep-active')
                  var r = e[e.length - 1]
                  return r.classList.remove('substep-visible'), r
               }
            }
         t.impress.addPreStepLeavePlugin(function (e) {
            if (e && e.target) {
               var t,
                  r = e.target
               return 'next' === e.detail.reason && (t = i(r))
                  ? (n(r, 'impress:substep:stepleaveaborted', {
                       reason: 'next',
                       substep: t,
                    }),
                    n(r, 'impress:substep:enter', {
                       reason: 'next',
                       substep: t,
                    }),
                    !1)
                  : 'prev' === e.detail.reason && (t = s(r))
                  ? (n(r, 'impress:substep:stepleaveaborted', {
                       reason: 'prev',
                       substep: t,
                    }),
                    n(r, 'impress:substep:leave', {
                       reason: 'prev',
                       substep: t,
                    }),
                    !1)
                  : void 0
            }
         }, 1),
            e.addEventListener(
               'impress:stepenter',
               function (e) {
                  for (
                     var t = e.target.querySelectorAll('.substep-visible'),
                        n = 0;
                     n < t.length;
                     n++
                  )
                     t[n].classList.remove('substep-visible')
               },
               !1,
            ),
            e.addEventListener(
               'impress:substep:show',
               function () {
                  i(r)
               },
               !1,
            ),
            e.addEventListener(
               'impress:substep:hide',
               function () {
                  s(r)
               },
               !1,
            )
      })(document, window),
      (function (e, t) {
         var n = 0,
            r = 0,
            i = 0,
            o = t.innerWidth / 20
         e.addEventListener('touchstart', function (e) {
            r = n = e.touches[0].clientX
         }),
            e.addEventListener('touchmove', function (e) {
               var o = e.touches[0].clientX,
                  a = o - n
               ;(i = r - o), (r = o), t.impress().swipe(a / t.innerWidth)
            }),
            e.addEventListener('touchend', function () {
               var a = r - n
               Math.abs(a) > t.innerWidth / 5 && a * i <= 0
                  ? a > t.innerWidth / 5 && i <= 0
                     ? t.impress().prev()
                     : a < -t.innerWidth / 5 && i >= 0 && t.impress().next()
                  : Math.abs(i) > o
                  ? i < -o
                     ? t.impress().prev()
                     : i > o && t.impress().next()
                  : t.impress().goto(e.querySelector('#impress .step.active'))
            }),
            e.addEventListener('touchcancel', function () {
               t.impress().goto(e.querySelector('#impress .step.active'))
            })
      })(document, window),
      (function (e) {
         var t = e.getElementById('impress-toolbar'),
            n = [],
            r = function (e) {
               for (var t = e + 1; !n[t] && t < n.length; ) t++
               if (t < n.length) return t
            }
         t &&
            (t.addEventListener('impress:toolbar:appendChild', function (i) {
               ;(function (i) {
                  var o = 'impress-toolbar-group-' + i
                  if (!n[i]) {
                     ;(n[i] = e.createElement('span')), (n[i].id = o)
                     var a = r(i)
                     void 0 === a
                        ? t.appendChild(n[i])
                        : t.insertBefore(n[i], n[a])
                  }
                  return n[i]
               })(i.detail.group).appendChild(i.detail.element)
            }),
            t.addEventListener('impress:toolbar:insertBefore', function (e) {
               t.insertBefore(e.detail.element, e.detail.before)
            }),
            t.addEventListener('impress:toolbar:removeWidget', function (e) {
               t.removeChild(e.detail.remove)
            }),
            e.addEventListener('impress:init', function (e) {
               e.detail.api.lib.gc.pushCallback(function () {
                  ;(t.innerHTML = ''), (n = [])
               })
            }))
      })(document)

   // var toggle = document.getElementById('theme-toggle')

   // var storedTheme =
   //    localStorage.getItem('theme') ||
   //    (window.matchMedia('(prefers-color-scheme: dark)').matches
   //       ? 'dark'
   //       : 'light')
   // if (storedTheme)
   //    document.documentElement.setAttribute('data-theme', storedTheme)

   // toggle.onclick = function () {
   //    var currentTheme = document.documentElement.getAttribute('data-theme')
   //    var targetTheme = 'light'

   //    if (currentTheme === 'light') {
   //       targetTheme = 'dark'
   //    }

   //    document.documentElement.setAttribute('data-theme', targetTheme)
   //    localStorage.setItem('theme', targetTheme)
   // }

   impress().init()

   document.addEventListener('impress:stepenter', function (event) {
      document.body.classList.add(
         'active-deep-level-' + event.target.dataset.deepLevel,
      )
   })

   document.addEventListener('impress:stepleave', function (event) {
      document.body.classList.remove(
         'active-deep-level-' + event.target.dataset.deepLevel,
      )
   })
})()

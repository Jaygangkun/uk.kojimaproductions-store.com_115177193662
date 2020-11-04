!function(e) {
    function n(n) {
        for (var r, t, i = n[0], f = n[1], d = n[2], b = 0, u = []; b < i.length; b++)
            t = i[b],
            Object.prototype.hasOwnProperty.call(o, t) && o[t] && u.push(o[t][0]),
            o[t] = 0;
        for (r in f)
            Object.prototype.hasOwnProperty.call(f, r) && (e[r] = f[r]);
        for (l && l(n); u.length; )
            u.shift()();
        return c.push.apply(c, d || []),
        a()
    }
    function a() {
        for (var e, n = 0; n < c.length; n++) {
            for (var a = c[n], r = !0, i = 1; i < a.length; i++) {
                var f = a[i];
                0 !== o[f] && (r = !1)
            }
            r && (c.splice(n--, 1),
            e = t(t.s = a[0]))
        }
        return e
    }
    var r = {}
      , o = {
        runtime: 0
    }
      , c = [];
    function t(n) {
        if (r[n])
            return r[n].exports;
        var a = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(a.exports, a, a.exports, t),
        a.l = !0,
        a.exports
    }
    t.e = function(e) {
        var n = []
          , a = o[e];
        if (0 !== a)
            if (a)
                n.push(a[2]);
            else {
                var r = new Promise((function(n, r) {
                    a = o[e] = [n, r]
                }
                ));
                n.push(a[2] = r);
                var c, i = document.createElement("script");
                i.charset = "utf-8",
                i.timeout = 120,
                t.nc && i.setAttribute("nonce", t.nc),
                i.src = function(e) {
                    return t.p + "baseline/" + ({
                        "ColorBlock_poo7y-i18n": "ColorBlock_poo7y-i18n",
                        "ColorPicker_1a6dn-i18n": "ColorPicker_1a6dn-i18n",
                        "ConfirmationModal_1yqev-i18n": "ConfirmationModal_1yqev-i18n",
                        "Credits_161kw-i18n": "Credits_161kw-i18n",
                        "CustomizeBarPanel_1aigz-i18n": "CustomizeBarPanel_1aigz-i18n",
                        "CustomizeSelectorsPanel_nkqsd-i18n": "CustomizeSelectorsPanel_nkqsd-i18n",
                        "EmptyState_1ai8p-i18n": "EmptyState_1ai8p-i18n",
                        "FirstSaveModal_fz4zc-i18n": "FirstSaveModal_fz4zc-i18n",
                        "LocaleBarBlock_1m0fm-i18n": "LocaleBarBlock_1m0fm-i18n",
                        "LocaleBarEditor_gk85g-i18n": "LocaleBarEditor_gk85g-i18n",
                        "MainPanel_wrx06-i18n": "MainPanel_wrx06-i18n",
                        "PreviewSelectors_465u1-i18n": "PreviewSelectors_465u1-i18n",
                        "SelectorsBlock_zip2a-i18n": "SelectorsBlock_zip2a-i18n",
                        "SideBarPanel_b73ju-i18n": "SideBarPanel_b73ju-i18n"
                    }[e] || e) + "-" + {
                        "ColorBlock_poo7y-i18n": "56c76d27040a4c816b31112696e6ada0d0de6fb2cfe874e8d05684b839fa5130",
                        "ColorPicker_1a6dn-i18n": "9324026737c3604fabbb45c3960f7e56836b3522cf4473f0bcd34d40c6031864",
                        "ConfirmationModal_1yqev-i18n": "f60a9169987fe4052eede145ee7dd0b588b19f3ed04b95cc8a1bf186dd675b96",
                        "Credits_161kw-i18n": "a73702eacadafc2fd5aaef27b5afbebd47966d6cda59f934ba3167e6119f59ff",
                        "CustomizeBarPanel_1aigz-i18n": "1f6209a72964d44598e4c17f3f25157ecee446954e82fb399d71be86b47b8600",
                        "CustomizeSelectorsPanel_nkqsd-i18n": "2915c09f42144a92f1be23682ec639b64145cce46ecb3d19c2f8d2b02e6196db",
                        "EmptyState_1ai8p-i18n": "955560c137f9915b01dac2a9a4319c2cb4469ebf355111afe973d23f3c7b1e47",
                        "FirstSaveModal_fz4zc-i18n": "c8b794c1b5b2f832f8180d0370101c8c363d49a80dab10e980798c60d381a5e5",
                        "LocaleBarBlock_1m0fm-i18n": "ec779094356c0f2a95cf871e2999436144b20d8749471da354d42b6e59ae453e",
                        "LocaleBarEditor_gk85g-i18n": "444b501b6e5993601be6fd587101c4e62282ffd3ea9ddfb562ac6d68fa6d2af9",
                        "MainPanel_wrx06-i18n": "d845bf6ec1a7c88e5489e2ab61ab6cacc9effa95f6e37931828daa15078a87f0",
                        "PreviewSelectors_465u1-i18n": "30c61b4a060fc335e759bf901605f6682d5e6cf6410e1d237072e0536fb83ed4",
                        "SelectorsBlock_zip2a-i18n": "1e703464893bc71958696b32536e82c6cff8773396f58cc20f978b3b00a27bcf",
                        "SideBarPanel_b73ju-i18n": "5a8a892f14ed577e0d65bbd5fd0f2a63ccbdbc0258636222f1a79abd64683b9e"
                    }[e] + ".js"
                }(e);
                var f = new Error;
                c = function(n) {
                    i.onerror = i.onload = null,
                    clearTimeout(d);
                    var a = o[e];
                    if (0 !== a) {
                        if (a) {
                            var r = n && ("load" === n.type ? "missing" : n.type)
                              , c = n && n.target && n.target.src;
                            f.message = "Loading chunk " + e + " failed.\n(" + r + ": " + c + ")",
                            f.name = "ChunkLoadError",
                            f.type = r,
                            f.request = c,
                            a[1](f)
                        }
                        o[e] = void 0
                    }
                }
                ;
                var d = setTimeout((function() {
                    c({
                        type: "timeout",
                        target: i
                    })
                }
                ), 12e4);
                i.onerror = i.onload = c,
                document.head.appendChild(i)
            }
        return Promise.all(n)
    }
    ,
    t.m = e,
    t.c = r,
    t.d = function(e, n, a) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: a
        })
    }
    ,
    t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    t.t = function(e, n) {
        if (1 & n && (e = t(e)),
        8 & n)
            return e;
        if (4 & n && "object" == typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (t.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }),
        2 & n && "string" != typeof e)
            for (var r in e)
                t.d(a, r, function(n) {
                    return e[n]
                }
                .bind(null, r));
        return a
    }
    ,
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(n, "a", n),
        n
    }
    ,
    t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }
    ,
    t.p = "https://cdn.shopify.com/shopifycloud/geolocation_recommendations/bundles/",
    t.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var i = self.webpackJsonp = self.webpackJsonp || []
      , f = i.push.bind(i);
    i.push = n,
    i = i.slice();
    for (var d = 0; d < i.length; d++)
        n(i[d]);
    var l = f;
    a()
}([]);
(self.webpackJsonp = self.webpackJsonp || []).push([["selectors"], {
    "./app/javascript/selectors/index.ts": function(e, n, t) {
        "use strict";
        t.r(n);
        var o = t("./node_modules/preact/dist/preact.module.js")
          , r = t("./node_modules/preact/hooks/dist/hooks.module.js")
          , l = {
            container: "locale-selectors__container",
            content: "locale-selectors__content",
            form: "locale-selectors__form",
            selector: "locale-selectors__selector"
        };
        function i(e) {
            var n = e.currencies
              , t = e.languages
              , i = e.preview
              , c = Object(r.e)(null)
              , _ = Object(r.a)((function() {
                var e = c.current;
                e && (i ? "function" == typeof e.requestSubmit ? e.requestSubmit() : e.dispatchEvent(new Event("submit",{
                    cancelable: !0
                })) : e.submit())
            }
            ), [c, i])
              , s = Object(r.a)((function(e) {
                var n;
                i && (e.preventDefault(),
                null === (n = window.frameElement) || void 0 === n || n.dispatchEvent(new CustomEvent("locale-selectors:submit",{
                    detail: {
                        formData: new FormData(e.target)
                    }
                })))
            }
            ), [i])
              , a = Object(r.d)((function() {
                var e = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
                e.lastChild();
                for (var n = 0, t = [], o = "", r = "", l = "", i = ""; !(++n > 100); ) {
                    var u = e.currentNode;
                    if (t[0] !== u)
                        if (u instanceof HTMLElement) {
                            var c = window.getComputedStyle(u);
                            if (u === window.LocaleSelectors.root || u.hidden || "fixed" === c.position || "absolute" === c.position || "none" === c.display || "hidden" === c.visibility)
                                e.previousSibling() || e.previousNode();
                            else {
                                if (o = c.maxWidth,
                                r = c.marginLeft,
                                l = c.paddingLeft,
                                "rgba(0, 0, 0, 0)" !== c.backgroundColor && (i = c.backgroundColor),
                                "center" !== c.textAlign && ("none" !== o || parseInt(r, 10) > 0 || parseInt(l, 10) > 0))
                                    break;
                                t.unshift(u),
                                e.lastChild()
                            }
                        } else
                            e.previousSibling() || e.previousNode();
                    else
                        t.shift(),
                        e.previousSibling() || e.previousNode()
                }
                return {
                    outerContainerStyles: {
                        backgroundColor: i
                    },
                    innerContainerStyles: {
                        maxWidth: o,
                        marginLeft: r,
                        marginRight: r,
                        paddingLeft: l,
                        paddingRight: l
                    }
                }
            }
            ), [])
              , d = a.outerContainerStyles
              , f = a.innerContainerStyles
              , p = window.Shopify.currency.active
              , h = window.Shopify.locale;
            return Object(o.b)("div", {
                className: l.container,
                style: d
            }, Object(o.b)("div", {
                className: l.content,
                style: f
            }, Object(o.b)("form", {
                action: "/localization",
                method: "POST",
                onSubmit: s,
                ref: c
            }, Object(o.b)("input", {
                name: "_method",
                type: "hidden",
                value: "PUT"
            }), Object(o.b)("input", {
                name: "source",
                type: "hidden",
                value: "geolocation_selector"
            }), Object(o.b)("input", {
                name: "return_to",
                type: "hidden",
                value: location.pathname
            }), Object(o.b)(u, {
                name: "locale_code",
                options: t,
                selected: h,
                onChange: _
            }), Object(o.b)(u, {
                name: "currency_code",
                options: n,
                selected: p,
                onChange: _
            }))))
        }
        function u(e) {
            var n = e.name
              , t = e.onChange
              , r = e.options
              , i = e.selected
              , u = Object.keys(r);
            return u.length <= 1 ? null : Object(o.b)("select", {
                className: l.selector,
                name: n,
                value: i,
                onChange: t
            }, u.map((function(e) {
                return Object(o.b)("option", {
                    key: e,
                    value: e
                }, r[e])
            }
            )))
        }
        var c, _ = /^\/([a-z]{2,3}(-[a-zA-Z0-9-]+)?\/)?password/;
        function s() {
            window.LocaleSelectors = window.LocaleSelectors || {},
            window.LocaleSelectors.root || (window.LocaleSelectors.root = document.createElement("div"),
            document.body.appendChild(window.LocaleSelectors.root)),
            window.LocaleSelectors.style || (window.LocaleSelectors.style = document.createElement("style"),
            document.head.appendChild(window.LocaleSelectors.style))
        }
        s(),
        window.LocaleSelectors.cleanup = function() {
            window.LocaleSelectors.root.remove(),
            delete window.LocaleSelectors.root,
            window.LocaleSelectors.style.remove(),
            delete window.LocaleSelectors.style,
            s()
        }
        ,
        window.LocaleSelectors.render = function(e) {
            var n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).preview
              , t = void 0 !== n && n;
            window.LocaleSelectors.root.innerHTML = "",
            window.location.pathname.match(_) || Object(o.d)(Object(o.b)(i, Object.assign({}, e, {
                preview: t
            })), window.LocaleSelectors.root)
        }
        ,
        null === (c = window.frameElement) || void 0 === c || c.dispatchEvent(new Event("locale-selectors:ready"))
    },
    "./node_modules/preact/dist/preact.module.js": function(e, n, t) {
        "use strict";
        t.d(n, "d", (function() {
            return P
        }
        )),
        t.d(n, "b", (function() {
            return f
        }
        )),
        t.d(n, "a", (function() {
            return h
        }
        )),
        t.d(n, "c", (function() {
            return o
        }
        ));
        var o, r, l, i, u, c = {}, _ = [], s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
        function a(e, n) {
            for (var t in n)
                e[t] = n[t];
            return e
        }
        function d(e) {
            var n = e.parentNode;
            n && n.removeChild(e)
        }
        function f(e, n, t) {
            var o, r, l, i, u = arguments;
            if (n = a({}, n),
            arguments.length > 3)
                for (t = [t],
                o = 3; o < arguments.length; o++)
                    t.push(u[o]);
            if (null != t && (n.children = t),
            null != e && null != e.defaultProps)
                for (r in e.defaultProps)
                    void 0 === n[r] && (n[r] = e.defaultProps[r]);
            return i = n.key,
            null != (l = n.ref) && delete n.ref,
            null != i && delete n.key,
            p(e, n, i, l)
        }
        function p(e, n, t, r) {
            var l = {
                type: e,
                props: n,
                key: t,
                ref: r,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: null,
                __c: null,
                constructor: void 0
            };
            return o.vnode && o.vnode(l),
            l
        }
        function h(e) {
            return e.children
        }
        function m(e, n) {
            this.props = e,
            this.context = n
        }
        function v(e, n) {
            if (null == n)
                return e.__ ? v(e.__, e.__.__k.indexOf(e) + 1) : null;
            for (var t; n < e.__k.length; n++)
                if (null != (t = e.__k[n]) && null != t.__e)
                    return t.__e;
            return "function" == typeof e.type ? v(e) : null
        }
        function y(e) {
            var n, t;
            if (null != (e = e.__) && null != e.__c) {
                for (e.__e = e.__c.base = null,
                n = 0; n < e.__k.length; n++)
                    if (null != (t = e.__k[n]) && null != t.__e) {
                        e.__e = e.__c.base = t.__e;
                        break
                    }
                return y(e)
            }
        }
        function b(e) {
            (!e.__d && (e.__d = !0) && 1 === r.push(e) || i !== o.debounceRendering) && ((i = o.debounceRendering) || l)(w)
        }
        function w() {
            var e, n, t, o, l, i, u;
            for (r.sort((function(e, n) {
                return n.__v.__b - e.__v.__b
            }
            )); e = r.pop(); )
                e.__d && (t = void 0,
                o = void 0,
                i = (l = (n = e).__v).__e,
                (u = n.__P) && (t = [],
                o = E(u, l, a({}, l), n.__n, void 0 !== u.ownerSVGElement, null, t, null == i ? v(l) : i),
                j(t, l),
                o != i && y(l)))
        }
        function g(e, n, t, o, r, l, i, u, s) {
            var a, f, p, h, m, y, b, w = t && t.__k || _, g = w.length;
            if (u == c && (u = null != l ? l[0] : g ? v(t, 0) : null),
            a = 0,
            n.__k = k(n.__k, (function(t) {
                if (null != t) {
                    if (t.__ = n,
                    t.__b = n.__b + 1,
                    null === (p = w[a]) || p && t.key == p.key && t.type === p.type)
                        w[a] = void 0;
                    else
                        for (f = 0; f < g; f++) {
                            if ((p = w[f]) && t.key == p.key && t.type === p.type) {
                                w[f] = void 0;
                                break
                            }
                            p = null
                        }
                    if (h = E(e, t, p = p || c, o, r, l, i, u, s),
                    (f = t.ref) && p.ref != f && (b || (b = []),
                    p.ref && b.push(p.ref, null, t),
                    b.push(f, t.__c || h, t)),
                    null != h) {
                        if (null == y && (y = h),
                        null != t.__d)
                            h = t.__d,
                            t.__d = null;
                        else if (l == p || h != u || null == h.parentNode) {
                            e: if (null == u || u.parentNode !== e)
                                e.appendChild(h);
                            else {
                                for (m = u,
                                f = 0; (m = m.nextSibling) && f < g; f += 2)
                                    if (m == h)
                                        break e;
                                e.insertBefore(h, u)
                            }
                            "option" == n.type && (e.value = "")
                        }
                        u = h.nextSibling,
                        "function" == typeof n.type && (n.__d = h)
                    }
                }
                return a++,
                t
            }
            )),
            n.__e = y,
            null != l && "function" != typeof n.type)
                for (a = l.length; a--; )
                    null != l[a] && d(l[a]);
            for (a = g; a--; )
                null != w[a] && N(w[a], w[a]);
            if (b)
                for (a = 0; a < b.length; a++)
                    O(b[a], b[++a], b[++a])
        }
        function k(e, n, t) {
            if (null == t && (t = []),
            null == e || "boolean" == typeof e)
                n && t.push(n(null));
            else if (Array.isArray(e))
                for (var o = 0; o < e.length; o++)
                    k(e[o], n, t);
            else
                t.push(n ? n("string" == typeof e || "number" == typeof e ? p(null, e, null, null) : null != e.__e || null != e.__c ? p(e.type, e.props, e.key, null) : e) : e);
            return t
        }
        function S(e, n, t) {
            "-" === n[0] ? e.setProperty(n, t) : e[n] = "number" == typeof t && !1 === s.test(n) ? t + "px" : null == t ? "" : t
        }
        function L(e, n, t, o, r) {
            var l, i, u, c, _;
            if (r ? "className" === n && (n = "class") : "class" === n && (n = "className"),
            "key" === n || "children" === n)
                ;
            else if ("style" === n)
                if (l = e.style,
                "string" == typeof t)
                    l.cssText = t;
                else {
                    if ("string" == typeof o && (l.cssText = "",
                    o = null),
                    o)
                        for (i in o)
                            t && i in t || S(l, i, "");
                    if (t)
                        for (u in t)
                            o && t[u] === o[u] || S(l, u, t[u])
                }
            else
                "o" === n[0] && "n" === n[1] ? (c = n !== (n = n.replace(/Capture$/, "")),
                _ = n.toLowerCase(),
                n = (_ in e ? _ : n).slice(2),
                t ? (o || e.addEventListener(n, C, c),
                (e.l || (e.l = {}))[n] = t) : e.removeEventListener(n, C, c)) : "list" !== n && "tagName" !== n && "form" !== n && !r && n in e ? e[n] = null == t ? "" : t : "function" != typeof t && "dangerouslySetInnerHTML" !== n && (n !== (n = n.replace(/^xlink:?/, "")) ? null == t || !1 === t ? e.removeAttributeNS("http://www.w3.org/1999/xlink", n.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", n.toLowerCase(), t) : null == t || !1 === t ? e.removeAttribute(n) : e.setAttribute(n, t))
        }
        function C(e) {
            this.l[e.type](o.event ? o.event(e) : e)
        }
        function E(e, n, t, r, l, i, u, c, _) {
            var s, d, f, p, v, y, b, w, S, L, C = n.type;
            if (void 0 !== n.constructor)
                return null;
            (s = o.__b) && s(n);
            try {
                e: if ("function" == typeof C) {
                    if (w = n.props,
                    S = (s = C.contextType) && r[s.__c],
                    L = s ? S ? S.props.value : s.__ : r,
                    t.__c ? b = (d = n.__c = t.__c).__ = d.__E : ("prototype"in C && C.prototype.render ? n.__c = d = new C(w,L) : (n.__c = d = new m(w,L),
                    d.constructor = C,
                    d.render = H),
                    S && S.sub(d),
                    d.props = w,
                    d.state || (d.state = {}),
                    d.context = L,
                    d.__n = r,
                    f = d.__d = !0,
                    d.__h = []),
                    null == d.__s && (d.__s = d.state),
                    null != C.getDerivedStateFromProps && (d.__s == d.state && (d.__s = a({}, d.__s)),
                    a(d.__s, C.getDerivedStateFromProps(w, d.__s))),
                    p = d.props,
                    v = d.state,
                    f)
                        null == C.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(),
                        null != d.componentDidMount && d.__h.push(d.componentDidMount);
                    else {
                        if (null == C.getDerivedStateFromProps && null == d.__e && null != d.componentWillReceiveProps && d.componentWillReceiveProps(w, L),
                        !d.__e && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(w, d.__s, L)) {
                            for (d.props = w,
                            d.state = d.__s,
                            d.__d = !1,
                            d.__v = n,
                            n.__e = t.__e,
                            n.__k = t.__k,
                            d.__h.length && u.push(d),
                            s = 0; s < n.__k.length; s++)
                                n.__k[s] && (n.__k[s].__ = n);
                            break e
                        }
                        null != d.componentWillUpdate && d.componentWillUpdate(w, d.__s, L),
                        null != d.componentDidUpdate && d.__h.push((function() {
                            d.componentDidUpdate(p, v, y)
                        }
                        ))
                    }
                    d.context = L,
                    d.props = w,
                    d.state = d.__s,
                    (s = o.__r) && s(n),
                    d.__d = !1,
                    d.__v = n,
                    d.__P = e,
                    s = d.render(d.props, d.state, d.context),
                    n.__k = k(null != s && s.type == h && null == s.key ? s.props.children : s),
                    null != d.getChildContext && (r = a(a({}, r), d.getChildContext())),
                    f || null == d.getSnapshotBeforeUpdate || (y = d.getSnapshotBeforeUpdate(p, v)),
                    g(e, n, t, r, l, i, u, c, _),
                    d.base = n.__e,
                    d.__h.length && u.push(d),
                    b && (d.__E = d.__ = null),
                    d.__e = null
                } else
                    n.__e = x(t.__e, n, t, r, l, i, u, _);
                (s = o.diffed) && s(n)
            } catch (e) {
                o.__e(e, n, t)
            }
            return n.__e
        }
        function j(e, n) {
            o.__c && o.__c(n, e),
            e.some((function(n) {
                try {
                    e = n.__h,
                    n.__h = [],
                    e.some((function(e) {
                        e.call(n)
                    }
                    ))
                } catch (e) {
                    o.__e(e, n.__v)
                }
            }
            ))
        }
        function x(e, n, t, o, r, l, i, u) {
            var s, a, d, f, p, h = t.props, m = n.props;
            if (r = "svg" === n.type || r,
            null == e && null != l)
                for (s = 0; s < l.length; s++)
                    if (null != (a = l[s]) && (null === n.type ? 3 === a.nodeType : a.localName === n.type)) {
                        e = a,
                        l[s] = null;
                        break
                    }
            if (null == e) {
                if (null === n.type)
                    return document.createTextNode(m);
                e = r ? document.createElementNS("http://www.w3.org/2000/svg", n.type) : document.createElement(n.type),
                l = null
            }
            if (null === n.type)
                null != l && (l[l.indexOf(e)] = null),
                h !== m && (e.data = m);
            else if (n !== t) {
                if (null != l && (l = _.slice.call(e.childNodes)),
                d = (h = t.props || c).dangerouslySetInnerHTML,
                f = m.dangerouslySetInnerHTML,
                !u) {
                    if (h === c)
                        for (h = {},
                        p = 0; p < e.attributes.length; p++)
                            h[e.attributes[p].name] = e.attributes[p].value;
                    (f || d) && (f && d && f.__html == d.__html || (e.innerHTML = f && f.__html || ""))
                }
                (function(e, n, t, o, r) {
                    var l;
                    for (l in t)
                        l in n || L(e, l, null, t[l], o);
                    for (l in n)
                        r && "function" != typeof n[l] || "value" === l || "checked" === l || t[l] === n[l] || L(e, l, n[l], t[l], o)
                }
                )(e, m, h, r, u),
                n.__k = n.props.children,
                f || g(e, n, t, o, "foreignObject" !== n.type && r, l, i, c, u),
                u || ("value"in m && void 0 !== m.value && m.value !== e.value && (e.value = null == m.value ? "" : m.value),
                "checked"in m && void 0 !== m.checked && m.checked !== e.checked && (e.checked = m.checked))
            }
            return e
        }
        function O(e, n, t) {
            try {
                "function" == typeof e ? e(n) : e.current = n
            } catch (e) {
                o.__e(e, t)
            }
        }
        function N(e, n, t) {
            var r, l, i;
            if (o.unmount && o.unmount(e),
            (r = e.ref) && O(r, null, n),
            t || "function" == typeof e.type || (t = null != (l = e.__e)),
            e.__e = e.__d = null,
            null != (r = e.__c)) {
                if (r.componentWillUnmount)
                    try {
                        r.componentWillUnmount()
                    } catch (e) {
                        o.__e(e, n)
                    }
                r.base = r.__P = null
            }
            if (r = e.__k)
                for (i = 0; i < r.length; i++)
                    r[i] && N(r[i], n, t);
            null != l && d(l)
        }
        function H(e, n, t) {
            return this.constructor(e, t)
        }
        function P(e, n, t) {
            var r, l, i;
            o.__ && o.__(e, n),
            l = (r = t === u) ? null : t && t.__k || n.__k,
            e = f(h, null, [e]),
            i = [],
            E(n, (r ? n : t || n).__k = e, l || c, c, void 0 !== n.ownerSVGElement, t && !r ? [t] : l ? null : _.slice.call(n.childNodes), i, t || c, r),
            j(i, e)
        }
        o = {
            __e: function(e, n) {
                for (var t; n = n.__; )
                    if ((t = n.__c) && !t.__)
                        try {
                            if (t.constructor && null != t.constructor.getDerivedStateFromError)
                                t.setState(t.constructor.getDerivedStateFromError(e));
                            else {
                                if (null == t.componentDidCatch)
                                    continue;
                                t.componentDidCatch(e)
                            }
                            return b(t.__E = t)
                        } catch (n) {
                            e = n
                        }
                throw e
            }
        },
        m.prototype.setState = function(e, n) {
            var t;
            t = this.__s !== this.state ? this.__s : this.__s = a({}, this.state),
            "function" == typeof e && (e = e(t, this.props)),
            e && a(t, e),
            null != e && this.__v && (this.__e = !1,
            n && this.__h.push(n),
            b(this))
        }
        ,
        m.prototype.forceUpdate = function(e) {
            this.__v && (this.__e = !0,
            e && this.__h.push(e),
            b(this))
        }
        ,
        m.prototype.render = h,
        r = [],
        l = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
        u = c
    },
    "./node_modules/preact/hooks/dist/hooks.module.js": function(e, n, t) {
        "use strict";
        t.d(n, "f", (function() {
            return f
        }
        )),
        t.d(n, "b", (function() {
            return p
        }
        )),
        t.d(n, "c", (function() {
            return h
        }
        )),
        t.d(n, "e", (function() {
            return m
        }
        )),
        t.d(n, "d", (function() {
            return v
        }
        )),
        t.d(n, "a", (function() {
            return y
        }
        ));
        var o, r, l, i = t("./node_modules/preact/dist/preact.module.js"), u = [], c = i.c.__r, _ = i.c.diffed, s = i.c.__c, a = i.c.unmount;
        function d(e) {
            i.c.__h && i.c.__h(r);
            var n = r.__H || (r.__H = {
                t: [],
                u: []
            });
            return e >= n.t.length && n.t.push({}),
            n.t[e]
        }
        function f(e) {
            return function(e, n, t) {
                var l = d(o++);
                return l.__c || (l.__c = r,
                l.i = [t ? t(n) : S(void 0, n), function(n) {
                    var t = e(l.i[0], n);
                    l.i[0] !== t && (l.i[0] = t,
                    l.__c.setState({}))
                }
                ]),
                l.i
            }(S, e)
        }
        function p(e, n) {
            var t = d(o++);
            k(t.o, n) && (t.i = e,
            t.o = n,
            r.__H.u.push(t))
        }
        function h(e, n) {
            var t = d(o++);
            k(t.o, n) && (t.i = e,
            t.o = n,
            r.__h.push(t))
        }
        function m(e) {
            return v((function() {
                return {
                    current: e
                }
            }
            ), [])
        }
        function v(e, n) {
            var t = d(o++);
            return k(t.o, n) ? (t.o = n,
            t.v = e,
            t.i = e()) : t.i
        }
        function y(e, n) {
            return v((function() {
                return e
            }
            ), n)
        }
        function b() {
            u.some((function(e) {
                e.__P && (e.__H.u.forEach(w),
                e.__H.u.forEach(g),
                e.__H.u = [])
            }
            )),
            u = []
        }
        function w(e) {
            e.m && e.m()
        }
        function g(e) {
            var n = e.i();
            "function" == typeof n && (e.m = n)
        }
        function k(e, n) {
            return !e || n.some((function(n, t) {
                return n !== e[t]
            }
            ))
        }
        function S(e, n) {
            return "function" == typeof n ? n(e) : n
        }
        i.c.__r = function(e) {
            c && c(e),
            o = 0,
            (r = e.__c).__H && (r.__H.u.forEach(w),
            r.__H.u.forEach(g),
            r.__H.u = [])
        }
        ,
        i.c.diffed = function(e) {
            _ && _(e);
            var n = e.__c;
            if (n) {
                var t = n.__H;
                t && t.u.length && (1 !== u.push(n) && l === i.c.requestAnimationFrame || ((l = i.c.requestAnimationFrame) || function(e) {
                    var n, t = function() {
                        clearTimeout(o),
                        cancelAnimationFrame(n),
                        setTimeout(e)
                    }, o = setTimeout(t, 100);
                    "undefined" != typeof window && (n = requestAnimationFrame(t))
                }
                )(b))
            }
        }
        ,
        i.c.__c = function(e, n) {
            n.some((function(e) {
                e.__h.forEach(w),
                e.__h = e.__h.filter((function(e) {
                    return !e.i || g(e)
                }
                ))
            }
            )),
            s && s(e, n)
        }
        ,
        i.c.unmount = function(e) {
            a && a(e);
            var n = e.__c;
            if (n) {
                var t = n.__H;
                t && t.t.forEach((function(e) {
                    return e.m && e.m()
                }
                ))
            }
        }
    }
}, [["./app/javascript/selectors/index.ts", "runtime"]]]);
LocaleSelectors.style.innerHTML = ".locale-selectors__container{padding-bottom:2em}.locale-selectors__content{display:flex}@media (max-width: 750px){.locale-selectors__content{justify-content:center !important}}@media (max-width: 500px){.locale-selectors__content form{display:flex;flex-direction:column;align-items:center;justify-content:center}}.locale-selectors__selector{-moz-appearance:none !important;-webkit-appearance:none !important;appearance:none !important;background-color:#f4f4f4 !important;background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjUiPjxwYXRoIGZpbGw9IiM2NjYiIGQ9Ik0wIDBzMy40IDQuNCAzLjUgNC40QzMuNyA0LjQgNy4xIDAgNy4xIDBIMHoiLz48L3N2Zz4=\") !important;background-position:right 10px center !important;background-repeat:no-repeat !important;background-size:auto !important;border-radius:2px !important;border:0 !important;color:#333 !important;cursor:pointer !important;display:inline-block !important;font-size:16px !important;height:auto !important;line-height:1.375 !important;margin:0.3em !important;max-width:100% !important;min-height:unset !important;min-width:unset !important;padding:0.3em 28px 0.3em 0.5em !important;text-indent:0.01px !important;text-overflow:\'\' !important;vertical-align:baseline !important;width:auto !important;margin:0 !important}.locale-selectors__selector+.locale-selectors__selector{margin:0.5em 0 0 0.5em !important}.locale-selectors__content{justify-content:center}\n"
LocaleSelectors.render(JSON.parse("{\"position\":\"center\",\"currencies\":{\"AUD\":\"AUD A\$\",\"CAD\":\"CAD \$\",\"DKK\":\"DKK kr\",\"EUR\":\"EUR €\",\"GBP\":\"GBP £\",\"HKD\":\"HKD HK\$\",\"JPY\":\"JPY ¥\",\"NZD\":\"NZD \$\",\"SGD\":\"SGD \$\",\"USD\":\"USD \$\"},\"languages\":{\"en\":\"English\",\"fr\":\"Français\",\"de\":\"Deutsch\",\"ru\":\"Русский\"}}"))

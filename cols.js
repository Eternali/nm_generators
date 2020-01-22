(this.webpackJsonpsoftui = this.webpackJsonpsoftui || []).push([
    [0], {
        34: function(e, t, a) {
            e.exports = a(75)
        },
        39: function(e, t, a) {},
        40: function(e, t, a) {},
        75: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                o = a.n(n),
                r = a(7),
                c = (a(39), a(40), a(20)),
                i = a(29),
                s = a(8),
                l = a(21),
                u = a(22),
                d = a(30),
                h = a(23),
                m = a(31);

            function p(e, t) {
                (e = String(e).replace(/[^0-9a-f]/gi, "")).length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;
                var a, n, o = "#";
                for (n = 0; n < 3; n++) a = parseInt(e.substr(2 * n, 2), 16), o += ("00" + (a = Math.round(Math.min(Math.max(0, a + a * t), 255)).toString(16))).substr(a.length);
                return o
            }

            function f(e) {
                return (299 * parseInt(e.substr(1, 2), 16) + 587 * parseInt(e.substr(3, 2), 16) + 114 * parseInt(e.substr(5, 2), 16)) / 1e3 >= 128 ? "#001f3f" : "#F6F5F7"
            }
            var g = a(80),
                v = a(25),
                b = a(26),
                w = a(78),
                x = a(79);

            function E() {
                var e = Object(c.a)(["\n  position: absolute;\n  left: ", ";\n  top: ", ";\n  right: ", ";\n  bottom: ", ";\n  background: transparent;\n  height: 30px;\n  width: 30px;\n  cursor: pointer;\n  border: 2px solid var(--textColor);\n  border-bottom-right-radius: ", ";\n  border-bottom-left-radius: ", ";\n  border-top-right-radius: ", ";\n  border-top-left-radius: ", ";\n\n  &.active {\n    background: #ffff00;\n  }\n"]);
                return E = function() {
                    return e
                }, e
            }
            g.a.registerLanguage("css", v.a);
            var C = function(e) {
                    function t() {
                        var e, a;
                        Object(l.a)(this, t);
                        for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c];
                        return (a = Object(d.a)(this, (e = Object(h.a)(t)).call.apply(e, [this].concat(r)))).state = {
                            color: "#55b9f3",
                            size: 300,
                            radius: 50,
                            maxRadius: 150,
                            gradient: !0,
                            shape: !0,
                            distance: 30,
                            blur: 60,
                            activeLightSource: 0,
                            colorDifference: .15,
                            maxSize: 410
                        }, a.softElement = o.a.createRef(), a.colorInput = o.a.createRef(), a.codeContainer = o.a.createRef(), a.code = o.a.createRef(), a.body = document.getElementsByTagName("body")[0], a.lightSources = [], a.lightColor = "", a.darkColor = "", a.theme = !0, a.codeString = "background: linear-gradient(145deg);\nbox-shadow: 30px 30px var(--blur) var(--lightColor), \n            -30px -30px var(--blur) var(--darkColor);", a.handleOnChange = function(e) {
                            a.setState(Object(s.a)({}, e.target.name, e.target.value))
                        }, a.handleCheckbox = function(e) {
                            console.log(e.target.name, e.target.checked), a.setState(Object(s.a)({}, e.target.name, e.target.checked))
                        }, a.setDistance = function(e) {
                            a.setState({
                                distance: e.target.value,
                                blur: 2 * e.target.value
                            })
                        }, a.setSize = function(e) {
                            var t = e.target;
                            a.setState({
                                size: t.value,
                                distance: Math.round(.1 * t.value),
                                blur: Math.round(.2 * t.value),
                                maxRadius: Math.round(t.value / 2)
                            })
                        }, a.validateColor = function(e) {
                            /^#[0-9A-F]{6}$/i.test(e.target.value) && (a.handleOnChange(e), window.history.replaceState("homepage", "Title", "/" + e.target.value))
                        }, a.setColor = function(e) {
                            window.history.replaceState("homepage", "Title", "/" + e.target.value), a.handleOnChange(e)
                        }, a.setShape = function(e) {
                            a.setState({
                                shape: e.target.dataset.value
                            })
                        }, a.setLightSource = function(e) {
                            a.lightSources.forEach((function(e) {
                                e.classList.remove("active")
                            })), e.target.classList.add("active"), a.setState({
                                activeLightSource: parseInt(e.target.dataset.value)
                            })
                        }, a.copyToClipboard = function(e) {
                            var t = a.codeContainer.current;
                            t.select(), t.setSelectionRange(0, 99999), document.execCommand("copy"), a.code.current.classList.add("copied"), setTimeout((function() {
                                a.code.current.classList.remove("copied")
                            }), 1e3)
                        }, a.setColorFromRoute = function() {
                            0 != window.location.hash && /^#[0-9A-F]{6}$/i.test(window.location.hash) && a.setState({
                                color: window.location.hash
                            })
                        }, a
                    }
                    return Object(m.a)(t, e), Object(u.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            window.onpopstate = this.setColorFromRoute, this.setState({
                                color: "#55b9f3"
                            }), this.setColorFromRoute(), window.history.replaceState("homepage", "Title", "/" + this.state.color), this.lightSources = Object(i.a)(document.getElementsByClassName("light-source"));
                            var e = window.innerWidth;
                            e < 1e3 && "ReactSnap" !== window.navigator.userAgent ? e < 800 ? e < 680 ? this.setState({
                                maxSize: 180,
                                size: 150
                            }) : this.setState({
                                maxSize: 250,
                                size: 200
                            }) : this.setState({
                                maxSize: 350,
                                size: 250
                            }) : this.setState({
                                maxSize: 410,
                                size: 300
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.blur,
                                a = e.color,
                                n = e.size,
                                r = e.radius,
                                c = e.shape,
                                i = e.distance,
                                s = e.activeLightSource,
                                l = e.colorDifference,
                                u = e.maxSize,
                                d = e.maxRadius,
                                h = e.gradient;
                            if (this.softElement.current) {
                                var m = 145,
                                    v = 30,
                                    b = 30,
                                    E = p(a, -1 * l),
                                    C = p(a, l),
                                    k = h ? p(a, c ? .07 : -.1) : a,
                                    y = h ? p(a, c ? -.1 : .07) : a;
                                switch (s) {
                                    case 1:
                                        v = i, b = i, m = 145;
                                        break;
                                    case 2:
                                        v = -1 * i, b = i, m = 225;
                                        break;
                                    case 3:
                                        v = -1 * i, b = -1 * i, m = 315;
                                        break;
                                    case 4:
                                        v = i, b = -1 * i, m = 45;
                                        break;
                                    default:
                                        v = i, b = i, m = 145
                                }
                                this.colorInput.current.value = a, document.documentElement.style.cssText = "\n        --positionX: ".concat(v, "px;\n        --positionXOpposite: ").concat(-1 * v, "px;\n        --positionY: ").concat(b, "px;\n        --positionYOpposite: ").concat(-1 * b, "px;\n        --angle: ").concat(m, "deg;\n        --blur: ").concat(t, "px;\n        --textColor: ").concat(f(a), ";\n        --textColorOpposite: ").concat(a, ";\n        --baseColor: ").concat(a, ";\n        --darkColor: ").concat(E, ";\n        --lightColor: ").concat(C, ";\n        --firstGradientColor: ").concat(k, ";\n        --secondGradientColor: ").concat(y, ";\n      "), this.softElement.current.style.setProperty("--size", n + "px"), this.softElement.current.style.setProperty("--radius", r + "px"), "#001f3f" === f(a) ? this.theme = !0 : this.theme = !1, this.codeString = "border-radius: ".concat(parseInt(r) === d ? "50%" : r + "px", ";\nbackground: ").concat(h ? "linear-gradient(".concat(m, "deg, ").concat(k, ", ").concat(y, ")") : "".concat(a), ";\nbox-shadow: ").concat(v, "px ").concat(b, "px ").concat(t, "px ").concat(E, ", \n            ").concat(-1 * v, "px ").concat(-1 * b, "px ").concat(t, "px ").concat(C, ";")
                            }
                            return o.a.createElement("div", {
                                className: "container App"
                            }, o.a.createElement("div", {
                                className: "flex"
                            }, o.a.createElement("div", {
                                className: "preview"
                            }, o.a.createElement(S, {
                                top: "0",
                                bottom: "unset",
                                right: "0",
                                left: "unset",
                                "data-value": "2",
                                onClick: this.setLightSource,
                                className: "light-source"
                            }), o.a.createElement(S, {
                                top: "0",
                                bottom: "unset",
                                right: "unset",
                                left: "0",
                                "data-value": "1",
                                onClick: this.setLightSource,
                                className: "light-source active"
                            }), o.a.createElement(S, {
                                top: "unset",
                                bottom: "0",
                                right: "0",
                                left: "unset",
                                "data-value": "3",
                                onClick: this.setLightSource,
                                className: "light-source"
                            }), o.a.createElement(S, {
                                top: "unset",
                                bottom: "0",
                                right: "unset",
                                left: "0",
                                "data-value": "4",
                                onClick: this.setLightSource,
                                className: "light-source"
                            }), o.a.createElement("div", {
                                ref: this.softElement,
                                className: "soft-element soft-shadow"
                            })), o.a.createElement("div", {
                                className: "configuration soft-shadow"
                            }, o.a.createElement("div", {
                                className: "row"
                            }, o.a.createElement("label", {
                                htmlFor: "color"
                            }, "Pick a color:"), o.a.createElement("input", {
                                type: "color",
                                name: "color",
                                onChange: this.setColor,
                                placeholder: "#ffffff",
                                value: a,
                                id: "color"
                            }), o.a.createElement("label", {
                                htmlFor: "colorInput",
                                style: {
                                    paddingLeft: "10px"
                                }
                            }, "or"), o.a.createElement("input", {
                                type: "text",
                                placeholder: "#ffffff",
                                name: "color",
                                id: "colorInput",
                                ref: this.colorInput,
                                onChange: this.validateColor
                            })), o.a.createElement("div", {
                                className: "row"
                            }, o.a.createElement("label", {
                                htmlFor: "size"
                            }, "Size: "), o.a.createElement("input", {
                                type: "range",
                                name: "size",
                                value: n,
                                onChange: this.setSize,
                                min: "10",
                                max: u,
                                step: "1",
                                id: "size"
                            })), o.a.createElement("div", {
                                className: "row"
                            }, o.a.createElement("label", {
                                htmlFor: "radius"
                            }, "Radius: "), o.a.createElement("input", {
                                type: "range",
                                name: "radius",
                                value: r,
                                onChange: this.handleOnChange,
                                min: "0",
                                max: d,
                                step: "1",
                                id: "radius"
                            })), o.a.createElement("div", {
                                className: "row"
                            }, o.a.createElement("label", {
                                htmlFor: "distance"
                            }, "Distance: "), o.a.createElement("input", {
                                type: "range",
                                name: "distance",
                                value: i,
                                onChange: this.setDistance,
                                min: "5",
                                max: "50",
                                step: "1",
                                id: "distance"
                            })), o.a.createElement("div", {
                                className: "row"
                            }, o.a.createElement("label", {
                                htmlFor: "colorDifference"
                            }, "Intensity: "), o.a.createElement("input", {
                                type: "range",
                                name: "colorDifference",
                                value: l,
                                onChange: this.handleOnChange,
                                min: "0.01",
                                max: "0.6",
                                step: "0.01",
                                id: "colorDifference"
                            })), o.a.createElement("div", {
                                className: "row"
                            }, o.a.createElement("label", {
                                htmlFor: "blur"
                            }, "Blur: "), o.a.createElement("input", {
                                type: "range",
                                name: "blur",
                                value: t,
                                onChange: this.handleOnChange,
                                min: "0",
                                max: "100",
                                step: "1",
                                id: "blur"
                            })), o.a.createElement("div", {
                                className: "row"
                            }, o.a.createElement("label", {
                                htmlFor: "gradient"
                            }, "Gradient background: "), o.a.createElement("label", {
                                className: "checkbox"
                            }, o.a.createElement("input", {
                                type: "checkbox",
                                name: "gradient",
                                checked: h,
                                onChange: this.handleCheckbox,
                                id: "gradient"
                            }), o.a.createElement("span", null))), o.a.createElement("div", {
                                className: "row"
                            }, o.a.createElement("label", {
                                htmlFor: "shape"
                            }, "Shape: "), o.a.createElement("div", {
                                className: "shape-switch"
                            }, o.a.createElement("button", {
                                className: c ? "active" : "",
                                onClick: this.setShape,
                                "data-value": " "
                            }, "Concave"), o.a.createElement("button", {
                                className: c ? "" : "active",
                                onClick: this.setShape,
                                "data-value": ""
                            }, "Convex"))), o.a.createElement("div", {
                                className: "code-block ".concat(this.theme ? "" : "small"),
                                ref: this.code
                            }, o.a.createElement("button", {
                                className: "copy",
                                onClick: this.copyToClipboard
                            }, "Copy"), o.a.createElement(g.a, {
                                language: "css",
                                style: this.theme ? w.a : x.a
                            }, this.codeString), o.a.createElement("label", {
                                htmlFor: "code-container",
                                className: "hidden"
                            }, "hidden"), o.a.createElement("textarea", {
                                id: "code-container",
                                ref: this.codeContainer,
                                value: this.codeString,
                                readOnly: !0
                            })))))
                        }
                    }]), t
                }(n.Component),
                S = b.a.div(E(), (function(e) {
                    return e.left
                }), (function(e) {
                    return e.top
                }), (function(e) {
                    return e.right
                }), (function(e) {
                    return e.bottom
                }), (function(e) {
                    return "unset" === e.right && "unset" === e.bottom ? "30px" : "unset"
                }), (function(e) {
                    return "unset" === e.left && "unset" === e.bottom ? "30px" : "unset"
                }), (function(e) {
                    return "unset" === e.right && "unset" === e.top ? "30px" : "unset"
                }), (function(e) {
                    return "unset" === e.left && "unset" === e.top ? "30px" : "unset"
                })),
                k = C,
                y = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

            function N(e, t) {
                navigator.serviceWorker.register(e).then((function(e) {
                    e.onupdatefound = function() {
                        var a = e.installing;
                        null != a && (a.onstatechange = function() {
                            "installed" === a.state && (navigator.serviceWorker.controller ? (console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."), t && t.onUpdate && t.onUpdate(e)) : (console.log("Content is cached for offline use."), t && t.onSuccess && t.onSuccess(e)))
                        })
                    }
                })).catch((function(e) {
                    console.error("Error during service worker registration:", e)
                }))
            }
            var O = document.getElementById("root");
            O.hasChildNodes() ? Object(r.hydrate)(o.a.createElement(k, null), O) : Object(r.render)(o.a.createElement(k, null), O),
                function(e) {
                    if ("serviceWorker" in navigator) {
                        if (new URL("", window.location.href).origin !== window.location.origin) return;
                        window.addEventListener("load", (function() {
                            var t = "".concat("", "/service-worker.js");
                            y ? (! function(e, t) {
                                fetch(e, {
                                    headers: {
                                        "Service-Worker": "script"
                                    }
                                }).then((function(a) {
                                    var n = a.headers.get("content-type");
                                    404 === a.status || null != n && -1 === n.indexOf("javascript") ? navigator.serviceWorker.ready.then((function(e) {
                                        e.unregister().then((function() {
                                            window.location.reload()
                                        }))
                                    })) : N(e, t)
                                })).catch((function() {
                                    console.log("No internet connection found. App is running in offline mode.")
                                }))
                            }(t, e), navigator.serviceWorker.ready.then((function() {
                                console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")
                            }))) : N(t, e)
                        }))
                    }
                }()
        }
    },
    [
        [34, 1, 2]
    ]
]);
(this.webpackJsonpsoftui = this.webpackJsonpsoftui || []).push([
    [0], {
        34: function(e, t, a) {
            e.exports = a(75)
        },
        39: function(e, t, a) {},
        40: function(e, t, a) {},
        75: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                o = a.n(n),
                r = a(7),
                c = (a(39), a(40), a(20)),
                i = a(29),
                s = a(8),
                l = a(21),
                u = a(22),
                d = a(30),
                h = a(23),
                m = a(31);

            function p(e, t) {
                (e = String(e).replace(/[^0-9a-f]/gi, "")).length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;
                var a, n, o = "#";
                for (n = 0; n < 3; n++) a = parseInt(e.substr(2 * n, 2), 16), o += ("00" + (a = Math.round(Math.min(Math.max(0, a + a * t), 255)).toString(16))).substr(a.length);
                return o
            }

            function f(e) {
                return (299 * parseInt(e.substr(1, 2), 16) + 587 * parseInt(e.substr(3, 2), 16) + 114 * parseInt(e.substr(5, 2), 16)) / 1e3 >= 128 ? "#001f3f" : "#F6F5F7"
            }
            var g = a(80),
                v = a(25),
                b = a(26),
                w = a(78),
                x = a(79);

            function E() {
                var e = Object(c.a)(["\n  position: absolute;\n  left: ", ";\n  top: ", ";\n  right: ", ";\n  bottom: ", ";\n  background: transparent;\n  height: 30px;\n  width: 30px;\n  cursor: pointer;\n  border: 2px solid var(--textColor);\n  border-bottom-right-radius: ", ";\n  border-bottom-left-radius: ", ";\n  border-top-right-radius: ", ";\n  border-top-left-radius: ", ";\n\n  &.active {\n    background: #ffff00;\n  }\n"]);
                return E = function() {
                    return e
                }, e
            }
            g.a.registerLanguage("css", v.a);
            var C = function(e) {
                    function t() {
                        var e, a;
                        Object(l.a)(this, t);
                        for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c];
                        return (a = Object(d.a)(this, (e = Object(h.a)(t)).call.apply(e, [this].concat(r)))).state = {
                            color: "#55b9f3",
                            size: 300,
                            radius: 50,
                            maxRadius: 150,
                            gradient: !0,
                            shape: !0,
                            distance: 30,
                            blur: 60,
                            activeLightSource: 0,
                            colorDifference: .15,
                            maxSize: 410
                        }, a.softElement = o.a.createRef(), a.colorInput = o.a.createRef(), a.codeContainer = o.a.createRef(), a.code = o.a.createRef(), a.body = document.getElementsByTagName("body")[0], a.lightSources = [], a.lightColor = "", a.darkColor = "", a.theme = !0, a.codeString = "background: linear-gradient(145deg);\nbox-shadow: 30px 30px var(--blur) var(--lightColor), \n            -30px -30px var(--blur) var(--darkColor);", a.handleOnChange = function(e) {
                            a.setState(Object(s.a)({}, e.target.name, e.target.value))
                        }, a.handleCheckbox = function(e) {
                            console.log(e.target.name, e.target.checked), a.setState(Object(s.a)({}, e.target.name, e.target.checked))
                        }, a.setDistance = function(e) {
                            a.setState({
                                distance: e.target.value,
                                blur: 2 * e.target.value
                            })
                        }, a.setSize = function(e) {
                            var t = e.target;
                            a.setState({
                                size: t.value,
                                distance: Math.round(.1 * t.value),
                                blur: Math.round(.2 * t.value),
                                maxRadius: Math.round(t.value / 2)
                            })
                        }, a.validateColor = function(e) {
                            /^#[0-9A-F]{6}$/i.test(e.target.value) && (a.handleOnChange(e), window.history.replaceState("homepage", "Title", "/" + e.target.value))
                        }, a.setColor = function(e) {
                            window.history.replaceState("homepage", "Title", "/" + e.target.value), a.handleOnChange(e)
                        }, a.setShape = function(e) {
                            a.setState({
                                shape: e.target.dataset.value
                            })
                        }, a.setLightSource = function(e) {
                            a.lightSources.forEach((function(e) {
                                e.classList.remove("active")
                            })), e.target.classList.add("active"), a.setState({
                                activeLightSource: parseInt(e.target.dataset.value)
                            })
                        }, a.copyToClipboard = function(e) {
                            var t = a.codeContainer.current;
                            t.select(), t.setSelectionRange(0, 99999), document.execCommand("copy"), a.code.current.classList.add("copied"), setTimeout((function() {
                                a.code.current.classList.remove("copied")
                            }), 1e3)
                        }, a.setColorFromRoute = function() {
                            0 != window.location.hash && /^#[0-9A-F]{6}$/i.test(window.location.hash) && a.setState({
                                color: window.location.hash
                            })
                        }, a
                    }
                    return Object(m.a)(t, e), Object(u.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            window.onpopstate = this.setColorFromRoute, this.setState({
                                color: "#55b9f3"
                            }), this.setColorFromRoute(), window.history.replaceState("homepage", "Title", "/" + this.state.color), this.lightSources = Object(i.a)(document.getElementsByClassName("light-source"));
                            var e = window.innerWidth;
                            e < 1e3 && "ReactSnap" !== window.navigator.userAgent ? e < 800 ? e < 680 ? this.setState({
                                maxSize: 180,
                                size: 150
                            }) : this.setState({
                                maxSize: 250,
                                size: 200
                            }) : this.setState({
                                maxSize: 350,
                                size: 250
                            }) : this.setState({
                                maxSize: 410,
                                size: 300
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.blur,
                                a = e.color,
                                n = e.size,
                                r = e.radius,
                                c = e.shape,
                                i = e.distance,
                                s = e.activeLightSource,
                                l = e.colorDifference,
                                u = e.maxSize,
                                d = e.maxRadius,
                                h = e.gradient;
                            if (this.softElement.current) {
                                var m = 145,
                                    v = 30,
                                    b = 30,
                                    E = p(a, -1 * l),
                                    C = p(a, l),
                                    k = h ? p(a, c ? .07 : -.1) : a,
                                    y = h ? p(a, c ? -.1 : .07) : a;
                                switch (s) {
                                    case 1:
                                        v = i, b = i, m = 145;
                                        break;
                                    case 2:
                                        v = -1 * i, b = i, m = 225;
                                        break;
                                    case 3:
                                        v = -1 * i, b = -1 * i, m = 315;
                                        break;
                                    case 4:
                                        v = i, b = -1 * i, m = 45;
                                        break;
                                    default:
                                        v = i, b = i, m = 145
                                }
                                this.colorInput.current.value = a, document.documentElement.style.cssText = "\n        --positionX: ".concat(v, "px;\n        --positionXOpposite: ").concat(-1 * v, "px;\n        --positionY: ").concat(b, "px;\n        --positionYOpposite: ").concat(-1 * b, "px;\n        --angle: ").concat(m, "deg;\n        --blur: ").concat(t, "px;\n        --textColor: ").concat(f(a), ";\n        --textColorOpposite: ").concat(a, ";\n        --baseColor: ").concat(a, ";\n        --darkColor: ").concat(E, ";\n        --lightColor: ").concat(C, ";\n        --firstGradientColor: ").concat(k, ";\n        --secondGradientColor: ").concat(y, ";\n      "), this.softElement.current.style.setProperty("--size", n + "px"), this.softElement.current.style.setProperty("--radius", r + "px"), "#001f3f" === f(a) ? this.theme = !0 : this.theme = !1, this.codeString = "border-radius: ".concat(parseInt(r) === d ? "50%" : r + "px", ";\nbackground: ").concat(h ? "linear-gradient(".concat(m, "deg, ").concat(k, ", ").concat(y, ")") : "".concat(a), ";\nbox-shadow: ").concat(v, "px ").concat(b, "px ").concat(t, "px ").concat(E, ", \n            ").concat(-1 * v, "px ").concat(-1 * b, "px ").concat(t, "px ").concat(C, ";")
                            }
                            return o.a.createElement("div", {
                                className: "container App"
                            }, o.a.createElement("div", {
                                className: "flex"
                            }, o.a.createElement("div", {
                                className: "preview"
                            }, o.a.createElement(S, {
                                top: "0",
                                bottom: "unset",
                                right: "0",
                                left: "unset",
                                "data-value": "2",
                                onClick: this.setLightSource,
                                className: "light-source"
                            }), o.a.createElement(S, {
                                top: "0",
                                bottom: "unset",
                                right: "unset",
                                left: "0",
                                "data-value": "1",
                                onClick: this.setLightSource,
                                className: "light-source active"
                            }), o.a.createElement(S, {
                                top: "unset",
                                bottom: "0",
                                right: "0",
                                left: "unset",
                                "data-value": "3",
                                onClick: this.setLightSource,
                                className: "light-source"
                            }), o.a.createElement(S, {
                                top: "unset",
                                bottom: "0",
                                right: "unset",
                                left: "0",
                                "data-value": "4",
                                onClick: this.setLightSource,
                                className: "light-source"
                            }), o.a.createElement("div", {
                                ref: this.softElement,
                                className: "soft-element soft-shadow"
                            })), o.a.createElement("div", {
                                className: "configuration soft-shadow"
                            }, o.a.createElement("div", {
                                className: "row"
                            }, o.a.createElement("label", {
                                htmlFor: "color"
                            }, "Pick a color:"), o.a.createElement("input", {
                                type: "color",
                                name: "color",
                                onChange: this.setColor,
                                placeholder: "#ffffff",
                                value: a,
                                id: "color"
                            }), o.a.createElement("label", {
                                htmlFor: "colorInput",
                                style: {
                                    paddingLeft: "10px"
                                }
                            }, "or"), o.a.createElement("input", {
                                type: "text",
                                placeholder: "#ffffff",
                                name: "color",
                                id: "colorInput",
                                ref: this.colorInput,
                                onChange: this.validateColor
                            })), o.a.createElement("div", {
                                className: "row"
                            }, o.a.createElement("label", {
                                htmlFor: "size"
                            }, "Size: "), o.a.createElement("input", {
                                type: "range",
                                name: "size",
                                value: n,
                                onChange: this.setSize,
                                min: "10",
                                max: u,
                                step: "1",
                                id: "size"
                            })), o.a.createElement("div", {
                                className: "row"
                            }, o.a.createElement("label", {
                                htmlFor: "radius"
                            }, "Radius: "), o.a.createElement("input", {
                                type: "range",
                                name: "radius",
                                value: r,
                                onChange: this.handleOnChange,
                                min: "0",
                                max: d,
                                step: "1",
                                id: "radius"
                            })), o.a.createElement("div", {
                                className: "row"
                            }, o.a.createElement("label", {
                                htmlFor: "distance"
                            }, "Distance: "), o.a.createElement("input", {
                                type: "range",
                                name: "distance",
                                value: i,
                                onChange: this.setDistance,
                                min: "5",
                                max: "50",
                                step: "1",
                                id: "distance"
                            })), o.a.createElement("div", {
                                className: "row"
                            }, o.a.createElement("label", {
                                htmlFor: "colorDifference"
                            }, "Intensity: "), o.a.createElement("input", {
                                type: "range",
                                name: "colorDifference",
                                value: l,
                                onChange: this.handleOnChange,
                                min: "0.01",
                                max: "0.6",
                                step: "0.01",
                                id: "colorDifference"
                            })), o.a.createElement("div", {
                                className: "row"
                            }, o.a.createElement("label", {
                                htmlFor: "blur"
                            }, "Blur: "), o.a.createElement("input", {
                                type: "range",
                                name: "blur",
                                value: t,
                                onChange: this.handleOnChange,
                                min: "0",
                                max: "100",
                                step: "1",
                                id: "blur"
                            })), o.a.createElement("div", {
                                className: "row"
                            }, o.a.createElement("label", {
                                htmlFor: "gradient"
                            }, "Gradient background: "), o.a.createElement("label", {
                                className: "checkbox"
                            }, o.a.createElement("input", {
                                type: "checkbox",
                                name: "gradient",
                                checked: h,
                                onChange: this.handleCheckbox,
                                id: "gradient"
                            }), o.a.createElement("span", null))), o.a.createElement("div", {
                                className: "row"
                            }, o.a.createElement("label", {
                                htmlFor: "shape"
                            }, "Shape: "), o.a.createElement("div", {
                                className: "shape-switch"
                            }, o.a.createElement("button", {
                                className: c ? "active" : "",
                                onClick: this.setShape,
                                "data-value": " "
                            }, "Concave"), o.a.createElement("button", {
                                className: c ? "" : "active",
                                onClick: this.setShape,
                                "data-value": ""
                            }, "Convex"))), o.a.createElement("div", {
                                className: "code-block ".concat(this.theme ? "" : "small"),
                                ref: this.code
                            }, o.a.createElement("button", {
                                className: "copy",
                                onClick: this.copyToClipboard
                            }, "Copy"), o.a.createElement(g.a, {
                                language: "css",
                                style: this.theme ? w.a : x.a
                            }, this.codeString), o.a.createElement("label", {
                                htmlFor: "code-container",
                                className: "hidden"
                            }, "hidden"), o.a.createElement("textarea", {
                                id: "code-container",
                                ref: this.codeContainer,
                                value: this.codeString,
                                readOnly: !0
                            })))))
                        }
                    }]), t
                }(n.Component),
                S = b.a.div(E(), (function(e) {
                    return e.left
                }), (function(e) {
                    return e.top
                }), (function(e) {
                    return e.right
                }), (function(e) {
                    return e.bottom
                }), (function(e) {
                    return "unset" === e.right && "unset" === e.bottom ? "30px" : "unset"
                }), (function(e) {
                    return "unset" === e.left && "unset" === e.bottom ? "30px" : "unset"
                }), (function(e) {
                    return "unset" === e.right && "unset" === e.top ? "30px" : "unset"
                }), (function(e) {
                    return "unset" === e.left && "unset" === e.top ? "30px" : "unset"
                })),
                k = C,
                y = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

            function N(e, t) {
                navigator.serviceWorker.register(e).then((function(e) {
                    e.onupdatefound = function() {
                        var a = e.installing;
                        null != a && (a.onstatechange = function() {
                            "installed" === a.state && (navigator.serviceWorker.controller ? (console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."), t && t.onUpdate && t.onUpdate(e)) : (console.log("Content is cached for offline use."), t && t.onSuccess && t.onSuccess(e)))
                        })
                    }
                })).catch((function(e) {
                    console.error("Error during service worker registration:", e)
                }))
            }
            var O = document.getElementById("root");
            O.hasChildNodes() ? Object(r.hydrate)(o.a.createElement(k, null), O) : Object(r.render)(o.a.createElement(k, null), O),
                function(e) {
                    if ("serviceWorker" in navigator) {
                        if (new URL("", window.location.href).origin !== window.location.origin) return;
                        window.addEventListener("load", (function() {
                            var t = "".concat("", "/service-worker.js");
                            y ? (! function(e, t) {
                                fetch(e, {
                                    headers: {
                                        "Service-Worker": "script"
                                    }
                                }).then((function(a) {
                                    var n = a.headers.get("content-type");
                                    404 === a.status || null != n && -1 === n.indexOf("javascript") ? navigator.serviceWorker.ready.then((function(e) {
                                        e.unregister().then((function() {
                                            window.location.reload()
                                        }))
                                    })) : N(e, t)
                                })).catch((function() {
                                    console.log("No internet connection found. App is running in offline mode.")
                                }))
                            }(t, e), navigator.serviceWorker.ready.then((function() {
                                console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")
                            }))) : N(t, e)
                        }))
                    }
                }()
        }
    },
    [
        [34, 1, 2]
    ]
]);
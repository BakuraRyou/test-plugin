var r = Object.defineProperty;
var C = Object.getOwnPropertyDescriptor;
var E = Object.getOwnPropertyNames,
  b = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty,
  N = Object.prototype.propertyIsEnumerable;
var x = (e, n) => {
  var l = {};
  for (var t in e) m.call(e, t) && n.indexOf(t) < 0 && (l[t] = e[t]);
  if (e != null && b) for (var t of b(e)) n.indexOf(t) < 0 && N.call(e, t) && (l[t] = e[t]);
  return l;
};
var R = (e, n) => {
    for (var l in n) r(e, l, {
      get: n[l],
      enumerable: !0
    });
  },
  D = (e, n, l, t) => {
    if (n && typeof n == "object" || typeof n == "function") for (let a of E(n)) !m.call(e, a) && a !== l && r(e, a, {
      get: () => n[a],
      enumerable: !(t = C(n, a)) || t.enumerable
    });
    return e;
  };
var O = e => D(r({}, "__esModule", {
  value: !0
}), e);
var z = {};
R(z, {
  default: () => L
});
module.exports = O(z);
var c = React;
var s = ReactJSX,
  h = [{
    code: "en",
    label: "English"
  }, {
    code: "pl",
    label: "Polish"
  }, {
    code: "de",
    label: "Deutsch"
  }];
function L({
  config: e = {
    languages: h
  }
}) {
  var d, f;
  let [n, l] = (0, c.useState)(!1),
    t = (0, c.useRef)(null),
    a = (0, c.useRef)(null),
    p = ((d = globalThis.dynamicHooks) == null ? void 0 : d.useLocale()) || {
      locale: "",
      setLocale: () => {}
    },
    {
      locale: i,
      setLocale: v
    } = p,
    H = x(p, ["locale", "setLocale"]),
    u = e.languages || h;
  (0, c.useEffect)(() => {
    function o(g) {
      t.current && !t.current.contains(g.target) && a.current && !a.current.contains(g.target) && l(!1);
    }
    return document.addEventListener("mousedown", o), () => document.removeEventListener("mousedown", o);
  }, []);
  let y = ((f = u.find(o => o.code === i)) == null ? void 0 : f.label) || "Select Language",
    k = () => l(o => !o),
    w = o => {
      o !== i && v(o), l(!1);
    },
    S = n ? (0, s.jsx)("ul", {
      ref: a,
      className: "paper p-2 flex flex-column gap-1",
      style: {
        position: "absolute",
        top: "100%",
        left: 0,
        minWidth: "100%",
        zIndex: 1100,
        backgroundColor: "var(--bg-paper)",
        border: "1px solid var(--bg-border)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)"
      },
      children: u.map(o => (0, s.jsx)("li", {
        children: (0, s.jsx)("button", {
          type: "button",
          className: "text flex items-center gap-1 pointer w-full text-left px-2 py-1 hover",
          onClick: () => w(o.code),
          children: o.label
        })
      }, o.code))
    }) : null;
  return (0, s.jsxs)("div", {
    ref: t,
    style: {
      display: "inline-block",
      position: "relative"
    },
    children: [(0, s.jsxs)("button", {
      type: "button",
      className: "contained flex items-center gap-1 pointer",
      onClick: k,
      children: [(0, s.jsx)("span", {
        children: y
      }), (0, s.jsx)("span", {
        "aria-hidden": !0,
        className: "ml-1",
        children: "\u25BC"
      })]
    }), S]
  });
}
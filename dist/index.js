"use strict";
function e(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
Object.defineProperty(exports, "__esModule", { value: !0 });
var t = e(require("react")),
  r = function () {
    return (
      (r =
        Object.assign ||
        function (e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var o in (t = arguments[r]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }),
      r.apply(this, arguments)
    );
  };
var n, o;
!(function (e, t) {
  void 0 === t && (t = {});
  var r = t.insertAt;
  if (e && "undefined" != typeof document) {
    var n = document.head || document.getElementsByTagName("head")[0],
      o = document.createElement("style");
    (o.type = "text/css"),
      "top" === r && n.firstChild
        ? n.insertBefore(o, n.firstChild)
        : n.appendChild(o),
      o.styleSheet
        ? (o.styleSheet.cssText = e)
        : o.appendChild(document.createTextNode(e));
  }
})(
  '@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap");*{font-family:Montserrat,sans-serif}.input{border-radius:.3rem;margin-left:.8rem;padding-left:.5rem;transition:.1s}.input:focus{outline:none}.input-wrapper{position:relative}.invalid{box-shadow:0 0 0 2px #d64b4b}.valid{border:1px solid #05df05}.error-message{color:#d64b4b;font-size:.8rem;left:10rem;position:absolute;text-align:left}.error-message:before{content:"- "}'
),
  (function (e) {
    (e.TEXT = "text"), (e.PASSWORD = "password");
  })(n || (n = {})),
  (function (e) {
    (e.small = "12px"), (e.medium = "16px"), (e.large = "20px");
  })(o || (o = {})),
  (exports.Input = function (e) {
    var a = e.name,
      i = e.displayName,
      s = e.type,
      l = void 0 === s ? n.TEXT : s,
      d = e.value,
      u = e.onChange,
      c = e.color,
      p = void 0 === c ? "#222222" : c,
      f = e.errorMessage,
      m = void 0 === f ? "" : f,
      v = e.resetErrorMessage,
      g = e.fontSize,
      h = void 0 === g ? o.medium : g,
      y = e.args,
      b = t.default.useState(!1),
      x = b[0],
      E = b[1],
      S = {
        color: p,
        border: "1px solid ".concat(p, "40"),
        boxShadow: x && "0 0 0 2px ".concat(p),
        transform: x && "scale(1.05)",
        fontSize: h,
      };
    return t.default.createElement(
      "div",
      { className: "input-wrapper" },
      t.default.createElement(
        "label",
        {
          className: "input-label",
          style: { color: p, fontSize: h },
          htmlFor: a,
        },
        i
      ),
      t.default.createElement(
        "input",
        r(
          {
            className: "input ".concat(m.length ? "invalid" : "valid"),
            id: a,
            name: a,
            type: l,
            value: d,
            onChange: function (e) {
              u(function (t) {
                var n;
                return r(r({}, t), (((n = {})[a] = e.target), n));
              }),
                v();
            },
            onFocus: function () {
              return E(!0);
            },
            onBlur: function () {
              return E(!1);
            },
            style: S,
          },
          y
        )
      ),
      t.default.createElement("div", { className: m && "error-message" }, m)
    );
  });

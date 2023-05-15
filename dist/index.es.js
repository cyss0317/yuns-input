import e from "react";
var t = function () {
  return (
    (t =
      Object.assign ||
      function (e) {
        for (var t, r = 1, n = arguments.length; r < n; r++)
          for (var o in (t = arguments[r]))
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }),
    t.apply(this, arguments)
  );
};
var r, n;
function o(o) {
  var a = o.name,
    i = o.displayName,
    s = o.type,
    l = void 0 === s ? r.TEXT : s,
    c = o.value,
    d = o.onChange,
    p = o.color,
    m = void 0 === p ? "#222222" : p,
    u = o.errorMessage,
    f = void 0 === u ? "" : u,
    g = o.resetErrorMessage,
    v = o.fontSize,
    h = void 0 === v ? n.medium : v,
    y = o.args,
    b = e.useState(!1),
    x = b[0],
    E = b[1],
    S = {
      color: m,
      border: "1px solid ".concat(m, "40"),
      boxShadow: x && "0 0 0 2px ".concat(m),
      transform: x && "scale(1.05)",
      fontSize: h,
    };
  return e.createElement(
    "div",
    { className: "input-wrapper" },
    e.createElement(
      "label",
      {
        className: "input-label",
        style: { color: m, fontSize: h },
        htmlFor: a,
      },
      i
    ),
    e.createElement(
      "input",
      t(
        {
          className: "input ".concat(f.length ? "invalid" : "valid"),
          id: a,
          name: a,
          type: l,
          value: c,
          onChange: function (e) {
            d(function (r) {
              var n;
              return t(t({}, r), (((n = {})[a] = e.target), n));
            }),
              g();
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
    e.createElement("div", { className: f && "error-message" }, f)
  );
}
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
  '@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap");*{font-family:Montserrat,sans-serif}.input{border-radius:.3rem;margin-left:.8rem;padding-left:.5rem;transition:.1s}.input:focus{outline:none}.input-wrapper{position:relative}.invalid{box-shadow:0 0 0 2px #d64b4b}.valid{border:1px solid #05df05}.error-message{color:#d64b4b;font-size:.8rem;position:absolute;right:10rem;text-align:left}.error-message:before{content:"- "}'
),
  (function (e) {
    (e.TEXT = "text"), (e.PASSWORD = "password");
  })(r || (r = {})),
  (function (e) {
    (e.small = "12px"), (e.medium = "16px"), (e.large = "20px");
  })(n || (n = {}));
export { o as Input };

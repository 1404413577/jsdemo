"use strict";
(self["webpackChunkmyweb3"] = self["webpackChunkmyweb3"] || []).push([
  [210],
  {
    6210: function (n, t, u) {
      u.r(t),
        u.d(t, {
          default: function () {
            return o;
          },
        });
      var e = u(3396),
        c = u(7139);
      function l(n, t, u, l, r, i) {
        return (
          (0, e.wg)(),
          (0, e.iD)("div", null, [
            (0, e._)("p", null, (0, c.zw)(l.count), 1),
            (0, e._)(
              "button",
              {
                onClick:
                  t[0] || (t[0] = (...n) => l.btnClick && l.btnClick(...n)),
              },
              "累加"
            ),
          ])
        );
      }
      var r = u(4870),
        i = {
          setup() {
            let n = (0, r.iH)(0),
              t = () => {
                n.value++;
              };
            return { count: n, btnClick: t };
          },
        },
        b = u(89);
      const k = (0, b.Z)(i, [["render", l]]);
      var o = k;
    },
  },
]);
//# sourceMappingURL=210.10c62d26.js.map

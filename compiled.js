"use strict";

var _now = _interopRequireDefault(require("lodash/now"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

const f = function ($log) {
  'ngInject';

  let C =
  /*#__PURE__*/
  function () {
    function C() {
      _classCallCheck(this, C);
    }

    _createClass(C, [{
      key: "_now",
      value: function _now() {
        (0, _now.default)();
      }
    }]);

    return C;
  }();

  return C;
};

f.$inject = ["$log"];
// After running through babel-plugin-angularjs-annotate, f will be an array
// with its second element as a function that returns C.
const C = f[1](); // This line will trigger an exception: "(0 , _now.default) is not a function"
// But it should instead return the current time and not throw an exception.

const n = new C()._now();


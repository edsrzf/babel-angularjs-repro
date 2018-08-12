// We can actually call this import anything and it still reproduces the bug.
// For example:
//     import monkey from 'lodash/now'
import now from 'lodash/now'

const f = function ($log) {
  'ngInject'
  class C {
    _now () {
      // This is the problem line. It compiles to:
      //     (0, _now.default)();
      // It's supposed to reference the "now" import, but instead references
      // this method, which of course doesn't have a "default" property.
      now()
    }
  }

  return C
}

// After running through babel-plugin-angularjs-annotate, f will be an array
// with its second element as a function that returns C.
const C = f[1]()
// This line will trigger an exception: "(0 , _now.default) is not a function"
// But it should instead return the current time and not throw an exception.
const n = new C()._now()

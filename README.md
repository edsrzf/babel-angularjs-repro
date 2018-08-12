This repo contains a minimal reproduction case for a [bug](https://github.com/schmod/babel-plugin-angularjs-annotate/issues/47) in [babel-plugin-angularjs-annotate](https://github.com/schmod/babel-plugin-angularjs-annotate). When a class method has the same name as an import with an underscore prefix, the method name will incorrectly shadow the import, resulting in a runtime exception.

The source code is contained in `index.js`, which runs through babel and is compiled to `compiled.js`. See comments in `index.js` for more information.

To reproduce:

* First install dependencies with yarn by running: `yarn`
* Run: `yarn repro`. This will compile `index.js` and run `compiled.js`, resulting in an exception.

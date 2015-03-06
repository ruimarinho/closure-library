
/**
 * Module dependencies.
 */

var fs = require('fs');
var path = require('path');
var vm = require('vm');

/**
 * Set defaults on `target`.
 */

function defaults(target, defaults) {
  for (var attribute in defaults) {
    if (target[attribute] === undefined) {
      target[attribute] = defaults[attribute];
    }
  }
}

/**
 * Load closure library in a sandbox.
 * Originally based on the `closure` package.
 */

module.exports.load = function(context) {
  context = context === undefined ? {} : context;

  defaults(context, {
    CLOSURE_BASE_PATH: path.join(__dirname, '../closure/goog/'),
    CLOSURE_IMPORT_SCRIPT: loadScript,
    goog: {}
  });

  context.goog.loadScript = loadScript;

  var sandbox = vm.createContext(context)

  function loadScript(file) {
    vm.runInContext(fs.readFileSync(file), sandbox);

    return true;
  }

  loadScript(context.CLOSURE_BASE_PATH + 'base.js');

  return context.goog;
};

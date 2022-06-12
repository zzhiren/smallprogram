import React, { Fragment as Fragment$1 } from 'react';
import Taro from '@tarojs/taro';
import { Text, View, Image, Canvas, Label, Input as Input$1 } from '@tarojs/components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
reactIs_development.AsyncMode;
reactIs_development.ConcurrentMode;
reactIs_development.ContextConsumer;
reactIs_development.ContextProvider;
reactIs_development.Element;
reactIs_development.ForwardRef;
reactIs_development.Fragment;
reactIs_development.Lazy;
reactIs_development.Memo;
reactIs_development.Portal;
reactIs_development.Profiler;
reactIs_development.StrictMode;
reactIs_development.Suspense;
reactIs_development.isAsyncMode;
reactIs_development.isConcurrentMode;
reactIs_development.isContextConsumer;
reactIs_development.isContextProvider;
reactIs_development.isElement;
reactIs_development.isForwardRef;
reactIs_development.isFragment;
reactIs_development.isLazy;
reactIs_development.isMemo;
reactIs_development.isPortal;
reactIs_development.isProfiler;
reactIs_development.isStrictMode;
reactIs_development.isSuspense;
reactIs_development.isValidElementType;
reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function objectToString(style) {
    if (style && typeof style === 'object') {
        var styleStr_1 = '';
        Object.keys(style).forEach(function (key) {
            var lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
            styleStr_1 += lowerCaseKey + ":" + style[key] + ";";
        });
        return styleStr_1;
    }
    else if (style && typeof style === 'string') {
        return style;
    }
    return '';
}
function pxTransform(size) {
    if (!size)
        return '';
    var designWidth = 750;
    var deviceRatio = {
        640: 2.34 / 2,
        750: 1,
        828: 1.81 / 2
    };
    return size / deviceRatio[designWidth] + "rpx";
}
/**
 * 合并 style
 * @param {Object|String} style1
 * @param {Object|String} style2
 * @returns {String}
 */
function mergeStyle(style1, style2) {
    if (style1 &&
        typeof style1 === 'object' &&
        style2 &&
        typeof style2 === 'object') {
        return Object.assign({}, style1, style2);
    }
    return objectToString(style1) + objectToString(style2);
}
/**
 * @desc 校验文件格式
 * @param str
 * @param returnType
 * @param fileType
 */
function checkFileType(str, returnType, fileType) {
    if (returnType === void 0) { returnType = 'boolean'; }
    if (fileType === void 0) { fileType = 'img'; }
    var typeToRegExp = {
        img: new RegExp(/\.(jpeg|png|jpg)$/, 'i'),
        video: new RegExp(/\.(rm|rmvb|mpeg-1|mpeg-2|mpeg-3|mpeg-4|mov|mtv|dat|wmv|avi|3gp|amv|dmv|flv|mpg|mpe|mpa|m15|m1v|mp2|mp4)$/, 'i'),
        audio: new RegExp(/\.(CD|mp3|MIDI|AAC|FLAC|APE|AMR|AIFF|WAVE)$/, 'i'),
        word: new RegExp(/\.(doc|docx)$/, 'i'),
        excel: new RegExp(/\.(xls|xlsx)$/, 'i'),
        ppt: new RegExp(/\.(ppt|pptx)$/, 'i'),
        pdf: new RegExp(/\.(pdf)$/, 'i'),
        gif: new RegExp(/\.(gif)$/, 'i')
    };
    if (returnType === 'boolean') {
        if (Object.keys(typeToRegExp).indexOf(fileType) > -1) {
            return typeToRegExp[fileType].test(str);
        }
        return 'unknown';
    }
    return Object.keys(typeToRegExp).find(function (v) { return typeToRegExp[v].test(str); }) || 'unknown';
}
/**
 * @desc 获取文件后缀名
 * @param str
 */
function getFileSuffix(str) {
    return str.substring(str.lastIndexOf('.') + 1);
}

var ENV = Taro.getEnv();
var IS_WEAPP = ENV === Taro.ENV_TYPE.WEAPP;
var IS_WEB = ENV === Taro.ENV_TYPE.WEB;
var IS_ALIPAY = ENV === Taro.ENV_TYPE.ALIPAY;

var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon.prototype.handleClick = function () {
        this.props.onClick && this.props.onClick(arguments);
    };
    Icon.prototype.render = function () {
        var _a = this.props, customStyle = _a.customStyle, className = _a.className, prefixClass = _a.prefixClass, value = _a.value, size = _a.size, color = _a.color;
        var rootStyle = {
            fontSize: "" + pxTransform(parseInt(String(size)) * 2),
            color: color
        };
        var iconName = value ? prefixClass + "-" + value : '';
        return (React.createElement(Text, { className: classnames(prefixClass, iconName, className), style: mergeStyle(rootStyle, customStyle), onClick: this.handleClick.bind(this) }));
    };
    return Icon;
}(React.Component));
Icon.defaultProps = {
    customStyle: '',
    className: '',
    prefixClass: 'ag-icon',
    value: '',
    color: '',
    size: 24
};
Icon.propTypes = {
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
    prefixClass: propTypes.string,
    value: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOfType([propTypes.string, propTypes.number]),
    onClick: propTypes.func
};

var ActionSheetBody = /** @class */ (function (_super) {
    __extends(ActionSheetBody, _super);
    function ActionSheetBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActionSheetBody.prototype.render = function () {
        var rootClass = classnames('ag-action-sheet__body', this.props.className);
        return React.createElement(View, { className: rootClass }, this.props.children);
    };
    return ActionSheetBody;
}(React.Component));

var ActionSheetFooter = /** @class */ (function (_super) {
    __extends(ActionSheetFooter, _super);
    function ActionSheetFooter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (typeof _this.props.onClick === 'function') {
                (_a = _this.props).onClick.apply(_a, __spread(args));
            }
        };
        return _this;
    }
    ActionSheetFooter.prototype.render = function () {
        var rootClass = classnames('ag-action-sheet__footer', this.props.className);
        return (React.createElement(View, { onClick: this.handleClick, className: rootClass }, this.props.children));
    };
    return ActionSheetFooter;
}(React.Component));
ActionSheetFooter.propTypes = {
    onClick: propTypes.func
};

var ActionSheetHeader = /** @class */ (function (_super) {
    __extends(ActionSheetHeader, _super);
    function ActionSheetHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActionSheetHeader.prototype.render = function () {
        var rootClass = classnames('ag-action-sheet__header', this.props.className);
        return React.createElement(View, { className: rootClass }, this.props.children);
    };
    return ActionSheetHeader;
}(React.Component));

var ActionSheet = /** @class */ (function (_super) {
    __extends(ActionSheet, _super);
    function ActionSheet(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClose = function () {
            if (typeof _this.props.onClose === 'function') {
                _this.props.onClose();
            }
        };
        _this.handleCancel = function () {
            if (typeof _this.props.onCancel === 'function') {
                return _this.props.onCancel();
            }
            _this.close();
        };
        _this.close = function () {
            _this.setState({
                _isOpened: false
            }, _this.handleClose);
        };
        _this.handleTouchMove = function (e) {
            e.stopPropagation();
            e.preventDefault();
        };
        var isOpened = props.isOpened;
        _this.state = {
            _isOpened: isOpened
        };
        return _this;
    }
    ActionSheet.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var isOpened = nextProps.isOpened;
        if (isOpened !== this.state._isOpened) {
            this.setState({
                _isOpened: isOpened
            });
            !isOpened && this.handleClose();
        }
    };
    ActionSheet.prototype.render = function () {
        var _a = this.props, title = _a.title, cancelText = _a.cancelText, className = _a.className;
        var _isOpened = this.state._isOpened;
        var rootClass = classnames('ag-action-sheet', {
            'ag-action-sheet--active': _isOpened
        }, className);
        return (React.createElement(View, { className: rootClass, onTouchMove: this.handleTouchMove },
            React.createElement(View, { onClick: this.close, className: 'ag-action-sheet__overlay' }),
            React.createElement(View, { className: 'ag-action-sheet__container' },
                title && React.createElement(ActionSheetHeader, null, title),
                React.createElement(ActionSheetBody, null, this.props.children),
                cancelText && (React.createElement(ActionSheetFooter, { onClick: this.handleCancel }, cancelText)))));
    };
    return ActionSheet;
}(React.Component));
ActionSheet.defaultProps = {
    title: '',
    cancelText: '',
    isOpened: false
};
ActionSheet.propTypes = {
    title: propTypes.string,
    onClose: propTypes.func,
    onCancel: propTypes.func,
    isOpened: propTypes.bool.isRequired,
    cancelText: propTypes.string
};

var ActionSheetItem = /** @class */ (function (_super) {
    __extends(ActionSheetItem, _super);
    function ActionSheetItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (args) {
            if (typeof _this.props.onClick === 'function') {
                _this.props.onClick(args);
            }
        };
        return _this;
    }
    ActionSheetItem.prototype.render = function () {
        var rootClass = classnames('ag-action-sheet__item', this.props.className);
        return (React.createElement(View, { className: rootClass, onClick: this.handleClick }, this.props.children));
    };
    return ActionSheetItem;
}(React.Component));
ActionSheetItem.propTypes = {
    onClick: propTypes.func
};

var img$a = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA5FBMVEUAAAD/eHj/f3//eHj/d3f/eHj/eHj/eXn/eHj/d3f/eHj/eHj/eHj/eHj/eHj/d3f/d3f/eHj/eXn/eHj/eHj/dXX/enr/Zmb/d3f/eHj/eHj/d3f/eHj////7xcX+ior7r6//eXn//Pz0YGD+3Nz5aWn/8PD9vr74bGz+4eH/xcX7wcH/qan+paX7nJz+dHT8cXH/9PT/6Oj6y8v/t7f5r6//j4/zdnb7bW3zbGzzZWX3ZGT+9/f/19f719f/z8/6ysr5urr4tLT6qan3qan/mJj1kpL6ior0hob6hIT/g4Pzenq/3V/JAAAAHHRSTlMA3QL5KuHVuaRc8tjKvqqKf0xBPTcmFwXv7uSvPLWyVQAAAVxJREFUWMPt19dugzAUgGFnkNXs0XQcJw0rZAHZq3uP93+fVhRFmCLVx9wQif8OS/4M3NgmcRErXc1mEv+WKVWaJKjTHHCXbQUsLwGi8/qf9SVAVUj7gDIgKybZDwB0NQao4oEcA2TxQIIBMnggxQAJwJc8IuDTXNzNZH0lAPS6k/6NTn8b4YDeajxUp9RTBwUMZcqEBbqURgyQVXFgevv4ulb2QoA+f37fKnvDBujhgc6XomgbC5xEgCU4iQNXMRAtYDLQB2GABXUSBroyFhirM9UDjCkSGNKfPMDEBfqcwAv1AR/ugMkJ9P2ANXKeVRsJPB1GtOU1lUcGcAKmC7zBoY2yVTTgBeyBM//eEt7ajDml8oMRYm/UduudFqndmQMQOuIwQAkPSMRbBQ+UGaCJB/Ik3EHxpM0CrTPkL2wQX/UCan4+4MJQRLx/gwSUrOWkFMfiF5f5NomLVN8kgCEMyjqFTwAAAABJRU5ErkJggg==";
  var Audio = img$a;

var img$9 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAt1BMVEUAAACLcveHePCLcveJdv+Idv+LcveLcveLc/eLcveLcviLcveLcveKcveLdP+LcveLcveLcfeMcveLcvaKcPaLcfqMc/iKcveLc/eLc/eLcfaLcfiMc/iLdPaJcfWLcvf///+yofqHcPWsofPBt/ikkvitnvj9/f+fjPiFbvSCbfLAs/uKcffv7f3QxvvIvvnQyvi3q/eXgveXivCvnvmahfjDuveMc/e7svasnvWHb/Waj/CQg++KFUYIAAAAH3RSTlMA7hHqDQX54EHnz7KUYQLz18m+UjstI7qpoFpNRzc0xjoVyAAAAR9JREFUWMPt1mtPwjAUgOFiXdkGQy7iXc/hZtmGgOBd///vMlHpaKdZLyYK7Pna5N3p0nQjpZLEr4e0ooU2T88bRHHUBiPhFZEcVsAQ60jPp2CMXZLMMVhoetkGwMqZCNTtAjURaNkFAhGogh3xEqhlYL8M/N/AuKcYg3A/Kg7MMGe6WutxvCsKLDjmfc1wyxGHRYERfuP6Yynl6BRIEV0Cj1N0C6ToGLj588CTayCeOwYgeXAMQDLUCizwx6Mcax3lyQxz5n34LAw4PhcFIFkOFMtktfby9hprXCh9xWR9wI240nYz4Px5b4EV+nu/OL5dICJCGyxUvSzQPQBjzCdrLowLLCKSbmg4v08Ujc5JwEBPUIvE/uXInhaPlLbNO0UoOqdg9BHjAAAAAElFTkSuQmCC";
  var Video = img$9;

var img$8 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAWlBMVEUAAADmRUXmRETlQkLoQ0PnRUXnRUXlRUXmRETmRUXmRUXmRUXmRUXmRETnRUXnRUXmRUXmRUXmRETmRUXmRUXlRkbmRUXlRkbmRUXlRETmRUX////97e3ug4OFDuolAAAAGnRSTlMA+kYJGMWgyMK17d7ReXJBEJnz8aocWlhcHuYHbQ0AAAFISURBVFjDzZdZcoMwEEQ9gJDYwXs69v2vmSoqiSyziekfv/8ekGZRz+FzSZMmt1UpUlY2b5J0nzprjSBATJtFy5NCMIMUXZzcYhGbbP98jlWKr3X9/YgNjte1m88RwbCYkd4hCtsvHL9GJHU2+/0a0dT9zPkNduCm95BjF8O7/oad3EP95YidnC5BgDN2cw7qHwpe+8JAgSV/APDdXUBF8V/DAhXyV9EtlLT+CnW43y4QKJGUyYEvhQZqGt+HOvIxgIUaMwaooKYaA5QIeT6+F3g8EVKOAQQhXj+NgBChA9BHoC+RTiNdSHQp883EtzM/UPiRxg9VfqwfOqjo2KeNfVw79nlnDUZGWpyJYR1Ik3VIHWHzCKNJWF3CbLt+0e4PSrvvuZ42838jV57L9tJlsIiJ29s6/drnF08nb2rXZurV14yr78fyA+itGvafUH80AAAAAElFTkSuQmCC";
  var Delete = img$8;

var img$7 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAn1BMVEUAAABT05w7yI1S05xT05xT05wzxoRT05xS05xT05suwoAuxIFS1JxT05wuw39T05xT0pxT05w6yYtS1JpAyopDzJBV1JpT05wlv3n///9M0Jfw+/bl+PBP0Zly265l2KZZ0Jvy/Pho1KP5/ftBy476/fxs1aY2xoVQ0prY9enO8+Ol58qM4bxq2ald1qJZ0p1Jz5Xq+fKL3bgrwn4nwHtMTsr+AAAAF3RSTlMA9xXfUfTUz6FK7+4u8PDVyKhZNQznMPyP/lAAAAFcSURBVFjD7dbZTsMwEAXQmDQbpHShME7SUFqgSctWlv//NmQF6QIl9kx4QFS57/fYskeWvT7fMpj4ilqizsOpo34WkS03Wocz6/KKXIA+ObKsr8gN6ON2ISIOoE/bhAExANseJhzAtgefA9j2oLhA212QMzsNYSYAkFcIYSdg9wZhKgCQvLJsgVip84/43QBEdQSQwwceNtsFEXK52T6KgLssmy8I/SLL7kXA6rYR0C+eREC5ujYC+surWgRQ3gjolyQBIKAvAyCgzwUgrM1JmvNDnw1gD1ifD0B4McC6JDmA+8NtigDcPyZKBOD+MQ8iAPODiZIBmB8IEgB9CLL3oJmfzxMlfA/QbwTxe1A8mz6E5Vz4HlSV6UOoqvqfvco98DeA+u0Hw5cB/h4Qy4DY/tl2Z2D97rsTeftJA34/uEAPSdhCkHg/Jh3z+uPUa0sSj4b28nAUJ16fr3kH1ajs5Iml6+oAAAAASUVORK5CYII=";
  var Excel = img$7;

var img$6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABDlBMVEUAAAD/eHj/f3//eHj/eHj/eHj/eHj/eHj/eXn/enr/eHj/eHj/eHj/eHj/eXn/eHj/eHj/d3f/eHj/eXn/d3f/d3f/d3f/eHj/eHj/eXn/eHj/eHj/////7e37q6v/9/f+dnbzbW3//Pz7ubn/gYH/fn70ZGT+9fX+6Oj95eX5sLD/rKz/jo78cHD2YWH0Xl7/+fn/9vb/6ur/19f81NT8x8f/paX2kpL+kZH/ior/enr9c3P0c3P5bGz4Z2f/8fH929v9zMz/wMD6vb3/urr/tLT4qKj9n5/7lpb0iYn+hYX7eHj1d3f6cXHzb2/6bW3zamr84eH+39/82Nj9tLT2oqL2nZ31g4P9enr0dXXXXjGRAAAAG3RSTlMA7gLd9ufUSzIf6s+838u1p5yShjs2MMiwVFMIcGNwAAABtUlEQVRYw+3X11LCQBiGYUXBgr3rfjEx0nsRkCogvdv1/m9EkpHogo752ROY4T1imNmHkNlJ/l1aNGMdHdity/9mte2vWX5bvrHFTLezPrn+eJMRWl2b+P3hepIwfg27jJiNvw/rjNw5BxzSgT0O2KID2xxgowOrHLDC6FnmBXAG0s6pAYc/LmPYXSmZmQJwVqIwkvxkICBBS/Z6ZGjFHTSgri17eB2EQ6FwrqZhCRJwKwPRlCvI9IIunwofBXBIgOcjy4z6uWaeApQBd0fhvlIoN7EVAVKKwEZ6BopBkZ1YBBoiW9kJqG0RIA14mQjQAG5Gn6sx6au4wzRw+w1kVBj5TQOtH3+hBKNL08A7oI6utzC40runAOwJSDK+axJQAx6FgLYMJEUAxQfIAQGAdT2AxAmEm6jXiQKyP2Ns7rJKBJQ3NwBPNa1vrModQARYNueFViQmRcgbSU9xvbhhFLsB6iRAf5SmErohJZqh/LWvS3+1ZQvhcK/nChUUxvL9eX07mwHERxzxIUt8zDuhAxdLXGeMmN0yNmxb6cO2+LjPt0EY2E9P/jjy7Jg58ti1I8+imeoTJLQcYBN0L0AAAAAASUVORK5CYII=";
  var Gif = img$6;

var img$5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA9lBMVEUAAAD/V1f0XFzzamr/eHj/eHj/eHj/d3f/eHj/eHj2X1//d3f/eHj/eXn/eHj/eHj/eHj/d3f/eHj7bGz+dHT2YWH3ZGT5ZWX/enr/YmL/dHT/eHjyVVX//////f3/+fn9c3P6amr/7+//d3f9cXH90tL/e3v8b2/5Zmb+4+P9z8/+x8f7tLT8qan2dXX6a2v/trb6r6/9mJj5kZH/hYX/fX32YWH/+/v+9PT+5+f83Nz+2Nj81dX70dH7w8P/wMD8vb36urr5paX6oqL/nJz/lZX4jIz/goL8gYH2gID/9PT96+v/6Oj+3Nz/jo76jY33b2/0WlrDaPrDAAAAG3RSTlMAAu8V91H03qZK1tDKLvjw1Z415+DPXFYwDQvuwObfAAABqElEQVRYw+3Wx3LCMBSFYTsxPaT36yMRF2x6J703SM/7v0zCTCYMA0i2tOXf30+jjXSNRZOZiXTKojlZW9ldyfxmjkQd2Xb2QDSfsEgG2EvLgvMtkgFCwcyRFBAKCZIDQiEdARAKqQiAULCkQMMWCiQtsMfCoQpA32NhRwnw7HF7KgB5/X8gKwBEuYW/tsWAvFVTE6BowGPzQQt4YEBTByjjAo4OcI4OZ0UN4Ar3jhZQg8+0rjAAcKEDuGdASwegNvCpBQyAqhZQBY4/dIBTAO8awCNYBaioAxX4jTPghoiKz8X4QJejQ3UHOC9xgJXacYFrnHrkdhhGceClFw945rhrX7+BX3Kwcq3F0Y0FFCsAR6k17If1S4wquTGAXtMBnGo9DH6n3LB+f3N190XRgZoD4LYfjF/0xlFAkYGeDzC8esqPahknt8fsiVSBLliZo+YpA3QCoBqQOjD0/acGaQCFMCxo/0wLQAGwdBeMVDwgJV515aXFy7a8xBRgrlCMcqYxVT5JkUvuGzPKRBaSGWNm+Yi3WMkbczIzG+trJGxtfSNjGosm+gELyhrjp7nvuwAAAABJRU5ErkJggg==";
  var PDF = img$5;

var img$4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA0lBMVEUAAAD5iU/zcjz4e0j5iVD5iVD0cjz5iVD0dD/5ik/6ik/5iVD5h075ilD5iVD5iVD5iVD1eUH5ilD4iFL4iFD6iVD0ek7/hUn2f0j0dkD5iVD5iFD5iE/5iVD////ybDj82cr4hUz3hEv5pHv4sZX8yK70cT32fkb+9O///Pv93M/81sX8vp/5n3P5jFX2hVD1dkD97eb7s5H3pob7rIP3mHH2fEb+8On+7uj84tf+4tT70cH90bv7y7b6wqv6t5n6ror1kWr6lWP2i130f1H1fk1wSVcPAAAAHXRSTlMA9/AT9NPt39VPL/Ddy6iinldUS0k2FwrnzsnILRymKXMAAAFUSURBVFjD7dbXTsMwGIZhGxq6Fy2U9X8h6SDdu+wN939LcECwShrXQ0gg5T3LyZNftiWbJf1ov5TmFBM/ylSZvAOHZF24bqbBJGU5bQPcvV3J/zltB9ydeMEhBeBTOIxbP1IAZDOUVADZDGkVQDYDVwXi9oK25rtCaJgA1BHCsRHgu6KqCUDe5BvIaALC+KpgBoi4LUC/DSwCiIKbwUgXOMd6wcISAGbawLIT9jafAt2hLtAUX977NdAzAESvXeDFBvD6wJMNQA/AoxVwD8xsgNEVMLQBBkAwNgdGgy7QIk2g3w67uwTQ8+2Ocm9MNkDQWpE20G6FzZ8nPukDTT/MI5HZLvxLoA8MrYDl9HZsBXiTFcn78xdLAhgB3PaBkdYDChGgrAeUI0BWD8iySEXSqMii5VKkXCrHNlRTFlJ1trHcCSl1esbiqlWcPEnLO5U6S1rvA4IeKONiPRPpAAAAAElFTkSuQmCC";
  var PPT = img$4;

var img$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAsVBMVEUAAABP05dM2ZkvxoQjwXVO1JYow3pP05dO1JdN05lJ0qRP05dP05dP05cjwHVP0pdP05dP05dP05dO1JdO05hP05dP05gzxXxJ0JNAzIwoxHlP05cxx4JQ05gvxn9R0phO0ZZP05cZvG7////n+fCn5siO4Lo/yIZH0JI9y4pN0pVFz5BJzpA0yIQsxHzZ9OfK8d+77te06dCa48GG4LeD3bNw26pX1ZxT0pc8x4UjwHZ1L4o6AAAAIXRSTlMA7xQb8kDb1rsoCfn28vLl3MzGnpVXSBHu5N+nbmNiOScx+RCpAAAA+klEQVRYw+3Xx3LCQBBFUca2BMaYnHPPEEXO4f8/jKKgRAHi9SCtgLn7PlJpo+6Q6aZ8JvxPD4qV7Doz/psmVF9Ku4DmLUEcIOPf4PmCeED+PBYixAJQsIgHoJDVAKCQ0gCgkNAAoCBYYCDd4gU/AO0vgo0B/hVk1Q9AvbELlAGAcnrnigzAFw0KfL07MGt5NN1oA2vl2VIbcCbKo9ZWG6DRrnuqo1S7e27s+PiIR4DcDGAAA7wwsFJqEQgYtufDQAD1R85r/hc+FEgEXTBS9FQCr7p8Ebxs89Xgus+XjN4DTUHa/Vnw5OHnc+jo4gs38NkHiyUruZDpugPs7EiQKB5FNAAAAABJRU5ErkJggg==";
  var Txt = img$3;

var img$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA0lBMVEUAAADH2d3M2dmlxcyz0NDI3NzG2t7I2t3H2t3H2t3H2t3H2t3H2t3H2tzH2t6ox8/H2d3H293H2t3H2t3H292809nH297H2t7F292v09PR0ejG4+PC19y70tipx8+ryM/H293H2t2uy9PH2t2dwMn////C19q50tfg6+7L3eD+/v77/f34+/vi7O/F2d3p8fLm7/DU4+bJ297A1tq81NisydHZ5urX5ejS4uXO3+G30Na0z9WwzNPe6evb6OrQ4OTC19zE2dvr8vTy9/jt8/Wlxc0PB0u7AAAAI3RSTlMA7hTyG0Eo79X59vPw5dvbzMa9npVoV0g7EQsE7uTf2ranYgz1wi8AAAGZSURBVFjD7dfZUsIwGIZhXBBEATeQxT39WrqytSxtWdX7vyXLiJZl/NOkh/KetDnIk85kOpNkDu10f5u/YH9UeCy/caafXTMqTVHKdWp+9pLxAOXklFg/x3gALdwwLkAKWcYHSOEuAUAKVwkAUigmAEjhiAv0lVioywDsMxaepYC+ElchAELwfoGnhMB41B1vjh113UMSQO9YiLLasRHX4ANTE+sMex845gI2otqDQcdYPcWBKYBWGPp+6A2jV1sU0E1g5n+/+3PAmAkCrWh992fgdoG2IPAOuPFIM2H2hAAd+HC2P2gkCrQ2x0OgKwQ4xvaEgegXqMHc3Rx3AF0IYAt1Z1ONhRiwv6ksBTAAMJcHequ/YahKAxMLgK0xWaCNqG7AZIHJavlAY7JAzwKcwGHSwBjo9BmTB2bAkKUB+pbppAIWnqcKAETSuzCd9FIBNrBMBSwBKxWgA6NUgOuFWupd+D9AURBokAdNfjn6qMvvhT5s86uQx31+pSZ14eB3XiOvPPz5VerSxS9fo699ZIXSa7WZObTVFy2/YegYDeESAAAAAElFTkSuQmCC";
  var Unknown = img$2;

var img$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAvVBMVEUAAABAv/88sOZTt/RSt/RSt/RTt/Qyp9pTt/U2qd5Tt/VTt/VTt/RTt/Qzp9pIsuxTuPQ7rOJSuPVVtfRQvOQzqNozp9pTt/RStvNTtfVVufVTt/T///8po9P4/P79/v9XuvNNtfBTuPRPtfFDsOdhu+L2+/30+v1Js+37/f7r9/1xxPZrwvbu+P3m9fzJ6PtnwPVjvvVkveLg8vzM6vvW7vmMzuhrwORwwuNPtOFRtd8xp9rd8PhEr+hduuEk09JFAAAAG3RSTlMABBH2pM307NzQUUz58uzh1FQyMAnr6+BUNDN7Ic8NAAABVklEQVRYw+3Wa1OCQBSA4TWQEDMv2fWcVYkQb4WaWmr1/39WIU1EytkL00zN8H7bnTnPLp9YVvSjqtmoQUa1eqXJ6M7KQHXHeaVNHm+BCOAXR8T5FogBfpwtlEEG4KdZQhUkAOoOpgxA3cGWAag7WELglZMCCBvwr87bOgBsE6GiBQx4UpMACGFLXAHkcj+r04C4k7wAlH4Z6I171IYYCHEJqRYYKgEdxPSJXRzmAm4RuwXwb4FZuJjmAWaPiKOJLhDPR4IuMH1AHHYiQQ/YzT/7fcT7sQ4w2c27XixoACPEzpML4M0jQQOI5z9y/QBRB+jP3Xjh+YE6kMzHgiqwxMB3k6X3FuCLErBebTz4lrdZrZUAGIBgo/TXfywFoAVYeR8YthpwST91xZl7gKMGXJHPfXENtl/LAOmMa3agqrRgOOxgLcmvKN+wrBzTNgSH26bDitK9A95OFdpCpIaoAAAAAElFTkSuQmCC";
  var Word = img$1;

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABIFBMVEUAAAD/x1f/ylf/sD75pzP/x1f/x1f/x1f/x1b/x1f5qzf/x1f5pzP/x1f/x1f/x1f/xlb/xlb/yFf/yVn/xlb/sTv/z1X/v1X+wE/9vEr5rDj/x1j/x1b/x1f/x1j/yFf6sT78sD3/x1f////3nyv+8d391ZL+xVT9ukj6v3L7skD97NX93q/9473/1oT9v0//3pv//fn/7Mf70pz90Yz/0nn/yl7/xlX5rUH/+/P/9uj+7tf/4aX/25X6vW3/zmr+wE//+vL/79H+5b3/4KL+14/9xnL5tFT7uEz9vEv6r0H5qzr3oSz++PD96tD/68L94Lf/5bD+4a7+3af92aH7zpT+1If/1H78x3f/0HH7v2j8xGX8wFj+wFD7tkT4pjKr+mR5AAAAInRSTlMA7hQW7/vkzULy07vx6N2UYEs8LCMNCgbu3NzDsaeXZmZUZSA2qQAAAaFJREFUWMPt1mdTwjAYwPGiMgSRJeAeKXsIKIJskA3uvf3+38Kk9pqjI7SPd96p/F/n+SUv0ku5WbJsLqvTpJFzzb7HsVtxIFLtAHfRQPJioZDdz5r3mpBQmCfV1IDQwjxjfzJPgYgKwBYcaCpAWtISvEgHwDqDS1pYEYC8GsA6g1Va+HyIu3vpVKvVTkMGMM5gkRZGY7jhNU9qywCGYEKTpQQgjWjNEBX8EAB9UMEOAjKnVNiFAKg5loh1BlA4wj31zpO4Rxkbfct8tcoATnjSfYLURFoFtAB6E9nN/WngksznenDg/Rg37rZKpVIrCwAmLlL7u0D6NwO3ApCCA4N6PB6vD+AAKkZxCAbQYEBjX+yhAAJqvFS5AAEqPK0L+xppkf8LlJOkHBhIjxKkfg4K5MVXJAwD6BgYuBHfuDMYUOFzV1kSfuPyECDPS5VfIcCwHxerj4oQABWjYngcBNB+FLAYBALKH01DLXLyto0BDgVgMwbscIo2kIGWg0rAt4h0Z7ZxKnl0C2Y3p5rPqvP8Nk4rz5bFPGVzy6Y7yM2a6BNBtFyk8x10RAAAAABJRU5ErkJggg==";
  var Zip = img;

var fileTypeIcon = {
    'audio': Audio,
    'video': Video,
    'gif': Gif,
    'pdf': PDF,
    'ppt': PPT,
    'txt': Txt,
    'unknown': Unknown,
    'word': Word,
    'zip': Zip,
    'excel': Excel,
};
// 生成 jsx 二维矩阵
var generateMatrix = function (files, col, showAdd) {
    files.forEach(function (v) {
        v.fileType = checkFileType(v.url, 'type');
        v.suffix = getFileSuffix(v.url);
    });
    var matrix = [];
    var length = showAdd ? files.length + 1 : files.length;
    var row = Math.ceil(length / col);
    for (var i = 0; i < row; i++) {
        if (i === row - 1) {
            // 最后一行数据加上添加按钮
            var lastArr = files.slice(i * col);
            if (lastArr.length < col) {
                if (showAdd) {
                    lastArr.push({ type: 'btn' });
                }
                // 填补剩下的空列
                for (var j = lastArr.length; j < col; j++) {
                    lastArr.push({ type: 'blank' });
                }
            }
            matrix.push(lastArr);
        }
        else {
            matrix.push(files.slice(i * col, (i + 1) * col));
        }
    }
    return matrix;
};
var FilePicker = /** @class */ (function (_super) {
    __extends(FilePicker, _super);
    function FilePicker(props) {
        var _this = _super.call(this, props) || this;
        /**
         * @desc 控制ActionSheet显示隐藏
         * @param status
         */
        _this.setIsOpened = function (status) {
            _this.setState({
                isOpened: status
            });
        };
        /**
         * @desc 选择文件
         * @param type
         */
        _this.chooseFile = function (type) {
            var _a = _this.props, multiple = _a.multiple, count = _a.count, sizeType = _a.sizeType, _b = _a.size, size = _b === void 0 ? 50 : _b;
            var maxSize = size * 1024 * 1024;
            var filePathName = IS_ALIPAY ? 'apFilePaths' : 'tempFiles';
            var params = {};
            var _chooseFile = Taro.chooseImage;
            _this.setState({
                isOpened: false
            });
            /* 是否多选，默认最大99 */
            if (multiple) {
                params.count = 99;
            }
            /* 是否指定单次选择最大文件数 */
            if (count) {
                params.count = count;
            }
            /**
             * 所选图片尺寸
             * @see https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html#%E5%8F%82%E6%95%B0
             */
            if (sizeType) {
                params.sizeType = sizeType;
            }
            if (type === 'chat') {
                Taro.showToast({
                    title: "\u6700\u591A\u9009\u62E9" + count + "\u4E2A\u6587\u4EF6",
                    icon: 'none'
                });
                _chooseFile = Taro.chooseMessageFile;
            }
            if (type === 'album' || type === 'camera') {
                if (type === 'album') {
                    Taro.showToast({
                        title: "\u6700\u591A\u9009\u62E9" + count + "\u5F20\u7167\u7247",
                        icon: 'none'
                    });
                }
                params.sourceType = [type];
                _chooseFile = Taro.chooseImage;
            }
            _chooseFile(params).then(function (res) {
                var newFiles = [];
                var fileIsTooLarge = [];
                Array.isArray(res[filePathName]) && res[filePathName].forEach(function (v) {
                    if (v.size <= maxSize) {
                        var fileObj = {
                            path: v.path,
                            size: v.size,
                            name: v.path.substr(v.path.lastIndexOf('/') + 1)
                        };
                        if (IS_WEB) {
                            fileObj.originalFileObj = v.originalFileObj;
                        }
                        newFiles.push(fileObj);
                    }
                    else {
                        fileIsTooLarge.length++;
                    }
                });
                if (fileIsTooLarge.length > 0) {
                    Taro.showToast({
                        title: fileIsTooLarge.length > 1 ? '部分文件大小超过50MB，无法上传' : '文件大小超过50MB，无法上传',
                        icon: 'none'
                    });
                }
                _this.props.onAdd && _this.props.onAdd(newFiles);
            }).catch(function (err) {
                _this.props.onFail && _this.props.onFail(err);
            });
        };
        /**
         * @desc 点击文件
         * @param idx - 文件下标
         * @param file
         */
        _this.handleFileClick = function (idx, file) {
            _this.props.onFileClick && _this.props.onFileClick(idx, file);
        };
        /**
         * @desc 移除文件
         * @param idx - files数组中当前文件下标
         * @param event
         */
        _this.handleRemove = function (idx, event) {
            var files = _this.props.files;
            event.stopPropagation();
            event.preventDefault();
            if (IS_WEB) {
                window.URL.revokeObjectURL(files[idx].url);
            }
            _this.props.onRemove && _this.props.onRemove(idx);
        };
        _this.state = {
            isOpened: false
        };
        return _this;
    }
    FilePicker.prototype.render = function () {
        var _this = this;
        var _a = this.props, files = _a.files, className = _a.className, _b = _a.sourceType, sourceType = _b === void 0 ? ['chat', 'camera', 'album'] : _b, _c = _a.action, action = _c === void 0 ? '' : _c, _d = _a.imageMode, imageMode = _d === void 0 ? 'aspectFill' : _d, _e = _a.length, length = _e === void 0 ? 4 : _e, _f = _a.showAdd, showAdd = _f === void 0 ? false : _f, _g = _a.showName, showName = _g === void 0 ? false : _g, _h = _a.spacing, spacing = _h === void 0 ? 16 : _h, _j = _a.showRemove, showRemove = _j === void 0 ? false : _j;
        var isOpened = this.state.isOpened;
        var title = '';
        if (IS_WEAPP) {
            title = '*注意：文件选取微信聊天记录中的文件';
        }
        var rowLength = length <= 0 ? 1 : length;
        // 行数
        var matrix = generateMatrix(files, rowLength, showAdd);
        var rootClass = classnames('ag-file-picker', className);
        return (React.createElement(View, { className: rootClass }, matrix.length > 0 || showAdd ?
            React.createElement(Fragment$1, null,
                Array.isArray(matrix) && matrix.map(function (row, index) { return (React.createElement(View, { className: "ag-file-picker__flex-box " + (showName ? 'p-t-20' : ''), style: { marginBottom: showName ? spacing * 2 + "px" : spacing + "px" }, key: index + 1 }, row.map(function (v, i) { return (v.url ? (React.createElement(View, { style: { marginLeft: i === 0 ? '' : spacing / 2 + "px", marginRight: i < length - 1 ? spacing / 2 + "px" : '' }, className: 'ag-file-picker__flex-item', onClick: function () { return _this.handleFileClick((index * length) + i, v); }, key: (index * length) + i },
                    React.createElement(View, { className: 'ag-file-picker__item' },
                        showRemove && (React.createElement(View, { className: 'ag-file-picker__remove-btn', onClick: function (e) { return _this.handleRemove((index * length) + i, e); } },
                            React.createElement(Image, { className: 'icon-remove', src: Delete }))),
                        v.fileType === 'img' ?
                            React.createElement(Image, { className: 'ag-file-picker__preview-img', mode: imageMode, src: action + v.url })
                            :
                                React.createElement(Image, { className: 'icon-file-type', src: fileTypeIcon[v.fileType] })))) : (React.createElement(View, { style: { marginLeft: i > 0 && i < length - 1 ? spacing + "px" : '', marginRight: i > 0 && i < length - 1 ? spacing + "px" : '' }, className: 'ag-file-picker__flex-item', key: "empty_" + index * length + i }, v.type === 'btn' && (React.createElement(View, { className: 'ag-file-picker__item ag-file-picker__choose-btn', onClick: function () { return _this.setIsOpened(true); } },
                    React.createElement(Icon, { value: 'add', size: '40', color: 'white' })))))); }))); }),
                React.createElement(ActionSheet, { isOpened: isOpened, title: title, cancelText: '\u53D6\u6D88', onClose: function () { return _this.setIsOpened(false); } },
                    (IS_WEAPP && sourceType.indexOf('chat') > -1) && React.createElement(ActionSheetItem, { onClick: function () { return _this.chooseFile('chat'); } }, "\u6587\u4EF6"),
                    sourceType.indexOf('camera') > -1 && React.createElement(ActionSheetItem, { onClick: function () { return _this.chooseFile('camera'); } }, "\u62CD\u7167"),
                    sourceType.indexOf('album') > -1 && React.createElement(ActionSheetItem, { onClick: function () { return _this.chooseFile('album'); } }, "\u4ECE\u76F8\u518C\u9009\u53D6")))
            :
                React.createElement(View, { className: 'no-data' }, "\u6682\u65E0")));
    };
    return FilePicker;
}(React.Component));
FilePicker.defaultProps = {
    files: [],
    action: '',
    imageMode: 'aspectFill',
    length: 4,
    multiple: false,
    showAdd: false,
    showName: false,
    spacing: 16,
    nameLength: 8,
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
    count: 50,
    size: 50,
    showRemove: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onAdd: function () { },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onRemove: function () { },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onFileClick: function () { },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onFail: function () { }
};
FilePicker.propTypes = {
    /**
     * 文件数组对象，元素为对象，包含url（必选））
     */
    files: propTypes.array,
    /**
     * OSS服务地址
     */
    action: propTypes.string,
    /**
     * 图片显示mode，对应 Image 标签的 mode 属性
     */
    imageMode: propTypes.oneOf([
        'scaleToFill',
        'aspectFit',
        'aspectFill',
        'widthFix',
        'top',
        'bottom',
        'center',
        'left',
        'right',
        'top left',
        'top right',
        'bottom left',
        'bottom right'
    ]),
    /**
     * 是否显示文件名称
     * @default false
     */
    showName: propTypes.bool,
    /**
     * 是否显示添加图片按钮
     * @default true
     */
    showAdd: propTypes.bool,
    /**
     * 是否支持多选
     * @default false
     */
    multiple: propTypes.bool,
    /**
     * 单行的图片数量，不能为 0 或负数
     * @default 4
     */
    length: propTypes.number,
    /**
     * 最多可以选择的图片张数
     * @since v2.0.2
     */
    count: propTypes.number,
    /**
     * 所选的图片的尺寸
     * @since v2.0.2
     */
    sizeType: propTypes.array,
    /**
     * 选择图片的来源，可选类型，支持聊天记录选择文件，相册选择，拍照上传
     * @default ['chat', ' camera', 'album']
     * @since v2.0.2
     */
    sourceType: propTypes.array,
    /**
     * 是否显示删除按钮
     */
    showRemove: propTypes.bool,
    /**
     * 最大上传文件，单位: MB
     */
    size: propTypes.number,
    /**
     * 列间距
     */
    spacing: propTypes.number,
    /**
     * files 值发生变化触发的回调函数
     */
    onAdd: propTypes.func,
    /**
     * 移除文件
     */
    onRemove: propTypes.func,
    /**
     * 点击文件触发回调
     */
    onFileClick: propTypes.func,
    /**
     * 选择失败触发的回调
     * @param msg
     */
    onFail: propTypes.func,
};

// config
// const debug = false// 是否启用调试，默认值为false。true：打印过程日志；false：关闭过程日志
var outputFileType = 'jpg'; // 目标文件的类型。默认值为jpg，jpg：输出jpg格式图片；png：输出png格式图片
var quality = 1; // 图片的质量。默认值为1，即最高质量。目前仅对 jpg 有效。取值范围为 (0, 1]，不在范围内时当作 1.0 处理。
var aspectRatio = 0; // 目标图片的宽高比，默认null，即不限制剪裁宽高比。aspectRatio需大于0
//
// let layoutLeft = 0
// let layoutTop = 0
var layoutWidth = 0;
var layoutHeight = 0;
var stageLeft = 0;
var stageTop = 0;
var stageWidth = 0;
var stageHeight = 0;
var imageWidth = 0;
var imageHeight = 0;
var pixelRatio = 1; // todo设备像素密度//暂不使用//
var imageStageRatio = 1; // 图片实际尺寸与剪裁舞台大小的比值，用于尺寸换算。
var minBoxWidth = 0;
var minBoxHeight = 0;
// initial
var minBoxWidthRatio = 0.15; // 最小剪裁尺寸与原图尺寸的比率，默认0.15，即宽度最小剪裁到原图的0.15宽。
var minBoxHeightRatio = 0.15; // 同minBoxWidthRatio，当设置aspectRatio时，minBoxHeight值设置无效。minBoxHeight值由minBoxWidth 和 aspectRatio自动计算得到。
var initialBoxWidthRatio = 0.6; // 剪裁框初始大小比率。默认值0.6，即剪裁框默认宽度为图片宽度的0.6倍。
var initialBoxHeightRatio = 0.6; // 同initialBoxWidthRatio，当设置aspectRatio时，initialBoxHeightRatio值设置无效。initialBoxHeightRatio值由initialBoxWidthRatio 和 aspectRatio自动计算得到。
//
var touchStartBoxLeft = 0;
var touchStartBoxTop = 0;
var touchStartBoxWidth = 0;
var touchStartBoxHeight = 0;
var touchStartX = 0;
var touchStartY = 0;
var Cropper = /** @class */ (function (_super) {
    __extends(Cropper, _super);
    function Cropper(props) {
        var _this = _super.call(this, props) || this;
        _this.show = function () {
            _this.setState({
                showCropper: true
            });
        };
        _this.hide = function () {
            _this.setState({
                showCropper: false
            });
        };
        _this.init = function (opts) {
            var imagePath = opts.imagePath;
            _this.setState({
                imagePath: imagePath
            });
            // if (opts.debug) {
            //   debug = opts.debug;
            // }
            if (opts.minBoxWidthRatio) {
                minBoxWidthRatio = opts.minBoxWidthRatio;
            }
            if (opts.minBoxHeightRatio) {
                minBoxHeightRatio = opts.minBoxHeightRatio;
            }
            if (opts.initialBoxWidthRatio) {
                initialBoxWidthRatio = opts.initialBoxWidthRatio;
            }
            if (opts.initialBoxHeightRatio) {
                initialBoxHeightRatio = opts.initialBoxHeightRatio;
            }
            if (opts.aspectRatio) {
                aspectRatio = opts.aspectRatio;
            }
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var context = _this;
            Taro.createSelectorQuery().select('.ag-cropper').boundingClientRect(function (rect) {
                // fnLog(rect);
                // layoutLeft = rect.left
                // layoutTop = rect.top
                layoutWidth = rect.width;
                layoutHeight = rect.height;
                Taro.getImageInfo({
                    src: imagePath
                }).then(function (imageInfo) {
                    // eslint-disable-next-line no-console
                    console.log('imageInfo', imageInfo);
                    /* 获取图片的原始宽高 */
                    imageWidth = imageInfo.width;
                    imageHeight = imageInfo.height;
                    /* imageWH 图片的宽高比，layoutWH 容器的宽高比 */
                    var imageWH = imageWidth / imageHeight;
                    var layoutWH = layoutWidth / layoutHeight;
                    /* 判断裁剪框的宽高 */
                    if (imageWH >= layoutWH) {
                        stageWidth = layoutWidth;
                        stageHeight = stageWidth / imageWH;
                        imageStageRatio = imageHeight / stageHeight;
                    }
                    else {
                        stageHeight = layoutHeight;
                        stageWidth = layoutHeight * imageWH;
                        imageStageRatio = imageWidth / stageWidth;
                    }
                    stageLeft = (layoutWidth - stageWidth) / 2;
                    stageTop = (layoutHeight - stageHeight) / 2;
                    minBoxWidth = stageWidth * minBoxWidthRatio;
                    minBoxHeight = stageHeight * minBoxHeightRatio;
                    var boxWidth = stageWidth * initialBoxWidthRatio;
                    var boxHeight = stageHeight * initialBoxHeightRatio;
                    if (aspectRatio) {
                        boxHeight = boxWidth / aspectRatio;
                    }
                    if (boxHeight > stageHeight) {
                        boxHeight = stageHeight;
                        boxWidth = boxHeight * aspectRatio;
                    }
                    var boxLeft = (stageWidth - boxWidth) / 2;
                    var boxTop = (stageHeight - boxHeight) / 2;
                    context.setState({
                        imagePath: imageInfo.path,
                        canvasWidth: imageWidth * pixelRatio,
                        canvasHeight: imageHeight * pixelRatio,
                        stageLeft: stageLeft,
                        stageTop: stageTop,
                        stageWidth: stageWidth,
                        stageHeight: stageHeight,
                        boxWidth: boxWidth,
                        boxHeight: boxHeight,
                        boxLeft: boxLeft,
                        boxTop: boxTop
                    });
                }).catch(function (err) {
                    context.props.fail && context.props.fail(err);
                });
            }).exec();
        };
        /**
         * @desc 手指触摸开始
         * @param e
         */
        _this.onTouchStart = function (e) {
            var _a = _this.state, boxLeft = _a.boxLeft, boxTop = _a.boxTop, boxWidth = _a.boxWidth, boxHeight = _a.boxHeight;
            var touch = e.touches[0];
            var pageX = touch.pageX;
            var pageY = touch.pageY;
            touchStartX = pageX;
            touchStartY = pageY;
            touchStartBoxLeft = boxLeft;
            touchStartBoxTop = boxTop;
            touchStartBoxWidth = boxWidth;
            touchStartBoxHeight = boxHeight;
        };
        /**
         * @desc 手指触摸移动
         * @param e
         */
        _this.onTouchMove = function (e) {
            var targetId = e.target.id;
            var touch = e.touches[0];
            var pageX = touch.pageX;
            var pageY = touch.pageY;
            var offsetX = pageX - touchStartX;
            var offsetY = pageY - touchStartY;
            if (targetId === 'box') {
                var newBoxLeft = touchStartBoxLeft + offsetX;
                var newBoxTop = touchStartBoxTop + offsetY;
                if (newBoxLeft < 0) {
                    newBoxLeft = 0;
                }
                if (newBoxTop < 0) {
                    newBoxTop = 0;
                }
                if (newBoxLeft + touchStartBoxWidth > stageWidth) {
                    newBoxLeft = stageWidth - touchStartBoxWidth;
                }
                if (newBoxTop + touchStartBoxHeight > stageHeight) {
                    newBoxTop = stageHeight - touchStartBoxHeight;
                }
                _this.setState({
                    boxLeft: newBoxLeft,
                    boxTop: newBoxTop
                });
            }
            else if (targetId === 'lt') {
                if (aspectRatio) {
                    offsetY = offsetX / aspectRatio;
                }
                var newBoxLeft = touchStartBoxLeft + offsetX;
                var newBoxTop = touchStartBoxTop + offsetY;
                if (newBoxLeft < 0) {
                    newBoxLeft = 0;
                }
                if (newBoxTop < 0) {
                    newBoxTop = 0;
                }
                if ((touchStartBoxLeft + touchStartBoxWidth - newBoxLeft) < minBoxWidth) {
                    newBoxLeft = touchStartBoxLeft + touchStartBoxWidth - minBoxWidth;
                }
                if ((touchStartBoxTop + touchStartBoxHeight - newBoxTop) < minBoxHeight) {
                    newBoxTop = touchStartBoxTop + touchStartBoxHeight - minBoxHeight;
                }
                var newBoxWidth = touchStartBoxWidth - (newBoxLeft - touchStartBoxLeft);
                var newBoxHeight = touchStartBoxHeight - (newBoxTop - touchStartBoxTop);
                // 约束比例
                if (newBoxTop === 0 && aspectRatio && newBoxLeft !== 0) {
                    newBoxWidth = newBoxHeight * aspectRatio;
                    newBoxLeft = touchStartBoxWidth - newBoxWidth + touchStartBoxLeft;
                }
                if (newBoxLeft === 0 && aspectRatio) {
                    newBoxHeight = newBoxWidth / aspectRatio;
                    newBoxTop = touchStartBoxHeight - newBoxHeight + touchStartBoxTop;
                }
                if (newBoxWidth === minBoxWidth && aspectRatio) {
                    newBoxHeight = newBoxWidth / aspectRatio;
                    newBoxTop = touchStartBoxHeight - newBoxHeight + touchStartBoxTop;
                }
                _this.setState({
                    boxTop: newBoxTop,
                    boxLeft: newBoxLeft,
                    boxWidth: newBoxWidth,
                    boxHeight: newBoxHeight
                });
            }
            else if (targetId === 'rt') {
                if (aspectRatio) {
                    offsetY = -offsetX / aspectRatio;
                }
                var newBoxWidth = touchStartBoxWidth + offsetX;
                if (newBoxWidth < minBoxWidth) {
                    newBoxWidth = minBoxWidth;
                }
                if (touchStartBoxLeft + newBoxWidth > stageWidth) {
                    newBoxWidth = stageWidth - touchStartBoxLeft;
                }
                var newBoxTop = touchStartBoxTop + offsetY;
                if (newBoxTop < 0) {
                    newBoxTop = 0;
                }
                if ((touchStartBoxTop + touchStartBoxHeight - newBoxTop) < minBoxHeight) {
                    newBoxTop = touchStartBoxTop + touchStartBoxHeight - minBoxHeight;
                }
                var newBoxHeight = touchStartBoxHeight - (newBoxTop - touchStartBoxTop);
                // 约束比例
                if (newBoxTop === 0 && aspectRatio && newBoxWidth !== stageWidth - touchStartBoxLeft) {
                    newBoxWidth = newBoxHeight * aspectRatio;
                }
                if (newBoxWidth === stageWidth - touchStartBoxLeft && aspectRatio) {
                    newBoxHeight = newBoxWidth / aspectRatio;
                    newBoxTop = touchStartBoxHeight - newBoxHeight + touchStartBoxTop;
                }
                if (newBoxWidth === minBoxWidth && aspectRatio) {
                    newBoxHeight = newBoxWidth / aspectRatio;
                    newBoxTop = touchStartBoxHeight - newBoxHeight + touchStartBoxTop;
                }
                _this.setState({
                    boxTop: newBoxTop,
                    boxHeight: newBoxHeight,
                    boxWidth: newBoxWidth
                });
            }
            else if (targetId === 'lb') {
                if (aspectRatio) {
                    offsetY = -offsetX / aspectRatio;
                }
                var newBoxLeft = touchStartBoxLeft + offsetX;
                if (newBoxLeft < 0) {
                    newBoxLeft = 0;
                }
                if ((touchStartBoxLeft + touchStartBoxWidth - newBoxLeft) < minBoxWidth) {
                    newBoxLeft = touchStartBoxLeft + touchStartBoxWidth - minBoxWidth;
                }
                var newBoxWidth = touchStartBoxWidth - (newBoxLeft - touchStartBoxLeft);
                var newBoxHeight = touchStartBoxHeight + offsetY;
                if (newBoxHeight < minBoxHeight) {
                    newBoxHeight = minBoxHeight;
                }
                if (touchStartBoxTop + newBoxHeight > stageHeight) {
                    newBoxHeight = stageHeight - touchStartBoxTop;
                }
                // 约束比例
                if (newBoxHeight === stageHeight - touchStartBoxTop && aspectRatio && newBoxLeft !== 0) {
                    newBoxWidth = newBoxHeight * aspectRatio;
                    newBoxLeft = touchStartBoxWidth - newBoxWidth + touchStartBoxLeft;
                }
                if (newBoxLeft === 0 && aspectRatio) {
                    newBoxHeight = newBoxWidth / aspectRatio;
                }
                if (newBoxWidth === minBoxWidth && aspectRatio) {
                    newBoxHeight = newBoxWidth / aspectRatio;
                }
                _this.setState({
                    boxLeft: newBoxLeft,
                    boxWidth: newBoxWidth,
                    boxHeight: newBoxHeight
                });
            }
            else if (targetId === 'rb') {
                if (aspectRatio) {
                    offsetY = offsetX / aspectRatio;
                }
                var newBoxWidth = touchStartBoxWidth + offsetX;
                if (newBoxWidth < minBoxWidth) {
                    newBoxWidth = minBoxWidth;
                }
                if (touchStartBoxLeft + newBoxWidth > stageWidth) {
                    newBoxWidth = stageWidth - touchStartBoxLeft;
                }
                var newBoxHeight = touchStartBoxHeight + offsetY;
                if (newBoxHeight < minBoxHeight) {
                    newBoxHeight = minBoxHeight;
                }
                if (touchStartBoxTop + newBoxHeight > stageHeight) {
                    newBoxHeight = stageHeight - touchStartBoxTop;
                }
                // 约束比例
                if (newBoxHeight === stageHeight - touchStartBoxTop && aspectRatio && newBoxWidth !== stageWidth - touchStartBoxLeft) {
                    newBoxWidth = newBoxHeight * aspectRatio;
                }
                if (newBoxWidth === stageWidth - touchStartBoxLeft && aspectRatio) {
                    newBoxHeight = newBoxWidth / aspectRatio;
                }
                if (newBoxWidth === minBoxWidth && aspectRatio) {
                    newBoxHeight = newBoxWidth / aspectRatio;
                }
                _this.setState({
                    boxWidth: newBoxWidth,
                    boxHeight: newBoxHeight
                });
            }
        };
        _this.onTouchEnd = function () {
            // fnLog('end')
        };
        _this.onTouchCancel = function () {
            // fnLog('cancel')
        };
        /**
         * @desc 确认剪裁
         */
        _this.handlerCrop = function () {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var context = _this;
            var imagePath = _this.state.imagePath;
            var canvasContext = Taro.createCanvasContext('cropper-canvas');
            var _a = _this.state, boxLeft = _a.boxLeft, boxTop = _a.boxTop, boxWidth = _a.boxWidth, boxHeight = _a.boxHeight;
            var sx = Math.ceil(boxLeft * imageStageRatio);
            var sy = Math.ceil(boxTop * imageStageRatio);
            var sWidth = Math.ceil(boxWidth * imageStageRatio);
            var sHeight = Math.ceil(boxHeight * imageStageRatio);
            var dx = 0;
            var dy = 0;
            var dWidth = Math.ceil(sWidth * pixelRatio);
            var dHeight = Math.ceil(sHeight * pixelRatio);
            canvasContext.drawImage(imagePath, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            canvasContext.draw(false, function () {
                Taro.canvasToTempFilePath({
                    x: dx,
                    y: dy,
                    width: dWidth,
                    height: dHeight,
                    destWidth: sWidth,
                    destHeight: sHeight,
                    canvasId: 'cropper-canvas',
                    fileType: outputFileType,
                    quality: quality
                }).then(function (res) {
                    context.props.success && context.props.success(res);
                }).catch(function (err) {
                    console.error(err);
                });
            });
        };
        /**
         * @desc 取消剪裁
         */
        _this.handlerCancel = function () {
            _this.hide();
            _this.props.cancel && _this.props.cancel();
        };
        _this.state = {
            showCropper: false,
            imagePath: '',
            stageLeft: 0,
            stageTop: 0,
            stageWidth: 0,
            stageHeight: 0,
            boxWidth: 0,
            boxHeight: 0,
            boxLeft: 0,
            boxTop: 0,
            canvasWidth: 0,
            canvasHeight: 0
        };
        return _this;
    }
    Cropper.prototype.render = function () {
        var _a = this.state, imagePath = _a.imagePath, showCropper = _a.showCropper, stageWidth = _a.stageWidth, stageHeight = _a.stageHeight, stageLeft = _a.stageLeft, stageTop = _a.stageTop, boxWidth = _a.boxWidth, boxLeft = _a.boxLeft, boxTop = _a.boxTop, canvasHeight = _a.canvasHeight, canvasWidth = _a.canvasWidth;
        var className = this.props.className;
        var rootStyle = { zIndex: showCropper ? 99 : -99, opacity: showCropper ? '1' : '0' };
        var rootClass = classnames('ag-cropper', className);
        return (React.createElement(View, { className: rootClass, style: rootStyle },
            React.createElement(Image, { id: 'image', className: 'image', src: imagePath, mode: 'aspectFit' }),
            React.createElement(View, { className: 'stage', style: { width: stageWidth + "px", height: stageHeight + "px", left: stageLeft + "px", top: "" + stageTop }, onTouchStart: this.onTouchStart, onTouchMove: this.onTouchMove, onTouchEnd: this.onTouchEnd, onTouchCancel: this.onTouchCancel },
                React.createElement(View, { id: 'box', className: 'box', style: { width: boxWidth + "px", height: boxWidth + "px", left: boxLeft + "px", top: boxTop + "px" } },
                    React.createElement(View, { id: 'lt', className: 'lt' }),
                    React.createElement(View, { id: 'lb', className: 'lb' }),
                    React.createElement(View, { id: 'rt', className: 'rt' }),
                    React.createElement(View, { id: 'rb', className: 'rb' }),
                    React.createElement(View, { className: 'line-v', style: 'left:33.3%;' }),
                    React.createElement(View, { className: 'line-v', style: 'left:66.6%;' }),
                    React.createElement(View, { className: 'line-h', style: 'top:33.3%;' }),
                    React.createElement(View, { className: 'line-h', style: 'top:66.6%;' }))),
            React.createElement(Canvas, { canvasId: 'cropper-canvas', style: { height: canvasHeight + "px", width: canvasWidth + "px", position: 'fixed', left: '5000rpx' } }),
            React.createElement(View, { className: 'bar' },
                React.createElement(View, { className: 'btn btn-cancel ripple', onClick: this.handlerCancel }, "\u53D6\u6D88"),
                React.createElement(View, { className: 'btn btn-submit ripple', onClick: this.handlerCrop }, "\u786E\u5B9A"))));
    };
    return Cropper;
}(React.Component));

var ImageCropper = /** @class */ (function (_super) {
    __extends(ImageCropper, _super);
    function ImageCropper(props) {
        var _this = _super.call(this, props) || this;
        /* 系统信息 */
        _this.systemInfo = Taro.getSystemInfoSync();
        /* 是否结束触摸 */
        _this.endTouch = true;
        /* 鼠标和图片中心的相对位置 */
        _this.touchImageRelative = [];
        /* 双指触摸时斜边长度 */
        _this.hypotenuseLength = 0;
        /* canvas 是否在屏幕可视范围外 */
        _this.canvasOverflow = true;
        /* setCenter timer */
        _this.setCenterTimer = null;
        _this.localPath = '';
        /**
         * @desc 初始化
         * @private
         */
        _this.init = function (imagePath) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({
                            imagePath: imagePath
                        });
                        return [4 /*yield*/, this.computeCutBoxSize()];
                    case 1:
                        _a.sent();
                        imagePath && this.initImageSize(imagePath);
                        this.initCanvas();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * @desc 初始化图片size
         * @param src
         */
        _this.initImageSize = function (src) {
            var _a = _this.systemInfo, windowWidth = _a.windowWidth, windowHeight = _a.windowHeight;
            var _b = _this.state, cutBoxWidth = _b.cutBoxWidth, scale = _b.scale, imagePath = _b.imagePath;
            Taro.getImageInfo({
                src: src || imagePath
            }).then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                var width, height, minScale;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            /* 图片高度/图片宽度 = 可视区域高度/可视区域宽度 */
                            /* 可视区域宽度 = 可视区域高度 * 图片宽度 / 图片高度 */
                            /* width = windowHeight * res.width / res.height */
                            if (res.height > res.width) {
                                width = windowHeight * res.width / res.height;
                                height = windowHeight;
                                minScale = cutBoxWidth / width;
                            }
                            else {
                                width = windowWidth;
                                height = windowWidth * res.height / res.width;
                                minScale = cutBoxWidth / height;
                            }
                            this.localPath = res.path;
                            return [4 /*yield*/, this.setState({
                                    originalImageWidth: width,
                                    originalImageHeight: height,
                                    imageWidth: width * scale,
                                    imageHeight: height * scale,
                                    canvasHeight: height,
                                    canvasWidth: width,
                                    minScale: minScale
                                })];
                        case 1:
                            _a.sent();
                            this.setCenter();
                            return [2 /*return*/];
                    }
                });
            }); });
        };
        /**
         * @desc 初始化canvas
         */
        _this.initCanvas = function () {
            if (!_this.canvasContext)
                _this.canvasContext = Taro.createCanvasContext(_this.state.canvasId, _this);
        };
        /**
         * @desc 居中
         */
        _this.setCenter = function () {
            var _a = _this.systemInfo, windowWidth = _a.windowWidth, windowHeight = _a.windowHeight;
            var _b = _this.state, imageWidth = _b.imageWidth, imageHeight = _b.imageHeight;
            _this.setState({
                imageTop: (windowHeight - imageHeight) / 2,
                imageLeft: (windowWidth - imageWidth) / 2,
            });
        };
        /**
         * @desc 重置图片位置和大小
         */
        _this.refresh = function () {
            var _a = _this.state, originalImageWidth = _a.originalImageWidth, originalImageHeight = _a.originalImageHeight;
            _this.setState({
                imageWidth: originalImageWidth,
                imageHeight: originalImageHeight,
                scale: 1
            }, function () {
                _this.setCenter();
            });
        };
        /**
         * @desc 预览剪裁的图片
         */
        _this.previewImage = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.draw()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.generateImage()];
                    case 2:
                        _a.sent();
                        Taro.previewImage({
                            current: this.state.canvasImage,
                            urls: [this.state.canvasImage]
                        }).then(function (res) {
                        }).catch(function (err) {
                            console.log(err);
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * @desc 选择本地图片剪裁
         */
        _this.chooseImage = function () {
            Taro.chooseImage({
                count: 1,
                sizeType: ['original', 'compressed'],
                sourceType: ['album', 'camera']
            }).then(function (res) {
                console.log(res);
                _this.setState({
                    imagePath: res.tempFilePaths[0]
                }, function () {
                    _this.initImageSize(res.tempFilePaths[0]);
                });
            });
        };
        /**
         * @desc 渲染canvas
         * @private
         */
        _this.draw = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                /* 计算缩放后的图片宽高差 */
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var _a = _this.state, scale = _a.scale, imageLeft = _a.imageLeft, imageTop = _a.imageTop, imageWidth = _a.imageWidth, imageHeight = _a.imageHeight, cutBoxLeft = _a.cutBoxLeft, cutBoxTop = _a.cutBoxTop;
                        var differenceWidth = imageWidth * scale - imageWidth;
                        var differenceHeight = imageHeight * scale - imageHeight;
                        var xPos = imageLeft - differenceWidth / 2 - cutBoxLeft;
                        var yPos = imageTop - differenceHeight / 2 - cutBoxTop;
                        _this.canvasContext.drawImage(_this.localPath, xPos, yPos, imageWidth * scale, imageHeight * scale);
                        // @ts-ignore
                        _this.canvasContext.draw(false, setTimeout(function () {
                            resolve(true);
                        }, 500));
                    })];
            });
        }); };
        /**
         * @desc canvas生成图片
         */
        _this.generateImage = function (success) {
            if (success === void 0) { success = false; }
            return __awaiter(_this, void 0, void 0, function () {
                var _a, cutBoxWidth, cutBoxHeight, canvasId, pixelRatio;
                var _this = this;
                return __generator(this, function (_b) {
                    _a = this.state, cutBoxWidth = _a.cutBoxWidth, cutBoxHeight = _a.cutBoxHeight, canvasId = _a.canvasId;
                    pixelRatio = this.systemInfo.pixelRatio;
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            Taro.canvasToTempFilePath({
                                x: 0,
                                y: 0,
                                width: cutBoxWidth,
                                height: cutBoxHeight,
                                destWidth: cutBoxWidth * pixelRatio,
                                destHeight: cutBoxHeight * pixelRatio,
                                canvasId: canvasId
                            }).then(function (res) {
                                console.log(res.tempFilePath);
                                if (success) {
                                    _this.props.success && _this.props.success(res.tempFilePath);
                                }
                                _this.setState({
                                    canvasImage: res.tempFilePath
                                }, function () {
                                    resolve(res);
                                });
                            }).catch(function (err) {
                                reject(err);
                            });
                        })];
                });
            });
        };
        /**
         * @desc 计算裁剪框的宽高
         */
        _this.computeCutBoxSize = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, windowWidth, windowHeight, size, width;
            var _this = this;
            return __generator(this, function (_b) {
                _a = this.systemInfo, windowWidth = _a.windowWidth, windowHeight = _a.windowHeight;
                size = this.props.size;
                width = 0;
                if (typeof size === 'string' && size.indexOf('%')) {
                    width = windowWidth * (Number(size.replace('%', '')) / 100);
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.setState({
                            cutBoxWidth: width,
                            cutBoxHeight: width,
                            cutBoxTop: (windowHeight - width) / 2,
                            cutBoxBottom: (windowHeight - width) / 2,
                            cutBoxLeft: (windowWidth - width) / 2,
                            cutBoxRight: (windowWidth - width) / 2
                        }, function () {
                            resolve(null);
                        });
                    })];
            });
        }); };
        /**
         * @desc 图片触摸事件开始监听
         * @param e
         */
        _this.imageOnTouchStart = function (e) {
            _this.endTouch = false;
            var _a = _this.state, imageWidth = _a.imageWidth, imageHeight = _a.imageHeight, scale = _a.scale;
            if (e.touches.length === 1) {
                /* 单指拖动 */
                var differenceWidth = imageWidth * scale - imageWidth;
                var differenceHeight = imageHeight * scale - imageHeight;
                _this.touchImageRelative[0] = {
                    x: e.touches[0].clientX - _this.state.imageLeft + differenceWidth / 2,
                    y: e.touches[0].clientY - _this.state.imageTop + differenceHeight / 2,
                };
            }
            else {
                /* 双指放大 */
                /* 计算双指的 x y 轴坐标差 */
                var width = Math.abs(e.touches[0].clientX - e.touches[1].clientX);
                var height = Math.abs(e.touches[0].clientY - e.touches[1].clientY);
                _this.touchImageRelative = [
                    {
                        x: e.touches[0].clientX - _this.state.imageLeft,
                        y: e.touches[0].clientY - _this.state.imageTop
                    },
                    {
                        x: e.touches[1].clientX - _this.state.imageLeft,
                        y: e.touches[1].clientY - _this.state.imageTop
                    }
                ];
                _this.hypotenuseLength = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
            }
            !_this.canvasOverflow && _this.draw();
        };
        /**
         * @desc 图片触摸移动事件监听
         * @param e
         */
        _this.imageOnTouchMove = function (e) {
            console.log('imageOnTouchMove');
            if (_this.endTouch)
                return;
            var minScale = _this.state.minScale;
            if (e.touches.length === 1) {
                /* 单指拖动 */
                var top_1 = 0;
                var left = 0;
                top_1 = e.touches[0].clientY - _this.touchImageRelative[0].y;
                left = e.touches[0].clientX - _this.touchImageRelative[0].x;
                _this.imageEdgeDetection(top_1, left);
            }
            else {
                /* 双指缩放 */
                var width = (Math.abs(e.touches[0].clientX - e.touches[1].clientX));
                var height = (Math.abs(e.touches[0].clientY - e.touches[1].clientY));
                var hypotenuse = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
                var scale = _this.state.scale * ((hypotenuse - 2) / _this.hypotenuseLength);
                scale = scale < minScale ? minScale : scale;
                _this.setState({
                    scale: scale
                });
            }
        };
        /**
         * @desc 图片触摸事件结束监听
         */
        _this.imageOnTouchEnd = function () {
            _this.endTouch = true;
            _this.moveStop();
        };
        /**
         * @desc 图片边缘检测
         * @param top - 手指与图片的垂直移动距离
         * @param left - 手指与图片的水平移动距离
         */
        _this.imageEdgeDetection = function (top, left) {
            var _a = _this.state, cutBoxTop = _a.cutBoxTop, cutBoxLeft = _a.cutBoxLeft, cutBoxWidth = _a.cutBoxWidth, cutBoxHeight = _a.cutBoxHeight, imageHeight = _a.imageHeight, imageWidth = _a.imageWidth, scale = _a.scale;
            /* 计算缩放后的图片宽高差 */
            var differenceWidth = imageWidth * scale - imageWidth;
            var differenceHeight = imageHeight * scale - imageHeight;
            var imageTop = top > cutBoxTop ? cutBoxTop : (top + imageHeight * scale < cutBoxTop + cutBoxHeight) ? (cutBoxTop + cutBoxHeight) - imageHeight * scale : top;
            var imageLeft = left > cutBoxLeft ? cutBoxLeft : (left + imageWidth * scale < cutBoxLeft + cutBoxWidth) ? (cutBoxLeft + cutBoxWidth) - imageWidth * scale : left;
            _this.setState({
                imageTop: imageTop + differenceHeight / 2,
                imageLeft: imageLeft + differenceWidth / 2,
            });
        };
        /**
         * @desc 停止移动
         */
        _this.moveStop = function () {
            if (_this.touchImageRelative.length === 2) {
                clearTimeout(_this.setCenterTimer);
                _this.setCenterTimer = setTimeout(_this.setCenter, 1000);
            }
            _this.touchImageRelative = [];
        };
        _this.state = {
            canvasId: 'ag-image-cropper__image',
            imagePath: '',
            canvasImage: '',
            scale: 1,
            minScale: 1,
            originalImageWidth: 0,
            originalImageHeight: 0,
            imageWidth: 0,
            imageHeight: 0,
            imageLeft: 0,
            imageTop: 0,
            cutBoxWidth: 0,
            cutBoxHeight: 0,
            cutBoxTop: 0,
            cutBoxBottom: 0,
            cutBoxLeft: 0,
            cutBoxRight: 0,
            canvasWidth: 400,
            canvasHeight: 400
        };
        return _this;
    }
    ImageCropper.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.init(this.props.imagePath ? this.props.imagePath : '')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ImageCropper.prototype.render = function () {
        var _this = this;
        var windowWidth = this.systemInfo.windowWidth;
        var _a = this.state, canvasId = _a.canvasId, imagePath = _a.imagePath, scale = _a.scale, imageWidth = _a.imageWidth, imageTop = _a.imageTop, imageLeft = _a.imageLeft, imageHeight = _a.imageHeight, cutBoxWidth = _a.cutBoxWidth, cutBoxHeight = _a.cutBoxHeight, cutBoxTop = _a.cutBoxTop, cutBoxBottom = _a.cutBoxBottom, cutBoxLeft = _a.cutBoxLeft, cutBoxRight = _a.cutBoxRight;
        var className = this.props.className;
        var rootClass = classnames('ag-image-cropper', className);
        var imageStyle = {
            width: imageWidth + "px",
            height: imageHeight + "px",
            top: imageTop + "px",
            left: imageLeft + "px",
            transform: "scale(" + scale + ")",
            transformOrigin: "center"
        };
        /* 裁剪框外层容器高度 */
        var contentCutWrapper = {
            height: cutBoxHeight + "px"
        };
        /* 裁剪框样式 */
        var cutBoxStyle = {
            width: cutBoxWidth + "px",
            height: cutBoxHeight + "px",
        };
        /* 裁剪框顶部填充区月样式 */
        var contentTopFillStyle = {
            width: windowWidth + "px",
            height: cutBoxTop + "px",
            top: 0,
        };
        /* 裁剪框底部区域填充样式 */
        var contentBottomFillStyle = {
            width: windowWidth + "px",
            height: cutBoxBottom + "px",
            top: cutBoxTop + cutBoxHeight + "px"
        };
        /* 裁剪框左侧区域填充样式 */
        var contentCutLeftFileStyle = {
            width: cutBoxLeft + "px",
            height: cutBoxHeight + "px",
            top: cutBoxTop + "px",
        };
        /* 裁剪框右侧区域填充样式 */
        var contentCutRightFileStyle = {
            width: cutBoxRight + "px",
            height: cutBoxHeight + "px",
            top: cutBoxTop + "px",
        };
        /* canvas画布样式 */
        var canvasStyle = {
            width: cutBoxWidth + "px",
            height: cutBoxHeight + "px",
            top: "-9999px"
        };
        return (React.createElement(View, { className: rootClass },
            React.createElement(View, { className: 'ag-image-cropper__main' },
                React.createElement(View, { className: 'ag-image-cropper__content' },
                    React.createElement(View, { className: 'ag-image-cropper__content-fill', style: contentTopFillStyle }),
                    React.createElement(View, { className: 'ag-image-cropper__content-cut-wrapper', style: contentCutWrapper },
                        React.createElement(View, { className: 'ag-image-cropper__content-cut-fill', style: contentCutLeftFileStyle }),
                        React.createElement(View, { className: 'ag-image-cropper__content-cut-box', style: cutBoxStyle, onClick: this.previewImage },
                            React.createElement(View, { className: "border border-top-left" }),
                            React.createElement(View, { className: "border border-top-right" }),
                            React.createElement(View, { className: "border border-right-top" }),
                            React.createElement(View, { className: "border border-right-bottom" }),
                            React.createElement(View, { className: "border border-bottom-right" }),
                            React.createElement(View, { className: "border border-bottom-left" }),
                            React.createElement(View, { className: "border border-left-bottom" }),
                            React.createElement(View, { className: "border border-left-top" })),
                        React.createElement(View, { className: 'ag-image-cropper__content-cut-fill', style: contentCutRightFileStyle })),
                    React.createElement(View, { className: 'ag-image-cropper__content-fill', style: contentBottomFillStyle })),
                React.createElement(Image, { className: 'ag-image-cropper__image', src: imagePath, style: imageStyle, onTouchStart: this.imageOnTouchStart, onTouchMove: this.imageOnTouchMove, onTouchEnd: this.imageOnTouchEnd })),
            React.createElement(Canvas, { canvasId: canvasId, className: 'ag-image-cropper__canvas', disableScroll: true, style: canvasStyle }),
            React.createElement(View, { className: 'ag-image-cropper__action' },
                React.createElement(View, { className: 'ag-image-cropper__mr-30', onClick: this.refresh },
                    React.createElement(Icon, { value: 'refresh', color: 'white', size: 36 })),
                React.createElement(View, { className: 'ag-image-cropper__mr-30', onClick: this.previewImage },
                    React.createElement(Icon, { value: 'preview', color: 'white', size: 36 })),
                React.createElement(View, { className: 'ag-image-cropper__mr-30', onClick: this.chooseImage },
                    React.createElement(Icon, { value: 'local-image', color: 'white', size: 36 })),
                React.createElement(View, { onClick: function () { return _this.generateImage(true); } },
                    React.createElement(Icon, { value: 'confirm', color: 'white', size: 36 })))));
    };
    return ImageCropper;
}(React.Component));
ImageCropper.defaultProps = {
    className: '',
    imagePath: '',
    size: '100%',
    success: function (imagePath) { }
};
ImageCropper.propTypes = {
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
};

function getInputProps(props) {
    var actualProps = {
        type: props.type,
        maxlength: props.maxlength,
        disabled: props.disabled,
        password: false
    };
    switch (actualProps.type) {
        case 'phone':
            actualProps.type = 'number';
            actualProps.maxlength = 11;
            break;
        case 'password':
            actualProps.type = 'text';
            actualProps.password = true;
            break;
    }
    if (!props.disabled && !props.editable) {
        actualProps.disabled = true;
    }
    return actualProps;
}
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        _this.inputClearing = false;
        _this.handleInput = function (event) {
            _this.props.onChange(event.detail.value, _this.props.name, event);
        };
        _this.handleFocus = function (event) {
            if (typeof _this.props.onFocus === 'function') {
                _this.props.onFocus(event.detail.value, _this.props.name, event);
            }
        };
        _this.handleBlur = function (event) {
            if (typeof _this.props.onBlur === 'function') {
                _this.props.onBlur(event.detail.value, _this.props.name, event);
            }
            if (event.type === 'blur' && !_this.inputClearing) {
                _this.props.onChange(event.detail.value, _this.props.name, event);
            }
            // 还原状态
            _this.inputClearing = false;
        };
        _this.handleConfirm = function (event) {
            if (typeof _this.props.onConfirm === 'function') {
                _this.props.onConfirm(event.detail.value, _this.props.name, event);
            }
        };
        _this.handleClick = function (event) {
            if (!_this.props.editable && typeof _this.props.onClick === 'function') {
                _this.props.onClick(event.detail.value, _this.props.name, event);
            }
        };
        _this.handleClearValue = function (event) {
            _this.inputClearing = true;
            _this.props.onChange('', _this.props.name, event);
        };
        _this.handleKeyboardHeightChange = function (event) {
            if (typeof _this.props.onKeyboardHeightChange === 'function') {
                _this.props.onKeyboardHeightChange(_this.props.name, event);
            }
        };
        _this.state = {};
        return _this;
    }
    Input.prototype.render = function () {
        var _a = this.props, _b = _a.name, name = _b === void 0 ? '' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, value = _a.value, _d = _a.placeholder, placeholder = _d === void 0 ? '请输入' : _d, placeholderStyle = _a.placeholderStyle, placeholderClass = _a.placeholderClass, _e = _a.cursorSpacing, cursorSpacing = _e === void 0 ? -1 : _e, _f = _a.confirmType, confirmType = _f === void 0 ? 'done' : _f, _g = _a.alwaysEmbed, alwaysEmbed = _g === void 0 ? false : _g, _h = _a.cursor, cursor = _h === void 0 ? -1 : _h, border = _a.border, _j = _a.selectionStart, selectionStart = _j === void 0 ? -1 : _j, _k = _a.selectionEnd, selectionEnd = _k === void 0 ? -1 : _k, _l = _a.adjustPosition, adjustPosition = _l === void 0 ? true : _l, _m = _a.holdKeyboard, holdKeyboard = _m === void 0 ? false : _m, _o = _a.label, label = _o === void 0 ? '' : _o, _p = _a.customLabel, customLabel = _p === void 0 ? false : _p, _q = _a.clearable, clearable = _q === void 0 ? false : _q, _r = _a.align, align = _r === void 0 ? 'left' : _r, _s = _a.required, required = _s === void 0 ? false : _s, _t = _a.error, error = _t === void 0 ? '' : _t, _u = _a.autoFocus, autoFocus = _u === void 0 ? false : _u, _v = _a.focus, focus = _v === void 0 ? false : _v;
        var isRenderError = !!this.props.renderError || error;
        var _w = getInputProps(this.props), _x = _w.type, type = _x === void 0 ? 'text' : _x, _y = _w.maxlength, maxlength = _y === void 0 ? 140 : _y, _z = _w.disabled, disabled = _z === void 0 ? false : _z, password = _w.password;
        var rootClass = classnames('ag-input', {
            'ag-input--without-border': !border
        }, className);
        var containerCls = classnames('ag-input__container', {
            'ag-input--disabled': disabled
        });
        var overlayCls = classnames('ag-input__overlay', {
            'ag-input__overlay--hidden': !disabled
        });
        var placeholderCls = classnames('ag-input__placeholder', placeholderClass);
        return (React.createElement(View, { className: rootClass },
            align === 'top' && (React.createElement(Label, { className: "ag-input__top-label " + (required && 'ag-input__label--required'), for: name }, label)),
            React.createElement(View, { className: containerCls },
                React.createElement(View, { className: overlayCls, onClick: this.handleClick }),
                align === 'left' && (React.createElement(Fragment$1, null, customLabel ?
                    React.createElement(View, null, this.props.renderLabel)
                    :
                        React.createElement(Label, { className: "ag-input__left-label " + (required && 'ag-input__label--required'), for: name }, label))),
                React.createElement(Input$1, { className: 'ag-input__input', id: name, value: value, type: type, password: password, placeholder: placeholder, placeholderStyle: placeholderStyle, placeholderClass: placeholderCls, maxlength: maxlength, cursorSpacing: cursorSpacing, confirmType: confirmType, alwaysEmbed: alwaysEmbed, cursor: cursor, selectionStart: selectionStart, selectionEnd: selectionEnd, adjustPosition: adjustPosition, holdKeyboard: holdKeyboard, autoFocus: autoFocus, focus: focus, onInput: this.handleInput, onFocus: this.handleFocus, onBlur: this.handleBlur, onConfirm: this.handleConfirm, 
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore
                    onKeyboardHeightChange: this.handleKeyboardHeightChange }),
                clearable && value && (React.createElement(View, { className: 'ag-input__clear', onTouchEnd: this.handleClearValue },
                    React.createElement(Text, { className: 'ag-icon ag-icon-close-circle ag-input__icon-close' }))),
                React.createElement(View, { className: 'ag-input__custom-right' }, this.props.renderRight)),
            isRenderError && (React.createElement(View, { className: 'ag-input__tip' },
                align === 'left' && (React.createElement(Fragment$1, null, customLabel ?
                    React.createElement(View, { className: 'ag-input__tip-box' }, this.props.renderLabel)
                    :
                        React.createElement(Label, { className: "ag-input__left-label" }))),
                this.props.renderError ?
                    React.createElement(View, { className: 'ag-input__tip-label' }, this.props.renderError)
                    :
                        React.createElement(View, { className: 'ag-input__tip-label' }, error)))));
    };
    return Input;
}(React.Component));
// @ts-ignore
// @ts-ignore
Input.defaultProps = {
    name: '',
    className: '',
    /* input的值 */
    value: '',
    /**
     * 输入框类型
     * @default text
     */
    type: 'text',
    error: '',
    /* 是否是密码类型 */
    password: false,
    /* 提示文字 */
    placeholder: '请输入',
    /* 指定placeholder的样式 */
    placeholderStyle: '',
    /* 指定placeholder的class */
    placeholderClass: '',
    /* 是否禁用 */
    disabled: false,
    /* 是否可编辑 */
    editable: true,
    /* 最大输入长度 */
    maxlength: 140,
    /**
     * 指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离
     * @default 0
     */
    cursorSpacing: -1,
    /**
     * 设置键盘右下角按钮的文字，仅在type='text'时生效
     * @default done
     */
    confirmType: 'done',
    /**
     * 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)
     * @default false
     */
    alwaysEmbed: false,
    /* 指定focus时的光标位置 */
    cursor: -1,
    /**
     * 光标起始位置，自动聚集时有效，需与selection-end搭配使用
     * @default -1
     */
    selectionStart: -1,
    /**
     * 光标结束位置，自动聚集时有效，需与selection-start搭配使用
     * @default -1
     */
    selectionEnd: -1,
    /**
     * 键盘弹起时，是否自动上推页面
     * @default true
     */
    adjustPosition: true,
    /**
     * focus时，点击页面的时候不收起键盘
     * @default false
     */
    holdKeyboard: false,
    /* 标题 */
    label: '',
    /* 是否自定义label */
    customLabel: false,
    /* 是否显示清空按钮 */
    clearable: false,
    /**
     * label显示位置，top|left
     * @default left
     */
    border: true,
    align: 'left',
    /* 是否必填,控制显示必填星号 */
    required: false,
    /* 右侧图标 */
    rightIcon: '',
    /**
     * 是否自动聚焦
     * @default false
     */
    focus: false,
    onChange: function () { },
    onFocus: function () { },
    onBlur: function () { },
    onConfirm: function () { },
    onKeyboardHeightChange: function () { },
};
Input.propTypes = {
    className: propTypes.oneOfType([propTypes.array, propTypes.string]),
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var warning = function warning() {}; // don't print warning message when in production env or node runtime

if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
  warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === 'undefined') {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var i = 0;
  var len = args.length;

  if (typeof template === 'function') {
    return template.apply(null, args);
  }

  if (typeof template === 'string') {
    var str = template.replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }

      if (i >= len) {
        return x;
      }

      switch (x) {
        case '%s':
          return String(args[i++]);

        case '%d':
          return Number(args[i++]);

        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }

          break;

        default:
          return x;
      }
    });
    return str;
  }

  return template;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'date' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }

  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }

  return false;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors || []);
    total++;

    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }

    var original = index;
    index = index + 1;

    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k] || []);
  });
  return ret;
}

var AsyncValidationError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(AsyncValidationError, _Error);

  function AsyncValidationError(errors, fields) {
    var _this;

    _this = _Error.call(this, 'Async Validation Error') || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }

  return AsyncValidationError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };

      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });

    _pending["catch"](function (e) {
      return e;
    });

    return _pending;
  }

  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;

      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };

    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }

    objArrKeys.forEach(function (key) {
      var arr = objArr[key];

      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}

function isErrorObj(obj) {
  return !!(obj && obj.message !== undefined);
}

function getValue(value, path) {
  var v = value;

  for (var i = 0; i < path.length; i++) {
    if (v == undefined) {
      return v;
    }

    v = v[path[i]];
  }

  return v;
}

function complementError(rule, source) {
  return function (oe) {
    var fieldValue;

    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }

    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }

    return {
      message: typeof oe === 'function' ? oe() : oe,
      fieldValue: fieldValue,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];

        if (typeof value === 'object' && typeof target[s] === 'object') {
          target[s] = _extends({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }

  return target;
}

var required$1 = function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

var whitespace = function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
};

/* eslint max-len:0 */

var pattern$2 = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }

    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function' && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    return typeof value === 'number';
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && value.length <= 320 && !!value.match(pattern$2.email);
  },
  url: function url(value) {
    return typeof value === 'string' && value.length <= 2048 && !!value.match(pattern$2.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern$2.hex);
  }
};

var type$1 = function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required$1(rule, value, source, errors, options);
    return;
  }

  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;

  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check

  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};

var range = function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);

  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type


  if (!key) {
    return false;
  }

  if (arr) {
    val = value.length;
  }

  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }

  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};

var ENUM$1 = 'enum';

var enumerable$1 = function enumerable(rule, value, source, errors, options) {
  rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];

  if (rule[ENUM$1].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(', ')));
  }
};

var pattern$1 = function pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;

      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);

      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};

var rules = {
  required: required$1,
  whitespace: whitespace,
  type: type$1,
  range: range,
  "enum": enumerable$1,
  pattern: pattern$1
};

var string = function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'string');

    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);

      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }

  callback(errors);
};

var method = function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var number = function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (value === '') {
      value = undefined;
    }

    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var _boolean = function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var regexp = function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var integer = function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var floatFn = function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var array = function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((value === undefined || value === null) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'array');

    if (value !== undefined && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var object = function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var ENUM = 'enum';

var enumerable = function enumerable(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules[ENUM](rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var pattern = function pattern(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var date = function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field); // console.log('validate on %s value', value);

  if (validate) {
    if (isEmptyValue(value, 'date') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'date')) {
      var dateObject;

      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }

      rules.type(rule, dateObject, source, errors, options);

      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }

  callback(errors);
};

var required = function required(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value;
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
};

var type = function type(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, ruleType);

    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var any = function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);
  }

  callback(errors);
};

var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable,
  pattern: pattern,
  date: date,
  url: type,
  hex: type,
  email: type,
  required: required,
  any: any
};

function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */

var Schema = /*#__PURE__*/function () {
  // ========================= Static =========================
  // ======================== Instance ========================
  function Schema(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }

  var _proto = Schema.prototype;

  _proto.define = function define(rules) {
    var _this = this;

    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }

    if (typeof rules !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }

    this.rules = {};
    Object.keys(rules).forEach(function (name) {
      var item = rules[name];
      _this.rules[name] = Array.isArray(item) ? item : [item];
    });
  };

  _proto.messages = function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }

    return this._messages;
  };

  _proto.validate = function validate(source_, o, oc) {
    var _this2 = this;

    if (o === void 0) {
      o = {};
    }

    if (oc === void 0) {
      oc = function oc() {};
    }

    var source = source_;
    var options = o;
    var callback = oc;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback(null, source);
      }

      return Promise.resolve(source);
    }

    function complete(results) {
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          var _errors;

          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }

      for (var i = 0; i < results.length; i++) {
        add(results[i]);
      }

      if (!errors.length) {
        callback(null, source);
      } else {
        fields = convertFieldsError(errors);
        callback(errors, fields);
      }
    }

    if (options.messages) {
      var messages$1 = this.messages();

      if (messages$1 === messages) {
        messages$1 = newMessages();
      }

      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }

    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      var arr = _this2.rules[z];
      var value = source[z];
      arr.forEach(function (r) {
        var rule = r;

        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }

          value = source[z] = rule.transform(value);
        }

        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        } // Fill validator. Skip if nothing need to validate


        rule.validator = _this2.getValidationMethod(rule);

        if (!rule.validator) {
          return;
        }

        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this2.getType(rule);
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullField(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key,
          fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
        });
      }

      function cb(e) {
        if (e === void 0) {
          e = [];
        }

        var errorList = Array.isArray(e) ? e : [e];

        if (!options.suppressWarning && errorList.length) {
          Schema.warning('async-validator:', errorList);
        }

        if (errorList.length && rule.message !== undefined) {
          errorList = [].concat(rule.message);
        } // Fill error info


        var filledErrors = errorList.map(complementError(rule, source));

        if (options.first && filledErrors.length) {
          errorFields[rule.field] = 1;
          return doIt(filledErrors);
        }

        if (!deep) {
          doIt(filledErrors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message !== undefined) {
              filledErrors = [].concat(rule.message).map(complementError(rule, source));
            } else if (options.error) {
              filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
            }

            return doIt(filledErrors);
          }

          var fieldsSchema = {};

          if (rule.defaultField) {
            Object.keys(data.value).map(function (key) {
              fieldsSchema[key] = rule.defaultField;
            });
          }

          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
          var paredFieldsSchema = {};
          Object.keys(fieldsSchema).forEach(function (field) {
            var fieldSchema = fieldsSchema[field];
            var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
            paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
          });
          var schema = new Schema(paredFieldsSchema);
          schema.messages(options.messages);

          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }

          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];

            if (filledErrors && filledErrors.length) {
              finalErrors.push.apply(finalErrors, filledErrors);
            }

            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }

            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }

      var res;

      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);

        if (res === true) {
          cb();
        } else if (res === false) {
          cb(typeof rule.message === 'function' ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }

      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    }, source);
  };

  _proto.getType = function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }

    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }

    return rule.type || 'string';
  };

  _proto.getValidationMethod = function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }

    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');

    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }

    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }

    return validators[this.getType(rule)] || undefined;
  };

  return Schema;
}();

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }

  validators[type] = validator;
};

Schema.warning = warning;
Schema.messages = messages;
Schema.validators = validators;

var Validator = /** @class */ (function (_super) {
    __extends(Validator, _super);
    function Validator(descriptor, context) {
        var _this = this;
        console.log('constructor');
        _this = _super.call(this, descriptor) || this;
        _this.context = context;
        // @ts-ignore
        if (_this.context.state.errors && Object.prototype.toString.call(_this.context.state.errors) === '[object Object]') {
            // @ts-ignore
            var errors_1 = _this.context.state.errors;
            Object.keys(descriptor).forEach(function (key) {
                // @ts-ignore
                errors_1[key] = '';
            });
            // @ts-ignore
            _this.context.setState({
                errors: errors_1
            });
        }
        return _this;
    }
    Validator.prototype.validateForm = function (form) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.validate(form, function (errors, fields) {
                if (errors) {
                    // validation failed, errors is an array of all errors
                    // fields is an object keyed by field name with an array of
                    // errors per field
                    // @ts-ignore
                    if (_this.context.state.errors && Object.prototype.toString.call(_this.context.state.errors) === '[object Object]') {
                        // @ts-ignore
                        var err_1 = _this.context.state.errors;
                        Object.keys(fields).forEach(function (key) {
                            console.log('1');
                            if (Array.isArray(fields[key]) && fields[key].length > 0) {
                                err_1[key] = fields[key][0].message;
                            }
                        });
                        console.log('this.context1', _this.context);
                        // @ts-ignore
                        _this.context.setState({
                            errors: err_1
                        });
                    }
                    reject({ errors: errors, fields: fields });
                }
                else {
                    resolve();
                }
            });
        });
    };
    return Validator;
}(Schema));

export { ActionSheet as AgActionSheet, ActionSheetItem as AgActionSheetItem, Cropper as AgCropper, FilePicker as AgFilePicker, Icon as AgIcon, ImageCropper as AgImageCropper, Input as AgInput, Validator };
//# sourceMappingURL=index.esm.js.map

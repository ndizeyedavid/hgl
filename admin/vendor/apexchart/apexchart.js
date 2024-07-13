/*!
 * ApexCharts v3.26.0
 * (c) 2018-2021 Juned Chhipa
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ApexCharts = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
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
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /*
   ** Generic functions which are not dependent on ApexCharts
   */
  var Utils = /*#__PURE__*/function () {
    function Utils() {
      _classCallCheck(this, Utils);
    }

    _createClass(Utils, [{
      key: "shadeRGBColor",
      value: function shadeRGBColor(percent, color) {
        var f = color.split(','),
            t = percent < 0 ? 0 : 255,
            p = percent < 0 ? percent * -1 : percent,
            R = parseInt(f[0].slice(4), 10),
            G = parseInt(f[1], 10),
            B = parseInt(f[2], 10);
        return 'rgb(' + (Math.round((t - R) * p) + R) + ',' + (Math.round((t - G) * p) + G) + ',' + (Math.round((t - B) * p) + B) + ')';
      }
    }, {
      key: "shadeHexColor",
      value: function shadeHexColor(percent, color) {
        var f = parseInt(color.slice(1), 16),
            t = percent < 0 ? 0 : 255,
            p = percent < 0 ? percent * -1 : percent,
            R = f >> 16,
            G = f >> 8 & 0x00ff,
            B = f & 0x0000ff;
        return '#' + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
      } // beautiful color shading blending code
      // http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors

    }, {
      key: "shadeColor",
      value: function shadeColor(p, color) {
        if (Utils.isColorHex(color)) {
          return this.shadeHexColor(p, color);
        } else {
          return this.shadeRGBColor(p, color);
        }
      }
    }], [{
      key: "bind",
      value: function bind(fn, me) {
        return function () {
          return fn.apply(me, arguments);
        };
      }
    }, {
      key: "isObject",
      value: function isObject(item) {
        return item && _typeof(item) === 'object' && !Array.isArray(item) && item != null;
      }
    }, {
      key: "listToArray",
      value: function listToArray(list) {
        var i,
            array = [];

        for (i = 0; i < list.length; i++) {
          array[i] = list[i];
        }

        return array;
      } // to extend defaults with user options
      // credit: http://stackoverflow.com/questions/27936772/deep-object-merging-in-es6-es7#answer-34749873

    }, {
      key: "extend",
      value: function extend(target, source) {
        var _this = this;

        if (typeof Object.assign !== 'function') {

          (function () {
            Object.assign = function (target) {

              if (target === undefined || target === null) {
                throw new TypeError('Cannot convert undefined or null to object');
              }

              var output = Object(target);

              for (var index = 1; index < arguments.length; index++) {
                var _source = arguments[index];

                if (_source !== undefined && _source !== null) {
                  for (var nextKey in _source) {
                    if (_source.hasOwnProperty(nextKey)) {
                      output[nextKey] = _source[nextKey];
                    }
                  }
                }
              }

              return output;
            };
          })();
        }

        var output = Object.assign({}, target);

        if (this.isObject(target) && this.isObject(source)) {
          Object.keys(source).forEach(function (key) {
            if (_this.isObject(source[key])) {
              if (!(key in target)) {
                Object.assign(output, _defineProperty({}, key, source[key]));
              } else {
                output[key] = _this.extend(target[key], source[key]);
              }
            } else {
              Object.assign(output, _defineProperty({}, key, source[key]));
            }
          });
        }

        return output;
      }
    }, {
      key: "extendArray",
      value: function extendArray(arrToExtend, resultArr) {
        var extendedArr = [];
        arrToExtend.map(function (item) {
          extendedArr.push(Utils.extend(resultArr, item));
        });
        arrToExtend = extendedArr;
        return arrToExtend;
      } // If month counter exceeds 12, it starts again from 1

    }, {
      key: "monthMod",
      value: function monthMod(month) {
        return month % 12;
      }
    }, {
      key: "clone",
      value: function clone(source) {
        if (Object.prototype.toString.call(source) === '[object Array]') {
          var cloneResult = [];

          for (var i = 0; i < source.length; i++) {
            cloneResult[i] = this.clone(source[i]);
          }

          return cloneResult;
        } else if (Object.prototype.toString.call(source) === '[object Null]') {
          // fixes an issue where null values were converted to {}
          return null;
        } else if (Object.prototype.toString.call(source) === '[object Date]') {
          return source;
        } else if (_typeof(source) === 'object') {
          var _cloneResult = {};

          for (var prop in source) {
            if (source.hasOwnProperty(prop)) {
              _cloneResult[prop] = this.clone(source[prop]);
            }
          }

          return _cloneResult;
        } else {
          return source;
        }
      }
    }, {
      key: "log10",
      value: function log10(x) {
        return Math.log(x) / Math.LN10;
      }
    }, {
      key: "roundToBase10",
      value: function roundToBase10(x) {
        return Math.pow(10, Math.floor(Math.log10(x)));
      }
    }, {
      key: "roundToBase",
      value: function roundToBase(x, base) {
        return Math.pow(base, Math.floor(Math.log(x) / Math.log(base)));
      }
    }, {
      key: "parseNumber",
      value: function parseNumber(val) {
        if (val === null) return val;
        return parseFloat(val);
      }
    }, {
      key: "randomId",
      value: function randomId() {
        return (Math.random() + 1).toString(36).substring(4);
      }
    }, {
      key: "noExponents",
      value: function noExponents(val) {
        var data = String(val).split(/[eE]/);
        if (data.length === 1) return data[0];
        var z = '',
            sign = val < 0 ? '-' : '',
            str = data[0].replace('.', ''),
            mag = Number(data[1]) + 1;

        if (mag < 0) {
          z = sign + '0.';

          while (mag++) {
            z += '0';
          }

          return z + str.replace(/^-/, '');
        }

        mag -= str.length;

        while (mag--) {
          z += '0';
        }

        return str + z;
      }
    }, {
      key: "getDimensions",
      value: function getDimensions(el) {
        var computedStyle = getComputedStyle(el, null);
        var elementHeight = el.clientHeight;
        var elementWidth = el.clientWidth;
        elementHeight -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
        elementWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
        return [elementWidth, elementHeight];
      }
    }, {
      key: "getBoundingClientRect",
      value: function getBoundingClientRect(element) {
        var rect = element.getBoundingClientRect();
        return {
          top: rect.top,
          right: rect.right,
          bottom: rect.bottom,
          left: rect.left,
          width: element.clientWidth,
          height: element.clientHeight,
          x: rect.left,
          y: rect.top
        };
      }
    }, {
      key: "getLargestStringFromArr",
      value: function getLargestStringFromArr(arr) {
        return arr.reduce(function (a, b) {
          if (Array.isArray(b)) {
            b = b.reduce(function (aa, bb) {
              return aa.length > bb.length ? aa : bb;
            });
          }

          return a.length > b.length ? a : b;
        }, 0);
      } // http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb#answer-12342275

    }, {
      key: "hexToRgba",
      value: function hexToRgba() {
        var hex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#999999';
        var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.6;

        if (hex.substring(0, 1) !== '#') {
          hex = '#999999';
        }

        var h = hex.replace('#', '');
        h = h.match(new RegExp('(.{' + h.length / 3 + '})', 'g'));

        for (var i = 0; i < h.length; i++) {
          h[i] = parseInt(h[i].length === 1 ? h[i] + h[i] : h[i], 16);
        }

        if (typeof opacity !== 'undefined') h.push(opacity);
        return 'rgba(' + h.join(',') + ')';
      }
    }, {
      key: "getOpacityFromRGBA",
      value: function getOpacityFromRGBA(rgba) {
        return parseFloat(rgba.replace(/^.*,(.+)\)/, '$1'));
      }
    }, {
      key: "rgb2hex",
      value: function rgb2hex(rgb) {
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return rgb && rgb.length === 4 ? '#' + ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
      }
    }, {
      key: "isColorHex",
      value: function isColorHex(color) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(color);
      }
    }, {
      key: "getPolygonPos",
      value: function getPolygonPos(size, dataPointsLen) {
        var dotsArray = [];
        var angle = Math.PI * 2 / dataPointsLen;

        for (var i = 0; i < dataPointsLen; i++) {
          var curPos = {};
          curPos.x = size * Math.sin(i * angle);
          curPos.y = -size * Math.cos(i * angle);
          dotsArray.push(curPos);
        }

        return dotsArray;
      }
    }, {
      key: "polarToCartesian",
      value: function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
        return {
          x: centerX + radius * Math.cos(angleInRadians),
          y: centerY + radius * Math.sin(angleInRadians)
        };
      }
    }, {
      key: "escapeString",
      value: function escapeString(str) {
        var escapeWith = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x';
        var newStr = str.toString().slice();
        newStr = newStr.replace(/[` ~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, escapeWith);
        return newStr;
      }
    }, {
      key: "negToZero",
      value: function negToZero(val) {
        return val < 0 ? 0 : val;
      }
    }, {
      key: "moveIndexInArray",
      value: function moveIndexInArray(arr, old_index, new_index) {
        if (new_index >= arr.length) {
          var k = new_index - arr.length + 1;

          while (k--) {
            arr.push(undefined);
          }
        }

        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr;
      }
    }, {
      key: "extractNumber",
      value: function extractNumber(s) {
        return parseFloat(s.replace(/[^\d.]*/g, ''));
      }
    }, {
      key: "findAncestor",
      value: function findAncestor(el, cls) {
        while ((el = el.parentElement) && !el.classList.contains(cls)) {
        }

        return el;
      }
    }, {
      key: "setELstyles",
      value: function setELstyles(el, styles) {
        for (var key in styles) {
          if (styles.hasOwnProperty(key)) {
            el.style.key = styles[key];
          }
        }
      }
    }, {
      key: "isNumber",
      value: function isNumber(value) {
        return !isNaN(value) && parseFloat(Number(value)) === value && !isNaN(parseInt(value, 10));
      }
    }, {
      key: "isFloat",
      value: function isFloat(n) {
        return Number(n) === n && n % 1 !== 0;
      }
    }, {
      key: "isSafari",
      value: function isSafari() {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      }
    }, {
      key: "isFirefox",
      value: function isFirefox() {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
      }
    }, {
      key: "isIE11",
      value: function isIE11() {
        if (window.navigator.userAgent.indexOf('MSIE') !== -1 || window.navigator.appVersion.indexOf('Trident/') > -1) {
          return true;
        }
      }
    }, {
      key: "isIE",
      value: function isIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');

        if (msie > 0) {
          // IE 10 or older => return version number
          return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');

        if (trident > 0) {
          // IE 11 => return version number
          var rv = ua.indexOf('rv:');
          return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');

        if (edge > 0) {
          // Edge (IE 12+) => return version number
          return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        } // other browser


        return false;
      }
    }]);

    return Utils;
  }();

  /**
   * ApexCharts Animation Class.
   *
   * @module Animations
   **/

  var Animations = /*#__PURE__*/function () {
    function Animations(ctx) {
      _classCallCheck(this, Animations);

      this.ctx = ctx;
      this.w = ctx.w;
      this.setEasingFunctions();
    }

    _createClass(Animations, [{
      key: "setEasingFunctions",
      value: function setEasingFunctions() {
        var easing;
        if (this.w.globals.easing) return;
        var userDefinedEasing = this.w.config.chart.animations.easing;

        switch (userDefinedEasing) {
          case 'linear':
            {
              easing = '-';
              break;
            }

          case 'easein':
            {
              easing = '<';
              break;
            }

          case 'easeout':
            {
              easing = '>';
              break;
            }

          case 'easeinout':
            {
              easing = '<>';
              break;
            }

          case 'swing':
            {
              easing = function easing(pos) {
                var s = 1.70158;
                var ret = (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
                return ret;
              };

              break;
            }

          case 'bounce':
            {
              easing = function easing(pos) {
                var ret = '';

                if (pos < 1 / 2.75) {
                  ret = 7.5625 * pos * pos;
                } else if (pos < 2 / 2.75) {
                  ret = 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
                } else if (pos < 2.5 / 2.75) {
                  ret = 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
                } else {
                  ret = 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
                }

                return ret;
              };

              break;
            }

          case 'elastic':
            {
              easing = function easing(pos) {
                if (pos === !!pos) return pos;
                return Math.pow(2, -10 * pos) * Math.sin((pos - 0.075) * (2 * Math.PI) / 0.3) + 1;
              };

              break;
            }

          default:
            {
              easing = '<>';
            }
        }

        this.w.globals.easing = easing;
      }
    }, {
      key: "animateLine",
      value: function animateLine(el, from, to, speed) {
        el.attr(from).animate(speed).attr(to);
      }
      /*
       ** Animate radius of a circle element
       */

    }, {
      key: "animateMarker",
      value: function animateMarker(el, from, to, speed, easing, cb) {
        if (!from) from = 0;
        el.attr({
          r: from,
          width: from,
          height: from
        }).animate(speed, easing).attr({
          r: to,
          width: to.width,
          height: to.height
        }).afterAll(function () {
          cb();
        });
      }
      /*
       ** Animate radius and position of a circle element
       */

    }, {
      key: "animateCircle",
      value: function animateCircle(el, from, to, speed, easing) {
        el.attr({
          r: from.r,
          cx: from.cx,
          cy: from.cy
        }).animate(speed, easing).attr({
          r: to.r,
          cx: to.cx,
          cy: to.cy
        });
      }
      /*
       ** Animate rect properties
       */

    }, {
      key: "animateRect",
      value: function animateRect(el, from, to, speed, fn) {
        el.attr(from).animate(speed).attr(to).afterAll(function () {
          return fn();
        });
      }
    }, {
      key: "animatePathsGradually",
      value: function animatePathsGradually(params) {
        var el = params.el,
            realIndex = params.realIndex,
            j = params.j,
            fill = params.fill,
            pathFrom = params.pathFrom,
            pathTo = params.pathTo,
            speed = params.speed,
            delay = params.delay;
        var me = this;
        var w = this.w;
        var delayFactor = 0;

        if (w.config.chart.animations.animateGradually.enabled) {
          delayFactor = w.config.chart.animations.animateGradually.delay;
        }

        if (w.config.chart.animations.dynamicAnimation.enabled && w.globals.dataChanged && w.config.chart.type !== 'bar') {
          // disabled due to this bug - https://github.com/apexcharts/vue-apexcharts/issues/75
          delayFactor = 0;
        }

        me.morphSVG(el, realIndex, j, w.config.chart.type === 'line' && !w.globals.comboCharts ? 'stroke' : fill, pathFrom, pathTo, speed, delay * delayFactor);
      }
    }, {
      key: "showDelayedElements",
      value: function showDelayedElements() {
        this.w.globals.delayedElements.forEach(function (d) {
          var ele = d.el;
          ele.classList.remove('apexcharts-element-hidden');
        });
      }
    }, {
      key: "animationCompleted",
      value: function animationCompleted(el) {
        var w = this.w;
        if (w.globals.animationEnded) return;
        w.globals.animationEnded = true;
        this.showDelayedElements();

        if (typeof w.config.chart.events.animationEnd === 'function') {
          w.config.chart.events.animationEnd(this.ctx, {
            el: el,
            w: w
          });
        }
      } // SVG.js animation for morphing one path to another

    }, {
      key: "morphSVG",
      value: function morphSVG(el, realIndex, j, fill, pathFrom, pathTo, speed, delay) {
        var _this = this;

        var w = this.w;

        if (!pathFrom) {
          pathFrom = el.attr('pathFrom');
        }

        if (!pathTo) {
          pathTo = el.attr('pathTo');
        }

        var disableAnimationForCorrupPath = function disableAnimationForCorrupPath(path) {
          if (w.config.chart.type === 'radar') {
            // radar chart drops the path to bottom and hence a corrup path looks ugly
            // therefore, disable animation for such a case
            speed = 1;
          }

          return "M 0 ".concat(w.globals.gridHeight);
        };

        if (!pathFrom || pathFrom.indexOf('undefined') > -1 || pathFrom.indexOf('NaN') > -1) {
          pathFrom = disableAnimationForCorrupPath();
        }

        if (!pathTo || pathTo.indexOf('undefined') > -1 || pathTo.indexOf('NaN') > -1) {
          pathTo = disableAnimationForCorrupPath();
        }

        if (!w.globals.shouldAnimate) {
          speed = 1;
        }

        el.plot(pathFrom).animate(1, w.globals.easing, delay).plot(pathFrom).animate(speed, w.globals.easing, delay).plot(pathTo).afterAll(function () {
          // a flag to indicate that the original mount function can return true now as animation finished here
          if (Utils.isNumber(j)) {
            if (j === w.globals.series[w.globals.maxValsInArrayIndex].length - 2 && w.globals.shouldAnimate) {
              _this.animationCompleted(el);
            }
          } else if (fill !== 'none' && w.globals.shouldAnimate) {
            if (!w.globals.comboCharts && realIndex === w.globals.series.length - 1 || w.globals.comboCharts) {
              _this.animationCompleted(el);
            }
          }

          _this.showDelayedElements();
        });
      }
    }]);

    return Animations;
  }();

  /**
   * ApexCharts Filters Class for setting hover/active states on the paths.
   *
   * @module Formatters
   **/

  var Filters = /*#__PURE__*/function () {
    function Filters(ctx) {
      _classCallCheck(this, Filters);

      this.ctx = ctx;
      this.w = ctx.w;
    } // create a re-usable filter which can be appended other filter effects and applied to multiple elements


    _createClass(Filters, [{
      key: "getDefaultFilter",
      value: function getDefaultFilter(el, i) {
        var w = this.w;
        el.unfilter(true);
        var filter = new window.SVG.Filter();
        filter.size('120%', '180%', '-5%', '-40%');

        if (w.config.states.normal.filter !== 'none') {
          this.applyFilter(el, i, w.config.states.normal.filter.type, w.config.states.normal.filter.value);
        } else {
          if (w.config.chart.dropShadow.enabled) {
            this.dropShadow(el, w.config.chart.dropShadow, i);
          }
        }
      }
    }, {
      key: "addNormalFilter",
      value: function addNormalFilter(el, i) {
        var w = this.w; // revert shadow if it was there
        // but, ignore marker as marker don't have dropshadow yet

        if (w.config.chart.dropShadow.enabled && !el.node.classList.contains('apexcharts-marker')) {
          this.dropShadow(el, w.config.chart.dropShadow, i);
        }
      } // appends dropShadow to the filter object which can be chained with other filter effects

    }, {
      key: "addLightenFilter",
      value: function addLightenFilter(el, i, attrs) {
        var _this = this;

        var w = this.w;
        var intensity = attrs.intensity;
        el.unfilter(true);
        var filter = new window.SVG.Filter();
        el.filter(function (add) {
          var shadowAttr = w.config.chart.dropShadow;

          if (shadowAttr.enabled) {
            filter = _this.addShadow(add, i, shadowAttr);
          } else {
            filter = add;
          }

          filter.componentTransfer({
            rgb: {
              type: 'linear',
              slope: 1.5,
              intercept: intensity
            }
          });
        });
        el.filterer.node.setAttribute('filterUnits', 'userSpaceOnUse');

        this._scaleFilterSize(el.filterer.node);
      } // appends dropShadow to the filter object which can be chained with other filter effects

    }, {
      key: "addDarkenFilter",
      value: function addDarkenFilter(el, i, attrs) {
        var _this2 = this;

        var w = this.w;
        var intensity = attrs.intensity;
        el.unfilter(true);
        var filter = new window.SVG.Filter();
        el.filter(function (add) {
          var shadowAttr = w.config.chart.dropShadow;

          if (shadowAttr.enabled) {
            filter = _this2.addShadow(add, i, shadowAttr);
          } else {
            filter = add;
          }

          filter.componentTransfer({
            rgb: {
              type: 'linear',
              slope: intensity
            }
          });
        });
        el.filterer.node.setAttribute('filterUnits', 'userSpaceOnUse');

        this._scaleFilterSize(el.filterer.node);
      }
    }, {
      key: "applyFilter",
      value: function applyFilter(el, i, filter) {
        var intensity = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.5;

        switch (filter) {
          case 'none':
            {
              this.addNormalFilter(el, i);
              break;
            }

          case 'lighten':
            {
              this.addLightenFilter(el, i, {
                intensity: intensity
              });
              break;
            }

          case 'darken':
            {
              this.addDarkenFilter(el, i, {
                intensity: intensity
              });
              break;
            }
        }
      } // appends dropShadow to the filter object which can be chained with other filter effects

    }, {
      key: "addShadow",
      value: function addShadow(add, i, attrs) {
        var blur = attrs.blur,
            top = attrs.top,
            left = attrs.left,
            color = attrs.color,
            opacity = attrs.opacity;
        var shadowBlur = add.flood(Array.isArray(color) ? color[i] : color, opacity).composite(add.sourceAlpha, 'in').offset(left, top).gaussianBlur(blur).merge(add.source);
        return add.blend(add.source, shadowBlur);
      } // directly adds dropShadow to the element and returns the same element.
      // the only way it is different from the addShadow() function is that addShadow is chainable to other filters, while this function discards all filters and add dropShadow

    }, {
      key: "dropShadow",
      value: function dropShadow(el, attrs) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var top = attrs.top,
            left = attrs.left,
            blur = attrs.blur,
            color = attrs.color,
            opacity = attrs.opacity,
            noUserSpaceOnUse = attrs.noUserSpaceOnUse;
        var w = this.w;
        el.unfilter(true);

        if (Utils.isIE() && w.config.chart.type === 'radialBar') {
          // in radialbar charts, dropshadow is clipping actual drawing in IE
          return el;
        }

        color = Array.isArray(color) ? color[i] : color;
        el.filter(function (add) {
          var shadowBlur = null;

          if (Utils.isSafari() || Utils.isFirefox() || Utils.isIE()) {
            // safari/firefox/IE have some alternative way to use this filter
            shadowBlur = add.flood(color, opacity).composite(add.sourceAlpha, 'in').offset(left, top).gaussianBlur(blur);
          } else {
            shadowBlur = add.flood(color, opacity).composite(add.sourceAlpha, 'in').offset(left, top).gaussianBlur(blur).merge(add.source);
          }

          add.blend(add.source, shadowBlur);
        });

        if (!noUserSpaceOnUse) {
          el.filterer.node.setAttribute('filterUnits', 'userSpaceOnUse');
        }

        this._scaleFilterSize(el.filterer.node);

        return el;
      }
    }, {
      key: "setSelectionFilter",
      value: function setSelectionFilter(el, realIndex, dataPointIndex) {
        var w = this.w;

        if (typeof w.globals.selectedDataPoints[realIndex] !== 'undefined') {
          if (w.globals.selectedDataPoints[realIndex].indexOf(dataPointIndex) > -1) {
            el.node.setAttribute('selected', true);
            var activeFilter = w.config.states.active.filter;

            if (activeFilter !== 'none') {
              this.applyFilter(el, realIndex, activeFilter.type, activeFilter.value);
            }
          }
        }
      }
    }, {
      key: "_scaleFilterSize",
      value: function _scaleFilterSize(el) {
        var setAttributes = function setAttributes(attrs) {
          for (var key in attrs) {
            if (attrs.hasOwnProperty(key)) {
              el.setAttribute(key, attrs[key]);
            }
          }
        };

        setAttributes({
          width: '200%',
          height: '200%',
          x: '-50%',
          y: '-50%'
        });
      }
    }]);

    return Filters;
  }();

  /**
   * ApexCharts Graphics Class for all drawing operations.
   *
   * @module Graphics
   **/

  var Graphics = /*#__PURE__*/function () {
    function Graphics(ctx) {
      _classCallCheck(this, Graphics);

      this.ctx = ctx;
      this.w = ctx.w;
    }

    _createClass(Graphics, [{
      key: "drawLine",
      value: function drawLine(x1, y1, x2, y2) {
        var lineColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#a8a8a8';
        var dashArray = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
        var strokeWidth = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
        var w = this.w;
        var line = w.globals.dom.Paper.line().attr({
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2,
          stroke: lineColor,
          'stroke-dasharray': dashArray,
          'stroke-width': strokeWidth
        });
        return line;
      }
    }, {
      key: "drawRect",
      value: function drawRect() {
        var x1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var x2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var y2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var radius = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        var color = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '#fefefe';
        var opacity = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
        var strokeWidth = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
        var strokeColor = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
        var strokeDashArray = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
        var w = this.w;
        var rect = w.globals.dom.Paper.rect();
        rect.attr({
          x: x1,
          y: y1,
          width: x2 > 0 ? x2 : 0,
          height: y2 > 0 ? y2 : 0,
          rx: radius,
          ry: radius,
          opacity: opacity,
          'stroke-width': strokeWidth !== null ? strokeWidth : 0,
          stroke: strokeColor !== null ? strokeColor : 'none',
          'stroke-dasharray': strokeDashArray
        }); // fix apexcharts.js#1410

        rect.node.setAttribute('fill', color);
        return rect;
      }
    }, {
      key: "drawPolygon",
      value: function drawPolygon(polygonString) {
        var stroke = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#e1e1e1';
        var strokeWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var fill = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'none';
        var w = this.w;
        var polygon = w.globals.dom.Paper.polygon(polygonString).attr({
          fill: fill,
          stroke: stroke,
          'stroke-width': strokeWidth
        });
        return polygon;
      }
    }, {
      key: "drawCircle",
      value: function drawCircle(radius) {
        var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var w = this.w;
        var c = w.globals.dom.Paper.circle(radius * 2);

        if (attrs !== null) {
          c.attr(attrs);
        }

        return c;
      }
    }, {
      key: "drawPath",
      value: function drawPath(_ref) {
        var _ref$d = _ref.d,
            d = _ref$d === void 0 ? '' : _ref$d,
            _ref$stroke = _ref.stroke,
            stroke = _ref$stroke === void 0 ? '#a8a8a8' : _ref$stroke,
            _ref$strokeWidth = _ref.strokeWidth,
            strokeWidth = _ref$strokeWidth === void 0 ? 1 : _ref$strokeWidth,
            fill = _ref.fill,
            _ref$fillOpacity = _ref.fillOpacity,
            fillOpacity = _ref$fillOpacity === void 0 ? 1 : _ref$fillOpacity,
            _ref$strokeOpacity = _ref.strokeOpacity,
            strokeOpacity = _ref$strokeOpacity === void 0 ? 1 : _ref$strokeOpacity,
            classes = _ref.classes,
            _ref$strokeLinecap = _ref.strokeLinecap,
            strokeLinecap = _ref$strokeLinecap === void 0 ? null : _ref$strokeLinecap,
            _ref$strokeDashArray = _ref.strokeDashArray,
            strokeDashArray = _ref$strokeDashArray === void 0 ? 0 : _ref$strokeDashArray;
        var w = this.w;

        if (strokeLinecap === null) {
          strokeLinecap = w.config.stroke.lineCap;
        }

        if (d.indexOf('undefined') > -1 || d.indexOf('NaN') > -1) {
          d = "M 0 ".concat(w.globals.gridHeight);
        }

        var p = w.globals.dom.Paper.path(d).attr({
          fill: fill,
          'fill-opacity': fillOpacity,
          stroke: stroke,
          'stroke-opacity': strokeOpacity,
          'stroke-linecap': strokeLinecap,
          'stroke-width': strokeWidth,
          'stroke-dasharray': strokeDashArray,
          class: classes
        });
        return p;
      }
    }, {
      key: "group",
      value: function group() {
        var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var w = this.w;
        var g = w.globals.dom.Paper.group();

        if (attrs !== null) {
          g.attr(attrs);
        }

        return g;
      }
    }, {
      key: "move",
      value: function move(x, y) {
        var move = ['M', x, y].join(' ');
        return move;
      }
    }, {
      key: "line",
      value: function line(x, y) {
        var hORv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var line = null;

        if (hORv === null) {
          line = ['L', x, y].join(' ');
        } else if (hORv === 'H') {
          line = ['H', x].join(' ');
        } else if (hORv === 'V') {
          line = ['V', y].join(' ');
        }

        return line;
      }
    }, {
      key: "curve",
      value: function curve(x1, y1, x2, y2, x, y) {
        var curve = ['C', x1, y1, x2, y2, x, y].join(' ');
        return curve;
      }
    }, {
      key: "quadraticCurve",
      value: function quadraticCurve(x1, y1, x, y) {
        var curve = ['Q', x1, y1, x, y].join(' ');
        return curve;
      }
    }, {
      key: "arc",
      value: function arc(rx, ry, axisRotation, largeArcFlag, sweepFlag, x, y) {
        var relative = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
        var coord = 'A';
        if (relative) coord = 'a';
        var arc = [coord, rx, ry, axisRotation, largeArcFlag, sweepFlag, x, y].join(' ');
        return arc;
      }
      /**
       * @memberof Graphics
       * @param {object}
       *  i = series's index
       *  realIndex = realIndex is series's actual index when it was drawn time. After several redraws, the iterating "i" may change in loops, but realIndex doesn't
       *  pathFrom = existing pathFrom to animateTo
       *  pathTo = new Path to which d attr will be animated from pathFrom to pathTo
       *  stroke = line Color
       *  strokeWidth = width of path Line
       *  fill = it can be gradient, single color, pattern or image
       *  animationDelay = how much to delay when starting animation (in milliseconds)
       *  dataChangeSpeed = for dynamic animations, when data changes
       *  className = class attribute to add
       * @return {object} svg.js path object
       **/

    }, {
      key: "renderPaths",
      value: function renderPaths(_ref2) {
        var j = _ref2.j,
            realIndex = _ref2.realIndex,
            pathFrom = _ref2.pathFrom,
            pathTo = _ref2.pathTo,
            stroke = _ref2.stroke,
            strokeWidth = _ref2.strokeWidth,
            strokeLinecap = _ref2.strokeLinecap,
            fill = _ref2.fill,
            animationDelay = _ref2.animationDelay,
            initialSpeed = _ref2.initialSpeed,
            dataChangeSpeed = _ref2.dataChangeSpeed,
            className = _ref2.className,
            _ref2$shouldClipToGri = _ref2.shouldClipToGrid,
            shouldClipToGrid = _ref2$shouldClipToGri === void 0 ? true : _ref2$shouldClipToGri,
            _ref2$bindEventsOnPat = _ref2.bindEventsOnPaths,
            bindEventsOnPaths = _ref2$bindEventsOnPat === void 0 ? true : _ref2$bindEventsOnPat,
            _ref2$drawShadow = _ref2.drawShadow,
            drawShadow = _ref2$drawShadow === void 0 ? true : _ref2$drawShadow;
        var w = this.w;
        var filters = new Filters(this.ctx);
        var anim = new Animations(this.ctx);
        var initialAnim = this.w.config.chart.animations.enabled;
        var dynamicAnim = initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled;
        var d;
        var shouldAnimate = !!(initialAnim && !w.globals.resized || dynamicAnim && w.globals.dataChanged && w.globals.shouldAnimate);

        if (shouldAnimate) {
          d = pathFrom;
        } else {
          d = pathTo;
          w.globals.animationEnded = true;
        }

        var strokeDashArrayOpt = w.config.stroke.dashArray;
        var strokeDashArray = 0;

        if (Array.isArray(strokeDashArrayOpt)) {
          strokeDashArray = strokeDashArrayOpt[realIndex];
        } else {
          strokeDashArray = w.config.stroke.dashArray;
        }

        var el = this.drawPath({
          d: d,
          stroke: stroke,
          strokeWidth: strokeWidth,
          fill: fill,
          fillOpacity: 1,
          classes: className,
          strokeLinecap: strokeLinecap,
          strokeDashArray: strokeDashArray
        });
        el.attr('index', realIndex);

        if (shouldClipToGrid) {
          el.attr({
            'clip-path': "url(#gridRectMask".concat(w.globals.cuid, ")")
          });
        } // const defaultFilter = el.filterer


        if (w.config.states.normal.filter.type !== 'none') {
          filters.getDefaultFilter(el, realIndex);
        } else {
          if (w.config.chart.dropShadow.enabled && drawShadow) {
            if (!w.config.chart.dropShadow.enabledOnSeries || w.config.chart.dropShadow.enabledOnSeries && w.config.chart.dropShadow.enabledOnSeries.indexOf(realIndex) !== -1) {
              var shadow = w.config.chart.dropShadow;
              filters.dropShadow(el, shadow, realIndex);
            }
          }
        }

        if (bindEventsOnPaths) {
          el.node.addEventListener('mouseenter', this.pathMouseEnter.bind(this, el));
          el.node.addEventListener('mouseleave', this.pathMouseLeave.bind(this, el));
          el.node.addEventListener('mousedown', this.pathMouseDown.bind(this, el));
        }

        el.attr({
          pathTo: pathTo,
          pathFrom: pathFrom
        });
        var defaultAnimateOpts = {
          el: el,
          j: j,
          realIndex: realIndex,
          pathFrom: pathFrom,
          pathTo: pathTo,
          fill: fill,
          strokeWidth: strokeWidth,
          delay: animationDelay
        };

        if (initialAnim && !w.globals.resized && !w.globals.dataChanged) {
          anim.animatePathsGradually(_objectSpread2(_objectSpread2({}, defaultAnimateOpts), {}, {
            speed: initialSpeed
          }));
        } else {
          if (w.globals.resized || !w.globals.dataChanged) {
            anim.showDelayedElements();
          }
        }

        if (w.globals.dataChanged && dynamicAnim && shouldAnimate) {
          anim.animatePathsGradually(_objectSpread2(_objectSpread2({}, defaultAnimateOpts), {}, {
            speed: dataChangeSpeed
          }));
        }

        return el;
      }
    }, {
      key: "drawPattern",
      value: function drawPattern(style, width, height) {
        var stroke = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#a8a8a8';
        var strokeWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        var w = this.w;
        var p = w.globals.dom.Paper.pattern(width, height, function (add) {
          if (style === 'horizontalLines') {
            add.line(0, 0, height, 0).stroke({
              color: stroke,
              width: strokeWidth + 1
            });
          } else if (style === 'verticalLines') {
            add.line(0, 0, 0, width).stroke({
              color: stroke,
              width: strokeWidth + 1
            });
          } else if (style === 'slantedLines') {
            add.line(0, 0, width, height).stroke({
              color: stroke,
              width: strokeWidth
            });
          } else if (style === 'squares') {
            add.rect(width, height).fill('none').stroke({
              color: stroke,
              width: strokeWidth
            });
          } else if (style === 'circles') {
            add.circle(width).fill('none').stroke({
              color: stroke,
              width: strokeWidth
            });
          }
        });
        return p;
      }
    }, {
      key: "drawGradient",
      value: function drawGradient(style, gfrom, gto, opacityFrom, opacityTo) {
        var size = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
        var stops = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
        var colorStops = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
        var i = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
        var w = this.w;
        var g;

        if (gfrom.length < 9 && gfrom.indexOf('#') === 0) {
          // if the hex contains alpha and is of 9 digit, skip the opacity
          gfrom = Utils.hexToRgba(gfrom, opacityFrom);
        }

        if (gto.length < 9 && gto.indexOf('#') === 0) {
          gto = Utils.hexToRgba(gto, opacityTo);
        }

        var stop1 = 0;
        var stop2 = 1;
        var stop3 = 1;
        var stop4 = null;

        if (stops !== null) {
          stop1 = typeof stops[0] !== 'undefined' ? stops[0] / 100 : 0;
          stop2 = typeof stops[1] !== 'undefined' ? stops[1] / 100 : 1;
          stop3 = typeof stops[2] !== 'undefined' ? stops[2] / 100 : 1;
          stop4 = typeof stops[3] !== 'undefined' ? stops[3] / 100 : null;
        }

        var radial = !!(w.config.chart.type === 'donut' || w.config.chart.type === 'pie' || w.config.chart.type === 'polarArea' || w.config.chart.type === 'bubble');

        if (colorStops === null || colorStops.length === 0) {
          g = w.globals.dom.Paper.gradient(radial ? 'radial' : 'linear', function (stop) {
            stop.at(stop1, gfrom, opacityFrom);
            stop.at(stop2, gto, opacityTo);
            stop.at(stop3, gto, opacityTo);

            if (stop4 !== null) {
              stop.at(stop4, gfrom, opacityFrom);
            }
          });
        } else {
          g = w.globals.dom.Paper.gradient(radial ? 'radial' : 'linear', function (stop) {
            var gradientStops = Array.isArray(colorStops[i]) ? colorStops[i] : colorStops;
            gradientStops.forEach(function (s) {
              stop.at(s.offset / 100, s.color, s.opacity);
            });
          });
        }

        if (!radial) {
          if (style === 'vertical') {
            g.from(0, 0).to(0, 1);
          } else if (style === 'diagonal') {
            g.from(0, 0).to(1, 1);
          } else if (style === 'horizontal') {
            g.from(0, 1).to(1, 1);
          } else if (style === 'diagonal2') {
            g.from(1, 0).to(0, 1);
          }
        } else {
          var offx = w.globals.gridWidth / 2;
          var offy = w.globals.gridHeight / 2;

          if (w.config.chart.type !== 'bubble') {
            g.attr({
              gradientUnits: 'userSpaceOnUse',
              cx: offx,
              cy: offy,
              r: size
            });
          } else {
            g.attr({
              cx: 0.5,
              cy: 0.5,
              r: 0.8,
              fx: 0.2,
              fy: 0.2
            });
          }
        }

        return g;
      }
    }, {
      key: "drawText",
      value: function drawText(_ref3) {
        var x = _ref3.x,
            y = _ref3.y,
            text = _ref3.text,
            textAnchor = _ref3.textAnchor,
            fontSize = _ref3.fontSize,
            fontFamily = _ref3.fontFamily,
            fontWeight = _ref3.fontWeight,
            foreColor = _ref3.foreColor,
            opacity = _ref3.opacity,
            _ref3$cssClass = _ref3.cssClass,
            cssClass = _ref3$cssClass === void 0 ? '' : _ref3$cssClass,
            _ref3$isPlainText = _ref3.isPlainText,
            isPlainText = _ref3$isPlainText === void 0 ? true : _ref3$isPlainText;
        var w = this.w;
        if (typeof text === 'undefined') text = '';

        if (!textAnchor) {
          textAnchor = 'start';
        }

        if (!foreColor || !foreColor.length) {
          foreColor = w.config.chart.foreColor;
        }

        fontFamily = fontFamily || w.config.chart.fontFamily;
        fontWeight = fontWeight || 'regular';
        var elText;

        if (Array.isArray(text)) {
          elText = w.globals.dom.Paper.text(function (add) {
            for (var i = 0; i < text.length; i++) {
              i === 0 ? add.tspan(text[i]) : add.tspan(text[i]).newLine();
            }
          });
        } else {
          elText = isPlainText ? w.globals.dom.Paper.plain(text) : w.globals.dom.Paper.text(function (add) {
            return add.tspan(text);
          });
        }

        elText.attr({
          x: x,
          y: y,
          'text-anchor': textAnchor,
          'dominant-baseline': 'auto',
          'font-size': fontSize,
          'font-family': fontFamily,
          'font-weight': fontWeight,
          fill: foreColor,
          class: 'apexcharts-text ' + cssClass
        });
        elText.node.style.fontFamily = fontFamily;
        elText.node.style.opacity = opacity;
        return elText;
      }
    }, {
      key: "drawMarker",
      value: function drawMarker(x, y, opts) {
        x = x || 0;
        var size = opts.pSize || 0;
        var elPoint = null;

        if (opts.shape === 'square' || opts.shape === 'rect') {
          var radius = opts.pRadius === undefined ? size / 2 : opts.pRadius;

          if (y === null || !size) {
            size = 0;
            radius = 0;
          }

          var nSize = size * 1.2 + radius;
          var p = this.drawRect(nSize, nSize, nSize, nSize, radius);
          p.attr({
            x: x - nSize / 2,
            y: y - nSize / 2,
            cx: x,
            cy: y,
            class: opts.class ? opts.class : '',
            fill: opts.pointFillColor,
            'fill-opacity': opts.pointFillOpacity ? opts.pointFillOpacity : 1,
            stroke: opts.pointStrokeColor,
            'stroke-width': opts.pointStrokeWidth ? opts.pointStrokeWidth : 0,
            'stroke-opacity': opts.pointStrokeOpacity ? opts.pointStrokeOpacity : 1
          });
          elPoint = p;
        } else if (opts.shape === 'circle' || !opts.shape) {
          if (!Utils.isNumber(y)) {
            size = 0;
            y = 0;
          } // let nSize = size - opts.pRadius / 2 < 0 ? 0 : size - opts.pRadius / 2


          elPoint = this.drawCircle(size, {
            cx: x,
            cy: y,
            class: opts.class ? opts.class : '',
            stroke: opts.pointStrokeColor,
            fill: opts.pointFillColor,
            'fill-opacity': opts.pointFillOpacity ? opts.pointFillOpacity : 1,
            'stroke-width': opts.pointStrokeWidth ? opts.pointStrokeWidth : 0,
            'stroke-opacity': opts.pointStrokeOpacity ? opts.pointStrokeOpacity : 1
          });
        }

        return elPoint;
      }
    }, {
      key: "pathMouseEnter",
      value: function pathMouseEnter(path, e) {
        var w = this.w;
        var filters = new Filters(this.ctx);
        var i = parseInt(path.node.getAttribute('index'), 10);
        var j = parseInt(path.node.getAttribute('j'), 10);

        if (typeof w.config.chart.events.dataPointMouseEnter === 'function') {
          w.config.chart.events.dataPointMouseEnter(e, this.ctx, {
            seriesIndex: i,
            dataPointIndex: j,
            w: w
          });
        }

        this.ctx.events.fireEvent('dataPointMouseEnter', [e, this.ctx, {
          seriesIndex: i,
          dataPointIndex: j,
          w: w
        }]);

        if (w.config.states.active.filter.type !== 'none') {
          if (path.node.getAttribute('selected') === 'true') {
            return;
          }
        }

        if (w.config.states.hover.filter.type !== 'none') {
          if (w.config.states.active.filter.type !== 'none' && !w.globals.isTouchDevice) {
            var hoverFilter = w.config.states.hover.filter;
            filters.applyFilter(path, i, hoverFilter.type, hoverFilter.value);
          }
        }
      }
    }, {
      key: "pathMouseLeave",
      value: function pathMouseLeave(path, e) {
        var w = this.w;
        var filters = new Filters(this.ctx);
        var i = parseInt(path.node.getAttribute('index'), 10);
        var j = parseInt(path.node.getAttribute('j'), 10);

        if (typeof w.config.chart.events.dataPointMouseLeave === 'function') {
          w.config.chart.events.dataPointMouseLeave(e, this.ctx, {
            seriesIndex: i,
            dataPointIndex: j,
            w: w
          });
        }

        this.ctx.events.fireEvent('dataPointMouseLeave', [e, this.ctx, {
          seriesIndex: i,
          dataPointIndex: j,
          w: w
        }]);

        if (w.config.states.active.filter.type !== 'none') {
          if (path.node.getAttribute('selected') === 'true') {
            return;
          }
        }

        if (w.config.states.hover.filter.type !== 'none') {
          filters.getDefaultFilter(path, i);
        }
      }
    }, {
      key: "pathMouseDown",
      value: function pathMouseDown(path, e) {
        var w = this.w;
        var filters = new Filters(this.ctx);
        var i = parseInt(path.node.getAttribute('index'), 10);
        var j = parseInt(path.node.getAttribute('j'), 10);
        var selected = 'false';

        if (path.node.getAttribute('selected') === 'true') {
          path.node.setAttribute('selected', 'false');

          if (w.globals.selectedDataPoints[i].indexOf(j) > -1) {
            var index = w.globals.selectedDataPoints[i].indexOf(j);
            w.globals.selectedDataPoints[i].splice(index, 1);
          }
        } else {
          if (!w.config.states.active.allowMultipleDataPointsSelection && w.globals.selectedDataPoints.length > 0) {
            w.globals.selectedDataPoints = [];
            var elPaths = w.globals.dom.Paper.select('.apexcharts-series path').members;
            var elCircles = w.globals.dom.Paper.select('.apexcharts-series circle, .apexcharts-series rect').members;

            var deSelect = function deSelect(els) {
              Array.prototype.forEach.call(els, function (el) {
                el.node.setAttribute('selected', 'false');
                filters.getDefaultFilter(el, i);
              });
            };

            deSelect(elPaths);
            deSelect(elCircles);
          }

          path.node.setAttribute('selected', 'true');
          selected = 'true';

          if (typeof w.globals.selectedDataPoints[i] === 'undefined') {
            w.globals.selectedDataPoints[i] = [];
          }

          w.globals.selectedDataPoints[i].push(j);
        }

        if (selected === 'true') {
          var activeFilter = w.config.states.active.filter;

          if (activeFilter !== 'none') {
            filters.applyFilter(path, i, activeFilter.type, activeFilter.value);
          }
        } else {
          if (w.config.states.active.filter.type !== 'none') {
            filters.getDefaultFilter(path, i);
          }
        }

        if (typeof w.config.chart.events.dataPointSelection === 'function') {
          w.config.chart.events.dataPointSelection(e, this.ctx, {
            selectedDataPoints: w.globals.selectedDataPoints,
            seriesIndex: i,
            dataPointIndex: j,
            w: w
          });
        }

        if (e) {
          this.ctx.events.fireEvent('dataPointSelection', [e, this.ctx, {
            selectedDataPoints: w.globals.selectedDataPoints,
            seriesIndex: i,
            dataPointIndex: j,
            w: w
          }]);
        }
      }
    }, {
      key: "rotateAroundCenter",
      value: function rotateAroundCenter(el) {
        var coord = el.getBBox();
        var x = coord.x + coord.width / 2;
        var y = coord.y + coord.height / 2;
        return {
          x: x,
          y: y
        };
      }
    }, {
      key: "getTextRects",
      value: function getTextRects(text, fontSize, fontFamily, transform) {
        var useBBox = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
        var w = this.w;
        var virtualText = this.drawText({
          x: -200,
          y: -200,
          text: text,
          textAnchor: 'start',
          fontSize: fontSize,
          fontFamily: fontFamily,
          foreColor: '#fff',
          opacity: 0
        });

        if (transform) {
          virtualText.attr('transform', transform);
        }

        w.globals.dom.Paper.add(virtualText);
        var rect = virtualText.bbox();

        if (!useBBox) {
          rect = virtualText.node.getBoundingClientRect();
        }

        virtualText.remove();
        return {
          width: rect.width,
          height: rect.height
        };
      }
      /**
       * append ... to long text
       * http://stackoverflow.com/questions/9241315/trimming-text-to-a-given-pixel-width-in-svg
       * @memberof Graphics
       **/

    }, {
      key: "placeTextWithEllipsis",
      value: function placeTextWithEllipsis(textObj, textString, width) {
        if (typeof textObj.getComputedTextLength !== 'function') return;
        textObj.textContent = textString;

        if (textString.length > 0) {
          // ellipsis is needed
          if (textObj.getComputedTextLength() >= width / 1.1) {
            for (var x = textString.length - 3; x > 0; x -= 3) {
              if (textObj.getSubStringLength(0, x) <= width / 1.1) {
                textObj.textContent = textString.substring(0, x) + '...';
                return;
              }
            }

            textObj.textContent = '.'; // can't place at all
          }
        }
      }
    }], [{
      key: "setAttrs",
      value: function setAttrs(el, attrs) {
        for (var key in attrs) {
          if (attrs.hasOwnProperty(key)) {
            el.setAttribute(key, attrs[key]);
          }
        }
      }
    }]);

    return Graphics;
  }();

  var Helpers = /*#__PURE__*/function () {
    function Helpers(annoCtx) {
      _classCallCheck(this, Helpers);

      this.w = annoCtx.w;
      this.annoCtx = annoCtx;
    }

    _createClass(Helpers, [{
      key: "setOrientations",
      value: function setOrientations(anno) {
        var annoIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var w = this.w;

        if (anno.label.orientation === 'vertical') {
          var i = annoIndex !== null ? annoIndex : 0;
          var xAnno = w.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(i, "']"));

          if (xAnno !== null) {
            var xAnnoCoord = xAnno.getBoundingClientRect();
            xAnno.setAttribute('x', parseFloat(xAnno.getAttribute('x')) - xAnnoCoord.height + 4);

            if (anno.label.position === 'top') {
              xAnno.setAttribute('y', parseFloat(xAnno.getAttribute('y')) + xAnnoCoord.width);
            } else {
              xAnno.setAttribute('y', parseFloat(xAnno.getAttribute('y')) - xAnnoCoord.width);
            }

            var annoRotatingCenter = this.annoCtx.graphics.rotateAroundCenter(xAnno);
            var x = annoRotatingCenter.x;
            var y = annoRotatingCenter.y;
            xAnno.setAttribute('transform', "rotate(-90 ".concat(x, " ").concat(y, ")"));
          }
        }
      }
    }, {
      key: "addBackgroundToAnno",
      value: function addBackgroundToAnno(annoEl, anno) {
        var w = this.w;
        if (!annoEl || !anno.label.text || anno.label.text && !anno.label.text.trim()) return null;
        var elGridRect = w.globals.dom.baseEl.querySelector('.apexcharts-grid').getBoundingClientRect();
        var coords = annoEl.getBoundingClientRect();
        var pleft = anno.label.style.padding.left;
        var pright = anno.label.style.padding.right;
        var ptop = anno.label.style.padding.top;
        var pbottom = anno.label.style.padding.bottom;

        if (anno.label.orientation === 'vertical') {
          ptop = anno.label.style.padding.left;
          pbottom = anno.label.style.padding.right;
          pleft = anno.label.style.padding.top;
          pright = anno.label.style.padding.bottom;
        }

        var x1 = coords.left - elGridRect.left - pleft;
        var y1 = coords.top - elGridRect.top - ptop;
        var elRect = this.annoCtx.graphics.drawRect(x1 - w.globals.barPadForNumericAxis, y1, coords.width + pleft + pright, coords.height + ptop + pbottom, anno.label.borderRadius, anno.label.style.background, 1, anno.label.borderWidth, anno.label.borderColor, 0);

        if (anno.id) {
          elRect.node.classList.add(anno.id);
        }

        return elRect;
      }
    }, {
      key: "annotationsBackground",
      value: function annotationsBackground() {
        var _this = this;

        var w = this.w;

        var add = function add(anno, i, type) {
          var annoLabel = w.globals.dom.baseEl.querySelector(".apexcharts-".concat(type, "-annotations .apexcharts-").concat(type, "-annotation-label[rel='").concat(i, "']"));

          if (annoLabel) {
            var parent = annoLabel.parentNode;

            var elRect = _this.addBackgroundToAnno(annoLabel, anno);

            if (elRect) {
              parent.insertBefore(elRect.node, annoLabel);
            }
          }
        };

        w.config.annotations.xaxis.map(function (anno, i) {
          add(anno, i, 'xaxis');
        });
        w.config.annotations.yaxis.map(function (anno, i) {
          add(anno, i, 'yaxis');
        });
        w.config.annotations.points.map(function (anno, i) {
          add(anno, i, 'point');
        });
      }
    }, {
      key: "getStringX",
      value: function getStringX(x) {
        var w = this.w;
        var rX = x;

        if (w.config.xaxis.convertedCatToNumeric && w.globals.categoryLabels.length) {
          x = w.globals.categoryLabels.indexOf(x) + 1;
        }

        var catIndex = w.globals.labels.indexOf(x);
        var xLabel = w.globals.dom.baseEl.querySelector('.apexcharts-xaxis-texts-g text:nth-child(' + (catIndex + 1) + ')');

        if (xLabel) {
          rX = parseFloat(xLabel.getAttribute('x'));
        }

        return rX;
      }
    }]);

    return Helpers;
  }();

  var XAnnotations = /*#__PURE__*/function () {
    function XAnnotations(annoCtx) {
      _classCallCheck(this, XAnnotations);

      this.w = annoCtx.w;
      this.annoCtx = annoCtx;
      this.invertAxis = this.annoCtx.invertAxis;
    }

    _createClass(XAnnotations, [{
      key: "addXaxisAnnotation",
      value: function addXaxisAnnotation(anno, parent, index) {
        var w = this.w;
        var min = this.invertAxis ? w.globals.minY : w.globals.minX;
        var max = this.invertAxis ? w.globals.maxY : w.globals.maxX;
        var range = this.invertAxis ? w.globals.yRange[0] : w.globals.xRange;
        var x1 = (anno.x - min) / (range / w.globals.gridWidth);

        if (this.annoCtx.inversedReversedAxis) {
          x1 = (max - anno.x) / (range / w.globals.gridWidth);
        }

        var text = anno.label.text;

        if ((w.config.xaxis.type === 'category' || w.config.xaxis.convertedCatToNumeric) && !this.invertAxis && !w.globals.dataFormatXNumeric) {
          x1 = this.annoCtx.helpers.getStringX(anno.x);
        }

        var strokeDashArray = anno.strokeDashArray;
        if (!Utils.isNumber(x1)) return;

        if (anno.x2 === null || typeof anno.x2 === 'undefined') {
          var line = this.annoCtx.graphics.drawLine(x1 + anno.offsetX, // x1
          0 + anno.offsetY, // y1
          x1 + anno.offsetX, // x2
          w.globals.gridHeight + anno.offsetY, // y2
          anno.borderColor, // lineColor
          strokeDashArray, //dashArray
          anno.borderWidth);
          parent.appendChild(line.node);

          if (anno.id) {
            line.node.classList.add(anno.id);
          }
        } else {
          var x2 = (anno.x2 - min) / (range / w.globals.gridWidth);

          if (this.annoCtx.inversedReversedAxis) {
            x2 = (max - anno.x2) / (range / w.globals.gridWidth);
          }

          if ((w.config.xaxis.type === 'category' || w.config.xaxis.convertedCatToNumeric) && !this.invertAxis && !w.globals.dataFormatXNumeric) {
            x2 = this.annoCtx.helpers.getStringX(anno.x2);
          }

          if (x2 < x1) {
            var temp = x1;
            x1 = x2;
            x2 = temp;
          }

          var rect = this.annoCtx.graphics.drawRect(x1 + anno.offsetX, // x1
          0 + anno.offsetY, // y1
          x2 - x1, // x2
          w.globals.gridHeight + anno.offsetY, // y2
          0, // radius
          anno.fillColor, // color
          anno.opacity, // opacity,
          1, // strokeWidth
          anno.borderColor, // strokeColor
          strokeDashArray // stokeDashArray
          );
          rect.node.classList.add('apexcharts-annotation-rect');
          rect.attr('clip-path', "url(#gridRectMask".concat(w.globals.cuid, ")"));
          parent.appendChild(rect.node);

          if (anno.id) {
            rect.node.classList.add(anno.id);
          }
        }

        var textY = anno.label.position === 'top' ? 4 : w.globals.gridHeight;
        var textRects = this.annoCtx.graphics.getTextRects(text, parseFloat(anno.label.style.fontSize));
        var elText = this.annoCtx.graphics.drawText({
          x: x1 + anno.label.offsetX,
          y: textY + anno.label.offsetY - (anno.label.orientation === 'vertical' ? anno.label.position === 'top' ? textRects.width / 2 - 12 : -textRects.width / 2 : 0),
          text: text,
          textAnchor: anno.label.textAnchor,
          fontSize: anno.label.style.fontSize,
          fontFamily: anno.label.style.fontFamily,
          fontWeight: anno.label.style.fontWeight,
          foreColor: anno.label.style.color,
          cssClass: "apexcharts-xaxis-annotation-label ".concat(anno.label.style.cssClass, " ").concat(anno.id ? anno.id : '')
        });
        elText.attr({
          rel: index
        });
        parent.appendChild(elText.node); // after placing the annotations on svg, set any vertically placed annotations

        this.annoCtx.helpers.setOrientations(anno, index);
      }
    }, {
      key: "drawXAxisAnnotations",
      value: function drawXAxisAnnotations() {
        var _this = this;

        var w = this.w;
        var elg = this.annoCtx.graphics.group({
          class: 'apexcharts-xaxis-annotations'
        });
        w.config.annotations.xaxis.map(function (anno, index) {
          _this.addXaxisAnnotation(anno, elg.node, index);
        });
        return elg;
      }
    }]);

    return XAnnotations;
  }();

  /*
   ** Util functions which are dependent on ApexCharts instance
   */
  var CoreUtils = /*#__PURE__*/function () {
    function CoreUtils(ctx) {
      _classCallCheck(this, CoreUtils);

      this.ctx = ctx;
      this.w = ctx.w;
    }

    _createClass(CoreUtils, [{
      key: "getStackedSeriesTotals",

      /**
       * @memberof CoreUtils
       * returns the sum of all individual values in a multiple stacked series
       * Eg. w.globals.series = [[32,33,43,12], [2,3,5,1]]
       *  @return [34,36,48,13]
       **/
      value: function getStackedSeriesTotals() {
        var w = this.w;
        var total = [];
        if (w.globals.series.length === 0) return total;

        for (var i = 0; i < w.globals.series[w.globals.maxValsInArrayIndex].length; i++) {
          var t = 0;

          for (var j = 0; j < w.globals.series.length; j++) {
            if (typeof w.globals.series[j][i] !== 'undefined') {
              t += w.globals.series[j][i];
            }
          }

          total.push(t);
        }

        w.globals.stackedSeriesTotals = total;
        return total;
      } // get total of the all values inside all series

    }, {
      key: "getSeriesTotalByIndex",
      value: function getSeriesTotalByIndex() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (index === null) {
          // non-plot chart types - pie / donut / circle
          return this.w.config.series.reduce(function (acc, cur) {
            return acc + cur;
          }, 0);
        } else {
          // axis charts - supporting multiple series
          return this.w.globals.series[index].reduce(function (acc, cur) {
            return acc + cur;
          }, 0);
        }
      }
    }, {
      key: "isSeriesNull",
      value: function isSeriesNull() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var r = [];

        if (index === null) {
          // non-plot chart types - pie / donut / circle
          r = this.w.config.series.filter(function (d) {
            return d !== null;
          });
        } else {
          // axis charts - supporting multiple series
          r = this.w.config.series[index].data.filter(function (d) {
            return d !== null;
          });
        }

        return r.length === 0;
      }
    }, {
      key: "seriesHaveSameValues",
      value: function seriesHaveSameValues(index) {
        return this.w.globals.series[index].every(function (val, i, arr) {
          return val === arr[0];
        });
      }
    }, {
      key: "getCategoryLabels",
      value: function getCategoryLabels(labels) {
        var w = this.w;
        var catLabels = labels.slice();

        if (w.config.xaxis.convertedCatToNumeric) {
          catLabels = labels.map(function (i, li) {
            return w.config.xaxis.labels.formatter(i - w.globals.minX + 1);
          });
        }

        return catLabels;
      } // maxValsInArrayIndex is the index of series[] which has the largest number of items

    }, {
      key: "getLargestSeries",
      value: function getLargestSeries() {
        var w = this.w;
        w.globals.maxValsInArrayIndex = w.globals.series.map(function (a) {
          return a.length;
        }).indexOf(Math.max.apply(Math, w.globals.series.map(function (a) {
          return a.length;
        })));
      }
    }, {
      key: "getLargestMarkerSize",
      value: function getLargestMarkerSize() {
        var w = this.w;
        var size = 0;
        w.globals.markers.size.forEach(function (m) {
          size = Math.max(size, m);
        });
        w.globals.markers.largestSize = size;
        return size;
      }
      /**
       * @memberof Core
       * returns the sum of all values in a series
       * Eg. w.globals.series = [[32,33,43,12], [2,3,5,1]]
       *  @return [120, 11]
       **/

    }, {
      key: "getSeriesTotals",
      value: function getSeriesTotals() {
        var w = this.w;
        w.globals.seriesTotals = w.globals.series.map(function (ser, index) {
          var total = 0;

          if (Array.isArray(ser)) {
            for (var j = 0; j < ser.length; j++) {
              total += ser[j];
            }
          } else {
            // for pie/donuts/gauges
            total += ser;
          }

          return total;
        });
      }
    }, {
      key: "getSeriesTotalsXRange",
      value: function getSeriesTotalsXRange(minX, maxX) {
        var w = this.w;
        var seriesTotalsXRange = w.globals.series.map(function (ser, index) {
          var total = 0;

          for (var j = 0; j < ser.length; j++) {
            if (w.globals.seriesX[index][j] > minX && w.globals.seriesX[index][j] < maxX) {
              total += ser[j];
            }
          }

          return total;
        });
        return seriesTotalsXRange;
      }
      /**
       * @memberof CoreUtils
       * returns the percentage value of all individual values which can be used in a 100% stacked series
       * Eg. w.globals.series = [[32, 33, 43, 12], [2, 3, 5, 1]]
       *  @return [[94.11, 91.66, 89.58, 92.30], [5.88, 8.33, 10.41, 7.7]]
       **/

    }, {
      key: "getPercentSeries",
      value: function getPercentSeries() {
        var w = this.w;
        w.globals.seriesPercent = w.globals.series.map(function (ser, index) {
          var seriesPercent = [];

          if (Array.isArray(ser)) {
            for (var j = 0; j < ser.length; j++) {
              var total = w.globals.stackedSeriesTotals[j];
              var percent = 0;

              if (total) {
                percent = 100 * ser[j] / total;
              }

              seriesPercent.push(percent);
            }
          } else {
            var _total = w.globals.seriesTotals.reduce(function (acc, val) {
              return acc + val;
            }, 0);

            var _percent = 100 * ser / _total;

            seriesPercent.push(_percent);
          }

          return seriesPercent;
        });
      }
    }, {
      key: "getCalculatedRatios",
      value: function getCalculatedRatios() {
        var gl = this.w.globals;
        var yRatio = [];
        var invertedYRatio = 0;
        var xRatio = 0;
        var initialXRatio = 0;
        var invertedXRatio = 0;
        var zRatio = 0;
        var baseLineY = [];
        var baseLineInvertedY = 0.1;
        var baseLineX = 0;
        gl.yRange = [];

        if (gl.isMultipleYAxis) {
          for (var i = 0; i < gl.minYArr.length; i++) {
            gl.yRange.push(Math.abs(gl.minYArr[i] - gl.maxYArr[i]));
            baseLineY.push(0);
          }
        } else {
          gl.yRange.push(Math.abs(gl.minY - gl.maxY));
        }

        gl.xRange = Math.abs(gl.maxX - gl.minX);
        gl.zRange = Math.abs(gl.maxZ - gl.minZ); // multiple y axis

        for (var _i = 0; _i < gl.yRange.length; _i++) {
          yRatio.push(gl.yRange[_i] / gl.gridHeight);
        }

        xRatio = gl.xRange / gl.gridWidth;
        initialXRatio = Math.abs(gl.initialMaxX - gl.initialMinX) / gl.gridWidth;
        invertedYRatio = gl.yRange / gl.gridWidth;
        invertedXRatio = gl.xRange / gl.gridHeight;
        zRatio = gl.zRange / gl.gridHeight * 16;

        if (!zRatio) {
          zRatio = 1;
        }

        if (gl.minY !== Number.MIN_VALUE && Math.abs(gl.minY) !== 0) {
          // Negative numbers present in series
          gl.hasNegs = true;
        }

        if (gl.isMultipleYAxis) {
          baseLineY = []; // baseline variables is the 0 of the yaxis which will be needed when there are negatives

          for (var _i2 = 0; _i2 < yRatio.length; _i2++) {
            baseLineY.push(-gl.minYArr[_i2] / yRatio[_i2]);
          }
        } else {
          baseLineY.push(-gl.minY / yRatio[0]);

          if (gl.minY !== Number.MIN_VALUE && Math.abs(gl.minY) !== 0) {
            baseLineInvertedY = -gl.minY / invertedYRatio; // this is for bar chart

            baseLineX = gl.minX / xRatio;
          }
        }

        return {
          yRatio: yRatio,
          invertedYRatio: invertedYRatio,
          zRatio: zRatio,
          xRatio: xRatio,
          initialXRatio: initialXRatio,
          invertedXRatio: invertedXRatio,
          baseLineInvertedY: baseLineInvertedY,
          baseLineY: baseLineY,
          baseLineX: baseLineX
        };
      }
    }, {
      key: "getLogSeries",
      value: function getLogSeries(series) {
        var _this = this;

        var w = this.w;
        w.globals.seriesLog = series.map(function (s, i) {
          if (w.config.yaxis[i] && w.config.yaxis[i].logarithmic) {
            return s.map(function (d) {
              if (d === null) return null;
              return _this.getLogVal(d, i);
            });
          } else {
            return s;
          }
        });
        return w.globals.invalidLogScale ? series : w.globals.seriesLog;
      }
    }, {
      key: "getLogVal",
      value: function getLogVal(d, yIndex) {
        var w = this.w;
        return (Math.log(d) - Math.log(w.globals.minYArr[yIndex])) / (Math.log(w.globals.maxYArr[yIndex]) - Math.log(w.globals.minYArr[yIndex]));
      }
    }, {
      key: "getLogYRatios",
      value: function getLogYRatios(yRatio) {
        var _this2 = this;

        var w = this.w;
        var gl = this.w.globals;
        gl.yLogRatio = yRatio.slice();
        gl.logYRange = gl.yRange.map(function (yRange, i) {
          if (w.config.yaxis[i] && _this2.w.config.yaxis[i].logarithmic) {
            var maxY = -Number.MAX_VALUE;
            var minY = Number.MIN_VALUE;
            var range = 1;
            gl.seriesLog.forEach(function (s, si) {
              s.forEach(function (v) {
                if (w.config.yaxis[si] && w.config.yaxis[si].logarithmic) {
                  maxY = Math.max(v, maxY);
                  minY = Math.min(v, minY);
                }
              });
            });
            range = Math.pow(gl.yRange[i], Math.abs(minY - maxY) / gl.yRange[i]);
            gl.yLogRatio[i] = range / gl.gridHeight;
            return range;
          }
        });
        return gl.invalidLogScale ? yRatio.slice() : gl.yLogRatio;
      } // Some config objects can be array - and we need to extend them correctly

    }], [{
      key: "checkComboSeries",
      value: function checkComboSeries(series) {
        var comboCharts = false;
        var comboBarCount = 0;
        var comboCount = 0; // if user specified a type in series too, turn on comboCharts flag

        if (series.length && typeof series[0].type !== 'undefined') {
          series.forEach(function (s) {
            if (s.type === 'bar' || s.type === 'column' || s.type === 'candlestick' || s.type === 'boxPlot') {
              comboBarCount++;
            }

            if (typeof s.type !== 'undefined') {
              comboCount++;
            }
          });
        }

        if (comboCount > 1) {
          comboCharts = true;
        }

        return {
          comboBarCount: comboBarCount,
          comboCharts: comboCharts
        };
      }
    }, {
      key: "extendArrayProps",
      value: function extendArrayProps(configInstance, options, w) {
        if (options.yaxis) {
          options = configInstance.extendYAxis(options, w);
        }

        if (options.annotations) {
          if (options.annotations.yaxis) {
            options = configInstance.extendYAxisAnnotations(options);
          }

          if (options.annotations.xaxis) {
            options = configInstance.extendXAxisAnnotations(options);
          }

          if (options.annotations.points) {
            options = configInstance.extendPointAnnotations(options);
          }
        }

        return options;
      }
    }]);

    return CoreUtils;
  }();

  var YAnnotations = /*#__PURE__*/function () {
    function YAnnotations(annoCtx) {
      _classCallCheck(this, YAnnotations);

      this.w = annoCtx.w;
      this.annoCtx = annoCtx;
    }

    _createClass(YAnnotations, [{
      key: "addYaxisAnnotation",
      value: function addYaxisAnnotation(anno, parent, index) {
        var w = this.w;
        var strokeDashArray = anno.strokeDashArray;

        var y1 = this._getY1Y2('y1', anno);

        var y2;
        var text = anno.label.text;

        if (anno.y2 === null || typeof anno.y2 === 'undefined') {
          var line = this.annoCtx.graphics.drawLine(0 + anno.offsetX, // x1
          y1 + anno.offsetY, // y1
          this._getYAxisAnnotationWidth(anno), // x2
          y1 + anno.offsetY, // y2
          anno.borderColor, // lineColor
          strokeDashArray, // dashArray
          anno.borderWidth);
          parent.appendChild(line.node);

          if (anno.id) {
            line.node.classList.add(anno.id);
          }
        } else {
          y2 = this._getY1Y2('y2', anno);

          if (y2 > y1) {
            var temp = y1;
            y1 = y2;
            y2 = temp;
          }

          var rect = this.annoCtx.graphics.drawRect(0 + anno.offsetX, // x1
          y2 + anno.offsetY, // y1
          this._getYAxisAnnotationWidth(anno), // x2
          y1 - y2, // y2
          0, // radius
          anno.fillColor, // color
          anno.opacity, // opacity,
          1, // strokeWidth
          anno.borderColor, // strokeColor
          strokeDashArray // stokeDashArray
          );
          rect.node.classList.add('apexcharts-annotation-rect');
          rect.attr('clip-path', "url(#gridRectMask".concat(w.globals.cuid, ")"));
          parent.appendChild(rect.node);

          if (anno.id) {
            rect.node.classList.add(anno.id);
          }
        }

        var textX = anno.label.position === 'right' ? w.globals.gridWidth : 0;
        var elText = this.annoCtx.graphics.drawText({
          x: textX + anno.label.offsetX,
          y: (y2 || y1) + anno.label.offsetY - 3,
          text: text,
          textAnchor: anno.label.textAnchor,
          fontSize: anno.label.style.fontSize,
          fontFamily: anno.label.style.fontFamily,
          fontWeight: anno.label.style.fontWeight,
          foreColor: anno.label.style.color,
          cssClass: "apexcharts-yaxis-annotation-label ".concat(anno.label.style.cssClass, " ").concat(anno.id ? anno.id : '')
        });
        elText.attr({
          rel: index
        });
        parent.appendChild(elText.node);
      }
    }, {
      key: "_getY1Y2",
      value: function _getY1Y2(type, anno) {
        var y = type === 'y1' ? anno.y : anno.y2;
        var yP;
        var w = this.w;

        if (this.annoCtx.invertAxis) {
          var catIndex = w.globals.labels.indexOf(y);

          if (w.config.xaxis.convertedCatToNumeric) {
            catIndex = w.globals.categoryLabels.indexOf(y);
          }

          var xLabel = w.globals.dom.baseEl.querySelector('.apexcharts-yaxis-texts-g text:nth-child(' + (catIndex + 1) + ')');

          if (xLabel) {
            yP = parseFloat(xLabel.getAttribute('y'));
          }
        } else {
          var yPos;

          if (w.config.yaxis[anno.yAxisIndex].logarithmic) {
            var coreUtils = new CoreUtils(this.annoCtx.ctx);
            y = coreUtils.getLogVal(y, anno.yAxisIndex);
            yPos = y / w.globals.yLogRatio[anno.yAxisIndex];
          } else {
            yPos = (y - w.globals.minYArr[anno.yAxisIndex]) / (w.globals.yRange[anno.yAxisIndex] / w.globals.gridHeight);
          }

          yP = w.globals.gridHeight - yPos;

          if (w.config.yaxis[anno.yAxisIndex] && w.config.yaxis[anno.yAxisIndex].reversed) {
            yP = yPos;
          }
        }

        return yP;
      }
    }, {
      key: "_getYAxisAnnotationWidth",
      value: function _getYAxisAnnotationWidth(anno) {
        // issue apexcharts.js#2009
        var w = this.w;
        var width = w.globals.gridWidth;

        if (anno.width.indexOf('%') > -1) {
          width = w.globals.gridWidth * parseInt(anno.width, 10) / 100;
        } else {
          width = parseInt(anno.width, 10);
        }

        return width + anno.offsetX;
      }
    }, {
      key: "drawYAxisAnnotations",
      value: function drawYAxisAnnotations() {
        var _this = this;

        var w = this.w;
        var elg = this.annoCtx.graphics.group({
          class: 'apexcharts-yaxis-annotations'
        });
        w.config.annotations.yaxis.map(function (anno, index) {
          _this.addYaxisAnnotation(anno, elg.node, index);
        });
        return elg;
      }
    }]);

    return YAnnotations;
  }();

  var PointAnnotations = /*#__PURE__*/function () {
    function PointAnnotations(annoCtx) {
      _classCallCheck(this, PointAnnotations);

      this.w = annoCtx.w;
      this.annoCtx = annoCtx;
    }

    _createClass(PointAnnotations, [{
      key: "addPointAnnotation",
      value: function addPointAnnotation(anno, parent, index) {
        var w = this.w;
        var x = 0;
        var y = 0;
        var pointY = 0;

        if (this.annoCtx.invertAxis) {
          console.warn('Point annotation is not supported in horizontal bar charts.');
        }

        var annoY = parseFloat(anno.y);

        if (typeof anno.x === 'string') {
          var catIndex = w.globals.labels.indexOf(anno.x);

          if (w.config.xaxis.convertedCatToNumeric) {
            catIndex = w.globals.categoryLabels.indexOf(anno.x);
          }

          x = this.annoCtx.helpers.getStringX(anno.x);

          if (anno.y === null) {
            annoY = w.globals.series[anno.seriesIndex][catIndex];
          }
        } else {
          x = (anno.x - w.globals.minX) / (w.globals.xRange / w.globals.gridWidth);
        }

        var yPos;

        if (w.config.yaxis[anno.yAxisIndex].logarithmic) {
          var coreUtils = new CoreUtils(this.annoCtx.ctx);
          annoY = coreUtils.getLogVal(annoY, anno.yAxisIndex);
          yPos = annoY / w.globals.yLogRatio[anno.yAxisIndex];
        } else {
          yPos = (annoY - w.globals.minYArr[anno.yAxisIndex]) / (w.globals.yRange[anno.yAxisIndex] / w.globals.gridHeight);
        }

        y = w.globals.gridHeight - yPos - parseFloat(anno.label.style.fontSize) - anno.marker.size;
        pointY = w.globals.gridHeight - yPos;

        if (w.config.yaxis[anno.yAxisIndex] && w.config.yaxis[anno.yAxisIndex].reversed) {
          y = yPos + parseFloat(anno.label.style.fontSize) + anno.marker.size;
          pointY = yPos;
        }

        if (!Utils.isNumber(x)) return;
        var optsPoints = {
          pSize: anno.marker.size,
          pointStrokeWidth: anno.marker.strokeWidth,
          pointFillColor: anno.marker.fillColor,
          pointStrokeColor: anno.marker.strokeColor,
          shape: anno.marker.shape,
          pRadius: anno.marker.radius,
          class: "apexcharts-point-annotation-marker ".concat(anno.marker.cssClass, " ").concat(anno.id ? anno.id : '')
        };
        var point = this.annoCtx.graphics.drawMarker(x + anno.marker.offsetX, pointY + anno.marker.offsetY, optsPoints);
        parent.appendChild(point.node);
        var text = anno.label.text ? anno.label.text : '';
        var elText = this.annoCtx.graphics.drawText({
          x: x + anno.label.offsetX,
          y: y + anno.label.offsetY,
          text: text,
          textAnchor: anno.label.textAnchor,
          fontSize: anno.label.style.fontSize,
          fontFamily: anno.label.style.fontFamily,
          fontWeight: anno.label.style.fontWeight,
          foreColor: anno.label.style.color,
          cssClass: "apexcharts-point-annotation-label ".concat(anno.label.style.cssClass, " ").concat(anno.id ? anno.id : '')
        });
        elText.attr({
          rel: index
        });
        parent.appendChild(elText.node); // TODO: deprecate this as we will use custom

        if (anno.customSVG.SVG) {
          var g = this.annoCtx.graphics.group({
            class: 'apexcharts-point-annotations-custom-svg ' + anno.customSVG.cssClass
          });
          g.attr({
            transform: "translate(".concat(x + anno.customSVG.offsetX, ", ").concat(y + anno.customSVG.offsetY, ")")
          });
          g.node.innerHTML = anno.customSVG.SVG;
          parent.appendChild(g.node);
        }

        if (anno.image.path) {
          var imgWidth = anno.image.width ? anno.image.width : 20;
          var imgHeight = anno.image.height ? anno.image.height : 20;
          this.annoCtx.addImage({
            x: x + anno.image.offsetX - imgWidth / 2,
            y: y + anno.image.offsetY - imgHeight / 2,
            width: imgWidth,
            height: imgHeight,
            path: anno.image.path,
            appendTo: '.apexcharts-point-annotations'
          });
        }
      }
    }, {
      key: "drawPointAnnotations",
      value: function drawPointAnnotations() {
        var _this = this;

        var w = this.w;
        var elg = this.annoCtx.graphics.group({
          class: 'apexcharts-point-annotations'
        });
        w.config.annotations.points.map(function (anno, index) {
          _this.addPointAnnotation(anno, elg.node, index);
        });
        return elg;
      }
    }]);

    return PointAnnotations;
  }();

  const name = "en";
  const options = {
  	months: [
  		"January",
  		"February",
  		"March",
  		"April",
  		"May",
  		"June",
  		"July",
  		"August",
  		"September",
  		"October",
  		"November",
  		"December"
  	],
  	shortMonths: [
  		"Jan",
  		"Feb",
  		"Mar",
  		"Apr",
  		"May",
  		"Jun",
  		"Jul",
  		"Aug",
  		"Sep",
  		"Oct",
  		"Nov",
  		"Dec"
  	],
  	days: [
  		"Sunday",
  		"Monday",
  		"Tuesday",
  		"Wednesday",
  		"Thursday",
  		"Friday",
  		"Saturday"
  	],
  	shortDays: [
  		"Sun",
  		"Mon",
  		"Tue",
  		"Wed",
  		"Thu",
  		"Fri",
  		"Sat"
  	],
  	toolbar: {
  		exportToSVG: "Download SVG",
  		exportToPNG: "Download PNG",
  		exportToCSV: "Download CSV",
  		menu: "Menu",
  		selection: "Selection",
  		selectionZoom: "Selection Zoom",
  		zoomIn: "Zoom In",
  		zoomOut: "Zoom Out",
  		pan: "Panning",
  		reset: "Reset Zoom"
  	}
  };
  var en = {
  	name: name,
  	options: options
  };

  var Options = /*#__PURE__*/function () {
    function Options() {
      _classCallCheck(this, Options);

      this.yAxis = {
        show: true,
        showAlways: false,
        showForNullSeries: true,
        seriesName: undefined,
        opposite: false,
        reversed: false,
        logarithmic: false,
        tickAmount: undefined,
        forceNiceScale: false,
        max: undefined,
        min: undefined,
        floating: false,
        decimalsInFloat: undefined,
        labels: {
          show: true,
          minWidth: 0,
          maxWidth: 160,
          offsetX: 0,
          offsetY: 0,
          align: undefined,
          rotate: 0,
          padding: 20,
          style: {
            colors: [],
            fontSize: '11px',
            fontWeight: 400,
            fontFamily: undefined,
            cssClass: ''
          },
          formatter: undefined
        },
        axisBorder: {
          show: false,
          color: '#e0e0e0',
          width: 1,
          offsetX: 0,
          offsetY: 0
        },
        axisTicks: {
          show: false,
          color: '#e0e0e0',
          width: 6,
          offsetX: 0,
          offsetY: 0
        },
        title: {
          text: undefined,
          rotate: -90,
          offsetY: 0,
          offsetX: 0,
          style: {
            color: undefined,
            fontSize: '11px',
            fontWeight: 900,
            fontFamily: undefined,
            cssClass: ''
          }
        },
        tooltip: {
          enabled: false,
          offsetX: 0
        },
        crosshairs: {
          show: true,
          position: 'front',
          stroke: {
            color: '#b6b6b6',
            width: 1,
            dashArray: 0
          }
        }
      };
      this.pointAnnotation = {
        x: 0,
        y: null,
        yAxisIndex: 0,
        seriesIndex: 0,
        marker: {
          size: 4,
          fillColor: '#fff',
          strokeWidth: 2,
          strokeColor: '#333',
          shape: 'circle',
          offsetX: 0,
          offsetY: 0,
          radius: 2,
          cssClass: ''
        },
        label: {
          borderColor: '#c2c2c2',
          borderWidth: 1,
          borderRadius: 2,
          text: undefined,
          textAnchor: 'middle',
          offsetX: 0,
          offsetY: 0,
          style: {
            background: '#fff',
            color: undefined,
            fontSize: '11px',
            fontFamily: undefined,
            fontWeight: 400,
            cssClass: '',
            padding: {
              left: 5,
              right: 5,
              top: 2,
              bottom: 2
            }
          }
        },
        customSVG: {
          // this will be deprecated in the next major version as it is going to be replaced with a better alternative below
          SVG: undefined,
          cssClass: undefined,
          offsetX: 0,
          offsetY: 0
        },
        image: {
          path: undefined,
          width: 20,
          height: 20,
          offsetX: 0,
          offsetY: 0
        }
      };
      this.yAxisAnnotation = {
        y: 0,
        y2: null,
        strokeDashArray: 1,
        fillColor: '#c2c2c2',
        borderColor: '#c2c2c2',
        borderWidth: 1,
        opacity: 0.3,
        offsetX: 0,
        offsetY: 0,
        width: '100%',
        yAxisIndex: 0,
        label: {
          borderColor: '#c2c2c2',
          borderWidth: 1,
          borderRadius: 2,
          text: undefined,
          textAnchor: 'end',
          position: 'right',
          offsetX: 0,
          offsetY: -3,
          style: {
            background: '#fff',
            color: undefined,
            fontSize: '11px',
            fontFamily: undefined,
            fontWeight: 400,
            cssClass: '',
            padding: {
              left: 5,
              right: 5,
              top: 2,
              bottom: 2
            }
          }
        }
      };
      this.xAxisAnnotation = {
        x: 0,
        x2: null,
        strokeDashArray: 1,
        fillColor: '#c2c2c2',
        borderColor: '#c2c2c2',
        borderWidth: 1,
        opacity: 0.3,
        offsetX: 0,
        offsetY: 0,
        label: {
          borderColor: '#c2c2c2',
          borderWidth: 1,
          borderRadius: 2,
          text: undefined,
          textAnchor: 'middle',
          orientation: 'vertical',
          position: 'top',
          offsetX: 0,
          offsetY: 0,
          style: {
            background: '#fff',
            color: undefined,
            fontSize: '11px',
            fontFamily: undefined,
            fontWeight: 400,
            cssClass: '',
            padding: {
              left: 5,
              right: 5,
              top: 2,
              bottom: 2
            }
          }
        }
      };
      this.text = {
        x: 0,
        y: 0,
        text: '',
        textAnchor: 'start',
        foreColor: undefined,
        fontSize: '13px',
        fontFamily: undefined,
        fontWeight: 400,
        appendTo: '.apexcharts-annotations',
        backgroundColor: 'transparent',
        borderColor: '#c2c2c2',
        borderRadius: 0,
        borderWidth: 0,
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 2,
        paddingBottom: 2
      };
    }

    _createClass(Options, [{
      key: "init",
      value: function init() {
        return {
          annotations: {
            position: 'front',
            yaxis: [this.yAxisAnnotation],
            xaxis: [this.xAxisAnnotation],
            points: [this.pointAnnotation],
            texts: [],
            images: [],
            shapes: []
          },
          chart: {
            animations: {
              enabled: true,
              easing: 'easeinout',
              // linear, easeout, easein, easeinout, swing, bounce, elastic
              speed: 800,
              animateGradually: {
                delay: 150,
                enabled: true
              },
              dynamicAnimation: {
                enabled: true,
                speed: 350
              }
            },
            background: 'transparent',
            locales: [en],
            defaultLocale: 'en',
            dropShadow: {
              enabled: false,
              enabledOnSeries: undefined,
              top: 2,
              left: 2,
              blur: 4,
              color: '#000',
              opacity: 0.35
            },
            events: {
              animationEnd: undefined,
              beforeMount: undefined,
              mounted: undefined,
              updated: undefined,
              click: undefined,
              mouseMove: undefined,
              legendClick: undefined,
              markerClick: undefined,
              selection: undefined,
              dataPointSelection: undefined,
              dataPointMouseEnter: undefined,
              dataPointMouseLeave: undefined,
              beforeZoom: undefined,
              beforeResetZoom: undefined,
              zoomed: undefined,
              scrolled: undefined,
              brushScrolled: undefined
            },
            foreColor: '#373d3f',
            fontFamily: 'Helvetica, Arial, sans-serif',
            height: 'auto',
            parentHeightOffset: 15,
            redrawOnParentResize: true,
            redrawOnWindowResize: true,
            id: undefined,
            group: undefined,
            offsetX: 0,
            offsetY: 0,
            selection: {
              enabled: false,
              type: 'x',
              // selectedPoints: undefined, // default datapoints that should be selected automatically
              fill: {
                color: '#24292e',
                opacity: 0.1
              },
              stroke: {
                width: 1,
                color: '#24292e',
                opacity: 0.4,
                dashArray: 3
              },
              xaxis: {
                min: undefined,
                max: undefined
              },
              yaxis: {
                min: undefined,
                max: undefined
              }
            },
            sparkline: {
              enabled: false
            },
            brush: {
              enabled: false,
              autoScaleYaxis: true,
              target: undefined
            },
            stacked: false,
            stackType: 'normal',
            toolbar: {
              show: true,
              offsetX: 0,
              offsetY: 0,
              tools: {
                download: true,
                selection: true,
                zoom: true,
                zoomin: true,
                zoomout: true,
                pan: true,
                reset: true,
                customIcons: []
              },
              export: {
                csv: {
                  filename: undefined,
                  columnDelimiter: ',',
                  headerCategory: 'category',
                  headerValue: 'value',
                  dateFormatter: function dateFormatter(timestamp) {
                    return new Date(timestamp).toDateString();
                  }
                },
                png: {
                  filename: undefined
                },
                svg: {
                  filename: undefined
                }
              },
              autoSelected: 'zoom' // accepts -> zoom, pan, selection

            },
            type: 'line',
            width: '100%',
            zoom: {
              enabled: true,
              type: 'x',
              autoScaleYaxis: false,
              zoomedArea: {
                fill: {
                  color: '#90CAF9',
                  opacity: 0.4
                },
                stroke: {
                  color: '#0D47A1',
                  opacity: 0.4,
                  width: 1
                }
              }
            }
          },
          plotOptions: {
            area: {
              fillTo: 'origin'
            },
            bar: {
              horizontal: false,
              columnWidth: '70%',
              // should be in percent 0 - 100
              barHeight: '70%',
              // should be in percent 0 - 100
              distributed: false,
              borderRadius: 0,
              rangeBarOverlap: true,
              rangeBarGroupRows: false,
              colors: {
                ranges: [],
                backgroundBarColors: [],
                backgroundBarOpacity: 1,
                backgroundBarRadius: 0
              },
              dataLabels: {
                position: 'top',
                // top, center, bottom
                maxItems: 100,
                hideOverflowingLabels: true,
                orientation: 'horizontal' // TODO: provide stackedLabels for stacked charts which gives additions of values

              }
            },
            bubble: {
              minBubbleRadius: undefined,
              maxBubbleRadius: undefined
            },
            candlestick: {
              colors: {
                upward: '#00B746',
                downward: '#EF403C'
              },
              wick: {
                useFillColor: true
              }
            },
            boxPlot: {
              colors: {
                upper: '#00E396',
                lower: '#008FFB'
              }
            },
            heatmap: {
              radius: 2,
              enableShades: true,
              shadeIntensity: 0.5,
              reverseNegativeShade: false,
              distributed: false,
              useFillColorAsStroke: false,
              colorScale: {
                inverse: false,
                ranges: [],
                min: undefined,
                max: undefined
              }
            },
            treemap: {
              enableShades: true,
              shadeIntensity: 0.5,
              distributed: false,
              reverseNegativeShade: false,
              useFillColorAsStroke: false,
              colorScale: {
                inverse: false,
                ranges: [],
                min: undefined,
                max: undefined
              }
            },
            radialBar: {
              inverseOrder: false,
              startAngle: 0,
              endAngle: 360,
              offsetX: 0,
              offsetY: 0,
              hollow: {
                margin: 5,
                size: '50%',
                background: 'transparent',
                image: undefined,
                imageWidth: 150,
                imageHeight: 150,
                imageOffsetX: 0,
                imageOffsetY: 0,
                imageClipped: true,
                position: 'front',
                dropShadow: {
                  enabled: false,
                  top: 0,
                  left: 0,
                  blur: 3,
                  color: '#000',
                  opacity: 0.5
                }
              },
              track: {
                show: true,
                startAngle: undefined,
                endAngle: undefined,
                background: '#f2f2f2',
                strokeWidth: '97%',
                opacity: 1,
                margin: 5,
                // margin is in pixels
                dropShadow: {
                  enabled: false,
                  top: 0,
                  left: 0,
                  blur: 3,
                  color: '#000',
                  opacity: 0.5
                }
              },
              dataLabels: {
                show: true,
                name: {
                  show: true,
                  fontSize: '16px',
                  fontFamily: undefined,
                  fontWeight: 600,
                  color: undefined,
                  offsetY: 0,
                  formatter: function formatter(val) {
                    return val;
                  }
                },
                value: {
                  show: true,
                  fontSize: '14px',
                  fontFamily: undefined,
                  fontWeight: 400,
                  color: undefined,
                  offsetY: 16,
                  formatter: function formatter(val) {
                    return val + '%';
                  }
                },
                total: {
                  show: false,
                  label: 'Total',
                  fontSize: '16px',
                  fontWeight: 600,
                  fontFamily: undefined,
                  color: undefined,
                  formatter: function formatter(w) {
                    return w.globals.seriesTotals.reduce(function (a, b) {
                      return a + b;
                    }, 0) / w.globals.series.length + '%';
                  }
                }
              }
            },
            pie: {
              customScale: 1,
              offsetX: 0,
              offsetY: 0,
              startAngle: 0,
              endAngle: 360,
              expandOnClick: true,
              dataLabels: {
                // These are the percentage values which are displayed on slice
                offset: 0,
                // offset by which labels will move outside
                minAngleToShowLabel: 10
              },
              donut: {
                size: '65%',
                background: 'transparent',
                labels: {
                  // These are the inner labels appearing inside donut
                  show: false,
                  name: {
                    show: true,
                    fontSize: '16px',
                    fontFamily: undefined,
                    fontWeight: 600,
                    color: undefined,
                    offsetY: -10,
                    formatter: function formatter(val) {
                      return val;
                    }
                  },
                  value: {
                    show: true,
                    fontSize: '20px',
                    fontFamily: undefined,
                    fontWeight: 400,
                    color: undefined,
                    offsetY: 10,
                    formatter: function formatter(val) {
                      return val;
                    }
                  },
                  total: {
                    show: false,
                    showAlways: false,
                    label: 'Total',
                    fontSize: '16px',
                    fontWeight: 400,
                    fontFamily: undefined,
                    color: undefined,
                    formatter: function formatter(w) {
                      return w.globals.seriesTotals.reduce(function (a, b) {
                        return a + b;
                      }, 0);
                    }
                  }
                }
              }
            },
            polarArea: {
              rings: {
                strokeWidth: 1,
                strokeColor: '#e8e8e8'
              },
              spokes: {
                strokeWidth: 1,
                connectorColors: '#e8e8e8'
              }
            },
            radar: {
              size: undefined,
              offsetX: 0,
              offsetY: 0,
              polygons: {
                // strokeColor: '#e8e8e8', // should be deprecated in the minor version i.e 3.2
                strokeWidth: 1,
                strokeColors: '#e8e8e8',
                connectorColors: '#e8e8e8',
                fill: {
                  colors: undefined
                }
              }
            }
          },
          colors: undefined,
          dataLabels: {
            enabled: true,
            enabledOnSeries: undefined,
            formatter: function formatter(val) {
              return val !== null ? val : '';
            },
            textAnchor: 'middle',
            distributed: false,
            offsetX: 0,
            offsetY: 0,
            style: {
              fontSize: '12px',
              fontFamily: undefined,
              fontWeight: 600,
              colors: undefined
            },
            background: {
              enabled: true,
              foreColor: '#fff',
              borderRadius: 2,
              padding: 4,
              opacity: 0.9,
              borderWidth: 1,
              borderColor: '#fff',
              dropShadow: {
                enabled: false,
                top: 1,
                left: 1,
                blur: 1,
                color: '#000',
                opacity: 0.45
              }
            },
            dropShadow: {
              enabled: false,
              top: 1,
              left: 1,
              blur: 1,
              color: '#000',
              opacity: 0.45
            }
          },
          fill: {
            type: 'solid',
            colors: undefined,
            // array of colors
            opacity: 0.85,
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: undefined,
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 100],
              colorStops: []
            },
            image: {
              src: [],
              width: undefined,
              // optional
              height: undefined // optional

            },
            pattern: {
              style: 'squares',
              // String | Array of Strings
              width: 6,
              height: 6,
              strokeWidth: 2
            }
          },
          grid: {
            show: true,
            borderColor: '#e0e0e0',
            strokeDashArray: 0,
            position: 'back',
            xaxis: {
              lines: {
                show: false
              }
            },
            yaxis: {
              lines: {
                show: true
              }
            },
            row: {
              colors: undefined,
              // takes as array which will be repeated on rows
              opacity: 0.5
            },
            column: {
              colors: undefined,
              // takes an array which will be repeated on columns
              opacity: 0.5
            },
            padding: {
              top: 0,
              right: 10,
              bottom: 0,
              left: 12
            }
          },
          labels: [],
          legend: {
            show: true,
            showForSingleSeries: false,
            showForNullSeries: true,
            showForZeroSeries: true,
            floating: false,
            position: 'bottom',
            // whether to position legends in 1 of 4
            // direction - top, bottom, left, right
            horizontalAlign: 'center',
            // when position top/bottom, you can specify whether to align legends left, right or center
            inverseOrder: false,
            fontSize: '12px',
            fontFamily: undefined,
            fontWeight: 400,
            width: undefined,
            height: undefined,
            formatter: undefined,
            tooltipHoverFormatter: undefined,
            offsetX: -20,
            offsetY: 4,
            labels: {
              colors: undefined,
              useSeriesColors: false
            },
            markers: {
              width: 12,
              height: 12,
              strokeWidth: 0,
              fillColors: undefined,
              strokeColor: '#fff',
              radius: 12,
              customHTML: undefined,
              offsetX: 0,
              offsetY: 0,
              onClick: undefined
            },
            itemMargin: {
              horizontal: 5,
              vertical: 2
            },
            onItemClick: {
              toggleDataSeries: true
            },
            onItemHover: {
              highlightDataSeries: true
            }
          },
          markers: {
            discrete: [],
            size: 0,
            colors: undefined,
            //strokeColor: '#fff', // TODO: deprecate in major version 4.0
            strokeColors: '#fff',
            strokeWidth: 2,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            shape: 'circle',
            width: 8,
            // only applicable when shape is rect/square
            height: 8,
            // only applicable when shape is rect/square
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            onClick: undefined,
            onDblClick: undefined,
            showNullDataPoints: true,
            hover: {
              size: undefined,
              sizeOffset: 3
            }
          },
          noData: {
            text: undefined,
            align: 'center',
            verticalAlign: 'middle',
            offsetX: 0,
            offsetY: 0,
            style: {
              color: undefined,
              fontSize: '14px',
              fontFamily: undefined
            }
          },
          responsive: [],
          // breakpoints should follow ascending order 400, then 700, then 1000
          series: undefined,
          states: {
            normal: {
              filter: {
                type: 'none',
                value: 0
              }
            },
            hover: {
              filter: {
                type: 'lighten',
                value: 0.1
              }
            },
            active: {
              allowMultipleDataPointsSelection: false,
              filter: {
                type: 'darken',
                value: 0.5
              }
            }
          },
          title: {
            text: undefined,
            align: 'left',
            margin: 5,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize: '14px',
              fontWeight: 900,
              fontFamily: undefined,
              color: undefined
            }
          },
          subtitle: {
            text: undefined,
            align: 'left',
            margin: 5,
            offsetX: 0,
            offsetY: 30,
            floating: false,
            style: {
              fontSize: '12px',
              fontWeight: 400,
              fontFamily: undefined,
              color: undefined
            }
          },
          stroke: {
            show: true,
            curve: 'smooth',
            // "smooth" / "straight" / "stepline"
            lineCap: 'butt',
            // round, butt , square
            width: 2,
            colors: undefined,
            // array of colors
            dashArray: 0 // single value or array of values

          },
          tooltip: {
            enabled: true,
            enabledOnSeries: undefined,
            shared: true,
            followCursor: false,
            // when disabled, the tooltip will show on top of the series instead of mouse position
            intersect: false,
            // when enabled, tooltip will only show when user directly hovers over point
            inverseOrder: false,
            custom: undefined,
            fillSeriesColor: false,
            theme: 'light',
            style: {
              fontSize: '12px',
              fontFamily: undefined
            },
            onDatasetHover: {
              highlightDataSeries: false
            },
            x: {
              // x value
              show: true,
              format: 'dd MMM',
              // dd/MM, dd MMM yy, dd MMM yyyy
              formatter: undefined // a custom user supplied formatter function

            },
            y: {
              formatter: undefined,
              title: {
                formatter: function formatter(seriesName) {
                  return seriesName ? seriesName + ': ' : '';
                }
              }
            },
            z: {
              formatter: undefined,
              title: 'Size: '
            },
            marker: {
              show: true,
              fillColors: undefined
            },
            items: {
              display: 'flex'
            },
            fixed: {
              enabled: false,
              position: 'topRight',
              // topRight, topLeft, bottomRight, bottomLeft
              offsetX: 0,
              offsetY: 0
            }
          },
          xaxis: {
            type: 'category',
            categories: [],
            convertedCatToNumeric: false,
            // internal property which should not be altered outside
            sorted: false,
            offsetX: 0,
            offsetY: 0,
            labels: {
              show: true,
              rotate: -45,
              rotateAlways: false,
              hideOverlappingLabels: true,
              trim: false,
              minHeight: undefined,
              maxHeight: 120,
              showDuplicates: true,
              style: {
                colors: [],
                fontSize: '12px',
                fontWeight: 400,
                fontFamily: undefined,
                cssClass: ''
              },
              offsetX: 0,
              offsetY: 0,
              format: undefined,
              formatter: undefined,
              // custom formatter function which will override format
              datetimeUTC: true,
              datetimeFormatter: {
                year: 'yyyy',
                month: "MMM 'yy",
                day: 'dd MMM',
                hour: 'HH:mm',
                minute: 'HH:mm:ss'
              }
            },
            axisBorder: {
              show: true,
              color: '#e0e0e0',
              width: '100%',
              height: 1,
              offsetX: 0,
              offsetY: 0
            },
            axisTicks: {
              show: true,
              color: '#e0e0e0',
              height: 6,
              offsetX: 0,
              offsetY: 0
            },
            tickAmount: undefined,
            tickPlacement: 'on',
            min: undefined,
            max: undefined,
            range: undefined,
            floating: false,
            position: 'bottom',
            title: {
              text: undefined,
              offsetX: 0,
              offsetY: 0,
              style: {
                color: undefined,
                fontSize: '12px',
                fontWeight: 900,
                fontFamily: undefined,
                cssClass: ''
              }
            },
            crosshairs: {
              show: true,
              width: 1,
              // tickWidth/barWidth or an integer
              position: 'back',
              opacity: 0.9,
              stroke: {
                color: '#b6b6b6',
                width: 1,
                dashArray: 3
              },
              fill: {
                type: 'solid',
                // solid, gradient
                color: '#B1B9C4',
                gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5
                }
              },
              dropShadow: {
                enabled: false,
                left: 0,
                top: 0,
                blur: 1,
                opacity: 0.4
              }
            },
            tooltip: {
              enabled: true,
              offsetY: 0,
              formatter: undefined,
              style: {
                fontSize: '12px',
                fontFamily: undefined
              }
            }
          },
          yaxis: this.yAxis,
          theme: {
            mode: 'light',
            palette: 'palette1',
            // If defined, it will overwrite globals.colors variable
            monochrome: {
              // monochrome allows you to select just 1 color and fill out the rest with light/dark shade (intensity can be selected)
              enabled: false,
              color: '#008FFB',
              shadeTo: 'light',
              shadeIntensity: 0.65
            }
          }
        };
      }
    }]);

    return Options;
  }();

  /**
   * ApexCharts Annotations Class for drawing lines/rects on both xaxis and yaxis.
   *
   * @module Annotations
   **/

  var Annotations = /*#__PURE__*/function () {
    function Annotations(ctx) {
      _classCallCheck(this, Annotations);

      this.ctx = ctx;
      this.w = ctx.w;
      this.graphics = new Graphics(this.ctx);

      if (this.w.globals.isBarHorizontal) {
        this.invertAxis = true;
      }

      this.helpers = new Helpers(this);
      this.xAxisAnnotations = new XAnnotations(this);
      this.yAxisAnnotations = new YAnnotations(this);
      this.pointsAnnotations = new PointAnnotations(this);

      if (this.w.globals.isBarHorizontal && this.w.config.yaxis[0].reversed) {
        this.inversedReversedAxis = true;
      }

      this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints;
    }

    _createClass(Annotations, [{
      key: "drawAxesAnnotations",
      value: function drawAxesAnnotations() {
        var w = this.w;

        if (w.globals.axisCharts) {
          var yAnnotations = this.yAxisAnnotations.drawYAxisAnnotations();
          var xAnnotations = this.xAxisAnnotations.drawXAxisAnnotations();
          var pointAnnotations = this.pointsAnnotations.drawPointAnnotations();
          var initialAnim = w.config.chart.animations.enabled;
          var annoArray = [yAnnotations, xAnnotations, pointAnnotations];
          var annoElArray = [xAnnotations.node, yAnnotations.node, pointAnnotations.node];

          for (var i = 0; i < 3; i++) {
            w.globals.dom.elGraphical.add(annoArray[i]);

            if (initialAnim && !w.globals.resized && !w.globals.dataChanged) {
              // fixes apexcharts/apexcharts.js#685
              if (w.config.chart.type !== 'scatter' && w.config.chart.type !== 'bubble' && w.globals.dataPoints > 1) {
                annoElArray[i].classList.add('apexcharts-element-hidden');
              }
            }

            w.globals.delayedElements.push({
              el: annoElArray[i],
              index: 0
            });
          } // background sizes needs to be calculated after text is drawn, so calling them last


          this.helpers.annotationsBackground();
        }
      }
    }, {
      key: "drawImageAnnos",
      value: function drawImageAnnos() {
        var _this = this;

        var w = this.w;
        w.config.annotations.images.map(function (s, index) {
          _this.addImage(s, index);
        });
      }
    }, {
      key: "drawTextAnnos",
      value: function drawTextAnnos() {
        var _this2 = this;

        var w = this.w;
        w.config.annotations.texts.map(function (t, index) {
          _this2.addText(t, index);
        });
      }
    }, {
      key: "addXaxisAnnotation",
      value: function addXaxisAnnotation(anno, parent, index) {
        this.xAxisAnnotations.addXaxisAnnotation(anno, parent, index);
      }
    }, {
      key: "addYaxisAnnotation",
      value: function addYaxisAnnotation(anno, parent, index) {
        this.yAxisAnnotations.addYaxisAnnotation(anno, parent, index);
      }
    }, {
      key: "addPointAnnotation",
      value: function addPointAnnotation(anno, parent, index) {
        this.pointsAnnotations.addPointAnnotation(anno, parent, index);
      }
    }, {
      key: "addText",
      value: function addText(params, index) {
        var x = params.x,
            y = params.y,
            text = params.text,
            textAnchor = params.textAnchor,
            foreColor = params.foreColor,
            fontSize = params.fontSize,
            fontFamily = params.fontFamily,
            fontWeight = params.fontWeight,
            cssClass = params.cssClass,
            backgroundColor = params.backgroundColor,
            borderWidth = params.borderWidth,
            strokeDashArray = params.strokeDashArray,
            borderRadius = params.borderRadius,
            borderColor = params.borderColor,
            _params$appendTo = params.appendTo,
            appendTo = _params$appendTo === void 0 ? '.apexcharts-annotations' : _params$appendTo,
            _params$paddingLeft = params.paddingLeft,
            paddingLeft = _params$paddingLeft === void 0 ? 4 : _params$paddingLeft,
            _params$paddingRight = params.paddingRight,
            paddingRight = _params$paddingRight === void 0 ? 4 : _params$paddingRight,
            _params$paddingBottom = params.paddingBottom,
            paddingBottom = _params$paddingBottom === void 0 ? 2 : _params$paddingBottom,
            _params$paddingTop = params.paddingTop,
            paddingTop = _params$paddingTop === void 0 ? 2 : _params$paddingTop;
        var w = this.w;
        var elText = this.graphics.drawText({
          x: x,
          y: y,
          text: text,
          textAnchor: textAnchor || 'start',
          fontSize: fontSize || '12px',
          fontWeight: fontWeight || 'regular',
          fontFamily: fontFamily || w.config.chart.fontFamily,
          foreColor: foreColor || w.config.chart.foreColor,
          cssClass: 'apexcharts-text ' + cssClass ? cssClass : ''
        });
        var parent = w.globals.dom.baseEl.querySelector(appendTo);

        if (parent) {
          parent.appendChild(elText.node);
        }

        var textRect = elText.bbox();

        if (text) {
          var elRect = this.graphics.drawRect(textRect.x - paddingLeft, textRect.y - paddingTop, textRect.width + paddingLeft + paddingRight, textRect.height + paddingBottom + paddingTop, borderRadius, backgroundColor ? backgroundColor : 'transparent', 1, borderWidth, borderColor, strokeDashArray);
          parent.insertBefore(elRect.node, elText.node);
        }
      }
    }, {
      key: "addImage",
      value: function addImage(params, index) {
        var w = this.w;
        var path = params.path,
            _params$x = params.x,
            x = _params$x === void 0 ? 0 : _params$x,
            _params$y = params.y,
            y = _params$y === void 0 ? 0 : _params$y,
            _params$width = params.width,
            width = _params$width === void 0 ? 20 : _params$width,
            _params$height = params.height,
            height = _params$height === void 0 ? 20 : _params$height,
            _params$appendTo2 = params.appendTo,
            appendTo = _params$appendTo2 === void 0 ? '.apexcharts-annotations' : _params$appendTo2;
        var img = w.globals.dom.Paper.image(path);
        img.size(width, height).move(x, y);
        var parent = w.globals.dom.baseEl.querySelector(appendTo);

        if (parent) {
          parent.appendChild(img.node);
        }
      } // The addXaxisAnnotation method requires a parent class, and user calling this method externally on the chart instance may not specify parent, hence a different method

    }, {
      key: "addXaxisAnnotationExternal",
      value: function addXaxisAnnotationExternal(params, pushToMemory, context) {
        this.addAnnotationExternal({
          params: params,
          pushToMemory: pushToMemory,
          context: context,
          type: 'xaxis',
          contextMethod: context.addXaxisAnnotation
        });
        return context;
      }
    }, {
      key: "addYaxisAnnotationExternal",
      value: function addYaxisAnnotationExternal(params, pushToMemory, context) {
        this.addAnnotationExternal({
          params: params,
          pushToMemory: pushToMemory,
          context: context,
          type: 'yaxis',
          contextMethod: context.addYaxisAnnotation
        });
        return context;
      }
    }, {
      key: "addPointAnnotationExternal",
      value: function addPointAnnotationExternal(params, pushToMemory, context) {
        if (typeof this.invertAxis === 'undefined') {
          this.invertAxis = context.w.globals.isBarHorizontal;
        }

        this.addAnnotationExternal({
          params: params,
          pushToMemory: pushToMemory,
          context: context,
          type: 'point',
          contextMethod: context.addPointAnnotation
        });
        return context;
      }
    }, {
      key: "addAnnotationExternal",
      value: function addAnnotationExternal(_ref) {
        var params = _ref.params,
            pushToMemory = _ref.pushToMemory,
            context = _ref.context,
            type = _ref.type,
            contextMethod = _ref.contextMethod;
        var me = context;
        var w = me.w;
        var parent = w.globals.dom.baseEl.querySelector(".apexcharts-".concat(type, "-annotations"));
        var index = parent.childNodes.length + 1;
        var options = new Options();
        var axesAnno = Object.assign({}, type === 'xaxis' ? options.xAxisAnnotation : type === 'yaxis' ? options.yAxisAnnotation : options.pointAnnotation);
        var anno = Utils.extend(axesAnno, params);

        switch (type) {
          case 'xaxis':
            this.addXaxisAnnotation(anno, parent, index);
            break;

          case 'yaxis':
            this.addYaxisAnnotation(anno, parent, index);
            break;

          case 'point':
            this.addPointAnnotation(anno, parent, index);
            break;
        } // add background


        var axesAnnoLabel = w.globals.dom.baseEl.querySelector(".apexcharts-".concat(type, "-annotations .apexcharts-").concat(type, "-annotation-label[rel='").concat(index, "']"));
        var elRect = this.helpers.addBackgroundToAnno(axesAnnoLabel, anno);

        if (elRect) {
          parent.insertBefore(elRect.node, axesAnnoLabel);
        }

        if (pushToMemory) {
          w.globals.memory.methodsToExec.push({
            context: me,
            id: anno.id ? anno.id : Utils.randomId(),
            method: contextMethod,
            label: 'addAnnotation',
            params: params
          });
        }

        return context;
      }
    }, {
      key: "clearAnnotations",
      value: function clearAnnotations(ctx) {
        var w = ctx.w;
        var annos = w.globals.dom.baseEl.querySelectorAll('.apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations'); // annotations added externally should be cleared out too

        w.globals.memory.methodsToExec.map(function (m, i) {
          if (m.label === 'addText' || m.label === 'addAnnotation') {
            w.globals.memory.methodsToExec.splice(i, 1);
          }
        });
        annos = Utils.listToArray(annos); // delete the DOM elements

        Array.prototype.forEach.call(annos, function (a) {
          while (a.firstChild) {
            a.removeChild(a.firstChild);
          }
        });
      }
    }, {
      key: "removeAnnotation",
      value: function removeAnnotation(ctx, id) {
        var w = ctx.w;
        var annos = w.globals.dom.baseEl.querySelectorAll(".".concat(id));

        if (annos) {
          w.globals.memory.methodsToExec.map(function (m, i) {
            if (m.id === id) {
              w.globals.memory.methodsToExec.splice(i, 1);
            }
          });
          Array.prototype.forEach.call(annos, function (a) {
            a.parentElement.removeChild(a);
          });
        }
      }
    }]);

    return Annotations;
  }();

  /**
   * ApexCharts Fill Class for setting fill options of the paths.
   *
   * @module Fill
   **/

  var Fill = /*#__PURE__*/function () {
    function Fill(ctx) {
      _classCallCheck(this, Fill);

      this.ctx = ctx;
      this.w = ctx.w;
      this.opts = null;
      this.seriesIndex = 0;
    }

    _createClass(Fill, [{
      key: "clippedImgArea",
      value: function clippedImgArea(params) {
        var w = this.w;
        var cnf = w.config;
        var svgW = parseInt(w.globals.gridWidth, 10);
        var svgH = parseInt(w.globals.gridHeight, 10);
        var size = svgW > svgH ? svgW : svgH;
        var fillImg = params.image;
        var imgWidth = 0;
        var imgHeight = 0;

        if (typeof params.width === 'undefined' && typeof params.height === 'undefined') {
          if (cnf.fill.image.width !== undefined && cnf.fill.image.height !== undefined) {
            imgWidth = cnf.fill.image.width + 1;
            imgHeight = cnf.fill.image.height;
          } else {
            imgWidth = size + 1;
            imgHeight = size;
          }
        } else {
          imgWidth = params.width;
          imgHeight = params.height;
        }

        var elPattern = document.createElementNS(w.globals.SVGNS, 'pattern');
        Graphics.setAttrs(elPattern, {
          id: params.patternID,
          patternUnits: params.patternUnits ? params.patternUnits : 'userSpaceOnUse',
          width: imgWidth + 'px',
          height: imgHeight + 'px'
        });
        var elImage = document.createElementNS(w.globals.SVGNS, 'image');
        elPattern.appendChild(elImage);
        elImage.setAttributeNS(window.SVG.xlink, 'href', fillImg);
        Graphics.setAttrs(elImage, {
          x: 0,
          y: 0,
          preserveAspectRatio: 'none',
          width: imgWidth + 'px',
          height: imgHeight + 'px'
        });
        elImage.style.opacity = params.opacity;
        w.globals.dom.elDefs.node.appendChild(elPattern);
      }
    }, {
      key: "getSeriesIndex",
      value: function getSeriesIndex(opts) {
        var w = this.w;

        if ((w.config.chart.type === 'bar' || w.config.chart.type === 'rangeBar') && w.config.plotOptions.bar.distributed || w.config.chart.type === 'heatmap' || w.config.chart.type === 'treemap') {
          this.seriesIndex = opts.seriesNumber;
        } else {
          this.seriesIndex = opts.seriesNumber % w.globals.series.length;
        }

        return this.seriesIndex;
      }
    }, {
      key: "fillPath",
      value: function fillPath(opts) {
        var w = this.w;
        this.opts = opts;
        var cnf = this.w.config;
        var pathFill;
        var patternFill, gradientFill;
        this.seriesIndex = this.getSeriesIndex(opts);
        var fillColors = this.getFillColors();
        var fillColor = fillColors[this.seriesIndex]; //override fillcolor if user inputted color with data

        if (w.globals.seriesColors[this.seriesIndex] !== undefined) {
          fillColor = w.globals.seriesColors[this.seriesIndex];
        }

        if (typeof fillColor === 'function') {
          fillColor = fillColor({
            seriesIndex: this.seriesIndex,
            dataPointIndex: opts.dataPointIndex,
            value: opts.value,
            w: w
          });
        }

        var fillType = this.getFillType(this.seriesIndex);
        var fillOpacity = Array.isArray(cnf.fill.opacity) ? cnf.fill.opacity[this.seriesIndex] : cnf.fill.opacity;

        if (opts.color) {
          fillColor = opts.color;
        }

        var defaultColor = fillColor;

        if (fillColor.indexOf('rgb') === -1) {
          if (fillColor.length < 9) {
            // if the hex contains alpha and is of 9 digit, skip the opacity
            defaultColor = Utils.hexToRgba(fillColor, fillOpacity);
          }
        } else {
          if (fillColor.indexOf('rgba') > -1) {
            fillOpacity = Utils.getOpacityFromRGBA(fillColor);
          }
        }

        if (opts.opacity) fillOpacity = opts.opacity;

        if (fillType === 'pattern') {
          patternFill = this.handlePatternFill(patternFill, fillColor, fillOpacity, defaultColor);
        }

        if (fillType === 'gradient') {
          gradientFill = this.handleGradientFill(fillColor, fillOpacity, this.seriesIndex);
        }

        if (fillType === 'image') {
          var imgSrc = cnf.fill.image.src;
          var patternID = opts.patternID ? opts.patternID : '';
          this.clippedImgArea({
            opacity: fillOpacity,
            image: Array.isArray(imgSrc) ? opts.seriesNumber < imgSrc.length ? imgSrc[opts.seriesNumber] : imgSrc[0] : imgSrc,
            width: opts.width ? opts.width : undefined,
            height: opts.height ? opts.height : undefined,
            patternUnits: opts.patternUnits,
            patternID: "pattern".concat(w.globals.cuid).concat(opts.seriesNumber + 1).concat(patternID)
          });
          pathFill = "url(#pattern".concat(w.globals.cuid).concat(opts.seriesNumber + 1).concat(patternID, ")");
        } else if (fillType === 'gradient') {
          pathFill = gradientFill;
        } else if (fillType === 'pattern') {
          pathFill = patternFill;
        } else {
          pathFill = defaultColor;
        } // override pattern/gradient if opts.solid is true


        if (opts.solid) {
          pathFill = defaultColor;
        }

        return pathFill;
      }
    }, {
      key: "getFillType",
      value: function getFillType(seriesIndex) {
        var w = this.w;

        if (Array.isArray(w.config.fill.type)) {
          return w.config.fill.type[seriesIndex];
        } else {
          return w.config.fill.type;
        }
      }
    }, {
      key: "getFillColors",
      value: function getFillColors() {
        var w = this.w;
        var cnf = w.config;
        var opts = this.opts;
        var fillColors = [];

        if (w.globals.comboCharts) {
          if (w.config.series[this.seriesIndex].type === 'line') {
            if (Array.isArray(w.globals.stroke.colors)) {
              fillColors = w.globals.stroke.colors;
            } else {
              fillColors.push(w.globals.stroke.colors);
            }
          } else {
            if (Array.isArray(w.globals.fill.colors)) {
              fillColors = w.globals.fill.colors;
            } else {
              fillColors.push(w.globals.fill.colors);
            }
          }
        } else {
          if (cnf.chart.type === 'line') {
            if (Array.isArray(w.globals.stroke.colors)) {
              fillColors = w.globals.stroke.colors;
            } else {
              fillColors.push(w.globals.stroke.colors);
            }
          } else {
            if (Array.isArray(w.globals.fill.colors)) {
              fillColors = w.globals.fill.colors;
            } else {
              fillColors.push(w.globals.fill.colors);
            }
          }
        } // colors passed in arguments


        if (typeof opts.fillColors !== 'undefined') {
          fillColors = [];

          if (Array.isArray(opts.fillColors)) {
            fillColors = opts.fillColors.slice();
          } else {
            fillColors.push(opts.fillColors);
          }
        }

        return fillColors;
      }
    }, {
      key: "handlePatternFill",
      value: function handlePatternFill(patternFill, fillColor, fillOpacity, defaultColor) {
        var cnf = this.w.config;
        var opts = this.opts;
        var graphics = new Graphics(this.ctx);
        var patternStrokeWidth = cnf.fill.pattern.strokeWidth === undefined ? Array.isArray(cnf.stroke.width) ? cnf.stroke.width[this.seriesIndex] : cnf.stroke.width : Array.isArray(cnf.fill.pattern.strokeWidth) ? cnf.fill.pattern.strokeWidth[this.seriesIndex] : cnf.fill.pattern.strokeWidth;
        var patternLineColor = fillColor;

        if (Array.isArray(cnf.fill.pattern.style)) {
          if (typeof cnf.fill.pattern.style[opts.seriesNumber] !== 'undefined') {
            var pf = graphics.drawPattern(cnf.fill.pattern.style[opts.seriesNumber], cnf.fill.pattern.width, cnf.fill.pattern.height, patternLineColor, patternStrokeWidth, fillOpacity);
            patternFill = pf;
          } else {
            patternFill = defaultColor;
          }
        } else {
          patternFill = graphics.drawPattern(cnf.fill.pattern.style, cnf.fill.pattern.width, cnf.fill.pattern.height, patternLineColor, patternStrokeWidth, fillOpacity);
        }

        return patternFill;
      }
    }, {
      key: "handleGradientFill",
      value: function handleGradientFill(fillColor, fillOpacity, i) {
        var cnf = this.w.config;
        var opts = this.opts;
        var graphics = new Graphics(this.ctx);
        var utils = new Utils();
        var type = cnf.fill.gradient.type;
        var gradientFrom = fillColor;
        var gradientTo;
        var opacityFrom = cnf.fill.gradient.opacityFrom === undefined ? fillOpacity : Array.isArray(cnf.fill.gradient.opacityFrom) ? cnf.fill.gradient.opacityFrom[i] : cnf.fill.gradient.opacityFrom;

        if (gradientFrom.indexOf('rgba') > -1) {
          opacityFrom = Utils.getOpacityFromRGBA(gradientFrom);
        }

        var opacityTo = cnf.fill.gradient.opacityTo === undefined ? fillOpacity : Array.isArray(cnf.fill.gradient.opacityTo) ? cnf.fill.gradient.opacityTo[i] : cnf.fill.gradient.opacityTo;

        if (cnf.fill.gradient.gradientToColors === undefined || cnf.fill.gradient.gradientToColors.length === 0) {
          if (cnf.fill.gradient.shade === 'dark') {
            gradientTo = utils.shadeColor(parseFloat(cnf.fill.gradient.shadeIntensity) * -1, fillColor.indexOf('rgb') > -1 ? Utils.rgb2hex(fillColor) : fillColor);
          } else {
            gradientTo = utils.shadeColor(parseFloat(cnf.fill.gradient.shadeIntensity), fillColor.indexOf('rgb') > -1 ? Utils.rgb2hex(fillColor) : fillColor);
          }
        } else {
          if (cnf.fill.gradient.gradientToColors[opts.seriesNumber]) {
            var gToColor = cnf.fill.gradient.gradientToColors[opts.seriesNumber];
            gradientTo = gToColor;

            if (gToColor.indexOf('rgba') > -1) {
              opacityTo = Utils.getOpacityFromRGBA(gToColor);
            }
          } else {
            gradientTo = fillColor;
          }
        }

        if (cnf.fill.gradient.inverseColors) {
          var t = gradientFrom;
          gradientFrom = gradientTo;
          gradientTo = t;
        }

        if (gradientFrom.indexOf('rgb') > -1) {
          gradientFrom = Utils.rgb2hex(gradientFrom);
        }

        if (gradientTo.indexOf('rgb') > -1) {
          gradientTo = Utils.rgb2hex(gradientTo);
        }

        return graphics.drawGradient(type, gradientFrom, gradientTo, opacityFrom, opacityTo, opts.size, cnf.fill.gradient.stops, cnf.fill.gradient.colorStops, i);
      }
    }]);

    return Fill;
  }();

  /**
   * ApexCharts Markers Class for drawing points on y values in axes charts.
   *
   * @module Markers
   **/

  var Markers = /*#__PURE__*/function () {
    function Markers(ctx, opts) {
      _classCallCheck(this, Markers);

      this.ctx = ctx;
      this.w = ctx.w;
    }

    _createClass(Markers, [{
      key: "setGlobalMarkerSize",
      value: function setGlobalMarkerSize() {
        var w = this.w;
        w.globals.markers.size = Array.isArray(w.config.markers.size) ? w.config.markers.size : [w.config.markers.size];

        if (w.globals.markers.size.length > 0) {
          if (w.globals.markers.size.length < w.globals.series.length + 1) {
            for (var i = 0; i <= w.globals.series.length; i++) {
              if (typeof w.globals.markers.size[i] === 'undefined') {
                w.globals.markers.size.push(w.globals.markers.size[0]);
              }
            }
          }
        } else {
          w.globals.markers.size = w.config.series.map(function (s) {
            return w.config.markers.size;
          });
        }
      }
    }, {
      key: "plotChartMarkers",
      value: function plotChartMarkers(pointsPos, seriesIndex, j, pSize) {
        var alwaysDrawMarker = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
        var w = this.w;
        var i = seriesIndex;
        var p = pointsPos;
        var elPointsWrap = null;
        var graphics = new Graphics(this.ctx);
        var point;

        if (w.globals.markers.size[seriesIndex] > 0 || alwaysDrawMarker) {
          elPointsWrap = graphics.group({
            class: alwaysDrawMarker ? '' : 'apexcharts-series-markers'
          });
          elPointsWrap.attr('clip-path', "url(#gridRectMarkerMask".concat(w.globals.cuid, ")"));
        }

        if (Array.isArray(p.x)) {
          for (var q = 0; q < p.x.length; q++) {
            var dataPointIndex = j; // a small hack as we have 2 points for the first val to connect it

            if (j === 1 && q === 0) dataPointIndex = 0;
            if (j === 1 && q === 1) dataPointIndex = 1;
            var PointClasses = 'apexcharts-marker';

            if ((w.config.chart.type === 'line' || w.config.chart.type === 'area') && !w.globals.comboCharts && !w.config.tooltip.intersect) {
              PointClasses += ' no-pointer-events';
            }

            var shouldMarkerDraw = Array.isArray(w.config.markers.size) ? w.globals.markers.size[seriesIndex] > 0 : w.config.markers.size > 0;

            if (shouldMarkerDraw || alwaysDrawMarker) {
              if (Utils.isNumber(p.y[q])) {
                PointClasses += " w".concat(Utils.randomId());
              } else {
                PointClasses = 'apexcharts-nullpoint';
              }

              var opts = this.getMarkerConfig(PointClasses, seriesIndex, dataPointIndex);

              if (w.config.series[i].data[dataPointIndex]) {
                if (w.config.series[i].data[dataPointIndex].fillColor) {
                  opts.pointFillColor = w.config.series[i].data[dataPointIndex].fillColor;
                }

                if (w.config.series[i].data[dataPointIndex].strokeColor) {
                  opts.pointStrokeColor = w.config.series[i].data[dataPointIndex].strokeColor;
                }
              }

              if (pSize) {
                opts.pSize = pSize;
              }

              point = graphics.drawMarker(p.x[q], p.y[q], opts);
              point.attr('rel', dataPointIndex);
              point.attr('j', dataPointIndex);
              point.attr('index', seriesIndex);
              point.node.setAttribute('default-marker-size', opts.pSize);
              var filters = new Filters(this.ctx);
              filters.setSelectionFilter(point, seriesIndex, dataPointIndex);
              this.addEvents(point);

              if (elPointsWrap) {
                elPointsWrap.add(point);
              }
            } else {
              // dynamic array creation - multidimensional
              if (typeof w.globals.pointsArray[seriesIndex] === 'undefined') w.globals.pointsArray[seriesIndex] = [];
              w.globals.pointsArray[seriesIndex].push([p.x[q], p.y[q]]);
            }
          }
        }

        return elPointsWrap;
      }
    }, {
      key: "getMarkerConfig",
      value: function getMarkerConfig(cssClass, seriesIndex) {
        var dataPointIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var w = this.w;
        var pStyle = this.getMarkerStyle(seriesIndex);
        var pSize = w.globals.markers.size[seriesIndex];
        var m = w.config.markers; // discrete markers is an option where user can specify a particular marker with different size and color

        if (dataPointIndex !== null && m.discrete.length) {
          m.discrete.map(function (marker) {
            if (marker.seriesIndex === seriesIndex && marker.dataPointIndex === dataPointIndex) {
              pStyle.pointStrokeColor = marker.strokeColor;
              pStyle.pointFillColor = marker.fillColor;
              pSize = marker.size;
            }
          });
        }

        return {
          pSize: pSize,
          pRadius: m.radius,
          width: Array.isArray(m.width) ? m.width[seriesIndex] : m.width,
          height: Array.isArray(m.height) ? m.height[seriesIndex] : m.height,
          pointStrokeWidth: Array.isArray(m.strokeWidth) ? m.strokeWidth[seriesIndex] : m.strokeWidth,
          pointStrokeColor: pStyle.pointStrokeColor,
          pointFillColor: pStyle.pointFillColor,
          shape: Array.isArray(m.shape) ? m.shape[seriesIndex] : m.shape,
          class: cssClass,
          pointStrokeOpacity: Array.isArray(m.strokeOpacity) ? m.strokeOpacity[seriesIndex] : m.strokeOpacity,
          pointStrokeDashArray: Array.isArray(m.strokeDashArray) ? m.strokeDashArray[seriesIndex] : m.strokeDashArray,
          pointFillOpacity: Array.isArray(m.fillOpacity) ? m.fillOpacity[seriesIndex] : m.fillOpacity,
          seriesIndex: seriesIndex
        };
      }
    }, {
      key: "addEvents",
      value: function addEvents(circle) {
        var w = this.w;
        var graphics = new Graphics(this.ctx);
        circle.node.addEventListener('mouseenter', graphics.pathMouseEnter.bind(this.ctx, circle));
        circle.node.addEventListener('mouseleave', graphics.pathMouseLeave.bind(this.ctx, circle));
        circle.node.addEventListener('mousedown', graphics.pathMouseDown.bind(this.ctx, circle));
        circle.node.addEventListener('click', w.config.markers.onClick);
        circle.node.addEventListener('dblclick', w.config.markers.onDblClick);
        circle.node.addEventListener('touchstart', graphics.pathMouseDown.bind(this.ctx, circle), {
          passive: true
        });
      }
    }, {
      key: "getMarkerStyle",
      value: function getMarkerStyle(seriesIndex) {
        var w = this.w;
        var colors = w.globals.markers.colors;
        var strokeColors = w.config.markers.strokeColor || w.config.markers.strokeColors;
        var pointStrokeColor = Array.isArray(strokeColors) ? strokeColors[seriesIndex] : strokeColors;
        var pointFillColor = Array.isArray(colors) ? colors[seriesIndex] : colors;
        return {
          pointStrokeColor: pointStrokeColor,
          pointFillColor: pointFillColor
        };
      }
    }]);

    return Markers;
  }();

  /**
   * ApexCharts Scatter Class.
   * This Class also handles bubbles chart as currently there is no major difference in drawing them,
   * @module Scatter
   **/

  var Scatter = /*#__PURE__*/function () {
    function Scatter(ctx) {
      _classCallCheck(this, Scatter);

      this.ctx = ctx;
      this.w = ctx.w;
      this.initialAnim = this.w.config.chart.animations.enabled;
      this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled;
    }

    _createClass(Scatter, [{
      key: "draw",
      value: function draw(elSeries, j, opts) {
        var w = this.w;
        var graphics = new Graphics(this.ctx);
        var realIndex = opts.realIndex;
        var pointsPos = opts.pointsPos;
        var zRatio = opts.zRatio;
        var elPointsMain = opts.elParent;
        var elPointsWrap = graphics.group({
          class: "apexcharts-series-markers apexcharts-series-".concat(w.config.chart.type)
        });
        elPointsWrap.attr('clip-path', "url(#gridRectMarkerMask".concat(w.globals.cuid, ")"));

        if (Array.isArray(pointsPos.x)) {
          for (var q = 0; q < pointsPos.x.length; q++) {
            var dataPointIndex = j + 1;
            var shouldDraw = true; // a small hack as we have 2 points for the first val to connect it

            if (j === 0 && q === 0) dataPointIndex = 0;
            if (j === 0 && q === 1) dataPointIndex = 1;
            var radius = 0;
            var finishRadius = w.globals.markers.size[realIndex];

            if (zRatio !== Infinity) {
              // means we have a bubble
              finishRadius = w.globals.seriesZ[realIndex][dataPointIndex] / zRatio;
              var bubble = w.config.plotOptions.bubble;

              if (bubble.minBubbleRadius && finishRadius < bubble.minBubbleRadius) {
                finishRadius = bubble.minBubbleRadius;
              }

              if (bubble.maxBubbleRadius && finishRadius > bubble.maxBubbleRadius) {
                finishRadius = bubble.maxBubbleRadius;
              }
            }

            if (!w.config.chart.animations.enabled) {
              radius = finishRadius;
            }

            var x = pointsPos.x[q];
            var y = pointsPos.y[q];
            radius = radius || 0;

            if (y === null || typeof w.globals.series[realIndex][dataPointIndex] === 'undefined') {
              shouldDraw = false;
            }

            if (shouldDraw) {
              var point = this.drawPoint(x, y, radius, finishRadius, realIndex, dataPointIndex, j);
              elPointsWrap.add(point);
            }

            elPointsMain.add(elPointsWrap);
          }
        }
      }
    }, {
      key: "drawPoint",
      value: function drawPoint(x, y, radius, finishRadius, realIndex, dataPointIndex, j) {
        var w = this.w;
        var i = realIndex;
        var anim = new Animations(this.ctx);
        var filters = new Filters(this.ctx);
        var fill = new Fill(this.ctx);
        var markers = new Markers(this.ctx);
        var graphics = new Graphics(this.ctx);
        var markerConfig = markers.getMarkerConfig('apexcharts-marker', i);
        var pathFillCircle = fill.fillPath({
          seriesNumber: realIndex,
          dataPointIndex: dataPointIndex,
          patternUnits: 'objectBoundingBox',
          value: w.globals.series[realIndex][j]
        });
        var el;

        if (markerConfig.shape === 'circle') {
          el = graphics.drawCircle(radius);
        } else if (markerConfig.shape === 'square' || markerConfig.shape === 'rect') {
          el = graphics.drawRect(0, 0, markerConfig.width - markerConfig.pointStrokeWidth / 2, markerConfig.height - markerConfig.pointStrokeWidth / 2, markerConfig.pRadius);
        }

        if (w.config.series[i].data[dataPointIndex]) {
          if (w.config.series[i].data[dataPointIndex].fillColor) {
            pathFillCircle = w.config.series[i].data[dataPointIndex].fillColor;
          }
        }

        el.attr({
          x: x - markerConfig.width / 2 - markerConfig.pointStrokeWidth / 2,
          y: y - markerConfig.height / 2 - markerConfig.pointStrokeWidth / 2,
          cx: x,
          cy: y,
          fill: pathFillCircle,
          'fill-opacity': markerConfig.pointFillOpacity,
          stroke: markerConfig.pointStrokeColor,
          r: finishRadius,
          'stroke-width': markerConfig.pointStrokeWidth,
          'stroke-dasharray': markerConfig.pointStrokeDashArray,
          'stroke-opacity': markerConfig.pointStrokeOpacity
        });

        if (w.config.chart.dropShadow.enabled) {
          var dropShadow = w.config.chart.dropShadow;
          filters.dropShadow(el, dropShadow, realIndex);
        }

        if (this.initialAnim && !w.globals.dataChanged && !w.globals.resized) {
          var speed = w.config.chart.animations.speed;
          anim.animateMarker(el, 0, markerConfig.shape === 'circle' ? finishRadius : {
            width: markerConfig.width,
            height: markerConfig.height
          }, speed, w.globals.easing, function () {
            window.setTimeout(function () {
              anim.animationCompleted(el);
            }, 100);
          });
        } else {
          w.globals.animationEnded = true;
        }

        if (w.globals.dataChanged && markerConfig.shape === 'circle') {
          if (this.dynamicAnim) {
            var _speed = w.config.chart.animations.dynamicAnimation.speed;
            var prevX, prevY, prevR;
            var prevPathJ = null;
            prevPathJ = w.globals.previousPaths[realIndex] && w.globals.previousPaths[realIndex][j];

            if (typeof prevPathJ !== 'undefined' && prevPathJ !== null) {
              // series containing less elements will ignore these values and revert to 0
              prevX = prevPathJ.x;
              prevY = prevPathJ.y;
              prevR = typeof prevPathJ.r !== 'undefined' ? prevPathJ.r : finishRadius;
            }

            for (var cs = 0; cs < w.globals.collapsedSeries.length; cs++) {
              if (w.globals.collapsedSeries[cs].index === realIndex) {
                _speed = 1;
                finishRadius = 0;
              }
            }

            if (x === 0 && y === 0) finishRadius = 0;
            anim.animateCircle(el, {
              cx: prevX,
              cy: prevY,
              r: prevR
            }, {
              cx: x,
              cy: y,
              r: finishRadius
            }, _speed, w.globals.easing);
          } else {
            el.attr({
              r: finishRadius
            });
          }
        }

        el.attr({
          rel: dataPointIndex,
          j: dataPointIndex,
          index: realIndex,
          'default-marker-size': finishRadius
        });
        filters.setSelectionFilter(el, realIndex, dataPointIndex);
        markers.addEvents(el);
        el.node.classList.add('apexcharts-marker');
        return el;
      }
    }, {
      key: "centerTextInBubble",
      value: function centerTextInBubble(y) {
        var w = this.w;
        y = y + parseInt(w.config.dataLabels.style.fontSize, 10) / 4;
        return {
          y: y
        };
      }
    }]);

    return Scatter;
  }();

  /**
   * ApexCharts DataLabels Class for drawing dataLabels on Axes based Charts.
   *
   * @module DataLabels
   **/

  var DataLabels = /*#__PURE__*/function () {
    function DataLabels(ctx) {
      _classCallCheck(this, DataLabels);

      this.ctx = ctx;
      this.w = ctx.w;
    } // When there are many datalabels to be printed, and some of them overlaps each other in the same series, this method will take care of that
    // Also, when datalabels exceeds the drawable area and get clipped off, we need to adjust and move some pixels to make them visible again


    _createClass(DataLabels, [{
      key: "dataLabelsCorrection",
      value: function dataLabelsCorrection(x, y, val, i, dataPointIndex, alwaysDrawDataLabel, fontSize) {
        var w = this.w;
        var graphics = new Graphics(this.ctx);
        var drawnextLabel = false; //

        var textRects = graphics.getTextRects(val, fontSize);
        var width = textRects.width;
        var height = textRects.height;
        if (y < 0) y = 0;
        if (y > w.globals.gridHeight + height) y = w.globals.gridHeight + height / 2; // first value in series, so push an empty array

        if (typeof w.globals.dataLabelsRects[i] === 'undefined') w.globals.dataLabelsRects[i] = []; // then start pushing actual rects in that sub-array

        w.globals.dataLabelsRects[i].push({
          x: x,
          y: y,
          width: width,
          height: height
        });
        var len = w.globals.dataLabelsRects[i].length - 2;
        var lastDrawnIndex = typeof w.globals.lastDrawnDataLabelsIndexes[i] !== 'undefined' ? w.globals.lastDrawnDataLabelsIndexes[i][w.globals.lastDrawnDataLabelsIndexes[i].length - 1] : 0;

        if (typeof w.globals.dataLabelsRects[i][len] !== 'undefined') {
          var lastDataLabelRect = w.globals.dataLabelsRects[i][lastDrawnIndex];

          if ( // next label forward and x not intersecting
          x > lastDataLabelRect.x + lastDataLabelRect.width + 2 || y > lastDataLabelRect.y + lastDataLabelRect.height + 2 || x + width < lastDataLabelRect.x // next label is going to be drawn backwards
          ) {
              // the 2 indexes don't override, so OK to draw next label
              drawnextLabel = true;
            }
        }

        if (dataPointIndex === 0 || alwaysDrawDataLabel) {
          drawnextLabel = true;
        }

        return {
          x: x,
          y: y,
          textRects: textRects,
          drawnextLabel: drawnextLabel
        };
      }
    }, {
      key: "drawDataLabel",
      value: function drawDataLabel(pos, i, j) {
        var _this = this;
        var strokeWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;
        // this method handles line, area, bubble, scatter charts as those charts contains markers/points which have pre-defined x/y positions
        // all other charts like radar / bars / heatmaps will define their own drawDataLabel routine
        var w = this.w;
        var graphics = new Graphics(this.ctx);
        var dataLabelsConfig = w.config.dataLabels;
        var x = 0;
        var y = 0;
        var dataPointIndex = j;
        var elDataLabelsWrap = null;

        if (!dataLabelsConfig.enabled || !Array.isArray(pos.x)) {
          return elDataLabelsWrap;
        }

        elDataLabelsWrap = graphics.group({
          class: 'apexcharts-data-labels'
        });

        for (var q = 0; q < pos.x.length; q++) {
          x = pos.x[q] + dataLabelsConfig.offsetX;
          y = pos.y[q] + dataLabelsConfig.offsetY + strokeWidth;

          if (!isNaN(x)) {
            // a small hack as we have 2 points for the first val to connect it
            if (j === 1 && q === 0) dataPointIndex = 0;
            if (j === 1 && q === 1) dataPointIndex = 1;
            var val = w.globals.series[i][dataPointIndex];
            var text = '';

            var getText = function getText(v) {
              return w.config.dataLabels.formatter(v, {
                ctx: _this.ctx,
                seriesIndex: i,
                dataPointIndex: dataPointIndex,
                w: w
              });
            };

            if (w.config.chart.type === 'bubble') {
              val = w.globals.seriesZ[i][dataPointIndex];
              text = getText(val);
              y = pos.y[q];
              var scatter = new Scatter(this.ctx);
              var centerTextInBubbleCoords = scatter.centerTextInBubble(y, i, dataPointIndex);
              y = centerTextInBubbleCoords.y;
            } else {
              if (typeof val !== 'undefined') {
                text = getText(val);
              }
            }

            this.plotDataLabelsText({
              x: x,
              y: y,
              text: text,
              i: i,
              j: dataPointIndex,
              parent: elDataLabelsWrap,
              offsetCorrection: true,
              dataLabelsConfig: w.config.dataLabels
            });
          }
        }

        return elDataLabelsWrap;
      }
    }, {
      key: "plotDataLabelsText",
      value: function plotDataLabelsText(opts) {
        var w = this.w;
        var graphics = new Graphics(this.ctx);
        var x = opts.x,
            y = opts.y,
            i = opts.i,
            j = opts.j,
            text = opts.text,
            textAnchor = opts.textAnchor,
            fontSize = opts.fontSize,
            parent = opts.parent,
            dataLabelsConfig = opts.dataLabelsConfig,
            color = opts.color,
            alwaysDrawDataLabel = opts.alwaysDrawDataLabel,
            offsetCorrection = opts.offsetCorrection;

        if (Array.isArray(w.config.dataLabels.enabledOnSeries)) {
          if (w.config.dataLabels.enabledOnSeries.indexOf(i) < 0) {
            return;
          }
        }

        var correctedLabels = {
          x: x,
          y: y,
          drawnextLabel: true
        };

        if (offsetCorrection) {
          correctedLabels = this.dataLabelsCorrection(x, y, text, i, j, alwaysDrawDataLabel, parseInt(dataLabelsConfig.style.fontSize, 10));
        } // when zoomed, we don't need to correct labels offsets,
        // but if normally, labels get cropped, correct them


        if (!w.globals.zoomed) {
          x = correctedLabels.x;
          y = correctedLabels.y;
        }

        if (correctedLabels.textRects) ;

        var dataLabelColor = w.globals.dataLabels.style.colors[i];

        if ((w.config.chart.type === 'bar' || w.config.chart.type === 'rangeBar') && w.config.plotOptions.bar.distributed || w.config.dataLabels.distributed) {
          dataLabelColor = w.globals.dataLabels.style.colors[j];
        }

        if (typeof dataLabelColor === 'function') {
          dataLabelColor = dataLabelColor({
            series: w.globals.series,
            seriesIndex: i,
            dataPointIndex: j,
            w: w
          });
        }

        if (color) {
          dataLabelColor = color;
        }

        var offX = dataLabelsConfig.offsetX;
        var offY = dataLabelsConfig.offsetY;

        if (w.config.chart.type === 'bar' || w.config.chart.type === 'rangeBar') {
          // for certain chart types, we handle offsets while calculating datalabels pos
          // why? because bars/column may have negative values and based on that
          // offsets becomes reversed
          offX = 0;
          offY = 0;
        }

        if (correctedLabels.drawnextLabel) {
          var dataLabelText = graphics.drawText({
            width: 100,
            height: parseInt(dataLabelsConfig.style.fontSize, 10),
            x: x + offX,
            y: y + offY,
            foreColor: dataLabelColor,
            textAnchor: textAnchor || dataLabelsConfig.textAnchor,
            text: text,
            fontSize: fontSize || dataLabelsConfig.style.fontSize,
            fontFamily: dataLabelsConfig.style.fontFamily,
            fontWeight: dataLabelsConfig.style.fontWeight || 'normal'
          });
          dataLabelText.attr({
            class: 'apexcharts-datalabel',
            cx: x,
            cy: y
          });

          if (dataLabelsConfig.dropShadow.enabled) {
            var textShadow = dataLabelsConfig.dropShadow;
            var filters = new Filters(this.ctx);
            filters.dropShadow(dataLabelText, textShadow);
          }

          parent.add(dataLabelText);

          if (typeof w.globals.lastDrawnDataLabelsIndexes[i] === 'undefined') {
            w.globals.lastDrawnDataLabelsIndexes[i] = [];
          }

          w.globals.lastDrawnDataLabelsIndexes[i].push(j);
        }
      }
    }, {
      key: "addBackgroundToDataLabel",
      value: function addBackgroundToDataLabel(el, coords) {
        var w = this.w;
        var bCnf = w.config.dataLabels.background;
        var paddingH = bCnf.padding;
        var paddingV = bCnf.padding / 2;
        var width = coords.width;
        var height = coords.height;
        var graphics = new Graphics(this.ctx);
        var elRect = graphics.drawRect(coords.x - paddingH, coords.y - paddingV / 2, width + paddingH * 2, height + paddingV, bCnf.borderRadius, w.config.chart.background === 'transparent' ? '#fff' : w.config.chart.background, bCnf.opacity, bCnf.borderWidth, bCnf.borderColor);

        if (bCnf.dropShadow.enabled) {
          var filters = new Filters(this.ctx);
          filters.dropShadow(elRect, bCnf.dropShadow);
        }

        return elRect;
      }
    }, {
      key: "dataLabelsBackground",
      value: function dataLabelsBackground() {
        var w = this.w;
        if (w.config.chart.type === 'bubble') return;
        var elDataLabels = w.globals.dom.baseEl.querySelectorAll('.apexcharts-datalabels text');

        for (var i = 0; i < elDataLabels.length; i++) {
          var el = elDataLabels[i];
          var coords = el.getBBox();
          var elRect = null;

          if (coords.width && coords.height) {
            elRect = this.addBackgroundToDataLabel(el, coords);
          }

          if (elRect) {
            el.parentNode.insertBefore(elRect.node, el);
            var background = el.getAttribute('fill');
            var shouldAnim = w.config.chart.animations.enabled && !w.globals.resized && !w.globals.dataChanged;

            if (shouldAnim) {
              elRect.animate().attr({
                fill: background
              });
            } else {
              elRect.attr({
                fill: background
              });
            }

            el.setAttribute('fill', w.config.dataLabels.background.foreColor);
          }
        }
      }
    }, {
      key: "bringForward",
      value: function bringForward() {
        var w = this.w;
        var elDataLabelsNodes = w.globals.dom.baseEl.querySelectorAll('.apexcharts-datalabels');
        var elSeries = w.globals.dom.baseEl.querySelector('.apexcharts-plot-series:last-child');

        for (var i = 0; i < elDataLabelsNodes.length; i++) {
          if (elSeries) {
            elSeries.insertBefore(elDataLabelsNodes[i], elSeries.nextSibling);
          }
        }
      }
    }]);

    return DataLabels;
  }();

  var BarDataLabels = /*#__PURE__*/function () {
    function BarDataLabels(barCtx) {
      _classCallCheck(this, BarDataLabels);

      this.w = barCtx.w;
      this.barCtx = barCtx;
    }
    /** handleBarDataLabels is used to calculate the positions for the data-labels
     * It also sets the element's data attr for bars and calls drawCalculatedBarDataLabels()
     * After calculating, it also calls the function to draw data labels
     * @memberof Bar
     * @param {object} {barProps} most of the bar properties used throughout the bar
     * drawing function
     * @return {object} dataLabels node-element which you can append later
     **/


    _createClass(BarDataLabels, [{
      key: "handleBarDataLabels",
      value: function handleBarDataLabels(opts) {
        var x = opts.x,
            y = opts.y,
            y1 = opts.y1,
            y2 = opts.y2,
            i = opts.i,
            j = opts.j,
            realIndex = opts.realIndex,
            series = opts.series,
            barHeight = opts.barHeight,
            barWidth = opts.barWidth,
            barYPosition = opts.barYPosition,
            visibleSeries = opts.visibleSeries,
            renderedPath = opts.renderedPath;
        var w = this.w;
        var graphics = new Graphics(this.barCtx.ctx);
        var strokeWidth = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[realIndex] : this.barCtx.strokeWidth;
        var bcx = x + parseFloat(barWidth * visibleSeries);
        var bcy = y + parseFloat(barHeight * visibleSeries);

        if (w.globals.isXNumeric && !w.globals.isBarHorizontal) {
          bcx = x + parseFloat(barWidth * (visibleSeries + 1));
          bcy = y + parseFloat(barHeight * (visibleSeries + 1)) - strokeWidth;
        }

        var dataLabels = null;
        var dataLabelsX = x;
        var dataLabelsY = y;
        var dataLabelsPos = {};
        var dataLabelsConfig = w.config.dataLabels;
        var barDataLabelsConfig = this.barCtx.barOptions.dataLabels;

        if (typeof barYPosition !== 'undefined' && this.barCtx.isTimelineBar) {
          bcy = barYPosition;
          dataLabelsY = barYPosition;
        }

        var offX = dataLabelsConfig.offsetX;
        var offY = dataLabelsConfig.offsetY;
        var textRects = {
          width: 0,
          height: 0
        };

        if (w.config.dataLabels.enabled) {
          var yLabel = this.barCtx.series[i][j];
          textRects = graphics.getTextRects(w.globals.yLabelFormatters[0](yLabel), parseFloat(dataLabelsConfig.style.fontSize));
        }

        var params = {
          x: x,
          y: y,
          i: i,
          j: j,
          renderedPath: renderedPath,
          bcx: bcx,
          bcy: bcy,
          barHeight: barHeight,
          barWidth: barWidth,
          textRects: textRects,
          strokeWidth: strokeWidth,
          dataLabelsX: dataLabelsX,
          dataLabelsY: dataLabelsY,
          barDataLabelsConfig: barDataLabelsConfig,
          offX: offX,
          offY: offY
        };

        if (this.barCtx.isHorizontal) {
          dataLabelsPos = this.calculateBarsDataLabelsPosition(params);
        } else {
          dataLabelsPos = this.calculateColumnsDataLabelsPosition(params);
        }

        renderedPath.attr({
          cy: dataLabelsPos.bcy,
          cx: dataLabelsPos.bcx,
          j: j,
          val: series[i][j],
          barHeight: barHeight,
          barWidth: barWidth
        });
        dataLabels = this.drawCalculatedDataLabels({
          x: dataLabelsPos.dataLabelsX,
          y: dataLabelsPos.dataLabelsY,
          val: this.barCtx.isTimelineBar ? [y1, y2] : series[i][j],
          i: realIndex,
          j: j,
          barWidth: barWidth,
          barHeight: barHeight,
          textRects: textRects,
          dataLabelsConfig: dataLabelsConfig
        });
        return dataLabels;
      }
    }, {
      key: "calculateColumnsDataLabelsPosition",
      value: function calculateColumnsDataLabelsPosition(opts) {
        var w = this.w;
        var i = opts.i,
            j = opts.j,
            y = opts.y,
            bcx = opts.bcx,
            barWidth = opts.barWidth,
            barHeight = opts.barHeight,
            textRects = opts.textRects,
            dataLabelsY = opts.dataLabelsY,
            barDataLabelsConfig = opts.barDataLabelsConfig,
            strokeWidth = opts.strokeWidth,
            offX = opts.offX,
            offY = opts.offY;
        var dataLabelsX;
        barHeight = Math.abs(barHeight);
        var vertical = w.config.plotOptions.bar.dataLabels.orientation === 'vertical';
        bcx = bcx - strokeWidth / 2;
        var dataPointsDividedWidth = w.globals.gridWidth / w.globals.dataPoints;

        if (w.globals.isXNumeric) {
          dataLabelsX = bcx - barWidth / 2 + offX;
        } else {
          dataLabelsX = bcx - dataPointsDividedWidth + barWidth / 2 + offX;
        }

        if (vertical) {
          var offsetDLX = 2;
          dataLabelsX = dataLabelsX + textRects.height / 2 - strokeWidth / 2 - offsetDLX;
        }

        var valIsNegative = this.barCtx.series[i][j] < 0;
        var newY = y;

        if (this.barCtx.isReversed) {
          newY = y - barHeight + (valIsNegative ? barHeight * 2 : 0);
          y = y - barHeight;
        }

        switch (barDataLabelsConfig.position) {
          case 'center':
            if (vertical) {
              if (valIsNegative) {
                dataLabelsY = newY + barHeight / 2 + offY;
              } else {
                dataLabelsY = newY + barHeight / 2 - offY;
              }
            } else {
              if (valIsNegative) {
                dataLabelsY = newY - barHeight / 2 + textRects.height / 2 + offY;
              } else {
                dataLabelsY = newY + barHeight / 2 + textRects.height / 2 - offY;
              }
            }

            break;

          case 'bottom':
            if (vertical) {
              if (valIsNegative) {
                dataLabelsY = newY + barHeight + offY;
              } else {
                dataLabelsY = newY + barHeight - offY;
              }
            } else {
              if (valIsNegative) {
                dataLabelsY = newY - barHeight + textRects.height + strokeWidth + offY;
              } else {
                dataLabelsY = newY + barHeight - textRects.height / 2 + strokeWidth - offY;
              }
            }

            break;

          case 'top':
            if (vertical) {
              if (valIsNegative) {
                dataLabelsY = newY + offY;
              } else {
                dataLabelsY = newY - offY;
              }
            } else {
              if (valIsNegative) {
                dataLabelsY = newY - textRects.height / 2 - offY;
              } else {
                dataLabelsY = newY + textRects.height + offY;
              }
            }

            break;
        }

        if (!w.config.chart.stacked) {
          if (dataLabelsY < 0) {
            dataLabelsY = 0 + strokeWidth;
          } else if (dataLabelsY + textRects.height / 3 > w.globals.gridHeight) {
            dataLabelsY = w.globals.gridHeight - strokeWidth;
          }
        }

        return {
          bcx: bcx,
          bcy: y,
          dataLabelsX: dataLabelsX,
          dataLabelsY: dataLabelsY
        };
      }
    }, {
      key: "calculateBarsDataLabelsPosition",
      value: function calculateBarsDataLabelsPosition(opts) {
        var w = this.w;
        var x = opts.x,
            i = opts.i,
            j = opts.j,
            bcy = opts.bcy,
            barHeight = opts.barHeight,
            barWidth = opts.barWidth,
            textRects = opts.textRects,
            dataLabelsX = opts.dataLabelsX,
            strokeWidth = opts.strokeWidth,
            barDataLabelsConfig = opts.barDataLabelsConfig,
            offX = opts.offX,
            offY = opts.offY;
        var dataPointsDividedHeight = w.globals.gridHeight / w.globals.dataPoints;
        barWidth = Math.abs(barWidth);
        var dataLabelsY = bcy - (this.barCtx.isTimelineBar ? 0 : dataPointsDividedHeight) + barHeight / 2 + textRects.height / 2 + offY - 3;
        var valIsNegative = this.barCtx.series[i][j] < 0;
        var newX = x;

        if (this.barCtx.isReversed) {
          newX = x + barWidth - (valIsNegative ? barWidth * 2 : 0);
          x = w.globals.gridWidth - barWidth;
        }

        switch (barDataLabelsConfig.position) {
          case 'center':
            if (valIsNegative) {
              dataLabelsX = newX + barWidth / 2 - offX;
            } else {
              dataLabelsX = Math.max(textRects.width / 2, newX - barWidth / 2) + offX;
            }

            break;

          case 'bottom':
            if (valIsNegative) {
              dataLabelsX = newX + barWidth - strokeWidth - Math.round(textRects.width / 2) - offX;
            } else {
              dataLabelsX = newX - barWidth + strokeWidth + Math.round(textRects.width / 2) + offX;
            }

            break;

          case 'top':
            if (valIsNegative) {
              dataLabelsX = newX - strokeWidth + Math.round(textRects.width / 2) - offX;
            } else {
              dataLabelsX = newX - strokeWidth - Math.round(textRects.width / 2) + offX;
            }

            break;
        }

        if (!w.config.chart.stacked) {
          if (dataLabelsX < 0) {
            dataLabelsX = dataLabelsX + textRects.width + strokeWidth;
          } else if (dataLabelsX + textRects.width / 2 > w.globals.gridWidth) {
            dataLabelsX = w.globals.gridWidth - textRects.width - strokeWidth;
          }
        }

        return {
          bcx: x,
          bcy: bcy,
          dataLabelsX: dataLabelsX,
          dataLabelsY: dataLabelsY
        };
      }
    }, {
      key: "drawCalculatedDataLabels",
      value: function drawCalculatedDataLabels(_ref) {
        var x = _ref.x,
            y = _ref.y,
            val = _ref.val,
            i = _ref.i,
            j = _ref.j,
            textRects = _ref.textRects,
            barHeight = _ref.barHeight,
            barWidth = _ref.barWidth,
            dataLabelsConfig = _ref.dataLabelsConfig;
        var w = this.w;
        var rotate = 'rotate(0)';
        if (w.config.plotOptions.bar.dataLabels.orientation === 'vertical') rotate = "rotate(-90, ".concat(x, ", ").concat(y, ")");
        var dataLabels = new DataLabels(this.barCtx.ctx);
        var graphics = new Graphics(this.barCtx.ctx);
        var formatter = dataLabelsConfig.formatter;
        var elDataLabelsWrap = null;
        var isSeriesNotCollapsed = w.globals.collapsedSeriesIndices.indexOf(i) > -1;

        if (dataLabelsConfig.enabled && !isSeriesNotCollapsed) {
          elDataLabelsWrap = graphics.group({
            class: 'apexcharts-data-labels',
            transform: rotate
          });
          var text = '';

          if (typeof val !== 'undefined') {
            text = formatter(val, {
              seriesIndex: i,
              dataPointIndex: j,
              w: w
            });
          }

          if (val === 0 && w.config.chart.stacked) {
            // in a stacked bar/column chart, 0 value should be neglected as it will overlap on the next element
            text = '';
          }

          var valIsNegative = w.globals.series[i][j] <= 0;
          var position = w.config.plotOptions.bar.dataLabels.position;

          if (w.config.plotOptions.bar.dataLabels.orientation === 'vertical') {
            if (position === 'top') {
              if (valIsNegative) dataLabelsConfig.textAnchor = 'end';else dataLabelsConfig.textAnchor = 'start';
            }

            if (position === 'center') {
              dataLabelsConfig.textAnchor = 'middle';
            }

            if (position === 'bottom') {
              if (valIsNegative) dataLabelsConfig.textAnchor = 'end';else dataLabelsConfig.textAnchor = 'start';
            }
          }

          if (this.barCtx.isTimelineBar && this.barCtx.barOptions.dataLabels.hideOverflowingLabels) {
            // hide the datalabel if it cannot fit into the rect
            var txRect = graphics.getTextRects(text, parseFloat(dataLabelsConfig.style.fontSize));

            if (barWidth < txRect.width) {
              text = '';
            }
          }

          if (w.config.chart.stacked && this.barCtx.barOptions.dataLabels.hideOverflowingLabels) {
            // if there is not enough space to draw the label in the bar/column rect, check hideOverflowingLabels property to prevent overflowing on wrong rect
            // Note: This issue is only seen in stacked charts
            if (this.barCtx.isHorizontal) {
              // FIXED: Don't always hide the stacked negative side label
              // A negative value will result in a negative bar width
              // Only hide the text when the width is smaller (a higher negative number) than the negative bar width.
              if (barWidth > 0 && textRects.width / 1.6 > barWidth || barWidth < 0 && textRects.width / 1.6 < barWidth) {
                text = '';
              }
            } else {
              if (textRects.height / 1.6 > barHeight) {
                text = '';
              }
            }
          }

          var modifiedDataLabelsConfig = _objectSpread2({}, dataLabelsConfig);

          if (this.barCtx.isHorizontal) {
            if (val < 0) {
              if (dataLabelsConfig.textAnchor === 'start') {
                modifiedDataLabelsConfig.textAnchor = 'end';
              } else if (dataLabelsConfig.textAnchor === 'end') {
                modifiedDataLabelsConfig.textAnchor = 'start';
              }
            }
          }

          dataLabels.plotDataLabelsText({
            x: x,
            y: y,
            text: text,
            i: i,
            j: j,
            parent: elDataLabelsWrap,
            dataLabelsConfig: modifiedDataLabelsConfig,
            alwaysDrawDataLabel: true,
            offsetCorrection: true
          });
        }

        return elDataLabelsWrap;
      }
    }]);

    return BarDataLabels;
  }();

  /**
   * ApexCharts Series Class for interaction with the Series of the chart.
   *
   * @module Series
   **/

  var Series = /*#__PURE__*/function () {
    function Series(ctx) {
      _classCallCheck(this, Series);

      this.ctx = ctx;
      this.w = ctx.w;
      this.legendInactiveClass = 'legend-mouseover-inactive';
    }

    _createClass(Series, [{
      key: "getAllSeriesEls",
      value: function getAllSeriesEls() {
        return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series");
      }
    }, {
      key: "getSeriesByName",
      value: function getSeriesByName(seriesName) {
        return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(Utils.escapeString(seriesName), "']"));
      }
    }, {
      key: "isSeriesHidden",
      value: function isSeriesHidden(seriesName) {
        var targetElement = this.getSeriesByName(seriesName);
        var realIndex = parseInt(targetElement.getAttribute('data:realIndex'), 10);
        var isHidden = targetElement.classList.contains('apexcharts-series-collapsed');
        return {
          isHidden: isHidden,
          realIndex: realIndex
        };
      }
    }, {
      key: "addCollapsedClassToSeries",
      value: function addCollapsedClassToSeries(elSeries, index) {
        var w = this.w;

        function iterateOnAllCollapsedSeries(series) {
          for (var cs = 0; cs < series.length; cs++) {
            if (series[cs].index === index) {
              elSeries.node.classList.add('apexcharts-series-collapsed');
            }
          }
        }

        iterateOnAllCollapsedSeries(w.globals.collapsedSeries);
        iterateOnAllCollapsedSeries(w.globals.ancillaryCollapsedSeries);
      }
    }, {
      key: "toggleSeries",
      value: function toggleSeries(seriesName) {
        var isSeriesHidden = this.isSeriesHidden(seriesName);
        this.ctx.legend.legendHelpers.toggleDataSeries(isSeriesHidden.realIndex, isSeriesHidden.isHidden);
        return isSeriesHidden.isHidden;
      }
    }, {
      key: "showSeries",
      value: function showSeries(seriesName) {
        var isSeriesHidden = this.isSeriesHidden(seriesName);

        if (isSeriesHidden.isHidden) {
          this.ctx.legend.legendHelpers.toggleDataSeries(isSeriesHidden.realIndex, true);
        }
      }
    }, {
      key: "hideSeries",
      value: function hideSeries(seriesName) {
        var isSeriesHidden = this.isSeriesHidden(seriesName);

        if (!isSeriesHidden.isHidden) {
          this.ctx.legend.legendHelpers.toggleDataSeries(isSeriesHidden.realIndex, false);
        }
      }
    }, {
      key: "resetSeries",
      value: function resetSeries() {
        var shouldUpdateChart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var shouldResetZoom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var shouldResetCollapsed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var w = this.w;
        var series = Utils.clone(w.globals.initialSeries);
        w.globals.previousPaths = [];

        if (shouldResetCollapsed) {
          w.globals.collapsedSeries = [];
          w.globals.ancillaryCollapsedSeries = [];
          w.globals.collapsedSeriesIndices = [];
          w.globals.ancillaryCollapsedSeriesIndices = [];
        } else {
          series = this.emptyCollapsedSeries(series);
        }

        w.config.series = series;

        if (shouldUpdateChart) {
          if (shouldResetZoom) {
            w.globals.zoomed = false;
            this.ctx.updateHelpers.revertDefaultAxisMinMax();
          }

          this.ctx.updateHelpers._updateSeries(series, w.config.chart.animations.dynamicAnimation.enabled);
        }
      }
    }, {
      key: "emptyCollapsedSeries",
      value: function emptyCollapsedSeries(series) {
        var w = this.w;

        for (var i = 0; i < series.length; i++) {
          if (w.globals.collapsedSeriesIndices.indexOf(i) > -1) {
            series[i].data = [];
          }
        }

        return series;
      }
    }, {
      key: "toggleSeriesOnHover",
      value: function toggleSeriesOnHover(e, targetElement) {
        var w = this.w;
        var allSeriesEls = w.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels");

        if (e.type === 'mousemove') {
          var seriesCnt = parseInt(targetElement.getAttribute('rel'), 10) - 1;
          var seriesEl = null;
          var dataLabelEl = null;

          if (w.globals.axisCharts || w.config.chart.type === 'radialBar') {
            if (w.globals.axisCharts) {
              seriesEl = w.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(seriesCnt, "']"));
              dataLabelEl = w.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(seriesCnt, "']"));
            } else {
              seriesEl = w.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(seriesCnt + 1, "']"));
            }
          } else {
            seriesEl = w.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(seriesCnt + 1, "'] path"));
          }

          for (var se = 0; se < allSeriesEls.length; se++) {
            allSeriesEls[se].classList.add(this.legendInactiveClass);
          }

          if (seriesEl !== null) {
            if (!w.globals.axisCharts) {
              seriesEl.parentNode.classList.remove(this.legendInactiveClass);
            }

            seriesEl.classList.remove(this.legendInactiveClass);

            if (dataLabelEl !== null) {
              dataLabelEl.classList.remove(this.legendInactiveClass);
            }
          }
        } else if (e.type === 'mouseout') {
          for (var _se = 0; _se < allSeriesEls.length; _se++) {
            allSeriesEls[_se].classList.remove(this.legendInactiveClass);
          }
        }
      }
    }, {
      key: "highlightRangeInSeries",
      value: function highlightRangeInSeries(e, targetElement) {
        var _this = this;

        var w = this.w;
        var allHeatMapElements = w.globals.dom.baseEl.getElementsByClassName('apexcharts-heatmap-rect');

        var activeInactive = function activeInactive(action) {
          for (var i = 0; i < allHeatMapElements.length; i++) {
            allHeatMapElements[i].classList[action](_this.legendInactiveClass);
          }
        };

        var removeInactiveClassFromHoveredRange = function removeInactiveClassFromHoveredRange(range) {
          for (var i = 0; i < allHeatMapElements.length; i++) {
            var val = parseInt(allHeatMapElements[i].getAttribute('val'), 10);

            if (val >= range.from && val <= range.to) {
              allHeatMapElements[i].classList.remove(_this.legendInactiveClass);
            }
          }
        };

        if (e.type === 'mousemove') {
          var seriesCnt = parseInt(targetElement.getAttribute('rel'), 10) - 1;
          activeInactive('add');
          var range = w.config.plotOptions.heatmap.colorScale.ranges[seriesCnt];
          removeInactiveClassFromHoveredRange(range);
        } else if (e.type === 'mouseout') {
          activeInactive('remove');
        }
      }
    }, {
      key: "getActiveConfigSeriesIndex",
      value: function getActiveConfigSeriesIndex() {
        var ignoreBars = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';
        var w = this.w;
        var activeIndex = 0;

        if (w.config.series.length > 1) {
          // active series flag is required to know if user has not deactivated via legend click
          var activeSeriesIndex = w.config.series.map(function (s, index) {
            var hasBars = false;

            if (ignoreBars) {
              hasBars = w.config.series[index].type === 'bar' || w.config.series[index].type === 'column';
            }

            return s.data && s.data.length > 0 && !hasBars ? index : -1;
          });

          for (var a = order === 'asc' ? 0 : activeSeriesIndex.length - 1; order === 'asc' ? a < activeSeriesIndex.length : a >= 0; order === 'asc' ? a++ : a--) {
            if (activeSeriesIndex[a] !== -1) {
              activeIndex = activeSeriesIndex[a];
              break;
            }
          }
        }

        return activeIndex;
      }
    }, {
      key: "getPreviousPaths",
      value: function getPreviousPaths() {
        var w = this.w;
        w.globals.previousPaths = [];

        function pushPaths(seriesEls, i, type) {
          var paths = seriesEls[i].childNodes;
          var dArr = {
            type: type,
            paths: [],
            realIndex: seriesEls[i].getAttribute('data:realIndex')
          };

          for (var j = 0; j < paths.length; j++) {
            if (paths[j].hasAttribute('pathTo')) {
              var d = paths[j].getAttribute('pathTo');
              dArr.paths.push({
                d: d
              });
            }
          }

          w.globals.previousPaths.push(dArr);
        }

        var getPaths = function getPaths(chartType) {
          return w.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(chartType, "-series .apexcharts-series"));
        };

        var chartTypes = ['line', 'area', 'bar', 'rangebar', 'candlestick', 'radar'];
        chartTypes.forEach(function (type) {
          var paths = getPaths(type);

          for (var p = 0; p < paths.length; p++) {
            pushPaths(paths, p, type);
          }
        });
        this.handlePrevBubbleScatterPaths('bubble');
        this.handlePrevBubbleScatterPaths('scatter');
        var heatTreeSeries = w.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(w.config.chart.type, " .apexcharts-series"));

        if (heatTreeSeries.length > 0) {
          var _loop = function _loop(h) {
            var seriesEls = w.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(w.config.chart.type, " .apexcharts-series[data\\:realIndex='").concat(h, "'] rect"));
            var dArr = [];

            var _loop2 = function _loop2(i) {
              var getAttr = function getAttr(x) {
                return seriesEls[i].getAttribute(x);
              };

              var rect = {
                x: parseFloat(getAttr('x')),
                y: parseFloat(getAttr('y')),
                width: parseFloat(getAttr('width')),
                height: parseFloat(getAttr('height'))
              };
              dArr.push({
                rect: rect,
                color: seriesEls[i].getAttribute('color')
              });
            };

            for (var i = 0; i < seriesEls.length; i++) {
              _loop2(i);
            }

            w.globals.previousPaths.push(dArr);
          };

          for (var h = 0; h < heatTreeSeries.length; h++) {
            _loop(h);
          }
        }

        if (!w.globals.axisCharts) {
          // for non-axis charts (i.e., circular charts, pathFrom is not usable. We need whole series)
          w.globals.previousPaths = w.globals.series;
        }
      }
    }, {
      key: "handlePrevBubbleScatterPaths",
      value: function handlePrevBubbleScatterPaths(type) {
        var w = this.w;
        var paths = w.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(type, "-series .apexcharts-series"));

        if (paths.length > 0) {
          for (var s = 0; s < paths.length; s++) {
            var seriesEls = w.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(type, "-series .apexcharts-series[data\\:realIndex='").concat(s, "'] circle"));
            var dArr = [];

            for (var i = 0; i < seriesEls.length; i++) {
              dArr.push({
                x: seriesEls[i].getAttribute('cx'),
                y: seriesEls[i].getAttribute('cy'),
                r: seriesEls[i].getAttribute('r')
              });
            }

            w.globals.previousPaths.push(dArr);
          }
        }
      }
    }, {
      key: "clearPreviousPaths",
      value: function clearPreviousPaths() {
        var w = this.w;
        w.globals.previousPaths = [];
        w.globals.allSeriesCollapsed = false;
      }
    }, {
      key: "handleNoData",
      value: function handleNoData() {
        var w = this.w;
        var me = this;
        var noDataOpts = w.config.noData;
        var graphics = new Graphics(me.ctx);
        var x = w.globals.svgWidth / 2;
        var y = w.globals.svgHeight / 2;
        var textAnchor = 'middle';
        w.globals.noData = true;
        w.globals.animationEnded = true;

        if (noDataOpts.align === 'left') {
          x = 10;
          textAnchor = 'start';
        } else if (noDataOpts.align === 'right') {
          x = w.globals.svgWidth - 10;
          textAnchor = 'end';
        }

        if (noDataOpts.verticalAlign === 'top') {
          y = 50;
        } else if (noDataOpts.verticalAlign === 'bottom') {
          y = w.globals.svgHeight - 50;
        }

        x = x + noDataOpts.offsetX;
        y = y + parseInt(noDataOpts.style.fontSize, 10) + 2 + noDataOpts.offsetY;

        if (noDataOpts.text !== undefined && noDataOpts.text !== '') {
          var titleText = graphics.drawText({
            x: x,
            y: y,
            text: noDataOpts.text,
            textAnchor: textAnchor,
            fontSize: noDataOpts.style.fontSize,
            fontFamily: noDataOpts.style.fontFamily,
            foreColor: noDataOpts.style.color,
            opacity: 1,
            class: 'apexcharts-text-nodata'
          });
          w.globals.dom.Paper.add(titleText);
        }
      } // When user clicks on legends, the collapsed series is filled with [0,0,0,...,0]
      // This is because we don't want to alter the series' length as it is used at many places

    }, {
      key: "setNullSeriesToZeroValues",
      value: function setNullSeriesToZeroValues(series) {
        var w = this.w;

        for (var sl = 0; sl < series.length; sl++) {
          if (series[sl].length === 0) {
            for (var j = 0; j < series[w.globals.maxValsInArrayIndex].length; j++) {
              series[sl].push(0);
            }
          }
        }

        return series;
      }
    }, {
      key: "hasAllSeriesEqualX",
      value: function hasAllSeriesEqualX() {
        var equalLen = true;
        var w = this.w;
        var filteredSerX = this.filteredSeriesX();

        for (var i = 0; i < filteredSerX.length - 1; i++) {
          if (filteredSerX[i][0] !== filteredSerX[i + 1][0]) {
            equalLen = false;
            break;
          }
        }

        w.globals.allSeriesHasEqualX = equalLen;
        return equalLen;
      }
    }, {
      key: "filteredSeriesX",
      value: function filteredSeriesX() {
        var w = this.w;
        var filteredSeriesX = w.globals.seriesX.map(function (ser) {
          return ser.length > 0 ? ser : [];
        });
        return filteredSeriesX;
      }
    }]);

    return Series;
  }();

  var Helpers$1 = /*#__PURE__*/function () {
    function Helpers(barCtx) {
      _classCallCheck(this, Helpers);

      this.w = barCtx.w;
      this.barCtx = barCtx;
    }

    _createClass(Helpers, [{
      key: "initVariables",
      value: function initVariables(series) {
        var w = this.w;
        this.barCtx.series = series;
        this.barCtx.totalItems = 0;
        this.barCtx.seriesLen = 0;
        this.barCtx.visibleI = -1; // visible Series

        this.barCtx.visibleItems = 1; // number of visible bars after user zoomed in/out

        for (var sl = 0; sl < series.length; sl++) {
          if (series[sl].length > 0) {
            this.barCtx.seriesLen = this.barCtx.seriesLen + 1;
            this.barCtx.totalItems += series[sl].length;
          }

          if (w.globals.isXNumeric) {
            // get max visible items
            for (var j = 0; j < series[sl].length; j++) {
              if (w.globals.seriesX[sl][j] > w.globals.minX && w.globals.seriesX[sl][j] < w.globals.maxX) {
                this.barCtx.visibleItems++;
              }
            }
          } else {
            this.barCtx.visibleItems = w.globals.dataPoints;
          }
        }

        if (this.barCtx.seriesLen === 0) {
          // A small adjustment when combo charts are used
          this.barCtx.seriesLen = 1;
        }

        this.barCtx.zeroSerieses = [];
        this.barCtx.radiusOnSeriesNumber = series.length - 1; // which series to draw ending shape on

        if (!w.globals.comboCharts) {
          this.checkZeroSeries({
            series: series
          });
        }
      }
    }, {
      key: "initialPositions",
      value: function initialPositions() {
        var w = this.w;
        var x, y, yDivision, xDivision, barHeight, barWidth, zeroH, zeroW;
        var dataPoints = w.globals.dataPoints;

        if (this.barCtx.isTimelineBar) {
          // timeline rangebar chart
          dataPoints = w.globals.labels.length;
        }

        var seriesLen = this.barCtx.seriesLen;

        if (w.config.plotOptions.bar.rangeBarGroupRows) {
          seriesLen = 1;
        }

        if (this.barCtx.isHorizontal) {
          // height divided into equal parts
          yDivision = w.globals.gridHeight / dataPoints;
          barHeight = yDivision / seriesLen;

          if (w.globals.isXNumeric) {
            yDivision = w.globals.gridHeight / this.barCtx.totalItems;
            barHeight = yDivision / this.barCtx.seriesLen;
          }

          barHeight = barHeight * parseInt(this.barCtx.barOptions.barHeight, 10) / 100;
          zeroW = this.barCtx.baseLineInvertedY + w.globals.padHorizontal + (this.barCtx.isReversed ? w.globals.gridWidth : 0) - (this.barCtx.isReversed ? this.barCtx.baseLineInvertedY * 2 : 0);
          y = (yDivision - barHeight * this.barCtx.seriesLen) / 2;
        } else {
          // width divided into equal parts
          xDivision = w.globals.gridWidth / this.barCtx.visibleItems;

          if (w.config.xaxis.convertedCatToNumeric) {
            xDivision = w.globals.gridWidth / w.globals.dataPoints;
          }

          barWidth = xDivision / this.barCtx.seriesLen * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100;

          if (w.globals.isXNumeric) {
            // max barwidth should be equal to minXDiff to avoid overlap
            var xRatio = this.barCtx.xRatio;

            if (w.config.xaxis.convertedCatToNumeric) {
              xRatio = this.barCtx.initialXRatio;
            }

            if (w.globals.minXDiff && w.globals.minXDiff !== 0.5 && w.globals.minXDiff / xRatio > 0) {
              xDivision = w.globals.minXDiff / xRatio;
            }

            barWidth = xDivision / this.barCtx.seriesLen * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100;

            if (barWidth < 1) {
              barWidth = 1;
            }
          }

          zeroH = w.globals.gridHeight - this.barCtx.baseLineY[this.barCtx.yaxisIndex] - (this.barCtx.isReversed ? w.globals.gridHeight : 0) + (this.barCtx.isReversed ? this.barCtx.baseLineY[this.barCtx.yaxisIndex] * 2 : 0);
          x = w.globals.padHorizontal + (xDivision - barWidth * this.barCtx.seriesLen) / 2;
        }

        return {
          x: x,
          y: y,
          yDivision: yDivision,
          xDivision: xDivision,
          barHeight: barHeight,
          barWidth: barWidth,
          zeroH: zeroH,
          zeroW: zeroW
        };
      }
    }, {
      key: "getPathFillColor",
      value: function getPathFillColor(series, i, j, realIndex) {
        var w = this.w;
        var fill = new Fill(this.barCtx.ctx);
        var fillColor = null;
        var seriesNumber = this.barCtx.barOptions.distributed ? j : i;

        if (this.barCtx.barOptions.colors.ranges.length > 0) {
          var colorRange = this.barCtx.barOptions.colors.ranges;
          colorRange.map(function (range) {
            if (series[i][j] >= range.from && series[i][j] <= range.to) {
              fillColor = range.color;
            }
          });
        }

        if (w.config.series[i].data[j] && w.config.series[i].data[j].fillColor) {
          fillColor = w.config.series[i].data[j].fillColor;
        }

        var pathFill = fill.fillPath({
          seriesNumber: this.barCtx.barOptions.distributed ? seriesNumber : realIndex,
          dataPointIndex: j,
          color: fillColor,
          value: series[i][j]
        });
        return pathFill;
      }
    }, {
      key: "getStrokeWidth",
      value: function getStrokeWidth(i, j, realIndex) {
        var strokeWidth = 0;
        var w = this.w;

        if (typeof this.barCtx.series[i][j] === 'undefined' || this.barCtx.series[i][j] === null) {
          this.barCtx.isNullValue = true;
        } else {
          this.barCtx.isNullValue = false;
        }

        if (w.config.stroke.show) {
          if (!this.barCtx.isNullValue) {
            strokeWidth = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[realIndex] : this.barCtx.strokeWidth;
          }
        }

        return strokeWidth;
      }
    }, {
      key: "barBackground",
      value: function barBackground(_ref) {
        var j = _ref.j,
            i = _ref.i,
            x1 = _ref.x1,
            x2 = _ref.x2,
            y1 = _ref.y1,
            y2 = _ref.y2,
            elSeries = _ref.elSeries;
        var w = this.w;
        var graphics = new Graphics(this.barCtx.ctx);
        var sr = new Series(this.barCtx.ctx);
        var activeSeriesIndex = sr.getActiveConfigSeriesIndex();

        if (this.barCtx.barOptions.colors.backgroundBarColors.length > 0 && activeSeriesIndex === i) {
          if (j >= this.barCtx.barOptions.colors.backgroundBarColors.length) {
            j -= this.barCtx.barOptions.colors.backgroundBarColors.length;
          }

          var bcolor = this.barCtx.barOptions.colors.backgroundBarColors[j];
          var rect = graphics.drawRect(typeof x1 !== 'undefined' ? x1 : 0, typeof y1 !== 'undefined' ? y1 : 0, typeof x2 !== 'undefined' ? x2 : w.globals.gridWidth, typeof y2 !== 'undefined' ? y2 : w.globals.gridHeight, this.barCtx.barOptions.colors.backgroundBarRadius, bcolor, this.barCtx.barOptions.colors.backgroundBarOpacity);
          elSeries.add(rect);
          rect.node.classList.add('apexcharts-backgroundBar');
        }
      }
    }, {
      key: "getColumnPaths",
      value: function getColumnPaths(_ref2) {
        var barWidth = _ref2.barWidth,
            barXPosition = _ref2.barXPosition,
            yRatio = _ref2.yRatio,
            y1 = _ref2.y1,
            y2 = _ref2.y2,
            strokeWidth = _ref2.strokeWidth,
            series = _ref2.series,
            realIndex = _ref2.realIndex,
            i = _ref2.i,
            j = _ref2.j,
            w = _ref2.w;
        var graphics = new Graphics(this.barCtx.ctx);
        strokeWidth = Array.isArray(strokeWidth) ? strokeWidth[realIndex] : strokeWidth;
        if (!strokeWidth) strokeWidth = 0;
        var shapeOpts = {
          barWidth: barWidth,
          strokeWidth: strokeWidth,
          yRatio: yRatio,
          barXPosition: barXPosition,
          y1: y1,
          y2: y2
        };
        var newPath = this.getRoundedBars(w, shapeOpts, series, i, j);
        var x1 = barXPosition;
        var x2 = barXPosition + barWidth;
        var pathTo = graphics.move(x1, y1);
        var pathFrom = graphics.move(x1, y1);
        var sl = graphics.line(x2 - strokeWidth, y1);

        if (w.globals.previousPaths.length > 0) {
          pathFrom = this.barCtx.getPreviousPath(realIndex, j, false);
        }

        pathTo = pathTo + graphics.line(x1, newPath.y2) + newPath.pathWithRadius + graphics.line(x2 - strokeWidth, newPath.y2) + sl + sl + 'z'; // the lines in pathFrom are repeated to equal it to the points of pathTo
        // this is to avoid weird animation (bug in svg.js)

        pathFrom = pathFrom + graphics.line(x1, y1) + sl + sl + sl + sl + sl + graphics.line(x1, y1);

        if (w.config.chart.stacked) {
          this.barCtx.yArrj.push(newPath.y2);
          this.barCtx.yArrjF.push(Math.abs(y1 - newPath.y2));
          this.barCtx.yArrjVal.push(this.barCtx.series[i][j]);
        }

        return {
          pathTo: pathTo,
          pathFrom: pathFrom
        };
      }
    }, {
      key: "getBarpaths",
      value: function getBarpaths(_ref3) {
        var barYPosition = _ref3.barYPosition,
            barHeight = _ref3.barHeight,
            x1 = _ref3.x1,
            x2 = _ref3.x2,
            strokeWidth = _ref3.strokeWidth,
            series = _ref3.series,
            realIndex = _ref3.realIndex,
            i = _ref3.i,
            j = _ref3.j,
            w = _ref3.w;
        var graphics = new Graphics(this.barCtx.ctx);
        strokeWidth = Array.isArray(strokeWidth) ? strokeWidth[realIndex] : strokeWidth;
        if (!strokeWidth) strokeWidth = 0;
        var shapeOpts = {
          barHeight: barHeight,
          strokeWidth: strokeWidth,
          barYPosition: barYPosition,
          x2: x2,
          x1: x1
        };
        var newPath = this.getRoundedBars(w, shapeOpts, series, i, j);
        var pathTo = graphics.move(x1, barYPosition);
        var pathFrom = graphics.move(x1, barYPosition);

        if (w.globals.previousPaths.length > 0) {
          pathFrom = this.barCtx.getPreviousPath(realIndex, j, false);
        }

        var y1 = barYPosition;
        var y2 = barYPosition + barHeight;
        var sl = graphics.line(x1, y2 - strokeWidth);
        pathTo = pathTo + graphics.line(newPath.x2, y1) + newPath.pathWithRadius + graphics.line(newPath.x2, y2 - strokeWidth) + sl + sl + 'z';
        pathFrom = pathFrom + graphics.line(x1, y1) + sl + sl + sl + sl + sl + graphics.line(x1, y1);

        if (w.config.chart.stacked) {
          this.barCtx.xArrj.push(newPath.x2);
          this.barCtx.xArrjF.push(Math.abs(x1 - newPath.x2));
          this.barCtx.xArrjVal.push(this.barCtx.series[i][j]);
        }

        return {
          pathTo: pathTo,
          pathFrom: pathFrom
        };
      }
      /** getRoundedBars draws border radius for bars/columns
       * @memberof Bar
       * @param {object} w - chart context
       * @param {object} opts - consists several properties like barHeight/barWidth
       * @param {array} series - global primary series
       * @param {int} i - current iterating series's index
       * @param {int} j - series's j of i
       * @return {object} pathWithRadius - ending shape path string
       *         newY/newX - which is calculated from existing x/y based on rounded border
       **/

    }, {
      key: "getRoundedBars",
      value: function getRoundedBars(w, opts, series, i, j) {
        var graphics = new Graphics(this.barCtx.ctx);
        var radius = w.config.plotOptions.bar.borderRadius;

        if (w.config.chart.stacked && series.length > 1 && i !== this.barCtx.radiusOnSeriesNumber) {
          radius = 0;
        }

        if (this.barCtx.isHorizontal) {
          var pathWithRadius = '';
          var x2 = opts.x2;

          if (Math.abs(opts.x1 - opts.x2) < radius) {
            radius = Math.abs(opts.x1 - opts.x2);
          }

          if (typeof series[i][j] !== 'undefined' || series[i][j] !== null) {
            var inverse = this.barCtx.isReversed ? series[i][j] > 0 : series[i][j] < 0;
            if (inverse) radius = radius * -1;
            x2 = x2 - radius;
            pathWithRadius = graphics.quadraticCurve(x2 + radius, opts.barYPosition, x2 + radius, opts.barYPosition + (!inverse ? radius : radius * -1)) + graphics.line(x2 + radius, opts.barYPosition + opts.barHeight - opts.strokeWidth - (!inverse ? radius : radius * -1)) + graphics.quadraticCurve(x2 + radius, opts.barYPosition + opts.barHeight - opts.strokeWidth, x2, opts.barYPosition + opts.barHeight - opts.strokeWidth);
          }

          return {
            pathWithRadius: pathWithRadius,
            x2: x2
          };
        } else {
          var _pathWithRadius = '';
          var y2 = opts.y2;

          if (Math.abs(opts.y1 - opts.y2) < radius) {
            radius = Math.abs(opts.y1 - opts.y2);
          }

          if (typeof series[i][j] !== 'undefined' || series[i][j] !== null) {
            var _inverse = series[i][j] < 0;

            if (_inverse) radius = radius * -1;
            y2 = y2 + radius;
            _pathWithRadius = graphics.quadraticCurve(opts.barXPosition, y2 - radius, opts.barXPosition + (!_inverse ? radius : radius * -1), y2 - radius) + graphics.line(opts.barXPosition + opts.barWidth - opts.strokeWidth - (!_inverse ? radius : radius * -1), y2 - radius) + graphics.quadraticCurve(opts.barXPosition + opts.barWidth - opts.strokeWidth, y2 - radius, opts.barXPosition + opts.barWidth - opts.strokeWidth, y2);
          }

          return {
            pathWithRadius: _pathWithRadius,
            y2: y2
          };
        }
      }
    }, {
      key: "checkZeroSeries",
      value: function checkZeroSeries(_ref4) {
        var series = _ref4.series;
        var w = this.w;

        for (var zs = 0; zs < series.length; zs++) {
          var total = 0;

          for (var zsj = 0; zsj < series[w.globals.maxValsInArrayIndex].length; zsj++) {
            total += series[zs][zsj];
          }

          if (total === 0) {
            this.barCtx.zeroSerieses.push(zs);
          }
        } // After getting all zeroserieses, we need to ensure whether radiusOnSeriesNumber is not in that zeroseries array


        for (var s = series.length - 1; s >= 0; s--) {
          if (this.barCtx.zeroSerieses.indexOf(s) > -1 && s === this.radiusOnSeriesNumber) {
            this.barCtx.radiusOnSeriesNumber -= 1;
          }
        }

        for (var _s = series.length - 1; _s >= 0; _s--) {
          if (w.globals.collapsedSeriesIndices.indexOf(this.barCtx.radiusOnSeriesNumber) > -1) {
            this.barCtx.radiusOnSeriesNumber -= 1;
          }
        }
      }
    }]);

    return Helpers;
  }();

  /**
   * ApexCharts Bar Class responsible for drawing both Columns and Bars.
   *
   * @module Bar
   **/

  var Bar = /*#__PURE__*/function () {
    function Bar(ctx, xyRatios) {
      _classCallCheck(this, Bar);

      this.ctx = ctx;
      this.w = ctx.w;
      var w = this.w;
      this.barOptions = w.config.plotOptions.bar;
      this.isHorizontal = this.barOptions.horizontal;
      this.strokeWidth = w.config.stroke.width;
      this.isNullValue = false;
      this.isTimelineBar = w.config.xaxis.type === 'datetime' && w.globals.seriesRangeBarTimeline.length;
      this.xyRatios = xyRatios;

      if (this.xyRatios !== null) {
        this.xRatio = xyRatios.xRatio;
        this.initialXRatio = xyRatios.initialXRatio;
        this.yRatio = xyRatios.yRatio;
        this.invertedXRatio = xyRatios.invertedXRatio;
        this.invertedYRatio = xyRatios.invertedYRatio;
        this.baseLineY = xyRatios.baseLineY;
        this.baseLineInvertedY = xyRatios.baseLineInvertedY;
      }

      this.yaxisIndex = 0;
      this.seriesLen = 0;
      this.barHelpers = new Helpers$1(this);
    }
    /** primary draw method which is called on bar object
     * @memberof Bar
     * @param {array} series - user supplied series values
     * @param {int} seriesIndex - the index by which series will be drawn on the svg
     * @return {node} element which is supplied to parent chart draw method for appending
     **/


    _createClass(Bar, [{
      key: "draw",
      value: function draw(series, seriesIndex) {
        var w = this.w;
        var graphics = new Graphics(this.ctx);
        var coreUtils = new CoreUtils(this.ctx, w);
        series = coreUtils.getLogSeries(series);
        this.series = series;
        this.yRatio = coreUtils.getLogYRatios(this.yRatio);
        this.barHelpers.initVariables(series);
        var ret = graphics.group({
          class: 'apexcharts-bar-series apexcharts-plot-series'
        });

        if (w.config.dataLabels.enabled) {
          if (this.totalItems > this.barOptions.dataLabels.maxItems) {
            console.warn('WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering.');
          }
        }

        for (var i = 0, bc = 0; i < series.length; i++, bc++) {
          var x = void 0,
              y = void 0,
              xDivision = void 0,
              // xDivision is the GRIDWIDTH divided by number of datapoints (columns)
          yDivision = void 0,
              // yDivision is the GRIDHEIGHT divided by number of datapoints (bars)
          zeroH = void 0,
              // zeroH is the baseline where 0 meets y axis
          zeroW = void 0; // zeroW is the baseline where 0 meets x axis

          var yArrj = []; // hold y values of current iterating series

          var xArrj = []; // hold x values of current iterating series

          var realIndex = w.globals.comboCharts ? seriesIndex[i] : i; // el to which series will be drawn

          var elSeries = graphics.group({
            class: "apexcharts-series",
            rel: i + 1,
            seriesName: Utils.escapeString(w.globals.seriesNames[realIndex]),
            'data:realIndex': realIndex
          });
          this.ctx.series.addCollapsedClassToSeries(elSeries, realIndex);

          if (series[i].length > 0) {
            this.visibleI = this.visibleI + 1;
          }

          var barHeight = 0;
          var barWidth = 0;

          if (this.yRatio.length > 1) {
            this.yaxisIndex = realIndex;
          }

          this.isReversed = w.config.yaxis[this.yaxisIndex] && w.config.yaxis[this.yaxisIndex].reversed;
          var initPositions = this.barHelpers.initialPositions();
          y = initPositions.y;
          barHeight = initPositions.barHeight;
          yDivision = initPositions.yDivision;
          zeroW = initPositions.zeroW;
          x = initPositions.x;
          barWidth = initPositions.barWidth;
          xDivision = initPositions.xDivision;
          zeroH = initPositions.zeroH;

          if (!this.horizontal) {
            xArrj.push(x + barWidth / 2);
          } // eldatalabels


          var elDataLabelsWrap = graphics.group({
            class: 'apexcharts-datalabels',
            'data:realIndex': realIndex
          });

          for (var j = 0; j < w.globals.dataPoints; j++) {
            var strokeWidth = this.barHelpers.getStrokeWidth(i, j, realIndex);
            var paths = null;
            var pathsParams = {
              indexes: {
                i: i,
                j: j,
                realIndex: realIndex,
                bc: bc
              },
              x: x,
              y: y,
              strokeWidth: strokeWidth,
              elSeries: elSeries
            };

            if (this.isHorizontal) {
              paths = this.drawBarPaths(_objectSpread2(_objectSpread2({}, pathsParams), {}, {
                barHeight: barHeight,
                zeroW: zeroW,
                yDivision: yDivision
              }));
              barWidth = this.series[i][j] / this.invertedYRatio;
            } else {
              paths = this.drawColumnPaths(_objectSpread2(_objectSpread2({}, pathsParams), {}, {
                xDivision: xDivision,
                barWidth: barWidth,
                zeroH: zeroH
              }));
              barHeight = this.series[i][j] / this.yRatio[this.yaxisIndex];
            }

            y = paths.y;
            x = paths.x; // push current X

            if (j > 0) {
              xArrj.push(x + barWidth / 2);
            }

            yArrj.push(y);
            var pathFill = this.barHelpers.getPathFillColor(series, i, j, realIndex);
            this.renderSeries({
              realIndex: realIndex,
              pathFill: pathFill,
              j: j,
              i: i,
              pathFrom: paths.pathFrom,
              pathTo: paths.pathTo,
              strokeWidth: strokeWidth,
              elSeries: elSeries,
              x: x,
              y: y,
              series: series,
              barHeight: barHeight,
              barWidth: barWidth,
              elDataLabelsWrap: elDataLabelsWrap,
              visibleSeries: this.visibleI,
              type: 'bar'
            });
          } // push all x val arrays into main xArr


          w.globals.seriesXvalues[realIndex] = xArrj;
          w.globals.seriesYvalues[realIndex] = yArrj;
          ret.add(elSeries);
        }

        return ret;
      }
    }, {
      key: "renderSeries",
      value: function renderSeries(_ref) {
        var realIndex = _ref.realIndex,
            pathFill = _ref.pathFill,
            lineFill = _ref.lineFill,
            j = _ref.j,
            i = _ref.i,
            pathFrom = _ref.pathFrom,
            pathTo = _ref.pathTo,
            strokeWidth = _ref.strokeWidth,
            elSeries = _ref.elSeries,
            x = _ref.x,
            y = _ref.y,
            y1 = _ref.y1,
            y2 = _ref.y2,
            series = _ref.series,
            barHeight = _ref.barHeight,
            barWidth = _ref.barWidth,
            barYPosition = _ref.barYPosition,
            elDataLabelsWrap = _ref.elDataLabelsWrap,
            visibleSeries = _ref.visibleSeries,
            type = _ref.type;
        var w = this.w;
        var graphics = new Graphics(this.ctx);

        if (!lineFill) {
          /* fix apexcharts#341 */
          lineFill = this.barOptions.distributed ? w.globals.stroke.colors[j] : w.globals.stroke.colors[realIndex];
        }

        if (w.config.series[i].data[j] && w.config.series[i].data[j].strokeColor) {
          lineFill = w.config.series[i].data[j].strokeColor;
        }

        if (this.isNullValue) {
          pathFill = 'none';
        }

        var delay = j / w.config.chart.animations.animateGradually.delay * (w.config.chart.animations.speed / w.globals.dataPoints) / 2.4;
        var renderedPath = graphics.renderPaths({
          i: i,
          j: j,
          realIndex: realIndex,
          pathFrom: pathFrom,
          pathTo: pathTo,
          stroke: lineFill,
          strokeWidth: strokeWidth,
          strokeLineCap: w.config.stroke.lineCap,
          fill: pathFill,
          animationDelay: delay,
          initialSpeed: w.config.chart.animations.speed,
          dataChangeSpeed: w.config.chart.animations.dynamicAnimation.speed,
          className: "apexcharts-".concat(type, "-area")
        });
        renderedPath.attr('clip-path', "url(#gridRectMask".concat(w.globals.cuid, ")"));

        if (typeof y1 !== 'undefined' && typeof y2 !== 'undefined') {
          renderedPath.attr('data-range-y1', y1);
          renderedPath.attr('data-range-y2', y2);
        }

        var filters = new Filters(this.ctx);
        filters.setSelectionFilter(renderedPath, realIndex, j);
        elSeries.add(renderedPath);
        var barDataLabels = new BarDataLabels(this);
        var dataLabels = barDataLabels.handleBarDataLabels({
          x: x,
          y: y,
          y1: y1,
          y2: y2,
          i: i,
          j: j,
          series: series,
          realIndex: realIndex,
          barHeight: barHeight,
          barWidth: barWidth,
          barYPosition: barYPosition,
          renderedPath: renderedPath,
          visibleSeries: visibleSeries
        });

        if (dataLabels !== null) {
          elDataLabelsWrap.add(dataLabels);
        }

        elSeries.add(elDataLabelsWrap);
        return elSeries;
      }
    }, {
      key: "drawBarPaths",
      value: function drawBarPaths(_ref2) {
        var indexes = _ref2.indexes,
            barHeight = _ref2.barHeight,
            strokeWidth = _ref2.strokeWidth,
            zeroW = _ref2.zeroW,
            x = _ref2.x,
            y = _ref2.y,
            yDivision = _ref2.yDivision,
            elSeries = _ref2.elSeries;
        var w = this.w;
        var i = indexes.i;
        var j = indexes.j;

        if (w.globals.isXNumeric) {
          y = (w.globals.seriesX[i][j] - w.globals.minX) / this.invertedXRatio - barHeight;
        }

        var barYPosition = y + barHeight * this.visibleI;

        if (typeof this.series[i][j] === 'undefined' || this.series[i][j] === null) {
          x = zeroW;
        } else {
          x = zeroW + this.series[i][j] / this.invertedYRatio - (this.isReversed ? this.series[i][j] / this.invertedYRatio : 0) * 2;
        }

        var paths = this.barHelpers.getBarpaths({
          barYPosition: barYPosition,
          barHeight: barHeight,
          x1: zeroW,
          x2: x,
          strokeWidth: strokeWidth,
          series: this.series,
          realIndex: indexes.realIndex,
          i: i,
          j: j,
          w: w
        });

        if (!w.globals.isXNumeric) {
          y = y + yDivision;
        }

        this.barHelpers.barBackground({
          j: j,
          i: i,
          y1: barYPosition - barHeight * this.visibleI,
          y2: barHeight * this.seriesLen,
          elSeries: elSeries
        });
        return {
          pathTo: paths.pathTo,
          pathFrom: paths.pathFrom,
          x: x,
          y: y,
          barYPosition: barYPosition
        };
      }
    }, {
      key: "drawColumnPaths",
      value: function drawColumnPaths(_ref3) {
        var indexes = _ref3.indexes,
            x = _ref3.x,
            y = _ref3.y,
            xDivision = _ref3.xDivision,
            barWidth = _ref3.barWidth,
            zeroH = _ref3.zeroH,
            strokeWidth = _ref3.strokeWidth,
            elSeries = _ref3.elSeries;
        var w = this.w;
        var realIndex = indexes.realIndex;
        var i = indexes.i;
        var j = indexes.j;
        var bc = indexes.bc;

        if (w.globals.isXNumeric) {
          var sxI = realIndex;

          if (!w.globals.seriesX[realIndex].length) {
            sxI = w.globals.maxValsInArrayIndex;
          }

          x = (w.globals.seriesX[sxI][j] - w.globals.minX) / this.xRatio - barWidth * this.seriesLen / 2;
        }

        var barXPosition = x + barWidth * this.visibleI;

        if (typeof this.series[i][j] === 'undefined' || this.series[i][j] === null) {
          y = zeroH;
        } else {
          y = zeroH - this.series[i][j] / this.yRatio[this.yaxisIndex] + (this.isReversed ? this.series[i][j] / this.yRatio[this.yaxisIndex] : 0) * 2;
        }

        var paths = this.barHelpers.getColumnPaths({
          barXPosition: barXPosition,
          barWidth: barWidth,
          y1: zeroH,
          y2: y,
          strokeWidth: strokeWidth,
          series: this.series,
          realIndex: indexes.realIndex,
          i: i,
          j: j,
          w: w
        });

        if (!w.globals.isXNumeric) {
          x = x + xDivision;
        }

        this.barHelpers.barBackground({
          bc: bc,
          j: j,
          i: i,
          x1: barXPosition - strokeWidth / 2 - barWidth * this.visibleI,
          x2: barWidth * this.seriesLen + strokeWidth / 2,
          elSeries: elSeries
        });
        return {
          pathTo: paths.pathTo,
          pathFrom: paths.pathFrom,
          x: x,
          y: y,
          barXPosition: barXPosition
        };
      }
      /** getPreviousPath is a common function for bars/columns which is used to get previous paths when data changes.
       * @memberof Bar
       * @param {int} realIndex - current iterating i
       * @param {int} j - current iterating series's j index
       * @return {string} pathFrom is the string which will be appended in animations
       **/

    }, {
      key: "getPreviousPath",
      value: function getPreviousPath(realIndex, j) {
        var w = this.w;
        var pathFrom;

        for (var pp = 0; pp < w.globals.previousPaths.length; pp++) {
          var gpp = w.globals.previousPaths[pp];

          if (gpp.paths && gpp.paths.length > 0 && parseInt(gpp.realIndex, 10) === parseInt(realIndex, 10)) {
            if (typeof w.globals.previousPaths[pp].paths[j] !== 'undefined') {
              pathFrom = w.globals.previousPaths[pp].paths[j].d;
            }
          }
        }

        return pathFrom;
      }
    }]);

    return Bar;
  }();

  /**
   * DateTime Class to manipulate datetime values.
   *
   * @module DateTime
   **/

  var DateTime = /*#__PURE__*/function () {
    function DateTime(ctx) {
      _classCallCheck(this, DateTime);

      this.ctx = ctx;
      this.w = ctx.w;
      this.months31 = [1, 3, 5, 7, 8, 10, 12];
      this.months30 = [2, 4, 6, 9, 11];
      this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    }

    _createClass(DateTime, [{
      key: "isValidDate",
      value: function isValidDate(date) {
        return !isNaN(this.parseDate(date));
      }
    }, {
      key: "getTimeStamp",
      value: function getTimeStamp(dateStr) {
        if (!Date.parse(dateStr)) {
          return dateStr;
        }

        var utc = this.w.config.xaxis.labels.datetimeUTC;
        return !utc ? new Date(dateStr).getTime() : new Date(new Date(dateStr).toISOString().substr(0, 25)).getTime();
      }
    }, {
      key: "getDate",
      value: function getDate(timestamp) {
        var utc = this.w.config.xaxis.labels.datetimeUTC;
        return utc ? new Date(new Date(timestamp).toUTCString()) : new Date(timestamp);
      }
    }, {
      key: "parseDate",
      value: function parseDate(dateStr) {
        var parsed = Date.parse(dateStr);

        if (!isNaN(parsed)) {
          return this.getTimeStamp(dateStr);
        }

        var output = Date.parse(dateStr.replace(/-/g, '/').replace(/[a-z]+/gi, ' '));
        output = this.getTimeStamp(output);
        return output;
      } // This fixes the difference of x-axis labels between chrome/safari
      // Fixes #1726, #1544, #1485, #1255

    }, {
      key: "parseDateWithTimezone",
      value: function parseDateWithTimezone(dateStr) {
        return Date.parse(dateStr.replace(/-/g, '/').replace(/[a-z]+/gi, ' '));
      } // http://stackoverflow.com/questions/14638018/current-time-formatting-with-javascript#answer-14638191

    }, {
      key: "formatDate",
      value: function formatDate(date, format) {
        var locale = this.w.globals.locale;
        var utc = this.w.config.xaxis.labels.datetimeUTC;
        var MMMM = ['\x00'].concat(_toConsumableArray(locale.months));
        var MMM = ['\x01'].concat(_toConsumableArray(locale.shortMonths));
        var dddd = ['\x02'].concat(_toConsumableArray(locale.days));
        var ddd = ['\x03'].concat(_toConsumableArray(locale.shortDays));

        function ii(i, len) {
          var s = i + '';
          len = len || 2;

          while (s.length < len) {
            s = '0' + s;
          }

          return s;
        }

        var y = utc ? date.getUTCFullYear() : date.getFullYear();
        format = format.replace(/(^|[^\\])yyyy+/g, '$1' + y);
        format = format.replace(/(^|[^\\])yy/g, '$1' + y.toString().substr(2, 2));
        format = format.replace(/(^|[^\\])y/g, '$1' + y);
        var M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
        format = format.replace(/(^|[^\\])MMMM+/g, '$1' + MMMM[0]);
        format = format.replace(/(^|[^\\])MMM/g, '$1' + MMM[0]);
        format = format.replace(/(^|[^\\])MM/g, '$1' + ii(M));
        format = format.replace(/(^|[^\\])M/g, '$1' + M);
        var d = utc ? date.getUTCDate() : date.getDate();
        format = format.replace(/(^|[^\\])dddd+/g, '$1' + dddd[0]);
        format = format.replace(/(^|[^\\])ddd/g, '$1' + ddd[0]);
        format = format.replace(/(^|[^\\])dd/g, '$1' + ii(d));
        format = format.replace(/(^|[^\\])d/g, '$1' + d);
        var H = utc ? date.getUTCHours() : date.getHours();
        format = format.replace(/(^|[^\\])HH+/g, '$1' + ii(H));
        format = format.replace(/(^|[^\\])H/g, '$1' + H);
        var h = H > 12 ? H - 12 : H === 0 ? 12 : H;
        format = format.replace(/(^|[^\\])hh+/g, '$1' + ii(h));
        format = format.replace(/(^|[^\\])h/g, '$1' + h);
        var m = utc ? date.getUTCMinutes() : date.getMinutes();
        format = format.replace(/(^|[^\\])mm+/g, '$1' + ii(m));
        format = format.replace(/(^|[^\\])m/g, '$1' + m);
        var s = utc ? date.getUTCSeconds() : date.getSeconds();
        format = format.replace(/(^|[^\\])ss+/g, '$1' + ii(s));
        format = format.replace(/(^|[^\\])s/g, '$1' + s);
        var f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
        format = format.replace(/(^|[^\\])fff+/g, '$1' + ii(f, 3));
        f = Math.round(f / 10);
        format = format.replace(/(^|[^\\])ff/g, '$1' + ii(f));
        f = Math.round(f / 10);
        format = format.replace(/(^|[^\\])f/g, '$1' + f);
        var T = H < 12 ? 'AM' : 'PM';
        format = format.replace(/(^|[^\\])TT+/g, '$1' + T);
        format = format.replace(/(^|[^\\])T/g, '$1' + T.charAt(0));
        var t = T.toLowerCase();
        format = format.replace(/(^|[^\\])tt+/g, '$1' + t);
        format = format.replace(/(^|[^\\])t/g, '$1' + t.charAt(0));
        var tz = -date.getTimezoneOffset();
        var K = utc || !tz ? 'Z' : tz > 0 ? '+' : '-';

        if (!utc) {
          tz = Math.abs(tz);
          var tzHrs = Math.floor(tz / 60);
          var tzMin = tz % 60;
          K += ii(tzHrs) + ':' + ii(tzMin);
        }

        format = format.replace(/(^|[^\\])K/g, '$1' + K);
        var day = (utc ? date.getUTCDay() : date.getDay()) + 1;
        format = format.replace(new RegExp(dddd[0], 'g'), dddd[day]);
        format = format.replace(new RegExp(ddd[0], 'g'), ddd[day]);
        format = format.replace(new RegExp(MMMM[0], 'g'), MMMM[M]);
        format = format.replace(new RegExp(MMM[0], 'g'), MMM[M]);
        format = format.replace(/\\(.)/g, '$1');
        return format;
      }
    }, {
      key: "getTimeUnitsfromTimestamp",
      value: function getTimeUnitsfromTimestamp(minX, maxX, utc) {
        var w = this.w;

        if (w.config.xaxis.min !== undefined) {
          minX = w.config.xaxis.min;
        }

        if (w.config.xaxis.max !== undefined) {
          maxX = w.config.xaxis.max;
        }

        var tsMin = this.getDate(minX);
        var tsMax = this.getDate(maxX);
        var minD = this.formatDate(tsMin, 'yyyy MM dd HH mm ss').split(' ');
        var maxD = this.formatDate(tsMax, 'yyyy MM dd HH mm ss').split(' ');
        return {
          minSecond: parseInt(minD[5], 10),
          maxSecond: parseInt(maxD[5], 10),
          minMinute: parseInt(minD[4], 10),
          maxMinute: parseInt(maxD[4], 10),
          minHour: parseInt(minD[3], 10),
          maxHour: parseInt(maxD[3], 10),
          minDate: parseInt(minD[2], 10),
          maxDate: parseInt(maxD[2], 10),
          minMonth: parseInt(minD[1], 10) - 1,
          maxMonth: parseInt(maxD[1], 10) - 1,
          minYear: parseInt(minD[0], 10),
          maxYear: parseInt(maxD[0], 10)
        };
      }
    }, {
      key: "isLeapYear",
      value: function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
      }
    }, {
      key: "calculcateLastDaysOfMonth",
      value: function calculcateLastDaysOfMonth(month, year, subtract) {
        var days = this.determineDaysOfMonths(month, year); // whatever days we get, subtract the number of days asked

        return days - subtract;
      }
    }, {
      key: "determineDaysOfYear",
      value: function determineDaysOfYear(year) {
        var days = 365;

        if (this.isLeapYear(year)) {
          days = 366;
        }

        return days;
      }
    }, {
      key: "determineRemainingDaysOfYear",
      value: function determineRemainingDaysOfYear(year, month, date) {
        var dayOfYear = this.daysCntOfYear[month] + date;
        if (month > 1 && this.isLeapYear()) dayOfYear++;
        return dayOfYear;
      }
    }, {
      key: "determineDaysOfMonths",
      value: function determineDaysOfMonths(month, year) {
        var days = 30;
        month = Utils.monthMod(month);

        switch (true) {
          case this.months30.indexOf(month) > -1:
            if (month === 2) {
              if (this.isLeapYear(year)) {
                days = 29;
              } else {
                days = 28;
              }
            }

            break;

          case this.months31.indexOf(month) > -1:
            days = 31;
            break;

          default:
            days = 31;
            break;
        }

        return days;
      }
    }]);

    return DateTime;
  }();

  /**
   * ApexCharts RangeBar Class responsible for drawing Range/Timeline Bars.
   *
   * @module RangeBar
   **/

  var RangeBar = /*#__PURE__*/function (_Bar) {
    _inherits(RangeBar, _Bar);

    var _super = _createSuper(RangeBar);

    function RangeBar() {
      _classCallCheck(this, RangeBar);

      return _super.apply(this, arguments);
    }

    _createClass(RangeBar, [{
      key: "draw",
      value: function draw(series, seriesIndex) {
        var w = this.w;
        var graphics = new Graphics(this.ctx);
        this.rangeBarOptions = this.w.config.plotOptions.rangeBar;
        this.series = series;
        this.seriesRangeStart = w.globals.seriesRangeStart;
        this.seriesRangeEnd = w.globals.seriesRangeEnd;
        this.barHelpers.initVariables(series);
        var ret = graphics.group({
          class: 'apexcharts-rangebar-series apexcharts-plot-series'
        });

        for (var i = 0; i < series.length; i++) {
          var x = void 0,
              y = void 0,
              xDivision = void 0,
              // xDivision is the GRIDWIDTH divided by number of datapoints (columns)
          yDivision = void 0,
              // yDivision is the GRIDHEIGHT divided by number of datapoints (bars)
          zeroH = void 0,
              // zeroH is the baseline where 0 meets y axis
          zeroW = void 0; // zeroW is the baseline where 0 meets x axis

          var realIndex = w.globals.comboCharts ? seriesIndex[i] : i; // el to which series will be drawn

          var elSeries = graphics.group({
            class: "apexcharts-series",
            seriesName: Utils.escapeString(w.globals.seriesNames[realIndex]),
            rel: i + 1,
            'data:realIndex': realIndex
          });

          if (series[i].length > 0) {
            this.visibleI = this.visibleI + 1;
          }

          var barHeight = 0;
          var barWidth = 0;

          if (this.yRatio.length > 1) {
            this.yaxisIndex = realIndex;
          }

          var initPositions = this.barHelpers.initialPositions();
          y = initPositions.y;
          zeroW = initPositions.zeroW;
          x = initPositions.x;
          barWidth = initPositions.barWidth;
          xDivision = initPositions.xDivision;
          zeroH = initPositions.zeroH; // eldatalabels

          var elDataLabelsWrap = graphics.group({
            class: 'apexcharts-datalabels',
            'data:realIndex': realIndex
          });

          for (var j = 0; j < w.globals.dataPoints; j++) {
            var strokeWidth = this.barHelpers.getStrokeWidth(i, j, realIndex);
            var y1 = this.seriesRangeStart[i][j];
            var y2 = this.seriesRangeEnd[i][j];
            var paths = null;
            var barYPosition = null;
            var params = {
              x: x,
              y: y,
              strokeWidth: strokeWidth,
              elSeries: elSeries
            };
            yDivision = initPositions.yDivision;
            barHeight = initPositions.barHeight;

            if (this.isHorizontal) {
              barYPosition = y + barHeight * this.visibleI;
              var seriesLen = this.seriesLen;

              if (w.config.plotOptions.bar.rangeBarGroupRows) {
                seriesLen = 1;
              }

              var srty = (yDivision - barHeight * seriesLen) / 2;

              if (typeof w.config.series[i].data[j] === 'undefined') {
                // no data exists for further indexes, hence we need to get out the innr loop.
                // As we are iterating over total datapoints, there is a possiblity the series might not have data for j index
                break;
              }

              if (this.isTimelineBar && w.config.series[i].data[j].x) {
                var positions = this.detectOverlappingBars({
                  i: i,
                  j: j,
                  barYPosition: barYPosition,
                  srty: srty,
                  barHeight: barHeight,
                  yDivision: yDivision,
                  initPositions: initPositions
                });
                barHeight = positions.barHeight;
                barYPosition = positions.barYPosition;
              }

              paths = this.drawRangeBarPaths(_objectSpread2({
                indexes: {
                  i: i,
                  j: j,
                  realIndex: realIndex
                },
                barHeight: barHeight,
                barYPosition: barYPosition,
                zeroW: zeroW,
                yDivision: yDivision,
                y1: y1,
                y2: y2
              }, params));
              barWidth = paths.barWidth;
            } else {
              paths = this.drawRangeColumnPaths(_objectSpread2({
                indexes: {
                  i: i,
                  j: j,
                  realIndex: realIndex
                },
                zeroH: zeroH,
                barWidth: barWidth,
                xDivision: xDivision
              }, params));
              barHeight = paths.barHeight;
            }

            y = paths.y;
            x = paths.x;
            var pathFill = this.barHelpers.getPathFillColor(series, i, j, realIndex);
            var lineFill = w.globals.stroke.colors[realIndex];
            this.renderSeries({
              realIndex: realIndex,
              pathFill: pathFill,
              lineFill: lineFill,
              j: j,
              i: i,
              x: x,
              y: y,
              y1: y1,
              y2: y2,
              pathFrom: paths.pathFrom,
              pathTo: paths.pathTo,
              strokeWidth: strokeWidth,
              elSeries: elSeries,
              series: series,
              barHeight: barHeight,
              barYPosition: barYPosition,
              barWidth: barWidth,
              elDataLabelsWrap: elDataLabelsWrap,
              visibleSeries: this.visibleI,
              type: 'rangebar'
            });
          }

          ret.add(elSeries);
        }

        return ret;
      }
    }, {
      key: "detectOverlappingBars",
      value: function detectOverlappingBars(_ref) {
        var i = _ref.i,
            j = _ref.j,
            barYPosition = _ref.barYPosition,
            srty = _ref.srty,
            barHeight = _ref.barHeight,
            yDivision = _ref.yDivision,
            initPositions = _ref.initPositions;
        var w = this.w;
        var overlaps = [];
        var rangeName = w.config.series[i].data[j].rangeName;
        var labelX = w.config.series[i].data[j].x;
        var rowIndex = w.globals.labels.indexOf(labelX);
        var overlappedIndex = w.globals.seriesRangeBarTimeline[i].findIndex(function (tx) {
          return tx.x === labelX && tx.overlaps.length > 0;
        });

        if (w.config.plotOptions.bar.rangeBarGroupRows) {
          barYPosition = srty + yDivision * rowIndex;
        } else {
          barYPosition = srty + barHeight * this.visibleI + yDivision * rowIndex;
        }

        if (overlappedIndex > -1 && !w.config.plotOptions.bar.rangeBarOverlap) {
          overlaps = w.globals.seriesRangeBarTimeline[i][overlappedIndex].overlaps;

          if (overlaps.indexOf(rangeName) > -1) {
            barHeight = initPositions.barHeight / overlaps.length;
            barYPosition = barHeight * this.visibleI + yDivision * (100 - parseInt(this.barOptions.barHeight, 10)) / 100 / 2 + barHeight * (this.visibleI + overlaps.indexOf(rangeName)) + yDivision * rowIndex;
          }
        }

        return {
          barYPosition: barYPosition,
          barHeight: barHeight
        };
      }
    }, {
      key: "drawRangeColumnPaths",
      value: function drawRangeColumnPaths(_ref2) {
        var indexes = _ref2.indexes,
            x = _ref2.x,
            strokeWidth = _ref2.strokeWidth,
            xDivision = _ref2.xDivision,
            barWidth = _ref2.barWidth,
            zeroH = _ref2.zeroH;
        var w = this.w;
        var i = indexes.i;
        var j = indexes.j;
        var yRatio = this.yRatio[this.yaxisIndex];
        var realIndex = indexes.realIndex;
        var range = this.getRangeValue(realIndex, j);
        var y1 = Math.min(range.start, range.end);
        var y2 = Math.max(range.start, range.end);

        if (w.globals.isXNumeric) {
          x = (w.globals.seriesX[i][j] - w.globals.minX) / this.xRatio - barWidth / 2;
        }

        var barXPosition = x + barWidth * this.visibleI;

        if (typeof this.series[i][j] === 'undefined' || this.series[i][j] === null) {
          y1 = zeroH;
        } else {
          y1 = zeroH - y1 / yRatio;
          y2 = zeroH - y2 / yRatio;
        }

        var barHeight = Math.abs(y2 - y1);
        var paths = this.barHelpers.getColumnPaths({
          barXPosition: barXPosition,
          barWidth: barWidth,
          y1: y1,
          y2: y2,
          strokeWidth: this.strokeWidth,
          series: this.seriesRangeEnd,
          realIndex: indexes.realIndex,
          i: realIndex,
          j: j,
          w: w
        });

        if (!w.globals.isXNumeric) {
          x = x + xDivision;
        }

        return {
          pathTo: paths.pathTo,
          pathFrom: paths.pathFrom,
          barHeight: barHeight,
          x: x,
          y: y2,
          barXPosition: barXPosition
        };
      }
    }, {
      key: "drawRangeBarPaths",
      value: function drawRangeBarPaths(_ref3) {
        var indexes = _ref3.indexes,
            y = _ref3.y,
            y1 = _ref3.y1,
            y2 = _ref3.y2,
            yDivision = _ref3.yDivision,
            barHeight = _ref3.barHeight,
            barYPosition = _ref3.barYPosition,
            zeroW = _ref3.zeroW;
        var w = this.w;
        var x1 = zeroW + y1 / this.invertedYRatio;
        var x2 = zeroW + y2 / this.invertedYRatio;
        var barWidth = Math.abs(x2 - x1);
        var paths = this.barHelpers.getBarpaths({
          barYPosition: barYPosition,
          barHeight: barHeight,
          x1: x1,
          x2: x2,
          strokeWidth: this.strokeWidth,
          series: this.seriesRangeEnd,
          i: indexes.realIndex,
          realIndex: indexes.realIndex,
          j: indexes.j,
          w: w
        });

        if (!w.globals.isXNumeric) {
          y = y + yDivision;
        }

        return {
          pathTo: paths.pathTo,
          pathFrom: paths.pathFrom,
          barWidth: barWidth,
          x: x2,
          y: y
        };
      }
    }, {
      key: "getRangeValue",
      value: function getRangeValue(i, j) {
        var w = this.w;
        return {
          start: w.globals.seriesRangeStart[i][j],
          end: w.globals.seriesRangeEnd[i][j]
        };
      }
    }, {
      key: "getTooltipValues",
      value: function getTooltipValues(_ref4) {
        var ctx = _ref4.ctx,
            seriesIndex = _ref4.seriesIndex,
            dataPointIndex = _ref4.dataPointIndex,
            y1 = _ref4.y1,
            y2 = _ref4.y2,
            w = _ref4.w;
        var start = w.globals.seriesRangeStart[seriesIndex][dataPointIndex];
        var end = w.globals.seriesRangeEnd[seriesIndex][dataPointIndex];
        var ylabel = w.globals.labels[dataPointIndex];
        var seriesName = w.config.series[seriesIndex].name ? w.config.series[seriesIndex].name : '';
        var yLbFormatter = w.config.tooltip.y.formatter;
        var yLbTitleFormatter = w.config.tooltip.y.title.formatter;
        var opts = {
          w: w,
          seriesIndex: seriesIndex,
          dataPointIndex: dataPointIndex
        };

        if (typeof yLbTitleFormatter === 'function') {
          seriesName = yLbTitleFormatter(seriesName, opts);
        }

        if (Number.isFinite(y1) && Number.isFinite(y2)) {
          start = y1;
          end = y2;

          if (w.config.series[seriesIndex].data[dataPointIndex].x) {
            ylabel = w.config.series[seriesIndex].data[dataPointIndex].x + ':';
          }

          if (typeof yLbFormatter === 'function') {
            ylabel = yLbFormatter(ylabel, opts);
          }
        }

        var startVal = '';
        var endVal = '';
        var color = w.globals.colors[seriesIndex];

        if (w.config.tooltip.x.formatter === undefined) {
          if (w.config.xaxis.type === 'datetime') {
            var datetimeObj = new DateTime(ctx);
            startVal = datetimeObj.formatDate(datetimeObj.getDate(start), w.config.tooltip.x.format);
            endVal = datetimeObj.formatDate(datetimeObj.getDate(end), w.config.tooltip.x.format);
          } else {
            startVal = start;
            endVal = end;
          }
        } else {
          startVal = w.config.tooltip.x.formatter(start);
          endVal = w.config.tooltip.x.formatter(end);
        }

        return {
          start: start,
          end: end,
          startVal: startVal,
          endVal: endVal,
          ylabel: ylabel,
          color: color,
          seriesName: seriesName
        };
      }
    }, {
      key: "buildCustomTooltipHTML",
      value: function buildCustomTooltipHTML(_ref5) {
        var color = _ref5.color,
            seriesName = _ref5.seriesName,
            ylabel = _ref5.ylabel,
            start = _ref5.start,
            end = _ref5.end;
        return '<div class="apexcharts-tooltip-rangebar">' + '<div> <span class="series-name" style="color: ' + color + '">' + (seriesName ? seriesName : '') + '</span></div>' + '<div> <span class="category">' + ylabel + ' </span> <span class="value start-value">' + start + '</span> <span class="separator">-</span> <span class="value end-value">' + end + '</span></div>' + '</div>';
      }
    }]);

    return RangeBar;
  }(Bar);

  /**
   * ApexCharts Default Class for setting default options for all chart types.
   *
   * @module Defaults
   **/

  var Defaults = /*#__PURE__*/function () {
    function Defaults(opts) {
      _classCallCheck(this, Defaults);

      this.opts = opts;
    }

    _createClass(Defaults, [{
      key: "line",
      value: function line() {
        return {
          chart: {
            animations: {
              easing: 'swing'
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 5,
            curve: 'straight'
          },
          markers: {
            size: 0,
            hover: {
              sizeOffset: 6
            }
          },
          xaxis: {
            crosshairs: {
              width: 1
            }
          }
        };
      }
    }, {
      key: "sparkline",
      value: function sparkline(defaults) {
        this.opts.yaxis[0].show = false;
        this.opts.yaxis[0].title.text = '';
        this.opts.yaxis[0].axisBorder.show = false;
        this.opts.yaxis[0].axisTicks.show = false;
        this.opts.yaxis[0].floating = true;
        var ret = {
          grid: {
            show: false,
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          legend: {
            show: false
          },
          xaxis: {
            labels: {
              show: false
            },
            tooltip: {
              enabled: false
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            }
          },
          chart: {
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          }
        };
        return Utils.extend(defaults, ret);
      }
    }, {
      key: "bar",
      value: function bar() {
        return {
          chart: {
            stacked: false,
            animations: {
              easing: 'swing'
            }
          },
          plotOptions: {
            bar: {
              dataLabels: {
                position: 'center'
              }
            }
          },
          dataLabels: {
            style: {
              colors: ['#fff']
            },
            background: {
              enabled: false
            }
          },
          stroke: {
            width: 0,
            lineCap: 'round'
          },
          fill: {
            opacity: 0.85
          },
          legend: {
            markers: {
              shape: 'square',
              radius: 2,
              size: 8
            }
          },
          tooltip: {
            shared: false,
            intersect: true
          },
          xaxis: {
            tooltip: {
              enabled: false
            },
            tickPlacement: 'between',
            crosshairs: {
              width: 'barWidth',
              position: 'back',
              fill: {
                type: 'gradient'
              },
              dropShadow: {
                enabled: false
              },
              stroke: {
                width: 0
              }
            }
          }
        };
      }
    }, {
      key: "candlestick",
      value: function candlestick() {
        var _this = this;

        return {
          stroke: {
            width: 1,
            colors: ['#333']
          },
          fill: {
            opacity: 1
          },
          dataLabels: {
            enabled: false
          },
          tooltip: {
            shared: true,
            custom: function custom(_ref) {
              var seriesIndex = _ref.seriesIndex,
                  dataPointIndex = _ref.dataPointIndex,
                  w = _ref.w;
              return _this._getBoxTooltip(w, seriesIndex, dataPointIndex, ['Open', 'High', '', 'Low', 'Close'], 'candlestick');
            }
          },
          states: {
            active: {
              filter: {
                type: 'none'
              }
            }
          },
          xaxis: {
            crosshairs: {
              width: 1
            }
          }
        };
      }
    }, {
      key: "boxPlot",
      value: function boxPlot() {
        var _this2 = this;

        return {
          cha
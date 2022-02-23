// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gKNRU":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fc4d43dcad4c370e";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
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
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"inhmy":[function(require,module,exports) {
var _templatesJs = require("./templates.js");
var _carouselJs = require("./carousel.js");
const theGameTab = document.querySelector("#the-game-tab");
const screenshotsTab = document.querySelector("#screenshots-tab");
const subscribeTab = document.querySelector("#subscribe-tab");
const main = document.querySelector("main");
for (let element of [
    theGameTab,
    screenshotsTab,
    subscribeTab
])element.addEventListener("click", switchTabs);
function switchTabs(event) {
    main.innerHTML = "";
    if (event) {
        event.preventDefault();
        switch(event.currentTarget){
            case theGameTab:
                main.insertAdjacentHTML("afterbegin", _templatesJs.theGameHTML);
                theGameTab.classList.add("active");
                screenshotsTab.classList.remove("active");
                subscribeTab.classList.remove("active");
                break;
            case screenshotsTab:
                main.insertAdjacentHTML("afterbegin", _templatesJs.screenshotsHTML);
                _carouselJs.addCarouselEventListeners();
                screenshotsTab.classList.add("active");
                theGameTab.classList.remove("active");
                subscribeTab.classList.remove("active");
                break;
            case subscribeTab:
                main.insertAdjacentHTML("afterbegin", _templatesJs.subscribeHTML);
                subscribeTab.classList.add("active");
                screenshotsTab.classList.remove("active");
                theGameTab.classList.remove("active");
                break;
            default:
                break;
        }
    } else {
        main.insertAdjacentHTML("afterbegin", _templatesJs.theGameHTML);
        theGameTab.classList.add("active");
        screenshotsTab.classList.remove("active");
        subscribeTab.classList.remove("active");
    }
}
document.addEventListener("DOMContentLoaded", ()=>switchTabs()
);

},{"./templates.js":"bCr8a","./carousel.js":"iL6RW"}],"bCr8a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "theGameHTML", ()=>theGameHTML
);
parcelHelpers.export(exports, "screenshotsHTML", ()=>screenshotsHTML
);
parcelHelpers.export(exports, "subscribeHTML", ()=>subscribeHTML
);
const image1 = new URL(require("988ae8cd712ae8c6"));
const image2 = new URL(require("67228bdf034d31fc"));
const image3 = new URL(require("97ec52930afa5ebf"));
const image1_responsive = new URL(require("44a1452b50025b1c"));
const image2_responsive = new URL(require("aa31d11e36a33428"));
const image3_responsive = new URL(require("f134afe2072af993"));
const character_responsive = new URL(require("8f0f2ad8e605dc1e"));
const character_desktop = new URL(require("e04b3a53d107567f"));
const food_item_responsive = new URL(require("7fb49560b9cc1aa9"));
const food_item_desktop = new URL(require("ad4cdfbbef444e5d"));
const video1_src1 = new URL(require("96cfe5a8edaf03f6"));
const video1_src2 = new URL(require("42f8250d559bf7d4"));
const video2_src1 = new URL(require("25c76102cf132e89"));
const video2_src2 = new URL(require("f8a4fb3cf4451299"));
const audio1 = new URL(require("890cc8f080d993d4"));
const audio2 = new URL(require("28510f92495bd63"));
const theGameHTML = `
<section id="the-game" class="active">
    <h2>The Game</h2>
    <section>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Molestie nunc non blandit massa. Eget nunc scelerisque viverra mauris in. Augue mauris augue
            neque gravida in fermentum et. Nunc lobortis mattis aliquam faucibus purus in. Amet massa vitae tortor
            condimentum lacinia quis. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Sed vulputate mi sit
            amet mauris commodo quis imperdiet. A pellentesque sit amet porttitor eget. Magna fringilla urna porttitor
            rhoncus dolor. Ultricies integer quis auctor elit sed. Ac orci phasellus egestas tellus rutrum tellus
            pellentesque eu. Massa eget egestas purus viverra accumsan. Suspendisse faucibus interdum posuere lorem
            ipsum dolor. Pharetra convallis posuere morbi leo urna molestie at. Eu ultrices vitae auctor eu augue ut
            lectus arcu bibendum. Mattis pellentesque id nibh tortor id aliquet lectus proin.</p>
        <img srcset="${character_responsive} 100w,${character_desktop} 200w"
        sizes="(max-width: 600px) 100px,200px"
        src="${character_desktop}"
        alt="Game character"/>
    </section>
    
    <figure class="video">
        <video controls width="480">
            <source src="${video1_src1}" type="video/mp4">
            <source src="${video1_src2}" type="video/webm">
            Sorry, your browser doesn't support embedded videos.
        </video>
        <figcaption>Gameplay video 1</figcaption>
    </figure>

    <section>
        <p>Neque egestas congue quisque egestas diam in. Vitae semper quis lectus nulla at volutpat. Quam id leo in
            vitae turpis. Ut ornare lectus sit amet est placerat in egestas. Sed faucibus turpis in eu mi bibendum neque
            egestas. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Bibendum est ultricies integer quis
            auctor elit. Massa enim nec dui nunc mattis enim ut. Cursus turpis massa tincidunt dui ut ornare lectus. A
            scelerisque purus semper eget. Quis enim lobortis scelerisque fermentum dui faucibus in. Porttitor rhoncus
            dolor purus non enim praesent elementum facilisis leo. Ac auctor augue mauris augue neque.</p>
        <img srcset="${food_item_responsive} 100w,${food_item_desktop} 200w"
        sizes="(max-width: 600px) 100px,200px"
        src="${food_item_desktop}"
        alt="Game character"/>
    </section>
    <figure class="video">
        <video controls width="480">
            <source src="${video2_src1}" type="video/mp4">
            <source src="${video2_src2}" type="video/webm">
            Sorry, your browser doesn't support embedded videos.
        </video>
        <figcaption>Gameplay video 2</figcaption>
    </figure>

    <section>
        <p>Vitae proin sagittis nisl rhoncus mattis. At augue eget arcu dictum varius duis at. Aliquam ultrices sagittis
            orci a scelerisque purus semper eget duis. Cras tincidunt lobortis feugiat vivamus at augue eget arcu
            dictum. A scelerisque purus semper eget. Eu volutpat odio facilisis mauris sit amet massa vitae. At urna
            condimentum mattis pellentesque id nibh tortor id aliquet. Magna fringilla urna porttitor rhoncus dolor
            purus non enim praesent. Sed nisi lacus sed viverra tellus. Eget aliquet nibh praesent tristique magna sit
            amet purus. Interdum consectetur libero id faucibus nisl tincidunt eget. Tellus in hac habitasse platea.
            Arcu bibendum at varius vel pharetra. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque.</p>
    </section>
    <div class="audios">
        <figure>
            <figcaption>Soundtrack 1</figcaption>
            <audio controls src="${audio1}">
                    Your browser does not support the HTML audio element.
            </audio>
        </figure>
            <figure>
            <figcaption>Soundtrack 2</figcaption>
            <audio controls src="${audio2}">
                    Your browser does not support the HTML audio element.
            </audio>
        </figure>
    </div>

</section>
`;
const screenshotsHTML = `
<section id="screenshots">
    <h2>Screenshots</h2>
    <div class="carousel">
        <div class="carousel-images">
            <img srcset="${image1_responsive} 800w,${image1} 1600w"
                sizes="(max-width: 600px) 800w,1600w"
                src="${image1}"
                alt="Screenshot 1"/>
            <img srcset="${image2_responsive} 800w,${image2} 1600w"
                sizes="(max-width: 600px) 800w,1600w"
                src="${image1}"
                alt="Screenshot 2"/>
            <img srcset="${image3_responsive} 800w,${image3} 1600w"
                sizes="(max-width: 600px) 800w,1600w"
                src="${image1}"
                alt="Screenshot 3"/>
        </div>
        <ul class="carousel-dots">
            <li class="dot active"></li>
            <li class="dot"></li>
            <li class="dot"></li>
        </ul>
    </div>
</section>
`;
const subscribeHTML = `
<section id="subscribe">
    <h2>Newsletter</h2>
    <p>Subscribe to our newsletter and be the first to find out all about the game!</p>
    <form action="">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter your email..."/>
        <button type="submit">Subscribe</button>
    </form>
</section>
`;

},{"988ae8cd712ae8c6":"hF7I5","67228bdf034d31fc":"czsc7","97ec52930afa5ebf":"8oVo0","44a1452b50025b1c":"4YW2y","aa31d11e36a33428":"leso6","f134afe2072af993":"7553F","8f0f2ad8e605dc1e":"R12xo","e04b3a53d107567f":"ivzaD","7fb49560b9cc1aa9":"cbSZd","ad4cdfbbef444e5d":"dIRZ2","96cfe5a8edaf03f6":"d8vZt","42f8250d559bf7d4":"KZZWK","25c76102cf132e89":"iWbAc","f8a4fb3cf4451299":"lfSTd","890cc8f080d993d4":"fr3MU","28510f92495bd63":"hOjet","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hF7I5":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('lEZN7') + "screenshot1.90606d58.webp" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"czsc7":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('lEZN7') + "screenshot2.d4be92e9.webp" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"8oVo0":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('lEZN7') + "screenshot3.65b92c90.webp" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"4YW2y":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('lEZN7') + "screenshot1.787a601b.webp" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"leso6":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('lEZN7') + "screenshot2.9c7bda17.webp" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7553F":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('lEZN7') + "screenshot3.c4fe7504.webp" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"R12xo":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('lEZN7') + "character.e3d6197c.webp" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"ivzaD":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('lEZN7') + "character.aafeec4f.webp" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"cbSZd":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('lEZN7') + "food-item.7e7418d3.webp" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"dIRZ2":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('lEZN7') + "food-item.b9a12af9.webp" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"d8vZt":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('lEZN7') + "video1.95e4aa43.mp4" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"KZZWK":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('lEZN7') + "video1.6cbad676.webm" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"iWbAc":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('lEZN7') + "video2.4b6b6952.mp4" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lfSTd":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('lEZN7') + "video2.dd42659d.webm" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"fr3MU":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('lEZN7') + "audio1.4c09af56.ogg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"hOjet":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('lEZN7') + "audio2.987af47f.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}]},["gKNRU","inhmy"], "inhmy", "parcelRequire4908")

//# sourceMappingURL=index.ad4c370e.js.map

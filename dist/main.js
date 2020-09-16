(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div\r\n  data-collapse=\"tiny\"\r\n  data-animation=\"over-right\"\r\n  data-duration=\"400\"\r\n  data-ix=\"navbar\"\r\n  class=\"navbar w-nav\"\r\n  style=\"opacity: 1; transition: opacity 600ms ease 0s;\"\r\n>\r\n  <a routerLink=\"/home\" class=\"logo w-nav-brand\">\r\n    <div class=\"long-text\">Kyle Monteiro</div>\r\n  </a>\r\n  <div style=\"padding-top: 10px;\">\r\n    <a routerLink=\"/home\" class=\"nav-link w-nav-link\" style=\"max-width: 728px;\">\r\n      Home\r\n    </a>\r\n    <a routerLink=\"/projects\" class=\"nav-link w-nav-link\" style=\"max-width: 728px;\">\r\n      Projects\r\n    </a>\r\n    <a routerLink=\"/resume\" class=\"nav-link w-nav-link\" style=\"max-width: 728px;\">\r\n      Resume\r\n    </a>\r\n    <!-- <a routerLink=\"/about\" class=\"nav-link w-nav-link\" style=\"max-width: 728px;\"\r\n        >About Me</a\r\n      > -->\r\n  </div>\r\n\r\n  <div class=\"w-container pull-right\">\r\n    <!-- <nav role=\"navigation\" class=\"nav-menu w-nav-menu\"> -->\r\n      \r\n      \r\n      <a routerLink=\"#\" class=\"close-x w-hidden-main w-hidden-medium w-hidden-small\">\r\n        ×\r\n      </a>\r\n  </div>\r\n  <div class=\"w-nav-overlay\" data-wf-ignore=\"\"></div>\r\n</div>\r\n\r\n<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  about works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"hero-section\">\r\n  <div class=\"hero-content w-container\">\r\n    <div\r\n      data-ix=\"hero-text\"\r\n      class=\"hero-heading\"\r\n      style=\"opacity: 1; transform: translateX(0px) translateY(0px) translateZ(0px); transition: opacity 600ms ease 0s, transform 600ms ease 0s;\"\r\n    >\r\n      {{ pageHeading }}\r\n    </div>\r\n    <div\r\n      data-ix=\"hero-text-2\"\r\n      class=\"hero-subheading\"\r\n      style=\"opacity: 1; transform: translateX(0px) translateY(0px) translateZ(0px); transition: opacity 600ms ease 0s, transform 600ms ease 0s;\"\r\n    >\r\n      {{ pageDesc }}\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"posts\" class=\"main-section bottom-padding\">\r\n  <div id=\"Latest-post\" class=\"w-container\">\r\n    <div class=\"section-heading\">\r\n      <h2 class=\"section-title\">Featured Posts</h2>\r\n      <div class=\"med-divider\"></div>\r\n    </div>\r\n    <div class=\"w-dyn-list\" *ngIf=\"posts != null\">\r\n      <div class=\"w-clearfix w-dyn-items w-row\">\r\n        <div\r\n          class=\"featuredthumbnail w-dyn-item w-col w-col-6\"\r\n          *ngFor=\"let post of posts\"\r\n        >\r\n          <a\r\n            routerLink=\"/post/{{ post.route }}\"\r\n            state=\"{{ post.postString }}\"\r\n            data-ix=\"featured-wrapper\"\r\n            class=\"featured-wrapper w-inline-block\"\r\n            style=\"transition: transform 0.2s ease 0s, -webkit-transform 0.2s ease 0s;\"\r\n          >\r\n            <div>\r\n              <div class=\"category-tag-2 w-dyn-bind-empty\"></div>\r\n              <div\r\n                class=\"featured-image\"\r\n                [style.background-image]=\"post.thumbnail\">\r\n              </div>\r\n            </div>\r\n            <div class=\"featured-text\">\r\n              <div class=\"featured-title\">{{ post.title }}</div>\r\n              <div class=\"featured-description\">\r\n                {{ post.description }}\r\n              </div>\r\n              <div class=\"featured-details\">\r\n                <div class=\"w-clearfix\">\r\n                  <img src=\"\" alt=\"\" class=\"author-img w-dyn-bind-empty\" />\r\n                  <div class=\"author-title lite\">{{ post.author }}</div>\r\n                  <div class=\"thumbnail-date lite\">{{ post.date }}</div>\r\n                </div>\r\n              </div>\r\n            </div></a\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/post/post.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/post/post.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"hero-section\">\r\n    <div class=\"hero-content w-container\">\r\n      <div\r\n        data-ix=\"hero-text\"\r\n        class=\"hero-heading\"\r\n        style=\"opacity: 1; transform: translateX(0px) translateY(0px) translateZ(0px); transition: opacity 600ms ease 0s, transform 600ms ease 0s;\"\r\n      >\r\n        {{title}}\r\n      </div>\r\n      <div\r\n        data-ix=\"hero-text-2\"\r\n        class=\"hero-subheading\"\r\n        style=\"opacity: 1; transform: translateX(0px) translateY(0px) translateZ(0px); transition: opacity 600ms ease 0s, transform 600ms ease 0s;\"\r\n      >\r\n        {{date}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n<div class=\"main-section\" style=\"padding-top: 80px;\">\r\n  <div class=\"w-container\">\r\n    <div class=\"blog-post w-richtext\">\r\n        <markdown id=\"postBody\" [data]=\"content\"></markdown>\r\n    </div>\r\n    <div>\r\n      <div class=\"full-divide\"></div>\r\n      <div class=\"author-wrapper\">\r\n        <a routerLink=\"/about\" data-w-expand=\"authors\" class=\"author-name\">Kyle Monteiro</a>\r\n        <div class=\"smallest-divider\"></div>\r\n        <div\r\n          data-w-expand=\"authors\"\r\n          class=\"author-bio w-dyn-bind-empty w-richtext\"\r\n        ></div>\r\n        <div>\r\n          <a href=\"#\" data-w-expand=\"authors\" class=\"social-link w-inline-block\"\r\n            ><img\r\n              src=\"https://uploads-ssl.webflow.com/5df9621bca16d03e19a93103/5df9621bca16d070cfa93146_social-18.svg\"\r\n              alt=\"\"/></a\r\n          ><a\r\n            data-w-expand=\"authors\"\r\n            href=\"#\"\r\n            class=\"social-link w-inline-block\"\r\n            ><img\r\n              src=\"https://uploads-ssl.webflow.com/5df9621bca16d03e19a93103/5df9621bca16d05b05a9314e_social-07.svg\"\r\n              alt=\"\"/></a\r\n          ><a\r\n            href=\"#\"\r\n            data-w-expand=\"authors\"\r\n            class=\"social-link w-inline-block\"\r\n            ><img\r\n              src=\"https://uploads-ssl.webflow.com/5df9621bca16d03e19a93103/5df9621bca16d0d296a9314c_social-03.svg\"\r\n              alt=\"\"\r\n          /></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"hero-section\">\r\n    <div class=\"hero-content w-container\">\r\n      <div\r\n        data-ix=\"hero-text\"\r\n        class=\"hero-heading\"\r\n        style=\"opacity: 1; transform: translateX(0px) translateY(0px) translateZ(0px); transition: opacity 600ms ease 0s, transform 600ms ease 0s;\"\r\n      >\r\n        Projects\r\n      </div>\r\n      <div\r\n        data-ix=\"hero-text-2\"\r\n        class=\"hero-subheading\"\r\n        style=\"opacity: 1; transform: translateX(0px) translateY(0px) translateZ(0px); transition: opacity 600ms ease 0s, transform 600ms ease 0s;\"\r\n      >\r\n        Check out my repositories on GitHub!\r\n      </div>\r\n    </div>\r\n  </div>\r\n<div class=\"container\" style=\"text-align: center; padding-top: 50px;\">\r\n\r\n  <p>Here is a list of projects that I have worked on, including a repository for this that I built from scratch with Angular.</p>\r\n\r\n  <ul id=\"projList\" class=\"list w-list-unstyled\">\r\n    <li class=\"list-item-2\">\r\n      <div>\r\n      <a href=\"https://github.com/kyleadrianmonteiro/AutoCoach\"><img src=\"https://gh-card.dev/repos/kyleadrianmonteiro/AutoCoach.svg\"/></a>\r\n      </div>\r\n    </li>\r\n    <li class=\"list-item-2\">\r\n      <div>\r\n          <a href=\"https://github.com/KyleAdrianMonteiro/ResumeApp\"><img src=\"https://gh-card.dev/repos/KyleAdrianMonteiro/ResumeApp.svg\"></a>\r\n      </div>\r\n    </li>\r\n    <li class=\"list-item-2\">\r\n        <div>\r\n        <a href=\"https://github.com/kyleadrianmonteiro/Jade-Bot\"><img src=\"https://gh-card.dev/repos/kyleadrianmonteiro/Jade-Bot.svg\"/></a>\r\n        </div>\r\n      </li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/resume/resume.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/resume/resume.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"hero-section\">\r\n  <div class=\"hero-content w-container\">\r\n    <div\r\n      data-ix=\"hero-text\"\r\n      class=\"hero-heading\"\r\n      style=\"opacity: 1; transform: translateX(0px) translateY(0px) translateZ(0px); transition: opacity 600ms ease 0s, transform 600ms ease 0s;\"\r\n    >\r\n      Resume\r\n    </div>\r\n    <div\r\n      data-ix=\"hero-text-2\"\r\n      class=\"hero-subheading\"\r\n      style=\"opacity: 1; transform: translateX(0px) translateY(0px) translateZ(0px); transition: opacity 600ms ease 0s, transform 600ms ease 0s;\"\r\n    >\r\n      Take a look at my current resume!\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container\" style=\"text-align: center; padding-top: 50px;\">\r\n  <object data=\"assets\\KyleMonteiro_TechResume.pdf#page=2\" type=\"application/pdf\" width=\"900\" height=\"1000\">\r\n    <embed src=\"assets\\KyleMonteiro_TechResume.pdf\" type=\"application/pdf\">\r\n  </object>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
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

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = 'Kyle Monteiro';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'app',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/resume/resume.component */ "./src/app/components/resume/resume.component.ts");













var appRoutes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'projects', component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"] },
    { path: 'resume', component: _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_12__["ResumeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"] },
    { path: 'post/:name', component: _components_post_post_component__WEBPACK_IMPORTED_MODULE_11__["PostComponent"] },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _components_post_post_component__WEBPACK_IMPORTED_MODULE_11__["PostComponent"],
                _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_12__["ResumeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, {
                    enableTracing: false,
                    useHash: true
                }),
                ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"].forRoot()
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")).default]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(sanitization, firebaseService) {
        this.sanitization = sanitization;
        this.firebaseService = firebaseService;
        this.posts = null;
        this.sanitizer = sanitization;
        this.pageHeading = 'A Deep Dive into the Workforce';
        this.pageDesc = 'Read about my experiences and adventures with co-op.';
    }
    HomeComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.firebaseService.getPosts()];
                    case 1:
                        _a.posts = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/post/post.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/post/post.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/post/post.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");




var PostComponent = /** @class */ (function () {
    function PostComponent(route, firebaseService) {
        this.route = route;
        this.firebaseService = firebaseService;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        var name = this.route.snapshot.params.name;
        this.firebaseService.getPost(name).then(function (postObj) {
            console.log(postObj);
            _this.title = postObj.title;
            _this.description = postObj.description;
            _this.author = postObj.author;
            _this.date = postObj.date;
            _this.content = postObj.content;
            _this.thumbnail = postObj.thumbnail;
        });
    };
    PostComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] }
    ]; };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/post/post.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post.component.css */ "./src/app/components/post/post.component.css")).default]
        })
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/projects.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/projects/projects.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#projList {\r\n    padding-top: 20px;\r\n    -moz-column-count: 3;\r\n         column-count: 3;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBRWQsb0JBQW9CO1NBQ2YsZUFBZTtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9qTGlzdCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAzO1xyXG4gICAgICAgLW1vei1jb2x1bW4tY291bnQ6IDM7XHJcbiAgICAgICAgICAgIGNvbHVtbi1jb3VudDogMztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.css */ "./src/app/components/projects/projects.component.css")).default]
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/resume/resume.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/resume/resume.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/resume/resume.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/resume/resume.component.ts ***!
  \*******************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resume.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/resume/resume.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resume.component.css */ "./src/app/components/resume/resume.component.css")).default]
        })
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");




var FirebaseService = /** @class */ (function () {
    function FirebaseService() {
        this.firebaseConfig = {
            apiKey: "AIzaSyBanHleu052F63C8zY6bHexB5PowFagpgo",
            authDomain: "resumeapp-f48ce.firebaseapp.com",
            databaseURL: "https://resumeapp-f48ce.firebaseio.com",
            projectId: "resumeapp-f48ce",
            storageBucket: "resumeapp-f48ce.appspot.com",
            messagingSenderId: "1019813597438",
            appId: "1:1019813597438:web:791afc2dde02d6bef055af",
            measurementId: "G-EEV31HLHY8",
        };
        this.init();
    }
    FirebaseService.prototype.init = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                firebase_app__WEBPACK_IMPORTED_MODULE_2__["initializeApp"](this.firebaseConfig);
                this.storage = firebase_app__WEBPACK_IMPORTED_MODULE_2__["storage"]();
                this.posts = this.retrievePosts();
                console.log(this.posts);
                return [2 /*return*/];
            });
        });
    };
    FirebaseService.prototype.getPostNames = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var posts;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                posts = new Promise(function (resolve, reject) {
                    _this.storage.ref('blog.md').getDownloadURL().then(function (url) {
                        var xhr = new XMLHttpRequest();
                        var reader = new FileReader();
                        xhr.responseType = 'blob';
                        xhr.onload = function (event) {
                            reader.onload = function () {
                                resolve(reader.result);
                            };
                            reader.readAsText(xhr.response, 'UTF-8');
                        };
                        xhr.open('GET', url);
                        xhr.send();
                    });
                });
                return [2 /*return*/, posts];
            });
        });
    };
    FirebaseService.prototype.getFile = function (name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var file;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                file = new Promise(function (resolve, reject) {
                    _this.storage.ref(name).getDownloadURL().then(function (url) {
                        var xhr = new XMLHttpRequest();
                        var reader = new FileReader();
                        xhr.responseType = 'blob';
                        xhr.onload = function (event) {
                            reader.onload = function () {
                                resolve(reader.result);
                            };
                            reader.readAsText(xhr.response, 'UTF-8');
                        };
                        xhr.open('GET', url);
                        xhr.send();
                    });
                });
                return [2 /*return*/, file];
            });
        });
    };
    FirebaseService.prototype.getPost = function (name) {
        var _this = this;
        var post = new Promise(function (resolve, reject) {
            _this.posts.then(function (result) {
                var e_1, _a;
                try {
                    for (var result_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](result), result_1_1 = result_1.next(); !result_1_1.done; result_1_1 = result_1.next()) {
                        var p = result_1_1.value;
                        if (p && p.route == name) {
                            resolve(p);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (result_1_1 && !result_1_1.done && (_a = result_1.return)) _a.call(result_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
        });
        return post;
    };
    FirebaseService.prototype.getPosts = function () {
        return this.posts;
    };
    FirebaseService.prototype.retrievePosts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var posts;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                posts = new Promise(function (resolve, reject) {
                    _this.getFile('blog.md').then(function (result) {
                        var e_2, _a;
                        var postNames = result.split("\r\n");
                        var postArr = [];
                        var _loop_1 = function (i, name_1) {
                            _this.getFile(name_1 + ".md").then(function (result) {
                                var objStr = result.split('}')[0].replace(/\n/, '') + '}';
                                var postObj = JSON.parse(objStr);
                                var p = {
                                    title: postObj.title,
                                    description: postObj.description,
                                    date: postObj.date,
                                    author: postObj.author,
                                    thumbnail: "url(" + postObj.thumbnail + ")",
                                    content: result.substring(result.indexOf('}') + 1),
                                    route: postObj.route,
                                    postString: ''
                                };
                                p.postString = JSON.stringify(p);
                                p.postString = p.postString;
                                postArr[i] = p;
                                if (i == postNames.length - 1) {
                                    resolve(postArr);
                                }
                            });
                        };
                        try {
                            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](postNames.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_c.value, 2), i = _d[0], name_1 = _d[1];
                                _loop_1(i, name_1);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                    });
                });
                return [2 /*return*/, posts];
            });
        });
    };
    FirebaseService.prototype.getStorage = function () {
        return this.storage;
    };
    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\gitrepos\ResumeApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
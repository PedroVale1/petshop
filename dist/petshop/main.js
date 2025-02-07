(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-cart-page></app-cart-page>\n"

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
        this.title = 'petshop';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _pages_account_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/account/login-page/login-page.component */ "./src/app/pages/account/login-page/login-page.component.ts");
/* harmony import */ var _pages_account_reset_password_page_reset_password_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/account/reset-password-page/reset-password-page.component */ "./src/app/pages/account/reset-password-page/reset-password-page.component.ts");
/* harmony import */ var _pages_account_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/account/signup-page/signup-page.component */ "./src/app/pages/account/signup-page/signup-page.component.ts");
/* harmony import */ var _pages_store_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/store/products-page/products-page.component */ "./src/app/pages/store/products-page/products-page.component.ts");
/* harmony import */ var _pages_account_pets_page_pets_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/account/pets-page/pets-page.component */ "./src/app/pages/account/pets-page/pets-page.component.ts");
/* harmony import */ var _pages_store_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/store/cart-page/cart-page.component */ "./src/app/pages/store/cart-page/cart-page.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _pages_account_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponent"],
                _pages_account_reset_password_page_reset_password_page_component__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordPageComponent"],
                _pages_account_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_8__["SignupPageComponent"],
                _pages_store_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_9__["ProductsPageComponent"],
                _pages_account_pets_page_pets_page_component__WEBPACK_IMPORTED_MODULE_10__["PetsPageComponent"],
                _pages_store_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_11__["CartPageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-background-primary uk-light\">\n  <div class=\"uk-container\">\n    <nav class=\"uk-navbar-container uk-navbar-transparent uk-margin\" uk-navbar>\n      <div class=\"uk-navbar-left\">\n        <a class=\"uk-navbar-item uk-logo\" href=\"#\">\n          <span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: icon-color-light; ratio: 0.15\"></span>\n        </a>\n        <ul class=\"uk-navbar-nav\">\n          <li><a href=\"#\">Produtos</a></li>\n          <li><a href=\"#\">Meus Pets</a></li>\n          <li><a href=\"#\">Consultas</a></li>\n        </ul>\n      </div>\n      <div class=\"uk-navbar-right\">\n        <ul class=\"uk-navbar-nav\">\n          <li>\n            <a [routerLink]=\"['/cart']\">\n              <span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: cart\"></span>\n            </a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/account']\">\n              <span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: user\"></span>\n              {{ user?.name }}\n            </a>\n          </li>\n          <li>\n            <a (click)=\"logout()\">\n              <span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: sign-out\"></span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pages/account/login-page/login-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/account/login-page/login-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-flex-center\" uk-grid>\n  <div class=\"uk-width-1-3@m\">\n    <p class=\"uk-text-center uk-margin-large-top uk-margin-medium-bottom\">\n      <span class=\"uk-icon\" uk-icon=\"icon: logo-color-dark; ratio: 0.7\"></span>\n    </p>\n\n    <div class=\"uk-card uk-card-primary uk-card-body uk-box-shadow-small\">\n      <h3 class=\"uk-card-title\">Autetique-se</h3>\n      <div class=\"uk-margin\">\n        <input class=\"uk-input uk-form-large\" type=\"email\" placeholder=\"E-mail\">\n      </div>\n      <div class=\"uk-margin\">\n        <input class=\"uk-input uk-form-large\" type=\"password\" placeholder=\"Senha\">\n      </div>\n      <div class=\"uk-margin  uk-text-right\">\n        <a href=\"/\" class=\"uk-button uk-button-default\">Entrar</a>\n      </div>\n    </div>\n\n    <p class=\"uk-text-center\">\n      <a href=\"/signup\" class=\"uk-button uk-width-1-1 uk-button-large uk-button-primary uk-margin-small-button\" >Quero me cadastrar</a>\n      <br>\n      <a href=\"/reset-password\" class=\"uk-button uk-button-link\">Esqueci minha senha</a>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/account/login-page/login-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/account/login-page/login-page.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent() {
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/pages/account/login-page/login-page.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/account/pets-page/pets-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/account/pets-page/pets-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-container\">\n  <nav class=\"uk-navbar-container\" uk-navbar>\n    <div class=\"uk-navbar-left\">\n      <ul class=\"uk-navbar-nav\">\n        <li class=\"uk-active\">Meus Pets</li>\n      </ul>\n    </div>\n\n    <div class=\"uk-navbar-right\">\n      <ul class=\"uk-navbar-nav\">\n        <li class=\"uk-active\">\n          <a href=\"#\">\n            <span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: plus\"></span>\n            Adicionar\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n\n<div class=\"uk-container\">\n  <div uk-grid>\n    <!-- Card 1 -->\n    <div class=\"uk-width-1-4\">\n      <div class=\"uk-card uk-card-default\">\n        <div class=\"uk-card-media-top\">\n          <br>\n          <p class=\"uk-text-center\">\n            <img src=\"https://placehold.it/250\" class=\"uk-border-circle\" alt=\"\">\n          </p>\n        </div>\n        <div class=\"uk-card-body\">\n          <h3 class=\"uk-card-title\">Media Top</h3>\n          <p>Lorem ipsum sdashudasuhduhas duhasduhas uhdas uhduashudh asuh dasuh duhasuhdasuh</p>\n          <p>\n            <a href=\"#\" class=\"uk-button uk-button-default\">\n              <span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: pencil\"></span>\n              Editar\n            </a>\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <!-- Card 2 -->\n    <div class=\"uk-width-1-4\">\n      <div class=\"uk-card uk-card-default\">\n        <div class=\"uk-card-media-top\">\n          <br>\n          <p class=\"uk-text-center\">\n            <img src=\"https://placehold.it/250\" class=\"uk-border-circle\" alt=\"\">\n          </p>\n        </div>\n        <div class=\"uk-card-body\">\n          <h3 class=\"uk-card-title\">Media Top</h3>\n          <p>Lorem ipsum sdashudasuhduhas duhasduhas uhdas uhduashudh asuh dasuh duhasuhdasuh</p>\n          <p>\n            <a href=\"#\" class=\"uk-button uk-button-default\">\n              <span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: pencil\"></span>\n              Editar\n            </a>\n          </p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/account/pets-page/pets-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/account/pets-page/pets-page.component.ts ***!
  \****************************************************************/
/*! exports provided: PetsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetsPageComponent", function() { return PetsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PetsPageComponent = /** @class */ (function () {
    function PetsPageComponent() {
    }
    PetsPageComponent.prototype.ngOnInit = function () {
    };
    PetsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pets-page',
            template: __webpack_require__(/*! ./pets-page.component.html */ "./src/app/pages/account/pets-page/pets-page.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PetsPageComponent);
    return PetsPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/account/reset-password-page/reset-password-page.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/account/reset-password-page/reset-password-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-flex-center\" uk-grid>\n  <div class=\"uk-width-1-3@m\">\n    <p class=\"uk-text-center uk-margin-large-top uk-margin-medium-bottom\">\n      <span class=\"uk-icon\" uk-icon=\"icon: logo-color-dark; ratio: 0.7\"></span>\n    </p>\n\n    <div class=\"uk-card uk-card-primary uk-card-body uk-box-shadow-small\">\n      <h3 class=\"uk-card-title\">Restauração de senha</h3>\n      <div class=\"uk-margin\">\n        <input class=\"uk-input uk-form-large\" type=\"email\" placeholder=\"E-mail\">\n      </div>\n\n      <div class=\"uk-margin  uk-text-right\">\n        <a href=\"/login\" class=\"uk-button uk-button-default\">Enviar</a>\n      </div>\n    </div>\n\n    <p class=\"uk-text-center\">\n      <a href=\"/login\" class=\"uk-button uk-button-link\">Voltar</a>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/account/reset-password-page/reset-password-page.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/account/reset-password-page/reset-password-page.component.ts ***!
  \************************************************************************************/
/*! exports provided: ResetPasswordPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageComponent", function() { return ResetPasswordPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResetPasswordPageComponent = /** @class */ (function () {
    function ResetPasswordPageComponent() {
    }
    ResetPasswordPageComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password-page',
            template: __webpack_require__(/*! ./reset-password-page.component.html */ "./src/app/pages/account/reset-password-page/reset-password-page.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResetPasswordPageComponent);
    return ResetPasswordPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/account/signup-page/signup-page.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/account/signup-page/signup-page.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-flex-center\" uk-grid>\n  <div class=\"uk-width-1-3@m\">\n    <p class=\"uk-text-center uk-margin-large-top uk-margin-medium-bottom\">\n      <span class=\"uk-icon\" uk-icon=\"icon: logo-color-dark; ratio: 0.7\"></span>\n    </p>\n\n    <div class=\"uk-card uk-card-primary uk-card-body uk-box-shadow-small\">\n      <h3 class=\"uk-card-title\">Cadastra-se</h3>\n      <div class=\"uk-margin\">\n        <input class=\"uk-input uk-form-large\" type=\"text\" placeholder=\"Nome\">\n      </div>\n      <div class=\"uk-margin\">\n        <input class=\"uk-input uk-form-large\" type=\"text\" placeholder=\"CPF\">\n      </div>\n      <div class=\"uk-margin\">\n        <input class=\"uk-input uk-form-large\" type=\"email\" placeholder=\"E-mail\">\n      </div>\n      <div class=\"uk-margin\">\n        <input class=\"uk-input uk-form-large\" type=\"password\" placeholder=\"Senha\">\n      </div>\n      <div class=\"uk-margin  uk-text-right\">\n        <a href=\"/login\" class=\"uk-button uk-button-default\">Cadastrar</a>\n      </div>\n    </div>\n\n    <p class=\"uk-text-center\">\n\n      <a href=\"/login\" class=\"uk-button uk-button-link\">Voltar</a>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/account/signup-page/signup-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/account/signup-page/signup-page.component.ts ***!
  \********************************************************************/
/*! exports provided: SignupPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageComponent", function() { return SignupPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignupPageComponent = /** @class */ (function () {
    function SignupPageComponent() {
    }
    SignupPageComponent.prototype.ngOnInit = function () {
    };
    SignupPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup-page',
            template: __webpack_require__(/*! ./signup-page.component.html */ "./src/app/pages/account/signup-page/signup-page.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignupPageComponent);
    return SignupPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/store/cart-page/cart-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/store/cart-page/cart-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-container\">\n  <nav class=\"uk-navbar-container\" uk-navbar>\n    <div class=\"uk-navbar-left\">\n      <ul class=\"uk-navbar-nav\">\n        <li class=\"uk-active\">Meu Carrinho</li>\n      </ul>\n    </div>\n\n    <div class=\"uk-navbar-right\">\n      <ul class=\"uk-navbar-nav\">\n        <li lass=\"uk-active\">\n          <a href=\"#\">\n            <span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: close\"></span>\n            Limpar Carrinho</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n\n<div class=\"uk-container\">\n  <div class=\"uk-grid-small\" uk-grid>\n    <div class=\"uk-width-expand\" uk-leader>\n      <img src=\"https://picsum.photos/64/64\" class=\"uk-align-left\" alt=\"imagem aleatoria\">\n      <a href=\"#\">Shampoo para pelos macios</a> <br>\n      <strong>2 unidades</strong>\n    </div>\n    <div>\n      <br>\n      20,90\n      <a href=\"#\" class=\"uk-button uk-button-link uk-align-right\">\n        <span class=\"uk-icon\" uk-icon=\"icon: close\"></span>\n      </a>\n    </div>\n  </div>\n</div>\n\n<div class=\"uk-container\">\n  <div class=\"uk-grid-small\" uk-grid>\n    <div class=\"uk-width-expand\" uk-leader>\n      <img src=\"https://picsum.photos/64/64\" class=\"uk-align-left\" alt=\"imagem aleatoria\">\n      <a href=\"#\">Shampoo para pelos macios</a> <br>\n      <strong>2 unidades</strong>\n    </div>\n    <div>\n      <br>\n      20,90\n      <a href=\"#\" class=\"uk-button uk-button-link uk-align-right\">\n        <span class=\"uk-icon\" uk-icon=\"icon: close\"></span>\n      </a>\n    </div>\n  </div>\n</div>\n\n<div class=\"uk-text-right\">\n  <h3 class=\"uk-text-right total-compra\">R$ 41,80</h3>\n  <a href=\"/checkout\" class=\"uk-button uk-button-large uk-button-primary finalizar-compra\">\n    Finalizar compra\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/store/cart-page/cart-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/store/cart-page/cart-page.component.ts ***!
  \**************************************************************/
/*! exports provided: CartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageComponent", function() { return CartPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CartPageComponent = /** @class */ (function () {
    function CartPageComponent() {
    }
    CartPageComponent.prototype.ngOnInit = function () {
    };
    CartPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart-page',
            template: __webpack_require__(/*! ./cart-page.component.html */ "./src/app/pages/store/cart-page/cart-page.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CartPageComponent);
    return CartPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/store/products-page/products-page.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/store/products-page/products-page.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-container\">\n  <div class=\"uk-grid uk-margin-small-top\">\n    <div class=\"uk-width-1-2 uk-margin-small-bottom\">\n      <div class=\"uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin\" uk-grid>\n        <div class=\"uk-card-media-left uk-cover-container\">\n          <img src=\"https://picsum.photos/200/300\" alt=\"Imagem aleatória\" uk-cover>\n          <canvas width=\"600\" height=\"400\"></canvas>\n        </div>\n        <div>\n          <div class=\"uk-card-body\">\n            <h3 class=\"uk-card-title\">R$ 79,90</h3>\n            <p>shampoo para pelos macios</p>\n            <button class=\"uk-button uk-button-default\"><span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: cart\"></span>\n              Adicionar</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"uk-width-1-2 uk-margin-small-bottom\">\n      <div class=\"uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin\" uk-grid>\n        <div class=\"uk-card-media-left uk-cover-container\">\n          <img src=\"https://picsum.photos/200/300\" alt=\"Imagem aleatória\" uk-cover>\n          <canvas width=\"600\" height=\"400\"></canvas>\n        </div>\n        <div>\n          <div class=\"uk-card-body\">\n            <h3 class=\"uk-card-title\">R$ 79,90</h3>\n            <p>shampoo para pelos macios</p>\n            <button class=\"uk-button uk-button-default\"><span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: cart\"></span>\n              Adicionar</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"uk-width-1-2 uk-margin-small-bottom\">\n      <div class=\"uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin\" uk-grid>\n        <div class=\"uk-card-media-left uk-cover-container\">\n          <img src=\"https://picsum.photos/200/300\" alt=\"Imagem aleatória\" uk-cover>\n          <canvas width=\"600\" height=\"400\"></canvas>\n        </div>\n        <div>\n          <div class=\"uk-card-body\">\n            <h3 class=\"uk-card-title\">R$ 79,90</h3>\n            <p>shampoo para pelos macios</p>\n            <button class=\"uk-button uk-button-default\"><span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: cart\"></span>\n              Adicionar</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"uk-width-1-2 uk-margin-small-bottom\">\n      <div class=\"uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin\" uk-grid>\n        <div class=\"uk-card-media-left uk-cover-container\">\n          <img src=\"https://picsum.photos/200/300\" alt=\"Imagem aleatória\" uk-cover>\n          <canvas width=\"600\" height=\"400\"></canvas>\n        </div>\n        <div>\n          <div class=\"uk-card-body\">\n            <h3 class=\"uk-card-title\">R$ 79,90</h3>\n            <p>shampoo para pelos macios</p>\n            <button class=\"uk-button uk-button-default\"><span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: cart\"></span>\n              Adicionar</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/store/products-page/products-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/store/products-page/products-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageComponent", function() { return ProductsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductsPageComponent = /** @class */ (function () {
    function ProductsPageComponent() {
    }
    ProductsPageComponent.prototype.ngOnInit = function () {
    };
    ProductsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products-page',
            template: __webpack_require__(/*! ./products-page.component.html */ "./src/app/pages/store/products-page/products-page.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductsPageComponent);
    return ProductsPageComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\petshop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
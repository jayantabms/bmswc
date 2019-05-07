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
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _prestudentregistration_prestudentregistration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prestudentregistration/prestudentregistration.component */ "./src/app/prestudentregistration/prestudentregistration.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./print-layout/print-layout.component */ "./src/app/print-layout/print-layout.component.ts");
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invoice/invoice.component */ "./src/app/invoice/invoice.component.ts");






var appRoutes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'studentRegstration', component: _prestudentregistration_prestudentregistration_component__WEBPACK_IMPORTED_MODULE_2__["PrestudentregistrationComponent"],
        children: [
            {
                path: 'print',
                outlet: 'print',
                component: _print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_4__["PrintLayoutComponent"],
                children: [
                    { path: 'invoice', component: _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_5__["InvoiceComponent"] }
                ]
            }
        ]
    },
    { path: 'print',
        outlet: 'print',
        component: _print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_4__["PrintLayoutComponent"],
        children: [
            { path: 'invoice/:invoiceIds', component: _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_5__["InvoiceComponent"] }
        ]
    },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"], pathMatch: 'full' },
    // { path: 'home', component: HomeComponent,canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centerdiv {\r\n    width: 100px;\r\n    height: 100px;\r\n    background-color: red;\r\n\r\n    position: absolute;\r\n    top:0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n\r\n    margin: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjs7SUFFckIsa0JBQWtCO0lBQ2xCLEtBQUs7SUFDTCxTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7O0lBRVIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcmRpdiB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG5cclxuICAgIG1hcmdpbjogYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

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
        this.title = 'optra-web';
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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _leftmenubarstoreadmin_leftmenubarstoreadmin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leftmenubarstoreadmin/leftmenubarstoreadmin.component */ "./src/app/leftmenubarstoreadmin/leftmenubarstoreadmin.component.ts");
/* harmony import */ var _leftmenubar_leftmenubar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./leftmenubar/leftmenubar.component */ "./src/app/leftmenubar/leftmenubar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives */ "./src/app/directives/index.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
/* harmony import */ var _prestudentregistration_prestudentregistration_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./prestudentregistration/prestudentregistration.component */ "./src/app/prestudentregistration/prestudentregistration.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/print.service */ "./src/app/services/print.service.ts");
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./invoice/invoice.component */ "./src/app/invoice/invoice.component.ts");
/* harmony import */ var _print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./print-layout/print-layout.component */ "./src/app/print-layout/print-layout.component.ts");
/* harmony import */ var _student_admission_student_admission_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./student-admission/student-admission.component */ "./src/app/student-admission/student-admission.component.ts");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _directives__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _leftmenubarstoreadmin_leftmenubarstoreadmin_component__WEBPACK_IMPORTED_MODULE_6__["LeftmenubarstoreadminComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
                _leftmenubar_leftmenubar_component__WEBPACK_IMPORTED_MODULE_7__["LeftmenubarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _prestudentregistration_prestudentregistration_component__WEBPACK_IMPORTED_MODULE_15__["PrestudentregistrationComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_21__["InvoiceComponent"],
                _print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_22__["PrintLayoutComponent"],
                _student_admission_student_admission_component__WEBPACK_IMPORTED_MODULE_23__["StudentAdmissionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_10__["Ng4LoadingSpinnerModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routing"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_19__["NgxDatatableModule"]
            ],
            providers: [
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
                ,
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_10__["Ng4LoadingSpinnerService"],
                _services__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"],
                _services_student_service__WEBPACK_IMPORTED_MODULE_18__["StudentService"],
                _services_print_service__WEBPACK_IMPORTED_MODULE_20__["PrintService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/alert.component.html":
/*!*************************************************!*\
  !*** ./src/app/directives/alert.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>\r\n"

/***/ }),

/***/ "./src/app/directives/alert.component.ts":
/*!***********************************************!*\
  !*** ./src/app/directives/alert.component.ts ***!
  \***********************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
    }
    AlertComponent.prototype.ngOnInit = function () {
        // this.alertService.getMessage().subscribe(message => { this.message = message; });
    };
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/directives/alert.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/directives/index.ts":
/*!*************************************!*\
  !*** ./src/app/directives/index.ts ***!
  \*************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/directives/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"copy\">\n  <p translate=\"Common.lblFooter\"> © 2018 BMS College. All Rights Reserved</p>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    //constructor( translate: TranslateService) { }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        console.log(localStorage.getItem('currentUser') + "----");
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            console.log(localStorage.getItem('currentUser'));
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" border-bottom\">\n\n  <!-- Brand and toggle get grouped for better mobile display -->\n\n  <!-- Collect the nav links, forms, and other content for toggling -->\n  <div class=\"navbar-header\">\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </button>\n    <h1>\n      <a style=\"background:url(./assets/images/bms-clg-for-wmns-logo-757.jpg)\" class=\"navbar-brand\" [routerLink]=\"['']\">\n        <img src=\"./assets/images/bms-clg-for-wmns-logo-757.jpg\" class=\"main-logo img img-responsive\" />\n      </a>\n    </h1>\n  </div>\n  <div class=\"drop-men\">\n    <ul class=\" nav_1\">\n      <button *ngIf=\"isRefresh\" class=\"btn btn-default btn-refresh\" (click)=\"refreshDashboard(userInfo.tokenInfo.authorities)\">\n        <i class=\"fa fa-refresh\"></i>Refresh</button>\n\n      \n\n      <li class=\"dropdown\" *ngIf=\"isLoggedInUser\">\n        <a href=\"#\" class=\"dropdown-toggle dropdown-at\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n\n          \n          <span class=\" name-caret\" >Admin\n            <i class=\"caret\"></i>\n          </span>\n        </a>\n        <ul class=\"dropdown-menu \" role=\"menu\">\n          <li>\n            <a class=\"data-action-link\" (click)=\"onSignOut()\">\n              <span>\n                <i class=\"fa fa-sign-out\"></i>\n              </span>\n              <span [innerHTML]=\"'log out'\"></span>\n            </a>\n          </li>\n        </ul>\n      </li>\n\n    </ul>\n  </div>\n  <!-- /.navbar-collapse -->\n  <div class=\"clearfix\">\n\n  </div>\n\n</div>\n<!--<ng4-loading-spinner [template]=\"template\"></ng4-loading-spinner> -->"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

//import { StoreService } from './../service/store.service';
//import { SuperadmindashboardComponent } from './../superadmin/superadmindashboard/superadmindashboard.component';

//import { language } from '../storeadmin/storeregistration/storeregistration.model';
//import { SinInInfo } from '../signIn'
//import { PARAMETERS } from '@angular/core/src/util/decorators';

//import { BaseComponent } from '../../helper/base.component';
//import { StoreAdminDashboard } from '../storeadmin/storeadmindashboard/storeadmindashboard.model'
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, route) {
        this.router = router;
        this.template = "<img src=\"./assets/images/Image-throbber_v02.gif\">";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
    };
    HeaderComponent.prototype.onLanguageChange = function (language) {
        localStorage.setItem('langCode', language.languageCode);
        localStorage.setItem('language', language.language);
        localStorage.setItem('languageId', language.id);
    };
    HeaderComponent.prototype.onSignOut = function () {
        console.log("signout");
        localStorage.setItem('signInInfo', "");
        localStorage.setItem('isSuccessfulLogIn', "false");
        localStorage.setItem('logInUserRole', "");
        localStorage.setItem('currentUser', "");
        this.router.navigate(['']);
    };
    HeaderComponent.prototype.refreshDashboard = function (userRole) {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], HeaderComponent.prototype, "isLoggedInUser", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header  [isLoggedInUser]=\"isLoggedInUser\" ></app-header>\n\n<app-leftmenubarstoreadmin></app-leftmenubarstoreadmin>\n\n<div id=\"page-wrapper\" class=\"gray-bg dashbard-1\" style=\"min-height: 923px;\">\n  <div class=\"content-main\">\n\n    <!--banner-->\n    <div class=\"banner\">\n\n      <h2>\n        <a routerLinkActive=\"active\" translate=\"Common.lblHome\">Home</a>\n        <i class=\"fa fa-angle-right\"></i>\n        <span >Registered Students</span>\n      </h2>\n    </div>\n    <!--//banner-->\n    <!--content-->\n    <div class=\"content-top\">\n      <div class=\"col-md-12 col-xs-12 col-sm-12 col-lg-12 table-wrapper\">\n        <div class=\"col-md-12 col-xs-12 col-sm-12 col-lg-12 table-actions-wrapper no-lr-pad\">\n            <ngx-datatable #table class=\"material striped  fullscreen table table-bordered supermarket-list-table\" [columnMode]=\"'force'\"\n            [rows]=\"studentList\" [headerHeight]=\"50\"  (page)='setPage($event)' [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=10 \n            [loadingIndicator]=\"loadingIndicator\" style=\"width:100%;\">\n  \n            <ngx-datatable-column name=\"Academic Year\" class=\"resizeable\" [sortable]=\"true\" [cellClass]=\"'mobile-cell'\"  >\n              <ng-template let-column=\"column\"  ngx-datatable-header-template let-sort=\"sortFn\">\n                <span (click)=\"sort()\" >Student Name</span>\n              </ng-template>\n              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                <span class=\"mobile\" ></span>\n                <span class=\"name\"> {{row.academicYear }}</span>\n              </ng-template>\n            </ngx-datatable-column>\n\n            <ngx-datatable-column name=\"Academic Year\" class=\"resizeable\" [sortable]=\"true\" [cellClass]=\"'mobile-cell'\"  >\n                <ng-template let-column=\"column\"  ngx-datatable-header-template let-sort=\"sortFn\">\n                  <span (click)=\"sort()\" >First Name</span>\n                </ng-template>\n                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                  <span class=\"mobile\" ></span>\n                  <span class=\"name\"> {{row.firstName }}</span>\n                </ng-template>\n              </ngx-datatable-column>\n  \n              <ngx-datatable-column name=\"Academic Year\" class=\"resizeable\" [sortable]=\"true\" [cellClass]=\"'mobile-cell'\"  >\n                  <ng-template let-column=\"column\"  ngx-datatable-header-template let-sort=\"sortFn\">\n                    <span (click)=\"sort()\" >Middle Name</span>\n                  </ng-template>\n                  <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                    <span class=\"mobile\" ></span>\n                    <span class=\"name\"> {{row.middleName }}</span>\n                  </ng-template>\n                </ngx-datatable-column>\n\n\n                <ngx-datatable-column name=\"Academic Year\" class=\"resizeable\" [sortable]=\"true\" [cellClass]=\"'mobile-cell'\"  >\n                    <ng-template let-column=\"column\"  ngx-datatable-header-template let-sort=\"sortFn\">\n                      <span (click)=\"sort()\" >Last Name</span>\n                    </ng-template>\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                      <span class=\"mobile\" ></span>\n                      <span class=\"name\"> {{row.lastName }}</span>\n                    </ng-template>\n                  </ngx-datatable-column>\n\n\n                  <ngx-datatable-column name=\"Academic Year\" class=\"resizeable\" [sortable]=\"true\" [cellClass]=\"'mobile-cell'\"  >\n                      <ng-template let-column=\"column\"  ngx-datatable-header-template let-sort=\"sortFn\">\n                        <span (click)=\"sort()\" >Date Of Birth</span>\n                      </ng-template>\n                      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <span class=\"mobile\" ></span>\n                        <span class=\"name\"> {{row.dob }}</span>\n                      </ng-template>\n                    </ngx-datatable-column>\n\n\n                    <ngx-datatable-column name=\"Academic Year\" class=\"resizeable\" [sortable]=\"true\" [cellClass]=\"'mobile-cell'\"  >\n                        <ng-template let-column=\"column\"  ngx-datatable-header-template let-sort=\"sortFn\">\n                          <span (click)=\"sort()\" >Application No</span>\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                          <span class=\"mobile\" ></span>\n                          <span class=\"name\"> {{row.applicationNo }}</span>\n                        </ng-template>\n                      </ngx-datatable-column>\n\n\n                      <ngx-datatable-column name=\"Academic Year\" class=\"resizeable\" [sortable]=\"true\" [cellClass]=\"'mobile-cell'\"  >\n                          <ng-template let-column=\"column\"  ngx-datatable-header-template let-sort=\"sortFn\">\n                            <span (click)=\"sort()\" >Father Name</span>\n                          </ng-template>\n                          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            <span class=\"mobile\" ></span>\n                            <span class=\"name\"> {{row.fatherOrParentName }}</span>\n                          </ng-template>\n                        </ngx-datatable-column>\n\n                        <ngx-datatable-column name=\"Academic Year\" class=\"resizeable\" [sortable]=\"true\" [cellClass]=\"'mobile-cell'\"  >\n                            <ng-template let-column=\"column\"  ngx-datatable-header-template let-sort=\"sortFn\">\n                              <span (click)=\"sort()\" >Mobile Number</span>\n                            </ng-template>\n                            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                              <span class=\"mobile\" ></span>\n                              <span class=\"name\"> {{row.mobile }}</span>\n                            </ng-template>\n                          </ngx-datatable-column>\n\n                          <ngx-datatable-column name=\"Academic Year\" class=\"resizeable\" [sortable]=\"true\" [cellClass]=\"'mobile-cell'\"  >\n                              <ng-template let-column=\"column\"  ngx-datatable-header-template let-sort=\"sortFn\">\n                                <span (click)=\"sort()\" >Email</span>\n                              </ng-template>\n                              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                                <span class=\"mobile\" ></span>\n                                <span class=\"name\"> {{row.email }}</span>\n                              </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column name=\"Academic Year\" class=\"resizeable\" [sortable]=\"true\" [cellClass]=\"'mobile-cell'\"  >\n                                <ng-template let-column=\"column\"  ngx-datatable-header-template let-sort=\"sortFn\">\n                                  <span (click)=\"sort()\" >Previous School/College Name</span>\n                                </ng-template>\n                                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                                  <span class=\"mobile\" ></span>\n                                  <span class=\"name\"> {{row.previousSchoolorCollege }}</span>\n                                </ng-template>\n                              </ngx-datatable-column>\n\n\n                              <ngx-datatable-column name=\"Academic Year\" class=\"resizeable\" [sortable]=\"true\" [cellClass]=\"'mobile-cell'\"  >\n                                  <ng-template let-column=\"column\"  ngx-datatable-header-template let-sort=\"sortFn\">\n                                    <span (click)=\"sort()\" >Application Fee</span>\n                                  </ng-template>\n                                  <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                                    <span class=\"mobile\" ></span>\n                                    <span class=\"name\"> {{row.applicationFee }}</span>\n                                  </ng-template>\n                                </ngx-datatable-column>\n\n\n                                <ngx-datatable-column name=\"Academic Year\" class=\"resizeable\" [sortable]=\"true\" [cellClass]=\"'mobile-cell'\"  >\n                                    <ng-template let-column=\"column\"  ngx-datatable-header-template let-sort=\"sortFn\">\n                                      <span (click)=\"sort()\" >Register Date</span>\n                                    </ng-template>\n                                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                                      <span class=\"mobile\" ></span>\n                                      <span class=\"name\"> {{row.registerDate }}</span>\n                                    </ng-template>\n                                  </ngx-datatable-column>\n    \n  \n           \n          </ngx-datatable>\n        </div>\n      </div>\n    </div>\n    <div class=\"clearfix\"> </div>\n  </div>\n<!--  <ng4-loading-spinner [template]=\"template\"></ng4-loading-spinner>-->\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(ng4LoadingSpinnerService, studentService, route, router) {
        this.ng4LoadingSpinnerService = ng4LoadingSpinnerService;
        this.studentService = studentService;
        this.route = route;
        this.router = router;
        this.isLoggedInUser = true;
        this.studentList = null;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getStudents();
    };
    HomeComponent.prototype.getStudents = function () {
        var _this = this;
        this.studentService.getStudents().subscribe(function (result) {
            console.log(result);
            if (result.status) {
                _this.ng4LoadingSpinnerService.hide();
                _this.studentList = result.data;
            }
            else {
                _this.ng4LoadingSpinnerService.hide();
            }
        }, function (error) {
            _this.ng4LoadingSpinnerService.hide();
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["Ng4LoadingSpinnerService"],
            _services_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/invoice/invoice.component.css":
/*!***********************************************!*\
  !*** ./src/app/invoice/invoice.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice {\r\n    page-break-after: always;\r\n  }\r\n  \r\n  .invoice:last-child {\r\n    page-break-after: avoid;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZS9pbnZvaWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekIiLCJmaWxlIjoic3JjL2FwcC9pbnZvaWNlL2ludm9pY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZvaWNlIHtcclxuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGFsd2F5cztcclxuICB9XHJcbiAgXHJcbiAgLmludm9pY2U6bGFzdC1jaGlsZCB7XHJcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdm9pZDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/invoice/invoice.component.html":
/*!************************************************!*\
  !*** ./src/app/invoice/invoice.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"invoice\" *ngFor=\"let invoice of invoiceIds; let i = index\">\n  <h1>Invoice Num. {{ invoice }}</h1>\n  Amount: {{ (invoiceDetails[i] | async)?.amount }}\n</div>\n"

/***/ }),

/***/ "./src/app/invoice/invoice.component.ts":
/*!**********************************************!*\
  !*** ./src/app/invoice/invoice.component.ts ***!
  \**********************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/print.service */ "./src/app/services/print.service.ts");




var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent(route, printService) {
        this.printService = printService;
        this.invoiceIds = route.snapshot.params['invoiceIds']
            .split(',');
    }
    InvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.invoiceDetails = this.invoiceIds
            .map(function (id) { return _this.getInvoiceDetails(id); });
        Promise.all(this.invoiceDetails)
            .then(function () { return _this.printService.onDataReady(); });
    };
    InvoiceComponent.prototype.getInvoiceDetails = function (invoiceId) {
        var amount = Math.floor((Math.random() * 100));
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve({ amount: amount }); }, 1000);
        });
    };
    InvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice',
            template: __webpack_require__(/*! ./invoice.component.html */ "./src/app/invoice/invoice.component.html"),
            styles: [__webpack_require__(/*! ./invoice.component.css */ "./src/app/invoice/invoice.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_print_service__WEBPACK_IMPORTED_MODULE_3__["PrintService"]])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/leftmenubar/leftmenubar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/leftmenubar/leftmenubar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlZnRtZW51YmFyL2xlZnRtZW51YmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/leftmenubar/leftmenubar.component.html":
/*!********************************************************!*\
  !*** ./src/app/leftmenubar/leftmenubar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-default sidebar\" role=\"navigation\">\n  <div class=\"sidebar-nav navbar-collapse\">\n    <ul class=\"nav in\" id=\"side-menu\">\n      <li>\n        <a [routerLink]=\"['/superadmin/dashboard']\" class=\" hvr-bounce-to-right\">\n          <i class=\"fa fa-dashboard nav_icon \"></i>\n          <span class=\"nav-label\">users</span>\n        </a>\n      </li>\n\n      <li>\n        <a [routerLink]=\"['/superadmin/supermarket']\" class=\" hvr-bounce-to-right\">\n          <i class=\"fa fa-shopping-basket nav_icon\"></i>\n          <span class=\"nav-label\">products</span>\n        </a>\n\n      </li>\n      <li>\n        <a [routerLink]=\"['/superadmin/category']\" class=\" hvr-bounce-to-right\">\n          <i class=\"fa fa-list nav_icon\"></i>\n          <span class=\"nav-label\">notification</span>\n        </a>\n      </li>\n\n      <li>\n        <a [routerLink]=\"['/superadmin/appsetting']\" class=\"hvr-bounce-to-right active\">\n          <i class=\"fa fa-street-view nav_icon\"></i>\n          <span class=\"nav-label\"> test </span>\n        </a>\n      </li>\n      <li id=\"report\" >\n        <a  class=\" hvr-bounce-to-right data-action-link\" (click)=\"toggleReport()\">\n          <i class=\"fa fa-area-chart nav_icon\"></i>\n          <span class=\"nav-label\">test2</span>\n          <span class=\"fa arrow\"></span>\n        </a>\n        <ul class=\"nav nav-second-level\" id=\"salesreport\">\n          <li>\n            <a [routerLink]=\"['/superadmin/salesreport']\" class=\"hvr-bounce-to-right\">\n              <i class=\"fa fa-area-chart nav_icon\"></i>tet33</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/superadmin/settlementreport']\"  class=\"hvr-bounce-to-right\">\n              <i class=\"fa fa-area-chart nav_icon\"></i>sdjfsdj</a>\n          </li>\n        </ul>\n      </li>\n\n      <li>\n        <a [routerLink]=\"['/superadmin/managestore']\" class=\" hvr-bounce-to-right\">\n          <i class=\"fa fa-shopping-cart nav_icon\"></i>\n          <span class=\"nav-label\">safkasfjk</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/leftmenubar/leftmenubar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/leftmenubar/leftmenubar.component.ts ***!
  \******************************************************/
/*! exports provided: LeftmenubarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftmenubarComponent", function() { return LeftmenubarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LeftmenubarComponent = /** @class */ (function () {
    function LeftmenubarComponent() {
        this.show = false;
    }
    LeftmenubarComponent.prototype.ngOnInit = function () {
        /** $('#salesreport').css('display', 'none');
         $('.nav-second-level').bind('click', function (event) {
           $('#salesreport').css('display', 'block');
           $('#report').addClass('active');
         }) */
    };
    LeftmenubarComponent.prototype.toggleReport = function () {
        /** $('#report').toggleClass('active');
         if ($('#report').hasClass('active')) {
           $('#salesreport').css('display', 'block');
         }
         else {
           $('#salesreport').css('display', 'none');
         } */
    };
    LeftmenubarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leftmenubar',
            template: __webpack_require__(/*! ./leftmenubar.component.html */ "./src/app/leftmenubar/leftmenubar.component.html"),
            styles: [__webpack_require__(/*! ./leftmenubar.component.css */ "./src/app/leftmenubar/leftmenubar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LeftmenubarComponent);
    return LeftmenubarComponent;
}());



/***/ }),

/***/ "./src/app/leftmenubarstoreadmin/leftmenubarstoreadmin.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/leftmenubarstoreadmin/leftmenubarstoreadmin.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlZnRtZW51YmFyc3RvcmVhZG1pbi9sZWZ0bWVudWJhcnN0b3JlYWRtaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/leftmenubarstoreadmin/leftmenubarstoreadmin.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/leftmenubarstoreadmin/leftmenubarstoreadmin.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-default sidebar\" role=\"navigation\">\n  <div class=\"sidebar-nav navbar-collapse\">\n    <ul class=\"nav\" id=\"side-menu\">\n\n\n      <li>\n        \n        <a routerLink=\"/home\" routerLinkActive=\"active\" class=\" hvr-bounce-to-right\" >\n      <i class=\"fa fa-users nav_icon \"></i>\n      <span class=\"nav-label\">Registered Students</span>\n    </a>\n  </li>\n\n  <li>\n    <a routerLink=\"/servicerequest\" routerLinkActive=\"active\" class=\" hvr-bounce-to-right\" >\n    <i class=\"fa fa-shopping-basket nav_icon\"></i>\n    <span class=\"nav-label\">Fee Setup</span>\n  </a>\n\n</li>\n<li>\n    <a routerLink=\"/enquirerequest\" routerLinkActive=\"active\" class=\" hvr-bounce-to-right\" >\n    <i class=\"fa fa-list nav_icon\"></i>\n    <span class=\"nav-label\">Class Details</span>\n  </a>\n</li>\n\n<li>\n  <a routerLink=\"/notification\" routerLinkActive=\"active\" class=\" hvr-bounce-to-right\" >\n  <i class=\"fa fa-comment nav_icon\"></i>\n  <span class=\"nav-label\">StudentInfo</span>\n</a>\n</li>\n\n<li>\n  <a routerLink=\"/dealershipenquiry\" routerLinkActive=\"active\" class=\" hvr-bounce-to-right\" >\n  <i class=\"fa fa-trademark nav_icon\"></i>\n  <span class=\"nav-label\">Time Table</span>\n</a>\n</li>\n\n<li>\n  <a routerLink=\"/approvetechnician\" routerLinkActive=\"active\" class=\" hvr-bounce-to-right\" >\n  <i class=\"fa fa-trademark nav_icon\"></i>\n  <span class=\"nav-label\">Attendance Entry</span>\n</a>\n</li>\n      <li>\n        \n        <a routerLink=\"/upcomingproduct\" routerLinkActive=\"active\" class=\" hvr-bounce-to-right\" >\n      <i class=\"fa fa-product-hunt nav_icon \"></i>\n      <span class=\"nav-label\">Mark Entry</span>\n    </a>\n  </li>\n\n  <li>\n        \n    <a routerLink=\"/userRegisterProd\" routerLinkActive=\"active\" class=\" hvr-bounce-to-right\" >\n  <i class=\"fa fa-product-hunt nav_icon \"></i>\n  <span class=\"nav-label\">Reports</span>\n</a>\n</li>\n\n  <li>\n    <a routerLink=\"/catalogue\" routerLinkActive=\"active\" class=\" hvr-bounce-to-right\" >\n  <i class=\"fa fa-unlink nav_icon \"></i>\n  <span class=\"nav-label\">Send SMS/Email</span>\n</a>\n</li>\n<li>\n    <a routerLink=\"/statecity\" routerLinkActive=\"active\" class=\" hvr-bounce-to-right\" >\n  <i class=\"fa fa-unlink nav_icon \"></i>\n  <span class=\"nav-label\">Integrated program</span>\n</a>\n</li>\n\n\n   \n\n<!--\n      <li id=\"report\" >\n        <a class=\"hvr-bounce-to-right data-action-link\" (click)=\"toggleReport()\">\n          <i class=\"fa fa-area-chart nav_icon\"></i>\n          <span class=\"nav-label\">Common.lblReport</span>\n          <span class=\"fa arrow\"></span>\n        </a>\n        <ul class=\"nav nav-second-level\" id=\"storeadminreport\" >\n          <li>\n            <a [routerLink]=\"['/storesalesreport']\" class=\"hvr-bounce-to-right\">\n              <i class=\"fa fa-area-chart nav_icon\"></i>StoreSales.lblSalesReport</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/soldunsoldreport']\" class=\" hvr-bounce-to-right\">\n              <i class=\"fa fa-area-chart nav_icon\"></i>SoldUnsoldReport.lblSoldUnsoldreport</a>\n          </li>\n        </ul>\n      </li>  \n      -->\n    </ul>\n  </div>\n</div>\n\n      "

/***/ }),

/***/ "./src/app/leftmenubarstoreadmin/leftmenubarstoreadmin.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/leftmenubarstoreadmin/leftmenubarstoreadmin.component.ts ***!
  \**************************************************************************/
/*! exports provided: LeftmenubarstoreadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftmenubarstoreadminComponent", function() { return LeftmenubarstoreadminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LeftmenubarstoreadminComponent = /** @class */ (function () {
    function LeftmenubarstoreadminComponent() {
    }
    LeftmenubarstoreadminComponent.prototype.ngOnInit = function () {
        /** $('#storeadminreport').css('display', 'none');
         $('.nav-second-level').bind('click', function (event) {
           $('#storeadminreport').css('display', 'block');
           $('#report').addClass('active');
         })
          */
    };
    LeftmenubarstoreadminComponent.prototype.toggleReport = function () {
        /**
         * $('#report').toggleClass('active');
        if ($('#report').hasClass('active')) {
          $('#storeadminreport').css('display', 'block');
        }
        else {
          $('#storeadminreport').css('display', 'none');
        }
        */
    };
    LeftmenubarstoreadminComponent.prototype.showMainMenu = function () {
        // alert('called')
        $('#storeadminreport').css('display', 'block');
    };
    LeftmenubarstoreadminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leftmenubarstoreadmin',
            template: __webpack_require__(/*! ./leftmenubarstoreadmin.component.html */ "./src/app/leftmenubarstoreadmin/leftmenubarstoreadmin.component.html"),
            styles: [__webpack_require__(/*! ./leftmenubarstoreadmin.component.css */ "./src/app/leftmenubarstoreadmin/leftmenubarstoreadmin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LeftmenubarstoreadminComponent);
    return LeftmenubarstoreadminComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\" style=\"width: 100%;\">\r\n    <div class=\"col-md-12 col-xs-12 col-sm-12 col-lg-12\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 flt-r\">\r\n          <a class=\"news-letter\" [routerLink]=\"['/studentRegstration']\">\r\n            <label> Student registration</label> \r\n          </a>\r\n        </div>\r\n    <img src=\"/assets/images/bms-clg-for-wmns-logo-757.jpg\" alt=\"BMS\" />\r\n    \r\n    <div class=\"login-bottom\">\r\n       \r\n      <h2></h2>\r\n      <form class=\"content\" name=\"form\" (ngSubmit)=\"f.form.valid && onFormSubmit(f)\" #f=\"ngForm\">\r\n        <div class=\"col-md-12 col-xs-12 col-lg-12 col-sm-12\">\r\n  \r\n          <div class=\"inputbox-margin\">\r\n            <div class=\"login-mail\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n              <input type=\"text\" placeholder=\"email *\" name=\"username\" [(ngModel)]=\"model.email\" #username=\"ngModel\"\r\n                pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required maxlength=\"100\" />\r\n               \r\n              <i class=\"fa fa-envelope\"></i>\r\n            </div>\r\n            <div class=\"error-require\" *ngIf=\"username.errors && (f.submitted)\">\r\n              <p *ngIf=\" (f.submitted) && username.errors.required \" [innerHTML]=\"'Email required'\">\r\n              </p>\r\n              <p *ngIf=\" (f.submitted) && username.errors.pattern \" [innerHTML]=\"'InvalidEmail'\">\r\n              </p>\r\n  \r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"inputbox-margin\">\r\n            <div class=\"login-mail\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n              <input type=\"password\" placeholder=\"password *\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\r\n                required maxlength=\"15\" />\r\n              <i class=\"fa fa-lock\"></i>\r\n            </div>\r\n            <div class=\"error-require\" *ngIf=\"password.errors && (f.submitted)\">\r\n              <p *ngIf=\" (f.submitted) && password.errors.required\" [innerHTML]=\"'Password Required'\">\r\n              </p>\r\n            </div>\r\n            <div class=\"error-require\" *ngIf=\"errorMesage\">\r\n                \r\n                <p [innerHTML]=\"errorMesage\">\r\n                </p>\r\n    \r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12 col-xs-12 col-sm-12 col-lg-12\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 flt-r\">\r\n            <a class=\"news-letter\" [routerLink]=\"['/forgotpassword']\">\r\n             <!-- <label>Forget Password?</label> -->\r\n            </a>\r\n          </div>\r\n      <ng4-loading-spinner [template]=\"template\"></ng4-loading-spinner>\r\n          <label class=\"hvr-shutter-in-horizontal login-sub login-do\">\r\n            <input type=\"submit\" value=\"Login\" />\r\n          </label>\r\n        </div>\r\n        <div class=\"clearfix\"> </div>\r\n      </form>\r\n    </div>\r\n   \r\n  </div> <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/index */ "./src/app/services/index.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _login_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.model */ "./src/app/login/login.model.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authenticationService, ng4LoadingSpinnerService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.ng4LoadingSpinnerService = ng4LoadingSpinnerService;
        this.model = new _login_model__WEBPACK_IMPORTED_MODULE_5__["Login"]();
        this.loading = false;
        this.template = "<img src=\"./assets/images/loader-.png\">";
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        this.route.queryParamMap.pipe;
        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.returnUrl = 'home';
    };
    LoginComponent.prototype.onFormSubmit = function (form) {
        localStorage.setItem('SuperAdminRole', "super_admin");
        localStorage.setItem('StoreAdminRole', "store_admin");
        localStorage.setItem('sessionexpired', 'false');
        this.login();
    };
    LoginComponent.prototype.login = function () {
        this.ng4LoadingSpinnerService.show();
        this.loading = true;
        localStorage.setItem('loginEmailId', this.model.email);
        if (this.model.email === "admin@admin.com" && this.model.password === "admin") {
            localStorage.setItem('accestoken', "token");
            localStorage.setItem('role', "ROLE_ADMIN");
            localStorage.setItem('isSuccessfulLogIn', 'true');
            localStorage.setItem('currentUser', "Admin");
            this.router.navigate([this.returnUrl]);
        }
        else {
            this.errorMesage = 'you are not authorize for admin';
        }
    };
    LoginComponent.prototype.displayError = function (errorMessage) {
        var sessionCheck = localStorage.getItem('sessionexpired');
        if (sessionCheck == 'true') {
            errorMessage = 'Please login session expired';
        }
        swal({
            type: 'warning',
            title: 'Error',
            text: errorMessage,
            // position: 'top-end',
            width: 400,
            confirmButtonColor: '#eea236',
            buttonsStyling: false,
            confirmButtonClass: 'confirm btn btn-lg btn-warning'
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_index__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.model.ts":
/*!**************************************!*\
  !*** ./src/app/login/login.model.ts ***!
  \**************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());



/***/ }),

/***/ "./src/app/prestudentregistration/StudentRegistration-model.ts":
/*!*********************************************************************!*\
  !*** ./src/app/prestudentregistration/StudentRegistration-model.ts ***!
  \*********************************************************************/
/*! exports provided: StudentRegistration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRegistration", function() { return StudentRegistration; });
var StudentRegistration = /** @class */ (function () {
    function StudentRegistration() {
    }
    return StudentRegistration;
}());



/***/ }),

/***/ "./src/app/prestudentregistration/prestudentregistration.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/prestudentregistration/prestudentregistration.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXN0dWRlbnRyZWdpc3RyYXRpb24vcHJlc3R1ZGVudHJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/prestudentregistration/prestudentregistration.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/prestudentregistration/prestudentregistration.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header  [isLoggedInUser]=\"isLoggedInUser\" ></app-header>\n\n<app-leftmenubarstoreadmin></app-leftmenubarstoreadmin>\n\n<div id=\"page-wrapper\" class=\"gray-bg dashbard-1\" style=\"min-height: 923px;\">\n  <div class=\"content-main\">\n\n    <!--banner-->\n    <div class=\"banner\">\n\n      <h2>\n        <a routerLinkActive=\"active\" translate=\"Common.lblHome\">Home</a>\n        <i class=\"fa fa-angle-right\"></i>\n        <span >Registere</span>\n      </h2>\n    </div>\n    <!--//banner-->\n    <!--content-->\n    <div class=\"content-top\">\n     <!-- <div class=\"col-md-12 col-xs-12 col-sm-12 col-lg-12 table-wrapper\">\n        <div class=\"col-md-12 col-xs-12 col-sm-12 col-lg-12 table-actions-wrapper no-lr-pad\">\n        -->\n                <form name=\"form\" (ngSubmit)=\"studentForm.form.valid && onSubmitForm(studentForm)\" #studentForm=\"ngForm\">\n       \n                        <div class=\"login-bottom\" id=\"print\">\n                                <h2>Register</h2>\n                          <div class=\"col-md-12\">\n                              <div class=\"login-mail\">\n                                  Date : {{todayDate | date:\"MM/dd/yyyy\"}}\n                              </div>\n                              <div class=\"form-group\">\n                                    <label for=\"academicYear\">Academic Year</label>\n                                  <input type=\"text\"\n                                  class=\"form-control\"\n                                   placeholder=\"2019-2020\" \n                                  name=\"academicYear\"\n                                  [(ngModel)]=\"model.academicYear\"\n                                  value=\"2019-2020\"required=\"\">\n                              </div>\n                              \n                              <div class=\"form-group\">\n                                    <label for=\"applicationNo\">Application No.</label>\n                                    <input class=\"form-control\" type=\"text\" placeholder=\"Application No.\"\n                                    name=\"applicationNo\"\n                                    [(ngModel)]=\"model.applicationNo\"\n                                    required=\"\">\n                                </div>\n                              <div class=\"login-mail\">\n                                  <label for=\"studentName\">Student Name</label>\n                                  <input type=\"text\" placeholder=\"Student Name\" \n                                  name=\"studentName\"\n                                  [(ngModel)]=\"model.firstName\"\n                                  required=\"\">\n                              </div>\n                              \n                  \n                  \n                  \n                              <div class=\"login-mail\">\n                                    <label for=\"fathersName\">Father Name</label>\n                                  <input type=\"text\" placeholder=\"Father Name\" \n                                  name=\"fathersName\"\n                                  [(ngModel)]=\"model.fatherOrParentName\"\n                                  required=\"\">\n                              </div>\n                  \n                              \n                  \n                            <div>\n                            <label for=\"className\">class Name</label>\n                              <select class=\"form-control login-mail\"\n                              name=\"className\"\n                              [(ngModel)]=\"model.className\"\n                              >\n                                     \n                                            <option>Addmistion for the class</option>\n                                           <option>I Sem</option>\n                                           <option>II Sem</option>\n                                           <option>III Sem</option>\n                                           <option>IV Sem</option>\n                                           <option>VI Sem</option>\n                                           <option>VII Sem</option>\n                                           <option>VIII Sem</option>\n                                           <option>VIII Sem</option>\n                                           <option>I Year</option>\n                                           <option>II Year</option>\n                                           <option>III Year</option>\n                                           <option>IV Year</option>\n                                           <option>Extra</option>\n                                           <option>I PUC</option>\n                                           <option>II PUC</option>\n                                           \n                                        </select>\n                            </div>\n                  \n                            \n                              <div>\n                                    <label for=\"courseName\">course Name</label>\n                                    <select class=\"form-control login-mail\"  \n                                    name=\"courseName\"\n                                    [(ngModel)]=\"model.courseName\" (change)=\"onCourseChange()\">\n                                                  <option value=\"-1\"> Selecet course</option>\n                                                 <option>BBA</option>\n                                                 <option>BCA</option>\n                                                 <option>B.COM</option>\n                                                 <option>BA</option>\n                                                 <option>BSC</option>\n                                                 <option>MBA</option>\n                                                 <option>MCA</option>\n                                                 <option>MSC</option>\n                                                 <option>MCOM</option>\n                                              </select>\n                                  </div>\n                           \n                              <div class=\"form-group\" *ngIf=\"showCombination\">\n                                    <label for=\"combination\">Combination</label>\n                                    <div *ngFor=\"let item of combination\">\n                                         {{item}}  : <input name=\"combination\" type=\"checkbox\">\n                                    </div>\n                                    \n                                    \n                                  </div>\n                           \n                                  <div>\n                                        <label for=\"catagory\">Catagory</label>\n                                        <select class=\"form-control login-mail\"  \n                                        name=\"catagory\" >\n                                                      <option> Selecet Catagory</option>\n                                                     <option>Sc</option>\n                                                     <option>St</option>\n                                                     <option>B.COM</option>\n                                                    \n                                                  </select>\n                                      </div>\n                             \n                                       \n                              <div class=\"login-mail\">\n                                    <label for=\"mobile\">Mobile Number</label>\n                                    <input type=\"text\" placeholder=\"Mobile Number\" \n                                    name=\"mobile\"\n                                    [(ngModel)]=\"model.mobile\"\n                                    required=\"\">\n                                </div>\n                                      \n                             \n                            \n                              <div class=\"login-mail\">\n                                    <label for=\"mobile\">Application fee</label>\n                              <input type=\"text\" placeholder=\"Application fee\"\n                              name=\"applicationFee\"\n                              [(ngModel)]=\"model.applicationFee\"\n                              required=\"\">\n                              </div>\n                  \n                  \n                                     <!--\n                                      <div>\n                                          <select class=\"form-control login-mail\">\n                                                        <option>Active</option>\n                                                      \n                                                    </select>\n                                        </div>\n                                      \n                              <a class=\"news-letter\" href=\"#\">\n                                 <label class=\"checkbox1\"><input type=\"checkbox\" name=\"checkbox\" ><i> </i>I agree with the terms</label>\n                                 </a>\n                                 -->   \n                      \n                          </div>\n                          <div class=\"col-md-12 login-do\">\n                            <label class=\"hvr-shutter-in-horizontal login-sub\">\n                              <input type=\"submit\" value=\"Register\">\n                            \n                              </label>\n                            \n                          </div>\n                          \n                          <div class=\"clearfix\"> </div>\n                        </div>\n                        <div class=\"col-md-12 login-do\">\n                          <label class=\"hvr-shutter-in-horizontal login-sub\">\n                           \n                          <input type=\"button\" (click)=\"print()\" value=\"print\">\n                            </label>\n                          \n                        </div>\n                        </form>\n                        <router-outlet></router-outlet>\n                        <router-outlet name=\"print\"></router-outlet>\n       <!-- </div>\n      </div> -->\n    </div>\n    <div id=\"receipt\" *ngIf=\"showprintdiv\">\n      <table style=\"width:100%\">\n        <tr>\n          <td rowspan=\"2\"><img src=\"/assets/images/bmswclogo.png\" alt=\"BMS\" /></td>\n          <td colspan=\"3\"> BMS COLLEGE FOR WOMEN </td>\n          \n        </tr>\n        <tr>\n        <td colspan=\"3\"> Basavangudi,Bangalore - 560 004 </td>\n        </tr>\n        <tr>\n          <th>Receipt No</th>\n          <th>BMSCW-UA-189</th>\n          <th rowspan=\"2\">Date:</th>\n           <th rowspan=\"2\">05.04.2019</th>\n        </tr>\n        <tr>\n          <td>Appl. No</td>\n          <td>5965</td>\n        </tr>\n        \n        <tr>\n          <td >STUDENT NAME</td>\n          <td colspan=\"3\"> PALLAVI </td>\n          \n        </tr>\n        \n          <tr>\n          <td >FATHER NAME</td>\n          <td colspan=\"3\"> NAGARAJU </td>\n          \n        </tr>\n         <tr>\n          <td >CLASS</td>\n          <td colspan=\"3\"> 1Bcom </td>\n          \n        </tr>\n        <tr>\n          <td >COMBINATION</td>\n          <td colspan=\"3\"> 1Bcom </td>\n          \n        </tr>\n        \n        <tr>\n          <td >CATEGORY</td>\n          <td colspan=\"3\"> GM </td>\n          \n        </tr>\n        \n        <tr>\n          <td >QUOTA</td>\n          <td colspan=\"3\"> GM </td>\n          \n        </tr>\n        \n        <tr>\n          <td >Sl. No.</td>\n          <td colspan=\"2\"> Particulars </td>\n          <td >Amount in Rs</td>\n          \n        </tr>\n        <tr>\n          <td >01</td>\n          <td colspan=\"2\"> Admission fee </td>\n          <td >44000.00</td>\n          \n        </tr>\n        \n        <tr>\n          <td >02</td>\n          <td colspan=\"2\">  </td>\n          <td ></td>\n          \n        </tr>\n        <tr>\n          \n          <td colspan=\"3\">  TOTAL</td>\n          <td >44000.00</td>\n          \n        </tr>\n        <tr>\n          \n          <td colspan=\"3\">  DIFFERENCE</td>\n          <td >0.00</td>\n          \n        </tr>\n        \n         <tr>\n          <td >Repees in Words:</td>\n          <td colspan=\"3\"> Rupees Fourty Four Thousand Only </td>\n          \n        </tr>\n        \n        <tr>\n          <td >DD: No:</td>\n          <td colspan=\"3\"> 030233 </td>\n          \n        </tr>\n        \n         <tr>\n          <td >DD: Date:</td>\n          <td colspan=\"3\"> 03.05.2019 </td>\n          \n        </tr>\n        \n        <tr>\n          <td >Bank Name:</td>\n          <td colspan=\"3\"> BANk OF INDIA,HANUMANTHANAGAR </td>\n          \n        </tr>\n        \n        <tr height=\"90\">\n          <td colspan=\"4\"  align=\"left\">Remark:</td>\n          \n          \n        </tr>\n        <tr height=\"90\">\n          \n          \n        </tr>\n         <tr>\n          \n          <td colspan=\"2\" align=\"left\" >Clerk</td>\n          <td colspan=\"2\" align=\"right\">Principal</td>\n        </tr>\n         \n      </table>\n    </div>\n    <div class=\"clearfix\"> </div>\n  </div>\n\n  <div id=\"sucessmodel\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              Thank You for Regstration\n            </div>\n      \n          </div>\n    \n        </div>\n      </div>\n    <!--popup content start-->\n <ng4-loading-spinner [template]=\"template\"></ng4-loading-spinner>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/prestudentregistration/prestudentregistration.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/prestudentregistration/prestudentregistration.component.ts ***!
  \****************************************************************************/
/*! exports provided: PrestudentregistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestudentregistrationComponent", function() { return PrestudentregistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _StudentRegistration_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StudentRegistration-model */ "./src/app/prestudentregistration/StudentRegistration-model.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/observable/interval */ "./node_modules/rxjs-compat/_esm5/add/observable/interval.js");
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/print.service */ "./src/app/services/print.service.ts");









var PrestudentregistrationComponent = /** @class */ (function () {
    function PrestudentregistrationComponent(ng4LoadingSpinnerService, printService, studentService, route, router) {
        this.ng4LoadingSpinnerService = ng4LoadingSpinnerService;
        this.printService = printService;
        this.studentService = studentService;
        this.route = route;
        this.router = router;
        this.template = "<img src=\"./assets/images/loader-.png\">";
        this.isLoggedInUser = true;
        this.showCombination = false;
        this.todayDate = new Date();
        this.combination = [];
        this.bscombination = ["PCM", "CBZ", "PME", "PMCs", "CZMb", "CBBt"];
        this.bacombination = ["HES", "HEK", "PES", "JPK", "JPE"];
        this.bvoccombination = ["Infomation Technology", "Retails management"];
        this.model = new _StudentRegistration_model__WEBPACK_IMPORTED_MODULE_2__["StudentRegistration"]();
        this.showprintdiv = false;
    }
    PrestudentregistrationComponent.prototype.ngOnInit = function () {
        this.getFormData();
        this.model.courseName = "-1";
    };
    PrestudentregistrationComponent.prototype.onPrintInvoice = function () {
        var invoiceIds = ['101', '102'];
        this.printService
            .printDocument('invoice', invoiceIds);
    };
    PrestudentregistrationComponent.prototype.print = function () {
        this.showprintdiv = true;
        var prtContent = document.getElementById("receipt");
        var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
        WinPrint.document.write(prtContent.innerHTML);
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.print();
        WinPrint.close();
        this.showprintdiv = false;
    };
    PrestudentregistrationComponent.prototype.onCourseChange = function () {
        if (this.model.courseName === "BSC") {
            this.showCombination = true;
            this.combination = this.bscombination;
        }
        else {
            this.showCombination = false;
        }
    };
    PrestudentregistrationComponent.prototype.openAddModal = function () {
        var _this = this;
        $("#sucessmodel").modal('show');
        rxjs_Observable__WEBPACK_IMPORTED_MODULE_6__["Observable"].interval(5000)
            .subscribe(function (val) {
            _this.router.navigate(["/"]);
        });
    };
    PrestudentregistrationComponent.prototype.onSubmitForm = function (form) {
        var _this = this;
        console.log(this.model);
        this.ng4LoadingSpinnerService.show();
        this.studentService.studentRegistration(this.model).subscribe(function (result) {
            console.log(result);
            if (result.status) {
                _this.ng4LoadingSpinnerService.hide();
                _this.openAddModal();
                /*  Observable.interval(50000)
                .subscribe((val) => {
                  this.router.navigate(["/"]);
                 }).unsubscribe(); */
            }
            else {
                _this.ng4LoadingSpinnerService.hide();
            }
        }, function (error) {
            _this.ng4LoadingSpinnerService.hide();
        });
    };
    PrestudentregistrationComponent.prototype.getFormData = function () {
        var _this = this;
        this.studentService.getFormData().subscribe(function (result) {
            console.log(result);
            if (result.status) {
                _this.ng4LoadingSpinnerService.hide();
                _this.model.applicationNo = result.data.formId;
                _this.model.applicationFee = result.data.fre;
            }
            else {
                _this.ng4LoadingSpinnerService.hide();
            }
        }, function (error) {
            _this.ng4LoadingSpinnerService.hide();
        });
    };
    PrestudentregistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prestudentregistration',
            template: __webpack_require__(/*! ./prestudentregistration.component.html */ "./src/app/prestudentregistration/prestudentregistration.component.html"),
            styles: [__webpack_require__(/*! ./prestudentregistration.component.css */ "./src/app/prestudentregistration/prestudentregistration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__["Ng4LoadingSpinnerService"],
            _services_print_service__WEBPACK_IMPORTED_MODULE_8__["PrintService"],
            _services_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], PrestudentregistrationComponent);
    return PrestudentregistrationComponent;
}());



/***/ }),

/***/ "./src/app/print-layout/print-layout.component.css":
/*!*********************************************************!*\
  !*** ./src/app/print-layout/print-layout.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header, .header-space,\r\n.footer, .footer-space { height: 100px; }\r\n.header { position: fixed; top: 0; }\r\n.footer { position: fixed; bottom: 0; }\r\n@media screen {\r\n  :host {\r\n    display: none;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpbnQtbGF5b3V0L3ByaW50LWxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO3lCQUN5QixhQUFhLEVBQUU7QUFDeEMsVUFBVSxlQUFlLEVBQUUsTUFBTSxFQUFFO0FBQ25DLFVBQVUsZUFBZSxFQUFFLFNBQVMsRUFBRTtBQUV0QztFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcmludC1sYXlvdXQvcHJpbnQtbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLCAuaGVhZGVyLXNwYWNlLFxyXG4uZm9vdGVyLCAuZm9vdGVyLXNwYWNlIHsgaGVpZ2h0OiAxMDBweDsgfVxyXG4uaGVhZGVyIHsgcG9zaXRpb246IGZpeGVkOyB0b3A6IDA7IH1cclxuLmZvb3RlciB7IHBvc2l0aW9uOiBmaXhlZDsgYm90dG9tOiAwOyB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIHtcclxuICA6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/print-layout/print-layout.component.html":
/*!**********************************************************!*\
  !*** ./src/app/print-layout/print-layout.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  print-layout works!\n</p>\n"

/***/ }),

/***/ "./src/app/print-layout/print-layout.component.ts":
/*!********************************************************!*\
  !*** ./src/app/print-layout/print-layout.component.ts ***!
  \********************************************************/
/*! exports provided: PrintLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintLayoutComponent", function() { return PrintLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrintLayoutComponent = /** @class */ (function () {
    function PrintLayoutComponent() {
    }
    PrintLayoutComponent.prototype.ngOnInit = function () {
    };
    PrintLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-print-layout',
            template: __webpack_require__(/*! ./print-layout.component.html */ "./src/app/print-layout/print-layout.component.html"),
            styles: [__webpack_require__(/*! ./print-layout.component.css */ "./src/app/print-layout/print-layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrintLayoutComponent);
    return PrintLayoutComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");





var AuthenticationService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AuthenticationService, _super);
    function AuthenticationService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    AuthenticationService.prototype.login = function (username, password) {
        /*   return this.http.post<any>(this.BASE_URL_API+'api/v1/authneticateuser', { username: username, password: password })
               .map(user => {
                   // login successful if there's a jwt token in the response
                   console.log(user)
                   if (user && user.valid) {
                       // store user details and jwt token in local storage to keep user logged in between page refreshes
                       localStorage.setItem('currentUser', JSON.stringify(user.data));
                   }
   
                   return user;
               }); */
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}(_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "./src/app/services/base.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/base.service.ts ***!
  \******************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_operator_delay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/delay */ "./node_modules/rxjs-compat/_esm5/add/operator/delay.js");
/* harmony import */ var rxjs_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/observable */ "./node_modules/rxjs/observable.js");
/* harmony import */ var rxjs_observable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_observable__WEBPACK_IMPORTED_MODULE_3__);




var BaseService = /** @class */ (function () {
    function BaseService() {
        //BASE_URL_API: string = "http://13.126.229.12:8080/supremesolar/";
        this.BASE_URL_API = "http://localhost:8099/";
    }
    //options: RequestOptions;
    BaseService.prototype.jwt = function () {
        var accestoken = localStorage.getItem('accestoken');
        // console.log("--------");
        // console.log(accestoken)
        if (accestoken && accestoken != '') {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Authorization': accestoken,
                'content-type': 'application/json'
            });
            return headers;
        }
    };
    BaseService.prototype.jwtWithMultipart = function () {
        var accestoken = localStorage.getItem('accestoken');
        // console.log("--------");
        // console.log(accestoken)
        if (accestoken && accestoken != '') {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Authorization': accestoken
            });
            return headers;
        }
    };
    BaseService.prototype.jwtHttp = function () {
        var accestoken = localStorage.getItem('accestoken');
        if (accestoken && accestoken != '') {
            var headersForm = new Headers();
            headersForm.append('Content-Type', 'application/json');
            headersForm.append('Authorization', 'Bearer ' + accestoken);
            headersForm.append('Accept-Language', localStorage.getItem('langCode'));
            return headersForm;
        }
    };
    BaseService.prototype.jwtClient = function () {
        var accestoken = localStorage.getItem('accestoken');
        if (accestoken && accestoken != '') {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Authorization': 'Bearer ' + accestoken,
                'content-type': 'application/json',
                'Accept-Language': localStorage.getItem('langCode')
            });
        }
    };
    BaseService.prototype.jwtBasicHeader = function () {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept-Language': localStorage.getItem('langCode') == null ? '' : localStorage.getItem('langCode')
        });
        return this.headers;
    };
    BaseService.prototype.jwBasicAuth = function () {
        var headersForm = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headersForm.append('Content-Type', 'application/x-www-form-urlencoded');
        headersForm.append('Authorization', 'Basic d2ViYXBwOndlYmFwcA==');
        return headersForm;
    };
    BaseService.prototype.jwBasicAuthHttp = function () {
        var headersForm = new Headers();
        headersForm.append('Content-Type', 'application/x-www-form-urlencoded');
        headersForm.append('Authorization', 'Basic d2ViYXBwOndlYmFwcA==');
        //let options = new RequestOptions({ headers: headersForm });
        return headersForm;
    };
    BaseService.prototype.jwtBasicHeaderClient = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept-Language': localStorage.getItem('langCode')
        });
    };
    BaseService.prototype.jwtFromDataPost = function () {
        var accestoken = localStorage.getItem('accestoken');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Authorization': 'Bearer ' + accestoken,
            'Accept-Language': localStorage.getItem('langCode')
        });
        return headers;
    };
    BaseService.prototype.getAccessToken = function () {
        var accestoken = localStorage.getItem('accestoken');
        return accestoken.toString();
    };
    BaseService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    BaseService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return rxjs_observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMsg);
    };
    BaseService.prototype.handleErrorPromise = function (error) {
        return Promise.reject(error.message || error);
    };
    return BaseService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]; });




/***/ }),

/***/ "./src/app/services/print.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/print.service.ts ***!
  \*******************************************/
/*! exports provided: PrintService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintService", function() { return PrintService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PrintService = /** @class */ (function () {
    function PrintService(router) {
        this.router = router;
        this.isPrinting = false;
    }
    PrintService.prototype.printDocument = function (documentName, documentData) {
        this.isPrinting = true;
        this.router.navigate(['/',
            { outlets: {
                    'print': ['print', documentName, documentData.join()]
                } }]);
    };
    PrintService.prototype.onDataReady = function () {
        var _this = this;
        setTimeout(function () {
            window.print();
            _this.isPrinting = false;
            _this.router.navigate([{ outlets: { print: null } }]);
        });
    };
    PrintService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PrintService);
    return PrintService;
}());



/***/ }),

/***/ "./src/app/services/student.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/student.service.ts ***!
  \*********************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");




var StudentService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentService, _super);
    function StudentService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    StudentService.prototype.studentRegistration = function (formData) {
        //this is the important step. You need to set content type as null
        return this.http.post(this.BASE_URL_API + 'api/v1/studentRegistration', formData)
            .map(function (serviceRequest) {
            // console.log(serviceRequest );
            return serviceRequest;
        });
    };
    StudentService.prototype.getStudents = function () {
        return this.http.get(this.BASE_URL_API + 'api/v1/students')
            .map(function (serviceRequest) {
            // console.log(serviceRequest );
            if (serviceRequest) {
            }
            return serviceRequest;
        });
    };
    StudentService.prototype.getFormData = function () {
        return this.http.get(this.BASE_URL_API + 'api/v1/formData')
            .map(function (serviceRequest) {
            // console.log(serviceRequest );
            if (serviceRequest) {
            }
            return serviceRequest;
        });
    };
    StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StudentService);
    return StudentService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/student-admission/student-admission.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/student-admission/student-admission.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtYWRtaXNzaW9uL3N0dWRlbnQtYWRtaXNzaW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/student-admission/student-admission.component.html":
/*!********************************************************************!*\
  !*** ./src/app/student-admission/student-admission.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  student-admission works!\n</p>\n"

/***/ }),

/***/ "./src/app/student-admission/student-admission.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/student-admission/student-admission.component.ts ***!
  \******************************************************************/
/*! exports provided: StudentAdmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAdmissionComponent", function() { return StudentAdmissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudentAdmissionComponent = /** @class */ (function () {
    function StudentAdmissionComponent() {
    }
    StudentAdmissionComponent.prototype.ngOnInit = function () {
    };
    StudentAdmissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-admission',
            template: __webpack_require__(/*! ./student-admission.component.html */ "./src/app/student-admission/student-admission.component.html"),
            styles: [__webpack_require__(/*! ./student-admission.component.css */ "./src/app/student-admission/student-admission.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudentAdmissionComponent);
    return StudentAdmissionComponent;
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

module.exports = __webpack_require__(/*! G:\project\angular project\optra-web\optra-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
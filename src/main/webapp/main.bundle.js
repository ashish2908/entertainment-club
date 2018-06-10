webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_api_base_service__ = __webpack_require__("./src/app/services/api-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_webcam__ = __webpack_require__("./node_modules/ngx-webcam/ngx-webcam.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_dialog__ = __webpack_require__("./node_modules/primeng/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_button__ = __webpack_require__("./node_modules/primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_dropdown__ = __webpack_require__("./node_modules/primeng/dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_camera_camera_component__ = __webpack_require__("./src/app/components/camera/camera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_header_header_component__ = __webpack_require__("./src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_alert_alert_component__ = __webpack_require__("./src/app/components/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_primeng_fileupload__ = __webpack_require__("./node_modules/primeng/fileupload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_primeng_fileupload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_primeng_fileupload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_18__components_home_home_component__["a" /* HomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_camera_camera_component__["a" /* CameraComponent */],
                __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_alert_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_4_ngx_webcam__["a" /* WebcamModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_8_primeng_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_19__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_20_primeng_fileupload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_12_primeng_table__["TableModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_0__services_api_base_service__["a" /* ApiBaseService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/alert/alert.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert\" [ngClass]=\"messageType === 'success' ? 'alert-success' : 'alert-danger'\" style=\"font-family: 'times new roman'\">\n    {{ message }} {{ messageType}}\n</div>"

/***/ }),

/***/ "./src/app/components/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
    }
    AlertComponent.prototype.ngOnInit = function () {
        console.log(this.messageType);
        console.log(this.message);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('messageType'),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "messageType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('message'),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "message", void 0);
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__("./src/app/components/alert/alert.component.html"),
            styles: [__webpack_require__("./src/app/components/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/components/camera/camera.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/camera/camera.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100px;\">\n  <webcam [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\" *ngIf=\"showWebcam\"></webcam>\n  <br/>\n  <button class=\"actionBtn\" (click)=\"triggerSnapshot();\">Take A Snapshot</button>\n  <button class=\"actionBtn\" (click)=\"toggleWebcam();\">Toggle Webcam</button>\n</div>\n\n<div class=\"snapshot\" *ngIf=\"webcamImage\">\n  <h2>Nice one!</h2>\n  <img [src]=\"webcamImage.imageAsDataUrl\"/>\n</div> "

/***/ }),

/***/ "./src/app/components/camera/camera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CameraComponent = /** @class */ (function () {
    function CameraComponent() {
        this.showWebcam = true;
        // latest snapshot
        this.webcamImage = null;
        // webcam snapshot trigger
        this.trigger = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
    }
    CameraComponent.prototype.ngOnInit = function () {
    };
    CameraComponent.prototype.triggerSnapshot = function () {
        this.trigger.next();
    };
    CameraComponent.prototype.toggleWebcam = function () {
        this.showWebcam = !this.showWebcam;
    };
    CameraComponent.prototype.handleImage = function (webcamImage) {
        this.webcamImage = webcamImage;
    };
    Object.defineProperty(CameraComponent.prototype, "triggerObservable", {
        get: function () {
            return this.trigger.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    CameraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-camera',
            template: __webpack_require__("./src/app/components/camera/camera.component.html"),
            styles: [__webpack_require__("./src/app/components/camera/camera.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CameraComponent);
    return CameraComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".header {\r\n    height: 3em;\r\n    background-color: #17a2b8;\r\n}"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 header\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-9\" style=\"display: inherit\">\n      <img style=\"margin: 10px;\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAB2CAMAAABMD6kxAAAAMFBMVEXR1dr////O0tf8/PzY29/09PX5+frt8PHl6evR09rU2Nzi5ujr7e/f4eXo6ezk5egQ1QesAAADDklEQVR4nO2c25KDIAyGIag1qOv7v+166MnWQtKi/M74Xe3lN0xMQkjXmJOTk5OTkzWIjC8G/PDHYSBTdG3lnLPWuar1uX1kMBVtaRfUhzj0vrJvXHJLReE17YE/7DOnolzVHig4t1wA6j5pW1sSwaYXaj57j1R1AakeOu8bkOmlcHFxW+a2fIfX0wm8OfUib2tbsGjxsgMfKHKrLqA/qbctoTI6Sb5MxCMv5N72AhTl1CrEHZC4+dijrJFb9glR8bnT5dZ9IKj2T/QwsaJIhiM4zbnq20QqnqT6NpHEVd8m0A30uOIq71P8d5TiQB/nYcXFt4gJoAKkEwcq+boC1OGI60o+UHcYmWG9gHN3I83NDekG1OlivEZ5olCd93TmuY1nlNeIkSa38wRf1OIYU9vDiiuzOJC4dFD7oIEQVw4nRkBqpzodotRO+Wz8CkgeV04O7fh2mNt4Rv114jTkOu8KpVcxVKvEcS4SQ7siHwk5nEAx47Oy2NwjeRt5ZkHJKDdI2mn95TZ9IbY6cQduccXLvHFS4Q3hqBluCUHalWN04gtkzS1cpBhZQkRLhiMsactBGvElgihv0XLhlViwVICBMhNOiRVkoEyEL3GYa4cTwd1DoCntG+EbxSmennBze1hxxHJ/Jfz8hpsNIw+eIBPDNcJ5HOdF+Y3wNhzOG/4rHO7JEXvaGQ4PESvQ3jDa2DrctBL0hrxwTsQfPEHF4xu2SBvYd8gLJiuAGVE4r70YLHU20ldah1T42fSKXc8S5QpHKm0YdaZG+8w50PrMVZRN94X2rJ7z1Em51LRUz5VgmH/RHqmzPE8Efucrxu3fvaTQnuh3jXXy+q2gT1T7PTST1++9hXD7qDNp602ccod4Yfnjt4btK5J+V0/GtvFCzSbHPbNhvHC6XLJG1W0TLuwTpe7P9JuYq5fdvmCLKZ3wPwb8SPoz583jZCZ1nH+xJP4dLrG47lfJv5B2grFxInwm7YSRd/NOO+4Sb1wlIWWs7JRSZhKOjPaoPQ/SfZ6RJ5LUpPtHJrxXEp+R5JV/VkIgdyQsUpoAAAAASUVORK5CYII=\"\n        class=\"img-circle\" alt=\"Cinque Terre\" width=\"80\" height=\"80\" />\n      <div style=\"margin: 10px;\">\n        <h4>{{ userDetails.firstName }} {{ userDetails.lastName }}</h4>\n        <div>\n          <i class=\"fa fa-envelope\"></i>\n          <a style=\"color: #17a2b8\"> {{ userDetails.email }}</a>\n        </div>\n        <div>\n          <i class=\"fa fa-phone\"></i>\n          <a style=\"color: #17a2b8\"> +91 {{ userDetails.contact }}</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <div style=\"margin: 10px;\">\n        <button class=\"btn btn-success\" (click)=\"addUserPopupDialogue()\">\n          <i class=\"fa fa-user-plus\"></i> Add User</button>\n      </div>\n      <div style=\"margin: 10px;\">\n        <button class=\"btn btn-success\" (click)=\"raiseDefectPopupDialogue()\">\n          <i class=\"fa fa-bug\"></i> Raise Defect</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <p-table [value]=\"defectTableData\">\n      <ng-template pTemplate=\"header\">\n        <tr>\n          <th *ngFor=\"let col of defectTableDataCols\">\n            {{col.header}}\n          </th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-car>\n        <tr>\n          <td *ngFor=\"let col of defectTableDataCols\">\n            <a *ngIf=\"col.field !== 'imageUrl'\">{{car[col.field]}}</a>\n            <img *ngIf=\"col.field === 'imageUrl'\" src=\"{{car[col.field]}}\" width=\"50\" height=\"50\" />\n          </td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </div>\n</div>\n<p-dialog header=\"Add User\" [(visible)]=\"addUserPopup\" [modal]=\"true\" [responsive]=\"true\" [width]=\"350\" [minWidth]=\"200\"\n  [minY]=\"70\">\n  <form #signupForm=\"ngForm\" (ngSubmit)=\"signup(signupForm.value)\">\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">\n          <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n        </span>\n      </div>\n      <input type=\"email\" [(ngModel)]=\"email\" required name=\"email\" class=\"form-control\" placeholder=\"Email\" aria-label=\"Email\"\n        aria-describedby=\"basic-addon1\">\n    </div>\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">\n          <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n        </span>\n      </div>\n      <input type=\"password\" [(ngModel)]=\"password\" required name=\"password\" class=\"form-control\" placeholder=\"Password\" aria-label=\"Password\"\n        aria-describedby=\"basic-addon1\">\n    </div>\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">\n          <i class=\"fa fa-info\" aria-hidden=\"true\"></i>\n        </span>\n      </div>\n      <input type=\"text\" [(ngModel)]=\"firstName\" name=\"firstName\" class=\"form-control\" placeholder=\"firstName\" aria-label=\"Firstname\"\n        aria-describedby=\"basic-addon1\">\n    </div>\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">\n          <i class=\"fa fa-info\" aria-hidden=\"true\"></i>\n        </span>\n      </div>\n      <input type=\"text\" [(ngModel)]=\"lastName\" name=\"lastName\" class=\"form-control\" placeholder=\"lastName\" aria-label=\"Lastname\"\n        aria-describedby=\"basic-addon1\">\n    </div>\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">\n          <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n        </span>\n      </div>\n      <input type=\"tel\" [(ngModel)]=\"contact\" name=\"contact\" class=\"form-control\" placeholder=\"Phone\" aria-label=\"Phone\" aria-describedby=\"basic-addon1\">\n    </div>\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">\n          <i class=\"fa fa-tasks\" aria-hidden=\"true\"></i>\n        </span>\n      </div>\n      <select [(ngModel)]=\"selectedRole\" required name=\"role\" class=\"form-control\">\n        <option *ngFor=\"let role of roles\">{{ role }}</option>\n      </select>\n    </div>\n    <p-footer>\n      <button type=\"submit\" pButton icon=\"pi pi-check\" label=\"Create\" [disabled]=\"!signupForm.valid\"></button>\n      <button type=\"button\" pButton icon=\"pi pi-close\" (click)=\"addUserPopup=false;\" label=\"Cancel\"></button>\n    </p-footer>\n  </form>\n</p-dialog>\n<p-dialog header=\"Raise Defect\" [(visible)]=\"raiseDefectPopup\" [modal]=\"true\" [responsive]=\"true\" [width]=\"350\" [minWidth]=\"200\"\n  [minY]=\"70\">\n  <form #raiseDefect=\"ngForm\" (ngSubmit)=\"raiseDefectForm(raiseDefect.value)\">\n    <div align=\"center\">\n      <webcam [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\" *ngIf=\"showWebcam\"></webcam>\n      <button class=\"btn btn-info\" (click)=\"triggerSnapshot(); showWebcam=false\" style=\"margin: 10px;\" *ngIf=\"showWebcam\">Take A Snapshot</button>\n      <img style=\"margin: 10px;\" [src]=\"webcamImage.imageAsDataUrl\" *ngIf=\"webcamImage\" height=\"70px\" width=\"70px;\" />\n      <input type=\"image\" [(ngModel)]=\"uploadedimage\" *ngIf=\"webcamImage\" name=\"uploadedimage\" class=\"form-control\" style=\"display: none;\">\n    </div>\n    <p-footer>\n      <p-fileUpload mode=\"basic\" name=\"demo[]\" url=\"./upload.php\" accept=\"image/*\" maxFileSize=\"1000000\" (onUpload)=\"onBasicUpload($event)\"\n        chooseLabel=\"Browse\"></p-fileUpload>\n      <button type=\"button\" style=\"top: -10px;\" pButton icon=\"pi pi-check\" label=\"Create\" (click)=\"toggleWebcam()\" label=\"Capture photo\"></button>\n    </p-footer>\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">\n          <i class=\"fa fa-id-card\" aria-hidden=\"true\"></i>\n        </span>\n      </div>\n      <input type=\"number\" [(ngModel)]=\"assigneeId\" name=\"assigneeId\" class=\"form-control\" placeholder=\"assigneeId\" aria-label=\"Assignee Id\"\n        aria-describedby=\"basic-addon1\">\n    </div>\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">\n          <i class=\"fa fa-info\" aria-hidden=\"true\"></i>\n        </span>\n      </div>\n      <input type=\"text\" [(ngModel)]=\"FIRNCR\" name=\"FIRNCR\" class=\"form-control\" placeholder=\"FIRNCR\" aria-label=\"FIRNCR\" aria-describedby=\"basic-addon1\">\n    </div>\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">\n          <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n        </span>\n      </div>\n      <input type=\"text\" [(ngModel)]=\"location\" name=\"location\" class=\"form-control\" placeholder=\"location\" aria-label=\"location\"\n        aria-describedby=\"basic-addon1\">\n    </div>\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">\n          <i class=\"fa fa-info\" aria-hidden=\"true\"></i>\n        </span>\n      </div>\n      <input type=\"text\" [(ngModel)]=\"structure\" name=\"structure\" class=\"form-control\" placeholder=\"structure\" aria-label=\"structure\"\n        aria-describedby=\"basic-addon1\">\n    </div>\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">\n          <i class=\"fa fa-info\" aria-hidden=\"true\"></i>\n        </span>\n      </div>\n      <input type=\"text\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\" placeholder=\"description\" aria-label=\"description\"\n        aria-describedby=\"basic-addon1\">\n    </div>\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">\n          <i class=\"fa fa-list-alt\" aria-hidden=\"true\"></i>\n        </span>\n      </div>\n      <select [(ngModel)]=\"category\" required name=\"category\" class=\"form-control\">\n        <option *ngFor=\"let category of defectCategories\">{{ category }}</option>\n      </select>\n    </div>\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">\n          <i class=\"fa fa-info\" aria-hidden=\"true\"></i>\n        </span>\n      </div>\n      <input type=\"text\" [(ngModel)]=\"impact\" name=\"impact\" class=\"form-control\" placeholder=\"impact\" aria-label=\"impact\" aria-describedby=\"basic-addon1\">\n    </div>\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">\n          <i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i>\n        </span>\n      </div>\n      <input type=\"text\" [(ngModel)]=\"recommendation\" name=\"recommendation\" class=\"form-control\" placeholder=\"recommendation\" aria-label=\"recommendation\"\n        aria-describedby=\"basic-addon1\">\n    </div>\n    <p-footer>\n      <button type=\"submit\" pButton icon=\"pi pi-check\" label=\"Create\" [disabled]=\"!raiseDefect.valid\"></button>\n      <button type=\"button\" pButton icon=\"pi pi-close\" (click)=\"addUserPopup=false;\" label=\"Cancel\"></button>\n    </p-footer>\n  </form>\n</p-dialog>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_base_service__ = __webpack_require__("./src/app/services/api-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(apiBaseService, router) {
        this.apiBaseService = apiBaseService;
        this.router = router;
        this.addUserPopup = false;
        this.raiseDefectPopup = false;
        this.showWebcam = false;
        this.webcamImage = null;
        this.defectCategories = ["Major", "Minor", "Severe"];
        this.defectTableDataCols = [
            /*  { field: 'creatorId', header: 'creatorId' }, */
            { field: 'assigneeId', header: 'Assignee' },
            /* { field: 'createDate', header: 'createDate' }, */
            /* { field: 'targetDate', header: 'targetDate' }, */
            /* { field: 'FIRNCR', header: 'FIRNCR' }, */
            /* { field: 'location', header: 'location' }, */
            /*     { field: 'structure', header: 'structure' }, */
            /* { field: 'description', header: 'description' }, */
            { field: 'category', header: 'Category' },
            /* { field: 'impact', header: 'impact' }, */
            /* { field: 'recommendation', header: 'recommendation' }, */
            { field: 'status', header: 'Status' },
            { field: 'imageUrl', header: 'Image' }
        ];
        this.trigger = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        this.blobToFile = function (theBlob, fileName) {
            var b = theBlob;
            //A Blob() is almost a File() - it's just missing the two properties below which we will add
            b.lastModifiedDate = new Date();
            b.name = fileName;
            //Cast to a File() type
            return theBlob;
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.userDetails = JSON.parse(localStorage.getItem('currentUser'));
        this.roles = ["PM-Client", "PM-Consultant", "PM-Contractor", "Civil Engineer", "MEP"];
        this.selectedRole = this.roles[0];
        this.category = this.defectCategories[0];
        this.getDefectTableData();
    };
    HomeComponent.prototype.addUserPopupDialogue = function () {
        this.addUserPopup = true;
    };
    HomeComponent.prototype.raiseDefectPopupDialogue = function () {
        this.raiseDefectPopup = true;
    };
    HomeComponent.prototype.getDefectTableData = function () {
        var _this = this;
        this.apiBaseService.get('/api/createdtasks').subscribe(function (response) {
            _this.defectTableData = response.Seccess.CreatedTasks;
        });
    };
    HomeComponent.prototype.signup = function (formData) {
        var _this = this;
        this.apiBaseService.post('/api/signup', formData).subscribe(function (response) {
            _this.getDefectTableData();
        });
    };
    HomeComponent.prototype.raiseDefectForm = function (formData) {
        this.apiBaseService.post('/api/tasks/createnew', formData).subscribe(function (response) {
            console.log(response);
        });
    };
    HomeComponent.prototype.triggerSnapshot = function () {
        this.trigger.next();
    };
    HomeComponent.prototype.toggleWebcam = function () {
        this.showWebcam = !this.showWebcam;
    };
    HomeComponent.prototype.handleImage = function (webcamImage) {
        this.webcamImage = webcamImage;
        var binary = atob(this.webcamImage.imageAsDataUrl.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        this.uploadedimage = new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    };
    Object.defineProperty(HomeComponent.prototype, "triggerObservable", {
        get: function () {
            return this.trigger.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_base_service__["a" /* ApiBaseService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".loginCard {\r\n    margin: 15% auto;\r\n    width: 20em;\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"loginCard\">\n        <div class=\"alert alert-danger\" *ngIf=\"loginError\" style=\"font-family: 'times new roman'\">\n          {{ loginError }}\n        </div> \n        <form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm.value)\" style=\"font-family: 'times new roman'\">\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"basic-addon1\">\n                <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <input type=\"email\" [(ngModel)]=\"email\" required name=\"email\" class=\"form-control\" placeholder=\"Email\" aria-label=\"Email\"\n              aria-describedby=\"basic-addon1\">\n          </div>\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"basic-addon1\">\n                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <input type=\"password\" [(ngModel)]=\"password\" required name=\"password\" class=\"form-control\" placeholder=\"Password\" aria-label=\"Password\"\n              aria-describedby=\"basic-addon1\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-info btn-block\" [disabled]=\"!loginForm.valid\">Login</button>\n          <a style=\"cursor: pointer;\">\n            <small style=\"color: grey; opacity: 0.6\">Register -</small>\n          </a>\n          <a style=\"cursor: pointer;\">\n            <small style=\"color: grey; opacity: 0.6\">Forgot password ?</small>\n          </a>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_api_base_service__ = __webpack_require__("./src/app/services/api-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(apiBaseService, router) {
        this.apiBaseService = apiBaseService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (formData) {
        var _this = this;
        this.apiBaseService.post('/api/login', formData).subscribe(function (response) {
            if (response.Success) {
                localStorage.setItem('currentUser', JSON.stringify(response.Success.Data[0]));
                _this.router.navigate(['']);
            }
            else {
                _this.loginError = 'Email or password is incorrect.'; // response.Error.message
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_api_base_service__["a" /* ApiBaseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var apiToken = localStorage.getItem('currentUser');
        apiToken ? true : this.router.navigate(['login']);
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/api-base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiBaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiBaseService = /** @class */ (function () {
    function ApiBaseService(httpClient) {
        this.httpClient = httpClient;
        this.apiToken = JSON.parse(localStorage.getItem('currentUser')).apiToken;
    }
    ApiBaseService.prototype.createURL = function (url) {
        return "http://139.59.1.140" + url;
    };
    ApiBaseService.prototype.createFormData = function (formData) {
        var payload = new FormData();
        for (var key in formData) {
            payload.append(key, formData[key]);
        }
        return payload;
    };
    ApiBaseService.prototype.post = function (url, payload) {
        var headers = this.apiToken ? new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().append('Authorization', '4b78808b27999fc8f9d2d37257aa85db') : new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        return this.httpClient.post(this.createURL(url), this.createFormData(payload), { headers: headers });
    };
    ApiBaseService.prototype.get = function (url) {
        var headers = this.apiToken ? new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().append('Authorization', '4b78808b27999fc8f9d2d37257aa85db') : new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        return this.httpClient.get(this.createURL(url), { headers: headers });
    };
    ApiBaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiBaseService);
    return ApiBaseService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
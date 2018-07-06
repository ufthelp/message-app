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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\n  display: flex;\n  justify-content: center;\n}\n\n.app-container {\n  display: flex;\n  justify-content: space-between;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <mat-toolbar color=\"primary\">{{title}}</mat-toolbar>\n</section>\n<section class=\"app-container\">\n  <sidebar></sidebar>\n  <header></header>\n</section>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Message App';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _services_people_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/people.service */ "./src/app/services/people.service.ts");
/* harmony import */ var _components_center_panel_center_panel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/center-panel/center-panel.component */ "./src/app/components/center-panel/center-panel.component.ts");
/* harmony import */ var _components_send_message_send_message_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/send-message/send-message.component */ "./src/app/components/send-message/send-message.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _components_center_panel_center_panel_component__WEBPACK_IMPORTED_MODULE_16__["CenterPanelComponent"],
                _components_send_message_send_message_component__WEBPACK_IMPORTED_MODULE_17__["SendMessageComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ],
            providers: [_services_people_service__WEBPACK_IMPORTED_MODULE_15__["PeopleService"]],
            entryComponents: [_components_send_message_send_message_component__WEBPACK_IMPORTED_MODULE_17__["SendMessageComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/center-panel/center-panel.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/center-panel/center-panel.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Table CSS begins */\ntable {\n  width: 100%;\n}\nth.mat-sort-header-sorted {\n  color: black;\n}\ntd.mat-cell:first-child,\ntd.mat-footer-cell:first-child {\n  padding-left: 0;\n}\ntd.mat-cell:last-child {\n  padding-right: 0;\n}\n.table-header {\n  padding-left: 1rem;\n  border-right: 1px solid rgba(0, 0, 0, .12);\n}\ntr.mat-header-row {\n  height: 2rem;\n}\n/* Table CSS ends */\n.container {\n  margin-bottom: 2rem;\n}\n.header {\n  display: flex;\n  justify-content: flex-start;\n}\n.sub-header {\n  display: flex;\n  flex-direction: column;\n  margin-left: 5rem;\n}\nimg {\n  width: 6rem;\n}\n.heart-icon {\n  margin-top: 1rem;\n  display: flex;\n  cursor: pointer;\n}\nbutton.mat-raised-button {\n  padding: 0 2rem;\n}\n.description {\n  border-left: 5px solid rgba(0, 0, 0, .12);\n}\nh3 {\n  margin-left: 1rem;\n}\n.likes {\n  border: 1px solid rgba(0, 0, 0, .12);\n  border-left: none;\n  padding: .5rem 3.5rem .5rem 1.5rem;\n}\n.dislikes {\n  border: 1px solid rgba(0, 0, 0, .12);\n  border-right: none;\n  padding: .5rem 3.5rem .5rem 1.5rem;\n}\n.likes:nth-child(odd),\n.dislikes:nth-child(odd) {\n  background-color: #f2f2f2;\n}\n/* Responsive CSS */\n@media(max-width:1024px) {\n  img {\n    width: 4rem;\n  }\n  button.mat-raised-button {\n    padding: 0 1rem;\n    font-size: .7rem;\n  }\n  h3 {\n    font-size: 1rem;\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/center-panel/center-panel.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/center-panel/center-panel.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n  <section class=\"header\">\n    <div>\n      <img src={{data[0].img}} alt=\"\">\n    </div>\n    <section class=\"sub-header\">\n      <div>\n        <button mat-raised-button color=\"primary\" (click)=\"sendMsg(data[0])\">SEND MESSAGE!</button>\n      </div>\n      <div class=\"heart-icon\">\n        <mat-icon aria-label=\"icon-button with a heart icon\" *ngFor=\"let heart of data[0].fullHearts\">favorite\n        </mat-icon>\n        <mat-icon aria-label=\"icon-button with a heart icon\" *ngFor=\"let heart of data[0].emptyHearts\">favorite_border\n        </mat-icon>\n      </div>\n    </section>\n  </section>\n  <section class=\"description\">\n    <h3>{{data[0].Description}}</h3>\n  </section>\n</section>\n\n<table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"likes\">\n    <th mat-header-cell *matHeaderCellDef class=\"table-header\"> Likes </th>\n    <td mat-cell *matCellDef=\"let data\">\n      <div *ngFor=\"let likes of data.Likes\" class=\"likes\">\n        <div>{{likes}} </div>\n      </div>\n    </td>\n  </ng-container>\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"dislikes\">\n    <th mat-header-cell *matHeaderCellDef class=\"table-header\"> Dislikes </th>\n    <td mat-cell *matCellDef=\"let data\">\n      <div *ngFor=\"let dislike of data.Dislikes\" class=\"dislikes\">\n        <div>{{dislike}} </div>\n      </div>\n    </td>\n  </ng-container>\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n"

/***/ }),

/***/ "./src/app/components/center-panel/center-panel.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/center-panel/center-panel.component.ts ***!
  \*******************************************************************/
/*! exports provided: CenterPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterPanelComponent", function() { return CenterPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _send_message_send_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../send-message/send-message.component */ "./src/app/components/send-message/send-message.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CenterPanelComponent = /** @class */ (function () {
    function CenterPanelComponent(dialog) {
        this.dialog = dialog;
        this.displayedColumns = ['likes', 'dislikes'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.data);
    }
    CenterPanelComponent.prototype.ngOnInit = function () {
    };
    CenterPanelComponent.prototype.sendMsg = function (_a) {
        var name = _a.name;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            name: name
        };
        this.dialog.open(_send_message_send_message_component__WEBPACK_IMPORTED_MODULE_3__["SendMessageComponent"], dialogConfig);
        console.log("hhhh");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CenterPanelComponent.prototype, "data", void 0);
    CenterPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'center-panel',
            template: __webpack_require__(/*! ./center-panel.component.html */ "./src/app/components/center-panel/center-panel.component.html"),
            styles: [__webpack_require__(/*! ./center-panel.component.css */ "./src/app/components/center-panel/center-panel.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], CenterPanelComponent);
    return CenterPanelComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  display: flex;\n  align-items: flex-end;\n  min-width: 200px;\n}\n\nlabel {\n  margin-right: .5rem;\n  margin-bottom: .5rem;\n}\n\n.name {\n  font-size: 3rem;\n}\n\n.arrow {\n  margin-left: 1rem;\n}\n"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"header\">\n  <label>{{user}}</label>\n  <div class=\"icon\">\n    <mat-icon matSuffix class=\"name\">person</mat-icon>\n    <mat-icon matSuffix class=\"arrow\">arrow_drop_down</mat-icon>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.user = "Peter Hoang";
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/send-message/send-message.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/send-message/send-message.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-raised-button {\n  color: #fff;\n  background-color: #3f51b5;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nh2 {\n  margin: 0;\n}\n\n.mat-form-field {\n  width: 100%;\n  margin-top: 2rem;\n}\n\n.footer {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 1rem;\n}\n"

/***/ }),

/***/ "./src/app/components/send-message/send-message.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/send-message/send-message.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"header\">\n  <h2>Send Message to `{{name}}`</h2>\n</section>\n<mat-form-field class=\"example-full-width\">\n  <textarea matInput placeholder=\"Leave a comment\"></textarea>\n</mat-form-field>\n<section class=\"footer\">\n  <button class=\"mat-raised-button\" (click)=\"close()\">\n    Send\n  </button>\n  <button class=\"mat-raised-button\" (click)=\"close()\">\n    Close\n  </button>\n</section>\n"

/***/ }),

/***/ "./src/app/components/send-message/send-message.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/send-message/send-message.component.ts ***!
  \*******************************************************************/
/*! exports provided: SendMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMessageComponent", function() { return SendMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var SendMessageComponent = /** @class */ (function () {
    function SendMessageComponent(dialogRef, _a) {
        var name = _a.name;
        this.dialogRef = dialogRef;
        this.name = name;
    }
    /**
    * This is the close function to close the send message dialog
    */
    SendMessageComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    SendMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-message',
            template: __webpack_require__(/*! ./send-message.component.html */ "./src/app/components/send-message/send-message.component.html"),
            styles: [__webpack_require__(/*! ./send-message.component.css */ "./src/app/components/send-message/send-message.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], SendMessageComponent);
    return SendMessageComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100%;\n}\n\n.mat-list {\n  border: 1px solid rgba(0, 0, 0, .12);\n  width: 20rem;\n  margin-left: 5rem;\n  cursor: pointer;\n}\n\n.mat-list .mat-list-item {\n  height: 5rem;\n}\n\n.mat-list-item-content {\n  display: flex;\n  justify-content: center;\n}\n\n.icon {\n  display: flex;\n  justify-content: flex-end;\n  flex: 1;\n}\n\n.container {\n  display: flex;\n}\n\n.panel {\n  margin-left: 4rem;\n}\n\n.search {\n  margin-left: 5rem;\n  width: 20rem;\n}\n\n.error{\n    width: 20rem;\n    margin-left: 5rem;\n    color: red;\n}\n\n/* Responsive CSS */\n\n@media(max-width:1024px) {\n  .search,\n  .mat-list {\n    width: 16rem;\n  }\n}\n\n@media(max-width:768px) {\n  .search,\n  .mat-list {\n    margin-left: 0;\n  }\n}\n\n@media(max-width:600px) {\n  .container {\n    display: block;\n  }\n  .list {\n    display: flex;\n    justify-content: center;\n  }\n  .search {\n    margin: 0 auto;\n  }\n  .panel {\n    margin-top: 2rem;\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"search\">\n  <div>\n    <mat-form-field appearance=\"outline\" class=\"example-form-field\">\n      <mat-label>Search</mat-label>\n      <input matInput placeholder=\"Name\" #input [(ngModel)]=\"value\">\n      <button mat-button *ngIf=\"input\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"resetName()\">\n        <mat-icon>close</mat-icon>\n      </button>\n    </mat-form-field>\n  </div>\n</section>\n<section class=\"container\">\n  <div class=\"list\">\n    <div *ngIf=\"\">\n        hello\n    </div>\n    <mat-list role=\"list\" *ngIf=\"peoples && peoples.length>0 else noData\">\n      <mat-list-item *ngFor=\"let people of peoples\" role=\"listitem\" (click)=\"showDetails(people)\">\n        {{ people.name }}\n        <div class=\"icon\">\n          <mat-icon matSuffix>play_arrow</mat-icon>\n        </div>\n        <mat-divider></mat-divider>\n      </mat-list-item>\n    </mat-list>\n  </div>\n  <div class=\"panel\">\n    <center-panel *ngIf=\"people\" [data]=\"people\"></center-panel>\n  </div>\n</section>\n\n<ng-template #noData >\n  <div class=\"error\">\n      Please try again with valid Name!!!\n  </div>    \n</ng-template>"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_people_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/people.service */ "./src/app/services/people.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(peopleService) {
        this.peopleService = peopleService;
        this.value = '';
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.peopleService.getPerson().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res['People']; }))
            .subscribe(function (data) {
            _this.peoples = _this.names$ = data;
            _this.people = [];
            /** display default people*/
            var fullHeart = _this.peoples[0]['rating'];
            var emptyHeart = 5 - fullHeart ? 5 - fullHeart : 0;
            _this.peoples[0].fullHearts = Array(fullHeart).fill(0).map(function (x, i) { return i; });
            _this.peoples[0].emptyHearts = Array(emptyHeart).fill(0).map(function (x, i) { return i; });
            _this.people.push(_this.peoples[0]);
        });
    };
    /**Filter function */
    SidebarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.input.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
            var filter = _this.input.nativeElement.value;
            _this.peoples = _this.names$.filter(function (people) { return people.name.trim().toLowerCase().search(filter.toLowerCase()) >= 0; });
        })).subscribe();
    };
    SidebarComponent.prototype.showDetails = function (inputPeople) {
        this.people = [];
        /** creating Heart icon array */
        var fullHeart = inputPeople['rating'];
        var emptyHeart = 5 - fullHeart ? 5 - fullHeart : 0;
        inputPeople.fullHearts = Array(fullHeart).fill(0).map(function (x, i) { return i; });
        inputPeople.emptyHearts = Array(emptyHeart).fill(0).map(function (x, i) { return i; });
        this.people.push(inputPeople);
    };
    /*reset search name */
    SidebarComponent.prototype.resetName = function () {
        this.value = '';
        this.peoples = this.names$;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SidebarComponent.prototype, "input", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_people_service__WEBPACK_IMPORTED_MODULE_3__["PeopleService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/services/people.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/people.service.ts ***!
  \********************************************/
/*! exports provided: PeopleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleService", function() { return PeopleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeopleService = /** @class */ (function () {
    function PeopleService(http) {
        this.http = http;
    }
    PeopleService.prototype.getPerson = function () {
        return this.http.get("../../assets/people.json");
    };
    PeopleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PeopleService);
    return PeopleService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/msingh/APNA/Assignment/messaging-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
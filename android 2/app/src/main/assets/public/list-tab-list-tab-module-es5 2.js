(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-tab-list-tab-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/list-tab/list-tab.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list-tab/list-tab.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border >\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"newEntry()\" color=\"dark\" >\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"content\">\n  <h1>{{ prefService.journalname }}</h1>\n  <ion-card style=\"border-radius: 15px; box-shadow: none; margin-bottom: 15px;\" button color=\"light\" *ngFor=\"let entry of entriesService.entries\" [routerLink]=\"'/tabs/entries/detail/' + entry.id\" routerDirection=\"forward\">\n    <ion-card-header >\n      <ion-card-title>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"9\">\n              {{ entry.title }}\n            </ion-col>\n            <ion-col class=\"ion-text-end\">\n              <ion-icon *ngIf=\"entry.isFavorite\" name=\"heart\" size=\"small\" color=\"danger\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-text class=\"ion-text-nowrap\">\n      <p> {{ entry.content }}</p>\n    </ion-text>\n      <div class=\"meta\">{{ entriesService.getDate(entry.date, options) }}</div>\n     </ion-card-content>\n  </ion-card>\n\n</div>\n</ion-content >\n"

/***/ }),

/***/ "./src/app/list-tab/list-tab-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/list-tab/list-tab-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ListTabPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTabPageRoutingModule", function() { return ListTabPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_tab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-tab.page */ "./src/app/list-tab/list-tab.page.ts");




var routes = [
    {
        path: '',
        component: _list_tab_page__WEBPACK_IMPORTED_MODULE_3__["ListTabPage"]
    }
];
var ListTabPageRoutingModule = /** @class */ (function () {
    function ListTabPageRoutingModule() {
    }
    ListTabPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ListTabPageRoutingModule);
    return ListTabPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/list-tab/list-tab.module.ts":
/*!*********************************************!*\
  !*** ./src/app/list-tab/list-tab.module.ts ***!
  \*********************************************/
/*! exports provided: ListTabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTabPageModule", function() { return ListTabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_tab_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-tab-routing.module */ "./src/app/list-tab/list-tab-routing.module.ts");
/* harmony import */ var _list_tab_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-tab.page */ "./src/app/list-tab/list-tab.page.ts");
/* harmony import */ var _add_entry_add_entry_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../add-entry/add-entry.module */ "./src/app/add-entry/add-entry.module.ts");









var ListTabPageModule = /** @class */ (function () {
    function ListTabPageModule() {
    }
    ListTabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _list_tab_routing_module__WEBPACK_IMPORTED_MODULE_6__["ListTabPageRoutingModule"],
                _add_entry_add_entry_module__WEBPACK_IMPORTED_MODULE_8__["AddEntryPageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _list_tab_page__WEBPACK_IMPORTED_MODULE_7__["ListTabPage"] }])
            ],
            declarations: [_list_tab_page__WEBPACK_IMPORTED_MODULE_7__["ListTabPage"]]
        })
    ], ListTabPageModule);
    return ListTabPageModule;
}());



/***/ }),

/***/ "./src/app/list-tab/list-tab.page.scss":
/*!*********************************************!*\
  !*** ./src/app/list-tab/list-tab.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col {\n  padding: 0;\n  margin: 0;\n}\n\nion-grid {\n  padding: 0;\n  margin: 10 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXNhL0Rlc2t0b3Avam91cm5hbC1hcHAvc3JjL2FwcC9saXN0LXRhYi9saXN0LXRhYi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xpc3QtdGFiL2xpc3QtdGFiLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FDQUo7O0FERUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbGlzdC10YWIvbGlzdC10YWIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY29se1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuaW9uLWdyaWR7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDEwIDBweDtcbn1cbiIsImlvbi1jb2wge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxMCAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/list-tab/list-tab.page.ts":
/*!*******************************************!*\
  !*** ./src/app/list-tab/list-tab.page.ts ***!
  \*******************************************/
/*! exports provided: ListTabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTabPage", function() { return ListTabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_entries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/entries.service */ "./src/app/services/entries.service.ts");
/* harmony import */ var _add_entry_add_entry_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-entry/add-entry.page */ "./src/app/add-entry/add-entry.page.ts");
/* harmony import */ var _services_preferences_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/preferences.service */ "./src/app/services/preferences.service.ts");







var ListTabPage = /** @class */ (function () {
    function ListTabPage(modalController, entriesService, navCtrl, prefService) {
        this.modalController = modalController;
        this.entriesService = entriesService;
        this.navCtrl = navCtrl;
        this.prefService = prefService;
        this.options = {
            day: 'numeric',
            month: 'short'
        };
    }
    ListTabPage.prototype.ngOnInit = function () {
        this.entriesService.load();
    };
    ListTabPage.prototype.newEntry = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _add_entry_add_entry_page__WEBPACK_IMPORTED_MODULE_4__["AddEntryPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ListTabPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_entries_service__WEBPACK_IMPORTED_MODULE_3__["EntriesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_preferences_service__WEBPACK_IMPORTED_MODULE_5__["PreferencesService"] }
    ]; };
    ListTabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-tab',
            template: __webpack_require__(/*! raw-loader!./list-tab.page.html */ "./node_modules/raw-loader/index.js!./src/app/list-tab/list-tab.page.html"),
            styles: [__webpack_require__(/*! ./list-tab.page.scss */ "./src/app/list-tab/list-tab.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_entries_service__WEBPACK_IMPORTED_MODULE_3__["EntriesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_preferences_service__WEBPACK_IMPORTED_MODULE_5__["PreferencesService"]])
    ], ListTabPage);
    return ListTabPage;
}());



/***/ })

}]);
//# sourceMappingURL=list-tab-list-tab-module-es5.js.map
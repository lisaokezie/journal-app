(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-tab-home-tab-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home-tab/home-tab.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home-tab/home-tab.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"'../settings'\" routerDirection=\"forward\">\n        <ion-icon name=\"cog\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"content\">\n  <h1>{{ prefService.journalname }}</h1>\n\n  <ion-list lines=\"none\">\n    <ion-item button detail color=\"light\" [routerLink]=\"'/tabs/home/favorites'\" routerDirection=\"forward\">\n      <ion-icon color=\"danger\" name=\"heart\" slot=\"start\"></ion-icon>\n      <ion-label>\n        Favoriten\n      </ion-label>\n      <ion-badge slot=\"end\" color=\"medium\">\n        {{ filterArray().length }}\n      </ion-badge>\n    </ion-item>\n\n    <ion-item button detail color=\"light\" [routerLink]=\"'/tabs/home/tags'\" routerDirection=\"forward\">\n      <ion-icon color=\"primary\" name=\"pricetag\" slot=\"start\"></ion-icon>\n      <ion-label>\n        Tags\n      </ion-label>\n      <ion-badge slot=\"end\" color=\"medium\">\n        {{ tagsService.tags.length }}\n      </ion-badge>\n    </ion-item>\n  </ion-list>\n\n\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home-tab/home-tab-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/home-tab/home-tab-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeTabPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTabPageRoutingModule", function() { return HomeTabPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_tab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-tab.page */ "./src/app/home-tab/home-tab.page.ts");




var routes = [
    {
        path: '',
        component: _home_tab_page__WEBPACK_IMPORTED_MODULE_3__["HomeTabPage"]
    }
];
var HomeTabPageRoutingModule = /** @class */ (function () {
    function HomeTabPageRoutingModule() {
    }
    HomeTabPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], HomeTabPageRoutingModule);
    return HomeTabPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home-tab/home-tab.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home-tab/home-tab.module.ts ***!
  \*********************************************/
/*! exports provided: HomeTabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTabPageModule", function() { return HomeTabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_tab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-tab-routing.module */ "./src/app/home-tab/home-tab-routing.module.ts");
/* harmony import */ var _home_tab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-tab.page */ "./src/app/home-tab/home-tab.page.ts");







var HomeTabPageModule = /** @class */ (function () {
    function HomeTabPageModule() {
    }
    HomeTabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _home_tab_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeTabPageRoutingModule"]
            ],
            declarations: [_home_tab_page__WEBPACK_IMPORTED_MODULE_6__["HomeTabPage"]]
        })
    ], HomeTabPageModule);
    return HomeTabPageModule;
}());



/***/ }),

/***/ "./src/app/home-tab/home-tab.page.scss":
/*!*********************************************!*\
  !*** ./src/app/home-tab/home-tab.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header h2 {\n  font-size: 0.9rem;\n  margin-bottom: 10px;\n  color: #474747;\n  font-weight: bold;\n}\n\n#header {\n  margin-bottom: 20px;\n  border: 2px solid #0000;\n}\n\n.number {\n  font-size: 1.4rem;\n  font-weight: bold;\n}\n\nh2 {\n  margin: 0;\n  font-size: 1.4rem;\n}\n\nh3 {\n  font-size: 1.2rem;\n  color: #474747;\n  margin-bottom: 10px;\n}\n\nlabel {\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\nion-grid, ion-col {\n  padding: 0;\n  margin: 5px auto;\n}\n\nion-grid {\n  max-width: 600px;\n}\n\nion-row {\n  margin: 5px 0;\n}\n\nion-chip {\n  font-size: 1rem;\n}\n\nion-card-title {\n  font-size: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n  margin-bottom: 30px;\n}\n\nion-card-subtitle {\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  color: #cfcfcf;\n}\n\nion-card {\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: none;\n  border: none;\n  outline: none;\n  margin: 0;\n}\n\nion-item {\n  margin-bottom: 10px;\n  border-radius: 10px;\n}\n\nion-item ion-label {\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXNhL0Rlc2t0b3Avam91cm5hbC1hcHAvc3JjL2FwcC9ob21lLXRhYi9ob21lLXRhYi5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUtdGFiL2hvbWUtdGFiLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7QUNFSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNELHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNFSDs7QURBQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDR0o7O0FEQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQ0dKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtdGFiL2hvbWUtdGFiLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkZXIgaDJ7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBjb2xvcjogcmdiKDcxLCA3MSwgNzEpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jaGVhZGVye1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyOjJweCBzb2xpZCAjMDAwMDtcbn1cblxuLm51bWJlcntcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaDJ7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG5oM3tcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjb2xvcjogcmdiKDcxLCA3MSwgNzEpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmxhYmVse1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tZ3JpZCwgaW9uLWNvbHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogNXB4IGF1dG87XG59XG5cbmlvbi1ncmlke1xuICAgIG1heC13aWR0aDogNjAwcHg7XG59XG5pb24tcm93e1xuICAgIG1hcmdpbjogNXB4IDA7XG59XG5cbmlvbi1jaGlwe1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuaW9uLWNhcmQtdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5pb24tY2FyZC1zdWJ0aXRsZXtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjY2ZjZmNmO1xuXG59XG5pb24tY2FyZHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG59XG5cblxuaW9uLWl0ZW17XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pb24taXRlbSBpb24tbGFiZWx7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG4iLCIjaGVhZGVyIGgyIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjNDc0NzQ3O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2hlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwO1xufVxuXG4ubnVtYmVyIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5oMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjNDc0NzQ3O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWdyaWQsIGlvbi1jb2wge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDVweCBhdXRvO1xufVxuXG5pb24tZ3JpZCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG59XG5cbmlvbi1yb3cge1xuICBtYXJnaW46IDVweCAwO1xufVxuXG5pb24tY2hpcCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2NmY2ZjZjtcbn1cblxuaW9uLWNhcmQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home-tab/home-tab.page.ts":
/*!*******************************************!*\
  !*** ./src/app/home-tab/home-tab.page.ts ***!
  \*******************************************/
/*! exports provided: HomeTabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTabPage", function() { return HomeTabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_entries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/entries.service */ "./src/app/services/entries.service.ts");
/* harmony import */ var _services_tags_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/tags.service */ "./src/app/services/tags.service.ts");
/* harmony import */ var _services_preferences_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/preferences.service */ "./src/app/services/preferences.service.ts");





var HomeTabPage = /** @class */ (function () {
    function HomeTabPage(tagsService, entriesService, prefService) {
        this.tagsService = tagsService;
        this.entriesService = entriesService;
        this.prefService = prefService;
        this.sliderConfig = {
            spaceBetween: 4,
            slidesPerView: 2,
            slideShadows: false,
            centeredSlides: false
        };
        this.options = {
            day: 'numeric',
            month: 'short'
        };
    }
    HomeTabPage.prototype.ngOnInit = function () {
        this.entriesService.load();
        this.tagsService.load();
    };
    HomeTabPage.prototype.filterArray = function () {
        var favorites = [];
        favorites = this.entriesService.entries.filter(function (entry) { return entry.isFavorite === true; });
        return favorites;
    };
    HomeTabPage.ctorParameters = function () { return [
        { type: _services_tags_service__WEBPACK_IMPORTED_MODULE_3__["TagsService"] },
        { type: _services_entries_service__WEBPACK_IMPORTED_MODULE_2__["EntriesService"] },
        { type: _services_preferences_service__WEBPACK_IMPORTED_MODULE_4__["PreferencesService"] }
    ]; };
    HomeTabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-tab',
            template: __webpack_require__(/*! raw-loader!./home-tab.page.html */ "./node_modules/raw-loader/index.js!./src/app/home-tab/home-tab.page.html"),
            styles: [__webpack_require__(/*! ./home-tab.page.scss */ "./src/app/home-tab/home-tab.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tags_service__WEBPACK_IMPORTED_MODULE_3__["TagsService"], _services_entries_service__WEBPACK_IMPORTED_MODULE_2__["EntriesService"], _services_preferences_service__WEBPACK_IMPORTED_MODULE_4__["PreferencesService"]])
    ], HomeTabPage);
    return HomeTabPage;
}());



/***/ })

}]);
//# sourceMappingURL=home-tab-home-tab-module-es5.js.map
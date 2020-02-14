(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorites-favorites-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/favorites/favorites.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/favorites/favorites.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Favorites</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"content\">\n\n\n<ion-card style=\"border-radius: 15px; box-shadow: none;  margin-bottom: 15px\" button color=\"light\" *ngFor=\"let entry of favs\" [routerLink]=\"'/tabs/home/favorites/detail/' + entry.id\" routerDirection=\"forward\">\n  <ion-card-header >\n    <ion-card-title>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"9\">\n            {{ entry.title }}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-text class=\"ion-text-nowrap\">\n    <p> {{ entry.content }}</p>\n  </ion-text>\n    <div class=\"meta\">{{ entriesService.getDate(entry.date, options) }}</div>\n   </ion-card-content>\n</ion-card>\n\n\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/favorites/favorites-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/favorites/favorites-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: FavoritesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageRoutingModule", function() { return FavoritesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favorites.page */ "./src/app/favorites/favorites.page.ts");




var routes = [
    {
        path: '',
        component: _favorites_page__WEBPACK_IMPORTED_MODULE_3__["FavoritesPage"]
    }
];
var FavoritesPageRoutingModule = /** @class */ (function () {
    function FavoritesPageRoutingModule() {
    }
    FavoritesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FavoritesPageRoutingModule);
    return FavoritesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/favorites/favorites.module.ts":
/*!***********************************************!*\
  !*** ./src/app/favorites/favorites.module.ts ***!
  \***********************************************/
/*! exports provided: FavoritesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageModule", function() { return FavoritesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favorites-routing.module */ "./src/app/favorites/favorites-routing.module.ts");
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favorites.page */ "./src/app/favorites/favorites.page.ts");







var FavoritesPageModule = /** @class */ (function () {
    function FavoritesPageModule() {
    }
    FavoritesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritesPageRoutingModule"]
            ],
            declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_6__["FavoritesPage"]]
        })
    ], FavoritesPageModule);
    return FavoritesPageModule;
}());



/***/ }),

/***/ "./src/app/favorites/favorites.page.scss":
/*!***********************************************!*\
  !*** ./src/app/favorites/favorites.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlcy9mYXZvcml0ZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/favorites/favorites.page.ts":
/*!*********************************************!*\
  !*** ./src/app/favorites/favorites.page.ts ***!
  \*********************************************/
/*! exports provided: FavoritesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPage", function() { return FavoritesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_entries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/entries.service */ "./src/app/services/entries.service.ts");



var FavoritesPage = /** @class */ (function () {
    function FavoritesPage(entriesService) {
        this.entriesService = entriesService;
        this.options = {
            day: 'numeric',
            month: 'short'
        };
    }
    FavoritesPage.prototype.ngOnInit = function () {
        this.entriesService.load();
        this.favs = this.entriesService.entries.filter(function (entry) { return entry.isFavorite === true; });
    };
    FavoritesPage.ctorParameters = function () { return [
        { type: _services_entries_service__WEBPACK_IMPORTED_MODULE_2__["EntriesService"] }
    ]; };
    FavoritesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! raw-loader!./favorites.page.html */ "./node_modules/raw-loader/index.js!./src/app/favorites/favorites.page.html"),
            styles: [__webpack_require__(/*! ./favorites.page.scss */ "./src/app/favorites/favorites.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_entries_service__WEBPACK_IMPORTED_MODULE_2__["EntriesService"]])
    ], FavoritesPage);
    return FavoritesPage;
}());



/***/ }),

/***/ "./src/app/services/entries.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/entries.service.ts ***!
  \*********************************************/
/*! exports provided: EntriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntriesService", function() { return EntriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");



var EntriesService = /** @class */ (function () {
    function EntriesService(storage) {
        this.storage = storage;
        this.entries = [];
        this.loaded = false;
    }
    EntriesService.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get('entries').then(function (entries) {
                if (entries != null) {
                    _this.entries = entries;
                }
                _this.loaded = true;
                resolve(true);
            });
        });
    };
    EntriesService.prototype.save = function () {
        this.storage.set('entries', this.entries);
    };
    EntriesService.prototype.saveEntry = function (entry) {
        var id = Date.now();
        entry.id = id.toString();
        this.entries.push(entry);
        this.save();
    };
    EntriesService.prototype.getEntry = function (id) {
        return this.entries.find(function (entry) { return entry.id === id; });
    };
    EntriesService.prototype.getStatus = function (entry) {
        if (entry.isFavorite === true) {
            return true;
        }
        else {
            return false;
        }
    };
    EntriesService.prototype.getDate = function (date, options) {
        return date.toLocaleString('de-en', options);
    };
    EntriesService.prototype.createEntry = function (title) {
        var id = Date.now();
        var created = new Date();
        this.entries.push({
            id: id.toString(),
            title: title,
            date: created,
            content: '',
            tags: [],
            location: '',
            isFavorite: false
        });
        this.save();
    };
    EntriesService.prototype.deleteEntry = function (entry) {
        var index = this.entries.indexOf(entry);
        if (index > -1) {
            this.entries.splice(index, 1);
            this.save();
        }
    };
    EntriesService.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
    ]; };
    EntriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], EntriesService);
    return EntriesService;
}());



/***/ })

}]);
//# sourceMappingURL=favorites-favorites-module-es5.js.map
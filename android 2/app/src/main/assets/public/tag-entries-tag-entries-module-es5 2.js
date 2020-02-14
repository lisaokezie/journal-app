(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tag-entries-tag-entries-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tag-entries/tag-entries.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tag-entries/tag-entries.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Tag \"{{ tag }}\"</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"content\">\n  <!-- <ion-list>\n    <ion-list-header>\n      Alle Einträge mit dem Tag \"{{ tag }}\"\n    </ion-list-header>\n    <ion-item *ngFor=\"let entry of filtered\" [routerLink]=\"'./detail/' + entry.id\">\n      {{ entry.title }}\n    </ion-item>\n  </ion-list> -->\n\n\n  <ion-card button color=\"light\" style=\"border-radius: 15px; box-shadow: none;  margin-bottom: 15px\" *ngFor=\"let entry of filtered\" [routerLink]=\"'./detail/' + entry.id\" routerDirection=\"forward\">\n    <ion-card-header >\n      <ion-card-title>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"9\">\n              {{ entry.title }}\n            </ion-col>\n            <ion-col class=\"ion-text-end\">\n              <ion-icon *ngIf=\"entry.isFavorite\" name=\"heart\" size=\"small\" color=\"danger\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-text class=\"ion-text-nowrap\">\n      <p> {{ entry.content }}</p>\n    </ion-text>\n      <div class=\"meta\">{{ entriesService.getDate(entry.date, options) }}</div>\n     </ion-card-content>\n  </ion-card>\n\n  </div>\n</ion-content>\n"

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



/***/ }),

/***/ "./src/app/services/tags.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/tags.service.ts ***!
  \******************************************/
/*! exports provided: TagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return TagsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");



var TagsService = /** @class */ (function () {
    function TagsService(storage) {
        this.storage = storage;
        this.tags = [];
        this.loaded = false;
    }
    TagsService.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get('tags').then(function (tags) {
                if (tags != null) {
                    _this.tags = tags;
                }
                _this.loaded = true;
                resolve(true);
            });
        });
    };
    TagsService.prototype.save = function () {
        this.storage.set('tags', this.tags);
    };
    TagsService.prototype.deleteTag = function (tag) {
        var index = this.tags.indexOf(tag);
        if (index > -1) {
            this.tags.splice(index, 1);
            this.save();
        }
    };
    TagsService.prototype.createTag = function (name) {
        this.tags.push(name);
        this.save();
    };
    TagsService.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
    ]; };
    TagsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], TagsService);
    return TagsService;
}());



/***/ }),

/***/ "./src/app/tag-entries/tag-entries-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/tag-entries/tag-entries-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TagEntriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagEntriesPageRoutingModule", function() { return TagEntriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tag_entries_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag-entries.page */ "./src/app/tag-entries/tag-entries.page.ts");




var routes = [
    {
        path: '',
        component: _tag_entries_page__WEBPACK_IMPORTED_MODULE_3__["TagEntriesPage"]
    }
];
var TagEntriesPageRoutingModule = /** @class */ (function () {
    function TagEntriesPageRoutingModule() {
    }
    TagEntriesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TagEntriesPageRoutingModule);
    return TagEntriesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tag-entries/tag-entries.module.ts":
/*!***************************************************!*\
  !*** ./src/app/tag-entries/tag-entries.module.ts ***!
  \***************************************************/
/*! exports provided: TagEntriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagEntriesPageModule", function() { return TagEntriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tag_entries_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tag-entries-routing.module */ "./src/app/tag-entries/tag-entries-routing.module.ts");
/* harmony import */ var _tag_entries_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tag-entries.page */ "./src/app/tag-entries/tag-entries.page.ts");







var TagEntriesPageModule = /** @class */ (function () {
    function TagEntriesPageModule() {
    }
    TagEntriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _tag_entries_routing_module__WEBPACK_IMPORTED_MODULE_5__["TagEntriesPageRoutingModule"]
            ],
            declarations: [_tag_entries_page__WEBPACK_IMPORTED_MODULE_6__["TagEntriesPage"]]
        })
    ], TagEntriesPageModule);
    return TagEntriesPageModule;
}());



/***/ }),

/***/ "./src/app/tag-entries/tag-entries.page.scss":
/*!***************************************************!*\
  !*** ./src/app/tag-entries/tag-entries.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhZy1lbnRyaWVzL3RhZy1lbnRyaWVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tag-entries/tag-entries.page.ts":
/*!*************************************************!*\
  !*** ./src/app/tag-entries/tag-entries.page.ts ***!
  \*************************************************/
/*! exports provided: TagEntriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagEntriesPage", function() { return TagEntriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_entries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/entries.service */ "./src/app/services/entries.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tags_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/tags.service */ "./src/app/services/tags.service.ts");





var TagEntriesPage = /** @class */ (function () {
    function TagEntriesPage(tagsService, entriesService, route) {
        this.tagsService = tagsService;
        this.entriesService = entriesService;
        this.route = route;
        this.options = {
            day: 'numeric',
            month: 'short'
        };
    }
    TagEntriesPage.prototype.ngOnInit = function () {
        this.tagsService.load();
        this.entriesService.load();
        this.tag = this.route.snapshot.paramMap.get('tag');
        var filter = this.tag;
        this.filtered = this.entriesService.entries.filter(function (entry) {
            if (entry.tags != null) {
                return (entry.tags.includes(filter));
            }
        });
    };
    TagEntriesPage.ctorParameters = function () { return [
        { type: _services_tags_service__WEBPACK_IMPORTED_MODULE_4__["TagsService"] },
        { type: _services_entries_service__WEBPACK_IMPORTED_MODULE_2__["EntriesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    TagEntriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tag-entries',
            template: __webpack_require__(/*! raw-loader!./tag-entries.page.html */ "./node_modules/raw-loader/index.js!./src/app/tag-entries/tag-entries.page.html"),
            styles: [__webpack_require__(/*! ./tag-entries.page.scss */ "./src/app/tag-entries/tag-entries.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tags_service__WEBPACK_IMPORTED_MODULE_4__["TagsService"], _services_entries_service__WEBPACK_IMPORTED_MODULE_2__["EntriesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TagEntriesPage);
    return TagEntriesPage;
}());



/***/ })

}]);
//# sourceMappingURL=tag-entries-tag-entries-module-es5.js.map
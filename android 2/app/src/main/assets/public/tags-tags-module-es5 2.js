(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tags-tags-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tags/tags.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tags/tags.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Alle Tags</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"addTag()\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"inset\">\n    <ion-item-sliding *ngFor=\"let tag of tagsService.tags\">\n    <ion-item button detail [routerLink]=\"'/tabs/home/tags/tag-entries/'+ tag\" routerDirection=\"forward\">\n      <ion-icon name=\"pricetag\" slot=\"start\"></ion-icon>\n      <ion-label button >{{ tag }}</ion-label>\n    </ion-item>\n    <ion-item-options side=\"end\">\n      <ion-item-option (click)=\"deleteTag(tag)\" color=\"danger\" expandable>\n        Delete\n      </ion-item-option>\n    </ion-item-options>\n\n  </ion-item-sliding>\n  </ion-list>\n</ion-content>\n"

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

/***/ "./src/app/tags/tags-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tags/tags-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TagsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsPageRoutingModule", function() { return TagsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tags_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tags.page */ "./src/app/tags/tags.page.ts");




var routes = [
    {
        path: '',
        component: _tags_page__WEBPACK_IMPORTED_MODULE_3__["TagsPage"]
    }
];
var TagsPageRoutingModule = /** @class */ (function () {
    function TagsPageRoutingModule() {
    }
    TagsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TagsPageRoutingModule);
    return TagsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tags/tags.module.ts":
/*!*************************************!*\
  !*** ./src/app/tags/tags.module.ts ***!
  \*************************************/
/*! exports provided: TagsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsPageModule", function() { return TagsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tags_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tags-routing.module */ "./src/app/tags/tags-routing.module.ts");
/* harmony import */ var _tags_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tags.page */ "./src/app/tags/tags.page.ts");







var TagsPageModule = /** @class */ (function () {
    function TagsPageModule() {
    }
    TagsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _tags_routing_module__WEBPACK_IMPORTED_MODULE_5__["TagsPageRoutingModule"]
            ],
            declarations: [_tags_page__WEBPACK_IMPORTED_MODULE_6__["TagsPage"]]
        })
    ], TagsPageModule);
    return TagsPageModule;
}());



/***/ }),

/***/ "./src/app/tags/tags.page.scss":
/*!*************************************!*\
  !*** ./src/app/tags/tags.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhZ3MvdGFncy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tags/tags.page.ts":
/*!***********************************!*\
  !*** ./src/app/tags/tags.page.ts ***!
  \***********************************/
/*! exports provided: TagsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsPage", function() { return TagsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tags.service */ "./src/app/services/tags.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var TagsPage = /** @class */ (function () {
    function TagsPage(tagsService, alertController) {
        this.tagsService = tagsService;
        this.alertController = alertController;
    }
    TagsPage.prototype.ngOnInit = function () {
        this.tagsService.load();
    };
    TagsPage.prototype.addTag = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Create new Tag',
                            inputs: [
                                {
                                    name: 'tagname',
                                    type: 'text',
                                    placeholder: 'Enter Tag Name'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Add',
                                    handler: function (data) {
                                        _this.tagsService.createTag(data.tagname);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TagsPage.prototype.deleteTag = function (tag) {
        this.tagsService.deleteTag(tag);
    };
    TagsPage.ctorParameters = function () { return [
        { type: _services_tags_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    TagsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tags',
            template: __webpack_require__(/*! raw-loader!./tags.page.html */ "./node_modules/raw-loader/index.js!./src/app/tags/tags.page.html"),
            styles: [__webpack_require__(/*! ./tags.page.scss */ "./src/app/tags/tags.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tags_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], TagsPage);
    return TagsPage;
}());



/***/ })

}]);
//# sourceMappingURL=tags-tags-module-es5.js.map
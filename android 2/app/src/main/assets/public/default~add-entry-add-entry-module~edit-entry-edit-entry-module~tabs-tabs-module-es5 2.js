(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-entry-add-entry-module~edit-entry-edit-entry-module~tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modal/editmodal/editmodal.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modal/editmodal/editmodal.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title slot=\"start\">Edit options</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"inset\">\n  <ion-item>\n    <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\n    <ion-label>Favorite</ion-label>\n    <ion-toggle slot=\"end\" checked [(ngModel)]=\"isFavorite\"></ion-toggle>\n  </ion-item>\n\n  <ion-item-group>\n    <ion-item>\n    <ion-icon name=\"pricetags\" slot=\"start\"></ion-icon>\n    <ion-label>Select Tags</ion-label>\n    <ion-select multiple=\"true\" [(ngModel)]=\"tags\">\n      <ion-select-option *ngFor=\"let ta of tagsService.tags\">{{ ta }}</ion-select-option>\n  </ion-select>\n  </ion-item>\n\n  <ion-item button (click)=\"newTag()\">\n    <ion-icon name=\"pricetag\" slot=\"start\"></ion-icon>\n    <ion-label>Create new Tag</ion-label>\n  </ion-item>\n</ion-item-group>\n\n  <ion-item button (click)=\"addLocation()\">\n    <ion-icon name=\"locate\" slot=\"start\"></ion-icon>\n    <ion-label>Location</ion-label>\n    <ion-text>{{ location }}</ion-text>\n  </ion-item>\n</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/modal/editmodal/editmodal-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modal/editmodal/editmodal-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EditmodalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditmodalPageRoutingModule", function() { return EditmodalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _editmodal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editmodal.page */ "./src/app/modal/editmodal/editmodal.page.ts");




var routes = [
    {
        path: '',
        component: _editmodal_page__WEBPACK_IMPORTED_MODULE_3__["EditmodalPage"]
    }
];
var EditmodalPageRoutingModule = /** @class */ (function () {
    function EditmodalPageRoutingModule() {
    }
    EditmodalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EditmodalPageRoutingModule);
    return EditmodalPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modal/editmodal/editmodal.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modal/editmodal/editmodal.module.ts ***!
  \*****************************************************/
/*! exports provided: EditmodalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditmodalPageModule", function() { return EditmodalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editmodal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editmodal-routing.module */ "./src/app/modal/editmodal/editmodal-routing.module.ts");
/* harmony import */ var _editmodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editmodal.page */ "./src/app/modal/editmodal/editmodal.page.ts");







var EditmodalPageModule = /** @class */ (function () {
    function EditmodalPageModule() {
    }
    EditmodalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _editmodal_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditmodalPageRoutingModule"]
            ],
            declarations: [_editmodal_page__WEBPACK_IMPORTED_MODULE_6__["EditmodalPage"]]
        })
    ], EditmodalPageModule);
    return EditmodalPageModule;
}());



/***/ }),

/***/ "./src/app/modal/editmodal/editmodal.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/modal/editmodal/editmodal.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-select-option, ion-item, ion-select {\n  border: none;\n  outline: none;\n}\n\nion-select, ion-select-option {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXNhL0Rlc2t0b3Avam91cm5hbC1hcHAvc3JjL2FwcC9tb2RhbC9lZGl0bW9kYWwvZWRpdG1vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kYWwvZWRpdG1vZGFsL2VkaXRtb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRE1BO0VBQ0ksWUFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwvZWRpdG1vZGFsL2VkaXRtb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW9uLXNlbGVjdC1vcHRpb24sIGlvbi1pdGVtLCBpb24tc2VsZWN0e1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5cblxuaW9uLXNlbGVjdCwgaW9uLXNlbGVjdC1vcHRpb257XG4gICAgYm9yZGVyOiBub25lO1xufSIsImlvbi1zZWxlY3Qtb3B0aW9uLCBpb24taXRlbSwgaW9uLXNlbGVjdCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaW9uLXNlbGVjdCwgaW9uLXNlbGVjdC1vcHRpb24ge1xuICBib3JkZXI6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/modal/editmodal/editmodal.page.ts":
/*!***************************************************!*\
  !*** ./src/app/modal/editmodal/editmodal.page.ts ***!
  \***************************************************/
/*! exports provided: EditmodalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditmodalPage", function() { return EditmodalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_tags_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tags.service */ "./src/app/services/tags.service.ts");





var EditmodalPage = /** @class */ (function () {
    function EditmodalPage(modalController, tagsService, alertController) {
        this.modalController = modalController;
        this.tagsService = tagsService;
        this.alertController = alertController;
    }
    EditmodalPage.prototype.ngOnInit = function () {
        this.tagsService.load();
    };
    EditmodalPage.prototype.closeModal = function () {
        this.modalController.dismiss({
            tags: this.tags,
            location: this.location,
            isFavorite: this.isFavorite
        });
    };
    EditmodalPage.prototype.newTag = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'New Tag',
                            inputs: [
                                {
                                    name: 'tagname',
                                    type: 'text',
                                    placeholder: 'Enter Tag name '
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('cancel');
                                    }
                                }, {
                                    text: 'Add',
                                    handler: function (data) {
                                        // console.log(data.tagname);
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
    EditmodalPage.prototype.addLocation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Add Location',
                            inputs: [
                                {
                                    name: 'location',
                                    type: 'text',
                                    placeholder: 'Enter sth here',
                                    value: this.location
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
                                        _this.location = data.location;
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
    EditmodalPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_tags_service__WEBPACK_IMPORTED_MODULE_3__["TagsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    EditmodalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editmodal',
            template: __webpack_require__(/*! raw-loader!./editmodal.page.html */ "./node_modules/raw-loader/index.js!./src/app/modal/editmodal/editmodal.page.html"),
            styles: [__webpack_require__(/*! ./editmodal.page.scss */ "./src/app/modal/editmodal/editmodal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_tags_service__WEBPACK_IMPORTED_MODULE_3__["TagsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], EditmodalPage);
    return EditmodalPage;
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



/***/ })

}]);
//# sourceMappingURL=default~add-entry-add-entry-module~edit-entry-edit-entry-module~tabs-tabs-module-es5.js.map
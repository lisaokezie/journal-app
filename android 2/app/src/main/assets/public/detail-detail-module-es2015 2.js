(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/detail/detail.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/detail/detail.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ entriesService.getDate(entry.date, stringOptions) }} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"'./edit'\">\n        <ion-icon name=\"create\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"deleteEntry(entry)\" [routerLink]=\"'/tabs/entries'\" routerDirection=\"back\">\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n    </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"content\">\n  <div class=\"header ion-text-left\">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"9\">\n          <h1>{{ entry.title }}</h1>\n        </ion-col>\n       \n      </ion-row>\n    </ion-grid>\n  </div>\n\n    <div class=\"entry-text\">\n      <p>{{ entry.content }}</p>\n    </div>\n\n\n<ion-footer>\n  <div id=\"meta-container\">\n\n    <ion-list lines=\"none\">\n      <ion-item *ngIf=\"entry.isFavorite\">\n        <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\n        <ion-label>Favorit</ion-label>\n      </ion-item>\n      <ion-item *ngIf=\"entry.location !=''\">\n        <ion-icon name=\"compass\" slot=\"start\"></ion-icon>\n        <ion-label >{{ entry.location }}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-icon name=\"pricetags\" slot=\"start\"></ion-icon>\n        <ion-chip *ngFor=\"let tag of entry.tags\" outline=\"true\">\n      <ion-label>{{ tag }}</ion-label>\n    </ion-chip>\n      </ion-item>\n    </ion-list>\n\n  </div>\n</ion-footer> \n\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/detail/detail-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/detail/detail-routing.module.ts ***!
  \*************************************************/
/*! exports provided: DetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageRoutingModule", function() { return DetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail.page */ "./src/app/detail/detail.page.ts");




const routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_3__["DetailPage"]
    }
];
let DetailPageRoutingModule = class DetailPageRoutingModule {
};
DetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailPageRoutingModule);



/***/ }),

/***/ "./src/app/detail/detail.module.ts":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.module.ts ***!
  \*****************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-routing.module */ "./src/app/detail/detail-routing.module.ts");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/detail/detail.page.ts");







let DetailPageModule = class DetailPageModule {
};
DetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPageRoutingModule"]
        ],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
    })
], DetailPageModule);



/***/ }),

/***/ "./src/app/detail/detail.page.scss":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".meta {\n  color: #5c5c5c;\n}\n\n.entry-title {\n  margin: 0;\n  padding: 0 0 10px 0;\n  font-size: 20pt;\n}\n\n.entry-text {\n  font-size: 13pt;\n  line-height: 150%;\n}\n\n.meta {\n  padding-bottom: 10px;\n}\n\nion-chip {\n  font-size: 10pt;\n}\n\n.header {\n  margin-bottom: 20px;\n}\n\nion-col {\n  padding: 0;\n}\n\nion-grid {\n  padding: 0;\n  margin: 10 0px;\n}\n\n#meta-container ion-item, ion-icon {\n  font-size: 1rem;\n}\n\nion-item ion-icon {\n  margin: auto 15px;\n}\n\nion-item, ion-label {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXNhL0Rlc2t0b3Avam91cm5hbC1hcHAvc3JjL2FwcC9kZXRhaWwvZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSyxjQUFBO0FDQ0w7O0FERUE7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNHLG9CQUFBO0FDQ0g7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBRENBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7QUNFSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWV0YXtcbiAgICAgY29sb3I6ICM1YzVjNWM7XG59XG5cbi5lbnRyeS10aXRsZXtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMCAwIDEwcHggMDtcbiAgICBmb250LXNpemU6IDIwcHQ7XG59XG5cbi5lbnRyeS10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMTNwdDtcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcbn1cblxuLm1ldGF7XG4gICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuaW9uLWNoaXB7XG4gICAgZm9udC1zaXplOiAxMHB0O1xufVxuXG4uaGVhZGVye1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1jb2x7XG4gICAgcGFkZGluZzogMDtcbn1cbmlvbi1ncmlke1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAxMCAwcHg7XG59XG5cbiNtZXRhLWNvbnRhaW5lciBpb24taXRlbSwgaW9uLWljb257XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5cbmlvbi1pdGVtIGlvbi1pY29ue1xuICAgIG1hcmdpbjogYXV0byAxNXB4O1xufVxuXG5pb24taXRlbSwgaW9uLWxhYmVse1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufSIsIi5tZXRhIHtcbiAgY29sb3I6ICM1YzVjNWM7XG59XG5cbi5lbnRyeS10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDEwcHggMDtcbiAgZm9udC1zaXplOiAyMHB0O1xufVxuXG4uZW50cnktdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG59XG5cbi5tZXRhIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1jaGlwIHtcbiAgZm9udC1zaXplOiAxMHB0O1xufVxuXG4uaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxMCAwcHg7XG59XG5cbiNtZXRhLWNvbnRhaW5lciBpb24taXRlbSwgaW9uLWljb24ge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbmlvbi1pdGVtIGlvbi1pY29uIHtcbiAgbWFyZ2luOiBhdXRvIDE1cHg7XG59XG5cbmlvbi1pdGVtLCBpb24tbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/detail/detail.page.ts":
/*!***************************************!*\
  !*** ./src/app/detail/detail.page.ts ***!
  \***************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_entries_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/entries.service */ "./src/app/services/entries.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_tags_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/tags.service */ "./src/app/services/tags.service.ts");







let DetailPage = class DetailPage {
    constructor(route, tagsService, entriesService, navCtrl) {
        this.route = route;
        this.tagsService = tagsService;
        this.entriesService = entriesService;
        this.navCtrl = navCtrl;
        this.options = {
            weekday: 'short',
            day: 'numeric',
            month: 'long'
        };
        this.stringOptions = {
            weekday: 'short',
            day: 'numeric',
            month: 'long'
        };
        this.entry = {
            id: '',
            title: '',
            date: new Date,
            content: '',
            tags: [],
            location: '',
            isFavorite: false
        };
        this.entrytags = this.entry.tags;
        // Prüft den Status von isFavorite 
        // Wenn isFavorite = true, wird ein Herz angezeigt
        this.heart = this.entriesService.getStatus(this.entry);
    }
    ngOnInit() {
        /*
        subscription behebt Fehler, dass nach Bearbeiten von isFavorite in edit-entry
        und Zurückkehren in die Detailansicht die Änderung nicht angezeigt wird
        */
        this.subscription = this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(params => {
            const entryId = params["id"];
            if (this.entriesService.loaded) {
                this.entry = this.entriesService.getEntry(entryId);
            }
            else {
                this.entriesService.load().then(() => {
                    this.entry = this.entriesService.getEntry(entryId);
                });
            }
            this.heart = this.entriesService.getStatus(this.entry);
            this.entrytags = this.entry.tags;
        })).subscribe();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    deleteEntry(entry) {
        this.entriesService.deleteEntry(entry);
    }
};
DetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_tags_service__WEBPACK_IMPORTED_MODULE_6__["TagsService"] },
    { type: _services_entries_service__WEBPACK_IMPORTED_MODULE_4__["EntriesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/detail/detail.page.html"),
        styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/detail/detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_tags_service__WEBPACK_IMPORTED_MODULE_6__["TagsService"], _services_entries_service__WEBPACK_IMPORTED_MODULE_4__["EntriesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], DetailPage);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");



let EntriesService = class EntriesService {
    constructor(storage) {
        this.storage = storage;
        this.entries = [];
        this.loaded = false;
    }
    load() {
        return new Promise((resolve) => {
            this.storage.get('entries').then((entries) => {
                if (entries != null) {
                    this.entries = entries;
                }
                this.loaded = true;
                resolve(true);
            });
        });
    }
    save() {
        this.storage.set('entries', this.entries);
    }
    saveEntry(entry) {
        let id = Date.now();
        entry.id = id.toString();
        this.entries.push(entry);
        this.save();
    }
    getEntry(id) {
        return this.entries.find(entry => entry.id === id);
    }
    getStatus(entry) {
        if (entry.isFavorite === true) {
            return true;
        }
        else {
            return false;
        }
    }
    getDate(date, options) {
        return date.toLocaleString('de-en', options);
    }
    createEntry(title) {
        let id = Date.now();
        let created = new Date();
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
    }
    deleteEntry(entry) {
        let index = this.entries.indexOf(entry);
        if (index > -1) {
            this.entries.splice(index, 1);
            this.save();
        }
    }
};
EntriesService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
EntriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
], EntriesService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");



let TagsService = class TagsService {
    constructor(storage) {
        this.storage = storage;
        this.tags = [];
        this.loaded = false;
    }
    load() {
        return new Promise((resolve) => {
            this.storage.get('tags').then((tags) => {
                if (tags != null) {
                    this.tags = tags;
                }
                this.loaded = true;
                resolve(true);
            });
        });
    }
    save() {
        this.storage.set('tags', this.tags);
    }
    deleteTag(tag) {
        let index = this.tags.indexOf(tag);
        if (index > -1) {
            this.tags.splice(index, 1);
            this.save();
        }
    }
    createTag(name) {
        this.tags.push(name);
        this.save();
    }
};
TagsService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
TagsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
], TagsService);



/***/ })

}]);
//# sourceMappingURL=detail-detail-module-es2015.js.map
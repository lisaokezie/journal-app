(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-entry-edit-entry-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-entry/edit-entry.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-entry/edit-entry.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit Entry</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openEditModal()\">\n        <ion-icon name=\"more\">\n        </ion-icon>\n      </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"content\">\n    <ion-textarea auto-grow class=\"entry-title\" type=\"text\" name=\"title\" rows=\"1\" [(ngModel)]=\"entry.title\"></ion-textarea>\n    \n    <ion-textarea auto-grow class=\"entry-text\" type=\"text\" name=\"content\" rows=\"3\" [(ngModel)]=\"entry.content\"></ion-textarea>\n\n    <ion-footer>\n    <div id=\"meta-container\">\n\n      <ion-list lines=\"none\">\n        <ion-item *ngIf=\"entry.isFavorite\">\n          <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\n          <ion-label>Favorit</ion-label>\n        </ion-item>\n        <ion-item *ngIf=\"entry.location !=''\">\n          <ion-icon name=\"compass\" slot=\"start\"></ion-icon>\n          <ion-label >{{ entry.location }}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"pricetags\" slot=\"start\"></ion-icon>\n          <ion-chip *ngFor=\"let tag of entry.tags\" outline=\"true\">\n        <ion-label>{{ tag }}</ion-label>\n      </ion-chip>\n        </ion-item>\n      </ion-list>\n    </div>\n  </ion-footer>\n\n</div> \n</ion-content>\n\n<ion-footer>\n</ion-footer>"

/***/ }),

/***/ "./src/app/edit-entry/edit-entry-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/edit-entry/edit-entry-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: EditEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPageRoutingModule", function() { return EditEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-entry.page */ "./src/app/edit-entry/edit-entry.page.ts");




var routes = [
    {
        path: '',
        component: _edit_entry_page__WEBPACK_IMPORTED_MODULE_3__["EditEntryPage"]
    }
];
var EditEntryPageRoutingModule = /** @class */ (function () {
    function EditEntryPageRoutingModule() {
    }
    EditEntryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EditEntryPageRoutingModule);
    return EditEntryPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/edit-entry/edit-entry.module.ts":
/*!*************************************************!*\
  !*** ./src/app/edit-entry/edit-entry.module.ts ***!
  \*************************************************/
/*! exports provided: EditEntryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPageModule", function() { return EditEntryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-entry-routing.module */ "./src/app/edit-entry/edit-entry-routing.module.ts");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-entry.page */ "./src/app/edit-entry/edit-entry.page.ts");
/* harmony import */ var _modal_editmodal_editmodal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/editmodal/editmodal.module */ "./src/app/modal/editmodal/editmodal.module.ts");








var EditEntryPageModule = /** @class */ (function () {
    function EditEntryPageModule() {
    }
    EditEntryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _edit_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditEntryPageRoutingModule"],
                _modal_editmodal_editmodal_module__WEBPACK_IMPORTED_MODULE_7__["EditmodalPageModule"]
            ],
            declarations: [_edit_entry_page__WEBPACK_IMPORTED_MODULE_6__["EditEntryPage"]]
        })
    ], EditEntryPageModule);
    return EditEntryPageModule;
}());



/***/ }),

/***/ "./src/app/edit-entry/edit-entry.page.scss":
/*!*************************************************!*\
  !*** ./src/app/edit-entry/edit-entry.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#meta-container {\n  margin: 20px 0;\n  padding: 5px;\n}\n\nion-textarea, .entry-title {\n  margin: 0;\n}\n\n#meta-container ion-item, ion-icon {\n  font-size: 1rem;\n}\n\nion-item ion-icon {\n  margin: auto 15px;\n}\n\nion-item, ion-label {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXNhL0Rlc2t0b3Avam91cm5hbC1hcHAvc3JjL2FwcC9lZGl0LWVudHJ5L2VkaXQtZW50cnkucGFnZS5zY3NzIiwic3JjL2FwcC9lZGl0LWVudHJ5L2VkaXQtZW50cnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNDQTs7QURFQTtFQUNJLFNBQUE7QUNDSjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURJQTtFQUNJLGlCQUFBO0FDREo7O0FESUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1lbnRyeS9lZGl0LWVudHJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtZXRhLWNvbnRhaW5lcntcbm1hcmdpbjogMjBweCAwO1xucGFkZGluZzogNXB4O1xufVxuXG5pb24tdGV4dGFyZWEsIC5lbnRyeS10aXRsZXtcbiAgICBtYXJnaW46IDA7XG59XG5cblxuI21ldGEtY29udGFpbmVyIGlvbi1pdGVtLCBpb24taWNvbntcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cblxuaW9uLWl0ZW0gaW9uLWljb257XG4gICAgbWFyZ2luOiBhdXRvIDE1cHg7XG59XG5cbmlvbi1pdGVtLCBpb24tbGFiZWx7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59IiwiI21ldGEtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuaW9uLXRleHRhcmVhLCAuZW50cnktdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbiNtZXRhLWNvbnRhaW5lciBpb24taXRlbSwgaW9uLWljb24ge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbmlvbi1pdGVtIGlvbi1pY29uIHtcbiAgbWFyZ2luOiBhdXRvIDE1cHg7XG59XG5cbmlvbi1pdGVtLCBpb24tbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/edit-entry/edit-entry.page.ts":
/*!***********************************************!*\
  !*** ./src/app/edit-entry/edit-entry.page.ts ***!
  \***********************************************/
/*! exports provided: EditEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPage", function() { return EditEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _services_entries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/entries.service */ "./src/app/services/entries.service.ts");
/* harmony import */ var _modal_editmodal_editmodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/editmodal/editmodal.page */ "./src/app/modal/editmodal/editmodal.page.ts");





var Geolocation = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Geolocation;



var EditEntryPage = /** @class */ (function () {
    function EditEntryPage(route, entriesService, navCtrl, modalController) {
        this.route = route;
        this.entriesService = entriesService;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.entry = {
            id: '',
            title: '',
            date: new Date(),
            content: '',
            tags: [],
            location: '',
            isFavorite: false
        };
    }
    EditEntryPage.prototype.ngOnInit = function () {
        var _this = this;
        var entryId = this.route.snapshot.paramMap.get('id');
        if (this.entriesService.loaded) {
            this.entry = this.entriesService.getEntry(entryId);
        }
        else {
            this.entriesService.load().then(function () {
                _this.entry = _this.entriesService.getEntry(entryId);
            });
        }
        // Beim laden wird isFavorite geprüft und je nach Status die Farbe des Buttons festgelegt
        // if(this.entriesService.getStatus(this.entry)){
        //   this.buttonColor = this.likeColor;
        // }else{
        //   this.buttonColor = this.unlikeColor;
        // }
    };
    EditEntryPage.prototype.openEditModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modal_editmodal_editmodal_page__WEBPACK_IMPORTED_MODULE_6__["EditmodalPage"],
                            componentProps: {
                                title: this.entry.title,
                                tags: this.entry.tags,
                                location: this.entry.location,
                                isFavorite: this.entry.isFavorite
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            var tags = data['data'].tags;
                            var location = data['data'].location;
                            var isFavorite = data['data'].isFavorite;
                            _this.entry.isFavorite = isFavorite;
                            _this.entry.tags = tags;
                            _this.entry.location = location;
                            _this.entriesService.save();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EditEntryPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_entries_service__WEBPACK_IMPORTED_MODULE_5__["EntriesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    EditEntryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-entry',
            template: __webpack_require__(/*! raw-loader!./edit-entry.page.html */ "./node_modules/raw-loader/index.js!./src/app/edit-entry/edit-entry.page.html"),
            styles: [__webpack_require__(/*! ./edit-entry.page.scss */ "./src/app/edit-entry/edit-entry.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_entries_service__WEBPACK_IMPORTED_MODULE_5__["EntriesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], EditEntryPage);
    return EditEntryPage;
}());



/***/ })

}]);
//# sourceMappingURL=edit-entry-edit-entry-module-es5.js.map
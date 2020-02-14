(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-entry-edit-entry-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-entry/edit-entry.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-entry/edit-entry.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit Entry</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openEditModal()\">\n        <ion-icon name=\"more\">\n        </ion-icon>\n      </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"content\">\n    <ion-textarea auto-grow class=\"entry-title\" type=\"text\" name=\"title\" rows=\"1\" [(ngModel)]=\"entry.title\"></ion-textarea>\n    \n    <ion-textarea auto-grow class=\"entry-text\" type=\"text\" name=\"content\" rows=\"3\" [(ngModel)]=\"entry.content\"></ion-textarea>\n\n    <ion-footer>\n    <div id=\"meta-container\">\n\n      <ion-list lines=\"none\">\n        <ion-item *ngIf=\"entry.isFavorite\">\n          <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\n          <ion-label>Favorit</ion-label>\n        </ion-item>\n        <ion-item *ngIf=\"entry.location !=''\">\n          <ion-icon name=\"compass\" slot=\"start\"></ion-icon>\n          <ion-label >{{ entry.location }}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"pricetags\" slot=\"start\"></ion-icon>\n          <ion-chip *ngFor=\"let tag of entry.tags\" outline=\"true\">\n        <ion-label>{{ tag }}</ion-label>\n      </ion-chip>\n        </ion-item>\n      </ion-list>\n    </div>\n  </ion-footer>\n\n</div> \n</ion-content>\n\n<ion-footer>\n</ion-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modal/editmodal/editmodal.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modal/editmodal/editmodal.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title slot=\"start\">Edit options</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"inset\">\n  <ion-item>\n    <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\n    <ion-label>Favorite</ion-label>\n    <ion-toggle slot=\"end\" checked [(ngModel)]=\"isFavorite\"></ion-toggle>\n  </ion-item>\n\n  <ion-item-group>\n    <ion-item>\n    <ion-icon name=\"pricetags\" slot=\"start\"></ion-icon>\n    <ion-label>Select Tags</ion-label>\n    <ion-select multiple=\"true\" [(ngModel)]=\"tags\">\n      <ion-select-option *ngFor=\"let ta of tagsService.tags\">{{ ta }}</ion-select-option>\n  </ion-select>\n  </ion-item>\n\n  <ion-item button (click)=\"newTag()\">\n    <ion-icon name=\"pricetag\" slot=\"start\"></ion-icon>\n    <ion-label>Create new Tag</ion-label>\n  </ion-item>\n</ion-item-group>\n\n  <ion-item button (click)=\"addLocation()\">\n    <ion-icon name=\"locate\" slot=\"start\"></ion-icon>\n    <ion-label>Location</ion-label>\n    <ion-text>{{ location }}</ion-text>\n  </ion-item>\n</ion-list>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-entry.page */ "./src/app/edit-entry/edit-entry.page.ts");




const routes = [
    {
        path: '',
        component: _edit_entry_page__WEBPACK_IMPORTED_MODULE_3__["EditEntryPage"]
    }
];
let EditEntryPageRoutingModule = class EditEntryPageRoutingModule {
};
EditEntryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditEntryPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-entry-routing.module */ "./src/app/edit-entry/edit-entry-routing.module.ts");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-entry.page */ "./src/app/edit-entry/edit-entry.page.ts");
/* harmony import */ var _modal_editmodal_editmodal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/editmodal/editmodal.module */ "./src/app/modal/editmodal/editmodal.module.ts");








let EditEntryPageModule = class EditEntryPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _services_entries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/entries.service */ "./src/app/services/entries.service.ts");
/* harmony import */ var _modal_editmodal_editmodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/editmodal/editmodal.page */ "./src/app/modal/editmodal/editmodal.page.ts");





const { Geolocation } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];



let EditEntryPage = class EditEntryPage {
    constructor(route, entriesService, navCtrl, modalController) {
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
    ngOnInit() {
        let entryId = this.route.snapshot.paramMap.get('id');
        if (this.entriesService.loaded) {
            this.entry = this.entriesService.getEntry(entryId);
        }
        else {
            this.entriesService.load().then(() => {
                this.entry = this.entriesService.getEntry(entryId);
            });
        }
        // Beim laden wird isFavorite geprüft und je nach Status die Farbe des Buttons festgelegt
        // if(this.entriesService.getStatus(this.entry)){
        //   this.buttonColor = this.likeColor;
        // }else{
        //   this.buttonColor = this.unlikeColor;
        // }
    }
    openEditModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_editmodal_editmodal_page__WEBPACK_IMPORTED_MODULE_6__["EditmodalPage"],
                componentProps: {
                    title: this.entry.title,
                    tags: this.entry.tags,
                    location: this.entry.location,
                    isFavorite: this.entry.isFavorite
                }
            });
            modal.onDidDismiss()
                .then((data) => {
                const tags = data['data'].tags;
                const location = data['data'].location;
                const isFavorite = data['data'].isFavorite;
                this.entry.isFavorite = isFavorite;
                this.entry.tags = tags;
                this.entry.location = location;
                this.entriesService.save();
            });
            return yield modal.present();
        });
    }
};
EditEntryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_entries_service__WEBPACK_IMPORTED_MODULE_5__["EntriesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
EditEntryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-entry',
        template: __webpack_require__(/*! raw-loader!./edit-entry.page.html */ "./node_modules/raw-loader/index.js!./src/app/edit-entry/edit-entry.page.html"),
        styles: [__webpack_require__(/*! ./edit-entry.page.scss */ "./src/app/edit-entry/edit-entry.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_entries_service__WEBPACK_IMPORTED_MODULE_5__["EntriesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], EditEntryPage);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _editmodal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editmodal.page */ "./src/app/modal/editmodal/editmodal.page.ts");




const routes = [
    {
        path: '',
        component: _editmodal_page__WEBPACK_IMPORTED_MODULE_3__["EditmodalPage"]
    }
];
let EditmodalPageRoutingModule = class EditmodalPageRoutingModule {
};
EditmodalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditmodalPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editmodal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editmodal-routing.module */ "./src/app/modal/editmodal/editmodal-routing.module.ts");
/* harmony import */ var _editmodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editmodal.page */ "./src/app/modal/editmodal/editmodal.page.ts");







let EditmodalPageModule = class EditmodalPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_tags_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tags.service */ "./src/app/services/tags.service.ts");





let EditmodalPage = class EditmodalPage {
    constructor(modalController, tagsService, alertController) {
        this.modalController = modalController;
        this.tagsService = tagsService;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.tagsService.load();
    }
    closeModal() {
        this.modalController.dismiss({
            tags: this.tags,
            location: this.location,
            isFavorite: this.isFavorite
        });
    }
    newTag() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
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
                        handler: () => {
                            console.log('cancel');
                        }
                    }, {
                        text: 'Add',
                        handler: data => {
                            // console.log(data.tagname);
                            this.tagsService.createTag(data.tagname);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    addLocation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
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
                        handler: () => {
                        }
                    }, {
                        text: 'Add',
                        handler: data => {
                            this.location = data.location;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
EditmodalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_tags_service__WEBPACK_IMPORTED_MODULE_3__["TagsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
EditmodalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editmodal',
        template: __webpack_require__(/*! raw-loader!./editmodal.page.html */ "./node_modules/raw-loader/index.js!./src/app/modal/editmodal/editmodal.page.html"),
        styles: [__webpack_require__(/*! ./editmodal.page.scss */ "./src/app/modal/editmodal/editmodal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_tags_service__WEBPACK_IMPORTED_MODULE_3__["TagsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], EditmodalPage);



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
//# sourceMappingURL=edit-entry-edit-entry-module-es2015.js.map
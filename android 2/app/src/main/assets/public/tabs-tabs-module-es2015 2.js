(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"entries\">\n      <ion-icon name=\"journal\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button (click)=\"newEntry()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"paper-plane\"></ion-icon>\n    </ion-tab-button>\n\n   \n  </ion-tab-bar>\n\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'entries',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | list-tab-list-tab-module */[__webpack_require__.e("default~edit-entry-edit-entry-module~home-tab-home-tab-module~list-tab-list-tab-module~settings-sett~709f5e4e"), __webpack_require__.e("common"), __webpack_require__.e("list-tab-list-tab-module")]).then(__webpack_require__.bind(null, /*! ../list-tab/list-tab.module */ "./src/app/list-tab/list-tab.module.ts")).then(m => m.ListTabPageModule)
                    },
                    {
                        path: 'detail/:id',
                        children: [
                            {
                                path: '',
                                loadChildren: () => __webpack_require__.e(/*! import() | detail-detail-module */ "detail-detail-module").then(__webpack_require__.bind(null, /*! ../detail/detail.module */ "./src/app/detail/detail.module.ts")).then(m => m.DetailPageModule)
                            },
                            {
                                path: 'edit',
                                loadChildren: () => Promise.all(/*! import() | edit-entry-edit-entry-module */[__webpack_require__.e("default~edit-entry-edit-entry-module~home-tab-home-tab-module~list-tab-list-tab-module~settings-sett~709f5e4e"), __webpack_require__.e("edit-entry-edit-entry-module")]).then(__webpack_require__.bind(null, /*! ../edit-entry/edit-entry.module */ "./src/app/edit-entry/edit-entry.module.ts")).then(m => m.EditEntryPageModule)
                            }
                        ]
                    }
                ]
            },
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | home-tab-home-tab-module */[__webpack_require__.e("default~edit-entry-edit-entry-module~home-tab-home-tab-module~list-tab-list-tab-module~settings-sett~709f5e4e"), __webpack_require__.e("common"), __webpack_require__.e("home-tab-home-tab-module")]).then(__webpack_require__.bind(null, /*! ../home-tab/home-tab.module */ "./src/app/home-tab/home-tab.module.ts")).then(m => m.HomeTabPageModule)
                    },
                    {
                        path: 'settings',
                        loadChildren: () => Promise.all(/*! import() | settings-settings-module */[__webpack_require__.e("default~edit-entry-edit-entry-module~home-tab-home-tab-module~list-tab-list-tab-module~settings-sett~709f5e4e"), __webpack_require__.e("common"), __webpack_require__.e("settings-settings-module")]).then(__webpack_require__.bind(null, /*! ../settings/settings.module */ "./src/app/settings/settings.module.ts")).then(m => m.SettingsPageModule)
                    },
                    {
                        path: 'favorites',
                        children: [
                            {
                                path: '',
                                loadChildren: () => __webpack_require__.e(/*! import() | favorites-favorites-module */ "favorites-favorites-module").then(__webpack_require__.bind(null, /*! ../favorites/favorites.module */ "./src/app/favorites/favorites.module.ts")).then(m => m.FavoritesPageModule)
                            },
                            {
                                path: 'detail/:id',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: () => __webpack_require__.e(/*! import() | detail-detail-module */ "detail-detail-module").then(__webpack_require__.bind(null, /*! ../detail/detail.module */ "./src/app/detail/detail.module.ts")).then(m => m.DetailPageModule)
                                    },
                                    {
                                        path: 'edit',
                                        loadChildren: () => Promise.all(/*! import() | edit-entry-edit-entry-module */[__webpack_require__.e("default~edit-entry-edit-entry-module~home-tab-home-tab-module~list-tab-list-tab-module~settings-sett~709f5e4e"), __webpack_require__.e("edit-entry-edit-entry-module")]).then(__webpack_require__.bind(null, /*! ../edit-entry/edit-entry.module */ "./src/app/edit-entry/edit-entry.module.ts")).then(m => m.EditEntryPageModule)
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: 'tags',
                        children: [
                            {
                                path: '',
                                loadChildren: () => __webpack_require__.e(/*! import() | tags-tags-module */ "tags-tags-module").then(__webpack_require__.bind(null, /*! ../tags/tags.module */ "./src/app/tags/tags.module.ts")).then(m => m.TagsPageModule)
                            },
                            {
                                path: 'tag-entries/:tag',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: () => __webpack_require__.e(/*! import() | tag-entries-tag-entries-module */ "tag-entries-tag-entries-module").then(__webpack_require__.bind(null, /*! ../tag-entries/tag-entries.module */ "./src/app/tag-entries/tag-entries.module.ts")).then(m => m.TagEntriesPageModule)
                                    },
                                    {
                                        path: 'detail/:id',
                                        children: [
                                            {
                                                path: '',
                                                loadChildren: () => __webpack_require__.e(/*! import() | detail-detail-module */ "detail-detail-module").then(__webpack_require__.bind(null, /*! ../detail/detail.module */ "./src/app/detail/detail.module.ts")).then(m => m.DetailPageModule)
                                            },
                                            {
                                                path: 'edit',
                                                loadChildren: () => Promise.all(/*! import() | edit-entry-edit-entry-module */[__webpack_require__.e("default~edit-entry-edit-entry-module~home-tab-home-tab-module~list-tab-list-tab-module~settings-sett~709f5e4e"), __webpack_require__.e("edit-entry-edit-entry-module")]).then(__webpack_require__.bind(null, /*! ../edit-entry/edit-entry.module */ "./src/app/edit-entry/edit-entry.module.ts")).then(m => m.EditEntryPageModule)
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/entries',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _add_entry_add_entry_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../add-entry/add-entry.module */ "./src/app/add-entry/add-entry.module.ts");








let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
            _add_entry_add_entry_module__WEBPACK_IMPORTED_MODULE_7__["AddEntryPageModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_entry_add_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-entry/add-entry.page */ "./src/app/add-entry/add-entry.page.ts");




let TabsPage = class TabsPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    newEntry() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_entry_add_entry_page__WEBPACK_IMPORTED_MODULE_3__["AddEntryPage"]
            });
            return yield modal.present();
        });
    }
};
TabsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html"),
        styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map
webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-snippet/add-snippet.component.css":
/***/ (function(module, exports) {

module.exports = "#snippet {\r\n    height:160px;\r\n}"

/***/ }),

/***/ "./src/app/add-snippet/add-snippet.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"databaseService.connected\">\r\n\r\n  <h4>Add Snippet</h4>\r\n  <p>Enter a snippet from your cover letter that you feel is well articulated and communicates your experience well. Then fill out the categories (experiences, languages, skills) that relate to this cover letter.</p>\r\n  <textarea id=\"snippet\" ref-textarea [(ngModel)]=\"snippet\" placeholder=\"Copy/Paste a cover letter snippet here.\"></textarea>\r\n  <textarea ref-textarea [(ngModel)]=\"categories\" placeholder=\"Add your categories here, separated by a comma (no spaces). eg. PHP,javascript,Node,mysql\"></textarea>\r\n  <button (click)=\"addSnippet()\">Submit Snippet</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-snippet/add-snippet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSnippetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_database_service__ = __webpack_require__("./src/app/services/database.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddSnippetComponent = /** @class */ (function () {
    function AddSnippetComponent(databaseService) {
        this.databaseService = databaseService;
        this.snippet = "";
        this.categories = "";
    }
    AddSnippetComponent.prototype.ngOnInit = function () {
    };
    AddSnippetComponent.prototype.addSnippet = function () {
        var categoriesArray = this.categories.split(",");
        this.databaseService.addSnippet(this.snippet, categoriesArray);
        this.snippet = "";
        this.categories = "";
    };
    AddSnippetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-snippet',
            template: __webpack_require__("./src/app/add-snippet/add-snippet.component.html"),
            styles: [__webpack_require__("./src/app/add-snippet/add-snippet.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_database_service__["a" /* DatabaseService */]])
    ], AddSnippetComponent);
    return AddSnippetComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n</div>\n<app-nav></app-nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n  <!-- <app-database></app-database>\n  <app-function-choice></app-function-choice> -->\n</div>\n<app-status-message></app-status-message>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Cover Letter Snippets';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__job_description_job_description_component__ = __webpack_require__("./src/app/job-description/job-description.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__database_database_component__ = __webpack_require__("./src/app/database/database.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__results_results_component__ = __webpack_require__("./src/app/results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_snippet_add_snippet_component__ = __webpack_require__("./src/app/add-snippet/add-snippet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__status_message_status_message_component__ = __webpack_require__("./src/app/status-message/status-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__has_keywords_pipe__ = __webpack_require__("./src/app/has-keywords.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cover_letter_cover_letter_component__ = __webpack_require__("./src/app/cover-letter/cover-letter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__build_cover_letter_build_cover_letter_component__ = __webpack_require__("./src/app/build-cover-letter/build-cover-letter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__export_export_component__ = __webpack_require__("./src/app/export/export.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__nav_nav_component__ = __webpack_require__("./src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_database_service__ = __webpack_require__("./src/app/services/database.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_parse_description_service__ = __webpack_require__("./src/app/services/parse-description.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_status_message_service__ = __webpack_require__("./src/app/services/status-message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_cover_letter_service__ = __webpack_require__("./src/app/services/cover-letter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__database_database_component__["a" /* DatabaseComponent */] },
    { path: 'add-snippet', component: __WEBPACK_IMPORTED_MODULE_8__add_snippet_add_snippet_component__["a" /* AddSnippetComponent */] },
    { path: 'build-cover-letter', component: __WEBPACK_IMPORTED_MODULE_12__build_cover_letter_build_cover_letter_component__["a" /* BuildCoverLetterComponent */] },
    { path: 'export-cover-letter', component: __WEBPACK_IMPORTED_MODULE_13__export_export_component__["a" /* ExportComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__job_description_job_description_component__["a" /* JobDescriptionComponent */],
                __WEBPACK_IMPORTED_MODULE_6__database_database_component__["a" /* DatabaseComponent */],
                __WEBPACK_IMPORTED_MODULE_7__results_results_component__["a" /* ResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__add_snippet_add_snippet_component__["a" /* AddSnippetComponent */],
                __WEBPACK_IMPORTED_MODULE_9__status_message_status_message_component__["a" /* StatusMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__has_keywords_pipe__["a" /* HasKeywordsPipe */],
                __WEBPACK_IMPORTED_MODULE_11__cover_letter_cover_letter_component__["a" /* CoverLetterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__export_export_component__["a" /* ExportComponent */],
                __WEBPACK_IMPORTED_MODULE_12__build_cover_letter_build_cover_letter_component__["a" /* BuildCoverLetterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__nav_nav_component__["a" /* NavComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__services_database_service__["a" /* DatabaseService */],
                __WEBPACK_IMPORTED_MODULE_16__services_parse_description_service__["a" /* ParseDescriptionService */],
                __WEBPACK_IMPORTED_MODULE_17__services_status_message_service__["a" /* StatusMessageService */],
                __WEBPACK_IMPORTED_MODULE_18__services_cover_letter_service__["a" /* CoverLetterService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/build-cover-letter/build-cover-letter.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/build-cover-letter/build-cover-letter.component.html":
/***/ (function(module, exports) {

module.exports = "<app-job-description *ngIf=\"!parseDescriptionService.showParsingResults\"></app-job-description>\r\n\r\n<div *ngIf=\"parseDescriptionService.showParsingResults\">\r\n  <app-results ></app-results>\r\n  <div class=\"line-break\"></div>\r\n</div>\r\n\r\n<div *ngIf=\"coverLetterService.addedSnippets.length > 0\">\r\n  <app-cover-letter></app-cover-letter>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/build-cover-letter/build-cover-letter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildCoverLetterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_parse_description_service__ = __webpack_require__("./src/app/services/parse-description.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cover_letter_service__ = __webpack_require__("./src/app/services/cover-letter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuildCoverLetterComponent = /** @class */ (function () {
    function BuildCoverLetterComponent(parseDescriptionService, coverLetterService) {
        this.parseDescriptionService = parseDescriptionService;
        this.coverLetterService = coverLetterService;
    }
    BuildCoverLetterComponent.prototype.ngOnInit = function () {
    };
    BuildCoverLetterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-build-cover-letter',
            template: __webpack_require__("./src/app/build-cover-letter/build-cover-letter.component.html"),
            styles: [__webpack_require__("./src/app/build-cover-letter/build-cover-letter.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_parse_description_service__["a" /* ParseDescriptionService */],
            __WEBPACK_IMPORTED_MODULE_2__services_cover_letter_service__["a" /* CoverLetterService */]])
    ], BuildCoverLetterComponent);
    return BuildCoverLetterComponent;
}());



/***/ }),

/***/ "./src/app/cover-letter/cover-letter.component.css":
/***/ (function(module, exports) {

module.exports = "#cover-letter-table thead td:first-child {\r\n    width:70%;\r\n}\r\n\r\n#cover-letter-table thead td:nth-child(2) {\r\n    max-width:15%;\r\n}\r\n\r\n#cover-letter-table thead td:nth-child(3) {\r\n    max-width:15%;\r\n}"

/***/ }),

/***/ "./src/app/cover-letter/cover-letter.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"table-container\" *ngIf=\"coverLetterService.addedSnippets.length > 0\"> -->\n<h4>Organize Snippets and Export:</h4>\n<div class=\"table-container\">\n  <table id=\"cover-letter-table\">\n    <thead>\n      <tr>\n        <td>Snippet</td>\n        <td>Remove</td>\n        <td>Reorganize</td>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let snippet of coverLetterService.addedSnippets; let i = index\">\n        <td>{{snippet.snippet}}</td>\n        <td><a (click)=\"coverLetterService.removeSnippet(i)\">Remove</a></td>\n        <td>\n          <p><a (click)=\"coverLetterService.moveSnippet(i,true)\" *ngIf=\"i !== 0\">Move Up</a></p>\n          <p><a (click)=\"coverLetterService.moveSnippet(i,false)\" *ngIf=\"i !== coverLetterService.addedSnippets.length - 1\">Move Down</a></p>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<button [routerLink]=\"['/export-cover-letter']\" (click)=\"compile()\">Export and Tweak Cover Letter</button>\n"

/***/ }),

/***/ "./src/app/cover-letter/cover-letter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoverLetterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cover_letter_service__ = __webpack_require__("./src/app/services/cover-letter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_status_message_service__ = __webpack_require__("./src/app/services/status-message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoverLetterComponent = /** @class */ (function () {
    function CoverLetterComponent(coverLetterService, statusMessasageService) {
        this.coverLetterService = coverLetterService;
        this.statusMessasageService = statusMessasageService;
    }
    CoverLetterComponent.prototype.ngOnInit = function () {
    };
    CoverLetterComponent.prototype.compile = function () {
        var exportedCoverLetter = "";
        for (var i = 0; i < this.coverLetterService.addedSnippets.length; i++) {
            exportedCoverLetter += this.coverLetterService.addedSnippets[i].snippet;
            exportedCoverLetter += "\n\n";
        }
        this.coverLetterService.exported = exportedCoverLetter;
        this.statusMessasageService.newStatusMessage('Exporting Cover Letter to final edit!', 'success');
    };
    CoverLetterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cover-letter',
            template: __webpack_require__("./src/app/cover-letter/cover-letter.component.html"),
            styles: [__webpack_require__("./src/app/cover-letter/cover-letter.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cover_letter_service__["a" /* CoverLetterService */],
            __WEBPACK_IMPORTED_MODULE_2__services_status_message_service__["a" /* StatusMessageService */]])
    ], CoverLetterComponent);
    return CoverLetterComponent;
}());



/***/ }),

/***/ "./src/app/database/database.component.css":
/***/ (function(module, exports) {

module.exports = ".table-container {\r\n    max-height: 300px;\r\n}\r\n\r\n#database-table thead td:first-child {\r\n    width:60%;\r\n}\r\n\r\n#database-table thead td:nth-child(2) {\r\n    width:25%;\r\n}\r\n\r\n#database-table thead td:nth-child(3) {\r\n    width:15%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/database/database.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!databaseService.connected\">\r\n  <h4>Use JSON File:</h4>\r\n  <p>\r\n    Click here to store/pull data from a local JSON file.\r\n  </p>\r\n  <button (click)=\"connectJson()\">Connect to JSON File</button>\r\n\r\n  <br>\r\n\r\n  <h4>Connect your Database:</h4>\r\n  <p>\r\n    Paste your MongoDB url here with credentials and we will connect to your database.\r\n    For instructions on how to create a cloud-hosted database, <a href=\"https://github.com/mattcheah/cover-letter-snippets#setting-up-a-database\">visit the README</a>.\r\n  </p>\r\n  <p>The database string here is a test sandbox for anyone to use. Please play nice.</p>\r\n  <input [(ngModel)]=\"databaseString\"/><br>\r\n  <button [ngClass]=\"{inactive: databaseString == ''}\" (click)=\"connect(databaseString)\">Connect to Database</button>\r\n</div>\r\n\r\n<div *ngIf=\"databaseService.showDatabase\">\r\n  <p>Your Snippets Database has {{databaseService.database.length}} entries.</p>\r\n  <div class=\"table-container\">\r\n\r\n    <table id=\"database-table\">\r\n      <thead>\r\n        <tr>\r\n          <td>Snippet</td>\r\n          <td>Categories</td>\r\n          <!-- <td>Edit</td> -->\r\n          <td>Delete</td>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let snippet of databaseService.database\">\r\n          <td class=\"snippet\">{{snippet.snippet}}</td>\r\n          <td class=\"categories\">{{snippet.categories}}</td>\r\n          <!-- <td><a (click)=\"deleteRecord(snippet.id)\">Edit</a></td> -->\r\n          <td class=\"delete\"><a (click)=\"deleteRecord(snippet._id)\">Delete</a></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/database/database.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_database_service__ = __webpack_require__("./src/app/services/database.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatabaseComponent = /** @class */ (function () {
    function DatabaseComponent(databaseService) {
        this.databaseService = databaseService;
        this.showConnectForm = true;
        this.databaseString = "mongodb://user:testtest1@ds119660.mlab.com:19660/snippets-sandbox";
    }
    DatabaseComponent.prototype.ngOnInit = function () {
    };
    DatabaseComponent.prototype.connectJson = function () {
        this.databaseService.startConnectionJson();
    };
    DatabaseComponent.prototype.connect = function (connectString) {
        // console.log("connecting to mongoose db: response is:");
        this.databaseService.startConnection(connectString);
    };
    DatabaseComponent.prototype.deleteRecord = function (id) {
        // console.log("delete id: "+id);
        this.databaseService.deleteSnippet(id);
    };
    DatabaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-database',
            template: __webpack_require__("./src/app/database/database.component.html"),
            styles: [__webpack_require__("./src/app/database/database.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_database_service__["a" /* DatabaseService */]])
    ], DatabaseComponent);
    return DatabaseComponent;
}());



/***/ }),

/***/ "./src/app/export/export.component.css":
/***/ (function(module, exports) {

module.exports = "textarea {\r\n  height:500px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/export/export.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"export-container\">\n  <h4>Exported Cover Letter:</h4>\n  <p>You may edit your cover letter, and copy/paste it from here to whatever medium you are using to apply for jobs.</p>\n  <textarea [(ngModel)]=\"coverLetterService.exported\"></textarea>\n  <p>Need to edit something? Click the button below to go back.</p>\n  <p>WARNING: Any changes you made in this text form will not be saved!</p>\n  <button [routerLink]=\"['/build-cover-letter']\" (click)=\"statusMessageService.clearStatus()\">Go Back to Building Cover Letter</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/export/export.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cover_letter_service__ = __webpack_require__("./src/app/services/cover-letter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_status_message_service__ = __webpack_require__("./src/app/services/status-message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExportComponent = /** @class */ (function () {
    function ExportComponent(coverLetterService, statusMessageService) {
        this.coverLetterService = coverLetterService;
        this.statusMessageService = statusMessageService;
    }
    ExportComponent.prototype.ngOnInit = function () {
    };
    ExportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-export',
            template: __webpack_require__("./src/app/export/export.component.html"),
            styles: [__webpack_require__("./src/app/export/export.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cover_letter_service__["a" /* CoverLetterService */],
            __WEBPACK_IMPORTED_MODULE_2__services_status_message_service__["a" /* StatusMessageService */]])
    ], ExportComponent);
    return ExportComponent;
}());



/***/ }),

/***/ "./src/app/has-keywords.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HasKeywordsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HasKeywordsPipe = /** @class */ (function () {
    function HasKeywordsPipe() {
    }
    HasKeywordsPipe.prototype.transform = function (value, args) {
        // Only return categories if there is at least 1 keyword in the job description
        return value.filter(function (cat) { return cat.jobKeywords > 0; });
    };
    HasKeywordsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'hasKeywords'
        })
    ], HasKeywordsPipe);
    return HasKeywordsPipe;
}());



/***/ }),

/***/ "./src/app/job-description/job-description.component.css":
/***/ (function(module, exports) {

module.exports = "#keyword-results-table-container {\r\n    max-height:160px;\r\n}\r\n\r\n/* #keyword-results-table thead td, #filtered-snippets-table thead td {\r\n    font-size:14px;\r\n    color:white;\r\n} */\r\n\r\n#keyword-results-table tbody td {\r\n    font-size:10px;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/job-description/job-description.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h4>Job Description</h4>\n<p>Enter the job description here, and Snippets will parse it in order to find the keywords (skills, experience, languages) that match previous cover letter information that you have written.</p>\n<textarea ref-textarea [(ngModel)]=\"descriptionContent\" placeholder=\"Copy/Paste a job description here\" ></textarea>\n<button (click)=\"submitDescription(descriptionContent)\">Parse Job Description</button>\n\n\n\n"

/***/ }),

/***/ "./src/app/job-description/job-description.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobDescriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_parse_description_service__ = __webpack_require__("./src/app/services/parse-description.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_status_message_service__ = __webpack_require__("./src/app/services/status-message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobDescriptionComponent = /** @class */ (function () {
    function JobDescriptionComponent(parseDescriptionService, statusMessageService) {
        this.parseDescriptionService = parseDescriptionService;
        this.statusMessageService = statusMessageService;
    }
    JobDescriptionComponent.prototype.ngOnInit = function () {
    };
    JobDescriptionComponent.prototype.submitDescription = function (description) {
        this.parseDescriptionService.parseDescription(description);
    };
    JobDescriptionComponent.prototype.enterNewDescription = function () {
        this.descriptionContent = "";
        this.parseDescriptionService.showParsingResults = false;
        this.statusMessageService.newStatusMessage("Resetting Job Description", "warning");
    };
    JobDescriptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-job-description',
            template: __webpack_require__("./src/app/job-description/job-description.component.html"),
            styles: [__webpack_require__("./src/app/job-description/job-description.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_parse_description_service__["a" /* ParseDescriptionService */],
            __WEBPACK_IMPORTED_MODULE_2__services_status_message_service__["a" /* StatusMessageService */]])
    ], JobDescriptionComponent);
    return JobDescriptionComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = "ul {\r\n  list-style-type: none;\r\n}\r\n\r\nli a {\r\n  color:#b0ccea;\r\n}\r\n\r\nli .is-active {\r\n  color:white;\r\n  font-weight:700;\r\n}\r\n\r\nli .disabled {\r\n  cursor:not-allowed !important;\r\n  color:#555 !important;\r\n  text-decoration:none;\r\n}\r\n\r\n/* .is-active {\r\n  color:#7ca0c5;\r\n} */\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"flex\">\n  <li><a [routerLink]=\"['']\" [routerLinkActive]=\"['is-active']\" [routerLinkActiveOptions]=\"{ exact: true }\">Connect Database</a></li>\n\n  <li *ngIf=\"databaseService.connected\"><a [routerLink]=\"['add-snippet']\" [routerLinkActive]=\"['is-active']\" [routerLinkActiveOptions]=\"{ exact: true }\" [ngClass]=\"{disabled: !databaseService.connected}\">Add Snippets</a></li>\n  <li *ngIf=\"!databaseService.connected\"><a class=\"disabled\">Add Snippets</a></li>\n\n  <li *ngIf=\"databaseService.connected\"><a [routerLink]=\"['build-cover-letter']\" [routerLinkActive]=\"['is-active']\" [routerLinkActiveOptions]=\"{ exact: true }\">Build Cover Letter</a></li>\n  <li *ngIf=\"!databaseService.connected\"><a class=\"disabled\">Build Cover Letter</a></li>\n\n  <li *ngIf=\"coverLetterService.addedSnippets.length != 0\"><a [routerLink]=\"['export-cover-letter']\" [routerLinkActive]=\"['is-active']\">Export Cover Letter</a></li>\n  <li *ngIf=\"coverLetterService.addedSnippets.length == 0\"><a  class=\"disabled\">Export Cover Letter</a></li>\n</ul>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_database_service__ = __webpack_require__("./src/app/services/database.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cover_letter_service__ = __webpack_require__("./src/app/services/cover-letter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = /** @class */ (function () {
    function NavComponent(databaseService, coverLetterService) {
        this.databaseService = databaseService;
        this.coverLetterService = coverLetterService;
        this.coverLetterLinkDisabled = (this.coverLetterService.addedSnippets.length == 0);
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_database_service__["a" /* DatabaseService */],
            __WEBPACK_IMPORTED_MODULE_2__services_cover_letter_service__["a" /* CoverLetterService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/results/results.component.css":
/***/ (function(module, exports) {

module.exports = "#filtered-snippets-table thead td:first-child {\r\n    width:75%;\r\n}\r\n\r\n#filtered-snippets-table thead td:nth-child(2) {\r\n    max-width:25%;\r\n}\r\n\r\nbutton {\r\n  margin: 0 auto;\r\n  display: block;\r\n}\r\n\r\n#intro-outro {\r\n  margin:20px 0\r\n}\r\n"

/***/ }),

/***/ "./src/app/results/results.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"results\">\n\n  <div class=\"line-break\"></div>\n\n  <div class=\"flex\">\n    <button (click)=\"enterNewDescription()\">Enter new job description</button>\n  </div>\n\n  <div class=\"line-break\"></div>\n\n  <h4>Results for the job description:</h4>\n  <small>{{parseDescriptionService.jobDescription.substring(0,200)}}...</small>\n\n  <div id=\"keyword-results-table-container\" class=\"table-container\">\n    <table id=\"keyword-results-table\">\n      <thead>\n        <tr>\n          <td>Category/Keyword:</td>\n          <td>Times Mentioned:</td>\n          <td>Show snippets for Category</td>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let keyword of parseDescriptionService.keywordArray | hasKeywords\">\n          <td>{{ keyword.keyword }}</td>\n          <td>{{ keyword.jobKeywords }}</td>\n          <td>\n            <a (click)=\"displaySnippets(keyword.keyword)\">Show Snippets</a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div id=\"intro-outro\" class=\"flex\">\n    <button (click)=\"displaySnippets('intro')\">Show Intros</button>\n    <button (click)=\"displaySnippets('outro')\">Show Outros</button>\n  </div>\n\n  <div *ngIf=\"showFilteredSnippetsTable\">\n    <div class=\"line-break\"></div>\n\n    <h4>Snippets from Category: {{ displayedCategory }}</h4>\n    <div id=\"filtered-snippets-table-container\" class=\"table-container\" >\n      <table id=\"filtered-snippets-table\">\n        <thead>\n          <tr>\n            <td>Snippet</td>\n            <!-- <td>Categories</td> -->\n            <td>Add to Letter</td>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let snippet of filteredSnippets\">\n            <td class=\"snippet\">{{snippet.snippet}}</td>\n            <!-- <td class=\"categories\">{{snippet.categories}}</td> -->\n            <td class=\"add\" (click)=\"coverLetterService.addSnippet(snippet)\">\n              <a>Add</a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/results/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_parse_description_service__ = __webpack_require__("./src/app/services/parse-description.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_status_message_service__ = __webpack_require__("./src/app/services/status-message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_database_service__ = __webpack_require__("./src/app/services/database.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cover_letter_service__ = __webpack_require__("./src/app/services/cover-letter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(parseDescriptionService, coverLetterService, databaseService, statusMessageService) {
        this.parseDescriptionService = parseDescriptionService;
        this.coverLetterService = coverLetterService;
        this.databaseService = databaseService;
        this.statusMessageService = statusMessageService;
        this.displayedCategory = "";
        this.showFilteredSnippetsTable = false;
    }
    ResultsComponent.prototype.ngOnInit = function () {
    };
    ResultsComponent.prototype.displaySnippets = function (keyword) {
        this.filteredSnippets = [];
        var snippets = this.databaseService.database;
        for (var i = 0; i < snippets.length; i++) {
            if (snippets[i].categories.includes(keyword))
                this.filteredSnippets.push(snippets[i]);
        }
        this.displayedCategory = keyword;
        this.showFilteredSnippetsTable = true;
        this.statusMessageService.newStatusMessage("Displaying Snippets from category: " + keyword, "primary");
    };
    ResultsComponent.prototype.enterNewDescription = function () {
        this.filteredSnippets = [];
        this.showFilteredSnippetsTable = false;
        this.parseDescriptionService.showParsingResults = false;
        this.parseDescriptionService.jobDescription = "";
        this.parseDescriptionService.keywordArray = [];
        this.statusMessageService.newStatusMessage("Resetting Job Description", "warning");
    };
    ResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-results',
            template: __webpack_require__("./src/app/results/results.component.html"),
            styles: [__webpack_require__("./src/app/results/results.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_parse_description_service__["a" /* ParseDescriptionService */],
            __WEBPACK_IMPORTED_MODULE_4__services_cover_letter_service__["a" /* CoverLetterService */],
            __WEBPACK_IMPORTED_MODULE_3__services_database_service__["a" /* DatabaseService */],
            __WEBPACK_IMPORTED_MODULE_2__services_status_message_service__["a" /* StatusMessageService */]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/services/cover-letter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoverLetterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_status_message_service__ = __webpack_require__("./src/app/services/status-message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoverLetterService = /** @class */ (function () {
    function CoverLetterService(statusMessageService) {
        this.statusMessageService = statusMessageService;
        this.addedSnippets = [];
        this.exported = "";
    }
    CoverLetterService.prototype.addSnippet = function (snippet) {
        for (var i = 0; i < this.addedSnippets.length; i++) {
            if (this.addedSnippets[i]._id == snippet._id) {
                return;
            }
        }
        this.addedSnippets.push(snippet);
        this.statusMessageService.newStatusMessage("Added Snippet to the Cover Letter", "primary");
    };
    CoverLetterService.prototype.moveSnippet = function (index, up) {
        var temp = this.addedSnippets[index];
        var swapIndex = up ? -1 : 1;
        this.addedSnippets[index] = this.addedSnippets[index + swapIndex];
        this.addedSnippets[index + swapIndex] = temp;
    };
    CoverLetterService.prototype.removeSnippet = function (index) {
        this.addedSnippets.splice(index, 1);
        this.statusMessageService.newStatusMessage("Removed Snippet from Cover Letter", "primary");
    };
    CoverLetterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_status_message_service__["a" /* StatusMessageService */]])
    ], CoverLetterService);
    return CoverLetterService;
}());



/***/ }),

/***/ "./src/app/services/database.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__status_message_service__ = __webpack_require__("./src/app/services/status-message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatabaseService = /** @class */ (function () {
    function DatabaseService(statusMessageService) {
        this.statusMessageService = statusMessageService;
        this.connected = false;
        this.showDatabase = false;
        this.databaseStream = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](undefined);
        this.categories = {};
    }
    // getDatabaseStream():Observable<{}> {
    //   return this.databaseStream.asObservable();
    // }
    DatabaseService.prototype.startConnection = function (urlString) {
        var self = this;
        var dataObj = { databaseUrl: urlString };
        fetch('api/connect-to-database', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(dataObj)
        }).then(function (res) {
            return res.json();
        }).then(function (data) {
            if ('error' in data) {
                self.statusMessageService.newStatusMessage('There was an error connecting to the database: ' + data.error, 'error');
            }
            else if (data.connected) {
                self.database = data.data;
                self.statusMessageService.newStatusMessage(data.responseMessage, 'success');
                self.extractCategories();
                self.connected = true;
                self.showDatabase = true;
            }
        }).catch(function (err) {
            console.log('Error: ' + err);
            self.statusMessageService.newStatusMessage('There was an error connecting to the database: ' + err, 'error');
        });
    };
    DatabaseService.prototype.startConnectionJson = function () {
        var self = this;
        fetch('api/get-json-data', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            }
        }).then(function (res) {
            return res.json();
        }).then(function (data) {
            if ('error' in data) {
                self.statusMessageService.newStatusMessage('There was an error connecting to the JSON File: ' + data.error, 'error');
            }
            else if (data.connected) {
                self.database = data.data;
                self.statusMessageService.newStatusMessage(data.responseMessage, 'success');
                self.extractCategories();
                self.connected = true;
                self.showDatabase = true;
            }
        }).catch(function (err) {
            console.log('Error: ' + err);
            self.statusMessageService.newStatusMessage('There was an error connecting to the JSON File: ' + err, 'error');
        });
    };
    DatabaseService.prototype.addSnippet = function (snippet, categories) {
        var self = this;
        var data = { snippet: snippet, categories: categories };
        fetch('api/add-snippet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(data)
        }).then(function (res) { return res.json(); }).then(function (data) {
            self.statusMessageService.newStatusMessage(data.responseMessage, 'success');
            self.database = data.data;
            self.extractCategories();
        }).catch(function (error) {
            console.log('Error: ' + error);
            self.statusMessageService.newStatusMessage('There was an error submitting your snippet: ' + error, 'error');
        });
    };
    DatabaseService.prototype.deleteSnippet = function (id) {
        var self = this;
        var data = { id: id };
        fetch('api/delete-snippet', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(data)
        }).then(function (res) { return res.json(); }).then(function (data) {
            self.statusMessageService.newStatusMessage(data.responseMessage, 'success');
            self.database = data.data;
            self.extractCategories();
        }).catch(function (err) {
            self.statusMessageService.newStatusMessage(err, 'error');
        });
    };
    DatabaseService.prototype.extractCategories = function () {
        for (var i = 0; i < this.database.length; i++) {
            var record = this.database[i];
            for (var j = 0; j < record.categories.length; j++) {
                var category = record.categories[j];
                if (!(category in this.categories)) {
                    this.categories[category] = {
                        ids: [],
                        jobKeywords: 0
                    };
                }
                this.categories[category].ids.push(record);
            }
        }
        console.log('categories:');
        console.log(this.categories);
    };
    DatabaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__status_message_service__["a" /* StatusMessageService */]])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ }),

/***/ "./src/app/services/parse-description.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParseDescriptionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_service__ = __webpack_require__("./src/app/services/database.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__status_message_service__ = __webpack_require__("./src/app/services/status-message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParseDescriptionService = /** @class */ (function () {
    function ParseDescriptionService(databaseService, statusMessageService) {
        this.databaseService = databaseService;
        this.statusMessageService = statusMessageService;
        this.jobDescription = "";
        this.showParsingResults = false;
    }
    ParseDescriptionService.prototype.parseDescription = function (description) {
        this.resetJobKeywords();
        this.jobDescription = description;
        var descriptionWords = description.split(/\W/);
        for (var i = 0; i < descriptionWords.length; i++) {
            var word = descriptionWords[i].toLowerCase();
            if (word in this.databaseService.categories) {
                this.databaseService.categories[word].jobKeywords++;
            }
        }
        this.keywordArray = this.createOrderedArray();
        this.showParsingResults = true;
    };
    ParseDescriptionService.prototype.resetJobKeywords = function () {
        var keywords = Object.keys(this.databaseService.categories);
        for (var i = 0; i < keywords.length; i++) {
            this.databaseService.categories[keywords[i]].jobKeywords = 0;
        }
    };
    ParseDescriptionService.prototype.createOrderedArray = function () {
        var keywords = Object.keys(this.databaseService.categories);
        var keywordsArray = [];
        for (var i = 0; i < keywords.length; i++) {
            this.databaseService.categories[keywords[i]].keyword = keywords[i];
            keywordsArray.push(this.databaseService.categories[keywords[i]]);
        }
        function quicksortByJobKeywords(arr, left, right) {
            if (left < right) {
                var divider = divide(arr, left, right);
                quicksortByJobKeywords(arr, left, divider - 1);
                quicksortByJobKeywords(arr, divider + 1, right);
            }
            return arr;
        }
        function divide(arr, left, right) {
            var dividerIndex = left;
            var pivot = right;
            for (var i = left; i < right; i++) {
                if (arr[i].jobKeywords > arr[pivot].jobKeywords) {
                    swap(arr, i, dividerIndex);
                    dividerIndex++;
                }
            }
            swap(arr, pivot, dividerIndex);
            return dividerIndex;
        }
        function swap(arr, a, b) {
            var temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
        }
        quicksortByJobKeywords(keywordsArray, 0, keywordsArray.length - 1);
        var statusMessage = "Finished parsing the description. The category with the most keywords in this job description is: " + keywordsArray[0].keyword + " with " + keywordsArray[0].jobKeywords + " keywords.";
        this.statusMessageService.newStatusMessage(statusMessage, "success");
        return keywordsArray;
    };
    ParseDescriptionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_service__["a" /* DatabaseService */], __WEBPACK_IMPORTED_MODULE_2__status_message_service__["a" /* StatusMessageService */]])
    ], ParseDescriptionService);
    return ParseDescriptionService;
}());



/***/ }),

/***/ "./src/app/services/status-message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusMessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatusMessageService = /** @class */ (function () {
    function StatusMessageService() {
        this.statusMessageStream = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](undefined);
    }
    StatusMessageService.prototype.getStatusMessageStream = function () {
        return this.statusMessageStream.asObservable();
    };
    StatusMessageService.prototype.newStatusMessage = function (status, cssClass) {
        this.statusMessageStream.next({
            status: status,
            cssClass: cssClass
        });
    };
    StatusMessageService.prototype.clearStatus = function () {
        this.statusMessageStream.next({
            status: "",
            cssClass: ""
        });
    };
    StatusMessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StatusMessageService);
    return StatusMessageService;
}());



/***/ }),

/***/ "./src/app/status-message/status-message.component.css":
/***/ (function(module, exports) {

module.exports = "#status {\r\n    width:100%;\r\n    max-width:38em;\r\n    padding: 0px 15px;\r\n    border:1px solid #c9c9c9;\r\n    text-align:left;\r\n    color:#c9c9c9;\r\n    border-radius:3px;\r\n    margin:20px 0 0 -13px;\r\n    background-color: rgba(200,200,200,.3);\r\n    position: fixed;\r\n    bottom: 0px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n#status.success {\r\n    color:green;\r\n    border-color:green;\r\n    background-color:#9bca9b;\r\n}\r\n\r\n#status.error {\r\n    color: #c14242;\r\n    border-color: #b54242;\r\n    background-color: #5a2c2c;\r\n}\r\n\r\n#status.primary {\r\n    color: #8fcef3;\r\n    border-color: #596c77;\r\n    background-color: #596c77;\r\n}\r\n\r\n#status.warning {\r\n    color: #856404;\r\n    background-color: #fff3cd;\r\n    border-color: #ffeeba;\r\n}\r\n"

/***/ }),

/***/ "./src/app/status-message/status-message.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"status\" *ngIf=\"statusMessage !== ''\" [ngClass]=\"statusClass\">\n<p>\n  {{statusMessage}}\n</p>\n</div>"

/***/ }),

/***/ "./src/app/status-message/status-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_status_message_service__ = __webpack_require__("./src/app/services/status-message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatusMessageComponent = /** @class */ (function () {
    function StatusMessageComponent(statusMessageService) {
        this.statusMessageService = statusMessageService;
        this.statusMessage = "";
        this.statusClass = "primary";
    }
    StatusMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var statusObservable = this.statusMessageService.getStatusMessageStream();
        statusObservable.subscribe(function (d) {
            if (d !== undefined) {
                _this.statusMessage = d.status;
                _this.statusClass = d.cssClass;
            }
        });
    };
    StatusMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-status-message',
            template: __webpack_require__("./src/app/status-message/status-message.component.html"),
            styles: [__webpack_require__("./src/app/status-message/status-message.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_status_message_service__["a" /* StatusMessageService */]])
    ], StatusMessageComponent);
    return StatusMessageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
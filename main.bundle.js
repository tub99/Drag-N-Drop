webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_error_page_error_page_component__ = __webpack_require__("../../../../../src/app/components/error-page/error-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interactives_sod_home_sod_home_component__ = __webpack_require__("../../../../../src/app/interactives/sod-home/sod-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interactives_drag_drop_drag_drop_component__ = __webpack_require__("../../../../../src/app/interactives/drag-drop/drag-drop.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__interactives_drag_drop_drag_drop_component__["a" /* DragDropComponent */] },
    {
        path: 'sorting-open-defined/:url', component: __WEBPACK_IMPORTED_MODULE_4__interactives_sod_home_sod_home_component__["a" /* SodHomeComponent */],
        children: [
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_4__interactives_sod_home_sod_home_component__["a" /* SodHomeComponent */] }
        ]
    }, {
        path: 'drag-drop/:url', component: __WEBPACK_IMPORTED_MODULE_5__interactives_drag_drop_drag_drop_component__["a" /* DragDropComponent */],
        children: [
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_5__interactives_drag_drop_drag_drop_component__["a" /* DragDropComponent */] }
        ]
    },
    {
        path: 'click-to-choose',
        // canActivate: [],
        canActivateChild: [],
        component: __WEBPACK_IMPORTED_MODULE_2__components_navigation_navigation_component__["a" /* NavigationComponent */]
    },
    // { path: 'not-found', component: PageNotFoundComponent },
    { path: 'not-found', component: __WEBPACK_IMPORTED_MODULE_3__components_error_page_error_page_component__["a" /* ErrorPageComponent */], data: { message: 'Page not found!' } },
    { path: '**', redirectTo: '/not-found' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,400i,600,700,700i,800,900');\nbody {\n  font-family: 'Montserrat', sans-serif;\n}\n.display-overlay {\n  display: block !important;\n}\n.overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 10000;\n  display: none;\n}\n*:active {\n  outline: none;\n}\n*:focus {\n  outline: none;\n}\n.show-focus-outlines *:active {\n  outline: none;\n  border: 2px solid #057bb4;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);\n}\n.show-focus-outlines *:focus {\n  outline: none;\n  border: 2px solid #057bb4;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_commonservice_service__ = __webpack_require__("../../../../../src/app/common/services/commonservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(CommonserviceService) {
        this.CommonserviceService = CommonserviceService;
        this.title = 'app';
        this.playStart = false;
        /* next and previous button status */
        this.prevBtnDisable = true;
        this.nxtBtnDisable = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // service call for template data information
		debugger;
        this.templateDataUrl = "sod_t4_v1_u1_w1___ph_act1__.xml";
        this.CommonserviceService.getXMLDataFromFactory(this.templateDataUrl)
            .subscribe(function (data) {
            _this.data = data['sorting_open_defined'];
        });
        // service call for instruction data information
        this.instructionDaraUrl = "sorting_open_defined_single_help.xml";
        this.CommonserviceService.getXMLDataFromFactory(this.instructionDaraUrl)
            .subscribe(function (data) {
            _this.instructionData = data.help.text;
        });
    };
    /* send pagination number */
    AppComponent.prototype.getNumOfPg = function () {
        return this.data.levels.level.rounds.round;
    };
    /* send header information */
    AppComponent.prototype.getHeaderInfo = function () {
        var headTitle = this.data.title.replace("<h1>", "").replace("</h1>", "");
        return {
            headingTitle: headTitle,
            backGround: ''
        };
    };
    /* send instruction to instruction modal */
    AppComponent.prototype.getInstructionInfo = function () {
        return {
            instructionTxt: this.instructionData,
            audioSrc: 'niraj'
        };
    };
    /* send template data */
    AppComponent.prototype.getTemplateData = function () {
        return this.data;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_services_commonservice_service__["a" /* CommonserviceService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_error_page_error_page_component__ = __webpack_require__("../../../../../src/app/components/error-page/error-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_instruction_instruction_component__ = __webpack_require__("../../../../../src/app/components/instruction/instruction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_endscreen_result_screen_component__ = __webpack_require__("../../../../../src/app/components/endscreen/result-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_services_commonservice_service__ = __webpack_require__("../../../../../src/app/common/services/commonservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__interactives_sorting_open_defined_sod_component__ = __webpack_require__("../../../../../src/app/interactives/sorting_open_defined/sod.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__interactives_sod_home_sod_home_component__ = __webpack_require__("../../../../../src/app/interactives/sod-home/sod-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__interactives_drag_drop_drag_drop_component__ = __webpack_require__("../../../../../src/app/interactives/drag-drop/drag-drop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__interactives_drag_drop_assignment_assignment_component__ = __webpack_require__("../../../../../src/app/interactives/drag-drop/assignment/assignment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__interactives_drag_drop_assignment_question_question_component__ = __webpack_require__("../../../../../src/app/interactives/drag-drop/assignment/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__interactives_drag_drop_assignment_option_option_component__ = __webpack_require__("../../../../../src/app/interactives/drag-drop/assignment/option/option.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__common_services_dragdropservice_service__ = __webpack_require__("../../../../../src/app/common/services/dragdropservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__interactives_drag_drop_assignment_validator_validator_component__ = __webpack_require__("../../../../../src/app/interactives/drag-drop/assignment/validator/validator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_services_user_response_service__ = __webpack_require__("../../../../../src/app/common/services/user-response.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/* common components */





/* services */

/* template components */









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_instruction_instruction_component__["a" /* InstructionComponent */],
                __WEBPACK_IMPORTED_MODULE_11__interactives_sorting_open_defined_sod_component__["a" /* sortingOpenDefinedComponent */],
                __WEBPACK_IMPORTED_MODULE_12__interactives_sod_home_sod_home_component__["a" /* SodHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_error_page_error_page_component__["a" /* ErrorPageComponent */],
                __WEBPACK_IMPORTED_MODULE_13__interactives_drag_drop_drag_drop_component__["a" /* DragDropComponent */],
                __WEBPACK_IMPORTED_MODULE_14__interactives_drag_drop_assignment_assignment_component__["a" /* AssignmentComponent */],
                __WEBPACK_IMPORTED_MODULE_15__interactives_drag_drop_assignment_question_question_component__["a" /* QuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_16__interactives_drag_drop_assignment_option_option_component__["a" /* OptionComponent */],
                __WEBPACK_IMPORTED_MODULE_18__interactives_drag_drop_assignment_validator_validator_component__["a" /* ValidatorComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_endscreen_result_screen_component__["a" /* ResultScreenComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__common_services_commonservice_service__["a" /* CommonserviceService */], __WEBPACK_IMPORTED_MODULE_17__common_services_dragdropservice_service__["a" /* DragdropService */], __WEBPACK_IMPORTED_MODULE_19__common_services_user_response_service__["a" /* UserResponseService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/common/services/commonservice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonserviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommonserviceService = (function () {
    function CommonserviceService(_http) {
        this._http = _http;
        /*  ok button status update starts*/
        this.enableOkBtnStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](0);
        this.enableOkBtn = this.enableOkBtnStatus.asObservable();
        /* ok button status update ends*/
        /* previous next button click update starts*/
        this.prevNxtStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.gotoPrevNext = this.prevNxtStatus.asObservable();
        /* previous next button click update ends*/
        /* modal status update starts */
        this.modalStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('none');
        this.cast = this.modalStatus.asObservable();
        /* modal status update ends */
        /* next previous button enable disable status update starts */
        this.nxtPrevEnblDisbl = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({});
        this.nxtPrevEnblDisblStatus = this.nxtPrevEnblDisbl.asObservable();
    }
    // change previous next button status
    CommonserviceService.prototype.okBtnStatus = function (status) {
        this.enableOkBtnStatus.next(status);
    };
    // change previous next button status
    CommonserviceService.prototype.chngPrevNxtStatus = function (status) {
        this.prevNxtStatus.next(status);
    };
    // help screen modal status update
    CommonserviceService.prototype.editStatus = function (status) {
        this.modalStatus.next(status);
    };
    // help screen modal status update
    CommonserviceService.prototype.chngPrevNxtEnblDisbl = function (status) {
        this.nxtPrevEnblDisbl.next(status);
    };
    /* next previous button enable disable status update ends */
    /* make http service call */
    CommonserviceService.prototype.getXMLDataFromFactory = function (url) {
        var curLocation = location.origin;
        return this._http.get("./assets/iteractives/sorting_open_defined/data/" + url)
            .map(function (response) {
            var x2js = new X2JS();
            var aftCnv = x2js.xml_str2json(response["_body"]);
            return aftCnv;
        })
            .catch(this.handleError);
    };
    CommonserviceService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    CommonserviceService.prototype.setData = function () {
    };
    CommonserviceService.prototype.getData = function () {
        return this.parsedData.sorting_open_defined;
    };
    CommonserviceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], CommonserviceService);
    return CommonserviceService;
}());



/***/ }),

/***/ "../../../../../src/app/common/services/dragdropservice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragdropService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_commonservice_service__ = __webpack_require__("../../../../../src/app/common/services/commonservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var currentScope;
var DragdropService = (function () {
    function DragdropService(CommonserviceService) {
        this.CommonserviceService = CommonserviceService;
        this.accessFlag = false;
        this.numberOfChildrenPresent = 0;
        this.dropPos = {};
        this.topPos = 0;
        this.stackTop = 0;
        this.selectedOptions = {};
        this.dragElement = "";
        currentScope = this;
    }
    /* make options draggable */
    DragdropService.prototype.makeDraggable = function (dragElmList) {
        var elmList = jQuery(dragElmList)[0];
        var _loop_1 = function (elm) {
            jQuery(elm).children('span')
                .draggable({
                containment: ".main-wrapper",
                scroll: false,
                revert: "invalid",
                start: function () {
                    jQuery(elm).css("border", "none");
                },
                stop: function () {
                    jQuery(elm).css("border", "");
                }
            });
        };
        for (var _i = 0, _a = elmList.children; _i < _a.length; _i++) {
            var elm = _a[_i];
            _loop_1(elm);
        }
    };
    /* make drop areas droppable */
    DragdropService.prototype.makeDroppable = function (dropElmList, dragElmList) {
        var elmList = jQuery(dropElmList)[0], dragElm = jQuery(dragElmList);
        // making ans container also droppable
        jQuery(dragElm)
            .droppable({
            greedy: true,
            drop: this.onDrop
        });
        // make answer containers droppable      
        for (var _i = 0, _a = elmList.children; _i < _a.length; _i++) {
            var elm = _a[_i];
            jQuery(elm).children('div')
                .droppable({
                greedy: true,
                drop: this.onDrop
            });
        }
    };
    /* on drop function */
    DragdropService.prototype.onDrop = function (event, ui) {
        var holderDrop = jQuery(this).eq(0).find('.drop-holder');
        if (holderDrop[0]) {
            var $this = this.accessFlag === true ? jQuery(document.activeElement) : holderDrop;
        }
        else {
            var $this = this.accessFlag === true ? jQuery(document.activeElement) : jQuery(this);
        }
        if (jQuery(event.target).attr("class").indexOf("input-texts") > -1) {
            currentScope.onDropOnContainer(event, ui, $this);
            return;
        }
        // if ($this[0].id.indexOf(mhePocConstants.dropHolder) > -1) {
        if ($this[0].id.indexOf("dropHolder") > -1) {
            this.numberOfChildrenPresent = $this.children().length + 2;
        }
        ui.draggable.position({
            my: "center",
            at: "top",
            of: $this,
            using: function (pos) {
                currentScope.usingOnDropFn(pos, ui, $this, this);
            }
        });
        currentScope.reAlignFunction();
    };
    DragdropService.prototype.onDropOnContainer = function (event, ui, $this) {
        var $newPosX = ui.offset.left - jQuery($this).offset().left, $newPosY = ui.offset.top - jQuery($this).offset().top, dragItem = ui.draggable[0], id = dragItem.id.split("draggable")[1], ansBox = "droppable" + id, ansBoxID = "#" + ansBox, destOffset = jQuery(ansBoxID).offset(), parentBoxOffset = jQuery("#main-drop-container").offset(), dropPosition = {
            left: $newPosX,
            top: $newPosY
        };
        var pos = {};
        pos["left"] = destOffset.left - parentBoxOffset.left / 2 - dropPosition.left - ui.draggable.width() / 2;
        pos["top"] = destOffset.top - parentBoxOffset.top - dropPosition.top + ui.draggable.height() / 2;
        jQuery(ui.draggable).animate({
            left: "+=" + pos["left"],
            top: "+=" + pos["top"]
        }, {
            easing: "linear",
            duration: 300,
            complete: function () {
                currentScope.completeOnDropContainerFn(ui, $this);
            }
        });
    };
    DragdropService.prototype.completeOnDropContainerFn = function (ui, $this) {
        var dragItem = ui.draggable[0], id = dragItem.id.split("draggable")[1], ansBox = "droppable" + id, $destination = document.getElementById(ansBox);
        jQuery($destination).append(dragItem);
        jQuery(dragItem).draggable();
        currentScope.dropPos[dragItem.id] = 0;
        var left = $this[0].offsetWidth / 2;
        if ($this[0].id.indexOf("dropHolder") > -1) {
            ui.draggable.css({
                "display": "block",
                "position": "relative",
                "top": 0,
                "left": 0
            });
        }
        else {
            ui.draggable.css({
                "display": "inline",
                "position": "relative",
                "top": 0,
                "left": 0
            });
        }
        if (!currentScope.selectedOptions[$this[0].id] && $this[0].id.indexOf("dropHolder") >= 0) {
            currentScope.selectedOptions[$this[0].id] = [];
        }
        for (var i in currentScope.selectedOptions) {
            for (var j = 0; j < currentScope.selectedOptions[i].length; j++) {
                if (currentScope.selectedOptions[i][j] === ui.draggable[0]) {
                    currentScope.selectedOptions[i].splice(j, 1);
                    break;
                }
            }
        }
        //on drop back to insert-text div.
        var total = currentScope.getLengthOfOptions();
        this.CommonserviceService.okBtnStatus(total);
    };
    DragdropService.prototype.usingOnDropFn = function (pos, ui, $this, that) {
        if (currentScope.dropPos[ui.draggable[0].id]) {
            currentScope.dropPos[ui.draggable[0].id].left = currentScope.dropPos[ui.draggable[0].id].left + pos.left;
            currentScope.dropPos[ui.draggable[0].id].top = pos.top;
        }
        else {
            currentScope.dropPos[ui.draggable[0].id] = pos;
        }
        if (currentScope.numberOfChildrenPresent > 0) {
            pos.top += currentScope.numberOfChildrenPresent * ui.draggable.height();
        }
        if (!currentScope.topPos) {
            currentScope.topPos = 1;
            currentScope.stackTop = pos.top;
        }
        if ($this[0].classList.contains("droppable-initial")) {
            pos.left = ui.offset.left - jQuery($this).offset().left;
            pos.top = pos.top + ui.draggable.height() / 2;
        }
        jQuery(that).animate(pos, {
            easing: "linear",
            duration: 300,
            complete: function () {
                currentScope.completeOnDropFn(ui, $this);
            }
        });
    };
    DragdropService.prototype.reAlignFunction = function () {
        jQuery(".droppable").each(function () {
            var $bin = this;
            for (var i = 0; i < $bin.children.length; i++) {
                if (i === 0) {
                    if (parseFloat($bin.children[i].style.top) > currentScope.topPos) {
                        $bin.children[i].style.top = currentScope.topPos + "px";
                    }
                }
                else {
                    if ((parseFloat($bin.children[i].style.top) - 20) > parseFloat($bin.children[i].style.top)) {
                        $bin.children[i].style.top = (parseFloat($bin.children[i].style.top) + 20) + "px";
                    }
                }
            }
        });
    };
    DragdropService.prototype.completeOnDropFn = function (ui, $this) {
        $this.append(ui.draggable);
        ui.draggable.css("border", "");
        var left = $this[0].offsetWidth / 2;
        if ($this[0].id.indexOf("dropHolder") > -1) {
            ui.draggable.css({
                "display": "block",
                "position": "relative",
                "top": 0,
                "left": 0,
                "padding-top": "5px",
                "width": "auto",
                "height": "auto"
            });
        }
        else {
            ui.draggable.css({
                "display": "inline-block",
                "position": "relative",
                "top": "0px",
                "left": "0px"
            });
        }
        if (!currentScope.selectedOptions[$this[0].id] && $this[0].id.indexOf("dropHolder") >= 0) {
            currentScope.selectedOptions[$this[0].id] = [];
        }
        currentScope.removeFromSelectedOptions(ui.draggable[0]);
        if ($this[0].id.indexOf("dropHolder") >= 0) {
            currentScope.selectedOptions[$this[0].id].push(ui.draggable[0]);
        }
        currentScope.numberOfChildrenPresent = 0;
        var total = currentScope.getLengthOfOptions();
        this.CommonserviceService.okBtnStatus(total);
    };
    DragdropService.prototype.getLengthOfOptions = function () {
        var totalLength = 0;
        for (var i in currentScope.selectedOptions) {
            totalLength = totalLength + currentScope.selectedOptions[i].length;
        }
        return totalLength;
    };
    DragdropService.prototype.removeFromSelectedOptions = function (elm) {
        for (var i in currentScope.selectedOptions) {
            for (var j = 0; j < currentScope.selectedOptions[i].length; j++) {
                if (currentScope.selectedOptions[i][j] === elm) {
                    currentScope.selectedOptions[i].splice(j, 1);
                    break;
                }
            }
        }
    };
    DragdropService.prototype.draggableAccs = function (e) {
        if (e.keycode === 32 || e.which === 32) {
            currentScope.accessFlag = true;
            var droppableElement;
            currentScope.dragElement = document.activeElement;
            var dragElemId = jQuery(document.activeElement).addClass('activeSelected').attr('rel');
            jQuery('.draggable').attr('tabindex', '-1');
            jQuery('.answer-box').eq(0).focus();
            if (jQuery(currentScope.dragElement).parents().hasClass('answer-box')) {
                jQuery('.droppable').last().attr('tabindex', 0);
            }
        }
    };
    DragdropService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_services_commonservice_service__["a" /* CommonserviceService */]])
    ], DragdropService);
    return DragdropService;
}());



/***/ }),

/***/ "../../../../../src/app/common/services/user-response.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserResponseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserResponseService = (function () {
    function UserResponseService() {
        this.userResponse = {
            isAnswered: false,
            noOfAttempts: 0,
            Qs_ans_resp: []
        };
    }
    UserResponseService.prototype.init = function (obj, templateName) {
        var initData = {
            question: '',
            correct: false,
            userAnswer: '',
            correctAnswer: ''
        };
        switch (templateName) {
            case 'drag-drop': {
                for (var i in obj) {
                    obj[i].screens.item.userResponse = {
                        isAnswered: false,
                        noOfAttempts: 0,
                        Qs_ans_resp: []
                    };
                    for (var j = 0; j < obj[i].screens.item.sentence.p.length; j++) {
                        obj[i].screens.item.userResponse.Qs_ans_resp.push(initData);
                    }
                }
                break;
            }
        }
    };
    UserResponseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserResponseService);
    return UserResponseService;
}());



/***/ }),

/***/ "../../../../../src/app/components/endscreen/result-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<div #success class=\"success-popup\">\r\n    <div class=\"overlay\"></div>\r\n     <div class=\"popup-body\">\r\n       <button class=\"btn-close\" (click)=closeEndScreen()><strong class=\"fa fa-times\" aria-hidden=\"true\"></strong></button>\r\n       <div class=\"top-text\">\r\n            <img >\r\n            <!-- {{headerTitle}} -->\r\n         </div>\r\n         <div class=\"middle-col\">\r\n           <div class=\"left-col\">\r\n               <div class=\"time-title\">Time Tracker</div>\r\n                 <div class=\"time\">\r\n                   <span>{{minFirstPart}}</span>\r\n                     <span>{{minSecondPart}}</span>\r\n                     <span class=\"time-devide\">:</span>\r\n                     <span>{{secFirstPart}}</span>\r\n                     <span>{{secSecondPart}}</span>\r\n                 </div>\r\n                 <div class=\"minute\">minutes</div>\r\n                 <div class=\"seconds\">seconds</div>\r\n             </div>\r\n             <div class=\"right-col\">\r\n               <div class=\"round-col correct\">\r\n                   <span class=\"text\">{{numOfCorrect}}</span>\r\n                     <span class=\"msg\">Correct</span>\r\n                 </div>\r\n                 <div class=\"round-col incorrect\">\r\n                   <span class=\"text\">{{numOfIncorrect}}</span>\r\n                     <span class=\"msg\">Incorrect</span>\r\n                 </div>\r\n             </div>\r\n             <div class=\"ui-helper-clearfix\"></div>\r\n         </div>\r\n         <div class=\"btn-row\">\r\n           <button type=\"button\" class=\"btn\" (click)=\"playAgain()\"><strong class=\"fa fa-repeat\" aria-hidden=\"true\"></strong> Play Again</button>\r\n             <button type=\"button\" class=\"btn\" (click)=\"finalReportDisplay()\"><strong class=\"fa fa-file-text-o\" aria-hidden=\"true\"></strong> Final Report</button>\r\n         </div>\r\n     </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/endscreen/result-screen.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".success-popup {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  z-index: 1000;\n}\n.success-popup .btn-close {\n  width: 32px;\n  height: 32px;\n  background-color: #005a8a;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  position: absolute;\n  right: -16px;\n  top: -16px;\n  color: #fff;\n}\n.success-popup .overlay {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.success-popup .btn-row {\n  text-align: center;\n  padding: 40px 0 25px 0;\n}\n.success-popup .btn-row .btn {\n  width: 175px;\n  height: 35px;\n  background-color: #005a8a;\n  border-radius: 20px;\n  border: none;\n  color: #fff;\n  text-align: left;\n  font-size: 18px;\n  font-weight: 300;\n  margin: 0 27px;\n  cursor: pointer;\n  text-align: center;\n}\n.success-popup .btn-row .btn:hover {\n  background: #076da8;\n}\n.success-popup .popup-body {\n  position: absolute;\n  width: 648px;\n  border: 2px solid #ffce28;\n  background-color: #fff;\n  border-radius: 10px;\n  top: 50%;\n  left: 50%;\n  margin-left: -330px;\n  margin-top: -191px;\n}\n.success-popup .popup-body .top-text {\n  text-align: center;\n  padding: 20px 0;\n  background: url(\"/assets/iteractives/sorting_open_defined/images/background/great-text.png\") top no-repeat;\n}\n.success-popup .popup-body .middle-col {\n  background: url(\"/assets/iteractives/sorting_open_defined/images/background/yellow-back-2.png\") top no-repeat;\n  min-height: 165px;\n  padding: 24px 35px;\n}\n.success-popup .popup-body .middle-col .left-col {\n  width: 50%;\n  float: left;\n}\n.success-popup .popup-body .middle-col .left-col .time-title {\n  font-size: 20px;\n  font-weight: 700;\n  margin-left: 54px;\n}\n.success-popup .popup-body .middle-col .left-col .minute {\n  width: 100px;\n  float: left;\n  color: #000;\n  text-align: center;\n  font-weight: 700;\n}\n.success-popup .popup-body .middle-col .left-col .seconds {\n  width: 100px;\n  float: left;\n  color: #000;\n  text-align: center;\n  font-weight: 700;\n  margin-left: 18px;\n}\n.success-popup .popup-body .middle-col .left-col .time span {\n  width: 44px;\n  height: 53px;\n  border: 1px solid #fbb527;\n  display: inline-block;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\n          box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\n  font-size: 41px;\n  font-weight: 700;\n  line-height: 53px;\n  text-align: center;\n}\n.success-popup .popup-body .middle-col .left-col .time .time-devide {\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  width: 20px;\n}\n.success-popup .popup-body .middle-col .right-col {\n  width: 50%;\n  float: left;\n}\n.success-popup .popup-body .middle-col .right-col .round-col {\n  width: 122px;\n  height: 122px;\n  border-radius: 50%;\n  overflow: hidden;\n  text-align: center;\n  float: left;\n}\n.success-popup .popup-body .middle-col .right-col .round-col .text {\n  font-size: 64px;\n  font-weight: 700;\n  color: #fff;\n  display: block;\n  line-height: 75px;\n  height: 75px;\n}\n.success-popup .popup-body .middle-col .right-col .round-col .msg {\n  display: block;\n  color: #fff;\n  height: 47px;\n  padding: 7px 0;\n  background: rgba(0, 0, 0, 0.3);\n}\n.success-popup .popup-body .middle-col .right-col .correct {\n  background-color: #308232;\n}\n.success-popup .popup-body .middle-col .right-col .incorrect {\n  background-color: #d1232a;\n  margin-left: 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/endscreen/result-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultScreenComponent = (function () {
    function ResultScreenComponent() {
        this.numOfTotal = 0;
        this.numOfCorrect = 0;
        this.numOfIncorrect = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.minFirstPart = 0;
        this.minSecondPart = 0;
        this.secFirstPart = 0;
        this.secSecondPart = 0;
    }
    // reportPdfSrc: string;
    // headerTitle: string;
    ResultScreenComponent.prototype.ngOnInit = function () {
        this.numOfIncorrect = this.endScreenInfo['incorrect'];
        this.numOfTotal = this.endScreenInfo['totalQuestions'];
        this.numOfCorrect = this.numOfTotal - this.numOfIncorrect;
        this.duration = this.endScreenInfo['timeDuration'];
        this.minutes = Math.floor(this.duration / 60);
        this.seconds = this.duration - this.minutes * 60;
        // this.minFirstPart = Math.floor (this.minutes / 10);
        // this.minSecondPart = this.minutes % 10;
        this.minSecondPart = this.minutes;
        // this.secFirstPart = Math.floor (this.seconds / 10);
        this.secSecondPart = this.seconds;
        // this.reportPdfSrc = this.endScreenInfo['reportPdfSrc'];
    };
    ResultScreenComponent.prototype.finalReportDisplay = function () {
    };
    ResultScreenComponent.prototype.playAgain = function () {
        // this.lastdone = false;
    };
    ResultScreenComponent.prototype.closeEndScreen = function () {
        this.success.nativeElement.style.display = "none";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('success'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ResultScreenComponent.prototype, "success", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ResultScreenComponent.prototype, "endScreenInfo", void 0);
    ResultScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'result-screen',
            template: __webpack_require__("../../../../../src/app/components/endscreen/result-screen.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/endscreen/result-screen.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ResultScreenComponent);
    return ResultScreenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/error-page/error-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/error-page/error-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>{{ errorMessage }}</h4>\n"

/***/ }),

/***/ "../../../../../src/app/components/error-page/error-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorPageComponent = (function () {
    function ErrorPageComponent(route) {
        this.route = route;
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.errorMessage = this.route.snapshot.data['message'];
        this.route.data.subscribe(function (data) {
            _this.errorMessage = data['message'];
        });
    };
    ErrorPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error-page',
            template: __webpack_require__("../../../../../src/app/components/error-page/error-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/error-page/error-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <!--<div class=\"header-title\" [innerHTML]=headerTitle>-->\r\n  <div class=\"header-title\">\r\n    <h1>{{headerTitle}}</h1>\r\n  </div>\r\n  <div class=\"pull-right\">\r\n    <button type=\"button\" class=\"header-help\" (click) = help() aria-label=\"help\"><strong class=\"fa fa-question\" aria-hidden=\"true\"></strong></button>\r\n    <button type=\"button\" class=\"header-close\" aria-label=\"cross\" (click) = closeWindow()><strong class=\"fa fa-times\" aria-hidden=\"true\"></strong></button>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n</header>"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\n  height: 50px;\n  width: 100%;\n  background: url('/assets/iteractives/sorting_open_defined/images/background/footer-bg.png') top repeat-x #005b8a;\n  text-align: left;\n  padding: 3px 20px;\n}\nheader .header-help {\n  width: 32px;\n  height: 32px;\n  background-color: #005a8a;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  position: absolute;\n  right: 62px;\n  top: 9px;\n  color: #fff;\n  font-size: 12px;\n}\nheader .header-close {\n  width: 32px;\n  height: 32px;\n  background-color: #005a8a;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  position: absolute;\n  right: 20px;\n  top: 9px;\n  color: #fff;\n  font-size: 20px;\n}\nheader .header-title {\n  color: white;\n  font-weight: 500;\n  font-size: 22px;\n}\nh1 {\n  margin: 6px 0 0 0 !important;\n  font-size: 27px !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_commonservice_service__ = __webpack_require__("../../../../../src/app/common/services/commonservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(CommonserviceService) {
        this.CommonserviceService = CommonserviceService;
        this.headerTitle = "Dummy";
        this.modalDisplayStatus = 'none';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.CommonserviceService.cast.subscribe(function (modalStatus) { return _this.modalDisplayStatus = modalStatus; });
        this.headerTitle = this.headerInfo['headingTitle'];
    };
    /* functionality for help icon*/
    HeaderComponent.prototype.help = function () {
        //  open help video modal
        this.modalDisplayStatus = 'block';
        this.CommonserviceService.editStatus(this.modalDisplayStatus);
    };
    /* functionaly for exit icon*/
    HeaderComponent.prototype.closeWindow = function () {
        window.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "headerInfo", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_services_commonservice_service__["a" /* CommonserviceService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/instruction/instruction.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"instruction-success-popup\" role=\"dialog\" [style.display] = 'modalDisplayStatus'>\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"popup-body\">\r\n    <button class=\"btn-close\" data-dismiss=\"modal\" (click)=\"closeModal()\" aria-label=\"close\" ><strong class=\"fa fa-times\" aria-hidden=\"true\"></strong></button>\r\n    <div class=\"middle-col\">\r\n      <button *ngIf = audioSrc class=\"btn-volume\"><strong class=\"fa fa-volume-up\" aria-hidden=\"true\" (click)=\"playAudio()\" (keydown)=\"playAudio()\"></strong></button>\r\n      <div class=\"text-container\" [innerHtml]=\"instructionTxt\">\r\n      </div>\r\n      <div class=\"ui-helper-clearfix\"></div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/instruction/instruction.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,400i,600,700,700i,800,900');\nbody {\n  background-color: #fff;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 24px;\n  color: #000;\n}\n.clearfix {\n  clear: both;\n  padding: 0px;\n  margin: 0px;\n}\n::ng-deep b {\n  color: red;\n}\n.container {\n  background-color: rgba(255, 255, 255, 0.7);\n  width: 946px;\n}\n.container header {\n  padding: 15px 0;\n}\n.container .body-container h1 {\n  font-size: 20px;\n  font-weight: 700;\n  padding: 0 15px;\n}\n.container .body-container ul {\n  padding: 0;\n  margin: 0px;\n}\n.container .body-container ul li {\n  display: block;\n  float: left;\n  width: 177px;\n  height: 329px;\n  background: url('/assets/iteractives/sorting_open_defined/images/backgroundbox.png') no-repeat;\n  margin-right: 5px;\n}\n.container .body-container ul li .title {\n  font-size: 16px;\n  color: #fff;\n  font-weight: bold;\n  text-align: center;\n  padding: 5px 0;\n}\n.container .body-container ul li .text {\n  padding: 10px;\n  text-align: center;\n  height: 294px;\n  font-size: 16px;\n  color: #000;\n  font-weight: bold;\n}\n.container .body-container ul li:first-child {\n  margin-left: 5px;\n}\n.container .text-drop-section {\n  width: 460px;\n  margin: 0 auto;\n  position: relative;\n}\n.container .text-drop-section ul {\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n}\n.container .text-drop-section ul li {\n  display: block;\n  float: left;\n  width: 30%;\n  margin: 0 1.5%;\n  height: 200px;\n  background-color: #fff;\n  border-radius: 10px;\n  border: 5px solid #73bf45;\n  text-align: center;\n  font-size: 50px;\n}\n.container .text-drop-section ul li span {\n  display: block;\n}\n.container .text-drop-section ul li .drop-col {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background-color: #ccc;\n  margin: 0 auto;\n}\n.container .text-row {\n  border: 2px solid #0292d1;\n  background-color: #fff;\n  border-radius: 5px;\n  height: 40px;\n  margin-top: 10px;\n  text-align: center;\n  padding: 5px 0;\n}\n.container .text-row span {\n  display: inline;\n  font-size: 16px;\n  color: #000;\n  Margin: 0 10px;\n}\n.container .text-row-drag {\n  border: 2px solid #0292d1;\n  background-color: #fff;\n  border-radius: 5px;\n  height: 100px;\n  margin-top: 10px;\n  text-align: center;\n  padding: 34px 0;\n  font-weight: 700;\n}\n.container .text-row-drag span {\n  display: inline;\n  font-size: 16px;\n  color: #000;\n  Margin: 0 10px;\n}\n.container .btn-row {\n  text-align: right;\n  margin-top: 5px;\n}\n.container .btn-row .check {\n  width: 66px;\n  height: 20px;\n  background: #02588a;\n  border: none;\n  cursor: pointer;\n  color: #fff;\n  font-size: 11px;\n  padding: 4px;\n  border-radius: 3px;\n}\n.container .btn-row .check:hover {\n  background: #076da8;\n}\n.container .vol-icon {\n  position: absolute;\n  background-color: #fff;\n  width: 60px;\n  height: 60px;\n  top: 0px;\n  right: -60px;\n  border-radius: 3px;\n  font-size: 34px;\n  padding: 4px 15px;\n  top: 70px;\n  cursor: pointer;\n}\n.container .vol-icon .fa-volume-up {\n  color: #6ebd3e;\n}\n.container .vol-icon .fa-volume-off {\n  color: #ec1f35;\n  content: \"\\F026\" !important;\n}\n.container .play-course {\n  height: 30px;\n  position: relative;\n  background-color: #fff;\n  width: 443px;\n  margin: 0 auto;\n  margin-top: 20px;\n}\n.container .play-col {\n  height: auto;\n}\n.container .text-row-choose {\n  border: 2px solid #0292d1;\n  background-color: #fff;\n  border-radius: 5px;\n  height: 40px;\n  margin-top: 10px;\n  text-align: center;\n  padding: 5px 0;\n  min-height: 160px;\n  display: table;\n  width: 100%;\n  vertical-align: middle;\n}\n.container .text-row-choose span {\n  display: block;\n  vertical-align: middle;\n  margin-bottom: 5px;\n}\n.container .text-row-choose .blank {\n  display: inline-table;\n  min-width: 70px;\n  height: 30px;\n  border-bottom: 2px solid #020000;\n  margin-bottom: -7px;\n}\n.container .text-row-choose-section {\n  width: 200px;\n  margin: 0 auto;\n}\n.container .text-row-choose-section span {\n  border: 2px solid #0292d1;\n  background-color: #fff;\n  border-radius: 5px;\n  height: 40px;\n  margin-top: 6px;\n  text-align: center;\n  padding: 5px 0;\n  display: block;\n}\n.footer-nav {\n  height: 43px;\n  background: url(\"/assets/iteractives/sorting_open_defined/images/background/footer-bg.png\") top repeat-x #005b8a;\n  text-align: center;\n  padding: 2px;\n}\n.footer-nav .prev {\n  display: inline-block;\n  border: none;\n  color: #fff;\n  width: 125px;\n  height: 30px;\n  background: #d1242a;\n  cursor: pointer;\n  float: left;\n  border-radius: 0;\n  margin-top: 5px;\n  font-size: 13px;\n}\n.footer-nav .next {\n  display: inline-block;\n  border: none;\n  color: #fff;\n  width: 125px;\n  height: 30px;\n  background: #d1242a;\n  cursor: pointer;\n  float: right;\n  border-radius: 0;\n  margin-top: 5px;\n  font-size: 13px;\n}\n.footer-nav .footer-middle {\n  display: inline-block;\n  padding-top: 10px;\n  height: 20px;\n  width: 71%;\n}\n.footer-nav .footer-middle .line-nav {\n  float: left;\n  width: 90%;\n  background: #fff;\n  height: 10px;\n  border-radius: 10px;\n  margin-top: 5px;\n}\n.footer-nav .footer-middle .line-nav span {\n  height: 10px;\n  border-radius: 10px;\n  background: #feca25;\n  display: block;\n}\n.footer-nav .footer-middle .count-slide {\n  float: left;\n  width: 10%;\n  color: #fff;\n  font-size: 14px;\n  text-align: center;\n  line-height: 18px;\n}\n.instruction-success-popup {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  z-index: 1000;\n}\n.instruction-success-popup .btn-close {\n  width: 32px;\n  height: 32px;\n  background-color: #005a8a;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  position: absolute;\n  right: -16px;\n  top: -16px;\n  color: #fff;\n}\n.instruction-success-popup .btn-volume {\n  width: 28px;\n  height: 28px;\n  background-color: #ECF3F6;\n  border-radius: 50%;\n  border: 1px solid lightgray;\n  position: absolute;\n  left: 15px;\n  top: 20px;\n  color: #005a8a;\n  -webkit-box-shadow: 1px 1px 1px 1px #AAA8A9;\n          box-shadow: 1px 1px 1px 1px #AAA8A9;\n}\n.instruction-success-popup .overlay {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.instruction-success-popup .btn-row {\n  text-align: center;\n  padding: 40px 0 25px 0;\n}\n.instruction-success-popup .btn-row .btn {\n  width: 175px;\n  height: 35px;\n  background-color: #005a8a;\n  border-radius: 20px;\n  border: none;\n  color: #fff;\n  text-align: left;\n  font-size: 18px;\n  font-weight: 300;\n  margin: 0 27px;\n  cursor: pointer;\n  text-align: center;\n}\n.instruction-success-popup .btn-row .btn:hover {\n  background: #076da8;\n}\n.instruction-success-popup .popup-body {\n  position: absolute;\n  width: 350px;\n  height: 460px;\n  border: 2px solid #ffce28;\n  background-color: #fff;\n  border-radius: 10px;\n  top: 50%;\n  left: 50%;\n  margin-left: -180px;\n  margin-top: -220px;\n}\n.instruction-success-popup .popup-body .top-text {\n  text-align: center;\n  padding: 20px 0;\n}\n.instruction-success-popup .popup-body .middle-col {\n  min-height: 165px;\n  padding: 24px 0 24px 35px;\n}\n.instruction-success-popup .popup-body .middle-col .text-container {\n  padding: 0 10px 0 16px;\n  /* width: 100%; */\n  position: relative;\n  overflow-y: auto;\n  height: 411px;\n}\n.instruction-success-popup .popup-body .middle-col .text-container p span {\n  font-weight: bold;\n  color: #d12229;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/instruction/instruction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_commonservice_service__ = __webpack_require__("../../../../../src/app/common/services/commonservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InstructionComponent = (function () {
    function InstructionComponent(CommonserviceService) {
        this.CommonserviceService = CommonserviceService;
        this.modalDisplayStatus = 'block';
    }
    InstructionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.CommonserviceService.cast.subscribe(function (modalStatus) { return _this.modalDisplayStatus = modalStatus; });
        // this.instructionHeader = this.instructionInfo["instructionHeader"];
        this.instructionTxt = this.instructionInfo['instructionTxt'];
        // for audio
        this.audioSrc = this.instructionInfo['audioSrc'];
    };
    InstructionComponent.prototype.closeModal = function () {
        this.modalDisplayStatus = 'none';
    };
    InstructionComponent.prototype.playAudio = function () {
        var audio = new Audio();
        audio.src = this.audioSrc;
        audio.load();
        audio.play();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], InstructionComponent.prototype, "instructionInfo", void 0);
    InstructionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-instruction',
            template: __webpack_require__("../../../../../src/app/components/instruction/instruction.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/instruction/instruction.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_services_commonservice_service__["a" /* CommonserviceService */]])
    ], InstructionComponent);
    return InstructionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-nav container\">\r\n    <button #prevBtn href=\"#\" type=\"button\" class=\"btn prev\" [disabled]=\"prevBtnDisable\" (click) = gotToPrev() (keydown)= gotToPrev() aria-label=\"previous\"><span id=\"navPrev\" class=\"navSpan\"></span><span class=\"btnName\" >PREVIOUS</span> </button>\r\n    <div class=\"footer-middle\">\r\n        <div class=\"line-nav\">\r\n            <span #progressBar ></span>\r\n        </div>\r\n        <div class=\"count-slide\">\r\n            {{currentPgNum}} of {{createRange().length}}\r\n        </div>\r\n    </div>\r\n    <button #nextBtn href=\"#\"  type=\"button\" class=\"btn next\" (click)= gotToNext() (keydown)= gotToNext() [disabled]=\"nxtBtnDisable\" aria-label=\"next\"><span class=\"btnName\" >NEXT</span> <span id=\"navNext\" class= \"navSpan\"></span></button>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\n  width: 100%;\n}\n.footer-nav {\n  height: 50px;\n  background: url(\"/assets/iteractives/sorting_open_defined/images/background/footer-bg.png\") top repeat-x #005b8a;\n  text-align: center;\n  padding: 0px;\n  position: absolute;\n  bottom: 0;\n}\n.footer-nav .prev {\n  display: inline-block;\n  border: none;\n  color: #fff;\n  width: 200px;\n  height: 30px;\n  background: #d1242a;\n  cursor: pointer;\n  float: left;\n  border-radius: 0;\n  margin-top: 0;\n  font-size: 23px;\n  padding-top: 13px;\n  height: 50px;\n  font-weight: 700;\n}\n.footer-nav .next {\n  display: inline-block;\n  border: none;\n  color: #fff;\n  width: 200px;\n  height: 30px;\n  background: #d1242a;\n  cursor: pointer;\n  float: right;\n  border-radius: 0;\n  margin-top: 0;\n  font-size: 23px;\n  padding-top: 13px;\n  height: 50px;\n  font-weight: 700;\n}\n.footer-nav #navPrev {\n  background: url(\"/assets/iteractives/sorting_open_defined/images/background/left-arrow.png\") no-repeat;\n  background-size: 30px;\n}\n.footer-nav #navNext {\n  background: url(\"/assets/iteractives/sorting_open_defined/images/background/right-arrow.png\") no-repeat;\n  background-size: 30px;\n}\n.footer-nav .btnName {\n  top: -9px;\n  position: relative;\n}\n.footer-nav .navSpan {\n  height: 30px;\n  width: 40px;\n  display: inline-block;\n}\n.footer-nav .footer-middle {\n  display: inline-block;\n  padding-top: 10px;\n  height: 20px;\n  width: 65%;\n}\n.footer-nav .footer-middle .line-nav {\n  float: left;\n  width: 90%;\n  background: #fff;\n  height: 10px;\n  border-radius: 10px;\n  margin-top: 5px;\n}\n.footer-nav .footer-middle .line-nav span {\n  height: 10px;\n  border-radius: 10px;\n  background: #feca25;\n  display: block;\n}\n.footer-nav .footer-middle .count-slide {\n  float: left;\n  width: 10%;\n  color: #fff;\n  font-size: 14px;\n  text-align: center;\n  line-height: 18px;\n}\n@media only screen and (max-width: 1024px) {\n  .footer-middle {\n    width: 54% !important;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .footer-nav .prev {\n    width: 28%;\n  }\n  .footer-nav .next {\n    width: 28%;\n  }\n  .footer-nav .footer-middle {\n    width: 40% !important;\n  }\n  .footer-nav .line-nav {\n    float: left;\n    width: 84% !important;\n  }\n  .footer-nav .count-slide {\n    float: left;\n    width: 16% !important;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_commonservice_service__ = __webpack_require__("../../../../../src/app/common/services/commonservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent(CommonserviceService) {
        var _this = this;
        this.CommonserviceService = CommonserviceService;
        //holds nxt button status 
        this.nxtBtnDisable = true;
        //holds nxt button status
        this.prevBtnDisable = true;
        // track the current page number; initially set as zero
        this.currentPgNum = 1;
        this.CommonserviceService.nxtPrevEnblDisblStatus.subscribe(function (prevNxtEnblDisblStatus) {
            return _this.prevNxtEnblDisblHandler(prevNxtEnblDisblStatus);
        });
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.ngAfterViewInit = function () {
        this.progressBarWidthCalculate();
    };
    /* create number of pagination */
    NavigationComponent.prototype.createRange = function () {
        return this.questions;
    };
    /* previous button functionality */
    NavigationComponent.prototype.gotToPrev = function () {
        this.CommonserviceService.chngPrevNxtStatus('prev');
        this.currentPgNum--;
        this.progressBarWidthCalculate();
    };
    /* next button functionality*/
    NavigationComponent.prototype.gotToNext = function () {
        this.CommonserviceService.chngPrevNxtStatus('next');
        this.currentPgNum++;
        this.progressBarWidthCalculate();
    };
    /* function to calculate progess bar width */
    NavigationComponent.prototype.progressBarWidthCalculate = function () {
        var progressWidth = (100 / this.questions.length) * this.currentPgNum;
        this.progressBar.nativeElement.style.width = progressWidth + "%";
    };
    /* previous next button status handler */
    NavigationComponent.prototype.prevNxtEnblDisblHandler = function (prevNxtEnblDisblStatus) {
        if (prevNxtEnblDisblStatus.btn === 'prev') {
            this.prevBtn.nativeElement.disabled = prevNxtEnblDisblStatus.status;
        }
        else if (prevNxtEnblDisblStatus.btn === 'next') {
            this.nextBtn.nativeElement.disabled = prevNxtEnblDisblStatus.status;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('prevBtn'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], NavigationComponent.prototype, "prevBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nextBtn'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], NavigationComponent.prototype, "nextBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('progressBar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], NavigationComponent.prototype, "progressBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], NavigationComponent.prototype, "questions", void 0);
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navigation/navigation.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_services_commonservice_service__["a" /* CommonserviceService */]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/interactives/drag-drop/assignment/assignment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container fill\">\r\n    <main class=\"main-wrapper\">\r\n        <div class=\"container\">\r\n            <div class=\"direction\" [innerHTML]= \"directions\">\r\n            </div>\r\n            <div class=\"content\">\r\n                <div class=\"slide-data\">\r\n                    <div #slideSection class=\"slide-section\" role=\"application\">\r\n                        <div #droparea class=\"answer-section answer-box\">\r\n                            <div *ngFor=\"let qstn of qstnSets; let i = index; let isLast = last\">\r\n                                <div id=\"droppableBin{{i}}\" class=\"droppable questionContainer\" [ngClass]=\"{'right':isLast}\" tabindex=\"0\">\r\n                                    <div class=\"content-title\" [innerHTML]= \"qstn.title.firstHalf\"></div>\r\n                                    <div [ngClass]=\"{correct:hascorrectResponse && currUserResponse.Qs_ans_resp[i].correct , wrong: showAnswer && !currUserResponse.Qs_ans_resp[i].correct}\" id=\"dropHolder{{i}}\" class=\"drop-holder underline\"></div>\r\n                                    <div class=\"content-title\" [innerHTML]= \"qstn.title.secondHalf\"></div>\r\n                                    <div class=\"underline\" *ngIf=\"showAnswer && !currUserResponse.Qs_ans_resp[i].correct\"  [innerHTML]=\"qstn.options\"></div>\r\n\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"clearfix\"></div>\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                        <div #wrapAnsContainer class='custom-overlay'>\r\n                            <div #draggable class=\"droppable wordContainer input-texts col-md-12\" id=\"main-drop-container\" aria-label=\"droppable base region\">\r\n                            <span class=\"droppable-initial\" *ngFor=\"let option of options; let i = index;\" id=\"droppable{{i}}\">\r\n                              <span  class=\"draggable\" id=\"draggable{{i}}\" tabindex=\"0\">\r\n                                  {{option}}\r\n                              </span>\r\n                            </span>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </div>\r\n                    <!--<app-validator [isButtonDisabled]=\"\"></app-validator>-->\r\n                <section class=\"button-section\">\r\n                    <button  #resetBtn *ngIf =\"showTryAgain\" type=\"button\" (click)= reset() (keydown)= reset() [disabled]= '!disableValidate' class=\"btn try-again \"  aria-label=\"try again\" aria-live=\"assertive\"><strong class=\"fa fa-undo\" aria-hidden=\"true\"></strong> TRY AGAIN</button>\r\n                    <button  #okBtn *ngIf =\"!showTryAgain\" type=\"button\" (click)= validate() (keydown)= validate() [disabled]= 'disableValidate' class=\"btn check \" aria-label=\"Check\" aria-live=\"assertive\"><strong class=\"fa fa-check\" aria-hidden=\"true\"></strong> CHECK</button>\r\n                </section>\r\n            </div>\r\n            <div class=\"clear\"></div>\r\n        </div>\r\n    </main>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/interactives/drag-drop/assignment/assignment.component.less":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".check,\n.try-again {\n  bottom: -63px;\n  width: auto;\n  height: 22px;\n  background: #02588a;\n  border: none;\n  cursor: pointer;\n  color: #fff;\n  font-size: 13px;\n  padding: 4px;\n  border-radius: 10px;\n  position: relative;\n}\n.check:disabled,\n.try-again:disabled {\n  cursor: not-allowed;\n}\n.drop-holder {\n  height: 80%;\n  text-align: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n.drop-holder .draggable {\n  -webkit-user-select: none;\n  /* Safari 3.1+ */\n  -moz-user-select: none;\n  /* Firefox 2+ */\n  -ms-user-select: none;\n  /* IE 10+ */\n  user-select: none;\n  display: block !important;\n}\n.custom-overlay {\n  min-height: 45px;\n  margin-top: 10px;\n}\n.main-wrapper {\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/iteractives/sorting_open_defined/images/background/background_yellow2.png")) + ") no-repeat;\n  background-size: cover;\n  height: auto;\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 65px;\n  bottom: 50px;\n  -webkit-box-shadow: 0px -5px 7px rgba(0, 0, 0, 0.2);\n          box-shadow: 0px -5px 7px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.answer-section {\n  margin-left: -3px;\n  margin-right: -3px;\n}\n.answer-box {\n  height: 245px;\n  padding: 0px !important;\n  background-color: #fff;\n  color: #000;\n  border: 2px solid #0292D1;\n  border-radius: 7px;\n  margin: 0 3px;\n}\n.answer-box .content-title {\n  margin-top: 2px;\n  text-align: center;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2PX;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.2;\n  padding: 8px 5px;\n}\n.answer-box .content-title i {\n  font-family: 'Myriad-Pro-Semibold-Italic_31645';\n  font-style: italic;\n  font-size: 19px;\n}\n.right {\n  margin-right: 0 !important;\n}\n.input-texts {\n  background-color: #fff;\n  margin-top: 15px;\n  border: 2px solid #0292D1;\n  min-height: 59px;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  width: 100.5%;\n}\n.input-texts span {\n  line-height: 45px;\n  height: 45px;\n  padding-top: 5px;\n}\n.droppable-initial {\n  position: relative;\n  display: inline-block;\n  height: 100%;\n  width: 7em;\n  vertical-align: middle;\n  text-align: center;\n}\n.droppable-initial span.draggable {\n  -webkit-user-select: none;\n  /* Safari 3.1+ */\n  -moz-user-select: none;\n  /* Firefox 2+ */\n  -ms-user-select: none;\n  /* IE 10+ */\n  user-select: none;\n}\n.droppable-initial span.draggable:focus {\n  padding: 5px;\n}\n.direction {\n  font-size: 18px;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-top: 15px;\n  font-weight: 700;\n  line-height: 1.2;\n  margin-bottom: 20px;\n}\n.button:disabled:hover {\n  background-position: 0 -1px;\n}\n.button-section {\n  text-align: right;\n  padding-top: 5px;\n  padding-bottom: 20px;\n}\n.completepopup .modal-dialog {\n  width: 50%;\n  margin: auto;\n}\n.answer-box.droppable span.draggable {\n  -webkit-user-select: none;\n  /* Safari 3.1+ */\n  -moz-user-select: none;\n  /* Firefox 2+ */\n  -ms-user-select: none;\n  /* IE 10+ */\n  user-select: none;\n  font-weight: 900;\n  display: block;\n}\n.draggable {\n  -webkit-user-select: none;\n  /* Safari 3.1+ */\n  -moz-user-select: none;\n  /* Firefox 2+ */\n  -ms-user-select: none;\n  /* IE 10+ */\n  user-select: none;\n  text-align: center;\n  cursor: pointer;\n  font-size: 18px;\n  font-weight: 900;\n}\n.slide-data {\n  min-height: 347px;\n}\n.wordContainer.active {\n  border: 5px solid yellow;\n}\n.activeSelected {\n  border: 5px solid yellow;\n}\n.underline {\n  border-bottom: 2px solid #000;\n  width: 60px;\n  height: 32px;\n  display: inline-block;\n  margin-right: 5px;\n}\n.content-title {\n  display: inline-block;\n}\n.questionContainer {\n  text-align: center;\n}\n.correct {\n  color: #008000;\n}\n.wrong {\n  color: #ff0000;\n}\n@media screen and (min-width: 600px) {\n  .col-xs-15 {\n    width: 20% !important;\n    float: left;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .input-texts {\n    min-height: 45px;\n    margin-top: 10px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .answer-box {\n    min-height: 150px;\n  }\n  .input-texts {\n    min-height: 50px;\n    line-height: 15px;\n  }\n}\n@media screen and (max-width: 599px) {\n  .answer-box {\n    margin-bottom: 7px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/interactives/drag-drop/assignment/assignment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_dragdropservice_service__ = __webpack_require__("../../../../../src/app/common/services/dragdropservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_commonservice_service__ = __webpack_require__("../../../../../src/app/common/services/commonservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AssignmentComponent = (function () {
    function AssignmentComponent(DragdropService, CommonserviceService) {
        var _this = this;
        this.DragdropService = DragdropService;
        this.CommonserviceService = CommonserviceService;
        this.qstnSets = [];
        this.options = [];
        this.disableValidate = true;
        this.playStart = true;
        this.wrongAnswers = [];
        this.showTryAgain = false;
        this.wrongAttemptSound = ['sfx/not_correct_try_again_1.mp3', 'sfx/not_it_try_again_1.mp3', 'sfx/not_quite_keep_trying_1.mp3'];
        this.correctAttemptSound = ['sfx/excellent_work_1.mp3', 'sfx/good_job_1.mp3', 'sfx/fantastic_1.mp3', 'sfx/great_job.mp3'];
        this.currentIndex = 0;
        this.reach = this.currentIndex;
        this.currUserResponse = {};
        this.showAnswer = false;
        this.hascorrectResponse = false;
        this.init();
        this.CommonserviceService.gotoPrevNext.subscribe(function (prevNxtStatus) { return _this.prenNxtStatusHandler(prevNxtStatus); });
        this.CommonserviceService.enableOkBtn.subscribe(function (args) { return _this.shouldEnableOk(args); });
    }
    /* method to handle the previous next button status*/
    AssignmentComponent.prototype.prenNxtStatusHandler = function (prevNxtStatus) {
        if (prevNxtStatus === 'next') {
            this.nextClick();
        }
        else if (prevNxtStatus === 'prev') {
            this.prevClick();
        }
    };
    AssignmentComponent.prototype.ngAfterViewInit = function () {
        console.log(' view init');
    };
    AssignmentComponent.prototype.init = function () {
        this.directions = '';
        this.qstnSets = [];
        this.options = [];
        this.qstnData = {};
        this.title = '';
        this.disableValidate = true;
        this.playStart = true;
        this.DragdropService.dropPos = {};
        this.DragdropService.selectedOptions = {};
        this.wrongAnswers = [];
    };
    AssignmentComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    AssignmentComponent.prototype.ngAfterViewChecked = function () {
        this.DragdropService.makeDraggable(this.dragElms.nativeElement);
        this.DragdropService.makeDroppable(this.dropElms.nativeElement, this.dragElms.nativeElement);
    };
    /* loads question data into current page */
    AssignmentComponent.prototype.loadData = function () {
        var _this = this;
        this.qstnData = this.templateData;
        this.title = this.qstnData.title;
        this.assignmentData = this.qstnData.rounds.round;
        this.currAssignmentData = this.assignmentData[this.currentIndex];
        this.currUserResponse = Object.assign(this.currUserResponse, this.currAssignmentData.screens.item.userResponse);
        this.directions = this.qstnData.directions;
        this.prepareQuestionSet(this.currentIndex);
        this.makeOptions();
        if (this.currUserResponse.isAnswered) {
            setTimeout(function () {
                _this.showAttemptedState(_this.currUserResponse);
            }, 0);
            this.showAnswer = true;
        }
        else {
            this.showAnswer = false;
        }
    };
    /* preapres question bins set for a page */
    AssignmentComponent.prototype.prepareQuestionSet = function (index) {
        var bins = this.assignmentData[index].screens.item.sentence.p;
        var trimedTitle;
        for (var i = 0; i < bins.length; i++) {
            trimedTitle = this.trimTitle(bins[i]);
            this.qstnSets.push({
                title: trimedTitle,
                options: this.getOptions(bins[i]),
                'trimedTitle': trimedTitle
            });
        }
    };
    /* trims <i> tags from title of elemnts*/
    AssignmentComponent.prototype.trimTitle = function (tag) {
        return { firstHalf: tag.split(/\[(.)+\]/)[0], secondHalf: tag.split(/\[(.)+\]/)[2] };
    };
    /* returns an array that stores the correct answers for each bin */
    AssignmentComponent.prototype.getOptions = function (item) {
        return item.match(/\[(.)+\]/)[0];
    };
    /* shuffles and makes draggable options available*/
    AssignmentComponent.prototype.makeOptions = function () {
        var option;
        for (var i = 0; i < this.qstnSets.length; i++) {
            option = this.qstnSets[i].options;
            this.options.push(option);
        }
        this.options = this.shuffle(this.options);
    };
    /* shuffles array */
    AssignmentComponent.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    /* function to validate the answers */
    AssignmentComponent.prototype.validate = function () {
        this.incorrect = false;
        this.currUserResponse.isAnswered = true;
        this.currUserResponse.noOfAttempts++;
        for (var key in this.DragdropService.selectedOptions) {
            var idx = parseInt(key[key.length - 1], 10);
            this.optionsToRevert(this.qstnSets[idx].options, this.DragdropService.selectedOptions[key], parseInt(key[key.length - 1], 10));
        }
        Object.assign(this.currAssignmentData.screens.item.userResponse, this.currUserResponse);
        if (this.incorrect) {
            //wrong answer
            if (!this.answeredAll) {
                this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'next', status: true });
            }
            //when tried attmepting second time but given wrong answer
            if (this.currUserResponse.noOfAttempts === 2) {
                this.enableShowAnswer();
                this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'next', status: false });
            }
            else {
                this.showTryAgain = true;
            }
            this.play(this.wrongAttemptSound[Math.round(Math.random() * 2)]);
            this.playStart = true;
            this.wrapAnsContainer.nativeElement.style['pointer-events'] = 'none';
        }
        else {
            // answered correctly navigation option available
            // answered correctly but current page is not last page
            if (this.currentIndex !== this.assignmentData.length - 1) {
                //implemented differently
                this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'next', status: false });
                this.play(this.correctAttemptSound[Math.round(Math.random() * 2)]);
                this.playStart = true;
                this.disableValidate = true;
                this.answered = this.currentIndex;
            }
            else {
                //answered correctly but current page the  last page
                // $rootScope.$broadcast('complete');
                //implemented differently
                this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'next', status: false });
                this.play(this.correctAttemptSound[3]);
                this.playStart = true;
                this.disableValidate = true;
                this.answeredAll = true;
                this.answered = this.currentIndex;
            }
        }
        this.disableValidate = true;
        this.okBtn.nativeElement.disabled = true;
    };
    /* gets called by validate() to check if answer attempt was correct */
    AssignmentComponent.prototype.optionsToRevert = function (options, answers, index) {
        var _this = this;
        var incorrectAnswers = [], userAns;
        for (var i = 0; i < answers.length; i++) {
            userAns = (jQuery(answers[i]).text()).trim();
            if (options.indexOf(userAns) === -1) {
                incorrectAnswers.push(answers[i]);
                this.fillUserResponse(false, userAns, options, index);
            }
            else {
                this.hascorrectResponse = true;
                this.fillUserResponse(true, userAns, options, index);
            }
        }
        //removes each incorrect answers form the bin , leaving behind  the correct ones
        incorrectAnswers.map(function (elm) {
            if (!!elm && _this.currUserResponse.noOfAttempts !== 2) {
                _this.resetThisElement(jQuery(elm).attr("id"));
                _this.DragdropService.removeFromSelectedOptions(elm);
            }
            _this.incorrect = true;
        });
    };
    /* resets each element from bin to '.word-container' */
    AssignmentComponent.prototype.resetThisElement = function (element) {
        var id = element.split("draggable")[1];
        var ansBox = "#droppable" + id;
        var dragItem = "draggable" + id;
        var dragItemId = "#" + dragItem;
        var ans = jQuery(dragItemId)[0];
        jQuery(ans).css({
            display: "inline"
        });
        jQuery(dragItemId).removeClass("activeSelected");
        jQuery(dragItemId).remove();
        jQuery('.draggable').attr("tabindex", 0);
        this.DragdropService.accessFlag = false;
        if (this.DragdropService.dropPos[dragItem]) {
            if (this.DragdropService.dropPos[dragItem].top < jQuery("#droppableBin0").width()) {
                ans.style.top = this.DragdropService.stackTop + "px";
                ans.style.left = this.DragdropService.dropPos[dragItem].left + "px";
            }
            else {
                ans.style.top = this.DragdropService.dropPos[dragItem].top + "px";
                ans.style.left = this.DragdropService.dropPos[dragItem].left + "px";
            }
        }
        jQuery(ansBox).append(ans);
        jQuery('.draggable').off('keydown').on('keydown', this.DragdropService.draggableAccs);
        jQuery(ans).animate({
            display: "inline",
            position: "relative",
            top: "0px",
            left: "0px"
        }, {
            easing: "linear",
            duration: 500,
            complete: function () {
                jQuery(ans).draggable({
                    containment: ".main-wrapper",
                    revert: "invalid",
                    stop: function () {
                        jQuery(ans).css("border", "none");
                    }
                });
            }
        });
        this.DragdropService.dropPos[dragItem] = {};
    };
    /* uses soundservice to play feedback audios */
    AssignmentComponent.prototype.play = function (src) {
        // soundservice.playSound(src);
        // this.playStart = true;
    };
    /* function to reset all the answers */
    AssignmentComponent.prototype.reset = function () {
        var _this = this;
        jQuery(".draggable").each(function (idx, item) {
            _this.resetThisElement(jQuery(item)[0].id);
        });
        this.disableValidate = true;
        this.DragdropService.topPos = 0;
        this.DragdropService.stackTop = 0;
        this.DragdropService.dropPos = {};
        this.DragdropService.numberOfChildrenPresent = 0;
        this.DragdropService.selectedOptions = {};
        this.showTryAgain = false;
        this.hascorrectResponse = false;
        this.wrapAnsContainer.nativeElement.style['pointer-events'] = 'all';
    };
    /* responds to next-page button click , loads next page , and */
    AssignmentComponent.prototype.nextClick = function () {
        this.slideSection.nativeElement.style.display = 'none';
        this.wrapAnsContainer.nativeElement.style['pointer-events'] = 'all';
        jQuery('.slide-section').slideDown('slow');
        if (this.assignmentData.length - 1 === this.currentIndex) {
            this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'next', status: true });
        }
        else {
            if (!this.answeredAll) {
                this.init();
                ++this.currentIndex;
                this.loadData();
                if (this.reach < this.currentIndex) {
                    this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'next', status: true });
                }
                if (this.reach == this.currentIndex && !this.answeredAll && this.currentIndex != this.answered) {
                    this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'next', status: true });
                }
                this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'prev', status: false });
                this.reach = this.currentIndex;
            }
            else {
                ++this.currentIndex;
                this.init();
                this.loadData();
                this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'prev', status: false });
                if (this.currentIndex == this.assignmentData.length - 1) {
                    this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'next', status: true });
                }
            }
        }
    };
    /* responds to previous page button click */
    AssignmentComponent.prototype.prevClick = function () {
        if (this.currentIndex === 0 || this.currentIndex - 1 === 0) {
            this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'prev', status: true });
            this.init();
            --this.currentIndex;
            this.loadData();
            this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'next', status: false });
        }
        else {
            this.init();
            --this.currentIndex;
            this.loadData();
            this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'prev', status: false });
            this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'next', status: false });
        }
    };
    /* validates OK button if user have attempted current page completely */
    AssignmentComponent.prototype.shouldEnableOk = function (args) {
        if (this.options.length) {
            if (this.options.length === args) {
                this.disableValidate = false;
                this.okBtn.nativeElement.disabled = false;
                this.okBtn.nativeElement.focus(); //for accesibility on attempt complete triggers focus on OK button
            }
            else {
                this.disableValidate = true;
            }
        }
    };
    //reponds if user click play again button on final page
    AssignmentComponent.prototype.playAgain = function () {
        this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'prev', status: true });
        this.currentIndex = 0;
        this.init();
        this.loadData();
        this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'next', status: false });
    };
    ;
    //fills user response
    AssignmentComponent.prototype.fillUserResponse = function (isCorrect, userAnswer, correctAnswer, index) {
        this.currUserResponse.Qs_ans_resp[index] = {
            correct: isCorrect,
            userAnswer: userAnswer,
            correctAnswer: correctAnswer,
            question: this.qstnSets[index].title.firstHalf + '_' + this.qstnSets[index].title.secondHalf
        };
    };
    AssignmentComponent.prototype.enableShowAnswer = function () {
        this.showAnswer = true;
    };
    AssignmentComponent.prototype.showAttemptedState = function (currUserResponse) {
        for (var i in currUserResponse.Qs_ans_resp) {
            jQuery('#dropHolder' + i).html(currUserResponse.Qs_ans_resp[i].userAnswer);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AssignmentComponent.prototype, "templateData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('wrapAnsContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AssignmentComponent.prototype, "wrapAnsContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('draggable'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AssignmentComponent.prototype, "dragElms", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('droparea'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AssignmentComponent.prototype, "dropElms", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slideSection'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AssignmentComponent.prototype, "slideSection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('okBtn'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AssignmentComponent.prototype, "okBtn", void 0);
    AssignmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-assignment',
            template: __webpack_require__("../../../../../src/app/interactives/drag-drop/assignment/assignment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/interactives/drag-drop/assignment/assignment.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_services_dragdropservice_service__["a" /* DragdropService */], __WEBPACK_IMPORTED_MODULE_2__common_services_commonservice_service__["a" /* CommonserviceService */]])
    ], AssignmentComponent);
    return AssignmentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/interactives/drag-drop/assignment/option/option.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  option works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/interactives/drag-drop/assignment/option/option.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/interactives/drag-drop/assignment/option/option.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OptionComponent = (function () {
    function OptionComponent() {
    }
    OptionComponent.prototype.ngOnInit = function () {
    };
    OptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-option',
            template: __webpack_require__("../../../../../src/app/interactives/drag-drop/assignment/option/option.component.html"),
            styles: [__webpack_require__("../../../../../src/app/interactives/drag-drop/assignment/option/option.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], OptionComponent);
    return OptionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/interactives/drag-drop/assignment/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  question works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/interactives/drag-drop/assignment/question/question.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/interactives/drag-drop/assignment/question/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionComponent = (function () {
    function QuestionComponent() {
    }
    QuestionComponent.prototype.ngOnInit = function () {
    };
    QuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-question',
            template: __webpack_require__("../../../../../src/app/interactives/drag-drop/assignment/question/question.component.html"),
            styles: [__webpack_require__("../../../../../src/app/interactives/drag-drop/assignment/question/question.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/interactives/drag-drop/assignment/validator/validator.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  validator works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/interactives/drag-drop/assignment/validator/validator.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/interactives/drag-drop/assignment/validator/validator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidatorComponent = (function () {
    function ValidatorComponent() {
    }
    ValidatorComponent.prototype.ngOnInit = function () {
    };
    ValidatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-validator',
            template: __webpack_require__("../../../../../src/app/interactives/drag-drop/assignment/validator/validator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/interactives/drag-drop/assignment/validator/validator.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ValidatorComponent);
    return ValidatorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/interactives/drag-drop/drag-drop.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='templateContainer' *ngIf = data>\r\n    <app-header [headerInfo] = getHeaderInfo()></app-header>\r\n    <app-assignment [templateData] = getTemplateData()></app-assignment>\r\n    <app-navigation [questions] = getNumOfPg() ></app-navigation>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/interactives/drag-drop/drag-drop.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/interactives/drag-drop/drag-drop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_commonservice_service__ = __webpack_require__("../../../../../src/app/common/services/commonservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_user_response_service__ = __webpack_require__("../../../../../src/app/common/services/user-response.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DragDropComponent = (function () {
    function DragDropComponent(CommonserviceService, route, userResponseService) {
        this.CommonserviceService = CommonserviceService;
        this.route = route;
        this.userResponseService = userResponseService;
        this.title = 'app';
        this.playStart = false;
        // chngBtnStatus(){
        //   this.prevBtnDisable = !this.prevBtnDisable;
        //   this.nxtBtnDisable = ! this.nxtBtnDisable;
        // }
        /* next and previous button status */
        this.prevBtnDisable = true;
        this.nxtBtnDisable = false;
    }
    DragDropComponent.prototype.ngOnInit = function () {
        var _this = this;
        // call a service to get data of a particular assignment like : pagination info, header info, instruction info
        this.CommonserviceService.getXMLDataFromFactory('./drag-drop.xml')
            .subscribe(function (data) {
            _this.data = data['drag_drop'];
            _this.userResponseService.init(_this.data.rounds.round, 'drag-drop');
        });
        this.route.params.subscribe(function (params) {
            console.log(params);
            // this.CommonserviceService.getXMLDataFromFactory(params.url)
            //   .subscribe((data) => {
            //     this.data = data['drag_drop'];
            //     this.userResponseService.init(this.data.rounds.round,'drag-drop');
            //   });
        });
        //this.templateDataUrl = "./sod_t4_v1_u1_w1___ph_act1__.xml";
    };
    /* send pagination number */
    DragDropComponent.prototype.getNumOfPg = function () {
        return this.data.rounds.round;
    };
    /* send header information */
    DragDropComponent.prototype.getHeaderInfo = function () {
        return {
            headingTitle: this.data.title,
            backGround: ''
        };
    };
    /* send instruction to instruction modal */
    DragDropComponent.prototype.getInstructionInfo = function () {
        return {
            instructionHeader: 'Dummy Instruction header',
            instructionTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        };
    };
    /* send template data */
    DragDropComponent.prototype.getTemplateData = function () {
        return this.data;
    };
    DragDropComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-drag-drop',
            template: __webpack_require__("../../../../../src/app/interactives/drag-drop/drag-drop.component.html"),
            styles: [__webpack_require__("../../../../../src/app/interactives/drag-drop/drag-drop.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_services_commonservice_service__["a" /* CommonserviceService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__common_services_user_response_service__["a" /* UserResponseService */]])
    ], DragDropComponent);
    return DragDropComponent;
}());



/***/ }),

/***/ "../../../../../src/app/interactives/sod-home/sod-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='templateContainer' *ngIf = data>\r\n  <app-header [headerInfo] = getHeaderInfo()></app-header>\r\n  <sod-component [templateData] = getTemplateData()></sod-component>\r\n  <app-navigation [questions] = getNumOfPg() ></app-navigation>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/interactives/sod-home/sod-home.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  font-family: 'Open Sans', sans-serif;\n}\n.display-overlay {\n  display: block !important;\n}\n.overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 10000;\n  display: none;\n}\n*:active {\n  outline: none;\n}\n*:focus {\n  outline: none;\n}\n.show-focus-outlines *:active {\n  outline: none;\n  border: 2px solid #057bb4;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);\n}\n.show-focus-outlines *:focus {\n  outline: none;\n  border: 2px solid #057bb4;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/interactives/sod-home/sod-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SodHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_commonservice_service__ = __webpack_require__("../../../../../src/app/common/services/commonservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SodHomeComponent = (function () {
    function SodHomeComponent(CommonserviceService, route) {
        this.CommonserviceService = CommonserviceService;
        this.route = route;
        this.title = 'app';
        this.playStart = false;
        // chngBtnStatus(){
        //   this.prevBtnDisable = !this.prevBtnDisable;
        //   this.nxtBtnDisable = ! this.nxtBtnDisable;
        // }
        /* next and previous button status */
        this.prevBtnDisable = true;
        this.nxtBtnDisable = false;
    }
    SodHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // call a service to get data of a particular assignment like : pagination info, header info, instruction info
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.CommonserviceService.getXMLDataFromFactory(params.url)
                .subscribe(function (data) {
                _this.data = data['sorting_open_defined'];
            });
        });
        //this.templateDataUrl = "./sod_t4_v1_u1_w1___ph_act1__.xml";
    };
    /* send pagination number */
    SodHomeComponent.prototype.getNumOfPg = function () {
        return this.data.levels.level.rounds.round;
    };
    /* send header information */
    SodHomeComponent.prototype.getHeaderInfo = function () {
        return {
            headingTitle: this.data.title,
            backGround: ''
        };
    };
    /* send instruction to instruction modal */
    SodHomeComponent.prototype.getInstructionInfo = function () {
        return {
            instructionHeader: 'Dummy Instruction header',
            instructionTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        };
    };
    /* send template data */
    SodHomeComponent.prototype.getTemplateData = function () {
        return this.data;
    };
    SodHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sod-home',
            template: __webpack_require__("../../../../../src/app/interactives/sod-home/sod-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/interactives/sod-home/sod-home.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_services_commonservice_service__["a" /* CommonserviceService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], SodHomeComponent);
    return SodHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/interactives/sorting_open_defined/sod.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container fill\">\r\n    <main class=\"main-wrapper\" [style.height]=\"dynamicHeight+'px'\">\r\n        <!--fresh attempt activity area-->\r\n        <!--<div  #mainContainer class=\"container\" *ngIf = !endScreen>-->\r\n        <div  #mainContainer class=\"container\" >\r\n            <div class=\"direction\" [innerHTML]= \"directions\">\r\n            </div>\r\n            <div #mainactivityContent class=\"content\">\r\n                <div #slideDataContainer class=\"slide-data\">\r\n                    <div #slideSection class=\"slide-section\" role=\"application\" *ngIf = !this.attemptedSlideData>\r\n                        <div #droparea class=\"answer-section\">\r\n                            <div class=\"col-xs-15\" *ngFor=\"let qstn of qstnSets; let i = index; let isLast = last\">\r\n                                <div id=\"droppableBin{{i}}\" class=\"answer-box droppable\" [ngClass]=\"{'right':isLast}\" tabindex=\"0\">\r\n                                    <div class=\"content-title\" [innerHTML]= \"qstn.title\">\r\n                                    </div>\r\n                                    <div id=\"dropHolder{{i}}\" class=\"drop-holder\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"clearfix\"></div>\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                        <div #wrapAnsContainer class='custom-overlay'>\r\n                            <div #draggable class=\"droppable wordContainer input-texts col-md-12\" id=\"main-drop-container\" aria-label=\"droppable base region\">\r\n                            <span class=\"droppable-initial\" *ngFor=\"let option of options; let i = index;\" id=\"droppable{{i}}\">\r\n                              <span class=\"draggable\" id=\"draggable{{i}}\" tabindex=\"0\">\r\n                                  {{option}}\r\n                              </span>\r\n                            </span>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--previous Attempt answer show container-->\r\n                    <div *ngIf = this.attemptedSlideData id=\"previousAttempt\">\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </div>\r\n                <div *ngIf= showFeedBack [ngClass]=\"(feedBackStatus=='correct')?'feedbackGreen':'feedbackRed'\" class=\"input-texts col-md-12\" id=\"feedback-container\" aria-live=\"assertive\">\r\n                    <button *ngIf = \"feedBackAudioSrc\" id=\"audioBtn\" class=\"btn-volume\"><strong class=\"fa fa-volume-up\" aria-hidden=\"true\" (click)=\"playAudio()\" (keydown)=\"playAudio()\"></strong></button>\r\n                    <span id=\"feedbackBox\" role=\"dialog\" aria-label=\"feedback container\" [innerHTML] = feedbackTxt></span>\r\n                </div>\r\n                <section class=\"button-section\">\r\n                    <button  #resetBtn *ngIf =\"showTryAgain\" type=\"button\" (click)= tryAgain() (keydown)= reset() [disabled]= '!disableValidate' class=\"btn try-again\"  aria-label=\"try again\" aria-live=\"assertive\"><strong class=\"fa fa-undo\" aria-hidden=\"true\"></strong> TRY AGAIN</button>\r\n                    <button  #okBtn *ngIf =\"!showTryAgain && !allCorrect\" type=\"button\" (click)= validate() (keydown)= validate() [disabled]= 'disableValidate' class=\"btn check \" aria-label=\"Check\" aria-live=\"assertive\"><strong class=\"fa fa-check\" aria-hidden=\"true\"></strong> CHECK</button>\r\n                </section>\r\n            </div>\r\n            <div class=\"clear\"></div>\r\n        </div>\r\n\r\n\r\n<!--end screen starts-->\r\n<div *ngIf = this.endScreenInfo>\r\n    <result-screen [endScreenInfo] = endScreenInfo></result-screen>\r\n</div>\r\n    </main>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/interactives/sorting_open_defined/sod.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,400i,600,700,700i,800,900');\n.check,\n.try-again {\n  width: auto;\n  height: 38px;\n  background: #02588a;\n  border: none;\n  cursor: pointer;\n  color: #fff;\n  font-size: 18px;\n  padding: 2px 10px;\n  border-radius: 25px;\n}\n.check:disabled,\n.try-again:disabled {\n  cursor: not-allowed;\n}\n.drop-holder {\n  height: 80%;\n  text-align: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n.drop-holder .draggable {\n  -webkit-user-select: none;\n  /* Safari 3.1+ */\n  -moz-user-select: none;\n  /* Firefox 2+ */\n  -ms-user-select: none;\n  /* IE 10+ */\n  user-select: none;\n  display: block !important;\n}\n.custom-overlay {\n  min-height: 45px;\n  margin-top: 10px;\n}\n.main-wrapper {\n  background: url(\"/assets/iteractives/sorting_open_defined/images/background/background_yellow2.png\") no-repeat;\n  background-size: cover;\n  -webkit-box-shadow: 0px -5px 7px rgba(0, 0, 0, 0.2);\n          box-shadow: 0px -5px 7px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.answer-section {\n  margin-left: -3px;\n  margin-right: -3px;\n}\n.answer-box {\n  height: 245px;\n  padding: 0px !important;\n  background-color: #fff;\n  color: #000;\n  border: 2px solid #0292D1;\n  border-radius: 7px;\n  margin: 0 3px;\n}\n.answer-box .content-title {\n  background: url(\"/assets/iteractives/sorting_open_defined/images/background/box-bg.png\") top repeat-x;\n  color: #fff;\n  margin-top: 0;\n  text-align: center;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2PX;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.2;\n  padding: 8px 5px;\n}\n.answer-box .content-title i {\n  font-family: 'Montserrat', sans-serif;\n  font-style: italic;\n  font-size: 18px;\n}\n.right {\n  margin-right: 0 !important;\n}\n.input-texts {\n  background-color: #fff;\n  margin-top: 15px;\n  border: 2px solid #0292D1;\n  min-height: 60px;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 700;\n  font-size: 18px;\n  text-align: left;\n}\n.input-texts span {\n  line-height: 45px;\n  height: 45px;\n  padding-top: 5px;\n}\n.droppable-initial {\n  position: relative;\n  display: inline-block;\n  height: 100%;\n  width: 7em;\n  vertical-align: middle;\n  text-align: center;\n}\n.droppable-initial span.draggable {\n  -webkit-user-select: none;\n  /* Safari 3.1+ */\n  -moz-user-select: none;\n  /* Firefox 2+ */\n  -ms-user-select: none;\n  /* IE 10+ */\n  user-select: none;\n}\n.droppable-initial span.draggable:focus {\n  padding: 5px;\n}\n.direction {\n  font-size: 18px;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-top: 15px;\n  font-weight: 700;\n  line-height: 1.2;\n  margin-bottom: 20px;\n}\n.button:disabled:hover {\n  background-position: 0 -1px;\n}\n.button-section {\n  text-align: right;\n  padding-top: 5px;\n  padding-bottom: 20px;\n}\n.completepopup .modal-dialog {\n  width: 50%;\n  margin: auto;\n}\n#feedback-container {\n  min-height: 39px;\n  margin-left: 3%;\n  margin-bottom: 15px;\n  width: 97%;\n}\n.btn-volume {\n  width: 28px;\n  height: 28px;\n  background-color: #ECF3F6;\n  border-radius: 50%;\n  border: 1px solid lightgray;\n  position: absolute;\n  left: -37px;\n  top: 8px;\n  color: #005a8a;\n  -webkit-box-shadow: 1px 1px 1px 1px #AAA8A9;\n          box-shadow: 1px 1px 1px 1px #AAA8A9;\n}\n#feedbackBox {\n  width: auto;\n  position: relative;\n}\n.feedbackRed {\n  border-color: #d12229;\n  border-width: 2px;\n}\n.feedbackGreen {\n  border-color: #4eec4e;\n  border-width: 4px;\n}\n.answer-box.droppable span.draggable {\n  -webkit-user-select: none;\n  /* Safari 3.1+ */\n  -moz-user-select: none;\n  /* Firefox 2+ */\n  -ms-user-select: none;\n  /* IE 10+ */\n  user-select: none;\n  font-weight: 900;\n  display: block;\n}\n.answer-box.droppable span.draggable ::ng-deep .correctImg {\n  background: url(\"/assets/iteractives/sorting_open_defined/images/background/right.png\") no-repeat;\n  background-size: cover;\n  position: absolute;\n  height: 20px;\n  width: 23px;\n  display: inline-block;\n}\n.answer-box.droppable span.draggable ::ng-deep .wrongImg {\n  background: url(\"/assets/iteractives/sorting_open_defined/images/background/wrong.png\") no-repeat;\n  background-size: cover;\n  position: absolute;\n  height: 20px;\n  width: 23px;\n  display: inline-block;\n}\n.draggable {\n  -webkit-user-select: none;\n  /* Safari 3.1+ */\n  -moz-user-select: none;\n  /* Firefox 2+ */\n  -ms-user-select: none;\n  /* IE 10+ */\n  user-select: none;\n  text-align: center;\n  cursor: pointer;\n  font-size: 18px;\n  font-weight: 900;\n  z-index: 999;\n}\n#previousAttempt {\n  width: auto;\n  padding: 41px;\n}\n.slide-data {\n  min-height: 347px;\n}\n.wordContainer.active {\n  border: 5px solid yellow;\n}\n.activeSelected {\n  border: 5px solid yellow;\n}\n@media screen and (min-width: 600px) {\n  .col-xs-15 {\n    width: 20% !important;\n    float: left;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .input-texts {\n    min-height: 45px;\n    margin-top: 10px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .answer-box {\n    min-height: 150px;\n  }\n  .input-texts {\n    min-height: 50px;\n    line-height: 15px;\n  }\n}\n@media screen and (max-width: 599px) {\n  .answer-box {\n    margin-bottom: 7px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/interactives/sorting_open_defined/sod.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sortingOpenDefinedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_dragdropservice_service__ = __webpack_require__("../../../../../src/app/common/services/dragdropservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_commonservice_service__ = __webpack_require__("../../../../../src/app/common/services/commonservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var sortingOpenDefinedComponent = (function () {
    function sortingOpenDefinedComponent(DragdropService, CommonserviceService) {
        var _this = this;
        this.DragdropService = DragdropService;
        this.CommonserviceService = CommonserviceService;
        this.qstnSets = [];
        this.options = [];
        this.disableValidate = true;
        this.playStart = true;
        this.wrongAnswers = [];
        this.showTryAgain = false;
        this.allCorrect = false;
        this.showFeedBack = false;
        this.dummyFeedBackTxt = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
        this.feedBackAudioSrc = 'dummy';
        this.attemptCount = 0;
        this.totalTime = 0;
        this.activityStarted = false;
        this.endScreen = false;
        this.wrongAttemptSound = [
            'sfx/not_correct_try_again_1.mp3',
            'sfx/not_it_try_again_1.mp3',
            'sfx/not_quite_keep_trying_1.mp3'
        ];
        this.correctAttemptSound = [
            'sfx/excellent_work_1.mp3',
            'sfx/good_job_1.mp3',
            'sfx/fantastic_1.mp3',
            'sfx/great_job.mp3'
        ];
        this.currentIndex = 0;
        this.reach = this.currentIndex;
        this.slideStates = [];
        this.endScreenInfo = false;
        this.dynamicHeight = 0;
        this.init();
        this.CommonserviceService.gotoPrevNext.subscribe(function (prevNxtStatus) { return _this.prenNxtStatusHandler(prevNxtStatus); });
        this.CommonserviceService.enableOkBtn.subscribe(function (args) { return _this.shouldEnableOk(args); });
    }
    sortingOpenDefinedComponent.prototype.onResize = function () {
        this.dynamicHeight = window.innerHeight - (jQuery('header').height() + jQuery('footer').height());
        console.log('set height', this.mainContainer.nativeElement.height);
    };
    sortingOpenDefinedComponent.prototype.ngOnInit = function () {
        this.dynamicHeight = window.innerHeight - (jQuery('header').height() + jQuery('footer').height());
        this.loadData();
        this.startTimeCount();
    };
    sortingOpenDefinedComponent.prototype.ngAfterViewChecked = function () {
        if (this.dragElms && this.dropElms) {
            this.DragdropService.makeDraggable(this.dragElms.nativeElement);
            this.DragdropService.makeDroppable(this.dropElms.nativeElement, this.dragElms.nativeElement);
        }
        // to enable dragging
        if (!(this.attemptCount > 0) && !this.attemptedSlideData) {
            this.enableDisableDragging('all');
        }
    };
    sortingOpenDefinedComponent.prototype.startTimeCount = function () {
        var _this = this;
        setInterval(function () {
            _this.totalTime++;
        }, 1000);
    };
    sortingOpenDefinedComponent.prototype.init = function () {
        this.directions = '';
        this.qstnSets = [];
        this.options = [];
        this.qstnData = {};
        this.title = '';
        this.disableValidate = true;
        this.playStart = true;
        this.DragdropService.dropPos = {};
        this.DragdropService.selectedOptions = {};
        this.wrongAnswers = [];
        // other chanegs for feedback and buttons
        this.showTryAgain = false;
        this.allCorrect = false;
        this.showFeedBack = false;
        this.feedbackTxt = '';
        this.feedBackStatus = '';
        this.dummyFeedBackTxt = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
        this.feedBackAudioSrc = 'dummy';
        this.attemptCount = 0;
    };
    /* make structure object to hold answer states */
    sortingOpenDefinedComponent.prototype.makeAnsStateObjs = function () {
        var numOfScreen = this.allQuestions.length;
        for (var i = 0; i < numOfScreen; i++) {
            this.slideStates.push({
                firstAttempt: '',
                secondAttempt: '',
                total: 0,
                incorrect: 0
            });
        }
    };
    /* loads question data into current page */
    sortingOpenDefinedComponent.prototype.loadData = function () {
        this.qstnData = this.templateData;
        this.allQuestions = this.qstnData.levels.level.rounds.round;
        this.title = this.qstnData.title;
        this.directions = this.qstnData.directions;
        if (!this.activityStarted) {
            this.activityStarted = true;
            this.makeAnsStateObjs();
        }
        if (!this.slideStates[this.currentIndex]['secondAttempt']) {
            this.afterloadData();
        }
    };
    sortingOpenDefinedComponent.prototype.afterloadData = function () {
        this.prepareQuestionSet(this.currentIndex);
        this.makeOptions();
    };
    /* preapres question bins set for a page */
    sortingOpenDefinedComponent.prototype.prepareQuestionSet = function (index) {
        var bins = this.allQuestions[index].screens.item.bins.bin;
        var trimedTitle;
        for (var i = 0; i < bins.length; i++) {
            trimedTitle = this.trimTitle(bins[i].title);
            this.qstnSets.push({
                title: bins[i].title,
                options: this.getOptions(bins[i].contents.item),
                trimedTitle: trimedTitle
            });
        }
    };
    /* trims <i> tags from title of elemnts*/
    sortingOpenDefinedComponent.prototype.trimTitle = function (tag) {
        return tag.replace('<i>', '').replace('</i>', '');
    };
    /* returns an array that stores the correct answers for each bin */
    sortingOpenDefinedComponent.prototype.getOptions = function (item) {
        var tempArr = [];
        if (item.length === undefined) {
            tempArr.push(item.text);
        }
        else {
            for (var i = 0; i < item.length; i++) {
                tempArr.push(item[i].text);
            }
        }
        return tempArr;
    };
    /* shuffles and makes draggable options available*/
    sortingOpenDefinedComponent.prototype.makeOptions = function () {
        var _this = this;
        var option;
        for (var i = 0; i < this.qstnSets.length; i++) {
            option = this.qstnSets[i].options;
            option.map(function (elm) {
                _this.options.push(elm);
            });
        }
        this.options = this.shuffle(this.options);
        this.slideStates[this.currentIndex]['total'] = this.options.length;
    };
    /* shuffles array */
    sortingOpenDefinedComponent.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    /* function to validate the answers */
    sortingOpenDefinedComponent.prototype.validate = function () {
        this.attemptCount++;
        this.incorrect = false;
        for (var key in this.DragdropService.selectedOptions) {
            var idx = parseInt(key[key.length - 1], 10);
            this.optionsToRevert(this.qstnSets[idx].options, this.DragdropService.selectedOptions[key]);
        }
        if (this.incorrect) {
            // wrong answer
            if (!this.answeredAll) {
                this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'next', status: true });
            }
            this.disableValidate = true;
            this.play(this.wrongAttemptSound[Math.round(Math.random() * 2)]);
            this.playStart = true;
            this.showTryAgain = true;
            this.enableDisableDragging('none');
            // feed back status
            this.showFeedBack = true;
            this.feedBackStatus = 'incorrect';
            this.feedbackTxt = "Incorrect! " + this.dummyFeedBackTxt;
            // if user is on second attempt
            if (this.attemptCount >= 2) {
                this.onSecondIncorrectAttempt();
            }
        }
        else {
            // answered correctly navigation option available
            // answered correctly but current page is not last page
            if (this.currentIndex !== this.allQuestions.length - 1) {
                // implemented differently
                this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'next', status: false });
                this.play(this.correctAttemptSound[Math.round(Math.random() * 2)]);
                this.playStart = true;
                this.disableValidate = true;
                this.answered = this.currentIndex;
                // feed back and check button status
                this.allCorrect = true;
                this.showFeedBack = true;
                this.feedBackStatus = 'correct';
                this.feedbackTxt = "Correct! " + this.dummyFeedBackTxt;
                // store data
                this.storeDataOnSecondAttempt();
            }
            else {
                // answered correctly but current page the  last page
                // $rootScope.$broadcast('complete');
                // implemented differently
                this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'next', status: false });
                this.play(this.correctAttemptSound[3]);
                this.playStart = true;
                this.disableValidate = true;
                this.answeredAll = true;
                this.answered = this.currentIndex;
                // feed back and check button status
                this.allCorrect = true;
                this.showFeedBack = true;
                this.feedBackStatus = 'correct';
                this.feedbackTxt = "Correct! " + this.dummyFeedBackTxt;
            }
        }
    };
    /* function to handle if the second attempt also wrong*/
    sortingOpenDefinedComponent.prototype.onSecondIncorrectAttempt = function () {
        // feed back and check button status
        this.allCorrect = true;
        this.showTryAgain = false;
        // implemented differently
        this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'next', status: false });
        this.storeDataOnSecondAttempt();
    };
    sortingOpenDefinedComponent.prototype.storeDataOnSecondAttempt = function () {
        var _this = this;
        setTimeout(function () {
            var answerState = jQuery(_this.slideSection.nativeElement).html();
            var curentObj = _this.slideStates[_this.currentIndex];
            curentObj['secondAttempt'] = answerState;
        }, 1000);
    };
    /* gets called by validate() to check if answer attempt was correct */
    sortingOpenDefinedComponent.prototype.optionsToRevert = function (options, answers) {
        var _this = this;
        var incorrectAnswers = [], userAns;
        for (var i = 0; i < answers.length; i++) {
            userAns = jQuery(answers[i])
                .text()
                .trim();
            if (options.indexOf(userAns) === -1) {
                incorrectAnswers.push(answers[i]);
            }
            else {
                jQuery(answers[i]).append('<span class="correctImg"></span>');
            }
        }
        // removes each incorrect answers form the bin , leaving behind  the correct ones
        incorrectAnswers.map(function (elm) {
            if (!!elm) {
                // do not revert when after second attempt
                if (!(_this.attemptCount >= 2)) {
                    _this.resetThisElement(jQuery(elm).attr("id"));
                    _this.revertWrongAns(elm, incorrectAnswers);
                }
                else {
                    jQuery(elm).css('text-decoration', 'line-through').append('<span class="wrongImg"></span>');
                    _this.revertWrongAns(elm, incorrectAnswers);
                }
            }
        });
    };
    /*revert answer on the basis of attempt count*/
    sortingOpenDefinedComponent.prototype.revertWrongAns = function (elm, incorrectAnswers) {
        var wrongAnsCount = 0;
        this.DragdropService.removeFromSelectedOptions(elm);
        if (incorrectAnswers.length) {
            wrongAnsCount++;
            this.incorrect = true;
            // to store wrong answer count for end screen
            if (this.attemptCount === 1) {
                this.slideStates[this.currentIndex]['incorrect'] = this.slideStates[this.currentIndex]['incorrect'] + wrongAnsCount;
            }
        }
    };
    /* resets each element from bin to '.word-container' */
    sortingOpenDefinedComponent.prototype.resetThisElement = function (element) {
        var id = element.split('draggable')[1];
        var ansBox = '#droppable' + id;
        var dragItem = 'draggable' + id;
        var dragItemId = '#' + dragItem;
        var ans = jQuery(dragItemId)[0];
        jQuery(ans).css({
            display: 'inline'
        });
        jQuery(dragItemId).removeClass('activeSelected');
        jQuery(dragItemId).remove();
        jQuery('.draggable').attr('tabindex', 0);
        this.DragdropService.accessFlag = false;
        if (this.DragdropService.dropPos[dragItem]) {
            if (this.DragdropService.dropPos[dragItem].top < jQuery('#droppableBin0').width()) {
                ans.style.top = this.DragdropService.stackTop + 'px';
                ans.style.left = this.DragdropService.dropPos[dragItem].left + 'px';
            }
            else {
                ans.style.top = this.DragdropService.dropPos[dragItem].top + 'px';
                ans.style.left = this.DragdropService.dropPos[dragItem].left + 'px';
            }
        }
        jQuery(ansBox).append(ans);
        jQuery('.draggable')
            .off('keydown')
            .on('keydown', this.DragdropService.draggableAccs);
        jQuery(ans).animate({
            display: 'inline',
            position: 'relative',
            top: '0px',
            left: '0px'
        }, {
            easing: 'linear',
            duration: 500,
            complete: function () {
                jQuery(ans).draggable({
                    containment: '.main-wrapper',
                    revert: 'invalid',
                    stop: function () {
                        jQuery(ans).css('border', 'none');
                    }
                });
            }
        });
        this.DragdropService.dropPos[dragItem] = {};
    };
    /* uses soundservice to play feedback audios */
    sortingOpenDefinedComponent.prototype.play = function (src) {
        // soundservice.playSound(src);
        // this.playStart = true;
    };
    /* function to reset all the answers */
    sortingOpenDefinedComponent.prototype.tryAgain = function () {
        /* feedback and dragging */
        this.showTryAgain = false;
        this.showFeedBack = false;
        this.enableDisableDragging('all');
    };
    /* method to handle the previous next button status*/
    sortingOpenDefinedComponent.prototype.prenNxtStatusHandler = function (prevNxtStatus) {
        if (prevNxtStatus === 'next') {
            this.nextClick();
        }
        else if (prevNxtStatus === 'prev') {
            this.prevClick();
        }
    };
    /* responds to next-page button click , loads next page , and */
    sortingOpenDefinedComponent.prototype.nextClick = function () {
        if (this.endScreen) {
            return false;
        }
        this.attemptedSlideData = '';
        this.showFeedBack = false;
        this.slideDataContainer.nativeElement.style.display = 'none';
        jQuery('.slide-data').slideDown('slow');
        if (this.allQuestions.length - 1 === this.currentIndex) {
            // this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'next', status: true });
            this.showResults();
        }
        else {
            if (!this.answeredAll) {
                this.init();
                this.currentIndex++;
                this.loadData();
                if (this.reach < this.currentIndex) {
                    this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'next', status: true });
                }
                if (this.reach == this.currentIndex && !this.answeredAll && this.currentIndex != this.answered) {
                    this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'next', status: true });
                }
                this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'prev', status: false });
                this.reach = this.currentIndex;
                this.showPreviousData(this.slideStates[this.currentIndex]['secondAttempt']);
            }
            else {
                this.currentIndex++;
                this.init();
                this.loadData();
                this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'prev', status: false });
                if (this.currentIndex === this.allQuestions.length - 1) {
                    this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'next', status: true });
                }
                this.showPreviousData(this.slideStates[this.currentIndex]['secondAttempt']);
            }
        }
    };
    /* responds to previous page button click */
    sortingOpenDefinedComponent.prototype.prevClick = function () {
        this.attemptedSlideData = '';
        this.showFeedBack = false;
        if (this.currentIndex === 0 || this.currentIndex - 1 === 0) {
            this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'prev', status: true });
            this.init();
            --this.currentIndex;
            this.loadData();
            this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'next', status: false });
        }
        else {
            this.init();
            --this.currentIndex;
            this.loadData();
            this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'prev', status: false });
            this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'next', status: false });
        }
        this.showPreviousData(this.slideStates[this.currentIndex]['secondAttempt']);
    };
    sortingOpenDefinedComponent.prototype.showPreviousData = function (prevDataAvailable) {
        var _this = this;
        // check if previous data is available or not
        if (!prevDataAvailable) {
            return false;
        }
        this.attemptedSlideData = prevDataAvailable;
        setTimeout(function () {
            jQuery('#previousAttempt').empty().css('display', 'none');
            jQuery('#previousAttempt').append(_this.attemptedSlideData);
            jQuery('#previousAttempt').slideDown('medium');
        }, 500);
    };
    /* validates OK button if user have attempted current page completely */
    sortingOpenDefinedComponent.prototype.shouldEnableOk = function (args) {
        var _this = this;
        if (this.okBtn) {
            if (this.options.length) {
                if (this.options.length === args) {
                    this.disableValidate = false;
                    this.okBtn.nativeElement.disabled = false;
                    this.okBtn.nativeElement.focus(); // for accesibility on attempt complete triggers focus on OK button
                }
                else {
                    this.disableValidate = true;
                }
            }
        }
        else {
            setTimeout(function () {
                _this.shouldEnableOk(args);
            }, 2000);
        }
    };
    /* send data to result screen*/
    sortingOpenDefinedComponent.prototype.showResults = function () {
        this.endScreen = true;
        var incorrect = 0, totalQuestions = 0, timeDuration = 0;
        for (var _i = 0, _a = this.slideStates; _i < _a.length; _i++) {
            var i = _a[_i];
            incorrect += i['incorrect'];
            totalQuestions += i['total'];
        }
        var endScreenObj = {
            incorrect: incorrect,
            totalQuestions: totalQuestions,
            timeDuration: this.totalTime
        };
        this.endScreenInfo = endScreenObj;
    };
    // reponds if user click play again button on final page
    sortingOpenDefinedComponent.prototype.playAgain = function () {
        this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'prev', status: true });
        this.currentIndex = 0;
        this.init();
        this.loadData();
        this.CommonserviceService.chngPrevNxtEnblDisbl({ btn: 'next', status: false });
    };
    // enable disable dragging
    sortingOpenDefinedComponent.prototype.enableDisableDragging = function (state) {
        this.wrapAnsContainer.nativeElement.style['pointer-events'] = state;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], sortingOpenDefinedComponent.prototype, "onResize", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], sortingOpenDefinedComponent.prototype, "templateData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mainContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], sortingOpenDefinedComponent.prototype, "mainContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('wrapAnsContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], sortingOpenDefinedComponent.prototype, "wrapAnsContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('draggable'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], sortingOpenDefinedComponent.prototype, "dragElms", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('droparea'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], sortingOpenDefinedComponent.prototype, "dropElms", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slideSection'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], sortingOpenDefinedComponent.prototype, "slideSection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('okBtn'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], sortingOpenDefinedComponent.prototype, "okBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mainContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], sortingOpenDefinedComponent.prototype, "mainContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slideDataContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], sortingOpenDefinedComponent.prototype, "slideDataContainer", void 0);
    sortingOpenDefinedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sod-component',
            template: __webpack_require__("../../../../../src/app/interactives/sorting_open_defined/sod.component.html"),
            styles: [__webpack_require__("../../../../../src/app/interactives/sorting_open_defined/sod.component.less")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__common_services_dragdropservice_service__["a" /* DragdropService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_services_dragdropservice_service__["a" /* DragdropService */], __WEBPACK_IMPORTED_MODULE_2__common_services_commonservice_service__["a" /* CommonserviceService */]])
    ], sortingOpenDefinedComponent);
    return sortingOpenDefinedComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/iteractives/sorting_open_defined/images/background/background_yellow2.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background_yellow2.7f7d55ac54d5a8707482.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
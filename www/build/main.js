webpackJsonp([0],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_spinner_loading_spinner__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signinwithemail_signinwithemail__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_signup__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SigninPage = (function () {
    function SigninPage(navCtrl, toastCtrl, authService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__providers_auth_user__["a" /* User */]();
        this.loadingSpinner = new __WEBPACK_IMPORTED_MODULE_5__providers_loading_spinner_loading_spinner__["a" /* LoadingSpinner */](this.loadingCtrl);
    }
    SigninPage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.signInWithEmailPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signinwithemail_signinwithemail__["a" /* SigninWithEmailPage */]);
    };
    SigninPage.prototype.signInWithFacebook = function () {
        var _this = this;
        this.authService.signInWithFacebook()
            .then(function () {
            _this.loadingSpinner.presentLoading();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
        })
            .catch(function (error) {
            _this.loadingSpinner.presentLoadingCustom(100);
            _this.toastCtrl.create({ duration: 3000, position: 'bottom', message: 'Erro ao efetuar o login.' })
                .present();
        });
    };
    SigninPage.prototype.signInWithGoogle = function () {
        var _this = this;
        this.authService.signInWithGoogle()
            .then(function () {
            _this.loadingSpinner.presentLoading();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
        })
            .catch(function (error) {
            _this.loadingSpinner.closeLoading();
            _this.toastCtrl.create({ duration: 3000, position: 'bottom', message: "Erro ao efetuar o login." })
                .present();
        });
    };
    return SigninPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('form'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */])
], SigninPage.prototype, "form", void 0);
SigninPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signin',template:/*ion-inline-start:"/Users/wallaceaugusto/Programacao/Ionic/encontro-mobile/src/pages/signin/signin.html"*/'<ion-content class="conteudo" padding> \n\n  <p id="titulo"text-center>Encontro Online</p>\n\n  <button ion-button block color="light" (click)="createAccount()">\n    Criar conta\n  </button>\n\n  <p text-center>ou</p>\n\n  <button ion-button block (click)="signInWithEmailPage()">\n    Entrar com e-mail e senha\n  </button>\n\n  <button ion-button block icon-left color="danger" margin-top (click)="signInWithGoogle()">\n    <ion-icon name="logo-google"></ion-icon>\n    Entrar com o Google\n  </button>\n\n  <button ion-button block icon-left color="facebook" margin-top (click)="signInWithFacebook()" >\n    <ion-icon name="logo-facebook"></ion-icon>\n    Entrar com o Facebook  \n  </button>\n\n</ion-content>'/*ion-inline-end:"/Users/wallaceaugusto/Programacao/Ionic/encontro-mobile/src/pages/signin/signin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], SigninPage);

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marcar_encontro_marcar_encontro__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgendaPage = (function () {
    function AgendaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.encontros = [];
        this.encontros = this.navParams.get('param');
    }
    AgendaPage.prototype.goToMarcarEncontro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__marcar_encontro_marcar_encontro__["a" /* MarcarEncontroPage */]);
    };
    return AgendaPage;
}());
AgendaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'agenda-page',template:/*ion-inline-start:"/Users/wallaceaugusto/Programacao/Ionic/encontro-mobile/src/pages/agenda/agenda.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Encontros</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <div *ngFor="let encontro of encontros">\n      {{encontro.descricao}} às {{encontro.hora}} <br /> \n      do dia {{encontro.data | date: \'dd/MM/yyyy\'}} em {{encontro.local}}\n    </div>\n\n    <div class="wrapper">\n        <button ion-button outline (click)="goToMarcarEncontro()">Marcar Encontro</button>\n    </div>\n  </ion-content>'/*ion-inline-end:"/Users/wallaceaugusto/Programacao/Ionic/encontro-mobile/src/pages/agenda/agenda.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavParams */]])
], AgendaPage);

//# sourceMappingURL=agenda.js.map

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncontroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__encontro__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EncontroService = (function () {
    function EncontroService(db, angularFireAuth, fb) {
        this.db = db;
        this.angularFireAuth = angularFireAuth;
        this.fb = fb;
        var path = '/encontros/' + this.angularFireAuth.auth.currentUser.uid;
        this.itens = db.list(path, {
            query: {
                orderByChild: 'encontro.descricao'
                //, equalTo: 'A' para fazer query com valor igual a "A"
            }
        });
    }
    EncontroService.prototype.save = function (iten) {
        debugger;
        if (iten.$key) {
            return this.itens.update(iten.$key, { encontro: __WEBPACK_IMPORTED_MODULE_0__encontro__["a" /* Encontro */] });
        }
        else {
            this.encontro = new __WEBPACK_IMPORTED_MODULE_0__encontro__["a" /* Encontro */]();
            return this.itens.push({ encontro: __WEBPACK_IMPORTED_MODULE_0__encontro__["a" /* Encontro */], url: iten.url, fullPath: iten.fullPath });
        }
    };
    EncontroService.prototype.remove = function (iten) {
        return this.itens.remove(iten.$key);
    };
    return EncontroService;
}());
EncontroService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2__["b" /* FirebaseApp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2__["b" /* FirebaseApp */]) === "function" && _c || Object])
], EncontroService);

var _a, _b, _c;
//# sourceMappingURL=encontro-service.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Encontro; });
var Encontro = (function () {
    function Encontro() {
        this.descricao = "";
        this.local = "";
    }
    return Encontro;
}());

//# sourceMappingURL=encontro.js.map

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		247
	],
	"../pages/signin/signin.module": [
		254
	],
	"../pages/signinwithemail/signinwithemail.module": [
		255
	],
	"../pages/signup/signup.module": [
		256
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 246;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomePage */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninWithEmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_loading_spinner_loading_spinner__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetpassword_resetpassword__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_user__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SigninWithEmailPage = (function () {
    function SigninWithEmailPage(navCtrl, toastCtrl, authService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.user = new __WEBPACK_IMPORTED_MODULE_6__providers_auth_user__["a" /* User */]();
        this.loadingSpinner = new __WEBPACK_IMPORTED_MODULE_1__providers_loading_spinner_loading_spinner__["a" /* LoadingSpinner */](this.loadingCtrl);
    }
    SigninWithEmailPage.prototype.signIn = function (email, password) {
        var _this = this;
        if (this.form.form.valid) {
            this.loadingSpinner.presentLoading();
            this.authService.signIn(this.user)
                .then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            })
                .catch(function (error) {
                _this.loadingSpinner.closeLoading();
                var toast = _this.toastCtrl.create({ duration: 3000, position: 'bottom' });
                if (error.code == 'auth/invalid-email') {
                    toast.setMessage('O e-mail digitado é inválido.');
                }
                else if (error.code == 'auth/user-disabled') {
                    toast.setMessage('O usuário está desativado.');
                }
                else if (error.code == 'auth/user-not-found') {
                    toast.setMessage('O usuário não foi encontrado.');
                }
                else if (error.code == 'auth/wrong-password') {
                    toast.setMessage('A senha digitada não é valida.');
                }
                toast.present();
            });
        }
    };
    SigninWithEmailPage.prototype.resetPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__resetpassword_resetpassword__["a" /* ResetPasswordPage */]);
    };
    return SigninWithEmailPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["_14" /* ViewChild */])('form'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* NgForm */])
], SigninWithEmailPage.prototype, "form", void 0);
SigninWithEmailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["n" /* Component */])({
        selector: 'sign-in-with-email-page',template:/*ion-inline-start:"/Users/wallaceaugusto/Programacao/Ionic/encontro-mobile/src/pages/signinwithemail/signinwithemail.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n  \n  \n  <ion-content class="conteudo" padding center text-center>\n  \n    <form class="form" #form="ngForm" novalidate>\n      <ion-list>\n  \n        <ion-item class="campo">\n          <ion-label stacked>E-mail</ion-label>\n          <ion-input type="text" name="email" [(ngModel)]="user.email" #email="ngModel" required></ion-input>\n        </ion-item>\n\n        <ion-item class="error" *ngIf="email.errors && (email.dirty || email.touched)" align-bottom>\n          O campo E-mail é obrigatório\n        </ion-item>\n  \n        <ion-item class="campo">\n          <ion-label stacked>Senha</ion-label>\n          <ion-input type="password" name="password" [(ngModel)]="user.password" #password="ngModel" required></ion-input>\n        </ion-item>\n\n        <ion-item class="error" *ngIf="password.errors && (password.dirty || password.touched)">\n          O campo Senha é obrigatório\n        </ion-item>\n  \n      </ion-list>\n  \n      <button ion-button block color="primary" [disabled]="!this.form.valid" (click)="signIn()">\n        Entrar\n      </button>\n    </form>\n  \n    <button id="esqueci-senha" ion-button block clear (click)="resetPassword()">\n      Esqueci minha senha\n    </button>\n  \n  </ion-content>'/*ion-inline-end:"/Users/wallaceaugusto/Programacao/Ionic/encontro-mobile/src/pages/signinwithemail/signinwithemail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* LoadingController */]])
], SigninWithEmailPage);

//# sourceMappingURL=signinwithemail.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordPage = (function () {
    function ResetPasswordPage(navCtrl, toastCtrl, authService) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.userEmail = '';
    }
    ResetPasswordPage.prototype.resetPassword = function () {
        var _this = this;
        if (this.form.form.valid) {
            var toast_1 = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
            this.authService.resetPassword(this.userEmail)
                .then(function () {
                toast_1.setMessage('Solicitação foi enviada para o seu e-mail.');
                toast_1.present();
                _this.navCtrl.pop();
            })
                .catch(function (error) {
                if (error.code == 'auth/invalid-email') {
                    toast_1.setMessage('O e-mail digitado não é valido.');
                }
                else if (error.code == 'auth/user-not-found') {
                    toast_1.setMessage('O usuário não foi encontrado.');
                }
                toast_1.present();
            });
        }
    };
    return ResetPasswordPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_14" /* ViewChild */])('form'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* NgForm */])
], ResetPasswordPage.prototype, "form", void 0);
ResetPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'reset-password-page',template:/*ion-inline-start:"/Users/wallaceaugusto/Programacao/Ionic/encontro-mobile/src/pages/resetpassword/resetpassword.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>\n        Resetar minha senha\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content class="conteudo" padding>\n    <form class="form" #form="ngForm" novalidate>\n      <ion-list>\n  \n        <ion-item class="campo">\n          <ion-label stacked>E-mail</ion-label>\n          <ion-input type="text" name="email" [(ngModel)]="userEmail" #email="ngModel" required></ion-input>\n        </ion-item>\n        <ion-item class="error" *ngIf="email.errors && (email.dirty || email.touched)">\n          O campo é obrigatório\n        </ion-item>\n  \n      </ion-list>\n  \n      <button ion-button block color="primary" [disabled]="!form.form.valid" (click)="resetPassword()">\n        Resetar minha senha\n      </button>\n    </form>\n  </ion-content>\n  '/*ion-inline-end:"/Users/wallaceaugusto/Programacao/Ionic/encontro-mobile/src/pages/resetpassword/resetpassword.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__["a" /* AuthService */]])
], ResetPasswordPage);

//# sourceMappingURL=resetpassword.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_loading_spinner_loading_spinner__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupPage = (function () {
    function SignupPage(navCtrl, toastCtrl, authService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__providers_auth_user__["a" /* User */]();
        this.loadingSpinner = new __WEBPACK_IMPORTED_MODULE_0__providers_loading_spinner_loading_spinner__["a" /* LoadingSpinner */](this.loadingCtrl);
    }
    SignupPage.prototype.createAccount = function () {
        var _this = this;
        if (this.form.form.valid) {
            this.loadingSpinner.presentLoading();
            var toast_1 = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
            this.authService.createUser(this.user)
                .then(function (user) {
                _this.loadingSpinner.presentLoading();
                user.sendEmailVerification();
                toast_1.setMessage('Usuário criado com sucesso!');
                toast_1.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
            })
                .catch(function (error) {
                _this.loadingSpinner.closeLoading();
                if (error.code == 'auth/email-already-in-use') {
                    toast_1.setMessage('O email digitado já está em uso.');
                }
                else if (error.code == 'auth/invalid-email') {
                    toast_1.setMessage('O email digitado não é válido.');
                }
                else if (error.code == 'auth/operation-not-allowed') {
                    toast_1.setMessage('Não está habilitado criar usuários.');
                }
                else if (error.code == 'auth/weak-password') {
                    toast_1.setMessage('A senha digitada é muito fraca.');
                }
                //toast.setMessage(error.message); pega a mensagem de erro diretamente do Firebase
                toast_1.present();
            });
        }
    };
    return SignupPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_14" /* ViewChild */])('form'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* NgForm */])
], SignupPage.prototype, "form", void 0);
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
        selector: 'signup-page',template:/*ion-inline-start:"/Users/wallaceaugusto/Programacao/Ionic/encontro-mobile/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Criar nova conta\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="conteudo" padding>\n  <form #form="ngForm" novalidate class="form">\n    <ion-list>\n\n      <ion-item class=\'campo\'>\n        <ion-label stacked>E-mail</ion-label>\n        <ion-input type="text" name="email" [(ngModel)]="user.email" #email="ngModel" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="email.errors && (email.dirty || email.touched)" class="text-danger">\n        O campo é obrigatório\n      </ion-item>\n\n      <ion-item class=\'campo\'>\n        <ion-label stacked>Senha</ion-label>\n        <ion-input type="password" name="password" [(ngModel)]="user.password" #password="ngModel" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="password.errors && (password.dirty || password.touched)" class="text-danger">\n        O campo é obrigatório\n      </ion-item>\n\n    </ion-list>\n\n    <button class=\'campo\' ion-button block color="primary" (click)="createAccount()">\n      Criar conta\n    </button>\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/wallaceaugusto/Programacao/Ionic/encontro-mobile/src/pages/signup/signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* LoadingController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageModule", function() { return SigninPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SigninPageModule = (function () {
    function SigninPageModule() {
    }
    return SigninPageModule;
}());
SigninPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signin__["a" /* SigninPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signin__["a" /* SigninPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__signin__["a" /* SigninPage */]
        ]
    })
], SigninPageModule);

//# sourceMappingURL=signin.module.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signinwithemail__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signinwithemail__["a" /* SigninWithEmailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signinwithemail__["a" /* SigninWithEmailPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__signinwithemail__["a" /* SigninWithEmailPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=signinwithemail.module.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    return SignupPageModule;
}());
SignupPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]
        ]
    })
], SignupPageModule);

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarcarEncontroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_encontro_service_encontro_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agenda_agenda__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_encontro__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MarcarEncontroPage = (function () {
    function MarcarEncontroPage(navCtrl, navParams, alertCtrl, encontroService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.encontroService = encontroService;
        this.encontro = new __WEBPACK_IMPORTED_MODULE_4__providers_encontro__["a" /* Encontro */]();
        this.encontroKey = null;
        this.encontro;
        if (this.navParams.data.encontro) {
            this.encontro = this.navParams.data.encontro;
            this.encontroKey = this.navParams.data.contact.$key;
        }
    }
    MarcarEncontroPage.prototype.marcarEncontro = function () {
        this.encontro.descricao = this.descricao;
        this.encontro.data = this.data;
        this.encontro.hora = this.hora;
        this.encontro.local = this.local;
        // this.encontros = this.navParams.get('listaEncontros');
        if (this.descricao != undefined && this.data != undefined && this.hora != undefined && this.local != undefined) {
            this.encontroService.save(this.encontro);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__agenda_agenda__["a" /* AgendaPage */]);
        }
        else {
            this.showAlert();
        }
    };
    MarcarEncontroPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Erro',
            subTitle: 'Preencha todos os campos!',
            buttons: ['OK']
        });
        alert.present();
    };
    return MarcarEncontroPage;
}());
MarcarEncontroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'marcar-encontro-page',template:/*ion-inline-start:"/Users/wallaceaugusto/Programacao/Ionic/encontro-mobile/src/pages/marcar-encontro/marcar-encontro.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Marcar Encontro</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-item>\n        <ion-label floating>Descrição</ion-label>\n        <ion-input type="text" name="descricao" [(ngModel)]="descricao" floating clearInput></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label floating>Data</ion-label>\n        <ion-datetime displayFormat="DD de MMMM de YYYY" min="2017" max="2099-12-31" [(ngModel)]="data"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n        <ion-label floating>Hora</ion-label>\n        <ion-datetime displayFormat="HH:mm" [(ngModel)]="hora"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n        <ion-label floating>Local</ion-label>\n        <ion-input type="text" [(ngModel)]="local" floating clearInput></ion-input>\n    </ion-item>\n\n    <div class="wrapper">\n        <button ion-button outline (click)="marcarEncontro()">Marcar</button>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/wallaceaugusto/Programacao/Ionic/encontro-mobile/src/pages/marcar-encontro/marcar-encontro.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_encontro_service_encontro_service__["a" /* EncontroService */]])
], MarcarEncontroPage);

//# sourceMappingURL=marcar-encontro.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(323);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database_deprecated__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_encontro_service_encontro_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_agenda_agenda__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_marcar_encontro_marcar_encontro__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signin_signin_module__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup_module__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signinwithemail_signinwithemail_module__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home_module__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_resetpassword_resetpassword_module__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_facebook__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_google_plus__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_auth_auth_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var firebaseConfig = {
    apiKey: "AIzaSyCe89mtfwb4_AGVWDo8RlNOy8U0QL1viAw",
    authDomain: "aplicativo-marcar-encontro.firebaseapp.com",
    databaseURL: "https://aplicativo-marcar-encontro.firebaseio.com",
    projectId: "aplicativo-marcar-encontro",
    storageBucket: "aplicativo-marcar-encontro.appspot.com",
    messagingSenderId: "245848451215"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_agenda_agenda__["a" /* AgendaPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_marcar_encontro_marcar_encontro__["a" /* MarcarEncontroPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
                    'Outubro', 'Novembro', 'Dezembro']
            }, {
                links: [
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signinwithemail/signinwithemail.module#LoginPageModule', name: 'SigninWithEmailPage', segment: 'signinwithemail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_13__pages_home_home_module__["HomePageModule"],
            __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup_module__["SignupPageModule"],
            __WEBPACK_IMPORTED_MODULE_10__pages_signin_signin_module__["SigninPageModule"],
            __WEBPACK_IMPORTED_MODULE_12__pages_signinwithemail_signinwithemail_module__["LoginPageModule"],
            __WEBPACK_IMPORTED_MODULE_14__pages_resetpassword_resetpassword_module__["a" /* ResetPasswordPageModule */],
            __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */],
            __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__["a" /* AngularFireDatabaseModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_agenda_agenda__["a" /* AgendaPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_marcar_encontro_marcar_encontro__["a" /* MarcarEncontroPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_20__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__providers_encontro_service_encontro_service__["a" /* EncontroService */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_0_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]
        ],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_agenda_agenda__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Agenda', component: __WEBPACK_IMPORTED_MODULE_7__pages_agenda_agenda__["a" /* AgendaPage */] }
        ];
        var authObserver = afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
                authObserver.unsubscribe();
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */];
                authObserver.unsubscribe();
            }
        });
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/wallaceaugusto/Programacao/Ionic/encontro-mobile/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/wallaceaugusto/Programacao/Ionic/encontro-mobile/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resetpassword__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResetPasswordPageModule = (function () {
    function ResetPasswordPageModule() {
    }
    return ResetPasswordPageModule;
}());
ResetPasswordPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__resetpassword__["a" /* ResetPasswordPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__resetpassword__["a" /* ResetPasswordPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__resetpassword__["a" /* ResetPasswordPage */]
        ]
    })
], ResetPasswordPageModule);

//# sourceMappingURL=resetpassword.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_spinner_loading_spinner__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(angularFireAuth, loadingCtrl, facebook, googlePlus) {
        this.angularFireAuth = angularFireAuth;
        this.loadingCtrl = loadingCtrl;
        this.facebook = facebook;
        this.googlePlus = googlePlus;
        this.loadingSpinner = new __WEBPACK_IMPORTED_MODULE_1__loading_spinner_loading_spinner__["a" /* LoadingSpinner */](this.loadingCtrl);
        this.user = angularFireAuth.authState;
    }
    AuthService.prototype.createUser = function (user) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    };
    AuthService.prototype.signIn = function (user) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    };
    AuthService.prototype.signInWithFacebook = function () {
        var _this = this;
        return this.facebook.login(['public_profile', 'email'])
            .then(function (res) {
            return _this.angularFireAuth.auth.signInWithCredential(__WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"].FacebookAuthProvider
                .credential(res.authResponse.accessToken));
        });
    };
    AuthService.prototype.signInWithGoogle = function () {
        var _this = this;
        return this.googlePlus.login({
            'webClientId': '245848451215-et0nh9kn7dmdaj5j2mgqnfh8aietahir.apps.googleusercontent.com',
            'offline': true
        })
            .then(function (res) {
            return _this.angularFireAuth.auth.signInWithCredential(__WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"].GoogleAuthProvider.credential(res.idToken))
                .then(function (user) {
                // atualizando o profile do usuario
                return user.updateProfile({ displayName: res.displayName, photoURL: res.imageUrl });
            });
        });
    };
    AuthService.prototype.signOut = function () {
        if (this.angularFireAuth.auth.currentUser.providerData.length) {
            for (var i = 0; i < this.angularFireAuth.auth.currentUser.providerData.length; i++) {
                var provider = this.angularFireAuth.auth.currentUser.providerData[i];
                if (provider.providerId == __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"].FacebookAuthProvider.PROVIDER_ID) {
                    return this.facebook.logout();
                }
            }
        }
        return this.angularFireAuth.auth.signOut();
    };
    AuthService.prototype.resetPassword = function (email) {
        return this.angularFireAuth.auth.sendPasswordResetEmail(email);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */]])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signin_signin__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, authService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.contatosRoot = 'ContatosPage';
    }
    HomePage.prototype.signOut = function () {
        var _this = this;
        return this.authService.signOut()
            .then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__signin_signin__["a" /* SigninPage */]);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/wallaceaugusto/Programacao/Ionic/encontro-mobile/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Início</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <article>\n    Este aplicativo tem como objetivo organizar a vida de todos os casais, propor encontros, marcar datas \n    para encontros e muito mais!\n  </article>\n\n  <h1 id="bemvindo">Seja bem-vindo(a)!</h1>\n\n  <button ion-button block color="primary" (click)="signOut()">\n    Sair\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/wallaceaugusto/Programacao/Ionic/encontro-mobile/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__["a" /* AuthService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingSpinner; });
var LoadingSpinner = (function () {
    function LoadingSpinner(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingSpinner.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Por favor aguarde...',
            spinner: 'bubbles',
            dismissOnPageChange: true,
            enableBackdropDismiss: false
        });
        this.loading.present();
        /*setTimeout(() => {
            loading.dismiss();
        }, 3000) */
    };
    LoadingSpinner.prototype.presentLoadingCustom = function (time) {
        this.loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: "\n                <div class=\"custom-spinner-container\">\n                    <div class=\"custom-spinner-box\">Por favor aguarde.</div>\n                </div>\n            ",
            duration: time,
        });
        this.loading.present();
    };
    LoadingSpinner.prototype.closeLoading = function () {
        this.loading.dismiss();
    };
    return LoadingSpinner;
}());

//# sourceMappingURL=loading-spinner.js.map

/***/ })

},[308]);
//# sourceMappingURL=main.js.map
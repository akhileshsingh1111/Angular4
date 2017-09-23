"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.loginUser = function (userName, password) {
        this.currentUser = {
            id: 1,
            firstName: 'Akhilesh',
            lastName: 'Singh',
            userName: userName
        };
    };
    AuthService.prototype.loginUserAsyn = function (userName, password) {
        var _this = this;
        var headers = new http_1.Headers({ 'content': 'application/json' });
        var requestOptions = new http_1.RequestOptions({ headers: headers });
        var loginDetails = { username: userName, password: password };
        return this.http.post('api/login', loginDetails, requestOptions).do(function (response) {
            if (response) {
                _this.currentUser = response.json();
            }
        }).catch(function (error) {
            return Rx_1.Observable.of(false);
        });
    };
    AuthService.prototype.isAuthenticated = function () {
        return !!this.currentUser;
    };
    AuthService.prototype.updateCurrentUser = function (firstName, lastName) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
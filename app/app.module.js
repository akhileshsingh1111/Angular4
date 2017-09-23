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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var mercer_app_component_1 = require("./mercer-app.component");
var projects_list_component_1 = require("./projects/projects-list.component");
var project_thumbnail_component_1 = require("./projects/project-thumbnail.component");
var navbar_component_1 = require("./nav/navbar.component");
var project_service_1 = require("./projects/shared/project.service");
var toastr_service_1 = require("./common/toastr.service");
var simplemodal_component_1 = require("./common/simplemodal.component");
var modal_trigger_directive_1 = require("./common/modal-trigger.directive");
var jquery_service_1 = require("./common/jquery.service");
var create_project_component_1 = require("./projects/create-project.component");
var project_details_component_1 = require("./projects/project-details/project-details.component");
var create_session_component_1 = require("./projects/project-details/create-session.component");
var session_list_component_1 = require("./projects/project-details/session-list.component");
var routes_1 = require("./routes");
var projectservice_resolver_1 = require("./projects/projectservice-resolver");
var _404_component_1 = require("./errors/404.component");
var auth_service_1 = require("./user/auth.service");
var forms_1 = require("@angular/forms");
var duration_pipe_1 = require("./projects/shared/duration.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes),
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule
        ],
        declarations: [mercer_app_component_1.MercerAppComponent,
            projects_list_component_1.ProjectsListComponent,
            project_thumbnail_component_1.ProjectThumbnailCompenent,
            navbar_component_1.NavBarComponent,
            project_details_component_1.ProjectDetailsComponent,
            create_project_component_1.CreateProjectComponent,
            _404_component_1.Error404Component,
            create_session_component_1.CreateSessionComponent,
            session_list_component_1.SessionListComponent,
            duration_pipe_1.DurationPipe,
            simplemodal_component_1.SimpleModalComponent,
            modal_trigger_directive_1.ModalTriggerDirective
        ],
        providers: [project_service_1.ProjectService,
            { provide: toastr_service_1.TOASTR_TOKEN, useValue: toastr },
            { provide: jquery_service_1.JQ_TOKEN, useValue: jQuery },
            auth_service_1.AuthService,
            projectservice_resolver_1.ProjectServiceResolver
        ],
        bootstrap: [mercer_app_component_1.MercerAppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
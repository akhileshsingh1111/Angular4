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
var project_service_1 = require("../shared/project.service");
var router_1 = require("@angular/router");
var ProjectDetailsComponent = (function () {
    function ProjectDetailsComponent(projectService, route) {
        this.projectService = projectService;
        this.route = route;
        this.filterBy = 'all';
        this.sortBy = 'votes';
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
        //this.projectService.getProjectAsync(+this.route.snapshot.params['id']).subscribe(
        //  (project: IProject) => {
        //    this.project  = project
        //}
        //)
        this.project = this.projectService.getProject(+this.route.snapshot.params['id']);
    };
    ProjectDetailsComponent.prototype.addSession = function () {
        this.addMode = true;
    };
    ProjectDetailsComponent.prototype.saveNewSession = function (session) {
        var maxId = Math.max.apply(null, this.project.sessions.map(function (s) { return s.id; }));
        session.id = maxId + 1;
        this.project.sessions.push(session);
        this.projectService.updateProject(this.project);
        this.addMode = false;
    };
    return ProjectDetailsComponent;
}());
ProjectDetailsComponent = __decorate([
    core_1.Component({
        templateUrl: '/app/projects/project-details/project-details.component.html',
        styles: ["\n    .container {padding-left:20px; padding-right:20px;}\n    .project-image {height: 200px;}\n    a {cursor:pointer}\n    "
        ]
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService, router_1.ActivatedRoute])
], ProjectDetailsComponent);
exports.ProjectDetailsComponent = ProjectDetailsComponent;
//# sourceMappingURL=project-details.component.js.map
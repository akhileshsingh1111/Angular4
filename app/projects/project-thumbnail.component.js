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
var ProjectThumbnailCompenent = (function () {
    function ProjectThumbnailCompenent() {
        this.someProperty = "Project Name";
        this.projectClick = new core_1.EventEmitter();
    }
    //handleClickMe(){
    //  this.projectClick.emit(this.project.name)
    //}
    ProjectThumbnailCompenent.prototype.logfoo = function () {
        console.log('foo');
    };
    ProjectThumbnailCompenent.prototype.getStartTimeClass = function () {
        if (this.project && this.project.time === '8:00 am')
            return ['red', 'bold'];
        return [];
    };
    return ProjectThumbnailCompenent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProjectThumbnailCompenent.prototype, "project", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ProjectThumbnailCompenent.prototype, "projectClick", void 0);
ProjectThumbnailCompenent = __decorate([
    core_1.Component({
        selector: 'project-thumbnail',
        template: "\n    <div [routerLink] =\"['/projects', project?.id]\" class=\"well hoverwell thumbnail\">\n    <h2>{{project?.name | uppercase}}</h2>\n    <div>Date : {{project?.date | date:'shortDate'}}</div>\n    <div [ngClass]=\"getStartTimeClass()\" [ngSwitch]=\"project?.time\">\n    Time : {{project?.time}}\n    <span *ngSwitchCase=\"'8:00 am'\">(Early Start)</span>\n    <span *ngSwitchCase=\"'10:00 am'\">(Late Start)</span>\n    <span *ngSwitchDefault>(Normal Start)</span>\n    </div>\n    <div>Project Cost: {{project?.price | currency:'USD':true}}</div>\n    <div *ngIf=\"project?.location\">\n    <span>Location : {{project?.location?.address}}</span>\n    \n    <span class=\"pad-left\">{{project?.location?.city}}{{project?.location?.country}}</span>\n    </div>\n    </div>\n    ",
        styles: ["\n    .red {color: red !important;}\n    .bold {font-weight: bold;}\n    .pad-left {margin-left:10px}\n    \n    "]
    }),
    __metadata("design:paramtypes", [])
], ProjectThumbnailCompenent);
exports.ProjectThumbnailCompenent = ProjectThumbnailCompenent;
//# sourceMappingURL=project-thumbnail.component.js.map
"use strict";
var projects_list_component_1 = require("./projects/projects-list.component");
var project_details_component_1 = require("./projects/project-details/project-details.component");
var create_session_component_1 = require("./projects/project-details/create-session.component");
var create_project_component_1 = require("./projects/create-project.component");
var _404_component_1 = require("./errors/404.component");
exports.appRoutes = [
    { path: 'projects/new', component: create_project_component_1.CreateProjectComponent },
    { path: 'projects', component: projects_list_component_1.ProjectsListComponent },
    //{ path: 'projects', component: ProjectsListComponent, resolve:{projects:ProjectServiceResolver} },
    { path: 'projects/:id', component: project_details_component_1.ProjectDetailsComponent },
    { path: 'projects/session/new', component: create_session_component_1.CreateSessionComponent },
    { path: '', redirectTo: '/projects', pathMatch: 'full' },
    { path: '404', component: _404_component_1.Error404Component },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
];
//# sourceMappingURL=routes.js.map
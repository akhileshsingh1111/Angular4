import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import { CreateProjectComponent } from "./projects/create-project.component";
import { CreateSessionComponent } from "./projects/project-details/create-session.component";
import { ProjectDetailsComponent } from "./projects/project-details/project-details.component";
import { ProjectsListComponent } from "./projects/projects-list.component";
import {ProjectServiceResolver} from "./projects/projectservice-resolver";
export const appRoutes: Routes = [
    { path: "projects/new", component: CreateProjectComponent },
    { path: "projects", component: ProjectsListComponent },
    //{ path: 'projects', component: ProjectsListComponent, resolve:{projects:ProjectServiceResolver} },
    { path: "projects/:id", component: ProjectDetailsComponent },
    { path: "projects/session/new", component: CreateSessionComponent },
    { path: "", redirectTo: "/projects", pathMatch: "full" },
    { path: "404", component: Error404Component },
    { path: "user",  loadChildren: "app/user/user.module#UserModule"},
];

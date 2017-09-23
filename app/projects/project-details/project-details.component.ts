import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service'
import { ActivatedRoute } from '@angular/router'
import { IProject, ISession } from '../shared/project.model'
import { SessionListComponent } from './session-list.component'
@Component({
    templateUrl: '/app/projects/project-details/project-details.component.html',
    styles: [`
    .container {padding-left:20px; padding-right:20px;}
    .project-image {height: 200px;}
    a {cursor:pointer}
    `
    ]
})

export class ProjectDetailsComponent implements OnInit {
    project: IProject
    addMode : Boolean
    filterBy: string ='all'
    sortBy: string ='votes'
    constructor(private projectService: ProjectService, private route: ActivatedRoute) {

    }
    ngOnInit() {
        //this.projectService.getProjectAsync(+this.route.snapshot.params['id']).subscribe(
          //  (project: IProject) => {
            //    this.project  = project
            //}
        //)
        this.project = this.projectService.getProject(+this.route.snapshot.params['id'])
    }

    addSession(){
this.addMode = true
    }
saveNewSession(session : ISession){
const maxId = Math.max.apply(null, this.project.sessions.map(s => s.id));
session.id  = maxId + 1
this.project.sessions.push(session)
this.projectService.updateProject(this.project)
this.addMode = false
}

}
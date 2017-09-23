import { Component, OnInit } from '@angular/core'
import { ProjectService } from './shared/project.service'
import { IProject } from './shared/project.model'
import { ProjectServiceResolver } from './projectservice-resolver'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'projects-list',
  template: `<div>
    <h2>Open Source Projects</h2>
  <div class="row">
  <div *ngFor="let project of projects"  class="col-md-6">
  <project-thumbnail [project]="project"></project-thumbnail>
  </div>
  </div>
</div>`
})

export class ProjectsListComponent implements OnInit {
  projects: IProject[]
  constructor(private projectService: ProjectService, private activateRoute: ActivatedRoute) {

  }

  ngOnInit() {

    //this.projects = this.activateRoute.snapshot.data['projects']
this.projects = this.projectService.getProjects()
  }
}

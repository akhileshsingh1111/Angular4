import { Injectable } from '@angular/core'
import { ProjectService } from './shared/project.service'
import { Resolve } from '@angular/router'
@Injectable()
export class ProjectServiceResolver implements Resolve<any>{
    constructor(private projectService: ProjectService) {

    }

    resolve() {
        return this.projectService.getProjects()
    }
}
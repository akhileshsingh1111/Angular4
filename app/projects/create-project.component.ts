import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ProjectService } from './shared/project.service'
@Component({
    templateUrl: 'app/projects/create-project.component.html',
    styles: [`
  em { float:right; color:#E05C65; padding-left:10px}
  .error input{background-color:#E3C3C5}
  .error ::-moz-placeholder {color: #999;}
  .error :-moz-placeholder {color: #999;}
  `]

})

export class CreateProjectComponent {
    constructor(private router: Router, private projectService: ProjectService) {

    }
    saveProject(formValues) {
        console.log(formValues)
        this.projectService.saveProject(formValues)
        this.router.navigate(['/projects'])

      //  this.projectService.saveProjectAsyn(formValues).subscribe(project =>{
        //    this.router.navigate(['/projects'])
        //})
    }
    cancel() {
        this.router.navigate(['/projects'])
    }
}
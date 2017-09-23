import {Component, Input, Output, EventEmitter} from '@angular/core'
import {IProject} from './shared/project.model'

@Component({
    selector:'project-thumbnail',
    template: `
    <div [routerLink] ="['/projects', project?.id]" class="well hoverwell thumbnail">
    <h2>{{project?.name | uppercase}}</h2>
    <div>Date : {{project?.date | date:'shortDate'}}</div>
    <div [ngClass]="getStartTimeClass()" [ngSwitch]="project?.time">
    Time : {{project?.time}}
    <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
    <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
    <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Project Cost: {{project?.price | currency:'USD':true}}</div>
    <div *ngIf="project?.location">
    <span>Location : {{project?.location?.address}}</span>
    
    <span class="pad-left">{{project?.location?.city}}{{project?.location?.country}}</span>
    </div>
    </div>
    `,
    styles:[`
    .red {color: red !important;}
    .bold {font-weight: bold;}
    .pad-left {margin-left:10px}
    
    `]
})

export class ProjectThumbnailCompenent{
   @Input() project:IProject
   someProperty:any = "Project Name"
   @Output() projectClick = new EventEmitter()

   //handleClickMe(){
     //  this.projectClick.emit(this.project.name)
   //}
   logfoo(){
       console.log('foo')
   }

   getStartTimeClass(){
       if(this.project && this.project.time==='8:00 am')
        return ['red', 'bold']
       return []
   }
}
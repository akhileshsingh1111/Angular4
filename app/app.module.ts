import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'
import { MercerAppComponent } from './mercer-app.component'
import { ProjectsListComponent } from './projects/projects-list.component'
import { ProjectThumbnailCompenent } from './projects/project-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'
import { ProjectService } from './projects/shared/project.service'
import { TOASTR_TOKEN, Toastr } from './common/toastr.service'
import { SimpleModalComponent } from './common/simplemodal.component'
import { ModalTriggerDirective } from './common/modal-trigger.directive'
import { JQ_TOKEN } from './common/jquery.service'
import { CreateProjectComponent } from './projects/create-project.component'
import { ProjectDetailsComponent } from './projects/project-details/project-details.component'
import { CreateSessionComponent } from './projects/project-details/create-session.component'
import { SessionListComponent } from './projects/project-details/session-list.component'
import { appRoutes } from './routes'
import {ProjectServiceResolver} from './projects/projectservice-resolver'
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DurationPipe } from './projects/shared/duration.pipe'
declare let toastr: Toastr
declare let jQuery: Object
@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [MercerAppComponent,
        ProjectsListComponent,
        ProjectThumbnailCompenent,
        NavBarComponent,
        ProjectDetailsComponent,
        CreateProjectComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective
    ],
    providers: [ProjectService,
        { provide: TOASTR_TOKEN, useValue: toastr },
        { provide: JQ_TOKEN, useValue: jQuery },
        AuthService,
        ProjectServiceResolver
        //Another way of registring a service in DI
        //Also we can use 'useExisting' and 'useFactory'
        // ,{provide:AuthService, useClass:AuthService}
    ],

    bootstrap: [MercerAppComponent]
})
export class AppModule { }
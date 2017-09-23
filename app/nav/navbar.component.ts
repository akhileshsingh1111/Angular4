import { Component } from '@angular/core'
import { AuthService } from '../user/auth.service'
import { ProjectService } from '../projects/shared/project.service'
import { ISession } from '../projects/shared/project.model'
import {SimpleModalComponent}  from '../common/simplemodal.component'
@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
    nav.navbar-nav{font-size:15px;}
    #searchForm {margin-right: 100px;}
    li > a.active {color: #F97924}
    `]
})

export class NavBarComponent {
    searchTerm: string = "";
    foundSessions: ISession[];
    constructor(private auth: AuthService, private projectService: ProjectService) {

    }
    searchSessions(searchTerm) {

        this.projectService.searchSessions(searchTerm).subscribe(
            sessions => {
            this.foundSessions = sessions
                console.log(sessions)
            });
    }
}
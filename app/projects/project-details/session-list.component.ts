import { Component, Input, OnChanges } from '@angular/core'
import { ISession } from '../shared/project.model'
import { DurationPipe } from '../shared/duration.pipe'
@Component({
    selector: 'session-list',
    templateUrl: 'app/projects/project-details/session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[]
    @Input() filterBy: string
    @Input() sortBy: string
    visibleSession: ISession[] = []
    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy)

            this.sortBy === 'name' ? this.visibleSession.sort
                (sortByName) : this.visibleSession.sort(sortByVotes);
        }
    }
    filterSessions(filter) {
        if (this.filterBy === 'all') {
            return this.visibleSession = this.sessions.slice(0);
        }
        else {
            this.visibleSession = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === this.filterBy
            })
        }
    }

}

function sortByName(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) {
        return 1
    } else if (s1.name === s2.name) {
        return 0
    } else return -1
}
function sortByVotes(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length
}

import { ISession } from "../shared/project.model";
import { SessionListComponent } from "./session-list.component";

describe("SessionListComponent", () => {
    let component: SessionListComponent;

    beforeEach(() => {
        component = new SessionListComponent();

    });
    describe("ngOnChanges", () => {
        it("should filter the session correctly", () => {
            component.sessions = [{ name: "dsadasd", level: "intermediate" },
            { name: "dsadasd", level: "intermediate" }, { name: "dsadasd", level: "dsdsd" }] as ISession[];
        });
        component.filterBy = "intermediate";
        component.sortBy = "name";
        component.visibleSession = [];
        component.ngOnChanges();
        component.sessions = [];
        expect(component.visibleSession.length).toBe(2);
    });
});

"use strict";
var session_list_component_1 = require("./session-list.component");
describe("SessionListComponent", function () {
    var component;
    beforeEach(function () {
        component = new session_list_component_1.SessionListComponent();
    });
    describe("ngOnChanges", function () {
        it("should filter the session correctly", function () {
            component.sessions = [{ name: "dsadasd", level: "intermediate" },
                { name: "dsadasd", level: "intermediate" }, { name: "dsadasd", level: "dsdsd" }];
        });
        component.filterBy = "intermediate";
        component.sortBy = "name";
        component.visibleSession = [];
        component.ngOnChanges();
        component.sessions = [];
        expect(component.visibleSession.length).toBe(2);
    });
});
//# sourceMappingURL=session-list.component.spec.js.map
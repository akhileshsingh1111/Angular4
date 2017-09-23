"use strict";
var project_service_1 = require("./project.service");
describe("ProjectService", function () {
    var projectService, mockHttp;
    beforeEach(function () {
        mockHttp = jasmine.createSpyObj("mockHttp", ["post", "get"]);
        projectService = new project_service_1.ProjectService(mockHttp);
    });
    describe("getProjects", function () {
        it("it should get the projects from the list of the projects", function () {
            projectService.getProjects();
        });
    });
    describe("saveProject", function () {
        it("it should update the project to the list of the projects", function () {
            var project = [{ name: "asdsdsdsdsd", sessions: [] }];
            projectService.saveProject(project);
        });
    });
    describe("getProjectAsync", function () {
        it("it should get the projects from the list of the projects from an api", function () {
            projectService.getProjectsAsync();
            expect(mockHttp.get).toHaveBeenCalledWith("api/projects");
        });
    });
});
//# sourceMappingURL=project.service.spec.js.map
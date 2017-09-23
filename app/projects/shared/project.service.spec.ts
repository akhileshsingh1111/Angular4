import { Observable } from "rxjs/Rx";
import { IProject } from "./project.model";
import { ProjectService } from "./project.service";

describe("ProjectService", () => {
    let projectService: ProjectService,
        mockHttp;
    beforeEach(() => {
        mockHttp = jasmine.createSpyObj("mockHttp", ["post", "get"]);
        projectService = new ProjectService(mockHttp);
    });
    describe("getProjects", () => {
        it("it should get the projects from the list of the projects", () => {
            projectService.getProjects();
        });
    });
    describe("saveProject", () => {
        it("it should update the project to the list of the projects", () => {
            const project = [{ name: "asdsdsdsdsd", sessions: [] }];
            projectService.saveProject(project);
        });
    });
    describe("getProjectAsync", () => {
        it("it should get the projects from the list of the projects from an api", () => {

            projectService.getProjectsAsync();
            expect(mockHttp.get).toHaveBeenCalledWith("api/projects");
        });
    });
});

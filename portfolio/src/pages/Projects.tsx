/** Projects page of the Portfolio */

import ProjectsFolder from "../components/ui/ProjectsFolder.components";

function Projects() {
    return (
        <main className="page" id="projects">
            <div className="projects_title">
                <h1>Mes projets</h1>
            </div>
            <div className="projects_sentence">
                Au cours années écoulées, ...
            </div>
            <ProjectsFolder />
        </main>
    )
}

export default Projects;
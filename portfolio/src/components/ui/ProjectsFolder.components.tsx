/* A Projects Folder to allow user browsing into my projects */
import { useState, useEffect } from "react";
import projects from '../../assets/data/project.json';
import ProjectHead from "./ProjectHead.components";

interface Project {
    name: string,
    picture: string,
    description: string,
    start: string,
    end: string,
    langages: string[],
    tools: string[],
    link: string,
    flag: string
}


function ProjectsFolder() {
    const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

    return (
        <div className="projects_folder">
            <div className="projects_heads_viewport">
                <div className="projects_heads_track">
                    {projects.map((project) => (
                        <ProjectHead name={project.name} onClick={() => setSelectedProject} />
                    ))}
                </div>
            </div>
            <div className={`project_selected bg-[]`}>
                <div className={`bg-[url(${selectedProject.picture})]`}>
                    <div className="project_name">
                        <h2>{selectedProject.name}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsFolder
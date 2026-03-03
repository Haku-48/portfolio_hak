/* A Projects Grid to allow user browsing into my projects */
import { useState } from "react";
import projects from "../../assets/data/project.json";
import ProjectHead from "./ProjectHead.components";
import CloseButton from "../../assets/closeButton.svg?react";
import Flag from "./Flag.components";
import ButtonImg from "./ButtonImg.components";

import GitHubLogo from '../../assets/util/github.svg?react';

interface Project {
  name: string;
  picture: string;
  description: string;
  start: string;
  end: string;
  langages: string[];
  tools: string[];
  link: string;
  flag: string;
}

function ProjectsGrid() {

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);


  return (
    <div className="projects_grid">
      Nombre de projets : {projects.length}
      <div className="projects_heads">
        {projects.map((project) => (
          <ProjectHead
            key={project.name}
            name={project.name}
            picture={project.picture}
            onClick={() => {
              setSelectedProject(project);
              document.body.style.overflow = "hidden";
            }}
          />
        ))}
      </div>
      <div
        className={`project_selected ${selectedProject ? "block" : "hidden"}`}
      >
        <div className={`project_more`}>
          <div className="project_name">
            <h2>{selectedProject?.name}</h2>
          </div>
          <img src={selectedProject?.picture} loading="lazy"></img>
          <div className="project_infos">
            <div className="project_description">
              {selectedProject?.description}
            </div>
            <div className="project_dates">
              Période : {selectedProject?.start} - {selectedProject?.end}
            </div>
            <div className="project_techno">
              <div className="project_langages">
                {selectedProject?.langages &&
                  selectedProject?.langages?.length > 1
                  ? "Langages : "
                  : "Langage : "}
                {selectedProject?.langages?.map((langage, index) => (
                  <span key={index}>
                    {langage}
                    {index < selectedProject.langages.length - 1 && " / "}
                  </span>
                ))}
              </div>
              <div
                className={`project_tools ${selectedProject?.tools && selectedProject?.tools?.length == 0 ? "hidden" : ""}`}
              >
                {selectedProject?.tools && selectedProject?.tools?.length > 1
                  ? "Outils : "
                  : "Outil : "}
                {selectedProject?.tools?.map((tool, index) => (
                  <span key={index}>
                    {tool}
                    {index < selectedProject.tools.length - 1 && " / "}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="project_more_infos">
            <ButtonImg
              Img={GitHubLogo}
              id={selectedProject ? selectedProject?.link : ""}
              classname="project_link"
              text=""
              onSite={false}
            />
            <Flag flagType={selectedProject?.flag} />
          </div>
        </div>

        <div className="close_button hover:cursor-pointer z-10001">
          <CloseButton onClick={() => {
            setSelectedProject(null);
            document.body.style.overflow = "";
          }} />
        </div>

      </div>
    </div>
  );
}

export default ProjectsGrid;

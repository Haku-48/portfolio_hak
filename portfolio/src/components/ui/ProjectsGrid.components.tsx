/* A Projects Grid to allow user browsing into my projects */
import { useState, useEffect } from "react";
import projects from "../../assets/data/project.json";
import ProjectHead from "./ProjectHead.components";
import closeButton from "../../assets/closeButton.svg";
import Flag from "./Flag.components";
import ButtonImg from "./ButtonImg.components";

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
  const [svg, setSvg] = useState("");

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    fetch(closeButton)
      .then((res) => res.text())
      .then(setSvg);
  }, [closeButton]);

  return (
    <div className="projects_grid">
      Nombre de projets : {projects.length}
      <div className="projects_heads">
        {projects.map((project) => (
          <ProjectHead
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
        <div className={`project_more hidden lg:block`}>
          <div className="project_name">
            <h2>{selectedProject?.name}</h2>
          </div>
          <img src={selectedProject?.picture}></img>
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
              img="util/github.svg"
              id={selectedProject ? selectedProject?.link : ""}
              classname="project_link"
              text=""
              onSite={false}
            />
            <Flag flagType={selectedProject?.flag} />
          </div>
        </div>

        <div className="error block lg:hidden">
          <p>Ecran trop petit pour afficher les détails du projet</p>
          <p>Veuillez augmenter la taille de votre écran si vous voulez en voir plus :)</p>
        </div>

        <div
          className="close_button hover:cursor-pointer z-10001"
          onClick={() => {
            setSelectedProject(null);
            document.body.style.overflow = "";
          }}
          dangerouslySetInnerHTML={{ __html: svg }}
        ></div>
      </div>
    </div>
  );
}

export default ProjectsGrid;

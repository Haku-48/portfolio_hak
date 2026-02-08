/** Projects page of the Portfolio */

import ProjectsGrid from "../components/ui/ProjectsGrid.components";

function Projects() {
  return (
    <main className="page" id="projects">
      <div className="projects_title">
        <h1>Mes projets</h1>
      </div>
      <div className="projects_sentence">
        <p>Entre mes études et mon temps libre, j'ai développé ces projets pour expérimenter, apprendre et repousser mes limites.</p>
      </div>
      <ProjectsGrid />
    </main>
  );
}

export default Projects;

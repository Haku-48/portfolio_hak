/** About page of the Portfolio */
import tools from "../assets/data/tool.json";
import langages from "../assets/data/langage.json";

import SkillTimeline from "../components/ui/SkillTimeline.components";

function About() {
  return (
    <main className="page" id="about">
      <div className="about_title">
        <h1>À propos de moi</h1>
      </div>

      <div className="parcours">
        <h2 className="about_subtitle">Mon parcours</h2>
        <p>Je suis juste All Might</p>
      </div>
      <h2 className="about_subtitle">Mes compétences</h2>
      <div className="skills">
        <div className="langages">
          <h3 className="about_subsubtitle">Langages de Programmation</h3>
          <SkillTimeline file={langages} />
        </div>
        <div className="tools">
          <h3 className="about_subsubtitle">Outils</h3>
          <SkillTimeline file={tools} />
        </div>
      </div>
    </main>
  );
}

export default About;

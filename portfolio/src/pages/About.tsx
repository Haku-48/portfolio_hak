/** About page of the Portfolio */
import { useEffect, useState } from "react";

import closeButton from "../assets/closeButton.svg";
import tools from "../assets/data/tool.json";
import langages from "../assets/data/langage.json";

interface Skill {
  name: string;
  logo: string;
  description: string;
  learned: string;
  flag: string;
}

import SkillTimeline from "../components/ui/SkillTimeline.components";

function About() {

  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [svg, setSvg] = useState("");

  useEffect(() => {
    fetch(closeButton)
      .then(res => res.text())
      .then(setSvg)
  }, [closeButton])

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
          <h3 className="about_subsubtitle">Langages</h3>
          <SkillTimeline file={langages} setSelectedSkill={(skill) => setSelectedSkill(skill)} />
        </div>
        <div className="tools">
          <h3 className="about_subsubtitle">Outils</h3>
          <SkillTimeline file={tools} setSelectedSkill={(skill) => setSelectedSkill(skill)} />
        </div>
        <div className={`more_infos_skill ${selectedSkill ? "block" : "hidden"}`}>
          <h2>{selectedSkill?.name}</h2>
          <div className="skill_description">{selectedSkill?.description}</div>
          <div className="skill_learned">Début d'apprentisage en {selectedSkill?.learned}</div>
          <div className="skill_flag">{selectedSkill?.flag}</div>
          <div className="close_button" onClick={() => setSelectedSkill(null)} dangerouslySetInnerHTML={{ __html: svg }}></div>
        </div>
      </div>
    </main>
  );
}

export default About;

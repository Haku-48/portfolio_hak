/** About page of the Portfolio */
import { useState } from "react";


import tools from "../assets/data/tools.ts";
import langages from "../assets/data/langages.ts";
import CloseButton from "../assets/closeButton.svg?react";

interface Skill {
  name: string;
  logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  description: string;
  learned: string;
  flag: string;
}

import SkillTimeline from "../components/ui/SkillTimeline.components";
import Flag from "../components/ui/Flag.components";
import FormationList from "../components/ui/FormationList.components";

function About() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);


  return (
    <main className="page" id="about">
      <div className="about_title">
        <h1>À propos de moi</h1>
      </div>

      <div className="parcours">
        <h2 className="about_subtitle">Mon parcours</h2>
        <p>
          Doté d'un esprit curieux et d'une passion pour le développement, j'ai
          construit mes compétence à travers une licence d'informatique et
          beaucoup de pratique personnelle. J'accorde une grande importance au
          suivi et à la compréhension des nouvelles technologies et à leur
          expérimentations à travers des projets concrets.
        </p>
        <FormationList />
      </div>
      <h2 className="about_subtitle">Mes compétences</h2>
      <div className="skills">
        <div className="langages">
          <h3 className="about_subsubtitle">Langages</h3>
          <SkillTimeline
            list={langages as Skill[]}
            setSelectedSkill={(skill) => setSelectedSkill(skill)}
          />
        </div>
        <div className="tools">
          <h3 className="about_subsubtitle">Outils</h3>
          <SkillTimeline
            list={tools as Skill[]}
            setSelectedSkill={(skill) => setSelectedSkill(skill)}
          />
        </div>
        <div
          className={`more_infos_skill ${selectedSkill ? "block" : "hidden"}`}
        >
          <h2>{selectedSkill?.name}</h2>
          <div className="skill_description">{selectedSkill?.description}</div>
          <div className="skill_learned">
            Début d'apprentisage en{" "}
            <span className="font-extrabold">{selectedSkill?.learned}</span>
          </div>

          <Flag flagType={selectedSkill?.flag} />

          <div className="close_button hover:cursor-pointer">
            <CloseButton onClick={() => {
              setSelectedSkill(null);
              document.body.style.overflow = "";
            }} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;

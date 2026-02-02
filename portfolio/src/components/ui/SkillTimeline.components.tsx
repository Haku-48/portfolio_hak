// The timeline that will represents all of the skills
import { useState, useEffect } from "react";
import SkillItem from "./SkillItem.components";

interface Skill {
  name: string;
  logo: string;
  description: string;
  learned: string;
  flag: string;
}

interface SkillTimelineProp {
  file: Skill[];
}

function SkillTimeline({ file }: SkillTimelineProp) {
  const leftSkillClass = "left skill_class";
  const rightSkillClass = "right skill_class";
  let i = 0;
  return (
    <div className="skills_timeline">
      <div className="skill_path"></div>
      {file.map((skill) => (
        <div className={i % 2 == 0 ? leftSkillClass : rightSkillClass}>
          <SkillItem
            name={skill.name}
            logo={skill.logo}
            description=""
            learned=""
            flag=""
          />
        </div>
      ))}
    </div>
  );
}
export default SkillTimeline;

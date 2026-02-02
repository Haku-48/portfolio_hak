// The timeline that will represents all of the skills
import { useState, useEffect } from "react";
import SkillItem from "./SkillItem.components";

interface Skill {
    name: string;
    logo: string;
    description: string;
    learned: string
}

interface SkillTimelineProp {
    file: Skill[];
}

function SkillTimeline({ file }: SkillTimelineProp) {
    const topSkillClass = "top_skill_class";
    const bottomSkillClass = "bottom_skill_class";
    let i = 0;
    return (
        <div className="skills_timeline">
            {file.map(skill => (
                <div className={i % 2 == 0 ? topSkillClass : bottomSkillClass}>
                    <SkillItem name={skill.name} logo={skill.logo} description="" learned="" />
                </div>
            ))}
        </div>
    )
}
export default SkillTimeline;
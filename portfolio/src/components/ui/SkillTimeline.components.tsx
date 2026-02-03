// The timeline that will represents all of the skills
import { useState, useEffect, useRef } from "react";
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
  setSelectedSkill: (skill: Skill) => void;
}

function SkillTimeline({ file, setSelectedSkill }: SkillTimelineProp) {
  const lineRef = useRef<HTMLDivElement>(null);

  const [mlHeight, setMlHeight] = useState(0);

  useEffect(() => {
    if (lineRef.current) {
      const rect = lineRef.current.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const height = rect.height;
      const compute = () => {
        return (window.scrollY + (window.innerHeight / 2) - top) / height;
      }

      if (compute() >= 0 && compute() <= 1) {
        setMlHeight(compute());
      }

      const onScroll = () => {
        const computed = compute();
        if (computed >= 0 && computed <= 1) {
          setMlHeight(computed);
        }
      };

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [lineRef])

  return (
    <div className="skills_timeline">
      <div className="skill_path" ref={lineRef}></div>
      <div className="skill_path_fill" style={{ height: mlHeight * 100 + '%' }}></div>
      {
        file.map((skill) => (
          <SkillItem
            name={skill.name}
            logo={skill.logo}
            onClick={() => setSelectedSkill(skill)}
          />
        ))
      }
    </div >
  );
}
export default SkillTimeline;

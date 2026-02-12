// The timeline that will represents all of the skills
import { useState, useEffect, useRef } from "react";
import SkillItem from "./SkillItem.components";

interface Skill {
  name: string;
  logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  description: string;
  learned: string;
  flag: string;
}

interface SkillTimelineProp {
  list: Skill[];
  setSelectedSkill: (skill: Skill) => void;
}

function SkillTimeline({ list, setSelectedSkill }: SkillTimelineProp) {
  const lineRef = useRef<HTMLDivElement>(null);

  const [mlHeight, setMlHeight] = useState(0);

  useEffect(() => {
    if (lineRef.current) {
      let rect = lineRef.current.getBoundingClientRect();
      let top = rect.top + window.scrollY;
      let height = rect.height;
      const compute = () => {
        return (window.scrollY + window.innerHeight / 2 - top) / height;
      };

      if (compute() >= 0 && compute() <= 1) {
        setMlHeight(compute());
      }

      const onScroll = () => {
        const computed = compute();
        if (computed >= 0 && computed <= 1) {
          setMlHeight(computed);
        }
      };

      const computeSize = () => {
        if (lineRef.current) {
          rect = lineRef.current.getBoundingClientRect();
          top = rect.top + window.scrollY;
          height = rect.height;
        }
      };

      window.addEventListener("resize", computeSize);
      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", computeSize);
      };
    }
  }, [lineRef]);

  return (
    <div className="skills_timeline">
      <div className="skill_path" ref={lineRef}></div>
      <div
        className="skill_path_fill"
        style={{ height: mlHeight * 100 + "%" }}
      ></div>
      {list.map((skill) => (
        <SkillItem
          key={skill.name}
          name={skill.name}
          Logo={skill.logo}
          onClick={() => {
            setSelectedSkill(skill);
            document.body.style.overflow = "hidden";
          }}
        />
      ))}
    </div>
  );
}
export default SkillTimeline;

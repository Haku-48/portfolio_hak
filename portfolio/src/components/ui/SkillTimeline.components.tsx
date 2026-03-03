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
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current || !fillRef.current) {
      return
    }
    let rect = lineRef.current.getBoundingClientRect();
    let top = rect.top + window.scrollY;
    let height = rect.height;

    const computeSize = () => {

      rect = lineRef.current!.getBoundingClientRect();
      top = rect.top + window.scrollY;
      height = rect.height;

    };


    const onScroll = () => {
      const progress = (window.scrollY + window.innerHeight / 2 - top) / height;
      if (progress >= 0 && progress <= 1) {
        fillRef.current!.style.height = progress * 100 + "%";
      }
    };



    window.addEventListener("resize", computeSize);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", computeSize);
    };
  }
    , []);

  return (
    <div className="skills_timeline">
      <div className="skill_path" ref={lineRef}></div>
      <div
        className="skill_path_fill"
        ref={fillRef}
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

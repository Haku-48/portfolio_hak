// Item that represent a skill in the portfolio, i will try to not just make a cards grid
import { useEffect, useState, useRef } from "react";

interface SkillItemProp {
  name: string;
  logo: string;
  onClick: () => void;
}

function SkillItem({ name, logo, onClick }: SkillItemProp) {
  //const [focus, setFocus] = useState(false);
  const [svg, setSvg] = useState("");

  const cardRef = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState(1);

  useEffect(() => {
    fetch(logo)
      .then((res) => res.text())
      .then(setSvg);

    if (cardRef.current) {
      let rect = cardRef.current.getBoundingClientRect();
      let top = rect.top + window.scrollY;
      let height = rect.height;
      const compute = () => {
        return (window.scrollY + window.innerHeight / 2 - top) / height;
      };

      if (compute() >= 0) {
        setScale(1.1);
      } else {
        setScale(1.0);
      }

      const computeSize = () => {
        if (cardRef.current) {
          rect = cardRef.current.getBoundingClientRect();
          top = rect.top + window.scrollY;
          height = rect.height;
        }
      };

      const onScroll = () => {
        const computed = compute();
        if (computed >= 0) {
          setScale(1.1);
        } else {
          setScale(1);
        }
      };
      window.addEventListener("scroll", onScroll);
      window.addEventListener("resize", computeSize);
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", computeSize);
      };
    }
  }, [logo]);

  return (
    <div
      className="skill_item"
      onClick={onClick}
      ref={cardRef}
      style={{ scale: scale }}
    >
      <div
        className="skill_logo"
        dangerouslySetInnerHTML={{ __html: svg }}
      ></div>
      <div className="skill_name">{name}</div>
    </div>
  );
}
export default SkillItem;

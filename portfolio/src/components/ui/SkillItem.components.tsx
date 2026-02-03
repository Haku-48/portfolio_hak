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
      const rect = cardRef.current.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const height = rect.height;
      const compute = () => {
        return (window.scrollY + (window.innerHeight / 2) - top) / height;
      }

      if (compute() >= 0) {
        setScale(1.10);
      } else {
        setScale(1.0);
      }

      const onScroll = () => {
        const computed = compute();
        if (computed >= 0) {
          setScale(1.10);
        } else {
          setScale(1);
        }
      }
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [logo]);

  return (
    <div className="skill_item" onClick={onClick} ref={cardRef} style={{ scale: scale }}>
      <div
        className="skill_logo"
        dangerouslySetInnerHTML={{ __html: svg }}
      ></div>
      <div className="skill_name">{name}</div>
    </div>
  );
}
export default SkillItem;

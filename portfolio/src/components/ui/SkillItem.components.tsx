// Item that represent a skill in the portfolio, i will try to not just make a cards grid
import { useEffect, useState } from "react";

interface SkillItemProp {
    name: string;
    logo: string;
    description: string;
    learned: string
}

function SkillItem({ name, logo, description, learned }: SkillItemProp) {
    //const [focus, setFocus] = useState(false);
    const [svg, setSvg] = useState("");

    useEffect(() => {
        fetch(logo)
            .then(res => res.text())
            .then(setSvg);
    }, [logo]);

    return (
        <div className="skill_item">
            <div className="skill_logo" dangerouslySetInnerHTML={{ __html: svg }}></div>
            <div className="skill_name">
                {name}
            </div>
            <div className="more_infos_skill">
                {name}
                <div className="skill_description">
                    {description}
                </div>
                <div className="skill_learned">
                    {learned}
                </div>
            </div>
        </div>
    )
}
export default SkillItem;
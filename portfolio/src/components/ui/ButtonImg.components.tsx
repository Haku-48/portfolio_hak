// Button with image component
import { useState, useEffect } from "react";

interface ButtonImgProps {
  img: string;
  id: string;
  classname: string;
  text: string;
  onSite: boolean;
}

function ButtonImg({ img, id, classname, text, onSite }: ButtonImgProps) {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    fetch(img)
      .then((res) => res.text())
      .then(setSvg);
  }, [img]);

  return (
    <div className="button_img nav_button">
      {!onSite ? (
        <a href={`${id}`}>
          <div dangerouslySetInnerHTML={{ __html: svg }}></div>

          <div className={`${classname}`}>
            <p>{text}</p>
          </div>
        </a>
      ) : (
        <div
          className="clickable"
          onClick={() =>
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <div dangerouslySetInnerHTML={{ __html: svg }}></div>
          <div className={`${classname}`}>
            <p>{text}</p>
          </div>{" "}
        </div>
      )}
    </div>
  );
}
export default ButtonImg;

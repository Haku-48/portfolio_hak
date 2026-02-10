/** My personnal logo */
import { useState, useEffect } from "react";

import HakuLogo from "../../assets/hak.svg";

function Logo() {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    fetch(HakuLogo)
      .then((res) => res.text())
      .then(setSvg);
  });

  return (
    <div
      className="clickable"
      onClick={() =>
        document.querySelector("body")?.scrollIntoView({ behavior: "smooth" })
      }
    >
      <div className="nav_button">
        <div
          className="logo_img"
          dangerouslySetInnerHTML={{ __html: svg }}
        ></div>
      </div>
    </div>
  );
}

export default Logo;

/** My personnal logo */
import { useState, useEffect } from "react";

import HakuLogo from "../../assets/hak.svg";

function Logo() {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    fetch(HakuLogo)
      .then(res => res.text())
      .then(setSvg);
  })

  return (
    <a href="#">
      <div className="nav_button">
        <div className="logo_img" dangerouslySetInnerHTML={{ __html: svg }}></div>
      </div>
    </a>
  );
}

export default Logo;

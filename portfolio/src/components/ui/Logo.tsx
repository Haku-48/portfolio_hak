/** My personnal logo */

import HakuLogo from "../../assets/hak.svg?react";

function Logo() {
  return (
    <div
      className="clickable"
      onClick={() =>
        document.querySelector("body")?.scrollIntoView({ behavior: "smooth" })
      }
    >
      <div className="nav_button">
        <HakuLogo className="logo_img" />
      </div>
    </div>
  );
}

export default Logo;

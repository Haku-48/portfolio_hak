/** My personnal logo */
import HakuLogo from "../../assets/hak.svg";

function Logo() {
  return (
    <a href="#">
      <div className="nav_button">
        <img src={HakuLogo} alt="Logo Haku" className="logo_img"></img>
      </div>
    </a>
  );
}

export default Logo;

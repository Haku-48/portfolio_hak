/** Navbar of the portfolio */
import { useEffect, useState } from "react";
import Logo from "../ui/Logo.tsx";
import Button from "../ui/Button.components.tsx";

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsCollapsed(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className={`navbar`}
        onMouseLeave={() => (window.scrollY > 100 ? setIsCollapsed(true) : {})}
      >
        <div
          onMouseEnter={() => setIsCollapsed(false)}
          className={`transition-all duration-500 ${isCollapsed ? "scale-110" : "scale-100"}`}
        >
          <Logo />
        </div>
        <div
          className={` nav_button_list transition-all duration-500 ease-in-out origin-top md:origin-left ${isCollapsed ? "opacity-0 scale-0 -translate-x-10 pointer-events-none" : "opacity-100 scale-100 translate-x-0"}`}
        >
          <Button id={"home"} classname={"nav_button"} text={"Accueil"} />
          <Button id={"projects"} classname={"nav_button"} text={"Projets"} />
          <Button id={"about"} classname={"nav_button"} text={"À propos"} />
          <Button id={"contact"} classname={"nav_button"} text={"Contact"} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

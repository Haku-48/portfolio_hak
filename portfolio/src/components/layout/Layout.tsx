
import Hero from "../sections/Hero.tsx";
import Home from "../../pages/Home.tsx";
import About from "../../pages/About.tsx";
import Projects from "../../pages/Projects.tsx";
import Contact from "../../pages/Contact.tsx";

function Layout() {
    return (
        <div className="">

            <Hero />
            <Home />
            <Projects />
            <About />
            <Contact />

        </div>
    )
}

export default Layout;
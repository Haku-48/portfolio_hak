import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home.tsx";
import Projects from "../pages/Projects.tsx";
import About from "../pages/About.tsx";
import Contact from "../pages/Contact.tsx";

export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/projects", element: <Projects /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
]);
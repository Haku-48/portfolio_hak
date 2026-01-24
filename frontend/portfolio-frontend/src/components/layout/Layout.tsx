import { Outlet } from "react-router-dom";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

function Layout() {
    return (
        <div className="caca">
            <Header />
            <main className="flex-1 px-6 md:px-8"><Outlet /></main>
            <Footer />
        </div>
    )
}

export default Layout;
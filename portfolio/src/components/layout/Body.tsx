import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import Layout from "./Layout.tsx";


function Body() {
    return (
        <main>
            <div className="block">
                <Header />
                <Layout />
                <Footer />
            </div>
            <div className="hidden fixed inset-0 flex items-center justify-center bg-black text-white text-center p-6 z-50">
                <p>Une version mobile de ce portfolio est en cours de développement — merci de le consulter sur ordinateur 💻</p>
            </div>
        </main>
    )
}
export default Body;
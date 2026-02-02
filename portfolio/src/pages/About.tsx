/** About page of the Portfolio */

function About() {
    return (
        <main className="page" id="about">
            <h1 className="about_title">
                À propos de moi
            </h1>
            <div className="parcours">
                <h2 className="about_subtitle">Mon parcours</h2>
            </div>
            <div className="skills">
                <h2 className="about_subtitle">Mes compétences</h2>
                <div className="langages">
                    <h3 className="about_subsubtitle">Langages de Programmation</h3>
                </div>
                <div className="tools">
                    <h3 className="about_subsubtitle">Outils</h3>
                </div>
            </div>
        </main>
    )
}

export default About;
/** Main page of the Portfolio */
import ButtonImg from "../components/ui/ButtonImg.components.tsx";

function Home() {
  return (
    <main className="page" id="home">
      <span className="home_title">
        Bonjour, mon nom est...Ah, suis-je bête, vous l'avez déjà vu plus haut
      </span>
      <h1 className="accroche">
        Développeur Junior passionné, curieux et avide de découverte
      </h1>
      <p className="description">
        En parallèle de ma troisième année de licence informatique, je développe continuellement mes compétences sur divers langages et outils pour
        transformer des idées en projets concrets.
      </p>
      <div className="ctas">
        N'hésitez pas à me contacter où à jeter un coup d'oeil à mes différents projets.
        <div className="home_buttons">
          <ButtonImg
            img={"util/minutemailer.svg"}
            id={"#contact"}
            classname={"home_button"}
            text={"Me contacter"}
          />
          <ButtonImg
            img={"util/files.svg"}
            id={"#projects"}
            classname="home_button"
            text={"Mes projets"}
          />
        </div>
      </div>

    </main>
  );
}

export default Home;

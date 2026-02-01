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
      <div className="ctas"></div>
      <div className="home_buttons">
        <ButtonImg
          img={"util/minutemailer.svg"}
          id={""}
          classname={""}
          text={"Me contacter"}
        />
      </div>
    </main>
  );
}

export default Home;

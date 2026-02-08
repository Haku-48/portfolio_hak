/** Contact page of the Portfolio */

import ButtonImg from "../components/ui/ButtonImg.components";

function Contact() {
  return (
    <main className="page" id="contact">
      <div className="contact_title">
        <h1>Me contacter</h1>
      </div>
      <div className="contact_text">
        <p>
          Si vous souhaitez des informations supplémentaires sur ma personnes où
          simplement me passer le bonjour, n'hésitez pas à me contacter.
        </p>
        <p>
          Des retours et conseils sont toujours les bienvenues pour améliorer ce
          portfolio.
        </p>
      </div>
      <div className="contact_buttons">
        <ButtonImg
          img={"util/github.svg"}
          id={"https://github.com/Haku-48"}
          classname={"contact_button"}
          text={"Haku-48"}
          onSite={false}
        />
        <ButtonImg
          img={"util/mail.svg"}
          id={
            "mailto:guillaumegoetghebeur59@gmail.com?subject=[Portfolio%20Contact]"
          }
          classname={"contact_button"}
          text={"Mail"}
          onSite={false}
        />
        <ButtonImg
          img={"util/linkedin.svg"}
          id={"https://www.linkedin.com/in/guillaume-goetghebeur-766a72242/"}
          classname={"contact_button"}
          text={"Guillaume"}
          onSite={false}
        />
        <ButtonImg
          img={"util/location.svg"}
          id={"https://maps.app.goo.gl/CT81sjG9fZ61gDgFA"}
          classname={"contact_button"}
          text={"Loos"}
          onSite={false}
        />
      </div>
    </main>
  );
}

export default Contact;

/** Contact page of the Portfolio */

import ButtonImg from "../components/ui/ButtonImg.components";

import GitHubLogo from '../assets/util/github.svg?react';
import MailLogo from '../assets/util/mail.svg?react';
import LinkedinLogo from '../assets/util/linkedin.svg?react';
import LocationLogo from '../assets/util/location.svg?react';

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
          Img={GitHubLogo}
          id={"https://github.com/Haku-48"}
          classname={"contact_button"}
          text={"Haku-48"}
          onSite={false}
        />
        <ButtonImg
          Img={MailLogo}
          id={
            "mailto:guillaumegoetghebeur59@gmail.com?subject=[Portfolio%20Contact]"
          }
          classname={"contact_button"}
          text={"Mail"}
          onSite={false}
        />
        <ButtonImg
          Img={LinkedinLogo}
          id={"https://www.linkedin.com/in/guillaume-goetghebeur-766a72242/"}
          classname={"contact_button"}
          text={"Guillaume"}
          onSite={false}
        />
        <ButtonImg
          Img={LocationLogo}
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

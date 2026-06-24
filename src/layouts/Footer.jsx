import { socialMediaLinks } from "../data/socialMediaLinks";
import { footerActionLinks } from "../data/footerLinks";
import { assetsData } from "../data/assetsData";

import "../styles/layouts/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__logo">
          <img src={assetsData.imagotipoBlanco} alt="" />
        </div>

        <div className="footer__social">
          <h3>Seguinos en redes</h3>

          <div className="footer__social-links">
            {socialMediaLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                className="footer__social-link"
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
              >
                <img /* className="socialLinks-footer-img--${social.id}" */ src={social.icon} alt="" />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__actions">
          {footerActionLinks.map((link) => (
            <a key={link.id} href={link.url} className="footer__action">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="footer__legal">

        <div className="footer__pdp">
          <img src={assetsData.iconoPDP} alt="" />
        </div>

        <div className="ssn-inscripcion">
          <p>
          N° de Inscripción en SSN: <br /><br /><strong>402</strong>
          </p>
        </div>

        <div className="url-ssn">
          <p>
          Organismo de control <br /><br />
          www.argentina.gob.ar/ssn
        </p>
        </div>

        <div className="footer__ssn">
          <img src={assetsData.iconoSSN} alt="" />
        </div>

        <div className="footer__qr">
          <img src={assetsData.iconoDataFiscal} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
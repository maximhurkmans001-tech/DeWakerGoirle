import { IMG } from "../data/afbeeldingen.js";
import { NAV_ITEMS } from "../data/navigatie.js";
import { VVE_BESTUUR_EMAIL } from "../data/contact.js";
import { mailtoHref } from "../utils/helpers.js";

export default function Footer({ goTo }) {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <img src={IMG.logo} alt="Logo van De Waker" style={{ width: 52, height: 52, marginBottom: 14 }} />
          <p>Deze website is het digitale informatiepunt voor bewoners van appartementencomplex De Waker in Goirle. De site wordt beheerd voor en met bewoners.</p>
          <p style={{ fontSize: ".82rem" }}>Prototype-website met voorbeeldinhoud, geen live gegevens.</p>
        </div>
        <div>
          <h4>Navigatie</h4>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}><a href="#" onClick={(e) => { e.preventDefault(); goTo(item.id); }}>{item.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Bewoners</h4>
          <ul>
            <li><a href={mailtoHref(VVE_BESTUUR_EMAIL, "Vraag van bewoner De Waker")}>Mail het bestuur</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); goTo("contact"); }}>Storing melden</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); goTo("activiteiten"); }}>Activiteiten</a></li>
          </ul>
        </div>
        <div>
          <h4>Overig</h4>
          <ul>
            <li><a href="#" onClick={(e) => { e.preventDefault(); goTo("privacy"); }}>Privacy &amp; toegankelijkheid</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© 2026 De Waker — Samen wonen in Goirle</span>
        <span>Voorbeeldwebsite · prototype</span>
      </div>
    </footer>
  );
}

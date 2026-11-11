import Icon from "../components/Icon.jsx";
import Photo from "../components/Photo.jsx";
import ContactKnop from "../components/ContactKnop.jsx";
import { IMG } from "../data/afbeeldingen.js";
import { VVE_BESTUUR_EMAIL, ACTIVITEITEN_EMAIL } from "../data/contact.js";
import { mailtoHref } from "../utils/helpers.js";

export default function Contact({ goTo }) {
  return (
    <>
      <div className="wrap page-head">
        <div className="two-col" style={{ alignItems: "center" }}>
          <div>
            <span className="eyebrow">Contact</span>
            <h1>Neem contact met ons op</h1>
            <p>Heeft u een vraag, wilt u iets melden of doorgeven? Kies hieronder de juiste knop — uw eigen e-mailprogramma opent automatisch met een passend onderwerp.</p>
          </div>
          <Photo src={IMG.gevelOchtend} alt="De Waker in de ochtendzon" label="De Waker — Goirle" style={{ minHeight: 220 }} />
        </div>
      </div>

      <div className="wrap section-tight">
        <div className="card" style={{ background: "var(--navy)", color: "#fff", display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <h2 style={{ color: "#fff", margin: "0 0 6px" }}>E-mail het VvE-bestuur</h2>
            <p style={{ color: "#DCE6EA", margin: 0 }}>Voor algemene vragen aan het bestuur van de VvE.</p>
          </div>
          <a className="btn" style={{ background: "#fff", color: "var(--navy)" }}
             href={mailtoHref(VVE_BESTUUR_EMAIL, "Vraag van bewoner De Waker")}>
            <Icon name="mail" size={17} />E-mail het VvE-bestuur
          </a>
        </div>

        <div className="grid grid-4" style={{ marginTop: 24 }}>
          <ContactKnop icon="alert" titel="Storing of defect melden" omschrijving="Meld een storing of defect in het gebouw of de algemene ruimten."
                       email={VVE_BESTUUR_EMAIL} onderwerp="Storing of defect melding" />
          <ContactKnop icon="calendar" titel="Activiteit voorstellen" omschrijving="Heeft u een leuk idee voor een activiteit? Laat het de activiteitencommissie weten."
                       email={ACTIVITEITEN_EMAIL} onderwerp="Voorstel voor een activiteit" />
          <ContactKnop icon="news" titel="Nieuws of mededeling doorgeven" omschrijving="Heeft u iets dat andere bewoners moeten weten? Geef het door aan het bestuur."
                       email={VVE_BESTUUR_EMAIL} onderwerp="Nieuws of mededeling doorgeven" />
          <ContactKnop icon="info" titel="Algemene vraag" omschrijving="Voor overige vragen over het wonen in De Waker."
                       email={VVE_BESTUUR_EMAIL} onderwerp="Algemene vraag van bewoner" />
        </div>

        <div className="card-flat" style={{ padding: 20, marginTop: 28 }}>
          <p style={{ margin: 0, fontSize: ".92rem" }}>
            Uit privacyoverwegingen worden op deze website geen namen, privéadressen of persoonlijke
            telefoonnummers van bestuurs- of commissieleden vermeld. Lees meer op de{" "}
            <a href="#" onClick={(e) => { e.preventDefault(); goTo("privacy"); }}>privacypagina</a>.
          </p>
        </div>
      </div>
    </>
  );
}

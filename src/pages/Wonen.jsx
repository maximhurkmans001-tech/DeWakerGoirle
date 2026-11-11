import Icon from "../components/Icon.jsx";
import Photo from "../components/Photo.jsx";
import Ornament from "../components/Ornament.jsx";
import Accordion from "../components/Accordion.jsx";
import AfvalSchemaKaart from "../components/AfvalSchemaKaart.jsx";
import { IMG } from "../data/afbeeldingen.js";
import { WONEN_ONDERWERPEN, VEELGESTELDE_VRAGEN } from "../data/wonen.js";
import { VVE_BESTUUR_EMAIL } from "../data/contact.js";
import { mailtoHref } from "../utils/helpers.js";

export default function Wonen() {
  return (
    <>
      <div className="wrap page-head">
        <span className="eyebrow">Wonen in De Waker</span>
        <h1>Prettig, veilig en samen wonen</h1>
        <p>Praktische informatie over het wonen in De Waker — van de entree tot de fietsenstalling. Heeft u een vraag die hier niet bij staat? Het bestuur helpt u graag verder.</p>
        <Ornament />
      </div>
      <div className="wrap section-tight">
        <div className="two-col">
          <div>
            <Accordion items={WONEN_ONDERWERPEN} renderTitle={(i) => i.titel} renderBody={(i) => (
              <>
                <p>{i.tekst}</p>
                {/* Bij het onderwerp "Afval" (id w7) verschijnt ook het leegschema. */}
                {i.id === "w7" && <AfvalSchemaKaart />}
              </>
            )} />
          </div>
          <div className="card" style={{ position: "sticky", top: 96 }}>
            <Photo src={IMG.gevelStraat} alt="Entree en gevel van De Waker" label="Entree van De Waker" />
            <h3 style={{ marginTop: 16 }}>Vraag aan het bestuur</h3>
            <p>Staat uw vraag er niet bij, of wilt u iets doorgeven over het gebouw? Neem gerust contact op.</p>
            <a className="btn btn-navy" href={mailtoHref(VVE_BESTUUR_EMAIL, "Vraag over wonen in De Waker")}>
              <Icon name="mail" size={16} />Mail het bestuur
            </a>
          </div>
        </div>
      </div>

      <section className="section section-muted">
        <div className="wrap">
          <span className="eyebrow">Veelgestelde vragen</span>
          <h2>Vraag en antwoord</h2>
          <Accordion items={VEELGESTELDE_VRAGEN.map((v, i) => ({ id: "faq" + i, ...v }))}
                     renderTitle={(i) => i.vraag} renderBody={(i) => <p>{i.antwoord}</p>} />
        </div>
      </section>
    </>
  );
}

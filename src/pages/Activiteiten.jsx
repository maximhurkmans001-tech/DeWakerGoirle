import Icon from "../components/Icon.jsx";
import Photo from "../components/Photo.jsx";
import ActiviteitRow from "../components/ActiviteitRow.jsx";
import { IMG } from "../data/afbeeldingen.js";
import { ACTIVITEITEN } from "../data/activiteiten.js";
import { ACTIVITEITEN_EMAIL } from "../data/contact.js";
import { mailtoHref } from "../utils/helpers.js";

export default function Activiteiten() {
  const activiteiten = [...ACTIVITEITEN].sort((a, b) => (a.datum > b.datum ? 1 : -1));
  return (
    <>
      <div className="wrap page-head">
        <span className="eyebrow">Activiteiten</span>
        <h1>Samen dingen ondernemen</h1>
        <p>Een overzicht van geplande activiteiten voor bewoners van De Waker. "Interesse aangeven" is vrijblijvend en helpt de activiteitencommissie met de organisatie.</p>
      </div>

      <div className="wrap section-tight">
        {activiteiten.length === 0 ? (
          <div className="empty-state">
            <Icon name="calendar" size={26} style={{ marginBottom: 8, color: "var(--ink-faint)" }} />
            <p style={{ margin: 0 }}>Er staan op dit moment geen activiteiten gepland. Heeft u een leuk idee? Stel het gerust voor!</p>
          </div>
        ) : (
          <div className="grid" style={{ gap: 14 }}>
            {activiteiten.map((a) => <ActiviteitRow key={a.id} activiteit={a} />)}
          </div>
        )}
      </div>

      <section className="section section-muted">
        <div className="wrap two-col">
          <div>
            <span className="eyebrow">Activiteitencommissie</span>
            <h2>Doe mee met de activiteitencommissie</h2>
            <p>De activiteitencommissie van De Waker organiseert gezellige momenten voor en door bewoners — van een koffieochtend tot een buurtborrel. Hoe meer bewoners meedenken, hoe leuker en gevarieerder het aanbod.</p>
            <p>Heeft u zin om mee te denken, te helpen organiseren, of heeft u zelf een idee voor een activiteit? U bent van harte welkom, ongeacht hoeveel tijd u kunt vrijmaken.</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
              <a className="btn btn-navy" href={mailtoHref(ACTIVITEITEN_EMAIL, "Aanmelding voor een activiteit")}>
                <Icon name="calendar" size={16} />Meld je aan voor een activiteit
              </a>
              <a className="btn btn-outline" href={mailtoHref(ACTIVITEITEN_EMAIL, "Voorstel voor een nieuwe activiteit")}>
                <Icon name="megaphone" size={16} />Stel een activiteit voor
              </a>
              <a className="btn btn-outline" href={mailtoHref(ACTIVITEITEN_EMAIL, "Contact activiteitencommissie")}>
                <Icon name="mail" size={16} />Contact activiteitencommissie
              </a>
            </div>
          </div>
          <Photo src={IMG.terrasStraat} alt="Terras en straatzijde van De Waker" label="Leven rond De Waker" tall />
        </div>
      </section>
    </>
  );
}

import { PRIVACY_PUNTEN, TOEGANKELIJKHEID_PUNTEN, TOEKOMST } from "../data/privacy.js";

export default function Privacy() {
  return (
    <div className="wrap page-head">
      <span className="eyebrow">Privacy &amp; toegankelijkheid</span>
      <h1>Privacy, veiligheid en toegankelijkheid</h1>
      <p>Deze website is gemaakt voor en met bewoners van De Waker. Daarbij houden we rekening met privacy (AVG) en toegankelijkheid voor bewoners van alle leeftijden.</p>

      <div className="two-col" style={{ marginTop: 12 }}>
        <div className="card">
          <h3>Privacy-uitgangspunten</h3>
          <ul style={{ paddingLeft: 20, color: "var(--ink-soft)" }}>
            {PRIVACY_PUNTEN.map((p, i) => <li key={i} style={{ marginBottom: 8 }}>{p}</li>)}
          </ul>
        </div>
        <div className="card">
          <h3>Toegankelijkheid</h3>
          <ul style={{ paddingLeft: 20, color: "var(--ink-soft)" }}>
            {TOEGANKELIJKHEID_PUNTEN.map((p, i) => <li key={i} style={{ marginBottom: 8 }}>{p}</li>)}
          </ul>
        </div>
      </div>

      <div className="card-flat" style={{ padding: 20, marginTop: 24 }}>
        <p style={{ margin: 0 }}>
          Dit is een werkend prototype met voorbeeldinhoud. Er wordt op dit moment geen enkele
          persoonsgegeven van bewoners verzameld of opgeslagen door deze website.
        </p>
      </div>

      <section className="section-tight">
        <span className="eyebrow">Vooruitblik</span>
        <h2>Toekomstige uitbreidingen</h2>
        <p>De onderstaande mogelijkheden zijn nog niet actief. Ze staan op de planning voor een latere fase, zodra dit veilig en zorgvuldig kan worden ingericht.</p>
        <div className="card-flat" style={{ padding: "4px 20px" }}>
          {TOEKOMST.map((t, i) => (
            <div className="roadmap-item" key={i}>
              <span className="soon-tag">Binnenkort</span>
              <p style={{ margin: 0 }}>{t}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

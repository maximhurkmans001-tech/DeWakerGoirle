import Chip from "../components/Chip.jsx";
import ExternalA from "../components/ExternalA.jsx";
import InfoTegel from "../components/InfoTegel.jsx";
import { HANDIGE_INFORMATIE } from "../data/handigeInformatie.js";
import { NIEUWSBERICHTEN } from "../data/nieuws.js";
import { formatDatumLang } from "../utils/helpers.js";

export default function HandigeInformatie({ goTo }) {
  // Werkzaamheden komen automatisch uit de nieuwsberichten (src/data/nieuws.js).
  const werkzaamheden = NIEUWSBERICHTEN.filter((b) => b.categorie === "Werkzaamheden" || b.werk);
  return (
    <>
      <div className="wrap page-head">
        <span className="eyebrow">Handige informatie</span>
        <h1>Handige informatie</h1>
        <p>Belangrijke telefoonnummers en links, overzichtelijk bij elkaar. Bij een noodsituatie belt u altijd direct <strong>112</strong>.</p>
      </div>
      <div className="wrap section-tight">
        <div className="grid grid-3">
          {HANDIGE_INFORMATIE.map((item, i) => <InfoTegel key={i} item={item} goTo={goTo} />)}
        </div>
      </div>

      <section className="section section-muted">
        <div className="wrap">
          <span className="eyebrow">Bereikbaarheid</span>
          <h2>Werkzaamheden in de buurt</h2>
          <p style={{ maxWidth: 700 }}>
            De informatie op deze pagina is bedoeld als service aan de bewoners. Controleer voor de
            meest actuele informatie altijd de website van de gemeente of de organisatie die de
            werkzaamheden uitvoert.
          </p>
          {werkzaamheden.length === 0 ? (
            <div className="empty-state">
              <p style={{ margin: 0 }}>Er zijn op dit moment geen bekende werkzaamheden in de buurt.</p>
            </div>
          ) : (
            <div className="grid grid-2">
              {werkzaamheden.map((b) => (
                <div className="card" key={b.id}>
                  <Chip>{b.categorie}</Chip>
                  <h3 style={{ margin: "8px 0 6px" }}>{b.titel}</h3>
                  {b.werk && (
                    <>
                      <p style={{ margin: "2px 0" }}><strong>Locatie:</strong> {b.werk.locatie}</p>
                      <p style={{ margin: "2px 0" }}><strong>Periode:</strong> {formatDatumLang(b.werk.start)} t/m {formatDatumLang(b.werk.eind)}</p>
                      <p style={{ margin: "2px 0" }}><strong>Overlast:</strong> {b.werk.overlast}</p>
                      <p style={{ margin: "2px 0" }}><strong>Gevolgen:</strong> {b.werk.gevolgen}</p>
                      <p style={{ margin: "2px 0", fontSize: ".85rem", color: "var(--ink-faint)" }}>Laatst bijgewerkt: {formatDatumLang(b.werk.bijgewerkt)}</p>
                      {b.werk.bron && <ExternalA href={b.werk.bron.url}>{b.werk.bron.label}</ExternalA>}
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
          <button className="btn btn-outline btn-sm" style={{ marginTop: 20 }} onClick={() => goTo("nieuws", "Werkzaamheden")}>
            Alle werkzaamheden bekijken in Nieuws
          </button>
        </div>
      </section>
    </>
  );
}

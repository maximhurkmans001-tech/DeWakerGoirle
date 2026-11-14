import { useState } from "react";
import Icon from "../components/Icon.jsx";
import Photo from "../components/Photo.jsx";
import NoticeBanner from "../components/NoticeBanner.jsx";
import NieuwsKaart from "../components/NieuwsKaart.jsx";
import NieuwsModal from "../components/NieuwsModal.jsx";
import SnelLink from "../components/SnelLink.jsx";
import { IMG } from "../data/afbeeldingen.js";
import { NIEUWSBERICHTEN } from "../data/nieuws.js";
import { ACTIVITEITEN } from "../data/activiteiten.js";
import { BELANGRIJKE_MEDEDELING } from "../data/mededeling.js";
import { formatDatumKort } from "../utils/helpers.js";

export default function Home({ goTo }) {
  const laatsteNieuws = [...NIEUWSBERICHTEN].sort((a, b) => b.datum.localeCompare(a.datum) || ((b.prioriteit || 0) - (a.prioriteit || 0)) || a.id.localeCompare(b.id)).slice(0, 4);
  const komendeActiviteiten = [...ACTIVITEITEN].sort((a, b) => (a.datum > b.datum ? 1 : -1)).slice(0, 3);
  const [openBericht, setOpenBericht] = useState(null);

  return (
    <>
      <section className="hero wrap">
        <div className="hero__panel">
          <Photo src={IMG.heroHoek} alt="Appartementencomplex De Waker, hoek Tilburgseweg / Kalverstraat" label="De Waker — Goirle" className="photo--hero" />
          <div className="hero__scrim" />
          <div className="hero__content">
            <span className="eyebrow">Appartementencomplex De Waker · Goirle</span>
            <h1>Welkom bij De Waker</h1>
            <p>Het digitale informatiepunt voor onze bewoners — nieuws, informatie en activiteiten, allemaal op één plek.</p>
            <div className="hero__cta">
              <button className="btn btn-navy" onClick={() => goTo("nieuws")}>Bekijk het laatste nieuws</button>
              <button className="btn btn-outline" style={{ background: "rgba(255,255,255,.92)" }} onClick={() => goTo("contact")}>Neem contact op met de VvE</button>
            </div>
          </div>
        </div>
      </section>

      {BELANGRIJKE_MEDEDELING.enabled && (
        <div className="wrap section-tight"><NoticeBanner goTo={goTo} /></div>
      )}

      <section className="section">
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 12, flexWrap: "wrap" }}>
            <div>
              <span className="eyebrow">Actueel</span>
              <h2 style={{ margin: 0 }}>Laatste nieuws</h2>
            </div>
            <button className="btn btn-outline btn-sm" onClick={() => goTo("nieuws")}>Alle nieuwsberichten</button>
          </div>
          <div className="grid grid-4" style={{ marginTop: 24 }}>
            {laatsteNieuws.map((b) => <NieuwsKaart key={b.id} bericht={b} onOpen={setOpenBericht} />)}
          </div>
        </div>
        <NieuwsModal bericht={openBericht} onClose={() => setOpenBericht(null)} />
      </section>

      <section className="section section-muted">
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 12, flexWrap: "wrap" }}>
            <div>
              <span className="eyebrow">Agenda</span>
              <h2 style={{ margin: 0 }}>Binnenkort te doen</h2>
            </div>
            <button className="btn btn-outline btn-sm" onClick={() => goTo("activiteiten")}>Hele agenda bekijken</button>
          </div>
          <div className="grid" style={{ marginTop: 24 }}>
            {komendeActiviteiten.map((a) => {
              const d = a.voorstel ? { dag: "?", maand: "idee" } : formatDatumKort(a.datum);
              return (
                <div className="activity-row" key={a.id}>
                  <div className="activity-date"><span className="day">{d.dag}</span><span className="mon">{d.maand}</span></div>
                  <div>
                    <h3 style={{ margin: "0 0 4px" }}>{a.titel}</h3>
                    <div className="news-meta"><Icon name="clock" size={14} />{a.tijd} · <Icon name="mappin" size={14} />{a.locatie}</div>
                  </div>
                  <button className="btn btn-outline btn-sm" onClick={() => goTo("activiteiten")}>Meer info</button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="eyebrow">Snel geregeld</span>
          <h2>Snelle links</h2>
          <div className="grid grid-4">
            <SnelLink icon="mail" label="Contact met het VvE-bestuur" onClick={() => goTo("contact")} />
            <SnelLink icon="alert" label="Storing of defect melden" onClick={() => goTo("contact")} />
            <SnelLink icon="calendar" label="Activiteit aanmelden" onClick={() => goTo("activiteiten")} />
            <SnelLink icon="news" label="Werkzaamheden in de omgeving" onClick={() => goTo("nieuws")} />
            <SnelLink icon="recycle" label="Afvalkalender" href="https://www.goirle.nl" external />
            <SnelLink icon="building" label="Gemeente Goirle" href="https://www.goirle.nl" external />
            <SnelLink icon="phone" label="Noodnummers" onClick={() => goTo("info")} />
            <SnelLink icon="info" label="Handige informatie" onClick={() => goTo("info")} />
          </div>
        </div>
      </section>
    </>
  );
}

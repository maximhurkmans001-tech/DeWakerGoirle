import { useState, useEffect, useMemo } from "react";
import Icon from "../components/Icon.jsx";
import NieuwsKaart from "../components/NieuwsKaart.jsx";
import NieuwsModal from "../components/NieuwsModal.jsx";
import { NIEUWSBERICHTEN, NIEUWS_CATEGORIEEN } from "../data/nieuws.js";

export default function Nieuws({ initialFilter }) {
  const [filter, setFilter] = useState(initialFilter || "Alle berichten");
  const [zoek, setZoek] = useState("");
  const [open, setOpen] = useState(null);

  useEffect(() => { if (initialFilter) setFilter(initialFilter); }, [initialFilter]);

  const filters = ["Alle berichten", ...NIEUWS_CATEGORIEEN];
  const resultaten = useMemo(() => {
    return NIEUWSBERICHTEN
      .filter((b) => filter === "Alle berichten" || b.categorie === filter)
      .filter((b) => (b.titel + " " + b.samenvatting).toLowerCase().includes(zoek.toLowerCase()))
      .sort((a, b) => (a.datum < b.datum ? 1 : -1));
  }, [filter, zoek]);

  return (
    <div className="wrap page-head">
      <span className="eyebrow">Nieuws</span>
      <h1>Nieuws voor bewoners</h1>
      <p>Alle mededelingen over De Waker, de VvE, de gemeente en activiteiten bij elkaar. Gebruik de filters of de zoekbalk om snel te vinden wat u zoekt.</p>

      <div className="search-box">
        <Icon name="search" size={18} style={{ color: "var(--ink-faint)" }} />
        <input type="search" placeholder="Zoek in nieuwsberichten…" value={zoek}
               onChange={(e) => setZoek(e.target.value)} aria-label="Zoek in nieuwsberichten" />
      </div>

      <div className="filter-row" role="group" aria-label="Filter op categorie">
        {filters.map((f) => (
          <button key={f} className="filter-btn" aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>

      {resultaten.length === 0 ? (
        <div className="empty-state">
          <Icon name="news" size={26} style={{ marginBottom: 8, color: "var(--ink-faint)" }} />
          <p style={{ margin: 0 }}>Er zijn geen berichten gevonden die aan uw zoekopdracht voldoen.</p>
        </div>
      ) : (
        <div className="grid grid-3" style={{ marginTop: 8 }}>
          {resultaten.map((b) => <NieuwsKaart key={b.id} bericht={b} onOpen={setOpen} />)}
        </div>
      )}
      <NieuwsModal bericht={open} onClose={() => setOpen(null)} />
    </div>
  );
}

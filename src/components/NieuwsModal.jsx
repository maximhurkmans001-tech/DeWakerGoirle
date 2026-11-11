import Icon from "./Icon.jsx";
import Photo from "./Photo.jsx";
import Chip from "./Chip.jsx";
import ExternalA from "./ExternalA.jsx";
import { VVE_BESTUUR_EMAIL } from "../data/contact.js";
import { mailtoHref, formatDatumLang } from "../utils/helpers.js";

// Pop-up met het volledige nieuwsbericht. Sluit via de knop of door naast het venster te klikken.
export default function NieuwsModal({ bericht, onClose }) {
  if (!bericht) return null;
  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-titel">
        <button className="modal-close" onClick={onClose} aria-label="Sluiten"><Icon name="close" size={18} /></button>
        <Chip>{bericht.categorie}</Chip>
        <h2 id="modal-titel" style={{ marginTop: 10 }}>{bericht.titel}</h2>
        <div className="news-meta" style={{ marginBottom: 14 }}><Icon name="calendar" size={14} />{formatDatumLang(bericht.datum)}</div>
        <Photo label={"Foto: " + bericht.categorie} className="section-tight" />
        <p style={{ marginTop: 16 }}>{bericht.tekst}</p>
        {bericht.werk && (
          <div className="card-flat" style={{ padding: 16, marginBlock: 16 }}>
            <h3 style={{ fontSize: "1rem" }}>Details werkzaamheden</h3>
            <p style={{ margin: "4px 0" }}><strong>Locatie:</strong> {bericht.werk.locatie}</p>
            <p style={{ margin: "4px 0" }}><strong>Periode:</strong> {formatDatumLang(bericht.werk.start)} t/m {formatDatumLang(bericht.werk.eind)}</p>
            <p style={{ margin: "4px 0" }}><strong>Mogelijke overlast:</strong> {bericht.werk.overlast}</p>
            <p style={{ margin: "4px 0" }}><strong>Gevolgen bereikbaarheid:</strong> {bericht.werk.gevolgen}</p>
            <p style={{ margin: "4px 0" }}><strong>Laatst bijgewerkt:</strong> {formatDatumLang(bericht.werk.bijgewerkt)}</p>
            {bericht.werk.bron && <p style={{ margin: "4px 0" }}><strong>Bron:</strong> <ExternalA href={bericht.werk.bron.url}>{bericht.werk.bron.label}</ExternalA></p>}
          </div>
        )}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
          <a className="btn btn-navy btn-sm" href={mailtoHref(VVE_BESTUUR_EMAIL, "Vraag over: " + bericht.titel)}>
            <Icon name="mail" size={16} />Contact over dit bericht
          </a>
          <button className="btn btn-outline btn-sm" onClick={onClose}>Sluiten</button>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { NIEUWS_FOTOS, kiesNieuwsFoto } from "../data/nieuwsfotos.js";
import "../styles/nieuwsfotos.css";

export default function NieuwsFoto({ bericht, className = "", uitgebreid = false }) {
  const foto = kiesNieuwsFoto(bericht);
  const [mislukteBron, setMislukteBron] = useState(null);
  return (
    <figure className={`nieuwsfoto ${className}`}>
      <div className="nieuwsfoto__beeld">
        {mislukteBron !== foto.src ? <img key={foto.src} className="nieuwsfoto__foto" src={foto.src} alt={foto.alt} loading="lazy" decoding="async" style={{ objectFit: foto.pasvorm }} onError={() => setMislukteBron(foto.src)} /> : <span className="nieuwsfoto__fallback">{foto.alt}</span>}
        {bericht.categorie === "Gemeente Goirle" && <span className="nieuwsfoto__logo"><img src={NIEUWS_FOTOS.gemeentelogo} alt="Gemeente Goirle" /></span>}
        <span className="nieuwsfoto__label">{foto.label}</span>
      </div>
      <figcaption>
        {uitgebreid && <p className="nieuwsfoto__toelichting">{foto.toelichting || "Sfeerbeeld bij het onderwerp; geen opname van de beschreven gebeurtenis."}</p>}
        {foto.bron && <details className="nieuwsfoto__bron"><summary>Fotobron en gebruiksrechten</summary><p><a href={foto.bron} target="_blank" rel="noopener noreferrer">{foto.titel}</a> — {foto.auteur}. <a href={foto.licentieUrl} target="_blank" rel="noopener noreferrer">{foto.licentie}</a>. Verkleind; uitsnede in de weergave. {foto.licentie.includes("BY-SA") && "De bewerkte foto blijft beschikbaar onder dezelfde licentie."}</p></details>}
      </figcaption>
    </figure>
  );
}

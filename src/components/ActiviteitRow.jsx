import { useState } from "react";
import Icon from "./Icon.jsx";
import { formatDatumKort } from "../utils/helpers.js";

// Eén activiteit met knop "Interesse aangeven" (telt alleen in deze browser, wordt niet opgeslagen).
export default function ActiviteitRow({ activiteit }) {
  const [interesse, setInteresse] = useState(false);
  const [aantal, setAantal] = useState(activiteit.interesseStart);
  const d = formatDatumKort(activiteit.datum);

  function toggleInteresse() {
    setInteresse((v) => !v);
    setAantal((n) => (interesse ? n - 1 : n + 1));
  }

  return (
    <div className="activity-row">
      <div className="activity-date"><span className="day">{d.dag}</span><span className="mon">{d.maand}</span></div>
      <div>
        <h3 style={{ margin: "0 0 4px" }}>{activiteit.titel}</h3>
        <div className="news-meta">
          <Icon name="clock" size={14} />{activiteit.tijd} &nbsp;·&nbsp; <Icon name="mappin" size={14} />{activiteit.locatie}
        </div>
        <p style={{ margin: "8px 0 4px" }}>{activiteit.omschrijving}</p>
        <div className="news-meta">
          <Icon name="users" size={14} />Georganiseerd door {activiteit.organisator} · {aantal} {aantal === 1 ? "bewoner heeft" : "bewoners hebben"} interesse
        </div>
      </div>
      <button className={"btn btn-sm " + (interesse ? "btn-sage" : "btn-outline")} onClick={toggleInteresse}>
        <Icon name="check" size={15} />{interesse ? "Interesse gemeld" : "Interesse aangeven"}
      </button>
    </div>
  );
}

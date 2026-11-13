import { useState } from "react";
import Icon from "./Icon.jsx";
import { formatDatumKort } from "../utils/helpers.js";

export default function ActiviteitRow({ activiteit }) {
  const [interesse, setInteresse] = useState(false);
  const [aantal, setAantal] = useState(activiteit.interesseStart ?? 0);
  const d = formatDatumKort(activiteit.datum);
  const extern = Boolean(activiteit.bron);

  function toggleInteresse() {
    setAantal(n => interesse ? n - 1 : n + 1);
    setInteresse(v => !v);
  }

  return (
    <div className="activity-row">
      <div className="activity-date">
        <span className="day">{d.dag}</span>
        <span className="mon">{d.maand}</span>
      </div>

      <div>
        <h3 style={{ margin: "0 0 4px" }}>
          {activiteit.titel}
        </h3>

        <div className="news-meta">
          <Icon name="clock" size={14} />
          {activiteit.tijd}
          {" · "}
          <Icon name="mappin" size={14} />
          {activiteit.locatie}
        </div>

        <p style={{ margin: "8px 0 4px" }}>
          {activiteit.omschrijving}
        </p>

        <div className="news-meta">
          <Icon name="users" size={14} />
          {activiteit.organisator}

          {!extern && (
            <>
              {" · "}{aantal}{" "}
              {aantal === 1
                ? "bewoner heeft"
                : "bewoners hebben"} interesse
            </>
          )}
        </div>
      </div>

      {extern ? (
        <a
          className="btn btn-outline btn-sm"
          href={activiteit.bron}
          target="_blank"
          rel="noopener noreferrer"
        >
          Meer informatie
        </a>
      ) : (
        <button
          className={
            "btn btn-sm " +
            (interesse ? "btn-sage" : "btn-outline")
          }
          onClick={toggleInteresse}
        >
          <Icon name="check" size={15} />
          {interesse
            ? "Interesse gemeld"
            : "Interesse aangeven"}
        </button>
      )}
    </div>
  );
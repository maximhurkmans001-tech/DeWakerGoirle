import Icon from "./Icon.jsx";
import Photo from "./Photo.jsx";
import Chip from "./Chip.jsx";
import { formatDatumLang } from "../utils/helpers.js";

export default function NieuwsKaart({ bericht, onOpen }) {
  return (
    <article className="card news-card">
      <Photo label={"Foto: " + bericht.categorie} />
      <Chip>{bericht.categorie}</Chip>
      <h3 style={{ margin: "2px 0 0" }}>{bericht.titel}</h3>
      <div className="news-meta"><Icon name="calendar" size={14} />{formatDatumLang(bericht.datum)}</div>
      <p style={{ flex: 1 }}>{bericht.samenvatting}</p>
      <button className="btn btn-outline btn-sm" style={{ alignSelf: "flex-start" }} onClick={() => onOpen(bericht)}>
        Lees meer <Icon name="chevronDown" size={15} style={{ transform: "rotate(-90deg)" }} />
      </button>
    </article>
  );
}

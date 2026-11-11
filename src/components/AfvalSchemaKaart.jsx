import Icon from "./Icon.jsx";
import { AFVALSCHEMA, AFVAL_HUISREGELS } from "../data/wonen.js";

export default function AfvalSchemaKaart() {
  return (
    <div className="schema-card">
      <div className="schema-card__head">
        <Icon name="calendar" size={18} />
        <span>Leegschema containers</span>
      </div>
      <div className="schema-card__body">
        {AFVALSCHEMA.map((r) => (
          <div className="schema-row" key={r.naam}>
            <span className={"schema-row__dot schema-row__dot--" + r.kleur}><Icon name={r.icon} size={19} /></span>
            <span><strong>{r.naam}</strong> — {r.frequentie}</span>
          </div>
        ))}
      </div>
      <div className="schema-card__head schema-card__head--sub">
        <Icon name="shield" size={17} />
        <span>Belangrijke huisregels</span>
      </div>
      <ul className="schema-checklist">
        {AFVAL_HUISREGELS.map((regel, i) => (
          <li key={i}><Icon name="check" size={14} />{regel}</li>
        ))}
      </ul>
    </div>
  );
}

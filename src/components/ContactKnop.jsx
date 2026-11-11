import Icon from "./Icon.jsx";
import { mailtoHref } from "../utils/helpers.js";

export default function ContactKnop({ icon, titel, omschrijving, email, onderwerp }) {
  return (
    <div className="card" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <span className="icon-badge"><Icon name={icon} /></span>
      <h3 style={{ margin: 0 }}>{titel}</h3>
      <p style={{ flex: 1 }}>{omschrijving}</p>
      <a className="btn btn-outline btn-sm" style={{ alignSelf: "flex-start" }} href={mailtoHref(email, onderwerp)}>
        <Icon name="mail" size={15} />E-mail versturen
      </a>
    </div>
  );
}

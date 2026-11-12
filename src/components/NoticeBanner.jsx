import Icon from "./Icon.jsx";
import { BELANGRIJKE_MEDEDELING } from "../data/mededeling.js";

export default function NoticeBanner({ goTo }) {
  if (!BELANGRIJKE_MEDEDELING.enabled) return null;
  return (
    <div className="notice-banner" role="status">
      <span className="icon-badge" aria-hidden="true"><Icon name="megaphone" /></span>
      <div>
        <strong>{BELANGRIJKE_MEDEDELING.titel}</strong>
        <p style={{ margin: ".35em 0 0" }}>{BELANGRIJKE_MEDEDELING.tekst}</p>
        <p style={{ margin: ".25em 0 0" }}>
          Lees hier alles over bij{" "}
          <button type="button" onClick={() => goTo("nieuws", "Gemeente Goirle")}
            style={{ background: "none", border: 0, padding: 0, color: "var(--urgent)",
              font: "inherit", fontWeight: 700, textDecoration: "underline", cursor: "pointer" }}>
            Het Laatste Nieuws
          </button>.
        </p>
      </div>
    </div>
  );
}

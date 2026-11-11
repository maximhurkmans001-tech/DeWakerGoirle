import Icon from "./Icon.jsx";
import { BELANGRIJKE_MEDEDELING } from "../data/mededeling.js";

export default function NoticeBanner() {
  if (!BELANGRIJKE_MEDEDELING.enabled) return null;
  return (
    <div className="notice-banner" role="status">
      <span className="icon-badge"><Icon name="megaphone" /></span>
      <div>
        <strong>Belangrijke mededeling — </strong>{BELANGRIJKE_MEDEDELING.titel}
        <p style={{ margin: ".35em 0 0" }}>{BELANGRIJKE_MEDEDELING.tekst}</p>
      </div>
    </div>
  );
}

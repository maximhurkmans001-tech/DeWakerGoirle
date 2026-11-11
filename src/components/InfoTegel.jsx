import Icon from "./Icon.jsx";
import ExternalA from "./ExternalA.jsx";

export default function InfoTegel({ item, goTo }) {
  return (
    <div className="card" style={item.nadruk ? { borderColor: "var(--urgent)", background: "var(--urgent-tint)" } : undefined}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
        <span className="icon-badge" style={item.nadruk ? { background: "var(--urgent)", color: "#fff" } : undefined}>
          <Icon name={item.icon} />
        </span>
        <h3 style={{ margin: 0, fontSize: "1.05rem" }}>{item.titel}</h3>
      </div>
      <p style={{ fontWeight: 700, color: "var(--ink)", margin: "0 0 4px", fontSize: item.nadruk ? "1.4rem" : "1rem" }}>
        {item.url ? <ExternalA href={item.url}>{item.waarde}</ExternalA> : item.waarde}
      </p>
      {item.toelichting && <p style={{ margin: 0, fontSize: ".92rem" }}>{item.toelichting}</p>}
      {item.actie === "contact" && (
        <button className="btn btn-outline btn-sm" style={{ marginTop: 10 }} onClick={() => goTo("contact")}>Naar contactpagina</button>
      )}
    </div>
  );
}

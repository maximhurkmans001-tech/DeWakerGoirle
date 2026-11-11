import Icon from "../components/Icon.jsx";
import Photo from "../components/Photo.jsx";
import ExternalA from "../components/ExternalA.jsx";
import { IMG } from "../data/afbeeldingen.js";
import { GOIRLE_CATEGORIEEN } from "../data/goirle.js";

export default function Goirle() {
  return (
    <>
      <div className="wrap page-head">
        <span className="eyebrow">Goirle en omgeving</span>
        <h1>Goirle en omgeving</h1>
        <p>Een aantal tips voor wat er te doen en te vinden is in en rond Goirle. Openingstijden en programma's kunnen wijzigen — controleer bij twijfel altijd de website van de organisatie zelf.</p>
      </div>
      <div className="wrap section-tight">
        <Photo src={IMG.goirleLucht} alt="Luchtfoto van het centrum van Goirle met De Waker" label="Goirle, gezien vanuit de lucht" style={{ minHeight: 260, marginBottom: 28 }} />
        <div className="grid grid-2">
          {GOIRLE_CATEGORIEEN.map((cat) => (
            <div className="card" key={cat.id}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <span className="icon-badge"><Icon name={cat.icon} /></span>
                <h3 style={{ margin: 0 }}>{cat.titel}</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {cat.items.map((item, i) => (
                  <div key={i}>
                    <strong>{item.naam}</strong>
                    <p style={{ margin: "2px 0 0" }}>{item.omschrijving}</p>
                    {item.url && <ExternalA href={item.url}>Bezoek website</ExternalA>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

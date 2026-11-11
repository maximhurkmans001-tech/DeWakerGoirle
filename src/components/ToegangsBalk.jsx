import { useEffect, useState } from "react";

// Balk bovenaan het bewonersgedeelte met de knop Uitloggen.
// Controleert elke minuut, en zodra het tabblad weer zichtbaar wordt,
// of de sessie nog geldig is. Zo niet: terug naar het inlogscherm.
// Tijdens "npm run dev" (lokale voorbeeldweergave) is er geen server,
// dan wordt die controle overgeslagen.
const LOKAAL = import.meta.env.DEV;

function naarInloggen() {
  document.body.replaceChildren();
  window.location.replace("/inloggen");
}

export default function ToegangsBalk() {
  const [bezig, setBezig] = useState(false);

  useEffect(() => {
    if (LOKAAL) return;
    async function controleer() {
      try {
        const r = await fetch("/api/session", { cache: "no-store", credentials: "same-origin" });
        if (r.status === 401) naarInloggen();
      } catch { /* geen verbinding: later opnieuw proberen */ }
    }
    const zichtbaar = () => { if (!document.hidden) controleer(); };
    const terugKnop = (e) => { if (e.persisted) window.location.reload(); };
    const timer = setInterval(controleer, 60000);
    document.addEventListener("visibilitychange", zichtbaar);
    window.addEventListener("pageshow", terugKnop);
    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", zichtbaar);
      window.removeEventListener("pageshow", terugKnop);
    };
  }, []);

  async function uitloggen() {
    if (LOKAAL) { alert("Lokale voorbeeldweergave: uitloggen werkt alleen op de echte website."); return; }
    setBezig(true);
    try {
      const r = await fetch("/api/logout", { method: "POST", credentials: "same-origin" });
      if (r.ok) { window.location.replace("/"); return; }
    } catch { /* hieronder melden */ }
    setBezig(false);
    alert("Uitloggen is niet gelukt. Probeer het opnieuw.");
  }

  return (
    <div className="waker-access-bar">
      <span>{LOKAAL ? "Lokale voorbeeldweergave — bewonersgedeelte" : "Besloten bewonersgedeelte"}</span>
      <button type="button" onClick={uitloggen} disabled={bezig}>Uitloggen</button>
    </div>
  );
}

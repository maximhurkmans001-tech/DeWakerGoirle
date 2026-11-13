/* ACTIVITEITEN — worden automatisch op datum gesorteerd.
   De homepage toont de eerste drie. */

// Activiteiten voor bewoners. "interesseStart" is een voorbeeldaantal
// mensen dat al interesse toonde (puur ter illustratie).
export const ACTIVITEITEN = [
  { id: "a1", titel: "Koffieochtend voor bewoners", datum: "2026-09-27", tijd: "10:00 – 11:30", locatie: "Gemeenschappelijke ruimte, begane grond", omschrijving: "Kom gezellig langs voor een kop koffie of thee en maak kennis met uw buren.", organisator: "Activiteitencommissie", interesseStart: 6 },
  { id: "a2", titel: "Gezamenlijke wandeling door Goirle", datum: "2026-10-04", tijd: "14:00 – 15:30", locatie: "Verzamelen bij de hoofdingang", omschrijving: "Een rustige wandeling van ongeveer 5 km door het centrum en het groen rond Goirle.", organisator: "Activiteitencommissie", interesseStart: 4 },
  { id: "a3", titel: "Culturele activiteit in het centrum van Goirle", datum: "2026-10-11", tijd: "19:30 – 22:00", locatie: "Cultureel Centrum Jan van Besouw", omschrijving: "Gezamenlijk bezoek aan een voorstelling in het cultureel centrum. Kaarten zelf te bekostigen.", organisator: "Activiteitencommissie", interesseStart: 3 },
  { id: "a4", titel: "Buurtborrel op het binnenterrein", datum: "2026-10-18", tijd: "17:00 – 19:00", locatie: "Binnenterrein / gemeenschappelijke tuin", omschrijving: "Informele borrel om elkaar beter te leren kennen. Neem gerust iets lekkers mee om te delen.", organisator: "Activiteitencommissie", interesseStart: 9 },
  { id: "a5", titel: "Fietstocht rond Goirle", datum: "2026-10-25", tijd: "13:00 – 16:00", locatie: "Verzamelen bij de fietsenstalling", omschrijving: "Een ontspannen fietstocht van ongeveer 20 km door het buitengebied rond Goirle.", organisator: "Activiteitencommissie", interesseStart: 5 },
  { id: "a6", titel: "Nieuwjaarsborrel", datum: "2027-01-09", tijd: "16:00 – 18:00", locatie: "Gemeenschappelijke ruimte, begane grond", omschrijving: "Start het nieuwe jaar samen met uw buren onder het genot van een hapje en een drankje.", organisator: "VvE-bestuur & activiteitencommissie", interesseStart: 11 },
];
// Evenementen Goirle en Riel — gecontroleerd op 13 november 2026.
{
  const lokaal = [
    {
      id: "omgeving-sinterklaas-2026",
      titel: "Intocht Sinterklaas in Goirle en Riel",
      datum: "2026-11-15",
      tijd: "Riel 11.00 uur · Goirle circa 13.30 uur",
      locatie: "Riel: Spoorweide → Dorpsplein · Goirle: Bergstraat → Kloosterplein",
      omschrijving: "Sinterklaas bezoekt beide dorpskernen. In Goirle wordt hij tussen 14.30 en 15.00 uur op het Kloosterplein verwacht. Bekijk bij de bron de volledige route.",
      organisator: "Lokale intochtorganisaties",
      bron: "https://www.goirle.nl/nieuwsoverzicht/nieuwsbericht/artikel/sinterklaas-intocht"
    },
    {
      id: "omgeving-hop-hap-2026",
      titel: "HOP & HAP Bierproeverij",
      datum: "2026-11-21",
      eindDatum: "2026-11-22",
      tijd: "21 november 20.00 uur – 22 november 03.00 uur",
      locatie: "Café Kerkzicht, Riel",
      omschrijving: "Proeverij met speciaalbier en bijpassende hapjes. De avond start op zaterdag en loopt door na middernacht; het zijn geen twee afzonderlijke proeverijdagen. Reserveer bij de organisator en controleer de beschikbaarheid.",
      organisator: "Café Kerkzicht",
      bron: "https://visitgoirle.com/evenement/hop-hap-bierproeverij/"
    },
    {
      id: "omgeving-christmas-carol-2026",
      titel: "A Christmas Carol — SPOT! Theater Goirle",
      datum: "2026-12-11",
      eindDatum: "2026-12-20",
      tijd: "11 t/m 20 december · meerdere voorstellingen",
      locatie: "Cultureel Centrum Jan van Besouw, Goirle",
      omschrijving: "Musical over Scrooge en de betekenis van kerst. Voorstellingen op 11 en 12 december om 20.00 uur, 13 december om 14.00 uur, 18 december om 20.00 uur en 19 en 20 december om 14.00 én 20.00 uur. Kies bij SPOT! een voorstelling en reserveer kaarten.",
      organisator: "SPOT! Theater Goirle",
      bron: "https://spot-theater.nl/a-christmas-carol/"
    },
    {
      id: "omgeving-wintermarkt-2026",
      titel: "Wintermarkt Centrum Goirle",
      datum: "2026-12-12",
      tijd: "14.00 – 20.00 uur",
      locatie: "Centrum Goirle",
      omschrijving: "Wintermarkt met kramen van lokale ondernemers en hobbyisten. Een gelegenheid om samen door het centrum te wandelen en de kerstsfeer te beleven.",
      organisator: "Ondernemers Centrum Goirle",
      bron: "https://centrumgoirle.nl/activiteiten/"
    },
    {
      id: "omgeving-enjoy-kerst-2026",
      titel: "Enjoy Kerstconcert — Enjoy a Cheesy Christmas",
      datum: "2026-12-19",
      tijd: "Aanvang 15.00 uur · eindtijd niet vermeld",
      locatie: "Annetje van Puijenbroek Kapel, Jan van Besouw, Goirle",
      omschrijving: "Enjoy brengt een kerstprogramma met meerstemmige zang. Kaarten en actuele informatie zijn verkrijgbaar via de aankondiging van Jan van Besouw.",
      organisator: "Enjoy",
      bron: "https://janvanbesouw.nl/voorstelling/enjoy-kerstconcert-enjoy-a-cheesy-christmas/"
    },
    {
      id: "omgeving-oudejaarsdag-2026",
      titel: "Oudejaarsdag — kalendervermelding",
      datum: "2026-12-31",
      tijd: "Geen centraal programma bevestigd",
      locatie: "Goirle en Riel",
      omschrijving: "Oudejaarsdag staat vermeld in de gemeentelijke aanwijzing van collectieve festiviteiten. Dit is een kalendervermelding en geen aankondiging van een centraal feest of een VvE-bijeenkomst. Raadpleeg afzonderlijke organisatoren voor hun programma.",
      organisator: "Kalenderinformatie gemeente Goirle",
      bron: "https://lokaleregelgeving.overheid.nl/CVDR747859/1"
    }
  ];

  const vandaag = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Europe/Amsterdam",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());

  const uniek = new Map(
    [...ACTIVITEITEN, ...lokaal.map(a => ({
      ...a,
      interesseStart: 0
    }))].map(a => [a.id, a])
  );

  ACTIVITEITEN.splice(
    0,
    ACTIVITEITEN.length,
    ...[...uniek.values()]
      .filter(a => (a.eindDatum || a.datum) >= vandaag)
      .sort((a, b) => a.datum.localeCompare(b.datum))
  );
}

Hierdoor blijven toekomstige bewonersactiviteiten behouden. Verlopen activiteiten verdwijnen bij het opnieuw laden uit het overzicht.

2. Open src → components → ActiviteitRow.jsx

Vervang in dit bestand de volledige inhoud met onderstaande code. Externe evenementen krijgen hiermee een knop ‘Meer informatie’ naar de organisator.
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
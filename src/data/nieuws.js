/* NIEUWSBERICHTEN
   Nieuwste berichten verschijnen automatisch bovenaan (op datum gesorteerd).
   Datum schrijf je als "jjjj-mm-dd". Een bericht met "werk: {...}" verschijnt
   ook bij "Werkzaamheden in de buurt" op de pagina Handige informatie. */

// Nieuwsberichten. Voeg een nieuw bericht toe door een regel te kopiëren
// en de gegevens aan te passen. "categorie" moet één van de woorden uit
// NIEUWS_CATEGORIEEN zijn.
export const NIEUWS_CATEGORIEEN = ["De Waker", "VvE", "Gemeente Goirle", "Werkzaamheden", "Activiteiten", "Veiligheid", "Omgeving"];

export const NIEUWSBERICHTEN = [
  {
    id: "n1",
    categorie: "Gemeente Goirle",
    titel: "Gemeente kondigt werkzaamheden aan in de omgeving van De Waker",
    datum: "2026-09-15",
    samenvatting: "De gemeente start volgende maand met het opnieuw inrichten van de Kalverstraat, vlak bij de hoofdingang van De Waker.",
    tekst: "De gemeente Goirle start op maandag 6 oktober met de herinrichting van een deel van de Kalverstraat. De werkzaamheden bestaan uit het vervangen van bestrating en het aanpassen van de parkeervakken. De werkzaamheden duren naar verwachting drie weken. Fietsers en voetgangers kunnen tijdens de werkzaamheden gebruikmaken van een tijdelijk pad langs de bouwafzetting. (Voorbeeldbericht)",
    werk: {
      locatie: "Kalverstraat, ter hoogte van De Waker",
      start: "2026-10-06",
      eind: "2026-10-24",
      overlast: "Beperkte bereikbaarheid voor auto's, tijdelijke parkeervakken vervallen.",
      gevolgen: "Hoofdingang blijft bereikbaar voor voetgangers; fietsers volgen de gele bebording.",
      bijgewerkt: "2026-09-15",
      bron: { label: "Gemeente Goirle – projecten openbare ruimte", url: "https://www.goirle.nl" },
    },
  },
  {
    id: "n2",
    categorie: "VvE",
    titel: "Uitnodiging voor de volgende bewonersbijeenkomst",
    datum: "2026-09-12",
    samenvatting: "Het bestuur nodigt alle bewoners uit voor de jaarlijkse bewonersbijeenkomst op donderdag 8 oktober.",
    tekst: "Op donderdag 8 oktober om 19:30 uur organiseert het VvE-bestuur de jaarlijkse bewonersbijeenkomst in de gemeenschappelijke ruimte op de begane grond. Op de agenda staan onder meer het onderhoudsplan voor volgend jaar en een toelichting op de energiekosten van de algemene ruimten. Aanmelden kan via het bestuur. (Voorbeeldbericht)",
  },
  {
    id: "n3",
    categorie: "Activiteiten",
    titel: "Activiteitencommissie zoekt enthousiaste bewoners",
    datum: "2026-09-10",
    samenvatting: "De activiteitencommissie breidt uit en zoekt bewoners die af en toe willen meehelpen met het organiseren van gezellige momenten.",
    tekst: "Vind je het leuk om samen met andere bewoners activiteiten te bedenken en organiseren? De activiteitencommissie van De Waker is op zoek naar nieuwe leden. Het kost weinig tijd en zorgt voor een gezellige, betrokken buurt. Meld je vrijblijvend aan via de activiteitenpagina. (Voorbeeldbericht)",
  },
  {
    id: "n4",
    categorie: "De Waker",
    titel: "Onderhoud aan de algemene ruimten",
    datum: "2026-09-05",
    samenvatting: "Volgende week wordt er onderhoud gepleegd aan de verlichting in de gemeenschappelijke gangen en het trappenhuis.",
    tekst: "Aannemer Verlichting & Techniek voert van 22 t/m 24 september onderhoud uit aan de verlichting in de gangen en het trappenhuis. Er kan tijdelijk sprake zijn van verminderde verlichting. Bij vragen kunt u terecht bij het bestuur. (Voorbeeldbericht)",
  },
  {
    id: "n5",
    categorie: "Veiligheid",
    titel: "Controleer uw rookmelder tijdens de jaarlijkse check",
    datum: "2026-08-28",
    samenvatting: "Deze maand voert de brandveiligheidscommissie een vrijwillige controle uit van de rookmelders in de appartementen.",
    tekst: "Brandveiligheid is een gezamenlijke verantwoordelijkheid. Bewoners die willen laten controleren of hun rookmelder goed werkt, kunnen dit laten weten via het bestuur. Denk ook zelf eens aan het testen van de batterij. (Voorbeeldbericht)",
  },
  {
    id: "n6",
    categorie: "Werkzaamheden",
    titel: "Rioolinspectie in de Tilburgseweg",
    datum: "2026-08-20",
    samenvatting: "Waterschap en gemeente voeren een periodieke rioolinspectie uit in de Tilburgseweg, nabij De Waker.",
    tekst: "Van 1 t/m 3 september wordt er een camera-inspectie van het riool uitgevoerd. Dit kan gepaard gaan met beperkte geluidsoverlast overdag. Er zijn geen gevolgen voor de watertoevoer. (Voorbeeldbericht)",
    werk: {
      locatie: "Tilburgseweg, nabij De Waker",
      start: "2026-09-01",
      eind: "2026-09-03",
      overlast: "Beperkte geluidsoverlast overdag door inspectievoertuig.",
      gevolgen: "Geen gevolgen voor watertoevoer of bereikbaarheid.",
      bijgewerkt: "2026-08-20",
      bron: { label: "Gemeente Goirle", url: "https://www.goirle.nl" },
    },
  },
];

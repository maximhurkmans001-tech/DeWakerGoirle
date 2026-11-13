/* Inhoud van de pagina "Wonen in De Waker".
   "icon" is een naam uit src/data/iconen.js. */

// Onderwerpen op de pagina "Wonen in De Waker".
export const WONEN_ONDERWERPEN = [
  { id: "w1", icon: "building", titel: "Over appartementencomplex De Waker", tekst: "De Waker bestaat uit meerdere woonlagen met een gevarieerd aanbod appartementen. Het gebouw is centraal gelegen in Goirle en biedt een rustige, verzorgde woonomgeving voor bewoners van alle leeftijden. " },
  { id: "w2", icon: "users", titel: "Gebruik van de algemene ruimten", tekst: "De hal, gangen, het trappenhuis en de gemeenschappelijke ruimte zijn er voor iedereen. Houd doorgangen vrij en meld schade of overlast bij het bestuur, zodat we deze ruimtes samen netjes houden. " },
  { id: "w3", icon: "shield", titel: "Entree en toegangsbeheer", tekst: "Het gebouw is toegankelijk via een elektronisch sleutelsysteem. Laat geen onbekenden automatisch binnen en meld een verloren sleutel of pas altijd direct bij het bestuur. " },
  { id: "w4", icon: "chevronUpDown", titel: "Liften", tekst: "De Waker beschikt over een lift die alle woonlagen en de parkeergelegenheid verbindt. Bij een storing kunt u dit melden bij het bestuur; er wordt dan zo snel mogelijk een monteur ingeschakeld. " },
  { id: "w5", icon: "car", titel: "Parkeren", tekst: "Er is parkeergelegenheid voor bewoners op eigen terrein. Houd rekening met uw buren bij het parkeren en gebruik alleen de aan u toegewezen plek. " },
  { id: "w6", icon: "bike", titel: "Fietsenstalling", tekst: "We hebben op het buitenterrein geen fietsenstalling. Fietsen dienen in de eigen berging te worden geplaatst en niet op de parkeerplaatsen voor auto's, zodat het in- en uitrijden van auto's niet wordt gehinderd." },
  { id: "w7", icon: "recycle", titel: "Afval en afvalscheiding", tekst: "Huishoudelijk afval wordt gescheiden ingezameld via de daarvoor bestemde containers. Raadpleeg de afvalkalender van de gemeente Goirle voor de actuele inzameldagen. " },
  { id: "w8", icon: "shield", titel: "Veiligheid en brandveiligheid", tekst: "Houd vluchtwegen en trappenhuizen te allen tijde vrij. Controleer regelmatig uw eigen rookmelder en meld gebreken aan nooddeuren of verlichting bij het bestuur. " },
  { id: "w9", icon: "bolt", titel: "Laadpalen", tekst: "Op de parkeergelegenheid zijn laadpunten voor elektrische auto's aanwezig. Deze zijn van de individuele bewoners en dus niet toegankelijk voor derden." },
  { id: "w10", icon: "check", titel: "Onderhoud en schoonmaak", tekst: "De algemene ruimten worden periodiek schoongemaakt en onderhouden in opdracht van de VvE. Ziet u iets dat aandacht nodig heeft? Geef dit gerust door aan het bestuur. " },
  { id: "w11", icon: "volume", titel: "Geluid en rekening houden met elkaar", tekst: "In een appartementencomplex wonen we dicht op elkaar. Houd rekening met buren, zeker in de avond en nacht, en overleg gerust rechtstreeks bij overlast voordat u het bestuur inschakelt. " },
  { id: "w12", icon: "truck", titel: "Verhuizing of levering van grote goederen", tekst: "Bij een verhuizing of de levering van grote meubels kunt u de lift en het gebruik van gemeenschappelijke ruimten het beste vooraf afstemmen met het bestuur, zodat dit voor iedereen soepel verloopt. " },
];

export const VEELGESTELDE_VRAGEN = [
  { vraag: "Hoe meld ik een storing in het gebouw?", antwoord: "Gebruik de knop 'Storing of defect melden' op de contactpagina. Voor spoedeisende situaties zoals brand of gevaar belt u altijd direct 112." },
  { vraag: "Waar vind ik de huisregels van de VvE?", antwoord: "De volledige huisregels worden op een later moment beschikbaar gesteld via het (toekomstige) beveiligde bewonersportaal. Neem bij vragen gerust contact op met het bestuur." },
  { vraag: "Kan ik gasten laten overnachten?", antwoord: "Ja, gasten zijn welkom. Wij vragen wel om rekening te houden met de rust van uw buren, zeker in de gemeenschappelijke ruimten." },
  { vraag: "Hoe kan ik meedenken over activiteiten?", antwoord: "Heel graag! Neem contact op met de activiteitencommissie via de activiteitenpagina, wij denken graag met u mee." },
  { vraag: "Bij wie meld ik geluidsoverlast?", antwoord: "Probeer bij lichte overlast eerst rechtstreeks en vriendelijk contact te zoeken met de buren. Blijft de overlast bestaan, neem dan contact op met het bestuur." },
];

// Leegschema van de containerruimte — overgenomen uit het officiële
// afvalschema van de VvE. Pas hier de dagen aan als het schema wijzigt.
export const AFVALSCHEMA = [
  { naam: "Restafval", frequentie: "Maandag en donderdag", icon: "trashcan", kleur: "grijs" },
  { naam: "Papier", frequentie: "1x per 2 weken, op maandag in de even weken", icon: "paper", kleur: "blauw" },
  { naam: "PMD", frequentie: "1x per week op donderdag", icon: "pmd", kleur: "geel" },
];
export const AFVAL_HUISREGELS = [
  "Plaats niets naast de containers.",
  "Houd de ruimte te allen tijde schoon en netjes.",
  "Gebruik altijd de juiste container voor het juiste afval.",
  "Sluit afvalzakken goed af.",
  "Laat geen los afval achter in de ruimte.",
];

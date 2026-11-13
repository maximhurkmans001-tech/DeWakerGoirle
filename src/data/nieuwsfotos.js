// Nieuwsbeelden. Nieuwe berichten krijgen automatisch een categoriebeeld.
// Optioneel per bericht: fotoSleutel: "goirle-molen" (of een sleutel hieronder).
import { NIEUWSBERICHTEN } from "./nieuws.js";
const basis = import.meta.env.BASE_URL + "images/";
const extern = {
  "goirle-molen": {
    "bestand": "goirle-molen.jpg",
    "alt": "Molen De Visscher in Goirle",
    "label": "Goirle · De Visscher",
    "titel": "Goirle, windmolen De Visscher RM16529 IMG 7601 2020-09-14 17.54.jpg",
    "auteur": "Michielverbeek",
    "bron": "https://commons.wikimedia.org/wiki/File:Goirle,_windmolen_De_Visscher_RM16529_IMG_7601_2020-09-14_17.54.jpg",
    "licentie": "CC BY-SA 4.0",
    "licentieUrl": "https://creativecommons.org/licenses/by-sa/4.0"
  },
  "activiteiten-spellen": {
    "bestand": "activiteiten-spellen.jpg",
    "alt": "Koffie naast een bordspel",
    "label": "Samen iets ondernemen",
    "titel": "Greek Coffee next to a board of Tavli.jpg",
    "auteur": "Nikos Kitsakis",
    "bron": "https://commons.wikimedia.org/wiki/File:Greek_Coffee_next_to_a_board_of_Tavli.jpg",
    "licentie": "CC BY 4.0",
    "licentieUrl": "https://creativecommons.org/licenses/by/4.0"
  },
  "goirle-vijf-bogen": {
    "bestand": "goirle-vijf-bogen.jpg",
    "alt": "De Vijf Bogen, het voormalige raadhuis van Goirle",
    "label": "Centrum Goirle",
    "titel": "Kerkstraat 2 Goirle.jpg",
    "auteur": "UitGoirle",
    "bron": "https://commons.wikimedia.org/wiki/File:Kerkstraat_2_Goirle.jpg",
    "licentie": "CC BY-SA 4.0",
    "licentieUrl": "https://creativecommons.org/licenses/by-sa/4.0"
  },
  "goirle-kerk": {
    "bestand": "goirle-kerk.jpg",
    "alt": "Sint-Janskerk in Goirle",
    "label": "Goirle · Sint-Janskerk",
    "titel": "T.T RK Kerk Goirle (3).JPG",
    "auteur": "MHB Verkuijlen",
    "bron": "https://commons.wikimedia.org/wiki/File:T.T_RK_Kerk_Goirle_(3).JPG",
    "licentie": "CC BY-SA 3.0 nl",
    "licentieUrl": "https://creativecommons.org/licenses/by-sa/3.0/nl/deed.en"
  },
  "veiligheid-rookmelder": {
    "bestand": "veiligheid-rookmelder.jpg",
    "alt": "Rookmelder aan een plafond",
    "label": "Veilig wonen",
    "titel": "Residential smoke detector.jpg",
    "auteur": "Oleg Alexandrov",
    "bron": "https://commons.wikimedia.org/wiki/File:Residential_smoke_detector.jpg",
    "licentie": "Public domain",
    "licentieUrl": "https://creativecommons.org/publicdomain/mark/1.0/"
  }
};
export const NIEUWS_FOTOS = { gemeentelogo: basis + "nieuws/gemeente-goirle-logo.png" };
const eigen = {
  "waker-hoek": { bestand: "hero-hoek.jpg", alt: "De Waker op de hoek van Tilburgseweg en Kalverstraat", label: "De Waker", toelichting: "Gebouwbeeld uit de bestaande fotocollectie van De Waker." },
  "waker-gevel": { bestand: "gevel-straat.jpg", alt: "Gevel van appartementencomplex De Waker", label: "Samen wonen in De Waker", toelichting: "Gebouwbeeld uit de bestaande fotocollectie van De Waker." },
  "waker-ochtend": { bestand: "gevel-ochtend.jpg", alt: "De Waker gezien vanaf de straat", label: "Onze VvE", toelichting: "Gebouwbeeld uit de bestaande fotocollectie van De Waker." },
  "waker-terras": { bestand: "terras-straat.jpg", alt: "De Waker en de straatomgeving", label: "Rondom De Waker", toelichting: "Gebouwbeeld uit de bestaande fotocollectie van De Waker." },
  "goirle-overzicht": { bestand: "goirle-lucht.jpg", alt: "Overzichtsbeeld van Goirle uit de bestaande websitecollectie", label: "Goirle", toelichting: "Sfeerbeeld uit de bestaande websitecollectie; geen actuele opname van werkzaamheden." }
};
const perCategorie = {
  "Gemeente Goirle": ["goirle-vijf-bogen", "goirle-kerk", "goirle-molen", "goirle-overzicht"],
  "VvE": ["waker-ochtend", "waker-gevel", "waker-hoek"],
  "De Waker": ["waker-gevel", "waker-hoek", "waker-terras"],
  "Activiteiten": ["activiteiten-spellen", "goirle-molen", "waker-terras"],
  "Veiligheid": ["veiligheid-rookmelder", "waker-gevel"],
  "Omgeving": ["goirle-molen", "goirle-kerk", "goirle-vijf-bogen"],
  "Werkzaamheden": ["goirle-vijf-bogen", "goirle-overzicht", "waker-gevel"]
};
export function kiesNieuwsFoto(bericht) {
  const keuzes = perCategorie[bericht.categorie] || ["waker-hoek", "waker-gevel"];
  const zelfdeCategorie = NIEUWSBERICHTEN.filter(item => item.categorie === bericht.categorie);
  const index = Math.max(0, zelfdeCategorie.findIndex(item => item.id === bericht.id));
  let sleutel = bericht.fotoSleutel || keuzes[index % keuzes.length];
  // Een bericht over rookmelders krijgt altijd een rookmelderfoto.
  if (!bericht.fotoSleutel && bericht.categorie === "Veiligheid" && /rookmelder|brandveilig/i.test(bericht.titel)) sleutel = "veiligheid-rookmelder";
  const foto = extern[sleutel] || eigen[sleutel] || eigen["waker-hoek"];
  return { ...foto, pasvorm: sleutel === "veiligheid-rookmelder" ? "contain" : "cover", src: basis + (extern[sleutel] ? "nieuws/" : "") + foto.bestand };
}

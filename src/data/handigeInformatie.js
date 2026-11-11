/* Telefoonnummers en links op de pagina "Handige informatie".
   nadruk: true  = rode tegel (bijv. 112)
   actie: "contact" = toont knop naar de contactpagina
   url: "..."   = waarde wordt een externe link */

// Handige informatie / contacttegels. Vul ontbrekende gegevens aan
// waar "[CONTACTGEGEVENS NOG INVULLEN]" staat.
export const HANDIGE_INFORMATIE = [
  { titel: "Levensbedreigende noodsituatie", icon: "alert", waarde: "112", nadruk: true, toelichting: "Bel altijd 112 bij brand, ernstig letsel of direct gevaar." },
  { titel: "Politie (geen spoed)", icon: "shield", waarde: "0900 - 8844", toelichting: "Voor meldingen die geen directe spoed hebben." },
  { titel: "Brandweer (geen spoed)", icon: "flame", waarde: "[CONTACTGEGEVENS NOG INVULLEN]", toelichting: "Bij een acuut gevaar altijd 112 bellen." },
  { titel: "Huisartsenpost (avond/nacht/weekend)", icon: "plus", waarde: "[CONTACTGEGEVENS NOG INVULLEN]", toelichting: "Buiten reguliere openingstijden van de huisarts." },
  { titel: "Apotheek", icon: "plus", waarde: "[CONTACTGEGEVENS NOG INVULLEN]", toelichting: "" },
  { titel: "Energie- of gasstoring", icon: "bolt", waarde: "[CONTACTGEGEVENS NOG INVULLEN]", toelichting: "Netbeheerder van uw regio." },
  { titel: "Waterstoring", icon: "bolt", waarde: "[CONTACTGEGEVENS NOG INVULLEN]", toelichting: "" },
  { titel: "Internet- of telefoonstoring", icon: "wifi", waarde: "[CONTACTGEGEVENS NOG INVULLEN]", toelichting: "Neem contact op met uw eigen provider." },
  { titel: "Storing melden in het gebouw", icon: "building", waarde: "Via het VvE-bestuur", toelichting: "Gebruik de contactpagina om een storing te melden.", actie: "contact" },
  { titel: "Taxidiensten", icon: "car", waarde: "[CONTACTGEGEVENS NOG INVULLEN]", toelichting: "" },
  { titel: "Gemeente Goirle", icon: "building", waarde: "www.goirle.nl", toelichting: "Voor meldingen openbare ruimte en gemeentelijke zaken.", url: "https://www.goirle.nl" },
  { titel: "Openbaar vervoer", icon: "bus", waarde: "www.9292.nl", toelichting: "Landelijke reisplanner voor bus en trein.", url: "https://www.9292.nl" },
];

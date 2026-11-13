// Inhoud voor de pagina Goirle en omgeving.
// Bijgewerkt op 13 november 2026.
// Controleer actuele tijden en aanbod bij de organisatie zelf.

const tip = (naam, omschrijving, url = null) => ({
  naam,
  omschrijving,
  url
});

export const GOIRLE_CATEGORIEEN = [
  {
    id: "cultuur",
    titel: "Cultuur",
    icon: "building",
    items: [
      tip(
        "Cultureel Centrum Jan van Besouw",
        "Theater, muziek en andere culturele activiteiten in het centrum van Goirle. Bekijk het actuele programma bij Jan van Besouw.",
        "https://janvanbesouw.nl/"
      )
    ]
  },

  {
    id: "wandelen",
    titel: "Wandelroutes",
    icon: "mappin",
    items: [
      tip(
        "Brabants Landschap",
        "Ontdek wandelroutes door de natuur rond Goirle, zoals de Regte Heide en de Kempische landgoederen. Bekijk de routekaarten en toegangsregels bij Brabants Landschap.",
        "https://www.brabantslandschap.nl/routes"
      ),
      tip(
        "Wandelroute Gorp de Leij",
        "Een wandelroute van Brabants Landschap in het buitengebied van Goirle. Open de wandelfolder voor de routekaart en het startpunt.",
        "https://ontdekdenatuur.brabantslandschap.nl/assets/Uploads/poi/pdf/De-Kempen/Wandelfolder-Gorp-de-Leij.pdf"
      )
    ]
  },

  {
    id: "fietsen",
    titel: "Fietsroutes en onderweg stoppen",
    icon: "bike",
    items: [
      tip(
        "Goirle op zijn mooist — circa 33 km",
        "Een afwisselende fietsroute door Goirle, Hilvarenbeek en Roovert, met natuur en dorpen onderweg.",
        "https://www.fietsnetwerk.nl/fietsroutes/zoeken/goirle/"
      ),
      tip(
        "Over de grens met België — circa 42 km",
        "De gelinkte route wordt aangeboden als 42 km. U fietst via het gebied bij de Rovertse Leij, Poppel en Baarle-Nassau/Baarle-Hertog. Neem een geldig identiteitsbewijs mee.",
        "https://fietsroutenetwerk.nl/fietsroutes/fietsroute-vanaf-goirle-over-de-grens-met-belgie"
      ),
      tip(
        "Van Gogh fietsroute Tilburg — circa 49 km",
        "Een langere tocht langs Tilburg, Goirle en Alphen, met aandacht voor Vincent van Gogh. Afstanden kunnen per routevariant verschillen.",
        "https://www.fietsnetwerk.nl/knooppunt/kosthuis-sint-annaplein-vincent-van-gogh-tilburg/"
      ),
      tip(
        "Bels Lijntje",
        "Fietsen over de voormalige spoorverbinding tussen Tilburg en Turnhout. Kies via de routeplanner een passend traject over het bekende fietspad.",
        "https://visitgoirle.com/fietsroutes/"
      ),
      tip(
        "Zelf een fietsroute plannen",
        "Bekijk routes rond Goirle en plan een tocht via fietsknooppunten bij Fietsnetwerk.",
        "https://www.fietsnetwerk.nl/fietsroutes/zoeken/goirle/"
      ),
      tip(
        "RouteYou Goirle",
        "Ontdek aanvullende fietsroutes en knooppuntenroutes. Controleer de afstand, ondergrond en het startpunt voordat u vertrekt.",
        "https://www.routeyou.com/nl-nl/location/routes/47305968?characteristic=43&route-type=1"
      ),
      tip(
        "Natuurpoort Roovertsche Leij",
        "Een start- of pauzeplek in het buitengebied van Goirle. Raadpleeg de website voor horeca, bereikbaarheid en actuele openingstijden.",
        "https://www.roovertscheleij.nl/"
      ),
      tip(
        "Goolse Geheimen",
        "Ontdek Goirle via lokale verhalen en routes langs historische plekken, zoals de Sint-Janskerk en de voormalige trambaan.",
        "https://www.goolsegeheimen.nl/"
      )
    ]
  },

  {
    id: "horeca",
    titel: "Horeca",
    icon: "cup",
    items: [
      tip(
        "Horeca in het centrum van Goirle",
        "Het centrum biedt diverse cafés en restaurants op loopafstand van De Waker."
      )
    ]
  },

  {
    id: "winkels",
    titel: "Winkels en weekmarkt",
    icon: "bag",
    items: [
      tip(
        "Winkelen in Goirle",
        "Dagelijkse boodschappen en winkels zijn te voet bereikbaar vanuit De Waker."
      ),
      tip(
        "Weekmarkt Goirle — donderdagmorgen",
        "Elke donderdagmorgen op het Kloosterplein in het centrum. Reken op 09.00–12.00 uur; Centrum Goirle vermeldt een start om 08.00 uur. U vindt er onder meer groenten, fruit, vis, vlees, kip, kaas, noten en zuivel. Controleer actuele tijden en eventuele verplaatsingen bij de organisatie.",
        "https://centrumgoirle.nl/openingstijden/"
      )
    ]
  },

  {
    id: "sport",
    titel: "Sporten en bewegen",
    icon: "activity",
    items: [
      tip(
        "Club Pellikaan Goirle",
        "All-in-one sportclub met fitness, zwembad, wellness, tennis, padel, groepslessen en kinderactiviteiten. Bekijk het actuele aanbod, waaronder Reformer Pilates en yoga.",
        "https://clubpellikaan.nl/club-goirle"
      ),
      tip(
        "Sportcentrum Jan de Rooy",
        "Sportcentrum met groepslessen, fitness, de Milon Cirkel (Fit in '35), functionele training via Funxtion en persoonlijke begeleiding.",
        "https://janderooy.nl/"
      ),
      tip(
        "Anytime Fitness Goirle",
        "24/7 fitness met persoonlijke begeleiding en toegang tot clubs binnen het Anytime-netwerk. Vraag de club naar de voorwaarden.",
        "https://afgoirle.nl/"
      ),
      tip(
        "Next Fit Goirle",
        "Fitness met cardio- en krachtapparatuur, een functionele zone en circuittraining. Bekijk de actuele abonnementsvoorwaarden op de website.",
        "https://nextfit.nl/"
      ),
      tip(
        "Go! Health Clubs Goirle",
        "Circuittraining van 30 minuten, begeleiding en een aparte Reformer Pilates-studio. Bekijk het actuele lesaanbod bij de club.",
        "https://gohealthclubs.nl/locaties/goirle/"
      ),
      tip(
        "Go2B-fit",
        "Personal trainingsstudio voor korte, doelgerichte trainingen met persoonlijke begeleiding, aan de Tilburgseweg 1a.",
        "https://go2b-fit.nl/"
      ),
      tip(
        "Quality Sportcentre",
        "Groepslessen zoals BodyPump, spinning en yoga, plus boksen en Jiu Jitsu. Raadpleeg het actuele rooster.",
        "https://www.qualitysportcentre.nl/groepslessen/goirle"
      ),
      tip(
        "Fit4lady Goirle",
        "Fitness voor vrouwen met een training van 30 minuten, kracht- en conditieoefeningen en persoonlijke coaching.",
        "https://fit4lady.nl/clubs/goirle"
      ),
      tip(
        "Loods-Zwaar",
        "Training gericht op kracht, conditie en leefstijl, met persoonlijke begeleiding. Informeer naar individuele training, groepstraining en eventuele sportgerichte programma's.",
        "https://loods-zwaar.nl/"
      ),
      tip(
        "Fit-Bokx",
        "Bokstraining, bootcamps, groepslessen en personal training in Goirle en omgeving. Bekijk de actuele locaties en trainingstijden.",
        "https://fit-bokx.nl/"
      )
    ]
  },

  {
    id: "zorg",
    titel: "Zorg en welzijn",
    icon: "plus",
    items: [
      tip(
        "Dorpsteam Goirle",
        "Een aanspreekpunt voor vragen over hulp, welzijn en ondersteuning in de gemeente Goirle.",
        "https://www.goirle.nl/hulp-en-ondersteuning"
      ),
      tip(
        "Wmo — zelfstandig thuis blijven wonen",
        "Informatie over ondersteuning zoals huishoudelijke hulp, begeleiding, vervoer en woningaanpassingen. De gemeente bespreekt welke ondersteuning passend is.",
        "https://www.goirle.nl/hulp-en-ondersteuning"
      ),
      tip(
        "ContourdeTwern Goirle",
        "Welzijnswerk, vrijwilligerswerk, ontmoeting en sociaal werk in de buurt. Informeer naar het actuele aanbod en de contactmogelijkheden voor Goirle en Riel.",
        "https://www.contourdetwern.nl/"
      ),
      tip(
        "Thebe Guldenakker",
        "Woonzorgcentrum aan de Wittendijk 2 in Goirle, met zorg en welzijnsactiviteiten. Bekijk de mogelijkheden voor wonen en ondersteuning bij Thebe.",
        "https://www.thebe.nl/wonen-bij-thebe/woonzorgcentra/thebe-guldenakker/"
      ),
      tip(
        "Thebe Elisabeth",
        "Woonzorglocatie aan de Bergstraat 6 in Goirle. Informeer bij Thebe naar de aangeboden zorg, verpleging en begeleiding.",
        "https://www.thebe.nl/wonen-bij-thebe/woonzorgcentra/thebe-elisabeth/"
      ),
      tip(
        "Actief Zorg",
        "Thuiszorg in Goirle en Riel, met onder meer persoonlijke verzorging, verpleging, begeleiding en huishoudelijke ondersteuning.",
        "https://www.actiefzorg.nl/thuiszorg/goirle"
      ),
      tip(
        "Ouderinitiatief Wonen in Goirle — WIG",
        "Een ouderinitiatief voor wonen met begeleiding en zorg voor mensen met een beperking. Bekijk de actuele informatie rechtstreeks bij de organisatie.",
        "https://woneningoirle.nl/"
      ),
      tip(
        "Platform Gezondheid en Welzijn Goirle",
        "Ondersteunt lokale burgerinitiatieven op het gebied van gezondheid en welzijn, met bijzondere aandacht voor kwetsbare groepen.",
        "https://pgwg.nl/"
      ),
      tip(
        "Sterk Huis",
        "Hulp bij complexe gezinssituaties, opvoedvragen, huiselijk geweld en andere hulpvragen. Gevestigd aan de Rillaersebaan 75 in Goirle.",
        "https://www.sterkhuis.nl/"
      )
    ]
  },

  {
    id: "ov",
    titel: "Openbaar vervoer",
    icon: "bus",
    items: [
      tip(
        "Reisplanner 9292",
        "Het openbaar vervoer in Goirle bestaat vooral uit busverbindingen van Arriva. Plan uw reis met de actuele vertrektijden, haltes en omleidingen via 9292.",
        "https://9292.nl/"
      ),
      tip(
        "Arriva reisplanner",
        "Bekijk actuele verbindingen, dienstregelingen en reisinformatie rechtstreeks bij de vervoerder.",
        "https://www.arriva.nl/plan-je-reis/reisplanner/"
      ),
      tip(
        "Moovit Goirle",
        "Een aanvullende gids voor busverbindingen en haltes in Goirle. Controleer de actuele rit altijd bij de vervoerder of via 9292.",
        "https://moovitapp.com/index/nl/openbaar_vervoer-Goirle-Netherlands-city_1647-101"
      ),
      tip(
        "Nieuw busnetwerk vanaf 13 december 2026",
        "Vanaf 13 december 2026 verandert het busnetwerk. Goirle krijgt een snelle HOV-verbinding via Stappegoor met Tilburg. Op de nieuwe lijn worden elektrische bussen van 18 meter ingezet. Controleer de dienstregeling voor uw reisdatum.",
        "https://bravo.info/vernieuwd-busnetwerk-tilburg"
      ),
      tip(
        "Nieuwe lijnnummers: 137 wordt 344, 2 wordt 1",
        "Volgens de gemeentelijke aankondiging wordt lijn 137 tussen Tilburg, Goirle, Riel en Baarle-Nassau lijn 344, met extra vroege ritten en een latere laatste rit. De huidige lijn 2 wordt vervangen door lijn 1 via Stappegoor, die vaker gaat rijden.",
        "https://www.goirle.nl/nieuwsoverzicht/nieuwsbericht/artikel/beter-openbaar-vervoer-in-onze-gemeente"
      ),
      tip(
        "Aanpassing van bushaltes",
        "In 2026 worden haltes vernieuwd, verlengd, toegevoegd of verplaatst, onder meer aan Wittendijk, Rillaersebaan, Kempenlaan, Van Haestrechtstraat, Venneweg, Nieuwe Rielseweg, Abcovenseweg en Bacseweg. De werkzaamheden verlopen in fases; niet alle genoemde locaties zijn tegelijk in uitvoering.",
        "https://www.goirle.nl/projecten-openbare-ruimte/hov"
      )
    ]
  },

  {
    id: "gemeente",
    titel: "Gemeentelijke informatie",
    icon: "building",
    items: [
      tip(
        "Gemeente Goirle",
        "Voor vergunningen, meldingen en actuele gemeentelijke informatie.",
        "https://www.goirle.nl/"
      )
    ]
  }
];
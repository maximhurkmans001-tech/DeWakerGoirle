# De Waker — Samen wonen in Goirle

Website voor bewoners van appartementencomplex De Waker in Goirle.
Gebouwd met React en Vite.

## Starten

Eenmalig (of na het kopiëren naar een andere computer):

```bash
npm install
```

Daarna:

| Opdracht          | Wat het doet                                                      |
| ----------------- | ----------------------------------------------------------------- |
| `npm start`       | Start de site en opent hem in de browser (wijzigingen direct zichtbaar) |
| `npm run dev`     | Zelfde, zonder automatisch de browser te openen                   |
| `npm run build`   | Maakt de definitieve website in de map `dist` (om te publiceren)  |
| `npm run preview` | Bekijk de gebouwde versie uit `dist`                              |

## Waar pas ik wat aan?

| Wat                                   | Bestand                              |
| ------------------------------------- | ------------------------------------ |
| Nieuwsberichten en categorieën        | `src/data/nieuws.js`                 |
| Activiteiten                          | `src/data/activiteiten.js`           |
| Belangrijke mededeling (homepage)     | `src/data/mededeling.js`             |
| E-mailadressen bestuur / commissie    | `src/data/contact.js`                |
| Wonen-onderwerpen, FAQ, afvalschema   | `src/data/wonen.js`                  |
| Tips Goirle en omgeving               | `src/data/goirle.js`                 |
| Telefoonnummers / handige informatie  | `src/data/handigeInformatie.js`      |
| Privacy-teksten en toekomstplannen    | `src/data/privacy.js`                |
| Menu-items                            | `src/data/navigatie.js`              |
| Foto's (bestanden)                    | `public/images/`                     |
| Welke foto waar staat                 | `src/data/afbeeldingen.js`           |
| Overige paginateksten en opmaak       | `src/pages/*.jsx`                    |
| Kleuren, lettertypen, vormgeving      | `src/styles/site.css` (bovenaan)     |

## Mappen

- `src/App.jsx` — navigatie tussen de pagina's
- `src/pages/` — één bestand per pagina
- `src/components/` — header, footer en herbruikbare onderdelen
- `src/data/` — alle inhoud
- `origineel/index.original.html` — kopie van de oude versie (één HTML-bestand)

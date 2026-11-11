# De Waker — Samen wonen in Goirle

Website van appartementencomplex De Waker in Goirle, in twee delen:

- **Openbaar:** een kleine homepage, het inlogscherm en de privacyverklaring (map `public/`).
- **Besloten bewonersgedeelte:** de React-website met nieuws, wonen, activiteiten enzovoort (map `src/`).
  De server levert dit deel pas als de bezoeker is ingelogd met een tijdelijke e-mailcode
  én als actieve bewoner in het bewonersregister staat.

Inloggen en het bewonersregister lopen via Supabase. De website draait op Vercel
(GitHub Pages kan geen inlogcontrole uitvoeren).

## Dagelijks gebruik

Eenmalig: `npm install`

| Opdracht            | Wat het doet |
| ------------------- | ------------ |
| `npm start`         | Opent het bewonersgedeelte lokaal om teksten te bewerken. Wijzigingen zijn direct zichtbaar. Er is geen login nodig, want dit draait alleen op je eigen computer. |
| `npm run dev:login` | De volledige website met inloggen op http://localhost:3000 (vereist een ingevulde `.env.local`) |
| `npm run build`     | Maakt `dist/` (openbaar) en `private/portaal.html` (bewonersgedeelte) en controleert dat er geen bewonersinhoud in `dist/` lekt |
| `npm test`          | Bouwt en test de toegangscontrole |
| `npm run bewoner -- add naam@voorbeeld.nl`    | Bewoner toegang geven |
| `npm run bewoner -- remove naam@voorbeeld.nl` | Toegang intrekken |

## Waar pas ik wat aan?

| Wat                                   | Bestand |
| ------------------------------------- | ------- |
| Nieuwsberichten en categorieën        | `src/data/nieuws.js` |
| Activiteiten                          | `src/data/activiteiten.js` |
| Belangrijke mededeling                | `src/data/mededeling.js` |
| E-mailadressen bestuur / commissie    | `src/data/contact.js` |
| Wonen-onderwerpen, FAQ, afvalschema   | `src/data/wonen.js` |
| Tips Goirle en omgeving               | `src/data/goirle.js` |
| Telefoonnummers / handige informatie  | `src/data/handigeInformatie.js` |
| Privacy-teksten binnen het portaal    | `src/data/privacy.js` |
| Menu-items                            | `src/data/navigatie.js` |
| Pagina's van het bewonersgedeelte     | `src/pages/*.jsx` |
| Opmaak bewonersgedeelte               | `src/styles/site.css` |
| Openbare homepage                     | `public/index.html` (opmaak: `public/site.css`) |
| Inlogscherm                           | `public/login.html` en `public/login.js` |
| Openbare privacyverklaring (concept!) | `public/privacy.html` |
| Foto's                                | `public/images/` (welke foto waar: `src/data/afbeeldingen.js`) |

**Let op:** alles in `public/` is openbaar. Zet daar nooit bewonersinhoud. De foto's van het
gebouw staan er bewust: ze worden ook op de openbare homepage gebruikt.

## Technische opbouw

- `portaal.html` + `src/`: Vite bouwt dit naar één bestand `private/portaal.html`.
- `api/` en `lib/`: serverfuncties voor inloggen (`/api/login`, `/api/verify`), de sessiecontrole
  (`/api/session`), uitloggen (`/api/logout`) en het leveren van het bewonersgedeelte (`/bewoners`).
- `scripts/resident.js`: bewonersbeheer vanaf je eigen computer. Er is bewust geen openbare beheerpagina.
- `supabase/setup.sql`: het afgeschermde bewonersregister.
- `tests/`: tests op de toegangscontrole, met een nagebootste Supabase.

De sessie duurt maximaal één uur. De geopende pagina controleert elke minuut, en zodra het
tabblad weer zichtbaar wordt, of de toegang nog geldig is. Al gelezen informatie kan niet op
afstand worden teruggehaald.

## 1 Supabase instellen

Maak een Supabase-project aan, bij voorkeur in een EU-regio.

1. Voer in de SQL Editor `supabase/setup.sql` uit.
2. Kopieer `.env.example` naar `.env.local` en vul in:
   - `APP_ORIGIN=http://localhost:3000`
   - `SUPABASE_URL` = project-URL
   - `SUPABASE_ANON_KEY` en `SUPABASE_SERVICE_ROLE_KEY` = de *legacy* JWT-sleutels `anon` en `service_role`
3. Zet onder Authentication de openbare registratie (nieuwe gebruikers aanmelden) **uit**. E-mailinloggen blijft aan.
4. Pas Authentication → Email Templates → **Magic Link** aan zodat de e-mail de code toont:
   ```html
   <h2>Uw inlogcode voor De Waker</h2>
   <p>Vul deze tijdelijke code in op de website:</p>
   <p style="font-size:30px;font-weight:bold;letter-spacing:5px">{{ .Token }}</p>
   <p>Heeft u geen code aangevraagd? Dan kunt u deze e-mail negeren.</p>
   ```
5. Stel eigen SMTP in voor echte bewoners. De ingebouwde testmailer is daar niet voor bedoeld.
6. Zet de vervaltijd van de code op bijvoorbeeld 10 minuten en laat de rate limits aan.

De `service_role`-sleutel geeft volledige toegang tot het register. Zet hem alleen in `.env.local`
(staat in `.gitignore`) en in de beveiligde Environment Variables van Vercel, nooit in GitHub.

## 2 Bewoners beheren

```bash
npm run bewoner -- add naam@voorbeeld.nl      # toegang geven (stuurt zelf geen e-mail)
npm run bewoner -- remove naam@voorbeeld.nl   # toegang intrekken
```

Bij een nieuw e-mailadres trek je eerst het oude adres in en voeg je daarna het nieuwe toe.

## 3 Publiceren bij Vercel

1. Importeer deze repository in Vercel. Framework Preset: **Other**, Build Command `npm run build`,
   Output Directory `dist` (staat ook in `vercel.json`).
2. Voeg onder Settings → Environment Variables de vier waarden toe. Voor productie is `APP_ORIGIN`
   precies `https://dewakergoirle.com` (zonder slash). Een preview krijgt een eigen `APP_ORIGIN`.
3. Zet in Supabase de productie-URL als Site URL.
4. Deploy opnieuw en loop de controlelijst hieronder af op de preview.
5. Pas daarna het domein om (zie "Overstappen van GitHub Pages").

## 4 Controle vóór ingebruikname

- Homepage zichtbaar in een privévenster. `/bewoners` en `/api/portal` sturen zonder sessie door naar `/inloggen`.
- `/private/portaal.html`, `/portaal.html` en `/.env.local` geven geen bestand.
- Een bekend adres krijgt een code en kan inloggen. Een onbekend adres krijgt dezelfde melding, maar geen code.
- Een verkeerde of verlopen code geeft geen toegang.
- Alle pagina's, nieuwsfilters, pop-ups, het mobiele menu en uitloggen werken.
- Na `remove` gaat een geopende pagina bij de volgende controle naar het inlogscherm.
- Vervang de voorbeeldinhoud en maak de conceptprivacyverklaring af.

## Overstappen van GitHub Pages

De huidige site op dewakergoirle.com draait op GitHub Pages en is volledig openbaar. Na de
overstap moet je:

1. In Vercel het domein `dewakergoirle.com` toevoegen en de DNS-records bij je domeinprovider
   aanpassen zoals Vercel aangeeft.
2. GitHub Pages uitschakelen bij `de-waker-goirle` en bij `de-waker-samen-wonen`. Anders blijven
   de oude, openbare versies bereikbaar via `*.github.io`.
3. Beide GitHub-repositories op **private** zetten. Ze bevatten de volledige inhoud van het
   bewonersgedeelte, en `origineel/index.original.html` is een complete kopie van de oude site.

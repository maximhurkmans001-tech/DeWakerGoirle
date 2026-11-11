import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ToegangsBalk from "./components/ToegangsBalk.jsx";
import Home from "./pages/Home.jsx";
import Nieuws from "./pages/Nieuws.jsx";
import Wonen from "./pages/Wonen.jsx";
import Activiteiten from "./pages/Activiteiten.jsx";
import Goirle from "./pages/Goirle.jsx";
import HandigeInformatie from "./pages/HandigeInformatie.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";

/* Navigatie tussen pagina's.
   goTo("nieuws") opent een pagina; goTo("nieuws", "Werkzaamheden")
   opent het nieuws meteen met dat filter actief.
   Nieuwe pagina? Maak een bestand in src/pages, voeg het hieronder toe
   en zet een menu-item in src/data/navigatie.js. */
const PAGINAS = {
  home: Home,
  nieuws: Nieuws,
  wonen: Wonen,
  activiteiten: Activiteiten,
  goirle: Goirle,
  info: HandigeInformatie,
  contact: Contact,
  privacy: Privacy,
};

export default function App() {
  const [page, setPage] = useState("home");
  const [newsFilter, setNewsFilter] = useState(null);

  function goTo(target, filter) {
    setPage(target);
    setNewsFilter(filter || null);
  }

  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  const Pagina = PAGINAS[page] || Home;

  return (
    <>
      <a href="#hoofdinhoud" className="skip-link">Ga naar hoofdinhoud</a>
      <ToegangsBalk />
      <Header page={page} goTo={goTo} />
      <main id="hoofdinhoud">
        <Pagina goTo={goTo} initialFilter={newsFilter} />
      </main>
      <Footer goTo={goTo} />
    </>
  );
}

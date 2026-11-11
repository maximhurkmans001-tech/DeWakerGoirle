import { useState } from "react";
import Icon from "./Icon.jsx";
import { IMG } from "../data/afbeeldingen.js";
import { NAV_ITEMS } from "../data/navigatie.js";

// Kopregel met logo, hoofdmenu en (op kleine schermen) de menuknop.
export default function Header({ page, goTo }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="wrap site-header__row">
        <a href="#" className="brand" onClick={(e) => { e.preventDefault(); goTo("home"); }}>
          <img className="brand__mark" src={IMG.logo} alt="Logo van De Waker" />
          <span className="brand__text">
            <span className="brand__title">De Waker</span>
            <span className="brand__sub">Samen wonen in Goirle</span>
          </span>
        </a>
        <nav className="primary-nav" aria-label="Hoofdnavigatie">
          {NAV_ITEMS.map((item) => (
            <button key={item.id} aria-current={page === item.id ? "page" : undefined}
                    onClick={() => goTo(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>
        <button className="nav-toggle" aria-label={open ? "Menu sluiten" : "Menu openen"} aria-expanded={open}
                onClick={() => setOpen((o) => !o)}>
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>
      </div>
      <nav className={"mobile-nav wrap " + (open ? "open" : "")} aria-label="Mobiel menu">
        {NAV_ITEMS.map((item) => (
          <button key={item.id} aria-current={page === item.id ? "page" : undefined}
                  onClick={() => { goTo(item.id); setOpen(false); }}>
            <Icon name={item.icon} size={19} />{item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

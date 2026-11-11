import Icon from "./Icon.jsx";

// Tegel voor de "Snelle links" op de homepage: interne knop of externe link.
export default function SnelLink({ icon, label, onClick, href, external }) {
  const inner = (<><span className="icon-badge"><Icon name={icon} /></span><span className="label">{label}</span></>);
  if (href) {
    return <a className="quicklink" href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{inner}</a>;
  }
  return <button className="quicklink" onClick={onClick}>{inner}</button>;
}

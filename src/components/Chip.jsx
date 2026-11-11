// Gekleurd label met de categorie (kleur per categorie staat in site.css).
export default function Chip({ children }) {
  return <span className="chip" data-cat={children}>{children}</span>;
}

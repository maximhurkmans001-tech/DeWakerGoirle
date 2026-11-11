import Icon from "./Icon.jsx";

// Externe link: opent in een nieuw tabblad en toont een pijltje.
export default function ExternalA({ href, children }) {
  return (
    <a className="ext" href={href} target="_blank" rel="noopener noreferrer">
      {children}<Icon name="external" size={13} />
    </a>
  );
}

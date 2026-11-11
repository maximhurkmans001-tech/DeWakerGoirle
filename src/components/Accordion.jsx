import { useState } from "react";
import Icon from "./Icon.jsx";

// Uitklaplijst: één onderdeel tegelijk open.
export default function Accordion({ items, renderTitle, renderBody }) {
  const [openId, setOpenId] = useState(null);
  return (
    <div>
      {items.map((item, i) => {
        const id = item.id || i;
        const expanded = openId === id;
        return (
          <div className="accordion-item" key={id}>
            <button className="accordion-trigger" aria-expanded={expanded} onClick={() => setOpenId(expanded ? null : id)}>
              {item.icon && <span className="icon-badge"><Icon name={item.icon} /></span>}
              <h3>{renderTitle(item)}</h3>
              <span className="chev"><Icon name="chevronDown" size={20} /></span>
            </button>
            {expanded && <div className="accordion-panel">{renderBody(item)}</div>}
          </div>
        );
      })}
    </div>
  );
}

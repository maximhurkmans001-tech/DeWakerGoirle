import { ICON_PATHS } from "../data/iconen.js";

export default function Icon({ name, size = 20, strokeWidth = 1.8, style }) {
  const paths = ICON_PATHS[name] || ICON_PATHS.info;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style} aria-hidden="true">
      {paths.map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}

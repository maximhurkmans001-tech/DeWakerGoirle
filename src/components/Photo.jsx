import Icon from "./Icon.jsx";

// Foto met optioneel label. Zonder "src" wordt een sierlijke placeholder getoond.
export default function Photo({ label, className = "", tall, src, alt, style: styleProp }) {
  const style = { ...(tall ? { minHeight: 320 } : undefined), ...styleProp };
  if (src) {
    return (
      <div className={"photo photo--real " + className} style={style}>
        <img src={src} alt={alt || label} />
        {label && <span className="photo__label photo__label--onphoto"><Icon name="mappin" size={15} />{label}</span>}
      </div>
    );
  }
  return (
    <div className={"photo " + className} style={style}>
      <span className="photo__label"><Icon name="mappin" size={15} />{label}</span>
    </div>
  );
}

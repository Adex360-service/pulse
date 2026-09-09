export default function LogoMarquee({ logos, wrapperClassName = "", trackClassName = "", groupClassName = "", imageClassName = "" }) {
  return <div className={wrapperClassName}><div className={trackClassName}>{[0, 1].map((copy) => <div key={copy} aria-hidden={copy === 1} className={groupClassName}>{logos.map(([name, image]) => <img key={`${copy}-${name}`} src={image} alt={copy ? "" : name} className={imageClassName} />)}</div>)}</div></div>;
}

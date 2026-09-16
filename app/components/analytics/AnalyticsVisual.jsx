import Image from "next/image";
import assets from "../../content/analyticsAssets.json";

export default function AnalyticsVisual({
  asset,
  alt,
  className = "h-auto object-contain",
  priority = false,
  fill = false,
  sizes = "(max-width: 700px) 100vw, 60vw",
}) {
  const src = assets[Object.keys(assets).find(key => key.startsWith(asset))];
  const [, width, height] = src.match(/-(\d+)x(\d+)\./) || [null, 1200, 800];
  const dimensions = fill ? { fill: true } : { width: Number(width), height: Number(height) };

  return (
    <Image
      src={src}
      alt={alt}
      {...dimensions}
      sizes={sizes}
      priority={priority}
      className={`block w-full ${className}`}
    />
  );
}

import Image from "next/image";

export default function BlogImage({ src, alt = "", priority = false, category = false, sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px" }) {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-[#f7f5fa] ${category ? "aspect-[4/3]" : "aspect-video"}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}

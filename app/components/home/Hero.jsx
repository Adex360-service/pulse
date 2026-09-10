import { heroContent } from "@/app/content/home";
import Link from "next/link";
import LiquidButtonLayers from "../ui/LiquidButtonLayers";

export default function Hero({ logos }) {
  const { badge, heading, cta, trustedText } = heroContent;
  return (
    <>
      <section className="relative grid min-h-[calc(100vh-200px)] place-items-center overflow-hidden text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/images/cougar-brand-video.mp4"
            type="video/webm"
          />
          <source
            src="/images/cougar-brand-video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(#2d111663,#2d11167a)] bg-[#4b1f1830]" />
        <div className="relative z-[2] flex flex-col items-center text-center">
          <div className="flex items-center rounded-full border border-white bg-[#ffffff2c] px-3 py-[7px] text-[10px]">
            {badge.reviewCount} &nbsp;{badge.rating} <b className="text-[15px] text-[#ffda58]">★</b>&nbsp;
            {badge.text}&nbsp;
            <span
              className="mr-1 inline-block size-[18px] shrink-0 bg-contain bg-center bg-no-repeat"
              role="img"
              aria-label={badge.platform}
              style={{
                backgroundImage:
                  `url("${badge.platformIcon}")`,
              }}
            />
            <strong className="text-sm italic">{badge.platform}</strong>
          </div>
          <h1 className="my-10 mb-[72px] max-w-[850px] text-[68px] leading-[.99] font-semibold md:tracking-[-4px] max-md:text-[48px] max-sm:my-8 max-sm:text-[38px]">
            {heading.lines.map((line, i) => (
              <span key={line}>
                {line}
                {i < heading.lines.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <Link
            className="loop-liquid-button inline-flex items-center justify-center gap-3.5 bg-[linear-gradient(100deg,#8d43ff,#315be7)] px-[23px] py-4 text-[15px] font-semibold text-white"
            href="#contact"
          >
            <span>{cta.text}</span> <span>→</span><LiquidButtonLayers />
          </Link>
        </div>
      </section>
      <section className="bg-[#6f12ff] px-[3.5%] pt-[27px] pb-7 text-center text-white max-sm:px-8 max-sm:py-10">
        <p className="mb-[29px] text-sm text-[#d7bdff] max-sm:hidden">
          {trustedText}
        </p>
       <div className="overflow-hidden">
      <div className="animate-marquee flex w-max items-center gap-12">
        {[...logos, ...logos].map(([name, image], i) => (
          <span
            className="block h-12 w-[145px] shrink-0 bg-contain bg-center bg-no-repeat max-sm:h-[54px] max-sm:w-[120px]"
            key={`${name}-${i}`}
            role="img"
            aria-label={name}
            style={{ backgroundImage: `url("${image}")` }}
          />
        ))}
      </div>
    </div>
      </section>
    </>
  );
}

export default function Hero({ logos }) {
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
            src="https://res.cloudinary.com/dfzgt5gjg/video/upload/f_webm,q_70,w_1280/v1780318711/Loop-hero-Video-New_qs6lut_rao1by.webm"
            type="video/webm"
          />
          <source
            src="https://res.cloudinary.com/dfzgt5gjg/video/upload/v1780318711/Loop-hero-Video-New_qs6lut_rao1by.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(#2d111663,#2d11167a)] bg-[#4b1f1830]" />
        <div className="relative z-[2] flex flex-col items-center text-center">
          <div className="flex items-center rounded-full border border-white bg-[#ffffff2c] px-3 py-[7px] text-[10px]">
            650+ &nbsp;5.0 <b className="text-[15px] text-[#ffda58]">★</b>&nbsp;
            reviews on&nbsp;
            <span
              className="mr-1 inline-block size-[18px] shrink-0 bg-contain bg-center bg-no-repeat"
              role="img"
              aria-label="Shopify"
              style={{
                backgroundImage:
                  'url("https://cdn.prod.website-files.com/625e799b877c107387cdf3ac/69e726a5e97190601cfcdc86_shopify-icon.avif")',
              }}
            />
            <strong className="text-sm italic">shopify app store</strong>
          </div>
          <h1 className="my-10 mb-[72px] max-w-[850px] text-[68px] leading-[.99] font-semibold md:tracking-[-4px] max-md:text-[48px] max-sm:my-8 max-sm:text-[38px]">
            The last
            <br />
            subscription platform
            <br />
            you&apos;ll ever need.
          </h1>
          <a
            className="inline-flex items-center justify-center gap-3.5 bg-[linear-gradient(100deg,#8d43ff,#315be7)] px-[23px] py-4 text-[15px] font-semibold text-white"
            href="#contact"
          >
            Book your consultation call <span>→</span>
          </a>
        </div>
      </section>
      <section className="bg-[#6f12ff] px-[3.5%] pt-[27px] pb-7 text-center text-white max-sm:px-8 max-sm:py-10">
        <p className="mb-[29px] text-sm text-[#d7bdff] max-sm:hidden">
          Trusted by 2400+ Shopify subscription brands
        </p>
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 overflow-hidden max-sm:grid max-sm:grid-cols-2 max-sm:gap-x-10 max-sm:gap-y-9 max-sm:overflow-visible">
          {logos.map(([name, image]) => (
            <span
              className="block h-12 w-[145px] basis-[145px] bg-contain bg-center bg-no-repeat max-sm:h-[54px] max-sm:w-full max-sm:basis-auto"
              key={name}
              role="img"
              aria-label={name}
              style={{ backgroundImage: `url("${image}")` }}
            />
          ))}
        </div>
      </section>
    </>
  );
}

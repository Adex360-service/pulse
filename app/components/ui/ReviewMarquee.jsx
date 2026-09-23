export default function ReviewMarquee({ reviews = [] }) {
  if (!reviews.length) return null;

  return (
    <section className="overflow-hidden border-b border-[#eee] bg-white py-[38px] hover:[&>div]:[animation-play-state:paused]">
      <div className="flex w-max gap-6 animate-[reviewMarquee_55s_linear_infinite]">
        {reviews.concat(reviews).map(([brand, meta, quote, image], index) => (
          <article
            className="grid h-[195px] w-[620px] grid-cols-[56%_44%] overflow-hidden rounded-lg border border-[#eadfda] bg-white max-sm:h-[150px] max-sm:w-[340px] max-sm:grid-cols-[62%_38%]"
            key={`${brand}-${index}`}
          >
            <div className="px-6 py-[30px] max-sm:p-[18px]">
              <b className="text-base text-[#7726d9]">{brand}</b>
              <small className="mt-3.5 block text-[10px] text-[#555] uppercase">
                {meta}
              </small>
              <p className="mt-5 font-[family-name:var(--font-fraunces)] text-xl leading-[1.25] italic text-[#3b197f] max-sm:text-sm">
                “{quote}”
              </p>
            </div>
            <span
              className="block bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url("${image}")`,
                clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            />
          </article>
        ))}
      </div>
    </section>
  );
}

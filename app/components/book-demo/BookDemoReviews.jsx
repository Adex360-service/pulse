import Link from "next/link";
import Container from "../ui/Container";

export default function BookDemoReviews({ reviews }) {
  return (
    <section className="bg-[#fbfafc] py-24 max-sm:py-16">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-[family-name:var(--font-display)] text-[52px] text-[#2b1265] max-sm:text-[39px]">
            Reviews
          </h2>
          <Link
            href="/reviews"
            className="text-sm font-semibold text-[#7627d7]"
          >
            View all →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {reviews.map((review) => (
            <article
              key={review.logo}
              className="rounded-xl border border-[#eeeaf0] bg-white p-7"
            >
              <img
                src={review.logo}
                alt=""
                className="h-16 w-[160px] object-contain object-left"
              />
              <div
                className="mt-5 border-t border-[#ece8ed] pt-7 tracking-[4px] text-[#ffb800]"
                aria-label="5 stars"
              >
                ★★★★★
              </div>
              <p className="mt-6 text-[18px] leading-[1.75] font-semibold text-[#686373]">
                {review.quote}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

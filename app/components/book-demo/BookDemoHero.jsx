import Container from "../ui/Container";
import { demoLogos } from "../../content/bookDemo";

export default function BookDemoHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#cceaff_0%,#eef7ff_48%,#e3c7ff_100%)] py-16 max-md:py-12">
      <div className="pointer-events-none absolute left-[30%] top-24 h-52 w-80 rounded-full bg-white/35 blur-3xl" />
      <div className="pointer-events-none absolute left-[42%] top-16 h-32 w-52 rounded-full bg-white/55 blur-2xl" />
      <Container>
        <div className="grid grid-cols-[0.95fr_1.05fr] items-center gap-24 max-lg:grid-cols-1 max-lg:gap-12">
          <div>
            <h1 className="max-w-[580px] font-[family-name:var(--font-display)] text-[64px] leading-[1.08] text-[#2d155f] max-sm:text-[44px]">Transform your subscription business</h1>
            <p className="mt-10 max-w-[600px] text-xl leading-[1.45] text-[#6a6768] max-sm:mt-6 max-sm:text-lg">Loop helps brands increase retention, boost revenue, and create flexible subscription experiences that customers love.</p>
          </div>
          <form className="rounded-[24px] border-2 border-white bg-white/20 p-7 shadow-[0_14px_40px_#6e52a512] backdrop-blur-[2px] max-sm:p-5">
            <h2 className="mb-6 font-[family-name:var(--font-display)] text-[30px] text-[#262226]">Book your demo</h2>
            <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1 max-sm:gap-3">
              <input className="h-12 rounded-lg border border-[#dedede] bg-white px-4 outline-none focus:border-[#8b43fd]" placeholder="Name*" required />
              <input className="h-12 rounded-lg border border-[#dedede] bg-white px-4 outline-none focus:border-[#8b43fd]" type="email" placeholder="Email*" required />
              <input className="h-12 rounded-lg border border-[#dedede] bg-white px-4 outline-none focus:border-[#8b43fd]" placeholder="Store URL*" required />
              <input className="h-12 rounded-lg border border-[#dedede] bg-white px-4 outline-none focus:border-[#8b43fd]" type="tel" placeholder="Phone*" required />
            </div>
            <textarea className="mt-5 min-h-24 w-full rounded-lg border border-[#dedede] bg-white p-4 outline-none focus:border-[#8b43fd]" maxLength={550} placeholder="Message (max 100 words)" />
            <select defaultValue="" className="mt-5 h-12 w-full rounded-lg border border-[#dedede] bg-white px-4 text-[#666] outline-none focus:border-[#8b43fd]">
              <option value="" disabled>How did you hear about Loop? (Optional)</option>
              <option>Google or Bing Search</option><option>Shopify App Store</option><option>Merchant or Partner Referral</option><option>Loop Marketing Emails</option><option>Social media</option><option>ChatGPT</option><option>Other</option>
            </select>
            <button className="mt-5 h-14 w-full rounded-full bg-[#873cff] font-semibold text-white transition hover:bg-[#7126df]" type="submit">Book a Demo</button>
            <label className="mt-5 flex items-center justify-center gap-3 text-sm text-[#555] max-sm:items-start">
              <input type="checkbox" defaultChecked required className="mt-0.5 h-5 w-5 accent-[#873cff]" />
              <span>I agree with <a className="font-semibold text-[#222]" href="#">Terms of Service</a> and <a className="font-semibold text-[#222]" href="#">Privacy Policy</a>.</span>
            </label>
          </form>
        </div>
        <div className="mt-14 overflow-hidden">
          <h2 className="text-xl font-semibold text-[#2d155f]">Trusted by 2400+ Shopify subscription brands</h2>
          <div className="mt-7 overflow-hidden">
            <div className="flex w-max animate-[migrationLogoMarquee_32s_linear_infinite] items-center motion-reduce:animate-none">
              {[0, 1].map((copy) => (
                <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center gap-16 pr-16">
                  {demoLogos.map(([name, image]) => <img key={`${copy}-${name}`} src={image} alt={copy ? "" : name} className="h-12 w-[145px] shrink-0 object-contain grayscale" />)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

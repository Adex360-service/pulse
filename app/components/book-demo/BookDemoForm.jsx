import Link from "next/link";
import LiquidButtonLayers from "../ui/LiquidButtonLayers";

const inputClass =
  "mt-2 h-[42px] w-full rounded-lg border border-[#dedce3] bg-white px-4 text-[12px] font-normal tracking-normal text-[#8f8b96] outline-none placeholder:text-[#aaa6b3] focus:border-[#8b43fd]";

export default function BookDemoForm() {
  return (
    <form className="mx-auto w-full max-w-[512px] rounded-[16px] border border-[#ddd9e7] bg-white p-6 shadow-[0_16px_50px_#46206b18] max-sm:p-5">
      <h2 className="font-[family-name:var(--font-display)] text-[21px] leading-tight text-[#1d1922]">
        Book your personalised demo
      </h2>
      <p className="mt-2 text-[12px] leading-relaxed text-[#9995a2]">
        We&apos;ll tailor the conversation to your goals.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3 max-sm:grid-cols-1">
        <label className="text-[10px] font-semibold tracking-[1.5px] text-[#666370] uppercase">
          Name<span className="text-[#9b31d9]">*</span>
          <input
            className={inputClass}
            name="name"
            placeholder="Your Name"
            required
          />
        </label>
        <label className="text-[10px] font-semibold tracking-[1.5px] text-[#666370] uppercase">
          Work email<span className="text-[#9b31d9]">*</span>
          <input
            className={inputClass}
            name="email"
            type="email"
            placeholder="name@brand.com"
            required
          />
        </label>
        <label className="text-[10px] font-semibold tracking-[1.5px] text-[#666370] uppercase">
          Shopify store URL<span className="text-[#9b31d9]">*</span>
          <input
            className={inputClass}
            name="store"
            placeholder="yourstore.myshopify.com"
            required
          />
        </label>
        <label className="text-[10px] font-semibold tracking-[1.5px] text-[#666370] uppercase">
          Phone<span className="text-[#9b31d9]">*</span>
          <input
            className={inputClass}
            name="phone"
            type="tel"
            placeholder="Your Phone"
            required
          />
        </label>
      </div>
      <label className="mt-4 block text-[10px] font-semibold tracking-[1.5px] text-[#666370] uppercase">
        Anything you&apos;d like us to know?
        <textarea
          className="mt-2 min-h-[76px] w-full resize-none rounded-lg border border-[#dedce3] bg-white p-4 text-[12px] font-normal normal-case tracking-normal text-[#8f8b96] outline-none placeholder:text-[#aaa6b3] focus:border-[#8b43fd]"
          name="message"
          maxLength={550}
          placeholder="Message (max 100 words)"
        />
      </label>
      <label className="mt-3 block text-[10px] font-semibold tracking-[1.5px] text-[#666370] uppercase">
        Where did you hear about us?
        <select defaultValue="" className={inputClass} name="source">
          <option value="">How did you hear about Loop? (Optional)</option>
          <option>Google or Bing Search</option>
          <option>Shopify App Store</option>
          <option>Merchant or Partner Referral</option>
          <option>Loop Marketing Emails</option>
          <option>Social media</option>
          <option>ChatGPT</option>
          <option>Other</option>
        </select>
      </label>
      <button
        className="loop-liquid-button mt-4 flex h-12 w-full items-center justify-center rounded-md bg-[#9237f5] text-[13px] font-semibold text-white"
        type="submit"
      >
        <span>Book my demo</span>
        <LiquidButtonLayers />
      </button>
      <label className="mt-4 flex items-center justify-center gap-2 text-[10px] text-[#99959f]">
        <input
          type="checkbox"
          defaultChecked
          required
          className="h-[18px] w-[18px] accent-[#9140e8]"
        />
        <span>
          I agree with{" "}
          <Link className="font-semibold text-[#68636d]" href="/legal/terms">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link className="font-semibold text-[#68636d]" href="/legal/privacy">
            Privacy Policy
          </Link>
          .
        </span>
      </label>
    </form>
  );
}

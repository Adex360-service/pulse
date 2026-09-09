import Container from "../ui/Container";
import ConsultationButton from "./ConsultationButton";

export default function MigrationCta() {
  return <section id="migration-contact" className="bg-[#fffbed] py-[90px] max-sm:py-14"><Container className="max-w-[1040px]"><div className="relative overflow-hidden rounded-[30px] bg-[linear-gradient(180deg,#041d43,#163583_55%,#6e39f2)] px-8 py-[90px] text-center text-white shadow-[inset_0_1px_0_#ffffff35]"><div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_15%_20%,white_0_1px,transparent_1.5px),radial-gradient(circle_at_80%_28%,white_0_1px,transparent_1.5px)] [background-size:110px_90px,160px_130px]" /><div className="relative"><h2 className="font-[family-name:var(--font-fraunces)] text-[43px] font-semibold max-sm:text-[34px]">Ready for a Seamless Migration?</h2><p className="mx-auto mt-6 max-w-[520px] text-sm font-semibold text-white/85">Let our dedicated migration specialist help transition your subscription business to Loop.</p><ConsultationButton className="mt-7 min-w-[310px] max-sm:min-w-0" /></div></div></Container></section>;
}

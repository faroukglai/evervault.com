import { FooterContent } from "@/sections/Footer/components/FooterContent";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="text-[9.8px] bg-slate-950 box-border caret-transparent leading-[15.19px] md:text-base md:leading-[24.8px]"
    >
      <FooterContent />
      <FooterBottom />
    </footer>
  );
};

import { HeroContent } from "@/sections/Hero/components/HeroContent";
import { HeroBackground } from "@/sections/Hero/components/HeroBackground";

export const Hero = () => {
  return (
    <header className="relative box-border caret-transparent h-[900px] mt-[-67.2px] min-h-[800px] px-0 top-0 md:h-[974.4px] md:mt-[-76.8px] md:px-[25.6px]">
      <div className="relative items-center bg-[radial-gradient(140%_107.13%_at_50%_10%,rgba(0,0,0,0)_37.41%,rgb(102,51,238)_69.27%,rgb(255,255,255)_100%)] box-border caret-transparent grid h-full justify-items-center min-h-[800px] overflow-hidden pt-[140px] pb-[42px] rounded-[33.6px] md:py-0 md:rounded-[38.4px]">
        <HeroContent />
        <HeroBackground />
      </div>
    </header>
  );
};

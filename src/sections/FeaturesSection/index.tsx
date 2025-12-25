import { FeatureGrid } from "@/sections/FeaturesSection/components/FeatureGrid";
import { FeatureCards } from "@/sections/FeaturesSection/components/FeatureCards";

export const FeaturesSection = () => {
  return (
    <div className="relative box-border caret-transparent mx-[7px] pt-28 pb-[22.4px] md:mx-6 md:pt-32 md:pb-40 before:accent-auto before:bg-[radial-gradient(120%_120%_at_50%_100%,rgba(0,0,0,0)_40%,rgb(102,51,238)_70%,rgb(255,255,255)_100%)] before:box-border before:caret-transparent before:text-slate-200 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[250px] before:tracking-[normal] before:leading-[24.8px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:z-[-1] before:rounded-[33.6px] before:border-separate before:left-0 before:top-0 before:font-inter before:md:h-[400px] before:md:rounded-[38.4px]">
      <div className="text-[12.6px] items-center box-border caret-transparent flex flex-col justify-center leading-[22.05px] max-w-[680px] text-center mb-[21px] mx-auto px-7 md:text-base md:leading-7 md:mb-6 md:px-0">
        <h2 className="text-white text-[28px] font-medium bg-clip-text bg-[radial-gradient(50%_100%,rgb(255,255,255)_30%,rgba(255,255,255,0.5)_100%)] box-border caret-transparent tracking-[-0.56px] leading-[31.5px] mx-auto pb-[2.8px] font-roobert md:text-[52px] md:tracking-[-1.04px] md:leading-[52px] md:pb-[5.2px]">
          Accelerate your business with a first-class payments stack
        </h2>
      </div>
      <div className="relative box-border caret-transparent max-w-[361px] mx-auto md:max-w-[1000px]">
        <FeatureGrid />
        <FeatureCards />
      </div>
    </div>
  );
};

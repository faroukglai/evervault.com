import { TestimonialCarousel } from "@/sections/TrustSection/components/TestimonialCarousel";
import { CertificationLogos } from "@/sections/TrustSection/components/CertificationLogos";

export const TrustSection = () => {
  return (
    <div className="relative box-border caret-transparent mx-[7px] py-14 md:mx-6 md:py-40 before:accent-auto before:bg-[radial-gradient(120%_120%_at_50%_100%,rgba(0,0,0,0)_40%,rgb(102,51,238)_70%,rgb(255,255,255)_100%)] before:box-border before:caret-transparent before:text-slate-200 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[250px] before:tracking-[normal] before:leading-[24.8px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:z-[-1] before:rounded-[33.6px] before:border-separate before:left-0 before:top-0 before:font-inter before:md:h-[400px] before:md:rounded-[38.4px]">
      <div className="text-[12.6px] items-center box-border caret-transparent flex flex-col justify-center leading-[22.05px] max-w-[680px] text-center mb-[21px] mx-auto px-7 md:text-base md:leading-7 md:mb-6 md:px-0">
        <h2 className="text-white text-[28px] font-medium bg-clip-text bg-[radial-gradient(50%_100%,rgb(255,255,255)_30%,rgba(255,255,255,0.5)_100%)] box-border caret-transparent tracking-[-0.56px] leading-[31.5px] mb-3.5 mx-auto pb-[2.8px] font-roobert md:text-[52px] md:tracking-[-1.04px] md:leading-[52px] md:mb-6 md:pb-[5.2px]">
          Why Trust Us?
        </h2>
        <div className="text-[12.6px] box-border caret-transparent leading-[22.05px] md:text-base md:leading-7">
          Evervault is secure by default. We build, manage, and implement
          security best practices into the platform so you don&#39;t have to.
        </div>
      </div>
      <div className="relative box-border caret-transparent max-w-[361px] mx-auto md:max-w-[1000px]">
        <div className="backdrop-blur-sm bg-[linear-gradient(rgba(48,39,85,0.16)_0%,rgba(10,6,34,0.04)_100%)] shadow-[rgba(0,0,0,0.25)_0px_8px_16px_-4px,rgba(0,0,0,0.25)_0px_4px_8px_-2px,rgba(0,0,0,0.2)_0px_1px_2px_0px,rgba(190,167,255,0.24)_0px_0px_0px_1px_inset] box-border caret-transparent mt-7 mb-[42px] mx-[21px] px-3.5 py-14 rounded-3xl md:mt-12 md:mb-16 md:mx-0 md:px-4 md:py-16">
          <TestimonialCarousel />
        </div>
      </div>
      <CertificationLogos />
    </div>
  );
};

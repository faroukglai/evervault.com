export const HeroContent = () => {
  return (
    <div className="relative items-center box-border caret-transparent grid h-full justify-items-center pointer-events-none w-full z-[1]">
      <div className="items-center self-end box-border caret-transparent flex flex-col justify-center max-w-[900px] text-center pb-0 px-7 md:pb-24 md:px-8">
        <h1 className="text-white text-[28px] font-semibold box-border caret-transparent tracking-[-0.42px] leading-[31.5px] mb-[7px] font-roobert md:text-[56px] md:tracking-[-0.84px] md:leading-[56px] md:mb-2">
          Flexible Payments Security
        </h1>
        <h2 className="text-white text-[15.75px] font-medium bg-clip-text bg-[radial-gradient(50%_150%_at_50%_0px,rgb(255,255,255)_60%,rgba(255,255,255,0.6)_100%)] box-border caret-transparent tracking-[-0.1575px] leading-[19.6875px] mb-3.5 px-3.5 font-roobert md:text-[32px] md:tracking-[-0.32px] md:leading-10 md:mb-6 md:px-0">
          Maximum protection, minimum compliance burden
        </h2>
        <p className="text-white text-[11.2px] box-border caret-transparent leading-[19.6px] max-w-[600px] mb-[21px] md:text-base md:leading-7 md:mb-10">
          Take control of your payments stack — easily tokenize cards, optimize
          margins, comply with PCI, avoid gateway lock-in, or spin-up card
          issuing programs.
        </p>
        <a
          href="/contact"
          className="relative text-slate-950 text-[12.6px] font-medium items-center bg-white box-border caret-transparent flex justify-center leading-[19.53px] min-h-[35px] underline-offset-[3px] text-nowrap overflow-hidden px-3.5 rounded-3xl md:text-base md:leading-[24.8px] md:min-h-10 md:px-4"
        >
          Talk to an Expert
          <img
            src="https://c.animaapp.com/mjeo1lfi7UPOYs/assets/icon-5.svg"
            alt="Icon"
            className="text-[12.6px] box-border caret-transparent h-[12.6px] leading-[19.53px] text-nowrap w-2.5 ml-[5.04px] md:text-base md:h-4 md:leading-[24.8px] md:ml-[6.4px]"
          />
        </a>
      </div>
    </div>
  );
};

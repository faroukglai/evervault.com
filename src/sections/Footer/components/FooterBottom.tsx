export const FooterBottom = () => {
  return (
    <div className="text-slate-300 text-[9.8px] border-b-slate-300 border-l-slate-300 border-r-slate-300 border-t-gray-800 box-border caret-transparent leading-[15.19px] py-3.5 border-t md:text-base md:leading-[24.8px] md:py-4">
      <div className="text-[9.8px] items-center box-border caret-transparent flex justify-between leading-[15.19px] max-w-[1200px] w-[337.5px] mx-auto px-[11.2px] md:text-base md:leading-[24.8px] md:w-[1152px] md:px-[12.8px]">
        <p className="text-[11.2px] box-border caret-transparent leading-[17.36px] md:text-[12.8px] md:leading-[19.84px]">
          © 2025 Evervault Inc.
          <br className="text-[11.2px] box-border caret-transparent inline leading-[17.36px] md:text-[12.8px] md:hidden md:leading-[19.84px]" />
          All rights reserved.
        </p>
        <a
          href="https://status.evervault.com/"
          className="relative text-[12.6px] items-center box-border caret-transparent flex leading-[19.53px] underline-offset-[3px] md:text-[14.4px] md:leading-[22.32px] before:accent-auto before:bg-violet-600 before:box-border before:caret-transparent before:text-slate-300 before:block before:text-[12.6px] before:not-italic before:normal-nums before:font-normal before:h-[2.8px] before:tracking-[normal] before:leading-[19.53px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:w-[2.8px] before:mr-[8.4px] before:rounded-[50%] before:border-separate before:font-inter before:md:text-[14.4px] before:md:h-[3.2px] before:md:leading-[22.32px] before:md:w-[3.2px] before:md:mr-[9.6px]"
        >
          <p className="text-[11.2px] box-border caret-transparent leading-[17.36px] underline-offset-[3px] md:text-[12.8px] md:leading-[19.84px]">
            All systems normal
          </p>
        </a>
      </div>
    </div>
  );
};

export const CTASection = () => {
  return (
    <div className="relative box-border caret-transparent overflow-hidden px-0 top-0 md:px-[25.6px]">
      <div className="bg-[radial-gradient(140%_107.13%_at_50%_10%,rgba(0,0,0,0)_37.41%,rgb(102,51,238)_69.27%,rgb(255,255,255)_100%)] box-border caret-transparent h-full rounded-[33.6px] md:rounded-[38.4px]">
        <div className="items-center box-border caret-transparent flex flex-col max-w-[calc(100%_-_28px)] mx-auto px-[16.8px] py-[89.6px] md:max-w-[1000px] md:px-0 md:py-32">
          <div className="text-[12.6px] items-center box-border caret-transparent flex flex-col justify-center leading-[22.05px] max-w-[900px] text-center mb-[21px] mx-auto px-7 md:text-base md:leading-7 md:mb-6 md:px-0">
            <h2 className="text-white text-[28px] font-medium bg-clip-text bg-[radial-gradient(50%_100%,rgb(255,255,255)_30%,rgba(255,255,255,0.5)_100%)] box-border caret-transparent tracking-[-0.56px] leading-[31.5px] mb-3.5 mx-auto pb-[2.8px] font-roobert md:text-[52px] md:tracking-[-1.04px] md:leading-[52px] md:mb-6 md:pb-[5.2px]">
              Enhance customer experience and maximize revenue with your
              payments.
            </h2>
            <div className="text-sm box-border caret-transparent leading-[24.5px] mb-[21px] md:text-base md:leading-7 md:mb-6">
              <div className="text-sm box-border caret-transparent leading-[24.5px] max-w-[520px] mb-7 md:text-base md:leading-7 md:mb-8">
                Use Evervault&#39;s flexible building blocks to build secure and
                compliant payment workflows.
              </div>
            </div>
            <div className="text-[12.6px] items-center box-border caret-transparent gap-x-[7px] flex justify-center leading-[22.05px] gap-y-[7px] w-full md:text-base md:gap-x-2 md:leading-7 md:gap-y-2">
              <a
                href="/contact"
                className="relative text-slate-950 text-[12.6px] font-medium items-center bg-white box-border caret-transparent flex justify-center leading-[22.05px] min-h-[35px] underline-offset-[3px] text-nowrap overflow-hidden px-3.5 rounded-3xl md:text-base md:leading-7 md:min-h-10 md:px-4"
              >
                Book a demo
                <img
                  src="https://c.animaapp.com/mjeo1lfi7UPOYs/assets/icon-5.svg"
                  alt="Icon"
                  className="text-[12.6px] box-border caret-transparent h-[12.6px] leading-[22.05px] text-nowrap w-2.5 ml-[5.04px] md:text-base md:h-4 md:leading-7 md:ml-[6.4px]"
                />
              </a>
              <a
                href="https://app.evervault.com/register"
                className="relative text-white text-[12.6px] font-medium items-center box-border caret-transparent flex justify-center leading-[22.05px] min-h-[35px] underline-offset-[3px] text-nowrap overflow-hidden bg-[position:0px_0px] px-3.5 rounded-3xl md:text-base md:leading-7 md:min-h-10 md:px-4"
              >
                Try for free
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

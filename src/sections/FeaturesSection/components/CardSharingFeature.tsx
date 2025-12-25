export const CardSharingFeature = () => {
  return (
    <div className="relative items-start shadow-[rgba(255,255,255,0.12)_0px_0px_0px_1px_inset,rgba(0,0,0,0.04)_0px_0px_0px_1px] box-border caret-transparent flex flex-col h-[500px] p-[21px] rounded-2xl md:p-8">
      <h4 className="text-purple-400 text-[11.2px] font-medium box-border caret-transparent leading-[11.2px] mb-[8.4px] font-roobert md:text-[12.8px] md:leading-[12.8px] md:mb-[9.6px]">
        Build complex card sharing workflows
      </h4>
      <h3 className="text-white text-[21px] font-medium box-border caret-transparent leading-[26.25px] mb-[15.75px] font-roobert md:text-2xl md:leading-[30px] md:mb-[18px]">
        Share card data securely while keeping compliance scope to a minimum
      </h3>
      <p className="text-[12.6px] box-border caret-transparent leading-[24.5px] mb-7 md:text-[14.4px] md:leading-7 md:mb-8">
        Evervault gives you flexible, compliant products for sharing card data
        with third-parties. For example, booking aggregators and platforms can
        compliantly forward card data to their partners for storing or
        processing.
      </p>
      <a
        href="/solutions/cards"
        className="text-purple-400 text-[12.6px] font-medium items-center box-border caret-transparent flex leading-[19.53px] underline-offset-[3px] z-[3] md:text-[14.4px] md:leading-[22.32px]"
      >
        Learn more
        <img
          src="https://c.animaapp.com/mjeo1lfi7UPOYs/assets/icon-22.svg"
          alt="Icon"
          className="text-[12.6px] box-border caret-transparent h-2.5 leading-[19.53px] w-2.5 ml-[5.04px] md:text-[14.4px] md:leading-[22.32px] md:ml-[5.76px]"
        />
      </a>
      <div className="absolute box-border caret-transparent h-[250px] z-[1] overflow-hidden bottom-px inset-x-px before:accent-auto before:bg-[linear-gradient(rgba(0,0,0,0),rgb(1,3,20))] before:box-border before:caret-transparent before:text-slate-200 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[50px] before:tracking-[normal] before:leading-[24.8px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:z-[4] before:rounded-[20px] before:border-separate before:bottom-0 before:inset-x-0 before:font-inter">
        <div className="absolute aspect-[1.586_/_1] bg-[linear-gradient(rgb(48,39,85)_0%,rgb(10,6,34)_100%)] shadow-[rgba(0,0,0,0.25)_0px_8px_16px_-4px,rgba(0,0,0,0.25)_0px_4px_8px_-2px,rgba(0,0,0,0.2)_0px_1px_2px_0px,rgba(190,167,255,0.24)_0px_0px_0px_1px_inset] box-border caret-transparent left-[calc(50%_-_40px)] w-20 z-[3] rounded-lg bottom-10">
          <img
            src="https://c.animaapp.com/mjeo1lfi7UPOYs/assets/icon-27.svg"
            alt="Icon"
            className="absolute box-border caret-transparent h-3 left-1.5 top-1.5"
          />
        </div>
        <div className="absolute bottom-[-140px] box-border caret-transparent h-[400px] left-[calc(50%_-_200px)] w-[400px] z-[1]"></div>
      </div>
    </div>
  );
};

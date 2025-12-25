export const MobileNavbar = () => {
  return (
    <header className="fixed items-center bg-slate-950 box-border caret-transparent flex h-[44.8px] justify-between w-[calc(100%_-_28px)] z-[100] border border-gray-700 pl-3.5 pr-[8.4px] rounded-[28px] border-solid left-3.5 top-3.5 md:relative md:bg-transparent md:h-[76.8px] md:w-auto md:z-[5] md:border-slate-200 md:px-[51.2px] md:rounded-none md:border-0 md:border-none md:left-auto md:top-auto">
      <img
        src="https://c.animaapp.com/mjeo1lfi7UPOYs/assets/logo-white.svg"
        className="box-border caret-transparent hidden h-[22.4px] min-h-0 min-w-0 z-[1] md:block md:h-[25.6px] md:min-h-[auto] md:min-w-[auto]"
      />
      <img
        src="https://c.animaapp.com/mjeo1lfi7UPOYs/assets/icon-white.svg"
        className="box-border caret-transparent block h-[22.4px] min-h-[auto] min-w-[auto] z-[1] md:hidden md:h-[25.6px] md:min-h-0 md:min-w-0"
      />
      <div className="items-center box-border caret-transparent flex z-[1]">
        <a
          href="https://app.evervault.com/login"
          className="relative text-white text-[11.9px] font-medium items-center box-border caret-transparent flex justify-center leading-[18.445px] min-h-7 text-center underline-offset-[3px] text-nowrap overflow-hidden bg-[position:0px_0px] px-[11.2px] rounded-3xl md:text-[13.6px] md:leading-[21.08px] md:min-h-8 md:px-[12.8px]"
        >
          Log in
        </a>
        <a
          href="/contact"
          className="relative text-slate-950 text-[11.9px] font-medium items-center bg-white box-border caret-transparent flex justify-center leading-[18.445px] min-h-7 text-center underline-offset-[3px] text-nowrap overflow-hidden px-[11.2px] rounded-3xl md:text-[13.6px] md:leading-[21.08px] md:min-h-8 md:px-[12.8px]"
        >
          Talk to an Expert
        </a>
        <button className="text-black items-center bg-white/20 caret-transparent flex h-7 justify-center min-h-[auto] min-w-[auto] text-center w-[44.8px] ml-[8.4px] rounded-[14px] md:hidden md:h-8 md:min-h-0 md:min-w-0 md:w-[51.2px] md:ml-[9.6px] md:rounded-2xl">
          <img
            src="https://c.animaapp.com/mjeo1lfi7UPOYs/assets/icon-4.svg"
            alt="Icon"
            className="text-white box-border caret-transparent block h-3 w-3.5 md:inline md:w-4"
          />
        </button>
      </div>
    </header>
  );
};

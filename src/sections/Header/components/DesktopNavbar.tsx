export const DesktopNavbar = () => {
  return (
    <div className="sticky items-center box-border caret-transparent hidden h-0 justify-center pointer-events-none w-screen z-[100] left-0 top-0 md:flex">
      <nav
        aria-label="Main"
        className="relative items-center box-border caret-transparent flex h-10 justify-center min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
      >
        <div className="relative box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <ul className="text-xs items-center backdrop-blur-[10px] bg-gray-900/80 shadow-[rgba(255,255,255,0.1)_0px_0px_0px_1px_inset,rgba(0,0,0,0.3)_0px_2px_8px_0px] box-border caret-transparent gap-x-1 flex h-10 leading-3 list-none gap-y-1 mt-[76px] p-2 rounded-[20px]">
            <li className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              <a
                href="/"
                className="text-white font-medium items-center box-border caret-transparent inline-flex underline-offset-[3px] bg-[position:0px_0px] -my-3 py-3"
              >
                <span className="items-center box-border caret-transparent flex h-6 min-h-0 min-w-0 underline-offset-[3px] px-3 rounded-xl md:min-h-[auto] md:min-w-[auto]">
                  Home
                </span>
              </a>
            </li>
            <li className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              <button className="text-white font-medium items-center bg-transparent caret-transparent inline-flex text-center bg-[position:0px_0px] -my-3 px-0 py-3">
                <span className="items-center box-border caret-transparent flex h-6 min-h-0 min-w-0 px-3 rounded-xl md:min-h-[auto] md:min-w-[auto]">
                  Products
                </span>
              </button>
            </li>
            <li className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              <button className="text-white font-medium items-center bg-transparent caret-transparent inline-flex text-center bg-[position:0px_0px] -my-3 px-0 py-3">
                <span className="items-center box-border caret-transparent flex h-6 min-h-0 min-w-0 px-3 rounded-xl md:min-h-[auto] md:min-w-[auto]">
                  Solutions
                </span>
              </button>
            </li>
            <li className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              <a
                href="/customers"
                className="text-white font-medium items-center box-border caret-transparent inline-flex underline-offset-[3px] bg-[position:0px_0px] -my-3 py-3"
              >
                <span className="items-center box-border caret-transparent flex h-6 min-h-0 min-w-0 underline-offset-[3px] px-3 rounded-xl md:min-h-[auto] md:min-w-[auto]">
                  Customers
                </span>
              </a>
            </li>
            <li className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              <a
                href="/pricing"
                className="text-white font-medium items-center box-border caret-transparent inline-flex underline-offset-[3px] bg-[position:0px_0px] -my-3 py-3"
              >
                <span className="items-center box-border caret-transparent flex h-6 min-h-0 min-w-0 underline-offset-[3px] px-3 rounded-xl md:min-h-[auto] md:min-w-[auto]">
                  Pricing
                </span>
              </a>
            </li>
            <li className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              <a
                href="https://docs.evervault.com/"
                className="text-white font-medium items-center box-border caret-transparent inline-flex underline-offset-[3px] bg-[position:0px_0px] -my-3 py-3"
              >
                <span className="items-center box-border caret-transparent flex h-6 min-h-0 min-w-0 underline-offset-[3px] px-3 rounded-xl md:min-h-[auto] md:min-w-[auto]">
                  Docs
                </span>
              </a>
            </li>
            <li className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              <button className="text-white font-medium items-center bg-transparent caret-transparent inline-flex text-center bg-[position:0px_0px] -my-3 px-0 py-3">
                <span className="items-center box-border caret-transparent flex h-6 min-h-0 min-w-0 px-3 rounded-xl md:min-h-[auto] md:min-w-[auto]">
                  Resources
                </span>
              </button>
            </li>
            <li className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              <a
                href="/careers"
                className="text-white font-medium items-center box-border caret-transparent inline-flex underline-offset-[3px] bg-[position:0px_0px] -my-3 py-3"
              >
                <span className="items-center box-border caret-transparent flex h-6 min-h-0 min-w-0 underline-offset-[3px] px-3 rounded-xl md:min-h-[auto] md:min-w-[auto]">
                  Careers
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="absolute items-center box-border caret-transparent flex justify-center w-screen z-[100] top-[90px]"></div>
      </nav>
    </div>
  );
};

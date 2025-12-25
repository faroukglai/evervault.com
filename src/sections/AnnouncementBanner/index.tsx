export const AnnouncementBanner = () => {
  return (
    <div className="text-white text-[13px] items-center bg-slate-950 box-border caret-transparent gap-x-2 hidden h-[50px] justify-center leading-[13px] gap-y-2 z-[9999] border-t-white border-b-white/10 border-x-white border-b md:flex">
      <img
        src="https://c.animaapp.com/mjeo1lfi7UPOYs/assets/icon-1.svg"
        alt="Icon"
        className="box-border caret-transparent inline h-4 w-4 md:block"
      />
      Introducing ASV Scans for PCI DSS 4.0 Compliance
      <a
        href="/products/asv-scans"
        className="text-slate-300 font-medium box-border caret-transparent inline min-h-0 min-w-0 decoration-gray-500 underline decoration-1 underline-offset-[3px] md:block md:min-h-[auto] md:min-w-[auto]"
      >
        Learn more-&gt;
      </a>
    </div>
  );
};

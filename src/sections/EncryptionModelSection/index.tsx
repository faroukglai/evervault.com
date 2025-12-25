export const EncryptionModelSection = () => {
  return (
    <section className="relative box-border caret-transparent pt-28 pb-[140px] md:pt-32 md:pb-40">
      <div className="relative box-border caret-transparent h-full w-full">
        <div className="relative box-border caret-transparent h-full w-full overflow-hidden">
          <div className="box-border caret-transparent h-full w-full">
            <img
              src="https://c.animaapp.com/mjeo1lfi7UPOYs/assets/image-3.png"
              className="aspect-[auto_1280_/_150] box-border caret-transparent h-[150px] w-[1280px] md:w-screen"
            />
          </div>
        </div>
      </div>
      <div className="text-[12.6px] items-center box-border caret-transparent flex flex-col justify-center leading-[22.05px] max-w-[760px] text-center mb-[21px] mx-auto px-7 md:text-base md:leading-7 md:mb-6 md:px-0">
        <h2 className="text-white text-[28px] font-medium bg-clip-text bg-[radial-gradient(50%_100%,rgb(255,255,255)_30%,rgba(255,255,255,0.5)_100%)] box-border caret-transparent tracking-[-0.56px] leading-[31.5px] mb-3.5 mx-auto pb-[2.8px] font-roobert md:text-[52px] md:tracking-[-1.04px] md:leading-[52px] md:mb-6 md:pb-[5.2px]">
          Tokenization, but with a powerful and flexible encryption model
        </h2>
        <div className="text-[12.6px] box-border caret-transparent leading-[22.05px] md:text-base md:leading-7">
          Evervault’s encryption model is built different. We never store your
          data. Evervault stores the keys, you store data as you normally would
          — but fully encrypted.
        </div>
      </div>
      <div className="relative box-border caret-transparent gap-x-7 grid grid-cols-[1fr] max-w-[361px] gap-y-7 mt-14 mx-auto px-[21px] md:gap-x-12 md:grid-cols-[1fr_1fr_1fr] md:max-w-[1000px] md:gap-y-16 md:mt-16 md:px-0">
        <div className="text-slate-300 text-[13.3px] box-border caret-transparent leading-[23.275px] md:text-[15.2px] md:leading-[26.6px]">
          <div className="text-white text-[13.3px] font-[580] box-border caret-transparent leading-[23.275px] md:text-[15.2px] md:leading-[26.6px]">
            <img
              src="https://c.animaapp.com/mjeo1lfi7UPOYs/assets/icon-35.svg"
              alt="Icon"
              className="text-[13.3px] box-border caret-transparent inline-block h-[18px] leading-[23.275px] w-[18px] mr-[7px] -mt-0.5 md:text-[15.2px] md:leading-[26.6px]"
            />
            <span className="text-[13.3px] box-border caret-transparent leading-[23.275px] md:text-[15.2px] md:leading-[26.6px]">
              Reduced risk of data breach
            </span>
          </div>
          Evervault’s dual-custody model means a successful data breach would
          require both you and Evervault to be breached, compared to a single
          point of failure with traditional tokenization.
        </div>
        <div className="text-slate-300 text-[13.3px] box-border caret-transparent leading-[23.275px] md:text-[15.2px] md:leading-[26.6px]">
          <div className="text-white text-[13.3px] font-[580] box-border caret-transparent leading-[23.275px] md:text-[15.2px] md:leading-[26.6px]">
            <img
              src="https://c.animaapp.com/mjeo1lfi7UPOYs/assets/icon-36.svg"
              alt="Icon"
              className="text-[13.3px] box-border caret-transparent inline-block h-[18px] leading-[23.275px] w-[18px] mr-[7px] -mt-0.5 md:text-[15.2px] md:leading-[26.6px]"
            />
            <span className="text-[13.3px] box-border caret-transparent leading-[23.275px] md:text-[15.2px] md:leading-[26.6px]">
              Improve Performance
            </span>
          </div>
          Our model lets you create encrypted tokens without any network
          requests. This significantly reduces latency and means tokens can be
          encrypted in microseconds, not seconds.
        </div>
        <div className="text-slate-300 text-[13.3px] box-border caret-transparent leading-[23.275px] md:text-[15.2px] md:leading-[26.6px]">
          <div className="text-white text-[13.3px] font-[580] box-border caret-transparent leading-[23.275px] md:text-[15.2px] md:leading-[26.6px]">
            <img
              src="https://c.animaapp.com/mjeo1lfi7UPOYs/assets/icon-37.svg"
              alt="Icon"
              className="text-[13.3px] box-border caret-transparent inline-block h-[18px] leading-[23.275px] w-[18px] mr-[7px] -mt-0.5 md:text-[15.2px] md:leading-[26.6px]"
            />
            <span className="text-[13.3px] box-border caret-transparent leading-[23.275px] md:text-[15.2px] md:leading-[26.6px]">
              Maximum resiliency
            </span>
          </div>
          Avoid lock-in and dependency on Evervault by storing encrypted data
          yourself. Keys can be shared with a third-party key escrow provider so
          you can easily off-board your tokens.
        </div>
      </div>
    </section>
  );
};

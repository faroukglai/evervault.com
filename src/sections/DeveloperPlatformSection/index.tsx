import { CodeExample } from "@/sections/DeveloperPlatformSection/components/CodeExample";
import { ProductGrid } from "@/sections/DeveloperPlatformSection/components/ProductGrid";

export const DeveloperPlatformSection = () => {
  return (
    <div className="relative box-border caret-transparent mx-[7px] py-14 md:mx-6 md:py-40 before:accent-auto before:bg-[radial-gradient(120%_120%_at_50%_100%,rgba(0,0,0,0)_40%,rgb(102,51,238)_70%,rgb(255,255,255)_100%)] before:box-border before:caret-transparent before:text-slate-200 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[250px] before:tracking-[normal] before:leading-[24.8px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:z-[-1] before:rounded-[33.6px] before:border-separate before:left-0 before:top-0 before:font-inter before:md:h-[400px] before:md:rounded-[38.4px]">
      <div className="relative box-border caret-transparent max-w-[361px] mx-auto md:max-w-[1000px]">
        <div className="box-border caret-transparent gap-x-[42px] flex flex-col gap-y-[42px] mb-[84px] px-[21px] md:gap-x-12 md:flex-row md:gap-y-12 md:mb-24 md:px-0">
          <div className="box-border caret-transparent basis-[0%] grow leading-8 w-full">
            <h4 className="text-white/80 text-[12.6px] font-medium box-border caret-transparent leading-[16.38px] mb-3.5 font-roobert md:text-[14.4px] md:leading-[18.72px] md:mb-4">
              <div className="text-white/90 text-xs font-normal items-center backdrop-blur-[15px] backdrop-saturate-[1.2] bg-white/10 shadow-[rgba(255,255,255,0.15)_0px_0px_0px_0.5px_inset,rgba(0,0,0,0.04)_0px_0px_0px_0.5px,rgba(0,0,0,0.04)_0px_1px_2px_0px] box-border caret-transparent inline-flex h-6 leading-3 px-2 rounded-lg">
                Built for Developers
              </div>
            </h4>
            <h2 className="text-white text-[28px] font-medium bg-clip-text bg-[radial-gradient(50%_100%,rgb(255,255,255)_30%,rgba(255,255,255,0.5)_100%)] box-border caret-transparent tracking-[-0.28px] leading-[31.5px] mb-[21px] pb-[2.8px] font-roobert md:text-5xl md:tracking-[-0.48px] md:leading-[54px] md:mb-6 md:pb-[4.8px]">
              Powered by an easy-to-use, developer friendly platform
            </h2>
            <p className="text-[13.3px] box-border caret-transparent leading-[26.6px] mb-7 md:text-[15.2px] md:leading-[30.4px] md:mb-8">
              Evervault was built to save developer time and make securing data
              incredibly easy. Use language-specific SDKs or our REST API to
              integrate Evervault seamlessly into your stack.
            </p>
            <a
              href="https://docs.evervault.com/"
              className="relative text-slate-950 text-[12.6px] font-medium items-center bg-white box-border caret-transparent inline-flex justify-center leading-[25.2px] min-h-[35px] text-center underline-offset-[3px] text-nowrap overflow-hidden px-3.5 rounded-3xl md:text-base md:leading-8 md:min-h-10 md:px-4"
            >
              View our docs
              <img
                src="https://c.animaapp.com/mjeo1lfi7UPOYs/assets/icon-5.svg"
                alt="Icon"
                className="text-[12.6px] box-border caret-transparent h-[12.6px] leading-[25.2px] text-nowrap w-2.5 ml-[5.04px] md:text-base md:h-4 md:leading-8 md:ml-[6.4px]"
              />
            </a>
          </div>
          <CodeExample />
        </div>
        <div className="box-border caret-transparent gap-x-[21px] grid grid-cols-[repeat(2,1fr)] gap-y-[21px] mb-[84px] px-[21px] md:gap-x-12 md:grid-cols-[repeat(4,1fr)] md:gap-y-12 md:mb-24 md:px-0">
          <div className="box-border caret-transparent">
            <img
              src="https://c.animaapp.com/mjeo1lfi7UPOYs/assets/icon-52.svg"
              alt="Icon"
              className="box-border caret-transparent h-[70px] mb-7 md:mb-8"
            />
            <h4 className="text-white text-sm font-medium box-border caret-transparent leading-[14px] mb-[10.5px] font-roobert md:text-base md:leading-4 md:mb-3">
              Relay
            </h4>
            <p className="text-[11.9px] box-border caret-transparent leading-[20.825px] mb-3.5 md:text-[13.6px] md:leading-[23.8px] md:mb-4">
              An encryption proxy which can be configured to encrypt or decrypt
              data within a network request.
            </p>
            <a
              href="/primitives/relay"
              className="text-purple-400 text-[11.9px] font-medium items-center box-border caret-transparent inline-flex leading-[18.445px] underline-offset-[3px] md:text-[13.6px] md:leading-[21.08px]"
            >
              Learn more
              <img
                src="https://c.animaapp.com/mjeo1lfi7UPOYs/assets/icon-53.svg"
                alt="Icon"
                className="text-[11.9px] box-border caret-transparent h-2.5 leading-[18.445px] w-2.5 ml-[4.76px] md:text-[13.6px] md:leading-[21.08px] md:ml-[5.44px]"
              />
            </a>
          </div>
          <div className="box-border caret-transparent">
            <img
              src="https://c.animaapp.com/mjeo1lfi7UPOYs/assets/icon-54.svg"
              alt="Icon"
              className="box-border caret-transparent h-[70px] mb-7 md:mb-8"
            />
            <h4 className="text-white text-sm font-medium box-border caret-transparent leading-[14px] mb-[10.5px] font-roobert md:text-base md:leading-4 md:mb-3">
              Functions
            </h4>
            <p className="text-[11.9px] box-border caret-transparent leading-[20.825px] mb-3.5 md:text-[13.6px] md:leading-[23.8px] md:mb-4">
              Secure serverless functions that allow you to run logic on
              encrypted data outside of your infrastructure.
            </p>
            <a
              href="/primitives/functions"
              className="text-purple-400 text-[11.9px] font-medium items-center box-border caret-transparent inline-flex leading-[18.445px] underline-offset-[3px] md:text-[13.6px] md:leading-[21.08px]"
            >
              Learn more
              <img
                src="https://c.animaapp.com/mjeo1lfi7UPOYs/assets/icon-53.svg"
                alt="Icon"
                className="text-[11.9px] box-border caret-transparent h-2.5 leading-[18.445px] w-2.5 ml-[4.76px] md:text-[13.6px] md:leading-[21.08px] md:ml-[5.44px]"
              />
            </a>
          </div>
          <div className="box-border caret-transparent">
            <img
              src="https://c.animaapp.com/mjeo1lfi7UPOYs/assets/icon-55.svg"
              alt="Icon"
              className="box-border caret-transparent h-[70px] mb-7 md:mb-8"
            />
            <h4 className="text-white text-sm font-medium box-border caret-transparent leading-[14px] mb-[10.5px] font-roobert md:text-base md:leading-4 md:mb-3">
              UI Components
            </h4>
            <p className="text-[11.9px] box-border caret-transparent leading-[20.825px] mb-3.5 md:text-[13.6px] md:leading-[23.8px] md:mb-4">
              Embeddable components for collecting and displaying cardholder
              data without touching it in plaintext.
            </p>
            <a
              href="/primitives/ui-components"
              className="text-purple-400 text-[11.9px] font-medium items-center box-border caret-transparent inline-flex leading-[18.445px] underline-offset-[3px] md:text-[13.6px] md:leading-[21.08px]"
            >
              Learn more
              <img
                src="https://c.animaapp.com/mjeo1lfi7UPOYs/assets/icon-53.svg"
                alt="Icon"
                className="text-[11.9px] box-border caret-transparent h-2.5 leading-[18.445px] w-2.5 ml-[4.76px] md:text-[13.6px] md:leading-[21.08px] md:ml-[5.44px]"
              />
            </a>
          </div>
          <div className="box-border caret-transparent">
            <img
              src="https://c.animaapp.com/mjeo1lfi7UPOYs/assets/icon-56.svg"
              alt="Icon"
              className="box-border caret-transparent h-[70px] mb-7 md:mb-8"
            />
            <h4 className="text-white text-sm font-medium box-border caret-transparent leading-[14px] mb-[10.5px] font-roobert md:text-base md:leading-4 md:mb-3">
              Enclaves
            </h4>
            <p className="text-[11.9px] box-border caret-transparent leading-[20.825px] mb-3.5 md:text-[13.6px] md:leading-[23.8px] md:mb-4">
              Deploy any Docker Container to a Secure Enclave with no additional
              configuring or provisioning required.
            </p>
            <a
              href="/primitives/relay"
              className="text-purple-400 text-[11.9px] font-medium items-center box-border caret-transparent inline-flex leading-[18.445px] underline-offset-[3px] md:text-[13.6px] md:leading-[21.08px]"
            >
              Learn more
              <img
                src="https://c.animaapp.com/mjeo1lfi7UPOYs/assets/icon-53.svg"
                alt="Icon"
                className="text-[11.9px] box-border caret-transparent h-2.5 leading-[18.445px] w-2.5 ml-[4.76px] md:text-[13.6px] md:leading-[21.08px] md:ml-[5.44px]"
              />
            </a>
          </div>
        </div>
      </div>
      <ProductGrid />
    </div>
  );
};

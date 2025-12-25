import { AnnouncementBanner } from "@/sections/AnnouncementBanner";
import { DesktopNavbar } from "@/sections/Header/components/DesktopNavbar";
import { MobileNavbar } from "@/sections/Header/components/MobileNavbar";
import { Hero } from "@/sections/Hero";
import { LogoGrid } from "@/sections/LogoGrid";
import { FeaturesSection } from "@/sections/FeaturesSection";
import { EncryptionModelSection } from "@/sections/EncryptionModelSection";
import { FlexibleInfraSection } from "@/sections/FlexibleInfraSection";
import { DeveloperPlatformSection } from "@/sections/DeveloperPlatformSection";
import { TrustSection } from "@/sections/TrustSection";
import { CTASection } from "@/sections/CTASection";
import { Footer } from "@/sections/Footer";
import { ChatButton } from "@/components/ChatButton";

export const App = () => {
  return (
    <body className="relative text-slate-200 text-base not-italic normal-nums font-normal accent-auto bg-slate-950 bg-no-repeat bg-size-[100%_1600px] box-border caret-transparent block tracking-[normal] leading-[24.8px] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible bg-[position:50%_top] border-separate font-inter">
      <div className="box-border caret-transparent flex flex-col min-h-[1000px]">
        <div className="box-border caret-transparent font-inter">
          <div className="fixed box-border caret-transparent pointer-events-none z-[9999] inset-8"></div>
          <AnnouncementBanner />
          <DesktopNavbar />
          <MobileNavbar />
          <div className="box-border caret-transparent basis-[0%] grow">
            <div className="box-border caret-transparent flex flex-col min-h-[1000px]">
              <main className="relative box-border caret-transparent grow min-w-full overflow-x-clip">
                <Hero />
                <LogoGrid />
                <FeaturesSection />
                <div className="relative box-border caret-transparent h-px w-full before:accent-auto before:bg-[radial-gradient(50%_100%_at_50%_100%,rgba(157,137,255,0.1)_0%,rgba(1,3,20,0)_100%)] before:box-border before:caret-transparent before:text-slate-200 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-10 before:left-[calc(50%_-_250px)] before:tracking-[normal] before:leading-[24.8px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-[500px] before:z-0 before:border-slate-200 before:border-b before:border-separate before:bottom-0 before:font-inter after:accent-auto after:bg-[radial-gradient(43.9%_100%_at_50%_0px,rgba(157,137,255,0.15)_0%,rgba(1,3,20,0)_100%)] after:box-border after:caret-transparent after:text-slate-200 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-20 after:left-[calc(50%_-_500px)] after:tracking-[normal] after:leading-[24.8px] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-[1000px] after:z-0 after:border-slate-200 after:border-separate after:border-t after:top-0 after:font-inter"></div>
                <EncryptionModelSection />
                <FlexibleInfraSection />
                <DeveloperPlatformSection />
                <TrustSection />
                <div className="relative box-border caret-transparent h-px w-full before:accent-auto before:bg-[radial-gradient(50%_100%_at_50%_100%,rgba(157,137,255,0.1)_0%,rgba(1,3,20,0)_100%)] before:box-border before:caret-transparent before:text-slate-200 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-10 before:left-[calc(50%_-_250px)] before:tracking-[normal] before:leading-[24.8px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-[500px] before:z-0 before:border-slate-200 before:border-b before:border-separate before:bottom-0 before:font-inter after:accent-auto after:bg-[radial-gradient(43.9%_100%_at_50%_0px,rgba(157,137,255,0.15)_0%,rgba(1,3,20,0)_100%)] after:box-border after:caret-transparent after:text-slate-200 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-20 after:left-[calc(50%_-_500px)] after:tracking-[normal] after:leading-[24.8px] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-[1000px] after:z-0 after:border-slate-200 after:border-separate after:border-t after:top-0 after:font-inter"></div>
                <CTASection />
              </main>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <div className="box-border caret-transparent"></div>
      <div className="box-border caret-transparent">
        <div className="relative text-zinc-950 text-sm box-border caret-transparent h-full isolate leading-[21.7px] z-[99999] font-plaininter">
          <div className="box-border caret-transparent h-full">
            <ChatButton />
          </div>
        </div>
      </div>
    </body>
  );
};

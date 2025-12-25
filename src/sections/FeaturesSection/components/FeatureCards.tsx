import { CardIssuingFeature } from "@/sections/FeaturesSection/components/CardIssuingFeature";
import { CardSharingFeature } from "@/sections/FeaturesSection/components/CardSharingFeature";
import { PaymentOptimizationFeature } from "@/sections/FeaturesSection/components/PaymentOptimizationFeature";
import { SecureComputeFeature } from "@/sections/FeaturesSection/components/SecureComputeFeature";

export const FeatureCards = () => {
  return (
    <div className="box-border caret-transparent gap-x-7 grid grid-cols-[1fr] gap-y-7 pt-7 md:gap-x-8 md:grid-cols-[1fr_1fr] md:gap-y-8 md:pt-8">
      <div className="box-border caret-transparent gap-x-7 flex flex-col gap-y-7 w-full md:gap-x-8 md:gap-y-8">
        <CardIssuingFeature />
        <CardSharingFeature />
      </div>
      <div className="box-border caret-transparent gap-x-7 flex flex-col gap-y-7 w-full md:gap-x-8 md:gap-y-8">
        <PaymentOptimizationFeature />
        <SecureComputeFeature />
      </div>
    </div>
  );
};

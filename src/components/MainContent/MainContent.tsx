import React from "react";
import IntroductionSection from "../IntroductionSection/IntroductionSection";
import CatalogSection from "../CatalogSection/CatalogSection";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import SelectSection from "../SelectSection/SelectSection";
import OurTeam from "../OurTeam/OurTeam";
import FAQ from "../FAQ/FAQ";

export default function MainContent() {
  return (
    <main>
      <IntroductionSection />
      <CatalogSection />
      <AboutUsSection />
      <SelectSection />
      <OurTeam />
      <FAQ />
    </main>
  );
}

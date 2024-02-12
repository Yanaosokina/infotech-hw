import React from "react";
import IntroductionSection from "../IntroductionSection/IntroductionSection.tsx";
import CatalogSection from "../CatalogSection/CatalogSection.tsx";
import AboutUsSection from "../AboutUsSection/AboutUsSection.tsx";
import SelectSection from "../SelectSection/SelectSection.tsx";
import OurTeam from "../OurTeam/OurTeam.tsx";
import FAQ from "../FAQ/FAQ.tsx";

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

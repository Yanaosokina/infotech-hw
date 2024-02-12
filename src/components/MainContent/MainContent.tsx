import React from "react";
import FistSection from "../FirstSection/FirstSection.tsx";
import CatalogSection from "../CatalogSection/CatalogSection.tsx";
import AboutUsSection from "../AboutUsSection/AboutUsSection.tsx";
import SelectSection from "../SelectSection/SelectSection.tsx";
import OurTeam from "../OurTeam/OurTeam.tsx";
import FAQ from "../FAQ/FAQ.tsx";
import Footer from "../Footer/Footer.tsx";

export default function MainContent() {
  return (
    <main>
      <FistSection />
      <CatalogSection />
      <AboutUsSection />
      <SelectSection />
      <OurTeam />
      <FAQ />
    </main>
  );
}

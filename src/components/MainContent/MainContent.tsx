import { IntroductionSection } from "components/MainContent/IntroductionSection/IntroductionSection";
import { CatalogSection } from "components/MainContent/CatalogSection";
import { AboutUsSection } from "components/MainContent/AboutUsSection/AboutUsSection";
import { SelectSection } from "components/MainContent/SelectSection";
import { OurTeam } from "components/MainContent/OurTeam/OurTeam";
import { FAQ } from "./FAQ";

export  function MainContent() {
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

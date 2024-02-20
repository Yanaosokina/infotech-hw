import { IntroductionSection } from "components/MainPage/IntroductionSection/IntroductionSection";
import { CatalogSection } from "components/MainPage/CatalogSection";
import { AboutUsSection } from "components/MainPage/AboutUsSection/AboutUsSection";
import { SelectSection } from "components/MainPage/SelectSection";
import { OurTeam } from "components/MainPage/OurTeam/OurTeam";
import { FAQ } from "./FAQ";

export  function MainPage() {
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

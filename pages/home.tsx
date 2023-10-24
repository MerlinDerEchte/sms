
import { NextPage } from "next";
import { IntroSection } from 'components/Section/Sections/IntroSection';
import { TeamsSection } from "components/Section/Sections/TeamsSection";
import { ClubEventSection } from "components/Section/Sections/ClubEventsSection";
import { BlogPostSection } from "components/Section/Sections/BlogPostSection";
import { ImpressionsSection } from "components/Section/Sections/ImpressionsSection";
import { SponsorSection } from "components/Section/Sections/SponsorSection"
import { ContactSection } from "components/Section/Sections/ContactSection";

export interface IcreateHomeStyles {
  screenWidth: number;
  screenHeight: number;
}

const Home: NextPage = () => {

  return (
    <div id="home_scroll_container">
      <IntroSection />
      <ContactSection />
      <TeamsSection />
      <ImpressionsSection />
      <ClubEventSection />
      <BlogPostSection />
      <SponsorSection />
    </div>
  );
};
export default Home;


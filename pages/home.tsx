
import { NextPage } from "next";
import { IntroSection } from 'components/Sections/IntroSection';
import { TeamsSection } from "components/Sections/TeamsSection";
import { ClubEventSection } from "components/Sections/ClubEventsSection";
import { ImpressionsSection } from "components/Sections/ImpressionsSection";
import { SponsorSection } from "components/Sections/SponsorSection"
import { ContactSection } from "components/Sections/ContactSection";
import { NextGamesSection } from "components/Sections/NextGamesSection";

export interface IcreateHomeStyles {
  screenWidth: number;
  screenHeight: number;
}

const Home: NextPage = () => {

  return (
    <div id="home_scroll_container" >
      <IntroSection isSecondary={false} />
      <NextGamesSection isSecondary={true} />
      <ClubEventSection isSecondary={false} />
      <TeamsSection isSecondary={true}/>
      <ImpressionsSection   isSecondary={false} />
      <ContactSection isSecondary={true}/>
      <SponsorSection  isSecondary={false} />
    </div>
  );
};
export default Home;


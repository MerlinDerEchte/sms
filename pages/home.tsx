
import { NextPage } from "next";
import { IntroSection } from 'components/Section/Sections/IntroSection';
import { TeamsSection } from "components/Section/Sections/TeamsSection";
import { ClubEventSection } from "components/Section/Sections/ClubEventsSection";
import { BlogPostSection } from "components/Section/Sections/BlogPostSection";
import { ImpressionsSection } from "components/Section/Sections/ImpressionsSection";
import Head from "next/head";
import Script from "next/script";
export interface IcreateHomeStyles {
  screenWidth: number;
  screenHeight: number;
}

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <script src="https://widget-prod.bfv.de/widget/widgetresource/widgetjs" ></script>
      </Head>
      <IntroSection />
      <ImpressionsSection />
      <TeamsSection />
      <ClubEventSection />
      <BlogPostSection />

    </>
  );
};
export default Home;


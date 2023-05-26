
import { NextPage } from "next";
import {  IntroSection } from './components/Section/Sections/IntroSection';
import { TeamsSection } from "./components/Section/Sections/TeamsSection";
import { ClubEventSection } from "./components/Section/Sections/ClubEventsSection";
import { BlogPostSection } from "./components/Section/Sections/BlogPostSection";
export interface IcreateHomeStyles {
  screenWidth: number;
  screenHeight: number;
}

const Home: NextPage = () => {

  return (
    <>
      <IntroSection />
      <TeamsSection />
      <ClubEventSection />
      <BlogPostSection />
    </>
  );
};
export default Home;


import { css } from "@emotion/css";
import { NextPage } from "next";
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import { HomeSection } from './components/Section/Sections/HomeSection';
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
      <HomeSection />
      <TeamsSection />
      <ClubEventSection />
      <BlogPostSection />
    </>
  );
};
export default Home;


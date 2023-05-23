import { css } from "@emotion/css";
import { NextPage } from "next";
import { Section } from "./components/Section/Section";
import TeamList from './components/TeamList.ts/TeamList'
import TeamsNavigationbar from "./components/TeamsNavigationbar/teamsNavigationbar";
import BlogPostNavigationbar from "./components/BlogPostNavigationbar/BlogPostNavigationbar";
import ClubEventsNavigationbar from "./components/ClubEventsNavigationbar/ClubEventsNavigationbar";
import { getPageContentHeight } from "./components/PageLayout/PageLayoutUtils.ts/getPageContentHeight";
import { ReactHTMLElement, Ref, useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import { SuedLogoHeader } from "./components/SuedLogoHeader/SuedLogoHeader";
import { PageLayoutConstants } from "./constants/PageLayoutConstants";
import { url } from "inspector";
import { HomeSection } from './components/Section/Sections/HomeSection';
import { TeamsSection } from "./components/Section/Sections/TeamsSection";
import { useRef } from "react";
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

export const createHomeStyles = (screenHeight: number) => {
  return css({
    position: "relative",
    marginTop: 50,
    marginLeft: `calc(50% - ${PageLayoutConstants.CONTENT_WIDTH / 2}px)`,
    width: PageLayoutConstants.CONTENT_WIDTH,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: 100,

    ".welcome-wrapper": {
      flex: "1 0",
      width: "100%",
      display: "flex",
      textAlign: 'center',
      flexDirection: "column",
      gap: 10,

      ".welcome-header-wrapper": {
        flex: 0,
        height: 40,
        width: "100%",
      },
      ".welcome-content-wrapper": {
        flex: 1,
        position: "relative",
        width: "100%",

        ".welcome-content": {
          textAlign: "left",
          padding: "20px 20px",
        },
      },
    },
  });
};

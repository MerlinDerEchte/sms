import { css } from "@emotion/css";
import { NextPage } from "next";
import { Section } from "./components/Section/Section";
import TeamList from './components/TeamList.ts/TeamList'
import TeamsNavigationbar from "./components/TeamsNavigationbar/teamsNavigationbar";
import BlogPostNavigationbar from "./components/BlogPostNavigationbar/BlogPostNavigationbar";
import ClubEventsNavigationbar from "./components/ClubEventsNavigationbar/ClubEventsNavigationbar";
import { getPageContentHeight } from "./components/PageLayout/PageLayoutUtils.ts/getPageContentHeight";
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import { SuedLogoHeader } from "./components/SuedLogoHeader/SuedLogoHeader";
import { PageLayoutConstants } from "./constants/PageLayoutConstants";
import { url } from "inspector";
import { HomeSection } from './components/Section/Sections/HomeSection';
export interface IcreateHomeStyles {
  screenWidth: number;
  screenHeight: number;
}

const Home: NextPage = () => {
  const { screenHeight } = useContext(GlobalContext);

  const homeStyles = createHomeStyles(screenHeight);

  const HomeWelcomeCaption = () => (
    <h1>Herzlich Willkommen beim SC München Süd!</h1>
  );

  return (
    <>
      {/* <Section isSecondary={true}>
        <div className={homeStyles}>
          <div className="sued-logo-wrapper">
            <SuedLogoHeader />
          </div>
          <div className="welcome-wrapper">
            <div className='welcome-header-wrapper'>
              {HomeWelcomeCaption()}
            </div>
            <div className="welcome-content-wrapper">
              <div className="welcome-content">
                <p>
                  Hier beim SC München Süd dreht sich alles um die Liebe zum Spiel.
                  Wir glauben fest daran, dass der Fußball mehr ist als nur ein Sport.
                  Es ist eine Leidenschaft, die uns verbindet und uns begeistert.
                </p>
                <p>
                  Unser Verein ist mehr als nur ein Team. Wir sind eine große Familie.
                  Egal, ob jung oder alt, Anfänger oder erfahrener Spieler, hier ist jeder willkommen und findet seinen Platz.
                  Gemeinsam schaffen wir eine Atmosphäre, in der sich jeder wohl und akzeptiert fühlt.
                  Jeder bringt seine individuellen Stärken mit und trägt zum Erfolg des Teams bei.
                </p>
                <p>
                  Der SC München Süd ist nicht nur auf dem Platz aktiv, sondern auch abseits des Spielfelds engagiert.
                  Wir organisieren regelmäßig Veranstaltungen und Aktivitäten, bei denen wir uns besser kennenlernen, Spaß haben und unsere Verbundenheit stärken können.
                  Egal, ob es das gemeinsame Grillen nach dem Spiel ist oder eine Spendenaktion für einen guten Zweck – wir sind immer füreinander da und unterstützen uns gegenseitig
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section> */}
      <HomeSection />
      <Section isSecondary={false}>
        <TeamList />
      </Section>
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

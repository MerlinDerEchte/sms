
import { css } from "@emotion/css";
import { NextPage } from "next";
import TeamsNavigationbar from "./components/TeamsNavigationbar/teamsNavigationbar";
import BlogPostNavigationbar from "./components/BlogPostNavigationbar/BlogPostNavigationbar";
import ClubEventsNavigationbar from "./components/ClubEventsNavigationbar/ClubEventsNavigationbar";
import { getPageContentHeight } from "./components/PageLayout/PageLayoutUtils.ts/getPageContentHeight";
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import { SuedLogoHeader } from "./components/SuedLogoHeader/SuedLogoHeader";
import { PageLayoutConstants } from "./constants/PageLayoutConstants";
import { url } from "inspector";

export interface IcreateHomeStyles {
    screenWidth: number,
    screenHeight: number
}


const Home: NextPage = () => {

    const { screenHeight } = useContext(GlobalContext);

    const homeStyles = createHomeStyles(screenHeight);

    const HomeWelcomeCaption = () => <h1>Herzlich Willkommen beim SC München Süd!</h1>

    return (
        <div className={homeStyles}>
            <div className="sued-logo-wrapper">
                <SuedLogoHeader />
            </div>
            <div className='welcome-wrapper'>
                {/* <div className='welcome-header-wrapper'>
                        {HomeWelcomeCaption()}
                    </div> */}
                <div className='welcome-content-wrapper'>
                    <div className='welcome-content'>Wir sind ein kleiner Verein im Herzen von Sendling. Egal ob jung oder alt,
                        wer Lust am Fußball hat und einen respektvollen Umgang schätzt ist hier an der richtigen Adresse. Für Probetrainings bitte den Trainer der jeweiligen Mannschaft kontaktieren.
                    </div>
                </div>

            </div>
            <div className='box-table'>
                <div className='news-events-wrapper'>
                    <div className="news-container">
                        <BlogPostNavigationbar limit={3} />
                    </div>
                    <div className="events-container">
                        <ClubEventsNavigationbar />
                    </div>

                </div>
                <div className='right-box-wrapper'>
                    <div className='teams-wrapper'>
                        <TeamsNavigationbar />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;



export const createHomeStyles = (screenHeight: number) => {

    const sectionGap = 40;
    const miniGap = 20;
    const boxHeight = getPageContentHeight(screenHeight)
    return css({

        position: 'relative',
        marginTop: 50,
        marginLeft: `calc(50% - ${PageLayoutConstants.CONTENT_WIDTH / 2}px)`,
        width: PageLayoutConstants.CONTENT_WIDTH,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: sectionGap,

        '.welcome-wrapper': {
            flex: '0 0',
            height: 200,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,

            '.welcome-header-wrapper': {
                flex: 0,
                height: 40,
                width: '100%',

            },
            '.welcome-content-wrapper': {
                flex: 0,
                position: 'relative',
                width: '100%',

                '.welcome-content': {
                    maxHeight: 100,
                    textAlign: 'left',
                    padding: '20px 20px'
                }
            },
        },
        '.box-table': {
            flex: 1,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            gap: miniGap,

            '.news-event-wrapper': {
                flex: '0 0  auto',
                width: 600 - miniGap / 2,
                display: "flex",
                flexDirection: 'column',

                '.events-container': {
                    flex: 1,
                },
                '.news-container': {
                    flex: 1
                }

            },
            '.right-box-wrapper': {
                flex: '0 0  auto',
                width: 200 - miniGap / 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                paddingRight: 20,

                '.teams-wrapper': {
                    position: 'relative',
                    flex: 1,
                    display: 'flex',
                    gap: 20,
                    flexDirection: 'column',

                    '.team-box': {
                        flex: '0 0 auto',
                        height: 50,
                        width: '100%'
                    },
                    '.teams-header': {
                        flex: 0,

                    }

                }
            }
        },
    })
}
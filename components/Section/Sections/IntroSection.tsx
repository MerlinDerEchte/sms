import { Section } from "../Section";
import { css } from "@emotion/css";
import { SuedLogoHeader } from "components/SuedLogoHeader/SuedLogoHeader";
import { useContext } from "react";
import { GlobalContext } from "GlobalContext";
import { ESectionId } from "enums/sectionIds";
import { PageLayoutConstantsMobile } from "constants/PageLayoutConstants";
import { EAppStatus } from "types/appStatus";
import Script from 'next/script'

export const IntroSection = ({ }) => {
    const { isMobile } = useContext(GlobalContext)
    const createIntroStyles = (isMobile: Boolean) => {
        return css({
            position: "relative",
            paddingTop: isMobile ? 150 : 50,
            paddingBottom: 50,
            marginLeft: isMobile ? PageLayoutConstantsMobile.SECTION_CONTENT_SIDE_MARGIN : 200,
            marginRight: isMobile ? PageLayoutConstantsMobile.SECTION_CONTENT_SIDE_MARGIN : 200,
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            gap: isMobile ? 100 : 50,

            ".welcome-wrapper": {
                flex: "1 0",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 10,

                ".welcome-header-wrapper": {
                    flex: 0,
                    height: 40,
                    width: "100%",
                    textAlign: 'center',
                },
                ".welcome-content-wrapper": {
                    flex: 1,
                    position: "relative",
                    width: "100%",
                    textAlign: 'center',

                    ".welcome-content": {
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: "left",
                        paddingTop: 20,
                        paddingBottom: 20,
                    },
                },
            },
        });
    }

    const introStyles = createIntroStyles(isMobile);
    return (
        <Section isSecondary={false} sectionId={ESectionId.Intro}>
            <div className={introStyles}>
                <div className="sued-logo-wrapper">
                    <SuedLogoHeader />
                </div>
                <div className="welcome-wrapper">
                    <div className='welcome-header-wrapper'>
                        <h1>
                            Herzlich Willkommen beim SC München Süd e.V.
                        </h1>
                    </div>
                    <div className="welcome-content-wrapper">
                        <div className="welcome-content">
                            {/*  <p>
                                Hier beim SC München Süd dreht sich alles um die Liebe zum Spiel.
                                Wir glauben fest daran, dass der Fußball mehr ist als nur ein Sport.
                                Es ist eine Leidenschaft, die uns verbindet und uns begeistert.
                            </p>
                           {/*  <p>
                                Unser Verein ist mehr als nur ein Team. Wir sind eine große Familie.
                                Egal, ob jung oder alt, Anfänger oder erfahrener Spieler, hier ist jeder willkommen und findet seinen Platz.
                                Gemeinsam schaffen wir eine Atmosphäre, in der sich jeder wohl und akzeptiert fühlt.
                                Jeder bringt seine individuellen Stärken mit und trägt zum Erfolg des Teams bei.
                            </p> 
                            <p>
                                Der SC München Süd ist nicht nur auf dem Platz aktiv, sondern auch abseits des Spielfelds engagiert.
                                Wir organisieren regelmäßig Veranstaltungen und Aktivitäten, bei denen wir uns besser kennenlernen, Spaß haben und unsere Verbundenheit stärken können.
                                Egal, ob es das gemeinsame Grillen nach dem Spiel ist oder eine Spendenaktion für einen guten Zweck – wir sind immer füreinander da und unterstützen uns gegenseitig.
                            </p> */}

                            <div id="bfv1694790962920">Laden...</div>
                            <Script>
                                {`BFVWidget.HTML5.zeigeVereinSpiele("00ES8GNHD400001CVV0AG08LVUPGND5I", "bfv1694790962920", { height: "550", width: "${isMobile ? 300 : 400}", selectedTab: BFVWidget.HTML5.vereinTabs.spiele, colorResults: "rgb(46, 21, 3)", colorNav: "rgb(250, 249, 246)", colorClubName: "rgb(46, 21, 3)", backgroundNav: "rgb(46, 21, 3)" })`}
                            </Script>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}


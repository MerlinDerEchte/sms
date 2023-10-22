import { css } from "@emotion/css"
import { Section } from "../Section";
import { ESectionId } from "enums/sectionIds";
import { useContext } from "react";
import { GlobalContext } from "GlobalContext";
import { colors } from "styles/colors";

export const ContactSection: React.FC = () => {
    const contentMarginLeft = 'calc(100vw - '
    const { isMobile } = useContext(GlobalContext);
    const createContactSectionStyles = () => {
        return css({
            width: "100%",
            display: 'flex',
            maxWidth: '100vw',
            position: 'relative',
            flexDirection: isMobile ? 'column' : 'row',

            '.contact-header': {
                height: 50,
                width: isMobile ? '100%' : 450,
                display: "flex",
                justifyContent: 'center',
                alignItems: "center",
                background: isMobile ? colors.DARK_BROWN : colors.DARK_WHITE,
                borderRadius: isMobile ? 'none' : "0 0 15px 0",
                color: isMobile ? colors.DARK_WHITE : colors.DARK_BROWN,
                marginBottom: isMobile ? 0 : 20,
            },

            '.contact-content': {
                paddingTop: isMobile ? 50 : 100,
                paddingBottom: 20,
                display: 'flex',
                flex: 1,
                flexDirection: isMobile ? 'column' : 'row',
                width: isMobile ? '100%' : 'calc(100vw - 450px)',
                justifyContent: isMobile ? 'center' : 'start',
                alignItems: isMobile ? 'center' : 'flex-start',
                gap: isMobile ? 50 : 100,

                '.contact-wrapper': {
                    width: 300,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                    '.contact-item': {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 5,
                        'a': {
                            fontWeight: 'bold',
                            textDecoration: 'underline',
                        }
                    },
                    '.contact-item-header': {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 5,
                        marginBottom: isMobile ? 20 : 50,
                    }

                }
                /* color: isMobile ? colors.DARK_WHITE : colors.DARK_BROWN,
                background: isMobile ? colors.DARK_BROWN : colors.DARK_WHITE, */
            }
        })
    }
    const contactSectionStyles = createContactSectionStyles();
    return (
        <Section isSecondary={true} sectionId={ESectionId.Kontakt} >
            <div className={contactSectionStyles}>
                <div className="contact-header">
                    <h2>Anfahrt & Kontakt</h2>
                </div>
                <div className="contact-content">
                    <div className="contact-wrapper">
                        <h2 className="contact-item-header">Kontakt</h2>
                        <div className="contact-item">
                            <span>Junioren</span>
                            <a target='_blank' href="mailto:junioren@scsued.de">
                                junioren@scsued.de
                            </a>
                        </div>
                        <div className="contact-item">
                            <span>Senioren</span>
                            <a target='_blank' href="mailto:kontakt@scsued.de">
                                kontakt@scsued.de
                            </a>
                        </div>
                    </div>
                    <div className="contact-wrapper">
                        <h2 className="contact-item-header">Anfahrt</h2>
                        <div className="contact-item">
                            <h3>Adresse</h3>
                            <span>Wackersberger Str. 49, 81371 München</span>
                            <a target='_blank' href="https://www.google.com/maps/place/SC+M%C3%BCnchen-S%C3%BCd+e.V./@48.1151084,11.5463418,17z/data=!3m1!4b1!4m6!3m5!1s0x479ddf35d00f25c5:0x18a924f32f2ae2b0!8m2!3d48.1151084!4d11.5463418!16s%2Fg%2F1td4npd9?entry=ttu">Route Planen</a>

                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
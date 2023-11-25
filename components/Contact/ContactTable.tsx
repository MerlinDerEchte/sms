import { css } from "@emotion/css"
import { useContext } from "react";
import { GlobalContext } from "GlobalContext";
import { ContactPersonList } from "./ContactPersonList";

export const ContactTable: React.FC = () => {
    const { isMobile } = useContext(GlobalContext);
    const createContactSectionStyles = () => {
        return css({
            paddingTop: isMobile ? 20 : 0,
            paddingBottom: 20,
            display: 'flex',
            flexDirection: 'column',
            width: isMobile ? '100%' : 600,
            justifyContent: isMobile ? 'center' : 'flex-start',
            alignItems: 'flex-start',
            gap: 50,

            '.general-contact-and-address-wrapper': {
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? 20 : 0,

                '.general-contact-and-address-column': {
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
                        marginBottom: isMobile ? 20 : 20,
                    }

                }
            },
            '.contact-persons-wrapper': {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: 40,
                '.contact-persons-header-wrapper': {
                    height: 50,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: isMobile ? 'start' : 'center',
                    alignItems: 'center'
                },
                '.contact-persons-content-wrapper': {
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                }

            }
        })
    }
    const contactSectionStyles = createContactSectionStyles();
    return (
        <div className={contactSectionStyles}>
            <div className="general-contact-and-address-wrapper">
                <div className="general-contact-and-address-column">
                    <h2 className="contact-item-header">Kontakt</h2>
                    <div className="contact-item">
                        <span>Junioren</span>
                        <a target='_blank' rel="noreferrer" href="mailto:junioren@scsued.de">
                            junioren@scsued.de
                        </a>
                    </div>
                    <div className="contact-item">
                        <span>Senioren</span>
                        <a target='_blank' rel="noreferrer" href="mailto:kontakt@scsued.de">
                            kontakt@scsued.de
                        </a>
                    </div>
                </div>
                <div className="general-contact-and-address-column">
                    <h2 className="contact-item-header">Anfahrt</h2>
                    <div className="contact-item">
                        <span>Wackersberger Str. 49, 81371 München</span>
                        <a target='_blank' rel="noreferrer" href="https://www.google.com/maps/place/SC+M%C3%BCnchen-S%C3%BCd+e.V./@48.1151084,11.5463418,17z/data=!3m1!4b1!4m6!3m5!1s0x479ddf35d00f25c5:0x18a924f32f2ae2b0!8m2!3d48.1151084!4d11.5463418!16s%2Fg%2F1td4npd9?entry=ttu">Route Planen</a>
                    </div>
                </div>
            </div>
            <div className="contact-persons-wrapper">
                <div className="contact-persons-header-wrapper">
                    <h2>Verantwortliche</h2>
                </div>
                <div className="contact-persons-content-wrapper">
                    <ContactPersonList />
                </div>
            </div>
        </div>
    )
}
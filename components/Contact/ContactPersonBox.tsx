import { css } from "@emotion/css"
import { GlobalContext } from "context/GlobalContext"
import { SectionContext } from "components/Section/SectionContext";
import { useContext } from "react"
import { colors } from "styles/colors";
import { Person } from "types/person";


export const ContactPersonBox: React.FC<{ person: Person }> = ({ person }) => {

    const { isMobile } = useContext(GlobalContext);
    const { isSecondary } = useContext(SectionContext);

    const createContactPersonBoxStyles = () => {
        return css({
            boxShadow: `0px 0px 5px ${isSecondary ? colors.DARK_WHITE : colors.DARK_BROWN}`,
            color: isSecondary ? colors.DARK_WHITE : colors.DARK_BROWN,
            backgroundColor: colors.DARK_WHITE,
            borderRadius: 25,
            padding: 10,
            minHeight: 150,
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'stretch',
            overflow: 'hidden',

            '.contact-person-foto-wrapper': {

                flex: 0,
                display: 'flex',
                justifyContent: 'center',
                height: 150,
                alignItems: 'center',
                paddingLeft: 5,
                paddingRight: 5,
                borderRadius: '15px 0 0 15px',
                'img': {
                    width: isMobile ? 100 : 80,
                    borderRadius: '50%',
                    border: `2px solid ${colors.DARK_WHITE}`,
                    boxShadow: `0 0 10px 3px ${colors.DARK_BROWN}`,

                },
                background: `linear-gradient(45deg, ${colors.DARK_BROWN}, ${colors.LIGHT_BROWN})`,

            },
            '.contact-person-info-wrapper': {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: "start",
                justifyContent: 'center',
                paddingTop: 10,
                paddingLeft: 10,
                gap: 10,
                //background: colors.LIGHT_BROWN,
                color: colors.DARK_BROWN,
                borderRadius: '0 15px 15px 0',
                border: `2px solid ${colors.LIGHT_BROWN}`


            }
        })
    }

    const createContactBoxInfoItemStyle = () => {
        return css({
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            '.contact-box-info-item-wrapper-header': {
                flex: 2,
                fontWeight: 'bold'
            },
            '.contact-box-info-item-wrapper-content': {
                maxWidth: '100%',
                flex: 1,
            }
        })
    }
    const createContactItem = (title: string, value: string) => {
        return (<div className={createContactBoxInfoItemStyle()}>
            <div className="contact-box-info-item-wrapper-header">{title}</div>
            <div className="contact-box-info-item-wrapper-content">{value}</div>
        </div>
        )
    }

    const ContactPersonBoxStyles = createContactPersonBoxStyles();


    return (
        <div className={ContactPersonBoxStyles}>
            <div className="contact-person-foto-wrapper">
                <img src={person.fotoLink} />
            </div>
            <div className="contact-person-info-wrapper">
                {createContactItem(person.title, person.name)}
                {person.contact && createContactItem('Kontakt', person.contact)}
            </div>

        </div>
    )
}
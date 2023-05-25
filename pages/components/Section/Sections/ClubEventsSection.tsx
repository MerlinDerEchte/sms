import { Section } from "../Section";
import { css } from "@emotion/css";
import { PageLayoutConstants } from "../../../constants/PageLayoutConstants";
import { colors } from "../../../../styles/colors";
import ClubEventList from "../../ClubEventList/ClubEventList";
import BlogPostList from "../../BlogPostList/BlogPostList";
import { ListSection } from "../ListSection";

export const ClubEventSection = ({ }) => {

    const createEventsStyles = () => {

        return css({
            paddingBottom: 50,
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            maxWidth: '100vw',
            gap: 100,

            '.left-container': {
                flex: 1,
                width: '33vw',
                overflow: 'hidden',
                '.caption-container': {
                    position: 'relative',
                    display: 'flex',
                    background: colors.DARK_BROWN,
                    color: colors.DARK_WHITE,
                    borderRadius: `0px 0px 10px 0px`,
                    width: '100%',
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center'
                },
            },
            '.right-container': {
                flex: 2,
                width: '66vw',
                position: 'relative',
                paddingTop: 100,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',

            }
        })
    }

    const eventsStyles = createEventsStyles();

    /* return (
        <Section isSecondary={true} sectionId="news">
            <div className={eventsStyles}>
                <div className="left-container">
                    <div className="caption-container">
                        <h2>
                            Events
                        </h2>
                    </div>
                </div>
                <div className="right-container">
                    <ClubEventList />
                </div>
            </div>
        </Section>
    ) */

    return(
        <ListSection isSecondary={true} sectionId="news" caption="Events">
            <ClubEventList />
        </ListSection>
    )
} 
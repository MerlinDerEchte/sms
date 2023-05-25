import { Section } from "../Section";
import { FunctionComponent } from "react";
import { Team } from "../../../types/team"
import { css } from "@emotion/css";
import { withTeams } from "../../../hoc/TeamsHoc"
import TeamList from "../../TeamList/TeamList";
import { colors } from "../../../../styles/colors";
import { ListSection } from "../ListSection";

export const TeamsSection = () => {

    const createTeamstyles = () => {
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
                    background: colors.DARK_WHITE,
                    color: colors.DARK_BROWN,
                    borderRadius: `0px 0px 10px 0px`,
                    width: '100%',
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                '#suedplatzImg': {
                    position: 'relative',
                    marginTop: 100,

                }
            },
            '.right-container': {
                flex: 2,
                width: '66vw',
                position: 'relative',
                paddingTop: 100,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'start',

            }
        })
    }
    const teamStyles = createTeamstyles()

   /*  return (
        <Section isSecondary={false} sectionId="teams">
            <div className={teamStyles} id="teamsSection">
                <div className="left-container">
                    <div className="caption-container">
                        <h2>
                            Unsere Teams
                        </h2>
                    </div>
                </div>
                <div className="right-container">
                    <TeamList />
                </div>
            </div>
        </Section >
    ) */

    return(
        <ListSection isSecondary={false} sectionId="teams" caption="Unsere Teams">
            <TeamList />
        </ListSection>
    )
}

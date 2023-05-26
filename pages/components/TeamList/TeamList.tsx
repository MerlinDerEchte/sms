import React, { useContext } from "react";
import { withTeams } from "../../hoc/TeamsHoc"
import { Team } from "../../types/team"
import { TeamListItem } from "./TeamListItem/TeamListItem";
import { createTeamListStyles } from "./TeamListStyles"
import { GlobalContext } from "../../GlobalContext";


const TeamList:React.FC<{teams:Team[]}> = ({teams}) => {
    const {isMobile} = useContext(GlobalContext);
    const teamListStyles = createTeamListStyles(isMobile);
    return (
        <div className={teamListStyles}>
            {teams.sort((a, b) => a.hirarchy - b.hirarchy)
            .map((t, index) =>
                <TeamListItem team={t} key={index} />
            )}
        </div>
    )
}
export default withTeams(TeamList);
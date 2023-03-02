import { Team } from "../../../types/team"
import { createTeamBoxStyles } from "./teamBoxStyles"


export const TeamBox:React.FC<{team:Team}> = ({team}) => {

    const teamBoxStyles = createTeamBoxStyles();
    return(
        <div className={teamBoxStyles}>
           {team.name}
        </div>
    )
}
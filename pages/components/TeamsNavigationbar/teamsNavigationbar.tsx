import { withTeams } from "../../hoc/TeamsHoc"
import { Team } from "../../types/team"
import { createTeamsNavigationbarStyles } from "./teamsNavigationbarStyles"
import { ComponentBox } from "../ComponentBox/ComponentBox";
import { TeamBox } from "./Teambox/teamBox";



const TeamsNavigationbar:React.FC<{teams:Team[]}> = ({teams})  => {


    const teamsNavigationbarStyles = createTeamsNavigationbarStyles();
    return (
        <div className={teamsNavigationbarStyles}>
            <div className="teams-navigationbar-header">
                <h1>Teams</h1>
            </div>
            <div className="teams-container">
                {teams.sort((a,b) => a.hirarchy - b.hirarchy)
                .map((t,index) => (
                    <div className="team-box-wrapper" key={index}>
                        <ComponentBox boxProps={{
                            boxContent: <TeamBox team={t} />,
                            isClickable: true  
                        }}  
                        />
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default withTeams(TeamsNavigationbar)
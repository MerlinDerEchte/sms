import React, { useContext } from "react";
import { Team } from "types/team";
import { GlobalContext } from "context/GlobalContext";
import { TeamMobileComponent } from "./TeamMobile/TeamMobile.component";
import { TeamDesktopComponent } from "./TeamDesktop/TeamDesktop.component";
export const TeamComponent: React.FC<{ team: Team, selectedTeamName: string, setSelectedTeamName: (team: string) => void }> = ({ team, selectedTeamName, setSelectedTeamName }) => {

    const { isMobile } = useContext(GlobalContext);
    return isMobile ?
        <TeamMobileComponent
            team={team}
            selectedTeamName={selectedTeamName}
            setSelectedTeamName={setSelectedTeamName} />
        :
        <TeamDesktopComponent
            team={team}
            selectedTeamName={selectedTeamName}
            setSelectedTeamName={setSelectedTeamName}
        />
}
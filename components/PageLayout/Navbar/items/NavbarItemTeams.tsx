import { ESectionId } from "enums/sectionIds"
import { NavbarItem } from "../NavbarItem"
import { useQuery } from "@apollo/client";
import { TEAMS_QUERY } from "contentful/contentfulTeam";
import { Team } from "types/team";

export const NavbarItemTeams:React.FC = () => {

    const { data: teamsData } = useQuery(TEAMS_QUERY);

    return(
        <NavbarItem title="Teams" sectionId={ESectionId.Teams} />
    )
}
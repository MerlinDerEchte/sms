import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { mapContentfulPersons, PERSONS_QUERY } from "contentful/contentfulPerson";
import { ContentfulTeam, TEAMS_QUERY, mapContentfulTeam } from "contentful/contentfulTeam";
import { Person } from "types/person";
import { Team } from "types/team"
import { TeamListItem } from "./TeamListItem/TeamListItem";
import { createTeamListStyles } from "./TeamListStyles"
import { GlobalContext } from "context/GlobalContext";

const TeamList: React.FC = () => {
    const { isMobile } = useContext(GlobalContext);
    const teamListStyles = createTeamListStyles(isMobile);

    const [teams, setTeams] = useState<Team[]>([]);

    const { data: teamsData } = useQuery(TEAMS_QUERY);
    const { data: personData } = useQuery(PERSONS_QUERY);

    useEffect(() => {
        if (personData?.personCollection?.items && teamsData?.mannschaftCollection?.items) {
            const persons: Person[] = mapContentfulPersons(personData.personCollection.items);
            const newTeams = teamsData.mannschaftCollection.items.map((cT: ContentfulTeam) => {
                return mapContentfulTeam(cT, persons);
            }).filter((team: Team | null) => team !== null)
            setTeams(newTeams);
        }
    }, [teamsData, personData])


    return (
        <div className={teamListStyles}>
            {teams.sort((a, b) => a.hirarchy - b.hirarchy)
                .map((t, index) =>
                    <TeamListItem team={t} key={index} />
                )}
        </div>
    )
}
export default TeamList;
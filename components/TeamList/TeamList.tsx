import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { mapContentfulPersons, PERSONS_QUERY } from "contentful/contentfulPerson";
import { ContentfulTeam, TEAMS_QUERY } from "contentful/contentfulTeam";
import { Person } from "types/person";
import { Team } from "types/team"
import { TeamListItem } from "./TeamListItem/TeamListItem";
import { createTeamListStyles } from "./TeamListStyles"
import { GlobalContext } from "GlobalContext";


const TeamList: React.FC = () => {
    const { isMobile } = useContext(GlobalContext);
    const teamListStyles = createTeamListStyles(isMobile);

    const [teams, setTeams] = useState<Team[]>([]);

    const { data: teamsData } = useQuery(TEAMS_QUERY);
    const { data: personData } = useQuery(PERSONS_QUERY);

    useEffect(() => {
        if (personData?.personCollection?.items && teamsData?.mannschaftCollection?.items) {

            const persons: Person[] = mapContentfulPersons(personData.personCollection.items);

            const newTeams: Team[] = [];

            teamsData.mannschaftCollection.items.forEach((cT: ContentfulTeam) => {
                const isPersonIdInCTTrainers = (id: string) => cT.trainersCollection.items.some((person) => person.sys.id === id)
                const trainers: Person[] = persons.filter(p => isPersonIdInCTTrainers(p.id))

                if (trainers) {
                    newTeams.push({
                        id: cT.id,
                        name: cT.name,
                        trainers: trainers,
                        bfvLink: cT.bfvLink,
                        trainingDates: cT.trainingszeiten,
                        hirarchy: cT.hirarchie,
                        fotoLink: cT.foto.url
                    })
                }
            })
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
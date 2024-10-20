import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { mapContentfulPersons, PERSONS_QUERY } from "contentful/contentfulPerson";
import { ContentfulTeam, TEAMS_QUERY, mapContentfulTeam } from "contentful/contentfulTeam";
import { Person } from "types/person";
import { Team } from "types/team"
import { TeamComponent } from "./Team/TeamComponent";
import { createTeamListStyles } from "./TeamListStyles"
import { GlobalContext } from "context/GlobalContext";
import { TRAININGS_QUERY, mapContentfulTrainings } from "contentful/contentfulTraining";
import { Training } from "types/training";
import { scrollIntoView } from "utils/scrollUtil";

const TeamList: React.FC = () => {
    const { isMobile } = useContext(GlobalContext);
    const teamListStyles = createTeamListStyles(isMobile);

    const [teams, setTeams] = useState<Team[]>([]);

    const { data: teamsData } = useQuery(TEAMS_QUERY);
    const { data: personData } = useQuery(PERSONS_QUERY);
    const { data: trainingsData } = useQuery(TRAININGS_QUERY)
    const [selectedTeamName, setSelectedTeamName] = useState<string>('')

    useEffect(()=>{
        scrollIntoView(selectedTeamName)
    },[selectedTeamName]);
    useEffect(() => {
        if (personData?.personCollection?.items && teamsData?.mannschaftCollection?.items && trainingsData?.trainingCollection?.items) {
            const persons: Person[] = mapContentfulPersons(personData.personCollection.items);

            const trainings: Training[] = mapContentfulTrainings(trainingsData.trainingCollection.items)
            const newTeams = teamsData.mannschaftCollection.items.map((cT: ContentfulTeam) => {
                return mapContentfulTeam(cT, persons, trainings);
            }).filter((team: Team | null) => team !== null)
            setTeams(newTeams);
        }
    }, [teamsData, personData, trainingsData])


    return (
        <div className={teamListStyles}>
            {teams.sort((a, b) => a.hirarchy - b.hirarchy)
                .map((t, index) =>
                    <TeamComponent team={t} key={index} selectedTeamName={selectedTeamName} setSelectedTeamName={(team: string) => setSelectedTeamName(team)} />
                )}
        </div>
    )
}
export default TeamList;
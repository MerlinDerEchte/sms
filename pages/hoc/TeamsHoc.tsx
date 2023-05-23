import { useQuery } from "@apollo/client";
import React, { ComponentType, useEffect, useState } from "react";
import { mapContentfulPersons, PERSONS_QUERY } from "../api/contentful/contentfulPerson";
import { ContentfulTeam, TEAMS_QUERY } from "../api/contentful/contentfulTeam";
import { Person } from "../types/person";
import { Team } from "../types/team";



export function withTeams<T>(Component: ComponentType<T>) {
    return (hocProps: T) => {
        const [teams, setTeams] = useState<Team[]>([]);
       
        const {  data: teamsData } = useQuery(TEAMS_QUERY);
        const {  data: personData } = useQuery(PERSONS_QUERY);

        useEffect(() => {
            if (personData?.personCollection?.items && teamsData?.mannschaftCollection?.items ) {
                
                const persons:Person[] = mapContentfulPersons(personData.personCollection.items);
                        
                const newTeams: Team[] = [];
                
                teamsData.mannschaftCollection.items.forEach((cT: ContentfulTeam) => {
                    console.log(cT);
                    const isPersonIdInCTTrainers = (id:string) => cT.trainersCollection.items.some((person) => person.sys.id === id)
                    const trainers:Person[] = persons.filter(p => isPersonIdInCTTrainers(p.id))
                
                    if (trainers) {
                        newTeams.push({
                            id: cT.id,
                            name: cT.name,
                            trainers:  trainers,
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
            <Component
                {...hocProps}
                teams={teams}

            />)
    }
} 

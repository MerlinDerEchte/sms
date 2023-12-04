import { gql } from "@apollo/client";
import { ContentfulPerson } from "./contentfulPerson";
import { Team } from "types/team";
import { Person } from "types/person";
import { getTrainerTypeRank } from "types/trainerTypeEnum";


export interface ContentfulTeam {
    id: string,
    name: string,
    trainingszeiten: string,
    trainersCollection: {
        items: ContentfulPerson[],
    }
    bfvLink?: string,
    hirarchie: number,
    foto: {
        url: string
    }

}

export const TEAMS_QUERY = gql`
    query {
        mannschaftCollection {
            items {
                sys {
                    id
                }
                name
                trainingszeiten
                trainersCollection {
                    items {
                        sys {
                            id
                        }
                    }
                }
                bfvLink
                hirarchie
                foto {
                    url
                }
            }
        }
    }
`

export const mapContentfulTeam = (contentfulTeam: ContentfulTeam, persons: Person[]): Team | null => {

    const getSortedTrainers = (trainers: Person[]): Person[] => {
        return trainers.sort((a, b) => {

            const aRank: number = getTrainerTypeRank(a.title);
            const bRank: number = getTrainerTypeRank(b.title);
            return aRank - bRank;

        })
    }
    const isPersonIdInCTTrainers = (id: string) => contentfulTeam.trainersCollection.items.some((person) => person.sys.id === id)
    const trainers: Person[] = persons.filter(p => isPersonIdInCTTrainers(p.id))
    const sortedTrainers = getSortedTrainers(trainers);
    if (sortedTrainers) {
        return ({
            id: contentfulTeam.id,
            name: contentfulTeam.name,
            trainers: sortedTrainers,
            bfvLink: contentfulTeam.bfvLink || undefined,
            trainingDates: contentfulTeam.trainingszeiten,
            hirarchy: contentfulTeam.hirarchie,
            fotoLink: contentfulTeam.foto?.url || undefined
        })
    }
    return null;
}



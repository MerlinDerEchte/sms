import { gql } from "@apollo/client";
import { ContentfulPerson } from "./contentfulPerson";
import { Team } from "types/team";
import { Person } from "types/person";
import { getTrainerTypeRank } from "types/trainerTypeEnum";
import { Training } from "types/training";
import { ContentfulTraining } from "./contentfulTraining";


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
    trainingsCollection:{
        items: ContentfulTraining[]
    } 
}
export const TEAMS_QUERY = gql`
  query {
    mannschaftCollection(limit:20) {
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
        trainingsCollection(limit:50) {
          items {
            sys {
              id
            }
          }
        }
      }
    }
  }
`;


export const mapContentfulTeam = (contentfulTeam: ContentfulTeam, persons: Person[], trainings:Training[]): Team | null => {

    const getSortedTrainers = (trainers: Person[]): Person[] => {
        return trainers.sort((a, b) => {

            const aRank: number = getTrainerTypeRank(a.title);
            const bRank: number = getTrainerTypeRank(b.title);
            return aRank - bRank;

        })
    }
   
    const isPersonIdInCTTrainers = (id: string) => contentfulTeam.trainersCollection.items.some((person) => person.sys.id === id)
    const isTrainingIdInCTTrainings = (id:string) => contentfulTeam.trainingsCollection.items.some((training) => training.sys.id === id)
    
    
    const filteredTrainers: Person[] = persons.filter(p => isPersonIdInCTTrainers(p.id))
    const filteredTrainings: Training[] =  trainings.filter(t => isTrainingIdInCTTrainings(t.id)) 
    const sortedTrainers = getSortedTrainers(filteredTrainers);
    if (sortedTrainers) {
        return ({
            id: contentfulTeam.id,
            name: contentfulTeam.name,
            trainers: sortedTrainers,
            bfvLink: contentfulTeam.bfvLink || undefined,
            trainingDates: contentfulTeam.trainingszeiten,
            hirarchy: contentfulTeam.hirarchie,
            fotoLink: contentfulTeam.foto?.url || undefined,
            trainings: filteredTrainings
        })
    }
    return null;
}



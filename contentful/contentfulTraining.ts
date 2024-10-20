import { gql } from "@apollo/client";
import { Training } from "types/training"



export interface ContentfulTraining {
    sys: {
        id: string
    },
    dateAndTime: string,
    address: string
}

export const TRAININGS_QUERY = gql`
    query {
        trainingCollection {
            items {
                sys {
                    id
                }
                dateAndTime
                address
            }
        }
    }
`

export const mapContentfulTraining = (contentfulTraining: ContentfulTraining): Training => {
    console.log(contentfulTraining)
    return ({
        id: contentfulTraining.sys.id,
        dateAndTime: contentfulTraining.dateAndTime,
        address: contentfulTraining.address
    })
}

export const mapContentfulTrainings = (contenfulTrainings: ContentfulTraining[]): Training[] => {
    return contenfulTrainings.map((cTraining: ContentfulTraining) => mapContentfulTraining(cTraining))
}
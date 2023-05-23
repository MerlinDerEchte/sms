import { gql } from "@apollo/client";
import { ContentfulPerson } from "./contentfulPerson";


export interface ContentfulTeam {
    id: string,
    name: string,
    trainingszeiten: string,
    trainersCollection: {
        items:ContentfulPerson[],
    }
    bfvLink: string,
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



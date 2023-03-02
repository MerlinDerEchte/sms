import { gql } from "@apollo/client";


export interface ContentfulTeam {
    id: string,
    name: string,
    trainingszeiten: string,
    trainer: {
        sys: {
            id: string,
        }
    },
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
                trainer {
                    sys {
                        id
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



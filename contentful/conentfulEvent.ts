import { gql } from "@apollo/client"
import { Document } from "@contentful/rich-text-types"
import { ClubEvent } from "types/clubEvent"

export interface ContentfulEvent {
    sys: {
        id: string,
    },
    titel: string,
    datum: string,
    foto: {
        url: string
    },
    inhalt: {
        json:Document
    }
}

export const CLUB_EVENTS_QUERY = gql`
    query {
        eventCollection {
            items {
                sys {
                    id 
                }
                titel
                datum
                foto {
                    url
                }
                inhalt {
                    json
                }
            }
        }
    }
`


export const mapContentfulEvents = (contentfulEvents: ContentfulEvent[]): ClubEvent[] => {
   const newEvents = contentfulEvents.map(ce => {
        return ({
            title: ce.titel,
            date: new Date(ce.datum),
            id: ce.sys.id,
            content: ce.inhalt.json,
            fotoLink: ce.foto.url
        })
    })
    return newEvents;
}
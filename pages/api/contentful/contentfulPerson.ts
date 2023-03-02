import { gql } from "@apollo/client";
import { cp } from "fs";
import { Person } from "../../types/person";

export interface ContentfulPerson {
    sys: {
        id:string
    },
    name:string,
    title: string,
    spitzname: string,
    foto: {
        url: string
    },
    kontakt: string,
}

export const PERSONS_QUERY = gql`
        query {
            personCollection{
                items{
                    sys {
                        id
                    }
                    name
                    title
                    spitzname
                    foto {
                        url
                    }
                    kontakt
                }
            }
        }
    `
export const createSinglePersonQuery = (id:string) => {
    return gql`
    query {
        Person (id: "${id}") {
            sys {
                id
            }
            name
            title
            spitzname
            foto {
                url
            }
            kontakt
        }
    }
    `
} 
export const mapContentfulPersons = (contentfulPersons:ContentfulPerson[]):Person[] => {
    const persons:Person[] = contentfulPersons.map(cp => ({
        id: cp.sys.id,
        name: cp.name,
        nickName: cp.spitzname,
        title: cp.title,
        contact: cp.kontakt,
        fotoLink: cp.foto.url
    }));
    return persons;
}
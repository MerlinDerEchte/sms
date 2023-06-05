import { gql } from '@apollo/client';
import { Impression } from 'types/impression';

export interface ContentfulImpression {
    sys: {
        id: string
    },
    description: string,
    foto: {
        url: string
    }
}

export const IMPRESSIONS_QUERY = gql`
    query {
        impressionCollection{
            items{
                sys{
                    id
                }
                description
                foto{
                    url
                }
            }
        }
    }
`

export const mapContentfulImpressions = (contentfulImpressions: ContentfulImpression[]):Impression[] => {
    const impressions: Impression[] = contentfulImpressions.map((cI) => (
        {
            id: cI.sys.id,
            description: cI.description,
            fotoLink: cI.foto.url
        }
    )
    )
    return impressions
}
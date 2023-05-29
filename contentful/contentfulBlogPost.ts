import { gql } from "@apollo/client"
import { Document } from "@contentful/rich-text-types"
import { BlogPost } from "types/blogPost"



export interface ContentfulBlogPost {
    sys: {
        id: string,
    },
    title: string,
    inhalt: {
        json:Document
    },
    foto: {
        url: string,
    }
}

export const BLOG_POST_QUERY = gql`
    query {
        blogPostCollection {
            items {
                sys {
                    id
                }
                title
               
                inhalt {
                    json
                }
                foto {
                    url
                }
            }
        }
    }
`
export const mapContentfulBlogPosts = (contentfulBlogPosts: ContentfulBlogPost[]): BlogPost[] => {
    console.log('mapping')
    const blogPosts: BlogPost[] = contentfulBlogPosts.map(cbp => {
        return ({
            id: cbp.sys.id,
            title: cbp.title,
            content: cbp.inhalt.json,
            fotoLink: cbp.foto.url,
        })
    })
    return blogPosts;
}
import { useQuery } from "@apollo/client";
import React, { ComponentType, useEffect, useState } from "react";
import { BLOG_POST_QUERY, mapContentfulBlogPosts } from "../api/contentful/contentfulBlogPost";
import { BlogPost } from "../types/blogPost";

export function withBlogPosts<T>(Component: ComponentType<T>) {
    return (hocProps: T) => {
        const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
       
        const { data } = useQuery(BLOG_POST_QUERY); 
        
        useEffect(() => {
            if(data?.blogPostCollection?.items){
                
                setBlogPosts(mapContentfulBlogPosts(data.blogPostCollection.items));
            }
        }, [data])

        return (
            <Component
                {...hocProps}
                blogPosts={blogPosts}

            />)
    }
} 

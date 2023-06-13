import React, { useContext, useEffect, useState, } from "react";
import { useQuery } from "@apollo/client";
import { BlogPost } from "types/blogPost";
import { BlogPostBox } from "./BlogPostBox/BlogPostBox";
import { css } from "@emotion/css"
import { colors } from "styles/colors"
import { BLOG_POST_QUERY, mapContentfulBlogPosts } from "contentful/contentfulBlogPost";
import { GlobalContext } from "GlobalContext";

export const BlogPostList: React.FC= () => {

    const { isMobile } = useContext(GlobalContext)
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

    const { data } = useQuery(BLOG_POST_QUERY);

    useEffect(() => {
        if (data?.blogPostCollection?.items) {
            setBlogPosts(mapContentfulBlogPosts(data.blogPostCollection.items));
        }
    }, [data])
    const createBlogPostStyles = (isMobile: Boolean) => {
        return css({
            display: 'flex',
            flexDirection: 'column',
            width: isMobile ? '100%' : 600,
            gap: 30,
            color: colors.DARK_BROWN,
            alignItems: 'stretch',
            'a': {
                textDecoration: 'underline'
            },
        })
    }


    const blogPostListStyles = createBlogPostStyles(isMobile)

    return (
        <div className={blogPostListStyles}>
            {
                blogPosts.map((bP, index) =>
                    <BlogPostBox blogPost={bP} key={index} />
                )
            }

        </div>
    )
}
export default BlogPostList;
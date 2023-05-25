import React from "react";
import { BlogPost } from "../../types/blogPost";
import { BlogPostBox } from "./BlogPostBox/BlogPostBox";
import { css } from "@emotion/css"
import { colors } from "../../../styles/colors"
import { withBlogPosts } from "../../hoc/BlogPostsHoc";

const BlogPostList: React.FC<{ blogPosts: BlogPost[] }> = ({ blogPosts }) => {


    const createBlogPostStles = () => {
        return css({
            display: 'flex',
            flexDirection: 'column',
            width: 600,
            gap: 30,
            color: colors.DARK_WHITE,
            alignItems: 'stretch',
            'a': {  
                textDecoration: 'underline'
            },
        })
    }


    const blogPostListStyles = createBlogPostStles()

    return (
        <div className={blogPostListStyles}>
            {
                blogPosts.map((bP,index) =>
                    <BlogPostBox blogPost={bP} key={index} />
                )
            }

        </div>
    )
}
export default withBlogPosts(BlogPostList)
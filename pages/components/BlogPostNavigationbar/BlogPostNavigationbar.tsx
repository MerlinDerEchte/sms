import { withBlogPosts } from "../../hoc/BlogPostsHoc";
import { BlogPost } from "../../types/blogPost";
import { ComponentBox } from "../ComponentBox/ComponentBox";
import { BlogPostBox } from "./BlogPostBox/BlogPostBox";
import { createBlogPostNavigationbarStyles } from "./BlogPostNavigationbarStyles"


const BlogPostNavigationbar: React.FC<{ blogPosts: BlogPost[], limit:number }> = ({ blogPosts, limit =  -1 }) => {

    const BlogPostNavigationbarStyles = createBlogPostNavigationbarStyles();

    const mapBlogPostBoxes = (blogPosts:BlogPost[]) => blogPosts.map(b => {
        return (
            <div>
                <ComponentBox boxProps={{
                    boxContent: <BlogPostBox blogPost={b} />,
                    isClickable: true
                }}
                />
            </div>
        )
    })

    return (
        <div className={BlogPostNavigationbarStyles}>
            <div className="header">
                <h1>News</h1>
            </div>
            <div className="blog-post-container">
                {limit !== -1 ?
                    mapBlogPostBoxes(blogPosts.slice(0,limit))
                :   mapBlogPostBoxes(blogPosts)
                }
            </div>
        </div>
    )
}

export default withBlogPosts(BlogPostNavigationbar);
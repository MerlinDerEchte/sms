import { BlogPost } from "../../../types/blogPost";
import { createBlogPostStyles } from "./BlogPostBoxStyles";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


export const BlogPostBox: React.FC<{ blogPost: BlogPost }> = ({ blogPost }) => {

    const blogPostStyles = createBlogPostStyles();
    return (
        <div className={blogPostStyles}>
          
            <div className="blog-post-header">
                <h2>{blogPost.title}</h2>

            </div>
            <div className="blog-post-wrapper">
                <div className="blog-post-read-more-container">
                    Mehr lesen...
                </div>
                {documentToReactComponents(blogPost.content)}
            </div>
        </div>

    )
}
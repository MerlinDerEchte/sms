import { BlogPost } from "../../../types/blogPost";
import { createBlogPostStyles } from "./BlogPostBoxStyles";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useContext, useState } from 'react';
import { GlobalContext } from "../../../GlobalContext";

export const BlogPostBox: React.FC<{ blogPost: BlogPost }> = ({ blogPost }) => {
    const {isMobile} = useContext(GlobalContext)
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleIsExpanded = () => {
        if (isExpanded) {
            setIsExpanded(false)
        } else {
            setIsExpanded(true)
        }
    }
    const [isFocused, setIsFocused] = useState(false);

    const blogPostStyles = createBlogPostStyles(isExpanded, isFocused, isMobile);
    return (
        <div className={blogPostStyles} onMouseEnter={() => setIsFocused(true)} onMouseLeave={() => setIsFocused(false)} onClick={toggleIsExpanded}>
             <div className="foto-wrapper">
                <img src={blogPost.fotoLink} alt={`foto_${blogPost.title}`}></img>
            </div>
            <div className="blog-post-content-wrapper">
                <div className="blog-post-header">
                    <h2>{blogPost.title}</h2>
                </div>
                <div className="blog-post-text-wrapper">
                    {documentToReactComponents(blogPost.content)}
                </div>
                {!isExpanded && <div className="blog-post-read-more-container">
                    Mehr lesen...
                </div>
                }
            </div>
        </div>

    )
}
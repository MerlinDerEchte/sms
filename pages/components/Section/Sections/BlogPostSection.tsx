import { Section } from "../Section";
import { css } from "@emotion/css";
import { colors } from "../../../../styles/colors";
import BlogPostList from "../../BlogPostList/BlogPostList";
export const BlogPostSection = ({ }) => {

    const createBlogPostsStyles = () => {

        return css({
            paddingBottom: 50,
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            maxWidth: '100vw',
            gap: 100,

            '.left-container': {
                flex: 1,
                width: '33vw',
                overflow: 'hidden',
                '.caption-container': {
                    position: 'relative',
                    display: 'flex',
                    color: colors.DARK_BROWN,
                    background: colors.DARK_WHITE,
                    borderRadius: `0px 0px 10px 0px`,
                    width: '100%',
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center'
                },
            },
            '.right-container': {
                flex: 2,
                width: '66vw',
                position: 'relative',
                paddingTop: 100,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',

            }
        })
    }

    const blogPostsStyles = createBlogPostsStyles();

    return (
        <Section isSecondary={false} sectionId="blogposts">
            <div className={blogPostsStyles}>
                <div className="left-container">
                    <div className="caption-container">
                        <h2>
                            Aktuelles
                        </h2>
                    </div>
                </div>
                <div className="right-container">
                    <BlogPostList />
                </div>
            </div>
        </Section>
    )
} 
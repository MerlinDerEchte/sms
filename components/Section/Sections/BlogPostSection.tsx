import BlogPostList from "components/BlogPostList/BlogPostList";
import { ListSection } from "../ListSection";
import { ESectionId } from "enums/sectionIds";
export const BlogPostSection = () => {

    return (
        <ListSection isSecondary={false} sectionId={ESectionId.News} caption="Aktuelles">
            <BlogPostList />
        </ListSection>
    )
} 
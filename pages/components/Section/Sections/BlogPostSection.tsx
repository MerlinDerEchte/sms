import BlogPostList from "../../BlogPostList/BlogPostList";
import { ListSection } from "../ListSection";
import { ESectionId } from "../../../enums/sectionIds";
export const BlogPostSection = ({ }) => {

    return (
        <ListSection isSecondary={true} sectionId={ESectionId.News} caption="Aktuelles">
            <BlogPostList />
        </ListSection>
    )
} 
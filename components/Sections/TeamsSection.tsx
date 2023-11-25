import TeamList from "components/TeamList/TeamList";
import { ESectionId } from "enums/sectionIds";
import { NewSection } from "../Section/NewSection";
export const TeamsSection = () => {

    return(
        <NewSection isSecondary={false} sectionId={ESectionId.Teams} caption="Unsere Teams">
            <TeamList />
        </NewSection>
    )
}

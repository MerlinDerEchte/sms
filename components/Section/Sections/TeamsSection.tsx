import TeamList from "components/TeamList/TeamList";
import { ListSection } from "../ListSection";
import { ESectionId } from "enums/sectionIds";

export const TeamsSection = () => {

    return(
        <ListSection isSecondary={true} sectionId={ESectionId.Teams} caption="Unsere Teams">
            <TeamList />
        </ListSection>
    )
}

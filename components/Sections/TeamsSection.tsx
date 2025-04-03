import TeamList from "components/TeamList/TeamList";
import { ESectionId } from "enums/sectionIds";
import { NewSection } from "../Section/NewSection";
export const TeamsSection:React.FC<{isSecondary:boolean}> = ({ isSecondary }) =>{

    return(
        <NewSection isSecondary={isSecondary} sectionId={ESectionId.Teams} >
            <TeamList />
        </NewSection>
    )
}

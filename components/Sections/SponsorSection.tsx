import { SponsorsList } from "components/Sponsors/SponsorsList";
import { ESectionId } from "enums/sectionIds";
import { NewSection } from "../Section/NewSection";
export const SponsorSection:React.FC<{isSecondary:boolean}> = ({ isSecondary }) =>{

    return (
        <NewSection isSecondary={isSecondary} sectionId={ESectionId.Sponsors} >
            <SponsorsList />
        </NewSection>
    )
} 
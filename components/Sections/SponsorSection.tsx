import { SponsorsList } from "components/Sponsors/SponsorsList";
import { ESectionId } from "enums/sectionIds";
import { NewSection } from "../Section/NewSection";
export const SponsorSection = () => {

    return (
        <NewSection isSecondary={true} sectionId={ESectionId.Sponsors} >
            <SponsorsList />
        </NewSection>
    )
} 
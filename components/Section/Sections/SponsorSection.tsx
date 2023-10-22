import { SponsorsList } from "components/Sponsors/SponsorsList";
import { ListSection } from "../ListSection";
import { ESectionId } from "enums/sectionIds";
export const SponsorSection = () => {

    return (
        <ListSection isSecondary={false} sectionId={ESectionId.Sponsors} caption="Sponsoren und Förderer">
            <SponsorsList />
        </ListSection>
    )
} 
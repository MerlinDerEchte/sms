import { ESectionId } from "enums/sectionIds"
import { BellIcon } from "icons/BellIcon"
import { GalleryIcon } from "icons/GalleryIcon";
import { GroupIcon } from "icons/GroupIcon";
import { PaperClipIcon } from "icons/PaperClipIcon";
import { SponsorIcon } from "icons/SponsorIcon";
import { UserIdIcon } from "icons/UserIdIcon";

const sectionMapToIcon = (sectionId: ESectionId) => {
    switch (sectionId) {
        case ESectionId.Events: return <BellIcon />;
        case ESectionId.Impressions: return <GalleryIcon />;
        case ESectionId.Impressum: return <PaperClipIcon />;
        case ESectionId.Kontakt: return <UserIdIcon />;
        case ESectionId.Sponsors: return <SponsorIcon />;
        case ESectionId.Teams: return <GroupIcon />;
        default: return <></>
    }
}

export const SectionIcon: React.FC<{ sectionId: ESectionId }> = ({ sectionId }) => {

    const sectionIcon = sectionMapToIcon(sectionId)

    return (
        <>{sectionIcon}</>
    )

}
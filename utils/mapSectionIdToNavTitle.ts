import { ESectionId } from "enums/sectionIds";

export const mapSectionIdToNavTitle = (sectionId: ESectionId) => {
    switch (sectionId) {
        case ESectionId.Events: return 'Aktuelles';
        case ESectionId.Teams: return 'Teams';
        case ESectionId.Kontakt: return 'Kontakt';
        case ESectionId.Impressions: return 'Impressionen';
        case ESectionId.Sponsors: return 'Sponsoren';
        case ESectionId.Impressum: return 'Impressum';
        default: return 'Impressum';
    }
}
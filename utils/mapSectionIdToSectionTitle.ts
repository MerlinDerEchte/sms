import { ESectionId } from "enums/sectionIds";

export const mapSectionIdToSectionTitle = (sectionId: ESectionId) => {
    switch (sectionId) {
        case ESectionId.Events: return 'Aktuelles';
        case ESectionId.Kontakt: return 'Kontakt';
        case ESectionId.Impressions: return 'Impressionen';
        case ESectionId.Impressum: return 'Impressum';
        case ESectionId.Sponsors: return 'Sponsoren & Förderer';
        case ESectionId.Teams: return 'Teams';
        case ESectionId.NextGames: return 'Nächste Spiele';
        default: return '';
    }
}
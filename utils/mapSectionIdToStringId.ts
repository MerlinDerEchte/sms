import { ESectionId } from "enums/sectionIds";

export const mapSectionIdToStringId = (sectionId:ESectionId) => {
    switch(sectionId){
        case ESectionId.Events: return 'news';
        case ESectionId.Impressions: return 'impressions';
        case ESectionId.Impressum: return 'impressum';
        case ESectionId.Intro: return 'intro';
        case ESectionId.Kontakt: return 'kontakt';
        case ESectionId.Sponsors: return 'sponsors';
        case ESectionId.Teams: return 'teams';
    }
}
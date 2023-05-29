import { Document } from "@contentful/rich-text-types";

export type ClubEvent = {
    title: string,
    date: Date,
    id: string,
    fotoLink: string,
    content: Document,
}
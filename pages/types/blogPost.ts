import { Document } from "@contentful/rich-text-types";

export type BlogPost = {
    id: string,
    title: string,
    fotoLink: string,
    content: Document,
}
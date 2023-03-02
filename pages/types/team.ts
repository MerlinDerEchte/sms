import { Person } from "./person";

export type Team = {
    id: string,
    name: string, 
    trainer: Person,
    bfvLink: string,
    trainingDates: string ,
    hirarchy: number,
    fotoLink: string
}
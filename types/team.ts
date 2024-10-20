import { Person } from "./person";
import { Training } from "./training"
export type Team = {
    id: string,
    name: string, 
    trainers: Person[],
    bfvLink?: string,
    trainingDates: string ,
    hirarchy: number,
    fotoLink?: string,
    trainings: Training[],
}
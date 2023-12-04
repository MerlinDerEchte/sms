import { Team } from "types/team";
import { createContext } from "react";


export const TeamContext = createContext<Team[]>([])
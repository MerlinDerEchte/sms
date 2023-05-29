import { createContext } from "react";
import { Person } from "./types/person";
export const GlobalContext = createContext({
    isMobile: false,
    screenHeight:0,
    screenWidth:0
})
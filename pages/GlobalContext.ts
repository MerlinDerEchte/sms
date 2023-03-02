import { createContext } from "react";
import { Person } from "./types/person";
export const GlobalContext = createContext({
    screenHeight:0,
    screenWidth: 0,
    isInit: false,
    isStart: false,
    isRun: false, 
    

})
import { createContext } from "react";
import { EAppStatus } from "types/appStatus";
export const GlobalContext = createContext({
    isMobile: false,
    screenHeight:0,
    screenWidth:0,
    appStatus: EAppStatus.INIT
})
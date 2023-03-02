import { EAppStatus } from "../types/appStatus"

export const getIsInit = (appStatus: EAppStatus):boolean => {
    return appStatus === EAppStatus.INIT;
}

export const getIsStart = (appStatus: EAppStatus):boolean => {
    return appStatus === EAppStatus.START;
}

export const getIsRun = (appStatus: EAppStatus):boolean => {
    return appStatus === EAppStatus.RUN
}

export const getIsOneStatusSelected = (appStatus: EAppStatus):boolean => {
    return appStatus !== EAppStatus.NONE;
}

export const getIsNoStatusSelected = (appStatus:EAppStatus):boolean => {
    return appStatus === EAppStatus.NONE; 
}
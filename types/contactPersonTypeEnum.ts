import { isString } from "util"

export enum ContactPersonType {
    ERSTERVORSTAND = '1. Vorstand',
    ZWEITERVORSTAND = '2. Vorstand',
    JUGENDLEITUNG = 'Jugendleitung',
    KASSIER = "Kassier",
    SCHRIFTFUEHRER='Schriftführer'
}

export const isStringContactPersonType = (str:string):Boolean => {
    return Object.values(ContactPersonType).includes(str as ContactPersonType)
}

export const mapStringToContactPersonType = (str:string):ContactPersonType|null => {
    if(isStringContactPersonType(str)){
        return str as ContactPersonType;
    }
}

export const getContactPersonTypeRank = (contactPersonType:ContactPersonType):number => {

    switch(contactPersonType){
        case ContactPersonType.ERSTERVORSTAND: return 1;
        case ContactPersonType.ZWEITERVORSTAND: return 2;
        case ContactPersonType.JUGENDLEITUNG: return 3;
        case ContactPersonType.KASSIER: return 4;
        case ContactPersonType.SCHRIFTFUEHRER: return 5;
        default: return 5;
    }
}
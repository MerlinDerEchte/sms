export enum TrainerType {
    TRAINER = 'Trainer',
    COTRAINER = 'Co-Trainer'
}

export const getTrainerTypeRank = (title:string ): number => {

    if (title === TrainerType.TRAINER) {
        return 0
    } else {
        return 1
    }
}

export const getIsRoleTrainerType = (role: string) => {
    if (role in [TrainerType.TRAINER, TrainerType.COTRAINER]) {
        return true
    }
    return false
}

export enum TrainerType {
    TRAINER = 'Trainer',
    TRAINERIN = 'Trainerin',
    COTRAINER = 'Co-Trainer'
}

export const getTrainerTypeRank = (title: string): number => {

    if (title === TrainerType.TRAINER || title === TrainerType.TRAINERIN) {
        return -1
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

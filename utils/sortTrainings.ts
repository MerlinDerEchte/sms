import { Training } from "types/training"
export const getDayRank = (day: string): number => {
    // Check the provided day directly
    switch (day) {
        case 'Mo':
            return 5; // Monday
        case 'Di':
            return 4; // Tuesday
        case 'Mi':
            return 3; // Wednesday
        case 'Do':
            return 2; // Thursday
        case 'Fr':
            return 1; // Friday
        default:
            return 0; // Default case for invalid input
    }
};

export const sortTrainings = (trainings: Training[]): Training[] => {
    return trainings.sort((a, b) => {
        const shortWeekdayA = a.dateAndTime.slice(0, 2)
        const shortWeekdayB = b.dateAndTime.slice(0, 2)
        return getDayRank(shortWeekdayB) - getDayRank(shortWeekdayA) 
    })
}
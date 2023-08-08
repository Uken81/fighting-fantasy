export const determineSuccess = (skillLevel: number, rollValue: number) => rollValue <= skillLevel;
export const determineCriticalSuccess = (rollValue: number) => rollValue === 18;

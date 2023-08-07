export const determineCriticalSuccess = (rollValue: number) => rollValue === 18;
export const determineSuccess = (skillLevel: number, rollValue: number) => rollValue <= skillLevel;

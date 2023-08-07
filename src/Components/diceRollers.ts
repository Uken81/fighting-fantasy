export const roll1d6 = () => Math.floor(Math.random() * 6) + 1;

export const rollNumberOfDice = (numberOfDice: number) => {
  const rollArray = new Array(numberOfDice).fill(0);
  const result = rollArray.reduce((accumulator: number) => accumulator + roll1d6(), 0);
  return result;
};

export const makeStandardRoll = () => rollNumberOfDice(3);

export const makeDamageRoll = () => rollNumberOfDice(1);

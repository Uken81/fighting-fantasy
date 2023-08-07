import { makeDamageRoll } from '../../Components/diceRollers';

const rollDamage = () => {
  //todo: change this when variable weapon damage is added.
  const damageRoll = makeDamageRoll();

  return damageRoll;
};

export const applyDamage = (defender, damageInflicted: number) => {
  if (defender === player) {
    applyPlayerDamage(damageInflicted);
  } else {
    applyOpponentDamage(damageInflicted);
  }
  // console.log(`inflicted ${damageInflicted} damage`);
};

export const applyMaxDamage = () => {
  if (defender === player) {
    applyPlayerDamage(damageInflicted);
  } else {
    applyOpponentDamage(damageInflicted);
  }
};

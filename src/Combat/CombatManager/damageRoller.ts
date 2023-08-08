import { makeDamageRoll } from '../../Components/diceRollers';
// import { Combatant } from '../../globalTypes';

export const rollDamage = () => {
  //todo: change this when variable weapon damage is added.
  const damageRoll = makeDamageRoll();

  return damageRoll;
};

// export const applyDamage = (defender: Combatant, player: Combatant) => {
//     const damageInflicted = rollDamage()
//   if (defender === player) {
//     applyPlayerDamage(damageInflicted);
//   } else {
//     applyOpponentDamage(damageInflicted);
//   }
//   // console.log(`inflicted ${damageInflicted} damage`);
// };

// export const applyMaxDamage = () => {
//     const damageInflicted = 6
//   if (defender === player) {
//     applyPlayerDamage(damageInflicted);
//   } else {
//     applyOpponentDamage(damageInflicted);
//   }
// };

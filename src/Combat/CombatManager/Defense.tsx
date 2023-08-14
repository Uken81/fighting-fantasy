import { makeStandardRoll } from '../../Components/diceRollers';
import { Combatant } from '../../globalTypes';
import { determineSuccess } from '../../Components/successCheckers';

export type DefenseOutcomes = 'defender-safe' | 'defender-hit' | 'critically-hit' | '';

export const determineDefenseOutcome = (defender: Combatant): DefenseOutcomes => {
  const defenseRoll = makeStandardRoll();

  //remove nopn null assertion!!
  const isDefenseSuccessfull = determineSuccess(defender.defense!, defenseRoll);
  // console.log('isDefenseSuccessfull', isDefenseSuccessfull);
  return isDefenseSuccessfull ? 'defender-safe' : 'defender-hit';
};

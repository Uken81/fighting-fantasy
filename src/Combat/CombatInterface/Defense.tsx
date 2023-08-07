// import { Button } from 'react-bootstrap';
import { DefenseOutcomes, RollOutcomes } from '../combatTypes';
import { makeStandardRoll } from '../../Components/diceRollers';
import { Combatant } from '../../globalTypes';
import { determineSuccess } from '../../Components/successCheckers';

const determineDefenseOutcome = (defender: Combatant): DefenseOutcomes => {
  const defenseRoll = makeStandardRoll();

  const isDefenseSuccessfull = determineSuccess(defender.defense, defenseRoll);
  // console.log('isDefenseSuccessfull', isDefenseSuccessfull);
  return isDefenseSuccessfull ? 'defender-safe' : 'defender-hit';
};

export const runDefense = (attackResult: RollOutcomes) => {
  // const attackResult = determineAttackOutcome(attacker);
  const isDefenseNeeded = checkIfDefenseNeeded(attackResult);
  if (!isDefenseNeeded) {
    return '';
  }

  if (attackResult === 'critical-success') {
    return 'critical-hit';
  }

  if (isDefenseNeeded) {
    return determineDefenseOutcome(defender);
  } else {
    return '';
  }
};

//   return (
//     <div>
//       <Button>Defend</Button>
//     </div>
//   );

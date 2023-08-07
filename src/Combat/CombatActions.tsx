import Button from 'react-bootstrap/Button';
import { Combatant } from '../globalTypes';
import { RollOutcomes } from './combatTypes';
import { makeStandardRoll } from '../Components/diceRollers';
import { determineCriticalSuccess, determineSuccess } from '../Components/successCheckers';

export const CombatActions: React.FC<{
  attacker: Combatant;
  setAttackOutcome: (value: RollOutcomes) => void;
}> = ({ attacker, setAttackOutcome }) => {
  const determineAttackOutcome = () => {
    // const attackRoll = 18;
    const attackRoll = makeStandardRoll();
    const isCriticalSuccess = determineCriticalSuccess(attackRoll);

    //Note: Critical success with attack negates defense and applies max damage
    if (isCriticalSuccess) {
      setAttackOutcome('critical-success');
      return;
    }

    const isAttackSuccessfull = determineSuccess(attacker.attack, attackRoll);
    // console.log('isAttackSuccessfull', isAttackSuccessfull);
    if (isAttackSuccessfull) {
      setAttackOutcome('success');
    } else {
      setAttackOutcome('fail');
    }
  };

  //why isnt the attackResult argument implicitly typed?

  return (
    <div>
      <Button onClick={determineAttackOutcome}>Attack</Button>
    </div>
  );
};

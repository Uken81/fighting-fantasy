import Button from 'react-bootstrap/Button';
import { Combatant } from '../../globalTypes';
import { makeStandardRoll } from '../../Components/diceRollers';
import { determineCriticalSuccess, determineSuccess } from '../../Components/successCheckers';

export type AttackOutcomes = 'critical-success' | 'success' | 'fail' | '';

export const AttackButton: React.FC<{
  attacker: Combatant;
  setAttackOutcome: (value: AttackOutcomes) => void;
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

  return (
    <div>
      <Button onClick={determineAttackOutcome}>Attack</Button>
    </div>
  );
};

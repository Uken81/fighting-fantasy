import Button from 'react-bootstrap/Button';
import { Combatant } from '../../globalTypes';
import { makeStandardRoll } from '../../Components/diceRollers';
import { determineCriticalSuccess, determineSuccess } from '../../Components/successCheckers';
import { logAttackOutcome } from '../../features/Slices/roundResultsSlice';
import { useAppDispatch } from '../../features/reduxHooks';

export type AttackOutcomes = 'critical-success' | 'success' | 'fail' | '';

export const AttackButton: React.FC<{
  attacker: Combatant;
}> = ({ attacker }) => {
  const dispatch = useAppDispatch();

  const determineAttackOutcome = () => {
    // const attackRoll = 18;
    const attackRoll = makeStandardRoll();
    const isCriticalSuccess = determineCriticalSuccess(attackRoll);

    //Note: Critical success with attack negates defense and applies max damage
    if (isCriticalSuccess) {
      dispatch(logAttackOutcome('critical-success'));
      return;
    }

    //remove non null assertion!!!
    const isAttackSuccessfull = determineSuccess(attacker.attack!, attackRoll);
    // console.log('isAttackSuccessfull', isAttackSuccessfull);
    dispatch(logAttackOutcome(isAttackSuccessfull ? 'success' : 'fail'));
  };

  return (
    <div>
      <Button onClick={determineAttackOutcome}>Attack</Button>
    </div>
  );
};

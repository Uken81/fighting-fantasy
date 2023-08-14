import { useState } from 'react';
import { Combatant } from '../../globalTypes';
import { determineDefenseOutcome } from './Defense';
import { rollDamage } from './damageRoller';
import { RoundLogger } from './RoundLogger';
import { AttackButton, AttackOutcomes } from './AttackButton';
import { Button } from 'react-bootstrap';

import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import { logDefenseOutcome } from '../../features/Slices/roundResultsSlice';

export const RoundManager: React.FC<{
  player: Combatant;
  opponent: Combatant;
  applyPlayerDamage: (value: number) => void;
  applyOpponentDamage: (value: number) => void;
}> = ({ player, opponent, applyPlayerDamage, applyOpponentDamage }) => {
  const dispatch = useAppDispatch();
  const [attacker, setAttacker] = useState(player);
  const [defender, setDefender] = useState(opponent);
  const attackOutcome = useAppSelector((state) => state.roundResultsSlice.attackOutcome);
  console.log('render');

  const checkIfDefenseNeeded = (attackResult: AttackOutcomes) => {
    if (attackResult === 'success') {
      return true;
    } else {
      return false;
    }
  };

  const applyDamage = () => {
    const damageInflicted = rollDamage();
    console.log('damage: ', damageInflicted);
    if (defender === player) {
      applyPlayerDamage(damageInflicted);
    } else {
      applyOpponentDamage(damageInflicted);
    }
  };

  const applyMaxDamage = () => {
    const damageInflicted = 6;

    if (defender === player) {
      applyPlayerDamage(damageInflicted);
    } else {
      applyOpponentDamage(damageInflicted);
    }
  };

  const switchAttacker = () => {
    if (attacker === player) {
      setAttacker(opponent);
      setDefender(player);
    } else {
      setAttacker(player);
      setDefender(opponent);
    }
  };

  const runRound = () => {
    // logCombatantRoles({attacker., defenderName})
    const isAttackCritical = attackOutcome === 'critical-success';
    if (isAttackCritical) {
      applyMaxDamage();
      switchAttacker();
      return;
    }

    const isDefenseNeeded = checkIfDefenseNeeded(attackOutcome);
    if (!isDefenseNeeded) {
      switchAttacker();
      return;
    }

    const defenseOutcome = determineDefenseOutcome(defender);
    // console.log('defenseOutcome', defenseOutcome);
    dispatch(logDefenseOutcome(defenseOutcome));
    if (defenseOutcome === 'defender-hit') {
      applyDamage();
    }

    switchAttacker();
  };

  //only for testing purposes, delete when no longer needed.
  // useEffect(() => {
  //   console.log('roundResult', roundResults);
  //   console.log(defender.name, defender.hp);
  // }, [roundResults]);

  return (
    <div>
      <div className="round-info">
        <h1>It's {attacker.name}'s Turn To Act</h1>
        <RoundLogger />
      </div>
      <AttackButton attacker={attacker} />
      <Button onClick={runRound}>Run Round</Button>
    </div>
  );
};

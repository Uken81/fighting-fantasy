import { useEffect, useState } from 'react';
import { Combatant } from '../../globalTypes';
import { DefenseOutcomes, determineDefenseOutcome } from './Defense';
import { rollDamage } from './damageRoller';
import { RoundLogger } from './RoundLogger';
import { AttackButton, AttackOutcomes } from './AttackButton';
import { Button } from 'react-bootstrap';

export interface RoundResults {
  attackerName: string;
  defenderName: string;
  attackOutcome: AttackOutcomes;
  defenseOutcome: DefenseOutcomes;
  damageResult: number;
}

export const RoundInterface: React.FC<{
  player: Combatant;
  opponent: Combatant;
  applyPlayerDamage: (value: number) => void;
  applyOpponentDamage: (value: number) => void;
}> = ({ player, opponent, applyPlayerDamage, applyOpponentDamage }) => {
  const [attacker, setAttacker] = useState(player);
  const [defender, setDefender] = useState(opponent);
  const [attackOutcome, setAttackOutcome] = useState<AttackOutcomes>('');
  console.log('render');

  //Move to RTK slice
  const [roundResults, setRoundResults] = useState<RoundResults>({
    attackerName: '',
    defenderName: '',
    attackOutcome: '',
    defenseOutcome: '',
    damageResult: 0
  });

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

  const endRound = (defenseOutcome: DefenseOutcomes) => {
    setRoundResults({
      ...roundResults,
      attackerName: attacker.name,
      defenderName: defender.name,
      attackOutcome: attackOutcome,
      defenseOutcome: defenseOutcome
      //   damageResult: damageInflicted
    });
    switchAttacker();
  };

  const runRound = () => {
    const isAttackCritical = attackOutcome === 'critical-success';
    if (isAttackCritical) {
      applyMaxDamage();
      endRound('critically-hit');
      return;
    }

    const isDefenseNeeded = checkIfDefenseNeeded(attackOutcome);
    if (!isDefenseNeeded) {
      endRound('');
      return;
    }

    const defenseOutcome = determineDefenseOutcome(defender);
    // console.log('defenseOutcome', defenseOutcome);
    if (defenseOutcome === 'defender-hit') {
      applyDamage();
    }

    endRound(defenseOutcome);
  };

  //only for testing purposes, delete when no longer needed.
  useEffect(() => {
    console.log('roundResult', roundResults);
    console.log(defender.name, defender.hp);
  }, [roundResults]);

  return (
    <div>
      <div className="round-info">
        <h1>It's {attacker.name}'s Turn To Act</h1>
        <RoundLogger roundResults={roundResults} />
      </div>
      <AttackButton attacker={attacker} setAttackOutcome={setAttackOutcome} />
      <Button onClick={runRound}>Run Round</Button>
    </div>
  );
};

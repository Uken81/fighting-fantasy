import Button from 'react-bootstrap/Button';
import { Combatant } from '../globalTypes';
import { RoundResults } from './CombatInterface/CombatInteface';
import { useEffect, useState } from 'react';
import { DefenseOutcomes, RollOutcomes } from './combatTypes';

export const CombatActions: React.FC<{
  player: Combatant;
  opponent: Combatant;
  setRoundResults: (value: RoundResults) => void;
  roundResults: RoundResults;
}> = ({ player, opponent, setRoundResults, roundResults }) => {
  const [attacker, setAttacker] = useState(player);
  const [defender, setDefender] = useState(opponent);

  const roll1d6 = () => Math.floor(Math.random() * 6) + 1;
  const rollDice = (numberOfDice: number) => {
    const rollArray = new Array(numberOfDice).fill(0);
    const result = rollArray.reduce((accumulator: number) => accumulator + roll1d6(), 0);
    return result;
  };
  const rollStandard = () => rollDice(3);

  const determineCriticalSuccess = (rollValue: number) => rollValue === 18;
  const determineSuccess = (skillLevel: number, rollValue: number) => rollValue <= skillLevel;

  //would these be better named check****Outcome??
  const determineAttackOutcome = (): RollOutcomes => {
    // const attackRoll = 18;
    const attackRoll = rollStandard();

    const isCriticalSuccess = determineCriticalSuccess(attackRoll);
    //Note: Critical success with attack negates defense and applies max damage
    if (isCriticalSuccess) {
      return 'critical-success';
    }

    const isAttackSuccessfull = determineSuccess(attacker.attack, attackRoll);
    // console.log('isAttackSuccessfull', isAttackSuccessfull);
    if (isAttackSuccessfull) {
      return 'success';
    } else {
      return 'fail';
    }
  };

  //why isnt the attackResult argument implicitly typed?
  const checkIfDefenseNeeded = (attackResult: RollOutcomes) => {
    if (attackResult === 'success') {
      return true;
    } else {
      return false;
    }
  };

  //would these be better named check****Outcome??
  const determineDefenseOutcome = (defender: Combatant): DefenseOutcomes => {
    const defenseRoll = rollStandard();

    const isDefenseSuccessfull = determineSuccess(defender.defense, defenseRoll);
    // console.log('isDefenseSuccessfull', isDefenseSuccessfull);
    return isDefenseSuccessfull ? 'defender-safe' : 'defender-hit';
  };

  const runDefense = (attackResult: RollOutcomes) => {
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

  const rollDamage = () => {
    //todo: change this when variable weapon damage is added.
    const damageRoll = rollDice(1);

    return damageRoll;
  };
  const applyDamage = (damageInflicted: number) => {
    defender.hp = defender.hp - damageInflicted;
    // console.log(`inflicted ${damageInflicted} damage`);
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
    // console.log('attacker: ', attacker, 'defender: ', defender.name);
    const attackResult = determineAttackOutcome();
    const defenseResult = runDefense(attackResult);
    let damageInflicted = 0;
    // console.log('defenseResult', defenseResult);

    if (defenseResult === 'critical-hit') {
      //todo: change this when variable weapon damage is added.
      damageInflicted = 6;
      applyDamage(damageInflicted);
    } else if (defenseResult === 'defender-hit') {
      damageInflicted = rollDamage();
      applyDamage(damageInflicted);
    }

    setRoundResults({
      ...roundResults,
      attackerName: attacker.name,
      defenderName: defender.name,
      attackResult: attackResult,
      defenseResult: defenseResult,
      damageResult: damageInflicted
    });
    switchAttacker();
  };

  //only for testing purposes, delete when no longer needed.
  useEffect(() => {
    console.log('roundResult', roundResults);
  }, [roundResults]);

  return (
    <div>
      <Button onClick={runRound}>Attack</Button>
    </div>
  );
};

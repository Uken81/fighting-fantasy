import Button from 'react-bootstrap/Button';
import { Combatant } from '../globalTypes';
export const CombatActions: React.FC<{ playerCharacter: Combatant; opponent: Combatant }> = ({
  playerCharacter,
  opponent
}) => {
  const roll1d6 = () => Math.floor(Math.random() * 6) + 1;
  const rollDice = (numberOfDice: number) => {
    const rollArray = new Array(numberOfDice).fill(0);
    const result = rollArray.reduce((accumulator: number) => accumulator + roll1d6(), 0);
    return result;
  };
  const rollStandard = () => rollDice(3);

  const determineCriticalSuccess = (rollValue: number) => rollValue === 18;
  const determineSuccess = (skillLevel: number, rollValue: number) => {
    // console.log('dS', 'skill ', skillLevel, 'roll ', rollValue);
    return rollValue <= skillLevel;
  };
  //   const determineSuccess = (skillLevel: number, rollValue: number) => rollValue <= skillLevel;

  //would these be better named check****Outcome??
  const determineAttackOutcome = (attacker: Combatant) => {
    const attackRoll = rollStandard();

    const isCriticalSuccess = determineCriticalSuccess(attackRoll);
    const isAttackSuccessfull = determineSuccess(attacker.attack, attackRoll);
    // console.log('isAttackSuccessfull', isAttackSuccessfull);

    //Note: Critical success with attack negates defense and applies max damage
    if (isCriticalSuccess) {
      return 'critical-success';
    }

    if (isAttackSuccessfull) {
      return 'success';
    } else {
      return 'fail';
    }
  };

  //would these be better named check****Outcome??
  const determineDefenseOutcome = (defender: Combatant) => {
    const defenseRoll = rollStandard();

    const isDefenseSuccessfull = determineSuccess(defender.defense, defenseRoll);
    // console.log('isDefenseSuccessfull', isDefenseSuccessfull);
    return isDefenseSuccessfull ? 'defender-safe' : 'defender-hit';
  };

  //why isnt the attackResult argument implicitly typed?
  const checkIfDefenseNeeded = (attackResult: 'critical-success' | 'success' | 'fail') => {
    if (attackResult === 'success') {
      return true;
    } else {
      return false;
    }
  };

  const runDefense = (attacker: Combatant, defender: Combatant) => {
    // const attackResult = 'critical-success';
    const attackResult = determineAttackOutcome(attacker);
    if (attackResult === 'critical-success') {
      return 'critical-hit';
    }

    const isDefenseNeeded = checkIfDefenseNeeded(attackResult);
    console.log('attackresult ', attackResult);
    if (isDefenseNeeded) {
      return determineDefenseOutcome(defender);
    }
  };

  const rollDamage = () => {
    //todo: change this when variable weapon damage is added.
    const damageRoll = rollDice(1);

    return damageRoll;
  };
  const applyDamage = (defender: Combatant, damageInflicted: number) => {
    defender.hp = defender.hp - damageInflicted;
    console.log(`inflicted ${damageInflicted} damage`);
  };

  const runRound = () => {
    const attacker: Combatant = playerCharacter;
    const defender: Combatant = opponent;
    const defenseResult = runDefense(attacker, defender);
    console.log('defenseResult', defenseResult);

    if (defenseResult === 'critical-hit') {
      //todo: change this when variable weapon damage is added.
      const damageInflicted = 6;

      applyDamage(defender, damageInflicted);
      console.log(`defender is CRITICALLY HIT for ${damageInflicted} points`);
      console.log(`defender hp: ${defender.hp}`);
    } else if (defenseResult === 'defender-hit') {
      const damageInflicted = rollDamage();

      applyDamage(defender, damageInflicted);
      console.log(`defender is hit for ${damageInflicted} points`);
      console.log(`defender hp: ${defender.hp}`);
    } else {
      console.log(defenseResult);
      console.log('attack fails');
    }
  };

  return (
    <div>
      <Button onClick={runRound}>Attack</Button>
    </div>
  );
};

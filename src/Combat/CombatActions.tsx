import Button from 'react-bootstrap/Button';
import { Combatant } from '../globalTypes';
export const CombatActions: React.FC<{ playerCharacter: Combatant; opponent: Combatant }> = ({
  playerCharacter,
  opponent
}) => {
  const playerAttackSkill = playerCharacter.attack;
  //   const playerDefenseScore = playerCharacter.defense;
  //   const playerHp = playerCharacter.hp;

  const opponentAttackSkill = opponent.attack;
  //   const opponentDefenseScore = opponent.defense;
  //   const opponentHp = opponent.hp;

  const roll1d6 = () => Math.floor(Math.random() * 6) + 1;
  const rollDice = (numberOfDice: number) => {
    const rollArray = new Array(numberOfDice).fill(0);
    const result = rollArray.reduce((accumulator: number) => accumulator + roll1d6(), 0);
    return result;
  };

  const rollAttack = () => rollDice(3);
  const determineCriticalSuccess = (rollValue: number) => rollValue === 18;
  const determineSuccess = (skillLevel: number, rollValue: number) => rollValue <= skillLevel;
  const determineAttackOutcome = (combatant: Combatant) => {
    const attackRoll = rollAttack();

    const isCriticalSuccess = determineCriticalSuccess(attackRoll);
    if (isCriticalSuccess) {
      return 'critical-success';
    }

    const isAttackSuccessfull = determineSuccess(combatant.attack, attackRoll);
    return isAttackSuccessfull ? 'success' : 'fail';
  };

  const rollDefense = (combatant: Combatant) => {
    const defenseRoll = rollDice(3);

    const isDefenseSuccessfull = determineSuccess(combatant.defense, defenseRoll);
    return isDefenseSuccessfull ? 'success' : 'fail';
  };

  const rollDamage = () => {
    const damgeRoll = rollDice(1);

    return damgeRoll;
  };

  const makeAttack = (attacker: Combatant, defender: Combatant) => {
    const attackResult = determineAttackOutcome(attacker);
    console.log('attackresult ', attackResult);
    let defenseResult = '';
    // let damageResult = 0
    let finalOutcome = '';

    if (attackResult === 'success') {
      defenseResult = rollDefense(defender);
    }

    if (defenseResult === 'fail') {
      finalOutcome = 'success';
    } else {
      finalOutcome = 'fail';
    }

    return finalOutcome;
    // if (defenseResult === 'fail') {
    //     damageResult = rollDamage()
    // }
  };

  const applyDamage = (defender: Combatant) => {
    const damageResult = rollDamage();
    console.log(`damaged for ${damageResult}`);

    defender.hp = defender.hp - damageResult;
  };

  const runRound = () => {
    const attacker: Combatant = playerCharacter;
    const defender: Combatant = opponent;
    const attackOutcome = makeAttack(attacker, defender);

    if (attackOutcome === 'success') {
      applyDamage(defender);
      console.log('attack successful');
      console.log(`defender hp: ${defender.hp}`);
    } else {
      console.log('attack fails');
    }
  };

  return (
    <div>
      <Button onClick={runRound}>Attack</Button>
      <p>
        {playerAttackSkill} {opponentAttackSkill}
      </p>
    </div>
  );
};

import { Combatant } from "../../globalTypes";
import { DefenseOutcomes, RollOutcomes } from "../combatTypes";
import { RoundResults } from "./CombatInteface";

export const RoundInterface: React.FC<{attackOutcome: RollOutcomes; defenseOutcome: DefenseOutcomes; roundResults: RoundResults; setRoundResults: (value: RoundResults)=> void; attacker: Combatant, defender: Combatant}> = ({attackOutcome, defenseOutcome, roundResults, setRoundResults}) => {
    const checkIfDefenseNeeded = (attackResult: RollOutcomes) => {
        if (attackResult === 'success') {
          return true;
        } else {
          return false;
        }
      };

      const skipToEndOfRound () => {

      }

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
        const isAttackCritical = attackOutcome === 'critical-success';
        const isDefenseNeeded = checkIfDefenseNeeded(attackOutcome);

        if (!isAttackCritical) {
            
        } 
        // console.log('attacker: ', attacker, 'defender: ', defender.name);
        // const attackResult = determineAttackOutcome();
        // const defenseOutcome = runDefense(attackResult);
        let damageInflicted = 0;
        // console.log('defenseOutcome', defenseOutcome);
    
        if (defenseOutcome === 'critical-hit') {
          //todo: change this when variable weapon damage is added.
          damageInflicted = 6;
          applyDamage(damageInflicted);
        } else if (defenseOutcome === 'defender-hit') {
          damageInflicted = rollDamage();
          applyDamage(damageInflicted);
        }
    
        setRoundResults({
          ...roundResults,
          attackerName: attacker.name,
          defenderName: defender.name,
          attackResult: attackResult,
          defenseOutcome: defenseOutcome,
          damageResult: damageInflicted
        });
        switchAttacker();
      };
    
      //only for testing purposes, delete when no longer needed.
      useEffect(() => {
        console.log('roundResult', roundResults);
      }, [roundResults]);
}
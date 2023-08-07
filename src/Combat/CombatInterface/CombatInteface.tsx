import { useState } from 'react';
import { Combatant } from '../../globalTypes';
import { CombatActions } from '../CombatActions';
import { RoundLogger } from './RoundLogger';
import { DefenseOutcomes, RollOutcomes } from '../combatTypes';
import { DefenseActions } from './Defense';
import { RoundInterface } from './RoundInterface';

export interface RoundResults {
  attackerName: string;
  defenderName: string;
  attackResult: RollOutcomes;
  defenseResult: DefenseOutcomes;
  damageResult: number;
}

export const CombatInterface: React.FC<{
  player: Combatant;
  opponent: Combatant;
  applyPlayerDamage: (damage: number) => void;
  applyOpponentDamage: (damage: number) => void;
}> = ({ player, opponent, applyPlayerDamage, applyOpponentDamage }) => {
  const [attacker, setAttacker] = useState(player);
  const [defender, setDefender] = useState(opponent);
  const [attackOutcome, setAttackOutcome] = useState<RollOutcomes>('');
  const [defenseOutcome, setDefenseOutcome] = useState<DefenseOutcomes>('');

  //Move to RTK slice
  const [roundResults, setRoundResults] = useState<RoundResults>({
    attackerName: '',
    defenderName: '',
    attackResult: '',
    defenseResult: '',
    damageResult: 0
  });

  return (
    <div className="combat-interface">
      <RoundInterface
        attackOutcome={attackOutcome}
        defenseOutcome={defenseOutcome}
        setRoundResults={setRoundResults}
        attacker={attacker}
        defender={defender}
      />
      <RoundLogger roundResults={roundResults} />

      <CombatActions
        player={player}
        opponent={opponent}
        setRoundResults={setRoundResults}
        roundResults={roundResults}
        applyPlayerDamage={applyPlayerDamage}
        applyOpponentDamage={applyOpponentDamage}
        setAttackOutcome={setAttackOutcome}
      />
      <DefenseActions setDefenseOutcomes={setDefenseOutcome} />
    </div>
  );
};

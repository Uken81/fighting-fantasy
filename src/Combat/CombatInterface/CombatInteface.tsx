import { useState } from 'react';
import { Combatant } from '../../globalTypes';
import { CombatActions } from '../CombatActions';
import { RoundLogger } from './RoundLogger';
import { DefenseOutcomes, RollOutcomes } from '../combatTypes';

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
}> = ({ player, opponent }) => {
  const [roundResults, setRoundResults] = useState<RoundResults>({
    attackerName: '',
    defenderName: '',
    attackResult: '',
    defenseResult: '',
    damageResult: 0
  });

  return (
    <div className="combat-interface">
      <RoundLogger roundResults={roundResults} />

      <CombatActions
        player={player}
        opponent={opponent}
        setRoundResults={setRoundResults}
        roundResults={roundResults}
      />
    </div>
  );
};

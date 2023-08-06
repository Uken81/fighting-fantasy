import { Combatant } from '../../globalTypes';
import { CombatActions } from '../CombatActions';
import { RoundResults } from './RoundResults';

export interface RoundResults {
  attacker: Combatant | undefined;
  defender: Combatant | undefined;
  attackResult: string;
  defenseResult: string;
  damageResult: number | undefined;
}

export const CombatInterface: React.FC<{ player: Combatant; opponent: Combatant }> = ({
  player,
  opponent
}) => {
  const roundResults: RoundResults = {
    attacker: undefined,
    defender: undefined,
    attackResult: '',
    defenseResult: '',
    damageResult: 0
  };

  const updateLog = (defenseResult: string, damageInflicted?: number) => {
    roundResults.defenseResult = defenseResult;
    roundResults.damageResult = damageInflicted;
  };

  return (
    <div className="combat-interface">
      <RoundResults />

      <CombatActions
        player={player}
        opponent={opponent}
        updateLog={updateLog}
        roundResults={roundResults}
      />
    </div>
  );
};

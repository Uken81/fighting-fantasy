import { Combatant } from '../../globalTypes';
import { CombatActions } from '../CombatActions';

export const CombatInterface: React.FC<{ player: Combatant; opponent: Combatant }> = ({
  player,
  opponent
}) => {
  return (
    <div className="combat-interface">
      <div className="result">
        <p>{player.name}</p>
        <p>{opponent.name}</p>
      </div>

      <CombatActions player={player} opponent={opponent} />
    </div>
  );
};

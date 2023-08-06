import { Combatant } from '../../globalTypes';
import { CombatantStats } from './CombatantStats';

export const StatsDisplay: React.FC<{ player: Combatant; opponent: Combatant }> = ({
  player,
  opponent
}) => {
  return (
    <div className="combatant-stats-container">
      <div className="player-stats">
        <h3>Player Stats</h3>
        <CombatantStats combatant={player} />
      </div>
      <div className="opponent-stats">
        <h3>Opponent Stats</h3>
        <CombatantStats combatant={opponent} />
      </div>
    </div>
  );
};

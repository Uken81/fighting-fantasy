import { Combatant } from '../../globalTypes';
import { CombatantStats } from './CombatantStats';

export const StatsDisplay: React.FC<{ playerCharacter: Combatant; opponent: Combatant }> = ({
  playerCharacter,
  opponent
}) => {
  return (
    <div className="combatant-stats-container">
      <div className="player-stats">
        <h3>Player Stats</h3>
        <CombatantStats combatant={playerCharacter} />
      </div>
      <div className="opponent-stats">
        <h3>Opponent Stats</h3>
        <CombatantStats combatant={opponent} />
      </div>
    </div>
  );
};

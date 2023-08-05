import { Goblin } from '../CharactetBuilds/OpponentBuilds/goblin';
import { PlayerWarrior } from '../CharactetBuilds/PlayerBuilds/warrior';
import { CombatantStats } from '../Components/Combatants/CombatantStats';

export const Arena = () => {
  const playerCharacter = new PlayerWarrior('warrior', 12, 8, 10);
  const opponent = new Goblin(8, 6, 5);

  return (
    <div>
      <div>
        <h1>Arena Page</h1>
      </div>
      <div className="combatant-stats-container">
        <div className="player-stats">
          <CombatantStats combatant={playerCharacter} />
        </div>
        <div className="opponent-stats">
          <CombatantStats combatant={opponent} />
        </div>
      </div>
    </div>
  );
};

import { Goblin } from '../CharactetBuilds/OpponentBuilds/goblin';
import { PlayerWarrior } from '../CharactetBuilds/PlayerBuilds/warrior';
import { CombatInterface } from '../Combat/CombatInterface/CombatInteface';
import { StatsDisplay } from '../Combat/Combatants/StatsDisplay';

export const Arena = () => {
  const playerCharacter = new PlayerWarrior('warrior', 12, 8, 10);
  const opponent = new Goblin(8, 6, 5);

  return (
    <div>
      <div>
        <h1>Arena Page</h1>
      </div>
      <StatsDisplay playerCharacter={playerCharacter} opponent={opponent} />
      <CombatInterface playerCharacter={playerCharacter} opponent={opponent} />
    </div>
  );
};

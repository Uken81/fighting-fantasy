import { useState } from 'react';
import { Goblin } from '../../CharactetBuilds/OpponentBuilds/goblin';
import { PlayerWarrior } from '../../CharactetBuilds/PlayerBuilds/warrior';
import { CombatInterface } from '../../Combat/CombatInterface/CombatInteface';
import { StatsDisplay } from '../../Combat/Combatants/StatsDisplay';
import './arena.css';

export const Arena = () => {
  //todo: add setters to change hp!!
  const [player] = useState(new PlayerWarrior('warrior', 12, 8, 10));
  const [opponent] = useState(new Goblin(8, 4, 15));

  return (
    <div className="arena">
      <div>
        <h1>Arena Page</h1>
      </div>
      <div className="combat-container">
        <StatsDisplay player={player} opponent={opponent} />
        <CombatInterface player={player} opponent={opponent} />
      </div>
    </div>
  );
};

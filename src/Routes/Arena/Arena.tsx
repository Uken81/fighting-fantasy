import { useState } from 'react';
import { Goblin } from '../../Components/CharactetBuilds/OpponentBuilds/goblin';
import { PlayerWarrior } from '../../Components/CharactetBuilds/PlayerBuilds/warrior';
import { StatsDisplay } from '../../Combat/Combatants/StatsDisplay';
import './arena.css';
import { RoundManager } from '../../Combat/CombatManager/RoundManager';

export const Arena = () => {
  const [player, setPlayer] = useState(new PlayerWarrior('warrior', 12, 8, 10));
  const [opponent, setOpponent] = useState(new Goblin(8, 4, 15));

  //Move the following two functions to slice when RTK implemented.
  const applyPlayerDamage = (damage: number) => {
    setPlayer((prevPlayer) => ({ ...prevPlayer, hp: prevPlayer.hp - damage }));
  };
  const applyOpponentDamage = (damage: number) => {
    setOpponent((prevOpponent) => ({ ...prevOpponent, hp: prevOpponent.hp - damage }));
  };

  return (
    <div className="arena">
      <div>
        <h1>Arena Page</h1>
      </div>
      <div className="combat-container">
        <StatsDisplay player={player} opponent={opponent} />
        <RoundManager
          player={player}
          opponent={opponent}
          applyPlayerDamage={applyPlayerDamage}
          applyOpponentDamage={applyOpponentDamage}
        />
      </div>
    </div>
  );
};

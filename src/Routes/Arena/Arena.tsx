import { useState } from 'react';
import { Goblin } from '../../CharactetBuilds/OpponentBuilds/goblin';
import { PlayerWarrior } from '../../CharactetBuilds/PlayerBuilds/warrior';
import { StatsDisplay } from '../../Combat/Combatants/StatsDisplay';
import { RoundInterface } from '../../Combat/CombatManager/RoundManager';
import './arena.css';

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
        <RoundInterface
          player={player}
          opponent={opponent}
          applyPlayerDamage={applyPlayerDamage}
          applyOpponentDamage={applyOpponentDamage}
        />
      </div>
    </div>
  );
};

import { Combatant } from '../../globalTypes';

export const CombatantStats = ({ combatant }: { combatant: Combatant }) => {
  return (
    <div className="combatant-stats">
      <h3>Player Stats</h3>
      <p>Name: {combatant.name}</p>
      <p>Attack: {combatant.attack}</p>
      <p>Defense: {combatant.defense}</p>
      <p>HP: {combatant.hp}</p>
    </div>
  );
};

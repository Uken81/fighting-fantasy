import { Combatant } from '../../globalTypes';

export const CombatantStats = ({ combatant }: { combatant: Combatant }) => {
  return (
    <div className="combatant-stats">
      <p>Name: {combatant.name}</p>
      <p>Attack: {combatant.attack}</p>
      <p>Defense: {combatant.defense}</p>
      <h4>HP:{combatant.hp}</h4>
    </div>
  );
};

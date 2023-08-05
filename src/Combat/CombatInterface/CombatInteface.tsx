import { Combatant } from '../../globalTypes';

export const CombatInterface: React.FC<{ playerCharacter: Combatant; opponent: Combatant }> = ({
  playerCharacter,
  opponent
}) => {
  return (
    <div>
      <p>{playerCharacter.name}</p>
      <p>{opponent.name}</p>
    </div>
  );
};

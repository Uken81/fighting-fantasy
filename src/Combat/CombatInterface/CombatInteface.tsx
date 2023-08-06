import { Combatant } from '../../globalTypes';
import { CombatActions } from '../combatActions';

export const CombatInterface: React.FC<{ playerCharacter: Combatant; opponent: Combatant }> = ({
  playerCharacter,
  opponent
}) => {
  return (
    <div className="combat-interface">
      <div className="result">
        <p>{playerCharacter.name}</p>
        <p>{opponent.name}</p>
      </div>

      <CombatActions playerCharacter={playerCharacter} opponent={opponent} />
    </div>
  );
};

import { Card } from 'react-bootstrap';
import { Combatant } from '../../globalTypes';

export const CombatantStats = ({ combatant }: { combatant: Combatant }) => {
  return (
    <div className="combatant-stats">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={combatant.imagePath} />
        <Card.Body>
          <Card.Title>{combatant.name}</Card.Title>
          {/* <Card.Text> */}
          <div>
            <p>Attack: {combatant.attack}</p>
            <p>Defense: {combatant.defense}</p>
            <h4>HP:{combatant.hp}</h4>
          </div>
          {/* </Card.Text> */}
        </Card.Body>
      </Card>
    </div>
  );
};

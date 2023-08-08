import { RoundResults } from './RoundManager';

export const RoundLogger: React.FC<{ roundResults: RoundResults }> = ({ roundResults }) => {
  const attacker = roundResults.attackerName;
  const defender = roundResults.defenderName;
  const attackResult = roundResults.attackOutcome;
  const defenseResult = roundResults.defenseOutcome;
  const damageInflicted = roundResults.damageResult;

  const DisplayAttackLog: React.FC = () => {
    let text: React.ReactNode;

    switch (attackResult) {
      case 'critical-success':
        text = (
          <p>
            {attacker} CRITICALY STRIKES {defender} for {damageInflicted} points of damage.
          </p>
        );
        break;
      case 'success':
        text = <p>{attacker} successfully makes attack.</p>;
        break;
      case 'fail':
        text = (
          <p>
            {attacker} fails their attack on {defender}.
          </p>
        );
        break;
      default:
        text = null;
    }

    return <div>{text}</div>;
  };

  const DisplayDefenseLog: React.FC = () => {
    let text: React.ReactNode;

    switch (defenseResult) {
      case 'defender-safe':
        text = <p>{defender} deflects the attack.</p>;
        break;
      case 'defender-hit':
        text = <p>{defender} fails to defend the attack.</p>;
        break;
      default:
        text = null;
    }

    return <div>{text}</div>;
  };

  const DisplayDamageLog: React.FC = () => {
    let text: React.ReactNode;

    if (damageInflicted > 0) {
      text = (
        <p>
          {defender} is hit for {damageInflicted} points of damage.
        </p>
      );
    } else {
      text = null;
    }

    return <div>{text}</div>;
  };

  return (
    <div className="round-results">
      <DisplayAttackLog />
      <DisplayDefenseLog />
      <DisplayDamageLog />
    </div>
  );
};

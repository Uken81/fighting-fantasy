export class Goblin {
  name: string;
  attack: number;
  defense: number;
  hp: number;

  constructor(attack: number, defense: number, hp: number) {
    this.name = 'goblin';
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
  }
}

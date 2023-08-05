// import {goblin.jpeg} from '../../assets/goblin.jpeg'
export class Goblin {
  name: string;
  attack: number;
  defense: number;
  hp: number;
  imagePath: string;

  constructor(attack: number, defense: number, hp: number) {
    this.name = 'goblin';
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.imagePath = '../../assets/goblin.jpeg';
  }
}

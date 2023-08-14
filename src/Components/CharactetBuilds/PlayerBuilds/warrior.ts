export class PlayerWarrior {
  public name: string;
  public attack: number;
  public defense: number;
  public hp: number;
  imagePath: string;

  constructor(name: string, attack: number, defense: number, hp: number) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.imagePath = '../../assets/hero.png';
  }
}

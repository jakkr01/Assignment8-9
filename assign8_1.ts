class Monster {
  name: string;
  health: number;

  constructor(name: string, health: number) {
    this.name = name;
    this.health = health;
  }

  damage(): number {
    return 10;
  }

  attack(): void {
    console.log(`${this.name} attacks!`);
  }
}

class FireMonster extends Monster {
  override attack(): void {
    console.log(`${this.name} casts Fire Blast! Deals ${this.damage() * 1.5} fire damage.`);
  }
}

class WaterMonster extends Monster {
  override attack(): void {
    console.log(`${this.name} casts Hydro Pump! Deals ${this.damage() * 1.2} water damage.`);
  }
}

class GrassMonster extends Monster {
  override attack(): void {
    console.log(`${this.name} casts Solar Beam! Deals ${this.damage() * 1.3} grass damage.`);
  }
}

function battleArena(monsters: Monster[]): void {
  for (const monster of monsters) {
    monster.attack();
  }
}

const charmander = new FireMonster("Charmander", 100);
const squirtle = new WaterMonster("Squirtle", 120);
const bulbasaur = new GrassMonster("Bulbasaur", 110);

const party: Monster[] = [charmander, squirtle, bulbasaur];

battleArena(party);
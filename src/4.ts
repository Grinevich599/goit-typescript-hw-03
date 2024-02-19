abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[];

  constructor(key: Key) {
    this.door = false;
    this.key = key;
    this.tenants = [];
  }

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log(`Hello ${person.name}, you are in house!`);
    } else {
      console.log("Your key is not valid");
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }
  openDoor(keyPerson: Key): void {
    if (this.key.getSignature() === keyPerson.getSignature()) this.door = true;
  }
}

class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key, public name: string) {}
  getKey(): Key {
    return this.key;
  }
}

const key = new Key();
const key2 = new Key();

const house = new MyHouse(key);

const person = new Person(key, "Archi");

house.openDoor(person.getKey());
house.comeIn(person);

export {};

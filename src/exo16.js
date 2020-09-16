export function Person(first, name) {
  // TODO: assigner first et name comme propriétés propres
  this.first = first;
  this.name = name;
  // valeur de retour par défaut
  //return
}

Object.assign(Person.prototype, {
  name: "",
  first: "",
  getFullName() {
    return `${this.first} ${this.name}`;
  }
});

export function User(first, name, rights) {
  // TODO: appeler le constructeur Person avec le bon contexte d'éxécution
  // 1) Avec bind
  // const personConstructor = Person.bind(this);
  // personConstructor(first, name);
  // 2) Avec call
  Person.call(this, first, name);

  // TODO: assigner rights comme propriété propre
  this.rights = rights;
}

// TODO: définir Person.prototype comme prototype de User.prototype
// solution 1
User.prototype = Object.create(Person.prototype);
User.prototype.constructor = Person;

// solution 2
Object.setPrototypeOf(User.prototype, Person.prototype);

Object.assign(User.prototype, {
  rights: [],
  hasRight(right) {
    return this.rights.includes(right);
  }
});

export const bob = new User("Bob", "Afett", ["create", "read"]);

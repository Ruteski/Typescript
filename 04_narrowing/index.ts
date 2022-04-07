// 1 - type guard
function soma(a: number | string, b: number | string) {
  if (typeof a === 'string' && typeof b === 'string') {
    console.log(parseFloat(a) + parseFloat(b));
  } else if (typeof a === 'number' && typeof b === 'number') {
    console.log(a + b);
  } else {
    console.log("impossivel realizar a soma");
  }
}

soma("4", "15")
soma(15, 25)
soma("15", 53.3)

// 2 - checando se o valor existe
function operations(arr: number[], operation?: string | undefined) {
  if (operation) {
    if (operation === 'soma') {
      const sum = arr.reduce((i, total) => total + i);
      console.log(sum);
    } else if (operation === 'multi') {
      const sum = arr.reduce((i, total) => total * i);
      console.log(sum);
    }
  } else {
    console.log("por favor, defina uma operacao");
  }
}

operations([1, 2, 3]);
operations([1, 2, 3], "soma");
operations([3, 4, 3], "multi");


// 3 - instanceof
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name);
  }
}

const jhon = new User("Jhon");
const paul = new SuperUser("Paul");

console.log(jhon);
console.log(paul);

function userGreeting(user: object) {
  if (user instanceof SuperUser) {
    console.log(`Ola ${user.name} deseja ver os dados do sistema?`);
  } else if (user instanceof User) {
    console.log(`Ola ${user.name}`);
  }
}

userGreeting(jhon)
userGreeting(paul)

// 4 - operador in
class Dog {
  nome
  raca

  constructor(nome: string, raca?: string) {
    this.nome = nome

    if (raca) {
      this.raca = raca
    }
  }
}

const turca = new Dog("Turca");
const bob = new Dog("Bob", "PittBull");

function showDogDetails(dog: Dog) {
  if ('raca' in dog) {
    console.log(`o cachorro é da raça ${dog.raca}`);
  } else {
    console.log('o cachoro é um SRD');
  }
}

showDogDetails(turca)
showDogDetails(bob)
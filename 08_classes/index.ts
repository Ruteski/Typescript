// 1 - campos em classe
class User {
  name!: string;
  age!: number;
}

const lincoln = new User();
console.log(lincoln);
lincoln.name = 'lincoln';
console.log(lincoln);


// 2 - constructor
class NewUser {
  name
  age

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const newUser = new NewUser('lincoln', 38);
console.log(newUser);


// 3 - propriedades readonly
class Car {
  name
  readonly wheels = 4

  constructor(name: string) {
    this.name = name;
  }
}

const fusca = new Car('fusca');
console.log(fusca);


// 4 - herança e super 

class Machine {
  name: string

  constructor(name: string) {
    this.name = name;
  }
}

const trator = new Machine('trator');

class KillerMachine extends Machine {
  guns: number

  constructor(name: string, guns: number) {
    super(name)
    this.guns = guns
  }
}

const destroyer = new KillerMachine('destroyer', 5);
console.log(trator);
console.log(destroyer);


// 5 - metodos
class Dwarf {
  name: string

  constructor(name: string) {
    this.name = name;
  }

  greeting() {
    console.log('hey stranger!');

  }
}

const anao = new Dwarf('jimmy');
console.log(anao.name);
anao.greeting();
console.log(anao);


// 6 - this
class Truck {
  model
  hp

  constructor(model: string, hp: number) {
    this.model = model
    this.hp = hp
  }

  showDetails() {
    console.log(`caminhao do modelo: ${this.model}, que tem ${this.hp} cavalos de potencia`);

  }
}

const caminhao = new Truck('volvo', 460)

caminhao.showDetails();


// 7 - getters
class Person {
  name: string
  surname: string

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  get fullName(): string {
    return this.name + ' ' + this.surname
  }
}

const pessoa = new Person('lincoln', 'ruteski')
console.log(pessoa.name);
console.log(pessoa.fullName);


// 8 - setters
class Coords {
  x!: number
  y!: number

  set fillX(x: number) {
    if (x === 0) {
      return
    }

    this.x = x

    console.log('x inserido com sucesso');
  }

  set fillY(y: number) {
    if (y === 0) {
      return
    }

    this.y = y

    console.log('y inserido com sucesso');
  }

  get getCoords(): string {
    return `X: ${this.x} Y: ${this.y}`
  }
}

const myCoords = new Coords()

myCoords.fillX = 15
myCoords.fillY = 10

console.log(myCoords);
console.log(myCoords.getCoords);


// 9 - herdando interfaces - implements
interface showTitle {
  itemTitle(): string
}

class blogPost implements showTitle {
  title: string

  constructor(title: string) {
    this.title = title
  }

  itemTitle(): string {
    return `o titulo do post é: ${this.title}`
  }
}

const myPost = new blogPost('hellow world')

console.log(myPost.itemTitle());


// 10 - overirde de metodos
class Base {
  someMethod() {
    console.log('alguma coisa');
  }
}

class Nova extends Base {
  someMethod() {
    console.log('testando outra coisa');
  }
}

const myObject = new Nova()

myObject.someMethod();


// 11 - public
class C {
  public x = 10
}

class D extends C { }

const c = new C()
console.log(c.x);

const d = new D()
console.log(d.x);


// 12 - protected
class E {
  protected x = 22

  protected protectedMethod() {
    console.log('este metodo é protegido');
  }
}

class F extends E {
  showX() {
    console.log(`X: ${this.x}`);
  }

  showProtectedMethod() {
    this.protectedMethod()
  }
}

const fIns = new F()
fIns.showX();

fIns.showProtectedMethod()


// 13 - private
class PrivateClass {
  private name = 'private'

  showName() {
    return this.name
  }

  private privateMethod() {
    console.log('metodo privado');
  }

  showPrivateMethod() {
    this.privateMethod()
  }
}

const pObj = new PrivateClass()
//console.log(pObj.name);
console.log(pObj.showName());
pObj.showPrivateMethod();


// 14 - static
class StaticMembers {
  static prop = 'teste static'

  static staticMethod() {
    console.log('este é um metodo estatico');

  }
}

console.log(StaticMembers.prop);
StaticMembers.staticMethod();


// 15 - generic class
class Item<T, U> {
  first
  second

  constructor(first: T, second: U) {
    this.first = first
    this.second = second
  }

  get showFirst() {
    return `o first é: ${this.first}`
  }
}

const newItem = new Item("caixa", 'supresa')
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first);

const secItem = new Item(12, true)
console.log(secItem);
console.log(secItem.showFirst);
console.log(typeof secItem.first);


// 16 - parameters properties
class ParamProperties {
  constructor(public name: string, private qty: number, private price: number) {
    this.name = name;
    this.qty = qty;
    this.price = price;
  }

  get showQty() {
    return `qtd total: ${this.qty}`
  }

  get showPrice() {
    return `valor total: ${this.price}`
  }
}

const newShirt = new ParamProperties('camisa', 5, 19.99);
console.log(newShirt.name);
console.log(newShirt.showQty);
console.log(newShirt.showPrice);


// 17 - class expression
const myClass = class <T> {
  name

  constructor(name: T) {
    this.name = name;
  }
}

const pessoaA = new myClass('jones')
console.log(pessoaA);
console.log(pessoaA.name);


// 18 - classe abstrata
abstract class AbstClass {
  abstract showName(): void;
}

class AbstExe extends AbstClass {
  name: string

  constructor(name: string) {
    super()
    this.name = name
  }

  showName(): void {
    console.log(`o nome é: ${this.name}`);
  }
}

const newAbsObj = new AbstExe('carlos')
newAbsObj.showName();


// 19 - relacao entre classes
class Dog {
  name!: string
}

class Cat {
  name!: string
}

const doguinho: Dog = new Cat();

console.log(doguinho);

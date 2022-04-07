"use strict";
// 1 - campos em classe
class User {
}
const lincoln = new User();
console.log(lincoln);
lincoln.name = 'lincoln';
console.log(lincoln);
// 2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const newUser = new NewUser('lincoln', 38);
console.log(newUser);
// 3 - propriedades readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car('fusca');
console.log(fusca);
// 4 - herança e super 
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine('trator');
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine('destroyer', 5);
console.log(trator);
console.log(destroyer);
// 5 - metodos
class Dwarf {
    constructor(name) {
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
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`caminhao do modelo: ${this.model}, que tem ${this.hp} cavalos de potencia`);
    }
}
const caminhao = new Truck('volvo', 460);
caminhao.showDetails();
// 7 - getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + ' ' + this.surname;
    }
}
const pessoa = new Person('lincoln', 'ruteski');
console.log(pessoa.name);
console.log(pessoa.fullName);
// 8 - setters
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log('x inserido com sucesso');
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log('y inserido com sucesso');
    }
    get getCoords() {
        return `X: ${this.x} Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 10;
console.log(myCoords);
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `o titulo do post é: ${this.title}`;
    }
}
const myPost = new blogPost('hellow world');
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
const myObject = new Nova();
myObject.someMethod();
// 11 - public
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const c = new C();
console.log(c.x);
const d = new D();
console.log(d.x);
// 12 - protected
class E {
    constructor() {
        this.x = 22;
    }
    protectedMethod() {
        console.log('este metodo é protegido');
    }
}
class F extends E {
    showX() {
        console.log(`X: ${this.x}`);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fIns = new F();
fIns.showX();
fIns.showProtectedMethod();
// 13 - private
class PrivateClass {
    constructor() {
        this.name = 'private';
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log('metodo privado');
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObj = new PrivateClass();
//console.log(pObj.name);
console.log(pObj.showName());
pObj.showPrivateMethod();
// 14 - static
class StaticMembers {
    static staticMethod() {
        console.log('este é um metodo estatico');
    }
}
StaticMembers.prop = 'teste static';
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 15 - generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `o first é: ${this.first}`;
    }
}
const newItem = new Item("caixa", 'supresa');
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first);
const secItem = new Item(12, true);
console.log(secItem);
console.log(secItem.showFirst);
console.log(typeof secItem.first);
// 16 - parameters properties
class ParamProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `qtd total: ${this.qty}`;
    }
    get showPrice() {
        return `valor total: ${this.price}`;
    }
}
const newShirt = new ParamProperties('camisa', 5, 19.99);
console.log(newShirt.name);
console.log(newShirt.showQty);
console.log(newShirt.showPrice);
// 17 - class expression
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoaA = new myClass('jones');
console.log(pessoaA);
console.log(pessoaA.name);
// 18 - classe abstrata
class AbstClass {
}
class AbstExe extends AbstClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`o nome é: ${this.name}`);
    }
}
const newAbsObj = new AbstExe('carlos');
newAbsObj.showName();
// 19 - relacao entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);

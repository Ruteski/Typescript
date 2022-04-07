// 1 - tipo de objeto para funcao com interface
interface IProduct {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails(product: IProduct): void {
  console.log(`o nome do produto é ${product.name} e seu preco é R$${product.price}`);

  if (product.isAvailable) {
    console.log('o produto esta disponivel');
  }
}

const product = { name: 'calcao', price: 214.55, isAvailable: true };

const shirt: IProduct = {
  name: 'camiseta',
  price: 14.55,
  isAvailable: false,
};

showProductDetails(product);
showProductDetails(shirt);


// 2 - interface com parametro opcional
interface IUser {
  email: string,
  role?: string
}

function showUserDetails(user: IUser) {
  console.log(`o usuario tem o email ${user.email}`);

  if (user.role) {
    console.log(`a funcao do usuario é ${user.role}`);
  }
}

const usuario: IUser = {
  email: 'email@email.com'
}

const usuarioRole: IUser = {
  email: 'emails123@asdf.com',
  role: 'admin'
}

showUserDetails(usuario)
showUserDetails(usuarioRole)


// 3 - propriedade readonly
interface ICar {
  brand: string
  readonly wheels: number
}

const fusca: ICar = {
  brand: 'vw',
  wheels: 4
}

console.log(fusca);


// 4 - index signature
interface ICoordObject {
  [index: string]: number
}

let coords: ICoordObject = {
  x: 10
}

coords.y = 15

console.log(coords);


// 5 - heranca de interfaces
interface IHuman {
  name: string;
  age: number
}

interface ISuperHuman extends IHuman {
  superpowers: string[]
}

const h: IHuman = {
  name: 'lincoln',
  age: 38
}

console.log(h);


const sh: ISuperHuman = {
  name: 'goku',
  age: 50,
  superpowers: ['genki dama', 'teletransporte', 'kamehameha']
}

console.log(sh);
console.log(sh.superpowers[2]);


// 6 - intersection types
interface ICharacter {
  name: string
}

interface IGun {
  type: string
  calibre: number
}

type THumanWithGun = ICharacter & IGun

const arnold: THumanWithGun = {
  name: 'arnold',
  type: 'shotgun',
  calibre: 12
}

console.log(arnold);
console.log(arnold.type);


// 7 - array readonly
let myArray: ReadonlyArray<string> = ['maca', 'laranja', 'banana']
//myArray[3] = 'mamao'
console.log(myArray);

myArray.forEach(item => {
  console.log(`fruta: ${item}`);
});

myArray = myArray.map((item) => {
  return `fruta: ${item}`
})

console.log(myArray);


// 8 - tuplas
type TFiveNumbers = [number, number, number, number, number]

const myNumberArray: TFiveNumbers = [1, 2, 3, 4, 5]
//const myNumberArray2: TFiveNumbers = [1, 2, 3, 4, 5, 6]

type TNameAndAge = [string, number]

const anotherUser: TNameAndAge = ['lincoln', 30]
console.log(anotherUser);

anotherUser[0] = 'noah'
console.log(anotherUser);


// 9 - tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
  //numbers[0] = 10
  console.log(numbers[0]);
  console.log(numbers[1]);
}

showNumbers([1, 2])
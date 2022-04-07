// 1 - generics
function showData<T>(arg: T): string {
  return `o dado é ${arg}`
}

console.log(showData(5));
console.log(showData('testando generic'));
console.log(showData(true));
console.log(showData({ teste: 'testando generic' }));
console.log(showData(['testando', 'generic']));


// 2 - constraint em generics - tipos aceitos
function showProductName<T extends { name: string }>(obj: T): string {
  return `o nome do produto é ${obj.name}`;
}

const myObj = { name: 'porta', cor: 'branca' }
const otherObj = { name: 'carro', wheels: 4, engine: 1.0 }

console.log(showProductName(myObj));
console.log(showProductName(otherObj));

// 3 - generics com interface
interface IMyObj<T, U, Q> {
  name: string
  wheels: T
  engine: U
  color: Q
}

type TCar = IMyObj<number, number, string>
type TPen = IMyObj<boolean, boolean, string>

const myCar: TCar = { name: 'fusca', wheels: 4, engine: 1500, color: 'preto' }
const myPen: TPen = { name: 'canetra bic', wheels: false, engine: false, color: 'vermelha' }
console.log(myCar);
console.log(myPen);


// 4 - type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `a chave ${key} esta presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
  hd: '2tb',
  ram: '32gb'
}

console.log(getSomeKey(server, 'ram'));
//console.log(getSomeKey(server, 'teste'));


// 5 - keyof type operator
type TCharacter = { name: string, age: number, hasDriveLicense: boolean }

type TC = keyof TCharacter

function showCharName(obj: TCharacter, key: TC): string {
  return `${obj[key]}`
}

const myChar: TCharacter = {
  name: 'lincoln',
  age: 38,
  hasDriveLicense: true
}

console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
console.log(showCharName(myChar, 'hasDriveLicense'));


// 6 - typeof type operator
const userName: string = 'lincoln'
const userName2: typeof userName = 'noah'

type x = typeof userName
const userName3: x = 'lucas'


// 7 - indexed access types
type TTruck = { km: number, kg: number, description: string }

type TKm = TTruck['km']

const newTruck: TTruck = {
  km: 10000,
  kg: 5000,
  description: 'caminhao para pouca carga'
}

function showKm(km: TKm) {
  console.log(`o veiculo tem a km de: ${km}`);
}

showKm(newTruck.km);

// 8 - conditional expressions types
interface TA { }
interface TB extends TA { }

interface TTeste {
  showName(): string
}

type TMyType = TB extends TA ? number : string

const someVar: TMyType = 5

type TMyTypeB = TTeste extends { showName(): number } ? string : boolean


// 9 - template literals types
type TTesteA = 'text'

type TCustomType = `some ${TTesteA}`

const testing: TCustomType = "some text"
//const testing2: TCustomType = "some text 2"

type a1 = 'testando'
type a2 = 'unions'
type a3 = `${a1}` | `${a2}`
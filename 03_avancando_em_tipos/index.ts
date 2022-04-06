// 1 - arrays
let numbers: number[] = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);

const nomes: string[] = ['lincoln', 'noah'];

// 2 - outra sintaxe arrays
const nums: Array<number> = [1, 2, 3];
nums.push(5);
console.log(nums);

// 3 - tipo any
const arr1: any = [1, 'teste', true, [], { nome: 'lincoln' }];
console.log(arr1);
console.log(typeof arr1);
arr1.push([1, 3, 'ruteski']);
console.log(arr1);

// 4 - tipo de parametro
function soma(a: number, b: number) {
  console.log(a + b);
}

soma(4, 5);

// 5 - tipo de retornos
function saudacao(nome: string): string {
  return `Olá ${nome}`;
}

console.log(saudacao('lincoln'));

// 6 - funcoes anonimas
setTimeout(function () {
  const salario: number = 1500;
  //console.log(parseFloat(salario));
  //console.log(salario);

}, 2000);

// 7 - tipos de objetos
function coordenadas(coord: { x: number, y: number }) {
  console.log('coordenada x ' + coord.x);
  console.log('coordenada y ' + coord.y);
}

const objCoord = { x: 329, y: 84.2 };

coordenadas(objCoord);

const pessoaObj: { nome: string, sobrenome: string } = { nome: 'lincoln', sobrenome: 'ruteski' }

// 8 - propriedades opcionais
function mostraNumero(a: number, b: number, c?: number) {
  console.log('a: ' + a);
  console.log('b: ' + b);
  if (c) console.log('c: ' + c);
}

mostraNumero(1, 2, 3);
mostraNumero(7, 5);

// 9 - validacao de parametro opcional
function saudacaoAvancada(nome: string, sobrenome?: string) {
  if (sobrenome !== undefined) {
    return `Olá, ${nome} ${sobrenome}, tudo bem?`;
  }

  return `Olá, ${nome}, tudo bem?`;
}

console.log(saudacaoAvancada('lincoln'));
console.log(saudacaoAvancada('lincoln', 'ruteski'));

// 10 - union typeof
function mostrarSaldo(saldo: number | string) {
  console.log(`O saldo da conta é R$ ${saldo}`);
}

mostrarSaldo(100);
mostrarSaldo('500');

const arr2: Array<number | string | boolean | number[]> = [100, 'teste', true, 'teste2', false, true, 15.263, [1, 6, 8, 63.69, 8.658]];
console.log(arr2);;


// 11 - avancando em union type
function showUserRole(role: boolean | string) {
  if (typeof role === "boolean") {
    return 'usuario nao aprovado';
  }

  return `a funcao do usuario é: ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole('admin'));

// 12 - type alias
type ID = string | number;

//function showId(id: number | string) {
function showId(id: ID) {
  console.log(`o id é ${id}`);
}

showId(1);
showId('200');

// 13 - introducao a interfaces
interface Point {
  x: number;
  y: number;
  z: number;
}

function showCoords(coord: Point) {
  console.log(`x: ${coord.x} y: ${coord.y} z: ${coord.z}`);
}

const coordObj: Point = {
  x: 25,
  y: 32,
  z: 45.6
}

showCoords(coordObj);

// 14 - type alias X interfaces
interface IPerson {
  name: string;
}

interface IPerson {
  age: number;
}

const somePerson: IPerson = {
  name: 'lincoln',
  age: 38,
}

console.log(somePerson);

type IPersonType = {
  name: string;
}

// type IPersonType = {
//   age: number;
// }


// 15 - literal types
let test: 'testando';
test = 'testando';

console.log(test);

function showDirection(direction: 'left' | 'rigth' | 'center') {
  console.log(`a direcao é ${direction}`);
}

showDirection('left');

// 16 - non-null assertion opertaor
const p = document.getElementById('some-p');
console.log(p!.innerText);

// 17 - bigint
let n: bigint;

n = 100n;
console.log(n);
console.log(typeof n);


// 18 - symbol
let symbolA: symbol = Symbol('a');
let symbolB = Symbol('a');
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);

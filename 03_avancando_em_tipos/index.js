"use strict";
// 1 - arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
const nomes = ['lincoln', 'noah'];
// 2 - outra sintaxe arrays
const nums = [1, 2, 3];
nums.push(5);
console.log(nums);
// 3 - tipo any
const arr1 = [1, 'teste', true, [], { nome: 'lincoln' }];
console.log(arr1);
console.log(typeof arr1);
arr1.push([1, 3, 'ruteski']);
console.log(arr1);
// 4 - tipo de parametro
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// 5 - tipo de retornos
function saudacao(nome) {
    return `Olá ${nome}`;
}
console.log(saudacao('lincoln'));
// 6 - funcoes anonimas
setTimeout(function () {
    const salario = 1500;
    //console.log(parseFloat(salario));
    //console.log(salario);
}, 2000);
// 7 - tipos de objetos
function coordenadas(coord) {
    console.log('coordenada x ' + coord.x);
    console.log('coordenada y ' + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
coordenadas(objCoord);
const pessoaObj = { nome: 'lincoln', sobrenome: 'ruteski' };
// 8 - propriedades opcionais
function mostraNumero(a, b, c) {
    console.log('a: ' + a);
    console.log('b: ' + b);
    if (c)
        console.log('c: ' + c);
}
mostraNumero(1, 2, 3);
mostraNumero(7, 5);
// 9 - validacao de parametro opcional
function saudacaoAvancada(nome, sobrenome) {
    if (sobrenome !== undefined) {
        return `Olá, ${nome} ${sobrenome}, tudo bem?`;
    }
    return `Olá, ${nome}, tudo bem?`;
}
console.log(saudacaoAvancada('lincoln'));
console.log(saudacaoAvancada('lincoln', 'ruteski'));
// 10 - union typeof
function mostrarSaldo(saldo) {
    console.log(`O saldo da conta é R$ ${saldo}`);
}
mostrarSaldo(100);
mostrarSaldo('500');
const arr2 = [100, 'teste', true, 'teste2', false, true, 15.263, [1, 6, 8, 63.69, 8.658]];
console.log(arr2);
;
// 11 - avancando em union type
function showUserRole(role) {
    if (typeof role === "boolean") {
        return 'usuario nao aprovado';
    }
    return `a funcao do usuario é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole('admin'));
//function showId(id: number | string) {
function showId(id) {
    console.log(`o id é ${id}`);
}
showId(1);
showId('200');
function showCoords(coord) {
    console.log(`x: ${coord.x} y: ${coord.y} z: ${coord.z}`);
}
const coordObj = {
    x: 25,
    y: 32,
    z: 45.6
};
showCoords(coordObj);
const somePerson = {
    name: 'lincoln',
    age: 38,
};
console.log(somePerson);
// type IPersonType = {
//   age: number;
// }
// 15 - literal types
let test;
test = 'testando';
console.log(test);
function showDirection(direction) {
    console.log(`a direcao é ${direction}`);
}
showDirection('left');
// 16 - non-null assertion opertaor
const p = document.getElementById('some-p');
console.log(p.innerText);
// 17 - bigint
let n;
n = 100n;
console.log(n);
console.log(typeof n);
// 18 - symbol
let symbolA = Symbol('a');
let symbolB = Symbol('a');
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);

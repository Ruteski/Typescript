const nome: string = "Lincoln";
const sobrenome: number = 1;
const x: boolean = true;

function greetings(nome: string) {
  console.log("Olá, ", nome);
}

greetings(nome);
// greetings(sobrenome);
// greetings(x);


function soma(a: number, b: number): number {
  return a + b;
}

console.log(soma(15, 35));
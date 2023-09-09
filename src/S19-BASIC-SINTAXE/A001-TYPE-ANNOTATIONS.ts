/* eslint-disable */

let nome: string = 'Pedrinho';
let idade: number = 21;
let valorBoolean: boolean = true;
let symbol: symbol = Symbol('$');

console.log(nome, idade, valorBoolean, symbol);

console.log('');


// ARRAYS
let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfString: Array<string> = ['Pedrinho', 'Pedrita', 'Elorriaga'];

console.log(arrayOfNumbers);
console.log(arrayOfString);

console.log('');



// OBJETOS
let pessoa: { nome: string, idade: number, empregado?: boolean } = {
    nome: 'Pedro',
    idade: 21
    // empregado? significa que o valor pode ser nulo
};

console.log(pessoa);
console.log(pessoa.nome);

console.log('');


// FUNÇÕES
function soma(x: number, y:number):number {
  return x + y;
}

console.log(soma(2000, 2));

export { pessoa }

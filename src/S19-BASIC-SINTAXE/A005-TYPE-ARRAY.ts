// ARRAY USANDO Array<T>
function sumNumbersArr(...args: Array<number>): number {
  return args.reduce((ac, currentValue) => ac + currentValue, 1);
}

console.log(sumNumbersArr(2000, 1));

// ARRAY USANDO T[]
function concStringArr(...args: string[]): string {
  return args.reduce((ac, currentValue) => ac + currentValue);
}

console.log(concStringArr('P', 'E', 'D', 'R', 'O'));

// RETORNANDO UM ARRAY DE STRINGS
function lowerCase(...args: string[]): string[] {
  return args.map((valor) => valor.toLocaleLowerCase());
}

console.log(lowerCase('ELORRIAGA'));

// ARRAY COM DOIS TIPOS

const twoTypesArr: Array<string | number> = [2002, 'pedrinho'];

console.log(twoTypesArr);

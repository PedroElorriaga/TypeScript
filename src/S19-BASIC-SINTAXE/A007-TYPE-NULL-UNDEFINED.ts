function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwo = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoString === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoString);
}

if (squareOfTwo === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwo);
}

// UNDEFINED

function createPerson(
  nome: string,
  sobrenome?: string,
): {
  nome: string;
  sobrenome?: string | undefined;
} {
  return { nome, sobrenome };
}

const pessoaUm = createPerson('Pedro');

console.log(pessoaUm);

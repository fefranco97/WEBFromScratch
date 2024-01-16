// Falando um pouco sobre Arrays - High order functions

//  Filter
let aluno = [];

function novoAluno(nome, idade) {
  return { nome, idade };
}

let alunos = [
  novoAluno("Mario", 23),
  novoAluno("Ariane", 45),
  novoAluno("Felipe", 29),
  novoAluno("Mariana", 35),
  novoAluno("Marin", 23),
  novoAluno("Martin", 65),
  novoAluno("Brenda", 15),
];

function temMenosDeTrinta(aluno) {
  return aluno.idade < 30;
}
let alunosComMenosDe30 = alunos.filter(temMenosDeTrinta);
console.log(alunos.filter(() => alunos.idade > 30));

// Map
function nomeEIdade(aluno) {
  return aluno.nome + " tem " + aluno.idade + " anos";
}

function alunoDaqui5Anos(aluno) {
  // Essa função funciona perfeitamente sem alterar o array original
  return {
    aluno: aluno.nome,
    idade: aluno.idade + 5,
  };
}

function alunoDaqui5Anos(aluno) {
  // Essa não função funciona perfeitamente e está alterando o array original
  let novoAluno = aluno;
  novoAluno.idade += 5;
  return novoAluno;
  // Tudo isso acontece pq o novo array gerado é uma referencia do original, ele não cria
  // uma nova e sim somente vira uma referencia, fazendo qualquer tipo de alteraçãom alterar o array origianl
  // Isso só acontece em objetos e arrays, em tipos primitivos(Int, string, boolean) isso não acontece
}

console.log(alunos.map(() => nomeEIdade));

// Então, como devemos proceder para realizar uma cópia real do array ou objeto?
// Arrays possuem o método Slice, onde ele recupera uma parte do array, mas se não passar uma indice, ele cópia todo array

let array1 = ["a", "b", "c", "d", "e", "f"];
let array2 = array1.slice(); // Método 1
let array3 = [...array1]; // Método 2

array2.push("g");

array3.push("g");
array3.push("h");

console.log(array1);
console.log(array2);
console.log(array3);

// Aqui o array 1 se manteve intacto e o segundo array teve uma letra adicional sem alterar o valor do array1.

// Para objetos já é um pouco diferente:

let alunoA = {
  nome: "Igor",
  idade: 15,
};
let alunoB = Object.assign({}, alunoA); // Colocando um Obj vazio o segundo objeto será clonado para dentro do primeiro, método 1

alunoB.idade = 20;

let alunoC = { ...alunoA }; // Mesma ideia do array, método 2

alunoC.idade = 25;

// Atribuição por valor, faz um cópia do elemento original, e qualquer alteração na Cópia ão vai refletir no original
// Atribuição por referência, não faz cópia, é como se desse  um novo apelido para o objeto/Array original. Qualuqer modificação no novo elemento altera também o original

// Spread operator (  ... )

// Faz uma cópia de um array ou objeto:

let spraedAlunos = { ...alunos, alunoB };
console.log(spraedAlunos);

// Utilizando Reduce operator .reduce()

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sumNumbers = numbers.reduce(
  (primeiroNumero, segundoNumero) => primeiroNumero + segundoNumero
);

function somaTotalIdadeAlunos(total, aluno) {
  return total + aluno.idade;
}

console.log(alunos.reduce(somaTotalIdadeAlunos, 0));

console.log(sumNumbers);

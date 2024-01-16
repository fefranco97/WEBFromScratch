let object = {
  nome: "Objeto",
  tipe: "Objeto",
};
object.tamo = "Junto";
object["Sou"] = "uma propriedade";
console.log(object);
// Criação deu um objeto padrão
function pessoa(nome, sobrenome) {
  return { nome: nome, sobrenome: sobrenome };
}
let person = pessoa("Fulano", "Beltrano"); // Para funções de criação de objeto não é preciso utliar NEW
console.log(person);
// Construtor de classe e Objeto
function pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}
let person2 = new pessoa2("Fulano", "Beltrano"); // Para construtores é necessário sempre utilizar o NEW
console.log(person2);

// Métodos importantes de Objetos:
person.hasOwnProperty("nome"); // Valida se a propriedade 'nome' existe
// Exemplo de uso
const validaPropriedade = (obj, prop) => obj.hasOwnProperty(prop); // Essa função retorna true ou false, caso a propriedade exista dentro do objeto
console.log(validaPropriedade());

const valores = Object.values(person); // Retorna somente os valores das propriedades de um objeto em forma de array, sendo possivel realizar a soma de todos os valores EX:
console.log(valores.reduce((v1, v2) => v1 + v2));

const chaves = Object.keys(person); // Retorna somente os valores das chaves sem as propriedades de um objeto em forma de array
console.log(chaves);

// Como Desestructurar um objeto

let aluno = {
  nome: "Fulano",
  sobrenome: "Beltrano",
  matricula: 1234,
  telefone: 9876543219,
  cidade: "Cid",
  estado: "Estado",
};

let { matricula } = aluno;

let { ...copia } = aluno;

console.log(matricula);
console.log(copia);

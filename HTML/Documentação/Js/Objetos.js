// Falando um pouco sobre objetos:

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

// Construtor de classe e Objeto
function pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

let person2 = new pessoa2("Fulano", "Beltrano"); // Para construtores é necessário sempre utilizar o NEW

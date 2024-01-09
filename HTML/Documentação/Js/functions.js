function dobro(valor) {
  console.log(valor * 2);
}

function dobro2() {
  return 2 * this.x;
}

let triplo = function (valor) {
  console.log(valor * 3);
};

const quadruplo = (valor) => {
  console.log(valor * 4);
};

let quintuplo = (valor) => 5 * valor; // this nunca funciona em Arrow functions

console.log(dobro(2));
console.log(triplo(2));
console.log(quadruplo(2));
console.log(quintuplo(2));

let number = {
  x: 5,
  d: dobro2,
};

// Callback funcion, uma função que é chamada por outra função

function ola() {
  console.log("ola");
}

function tchau() {
  console.log("tchau");
}

function saudacao(s, nome) {
  s();
  console.log(nome);
}

saudacao(ola, "Igor");

let user = ["Adriano", "Jose", "Murilo", "Andre", "Felipe", "Lorena"];

function insertUser(name, callback) {
  setTimeout(() => {
    user.push(name);
    callback();
  }, 1000);
}

function listUsers() {
  console.log(user);
}

insertUser("Igor", listUsers());

// Funções com promisse
function updateUser(nome) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      user.push(nome);
      let error = false;

      if (!error) {
        resolve();
      } else {
        reject({ mensagem: "Error de qualquer coisa" });
      }
    }, 1000);
  });

  return promise;
}

updateUser("Igor")
  .then(listUsers)
  .catch(function (error) {
    console.log(error);
  });

// Códigos assincronos

async function execute() {
  await updateUser("Igor");
  listUsers();
}

execute();

let nome = "Nome";

try {
  if (!nome) {
    throw "O Nome não pode ser vazio";
  }
  console.log(nome);
} catch (error) {
  console.log("houve um erro ", error);
} finally {
  console.log("finally");
}

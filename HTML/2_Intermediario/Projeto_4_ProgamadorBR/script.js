document.getElementById("adulto").value;

console.log(document.body);

let adultoListener = document
  .getElementById("adulto")
  .addEventListener((value) => {
    console.log(value);
  });

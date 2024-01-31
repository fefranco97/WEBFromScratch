$(() => {
  let body = $("body"); // Seleciona o Body completo
  let lista1 = $("#lista1"); // Seleciona a Lista 1

  lista1.children(".item2").fadeOut("slow"); // Pega o item2 da lista 1 e o esconde

  console.log(body.children("#testeJquery1")); // Print no console o primeiro filho da body
  console.log(body.find(".item2")); // Print no console de todos nodes que estão dentro de body e possuem a classe item2

  // Encadeamento do jQuery
  let jq = $("#lista1");

  // O jquery sempre retorna ele mesmo, ou seja ele sempre permite encadear após executar uma função
  // como o exemplo a abaixo:
  jq.slideUp("slow").slideDown().fadeOut("slow").fadeIn("slow");

  console.log(jq);
});

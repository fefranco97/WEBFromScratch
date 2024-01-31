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

  // Manipulando DOM com o jQuery
  $("#testeJquery4").children("h1").text("Meu Input Alterado");
  $("#valor").on("change", () => {
    // Cria um eventHandler de change
    console.log($("#valor").val());
  });
  $("#valor").val("Item Novo Rapazeada");
  console.log($("#valor").attr("name")); // Captura atributos da tag via jQuery
  console.log($("#valor").attr("name", "Nome Antigo")); // Altera o valor do atributos da tag via jQuery

  //.html cria Elementos HTML
  $("#lista2").html(
    "<li>Novo item 1</li><li>Novo item 2</li><li>Novo item 3</li>"
  );

  //.text adiciona um texto dentro do HTML, sem criar os elementos
  $("#lista3").text(
    "<li>Novo item 1</li><li>Novo item 2</li><li>Novo item 3</li>"
  );

  // ALtera o atributo nome dos inputs para o valor + um index
  $("#lista4")
    .children("li")
    .attr("name", (index, oValue) => {
      return oValue + index;
    });
});

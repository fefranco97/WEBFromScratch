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

  const lista4 = $("#lista4");

  // ALtera o atributo nome dos inputs para o valor + um index
  $("#lista4")
    .children("li")
    .attr("key", (index) => {
      return index;
    })
    .attr("name", (index, oValue) => {
      return oValue + index;
    });

  // Remove todos o items filhos o elemento selecionado, por exemplo remove todos os "li" do lista 4
  // $("#lista4").empty();

  lista4.append("<li class='item'>Append</li>"); // Adiciona um item no final do bloco do elemento
  lista4.prepend("<li class='item'>prepend</li>"); // Adiciona um item no inicio do bloco do elemento

  lista4.after("<p>After</p>"); // Adiciona um itm após o bloco do elemento
  lista4.before("<p>before</p>"); // Adiciona um itm antes o bloco do elemento

  // CSS com Jquery
  function clickHandler() {
    const attribute = $(this).attr("key");
    setColorDiv(attribute);
  }

  function setColorDiv(id) {
    switch (id) {
      case "btn1":
        $("[key = div1]").addClass("bg-primary");
        break;
      case "btn2":
        $("[key = div2]").removeClass("bg-primary");
        break;
      case "btn3":
        $("[key = div3]").toggleClass("bg-primary");
        break;
      case "btn4":
        $("[key = div4]").toggleClass("bg-secondary");
        break;
      case "btn5":
        $("[key = div5]").toggleClass("bg-contrast ");
        break;
      default:
        break;
    }
  }

  const allButtonsOnDiv = $(".cssBtn");

  for (button of allButtonsOnDiv) {
    let key = button.attributes["key"].value;
    $(`[key = ${key}]`).on("click", clickHandler);
  }

  //Css Dimensions com Jquery
  let box = $(".box");
  box.append(
    "Largura:",
    box.width(), // Captura a largura interna do elemento
    "<br>Largura + padding:",
    box.innerWidth(), // Captura a largura interna do elemento com os espaçamentos internos
    "<br>Largura + padding + borda:",
    box.outerWidth(),
    "<br>Largura + padding + borda + margem:",
    box.outerWidth(true)
  );
});

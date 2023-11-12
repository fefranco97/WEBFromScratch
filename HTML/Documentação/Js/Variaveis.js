// Declarações var são de escopo de função, o que significa que a variável é acessível em qualquer lugar dentro da função em que é declarada,
// mesmo antes de ser declarada. Isso é conhecido como elevação.
var variavel;

// Declarações let são de escopo de bloco, o que significa que a variável só é acessível dentro do bloco em que é declarada.
// Um bloco é uma seção de código cercada por chaves ({}).
let variavelLet;

// Aqui estão algumas boas práticas para usar let e var:

// Use let para declarar todas as variáveis, a menos que você precise especificamente do comportamento de elevação de var.
// Evite redeclarar variáveis, mesmo que sejam declaradas com var.
// Use blocos para dar escopo às suas variáveis de forma adequada.

// const é uma palavra-chave usada para declarar uma variável constante.
// Uma variável constante é uma variável cujo valor não pode ser alterado após a sua declaração.
const constante = "teste"; // Const não podem ser redeclaradas, sempre precisam ser inicializadas. Não é possivel atribuir valor novamente

// Tipo de varaiveis

// String, number, float, double

// Sting => Sempre estão entre aspas simples ou duplas "isso é uma string" 'isso tbm é uma string', números dentro de '' também são strings
// Number => nunca estão em aspas 0,1,2,3,4,5 e representam números

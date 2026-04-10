let frase =
  "toda ciencia seria superflua se houvesse coincidencia imediata entre a aparencia e a essencia das coisas";

let resultado = frase.replace(/[aeiou]/gi, "");

console.log(resultado);

/*utilizando Expressões Regulares (Regex)
O código pega uma frase famosa de Karl Marx e remove todas as vogais (tanto maiúsculas quanto minúsculas), exibindo o resultado "mudo" no console.

Principais Funções e Elementos
let frase: Declara uma variável contendo a string original.

.replace(): É o método principal. Ele busca um padrão na string e o substitui por outro valor.

/[aeiou]/gi (Expressão Regular):

[aeiou]: Define um grupo de caracteres (as vogais).

g (global): Garante que o código encontre todas as ocorrências, não apenas a primeira.

i (insensitive): Faz com que a busca ignore a diferença entre maiúsculas e minúsculas.

"": O segundo argumento do replace é uma string vazia, o que efetivamente "deleta" os caracteres encontrados.

Aplicações Práticas
Criptografia básica: Ofuscação de dados ou criação de cifras simples.

Limpeza de dados (Data Sanitization): Remover caracteres indesejados, espaços ou símbolos de inputs de usuários.

Filtros de conteúdo: Censurar palavras específicas ou remover caracteres especiais para gerar URLs amigáveis (slugs).

English: Code Explanation

The code takes a famous quote and removes all vowels (both uppercase and lowercase), logging the "consonant-only" result to the console.

Key Functions and Elements
let frase: Declares a variable storing the original string.

.replace(): The core method used. It searches for a pattern within a string and replaces it with another value.

/[aeiou]/gi (Regular Expression):

[aeiou]: Defines the set of characters to look for (the vowels).

g (global flag): Ensures the code replaces every instance found, not just the first one.

i (insensitive flag): Makes the search case-insensitive (matches 'A' and 'a').

"": The second argument is an empty string, which effectively "deletes" the matched characters.

Practical Applications
Basic Encryption: Data obfuscation or creating simple ciphers.

Data Sanitization: Removing unwanted characters, spaces, or symbols from user inputs.

Content Filtering: Censoring specific words or stripping special characters to generate URL-friendly "slugs."

Final Result:
td cnc srb sprfl sf hvvsc cncdncm dmt ntr prnc  ssnc ds css*/ 


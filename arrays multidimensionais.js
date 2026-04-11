let numeros = [3, 1, 2, 5];

let contagens = [];

for (let i = 0; i < numeros.length; i++) {
  let temp = [];

  for (let j = 1; j <= numeros[i]; j++) {
    temp.push(j);
  }

  contagens.push(temp);
}

console.log(contagens);

/* O script percorre uma lista de números e, para cada número encontrado, cria uma nova sequência que começa em 1 e vai até o valor desse número.
O resultado final é um array composto por sub-arrays de contagem.

Principais Funções e Elementos
let contagens = []: Inicializa um array vazio que servirá como o "contêiner" principal para as listas que serão criadas.

for Externo (i): Percorre cada elemento do array original numeros.

let temp = []: Cria um array temporário dentro do primeiro laço. Ele é "resetado" a cada nova iteração do laço externo.

for Interno (j): Este é o motor da contagem. Ele começa em 1 e adiciona números ao array temp até atingir o valor definido pelo número atual do array original.

.push(): Método utilizado duas vezes: primeiro para preencher a sequência no array temporário e depois para guardar esse array pronto dentro da lista principal contagens.

Aplicações Práticas
Geração de Dados para Gráficos: Criar eixos ou escalas baseadas em valores de entrada.

Processamento de Matrizes: Organizar dados em estruturas de linhas e colunas.

Algoritmos de Agrupamento: Dividir tarefas ou itens em subgrupos baseados em sua magnitude.

English: Code Explanation

The script iterates through a list of numbers and, for each number found, generates a new sequence
starting from 1 up to that number's value. The final result is an array composed of nested counting sub-arrays.

Key Functions and Elements
let contagens = []: Initializes an empty array that acts as the main "container" for the lists being created.

Outer for loop (i): Iterates through each element of the original numeros array.

let temp = []: Creates a temporary array inside the first loop. It is "reset" during every iteration of the outer loop.

Inner for loop (j): This is the counting engine. It starts at 1 and adds numbers to the temp array until it reaches the value defined by the current number from the original array.

.push(): This method is used twice: first to fill the sequence into the temporary array, and then to store that completed array inside the main contagens list.

Practical Applications
Data Generation for Charts: Creating axes or scales based on input values.

Matrix Processing: Organizing data into row-and-column structures.

Grouping Algorithms: Splitting tasks or items into subgroups based on their magnitude.

Resultado Final / Final Result:
[ [1, 2, 3], [1], [1, 2], [1, 2, 3, 4, 5] ]

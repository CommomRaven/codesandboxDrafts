let tuplas = [
  [3, 7],
  [5, 2],
  [8, 4],
  [1, 9],
  [6, 3],
];

let soma = 0;

for (let [a, b] of tuplas) {
  soma += a + b;
}

console.log(soma);

/*  

---

O script possui um array de "tuplas" (que, em JavaScript, são representadas como pequenos arrays de dois elementos). Ele percorre cada uma dessas sub-listas,
soma os dois valores internos de cada uma e acumula o total em uma variável chamada `soma`. Ao final, exibe o resultado total de todos os números somados.



### Principais Funções e Elementos
1.  **`let tuplas`**: Um array bidimensional (matriz) onde cada elemento é um par de números.
2.  **`for (let [a, b] of tuplas)`**: Este é o ponto central do código.
    * **`for...of`**: Um laço que percorre os valores de um objeto iterável.
    * **`[a, b]` (Destructuring)**: Em vez de acessar os valores como `par[0]` e `par[1]`, o código extrai os dois valores do sub-array diretamente para as variáveis `a` e `b`.
3.  **`soma += a + b`**: O operador de atribuição aditiva (`+=`) adiciona o resultado da soma de `a + b` ao valor atual da variável `soma`.
4.  **`console.log(soma)`**: Exibe o acumulado final (neste caso, **48**).

### Aplicações Práticas
* **Processamento de Coordenadas:** Somar distâncias ou manipular pontos (x, y) em sistemas de mapas ou jogos.
* **Análise de Dados Financeiros:** Calcular o total de transações onde cada par representa (entrada, saída) ou (preço, taxa).
* **Estatística:** Processar conjuntos de dados em pares para cálculos de média ou variância.

---

English: Code Explanation

### What does the code do?
The script contains an array of "tuples" (represented in JavaScript as small two-element arrays). It iterates through each of these sub-lists,
adds the two internal values of each one together, and accumulates the total in a variable called `soma`. Finally, it displays the total sum of all the numbers.

### Key Functions and Elements
1.  **`let tuplas`**: A two-dimensional array (matrix) where each element is a pair of numbers.
2.  **`for (let [a, b] of tuplas)`**: This is the core of the code.
    * **`for...of`**: A loop that iterates over the values of an iterable object.
    * **`[a, b]` (Destructuring)**: Instead of accessing values as `pair[0]` and `pair[1]`, the code extracts the two values from the sub-array directly into variables `a` and `b`.
3.  **`soma += a + b`**: The addition assignment operator (`+=`) adds the result of `a + b` to the current value of the `soma` variable.
4.  **`console.log(soma)`**: Prints the final accumulated total (in this case, **48**).

### Practical Applications
* **Coordinate Processing:** Summing distances or manipulating (x, y) points in map systems or games.
* **Financial Data Analysis:** Calculating the total of transactions where each pair represents (income, expense) or (price, tax).
* **Statistics:** Processing datasets in pairs for mean or variance calculations.

---

### Cálculo Interno / Internal Calculation:
$(3+7) + (5+2) + (8+4) + (1+9) + (6+3) = 10 + 7 + 12 + 10 + 9 = \mathbf{48}$ */

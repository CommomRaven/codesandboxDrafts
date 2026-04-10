function dividir(a, b) {
  if (b === 0) {
    throw new Error("Não é possível dividir por zero.");
  }
  return a / b;
}

try {
  let valorA = parseFloat(prompt("Digite o primeiro número:"));
  let valorB = parseFloat(prompt("Digite o segundo número:"));

  let resultado = dividir(valorA, valorB);

  console.log("Resultado:", resultado);
} catch (erro) {
  console.error("Erro:", erro.message);
}

/* Este código é um exemplo fundamental de **tratamento de exceções** e **lógica condicional** em JavaScript. 
Ele foca em tornar um programa robusto, evitando que ele trave devido a erros matemáticos ou de entrada de dados.

O script solicita dois números ao usuário e tenta realizar uma divisão. A principal característica é o uso do bloco `try...catch` 
para capturar e gerenciar erros, especificamente impedindo a divisão por zero, que é uma operação indefinida.

### Principais Funções e Elementos
1.  **`function dividir(a, b)`**: Uma função que aceita dois parâmetros. Ela contém uma guarda lógica (`if`) que verifica se o divisor é zero.

2.  **`throw new Error(...)`**: Interrompe a execução da função e dispara um "erro personalizado" se a condição de divisão por zero for atendida.

3.  **`try { ... }`**: Define um bloco de código que será "testado". Se qualquer erro ocorrer dentro dele, o JavaScript pula imediatamente para o bloco catch.

4.  **`catch (erro) { ... }`**: Captura o objeto de erro enviado pelo `throw` ou pelo próprio sistema, permitindo que o desenvolvedor exiba 
uma mensagem amigável em vez de deixar o programa "quebrar".

5.  **`parseFloat(prompt(...))`**: Captura a entrada do usuário como texto e a converte em um número decimal.

### Aplicações Práticas
* **Calculadoras e Sistemas Financeiros:** Garantir que operações matemáticas inválidas não gerem resultados infinitos ou erros de sistema.
* **Validação de Formulários:** Verificar se os dados inseridos pelo usuário são válidos antes de processá-los.
* **Conexões de API:** Lidar com falhas de rede ou respostas inesperadas do servidor sem derrubar a aplicação.

---

## 🇺🇸 English: Code Explanation

### What does the code do?
The script prompts the user for two numbers and attempts to perform a division. Its main feature is the use of the `try...catch` 
block to capture and manage errors, specifically preventing division by zero, which is an undefined operation.

### Key Functions and Elements
1.  **`function dividir(a, b)`**: A function that accepts two parameters. It contains a logical guard (`if`) that checks if the divisor is zero.

2.  **`throw new Error(...)`**: Stops the function execution and triggers a "custom error" if the division-by-zero condition is met.

3.  **`try { ... }`**: Defines a block of code to be "tested." If any error occurs inside it, JavaScript immediately jumps to the catch block.

4.  **`catch (erro) { ... }`**: Catches the error object sent by `throw` or by the system itself, allowing the developer 
to display a friendly message instead of letting the program crash.

5.  **`parseFloat(prompt(...))`**: Captures user input as text and converts it into a floating-point number (decimal).

### Practical Applications
* **Calculators and Financial Systems:** Ensuring that invalid mathematical operations do not generate infinite results or system crashes.
* **Form Validation:** Checking if the data entered by the user is valid before processing it.
* **API Connections:** Handling network failures or unexpected server responses without crashing the entire application.

---

### Exemplo de Fluxo / Flow Example:


* **Input:** `10, 2` $\rightarrow$ **Output:** `Resultado: 5`
* **Input:** `10, 0` $\rightarrow$ **Output:** `Erro: Não é possível dividir por zero.` */

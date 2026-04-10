try {
  let valor = prompt("Digite um número");
  let numero = parseInt(valor);

  if (isNaN(numero)) {
    throw new Error("Valor inválido");
  }

  console.log("Número convertido", numero);
} catch (erro) {
  console.error(erro.message);
}

/*Ele garante que o programa não processe dados inválidos quando o usuário fornece algo que não é um número.

---

O script solicita uma entrada do usuário e tenta convertê-la em um número inteiro. Se o usuário digitar algo que não possa ser convertido 
(como letras ou símbolos), o código "lança" um erro propositalmente e o captura para exibir uma mensagem amigável no console, 
em vez de deixar o programa continuar com um valor inválido.

### Principais Funções e Elementos

1.  **`parseInt(valor)`**: Tenta converter a string recebida do `prompt` em um número inteiro.

2.  **`isNaN(numero)`**: Uma função que verifica se o resultado da conversão é "Not-a-Number" (Não é um Número). É a forma padrão de validar se um dado numérico é real.

3.  **`throw new Error("Valor inválido")`**: Cria e dispara um erro manualmente. Isso interrompe o fluxo normal do bloco `try` e pula direto para o `catch`.

4.  **`try...catch`**: O mecanismo de segurança. O `try` contém o código que pode falhar, e o `catch` contém a solução caso a falha ocorra.

5.  **`console.error()`**: Exibe a mensagem de erro com um destaque visual (geralmente em vermelho) no console do desenvolvedor.

### Aplicações Práticas
* **Segurança de Interface (UI):** Impedir que cálculos matemáticos quebrem ao receber textos em campos de idade, preço ou quantidade.
* **Processamento de Arquivos:** Validar se os dados lidos de um arquivo externo estão no formato correto.
* **Interação com APIs:** Tratar casos onde o servidor envia uma resposta vazia ou em formato inesperado.

---

English: Code Explanation

The script requests input from the user and attempts to convert it into an integer.
If the user enters something that cannot be converted (such as letters or symbols), the code intentionally "throws" an error and catches it to display 
a friendly message in the console, rather than letting the program proceed with an invalid value.



### Key Functions and Elements
1.  **`parseInt(valor)`**: Attempts to convert the string received from the `prompt` into an integer.
2.  **`isNaN(numero)`**: A function that checks if the conversion result is "Not-a-Number." This is the standard way to validate if numerical data is valid.
3.  **`throw new Error("Valor inválido")`**: Manually creates and triggers an error. This stops the normal flow of the `try` block and jumps directly to the `catch`.
4.  **`try...catch`**: The safety mechanism. The `try` block contains code that might fail, and the `catch` block contains the solution if that failure occurs.
5.  **`console.error()`**: Displays the error message with visual emphasis (usually in red) in the developer console.

### Practical Applications
* **User Interface (UI) Safety:** Preventing mathematical calculations from breaking when receiving text in age, price, or quantity fields.
* **File Processing:** Validating if data read from an external file is in the correct format.
* **API Interaction:** Handling cases where the server sends an empty or unexpectedly formatted response.

---

### Exemplos de Execução / Execution Examples:
* **Input:** `"25"` $\rightarrow$ **Console:** `Número convertido 25`
* **Input:** `"abc"` $\rightarrow$ **Console:** `Valor inválido` (Erro capturado) */

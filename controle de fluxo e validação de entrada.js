let nome = "";

while (!nome) {
  nome = prompt("Digite seu nome:");
}

console.log(nome);

/* 

O script força o usuário a digitar algo no campo de entrada. Ele utiliza um laço while que continuará
abrindo uma caixa de diálogo (prompt) repetidamente enquanto a variável nome estiver vazia, for nula ou for cancelada. 
Só após o usuário digitar pelo menos um caractere é que o laço termina e o nome é exibido no console.

Principais Funções e Elementos
let nome = "": Inicializa a variável com uma string vazia. No JavaScript, uma string vazia é considerada um valor "falsy" (falso).

while (!nome): O laço de repetição. O operador de negação (!) inverte o valor de nome. Se nome estiver vazio (falso), !nome torna-se verdadeiro, mantendo o laço ativo.

prompt("Digite seu nome:"): Abre uma caixa de entrada no navegador para o usuário interagir.

console.log(nome): Só é executado quando o usuário finalmente digita um valor, saindo do ciclo de repetição.

Aplicações Práticas
Campos Obrigatórios: Garantir que informações essenciais (como login ou idade) sejam preenchidas antes de processar um formulário.

Menus de Comandos: Manter um programa rodando até que o usuário digite uma opção válida ou o comando de "Sair".

Sistemas de Jogos Simples: Solicitar o nome do jogador no início de uma partida para personalizar a experiência.

English: Code Explanation

The script forces the user to enter something into the input field. It uses a while loop that will keep opening a dialog box (prompt) repeatedly as long as the nome variable remains empty, null, or canceled. Only after the user types at least one character does the loop terminate, and the name is logged to the console.

Key Functions and Elements
let nome = "": Initializes the variable with an empty string. In JavaScript, an empty string is considered a "falsy" value.

while (!nome): The repetition loop. The logical NOT operator (!) inverts the value of nome. If nome is empty (false), !nome becomes true, keeping the loop running.

prompt("Digite seu nome:"): Opens an input box in the browser for the user to interact with.

console.log(nome): This line is only executed once the user finally provides a value, exiting the repetition cycle.

Practical Applications
Required Fields: Ensuring that essential information (like login or age) is provided before processing a form.

Command Menus: Keeping a program running until the user enters a valid option or a "Quit" command.

Simple Gaming Systems: Prompting for the player's name at the start of a match to personalize the experience.

Comportamento Lógico / Logical Behavior:
Usuário clica em "Cancelar": O laço continua (pois prompt retorna null).

Usuário clica em "OK" sem digitar nada: O laço continua (pois prompt retorna "").

Usuário digita "Pudim": O laço para e o nome é exibido.*/

try {
  let resultado = variavelNaoDeclarada + 10;
} catch (erro) {
  alert("Ocorreu um erro: " + erro.message);
}

/* O código tenta realizar uma operação matemática com uma variável que não foi definida (variavelNaoDeclarada). 
Como isso gera um erro de referência (ReferenceError), o fluxo é desviado imediatamente para o bloco catch, que exibe um alerta no navegador explicando o problema, 
em vez de simplesmente travar a página.

Principais Funções e Elementos
Bloco try: Contém o código "perigoso" que queremos testar. O JavaScript tentará executar cada linha dentro deste bloco.

variavelNaoDeclarada: O gatilho do erro. Como ela não existe no escopo, o motor do JavaScript interrompe o try no exato momento em que tenta lê-la.

Bloco catch (erro): É o "porto seguro". O parâmetro erro é um objeto que contém detalhes sobre o que falhou.

erro.message: Uma propriedade do objeto de erro que fornece uma descrição legível do problema (ex: "variavelNaoDeclarada is not defined").

alert(): Uma função do navegador que exibe uma caixa de diálogo para o usuário.

Aplicações Práticas
Depuração (Debugging): Ajudar desenvolvedores a identificar rapidamente onde e por que um código falhou durante o desenvolvimento.

Resiliência de Interface: Impedir que um erro em um pequeno componente ou script de terceiros (como um widget de chat ou banner) quebre o site inteiro.

Logs de Erro: Em sistemas reais, em vez de um alert, o catch enviaria o erro para um serviço de monitoramento para que a equipe técnica possa corrigi-lo.

English: Code Explanation

The code attempts to perform a mathematical operation using a variable that has not been declared (variavelNaoDeclarada).
Since this triggers a critical reference error (ReferenceError), the execution flow is immediately diverted to the catch block,
which shows a browser alert explaining the issue instead of letting the script crash.

Key Functions and Elements
try block: Contains the "risky" code we want to test. JavaScript will attempt to execute every line within this block.

variavelNaoDeclarada: The error trigger. Because it doesn't exist in the scope, the JavaScript engine stops the try block the moment it tries to read it.

catch (erro) block: The "safety net." The erro parameter is an object containing details about what went wrong.

erro.message: A property of the error object that provides a human-readable description of the problem (e.g., "variavelNaoDeclarada is not defined").

alert(): A browser function that displays a pop-up dialog box to the user.

Practical Applications
Debugging: Helping developers quickly identify where and why a piece of code failed during development.

Interface Resilience: Preventing an error in a small component or a third-party script (like a chat widget or banner) from breaking the entire website.

Error Logging: In real-world systems, instead of an alert, the catch block would send the error to a monitoring service so the technical team can fix it later.

Resultado Esperado / Expected Result:
Um alerta aparecerá na tela dizendo: "Ocorreu um erro: variavelNaoDeclarada is not defined".*/

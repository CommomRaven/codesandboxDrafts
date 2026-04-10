// Usar try catch ajuda a evita que o sistema quebra quando acontece algum erro
// permitindo que o codigo continue rodando

// Tambem é util para mostrar mensagens mas claras pro usuario

try {
  let resultado = variavelNaoDeclarada + 10;
} catch (erro) {
  alert("Ocorreu um erro: " + erro.message);
}

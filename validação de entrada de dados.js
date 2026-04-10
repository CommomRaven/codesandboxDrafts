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

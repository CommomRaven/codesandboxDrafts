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

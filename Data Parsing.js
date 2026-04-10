let frase = "Nesse momento, o Bitcoin está em R$ 603.015,03, Loucura, né?";

let preco = frase.match(/\d{1,3}(\.\d{3})*,\d{2}/)[0];

preco = preco.replace(/\./g, "").replace(",", ".");

let resultado = (parseFloat(preco) / 3).toFixed(2);

console.log(resultado);

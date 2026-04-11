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

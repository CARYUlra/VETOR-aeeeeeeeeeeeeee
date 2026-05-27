let vectorAEEEEEEEE = [];

for (let banana = 0; banana < 10; banana++) {
    vectorAEEEEEEEE.push(Number(prompt(`digite o ${banana + 1}º número: `)))
}

let antiGEMIO = [...new Set(vectorAEEEEEEEE)]
//[... ] (Operador Spread): Transforma o Set de volta em um vetor tradicional (com colchetes), permitindo que você use métodos normais de lista de JavaScript, como push, map, filter, etc.
alert("vetor original: " + vectorAEEEEEEEE.join(", "))
alert("vetor sem duplicatas: " + antiGEMIO.join(", "))
//não pensei em uma piada de numeros repitidos,gemios,ETC entao so fico o vetor mesmo
let lista = [];
for (let banana = 0; banana < 10; banana++) {
    lista.push(Number(prompt(`digite o ${banana + 1}º número: `)))
}

let busca = Number(prompt("digite o 1º número:\npiadas a parte, fala o numero que você quer buscar"))
let contador = 0;

for (let banana = 0; banana < lista.length; banana++) {
    if (lista[banana] === busca) {
        contador++;
    }
}

alert(`o número ${busca} aparece ${contador} vez(es) no vetor`);

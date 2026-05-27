let vetor = []
let aeeeee = 0

for (let banana = 0; banana < 10; banana++) {
    let num = Number(prompt(` fale o ${banana + 1}º numero `))
    vetor.push(num);
    if (num % 2 === 0) {
        aeeeee += num
    }
}
alert(`A soma dos números pares é: ${aeeeee}`)
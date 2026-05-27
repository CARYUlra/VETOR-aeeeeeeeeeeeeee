let a1a100 = [];

for (let hakari = 0; hakari < 7; hakari++) {
    let jackpot = Math.floor(Math.random() * 100) + 1;
    a1a100.push(jackpot);
}
alert(`os números aleatorios do caça niquel são: \n${a1a100.join(', ')}`);
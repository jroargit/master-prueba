function imparesHasta(num) {
    const impares = [];
    for (let i = 1; i <= num; i++) {
        if (i % 2 !== 0) {
        impares.push(i);
        }
    }
    return impares;
}

testFunction = imparesHasta(21)

console.log(testFunction);


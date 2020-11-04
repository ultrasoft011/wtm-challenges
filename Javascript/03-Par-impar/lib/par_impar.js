const parImpar = (number) => {
    if (typeof(number) != "number") {
        return 'no es un numero';
    }
    if (number % 2 === 0) {
        return 'par';
    }
    else {
        return 'impar';
    }
}

module.exports = parImpar; // No remover

const sumaNegativos = (array) => {

let sumNeg = 0;

    for (let i = 0; i < array.length ; i++) {
        if (array[i] >= 0) {
            continue;
        }
        else {
            sumNeg += array[i];
        }
    }
return sumNeg;
};

module.exports = sumaNegativos; // No remover.

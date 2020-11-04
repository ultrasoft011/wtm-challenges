const mayorMenor = (numero1, numero2) => {
    if (numero1 > numero2) {
		return numero1;
	}
	else if (numero2 > numero1) {
		return numero2;
	}
	else {
		return 'son iguales';
	}
};

module.exports = mayorMenor; // No remover.
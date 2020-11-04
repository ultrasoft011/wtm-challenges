const numeroAString = (numero) => {
	let strA = numero.toString();
	return strA;
};

const stringANumero = (string) => {
	var numA = parseInt(string);
	return numA; 
};

module.exports = numeroAString; // No remover
module.exports = stringANumero; // No remover


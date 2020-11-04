const debeVotar = (edad) => {
    if (edad < 18) {
        return 'No puede votar';
    }
    else if (edad >= 18 && edad < 80) {
        return 'Es obligatorio votar';
    }
    else {
        return 'No es obligatorio votar';
    }
};

module.exports = debeVotar; // No remover.
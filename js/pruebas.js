function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 carácter.',
        'Validar nombre no validó que el nombre no sea vacío.'
    );
    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'
        ) === 'Este campo debe tener menos de 50 caracteres.',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres.'
    );
    console.assert(
        validarNombre('123123123') === 'El nombre debe tener sólo letras.',
        'Validar nombre no validó que el nombre tenga sólo letras.'
    );
    console.assert(
        validarNombre('Matias') === '',
        'Validar nombre no funcionó con un nombre valido.'
    );
}
function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'Debe seleccionar una ciudad.',
        'Validar ciudad no validó que una ciudad esté seleccionada.'
    );
    console.assert(
        validarCiudad('Salta') === '',
        'Validar ciudad no funcionó con una ciudad seleccionada.'
    );
}
function probarValidarComportamiento() {
    console.assert(
        validarComportamiento('') === 'Debe seleccionar un comportamiento.',
        'Validar comportamiento no validó que un comportamiento esté seleccionado.'
    );
    console.assert(
        validarComportamiento('maso') === '',
        'Validar comportamiento no funcionó con un comportamiento seleccionado.'
    );
}
function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') ===
            'La descripción debe tener al menos 1 carácter.',
        'Validar descripción no validó que la descripción tenga al menos 1 carácter.'
    );
    console.assert(
        validarDescripcionRegalo(
            'asdfghjklqasdfghjklqasdfghjklqasdfghjklqasdfghjklqasdfghjklqasdfghjklqasdfghjklqasdfghjklqasdfghjklqasdfghjklq'
        ) === 'La descripción debe tener menos de 100 caracteres.',
        'Validar descripción no validó que la descripción tenga menos de 100 caracteres.'
    );
    console.assert(
        validarDescripcionRegalo('"#$"#%"#%"') ===
            'La descripción debe contener sólo letras y números.',
        'Validar descripción no validó que la descripción contenga sólo letras y números.'
    );
    console.assert(
        validarDescripcionRegalo('Regalo regalin') === '',
        'Validar descripción no funcionó con una descripción valida.'
    );
}
probarValidarNombre();
probarValidarCiudad();
probarValidarComportamiento();
probarValidarDescripcionRegalo();

/*
 * Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
 * Escribir pruebas para esas funciones.
 *
 * Adicional: Escribir pruebas para las funciones de tareas anteriores.
 *a
 * */

function validarFormulario(event) {
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const comportamiento = $form.comportamiento.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;
    const errores = {
        nombre: validarNombre(nombre),
        ciudad: validarCiudad(ciudad),
        comportamiento: validarComportamiento(comportamiento),
        'descripcion-regalo': validarDescripcionRegalo(descripcionRegalo),
    };
    manejarErrores(errores);
    event.preventDefault();
}

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 carácter.';
    }
    if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres.';
    }
    if (!/^[A-z]+$/.test(nombre)) {
        return 'El nombre debe tener sólo letras.';
    }
    return '';
}
function validarCiudad(ciudad) {
    if (ciudad === '') {
        return 'Debe seleccionar una ciudad.';
    }
    return '';
}
function validarComportamiento(comportamiento) {
    if (comportamiento === '') {
        return 'Debe seleccionar un comportamiento.';
    }
    return '';
}
function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return 'La descripción debe tener al menos 1 carácter.';
    }
    if (descripcionRegalo.length >= 100) {
        return 'La descripción debe tener menos de 100 caracteres.';
    }
    if (!/^[A-z0-9\s]+$/.test(descripcionRegalo)) {
        return 'La descripción debe contener sólo letras y números.';
    }
    return '';
}
function manejarErrores(errores) {
    let contadorErrores = 0;
    Object.keys(errores).forEach(function (key) {
        contadorErrores += errores[key].length;
        const errorEnLaLista = document.querySelector(`#error-${key}`);
        if (errores[key]) {
            $form[key].className = 'error';
            $form[key].value = '';
            if (!errorEnLaLista) {
                const errorLista = document.createElement('li');
                errorLista.innerText = errores[key];
                errorLista.id = `error-${key}`;
                document.querySelector('#errores').appendChild(errorLista);
            }
        } else {
            $form[key].className = '';
            if (errorEnLaLista) {
                errorEnLaLista.remove();
            }
        }
    });
    if (contadorErrores === 0) {
        document.formulario.className = 'oculto';
        document.querySelector('#exito').className = '';
        setTimeout(function () {
            window.location.href = 'wishlist.html';
        }, 5000);
    }
}

const $form = document.formulario;
$form.onsubmit = validarFormulario;

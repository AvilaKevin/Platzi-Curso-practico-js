const contenedor = document.getElementById('valores');

contadorNota = 1;

//BOTON AGREGA CASILLAS/CONTENEDORES
function agregaCasillas() {
    let divs = contenedor.children;
    contadorNota = divs.length;
    contadorNota++;
    var div = document.createElement('div');

    div.setAttribute('class', 'nota_' + contadorNota);

    div.innerHTML = '<label class="form__labels" for="input-notas"> Nota ' + contadorNota + '<input class="form__input form__input--margin_left" id="input_notas_' + contadorNota + '" type="number" placeholder="Notas" /></label><label class="form__labels" for="input-creditos"><input class="form__input form__input--margin_left" id="input_creditos_' + contadorNota + '" type="number" placeholder="Creditos" /></label><span class="closeEmoji" onclick="eliminar(this)">✖️</span>';

    contenedor.appendChild(div);

    return contadorNota;
}


//FUNCION DE ALMACENAMIENTO DE NOTAS 
function almacenamientoNotas() {
    let arrayNotas = [];

    for (var i = 1; i <= contadorNota; i++) {
        const inputNota = parseInt(document.getElementById('input_notas_' + i).value);
        const inputCreditos = parseInt(document.getElementById('input_creditos_' + i).value);
        const objetoNotas = {
            nota: inputNota,
            creditos: inputCreditos
        };

        arrayNotas.push(objetoNotas);
    }

    return arrayNotas;
}


//BOTON RESULTADO
function resultadoPonderado() {
    const resultadoHtml = document.getElementById('ResultadoP');
    let arrayNotas = almacenamientoNotas();

    var Arraysuma = [];

    for (var i = 0; i < arrayNotas.length; i++) {
        var objeto = arrayNotas[i];
        var multiplicacion = objeto.nota * objeto.creditos;
        Arraysuma.push(multiplicacion);
    }

    var sumaMultiplicacion = Arraysuma.reduce(
        function (valorAcumulado, nuevoValor) {
            return valorAcumulado + nuevoValor;
        });

    var creditos = arrayNotas.map(ArrayCreditos => ArrayCreditos.creditos);

    var sumaCreditos = creditos.reduce(
        function (creditosAcumulados, nuevosCreditos) {
            return creditosAcumulados + nuevosCreditos;
        });
    const resultado = sumaMultiplicacion / sumaCreditos;

    if (isNaN(resultado)) {
        resultadoHtml.innerHTML = "Asegurate de llenar todos los campos";
    } else {
        resultadoHtml.innerHTML = resultado;
    }
}


/**
 * METODO ELIMINA CONTENEDOR
 * @param {this} e 
 */

const eliminar = (e) => {
    const divPadre = e.parentNode;
    contenedor.removeChild(divPadre);
    actualizarContador();
};


// METODO ACTUALIZA CONTADOR
const actualizarContador = () => {
    let divs = contenedor.children;
    contadorNota = 0;
    for (let i = 0; i < divs.length; i++) {
        contadorNota++
        divs[i].children[0].innerHTML = 'Nota ' + contadorNota + '<input class="form__input form__input--margin_left" id="input_notas_' + contadorNota + '" type="number" placeholder="Notas" />';
        divs[i].children[1].innerHTML = '<input class="form__input form__input--margin_left" id="input_creditos_' + contadorNota + '" type="number" placeholder="Creditos" />';
    }
};


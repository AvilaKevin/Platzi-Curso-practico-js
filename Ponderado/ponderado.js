const contenedor = document.getElementById('valores');

contadorNota = 1;

//!-- --- CONEXION HTML --- --!//
function agregaCasillas() {
    //para que no haya ningun problema al momento de agregar nuevos campos se despues de haber eliminado algunos, se debio haver lo siguiente: 
    //Esto me trae los hijos del contenedor, en este caso son los divs
    let divs = contenedor.children;
    contadorNota = divs.length;
    //Fin
    contadorNota++;

    //Se crea el elemento / en este caso es el contenedor
    var div = document.createElement('div');
    //Se le agregan atributos al div
    div.setAttribute('class', 'nota_' + contadorNota);

    //Se procede introducir elementos dentro del div
    div.innerHTML = '<label class="form__labels" for="input-notas"> Nota ' + contadorNota + '<input class="form__input form__input--margin_left" id="input_notas_' + contadorNota + '" type="number" placeholder="Notas" /></label><label class="form__labels" for="input-creditos"><input class="form__input form__input--margin_left" id="input_creditos_' + contadorNota + '" type="number" placeholder="Creditos" /></label><button onclick="eliminar(this)">Eliminar</button>';

    //Se renderiza el div
    contenedor.appendChild(div);

    // si queremos utilizar el contador para otras cosas se usa el return
    return contadorNota;
}


function almacenamientoNotas() {
    let arrayNotas = [];

    //Mediante un for se procede a capturar los datos del input utilizando como identificador el contador
    for (var i = 1; i <= contadorNota; i++) {
        const inputNota = parseInt(document.getElementById('input_notas_' + i).value);
        const inputCreditos = parseInt(document.getElementById('input_creditos_' + i).value);

        //Por cada nota se crea un objeto
        const objetoNotas = {
            nota: inputNota,
            creditos: inputCreditos
        };

        //Se almacena el objeto dentro del array
        arrayNotas.push(objetoNotas);
    }

    //Se devuelve array para usarlo posteriormente
    return arrayNotas;
}


function resultadoPonderado() {
    const resultadoHtml = document.getElementById('ResultadoP');
    let arrayNotas = almacenamientoNotas();
    //1. Se crea un array el cual almacena el resultado del for
    var Arraysuma = [];


    //2. Leer el array, traera la primera posicion del array, realizar la operacion, almacenar los resultados en un nuevo array, y asi con todos los objetos del array.
    for (var i = 0; i < arrayNotas.length; i++) {
        var objeto = arrayNotas[i]; // Esta variable almacena el objeto del array, para luego acceder a las propiedades del mismo.
        var multiplicacion = objeto.nota * objeto.creditos; // se accede a las propiedades del objeto.
        Arraysuma.push(multiplicacion); // aqui se indica en q array se gurda el resultado.
    }


    //3. Se lee el Arraysuma y se realiza la suma de los valores.
    var sumaMultiplicacion = Arraysuma.reduce(
        function (valorAcumulado, nuevoValor) {
            return valorAcumulado + nuevoValor;
        });


    //4. Se extrae los creditos en un array por separado.
    var creditos = arrayNotas.map(ArrayCreditos => ArrayCreditos.creditos);


    //5. Se lee el array de los creditos y se realiza la suma de estos.
    // El metodo reduce ejecuta una funcion por cada elemento del array.
    var sumaCreditos = creditos.reduce(
        function (creditosAcumulados, nuevosCreditos) {
            return creditosAcumulados + nuevosCreditos;
        });

    //6. Se crea variable para dar resultado
    const resultado = sumaMultiplicacion / sumaCreditos;

    if (isNaN(resultado)) {
        resultadoHtml.innerHTML = "Asegurate de llenar todos los campos";
    } else {
        resultadoHtml.innerHTML = resultado;
    }
}

/**
 * Método para eliminar el div contenedor del input
 * @param {this} e 
 */
const eliminar = (e) => {
    const divPadre = e.parentNode;
    contenedor.removeChild(divPadre);
    actualizarContador();
};

/**
 * Método para actualizar el contador de los elementos agregados
*/
const actualizarContador = () => {
    let divs = contenedor.children;
    contadorNota = 0;
    for (let i = 0; i < divs.length; i++) {
        contadorNota++
        //Esto indica en donde se va a introducir los elementos
        divs[i].children[0].innerHTML = 'Nota ' + contadorNota + '<input class="form__input form__input--margin_left" id="input_notas_' + contadorNota + '" type="number" placeholder="Notas" />';
        divs[i].children[1].innerHTML = '<input class="form__input form__input--margin_left" id="input_creditos_' + contadorNota + '" type="number" placeholder="Creditos" />';
    }
};


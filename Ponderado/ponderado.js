var ponderado = [
    {
        nota: 10,
        creditos: 2
    },
    {
        nota: 8,
        creditos: 5
    },
    {
        nota: 7,
        creditos: 5
    }
]


//1. Se crea un array el cual almacena el resultado del for
var Arraysuma = [];


//2. Leer el array, traera la primera posicion del array, realizar la operacion, almacenar los resultados en un nuevo array, y asi con todos los objetos del array.
for (var i = 0; i < ponderado.length; i++) {
    var objeto = ponderado[i]; // Esta variable almacena el objeto del array, para luego acceder a las propiedades del mismo.
    var multiplicacion = objeto.nota * objeto.creditos; // se accede a las propiedades del objeto.
    Arraysuma.push(multiplicacion); // aqui se indica en q array se gurda el resultado.
}


// // El paso 2 se pudo hacer con el metodo .map:
// const notesWithCredit = ponderado.map(function (noteObject) {
//     return noteObject.nota * noteObject.creditos;
// });


//3. Se lee el Arraysuma y se realiza la suma de los valores.
var sumaMultiplicacion = Arraysuma.reduce(
    function (valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    });


//4. Se extrae los creditos en un array por separado.
var creditos = ponderado.map(ArrayCreditos => ArrayCreditos.creditos);


//5. Se lee el array de los creditos y se realiza la suma de estos.
// El metodo reduce ejecuta una funcion por cada elemento del array.
var sumaCreditos = creditos.reduce(
    function (creditosAcumulados, nuevosCreditos) {
        return creditosAcumulados + nuevosCreditos;
    });

//6. Se crea variable para dar resultado
const resultado = sumaMultiplicacion / sumaCreditos;

//Se crea contador para poder identificar los nuevos inputs que se van creando
contadorNota = 1;

// CONEXION HTML
function agregaCasillas() {
    //Se crea contador
    contadorNota++;

    //Se crea el elemento / en este caso es el contenedor
    var div = document.createElement('div');
    //Se le agregan atributos al alemento
    div.setAttribute('class', 'nota_' + contadorNota);

    //Se procede introducir elementos dentro del div
    div.innerHTML = '<label class="form__labels" for="input-notas"> Nota ' + contadorNota + '<input class="form__input form__input--margin_left" id="input_notas_' + contadorNota + '" type="number" placeholder="Notas" /></label><label class="form__labels" for="input-creditos"><input class="form__input form__input--margin_left" id="input_creditos_' + contadorNota + '" type="number" placeholder="Creditos" /></label>';

    //Se renderiza el div /
    document.getElementById('valores').appendChild(div);

    // si queremos utilizar el contador para otras cosas se usa el return
    return contadorNota;
}

function resultadoPonderado() {
    //Se crea array para almacenar los objetos
    let valores = [];

    //Mediante un for se procede a capturar los datos del input utilizando como identificador el contador
    for (var i = 0; i < contadorNota; i++) {
        const inputNota = parseInt(document.getElementById('input_notas_' + contadorNota).value);
        const inputCreditos = parseInt(document.getElementById('input_creditos_' + contadorNota).value);
        //Por cada nota se crea un objeto
        const objetoNotas = {
            nota: inputNota,
            creditos: inputCreditos
        };
        //Se almacena el objeto dentro del array
        valores.push(objetoNotas);
        console.log(valores);
    }
}
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

const contenedor = document.getElementById('valores');

contadorNota = 1;

//!-- --- CONEXION HTML --- --!//
function agregaCasillas() {
    contadorNota++;

    //Se crea el elemento / en este caso es el contenedor
    var div = document.createElement('div');
    //Se le agregan atributos al div
    div.setAttribute('class', 'nota_' + contadorNota);

    //Se procede introducir elementos dentro del div
    div.innerHTML = '<label class="form__labels" for="input-notas"> Nota ' + contadorNota + '<input class="form__input form__input--margin_left" id="input_notas_' + contadorNota + '" type="number" placeholder="Notas" /></label><label class="form__labels" for="input-creditos"><input class="form__input form__input--margin_left" id="input_creditos_' + contadorNota + '" type="number" placeholder="Creditos" /></label>';

    //Se renderiza el div
    contenedor.appendChild(div);

    // si queremos utilizar el contador para otras cosas se usa el return
    return contadorNota;
}

//Se crea array para almacenar los objetos
let arrayValores = [];

function resultadoPonderado() {
    console.log(contadorNota)
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
        arrayValores.push(objetoNotas);
    }

    console.log(arrayValores);
    return arrayValores;
}

// actualizarContador();
// function actualizarContador() {
//     let divs = contenedor.children;
//     contadorNota = 1;
//     for (let i = 0; i < divs.length; i++) {
//         divs[i].children[1].innerHTML = contadorNota++;
//     }
// }
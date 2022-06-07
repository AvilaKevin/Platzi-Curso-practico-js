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


//1. Se crea un array el cueal almacena el resultado del for
var Arraysuma = [];


//2. Leer el array, traera la primera posicion del array, realizar la operacion, almacenar los resultados en un nuevo array, y asi con todos los objetos del array.
for ( var i = 0; i < ponderado.length; i++ ){
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
    function (valorAcumulado, nuevoValor){
        return valorAcumulado + nuevoValor;
    });


//4. Se extrae los creditos en un array por separado.
var creditos = ponderado.map( ArrayCreditos => ArrayCreditos.creditos);


//5. Se lee el array de los creditos y se realiza la suma de estos.
// El metodo reduce ejecuta una funcion por cada elemento del array.
var sumaCreditos = creditos.reduce( 
    function (creditosAcumulados, nuevosCreditos){
        return creditosAcumulados + nuevosCreditos;
    });

//6. Se crea variable para dar resultado
const resultado = sumaMultiplicacion/sumaCreditos;

console.log(resultado);
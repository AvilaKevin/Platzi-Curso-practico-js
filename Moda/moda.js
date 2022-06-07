var lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    3,
];


lista1Count = {};


lista1.map(
    function (elemento){
        if (lista1Count[elemento]){
            lista1Count[elemento] = lista1Count[elemento] + 1;
            // lista1Count[elemento] += 1; // Es es lo mismo q arriba pero mas corto.
        }else{
            lista1Count[elemento] = 1;
        }
    }
);


const ArrayConvert = Object.entries(lista1Count).sort( // Object.entries nos transforma un elemento en un array.
    function (valorAcumulado, nuevoValor){
        return valorAcumulado[1] - nuevoValor[1]; // nuevoValor[1] se hace de este modo para que se realice la validacion sobre la segunda posicion, la cual nos indica cual se repite mas.
    }
);

// la  moda es la ultima posicion de ArrayConvert asi que se debe hacer lo siguiente:

const moda = ArrayConvert[ArrayConvert.length - 1]; // array.length = 4 elementos por lo tanto para acceder al ultimo elemento debo resta 1 puesto que el array inicia en 0.

var valorIngresado = moda[0];
var repeticiones = moda[1];

console.log("El valor: " + valorIngresado + " Se repite: " + repeticiones + " veces");
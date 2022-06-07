const lista1 = [
    100,
    200,
    4000000,
    1000,
    800,
];


// 0. Se organiza array
function comparacion(a,b){
    return a - b;
}

lista1.sort(comparacion)

console.log (lista1);


// 1. Validar si la lista es par o impar:
function esPar(numerito){ 
    if (numerito % 2 == 0){ // si numerito divido a la mitad genera residuo igual a 0 entonces: / % hace referencia a modulo o residuo
        return true;
    }else {
        return false;
    }
}


// 2. Se crea una varible para que me muestre el numero que esta en la mitad "Si es q es impar la lista"
const mitadLista1 = parseInt(lista1.length / 2); // se utilizo parseint para que retorne un resultado sin decimales


// 3. Se crea una variable que almacene el resultado
let mediana;


if(esPar(lista1.length)){

}else{
    mediana = lista1[mitadLista1];
}
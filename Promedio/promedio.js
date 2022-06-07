function calcularMediaAritmetica(lista){

    // // leer array con un for:
    // let sumalista = 0;
    // // Se crea un for para leer el array y hacer la suma
    // for (let i = 0; i < lista.length; i++){
    //     sumalista = sumalista + lista[i];   // al iniciar en 0 tomara el valor de la posicion 0 del array al momento de hacer la suma, luego empezara a sumar los valores del array.
    // }

    const sumaLista = lista.reduce( // este metodo ejecuta una funcion por cada elemento de un array.
        function (valorAcumulado = 0, nuevoElemento){ // en este caso valorAcumulado debe ser 0 para q lea el primer elemento del array, este sera nuestro contador.
            return valorAcumulado + nuevoElemento;
        }
    )
    
    const promedioLista = sumaLista / lista.length; // Se realiza el promedio 

    return promedioLista;
}

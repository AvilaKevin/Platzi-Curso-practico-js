/// --- -- CONEXION HTML -- --- ///
function resultadoModa() {
    // VARIABLES
    const lista = document.getElementById("input-lista").value;
    const ResultadoP = document.getElementById("ResultadoP");
    const listaModificada = lista.split(",");
    const numberArray = listaModificada.map(Number);

    if (numberArray.length === 1) {
        ResultadoP.innerText = "Asegurate de haber introducido un valor válido";
    } else {
        // CONTADOR
        listaCount = {};

        numberArray.map(
            function (elemento) {
                if (listaCount[elemento]) {
                    listaCount[elemento] = listaCount[elemento] + 1;
                } else {
                    listaCount[elemento] = 1;
                }
            }
        );

        // CONVERSOR
        const ArrayConvert = Object.entries(listaCount).sort(
            function (valorAcumulado, nuevoValor) {
                return valorAcumulado[1] - nuevoValor[1];
            }
        );

        const moda = ArrayConvert[ArrayConvert.length - 1];

        var valorIngresado = moda[0];
        var repeticiones = moda[1];

        // RESULTADO
        ResultadoP.innerText = ("El numero: " + valorIngresado + " se repite: " + repeticiones + " veces");
    }
}
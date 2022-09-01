// ORGANIZA ARRAY
function comparacion(a, b) {
    return a - b;
}

function resultadoPromedio() {
    // VARIABLES
    const lista = document.getElementById("input-lista").value;
    const ResultadoP = document.getElementById("ResultadoP");
    const listaModificada = lista.split(",");
    const numberArray = listaModificada.map(Number);
    numberArray.sort(comparacion);

    const sumaLista = numberArray.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / numberArray.length;

    if (promedioLista == 0) {
        ResultadoP.innerHTML = 'Asegurate de haber introducido un valor valido.';
    } else {
        ResultadoP.innerHTML = promedioLista;
    }
}

// ORGANIZA ARRAY
function comparacion(a, b) {
  return a - b;
}

// VALIDACION PAR
function esPar(numero) {
  if (numero % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

/// --- -- CONEXION HTML -- --- ///
function resultadoMediana() {
  // VARIABLES
  const lista = document.getElementById("input-lista").value;
  const ResultadoP = document.getElementById("ResultadoP");
  const listaModificada = lista.split(",");
  const numberArray = listaModificada.map(Number);
  numberArray.sort(comparacion);

  // NUMERO MITAD
  const mitadLista1 = parseInt(numberArray.length / 2);
  const mitadLista2 = (numberArray[mitadLista1 - 1] + numberArray[mitadLista1]) / 2;

  // RESULTADO
  let mediana;

  if (esPar(numberArray.length)) {
    mediana = mitadLista2;
    ResultadoP.innerText = mediana;
  } else {
    mediana = numberArray[mitadLista1];
    ResultadoP.innerText = mediana;
  }
}

function calculaDescuento(valor, descuento) {
  return (valor * (100 - descuento)) / 100;
}

function precioAPagar() {
  const valor = parseInt(document.getElementById("input-precio").value);
  const descuento = parseInt(document.getElementById("input-descuento").value);
  const ResultadoP = document.getElementById("ResultadoP");
  const op = calculaDescuento(valor, descuento);

  //    Validacion
  if (isNaN(valor) === true && isNaN(descuento) === true) {
    ResultadoP.innerText = "ingrese valor y descuento.";
  } else {
    if (isNaN(valor) === true) {
      ResultadoP.innerText = "ingrese valor";
    } else if (isNaN(descuento) === true) {
      ResultadoP.innerText = "ingrese descuento";
    } else {
      ResultadoP.innerText = op;
    }
  }
}

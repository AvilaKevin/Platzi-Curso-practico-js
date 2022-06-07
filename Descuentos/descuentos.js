function calculaDescuento(valor, descuento){
    return valor*(100 - descuento)/100
}

function precioAPagar(){
    const valor = parseInt(document.getElementById("input-precio").value);
    const descuento = parseInt(document.getElementById("input-descuento").value);

    const op = calculaDescuento(valor, descuento);
    const ResultadoP = document.getElementById("ResultadoP"); // 3. Se llama la etiqueta p en una variable, para poderla utilizar
    ResultadoP.innerText = "El valor a pagar es de: "+ op; // 4. Se utiliza la propiedad (innerText) pa insertar un texto desde js y listo.
}
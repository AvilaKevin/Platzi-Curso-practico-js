var misCupones = [ // Se creo un array con varios objetos.
    {cupon: "cupon1", valor: "10"} ,
    {cupon: "cupon2", valor: "20"} ,
    {cupon: "cupon3", valor: "30"} 
]

function calculaDescuento(valor, descuento){ // funcion para realizar el calculo del valor a pagar con descuento.
    return valor*(100 - descuento)/100
}

/// CONEXION HTML
function resultadoCupones (){
    var valor = parseInt(document.getElementById("input-precio").value);

    var inputcupones = document.getElementById("input-cupones").value;

    // Se crea una varible para validar.
    var busca = misCupones.find( // esto realiza un filtro dentro del array, el cual me trae el valor especificado si es que lo hay.
        function(cuponex) {
            return cuponex.cupon === inputcupones // el inputcupones es el valor que necesito o el q solicite validar
        }
    );

    // Se crea un condicional para q le muestre al usuario si el codigo es valido o no.
    if(busca === undefined){// el undefined es el valor que trae la var busca cuando el cupon es invalido.
        const ResultadoP = document.getElementById("ResultadoP"); // 3. Se llama la etiqueta p en una variable, para poderla utilizar
        ResultadoP.innerText = "El cupon es invalido";
    }else{
        var array2 = busca.valor; // esto me crea una variable con el valor del cupon que se ingreso. lee objeto y trae valor
        var resultado = calculaDescuento(valor, array2);
    
        const ResultadoP = document.getElementById("ResultadoP"); // 3. Se llama la etiqueta p en una variable, para poderla utilizar
        ResultadoP.innerText = "El valor a pagar es de: "+ resultado;
    }
}



// OTRA FORMA DE REALIZAR ESTE EJERCICIO ES:
// // 1. Se crea un array de objetos:
// const coupons = [
//     {
//         name: "JuanDC_es_Batman",
//         discount: 15,
//     },
//     {
//         name: "pero_no_le_digas_a_nadie",
//         discount: 30,
//     },
//     {
//         name: "es_un_secreto",
//         discount: 25,
//     },
// ];

// // 2. Vamos a crear una variable isUserCouponValueValid con una función que valide si su parámetro coupon es igual a nuestra variable userCouponValue. Y esta variable la vamos a enviar como parámetro a nuestra función array.find():

// const isCouponValueValid = function (coupon) { // esto realiza la validacion del cupon ingresado
//     return coupon.name === couponValue; // couponValue es el input del html, aqui se valida si el input tiene un valor igual al array
// };

// const userCoupon = coupons.find(isCouponValueValid); // se crea el metodo.find el cual va a ejecutar la funcion que se ingreso como parametro.

// if (!userCoupon) { // si userCoupon es diferente entonces:
//     alert("El cupón " + couponValue + "no es válido"); 
// }

// // Pero fíjate que ya tenemos nuestro cupón (con nombre y descuento) disponible en la nueva variable userCoupon.

// // Podemos aprovechar esta variable para eliminar todos nuestros condicionales else if y cambiarlos por un condicional else que nos proporcione el porcentaje de descuento automáticamente, sin importar el cupón (válido) que estén usando nuestros usuarios.


// if (!userCoupon) {
//     alert("El cupón " + couponValue + "no es válido");
// } else {
//     const descuento = userCoupon.discount; // se ingresa al objeto userCoupon y se selecciona discount el cual quedara almacenado en la variable descuento
//     const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento); 

//     const resultP = document.getElementById("ResultP");
//     resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
// }




// PRUEBA METODO SPLIT
// function resultadoCupones(){
//     var inputcupones = document.getElementById("input-cupones").value;

//     var prueba = inputcupones.split(/\s*,\s/); // meotodo split solo soporta un parametro, para poder hacer el filtro con varios parametros es necesario usar una expresion regular o regex 

//     console.log(prueba)
// }

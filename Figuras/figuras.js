//////// CUADRADO
// Funciones-CUADRADO:
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}


///////// TRIANGULO
// Funciones-TRIANGULO:
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}


//////// CIRCULO
// Logica-CIRCULO:
const PI = Math.PI;
// Funciones-CIRCULO:
function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


function areaCirculo(radio) {
    return (radio * radio) * PI;
}


//////// TRIANGULO ISOSCELES
// Logica-TRIANGULO ISOSCELES:
function alturaTrianguloIsosceles(lado1, lado2, base) {
    if (lado1 === lado2) {
        return Math.sqrt(lado1 ** 2 - base ** 2 / 4);
    } else {
        return false;
    }
}


// Conexion HTML
// Cuadrado-button
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado"); // Se especifica que elemento se desea llamar
    const value = input.value; // Se especifica que solo se quiere llamar el valor q se ingreso en el input

    const perimetro = perimetroCuadrado(value);
    const resultadoP = document.getElementById("resultado_Cuadrado");

    if (perimetro === 0) {
        resultadoP.innerHTML = 'Asegurate de haber introducido un valor valido';
    } else {
        resultadoP.innerText = "El perimetro es de: " + perimetro;
    }
}

function calcularAreaCuadrado() {
    const input = parseInt(document.getElementById("InputCuadrado").value); // En este caso se esta pasando el estring a numero y de paso se selecciona el valor del input
    // const value = input.value; // Se especifica que solo se quiere llamar el valor q se ingreso en el input

    const area = areaCuadrado(input);
    const resultadoP = document.getElementById("resultado_Cuadrado");

    if (isNaN(area)) {
        resultadoP.innerHTML = 'Asegurate de haber introducido un valor valido';
    } else {
        resultadoP.innerText = "El area es de: " + area;
    }
}


// Triangulo-button
function calcularPerimetroTriangulo() {
    const lado1 = parseInt(document.getElementById("input-ladoIzquierdo-Triangulo").value);
    const lado2 = parseInt(document.getElementById("input-ladoDerecho-Triangulo").value);
    const base = parseInt(document.getElementById("input-Base-Triangulo").value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    const resultadoP = document.getElementById("resultado_Triangulo");

    if (isNaN(perimetro)) {
        resultadoP.innerHTML = 'Asegurate de haber introducido un valor valido';
    } else {
        resultadoP.innerText = "El perimetro es de: " + perimetro;
    }
}

function calcularAreaTriangulo() {
    const base = parseInt(document.getElementById("input-Base-Triangulo").value);
    const altura = parseInt(document.getElementById("input-Altura-Triangulo").value);

    const area = areaTriangulo(base, altura);
    const resultadoP = document.getElementById("resultado_Triangulo");

    if (isNaN(area)) {
        resultadoP.innerHTML = 'Asegurate de haber introducido un valor valido';
    } else {
        resultadoP.innerText = "El area es de: " + area;
    }
}


// Circulo-button
function calcularPerimetroCirculo() {
    const radio = parseInt(document.getElementById("input-radio-circulo").value);

    const perimetro = perimetroCirculo(radio);
    const resultadoP = document.getElementById("resultado_Circulo");

    if (isNaN(perimetro)) {
        resultadoP.innerHTML = 'Asegurate de haber introducido un valor valido';
    } else {
        resultadoP.innerText = "El perimetro es de: " + perimetro;
    }
}

function calcularAreaCirculo() {
    const radio = parseInt(document.getElementById("input-radio-circulo").value);

    const area = areaCirculo(radio);
    const resultadoP = document.getElementById("resultado_Circulo");

    if (isNaN(area)) {
        resultadoP.innerHTML = 'Asegurate de haber introducido un valor valido';
    } else {
        resultadoP.innerText = "El area es de: " + area;
    }
}


//TrianguloIsosceles-Button
function calcularAlturaTrianguloIsosceles() {
    const lado1 = parseInt(document.getElementById("input-ladoIzquierdo-trianguloIsosceles").value);
    const lado2 = parseInt(document.getElementById("input-ladoDerecho-trianguloIsosceles").value);
    const base = parseInt(document.getElementById("input-base-trianguloIsosceles").value);

    const altura = alturaTrianguloIsosceles(lado1, lado2, base);
    const resultadoP = document.getElementById("resultado_TrianguloIsosceles");

    // console.log(altura)

    if (altura === false) {
        resultadoP.innerText = "Asegurate de que sea un triangulos isosceles"
    } else {
        resultadoP.innerText = "La altura es de: " + altura;
    }
}
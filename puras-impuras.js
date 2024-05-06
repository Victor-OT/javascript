//funciones puras

//Side Effects
//1.- Modificar variables globales
//2. Modificar variablesglobales
//3.- Modificar parámetros
//4.- Solicitudes HTTP
//5.- Imprimir Mensajes en Pantalla O consola
//6.- Manipulación del DOM
//7.- Obtener la hora actual

function sum (a, b)
{
    return a + b
}

//Funciones Impuras

function suma (a, b)
{
    console.log('a: ' a)
    return a + b
}

let total = 0

function sumWithSideEffect(a)
{
    total += a
    return total
}

//Funcion Pura

function square(x)
{
    return x * x
}


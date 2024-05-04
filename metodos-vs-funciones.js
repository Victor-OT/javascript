//Capacidades de las funciones al igual que otros objetos

// 1. Pasar funciones como argumentos -> Callback

/*function a () {}
function b () {}
b(a)

// 2. Retornar funciones
function a ()
{
    function b (){}
    return b
}

//Asignar funciones a variables -> Expresion de Función
const a = function() {}

// Tener Propiedades y métodos
function a () {}
const obj = {}
a.call(obj)

// Anidar Funciones -> Nested Functions
function a ()
{
    function b ()
    {
        funcion c ()
        {

        }
        c ()
    }
    b ()

}
a()
*/
// Es Posible Almacenar Funciones en Objetos?

const rocket = 
{
    name: 'Falcon 9',
    launchMessage: function launchMessage(a, b)
    {
        return (a+b)
    }
}

console.log(rocket.launchMessage(1, 2))
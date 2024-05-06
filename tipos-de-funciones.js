//Funciones Declarativas
function sum(a, b)
{
    return a + b
}
console.log(sum(1, 2))

//Funciones expresivas o anónimas
const suma = function(a, b)
{
    return a + b
}
console.log(suma(3,4))

//Funciones Flecha
const sumaFecha = (a, b) => a + b
console.log(sum(2, 3))

//Funciones Constructoras
function Pokemon(nombre, tipo)
{
    this.nombre = nombre
    this.tipo = tipo
}
const charmander = new Pokemon('Charmander', 'Fuego')
const squirtle = new Pokemon('Squirtle', 'Agua')
console.log(charmander.nombre)
console.log(charmander.tipo)
console.log(squirtle.nombre)
console.log(squirtle.tipo)

//Funciones Constructoras Flecha
const Avatar = (nombre, tipo) => ({
    nombre: nombre,
    tipo: tipo
})
const aang = Avatar('Aang','Aire')
const Kioshi = Avatar('Kioshi','Tierra')
console.log(aang.nombre)
console.log(aang.tipo)
console.log(Kioshi.nombre)
console.log(Kioshi.tipo)

 //Funciones Recursivas
 function factorial(n)
 {
    if(n === 0 || n === 1)
        {
            return 1
        }
    else
    {
        return n * factorial (n -1)
    }
 }

 console.log(factorial(1))
 console.log(factorial(0))
 console.log(factorial(2))
 console.log(factorial(3))
 console.log(factorial(4))

 //Funciones Anidadas
 function exterior()
 {
    let variableExterior = 'Exterior'
    function interior()
    {
        console.log(variableExterior)
    }
    interior()
 }
 exterior()

 //Métodos de Objeto:
 const objeto =
 {
    metodo: function()
    {
        console.log("Hola desde el método")
    }
 }
 objeto.metodo()

 //Funciones Asíncronas
 /* async function fetchData()
 {
    const = await
    fetch('<https://api.example.com/data>')
    const data = await
    Response.json()
    console.log(data)
 } */
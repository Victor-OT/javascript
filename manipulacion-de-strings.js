//Strings primitivos

const stringPrimitivo = 'Soy un string primitivo'
console.log(typeof stringPrimitivo)

const stringPrimitivoTambien = String('Soy un string primitivo también')
console.log(typeof stringPrimitivoTambien)

//Strings Objeto

const stringObjeto = new String('Soy un string objeto')
console.log(typeof stringObjeto)

//Acceder a caracteres

const saludo = 'Hola. ¿Cómo estás?'

console.log(saludo[2])
console.log(saludo.charAt(2))
console.log(saludo.indexOf('a'))
console.log(saludo.indexOf('Cómo'))
console.log(saludo.indexOf('como'))
console.log(saludo.lastIndexOf('o'))
console.log(saludo.slice(3, 8))
console.log(saludo.length)
console.log(saludo.toLocaleUpperCase())
console.log(saludo.toLocaleLowerCase())

const saludoDividido = saludo.split(' ')
console.log(saludoDividido)

const saludoConEspacios = ' Hola Mundo '
const saludoSinEspacios = saludoConEspacios.trim()
console.log(saludoSinEspacios)

const saludoOriginal = 'Hola Mundo'
const nuevoSaludo = saludoOriginal.replace('Mundo', 'Perros')
console.log(nuevoSaludo)
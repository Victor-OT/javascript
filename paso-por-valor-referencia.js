//Paso por valor

let x = 1
let y = 'hola'
let z = null

let a = x
let b = y
let c = z

console.log(x,y,z,a,b,c)

a = 12
b = 'Alien'
c = undefined

//Paso por referencia

let frutas = ['manzana']
frutas.push('pera')
console.log(frutas)

let panes = ['🥐']
let copiaDePanes = panes
panes.push('🥖')
console.log(panes, copiaDePanes)
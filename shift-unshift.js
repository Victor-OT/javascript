//Shift elimina el primer elemento de un array, devuelve ese elemento
const colors = ['Yellow', 'Blue', 'Red']
console.log(colors)

const removedColors = colors.shift()
console.log(colors)
console.log(removedColors)

//Unshift agrega un elemento a la primera posición del array
const newColors = colors.unshift('pink', 'purple')
console.log(newColors)
console.log(colors)
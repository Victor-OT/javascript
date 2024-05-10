const array = Array (1,2,3,4,5)
console.log(array)

const array2 = new Array (1,2,3,4,5)
console.log(array2)

const arrayMasChido = [1]
console.log(arrayMasChido)

const emptyArray = []
console.log(emptyArray)

const arrayMixto = 
[
    1,
    2.5,
    'Hola Perrines',
    {
        nombre: 'Crow',
        edad: 15
    },
    true
]
console.log(arrayMixto)
console.log(arrayMixto[0])
console.log(arrayMixto[3])

console.log(arrayMixto.length)

//Mutabilidad
let fruits = ['Manzana', 'Pera', 'Durazno', 'Melón']
 console.log(fruits)

 fruits.push('Sandía')
 console.log(fruits)

 let newFruits = fruits.concat('Fresa', 'Uvas', 'Plátano')
 console.log(newFruits)

 console.log(Array.isArray(newFruits))

 //Practical excercise: Summ all elements of an array.

 const numbersArray = [1,2,3,4,5]
 sum = 0
 array.forEach(number => {
    sum += number
 });
 console.log(sum)
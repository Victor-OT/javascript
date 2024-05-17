//1. Copy an array

const originalArray = [1, 2, 3, 4, 5]
const copiedArray = [...originalArray]

console.log(originalArray)
console.log(copiedArray)

//2. Combining Arrays

const array1 = [1,2,3]
const array2 = [4,5,6]
const combinedArray = [...array1, ...array2]

console.log(array1)
console.log(array2)
console.log(combinedArray)

//3. Adding elements on an Array
const baseArray = [1,2,3]
const elementAddedArray = [...baseArray, 7,8,9]

console.log(baseArray)
console.log(elementAddedArray)

//Pass elements to functions
const numbers = [1,2,3]
function sum (a, b, c)
{
    return a + b + c
}

const result = sum(...numbers)
console.log(result)
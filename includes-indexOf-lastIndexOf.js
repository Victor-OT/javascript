/* //Includes numbers
const numbers = [1, 2, 3, 4, 5]

const result1 = numbers.includes(3)
console.log(result1)

const result2 = numbers.includes(8)
console.log(result2)

//Index of
const fruits = ['apple', 'cherry', 'grapes', 'mango']
const index1 = fruits.indexOf('grapes')
console.log(index1)

const index2 = fruits.indexOf('blueberry')
console.log(index1)

//LastIndexOf
const otherNumbers = [2,4,6,8,10,6]
const lastIndex1 = otherNumbers.lastIndexOf(6)
console.log(lastIndex1)

const lastIndex2 = otherNumbers.lastIndexOf(3)
console.log(lastIndex2) */

//Excercise
const consoles = ['xbox', 'ps5', 'nintendo switch', 'pc', 'xbox', 'psp']
const selectedString = 'xbox'

function stringIsPresent (targetString)
{
    if(consoles.includes(targetString))
        {
            return console.log(`First Occurrence Index: ${consoles.indexOf(targetString)}
            Last Occurrence Index: ${consoles.lastIndexOf(targetString)}`)
        }
        else
        {
            return console.log(consoles.indexOf(targetString))
        }
}

stringIsPresent(selectedString)
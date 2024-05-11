//Splice
const vegetables = ['Carrot', 'Spinach', 'Onion', 'Tomato']
const newVegetables = vegetables.splice(2, 1, 'Cucumber', 'Avocado')

console.log(vegetables)
console.log(newVegetables)

//Reverse
const numbers = [1,2,3,4,5]

const newNumbers = numbers.slice()
newNumbers.reverse()

console.log(numbers)
console.log(newNumbers)

//Sort
const numbers2 = [4,18,1,62,34]
const sortedNumbersUnicode = numbers2.sort()

console.log(numbers2)
console.log(sortedNumbersUnicode)

const sortedNumbersInt = numbers2.sort((a,b) => a-b)
console.log(numbers2)
console.log(sortedNumbersInt)

const cities = ['New York', 'Paris', 'Tokyo', 'London']
const newCities = cities.slice()

const sortedCities = newCities.sort()
console.log(cities)
console.log(sortedCities)

//Fill
const ages = [21, 35, 45, 50]
newAges = ages.fill(0, 2, 4)
console.log(ages)
console.log(newAges)
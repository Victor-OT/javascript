//Map

const numbers = [1, 2, 3, 4, 5]
const squareNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(squareNumbers)

//forEach
const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color))
console.log(colors)
console.log(iteratedColors)

//Excercise: Farenheit to Celcius conversion
const temperaturesFarenheit = [32, 68, 95, 104, 212]
const temperaturesCelcius = temperaturesFarenheit.map(farenheit => (5/9 * (farenheit-32)))
 console.log(temperaturesFarenheit)
 console.log(temperaturesCelcius)

 //Excercise: Sum elements in an array
 const newNumbers = [1, 2, 3, 4, 5]
 let sum = 0

 newNumbers.forEach(number => 
    {
        sum += number
    }
 )
 console.log(newNumbers)
 console.log(sum)
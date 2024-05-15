const ages = [21, 25, 30, 19, 22]

//Every
const allAreAdults = ages.every(age => age > 20)
console.log(ages)
console.log(allAreAdults)

//Some
const atLeastOneAdult = ages.some(age => age > 40)
console.log(atLeastOneAdult)
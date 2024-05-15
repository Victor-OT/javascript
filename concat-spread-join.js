//No modifican el array original
const morseCode1 = ['....','----']
const morseCode2 = ['.-..','.-']

//concat1
const morseCodeMessage = morseCode1.concat(morseCode2)

console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage)

//Concat 2
morseCodeMessage2 = [].concat(morseCode1, morseCode2)
console.log(morseCodeMessage2)

//Spread operator
function combineMorseMessages(morseCode1, morseCode2)
{
    return [...morseCode1, ...morseCode2]
}

console.log('Spread: ', combineMorseMessages(morseCode1, morseCode2))

const numbers = [1, 2, 3]
const string = 'string'

console.log('Spread: ', combineMorseMessages(numbers, string))

//Join
const morseCodeMessageString = morseCodeMessage.join('')
console.log(morseCodeMessageString)

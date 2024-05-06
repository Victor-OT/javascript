//Normal Function
const greeting = function(name)
{
    return (`Hi ${name}`)
}
console.log(greeting('Victor'))

//Arrow Function - Explicit
const greeting2 = (name) => 
    {
        return (`Hi ${name}`)
    }
console.log(greeting2('Victor'))

//Arrow Function - Implicit
const greeting3 = name => `Hi ${name}`
console.log(greeting3('Victor'))

const greeting4 = (name, lastName) => `Hi ${name} ${lastName}`
console.log(greeting4('Victor', 'Breaker'))

//Lexical Binding
const fictionalCHaracter = 
{
    name: 'Uncle Ben',
    message1: function(message)
    {
        console.log(`${this.name} says: ${message}`)
    },
    message2: (message) => console.log(`${this.name} says: ${message}`)
}

fictionalCHaracter.message1('Hola perros.')
fictionalCHaracter.message2('Hola mis todotibios.')
//Social Media Profile

//1. User Information
const userName = 'VictorBreaker'
const fullName = 'Victor Olivares'
const age = 25
const isStudent = true

//2. Address
const address =
{
    street: '22 Acacia Avenue',
    city: 'Atizapan',
    state: 'México',
    zipCode: 54321
}

//3. Hobbies
const hobbies = ['Playing', 'Music', 'Eating']

//4. Generating personalized bio
const personalizedio = `Hi, I´m ${fullName}
I´m ${age} years old.
I live in ${address}.
i Love ${hobbies.join(', ')}.
Follow me for Incredible experiences.`

//5. Print the user profile and bio
console.log(personalizedio)
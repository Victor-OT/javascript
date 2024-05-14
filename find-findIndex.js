//Find
const multipleOf5 = [5, 10, 15, 20]
const firstNumberGreaterThan10 = multipleOf5.find(number => number > 10)
console.log(multipleOf5)
console.log(firstNumberGreaterThan10)

//Find Index
const randomNumbers = [6, 14, 27, 56, 40]
const indexNumber = randomNumbers.findIndex(number => number > 50)
console.log(randomNumbers)
console.log(indexNumber)

//Excercise Raffle
const winners = [
    {id: 1, name:'Jennifer', ticketNumber: 001},
    {id: 8, name:'Michael', ticketNumber: 008},
    {id: 15, name:'Emily', ticketNumber: 015},
    {id: 47, name:'Charlie', ticketNumber: 047}
]

function findWinnerByName (name)
{
    const winner = winners.find(winner => winner.name === name)
    return winner || 'No Winner Found by name'
}

function findWinnerByTicket (ticketNumber)
{
    const index = winners.findIndex(winner => winner.ticketNumber === ticketNumber)
    return index > -1 ? winners[index].name : 'No Winner Found by ticket'
}

function displayWinnerInfo(winner)
{
    if (winner !== undefined && winner !== null && winner !== 'No Winner Found by name')
        {
            console.log('Winner Info: ', winner)
        }
    else
    {
        console.log('No winner found')
    }
}

console.log(findWinnerByName('cdsacdas'))
console.log(findWinnerByTicket(001))
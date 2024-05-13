//Card Game Implementation

const deck = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function shuffleDeck ()
{
    for(i = deck.length - 1; i > 0; i--)
        {
            const j = Math.floor(Math.random() * (i + 1));
            console.log(j);
            [deck[i], deck[j]] = [deck[j], deck[i]]
        }
}

function dealCards(numCard)
{
    const dealCards = deck.splice(0, numCard)
    return dealCards
}

shuffleDeck()

const player1Hand = dealCards(5)
const player2Hand = dealCards(5)
const player3Hand = dealCards(5)
const player4Hand = dealCards(5)

console.log(`Player1 Hand: ${player1Hand}`)
console.log(`Player2 Hand: ${player2Hand}`)
console.log(`Player3 Hand: ${player3Hand}`)
console.log(`Player4 Hand: ${player4Hand}`)
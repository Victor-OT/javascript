const owner = 'Crow'
const address = 'Mexico 123'

function dogGreeting(owner, address)
{
    console.log(`Hi, I'm ${this.dogName} and I live whit ${owner} on ${address}`)
}

const newHouse = 
{
    dogName: 'Wall-e'
}

dogGreeting.call(newHouse, owner, address)

const necessaryValues = [owner, address]

dogGreeting.apply(newHouse,necessaryValues)

const binding = dogGreeting.bind(newHouse, owner, address)
binding()

const nombre = 'Danny Phantom'
const personaje1 = 'Danny'
const personaje2 = 'Fantasma'
const caricatura = [nombre, personaje1, personaje2]

function recuerdo()
{
    console.log(`Mi caricatura favorita era ${nombre}, mi personaje favorito era ${personaje1}, y odiaba a ${personaje2}`)
}

recuerdo.apply(caricatura)


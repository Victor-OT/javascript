//Enlace Implícito/Implicit binding

const house =
{
    dogName: 'Wall-e',
    dogGreeting: function()
    {
        console.log(`Hi, my name is ${this.dogName}`)
    }
}
house.dogGreeting()

//Enlace explícito / Explicit Binding

function dogGreeting()
    {
        console.log(`Hi, my name is ${this.dogName}`)
    }

    const newHouse =
{
    dogName: 'Crowpi',
}

dogGreeting.call(newHouse)


function newDogGreeting(owner, address)
    {
        console.log(`Hi, my name is ${this.dogName}, i live with ${owner}, in ${address}`)
    }

const owner = 'Crow'
const address = 'Mexico'

newDogGreeting.call(newHouse, owner, address)
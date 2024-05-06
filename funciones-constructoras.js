const personalMessage = () => 'Camara mijos'

function Rocket(name, ownMessage)
{
    this.name = name
    this.launchMessage = function()
    {
        console.log(ownMessage)
    }
}

function Rocket2(name, ownMessage)
{
    this.name = name
    this.launchMessage = ownMessage
}

const falcon9Rocket = new Rocket('Falcon 9', 'Adios Perros')
const falconHeavyRocket = new Rocket('Falcon Heavy', personalMessage)
const HalconMilenario = new Rocket2('Halcon Milenario', personalMessage)

console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchMessage())
console.log(HalconMilenario.name)
console.log(HalconMilenario.launchMessage())

const RocketArrow = (name, ownMessage) => ({
    name: name,
    launchMessage: ownMessage
})

const personalMessageArrow = () => 'Camara mijostros'
const falcon9Rocket1 = RocketArrow('Falcon', personalMessageArrow)
console.log(falcon9Rocket1.name)
console.log(falcon9Rocket1.launchMessage())

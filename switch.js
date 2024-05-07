let expresion = 'Naranjas'

switch(expresion)
{
    case 'Naranjas':
        console.log("Las naranjas cuestan $20 el kilo")
        break
    
    case 'Manzanas':
        console.log("Las manzanas cuestan $43 el kilo")
        break

    case 'Plátanos':
        console.log('El platano está en $30 el kilo')
        break

    case 'Mangos':
    case 'Papayas':
        console.log('Los mangos y las papayas cuestan $25 el kilo')
        break

    default:
        console.log(`Lo siento, no contamos con ${expresion}`)
}
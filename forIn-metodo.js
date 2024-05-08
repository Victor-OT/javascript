const listCompras =
{
    manzanas: 5,
    pera: 3,
    naranja: 2,
    uva: 1
}

for(fruta in listCompras)
    {
        console.log(fruta)
    }

    for(fruta in listCompras)
        {
            console.log(`Nomrbe Fruta: ${fruta}
            cantidad: ${listCompras[fruta]}`)
        }
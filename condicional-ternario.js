let mensaje

const edad = 20

if(edad >= 18)
    {
        mensaje = "Es mayor de edad, puede pasar"
    }
else
{
    mensaje = "Lo siento, no puede pasar"
}

console.log(mensaje)

//Condicion ternaria
const edad2 = 16

const mensaje2 = edad2 >= 18 ? "Es mayor de edad, puede pasar" : 'Es menor de edad, no puede pasar'

console.log(mensaje2)
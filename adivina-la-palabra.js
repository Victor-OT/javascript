const palabraSecreta = 'Manzana'
const haGanado = false
let contadorTurnos = 0

readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function preguntaPalabraOculta() {
  rl.question('Adivina la palabra oculta: ', (palabra) => {
    comprobarRespuesta(palabra);
  });
}

function comprobarRespuesta(palabra) 
{
    console.log(`Usted ingresó: ${palabra}`)
    if(palabra === palabraSecreta)
        {
            console.log('Has Ganado')
            haGanado = true
            rl.close();
        }
        else
        {
            contadorTurnos ++
        }
}
while(contadorTurnos <= 3)
    {
        preguntaPalabraOculta()
    }
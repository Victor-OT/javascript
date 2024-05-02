//Creación de strings
const primeraOpcion = 'Comillas Simples'
const segundaOpcion = "Comillas Dobles"
const terceraOpciom = `Comillas ladeadas`

//1. Concatenación: Opción +
const direccion = 'Calle falsa 123'
const ciudad = 'Springfield'
const direccionCompleta = 'Mi dirección completa es ' + direccion + ciudad
console.log(direccionCompleta)
const direccionCompletaConEspacio = 'Mi dirección completa es ' + direccion + ' ' + ciudad
console.log(direccionCompletaConEspacio)

//2. Concatenación: Template Literals
const nombre = 'Victor'
const pais = 'México'
const presentacion = `Hola, soy ${nombre} de ${pais}`
console.log(presentacion)

//3. Concatenación: join()
const primeraParte = 'Me encanta'
const segundaParte = 'la gente de'
const terceraParte = 'México'
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(' '))

//4. Concatenación: concat()
const hobbie1 = 'tocar guitarra'
const hobbie2 = 'jugar videojuegos'
const hobbie3 = 'ver películas'
const hobbies = 'Mis hobbies son '.concat(hobbie1,', ',hobbie2,', ',hobbie3)
console.log(hobbies)
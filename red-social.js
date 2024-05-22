const usersDatabase = [
    {username:"andres",password:"123"},
    {username:"caro",password:"456"},
    {username:"mariana",password:"789"}]
    
const usersTimeline = [
    {username:"Estefany",timeline:"Me encata Javascript!"},
    {username:"Oscar",timeline:"Bebeloper es lo mejor!"},
    {username:"Mariana",timeline:"A mi me gusta mÃ¡s el cafÃ© que el tÃ©"},
    {username:"Andres",timeline:"Yo hoy no quiero trabajar"}]

alert('Bienvenido a Caralibro')

function login()
{
    const userName = prompt('Ingresa tu usuario:').toLocaleLowerCase()
    const userPassword = prompt('Ingresa tu contraseña:')

    for(let i = 0; i < usersDatabase.length; i ++){
        if(userName === usersDatabase[i].username && userPassword === usersDatabase[i].password) {
            alert("adelante mi amor")
            showTimeline()
            break
        }
        else{
            alert('Saquese alv sus datos están mal')
            break
        }
    }

}

function showTimeline() {
    alert(usersTimeline)
}

login()
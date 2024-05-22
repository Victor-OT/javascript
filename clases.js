class Persona {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
    saludar(){
        console.log('Hola, me llamo '+ this.nombre)
    }
}

const persona1 = new Persona('Victor', 27)

persona1.saludar()
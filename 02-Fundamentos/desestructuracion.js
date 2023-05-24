const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    edad: 50,
    getNombre: function () {
        return `${this.nombre} ${this.apellido} ${this.apellido}`
    }
}



// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder

function imprimeHeroe({nombre, apellido, poder, edad=0}) {
    nombre = 'Jose'
    console.log(nombre, apellido, poder, edad)
    
}
// imprimeHeroe(deadpool)

const {nombre, apellido, poder, edad = 0 /*valor por defecto */} = deadpool //object deestructuring
console.log(nombre, apellido, poder)
 
const heroes = ['Deadpool', 'Superman', 'Batman']

// const h1 = heroes[0]
// const h2 = heroes[1]
// const h3 = heroes[2]
// const [h1, h2, h3] = heroes;
const [ , , h3] = heroes; //no me interesa el primero, ni el segundo, sino el tercer valor //array deestructuring

// console.log(h1, h2, h3)
console.log(h3)


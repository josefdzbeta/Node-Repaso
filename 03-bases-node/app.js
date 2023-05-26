const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('yargs').argv
console.clear()

// const [,,arg3 = 'numero=5'] = process.argv
// const [ , numero = 5] = arg3.split('=')

// console.log(numero)


// const numero = 5

console.log(process.argv)
console.log('numero: yargs', argv.numero)


// crearArchivo( numero )
//     .then((nombreArchivo) => {
//         return console.log(nombreArchivo, 'creado')
//     }).catch((err) => {
//         return console.log(err);
//     });
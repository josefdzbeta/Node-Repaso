const {crearArchivo} = require('./helpers/multiplicar')
const argv =  require('./config/yargs')
require('colors')
console.clear()

// const [,,arg3 = 'numero=5'] = process.argv
// const [ , numero = 5] = arg3.split('=')

// console.log(numero)


// const numero = 5

// console.log(process.argv)
// console.log('numero: yargs', argv.numero)


crearArchivo( argv.n, argv.l, argv.h)
    .then((nombreArchivo) => {
        return console.log(nombreArchivo, 'creado')
    }).catch((err) => {
        return console.log(err);
    });
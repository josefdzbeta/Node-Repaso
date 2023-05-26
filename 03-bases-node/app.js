const {crearArchivo} = require('./helpers/multiplicar')

console.clear()

console.log(process.argv)
const [,,arg3 = 'numero=5'] = process.argv
const [ , numero = 5] = arg3.split('=')

console.log(numero)


// const numero = 5



crearArchivo( numero )
    .then((nombreArchivo) => {
        return console.log(nombreArchivo, 'creado')
    }).catch((err) => {
        return console.log(err);
    });
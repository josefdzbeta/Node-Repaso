
const fs = require('fs')


//Async await always returns a promise

const crearArchivo = async (numero = 5) => {


    let salida = ''
    for (let i = 0; i <= 10; i++) {

        salida += `${numero} X ${i} = ${numero * i}\n`

    }
    console.log(salida)
    fs.writeFileSync(`tabla-${numero}.txt`, salida)


    return (`tabla ${numero}.txt`)

}

module.exports = {
    crearArchivo
}

const fs = require('fs')
require('colors')
//Async await always returns a promise

const crearArchivo = async (numero = 5, listar = false, hasta = 1) => {

    try {

        let salida = ''
        let consola = ''
        for (let i = 0; i <= hasta; i++) {

            salida += `${numero} X ${i} = ${numero * i}\n`
            consola += `${numero} ${'X'.blue} ${i} = ${numero * i}\n`

        }
        if (listar) {
            console.log(salida)
        }
        fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida)


        return (`tabla ${numero}.txt`)

    } catch (err) {
        throw err
    }



}

module.exports = {
    crearArchivo
}
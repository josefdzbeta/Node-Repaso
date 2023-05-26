const argv = require('yargs')
                .option('n', {
                    alias: 'numero',
                    type: 'number',
                    demandOption: true,
                    describe: 'base del número a multiplicar'

                })
                .check((argv, options)=>{
                    if(isNaN(argv.n)){
                        throw 'La base tiene que ser un número'
                    }
                    return true
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    describe: 'Hasta qué número multiplicar'

                })
                .check((argv, options)=>{
                    if(isNaN(argv.n)){
                        throw 'Debe introducir un número válido'
                    }
                    return true
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: false,
                    default: true,
                    describe: 'listar table de multiplicar'
                })
                .argv
                
module.exports = argv;
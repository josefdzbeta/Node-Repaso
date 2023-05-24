
// setTimeout(() => {
//     console.log('hola mundo')
// }, 3000);


const getUsuarioById = (id, callback) =>{
    const user = {
        id,
        nombre : 'Jose'
    }

    setTimeout(() => {
        callback(user) //Llamo a la función que tomo como referencia
    }, 1000);
}

getUsuarioById(10, (usuario )=> { //id + función de referencia
    console.log(usuario)
})
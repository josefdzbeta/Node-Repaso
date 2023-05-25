const empleados = [
    {
        id: 1,
        nombre: 'Jose'
    },
    {
        id: 2,
        nombre: 'Pedro'
    },
    {

        id: 3,
        nombre: 'Juan'
    }

]
const salarios = [
    {
        id: 1,
        salario: 3000
    },
    {
        id: 2,
        salario: 2000
    },

]


const getEmpleado = (id, callback) => {
    return new Promise((resolve, reject) => { 
        
        const empleado = empleados.find(e => e.id === id)?.nombre ;
        
        (empleado)
            ?resolve(empleado)
            :reject(`No existe empleado con id ${id}`)
    
    })
}

const getSalario = (id, callback) =>{
    return new Promise((resolve, reject) => { 

        const salarioEmpleado = salarios.find(s => s.id === id)?.salario;
        
        (salarioEmpleado)
            ?resolve(salarioEmpleado)
            :reject(`No existe empleado con id ${id}`)

     })
}

const getInfoUsuario = async (id) =>{

    try {
        const empleado = await getEmpleado(id)
        const salario = await getSalario(id)
        return `El salario del empleado ${empleado} es de: ${salario}`
    } catch (error) {
        throw error //call reject
    }
    
}


getInfoUsuario(id)
    .then (msg => console.log(msg))
    .catch (err => console.log(err))

const id = 1;



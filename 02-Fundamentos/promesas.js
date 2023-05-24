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
        
        const empleado = empleados.find(e => e.id === id)?.nombre
        (empleado)
            ?resolve(empleado)
            :reject(`No existe empleado con id ${id}`)
    
    })
}

const getSalario = (id, callback) =>{
    return new Promise((resolve, reject) => { 

        const salarioEmpleado = salarios.find(s => s.id === id)?.salario
        (salarioEmpleado)
            ?resolve(salarioEmpleado)
            :reject(`No existe empleado con id ${id}`)

     })
}


const id = 1

// getEmpleado(id)
//     .then(empleado =>console.log(empleado))
//     .catch( err => console.log(err))

// getSalario(id)
//     .then(salarioEmpleado =>console.log(salarioEmpleado))
//     .catch( err => console.log(err))

getEmpleado(id)
    .then(empleado =>{
        getSalario(id)
            .then(salario =>{
                console.log('El empleado', empleado, 'tiene un salario de:', salario)
            })
            .catch(err => console.log(err)) 
        })
        .catch(err => console.log(err))


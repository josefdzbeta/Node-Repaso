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
    const empleado = empleados.find(e => e.id === id)?.nombre
    if (empleado) {
        callback(null, empleado)

    } else {
        callback(`Empleado con id ${id} no existe`)
    }

}

const getSalario = (id, callback) => {
    const salarioEmpleado = salarios.find(e => e.id === id)?.salario

    if (salarioEmpleado) {
        callback(null, salarioEmpleado)

    } else {
        callback(`Empleado con id ${id} no existe`)
    }

}

getEmpleado(2, (err, empleado) => {

    if (err) {
        console.log('Error!!')
        return console.log(err)
    }
    getSalario(2, (err, salario) => {

        if (err) {
            console.log('Error!!')
            return console.log(err)
        }
        console.log('El empleado:', empleado, 'tiene un salario de:', salario)
    })
})

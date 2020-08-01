const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const { argv } = require('yargs')
    .command('crear', 'Crear un nelemento por hacer.', {descripcion})
    .command('listar', 'Lista la tareas creadas.', {})
    .command('borrar', 'Elimina una tarea de la lista.', {descripcion})
    .command('actualizar', 'Actualizar el estado completado de una tarea.', {descripcion, completado}).help();

module.exports = {
    argv
}
const colors = require('colors/safe');
const { argv } = require('./config/yargs');
const { crear, getListado, actualizar, borrar } = require('./to-do/to-do');

const comando = argv._[0];

switch (comando) {
    case 'crear':
        const tarea = crear(argv.descripcion);
        console.log(tarea);
    break;

    case 'listar':
        const listado = getListado();
        for(let tarea of listado) {
            console.log(colors.green('====== Por Hacer ======'));
            console.log(`• ${tarea.descripcion}`);
            console.log(`• Estado: ${tarea.completado}`);
            console.log(colors.green('======================='));
        }
    break;

    case 'actualizar':
        const actualizado = actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
    break;

    case 'borrar':
        const borrado = borrar(argv.descripcion);
        console.log(borrado);
    break;

    default:
        console.log(colors.red('Comando no reconocido.'))
    break;
}
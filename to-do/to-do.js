const fs = require('fs');
const color = require('colors/safe');

let listadoPorHacer = [];

const guardarDB = () => {

    const data = JSON.stringify(listadoPorHacer);
        
    fs.writeFile('data/data.json', data, (err) => {
            
        if (err) throw new Error('No se guardo corretamente en el archivo data.json', err);
            
    });

}

const cargarDB = () => {

    try {

        listadoPorHacer = require('../data/data.json');

    } catch (error) {
        
        listadoPorHacer = [];

    }

}

const crear = (descripcion) => {

    cargarDB();

    const porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}

const getListado = () => {

    cargarDB();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    const index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {

        listadoPorHacer[index].completado =completado
        guardarDB();
        return true;

    } else {

        return false;

    }

}

const borrar = (descripcion) => {

    cargarDB();
    const nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });

    if (listadoPorHacer.length === nuevoListado.length ) {

        return false;

    } else {

        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;

    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
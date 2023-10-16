const path = require('node:path');
const fileExists = require('./fileExists.js');

/* Primero verificamos si la ruta no es absoluta con el método ISABSOLUTE del modulo PATH, 
si no lo es la convertimos con el método RESOLVE del modulo PATH, de ahi se manda a verificar
si el archivo existe y si es markdown*/
function absolutePath(filePath) {
    /* SIN PROMESA
    if(!path.isAbsolute(filePath)){
        // console.log('no es absoluta:' + filePath);
        const absPath = path.resolve(filePath);
        // console.log('ahora es absoluta:' + absPath);
    }else{
        console.log('es absoluta: ' + filePath);
    } */

    /* CON PROMESA Se resuelve la ruta a absoluta y se envia a la funcion para verificar si
    existe el archivo y si es markdown*/
    let absPath;
    const relOrAbs = () => {
        return new Promise(resolve => {
            if(!path.isAbsolute(filePath)){
                absPath = path.resolve(filePath);
                resolve(absPath);
            }
        });
    }
    relOrAbs()
        .then(absPath => {
            // console.log('es una ruta absoluta ahora: ' + absPath); 
            return fileExists(absPath);
        })
        .catch(err =>{
            console.error(err);
        });

  }

  module.exports = absolutePath;

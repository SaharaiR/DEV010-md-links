const fs = require('node:fs/promises');

/*Se usa del modulo de promesas de FileSystem, el método access 
para encontrar de manera asincronica el archivo, si lo encuentra 
lo enviamos a la funció para determinar si es un archivo markdown, 
si no encuentra el archivo mostramos en consola que no existe */

function fileExists(absPath){
    //console.log(absPath);
    return fs.access(absPath)
        .then(() => {
            //console.log('El archivo existe');
            return true;
        })
        .catch(() => {
            console.log('El archivo no existe');
            return false;
        });
}

module.exports = fileExists;

const fs = require('node:fs/promises');
const isMd = require('./isMarkdown');

/*Se usa del modulo de promesas de FileSystem, el método access 
para encontrar de manera asincronica el archivo, si lo encuentra 
lo enviamos a la funció para determinar si es un archivo markdown, 
si no encuentra el archivo mostramos en consola que no existe */

function fileExists(absPath){
    //console.log(absPath);
    fs.access(absPath)
        .then(() => {
            console.log('El archivo existe');
            isMd(absPath);
        })
        .catch(() => {
            console.log('El archivo no existe');
        });
}

module.exports = fileExists;

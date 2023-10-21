const fs = require('node:fs');
const fsPromise = require('node:fs/promises');

function readingFile(pathFile){
    return fsPromise.readFile(pathFile, 'utf-8')
        .then(content => {
            return content; 
        })
        .catch(error => {
            console.log('El archivo no se puede leer');
        });
}

module.exports = readingFile;
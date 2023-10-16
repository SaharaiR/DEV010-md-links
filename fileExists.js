const fs = require('node:fs/promises');
const path = require('node:path');

/*Se usa del modulo de promesas de FileSystem, el método access para encontrar de manera
asincronica el archivo, si lo encuentra verificamos si es markdown, usando del modulo PATH
el metodo EXTNAME para saber cual es la extension de ahi comparamos si cumple con la extension
de archivo markdown, si no encuentra el archivo mostramos en consola que no existe */
/* expresion regular para encontrar las extensiones validas para archivos markdown 
$ -> busca al final de la cadena
i -> case insensitive 
Si es un archivo markdown lo mandamos a lectura*/
const extensions = /(.md|.mkd|.mdwn|.mdown|.mdtxt|.markdown|.text)$/i;
function fileExists(absPath){
    //console.log(absPath);
    fs.access(absPath)
        .then(() => {
            // console.log('El archivo existe');
            const extension = path.extname(absPath);
            // console.log('La extension es: '+ extension);
            if(extensions.exec(extension)){
                //console.log('Es un archivo markdown');
            }else{
                console.log('No es un archivo markdown, por favor ingresa un archivo valido');
            }
        })
        .catch(() => {
            console.log('El archivo no existe');
        });
}

module.exports = fileExists;
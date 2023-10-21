const path = require('node:path');

/*Verificamos si es markdown, usando del modulo PATH
el metodo EXTNAME para saber cual es la extension de ahi 
comparamos si cumple con la extensio de archivo markdown*/
/* expresion regular para encontrar las extensiones validas para archivos markdown 
$ -> busca al final de la cadena
i -> case insensitive 
Si es un archivo markdown regresamos TRUE*/
const extensions = /(.md|.mkd|.mdwn|.mdown|.mdtxt|.markdown|.text)$/i;

function isMarkdown(pathAbsolute){
    //console.log('Desde funcion isMardown: ' + pathAboslute);
    const extension = path.extname(pathAbsolute);
    //console.log('La extension es: ' + extension);
    const isMdn = () =>{
        return new Promise((resolve, reject) => {
            if(extensions.exec(extension)){
                resolve(pathAbsolute);
            }else{
                reject(new Error('No es un archivo markdown'));
            }
        });
    }
    isMdn()
        .then(() =>{
            //console.log('Es un archivo markdown');
            return true;
        })
        .catch(err =>{
            console.error(err);
            return false;
        });
}

module.exports = isMarkdown;

/*SIN PROMESA*/
    /*if(extensions.exec(extension)){
        console.log('Es un archivo markdown');
    }else{
        console.log('No es un archivo markdown');
    }*/
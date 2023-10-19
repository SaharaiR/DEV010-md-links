const readline = require('readline');
const absolutePath = require('./lib/absolutePath.js');
const fileExists = require('./lib/fileExists.js');

function interface(){
    /* Crear la interfaz READLINE para poder insertar la dirección desde consola con su
    entrada y salida, se usa RL.QUESTION para hacer la pregunta al usuario */
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    /* Creamos promesa para esperar que el usuario teclee la ruta del archivo */
    const getPathFile = () => {
        return new Promise(resolve => {
            rl.question('Ingresa la ruta del archivo: ', filePath => {
                resolve(filePath);
                rl.close();
            });
        });
    }
    /* Al resolver la promesa lo mandamos al archivo para convertir a ruta absoluta */
    getPathFile()
        .then(filePath =>{
            //return absolutePath(filePath);
            mdLinks(filePath);
        })
        .catch(err => {
            console.error(err);
        });
}

function mdLinks(path){
  return absolutePath(path)
   // .then(() => fileExists(path))
}

interface();
module.exports = interface;

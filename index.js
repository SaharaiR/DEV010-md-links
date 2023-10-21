const readline = require('readline');
const absolutePath = require('./lib/absolutePath');
const fileExists = require('./lib/fileExists');
const isMarkdown = require('./lib/isMarkdown');
const readingFile = require('./lib/readingFile');
const extractLinks = require('./lib/extractLinks');

function mdLinks(path) {
  // console.log('path: ' + path);
  const route = absolutePath(path);
  return fileExists(route)
    .then(() => isMarkdown(route))
    .then(() => readingFile(route))
    .then((content) => extractLinks(content, route));
}

function askPath() {
  /* Crear la interfaz READLINE para poder insertar la dirección desde consola con su
    entrada y salida, se usa RL.QUESTION para hacer la pregunta al usuario */
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
    /* Creamos promesa para esperar que el usuario teclee la ruta del archivo */
  const getPathFile = () => new Promise((resolve) => {
    rl.question('Ingresa la ruta del archivo: ', (filePath) => {
      resolve(filePath);
      rl.close();
    });
  });
  /* Al resolver la promesa lo mandamos al archivo para convertir a ruta absoluta */
  getPathFile()
    .then((filePath) => {
      // return absolutePath(filePath);
      mdLinks(filePath);
    })
    .catch((err) => {
      console.error(err);
    });
}

askPath();
module.exports = mdLinks;

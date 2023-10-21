const fsPromise = require('node:fs/promises');

function readingFile(pathFile) {
  return fsPromise.readFile(pathFile, 'utf-8')
    .then((content) => content)
    .catch((error) => {
      console.log('El archivo no se puede leer', error);
    });
}

module.exports = readingFile;

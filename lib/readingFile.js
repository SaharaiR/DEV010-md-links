const fsPromise = require('node:fs/promises');

function readingFile(pathFile) {
  return fsPromise.readFile(pathFile, 'utf-8')
    .then((content) => content)
    .catch(() => {
      throw new Error('No se puede leer el archivo');
    });
}

module.exports = readingFile;

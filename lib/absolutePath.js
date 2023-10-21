const path = require('node:path');

/* Primero verificamos si la ruta no es absoluta con el método ISABSOLUTE del modulo PATH,
si no lo es la convertimos con el método RESOLVE del modulo PATH, de ahi se manda a verificar
si el archivo existe y si es markdown */
function absolutePath(filePath) {
  if (!path.isAbsolute(filePath)) {
    // console.log('no es absoluta:' + filePath);
    const absPath = path.resolve(filePath);
    return absPath;
    // console.log('ahora es absoluta:' + absPath);
  }
  // console.log('es absoluta: ' + filePath);
  return filePath;
}

module.exports = absolutePath;

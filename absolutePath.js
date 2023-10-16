const path = require('node:path');

function absolutePath(filePath) {
    if(!path.isAbsolute(filePath)){
        console.log('no es absoluta:' + filePath);
        const absPath = path.resolve(filePath);
        console.log('ahora es absoluta:' + absPath);
    }
  }

  module.exports = absolutePath;
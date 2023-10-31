const readingFile = require('../lib/readingFile');

describe('readingFile', () => {
  it('Manda error si no encuentra el archivo', () => readingFile('noExiste.md')
    .catch((error) => {
      expect(error.message).toEqual('No se puede leer el archivo');
    }));
});

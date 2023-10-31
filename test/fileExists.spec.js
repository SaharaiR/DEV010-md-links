const fileExists = require('../lib/fileExists');

describe('fileExists', () => {
  it('Debería devolver false si el archivo no existe', () => fileExists('ejemplo.md')
    .then((result) => {
      expect(result).toEqual(false);
    }));
});

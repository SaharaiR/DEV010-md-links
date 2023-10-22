const { describe, it, expect } = require('@jest/globals');
const readingFile = require('../lib/readingFile');

describe('readingFile', () => {
  it('Manda error si no encuentra el archivo', () => readingFile('noExiste.md')
    .catch((error) => {
      expect(error.code).toEqual('ENOENT');
    }));
});

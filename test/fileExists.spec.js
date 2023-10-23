const { describe, it, expect } = require('@jest/globals');
const fileExists = require('../lib/fileExists');

describe('fileExists', () => {
  it('debería devolver false si el archivo no existe', () => fileExists('ejemplo.md').then((result) => {
    expect(result).toEqual(false);
  }));
});

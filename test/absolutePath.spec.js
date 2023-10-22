const { describe, it, expect } = require('@jest/globals');
const path = require('node:path');
const absolutePath = require('../lib/absolutePath');

describe('absolutePath()', () => {
  it('Deberia retornar la ruta sin cambiar si es absoluta', () => {
    const expectPath = absolutePath('/file.md');
    expect(expectPath).toEqual('/file.md');
  });
});

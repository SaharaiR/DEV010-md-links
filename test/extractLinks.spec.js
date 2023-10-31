const fs = require('node:fs');
const extractLinks = require('../lib/extractLinks');

const pathFile = './noLinks.md';
let content;
fs.readFile(pathFile, (err, data) => {
  if (err) throw err;
  content = data;
});

describe('extractLinks', () => {
  it('Deberia de volver un mensaje que no encuentra links en el archivo', () => {
    expect(() => extractLinks(content, pathFile)).toThrowError('El archivo no contiene links');
  });
});

const { describe, it, expect } = require('@jest/globals');
const mdLinks = require('../index');

const expectLinks = [
  {
    url: 'https://www.google.com/',
    text: 'Enlace a Google',
    file: 'C:\\Users\\Admin\\documents\\github\\dev010-md-links\\ejemplo1.md',
  },
  {
    url: 'https://es.wikipedia.org/',
    text: 'Enlace a Wikipedia',
    file: 'C:\\Users\\Admin\\documents\\github\\dev010-md-links\\ejemplo1.md',
  },
  {
    url: 'https://github.com/',
    text: 'Enlace a GitHub',
    file: 'C:\\Users\\Admin\\documents\\github\\dev010-md-links\\ejemplo1.md',
  },
];

describe('mdLinks', () => {
  it('debería resolver un arreglo con 3 links para un archivo .md con 3 links', () => mdLinks('ejemplo1.md').then((result) => {
    expect(result).toEqual(expectLinks);
  }));
});

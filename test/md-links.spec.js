const mdLinks = require('../index');

const expectLinks = [
  {
    url: 'https://www.google.com/',
    text: 'Enlace a Google',
    file: 'C:\\Users\\Admin\\documents\\github\\dev010-md-links\\fileTest.md',
  },
  {
    url: 'https://es.wikipedia.org/',
    text: 'Enlace a Wikipedia',
    file: 'C:\\Users\\Admin\\documents\\github\\dev010-md-links\\fileTest.md',
  },
  {
    url: 'https://github.com/',
    text: 'Enlace a GitHub',
    file: 'C:\\Users\\Admin\\documents\\github\\dev010-md-links\\fileTest.md',
  },
];
/* const expectLinksValidate = [
  {
    url: 'https://github.com/',
    text: 'Enlace a GitHub',
    status: 200,
    message: 'OK',
    file: 'C:\\Users\\Admin\\documents\\github\\dev010-md-links\\fileTest.md',
  },
  {
    url: 'https://www.google.com/',
    text: 'Enlace a Google',
    status: 200,
    message: 'OK',
    file: 'C:\\Users\\Admin\\documents\\github\\dev010-md-links\\fileTest.md',
  },
  {
    url: 'https://es.wikipedia.org/',
    text: 'Enlace a Wikipedia',
    status: 200,
    message: 'OK',
    file: 'C:\\Users\\Admin\\documents\\github\\dev010-md-links\\fileTest.md',
  },
]; */

describe('mdLinks', () => {
  it('Debería resolver un arreglo con 3 links para un archivo .md con 3 links', () => mdLinks('fileTest.md', false).then((result) => {
    expect(result).toEqual(expectLinks);
  }));

  it('debería validar los enlaces cuando se pasa --validate', () => {
    const filePath = './fileTest.md';

    return mdLinks(filePath, true)
      .then((links) => {
        expect(links[0].status).toBeDefined();
        expect(links[0].status).toEqual(expect.any(Number));
      })
      .catch((err) => {
        throw err;
      });
  });

/* it('debería retornar estadísticas cuandoo sepasa --stats', () => {
    const filePath = './fileTest.md';

    return mdLinks(filePath, false, true)
      .then((links) => {
        expect(links.stats).toBeDefined();
        expect(links.stats).toEqual(expect.any(Object));
      })
      .catch((err) => {
        throw err;
      });
  }); */
});

/* describe('mdLinks', () => {
  it('Debería resolver un arreglo con 3 links para un archivo .md con 3 links
  con su status y mensaje', () => mdLinks('fileTest.md', true).then((result) => {
    expect(result).toEqual(expectLinksValidate);
  }));
}); */

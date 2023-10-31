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

  it('Debería validar los enlaces cuando se pasa --validate', () => {
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
});

/* el metodo BEFOREEACH permite configurar el estado antes de cada prueba, en esta caso que se
hace mock a processArgs. Aisla cada prueba */
describe('Argumentos recibidos', () => {
  beforeEach(() => {
    mdLinks.processArgs = jest.fn();
    mdLinks.processArgs.mockReturnValue({
      validate: true,
      stats: true,
    });
    mdLinks.validate = true;
    mdLinks.stats = true;
  });

  it('Deberia retornar TRUE en validate cuando se use el argumento --validate', () => {
    mdLinks.processArgs(['node', 'mdLinks', '--validate']);
    expect(mdLinks.validate).toBe(true);
  });

  it('Deberia retornar TRUE en stats cuando se use el argumento --stats', () => {
    mdLinks.processArgs(['node', 'mdLinks', '--stats']);
    expect(mdLinks.stats).toBe(true);
  });

  it('Deberia retornar TRUE en stats y validate cuando se usen los dos argumentos', () => {
    mdLinks.processArgs(['node', 'mdLinks', '--validate', '--stats']);
    expect(mdLinks.validate).toBe(true);
    expect(mdLinks.stats).toBe(true);
  });
});

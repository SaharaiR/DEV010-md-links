const statsLinks = require('../lib/statsLinks');

const fakeLinks = [{
  url: 'https://ejemplo.com',
  text: 'Enlace a ejemplo',
  status: 200,
  message: 'OK',
  file: 'example.md',
},
{
  url: 'https://ejemplo2.com',
  text: 'Enlace a ejemplo 2',
  status: 200,
  message: 'OK',
  file: 'example.md',
},
{
  url: 'https://ejemplo.com',
  text: 'Enlace a ejemplo 3',
  status: 404,
  message: 'Not found',
  file: 'example.md',
}];

// return statsLinks(links, true, false).then(() => {
describe('statsLinks', () => {
  it('Deberia mostrar estadisticas de estado de links con parametro --validate', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    return new Promise((resolve) => {
      statsLinks(fakeLinks, true, true);
      resolve();
    }).then(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Unique: 2');
      expect(consoleSpy).toHaveBeenCalledWith('Repeat: 1');
      expect(consoleSpy).toHaveBeenCalledWith('Links OK: 2');
      expect(consoleSpy).toHaveBeenCalledWith('Links Fail: 1');
      expect(consoleSpy).toHaveBeenCalledWith('Total: 3');
    });
  });

  it('Deberia mostrar estadisticas basicas (unicos, repetidos y total) con parametro --stats', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    return new Promise((resolve) => {
      statsLinks(fakeLinks, true, false);
      resolve();
    }).then(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Unique: 2');
      expect(consoleSpy).toHaveBeenCalledWith('Repeat: 1');
      expect(consoleSpy).toHaveBeenCalledWith('Total: 3');
    });
  });
});

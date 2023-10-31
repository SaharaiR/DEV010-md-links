const isMarkdown = require('../lib/isMarkdown');

describe('isMarkdown()', () => {
  it('Deberia devolver "true" si es un archivo markdown', () => {
    const result = isMarkdown('test.md');
    expect(result).toBe(true);
  });

  it('Deberia devolver "false" si no es un archivo markdown', () => {
    const result = isMarkdown('test.txt');
    expect(result).toBe(false);
  });

  it('Deberia devolver "false" si no tiene extension', () => {
    const result = isMarkdown('test');
    expect(result).toBe(false);
  });
});

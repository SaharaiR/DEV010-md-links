const { describe, it, expect } = require('@jest/globals');
const statusLinks = require('../lib/statusLinks');

const fakeLinks = [{
  url: 'https://example.com/no-existe',
  text: 'Enlace a no-existe',
}];
const pathFile = 'esFake.md';
const fakeLinksResult = [{
  url: 'https://example.com/no-existe',
  text: 'Enlace a no-existe',
  status: 404,
  message: 'Not Found',
  file: 'esFake.md',
}];

describe('statusLinks', () => {
  it('Debe mandar status y mensaje sino resuelve el enlace', () => statusLinks(fakeLinks, pathFile).then((response) => {
    expect(response).toEqual(fakeLinksResult);
  }));
});

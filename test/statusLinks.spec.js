const statusLinks = require('../lib/statusLinks');

const fakeLinks = [{
  url: 'https://example.com',
  text: 'Enlace a si-existe',
}];
const pathFile = 'esFake.md';
const resultOK = [{
  url: 'https://example.com',
  text: 'Enlace a si-existe',
  status: 200,
  message: 'OK',
  file: 'esFake.md',
}];

describe('statusLinks', () => {
  it('Debe presentar los estados de los links', () => {
    fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      statusText: 'OK',
    }));

    return statusLinks(fakeLinks, pathFile)
      .then((result) => {
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(result).toEqual(resultOK);
      });
  });
  it('Deberia presentar si hay error', () => {
    fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500,
      statusText: 'Internal Server Error',
    }));

    return statusLinks(fakeLinks, pathFile)
      .catch((error) => {
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(error).toEqual({
          status: 500,
          statusText: 'Internal Server Error',
        });
      });
  });
});

/* const fakeLinks = [{
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
  it('Debe mandar status y mensaje sino resuelve el enlace', () => statusLinks(fakeLinks, pathFile)
  .then((response) => {
    expect(response).toEqual(fakeLinksResult);
  }));
}); */

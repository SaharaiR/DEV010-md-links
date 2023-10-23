const showdown = require('showdown');
const jsdom = require('jsdom');

/* Convertimos el archivo markDown a HTML para intentificar los links que se encuentran
se usaron las librerias SHOWDOWN para convertir a HTML y JSDOM para crear un objeto DOM del HTML
se accede con dom.window.document y se identiican con QUERYSELECTORALL pero tambien guardaba enlaces
a otros archivos internos, asi que agregue un filtro para solo identificar URL a HTTP(S) */
function extractLinks(content, pathFile) {
  const converter = new showdown.Converter();
  const html = converter.makeHtml(content);

  const dom = new jsdom.JSDOM(html);
  const doc = dom.window.document;

  const links = [...doc.querySelectorAll('a')]
    .map((a) => ({
      url: a.href,
      text: a.textContent,
      file: pathFile,
    }))
    .filter((link) => link.url.startsWith('http'));
  // console.log(links);
  return links;
}

module.exports = extractLinks;

const showdown = require('showdown');
const jsdom = require('jsdom');

/* Convertimos el archivo markDown a HTML para intentificar los links que se encuentran
se usaron las librerias SHOWDOWN para convertir a HTML y JSDOM para crear un objeto DOM del HTML
se accede con dom.window.document y se identiican con QUERYSELECTORALL */
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
    }));

  // console.log(links);
  return links;
}

module.exports = extractLinks;

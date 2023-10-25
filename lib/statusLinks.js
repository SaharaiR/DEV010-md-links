/* El metodo fetch retorna el status del HTTP, lo tenia resolviendo PROMESA dentro del THEN Y CATCH
segun el caso pero tardaba mucho en mostrar, documentandome, aconsejaban usar PROMISEALL para
asegurarse de cumplir todas las promesas antes de mostrar el array y no demorara */

function statusLinks(links, pathFile) {
/* const timeout = setTimeout(() => {
    Promise.resolve().catch(() => {});
  }, 5000); */

  const newLinks = [];
  const promises = links.map((element) => fetch(element.url)
  // .then((response) => console.log(response.status))
    .then((response) => {
      // clearTimeout(timeout);
      newLinks.push({
        url: element.url,
        text: element.text,
        status: response.status,
        message: response.statusText,
        file: pathFile,
      });
    })
  // .catch((error) => console.error(error));
    .catch((error) => {
      newLinks.push({
        url: element.url,
        text: element.text,
        status: error.status,
        message: error.statusText,
        file: pathFile,
      });
    }));

  return Promise.all(promises)
    .then(() => newLinks);
}

module.exports = statusLinks;

/* MODO ASINCRONO LO QUE OCASIONA ES QUE TARDE EN TERMINAR DE REVISAR LOS STATUS DE CADA LINK
function statusLinks(links, pathFile) {
  const newLinks = [];
  const promises = links.map((element) => fetch(element.url)
  // .then((response) => console.log(response.status))
    .then((response) => {
      newLinks.push({
        url: element.url,
        text: element.text,
        status: response.status,
        message: response.statusText,
        file: pathFile,
      });
    })
  // .catch((er ror) => console.error(error));
    .catch((error) => {
      newLinks.push({
        url: element.url,
        text: element.text,
        status: error.status,
        message: error.statusText,
        file: pathFile,
      });
    }));

  return Promise.all(promises)
    .then(() => newLinks);
} */

/* fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error)) */

/* SIN PROMISE ALL:
    return new Promise((resolve) => {
    links.forEach((element) => {
      // console.log(element.url)
      fetch(element.url)
      // .then((response) => console.log(response.status))
        .then((response) => {
          newLinks.push({
            url: element.url,
            text: element.text,
            status: response.status,
            file: pathFile,
          });
          resolve(newLinks);
        })
      // .catch((error) => console.error(error))
        .catch((error) => {
          newLinks.push({
            url: element.url,
            text: element.text,
            status: error,
            file: pathFile,
          });
          resolve(newLinks);
        });
    });
  }); */

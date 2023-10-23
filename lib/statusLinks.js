/* El metodo fetch retorna el status del HTTP, lo tenia resolviendo PROMESA dentro del THEN Y CATCH
segun el caso pero tardaba mucho en mostrar, documentandome, aconsejaban usar PROMISEALL para
asegurarse de cumplir todas las promesas antes de mostrar el array y no demorara */
function statusLinks(links, pathFile) {
  const newLinks = [];
  const promises = links.map((element) => fetch(element.url)
  // .then((response) => console.log(response.status))
    .then((response) => {
      newLinks.push({
        url: element.url,
        text: element.text,
        status: response.status,
        file: pathFile,
      });
    })
  // .catch((error) => console.error(error));
    .catch((error) => {
      newLinks.push({
        url: element.url,
        text: element.text,
        status: error,
        file: pathFile,
      });
    }));

  return Promise.all(promises)
    .then(() => newLinks);
}

module.exports = statusLinks;

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

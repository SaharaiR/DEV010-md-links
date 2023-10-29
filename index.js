#!/usr/bin/env node
// linea shebang
const readline = require('readline');
const absolutePath = require('./lib/absolutePath');
const fileExists = require('./lib/fileExists');
const isMarkdown = require('./lib/isMarkdown');
const readingFile = require('./lib/readingFile');
const extractLinks = require('./lib/extractLinks');
const statusLinks = require('./lib/statusLinks');
const statsLinks = require('./lib/statsLinks');

let valid = false;
let stadistcs = false;
const argUser = process.argv[2];
const argUserBoth = process.argv[3];
switch (argUser) {
  case '--validate':
    valid = true;
    if (argUserBoth === '--stats') { stadistcs = true; }
    break;
  case '--stats':
    stadistcs = true;
    break;
  default:
    valid = false;
    stadistcs = false;
    break;
}

function mdLinks(path, validate) {
  // console.log('path: ' + path);
  const route = absolutePath(path);
  if (!validate || validate === undefined) {
    return fileExists(route)
      .then(() => isMarkdown(route))
      .then(() => readingFile(route))
      .then((content) => extractLinks(content, route));
  }
  return fileExists(route)
    .then(() => isMarkdown(route))
    .then(() => readingFile(route))
    .then((content) => extractLinks(content, route))
    .then((links) => statusLinks(links, route));
}

/* Crear la interfaz READLINE para poder insertar la dirección desde consola con su
    entrada y salida, se usa RL.QUESTION para hacer la pregunta al usuario */
function askPath() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Ingresa la ruta del archivo: ', (filePath) => {
    rl.close();
    mdLinks(filePath, valid)
      .then((links) => {
        statsLinks(links, stadistcs, valid);
        console.log(links);
      })
      .catch((error) => {
        console.error(error.message);
      });
  });
}

askPath();

module.exports = mdLinks;

/* function askPath() {
  /* Crear la interfaz READLINE para poder insertar la dirección desde consola con su
        entrada y salida, se usa RL.QUESTION para hacer la pregunta al usuario
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
    /* // Creamos promesa para esperar que el usuario teclee la ruta del archivo
    const getPathFile = () => new Promise((resolve) => {
      rl.question('Ingresa la ruta del archivo: ', (filePath) => {
        resolve(filePath);
        rl.close();
      });
    });
      // Al resolver la promesa lo mandamos al archivo para convertir a ruta absoluta
    getPathFile()
      .then((filePath) => {
        // return absolutePath(filePath);
        mdLinks(filePath);
      })
      .catch((err) => {
        console.error(err);
  });
}

askPath(); */

/* mdLinks('./ejemplo1.md', false)
  .then((links) => {
    console.log(links);
  })
  .catch((err) => {
    console.error(err.message);
  }); */
/* mdLinks('./ejemplo1.md', true)
  .then((links) => {
    console.log(links);
  })
  .catch((error) => {
    console.error(error.message);
  });
/* mdLinks('./README.md', true)
  .then((links) => {
    console.log(links);
  })
  .catch((error) => {
    console.error(error);
  }); */

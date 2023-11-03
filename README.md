# Markdown Links

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Consideraciones técnicas](#3-consideraciones-técnicas)
* [4. Instalación](#5-instalación)
* [5. Uso](#6-uso)
* [6. Opciones](#7-opciones)
* [7. Ejemplo](#8-ejemplo)

***

## 1. Preámbulo

[Markdown](https://markdown.es/?utm_source=hashnode&utm_medium=hashnode+rix&utm_campaign=rix_chatbot_answer) se considera un lenguaje que tiene la finalidad de permitir crear contenido de una manera sencilla de escribir y que mantenga un diseño legible.
Los archivos Markdown tienen las extensiones .md o .markdown y se pueden editar con cualquier editor de texto plano como Bloc de notas en Windows o TextEdit en Mac.

Tienen varias ventajas:
* Son de fácil lectura. Su sintaxis es sencilla aun cuando no está procesada.
* Son de fácil escritura.
* Son multiplataforma.
* Generan código HTML válido.
* Al ser de texto plano son ligeros.

## 2. Resumen del proyecto

Esta librería md-linkify es una utilidad de línea de comandos para analizar archivos Markdown e inspeccionar sus enlaces.
* Audita enlaces rotos. Verifica el estado de los enlaces e indica cuáles son válidos y cuáles están rotos.
* Obtiene estadísticas de los enlaces únicos y repetidos.
* Puedes validar enlaces antes de hacer publicaciones.
* Encuentra enlaces repetidos.
* Fácil de usar, la interfaz de línea de comandos hace que sea sencillo escanear sus archivos.
* Puede personaliar las estadistícas a mostrar.

## 3. Consideraciones técnicas


En Windows para para poder ejecutar scprits, antes hay que ejecutar el siguiente comando

`Set-ExecutionPolicy RemoteSigned`

## 4. Instalación

Ejecutar el comando:

`npm install -g md-linkify`

## 5. Uso

`md-linkify [opciones]`

Después te pide ingresar la ruta del archivo a inspeccionar.

## 6. Opciones

* --validate: Verifica el estado de los enlaces (OK/Not found/Internal Error...)
* --stats: Muestra los enlaces únicos y repetidos.
* --validate -stats: Combina las opciones anteriores, mostrando en estadísticas el estado de los enlaces.

## 7. Ejemplo

  ## [Demo](<div>
    <a href="https://www.loom.com/share/f2276bb1bb2f4de59d23c2baf02db6cc">
      <p>demo-md-linkify - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/f2276bb1bb2f4de59d23c2baf02db6cc">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/f2276bb1bb2f4de59d23c2baf02db6cc-with-play.gif">
    </a>
  </div>)

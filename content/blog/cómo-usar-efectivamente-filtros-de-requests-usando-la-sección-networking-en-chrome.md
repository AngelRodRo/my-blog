---
path: como-usar-efectivamente-filtros-por-requests-devtools-chrome
date: 2020-04-25T04:05:20.575Z
title: >-
  Cómo usar efectivamente filtros de requests usando la sección Networking en
  Chrome.
description: >-
  Sabias que puedes filtrar tus peticiones de diversas maneras para encontrar lo
  que buscas mucho mas rapido?
---
Cuando trabajamos en una web muchas veces nos encontramos en la situacion de inspeccionar un recurso, sea un archivo o un request, por diversas razones, sea por saber la respuesta del mismo o algun error, pero nos encontramos con miles de recursos (dependiendo del tamaño de tu proyecto) que nos perdemos entre todo ese mar.

En este articulo, te enseñare los filtros por request de Chrome, que te permitira filtrarlos de manera efectiva y rapida.

## Filtros

**domain:** Muestra los recursos que se indiquen por dominio. Si se añade * se puede poner múltiples dominios.

https://gph.is/g/apQkA23

**mime-type:** Filtra por tipos de recursos, sean jpgs, png, etc. Revisar para saber mas de este tipo (https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

**method:** Muestra los recursos por el tipo de método http. 

**larger-than:** Muestra recursos que sean mayores a un específico tamaño en bytes.

**status-code:** Muestra recursos que coincidan con un status code específico.  

## Extras

Devtools autocompleta con un meny dropdown  todos los valores encontrados de acuerdo a lo que se necesita en el filtro.

## Negación.

Si utilizas el - puedes negar todos los filtros anteriores. Es decir si pones - method: POST serán todos las peticiones excepto el método Post

## Conclusión

Los filtros por requests nos dan mayor libertad para verificar tales recursos por parámetros tales como dominio, mime-type, metodos, tamaño, etc; con lo cual nos dará mucha más facilidad para debugear nuestra web o aplicación, pudieron buscar y separar los recursos que necesitamos de acuerdo a esos parámetros.

## Fuente

* https://developers.google.com/web/tools/chrome-devtools/network/reference#filter
* https://medium.com/threefivetwo/level-up-on-chrome-devtools-network-debugging-with-advanced-filters-c7a8d689affb
* https://stackoverflow.com/questions/14637278/is-there-a-way-to-filter-network-requests-using-google-chrome-developer-tools

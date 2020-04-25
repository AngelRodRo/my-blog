---
path: como-filtrar-eficientemente-peticiones-chrome-devtools
date: 2020-04-25T22:28:40.539Z
title: Cómo filtrar correctamente peticiones con Chrome DevTools.
description: >-
   Sabias que puedes filtrar tus peticiones de diversas maneras para encontrar lo
   que buscas mucho más rapido?
---

![](/assets/Networking-DevTools-Thumbnail.png)

Cuando trabajamos en una web muchas veces nos encontramos en la situación de inspeccionar un recurso, siendo un archivo o una petición, sea por saber la respuesta del mismo o algun error, y suele suceder que nos encontramos una infinidad de peticiones que necesitamos omitir para encontrar lo que necesitamos.

En este artículo, te enseñare los filtros por request de la sección networking de Chrome, que te permitira filtrarlos de manera rapida y simple.



## Filtros

Para empezar a trabajar con los filtros por petición necesitamos ingresar a nuestra consola de desarrollador en Chrome, luego ir a la sección de **Network**.

Una vez hecho eso, deberemos refrescar nuestra pagina, y tendremos a nuestra disposición los filtros. Estos filtros se usan escribiendolos, de los cuales tenemos los siguientes:


**domain:** Muestra los recursos que se indiquen por dominio. Si se añade * se puede poner múltiples dominios.

<iframe src="https://giphy.com/embed/LMtoes20ZqWScnbAz3" width="480" height="444" frameBorder="0" class="giphy-embed" allowFullScreen />

**mime-type:** Filtra por tipos de recursos sean jpgs, png, etc. Puedes revisar mas de tipos en este [enlace](https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types).

<iframe src="https://giphy.com/embed/TJUJXaDpxbKnyCiAo1" width="480" height="444" frameBorder="0" class="giphy-embed" allowFullScreen />

**method:** Muestra los recursos por el tipo de método HTTP.
<iframe src="https://giphy.com/embed/M9HM147yIt1JsCjwAx" width="480" height="444" frameBorder="0" class="giphy-embed" allowFullScreen />

**larger-than:** Muestra recursos que sean mayores a un tamaño específico en bytes.

<iframe src="https://giphy.com/embed/PjIlwW6LHxg6gHrCU0" width="480" height="392" frameBorder="0" class="giphy-embed" allowFullScreen />

**status-code:** Muestra recursos que coincidan con un status code específico.

<iframe src="https://giphy.com/embed/XEOL4Z92JH1gnmHA5p" width="480" height="444" frameBorder="0" class="giphy-embed" allowFullScreen />

Existen otros filtros adicionales, que los puedes revisar [aqui](https://developers.google.com/web/tools/chrome-devtools/network/reference#filter)

Además, Devtools autocompleta con un menu dropdown todos los valores encontrados de acuerdo al filtro encontrado.

**Negación.**
Si utilizas el **-** puedes negar todos los filtros anteriores. Es decir si pones **- method: POST** mostrara todas las peticiones excepto las que contengan el método POST.

## Conclusión

Los filtros por peticiones nos dan mayor libertad para verificar tales recursos por parámetros tales como dominio, mime-type, metodos, tamaño, etc; con lo cual nos dará mucha más facilidad para debugear nuestra web o aplicación, permitiendonos buscar y separar los recursos que necesitamos de acuerdo a esos parámetros.

## Referencias

- https://developers.google.com/web/tools/chrome-devtools/network/reference#filter
- https://medium.com/threefivetwo/level-up-on-chrome-devtools-network-debugging-with-advanced-filters-c7a8d689affb

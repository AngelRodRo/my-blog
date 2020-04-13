---
path: vue-perfomance-tips-part-1
date: 2020-04-12T22:28:40.539Z
title: Tips para mejorar el rendimiento de Vue apps - Parte 1
description: >-
  Les mostraremos 3 tips interesantes acerca de como mejorar el rendimiento de
  tu app usando Vue
---
![](/assets/thumbnail-vuejs.png)

Las optimizaciones son una pieza importante en el desarrollo de tu aplicación, independientemente de la app, siempre se busca que sea lo más rápido y eficaz, rindiendo lo mejor posible.

Por ello, en este primera parte les mostraremos 3 optimizaciones que pueden hacer ahora mismo a tus apps en Vue!

## **Lazy loading**

Tienes un Vue **SPA** (Es decir un Single Page Application) y esta carga lento cada vez que entras a cada ruta?

En vez de enviar toda nuestra app en un solo archivo bundle javascript al navegador, lo que implica tiempos de cargas mas altos dependiendo que lo grande que sea, **Lazy Loading** te permite crear chunks, de modo que se muestren a medida que aparezcan tus vistas.

Para usar lazy loading, necesitan hacer **Dynamic Imports (DI)**, es decir llamar a los components dinámicamente. Esta ultima es una funcionalidad de webpack, con la cual permite hacer code splitting lo cual hara que tengamos chunks del bundle de nuestra app.

Haremos un pequeño ejemplo con una aplicación **Open-Source** llamada [Helpet](https://helpet.codenity.org) de nuestros amigos de [Codenity](https://codenity.org).


Un import normal en nuestra rutas se veria asi:

```js
import RegisterUser from '../views/RegisterUser.vue';
```

Si queremos transformarlo a **DI**, necesitamos usar un **arrow function** junto con la funcion **import** la cual es propia de webpack. Incluso podremos añadir un comentario para identificar el chunk y/o agruparlo dependiendo de nuestras necesidades.

```js
const Home = () => import(/* webpackChunkName: "Home " */'../views/Home.vue');
```
Revisa este [enlance](https://router.vuejs.org/guide/advanced/lazy-loading.html) para mas detalles y configuraciones adicionales.


## Functional Components

Los componentes funcionales tienen la ventaja de ser mucho más ligeros y con mejor performance que los componentes normales, permitiendo crear instancias más “ligeras” para ser renderizadas en el navegador.

Así mismo estos componentes son conocidos como “tontos” o presentacionales, los cuales son perfectos para mostrar elementos de la UI que no necesitan cambiar en el tiempo. Estos no tienen su propia data, estado, tampoco tienen métodos o incluso una instancia, por lo tanto no se puede usar this y su respectivo ciclo de vida.

## Virtual Collection

Una larga colección de componentes suele ser un problema de performance común ¿Retrasos o uso excesivo de memoria al momento de recorrerlas?

Virtual Collection, es un paquete de NPM, el cual es una alternativa perfecta para renderizar tu lista de componentes eficientemente. Te permite tener una larga lista de elementos sin retrasos o excesivo uso de memoria.


### Fuentes
---
path: vue-perfomance-tips-part-1
date: 2020-04-12T22:28:40.539Z
title: Tips para mejorar el rendimiento de tus Vue apps - Parte 1
description: >-
  Les mostraremos 3 tips interesantes acerca de como mejorar el rendimiento de
  tu app usando Vue
---
![](/assets/thumbnail-vuejs.png)

Las optimizaciones son una pieza importante en el desarrollo de tu aplicación, independientemente de la app, siempre se busca que sea lo más rápido y eficaz, rindiendo lo mejor posible.

Por ello, en este primera parte les mostraremos 3 optimizaciones que pueden hacer ahora mismo a tus apps en Vue!

## **Lazy loading**

Tienes un Vue **SPA** (Single Page Application) y este carga lento cada vez que entras a cada ruta?

En vez de enviar toda nuestra app en un solo archivo bundle javascript al navegador, lo que implica tiempos de cargas mas altos dependiendo que lo grande que sea, **Lazy Loading** te permite crear chunks, de modo que se muestren a medida que aparezcan tus vistas.

Para usar lazy loading, necesitamos usar **Dynamic Imports (DI)**, es decir llamar a los components dinámicamente. Esta ultima es una funcionalidad de webpack, con la cual permite hacer **Code Splitting** lo que nos permitira tener chunks del bundle de nuestra app.

Haremos un pequeño ejemplo con una aplicación **Open-Source** llamada [Helpet](https://helpet.codenity.org) de nuestros amigos de [Codenity](https://www.codenity.org).

Un import normal en nuestra rutas se veria asi:

```js
import HomePage from '../views/HomeView.vue';
import RegisterUser from '../views/RegisterView.vue';
import Profile from '../views/ProfileView.vue';
/*
...
*/
```

Esto en el apartado **Network** en nuestra consola de Chrome, podremos ver que resulta en:

![](/assets/normal-imports.png)

Un total de **18 MB** aproximadamente.

Si queremos transformarlos a **DI**, necesitamos usar un **arrow function** junto con la funcion **import** la cual es propia de webpack. Incluso podremos añadir un comentario (llamado tambien como **Comentario Magico** en Webpack) para identificar el chunk y/o agruparlo dependiendo de nuestras necesidades. Para este ejemplo, usamos **DI** para todas las rutas, excepto la del home, la cual sera la que siempre tendra prioridad sobre las demas.

```js
import HomePage from '../views/HomeView.vue';

const RegisterUser = () => import(/* webpackChunkName: "Register " */'../views/RegisterView.vue');
const Profile = () => import(/* webpackChunkName: "Publications" */'../views/ProfileView.vue');
/*
...
*/
```

Si revisamos de nuevo **Network** en Chrome:

![](/assets/dynamic-imports.png)

Lo cual resulta aproximadamente **3 MB** menos.

Ahora lo podemos usar en nuestro router de la siguiente manera:

```js
export default new Router({
  mode: "history",
  routes: [
    /*
    ....
    */
    {
      path: '/register',
      name: 'Register',
      component: RegisterUser,
      meta: {
        title: "User Register",
        auth: true
      }
    },
    /*
    ....
    */
  ]
});
```

Revisa este [enlace](https://router.vuejs.org/guide/advanced/lazy-loading.html) para mas detalles y configuraciones adicionales.

## Virtual Collection

Una larga colección de componentes suele ser un problema de performance común. ¿Retrasos o uso excesivo de memoria al momento de recorrerlas?

[Virtual Collection](https://github.com/starkwang/vue-virtual-collection), es un paquete de NPM, el cual es una alternativa perfecta para renderizar tu lista de componentes eficientemente. Te permite tener una larga lista de elementos sin retrasos o excesivo uso de memoria.

<iframe src="https://giphy.com/embed/JTDvWICnj8Sc4nW3fC" width="480" height="276" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

Aqui les dejo, un ejemplo aplicando su uso por defecto explicado en la documentación:

<iframe
     src="https://codesandbox.io/embed/gallant-satoshi-z8oxp?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
     title="gallant-satoshi-z8oxp"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>

Para mas detalles visiten su documentación. Super recomendado :D

## Componentes funcionales

Los componentes funcionales tienen la ventaja de ser mucho más ligeros y con mejor performance que los componentes normales, permitiendo crear instancias más “ligeras” para ser renderizadas en el navegador.

Así mismo estos componentes son conocidos como **tontos** o presentacionales, los cuales son perfectos para mostrar elementos de la UI que no necesitan manejar el state de Vue. Al ser así, estos no poseen su propia data, state, tampoco tienen métodos o incluso una instancia, por lo tanto no podemos usar _this_ o un ciclo de vida.

Para usar un componente funcional existe 2 formas:

Con el keyword **functional**

```js
<template functional>
    <button>
        <slot />
    </button>
</template>
```

o con la función **render** usando JSX, el cual lo podemos utilizar una vez que instalemos y configuremos este plugin de babel: [babel-plugin-transform-vue-jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx). JSX nos da la ventaja de usar nuestros componentes de una manera muy similar a como lo manejariamos en **React**, lo cual para los que vienen de alli, les resultara mas familiar ;).

```js
<script>
  export default {
    functional: true,
    render: (h, { data, children }) =>
      <button {...data}>
        {children}
      </button >
  }
</script>
```

Si observamos este [benchmark](https://codesandbox.io/s/vue-stateful-vs-functional-yterr) hecho por Austin Gil, nos daremos cuenta la diferencia.

<iframe
     src="https://codesandbox.io/embed/vue-stateful-vs-functional-yterr?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:350px; border:0; border-radius: 4px; overflow:hidden;"
     title="Vue Stateful vs. Functional"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>

Los tiempos de renderizado de los componentes funcionales son menores a comparación de los componentes stateful.

## Referencias

* [Lazy Loading](https://router.vuejs.org/guide/advanced/lazy-loading.html)
* [Working with functional Vue.js Components](https://markus.oberlehner.net/blog/working-with-functional-vue-components/)
* [Functional Components](https://alligator.io/vuejs/functional-components/)
* [Virtual Collection](https://github.com/starkwang/vue-virtual-collection)

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

Por ello, en este articulo 3 optimizaciones que puedes hacer tus apps ahora mismo.

## **Lazy loading**

Tienes un Vue **SPA** (Es decir un Single Page Application) y este carga lento cada vez que entras a cada ruta? 

En vez de enviar toda nuestra app en un solo archivo javascript bundle al navegador, lo que implica tiempos de cargas mas altos dependiendo que lo grande que sea, Lazy loading te permite crear chunks, de modo que se muestren a medida que aparezcan tus vistas.

Para usar lazy loading, necesitan hacer **Dynamic Imports**, es decir llamar a los components dinámicamente esta es una función de webpack, además con ello permite hacer el code splitting lo cual hara que tengamos chunks de nuestro bundle principal.

## Functional Components

Los componentes funcionales tienen la ventaja de ser mucho más ligeros y con mejor performance que los componentes normales, permitiendo crear instancias más “ligeras” para ser renderizadas en el navegador.

Así mismo estos componentes son conocidos como “tontos” o presentacionales, los cuales son perfectos para mostrar elementos de la UI que no necesitan cambiar en el tiempo. Estos no tienen su propia data, estado, tampoco tienen métodos o incluso una instancia, por lo tanto no se puede usar this y su respectivo ciclo de vida.

## Virtual Collection

Una larga colección de componentes suele ser un problema de performance común ¿Retrasos o uso excesivo de memoria al momento de recorrerlas? 

Virtual Collection, es una alternativa perfecta para renderizar tus componentes eficientemente. Te permite tener una larga lista de elementos sin retrasos o excesivo uso de memoria.

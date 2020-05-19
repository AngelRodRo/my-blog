---
path: como-usar-cli-terminal-para-incrementar-productividad
date: 2020-05-19T20:26:29.595Z
title: "Cómo usar los alias CLI alias para incrementar tu productividad \U0001F680"
description: >-
  Probablemente sueles utilizar muchos comandos en el día a día en tu trabajo
  como programador. Muchos de ellos, los repites una y otra vez, para ejecutar
  tus proyectos, servicios, etc. En este pequeña guia te enseñare como usar los
  alias para automatizar todo ese trabajo de una forma sencilla.
---
# Pasos a seguir

Las terminales basadas en UNIX tales como la de Linux o MacOS nos permite crear alias a los comandos, de tal forma que podamos encapsular varias comandos en un solo comando.

Para hacer uso de los alias en la terminal deberemos usar la siguiente sintaxis:

```
$ alias shortName="your custom command here" 
```

Por ejemplo si quisiéramos usar un comando para acceder a nuestros proyectos web en nuestro servidor, podriamos hacerlo asi:

```
$ alias wp=”cd /var/www/html”
```

Para hacer que estos alias sean permanentes debemos hacer algunos pasos adicionales. Debemos modificar alguno de estos archivos, los cuales se inician al momento de cargar nuestra terminal:

\- Bash – **~/.bashrc**\
- ZSH – **~/.zshrc**

Eso lo hacemos de la siguiente manera:

```
nano ~/.bashrc
```

Y alli agregar nuestro alias. Lo recomendable es añadirlo al final del archivo o en alguna ubicación que se nos sea facil acceder.

Luego de eso cerramos y guardamos el archivo y ejecutamos lo siguiente (Dependiendo del archivo que modifiquemos):

```
$ source ~/.bashrc
```

De esa manera nuestros cambios se hacen validos, de otra forma tendremos que reabrir nuestra terminal.

Puedes ver algunos ejemplos aquí:

\[https://gist.github.com/AngelRodRo/38f8238066622a6fd640f72dffbf8a54](https://gist.github.com/AngelRodRo/38f8238066622a6fd640f72dffbf8a54)

# Conclusión

Los CLI alias son una opción muy útil y facil de realizar para automatizar varios comandos que solemos usar muy a menudo. Como uso personal yo lo combino junto con [oh-my-zsh](https://ohmyz.sh/), la cual basicamente es tu misma terminal incluyendo varias funcionalidades adicionales, una de ellas es un plugin de git que justamente usa los alias para encapsular varios de los comandos de git. Por ejemplo: **git status** se convierte en **gst** o el clásico: **git add; git commit -m 'message**', pasa a ser **gcam 'message'.** Y asi existen varias de otros alias.

Quieren que haga una guia explicando como integrar oh-my-zsh? Espero que les haya gustado esta guía rapida, si les gusto compartanlo con sus amigos y dejen un comentario.

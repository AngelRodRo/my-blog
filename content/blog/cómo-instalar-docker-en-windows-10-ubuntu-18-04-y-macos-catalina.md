---
path: como-instalar-docker-en-windows-10-ubuntu-macos
date: 2020-05-27T05:00:00.000Z
title: 'Cómo instalar Docker en Windows 10, Ubuntu 18.04 y MacOS Catalina'
description: >-
  Quieres comenzar a trabajar con Docker ya? En esta guía te explicamos como
  instalar en Windows, MacOS y Linux.
---
![](/assets/programador.jpg)



En esta guía aprenderas a instalar Docker en todos los SO disponibles

# Windows

Para comenzar necesitamos descargar desde [aquí](https://hub.docker.com/editions/community/docker-ce-desktop-windows).

![](/assets/windows-docker-installer.jpg)

Luego lo ejecutamos y comenzamos la instalación. (Dejamos la configuración por defecto)

![](/assets/docker-windows-first.png)

Luego le damos a OK. Y esperamos a que instale.

![](/assets/docker-windows-second.png)

Una vez terminada la instalación, vamos a CMD y escribimos docker --version para verificar la versión.

![](/assets/docker-windows-thrid.png)

Tambien podremos verlo ejecutandose en la barra inferior derecha:

![](/assets/docker-icon.png)

# Ubuntu 18.04 (Linux)

Para este tutorial usaremos Ubuntu 18.04. Necesitamos correr los siguientes comandos.

```
sudo apt update
```

Instalamos algunos paquetes para que se pueda usar HTTPS

```
sudo apt install apt-transport-https ca-certificates curl software-properties-common
```

Agregamos la clave GPG para el repositorio oficial de Docker a su sistema:

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Luego hacemos una actualización

```bash
sudo apt update
```

Por último, instalamos Docker:

```bash
sudo apt install docker-ce
```

Luego verificamos que se esta ejecutando con:

```bash
sudo systemctl status docker
```

Luego agregamos nuestro nuevo de usuario al grupo docker

```bash
sudo usermod -aG docker ${USER}
```

Luego de eso volvemos a entrar a la terminal o hacemos el siguiente comando para que haga efecto los cambios.

```
su - ${USER}
```

# MacOS Catalina

Lo primero que debemos hacer es descargar el instalador de Docker Desktop for Mac desde [Docker Hub](https://hub.docker.com/editions/community/docker-ce-desktop-mac/): 

![](/assets/macos-docker-installer.jpg)

Movemos Docker a nuestra carpeta de Apps y aceptamos todos los permisos correspondientes.

Una vez hecho eso, ejecutamos Docker. Y luegos se nos mostrara en el barra de arriba.

![](/assets/docker-badge.jpg)

# Referencias

https://www.digitalocean.com/community/tutorials/como-instalar-y-usar-docker-en-ubuntu-18-04-1-es

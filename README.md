# Cocktail DB
## Instalar

- [Node](https://nodejs.org/dist/v8.11.3/node-v8.11.3-x64.msi) Version 8.11.3

Los siguiente 'npm global packages' **son opcionales** dado que toda ejecución es manejada por los npm scripts, y dado que estos paquetes son dependencies declaradas en el archivo package.json hace innecesaria su instalación global

> npm install -g typescript\
> npm install -g @angular/cli\
> npm install -g sass\
> npm install -g node-sass

- [Angular CLI](https://cli.angular.io/) version 7.2.4.

Una vez clonado el proyecto debera de instalarse sus dependencias ejecutando

```
npm install
o
npm i
```

## Proceso de desarrollo

El siguiente comando iniciara la aplicación en el puerto 4200 luego debera abrir un navedaro para ingresar la ruta de la aplicación.

> npm start

``` 
Escribir en el navegador: http://localhost:4200
```

El siguiente comando iniciara la aplicación en el puerto 8080 y abrirá automáticamente la página en el navegador por defecto, se recomienda utilizar este comando.

> npm run start:dev

## Construcción

Ejecute `npm run build` o `npm run build:prod` para compilar el poyecto. Los artefactos de compilación se almacenaran en el directorio `dist/cocktail`.


## Especificación de la arquitectura

Definición de cada espacio en el proyecto:

* Main
  * _Components_: Componentes de un proceso de negocio, por ejemplo, los datos de una bebida, etc.
  * _Layouts_: Marcos de la aplicación (MainLayout, BlankLayout, etc.). 
  * _Pages_: Diseño de páginas como NotFound, NotAutorize, etc.
  * _Views_: Vistas generales de una pantalla, por ejemplo, el listado de una bebida.
* Providers
  * _Endpoints_: Rutas de los servicios donde se solicitarán y enviarán datos para procesar el negocio con el Back-end.
  * _Guards_: Seguridad para las rutas, poder verificar si un usuario puede acceder o no a una determinada ruta, como las validaciones de roles.
  * _Services_: Servicios para la validación de negocio y registro de datos.
* Routes: Ruta de navegación principal
* Shared
  * _Helper_: Funcionalidad de apoyo para el desarrollo
  * _Components_: Componentes generales que no tiene lógica de negocio.
  * _Models_: Estructura de los modelos de datos o vistas.
* Enviroment: Variables de publicación

## Ejecutar puebas

Para visualizar las pruebas debe ejecutar el siguiente comando:

> npm run test

## Instalar Docker

- [Docker](https://docs.docker.com/docker-for-mac/install/) Version 19.03.5

### Construir imagen

Ejecutamos el comando para construir la imagen pasando el parametro de entorno (dev|prod) e indicamos el nombre que tendra la imagen.

> docker build --build-arg env=prod -t appcocktail .

Cuando termine la construcción de la imagen procedemos con la ejecución del container e indicaremos que se muestre en el puerto 8081

> docker run -p 8081:80 appcocktail

``` 
Escribir en el navegador: http://localhost:8081
```

# Practica 2 SOAP

Este proyecto es un servidor de webservice que consume el servicio [soap](http://www.dneonline.com/calculator.asmx?WSDL) y ejecuta operaciones matematicas

## Ejecutar el programa

En el directorio del programa se debe de ejecutar en la terminal:

### `npm install`

Este comando descargara todas las librerias necesarias para ejecutar la aplicacion.

### `npm run devStart`

Abrir [http://localhost:3000](http://localhost:3000) para visualizar la aplicacion den el navegador.


## Librerias utilizadas
+ [nodemon](https://www.npmjs.com/package/nodemon) 
+ [express](https://expressjs.com/es/)
+ [SOAP](https://www.npmjs.com/package/soap)

## Operaciones

**Nota: Para testear las operaciones se recomienda el uso de consola**

Los valores iniciales de las operaciones son:

    valor1 : 4
    valor2 : 4
### Suma
    Suma  { AddResult: 8 }
### Resta
    Resta  { SubtractResult: 0 }
### Divison
    Division  { DivideResult: 1 }
### Multiplacion
    Multiplicacion  { MultiplyResult: 16 }
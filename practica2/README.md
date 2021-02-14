# Practica 2

Este proyecto es un servidor de webservice en nodeJS en el cual se genera un token utilizando JWT y luego se verifica que el mismo token sea correcto

## Ejecutar el programa

En el directorio del programa se debe de ejecutar en la terminal:

### `npm install`

Este comando descargara todas las librerias necesarias para ejecutar la aplicacion.

### `npm run devStart`

Abrir [http://localhost:3000](http://localhost:3000) para visualizar la aplicacion den el navegador.


## Librerias utilizadas
+ [nodemon](https://www.npmjs.com/package/nodemon) 
+ [express](https://expressjs.com/es/)
+ [JWT](https://jwt.io/)

## Apis

**Nota: Para testear las apis se recomienda el uso de postman**

### localhost:3000/api/login
Esta direccion api es un POST que retorna el token generado, en base a los criterios de entrada:

    {     
     nombre: "Jose Fernando Valdez Perez",
     carnet: "201503651"             
    }

Su respuesta tiene la siguiente estructura:

    {     
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5vbWJyZSI6Ikpvc2UgRmVybmFuZG8gVmFsZGV6IFBlcmV6IiwiY2FybmV0IjoiMjAxNTAzNjUxIn0sImlhdCI6MTYxMzMxMDcxOCwiZXhwIjoxNjEzMzE0MzE4fQ.VfQtyKhK4Wa783LvXAzKKm1HC_EIu_IVAMEAq9B-oUQ"          
    }

### localhost:3000/api/posts
Esta api POST retorna la rspuesa si el token es correcto o no, para enviar el token se debe incluir en los headers (El tiempo de vida del token es de 1 hora):
    
     Authorization: Bearer <Token>        
    
La respuesta del servidor tiene la siguien estructura:

    {
    "mensaje": "Token valido",
    "authData": {
        "user": {
            "nombre": "Jose Fernando Valdez Perez",
            "carnet": "201503651"
            },
        "iat": 1613310718,
        "exp": 1613314318
        }   
    }
# AQAI Backend Web

Este repositorio contiene el backend creado para Web

## Stack de Tecnologías

-  [Node](https://nodejs.org/en/download) se debe instalar para correr a nivel local. (v^18.20.5)

-  [Postgresql](https://www.postgresql.org/download/) se debe instalar para correr a nivel local (v15)

-  [Docker](https://www.docker.com/) instalado en tu sistema.

-  [Docker Compose](https://docs.docker.com/compose/) instalado.

  

### Dependencias

- bcryptjs: ^2.4.3

- body-parser: ^1.20.3

- cors: ^2.8.5

- crypto: ^1.0.1

- dotenv: ^16.4.5

- express: ^4.21.1

- jsonwebtoken: ^9.0.2

- nodemon: ^3.1.7

- pg: ^8.13.1

- sequelize: ^6.37.5

  

## Ejecución

Se recomienda la utilización de Docker para facilitar su configuración y despliegue.

### Por Docker

1. Construye y Levanta los contenedores

```sh

docker-compose  up  --build

```

2. Accede a la aplicación mediante [Postman]()

La aplicación estará disponible en `http://localhost:4000`

  

### De forma Local

Nota: debe estar instalado Node.js, Postgresql, previamente.

1. Instala las dependencias

```sh

npm  install

```

2. Corre la aplicación

```sh

npm  start

```

3. Accede a la aplicación mediante [Postman](https://www.postman.com/)

La aplicación estará disponible en `http://localhost:4000`

  

`Puedes descargar la colección para postman desde el Drive.`

  

### Notas

Asegúrate de configurar las variables de entorno necesarias en un archivo `.env` antes de ejecutar los contenedores.

En el archivo .envLocal están las configuraciones para utilizar la aplicación con Docker o de forma Local

  

## Comandos útiles

  

- Detener los contenedores:

```sh

docker-compose down

```

  

- Ver logs:

```sh

docker-compose logs -f

```

  

- Reconstruir contenedores:

```sh

docker-compose up --build

```

  

## Estructura del proyecto

  

-  `Dockerfile`: Define la imagen de Docker para la aplicación.

-  `docker-compose.yml`: Configuración de los servicios de Docker Compose.

-  `.env`: variables de entorno

  

### Arquitectura

```plaintext
📁 AQAI_Backend
├── 📁 src
│   ├── 📁 models       # Definición de tablas y relaciones
│   ├── 📁 repository   # Consultas: insertar, obtener, modificar y eliminar datos
│   ├── 📁 controllers  # Lógica de respuestas para cada endpoint
│   ├── 📁 routes       # Rutas definidas para la API
│   └── 📁 utils        # Herramientas auxiliares (ej.: encriptación de claves)
└── 📁 Config
    └── 📁 db           # Configuración de la conexión a la base de datos

```

## Notas

Asegúrate de configurar las variables de entorno necesarias en un archivo `.env` antes de ejecutar los contenedores.

En el archivo .envLocal están las configuraciones para utilizar la aplicación con Docker o de forma Local
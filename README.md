# movieapi
Desarrollado utilizando Express.js, este proyecto es una API con una interfaz web diseñada para gestionar una colección de películas. La API permite manipular las diferentes entradas fácilmente mediante la interfaz web diseñada para ello. El proyecto está construido bajo el funcionamiento de una base de datos MySQL.

La API expone diferentes rutas a través de un enrutador definido en Express. Estas rutas incluyen:

- `/api/movies`: Para mostrar todas las películas disponibles.
- `/api/movies/:id`: Para obtener detalles de una película específica por su ID.
- `/api/movies`: Para crear nuevas entradas de películas.
- `/api/movies/:titulo`: Para modificar los datos sobre una película identificándola mediante su título.
- `/api/movies/:titulo`: Para eliminar una película identificándola mediante su título.
  
Para utilizar la API, se recomienda configurar una base de datos MySQL utilizando XAMPP y phpMyAdmin a nivel local. Se proporciona un archivo exportado de la base de datos para facilitar las pruebas (más detalles a continuación).

## Instalación
Para instalar y configurar el proyecto, sigue estos pasos:

Clona el repositorio desde GitHub:

`git clone https://github.com/carlosfermed/movieapi.git`

Navega al directorio del proyecto:

`cd tu-repositorio`

Instala las dependencias necesarias utilizando npm:

`npm install`

Crea una base de datos de forma local e importa la tabla con la información de las películas mediante el archivo 'moviedatabase.sql'.

Asegurate de establecer la configuración correcta de conexión con la base de datos en el archivo 'app/db.js' del proyecto.

## Uso:
Puedes ejecutar el servidor usando el comando `npm start`. El servidor escuchará en el puerto especificado (3000 por defecto, o el puerto definido en la variable de entorno PORT). 

Una vez que el servidor esté iniciado, sigue estos pasos para utilizarlo:

Abre el archivo 'index.html' facilitado para acceder a la interfaz web proporcionada.

Desde la interfaz, podrás realizar las siguientes operaciones:

-- Visualizar las películas almacenadas.

-- Eliminar películas existentes.

-- Crear nuevas entradas de películas.

-- Modificar entradas ya almacenadas.

-- Ver información adicional sobre cada película.

Los cambios realizados se reflejarán en la base de datos configurada previamente.

## Estado del proyecto:
El proyecto está activo y en estado de mejora continua en caso de que tengas alguna sugerencia.

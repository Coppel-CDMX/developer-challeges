# TODO App | Enrique Carranza Balderas

 - Repositorio que contiene el código de la aplicación tipo CRUD sobre un administrador de tareas para la prueba técnica en la vacante de Desarrollador Sr.
 
 Para utilizar sistema tenemos dos maneras principales:
 
 1. La primera es a través de la nube en el siguiente enlace: http://54.191.62.123/login; el cuál nos enviará al sistema funcionando en un ambiente de servidor en una instancia EC2 de AWS.
 
 2. La segunda es descargando o clonando el repositorio a nuestra máquina local; para esto es necesario tener configurado un entorno para correr sistemas web basados en PHP, específicamente en la versión 8.1+. Al ser esta la forma en la que se desarrolló, considero importante describir el proceso que debemos seguir para poner en funcionamiento el sistema en esta área (entorno de desarrollo).

 Para levantar todo el entorno necesario de forma rápida podemos apoyarnos de alguna herramienta como WAMP o XAMPP, que ya cuentan con Apache, PHP y MySQL; que son las tres herramientas principales en las que se encuentra desarrollado el sistema. En caso contrario, es posible instalar y configurar cada una de ellas de forma separada, para ello lo ideal seguir las instrucciones que nos muestran los sitios web oficiales de cada tecnología.

 Una vez que tengamos configurados estos tres elementos (PHP, MySql y Apache server) en nuestro entorno local, y habiendo clonado el proyecto desde github, procederemos a conectarnos a nuestro servidor de base de datos (esto lo podemos hacer desde cualquier manejador de BD. Entre los que puedo recomendar están DBeaver o MySQL Workbench, ambos de uso gratuito). Una vez conectados, crearemos una base de datos nueva con la siguiente instrucción:

 CREATE DATABASE developer_challeges;

 Después de haber creado la BD regresaremos nuevamente a nuestra carpeta del proyecto. Una vez ahí, haremos una copia del archivo ".env.example", con la diferencia de que el nuevo archivo se llamará ".env". En ".env" nos aseguraremos de tener las siguientes líneas:

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=developer_challeges
    DB_USERNAME=root
    DB_PASSWORD=

 Lo anterior nos permitirá que Laravel se conecte a nuestra Base de datos y pueda realizar todos los movimientos que programemos, así que no nos olvidemos de poner nuestras credenciales correctamente, ya que de lo contrario tendremos errores por doquier.

 Para continuar con el proceso, corremos los siguientes comandos desde dentro de la carpeta raíz del proyecto:

 - composer install
 - npm install

 Estos nos instalarán las dependencias que el sistema necesita para funcionar.

 Si todo sale bien, haremos un "php artisan migrate --seed"; esto nos instalará los esquemas de la BD en la BD que creamos anteriormente, también colocará la información necesaria para que el sistema funcione.

 Si todo sale bien, lo que sigue es abrir dos terminales; en la primera corremos el comando "php artisan serve" y en la segunda "npm run watch".

 Una vez corriendo, ya casi estamos listos para disfrutar de la aplicación; corremos los siguientes comandos:

 - php artisan jwt:secret | Que nos sirve para crear una clave de JWT para el cifrado de las peticiones.
 - php artisan artisan key:generate | Que nos sirve para crear una clave hash de la api.
 - php artisan dump-autoload | Que nos sirve para hacer un mapeo de todas las clases ya archivos en el proyecto.

 Una vez puesto esto en funcionamiento, nuestro sistena debería poder verse sin problemas en la url que nos indica la consola; en la mayoría de los casos es http://localhost:3000.
 
 Es un proyecto ligero por lo que preferí montar una arquitectura MVC, pues me pareció lo óptimo para el nivel de abstracción, la seguridad y la escalabilidad que tendrá.

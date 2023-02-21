# Prueba técnica para postulantes (Fullstack)

La siguiente es una prueba para evaluar a los postulantes enfocada en desarrollo backend y frontend.

# Introducción

A continuación se presentarán una serie de requerimientos que buscan evaluar las capacidades técnicas del candidato con respecto a las principales funciones y responsabilidades que se requieren dentro del área de Desarrollo de Coppel.

## ¿Qué se busca evaluar?

Principalmente los siguientes aspectos:

- Estructuración de una aplicación: Conocimiento e implementación de patrones de arquitectura y de diseño tanto en frontend como en backend.
- Calidad del código entregado: Conocimiento y uso de buenas prácticas de codificación.
- Familiaridad con los entornos de desarrollo: Conocimiento y uso de las herramientas de desarrollo backend y frontend más actuales y de mayor uso.

## Instrucciones previas al desarrollo

Antes de comenzar a programar:

1.  Realice un Fork de este repositorio (https://github.com/Coppel-CDMX/developer-challeges).
2.  Clone el fork a su máquina local.
3.  Cree una rama con su nombre completo en su repositorio local.
    - ej: git checkout -b ERNESTO_HERNANDEZ_CHAVEZ

## Requerimientos

Tanto backend como frontend deberán ser expuestos al acceso público mediante una PaaS (heroku, gcloud, aws, ...) y los links correspondientes deberán ser incluidos en la descripción del pull request o en el correo donde se entregue el proyecto.

### Backend

El desarrollo del backend se deberá hacer según el lenguaje que se elija con alguno de los frameworks descritos en la siguiente tabla:

| Lenguaje              | Frameworks             |
| --------------------- | ---------------------- |
| Python                | Django, Flask, Pyramid |
| Java/Kotlin           | Spring, Spark, Quarkus |
| JavaScript/TypeScript | Express, Sail, Hapi    |

### Frontend

El desarrollo del front deberá ser en javascript o typescript usando algún framework enfocado al desarrollo front (React, Angular, Vue.js, etc...)

---

# Aplicación TODO

Se requiere generar el backend y el frontend necesario para una aplicación de registro y control de tareas que proporcione las siguientes funcionalidades principales:

- Registro del usuario en la aplicación.
- Manejo de sesión del usuario (Abrir y cerrar sesión).
- Manejo y visualización de tareas (Crear, editar y borrar).

## Pantallas

A continuación se presenta el listado de las pantallas y los elementos mínimos que deben contener.

### Pantalla de inicio de sesión.

- Input de nombre de usuario.
- Input de contraseña.
- Botón de inicio de sesión.
- Botón de Login.

<img src="./images/web_login_username_password.jpg" alt="" width="500"/>

### Pantalla de registro:

- Input de nombre de usuario.
- Input de contraseña.
- Botón de registro.

<img src="./images/web_register.jpg" alt="" width="500"/>

### Pantalla principal:

- Menú:
  - Botón de cierre de sesión.
- Listado de elementos.
  - Elemento:
    - Contenido.
    - Botón de edición.
    - Botón de borrado.
- Botón de creación de nueva tarea.

<img src="./images/web_todo_home.jpg" alt="" width="500"/>

## Casos de uso:

### Registro

1. El usuario accede a la pantalla de login y elige la opción de registro.
2. En la pantalla de registro el usuario introduce correo válido y una contraseña alfanumérica.
3. La aplicación realiza el proceso de registro.
4. La aplicación redirige al usuario a la pantalla de inicio de sesión.

### Inicio de sesión

1. El usuario accede a la pantalla de login e introduce los datos con los que se registró (correo y contraseña).
2. La aplicación valida los datos del usuario.
3. La aplicación redirige al usuario a la pantalla principal.

### Cierre de sesión

1. El usuario con sesión válida en la pantalla principal da click al botón de cierre de sesión.
2. La aplicación limpia la sesión del usuario.
3. La aplicación redirige al usuario a la pantalla de inicio de sesión.

### visualizar tareas

1. El usuario con una sesión válida accede a la pantalla del listado de tareas.
2. La aplicación muestra la lista de tareas del usuario.

### Creación de tareas

1. El usuario dentro de la pantalla principal selecciona la opción de crear nueva tarea.
2. La aplicación mostrará un modal con un formulario para la creación de la tarea.
3. El usuario introduce el contenido de la tarea y da click en el botón crear.
4. La aplicación registra la tarea en el backend y la agrega a la lista en la pantalla.

### Edición de tareas

1. El usuario selecciona la opción de editar de la tarea.
2. La aplicación mostrará un modal con un formulario para la edición de la tarea.
3. El usuario modifica el contenido y da click en el botón actualizar.
4. La aplicación actualiza la información de la tarea en el backend y en la lista de tareas.

### Borrado de tareas

1. El usuario selecciona la opción borrar de una tarea.
2. La aplicación confirma pide confirmación para borrar la tarea mediante una alerta.
3. El usuario hace click en la opción de confirmar.
4. La aplicación elimina la tarea del backend y de la lista en la pantalla.

## Reglas de negocio

- Las tareas son privadas para cada usuario, un usuario no puede ver las tareas de los demás.
- Los usuarios solo pueden ver, editar y eliminar tareas si tiene una sesión válida activa.
- El tamaño máximo del contenido de las tareas es de 150 caracteres.
- No se pueden crear tareas con un contenido vacío o que incluyan únicamente caracteres de espacio.

## Consideraciones generales

- Tanto el backend como el frontend deben estar alojados en una PaaS

## Consideraciones para el backend

- Se deberá validar el acceso a cualquier recurso mediante [Oauth2]() y [JWT](https://jwt.io/), exceptuando el registro de usuarios y el inicio de sesión.
- Debe asumirse que los datos de registro y de inicio de sesión serán cifrados por el frontend.
- Se deberá usar alguna de las siguientes bases de datos:
  - MySQL
  - PostgreSQL
  - MongoDB

## Consideraciones para el frontend

- A Cualquier petición realizada al backend se debe añadir autenticación [Oauth2](https://oauth.net/2/) con un bearer token [JWT](https://jwt.io/), exceptuando el registro de usuario y el login.
- Los datos para las peticiones al back del registro de usuario y el inicio de sesión se deben cifrar previamente.

---

# Instrucciones de entrega

Al finalizar debera realizar un [Pull Pequest](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) hacia el repositorio original (https://github.com/Coppel-CDMX/developer-challeges), posterior a esto debera informar por correo el termino de su prueba incluyendo la siguiente informacion:

- Link o links al código.
- Links de acceso a la aplicación.

Ejemplo:

```yaml
Hola, hago entrega de desarrollo del proyecto de prueba.

Backend:
Repositorio: https://github.com/xxxxx
Link de la aplicacion: https://xxxxx.herokuapp.com/

Frontend:
Repositorio: https://github.com/xxxxx
Link de la aplicacion: https://xxxxx.herokuapp.com/

Saludos.
```

> Todos los links que proporcione deben ser de acceso público


# PRUEBA TECNICA

# -BACKEND [Heroku]
Java 8 y MySQL

API Endpoint Prod: 
[https://backend-coppel-todo-list.herokuapp.com/](https://backend-coppel-todo-list.herokuapp.com/)


La base de datos en Mysql está corriendo en una instancia de RDS en Amazon Web Services

## Environment Variables

Para correr el proyecto es necesario añadir las siguientes variables de entorno:

`GOOGLE_CID`

`JWT_SECRET`

`MYSQL_PASS`

`MYSQL_URL`

`MYSQL_USER`


## Deployment

Para desplegar el proyecto corra:


```bash
  heroku login
  git add .
  git commit -am "commit name"
  git push heroku master
```


## Run Local

Clone the project

```bash
  git clone https://github.com/dgarcia92/developer-challeges.git
```

Go to the project directory

```bash
  cd coppel-todo-list-app/backend-coppel-todo-list
```

Install dependencies

```bash
  mvn clean package
```

Build

```bash
  mvn clean install
```

Start the server

```bash
  java -jar target/backend-coppel-todo-list-<version>.jar
```



# - FRONTEND [Firebase]
Angular 14

Url: 
[https://coppel-todo-list.web.app/](https://coppel-todo-list.web.app/)


## Deployment in Firebase

Para desplegar el proyecto corra:


```bash
firebase login
firebase init
ng build
firebase deploy
```

## Run Local

Clone the project

```bash
  git clone https://github.com/dgarcia92/developer-challeges.git
```

Go to the project directory

```bash
  cd coppel-todo-list-app/frontend-todo-list
```

Install dependencies

```bash
  npm install
```

Install Angular CLI

```bash
  npm install -g @angular/cli
```

Start the server

```bash
  ng serve -o
```
2. Microservicio Docker
1. Código sencillo:
Puede ser un “Hello World” en Node.js/Python/Go/Java, o cualquier lenguaje que dominues.
Solo debe exponer un endpoint HTTP (por ejemplo, GET /hello) que responda “Hello from ”.
2. Dockerfile:
Construye tu microservicio en una imagen minimalista.
No incluyas secretos o credenciales en la imagen.
3. Publicación:
Sube la imagen a un registry (Docker Hub, ECR, etc.) o adjunta tus pasos en el pipeline.

Para este ejercicio desarrollé un microservicio en JavaScript - NodeJS – Express.
Configurado en el puerto 3000 y dockerizado en el 4000 desde el exterior.
Endpoint local: http://localhost:3000/api/greetings y cuyo resultado es Hello from como indica 
el planteamiento del ejercicio

Conexión a la base de datos en un hosting externo:
const sequelize = new Sequelize('delconsas_ada-test', 'delconsas_admin25', 'Proceso2025$' , 
{
 host: 'www.delconsas.com.co',
 dialect: 'mysql'
});
Nota1: cuando se vaya a verificar la aplicación desde el contenedor se debe exponer en el 
puerto 4000 y este internamente se comunica con el 3000 interno.

Nota2: Pensé crear los métodos POST, PUT y DELETE por eso es que creé una base de 
datos automáticamente a través del ORM sequelize pero al final decidí solo codificar el 
método GET como requiere la prueba.
Características del proyecto
{
 "name": "Ada2025",
 "version": "1.0.0",
 "main": "index.js",
"scripts": {
"start": "nodemon index.js"
},
 "keywords": [],
 "author": "",
 "license": "ISC",
 "description": "",
 "dependencies": {
 "bcryptjs": "^2.4.3",
 "body-parser": "^1.19.0",
 "express": "^4.17.1",
 "express-myconnection": "^1.0.4",
 "express-validator": "^6.11.1",
 "jwt-simple": "^0.5.6",
 "moment": "^2.29.1",
 "mysql2": "^2.2.5",
 "sequelize": "^6.6.2"
 },
 "devDependencies": {
 "nodemon": "^2.0.7"
 }
}

Nota3: Si notas en el package.json ejecuté varias librerías que no logré usar ya que tuve la 
intención de utilizar todos los métodos con logueado (Usuario / Contraseña) y protección de rutas 
a través de middlewares.

Contenedor desplegado en DockerHub
Ruta: marvindlpg/docker_node_app
Tipo: Public

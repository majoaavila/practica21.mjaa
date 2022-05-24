//////////////////////////////////////////////////////////////////////////////////////
//PRACTICA #17 Utilizando el servicio de Mongo DB Atlas MARIA JOSE AVILA AMEZCUA 4H

// const express = require('express'); //se importa la dependencia -- inyeccion de dependencia

// let app = express(); //desclaramos una App de Express 

// const mongoose = require("mongoose") // aqui se conecta la database

//aqui se va a guardar el user password y uri
// const user = 'majoaavila'
// const password = 'china12345'
// const uri = `mongodb+srv://${user}:${password}@cluster0.1bwvg.mongodb.net/?retryWrites=true&w=majority`


//conectar base de datos mediante mongoose
// mongoose
//     .connect(uri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() => console.log("Base de datos conectada exitosamente"))
//     .catch((error) => console.log(error));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PRACTICA 19 
const mongoose = require('mongoose'); //inyectar dependencia mongoose
const express = require('express'); //inyectar dependencia de express
const personsRoutes = require ('./routes/persons'); //inyectar dependencia de router d persons

//aqui generamos el app de express y setteamos el valor de mongoose
mongoose.Promise = global.Promise;
const app = express();

//aqui configuamos el view engine y agregamos el router
app.set('view engine', 'ejs');
//agregamos el urlencoded para parsear el body en peticiones de POST
app.use(express.urlencoded({extended:false}));
app.use(personsRoutes);

//conexion a database
mongoose.connect (
    `mongodb+srv://user:user@cluster0.1bwvg.mongodb.net/practicaPW?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("Connected succesfully");

});

//se levanta el server
app.listen(3000);



































// let port = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor -- definimos puerto de escucha
// app.use('/assets', express.static(__dirname + '/public')); //contenido estatico

// app.use(express.urlencoded({ extended: false })); //aqui se especifica que se va a parsear peticiones con URL encoded payload (datos dentro de body)

// app.set('view engine', 'ejs'); //hace q nuestra 'app' de 'express' use 'EJS' como motor de vistas

// //primera ruta (esta al nivel de la raiz /), Hello World! ROUTE HANDLER
// app.get('/', function (req, res) {
//     //insertar etiqueta <link>
//     res.send(`<!DOCTYPE html> <html lang="en"> <head><link rel="stylesheet" href="assets/style.css"/>
//     <title> Document </title> </head>
//     <body> <h1> Hola mundo </h1>
//     <p>Este es un parrafo y su contenido debe ser azul!</p></body> </html>`);
// });


// //aqui se recibe un parametro
// // app.get('/person/:id', function(req, res) {
// //     res.send(`<!DOCTYPE html> <html lang="en"> <head><link rel="stylesheet" href="assets/style.css"/>`);
// // }); -- se modifica a:
// app.get('/person/:id', function(req, res) {
//     res.render('person', {ID: req.params.id, Qstr: req.query.qrst});
// });

// app.get('/message/:id', function(req,res) {
//     res.render('message', {ID: req.params.id, message: req.query.message, times: req.query.times})
// });

// //ruta student: POST - la ruta /student respondera al form, GET - renderiza la vista index.ejs
// app.post('/student', (req,res) => {
//     res.send(`First Name es: ${req.body.fname}, Last name es: ${req.body.lname}`);
// })

// app.get('/student', (req, res) => {
//     res.render('index');
// })

// app.listen(port); //levantar el server y ponerlo a la escucha



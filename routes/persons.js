const express = require('express'); // se inyecta la dependencia
const router = express.Router(); // generamos la instancia del router
const mongoose = require('../node_modules/mongoose'); // se inyecta la dependencia de mongoose

let Person = require('../models/person'); //inyecta dependencia del modelo person
const { route } = require('express/lib/application');

//se agrega ruta persons => metodo GET
//aqui nos renderizara la vista en vez del objeto json
router.get('/persons', function (req, res, next) {
    Person.find(function (err, persons) {
        if(err) return next(err);
        res.render('persons',{'persons' : persons} ); //cambia el tipo de objeto json par q se envie un objeto formateado
    });
});

//ruta GET - permite mostrar el formulario en pantalla para insertar los datos a nuestra database, aqui se renderiza la vista del form en html
router.get('/person', function(req, res) {
    res.render('person');
});


//ruta POST - atiende la peticion, aqui agregamos la ruta POST, para poder agregar un nuevo documento a la coleccion
router.post('/addPerson', function(req, res) {
    //creamos la entidad - toma como valores los que son introducidos al body de la pericion
    const myPerson = new Person ({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss });
    //se guarda en la database
    myPerson.save();
});

//ruta GET - permite mostrar la pagina principal
router.get('/main', function(req, res) {
    res.render('main');
});




//exportar el router
module.exports = router;
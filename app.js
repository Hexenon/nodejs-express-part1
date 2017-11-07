'use strict';
//----------------------------------------------
// Const section
//----------------------------------------------
const express = require('express');
const app = express();
const autoloader = require('auto-load');

//----------------------------------------------
// Express app view engine configuration
//----------------------------------------------
app.set('views', './views'); // specify the views directory
app.set('view engine', 'ejs'); // register the template engine


//----------------------------------------------
// Routes exposure
//----------------------------------------------

// incluimos las rutas de manera automática a un objeto,
// el nombre del archivo será la extensión del objeto,
// en este caso usaremos el archivo "views" para las rutas
// de todas las vistas.
let routes = autoloader('./routes');

app.use('/', routes.views);
app.use('/assets', routes.assets);





//----------------------------------------------
// application start
//----------------------------------------------
app.listen(3000, function() {
    console.log('My first Express application listening in http://localhost:3000/');
});




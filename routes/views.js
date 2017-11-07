'use strict';

const express = require('express');
let router = express.Router();

//------------------------------
// Clean Code
//------------------------------
router.get('/', renderIndex);
router.get('/about', renderAbout);


// Retornamos del router modificado.
module.exports = router;


//------------------------------
// Functions
//------------------------------

/**
 * función manager de la ruta /
 * @description Para manejar la petición de un GET a la ruta /
 * regresamos la vista renderizada index.
 * podemos pasar argumentos en un modelo de datos
 * en éste caso, vamos a manipular el titulo y un poco del contenido.
 * @param req
 * @param res
 */
function renderIndex(req, res){
    let model = {
        title: 'Home',
        content: 'My awesome code is working! ;)'
    };
    res.render('index', model);
}

/**
 * función manager de la ruta /about
 * @description Para manejar la petición de GET de la ruta /about
 * vamos a regresar la vista "about.ejs" renderizada al igual que el index, pero
 * modificaremos un poco los datos enviados.
 * @param req
 * @param res
 */
function renderAbout(req, res){
    let model = {
        title: 'About',
        content: 'My awesome personal information'
    };
    res.render('about', model);
}

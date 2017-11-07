'use strict';

const express = require('express');

/**
 * retornamos el static del directorio relativo assets
 * @returns {*}
 */
module.exports = express.static(__dirname + '/../assets');
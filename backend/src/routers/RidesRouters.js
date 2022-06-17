const express = require('express');
const routerRides = express.Router();

const ridesController = require('../controllers/RidesController');

routerRides.post('', ridesController.postRide);
routerRides.get('', ridesController.getRides);
routerRides.get('/:vehicle/:password', ridesController.getRidesbyKeyValue);

module.exports = routerRides;
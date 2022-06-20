const userRouters = require('../routers/User.Routes');
const vehicleRouters = require('../routers/Vehicle.Routes');
const rideRouters = require('./Rides.Routers')
const express = require('express');
const routes = express.Router();

routes.use('/users', userRouters);
routes.use('/vehicles', vehicleRouters);
routes.use('/rides', rideRouters);
module.exports = routes;

const express = require('express');
const router = express.Router();

const vehicleController = require('../controllers/VehicleController');

router.post('', vehicleController.createVehicle);
router.get('', vehicleController.getVehicle)

module.exports = router;

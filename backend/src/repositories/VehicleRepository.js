// fazendo o uso da tabela de Usuario através do mongoose
const mongoose = require('mongoose');
const Vehicle = mongoose.model('Vehicle'); // acessando a tabela de veículo

const createVehicle = async (vehicle) => {
  return await Vehicle.create(vehicle);
}

const getVehicles = async () => {
  const response = await Vehicle.find({});
  return response;
}

const vehicleByLicensePlate = async (plate) => {
  const response = await Vehicle.findOne({ licensePlate: plate });
  return response;
}

module.exports = {
  createVehicle, vehicleByLicensePlate, getVehicles
}

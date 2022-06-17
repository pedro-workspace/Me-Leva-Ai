//Partição de controladores de Rides
const rideServices = require('../services/RideServices')

const postRide = async (req, res) => {
    const payload = req.body
    const response = await rideServices.createRide(payload)
    return res.status(response.statusCode).json(response.data)
}

const getRides = async (req, res) => {
    const response = await rideServices.getRides()
    return res.status(response.statusCode).json(response.data)
}

const getRidesbyKeyValue = async (req, res) => {
    const {vehicle, createdAt} = req.params
    const response = await rideServices.getRidesByKeyValue(vehicle, createdAt)
    return res.status(response.statusCode).json(response.data)
}

module.exports = {
    postRide, getRides, getRidesbyKeyValue
}
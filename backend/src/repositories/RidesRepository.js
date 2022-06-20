//Fazendo tabela Rides com mongoose
const mongoose = require('mongoose')
const Rides = mongoose.model('Ride') //acessando a table 'Rides'

const createRide = async (ride) => {
    return await Rides.create(ride)
}

const getRides = async () => {
    return await Rides.find()
}

//método protótipo para buscar um atributo ou mais
const getRidesByKeyValue = (vehicle, createdAt) => {
    const response = User.findOne({vehicle: vehicle, createdAt: createdAt})
    return response
}

module.exports = {
    createRide, getRides, getRidesByKeyValue
}
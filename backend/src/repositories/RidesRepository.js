//Fazendo tabela Rides com mongoose
const mongoose = require('mongoose')
const Rides = mongoose.model('Ride') //acessando a table 'Rides'

const createRide = async (ride) => {
    return await Rides.create(ride)
}

const getRides = async () => {
    return await Rides.find()
}

const startRide = async (ride) => {
    ride.startTime = new Date()
    ride.status = 'started'
    return await Ride.findByIdAndUpdate(ride.id, ride, {new: true})
}

const stopRide = async (ride) => {
    //campos que serão alterados
    ride.finishTime = new Date()
    ride.status = 'finished'
    return await Ride.findByIdAndUpdate(ride.id,
        ride, {new: true})
}

//método protótipo para buscar um atributo ou mais
const getRidesByTelephone = (telephone, page) => {
    return await Ride.paginate({'user.telephone': telephone}, {page, limit: 10})
}

const getRideById = async (id) => {
    return await Ride.findById(id)
}

module.exports = {
    createRide, getRides, getRidesByTelephone, getRideById, startRide, stopRide
}
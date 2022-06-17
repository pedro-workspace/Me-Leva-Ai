const ridesRepository = require('../repositories/RidesRepository');

//Objeto de retorno padrão
//statusCode, fornece a requisition
//data (armazena uma msg ou objeto)

const createRide = async (ride) => {
    try {
        const data = ridesRepository.createRide(ride);
        //validações para verificar o parâmetro
        if (!ride) {
            return {
                //tratamento de erro na camada 4
                statusCode: 500,
                data: error.message
            }
        }
        else{
            return {
                statusCode: 202,
                data: ['Corrida já inserido na base de dados', data]
            }
        }   
    }
    catch (error) {
        return {
            statusCode: 500,
            data:error.message
        }
    }
};

const getRides = async () => {
    try {
        console.log(ride)
        const data = await ridesRepository.getRides()
        return {
            statusCode: 200,
            data: data
        }
    }
    catch (error) {
        return {
            statusCode: 500,
            data: error.message
        }
    }
};

const getRidesByKeyValue = (vehicle, createdAt) => {
    try {
        const ride = ridesRepository.getRidesByKeyValue(vehicle, createdAt)
        if (rides) {
            return {
                statusCode: 200,
                data: ride
            }
        }
        else {
            return {
                statusCode: 404,
                data: {message: 'Corrida não encontrada'}
            }
        }
    }
    catch (error) {
        return {
            statusCode: 500,
            data: {
                message: 'Corrida não encontrada'
            }
        }
    }
};

//habilitando uso
module.exports = {
    createRide, getRides, getRidesByKeyValue
};
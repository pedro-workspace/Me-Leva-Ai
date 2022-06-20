const vehicleRepository = require('../repositories/VehicleRepository');

const createVehicleService = async (payload) => {
  // tratamento de erros
  // mapeamento de erros que acontecem e eu consigo prever
  try {
    // desestruturação para acessar os valores do payload
    const { licensePlate } = payload;

    // verificar se o payload está preenchido ou não
    if (!payload) {
      return {
        // tratar esse erro na camada 4
        statusCode: 400,
        data: 'Dados de veículo não informados!'
      }
    }
    // verificar se o veículo já existe na base caso exista retornar uma mensagem informando que o veículo já existe na base de dados
    const findVehicle = await vehicleRepository.vehicleByLicensePlate(licensePlate);
    if (findVehicle) {
      return {
        // tratar esse erro na camada 4
        statusCode: 400,
        data: 'Veículo já cadastrado na base'
      }
    }
    const data = await vehicleRepository.createVehicle(payload);
    if (data) {
      return {
        statusCode: 200,
        data: data
      }
    }
  }
  catch (error) {
    // erros que acontece durante a execução e a aplicação não consegue prever
    return {
      // tratar esse erro na camada 4
      statusCode: 500,
      data: error.message
    }
  }
}

const getVehicle = async () => {
  try {
    const data = await vehicleRepository.getVehicles();
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
}

const getVehicleByLicensePlate = async () => {
  try {
    const user = await vehicleRepository.getVehicleByLicensePlate(telephone, password);
    if (user) {
      return {
        statusCode: 200,
        data: user
      }
    }
    else {
      return {
        statusCode: 404,
        data: { message: 'Usuário não encontrado.' }
      }
    }
  }
  catch (error) {
    return {
      statusCode: 500,
      data: {
        message: 'Não foi possível obter o usuário.',
        error: error.message
      }
    }
  }
}

module.exports = {
  createVehicleService, getVehicle, getVehicleByLicensePlate
}

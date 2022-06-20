const userRepository = require('../repositories/UserRepository');

// trabalhando com um Objeto de retorno padrão
// statusCode (que vai armazenar o status da minha requisição)
// data (pode ser um objeto, mensagem)

const createUser = async (user) => {
  try {
    // criar validações para verificar o meu parametro user
      if (!user) {
        return {
          // tratar esse erro na camada 4
          statusCode: 500,
          data: error.message
        }
      }
      // antes de criar o usuario eu preciso verificar se o mesmo já nao existe na base
      const {telephone} = user
      const findUser = await userRepository.getUserByTelephone(telephone);
      if (findUser) {
        return {
          // tratar esse erro na camada 4
          statusCode: 400,
          data: 'Veículo já cadastrado na base'
      }
    }
      const data = userRepository.createUser(user);
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

const getUsers = async () => {
  try {
    const data = await userRepository.getUsers();
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

const getUserByTelephone = async (telephone) => {
  try {
    const user = await userRepository.getUserByTelephoneAndPassword(telephone);
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


// deixando os métodos disponíveis para uso
module.exports = {
  createUser, getUsers, getUserByTelephone
}

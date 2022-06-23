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

const getUserByTelephoneAndPassword = async (telephone, password) => {
  try {
    const user = await userRepository.getUserByTelephoneAndPassword(telephone, password);
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

//Ações que o usuário pode tomar

const loginService = async (payload) => {
  try{
    //tem senha e password?
    if (!(payload.telephone && payload.password)){
      return {
        statusCode: 400,
        data: "Telefone ou Senha não informado"
      }
    }
    //senha e password existe no banco de dados?
    const user = await userRepository.getUserByTelephoneAndPassword(payload.telefone, payload.password)

    if (!user) {
      return {
        statusCode: 500,
        data: "Usuário não encontrado"
      }
    }

    const userData = {
      telefone: user.telefone
    }

    //Autenticação por token JWT
    const token = jwt.sign({userData}, 'letsCode', {
      expiresIn: 3000 //tempo de expiração em milissegundos
    })

    //testando autenticação
    if (token) {
      const data = {
        auth: true,
        token: token,
        user: userData
      }
      return {
        statusCode: 200,
        data: data
      }
    }
    else {
      return {
        statusCode: 500,
        data: "Não foi possível gerar o token !"
      }
    }
  }
  catch {
    return {
      statusCode: 500,
      data: error.message
    }
  }
}




// deixando os métodos disponíveis para uso
module.exports = {
  createUser,
  getUsers,
  getUserByTelephoneAndPassword,
  loginService
}

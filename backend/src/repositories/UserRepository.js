// fazendo o uso da tabela de Usuario através do mongoose
const mongoose = require('mongoose');
const User = mongoose.model('User'); // acessando a tabela de usuario

const createUser = async (user) => {
  return await User.create(user);
}

const getUsers = async () => {
  return await User.find();
}

const getUserByTelephoneAndPassword = async (telephone, password) => {
  const response = await User.findOne({ telephone: telephone}, {password: password});
  return response;
}

const getUserByEmail = async (email) => {
  const response = await User.findOne({email: email})
  return response
}

const getUserByTelephone = (telephone) => {
  const response = await User.findOne({telephone: telephone})
  return response
}

// deixando os métodos disponíveis para uso
module.exports = {
  createUser, 
  getUsers, 
  getUserByTelephoneAndPassword,
  getUserByEmail,
  getUserByTelephone
}

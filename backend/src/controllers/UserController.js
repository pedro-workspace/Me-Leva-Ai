const userService = require('../services/UserService');

const postUsuario = async (req, res) => {
  const payload = req.body;
  const response = await userService.createUser(payload);
  return res.status(response.statusCode).json(response.data);

}
const getUsers = async (req, res) => {
  const response = await userService.getUsers();
  return res.status(response.statusCode).json(response.data);

}

const login = async (req, res) => {
  const {body} = req
  const response = await userService.loginService(body)
  return res.status(response.statusCode).json(response.data)
}

const getUserByTelephone = async (req, res) => {
  const { telephone} = req.params;
  const response = await userService.getUserByTelephone(telephone);
  return res.status(response.statusCode).json(response.data);
}

module.exports = {
  postUsuario,
  getUsers, 
  getUserByTelephone, 
  login
}
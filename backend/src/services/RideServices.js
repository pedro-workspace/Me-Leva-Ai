const ridesRepository = require('../repositories/RidesRepository');

//Objeto de retorno padrão
//statusCode, fornece a requisition
//data (armazena uma msg ou objeto)



//habilitando uso
module.exports = {
    createRide, 
    getRides, 
    getRidesByKeyValue
};
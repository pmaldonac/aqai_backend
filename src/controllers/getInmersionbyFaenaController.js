const repository = require('../repository/getInmersionByFaenaRepository');
const jwtUtils = require('../utils/jwtUtils');
exports.getInmersionByFaenaController = async (req,res) => {
  try {
      const token = req.headers.authorization
      const decodedToken = jwtUtils.verifyToken(token)
      if(!decodedToken){
          return res.status(401).json({status:401, message: "No autorizado."})
      }else{
          const idFaena = req.params.id
          const inmersionList = await repository.getInmersionByFaena(idFaena)
          return res.status(200).json({status:200, data: inmersionList})
      }
  } catch (error) {
    return res.status(500).json({status:500, message: "Hubo un error al recuperar las Inmersiones."})
  }
}
const repository = require("../repository/getClasificacionesRepository")
const jwtUtils = require('../utils/jwtUtils');
exports.getClasificacionesController = async(req,res) =>{
    try{
        const token = req.headers.authorization
        const decodedToken = jwtUtils.verifyToken(token)
        if(!decodedToken){
            return res.status(401).json({status:401, message: "No autorizado."})
        }else{
            let ClasificacionsList = await repository.getClasificacionRepository()
            return res.status(200).json({status:200, data:ClasificacionsList})
        }
    }catch(error){
        return res.status(500).json({status:500, message: "Hubo un error al recuperar las clasificaciones."})
    }
}
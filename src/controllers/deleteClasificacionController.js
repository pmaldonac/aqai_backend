const repository = require("../repository/deleteClasificacionRepository")
const jwtUtils = require('../utils/jwtUtils');

exports.deleteClasificacionController = async (req,res) =>{
    try{
        const token = req.headers.authorization
        const decodedToken = jwtUtils.verifyToken(token)
        if(!decodedToken){
            return res.status(401).json({status:401, message: "No autorizado."})
        }else{
            const id = req.params.id
            if(!id){
                return res.status(400).json({status:400, message:"Parámetro no encontrado"})
            }
            const Clasificacion = await repository.deleteClasificacion(id)
            return res.status(200).json({status:200, message:"Clasificacion eliminada con éxito."})
        }
    }catch(error){
        return res.status(500).json({status:500, message:"Error al eliminar la Clasificacion."})
    }
}
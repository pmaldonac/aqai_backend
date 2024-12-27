const repository = require("../repository/getActividadFaenaByClasificacionRepository")
const jwtUtils = require('../utils/jwtUtils');
exports.getActividadesFaenaByClasificacion = async(req,res) =>{
    try{
        const token = req.headers.authorization
        const decodedToken = jwtUtils.verifyToken(token)
        if(!decodedToken){
            return res.status(401).json({status:401, message: "No autorizado."})
        }else{
            const idClasificacion = req.params.id
            let ClasificacionList = await repository.getActicidadesFaenasByClasificacionRepository(idClasificacion)
            return res.status(200).json({status:200, data:ClasificacionList})
        }
    }catch(error){
        return res.status(500).json({status:500, message: "Hubo un error al recuperar las clasificaciones."})
    }
}
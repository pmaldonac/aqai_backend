const repository = require("../repository/updateDataloggerRepository")
const jwtUtils = require('../utils/jwtUtils');
exports.updateDataloggerController = async(req,res) =>{
    try{
        const token = req.headers.authorization
        const decodedToken = jwtUtils.verifyToken(token)
        if(!decodedToken){
            return res.status(401).json({status:401, message: "No autorizado."})
        }else{
        const id = req.params.id
        const data = req.body
        if(!data){
           res.status(400).json({status:400, message:"Faltan parámetros para realizar la actualización"}) 
        }
        const Datalogger = await repository.updateDataloggerRepository(id, data)
        res.status(200).json({status:200, message:"Datalogger Actualizada", data: Datalogger})
        }

    }catch(error){
        return res.status(500).json({
            status:500,
            message: "Hubo un error al editar el Datalogger"
        })
    }
}
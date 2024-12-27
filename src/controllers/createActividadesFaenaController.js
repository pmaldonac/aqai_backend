const repository = require("../repository/createActividadFaenaRepository")
const jwtUtils = require('../utils/jwtUtils');

exports.createActividadesFaenaController = async(req,res) =>{
    try{
        const token = req.headers.authorization
        const decodedToken = jwtUtils.verifyToken(token)
        
        if(!decodedToken){
            return res.status(401).json({status:401, message: "No autorizado."})
        }else{
            const data = req.body
            if(!data){
                return res.status(400).json({status:400, message: "Error al realizar solicitud. Verifique parámetros."})

            }
            let newActividad = await repository.createActivadesFaenaRepository(data.nombreActividad, data.esActivo, data.idClasificacion)
            return res.status(201).json({status:201, message: "Actividad creada con éxito.", data: newActividad})
        }
        
    }catch(error){
        return res.status(500).json({
            status:500,
            message: "Hubo un error al registrar la Actividad."
        })
    }
}
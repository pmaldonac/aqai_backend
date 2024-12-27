const repository = require("../repository/createBuzoRepository")
const jwtUtils = require('../utils/jwtUtils');

exports.createBuzoController = async(req,res) =>{
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
            let newBuzo = await repository.createBuzoRepository(data.nombre,data.apellido, data.rut, data.mail,data.compania,data.foto ,data.licenciaBuzo,data.licenciaBuzoVenc,data.examMedVenc,data.contrasena,data.certificados, data.estaHabilitado)
            return res.status(201).json({status:201, message: "Buzo creado con éxito.", data: newBuzo})
        }
       
    }catch(error){
        return res.status(500).json({
            status:500,
            message: `Hubo un error al registrar al Buzo: ${error}`
        })
    }
}
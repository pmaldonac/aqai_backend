const repository = require("../repository/createTeamRepository")
const jwtUtils = require('../utils/jwtUtils');

exports.createTeamController = async(req,res) =>{
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
        let newTeam = await repository.createTeamRepository(data.esActivo, data.nombreEmpresa, data.idBuzo, data.esSupervisor, data.fechaInicio)
        return res.status(201).json({status:201, message: "Team creado con éxito.", data: newTeam})}
    }catch(error){
        return res.status(500).json({
            status:500,
            message: "Hubo un error al registrar al Team."
        })
    }
}
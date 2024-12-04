const repository = require("../repository/createTeamRepository")

exports.createTeamController = async(req,res) =>{
    try{
        const data = req.body
        if(!data){
            return res.status(400).json({status:400, message: "Error al realizar solicitud. Verifique parámetros."})
        }
        let newTeam = await repository.createTeamRepository(data.esActivo, data.nombreEmpresa, data.idBuzo, data.esSupervisor, data.fechaInicio)
        return res.status(201).json({status:201, message: "Team creado con éxito.", data: newTeam})
    }catch(error){
        return res.status(500).json({
            status:500,
            message: "Hubo un error al registrar al Team."
        })
    }
}
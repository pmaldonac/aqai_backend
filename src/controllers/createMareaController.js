const repository = require("../repository/createMareaRepository")

exports.createMareaController = async(req,res) =>{
    try{
        const data = req.body
        if(!data){
            return res.status(400).json({status:400, message: "Error al realizar solicitud. Verifique parámetros."})
        }
        let newMarea = await repository.createMareaRepository(data.nombreCompania, data.fechaInicio, data.fechaFin, data.idTeam)
        return res.status(201).json({status:201, message: "Marea creado con éxito.", data: newMarea})
    }catch(error){
        return res.status(500).json({
            status:500,
            message: "Hubo un error al registrar la Marea."
        })
    }
}
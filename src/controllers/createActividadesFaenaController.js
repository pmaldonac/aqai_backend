const repository = require("../repository/createActividadFaenaRepository")

exports.createActividadesFaenaController = async(req,res) =>{
    try{
        const data = req.body
        if(!data){
            return res.status(400).json({status:400, message: "Error al realizar solicitud. Verifique parámetros."})
        }
        let newActividad = await repository.createActivadesFaenaRepository(data.nombreActividad, data.esActivo, data.idClasificacion)
        return res.status(201).json({status:201, message: "Actividad creada con éxito.", data: newActividad})
    }catch(error){
        return res.status(500).json({
            status:500,
            message: "Hubo un error al registrar la Actividad."
        })
    }
}
const repository = require("../repository/createDataloggerRepository")

exports.createDataloggerController = async(req,res) =>{
    try{
        const data = req.body
        if(!data){
            return res.status(400).json({status:400, message: "Error al realizar solicitud. Verifique parámetros."})
        }
        let Datalogger = await repository.createDataloggerRepository(data.idBuzo, data.idFaena, data.dispositivo)
        return res.status(201).json({status:201, message: "Datalogger creado con éxito.", data: Datalogger})
    }catch(error){
        return res.status(500).json({
            status:500,
            message: "Hubo un error al registrar el Datalogger."
        })
    }
}
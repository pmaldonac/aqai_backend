const repository = require("../repository/createClasificacionRepository")

exports.createClasificacionController = async(req,res) =>{
    try{
        const data = req.body
        if(!data){
            return res.status(400).json({status:400, message: "Error al realizar solicitud. Verifique parámetros."})
        }
        let Clasificacion = await repository.createClasificacionRepository(data.nombreFaena, data.estaHabilitado)
        return res.status(201).json({status:201, message: "Clasificación creada con éxito.", data: Clasificacion})
    }catch(error){
        return res.status(500).json({
            status:500,
            message: "Hubo un error al registrar la Clasificación."
        })
    }
}
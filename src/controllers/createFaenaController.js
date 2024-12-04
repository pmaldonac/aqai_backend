const repository = require("../repository/createFaenaRepository")

exports.createFaenaController = async(req,res) =>{
    try{
        const data = req.body
        if(!data){
            return res.status(400).json({status:400, message: "Error al realizar solicitud. Verifique parámetros."})
        }
        let newFaena = await repository.createFaenaRepository(data.idMarea, data.fechaInicio, data.fechaFin, data.idClasificacion,data.estado)
        return res.status(201).json({status:201, message: "Faena creada con éxito.", data: newFaena})
    }catch(error){
        return res.status(500).json({
            status:500,
            message: "Hubo un error al registrar la Faena"
        })
    }
}
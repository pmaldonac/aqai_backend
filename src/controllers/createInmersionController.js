const repository = require("../repository/createInmersionRepository")

exports.createInmersionController = async(req,res) =>{
    try{
        const data = req.body
        if(!data){
            return res.status(400).json({status:400, message: "Error al realizar solicitud. Verifique parámetros."})
        }
        let newInmersion = await repository.createInmersionRepository(data.idBuzo, data.idFaena, data.tiempoInicio, data.tiempoFinal, data.tiempoTotal, data.fotoInicial, data.fotoFinal, data.observacion)
        return res.status(201).json({status:201, message: "Inmersión creada con éxito.", data: newInmersion})
    }catch(error){
        return res.status(500).json({
            status:500,
            message: `Hubo un error al registrar la Inmersion: ${error}`
        })
    }
}
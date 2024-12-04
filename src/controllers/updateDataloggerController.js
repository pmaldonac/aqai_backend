const repository = require("../repository/updateDataloggerRepository")

exports.updateDataloggerController = async(req,res) =>{
    try{
        const id = req.params.id
        const data = req.body
        if(!data){
           res.status(400).json({status:400, message:"Faltan parámetros para realizar la actualización"}) 
        }
        const Datalogger = await repository.updateDataloggerRepository(id, data)
        res.status(200).json({status:200, message:"Datalogger Actualizada", data: Datalogger})

    }catch(error){
        return res.status(500).json({
            status:500,
            message: "Hubo un error al editar el Datalogger"
        })
    }
}
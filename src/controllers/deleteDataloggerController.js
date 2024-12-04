const repository = require("../repository/deleteDataloggerRepository")

exports.deleteDataloggerController = async (req,res) =>{
    try{
        const id = req.params.id
        if(!id){
            return res.status(400).json({status:400, message:"Parámetro no encontrado"})
        }
        const Datalogger = await repository.deleteDataloggerRepository(id)
        return res.status(200).json({status:200, message:"Datalogger eliminado con éxito."})
    }catch(error){
        return res.status(500).json({status:500, message:"Error al eliminar el Datalogger."})
    }
}
const repository = require("../repository/deleteMareaRepository")

exports.deleteMareaController = async (req,res) =>{
    try{
        const id = req.params.id
        if(!id){
            return res.status(400).json({status:400, message:"Parámetro no encontrado"})
        }
        const marea = await repository.deleteMareaRepository(id)
        return res.status(200).json({status:200, message:"Marea eliminada con éxito."})
    }catch(error){
        return res.status(500).json({status:500, message:"Error al eliminar la Marea."})
    }
}
const repository = require("../repository/deleteActividadFaenaRepository")

exports.deleteActividadFaenaController = async (req,res) =>{
    try{
        const id = req.params.id
        if(!id){
            return res.status(400).json({status:400, message:"Parámetro no encontrado"})
        }
        const ActividadFaena = repository.deleteActividadesFaena(id)
        return res.status(200).json({status:200, message:"Actividad Faena eliminada con éxito."})
    }catch(error){
        return res.status(500).json({status:500, message:"Error al eliminar la Actividad Faena."})
    }
}
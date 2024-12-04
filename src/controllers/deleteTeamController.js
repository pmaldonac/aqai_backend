const repository = require("../repository/deleteTeamRepository")

exports.deleteTeamController = async (req,res) =>{
    try{
        const id = req.params.id
        if(!id){
            return res.status(400).json({status:400, message:"Parámetro no encontrado"})
        }
        const team = await repository.deleteTeamRepository(id)
        return res.status(200).json({status:200, message:"Team eliminado con éxito."})
    }catch(error){
        return res.status(500).json({status:500, message:"Error al eliminar el team."})
    }
}
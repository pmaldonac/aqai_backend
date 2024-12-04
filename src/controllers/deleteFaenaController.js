const repository = require("../repository/deleteFaenaRepository")

exports.deleteFaenaController = async (req,res) =>{
    try{
        const id = req.params.id
        if(!id){
            return res.status(400).json({status:400, message:"Parámetro no encontrado"})
        }
        const Faena = await repository.deleteFaenaRepository(id)
        return res.status(200).json({status:200, message:"Faena eliminada con éxito."})
    }catch(error){
        return res.status(500).json({status:500, message:"Error al eliminar la Faena."})
    }
}
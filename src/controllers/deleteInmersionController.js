const repository = require("../repository/deleteInmersionRepository")

exports.deleteInmersionController = async (req,res) =>{
    try{
        const {idFaena, idBuzo} = req.params
        if(!idFaena || !idBuzo){
            return res.status(400).json({status:400, message:"Parámetro no encontrado"})
        }
        const inmersion = await repository.deleteInmersionRepository(idFaena, idBuzo)
        return res.status(200).json({status:200, message:"Inmersión eliminada con éxito."})
    }catch(error){
        return res.status(500).json({status:500, message:"Error al eliminar la Inmersión."})
    }
}
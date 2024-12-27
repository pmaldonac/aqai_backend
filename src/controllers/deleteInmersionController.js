const repository = require("../repository/deleteInmersionRepository")
const jwtUtils = require('../utils/jwtUtils');

exports.deleteInmersionController = async (req,res) =>{
    try{
        const token = req.headers.authorization
        const decodedToken = jwtUtils.verifyToken(token)
        if(!decodedToken){
            return res.status(401).json({status:401, message: "No autorizado."})
        }else{
        const {idFaena, idBuzo} = req.params
        if(!idFaena || !idBuzo){
            return res.status(400).json({status:400, message:"Parámetro no encontrado"})
        }
        const inmersion = await repository.deleteInmersionRepository(idFaena, idBuzo)
        return res.status(200).json({status:200, message:"Inmersión eliminada con éxito."})}
    }catch(error){
        return res.status(500).json({status:500, message:"Error al eliminar la Inmersión."})
    }
}
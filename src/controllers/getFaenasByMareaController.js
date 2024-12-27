const repository = require("../repository/getFaenasByMareaRepository")
const jwtUtils = require('../utils/jwtUtils');
exports.getFaenasByMareaController = async(req,res) =>{
    try{
        const token = req.headers.authorization
        const decodedToken = jwtUtils.verifyToken(token)
        if(!decodedToken){
            return res.status(401).json({status:401, message: "No autorizado."})
        }else{
            const idMarea = req.params.id
            let FaenaList = await repository.getFaenasByMareaRepository(idMarea)
            return res.status(200).json({status:200, data:FaenaList})
        }
    }catch(error){
        return res.status(500).json({status:500, message: "Hubo un error al recuperar las faenas."})
    }
}
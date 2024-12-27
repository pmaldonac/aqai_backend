const repository = require("../repository/getMareaRepository")
const jwtUtils = require('../utils/jwtUtils');
exports.getMareaController = async(req,res) =>{
    try{
        const token = req.headers.authorization
        const decodedToken = jwtUtils.verifyToken(token)
        if(!decodedToken){
            return res.status(401).json({status:401, message: "No autorizado."})
        }else{
            let MareaList = await repository.getMareaRepository()
            return res.status(200).json({status:200, data:MareaList})
        }
    }catch(error){
        return res.status(500).json({status:500, message: "Hubo un error al recuperar las mareas."})
    }
}
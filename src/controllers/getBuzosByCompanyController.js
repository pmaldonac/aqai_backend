const repository = require("../repository/getBuzosByCompanyRepository")
const jwtUtils = require('../utils/jwtUtils');
exports.getBuzosController = async(req,res) =>{
    try{
        const token = req.headers.authorization
        const decodedToken = jwtUtils.verifyToken(token)
        if(!decodedToken){
            return res.status(401).json({status:401, message: "No autorizado."})
        }else{
            const company = req.params.company
            let BuzosList = await repository.getBuzoRepository(company)
            return res.status(200).json({status:200, data:BuzosList})
        }
    }catch(error){
        return res.status(500).json({status:500, message: "Hubo un error al recuperar los buzos."})
    }
}
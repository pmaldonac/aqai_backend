const repository = require("../repository/getMareaRepository")

exports.getMareaController = async(req,res) =>{
    try{
        let MareaList = await repository.getMareaRepository()
        return res.status(200).json({status:200, data:MareaList})
    }catch(error){
        return res.status(500).json({status:500, message: "Hubo un error al recuperar las mareas."})
    }
}
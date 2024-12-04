const repository = require("../repository/getTeamRepository")

exports.getTeamsController = async(req,res) =>{
    try{
        let TeamList = await repository.getTeamRepository()
        return res.status(200).json({status:200, data:TeamList})
    }catch(error){
        return res.status(500).json({status:500, message: "Hubo un error al recuperar los teams."})
    }
}
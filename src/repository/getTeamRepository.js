const Team = require("../models/Team")

exports.getTeamRepository = async() =>{
    try{
        let teamList = await Team.findAll({
            attributes: ["id", "esActivo"]
        })
        return teamList
    }catch(error){
        throw new Error(`Error al obtener teams: ${error.message}`);
    }
}
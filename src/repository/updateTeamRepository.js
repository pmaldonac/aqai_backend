const Team = require("../models/Team")

exports.updateTeamRepository = async(id,data)=>{
    try{
        const team = await Team.findByPk(id)
        if (!team) {
            throw new Error(`Team con ID ${id} no encontrado.`);
        }
        const updatedTeam = await team.update(data)
        return updatedTeam
    }catch(error){
        throw new Error(`Error al actualizar el Team: ${error.message}`);
    }

}
const Team = require("../models/Team")

exports.deleteTeamRepository = async (id) =>{
    try{
        const team = await Team.findByPk(id)
        if (!team) {
            throw new Error(`Team con ID ${id} no encontrado.`);
        }
        const deletedTeam = await team.destroy()
        return deletedTeam
    }catch(error){
        throw new Error(`Error al eliminar el Team: ${error.message}`);
    }

}
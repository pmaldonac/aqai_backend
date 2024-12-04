const BuzoTeam = require("../models/BuzoTeam")
const Team = require("../models/Team")
const sequelize = require("../../config/db") 

exports.createTeamRepository = async (esActivo, nombreEmpresa, idBuzo, esSupervisor, fechaInicio) => {
    const transaction = await sequelize.transaction()
    try {
 
        const newTeam = await Team.create(
            {
                esActivo,
                nombreEmpresa,
            },
            {
                fields: ["esActivo", "nombreEmpresa"],
                transaction, 
            }
        )
        const idTeam = newTeam.dataValues.id

        const newBuzoTeam = await BuzoTeam.create(
            {
                esSupervisor,
                fechaInicio,
                idBuzo,
                idTeam,
            },
            {
                fields: ["esSupervisor", "fechaInicio", "idBuzo", "idTeam"],
                transaction,
            }
        )

        await transaction.commit()

        return newBuzoTeam 
    } catch (error) {
        await transaction.rollback()
        throw new Error(`Error al crear Team o BuzoTeam: ${error.message}`)
    }
};

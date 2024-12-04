
const sequelize = require("../../config/db")
const Marea = require("../models/Marea")
const MareaTeam = require("../models/MareaTeam")

exports.createMareaRepository = async(nombreCompania, fechaInicio, fechaFin, idTeam) =>{
    const transaction = await sequelize.transaction()
    try{
        let newMarea = await Marea.create(
            {
                nombreCompania,
                fechaInicio,
                fechaFin
            },
            {
                fields:["nombreCompania", "fechaInicio", "fechaFin"],
                transaction
            }
        )
        const idMarea = newMarea.dataValues.id
        
        const newMareaTeam = await MareaTeam.create(
            {
                idMarea,
                idTeam
            },
            {
                fields:["idMarea", "idTeam"],
                transaction
            }
        )
        await transaction.commit()
        return newMareaTeam
    }catch(error){
        await transaction.rollback()
        throw new Error(`Error al crear Marea o MareaTeam: ${error.message}`)
    }
}
const Faena = require("../models/Faena")
const sequelize = require("../../config/db")
const FaenaClasificacion = require("../models/FaenaClasificacion")

exports.createFaenaRepository = async(idMarea, fechaInicio, fechaFin, idClasificacion ,estado) =>{
    const transaction = await sequelize.transaction()
    try{
        let newFaena = await Faena.create(
            {
                idMarea,
                fechaInicio,
                fechaFin,
                estado
            },
            {
                fields:["idMarea", "fechaInicio", "fechaFin", "estado" ],
                transaction
            }
        )
        const idFaena = newFaena.dataValues.id
        const newFaenaClasificacion = await FaenaClasificacion.create(
            {
                idFaena,
                idClasificacion
            },
            {
                fields:["idFaena", "idClasificacion"],
                transaction
            }
            
        )
        await transaction.commit()
        return newFaena
    }catch(error){
        await transaction.rollback()
        throw new Error(`Error al crear Faena o FaenaClasificacion: ${error.message}`)
    }
}
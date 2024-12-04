const Inmersion = require("../models/Inmersion")
const sequelize = require("../../config/db")
const Buzo = require("../models/Buzo")
const Faena = require("../models/Faena")

exports.createInmersionRepository = async (idBuzo, idFaena, tiempoInicio, tiempoFinal,tiempoTotal, fotoInicial, fotoFinal, observacion) => {
  const transaction = await sequelize.transaction()
  try {
    const buzoExists = await Buzo.findByPk(idBuzo)
    if (!buzoExists) {
      throw new Error(`El buzo con ID ${idBuzo} no existe.`)
    }

    const faenaExists = await Faena.findByPk(idFaena)
    if (!faenaExists) {
      throw new Error(`La faena con ID ${idFaena} no existe.`)
    }

    const newInmersion = await Inmersion.create(
      {
        idBuzo,
        idFaena,
        tiempoInicio,
        tiempoFinal,
        tiempoTotal,
        fotoInicial,
        fotoFinal,
        observacion
      },
      {
        fields: ["idBuzo", "idFaena", "tiempoInicio", "tiempoFinal", "tiempoTotal","fotoInicial", "fotoFinal","observacion" ],
        transaction,
      }
    )
    await transaction.commit()
    return newInmersion
  } catch (error) {
    await transaction.rollback()
    throw new Error(`Error al crear Inmersión: ${error.message}`)
  }
};

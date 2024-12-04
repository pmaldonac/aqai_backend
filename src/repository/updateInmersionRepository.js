const Inmersion = require("../models/Inmersion")

exports.updateInmersionRepository = async (idBuzo, idFaena, data) => {
  try {

    const inmersion = await Inmersion.findOne({
      where: {
        idBuzo,
        idFaena,
      },
    })

    if (!inmersion) {
      throw new Error(
        `Inmersión con idBuzo ${idBuzo} e idFaena ${idFaena} no encontrada.`
      )
    }

    const updatedInmersion = await inmersion.update(data)
    return updatedInmersion
  } catch (error) {
    throw new Error(`Error al actualizar la inmersión: ${error.message}`)
  }
};

const Inmersion = require("../models/Inmersion")

exports.deleteInmersionRepository = async (idFaena, idBuzo) => {
  try {
    const inmersion = await Inmersion.findOne({
      where: {
        idFaena,
        idBuzo,
      },
    })

    if (!inmersion) {
      throw new Error(`Inmersión con idFaena ${idFaena} e idBuzo ${idBuzo} no encontrada.`);
    }

    await inmersion.destroy()

    return { message: `Inmersión con idFaena ${idFaena} e idBuzo ${idBuzo} eliminada exitosamente.` }
  } catch (error) {
    throw new Error(`Error al eliminar la inmersión: ${error.message}`)
  }
}
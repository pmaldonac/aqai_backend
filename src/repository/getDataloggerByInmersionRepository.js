const Datalogger = require("../models/Datalogger");

exports.getDataloggerByInmersion = async (idBuzo, idFaena) => {
  try {
    if (!idBuzo || !idFaena) {
      throw new Error("Los parámetros idBuzo e idFaena son obligatorios.");
    }

    const dataloggerList = await Datalogger.findAll({
      where: {
        idBuzo: idBuzo,
        idFaena: idFaena,
      },
    });

    return dataloggerList;
  } catch (error) {
    throw new Error(`Error al obtener Datalogger por inmersión: ${error.message}`);
  }
};

const Datalogger = require("../models/Datalogger");

exports.createDataloggerRepository = async (idBuzo, idFaena, dispositivo) => {
  try {
    const newDatalogger = await Datalogger.create(
      {
        idBuzo,
        idFaena,
        dispositivo,
      },
      {
        fields: ["idBuzo", "idFaena", "dispositivo"],
      }
    );
    return newDatalogger;
  } catch (error) {
    throw new Error(`Error al crear el Datalogger: ${error.message}`);
  }
};

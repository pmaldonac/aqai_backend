const Inmersion = require("../models/Inmersion")
const Buzo = require("../models/Buzo")

exports.getInmersionByFaena = async(idFaena) =>{
    try{
        const inmersionList = await Inmersion.findAll({
            where: { idFaena },
            include:[{model:Buzo}]
          });
          return inmersionList
    }catch(error){
        throw new Error(`Error al obtener Inmersiones por Faena: ${error.message}`);
    }
}